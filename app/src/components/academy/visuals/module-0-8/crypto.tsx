"use client";

import React, { useState } from "react";
import { 
  Compass, 
  TrendingUp, 
  XCircle, 
  CheckCircle2, 
  AlertTriangle, 
  Activity, 
  ArrowRight, 
  ShieldAlert,
  Sliders,
  DollarSign,
  Layers,
  Database,
  ArrowUpRight,
  RefreshCw,
  Info
} from "lucide-react";
import { 
  InstitutionalFrame, 
  MentorInsight, 
  MiniCandle,
  StepWorkflow,
  PracticeDrill,
  DebriefDashboard,
  ReadingQualityBadge
} from "./shared";

// ==========================================
// CARD 1: CryptoLocationFoundation
// ==========================================
export const CryptoLocationFoundation = () => {
  const [selectedCoord, setSelectedCoord] = useState<string>("range");

  const coordinates = [
    {
      id: "btc",
      name: "Bitcoin (BTC) Pull",
      role: "Bitcoin Market Influence",
      color: "amber",
      desc: "Bitcoin's location acts as a strong pulling force. If BTC is at daily resistance, altcoin breakout wicks are highly likely to fail. Always check BTC location first.",
      candles: [{ color: "rose", h: 30, uw: 10, lw: 20 }]
    },
    {
      id: "range",
      name: "Range Boundary",
      role: "Immediate Boundaries",
      color: "slate",
      desc: "The local range ceiling or floor. Outer edges provide high-information behavior; the middle zone is noise.",
      candles: [{ color: "teal", h: 15, uw: 5, lw: 5 }]
    },
    {
      id: "liquidity",
      name: "Liquidation Area",
      role: "Exit Orders",
      color: "purple",
      desc: "Obvious peaks and troughs where exit orders group. These draw price to match orders.",
      candles: [{ color: "purple", h: 10, uw: 40, lw: 10 }]
    },
    {
      id: "venue",
      name: "Spot vs Futures contracts",
      role: "Market Source Check",
      color: "teal",
      desc: "Check if spot demand confirms leverage-driven futures wicks. True breakouts require spot price acceptance.",
      candles: [{ color: "teal", h: 35, uw: 5, lw: 5 }]
    }
  ];

  const active = coordinates.find(c => c.id === selectedCoord) || coordinates[0];

  return (
    <InstitutionalFrame label="Crypto Location Radar" status="COORDINATE SCANNER">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-700 max-w-xl text-center leading-relaxed whitespace-normal break-words">
          Interactive Map: Select a coordinate layer to audit how it shapes the local crypto candle's reading quality.
        </p>

        {/* Radar Map Visual */}
        <div className="w-full bg-[#071B36] rounded-2xl p-6 border border-slate-800 flex flex-col items-center justify-center relative overflow-hidden min-h-[220px]">
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
          
          {/* Radar Circles */}
          <div className="w-36 h-36 rounded-full border border-slate-800 flex items-center justify-center relative z-10">
            <div className="w-24 h-24 rounded-full border border-slate-800 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border border-slate-800/80 flex items-center justify-center bg-slate-900/50">
                <MiniCandle color="teal" bodyHeight={12} upperWick={5} lowerWick={5} />
              </div>
            </div>

            {/* Interactive Coordinate Nodes */}
            <button 
              onClick={() => setSelectedCoord("btc")}
              className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 py-0.5 rounded text-[8px] font-mono font-bold transition-all ${
                selectedCoord === "btc" ? "bg-amber-500 text-slate-950 scale-105" : "bg-slate-800 text-slate-400 hover:bg-slate-700"
              }`}
            >
              BITCOIN PULL
            </button>

            <button 
              onClick={() => setSelectedCoord("range")}
              className={`absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 px-2 py-0.5 rounded text-[8px] font-mono font-bold transition-all ${
                selectedCoord === "range" ? "bg-slate-400 text-slate-950 scale-105" : "bg-slate-800 text-slate-400 hover:bg-slate-700"
              }`}
            >
              RANGE EDGE
            </button>

            <button 
              onClick={() => setSelectedCoord("liquidity")}
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 px-2 py-0.5 rounded text-[8px] font-mono font-bold transition-all ${
                selectedCoord === "liquidity" ? "bg-purple-50 text-purple-750 scale-105" : "bg-slate-800 text-slate-400 hover:bg-slate-700"
              }`}
            >
              EXIT AREA
            </button>

            <button 
              onClick={() => setSelectedCoord("venue")}
              className={`absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 px-2 py-0.5 rounded text-[8px] font-mono font-bold transition-all ${
                selectedCoord === "venue" ? "bg-teal-500 text-slate-950 scale-105" : "bg-slate-800 text-slate-400 hover:bg-slate-700"
              }`}
            >
              SPOT vs FUTURES
            </button>
          </div>
        </div>

        {/* Details Panel */}
        <div className="w-full bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[9px] font-mono text-slate-650 uppercase tracking-widest leading-none block">{active.role}</span>
              <span className={`text-[7px] font-mono font-bold px-1.5 py-0.5 rounded uppercase ${
                active.color === "teal" ? "bg-teal-50 text-teal-700 border border-teal-100" :
                active.color === "amber" ? "bg-amber-50 text-amber-700 border border-amber-100" :
                active.color === "purple" ? "bg-purple-50 text-purple-700 border border-purple-100" :
                "bg-slate-50 text-slate-700 border border-slate-100"
              }`}>
                {active.color}
              </span>
            </div>
            <h5 className="text-sm font-black text-[#071B36] uppercase tracking-tight mb-1 whitespace-normal break-words">{active.name}</h5>
            <p className="text-xs text-slate-600 leading-relaxed whitespace-normal break-words">{active.desc}</p>
          </div>
        </div>

        <MentorInsight 
          text="A crypto candle is only as useful as the ground it stands on. Locate the asset across all major coordinates before you trust the move." 
          analogy="A beautiful house built on a mudslide zone is worthless. The local shape of the house (the candle) doesn't matter if the location coordinate is unstable."
        />
      </div>
    </InstitutionalFrame>
  );
};

// ==========================================
// CARD 2: CryptoBtcLocationContext
// ==========================================
export const CryptoBtcLocationContext = () => {
  const [btcState, setBtcState] = useState<"resistance" | "supported">("resistance");

  return (
    <InstitutionalFrame label="Bitcoin Pull Overlay" status="BTC ALIGNMENT">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-700 max-w-xl text-center leading-relaxed whitespace-normal break-words">
          Interactive Scenario: Toggle Bitcoin's structural location to see how it affects the altcoin breakout quality.
        </p>

        {/* Toggle Controls */}
        <div className="flex bg-slate-100 p-1 rounded-xl shrink-0">
          <button
            onClick={() => setBtcState("resistance")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              btcState === "resistance" ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600"
            }`}
          >
            BTC Under Resistance
          </button>
          <button
            onClick={() => setBtcState("supported")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              btcState === "supported" ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600"
            }`}
          >
            BTC Holding Support
          </button>
        </div>

        {/* Dual Chart Visual */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* BTC Index */}
          <div className="bg-[#071B36] rounded-xl p-4 border border-slate-800 flex flex-col justify-between relative min-h-[160px]">
            <span className="text-[8px] font-mono text-slate-400 uppercase tracking-wider absolute top-2 left-2 font-bold">Bitcoin Price location</span>
            
            <div className="absolute top-[35%] left-0 right-0 h-px border-t border-dashed border-rose-500/30" />
            
            <div className="w-full flex justify-center items-end h-full pt-6 pb-2 z-10">
              {btcState === "resistance" ? (
                <div className="flex flex-col items-center">
                  <MiniCandle color="rose" bodyHeight={15} upperWick={20} lowerWick={5} />
                  <span className="text-[7px] font-mono text-rose-400 font-bold mt-1">Stalling Under Resistance</span>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <MiniCandle color="teal" bodyHeight={30} upperWick={5} lowerWick={10} />
                  <span className="text-[7px] font-mono text-teal-400 font-bold mt-1">Holding Support Floor</span>
                </div>
              )}
            </div>
          </div>

          {/* Altcoin breakout */}
          <div className="bg-[#071B36] rounded-xl p-4 border border-slate-800 flex flex-col justify-between relative min-h-[160px]">
            <span className="text-[8px] font-mono text-slate-400 uppercase tracking-wider absolute top-2 left-2 font-bold">Altcoin Breakout Test</span>
            
            <div className="absolute top-[40%] left-0 right-0 h-px border-t border-dashed border-teal-500/30" />
            
            <div className="w-full flex justify-center items-end h-full pt-6 pb-2 z-10">
              {btcState === "resistance" ? (
                <div className="flex flex-col items-center">
                  <MiniCandle color="rose" bodyHeight={15} upperWick={30} lowerWick={5} />
                  <span className="text-[7px] font-mono text-rose-400 font-bold mt-1">False breakout Wick</span>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <MiniCandle color="teal" bodyHeight={35} upperWick={5} lowerWick={5} />
                  <span className="text-[7px] font-mono text-teal-400 font-bold mt-1">Sustained Breakout Close</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Readout Rating */}
        <div className="w-full bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm flex justify-between items-center gap-4">
          <div className="flex-1 min-w-0">
            <span className="text-[8px] font-mono text-slate-650 uppercase tracking-widest leading-none block mb-1">Altcoin Location Quality</span>
            <h5 className="text-xs font-black text-[#071B36] uppercase tracking-tight whitespace-normal break-words">
              {btcState === "resistance" ? "Mixed / Unstable Context" : "Clear / Supported Context"}
            </h5>
          </div>
          <span className={`text-[8px] font-mono font-black px-2 py-1 rounded border shrink-0 ${
            btcState === "resistance" ? "bg-rose-50 text-rose-700 border-rose-200" : "bg-teal-50 text-teal-700 border-teal-200"
          }`}>
            {btcState === "resistance" ? "LOW QUALITY" : "HIGH QUALITY"}
          </span>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

// ==========================================
// CARD 3: CryptoRangeEdgeVsMiddle
// ==========================================
export const CryptoRangeEdgeVsMiddle = () => {
  const [selectedZone, setSelectedZone] = useState<"edge" | "middle">("edge");

  return (
    <InstitutionalFrame label="Range Boundary Filter" status="RANGE COORDINATES">
      <div className="w-full flex flex-col gap-6 items-center">
        {/* Toggle Controls */}
        <div className="flex bg-slate-100 p-1 rounded-xl shrink-0">
          <button
            onClick={() => setSelectedZone("edge")}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedZone === "edge" ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600"
            }`}
          >
            Range Edges (High Info)
          </button>
          <button
            onClick={() => setSelectedZone("middle")}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedZone === "middle" ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600"
            }`}
          >
            Range Middle (Noise)
          </button>
        </div>

        {/* Range Chart Representation */}
        <div className="w-full bg-[#071B36] rounded-2xl p-4 border border-slate-800 relative min-h-[220px] flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
          
          {/* Upper Edge zone */}
          <div className={`absolute top-2 left-0 right-0 h-8 border-y flex items-center justify-between px-4 transition-all duration-300 ${
            selectedZone === "edge" ? "bg-teal-500/20 border-teal-500/40" : "bg-transparent border-slate-800/10"
          }`}>
            <span className="text-[7px] font-mono text-slate-400 font-bold uppercase tracking-wider">Upper Range Edge (Sell coordinate)</span>
          </div>

          {/* Middle zone */}
          <div className={`absolute top-[40%] bottom-[40%] left-0 right-0 border-y flex items-center justify-between px-4 transition-all duration-300 ${
            selectedZone === "middle" ? "bg-amber-500/20 border-amber-500/40" : "bg-transparent border-slate-800/10"
          }`}>
            <span className="text-[7px] font-mono text-slate-400 font-bold uppercase tracking-wider">Range middle noise (Balanced zone)</span>
          </div>

          {/* Lower Edge zone */}
          <div className={`absolute bottom-2 left-0 right-0 h-8 border-y flex items-center justify-between px-4 transition-all duration-300 ${
            selectedZone === "edge" ? "bg-teal-500/20 border-teal-500/40" : "bg-transparent border-slate-800/10"
          }`}>
            <span className="text-[7px] font-mono text-slate-400 font-bold uppercase tracking-wider">Lower Range Edge (Buy coordinate)</span>
          </div>

          <div className="relative z-10 w-full flex justify-around items-end h-28 pt-10">
            {selectedZone === "edge" ? (
              <>
                <div className="flex flex-col items-center">
                  <span className="text-[6px] font-mono text-teal-400 font-bold mb-1">Defended Rejection</span>
                  <MiniCandle color="rose" bodyHeight={10} upperWick={5} lowerWick={30} />
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[6px] font-mono text-teal-400 font-bold mb-1">Accepted Breakout</span>
                  <MiniCandle color="teal" bodyHeight={35} upperWick={5} lowerWick={5} />
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col items-center relative z-20">
                  <span className="text-[6px] font-mono text-amber-400 font-bold mb-1">Strong Looking Candle</span>
                  <MiniCandle color="teal" bodyHeight={35} upperWick={5} lowerWick={5} />
                  <div className="absolute top-12 bg-slate-900/90 border border-slate-700/80 p-2 rounded text-[7px] text-slate-300 w-24 text-center shadow-lg">
                    Chops immediately because location is noisy center.
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[6px] font-mono text-slate-400 mb-1">Immediate Chop</span>
                  <MiniCandle color="rose" bodyHeight={25} upperWick={10} lowerWick={10} />
                </div>
              </>
            )}
          </div>
        </div>

        {/* Text descriptions */}
        <div className="w-full bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm">
          {selectedZone === "edge" ? (
            <div className="flex gap-3">
              <CheckCircle2 className="text-teal-600 shrink-0" size={18} />
              <div>
                <h5 className="text-xs font-black text-[#071B36] uppercase mb-1">Edges Force Decisions</h5>
                <p className="text-xs text-slate-600 leading-relaxed whitespace-normal break-words">
                  Because key institutional orders sit outside range extremes, price is forced to show defense (rejection) or breakout validation (acceptance). High information zone.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex gap-3">
              <ShieldAlert className="text-amber-500 shrink-0" size={18} />
              <div>
                <h5 className="text-xs font-black text-[#071B36] uppercase mb-1">Midpoint Chop & Decoy Candles</h5>
                <p className="text-xs text-slate-600 leading-relaxed whitespace-normal break-words">
                  The range center is a value equilibrium. Candles here look active and fast, but are highly random and lead to immediate chop. Devalue midpoint candle wicks.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </InstitutionalFrame>
  );
};

// ==========================================
// CARD 4: CryptoPriorHighLowLocation
// ==========================================
export const CryptoPriorHighLowLocation = () => {
  const [selectedPath, setSelectedPath] = useState<string>("sweep");

  const paths = [
    {
      id: "sweep",
      name: "Sweep & Return Inside",
      status: "REJECTION SWEEP",
      color: "purple",
      candles: [
        { color: "teal", h: 30, uw: 10, lw: 5 },
        { color: "rose", h: 10, uw: 45, lw: 5 } // Spiked and closed low
      ],
      desc: "Price spikes past the prior swing high to trigger resting buy-stops and liquidate shorts, but immediately wicks and closes back inside. Low quality breakout; high quality rejection."
    },
    {
      id: "accept",
      name: "Sustained Acceptance",
      status: "BREAKOUT VALIDATION",
      color: "teal",
      candles: [
        { color: "teal", h: 30, uw: 5, lw: 5 },
        { color: "teal", h: 35, uw: 5, lw: 5 }, // Clean close above prior high
        { color: "slate", h: 10, uw: 5, lw: 5 } // Hold above
      ],
      desc: "Price breaks past the prior swing high and closes strongly above it with a solid green body. Subsequent candles consolidate, confirming structural acceptance."
    }
  ];

  const active = paths.find(p => p.id === selectedPath) || paths[0];

  return (
    <InstitutionalFrame label="Layer 2: Swing Test Audits" status="SWING COORDINATES">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-700 max-w-xl text-center leading-relaxed whitespace-normal break-words">
          Interactive Audit: Select a prior swing scenario to view the candle wicks and coordinate outcomes.
        </p>

        {/* Chart representation */}
        <div className="w-full bg-[#071B36] rounded-2xl p-4 border border-slate-800 relative min-h-[200px] flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
          
          {/* Prior High Reference Line */}
          <div className="absolute top-[40%] left-0 right-0 h-px border-t border-dashed border-teal-500/60 z-10 flex items-center justify-between px-4">
            <span className="bg-[#071B36] text-teal-400 text-[8px] font-mono px-2 py-0.5 border border-teal-500/20 rounded -translate-y-1/2">
              PRIOR WEEKLY SWING HIGH
            </span>
          </div>

          <div className="relative z-10 w-full flex justify-between items-end h-32 pt-4">
            {/* Left: Prior Peak Landmark */}
            <div className="flex items-end gap-1 border-r border-slate-800/60 pr-4">
              <div className="flex flex-col items-center">
                <span className="text-[6px] font-mono text-slate-400 mb-1">Landmark</span>
                <MiniCandle color="teal" bodyHeight={15} upperWick={20} lowerWick={5} />
              </div>
            </div>

            {/* Right: Path candles */}
            <div className="flex-1 flex justify-center items-end gap-3 pl-4">
              {active.candles.map((c, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-[6px] font-mono text-slate-400 mb-1">
                    {i === 0 ? "Approach" : i === 1 ? "Test" : "Follow"}
                  </span>
                  <MiniCandle 
                    color={c.color as any}
                    bodyHeight={c.h}
                    upperWick={c.uw}
                    lowerWick={c.lw}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="w-full grid grid-cols-2 gap-2">
          {paths.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedPath(p.id)}
              className={`px-2 py-2 rounded-xl border text-[9px] font-bold text-center transition-all cursor-pointer break-words whitespace-normal leading-tight ${
                selectedPath === p.id 
                  ? "bg-[#071B36] text-white border-[#071B36]" 
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* Detail text */}
        <div className="w-full bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm flex flex-col gap-2">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 flex-wrap gap-2">
            <h5 className="text-xs font-black text-[#071B36] uppercase tracking-tight whitespace-normal break-words">{active.name}</h5>
            <span className={`text-[8px] font-mono font-black px-2 py-0.5 rounded border ${
              active.color === "teal" ? "bg-teal-50 text-teal-700 border-teal-200" : "bg-purple-50 text-purple-700 border-purple-200"
            }`}>
              {active.status}
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed whitespace-normal break-words">{active.desc}</p>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

// ==========================================
// CARD 5: CryptoLiquidityLocation
// ==========================================
export const CryptoLiquidityLocation = () => {
  const [liquidState, setLiquidState] = useState<"build" | "sweep">("build");

  return (
    <InstitutionalFrame label="Automatic Exit Order Map" status="LIQUIDITY PATHS">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-700 max-w-xl text-center leading-relaxed whitespace-normal break-words">
          Interactive Scenario: See how retail stops cluster below equal lows and how the market sweeps them to match order blocks.
        </p>

        {/* Toggle Buttons */}
        <div className="flex bg-slate-100 p-1 rounded-xl shrink-0">
          <button
            onClick={() => setLiquidState("build")}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              liquidState === "build" ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600"
            }`}
          >
            1. Liquidity Building
          </button>
          <button
            onClick={() => setLiquidState("sweep")}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              liquidState === "sweep" ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600"
            }`}
          >
            2. Liquidity Sweep
          </button>
        </div>

        {/* Liquidity Chart Representation */}
        <div className="w-full bg-[#071B36] rounded-2xl p-4 border border-slate-800 relative min-h-[200px] flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
          
          {/* Support Line */}
          <div className="absolute bottom-[35%] left-0 right-0 h-px border-t border-slate-700/80 z-10 flex items-center justify-between px-4">
            <span className="bg-[#071B36] text-slate-400 text-[8px] font-mono px-2 py-0.5 border border-slate-850 rounded -translate-y-1/2">
              EQUAL LOWS SUPPORT FLOOR ($100.00)
            </span>
          </div>

          {/* Equal Lows representation */}
          <div className="relative z-10 w-full flex justify-center items-end h-32 pt-4 gap-6">
            <div className="flex flex-col items-center">
              <span className="text-[6px] font-mono text-slate-400 mb-1">Low A</span>
              <MiniCandle color="rose" bodyHeight={15} upperWick={5} lowerWick={15} />
            </div>

            <div className="flex flex-col items-center">
              <span className="text-[6px] font-mono text-slate-400 mb-1">Low B</span>
              <MiniCandle color="rose" bodyHeight={20} upperWick={5} lowerWick={10} />
            </div>

            {liquidState === "build" ? (
              <div className="flex flex-col items-center relative">
                <span className="text-[6px] font-mono text-slate-400 mb-1">Resting Orders</span>
                <div className="w-10 h-10 bg-purple-500/20 border border-purple-500/40 rounded-full flex items-center justify-center animate-pulse">
                  <Database size={12} className="text-purple-400" />
                </div>
                <span className="text-[5px] font-mono text-purple-400 uppercase tracking-widest absolute top-12 font-black">Exit Orders</span>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <span className="text-[6px] font-mono text-purple-400 font-bold mb-1">Sweep Wick</span>
                <MiniCandle color="rose" bodyHeight={12} upperWick={5} lowerWick={45} />
              </div>
            )}
          </div>
        </div>

        {/* Explain Card */}
        <div className="w-full bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm flex flex-col gap-2">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 flex-wrap gap-2">
            <h5 className="text-xs font-black text-[#071B36] uppercase tracking-tight">
              {liquidState === "build" ? "Liquidity accumulation" : "Liquidity triggered & matched"}
            </h5>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed whitespace-normal break-words">
            {liquidState === "build" 
              ? "Because retail traders see 'equal lows' as support, thousands place their stop-loss sell orders right below the line. This creates a dense coordinate of sell stops."
              : "Large market operators run price below the support floor to trigger these sell stops, matching their buy orders against the forced sell volume. Watch the close to confirm rejection or acceptance."}
          </p>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

// ==========================================
// CARD 6: CryptoSpotPerpLocationDisagreement
// ==========================================
export const CryptoSpotPerpLocationDisagreement = () => {
  const [alignment, setAlignment] = useState<"disagree" | "agree">("disagree");

  return (
    <InstitutionalFrame label="Cross-Market Audit" status="SPOT / PERP SCANNER">
      <div className="w-full flex flex-col gap-6 items-center">
        {/* Toggle */}
        <div className="flex bg-slate-100 p-1 rounded-xl shrink-0">
          <button
            onClick={() => setAlignment("disagree")}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              alignment === "disagree" ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600"
            }`}
          >
            Venue Disagreement
          </button>
          <button
            onClick={() => setAlignment("agree")}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              alignment === "agree" ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600"
            }`}
          >
            Venue Agreement
          </button>
        </div>

        {/* Dual Panel */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Spot Market */}
          <div className="bg-[#071B36] rounded-xl p-4 border border-slate-800 flex flex-col justify-between relative min-h-[160px]">
            <span className="text-[8px] font-mono text-slate-400 uppercase tracking-wider absolute top-2 left-2 font-bold">Spot Market (Real Buying)</span>
            
            <div className="absolute top-[35%] left-0 right-0 h-px border-t border-dashed border-slate-700" />
            
            <div className="w-full flex justify-center items-end h-full pt-6 pb-2 z-10">
              {alignment === "disagree" ? (
                <div className="flex flex-col items-center">
                  <MiniCandle color="rose" bodyHeight={15} upperWick={5} lowerWick={5} />
                  <span className="text-[7px] font-mono text-rose-400 font-bold mt-1">Trapped Below Ceiling</span>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <MiniCandle color="teal" bodyHeight={35} upperWick={5} lowerWick={5} />
                  <span className="text-[7px] font-mono text-teal-400 font-bold mt-1">Accepted Above Ceiling</span>
                </div>
              )}
            </div>
          </div>
 
          {/* Perp Market */}
          <div className="bg-[#071B36] rounded-xl p-4 border border-slate-800 flex flex-col justify-between relative min-h-[160px]">
            <span className="text-[8px] font-mono text-slate-400 uppercase tracking-wider absolute top-2 left-2 font-bold">Futures Market (Borrowed Trades)</span>
            
            <div className="absolute top-[35%] left-0 right-0 h-px border-t border-dashed border-slate-700" />
            
            <div className="w-full flex justify-center items-end h-full pt-6 pb-2 z-10">
              {alignment === "disagree" ? (
                <div className="flex flex-col items-center">
                  <MiniCandle color="teal" bodyHeight={25} upperWick={30} lowerWick={5} />
                  <span className="text-[7px] font-mono text-teal-400 font-bold mt-1">Wick Spiked Above Ceiling</span>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <MiniCandle color="teal" bodyHeight={35} upperWick={5} lowerWick={5} />
                  <span className="text-[7px] font-mono text-teal-400 font-bold mt-1">Accepted Above Ceiling</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Verdict Panel */}
        <div className="w-full bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm flex flex-col gap-2">
          {alignment === "disagree" ? (
            <div className="flex gap-3">
              <ShieldAlert className="text-amber-500 shrink-0" size={18} />
              <div>
                <h5 className="text-xs font-black text-amber-800 uppercase mb-1">Leverage Distortion Trap</h5>
                <p className="text-xs text-slate-600 leading-relaxed whitespace-normal break-words">
                  The perpetual contract spikes past the range ceiling, but spot shows price is trapped below. This tells you the move is driven by leveraged contract pressure. Lower reading quality.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex gap-3">
              <CheckCircle2 className="text-teal-600 shrink-0" size={18} />
              <div>
                <h5 className="text-xs font-black text-teal-800 uppercase mb-1">Aligned Breakout</h5>
                <p className="text-xs text-slate-600 leading-relaxed whitespace-normal break-words">
                  Both spot and futures markets accept the coordinates above the range high. The breakout is backed by real asset accumulation, confirming high reading quality.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </InstitutionalFrame>
  );
};

// ==========================================
// CARD 7: CryptoDexCexLocation
// ==========================================
export const CryptoDexCexLocation = () => {
  const [selectedVenue, setSelectedVenue] = useState<"cex" | "dex">("dex");

  return (
    <InstitutionalFrame label="Venue Location Scanner" status="LIQUIDITY CORRELATION">
      <div className="w-full flex flex-col gap-6 items-center">
        {/* Toggles */}
        <div className="flex bg-slate-100 p-1 rounded-xl shrink-0">
          <button
            onClick={() => setSelectedVenue("dex")}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedVenue === "dex" ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600"
            }`}
          >
            DEX-Only Pool Spike
          </button>
          <button
            onClick={() => setSelectedVenue("cex")}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedVenue === "cex" ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600"
            }`}
          >
            CEX Market Agreement
          </button>
        </div>

        {/* Three venue displays */}
        <div className="w-full grid grid-cols-3 gap-2">
          {/* CEX Spot */}
          <div className="bg-[#071B36] rounded-xl p-3 border border-slate-800 flex flex-col justify-between items-center relative min-h-[140px]">
            <span className="text-[6px] font-mono text-slate-400 uppercase tracking-wider text-center font-bold">CEX Spot Market</span>
            <div className="w-full flex justify-center items-end h-16 pt-2 pb-2">
              <MiniCandle color="slate" bodyHeight={15} upperWick={10} lowerWick={10} />
            </div>
            <span className="text-[5px] font-mono text-slate-700 text-center leading-none">Binance/Coinbase</span>
          </div>
 
          {/* CEX Perp */}
          <div className="bg-[#071B36] rounded-xl p-3 border border-slate-800 flex flex-col justify-between items-center relative min-h-[140px]">
            <span className="text-[6px] font-mono text-slate-400 uppercase tracking-wider text-center font-bold">CEX Futures Market</span>
            <div className="w-full flex justify-center items-end h-16 pt-2 pb-2">
              <MiniCandle color="slate" bodyHeight={12} upperWick={8} lowerWick={8} />
            </div>
            <span className="text-[5px] font-mono text-slate-700 text-center leading-none">Binance Futures</span>
          </div>
 
          {/* DEX Pool */}
          <div className="bg-[#071B36] rounded-xl p-3 border border-slate-800 flex flex-col justify-between items-center relative min-h-[140px]">
            <span className="text-[6px] font-mono text-slate-400 uppercase tracking-wider text-center font-bold">DEX Pool</span>
            <div className="w-full flex justify-center items-end h-16 pt-2 pb-2">
              {selectedVenue === "dex" ? (
                <MiniCandle color="rose" bodyHeight={10} upperWick={5} lowerWick={45} />
              ) : (
                <MiniCandle color="slate" bodyHeight={14} upperWick={10} lowerWick={10} />
              )}
            </div>
            <span className="text-[5px] font-mono text-slate-700 text-center leading-none">Uniswap V3 Pool</span>
          </div>
        </div>

        {/* Explain Card */}
        <div className="w-full bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm flex flex-col gap-2">
          <h5 className="text-xs font-black text-[#071B36] uppercase tracking-tight">
            {selectedVenue === "dex" ? "Thin DEX Pool Wick (Misleading)" : "Exchange Coordinates Aligned (True Move)"}
          </h5>
          <p className="text-xs text-slate-600 leading-relaxed whitespace-normal break-words">
            {selectedVenue === "dex" 
              ? "A single large market sell order drained shallow pool liquidity on Uniswap, printing a deep 15% wick. However, CEX markets show no matching drop. The move is pool-specific noise."
              : "All venues display similar candle coordinates. The price change represents broad capital shifting across the entire market. High reading quality."}
          </p>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

// ==========================================
// CARD 8: CryptoBreakoutLocationAcceptance
// ==========================================
export const CryptoBreakoutLocationAcceptance = () => {
  const [outcome, setOutcome] = useState<string>("reject");

  const outcomes = [
    {
      id: "reject",
      name: "Overshoot & Return",
      status: "TRAP REJECTION",
      color: "rose",
      candles: [
        { color: "teal", h: 30, uw: 15, lw: 5 },
        { color: "rose", h: 35, uw: 5, lw: 10 }
      ],
      desc: "Price breaches the range ceiling to trigger breakout buy orders, but instantly engulfs back inside. The location rejected expansion."
    },
    {
      id: "hold",
      name: "Acceptance & Hold",
      status: "VALID MOVEMENT",
      color: "teal",
      candles: [
        { color: "teal", h: 35, uw: 5, lw: 5 },
        { color: "slate", h: 10, uw: 5, lw: 5 },
        { color: "teal", h: 20, uw: 5, lw: 5 }
      ],
      desc: "Price closes cleanly above the range high, and subsequent candles consolidate above, building a new floor. Coordinate accepted."
    }
  ];

  const active = outcomes.find(o => o.id === outcome) || outcomes[0];

  return (
    <InstitutionalFrame label="Breakout Location Lab" status="ACCEPTANCE VERIFIER">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-700 max-w-xl text-center leading-relaxed whitespace-normal break-words">
          Interactive Lab: Choose a scenario to observe breakout acceptance at range coordinates.
        </p>

        {/* Mock Chart */}
        <div className="w-full bg-[#071B36] rounded-2xl p-4 border border-slate-800 relative min-h-[200px] flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
          
          {/* Ceiling line */}
          <div className="absolute top-[45%] left-0 right-0 h-px border-t border-dashed border-teal-500/40 z-10 flex items-center justify-between px-4">
            <span className="bg-[#071B36] text-teal-400 text-[8px] font-mono px-2 py-0.5 border border-teal-500/20 rounded -translate-y-1/2">
              RANGE CEILING
            </span>
          </div>

          <div className="relative z-10 w-full flex justify-end items-end h-32 pt-4 pr-6">
            <div className="flex items-end gap-3">
              {active.candles.map((c, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-[6px] font-mono text-slate-400 mb-1">
                    {i === 0 ? "Test" : i === 1 ? "Expansion" : "Consolidate"}
                  </span>
                  <MiniCandle 
                    color={c.color as any}
                    bodyHeight={c.h}
                    upperWick={c.uw}
                    lowerWick={c.lw}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="w-full grid grid-cols-2 gap-2">
          {outcomes.map((o) => (
            <button
              key={o.id}
              onClick={() => setOutcome(o.id)}
              className={`px-2 py-2 rounded-xl border text-[9px] font-bold text-center transition-all cursor-pointer break-words whitespace-normal leading-tight ${
                outcome === o.id 
                  ? "bg-[#071B36] text-white border-[#071B36]" 
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
              }`}
            >
              {o.name}
            </button>
          ))}
        </div>

        {/* Details card */}
        <div className="w-full bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm flex flex-col gap-2">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 flex-wrap gap-2">
            <h5 className="text-xs font-black text-[#071B36] uppercase tracking-tight">{active.name}</h5>
            <ReadingQualityBadge quality={active.status} />
          </div>
          <p className="text-xs text-slate-600 leading-relaxed whitespace-normal break-words">{active.desc}</p>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

// ==========================================
// CARD 9: CryptoLocationFirstWorkflow
// ==========================================
export const CryptoLocationFirstWorkflow = () => {
  const steps = [
    {
      title: "1. Locate the Asset",
      desc: "Identify range limits, swing points, and liquidation levels to establish local boundaries.",
      icon: Compass,
      status: "COORDINATES SCAN"
    },
    {
      title: "2. Check BTC Location",
      desc: "Overlay BTC index status. Avoid buying alt breakouts if BTC sits at key resistance coordinates.",
      icon: Layers,
      status: "BTC CHECK"
    },
    {
      title: "3. Spot vs Futures Audit",
      desc: "Cross-check futures with spot charts to verify if spot buyers are accepting the price level.",
      icon: Sliders,
      status: "ALIGNMENT SCAN"
    },
    {
      title: "4. Observe Behavior",
      desc: "Watch the candle close coordinates. Audit for sweep rejection, range return, or acceptance hold.",
      icon: Activity,
      status: "BEHAVIOR READ"
    },
    {
      title: "5. Determine Quality",
      desc: "Classify reading as Clear, Mixed, or Unclear. Stand aside if price resides in midpoint range noise.",
      icon: CheckCircle2,
      status: "FINAL RATING"
    }
  ];

  return (
    <StepWorkflow
      steps={steps}
      label="Location-First Audit Checklist"
      status="WORKFLOW RUNNING"
      desc="Interactive workflow: Run through the mental audit stages to classify the reading quality of any crypto move."
    />
  );
};

export const CryptoLocationQualityPracticeDrill = () => {
  const options = [
    {
      id: "A",
      text: "Clear bullish reading because the altcoin printed a strong candle near its high, showing immediate buyer control.",
      isCorrect: false,
      feedback: "Incorrect. The candle is active, but its location in the middle of the range, combined with BTC's resistance hurdle, devalues the quality to midpoint noise."
    },
    {
      id: "B",
      text: "Strong location because any large crypto candle represents high institutional volume and must be traded.",
      isCorrect: false,
      feedback: "Incorrect. Not all crypto chart areas carry equal weight. Location changes how useful the evidence is; in the middle of a range, it is highly random."
    },
    {
      id: "C",
      text: "Weak or mixed location because the move formed in the middle of the range, BTC is at a difficult location, and spot/perp support is not clean.",
      isCorrect: true,
      feedback: "Correct! This is a weak or mixed location. The altcoin moved in the middle of its range, BTC is under daily resistance, and the move lacks spot market backing."
    },
    {
      id: "D",
      text: "Guaranteed reversal because BTC is under resistance and the altcoin must drop immediately.",
      isCorrect: false,
      feedback: "Incorrect. BTC resistance does not guarantee an immediate reversal. It only makes the altcoin reading more cautious, urging you to stand aside."
    }
  ];

  const chartPreview = (
    <div className="w-full bg-[#071B36] rounded-2xl p-4 border border-slate-800 relative min-h-[160px] flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      <div className="absolute top-[20%] left-0 right-0 h-px border-t border-slate-800" />
      <span className="text-[6px] font-mono text-slate-400 absolute top-2 left-4">Range High ($1.00)</span>

      <div className="absolute bottom-[20%] left-0 right-0 h-px border-t border-slate-800" />
      <span className="text-[6px] font-mono text-slate-400 absolute bottom-2 left-4">Range Low ($0.80)</span>

      <div className="w-full flex justify-center items-center h-full pt-6 pb-6 z-10 relative">
        <div className="flex flex-col items-center">
          <span className="text-[6px] font-mono text-amber-400 font-bold mb-1">Altcoin Midpoint ($0.90)</span>
          <MiniCandle color="teal" bodyHeight={35} upperWick={5} lowerWick={5} />
          <span className="text-[6px] font-mono text-slate-400 mt-1">Dead Center - No edge</span>
        </div>
      </div>
    </div>
  );

  return (
    <PracticeDrill
      question="An altcoin prints a strong green candle on the 15-minute chart, closing near its high. However, price is in the middle of its local range. BTC is sitting under weekly resistance, and the spot chart shows no confirmation of the perp movement. What is the most disciplined crypto location reading?"
      options={options}
      chartPreview={chartPreview}
      label="Drill Coordinate Audit"
      status="DRILL ACTIVE"
    />
  );
};

export const CryptoLocationDebrief = () => {
  const recapKeys = [
    {
      id: "coordinates",
      title: "Prior Edges First",
      habit: "Identify range extremes and Daily Swings.",
      desc: "Devalue any candle forming in range centers. Edges provide institutional reactions; midpoints provide random retail equilibrium chop.",
      icon: Compass
    },
    {
      id: "btc",
      title: "Bitcoin Pull Index",
      habit: "Check BTC structural limits.",
      desc: "Never audit an altcoin's breakout coordinate without mapping Bitcoin's local structure. A heavy BTC devalues any alt breakout.",
      icon: Layers
    },
    {
      id: "orderbook",
      title: "Spot & Futures Agreement",
      habit: "Cross-check spot market support.",
      desc: "Ensure futures spikes are backed by spot market support. Reject leverage-only squeezes forming in isolation.",
      icon: Database
    }
  ];

  return (
    <DebriefDashboard
      cards={recapKeys}
      label="Location Audit Debrief"
      status="DRILL WRAPUP"
      desc="Interactive Recap: Select a core categories to review the Lurnava crypto location-reading habit."
    />
  );
};
