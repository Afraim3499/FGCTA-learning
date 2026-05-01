import { prisma } from "@/lib/prisma";
import { getUser } from "@/lib/auth-actions";
import { getNextStep } from "@/lib/guidance-utils";
import { getCourseLevels } from "@/lib/course-actions";
import { updateActivityStreak, checkMilestones } from "@/lib/retention-actions";
import { syncDailyState } from "@/lib/trading-actions";
import { ContinueLearningCard } from "@/components/dashboard/cards/continue-learning-card";
import { CurrentProgressCard } from "@/components/dashboard/cards/current-progress-card";
import { NextGateCard } from "@/components/dashboard/cards/next-gate-card";
import { LearningPathCard } from "@/components/dashboard/cards/learning-path-card";
import { RecentActivityCard } from "@/components/dashboard/cards/recent-activity-card";
import { MilestoneMapCard } from "@/components/dashboard/cards/milestone-map-card";
import { SafeLearningCard } from "@/components/dashboard/cards/safe-learning-card";
import { LearningNoteCard } from "@/components/dashboard/cards/learning-note-card";

export default async function DashboardPage() {
  const user = await getUser();
  if (!user) return null;

  // Sync daily state & retention metrics
  await Promise.all([
    syncDailyState(),
    updateActivityStreak(),
    checkMilestones()
  ]);

  const progress = await prisma.userProgress.findUnique({
    where: { userId: user.id },
  });

  const nextStep = await getNextStep(user.id);
  const levels = await getCourseLevels();
  const activeLevel = levels.find(l => !l.locked && l.completionPct < 100) || levels[levels.length - 1] || levels[0];
  
  // Recent Activity Sourcing
  const ledgerEntries = await prisma.xPLedgerEntry.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    take: 4
  });

  // Activity Label Mapping
  const activityMap: Record<string, string> = {
    "TRADE_EXECUTE": "Submitted Practice Order",
    "TEST_COMPLETE": "Passed Knowledge Test",
    "MODULE_COMPLETE": "Completed Module",
    "SCENARIO_PASS": "Passed Chart Mission",
    "SCENARIO_ATTEMPT": "Attempted Chart Mission",
    "XP_AWARD": "Progress Updated",
  };

  const recentActivity = ledgerEntries.map((entry: any) => {
    const titleLower = entry.action.toLowerCase();
    let type: "complete" | "pass" | "start" | "review" | "other" = "other";
    
    if (titleLower.includes("complete") || titleLower.includes("module")) type = "complete";
    if (titleLower.includes("pass") || titleLower.includes("test") || titleLower.includes("assessment")) type = "pass";
    if (titleLower.includes("start")) type = "start";
    if (titleLower.includes("review")) type = "review";

    // Format relative time safely
    const diffHours = Math.round((new Date().getTime() - entry.createdAt.getTime()) / (1000 * 60 * 60));
    const timeAgo = diffHours === 0 ? "Just now" : diffHours < 24 ? `${diffHours}h ago` : diffHours < 48 ? "Yesterday" : `${Math.floor(diffHours/24)} days ago`;

    return {
      id: entry.id,
      title: activityMap[entry.action] || entry.action,
      timeAgo,
      type
    };
  });

  const isAdmin = user.role === "ADMIN";

  // Gate Status Logic (Derived from nextStep and completion)
  let missionStatus: "Locked" | "Not Started" | "Passed" = "Locked";
  let testStatus: "Locked" | "Not Started" | "Passed" = "Locked";

  if (activeLevel.completionPct === 100) {
    missionStatus = "Passed";
    testStatus = "Passed";
  } else if (nextStep.action === "TAKE_ASSESSMENT") {
    missionStatus = "Passed";
    testStatus = "Not Started";
  } else if (nextStep.action === "START_PHASE" || nextStep.action === "EXECUTE_TRADE") {
    missionStatus = "Not Started";
    testStatus = "Locked";
  } else if (activeLevel.completionPct > 50) {
    missionStatus = "Not Started";
    testStatus = "Locked";
  } else {
    missionStatus = "Locked";
    testStatus = "Locked";
  }

  // Calculate global completion for the progress card
  const totalModules = levels.reduce((acc, curr) => acc + curr.totalModules, 0);
  const completedModules = levels.reduce((acc, curr) => acc + curr.completedModules, 0);
  const globalCompletionPct = totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0;

  return (
    <div className="space-y-6 pb-20">
      {/* Header Section */}
      <section className="space-y-2">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold text-[var(--ln-navy-900)]">Learning Dashboard</h1>
          {isAdmin && (
            <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-slate-100 text-slate-500 uppercase tracking-widest border border-slate-200">
              Admin/Test Account
            </span>
          )}
        </div>
        <p className="text-[var(--ln-text-secondary)] font-medium">Welcome back. Continue learning with structure.</p>
      </section>

      {/* Main Grid Top Row (Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
        <ContinueLearningCard 
          step={nextStep} 
          progressPercent={activeLevel.completionPct} 
        />
        
        <CurrentProgressCard 
          currentLevel={progress?.currentLevel ?? 0}
          levelTitle={activeLevel.title}
          xpTotal={progress?.xpTotal ?? 0}
          completionPercent={activeLevel.completionPct}
          nextGate={missionStatus === "Passed" ? "Knowledge Test" : "Chart Map Mission"}
        />
        
        <NextGateCard 
          level={activeLevel.level}
          missionStatus={missionStatus}
          testStatus={testStatus}
        />
      </div>

      {/* Learning Path (Horizontal Stepper) */}
      <div className="w-full">
        <LearningPathCard levels={levels.map(l => ({
          level: l.level,
          title: l.title,
          completed: l.completionPct === 100,
          locked: l.locked
        }))} />
      </div>

      {/* Main Grid Bottom Row */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-5">
        <div className="xl:col-span-2 flex flex-col gap-4 md:gap-5">
          <MilestoneMapCard />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            <LearningNoteCard />
            <SafeLearningCard />
          </div>
        </div>
        
        <div className="xl:col-span-1 h-full">
          <RecentActivityCard activities={recentActivity} />
        </div>
      </div>
    </div>
  );
}
