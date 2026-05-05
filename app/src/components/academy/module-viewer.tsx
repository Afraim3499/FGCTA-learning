"use client";

import { useState, useEffect } from "react";
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
import { CoinFlipPracticeEnvironment } from './interactive/coin-flip-practice';
import { MacroDashboard } from './interactive/macro-dashboard';
import { OrderFlowDOM } from './interactive/order-flow-dom';
import { ScenarioLauncher } from "./scenario-launcher";
import { ChartScenarioModal } from "@/components/academy/chart-scenario";
import { getModuleScenarios } from "@/lib/scenario-actions";
import { useNava } from "@/hooks/useNava";

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
  const { triggerMessage } = useNava();
  const router = useRouter();

  useEffect(() => {
    if (module.interactiveTaskType && !module.completed) {
      triggerMessage('practice_block_pulse');
    }
  }, [module.id, module.interactiveTaskType, module.completed, triggerMessage]);

  const isMasterAdmin = userTrack === "multi";
  const requiresTask = !!module.interactiveTaskType;
  const isTaskLocked = requiresTask && !taskResult;

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
        triggerMessage(module.nextModuleId ? 'module_completion_next_lesson' : 'module_completion_start_test');
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
        console.error("Failed to update progress before proceeding:", error);
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
    <div className="space-y-12 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <aside className="lg:col-span-3 space-y-6">
          <div className="space-y-3">
            <h3 className="text-[10px] font-extrabold text-[var(--ln-text-secondary)] uppercase tracking-[0.2em] px-4">Lesson Tracks</h3>
            <div className="p-1.5 bg-white rounded-3xl border border-[var(--ln-border)] flex flex-col gap-1 overflow-hidden shadow-sm">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  disabled={tab.id !== "core" && !tab.available}
                  onClick={() => setActiveTab(tab.id as Tab)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3.5 rounded-2xl text-xs font-bold transition-all relative group",
                    activeTab === tab.id
                      ? "bg-[var(--ln-teal-500)] text-white shadow-lg shadow-[var(--ln-teal-500)]/20"
                      : tab.id !== "core" && !tab.available
                      ? "opacity-20 grayscale cursor-not-allowed text-[var(--ln-text-dim)]"
                      : "text-[var(--ln-text-secondary)] hover:bg-slate-50 hover:text-[var(--ln-navy-900)]"
                  )}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                  {tab.id === userTrack && tab.id !== "core" && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                      <span className="text-[8px] font-bold text-white/80 uppercase tracking-tighter">Current</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-[var(--ln-border)] shadow-sm space-y-5 relative overflow-hidden group">
            <div className="flex items-center gap-2 mb-2 text-[var(--ln-teal-500)] text-[10px] font-extrabold uppercase tracking-widest">
              <CheckCircle2 className="w-4 h-4" />
              Learning Progress
            </div>
            <p className="text-xs text-[var(--ln-text-secondary)] mb-4 font-medium leading-relaxed">
              {module.completed
                ? `Lesson completed.${module.level > 1 ? ` +50 XP added to your roadmap.` : ' +0 XP (Practice module).'}`
                : "Complete the lesson content and tasks to verify your understanding."}
            </p>
            <button
              onClick={handleComplete}
              disabled={isCompleting || module.completed || isTaskLocked}
              className={cn(
                "w-full py-3.5 px-4 rounded-2xl font-extrabold tracking-widest text-[10px] uppercase transition-all duration-300 flex items-center justify-center gap-2 border",
                isCompleting ? "bg-slate-100 border-slate-200 text-[var(--ln-text-muted)] cursor-not-allowed" :
                module.completed
                  ? "bg-[var(--ln-teal-soft)] text-[var(--ln-teal-500)] border-[var(--ln-teal-500)]/20"
                  : isTaskLocked
                    ? "bg-slate-100 text-[var(--ln-text-muted)] cursor-not-allowed border-slate-200"
                    : "bg-[var(--ln-teal-500)] hover:bg-[var(--ln-teal-600)] text-white shadow-lg shadow-[var(--ln-teal-500)]/20 border-transparent"
              )}
            >
              {isCompleting ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> UPDATING PROGRESS...</>
              ) : module.completed ? (
                <><CheckCircle2 className="w-4 h-4" /> COMPLETED</>
              ) : isTaskLocked ? (
                <><Target className="w-4 h-4" /> TASK COMPLETION REQUIRED</>
              ) : (
                <><CheckCircle2 className="w-4 h-4" /> MARK AS COMPLETE</>
              )}
            </button>
          </div>

          <ScenarioLauncher
            moduleId={module.id}
            onLaunchScenario={handleLaunchScenario}
            refreshTrigger={refreshTrigger}
          />

          {module.level >= 1 && module.logicIds && module.logicIds.length > 0 && (
            <div className="p-6 bg-slate-50 border border-[var(--ln-border)] rounded-3xl space-y-4">
              <div className="flex items-center gap-3 text-[10px] font-extrabold text-[var(--ln-text-muted)] uppercase tracking-[0.2em]">
                <FlaskConical className="w-4 h-4" />
                Related Strategies
              </div>
              <div className="space-y-2">
                {module.logicIds.map((id) => (
                  <div key={id} className="flex items-center justify-between p-3 bg-white border border-[var(--ln-border)] rounded-2xl shadow-sm">
                    <span className="text-[10px] font-bold text-[var(--ln-navy-900)]">{id}</span>
                    <Link href="/lab" className="text-[10px] font-extrabold text-[var(--ln-teal-500)] hover:text-[var(--ln-teal-600)] flex items-center gap-1 transition-colors">
                      VIEW LAB <ExternalLink size={10} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </aside>

        <main
          data-nava-target="module-intro-card"
          className="lg:col-span-9 min-h-[700px] bg-white rounded-[2.5rem] border border-[var(--ln-border)] p-10 md:p-16 shadow-sm relative"
        >
          <div className="relative z-10">
            <MarkdownRenderer
              content={currentContent || "Lesson content is currently being prepared."}
              onLaunchScenario={handleAutoLaunch}
            />
          </div>

          {module.interactiveTaskType && (
            <div className="mt-12 pt-12 border-t border-[var(--ln-border)]">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-[var(--ln-teal-soft)] text-[var(--ln-teal-500)] text-[10px] font-extrabold uppercase tracking-widest">Practice Exercise</span>
              </div>

              <div
                data-nava-target="practice-exercise-block"
                className="bg-slate-50 rounded-3xl border border-[var(--ln-border)] p-6 md:p-10"
              >
                {module.interactiveTaskType === 'type_a_point_click' && module.interactiveTaskData && (
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
                )}

                {module.interactiveTaskType === 'type_b_scenario' && module.interactiveTaskData && (
                  <ScenarioDecisionEngine
                    taskId={`task_${module.id}`}
                    moduleId={module.id}
                    contextPrompt={module.interactiveTaskData.contextPrompt}
                    options={module.interactiveTaskData.options}
                    onPass={(result) => setTaskResult(result)}
                  />
                )}

                {module.interactiveTaskType === 'type_c_replay' && module.interactiveTaskData && (
                  <MiniReplayEngine
                    taskId={`task_${module.id}`}
                    moduleId={module.id}
                    chartData={module.interactiveTaskData.chartData}
                    initialCandleCount={module.interactiveTaskData.initialCandleCount}
                    prompt={module.interactiveTaskData.prompt}
                    rationale={module.interactiveTaskData.rationale}
                    onPass={(result) => setTaskResult(result)}
                  />
                )}

                {(module.interactiveTaskType === 'choice_block' || module.interactiveTaskType === 'identify_block') && module.interactiveTaskData?.question && (
                  <ChoiceBlockPractice
                    question={module.interactiveTaskData.question}
                    options={module.interactiveTaskData.options || []}
                    onPass={() => setTaskResult({ type: 'practice_complete', score: 100 } as any)}
                  />
                )}

                {module.interactiveTaskType === 'coin_flip_simulator' && (
                  <CoinFlipPracticeEnvironment />
                )}

                {module.interactiveTaskType === 'macro_rags_to_riches' && (
                  <MacroDashboard />
                )}

                {module.interactiveTaskType === 'tape_reading_basics' && (
                  <OrderFlowDOM />
                )}

                {module.interactiveTaskType === 'scenario_link' && module.interactiveTaskData?.scenarioSlug && (
                  <div className="text-center space-y-4">
                    <p className="text-[10px] font-extrabold text-amber-500 uppercase tracking-widest">Practical Mission Required</p>
                    <p className="text-sm text-[var(--ln-text-secondary)] font-medium">
                      Launch the <strong className="text-[var(--ln-navy-900)]">{module.interactiveTaskData.missionTitle || "Synthesis Mission"}</strong> from the sidebar to complete this module.
                    </p>
                    <p className="text-[10px] text-[var(--ln-text-muted)] font-bold uppercase">Pass threshold: {module.interactiveTaskData.passThreshold}% · Practical Skill Verification</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </main>
      </div>

      <footer className="flex items-center justify-between pt-8 border-t border-[var(--ln-border)]">
        {module.prevModuleId ? (
          <Link
            href={`/course/module/${module.prevModuleId}`}
            className="flex items-center gap-3 text-[10px] font-extrabold text-[var(--ln-text-muted)] uppercase tracking-widest hover:text-[var(--ln-navy-900)] transition-all group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Previous Lesson
          </Link>
        ) : <div />}

        {module.nextModuleId ? (
          <button
            onClick={() => handleProceed(`/course/module/${module.nextModuleId}`)}
            disabled={isCompleting || isTaskLocked}
            data-nava-target="next-lesson-cta"
            className="flex items-center gap-3 text-[10px] font-extrabold text-[var(--ln-navy-900)] uppercase tracking-widest hover:text-[var(--ln-teal-500)] transition-all group disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {isCompleting ? "UPDATING..." : "Advance to Next Lesson"}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        ) : (
          <button
            onClick={() => handleProceed(module.completed ? `/test/${module.level}` : "/course")}
            disabled={isCompleting || isTaskLocked}
            data-nava-target={module.completed ? "start-test-cta" : undefined}
            className="flex items-center gap-3 text-[10px] font-extrabold text-[var(--ln-teal-500)] uppercase tracking-widest hover:text-[var(--ln-teal-600)] transition-all group disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {isCompleting
              ? "UPDATING..."
              : module.completed
                ? "Start Knowledge Test"
                : "Finish Level"}
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
