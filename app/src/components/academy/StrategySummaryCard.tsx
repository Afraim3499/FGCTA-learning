"use client";

import React from "react";
import { BookOpen } from "lucide-react";

interface StrategySummaryCardProps {
  summary: string;
}

export function StrategySummaryCard({ summary }: StrategySummaryCardProps) {
  return (
    <div className="bg-gradient-to-r from-teal-50/30 to-emerald-50/20 border border-slate-200/80 border-l-4 border-l-[var(--ln-teal-500)] rounded-r-2xl rounded-l-md p-6 shadow-sm relative overflow-hidden group">
      <div className="absolute right-0 top-0 -mt-4 -mr-4 w-24 h-24 bg-[var(--ln-teal-500)]/10 rounded-full blur-2xl transition-all group-hover:bg-[var(--ln-teal-500)]/20" />
      <div className="flex items-start gap-4">
        <div className="p-3 bg-white text-[var(--ln-teal-600)] rounded-xl shrink-0 shadow-md shadow-teal-500/10 border border-teal-100/30 flex items-center justify-center">
          <BookOpen className="w-5 h-5" />
        </div>
        <div className="space-y-1 flex-1">
          <h4 className="text-[10px] font-black text-[var(--ln-teal-600)] uppercase tracking-widest">
            Quick Summary
          </h4>
          <p className="text-sm md:text-base text-[var(--ln-navy-900)] leading-relaxed font-semibold">
            {summary}
          </p>
        </div>
      </div>
    </div>
  );
}
