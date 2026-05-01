"use client";

import { useState, useCallback } from "react";
import { 
  DrawnElement, 
  ChartMarkupPanel, 
  CandleDataPoint 
} from "./ChartMarkupPanel";
import { ScenarioFeedbackOverlay } from "./ScenarioFeedbackOverlay";
import { 
  DrawnZone, 
  ValidationZone, 
  ChartScenarioGradingResult,
  ChartMarkupActionsV2,
  ChartScenarioGradingResultV2
} from "@/lib/trading/chart-scenario-grader";
import { startScenarioAttempt, submitChartScenarioAttempt } from "@/lib/scenario-actions";
import { 
  Loader2, 
  Target, 
  MousePointer2, 
  Type, 
  Square, 
  Trash2, 
  RotateCcw,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Scenario {
  id:            string;
  slug:          string;
  title:         string;
  prompt:        string;
  candleData:    CandleDataPoint[];
  passThreshold: number;
  metadata:      Record<string, any>;
}

interface ChartScenarioEngineProps {
  scenario: Scenario;
  moduleId: string;
  onClose:  () => void;
  onPass:   () => void;
}

type Phase = "idle" | "drawing" | "submitting" | "done";

const TOOLS = [
  { id: "range_high", label: "Range High", type: "horizontal_line" as const },
  { id: "range_low",  label: "Range Low",  type: "horizontal_line" as const },
  { id: "midpoint",   label: "Midpoint",   type: "horizontal_line" as const },
  { id: "supply",     label: "Supply Zone", type: "box" as const },
  { id: "demand",     label: "Demand Zone", type: "box" as const },
  { id: "target_up",  label: "Target High", type: "box" as const },
  { id: "target_down", label: "Target Low",  type: "box" as const },
  { id: "no_trade",   label: "No-Trade Middle", type: "box" as const },
];

export function ChartScenarioEngine({ scenario, moduleId, onClose, onPass }: ChartScenarioEngineProps) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [attemptId, setAttemptId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // V1 Compatibility state
  const [drawnZone, setDrawnZone] = useState<DrawnZone | null>(null);
  const [gradingResult, setGradingResult] = useState<ChartScenarioGradingResult | null>(null);

  // V2 Multi-element state
  const [drawnElements, setDrawnElements] = useState<DrawnElement[]>([]);
  const [activeToolId, setActiveToolId] = useState<string | null>(null);
  const [gradingResultV2, setGradingResultV2] = useState<ChartScenarioGradingResultV2 | null>(null);

  const interactionMode = scenario.metadata?.interactionMode || "chart_markup_v1";
  const isV2 = interactionMode === "chart_markup_v2";

  // ── Helpers ─────────────────────────────────────────────────────────────────
  const activeTool = TOOLS.find(t => t.id === activeToolId) || null;

  const handleElementAdded = useCallback((el: DrawnElement) => {
    if (isV2) {
      // For V2, we only allow one of each label
      setDrawnElements(prev => {
        const filtered = prev.filter(item => item.label !== el.label);
        return [...filtered, el];
      });
      setActiveToolId(null); // Deselect tool after drawing
    } else {
      // V1 behavior: map DrawnElement back to DrawnZone
      const zone: DrawnZone = {
        timeStart: el.timeStart!,
        timeEnd: el.timeEnd!,
        priceMin: el.priceMin!,
        priceMax: el.priceMax!
      };
      setDrawnZone(zone);
    }
  }, [isV2]);

  const removeElement = (label: string) => {
    setDrawnElements(prev => prev.filter(el => el.label !== label));
  };

  const handleStart = async () => {
    setPhase("drawing");
    try {
      const attempt = await startScenarioAttempt(scenario.id, moduleId);
      setAttemptId(attempt.id);
    } catch (e: any) {
      setError(e.message || "Failed to start attempt.");
      setPhase("idle");
    }
  };

  const handleSubmit = async () => {
    if (!attemptId) return;
    
    // Validation
    if (isV2 && drawnElements.length < 5) { // Require at least a core set
      setError("Please complete more mapping elements before submitting.");
      return;
    }
    if (!isV2 && !drawnZone) return;

    setPhase("submitting");
    setError(null);

    try {
      const actions = isV2 
        ? { interactionMode: "chart_markup_v2" as const, elements: drawnElements }
        : { interactionMode: "chart_markup_v1" as const, drawnZone: drawnZone! };

      const { gradingResult: result } = await submitChartScenarioAttempt(attemptId, actions as any);
      
      if (isV2) setGradingResultV2(result);
      else setGradingResult(result);

      setPhase("done");
      if (result.passed) onPass();
    } catch (e: any) {
      setError(e.message || "Submission failed.");
      setPhase("drawing");
    }
  };

  const handleRetry = async () => {
    setDrawnZone(null);
    setDrawnElements([]);
    setGradingResult(null);
    setGradingResultV2(null);
    setAttemptId(null);
    setPhase("drawing");
    try {
      const attempt = await startScenarioAttempt(scenario.id, moduleId);
      setAttemptId(attempt.id);
    } catch (e: any) {
      setError(e.message || "Failed to start retry.");
      setPhase("idle");
    }
  };

  // ── Render Parts ────────────────────────────────────────────────────────────

  return (
    <div className="flex flex-col bg-white min-h-[100vh] lg:min-h-0 lg:h-full lg:overflow-hidden">
      {/* Header */}
      <div className="px-8 py-5 border-b border-[var(--ln-border)] flex items-center gap-4 shrink-0 bg-slate-50">
        <div className="p-2.5 rounded-xl bg-[var(--ln-teal-soft)]">
          <Target className="w-5 h-5 text-[var(--ln-teal-500)]" />
        </div>
        <div>
          <p className="text-[10px] font-extrabold text-[var(--ln-teal-600)] uppercase tracking-[0.2em]">
            {isV2 ? "Applied Practice" : "Chart Mission"}
          </p>
          <h2 className="text-[var(--ln-navy-900)] font-extrabold text-lg tracking-tight uppercase">{scenario.title}</h2>
        </div>
        <div className="ml-auto flex items-center gap-4">
          {phase === "drawing" && isV2 && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-100 shadow-sm">
              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Progress:</span>
              <span className="text-[11px] font-extrabold text-[var(--ln-navy-900)]">{drawnElements.length} / 8</span>
            </div>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 lg:overflow-y-auto flex flex-col">
        {phase === "idle" && (
          <div className="p-16 flex flex-col items-center text-center gap-6">
            <div className="w-16 h-16 rounded-[2rem] bg-[var(--ln-teal-soft)] flex items-center justify-center shadow-inner">
              <Target className="w-8 h-8 text-[var(--ln-teal-500)]" />
            </div>
            <div className="space-y-3 max-w-lg">
              <h3 className="text-2xl font-extrabold text-[var(--ln-navy-900)] tracking-tight uppercase">Ready for the mission?</h3>
              <p className="text-[var(--ln-text-secondary)] font-medium leading-relaxed text-sm">{scenario.prompt}</p>
            </div>
            {error && <p className="text-rose-500 font-bold text-sm flex items-center gap-2"><AlertCircle size={14}/> {error}</p>}
            <button
              onClick={handleStart}
              className="px-10 py-4 bg-[var(--ln-teal-500)] hover:bg-[var(--ln-teal-600)] text-white font-extrabold rounded-2xl text-[10px] tracking-[0.2em] uppercase transition-all shadow-lg shadow-[var(--ln-teal-500)]/20 active:scale-95"
            >
              Start Mission
            </button>
          </div>
        )}

        {(phase === "drawing" || phase === "submitting" || phase === "done") && (
          <div className="flex flex-col lg:flex-row flex-1 lg:h-[600px]">
            {/* Chart Column */}
            <div className="flex-1 flex flex-col border-r border-[var(--ln-border)]">
              <ChartMarkupPanel
                candleData={scenario.candleData}
                prompt={scenario.prompt}
                onElementAdded={handleElementAdded}
                drawnElements={isV2 ? drawnElements : (drawnZone ? [{ 
                  id: 'v1', type: 'box', label: 'MSS Zone', 
                  timeStart: drawnZone.timeStart, timeEnd: drawnZone.timeEnd, 
                  priceMin: drawnZone.priceMin, priceMax: drawnZone.priceMax 
                }] : [])}
                activeTool={activeTool}
                correctElements={isV2 ? scenario.metadata?.requirements : (scenario.metadata?.validationZones)}
                passed={isV2 ? gradingResultV2?.passed : gradingResult?.passed}
                isReadOnly={phase !== "drawing"}
              />
              
              {/* V2 Toolbar */}
              {isV2 && phase === "drawing" && (
                <div className="px-8 py-5 border-t border-[var(--ln-border)] bg-slate-50">
                  <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-4">Select Tool to Draw:</p>
                  <div className="flex flex-wrap gap-2">
                    {TOOLS.map(tool => (
                      <button
                        key={tool.id}
                        onClick={() => setActiveToolId(tool.id)}
                        className={cn(
                          "flex items-center gap-3 px-4 py-2.5 rounded-xl text-[10px] font-extrabold uppercase tracking-widest transition-all border shadow-sm",
                          activeToolId === tool.id
                            ? "bg-[var(--ln-teal-500)] border-[var(--ln-teal-500)] text-white shadow-lg shadow-[var(--ln-teal-500)]/20"
                            : "bg-white border-slate-100 text-slate-500 hover:border-[var(--ln-teal-500)]/30 hover:bg-slate-50"
                        )}
                      >
                        {tool.type === "box" ? <Square size={14}/> : <Type size={14}/>}
                        {tool.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Checklist / Results Column (V2 Only) */}
            {isV2 && (
              <div className="w-full lg:w-80 shrink-0 bg-slate-50 flex flex-col border-l border-[var(--ln-border)]">
                <div className="p-6 flex-1 overflow-y-auto">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Mission Requirements</h4>
                    {phase === "drawing" && drawnElements.length > 0 && (
                      <button 
                        onClick={() => setDrawnElements([])}
                        className="text-[9px] font-extrabold text-rose-500 hover:text-rose-600 uppercase tracking-widest transition-colors flex items-center gap-1 bg-white px-2 py-1 rounded-lg border border-slate-100 shadow-sm"
                      >
                        <RotateCcw size={10} /> Clear Map
                      </button>
                    )}
                  </div>
                  <div className="space-y-2.5">
                    {TOOLS.map(tool => {
                      const drawn = drawnElements.find(e => e.label === tool.label);
                      const result = gradingResultV2?.results?.find(r => r.label === tool.label);
                      
                      return (
                        <div 
                          key={tool.id}
                          className={cn(
                            "group p-3.5 rounded-2xl border transition-all",
                            drawn ? "bg-white border-slate-200 shadow-sm" : "bg-slate-100 border-transparent opacity-60",
                            phase === "done" && result && (result.passed ? "border-[var(--ln-teal-500)]/30 bg-[var(--ln-teal-soft)]" : "border-rose-200 bg-rose-50")
                          )}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className={cn(
                                "w-2 h-2 rounded-full",
                                drawn ? "bg-[var(--ln-teal-500)] shadow-[0_0_8px_rgba(20,184,166,0.4)]" : "bg-slate-300"
                              )} />
                              <span className="text-[11px] font-extrabold text-[var(--ln-navy-900)] tracking-tight">{tool.label}</span>
                            </div>
                            {phase === "drawing" && drawn && (
                              <button 
                                onClick={() => removeElement(tool.label)}
                                className="text-slate-300 hover:text-rose-500 transition-colors opacity-0 group-hover:opacity-100"
                              >
                                <Trash2 size={12} />
                              </button>
                            )}
                            {phase === "done" && result && (
                              result.passed 
                                ? <CheckCircle2 size={14} className="text-[var(--ln-teal-600)]" />
                                : <AlertCircle size={14} className="text-rose-500" />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Action Sidebar Bottom */}
                <div className="p-6 border-t border-[var(--ln-border)] bg-white">
                  {error && <p className="text-rose-500 text-[11px] mb-4 font-extrabold uppercase tracking-tight">{error}</p>}
                  
                  {phase === "drawing" && (
                    <button
                      onClick={handleSubmit}
                      disabled={drawnElements.length < 5}
                      className={cn(
                        "w-full py-4 rounded-2xl font-extrabold text-[10px] tracking-[0.2em] uppercase transition-all",
                        drawnElements.length >= 5
                          ? "bg-[var(--ln-teal-500)] hover:bg-[var(--ln-teal-600)] text-white shadow-lg shadow-[var(--ln-teal-500)]/20"
                          : "bg-slate-100 text-slate-400 cursor-not-allowed"
                      )}
                    >
                      Submit Map
                    </button>
                  )}

                  {phase === "done" && gradingResultV2 && (
                    <div className="space-y-4">
                       <div className="text-center">
                          <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">Final Result</p>
                          <p className={cn(
                            "text-3xl font-extrabold tracking-tight",
                            gradingResultV2.passed ? "text-[var(--ln-teal-600)]" : "text-rose-500"
                          )}>
                            {gradingResultV2.score}%
                          </p>
                       </div>
                       <button
                          onClick={gradingResultV2.passed ? onClose : handleRetry}
                          className={cn(
                            "w-full py-4 rounded-2xl font-extrabold text-[10px] tracking-[0.2em] uppercase transition-all shadow-lg",
                            gradingResultV2.passed
                              ? "bg-[var(--ln-teal-500)] hover:bg-[var(--ln-teal-600)] text-white shadow-[var(--ln-teal-500)]/20"
                              : "bg-slate-100 hover:bg-slate-200 text-slate-600 shadow-slate-200/50"
                          )}
                        >
                          {gradingResultV2.passed ? "Continue Learning Path" : "Analyze & Retry"}
                        </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* V1 Compact Submit Bar (V1 Only) */}
            {!isV2 && phase === "drawing" && (
              <div className="w-full lg:w-80 shrink-0 bg-slate-50 flex flex-col border-l border-[var(--ln-border)] p-8 justify-end">
                {error && <p className="text-rose-500 text-[11px] mb-4 font-extrabold uppercase tracking-tight">{error}</p>}
                <button
                  onClick={handleSubmit}
                  disabled={!drawnZone}
                  className={cn(
                    "w-full py-4 rounded-2xl font-extrabold text-[10px] tracking-[0.2em] uppercase transition-all shadow-lg",
                    drawnZone
                      ? "bg-[var(--ln-teal-500)] hover:bg-[var(--ln-teal-600)] text-white shadow-[var(--ln-teal-500)]/20"
                      : "bg-slate-100 text-slate-400 cursor-not-allowed"
                  )}
                >
                  Check Answer
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Done phase overlay */}
      {phase === "done" && !isV2 && gradingResult && (
        <div className="fixed inset-0 z-50 pointer-events-none flex items-end">
          <div className="pointer-events-auto w-full">
            <ScenarioFeedbackOverlay
              result={gradingResult}
              onRetry={handleRetry}
              onClose={onClose}
            />
          </div>
        </div>
      )}
    </div>
  );
}
