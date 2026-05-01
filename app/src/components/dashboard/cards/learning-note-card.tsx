"use client";

import { Star } from "lucide-react";

export function LearningNoteCard() {
  return (
    <div className="bg-[var(--ln-surface-soft)] rounded-3xl p-5 border border-[var(--ln-border)] shadow-sm hover:shadow-md transition-all flex flex-col justify-center h-full relative overflow-hidden">
      <div className="absolute right-4 top-4">
        <Star className="w-4 h-4 text-[var(--ln-warning)] fill-[var(--ln-warning)]/20" />
      </div>
      
      <div className="flex items-start gap-4">
        {/* Faux avatar for instructor/mentor */}
        <div className="w-10 h-10 rounded-full bg-[var(--ln-navy-800)] flex items-center justify-center shrink-0 border-2 border-white shadow-sm overflow-hidden">
          <div className="text-white text-xs font-bold">L.</div>
        </div>
        <div>
          <h3 className="text-xs font-bold text-[var(--ln-navy-900)] uppercase tracking-wider mb-2">Learning Note</h3>
          <p className="text-sm font-bold text-[var(--ln-navy-900)] italic leading-relaxed">
            &ldquo;Map the structure first before you look for confirmation.&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
