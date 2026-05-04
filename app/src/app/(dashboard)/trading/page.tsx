import { prisma } from "@/lib/prisma";
import { getUser } from "@/lib/auth-actions";
import { getActivePhaseAttempt } from "@/lib/trading-actions";
import { getChartData } from "@/lib/chart/chart-actions";
import { getProfile } from "@/lib/auth-actions";
import { getTrackConfig } from "@/lib/access-control";
import { TradeLogTable } from "@/components/trading/trade-log-table";
import { History, ShieldAlert, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PracticeEnvironment } from "@/components/trading/practice-environment";
import { StartPhaseButton } from "@/components/trading/start-phase-button";
import { serializeData } from "@/lib/utils";
import { startScenarioAttempt, getScenario } from "@/lib/scenario-actions";

export default async function PracticeEnvironmentPage({
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
    <div className="space-y-10 pb-20">
      <section className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-[var(--ln-navy-900)] tracking-tight uppercase">
            Chart Practice
          </h1>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[10px] font-extrabold text-[var(--ln-teal-600)] uppercase tracking-widest bg-[var(--ln-teal-soft)] px-2.5 py-1 rounded-lg border border-[var(--ln-teal-500)]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--ln-teal-500)] animate-pulse" />
              Live Feed Active
            </span>
            <p className="text-[var(--ln-text-secondary)] font-medium text-sm">
              Current Session: Interactive Market Practice.
            </p>
          </div>
        </div>
      </section>

      {activeAttempt ? (
        <PracticeEnvironment
          activeAttempt={activeAttempt}
          initialChartData={initialChartData}
          initialInstrument={initialInstrument}
          userTrack={profile.marketTrack}
        />
      ) : (
        <div className="p-20 bg-white border border-[var(--ln-border)] rounded-[3rem] relative overflow-hidden flex flex-col items-center text-center space-y-8 shadow-sm">
          <div className="absolute inset-0 bg-[var(--ln-teal-soft)]/30 blur-[120px] pointer-events-none" />
          <div className="w-20 h-20 rounded-[2rem] bg-[var(--ln-teal-soft)] flex items-center justify-center text-[var(--ln-teal-500)] relative z-10 shadow-inner">
            <ShieldAlert size={40} />
          </div>
          <div className="space-y-3 relative z-10">
            <h2 className="text-3xl font-extrabold text-[var(--ln-navy-900)] tracking-tight uppercase">
              Academy Access Required
            </h2>
            <p className="text-[var(--ln-text-secondary)] max-w-md mx-auto leading-relaxed font-medium">
              {profile.progress?.currentLevel && profile.progress.currentLevel >= 1 
                ? "You have access to the Practice Environment, but no active session is started. Begin your session below."
                : "Practice access is restricted to verified students. You must pass the Level 1 Knowledge Test and prepare your roadmap before starting a practice session."}
            </p>
          </div>
          
          {profile.progress?.currentLevel && profile.progress.currentLevel >= 1 ? (
            <div className="flex gap-4 relative z-10">
               <StartPhaseButton phaseNumber={1} />
            </div>
          ) : (
            <Link
              href="/course"
              className="px-10 py-4 bg-[var(--ln-teal-500)] text-white font-extrabold rounded-2xl hover:bg-[var(--ln-teal-600)] active:scale-[0.98] transition-all flex items-center gap-3 relative z-10 group shadow-lg shadow-[var(--ln-teal-500)]/20"
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
        <div className="flex items-center justify-between border-b border-[var(--ln-border)] pb-6">
          <div className="flex items-center gap-3">
            <History size={20} className="text-[var(--ln-teal-500)]" />
            <h2 className="text-xl font-extrabold text-[var(--ln-navy-900)] tracking-tight uppercase">
              Practice Journal
            </h2>
          </div>
          <div className="flex gap-2">
            <div className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
              Latest 50 Entries
            </div>
          </div>
        </div>

        <TradeLogTable trades={trades as any} />
      </div>

      {activeAttempt && (
        <div className="p-8 bg-white border border-[var(--ln-border)] rounded-[2.5rem] relative overflow-hidden group shadow-sm">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[var(--ln-teal-soft)]/50 blur-[100px] group-hover:bg-[var(--ln-teal-soft)] transition-all duration-1000" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-1">
              <p className="text-[10px] font-extrabold text-[var(--ln-teal-500)] uppercase tracking-[0.3em]">
                Session Summary
              </p>
              <h3 className="text-2xl font-extrabold text-[var(--ln-navy-900)] tracking-tight uppercase">
                Attempt #{(activeAttempt as any).attemptNumber || '1'} Activity Data
              </h3>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="space-y-1">
                <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                  Total Entries
                </p>
                <p className="text-2xl font-mono font-bold text-[var(--ln-navy-900)]">
                  {(activeAttempt as any).tradesCount || 0}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                  Risk Management
                </p>
                <p className="text-2xl font-mono font-bold text-[var(--ln-teal-600)] uppercase">
                  Secure
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                  Net Change
                </p>
                <p
                  className={`text-2xl font-mono font-bold ${
                    Number((activeAttempt as any).currentEquity || 10000) >=
                    Number((activeAttempt as any).startingEquity || 10000)
                      ? "text-[var(--ln-teal-600)]"
                      : "text-rose-500"
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
