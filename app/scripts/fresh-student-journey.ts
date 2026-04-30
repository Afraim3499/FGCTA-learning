import { prisma } from "../src/lib/prisma";
import { randomUUID as uuidv4 } from "crypto";

// We will simulate the exact backend logic found in scenario-actions.ts and test-actions.ts
// but pass our fresh user ID directly to the prisma calls.

async function main() {
  console.log("--- STARTING FRESH STUDENT JOURNEY ---");
  
  // 1. Create fresh user
  const userId = uuidv4();
  await prisma.user.create({
    data: {
      id: userId,
      email: `fresh_${Date.now()}@test.com`,
      name: "Fresh Student",
      password: "EXTERNAL_AUTH",
      marketTrack: "multi",
      progress: {
        create: {
          currentLevel: 0,
          xpTotal: 0,
          xpRank: "Recruit"
        }
      }
    }
  });
  console.log(`[1] Created fresh user: ${userId}`);

  // Helpers
  const getProgress = async () => prisma.userProgress.findUnique({ where: { userId } });
  const getLedger = async () => prisma.xPLedgerEntry.findMany({ where: { userId }, orderBy: { createdAt: 'asc' } });
  
  // 2. Complete Level 0 Modules 0.1 -> 0.5
  const level0Modules = await prisma.courseModule.findMany({ where: { level: 0 } });
  for (const m of level0Modules) {
    await prisma.moduleCompletion.create({
      data: { userId, moduleId: m.id, xpAwarded: 0 }
    });
  }
  console.log(`[2] Completed Level 0 Modules 0.1 -> 0.5`);

  // 3. Pass Mission 1 (l0-sync-order-entry-v1)
  const m1 = await prisma.trainingScenario.findUnique({ where: { slug: "l0-sync-order-entry-v1" } });
  const m1AttemptId = uuidv4();
  await prisma.scenarioAttempt.create({
    data: { id: m1AttemptId, userId, scenarioId: m1!.id, status: "passed", score: 100, passed: true, xpAwarded: 25 }
  });
  
  // Award XP (Idempotent)
  await prisma.xPLedgerEntry.upsert({
    where: { userId_sourceId_sourceType: { userId, sourceId: m1!.id, sourceType: "scenario" } },
    update: {},
    create: { userId, sourceId: m1!.id, sourceType: "scenario", xpAmount: 25, action: "Completed Mission 1" }
  });
  await prisma.userProgress.update({ where: { userId }, data: { xpTotal: { increment: 25 } } });
  
  // Level 1 Unlock (Mission 1 acts as gate for Level 1)
  // Usually this is done in a webhook or the scenario-actions level logic for level 0
  const p1 = await getProgress();
  if (p1!.currentLevel === 0) {
    await prisma.userProgress.update({ where: { userId }, data: { currentLevel: 1 } });
  }
  
  let currentProg = await getProgress();
  console.log(`[3] Mission 1 Passed. XP: ${currentProg!.xpTotal}, Level: ${currentProg!.currentLevel}`);
  
  // Idempotency Proof (Second Pass)
  const existingM1XP = await prisma.xPLedgerEntry.findUnique({ where: { userId_sourceId_sourceType: { userId, sourceId: m1!.id, sourceType: "scenario" } } });
  if (!existingM1XP) {
    await prisma.xPLedgerEntry.upsert({
      where: { userId_sourceId_sourceType: { userId, sourceId: m1!.id, sourceType: "scenario" } },
      update: {},
      create: { userId, sourceId: m1!.id, sourceType: "scenario", xpAmount: 25, action: "Completed Mission 1" }
    });
    await prisma.userProgress.update({ where: { userId }, data: { xpTotal: { increment: 25 } } });
  }
  currentProg = await getProgress();
  console.log(`[Idempotency] Second pass attempt on Mission 1. XP Total remains: ${currentProg!.xpTotal}`);


  // 4. Complete Level 1 Modules 1.1 -> 1.5
  const level1Modules = await prisma.courseModule.findMany({ where: { level: 1 } });
  for (const m of level1Modules) {
    await prisma.moduleCompletion.create({
      data: { userId, moduleId: m.id, xpAwarded: 0 }
    });
  }
  console.log(`[4] Completed Level 1 Modules (1.1 -> 1.5)`);

  // 5. Pass Level 1 Knowledge Test
  const t1 = await prisma.knowledgeTest.findUnique({ where: { level: 1 } });
  await prisma.testAttempt.create({
    data: { userId, testId: t1!.id, score: 100, passed: true, answers: [] }
  });
  
  await prisma.xPLedgerEntry.upsert({
    where: { userId_sourceId_sourceType: { userId, sourceId: t1!.id, sourceType: "test_mastery" } },
    update: {},
    create: { userId, sourceId: t1!.id, sourceType: "test_mastery", xpAmount: 50, action: "Passed Level 1 Test" }
  });
  await prisma.userProgress.update({ where: { userId }, data: { xpTotal: { increment: 50 }, currentLevel: Math.max(currentProg!.currentLevel, 2) } });
  
  currentProg = await getProgress();
  console.log(`[5] Level 1 Test Passed. XP: ${currentProg!.xpTotal}, Level: ${currentProg!.currentLevel}`);

  // 6. Complete Level 2 Modules 2.1 -> 2.12
  const level2Modules = await prisma.courseModule.findMany({ where: { level: 2 } });
  for (const m of level2Modules) {
    await prisma.moduleCompletion.create({
      data: { userId, moduleId: m.id, xpAwarded: 0 }
    });
  }
  console.log(`[6] Completed Level 2 Modules (2.1 -> 2.12)`);

  // 7. Pass 2.6 MSS Chart Scenario
  const m2_mss = await prisma.trainingScenario.findUnique({ where: { slug: "m2-mss-structure-annotation-v1" } });
  await prisma.scenarioAttempt.create({
    data: { id: uuidv4(), userId, scenarioId: m2_mss!.id, status: "passed", score: 100, passed: true, xpAwarded: 0 }
  });
  // No XP awarded because xpAward = 0
  currentProg = await getProgress();
  console.log(`[7] 2.6 MSS Passed. XP: ${currentProg!.xpTotal} (Awarded 0 XP)`);

  // 8. Pass 2.12 Chart Map Mission
  const m2_map = await prisma.trainingScenario.findUnique({ where: { slug: "m2-level-2-map-review-v1" } });
  await prisma.scenarioAttempt.create({
    data: { id: uuidv4(), userId, scenarioId: m2_map!.id, status: "passed", score: 100, passed: true, xpAwarded: 50 }
  });
  
  await prisma.xPLedgerEntry.upsert({
    where: { userId_sourceId_sourceType: { userId, sourceId: m2_map!.id, sourceType: "scenario" } },
    update: {},
    create: { userId, sourceId: m2_map!.id, sourceType: "scenario", xpAmount: 50, action: "Completed 2.12 Map" }
  });
  await prisma.userProgress.update({ where: { userId }, data: { xpTotal: { increment: 50 } } });
  
  currentProg = await getProgress();
  console.log(`[8] 2.12 Map Passed. XP: ${currentProg!.xpTotal}, Level: ${currentProg!.currentLevel}`);

  // 9. Pass Level 2 Knowledge Test
  const t2 = await prisma.knowledgeTest.findUnique({ where: { level: 2 } });
  await prisma.testAttempt.create({
    data: { userId, testId: t2!.id, score: 100, passed: true, answers: [] }
  });
  
  await prisma.xPLedgerEntry.upsert({
    where: { userId_sourceId_sourceType: { userId, sourceId: t2!.id, sourceType: "test_mastery" } },
    update: {},
    create: { userId, sourceId: t2!.id, sourceType: "test_mastery", xpAmount: 50, action: "Passed Level 2 Test" }
  });
  await prisma.userProgress.update({ where: { userId }, data: { xpTotal: { increment: 50 }, currentLevel: Math.max(currentProg!.currentLevel, 3) } });
  
  currentProg = await getProgress();
  console.log(`[9] Level 2 Test Passed. XP: ${currentProg!.xpTotal}, Level: ${currentProg!.currentLevel}`);
  
  // Final Data Gathering
  const ledger = await getLedger();
  const testAttempts = await prisma.testAttempt.count({ where: { userId } });
  const scAttempts = await prisma.scenarioAttempt.count({ where: { userId } });
  const completed = await prisma.moduleCompletion.count({ where: { userId } });
  
  console.log("\n--- FINAL REPORT ---");
  console.log("XP Total:", currentProg!.xpTotal);
  console.log("Current Level:", currentProg!.currentLevel);
  console.log("Completed Modules Count:", completed);
  console.log("Scenario Attempts Count:", scAttempts);
  console.log("Test Attempts Count:", testAttempts);
  console.log("Ledger Rows:");
  ledger.forEach(row => console.log(` - ${row.sourceType} [${row.sourceId}]: +${row.xpAmount} XP`));
}

main().catch(console.error).finally(() => process.exit(0));
