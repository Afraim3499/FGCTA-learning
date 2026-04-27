"use client";

import { CheckCircle2, XCircle, BarChart3, Tag, RotateCcw, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ChartScenarioGradingResult } from "@/lib/trading/chart-scenario-grader";

interface ScenarioFeedbackOverlayProps {
  result:    ChartScenarioGradingResult;
  onRetry:   () => void;
  onClose:   () => void;
}

export function ScenarioFeedbackOverlay({ result, onRetry, onClose }: ScenarioFeedbackOverlayProps) {
  const { passed, score, overlapPct, feedbackText, weaknessTags } = result;

  return (
    <div className={cn(
      "mx-8 mb-8 rounded-[2rem] border p-8 space-y-6 animate-in slide-in-from-bottom-4 duration-500",
      passed
        ? "bg-emerald-500/5 border-emerald-500/20"
        : "bg-rose-500/5 border-rose-500/20"
    )}>
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className={cn(
          "p-3 rounded-2xl shrink-0",
          passed ? "bg-emerald-500/10 text-emerald-500" : "bg-rose-500/10 text-rose-500"
        )}>
          {passed ? <CheckCircle2 size={28} /> : <XCircle size={28} />}
        </div>
        <div className="space-y-1">
          <p className={cn(
            "text-[10px] font-bold uppercase tracking-[0.2em]",
            passed ? "text-emerald-500" : "text-rose-500"
          )}>
            {passed ? "Zone Confirmed — MSS Identified" : "Zone Incorrect — Review Required"}
          </p>
          <p className="text-base font-semibold text-white leading-relaxed">
            {feedbackText}
          </p>
        </div>
      </div>

      {/* Score breakdown */}
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-white/5 rounded-2xl border border-white/5 space-y-1">
          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            <BarChart3 className="w-3 h-3" /> Score
          </div>
          <p className={cn("text-2xl font-bold", passed ? "text-emerald-400" : "text-rose-400")}>
            {score}<span className="text-sm text-slate-500">/100</span>
          </p>
        </div>

        <div className="p-4 bg-white/5 rounded-2xl border border-white/5 space-y-1">
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Zone Overlap</div>
          <p className="text-2xl font-bold text-white">
            {overlapPct}<span className="text-sm text-slate-500">%</span>
          </p>
          <p className="text-[9px] text-slate-500">min required: 60%</p>
        </div>

        <div className="p-4 bg-white/5 rounded-2xl border border-white/5 space-y-1">
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Result</div>
          <p className={cn(
            "text-sm font-bold uppercase tracking-wider",
            passed ? "text-emerald-400" : "text-rose-400"
          )}>
            {passed ? "PASSED" : "FAILED"}
          </p>
          <p className="text-[9px] text-slate-500">threshold: 70/100</p>
        </div>
      </div>

      {/* Weakness tags */}
      {weaknessTags.length > 0 && (
        <div className="flex items-center gap-3">
          <Tag className="w-3.5 h-3.5 text-amber-500 shrink-0" />
          <div className="flex flex-wrap gap-2">
            {weaknessTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20"
              >
                {tag.replace(/_/g, " ")}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-white/5">
        {!passed && (
          <button
            onClick={onRetry}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-[11px] font-bold text-white bg-white/10 hover:bg-white/15 transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Try Again
          </button>
        )}
        <button
          onClick={onClose}
          className={cn(
            "flex items-center gap-2 px-5 py-2.5 rounded-xl text-[11px] font-bold transition-all ml-auto",
            passed
              ? "bg-emerald-500 text-white hover:bg-emerald-400"
              : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
          )}
        >
          {passed ? "Close Mission" : "Close"}
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
