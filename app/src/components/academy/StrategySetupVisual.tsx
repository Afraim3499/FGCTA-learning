"use client";

import React, { useState } from "react";
import { Info, ShieldAlert, TrendingUp, DollarSign, Activity, Percent, ArrowLeftRight } from "lucide-react";

export interface VisualModel {
  visualCategory: string;
  componentType: string;
  chartTitle: string;
  chartPurpose: string;
  marketConditionShown: string;
  setupFormationShown: string;
  entryOrActivationZone?: string;
  confirmationMarker?: string;
  invalidationZone?: string;
  targetZone?: string;
  trapZone?: string;
  warningLabel?: string;
  whatLearnerShouldNotice: string;
  mistakePrevented: string;
  interactionType: string;
  requiredLabels: string[];
  requiredZones: string[];
  assetSpecificVisualNotes?: string;
}

interface StrategySetupVisualProps {
  visualModel?: VisualModel;
}

export function StrategySetupVisual({ visualModel }: StrategySetupVisualProps) {
  // 1. Fallback / Default Renderer if no visualModel is provided
  if (!visualModel) {
    return <DefaultCandlestickChart />;
  }

  const category = visualModel.visualCategory;
  const compType = visualModel.componentType;

  // 2. Route to specialized visual layout components based on category or componentType
  if (category === "Risk / Position Sizing Visual" || compType === "SizingCalculator") {
    return <PositionSizingCalculator visual={visualModel} />;
  }
  if (category === "Crypto Derivatives Visual" || compType === "DerivativesDashboard") {
    return <CryptoDerivativesDashboard visual={visualModel} />;
  }
  if (category === "Gold Macro Reaction Visual" || compType === "GoldMacroRealYieldChart") {
    return <GoldMacroRealYieldChart visual={visualModel} />;
  }
  if (category === "Forex Pair Strength Visual" || compType === "ForexPairStrengthMeter") {
    return <ForexPairStrengthMeter visual={visualModel} />;
  }
  if (compType === "MACDStructureChart") {
    return <MACDStructureChart visual={visualModel} />;
  }
  if (compType === "ADXStrengthChart") {
    return <ADXStrengthChart visual={visualModel} />;
  }
  if (compType === "MovingAverageCrossoverChart") {
    return <MovingAverageCrossoverChart visual={visualModel} />;
  }
  if (compType === "SessionBreakoutChart") {
    return <SessionBreakoutChart visual={visualModel} />;
  }
  if (compType === "SupertrendVolatilityChart") {
    return <SupertrendVolatilityChart visual={visualModel} />;
  }
  if (compType === "ParabolicSARChart") {
    return <ParabolicSARChart visual={visualModel} />;
  }
  if (compType === "IchimokuCloudChart") {
    return <IchimokuCloudChart visual={visualModel} />;
  }
  if (compType === "HeikinAshiTrendChart") {
    return <HeikinAshiTrendChart visual={visualModel} />;
  }
  if (compType === "DonchianChannelBreakoutChart") {
    return <DonchianChannelBreakoutChart visual={visualModel} />;
  }

  // 3. Custom SVG Chart for standard structural categories (Breakout, Trend, S/R, Sweep, etc.)
  return <AnnotatedCandlestickChart visual={visualModel} />;
}

// ==========================================================
// SUB-RENDERER A: Annotated Candlestick Chart (General)
// ==========================================================
function AnnotatedCandlestickChart({ visual }: { visual: VisualModel }) {
  const targetZone = { top: 15, bottom: 45, label: visual.targetZone || "Target Zone" };
  const entryZone = { top: 80, bottom: 100, label: visual.entryOrActivationZone || "Entry Trigger Area" };
  const invalidationLine = 135;
  const warningZone = { top: 135, bottom: 165, label: visual.trapZone || "Trap / Sweep Zone" };

  const candles = [
    { x: 30, open: 110, high: 95, low: 120, close: 102 },
    { x: 70, open: 102, high: 82, low: 110, close: 90 },
    { x: 110, open: 90, high: 85, low: 120, close: 115 },
    { x: 150, open: 115, high: 105, low: 145, close: 130 }, // Wicks into warning
    { x: 190, open: 130, high: 95, low: 135, close: 100 },  // Strong rejection
    { x: 230, open: 100, high: 80, low: 110, close: 85 },
    { x: 270, open: 85, high: 65, low: 90, close: 70 },
    { x: 310, open: 70, high: 65, low: 80, close: 75 },
    { x: 350, open: 75, high: 50, low: 80, close: 55 },
    { x: 390, open: 55, high: 30, low: 60, close: 35 },
    { x: 430, open: 35, high: 15, low: 45, close: 25 },
  ];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">
            {visual.chartTitle}
          </h4>
          <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">
            {visual.chartPurpose} ({visual.marketConditionShown})
          </p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[9px] font-extrabold uppercase tracking-widest border border-emerald-500/20">
          <Activity className="w-3 h-3" />
          <span>Interactive Model</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-950 border border-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 180" className="w-full h-auto font-sans">
          {/* Grid lines */}
          {[35, 70, 105, 140].map(y => (
            <line key={y} x1="0" y1={y} x2="500" y2={y} stroke="#1e293b" strokeWidth="0.5" strokeDasharray="3 3" />
          ))}

          {/* Target Zone */}
          <rect x="0" y={targetZone.top} width="500" height={targetZone.bottom - targetZone.top} fill="rgba(16, 185, 129, 0.06)" />
          <line x1="0" y1={targetZone.top} x2="500" y2={targetZone.top} stroke="rgba(16, 185, 129, 0.25)" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="0" y1={targetZone.bottom} x2="500" y2={targetZone.bottom} stroke="rgba(16, 185, 129, 0.25)" strokeWidth="0.5" strokeDasharray="2 2" />
          <text x="490" y={targetZone.top + 16} fill="rgb(52, 211, 153)" fontSize="6.5" fontWeight="bold" textAnchor="end" opacity="0.8">
            {targetZone.label.toUpperCase()}
          </text>

          {/* Entry Zone */}
          <rect x="0" y={entryZone.top} width="500" height={entryZone.bottom - entryZone.top} fill="rgba(20, 184, 166, 0.06)" />
          <line x1="0" y1={entryZone.top} x2="500" y2={entryZone.top} stroke="rgba(20, 184, 166, 0.2)" strokeWidth="0.5" />
          <line x1="0" y1={entryZone.bottom} x2="500" y2={entryZone.bottom} stroke="rgba(20, 184, 166, 0.2)" strokeWidth="0.5" />
          <text x="490" y={entryZone.top + 13} fill="rgb(45, 212, 191)" fontSize="6.5" fontWeight="bold" textAnchor="end" opacity="0.8">
            {entryZone.label.toUpperCase()}
          </text>

          {/* Invalidation Level */}
          <line x1="0" y1={invalidationLine} x2="500" y2={invalidationLine} stroke="rgba(239, 68, 68, 0.5)" strokeWidth="1.2" strokeDasharray="4 3" />
          <text x="490" y={invalidationLine - 4} fill="rgb(248, 113, 113)" fontSize="6.5" fontWeight="bold" textAnchor="end" opacity="0.9">
            {visual.invalidationZone ? visual.invalidationZone.toUpperCase() : "INVALIDATION LEVEL"}
          </text>

          {/* Warning / Trap Zone */}
          <rect x="0" y={warningZone.top} width="500" height={warningZone.bottom - warningZone.top} fill="rgba(245, 158, 11, 0.03)" />
          <text x="490" y={warningZone.top + 18} fill="rgb(251, 191, 36)" fontSize="6.5" fontWeight="bold" textAnchor="end" opacity="0.7">
            {warningZone.label.toUpperCase()}
          </text>

          {/* Candlesticks */}
          {candles.map((c, i) => {
            const isGreen = c.close < c.open;
            const color = isGreen ? "rgb(45, 212, 191)" : "rgb(248, 113, 113)";
            const wickColor = isGreen ? "rgba(45, 212, 191, 0.5)" : "rgba(248, 113, 113, 0.5)";
            const bodyY = Math.min(c.open, c.close);
            const bodyHeight = Math.max(2, Math.abs(c.open - c.close));

            return (
              <g key={i}>
                <line x1={c.x} y1={c.high} x2={c.x} y2={c.low} stroke={wickColor} strokeWidth="1.2" />
                <rect x={c.x - 5} y={bodyY} width="10" height={bodyHeight} fill={color} rx="1" />
              </g>
            );
          })}
        </svg>
      </div>

      <div className="space-y-2.5 bg-slate-950/50 p-4 border border-slate-850 rounded-2xl">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-emerald-400 font-extrabold uppercase">Key Observation: </span>
            {visual.whatLearnerShouldNotice}
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-amber-500 font-extrabold uppercase">Mistake Avoided: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// SUB-RENDERER B: Position Sizing Calculator
// ==========================================================
function PositionSizingCalculator({ visual }: { visual: VisualModel }) {
  const [balance, setBalance] = useState(10000);
  const [riskPct, setRiskPct] = useState(1);
  const [stopPips, setStopPips] = useState(50);

  const riskAmount = (balance * riskPct) / 100;
  const positionSize = stopPips > 0 ? (riskAmount / (stopPips * 10)) : 0; // Standard Forex model ($10 per lot per pip)

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-5 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">{visual.chartTitle}</h4>
          <p className="text-[10px] text-slate-400 font-semibold">{visual.chartPurpose}</p>
        </div>
        <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[9px] font-extrabold uppercase border border-blue-500/20">
          <Percent className="w-3 h-3" />
          <span>Interactive Calculator</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Input 1 */}
        <div className="space-y-1.5 bg-slate-950 p-3.5 border border-slate-850 rounded-2xl">
          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Account Balance</label>
          <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 border border-slate-800 rounded-xl">
            <DollarSign className="w-3.5 h-3.5 text-slate-400" />
            <input
              type="number"
              value={balance}
              onChange={(e) => setBalance(Number(e.target.value))}
              className="w-full bg-transparent text-xs font-bold text-white focus:outline-none"
            />
          </div>
        </div>

        {/* Input 2 */}
        <div className="space-y-1.5 bg-slate-950 p-3.5 border border-slate-850 rounded-2xl">
          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Max Risk %</label>
          <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 border border-slate-800 rounded-xl">
            <Percent className="w-3.5 h-3.5 text-slate-400" />
            <input
              type="number"
              step="0.1"
              value={riskPct}
              onChange={(e) => setRiskPct(Number(e.target.value))}
              className="w-full bg-transparent text-xs font-bold text-white focus:outline-none"
            />
          </div>
        </div>

        {/* Input 3 */}
        <div className="space-y-1.5 bg-slate-950 p-3.5 border border-slate-850 rounded-2xl">
          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Stop Distance (Pips)</label>
          <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 border border-slate-800 rounded-xl">
            <TrendingUp className="w-3.5 h-3.5 text-slate-400" />
            <input
              type="number"
              value={stopPips}
              onChange={(e) => setStopPips(Number(e.target.value))}
              className="w-full bg-transparent text-xs font-bold text-white focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Output Renders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-950 border border-slate-850 p-5 rounded-3xl">
        <div className="space-y-1 text-center md:text-left">
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Cash Value at Risk</span>
          <p className="text-xl font-mono font-bold text-rose-400">${riskAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
        </div>
        <div className="space-y-1 text-center md:text-left border-t md:border-t-0 md:border-l border-slate-850 pt-3.5 md:pt-0 md:pl-5">
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Calculated Position Size</span>
          <p className="text-xl font-mono font-bold text-emerald-400">{positionSize.toFixed(2)} Standard Lots</p>
        </div>
      </div>

      <div className="bg-slate-950/50 p-4 border border-slate-850 rounded-2xl space-y-2.5">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 font-semibold leading-relaxed">
            <span className="text-emerald-400 font-extrabold uppercase">Math Process: </span>
            Formula is `(Balance * Risk%) / (Stop Pips * $10 per pip)`. This adjusts size to target exact risk parameters.
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 font-semibold leading-relaxed">
            <span className="text-amber-500 font-extrabold uppercase">Prevented Error: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// SUB-RENDERER C: Crypto Derivatives Dashboard (Funding/OI)
// ==========================================================
function CryptoDerivativesDashboard({ visual }: { visual: VisualModel }) {
  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">{visual.chartTitle}</h4>
          <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">{visual.chartPurpose}</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-[9px] font-extrabold uppercase border border-amber-500/20">
          <ArrowLeftRight className="w-3 h-3" />
          <span>Derivatives Monitor</span>
        </div>
      </div>

      {/* Spot vs Perp Visualization */}
      <div className="bg-slate-950 p-4 border border-slate-850 rounded-2xl space-y-4 select-none">
        <div className="h-28 relative flex items-end justify-between border-b border-slate-800 pb-1.5">
          {/* Dual Axis Lines */}
          <div className="absolute inset-0 flex flex-col justify-between opacity-10">
            {[1, 2, 3, 4].map(i => <div key={i} className="border-t border-slate-300 w-full" />)}
          </div>
          
          {/* Plotting spot vs perp mock curves */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 100">
            {/* Spot line (Cyan) */}
            <path d="M 10 90 Q 100 85 200 60 T 390 15" fill="none" stroke="rgb(45, 212, 191)" strokeWidth="1.5" />
            <text x="380" y="30" fill="rgb(45, 212, 191)" fontSize="7" fontWeight="bold">SPOT</text>

            {/* Perp line (Yellow/Amber - deviates and sweeps) */}
            <path d="M 10 90 Q 100 85 200 45 T 390 5" fill="none" stroke="rgb(251, 191, 36)" strokeWidth="1.5" strokeDasharray="3 2" />
            <text x="380" y="10" fill="rgb(251, 191, 36)" fontSize="7" fontWeight="bold">PERP (OI BUILD)</text>

            {/* Rejection/liquidation drop */}
            <circle cx="300" cy="40" r="4" fill="red" className="animate-pulse" />
            <line x1="300" y1="40" x2="300" y2="90" stroke="red" strokeWidth="1" strokeDasharray="1 1" />
          </svg>
        </div>

        {/* Legend */}
        <div className="flex justify-between items-center text-[9px] font-bold text-slate-400 uppercase tracking-widest px-2">
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded bg-teal-400" /> Spot price index</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded bg-amber-400" /> Perpetual contract price</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded bg-red-500" /> Liquidation Trigger</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-950 p-3.5 border border-slate-850 rounded-2xl text-center">
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">Perp Funding Rate</span>
          <p className="text-lg font-mono font-bold text-amber-400">+0.0824% / 8h</p>
          <span className="text-[8px] text-rose-400 font-bold block mt-0.5">HIGH LONG PRESSURE</span>
        </div>
        <div className="bg-slate-950 p-3.5 border border-slate-850 rounded-2xl text-center">
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">Basis Spread</span>
          <p className="text-lg font-mono font-bold text-teal-400">+$245.50</p>
          <span className="text-[8px] text-slate-400 font-bold block mt-0.5">PERP PREMIUM OVER SPOT</span>
        </div>
      </div>

      <div className="space-y-2 bg-slate-950/50 p-4 border border-slate-850 rounded-2xl">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 font-semibold leading-relaxed">
            <span className="text-emerald-400 font-extrabold uppercase">Whale Watch: </span>
            {visual.whatLearnerShouldNotice}
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 font-semibold leading-relaxed">
            <span className="text-amber-500 font-extrabold uppercase">Prevented Error: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// SUB-RENDERER D: Gold Macro Real Yield Chart (Gold vs TIPS)
// ==========================================================
function GoldMacroRealYieldChart({ visual }: { visual: VisualModel }) {
  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">{visual.chartTitle}</h4>
          <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">{visual.chartPurpose}</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-[9px] font-extrabold uppercase border border-yellow-500/20">
          <TrendingUp className="w-3 h-3" />
          <span>Macro Correlation</span>
        </div>
      </div>

      {/* Gold vs yields overlay */}
      <div className="bg-slate-950 p-4 border border-slate-850 rounded-2xl relative select-none">
        <div className="h-28 relative flex items-end justify-between border-b border-slate-800 pb-1.5">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 100">
            {/* Real Yields line (White - inverted) */}
            <path d="M 10 15 Q 100 35 200 60 T 390 90" fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.2" strokeDasharray="3 2" />
            <text x="15" y="25" fill="rgba(255, 255, 255, 0.6)" fontSize="7" fontWeight="bold">US 10Y REAL YIELD (INVERTED)</text>

            {/* Gold Line (Gold/Yellow - lagging then reacting) */}
            <path d="M 10 20 Q 100 40 200 65 T 390 85" fill="none" stroke="rgb(250, 204, 21)" strokeWidth="1.8" />
            <text x="380" y="80" fill="rgb(250, 204, 21)" fontSize="7" fontWeight="bold" textAnchor="end">XAU/USD (SPOT GOLD)</text>

            {/* Correlation Divergence Area */}
            <path d="M 150 47 L 230 63 L 230 45 L 150 35 Z" fill="rgba(250, 204, 21, 0.08)" />
            <text x="190" y="25" fill="rgb(250, 204, 21)" fontSize="6" fontWeight="bold" textAnchor="middle">CORRELATION ALIGNED</text>
          </svg>
        </div>
      </div>

      <div className="space-y-2 bg-slate-950/50 p-4 border border-slate-850 rounded-2xl">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 font-semibold leading-relaxed">
            <span className="text-emerald-400 font-extrabold uppercase">Macro Note: </span>
            {visual.whatLearnerShouldNotice}
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 font-semibold leading-relaxed">
            <span className="text-amber-500 font-extrabold uppercase">Rookie Trap: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// SUB-RENDERER E: Forex Pair Strength Meter
// ==========================================================
function ForexPairStrengthMeter({ visual }: { visual: VisualModel }) {
  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">{visual.chartTitle}</h4>
          <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">{visual.chartPurpose}</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400 text-[9px] font-extrabold uppercase border border-purple-500/20">
          <TrendingUp className="w-3 h-3" />
          <span>Strength Matrix</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Base Currency Strength */}
        <div className="bg-slate-950 p-4 border border-slate-850 rounded-2xl space-y-2 text-center">
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Base Currency Strength</span>
          <p className="text-2xl font-black text-emerald-400">8.2 / 10</p>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-400" style={{ width: "82%" }} />
          </div>
          <span className="text-[8px] text-slate-500 font-extrabold block">BULLISH EXPANSION</span>
        </div>

        {/* Quote Currency Strength */}
        <div className="bg-slate-950 p-4 border border-slate-850 rounded-2xl space-y-2 text-center">
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Quote Currency Strength</span>
          <p className="text-2xl font-black text-rose-400">2.4 / 10</p>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-rose-400" style={{ width: "24%" }} />
          </div>
          <span className="text-[8px] text-slate-500 font-extrabold block">BEARISH DECAY</span>
        </div>
      </div>

      <div className="space-y-2 bg-slate-950/50 p-4 border border-slate-850 rounded-2xl">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 font-semibold leading-relaxed">
            <span className="text-emerald-400 font-extrabold uppercase">Observation: </span>
            {visual.whatLearnerShouldNotice}
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 font-semibold leading-relaxed">
            <span className="text-amber-500 font-extrabold uppercase">Avoid Mistake: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// FALLBACK DEFAULT: Simple Candlestick Chart
// ==========================================================
function DefaultCandlestickChart() {
  const candles = [
    { x: 30, open: 110, high: 95, low: 120, close: 102 },
    { x: 70, open: 102, high: 82, low: 110, close: 90 },
    { x: 110, open: 90, high: 85, low: 120, close: 115 },
    { x: 150, open: 115, high: 105, low: 145, close: 130 },
    { x: 190, open: 130, high: 95, low: 135, close: 100 },
    { x: 230, open: 100, high: 80, low: 110, close: 85 },
  ];

  return (
    <div className="w-full bg-white border border-slate-200/80 rounded-2xl p-4 md:p-5 space-y-3 shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
        <div className="space-y-0.5">
          <h4 className="text-[10px] font-black text-[var(--ln-navy-900)] uppercase tracking-wider">Setup Blueprint</h4>
          <p className="text-[9px] text-slate-400 font-semibold">Reference model showing entry and invalidation zones.</p>
        </div>
        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[8px] font-extrabold uppercase">
          <Info className="w-2.5 h-2.5" />
          <span>Default Model</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-950 border border-slate-900 rounded-xl p-2 select-none">
        <svg viewBox="0 0 500 180" className="w-full h-auto font-sans">
          {/* Target Zone */}
          <rect x="0" y="15" width="500" height="30" fill="rgba(16, 185, 129, 0.08)" />
          <text x="490" y="32" fill="rgb(52, 211, 153)" fontSize="7" fontWeight="bold" textAnchor="end">TARGET ZONE</text>
          
          {/* Entry Zone */}
          <rect x="0" y="80" width="500" height="20" fill="rgba(20, 184, 166, 0.08)" />
          <text x="490" y="93" fill="rgb(45, 212, 191)" fontSize="7" fontWeight="bold" textAnchor="end">ENTRY ZONE</text>

          {/* Invalidation line */}
          <line x1="0" y1="135" x2="500" y2="135" stroke="rgba(239, 68, 68, 0.6)" strokeWidth="1.2" strokeDasharray="4 3" />
          <text x="490" y="131" fill="rgb(248, 113, 113)" fontSize="7" fontWeight="bold" textAnchor="end">INVALIDATION LEVEL</text>

          {candles.map((c, i) => {
            const isGreen = c.close < c.open;
            const color = isGreen ? "rgb(45, 212, 191)" : "rgb(248, 113, 113)";
            const bodyY = Math.min(c.open, c.close);
            const bodyHeight = Math.max(1.5, Math.abs(c.open - c.close));

            return (
              <g key={i}>
                <line x1={c.x} y1={c.high} x2={c.x} y2={c.low} stroke={color} strokeWidth="1.2" opacity="0.6" />
                <rect x={c.x - 5} y={bodyY} width="10" height={bodyHeight} fill={color} rx="1" />
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

// ==========================================================
// SUB-RENDERER F: MACD Structure Chart
// ==========================================================
function MACDStructureChart({ visual }: { visual: VisualModel }) {
  const macdPoints = [
    { x: 30, macd: -15, signal: -10 },
    { x: 70, macd: -8, signal: -11 },
    { x: 110, macd: 2, signal: -8 },
    { x: 150, macd: 15, signal: -3 },
    { x: 190, macd: 25, signal: 5 },
    { x: 230, macd: 28, signal: 11 },
    { x: 270, macd: 22, signal: 15 },
    { x: 310, macd: 12, signal: 16 },
    { x: 350, macd: 2, signal: 13 },
    { x: 390, macd: -8, signal: 7 },
    { x: 430, macd: -14, signal: -1 },
    { x: 470, macd: -12, signal: -6 },
  ];

  const macdPath = "M " + macdPoints.map(p => `${p.x} ${90 - p.macd * 2}`).join(" L ");
  const signalPath = "M " + macdPoints.map(p => `${p.x} ${90 - p.signal * 2}`).join(" L ");

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">
            {visual.chartTitle}
          </h4>
          <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">
            {visual.chartPurpose}
          </p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-[9px] font-extrabold uppercase tracking-widest border border-indigo-500/20">
          <Activity className="w-3 h-3" />
          <span>MACD Structure</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-950 border border-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 180" className="w-full h-auto font-sans">
          {/* Zero Line */}
          <line x1="0" y1="90" x2="500" y2="90" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
          <text x="10" y="86" fill="rgba(255, 255, 255, 0.4)" fontSize="6" fontWeight="bold">ZERO LINE</text>

          {/* Histogram Bars */}
          {macdPoints.map((p, i) => {
            const diff = p.macd - p.signal;
            const barHeight = Math.abs(diff) * 2;
            const y = diff >= 0 ? 90 - diff * 2 : 90;
            const isGreen = diff >= 0;
            const fillColor = isGreen ? "rgba(45, 212, 191, 0.5)" : "rgba(248, 113, 113, 0.5)";
            return (
              <rect
                key={i}
                x={p.x - 3}
                y={y}
                width="6"
                height={Math.max(1, barHeight)}
                fill={fillColor}
                rx="0.5"
              />
            );
          })}

          {/* MACD Line (Cyan) */}
          <path d={macdPath} fill="none" stroke="rgb(45, 212, 191)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          
          {/* Signal Line (Red/Orange) */}
          <path d={signalPath} fill="none" stroke="rgb(249, 115, 22)" strokeWidth="1.5" strokeDasharray="3 1" strokeLinecap="round" strokeLinejoin="round" />

          {/* Crossover Annotation */}
          <circle cx="110" cy="106" r="5" fill="none" stroke="rgb(251, 191, 36)" strokeWidth="1.5" />
          <text x="110" y="122" fill="rgb(251, 191, 36)" fontSize="6" fontWeight="bold" textAnchor="middle">CROSSOVER</text>

          {/* Histogram Expansion Zone */}
          <rect x="175" y="40" width="30" height="40" fill="rgba(45, 212, 191, 0.08)" rx="2" stroke="rgba(45, 212, 191, 0.2)" strokeWidth="0.5" />
          <text x="190" y="32" fill="rgb(45, 212, 191)" fontSize="6" fontWeight="bold" textAnchor="middle">EXPANSION ZONE</text>

          {/* Target/Invalidation Labels */}
          {visual.invalidationZone && (
            <>
              <line x1="0" y1="150" x2="500" y2="150" stroke="rgba(239, 68, 68, 0.4)" strokeWidth="0.8" strokeDasharray="3 3" />
              <text x="490" y="146" fill="rgb(248, 113, 113)" fontSize="6" fontWeight="bold" textAnchor="end">
                {visual.invalidationZone.toUpperCase()}
              </text>
            </>
          )}
        </svg>
      </div>

      <div className="space-y-2 bg-slate-950/50 p-4 border border-slate-850 rounded-2xl">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-emerald-400 font-extrabold uppercase">Key Observation: </span>
            {visual.whatLearnerShouldNotice}
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-amber-500 font-extrabold uppercase">Mistake Avoided: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// SUB-RENDERER G: ADX Strength Chart
// ==========================================================
function ADXStrengthChart({ visual }: { visual: VisualModel }) {
  const adxPoints = [
    { x: 30, val: 12 },
    { x: 70, val: 14 },
    { x: 110, val: 18 },
    { x: 150, val: 24 },
    { x: 190, val: 32 },
    { x: 230, val: 40 },
    { x: 270, val: 45 },
    { x: 310, val: 48 },
    { x: 350, val: 44 },
    { x: 390, val: 38 },
    { x: 430, val: 30 },
    { x: 470, val: 22 },
  ];

  const adxPath = "M " + adxPoints.map(p => `${p.x} ${160 - p.val * 2.5}`).join(" L ");

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">
            {visual.chartTitle}
          </h4>
          <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">
            {visual.chartPurpose}
          </p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-400 text-[9px] font-extrabold uppercase tracking-widest border border-teal-500/20">
          <Activity className="w-3 h-3" />
          <span>ADX Strength</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-950 border border-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 180" className="w-full h-auto font-sans">
          {/* Weak Trend Zone */}
          <rect x="0" y="97.5" width="500" height="82.5" fill="rgba(244, 63, 94, 0.03)" />
          <text x="10" y="165" fill="rgba(244, 63, 94, 0.5)" fontSize="6.5" fontWeight="bold">WEAK TREND ZONE (ADX &lt; 25)</text>

          {/* Strong Trend Zone */}
          <rect x="0" y="0" width="500" height="97.5" fill="rgba(45, 212, 191, 0.03)" />
          <text x="10" y="20" fill="rgba(45, 212, 191, 0.5)" fontSize="6.5" fontWeight="bold">STRONG TREND ZONE (ADX &gt; 25)</text>

          {/* Threshold line */}
          <line x1="0" y1="97.5" x2="500" y2="97.5" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" strokeDasharray="3 3" />
          <text x="490" y="94" fill="rgba(255, 255, 255, 0.5)" fontSize="6.5" fontWeight="bold" textAnchor="end">TREND STRENGTH THRESHOLD (25)</text>

          {/* ADX Line */}
          <path d={adxPath} fill="none" stroke="rgb(45, 212, 191)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />

          {/* Trend Strength Confirmation Marker */}
          <circle cx="190" cy="80" r="5" fill="rgb(45, 212, 191)" />
          <text x="202" y="82" fill="rgb(45, 212, 191)" fontSize="6" fontWeight="black">CONFIRMED TREND STRENGTH</text>
        </svg>
      </div>

      <div className="space-y-2 bg-slate-950/50 p-4 border border-slate-850 rounded-2xl">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-emerald-400 font-extrabold uppercase">Key Observation: </span>
            {visual.whatLearnerShouldNotice}
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-amber-500 font-extrabold uppercase">Mistake Avoided: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// SUB-RENDERER H: Moving Average Crossover Chart
// ==========================================================
function MovingAverageCrossoverChart({ visual }: { visual: VisualModel }) {
  const candles = [
    { x: 30, open: 120, close: 125, high: 118, low: 128 },
    { x: 70, open: 124, close: 118, high: 115, low: 126 },
    { x: 110, open: 118, close: 105, high: 102, low: 120 },
    { x: 150, open: 106, close: 95, high: 92, low: 112 },
    { x: 190, open: 96, close: 108, high: 94, low: 110 },
    { x: 230, open: 108, close: 102, high: 98, low: 114 },
    { x: 270, open: 102, close: 85, high: 82, low: 105 },
    { x: 310, open: 85, close: 72, high: 70, low: 90 },
    { x: 350, open: 74, close: 60, high: 58, low: 78 },
    { x: 390, open: 60, close: 52, high: 50, low: 65 },
    { x: 430, open: 52, close: 40, high: 38, low: 55 },
    { x: 470, open: 40, close: 32, high: 30, low: 45 },
  ];

  const fastMA = [
    { x: 30, y: 122 },
    { x: 70, y: 120 },
    { x: 110, y: 112 },
    { x: 150, y: 100 },
    { x: 190, y: 92 },
    { x: 230, y: 94 },
    { x: 270, y: 88 },
    { x: 310, y: 78 },
    { x: 350, y: 66 },
    { x: 390, y: 55 },
    { x: 430, y: 45 },
    { x: 470, y: 35 },
  ];

  const slowMA = [
    { x: 30, y: 108 },
    { x: 70, y: 106 },
    { x: 110, y: 102 },
    { x: 150, y: 97 },
    { x: 190, y: 92 },
    { x: 230, y: 88 },
    { x: 270, y: 83 },
    { x: 310, y: 77 },
    { x: 350, y: 70 },
    { x: 390, y: 64 },
    { x: 430, y: 58 },
    { x: 470, y: 51 },
  ];

  const fastPath = "M " + fastMA.map(p => `${p.x} ${p.y}`).join(" L ");
  const slowPath = "M " + slowMA.map(p => `${p.x} ${p.y}`).join(" L ");

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">
            {visual.chartTitle}
          </h4>
          <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">
            {visual.chartPurpose}
          </p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[9px] font-extrabold uppercase tracking-widest border border-emerald-500/20">
          <Activity className="w-3 h-3" />
          <span>MA Crossover</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-950 border border-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 180" className="w-full h-auto font-sans">
          {/* Grid lines */}
          {[35, 70, 105, 140].map(y => (
            <line key={y} x1="0" y1={y} x2="500" y2={y} stroke="#1e293b" strokeWidth="0.5" strokeDasharray="3 3" />
          ))}

          {/* Invalidation Zone */}
          <rect x="0" y="145" width="500" height="35" fill="rgba(239, 68, 68, 0.05)" />
          <line x1="0" y1="145" x2="500" y2="145" stroke="rgba(239, 68, 68, 0.3)" strokeWidth="0.8" strokeDasharray="4 2" />
          <text x="490" y="141" fill="rgb(248, 113, 113)" fontSize="6" fontWeight="bold" textAnchor="end">
            {visual.invalidationZone ? visual.invalidationZone.toUpperCase() : "INVALIDATION ZONE"}
          </text>

          {/* False Crossover / whipsaw trap zone */}
          <rect x="205" y="65" width="50" height="55" fill="rgba(251, 191, 36, 0.06)" rx="3" stroke="rgba(251, 191, 36, 0.2)" strokeWidth="0.5" strokeDasharray="2 1" />
          <text x="230" y="60" fill="rgb(251, 191, 36)" fontSize="5.5" fontWeight="bold" textAnchor="middle">LAG / WHIPSAW TRAP ZONE</text>

          {/* Candlesticks */}
          {candles.map((c, i) => {
            const isGreen = c.close < c.open;
            const color = isGreen ? "rgb(45, 212, 191)" : "rgb(248, 113, 113)";
            const bodyY = Math.min(c.open, c.close);
            const bodyHeight = Math.max(2, Math.abs(c.open - c.close));

            return (
              <g key={i} opacity="0.6">
                <line x1={c.x} y1={c.high} x2={c.x} y2={c.low} stroke={color} strokeWidth="1" />
                <rect x={c.x - 3} y={bodyY} width="6" height={bodyHeight} fill={color} rx="0.5" />
              </g>
            );
          })}

          {/* Fast MA Line */}
          <path d={fastPath} fill="none" stroke="rgb(45, 212, 191)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          
          {/* Slow MA Line */}
          <path d={slowPath} fill="none" stroke="rgb(129, 140, 248)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

          {/* Crossover Point Indicator */}
          <circle cx="190" cy="92" r="4" fill="none" stroke="rgb(45, 212, 191)" strokeWidth="1.5" />
          <text x="190" y="84" fill="rgb(45, 212, 191)" fontSize="5.5" fontWeight="bold" textAnchor="middle">CROSSOVER POINT</text>
        </svg>
      </div>

      <div className="space-y-2 bg-slate-950/50 p-4 border border-slate-850 rounded-2xl">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-emerald-400 font-extrabold uppercase">Key Observation: </span>
            {visual.whatLearnerShouldNotice}
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-amber-500 font-extrabold uppercase">Mistake Avoided: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// SUB-RENDERER I: Session Breakout Chart
// ==========================================================
function SessionBreakoutChart({ visual }: { visual: VisualModel }) {
  const candles = [
    { x: 30, open: 110, close: 114, high: 108, low: 116 },
    { x: 60, open: 114, close: 108, high: 106, low: 118 },
    { x: 90, open: 108, close: 112, high: 105, low: 115 },
    { x: 120, open: 112, close: 118, high: 109, low: 120 },
    { x: 150, open: 118, close: 110, high: 107, low: 121 },
    { x: 180, open: 110, close: 128, high: 108, low: 132 },
    { x: 210, open: 128, close: 135, high: 124, low: 140 },
    { x: 240, open: 135, close: 132, high: 130, low: 138 },
    { x: 270, open: 132, close: 148, high: 130, low: 150 },
    { x: 300, open: 148, close: 155, high: 145, low: 158 },
    { x: 330, open: 155, close: 162, high: 152, low: 165 },
    { x: 360, open: 162, close: 158, high: 155, low: 166 },
    { x: 390, open: 158, close: 170, high: 156, low: 172 },
  ];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">
            {visual.chartTitle}
          </h4>
          <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">
            {visual.chartPurpose}
          </p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-400 text-[9px] font-extrabold uppercase tracking-widest border border-violet-500/20">
          <Activity className="w-3 h-3" />
          <span>Session Breakout</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-950 border border-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 180" className="w-full h-auto font-sans">
          {/* Session Range box */}
          <rect x="15" y="105" width="150" height="18" fill="rgba(56, 189, 248, 0.05)" stroke="rgba(56, 189, 248, 0.25)" strokeWidth="0.8" strokeDasharray="2 2" rx="2" />
          <text x="90" y="100" fill="rgb(56, 189, 248)" fontSize="5.5" fontWeight="black" textAnchor="middle">SESSION RANGE BOUNDARY</text>

          {/* Breakout / Retest Entry Zone */}
          <rect x="225" y="125" width="30" height="15" fill="rgba(45, 212, 191, 0.08)" rx="2" stroke="rgba(45, 212, 191, 0.2)" strokeWidth="0.5" />
          <text x="240" y="120" fill="rgb(45, 212, 191)" fontSize="5.5" fontWeight="bold" textAnchor="middle">RETEST ENTRY ZONE</text>

          {/* False Breakout / Trap zone under Asian low */}
          <rect x="165" y="122" width="30" height="12" fill="rgba(245, 158, 11, 0.05)" rx="2" stroke="rgba(245, 158, 11, 0.2)" strokeWidth="0.5" strokeDasharray="1 1" />
          <text x="180" y="142" fill="rgb(251, 191, 36)" fontSize="5.5" fontWeight="bold" textAnchor="middle">FALSE BREAKOUT SWEEP</text>

          {/* Candlesticks */}
          {candles.map((c, i) => {
            const isGreen = c.close > c.open;
            const bodyY = 180 - c.close;
            const openY = 180 - c.open;
            const highY = 180 - c.high;
            const lowY = 180 - c.low;
            
            const color = isGreen ? "rgb(45, 212, 191)" : "rgb(248, 113, 113)";
            const wickColor = isGreen ? "rgba(45, 212, 191, 0.5)" : "rgba(248, 113, 113, 0.5)";
            const topBody = Math.min(bodyY, openY);
            const bodyHeight = Math.max(2, Math.abs(bodyY - openY));

            return (
              <g key={i}>
                <line x1={c.x} y1={highY} x2={c.x} y2={lowY} stroke={wickColor} strokeWidth="1" />
                <rect x={c.x - 4} y={topBody} width="8" height={bodyHeight} fill={color} rx="0.5" />
              </g>
            );
          })}

          {/* Target / Invalidation labels */}
          <line x1="0" y1="10" x2="500" y2="10" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="0.8" strokeDasharray="3 3" />
          <text x="490" y="8" fill="rgb(52, 211, 153)" fontSize="6" fontWeight="bold" textAnchor="end">TARGET ZONE</text>

          <line x1="0" y1="76" x2="500" y2="76" stroke="rgba(239, 68, 68, 0.3)" strokeWidth="0.8" strokeDasharray="3 3" />
          <text x="490" y="72" fill="rgb(248, 113, 113)" fontSize="6" fontWeight="bold" textAnchor="end">
            {visual.invalidationZone ? visual.invalidationZone.toUpperCase() : "INVALIDATION ZONE"}
          </text>
        </svg>
      </div>

      <div className="space-y-2 bg-slate-950/50 p-4 border border-slate-850 rounded-2xl">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-emerald-400 font-extrabold uppercase">Key Observation: </span>
            {visual.whatLearnerShouldNotice}
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-amber-500 font-extrabold uppercase">Mistake Avoided: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// SUB-RENDERER J: Supertrend Volatility Chart
// ==========================================================
function SupertrendVolatilityChart({ visual }: { visual: VisualModel }) {
  const candles = [
    { x: 30, open: 120, close: 125, high: 118, low: 128 },
    { x: 70, open: 124, close: 118, high: 115, low: 126 },
    { x: 110, open: 118, close: 105, high: 102, low: 120 },
    { x: 150, open: 106, close: 95, high: 92, low: 112 },
    { x: 190, open: 96, close: 108, high: 94, low: 110 },
    { x: 230, open: 108, close: 102, high: 98, low: 114 },
    { x: 270, open: 102, close: 85, high: 82, low: 105 },
    { x: 310, open: 85, close: 72, high: 70, low: 90 },
    { x: 350, open: 74, close: 60, high: 58, low: 78 },
  ];

  // Draw Supertrend line: Bullish (green) below, Bearish (red) above
  const supertrendPoints = [
    { x: 30, y: 135, type: "red" },
    { x: 70, y: 132, type: "red" },
    { x: 110, y: 128, type: "red" },
    { x: 150, y: 122, type: "red" },
    { x: 190, y: 80, type: "green" }, // FLIP occurs here
    { x: 230, y: 78, type: "green" },
    { x: 270, y: 72, type: "green" },
    { x: 310, y: 65, type: "green" },
    { x: 350, y: 55, type: "green" },
  ];

  const redPath = "M " + supertrendPoints.filter(p => p.type === "red").map(p => `${p.x} ${p.y}`).join(" L ");
  const greenPath = "M " + supertrendPoints.filter(p => p.type === "green").map(p => `${p.x} ${p.y}`).join(" L ");

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">{visual.chartTitle}</h4>
          <p className="text-[10px] text-slate-400 font-semibold">{visual.chartPurpose}</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[9px] font-extrabold uppercase tracking-widest border border-emerald-500/20">
          <Activity className="w-3 h-3" />
          <span>Supertrend Volatility</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-950 border border-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 180" className="w-full h-auto font-sans">
          {/* Volatility Bands (Shaded ATR Area) */}
          <path d="M 30 145 L 150 132 L 150 112 L 30 125 Z" fill="rgba(244, 63, 94, 0.04)" />
          <path d="M 190 90 L 350 65 L 350 45 L 190 70 Z" fill="rgba(45, 212, 191, 0.04)" />
          <text x="300" y="35" fill="rgba(45, 212, 191, 0.5)" fontSize="6" fontWeight="bold">VOLATILITY BAND (ATR ZONE)</text>

          {/* Sideways chop warning zone */}
          <rect x="115" y="70" width="70" height="65" fill="rgba(251, 191, 36, 0.05)" rx="3" stroke="rgba(251, 191, 36, 0.2)" strokeWidth="0.5" strokeDasharray="2 1" />
          <text x="150" y="65" fill="rgb(251, 191, 36)" fontSize="5.5" fontWeight="bold" textAnchor="middle">SIDEWAYS CHOP / WARNING ZONE</text>

          {/* Candlesticks */}
          {candles.map((c, i) => {
            const isGreen = c.close < c.open;
            const color = isGreen ? "rgb(45, 212, 191)" : "rgb(248, 113, 113)";
            const bodyY = Math.min(c.open, c.close);
            const bodyHeight = Math.max(2, Math.abs(c.open - c.close));
            return (
              <g key={i} opacity="0.6">
                <line x1={c.x} y1={c.high} x2={c.x} y2={c.low} stroke={color} strokeWidth="1" />
                <rect x={c.x - 3} y={bodyY} width="6" height={bodyHeight} fill={color} rx="0.5" />
              </g>
            );
          })}

          {/* Supertrend Red (Bearish Stop Line) */}
          <path d={redPath} fill="none" stroke="rgb(239, 68, 68)" strokeWidth="2" />
          {/* Supertrend Green (Bullish Stop Line) */}
          <path d={greenPath} fill="none" stroke="rgb(16, 185, 129)" strokeWidth="2" />

          {/* Flip Dot */}
          <circle cx="190" cy="80" r="4.5" fill="rgb(16, 185, 129)" />
          <circle cx="190" cy="80" r="7" fill="none" stroke="rgb(16, 185, 129)" strokeWidth="1" />
          <text x="190" y="94" fill="rgb(16, 185, 129)" fontSize="6" fontWeight="black" textAnchor="middle">TREND FLIP</text>

          {/* Invalidation Zone */}
          {visual.invalidationZone && (
            <>
              <line x1="0" y1="150" x2="500" y2="150" stroke="rgba(239, 68, 68, 0.4)" strokeWidth="0.8" strokeDasharray="3 3" />
              <text x="490" y="146" fill="rgb(248, 113, 113)" fontSize="6" fontWeight="bold" textAnchor="end">{visual.invalidationZone.toUpperCase()}</text>
            </>
          )}
        </svg>
      </div>

      <div className="space-y-2 bg-slate-950/50 p-4 border border-slate-850 rounded-2xl">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-emerald-400 font-extrabold uppercase">Key Observation: </span>
            {visual.whatLearnerShouldNotice}
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-amber-500 font-extrabold uppercase">Mistake Avoided: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// SUB-RENDERER K: Parabolic SAR Chart
// ==========================================================
function ParabolicSARChart({ visual }: { visual: VisualModel }) {
  const candles = [
    { x: 30, open: 120, close: 125, high: 118, low: 128 },
    { x: 70, open: 124, close: 118, high: 115, low: 126 },
    { x: 110, open: 118, close: 105, high: 102, low: 120 },
    { x: 150, open: 106, close: 95, high: 92, low: 112 },
    { x: 190, open: 96, close: 108, high: 94, low: 110 },
    { x: 230, open: 108, close: 102, high: 98, low: 114 },
    { x: 270, open: 102, close: 85, high: 82, low: 105 },
    { x: 310, open: 85, close: 72, high: 70, low: 90 },
  ];

  // Dots above when bearish, below when bullish
  const sarDots = [
    { x: 30, y: 110, type: "bear" },
    { x: 70, y: 108, type: "bear" },
    { x: 110, y: 98, type: "bear" },
    { x: 150, y: 88, type: "bear" },
    { x: 190, y: 120, type: "bull" }, // FLIP
    { x: 230, y: 116, type: "bull" },
    { x: 270, y: 110, type: "bull" },
    { x: 310, y: 98, type: "bull" },
  ];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">{visual.chartTitle}</h4>
          <p className="text-[10px] text-slate-400 font-semibold">{visual.chartPurpose}</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-[9px] font-extrabold uppercase tracking-widest border border-indigo-500/20">
          <Activity className="w-3 h-3" />
          <span>Parabolic SAR</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-950 border border-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 180" className="w-full h-auto font-sans">
          {/* Reversal Boundary */}
          <line x1="150" y1="0" x2="150" y2="180" stroke="rgba(251, 191, 36, 0.25)" strokeWidth="0.8" strokeDasharray="3 3" />
          <text x="145" y="20" fill="rgb(251, 191, 36)" fontSize="6" fontWeight="bold" textAnchor="end">REVERSAL BOUNDARY</text>

          {/* Trend Acceleration explanation */}
          <text x="350" y="40" fill="rgba(255, 255, 255, 0.4)" fontSize="6" fontWeight="bold">SAR DOTS ACCELERATING UNDER PRICE</text>

          {/* Candlesticks */}
          {candles.map((c, i) => {
            const isGreen = c.close < c.open;
            const color = isGreen ? "rgb(45, 212, 191)" : "rgb(248, 113, 113)";
            const bodyY = Math.min(c.open, c.close);
            const bodyHeight = Math.max(2, Math.abs(c.open - c.close));
            return (
              <g key={i} opacity="0.6">
                <line x1={c.x} y1={c.high} x2={c.x} y2={c.low} stroke={color} strokeWidth="1" />
                <rect x={c.x - 3} y={bodyY} width="6" height={bodyHeight} fill={color} rx="0.5" />
              </g>
            );
          })}

          {/* SAR Dots */}
          {sarDots.map((d, i) => {
            const isBear = d.type === "bear";
            const color = isBear ? "rgb(239, 68, 68)" : "rgb(16, 185, 129)";
            return (
              <circle key={i} cx={d.x} cy={d.y} r="2.2" fill={color} />
            );
          })}

          {/* Reversal Marker */}
          <path d="M 190 120 L 175 130 L 175 110 Z" fill="rgb(251, 191, 36)" opacity="0.8" />
          <text x="200" y="132" fill="rgb(251, 191, 36)" fontSize="6.5" fontWeight="black">DOT FLIP (BULLISH REVERSAL)</text>
        </svg>
      </div>

      <div className="space-y-2 bg-slate-950/50 p-4 border border-slate-850 rounded-2xl">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-emerald-400 font-extrabold uppercase">Key Observation: </span>
            {visual.whatLearnerShouldNotice}
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-amber-500 font-extrabold uppercase">Mistake Avoided: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// SUB-RENDERER L: Ichimoku Cloud Chart
// ==========================================================
function IchimokuCloudChart({ visual }: { visual: VisualModel }) {
  const candles = [
    { x: 30, open: 120, close: 125, high: 118, low: 128 },
    { x: 70, open: 124, close: 118, high: 115, low: 126 },
    { x: 110, open: 118, close: 105, high: 102, low: 120 },
    { x: 150, open: 106, close: 95, high: 92, low: 112 },
    { x: 190, open: 96, close: 108, high: 94, low: 110 },
    { x: 230, open: 108, close: 102, high: 98, low: 114 },
    { x: 270, open: 102, close: 85, high: 82, low: 105 },
    { x: 310, open: 85, close: 72, high: 70, low: 90 },
  ];

  // Tenkan-sen (Conversion line) and Kijun-sen (Base line)
  const tenkan = [
    { x: 30, y: 122 }, { x: 70, y: 120 }, { x: 110, y: 112 }, { x: 150, y: 100 },
    { x: 190, y: 92 }, { x: 230, y: 94 }, { x: 270, y: 88 }, { x: 310, y: 78 }
  ];

  const kijun = [
    { x: 30, y: 108 }, { x: 70, y: 106 }, { x: 110, y: 102 }, { x: 150, y: 97 },
    { x: 190, y: 92 }, { x: 230, y: 88 }, { x: 270, y: 83 }, { x: 310, y: 77 }
  ];

  const tenkanPath = "M " + tenkan.map(p => `${p.x} ${p.y}`).join(" L ");
  const kijunPath = "M " + kijun.map(p => `${p.x} ${p.y}`).join(" L ");

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">{visual.chartTitle}</h4>
          <p className="text-[10px] text-slate-400 font-semibold">{visual.chartPurpose}</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400 text-[9px] font-extrabold uppercase tracking-widest border border-purple-500/20">
          <Activity className="w-3 h-3" />
          <span>Ichimoku Cloud</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-950 border border-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 180" className="w-full h-auto font-sans">
          {/* Shaded Cloud Support/Resistance (Senkou Span Cloud) */}
          <path d="M 30 95 Q 150 90 270 75 Q 390 60 470 50 L 470 75 Q 390 85 270 100 Q 150 115 30 120 Z" fill="rgba(16, 185, 129, 0.05)" stroke="rgba(16, 185, 129, 0.15)" strokeWidth="0.8" />
          <text x="350" y="85" fill="rgba(16, 185, 129, 0.6)" fontSize="6" fontWeight="bold">SENKOU SPAN CLOUD (SUPPORT)</text>

          {/* False Trend Zone Inside Cloud */}
          <rect x="150" y="80" width="70" height="35" fill="rgba(245, 158, 11, 0.05)" rx="3" stroke="rgba(245, 158, 11, 0.15)" strokeWidth="0.5" strokeDasharray="2 1" />
          <text x="185" y="75" fill="rgb(251, 191, 36)" fontSize="5.5" fontWeight="bold" textAnchor="middle">FALSE TREND ZONE (INSIDE CLOUD)</text>

          {/* Candlesticks */}
          {candles.map((c, i) => {
            const isGreen = c.close < c.open;
            const color = isGreen ? "rgb(45, 212, 191)" : "rgb(248, 113, 113)";
            const bodyY = Math.min(c.open, c.close);
            const bodyHeight = Math.max(2, Math.abs(c.open - c.close));
            return (
              <g key={i} opacity="0.6">
                <line x1={c.x} y1={c.high} x2={c.x} y2={c.low} stroke={color} strokeWidth="1" />
                <rect x={c.x - 3} y={bodyY} width="6" height={bodyHeight} fill={color} rx="0.5" />
              </g>
            );
          })}

          {/* Tenkan-sen (Cyan) */}
          <path d={tenkanPath} fill="none" stroke="rgb(45, 212, 191)" strokeWidth="1.5" />
          {/* Kijun-sen (Indigo/Blue) */}
          <path d={kijunPath} fill="none" stroke="rgb(99, 102, 241)" strokeWidth="1.5" />

          <text x="30" y="145" fill="rgb(45, 212, 191)" fontSize="5.5" fontWeight="bold">TENKAN-SEN (CONVERSION LINE)</text>
          <text x="30" y="155" fill="rgb(99, 102, 241)" fontSize="5.5" fontWeight="bold">KIJUN-SEN (BASE LINE)</text>
        </svg>
      </div>

      <div className="space-y-2 bg-slate-950/50 p-4 border border-slate-850 rounded-2xl">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-emerald-400 font-extrabold uppercase">Key Observation: </span>
            {visual.whatLearnerShouldNotice}
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-amber-500 font-extrabold uppercase">Mistake Avoided: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// SUB-RENDERER M: Heikin-Ashi Trend Chart
// ==========================================================
function HeikinAshiTrendChart({ visual }: { visual: VisualModel }) {
  // Smoothed Heikin-Ashi candles: strong trend candles have flat bottoms (bullish) or flat tops (bearish)
  const candles = [
    { x: 30, open: 120, close: 110, high: 108, low: 120, isBull: false }, // Flat top
    { x: 70, open: 110, close: 100, high: 98, low: 110, isBull: false },  // Flat top
    { x: 110, open: 100, close: 90, high: 88, low: 100, isBull: false },  // Flat top
    { x: 150, open: 90, close: 95, high: 88, low: 97, isBull: true },
    { x: 190, open: 93, close: 105, high: 107, low: 93, isBull: true },   // Flat bottom
    { x: 230, open: 105, close: 118, high: 120, low: 105, isBull: true }, // Flat bottom
    { x: 270, open: 118, close: 130, high: 132, low: 118, isBull: true }, // Flat bottom
    { x: 310, open: 130, close: 142, high: 145, low: 130, isBull: true }, // Flat bottom
  ];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">{visual.chartTitle}</h4>
          <p className="text-[10px] text-slate-400 font-semibold">{visual.chartPurpose}</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-400 text-[9px] font-extrabold uppercase tracking-widest border border-teal-500/20">
          <Activity className="w-3 h-3" />
          <span>Heikin-Ashi Smoothing</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-950 border border-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 180" className="w-full h-auto font-sans">
          {/* Wick reduction explanation */}
          <text x="350" y="30" fill="rgba(45, 212, 191, 0.6)" fontSize="6" fontWeight="bold">FLAT BOTTOMS = STRONG BULLISH TREND</text>
          <text x="350" y="42" fill="rgba(248, 113, 113, 0.6)" fontSize="6" fontWeight="bold">FLAT TOPS = STRONG BEARISH TREND</text>

          {/* Trend continuation signals */}
          <path d="M 230 135 L 245 135 L 237.5 145 Z" fill="rgb(45, 212, 191)" />
          <text x="250" y="142" fill="rgb(45, 212, 191)" fontSize="5.5" fontWeight="bold">TREND CONTINUATION MARKER</text>

          {/* Candlesticks */}
          {candles.map((c, i) => {
            const color = c.isBull ? "rgb(45, 212, 191)" : "rgb(248, 113, 113)";
            const bodyY = Math.min(c.open, c.close);
            const bodyHeight = Math.max(2, Math.abs(c.open - c.close));
            return (
              <g key={i}>
                <line x1={c.x} y1={c.high} x2={c.x} y2={c.low} stroke={color} strokeWidth="1.2" />
                <rect x={c.x - 4} y={bodyY} width="8" height={bodyHeight} fill={color} rx="0.5" />
              </g>
            );
          })}
        </svg>
      </div>

      <div className="space-y-2 bg-slate-950/50 p-4 border border-slate-850 rounded-2xl">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-emerald-400 font-extrabold uppercase">Key Observation: </span>
            {visual.whatLearnerShouldNotice}
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-amber-500 font-extrabold uppercase">Mistake Avoided: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// SUB-RENDERER N: Donchian Channel Breakout Chart
// ==========================================================
function DonchianChannelBreakoutChart({ visual }: { visual: VisualModel }) {
  const candles = [
    { x: 30, open: 110, close: 114, high: 108, low: 116 },
    { x: 60, open: 114, close: 108, high: 106, low: 118 },
    { x: 90, open: 108, close: 112, high: 105, low: 115 },
    { x: 120, open: 112, close: 118, high: 109, low: 120 },
    { x: 150, open: 118, close: 110, high: 107, low: 121 },
    { x: 180, open: 110, close: 128, high: 108, low: 132 },
    { x: 210, open: 128, close: 135, high: 124, low: 140 },
    { x: 240, open: 135, close: 132, high: 130, low: 138 },
    { x: 270, open: 132, close: 148, high: 130, low: 150 }, // BREAKOUT
  ];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider">{visual.chartTitle}</h4>
          <p className="text-[10px] text-slate-400 font-semibold">{visual.chartPurpose}</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-[9px] font-extrabold uppercase tracking-widest border border-cyan-500/20">
          <Activity className="w-3 h-3" />
          <span>Donchian Channel</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-950 border border-slate-950 rounded-2xl p-2 select-none">
        <svg viewBox="0 0 500 180" className="w-full h-auto font-sans">
          {/* Upper Band */}
          <line x1="0" y1="52" x2="250" y2="52" stroke="rgb(45, 212, 191)" strokeWidth="1.2" strokeDasharray="3 3" />
          <line x1="250" y1="52" x2="500" y2="30" stroke="rgb(45, 212, 191)" strokeWidth="1.2" strokeDasharray="3 3" />
          <text x="10" y="45" fill="rgb(45, 212, 191)" fontSize="5.5" fontWeight="bold">DONCHIAN UPPER CHANNEL BAND (20-PERIOD HIGH)</text>

          {/* Lower Band */}
          <line x1="0" y1="130" x2="500" y2="130" stroke="rgb(248, 113, 113)" strokeWidth="1.2" strokeDasharray="3 3" />
          <text x="10" y="142" fill="rgb(248, 113, 113)" fontSize="5.5" fontWeight="bold">DONCHIAN LOWER CHANNEL BAND (20-PERIOD LOW)</text>

          {/* Breakout Event */}
          <circle cx="270" cy="48" r="5" fill="none" stroke="rgb(45, 212, 191)" strokeWidth="1.5" />
          <text x="270" y="38" fill="rgb(45, 212, 191)" fontSize="6" fontWeight="black" textAnchor="middle">CHANNEL BREAKOUT TRIGGER</text>

          {/* False Channel Breakout Trap Area */}
          <rect x="135" y="35" width="45" height="25" fill="rgba(245, 158, 11, 0.05)" rx="2" stroke="rgba(245, 158, 11, 0.2)" strokeWidth="0.5" strokeDasharray="1 1" />
          <text x="157.5" y="30" fill="rgb(251, 191, 36)" fontSize="5" fontWeight="bold" textAnchor="middle">FALSE BREAKOUT TRAP</text>

          {/* Candlesticks */}
          {candles.map((c, i) => {
            const isGreen = c.close > c.open;
            const bodyY = 180 - c.close;
            const openY = 180 - c.open;
            const highY = 180 - c.high;
            const lowY = 180 - c.low;
            
            const color = isGreen ? "rgb(45, 212, 191)" : "rgb(248, 113, 113)";
            const wickColor = isGreen ? "rgba(45, 212, 191, 0.5)" : "rgba(248, 113, 113, 0.5)";
            const topBody = Math.min(bodyY, openY);
            const bodyHeight = Math.max(2, Math.abs(bodyY - openY));

            return (
              <g key={i}>
                <line x1={c.x} y1={highY} x2={c.x} y2={lowY} stroke={wickColor} strokeWidth="1" />
                <rect x={c.x - 4} y={topBody} width="8" height={bodyHeight} fill={color} rx="0.5" />
              </g>
            );
          })}
        </svg>
      </div>

      <div className="space-y-2 bg-slate-950/50 p-4 border border-slate-850 rounded-2xl">
        <div className="flex gap-2">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-emerald-400 font-extrabold uppercase">Key Observation: </span>
            {visual.whatLearnerShouldNotice}
          </p>
        </div>
        <div className="flex gap-2 border-t border-slate-800/60 pt-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span className="text-amber-500 font-extrabold uppercase">Mistake Avoided: </span>
            {visual.mistakePrevented}
          </p>
        </div>
      </div>
    </div>
  );
}
