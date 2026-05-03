import { prisma } from "@/lib/prisma";
import { getNextStep } from "@/lib/guidance-utils";
import { NavaContextViewModel } from "./types";

export async function getNavaContext(userId: string): Promise<NavaContextViewModel> {
  try {
    const [progress, nextStep, journalCount, testAttempts, scenarioAttempts] = await Promise.all([
      prisma.userProgress.findUnique({ where: { userId } }),
      getNextStep(userId),
      prisma.savedAnalysis.count({ where: { userId } }),
      prisma.testAttempt.findMany({ 
        where: { userId },
        orderBy: { attemptedAt: 'desc' },
        take: 5
      }),
      prisma.scenarioAttempt.findMany({
        where: { userId },
        orderBy: { startedAt: 'desc' },
        take: 5
      })
    ]);

    // Determine journal milestone
    let journalMilestone: "first_note" | "third_note" | null = null;
    if (journalCount === 1) journalMilestone = "first_note";
    else if (journalCount === 3) journalMilestone = "third_note";

    // Detect recent test review need
    const latestTest = testAttempts[0];
    const hasRecentTestReview = latestTest ? !latestTest.passed : false;

    // Detect recent mission review need
    const latestMission = scenarioAttempts[0];
    const hasRecentMissionReview = latestMission ? latestMission.status === 'failed' : false;

    // Map next step type
    let type: "module" | "test" | "mission" | "lab" | "course" | "unknown" = 'unknown';
    if (nextStep.link.includes('/module/')) type = 'module';
    else if (nextStep.link.includes('/test/')) type = 'test';
    else if (nextStep.link.includes('/trading')) type = 'mission';
    else if (nextStep.link.includes('/lab')) type = 'lab';
    else if (nextStep.link.includes('/course/')) type = 'course';

    return {
      currentLevel: progress?.currentLevel ?? 0,
      xpTotal: progress?.xpTotal ?? 0,
      
      nextAction: {
        title: nextStep.title,
        href: nextStep.link,
        type,
        confidence: 'high'
      },

      journal: {
        count: journalCount,
        milestone: journalMilestone
      },

      testReview: {
        hasRecentReviewNeeded: hasRecentTestReview,
        attemptCount: testAttempts.length
      },

      missionReview: {
        hasRecentReviewNeeded: hasRecentMissionReview,
        attemptCount: scenarioAttempts.length
      }
    };
  } catch (error) {
    console.error('Error fetching Nava context:', error);
    return {};
  }
}
