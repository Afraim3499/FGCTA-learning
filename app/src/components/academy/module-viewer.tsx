"use client";

import { useState } from "react";
import { MarkdownRenderer } from "./markdown-renderer";
import { completeModule } from "@/lib/course-actions";
import { CheckCircle2, Layout, Globe, Bitcoin, Target, Loader2, ArrowLeft, ArrowRight, ArrowUpRight, FlaskConical, ExternalLink, Lightbulb, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { PointClickEngine, PointClickTaskResult } from "./interactive/point-click-engine";
import { ScenarioDecisionEngine, ScenarioTaskResult } from './interactive/scenario-decision-engine';
import { MiniReplayEngine, MiniReplayTaskResult } from './interactive/mini-replay-engine';
import { ChoiceBlockPractice } from './interactive/choice-block-practice';
import { ScenarioLauncher } from "./scenario-launcher";
import { ChartScenarioModal } from "@/components/academy/chart-scenario";
import { getModuleScenarios } from "@/lib/scenario-actions";

type TaskResultType = PointClickTaskResult | ScenarioTaskResult | MiniReplayTaskResult;

interface ModuleViewerProps {
  module: {
    id: string;
    title: string;
    content: string;
    forexAdaptation?: string | null;
    cryptoAdaptation?: string | null;
    goldAdaptation?: string | null;
    completed: boolean;
    level: number;
    prevModuleId: string | null;
    nextModuleId: string | null;
    strategyFamilies?: string[];
    logicIds?: string[];
    moduleNumber?: string;
    interactiveTaskType?: string | null;
    interactiveTaskData?: any;
  };
  userTrack: string;
}

type Tab = "core" | "forex" | "crypto" | "gold";

export function ModuleViewer({ module, userTrack }: ModuleViewerProps) {
  const [activeTab, setActiveTab] = useState<Tab>("core");
  const [isCompleting, setIsCompleting] = useState(false);
  const [taskResult, setTaskResult] = useState<TaskResultType | null>(null);
  const [activeChartScenario, setActiveChartScenario] = useState<any | null>(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const router = useRouter();

  const isMasterAdmin = userTrack === "multi";
  const requiresTask = !!module.interactiveTaskType;
  const isSyncLocked = requiresTask && !taskResult;

  const tabs = [
    { id: "core", label: "Core Concept", icon: Layout, available: true },
    { 
      id: "forex", 
      label: "Forex Adaptation", 
      icon: Globe, 
      available: !!module.forexAdaptation && (isMasterAdmin || userTrack === "forex") 
    },
    { 
      id: "crypto", 
      label: "Crypto Adaptation", 
      icon: Bitcoin, 
      available: !!module.cryptoAdaptation && (isMasterAdmin || userTrack === "crypto") 
    },
    { 
      id: "gold", 
      label: "Gold Adaptation", 
      icon: Target, 
      available: !!module.goldAdaptation && (isMasterAdmin || userTrack === "gold") 
    },
  ];

  const handleComplete = async () => {
    setIsCompleting(true);
    try {
      const result = await completeModule(module.id, taskResult || undefined);
      if (result.success) {
        router.refresh();
      } else if ("error" in result) {
        alert(result.error);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsCompleting(false);
    }
  };

  const handleLaunchScenario = (scenario: any) => {
    setActiveChartScenario(scenario);
  };

  const handleAutoLaunch = async () => {
    const scenarios = await getModuleScenarios(module.id);
    if (scenarios && scenarios.length > 0) {
      const bestMission = scenarios.find((s: any) => {
        const meta = s.metadata ?? {};
        return meta.interactionMode === "chart_markup_v1" || meta.interactionMode === "chart_markup_v2";
      }) || scenarios[0];
      
      if (bestMission.scenarioType === 'order_entry') {
        router.push(`/trading?scenarioId=${bestMission.id}&moduleId=${module.id}`);
      } else {
        setActiveChartScenario(bestMission);
      }
    }
  };

  const handleChartPass = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  const handleChartClose = () => {
    setActiveChartScenario(null);
    setRefreshTrigger(prev => prev + 1);
  };

  const handleProceed = async (targetPath: string) => {
    if (!module.completed) {
      setIsCompleting(true);
      try {
        await completeModule(module.id, taskResult || undefined);
      } catch (error) {
        console.error("Failed to sync before proceeding:", error);
      } finally {
        setIsCompleting(false);
      }
    }
    router.push(targetPath);
  };

  const currentContent = 
    activeTab === "forex" ? module.forexAdaptation :
    activeTab === "crypto" ? module.cryptoAdaptation :
    activeTab === "gold" ? module.goldAdaptation :
    module.content;

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        <aside className="lg:col-span-1 space-y-8">
          <div className="space-y-3">
            <h3 className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-[0.3em] px-4">Mission Protocols</h3>
            <div className="p-1.5 bg-[var(--color-surface-tertiary)] rounded-[1.5rem] border border-[var(--color-border-default)] flex flex-col gap-1 overflow-hidden">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  disabled={tab.id !== "core" && !tab.available}
                  onClick={() => setActiveTab(tab.id as Tab)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-4 rounded-xl text-xs font-bold transition-all relative group",
                    activeTab === tab.id
                      ? "bg-[var(--color-brand-500)] text-white shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                      : tab.id !== "core" && !tab.available
                      ? "opacity-20 grayscale cursor-not-allowed text-[var(--color-text-muted)]"
                      : "text-[var(--color-text-secondary)] hover:bg-white/5 hover:text-white"
                  )}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                  {tab.id === userTrack && tab.id !== "core" && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                      <span className="text-[8px] font-bold text-[var(--color-brand-400)] uppercase tracking-tighter">Your Track</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-[var(--color-surface-secondary)] to-[var(--color-surface-tertiary)] rounded-[2rem] border border-[var(--color-border-default)] space-y-6 relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-24 h-24 bg-[var(--color-brand-500)]/5 blur-3xl group-hover:bg-[var(--color-brand-500)]/10 transition-all" />
            <div className="flex items-center gap-2 mb-4 text-[var(--color-brand-400)] text-sm font-bold tracking-wide">
              <CheckCircle2 className="w-4 h-4" />
              OPERATIONAL SYNC
            </div>
            <p className="text-xs text-[var(--color-text-muted)] mb-6 leading-relaxed">
              {module.completed
                ? `Synchronized with protocol.${module.level > 1 ? ` +50 XP contributed to your global network rank.` : ' +0 XP (Practice Node).'}` 
                : "Absorb the core logic and track-specific adaptations to synchronize your progress."}
            </p>
            <button
              onClick={handleComplete}
              disabled={isCompleting || module.completed || isSyncLocked}
              className={cn(
                "w-full py-3 px-4 rounded-xl font-bold tracking-widest text-xs transition-all duration-300 flex items-center justify-center gap-2",
                isCompleting ? "bg-[var(--color-brand-500)]/50 text-white cursor-not-allowed" :
                module.completed
                  ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                  : isSyncLocked
                    ? "bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700"
                    : "bg-[var(--color-brand-500)] hover:bg-[var(--color-brand-400)] text-white shadow-[0_0_20px_rgba(99,102,241,0.2)]"
              )}
            >
              {isCompleting ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> SYNCHRONIZING...</>
              ) : module.completed ? (
                <><CheckCircle2 className="w-4 h-4" /> SYNCHRONIZED</>
              ) : isSyncLocked ? (
                <><Target className="w-4 h-4" /> COMPLETE TASK TO SYNC</>
              ) : (
                <><CheckCircle2 className="w-4 h-4" /> SYNC PROGRESS</>
              )}
            </button>
          </div>

          <ScenarioLauncher 
            moduleId={module.id} 
            onLaunchScenario={handleLaunchScenario}
            refreshTrigger={refreshTrigger}
          />

          {module.level >= 1 && module.logicIds && module.logicIds.length > 0 && (
            <div className="p-8 bg-[var(--color-brand-500)]/5 border border-[var(--color-brand-500)]/20 rounded-[2rem] space-y-4 relative overflow-hidden group/lab">
              <div className="flex items-center gap-3 text-[10px] font-bold text-[var(--color-brand-400)] uppercase tracking-[0.2em]">
                <FlaskConical className="w-4 h-4" />
                Strategic Protocol
              </div>
              <div className="space-y-2">
                {module.logicIds.map((id) => (
                  <div key={id} className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-xl">
                    <span className="text-[10px] font-mono font-bold text-white">{id}</span>
                    <Link href="/lab" className="text-[10px] font-bold text-[var(--color-brand-400)] hover:text-white flex items-center gap-1 transition-colors">
                      Lab <ExternalLink size={10} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </aside>

        <main className="lg:col-span-3 min-h-[700px] bg-[var(--color-surface-secondary)] rounded-[2.5rem] border border-[var(--color-border-default)] p-10 md:p-16 shadow-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand-500)]/5 blur-[120px] rounded-full pointer-events-none group-hover:bg-[var(--color-brand-500)]/10 transition-all duration-1000" />
          <div className="relative z-10">
            <MarkdownRenderer 
              content={currentContent || "No adaptation data exists for this market protocol."} 
              onLaunchScenario={handleAutoLaunch}
            />
          </div>

          {module.interactiveTaskType === 'type_a_point_click' && module.interactiveTaskData && (
            <div className="mt-8 pt-8 border-t border-[var(--color-border-default)] relative z-20">
              <PointClickEngine
                taskId={`task_${module.id}`}
                moduleId={module.id}
                chartData={module.interactiveTaskData.chartData}
                prompt={module.interactiveTaskData.prompt}
                validationZones={module.interactiveTaskData.validationZones}
                hints={module.interactiveTaskData.hints}
                rationale={module.interactiveTaskData.rationale}
                onPass={(result) => setTaskResult(result)}
              />
            </div>
          )}

          {module.interactiveTaskType === 'type_b_scenario' && module.interactiveTaskData && (
            <div className="mt-8 pt-8 border-t border-[var(--color-border-default)] relative z-20">
              <ScenarioDecisionEngine
                taskId={`task_${module.id}`}
                moduleId={module.id}
                contextPrompt={module.interactiveTaskData.contextPrompt}
                options={module.interactiveTaskData.options}
                onPass={(result) => setTaskResult(result)}
              />
            </div>
          )}

          {module.interactiveTaskType === 'type_c_replay' && module.interactiveTaskData && (
            <div className="mt-8 pt-8 border-t border-[var(--color-border-default)] relative z-20">
              <MiniReplayEngine
                taskId={`task_${module.id}`}
                moduleId={module.id}
                chartData={module.interactiveTaskData.chartData}
                initialCandleCount={module.interactiveTaskData.initialCandleCount}
                prompt={module.interactiveTaskData.prompt}
                rationale={module.interactiveTaskData.rationale}
                onPass={(result) => setTaskResult(result)}
              />
            </div>
          )}

          {/* Level 3 Practice: Choice Block (non-graded, unlimited retries, 0 XP) */}
          {(module.interactiveTaskType === 'choice_block' || module.interactiveTaskType === 'identify_block') && module.interactiveTaskData?.question && (
            <ChoiceBlockPractice
              question={module.interactiveTaskData.question}
              options={module.interactiveTaskData.options || []}
              onPass={() => setTaskResult({ type: 'practice_complete', score: 100 } as any)}
            />
          )}

          {/* Level 3 Scenario Link: shown as a call-to-action, scenario launched via ScenarioLauncher sidebar */}
          {module.interactiveTaskType === 'scenario_link' && module.interactiveTaskData?.scenarioSlug && (
            <div className="mt-8 pt-8 border-t border-[var(--color-border-default)] relative z-20">
              <div className="p-6 bg-amber-500/5 border border-amber-500/20 rounded-2xl text-center space-y-3">
                <p className="text-xs font-bold text-amber-400 uppercase tracking-widest">Final Assessment</p>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Launch the <strong className="text-white">Level 3 Entry Logic Assessment</strong> from the sidebar panel to complete this module.
                </p>
                <p className="text-[10px] text-slate-500">Pass threshold: {module.interactiveTaskData.passThreshold}% · No trading terminal · Decision-only</p>
              </div>
            </div>
          )}
        </main>
      </div>

      <footer className="flex items-center justify-between pt-8 border-t border-white/5">
        {module.prevModuleId ? (
          <Link
            href={`/course/module/${module.prevModuleId}`}
            className="flex items-center gap-3 text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest hover:text-white transition-all group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Previous Node
          </Link>
        ) : <div />}

        {module.nextModuleId ? (
          <button
            onClick={() => handleProceed(`/course/module/${module.nextModuleId}`)}
            disabled={isCompleting || isSyncLocked}
            className="flex items-center gap-3 text-[10px] font-bold text-white uppercase tracking-widest hover:text-[var(--color-brand-400)] transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isCompleting ? "SYNCING..." : "Advance to Next Node"}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        ) : (
          <button
            onClick={() => handleProceed(module.completed ? `/test/${module.level}` : "/course")}
            disabled={isCompleting || isSyncLocked}
            className="flex items-center gap-3 text-[10px] font-bold text-[var(--color-brand-400)] uppercase tracking-widest hover:text-[var(--color-brand-300)] transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isCompleting 
              ? "SYNCING..." 
              : module.completed 
                ? "Initiate Knowledge Assessment" 
                : "Sync & Finish Level"}
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        )}
      </footer>

      {activeChartScenario && (
        <ChartScenarioModal
          scenario={{
            id:            activeChartScenario.id,
            slug:          activeChartScenario.slug,
            title:         activeChartScenario.title,
            prompt:        activeChartScenario.prompt,
            candleData:    activeChartScenario.candleData ?? [],
            passThreshold: activeChartScenario.passThreshold ?? 70,
            metadata:      activeChartScenario.metadata ?? {},
          }}
          moduleId={module.id}
          onClose={handleChartClose}
          onPass={handleChartPass}
        />
      )}
    </div>
  );
}
