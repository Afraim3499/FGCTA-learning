"use client";

import { ShieldCheck } from "lucide-react";

export function SafeLearningCard() {
  return (
    <div className="bg-white rounded-3xl p-5 border border-[var(--ln-border)] shadow-sm hover:shadow-md transition-all flex flex-col justify-center h-full">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-[var(--ln-teal-soft)] border border-[var(--ln-teal-500)]/20 flex items-center justify-center shrink-0">
          <ShieldCheck className="w-6 h-6 text-[var(--ln-teal-500)]" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-[var(--ln-navy-900)] mb-1">Safe learning. Real progress.</h3>
          <p className="text-xs text-[var(--ln-text-secondary)] leading-relaxed">
            Focus on understanding. The result follows.
          </p>
        </div>
      </div>
    </div>
  );
}
