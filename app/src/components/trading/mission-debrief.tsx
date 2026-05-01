"use client";

import { CheckCircle2, Trophy, ArrowRight, RotateCcw, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface MissionDebriefProps {
  result: {
    score: number;
    passed: boolean;
    summary: string;
    xpAwarded: number;
    points: Record<string, number>;
  };
  moduleId: string | null;
  onRetry: () => void;
}

export function MissionDebrief({ result, moduleId, onRetry }: MissionDebriefProps) {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-slate-900/40 backdrop-blur-md">
      <div className="w-full max-w-lg bg-white border border-[var(--ln-border)] rounded-[3rem] p-12 shadow-2xl relative overflow-hidden">
        {/* Glow Effects */}
        <div className={cn(
          "absolute -top-24 -left-24 w-64 h-64 blur-[100px] opacity-10",
          result.passed ? "bg-[var(--ln-teal-500)]" : "bg-rose-500"
        )} />
        
        <div className="relative space-y-10 text-center">
          <div className="flex justify-center">
            <div className={cn(
              "w-24 h-24 rounded-[2rem] flex items-center justify-center shadow-xl",
              result.passed 
                ? "bg-[var(--ln-teal-soft)] text-[var(--ln-teal-500)] shadow-[var(--ln-teal-500)]/10 border border-[var(--ln-teal-500)]/20" 
                : "bg-rose-50 text-rose-500 shadow-rose-500/10 border border-rose-100"
            )}>
              {result.passed ? <Trophy size={48} /> : <XCircle size={48} />}
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-4xl font-extrabold text-[var(--ln-navy-900)] tracking-tight">
              {result.passed ? "Mission Passed" : "Review Needed"}
            </h2>
            <p className="text-sm text-[var(--ln-text-secondary)] leading-relaxed max-w-[320px] mx-auto font-medium">
              {result.summary}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 space-y-1 shadow-inner">
              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block">Mission Result</span>
              <span className={cn(
                "text-3xl font-extrabold",
                result.passed ? "text-[var(--ln-teal-600)]" : "text-amber-500"
              )}>
                {result.score}%
              </span>
            </div>
            <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 space-y-1 shadow-inner">
              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block">XP Contribution</span>
              <span className="text-3xl font-extrabold text-[var(--ln-teal-500)]">
                +{result.xpAwarded}
              </span>
            </div>
          </div>

          <div className="space-y-4 pt-4">
            {result.passed && moduleId ? (
              <Link
                href={`/course/module/${moduleId}`}
                className="w-full py-5 bg-[var(--ln-teal-500)] hover:bg-[var(--ln-teal-600)] text-white rounded-2xl font-extrabold text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-lg shadow-[var(--ln-teal-500)]/20"
              >
                Return to Lesson <ArrowRight size={18} />
              </Link>
            ) : (
              <button
                onClick={onRetry}
                className="w-full py-5 bg-[var(--ln-teal-500)] text-white hover:bg-[var(--ln-teal-600)] rounded-2xl font-extrabold text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-lg shadow-[var(--ln-teal-500)]/20"
              >
                Retry Mission <RotateCcw size={18} />
              </button>
            )}
            
            {result.passed && (
              <button
                onClick={onRetry}
                className="w-full py-3 text-slate-400 hover:text-[var(--ln-navy-900)] text-[10px] font-extrabold uppercase tracking-widest transition-colors"
              >
                Review Environment Again
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
