import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import "dotenv/config";

const DRY_RUN = process.env.DRY_RUN === "true";

function createPrismaClient() {
  const pool = new Pool({ 
    user: process.env.DB_USER || "postgres.oqaxpfldczldfmbuopbn",
    password: process.env.DB_PASSWORD || "Rizwan99636?",
    host: process.env.DB_HOST || "aws-1-ap-southeast-1.pooler.supabase.com",
    port: parseInt(process.env.DB_PORT || "5432"),
    database: process.env.DB_NAME || "postgres",
    ssl: { rejectUnauthorized: false }
  });
  const adapter = new PrismaPg(pool);
  return new PrismaClient({ adapter });
}

const prisma = createPrismaClient();

async function main() {
  console.log(`🚀 Level 5 Production Sync Patch (Scoped)`);
  console.log(`MODE: ${DRY_RUN ? "DRY RUN (Read-Only)" : "EXECUTION (Write)"}`);
  console.log(`Target: Production Database`);
  console.log(`--------------------------------------------------`);

  // --- DATA DEFINITION: LEVEL 5 MODULES ---
  const level5Modules = [
    { level: 5, moduleNumber: "5.1", title: "Evidence Stack Framework", objective: "Identify and weigh multiple structural clues to form a high-probability market reading.", skillLevel: "advanced", marketTrack: "core", orderIndex: 1 },
    { level: 5, moduleNumber: "5.2", title: "Primary vs Alternative Scenario", objective: "Build two-way branching logic to maintain objectivity and prevent narrative lock.", skillLevel: "advanced", marketTrack: "core", orderIndex: 2 },
    { level: 5, moduleNumber: "5.3", title: "Invalidation and Review Conditions", objective: "Define the exact structural conditions under which a scenario is no longer valid.", skillLevel: "advanced", marketTrack: "core", orderIndex: 3 },
    { level: 5, moduleNumber: "5.4", title: "Context Alignment Across Timeframes", objective: "Synthesize HTF narrative with LTF structural evidence to build aligned scenario plans.", skillLevel: "advanced", marketTrack: "core", orderIndex: 4 },
    { level: 5, moduleNumber: "5.5", title: "Structural Conflict and Unclear Areas", objective: "Identify when the evidence stack is too conflicted to form a valid scenario plan.", skillLevel: "advanced", marketTrack: "core", orderIndex: 5 },
    { level: 5, moduleNumber: "5.6", title: "Confirmation vs Assumption", objective: "Distinguish between 'expecting' a move and 'confirming' it through structural shift.", skillLevel: "advanced", marketTrack: "core", orderIndex: 6 },
    { level: 5, moduleNumber: "5.7", title: "Scenario Review Under Pressure", objective: "Practice maintaining objectivity and following logic when price delivery is volatile.", skillLevel: "advanced", marketTrack: "core", orderIndex: 7 },
    { level: 5, moduleNumber: "5.8", title: "Intermarket Context as Supporting Evidence", objective: "Integrate DXY and related asset context into the evidence stack.", skillLevel: "advanced", marketTrack: "core", orderIndex: 8 },
    { level: 5, moduleNumber: "5.9", title: "Journal-Based Decision Review", objective: "Audit the decision-making process using session journals and scenario mapping.", skillLevel: "advanced", marketTrack: "core", orderIndex: 9 },
    { level: 5, moduleNumber: "5.10", title: "Scenario Planning Map", objective: "Synthesize all Level 5 concepts into a complete scenario planning workflow and complete the capstone mission.", skillLevel: "advanced", marketTrack: "core", orderIndex: 10 },
  ];

  // --- DATA DEFINITION: LEVEL 5 TEST ---
  const level5Test = {
    level: 5,
    title: "Level 5 Scenario Planning Test",
    questionsPerAttempt: 20,
    passThreshold: 85,
    timeLimitMin: 45,
  };

  // --- DATA DEFINITION: GATE SCENARIO ---
  const gateScenario = {
    slug: "level-5-scenario-planning-gate",
    title: "Level 5 Scenario Planning Review",
    description: "Capstone synthesis mission for Level 5 — Evidence-Based Scenario Planning.",
    scenarioType: "structure_annotation",
    status: "active",
    marketTrack: "multi",
    level: 5,
    instrument: "EURUSD",
    timeframe: "1H",
    candleSourceType: "curated",
    prompt: "Using the Scenario Planning Map workflow, identify the Review Area...",
    passThreshold: 85,
    xpAward: 750,
  };

  // --- SYNC LOGIC: MODULES ---
  console.log(`Checking CourseModule (Level 5)...`);
  let modulesToCreate = 0;
  let modulesToUpdate = 0;
  for (const mod of level5Modules) {
    const existing = await prisma.courseModule.findUnique({
      where: { level_moduleNumber: { level: mod.level, moduleNumber: mod.moduleNumber } }
    });
    if (existing) {
      console.log(`  [UPDATE] Module ${mod.moduleNumber}: ${mod.title}`);
      modulesToUpdate++;
    } else {
      console.log(`  [CREATE] Module ${mod.moduleNumber}: ${mod.title}`);
      modulesToCreate++;
    }
  }

  // --- SYNC LOGIC: KNOWLEDGE TEST ---
  console.log(`Checking KnowledgeTest (Level 5)...`);
  const existingTest = await prisma.knowledgeTest.findUnique({ where: { level: 5 } });
  console.log(`  [${existingTest ? "UPDATE" : "CREATE"}] Level 5 Knowledge Test`);

  // --- SYNC LOGIC: TRAINING SCENARIO ---
  console.log(`Checking TrainingScenario (Gate)...`);
  const existingGate = await prisma.trainingScenario.findUnique({ where: { slug: gateScenario.slug } });
  console.log(`  [${existingGate ? "UPDATE" : "CREATE"}] ${gateScenario.slug}`);

  console.log(`--------------------------------------------------`);
  console.log(`SUMMARY OF TARGETS:`);
  console.log(`- CourseModule (Level 5): ${modulesToCreate + modulesToUpdate} total (${modulesToCreate} to create, ${modulesToUpdate} to update)`);
  console.log(`- KnowledgeTest (Level 5): 1`);
  console.log(`- TrainingScenario: 1`);
  console.log(`--------------------------------------------------`);
  
  if (DRY_RUN) {
    console.log(`DRY RUN COMPLETE. No changes were made to production.`);
  } else {
    console.log(`EXECUTION MODE is not yet approved.`);
  }
}

main()
  .catch(e => {
    console.error(`❌ SYNC FAILED:`, e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
