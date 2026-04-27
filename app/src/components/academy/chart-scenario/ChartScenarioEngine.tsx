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
    <div className="flex flex-col h-full overflow-hidden bg-[#0B0E14]">
      {/* Header */}
      <div className="px-8 py-5 border-b border-white/5 flex items-center gap-4 shrink-0 bg-black/20">
        <div className="p-2 rounded-xl bg-[var(--color-brand-500)]/10">
          <Target className="w-5 h-5 text-[var(--color-brand-400)]" />
        </div>
        <div>
          <p className="text-[10px] font-bold text-[var(--color-brand-400)] uppercase tracking-[0.2em]">
            {isV2 ? "Level 2 Capstone" : "Market Structure Mission"}
          </p>
          <h2 className="text-white font-bold text-lg tracking-tight">{scenario.title}</h2>
        </div>
        <div className="ml-auto flex items-center gap-4">
          {phase === "drawing" && isV2 && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Progress:</span>
              <span className="text-[11px] font-bold text-white">{drawnElements.length} / 8</span>
            </div>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto">
        {phase === "idle" && (
          <div className="p-16 flex flex-col items-center text-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-[var(--color-brand-500)]/10 flex items-center justify-center">
              <Target className="w-8 h-8 text-[var(--color-brand-400)]" />
            </div>
            <div className="space-y-2 max-w-lg">
              <h3 className="text-2xl font-bold text-white tracking-tight">Ready for the mission?</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{scenario.prompt}</p>
            </div>
            {error && <p className="text-rose-400 text-sm flex items-center gap-2"><AlertCircle size={14}/> {error}</p>}
            <button
              onClick={handleStart}
              className="px-8 py-3 bg-[var(--color-brand-500)] hover:bg-[var(--color-brand-400)] text-white font-bold rounded-2xl text-sm tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)]"
            >
              Start Mission
            </button>
          </div>
        )}

        {(phase === "drawing" || phase === "submitting" || phase === "done") && (
          <div className="flex flex-col lg:flex-row h-full lg:h-[600px]">
            {/* Chart Column */}
            <div className="flex-1 flex flex-col border-r border-white/5">
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
                <div className="px-8 py-4 border-t border-white/5 bg-black/40">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Select Tool to Draw:</p>
                  <div className="flex flex-wrap gap-2">
                    {TOOLS.map(tool => (
                      <button
                        key={tool.id}
                        onClick={() => setActiveToolId(tool.id)}
                        className={cn(
                          "flex items-center gap-2 px-3 py-2 rounded-xl text-[11px] font-bold transition-all border",
                          activeToolId === tool.id
                            ? "bg-[var(--color-brand-500)] border-[var(--color-brand-400)] text-white shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                            : "bg-white/5 border-white/5 text-slate-400 hover:border-white/20"
                        )}
                      >
                        {tool.type === "box" ? <Square size={12}/> : <Type size={12}/>}
                        {tool.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Checklist / Results Column (V2 Only) */}
            {isV2 && (
              <div className="w-full lg:w-80 shrink-0 bg-black/20 flex flex-col border-l border-white/5">
                <div className="p-6 flex-1 overflow-y-auto">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Mission Checklist</h4>
                    {phase === "drawing" && drawnElements.length > 0 && (
                      <button 
                        onClick={() => setDrawnElements([])}
                        className="text-[10px] font-bold text-rose-400/60 hover:text-rose-400 uppercase tracking-tighter transition-colors flex items-center gap-1"
                      >
                        <RotateCcw size={10} /> Clear All
                      </button>
                    )}
                  </div>
                  <div className="space-y-3">
                    {TOOLS.map(tool => {
                      const drawn = drawnElements.find(e => e.label === tool.label);
                      const result = gradingResultV2?.results?.find(r => r.label === tool.label);
                      
                      return (
                        <div 
                          key={tool.id}
                          className={cn(
                            "group p-3 rounded-xl border transition-all",
                            drawn ? "bg-white/5 border-white/10" : "bg-black/20 border-white/5 opacity-60",
                            phase === "done" && result && (result.passed ? "border-emerald-500/30 bg-emerald-500/5" : "border-rose-500/30 bg-rose-500/5")
                          )}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className={cn(
                                "w-2 h-2 rounded-full",
                                drawn ? "bg-[var(--color-brand-400)]" : "bg-slate-700"
                              )} />
                              <span className="text-[11px] font-bold text-white tracking-tight">{tool.label}</span>
                            </div>
                            {phase === "drawing" && drawn && (
                              <button 
                                onClick={() => removeElement(tool.label)}
                                className="text-slate-500 hover:text-rose-400 transition-colors opacity-0 group-hover:opacity-100"
                              >
                                <Trash2 size={12} />
                              </button>
                            )}
                            {phase === "done" && result && (
                              result.passed 
                                ? <CheckCircle2 size={14} className="text-emerald-400" />
                                : <AlertCircle size={14} className="text-rose-400" />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Action Sidebar Bottom */}
                <div className="p-6 border-t border-white/5 bg-black/40">
                  {error && <p className="text-rose-400 text-[11px] mb-3 font-medium">{error}</p>}
                  
                  {phase === "drawing" && (
                    <button
                      onClick={handleSubmit}
                      disabled={drawnElements.length < 5}
                      className={cn(
                        "w-full py-3 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all",
                        drawnElements.length >= 5
                          ? "bg-[var(--color-brand-500)] hover:bg-[var(--color-brand-400)] text-white shadow-[0_0_20px_rgba(99,102,241,0.2)]"
                          : "bg-slate-800 text-slate-500 cursor-not-allowed"
                      )}
                    >
                      Submit Map
                    </button>
                  )}

                  {phase === "done" && gradingResultV2 && (
                    <div className="space-y-4">
                       <div className="text-center">
                          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Final Score</p>
                          <p className={cn(
                            "text-3xl font-bold",
                            gradingResultV2.passed ? "text-emerald-400" : "text-rose-400"
                          )}>
                            {gradingResultV2.score}%
                          </p>
                       </div>
                       <button
                          onClick={gradingResultV2.passed ? onClose : handleRetry}
                          className={cn(
                            "w-full py-3 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all",
                            gradingResultV2.passed
                              ? "bg-emerald-500 hover:bg-emerald-400 text-white"
                              : "bg-white/10 hover:bg-white/20 text-white"
                          )}
                        >
                          {gradingResultV2.passed ? "Finish Mission" : "Try Again"}
                        </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* V1 Compact Submit Bar (V1 Only) */}
            {!isV2 && phase === "drawing" && (
              <div className="w-full lg:w-80 shrink-0 bg-black/20 flex flex-col border-l border-white/5 p-6 justify-end">
                <button
                  onClick={handleSubmit}
                  disabled={!drawnZone}
                  className={cn(
                    "w-full py-3 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all",
                    drawnZone
                      ? "bg-[var(--color-brand-500)] hover:bg-[var(--color-brand-400)] text-white shadow-[0_0_20px_rgba(99,102,241,0.2)]"
                      : "bg-slate-800 text-slate-500 cursor-not-allowed"
                  )}
                >
                  Submit Zone
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
