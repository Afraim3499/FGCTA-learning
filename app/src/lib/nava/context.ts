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

    const currentLevel = progress?.currentLevel ?? 0;

    // Determine journal milestone
    let journalMilestone: "first_note" | "third_note" | null = null;
    if (journalCount === 1) journalMilestone = "first_note";
    else if (journalCount === 3) journalMilestone = "third_note";

    // Detect recent test review need
    const latestTest = testAttempts[0];
    const testReviewCount = testAttempts.filter(t => !t.passed && t.testId === latestTest?.testId).length;
    const hasRecentTestReview = latestTest ? !latestTest.passed : false;

    // Detect recent mission review need
    const latestMission = scenarioAttempts[0];
    const missionReviewCount = scenarioAttempts.filter(s => s.status === 'failed' && s.scenarioId === latestMission?.scenarioId).length;
    const hasRecentMissionReview = latestMission ? latestMission.status === 'failed' : false;

    // Gate & Blocker Logic
    let missingRequirement: "module" | "test" | "mission" | "unknown" | undefined = undefined;
    let gateCta: string | undefined = undefined;

    if (nextStep.action === 'CONTINUE_ACADEMY') {
      missingRequirement = 'module';
      gateCta = nextStep.link;
    } else if (nextStep.action === 'TAKE_ASSESSMENT') {
      missingRequirement = 'test';
      gateCta = nextStep.link;
    } else if (nextStep.action === 'START_PHASE') {
      missingRequirement = 'mission';
      gateCta = nextStep.link;
    }

    // Map next step type
    let nextStepType: "module" | "test" | "mission" | "lab" | "course" | "unknown" = 'unknown';
    if (nextStep.link.includes('/module/')) nextStepType = 'module';
    else if (nextStep.link.includes('/test/')) nextStepType = 'test';
    else if (nextStep.link.includes('/trading')) nextStepType = 'mission';
    else if (nextStep.link.includes('/lab')) nextStepType = 'lab';
    else if (nextStep.link.includes('/course/')) nextStepType = 'course';

    return {
      currentLevel,
      xpTotal: progress?.xpTotal ?? 0,
      
      nextAction: {
        title: nextStep.title,
        href: nextStep.link,
        type: nextStepType,
        confidence: 'high'
      },

      journal: {
        count: journalCount,
        milestone: journalMilestone,
        reviewPromptEligible: journalCount >= 3
      },

      review: {
        test: {
          hasReviewNeeded: hasRecentTestReview,
          level: currentLevel,
          attemptCount: testReviewCount,
          repeated: testReviewCount >= 2,
          ctaHref: `/test/${currentLevel}`
        },
        mission: {
          hasReviewNeeded: hasRecentMissionReview,
          scenarioId: latestMission?.scenarioId,
          level: currentLevel,
          attemptCount: missionReviewCount,
          repeated: missionReviewCount >= 2,
          ctaHref: '/trading'
        }
      },

      gates: {
        missingRequirement,
        level: currentLevel,
        ctaHref: gateCta
      }
    };
  } catch (error) {
    console.error('Error fetching Nava context:', error);
    return {};
  }
}
