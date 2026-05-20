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
  <div className="flex flex-col items-center justify-center h-32 w-16 bg-[#F8FBFC] rounded-lg p-2 border border-slate-105 shadow-sm shrink-0">
    {/* Upper Wick */}
    <div className="w-0.5 bg-slate-400" style={{ height: `${wickTop}px` }} />
    {/* Body */}
    <div 
      className={cn("w-5 rounded-sm border relative flex items-center justify-center", bullish ? "bg-[#D4AF37] border-[#AA8F24] shadow-sm" : "bg-[#AA8F24] border-[#8C761D] shadow-sm")} 
      style={{ height: `${bodyHeight}px` }} 
    />
    {/* Lower Wick */}
    <div className="w-0.5 bg-slate-400" style={{ height: `${wickBottom}px` }} />
    {label && <span className="text-[8px] font-black text-slate-500 mt-1 uppercase tracking-tighter">{label}</span>}
  </div>
);

/**
 * Card 1: Gold Evidence Audit Starts With Volatility Discipline
 */
export const GoldEvidenceAuditFoundation = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "1. XAU/USD Move",
      subtitle: "Price Impulse",
      desc: "Observe the initial gold impulse. Notice the size and speed of the candle without reacting immediately.",
      color: "bg-slate-105 text-slate-600 border-slate-200"
    },
    {
      title: "2. Volatility Context",
      subtitle: "Relative Speed",
      desc: "Check if the volatility is typical for the session clock (London/NY overlap vs quiet Asia session).",
      color: "bg-blue-50 text-blue-600 border-blue-100"
    },
    {
      title: "3. Reaction Zone",
      subtitle: "Structural Location",
      desc: "Identify whether price is reacting within a broad historical zone or simply sweeping an isolated price level.",
      color: "bg-amber-50 text-amber-600 border-amber-100"
    },
    {
      title: "4. Close Quality",
      subtitle: "Candle Commitment",
      desc: "Wait for the candle to close. Check if the body holds near its high/low or rejects back inside the zone.",
      color: "bg-purple-50 text-purple-600 border-purple-100"
    },
    {
      title: "5. Follow-Through",
      subtitle: "Verification Hold",
      desc: "Observe if subsequent candles verify the move by holding the zone or immediately reversing it.",
      color: "bg-emerald-50 text-emerald-600 border-emerald-100"
    }
  ];

  return (
    <InstitutionalFrame label="Gold Evidence Audit Foundation" id="GLD-01-FOUND">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Interactive Pipeline (Left) */}
          <div className="md:col-span-7 flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-extrabold text-[#D4AF37] uppercase tracking-widest bg-amber-50 px-2 py-1 rounded border border-amber-100 inline-block">Gold Roadmap</span>
              <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">The Gold Audit Pipeline</h3>
              <p className="text-xs font-medium text-slate-500 leading-relaxed">
                Click each stage of the pipeline to see how we audit gold's volatility before drawing a reading.
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
                      ? "bg-white border-[#D4AF37] ring-2 ring-amber-100 scale-[1.01]" 
                      : "bg-[#F8FBFC] border-slate-200 hover:bg-white"
                  )}
                >
                  <div className="space-y-0.5">
                    <h4 className={cn("text-[9px] font-black uppercase tracking-wider", activeStep === idx ? "text-[#AA8F24]" : "text-slate-500")}>
                      {s.title}
                    </h4>
                    <span className="text-xs font-bold text-slate-800">{s.subtitle}</span>
                  </div>
                  <ChevronRight size={14} className={cn("transition-transform", activeStep === idx ? "text-[#D4AF37] translate-x-1" : "text-slate-300")} />
                </button>
              ))}
            </div>
          </div>

          {/* Console Display (Right) */}
          <div className="md:col-span-5 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 text-slate-100"><Layers size={100} className="text-[#071B36]" /></div>
            
            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
                <Info size={12} className="text-[#D4AF37]" />
                Gold Audit Log
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
                  <span className="text-[9px] font-black font-mono text-[#AA8F24] bg-amber-50 px-2 py-0.5 rounded border border-amber-100 inline-block uppercase">
                    Stage {activeStep + 1} ACTIVE
                  </span>
                  <h4 className="text-sm font-black text-[#071B36] uppercase">{steps[activeStep].subtitle}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                    {steps[activeStep].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 bg-slate-50 border border-slate-105 p-4 rounded-xl text-[10px] font-extrabold text-slate-500 leading-normal flex items-start gap-2">
              <AlertTriangle size={14} className="text-[#D4AF37] shrink-0 mt-0.5" />
              <span>
                By evaluating gold volatility through close quality and follow-through, we avoid chasing risky false breakouts.
              </span>
            </div>
          </div>

        </div>

        <MentorInsight 
          text="Gold is not read by emotion. It is read by slowing down and asking what the movement proved after the first reaction." 
          analogy="A professional lifeguard. When a large wave crashes (gold spike), you do not run screaming into the water. You stand on your tower, scan the rip currents, observe how the water settles, and decide if action is actually required."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 2: One Gold Wick Is Not a Full Reading
 */
export const GoldSingleWickTrap = () => {
  const [toggleActive, setToggleActive] = useState(false);

  return (
    <InstitutionalFrame label="Gold Single-Wick Trap" id="GLD-02-TRAP">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <div className="space-y-1">
            <span className="text-[10px] font-black text-rose-600 uppercase tracking-widest bg-rose-50 px-2 py-1 rounded border border-rose-100 inline-block">Wick Trap</span>
            <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">Gold Wick Rejection Trap</h3>
          </div>
          <button 
            onClick={() => setToggleActive(!toggleActive)} 
            className="px-5 py-2.5 bg-[#071B36] text-white text-[9px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2 shadow-sm shrink-0"
          >
            <RefreshCw size={12} className={cn("transition-transform duration-500", toggleActive && "rotate-180")} />
            {toggleActive ? "View Single Wick" : "Apply Audit Lens"}
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
                <span className="text-[10px] font-extrabold uppercase text-rose-500 tracking-wider">Speculator View</span>
              </div>
              <h4 className="text-sm font-black text-[#071B36] uppercase">Isolated Gold Wick</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                Gold wicks sharply below support. The speculator assumes this is an immediate buy signal because the level rejected.
              </p>
              
              <div className="flex items-center justify-center p-4 bg-white rounded-2xl border border-rose-100">
                <MiniCandle bullish={true} bodyHeight={15} wickTop={5} wickBottom={75} label="Gold Wick" />
                <div className="ml-4 space-y-1">
                  <span className="text-[9px] font-black text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-100 inline-block uppercase">Wick Signal</span>
                  <p className="text-xs font-black text-[#071B36] uppercase tracking-tighter">"Strong support rejection! Buy now!"</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-[#FFF5F5] border border-rose-200 rounded-xl text-[10px] font-bold text-rose-700 leading-normal flex items-start gap-2">
              <Ban size={14} className="shrink-0 mt-0.5" />
              <span>
                Danger: Gold was sweeping liquidity. The next candle closed below support and DXY was strongly rising. The buy trap failed.
              </span>
            </div>
          </div>

          {/* Right panel: Full Evidence Stack */}
          <div className={cn(
            "border rounded-[2rem] p-6 flex flex-col justify-between transition-all duration-500 shadow-sm relative overflow-hidden",
            toggleActive ? "bg-[#FEF3C7] border-amber-200 ring-2 ring-amber-100 scale-[1.01]" : "bg-white border-slate-200 text-slate-400 bg-[#F8FBFC]"
          )}>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span className="text-[10px] font-extrabold uppercase text-[#AA8F24] tracking-wider">Gold Audit Lens</span>
              </div>
              <h4 className="text-sm font-black text-[#071B36] uppercase">Aligned Evidence Stack</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                We audit: 1. Location check, 2. Close quality, 3. DXY alignment, 4. Follow-through hold.
              </p>

              <div className="space-y-2 bg-white p-4 rounded-2xl border border-amber-100">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle size={14} className="text-[#D4AF37] shrink-0" />
                  <span>1. Location: Wick did not tap a major HTF zone.</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle size={14} className="text-[#D4AF37] shrink-0" />
                  <span>2. Close Quality: Next candle closes below the support block.</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle size={14} className="text-[#D4AF37] shrink-0" />
                  <span>3. DXY Alignment: US dollar is actively breaking out upward.</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle size={14} className="text-[#D4AF37] shrink-0" />
                  <span>4. Follow-Through: No bullish continuation occurs.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-[#FEF3C7] border border-amber-200 rounded-xl text-[10px] font-bold text-[#8C761D] leading-normal flex items-start gap-2">
              <ListChecks size={14} className="shrink-0 mt-0.5" />
              <span>
                Result: DXY strength and weak close quality reveal that the wick was just a trap. The reading remains mixed.
              </span>
            </div>
          </div>
        </div>

        <MentorInsight 
          text="Gold may wick above a previous high and return quickly. That does not automatically mean reversal. It means you now have a clue that needs context." 
          analogy="A wet paint sign. You see a sign saying 'wet paint' (the wick). You do not immediately sit on the bench. You look closely at the texture, check if other benches are wet, and wait for confirmation before sat down."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 3: Gold Reaction Zones Matter More Than Exact Lines
 */
export const GoldReactionZoneEvidence = () => {
  const [lineMode, setLineMode] = useState("zone");

  return (
    <InstitutionalFrame label="Gold Reaction Zones" id="GLD-03-ZONE">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <div className="space-y-1">
            <span className="text-[10px] font-black text-[#D4AF37] uppercase tracking-widest bg-amber-50 px-2 py-1 rounded border border-amber-100 inline-block">Reaction Zones</span>
            <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">Rigid Lines vs. Flexible Zones</h3>
          </div>
          
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200 shrink-0">
            <button 
              onClick={() => setLineMode("rigid")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", lineMode === "rigid" ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600 hover:text-[#071B36]")}
            >
              Rigid Line
            </button>
            <button 
              onClick={() => setLineMode("zone")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", lineMode === "zone" ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600 hover:text-[#071B36]")}
            >
              Flexible Zone
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Chart Display (Left) */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-[2.5rem] p-6 flex flex-col justify-center items-center shadow-sm min-h-[220px] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] bg-[length:16px_16px]" />
            
            {/* Reaction Zone Box */}
            {lineMode === "zone" ? (
              <div className="absolute top-[40px] left-0 w-full h-[60px] bg-[#FEF3C7] border-t border-b border-[#FDE68A] flex items-center justify-center">
                <span className="text-[9px] font-black uppercase tracking-widest text-[#AA8F24]">Gold Reaction Zone ($2030 - $2034)</span>
              </div>
            ) : (
              <div className="absolute top-[70px] left-0 w-full border-t-2 border-rose-500 flex items-center justify-center">
                <span className="text-[9px] font-black uppercase tracking-widest text-rose-500 bg-white px-2 py-0.5 rounded border border-rose-100 -mt-3">Rigid Line ($2032.00)</span>
              </div>
            )}

            <div className="flex gap-4 items-end relative z-10 mt-6">
              <MiniCandle bullish={true} bodyHeight={20} label="Approach" />
              {lineMode === "rigid" ? (
                <MiniCandle bullish={false} bodyHeight={15} wickTop={5} wickBottom={65} label="LINE SWEEP" />
              ) : (
                <MiniCandle bullish={false} bodyHeight={15} wickTop={5} wickBottom={45} label="ZONE REJECT" />
              )}
              <MiniCandle bullish={false} bodyHeight={35} label="Close Inside" />
            </div>
          </div>

          {/* Details (Right) */}
          <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-[2.5rem] p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="text-[9px] font-extrabold uppercase text-slate-400 tracking-wider">
                Zone Analysis Log
              </div>
              <div className="h-px bg-slate-200" />
              
              <div className="space-y-3">
                <span className={cn(
                  "text-[9px] font-black font-mono px-2 py-0.5 rounded border inline-block uppercase",
                  lineMode === "zone" ? "text-teal-600 bg-teal-50 border-teal-100" : "text-rose-600 bg-rose-50 border-rose-100"
                )}>
                  {lineMode === "zone" ? "FLEXIBLE ZONE OK" : "RIGID LINE SWEEP"}
                </span>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed font-mono">
                  {lineMode === "zone" 
                    ? "Gold wicks slightly past $2032 but closes the candle at $2031, safely within the reaction zone. The structural rejection remains valid."
                    : "Gold wicks to $2035, triggering stops of anyone using a tight line stop-loss. Speculators panic, but price immediately reverses as expected."
                  }
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 text-[9px] font-black text-slate-400 uppercase tracking-widest">
              {lineMode === "zone" ? "Audit Verdict: Keep zones wide to filter noise" : "Audit Verdict: Rigid lines lead to early triggers"}
            </div>
          </div>

        </div>

        <MentorInsight 
          text="Gold punishes rigid line thinking. Zones help the learner stay flexible without becoming careless." 
          analogy="A parking space. If you expect a massive SUV (gold volatility) to park perfectly centered without touching the yellow lines, you will get frustrated. You mark a wider space (reaction zone) to accommodate its size."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 4: USD Pressure Can Change Gold Reading Quality
 */
export const GoldUsdContextEvidence = () => {
  const [usdState, setUsdState] = useState("align");

  const scenarios = {
    align: {
      status: "SUPPORTIVE GRAVITY",
      dxy: "US Dollar Index (DXY) is breaking down below local support.",
      gold: "Gold pushes above key resistance zone.",
      quality: "CLEAR BULLISH READING",
      desc: "Weak dollar context supports gold's upward expansion. The correlation is aligned, increasing confidence.",
      color: "bg-[#F0FDF4] text-teal-700 border-teal-200",
      bColor: "text-teal-400 border-[#133F73]"
    },
    conflict: {
      status: "CONFLICTING GRAVITY",
      dxy: "US Dollar Index (DXY) is in a strong upward trend, breaking local highs.",
      gold: "Gold pushes above key resistance zone.",
      quality: "MIXED READING",
      desc: "Strong dollar creates a heavy anchor for gold. The breakout push is conflicting and highly fragile.",
      color: "bg-amber-50 text-amber-600 border-amber-100",
      bColor: "text-amber-400 border-[#78350F]"
    },
    unclear: {
      status: "UNCLEAR / CHOPPY",
      dxy: "DXY is volatile and moving sideways in a tight range.",
      gold: "Gold attempts a local breakout.",
      quality: "UNSTABLE READING",
      desc: "Dollar index context is choppy. Gold's move has lower correlation support, rendering the setup less clear.",
      color: "bg-slate-50 text-slate-500 border-slate-200",
      bColor: "text-slate-400 border-slate-300"
    }
  };

  const current = scenarios[usdState as keyof typeof scenarios];

  return (
    <InstitutionalFrame label="Gold/USD Context Board" id="GLD-04-USD">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        <div className="space-y-2">
          <span className="text-[10px] font-extrabold text-[#D4AF37] uppercase tracking-widest bg-amber-50 px-2 py-1 rounded border border-amber-100 inline-block">USD Context</span>
          <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">US Dollar Index (DXY) Gravity</h3>
          <p className="text-xs font-medium text-slate-500 leading-relaxed">
            Select a dollar index state to see how it directly dictates the safety and quality of gold breakouts.
          </p>
        </div>

        {/* State Selectors */}
        <div className="grid grid-cols-3 gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
          {Object.keys(scenarios).map((k) => (
            <button
              key={k}
              onClick={() => setUsdState(k)}
              className={cn(
                "py-2 px-3 text-[9px] font-black uppercase tracking-wider rounded-xl transition-all",
                usdState === k ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600 hover:text-[#071B36]"
              )}
            >
              {k === "align" ? "USD Weak" : k === "conflict" ? "USD Strong" : "USD Unclear"}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Details (Left) */}
          <div className="md:col-span-8 space-y-4">
            <div className="p-4 bg-white border border-slate-200 rounded-xl flex items-center justify-between shadow-sm">
              <div className="space-y-1">
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider">USD Index (DXY) State</span>
                <p className="text-xs text-slate-700 font-bold">{current.dxy}</p>
              </div>
              <span className={cn("text-[9px] font-black px-2 py-0.5 rounded border uppercase", current.color)}>{current.status}</span>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-xl flex items-center justify-between shadow-sm">
              <div className="space-y-1">
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider">Gold (XAU/USD) Chart</span>
                <p className="text-xs text-slate-700 font-bold">{current.gold}</p>
              </div>
              <span className="text-[9px] font-black bg-slate-50 border border-slate-100 px-2 py-0.5 rounded text-slate-500 uppercase">Local Breakout</span>
            </div>
          </div>

          {/* Diagnostic (Right) */}
          <div className="md:col-span-4 bg-[#071B36] text-white rounded-[2.5rem] p-6 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 text-slate-100"><ShieldAlert size={100} className="text-teal-400" /></div>
            
            <div className="space-y-4 relative z-10">
              <div className="text-[9px] font-extrabold uppercase text-slate-400 tracking-wider">
                USD Correlation Log
              </div>
              <div className="h-px bg-slate-800" />
              
              <div className="space-y-3">
                <span className={cn(
                  "text-[9px] font-black font-mono px-2 py-0.5 rounded border inline-block uppercase",
                  current.bColor
                )}>
                  {current.status}
                </span>
                <p className="text-xs text-slate-300 leading-relaxed font-semibold">
                  {current.desc}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 space-y-1.5">
              <span className="text-[8px] font-black uppercase text-slate-400 tracking-widest leading-none">Classified Reading</span>
              <p className="text-sm font-black italic uppercase tracking-tighter leading-none text-[#D4AF37]">
                {current.quality}
              </p>
            </div>
          </div>

        </div>

        <MentorInsight 
          text="Always check the dollar's pulse. A strong dollar is a heavy anchor for gold. If gold breaks out while the dollar is strong, the move is conflicting." 
          analogy="A swimmer. Swimming against a strong current (strong dollar) requires immense energy and is highly likely to tire you out (failed gold breakout). Swimming with the current (weak dollar) is smooth and fast."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 5: Macro Events Can Make Gold Look Clear Too Early
 */
export const GoldMacroEventDistortion = () => {
  const [macroStep, setMacroStep] = useState(0);

  const steps = [
    { label: "1. Pre-Event Consolidation", status: "Balanced Range", desc: "Gold trades inside a quiet consolidation range prior to the economic data release." },
    { label: "2. News Spike", status: "Volatility Expansion", desc: "CPI inflation data drops. A sudden $20 spike occurs in 1 minute, blowing past previous range boundaries." },
    { label: "3. Stabilization Check", status: "Audit Complete", desc: "The spike fades. Price returns completely back inside the Consolidation block. The event candle created noise, not structure." }
  ];

  return (
    <InstitutionalFrame label="Macro Event Distortion" id="GLD-05-MACR">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        <div className="space-y-2">
          <span className="text-[10px] font-extrabold text-rose-600 uppercase tracking-widest bg-rose-50 px-2 py-1 rounded border border-rose-100 inline-block">Macro Distortion</span>
          <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">Economic Data Reaction Stepper</h3>
          <p className="text-xs font-medium text-slate-500 leading-relaxed">
            Click the steps to see how macro events generate temporary speed before returning to key structure zones.
          </p>
        </div>

        {/* Stepper */}
        <div className="grid grid-cols-3 gap-2">
          {steps.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setMacroStep(idx)}
              className={cn(
                "p-3 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between shadow-sm",
                macroStep === idx 
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
          
          {/* Chart Display (Left) */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-[2.5rem] p-6 flex items-center justify-center shadow-sm min-h-[200px] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] bg-[length:16px_16px]" />
            <div className="absolute top-1/2 left-0 w-full border-t border-slate-200 border-dashed" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={macroStep}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="flex gap-4 items-end relative z-10"
              >
                {macroStep === 0 && (
                  <>
                    <MiniCandle bullish={true} bodyHeight={20} label="Pre-News" />
                    <MiniCandle bullish={false} bodyHeight={15} label="Pre-News" />
                  </>
                )}
                {macroStep === 1 && (
                  <>
                    <MiniCandle bullish={true} bodyHeight={20} label="Pre-News" />
                    <MiniCandle bullish={true} bodyHeight={75} wickTop={10} wickBottom={10} label="SPIKE" />
                  </>
                )}
                {macroStep === 2 && (
                  <>
                    <MiniCandle bullish={true} bodyHeight={20} label="Pre-News" />
                    <MiniCandle bullish={true} bodyHeight={15} wickTop={70} wickBottom={10} label="SPIKE FADE" />
                    <MiniCandle bullish={false} bodyHeight={35} label="Revert" />
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Details (Right) */}
          <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-[2.5rem] p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="text-[9px] font-extrabold uppercase text-slate-400 tracking-wider">
                Event Diagnostics
              </div>
              <div className="h-px bg-slate-200" />
              
              <div className="space-y-3">
                <span className="text-[9px] font-black font-mono text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-100 inline-block uppercase">
                  STATUS: {steps[macroStep].status}
                </span>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed font-mono">
                  {steps[macroStep].desc}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-[8px] font-black uppercase text-slate-400 tracking-widest">
              <span>Wait for stabilization check</span>
              <span className="text-[#D4AF37]">Patience Filter</span>
            </div>
          </div>

        </div>

        <MentorInsight 
          text="News spikes show speed, not structure. Let the algorithms finish their work before you audit the chart." 
          analogy="A wind gust. A sudden heavy gust of wind (CPI release) blows a trash can lid down the street (price spike). Once the wind stops, the lid lies flat. Wait for the air to clear to see where the trash can actually sits."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 6: Close Quality Matters After Gold Moves Fast
 */
export const GoldCloseQualityAudit = () => {
  const [activeClose, setActiveClose] = useState("strong");

  const closeTypes = {
    strong: {
      title: "Strong Close",
      badge: "bg-[#F0FDF4] text-teal-700 border-teal-200",
      desc: "The candle body closes at the absolute top of the range. This indicates maximum buyer commitment and validates structural extension.",
      candle: { bullish: true, bodyHeight: 65, wickTop: 5, wickBottom: 5 },
      quality: "HIGH QUALITY EVIDENCE"
    },
    mid: {
      title: "Middle Close",
      badge: "bg-amber-50 text-amber-600 border-amber-105",
      desc: "The candle body closes in the middle of its high-low range. Buyers pushed up but sellers rejected it halfway back. Indecision/Conflict.",
      candle: { bullish: true, bodyHeight: 25, wickTop: 25, wickBottom: 25 },
      quality: "MIXED EVIDENCE"
    },
    weak: {
      title: "Weak Close",
      badge: "bg-[#FFF5F5] text-rose-700 border-rose-200",
      desc: "The candle wicks high but closes near its open, back inside the range. This represents a clear rejection and exhaustion of buyers.",
      candle: { bullish: true, bodyHeight: 10, wickTop: 65, wickBottom: 5 },
      quality: "LOW QUALITY / CONFLICT"
    }
  };

  const current = closeTypes[activeClose as keyof typeof closeTypes];

  return (
    <InstitutionalFrame label="Gold Close Quality" id="GLD-06-CLOS">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        <div className="space-y-2">
          <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-[#F0FDF4] px-2 py-1 rounded border border-teal-200 inline-block">Close Quality</span>
          <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">Candle Close Commitment</h3>
          <p className="text-xs font-medium text-slate-500 leading-relaxed">
            Click each close type to observe how it changes the reading quality classification.
          </p>
        </div>

        {/* Close Selectors */}
        <div className="grid grid-cols-3 gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
          {Object.keys(closeTypes).map((k) => (
            <button
              key={k}
              onClick={() => setActiveClose(k)}
              className={cn(
                "py-2 px-3 text-[9px] font-black uppercase tracking-wider rounded-xl transition-all",
                activeClose === k ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600 hover:text-[#071B36]"
              )}
            >
              {k === "strong" ? "Strong Close" : k === "mid" ? "Middle Close" : "Weak Close"}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Details (Left) */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <span className={cn("px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase border tracking-wider inline-block", current.badge)}>
                  {current.title}
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-[8px] font-black uppercase text-slate-400 tracking-wider">Description</span>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">{current.desc}</p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-0.5">Audit Reading State</span>
              <span className="text-xs font-black text-[#071B36]">{current.quality}</span>
            </div>
          </div>

          {/* Candle Graphic (Right) */}
          <div className="md:col-span-5 bg-white border border-slate-200 rounded-[2.5rem] p-6 flex flex-col justify-between items-center text-center shadow-sm">
            <span className="text-[9px] font-extrabold uppercase text-slate-400 tracking-wider">Visual Record</span>
            
            <div className="py-6">
              <MiniCandle 
                bullish={current.candle.bullish} 
                bodyHeight={current.candle.bodyHeight} 
                wickTop={current.candle.wickTop} 
                wickBottom={current.candle.wickBottom} 
                label={activeClose.toUpperCase()} 
              />
            </div>

            <div className="text-[10px] font-bold text-slate-500 leading-normal">
              A candle's travel shows activity. Its close helps show commitment. Always wait for the hourly close.
            </div>
          </div>

        </div>

        <MentorInsight 
          text="A candle's travel shows activity. Its close helps show commitment." 
          analogy="A business meeting. Someone can talk passionately for 50 minutes about buying a company (active candle travel), but if they refuse to sign the contract in the last 10 minutes (candle close), the deal did not happen."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 7: Impulse and Pullback Need Context in Gold
 */
export const GoldImpulsePullbackEvidence = () => {
  const [drillMode, setDrillMode] = useState("chaser");

  return (
    <InstitutionalFrame label="Impulse and Pullback Rhythm" id="GLD-07-IMPL">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <div className="space-y-1">
            <span className="text-[10px] font-black text-teal-600 uppercase tracking-widest bg-[#F0FDF4] px-2 py-1 rounded border border-teal-200 inline-block">Impulse & Pullback</span>
            <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">The Volatility Rhythm</h3>
          </div>
          
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200 shrink-0">
            <button 
              onClick={() => setDrillMode("chaser")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", drillMode === "chaser" ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600 hover:text-[#071B36]")}
            >
              Chaser Panic
            </button>
            <button 
              onClick={() => setDrillMode("auditor")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", drillMode === "auditor" ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600 hover:text-[#071B36]")}
            >
              Auditor Patience
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Panel Left */}
          <div className={cn("md:col-span-7 rounded-2xl p-6 flex flex-col justify-between shadow-sm relative overflow-hidden border", drillMode === "chaser" ? "bg-[#FFF5F5] border-rose-200" : "bg-[#F0FDF4] border-teal-200")}>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className={cn("w-2 h-2 rounded-full", drillMode === "chaser" ? "bg-rose-500" : "bg-teal-500")} />
                <span className={cn("text-[10px] font-extrabold uppercase tracking-wider", drillMode === "chaser" ? "text-rose-600" : "text-teal-600")}>
                  {drillMode === "chaser" ? "Emotional Speculator" : "Disciplined Auditor"}
                </span>
              </div>
              
              <h4 className="text-sm font-black text-[#071B36] uppercase">
                {drillMode === "chaser" ? "Chasing the $25 Push" : "Auditing the $18 Retrace"}
              </h4>
              
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                {drillMode === "chaser" 
                  ? "Gold spikes $25. The trader buys at the absolute top due to FOMO. Price then pulls back $18, causing them to panic-sell at a loss."
                  : "Gold spikes $25. The auditor waits. Price pulls back $18 and holds the previous hourly consolidation block. The auditor verifies the hold."
                }
              </p>
            </div>

            <div className="mt-6 flex gap-4 items-end bg-white p-4 rounded-xl border border-slate-200">
              <MiniCandle bullish={true} bodyHeight={60} label="Impulse" />
              <MiniCandle bullish={false} bodyHeight={40} label="Retrace" />
              <MiniCandle bullish={true} bodyHeight={35} label="Hold" />
            </div>
          </div>

          {/* Panel Right */}
          <div className="md:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <span className="text-[8px] font-black uppercase text-slate-400 tracking-wider">Confluence Diagnostic</span>
              <h4 className="text-sm font-black text-[#071B36] uppercase">Structure Verdict</h4>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle size={14} className="text-teal-500 shrink-0" />
                  <span>Impulse size: $25 (strong activity)</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle size={14} className="text-teal-500 shrink-0" />
                  <span>Pullback size: $18 (normal gold sweep)</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle size={14} className="text-teal-500 shrink-0" />
                  <span>Support check: Held previous range high</span>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-slate-50 p-4 border border-slate-105 rounded-xl text-[10px] font-bold text-slate-500 leading-normal">
              Rule: A pullback is not the market betraying the move. It is a question the market asks, and we must audit the answer.
            </div>
          </div>

        </div>

        <MentorInsight 
          text="A pullback is not the market betraying the move. It is a question the learner must audit." 
          analogy="A high jump. An athlete sprints and leaps over the bar (impulse). They must land safely on the crash pad and stand back up (pullback hold) before the jump is declared successful. Do not celebrate mid-air."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 8: Aligned Gold Evidence vs Mixed Gold Evidence
 */
export const GoldAlignedVsMixedEvidence = () => {
  const [activeTab, setActiveTab] = useState("clear");

  const conditions = {
    clear: {
      title: "Clear Aligned Reading",
      badge: "bg-[#F0FDF4] text-teal-700 border-teal-200",
      desc: "All critical layers support the same interpretation. Gold reacts from a key reaction zone, closes strongly near the high, DXY is weak, and follow-through holds.",
      items: [
        "Gold reacts cleanly from a key historical zone",
        "USD Index (DXY) is in a confirmed local downtrend",
        "Breakout candle closes strongly near the high of its range",
        "Next candle immediately holds the breakout zone on pullback",
        "Follow-through candle confirms continuation direction"
      ]
    },
    mixed: {
      title: "Mixed Reading (Conflict)",
      badge: "bg-amber-50 text-amber-600 border-amber-100",
      desc: "The breakout push occurs but DXY is strong, the breakout candle has a long upper wick, and follow-through stalls.",
      items: [
        "Gold pushes above resistance but leaves a long upper wick",
        "Breakout candle closes near the middle of its range",
        "USD Index (DXY) is in a strong uptrend (conflicting gravity)",
        "Next candle hesitates and trades back inside the range",
        "Volume is dry and unsupportive on the breakout push"
      ]
    }
  };

  const current = conditions[activeTab as keyof typeof conditions];

  return (
    <InstitutionalFrame label="Evidence Classification Board" id="GLD-08-ALGN">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="space-y-1">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Quality Audit</span>
            <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">Classification State</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200 shrink-0">
            <button
              onClick={() => setActiveTab("clear")}
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", activeTab === "clear" ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600 hover:text-[#071B36]")}
            >
              Clear Aligned
            </button>
            <button
              onClick={() => setActiveTab("mixed")}
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", activeTab === "mixed" ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600 hover:text-[#071B36]")}
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
              Rule: {activeTab === "clear" ? "Wait for verification checkpoint to confirm entry." : "Stand aside or reduce position risk significantly."}
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
          text="If you have to argue with the chart to make it look good, the reading is mixed. Stand aside." 
          analogy="A pilot checking instruments. If your altimeter is spinning and your fuel gauge is flashing warning signs (mixed), you do not fly. You stay on the ground and wait for alignment."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 9: Gold Verification: What Must Happen Next?
 */
export const GoldVerificationWorkflow = () => {
  const [activeNode, setActiveNode] = useState(0);

  const workflow = [
    { label: "1. Initial Gold Evidence", check: "Gold spikes out of a key reaction zone block.", desc: "XAU/USD pushes strongly above a resistance area. This starts the question, not the trade." },
    { label: "2. Verification Question", check: "Does USD context align and does the next candle hold?", desc: "Define checkpoint: 'Does price hold above the reaction zone on pullback? Does DXY remain weak? Is the candle close strong?'" },
    { label: "3. Action Path", check: "Hold outside = Clear. Re-entry inside = Invalidated.", desc: "If the pullback holds on dry volume, the read is verified. If price dumps back inside the zone, the breakout is rejected." }
  ];

  return (
    <InstitutionalFrame label="Gold Verification Flow" id="GLD-09-WORK">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        <div className="space-y-2">
          <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-[#F0FDF4] px-2 py-1 rounded border border-teal-200 inline-block">Verification Logic</span>
          <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">Setting Checkpoints</h3>
          <p className="text-xs font-medium text-slate-500 leading-relaxed">
            Click each workflow node to see how verification checks filter out high-speed FOMO breakouts.
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
                <p className="text-xs text-slate-500 font-semibold leading-relaxed font-mono">
                  {workflow[activeNode].desc}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 space-y-1.5">
              <span className="text-[8px] font-black uppercase text-slate-400 tracking-widest">Verification Checkpoint</span>
              <p className="text-xs text-[#071B36] font-black leading-snug italic">{workflow[activeNode].check}</p>
            </div>
          </div>

        </div>

        <MentorInsight 
          text="Gold moves quickly, but the learner does not need to think quickly. They need to think clearly." 
          analogy="A home inspector. When you look at a newly painted wall, you do not assume the framing underneath is strong. You knock on the wood, check the joints (pullback verification), and measure the load-bearing beams before signing off."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 10: Practice Drill: Is This Gold Reading Clear, Mixed, or Unclear?
 */
export const GoldEvidenceAuditPracticeDrill = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const scenario = {
    supporting: [
      "Gold pushes above a previous key resistance zone.",
      "The breakout occurred during a highly active London trading window."
    ],
    limiting: [
      "The breakout candle leaves a long upper wick.",
      "The candle body closes near the middle of its high-low range (weak commitment).",
      "The US Dollar Index (DXY) is not clearly weak, indicating conflicting gravity.",
      "The subsequent hourly candle hesitates and starts drifting back toward the breakout level."
    ]
  };

  const options = [
    {
      id: "A",
      text: "Clear bullish reading because Gold moved above the reaction zone.",
      isCorrect: false,
      feedback: "Incorrect. Pushing above the zone is a supportive clue, but you cannot classify this as clear when the candle has a long upper wick, closes in the middle, USD context is unclear, and follow-through is weak."
    },
    {
      id: "B",
      text: "Mixed evidence because the move happened, but wick behavior, close quality, USD context, and weak follow-through limit confidence.",
      isCorrect: true,
      feedback: "Correct! The evidence is mixed. The breakout push is an active clue, but the long upper wick, mid-range close, lack of USD alignment, and weak follow-through are significant limiting clues that prevent a clear classification."
    },
    {
      id: "C",
      text: "Guaranteed reversal because Gold left an upper wick.",
      isCorrect: false,
      feedback: "Incorrect. An upper wick indicates selling pressure and limits reading quality, but it does not guarantee a reversal. Avoid absolute predictions."
    },
    {
      id: "D",
      text: "Unclear forever because Gold is too volatile to read.",
      isCorrect: false,
      feedback: "Incorrect. Gold is highly volatile, but it can be read systematically by auditing zones, closes, USD context, and follow-through together."
    }
  ];

  return (
    <InstitutionalFrame label="Evidence Audit Practice Drill" id="GLD-10-DRILL">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Scenario Board (Left) */}
          <div className="md:col-span-5 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[9px] font-extrabold uppercase text-slate-400 tracking-wider">
                <Info size={12} className="text-teal-500" />
                Scenario Evidence Board
              </div>
              <div className="h-px bg-slate-105" />
              
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

          {/* Choices (Right) */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-sm font-black text-[#071B36] uppercase tracking-tight">
                What is the disciplined Gold evidence-audit reading?
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
          text="Moving above a zone is useful evidence, but a long upper wick, middle close, unclear USD context, and weak follow-through limit the reading quality to Mixed."
          analogy="A security check. If a visitor has an ID (support), but their face doesn't match the photo and their authorization is expired (limiting), you do not let them in. You flag it as mixed."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 11: Debrief: Gold Reading Requires Patience Under Speed
 */
export const GoldEvidenceAuditDebrief = () => {
  return (
    <InstitutionalFrame label="Gold Roadway Debrief: Level 0 Summary" id="GLD-11-DEBR">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        
        <div className="bg-[#071B36] rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 p-6 text-slate-100"><Compass size={120} className="text-[#D4AF37]" /></div>
          
          <div className="relative z-10 space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2D2200] border border-[#543F00] text-[10px] font-extrabold text-[#D4AF37] uppercase tracking-[0.25em]">Gold Track Complete</span>
            <h3 className="text-xl font-black leading-tight uppercase tracking-tight">The Gold Auditor</h3>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xl font-semibold">
              You have completed the Level 0 Gold Roadway. You have shifted your mindset from an emotional speculator reacting to speed to a disciplined gold auditor. You now understand that gold's aggressive movements can be read systematically through reaction zones, close quality, USD pressure, and verification checkpoints.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <h4 className="text-xs font-black uppercase text-[#071B36] mb-2">1. Volatility Context</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              Slow down and check what Gold actually proved after the first reaction. Do not chase the candle.
            </p>
          </div>
          <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <h4 className="text-xs font-black uppercase text-[#071B36] mb-2">2. Reaction Zones</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              XAU/USD trades in neighborhoods, not single prices. Focus on flexible zones over exact lines.
            </p>
          </div>
          <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <h4 className="text-xs font-black uppercase text-[#071B36] mb-2">3. Close Quality</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              Candle travel is a rumor; the close is the official contract. Always verify where the candle body closes.
            </p>
          </div>
        </div>

        <MentorInsight 
          text="Gold reading is not reacting to the biggest candle or longest wick. It is evidence reviewed through volatility, reaction zones, USD context, close quality, and follow-through." 
          analogy="A professional navigator. You don't guess if a storm is coming; you read the wind, check the barometer, check the weather radar, and write down the safety checkpoints before leaving the harbor."
        />
      </div>
    </InstitutionalFrame>
  );
};
