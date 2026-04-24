"use server";

import { prisma } from "@/lib/prisma";
import { getUser } from "@/lib/auth-actions";
import { revalidatePath } from "next/cache";
import { ScenarioAttemptStatus } from "@prisma/client";
import { gradeMission } from "@/lib/trading/mission-grader";

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

  // Award XP if passed (Idempotent via unique constraint)
  if (isPassed && xpToAward > 0) {
    try {
      await prisma.xPLedgerEntry.upsert({
        where: {
          userId_sourceId_sourceType: {
            userId: user.id,
            sourceId: attemptId,
            sourceType: 'scenario_attempt'
          }
        },
        update: {}, // Do nothing if already exists
        create: {
          userId: user.id,
          action: `Completed Mission: ${attempt.scenario.title}`,
          xpAmount: xpToAward,
          sourceId: attemptId,
          sourceType: 'scenario_attempt'
        }
      });

      // Update User XP Total
      await prisma.userProgress.update({
        where: { userId: user.id },
        data: {
          xpTotal: { increment: xpToAward }
        }
      });
    } catch (e) {
      console.error("XP Award Error (likely duplicate):", e);
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
