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
  // SVG coordinates: Width = 500, Height = 250
  // Values are defined in pixels from the top (0 = top, 250 = bottom)
  
  // Define zones (higher pixel value means lower price)
  const targetZone = { top: 20, bottom: 60, label: "Target Zone (R:R Target)" };
  const entryZone = { top: 110, bottom: 130, label: "Entry Trigger Area" };
  const invalidationLine = 175; // Red line
  const warningZone = { top: 175, bottom: 210, label: "Trap / Sweep Zone" };

  const candles: CandleData[] = [
    { x: 30, open: 140, high: 120, low: 150, close: 130 },  // 1: Green
    { x: 70, open: 130, high: 110, low: 140, close: 120 },  // 2: Green (reaches entry area first time)
    { x: 110, open: 120, high: 115, low: 150, close: 145 }, // 3: Red (pullback)
    { x: 150, open: 145, high: 135, low: 185, close: 170 }, // 4: Red (sweeps below support, wicks into trap zone)
    { x: 190, open: 170, high: 125, low: 175, close: 130 }, // 5: Green (strong rejection candle, closes in entry zone)
    { x: 230, open: 130, high: 110, low: 140, close: 115 }, // 6: Green (entry confirmed, moving up)
    { x: 270, open: 115, high: 90, low: 120, close: 95 },   // 7: Green
    { x: 310, open: 95, high: 90, low: 110, close: 105 },   // 8: Red (small pause)
    { x: 350, open: 105, high: 70, low: 110, close: 75 },   // 9: Green
    { x: 390, open: 75, high: 45, low: 80, close: 50 },     // 10: Green (enters target zone)
    { x: 430, open: 50, high: 25, low: 60, close: 35 },     // 11: Green (fully in target zone)
  ];

  return (
    <div className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl overflow-hidden p-4 md:p-6 space-y-4">
      <div className="flex items-center justify-between border-b border-slate-200/60 pb-3">
        <div className="space-y-0.5">
          <h4 className="text-xs font-extrabold text-[var(--ln-navy-900)] uppercase tracking-wider">
            Setup Blueprint Schema
          </h4>
          <p className="text-[10px] text-slate-400 font-medium">
            Non-directional reference diagram illustrating structural zones.
          </p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-slate-500 text-[9px] font-bold">
          <Info className="w-3 h-3" />
          <span>Educational Model</span>
        </div>
      </div>

      <div className="relative w-full overflow-x-auto bg-slate-900 border border-slate-800 rounded-xl p-2 select-none">
        <svg 
          viewBox="0 0 500 250" 
          className="w-full min-w-[450px] h-auto font-sans"
        >
          {/* Grid lines */}
          <line x1="0" y1="50" x2="500" y2="50" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="0" y1="100" x2="500" y2="100" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="0" y1="150" x2="500" y2="150" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="0" y1="200" x2="500" y2="200" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />

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
            stroke="rgba(16, 185, 129, 0.4)" 
            strokeWidth="1" 
            strokeDasharray="2 2"
          />
          <line 
            x1="0" 
            y1={targetZone.bottom} 
            x2="500" 
            y2={targetZone.bottom} 
            stroke="rgba(16, 185, 129, 0.4)" 
            strokeWidth="1" 
            strokeDasharray="2 2"
          />
          <text 
            x="490" 
            y={targetZone.top + 25} 
            fill="rgb(52, 211, 153)" 
            fontSize="8" 
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
            stroke="rgba(20, 184, 166, 0.3)" 
            strokeWidth="1"
          />
          <line 
            x1="0" 
            y1={entryZone.bottom} 
            x2="500" 
            y2={entryZone.bottom} 
            stroke="rgba(20, 184, 166, 0.3)" 
            strokeWidth="1"
          />
          <text 
            x="490" 
            y={entryZone.top + 13} 
            fill="rgb(45, 212, 191)" 
            fontSize="8" 
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
            stroke="rgba(239, 68, 68, 0.7)" 
            strokeWidth="1.5" 
            strokeDasharray="4 3"
          />
          <text 
            x="490" 
            y={invalidationLine - 5} 
            fill="rgb(248, 113, 113)" 
            fontSize="8" 
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
            fill="rgba(245, 158, 11, 0.06)" 
          />
          <text 
            x="490" 
            y={warningZone.top + 22} 
            fill="rgb(251, 191, 36)" 
            fontSize="8" 
            fontWeight="bold" 
            textAnchor="end"
            opacity="0.7"
          >
            {warningZone.label.toUpperCase()}
          </text>

          {/* Candlesticks */}
          {candles.map((c, i) => {
            const isGreen = c.close < c.open; // Remember: 0 is top, so close < open means price went UP
            const color = isGreen ? "rgb(45, 212, 191)" : "rgb(248, 113, 113)";
            const wickColor = isGreen ? "rgba(45, 212, 191, 0.7)" : "rgba(248, 113, 113, 0.7)";
            const bodyY = Math.min(c.open, c.close);
            const bodyHeight = Math.max(2, Math.abs(c.open - c.close));

            return (
              <g key={i}>
                {/* Wick */}
                <line 
                  x1={c.x} 
                  y1={c.high} 
                  x2={c.x} 
                  y2={c.low} 
                  stroke={wickColor} 
                  strokeWidth="1.5" 
                />
                {/* Body */}
                <rect 
                  x={c.x - 6} 
                  y={bodyY} 
                  width="12" 
                  height={bodyHeight} 
                  fill={color} 
                  rx="1"
                />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Educational disclaimer */}
      <div className="flex gap-2 p-3 bg-amber-50/60 border border-amber-100 rounded-xl">
        <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <p className="text-[10px] text-amber-800/80 leading-relaxed font-semibold">
          Disclaimer: This diagram is for structural study only. Actual setups require confluence matching, strict volume filters, and session parameters. Never trade purely off zone touches.
        </p>
      </div>
    </div>
  );
}
