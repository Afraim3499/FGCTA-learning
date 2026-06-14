"use client";

import React from "react";
import { Info, ShieldAlert } from "lucide-react";

interface CandleData {
  x: number;
  open: number;
  high: number;
  low: number;
  close: number;
}

export function StrategySetupVisual() {
  // SVG coordinates: Width = 500, Height = 180 (More compact)
  // Values are defined in pixels from the top (0 = top, 180 = bottom)
  
  const targetZone = { top: 15, bottom: 45, label: "Target Zone (R:R Target)" };
  const entryZone = { top: 80, bottom: 100, label: "Entry Trigger Area" };
  const invalidationLine = 135; // Red line
  const warningZone = { top: 135, bottom: 165, label: "Trap / Sweep Zone" };

  const candles: CandleData[] = [
    { x: 30, open: 110, high: 95, low: 120, close: 102 },   // 1: Green
    { x: 70, open: 102, high: 82, low: 110, close: 90 },    // 2: Green
    { x: 110, open: 90, high: 85, low: 120, close: 115 },   // 3: Red
    { x: 150, open: 115, high: 105, low: 145, close: 130 }, // 4: Red (wicks into trap zone)
    { x: 190, open: 130, high: 95, low: 135, close: 100 }, // 5: Green (strong rejection)
    { x: 230, open: 100, high: 80, low: 110, close: 85 },   // 6: Green
    { x: 270, open: 85, high: 65, low: 90, close: 70 },     // 7: Green
    { x: 310, open: 70, high: 65, low: 80, close: 75 },     // 8: Red (small pause)
    { x: 350, open: 75, high: 50, low: 80, close: 55 },    // 9: Green
    { x: 390, open: 55, high: 30, low: 60, close: 35 },     // 10: Green
    { x: 430, open: 35, high: 15, low: 45, close: 25 },     // 11: Green (fully in target)
  ];

  return (
    <div className="w-full bg-white border border-slate-200/80 rounded-2xl overflow-hidden p-4 md:p-5 space-y-3 shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
        <div className="space-y-0.5">
          <h4 className="text-[10px] font-black text-[var(--ln-navy-900)] uppercase tracking-wider">
            Setup Blueprint Schema
          </h4>
          <p className="text-[9px] text-slate-400 font-semibold">
            Non-directional reference diagram illustrating structural zones.
          </p>
        </div>
        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[8px] font-extrabold uppercase tracking-wide">
          <Info className="w-2.5 h-2.5" />
          <span>Study Model</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-950 border border-slate-900 rounded-xl p-2 select-none shadow-inner">
        <svg 
          viewBox="0 0 500 180" 
          className="w-full h-auto font-sans"
        >
          {/* Grid lines */}
          <line x1="0" y1="35" x2="500" y2="35" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="3 3" />
          <line x1="0" y1="70" x2="500" y2="70" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="3 3" />
          <line x1="0" y1="105" x2="500" y2="105" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="3 3" />
          <line x1="0" y1="140" x2="500" y2="140" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="3 3" />

          {/* Zones */}
          
          {/* Target Zone (Emerald) */}
          <rect 
            x="0" 
            y={targetZone.top} 
            width="500" 
            height={targetZone.bottom - targetZone.top} 
            fill="rgba(16, 185, 129, 0.08)" 
          />
          <line 
            x1="0" 
            y1={targetZone.top} 
            x2="500" 
            y2={targetZone.top} 
            stroke="rgba(16, 185, 129, 0.3)" 
            strokeWidth="0.5" 
            strokeDasharray="2 2"
          />
          <line 
            x1="0" 
            y1={targetZone.bottom} 
            x2="500" 
            y2={targetZone.bottom} 
            stroke="rgba(16, 185, 129, 0.3)" 
            strokeWidth="0.5" 
            strokeDasharray="2 2"
          />
          <text 
            x="490" 
            y={targetZone.top + 18} 
            fill="rgb(52, 211, 153)" 
            fontSize="7" 
            fontWeight="bold" 
            textAnchor="end"
            opacity="0.8"
          >
            {targetZone.label.toUpperCase()}
          </text>

          {/* Entry Trigger Zone (Teal) */}
          <rect 
            x="0" 
            y={entryZone.top} 
            width="500" 
            height={entryZone.bottom - entryZone.top} 
            fill="rgba(20, 184, 166, 0.08)" 
          />
          <line 
            x1="0" 
            y1={entryZone.top} 
            x2="500" 
            y2={entryZone.top} 
            stroke="rgba(20, 184, 166, 0.2)" 
            strokeWidth="0.5"
          />
          <line 
            x1="0" 
            y1={entryZone.bottom} 
            x2="500" 
            y2={entryZone.bottom} 
            stroke="rgba(20, 184, 166, 0.2)" 
            strokeWidth="0.5"
          />
          <text 
            x="490" 
            y={entryZone.top + 12} 
            fill="rgb(45, 212, 191)" 
            fontSize="7" 
            fontWeight="bold" 
            textAnchor="end"
            opacity="0.8"
          >
            {entryZone.label.toUpperCase()}
          </text>

          {/* Invalidation Level (Rose Red) */}
          <line 
            x1="0" 
            y1={invalidationLine} 
            x2="500" 
            y2={invalidationLine} 
            stroke="rgba(239, 68, 68, 0.6)" 
            strokeWidth="1.2" 
            strokeDasharray="4 3"
          />
          <text 
            x="490" 
            y={invalidationLine - 4} 
            fill="rgb(248, 113, 113)" 
            fontSize="7" 
            fontWeight="bold" 
            textAnchor="end"
            opacity="0.9"
          >
            INVALIDATION LEVEL
          </text>

          {/* Trap / Warning Zone (Amber) */}
          <rect 
            x="0" 
            y={warningZone.top} 
            width="500" 
            height={warningZone.bottom - warningZone.top} 
            fill="rgba(245, 158, 11, 0.05)" 
          />
          <text 
            x="490" 
            y={warningZone.top + 18} 
            fill="rgb(251, 191, 36)" 
            fontSize="7" 
            fontWeight="bold" 
            textAnchor="end"
            opacity="0.7"
          >
            {warningZone.label.toUpperCase()}
          </text>

          {/* Candlesticks */}
          {candles.map((c, i) => {
            const isGreen = c.close < c.open; // 0 is top
            const color = isGreen ? "rgb(45, 212, 191)" : "rgb(248, 113, 113)";
            const wickColor = isGreen ? "rgba(45, 212, 191, 0.6)" : "rgba(248, 113, 113, 0.6)";
            const bodyY = Math.min(c.open, c.close);
            const bodyHeight = Math.max(1.5, Math.abs(c.open - c.close));

            return (
              <g key={i}>
                <line 
                  x1={c.x} 
                  y1={c.high} 
                  x2={c.x} 
                  y2={c.low} 
                  stroke={wickColor} 
                  strokeWidth="1.2" 
                />
                <rect 
                  x={c.x - 5} 
                  y={bodyY} 
                  width="10" 
                  height={bodyHeight} 
                  fill={color} 
                  rx="1"
                />
              </g>
            );
          })}
        </svg>
      </div>

      <div className="flex gap-2 p-2.5 bg-amber-50/50 border border-amber-100 rounded-xl">
        <ShieldAlert className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
        <p className="text-[9px] text-amber-800/80 leading-relaxed font-semibold">
          Disclaimer: This diagram is for structural study only. Actual setups require confluence matching, strict volume filters, and session parameters. Never trade purely off zone touches.
        </p>
      </div>
    </div>
  );
}
