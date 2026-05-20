"use client";

import React, { useState } from "react";
import { 
  MapPin, 
  TrendingUp, 
  XCircle, 
  CheckCircle2, 
  AlertTriangle, 
  Layers, 
  Activity, 
  ArrowRight, 
  Search, 
  ShieldAlert,
  Sliders,
  AlertCircle
} from "lucide-react";
import { InstitutionalFrame, MentorInsight, MiniCandle } from "./shared";

// ==========================================
// CARD 1: LocationGivesEvidenceWeight
// ==========================================
export const LocationGivesEvidenceWeight = () => {
  const [selectedLoc, setSelectedLoc] = useState<string>("zone");

  const locations = [
    {
      id: "zone",
      name: "Reaction Zone Floor",
      weight: "95%",
      quality: "High-Priority Reading",
      color: "teal",
      candle: { color: "teal", h: 40, uw: 10, lw: 25 },
      desc: "An identical bullish hammer here holds high value. Price has previously turned here, proving buy orders exist. The location validates the candle's shape."
    },
    {
      id: "middle",
      name: "Middle of Range",
      weight: "15%",
      quality: "Low-Priority Noise",
      color: "slate",
      candle: { color: "teal", h: 40, uw: 10, lw: 25 },
      desc: "The exact same hammer candle in the dead center of a range is highly random. Buyers and sellers are in equilibrium here. The location devalues the candle."
    },
    {
      id: "expansion",
      name: "After Extended Expansion",
      weight: "45%",
      quality: "Mixed Context",
      color: "amber",
      candle: { color: "teal", h: 40, uw: 10, lw: 25 },
      desc: "Although the hammer looks active, it forms after a long trend expansion. It may represent buying exhaustion or a shallow trap. Location advises caution."
    },
    {
      id: "swing",
      name: "Prior Swing High",
      weight: "85%",
      quality: "High-Priority Test",
      color: "teal",
      candle: { color: "teal", h: 40, uw: 10, lw: 25 },
      desc: "Price returning to a historical turning point creates a major decision area. The location gives the hammer candle strong structural meaning."
    },
    {
      id: "chop",
      name: "Inside Choppy Box",
      weight: "5%",
      quality: "Pure Trap",
      color: "rose",
      candle: { color: "teal", h: 40, uw: 10, lw: 25 },
      desc: "Inside horizontal overlapping chop, any candlestick pattern is meaningless noise. You are trading in a statistical vacuum. Stand aside."
    }
  ];

  const active = locations.find(l => l.id === selectedLoc) || locations[0];

  return (
    <InstitutionalFrame label="Location-Weight Map" status="WEIGHT CALCULATOR">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-500 max-w-xl text-center leading-relaxed whitespace-normal break-words">
          Interactive Audit: Select different locations on the chart to see how the **exact same hammer candle** changes in reading weight and value.
        </p>

        {/* Chart representation */}
        <div className="w-full bg-[#071B36] rounded-2xl p-4 border border-slate-800 flex flex-col relative overflow-hidden min-h-[220px] justify-between">
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
          
          {/* Reaction Zone reference band */}
          <div className="absolute left-0 right-0 bottom-4 h-8 bg-teal-500/10 border-y border-teal-500/20 flex items-center justify-start px-4">
            <span className="text-[8px] font-mono text-teal-400 uppercase tracking-widest">Key Structural Floor</span>
          </div>

          <div className="relative z-10 w-full grid grid-cols-5 gap-1 items-end h-32 pt-4">
            {locations.map((loc) => {
              const isSelected = loc.id === selectedLoc;
              return (
                <button
                  key={loc.id}
                  onClick={() => setSelectedLoc(loc.id)}
                  className={`flex flex-col items-center justify-end h-full rounded-xl p-2 transition-all cursor-pointer ${
                    isSelected 
                      ? "bg-slate-800/40 border border-slate-700/60 shadow-lg scale-105" 
                      : "hover:bg-slate-900/30 border border-transparent"
                  }`}
                >
                  <span className="text-[8px] font-mono text-slate-400 text-center leading-none mb-2 break-words max-w-full">
                    {loc.name.split(" ")[0]}
                  </span>
                  
                  {/* Candlestick Graphic */}
                  <MiniCandle 
                    color={loc.candle.color as any}
                    bodyHeight={loc.candle.h}
                    upperWick={loc.candle.uw}
                    lowerWick={loc.candle.lw}
                  />

                  <div className={`mt-2 px-1.5 py-0.5 rounded text-[8px] font-mono font-bold ${
                    loc.color === "teal" ? "bg-teal-500/20 text-teal-400" :
                    loc.color === "rose" ? "bg-rose-500/20 text-rose-400" :
                    loc.color === "amber" ? "bg-amber-500/20 text-amber-400" :
                    "bg-slate-500/20 text-slate-400"
                  }`}>
                    W: {loc.weight}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Details Panel */}
        <div className="w-full bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex-1 min-w-0">
            <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest leading-none block mb-1">Active Location Audit</span>
            <h5 className="text-sm font-black text-[#071B36] uppercase tracking-tight mb-1 whitespace-normal break-words">{active.name}</h5>
            <p className="text-xs text-slate-600 leading-relaxed whitespace-normal break-words">{active.desc}</p>
          </div>
          <div className="flex flex-col items-end shrink-0 bg-slate-50 border border-slate-200/60 rounded-xl p-3 min-w-[140px]">
            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Reading Weight</span>
            <span className="text-2xl font-black text-[#071B36] leading-none mb-1">{active.weight}</span>
            <span className={`text-[8px] font-bold uppercase tracking-wider ${
              active.color === "teal" ? "text-teal-600" :
              active.color === "rose" ? "text-rose-600" :
              active.color === "amber" ? "text-amber-600" :
              "text-slate-600"
            }`}>{active.quality}</span>
          </div>
        </div>

        <MentorInsight 
          text="An identical candlestick has opposite meanings depending on where it sits. Before you ask what the candle looks like, ask where it formed." 
          analogy="A red stop sign on a busy highway is a life-saving location rule. A red stop sign lying in the middle of an empty forest is meaningless noise."
        />
      </div>
    </InstitutionalFrame>
  );
};

// ==========================================
// CARD 2: ChartAreaPriorityMap
// ==========================================
export const ChartAreaPriorityMap = () => {
  const [activeArea, setActiveArea] = useState<string>("edges");

  const areas = [
    {
      id: "edges",
      name: "High-Priority Structure Edges",
      priority: "CRITICAL ATTENTION",
      color: "teal",
      bgClass: "bg-teal-500/10 border-teal-500/30",
      textColor: "text-teal-400",
      desc: "The outer ceiling and floor of ranges or channels. These limits are where sellers block advances and buyers defend declines. Candle evidence here has peak value."
    },
    {
      id: "prior",
      name: "Prior Reaction Zones",
      priority: "HIGH PRIORITY",
      color: "teal",
      bgClass: "bg-emerald-500/10 border-emerald-500/30",
      textColor: "text-emerald-400",
      desc: "Areas where price previously pivoted or broke out. Order flow memory makes these zones key coordinates for reading rejection vs acceptance."
    },
    {
      id: "middle",
      name: "Low-Information Center",
      priority: "IGNORE AREA",
      color: "amber",
      bgClass: "bg-amber-500/10 border-amber-500/30",
      textColor: "text-amber-400",
      desc: "The empty space between key boundaries. Price drifts through here on low institutional participation. Candlestick patterns inside this area are highly random."
    },
    {
      id: "overlap",
      name: "Noisy Overlap Zones",
      priority: "HIGH RISK / STAND ASIDE",
      color: "rose",
      bgClass: "bg-rose-500/10 border-rose-500/30",
      textColor: "text-rose-400",
      desc: "Areas with multiple overlapping candle wicks and bodies from past consolidation. This represents equilibrium chop. Any trend reading here is highly unstable."
    }
  ];

  const current = areas.find(a => a.id === activeArea) || areas[0];

  return (
    <InstitutionalFrame label="Chart-Area Priority Map" status="PRIORITY SCANNER">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-500 max-w-xl text-center leading-relaxed whitespace-normal break-words">
          Interactive Map: Select an area class below to locate it on the mock chart layout and audit its structural priority.
        </p>

        {/* Mock Chart Layout */}
        <div className="w-full bg-[#071B36] rounded-2xl p-4 border border-slate-800 relative min-h-[220px] flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
          
          {/* Edge 1 (Ceiling) */}
          <div className={`absolute top-4 left-0 right-0 h-6 border-y flex items-center justify-center transition-all duration-300 ${
            activeArea === "edges" ? "bg-teal-500/20 border-teal-500" : "bg-transparent border-slate-800/40"
          }`}>
            <span className="text-[7px] font-mono font-bold tracking-widest text-slate-400">STRUCTURE CEILING (OUTER EDGE)</span>
          </div>

          {/* Overlap Zone */}
          <div className={`absolute top-16 left-0 right-0 h-8 border-y flex items-center justify-center transition-all duration-300 ${
            activeArea === "overlap" ? "bg-rose-500/20 border-rose-500" : "bg-transparent border-slate-800/40"
          }`}>
            <span className="text-[7px] font-mono font-bold tracking-widest text-slate-400">NOISY OVERLAP (CHOP BOX)</span>
          </div>

          {/* Middle Space */}
          <div className={`absolute top-26 left-0 right-0 h-10 border-y flex items-center justify-center transition-all duration-300 ${
            activeArea === "middle" ? "bg-amber-500/20 border-amber-500" : "bg-transparent border-slate-800/40"
          }`}>
            <span className="text-[7px] font-mono font-bold tracking-widest text-slate-400">LOW-INFORMATION CENTER</span>
          </div>

          {/* Prior Reaction Zone */}
          <div className={`absolute bottom-16 left-0 right-0 h-8 border-y flex items-center justify-center transition-all duration-300 ${
            activeArea === "prior" ? "bg-emerald-500/20 border-emerald-500" : "bg-transparent border-slate-800/40"
          }`}>
            <span className="text-[7px] font-mono font-bold tracking-widest text-slate-400">HISTORICAL PIVOT / REACTION FLOOR</span>
          </div>

          {/* Edge 2 (Floor) */}
          <div className={`absolute bottom-4 left-0 right-0 h-6 border-y flex items-center justify-center transition-all duration-300 ${
            activeArea === "edges" ? "bg-teal-500/20 border-teal-500" : "bg-transparent border-slate-800/40"
          }`}>
            <span className="text-[7px] font-mono font-bold tracking-widest text-slate-400">STRUCTURE FLOOR (OUTER EDGE)</span>
          </div>

          {/* Placeholder labels for relative heights */}
          <div className="w-full h-full flex flex-col justify-between pt-10 pb-10 z-10 pointer-events-none">
            <div className="w-full flex justify-between px-2 text-[8px] font-mono text-slate-500">
              <span>$120.00</span>
              <span>Ceiling</span>
            </div>
            <div className="w-full flex justify-between px-2 text-[8px] font-mono text-slate-500">
              <span>$110.00</span>
              <span>Center</span>
            </div>
            <div className="w-full flex justify-between px-2 text-[8px] font-mono text-slate-500">
              <span>$100.00</span>
              <span>Floor</span>
            </div>
          </div>
        </div>

        {/* Buttons for selection */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2">
          {areas.map(a => (
            <button
              key={a.id}
              onClick={() => setActiveArea(a.id)}
              className={`px-3 py-2.5 rounded-xl border text-[10px] font-bold text-center transition-all cursor-pointer break-words whitespace-normal leading-tight ${
                activeArea === a.id 
                  ? "bg-[#071B36] text-white border-[#071B36]" 
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
              }`}
            >
              {a.name.split(" ")[0]} {a.name.split(" ")[1] || ""}
            </button>
          ))}
        </div>

        {/* Priority description */}
        <div className="w-full bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm flex flex-col gap-2">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 flex-wrap gap-2">
            <h5 className="text-xs font-black text-[#071B36] uppercase tracking-tight whitespace-normal break-words">{current.name}</h5>
            <span className={`text-[8px] font-mono font-black px-2 py-0.5 rounded ${
              current.color === "teal" ? "bg-teal-50 text-teal-700 border border-teal-200" :
              current.color === "rose" ? "bg-rose-50 text-rose-700 border border-rose-200" :
              "bg-amber-50 text-amber-700 border border-amber-200"
            }`}>
              {current.priority}
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed whitespace-normal break-words">{current.desc}</p>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

// ==========================================
// CARD 3: ReactionZonesNotLines
// ==========================================
export const ReactionZonesNotLines = () => {
  const [mode, setMode] = useState<"line" | "zone">("line");

  return (
    <InstitutionalFrame label="Reaction Zones vs Magic Lines" status="CONCEPT AUDITOR">
      <div className="w-full flex flex-col gap-6 items-center">
        <div className="flex bg-slate-100 p-1 rounded-xl shrink-0">
          <button
            onClick={() => setMode("line")}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              mode === "line" 
                ? "bg-[#071B36] text-white shadow-sm" 
                : "text-slate-600 hover:text-[#071B36]"
            }`}
          >
            Magic Line Mode
          </button>
          <button
            onClick={() => setMode("zone")}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              mode === "zone" 
                ? "bg-[#071B36] text-white shadow-sm" 
                : "text-slate-600 hover:text-[#071B36]"
            }`}
          >
            Lurnava Zone Mode
          </button>
        </div>

        {/* Display Panel */}
        <div className="w-full bg-[#071B36] rounded-2xl p-6 border border-slate-800 relative min-h-[220px] flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
          
          {mode === "line" ? (
            <div className="w-full h-full flex-1 flex flex-col justify-between relative z-10">
              {/* Magic Line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-rose-500 flex items-center justify-between">
                <span className="bg-rose-500 text-white text-[8px] font-mono px-2 py-0.5 rounded -translate-y-1/2">
                  RIGID SUPPORT LINE ($2000.00)
                </span>
                <span className="bg-rose-500 text-white text-[8px] font-mono px-2 py-0.5 rounded -translate-y-1/2">
                  "Line Broken!"
                </span>
              </div>

              {/* Candles spiking through line */}
              <div className="flex justify-around items-end h-32 w-full pt-4">
                <div className="flex flex-col items-center">
                  <span className="text-[8px] text-slate-400 mb-1">Approach</span>
                  <MiniCandle color="rose" bodyHeight={35} upperWick={10} lowerWick={10} />
                </div>
                <div className="flex flex-col items-center relative z-20">
                  <span className="text-[8px] text-rose-400 font-bold mb-1">Spike Break</span>
                  <MiniCandle color="rose" bodyHeight={20} upperWick={5} lowerWick={45} />
                  <div className="absolute top-20 bg-rose-950/80 border border-rose-500/40 p-2 rounded text-[9px] text-rose-300 w-28 text-center shadow-lg font-bold">
                    Price at $1997.50. Line-traders panic sell!
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[8px] text-slate-400 mb-1">Reclaim</span>
                  <MiniCandle color="teal" bodyHeight={40} upperWick={15} lowerWick={5} />
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex-1 flex flex-col justify-between relative z-10">
              {/* Flexible Zone */}
              <div className="absolute top-[40%] bottom-[30%] left-0 right-0 bg-teal-500/10 border-y border-teal-500/30 flex items-center justify-between px-4">
                <span className="text-teal-400 text-[8px] font-mono font-bold uppercase tracking-wider">
                  Order Clustered Support Zone ($1995.00 - $2002.00)
                </span>
                <span className="text-teal-400 text-[8px] font-mono font-bold uppercase tracking-wider">
                  "Normal Test & Reject"
                </span>
              </div>

              {/* Candles within zone */}
              <div className="flex justify-around items-end h-32 w-full pt-4">
                <div className="flex flex-col items-center">
                  <span className="text-[8px] text-slate-400 mb-1">Enter Zone</span>
                  <MiniCandle color="rose" bodyHeight={30} upperWick={10} lowerWick={15} />
                </div>
                <div className="flex flex-col items-center relative z-20">
                  <span className="text-[8px] text-teal-400 font-bold mb-1">Sweep Limit</span>
                  <MiniCandle color="rose" bodyHeight={15} upperWick={5} lowerWick={45} />
                  <div className="absolute top-20 bg-teal-950/80 border border-teal-500/40 p-2 rounded text-[9px] text-teal-300 w-32 text-center shadow-lg font-bold">
                    Overshoot to $1997.50 is expected. Observe rejection!
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[8px] text-slate-400 mb-1">Rebound Hold</span>
                  <MiniCandle color="teal" bodyHeight={45} upperWick={10} lowerWick={5} />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Text descriptions */}
        <div className="w-full bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm">
          {mode === "line" ? (
            <div className="flex gap-3">
              <ShieldAlert className="text-rose-500 shrink-0" size={18} />
              <div>
                <h5 className="text-xs font-black text-rose-700 uppercase mb-1">The Magic Line Trap</h5>
                <p className="text-xs text-slate-600 leading-relaxed whitespace-normal break-words">
                  Expecting the market to respect a single decimal level is dangerous. When price slipped just $2.50 past the support line, it looked like a structural break. Beginners panic-sold right into what turned out to be a normal liquidity wick.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex gap-3">
              <CheckCircle2 className="text-teal-600 shrink-0" size={18} />
              <div>
                <h5 className="text-xs font-black text-teal-800 uppercase mb-1">Zone-Based Reading</h5>
                <p className="text-xs text-slate-600 leading-relaxed whitespace-normal break-words">
                  A zone accounts for normal price breathing room. Because price stayed within the structural boundaries of the $1995–$2002 support floor, the Lurnava reader identified the wick as a successful zone test rather than a breakdown.
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
// CARD 4: EdgeVsMiddleLocation
// ==========================================
export const EdgeVsMiddleLocation = () => {
  const [selectedArea, setSelectedArea] = useState<"upper" | "middle" | "lower">("upper");

  const details = {
    upper: {
      title: "Range Ceiling (Upper Edge)",
      quality: "High-Information Level",
      textColor: "text-teal-600",
      badgeBg: "bg-teal-50 text-teal-700 border-teal-200",
      desc: "The absolute high limit of structure. Here, supply has historically capped buyer momentum. When price reaches this edge, it asks a clean question: Will sellers defend it again (Rejection) or has momentum shifted (Breakout)? You get clean wicks or clear closes.",
      candleGroup: [
        { color: "teal", h: 30, uw: 10, lw: 5 },
        { color: "rose", h: 15, uw: 25, lw: 5 } // Long upper wick rejection
      ]
    },
    middle: {
      title: "The Center Space (Noisy Middle)",
      quality: "Low-Information Vacuum",
      textColor: "text-amber-600",
      badgeBg: "bg-amber-50 text-amber-700 border-amber-200",
      desc: "The middle 50% of the range structure. There are no historical turning points or major resting orders here. Price drifts up and down unpredictably. Candles look active but are random noise. Moving averages or candles here have very low reading quality.",
      candleGroup: [
        { color: "teal", h: 20, uw: 10, lw: 10 },
        { color: "rose", h: 18, uw: 8, lw: 8 },
        { color: "teal", h: 22, uw: 5, lw: 5 } // Alternating small choppy candles
      ]
    },
    lower: {
      title: "Range Floor (Lower Edge)",
      quality: "High-Information Level",
      textColor: "text-teal-600",
      badgeBg: "bg-teal-50 text-teal-700 border-teal-200",
      desc: "The absolute low limit of structure. Here, demand has historically stepped in to defend declines. The edge forces a decision: price will either form clean rejection wicks (buyers defend) or close strongly below (breakdown). Information quality is high.",
      candleGroup: [
        { color: "rose", h: 35, uw: 5, lw: 10 },
        { color: "teal", h: 15, uw: 5, lw: 30 } // Bullish hammer at support
      ]
    }
  };

  const active = details[selectedArea];

  return (
    <InstitutionalFrame label="Edge vs Middle Audit" status="EDGE DETECTOR">
      <div className="w-full flex flex-col gap-5 items-center">
        <p className="text-xs text-slate-500 max-w-xl text-center leading-relaxed whitespace-normal break-words">
          Interactive Range: Click the labels on the right of the range to inspect behavior quality at the edges vs the middle.
        </p>

        {/* Range Graphic */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
          {/* Visual Range Model */}
          <div className="sm:col-span-2 bg-[#071B36] rounded-2xl p-4 border border-slate-800 relative min-h-[220px] flex flex-col justify-between">
            {/* Shaded Upper Edge */}
            <div className={`absolute top-2 left-0 right-0 h-8 border-y transition-all ${
              selectedArea === "upper" ? "bg-teal-500/20 border-teal-500/40" : "bg-transparent border-slate-800/20"
            }`} />

            {/* Shaded Middle Zone */}
            <div className={`absolute top-[40%] bottom-[40%] left-0 right-0 border-y transition-all ${
              selectedArea === "middle" ? "bg-amber-500/20 border-amber-500/40" : "bg-transparent border-slate-800/20"
            }`} />

            {/* Shaded Lower Edge */}
            <div className={`absolute bottom-2 left-0 right-0 h-8 border-y transition-all ${
              selectedArea === "lower" ? "bg-teal-500/20 border-teal-500/40" : "bg-transparent border-slate-800/20"
            }`} />

            <div className="w-full flex justify-between text-[8px] font-mono text-slate-500 z-10">
              <span>$100.00 Ceiling (Edge)</span>
              {selectedArea === "upper" && <span className="text-teal-400 font-bold">Active Selection</span>}
            </div>

            <div className="w-full flex justify-between text-[8px] font-mono text-slate-500 z-10 my-10">
              <span>$50.00 Midpoint (Noise)</span>
              {selectedArea === "middle" && <span className="text-amber-400 font-bold">Active Selection</span>}
            </div>

            <div className="w-full flex justify-between text-[8px] font-mono text-slate-500 z-10">
              <span>$0.00 Floor (Edge)</span>
              {selectedArea === "lower" && <span className="text-teal-400 font-bold">Active Selection</span>}
            </div>

            {/* Floating Mini candles based on selection */}
            <div className="absolute inset-x-0 bottom-4 top-4 flex justify-center items-center gap-3 pointer-events-none z-20">
              {active.candleGroup.map((c, i) => (
                <div 
                  key={i} 
                  className={`transition-all duration-300 transform ${
                    selectedArea === "upper" ? "translate-y-[-50px]" :
                    selectedArea === "lower" ? "translate-y-[50px]" :
                    "translate-y-0"
                  }`}
                >
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

          {/* Interactive controls */}
          <div className="flex flex-col gap-2">
            <button
              onClick={() => setSelectedArea("upper")}
              className={`p-3 rounded-xl border text-xs font-bold text-left transition-all cursor-pointer ${
                selectedArea === "upper"
                  ? "bg-[#071B36] text-white border-[#071B36]"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
              }`}
            >
              Upper Edge (Ceiling)
            </button>
            <button
              onClick={() => setSelectedArea("middle")}
              className={`p-3 rounded-xl border text-xs font-bold text-left transition-all cursor-pointer ${
                selectedArea === "middle"
                  ? "bg-amber-600 text-white border-amber-600"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
              }`}
            >
              Middle Zone (Noise)
            </button>
            <button
              onClick={() => setSelectedArea("lower")}
              className={`p-3 rounded-xl border text-xs font-bold text-left transition-all cursor-pointer ${
                selectedArea === "lower"
                  ? "bg-[#071B36] text-white border-[#071B36]"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
              }`}
            >
              Lower Edge (Floor)
            </button>
          </div>
        </div>

        {/* Info panel */}
        <div className="w-full bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm flex flex-col gap-2">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 flex-wrap gap-2">
            <h5 className="text-xs font-black text-[#071B36] uppercase tracking-tight whitespace-normal break-words">{active.title}</h5>
            <span className={`text-[8px] font-mono font-black px-2 py-0.5 rounded border ${active.badgeBg}`}>
              {active.quality}
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed whitespace-normal break-words">{active.desc}</p>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

// ==========================================
// CARD 5: PriorSwingLocationReference
// ==========================================
export const PriorSwingLocationReference = () => {
  const [selectedPath, setSelectedPath] = useState<string>("reject");

  const paths = [
    {
      id: "reject",
      name: "Rejection Path",
      action: "Bounce & Move Away",
      color: "teal",
      candles: [
        { color: "rose", h: 30, uw: 10, lw: 10 },
        { color: "teal", h: 10, uw: 5, lw: 35 }, // Reject hammer
        { color: "teal", h: 35, uw: 10, lw: 5 }
      ],
      desc: "Buyers step in aggressively where price turned yesterday. The prior swing provides the location reference, and the hammer wick confirms rejection."
    },
    {
      id: "accept",
      name: "Acceptance Path",
      action: "Consolidate & Hold",
      color: "amber",
      candles: [
        { color: "rose", h: 35, uw: 5, lw: 5 },
        { color: "slate", h: 15, uw: 5, lw: 5 }, // Consolidation dojis inside support
        { color: "slate", h: 18, uw: 8, lw: 8 }
      ],
      desc: "Price holds its position at the swing level without bouncing. It consolidates, indicating that buyers are not defending the level. Rejection has failed."
    },
    {
      id: "overshoot",
      name: "Overshoot Path",
      action: "Fake Break & Reclaim",
      color: "purple",
      candles: [
        { color: "rose", h: 35, uw: 5, lw: 5 },
        { color: "rose", h: 15, uw: 5, lw: 40 }, // Extreme overshoot wick
        { color: "teal", h: 40, uw: 10, lw: 10 }
      ],
      desc: "Price temporarily breaks below the swing low, sweeping stop orders, but wicks back up to close strongly above it. A classic liquidity sweep."
    },
    {
      id: "fail",
      name: "Failure Path",
      action: "Strong Break & Run",
      color: "rose",
      candles: [
        { color: "rose", h: 35, uw: 5, lw: 5 },
        { color: "rose", h: 45, uw: 5, lw: 10 }, // Strong close below
        { color: "rose", h: 30, uw: 10, lw: 10 }
      ],
      desc: "Price cuts through the prior swing low with a solid body close. The location is broken, indicating sellers have accepted lower prices."
    }
  ];

  const active = paths.find(p => p.id === selectedPath) || paths[0];

  return (
    <InstitutionalFrame label="Swing Location Reference Map" status="SWING DEFIER">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-500 max-w-xl text-center leading-relaxed whitespace-normal break-words">
          Interactive Scenarios: Select a path to see how price reacts when returning to a **prior swing low** reference line.
        </p>

        {/* Swing diagram */}
        <div className="w-full bg-[#071B36] rounded-2xl p-4 border border-slate-800 relative min-h-[220px] flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
          
          {/* Prior Swing Low Reference Line */}
          <div className="absolute bottom-[35%] left-0 right-0 h-px border-t border-dashed border-teal-500/60 z-10 flex items-center justify-between px-4">
            <span className="bg-[#071B36] text-teal-400 text-[8px] font-mono px-2 py-0.5 border border-teal-500/20 rounded -translate-y-1/2">
              PRIOR SWING LOW (REFERENCE FLOOR)
            </span>
          </div>

          <div className="relative z-10 w-full flex justify-between items-end h-32 pt-4">
            {/* Left: Prior Swing History */}
            <div className="flex items-end gap-1 border-r border-slate-800/60 pr-4">
              <div className="flex flex-col items-center">
                <span className="text-[7px] font-mono text-slate-500 mb-1">High</span>
                <MiniCandle color="teal" bodyHeight={25} upperWick={10} lowerWick={5} />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[7px] font-mono text-teal-400 font-bold mb-1">Pivot</span>
                <MiniCandle color="teal" bodyHeight={10} upperWick={5} lowerWick={25} />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[7px] font-mono text-slate-500 mb-1">Rally</span>
                <MiniCandle color="teal" bodyHeight={40} upperWick={10} lowerWick={5} />
              </div>
            </div>

            {/* Right: Path Candles based on selection */}
            <div className="flex-1 flex justify-center items-end gap-3 pl-4">
              {active.candles.map((c, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <span className="text-[7px] font-mono text-slate-500 mb-1">
                    {idx === 0 ? "Approach" : idx === 1 ? "Test" : "Follow"}
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

        {/* Path selectors */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2">
          {paths.map(p => (
            <button
              key={p.id}
              onClick={() => setSelectedPath(p.id)}
              className={`px-3 py-2.5 rounded-xl border text-[10px] font-bold text-center transition-all cursor-pointer break-words whitespace-normal leading-tight ${
                selectedPath === p.id 
                  ? "bg-[#071B36] text-white border-[#071B36]" 
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* Path Description */}
        <div className="w-full bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm flex flex-col gap-2">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 flex-wrap gap-2">
            <h5 className="text-xs font-black text-[#071B36] uppercase tracking-tight whitespace-normal break-words">{active.name}</h5>
            <span className={`text-[8px] font-mono font-black px-2 py-0.5 rounded ${
              active.color === "teal" ? "bg-teal-50 text-teal-700 border border-teal-200" :
              active.color === "rose" ? "bg-rose-50 text-rose-700 border border-rose-200" :
              active.color === "purple" ? "bg-purple-50 text-purple-700 border border-purple-200" :
              "bg-amber-50 text-amber-700 border border-amber-200"
            }`}>
              {active.action}
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed whitespace-normal break-words">{active.desc}</p>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

// ==========================================
// CARD 6: AcceptanceRejectionLocation
// ==========================================
export const AcceptanceRejectionLocation = () => {
  const [activeTab, setActiveTab] = useState<string>("reject");

  const tabs = [
    {
      id: "reject",
      name: "Rejection Behavior",
      badge: "ZONE DEFENSE",
      badgeColor: "text-teal-700 bg-teal-50 border-teal-200",
      candle: { color: "rose", h: 12, uw: 5, lw: 40 },
      desc: "Price touches the key location and quickly bounces back, closing outside the zone and leaving a long lower wick. This proves that orders are clustered here and the location is being actively defended."
    },
    {
      id: "accept",
      name: "Acceptance Behavior",
      badge: "VALUE ESTABLISHED",
      badgeColor: "text-purple-700 bg-purple-50 border-purple-200",
      candle: { color: "rose", h: 45, uw: 5, lw: 10 },
      desc: "Price enters the key location and closes firmly inside or beyond it with a solid candle body. Subsequent candles hold the new levels, showing the market is comfortable trading at these values."
    },
    {
      id: "overshoot",
      name: "Overshoot & Return",
      badge: "LIQUIDITY SWEEP",
      badgeColor: "text-indigo-700 bg-indigo-50 border-indigo-200",
      candle: { color: "teal", h: 10, uw: 10, lw: 45 },
      desc: "Price spikes far beyond the location to clean out resting stop orders, but reverses before the candle closes, returning to close right at the zone border. Strong rejection masked as a breakout."
    },
    {
      id: "pause",
      name: "Pause & Undecided",
      badge: "MIXED READ",
      badgeColor: "text-amber-700 bg-amber-50 border-amber-200",
      candle: { color: "slate", h: 2, uw: 15, lw: 15, isDoji: true },
      desc: "Price touches the zone and prints small dojis. No clear rejection wick, no clear acceptance close. Buyers and sellers are waiting. Location is valid, but behavior is mixed. Lower reading quality."
    }
  ];

  const current = tabs.find(t => t.id === activeTab) || tabs[0];

  return (
    <InstitutionalFrame label="Zone Behavior Lab" status="REACTION ANALYSER">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-500 max-w-xl text-center leading-relaxed whitespace-normal break-words">
          Interactive Audit: Select a reaction behavior state to see the visual candle signature and its structural explanation.
        </p>

        {/* Graphic display */}
        <div className="w-full bg-[#071B36] rounded-2xl p-6 border border-slate-800 relative min-h-[180px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
          
          {/* Shaded zone level */}
          <div className="absolute top-[40%] bottom-[40%] left-0 right-0 bg-teal-500/10 border-y border-teal-500/20 flex items-center justify-start px-4">
            <span className="text-[8px] font-mono text-teal-400 uppercase tracking-widest">Key Reference Location</span>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <MiniCandle 
              color={current.candle.color as any}
              bodyHeight={current.candle.h}
              upperWick={current.candle.uw}
              lowerWick={current.candle.lw}
              isDoji={current.candle.isDoji}
            />
            <span className="mt-2 text-[9px] font-mono text-slate-400 font-bold uppercase tracking-wider">
              {current.name.split(" ")[0]} Signature
            </span>
          </div>
        </div>

        {/* Tab selection grid */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`px-3 py-2.5 rounded-xl border text-[10px] font-bold text-center transition-all cursor-pointer break-words whitespace-normal leading-tight ${
                activeTab === t.id 
                  ? "bg-[#071B36] text-white border-[#071B36]" 
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>

        {/* Description Panel */}
        <div className="w-full bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm flex flex-col gap-2">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 flex-wrap gap-2">
            <h5 className="text-xs font-black text-[#071B36] uppercase tracking-tight whitespace-normal break-words">{current.name}</h5>
            <span className={`text-[8px] font-mono font-black px-2 py-0.5 rounded border ${current.badgeColor}`}>
              {current.badge}
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed whitespace-normal break-words">{current.desc}</p>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

// ==========================================
// CARD 7: BadLocationWeakensEvidence
// ==========================================
export const BadLocationWeakensEvidence = () => {
  const [selectedPanel, setSelectedPanel] = useState<string>("good");

  const panels = [
    {
      id: "good",
      title: "Panel A: Floor of Structure",
      location: "HIGH-QUALITY LOCATION",
      quality: "Clear Bullish Reading",
      score: "90/100",
      color: "teal",
      bgClass: "bg-teal-550/20",
      desc: "The large green candle forms directly at the support floor of a range structure. Price has defended this level three times. The location validates the strength, making it a high-probability continuation clue."
    },
    {
      id: "middle",
      title: "Panel B: Middle of Range",
      location: "POOR LOCATION (NOISE)",
      quality: "Noisy Trap / Random",
      score: "20/100",
      color: "slate",
      bgClass: "bg-slate-550/20",
      desc: "The identical green candle forms in the dead center of the range. No key support floors or resistance ceilings are nearby. Despite looking strong, the location makes it highly likely to rotate backward."
    },
    {
      id: "exhausted",
      title: "Panel C: Overextended Move",
      location: "POOR LOCATION (EXHAUSTED)",
      quality: "High Risk of Pullback",
      score: "40/100",
      color: "amber",
      bgClass: "bg-amber-550/20",
      desc: "The green candle forms after 5 consecutive upward expansion bars. Buying momentum is already depleted and price is hitting historical ceilings. The strength is an exhaustion spike, not continuation."
    },
    {
      id: "chop",
      title: "Panel D: Inside Chop Box",
      location: "POOR LOCATION (CHOP)",
      quality: "Pure Noise Trap",
      score: "5/100",
      color: "rose",
      bgClass: "bg-rose-550/20",
      desc: "The green candle is printed inside messy, sideways, overlapping consolidations. Wicks are crossing on both sides. The location devalues all candle sizes. The reading is completely low-quality."
    }
  ];

  const current = panels.find(p => p.id === selectedPanel) || panels[0];

  return (
    <InstitutionalFrame label="Location Quality Audit" status="QUALITY COMPARATOR">
      <div className="w-full flex flex-col gap-5 items-center">
        <p className="text-xs text-slate-500 max-w-xl text-center leading-relaxed whitespace-normal break-words">
          Interactive Comparison: Tap the panels to see how the **identical strong green candle** loses its reading quality based strictly on the location.
        </p>

        {/* Panels grid */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2">
          {panels.map((p) => {
            const isSelected = p.id === selectedPanel;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedPanel(p.id)}
                className={`flex flex-col items-center justify-between p-3 rounded-xl border text-center transition-all cursor-pointer min-h-[140px] ${
                  isSelected 
                    ? "bg-[#071B36] text-white border-[#071B36] shadow-md scale-105" 
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                }`}
              >
                <span className="text-[8px] font-black uppercase tracking-wider text-slate-400">
                  {p.title.split(":")[0]}
                </span>
                
                {/* Identical Green Candle */}
                <MiniCandle color="teal" bodyHeight={35} upperWick={5} lowerWick={5} />

                <div className={`text-[8px] font-mono font-bold px-1.5 py-0.5 rounded ${
                  isSelected ? "bg-white/10 text-white" : "bg-slate-100 text-slate-600"
                }`}>
                  QS: {p.score}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected panel detail */}
        <div className="w-full bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex-1 min-w-0">
            <span className={`text-[8px] font-mono font-black uppercase tracking-widest ${
              current.color === "teal" ? "text-teal-600" :
              current.color === "rose" ? "text-rose-600" :
              current.color === "amber" ? "text-amber-600" :
              "text-slate-600"
            }`}>
              {current.location}
            </span>
            <h5 className="text-xs font-black text-[#071B36] uppercase tracking-tight mb-1 whitespace-normal break-words">{current.title}</h5>
            <p className="text-xs text-slate-600 leading-relaxed whitespace-normal break-words">{current.desc}</p>
          </div>
          <div className="flex flex-col items-end shrink-0 bg-slate-50 border border-slate-200/60 rounded-xl p-3 min-w-[140px]">
            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Quality Score</span>
            <span className="text-2xl font-black text-[#071B36] leading-none mb-1">{current.score}</span>
            <span className={`text-[8px] font-bold uppercase tracking-wider ${
              current.color === "teal" ? "text-teal-600" :
              current.color === "rose" ? "text-rose-600" :
              current.color === "amber" ? "text-amber-600" :
              "text-slate-600"
            }`}>{current.quality}</span>
          </div>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

// ==========================================
// CARD 8: HtfLocationChangesStory
// ==========================================
export const HtfLocationChangesStory = () => {
  const [overlayHtf, setOverlayHtf] = useState<boolean>(false);

  return (
    <InstitutionalFrame label="Dual-Timeframe Map" status="MULTIPLE TIMEFRAMES">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-500 max-w-xl text-center leading-relaxed whitespace-normal break-words">
          Interactive Toggle: Click **"Overlay HTF Context"** to reveal the daily resistance ceiling on the local breakout chart.
        </p>

        {/* Dual Chart Area */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          
          {/* LTF view */}
          <div className="bg-[#071B36] rounded-2xl p-4 border border-slate-800 relative min-h-[220px] flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
            
            {/* Dotted local high ceiling */}
            <div className="absolute top-[45%] left-0 right-0 h-px border-t border-dashed border-rose-500/40 z-10 flex items-center justify-end px-2">
              <span className="bg-[#071B36] text-rose-400 text-[6px] font-mono px-1 rounded -translate-y-1/2">Local High</span>
            </div>

            {/* Overlaid HTF Wall */}
            {overlayHtf && (
              <div className="absolute top-0 bottom-[45%] left-0 right-0 bg-red-500/20 border-b-2 border-red-500 z-20 flex items-center justify-center animate-fade-in">
                <div className="bg-red-950/90 border border-red-500/40 p-2 rounded text-center max-w-[80%] shadow-2xl">
                  <span className="text-red-400 text-[8px] font-mono font-black uppercase tracking-wider block mb-0.5">HTF RESISTANCE CEILING</span>
                  <span className="text-red-300 text-[7px] leading-tight block">Major Daily Supply Zone. Local breakout will likely reject!</span>
                </div>
              </div>
            )}

            <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest z-10">Local Timeframe (15m)</span>

            <div className="relative z-10 w-full flex justify-around items-end h-32 pt-4">
              <MiniCandle color="teal" bodyHeight={15} upperWick={5} lowerWick={5} />
              <MiniCandle color="teal" bodyHeight={20} upperWick={10} lowerWick={5} />
              <div className="flex flex-col items-center">
                <span className="text-[7px] font-mono text-emerald-400 font-bold mb-1">Breakout Candle</span>
                <MiniCandle color="teal" bodyHeight={40} upperWick={5} lowerWick={5} />
              </div>
            </div>

            <div className="w-full flex justify-between text-[8px] font-mono text-slate-500 z-10">
              <span>Clean upward push</span>
              <span className={overlayHtf ? "text-red-400 font-black" : "text-emerald-400 font-black"}>
                {overlayHtf ? "HTF Trap" : "Bullish Breakout"}
              </span>
            </div>
          </div>

          {/* HTF view */}
          <div className="bg-[#071B36] rounded-2xl p-4 border border-slate-800 relative min-h-[220px] flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
            
            {/* Major resistance block */}
            <div className="absolute top-0 bottom-[45%] left-0 right-0 bg-red-500/10 border-b border-red-500/30 flex items-end justify-start p-2">
              <span className="text-red-400 text-[8px] font-mono font-bold uppercase tracking-widest">Daily Supply Zone Floor</span>
            </div>

            <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest z-10">Higher Timeframe (4h)</span>

            <div className="relative z-10 w-full flex justify-center items-end h-32 pt-4">
              {/* Massive historical candles */}
              <div className="flex items-end gap-3">
                <div className="flex flex-col items-center">
                  <span className="text-[7px] text-slate-500 mb-1">Historical Sell</span>
                  <MiniCandle color="rose" bodyHeight={60} upperWick={10} lowerWick={10} />
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[7px] text-slate-500 mb-1">Retest</span>
                  <MiniCandle color="teal" bodyHeight={40} upperWick={15} lowerWick={5} />
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[7px] text-red-400 font-bold mb-1">Current Test</span>
                  <MiniCandle color="teal" bodyHeight={15} upperWick={10} lowerWick={5} />
                </div>
              </div>
            </div>

            <div className="w-full flex justify-between text-[8px] font-mono text-slate-500 z-10">
              <span>Approaching major level</span>
              <span className="text-red-400 font-black">Sell Pressure Imminent</span>
            </div>
          </div>
        </div>

        {/* Button toggle */}
        <button
          onClick={() => setOverlayHtf(!overlayHtf)}
          className={`px-6 py-3 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer shrink-0 ${
            overlayHtf 
              ? "bg-red-600 text-white border-red-600 shadow-lg" 
              : "bg-[#071B36] text-white border-[#071B36] hover:bg-slate-900"
          }`}
        >
          {overlayHtf ? "Hide HTF Context" : "Overlay HTF Context"}
        </button>

        {/* Details Panel */}
        <div className="w-full bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm">
          {overlayHtf ? (
            <div className="flex gap-3">
              <ShieldAlert className="text-red-600 shrink-0" size={18} />
              <div>
                <h5 className="text-xs font-black text-red-800 uppercase mb-1">The Higher-Timeframe Trap Audited</h5>
                <p className="text-xs text-slate-600 leading-relaxed whitespace-normal break-words">
                  The local 15-minute breakout candle looked strong, but with HTF context overlaid, you see price is trading directly into a daily supply zone. The buying momentum will likely fail here as major institutional sell orders absorb the local demand.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex gap-3">
              <Search className="text-slate-400 shrink-0" size={18} />
              <div>
                <h5 className="text-xs font-black text-slate-800 uppercase mb-1">The Local Blindspot</h5>
                <p className="text-xs text-slate-600 leading-relaxed whitespace-normal break-words">
                  Looking only at the 15-minute chart, you see a clean bullish breakout above local highs. However, this is a dangerous blindspot. Always check the macro map before trusting local breakout speed.
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
// CARD 9: LocationFirstWorkflow
// ==========================================
export const LocationFirstWorkflow = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      title: "Location Check",
      subtitle: "Near key area?",
      detail: "Identify if price is approaching or sitting inside a significant historical reaction area. If price is drifting in open space, stop the analysis—the location is poor.",
      clue: "Address check"
    },
    {
      title: "Reference Audit",
      subtitle: "Edge, middle, or swing?",
      detail: "Classify the structure coordinate. Are you at the outer boundary ceiling/floor, in the empty midpoint space, or at a prior swing landmark?",
      clue: "Coordinate check"
    },
    {
      title: "HTF Context",
      subtitle: "Where on the bigger map?",
      detail: "Verify the higher-timeframe layout. Ensure your local direction is not colliding with major daily/4h support floors or resistance ceilings.",
      clue: "Obstacle check"
    },
    {
      title: "Behavior Read",
      subtitle: "Reject, accept, pause?",
      detail: "Observe how price reacts around the zone. Watch the candlestick close quality. Are wicks rejecting the level or are solid bodies accepting it?",
      clue: "Reaction check"
    },
    {
      title: "Read Classification",
      subtitle: "Final Quality Check",
      detail: "Determine final reading quality (Clear, Mixed, or Unclear) and state what structural validation must occur next before taking action.",
      clue: "Verification check"
    }
  ];

  return (
    <InstitutionalFrame label="Location-First Checklist" status="WORKFLOW MONITOR">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-500 max-w-xl text-center leading-relaxed whitespace-normal break-words">
          Interactive Stepper: Walk through the disciplined steps a professional trader takes before evaluating any candlestick pattern.
        </p>

        {/* Stepper progress bar */}
        <div className="w-full flex justify-between items-center relative z-10 shrink-0 overflow-x-auto py-2">
          {steps.map((s, idx) => {
            const isActive = idx === activeStep;
            const isCompleted = idx < activeStep;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className="flex flex-col items-center focus:outline-none min-w-[70px] cursor-pointer"
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black border transition-all ${
                  isActive ? "bg-[#071B36] text-white border-[#071B36] scale-110 shadow" :
                  isCompleted ? "bg-teal-500 text-white border-teal-500" :
                  "bg-white text-slate-400 border-slate-200 hover:border-slate-300"
                }`}>
                  {idx + 1}
                </div>
                <span className={`text-[8px] font-bold mt-1 text-center whitespace-normal max-w-[80px] break-words ${
                  isActive ? "text-[#071B36]" : "text-slate-400"
                }`}>
                  {s.title.split(" ")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detail Panel */}
        <div className="w-full bg-[#071B36] rounded-2xl p-6 border border-slate-800 relative min-h-[160px] flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
          
          <div className="relative z-10">
            <span className="text-[8px] font-mono text-teal-400 uppercase tracking-widest font-black block mb-1">
              Step {activeStep + 1}: {steps[activeStep].subtitle}
            </span>
            <h5 className="text-sm font-black text-white uppercase tracking-tight mb-2 whitespace-normal break-words">
              {steps[activeStep].title}
            </h5>
            <p className="text-xs text-slate-300 leading-relaxed whitespace-normal break-words">
              {steps[activeStep].detail}
            </p>
          </div>

          <div className="relative z-10 mt-4 pt-3 border-t border-slate-800 flex justify-between items-center flex-wrap gap-2">
            <span className="text-[8px] font-mono text-slate-500 uppercase">Mental Filter: {steps[activeStep].clue}</span>
            <div className="flex gap-2">
              <button
                disabled={activeStep === 0}
                onClick={() => setActiveStep(prev => prev - 1)}
                className="px-2.5 py-1 rounded bg-slate-800 text-[10px] font-bold text-slate-300 disabled:opacity-30 hover:bg-slate-700 cursor-pointer"
              >
                Prev
              </button>
              <button
                disabled={activeStep === steps.length - 1}
                onClick={() => setActiveStep(prev => prev + 1)}
                className="px-2.5 py-1 rounded bg-teal-600 text-[10px] font-bold text-white disabled:opacity-30 hover:bg-teal-500 cursor-pointer"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

// ==========================================
// CARD 10: LocationQualityPracticeDrill
// ==========================================
export const LocationQualityPracticeDrill = () => {
  const [selectedOpt, setSelectedOpt] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const scenario = {
    question: "Price is trading inside a wide horizontal range between $100 and $120. A strong green candle closes near its high at $110, directly in the middle of the range, away from boundaries and prior swings. What is the disciplined location reading?",
    options: [
      {
        id: "A",
        text: "Clear bullish reading because the green candle is large and closed near its high.",
        correct: false,
        feedback: "Incorrect. The size of the candle is attractive, but because it formed in the middle of a range (poor location), its information quality is very low."
      },
      {
        id: "B",
        text: "Strong evidence because any large candle matters equally regardless of where it forms.",
        correct: false,
        feedback: "Incorrect. Not all chart areas are equal. The location changes the weight of the evidence. A candle in the middle of a range is highly random."
      },
      {
        id: "C",
        text: "Poor or low-quality location because the move occurred in the middle of the range without any key reference structures nearby.",
        correct: true,
        feedback: "Correct! This is a poor location. Although the candle looks strong, its position in the dead center of the range makes it unreliable noise."
      },
      {
        id: "D",
        text: "Guaranteed reversal because price is inside a range and must rotate back immediately.",
        correct: false,
        feedback: "Incorrect. Ranges lead to rotations, but there are no guarantees in trading. In the middle of the range, price can drift unpredictably."
      }
    ]
  };

  const handleSelect = (optId: string) => {
    setSelectedOpt(optId);
    const opt = scenario.options.find(o => o.id === optId);
    if (opt) {
      setFeedback(opt.feedback);
      setIsCorrect(opt.correct);
    }
  };

  return (
    <InstitutionalFrame label="Interactive Practice Drill" status="DRILL ACTIVE">
      <div className="w-full flex flex-col gap-5 items-center">
        {/* Visual range mockup for scenario */}
        <div className="w-full bg-[#071B36] rounded-2xl p-4 border border-slate-800 relative min-h-[140px] flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
          
          {/* Support and Resistance floors */}
          <div className="absolute top-2 left-0 right-0 h-4 border-y border-red-500/20 bg-red-500/5 flex items-center justify-between px-4">
            <span className="text-[6px] font-mono text-red-400">RANGE RESISTANCE CEILING ($120.00)</span>
          </div>

          <div className="absolute bottom-2 left-0 right-0 h-4 border-y border-teal-500/20 bg-teal-500/5 flex items-center justify-between px-4">
            <span className="text-[6px] font-mono text-teal-400">RANGE SUPPORT FLOOR ($100.00)</span>
          </div>

          {/* Large green candle directly in the center */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="flex flex-col items-center">
              <span className="bg-amber-950/80 border border-amber-500/40 text-amber-300 text-[6px] font-mono px-1 rounded mb-1">
                Midpoint ($110.00)
              </span>
              <MiniCandle color="teal" bodyHeight={35} upperWick={5} lowerWick={5} />
            </div>
          </div>

          <div className="w-full flex justify-between text-[7px] font-mono text-slate-500 z-10">
            <span>Outer Ceiling</span>
            <span>Seller Territory</span>
          </div>
          <div className="w-full flex justify-between text-[7px] font-mono text-slate-500 z-10">
            <span>Outer Floor</span>
            <span>Buyer Territory</span>
          </div>
        </div>

        {/* Question */}
        <div className="w-full text-left">
          <h5 className="text-xs font-bold text-[#071B36] leading-relaxed whitespace-normal break-words">
            {scenario.question}
          </h5>
        </div>

        {/* Options */}
        <div className="w-full flex flex-col gap-2">
          {scenario.options.map((opt) => {
            const isSelected = selectedOpt === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                className={`p-3 rounded-xl border text-xs font-bold text-left transition-all cursor-pointer whitespace-normal break-words leading-tight flex items-start gap-3 ${
                  isSelected 
                    ? opt.correct 
                      ? "bg-teal-50 border-teal-500 text-teal-900 shadow-sm" 
                      : "bg-rose-50 border-rose-500 text-rose-900 shadow-sm" 
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black border shrink-0 ${
                  isSelected 
                    ? opt.correct 
                      ? "bg-teal-600 text-white border-teal-600" 
                      : "bg-rose-600 text-white border-rose-600" 
                    : "bg-slate-100 text-slate-600 border-slate-300"
                }`}>
                  {opt.id}
                </span>
                <span className="flex-1">{opt.text}</span>
              </button>
            );
          })}
        </div>

        {/* Feedback log */}
        {feedback && (
          <div className={`w-full p-4 rounded-xl border flex gap-3 ${
            isCorrect 
              ? "bg-teal-50 border-teal-200 text-teal-800" 
              : "bg-rose-50 border-rose-200 text-rose-800"
          }`}>
            {isCorrect ? (
              <CheckCircle2 className="text-teal-600 shrink-0" size={18} />
            ) : (
              <XCircle className="text-rose-500 shrink-0" size={18} />
            )}
            <div>
              <h6 className="text-xs font-black uppercase mb-1">
                {isCorrect ? "Correct Audit" : "Mistake Logged"}
              </h6>
              <p className="text-xs leading-relaxed whitespace-normal break-words">{feedback}</p>
            </div>
          </div>
        )}
      </div>
    </InstitutionalFrame>
  );
};

// ==========================================
// CARD 11: LocationReadingDebrief
// ==========================================
export const LocationReadingDebrief = () => {
  return (
    <InstitutionalFrame label="Location Audit Debrief" status="AUDIT COMPLETE">
      <div className="w-full flex flex-col gap-6 items-center">
        
        {/* Recap dashboard */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3">
          
          <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm flex flex-col items-center text-center">
            <MapPin className="text-teal-600 mb-2" size={20} />
            <h5 className="text-xs font-black text-[#071B36] uppercase tracking-tight mb-1">Location Floor</h5>
            <p className="text-[10px] text-slate-500 leading-normal whitespace-normal break-words">
              Always check the structural coordinates first. Never judge a candle pattern in a vacuum.
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm flex flex-col items-center text-center">
            <XCircle className="text-rose-500 mb-2" size={20} />
            <h5 className="text-xs font-black text-[#071B36] uppercase tracking-tight mb-1">Ignore the Middle</h5>
            <p className="text-[10px] text-slate-500 leading-normal whitespace-normal break-words">
              The center of ranges and channels is empty space. Focus your analysis on the structural edges.
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm flex flex-col items-center text-center">
            <Layers className="text-purple-600 mb-2" size={20} />
            <h5 className="text-xs font-black text-[#071B36] uppercase tracking-tight mb-1">HTF Boundaries</h5>
            <p className="text-[10px] text-slate-500 leading-normal whitespace-normal break-words">
              Zoom out to the weekly or 4-hour map. The higher-timeframe location always overrides local speed.
            </p>
          </div>

        </div>

        {/* Takeaway badge */}
        <div className="w-full bg-[#071B36] text-white rounded-2xl p-6 text-center border border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
          
          <div className="relative z-10 flex flex-col items-center gap-2">
            <span className="text-[8px] font-mono text-teal-400 uppercase tracking-widest font-black">
              LURNAVA CORE FILTER
            </span>
            <blockquote className="text-sm font-black italic text-slate-100 max-w-md leading-relaxed whitespace-normal break-words">
              "Before you trust the candle shape, look at where it formed. Good trading is about trading locations, not candle patterns."
            </blockquote>
            <div className="w-8 h-px bg-teal-500 my-1" />
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
              Level 0 Module 0.8 Complete
            </span>
          </div>
        </div>
      </div>
    </InstitutionalFrame>
  );
};
