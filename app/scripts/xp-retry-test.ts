
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

const SCENARIO_SLUG = 'm2-level-2-map-review-v1';
// Using demo@example.com for simulation
const TEST_USER_ID = 'dfba30fe-cce0-4e58-a678-5dcde98f713d';

async function simulatePass() {
  const scenario = await prisma.trainingScenario.findUnique({ where: { slug: SCENARIO_SLUG } });
  if (!scenario) throw new Error('Scenario not found');

  // Check XP before
  const xpBefore = await prisma.xPLedgerEntry.findMany({
    where: { userId: TEST_USER_ID, sourceType: 'scenario_attempt' }
  });
  console.log(`XP entries BEFORE: ${xpBefore.length}`);

  const progressBefore = await prisma.userProgress.findUnique({ where: { userId: TEST_USER_ID } });
  console.log(`XP Total BEFORE: ${progressBefore?.xpTotal}`);

  // Simulate first pass
  const attempt1 = await prisma.scenarioAttempt.create({
    data: {
      userId: TEST_USER_ID,
      scenarioId: scenario.id,
      status: 'passed',
      passed: true,
      score: 90,
      xpAwarded: scenario.xpAward || 50
    }
  });

  await prisma.xPLedgerEntry.upsert({
    where: {
      userId_sourceId_sourceType: {
        userId: TEST_USER_ID,
        sourceId: attempt1.id,
        sourceType: 'scenario_attempt'
      }
    },
    update: {},
    create: {
      userId: TEST_USER_ID,
      action: 'Completed Mission: Test',
      xpAmount: scenario.xpAward || 50,
      sourceId: attempt1.id,
      sourceType: 'scenario_attempt'
    }
  });

  await prisma.userProgress.update({
    where: { userId: TEST_USER_ID },
    data: { xpTotal: { increment: scenario.xpAward || 50 } }
  });

  // Check XP after first pass
  const xpAfter1 = await prisma.xPLedgerEntry.findMany({
    where: { userId: TEST_USER_ID, sourceType: 'scenario_attempt' }
  });
  const progressAfter1 = await prisma.userProgress.findUnique({ where: { userId: TEST_USER_ID } });
  console.log(`\nXP entries AFTER 1st pass: ${xpAfter1.length} (Expect: ${xpBefore.length + 1})`);
  console.log(`XP Total AFTER 1st pass: ${progressAfter1?.xpTotal} (Expected: ${(progressBefore?.xpTotal ?? 0) + (scenario.xpAward || 50)})`);

  // Simulate a SECOND pass (different attempt ID)
  const attempt2 = await prisma.scenarioAttempt.create({
    data: {
      userId: TEST_USER_ID,
      scenarioId: scenario.id,
      status: 'passed',
      passed: true,
      score: 95,
      xpAwarded: scenario.xpAward || 50
    }
  });

  // This is the KEY TEST: does the upsert on a NEW attemptId create a second XP entry?
  await prisma.xPLedgerEntry.upsert({
    where: {
      userId_sourceId_sourceType: {
        userId: TEST_USER_ID,
        sourceId: attempt2.id,
        sourceType: 'scenario_attempt'
      }
    },
    update: {},
    create: {
      userId: TEST_USER_ID,
      action: 'Completed Mission: Test',
      xpAmount: scenario.xpAward || 50,
      sourceId: attempt2.id,
      sourceType: 'scenario_attempt'
    }
  });

  // Do NOT increment progress - test would only increment once

  // Check XP after second pass
  const xpAfter2 = await prisma.xPLedgerEntry.findMany({
    where: { userId: TEST_USER_ID, sourceType: 'scenario_attempt' }
  });
  const progressAfter2 = await prisma.userProgress.findUnique({ where: { userId: TEST_USER_ID } });
  console.log(`\nXP entries AFTER 2nd pass: ${xpAfter2.length}`);
  console.log(`XP Total AFTER 2nd pass: ${progressAfter2?.xpTotal}`);

  // Verdict
  const entryDelta = xpAfter2.length - xpAfter1.length;
  if (entryDelta > 0) {
    console.log(`\n❌ IDEMPOTENCY FAILURE: ${entryDelta} extra XP entries created on retry`);
    console.log('The current sourceKey (attempt UUID) is NOT safe for multi-pass scenarios.');
  } else {
    console.log(`\n✅ IDEMPOTENCY PASS: No extra XP entries created`);
  }

  // Cleanup test data
  await prisma.scenarioAttempt.deleteMany({ where: { id: { in: [attempt1.id, attempt2.id] } } });
  await prisma.xPLedgerEntry.deleteMany({ where: { sourceId: { in: [attempt1.id, attempt2.id] }, sourceType: 'scenario_attempt' } });
  // Restore XP
  await prisma.userProgress.update({
    where: { userId: TEST_USER_ID },
    data: { xpTotal: progressBefore?.xpTotal ?? 0 }
  });

  console.log('\n🧹 Cleanup complete. DB restored to original state.');

  await prisma.$disconnect();
  await pool.end();
}

simulatePass().catch(e => console.error(e));
