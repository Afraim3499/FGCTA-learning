import { prisma } from "./prisma";

export type NextStepAction = 
  | "START_FOUNDATION"
  | "CONTINUE_ACADEMY"
  | "TAKE_ASSESSMENT"
  | "START_PHASE"
  | "EXECUTE_TRADE"
  | "REVIEW_RULES"
  | "COMPLETE_PHASE"
  | "JOURNEY_COMPLETE";

export interface NextStep {
  action: NextStepAction;
  title: string;
  description: string;
  link: string;
  priority: number;
}

export async function getNextStep(userId: string): Promise<NextStep> {
  // 1. Get user progress
  const progress = await prisma.userProgress.findUnique({
    where: { userId },
  });

  if (!progress) {
    return {
      action: "START_FOUNDATION",
      title: "Begin Your Journey",
      description: "Start with the 'What is Trading' foundation module to unlock the terminal.",
      link: "/course/0",
      priority: 100,
    };
  }

  // 2. Check for active phase attempt
  const activePhase = await prisma.userPhaseAttempt.findFirst({
    where: { userId, status: "active" },
    include: { phase: true },
  });

  if (activePhase) {
    // Calculate target equity
    const targetProfit = activePhase.startingEquity.mul(activePhase.phase.targetProfitPct.div(100));
    const targetEquity = activePhase.startingEquity.add(targetProfit);

    if (activePhase.currentEquity.gte(targetEquity)) {
      return {
        action: "COMPLETE_PHASE",
        title: "Phase Objective Met!",
        description: `You've reached the profit target for Phase ${activePhase.phase.phaseNumber}. Close all trades and secure your progress.`,
        link: "/trading",
        priority: 200,
      };
    }

    return {
      action: "EXECUTE_TRADE",
      title: "Continue Practice Mission",
      description: `Practice session in progress. Apply your learning in a safe environment.`,
      link: "/trading",
      priority: 150,
    };
  }

  // 3. Check Academy Progress
  const currentLevel = progress.currentLevel;
  const modulesInLevel = await prisma.courseModule.findMany({
    where: { level: currentLevel },
    orderBy: { orderIndex: "asc" },
  });

  const completions = await prisma.moduleCompletion.findMany({
    where: { userId, moduleId: { in: modulesInLevel.map((m: any) => m.id) } },
  });

  if (completions.length < modulesInLevel.length) {
    const nextMod = modulesInLevel.find((m: any) => !completions.some((c: any) => c.moduleId === m.id));
    return {
      action: "CONTINUE_ACADEMY",
      title: `Advance to Module ${nextMod?.moduleNumber || currentLevel}`,
      description: `Complete '${nextMod?.title || "next module"}' to build your Level ${currentLevel} foundation.`,
      link: nextMod ? `/course/module/${nextMod.id}` : `/course/${currentLevel}`,
      priority: 100,
    };
  }

  // 4. If all modules complete, check if level needs to be passed (Test)
  const testPassed = await prisma.testAttempt.findFirst({
    where: { 
      userId, 
      passed: true,
      test: { level: currentLevel } 
    },
  });

  if (!testPassed) {
    return {
      action: "TAKE_ASSESSMENT",
      title: "Knowledge Test",
      description: `You've completed all modules in Level ${currentLevel}. Verify your knowledge to unlock the next stage.`,
      link: `/test/${currentLevel}`,
      priority: 180,
    };
  }

  // 5. If test passed but no phase active, and Level 1+
  if (currentLevel >= 1) {
    return {
      action: "START_PHASE",
      title: "Start Practical Mission",
      description: `You've mastered the theory. It's time to build your experience in the PracticeEnvironment.`,
      link: "/trading",
      priority: 170,
    };
  }

  // Fallback
  return {
    action: "JOURNEY_COMPLETE",
    title: "Academy Progress Complete",
    description: "You have completed all current training levels. Monitor your dashboard for new academy updates.",
    link: "/dashboard",
    priority: 50,
  };
}
