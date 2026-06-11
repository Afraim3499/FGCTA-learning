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

// Standard MentorInsight UI Component integrated into L2Frame
const L2Frame = ({ 
  children, 
  title, 
  id, 
  mentorText = "Wait for execution parameters to align perfectly with your pre-written plan. A professional trader does not chase price.",
  mentorAnalogy = "A sniper waits patiently for the target to step exactly into the crosshairs. They do not fire wildly hoping for a hit." 
}: { 
  children: React.ReactNode; 
  title: string; 
  id: string; 
  mentorText?: string; 
  mentorAnalogy?: string; 
}) => (
  <div className="w-full bg-[#FAFDFD] border border-[#E2E8F0] rounded-[2rem] p-6 md:p-8 flex flex-col relative overflow-hidden shadow-sm text-left min-h-[500px]">
    {/* Grid Background Effect */}
    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] bg-[length:24px_24px]" />
    
    {/* Top Header Row */}
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 relative z-10 border-b border-slate-200 pb-4 shrink-0">
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5 mb-1">
          <Zap size={10} className="text-emerald-600 animate-pulse" />
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Execution Engine Console</span>
        </div>
        <h4 className="text-sm font-black text-[#071B36] uppercase tracking-tighter italic leading-tight">{title}</h4>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-end">
          <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Execution Ref</span>
          <span className="text-[10px] font-mono text-[#071B36] font-bold">{id}</span>
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
        <div className="px-2 py-1 bg-[#071B36] text-white text-[8px] font-black uppercase tracking-widest rounded-sm">Mentor Blueprint</div>
        <div className="h-px flex-1 bg-slate-200" />
      </div>
      <div className="flex gap-4">
         <div className="flex-1">
            <p className="text-xs font-bold text-[#071B36] leading-relaxed">{mentorText}</p>
            {mentorAnalogy && (
              <p className="mt-1.5 text-[11px] text-slate-500 italic leading-snug">
                <span className="font-black uppercase text-[9px] mr-2 text-emerald-600 not-italic">Concept Analogy:</span>
                {mentorAnalogy}
              </p>
            )}
         </div>
      </div>
    </div>
  </div>
);

// --- MODULE 2.1 VISUALS ---
export const ChartBasicsVisual = () => {
  const [open, setOpen] = useState(100);
  const [close, setClose] = useState(120);
  const [high, setHigh] = useState(130);
  const [low, setLow] = useState(90);

  const isBullish = close >= open;

  return (
    <L2Frame 
      title="Candlestick Anatomy" 
      id="EXEC-2.1-BASICS"
      mentorText="Candlesticks are not patterns to buy or sell; they are visual representations of order flow and transaction speed across a fixed time block. Focus on the relationship between open/close (displacement) and wicks (rejections)."
      mentorAnalogy="The speedometer on a car. It doesn't tell you where you are going, but it tells you the force and velocity of the current movement."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-6 space-y-4">
          <h3 className="text-base font-black text-[#071B36] uppercase tracking-tight">Interactive Candlestick</h3>
          <p className="text-xs text-slate-500 font-semibold leading-relaxed">
            A candle is a footprint of time and price. Adjust the parameters below to observe how the OHLC values build wicks and bodies.
          </p>
          <div className="space-y-3">
            <div>
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Open: {open}</label>
              <input type="range" min="80" max="120" value={open} onChange={e => setOpen(Number(e.target.value))} className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer" />
            </div>
            <div>
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Close: {close}</label>
              <input type="range" min="80" max="120" value={close} onChange={e => setClose(Number(e.target.value))} className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer" />
            </div>
            <div>
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">High: {high}</label>
              <input type="range" min={Math.max(open, close)} max="140" value={high} onChange={e => setHigh(Number(e.target.value))} className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer" />
            </div>
            <div>
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Low: {low}</label>
              <input type="range" min="60" max={Math.min(open, close)} value={low} onChange={e => setLow(Number(e.target.value))} className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="md:col-span-6 flex items-center justify-center bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          <div className="flex flex-col items-center relative h-[180px] w-20">
            {/* Upper Wick */}
            <div 
              className="absolute w-0.5 bg-slate-400"
              style={{
                top: `${140 - high}px`,
                bottom: `${140 - Math.max(open, close)}px`
              }}
            />
            {/* Candle Body */}
            <div 
              className={cn("absolute w-8 rounded-sm border transition-colors duration-150", isBullish ? "bg-emerald-500 border-emerald-600" : "bg-rose-500 border-rose-600")}
              style={{
                top: `${140 - Math.max(open, close)}px`,
                height: `${Math.abs(close - open)}px`
              }}
            />
            {/* Lower Wick */}
            <div 
              className="absolute w-0.5 bg-slate-400"
              style={{
                top: `${140 - Math.min(open, close)}px`,
                bottom: `${140 - low}px`
              }}
            />
          </div>
        </div>
      </div>
    </L2Frame>
  );
};

// --- MODULE 2.2 VISUALS ---
export const FractalNatureVisual = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState<"daily" | "hourly" | "15m">("daily");

  return (
    <L2Frame 
      title="Fractal Scaling Zoom" 
      id="EXEC-2.2-FRACTALS"
      mentorText="Every candle on a daily chart contains a full narrative of swings, sweeps, and structural breaks on lower timeframes. You must learn to read the sub-structure inside the higher-timeframe framework."
      mentorAnalogy="Russian nesting dolls. Each smaller doll is identical in structure but exists nested inside the larger shell."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-base font-black text-[#071B36] uppercase tracking-tight">Fractal Structure</h3>
          <p className="text-xs text-slate-500 font-semibold leading-relaxed">
            Market structure is fractal. A single daily candlestick is actually composed of multiple hourly structural swings. Select a timeframe to inspect the scaling logic.
          </p>
          <div className="flex flex-wrap gap-2">
            {(["daily", "hourly", "15m"] as const).map(tf => (
              <button 
                key={tf}
                onClick={() => setSelectedTimeframe(tf)}
                className={cn("px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all", selectedTimeframe === tf ? "bg-[#071B36] text-white" : "bg-white border text-slate-500")}
              >
                {tf} Chart
              </button>
            ))}
          </div>
        </div>
        <div className="md:col-span-7 flex flex-col items-center justify-center bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          {selectedTimeframe === "daily" && (
            <div className="flex items-center gap-2">
              <div className="w-6 h-32 bg-emerald-500 border border-emerald-600 rounded relative">
                <div className="absolute left-1/2 -top-4 w-0.5 h-4 bg-slate-400" />
                <div className="absolute left-1/2 -bottom-4 w-0.5 h-4 bg-slate-400" />
              </div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">1 Daily Candle</span>
            </div>
          )}
          {selectedTimeframe === "hourly" && (
            <div className="flex items-end gap-1.5 h-32">
              <div className="w-3 h-10 bg-slate-300 border border-slate-400 rounded relative" />
              <div className="w-3 h-16 bg-slate-300 border border-slate-400 rounded relative" />
              <div className="w-3 h-24 bg-emerald-500 border border-emerald-600 rounded relative" />
              <div className="w-3 h-28 bg-emerald-500 border border-emerald-600 rounded relative" />
              <div className="w-3 h-20 bg-rose-400 border border-rose-500 rounded relative" />
              <div className="w-3 h-16 bg-rose-400 border border-rose-500 rounded relative" />
            </div>
          )}
          {selectedTimeframe === "15m" && (
            <div className="w-full flex items-center justify-center text-xs font-bold text-slate-500">
              <div className="flex flex-col items-center gap-2">
                <Activity className="text-emerald-500 animate-pulse" size={24} />
                <span>96 detailed candles of structural swings & sweeps.</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </L2Frame>
  );
};

// --- MODULE 2.3 VISUALS ---
export const PrimaryPriceFeedsVisual = () => {
  const [selectedFeed, setSelectedFeed] = useState<"dma" | "bbook">("dma");

  return (
    <L2Frame 
      title="Price Feed Mechanism" 
      id="EXEC-2.3-FEEDS"
      mentorText="Execution is only as clean as the feed it runs on. DMA feeds connect you directly to central bank matches, while retail market-maker desks create synthetic quotes to capture slippage and spread arbitrage."
      mentorAnalogy="Buying concert tickets directly from the box office versus buying from a street scalper. The scalper adds custom fees and delays entry."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-base font-black text-[#071B36] uppercase tracking-tight">Direct DMA vs B-Book</h3>
          <p className="text-xs text-slate-500 font-semibold leading-relaxed">
            Institutional Direct Market Access (DMA) feeds route orders directly to central matches. B-Book retail brokers create synthetic quotes that cause slippage.
          </p>
          <div className="flex gap-2">
            <button 
              onClick={() => setSelectedFeed("dma")}
              className={cn("px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all", selectedFeed === "dma" ? "bg-[#071B36] text-white" : "bg-white border text-slate-500")}
            >
              Direct DMA
            </button>
            <button 
              onClick={() => setSelectedFeed("bbook")}
              className={cn("px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all", selectedFeed === "bbook" ? "bg-[#071B36] text-white" : "bg-white border text-slate-500")}
            >
              Retail B-Book
            </button>
          </div>
        </div>
        <div className="md:col-span-7 flex flex-col justify-between bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          {selectedFeed === "dma" ? (
            <div className="space-y-3">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Spread:</span>
                <span className="text-emerald-600 font-black">0.1 pips (Tight)</span>
              </div>
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Slippage:</span>
                <span className="text-emerald-600 font-black">Zero / Direct Route</span>
              </div>
              <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-[10px] font-semibold text-emerald-800">
                Direct execution mapping. Order routed straight to liquidity match providers.
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Spread:</span>
                <span className="text-rose-600 font-black">2.5 pips (Marked up)</span>
              </div>
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Slippage:</span>
                <span className="text-rose-600 font-black">Slipped 1.2 pips</span>
              </div>
              <div className="p-3 bg-rose-50 border border-rose-100 rounded-xl text-[10px] font-semibold text-rose-800">
                Broker conflicts. Order processed through internal dealing desk desk.
              </div>
            </div>
          )}
        </div>
      </div>
    </L2Frame>
  );
};

// --- MODULE 2.4 VISUALS ---
export const RangeModelVisual = () => {
  const [pricePosition, setPricePosition] = useState(65);

  const getZone = (pos: number) => {
    if (pos > 50) return { name: "Premium Zone", color: "text-rose-600 bg-rose-50 border-rose-100" };
    if (pos < 50) return { name: "Discount Zone", color: "text-emerald-600 bg-emerald-50 border-emerald-100" };
    return { name: "Equilibrium", color: "text-slate-600 bg-slate-50 border-slate-100" };
  };

  const currentZone = getZone(pricePosition);

  return (
    <L2Frame 
      title="The Range Model" 
      id="EXEC-2.4-RANGE"
      mentorText="Price spends 80% of its time range-bound. Buying in premium or selling in discount is a mathematical error that guarantees a negative expectancy over time."
      mentorAnalogy="Shopping at a supermarket. You wait for seasonal discounts to buy inventory; you never pay a premium price for goods you plan to resell."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-base font-black text-[#071B36] uppercase tracking-tight">Equilibrium Slider</h3>
          <p className="text-xs text-slate-500 font-semibold leading-relaxed">
            Drag the price position to locate the midpoint (50% Equilibrium). Professionals sell in Premium and buy in Discount.
          </p>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Price Position: {pricePosition}%</label>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={pricePosition} 
              onChange={e => setPricePosition(Number(e.target.value))} 
              className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
        <div className="md:col-span-7 flex flex-col justify-between bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          <div className="w-full h-24 bg-slate-50 rounded-xl border relative overflow-hidden flex flex-col justify-between p-2">
            <div className="text-[9px] font-black text-rose-500 uppercase tracking-widest">Range High (100%)</div>
            <div className="absolute left-0 right-0 top-1/2 h-px bg-slate-300 border-dashed" style={{ transform: "translateY(-50%)" }} />
            <div className="absolute left-4 top-[45%] text-[8px] font-black text-slate-400 uppercase">Equilibrium (50%)</div>
            
            {/* Price Marker */}
            <div 
              className="absolute right-6 w-3 h-3 rounded-full bg-[#071B36] border-2 border-white transition-all duration-150"
              style={{
                bottom: `${pricePosition}%`,
                transform: "translateY(50%)"
              }}
            />
            <div className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">Range Low (0%)</div>
          </div>
          <div className={cn("mt-4 p-3 border rounded-xl text-center text-xs font-black uppercase tracking-wider", currentZone.color)}>
            Current Area: {currentZone.name}
          </div>
        </div>
      </div>
    </L2Frame>
  );
};

// --- MODULE 2.5 VISUALS ---
export const MarketStructurePart1Visual = () => {
  const [swings, setSwings] = useState<Record<string, "high" | "low" | "none">>({
    A: "none",
    B: "none",
    C: "none"
  });

  const toggleSwing = (point: string) => {
    setSwings(prev => ({
      ...prev,
      [point]: prev[point] === "none" ? "high" : prev[point] === "high" ? "low" : "none"
    }));
  };

  return (
    <L2Frame 
      title="Protected Swing Mapper" 
      id="EXEC-2.5-STRUCTURE"
      mentorText="Protected swings represent the price levels where major institutional participants defended their positions. A break of these swings is the first sign of an institutional shift."
      mentorAnalogy="A castle wall. If the outer gate is breached, the defenders must retreat to the inner keep, signalling a shift in control."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-base font-black text-[#071B36] uppercase tracking-tight">Map Swings</h3>
          <p className="text-xs text-slate-500 font-semibold leading-relaxed">
            Click on the points A, B, and C to correctly classify them as protected swing highs/lows or structure noise.
          </p>
          <div className="space-y-2">
            {Object.entries(swings).map(([point, val]) => (
              <div key={point} className="flex justify-between text-xs font-bold text-slate-700">
                <span>Point {point}:</span>
                <span className="uppercase text-emerald-600 font-black">{val}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-7 flex items-center justify-center bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          <div className="relative w-full h-32 flex items-center justify-around">
            {/* SVG Zig Zag */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 120" fill="none">
              <path d="M 30 90 L 90 30 L 150 100 L 210 20 L 270 90" stroke="#CBD5E1" strokeWidth="2" />
            </svg>
            <button onClick={() => toggleSwing("A")} className="absolute left-[82px] top-[22px] w-6 h-6 rounded-full bg-[#071B36] text-white text-[10px] font-black flex items-center justify-center cursor-pointer shadow">A</button>
            <button onClick={() => toggleSwing("B")} className="absolute left-[142px] top-[92px] w-6 h-6 rounded-full bg-[#071B36] text-white text-[10px] font-black flex items-center justify-center cursor-pointer shadow">B</button>
            <button onClick={() => toggleSwing("C")} className="absolute left-[202px] top-[12px] w-6 h-6 rounded-full bg-[#071B36] text-white text-[10px] font-black flex items-center justify-center cursor-pointer shadow">C</button>
          </div>
        </div>
      </div>
    </L2Frame>
  );
};

// --- MODULE 2.6 VISUALS ---
export const MarketStructureShiftVisual = () => {
  const [hasShifted, setHasShifted] = useState(false);

  return (
    <L2Frame 
      title="MSS Trigger Monitor" 
      id="EXEC-2.6-MSS"
      mentorText="Do not mistake a simple wick sweep for a structure shift. A true MSS requires a clear candle body close with displacement beyond the protected swing level."
      mentorAnalogy="A dam breaking. If water merely splashes over the top, the barrier holds. If the concrete itself splits, the flow changes permanently."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-base font-black text-[#071B36] uppercase tracking-tight">Market Structure Shift</h3>
          <p className="text-xs text-slate-500 font-semibold leading-relaxed">
            An MSS occurs when a candle body closes beyond a protected swing low. Click to simulate the breakdown close.
          </p>
          <button 
            onClick={() => setHasShifted(!hasShifted)}
            className="px-5 py-2.5 bg-[#071B36] text-white text-[10px] font-black uppercase tracking-wider rounded-xl transition-all shadow-sm"
          >
            {hasShifted ? "Reset Chart" : "Simulate Breakdown Close"}
          </button>
        </div>
        <div className="md:col-span-7 flex flex-col justify-between bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          <div className="relative w-full h-32 flex items-end justify-around pb-6 border-b">
            {/* Protected Swing Low Line */}
            <div className="absolute left-0 right-0 top-1/2 h-px bg-rose-400 border-dashed" />
            <span className="absolute left-2 top-[52%] text-[8px] font-black text-rose-500 uppercase">Protected low</span>
            
            {/* Candles */}
            <div className="w-4 h-16 bg-emerald-500 rounded-sm" />
            <div className="w-4 h-12 bg-rose-500 rounded-sm mb-4" />
            <div className={cn("w-4 transition-all duration-300 rounded-sm", hasShifted ? "h-24 bg-rose-600 mt-8" : "h-6 bg-slate-300")} />
          </div>
          <div className={cn("mt-4 p-3 border rounded-xl text-center text-xs font-black uppercase tracking-wider", hasShifted ? "text-rose-600 bg-rose-50 border-rose-100 animate-pulse" : "text-slate-600 bg-slate-50 border-slate-100")}>
            Status: {hasShifted ? "Market Structure Shift Confirmed" : "Waiting for Shift Confirmation"}
          </div>
        </div>
      </div>
    </L2Frame>
  );
};

// --- MODULE 2.7 VISUALS ---
export const TrendFallacyVisual = () => {
  const [showLiquidity, setShowLiquidity] = useState(false);

  return (
    <L2Frame 
      title="Liquidity Pool Rotations" 
      id="EXEC-2.7-FALLACY"
      mentorText="Trendlines are retail traps designed to engineer liquidity. Institutions deliver price by sweeping stops above/below highs and lows to match their block orders."
      mentorAnalogy="A lion herding prey toward a watering hole. The prey thinks it is moving along a natural path, but the hunter is funneling them into a trap."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-base font-black text-[#071B36] uppercase tracking-tight">The Trend Trap</h3>
          <p className="text-xs text-slate-500 font-semibold leading-relaxed">
            Institutions do not respect retail trendlines. They deliver price between high-volume liquidity pools. Toggle the heatmap overlay to see the matching targets.
          </p>
          <button 
            onClick={() => setShowLiquidity(!showLiquidity)}
            className="px-5 py-2.5 bg-[#071B36] text-white text-[10px] font-black uppercase tracking-wider rounded-xl transition-all shadow-sm"
          >
            {showLiquidity ? "Hide Liquidity Pools" : "Show Liquidity Pools"}
          </button>
        </div>
        <div className="md:col-span-7 flex flex-col justify-center bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          <div className="relative w-full h-36 bg-slate-50 border rounded-xl overflow-hidden">
            {/* Retails Trendline */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 300 140">
                <line x1="30" y1="120" x2="270" y2="40" stroke="#94A3B8" strokeWidth="1" strokeDasharray="4" />
                <text x="50" y="105" fill="#94A3B8" fontSize="8" fontWeight="bold">RETAIL TRENDLINE</text>
              </svg>
            </div>
            
            {/* Liquidity Pools */}
            {showLiquidity && (
              <>
                <div className="absolute top-4 left-10 right-10 h-6 bg-rose-500/20 border border-rose-500 rounded flex items-center justify-center animate-pulse">
                  <span className="text-[9px] font-black text-rose-700 uppercase tracking-widest">Buy-Side Liquidity Pool (BSL)</span>
                </div>
                <div className="absolute bottom-4 left-10 right-10 h-6 bg-emerald-500/20 border border-emerald-500 rounded flex items-center justify-center animate-pulse">
                  <span className="text-[9px] font-black text-emerald-700 uppercase tracking-widest">Sell-Side Liquidity Pool (SSL)</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </L2Frame>
  );
};

// --- MODULE 2.8 VISUALS ---
export const InternalExternalStructureVisual = () => {
  const [filterMode, setFilterMode] = useState<"noise" | "cleaned">("noise");

  return (
    <L2Frame 
      title="Structure Layer Filter" 
      id="EXEC-2.8-LAYERS"
      mentorText="Beginners get lost in lower timeframe internal swings, trading pullbacks as major breaks. Always anchor your bias to the external dealing range boundaries."
      mentorAnalogy="A river's main channel versus its local eddies. The eddies swirl in circles, but the main current determines the overall direction."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-base font-black text-[#071B36] uppercase tracking-tight">Internal vs External</h3>
          <p className="text-xs text-slate-500 font-semibold leading-relaxed">
            Do not mistake internal minor pullbacks for major structural shifts. Toggle the filter to remove structural noise and isolate the dealing range.
          </p>
          <div className="flex gap-2">
            <button 
              onClick={() => setFilterMode("noise")}
              className={cn("px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all", filterMode === "noise" ? "bg-[#071B36] text-white" : "bg-white border text-slate-500")}
            >
              All Swings
            </button>
            <button 
              onClick={() => setFilterMode("cleaned")}
              className={cn("px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all", filterMode === "cleaned" ? "bg-[#071B36] text-white" : "bg-white border text-slate-500")}
            >
              Dealing Range Only
            </button>
          </div>
        </div>
        <div className="md:col-span-7 flex items-center justify-center bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          <div className="relative w-full h-32">
            <svg className="w-full h-full" viewBox="0 0 300 120">
              {/* External Major Range (Black) */}
              <path d="M 30 100 L 150 20 L 270 100" stroke="#071B36" strokeWidth="3" fill="none" />
              
              {/* Internal Minor Swings (Slate / dashed) */}
              {filterMode === "noise" && (
                <path d="M 30 100 L 60 70 L 90 85 L 120 50 L 150 20 L 180 50 L 210 40 L 240 80 L 270 100" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3" fill="none" />
              )}
            </svg>
          </div>
        </div>
      </div>
    </L2Frame>
  );
};

// --- MODULE 2.9 VISUALS ---
export const DisplacementVisual = () => {
  const [selectedDisplacement, setSelectedDisplacement] = useState<"high" | "low" | null>(null);

  return (
    <L2Frame 
      title="Displacement Inspector" 
      id="EXEC-2.9-DISPLACEMENT"
      mentorText="Displacement is the physical signature of institutional capital. A long candle body with high volume shows aggressive, one-sided market participation."
      mentorAnalogy="A freight train accelerating through a crossing. It cannot be stopped by minor obstacles in its path."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-base font-black text-[#071B36] uppercase tracking-tight">Identify Displacement</h3>
          <p className="text-xs text-slate-500 font-semibold leading-relaxed">
            Displacement is confirmed by long candle bodies with high volume and minimal wicks. Select the type of candle to inspect.
          </p>
          <div className="flex gap-2">
            <button 
              onClick={() => setSelectedDisplacement("high")}
              className={cn("px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all", selectedDisplacement === "high" ? "bg-[#071B36] text-white" : "bg-white border text-slate-500")}
            >
              High Displacement
            </button>
            <button 
              onClick={() => setSelectedDisplacement("low")}
              className={cn("px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all", selectedDisplacement === "low" ? "bg-[#071B36] text-white" : "bg-white border text-slate-500")}
            >
              Low Displacement
            </button>
          </div>
        </div>
        <div className="md:col-span-7 flex flex-col justify-between bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          <div className="flex items-center justify-around h-32">
            {selectedDisplacement === "high" && (
              <div className="flex flex-col items-center">
                <div className="w-6 h-24 bg-emerald-500 border border-emerald-600 rounded relative">
                  <div className="absolute left-1/2 -top-1 w-0.5 h-1 bg-slate-400" />
                  <div className="absolute left-1/2 -bottom-1 w-0.5 h-1 bg-slate-400" />
                </div>
                <span className="text-[8px] font-black text-emerald-600 uppercase tracking-widest mt-2">Commitment Body</span>
              </div>
            )}
            {selectedDisplacement === "low" && (
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 bg-slate-200 border border-slate-300 rounded relative">
                  <div className="absolute left-1/2 -top-8 w-0.5 h-8 bg-slate-400" />
                  <div className="absolute left-1/2 -bottom-8 w-0.5 h-8 bg-slate-400" />
                </div>
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-10">Wick Heavy Noise</span>
              </div>
            )}
            {!selectedDisplacement && (
              <span className="text-xs font-bold text-slate-400 uppercase">Select a candle type to inspect</span>
            )}
          </div>
        </div>
      </div>
    </L2Frame>
  );
};

// --- MODULE 2.10 VISUALS ---
export const BreakoutsFailedBreaksVisual = () => {
  const [mode, setMode] = useState<"confirmed" | "sweep">("confirmed");

  return (
    <L2Frame 
      title="Breakout Quality Monitor" 
      id="EXEC-2.10-BREAKOUTS"
      mentorText="A breakout is only confirmed when a candle closes outside the boundary. If it wicks out and closes inside, it is a manipulation sweep designed to trigger stop-runs."
      mentorAnalogy="A testing probe. A scout climbs over a wall to check the defenses, but returns to base rather than establishing a permanent camp."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-base font-black text-[#071B36] uppercase tracking-tight">Break vs Sweep</h3>
          <p className="text-xs text-slate-500 font-semibold leading-relaxed">
            A breakout requires a candle body to close beyond the range boundary. Sweeps only wick beyond and close back inside.
          </p>
          <div className="flex gap-2">
            <button 
              onClick={() => setMode("confirmed")}
              className={cn("px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all", mode === "confirmed" ? "bg-[#071B36] text-white" : "bg-white border text-slate-500")}
            >
              Confirmed Break
            </button>
            <button 
              onClick={() => setMode("sweep")}
              className={cn("px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all", mode === "sweep" ? "bg-[#071B36] text-white" : "bg-white border text-slate-500")}
            >
              Failed Sweep
            </button>
          </div>
        </div>
        <div className="md:col-span-7 flex flex-col justify-between bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          <div className="relative w-full h-32 flex items-center justify-center border-b">
            <div className="absolute left-0 right-0 top-1/3 h-px bg-slate-300 border-dashed" />
            <span className="absolute left-2 top-[36%] text-[8px] font-black text-slate-400 uppercase">Range boundary</span>
            
            {mode === "confirmed" ? (
              <div className="w-6 h-20 bg-emerald-500 border border-emerald-600 rounded relative mt-[-20px]">
                <div className="absolute left-1/2 -top-2 w-0.5 h-2 bg-slate-400" />
                <div className="absolute left-1/2 -bottom-2 w-0.5 h-2 bg-slate-400" />
              </div>
            ) : (
              <div className="w-6 h-8 bg-rose-500 border border-rose-600 rounded relative mt-[20px]">
                <div className="absolute left-1/2 -top-16 w-0.5 h-16 bg-slate-400" />
                <div className="absolute left-1/2 -bottom-2 w-0.5 h-2 bg-slate-400" />
              </div>
            )}
          </div>
          <div className={cn("mt-4 p-3 border rounded-xl text-center text-xs font-black uppercase tracking-wider", mode === "confirmed" ? "text-emerald-600 bg-emerald-50 border-emerald-100" : "text-rose-600 bg-rose-50 border-rose-100")}>
            Classification: {mode === "confirmed" ? "Valid Breakout close" : "Swept and Rejected"}
          </div>
        </div>
      </div>
    </L2Frame>
  );
};

// --- MODULE 2.11 VISUALS ---
export const BoundaryAreasVisual = () => {
  const [showHeatmap, setShowHeatmap] = useState(false);

  return (
    <L2Frame 
      title="Boundary Areas" 
      id="EXEC-2.11-BOUNDARY"
      mentorText="Resting order pools are the fuel that feeds market movements. Look for clusters of stop-loss orders just beyond obvious highs (BSL) and lows (SSL)."
      mentorAnalogy="Gas stations along a highway. The car (price) must stop at these stations to refuel (acquire orders) before continuing its journey."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-base font-black text-[#071B36] uppercase tracking-tight">Liquidity Heatmap</h3>
          <p className="text-xs text-slate-500 font-semibold leading-relaxed">
            Liquidity pools form where retail stops cluster. Turn on the heatmap to observe target clusters below support levels.
          </p>
          <button 
            onClick={() => setShowHeatmap(!showHeatmap)}
            className="px-5 py-2.5 bg-[#071B36] text-white text-[10px] font-black uppercase tracking-wider rounded-xl transition-all shadow-sm"
          >
            {showHeatmap ? "Hide Heatmap" : "Show Liquidity Heatmap"}
          </button>
        </div>
        <div className="md:col-span-7 flex flex-col justify-center bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          <div className="relative w-full h-32 bg-slate-50 border rounded-xl flex items-center justify-around">
            {/* Support levels */}
            <div className="absolute bottom-10 left-0 right-0 h-px bg-slate-300" />
            <span className="absolute left-2 bottom-12 text-[8px] font-bold text-slate-400 uppercase">Support level</span>
            
            {showHeatmap && (
              <div className="absolute bottom-2 left-10 right-10 h-8 bg-rose-500/20 border border-rose-500/40 rounded flex items-center justify-center animate-pulse">
                <span className="text-[8px] font-black text-rose-700 uppercase tracking-widest">Resting Sell Stops Cluster</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </L2Frame>
  );
};

// --- MODULE 2.12 VISUALS ---
export const ExternalRangeBoundaryVisual = () => {
  return (
    <L2Frame 
      title="External Range Bounds" 
      id="EXEC-2.12-EXTERNAL"
      mentorText="The highest probability trades exist at the absolute boundaries of the HTF range. Patience is waiting for price to reach the extremes before planning execution."
      mentorAnalogy="A rubber band. The further it is stretched toward the extremes, the greater the potential energy for a snapback."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-base font-black text-[#071B36] uppercase tracking-tight">Macro Dealing Boundaries</h3>
          <p className="text-xs text-slate-500 font-semibold leading-relaxed">
            The external range boundary represents the ultimate boundaries of the higher timeframe structure. Entering near these boundaries maximizes edge.
          </p>
        </div>
        <div className="md:col-span-7 flex items-center justify-center bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          <div className="w-full h-32 bg-slate-50 rounded-xl border relative flex flex-col justify-between p-4">
            <div className="h-0.5 bg-rose-500 w-full" />
            <div className="text-[8px] font-black text-rose-500 uppercase tracking-widest text-center mt-[-8px]">Range Extreme (Resistance)</div>
            <div className="text-xs font-bold text-slate-400 text-center">Dealing Range Middle (Noise Area)</div>
            <div className="h-0.5 bg-emerald-500 w-full" />
            <div className="text-[8px] font-black text-emerald-500 uppercase tracking-widest text-center mb-[-8px]">Range Extreme (Support)</div>
          </div>
        </div>
      </div>
    </L2Frame>
  );
};

// --- MODULE 2.13 VISUALS ---
export const HtfAnchorsVisual = () => {
  const [showHTF, setShowHTF] = useState(false);

  return (
    <L2Frame 
      title="HTF Level Anchoring" 
      id="EXEC-2.13-ANCHORS"
      mentorText="Daily and Weekly levels act as structural gravity points. When price approaches an HTF anchor, expect high volatility and order rebalancing."
      mentorAnalogy="A lighthouse. Ships (price) use it as a reference point to navigate safely through turbulent waters."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-base font-black text-[#071B36] uppercase tracking-tight">HTF Key Levels</h3>
          <p className="text-xs text-slate-500 font-semibold leading-relaxed">
            Daily and Weekly levels act as magnets for price delivery. Toggle the HTF levels to see the key execution anchors.
          </p>
          <button 
            onClick={() => setShowHTF(!showHTF)}
            className="px-5 py-2.5 bg-[#071B36] text-white text-[10px] font-black uppercase tracking-wider rounded-xl transition-all shadow-sm"
          >
            {showHTF ? "Hide HTF Anchors" : "Show HTF Anchors"}
          </button>
        </div>
        <div className="md:col-span-7 flex items-center justify-center bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          <div className="relative w-full h-32 bg-slate-50 border rounded-xl flex flex-col justify-around">
            {showHTF && (
              <>
                <div className="absolute top-6 left-0 right-0 h-0.5 bg-[#071B36] flex items-center">
                  <span className="bg-[#071B36] text-white text-[7px] font-black px-1.5 py-0.5 uppercase tracking-wider rounded-sm ml-2">Weekly Level</span>
                </div>
                <div className="absolute bottom-10 left-0 right-0 h-0.5 bg-slate-700 flex items-center">
                  <span className="bg-slate-700 text-white text-[7px] font-black px-1.5 py-0.5 uppercase tracking-wider rounded-sm ml-2">Daily Level</span>
                </div>
              </>
            )}
            <div className="text-xs font-bold text-slate-400 text-center">Lower Timeframe Price Path</div>
          </div>
        </div>
      </div>
    </L2Frame>
  );
};

// --- MODULE 2.14 VISUALS ---
export const SessionWindowsVisual = () => {
  const [selectedSession, setSelectedSession] = useState<"london" | "ny" | "asia">("london");

  return (
    <L2Frame 
      title="Session Overlap Clocks" 
      id="EXEC-2.14-SESSIONS"
      mentorText="Volume dictates validity. Triggers that form outside peak session windows lack the institutional backing required to sustain a breakout."
      mentorAnalogy="A stock exchange floor. The floor is packed and active during trading hours, but empty and silent at midnight."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-base font-black text-[#071B36] uppercase tracking-tight">Volatility Windows</h3>
          <p className="text-xs text-slate-500 font-semibold leading-relaxed">
            Liquidity is highly dependent on session windows. Select a session to observe its peak activity metrics.
          </p>
          <div className="flex gap-2">
            {(["asia", "london", "ny"] as const).map(session => (
              <button 
                key={session}
                onClick={() => setSelectedSession(session)}
                className={cn("px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all", selectedSession === session ? "bg-[#071B36] text-white" : "bg-white border text-slate-500")}
              >
                {session}
              </button>
            ))}
          </div>
        </div>
        <div className="md:col-span-7 flex flex-col justify-between bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          {selectedSession === "london" && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Clock className="text-emerald-500" size={16} />
                <span className="text-xs font-black text-[#071B36] uppercase tracking-wider">London Open Window</span>
              </div>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                Primary liquidity injections. High-volume sweeps are triggered during these hours.
              </p>
              <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-[10px] font-semibold text-emerald-800">
                Participation Profile: Highest volume for EUR, GBP, and XAU.
              </div>
            </div>
          )}
          {selectedSession === "ny" && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Clock className="text-emerald-500" size={16} />
                <span className="text-xs font-black text-[#071B36] uppercase tracking-wider">New York Open Window</span>
              </div>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                Overlap volatility. US macro announcements drive institutional pricing.
              </p>
              <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-[10px] font-semibold text-emerald-800">
                Participation Profile: High USD volume & yields recalculations.
              </div>
            </div>
          )}
          {selectedSession === "asia" && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Clock className="text-rose-500" size={16} />
                <span className="text-xs font-black text-[#071B36] uppercase tracking-wider">Asian Range Window</span>
              </div>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                Compression and consolidation range. Spreads are wider, and breakouts are prone to fail.
              </p>
              <div className="p-3 bg-rose-50 border border-rose-100 rounded-xl text-[10px] font-semibold text-rose-800">
                Participation Profile: Lower volume; consolidation accumulation.
              </div>
            </div>
          )}
        </div>
      </div>
    </L2Frame>
  );
};

// --- MODULE 2.15 VISUALS ---
export const Level2ReviewVisual = () => {
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
    <L2Frame 
      title="Level 2 Final Review" 
      id="EXEC-2.15-REVIEW"
      mentorText="Execution is not a matter of guessing; it is a checklist of parameters that must align before you touch the keys. If one parameter fails, the trade does not exist."
      mentorAnalogy="An astronaut completing pre-launch checks. A single red light cancels the launch, regardless of how ready the pilot feels."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-6 space-y-4">
          <h3 className="text-base font-black text-[#071B36] uppercase tracking-tight">Consolidation Checklist</h3>
          <p className="text-xs text-slate-500 font-semibold leading-relaxed">
            Verify you understand these execution mechanics before unlocking the Level 2 Knowledge Test.
          </p>
          <div className="space-y-2">
            {[
              { id: 1, text: "I can identify candle anatomy (OHLC)." },
              { id: 2, text: "I understand premium vs discount ranges." },
              { id: 3, text: "I can distinguish sweeps from breakouts." },
              { id: 4, text: "I know how session windows affect volume." }
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
    </L2Frame>
  );
};
