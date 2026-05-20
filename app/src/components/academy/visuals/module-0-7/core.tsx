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
  Minimize2,
  HelpCircle,
  Play
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { InstitutionalFrame, MentorInsight } from "./shared";

const MiniCandle = ({ bullish = true, bodyHeight = 40, wickTop = 15, wickBottom = 15, label = "", color = "" }) => {
  let bodyStyle: React.CSSProperties = { height: `${bodyHeight}px`, animationDuration: "3s" };
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
    <div className="flex flex-col items-center justify-center h-32 w-16 bg-[#F8FAFC] rounded-lg p-2 border border-slate-100 shadow-sm shrink-0">
      {/* Upper Wick */}
      <div className="w-0.5 bg-slate-400" style={{ height: `${wickTop}px` }} />
      {/* Body */}
      <div className={bodyClass} style={bodyStyle} />
      {/* Lower Wick */}
      <div className="w-0.5 bg-slate-400" style={{ height: `${wickBottom}px` }} />
      {label && <span className="text-[8px] font-black text-slate-500 mt-1 uppercase tracking-tighter text-center leading-none">{label}</span>}
    </div>
  );
};

/**
 * Core Checklist Ribbon
 */
const ChecklistRibbon = () => (
  <div className="w-full bg-[#071B36] text-white py-2.5 px-4 rounded-xl border border-slate-800 flex items-center justify-between shadow-sm shrink-0 mb-4 font-mono">
    <div className="flex items-center gap-2">
      <Compass size={12} className="text-teal-400 animate-spin" style={{ animationDuration: "10s" }} />
      <span className="text-[9px] font-black uppercase tracking-widest text-slate-300">Lurnava Mental Filter</span>
    </div>
    <span className="text-[10px] font-black text-teal-400 uppercase tracking-tight text-right italic">
      "Before I trust the candle, I must identify the environment."
    </span>
  </div>
);

/**
 * Card 1: Market Conditions Are the Environment Around Evidence
 */
export const MarketConditionsFoundation = () => {
  const [selectedLens, setSelectedLens] = useState("trend");

  const lenses = {
    trend: {
      title: "Trend Lens",
      badge: "bg-teal-50 text-teal-600 border-teal-100",
      desc: "Inside a clean trend, this strong candle represents structural continuation. Buyers are committed.",
      trap: "SPECULATIVE TRAP: Buying blindly without checking pullback zones.",
      outcome: "ALIGNED CONTINUATION"
    },
    range: {
      title: "Range Lens",
      badge: "bg-amber-50 text-amber-600 border-amber-100",
      desc: "At a range boundary, this exact same strong candle represents exhaustion. Sellers will defend.",
      trap: "SPECULATIVE TRAP: Buying the breakout candle expecting a clean launch.",
      outcome: "EXHAUSTION SWEEP WARNING"
    },
    compression: {
      title: "Compression Lens",
      badge: "bg-purple-50 text-purple-600 border-purple-100",
      desc: "Inside compression, this candle is an expansion attempt. It must close outside to verify.",
      trap: "SPECULATIVE TRAP: Guessing the breakout direction inside the squeeze.",
      outcome: "EXPANSION ATTEMPT"
    },
    chop: {
      title: "Chop Lens",
      badge: "bg-rose-50 text-[#BE123C] border-rose-100",
      desc: "Inside choppy noise, this candle is random. Swings overlap, structure is ignored.",
      trap: "SPECULATIVE TRAP: Finding patterns and forcing trades in random noise.",
      outcome: "RANDOM NOISE / IGNORE"
    }
  };

  const current = lenses[selectedLens as keyof typeof lenses];

  return (
    <InstitutionalFrame label="Market Conditions Foundation" id="ENV-01-FOUND">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <ChecklistRibbon />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Lenses Selection */}
          <div className="md:col-span-5 flex flex-col justify-center space-y-3">
            <div className="space-y-1">
              <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-teal-50 px-2 py-1 rounded border border-teal-100 inline-block">State Filter</span>
              <h3 className="text-lg font-black text-[#071B36] uppercase tracking-tight">The Environment Lens</h3>
              <p className="text-xs font-semibold text-slate-500 leading-normal">
                Observe how the exact same green candle completely shifts its meaning depending on the environment you identify first.
              </p>
            </div>

            <div className="space-y-2 pt-1">
              {Object.keys(lenses).map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectedLens(key)}
                  className={cn(
                    "w-full p-3 rounded-xl border text-left transition-all duration-200 flex items-center justify-between shadow-sm",
                    selectedLens === key 
                      ? "bg-white border-teal-500 ring-2 ring-teal-100 scale-102 text-[#071B36]" 
                      : "bg-[#F8FBFC] border-slate-200 hover:bg-white text-slate-600"
                  )}
                >
                  <span className="text-xs font-black uppercase tracking-wider">{key} Condition</span>
                  <ChevronRight size={14} className={selectedLens === key ? "text-teal-600" : "text-slate-300"} />
                </button>
              ))}
            </div>
          </div>

          {/* Display Output */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col md:flex-row gap-6 items-center shadow-sm">
            <div className="flex flex-col items-center shrink-0 border border-slate-100 bg-[#F1F5F9] rounded-2xl p-4">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-3">Isolated Candle</span>
              <MiniCandle bullish={true} bodyHeight={60} wickTop={5} wickBottom={5} label="GREEN CANDLE" color="bg-teal-600 border-teal-700 text-white" />
            </div>

            <div className="flex-1 flex flex-col justify-between h-full space-y-4">
              <div className="space-y-3">
                <span className={cn("px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase border tracking-wider inline-block", current.badge)}>
                  {current.title}
                </span>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  {current.desc}
                </p>
                <div className="bg-rose-50 border border-rose-100 rounded-lg p-2 flex items-start gap-1.5">
                  <AlertTriangle size={12} className="text-[#BE123C] shrink-0 mt-0.5" />
                  <span className="text-[10px] font-bold text-[#BE123C]">{current.trap}</span>
                </div>
              </div>

              <div className="bg-slate-50 p-4 border border-slate-200 rounded-xl space-y-1">
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block leading-none">Audited Interpretation</span>
                <span className="text-xs font-black text-[#071B36] uppercase tracking-tight">{current.outcome}</span>
              </div>
            </div>
          </div>
        </div>

        <MentorInsight 
          text="A good reading starts by asking where the evidence is forming, not just what the evidence looks like." 
          analogy="A seed. Planting a premium seed (a strong candle) inside fertile soil (a clean trend) produces a healthy tree. Planting the same seed on concrete (choppy consolidation) produces nothing."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 2: Trend Condition: When Direction Has Structure
 */
export const TrendConditionEnvironment = () => {
  const [auditMode, setAuditMode] = useState("speculative");

  return (
    <InstitutionalFrame label="Trend Environment Audit" id="ENV-02-TRND">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <ChecklistRibbon />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <div className="space-y-1">
            <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-teal-50 px-2 py-1 rounded border border-teal-100 inline-block">Trend Environment</span>
            <h3 className="text-lg font-black text-[#071B36] uppercase tracking-tight">Structured Swing Sequence</h3>
          </div>
          
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200 shrink-0">
            <button 
              onClick={() => setAuditMode("speculative")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", auditMode === "speculative" ? "bg-rose-600 text-white shadow-sm" : "text-slate-600 hover:text-[#071B36]")}
            >
              Speculative Trap
            </button>
            <button 
              onClick={() => setAuditMode("audited")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", auditMode === "audited" ? "bg-teal-600 text-white shadow-sm" : "text-slate-600 hover:text-[#071B36]")}
            >
              Audited Reality
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Swing Chart */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-center items-center shadow-sm min-h-[220px] relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] bg-[length:16px_16px]" />
            
            <div className="flex gap-4 items-end relative z-10">
              <MiniCandle bullish={true} bodyHeight={30} label="Low" />
              <MiniCandle bullish={true} bodyHeight={60} label="High" />
              {auditMode === "speculative" ? (
                <>
                  <MiniCandle bullish={false} bodyHeight={50} wickTop={5} wickBottom={5} label="RED SPIKE" color="bg-rose-600 border-rose-700 text-white" />
                  <div className="absolute -top-4 right-10 bg-rose-100 border border-rose-200 px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 text-[9px] font-black text-rose-700 uppercase animate-bounce">
                    <AlertTriangle size={12} />
                    Trap: 'The market is crashing, sell!'
                  </div>
                </>
              ) : (
                <>
                  <MiniCandle bullish={false} bodyHeight={25} label="Value Test" color="bg-teal-600 border-teal-700 text-white" />
                  <MiniCandle bullish={true} bodyHeight={75} label="HH Resume" />
                  <div className="absolute -top-4 right-10 bg-teal-100 border border-teal-200 px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 text-[9px] font-black text-teal-700 uppercase">
                    <CheckCircle size={12} />
                    Environment: Uptrend structure holds
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Diagnostics */}
          <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block leading-none">Diagnostic Console</span>
              <div className="h-px bg-slate-200" />
              
              <div className="space-y-3 font-mono">
                <span className={cn("text-[9px] font-black px-2 py-0.5 rounded border inline-block uppercase", auditMode === "audited" ? "text-teal-600 bg-teal-50 border-teal-100" : "text-rose-600 bg-rose-50 border-rose-100")}>
                  {auditMode === "audited" ? "AUDIT: STRUCTURAL PULLBACK" : "TRAP: REACTIONARY SELLING"}
                </span>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  {auditMode === "audited" 
                    ? "Before we trusted the red candles, we identified the environment as an uptrend. Therefore, the drop is classified as a normal pullback holding previous structure."
                    : "Reactionary chaser focuses strictly on the speed of the local red candles, completely ignoring that the broader trend structure is intact."
                  }
                </p>
              </div>
            </div>

            <span className="text-[8px] font-mono text-slate-300 uppercase tracking-tighter mt-4 block border-t border-slate-200 pt-3">
              Verdict: Environment dictates candle value.
            </span>
          </div>
        </div>

        <MentorInsight 
          text="Before you trust those red candles, identify the environment. It is an uptrend, which means pullbacks are temporary value tests, not reversals." 
          analogy="A conveyor belt. When the belt is moving forward smoothly (trend), a package sliding backward slightly (pullback) does not mean the belt has reversed. It is just adjusting to local weight."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 3: Range Condition: When Price Rotates Instead of Travels
 */
export const RangeConditionEnvironment = () => {
  const [auditMode, setAuditMode] = useState("speculative");

  return (
    <InstitutionalFrame label="Range Environment Audit" id="ENV-03-RNG">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <ChecklistRibbon />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <div className="space-y-1">
            <span className="text-[10px] font-extrabold text-amber-600 uppercase tracking-widest bg-amber-50 px-2 py-1 rounded border border-amber-100 inline-block">Range Environment</span>
            <h3 className="text-lg font-black text-[#071B36] uppercase tracking-tight">Horizontal Balance Rotation</h3>
          </div>
          
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200 shrink-0">
            <button 
              onClick={() => setAuditMode("speculative")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", auditMode === "speculative" ? "bg-rose-600 text-white shadow-sm" : "text-slate-600 hover:text-[#071B36]")}
            >
              Speculative Trap
            </button>
            <button 
              onClick={() => setAuditMode("audited")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", auditMode === "audited" ? "bg-teal-600 text-white shadow-sm" : "text-slate-600 hover:text-[#071B36]")}
            >
              Audited Reality
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Chart Display */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between items-center shadow-sm min-h-[220px] relative overflow-hidden">
            {/* Ceiling */}
            <div className="w-full border-t border-rose-200 border-dashed flex items-center justify-between px-4 pt-1">
              <span className="text-[8px] font-black uppercase text-rose-500 tracking-wider bg-rose-50 px-1 border border-rose-100 rounded">Ceiling (Resistance)</span>
            </div>

            {/* Rotation candles */}
            <div className="flex gap-4 items-center relative z-10 py-6">
              <MiniCandle bullish={true} bodyHeight={30} label="Move Up" />
              {auditMode === "speculative" ? (
                <>
                  <MiniCandle bullish={true} bodyHeight={60} wickTop={5} wickBottom={5} label="BREAKOUT?" color="bg-teal-600 border-teal-700 text-white" />
                  <div className="absolute -top-2 right-10 bg-rose-100 border border-rose-200 px-2 py-1 rounded flex items-center gap-1 text-[8px] font-black text-rose-700 uppercase animate-bounce">
                    <AlertTriangle size={10} />
                    Trap: 'Buy the breakout!'
                  </div>
                </>
              ) : (
                <>
                  <MiniCandle bullish={false} bodyHeight={15} wickTop={45} wickBottom={5} label="EXHAUSTION" color="bg-rose-600 border-rose-700 text-white" />
                  <MiniCandle bullish={false} bodyHeight={40} label="Rotate Down" />
                  <div className="absolute -top-2 right-10 bg-teal-100 border border-teal-200 px-2 py-1 rounded flex items-center gap-1 text-[8px] font-black text-teal-700 uppercase">
                    <CheckCircle size={10} />
                    Audit: Range High Exhaustion
                  </div>
                </>
              )}
            </div>

            {/* Floor */}
            <div className="w-full border-b border-teal-200 border-dashed flex items-center justify-between px-4 pb-1">
              <span className="text-[8px] font-black uppercase text-teal-500 tracking-wider bg-teal-50 px-1 border border-teal-100 rounded">Floor (Support)</span>
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4 font-mono">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block leading-none">Diagnostic Console</span>
              <div className="h-px bg-slate-200" />
              
              <div className="space-y-3">
                <span className={cn("text-[9px] font-black px-2 py-0.5 rounded border inline-block uppercase", auditMode === "audited" ? "text-teal-600 bg-teal-50 border-teal-100" : "text-rose-600 bg-rose-50 border-rose-100")}>
                  {auditMode === "audited" ? "AUDIT: BOUNDARY REJECTION" : "TRAP: BREAKOUT FOMO"}
                </span>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  {auditMode === "audited" 
                    ? "Before we trusted the green candle breakout, we identified the range condition. Therefore, we expect boundaries to contain price. We treat it as an exhaustion sweep."
                    : "Reactionary chaser buys the breakout candle right at the range ceiling, getting trapped immediately when price rotates back to support."
                  }
                </p>
              </div>
            </div>

            <span className="text-[8px] font-mono text-slate-300 uppercase tracking-tighter mt-4 block border-t border-slate-200 pt-3">
              Verdict: Range ceiling repels price rotation.
            </span>
          </div>
        </div>

        <MentorInsight 
          text="Before you buy the breakout candle, identify the environment. It is a range, which means the boundary will likely repel the move." 
          analogy="A ping-pong match. The ball travels quickly from side to side (rotation), but it always returns because the boundaries repels it. Do not assume the ball is launching into outer space until it leaves the table."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 4: Transition Condition: When the Market Is Changing State
 */
export const TransitionConditionMap = () => {
  const [transitionStep, setTransitionStep] = useState(0);

  const steps = [
    { label: "1. Clean Trend", badge: "bg-teal-50 text-teal-600 border-teal-100", desc: "Trend swings are clear and non-overlapping. Sequential higher highs and higher lows maintain direction." },
    { label: "2. Weakening Impulse", badge: "bg-amber-50 text-amber-600 border-amber-100", desc: "The next upward push fails to make a clean new high, showing buyer exhaustion. Structure begins to wobble." },
    { label: "3. Sideways Overlap", badge: "bg-rose-50 text-rose-600 border-rose-100", desc: "The pullback breaks below the previous low, and swings overlap. The market has left the trend state and is transitioning." }
  ];

  return (
    <InstitutionalFrame label="Transition Condition Map" id="ENV-04-TRNS">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <ChecklistRibbon />

        <div className="space-y-1">
          <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-teal-50 px-2 py-1 rounded border border-teal-100 inline-block">Transition Environment</span>
          <h3 className="text-lg font-black text-[#071B36] uppercase tracking-tight">The State Change Process</h3>
        </div>

        {/* Stepper */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {steps.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setTransitionStep(idx)}
              className={cn(
                "p-3 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between shadow-sm min-w-0 w-full",
                transitionStep === idx 
                  ? "bg-[#071B36] text-white border-transparent scale-102" 
                  : "bg-white border-slate-200 hover:bg-slate-50 text-slate-700"
              )}
            >
              <span className="text-[8px] font-black uppercase text-slate-400 break-words whitespace-normal">{s.label.split(". ")[0]}</span>
              <h4 className="text-[10px] font-black uppercase leading-tight mt-1 break-words whitespace-normal">{s.label.split(". ")[1]}</h4>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Chart Display */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-[2rem] p-6 flex items-center justify-center shadow-sm min-h-[200px] relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] bg-[length:16px_16px]" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={transitionStep}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="flex gap-4 items-end relative z-10"
              >
                {transitionStep === 0 && (
                  <>
                    <MiniCandle bullish={true} bodyHeight={30} label="HH Swing" />
                    <MiniCandle bullish={true} bodyHeight={60} label="HH Swing" />
                    <MiniCandle bullish={false} bodyHeight={25} label="HL Hold" />
                  </>
                )}
                {transitionStep === 1 && (
                  <>
                    <MiniCandle bullish={true} bodyHeight={30} label="HH Swing" />
                    <MiniCandle bullish={true} bodyHeight={60} label="HH Swing" />
                    <MiniCandle bullish={true} bodyHeight={20} label="WEAK PUSH" color="bg-[#D4AF37] border-[#AA8F24] text-white" />
                  </>
                )}
                {transitionStep === 2 && (
                  <>
                    <MiniCandle bullish={true} bodyHeight={30} label="HH Swing" />
                    <MiniCandle bullish={true} bodyHeight={60} label="HH Swing" />
                    <MiniCandle bullish={false} bodyHeight={55} label="DEEP PB" color="bg-rose-600 border-rose-700 text-white" />
                    <MiniCandle bullish={true} bodyHeight={25} label="Overlap" />
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Details */}
          <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4 font-mono">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block leading-none">Diagnostic Console</span>
              <div className="h-px bg-slate-200" />
              
              <div className="space-y-3">
                <span className={cn("text-[9px] font-black px-2 py-0.5 rounded border inline-block uppercase", steps[transitionStep].badge)}>
                  {steps[transitionStep].label.split(". ")[1]}
                </span>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  {steps[transitionStep].desc}
                </p>
              </div>
            </div>

            <div className="mt-8 bg-rose-50 border border-rose-100 rounded-xl p-3 flex items-start gap-1.5 text-[9px] font-bold text-rose-800">
              <AlertTriangle size={14} className="shrink-0 text-rose-500 mt-0.5" />
              <span>Before you force a direction, identify if the environment is in transition.</span>
            </div>
          </div>
        </div>

        <MentorInsight 
          text="Before you trust the candle's speed, identify the environment. It is a transition zone, which means the evidence is mixed and low quality." 
          analogy="Seasons. You do not wake up one day and immediately move from hot summer (trend) to cold winter (range). You pass through autumn (transition), where weather is mixed and unpredictable."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 5: Compression: When Movement Tightens
 */
export const CompressionConditionBoard = () => {
  const [squeezeActive, setSqueezeActive] = useState(false);

  return (
    <InstitutionalFrame label="Compression Condition Board" id="ENV-05-COMP">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <ChecklistRibbon />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <div className="space-y-1">
            <span className="text-[10px] font-extrabold text-[#D4AF37] uppercase tracking-widest bg-amber-50 px-2 py-1 rounded border border-amber-100 inline-block">Compression Squeeze</span>
            <h3 className="text-lg font-black text-[#071B36] uppercase tracking-tight">Volatility Contraction</h3>
          </div>
          
          <button 
            onClick={() => setSqueezeActive(!squeezeActive)} 
            className="px-5 py-2.5 bg-[#071B36] text-white text-[9px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2 shadow-sm shrink-0"
          >
            <RefreshCw size={12} className={cn("transition-transform duration-500", squeezeActive && "rotate-180")} />
            {squeezeActive ? "Reset Squeeze" : "Tighten Swings"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Chart Display */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-[2rem] p-6 flex justify-center items-center shadow-sm min-h-[220px] relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] bg-[length:16px_16px]" />
            
            <div className={cn("absolute w-full border-t border-[#D4AF37] border-dashed left-0 transition-all duration-700", squeezeActive ? "top-[80px]" : "top-[30px]")} />
            <div className={cn("absolute w-full border-b border-[#D4AF37] border-dashed left-0 transition-all duration-700", squeezeActive ? "bottom-[80px]" : "bottom-[30px]")} />

            <div className="flex gap-4 items-center relative z-10">
              <MiniCandle bullish={true} bodyHeight={50} label="Swing 1" />
              <MiniCandle bullish={false} bodyHeight={35} label="Swing 2" />
              <MiniCandle bullish={true} bodyHeight={20} label="Swing 3" />
              {squeezeActive && (
                <MiniCandle bullish={false} bodyHeight={10} label="SQUEEZE" color="bg-[#D4AF37] border-[#AA8F24] text-white" />
              )}
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4 font-mono">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block leading-none">Diagnostic Console</span>
              <div className="h-px bg-slate-200" />
              
              <div className="space-y-3">
                <span className={cn("text-[9px] font-black px-2 py-0.5 rounded border inline-block uppercase", squeezeActive ? "text-amber-600 bg-amber-50 border-amber-100" : "text-slate-500 bg-slate-50 border-slate-200")}>
                  {squeezeActive ? "VOLATILITY CONTRACTED" : "ACCUMULATION PHASE"}
                </span>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  Before you trust the direction of a tightening candle, identify the environment. Squeezes build energy, but direction remains unproven until verified.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start gap-1.5 text-[9px] font-bold text-amber-800">
              <Info size={14} className="shrink-0 text-amber-600 mt-0.5" />
              <span>Squeeze limits swing space. Breakout is pending.</span>
            </div>
          </div>
        </div>

        <MentorInsight 
          text="Before you trust the direction of a tightening candle, identify the environment. It is compression, which means energy is building but direction is unproven." 
          analogy="A coiled spring. You compress a metal spring with your fingers (accumulation). You know it holds massive energy and will expand rapidly once released, but until you let go, you cannot predict which side will slip first."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 6: Expansion: When Movement Leaves the Tight Area
 */
export const ExpansionConditionBoard = () => {
  const [expansionMode, setExpansionMode] = useState("fake");

  return (
    <InstitutionalFrame label="Expansion Condition Board" id="ENV-06-EXPN">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <ChecklistRibbon />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <div className="space-y-1">
            <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-teal-50 px-2 py-1 rounded border border-teal-100 inline-block">Expansion Environment</span>
            <h3 className="text-lg font-black text-[#071B36] uppercase tracking-tight">The Breakout Release</h3>
          </div>
          
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200 shrink-0">
            <button 
              onClick={() => setExpansionMode("fake")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", expansionMode === "fake" ? "bg-rose-600 text-white shadow-sm" : "text-slate-600 hover:text-[#071B36]")}
            >
              Fake Breakout
            </button>
            <button 
              onClick={() => setExpansionMode("verified")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", expansionMode === "verified" ? "bg-teal-600 text-white shadow-sm" : "text-slate-600 hover:text-[#071B36]")}
            >
              Verified Hold
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Chart Display */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-center items-center shadow-sm min-h-[220px] relative overflow-hidden">
            <div className="absolute top-[80px] left-0 w-full border-t border-slate-200 border-dashed" />
            <div className="absolute bottom-[80px] left-0 w-full border-b border-slate-200 border-dashed" />

            <div className="flex gap-4 items-end relative z-10">
              <MiniCandle bullish={true} bodyHeight={20} label="Squeeze" />
              {expansionMode === "fake" ? (
                <>
                  <MiniCandle bullish={true} bodyHeight={65} wickTop={5} wickBottom={5} label="BREAKOUT" />
                  <MiniCandle bullish={false} bodyHeight={50} wickTop={5} wickBottom={5} label="REJECTED" color="bg-rose-600 border-rose-700 text-white" />
                </>
              ) : (
                <>
                  <MiniCandle bullish={true} bodyHeight={65} wickTop={5} wickBottom={5} label="BREAKOUT" />
                  <MiniCandle bullish={true} bodyHeight={20} wickTop={25} wickBottom={5} label="HOLD OUTSIDE" color="bg-teal-600 border-teal-700 text-white" />
                </>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4 font-mono">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block leading-none">Diagnostic Console</span>
              <div className="h-px bg-slate-200" />
              
              <div className="space-y-3">
                <span className={cn("text-[9px] font-black px-2 py-0.5 rounded border inline-block uppercase", expansionMode === "verified" ? "text-teal-600 bg-teal-50 border-teal-100" : "text-rose-600 bg-rose-50 border-rose-100")}>
                  {expansionMode === "verified" ? "EXPANSION VERIFIED" : "SPECULATIVE TRAP"}
                </span>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  {expansionMode === "verified" 
                    ? "Before we trusted the expansion candle, we checked the next candle's follow-through. It holds outside, confirming a genuine breakout."
                    : "Chaser buys the breakout candle immediately, only for the next candle to reject and snap back inside the squeeze."
                  }
                </p>
              </div>
            </div>

            <div className="mt-8 bg-slate-100 p-3 border border-slate-200 rounded-xl text-[9px] font-bold text-slate-700">
              Rule: Wait for the hold to verify expansion.
            </div>
          </div>
        </div>

        <MentorInsight 
          text="Before you trust the expansion candle, identify the environment. Did it cleanly break, and does it hold?" 
          analogy="A runner crossing a finish line. The runner dashes past the ribbon (breakout candle). They must decelerate and remain safely on the track beyond the line (follow-through hold) before the race is won."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 7: Choppy Conditions Reduce Reading Quality
 */
export const ChoppyConditionWarning = () => {
  return (
    <InstitutionalFrame label="Choppy Condition Warning" id="ENV-07-CHOP" status="CHOP DETECTED">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <ChecklistRibbon />

        <div className="space-y-1">
          <span className="text-[10px] font-extrabold text-rose-600 uppercase tracking-widest bg-rose-50 px-2 py-1 rounded border border-rose-100 inline-block">Chop & Noise</span>
          <h3 className="text-lg font-black text-[#071B36] uppercase tracking-tight">Poor Reading Environment</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Chart Display */}
          <div className="md:col-span-7 bg-[#FFF5F5] border border-rose-200 rounded-[2rem] p-6 flex flex-col justify-center items-center shadow-sm min-h-[220px] relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] bg-[length:16px_16px]" />
            
            <div className="flex gap-2 items-center relative z-10">
              <MiniCandle bullish={true} bodyHeight={20} wickTop={30} wickBottom={30} label="Overlap" color="bg-[#FECDD3] border-rose-400 text-rose-800" />
              <MiniCandle bullish={false} bodyHeight={15} wickTop={35} wickBottom={30} label="Overlap" color="bg-[#E2E8F0] border-slate-300 text-slate-800" />
              <MiniCandle bullish={true} bodyHeight={10} wickTop={40} wickBottom={40} label="Overlap" color="bg-[#FECDD3] border-rose-400 text-rose-800" />
              <MiniCandle bullish={false} bodyHeight={25} wickTop={20} wickBottom={35} label="Overlap" color="bg-[#E2E8F0] border-slate-300 text-slate-800" />
            </div>

            <div className="absolute top-4 right-4 bg-rose-100 border border-rose-200 rounded-lg p-2 flex items-center gap-1 text-[9px] font-black text-rose-700 uppercase">
              <AlertTriangle size={12} className="text-rose-500" />
              CHOP ENVIRONMENT
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block leading-none font-mono">Chop Audit Log</span>
              <div className="h-px bg-slate-200" />
              
              <div className="space-y-2 text-xs font-bold text-slate-700 font-mono">
                <div className="flex items-center gap-2">
                  <AlertTriangle size={14} className="text-[#BE123C] shrink-0" />
                  <span>Swings overlap repeatedly</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle size={14} className="text-[#BE123C] shrink-0" />
                  <span>Dual-sided candle wicks</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle size={14} className="text-[#BE123C] shrink-0" />
                  <span>Structure levels swept constantly</span>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-[#FFE4E6] p-4 border border-[#FECDD3] rounded-xl text-[10px] font-bold text-rose-800 leading-normal flex items-start gap-2">
              <Ban size={14} className="shrink-0 mt-0.5" />
              <span>
                Before you trust any local pattern, identify the environment. It is chop, which means all local evidence is untrustworthy noise.
              </span>
            </div>
          </div>
        </div>

        <MentorInsight 
          text="Before you trust any pattern here, identify the environment. It is chop, which means all local evidence is untrustworthy noise." 
          analogy="Driving in a blizzard. When snow is blowing in all directions (market chop), you do not drive faster hoping to see the road. You pull over, wait for the storm to pass, and resume when the lane lines are visible."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 8: The Same Candle Changes Meaning by Condition
 */
export const SameCandleDifferentCondition = () => {
  const [selectedCase, setSelectedCase] = useState("trend");

  const cases = {
    trend: {
      title: "Strong Trend",
      meaning: "Aligned Continuation",
      desc: "In an active trend, this strong candle confirms structural continuation. Directional pressure is aligned.",
      badge: "bg-teal-50 text-teal-600 border-teal-100"
    },
    range: {
      title: "Range Ceiling",
      meaning: "Potential Rejection Sweep",
      desc: "At a range boundary, this candle is likely sweeping resting orders before rotating back down. Treat with caution.",
      badge: "bg-amber-50 text-amber-600 border-amber-100"
    },
    compression: {
      title: "Compression Squeeze",
      meaning: "Expansion Release Attempt",
      desc: "Inside a squeeze, this candle represents a breakout push. It must close and verify outside the boundaries.",
      badge: "bg-purple-50 text-purple-600 border-purple-100"
    },
    chop: {
      title: "Choppy Noise",
      meaning: "Random Volatility Spike",
      desc: "Inside choppy sideways overlap, this candle represents random volatility with zero structural commitment.",
      badge: "bg-rose-50 text-rose-600 border-rose-100"
    }
  };

  const current = cases[selectedCase as keyof typeof cases];

  return (
    <InstitutionalFrame label="Same Candle, Different Conditions" id="ENV-08-SAME">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <ChecklistRibbon />

        <div className="space-y-1">
          <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-teal-50 px-2 py-1 rounded border border-teal-100 inline-block">Context Audit</span>
          <h3 className="text-lg font-black text-[#071B36] uppercase tracking-tight">One Candle, Four Environments</h3>
        </div>

        {/* Tab Selectors */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
          {Object.keys(cases).map((k) => (
            <button
              key={k}
              onClick={() => setSelectedCase(k)}
              className={cn(
                "py-2 px-3 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all min-w-0 w-full break-words whitespace-normal text-center",
                selectedCase === k ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600 hover:text-[#071B36]"
              )}
            >
              {k === "trend" ? "Trend" : k === "range" ? "Range" : k === "compression" ? "Compression" : "Chop"}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Candle Graphic */}
          <div className="md:col-span-5 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-center items-center shadow-sm">
            <span className="text-[9px] font-extrabold uppercase text-[#071B36] tracking-wider mb-4">Static Green Candle</span>
            <MiniCandle bullish={true} bodyHeight={60} wickTop={5} wickBottom={5} label="SAME CANDLE" color="bg-teal-600 border-teal-700 text-white" />
          </div>

          {/* Meaning Card */}
          <div className="md:col-span-7 bg-slate-50 border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4 font-mono">
              <div className="flex items-center gap-2">
                <span className={cn("px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider border", current.badge)}>
                  {current.title} Environment
                </span>
              </div>
              
              <h4 className="text-base font-black text-[#071B36] uppercase">{current.meaning}</h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                {current.desc}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 text-[8px] font-black text-slate-400 uppercase tracking-widest block leading-none">
              Rule: The environment is the translator of candle shapes.
            </div>
          </div>
        </div>

        <MentorInsight 
          text="This is the ultimate proof that you cannot trust a candle by itself. The environment is the translator." 
          analogy="The word 'fire'. If shouted inside a crowded theater (chop/range), it represents immediate danger. If spoken beside a cozy fireplace (clean trend), it represents warmth and comfort."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 9: Condition First, Evidence Second
 */
export const ConditionFirstWorkflow = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: "1. Condition Classify", check: "Identify if market is Trend, Range, Transition, Compression, or Chop.", desc: "Zoom out first. Check the hourly or 4-hour structure. Name the room price is standing in." },
    { title: "2. Zone Identification", check: "Mark the ceiling, floor, or squeeze lines relevant to that condition.", desc: "Draw flexible zones where buyers and sellers are expected to react. Avoid rigid lines." },
    { title: "3. Evidence Audit", check: "Evaluate close quality, wicks, and body sizes inside those zones.", desc: "Zoom in locally. Verify if the local candle commits to or rejects the marked zone." },
    { title: "4. Verification Loop", check: "Look for follow-through holds to confirm the reading.", desc: "Define what must happen next to prove the move is real before drawing a final reading." }
  ];

  return (
    <InstitutionalFrame label="Reading Workflow" id="ENV-09-WORK">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <ChecklistRibbon />

        <div className="space-y-1">
          <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-teal-50 px-2 py-1 rounded border border-teal-100 inline-block">Analysis Order</span>
          <h3 className="text-lg font-black text-[#071B36] uppercase tracking-tight">Structured Chart Checklist</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Steps list */}
          <div className="md:col-span-5 flex flex-col justify-center space-y-3">
            {steps.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={cn(
                  "w-full p-4 rounded-xl border text-left transition-all duration-300 flex items-center justify-between shadow-sm min-w-0",
                  activeStep === idx 
                    ? "bg-[#071B36] text-white border-transparent scale-102" 
                    : "bg-white border-slate-200 hover:bg-slate-50 text-slate-700"
                )}
              >
                <div className="space-y-0.5 min-w-0">
                  <span className={cn("text-[8px] font-black uppercase tracking-widest block break-words whitespace-normal", activeStep === idx ? "text-teal-400" : "text-slate-400")}>
                    Step {idx + 1}
                  </span>
                  <h4 className="text-xs font-black uppercase leading-tight break-words whitespace-normal">{s.title.split(". ")[1]}</h4>
                </div>
                <ChevronRight size={14} className={cn("shrink-0", activeStep === idx ? "text-teal-400" : "text-slate-300")} />
              </button>
            ))}
          </div>

          {/* Details Console */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 text-slate-100"><ListChecks size={100} className="text-[#071B36]" /></div>
            
            <div className="space-y-5 relative z-10 font-mono">
              <div className="flex items-center gap-2 text-[9px] font-extrabold uppercase text-slate-400 tracking-wider">
                <Info size={12} className="text-teal-500" />
                Active Analysis Phase
              </div>
              <div className="h-px bg-slate-100" />
              
              <div className="space-y-3">
                <span className="text-[9px] font-black font-mono text-teal-600 bg-teal-50 px-2 py-0.5 rounded border border-teal-100 inline-block uppercase">
                  PHASE {activeStep + 1} ACTIVE
                </span>
                <h4 className="text-sm font-black text-[#071B36] uppercase">{steps[activeStep].title}</h4>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  {steps[activeStep].desc}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 space-y-1">
              <span className="text-[8px] font-black uppercase text-slate-400 tracking-widest font-mono">Verification Task</span>
              <p className="text-xs text-[#071B36] font-black leading-snug italic">{steps[activeStep].check}</p>
            </div>
          </div>
        </div>

        <MentorInsight 
          text="Never audit a candle until you have named the room it is standing in." 
          analogy="A building blueprint. You do not design the window frames (local candle shapes) before you have drawn the load-bearing columns and the overall layout of the house (market condition)."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 10: Practice Drill: What Condition Is This Market In?
 */
export const MarketConditionPracticeDrill = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const scenario = {
    prior: "Prior structure: clear upward sequence of higher highs and higher lows on the hourly chart.",
    recent: "Recent clues: the last upward push made only a weak new high, the subsequent pullback dipped below the previous swing low, and price swings are now overlapping each other sideways."
  };

  const options = [
    {
      id: "A",
      text: "Clean trend condition because price was previously moving upward.",
      isCorrect: false,
      feedback: "Incorrect. The prior trend matters, but the recent shallow high, deeper pullback, and overlapping swings indicate the clean trend condition is no longer active. You must adapt to the new clues."
    },
    {
      id: "B",
      text: "Clean range condition because price is moving sideways now.",
      isCorrect: false,
      feedback: "Incorrect. While price is moving sideways, it has not yet established clear, respected horizontal support and resistance boundaries. Classifying it as a clean range is premature."
    },
    {
      id: "C",
      text: "Transition condition because the previous trend is weakening and the current structure is mixed.",
      isCorrect: true,
      feedback: "Correct! The prior trend has broken its sequence (shallow high, deeper pullback), and a clean range has not formed yet. The market is in a transition condition, creating mixed evidence."
    },
    {
      id: "D",
      text: "Guaranteed reversal because the latest pullback was deeper.",
      isCorrect: false,
      feedback: "Incorrect. A deeper pullback shows trend weakness and shifts the condition to transition, but it does not guarantee a reversal. Avoid predictive, absolute statements."
    }
  ];

  return (
    <InstitutionalFrame label="Market Condition Practice Drill" id="ENV-10-DRILL">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <ChecklistRibbon />

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
                <h4 className="text-[10px] font-black uppercase text-[#071B36]">Prior Environment</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-bold">{scenario.prior}</p>
                
                <h4 className="text-[10px] font-black uppercase text-[#071B36] mt-4">Recent Clues</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-bold">{scenario.recent}</p>
              </div>
            </div>

            <div className="mt-8 bg-slate-50 p-4 rounded-xl text-[9px] font-mono text-slate-500">
              Audit Rule: Look for breaks in sequence.
            </div>
          </div>

          {/* Choices */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-sm font-black text-[#071B36] uppercase tracking-tight">
                What is the most disciplined condition reading?
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
                          ? "bg-teal-50 border-teal-500 ring-2 ring-teal-100 text-teal-900"
                          : "bg-rose-50 border-rose-500 ring-2 ring-rose-100 text-rose-900"
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
          text="When the sequence breaks and overlaps begin, the trend is over. You are in transition."
          analogy="A shifting gears in a car. You cannot shift from 1st gear (trend) to reverse (reversal) without passing through neutral (transition). Neutral is the buffer zone where gears overlap."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 11: Debrief: Read the Environment Before the Evidence
 */
export const MarketConditionDebrief = () => {
  return (
    <InstitutionalFrame label="Core Concept Debrief" id="ENV-11-DEBR">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <ChecklistRibbon />

        <div className="bg-[#071B36] rounded-[2rem] p-8 border border-slate-800 shadow-2xl relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 p-6 text-slate-200"><Compass size={120} className="text-teal-400" /></div>
          
          <div className="relative z-10 space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0FDFA] border border-[#CCFBF1] text-[10px] font-extrabold text-teal-400 uppercase tracking-[0.25em]">Core Track Complete</span>
            <h3 className="text-lg font-black leading-tight uppercase tracking-tight">Environmental Classifier</h3>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xl font-semibold">
              You have completed the Level 0 Module 0.7 Core Concept. You have shifted your mindset from reacting to individual price candles to classifying the broader market environment first. You now understand that trends, ranges, transitions, compressions, expansions, and chop dictate what candle evidence actually means.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <h4 className="text-xs font-black uppercase text-[#071B36] mb-2">1. State Analysis</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              Always name the environment (Trend, Range, Transition, Compression, Chop) before looking at wicks or body sizes.
            </p>
          </div>
          <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <h4 className="text-xs font-black uppercase text-[#071B36] mb-2">2. Workflow Order</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              Follow the strict checklist: Condition First, Zones Second, Local Evidence Third, Verification Fourth.
            </p>
          </div>
          <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <h4 className="text-xs font-black uppercase text-[#071B36] mb-2">3. Variable Meaning</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              The same green candle represents continuation in trends, sweeps in ranges, breakouts in compression, and noise in chop.
            </p>
          </div>
        </div>

        <MentorInsight 
          text="Before you trust the candle, identify the environment. The environment changes the reading." 
          analogy="A sailor check. You do not sail without checking the wind direction, wave height, and storm fronts (environment checks). The same sail position (the candle) behaves differently in a storm vs a calm breeze."
        />
      </div>
    </InstitutionalFrame>
  );
};
