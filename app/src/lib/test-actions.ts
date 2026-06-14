"use server";

import { prisma } from "@/lib/prisma";
import { getUser } from "@/lib/auth-actions";
import { revalidatePath } from "next/cache";
import { initializePhase } from "./trading-actions";
import { logUserEvent } from "./analytics";
import { getXPRank } from "./utils";

interface Question {
  id: string;
  type: "MCQ" | "MATCHING" | "SCENARIO_CLICK" | "TICKER_DECISION";
  domain: string;
  prompt: string;
  options?: string[];
  matchingLeft?: string[];
  shuffledRight?: string[];
  chartState?: any;
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

  // Verify level lock and prerequisites
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

  const allQuestions = testData.questions as unknown as any[];
  
  // Determine user's unlocked strategy logicIds
  const completedModules = await prisma.moduleCompletion.findMany({
    where: { userId: user.id },
    select: { module: { select: { logicIds: true } } }
  });
  const unlockedLogicIds = Array.from(
    new Set(completedModules.flatMap(c => c.module.logicIds || []))
  );

  // Dynamic 70/30 Exam Sourcing
  const totalQuestions = testData.questionsPerAttempt;
  const strategyTarget = level < 2 ? 0 : Math.round(totalQuestions * 0.3);

  // Fetch strategy questions at or below this level
  const strategyQuestions = await prisma.examQuestion.findMany({
    where: {
      logicId: { in: unlockedLogicIds },
      level: { lte: level }
    }
  });

  // Pick strategy questions up to strategyTarget
  const shuffledStrategy = [...strategyQuestions].sort(() => 0.5 - Math.random());
  const selectedStrategy = shuffledStrategy.slice(0, strategyTarget);

  // If we have fewer strategy questions than target, backfill with core questions
  const actualStrategyCount = selectedStrategy.length;
  const neededCoreCount = totalQuestions - actualStrategyCount;

  // Pick core questions
  const shuffledCore = [...allQuestions].sort(() => 0.5 - Math.random());
  const selectedCore = shuffledCore.slice(0, neededCoreCount);

  // Merge and Shuffle
  const finalQuestions = [...selectedCore, ...selectedStrategy].sort(() => 0.5 - Math.random());

  // Strip correct answers/coordinates and format matchingRight for client
  const sanitizedQuestions = finalQuestions.map((q) => {
    const isDbQuestion = 'type' in q; // DB questions have a 'type' field
    const type = (isDbQuestion ? q.type : "MCQ") as "MCQ" | "MATCHING" | "SCENARIO_CLICK" | "TICKER_DECISION";
    const domain = getQuestionDomain(q, level);

    if (type === "MATCHING") {
      const shuffledRight = [...(q.matchingRight || [])].sort(() => 0.5 - Math.random());
      return {
        id: q.id,
        type,
        domain,
        prompt: q.prompt,
        matchingLeft: q.matchingLeft,
        shuffledRight,
      };
    } else if (type === "SCENARIO_CLICK") {
      return {
        id: q.id,
        type,
        domain,
        prompt: q.prompt,
        chartState: q.chartState,
      };
    } else if (type === "TICKER_DECISION") {
      return {
        id: q.id,
        type,
        domain,
        prompt: q.prompt,
        options: q.options,
        chartState: q.chartState,
      };
    } else {
      // MCQ
      return {
        id: q.id,
        type: "MCQ",
        domain,
        prompt: q.prompt || q.question,
        options: q.options,
      };
    }
  }) as Question[];

  await logUserEvent(user.id, "TEST_START", { level });

  return {
    testId: testData.id,
    title: testData.title,
    timeLimit: testData.timeLimitMin,
    questions: sanitizedQuestions,
  };
}

/**
 * Grades a test submission and updates gating locks & skill profiles.
 */
export async function submitTest(
  level: number,
  selectedAnswers: {
    questionId: string;
    selectedIndex?: number;
    matchingPairs?: string[];
    clickedX?: number;
    clickedY?: number;
  }[]
) {
  const user = await getUser();
  if (!user) throw new Error("Unauthorized");

  const testData = await prisma.knowledgeTest.findUnique({
    where: { level },
  });

  if (!testData) return null;

  const allCoreQuestions = testData.questions as unknown as any[];
  
  // Fetch all strategy questions matching user's submitted IDs
  const dbQuestions = await prisma.examQuestion.findMany({
    where: {
      id: { in: selectedAnswers.map(a => a.questionId) }
    }
  });

  const results = selectedAnswers.map(ans => {
    // Find question in either pool
    const question = allCoreQuestions.find(q => q.id === ans.questionId) ||
                     dbQuestions.find(q => q.id === ans.questionId);
                     
    if (!question) return { questionId: ans.questionId, correct: false };

    const type = question.type || "MCQ";
    let isCorrect = false;

    if (type === "MATCHING") {
      const right = question.matchingRight || [];
      const userPairs = ans.matchingPairs || [];
      if (userPairs.length === right.length) {
        isCorrect = right.every((val: string, i: number) => val === userPairs[i]);
      }
    } else if (type === "SCENARIO_CLICK") {
      const tx_val = question.targetX;
      const ty_val = question.targetY;
      const tolerance = question.tolerance ?? 15.0;
      if (ans.clickedX !== undefined && ans.clickedY !== undefined && tx_val !== null && ty_val !== null) {
        const dx = ans.clickedX - tx_val;
        const dy = ans.clickedY - ty_val;
        isCorrect = Math.sqrt(dx * dx + dy * dy) <= tolerance;
      }
    } else {
      // MCQ and TICKER_DECISION
      const correctIdx = question.correctIndex ?? question.correctIndex;
      isCorrect = correctIdx === ans.selectedIndex;
    }

    return {
      questionId: ans.questionId,
      correct: isCorrect,
      selectedIndex: ans.selectedIndex,
      matchingPairs: ans.matchingPairs,
      clickedX: ans.clickedX,
      clickedY: ans.clickedY,
      correctIndex: question.correctIndex,
      correctMatching: question.matchingRight,
      correctX: question.targetX,
      correctY: question.targetY,
    };
  });

  const correctCount = results.filter(r => r.correct).length;
  const score = Math.round((correctCount / selectedAnswers.length) * 100);
  const passed = score >= testData.passThreshold;
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
    let unlockedNext = false;

    if (passed) {
      const progress = await tx.userProgress.findUnique({
        where: { userId: user.id },
      });

      // Dual-gate lookup
      const LEVEL_GATE_SCENARIOS: Record<number, string[]> = {
        0: ["level-0-foundation-review-mission"],
        1: ["level-1-planning-gate"],
        2: ["m2-level-2-map-review-v1"],
        3: ["level-3-final-gate"],
        4: ["l4-mission-4a", "l4-mission-4b"],
        5: ["drawdown-crucible"],
        6: ["scenario-planning-crucible"],
        7: ["execution-precision-crucible"],
        8: ["institutional-mastery-crucible"],
        9: ["final-certification-crucible"]
      };

      const requiredSlugs = LEVEL_GATE_SCENARIOS[level];
      let scenarioPassed = true;

      if (requiredSlugs && requiredSlugs.length > 0) {
        const passAttempt = await tx.scenarioAttempt.findFirst({
          where: {
            userId: user.id,
            scenario: { slug: { in: requiredSlugs } },
            status: "passed",
          }
        });
        if (!passAttempt) {
          scenarioPassed = false;
        }
      }

      if (!scenarioPassed) {
        const messageMap: Record<number, string> = {
          0: "Test passed. Complete the Level 0 Foundation Review scenario to unlock Level 1.",
          1: "Test passed. Complete the Level 1 Trade Plan Formulation Crucible (Module 1.15) to unlock Level 2.",
          2: "Test passed. Complete the 2.12 Chart Map Mission to unlock Level 3.",
          3: "Test passed. Complete the Level 3 Final Scenario (Module 3.10) to unlock Level 4.",
          4: "Test passed. Complete either Level 4 Final Scenario (Module 4.15) to unlock Level 5.",
          5: "Test passed. Complete the Level 5 Final Scenario (Drawdown Crucible) to unlock Level 6.",
          6: "Test passed. Complete the Level 6 Final Scenario (Scenario Planning Crucible) to unlock Level 7.",
          7: "Test passed. Complete the Level 7 Final Scenario (Execution Precision Crucible) to unlock Level 8.",
          8: "Test passed. Complete the Level 8 Final Scenario (Institutional Mastery Crucible) to unlock Level 9.",
          9: "Test passed. Complete the Final Certification Crucible (Module 9.15) to graduate."
        };
        returnMessage = messageMap[level] || `Test passed. Complete the Level ${level} Gate Scenario to unlock next level.`;
      } else {
        unlockedNext = true;
        const messageMap: Record<number, string> = {
          0: "Level 1 Unlocked! Proceed to basic triggers.",
          1: "Level 2 Unlocked! Proceed to Market Mechanics.",
          2: "Level 3 Unlocked! Proceed to the next phase of your training.",
          3: "Level 4 Unlocked! You are ready for practical training.",
          4: "Level 5 Unlocked! You are ready for Risk Architecture.",
          5: "Level 6 Unlocked! Proceed to Scenario Planning.",
          6: "Level 7 Unlocked! Proceed to Live Execution.",
          7: "Level 8 Unlocked! Proceed to Elite Psychology.",
          8: "Level 9 Unlocked! Proceed to Portfolio & Certification.",
          9: "Congratulations! You have completed Level 9 and passed the Certification exam. Your diploma is ready!"
        };
        returnMessage = messageMap[level] || `Level ${level + 1} Unlocked!`;
      }

      if (progress && progress.currentLevel === level && unlockedNext) {
        const nextLevel = Math.max(progress.currentLevel, level + 1);
        await tx.userProgress.update({
          where: { userId: user.id },
          data: { currentLevel: nextLevel },
        });
        await logUserEvent(user.id, "LEVEL_UP", { fromLevel: level, toLevel: nextLevel });
      }

      // Skill Profile Update Logic (with best attempt retry protection)
      const bestPastPassedAttempt = await tx.testAttempt.findFirst({
        where: {
          userId: user.id,
          testId: testData.id,
          passed: true,
          score: { gte: score }
        }
      });

      if (!bestPastPassedAttempt) {
        const domainTotals: Record<string, { total: number; correct: number }> = {};
        results.forEach(res => {
          const q = allCoreQuestions.find(x => x.id === res.questionId) || 
                    dbQuestions.find(x => x.id === res.questionId);
          if (!q) return;
          const domain = getQuestionDomain(q, level);
          if (!domainTotals[domain]) {
            domainTotals[domain] = { total: 0, correct: 0 };
          }
          domainTotals[domain].total++;
          if (res.correct) {
            domainTotals[domain].correct++;
          }
        });

        const profile = await tx.studentSkillProfile.findUnique({
          where: { userId: user.id }
        });
        
        const skillUpdates: Record<string, number> = {};
        for (const domain of Object.keys(domainTotals)) {
          const perf = (domainTotals[domain].correct / domainTotals[domain].total) * 100;
          const dbField = mapDomainToField(domain);
          if (dbField) {
            const oldVal = profile ? (profile as any)[dbField] : 0;
            skillUpdates[dbField] = oldVal === 0 ? perf : Math.round((oldVal * 0.7) + (perf * 0.3));
          }
        }

        if (Object.keys(skillUpdates).length > 0) {
          await tx.studentSkillProfile.upsert({
            where: { userId: user.id },
            update: skillUpdates,
            create: {
              userId: user.id,
              ...skillUpdates
            }
          });
        }
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
      unlockedNext,
      attemptId: attempt.id, 
      message: returnMessage,
      results: results.map(r => ({
        ...r,
        correctIndex: passed ? r.correctIndex : undefined,
        correctMatching: passed ? r.correctMatching : undefined,
        correctX: passed ? r.correctX : undefined,
        correctY: passed ? r.correctY : undefined,
      }))
    };
  });

  // Post-transaction tasks
  if (attemptResult.passed && level === 2 && attemptResult.unlockedNext) {
    await initializePhase(1);
  }

  revalidatePath("/dashboard");
  revalidatePath("/course");
  revalidatePath("/trading");

  return attemptResult;
}

function getQuestionDomain(q: any, level: number): string {
  if (q.domain) return q.domain;
  const id = (q.id || "").toLowerCase();
  if (id.includes("psych") || id.includes("risk") || id.includes("routine") || id.includes("mind")) {
    return "risk_management";
  }
  if (id.includes("execution") || id.includes("entry") || id.includes("order") || id.includes("trade")) {
    return "execution_precision";
  }
  if (id.includes("structure") || id.includes("trend") || id.includes("swing")) {
    return "market_structure";
  }
  if (id.includes("flat") || id.includes("range")) {
    return "flat_market";
  }
  if (id.includes("forex") || id.includes("pair")) {
    return "forex";
  }
  if (id.includes("gold") || id.includes("xau")) {
    return "gold";
  }
  if (id.includes("crypto") || id.includes("perp")) {
    return "crypto";
  }
  if (id.includes("chart") || id.includes("candle") || id.includes("reading")) {
    return "chart_reading";
  }
  
  const levelDefaults: Record<number, string> = {
    0: "chart_reading",
    1: "chart_reading",
    2: "market_structure",
    3: "market_structure",
    4: "chart_reading",
    5: "risk_management",
    6: "market_structure",
    7: "execution_precision",
    8: "risk_management",
    9: "risk_management",
  };
  return levelDefaults[level] || "chart_reading";
}

function mapDomainToField(domain: string): string | null {
  const mapping: Record<string, string> = {
    chart_reading: "chartReading",
    market_structure: "marketStructure",
    execution_precision: "executionPrecision",
    risk_management: "riskManagement",
    swing_market: "swingMarketMastery",
    flat_market: "flatMarketMastery",
    forex: "forexUnderstanding",
    gold: "goldSpecifics",
    crypto: "cryptoDerivatives"
  };
  return mapping[domain] || null;
}


