"use server";

import { prisma } from "@/lib/prisma";
import { getUser } from "@/lib/auth-actions";
import { revalidatePath } from "next/cache";
import { initializePhase } from "./trading-actions";
import { logUserEvent } from "./analytics";
import { getXPRank } from "./utils";

interface Question {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

/**
 * Fetches a randomized test for a level.
 * Strips correct answers before sending to client.
 */
export async function getTest(level: number) {
  const user = await getUser();
  if (!user) throw new Error("Unauthorized");

  const testData = await prisma.knowledgeTest.findUnique({
    where: { level },
  });

  if (!testData) return null;

  // Hardening: Verify level lock and prerequisites
  const userProfile = await prisma.user.findUnique({
    where: { id: user.id },
    select: { isAdmin: true, progress: { select: { currentLevel: true } } },
  });

  // Enforce level lock for students (admins bypass)
  if (!userProfile?.isAdmin && level > (userProfile?.progress?.currentLevel ?? 0)) {
    throw new Error("Test level is locked");
  }

  const moduleCount = await prisma.courseModule.count({ where: { level } });
  const completedCount = await prisma.moduleCompletion.count({
    where: { userId: user.id, module: { level } },
  });

  // Enforce module completion requirement (admins bypass)
  if (!userProfile?.isAdmin && completedCount < moduleCount) {
    throw new Error("All modules in this level must be completed before taking the test");
  }

  const allQuestions = testData.questions as unknown as Question[];
  
  // Randomly shuffle and pick subset
  const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, testData.questionsPerAttempt);

  // Strip correctIndex and explanation for security
  const sanitizedQuestions = selected.map(({ correctIndex, explanation, ...rest }) => rest);

  await logUserEvent(user.id, "TEST_START", { level });

  return {
    testId: testData.id,
    title: testData.title,
    timeLimit: testData.timeLimitMin,
    questions: sanitizedQuestions,
  };
}

/**
 * Grades a test submission.
 */
export async function submitTest(level: number, selectedAnswers: { questionId: string, selectedIndex: number }[]) {
  const user = await getUser();
  if (!user) throw new Error("Unauthorized");

  const testData = await prisma.knowledgeTest.findUnique({
    where: { level },
  });

  if (!testData) return null;

  // Hardening: Verify level lock and prerequisites
  const userProgress = await prisma.userProgress.findUnique({
    where: { userId: user.id },
    select: { currentLevel: true },
  });

  /* TEMPORARY UNLOCK FOR TESTING
  if (level > (userProgress?.currentLevel ?? 0)) {
    throw new Error("Test level is locked");
  }
  */

  const moduleCount = await prisma.courseModule.count({ where: { level } });
  const completedCount = await prisma.moduleCompletion.count({
    where: { userId: user.id, module: { level } },
  });

  /* TEMPORARY UNLOCK FOR TESTING
  if (completedCount < moduleCount) {
    throw new Error("Cannot submit test: modules incomplete");
  }
  */

  // Check cooldown (4 hours)
  const lastAttempt = await prisma.testAttempt.findFirst({
    where: { userId: user.id, testId: testData.id },
    orderBy: { attemptedAt: "desc" },
  });

  if (lastAttempt) {
    const hoursSince = (Date.now() - new Date(lastAttempt.attemptedAt).getTime()) / (1000 * 60 * 60);
    // Level 1 (and 0) has unlimited retries; other levels have 4 hour cooldown
    // Alpha override: no cooldowns for any level.
    /*
    if (level > 1 && hoursSince < 4 && !lastAttempt.passed) {
      return { 
        success: false, 
        error: `Cooldown active. You can retry in ${Math.ceil(4 - hoursSince)} hours.` 
      };
    }
    */
  }

  const questions = testData.questions as unknown as Question[];
  const results = selectedAnswers.map(ans => {
    const question = questions.find(q => q.id === ans.questionId);
    if (!question) return { correct: false };
    const isCorrect = question.correctIndex === ans.selectedIndex;
    return { 
      questionId: ans.questionId, 
      correct: isCorrect, 
      selectedIndex: ans.selectedIndex,
      correctIndex: question.correctIndex
    };
  });

  const correctCount = results.filter(r => r.correct).length;
  const score = Math.round((correctCount / selectedAnswers.length) * 100);
  const passed = score >= testData.passThreshold;

  // Track weak areas (question IDs that were wrong)
  const weakAreas = results.filter(r => !r.correct).map(r => r.questionId).filter(Boolean) as string[];

  const attemptResult = await prisma.$transaction(async (tx) => {
    const attempt = await tx.testAttempt.create({
      data: {
        userId: user.id,
        testId: testData.id,
        score,
        passed,
        answers: results as any,
        weakAreas,
      },
    });

    await logUserEvent(user.id, "TEST_SUBMIT", { 
      level: testData.level, 
      score, 
      passed, 
      weakAreas 
    });

    let returnMessage: string | undefined = undefined;

    if (passed) {
      const progress = await tx.userProgress.findUnique({
        where: { userId: user.id },
      });

      let shouldUnlockNextLevel = true;

      if (level === 2) {
        // Dual-gate logic for Level 2 → Level 3
        const missionPassed = await tx.scenarioAttempt.findFirst({
          where: {
            userId: user.id,
            scenario: { slug: "m2-level-2-map-review-v1" },
            status: "passed",
          }
        });
        
        if (!missionPassed) {
          shouldUnlockNextLevel = false;
          returnMessage = "Test passed. Complete the 2.12 Chart Map Mission to unlock Level 3.";
        } else {
          returnMessage = "Level 3 Unlocked! Proceed to the next phase of your training.";
        }
      }

      if (level === 3) {
        // Dual-gate logic for Level 3 → Level 4
        // BOTH the Level 3 Knowledge Test AND the Level 3 Final Scenario must be passed.
        const scenarioPassed = await tx.scenarioAttempt.findFirst({
          where: {
            userId: user.id,
            scenario: { slug: "level-3-final-gate" },
            status: "passed",
          }
        });

        if (!scenarioPassed) {
          shouldUnlockNextLevel = false;
          returnMessage = "Test passed. Complete the Level 3 Final Scenario (Module 3.10) to unlock Level 4.";
        } else {
          returnMessage = "Level 4 Unlocked! You are ready for practical training.";
        }
      }

      if (progress && progress.currentLevel === level && shouldUnlockNextLevel) {
        const nextLevel = Math.max(progress.currentLevel, level + 1);
        
        await tx.userProgress.update({
          where: { userId: user.id },
          data: { currentLevel: nextLevel },
        });

        await logUserEvent(user.id, "LEVEL_UP", { fromLevel: level, toLevel: nextLevel });
      }

      // Test XP Award (+50 XP one-time)
      const XP_AMOUNT = 50;
      const existingXp = await tx.xPLedgerEntry.findUnique({
        where: {
          userId_sourceId_sourceType: {
            userId: user.id,
            sourceId: testData.id,
            sourceType: "test_mastery",
          },
        },
      });

      if (!existingXp) {
        await tx.xPLedgerEntry.create({
          data: {
            userId: user.id,
            xpAmount: XP_AMOUNT,
            action: `Passed Level ${level} Test`,
            sourceId: testData.id,
            sourceType: "test_mastery",
          },
        });

        // Update total XP
        if (progress) {
          const newTotal = progress.xpTotal + XP_AMOUNT;
          await tx.userProgress.update({
            where: { userId: user.id },
            data: { 
              xpTotal: newTotal,
              xpRank: getXPRank(newTotal)
            },
          });
        }
      }
    }

    return { 
      success: true, 
      score, 
      passed, 
      attemptId: attempt.id, 
      message: returnMessage,
      results: results.map(r => ({ ...r, correctIndex: passed ? r.correctIndex : undefined })) 
    };
  });

  // Post-transaction logic: Phase Initialization
  if (attemptResult.passed && level === 2) {
    await initializePhase(1);
  }

  revalidatePath("/dashboard");
  revalidatePath("/course");
  revalidatePath("/trading");

  return attemptResult;
}
