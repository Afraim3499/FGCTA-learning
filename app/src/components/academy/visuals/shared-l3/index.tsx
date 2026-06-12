"use client";

import React, { useState } from "react";
import { 
  ArrowRight, 
  Layers, 
  Activity, 
  Eye, 
  Compass, 
  Layout, 
  AlertTriangle, 
  CheckCircle2, 
  Search, 
  Info, 
  RefreshCw, 
  ChevronRight, 
  ListChecks, 
  Ban, 
  TrendingUp, 
  Scale, 
  ShieldAlert, 
  Database,
  ArrowRightCircle,
  HelpCircle,
  Sliders,
  CheckCircle,
  XCircle,
  FileSpreadsheet,
  Clock,
  Calendar,
  AlertOctagon,
  Percent,
  TrendingDown,
  Target,
  Zap,
  MousePointer,
  Maximize2
} from "lucide-react";
import { cn } from "@/lib/utils";

import { useMentorNote } from "../../lesson-workspace/MentorNoteContext";

// L3Frame uses a Slate-Blue "Footprint Console" styling matching the institutional delta ledger theme
const L3Frame = ({ 
  children, 
  title, 
  id, 
  mentorText: defaultMentorText = "Wait for order book footprint delta to confirm institutional support. Do not attempt to frontrun central matches.",
  mentorAnalogy: defaultMentorAnalogy = "A police investigator does not arrest suspects without tracking their footprints at the crime scene. Order blocks are those exact physical traces." 
}: { 
  children: React.ReactNode; 
  title: string; 
  id: string; 
  mentorText?: string; 
  mentorAnalogy?: string; 
}) => {
  const context = useMentorNote();
  const activeMentorText = context.mentorText || defaultMentorText;
  const activeMentorAnalogy = context.mentorAnalogy !== undefined ? context.mentorAnalogy : defaultMentorAnalogy;

  return (
    <div className="w-full bg-[#FCFDFD] border border-slate-200 rounded-[2rem] p-6 md:p-8 flex flex-col relative overflow-hidden shadow-sm text-left min-h-[500px]">
      {/* Grid Background Effect */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#E8ECEF_1px,transparent_1px)] bg-[length:24px_24px]" />
      
      {/* Top Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 relative z-10 border-b border-slate-200 pb-4 shrink-0">
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 mb-1">
            <Activity size={10} className="text-sky-600 animate-pulse" />
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Order Flow Delta Console</span>
          </div>
          <h4 className="text-sm font-black text-[#0C2340] uppercase tracking-tighter italic leading-tight">{title}</h4>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end">
            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Delta Ref</span>
            <span className="text-[10px] font-mono text-[#0C2340] font-bold">{id}</span>
          </div>
        </div>
      </div>
      
      {/* Dynamic Content Center Stage */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 w-full min-h-0">
        {children}
      </div>

      {/* Mentor Blueprint Insight at the Bottom */}
      <div className="w-full mt-6 pt-5 border-t border-slate-200 flex flex-col gap-2 shrink-0 text-left relative z-10">
        <div className="flex items-center gap-2">
          <div className="px-2 py-1 bg-[#0C2340] text-white text-[8px] font-black uppercase tracking-widest rounded-sm">Mentor Blueprint</div>
          <div className="h-px flex-1 bg-slate-200" />
        </div>
        <div className="flex gap-4">
           <div className="flex-1">
              <p className="text-xs font-bold text-[#0C2340] leading-relaxed">{activeMentorText}</p>
              {activeMentorAnalogy && (
                <p className="mt-1.5 text-[11px] text-slate-500 italic leading-snug">
                  <span className="font-black uppercase text-[9px] mr-2 text-sky-600 not-italic">Concept Analogy:</span>
                  {activeMentorAnalogy}
                </p>
              )}
           </div>
        </div>
      </div>
    </div>
  );
};

// --- MODULE 3.1 VISUALS ---
export const ObIntroVisual = () => {
  const [selectedOB, setSelectedOB] = useState(false);

  return (
    <L3Frame 
      title="The True Definition of an Order Block" 
      id="FLOW-3.1-OB-INTRO"
      mentorText="Order Blocks are not patterns to buy or sell; they are visual representations of order flow and transaction speed across a fixed time block. Focus on the relationship between open/close (displacement) and wicks (rejections)."
      mentorAnalogy="The speedometer on a car. It doesn't tell you where you are going, but it tells you the force and velocity of the current movement."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-base font-black text-[#0C2340] uppercase tracking-tight">Spot the Valid OB</h3>
          <p className="text-xs text-slate-500 font-semibold leading-relaxed">
            An Order Block is valid only if accompanied by structure break (BOS) and displacement. Click on the correct candidate to verify.
          </p>
          <button 
            onClick={() => setSelectedOB(!selectedOB)}
            className={cn("px-5 py-2.5 text-[10px] font-black uppercase tracking-wider rounded-xl transition-all shadow-sm", selectedOB ? "bg-emerald-600 text-white" : "bg-[#0C2340] text-white")}
          >
            {selectedOB ? "Correct OB Selected!" : "Select Candle B"}
          </button>
        </div>
        <div className="md:col-span-7 flex items-center justify-center bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          <div className="flex gap-4 items-end relative h-36 border-b pb-4">
            <div className="absolute left-0 right-0 top-1/3 border-t border-dashed border-rose-400" />
            <span className="absolute left-2 top-[36%] text-[8px] font-bold text-rose-500 uppercase">Structure Break</span>
            <div className="flex flex-col items-center">
              <div className="w-6 h-10 bg-slate-300 rounded" />
              <span className="text-[9px] font-bold text-slate-400 mt-2">Candle A</span>
            </div>
            <div 
              onClick={() => setSelectedOB(true)}
              className={cn("flex flex-col items-center cursor-pointer p-1 rounded-lg border-2 transition-all", selectedOB ? "border-emerald-500 bg-emerald-50" : "border-transparent hover:border-slate-300")}
            >
              <div className="w-6 h-8 bg-rose-500 rounded" />
              <span className="text-[9px] font-bold text-[#0C2340] mt-2">Candle B (OB)</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-28 bg-emerald-500 rounded relative mt-[-80px]" />
              <span className="text-[9px] font-bold text-slate-400 mt-2">Candle C</span>
            </div>
          </div>
        </div>
      </div>
    </L3Frame>
  );
};

// --- MODULE 3.2 VISUALS ---
export const ObBullishBearishVisual = () => {
  const [meanThreshold, setMeanThreshold] = useState(50);

  return (
    <L3Frame 
      title="Mean Threshold Calculator" 
      id="FLOW-3.2-OB-CALC"
      mentorText="Every candle on a daily chart contains a full narrative of swings, sweeps, and structural breaks on lower timeframes. You must learn to read the sub-structure inside the higher-timeframe framework."
      mentorAnalogy="Russian nesting dolls. Each smaller doll is identical in structure but exists nested inside the larger shell."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-base font-black text-[#0C2340] uppercase tracking-tight">Mean Threshold (50%)</h3>
          <p className="text-xs text-slate-500 font-semibold leading-relaxed">
            The Mean Threshold represents the midpoint of the order block body. Institutions defend this level. Adjust the calculation slider.
          </p>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Mitigation Retest: {meanThreshold}%</label>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={meanThreshold} 
              onChange={e => setMeanThreshold(Number(e.target.value))} 
              className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
        <div className="md:col-span-7 flex items-center justify-center bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          <div className="relative w-24 h-40 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center">
            {/* Candle Body */}
            <div className="w-10 h-28 bg-emerald-500/25 border border-emerald-500 rounded relative">
              {/* Mean Threshold Line */}
              <div 
                className="absolute left-0 right-0 h-0.5 bg-emerald-600 border-dashed transition-all"
                style={{ bottom: `${meanThreshold}%` }}
              />
              <span className="absolute right-[-80px] text-[8px] font-black text-emerald-600 uppercase transition-all" style={{ bottom: `${meanThreshold - 3}%` }}>
                Midpoint: {meanThreshold}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </L3Frame>
  );
};

// --- MODULE 3.3 VISUALS ---
export const MitigationBlocksVisual = () => {
  const [mitigated, setMitigated] = useState(false);

  return (
    <L3Frame 
      title="Mitigation Block Mechanics" 
      id="FLOW-3.3-MITIGATION"
      mentorText="Execution is only as clean as the feed it runs on. DMA feeds connect you directly to central bank matches, while retail market-maker desks create synthetic quotes to capture slippage and spread arbitrage."
      mentorAnalogy="Buying concert tickets directly from the box office versus buying from a street scalper. The scalper adds custom fees and delays entry."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-base font-black text-[#0C2340] uppercase tracking-tight">Trapped Order Exit</h3>
          <p className="text-xs text-slate-500 font-semibold leading-relaxed">
            Mitigation blocks form when price fails to sweep swing extremes, breaks structure, and returns to release trapped orders. Click to mitigate.
          </p>
          <button 
            onClick={() => setMitigated(!mitigated)}
            className="px-5 py-2.5 bg-[#0C2340] text-white text-[10px] font-black uppercase tracking-wider rounded-xl transition-all shadow-sm"
          >
            {mitigated ? "Mitigation Confirmed!" : "Trigger Price Return"}
          </button>
        </div>
        <div className="md:col-span-7 flex flex-col items-center justify-center bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          <div className="relative w-full h-32">
            <svg className="w-full h-full" viewBox="0 0 300 120">
              {/* Peak swings */}
              <path d="M 30 100 L 90 20 L 150 70 L 200 40 L 260 100" stroke="#CBD5E1" strokeWidth="2" fill="none" />
              {/* Failure swing highlight */}
              <circle cx="150" cy="70" r="5" className="fill-rose-500" />
              <text x="160" y="75" className="text-[8px] font-black fill-rose-500">FAILED SWING</text>
              
              {/* Mitigation Line */}
              <line x1="150" y1="70" x2="270" y2="70" stroke="#0070F3" strokeWidth="1.5" strokeDasharray="3" />
              
              {/* Retest Marker */}
              {mitigated && (
                <circle cx="215" cy="70" r="6" className="fill-emerald-500 animate-ping" />
              )}
            </svg>
          </div>
        </div>
      </div>
    </L3Frame>
  );
};

// --- MODULE 3.4 VISUALS ---
export const BreakerBlocksVisual = () => {
  const [breakerActive, setBreakerActive] = useState(false);

  return (
    <L3Frame 
      title="Breaker Block Transition" 
      id="FLOW-3.4-BREAKER"
      mentorText="Price spends 80% of its time range-bound. Buying in premium or selling in discount is a mathematical error that guarantees a negative expectancy over time."
      mentorAnalogy="Shopping at a supermarket. You wait for seasonal discounts to buy inventory; you never pay a premium price for goods you plan to resell."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-base font-black text-[#0C2340] uppercase tracking-tight">Swept Liquidity Transition</h3>
          <p className="text-xs text-slate-500 font-semibold leading-relaxed">
            A breaker block is an order block that is run through after price sweeps a key high/low. It transitions from support to resistance.
          </p>
          <button 
            onClick={() => setBreakerActive(!breakerActive)}
            className="px-5 py-2.5 bg-[#0C2340] text-white text-[10px] font-black uppercase tracking-wider rounded-xl transition-all shadow-sm"
          >
            {breakerActive ? "Reset Path" : "Simulate Sweep & Break"}
          </button>
        </div>
        <div className="md:col-span-7 flex flex-col items-center justify-center bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          <div className="relative w-full h-32">
            <svg className="w-full h-full" viewBox="0 0 300 120">
              {/* Swings path */}
              <path d="M 30 60 L 80 15 L 140 100 L 190 5 L 260 80" stroke="#CBD5E1" strokeWidth="2" fill="none" />
              
              {/* Liquidity High */}
              <line x1="80" y1="15" x2="190" y2="15" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3" />
              <text x="90" y="10" className="text-[7px] font-black fill-slate-400">LIQUIDITY SWEEP LEVEL</text>
              
              {/* Breaker Zone */}
              <rect x="110" y="45" width="60" height="20" className={cn("fill-rose-500/10 stroke-rose-400 transition-colors", breakerActive && "fill-emerald-500/10 stroke-emerald-500")} strokeWidth="1.5" />
              <text x="115" y="58" className="text-[8px] font-black fill-[#0C2340]">BREAKER ZONE</text>
            </svg>
          </div>
        </div>
      </div>
    </L3Frame>
  );
};

// --- MODULE 3.5 VISUALS ---
export const PropulsionBlocksVisual = () => {
  const [momentum, setMomentum] = useState(25);

  return (
    <L3Frame 
      title="Propulsion Retest Dial" 
      id="FLOW-3.5-PROPULSION"
      mentorText="Protected swings represent the price levels where major institutional participants defended their positions. A break of these swings is the first sign of an institutional shift."
      mentorAnalogy="A castle wall. If the outer gate is breached, the defenders must retreat to the inner keep, signalling a shift in control."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-base font-black text-[#0C2340] uppercase tracking-tight">Momentum Acceleration</h3>
          <p className="text-xs text-slate-500 font-semibold leading-relaxed">
            Propulsion blocks are order blocks that have already been mitigated once and expand rapidly. Adjust the dial to check expansion speed.
          </p>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Expansion Speed: {momentum} pips/sec</label>
            <input 
              type="range" 
              min="10" 
              max="90" 
              value={momentum} 
              onChange={e => setMomentum(Number(e.target.value))} 
              className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
        <div className="md:col-span-7 flex flex-col items-center justify-center bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          <div className="relative w-full h-32 flex items-end justify-center">
            {/* Base Block */}
            <div className="w-12 h-16 bg-slate-100 border border-slate-300 rounded mr-2 flex items-center justify-center text-[8px] font-black text-slate-400">Mitigated OB</div>
            {/* Propulsion Block */}
            <div className="w-12 h-16 bg-sky-500/10 border border-sky-400 rounded relative flex items-center justify-center text-[8px] font-black text-sky-600">
              Propulsion
              {/* Dynamic Expansion Arrow */}
              <div 
                className="absolute bottom-full w-2 bg-sky-500 transition-all"
                style={{ height: `${momentum}px` }}
              />
            </div>
          </div>
        </div>
      </div>
    </L3Frame>
  );
};

// --- MODULE 3.6 VISUALS ---
export const FvgThreeCandleVisual = () => {
  const [fvgWidth, setFvgWidth] = useState(30);

  return (
    <L3Frame 
      title="FVG Three-Candle Gap" 
      id="FLOW-3.6-FVG-GAP"
      mentorText="Do not mistake a simple wick sweep for a structure shift. A true MSS requires a clear candle body close with displacement beyond the protected swing level."
      mentorAnalogy="A dam breaking. If water merely splashes over the top, the barrier holds. If the concrete itself splits, the flow changes permanently."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-base font-black text-[#0C2340] uppercase tracking-tight">Anatomy of an FVG</h3>
          <p className="text-xs text-slate-500 font-semibold leading-relaxed">
            A Fair Value Gap is the empty space between Candle 1's wick and Candle 3's wick. Adjust FVG gap size below.
          </p>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Gap Width: {fvgWidth}px</label>
            <input 
              type="range" 
              min="10" 
              max="60" 
              value={fvgWidth} 
              onChange={e => setFvgWidth(Number(e.target.value))} 
              className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
        <div className="md:col-span-7 flex items-center justify-center bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          <div className="flex gap-4 items-end relative h-36">
            {/* Candle 1 */}
            <div className="flex flex-col items-center relative">
              <div className="w-5 h-20 bg-emerald-500 rounded relative" />
              <div className="absolute left-1/2 bottom-[-16px] w-0.5 h-4 bg-slate-400" />
              <span className="text-[8px] font-bold text-slate-400 mt-6">C1</span>
            </div>
            {/* FVG Highlight Box */}
            <div 
              className="bg-sky-500/20 border border-sky-400 rounded-sm flex items-center justify-center transition-all"
              style={{ width: `${fvgWidth}px`, height: "60px", marginBottom: "20px" }}
            >
              <span className="text-[8px] font-black text-sky-700 uppercase">FVG</span>
            </div>
            {/* Candle 3 */}
            <div className="flex flex-col items-center relative">
              <div className="w-5 h-16 bg-emerald-500 rounded relative" style={{ marginBottom: "60px" }} />
              <div className="absolute left-1/2 top-[-16px] w-0.5 h-4 bg-slate-400" />
              <span className="text-[8px] font-bold text-slate-400 mt-6">C3</span>
            </div>
          </div>
        </div>
      </div>
    </L3Frame>
  );
};

// --- MODULE 3.7 VISUALS ---
export const InversionFvgVisual = () => {
  const [inverted, setInverted] = useState(false);

  return (
    <L3Frame 
      title="Inversion FVG Transition" 
      id="FLOW-3.7-INVERSION"
      mentorText="Trendlines are retail traps designed to engineer liquidity. Institutions deliver price by sweeping stops above/below highs and lows to match their block orders."
      mentorAnalogy="A lion herding prey toward a watering hole. The prey thinks it is moving along a natural path, but the hunter is funneling them into a trap."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-base font-black text-[#0C2340] uppercase tracking-tight">Gap S/R Flip</h3>
          <p className="text-xs text-slate-500 font-semibold leading-relaxed">
            When a Fair Value Gap is run through, it flips polarity. A bullish FVG transitions into a bearish support-resistance flip zone.
          </p>
          <button 
            onClick={() => setInverted(!inverted)}
            className="px-5 py-2.5 bg-[#0C2340] text-white text-[10px] font-black uppercase tracking-wider rounded-xl transition-all shadow-sm"
          >
            {inverted ? "Reset Polarity" : "Run Price Through"}
          </button>
        </div>
        <div className="md:col-span-7 flex flex-col items-center justify-center bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          <div className="relative w-full h-32">
            <svg className="w-full h-full" viewBox="0 0 300 120">
              {/* Price Line */}
              {inverted ? (
                <path d="M 30 100 L 150 10 L 270 90" stroke="#F43F5E" strokeWidth="2" fill="none" />
              ) : (
                <path d="M 30 100 L 120 70 L 180 80 L 270 100" stroke="#CBD5E1" strokeWidth="2" fill="none" />
              )}
              {/* Inversion Zone */}
              <rect x="100" y="40" width="100" height="24" className={cn("fill-sky-500/10 stroke-sky-400 transition-colors", inverted && "fill-rose-500/10 stroke-rose-400")} strokeWidth="1.5" />
              <text x="110" y="55" className="text-[8px] font-black fill-[#0C2340]">
                {inverted ? "INVERSION ZONE" : "FAIR VALUE GAP"}
              </text>
            </svg>
          </div>
        </div>
      </div>
    </L3Frame>
  );
};

// --- MODULE 3.8 VISUALS ---
export const ConsequentEncroachmentVisual = () => {
  const [midpoint, setMidpoint] = useState(50);

  return (
    <L3Frame 
      title="Consequent Encroachment Slider" 
      id="FLOW-3.8-MIDPOINT"
      mentorText="Beginners get lost in lower timeframe internal swings, trading pullbacks as major breaks. Always anchor your bias to the external dealing range boundaries."
      mentorAnalogy="A river's main channel versus its local eddies. The eddies swirl in circles, but the main current determines the overall direction."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-base font-black text-[#0C2340] uppercase tracking-tight">The 50% Midpoint</h3>
          <p className="text-xs text-slate-500 font-semibold leading-relaxed">
            Consequent Encroachment (CE) represents the 50% midpoint of a Fair Value Gap. Algorithms target this level. Adjust the midpoint calculator.
          </p>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">CE Value: {midpoint}%</label>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={midpoint} 
              onChange={e => setMidpoint(Number(e.target.value))} 
              className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
        <div className="md:col-span-7 flex items-center justify-center bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          <div className="relative w-28 h-40 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center">
            {/* FVG Highlight Box */}
            <div className="w-16 h-28 bg-sky-500/10 border border-sky-400 rounded relative">
              {/* CE Line */}
              <div 
                className="absolute left-0 right-0 h-0.5 bg-sky-600 border-dashed transition-all"
                style={{ bottom: `${midpoint}%` }}
              />
              <span className="absolute right-[-60px] text-[8px] font-black text-sky-600 uppercase transition-all" style={{ bottom: `${midpoint - 3}%` }}>
                CE 50%: {midpoint}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </L3Frame>
  );
};

// --- MODULE 3.9 VISUALS ---
export const VolumeImbalancesVisual = () => {
  const [bodyImbalance, setBodyImbalance] = useState(false);

  return (
    <L3Frame 
      title="Volume Imbalance Mapper" 
      id="FLOW-3.9-IMBALANCE"
      mentorText="Displacement is the physical signature of institutional capital. A long candle body with high volume shows aggressive, one-sided market participation."
      mentorAnalogy="A freight train accelerating through a crossing. It cannot be stopped by minor obstacles in its path."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-base font-black text-[#0C2340] uppercase tracking-tight">Body Gap vs Wick overlap</h3>
          <p className="text-xs text-slate-500 font-semibold leading-relaxed">
            A Volume Imbalance occurs when candle bodies do not overlap, leaving a gap, but their wicks do. Click to isolate the body gap.
          </p>
          <button 
            onClick={() => setBodyImbalance(!bodyImbalance)}
            className="px-5 py-2.5 bg-[#0C2340] text-white text-[10px] font-black uppercase tracking-wider rounded-xl transition-all shadow-sm"
          >
            {bodyImbalance ? "Isolate Off" : "Highlight Volume Imbalance"}
          </button>
        </div>
        <div className="md:col-span-7 flex items-center justify-center bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          <div className="flex gap-6 items-end relative h-36">
            {/* Candle A */}
            <div className="flex flex-col items-center relative">
              <div className="absolute left-1/2 bottom-[-16px] w-0.5 h-32 bg-slate-400" />
              <div className="w-6 h-10 bg-rose-500 border border-rose-600 rounded relative" />
              <span className="text-[8px] font-bold text-slate-400 mt-6">Candle A</span>
            </div>
            {/* Volume Imbalance Highlight */}
            {bodyImbalance && (
              <div className="w-10 h-8 bg-sky-500/25 border border-sky-400 rounded-sm flex items-center justify-center animate-pulse" style={{ marginBottom: "20px" }}>
                <span className="text-[8px] font-black text-sky-700">VI</span>
              </div>
            )}
            {/* Candle B */}
            <div className="flex flex-col items-center relative">
              <div className="absolute left-1/2 bottom-[-16px] w-0.5 h-32 bg-slate-400" />
              <div className="w-6 h-12 bg-rose-500 border border-rose-600 rounded relative" style={{ marginBottom: "40px" }} />
              <span className="text-[8px] font-bold text-slate-400 mt-6">Candle B</span>
            </div>
          </div>
        </div>
      </div>
    </L3Frame>
  );
};

// --- MODULE 3.10 VISUALS ---
export const LiquidityVoidsVisual = () => {
  const [retrace, setRetrace] = useState(false);

  return (
    <L3Frame 
      title="Void Retracement Map" 
      id="FLOW-3.10-VOIDS"
      mentorText="A breakout is only confirmed when a candle closes outside the boundary. If it wicks out and closes inside, it is a manipulation sweep designed to trigger stop-runs."
      mentorAnalogy="A testing probe. A scout climbs over a wall to check the defenses, but returns to base rather than establishing a permanent camp."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-base font-black text-[#0C2340] uppercase tracking-tight">Fill the Vacuum</h3>
          <p className="text-xs text-slate-500 font-semibold leading-relaxed">
            Liquidity voids represent extreme pricing gaps where orders were stripped from the book. Price violently snaps back to fill the void.
          </p>
          <button 
            onClick={() => setRetrace(!retrace)}
            className="px-5 py-2.5 bg-[#0C2340] text-white text-[10px] font-black uppercase tracking-wider rounded-xl transition-all shadow-sm"
          >
            {retrace ? "Reset Void" : "Simulate Retracement Fill"}
          </button>
        </div>
        <div className="md:col-span-7 flex flex-col justify-center bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          <div className="relative w-full h-32 bg-slate-50 border rounded-xl overflow-hidden flex flex-col justify-between p-4">
            <div className="text-[8px] font-black text-rose-500 uppercase tracking-widest">Void Origin (Peak)</div>
            
            {/* Liquidity Void Box */}
            <div className={cn("w-full h-12 bg-rose-500/10 border border-dashed border-rose-300 rounded flex items-center justify-center transition-all", retrace && "bg-emerald-500/10 border-emerald-400")}>
              <span className="text-[9px] font-black text-rose-700 uppercase tracking-widest">
                {retrace ? "LIQUIDITY VOID FILLED" : "OPEN LIQUIDITY VOID"}
              </span>
            </div>
            
            {/* Retracement Path */}
            {retrace && (
              <div className="absolute left-10 right-10 h-0.5 bg-emerald-500 bottom-1/3 border-t animate-pulse" />
            )}
            
            <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Void Base</div>
          </div>
        </div>
      </div>
    </L3Frame>
  );
};

// --- MODULE 3.11 VISUALS ---
export const FootprintDeltaVisual = () => {
  const [deltaTicking, setDeltaTicking] = useState(false);
  const [buyVolume, setBuyVolume] = useState(120);
  const [sellVolume, setSellVolume] = useState(90);

  const toggleTicking = () => {
    setDeltaTicking(!deltaTicking);
    if (!deltaTicking) {
      const interval = setInterval(() => {
        setBuyVolume(prev => prev + Math.floor(Math.random() * 20));
        setSellVolume(prev => prev + Math.floor(Math.random() * 20));
      }, 1000);
      (window as any).deltaInterval = interval;
    } else {
      clearInterval((window as any).deltaInterval);
    }
  };

  const deltaValue = buyVolume - sellVolume;

  return (
    <L3Frame 
      title="Bid/Ask Delta Ledger" 
      id="FLOW-3.11-FOOTPRINT"
      mentorText="Resting order pools are the fuel that feeds market movements. Look for clusters of stop-loss orders just beyond obvious highs (BSL) and lows (SSL)."
      mentorAnalogy="Gas stations along a highway. The car (price) must stop at these stations to refuel (acquire orders) before continuing its journey."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-base font-black text-[#0C2340] uppercase tracking-tight">Real-time Order Book delta</h3>
          <p className="text-xs text-slate-500 font-semibold leading-relaxed">
            The Delta ticker shows the net difference between aggressive market buying and market selling volume. Click to tick delta.
          </p>
          <button 
            onClick={toggleTicking}
            className={cn("px-5 py-2.5 text-white text-[10px] font-black uppercase tracking-wider rounded-xl transition-all shadow-sm", deltaTicking ? "bg-rose-600" : "bg-[#0C2340]")}
          >
            {deltaTicking ? "Stop Ticking" : "Start Delta Ticker"}
          </button>
        </div>
        <div className="md:col-span-7 flex flex-col justify-between bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          <div className="space-y-3">
            <div className="flex justify-between text-xs font-bold text-slate-700 border-b pb-2">
              <span>Orderbook Column:</span>
              <span className="font-mono text-[#0C2340]">Bids / Asks</span>
            </div>
            <div className="flex justify-between text-sm font-bold text-slate-700">
              <span>Bids (Sell):</span>
              <span className="font-mono text-rose-500">{sellVolume} Lots</span>
            </div>
            <div className="flex justify-between text-sm font-bold text-slate-700">
              <span>Asks (Buy):</span>
              <span className="font-mono text-emerald-500">{buyVolume} Lots</span>
            </div>
            <div className={cn("p-3 border rounded-xl text-center text-xs font-black uppercase tracking-wider", deltaValue >= 0 ? "text-emerald-600 bg-emerald-50 border-emerald-100" : "text-rose-600 bg-rose-50 border-rose-100")}>
              Current Delta Imbalance: {deltaValue >= 0 ? `+${deltaValue}` : deltaValue} Lots (Aggressive Buy Imbalance)
            </div>
          </div>
        </div>
      </div>
    </L3Frame>
  );
};

// --- MODULE 3.12 VISUALS ---
export const ConfluencesVisual = () => {
  const [checks, setChecks] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false
  });

  const toggleCheck = (id: number) => {
    setChecks(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const isAllChecked = Object.values(checks).every(v => v);

  return (
    <L3Frame 
      title="Confluence Matrix Stacker" 
      id="FLOW-3.12-CONFLUENCE"
      mentorText="The highest probability trades exist at the absolute boundaries of the HTF range. Patience is waiting for price to reach the extremes before planning execution."
      mentorAnalogy="A rubber band. The further it is stretched toward the extremes, the greater the potential energy for a snapback."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-6 space-y-4">
          <h3 className="text-base font-black text-[#0C2340] uppercase tracking-tight">Stack the Confluences</h3>
          <p className="text-xs text-slate-500 font-semibold leading-relaxed">
            Order flow is only tradable when stacked with structure. Check off requirements to verify setup readiness.
          </p>
          <div className="space-y-2">
            {[
              { id: 1, text: "BOS and Displacement established." },
              { id: 2, text: "Unmitigated FVG or OB mapped below midpoint." },
              { id: 3, text: "Aggressive Footprint Delta matches entry bias." }
            ].map(item => (
              <button 
                key={item.id}
                onClick={() => toggleCheck(item.id)}
                className="w-full flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl text-left cursor-pointer hover:bg-slate-50 transition-colors"
              >
                <div className={cn("w-4 h-4 rounded-full border flex items-center justify-center transition-colors", checks[item.id] ? "bg-emerald-500 border-emerald-600 text-white" : "border-slate-300")}>
                  {checks[item.id] && <CheckCircle size={10} />}
                </div>
                <span className="text-xs font-semibold text-slate-700">{item.text}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="md:col-span-6 flex flex-col items-center justify-center bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          {isAllChecked ? (
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <CheckCircle2 size={40} className="text-emerald-500" />
              <span className="text-xs font-black text-emerald-600 uppercase tracking-widest">Setup Eligible!</span>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2 text-slate-400">
              <HelpCircle size={40} className="animate-pulse" />
              <span className="text-xs font-black uppercase tracking-widest">Stack Requirements</span>
            </div>
          )}
        </div>
      </div>
    </L3Frame>
  );
};

// --- MODULE 3.13 VISUALS ---
export const InvalidatedFootprintsVisual = () => {
  const [invalidated, setInvalidated] = useState(false);

  return (
    <L3Frame 
      title="Invalidated Footprint Monitor" 
      id="FLOW-3.13-INVALID"
      mentorText="Daily and Weekly levels act as structural gravity points. When price approaches an HTF anchor, expect high volatility and order rebalancing."
      mentorAnalogy="A lighthouse. Ships (price) use it as a reference point to navigate safely through turbulent waters."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-base font-black text-[#0C2340] uppercase tracking-tight">Footprint Breakdown</h3>
          <p className="text-xs text-slate-500 font-semibold leading-relaxed">
            An order block or FVG is officially invalidated when a candle body closes beyond its boundary/mean threshold. Click to invalidate.
          </p>
          <button 
            onClick={() => setInvalidated(!invalidated)}
            className="px-5 py-2.5 bg-[#0C2340] text-white text-[10px] font-black uppercase tracking-wider rounded-xl transition-all shadow-sm"
          >
            {invalidated ? "Reset Zone" : "Simulate Invalidation Close"}
          </button>
        </div>
        <div className="md:col-span-7 flex flex-col justify-between bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          <div className="relative w-full h-32 flex items-center justify-center border-b">
            <div className="absolute left-0 right-0 top-1/2 h-px bg-rose-400 border-dashed" />
            <span className="absolute left-2 top-[52%] text-[8px] font-black text-rose-500 uppercase">Mean threshold</span>
            
            {invalidated ? (
              <div className="w-6 h-24 bg-rose-500 border border-rose-600 rounded relative mt-[40px]">
                <div className="absolute left-1/2 -top-2 w-0.5 h-2 bg-slate-400" />
                <div className="absolute left-1/2 -bottom-2 w-0.5 h-2 bg-slate-400" />
              </div>
            ) : (
              <div className="w-6 h-10 bg-slate-300 border border-slate-400 rounded relative mt-[-20px]">
                <div className="absolute left-1/2 -top-2 w-0.5 h-2 bg-slate-400" />
                <div className="absolute left-1/2 -bottom-2 w-0.5 h-2 bg-slate-400" />
              </div>
            )}
          </div>
          <div className={cn("mt-4 p-3 border rounded-xl text-center text-xs font-black uppercase tracking-wider", invalidated ? "text-rose-600 bg-rose-50 border-rose-100 animate-pulse" : "text-slate-600 bg-slate-50 border-slate-100")}>
            Status: {invalidated ? "Order Block Invalidated — Cancel Plan" : "Footprint Valid — Holding Zone"}
          </div>
        </div>
      </div>
    </L3Frame>
  );
};

// --- MODULE 3.14 VISUALS ---
export const ChecklistsVisual = () => {
  const [score, setScore] = useState(0);

  const incrementScore = () => {
    setScore(prev => Math.min(prev + 25, 100));
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <L3Frame 
      title="Footprint Quality Auditor" 
      id="FLOW-3.14-AUDITOR"
      mentorText="Volume dictates validity. Triggers that form outside peak session windows lack the institutional backing required to sustain a breakout."
      mentorAnalogy="A stock exchange floor. The floor is packed and active during trading hours, but empty and silent at midnight."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-base font-black text-[#0C2340] uppercase tracking-tight">Grade your Footprint</h3>
          <p className="text-xs text-slate-500 font-semibold leading-relaxed">
            Grade order blocks based on displacement speed and retest wicks. Setup requires score &gt;= 75 before planning entries.
          </p>
          <div className="flex gap-2">
            <button onClick={incrementScore} className="px-4 py-2 bg-[#0C2340] text-white text-[10px] font-black uppercase tracking-wider rounded-xl">Add Confluence</button>
            <button onClick={resetScore} className="px-4 py-2 bg-white border text-slate-500 text-[10px] font-black uppercase tracking-wider rounded-xl">Reset</button>
          </div>
        </div>
        <div className="md:col-span-7 flex flex-col justify-between bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          <div className="space-y-4">
            <div className="flex justify-between text-xs font-bold text-slate-700">
              <span>Footprint Audit Score:</span>
              <span className="font-mono text-[#0C2340]">{score}%</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-sky-500 h-2 transition-all duration-300" style={{ width: `${score}%` }} />
            </div>
            <div className={cn("p-3 border rounded-xl text-center text-xs font-black uppercase tracking-wider", score >= 75 ? "text-emerald-600 bg-emerald-50 border-emerald-100 animate-pulse" : "text-rose-600 bg-rose-50 border-rose-100")}>
              Recommendation: {score >= 75 ? "Footprint Valid — Execute Setup" : "Insufficient Confluences — Pass Trade"}
            </div>
          </div>
        </div>
      </div>
    </L3Frame>
  );
};

// --- MODULE 3.15 VISUALS ---
export const Level3ReviewVisual = () => {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
    4: false
  });

  const toggleCheck = (id: number) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const isAllChecked = Object.values(checkedItems).every(v => v);

  return (
    <L3Frame 
      title="Level 3 Final Review" 
      id="FLOW-3.15-REVIEW"
      mentorText="Execution is not a matter of guessing; it is a checklist of parameters that must align before you touch the keys. If one parameter fails, the trade does not exist."
      mentorAnalogy="An astronaut completing pre-launch checks. A single red light cancels the launch, regardless of how ready the pilot feels."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-6 space-y-4">
          <h3 className="text-base font-black text-[#0C2340] uppercase tracking-tight">Order Flow Checklist</h3>
          <p className="text-xs text-slate-500 font-semibold leading-relaxed">
            Verify you understand institutional order blocks, FVGs, and volume imbalances before taking the Level 3 Knowledge Test.
          </p>
          <div className="space-y-2">
            {[
              { id: 1, text: "I can identify order blocks & mean threshold." },
              { id: 2, text: "I understand FVG anatomy and CE midpoints." },
              { id: 3, text: "I can distinguish mitigation from breaker blocks." },
              { id: 4, text: "I know how to read footprint delta delta changes." }
            ].map(item => (
              <button 
                key={item.id}
                onClick={() => toggleCheck(item.id)}
                className="w-full flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl text-left cursor-pointer hover:bg-slate-50 transition-colors"
              >
                <div className={cn("w-4 h-4 rounded-full border flex items-center justify-center transition-colors", checkedItems[item.id] ? "bg-emerald-500 border-emerald-600 text-white" : "border-slate-300")}>
                  {checkedItems[item.id] && <CheckCircle size={10} />}
                </div>
                <span className="text-xs font-semibold text-slate-700">{item.text}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="md:col-span-6 flex flex-col items-center justify-center bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          {isAllChecked ? (
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <CheckCircle2 size={40} className="text-emerald-500" />
              <span className="text-xs font-black text-emerald-600 uppercase tracking-widest">Ready for the Exam!</span>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2 text-slate-400">
              <HelpCircle size={40} className="animate-pulse" />
              <span className="text-xs font-black uppercase tracking-widest">Complete Checklist</span>
            </div>
          )}
        </div>
      </div>
    </L3Frame>
  );
};
