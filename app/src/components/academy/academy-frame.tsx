"use client";

import { ShieldAlert, ChevronRight, Lock } from "lucide-react";

export function AcademyInsight() {
  return (
    <div className="p-8 bg-[var(--ln-teal-soft)] border border-[var(--ln-teal-500)]/10 rounded-[2.5rem] space-y-4 mb-12 shadow-sm">
      <div className="flex items-center gap-3 text-[var(--ln-teal-600)]">
        <ShieldAlert size={20} />
        <h4 className="text-sm font-extrabold uppercase tracking-tighter">Learning Perspective</h4>
      </div>
      <p className="text-xs text-[var(--ln-text-secondary)] leading-relaxed max-w-2xl font-medium">
        This program is designed for deep understanding. If the theory feels dense, it is because you are shifting from superficial patterns to true market reality. Amateurs seek secrets; Professionals seek mastery of fundamentals.
      </p>
      <div className="flex items-center gap-6 pt-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[var(--ln-teal-500)] animate-pulse" />
          <span className="text-[9px] font-extrabold text-[var(--ln-navy-900)] uppercase tracking-widest">Cognitive Load: High</span>
        </div>
        <div className="flex items-center gap-2">
          <Lock size={12} className="text-[var(--ln-text-muted)]" />
          <span className="text-[9px] font-extrabold text-[var(--ln-text-muted)] uppercase tracking-widest">Mastery Readiness: 0.01%</span>
        </div>
      </div>
    </div>
  );
}
