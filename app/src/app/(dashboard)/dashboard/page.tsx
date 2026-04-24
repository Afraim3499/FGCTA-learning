import { prisma } from "@/lib/prisma";
import { getUser } from "@/lib/auth-actions";
import { 
  getActivePhaseAttempt, 
  getPhasePerformance, 
  syncDailyState 
} from "@/lib/trading-actions";
import { PhaseStatusCard } from "@/components/trading/phase-status-card";
import { MetricsGrid } from "@/components/trading/metrics-grid";
import { XPBar } from "@/components/trading/xp-bar";
import { PerformanceChart } from "@/components/trading/performance-chart";
import { XPLedgerWidget } from "@/components/dashboard/xp-ledger-widget";
import { LearningProgressCard } from "@/components/dashboard/learning-progress-card";
import { Target, TrendingUp, ShieldCheck, BookOpen } from "lucide-react";
import { getNextStep } from "@/lib/guidance-utils";
import { NextStepCard } from "@/components/dashboard/next-step-card";
import Link from "next/link";
import { MissionReadinessCard } from "@/components/dashboard/mission-readiness-card";
import { UserIdentityWidget } from "@/components/dashboard/user-identity-widget";

import { updateActivityStreak, checkMilestones } from "@/lib/retention-actions";
import { Star } from "lucide-react";
import { ProgressionTracker } from "@/components/academy/progression-tracker";
import { serializeData } from "@/lib/utils";

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
  const rawActiveAttempt = await getActivePhaseAttempt();
  const activeAttempt = serializeData(rawActiveAttempt);
  const performance = activeAttempt 
    ? await getPhasePerformance(activeAttempt.id)
    : null;

  const snapshots = activeAttempt 
    ? await prisma.dailySnapshot.findMany({
        where: { attemptId: activeAttempt.id },
        orderBy: { date: "asc" },
      })
    : [];

  const chartData = snapshots.map(s => ({
    date: s.date.toLocaleDateString(),
    equity: Number(s.endingEquity),
  }));

  const userBadges = await prisma.userBadge.findMany({
    where: { userId: user.id },
    include: { badge: true },
    take: 3,
    orderBy: { earnedAt: "desc" }
  });

  return (
    <div className="space-y-10 pb-20">
      {/* System Status Ticker */}
      <div className="flex items-center gap-6 overflow-hidden bg-accent-blue/5 border-y border-accent-blue/10 py-2 -mx-8 px-8">
         <div className="flex items-center gap-2 shrink-0">
            <div className="w-1.5 h-1.5 rounded-full bg-pass-green animate-pulse" />
            <span className="text-[9px] font-bold text-pass-green uppercase tracking-[0.2em]">System_Online</span>
         </div>
         <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
            <span className="text-[9px] font-mono text-text-muted uppercase tracking-widest">Global_Liquidity_Index: 104.50 [+0.2%]</span>
            <span className="text-[9px] font-mono text-text-muted uppercase tracking-widest">DXY_Correl: High</span>
            <span className="text-[9px] font-mono text-text-muted uppercase tracking-widest">Active_Mission: Level_{progress?.currentLevel ?? 0}_Foundations</span>
            <span className="text-[9px] font-mono text-text-muted uppercase tracking-widest">Institutional_Bias: Bullish_Expansion</span>
         </div>
      </div>

      {/* Header Section */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="text-accent-blue text-[10px] font-bold tracking-[0.4em] uppercase">Tactical Overview</div>
          <h1 className="text-5xl font-black text-white tracking-tighter uppercase">Command Center</h1>
          <p className="text-text-muted font-medium italic">Welcome back, Operator. Synchronizing market data...</p>
        </div>
        <div className="flex gap-4">
           <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4">
              <div className="text-right">
                 <p className="text-[8px] font-bold text-text-muted uppercase">Global Rank</p>
                 <p className="text-lg font-black text-white">#1,240</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-right">
                 <p className="text-[8px] font-bold text-text-muted uppercase">Precision</p>
                 <p className="text-lg font-black text-pass-green">94.2%</p>
              </div>
           </div>
        </div>
      </section><ProgressionTracker currentTier={progress?.currentLevel ?? 1} totalTiers={8} completedModules={8} totalModules={69} operationalScore={5} />

      {/* Guidance Section */}
      <NextStepCard step={nextStep} />

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Trading Phase & Performance */}
        <div className="lg:col-span-2 space-y-8">
          {activeAttempt ? (
            <>
              <PhaseStatusCard 
                phaseNumber={activeAttempt.phase.phaseNumber}
                startingCapital={Number(activeAttempt.startingEquity)}
                currentEquity={Number(activeAttempt.currentEquity)}
                targetProfitPct={Number(activeAttempt.phase.targetProfitPct)}
                maxDrawdownPct={Number(activeAttempt.phase.maxDrawdownPct)}
                status={activeAttempt.status as any}
              />
              
              <MetricsGrid 
                winRate={performance?.winRate ?? 0}
                profitFactor={performance?.profitFactor ?? 0}
                avgRMultiple={performance?.avgRMultiple ?? 0}
                totalTrades={performance?.totalTrades ?? 0}
                netPnl={performance?.netPnl ?? 0}
                currentDrawdown={performance?.currentDrawdown ?? 0}
              />

              <PerformanceChart 
                data={chartData} 
                startingEquity={Number(activeAttempt.startingEquity)} 
              />
            </>
          ) : (
            <MissionReadinessCard 
              currentLevel={progress?.currentLevel ?? 0}
              nextStepLink={nextStep.link}
              nextStepTitle={nextStep.action === "START_FOUNDATION" || nextStep.action === "CONTINUE_ACADEMY" ? "Resume Training" : "Take Action"}
            />
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <UserIdentityWidget 
            streakDays={progress?.streakDays ?? 0}
            xpTotal={progress?.xpTotal ?? 0}
            xpRank={progress?.xpRank ?? "Recruit"}
          />

          <LearningProgressCard />

          {/* Recent Milestones */}
          {userBadges.length > 0 && (
            <div className="p-8 bg-[var(--color-surface-secondary)] border border-[var(--color-border-default)] rounded-[2.5rem] space-y-6">
              <h3 className="text-[10px] font-bold text-white uppercase tracking-[0.2em] flex items-center gap-2">
                <Star className="w-3 h-3 text-amber-400" />
                Latest Ascension
              </h3>
              <div className="space-y-4">
                {userBadges.map((ub) => (
                  <div key={ub.id} className="flex items-center gap-4 group/item">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/5 border border-amber-500/10 flex items-center justify-center text-amber-500 text-xs font-bold group-hover/item:border-amber-500/30 transition-all">
                      {ub.badge.name[0]}
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-white leading-tight uppercase tracking-tight">{ub.badge.name}</p>
                      <p className="text-[10px] text-[var(--color-text-muted)] font-mono uppercase mt-0.5">{new Date(ub.earnedAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <XPLedgerWidget />
          
          {/* Quick Rules Ref */}
          <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-2xl space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-indigo-400" />
              Active Constraints
            </h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-500">Max Risk</span>
                <span className="text-white font-mono">{activeAttempt?.phase.maxRiskPerTrade.toString() ?? "2"}%</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-500">Daily Trade Limit</span>
                <span className="text-white font-mono">{activeAttempt?.phase.maxTradesPerDay.toString() ?? "5"} Trades</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-500">Stop Loss</span>
                <span className="text-emerald-400 uppercase font-bold">Mandatory</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
