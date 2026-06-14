"use client";

import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";

interface StrategyConditionCardProps {
  conditions: string;
  family: string;
}

export function StrategyConditionCard({ conditions, family }: StrategyConditionCardProps) {
  // Try to split conditions if possible, or use standard representation
  const cleanConditions = conditions.replace(/best practiced in.*Native session.*/i, "").trim();

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
      <h3 className="text-xs font-extrabold text-[var(--ln-navy-900)] uppercase tracking-wider border-b border-slate-100 pb-2">
        Market Conditions & Environment
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Ideal Conditions */}
        <div className="p-4 bg-emerald-50/50 border border-emerald-100/80 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-emerald-700">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <h4 className="text-xs font-bold uppercase tracking-wider">Favorable Environment</h4>
          </div>
          <p className="text-xs text-emerald-900/80 leading-relaxed font-semibold">
            {family.toLowerCase().includes("trend") 
              ? "High-volume trending markets with clear Higher Highs/Higher Lows. Strong momentum alignment."
              : family.toLowerCase().includes("breakout")
              ? "Session open expansion windows (London/NY Open), local range squeeze, and high relative volume (RVOL)."
              : "Clear structural levels, session high/low tests, and price action rejection candles."}
          </p>
        </div>

        {/* Avoid Conditions */}
        <div className="p-4 bg-rose-50/50 border border-rose-100/80 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-rose-700">
            <XCircle className="w-4 h-4 shrink-0" />
            <h4 className="text-xs font-bold uppercase tracking-wider">Avoid Conditions</h4>
          </div>
          <p className="text-xs text-rose-900/80 leading-relaxed font-semibold">
            {family.toLowerCase().includes("trend") 
              ? "Low-liquidity Asian session consolidation, tight micro-ranges, or major high-impact macroeconomic news releases."
              : family.toLowerCase().includes("breakout")
              ? "Late-session entries (after 16:00 UTC), major holiday low volume, or choppy overlapping consolidations."
              : "High-impact news event prints, wide spreads, and unstructured price discovery periods."}
          </p>
        </div>
      </div>
      
      <div className="text-[10px] text-slate-400 font-medium pt-2">
        <span className="font-bold">Context:</span> {conditions}
      </div>
    </div>
  );
}
