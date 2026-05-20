"use client";

import React, { useState } from "react";
import { 
  ArrowRight, 
  Layers, 
  Compass, 
  AlertTriangle, 
  CheckCircle, 
  Info, 
  RefreshCw, 
  ChevronRight, 
  ListChecks, 
  Ban, 
  TrendingUp, 
  Activity,
  Maximize2,
  Clock,
  TrendingDown,
  Globe,
  HelpCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { InstitutionalFrame, MentorInsight } from "./shared";

const MiniCandle = ({ bullish = true, bodyHeight = 40, wickTop = 15, wickBottom = 15, label = "", color = "" }) => {
  let bodyStyle: React.CSSProperties = { height: `${bodyHeight}px`, animationDuration: "3.5s" };
  let bodyClass = "w-5 rounded-sm border relative flex items-center justify-center animate-pulse";
  
  if (color) {
    if (color.includes("purple")) {
      bodyStyle.backgroundColor = "#9333ea"; // purple-600
      bodyStyle.borderColor = "#7e22ce"; // purple-700
      bodyClass += " text-white";
    } else if (color.includes("amber")) {
      bodyStyle.backgroundColor = "#f59e0b"; // amber-500
      bodyStyle.borderColor = "#d97706"; // amber-600
      bodyClass += " text-white";
    } else if (color.includes("rose")) {
      bodyStyle.backgroundColor = "#e11d48"; // rose-600
      bodyStyle.borderColor = "#be123c"; // rose-700
      bodyClass += " text-white";
    } else if (color.includes("teal")) {
      bodyStyle.backgroundColor = "#0d9488"; // teal-600
      bodyStyle.borderColor = "#0f766e"; // teal-700
      bodyClass += " text-white";
    } else if (color.includes("slate")) {
      bodyStyle.backgroundColor = "#475569"; // slate-600
      bodyStyle.borderColor = "#334155"; // slate-700
      bodyClass += " text-white";
    } else {
      bodyClass += ` ${color}`;
    }
  } else {
    if (bullish) {
      bodyStyle.backgroundColor = "#0d9488"; // teal-600
      bodyStyle.borderColor = "#0f766e"; // teal-700
      bodyClass += " text-white shadow-sm";
    } else {
      bodyStyle.backgroundColor = "#e11d48"; // rose-600
      bodyStyle.borderColor = "#be123c"; // rose-700
      bodyClass += " text-white shadow-sm";
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-32 w-16 bg-white/50 rounded-lg p-2 border border-slate-100 shadow-sm shrink-0">
      <div className="w-0.5 bg-slate-400" style={{ height: `${wickTop}px` }} />
      <div className={bodyClass} style={bodyStyle} />
      <div className="w-0.5 bg-slate-400" style={{ height: `${wickBottom}px` }} />
      {label && <span className="text-[8px] font-black text-slate-500 mt-1 uppercase tracking-tighter text-center leading-none">{label}</span>}
    </div>
  );
};

/**
 * Forex Checklist Ribbon
 */
const ForexChecklistRibbon = () => (
  <div className="w-full bg-[#071B36] text-white py-2.5 px-4 rounded-xl border border-slate-800 flex items-center justify-between shadow-sm shrink-0 mb-4 font-mono">
    <div className="flex items-center gap-2">
      <Globe size={12} className="text-teal-400 animate-pulse" />
      <span className="text-[9px] font-black uppercase tracking-widest text-slate-300">Forex Roadway filter</span>
    </div>
    <span className="text-[10px] font-black text-teal-400 uppercase tracking-tight text-right italic">
      "Before I trust a Forex move, I need to know the session and pair condition."
    </span>
  </div>
);

/**
 * Card 1: Forex Conditions Begin With Pair Environment
 */
export const ForexConditionFoundation = () => {
  const [selectedFactor, setSelectedFactor] = useState("session");

  const factors = {
    session: {
      title: "Session Rhythm",
      desc: "Asia is compression; London brings initial expansion; New York tests, continues, or rejects.",
      rule: "Audit which window price is in before expecting momentum.",
      badge: "bg-teal-50 text-teal-600 border-teal-200"
    },
    usd: {
      title: "USD Counterweight",
      desc: "Check DXY index alignment. A EUR/USD break is far cleaner if USD is breaking support.",
      rule: "Never analyze a major pair in isolation from DXY context.",
      badge: "bg-amber-50 text-amber-600 border-amber-200"
    },
    related: {
      title: "Related Pairs",
      desc: "Divergence between EUR/USD and GBP/USD breakout attempts signals mixed condition quality.",
      rule: "Look for correlation alignment before trusting single-pair spikes.",
      badge: "bg-purple-50 text-purple-600 border-purple-200"
    },
    structure: {
      title: "Pair Structure",
      desc: "Is price making clean swing steps or overlapping wicks? Chop voids all local candle signals.",
      rule: "Let overall structure dictate if local candles are meaningful.",
      badge: "bg-blue-50 text-blue-600 border-blue-200"
    }
  };

  const current = factors[selectedFactor as keyof typeof factors];

  return (
    <InstitutionalFrame label="Forex Condition Foundation" id="FX-01-FOUND">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <ForexChecklistRibbon />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Factor Buttons */}
          <div className="md:col-span-5 flex flex-col justify-center space-y-3">
            <div className="space-y-1">
              <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-teal-50 px-2 py-1 rounded border border-teal-100 inline-block">Context Audit</span>
              <h3 className="text-lg font-black text-[#071B36] uppercase tracking-tight">Forex Environment Audit</h3>
              <p className="text-xs font-semibold text-slate-500 leading-normal">
                Click on the core Forex context layers below to see how they define the pair's overall condition.
              </p>
            </div>

            <div className="space-y-2 pt-1">
              {Object.keys(factors).map((k) => (
                <button
                  key={k}
                  onClick={() => setSelectedFactor(k)}
                  className={cn(
                    "w-full p-3 rounded-xl border text-left transition-all duration-200 flex items-center justify-between shadow-sm",
                    selectedFactor === k 
                      ? "bg-white border-teal-500 ring-2 ring-teal-500/10 scale-102 text-[#071B36]" 
                      : "bg-[#F8FBFC] border-slate-200 hover:bg-white text-slate-600"
                  )}
                >
                  <span className="text-xs font-black uppercase tracking-wider">{factors[k as keyof typeof factors].title}</span>
                  <ChevronRight size={14} className={selectedFactor === k ? "text-teal-600" : "text-slate-300"} />
                </button>
              ))}
            </div>
          </div>

          {/* Interactive display */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5"><Compass size={100} className="text-[#071B36]" /></div>
            
            <div className="space-y-4 relative z-10 font-mono">
              <div className="flex items-center gap-2 text-[9px] font-extrabold uppercase text-slate-400 tracking-wider">
                <Info size={12} className="text-teal-500" />
                Active Context Layer
              </div>
              <div className="h-px bg-slate-100" />
              
              <div className="space-y-3">
                <span className={cn("px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider border inline-block", current.badge)}>
                  {current.title}
                </span>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  {current.desc}
                </p>
              </div>
            </div>

            <div className="mt-8 bg-slate-50 p-4 border border-slate-200 rounded-xl space-y-1">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block leading-none font-mono">Audit Filter Rule</span>
              <p className="text-xs text-[#071B36] font-black leading-snug font-mono italic">"{current.rule}"</p>
            </div>
          </div>
        </div>

        <MentorInsight 
          text="A Forex move becomes easier to understand when you stop asking only 'Did it break?' and start asking 'What condition is this pair in?'"
          analogy="A harbor pilot. Before guiding a massive cargo ship (price) through a narrow canal, the pilot checks the tides (session timing), the wind speed (USD context), and the movement of other nearby vessels (related pairs)."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 2: Session Timing Changes the Condition
 */
export const ForexSessionConditionMap = () => {
  const [activeSession, setActiveSession] = useState("asia");

  const sessions = {
    asia: {
      name: "Asia Session",
      clock: "8:00 PM - 3:00 AM NY",
      cond: "Compression Range",
      desc: "Low institutional participation for majors. Price consolidates within tight horizontal boxes.",
      caution: "SPECULATIVE TRAP: Treating range boundaries as breakout opportunities.",
      color: "bg-teal-50 text-teal-600 border-teal-200"
    },
    london: {
      name: "London Open",
      clock: "3:00 AM - 7:00 AM NY",
      cond: "Initial Expansion",
      desc: "European capital enters. Price spikes outside the Asia boundaries to test higher or lower liquidity.",
      caution: "SPECULATIVE TRAP: Buying high-speed breakout candles immediately.",
      color: "bg-amber-50 text-amber-600 border-amber-200"
    },
    overlap: {
      name: "NY/London Overlap",
      clock: "8:00 AM - 12:00 PM NY",
      cond: "Follow-through / Rejection",
      desc: "US institutions open. Macro data prints. Peak daily volume determines if expansion holds or fails.",
      caution: "SPECULATIVE TRAP: Assuming London's direction must continue all day.",
      color: "bg-purple-50 text-purple-600 border-purple-200"
    },
    nyLate: {
      name: "Late New York",
      clock: "1:00 PM - 5:00 PM NY",
      cond: "Chop / Transition",
      desc: "Volume drains. Swings overlap repeatedly. Standard technical levels degrade into noise.",
      caution: "SPECULATIVE TRAP: Over-analyzing patterns in flat, low-liquidity chop.",
      color: "bg-rose-50 text-rose-600 border-rose-200"
    }
  };

  const current = sessions[activeSession as keyof typeof sessions];

  return (
    <InstitutionalFrame label="Session Weather Map" id="FX-02-SESS">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <ForexChecklistRibbon />

        <div className="space-y-1">
          <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-teal-50 px-2 py-1 rounded border border-teal-100 inline-block">Session Rhythm</span>
          <h3 className="text-lg font-black text-[#071B36] uppercase tracking-tight">Forex Environment Timing</h3>
        </div>

        {/* Sessions timeline */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200">
          {Object.keys(sessions).map((k) => (
            <button
              key={k}
              onClick={() => setActiveSession(k)}
              className={cn(
                "py-3 px-2 rounded-lg text-left transition-all duration-200 flex flex-col justify-between h-16 shadow-sm",
                activeSession === k ? "bg-[#071B36] text-white border-transparent scale-102" : "bg-white border-slate-200 hover:bg-slate-50 text-slate-700"
              )}
            >
              <span className="text-[8px] font-black uppercase text-slate-400 leading-none">{sessions[k as keyof typeof sessions].name}</span>
              <span className="text-[9px] font-bold text-slate-400 mt-1 leading-none">{sessions[k as keyof typeof sessions].clock}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Display component */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-center items-center shadow-sm min-h-[200px] relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#071B36_1.5px,transparent_1.5px)] bg-[length:16px_16px]" />
            
            <div className="flex gap-4 items-end relative z-10">
              {activeSession === "asia" && (
                <>
                  <MiniCandle bullish={true} bodyHeight={20} label="Asia Low" />
                  <MiniCandle bullish={false} bodyHeight={15} label="Asia High" />
                  <MiniCandle bullish={true} bodyHeight={10} label="Inside" color="bg-amber-500 border-amber-600 text-white animate-pulse" />
                </>
              )}
              {activeSession === "london" && (
                <>
                  <MiniCandle bullish={true} bodyHeight={20} label="Asia High" />
                  <MiniCandle bullish={true} bodyHeight={60} label="EXPANSION" color="bg-teal-600 border-teal-700 text-white" />
                </>
              )}
              {activeSession === "overlap" && (
                <>
                  <MiniCandle bullish={true} bodyHeight={60} label="London Exp" />
                  <MiniCandle bullish={false} bodyHeight={25} label="NY Pullback" />
                  <MiniCandle bullish={true} bodyHeight={75} label="NY Hold" color="bg-purple-600 border-purple-700 text-white" />
                </>
              )}
              {activeSession === "nyLate" && (
                <>
                  <MiniCandle bullish={true} bodyHeight={20} wickTop={30} wickBottom={30} label="Chop" color="bg-rose-500/40 border-rose-400 text-rose-800" />
                  <MiniCandle bullish={false} bodyHeight={15} wickTop={35} wickBottom={30} label="Overlap" color="bg-slate-400/40 border-slate-300 text-slate-800" />
                </>
              )}
            </div>
          </div>

          {/* Details panel */}
          <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4 font-mono">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block leading-none">Session Status Console</span>
              <div className="h-px bg-slate-200" />
              
              <div className="space-y-3">
                <span className={cn("text-[9px] font-black px-2 py-0.5 rounded border inline-block uppercase", current.color)}>
                  {current.cond}
                </span>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  {current.desc}
                </p>
              </div>
            </div>

            <div className="mt-8 bg-rose-50 border border-rose-100 p-3 rounded-xl flex items-start gap-1.5 text-[9px] font-bold text-rose-800">
              <AlertTriangle size={14} className="shrink-0 text-rose-500 mt-0.5" />
              <span>{current.caution}</span>
            </div>
          </div>
        </div>

        <MentorInsight 
          text="Session timing does not tell you what to do. It helps you understand the environment."
          analogy="Highway speeds. A car traveling at 60 mph on an empty highway (London) is normal. The same car moving at 60 mph in a quiet residential zone (Asia) is extremely unusual and high-risk. Context dictates what the speed represents."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 3: Asia Range Is Often a Compression Condition
 */
export const ForexAsiaRangeCompression = () => {
  const [showPaths, setShowPaths] = useState(false);

  return (
    <InstitutionalFrame label="Asia Compression Board" id="FX-03-ASIA">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <ForexChecklistRibbon />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <div className="space-y-1">
            <span className="text-[10px] font-extrabold text-amber-600 uppercase tracking-widest bg-amber-50 px-2 py-1 rounded border border-amber-100 inline-block">Asia Range</span>
            <h3 className="text-lg font-black text-[#071B36] uppercase tracking-tight"> Tokyo/Asia Squeeze</h3>
          </div>
          
          <button 
            onClick={() => setShowPaths(!showPaths)} 
            className="px-5 py-2.5 bg-[#071B36] text-white text-[9px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2 shadow-sm shrink-0"
          >
            <RefreshCw size={12} className={cn("transition-transform duration-500", showPaths && "rotate-180")} />
            {showPaths ? "Show Range Only" : "View Potential Expansion Paths"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Chart Board */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between items-center shadow-sm min-h-[220px] relative overflow-hidden">
            {/* Upper Boundary */}
            <div className="w-full border-t border-slate-300 border-dashed flex items-center justify-between px-4 pt-1">
              <span className="text-[8px] font-black uppercase text-slate-500 tracking-wider">Asia High Range Limit</span>
            </div>

            {/* Asia Candles */}
            <div className="flex gap-4 items-center relative z-10 py-6">
              <MiniCandle bullish={true} bodyHeight={20} label="Open" />
              <MiniCandle bullish={false} bodyHeight={15} label="Wick Sweep" />
              <MiniCandle bullish={true} bodyHeight={10} label="Hold" />
              {showPaths && (
                <>
                  <div className="absolute -top-1 right-2 w-0.5 h-16 border-r-2 border-teal-500 border-dashed animate-pulse" />
                  <div className="absolute -bottom-1 right-2 w-0.5 h-16 border-r-2 border-rose-500 border-dashed animate-pulse" />
                  <span className="absolute -top-6 right-2 text-[8px] font-black text-teal-600 bg-teal-50 px-1 border border-teal-200 rounded">PATH A: BUY EXPANSION</span>
                  <span className="absolute -bottom-6 right-2 text-[8px] font-black text-rose-600 bg-rose-50 px-1 border border-rose-200 rounded">PATH B: SELL EXPANSION</span>
                </>
              )}
            </div>

            {/* Lower Boundary */}
            <div className="w-full border-b border-slate-300 border-dashed flex items-center justify-between px-4 pb-1">
              <span className="text-[8px] font-black uppercase text-slate-500 tracking-wider">Asia Low Range Limit</span>
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4 font-mono">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block leading-none">Compression Audit Console</span>
              <div className="h-px bg-slate-200" />
              
              <div className="space-y-3 text-xs text-slate-600 leading-relaxed font-bold">
                <p>
                  1. The Tokyo/Asia window is characterized by natural compression. Price is building energy but direction is not declared.
                </p>
                <p>
                  2. Lurnava Filter: Do not trade inside this compression. Use boundaries as benchmarks for London and New York.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-amber-50 border border-amber-200 p-3 rounded-xl text-[9px] font-bold text-amber-800">
              Rule: Asia compression gives you a reference, not an instruction.
            </div>
          </div>
        </div>

        <MentorInsight 
          text="Asia compression gives you a reference, not an instruction. Let the market show its hand first." 
          analogy="A sprinter at the blocks. The sprinter is coiled and still (Asia range). They are accumulating energy, but it is useless to guess which lane will win the race until the starting gun fires (London open)."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 4: London Expansion Must Prove Quality
 */
export const ForexLondonExpansionQuality = () => {
  const [expansionMode, setExpansionMode] = useState("hold");

  return (
    <InstitutionalFrame label="London Expansion Lab" id="FX-04-LNDN">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <ForexChecklistRibbon />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <div className="space-y-1">
            <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-teal-50 px-2 py-1 rounded border border-teal-100 inline-block">London Open</span>
            <h3 className="text-lg font-black text-[#071B36] uppercase tracking-tight">Breakout Verification</h3>
          </div>
          
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200 shrink-0">
            <button 
              onClick={() => setExpansionMode("hold")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", expansionMode === "hold" ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600 hover:text-[#071B36]")}
            >
              Hold Outside
            </button>
            <button 
              onClick={() => setExpansionMode("fake")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", expansionMode === "fake" ? "bg-rose-600 text-white shadow-sm" : "text-slate-600 hover:text-[#071B36]")}
            >
              Return Inside
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Chart Display */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-center items-center shadow-sm min-h-[220px] relative overflow-hidden">
            <div className="absolute top-[80px] left-0 w-full border-t border-slate-300 border-dashed" />
            <span className="absolute top-[85px] left-4 text-[7px] font-black text-slate-400 uppercase tracking-wider">Asia High Range Limit</span>

            <div className="flex gap-4 items-end relative z-10">
              <MiniCandle bullish={true} bodyHeight={20} label="Asia Consol" />
              {expansionMode === "hold" ? (
                <>
                  <MiniCandle bullish={true} bodyHeight={60} label="LNDN BREAK" />
                  <MiniCandle bullish={true} bodyHeight={20} wickTop={20} label="HOLD" color="bg-teal-600 border-teal-700 text-white animate-pulse" />
                </>
              ) : (
                <>
                  <MiniCandle bullish={true} bodyHeight={60} label="LNDN SPIKE" />
                  <MiniCandle bullish={false} bodyHeight={50} label="SNAP BACK" color="bg-rose-600 border-rose-700 text-white animate-pulse" />
                </>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4 font-mono">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block leading-none">Breakout Diagnostic Console</span>
              <div className="h-px bg-slate-200" />
              
              <div className="space-y-3">
                <span className={cn("text-[9px] font-black px-2 py-0.5 rounded border inline-block uppercase", expansionMode === "hold" ? "text-teal-600 bg-teal-50 border-teal-200" : "text-rose-600 bg-rose-50 border-rose-200")}>
                  {expansionMode === "hold" ? "VERIFIED HOLD" : "FAKE OUT SWEEP"}
                </span>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  {expansionMode === "hold" 
                    ? "The breakout candle closed cleanly outside the Asia range, and the next candle held value above the boundary. This expansion is high quality."
                    : "The breakout spike swept the stops outside the Asia high, but failed to close or hold outside. Price returned to balance. Fake expansion."
                  }
                </p>
              </div>
            </div>

            <div className="mt-8 bg-slate-100 p-3 border border-slate-200 rounded-xl text-[9px] font-bold text-slate-700">
              Rule: Expansion starts the question; hold verification answers it.
            </div>
          </div>
        </div>

        <MentorInsight 
          text="Expansion starts the question. The quality of the hold and follow-through helps answer it." 
          analogy="A store window. A crowd rushes past a doorway (breakout spike). To verify if the store is open, you look to see if people are standing inside browsing (hold outside) or if they were repelled and kicked out immediately (return inside)."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 5: New York Can Continue, Reverse, or Create Transition
 */
export const ForexNewYorkConditionShift = () => {
  const [nyPath, setNyPath] = useState("continue");

  const paths = {
    continue: {
      label: "Continuation",
      badge: "bg-teal-50 text-teal-600 border-teal-200",
      desc: "US volume joins European traders. NY creates a pullback that holds previous structures and makes new session highs."
    },
    rejection: {
      label: "Rejection",
      badge: "bg-rose-50 text-rose-600 border-rose-200",
      desc: "Macro news triggers a sharp counter-move. NY completely cancels the London move and returns price into the Asia range."
    },
    transition: {
      label: "Mixed Transition",
      badge: "bg-amber-50 text-amber-600 border-amber-200",
      desc: "Volume is divided. NY moves sideways, overlapping previous swing points, resulting in a mixed condition."
    }
  };

  const current = paths[nyPath as keyof typeof paths];

  return (
    <InstitutionalFrame label="New York Condition Shift Board" id="FX-05-NYSH">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <ForexChecklistRibbon />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <div className="space-y-1">
            <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-teal-50 px-2 py-1 rounded border border-teal-100 inline-block">New York Window</span>
            <h3 className="text-lg font-black text-[#071B36] uppercase tracking-tight">Shift-Path Classifier</h3>
          </div>
          
          {/* Path selectors */}
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200 shrink-0">
            {Object.keys(paths).map((k) => (
              <button
                key={k}
                onClick={() => setNyPath(k)}
                className={cn(
                  "py-2 px-3 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all",
                  nyPath === k ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600 hover:text-[#071B36]"
                )}
              >
                {paths[k as keyof typeof paths].label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Chart Display */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-center items-center shadow-sm min-h-[220px] relative overflow-hidden">
            <div className="flex gap-4 items-end relative z-10">
              <MiniCandle bullish={true} bodyHeight={20} label="Asia range" />
              <MiniCandle bullish={true} bodyHeight={50} label="London Exp" />
              {nyPath === "continue" && (
                <>
                  <MiniCandle bullish={false} bodyHeight={20} label="NY Retest" />
                  <MiniCandle bullish={true} bodyHeight={65} label="NY Continue" color="bg-teal-600 border-teal-700 text-white" />
                </>
              )}
              {nyPath === "rejection" && (
                <>
                  <MiniCandle bullish={false} bodyHeight={75} label="NY REJECT" color="bg-rose-600 border-rose-700 text-white" />
                </>
              )}
              {nyPath === "transition" && (
                <>
                  <MiniCandle bullish={false} bodyHeight={25} label="NY Deep Ret" />
                  <MiniCandle bullish={true} bodyHeight={20} label="NY Overlap" color="bg-amber-500 border-amber-600 text-white animate-pulse" />
                </>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4 font-mono">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block leading-none">NY Shift Log</span>
              <div className="h-px bg-slate-200" />
              
              <div className="space-y-3">
                <span className={cn("text-[9px] font-black px-2 py-0.5 rounded border inline-block uppercase", current.badge)}>
                  NY {current.label}
                </span>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  {current.desc}
                </p>
              </div>
            </div>

            <div className="mt-8 bg-slate-100 p-3 border border-slate-200 rounded-xl text-[9px] font-bold text-slate-700">
              Lesson: New York can confirm the move, challenge it, or turn it mixed.
            </div>
          </div>
        </div>

        <MentorInsight 
          text="New York can confirm the move, challenge it, or turn it mixed. Always audit the new session's candles." 
          analogy="A relay race. The first runner (London) runs a strong leg and passes the baton. The second runner (New York) might sprint forward to win (continuation), stumble and drop the baton (rejection), or run slowly and get tangled in the crowd (mixed transition)."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 6: Pair Trend Condition Needs Session Support
 */
export const ForexTrendConditionSessionSupport = () => {
  const [trendState, setTrendState] = useState("support");

  return (
    <InstitutionalFrame label="Trend Session Support Board" id="FX-06-TRND">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <ForexChecklistRibbon />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <div className="space-y-1">
            <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-teal-50 px-2 py-1 rounded border border-teal-100 inline-block">Trend Environment</span>
            <h3 className="text-lg font-black text-[#071B36] uppercase tracking-tight">Forex Trend Condition</h3>
          </div>
          
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200 shrink-0">
            <button 
              onClick={() => setTrendState("support")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", trendState === "support" ? "bg-teal-600 text-white shadow-sm" : "text-slate-600 hover:text-[#071B36]")}
            >
              Session Support
            </button>
            <button 
              onClick={() => setTrendState("wobbly")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", trendState === "wobbly" ? "bg-rose-600 text-white shadow-sm" : "text-slate-600 hover:text-[#071B36]")}
            >
              Wobbly Rejection
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Chart Display */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-center items-center shadow-sm min-h-[220px] relative overflow-hidden">
            <div className="flex gap-4 items-end relative z-10">
              <MiniCandle bullish={true} bodyHeight={30} label="HH Swing" />
              <MiniCandle bullish={true} bodyHeight={50} label="HH Swing" />
              {trendState === "support" ? (
                <>
                  <MiniCandle bullish={false} bodyHeight={20} label="Retest OK" color="bg-teal-600 border-teal-700 text-white" />
                  <MiniCandle bullish={true} bodyHeight={70} label="HH Continuation" />
                </>
              ) : (
                <>
                  <MiniCandle bullish={false} bodyHeight={55} label="BREAK LH" color="bg-rose-600 border-rose-700 text-white" />
                  <MiniCandle bullish={true} bodyHeight={20} label="Mixed overlap" />
                </>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4 font-mono">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block leading-none">Trend Audit Log</span>
              <div className="h-px bg-slate-200" />
              
              <div className="space-y-3">
                <span className={cn("text-[9px] font-black px-2 py-0.5 rounded border inline-block uppercase", trendState === "support" ? "text-teal-600 bg-teal-50 border-teal-200" : "text-rose-600 bg-rose-50 border-rose-200")}>
                  {trendState === "support" ? "CLEAN TREND SUPPORT" : "WOBBLY TREND REJECTION"}
                </span>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  {trendState === "support" 
                    ? "The pullback respected previous swing highs, and New York volume holds structure to expand upward. Session support aligns."
                    : "The pullback breaks down past the previous structure point. The trend sequence wobbies, and the condition is classified as mixed."
                  }
                </p>
              </div>
            </div>

            <div className="mt-8 bg-slate-100 p-3 border border-slate-200 rounded-xl text-[9px] font-bold text-slate-700">
              Rule: A healthy Forex trend needs London and New York to coordinate.
            </div>
          </div>
        </div>

        <MentorInsight 
          text="A real Forex trend is a team effort between London and New York. Make sure they are playing on the same team." 
          analogy="A team of rowers. If London rowers (breakout) pull hard to move the boat forward, but New York rowers (pullback) drag their oars backwards and stop the momentum, the boat stalls (wobbly trend)."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 7: Range Condition Punishes Trend Assumptions
 */
export const ForexRangeConditionRotation = () => {
  const [rangeMode, setRangeMode] = useState("speculative");

  return (
    <InstitutionalFrame label="Range Rotation Board" id="FX-07-RNG">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <ForexChecklistRibbon />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <div className="space-y-1">
            <span className="text-[10px] font-extrabold text-amber-600 uppercase tracking-widest bg-amber-50 px-2 py-1 rounded border border-amber-100 inline-block">Range Environment</span>
            <h3 className="text-lg font-black text-[#071B36] uppercase tracking-tight">Horizontal Balance Rotation</h3>
          </div>
          
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200 shrink-0">
            <button 
              onClick={() => setRangeMode("speculative")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", rangeMode === "speculative" ? "bg-rose-600 text-white shadow-sm" : "text-slate-600 hover:text-[#071B36]")}
            >
              Speculative Trap
            </button>
            <button 
              onClick={() => setRangeMode("audited")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", rangeMode === "audited" ? "bg-teal-600 text-white shadow-sm" : "text-slate-600 hover:text-[#071B36]")}
            >
              Audited Reality
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Chart Display */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between items-center shadow-sm min-h-[220px] relative overflow-hidden">
            <div className="w-full border-t border-rose-500/30 border-dashed flex items-center justify-between px-4 pt-1">
              <span className="text-[8px] font-black uppercase text-rose-500 tracking-wider">Range Ceiling</span>
            </div>

            <div className="flex gap-4 items-center relative z-10 py-6">
              <MiniCandle bullish={true} bodyHeight={30} label="Up Swing" />
              {rangeMode === "speculative" ? (
                <>
                  <MiniCandle bullish={true} bodyHeight={60} label="BREAKOUT?" color="bg-teal-600 border-teal-700 text-white" />
                  <div className="absolute -top-2 right-10 bg-rose-100 border border-rose-200 px-2 py-1 rounded flex items-center gap-1 text-[8px] font-black text-rose-700 uppercase animate-bounce">
                    <AlertTriangle size={10} />
                    Trap: 'Buy the breakout!'
                  </div>
                </>
              ) : (
                <>
                  <MiniCandle bullish={false} bodyHeight={15} wickTop={45} label="EXHAUSTION" color="bg-rose-600 border-rose-700 text-white" />
                  <MiniCandle bullish={false} bodyHeight={40} label="Rotate Down" />
                  <div className="absolute -top-2 right-10 bg-teal-100 border border-teal-200 px-2 py-1 rounded flex items-center gap-1 text-[8px] font-black text-teal-700 uppercase">
                    <CheckCircle size={10} />
                    Audit: Range High Exhaustion
                  </div>
                </>
              )}
            </div>

            <div className="w-full border-b border-teal-500/30 border-dashed flex items-center justify-between px-4 pb-1">
              <span className="text-[8px] font-black uppercase text-teal-500 tracking-wider">Range Floor</span>
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4 font-mono">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block leading-none">Range Diagnostic Console</span>
              <div className="h-px bg-slate-200" />
              
              <div className="space-y-3">
                <span className={cn("text-[9px] font-black px-2 py-0.5 rounded border inline-block uppercase", rangeMode === "audited" ? "text-teal-600 bg-teal-50 border-teal-100" : "text-rose-600 bg-rose-50 border-rose-100")}>
                  {rangeMode === "audited" ? "AUDIT: BOUNDARY REJECTION" : "TRAP: BREAKOUT FOMO"}
                </span>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  {rangeMode === "audited" 
                    ? "Before we trusted the strong candle, we identified the range condition. Therefore, we expect boundary rejection and rotate down."
                    : "Chaser buys the breakout candle right at the range ceiling, getting trapped immediately when price rotates back to the floor."
                  }
                </p>
              </div>
            </div>

            <div className="mt-8 bg-slate-100 p-3 border border-slate-200 rounded-xl text-[9px] font-bold text-slate-700">
              Rule: A range is not confusion. It is a condition that asks for slower reading.
            </div>
          </div>
        </div>

        <MentorInsight 
          text="Before you trust a directional push, identify if the environment is a range ceiling." 
          analogy="A physical room. Price is like a tennis ball bouncing between support (floor) and resistance (ceiling). Do not buy the ball as it speeds toward the ceiling, assuming it will crash through the roof."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 8: USD Context Can Change the Pair Condition
 */
export const ForexUsdConditionContext = () => {
  const [dxyState, setDxyState] = useState("align");

  const states = {
    align: {
      label: "USD Aligns",
      eurText: "EUR/USD breaks high",
      gbpText: "GBP/USD breaks high",
      dxyText: "DXY Breaks Low",
      desc: "USD weakness is driving all counter majors in the same direction. Your EUR/USD reading quality increases to Clear.",
      badge: "bg-teal-50 text-teal-600 border-teal-200"
    },
    conflict: {
      label: "USD Conflicts",
      eurText: "EUR/USD breaks high",
      gbpText: "GBP/USD consolidates",
      dxyText: "DXY consolidates",
      desc: "EUR/USD pushes higher alone. Neither DXY nor GBP/USD confirms the strength. This is divergent, and reading quality drops to Mixed.",
      badge: "bg-rose-50 text-rose-600 border-rose-200"
    },
    unclear: {
      label: "USD Unclear",
      eurText: "EUR/USD overlaps",
      gbpText: "GBP/USD overlaps",
      dxyText: "DXY Flat / Chop",
      desc: "The dollar index is moving sideways with no structure. All major pairs are choppy. Environment is classified as Unclear.",
      badge: "bg-amber-50 text-amber-600 border-amber-200"
    }
  };

  const current = states[dxyState as keyof typeof states];

  return (
    <InstitutionalFrame label="USD Context Overlay" id="FX-08-USD">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <ForexChecklistRibbon />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <div className="space-y-1">
            <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-teal-50 px-2 py-1 rounded border border-teal-100 inline-block">USD Counterweight</span>
            <h3 className="text-lg font-black text-[#071B36] uppercase tracking-tight">USD Correlation Context</h3>
          </div>
          
          {/* States selectors */}
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200 shrink-0">
            {Object.keys(states).map((k) => (
              <button
                key={k}
                onClick={() => setDxyState(k)}
                className={cn(
                  "py-2 px-3 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all",
                  dxyState === k ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600 hover:text-[#071B36]"
                )}
              >
                {states[k as keyof typeof states].label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Panels Display */}
          <div className="md:col-span-7 grid grid-cols-3 gap-2 bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
            <div className="border border-slate-100 rounded-xl p-3 flex flex-col justify-between bg-slate-50/50">
              <span className="text-[8px] font-black uppercase text-slate-400">EUR/USD</span>
              <span className="text-[10px] font-black text-[#071B36] uppercase leading-tight">{current.eurText}</span>
              <Info size={14} className="text-slate-300" />
            </div>
            
            <div className="border border-slate-100 rounded-xl p-3 flex flex-col justify-between bg-slate-50/50">
              <span className="text-[8px] font-black uppercase text-slate-400">GBP/USD</span>
              <span className="text-[10px] font-black text-[#071B36] uppercase leading-tight">{current.gbpText}</span>
              <Info size={14} className="text-slate-300" />
            </div>

            <div className="border border-slate-100 rounded-xl p-3 flex flex-col justify-between bg-[#071B36] text-white">
              <span className="text-[8px] font-black uppercase text-slate-400">DXY (USD Index)</span>
              <span className="text-[10px] font-black text-teal-400 uppercase leading-tight">{current.dxyText}</span>
              <Globe size={14} className="text-teal-400" />
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4 font-mono">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block leading-none">Correlation Log</span>
              <div className="h-px bg-slate-200" />
              
              <div className="space-y-3">
                <span className={cn("text-[9px] font-black px-2 py-0.5 rounded border inline-block uppercase", current.badge)}>
                  {current.label}
                </span>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  {current.desc}
                </p>
              </div>
            </div>

            <div className="mt-8 bg-slate-100 p-3 border border-slate-200 rounded-xl text-[9px] font-bold text-slate-700">
              Lesson: USD context helps you avoid reading one pair in isolation.
            </div>
          </div>
        </div>

        <MentorInsight 
          text="USD context helps you avoid reading one pair in isolation. The US Dollar is the tide that floats or sinks all pairs." 
          analogy="A tug-of-war. The counter currencies (Euro, Pound) are pulling on one side, and the US Dollar is pulling on the other. You cannot evaluate how hard the Euro team is pulling without looking at how much ground the Dollar team is giving up."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 9: Choppy Forex Conditions Lower Reading Confidence
 */
export const ForexChoppyConditionWarning = () => {
  return (
    <InstitutionalFrame label="Chop Warning Board" id="FX-09-CHOP" status="CHOP DETECTED">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <ForexChecklistRibbon />

        <div className="space-y-1">
          <span className="text-[10px] font-extrabold text-rose-600 uppercase tracking-widest bg-rose-50 px-2 py-1 rounded border border-rose-100 inline-block">Forex Chop</span>
          <h3 className="text-lg font-black text-[#071B36] uppercase tracking-tight">Unreadable Environment</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Chart Display */}
          <div className="md:col-span-7 bg-rose-50/10 border border-rose-200 rounded-[2rem] p-6 flex flex-col justify-center items-center shadow-sm min-h-[220px] relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#071B36_1.5px,transparent_1.5px)] bg-[length:16px_16px]" />
            
            <div className="flex gap-2 items-center relative z-10">
              <MiniCandle bullish={true} bodyHeight={20} wickTop={30} wickBottom={30} label="Overlap" color="bg-rose-500/40 border-rose-400 text-rose-800" />
              <MiniCandle bullish={false} bodyHeight={15} wickTop={35} wickBottom={30} label="Overlap" color="bg-slate-400/40 border-slate-300 text-slate-800" />
              <MiniCandle bullish={true} bodyHeight={10} wickTop={40} wickBottom={40} label="Overlap" color="bg-rose-500/40 border-rose-400 text-rose-800" />
              <MiniCandle bullish={false} bodyHeight={25} wickTop={20} wickBottom={35} label="Overlap" color="bg-slate-400/40 border-slate-300 text-slate-800" />
            </div>

            <div className="absolute top-4 right-4 bg-rose-100 border border-rose-200 rounded-lg p-2 flex items-center gap-1 text-[9px] font-black text-rose-700 uppercase">
              <AlertTriangle size={12} className="text-rose-500" />
              CHOP ENVIRONMENT
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block leading-none font-mono">Chop Diagnostics Console</span>
              <div className="h-px bg-slate-200" />
              
              <div className="space-y-2 text-xs font-bold text-slate-700 font-mono">
                <div className="flex items-center gap-2">
                  <AlertTriangle size={14} className="text-[#BE123C] shrink-0" />
                  <span>Session bounds are swept repeatedly</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle size={14} className="text-[#BE123C] shrink-0" />
                  <span>Dual-sided candle wicks are dominant</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle size={14} className="text-[#BE123C] shrink-0" />
                  <span>No swing continuation between sessions</span>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-rose-100/50 p-4 border border-rose-200/50 rounded-xl text-[10px] font-bold text-rose-800 leading-normal flex items-start gap-2">
              <Ban size={14} className="shrink-0 mt-0.5" />
              <span>
                If the condition is choppy, your confidence should drop. The best traders know when to stand aside and protect capital.
              </span>
            </div>
          </div>
        </div>

        <MentorInsight 
          text="If the condition is choppy, your confidence should drop. The best traders know when to stand aside." 
          analogy="Boating in a whirlpool. When currents are flowing in random, circular directions (chop), you do not try to chart a straight course. You anchor the boat and wait for the water to calm down."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 10: Practice Drill: What Forex Condition Is This Pair In?
 */
export const ForexConditionPracticeDrill = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const scenario = {
    prior: "EUR/USD forms a tight Asia range. During London, price breaks above the range high and closes outside, but the next candle hesitates.",
    recent: "GBP/USD is not confirming (remains in Asia range), DXY USD context is flat and unclear, and EUR/USD pulls back into the Asia range."
  };

  const options = [
    {
      id: "A",
      text: "Clean expansion condition because price broke above the Asia range.",
      isCorrect: false,
      feedback: "Incorrect. The break matters, but expansion is not clean until the pair proves quality after the break. Here, follow-through is weak, GBP/USD is not confirming, and DXY is flat."
    },
    {
      id: "B",
      text: "Clean trend condition because London created a bullish breakout candle.",
      isCorrect: false,
      feedback: "Incorrect. One London candle does not create a full trend condition. Trends require session support and structured follow-through, which are missing here."
    },
    {
      id: "C",
      text: "Mixed / transition condition because expansion started, but follow-through, related-pair context, and USD context are not clean.",
      isCorrect: true,
      feedback: "Correct! The pair attempted expansion, but the lack of follow-through, the divergence with GBP/USD, and the flat USD context mean the evidence is conflicting. The condition is mixed/transition."
    },
    {
      id: "D",
      text: "Guaranteed reversal because price hesitated after the break.",
      isCorrect: false,
      feedback: "Incorrect. Hesitation and a pullback do not guarantee a reversal. They only lower the quality of the condition reading. Avoid predicting absolute reversals."
    }
  ];

  return (
    <InstitutionalFrame label="Forex Condition Practice Drill" id="FX-10-DRILL">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <ForexChecklistRibbon />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Scenario Board */}
          <div className="md:col-span-5 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[9px] font-extrabold uppercase text-slate-400 tracking-wider">
                <Info size={12} className="text-teal-500" />
                Scenario Evidence Board
              </div>
              <div className="h-px bg-slate-100" />
              
              <div className="space-y-3 font-mono">
                <h4 className="text-[10px] font-black uppercase text-[#071B36]">Breakout Attempt</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-bold">{scenario.prior}</p>
                
                <h4 className="text-[10px] font-black uppercase text-[#071B36] mt-4">Context Clues</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-bold">{scenario.recent}</p>
              </div>
            </div>

            <div className="mt-8 bg-slate-50 p-4 rounded-xl text-[9px] font-mono text-slate-500">
              Audit Rule: Look for correlation and follow-through.
            </div>
          </div>

          {/* Choices */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-sm font-black text-[#071B36] uppercase tracking-tight">
                What is the most disciplined Forex condition reading?
              </h3>
              
              <div className="space-y-2">
                {options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedOption(opt.id)}
                    className={cn(
                      "w-full p-4 rounded-xl border text-left text-xs font-bold leading-normal transition-all duration-200 shadow-sm",
                      selectedOption === opt.id 
                        ? opt.isCorrect 
                          ? "bg-teal-50 border-teal-500 ring-2 ring-teal-500/10 text-teal-900"
                          : "bg-rose-50 border-rose-500 ring-2 ring-rose-500/10 text-rose-900"
                        : "bg-white border-slate-200 hover:bg-slate-50 text-slate-700"
                    )}
                  >
                    <span className="font-extrabold mr-2">{opt.id}.</span>
                    {opt.text}
                  </button>
                ))}
              </div>
            </div>

            {/* Feedback Panel */}
            <AnimatePresence mode="wait">
              {selectedOption && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={cn(
                    "p-4 rounded-xl border text-xs font-semibold leading-relaxed shadow-sm",
                    options.find(o => o.id === selectedOption)?.isCorrect 
                      ? "bg-teal-50 border-teal-200 text-teal-800"
                      : "bg-rose-50 border-rose-200 text-rose-800"
                  )}
                >
                  <div className="flex items-center gap-1.5 mb-1.5 font-mono">
                    {options.find(o => o.id === selectedOption)?.isCorrect ? (
                      <CheckCircle size={14} className="text-teal-600" />
                    ) : (
                      <AlertTriangle size={14} className="text-rose-600" />
                    )}
                    <span className="font-black uppercase tracking-widest text-[9px]">
                      {options.find(o => o.id === selectedOption)?.isCorrect ? "Correct Audit" : "Audit Discrepancy"}
                    </span>
                  </div>
                  <p className="font-mono">{options.find(o => o.id === selectedOption)?.feedback}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <MentorInsight 
          text="Before you buy a breakout, check the team. If the dollar and pound aren't playing, stay on the bench."
          analogy="Divergence. If you are climbing a mountain with a team, and one climber runs forward (EUR/USD) but the rest of the team sits down and remains at base camp (GBP/USD, DXY), the push is unconfirmed and likely to fall back."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 11: Debrief: Read the Forex Condition Before the Move
 */
export const ForexConditionDebrief = () => {
  return (
    <InstitutionalFrame label="Forex Roadway Debrief" id="FX-11-DEBR">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <ForexChecklistRibbon />

        <div className="bg-[#071B36] rounded-[2rem] p-8 border border-slate-800 shadow-2xl relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 p-6 opacity-10"><Globe size={120} className="text-teal-400" /></div>
          
          <div className="relative z-10 space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-[10px] font-extrabold text-teal-400 uppercase tracking-[0.25em]">Forex Track Complete</span>
            <h3 className="text-lg font-black leading-tight uppercase tracking-tight">Environmental Filter</h3>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xl font-semibold">
              You have completed the Level 0 Module 0.7 Forex Roadway. You have shifted your perspective from chasing individual candles to auditing the overall Forex environment. You now understand that session rhythm, Asia compression ranges, London expansion quality, New York shifts, USD counterweight context, and related-pair confirmations dictate the validity of every technical setup.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <h4 className="text-xs font-black uppercase text-[#071B36] mb-2">1. Session Rhythm</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              Always correlate the time of day with average volatility: Asia compresses, London expands, New York shifts or continues.
            </p>
          </div>
          <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <h4 className="text-xs font-black uppercase text-[#071B36] mb-2">2. USD Counterweight</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              Check if DXY aligns with your currency pair breakout. A move is clean only when supported by the underlying Dollar.
            </p>
          </div>
          <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <h4 className="text-xs font-black uppercase text-[#071B36] mb-2">3. Related Confirmation</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              Correlate closely tied pairs like EUR/USD and GBP/USD. Divergence indicates a mixed, low-quality environment.
            </p>
          </div>
        </div>

        <MentorInsight 
          text="Do not ask what the Forex candle is doing. Ask what condition the pair is in, and what session created it." 
          analogy="A professional navigator. They do not just steer the wheel (trade the candles); they check the weather radar (DXY), the engine output (sessions), and the route of adjacent ships (related pairs) to guide the boat safely."
        />
      </div>
    </InstitutionalFrame>
  );
};
