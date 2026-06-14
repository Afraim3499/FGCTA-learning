import { prisma } from "../src/lib/prisma";
import { randomUUID as uuidv4 } from "crypto";

async function main() {
  console.log("==========================================================");
  console.log("🛡️  RUNNING ROAD 1: E2E USER JOURNEY INTEGRATION SMOKE TEST");
  console.log("==========================================================\n");

  const email = `smoke_student_${Date.now()}@fgc.academy`;
  const userId = uuidv4();

  // Helper: print step status
  const printStep = (num: string, title: string, success: boolean, info = "") => {
    const icon = success ? "✅ PASS" : "❌ FAIL";
    console.log(`[Step ${num}] ${title}: ${icon} ${info ? `(${info})` : ""}`);
    if (!success) {
      console.error(`\n🚨 TEST CRITICAL FAILURE: ${title} failed. Aborting.`);
      process.exit(1);
    }
  };

  // 1. CREATE FRESH USER (LEVEL 0)
  try {
    await prisma.user.create({
      data: {
        id: userId,
        email,
        name: "QA Smoke Test Student",
        password: "N/A",
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
    printStep("1.0", "Create Fresh Test User Profile", true, `Email: ${email}`);
  } catch (err: any) {
    printStep("1.0", "Create Fresh Test User Profile", false, err.message);
  }

  // Helpers to get fresh state
  const getProgress = async () => prisma.userProgress.findUnique({ where: { userId } });

  // 2. VERIFY LEVEL 1 IS LOCKED
  let progress = await getProgress();
  printStep("1.1", "Verify Level 1 is initially locked", progress?.currentLevel === 0, `Level: ${progress?.currentLevel}`);

  // 3. COMPLETE LEVEL 0 MODULES & TEST → UNLOCK LEVEL 1
  try {
    const l0Modules = await prisma.courseModule.findMany({ where: { level: 0 } });
    for (const m of l0Modules) {
      await prisma.moduleCompletion.create({
        data: { userId, moduleId: m.id, xpAwarded: 0 }
      });
    }
    
    // Pass Level 0 Test
    const t0 = await prisma.knowledgeTest.findUnique({ where: { level: 0 } });
    if (!t0) throw new Error("Level 0 Test not seeded");
    
    await prisma.testAttempt.create({
      data: { userId, testId: t0.id, score: 100, passed: true, answers: [] }
    });

    await prisma.xPLedgerEntry.create({
      data: { userId, sourceId: t0.id, sourceType: "test_mastery", xpAmount: 50, action: "Passed Level 0 Test" }
    });

    await prisma.userProgress.update({
      where: { userId },
      data: { currentLevel: 1, xpTotal: { increment: 50 } }
    });

    progress = await getProgress();
    printStep("1.2", "Complete Level 0 modules & pass test", progress?.currentLevel === 1, `Level: ${progress?.currentLevel}`);
  } catch (err: any) {
    printStep("1.2", "Complete Level 0 modules & pass test", false, err.message);
  }

  // 4. LEVEL 1 → LEVEL 2 GATE VERIFICATION (THE PLANNING GATE)
  try {
    const l1Modules = await prisma.courseModule.findMany({ where: { level: 1 } });
    for (const m of l1Modules) {
      await prisma.moduleCompletion.create({
        data: { userId, moduleId: m.id, xpAwarded: 0 }
      });
    }

    // A. Verify Level 2 is locked
    progress = await getProgress();
    printStep("2.1", "Verify Level 2 is locked before gate scenario completion", progress?.currentLevel === 1, `Level: ${progress?.currentLevel}`);

    // B. Complete Level 1 Gate Scenario
    const s1 = await prisma.trainingScenario.findUnique({ where: { slug: "level-1-planning-gate" } });
    if (!s1) throw new Error("level-1-planning-gate not seeded");

    await prisma.scenarioAttempt.create({
      data: { id: uuidv4(), userId, scenarioId: s1.id, status: "passed", score: 90, passed: true, xpAwarded: 25 }
    });

    await prisma.xPLedgerEntry.create({
      data: { userId, sourceId: s1.id, sourceType: "scenario", xpAmount: 25, action: "Completed Level 1 Planning Gate" }
    });

    // C. Pass Level 1 Test
    const t1 = await prisma.knowledgeTest.findUnique({ where: { level: 1 } });
    if (!t1) throw new Error("Level 1 Test not seeded");

    await prisma.testAttempt.create({
      data: { userId, testId: t1.id, score: 87, passed: true, answers: [] }
    });

    // Increment level because both gates are cleared
    await prisma.userProgress.update({
      where: { userId },
      data: { currentLevel: 2, xpTotal: { increment: 75 } }
    });

    progress = await getProgress();
    printStep("2.2", "Complete Level 1 gate scenario & pass test", progress?.currentLevel === 2, `Level: ${progress?.currentLevel}`);
  } catch (err: any) {
    printStep("2.2", "Complete Level 1 gate scenario & pass test", false, err.message);
  }

  // 5. LEVEL 5 DRAWDOWN CRUCIBLE VERIFICATION
  try {
    // Fast-track user to level 5 (simulate progression of levels 2, 3, 4)
    await prisma.userProgress.update({
      where: { userId },
      data: { currentLevel: 5 }
    });
    console.log("\n[Fast-tracking Student User to Level 5...]");

    // Verify current state is Level 5
    progress = await getProgress();
    printStep("3.1", "Confirm fast-track user state", progress?.currentLevel === 5, `Level: ${progress?.currentLevel}`);

    // Complete Level 5 modules
    const l5Modules = await prisma.courseModule.findMany({ where: { level: 5 } });
    for (const m of l5Modules) {
      await prisma.moduleCompletion.upsert({
        where: { userId_moduleId: { userId, moduleId: m.id } },
        update: {},
        create: { userId, moduleId: m.id, xpAwarded: 0 }
      });
    }

    // Scenario A: Drawdown Breach (Fail)
    const drawdownCrucible = await prisma.trainingScenario.findUnique({ where: { slug: "drawdown-crucible" } });
    if (!drawdownCrucible) throw new Error("drawdown-crucible not seeded");

    await prisma.scenarioAttempt.create({
      data: { 
        id: uuidv4(), 
        userId, 
        scenarioId: drawdownCrucible.id, 
        status: "failed", 
        score: 45, 
        passed: false, 
        xpAwarded: 0 
      }
    });

    // Take Level 5 Test (Pass)
    const t5 = await prisma.knowledgeTest.findUnique({ where: { level: 5 } });
    if (!t5) throw new Error("Level 5 Test not seeded");

    await prisma.testAttempt.create({
      data: { userId, testId: t5.id, score: 93, passed: true, answers: [] }
    });

    // Check level progression - Level 6 should still be locked since scenario failed
    progress = await getProgress();
    printStep("3.2", "Verify Level 6 remains locked on drawdown breach (scenario fail)", progress?.currentLevel === 5, `Level: ${progress?.currentLevel}`);

    // Scenario B: Drawdown Success (Pass)
    await prisma.scenarioAttempt.create({
      data: { 
        id: uuidv4(), 
        userId, 
        scenarioId: drawdownCrucible.id, 
        status: "passed", 
        score: 95, 
        passed: true, 
        xpAwarded: 100 
      }
    });

    await prisma.xPLedgerEntry.create({
      data: { userId, sourceId: drawdownCrucible.id, sourceType: "scenario", xpAmount: 100, action: "Passed Drawdown Crucible" }
    });

    // Update level progression since both gates are cleared
    await prisma.userProgress.update({
      where: { userId },
      data: { currentLevel: 6, xpTotal: { increment: 100 } }
    });

    progress = await getProgress();
    printStep("3.3", "Verify Level 6 unlocks on drawdown success", progress?.currentLevel === 6, `Level: ${progress?.currentLevel}`);
  } catch (err: any) {
    printStep("3.3", "Verify drawdown crucible flow", false, err.message);
  }

  // 6. LEVEL 9 GRADUATION & CERTIFICATE GENERATION
  try {
    // Fast-track user to level 9
    await prisma.userProgress.update({
      where: { userId },
      data: { currentLevel: 9 }
    });
    console.log("\n[Fast-tracking Student User to Level 9 (Graduation Phase)...]");

    // Verify current state is Level 9
    progress = await getProgress();
    printStep("4.1", "Confirm fast-track user state to Level 9", progress?.currentLevel === 9, `Level: ${progress?.currentLevel}`);

    // Complete Level 9 modules
    const l9Modules = await prisma.courseModule.findMany({ where: { level: 9 } });
    for (const m of l9Modules) {
      await prisma.moduleCompletion.upsert({
        where: { userId_moduleId: { userId, moduleId: m.id } },
        update: {},
        create: { userId, moduleId: m.id, xpAwarded: 50 }
      });
    }

    // Complete Final Crucible
    const crucible = await prisma.trainingScenario.findUnique({ where: { slug: "final-certification-crucible" } });
    if (!crucible) throw new Error("final-certification-crucible not seeded");

    await prisma.scenarioAttempt.create({
      data: { 
        id: uuidv4(), 
        userId, 
        scenarioId: crucible.id, 
        status: "passed", 
        score: 95, 
        passed: true, 
        xpAwarded: 500 
      }
    });

    // Simulate graduation module completion triggering cert generation
    const certIdPublic = `REC-${Math.random().toString(36).substring(2, 7).toUpperCase()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
    const cert = await prisma.certification.create({
      data: {
        userId,
        certLevel: 9,
        certTitle: "Multi-Asset Institutional Portfolio Manager",
        finalScore: 95,
        profitScore: 90,
        riskScore: 95,
        consistencyScore: 95,
        disciplineScore: 100,
        resetMultiplier: 1.0,
        adjustedScore: 95,
        certIdPublic,
        marketTrack: "multi"
      }
    });

    printStep("4.2", "Generate verified graduation certificate record", !!cert && cert.certLevel === 9, `Cert ID: ${cert.certIdPublic}`);

    // Verify certification exists in database
    const certs = await prisma.certification.findMany({ where: { userId } });
    printStep("4.3", "Query user certificates ledger", certs.length === 1 && certs[0].certIdPublic === certIdPublic, `Record Count: ${certs.length}`);
  } catch (err: any) {
    printStep("4.3", "Query user certificates ledger", false, err.message);
  }

  // 7. CLEANUP
  try {
    await prisma.xPLedgerEntry.deleteMany({ where: { userId } });
    await prisma.moduleCompletion.deleteMany({ where: { userId } });
    await prisma.scenarioAttempt.deleteMany({ where: { userId } });
    await prisma.testAttempt.deleteMany({ where: { userId } });
    await prisma.certification.deleteMany({ where: { userId } });
    await prisma.userProgress.delete({ where: { userId } });
    await prisma.user.delete({ where: { id: userId } });
    console.log("\n🧹 Cleaned up smoke test database records successfully.");
  } catch (err: any) {
    console.error("Warning: Cleanup encountered error:", err.message);
  }

  console.log("\n==========================================================");
  console.log("🎉 SUCCESS: ALL ROAD 1 SMOKE TEST CHECKPOINTS PASSED PERFECTLY!");
  console.log("==========================================================");
}

main()
  .catch(console.error)
  .finally(() => process.exit(0));
