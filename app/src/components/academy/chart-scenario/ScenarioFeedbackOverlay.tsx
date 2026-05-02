"use client";

import { CheckCircle2, XCircle, BarChart3, Tag, RotateCcw, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ChartScenarioGradingResult } from "@/lib/trading/chart-scenario-grader";
import { useNava } from "@/hooks/useNava";
import { useEffect } from "react";

interface ScenarioFeedbackOverlayProps {
  result:    ChartScenarioGradingResult;
  onRetry:   () => void;
  onClose:   () => void;
}

export function ScenarioFeedbackOverlay({ result, onRetry, onClose }: ScenarioFeedbackOverlayProps) {
  const { passed, score, overlapPct, feedbackText, weaknessTags } = result;
  const { triggerMessage } = useNava();

  useEffect(() => {
    triggerMessage(passed ? 'mission_result_passed' : 'mission_result_review');
  }, [passed, triggerMessage]);

  return (
    <div className={cn(
      "mx-8 mb-8 rounded-[2.5rem] border p-10 space-y-8 animate-in slide-in-from-bottom-4 duration-500 bg-white shadow-2xl",
      passed
        ? "border-[var(--ln-teal-500)]/30"
        : "border-rose-200"
    )}>
      {/* Header */}
      <div className="flex items-start gap-5">
        <div className={cn(
          "p-4 rounded-[1.5rem] shrink-0",
          passed ? "bg-[var(--ln-teal-soft)] text-[var(--ln-teal-500)]" : "bg-rose-50 text-rose-500"
        )}>
          {passed ? <CheckCircle2 size={32} /> : <XCircle size={32} />}
        </div>
        <div className="space-y-1">
          <p className={cn(
            "text-[10px] font-extrabold uppercase tracking-[0.2em]",
            passed ? "text-[var(--ln-teal-600)]" : "text-rose-500"
          )}>
            {passed ? "Good work." : "Review Needed"}
          </p>
          <p className="text-lg font-bold text-[var(--ln-navy-900)] leading-relaxed">
            {passed ? "Your chart map meets the mission requirements." : "Some required marks need adjustment."}
          </p>
          <p className="text-sm text-[var(--ln-text-secondary)] font-medium leading-relaxed max-w-2xl">
            {feedbackText}
          </p>
        </div>
      </div>

      {/* Score breakdown */}
      <div className="grid grid-cols-3 gap-6">
        <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
          <div className="flex items-center gap-2 text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
            <BarChart3 className="w-3 h-3" /> Final Result
          </div>
          <p className={cn("text-3xl font-extrabold", passed ? "text-[var(--ln-teal-600)]" : "text-rose-500")}>
            {score}<span className="text-sm text-slate-400">/100</span>
          </p>
        </div>

        <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
          <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Zone Overlap</div>
          <p className="text-3xl font-extrabold text-[var(--ln-navy-900)]">
            {overlapPct}<span className="text-sm text-slate-400">%</span>
          </p>
          <p className="text-[9px] font-extrabold text-slate-400 uppercase tracking-tighter">min required: 60%</p>
        </div>

        <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
          <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Status</div>
          <p className={cn(
            "text-sm font-extrabold uppercase tracking-widest",
            passed ? "text-[var(--ln-teal-600)]" : "text-rose-500"
          )}>
            {passed ? "PASS" : "REVIEW"}
          </p>
          <p className="text-[9px] font-extrabold text-slate-400 uppercase tracking-tighter">threshold: 70/100</p>
        </div>
      </div>

      {/* Weakness tags */}
      {weaknessTags.length > 0 && (
        <div className="flex items-center gap-4 bg-amber-50/50 p-4 rounded-2xl border border-amber-100/50">
          <Tag className="w-4 h-4 text-amber-500 shrink-0" />
          <div className="flex flex-wrap gap-2">
            {weaknessTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-white text-amber-600 border border-amber-200 shadow-sm"
              >
                {tag.replace(/_/g, " ")}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between pt-6 border-t border-slate-100">
        {!passed && (
          <button
            onClick={onRetry}
            data-nava-target="mission-result-action"
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-extrabold uppercase tracking-widest text-slate-600 bg-slate-100 hover:bg-slate-200 transition-all shadow-sm"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Analyze & Retry
          </button>
        )}
        <button
          onClick={onClose}
          data-nava-target="mission-result-action"
          className={cn(
            "flex items-center gap-2 px-8 py-4 rounded-xl text-[10px] font-extrabold uppercase tracking-[0.2em] transition-all ml-auto shadow-lg shadow-[var(--ln-teal-500)]/20",
            passed
              ? "bg-[var(--ln-teal-500)] text-white hover:bg-[var(--ln-teal-600)]"
              : "bg-[var(--ln-navy-900)] text-white hover:bg-black"
          )}
        >
          {passed ? "Continue Learning Path" : "Close Review"}
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
