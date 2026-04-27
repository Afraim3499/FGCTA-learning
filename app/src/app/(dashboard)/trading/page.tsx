import { prisma } from "@/lib/prisma";
import { getUser } from "@/lib/auth-actions";
import { getActivePhaseAttempt } from "@/lib/trading-actions";
import { getChartData } from "@/lib/chart/chart-actions";
import { getProfile } from "@/lib/auth-actions";
import { getTrackConfig } from "@/lib/access-control";
import { TradeLogTable } from "@/components/trading/trade-log-table";
import { History, ShieldAlert, ArrowRight } from "lucide-react";
import Link from "next/link";
import { TradingTerminal } from "@/components/trading/trading-terminal";
import { StartPhaseButton } from "@/components/trading/start-phase-button";
import { serializeData } from "@/lib/utils";
import { startScenarioAttempt, getScenario } from "@/lib/scenario-actions";

export default async function TradingHubPage({
  searchParams,
}: {
  searchParams: Promise<{ scenarioId?: string; moduleId?: string }>;
}) {
  const profile = await getProfile();
  if (!profile) return null;

  const resolvedSearchParams = await searchParams;
  const scenarioId = resolvedSearchParams.scenarioId;
  const moduleId = resolvedSearchParams.moduleId;

  let activeAttempt = null;
  let scenarioData = null;

  if (scenarioId) {
    // Scenario Mode: Level 0 allowed
    activeAttempt = await startScenarioAttempt(scenarioId, moduleId);
    scenarioData = await getScenario(scenarioId);
  } else {
    // Phase Mode: Requires Level 1+ and active phase
    const rawActiveAttempt = await getActivePhaseAttempt();
    activeAttempt = serializeData(rawActiveAttempt);
  }

  const rawTrades = activeAttempt
    ? await prisma.trade.findMany({
        where: { attemptId: activeAttempt.id },
        orderBy: { openedAt: "desc" },
      })
    : [];
  const trades = serializeData(rawTrades);

  // Fetch initial chart data server-side
  const trackConfig = getTrackConfig(profile.marketTrack);
  const initialInstrument = scenarioData?.instrument || trackConfig.instruments[0];
  const initialChartData = await getChartData(initialInstrument, "15m");

  return (
    <div className="space-y-10 pb-10">
      <section className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-white tracking-tight uppercase">
            Simulation Hub
          </h1>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[10px] font-bold text-[var(--color-profit)] uppercase tracking-widest bg-[var(--color-profit)]/5 px-2 py-0.5 rounded-md border border-[var(--color-profit)]/10">
              <span className="w-1 h-1 rounded-full bg-[var(--color-profit)] animate-pulse" />
              Live Feed Active
            </span>
            <p className="text-slate-500 italic text-sm">
              Operational Environment: Institutional-Grade Execution.
            </p>
          </div>
        </div>
      </section>

      {activeAttempt ? (
        <TradingTerminal
          activeAttempt={activeAttempt}
          initialChartData={initialChartData}
          initialInstrument={initialInstrument}
          userTrack={profile.marketTrack}
        />
      ) : (
        <div className="p-20 bg-[var(--color-surface-secondary)] border border-[var(--color-border-default)] rounded-[3rem] relative overflow-hidden flex flex-col items-center text-center space-y-8">
          <div className="absolute inset-0 bg-accent-blue/5 blur-[120px] pointer-events-none" />
          <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-blue relative z-10">
            <ShieldAlert size={40} />
          </div>
          <div className="space-y-3 relative z-10">
            <h2 className="text-3xl font-bold text-white tracking-tighter uppercase">
              Operational Clearance Required
            </h2>
            <p className="text-slate-500 max-w-md mx-auto leading-relaxed">
              {profile.progress?.currentLevel && profile.progress.currentLevel >= 1 
                ? "You have clearance to trade, but no active session is commissioned. Initialize your protocol below."
                : "Terminal access is restricted to verified candidates. You must pass the Level 1 Knowledge Assessment and synchronize your market protocol before initiating a simulation phase."}
            </p>
          </div>
          
          {profile.progress?.currentLevel && profile.progress.currentLevel >= 1 ? (
            <div className="flex gap-4 relative z-10">
               <StartPhaseButton phaseNumber={1} />
            </div>
          ) : (
            <Link
              href="/course"
              className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-white/90 active:scale-[0.98] transition-all flex items-center gap-3 relative z-10 group"
            >
              Access Academy
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          )}
        </div>
      )}

      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-white/5 pb-6">
          <div className="flex items-center gap-3">
            <History size={20} className="text-[var(--color-brand-400)]" />
            <h2 className="text-xl font-bold text-white tracking-tight">
              Execution Journal
            </h2>
          </div>
          <div className="flex gap-2">
            <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Latest 50 Cycles
            </div>
          </div>
        </div>

        <TradeLogTable trades={trades as any} />
      </div>

      {activeAttempt && (
        <div className="p-8 bg-[var(--color-surface-secondary)] border border-[var(--color-border-default)] rounded-[2.5rem] relative overflow-hidden group">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[var(--color-brand-500)]/5 blur-[100px] group-hover:bg-[var(--color-brand-500)]/10 transition-all duration-1000" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-[var(--color-brand-400)] uppercase tracking-[0.3em]">
                Protocol Summary
              </p>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Attempt #{(activeAttempt as any).attemptNumber || '1'} Operational Telemetry
              </h3>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  Trades Executed
                </p>
                <p className="text-2xl font-mono font-bold text-white">
                  {(activeAttempt as any).tradesCount || 0}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  Risk Compliance
                </p>
                <p className="text-2xl font-mono font-bold text-emerald-400 uppercase">
                  Secure
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  Net Differential
                </p>
                <p
                  className={`text-2xl font-mono font-bold ${
                    Number((activeAttempt as any).currentEquity || 10000) >=
                    Number((activeAttempt as any).startingEquity || 10000)
                      ? "text-emerald-400"
                      : "text-rose-400"
                  }`}
                >
                  $
                  {(
                    Number((activeAttempt as any).currentEquity || 10000) -
                    Number((activeAttempt as any).startingEquity || 10000)
                  ).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
