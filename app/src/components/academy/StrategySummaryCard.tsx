"use client";

import React from "react";
import { BookOpen } from "lucide-react";

interface StrategySummaryCardProps {
  summary: string;
}

export function StrategySummaryCard({ summary }: StrategySummaryCardProps) {
  return (
    <div className="bg-gradient-to-r from-slate-50 to-slate-100/50 border border-slate-200/80 rounded-2xl p-6 shadow-sm relative overflow-hidden group">
      <div className="absolute right-0 top-0 -mt-4 -mr-4 w-24 h-24 bg-[var(--ln-teal-500)]/5 rounded-full blur-2xl transition-all group-hover:bg-[var(--ln-teal-500)]/10" />
      <div className="flex items-start gap-4">
        <div className="p-3 bg-[var(--ln-teal-soft)] text-[var(--ln-teal-600)] rounded-xl shrink-0 shadow-inner">
          <BookOpen className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <h4 className="text-[10px] font-extrabold text-[var(--ln-teal-600)] uppercase tracking-wider">
            Quick Summary
          </h4>
          <p className="text-sm md:text-base text-[var(--ln-navy-900)] leading-relaxed font-medium">
            {summary}
          </p>
        </div>
      </div>
    </div>
  );
}
