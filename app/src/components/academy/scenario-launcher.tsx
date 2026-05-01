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
      <h3 className="text-[10px] font-extrabold text-[var(--ln-text-secondary)] uppercase tracking-[0.2em] px-2">
        Chart Missions
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
              className="p-6 bg-white rounded-3xl border border-[var(--ln-border)] shadow-sm group hover:border-[var(--ln-teal-500)]/30 transition-all"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-extrabold text-[var(--ln-navy-900)] tracking-tight">{scenario.title}</span>
                    
                    {/* Status badge */}
                    {isPassed ? (
                      <span className="flex items-center gap-1 px-2 py-0.5 bg-[var(--ln-teal-soft)] text-[var(--ln-teal-500)] text-[8px] font-extrabold rounded-lg uppercase border border-[var(--ln-teal-500)]/20">
                        <CheckCircle2 className="w-2.5 h-2.5" /> COMPLETED
                      </span>
                    ) : isFailed ? (
                      <span className="flex items-center gap-1 px-2 py-0.5 bg-rose-50 text-rose-500 text-[8px] font-extrabold rounded-lg uppercase border border-rose-500/20">
                        <XCircle className="w-2.5 h-2.5" /> REVIEW NEEDED
                      </span>
                    ) : status?.status === "in_progress" || status?.status === "started" ? (
                      <span className="flex items-center gap-1 px-2 py-0.5 bg-amber-50 text-amber-500 text-[8px] font-extrabold rounded-lg uppercase border border-amber-500/20">
                        <Loader2 className="w-2.5 h-2.5 animate-spin" /> IN PROGRESS
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 bg-slate-50 text-slate-400 text-[8px] font-extrabold rounded-lg uppercase border border-slate-200">
                        NOT STARTED
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] text-[var(--ln-text-secondary)] font-medium leading-relaxed max-w-[240px]">
                    {scenario.description || "Apply your learning to this practical mission."}
                  </p>
                </div>

                {/* Action button */}
                {chartMission || decisionMission ? (
                  <button
                    onClick={() => onLaunchScenario?.(scenario)}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2.5 rounded-xl text-[10px] font-extrabold tracking-widest uppercase transition-all shrink-0",
                      isPassed
                        ? "bg-slate-50 text-slate-500 hover:bg-slate-100"
                        : "bg-[var(--ln-teal-500)] text-white hover:bg-[var(--ln-teal-600)] shadow-lg shadow-[var(--ln-teal-500)]/20"
                    )}
                  >
                    {isPassed ? "Review" : status ? "Resume" : chartMission ? "Open Chart" : "Start"}
                    <MapPin className="w-3 h-3" />
                  </button>
                ) : (
                  <Link
                    href={`/trading?scenarioId=${scenario.id}&moduleId=${moduleId}`}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2.5 rounded-xl text-[10px] font-extrabold tracking-widest uppercase transition-all shrink-0",
                      isPassed
                        ? "bg-slate-50 text-slate-500 hover:bg-slate-100"
                        : "bg-[var(--ln-teal-500)] text-white hover:bg-[var(--ln-teal-600)] shadow-lg shadow-[var(--ln-teal-500)]/20"
                    )}
                  >
                    {isPassed ? "Review" : status ? "Resume" : "Start"}
                    <Play className="w-3 h-3 fill-current" />
                  </Link>
                )}
              </div>

              {/* Score bar */}
              {status?.score !== undefined && (
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-tighter">
                    Last Result
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-1 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={cn("h-full transition-all", isPassed ? "bg-[var(--ln-teal-500)]" : "bg-amber-500")}
                        style={{ width: `${status.score}%` }}
                      />
                    </div>
                    <span className={cn("text-[10px] font-mono font-bold", isPassed ? "text-[var(--ln-teal-600)]" : "text-amber-500")}>
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
