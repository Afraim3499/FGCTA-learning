import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import 'dotenv/config';

const pool = new Pool({ 
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const MODULE_0_3_ID = '1b4c12b0-ce2b-4fc2-b240-e273a40be97d'; // 0.3 Platform Orientation

  console.log('🌱 Seeding Mission 1: Level 0 Order Entry...');

  // 1. Create TrainingScenario
  const scenario = await prisma.trainingScenario.upsert({
    where: { slug: 'l0-sync-order-entry-v1' },
    update: {},
    create: {
      slug: 'l0-sync-order-entry-v1',
      title: 'Mission 1: Practice Setup',
      description: 'Synchronize your execution engine by placing your first demo order with mandatory risk controls.',
      scenarioType: 'order_entry',
      status: 'active',
      marketTrack: 'multi',
      level: 0,
      instrument: 'EURUSD',
      timeframe: '5m',
      candleSourceType: 'live_snapshot',
      prompt: 'Execute a 0.01 lot EURUSD Market Order. You MUST set a Stop Loss and a Take Profit that results in at least 2.0R reward.',
      expectedActions: {
        action: 'open_order',
        lotSize: 0.01,
        mandatorySL: true,
        mandatoryTP: true,
        minRR: 2.0
      },
      gradingRubric: {
        correct_instrument: 10,
        correct_size: 20,
        valid_sl: 25,
        valid_tp: 20,
        min_2r: 15,
        discipline: 10
      },
      passThreshold: 90,
      xpAward: 25,
      scenarioVersion: 1,
      engineVersion: '1.0.0',
      graderVersion: '1.0.0',
      metadata: {
        maxLotSize: 0.01,
        lockInstrument: true
      }
    }
  });

  console.log(`✅ Scenario created: ${scenario.slug}`);

  // 2. Create ModuleScenarioLink
  await prisma.moduleScenarioLink.upsert({
    where: {
      moduleId_scenarioId: {
        moduleId: MODULE_0_3_ID,
        scenarioId: scenario.id
      }
    },
    update: {},
    create: {
      moduleId: MODULE_0_3_ID,
      scenarioId: scenario.id,
      requiredForProgress: false,
      sortOrder: 0,
      xpAward: 25
    }
  });

  console.log(`✅ Module Link created for Module 0.3`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
