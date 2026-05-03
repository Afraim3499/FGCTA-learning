"use server";

import { prisma } from "@/lib/prisma";
import { getUser } from "@/lib/auth-actions";
import { revalidatePath } from "next/cache";
import { ScenarioAttemptStatus } from "@prisma/client";
import { gradeMission } from "@/lib/trading/mission-grader";
import {
  gradeChartScenario,
  gradeChartScenarioV2,
  ChartMarkupActions,
  ChartMarkupActionsV2,
} from "@/lib/trading/chart-scenario-grader";

/**
 * Fetches a specific training scenario by ID or Slug.
 */
export async function getScenario(idOrSlug: string) {
  return await prisma.trainingScenario.findFirst({
    where: {
      OR: [
        { id: idOrSlug },
        { slug: idOrSlug }
      ]
    },
    include: {
      links: true
    }
  });
}

/**
 * Fetches all scenarios linked to a specific module.
 */
export async function getModuleScenarios(moduleId: string) {
  const links = await prisma.moduleScenarioLink.findMany({
    where: { moduleId },
    include: {
      scenario: true
    },
    orderBy: { sortOrder: 'asc' }
  });
  return links.map((l: any) => ({
    ...l.scenario,
    linkId: l.id,
    requiredForProgress: l.requiredForProgress,
    minScore: l.minScore,
    xpAward: l.xpAward || l.scenario.xpAward
  }));
}

/**
 * Starts or resumes a scenario attempt.
 * Idempotent: returns existing active attempt if one exists.
 */
export async function startScenarioAttempt(scenarioId: string, moduleId?: string) {
  const user = await getUser();
  if (!user) throw new Error("Unauthorized");

  // 1. Check for existing active attempt
  const existing = await prisma.scenarioAttempt.findFirst({
    where: {
      userId: user.id,
      scenarioId,
      moduleId: moduleId || null,
      status: { in: ['started', 'in_progress'] }
    },
    orderBy: { startedAt: 'desc' }
  });

  if (existing) {
    return existing;
  }

  // 2. Create new attempt
  return await prisma.scenarioAttempt.create({
    data: {
      userId: user.id,
      scenarioId,
      moduleId: moduleId || null,
      status: 'started',
      scenarioVersion: 1, // Defaulting to 1 for V1
      engineVersion: '1.0.0',
      graderVersion: '1.0.0'
    }
  });
}

/**
 * Submits a scenario attempt for grading.
 * Idempotent: will not re-grade or re-award XP if already completed.
 */
export async function submitScenarioAttempt(
  attemptId: string, 
  actions: any, 
  tradeLog: any
) {
  const user = await getUser();
  if (!user) throw new Error("Unauthorized");

  const attempt = await prisma.scenarioAttempt.findUnique({
    where: { id: attemptId },
    include: { scenario: true }
  });

  if (!attempt) throw new Error("Attempt not found");
  if (attempt.userId !== user.id) throw new Error("Forbidden");
  
  // If already passed, don't allow re-submission to change status
  if (attempt.status === 'passed') {
    return attempt;
  }

  // Calculate grading result
  const gradingResult = gradeMission(attempt.scenario.slug, tradeLog);
  const isPassed = gradingResult.passed;
  const score = gradingResult.score;
  const xpToAward = isPassed ? (attempt.scenario.xpAward || 0) : 0;

  // Update Attempt
  const updatedAttempt = await prisma.scenarioAttempt.update({
    where: { id: attemptId },
    data: {
      status: isPassed ? 'passed' : 'failed',
      score,
      passed: isPassed,
      actions: actions as any,
      tradeLog: tradeLog as any,
      gradingResult: gradingResult as any,
      resultSummary: gradingResult.summary || (isPassed ? "Mission Successful" : "Mission Failed"),
      weaknessTags: gradingResult.weaknessTags || [],
      xpAwarded: xpToAward,
      completedAt: new Date()
    }
  });

  // Award XP if passed.
  // KEY: Use scenarioId (not attemptId) as the ledger source key so that
  // multiple passing attempts on the same scenario never double-award XP.
  if (isPassed && xpToAward > 0) {
    try {
      const existingEntry = await prisma.xPLedgerEntry.findUnique({
        where: {
          userId_sourceId_sourceType: {
            userId: user.id,
            sourceId: attempt.scenarioId,
            sourceType: 'scenario'
          }
        }
      });

      const isFirstAward = !existingEntry;

      await prisma.xPLedgerEntry.upsert({
        where: {
          userId_sourceId_sourceType: {
            userId: user.id,
            sourceId: attempt.scenarioId,
            sourceType: 'scenario'
          }
        },
        update: {}, // No-op on retry
        create: {
          userId: user.id,
          action: `Completed Mission: ${attempt.scenario.title}`,
          xpAmount: xpToAward,
          sourceId: attempt.scenarioId,
          sourceType: 'scenario'
        }
      });

      // Only increment xpTotal on the very first pass for this scenario
      if (isFirstAward) {
        await prisma.userProgress.update({
          where: { userId: user.id },
          data: { xpTotal: { increment: xpToAward } }
        });
      }
    } catch (e) {
      console.error("XP Award Error (Mission Scenario):", e);
    }
  }

  revalidatePath("/dashboard/academy");
  return updatedAttempt;
}

/**
 * Fetches the status of a user's scenarios for a module.
 */
export async function getUserScenarioStatuses(moduleId: string) {
  const user = await getUser();
  if (!user) return [];

  return await prisma.scenarioAttempt.findMany({
    where: {
      userId: user.id,
      moduleId
    },
    select: {
      scenarioId: true,
      status: true,
      score: true,
      passed: true
    },
    orderBy: { startedAt: 'desc' }
  });
}

/**
 * Submits a CHART SCENARIO attempt (no trading terminal involved).
 * Uses gradeChartScenario instead of gradeMission.
 * Idempotent: won't re-grade a passed attempt.
 */
export async function submitChartScenarioAttempt(
  attemptId: string,
  actions:   ChartMarkupActions | ChartMarkupActionsV2
) {
  const user = await getUser();
  if (!user) throw new Error("Unauthorized");

  const attempt = await prisma.scenarioAttempt.findUnique({
    where:   { id: attemptId },
    include: { scenario: true },
  });

  if (!attempt)                   throw new Error("Attempt not found");
  if (attempt.userId !== user.id) throw new Error("Forbidden");
  if (attempt.status === "passed") return { attempt, gradingResult: attempt.gradingResult as any };

  // Pull validation config from scenario metadata
  const meta = (attempt.scenario.metadata as any) ?? {};
  let gradingResult: any;

  if (actions.interactionMode === "chart_markup_v2") {
    const requirements = meta.requirements || [];
    gradingResult = gradeChartScenarioV2(
      actions,
      requirements,
      attempt.scenario.passThreshold
    );
  } else {
    const validationZone = meta.validationZones?.[0];
    if (!validationZone) throw new Error("Scenario has no validation zone configured.");

    gradingResult = gradeChartScenario(
      actions,
      validationZone,
      attempt.scenario.passThreshold,
      meta.feedbackOnPass ?? "Correct zone identified.",
      meta.feedbackOnFail ?? "Incorrect zone. Review the lesson and try again.",
      meta.weaknessTagOnFail ?? "zone_identification"
    );
  }

  const isPassed = gradingResult.passed;
  const xpToAward = isPassed ? (attempt.scenario.xpAward || 0) : 0;

  const updatedAttempt = await prisma.scenarioAttempt.update({
    where: { id: attemptId },
    data: {
      status:        isPassed ? "passed" : "failed",
      score:         gradingResult.score,
      passed:        isPassed,
      actions:       actions as any,
      gradingResult: gradingResult as any,
      resultSummary: gradingResult.summary,
      weaknessTags:  gradingResult.weaknessTags,
      xpAwarded:     xpToAward,
      completedAt:   new Date(),
    },
  });

  // Award XP if passed.
  // KEY: Use scenarioId (not attemptId) as the ledger source key.
  // This means the unique constraint on (userId, sourceId, sourceType) will
  // block any second XP entry for this scenario, regardless of how many
  // retry-and-pass attempts the user makes.
  if (isPassed && xpToAward > 0) {
    try {
      // 1. Check if XP was already awarded for this scenario before upsert.
      const existingEntry = await prisma.xPLedgerEntry.findUnique({
        where: {
          userId_sourceId_sourceType: {
            userId: user.id,
            sourceId: attempt.scenarioId,
            sourceType: 'scenario'
          }
        }
      });

      const isFirstAward = !existingEntry;

      // 2. Upsert the ledger entry (no-op if already exists).
      await prisma.xPLedgerEntry.upsert({
        where: {
          userId_sourceId_sourceType: {
            userId: user.id,
            sourceId: attempt.scenarioId,
            sourceType: 'scenario'
          }
        },
        update: {}, // No-op: do NOT change anything on retry
        create: {
          userId: user.id,
          action: `Completed Mission: ${attempt.scenario.title}`,
          xpAmount: xpToAward,
          sourceId: attempt.scenarioId,
          sourceType: 'scenario'
        }
      });

      // 3. Only increment XP total on first-ever pass for this scenario.
      if (isFirstAward) {
        await prisma.userProgress.update({
          where: { userId: user.id },
          data: { xpTotal: { increment: xpToAward } }
        });
      }
    } catch (e) {
      console.error("XP Award Error (Chart Scenario):", e);
    }
  }

  // Dual-gate check for Level 3 unlock (mirrors Level 2 pattern)
  if (isPassed && attempt.scenario.slug === "level-3-final-gate") {
    const testData = await prisma.knowledgeTest.findUnique({ where: { level: 3 } });
    if (testData) {
      const testPassed = await prisma.testAttempt.findFirst({
        where: { userId: user.id, testId: testData.id, passed: true },
      });
      const progress = await prisma.userProgress.findUnique({ where: { userId: user.id } });
      if (testPassed && progress && progress.currentLevel === 3) {
        await prisma.userProgress.update({
          where: { userId: user.id },
          data: { currentLevel: Math.max(progress.currentLevel, 4) },
        });
      }
    }
  }

  // Dual-gate check for Level 2 unlock (existing logic preserved)
  if (isPassed && attempt.scenario.slug === "m2-level-2-map-review-v1") {
    const testData = await prisma.knowledgeTest.findUnique({ where: { level: 2 } });
    if (testData) {
      const testPassed = await prisma.testAttempt.findFirst({
        where: { userId: user.id, testId: testData.id, passed: true },
      });
      const progress = await prisma.userProgress.findUnique({ where: { userId: user.id } });
      if (testPassed && progress && progress.currentLevel === 2) {
        await prisma.userProgress.update({
          where: { userId: user.id },
          data: { currentLevel: Math.max(progress.currentLevel, 3) },
        });
      }
    }
  }

  revalidatePath("/dashboard/academy");
  return { attempt: updatedAttempt, gradingResult };
}


/**
 * Fetches all active training scenarios for global search.
 */
export async function getAllScenarios() {
  return await prisma.trainingScenario.findMany({
    where: { status: 'active' },
    select: {
      id: true,
      slug: true,
      title: true,
      description: true,
      level: true,
      scenarioType: true
    },
    orderBy: { level: 'asc' }
  });
}
