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
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-[#0D1117]/80 backdrop-blur-xl">
      <div className="w-full max-w-lg bg-[#161B22] border border-white/10 rounded-[2.5rem] p-10 shadow-3xl relative overflow-hidden">
        {/* Glow Effects */}
        <div className={cn(
          "absolute -top-24 -left-24 w-64 h-64 blur-[100px] opacity-20",
          result.passed ? "bg-emerald-500" : "bg-rose-500"
        )} />
        
        <div className="relative space-y-8 text-center">
          <div className="flex justify-center">
            <div className={cn(
              "w-20 h-20 rounded-3xl flex items-center justify-center shadow-2xl",
              result.passed ? "bg-emerald-500 text-white shadow-emerald-500/20" : "bg-rose-500 text-white shadow-rose-500/20"
            )}>
              {result.passed ? <Trophy size={40} /> : <XCircle size={40} />}
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-white tracking-tight">
              {result.passed ? "Mission Successful" : "Mission Failed"}
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed max-w-[320px] mx-auto">
              {result.summary}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-white/5 rounded-3xl border border-white/5 space-y-1">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Sync Score</span>
              <span className={cn(
                "text-3xl font-mono font-bold",
                result.passed ? "text-emerald-400" : "text-amber-400"
              )}>
                {result.score}%
              </span>
            </div>
            <div className="p-6 bg-white/5 rounded-3xl border border-white/5 space-y-1">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">XP Contributed</span>
              <span className="text-3xl font-mono font-bold text-[var(--color-brand-400)]">
                +{result.xpAwarded}
              </span>
            </div>
          </div>

          <div className="space-y-3">
            {result.passed && moduleId ? (
              <Link
                href={`/course/module/${moduleId}`}
                className="w-full py-4 bg-[var(--color-brand-500)] hover:bg-[var(--color-brand-400)] text-white rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(99,102,241,0.3)]"
              >
                Return to Module <ArrowRight size={18} />
              </Link>
            ) : (
              <button
                onClick={onRetry}
                className="w-full py-4 bg-white text-black hover:bg-slate-200 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2"
              >
                Retry Mission <RotateCcw size={18} />
              </button>
            )}
            
            {result.passed && (
              <button
                onClick={onRetry}
                className="w-full py-3 text-slate-500 hover:text-white text-xs font-bold transition-colors"
              >
                Review Terminal Again
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
