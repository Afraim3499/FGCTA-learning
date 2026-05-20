"use client";

import React, { useState } from "react";
import { 
  ArrowRight, 
  Layers, 
  Activity, 
  Clock, 
  Compass, 
  AlertTriangle, 
  CheckCircle, 
  Info, 
  RefreshCw, 
  ChevronRight, 
  ListChecks, 
  Ban, 
  TrendingUp, 
  Scale, 
  ShieldAlert, 
  HelpCircle,
  Play
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { InstitutionalFrame, MentorInsight } from "./shared";

/**
 * Helper: Mini Candlestick Graphic
 */
const MiniCandle = ({ bullish = true, bodyHeight = 40, wickTop = 15, wickBottom = 15, label = "" }) => (
  <div className="flex flex-col items-center justify-center h-32 w-16 bg-[#F8FBFC] rounded-lg p-2 border border-slate-100 shadow-sm shrink-0">
    {/* Upper Wick */}
    <div className="w-0.5 bg-slate-400" style={{ height: `${wickTop}px` }} />
    {/* Body */}
    <div 
      className={cn("w-5 rounded-sm border relative flex items-center justify-center", bullish ? "bg-teal-500 border-teal-600 shadow-sm" : "bg-rose-500 border-rose-600 shadow-sm")} 
      style={{ height: `${bodyHeight}px` }} 
    />
    {/* Lower Wick */}
    <div className="w-0.5 bg-slate-400" style={{ height: `${wickBottom}px` }} />
    {label && <span className="text-[8px] font-black text-slate-500 mt-1 uppercase tracking-tighter">{label}</span>}
  </div>
);

/**
 * Card 1: Forex Evidence Audit Starts With Pair Behavior
 */
export const ForexEvidenceAuditFoundation = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "1. Currency Pair",
      subtitle: "Relative Balance",
      desc: "Observe the tug-of-war between EUR and USD. Every move is relative pressure, not one asset in isolation.",
      color: "bg-slate-100 text-slate-600 border-slate-200"
    },
    {
      title: "2. Session Context",
      subtitle: "Clock & Liquidity",
      desc: "Determine which session is active. Timing provides volume weight and filters quiet Asian drifts.",
      color: "bg-blue-50 text-blue-600 border-blue-100"
    },
    {
      title: "3. Structure & Location",
      subtitle: "Swing & Key Areas",
      desc: "Label local swing points and identify nearby session range highs/lows and HTF boundaries.",
      color: "bg-[#FEF3C7] text-amber-700 border-[#FDE68A]"
    },
    {
      title: "4. USD Context & Related Pairs",
      subtitle: "Market Correlation",
      desc: "Check Dollar Index direction and related pairs (like GBP/USD) to confirm market-wide participation.",
      color: "bg-purple-50 text-purple-600 border-purple-100"
    },
    {
      title: "5. Reading Quality",
      subtitle: "Audit Classification",
      desc: "Classify the environment as Clear, Mixed, or Unclear, and define invalidation checkpoints.",
      color: "bg-emerald-50 text-emerald-600 border-emerald-100"
    }
  ];

  return (
    <InstitutionalFrame label="Forex Evidence Audit Foundation" id="FRX-01-FOUND">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Interactive Chevrons (Left Rail) */}
          <div className="md:col-span-7 flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-[#F0FDF4] px-2 py-1 rounded border border-teal-200 inline-block">Forex Roadmap</span>
              <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">The Forex Audit Pipeline</h3>
              <p className="text-xs font-medium text-slate-500 leading-relaxed">
                Click each stage of the pipeline to see how we audit currency behavior rather than guessing breakout direction.
              </p>
            </div>

            <div className="space-y-2">
              {steps.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={cn(
                    "w-full p-3.5 rounded-xl border text-left transition-all duration-300 flex items-center justify-between shadow-sm",
                    activeStep === idx 
                      ? "bg-white border-teal-500 ring-2 ring-teal-100 scale-[1.01]" 
                      : "bg-[#F8FBFC] border-slate-200 hover:bg-white"
                  )}
                >
                  <div className="space-y-0.5">
                    <h4 className={cn("text-[9px] font-black uppercase tracking-wider", activeStep === idx ? "text-teal-600" : "text-slate-500")}>
                      {s.title}
                    </h4>
                    <span className="text-xs font-bold text-slate-800">{s.subtitle}</span>
                  </div>
                  <ChevronRight size={14} className={cn("transition-transform", activeStep === idx ? "text-teal-500 translate-x-1" : "text-slate-300")} />
                </button>
              ))}
            </div>
          </div>

          {/* Console Log Display (Right Rail) */}
          <div className="md:col-span-5 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 text-slate-100"><Layers size={100} className="text-[#071B36]" /></div>
            
            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
                <Info size={12} className="text-teal-500" />
                Audit Console Log
              </div>
              <div className="h-px bg-slate-100" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3"
                >
                  <span className="text-[9px] font-black font-mono text-teal-600 bg-[#F0FDF4] px-2 py-0.5 rounded border border-teal-200 inline-block uppercase">
                    Stage {activeStep + 1} ACTIVE
                  </span>
                  <h4 className="text-sm font-black text-[#071B36] uppercase">{steps[activeStep].subtitle}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                    {steps[activeStep].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 bg-slate-50 border border-slate-100 p-4 rounded-xl text-[10px] font-extrabold text-slate-500 leading-normal flex items-start gap-2">
              <AlertTriangle size={14} className="text-teal-600 shrink-0 mt-0.5" />
              <span>
                By evaluating both currencies and their session environments, we avoid entering high-risk retail traps.
              </span>
            </div>
          </div>

        </div>

        <MentorInsight 
          text="What is this pair actually showing me? Do not rush to place EUR/USD into a box. Read both sides of the balance scale, check the active session clock, and verify before you trust." 
          analogy="A professional judge. You do not hand down a verdict after hearing one side speak. You review the base evidence, the witness details, the clock timeline, and secondary records before closing the case."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 2: One Forex Candle Is Not the Whole Pair Story
 */
export const ForexSingleCandleTrap = () => {
  const [toggleActive, setToggleActive] = useState(false);

  return (
    <InstitutionalFrame label="Forex Single-Candle Trap" id="FRX-02-TRAP">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <div className="space-y-1">
            <span className="text-[10px] font-black text-rose-600 uppercase tracking-widest bg-rose-50 px-2 py-1 rounded border border-rose-100 inline-block">Single-Candle Trap</span>
            <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">The Trap of Isolated Momentum</h3>
          </div>
          <button 
            onClick={() => setToggleActive(!toggleActive)} 
            className="px-5 py-2.5 bg-[#071B36] text-white text-[9px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2 shadow-sm shrink-0"
          >
            <RefreshCw size={12} className={cn("transition-transform duration-500", toggleActive && "rotate-180")} />
            {toggleActive ? "View Single Candle" : "Apply Audit Lens"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Left panel: Single Clue Trap */}
          <div className={cn(
            "border rounded-[2rem] p-6 flex flex-col justify-between transition-all duration-500 shadow-sm relative overflow-hidden",
            !toggleActive ? "bg-[#FFF5F5] border-rose-200 ring-2 ring-rose-100" : "bg-white border-slate-200 text-slate-400 bg-[#F8FBFC]"
          )}>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span className="text-[10px] font-extrabold uppercase text-rose-500 tracking-wider">Retail Speculation</span>
              </div>
              <h4 className="text-sm font-black text-[#071B36] uppercase">Isolated Green Candle</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                EUR/USD prints a strong green candle during the London session. The beginner buys immediately, expecting massive momentum.
              </p>
              
              <div className="flex items-center justify-center p-4 bg-white rounded-2xl border border-rose-100">
                <MiniCandle bullish={true} bodyHeight={60} wickTop={5} wickBottom={5} label="London Open" />
                <div className="ml-4 space-y-1">
                  <span className="text-[9px] font-black text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-100 inline-block uppercase">Isolated Signal</span>
                  <p className="text-xs font-black text-[#071B36] uppercase tracking-tighter">"Unstoppable momentum! Buy now!"</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-[#FFF5F5] border border-rose-200 rounded-xl text-[10px] font-bold text-rose-700 leading-normal flex items-start gap-2">
              <Ban size={14} className="shrink-0 mt-0.5" />
              <span>
                Danger: No session location checked. The candle is hitting key resistance and remains inside the Asian range.
              </span>
            </div>
          </div>

          {/* Right panel: Full Evidence Stack */}
          <div className={cn(
            "border rounded-[2rem] p-6 flex flex-col justify-between transition-all duration-500 shadow-sm relative overflow-hidden",
            toggleActive ? "bg-[#F0FDF4] border-teal-200 ring-2 ring-teal-100 scale-[1.01]" : "bg-white border-slate-200 text-slate-400 bg-[#F8FBFC]"
          )}>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                <span className="text-[10px] font-extrabold uppercase text-teal-500 tracking-wider">Forex Audit Lens</span>
              </div>
              <h4 className="text-sm font-black text-[#071B36] uppercase">Aligned Evidence Stack</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                We audit: 1. Candle shape, 2. Session range boundaries, 3. Higher timeframe level, 4. USD Index, 5. Related pair confirmation.
              </p>

              <div className="space-y-2 bg-white p-4 rounded-2xl border border-teal-100">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle size={14} className="text-teal-500 shrink-0" />
                  <span>1. Candle: Strong, but prints long upper wick.</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle size={14} className="text-teal-500 shrink-0" />
                  <span>2. Session: Still inside Asian range boundaries.</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle size={14} className="text-teal-500 shrink-0" />
                  <span>3. Location: H4 range resistance ceiling.</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle size={14} className="text-teal-500 shrink-0" />
                  <span>4. Related Pair: GBP/USD is flat and rejecting.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-[#F0FDF4] border border-teal-200 rounded-xl text-[10px] font-bold text-teal-700 leading-normal flex items-start gap-2">
              <ListChecks size={14} className="shrink-0 mt-0.5" />
              <span>
                Result: Aligned resistance and lack of GBP confirmation reveals that the green candle is likely a trap.
              </span>
            </div>
          </div>
        </div>

        <MentorInsight 
          text="When you see a huge green candle, your brain says 'momentum! buy!' But in Forex, that candle could just be a sweep of previous session highs. By checking the location first, you see the ceiling before you jump." 
          analogy="A building door. If the door swings open fast, that looks like an open exit. But if you check the blueprints first, you realize the door leads directly into a locked storage closet."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 3: Session Context Shapes Forex Evidence
 */
export const ForexSessionContextEvidence = () => {
  const [activeSession, setActiveSession] = useState("asia");

  const sessions = {
    asia: {
      name: "Asian Session (Quiet Range)",
      hours: "7:00 PM - 4:00 AM EST",
      liquidity: "Low-Medium",
      weight: "Low Breakout Weight",
      desc: "Most pairs consolidate. A breakout candle printed here is often a false drift due to thin institutional participation.",
      color: "border-blue-200 bg-[#EFF6FF] text-blue-700"
    },
    london: {
      name: "London Session (Trend Maker)",
      hours: "3:00 AM - 12:00 PM EST",
      liquidity: "High",
      weight: "High Breakout Weight",
      desc: "European institutions enter. Major volume establishes daily trends, making candle closes highly significant.",
      color: "border-purple-200 bg-[#F5F3FF] text-purple-700"
    },
    overlap: {
      name: "London/NY Overlap (Peak Volume)",
      hours: "8:00 AM - 12:00 PM EST",
      liquidity: "Maximum",
      weight: "Maximum Evidence Weight",
      desc: "Both major markets are open. Price expansions and major news stabilizations during this window set the weekly story.",
      color: "border-teal-200 bg-[#F0FDF4] text-teal-700"
    },
    newyork: {
      name: "New York Session (Reversals/Data)",
      hours: "8:00 AM - 5:00 PM EST",
      liquidity: "High",
      weight: "High Reaction Weight",
      desc: "US macroeconomic reports occur. Expect major volatility spikes followed by stabilization checks at range limits.",
      color: "border-[#FDE68A] bg-[#FEF3C7] text-amber-700"
    }
  };

  const current = sessions[activeSession as keyof typeof sessions];

  return (
    <InstitutionalFrame label="Session Context Timeline" id="FRX-03-SESS">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        <div className="space-y-2">
          <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-[#F0FDF4] px-2 py-1 rounded border border-teal-200 inline-block">Session Context</span>
          <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">The Forex Session Timeline</h3>
          <p className="text-xs font-medium text-slate-500 leading-relaxed">
            Click each session window to see how regional market hours alter the weight and safety of candle evidence.
          </p>
        </div>

        {/* Timeline Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
          {Object.keys(sessions).map((key) => (
            <button
              key={key}
              onClick={() => setActiveSession(key)}
              className={cn(
                "py-2 px-3 text-[9px] font-black uppercase tracking-wider rounded-xl transition-all",
                activeSession === key 
                  ? "bg-[#071B36] text-white shadow-sm" 
                  : "text-slate-600 hover:text-[#071B36]"
              )}
            >
              {key === "overlap" ? "LDN/NY Overlap" : key}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Details (Left) */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <span className={cn("px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase border tracking-wider inline-block", current.color)}>
                  {current.name}
                </span>
              </div>
              
              <div className="space-y-1">
                <span className="text-[8px] font-black uppercase text-slate-400 tracking-wider">Trading Window</span>
                <p className="text-sm font-black text-[#071B36]">{current.hours} (Liquidity: {current.liquidity})</p>
              </div>

              <div className="space-y-1">
                <span className="text-[8px] font-black uppercase text-slate-400 tracking-wider">Description</span>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">{current.desc}</p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-1">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Evidence Rule</span>
              <p className="text-xs text-[#071B36] font-black italic">{current.weight}</p>
            </div>
          </div>

          {/* Interactive Clock Graphic (Right) */}
          <div className="md:col-span-5 bg-white border border-slate-200 rounded-[2.5rem] p-6 flex flex-col justify-between items-center text-center shadow-sm relative overflow-hidden">
            <div className="space-y-2">
              <span className="text-[9px] font-extrabold uppercase text-slate-400 tracking-wider">Clock Reference</span>
              <div className="h-px w-24 bg-slate-100 mx-auto" />
            </div>

            <div className="relative w-32 h-32 rounded-full border-4 border-slate-200 flex items-center justify-center bg-slate-50 my-6">
              <Clock size={40} className={cn("transition-all duration-500", 
                activeSession === "asia" && "text-blue-500 rotate-90",
                activeSession === "london" && "text-purple-500 rotate-180",
                activeSession === "overlap" && "text-teal-500 -rotate-90 animate-pulse",
                activeSession === "newyork" && "text-amber-500 rotate-0"
              )} />
              <div className="absolute top-1 text-[8px] font-black text-slate-400 uppercase">12 AM</div>
              <div className="absolute bottom-1 text-[8px] font-black text-slate-400 uppercase">12 PM</div>
            </div>

            <div className="text-[10px] font-bold text-slate-500 leading-normal">
              Session timing does not give instructions. It gives context on participant activity.
            </div>
          </div>

        </div>

        <MentorInsight 
          text="The market is open 24 hours, but the big money isn't active all day. If you see a move during the quiet Asian hours, it's usually just a drift. A real trend needs the heavy volume of London or New York opens to sustain it." 
          analogy="A retail shop. If someone walks in at 3:00 AM while the store is closed and leaves a note, that is low-weight activity. If a hundred customers line up at 9:00 AM Open, that is high-weight participation."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 4: Session Highs and Lows Become Evidence Areas
 */
export const ForexSessionHighLowEvidence = () => {
  const [scenario, setScenario] = useState("sweep");

  return (
    <InstitutionalFrame label="Session Extremes Test Board" id="FRX-04-TEST">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <div className="space-y-1">
            <span className="text-[10px] font-black text-teal-600 uppercase tracking-widest bg-[#F0FDF4] px-2 py-1 rounded border border-teal-200 inline-block">Evidence Areas</span>
            <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">Asia Range High/Low Tests</h3>
          </div>
          
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200 shrink-0">
            <button 
              onClick={() => setScenario("sweep")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", scenario === "sweep" ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600 hover:text-[#071B36]")}
            >
              Sweep & Return (Trap)
            </button>
            <button 
              onClick={() => setScenario("expand")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", scenario === "expand" ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600 hover:text-[#071B36]")}
            >
              Breakout Expansion
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Chart Graphic (Left) */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-[2.5rem] p-6 flex flex-col justify-between shadow-sm min-h-[260px] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] bg-[length:16px_16px]" />
            
            {/* Asia Range Boundary Marks */}
            <div className="absolute top-1/4 left-0 w-full border-t-2 border-dashed border-slate-200 flex items-center justify-between px-4 z-0">
              <span className="text-[8px] font-black text-slate-400 bg-white px-1 uppercase tracking-wider">Asia High</span>
            </div>
            <div className="absolute bottom-1/4 left-0 w-full border-t-2 border-dashed border-slate-200 flex items-center justify-between px-4 z-0">
              <span className="text-[8px] font-black text-slate-400 bg-white px-1 uppercase tracking-wider">Asia Low</span>
            </div>

            <div className="relative z-10 w-full flex items-end justify-center h-48 gap-3">
              {/* Consolidation candles */}
              <MiniCandle bullish={true} bodyHeight={20} wickTop={8} wickBottom={8} label="Asia" />
              <MiniCandle bullish={false} bodyHeight={15} wickTop={10} wickBottom={10} label="Asia" />
              
              <AnimatePresence mode="wait">
                {scenario === "sweep" ? (
                  <motion.div 
                    key="sweep"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex gap-3 items-end"
                  >
                    {/* Spike candle sweeps high and returns */}
                    <MiniCandle bullish={true} bodyHeight={25} wickTop={40} wickBottom={5} label="London Spike" />
                    <MiniCandle bullish={false} bodyHeight={45} wickTop={10} wickBottom={10} label="NY Return" />
                    <div className="absolute -top-3 right-0 bg-[#FFF5F5] border border-rose-200 rounded px-2 py-0.5 text-[8px] font-black text-rose-600 uppercase">
                      Sweep & Reject
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="expand"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex gap-3 items-end"
                  >
                    {/* Breakout candle closes above and holds */}
                    <MiniCandle bullish={true} bodyHeight={50} wickTop={5} wickBottom={5} label="London Break" />
                    <MiniCandle bullish={true} bodyHeight={30} wickTop={5} wickBottom={10} label="NY Hold" />
                    <div className="absolute -top-3 right-0 bg-[#F0FDF4] border border-teal-200 rounded px-2 py-0.5 text-[8px] font-black text-teal-600 uppercase">
                      Expansion Hold
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Diagnostic Details (Right) */}
          <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-[2.5rem] p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="text-[9px] font-extrabold uppercase text-slate-400 tracking-wider">
                Extremes Test Log
              </div>
              <div className="h-px bg-slate-200" />
              
              <div className="space-y-3">
                <span className={cn(
                  "text-[9px] font-black font-mono px-2 py-0.5 rounded border inline-block uppercase",
                  scenario === "sweep" ? "bg-[#FFF5F5] text-rose-700 border-rose-200" : "bg-[#F0FDF4] text-teal-700 border-teal-200"
                )}>
                  {scenario === "sweep" ? "SWEEP & REJECT" : "EXPANSION DETECTED"}
                </span>
                <h4 className="text-sm font-black text-[#071B36] uppercase leading-tight">
                  {scenario === "sweep" ? "Fakeout Reversal" : "Breakout Continuation"}
                </h4>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  {scenario === "sweep" 
                    ? "EUR/USD crossed the Asia high, but closed near its middle with a long upper wick. Sell side defended, confirming a mixed/unclear setup." 
                    : "EUR/USD breaks the Asia high, closes strongly outside, and NY holds above. The breakout is verified by session participation."
                  }
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-[8px] font-black uppercase text-slate-400 tracking-widest leading-none">Reading Quality</span>
              <span className={cn(
                "text-xs font-black uppercase italic leading-none",
                scenario === "sweep" ? "text-rose-600" : "text-teal-600"
              )}>
                {scenario === "sweep" ? "MIXED" : "CLEAR BULLISH"}
              </span>
            </div>
          </div>

        </div>

        <MentorInsight 
          text="Never buy the exact moment price crosses a session high. That is where liquidity is resting, and algorithms love to trigger those buy stops and reverse the market. Wait to see if price can actually hold the level." 
          analogy="A castle moat. A soldier jumping across the moat may get pushed back immediately (sweep). You only declare the wall taken when soldiers establish a stable camp on the other side (hold)."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 5: USD Context Can Change the Reading
 */
export const ForexUsdContextReading = () => {
  const [dxyState, setDxyState] = useState("aligned");

  return (
    <InstitutionalFrame label="USD Index Correlation Board" id="FRX-05-USD">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <div className="space-y-1">
            <span className="text-[10px] font-black text-teal-600 uppercase tracking-widest bg-[#F0FDF4] px-2 py-1 rounded border border-teal-200 inline-block">USD Correlation</span>
            <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">USD Master Driver Check</h3>
          </div>
          
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200 shrink-0">
            <button 
              onClick={() => setDxyState("aligned")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", dxyState === "aligned" ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600 hover:text-[#071B36]")}
            >
              USD Aligned Move
            </button>
            <button 
              onClick={() => setDxyState("conflict")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", dxyState === "conflict" ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600 hover:text-[#071B36]")}
            >
              USD Conflict Move
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Panel 1: EUR/USD */}
          <div className={cn("bg-white border rounded-2xl p-5 shadow-sm flex flex-col justify-between transition-all duration-300", dxyState === "aligned" ? "border-teal-200" : "border-slate-200")}>
            <div className="space-y-2">
              <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Pair A</span>
              <h4 className="text-sm font-black text-[#071B36]">EUR/USD</h4>
              <p className="text-xs text-slate-500 font-semibold">EUR/USD is breaking upward, printing consecutive green candles.</p>
            </div>
            <div className="flex items-center justify-center py-4">
              <MiniCandle bullish={true} bodyHeight={45} wickTop={5} wickBottom={5} label="EUR/USD" />
            </div>
          </div>

          {/* Panel 2: GBP/USD */}
          <div className={cn("bg-white border rounded-2xl p-5 shadow-sm flex flex-col justify-between transition-all duration-300", dxyState === "aligned" ? "border-teal-200" : "border-rose-100")}>
            <div className="space-y-2">
              <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Pair B (Related)</span>
              <h4 className="text-sm font-black text-[#071B36]">GBP/USD</h4>
              <p className="text-xs text-slate-500 font-semibold">
                {dxyState === "aligned" ? "GBP/USD is also breaking upward, matching EUR/USD pressure." : "GBP/USD remains flat in a narrow range. No bullish follow-through."}
              </p>
            </div>
            <div className="flex items-center justify-center py-4">
              <MiniCandle bullish={dxyState === "aligned"} bodyHeight={dxyState === "aligned" ? 40 : 15} wickTop={10} wickBottom={10} label="GBP/USD" />
            </div>
          </div>

          {/* Panel 3: DXY (USD Index) */}
          <div className={cn("text-white rounded-2xl p-5 shadow-lg flex flex-col justify-between", dxyState === "aligned" ? "bg-[#071B36]" : "bg-rose-950 border border-rose-900")}>
            <div className="space-y-2">
              <span className="text-[9px] font-extrabold text-slate-300 uppercase tracking-wider">Global Driver</span>
              <h4 className="text-sm font-black">USD INDEX (DXY)</h4>
              <p className="text-xs text-slate-300 font-semibold">
                {dxyState === "aligned" ? "DXY breaks down. Market-wide Dollar weakness confirms the move." : "DXY is neutral/flat. The EUR/USD move is isolated and unconfirmed."}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center py-4 space-y-2">
              <div className="flex items-center gap-1">
                {dxyState === "aligned" ? (
                  <CheckCircle size={16} className="text-teal-400" />
                ) : (
                  <AlertTriangle size={16} className="text-rose-400" />
                )}
                <span className="text-[10px] font-mono font-black uppercase text-teal-400">
                  {dxyState === "aligned" ? "Aligned" : "Conflict"}
                </span>
              </div>
              <span className="text-[9px] font-extrabold text-slate-400">READ: {dxyState === "aligned" ? "CLEAR" : "MIXED"}</span>
            </div>
          </div>

        </div>

        <MentorInsight 
          text="If you are trading a USD pair, you are trading the US Dollar. If the Dollar Index is sitting at a key daily support, it doesn't matter how pretty the local EUR/USD candle looks—the Dollar is likely to bounce, and your breakout will fail." 
          analogy="The ocean current. A small sailboat can try to sail north, but if the massive ocean current is pushing hard to the south, the boat isn't going to make any real progress."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 6: Related Pairs Help Confirm or Challenge Evidence
 */
export const ForexRelatedPairEvidence = () => {
  const [activeMode, setActiveMode] = useState("align");

  const data = {
    align: {
      status: "ALIGNED",
      eurusd: "Breaking high cleanly, strong close.",
      gbpusd: "Breaking high in sync, volume supports.",
      dxy: "DXY breaking support level.",
      quality: "CLEAR BULLISH READING",
      desc: "Both pairs agree that the US Dollar is weakening globally. The evidence is aligned."
    },
    conflict: {
      status: "CONFLICT",
      eurusd: "Breaking high, long upper wick.",
      gbpusd: "Flat inside Asian consolidation.",
      dxy: "DXY trading sideways.",
      quality: "MIXED READING",
      desc: "EUR/USD is moving alone, likely due to a localized Euro event. GBP/USD and DXY do not confirm."
    }
  };

  const current = data[activeMode as keyof typeof data];

  return (
    <InstitutionalFrame label="Related-Pair Correlation Board" id="FRX-06-RELP">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <div className="space-y-1">
            <span className="text-[10px] font-black text-teal-600 uppercase tracking-widest bg-[#F0FDF4] px-2 py-1 rounded border border-teal-200 inline-block">Correlation Audit</span>
            <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">Sibling Confirmation</h3>
          </div>
          
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200 shrink-0">
            <button 
              onClick={() => setActiveMode("align")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", activeMode === "align" ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600 hover:text-[#071B36]")}
            >
              Show Alignment
            </button>
            <button 
              onClick={() => setActiveMode("conflict")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", activeMode === "conflict" ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600 hover:text-[#071B36]")}
            >
              Show Conflict
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Panels (Left) */}
          <div className="md:col-span-8 space-y-3">
            <div className="p-4 bg-white border border-slate-200 rounded-xl flex items-center justify-between shadow-sm">
              <div className="space-y-1">
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider">EUR/USD Behavior</span>
                <p className="text-xs text-slate-700 font-bold">{current.eurusd}</p>
              </div>
              <span className={cn("text-[9px] font-black px-2 py-0.5 rounded border uppercase", activeMode === "align" ? "bg-[#F0FDF4] text-teal-700 border-teal-200" : "bg-[#FEF3C7] text-amber-700 border-[#FDE68A]")}>{current.status}</span>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-xl flex items-center justify-between shadow-sm">
              <div className="space-y-1">
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider">GBP/USD Behavior</span>
                <p className="text-xs text-slate-700 font-bold">{current.gbpusd}</p>
              </div>
              <span className={cn("text-[9px] font-black px-2 py-0.5 rounded border uppercase", activeMode === "align" ? "bg-[#F0FDF4] text-teal-700 border-teal-200" : "bg-[#FFF5F5] text-rose-700 border-rose-200")}>{activeMode === "align" ? "Aligned" : "No Confirm"}</span>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-xl flex items-center justify-between shadow-sm">
              <div className="space-y-1">
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider">Global USD Index (DXY)</span>
                <p className="text-xs text-slate-700 font-bold">{current.dxy}</p>
              </div>
              <span className={cn("text-[9px] font-black px-2 py-0.5 rounded border uppercase", activeMode === "align" ? "bg-[#F0FDF4] text-teal-700 border-teal-200" : "bg-slate-50 text-slate-500 border-slate-100")}>{activeMode === "align" ? "Aligned" : "Neutral"}</span>
            </div>
          </div>

          {/* Diagnostic Console (Right) */}
          <div className="md:col-span-4 bg-[#071B36] text-white rounded-[2.5rem] p-6 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 text-slate-100"><ShieldAlert size={100} className="text-teal-400" /></div>
            
            <div className="space-y-4 relative z-10">
              <div className="text-[9px] font-extrabold uppercase text-slate-400 tracking-wider">
                Correlation Log
              </div>
              <div className="h-px bg-slate-800" />
              
              <div className="space-y-3">
                <span className={cn(
                  "text-[9px] font-black font-mono px-2 py-0.5 rounded border inline-block uppercase",
                  activeMode === "align" ? "bg-[#0F2D54] border border-[#133F73] text-teal-400" : "bg-[#451A03] border border-[#78350F] text-amber-400"
                )}>
                  {activeMode === "align" ? "CONFIRMED ALIGNMENT" : "WARNING: DIVERGENCE"}
                </span>
                <p className="text-xs text-slate-300 leading-relaxed font-semibold">
                  {current.desc}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 space-y-1.5">
              <span className="text-[8px] font-black uppercase text-slate-400 tracking-widest leading-none">Classified Reading</span>
              <p className={cn(
                "text-base font-black italic uppercase tracking-tighter leading-none",
                activeMode === "align" ? "text-teal-400" : "text-amber-400"
              )}>
                {current.quality}
              </p>
            </div>
          </div>

        </div>

        <MentorInsight 
          text="Related pairs help you avoid tunnel vision. EUR/USD and GBP/USD share geographical ties and both face the USD index. When they move in harmony, it proves structural weight." 
          analogy="Two headlights on a car. If only the left headlight turns on, the driver's visibility is partial and dangerous. You only drive confidently when both lights illuminate the path together."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 7: Macro Events Can Distort Forex Evidence
 */
export const ForexEventDistortionAudit = () => {
  const [eventStep, setEventStep] = useState(0);

  const steps = [
    { label: "1. Pre-News Range", desc: "Price consolidates in a quiet range waiting for the report. Bid/ask spreads widen as algorithms back off.", status: "Consolidation" },
    { label: "2. The Event Spike", desc: "CPI/NFP data releases. A massive 80-pip candle spikes above the range. Beginner buys, expecting a trend breakout.", status: "Extreme Volatility" },
    { label: "3. Stabilization Check", desc: "The session ends. Price drops back inside the range, closing with a giant upper wick. The breakout is rejected.", status: "Audit Complete: Trap" }
  ];

  return (
    <InstitutionalFrame label="Event Distortion Diagnostic" id="FRX-07-NEWS">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        <div className="space-y-2">
          <span className="text-[10px] font-extrabold text-rose-600 uppercase tracking-widest bg-rose-50 px-2 py-1 rounded border border-rose-100 inline-block">Event Distortion</span>
          <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">CPI / NFP News Audit</h3>
          <p className="text-xs font-medium text-slate-500 leading-relaxed">
            Click the timeline steps to see how a high-speed news release distorts price before stabilizing.
          </p>
        </div>

        {/* Stepper Buttons */}
        <div className="grid grid-cols-3 gap-2">
          {steps.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setEventStep(idx)}
              className={cn(
                "p-3 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between shadow-sm",
                eventStep === idx 
                  ? "bg-[#071B36] text-white border-transparent scale-102" 
                  : "bg-white border-slate-200 hover:bg-slate-50 text-slate-700"
              )}
            >
              <span className="text-[8px] font-black uppercase text-slate-400">{s.label.split(". ")[0]}</span>
              <h4 className="text-[10px] font-black uppercase leading-tight mt-1">{s.label.split(". ")[1]}</h4>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Visual Display (Left) */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-[2.5rem] p-6 flex items-center justify-center shadow-sm min-h-[200px] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] bg-[length:16px_16px]" />
            <div className="absolute top-1/2 left-0 w-full border-t border-slate-200 border-dashed" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={eventStep}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="flex gap-4 items-end relative z-10"
              >
                {eventStep === 0 && (
                  <>
                    <MiniCandle bullish={true} bodyHeight={20} label="Pre-CPI" />
                    <MiniCandle bullish={false} bodyHeight={15} label="Pre-CPI" />
                  </>
                )}
                {eventStep === 1 && (
                  <>
                    <MiniCandle bullish={true} bodyHeight={20} label="Pre-CPI" />
                    <MiniCandle bullish={true} bodyHeight={75} wickTop={10} wickBottom={10} label="SPIKE" />
                  </>
                )}
                {eventStep === 2 && (
                  <>
                    <MiniCandle bullish={true} bodyHeight={20} label="Pre-CPI" />
                    <MiniCandle bullish={true} bodyHeight={15} wickTop={70} wickBottom={10} label="Close" />
                    <MiniCandle bullish={false} bodyHeight={40} label="NY Close" />
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Details (Right) */}
          <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-[2.5rem] p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="text-[9px] font-extrabold uppercase text-slate-400 tracking-wider">
                Auditor Console Logs
              </div>
              <div className="h-px bg-slate-200" />
              
              <div className="space-y-3">
                <span className="text-[9px] font-black font-mono text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-100 inline-block uppercase">
                  STATUS: {steps[eventStep].status}
                </span>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  {steps[eventStep].desc}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-[8px] font-black uppercase text-slate-400 tracking-widest">
              <span>Wait for stabilization check</span>
              <span className="text-teal-600">Rule 7 Active</span>
            </div>
          </div>

        </div>

        <MentorInsight 
          text="News releases are like a sudden storm. You don't try to navigate the boat in the middle of a hurricane; you wait for the wind to stop so you can see where the channel actually is." 
          analogy="A dust storm. If you are driving and a dust storm hits, you pull over to the side of the road. You do not step on the gas and try to guess where the exit lane is."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 8: Aligned Forex Evidence vs Mixed Forex Evidence
 */
export const ForexAlignedVsMixedEvidence = () => {
  const [activeTab, setActiveTab] = useState("clear");

  const conditions = {
    clear: {
      title: "Clear Aligned Reading",
      badge: "bg-[#F0FDF4] text-teal-700 border-teal-200",
      desc: "All critical layers support the same interpretation. EUR/USD breaks a session range, closes outside, holds on pullback, USD index supports, and related pairs agree.",
      items: [
        "EUR/USD breaks London Session high",
        "Breakout candle closes near its high (no long wick)",
        "GBP/USD is also breaking out",
        "USD Index (DXY) is breaking support levels",
        "Pullback holds broken session high"
      ]
    },
    mixed: {
      title: "Mixed Reading (Conflict)",
      badge: "bg-[#FEF3C7] text-amber-700 border-[#FDE68A]",
      desc: "EUR/USD breaks high but closing candle leaves a long upper wick. GBP/USD remains flat in consolidation, and the USD index is trading sideways.",
      items: [
        "EUR/USD breaks London Session high",
        "Candle closes in the middle (long upper wick)",
        "GBP/USD remains flat in range",
        "USD Index (DXY) is neutral/unchanged",
        "Price returns back inside the breakout zone"
      ]
    }
  };

  const current = conditions[activeTab as keyof typeof conditions];

  return (
    <InstitutionalFrame label="Evidence Classification Board" id="FRX-08-ALGN">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="space-y-1">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Quality Audit</span>
            <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">Classification State</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200 shrink-0">
            <button
              onClick={() => setActiveTab("clear")}
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", activeTab === "clear" ? "bg-[#071B36] text-white" : "text-slate-600 hover:text-[#071B36]")}
            >
              Clear Aligned
            </button>
            <button
              onClick={() => setActiveTab("mixed")}
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", activeTab === "mixed" ? "bg-[#071B36] text-white" : "text-slate-600 hover:text-[#071B36]")}
            >
              Mixed Conflict
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Details (Left) */}
          <div className="md:col-span-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div>
                <span className={cn("px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase border tracking-wider inline-block", current.badge)}>
                  {current.title}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                {current.desc}
              </p>
            </div>
            <div className="bg-slate-100 p-4 border border-slate-200 rounded-xl text-[10px] font-bold text-slate-600">
              Rule: {activeTab === "clear" ? "Wait for verification checkpoint to confirm setup." : "Reduce size, wait for better session expansion, or stay flat."}
            </div>
          </div>

          {/* Checklist (Right) */}
          <div className="md:col-span-6 bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm flex flex-col justify-center space-y-3">
            <span className="text-[8px] font-black uppercase text-slate-400 tracking-wider">Audit Checklist</span>
            {current.items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs font-bold text-slate-700">
                {activeTab === "clear" ? (
                  <CheckCircle size={14} className="text-teal-500 shrink-0" />
                ) : (
                  <AlertTriangle size={14} className="text-amber-500 shrink-0" />
                )}
                <span>{item}</span>
              </div>
            ))}
          </div>

        </div>

        <MentorInsight 
          text="If your evidence audit requires you to argue with yourself or ignore three warning signs to make a trade look good, it's a Mixed setup. Clear setups don't require you to make excuses." 
          analogy="Weather forecast. Clear = Sunny skies, low winds, high pressure. Mixed = Sunny skies but dark storm clouds on the horizon and dropping pressure. You only fly the plane when skies are clear."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 9: Forex Verification: What Must Happen Next?
 */
export const ForexVerificationWorkflow = () => {
  const [activeNode, setActiveNode] = useState(0);

  const workflow = [
    { label: "1. Initial Forex Evidence", check: "A breakout candle closes above the Asian session high.", desc: "EUR/USD spikes above the Asia high during early London Open. The candle closes outside. This starts the audit." },
    { label: "2. Verification Question", check: "Does price hold the level and does DXY support?", desc: "Define verification checkpoint: 'Does price hold above the broken session high, and does USD Index remain weak?'" },
    { label: "3. Action Path", check: "Hold outside = Clear read. Return inside = Mixed/unclear.", desc: "If the checkpoint holds, the breakout is confirmed. If price returns inside the range, the breakout has failed." }
  ];

  return (
    <InstitutionalFrame label="Forex Verification Flow" id="FRX-09-WORK">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        <div className="space-y-2">
          <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-[#F0FDF4] px-2 py-1 rounded border border-teal-200 inline-block">Verification Logic</span>
          <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">Setting Checkpoints</h3>
          <p className="text-xs font-medium text-slate-500 leading-relaxed">
            Click each workflow node to understand how verification checks replace guesses on breakouts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Nodes (Left) */}
          <div className="md:col-span-5 flex flex-col justify-center space-y-3">
            {workflow.map((node, index) => (
              <button
                key={index}
                onClick={() => setActiveNode(index)}
                className={cn(
                  "w-full p-4 rounded-xl border text-left transition-all duration-300 flex items-center justify-between shadow-sm",
                  activeNode === index 
                    ? "bg-[#071B36] text-white border-transparent scale-[1.02]" 
                    : "bg-white border-slate-200 hover:bg-slate-50 text-slate-700"
                )}
              >
                <div className="space-y-0.5">
                  <span className={cn("text-[8px] font-black uppercase tracking-widest", activeNode === index ? "text-teal-400" : "text-slate-400")}>
                    {node.label.split(". ")[0]}
                  </span>
                  <h4 className="text-xs font-black uppercase leading-tight">{node.label.split(". ")[1]}</h4>
                </div>
                <ChevronRight size={14} className={activeNode === index ? "text-teal-400" : "text-slate-300"} />
              </button>
            ))}
          </div>

          {/* Details (Right) */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-[2.5rem] p-6 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 text-slate-100"><ListChecks size={100} className="text-[#071B36]" /></div>
            
            <div className="space-y-5 relative z-10">
              <div className="flex items-center gap-2 text-[9px] font-extrabold uppercase text-slate-400 tracking-wider">
                <Info size={12} className="text-teal-500" />
                Active Node Audit
              </div>
              <div className="h-px bg-slate-100" />
              
              <div className="space-y-3">
                <span className="text-[9px] font-black font-mono text-teal-600 bg-[#F0FDF4] px-2 py-0.5 rounded border border-teal-200 inline-block uppercase">
                  NODE {activeNode + 1} ACTIVE
                </span>
                <h4 className="text-sm font-black text-[#071B36] uppercase">{workflow[activeNode].label.split(". ")[1]}</h4>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  {workflow[activeNode].desc}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 space-y-1.5">
              <span className="text-[8px] font-black uppercase text-slate-400 tracking-widest">Verification Target</span>
              <p className="text-xs text-[#071B36] font-black leading-snug italic">{workflow[activeNode].check}</p>
            </div>
          </div>

        </div>

        <MentorInsight 
          text="Verification is your insurance policy. It's the difference between guessing a door is unlocked and actually turning the handle. Let the market prove it's ready first." 
          analogy="Entering an intersection. Even if the light turns green, a disciplined driver checks if cross-traffic has actually stopped before hitting the gas. The green light is the signal; the traffic stopping is the verification."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 10: Practice Drill: Is This Forex Reading Clear, Mixed, or Unclear?
 */
export const ForexEvidenceAuditPracticeDrill = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const scenario = {
    supporting: [
      "EUR/USD breaks above the Asian session range high during early London Open.",
      "The breakout candle successfully closes outside the Asian boundary."
    ],
    limiting: [
      "The breakout candle closes near the middle of its range, leaving a long upper wick.",
      "GBP/USD (related pair) is not confirming strongly and remains in its range.",
      "USD Index context is only slightly weak (mostly flat/neutral).",
      "The next candle immediately hesitates right at the breakout area."
    ]
  };

  const options = [
    {
      id: "A",
      text: "Clear bullish reading because EUR/USD broke above the Asia high.",
      isCorrect: false,
      feedback: "Incorrect. A break above the Asian range high is a supportive clue, but you cannot classify this as clear when you have a poor candle close (middle close, upper wick), no related-pair confirmation, and a flat USD index."
    },
    {
      id: "B",
      text: "Mixed evidence because the break happened, but close quality, related-pair confirmation, and follow-through are not strong yet.",
      isCorrect: true,
      feedback: "Correct! The evidence is mixed. While the local breakout is active, the weak candle close, the lack of confirmation from GBP/USD, and the flat USD context are significant limiting factors that prevent a clear reading."
    },
    {
      id: "C",
      text: "Guaranteed reversal because the next candle hesitated.",
      isCorrect: false,
      feedback: "Incorrect. Hesitation near a breakout area is a limiting clue, but it does not guarantee a reversal. Avoid predictive, absolute statements."
    },
    {
      id: "D",
      text: "Unclear because Forex pairs cannot be read.",
      isCorrect: false,
      feedback: "Incorrect. Forex pairs can be read systematically, but we must audit the session context, USD pressure, and related pairs together rather than dismissing them."
    }
  ];

  return (
    <InstitutionalFrame label="Evidence Audit Practice Drill" id="FRX-10-DRILL">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Scenario Board (Left) */}
          <div className="md:col-span-5 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[9px] font-extrabold uppercase text-slate-400 tracking-wider">
                <Info size={12} className="text-teal-500" />
                Scenario Evidence Board
              </div>
              <div className="h-px bg-slate-100" />
              
              <div className="space-y-3">
                <h4 className="text-[10px] font-black uppercase text-[#071B36]">Supporting Clues</h4>
                {scenario.supporting.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-600 font-bold leading-snug">
                    <span className="text-teal-500 font-black">•</span>
                    <span>{item}</span>
                  </div>
                ))}
                
                <h4 className="text-[10px] font-black uppercase text-[#071B36] mt-4">Limiting Clues</h4>
                {scenario.limiting.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-600 font-bold leading-snug">
                    <span className="text-rose-500 font-black">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-slate-50 p-4 rounded-xl text-[9px] font-mono text-slate-500">
              Audit Rule: Balance the clues objectively.
            </div>
          </div>

          {/* Question/Choices (Right) */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-sm font-black text-[#071B36] uppercase tracking-tight">
                What is the disciplined Forex evidence-audit reading?
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

            {/* Interactive Feedback */}
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
                  <div className="flex items-center gap-1.5 mb-1.5">
                    {options.find(o => o.id === selectedOption)?.isCorrect ? (
                      <CheckCircle size={14} className="text-teal-600" />
                    ) : (
                      <AlertTriangle size={14} className="text-rose-600" />
                    )}
                    <span className="font-black uppercase tracking-widest text-[9px]">
                      {options.find(o => o.id === selectedOption)?.isCorrect ? "Correct Audit" : "Audit Discrepancy"}
                    </span>
                  </div>
                  {options.find(o => o.id === selectedOption)?.feedback}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        <MentorInsight 
          text="Always ask what the limiting clues are. The breakout candle had a middle close and GBP/USD didn't follow. In Forex, that is a classic mixed read. Wait for better alignment."
          analogy="A security check. If a visitor has an ID (support), but their face doesn't match the photo and their authorization is expired (limiting), you do not let them in. You flag it as mixed."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 11: Debrief: Forex Reading Is Pair Evidence Under Context
 */
export const ForexEvidenceAuditDebrief = () => {
  return (
    <InstitutionalFrame label="Forex Roadway Debrief: Level 0 Summary" id="FRX-11-DEBR">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        
        <div className="bg-[#071B36] rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 p-6 text-slate-100"><Compass size={120} className="text-teal-400" /></div>
          
          <div className="relative z-10 space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F2D54] border border-[#133F73] text-[10px] font-extrabold text-teal-400 uppercase tracking-[0.25em]">Forex Track Complete</span>
            <h3 className="text-2xl font-black leading-tight uppercase tracking-tight">The Forex Auditor</h3>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xl font-medium">
              You have completed the Level 0 Forex Roadway. You have shifted your mindset from a retail trader chasing signals to a disciplined analyst auditing pair behavior. You now know that a Forex chart is a relationship of two currencies, shaped by session clocks, USD strength, related pair confirmation, and verification checkpoints.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <h4 className="text-xs font-black uppercase text-[#071B36] mb-2">1. Relationship Audit</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              Read both currencies. If EUR/USD moves, verify whether Euro strength or Dollar weakness is active.
            </p>
          </div>
          <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <h4 className="text-xs font-black uppercase text-[#071B36] mb-2">2. Session Timing</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              Always factor the clock. A quiet Asian breakout does not carry the same weight as a London Open expansion.
            </p>
          </div>
          <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <h4 className="text-xs font-black uppercase text-[#071B36] mb-2">3. Correlation Check</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              Cross-reference related sibling pairs and the Dollar Index to confirm market-wide participation.
            </p>
          </div>
        </div>

        <MentorInsight 
          text="Reading a chart is like translating a language. You don't translate a sentence by looking at one letter. You read the words (candles), the syntax (structure), and the context (sessions/USD) to get the true meaning." 
          analogy="A professional navigator. You don't guess if a storm is coming; you read the wind, check the barometer, check the weather radar, and write down the safety checkpoints before leaving the harbor."
        />
      </div>
    </InstitutionalFrame>
  );
};
