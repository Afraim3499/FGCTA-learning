"use client";

import React, { useState } from "react";
import { 
  CheckCircle2, 
  ShieldAlert, 
  HelpCircle, 
  Layers, 
  Compass, 
  Database, 
  ArrowRight, 
  Activity, 
  RotateCcw,
  DollarSign,
  TrendingUp,
  Globe
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
// CARD 1: GoldLocationFoundation
// ==========================================
export const GoldLocationFoundation = () => {
  const [selectedCoord, setSelectedCoord] = useState<string>("zone");

  const coordinates = [
    {
      id: "zone",
      name: "Reaction Zone",
      role: "Key Reference Area",
      color: "teal",
      desc: "Broad zones where price has previously changed behavior. When price returns to a reaction zone, study it for rejection or acceptance.",
      candles: [{ color: "teal", h: 25, uw: 5, lw: 5 }]
    },
    {
      id: "landmark",
      name: "Prior High / Low",
      role: "Liquidity Landmarks",
      color: "purple",
      desc: "Prior daily or weekly extremes attract order clusters. Watch if Gold sweeps past them and returns inside, or accepts the new level.",
      candles: [{ color: "purple", h: 15, uw: 30, lw: 5 }]
    },
    {
      id: "middle",
      name: "Range Midpoint Noise",
      role: "Equilibrium Zone",
      color: "slate",
      desc: "The center of a trading range is value equilibrium. Movements here look active but are highly random and lack order density.",
      candles: [{ color: "slate", h: 30, uw: 10, lw: 10 }]
    },
    {
      id: "macro",
      name: "Macro / USD Context",
      role: "Environment Distortion",
      color: "amber",
      desc: "Inflation data, NFP, or DXY moves can print giant candles. Let the initial news dust settle to see where the candle closes.",
      candles: [{ color: "rose", h: 35, uw: 15, lw: 15 }]
    }
  ];

  const active = coordinates.find(c => c.id === selectedCoord) || coordinates[0];

  return (
    <InstitutionalFrame label="Gold Location Radar" status="XAU/USD SCANNER">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-500 max-w-xl text-center leading-relaxed whitespace-normal break-words">
          Interactive Map: Select a coordinate layer to audit how it shapes the quality of a Gold candle reading.
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
              onClick={() => setSelectedCoord("zone")}
              className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 py-0.5 rounded text-[8px] font-mono font-bold transition-all ${
                selectedCoord === "zone" ? "bg-teal-500 text-slate-950 scale-105" : "bg-slate-800 text-slate-400 hover:bg-slate-700"
              }`}
            >
              REACTION ZONE
            </button>

            <button 
              onClick={() => setSelectedCoord("landmark")}
              className={`absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 px-2 py-0.5 rounded text-[8px] font-mono font-bold transition-all ${
                selectedCoord === "landmark" ? "bg-purple-500 text-white scale-105" : "bg-slate-800 text-slate-400 hover:bg-slate-700"
              }`}
            >
              PRIOR SWING
            </button>

            <button 
              onClick={() => setSelectedCoord("middle")}
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 px-2 py-0.5 rounded text-[8px] font-mono font-bold transition-all ${
                selectedCoord === "middle" ? "bg-slate-400 text-slate-950 scale-105" : "bg-slate-800 text-slate-400 hover:bg-slate-700"
              }`}
            >
              RANGE MIDPOINT
            </button>

            <button 
              onClick={() => setSelectedCoord("macro")}
              className={`absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 px-2 py-0.5 rounded text-[8px] font-mono font-bold transition-all ${
                selectedCoord === "macro" ? "bg-amber-500 text-slate-950 scale-105" : "bg-slate-800 text-slate-400 hover:bg-slate-700"
              }`}
            >
              MACRO / USD
            </button>
          </div>
        </div>

        {/* Details Panel */}
        <div className="w-full bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest leading-none block">{active.role}</span>
              <span className={`text-[7px] font-mono font-bold px-1.5 py-0.5 rounded uppercase ${
                active.color === "teal" ? "bg-teal-50 text-teal-700 border border-teal-100" :
                active.color === "purple" ? "bg-purple-50 text-purple-700 border border-purple-100" :
                active.color === "amber" ? "bg-amber-50 text-amber-700 border border-amber-100" :
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
          text="Before trusting a Gold move, locate XAU/USD through reaction zones, prior highs/lows, wick behavior, sweep areas, macro context, higher-timeframe location, close quality, and follow-through." 
          analogy="A candle or wick doesn't tell its own story. The location coordinates around it dictate its structural value."
        />
      </div>
    </InstitutionalFrame>
  );
};

// ==========================================
// CARD 2: GoldReactionZoneLocation
// ==========================================
export const GoldReactionZoneLocation = () => {
  const [outcome, setOutcome] = useState<"rejection" | "acceptance">("rejection");

  return (
    <InstitutionalFrame label="Reaction Zone Board" status="ZONE BEHAVIOR SCANNER">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-500 max-w-xl text-center leading-relaxed whitespace-normal break-words">
          Interactive Scenario: Toggle the behavior outcome to see how price reacts to a major Gold reaction zone.
        </p>

        {/* Toggle Controls */}
        <div className="flex bg-slate-100 p-1 rounded-xl shrink-0">
          <button
            onClick={() => setOutcome("rejection")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              outcome === "rejection" ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600"
            }`}
          >
            Rejection Outcome (Defended)
          </button>
          <button
            onClick={() => setOutcome("acceptance")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              outcome === "acceptance" ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600"
            }`}
          >
            Acceptance Outcome (Breakout)
          </button>
        </div>

        {/* Chart Representation */}
        <div className="w-full bg-[#071B36] rounded-2xl p-4 border border-slate-800 relative min-h-[200px] flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
          
          {/* Reaction Zone Overlay */}
          <div className="absolute top-[35%] bottom-[35%] left-0 right-0 bg-teal-500/10 border-y border-dashed border-teal-500/40 z-10 flex items-center justify-between px-4">
            <span className="text-[7px] font-mono text-teal-400 uppercase tracking-widest font-black">
              DAILY REACTION ZONE ($2030 - $2035)
            </span>
          </div>

          <div className="relative z-20 w-full flex justify-around items-end h-32 pt-6">
            <div className="flex flex-col items-center">
              <span className="text-[6px] font-mono text-slate-500 mb-1">Previous Approach</span>
              <MiniCandle color="rose" bodyHeight={25} upperWick={5} lowerWick={5} />
            </div>

            {outcome === "rejection" ? (
              <>
                <div className="flex flex-col items-center">
                  <span className="text-[6px] font-mono text-rose-400 font-bold mb-1">Overshoot & Wick</span>
                  <MiniCandle color="rose" bodyHeight={10} upperWick={5} lowerWick={30} />
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[6px] font-mono text-teal-400 font-bold mb-1">Rejection Close</span>
                  <MiniCandle color="teal" bodyHeight={35} upperWick={5} lowerWick={5} />
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col items-center">
                  <span className="text-[6px] font-mono text-teal-400 font-bold mb-1">Clean Close Below</span>
                  <MiniCandle color="rose" bodyHeight={35} upperWick={5} lowerWick={5} />
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[6px] font-mono text-slate-500 mb-1">Acceptance Hold</span>
                  <MiniCandle color="rose" bodyHeight={15} upperWick={10} lowerWick={5} />
                </div>
              </>
            )}
          </div>
        </div>

        {/* Verdict Details */}
        <div className="w-full bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm">
          {outcome === "rejection" ? (
            <div className="flex gap-3">
              <CheckCircle2 className="text-teal-600 shrink-0" size={18} />
              <div>
                <h5 className="text-xs font-black text-[#071B36] uppercase mb-1">Defended Coordinate</h5>
                <p className="text-xs text-slate-600 leading-relaxed whitespace-normal break-words">
                  Gold spikes past the zone ceiling to sweep stops, but the sellers force price to close back inside the zone. Subsequent bullish close confirms the zone is defended.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex gap-3">
              <ShieldAlert className="text-rose-500 shrink-0" size={18} />
              <div>
                <h5 className="text-xs font-black text-[#071B36] uppercase mb-1">Structural Acceptance</h5>
                <p className="text-xs text-slate-600 leading-relaxed whitespace-normal break-words">
                  Instead of wicking back, Gold closes strongly below the reaction zone. Subsequent candles consolidate below, confirming the zone is broken and price has accepted lower coordinates.
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
// CARD 3: GoldRangeMiddleNoise
// ==========================================
export const GoldRangeMiddleNoise = () => {
  const [selectedZone, setSelectedZone] = useState<"edge" | "middle">("edge");

  return (
    <InstitutionalFrame label="Range Boundary Filter" status="RANGE MAP">
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
            <span className="text-[7px] font-mono text-slate-400 font-bold uppercase tracking-wider">Range midpoint noise (Equilibrium zone)</span>
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
                  <span className="text-[6px] font-mono text-slate-500 mb-1">Immediate Chop</span>
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
// CARD 4: GoldPriorHighLowLocation
// ==========================================
export const GoldPriorHighLowLocation = () => {
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
    <InstitutionalFrame label="Swing Test Audits" status="SWING COORDINATES">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-500 max-w-xl text-center leading-relaxed whitespace-normal break-words">
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
                <span className="text-[6px] font-mono text-slate-500 mb-1">Landmark</span>
                <MiniCandle color="teal" bodyHeight={15} upperWick={20} lowerWick={5} />
              </div>
            </div>

            {/* Right: Path candles */}
            <div className="flex-1 flex justify-center items-end gap-3 pl-4">
              {active.candles.map((c, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-[6px] font-mono text-slate-500 mb-1">
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
            <ReadingQualityBadge quality={active.status} />
          </div>
          <p className="text-xs text-slate-600 leading-relaxed whitespace-normal break-words">{active.desc}</p>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

// ==========================================
// CARD 5: GoldWickLocationMeaning
// ==========================================
export const GoldWickLocationMeaning = () => {
  const [selectedLoc, setSelectedLoc] = useState<string>("weekly");

  const locations = [
    {
      id: "weekly",
      name: "At Weekly Resistance",
      quality: "HIGH QUALITY",
      color: "teal",
      desc: "Gold spikes into a major weekly resistance and prints a long upper wick. The location is an institutional supply zone. High-quality rejection reading.",
      wick: { color: "rose", h: 10, uw: 35, lw: 5 }
    },
    {
      id: "reaction",
      name: "Inside Daily Reaction Zone",
      quality: "HIGH QUALITY",
      color: "teal",
      desc: "Gold tests a daily reaction area. Buyers reject lower prices immediately, leaving a long lower wick. High-quality accumulation reading.",
      wick: { color: "teal", h: 12, uw: 5, lw: 35 }
    },
    {
      id: "midpoint",
      name: "At Range Midpoint",
      quality: "LOW QUALITY",
      color: "rose",
      desc: "Gold prints a large wick in the dead center of the range. There are no historical orders here. This is likely random spread volatility; ignore this.",
      wick: { color: "slate", h: 15, uw: 20, lw: 20 }
    }
  ];

  const active = locations.find(l => l.id === selectedLoc) || locations[0];

  return (
    <InstitutionalFrame label="Wick Location Audit" status="WICK EVALUATOR">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-500 max-w-xl text-center leading-relaxed whitespace-normal break-words">
          Interactive Comparison: Select a location to see how it dictates the quality of identical candle wicks.
        </p>

        {/* Buttons */}
        <div className="w-full grid grid-cols-3 gap-2">
          {locations.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setSelectedLoc(loc.id)}
              className={`px-1 py-2 rounded-xl border text-[8px] sm:text-[9px] font-bold text-center transition-all cursor-pointer break-words whitespace-normal leading-tight ${
                selectedLoc === loc.id 
                  ? "bg-[#071B36] text-white border-[#071B36]" 
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
              }`}
            >
              {loc.name}
            </button>
          ))}
        </div>

        {/* Visual Display */}
        <div className="w-full bg-[#071B36] rounded-2xl p-4 border border-slate-800 flex flex-col items-center justify-center relative min-h-[160px]">
          <span className="text-[7px] font-mono text-slate-500 uppercase tracking-widest absolute top-2">CANDLE IN CONTEXT</span>
          <div className="z-10 mt-2">
            <MiniCandle 
              color={active.wick.color as any}
              bodyHeight={active.wick.h}
              upperWick={active.wick.uw}
              lowerWick={active.wick.lw}
            />
          </div>
        </div>

        {/* Audit Details */}
        <div className="w-full bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm flex flex-col gap-2">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 flex-wrap gap-2">
            <h5 className="text-xs font-black text-[#071B36] uppercase tracking-tight">{active.name}</h5>
            <ReadingQualityBadge quality={active.quality} />
          </div>
          <p className="text-xs text-slate-600 leading-relaxed whitespace-normal break-words">{active.desc}</p>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

// ==========================================
// CARD 6: GoldSweepLocationAudit
// ==========================================
export const GoldSweepLocationAudit = () => {
  const [sweepState, setSweepState] = useState<"sweep" | "accept">("sweep");

  return (
    <InstitutionalFrame label="Sweep Lab" status="LIQUIDITY AUDITOR">
      <div className="w-full flex flex-col gap-6 items-center">
        {/* Toggle */}
        <div className="flex bg-slate-100 p-1 rounded-xl shrink-0">
          <button
            onClick={() => setSweepState("sweep")}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              sweepState === "sweep" ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600"
            }`}
          >
            Sweep & Return Inside
          </button>
          <button
            onClick={() => setSweepState("accept")}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              sweepState === "accept" ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600"
            }`}
          >
            Acceptance Hold
          </button>
        </div>

        {/* Sweep Chart representation */}
        <div className="w-full bg-[#071B36] rounded-2xl p-4 border border-slate-800 relative min-h-[200px] flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
          
          {/* Prior High Reference Line */}
          <div className="absolute top-[40%] left-0 right-0 h-px border-t border-dashed border-teal-500/60 z-10 flex items-center justify-between px-4">
            <span className="bg-[#071B36] text-teal-400 text-[8px] font-mono px-2 py-0.5 border border-teal-500/20 rounded -translate-y-1/2">
              PRIOR DAILY HIGH ($2045)
            </span>
          </div>

          <div className="relative z-10 w-full flex justify-center items-end h-32 pt-4 gap-6">
            <div className="flex flex-col items-center">
              <span className="text-[6px] font-mono text-slate-500 mb-1">Landmark Peak</span>
              <MiniCandle color="teal" bodyHeight={15} upperWick={20} lowerWick={5} />
            </div>

            {sweepState === "sweep" ? (
              <div className="flex flex-col items-center">
                <span className="text-[6px] font-mono text-rose-400 font-bold mb-1">Sweep Rejection close</span>
                <MiniCandle color="rose" bodyHeight={10} upperWick={45} lowerWick={5} />
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <span className="text-[6px] font-mono text-teal-400 font-bold mb-1">Acceptance Close</span>
                <MiniCandle color="teal" bodyHeight={35} upperWick={5} lowerWick={5} />
              </div>
            )}
          </div>
        </div>

        {/* Explain Card */}
        <div className="w-full bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm flex flex-col gap-2">
          <h5 className="text-xs font-black text-[#071B36] uppercase tracking-tight">
            {sweepState === "sweep" ? "Liquidity Taken & Rejected" : "Breakout Accepted Outside Edge"}
          </h5>
          <p className="text-xs text-slate-600 leading-relaxed whitespace-normal break-words">
            {sweepState === "sweep" 
              ? "Gold spikes past the daily high to trigger buy stops, but the body immediately closes back below $2045. This confirms a false breakout sweep rejection; devalue the bullish attempt."
              : "Gold clears $2045 and closes strongly above it. Subsequent candles hold price above $2045, confirming order flow has accepted the higher coordinate zone."}
          </p>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

// ==========================================
// CARD 7: GoldMacroLocationDistortion
// ==========================================
export const GoldMacroLocationDistortion = () => {
  const [macroState, setMacroState] = useState<"spike" | "settle">("spike");

  return (
    <InstitutionalFrame label="Macro Location Board" status="EVENT AUDITOR">
      <div className="w-full flex flex-col gap-6 items-center">
        {/* Toggle */}
        <div className="flex bg-slate-100 p-1 rounded-xl shrink-0">
          <button
            onClick={() => setMacroState("spike")}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              macroState === "spike" ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600"
            }`}
          >
            CPI News Spike (Initial)
          </button>
          <button
            onClick={() => setMacroState("settle")}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              macroState === "settle" ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600"
            }`}
          >
            Candle Close (Settle)
          </button>
        </div>

        {/* Multi-Panel display */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Gold Chart */}
          <div className="bg-[#071B36] rounded-xl p-4 border border-slate-800 flex flex-col justify-between relative min-h-[160px]">
            <span className="text-[8px] font-mono text-slate-400 uppercase tracking-wider absolute top-2 left-2 font-bold">XAU/USD Spot Chart</span>
            
            <div className="absolute top-[35%] left-0 right-0 h-px border-t border-dashed border-teal-500/50" />
            
            <div className="w-full flex justify-center items-end h-full pt-6 pb-2 z-10">
              {macroState === "spike" ? (
                <div className="flex flex-col items-center">
                  <MiniCandle color="teal" bodyHeight={45} upperWick={15} lowerWick={5} />
                  <span className="text-[7px] font-mono text-teal-400 font-bold mt-1">Spiking High ($2065)</span>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <MiniCandle color="rose" bodyHeight={15} upperWick={45} lowerWick={5} />
                  <span className="text-[7px] font-mono text-rose-400 font-bold mt-1">Closed at $2042 (Rejection)</span>
                </div>
              )}
            </div>
          </div>

          {/* DXY (Dollar Index) */}
          <div className="bg-[#071B36] rounded-xl p-4 border border-slate-800 flex flex-col justify-between relative min-h-[160px]">
            <span className="text-[8px] font-mono text-slate-400 uppercase tracking-wider absolute top-2 left-2 font-bold">DXY dollar Index</span>
            
            <div className="absolute top-[65%] left-0 right-0 h-px border-t border-dashed border-rose-500/50" />
            
            <div className="w-full flex justify-center items-end h-full pt-6 pb-2 z-10">
              {macroState === "spike" ? (
                <div className="flex flex-col items-center">
                  <MiniCandle color="rose" bodyHeight={35} upperWick={5} lowerWick={15} />
                  <span className="text-[7px] font-mono text-rose-400 font-bold mt-1">Dumping Hard</span>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <MiniCandle color="teal" bodyHeight={20} upperWick={5} lowerWick={20} />
                  <span className="text-[7px] font-mono text-teal-400 font-bold mt-1">Holding Support Floor</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Verdict Panel */}
        <div className="w-full bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm flex flex-col gap-2">
          {macroState === "spike" ? (
            <div className="flex gap-3">
              <ShieldAlert className="text-amber-500 shrink-0" size={18} />
              <div>
                <h5 className="text-xs font-black text-amber-800 uppercase mb-1">Volatile News Distortion</h5>
                <p className="text-xs text-slate-600 leading-relaxed whitespace-normal break-words">
                  Gold spikes $25 higher during CPI, looking like a major breakout. However, DXY is sweeping support. The location is highly unstable and coordinates cannot be trusted yet.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex gap-3">
              <CheckCircle2 className="text-teal-600 shrink-0" size={18} />
              <div>
                <h5 className="text-xs font-black text-teal-800 uppercase mb-1">News settled close</h5>
                <p className="text-xs text-slate-600 leading-relaxed whitespace-normal break-words">
                  The news volatility settles. Gold closes back inside the range, printing a massive upper wick rejection. DXY holds its support floor. The initial breakout was a coordinate trap.
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
// CARD 8: GoldHtfLocationContext
// ==========================================
export const GoldHtfLocationContext = () => {
  const [htfView, setHtfView] = useState<boolean>(false);

  return (
    <InstitutionalFrame label="Dual-Timeframe Context Overlay" status="HTF COORDINATES">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-500 max-w-xl text-center leading-relaxed whitespace-normal break-words">
          Interactive Scenario: Toggle the Higher-Timeframe (HTF) overlay to see why a clean lower-timeframe push is in a high-risk location.
        </p>

        {/* Toggle Button */}
        <button
          onClick={() => setHtfView(!htfView)}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
            htfView ? "bg-[#071B36] text-white border-[#071B36]" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
          }`}
        >
          {htfView ? "Hide HTF Overlay" : "Show HTF Overlay (Daily)"}
        </button>

        {/* Mock Chart */}
        <div className="w-full bg-[#071B36] rounded-2xl p-4 border border-slate-800 relative min-h-[220px] flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
          
          {/* HTF Resistance Ceiling */}
          <div className={`absolute top-[25%] left-0 right-0 h-10 border-y border-dashed transition-all duration-300 z-20 flex items-center justify-between px-4 ${
            htfView ? "bg-rose-500/10 border-rose-500/40" : "border-transparent"
          }`}>
            {htfView && (
              <span className="text-[7px] font-mono text-rose-400 uppercase tracking-widest font-black">
                DAILY SWING CEILING / RESISTANCE AREA ($2085)
              </span>
            )}
          </div>

          <div className="relative z-10 w-full flex justify-around items-end h-32 pt-10">
            {/* LTF Trend pushes up */}
            <div className="flex flex-col items-center">
              <span className="text-[6px] font-mono text-slate-500 mb-1">LTF Candle 1</span>
              <MiniCandle color="teal" bodyHeight={15} upperWick={5} lowerWick={5} />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[6px] font-mono text-slate-500 mb-1">LTF Candle 2</span>
              <MiniCandle color="teal" bodyHeight={25} upperWick={5} lowerWick={5} />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[6px] font-mono text-teal-400 font-bold mb-1">LTF Breakout</span>
              <MiniCandle color="teal" bodyHeight={35} upperWick={5} lowerWick={5} />
            </div>
          </div>
        </div>

        {/* Explain Card */}
        <div className="w-full bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm flex flex-col gap-2">
          <h5 className="text-xs font-black text-[#071B36] uppercase tracking-tight">
            {htfView ? "Reading Verdict: Mixed / Cautious" : "Reading Verdict: Bullish (Incomplete Context)"}
          </h5>
          <p className="text-xs text-slate-600 leading-relaxed whitespace-normal break-words">
            {htfView 
              ? "With the daily chart overlay, you see the 15-minute trend is running directly into weekly resistance at $2085. The location quality is poor, and daily sellers are likely to step in. Stand aside."
              : "The 15-minute chart shows clean bullish expansion candles. It looks like a great buy setup, but you have no idea where this move is occurring relative to daily limits."}
          </p>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

// ==========================================
// CARD 9: GoldLocationFirstWorkflow
// ==========================================
export const GoldLocationFirstWorkflow = () => {
  const steps = [
    {
      title: "1. Coordinate Scan",
      action: "Map reaction zones and prior swings",
      desc: "Before looking at the candles, identify where XAU/USD is relative to the daily and weekly boundaries. Is price near a reaction zone, prior high/low, or the midpoint?",
      icon: Compass,
      status: "COORDINATES SCAN COMPLETED"
    },
    {
      title: "2. HTF Context check",
      action: "Overlay higher-timeframe areas",
      desc: "Check the daily and 4-hour charts. Confirm if your lower-timeframe trend is pushing directly into a major HTF resistance ceiling or support floor.",
      icon: Layers,
      status: "HTF LIMITS IDENTIFIED"
    },
    {
      title: "3. Macro & USD Audit",
      action: "Check news events and Dollar Index",
      desc: "Identify if any high-impact events are scheduled (CPI, NFP). Verify if DXY is supporting or opposing the Gold movement coordinates.",
      icon: Globe,
      status: "ENVIRONMENT ALIGNED"
    },
    {
      title: "4. Close Quality Review",
      action: "Evaluate how the candle closed",
      desc: "Once price reaches a location, wait for the candle to close. Does price wick back inside (rejection) or hold outside (acceptance)?",
      icon: Activity,
      status: "CANDLE CLOSE AUDITED"
    },
    {
      title: "5. Reading Verdict",
      action: "Classify reading quality",
      desc: "Decide whether the evidence is clear, mixed, or unstable. If the location is weak (mid-range noise) or conflicted (against HTF), stand aside.",
      icon: CheckCircle2,
      status: "VERDICT RESOLVED"
    }
  ];

  return (
    <StepWorkflow 
      steps={steps} 
      label="Location Workflow" 
      status="WORKFLOW SYSTEM" 
      desc="Mental Checklist: Click through the workflow steps to build a location-first reading habit."
    />
  );
};

export const GoldLocationQualityPracticeDrill = () => {
  const options = [
    {
      id: "A",
      text: "Clear bullish reading because Gold printed a large green candle, showing strong buyer dominance.",
      isCorrect: false,
      feedback: "Incorrect. The candle is active, but its location in the middle of the range devalues the reading quality to noise. There is no structural reference here."
    },
    {
      id: "B",
      text: "Strong location because any large Gold candle represents high institutional volume and must be followed.",
      isCorrect: false,
      feedback: "Incorrect. Not all Gold chart areas are equal. Location changes how useful the evidence is; in the middle of a range, it is highly random."
    },
    {
      id: "C",
      text: "Weak or low-quality location because the move formed in the middle of a wide range without a useful reference area.",
      isCorrect: true,
      feedback: "Correct! This is a weak or low-quality location. Gold moved in the middle of a wide range, away from reaction zones and useful reference areas, making it noise."
    },
    {
      id: "D",
      text: "Guaranteed reversal because Gold is inside a range and must reverse immediately back to the support floor.",
      isCorrect: false,
      feedback: "Incorrect. Being inside a range does not guarantee a reversal. It only means the location is low-quality, and you should stand aside."
    }
  ];

  const chartPreview = (
    <div className="w-full bg-[#071B36] rounded-xl p-3 border border-slate-800 relative min-h-[140px] flex flex-col justify-between overflow-hidden">
      <span className="text-[7px] font-mono text-slate-500 uppercase tracking-widest">DRILL SCENARIO MAP</span>
      
      <div className="absolute top-[20%] left-0 right-0 h-px border-t border-dashed border-teal-500/20" />
      <div className="absolute bottom-[20%] left-0 right-0 h-px border-t border-dashed border-teal-500/20" />
      
      <div className="w-full flex justify-center items-end h-16 pt-2 pb-2">
        <div className="flex flex-col items-center relative">
          <span className="text-[5px] font-mono text-slate-400 mb-1">Range Center ($2050)</span>
          <MiniCandle color="teal" bodyHeight={35} upperWick={5} lowerWick={5} />
          <div className="absolute -right-16 top-4 bg-slate-900/90 border border-slate-700 p-1.5 rounded text-[5px] text-slate-300 w-14 text-center">
            No nearby references!
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center text-[6px] font-mono text-slate-500">
        <span>Range Ceiling ($2080)</span>
        <span>Range Floor ($2020)</span>
      </div>
    </div>
  );

  return (
    <PracticeDrill
      question="Gold prints a large green candle in the middle of a wide range. What is the most disciplined Gold location reading?"
      options={options}
      chartPreview={chartPreview}
      label="Location practice Drill"
      status="DRILL ACTIVE"
    />
  );
};

export const GoldLocationDebrief = () => {
  const tips = [
    {
      id: "locate",
      title: "Locate Gold First",
      habit: "Do not judge the candle's size or wicks in isolation.",
      desc: "Always scan your chart coordinates first to establish reading priority before checking candle shape.",
      icon: Compass
    },
    {
      id: "filter",
      title: "Filter Mid-Range Noise",
      habit: "Devalue any price action that forms in range centers.",
      desc: "Seek confirmation only at key boundaries or reaction zones. Midpoint wicks are usually noise.",
      icon: ShieldAlert
    },
    {
      id: "swing",
      title: "Prior Swing Landmarks",
      habit: "Examine prior daily/weekly extremes for sweep signs.",
      desc: "Prior daily/weekly extremes are location references, not lines of guaranteed reversal. Look for sweeps or breakout acceptance behavior.",
      icon: Layers
    },
    {
      id: "htf",
      title: "HTF Overlay Check",
      habit: "Always check the daily/4H chart boundaries first.",
      desc: "Verify if your lower-timeframe trend is pushing directly into a major HTF resistance zone or support floor before placing orders.",
      icon: HelpCircle
    }
  ];

  return (
    <DebriefDashboard
      cards={tips}
      label="Gold Location Debrief"
      status="ROADWAY DEBRIEF"
      desc="Recap Dashboard: Review the core location-reading habits developed in this track."
    />
  );
};
