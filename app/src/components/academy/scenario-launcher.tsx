"use client";

import { useEffect, useState } from "react";
import { getModuleScenarios, getUserScenarioStatuses } from "@/lib/scenario-actions";
import { Play, CheckCircle2, XCircle, Loader2, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ScenarioLauncherProps {
  moduleId: string;
  onLaunchScenario?: (scenario: any) => void;
  refreshTrigger?: number;
}

export function ScenarioLauncher({ moduleId, onLaunchScenario, refreshTrigger }: ScenarioLauncherProps) {
  const [scenarios,            setScenarios]            = useState<any[]>([]);
  const [statuses,             setStatuses]             = useState<Record<string, any>>({});
  const [isLoading,            setIsLoading]            = useState(true);

  async function loadScenarios() {
    try {
      const [scData, stData] = await Promise.all([
        getModuleScenarios(moduleId),
        getUserScenarioStatuses(moduleId),
      ]);
      setScenarios(scData);
      const statusMap: Record<string, any> = {};
      stData.forEach((s: any) => {
        if (!statusMap[s.scenarioId] || (s.passed && !statusMap[s.scenarioId].passed)) {
          statusMap[s.scenarioId] = s;
        }
      });
      setStatuses(statusMap);
    } catch (error) {
      console.error("Failed to load scenarios:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => { loadScenarios(); }, [moduleId, refreshTrigger]);

  if (isLoading) {
    return (
      <div className="flex items-center gap-3 p-6 bg-white/5 rounded-2xl border border-white/10 animate-pulse">
        <Loader2 className="w-5 h-5 animate-spin text-slate-500" />
        <div className="h-4 w-32 bg-white/10 rounded" />
      </div>
    );
  }

  if (scenarios.length === 0) return null;

  // Determine if a scenario is a chart-markup mission (uses canvas annotation)
  function isChartMarkup(scenario: any): boolean {
    const meta = scenario.metadata ?? {};
    return (
      scenario.scenarioType === "structure_annotation" &&
      (meta.interactionMode === "chart_markup_v1" || meta.interactionMode === "chart_markup_v2")
    );
  }

  // Determine if a scenario is a decision-mode scenario (no terminal, no canvas)
  // These use the ChartScenarioModal launched via onLaunchScenario
  function isDecisionScenario(scenario: any): boolean {
    if (scenario.scenarioType === 'order_entry') return false;
    const meta = scenario.metadata ?? {};
    if (meta.interactionMode === "chart_markup_v1" || meta.interactionMode === "chart_markup_v2") return false;
    return true;
  }

  return (
    <div className="space-y-4">
      <h3 className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-[0.2em] px-2">
        Training Missions
      </h3>
      <div className="space-y-3">
        {scenarios.map((scenario) => {
          const status   = statuses[scenario.id];
          const isPassed = status?.passed;
          const isFailed = status && !status.passed && !["started", "in_progress"].includes(status.status);
          const chartMission = isChartMarkup(scenario);
          const decisionMission = isDecisionScenario(scenario);

          return (
            <div
              key={scenario.id}
              className="p-6 bg-gradient-to-br from-[var(--color-surface-secondary)] to-[var(--color-surface-tertiary)] rounded-[1.5rem] border border-[var(--color-border-default)] group hover:border-[var(--color-brand-500)]/30 transition-all"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold text-white tracking-tight">{scenario.title}</span>
                    {/* Chart mission badge */}
                    {chartMission && (
                      <span className="flex items-center gap-1 px-2 py-0.5 bg-[var(--color-brand-500)]/10 text-[var(--color-brand-400)] text-[8px] font-bold rounded-full uppercase border border-[var(--color-brand-500)]/20">
                        <MapPin className="w-2 h-2" /> Chart Mission
                      </span>
                    )}
                    {/* Decision mission badge */}
                    {decisionMission && !chartMission && (
                      <span className="flex items-center gap-1 px-2 py-0.5 bg-amber-500/10 text-amber-400 text-[8px] font-bold rounded-full uppercase border border-amber-500/20">
                        Decision Scenario
                      </span>
                    )}
                    {/* Status badge */}
                    {isPassed ? (
                      <span className="flex items-center gap-1 px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-[8px] font-bold rounded-full uppercase border border-emerald-500/20">
                        <CheckCircle2 className="w-2.5 h-2.5" /> PASSED
                      </span>
                    ) : isFailed ? (
                      <span className="flex items-center gap-1 px-2 py-0.5 bg-rose-500/10 text-rose-400 text-[8px] font-bold rounded-full uppercase border border-rose-500/20">
                        <XCircle className="w-2.5 h-2.5" /> FAILED
                      </span>
                    ) : status?.status === "in_progress" || status?.status === "started" ? (
                      <span className="flex items-center gap-1 px-2 py-0.5 bg-amber-500/10 text-amber-400 text-[8px] font-bold rounded-full uppercase border border-amber-500/20">
                        <Loader2 className="w-2.5 h-2.5 animate-spin" /> IN PROGRESS
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 bg-slate-500/10 text-slate-400 text-[8px] font-bold rounded-full uppercase border border-slate-500/20">
                        NOT STARTED
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] text-[var(--color-text-muted)] leading-relaxed max-w-[240px]">
                    {scenario.description || "Complete the mission to verify your understanding."}
                  </p>
                </div>

                {/* Action button */}
                {chartMission || decisionMission ? (
                  <button
                    onClick={() => onLaunchScenario?.(scenario)}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2.5 rounded-xl text-[10px] font-bold transition-all shrink-0",
                      isPassed
                        ? "bg-white/5 text-white hover:bg-white/10"
                        : "bg-[var(--color-brand-500)] text-white hover:bg-[var(--color-brand-400)] shadow-[0_0_15px_rgba(99,102,241,0.2)]"
                    )}
                  >
                    {isPassed ? "Review" : status ? "Resume" : chartMission ? "Open Chart" : "Begin Scenario"}
                    <MapPin className="w-3 h-3" />
                  </button>
                ) : (
                  <Link
                    href={`/trading?scenarioId=${scenario.id}&moduleId=${moduleId}`}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2.5 rounded-xl text-[10px] font-bold transition-all shrink-0",
                      isPassed
                        ? "bg-white/5 text-white hover:bg-white/10"
                        : "bg-[var(--color-brand-500)] text-white hover:bg-[var(--color-brand-400)] shadow-[0_0_15px_rgba(99,102,241,0.2)]"
                    )}
                  >
                    {isPassed ? "Review Mission" : status ? "Resume Mission" : "Start Mission"}
                    <Play className="w-3 h-3 fill-current" />
                  </Link>
                )}
              </div>

              {/* Score bar */}
              {status?.score !== undefined && (
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[9px] font-bold text-[var(--color-text-muted)] uppercase tracking-tighter">
                    Score
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-1 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className={cn("h-full transition-all", isPassed ? "bg-emerald-500" : "bg-amber-500")}
                        style={{ width: `${status.score}%` }}
                      />
                    </div>
                    <span className={cn("text-[10px] font-mono font-bold", isPassed ? "text-emerald-400" : "text-amber-400")}>
                      {status.score}%
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
