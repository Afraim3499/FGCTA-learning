"use client";

import React from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";

interface StrategyConditionCardProps {
  conditions: string;
  family: string;
}

export function StrategyConditionCard({ conditions, family }: StrategyConditionCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* When It Works */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm flex items-start gap-4">
        <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg shrink-0">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <div className="space-y-1.5 flex-1">
          <h4 className="text-sm font-bold text-[var(--ln-navy-900)] flex items-center gap-1.5">
            When It Works
          </h4>
          <p className="text-xs text-[var(--ln-text-secondary)] leading-relaxed font-semibold">
            {family.toLowerCase().includes("trend") 
              ? "After a clear structure break with strong momentum and volume, followed by a clean retest of the broken level."
              : family.toLowerCase().includes("breakout")
              ? "During major session open windows (London/NY Open) with high relative volume and local range compression."
              : "Clear structural levels, session high/low tests, and price action rejection candles with high volume."}
          </p>
        </div>
      </div>

      {/* Avoid When */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm flex items-start gap-4">
        <div className="p-2 bg-rose-50/70 text-rose-500 rounded-lg shrink-0">
          <AlertCircle className="w-5 h-5" />
        </div>
        <div className="space-y-1.5 flex-1">
          <h4 className="text-sm font-bold text-[var(--ln-navy-900)] flex items-center gap-1.5">
            Avoid When
          </h4>
          <p className="text-xs text-[var(--ln-text-secondary)] leading-relaxed font-semibold">
            {family.toLowerCase().includes("trend") 
              ? "In choppy, low-volume markets or when the break lacks momentum and fails to establish new structure."
              : family.toLowerCase().includes("breakout")
              ? "Late-session entries (after 16:00 UTC), low relative volume (RVOL), or choppy overlapping consolidations."
              : "High-impact news announcements, wide broker spreads, and low-liquidity session intervals."}
          </p>
        </div>
      </div>
    </div>
  );
}
