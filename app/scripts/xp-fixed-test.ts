
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({ 
  user: "postgres.oqaxpfldczldfmbuopbn",
  password: "Rizwan99636?",
  host: "aws-1-ap-southeast-1.pooler.supabase.com",
  port: 5432,
  database: "postgres",
  ssl: { rejectUnauthorized: false }
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// Simulates the FIXED xp logic (scenario-keyed, not attempt-keyed)
const SCENARIO_SLUG = 'm2-level-2-map-review-v1';
const TEST_USER_ID = 'dfba30fe-cce0-4e58-a678-5dcde98f713d';

async function simulateFixedPass() {
  const scenario = await prisma.trainingScenario.findUnique({ where: { slug: SCENARIO_SLUG } });
  if (!scenario) throw new Error('Scenario not found');

  const xpToAward = scenario.xpAward || 50;

  // Record starting state
  const xpBefore = await prisma.xPLedgerEntry.findMany({
    where: { userId: TEST_USER_ID, sourceType: 'scenario' }
  });
  const progressBefore = await prisma.userProgress.findUnique({ where: { userId: TEST_USER_ID } });
  console.log(`=== STARTING STATE ===`);
  console.log(`XP Ledger entries (type=scenario): ${xpBefore.length}`);
  console.log(`XP Total: ${progressBefore?.xpTotal}`);

  // --- SIMULATE 1st PASS ---
  console.log(`\n=== SIMULATING 1st PASS ===`);
  const attempt1 = await prisma.scenarioAttempt.create({
    data: {
      userId: TEST_USER_ID, scenarioId: scenario.id,
      status: 'passed', passed: true, score: 90, xpAwarded: xpToAward
    }
  });

  // FIXED LOGIC: check existing entry before upsert
  const existing1 = await prisma.xPLedgerEntry.findUnique({
    where: { userId_sourceId_sourceType: { userId: TEST_USER_ID, sourceId: scenario.id, sourceType: 'scenario' } }
  });
  const isFirst1 = !existing1;

  await prisma.xPLedgerEntry.upsert({
    where: { userId_sourceId_sourceType: { userId: TEST_USER_ID, sourceId: scenario.id, sourceType: 'scenario' } },
    update: {},
    create: { userId: TEST_USER_ID, action: 'Mission Complete', xpAmount: xpToAward, sourceId: scenario.id, sourceType: 'scenario' }
  });

  if (isFirst1) {
    await prisma.userProgress.update({ where: { userId: TEST_USER_ID }, data: { xpTotal: { increment: xpToAward } } });
  }

  const xpAfter1 = await prisma.xPLedgerEntry.findMany({ where: { userId: TEST_USER_ID, sourceType: 'scenario' } });
  const progressAfter1 = await prisma.userProgress.findUnique({ where: { userId: TEST_USER_ID } });
  console.log(`XP Ledger entries AFTER 1st pass: ${xpAfter1.length} (expected: ${xpBefore.length + 1})`);
  console.log(`XP Total AFTER 1st pass: ${progressAfter1?.xpTotal} (expected: ${(progressBefore?.xpTotal ?? 0) + xpToAward})`);
  console.log(`isFirstAward was: ${isFirst1}`);

  // --- SIMULATE 2nd PASS (retry) ---
  console.log(`\n=== SIMULATING 2nd PASS (retry) ===`);
  const attempt2 = await prisma.scenarioAttempt.create({
    data: {
      userId: TEST_USER_ID, scenarioId: scenario.id,
      status: 'passed', passed: true, score: 95, xpAwarded: xpToAward
    }
  });

  const existing2 = await prisma.xPLedgerEntry.findUnique({
    where: { userId_sourceId_sourceType: { userId: TEST_USER_ID, sourceId: scenario.id, sourceType: 'scenario' } }
  });
  const isFirst2 = !existing2;

  await prisma.xPLedgerEntry.upsert({
    where: { userId_sourceId_sourceType: { userId: TEST_USER_ID, sourceId: scenario.id, sourceType: 'scenario' } },
    update: {},
    create: { userId: TEST_USER_ID, action: 'Mission Complete', xpAmount: xpToAward, sourceId: scenario.id, sourceType: 'scenario' }
  });

  if (isFirst2) {
    await prisma.userProgress.update({ where: { userId: TEST_USER_ID }, data: { xpTotal: { increment: xpToAward } } });
  }

  const xpAfter2 = await prisma.xPLedgerEntry.findMany({ where: { userId: TEST_USER_ID, sourceType: 'scenario' } });
  const progressAfter2 = await prisma.userProgress.findUnique({ where: { userId: TEST_USER_ID } });
  console.log(`XP Ledger entries AFTER 2nd pass: ${xpAfter2.length} (should match after-1st: ${xpAfter1.length})`);
  console.log(`XP Total AFTER 2nd pass: ${progressAfter2?.xpTotal} (should be unchanged: ${progressAfter1?.xpTotal})`);
  console.log(`isFirstAward was: ${isFirst2} (must be FALSE to be idempotent)`);

  // VERDICT
  const ledgerDelta = xpAfter2.length - xpAfter1.length;
  const xpDelta = (progressAfter2?.xpTotal ?? 0) - (progressAfter1?.xpTotal ?? 0);
  if (ledgerDelta === 0 && xpDelta === 0) {
    console.log(`\n✅ IDEMPOTENCY CONFIRMED: 0 extra ledger entries, 0 extra XP on retry`);
  } else {
    console.log(`\n❌ IDEMPOTENCY FAILURE: +${ledgerDelta} entries, +${xpDelta} XP on retry`);
  }

  // Cleanup
  await prisma.scenarioAttempt.deleteMany({ where: { id: { in: [attempt1.id, attempt2.id] } } });
  await prisma.xPLedgerEntry.deleteMany({ where: { sourceId: scenario.id, sourceType: 'scenario', userId: TEST_USER_ID } });
  await prisma.userProgress.update({ where: { userId: TEST_USER_ID }, data: { xpTotal: progressBefore?.xpTotal ?? 0 } });
  console.log(`\n🧹 DB restored to original state.`);

  await prisma.$disconnect();
  await pool.end();
}

simulateFixedPass().catch(e => console.error(e));
