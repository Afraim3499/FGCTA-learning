
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({ 
  user: "postgres.oqaxpfldczldfmbuopbn",
  password: "Afraim9934?",
  host: "aws-1-ap-southeast-1.pooler.supabase.com",
  port: 5432,
  database: "postgres",
  ssl: { rejectUnauthorized: false }
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const moduleId = "m2-12"; 
  const scenarioSlug = "m2-level-2-map-review-v1";

  console.log(`Seeding Chart Mapping Mission for ${moduleId}...`);

  // 1. Generate Deterministic Candle Data
  const candleData = [];
  const baseTime = 1777144000; 
  
  for (let i = 0; i < 100; i++) {
    const time = baseTime + (i * 3600);
    let open, high, low, close;
    if (i < 40) {
      open = 1.0900 + (i * 0.0004);
      close = open + 0.0003;
      high = close + 0.0001;
      low = open - 0.0001;
    } else if (i < 80) {
      const noise = Math.sin(i * 0.5) * 0.0020;
      open = 1.1000 + noise;
      close = open + (Math.random() * 0.0005 - 0.00025);
      high = Math.max(open, close) + 0.0002;
      low = Math.min(open, close) - 0.0002;
    } else {
      open = 1.0950 + (i - 80) * 0.0001;
      close = open + 0.0002;
      high = close + 0.0001;
      low = open - 0.0001;
    }
    candleData.push({ time, open, high, low, close });
  }

  const rangeStartTime = candleData[40].time;
  const rangeEndTime = candleData[99].time;

  // 2. Define Validation Requirements (V2)
  const requirements = [
    { id: "range_high", label: "Range High", type: "horizontal_line", price: 1.1025, tolerance: 0.0005, weight: 12.5, explanation: "The obvious peak of the sideways expansion." },
    { id: "range_low", label: "Range Low", type: "horizontal_line", price: 1.0980, tolerance: 0.0005, weight: 12.5, explanation: "The obvious floor where buyers stepped in." },
    { id: "midpoint", label: "Midpoint", type: "horizontal_line", price: 1.1002, tolerance: 0.0005, weight: 12.5, explanation: "The 50% equilibrium of the range." },
    { id: "supply", label: "Supply Zone", type: "box", timeStart: rangeStartTime, timeEnd: rangeEndTime, priceMin: 1.1015, priceMax: 1.1035, tolerance: 60, weight: 12.5, explanation: "Planning area for sells near Range High." },
    { id: "demand", label: "Demand Zone", type: "box", timeStart: rangeStartTime, timeEnd: rangeEndTime, priceMin: 1.0970, priceMax: 1.0990, tolerance: 60, weight: 12.5, explanation: "Planning area for buys near Range Low." },
    { id: "target_up", label: "Target High", type: "box", timeStart: rangeStartTime, timeEnd: rangeEndTime, priceMin: 1.1040, priceMax: 1.1060, tolerance: 50, weight: 12.5, explanation: "Logical target area above the obvious high." },
    { id: "target_down", label: "Target Low", type: "box", timeStart: rangeStartTime, timeEnd: rangeEndTime, priceMin: 1.0950, priceMax: 1.0970, tolerance: 50, weight: 12.5, explanation: "Logical target area below the obvious low." },
    { id: "no_trade", label: "No-Trade Middle", type: "box", timeStart: rangeStartTime, timeEnd: rangeEndTime, priceMin: 1.0995, priceMax: 1.1010, tolerance: 50, weight: 12.5, explanation: "The messy middle where risk/reward is poor." }
  ];

  // 3. Upsert Scenario
  const scenarioData = {
    title: "Level 2 Mastery: Complete Chart Map",
    prompt: "Mark the Range High, Range Low, Midpoint, Supply/Demand zones, Targets, and the Messy Middle on this EURUSD 1H chart.",
    scenarioType: "structure_annotation" as any,
    status: "active" as any,
    level: 2,
    marketTrack: "forex" as any,
    instrument: "EURUSD",
    timeframe: "1H",
    candleSourceType: "curated" as any,
    candleData: candleData as any,
    expectedActions: { requirements } as any,
    gradingRubric: { items: requirements } as any,
    passThreshold: 80,
    xpAward: 50,
    metadata: {
      interactionMode: "chart_markup_v2",
      requirements: requirements
    }
  };

  const scenario = await prisma.trainingScenario.upsert({
    where: { slug: scenarioSlug },
    update: scenarioData,
    create: {
      ...scenarioData,
      slug: scenarioSlug
    }
  });

  // 4. Link to Module
  const m2_12 = await prisma.courseModule.findUnique({
    where: { level_moduleNumber: { level: 2, moduleNumber: '2.12' } }
  });

  if (!m2_12) throw new Error("Module 2.12 not found in DB");

  await prisma.moduleScenarioLink.upsert({
    where: {
      moduleId_scenarioId: {
        moduleId: m2_12.id,
        scenarioId: scenario.id
      }
    },
    update: {
      sortOrder: 1,
      requiredForProgress: true,
      minScore: 80
    },
    create: {
      moduleId: m2_12.id,
      scenarioId: scenario.id,
      sortOrder: 1,
      requiredForProgress: true,
      minScore: 80
    }
  });

  console.log(`Success: Mission seeded and linked to Module 2.12. ID: ${scenario.id}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
