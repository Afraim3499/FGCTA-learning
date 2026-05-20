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
  CheckCircle, 
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
  Play
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { InstitutionalFrame, MentorInsight, UI } from "./shared";

/**
 * Helper: Mini Candlestick Graphic
 */
const MiniCandle = ({ bullish = true, bodyHeight = 40, wickTop = 15, wickBottom = 15 }) => (
  <div className="flex flex-col items-center justify-center h-28 w-12 bg-[#F8FBFC] rounded-lg p-2 border border-slate-100 shadow-sm shrink-0">
    {/* Upper Wick */}
    <div className="w-0.5 bg-slate-400" style={{ height: `${wickTop}px` }} />
    {/* Body */}
    <div 
      className={cn("w-4 rounded-sm border", bullish ? "bg-teal-500 border-teal-600 shadow-sm" : "bg-rose-500 border-rose-600 shadow-sm")} 
      style={{ height: `${bodyHeight}px` }} 
    />
    {/* Lower Wick */}
    <div className="w-0.5 bg-slate-400" style={{ height: `${wickBottom}px` }} />
  </div>
);

/**
 * Card 1: Evidence Audit Is the Trader’s Reading Process
 */
export const EvidenceAuditFoundation = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "1. Raw Chart",
      subtitle: "Unprocessed Data",
      desc: "Raw candlesticks, volume spikes, and local wicks. By themselves, they are isolated records with no unified meaning.",
      color: "bg-slate-100 text-slate-600 border-slate-200"
    },
    {
      title: "2. Evidence Layers",
      subtitle: "Structured Auditing",
      desc: "Running the data through the stack: timeframe context, local swing structure, location bounds, and immediate reactions.",
      color: "bg-blue-50 text-blue-600 border-blue-100"
    },
    {
      title: "3. Reading Quality",
      subtitle: "Final Classification",
      desc: "Labeling the environment as Clear, Mixed, or Unclear. This sets expectations and controls emotional bias.",
      color: "bg-emerald-50 text-emerald-600 border-emerald-100"
    }
  ];

  return (
    <InstitutionalFrame label="Evidence Audit Foundation" id="AUD-01-FOUND">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Process Diagram (Left Rail) */}
          <div className="md:col-span-7 flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-[#F0FDF4] px-2 py-1 rounded border border-teal-200 inline-block">Methodology</span>
              <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">The Audit Pipeline</h3>
              <p className="text-xs font-medium text-slate-500 leading-relaxed">
                Click each stage to see how raw candles are transformed into disciplined classifications rather than guesses.
              </p>
            </div>

            <div className="space-y-3">
              {steps.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={cn(
                    "w-full p-4 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between shadow-sm",
                    activeStep === idx 
                      ? "bg-white border-teal-500 ring-2 ring-teal-100 scale-[1.02]" 
                      : "bg-[#F8FBFC] border-slate-200 hover:bg-white"
                  )}
                >
                  <div className="space-y-1">
                    <h4 className={cn("text-xs font-black uppercase tracking-wider", activeStep === idx ? "text-teal-600" : "text-slate-500")}>
                      {s.title}
                    </h4>
                    <span className="text-xs font-bold text-slate-800">{s.subtitle}</span>
                  </div>
                  <ChevronRight size={16} className={cn("transition-transform", activeStep === idx ? "text-teal-500 translate-x-1" : "text-slate-300")} />
                </button>
              ))}
            </div>
          </div>

          {/* Diagnostic Display (Right Rail) */}
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
                  <span className="text-[10px] font-black font-mono text-teal-600 bg-[#F0FDF4] px-2 py-0.5 rounded border border-teal-200 inline-block uppercase">
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
                By enforcing a structured check, we eliminate emotional bias and standard retail traps.
              </span>
            </div>
          </div>

        </div>

        <MentorInsight 
          text="Gut feelings fail because charts present random shapes that the human brain desperately wants to organize into predictions. We bypass this by enforcing a formal audit of evidence." 
          analogy="A building inspector checklist. You don't inspect a skyscraper by saying 'I like the color of the lobby.' You verify the foundation, the load-bearing pillars, and the fire exit logs in order."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 2: One Clue Is Not Enough
 */
export const SingleClueVsEvidenceStack = () => {
  const [toggleActive, setToggleActive] = useState(false);

  return (
    <InstitutionalFrame label="Single Clue vs. Evidence Stack" id="AUD-02-CLUE">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <div className="space-y-1">
            <span className="text-[10px] font-black text-rose-600 uppercase tracking-widest bg-[#FFF5F5] px-2 py-1 rounded border border-rose-200 inline-block">Single-Clue Trap</span>
            <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">The Danger of Isolated Signals</h3>
          </div>
          <button 
            onClick={() => setToggleActive(!toggleActive)} 
            className="px-5 py-2.5 bg-[#071B36] text-white text-[9px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2 shadow-sm shrink-0"
          >
            <RefreshCw size={12} className={cn("transition-transform duration-500", toggleActive && "rotate-180")} />
            {toggleActive ? "View Single Clue Trap" : "Build Evidence Stack"}
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
                <span className="text-[10px] font-extrabold uppercase text-rose-500 tracking-wider">Unstructured Speculation</span>
              </div>
              <h4 className="text-sm font-black text-[#071B36] uppercase">Isolated Green Candle</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                A single large green candle breaks a local high. The retail learner immediately jumps to a conclusion: "Confirmed breakout! Buy here!"
              </p>
              
              {/* Graphic container */}
              <div className="flex items-center justify-center p-4 bg-white rounded-2xl border border-rose-100">
                <MiniCandle bullish={true} bodyHeight={60} wickTop={10} wickBottom={10} />
                <div className="ml-4 space-y-1">
                  <span className="text-[10px] font-black text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-100 inline-block uppercase">Isolated Signal</span>
                  <p className="text-xs font-black text-[#071B36] uppercase tracking-tighter">"This candle is strong!"</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-[#FFF5F5] border border-rose-200 rounded-xl text-[10px] font-bold text-rose-700 leading-normal flex items-start gap-2">
              <Ban size={14} className="shrink-0 mt-0.5" />
              <span>
                No location context. No higher timeframe trend check. No volume verification. High probability of entering a trap.
              </span>
            </div>
          </div>

          {/* Right panel: Full Evidence Stack */}
          <div className={cn(
            "border rounded-[2rem] p-6 flex flex-col justify-between transition-all duration-500 shadow-sm relative overflow-hidden",
            toggleActive ? "bg-teal-50/50 border-teal-200 ring-2 ring-teal-100 scale-[1.01]" : "bg-white border-slate-200 text-slate-400 bg-[#F8FBFC]"
          )}>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                <span className="text-[10px] font-extrabold uppercase text-teal-500 tracking-wider">Structured Audit Stream</span>
              </div>
              <h4 className="text-sm font-black text-[#071B36] uppercase">Aligned Evidence Stack</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                The candle is only step one. The disciplined trader checks timeframe, structure, location, and follow-through in order.
              </p>

              {/* Checklist graphic */}
              <div className="space-y-2 bg-white p-4 rounded-2xl border border-teal-100">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle size={14} className="text-teal-500 shrink-0" />
                  <span>1. Candle: Strong close but long upper wick.</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle size={14} className="text-teal-500 shrink-0" />
                  <span>2. Timeframe: Higher-timeframe range high resistance.</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle size={14} className="text-teal-500 shrink-0" />
                  <span>3. Location: Inside a daily supply zone.</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle size={14} className="text-teal-500 shrink-0" />
                  <span>4. Reaction: Strong wicks indicating selling pressure.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-[#F0FDF4] border border-teal-200 rounded-xl text-[10px] font-bold text-teal-700 leading-normal flex items-start gap-2">
              <ListChecks size={14} className="shrink-0 mt-0.5" />
              <span>
                By checking multiple layers, we identify that the green candle is actually hitting resistance, preventing a premature entry.
              </span>
            </div>
          </div>
        </div>

        <MentorInsight 
          text="A single candle is just a word. You can't read a story by looking at a single word in isolation. Sticking to single wicks or colors is how the retail market traps liquidity." 
          analogy="A witness in court. If one witness says they saw a blue car, that's a clue. But you don't convict someone until you check the camera footage, trace the timeline, and verify the physical evidence stack."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 3: The Evidence Layer Stack
 */
export const EvidenceLayerStack = () => {
  const [activeLayer, setActiveLayer] = useState(0);

  const layers = [
    { name: "1. Candle Record", check: "Immediate open/close, wick ratios, body expansion.", impact: "Shows the immediate force, but has zero long-term meaning without location." },
    { name: "2. Timeframe Context", check: "Higher-timeframe structures (D1, H4) and trends.", impact: "Defines the dominant flow and identifies macro ranges that trap smaller trends." },
    { name: "3. Structure Condition", check: "Swing relationships (Higher Highs, Lower Lows, Ranges).", impact: "Determines whether price is trending or rotating sideways in balance." },
    { name: "4. Location", check: "Position relative to range boundaries and key supply/demand areas.", impact: "Filters out random wicks. Behavior at key boundaries is the only behavior that matters." },
    { name: "5. Reaction", check: "Immediate candle wicks or structural rejections upon hitting a zone.", impact: "Proves whether participants are actively defending the location." },
    { name: "6. Follow-Through", check: "Subsequent candles holding structure or reversing.", impact: "The final verification. Concludes whether a move has continuation or is a fakeout." }
  ];

  return (
    <InstitutionalFrame label="Evidence Layer Stack" id="AUD-03-STACK">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        <div className="space-y-2">
          <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-[#F0FDF4] px-2 py-1 rounded border border-teal-200 inline-block">Audit Checklist</span>
          <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">The Six Layers of Verification</h3>
          <p className="text-xs font-medium text-slate-500 leading-relaxed">
            Click each layer of the stack to understand what it audits and how it impacts your reading confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Staged Stack (Left) */}
          <div className="md:col-span-6 flex flex-col justify-end space-y-1 bg-slate-50 border border-slate-200 p-4 rounded-[2rem]">
            {[...layers].reverse().map((layer, index) => {
              const originalIndex = 5 - index;
              const isActive = activeLayer === originalIndex;
              return (
                <button
                  key={originalIndex}
                  onClick={() => setActiveLayer(originalIndex)}
                  className={cn(
                    "w-full py-3.5 px-4 rounded-xl border text-left text-xs font-black uppercase tracking-wider transition-all duration-300 flex items-center justify-between",
                    isActive 
                      ? "bg-[#071B36] text-white border-transparent shadow-lg -translate-y-1 scale-[1.02]" 
                      : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100"
                  )}
                >
                  <span>{layer.name}</span>
                  <ChevronRight size={14} className={isActive ? "text-teal-400" : "text-slate-300"} />
                </button>
              );
            })}
          </div>

          {/* Layer Detail Board (Right) */}
          <div className="md:col-span-6 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 text-slate-100"><Compass size={100} className="text-[#071B36]" /></div>
            
            <div className="space-y-5 relative z-10">
              <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
                <Info size={12} className="text-teal-500" />
                Selected Layer Audit
              </div>
              <div className="h-px bg-slate-100" />
              
              <div className="space-y-4">
                <span className="text-[10px] font-black font-mono text-teal-600 bg-[#F0FDF4] px-2 py-0.5 rounded border border-teal-200 inline-block uppercase">
                  LAYER {activeLayer + 1} AUDIT
                </span>
                <h4 className="text-base font-black text-[#071B36] uppercase">{layers[activeLayer].name.split(". ")[1]}</h4>
                
                <div className="space-y-1.5">
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">What it Audits</span>
                  <p className="text-xs text-slate-800 font-bold leading-normal">{layers[activeLayer].check}</p>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[9px] font-black uppercase tracking-widest text-teal-600">Reading Impact</span>
                  <p className="text-xs text-slate-500 font-bold leading-normal">{layers[activeLayer].impact}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-[#071B36] rounded-xl p-4 text-[10px] font-mono text-teal-400 leading-normal flex items-start gap-2">
              <span className="text-white">&gt;</span>
              <span>
                AUDIT_RULE: NEVER skip layer hierarchy. Always check timeframe and location before drawing conclusions on wicks.
              </span>
            </div>
          </div>

        </div>

        <MentorInsight 
          text="Skipping layers is like a builder trying to install the roof before the concrete foundation dries. A wick only matters when you know exactly what structure it is rejecting." 
          analogy="Building a house. 1. Foundation (Timeframe) -> 2. Pillars (Structure) -> 3. Walls (Location) -> 4. Roof (Candle) -> 5. Verification (Follow-Through)."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 4: Alignment: When Evidence Supports the Same Reading
 */
export const EvidenceAlignmentBoard = () => {
  const [confluenceActive, setConfluenceActive] = useState(false);

  const elements = [
    { title: "Candle Shape", description: "Closes at very high, zero upper wick.", status: "Strong bullish close", icon: <TrendingUp size={16} /> },
    { title: "Timeframe Trend", description: "Daily trend is making higher highs.", status: "Uptrend context", icon: <Layers size={16} /> },
    { title: "Local Structure", description: "H1 swings show HL and HH pattern.", status: "Bullish local structure", icon: <Activity size={16} /> },
    { title: "Key Location", description: "Price is reacting off a daily support zone.", status: "Significant boundary bounce", icon: <Compass size={16} /> }
  ];

  return (
    <InstitutionalFrame label="Evidence Alignment Board" id="AUD-04-ALIGN">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <div className="space-y-1">
            <span className="text-[10px] font-black text-teal-600 uppercase tracking-widest bg-[#F0FDF4] px-2 py-1 rounded border border-teal-200 inline-block">Confluence State</span>
            <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">Structured Confluence</h3>
          </div>
          <button 
            onClick={() => setConfluenceActive(!confluenceActive)} 
            className="px-5 py-2.5 bg-[#071B36] text-white text-[9px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2 shadow-sm shrink-0"
          >
            {confluenceActive ? "Reset Confluence Check" : "Run Alignment Check"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Four-Panel Diagnostic Grid */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {elements.map((el, idx) => (
              <div 
                key={idx}
                className={cn(
                  "p-5 rounded-2xl border transition-all duration-500 flex flex-col justify-between shadow-sm relative overflow-hidden",
                  confluenceActive 
                    ? "bg-[#F0FDF4] border-teal-200 ring-2 ring-teal-100" 
                    : "bg-white border-slate-200"
                )}
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-teal-600">
                    {el.icon}
                    <span className="text-xs font-black uppercase tracking-wider text-[#071B36]">{el.title}</span>
                  </div>
                  <p className="text-xs text-slate-500 font-semibold">{el.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[9px] font-extrabold uppercase text-slate-400">Diagnostic Status</span>
                  <span className={cn(
                    "text-[9px] font-black uppercase",
                    confluenceActive ? "text-teal-600" : "text-slate-500"
                  )}>
                    {confluenceActive ? "Aligned" : "Neutral"}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Central Confluence Meter (Right Rail) */}
          <div className="md:col-span-4 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm relative overflow-hidden text-center">
            <div className="space-y-4">
              <div className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
                Alignment Meter
              </div>
              <div className="h-px bg-slate-100" />
              
              <div className="relative flex flex-col items-center justify-center py-6">
                <div className={cn(
                  "w-24 h-24 rounded-full border-4 flex flex-col items-center justify-center transition-all duration-500 relative z-10 bg-slate-50",
                  confluenceActive ? "border-teal-500 shadow-lg shadow-teal-100 scale-105" : "border-slate-200"
                )}>
                  <Scale size={24} className={confluenceActive ? "text-teal-500 animate-bounce" : "text-slate-400"} />
                  <span className="text-[9px] font-black uppercase text-slate-500 mt-2">Confluence</span>
                </div>
              </div>

              <div className="space-y-1">
                <h4 className="text-xs font-black text-[#071B36] uppercase">Reading Quality:</h4>
                <p className={cn(
                  "text-base font-black uppercase italic tracking-tighter",
                  confluenceActive ? "text-teal-600" : "text-slate-400"
                )}>
                  {confluenceActive ? "CLEAR ALIGNMENT" : "AWAITING AUDIT"}
                </p>
              </div>
            </div>

            <div className="mt-6 bg-slate-50 border border-slate-100 p-4 rounded-xl text-[9px] font-bold text-slate-500 leading-normal">
              Remember: Alignment increases reading quality. It does not predict guaranteed direction. Risk must always be defined.
            </div>
          </div>

        </div>

        <MentorInsight 
          text="When all layers of the stack point in the same direction, you have high quality. But quality is about reading safety, not prediction certainty. The market can still invalidate an aligned reading." 
          analogy="Three clocks in a room. If all three clocks read 2:00 PM, you have aligned evidence. You can be reasonably confident in the time. If they all show different times, you have conflict."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 5: Conflict: When Evidence Disagrees
 */
export const EvidenceConflictMap = () => {
  const [activeScenario, setActiveScenario] = useState("s1");

  const scenarios = {
    s1: {
      label: "Weekly Resistance Approach",
      supporting: ["Local chart broke structure high", "Strong green candle close", "15m chart has higher lows"],
      limiting: ["Approaching weekly supply zone", "Daily timeframe is in a broad range", "Decreasing volume on local breakout"],
      quality: "MIXED READING",
      desc: "The local structure shows momentum, but the location layer (weekly resistance) actively limits confidence."
    },
    s2: {
      label: "Support Sweep With Poor Close",
      supporting: ["Bounce off Daily key support location", "Volume spike at the support level", "Local swing high broken"],
      limiting: ["The breakout candle has a huge upper wick", "Closes near the middle of the range", "Subsequent candle has no follow-through"],
      quality: "MIXED READING",
      desc: "Price reacted at the correct location, but the candle close and follow-through show significant selling pressure."
    }
  };

  const current = scenarios[activeScenario as keyof typeof scenarios];

  return (
    <InstitutionalFrame label="Evidence Conflict Map" id="AUD-05-CONFLICT">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <div className="space-y-1">
            <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest bg-[#FEF3C7] px-2 py-1 rounded border border-[#FDE68A] inline-block">Conflict Diagnostic</span>
            <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">Identifying Conflicting Clues</h3>
          </div>
          
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200 shrink-0">
            <button 
              onClick={() => setActiveScenario("s1")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", activeScenario === "s1" ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600 hover:text-[#071B36]")}
            >
              Scenario A
            </button>
            <button 
              onClick={() => setActiveScenario("s2")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", activeScenario === "s2" ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600 hover:text-[#071B36]")}
            >
              Scenario B
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Supporting Column (Left) */}
          <div className="md:col-span-4 bg-[#F0FDF4] border border-teal-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-teal-600">
                <CheckCircle size={14} />
                <span className="text-[10px] font-black uppercase tracking-wider text-[#071B36]">Supporting Clues</span>
              </div>
              <div className="h-px bg-teal-100" />
              <div className="space-y-3">
                {current.supporting.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs font-bold text-slate-700 leading-snug">
                    <span className="text-teal-500 font-black mt-0.5">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-3 border-t border-teal-100 text-[9px] font-extrabold text-teal-600 uppercase tracking-widest">
              Adding Reading Strength
            </div>
          </div>

          {/* Limiting Column (Center) */}
          <div className="md:col-span-4 bg-[#FFF5F5] border border-rose-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-rose-600">
                <AlertTriangle size={14} />
                <span className="text-[10px] font-black uppercase tracking-wider text-[#071B36]">Limiting Clues</span>
              </div>
              <div className="h-px bg-rose-100" />
              <div className="space-y-3">
                {current.limiting.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs font-bold text-slate-700 leading-snug">
                    <span className="text-rose-500 font-black mt-0.5">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-3 border-t border-rose-100 text-[9px] font-extrabold text-rose-600 uppercase tracking-widest">
              Limiting Reading Quality
            </div>
          </div>

          {/* Diagnostic Console (Right) */}
          <div className="md:col-span-4 bg-[#071B36] text-white rounded-[2rem] p-6 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 text-slate-100"><ShieldAlert size={100} className="text-teal-400" /></div>
            
            <div className="space-y-4 relative z-10">
              <div className="text-[9px] font-extrabold uppercase text-slate-400 tracking-wider">
                Conflict Audit Log
              </div>
              <div className="h-px bg-slate-800" />
              
              <div className="space-y-3">
                <span className="text-[9px] font-black font-mono text-amber-400 bg-[#FEF3C7] px-2 py-0.5 rounded border border-[#FDE68A] inline-block uppercase">
                  CONFLICT DETECTED
                </span>
                <h4 className="text-sm font-black text-white uppercase italic tracking-tight leading-tight">{current.label}</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  {current.desc}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 space-y-1.5">
              <span className="text-[8px] font-black uppercase text-slate-400 tracking-widest leading-none">Classified Reading Quality</span>
              <p className="text-lg font-black text-amber-400 italic uppercase tracking-tighter leading-none">{current.quality}</p>
            </div>
          </div>

        </div>

        <MentorInsight 
          text="Conflict is not failure. Conflict is data. The retail trader tries to hide conflict because they want an entry. The professional trader names the conflict and sits on their hands." 
          analogy="A weather report. If the sky is dark and wind is blowing, but the barometer says high pressure, you have conflicting data. You don't ignore the barometer just because you want it to rain."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 6: Clear, Mixed, and Unclear Readings
 */
export const ReadingQualityClassifier = () => {
  const [activeTab, setActiveTab] = useState("clear");

  const categories = {
    clear: {
      title: "Clear Reading Quality",
      subtitle: "Multiple Layers Align",
      badge: "border-teal-200 bg-[#F0FDF4] text-teal-700",
      desc: "All critical layers of the stack support the same interpretation. Conflict is minimal or absent. Reading quality is high.",
      rule: "Wait for verification checkpoint to execute. High structural context.",
      visual: (
        <div className="flex gap-2 items-end justify-center h-28 relative">
          <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100 -z-10" />
          <MiniCandle bullish={true} bodyHeight={35} wickTop={10} wickBottom={10} />
          <MiniCandle bullish={true} bodyHeight={50} wickTop={8} wickBottom={8} />
          <MiniCandle bullish={true} bodyHeight={60} wickTop={5} wickBottom={5} />
          <div className="absolute top-3 right-3 text-[9px] font-black text-teal-600 bg-teal-50 border border-teal-100 rounded px-1.5 py-0.5 uppercase">Uptrend Structure</div>
        </div>
      )
    },
    mixed: {
      title: "Mixed Reading Quality",
      subtitle: "Active Supporting and Limiting Clues",
      badge: "border-[#FDE68A] bg-[#FEF3C7] text-amber-700",
      desc: "You have strong reasons to see one scenario, but clear technical boundaries or wicks actively oppose or limit that scenario.",
      rule: "Lower volume, wait for further structural expansion, or step aside.",
      visual: (
        <div className="flex gap-2 items-end justify-center h-28 relative">
          <div className="absolute top-1/3 left-0 w-full h-px bg-rose-200 border-dashed border-t -z-10" />
          <MiniCandle bullish={true} bodyHeight={55} wickTop={5} wickBottom={5} />
          <MiniCandle bullish={true} bodyHeight={40} wickTop={30} wickBottom={10} />
          <MiniCandle bullish={false} bodyHeight={20} wickTop={15} wickBottom={15} />
          <div className="absolute top-3 right-3 text-[9px] font-black text-rose-600 bg-rose-50 border border-rose-100 rounded px-1.5 py-0.5 uppercase">Hitting Weekly Resistance</div>
        </div>
      )
    },
    unclear: {
      title: "Unclear Reading Quality",
      subtitle: "No Defined Structure / High Noise",
      badge: "border-slate-200 bg-slate-100 text-slate-600",
      desc: "The swings are erratic, overlapping, or poorly defined. Price is chopping between levels without respecting them.",
      rule: "Do not attempt to read. Close the terminal. Capital preservation.",
      visual: (
        <div className="flex gap-2 items-end justify-center h-28 relative">
          <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100 -z-10" />
          <MiniCandle bullish={true} bodyHeight={20} wickTop={25} wickBottom={25} />
          <MiniCandle bullish={false} bodyHeight={15} wickTop={35} wickBottom={20} />
          <MiniCandle bullish={true} bodyHeight={10} wickTop={30} wickBottom={30} />
          <div className="absolute top-3 right-3 text-[9px] font-black text-slate-500 bg-slate-50 border border-slate-100 rounded px-1.5 py-0.5 uppercase">High Noise / Chop</div>
        </div>
      )
    }
  };

  const current = categories[activeTab as keyof typeof categories];

  return (
    <InstitutionalFrame label="Reading Quality Classifier" id="AUD-06-CLASS">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        
        {/* Classification Selector */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="space-y-1">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Quality Audit</span>
            <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">Classification State</h3>
          </div>
          
          <div className="grid grid-cols-3 gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 shrink-0">
            {Object.keys(categories).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-4 py-2.5 text-[9px] font-black uppercase tracking-wider rounded-xl transition-all",
                  activeTab === tab 
                    ? "bg-[#071B36] text-white shadow-sm" 
                    : "text-slate-600 hover:text-[#071B36]"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Diagnostic Details */}
          <div className="md:col-span-7 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className={cn("px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase border tracking-wider", current.badge)}>
                  {current.title}
                </span>
              </div>
              <h4 className="text-lg font-black text-[#071B36] uppercase tracking-tight leading-tight">{current.subtitle}</h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                {current.desc}
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Rule of Engagement</span>
              <p className="text-xs text-[#071B36] font-black leading-snug">{current.rule}</p>
            </div>
          </div>

          {/* Graphic Container */}
          <div className="md:col-span-5 bg-white border border-slate-200 rounded-[2.5rem] p-8 flex items-center justify-center shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] bg-[length:16px_16px]" />
            <div className="w-full relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {current.visual}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

        <MentorInsight 
          text="Most retail losses come from trying to trade Mixed or Unclear setups because traders are bored. Professional reading is about waiting for the setups that align so clearly you don't have to debate them." 
          analogy="A pilot checking weather. Clear = Fly. Mixed = Proceed with caution, check all instruments. Unclear/Storm = Do not take off. You don't fly into a storm just because you are bored."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 7: Verification: What Must Happen Next?
 */
export const VerificationCheckpointFlow = () => {
  const [activeNode, setActiveNode] = useState(0);

  const workflow = [
    {
      label: "1. Initial Evidence",
      title: "Reviewing Local Action",
      desc: "A breakout candle closes above a local swing high. This starts the question, but does not complete the read.",
      check: "Did it close above the structural level?"
    },
    {
      label: "2. Verification Check",
      title: "Define Checkpoints",
      desc: "Before acting, define the rules. Example: We need to see subsequent candles hold the broken level on a minor pullback.",
      check: "Does price hold the level or break immediately back inside?"
    },
    {
      label: "3. Action Path",
      title: "Wait and Confirm",
      desc: "If the checkpoint holds, the reading is verified. If price drops back inside, the reading is invalidated. Step aside.",
      check: "Execute only when rules are met."
    }
  ];

  return (
    <InstitutionalFrame label="Verification Checkpoint Flow" id="AUD-07-VERIF">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        <div className="space-y-2">
          <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-[#F0FDF4] px-2 py-1 rounded border border-teal-200 inline-block">Verification Logic</span>
          <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">Setting Checkpoints</h3>
          <p className="text-xs font-medium text-slate-500 leading-relaxed">
            A trained trader never chases. Click the workflow steps below to see how verification checks replace prediction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Flow Stepper (Left) */}
          <div className="md:col-span-5 flex flex-col justify-center space-y-4">
            {workflow.map((node, index) => (
              <button
                key={index}
                onClick={() => setActiveNode(index)}
                className={cn(
                  "w-full p-4 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between shadow-sm",
                  activeNode === index 
                    ? "bg-[#071B36] text-white border-transparent scale-[1.02]" 
                    : "bg-white border-slate-200 hover:bg-slate-50 text-slate-700"
                )}
              >
                <div className="space-y-1">
                  <span className={cn("text-[9px] font-black uppercase tracking-widest", activeNode === index ? "text-teal-400" : "text-slate-400")}>
                    {node.label}
                  </span>
                  <h4 className="text-xs font-black uppercase leading-tight">{node.title}</h4>
                </div>
                <ChevronRight size={14} className={activeNode === index ? "text-teal-400" : "text-slate-300"} />
              </button>
            ))}
          </div>

          {/* Node Details Board (Right) */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-[2.5rem] p-6 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 text-slate-100"><ListChecks size={100} className="text-[#071B36]" /></div>
            
            <div className="space-y-5 relative z-10">
              <div className="flex items-center gap-2 text-[9px] font-extrabold uppercase text-slate-400 tracking-wider">
                <Info size={12} className="text-teal-500" />
                Active Node Audit
              </div>
              <div className="h-px bg-slate-100" />
              
              <div className="space-y-4">
                <span className="text-[9px] font-black font-mono text-teal-600 bg-[#F0FDF4] px-2 py-0.5 rounded border border-teal-200 inline-block uppercase">
                  NODE {activeNode + 1} ACTIVE
                </span>
                <h4 className="text-sm font-black text-[#071B36] uppercase">{workflow[activeNode].title}</h4>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  {workflow[activeNode].desc}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 space-y-1.5">
              <span className="text-[8px] font-black uppercase text-slate-400 tracking-widest">Verification Condition</span>
              <p className="text-xs text-[#071B36] font-black leading-snug italic">{workflow[activeNode].check}</p>
            </div>
          </div>

        </div>

        <MentorInsight 
          text="If you execute a trade the moment you see a breakout candle close, you are predicting. If you wait for the checkpoint pullback to hold, you are verifying. Verification keeps you alive." 
          analogy="Entering an intersection. Even if the light turns green, a disciplined driver checks if cross-traffic has actually stopped before hitting the gas. The green light is the signal; the traffic stopping is the verification."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 8: When Early Evidence Breaks Down
 */
export const ReadingFailureDiagnostic = () => {
  const [stage, setStage] = useState("before");

  return (
    <InstitutionalFrame label="Reading Failure Diagnostic" id="AUD-08-FAIL">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <div className="space-y-1">
            <span className="text-[10px] font-black text-rose-600 uppercase tracking-widest bg-[#FFF5F5] px-2 py-1 rounded border border-rose-200 inline-block">Audit Update</span>
            <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">Handling Breakdown Without Ego</h3>
          </div>
          
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200 shrink-0">
            <button 
              onClick={() => setStage("before")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", stage === "before" ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600 hover:text-[#071B36]")}
            >
              1. Initial Breakout
            </button>
            <button 
              onClick={() => setStage("after")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", stage === "after" ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600 hover:text-[#071B36]")}
            >
              2. Breakdown (Fakeout)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Visual Candlestick Representation (Left) */}
          <div className="md:col-span-6 bg-white border border-slate-200 rounded-[2.5rem] p-8 flex items-center justify-center shadow-sm relative overflow-hidden min-h-[220px]">
            <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] bg-[length:16px_16px]" />
            
            <AnimatePresence mode="wait">
              {stage === "before" ? (
                <motion.div 
                  key="before"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex gap-4 items-end justify-center relative w-full h-32"
                >
                  <div className="absolute top-1/2 left-0 w-full h-px bg-slate-200 border-dashed -z-10" />
                  <MiniCandle bullish={true} bodyHeight={35} wickTop={10} wickBottom={10} />
                  <MiniCandle bullish={true} bodyHeight={50} wickTop={5} wickBottom={5} />
                  <div className="absolute -top-2 px-2.5 py-0.5 rounded bg-teal-50 border border-teal-100 text-[9px] font-black text-teal-600 uppercase">
                    Clean Local Break
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="after"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex gap-4 items-end justify-center relative w-full h-32"
                >
                  <div className="absolute top-1/2 left-0 w-full h-px bg-slate-200 border-dashed -z-10" />
                  <MiniCandle bullish={true} bodyHeight={35} wickTop={10} wickBottom={10} />
                  <MiniCandle bullish={true} bodyHeight={50} wickTop={5} wickBottom={5} />
                  <MiniCandle bullish={false} bodyHeight={65} wickTop={10} wickBottom={10} />
                  <div className="absolute -top-2 px-2.5 py-0.5 rounded bg-rose-50 border border-rose-100 text-[9px] font-black text-rose-600 uppercase">
                    Engulfing Back Inside
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Diagnostic Console Description (Right) */}
          <div className="md:col-span-6 bg-slate-50 border border-slate-200 rounded-[2.5rem] p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="text-[9px] font-extrabold uppercase text-slate-400 tracking-wider">
                Auditor Diagnostics
              </div>
              <div className="h-px bg-slate-200" />
              
              <div className="space-y-3">
                <span className={cn(
                  "text-[9px] font-black font-mono px-2 py-0.5 rounded border inline-block uppercase",
                  stage === "before" ? "bg-[#F0FDF4] text-teal-700 border-teal-200" : "bg-[#FFF5F5] text-rose-700 border-rose-200"
                )}>
                  {stage === "before" ? "STAGE 1: CLEAR BREAK" : "STAGE 2: BREAKDOWN"}
                </span>
                <h4 className="text-sm font-black text-[#071B36] uppercase leading-tight">
                  {stage === "before" ? "Uptrend Local Expansion" : "Immediate Reversal & Trap"}
                </h4>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  {stage === "before" 
                    ? "The breakout candle closes well above local structure. We classify the reading as clear, but wait for verification." 
                    : "The next candle immediately closes deep back inside the structure. The verification failed. We update reading quality to mixed/unclear."
                  }
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-[8px] font-black uppercase text-slate-400 tracking-widest leading-none">Classified Reading</span>
              <span className={cn(
                "text-sm font-black uppercase italic leading-none",
                stage === "before" ? "text-teal-600" : "text-rose-600"
              )}>
                {stage === "before" ? "CLEAR" : "MIXED / UNCLEAR"}
              </span>
            </div>
          </div>

        </div>

        <MentorInsight 
          text="When a setup breaks down, a retail trader gets angry and stays in the trade hoping it recovers. A professional trader updates their chart reading instantly. There is no room for hope in an audit." 
          analogy="A scientist running an experiment. If you add chemical B and expect it to turn blue, but it turns yellow instead, you don't argue with the beaker. You record 'yellow' and update your thesis."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 9: The Full Core Reading Workflow
 */
export const CoreReadingWorkflowMap = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { num: "01", name: "Observe Candles", detail: "Read the immediate raw price record and check wick ratios." },
    { num: "02", name: "Timeframe check", detail: "Confirm daily/H4 trend context. Is price in a broader range?" },
    { num: "03", name: "Label Structure", detail: "Identify swing points (HH/HL/LH/LL) on the local chart." },
    { num: "04", name: "Locate boundary", description: "Audit location relative to daily range extremes and reaction areas." },
    { num: "05", name: "Inspect Reaction", description: "Look for sweeps, rejections, or volume spikes at the location." },
    { num: "06", name: "Check Follow-through", description: "Define verification checkpoint. Confirm or update reading." }
  ];

  return (
    <InstitutionalFrame label="Full Core Reading Workflow" id="AUD-09-WORK">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        <div className="space-y-2">
          <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-[#F0FDF4] px-2 py-1 rounded border border-teal-200 inline-block">Workflow Map</span>
          <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">The Modular Checklist</h3>
          <p className="text-xs font-medium text-slate-500 leading-relaxed">
            Follow this repeatable sequence on every chart before formulating any trading conclusion.
          </p>
        </div>

        {/* Workflow Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {steps.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={cn(
                "p-4 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between min-h-[110px] shadow-sm",
                activeStep === idx 
                  ? "bg-[#071B36] text-white border-transparent scale-105 shadow-md" 
                  : "bg-white border-slate-200 hover:bg-slate-50 text-slate-700"
              )}
            >
              <span className={cn("text-xs font-black font-mono", activeStep === idx ? "text-teal-400" : "text-slate-400")}>
                {s.num}
              </span>
              <h4 className="text-[10px] font-black uppercase tracking-wider leading-tight">{s.name}</h4>
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 text-slate-100"><Activity size={100} className="text-[#071B36]" /></div>
          
          <div className="space-y-3 relative z-10">
            <span className="text-[9px] font-black font-mono text-teal-600 bg-[#F0FDF4] px-2 py-0.5 rounded border border-teal-200 inline-block uppercase">
              STEP {steps[activeStep].num} DETAILS
            </span>
            <h4 className="text-sm font-black text-[#071B36] uppercase tracking-tight leading-tight">{steps[activeStep].name}</h4>
            <p className="text-xs text-slate-500 font-semibold leading-relaxed">
              {steps[activeStep].detail || steps[activeStep].description}
            </p>
          </div>
        </div>

        <MentorInsight 
          text="Consistency in results requires consistency in process. Skipping steps because you are in a rush is how you lose focus and enter poor setups." 
          analogy="A pilot's pre-flight checklist. They check the wings, the engine oil, the altimeter, and the fuel gauges in the exact same order every time. They don't skip the fuel gauge because they are 'in a hurry'."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 10: Practice Drill: Clear, Mixed, or Unclear?
 */
export const EvidenceAuditPracticeDrill = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const scenario = {
    supporting: ["Local chart broke structure high", "Momentum was bullish on lower timeframe"],
    limiting: ["Approaching major Higher-Timeframe range resistance", "The breakout candle closed near its middle (long upper wick)", "Subsequent candle shows very weak follow-through"]
  };

  const options = [
    {
      id: "A",
      text: "Confirmed bullish breakout because price crossed the local structure area.",
      isCorrect: false,
      feedback: "Incorrect. Price crossed a local level, but you cannot call a breakout 'confirmed' when a weekly range barrier blocks it, the candle close is poor, and there is no follow-through."
    },
    {
      id: "B",
      text: "Guaranteed reversal because follow-through is weak.",
      isCorrect: false,
      feedback: "Incorrect. Weak follow-through limits the breakout's strength, but it does not guarantee a reversal. Avoid absolute predictions."
    },
    {
      id: "C",
      text: "Mixed evidence because the local break is active, but the higher-timeframe range, the middle close, and weak follow-through limit clarity.",
      isCorrect: true,
      feedback: "Correct! The evidence is mixed. While the local breakout is supportive, the higher-timeframe resistance, poor candle close, and lack of follow-through are active limiting factors that prevent a clear reading."
    },
    {
      id: "D",
      text: "Unclear because candles never provide useful evidence.",
      isCorrect: false,
      feedback: "Incorrect. Candle shapes and structures do provide objective historical records, but they must be audited together rather than dismissed entirely."
    }
  ];

  return (
    <InstitutionalFrame label="Evidence Audit Practice Drill" id="AUD-10-DRILL">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        
        {/* Scenario Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Scenario Details (Left) */}
          <div className="md:col-span-5 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
                <Info size={12} className="text-teal-500" />
                Scenario Evidence Board
              </div>
              <div className="h-px bg-slate-100" />
              
              <div className="space-y-3">
                <h4 className="text-xs font-black uppercase text-[#071B36]">Supporting Clues</h4>
                {scenario.supporting.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-600 font-bold leading-snug">
                    <span className="text-teal-500 font-black">•</span>
                    <span>{item}</span>
                  </div>
                ))}
                
                <h4 className="text-xs font-black uppercase text-[#071B36] mt-4">Limiting Clues</h4>
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
                What is the disciplined evidence-audit reading?
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
                      ? "bg-[#F0FDF4] border-teal-200 text-teal-800"
                      : "bg-[#FFF5F5] border-rose-200 text-rose-800"
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

      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 11: Debrief: Read Evidence Before You Trust Direction
 */
export const EvidenceAuditDebrief = () => {
  return (
    <InstitutionalFrame label="Module Debrief: Core Synthesis" id="AUD-11-DEBRIEF">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        
        <div className="bg-[#071B36] rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 p-6 text-slate-100"><Compass size={120} className="text-teal-400" /></div>
          
          <div className="relative z-10 space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-[10px] font-extrabold text-teal-400 uppercase tracking-[0.25em]">Level 0 Complete</span>
            <h3 className="text-2xl font-black leading-tight uppercase tracking-tight">The Objective Reader</h3>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xl font-medium">
              You are no longer guessing direction based on candle color or wicks in isolation. You have learned how to analyze structure, evaluate timeframe context, locate key boundaries, and audit evidence layers. This structured process forms the foundation of all trading execution.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <h4 className="text-xs font-black uppercase text-[#071B36] mb-2">1. Audit First</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              Before formulating any expectation, list all supporting and limiting clues objectively.
            </p>
          </div>
          <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <h4 className="text-xs font-black uppercase text-[#071B36] mb-2">2. Classify Quality</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              Label the reading as Clear, Mixed, or Unclear. Accept that most market conditions are mixed or unclear.
            </p>
          </div>
          <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <h4 className="text-xs font-black uppercase text-[#071B36] mb-2">3. Define Checkpoints</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              Always define exactly what behavior must happen next to verify or invalidate your thesis.
            </p>
          </div>
        </div>

        <MentorInsight 
          text="The amateur reader tries to force the chart to tell them where price is going. The professional auditor classifies the current condition and defines what rules must be met before acting. Become an auditor." 
          analogy="A professional navigator. You don't guess if a storm is coming; you read the wind, check the barometer, check the weather radar, and write down the safety checkpoints before leaving the harbor."
        />
      </div>
    </InstitutionalFrame>
  );
};
