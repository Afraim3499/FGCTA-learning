"use client";

import React, { useState } from "react";
import { 
  MapPin, 
  TrendingUp, 
  XCircle, 
  CheckCircle2, 
  AlertTriangle, 
  Activity, 
  ArrowRight, 
  Search, 
  ShieldAlert,
  Sliders,
  AlertCircle,
  Globe,
  DollarSign,
  Clock,
  Compass
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
// CARD 1: ForexLocationFoundation
// ==========================================
export const ForexLocationFoundation = () => {
  const [selectedLoc, setSelectedLoc] = useState<string>("session");

  const elements = [
    {
      id: "session",
      name: "Layer 1: Session Structure",
      time: "Intraday Boundaries",
      purpose: "Timeline Limits",
      color: "slate",
      desc: "Intraday coordinates established by session highs and lows (Asia Range, London Open, NY Open). Tells you where short-term order density is clustered.",
      candles: [
        { color: "teal", h: 15, uw: 5, lw: 5 },
        { color: "rose", h: 10, uw: 10, lw: 10 },
        { color: "teal", h: 12, uw: 5, lw: 5 }
      ]
    },
    {
      id: "pair",
      name: "Layer 2: Pair Structure",
      time: "Multi-Day swings",
      purpose: "Historical Memory",
      color: "teal",
      desc: "Prior swing highs and lows printed on daily/4-hour timeframes. These macro coordinates override local session lines and determine daily trend zones.",
      candles: [
        { color: "teal", h: 40, uw: 15, lw: 5 },
        { color: "teal", h: 30, uw: 5, lw: 5 }
      ]
    },
    {
      id: "usd",
      name: "Layer 3: USD Context",
      time: "DXY Index alignment",
      purpose: "Macro Anchor",
      color: "amber",
      desc: "The value coordinates of the US Dollar Index. Major USD pairs must align with DXY support/resistance coordinates to prove institutional backing.",
      candles: [
        { color: "rose", h: 35, uw: 10, lw: 25 },
        { color: "rose", h: 20, uw: 5, lw: 40 }
      ]
    },
    {
      id: "related",
      name: "Layer 4: Related-Pair Context",
      time: "Correlation status",
      purpose: "Broad Movement",
      color: "purple",
      desc: "Cross-reference coordinates of sibling majors (like GBP/USD). Verifies if the move is broad and institutional or isolated retail noise.",
      candles: [
        { color: "teal", h: 15, uw: 5, lw: 35 }
      ]
    }
  ];

  const active = elements.find(e => e.id === selectedLoc) || elements[0];

  return (
    <InstitutionalFrame label="Forex Location Audit Map" status="FOUR-LAYER SCANNER">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-500 max-w-xl text-center leading-relaxed whitespace-normal break-words">
          Interactive Map: Select a location layer to audit its coordinate role in the Forex reading process.
        </p>

        {/* Timeline representation */}
        <div className="w-full bg-[#071B36] rounded-2xl p-4 border border-slate-800 flex flex-col relative overflow-hidden min-h-[200px] justify-between">
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
          
          <div className="relative z-10 w-full grid grid-cols-4 gap-2 items-end h-28 pt-4">
            {elements.map((el) => {
              const isSelected = el.id === selectedLoc;
              return (
                <button
                  key={el.id}
                  onClick={() => setSelectedLoc(el.id)}
                  className={`flex flex-col items-center justify-end h-full rounded-xl p-2 transition-all cursor-pointer ${
                    isSelected 
                      ? "bg-slate-800/40 border border-slate-700/60 shadow-lg scale-105" 
                      : "hover:bg-slate-900/30 border border-transparent"
                  }`}
                >
                  <span className="text-[7px] font-mono text-slate-400 text-center leading-none mb-2 break-words max-w-full uppercase font-bold">
                    {el.name.split(":")[0]}
                  </span>
                  
                  {/* Candlestick Graphic representation */}
                  <div className="flex gap-1 items-end">
                    {el.candles.map((c, i) => (
                      <MiniCandle 
                        key={i}
                        color={c.color as any}
                        bodyHeight={c.h}
                        upperWick={c.uw}
                        lowerWick={c.lw}
                      />
                    ))}
                  </div>

                  <div className={`mt-2 px-1 py-0.5 rounded text-[6px] font-mono font-bold ${
                    el.color === "teal" ? "bg-teal-500/20 text-teal-400" :
                    el.color === "amber" ? "bg-amber-500/20 text-amber-400" :
                    el.color === "purple" ? "bg-purple-500/20 text-purple-400" :
                    "bg-slate-500/20 text-slate-400"
                  }`}>
                    {el.purpose.split(" ")[0]}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="w-full flex justify-between border-t border-slate-800/60 pt-2 text-[8px] font-mono text-slate-500">
            <span>Layer 1: Session</span>
            <span>Layer 2: Pair</span>
            <span>Layer 3: USD Context</span>
            <span>Layer 4: Related-Pair</span>
          </div>
        </div>

        {/* Details Panel */}
        <div className="w-full bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest leading-none block">{active.time}</span>
              <span className={`text-[7px] font-mono font-bold px-1.5 py-0.5 rounded uppercase ${
                active.color === "teal" ? "bg-teal-50 text-teal-700 border border-teal-100" :
                active.color === "amber" ? "bg-amber-50 text-amber-700 border border-amber-100" :
                active.color === "purple" ? "bg-purple-50 text-purple-700 border border-purple-100" :
                "bg-slate-50 text-slate-700 border border-slate-100"
              }`}>
                {active.purpose}
              </span>
            </div>
            <h5 className="text-sm font-black text-[#071B36] uppercase tracking-tight mb-1 whitespace-normal break-words">{active.name}</h5>
            <p className="text-xs text-slate-600 leading-relaxed whitespace-normal break-words">{active.desc}</p>
          </div>
        </div>

        <MentorInsight 
          text="Before you ask what the candle is doing, locate the pair across session structure, pair structure, USD context, and related-pair context. Never read a candle in isolation." 
          analogy="A cargo ship's single signal light means nothing. You must check its GPS coordinates, local harbor limits, weather context, and the position of surrounding ships to read the situation."
        />
      </div>
    </InstitutionalFrame>
  );
};

// ==========================================
// CARD 2: ForexSessionHighLowLocation
// ==========================================
export const ForexSessionHighLowLocation = () => {
  const [selectedBehavior, setSelectedBehavior] = useState<string>("reject");

  const behaviors = [
    {
      id: "reject",
      name: "Limit Rejection Wick",
      status: "DEFENDED EDGE",
      color: "teal",
      candles: [
        { color: "teal", h: 30, uw: 5, lw: 5 },
        { color: "rose", h: 10, uw: 40, lw: 5 } // Long upper wick spike
      ],
      desc: "Price spikes past the Asia range ceiling to trigger resting buy stops, but encounters selling defense. It closes back below the level, leaving a clear wick. Rejection coordinate confirmed."
    },
    {
      id: "overshoot",
      name: "Overshoot & Return Inside",
      status: "FALSE EXPANSION",
      color: "rose",
      candles: [
        { color: "teal", h: 35, uw: 10, lw: 5 },
        { color: "rose", h: 15, uw: 45, lw: 10 }, // Big wick through ceiling
        { color: "rose", h: 25, uw: 5, lw: 5 }
      ],
      desc: "Price breaks the Asia high by 10 pips, creating the illusion of a trend expansion. However, the next candle returns inside. The breakout location is declared false."
    },
    {
      id: "accept",
      name: "Structural Acceptance",
      status: "TREND EXPANSION",
      color: "purple",
      candles: [
        { color: "teal", h: 30, uw: 10, lw: 5 },
        { color: "teal", h: 35, uw: 10, lw: 10 }, // Clean close above level
        { color: "slate", h: 15, uw: 5, lw: 5 } // Consolidation above
      ],
      desc: "Price pushes past the Asia high and closes strongly above it with a solid candle body. The subsequent candles consolidate above the high, proving the pair has accepted the new higher zone."
    }
  ];

  const active = behaviors.find(b => b.id === selectedBehavior) || behaviors[0];

  return (
    <InstitutionalFrame label="Layer 1: Session Boundary Test" status="BOUNDARY SCENARIOS">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-500 max-w-xl text-center leading-relaxed whitespace-normal break-words">
          Interactive Audit: Select a boundary reaction behavior to view its candle structure and details.
        </p>

        {/* Mock Chart with Session boundaries */}
        <div className="w-full bg-[#071B36] rounded-2xl p-4 border border-slate-800 relative min-h-[200px] flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
          
          {/* Asia High Reference Line */}
          <div className="absolute top-[35%] left-0 right-0 h-px border-t border-dashed border-teal-500/60 z-10 flex items-center justify-between px-4">
            <span className="bg-[#071B36] text-teal-400 text-[8px] font-mono px-2 py-0.5 border border-teal-500/20 rounded -translate-y-1/2">
              ASIA SESSION HIGH ($1.0900)
            </span>
          </div>

          <div className="relative z-10 w-full flex justify-between items-end h-32 pt-4">
            {/* Asia Range Consolidation */}
            <div className="flex items-end gap-1 border-r border-slate-800/60 pr-4">
              <div className="flex flex-col items-center">
                <MiniCandle color="teal" bodyHeight={15} upperWick={5} lowerWick={5} />
              </div>
              <div className="flex flex-col items-center">
                <MiniCandle color="rose" bodyHeight={12} upperWick={10} lowerWick={5} />
              </div>
              <div className="flex flex-col items-center">
                <MiniCandle color="teal" bodyHeight={18} upperWick={5} lowerWick={5} />
              </div>
            </div>

            {/* Test candles */}
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
        <div className="w-full grid grid-cols-3 gap-2">
          {behaviors.map((b) => (
            <button
              key={b.id}
              onClick={() => setSelectedBehavior(b.id)}
              className={`px-2 py-2 rounded-xl border text-[9px] font-bold text-center transition-all cursor-pointer break-words whitespace-normal leading-tight ${
                selectedBehavior === b.id 
                  ? "bg-[#071B36] text-white border-[#071B36]" 
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
              }`}
            >
              {b.name}
            </button>
          ))}
        </div>

        {/* Behavior Description */}
        <div className="w-full bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm flex flex-col gap-2">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 flex-wrap gap-2">
            <h5 className="text-xs font-black text-[#071B36] uppercase tracking-tight whitespace-normal break-words">{active.name}</h5>
            <span className={`text-[8px] font-mono font-black px-2 py-0.5 rounded border ${
              active.color === "teal" ? "bg-teal-50 text-teal-700 border-teal-200" :
              active.color === "rose" ? "bg-rose-50 text-rose-700 border-rose-200" :
              "bg-purple-50 text-purple-700 border-purple-200"
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
// CARD 3: ForexSessionMiddleZoneNoise
// ==========================================
export const ForexSessionMiddleZoneNoise = () => {
  const [activeSide, setActiveSide] = useState<"edge" | "middle">("edge");

  return (
    <InstitutionalFrame label="Session Structure Filter" status="LOCATION QUALITY">
      <div className="w-full flex flex-col gap-6 items-center">
        <div className="flex bg-slate-100 p-1 rounded-xl shrink-0">
          <button
            onClick={() => setActiveSide("edge")}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeSide === "edge" 
                ? "bg-[#071B36] text-white shadow-sm" 
                : "text-slate-600 hover:text-[#071B36]"
            }`}
          >
            Session Edges (High Quality)
          </button>
          <button
            onClick={() => setActiveSide("middle")}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeSide === "middle" 
                ? "bg-[#071B36] text-white shadow-sm" 
                : "text-slate-600 hover:text-[#071B36]"
            }`}
          >
            Noisy Middle (Low Quality)
          </button>
        </div>

        {/* Visual Map */}
        <div className="w-full bg-[#071B36] rounded-2xl p-4 border border-slate-800 relative min-h-[220px] flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
          
          {/* Upper Edge zone */}
          <div className={`absolute top-2 left-0 right-0 h-8 border-y flex items-center justify-between px-4 transition-all duration-300 ${
            activeSide === "edge" ? "bg-teal-500/20 border-teal-500/40" : "bg-transparent border-slate-800/10"
          }`}>
            <span className="text-[7px] font-mono text-slate-400 font-bold uppercase tracking-wider">Upper Range Edge (High-Info Ceiling)</span>
          </div>

          {/* Middle zone */}
          <div className={`absolute top-[40%] bottom-[40%] left-0 right-0 border-y flex items-center justify-between px-4 transition-all duration-300 ${
            activeSide === "middle" ? "bg-amber-500/20 border-amber-500/40" : "bg-transparent border-slate-800/10"
          }`}>
            <span className="text-[7px] font-mono text-slate-400 font-bold uppercase tracking-wider">Noisy Midpoint Zone (Equilibrium Noise)</span>
          </div>

          {/* Lower Edge zone */}
          <div className={`absolute bottom-2 left-0 right-0 h-8 border-y flex items-center justify-between px-4 transition-all duration-300 ${
            activeSide === "edge" ? "bg-teal-500/20 border-teal-500/40" : "bg-transparent border-slate-800/10"
          }`}>
            <span className="text-[7px] font-mono text-slate-400 font-bold uppercase tracking-wider">Lower Range Edge (High-Info Floor)</span>
          </div>

          <div className="relative z-10 w-full flex justify-around items-end h-28 pt-10">
            {activeSide === "edge" ? (
              <>
                <div className="flex flex-col items-center">
                  <span className="text-[6px] font-mono text-teal-400 font-bold mb-1">Clear Reject</span>
                  <MiniCandle color="rose" bodyHeight={10} upperWick={5} lowerWick={30} />
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[6px] font-mono text-teal-400 font-bold mb-1">Clean Close</span>
                  <MiniCandle color="teal" bodyHeight={35} upperWick={10} lowerWick={5} />
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col items-center relative z-20">
                  <span className="text-[6px] font-mono text-rose-400 font-bold mb-1">Decoy Candle</span>
                  <MiniCandle color="teal" bodyHeight={35} upperWick={5} lowerWick={5} />
                  <div className="absolute top-12 bg-slate-900/90 border border-slate-700/80 p-2 rounded text-[7px] text-slate-300 w-24 text-center shadow-lg">
                    Strong looking, but located in noisy middle.
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
          {activeSide === "edge" ? (
            <div className="flex gap-3">
              <CheckCircle2 className="text-teal-600 shrink-0" size={18} />
              <div>
                <h5 className="text-xs font-black text-teal-800 uppercase mb-1">Edges Ask Clean Questions</h5>
                <p className="text-xs text-slate-600 leading-relaxed whitespace-normal break-words">
                  Because key institutional buy/sell orders cluster at session boundaries, price is forced to show defense or breakout acceptance here. Reading quality is peak.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex gap-3">
              <ShieldAlert className="text-amber-500 shrink-0" size={18} />
              <div>
                <h5 className="text-xs font-black text-amber-800 uppercase mb-1">The Midpoint Equilibrium Vacuum</h5>
                <p className="text-xs text-slate-600 leading-relaxed whitespace-normal break-words">
                  The middle of a session range contains no historical memory. Price swings here are highly random, driven by minor retail order matching. A beautiful candle here is noise. Ignore it.
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
// CARD 4: ForexLondonExpansionLocation
// ==========================================
export const ForexLondonExpansionLocation = () => {
  const [selectedOutcome, setSelectedOutcome] = useState<string>("stall");

  const outcomes = [
    {
      id: "hold",
      name: "Expansion Hold",
      color: "teal",
      candles: [
        { color: "teal", h: 35, uw: 10, lw: 5 }, // Breakout close
        { color: "slate", h: 10, uw: 5, lw: 5 }, // Hold doji
        { color: "teal", h: 25, uw: 5, lw: 5 }
      ],
      desc: "London volume pushes price clearly past the Asia ceiling. Price consolidates with small bodies above, proving buyers have accepted the higher location. Valid trend continuation."
    },
    {
      id: "return",
      name: "Rejection Return Inside",
      color: "rose",
      candles: [
        { color: "teal", h: 30, uw: 15, lw: 5 }, // Break attempt
        { color: "rose", h: 35, uw: 5, lw: 10 } // Immediate engulf back inside
      ],
      desc: "Price spikes past the Asia high, but fails to sustain. Within the next hour, a large red candle sweeps back inside. The location rejected expansion, turning it into a trap."
    },
    {
      id: "stall",
      name: "Overshoot & Stall",
      color: "amber",
      candles: [
        { color: "teal", h: 20, uw: 20, lw: 5 }, // Spike above Asia high
        { color: "slate", h: 5, uw: 15, lw: 15 } // Doji stalling right at edge
      ],
      desc: "Price extends slightly above the Asia ceiling but immediately stalls. Candles become tiny, leaving wicks on both sides. The location lacks follow-through. Reading is mixed and low quality."
    }
  ];

  const active = outcomes.find(o => o.id === selectedOutcome) || outcomes[0];

  return (
    <InstitutionalFrame label="Layer 2: London Expansion Audit" status="EXPANSION SCATTER">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-500 max-w-xl text-center leading-relaxed whitespace-normal break-words">
          Interactive Lab: Click the outcomes below to audit the location of London's expansion relative to the Asia range.
        </p>

        {/* Chart representation */}
        <div className="w-full bg-[#071B36] rounded-2xl p-4 border border-slate-800 relative min-h-[220px] flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
          
          {/* Asia Session Box representing boundaries */}
          <div className="absolute bottom-4 left-4 right-1/2 top-12 bg-slate-500/10 border border-slate-600/30 rounded-xl p-2 z-10 flex flex-col justify-between">
            <span className="text-[7px] font-mono text-slate-400 uppercase font-black tracking-wider">Asia Session Range</span>
            <div className="w-full border-t border-dashed border-slate-700/60" />
            <span className="text-[6px] font-mono text-slate-500">Vol: 120k contracts</span>
          </div>

          <div className="relative z-20 w-full flex justify-end items-end h-32 pt-4 pr-4">
            <div className="flex items-end gap-3">
              {active.candles.map((c, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-[6px] font-mono text-slate-500 mb-1">
                    {i === 0 ? "London Open" : i === 1 ? "Expansion" : "Verify"}
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
        <div className="w-full grid grid-cols-3 gap-2">
          {outcomes.map((o) => (
            <button
              key={o.id}
              onClick={() => setSelectedOutcome(o.id)}
              className={`px-2 py-2.5 rounded-xl border text-[9px] font-bold text-center transition-all cursor-pointer break-words whitespace-normal leading-tight ${
                selectedOutcome === o.id 
                  ? "bg-[#071B36] text-white border-[#071B36]" 
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
              }`}
            >
              {o.name}
            </button>
          ))}
        </div>

        {/* Details Panel */}
        <div className="w-full bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm flex flex-col gap-2">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 flex-wrap gap-2">
            <h5 className="text-xs font-black text-[#071B36] uppercase tracking-tight whitespace-normal break-words">{active.name}</h5>
            <span className={`text-[8px] font-mono font-black px-2 py-0.5 rounded ${
              active.color === "teal" ? "bg-teal-50 text-teal-700 border border-teal-200" :
              active.color === "rose" ? "bg-rose-50 text-rose-700 border border-rose-200" :
              "bg-amber-50 text-amber-700 border border-amber-200"
            }`}>
              Reading Quality: {active.color === "teal" ? "Clear" : active.color === "rose" ? "Rejection" : "Mixed"}
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed whitespace-normal break-words">{active.desc}</p>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

// ==========================================
// CARD 5: ForexNewYorkLocationShift
// ==========================================
export const ForexNewYorkLocationShift = () => {
  const [selectedPath, setSelectedPath] = useState<string>("continue");

  const paths = [
    {
      id: "continue",
      name: "NY Continuation",
      action: "Trend Hold",
      color: "teal",
      candles: [
        { color: "teal", h: 30, uw: 5, lw: 5 }, // London high
        { color: "slate", h: 10, uw: 10, lw: 10 }, // NY Open pullback test
        { color: "teal", h: 35, uw: 5, lw: 5 } // Continuation breakout
      ],
      desc: "New York session opens and tests the London breakout high from above. Buyers actively step in to defend the London high location, leading to clear trend continuation."
    },
    {
      id: "reversal",
      name: "NY Reversal",
      action: "Return Inside Range",
      color: "rose",
      candles: [
        { color: "teal", h: 30, uw: 5, lw: 5 }, // London high
        { color: "rose", h: 40, uw: 5, lw: 5 }, // NY open massive drop
        { color: "rose", h: 25, uw: 5, lw: 5 } // Return back inside Asia range
      ],
      desc: "New York completely rejects the morning's London expansion. Sellers push price firmly back below the London high and inside the Asia range, changing the location reading to a trap."
    },
    {
      id: "stall",
      name: "NY Consolidation",
      action: "Mixed Range Grind",
      color: "amber",
      candles: [
        { color: "teal", h: 30, uw: 5, lw: 5 }, // London high
        { color: "slate", h: 12, uw: 10, lw: 10 }, // Stalling dojis
        { color: "slate", h: 10, uw: 8, lw: 8 }
      ],
      desc: "New York session lacks volume or directional catalyst. Price crawls sideways around the London breakout high. Location provides zero clear information; stand aside."
    }
  ];

  const active = paths.find(p => p.id === selectedPath) || paths[0];

  return (
    <InstitutionalFrame label="Session Handoff Analyzer" status="NY TRANSITION SCANNERS">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-500 max-w-xl text-center leading-relaxed whitespace-normal break-words">
          Interactive Paths: Select a New York scenario to see how US volume handles the London breakout location.
        </p>

        {/* Visual timeline */}
        <div className="w-full bg-[#071B36] rounded-2xl p-4 border border-slate-800 relative min-h-[220px] flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
          
          {/* London Breakout High Line */}
          <div className="absolute top-[40%] left-0 right-0 h-px border-t border-dashed border-purple-500/60 z-10 flex items-center justify-between px-4">
            <span className="bg-[#071B36] text-purple-400 text-[8px] font-mono px-2 py-0.5 border border-purple-500/20 rounded -translate-y-1/2">
              LONDON EXPANSION HIGH ($1.0880)
            </span>
          </div>

          <div className="relative z-10 w-full flex justify-between items-end h-32 pt-4">
            {/* Left: London session baseline */}
            <div className="flex items-end gap-1 border-r border-slate-800/60 pr-4">
              <span className="text-[6px] font-mono text-slate-500 uppercase tracking-widest absolute top-2 left-2">London Session</span>
              <MiniCandle color="teal" bodyHeight={20} upperWick={5} lowerWick={5} />
              <MiniCandle color="teal" bodyHeight={35} upperWick={10} lowerWick={5} />
            </div>

            {/* Right: New York action based on selection */}
            <div className="flex-1 flex justify-center items-end gap-3 pl-4 relative">
              <span className="text-[6px] font-mono text-slate-500 uppercase tracking-widest absolute top-2 right-2">NY Session</span>
              {active.candles.map((c, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-[6px] font-mono text-slate-500 mb-1">
                    {i === 0 ? "NY Open" : i === 1 ? "NY Test" : "Verify"}
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
        <div className="w-full grid grid-cols-3 gap-2">
          {paths.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedPath(p.id)}
              className={`px-2 py-2.5 rounded-xl border text-[9px] font-bold text-center transition-all cursor-pointer break-words whitespace-normal leading-tight ${
                selectedPath === p.id 
                  ? "bg-[#071B36] text-white border-[#071B36]" 
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* Path description */}
        <div className="w-full bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm flex flex-col gap-2">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 flex-wrap gap-2">
            <h5 className="text-xs font-black text-[#071B36] uppercase tracking-tight whitespace-normal break-words">{active.name}</h5>
            <span className={`text-[8px] font-mono font-black px-2 py-0.5 rounded ${
              active.color === "teal" ? "bg-teal-50 text-teal-700 border border-teal-200" :
              active.color === "rose" ? "bg-rose-50 text-rose-700 border border-rose-200" :
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
// CARD 6: ForexPairSwingLocation
// ==========================================
export const ForexPairSwingLocation = () => {
  const [selectedSwing, setSelectedSwing] = useState<string>("reject");

  const swings = [
    {
      id: "reject",
      name: "Swing Rejection Wick",
      color: "teal",
      action: "Zone Defense Hold",
      candles: [
        { color: "rose", h: 30, uw: 5, lw: 5 },
        { color: "teal", h: 10, uw: 5, lw: 35 }, // Long rejection wick
        { color: "teal", h: 25, uw: 5, lw: 5 }
      ],
      desc: "EUR/USD returns to yesterday's swing low. Price temporarily spikes below but wicks back aggressively, closing above the level. Shows buying inventory defense at Layer 3."
    },
    {
      id: "accept",
      name: "Swing Body Acceptance",
      color: "rose",
      action: "Breakdown Close",
      candles: [
        { color: "rose", h: 35, uw: 5, lw: 5 },
        { color: "rose", h: 40, uw: 5, lw: 5 } // Solid close below support line
      ],
      desc: "Price cuts cleanly through the prior swing low with a solid red body candle that closes below. Sellers have accepted value below the previous floor."
    },
    {
      id: "overshoot",
      name: "Overshoot & Reclaim Sweep",
      color: "purple",
      action: "Liquidity Sweep",
      candles: [
        { color: "rose", h: 30, uw: 5, lw: 5 },
        { color: "rose", h: 12, uw: 5, lw: 45 }, // Deep spike sweeping support
        { color: "teal", h: 35, uw: 10, lw: 5 }
      ],
      desc: "Price overshoots the swing low by 15 pips to trigger sell-stops, but rejects instantly to close above. High-probability trap."
    }
  ];

  const active = swings.find(s => s.id === selectedSwing) || swings[0];

  return (
    <InstitutionalFrame label="Layer 3: Prior Swing Coordinates" status="SWING DYNAMICS">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-500 max-w-xl text-center leading-relaxed whitespace-normal break-words">
          Interactive Scenarios: Select a scenario to see how the pair responds to a prior multi-day swing low.
        </p>

        {/* Visual Swing Chart */}
        <div className="w-full bg-[#071B36] rounded-2xl p-4 border border-slate-800 relative min-h-[220px] flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
          
          {/* Swing Low Line */}
          <div className="absolute bottom-[35%] left-0 right-0 h-px border-t border-dashed border-teal-500/60 z-10 flex items-center justify-between px-4">
            <span className="bg-[#071B36] text-teal-400 text-[8px] font-mono px-2 py-0.5 border border-teal-500/20 rounded -translate-y-1/2">
              PRIOR DAILY SWING LOW ($1.0780)
            </span>
          </div>

          <div className="relative z-10 w-full flex justify-between items-end h-32 pt-4">
            {/* Left: Previous daily pivot */}
            <div className="flex items-end gap-1 border-r border-slate-800/60 pr-4">
              <div className="flex flex-col items-center">
                <span className="text-[6px] font-mono text-slate-500 mb-1">Previous Swing</span>
                <MiniCandle color="teal" bodyHeight={12} upperWick={5} lowerWick={30} />
              </div>
            </div>

            {/* Right: Path candles based on selection */}
            <div className="flex-1 flex justify-center items-end gap-3 pl-4">
              {active.candles.map((c, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <span className="text-[6px] font-mono text-slate-500 mb-1">
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

        {/* Buttons */}
        <div className="w-full grid grid-cols-3 gap-2">
          {swings.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedSwing(s.id)}
              className={`px-2 py-2.5 rounded-xl border text-[9px] font-bold text-center transition-all cursor-pointer break-words whitespace-normal leading-tight ${
                selectedSwing === s.id 
                  ? "bg-[#071B36] text-white border-[#071B36]" 
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* Swing Description */}
        <div className="w-full bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm flex flex-col gap-2">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 flex-wrap gap-2">
            <h5 className="text-xs font-black text-[#071B36] uppercase tracking-tight whitespace-normal break-words">{active.name}</h5>
            <span className={`text-[8px] font-mono font-black px-2 py-0.5 rounded border ${
              active.color === "teal" ? "bg-teal-50 text-teal-700 border-teal-200" :
              active.color === "rose" ? "bg-rose-50 text-rose-700 border-rose-200" :
              "bg-purple-50 text-purple-700 border-purple-200"
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
// CARD 7: ForexUsdLocationContext
// ==========================================
export const ForexUsdLocationContext = () => {
  const [selectedContext, setSelectedContext] = useState<string>("aligned");

  const contexts = [
    {
      id: "aligned",
      name: "USD Context Aligned",
      quality: "High Reading Quality",
      color: "teal",
      dxyText: "DXY is sitting at a key structural resistance ceiling, making USD index likely to decline.",
      eurusdText: "EUR/USD is sitting at its session support floor. Since USD weakness supports EUR/USD strength, the setup is highly aligned.",
      dxyCandle: { color: "teal", h: 30, uw: 20, lw: 5 }, // Rejection ceiling
      eurusdCandle: { color: "rose", h: 10, uw: 5, lw: 35 } // Reject floor
    },
    {
      id: "conflicting",
      name: "USD Context Conflicting",
      quality: "Low/Mixed Quality - Warning",
      color: "rose",
      dxyText: "DXY has broken out and accepted value above its resistance ceiling, showing strong USD buying pressure.",
      eurusdText: "EUR/USD is testing support. However, because DXY is breaking out, the EUR/USD support floor is highly likely to break down. Avoid trading.",
      dxyCandle: { color: "teal", h: 40, uw: 5, lw: 5 }, // Breakout close
      eurusdCandle: { color: "rose", h: 20, uw: 5, lw: 10 } // Weak support test
    },
    {
      id: "unclear",
      name: "USD Context Unclear",
      quality: "Moderate / Neutral Quality",
      color: "amber",
      dxyText: "DXY is trading inside its midpoint noise, showing no clear institutional bias.",
      eurusdText: "EUR/USD is at a support floor. The setup is tradeable but has no macro tailwinds. Rely strictly on local candle confirmation.",
      dxyCandle: { color: "slate", h: 15, uw: 10, lw: 10 }, // Chop doji
      eurusdCandle: { color: "rose", h: 15, uw: 5, lw: 25 } // Normal test
    }
  ];

  const active = contexts.find(c => c.id === selectedContext) || contexts[0];

  return (
    <InstitutionalFrame label="Layer 4: DXY Anchor Audit" status="DXY ALIGNMENT">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-500 max-w-xl text-center leading-relaxed whitespace-normal break-words">
          Interactive Context: Toggle DXY index scenarios to see how macro USD context modifies the EUR/USD support floor reading quality.
        </p>

        {/* Dual Panel Layout */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* EUR/USD Panel */}
          <div className="bg-[#071B36] rounded-xl p-4 border border-slate-800 flex flex-col justify-between relative min-h-[160px]">
            <span className="text-[8px] font-mono text-slate-400 uppercase tracking-wider absolute top-2 left-2 font-bold">EUR/USD Local Floor</span>
            
            <div className="absolute bottom-[20%] left-0 right-0 h-px border-t border-dashed border-teal-500/30" />
            
            <div className="w-full flex justify-center items-end h-full pt-6 pb-2 z-10">
              <div className="flex flex-col items-center">
                <span className="text-[6px] font-mono text-slate-500 mb-1">Local Test</span>
                <MiniCandle 
                  color={active.eurusdCandle.color as any}
                  bodyHeight={active.eurusdCandle.h}
                  upperWick={active.eurusdCandle.uw}
                  lowerWick={active.eurusdCandle.lw}
                />
              </div>
            </div>
            
            <p className="text-[9px] text-slate-300 leading-tight whitespace-normal break-words pt-2 border-t border-slate-800 z-10">
              {active.eurusdText}
            </p>
          </div>

          {/* DXY Index Panel */}
          <div className="bg-[#071B36] rounded-xl p-4 border border-slate-800 flex flex-col justify-between relative min-h-[160px]">
            <span className="text-[8px] font-mono text-slate-400 uppercase tracking-wider absolute top-2 left-2 font-bold">DXY Index Ceiling</span>
            
            <div className="absolute top-[30%] left-0 right-0 h-px border-t border-dashed border-rose-500/30" />
            
            <div className="w-full flex justify-center items-end h-full pt-6 pb-2 z-10">
              <div className="flex flex-col items-center">
                <span className="text-[6px] font-mono text-slate-500 mb-1">USD Status</span>
                <MiniCandle 
                  color={active.dxyCandle.color as any}
                  bodyHeight={active.dxyCandle.h}
                  upperWick={active.dxyCandle.uw}
                  lowerWick={active.dxyCandle.lw}
                />
              </div>
            </div>

            <p className="text-[9px] text-slate-300 leading-tight whitespace-normal break-words pt-2 border-t border-slate-800 z-10">
              {active.dxyText}
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="w-full grid grid-cols-3 gap-2">
          {contexts.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedContext(c.id)}
              className={`px-2 py-2 rounded-xl border text-[9px] font-bold text-center transition-all cursor-pointer break-words whitespace-normal leading-tight ${
                selectedContext === c.id 
                  ? "bg-[#071B36] text-white border-[#071B36]" 
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Summary */}
        <div className="w-full bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm flex justify-between items-center gap-4">
          <div className="flex-1 min-w-0">
            <span className="text-[8px] font-mono text-slate-400 uppercase tracking-widest leading-none block mb-1">Context Rating</span>
            <h5 className="text-xs font-black text-[#071B36] uppercase tracking-tight whitespace-normal break-words">{active.name}</h5>
          </div>
          <ReadingQualityBadge quality={active.quality} />
        </div>
      </div>
    </InstitutionalFrame>
  );
};

// ==========================================
// CARD 8: ForexRelatedPairLocation
// ==========================================
export const ForexRelatedPairLocation = () => {
  const [isAligned, setIsAligned] = useState<boolean>(true);

  return (
    <InstitutionalFrame label="Layer 5: Sibling Pair Check" status="CORRELATION SCANNER">
      <div className="w-full flex flex-col gap-6 items-center">
        <div className="flex bg-slate-100 p-1 rounded-xl shrink-0">
          <button
            onClick={() => setIsAligned(true)}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              isAligned 
                ? "bg-[#071B36] text-white shadow-sm" 
                : "text-slate-600 hover:text-[#071B36]"
            }`}
          >
            Aligned Move (High Quality)
          </button>
          <button
            onClick={() => setIsAligned(false)}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              !isAligned 
                ? "bg-[#071B36] text-white shadow-sm" 
                : "text-slate-600 hover:text-[#071B36]"
            }`}
          >
            Isolated Move (Low Quality)
          </button>
        </div>

        {/* Side-by-Side Displays */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* EUR/USD */}
          <div className="bg-[#071B36] rounded-xl p-4 border border-slate-800 flex flex-col justify-between relative min-h-[140px]">
            <span className="text-[8px] font-mono text-slate-400 uppercase tracking-wider absolute top-2 left-2 font-bold">EUR/USD (Primary)</span>
            
            <div className="absolute top-[30%] left-0 right-0 h-px border-t border-dashed border-teal-500/30" />
            
            <div className="w-full flex justify-center items-end h-full pt-6 pb-2 z-10">
              <div className="flex flex-col items-center">
                <MiniCandle color="teal" bodyHeight={35} upperWick={10} lowerWick={5} />
                <span className="text-[7px] font-mono text-teal-400 font-bold mt-1">Breaks Session High</span>
              </div>
            </div>
          </div>

          {/* GBP/USD */}
          <div className="bg-[#071B36] rounded-xl p-4 border border-slate-800 flex flex-col justify-between relative min-h-[140px]">
            <span className="text-[8px] font-mono text-slate-400 uppercase tracking-wider absolute top-2 left-2 font-bold">GBP/USD (Related Pair)</span>
            
            <div className="absolute top-[50%] left-0 right-0 h-px border-t border-dashed border-slate-800" />
            
            <div className="w-full flex justify-center items-end h-full pt-6 pb-2 z-10">
              {isAligned ? (
                <div className="flex flex-col items-center">
                  <MiniCandle color="teal" bodyHeight={30} upperWick={10} lowerWick={5} />
                  <span className="text-[7px] font-mono text-teal-400 font-bold mt-1">Breaks Session High</span>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <MiniCandle color="slate" bodyHeight={10} upperWick={10} lowerWick={10} />
                  <span className="text-[7px] font-mono text-amber-400 font-bold mt-1">Trapped in Midpoint Noise</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Analysis Panel */}
        <div className="w-full bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm flex flex-col gap-2">
          {isAligned ? (
            <div className="flex gap-3">
              <CheckCircle2 className="text-teal-600 shrink-0" size={18} />
              <div>
                <h5 className="text-xs font-black text-teal-800 uppercase mb-1">Aligned Session Breakout</h5>
                <p className="text-xs text-slate-600 leading-relaxed whitespace-normal break-words">
                  Both EUR/USD and GBP/USD are pushing past their session ceilings simultaneously. This coordinated movement proves that broad institutional capital is actively selling USD and buying European currencies, validating the breakout location.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex gap-3">
              <ShieldAlert className="text-amber-500 shrink-0" size={18} />
              <div>
                <h5 className="text-xs font-black text-amber-800 uppercase mb-1">Isolated Breakout Trap</h5>
                <p className="text-xs text-slate-600 leading-relaxed whitespace-normal break-words">
                  While EUR/USD looks strong, GBP/USD is completely dead in the water, trapped in midpoint range chop. This conflict suggests the EUR/USD move is highly isolated—often representing a false hunt before rotating back inside.
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
// CARD 9: ForexLocationFirstWorkflow
// ==========================================
export const ForexLocationFirstWorkflow = () => {
  const steps = [
    {
      title: "1. Map Session Boundaries",
      desc: "Identify the Asia high/low range limits. Mark these coordinates as the starting ceilings and floors of the day.",
      icon: Compass,
      status: "COORDINATES MAPPED"
    },
    {
      title: "2. Check USD Context",
      desc: "Consult the DXY chart. Ensure the Dollar Index is at a compatible area (e.g. resistance ceiling if buying a pair support).",
      icon: DollarSign,
      status: "USD ALIGNED"
    },
    {
      title: "3. Cross-Check Related Pairs",
      desc: "Verify if GBP/USD or other related majors are testing similar boundary edges, confirming broad flow.",
      icon: Globe,
      status: "CORRELATION VERIFIED"
    },
    {
      title: "4. Audit Local Behavior",
      desc: "Analyze candle closes and wicks at the edge. Watch for rejection wicks or a solid body close showing acceptance.",
      icon: Activity,
      status: "BEHAVIOR AUDITED"
    },
    {
      title: "5. Classify Reading Quality",
      desc: "Rate the coordinate location as Clear, Mixed, or Unclear. Stand aside immediately if price is in midpoint noise.",
      icon: CheckCircle2,
      status: "SCAN COMPLETED"
    }
  ];

  return (
    <StepWorkflow
      steps={steps}
      label="Forex Location Workflow"
      status="WORKFLOW MONITOR"
      desc="Interactive Checklist: Click the steps in sequence to run through the location-first Forex reading workflow."
    />
  );
};

export const ForexLocationQualityPracticeDrill = () => {
  const options = [
    {
      id: "A",
      text: "Clear bullish reading because EUR/USD printed a strong candle closing near its high, showing buyer control.",
      isCorrect: false,
      feedback: "Incorrect. The candle may be active, but its location in the middle of the session range devalues the reading quality to midpoint noise."
    },
    {
      id: "B",
      text: "Strong location because any large candle inside a liquid session range is important and should be traded.",
      isCorrect: false,
      feedback: "Incorrect. Not every candle matters equally. Location changes how useful the evidence is; in the middle of a range, price is highly random."
    },
    {
      id: "C",
      text: "Weak or low-quality location because the move formed in the middle of the range without any useful reference area or related-pair alignment.",
      isCorrect: true,
      feedback: "Correct! This is a weak or low-quality location. The move happened in the middle of the range, away from session edges or clear reference areas, and lacks related-pair support."
    },
    {
      id: "D",
      text: "Guaranteed reversal because price is inside the Asia range and must rotate back to the floor immediately.",
      isCorrect: false,
      feedback: "Incorrect. Being inside a range does not guarantee a reversal. It only means the location is weak and you should stand aside."
    }
  ];

  const chartPreview = (
    <div className="w-full bg-[#071B36] rounded-2xl p-4 border border-slate-800 relative min-h-[160px] flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      <div className="absolute top-[20%] left-0 right-0 h-px border-t border-slate-800" />
      <span className="text-[6px] font-mono text-slate-500 absolute top-2 left-4">Asia High ($1.0900)</span>

      <div className="absolute bottom-[20%] left-0 right-0 h-px border-t border-slate-800" />
      <span className="text-[6px] font-mono text-slate-500 absolute bottom-2 left-4">Asia Low ($1.0800)</span>

      <div className="w-full flex justify-center items-center h-full pt-6 pb-6 z-10 relative">
        <div className="flex flex-col items-center">
          <span className="text-[6px] font-mono text-rose-400 font-bold mb-1">EUR/USD ($1.0850)</span>
          <MiniCandle color="teal" bodyHeight={35} upperWick={5} lowerWick={5} />
          <span className="text-[6px] font-mono text-slate-500 mt-1">Dead Center of Range</span>
        </div>
      </div>
    </div>
  );

  return (
    <PracticeDrill
      question="EUR/USD is currently trading inside its Asia session range. It prints a very strong green candle on the 15-minute chart, closing near its high at $1.0850. This candle is sitting directly in the middle of the range, far from the Asia high ($1.0900) and Asia low ($1.0800). GBP/USD is also sitting in the middle of its own range, and USD context (DXY) is completely flat and unclear. What is the most disciplined Forex location reading?"
      options={options}
      chartPreview={chartPreview}
      label="Location Audit Practice"
      status="AUDIT DRILL"
    />
  );
};

export const ForexLocationDebrief = () => {
  const debriefKeys = [
    {
      id: "coordinates",
      title: "Locational Coordinates",
      habit: "Identify session and pair boundaries before candles.",
      desc: "Never look at a candle in isolation. Always begin your chart analysis by mapping where the pair is trading relative to the Asia high/low and prior daily swings.",
      icon: MapPin
    },
    {
      id: "noise",
      title: "Midpoint Exclusion",
      habit: "Filter out center-zone price swings.",
      desc: "Force yourself to ignore price movements that take place inside the middle of a range. Edges ask clear questions; the middle only offers random, low-information noise.",
      icon: ShieldAlert
    },
    {
      id: "context",
      title: "USD & Related Context",
      habit: "Verify setups using DXY and sibling correlations.",
      desc: "Ensure the US Dollar Index (DXY) is compatible with your local pair level, and check related pairs (like GBP/USD) to ensure the breakout location is broad, not isolated.",
      icon: DollarSign
    }
  ];

  return (
    <DebriefDashboard
      cards={debriefKeys}
      label="Forex Location Audit Recap"
      status="DRILL COMPLETE"
      desc="Interactive Recap: Select an audit coordinate category to view the core Lurnava reading habit."
    />
  );
};
