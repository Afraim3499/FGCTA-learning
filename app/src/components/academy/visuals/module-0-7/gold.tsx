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
  HelpCircle,
  ShieldAlert,
  Zap,
  Gauge
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { InstitutionalFrame, MentorInsight } from "./shared";

const MiniGoldCandle = ({ bullish = true, bodyHeight = 40, wickTop = 15, wickBottom = 15, label = "", color = "" }) => {
  let bodyStyle: React.CSSProperties = { height: `${bodyHeight}px`, animationDuration: "3.5s" };
  let bodyClass = "w-5 rounded-sm border relative flex items-center justify-center animate-pulse";
  
  if (color) {
    if (color.includes("purple")) {
      bodyStyle.backgroundColor = "#9333ea"; // purple-600
      bodyStyle.borderColor = "#7e22ce"; // purple-700
      bodyClass += " text-white";
    } else if (color.includes("amber") || color.includes("gold") || color.includes("yellow")) {
      bodyStyle.backgroundColor = "#d97706"; // amber-600
      bodyStyle.borderColor = "#b45309"; // amber-700
      bodyClass += " text-white";
    } else if (color.includes("rose") || color.includes("red")) {
      bodyStyle.backgroundColor = "#e11d48"; // rose-600
      bodyStyle.borderColor = "#be123c"; // rose-700
      bodyClass += " text-white";
    } else if (color.includes("teal") || color.includes("green")) {
      bodyStyle.backgroundColor = "#0d9488"; // teal-600
      bodyStyle.borderColor = "#0f766e"; // teal-700
      bodyClass += " text-white";
    } else if (color.includes("slate") || color.includes("gray")) {
      bodyStyle.backgroundColor = "#475569"; // slate-600
      bodyStyle.borderColor = "#334155"; // slate-700
      bodyClass += " text-white";
    } else {
      bodyClass += ` ${color}`;
    }
  } else {
    if (bullish) {
      bodyStyle.backgroundColor = "#d97706"; // amber-600
      bodyStyle.borderColor = "#b45309"; // amber-700
      bodyClass += " text-white shadow-sm";
    } else {
      bodyStyle.backgroundColor = "#475569"; // slate-700
      bodyStyle.borderColor = "#334155"; // slate-800
      bodyClass += " text-white shadow-sm";
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-32 w-16 bg-amber-50/50 rounded-lg p-2 border border-amber-100 shadow-sm shrink-0">
      <div className="w-0.5 bg-amber-400" style={{ height: `${wickTop}px` }} />
      <div className={bodyClass} style={bodyStyle} />
      <div className="w-0.5 bg-amber-400" style={{ height: `${wickBottom}px` }} />
      {label && <span className="text-[8px] font-black text-amber-700 mt-1 uppercase tracking-tighter text-center leading-none font-mono">{label}</span>}
    </div>
  );
};

/**
 * Gold Checklist Ribbon
 */
const GoldChecklistRibbon = () => (
  <div className="w-full bg-[#0B1528] text-white py-2.5 px-4 rounded-xl border border-amber-900/35 flex items-center justify-between shadow-sm shrink-0 mb-4 font-mono">
    <div className="flex items-center gap-2">
      <Zap size={12} className="text-amber-400 animate-pulse" />
      <span className="text-[9px] font-black uppercase tracking-widest text-amber-400">Gold Roadway filter</span>
    </div>
    <span className="text-[10px] font-black text-amber-300 uppercase tracking-tight text-right italic">
      "Before I trust a gold move, I must name the condition and watch the reaction zone."
    </span>
  </div>
);

/**
 * Card 1: Gold Conditions Begin With Volatility Discipline
 */
export const GoldConditionFoundation = () => {
  const [selectedLayer, setSelectedLayer] = useState("volatility");

  const layers = {
    volatility: {
      title: "Volatility State",
      desc: "Gold is naturally fast and volatile. Speed tells you activity increased, but it does not mean the condition is clear.",
      rule: "Never trade price speed alone. Wait for structure verification.",
      badge: "bg-amber-50 text-amber-600 border-amber-200"
    },
    zones: {
      title: "Reaction Zones",
      desc: "Gold moves between key zones rather than precise numbers. Watch how price acts as it tests these areas.",
      rule: "Identify if price is accepting, rejecting, or sweeping the zone.",
      badge: "bg-teal-50 text-teal-600 border-teal-200"
    },
    wicks: {
      title: "Wick Quality",
      desc: "Long wicks relative to candle bodies prove buyer or seller exhaustion. Clean moves close with solid bodies.",
      rule: "Verify close quality at the end of the session before trusting a break.",
      badge: "bg-purple-50 text-purple-600 border-purple-200"
    },
    macro: {
      title: "USD & Macro Pressure",
      desc: "Gold pricing reacts strongly to US economic releases, yields, and interest rate expectations.",
      rule: "Acknowledge when high-impact data distorts technical structures.",
      badge: "bg-rose-50 text-rose-600 border-rose-200"
    }
  };

  const current = layers[selectedLayer as keyof typeof layers];

  return (
    <InstitutionalFrame label="Gold Condition Foundation" id="GD-01-FOUND">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <GoldChecklistRibbon />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Layer Buttons */}
          <div className="md:col-span-5 flex flex-col justify-center space-y-3">
            <div className="space-y-1">
              <span className="text-[10px] font-extrabold text-amber-600 uppercase tracking-widest bg-amber-50 px-2 py-1 rounded border border-amber-100 inline-block">Layer Audit</span>
              <h3 className="text-lg font-black text-[#0B1528] uppercase tracking-tight">Gold Market Layers</h3>
              <p className="text-xs font-semibold text-slate-500 leading-normal">
                Click on the core layers to see how they define the overall Gold environment.
              </p>
            </div>

            <div className="space-y-2 pt-1">
              {Object.keys(layers).map((k) => (
                <button
                  key={k}
                  onClick={() => setSelectedLayer(k)}
                  className={cn(
                    "w-full p-3 rounded-xl border text-left transition-all duration-200 flex items-center justify-between shadow-sm",
                    selectedLayer === k 
                      ? "bg-white border-amber-500 ring-2 ring-amber-500/10 scale-102 text-[#0B1528]" 
                      : "bg-[#F8FBFC] border-slate-200 hover:bg-white text-slate-600"
                  )}
                >
                  <span className="text-xs font-black uppercase tracking-wider">{layers[k as keyof typeof layers].title}</span>
                  <ChevronRight size={14} className={selectedLayer === k ? "text-amber-600" : "text-slate-300"} />
                </button>
              ))}
            </div>
          </div>

          {/* Interactive display */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5"><Compass size={100} className="text-[#0B1528]" /></div>
            
            <div className="space-y-4 relative z-10 font-mono">
              <div className="flex items-center gap-2 text-[9px] font-extrabold uppercase text-slate-400 tracking-wider">
                <Info size={12} className="text-amber-500" />
                Active Market Layer
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
              <p className="text-xs text-[#0B1528] font-black leading-snug font-mono italic">"{current.rule}"</p>
            </div>
          </div>
        </div>

        <MentorInsight 
          text="Gold becomes easier to read when the learner stops asking only 'Was the candle big?' and starts asking 'What condition created this move?'"
          analogy="A professional sailor. Before judging if a boat (price) is accelerating cleanly, the sailor checks the global ocean currents (macro pressure), whether the engine is on or just a temporary sail flap (zones), and the depth of the harbor (volatility state)."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 2: Volatility Changes the Gold Environment
 */
export const GoldVolatilityConditionMap = () => {
  const [activeWeather, setActiveWeather] = useState("calm");

  const conditions = {
    calm: {
      title: "Calm Range",
      impact: "Orderly Rotations",
      desc: "Gold rotates calmly between range highs and lows. Support and resistance zones are respected cleanly.",
      quality: "Standard Reading Quality",
      color: "bg-teal-50 text-teal-600 border-teal-200"
    },
    expansion: {
      title: "Active Expansion",
      impact: "Clean Continuation",
      desc: "Price expands outside ranges with strong candle closes and solid follow-through, backed by volume.",
      quality: "High-Confidence Reading",
      color: "bg-purple-50 text-purple-600 border-purple-200"
    },
    spike: {
      title: "Event Spike",
      impact: "Unstable Sweep",
      desc: "A rapid, news-driven surge that triggers stops on both sides but fails to sustain structure.",
      quality: "Mixed / Unstable Quality",
      color: "bg-amber-50 text-amber-600 border-amber-200"
    },
    chop: {
      title: "Choppy Volatility",
      impact: "Structure Breakdowns",
      desc: "Erratic sweeps and overlapping candle bodies make breakout attempts highly prone to failure.",
      quality: "Unclear / High Risk",
      color: "bg-rose-50 text-rose-600 border-rose-200"
    }
  };

  const current = conditions[activeWeather as keyof typeof conditions];

  return (
    <InstitutionalFrame label="Gold Volatility Weather Map" id="GD-02-VOL">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <GoldChecklistRibbon />

        <div className="space-y-1">
          <span className="text-[10px] font-extrabold text-amber-600 uppercase tracking-widest bg-amber-50 px-2 py-1 rounded border border-amber-100 inline-block">Volatility Context</span>
          <h3 className="text-lg font-black text-[#0B1528] uppercase tracking-tight">Volatility Weather Map</h3>
        </div>

        {/* Weather selectors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200">
          {Object.keys(conditions).map((k) => (
            <button
              key={k}
              onClick={() => setActiveWeather(k)}
              className={cn(
                "py-3 px-2 rounded-lg text-left transition-all duration-200 flex flex-col justify-between h-16 shadow-sm font-mono",
                activeWeather === k ? "bg-[#0B1528] text-white border-transparent scale-102" : "bg-white border-slate-200 hover:bg-slate-50 text-slate-700"
              )}
            >
              <span className="text-[8px] font-black uppercase text-slate-400 leading-none">Weather Condition</span>
              <span className="text-[9px] font-bold text-slate-400 mt-1 leading-none">{conditions[k as keyof typeof conditions].title}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Display component */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-center items-center shadow-sm min-h-[200px] relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#0B1528_1.5px,transparent_1.5px)] bg-[length:16px_16px]" />
            
            <div className="flex gap-4 items-end relative z-10">
              {activeWeather === "calm" && (
                <>
                  <MiniGoldCandle bullish={true} bodyHeight={20} label="Test Low" />
                  <MiniGoldCandle bullish={false} bodyHeight={15} label="Range" />
                  <MiniGoldCandle bullish={true} bodyHeight={25} label="Test High" />
                </>
              )}
              {activeWeather === "expansion" && (
                <>
                  <MiniGoldCandle bullish={true} bodyHeight={35} label="Zone Squeeze" />
                  <MiniGoldCandle bullish={true} bodyHeight={65} label="CLEAN BREAK" />
                  <MiniGoldCandle bullish={true} bodyHeight={20} label="HOLD OUT" color="bg-amber-600 border-amber-700 text-white animate-pulse" />
                </>
              )}
              {activeWeather === "spike" && (
                <>
                  <MiniGoldCandle bullish={true} bodyHeight={10} label="Balanced" />
                  <MiniGoldCandle bullish={true} bodyHeight={75} wickTop={40} label="SPIKE OUT" color="bg-rose-500 border-rose-600 text-white" />
                  <MiniGoldCandle bullish={false} bodyHeight={40} label="REVERT" color="bg-slate-500 border-slate-600 text-white animate-pulse" />
                </>
              )}
              {activeWeather === "chop" && (
                <>
                  <MiniGoldCandle bullish={true} bodyHeight={15} wickTop={30} wickBottom={30} label="Chop Up" color="bg-slate-400 border-slate-500 text-white" />
                  <MiniGoldCandle bullish={false} bodyHeight={10} wickTop={40} wickBottom={40} label="Chop Down" color="bg-slate-400 border-slate-500 text-white" />
                </>
              )}
            </div>
          </div>

          {/* Details panel */}
          <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm font-mono">
            <div className="space-y-4">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block leading-none">Weather Diagnostic Console</span>
              <div className="h-px bg-slate-200" />
              
              <div className="space-y-3">
                <span className={cn("text-[9px] font-black px-2 py-0.5 rounded border inline-block uppercase", current.color)}>
                  {current.impact}
                </span>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  {current.desc}
                </p>
              </div>
            </div>

            <div className="mt-8 bg-slate-100 p-3 border border-slate-200 rounded-xl text-[9px] font-bold text-slate-700">
              Rule: Gold moving fast does not automatically mean Gold is moving clearly.
            </div>
          </div>
        </div>

        <MentorInsight 
          text="Gold can move fast inside chop. Watch for close quality to prove direction." 
          analogy="A hyperactive child. Just because they are running around the house quickly (high volatility) does not mean they are going to the grocery store (clean trend expansion)."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 3: Reaction Zones Shape Gold Conditions
 */
export const GoldReactionZoneCondition = () => {
  const [zoneMode, setZoneMode] = useState("test");

  const zones = {
    test: {
      label: "Zone Test",
      description: "Price moves into a historical reaction zone to check if buyers or sellers are still defending it.",
      result: "Mixed / Pending Acceptance",
      badge: "bg-amber-50 text-amber-600 border-amber-200"
    },
    rejection: {
      label: "Zone Rejection",
      description: "Price enters the zone but leaves a long wick and closes outside it, confirming opposition.",
      result: "Clear Rejection Environment",
      badge: "bg-rose-50 text-rose-600 border-rose-200"
    },
    acceptance: {
      label: "Zone Acceptance",
      description: "Price breaks out of a zone and successfully consolidates on the other side, confirming strength.",
      result: "Clean Continuation Environment",
      badge: "bg-teal-50 text-teal-600 border-teal-200"
    }
  };

  const current = zones[zoneMode as keyof typeof zones];

  return (
    <InstitutionalFrame label="Reaction-Zone Scanner" id="GD-03-ZONE">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <GoldChecklistRibbon />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <div className="space-y-1">
            <span className="text-[10px] font-extrabold text-amber-600 uppercase tracking-widest bg-amber-50 px-2 py-1 rounded border border-amber-100 inline-block">Reaction Zones</span>
            <h3 className="text-lg font-black text-[#0B1528] uppercase tracking-tight">Zone Context Scanner</h3>
          </div>
          
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200 shrink-0">
            {Object.keys(zones).map((k) => (
              <button 
                key={k}
                onClick={() => setZoneMode(k)} 
                className={cn(
                  "px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all font-mono", 
                  zoneMode === k ? "bg-[#0B1528] text-white shadow-sm" : "text-slate-600 hover:text-[#0B1528]"
                )}
              >
                {zones[k as keyof typeof zones].label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Scanner Display */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-center items-center shadow-sm min-h-[220px] relative overflow-hidden">
            {/* Historical Resistance Zone */}
            <div className="absolute top-[80px] left-0 w-full h-[35px] bg-amber-500/10 border-y border-amber-500/20 flex items-center justify-start pl-4">
              <span className="text-[8px] font-black text-amber-700 uppercase tracking-wider">RESISTANCE REACTION ZONE</span>
            </div>

            <div className="flex gap-4 items-end relative z-10">
              <MiniGoldCandle bullish={true} bodyHeight={20} label="Prior Base" />
              {zoneMode === "test" && (
                <>
                  <MiniGoldCandle bullish={true} bodyHeight={40} label="TEST" />
                  <div className="absolute top-2 right-4 bg-amber-100 border border-amber-200 rounded-lg p-2 flex items-center gap-1 text-[8px] font-black text-amber-700 uppercase">
                    <Info size={10} />
                    Awaiting Reaction
                  </div>
                </>
              )}
              {zoneMode === "rejection" && (
                <>
                  <MiniGoldCandle bullish={true} bodyHeight={60} wickTop={35} label="WICK THROUGH" color="bg-rose-500 border-rose-600 text-white" />
                  <MiniGoldCandle bullish={false} bodyHeight={35} label="CLOSE OUT" color="bg-rose-600 border-rose-700 text-white animate-pulse" />
                  <div className="absolute top-2 right-4 bg-rose-100 border border-rose-200 rounded-lg p-2 flex items-center gap-1 text-[8px] font-black text-rose-700 uppercase">
                    <AlertTriangle size={10} />
                    Zone Rejection confirmed
                  </div>
                </>
              )}
              {zoneMode === "acceptance" && (
                <>
                  <MiniGoldCandle bullish={true} bodyHeight={60} label="BREAK THROUGH" />
                  <MiniGoldCandle bullish={true} bodyHeight={20} label="HOLD ABOVE" color="bg-teal-600 border-teal-700 text-white animate-pulse" />
                  <div className="absolute top-2 right-4 bg-teal-100 border border-teal-200 rounded-lg p-2 flex items-center gap-1 text-[8px] font-black text-teal-700 uppercase">
                    <CheckCircle size={10} />
                    Zone Acceptance confirmed
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm font-mono">
            <div className="space-y-4">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block leading-none font-mono">Scanner Diagnostic Console</span>
              <div className="h-px bg-slate-200" />
              
              <div className="space-y-3">
                <span className={cn("text-[9px] font-black px-2 py-0.5 rounded border inline-block uppercase", current.badge)}>
                  {current.result}
                </span>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  {current.description}
                </p>
              </div>
            </div>

            <div className="mt-8 bg-slate-100 p-3 border border-slate-200 rounded-xl text-[9px] font-bold text-slate-700">
              Lesson: A Gold zone is not a wall. It is an area where behavior deserves attention.
            </div>
          </div>
        </div>

        <MentorInsight 
          text="Gold zones are not absolute walls. Watch how the candle interacts with them to classify the condition." 
          analogy="A shoreline. The waves (price) do not stop at one exact, pixel-perfect line on the sand (support level). They crash up the shore, sweeping stops (wicks), and then rotate back into the deep water."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 4: Gold Compression Can Tighten Before Fast Expansion
 */
export const GoldCompressionCondition = () => {
  const [showPaths, setShowPaths] = useState(false);

  return (
    <InstitutionalFrame label="Compression-to-Expansion Lab" id="GD-04-COMP">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <GoldChecklistRibbon />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <div className="space-y-1">
            <span className="text-[10px] font-extrabold text-amber-600 uppercase tracking-widest bg-amber-50 px-2 py-1 rounded border border-amber-100 inline-block">Gold Compression</span>
            <h3 className="text-lg font-black text-[#0B1528] uppercase tracking-tight">Coiled Compression</h3>
          </div>
          
          <button 
            onClick={() => setShowPaths(!showPaths)} 
            className="px-5 py-2.5 bg-[#0B1528] text-white text-[9px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2 shadow-sm shrink-0"
          >
            <RefreshCw size={12} className={cn("transition-transform duration-500", showPaths && "rotate-180")} />
            {showPaths ? "Show Compression Only" : "View Potential Expansion Paths"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Chart Board */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between items-center shadow-sm min-h-[220px] relative overflow-hidden">
            {/* Boundaries */}
            <div className="w-full border-t border-slate-300 border-dashed flex items-center justify-between px-4 pt-1">
              <span className="text-[8px] font-black uppercase text-slate-500 tracking-wider">Compression Upper Limit</span>
            </div>

            {/* Squeeze Candles */}
            <div className="flex gap-4 items-center relative z-10 py-6">
              <MiniGoldCandle bullish={true} bodyHeight={25} label="Coil 1" />
              <MiniGoldCandle bullish={false} bodyHeight={18} label="Coil 2" />
              <MiniGoldCandle bullish={true} bodyHeight={10} label="Coil 3" />
              {showPaths && (
                <>
                  <div className="absolute -top-1 right-2 w-0.5 h-16 border-r-2 border-teal-500 border-dashed animate-pulse" />
                  <div className="absolute -bottom-1 right-2 w-0.5 h-16 border-r-2 border-rose-500 border-dashed animate-pulse" />
                  <span className="absolute -top-6 right-2 text-[8px] font-black text-teal-600 bg-teal-50 px-1 border border-teal-200 rounded">EXPANSION UP</span>
                  <span className="absolute -bottom-6 right-2 text-[8px] font-black text-rose-600 bg-rose-50 px-1 border border-rose-200 rounded">EXPANSION DOWN</span>
                </>
              )}
            </div>

            <div className="w-full border-b border-slate-300 border-dashed flex items-center justify-between px-4 pb-1">
              <span className="text-[8px] font-black uppercase text-slate-500 tracking-wider">Compression Lower Limit</span>
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm font-mono">
            <div className="space-y-4">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block leading-none">Compression Audit</span>
              <div className="h-px bg-slate-200" />
              
              <div className="space-y-3 text-xs text-slate-600 leading-relaxed font-bold">
                <p>
                  1. Price swings are narrowing and candle sizes are shrinking. Buyers and sellers are in coiled balance.
                </p>
                <p>
                  2. Rule: Compression does not guarantee which way the breakout will resolve. Neutrality is key.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-amber-50 border border-amber-200 p-3 rounded-xl text-[9px] font-bold text-amber-800">
              Rule: Compression is not a prediction. Wait for verified expansion.
            </div>
          </div>
        </div>

        <MentorInsight 
          text="Compression is not a prediction. It is a condition that says, 'Movement is tightening. Wait to see what price proves next.'" 
          analogy="A coiled spring. You can press the spring down (compression) to build up massive energy. You know it will expand eventually, but you don't know if it will slip left or right (breakout direction) until it actually does."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 5: Gold Expansion Must Prove It Is Clean
 */
export const GoldExpansionQuality = () => {
  const [expansionMode, setExpansionMode] = useState("clean");

  return (
    <InstitutionalFrame label="Expansion Quality Board" id="GD-05-EXPN">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <GoldChecklistRibbon />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <div className="space-y-1">
            <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-teal-50 px-2 py-1 rounded border border-teal-100 inline-block">Gold Expansion</span>
            <h3 className="text-lg font-black text-[#0B1528] uppercase tracking-tight">Breakout Verification</h3>
          </div>
          
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200 shrink-0">
            <button 
              onClick={() => setExpansionMode("clean")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", expansionMode === "clean" ? "bg-teal-600 text-white shadow-sm" : "text-slate-600 hover:text-teal-600")}
            >
              Clean Hold
            </button>
            <button 
              onClick={() => setExpansionMode("wick")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", expansionMode === "wick" ? "bg-rose-600 text-white shadow-sm" : "text-slate-600 hover:text-rose-600")}
            >
              Wick & Fail
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Chart Display */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-center items-center shadow-sm min-h-[220px] relative overflow-hidden">
            <div className="absolute top-[80px] left-0 w-full border-t border-slate-300 border-dashed" />
            <span className="absolute top-[85px] left-4 text-[7px] font-black text-slate-400 uppercase tracking-wider">Reaction Zone Boundary</span>

            <div className="flex gap-4 items-end relative z-10">
              <MiniGoldCandle bullish={true} bodyHeight={20} label="Prior Squeeze" />
              {expansionMode === "clean" ? (
                <>
                  <MiniGoldCandle bullish={true} bodyHeight={60} label="CLEAN CLOSE" />
                  <MiniGoldCandle bullish={true} bodyHeight={20} wickTop={10} label="HOLD OUT" color="bg-teal-600 border-teal-700 text-white animate-pulse" />
                </>
              ) : (
                <>
                  <MiniGoldCandle bullish={true} bodyHeight={70} wickTop={40} label="SPIKE OUT" color="bg-rose-500 border-rose-600 text-white" />
                  <MiniGoldCandle bullish={false} bodyHeight={50} label="FADE IN" color="bg-rose-600 border-rose-700 text-white animate-pulse" />
                </>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm font-mono">
            <div className="space-y-4">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block leading-none font-mono">Expansion Diagnostic Console</span>
              <div className="h-px bg-slate-200" />
              
              <div className="space-y-3">
                <span className={cn("text-[9px] font-black px-2 py-0.5 rounded border inline-block uppercase", expansionMode === "clean" ? "text-teal-600 bg-teal-50 border-teal-200" : "text-rose-600 bg-rose-50 border-rose-200")}>
                  {expansionMode === "clean" ? "CLEAN VERIFIED EXPANSION" : "UNSTABLE SPIKE FADE"}
                </span>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  {expansionMode === "clean" 
                    ? "The breakout candle closed cleanly outside the reaction zone with a strong body, and the next candle held outside the zone. High quality."
                    : "A rapid spike through the reaction zone that ran out of buying support, leaving a long upper wick and fading back inside."
                  }
                </p>
              </div>
            </div>

            <div className="mt-8 bg-slate-100 p-3 border border-slate-200 rounded-xl text-[9px] font-bold text-slate-700">
              Rule: The move happened. Now check whether Gold held the move.
            </div>
          </div>
        </div>

        <MentorInsight 
          text="A fast move is not always a clean move." 
          analogy="A bridge. A bridge built with steel girders (clean hold) stands firm when a train crosses it (trend continuation). A bridge built on unstable stilts (unstable spike) collapses into the river the second a heavy load hits it (reversal)."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 6: Macro Pressure Can Distort Gold Conditions
 */
export const GoldMacroConditionDistortion = () => {
  const [macroState, setMacroState] = useState("distortion");

  return (
    <InstitutionalFrame label="Macro Pressure State Board" id="GD-06-MACR">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <GoldChecklistRibbon />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <div className="space-y-1">
            <span className="text-[10px] font-extrabold text-rose-600 uppercase tracking-widest bg-rose-50 px-2 py-1 rounded border border-rose-100 inline-block">Macro Distortion</span>
            <h3 className="text-lg font-black text-[#0B1528] uppercase tracking-tight">Macro Pressure State Board</h3>
          </div>
          
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200 shrink-0">
            <button 
              onClick={() => setMacroState("distortion")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", macroState === "distortion" ? "bg-rose-600 text-white shadow-sm" : "text-slate-600 hover:text-rose-600")}
            >
              CPI/News Spike
            </button>
            <button 
              onClick={() => setMacroState("settled")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", macroState === "settled" ? "bg-teal-600 text-white shadow-sm" : "text-slate-600 hover:text-teal-600")}
            >
              Post-News Settlement
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Chart Display */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-center items-center shadow-sm min-h-[220px] relative overflow-hidden">
            <div className="flex gap-4 items-end relative z-10 font-mono">
              <MiniGoldCandle bullish={true} bodyHeight={20} label="Pre-Event" />
              {macroState === "distortion" ? (
                <>
                  <MiniGoldCandle bullish={true} bodyHeight={80} wickTop={40} wickBottom={40} label="CPI DUAL SWEEP" color="bg-rose-500 border-rose-600 text-white" />
                  <div className="absolute top-4 right-4 bg-rose-100 border border-rose-200 rounded-lg p-2 flex items-center gap-1 text-[8px] font-black text-rose-700 uppercase animate-bounce">
                    <AlertTriangle size={10} />
                    Unstable macro distortion
                  </div>
                </>
              ) : (
                <>
                  <MiniGoldCandle bullish={true} bodyHeight={75} wickTop={10} label="SETTLED CLOSE" />
                  <MiniGoldCandle bullish={true} bodyHeight={20} label="CONFIRMED HOLD" color="bg-teal-600 border-teal-700 text-white animate-pulse" />
                  <div className="absolute top-4 right-4 bg-teal-100 border border-teal-200 rounded-lg p-2 flex items-center gap-1 text-[8px] font-black text-teal-700 uppercase">
                    <CheckCircle size={10} />
                    Settled structure
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm font-mono">
            <div className="space-y-4">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block leading-none">Macro State Console</span>
              <div className="h-px bg-slate-200" />
              
              <div className="space-y-3">
                <span className={cn("text-[9px] font-black px-2 py-0.5 rounded border inline-block uppercase", macroState === "distortion" ? "text-rose-600 bg-rose-50 border-rose-200" : "text-teal-600 bg-teal-50 border-teal-200")}>
                  {macroState === "distortion" ? "UNSTABLE MACRO SWEEP" : "VERIFIED STABILIZATION"}
                </span>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  {macroState === "distortion" 
                    ? "Gold spikes rapidly down then up, clearing resting stops in both directions. The candle has long wicks and no reliable close quality."
                    : "The CPI news spike has completed and price has settled near the highs, establishing a quality close and organic follow-through."
                  }
                </p>
              </div>
            </div>

            <div className="mt-8 bg-slate-100 p-3 border border-slate-200 rounded-xl text-[9px] font-bold text-slate-700">
              Rule: During macro events, stand aside and wait for settlement.
            </div>
          </div>
        </div>

        <MentorInsight 
          text="Macro data releases create temporary waves. Let the water settle before reading the tide." 
          analogy="A storm at sea. A boat captain does not try to map the ocean floor while a hurricane is active (CPI release). They wait for the storm to pass and the waves to calm (post-news settlement) before taking a clean reading."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 7: Gold Trend Conditions Need Structure, Not Speed
 */
export const GoldTrendConditionStructure = () => {
  return (
    <InstitutionalFrame label="Trend Structure Board" id="GD-07-TRND">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <GoldChecklistRibbon />

        <div className="space-y-1">
          <span className="text-[10px] font-extrabold text-amber-600 uppercase tracking-widest bg-amber-50 px-2 py-1 rounded border border-amber-100 inline-block">Trend Structure</span>
          <h3 className="text-lg font-black text-[#0B1528] uppercase tracking-tight">Staircase Trend Structure</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Trend Display */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-center items-center shadow-sm min-h-[220px] relative overflow-hidden">
            <div className="flex gap-3 items-end relative z-10">
              <MiniGoldCandle bullish={true} bodyHeight={20} label="HH 1" />
              <MiniGoldCandle bullish={false} bodyHeight={12} label="HL 1 (Retest)" color="bg-amber-100 border-amber-300 text-amber-800" />
              <MiniGoldCandle bullish={true} bodyHeight={35} label="HH 2" />
              <MiniGoldCandle bullish={false} bodyHeight={15} label="HL 2 (Retest)" color="bg-amber-100 border-amber-300 text-amber-800" />
              <MiniGoldCandle bullish={true} bodyHeight={45} label="HH 3" />
            </div>
            
            <div className="absolute top-4 right-4 bg-teal-100 border border-teal-200 rounded-lg p-2 flex items-center gap-1 text-[8px] font-black text-teal-700 uppercase">
              <CheckCircle size={10} />
              STRUCTURAL STAIRCASE
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm font-mono">
            <div className="space-y-4">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block leading-none font-mono">Trend Audit Console</span>
              <div className="h-px bg-slate-200" />
              
              <div className="space-y-3 text-xs text-slate-600 leading-relaxed font-bold">
                <p>
                  1. Price is building a clean staircase of higher highs (HH) and higher lows (HL).
                </p>
                <p>
                  2. Pullbacks cleanly retest previous broken resistance levels as new support.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-slate-100 p-3 border border-slate-200 rounded-xl text-[9px] font-bold text-slate-700">
              Rule: A real trend is a staircase, not a single elevator. Look for the steps.
            </div>
          </div>
        </div>

        <MentorInsight 
          text="A real trend is a staircase, not a single elevator. Look for the steps." 
          analogy="Hiking up a mountain. A hiker climbs a rocky slope (higher high) and then stops to rest on a flat ledge (higher low). If the ledge holds their weight (pullback support), they continue the climb safely. If they slip, they fall back down to the baseline."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 8: Gold Chop Makes Strong Candles Less Trustworthy
 */
export const GoldChoppyConditionWarning = () => {
  return (
    <InstitutionalFrame label="Gold Chop Detector" id="GD-08-CHOP" status="CHOP STATE">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <GoldChecklistRibbon />

        <div className="space-y-1">
          <span className="text-[10px] font-extrabold text-rose-600 uppercase tracking-widest bg-rose-50 px-2 py-1 rounded border border-rose-100 inline-block">Gold Chop</span>
          <h3 className="text-lg font-black text-[#0B1528] uppercase tracking-tight">Unreadable Chop Detector</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Chart Display */}
          <div className="md:col-span-7 bg-rose-50/10 border border-rose-200 rounded-[2rem] p-6 flex flex-col justify-center items-center shadow-sm min-h-[220px] relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#0B1528_1.5px,transparent_1.5px)] bg-[length:16px_16px]" />
            
            <div className="flex gap-2 items-center relative z-10">
              <MiniGoldCandle bullish={true} bodyHeight={20} wickTop={30} wickBottom={30} label="Chop" color="bg-rose-500/40 border-rose-400 text-rose-800" />
              <MiniGoldCandle bullish={false} bodyHeight={15} wickTop={35} wickBottom={30} label="Chop" color="bg-slate-400/40 border-slate-300 text-slate-800" />
              <MiniGoldCandle bullish={true} bodyHeight={10} wickTop={40} wickBottom={40} label="Chop" color="bg-rose-500/40 border-rose-400 text-rose-800" />
              <MiniGoldCandle bullish={false} bodyHeight={25} wickTop={20} wickBottom={35} label="Chop" color="bg-slate-400/40 border-slate-300 text-slate-800" />
            </div>

            <div className="absolute top-4 right-4 bg-rose-100 border border-rose-200 rounded-lg p-2 flex items-center gap-1 text-[9px] font-black text-rose-700 uppercase">
              <AlertTriangle size={12} className="text-rose-500" />
              CHOP STATE DETECTED
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm font-mono">
            <div className="space-y-4">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block leading-none">Chop Diagnostics Console</span>
              <div className="h-px bg-slate-200" />
              
              <div className="space-y-2 text-xs font-bold text-slate-700">
                <div className="flex items-center gap-2">
                  <AlertTriangle size={14} className="text-[#BE123C] shrink-0" />
                  <span>Price boundaries are ignored</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle size={14} className="text-[#BE123C] shrink-0" />
                  <span>Candle bodies overlap constantly</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle size={14} className="text-[#BE123C] shrink-0" />
                  <span>No swing continuation exists</span>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-rose-100/50 p-4 border border-rose-200/50 rounded-xl text-[10px] font-bold text-rose-800 leading-normal flex items-start gap-2">
              <Ban size={14} className="shrink-0 mt-0.5" />
              <span>
                Chop is not a failure to understand. Sometimes Gold is simply not clean. Protect capital and stand aside.
              </span>
            </div>
          </div>
        </div>

        <MentorInsight 
          text="If Gold feels messy, it may not be your fault. Sometimes Gold is genuinely not offering a clean condition." 
          analogy="A construction site. When thick dust is flying everywhere (chop), you do not paint the walls. You wait for the air to clear (clean structure) before making a final stroke."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 9: Gold Condition First, Candle Second
 */
export const GoldConditionFirstWorkflow = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { label: "1. Gold Condition", desc: "Is XAU/USD trending, compressing, or choppy?" },
    { label: "2. Reaction Zone", desc: "Is price near a key historical resistance or support area?" },
    { label: "3. Volatility Context", desc: "Is the move driven by macro news or normal structure?" },
    { label: "4. Close Quality", desc: "Did the breakout candle close cleanly with a solid body?" },
    { label: "5. Follow-through", desc: "Does price accept value outside the level or fail?" }
  ];

  return (
    <InstitutionalFrame label="Gold Reading Checklist" id="GD-09-WORK">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <GoldChecklistRibbon />

        <div className="space-y-1">
          <span className="text-[10px] font-extrabold text-amber-600 uppercase tracking-widest bg-amber-50 px-2 py-1 rounded border border-amber-100 inline-block">Workflow Map</span>
          <h3 className="text-lg font-black text-[#0B1528] uppercase tracking-tight">Gold Mental Checklist</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Flow list */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-2">
            {steps.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={cn(
                  "p-3 rounded-xl border text-left transition-all duration-205 flex items-center justify-between shadow-sm font-mono",
                  activeStep === idx 
                    ? "bg-[#0B1528] text-white border-transparent scale-102" 
                    : "bg-white border-slate-200 hover:bg-slate-50 text-slate-600"
                )}
              >
                <span className="text-xs font-black uppercase tracking-wider">{s.label}</span>
                <ChevronRight size={14} className={activeStep === idx ? "text-amber-400" : "text-slate-300"} />
              </button>
            ))}
          </div>

          {/* Details */}
          <div className="md:col-span-6 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm font-mono relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5"><ListChecks size={100} className="text-[#0B1528]" /></div>
            
            <div className="space-y-4 relative z-10">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block leading-none">Workflow Step Details</span>
              <div className="h-px bg-slate-100" />
              
              <div className="space-y-2">
                <span className="text-[10px] font-black text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 inline-block">
                  {steps[activeStep].label}
                </span>
                <p className="text-xs text-slate-600 font-semibold leading-relaxed">
                  {steps[activeStep].desc}
                </p>
              </div>
            </div>

            <div className="mt-8 bg-slate-50 p-4 rounded-xl text-[9px] font-bold text-slate-700 italic border border-slate-200">
              Rule: Never audit a candle until you have named the room it is standing in.
            </div>
          </div>
        </div>

        <MentorInsight 
          text="Never audit a candle until you have named the room it is standing in."
          analogy="An inspector. Before checking if a single electrical switch works (breakout candle), the inspector checks if the building's main power grid is turned on (condition) and if the wiring is up to code (zones)."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 10: Practice Drill: What Gold Condition Is This?
 */
export const GoldConditionPracticeDrill = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const scenario = {
    prior: "Gold compresses below a previous reaction zone during an active market window. Then it pushes above the zone with a large candle, but the candle leaves a long upper wick and closes near the middle.",
    recent: "USD context is unclear, and the next candle hesitates instead of continuing upward."
  };

  const options = [
    {
      id: "A",
      text: "Clean expansion condition because Gold moved above the reaction zone.",
      isCorrect: false,
      feedback: "Incorrect. Moving above the zone matters, but expansion is not clean until Gold proves quality after the move. Here, the long upper wick, middle close, and weak follow-through lower the quality."
    },
    {
      id: "B",
      text: "Clean trend condition because the candle was large.",
      isCorrect: false,
      feedback: "Incorrect. One large candle does not create a full trend condition. Trends require session support and structured follow-through, which are missing here."
    },
    {
      id: "C",
      text: "Mixed / unstable expansion because the move happened, but wick behavior, close quality, USD context, and follow-through are not clean.",
      isCorrect: true,
      feedback: "Correct! The move occurred, but the long upper wick, middle close, unclear USD context, and weak follow-through mean the condition is mixed or unstable. It is not a clean expansion."
    },
    {
      id: "D",
      text: "Guaranteed reversal because the candle left an upper wick.",
      isCorrect: false,
      feedback: "Incorrect. An upper wick does not guarantee reversal. It only gives a clue that must be audited. Avoid predictive, absolute statements."
    }
  ];

  return (
    <InstitutionalFrame label="Gold Condition Practice Drill" id="GD-10-DRILL">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <GoldChecklistRibbon />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Scenario Board */}
          <div className="md:col-span-5 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm font-mono">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[9px] font-extrabold uppercase text-slate-400 tracking-wider">
                <Info size={12} className="text-amber-500" />
                Scenario Evidence Board
              </div>
              <div className="h-px bg-slate-100" />
              
              <div className="space-y-3">
                <h4 className="text-[10px] font-black uppercase text-[#0B1528]">Breakout Attempt</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-bold">{scenario.prior}</p>
                
                <h4 className="text-[10px] font-black uppercase text-[#0B1528] mt-4">Context Clues</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-bold">{scenario.recent}</p>
              </div>
            </div>

            <div className="mt-8 bg-slate-50 p-4 rounded-xl text-[9px] text-slate-500">
              Audit Rule: Look for zone acceptance and follow-through.
            </div>
          </div>

          {/* Choices */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-sm font-black text-[#0B1528] uppercase tracking-tight font-mono">
                What is the most disciplined Gold condition reading?
              </h3>
              
              <div className="space-y-2">
                {options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedOption(opt.id)}
                    className={cn(
                      "w-full p-4 rounded-xl border text-left text-xs font-bold leading-normal transition-all duration-200 shadow-sm font-mono",
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
                    "p-4 rounded-xl border text-xs font-semibold leading-relaxed shadow-sm font-mono",
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
                  <p>{options.find(o => o.id === selectedOption)?.feedback}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <MentorInsight 
          text="If the candle closes in the middle and the USD is flat, the breakout is likely built on sand."
          analogy="Divergence. If a pilot tries to take off (breakout spike) but the co-pilot (spot volume) is asleep and the engine (USD context) is turned off, the airplane will stall and crash immediately."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 11: Debrief: Read the Gold Condition Before the Move
 */
export const GoldConditionDebrief = () => {
  return (
    <InstitutionalFrame label="Gold Roadway Debrief" id="GD-11-DEBR">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <GoldChecklistRibbon />

        <div className="bg-[#0B1528] rounded-[2rem] p-8 border border-amber-900/35 shadow-2xl relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 p-6 opacity-10"><Zap size={120} className="text-amber-400" /></div>
          
          <div className="relative z-10 space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-extrabold text-amber-400 uppercase tracking-[0.25em]">Gold Track Complete</span>
            <h3 className="text-lg font-black leading-tight uppercase tracking-tight font-mono">Environmental Filter</h3>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xl font-semibold">
              You have completed the Level 0 Module 0.7 Gold Roadway. You have shifted your perspective from chasing individual candles to auditing the overall Gold environment. You now understand that volatility, reaction zones, macro pressure, USD context, close quality, structure, and follow-through dictate the validity of every technical setup.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <h4 className="text-xs font-black uppercase text-[#0B1528] mb-2 font-mono">1. Volatility Context</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              Gold moves fast, but speed does not prove direction. Check the close quality and location of the move before auditing the environment.
            </p>
          </div>
          <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <h4 className="text-xs font-black uppercase text-[#0B1528] mb-2 font-mono">2. Reaction Zones</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              Gold respects buffers, not walls. Watch how candle bodies and wicks interact inside key zones to verify acceptance or rejection.
            </p>
          </div>
          <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <h4 className="text-xs font-black uppercase text-[#0B1528] mb-2 font-mono">3. Macro Pressure</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              USD and macro indicators can heavily distort short-term structure. Wait for post-news settlement to find clean technical conditions.
            </p>
          </div>
        </div>

        <MentorInsight 
          text="Do not ask what the Gold candle is doing. Ask what condition Gold is in, and what reaction zone created the move." 
          analogy="A professional navigator. They do not just steer the wheel (trade the local candles); they check the weather radar (macro pressure), the depth of the water (volatility state), and the harbor entry zones (reaction zones) before sailing."
        />
      </div>
    </InstitutionalFrame>
  );
};
