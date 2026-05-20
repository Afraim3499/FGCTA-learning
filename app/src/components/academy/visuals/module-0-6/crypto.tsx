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
 * Card 1: Crypto Evidence Audit Starts With Fragmented Markets
 */
export const CryptoEvidenceAuditFoundation = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "1. Visible Chart",
      subtitle: "Price Appearance",
      desc: "Observe the price movement on your main screen. Remember that this is just one slice of the market.",
      color: "bg-slate-105 text-slate-600 border-slate-200"
    },
    {
      title: "2. Venue Source",
      subtitle: "CEX vs DEX Pool",
      desc: "Audit where the move formed. Is it supported on major CEX spot books or is it an isolated DEX pool imbalance?",
      color: "bg-blue-50 text-blue-600 border-blue-100"
    },
    {
      title: "3. BTC Context",
      subtitle: "Market Gravity",
      desc: "Check Bitcoin's structure. If BTC is weak or under resistance, altcoin moves are highly fragile.",
      color: "bg-amber-50 text-amber-600 border-amber-100"
    },
    {
      title: "4. Liquidity & Volume",
      subtitle: "Spot/Perp Check",
      desc: "Determine if the move is backed by real spot buying volume or driven purely by futures leverage.",
      color: "bg-purple-50 text-purple-600 border-purple-100"
    },
    {
      title: "5. Reading Quality",
      subtitle: "Audit Classification",
      desc: "Classify the reading as Clear, Mixed, or Unclear, and establish invalidation checkpoints.",
      color: "bg-emerald-50 text-emerald-600 border-emerald-100"
    }
  ];

  return (
    <InstitutionalFrame label="Crypto Evidence Audit Foundation" id="CRP-01-FOUND">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Interactive Pipeline (Left) */}
          <div className="md:col-span-7 flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-[#F0FDF4] px-2 py-1 rounded border border-teal-200 inline-block">Crypto Roadmap</span>
              <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">The Crypto Audit Pipeline</h3>
              <p className="text-xs font-medium text-slate-500 leading-relaxed">
                Click each stage of the pipeline to see how we audit fragmented crypto evidence before drawing a reading.
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

          {/* Console Display (Right) */}
          <div className="md:col-span-5 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 text-slate-100"><Layers size={100} className="text-[#071B36]" /></div>
            
            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
                <Info size={12} className="text-teal-500" />
                Crypto Audit Log
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

            <div className="mt-8 bg-slate-50 border border-slate-105 p-4 rounded-xl text-[10px] font-extrabold text-slate-500 leading-normal flex items-start gap-2">
              <AlertTriangle size={14} className="text-teal-600 shrink-0 mt-0.5" />
              <span>
                By evaluating venue source and BTC context, we avoid entering high-risk, fragmented breakouts.
              </span>
            </div>
          </div>

        </div>

        <MentorInsight 
          text="Crypto is easier to read when you stop asking 'Did it break?' and start asking 'Where did the break come from, and is it supported?'" 
          analogy="An intelligence officer. You do not trust a rumor from a single informant. You check their source, verify it against regional intelligence, and confirm with secondary field reports."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 2: One Crypto Wick Is Not the Whole Story
 */
export const CryptoSingleWickTrap = () => {
  const [toggleActive, setToggleActive] = useState(false);

  return (
    <InstitutionalFrame label="Crypto Single-Wick Trap" id="CRP-02-TRAP">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <div className="space-y-1">
            <span className="text-[10px] font-black text-rose-600 uppercase tracking-widest bg-rose-50 px-2 py-1 rounded border border-rose-100 inline-block">Wick Trap</span>
            <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">The Trap of Liquidation Wicks</h3>
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
              <h4 className="text-sm font-black text-[#071B36] uppercase">Liquidation Wick Below Support</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                An altcoin wicks sharply below support on a perp exchange. The beginner buys instantly, expecting a reversal.
              </p>
              
              <div className="flex items-center justify-center p-4 bg-white rounded-2xl border border-rose-100">
                <MiniCandle bullish={true} bodyHeight={15} wickTop={5} wickBottom={65} label="Perp Wick" />
                <div className="ml-4 space-y-1">
                  <span className="text-[9px] font-black text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-100 inline-block uppercase">Wick Signal</span>
                  <p className="text-xs font-black text-[#071B36] uppercase tracking-tighter">"Clear rejection! Buy now!"</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-[#FFF5F5] border border-rose-200 rounded-xl text-[10px] font-bold text-rose-700 leading-normal flex items-start gap-2">
              <Ban size={14} className="shrink-0 mt-0.5" />
              <span>
                Danger: No volume or spot context checked. The next candle closed below support, proving the wick was just a stop run.
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
                <span className="text-[10px] font-extrabold uppercase text-teal-500 tracking-wider">Crypto Audit Lens</span>
              </div>
              <h4 className="text-sm font-black text-[#071B36] uppercase">Aligned Evidence Stack</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                We audit: 1. Spot volume, 2. Close quality, 3. BTC context, 4. Futures open interest, 5. Post-wick follow-through.
              </p>

              <div className="space-y-2 bg-white p-4 rounded-2xl border border-teal-100">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle size={14} className="text-teal-500 shrink-0" />
                  <span>1. Spot Volume: Very low on CEX (dry buying).</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle size={14} className="text-teal-500 shrink-0" />
                  <span>2. Close Quality: Next candle closes below the support level.</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle size={14} className="text-teal-500 shrink-0" />
                  <span>3. BTC Context: Bitcoin is actively breaking downward.</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle size={14} className="text-teal-500 shrink-0" />
                  <span>4. Open Interest: Dropped sharply (leverage flushed).</span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-[#F0FDF4] border border-teal-200 rounded-xl text-[10px] font-bold text-teal-700 leading-normal flex items-start gap-2">
              <ListChecks size={14} className="shrink-0 mt-0.5" />
              <span>
                Result: Low spot volume and BTC weakness reveal that the wick is a trap. The reading remains mixed/unclear.
              </span>
            </div>
          </div>
        </div>

        <MentorInsight 
          text="ETH may wick below a previous low and return quickly. That does not automatically mean reversal. It means the learner now has a clue to audit." 
          analogy="A false alarm. A fire alarm goes off in a building (the wick). You do not assume the building is burning. You check for smoke, look for fire trucks, and consult the security desk before rushing out."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 3: BTC Context Changes Crypto Reading Quality
 */
export const CryptoBtcContextEvidence = () => {
  const [btcMode, setBtcMode] = useState("align");

  const scenarios = {
    align: {
      status: "SUPPORTIVE",
      btc: "Trending upward, breaking local highs cleanly.",
      alt: "Altcoin breaks local range resistance high.",
      quality: "CLEAR BULLISH READING",
      desc: "Bitcoin's upward trend provides supportive market gravity, confirming the altcoin's breakout.",
      color: "bg-[#F0FDF4] text-teal-700 border-teal-200",
      dColor: "text-teal-400 border-[#133F73]"
    },
    conflict: {
      status: "CONFLICTING",
      btc: "Stuck below daily resistance, showing sell pressure.",
      alt: "Altcoin attempts a local range breakout.",
      quality: "MIXED READING",
      desc: "Bitcoin's resistance limits market-wide upside. The altcoin's breakout is highly fragile.",
      color: "bg-amber-50 text-amber-600 border-amber-100",
      dColor: "text-amber-400 border-[#78350F]"
    },
    unclear: {
      status: "UNSTABLE / NOISY",
      btc: "Dumping rapidly, breaking local swing lows.",
      alt: "Altcoin spike candle tries to push high.",
      quality: "UNSTABLE / UNCLEAR READING",
      desc: "Bitcoin's sudden drop drags altcoins down. The altcoin's local breakout fails instantly.",
      color: "bg-[#FFF5F5] text-rose-700 border-rose-200",
      dColor: "text-rose-400 border-[#991B1B]"
    }
  };

  const current = scenarios[btcMode as keyof typeof scenarios];

  return (
    <InstitutionalFrame label="BTC Gravity Board" id="CRP-03-GRAV">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        <div className="space-y-2">
          <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-[#F0FDF4] px-2 py-1 rounded border border-teal-200 inline-block">BTC Context</span>
          <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">Bitcoin Market Gravity</h3>
          <p className="text-xs font-medium text-slate-500 leading-relaxed">
            Select a Bitcoin market state to see how it directly dictates the safety and quality of altcoin breakouts.
          </p>
        </div>

        {/* Scenario Selectors */}
        <div className="grid grid-cols-3 gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
          {Object.keys(scenarios).map((k) => (
            <button
              key={k}
              onClick={() => setBtcMode(k)}
              className={cn(
                "py-2 px-3 text-[9px] font-black uppercase tracking-wider rounded-xl transition-all",
                btcMode === k ? "bg-[#071B36] text-white" : "text-slate-600 hover:text-[#071B36]"
              )}
            >
              BTC {k}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Details (Left) */}
          <div className="md:col-span-8 space-y-4">
            <div className="p-4 bg-white border border-slate-200 rounded-xl flex items-center justify-between shadow-sm">
              <div className="space-y-1">
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider">Bitcoin Condition (Gravity)</span>
                <p className="text-xs text-slate-700 font-bold">{current.btc}</p>
              </div>
              <span className={cn("text-[9px] font-black px-2 py-0.5 rounded border uppercase", current.color)}>{current.status}</span>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-xl flex items-center justify-between shadow-sm">
              <div className="space-y-1">
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider">Altcoin Local Chart</span>
                <p className="text-xs text-slate-700 font-bold">{current.alt}</p>
              </div>
              <span className="text-[9px] font-black bg-slate-50 border border-slate-100 px-2 py-0.5 rounded text-slate-500 uppercase">Local Break</span>
            </div>
          </div>

          {/* Diagnostic (Right) */}
          <div className="md:col-span-4 bg-[#071B36] text-white rounded-[2.5rem] p-6 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 text-slate-100"><ShieldAlert size={100} className="text-teal-400" /></div>
            
            <div className="space-y-4 relative z-10">
              <div className="text-[9px] font-extrabold uppercase text-slate-400 tracking-wider">
                Gravity Log
              </div>
              <div className="h-px bg-slate-800" />
              
              <div className="space-y-3">
                <span className={cn(
                  "text-[9px] font-black font-mono px-2 py-0.5 rounded border inline-block uppercase",
                  current.dColor
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
              <p className="text-sm font-black italic uppercase tracking-tighter leading-none text-teal-400">
                {current.quality}
              </p>
            </div>
          </div>

        </div>

        <MentorInsight 
          text="BTC context is not there to make analysis complicated. It helps you avoid tunnel vision. If Bitcoin's structure is fragile, do not trust altcoin strength." 
          analogy="An elevator. The altcoin is a passenger jumping up and down inside the elevator cab (local breakout). If the elevator cable snaps and the cab falls (Bitcoin dropping), the passenger goes down with it."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 4: Spot and Perp Evidence Can Disagree
 */
export const CryptoSpotPerpEvidenceConflict = () => {
  const [alignedMode, setAlignedMode] = useState("conflict");

  return (
    <InstitutionalFrame label="Spot/Perp Correlation Board" id="CRP-04-CONF">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <div className="space-y-1">
            <span className="text-[10px] font-black text-teal-600 uppercase tracking-widest bg-[#F0FDF4] px-2 py-1 rounded border border-teal-200 inline-block">Venue Conflict</span>
            <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">Spot vs Perpetual Volume</h3>
          </div>
          
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200 shrink-0">
            <button 
              onClick={() => setAlignedMode("aligned")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", alignedMode === "aligned" ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600 hover:text-[#071B36]")}
            >
              Aligned Break
            </button>
            <button 
              onClick={() => setAlignedMode("conflict")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all", alignedMode === "conflict" ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600 hover:text-[#071B36]")}
            >
              Perp-Led Spike (Conflict)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Panel 1: Spot */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Spot CEX (Coinbase)</span>
              <h4 className="text-sm font-black text-[#071B36]">Organic Buying</h4>
              <p className="text-xs text-slate-500 font-semibold">
                {alignedMode === "aligned" ? "Spot buying volume is rising significantly, validating the breakout." : "Spot volume is completely flat. No retail or institutional buying."}
              </p>
            </div>
            <div className="flex flex-col items-center py-4 space-y-2">
              <MiniCandle bullish={true} bodyHeight={alignedMode === "aligned" ? 45 : 15} wickTop={5} wickBottom={5} label="Spot" />
              <span className="text-[8px] font-black uppercase text-slate-400">{alignedMode === "aligned" ? "Volume: high" : "Volume: dry"}</span>
            </div>
          </div>

          {/* Panel 2: Perps */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Binance Perps</span>
              <h4 className="text-sm font-black text-[#071B36]">Leveraged Interest</h4>
              <p className="text-xs text-slate-500 font-semibold">
                Perp Open Interest is spiking aggressively. Futures traders are buying with high leverage.
              </p>
            </div>
            <div className="flex flex-col items-center py-4 space-y-2">
              <MiniCandle bullish={true} bodyHeight={55} wickTop={5} wickBottom={5} label="Perp" />
              <span className="text-[8px] font-black uppercase text-teal-600 font-mono">OI Spike: +15%</span>
            </div>
          </div>

          {/* Panel 3: Diagnostic */}
          <div className={cn("text-white rounded-2xl p-5 shadow-lg flex flex-col justify-between", alignedMode === "aligned" ? "bg-[#071B36]" : "bg-rose-950 border border-rose-900")}>
            <div className="space-y-2">
              <span className="text-[9px] font-extrabold text-slate-300 uppercase tracking-wider">Audit Console</span>
              <h4 className="text-sm font-black uppercase">Confluence Result</h4>
              <p className="text-xs text-slate-300 font-semibold">
                {alignedMode === "aligned" ? "Spot confirms perp move. Stable trend expansion is active." : "Warning: perp-led spike without spot backing. High risk of liquidation squeeze."}
              </p>
            </div>
            <div className="flex flex-col items-center py-4 space-y-1">
              <span className={cn("text-xs font-black uppercase italic", alignedMode === "aligned" ? "text-teal-400" : "text-rose-400")}>
                {alignedMode === "aligned" ? "CLEAR BULISH" : "MIXED / FRAGILE"}
              </span>
              <span className="text-[8px] font-black uppercase text-slate-400">Classified Quality</span>
            </div>
          </div>

        </div>

        <MentorInsight 
          text="Perp movement can exaggerate what the wider market is doing. Spot confirmation helps you see whether the move has broader support. If spot is dry, stand aside." 
          analogy="A theater. If the crowd outside has tickets and is walking in (spot buying), the show is populated. If one person inside is screaming into a megaphone to make noise (perp leverage), the theater is still empty."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 5: Liquidation Cascades Can Fake Clarity
 */
export const CryptoLiquidationCascadeAudit = () => {
  const [cascadeStep, setCascadeStep] = useState(0);

  const steps = [
    { label: "1. Consolidation", status: "Neutral Range", desc: "Altcoin consolidates inside a range. Open Interest builds up as leverage traders place long bets." },
    { label: "2. The Flush", status: "Cascading Drops", desc: "A minor dump triggers the first stop-loss. The exchange automatically force-sells, triggering the next stops in a chain reaction." },
    { label: "3. Reversion Check", status: "Audit Complete", desc: "The flush ends. Spot buyers step in at key support, and price snaps back inside within minutes. The breakout was fake." }
  ];

  return (
    <InstitutionalFrame label="Liquidation Cascade Diagnostic" id="CRP-05-CASC">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        <div className="space-y-2">
          <span className="text-[10px] font-extrabold text-rose-600 uppercase tracking-widest bg-rose-50 px-2 py-1 rounded border border-rose-100 inline-block">Liquidation Pressure</span>
          <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">The Leverage Flush Timeline</h3>
          <p className="text-xs font-medium text-slate-500 leading-relaxed">
            Click the steps to see how a liquidation cascade creates artificial speed and wicks before reversing.
          </p>
        </div>

        {/* Stepper */}
        <div className="grid grid-cols-3 gap-2">
          {steps.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setCascadeStep(idx)}
              className={cn(
                "p-3 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between shadow-sm",
                cascadeStep === idx 
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
                key={cascadeStep}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="flex gap-4 items-end relative z-10"
              >
                {cascadeStep === 0 && (
                  <>
                    <MiniCandle bullish={true} bodyHeight={20} label="Consol" />
                    <MiniCandle bullish={false} bodyHeight={15} label="Consol" />
                  </>
                )}
                {cascadeStep === 1 && (
                  <>
                    <MiniCandle bullish={true} bodyHeight={20} label="Consol" />
                    <MiniCandle bullish={false} bodyHeight={75} wickTop={10} wickBottom={10} label="FLUSH" />
                  </>
                )}
                {cascadeStep === 2 && (
                  <>
                    <MiniCandle bullish={true} bodyHeight={20} label="Consol" />
                    <MiniCandle bullish={false} bodyHeight={15} wickTop={10} wickBottom={70} label="WICK Close" />
                    <MiniCandle bullish={true} bodyHeight={40} label="Revert" />
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Details (Right) */}
          <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-[2.5rem] p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="text-[9px] font-extrabold uppercase text-slate-400 tracking-wider">
                Cascade Diagnostics
              </div>
              <div className="h-px bg-slate-200" />
              
              <div className="space-y-3">
                <span className="text-[9px] font-black font-mono text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-100 inline-block uppercase">
                  STATUS: {steps[cascadeStep].status}
                </span>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed font-mono">
                  {steps[cascadeStep].desc}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-[8px] font-black uppercase text-slate-400 tracking-widest">
              <span>Wait for stabilization check</span>
              <span className="text-teal-600">Rule 5 Active</span>
            </div>
          </div>

        </div>

        <MentorInsight 
          text="Liquidations create speed, not structure. Let the dust settle before you read the chart." 
          analogy="A crowded theater exiting. If someone yells 'fire' (a stop run), people panic and run out the doors in a stampede (liquidation cascade). Once the panic stops and they realize it was a false alarm, they all walk right back inside (mean reversion)."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 6: DEX and CEX Prices May Not Tell the Same Story
 */
export const CryptoDexCexEvidence = () => {
  const [activeVenue, setActiveVenue] = useState("cex");

  const venues = {
    cex: {
      name: "CEX Spot (Coinbase)",
      depth: "Deep Liquidity",
      behavior: "Stable Consensus",
      desc: "Represents institutional and retail spot fiat volume. Price movements here are highly stable and define the global consensus.",
      candle: { bullish: true, bodyHeight: 25, wickTop: 10, wickBottom: 10 }
    },
    perp: {
      name: "Perp Futures (Binance)",
      depth: "Very High Open Interest",
      behavior: "Leverage Driven",
      desc: "Highly reactive futures pricing. Open interest expansion can exaggerate local wicks and lead to sudden stop-loss runs.",
      candle: { bullish: true, bodyHeight: 40, wickTop: 20, wickBottom: 25 }
    },
    dex: {
      name: "DEX Pool (Uniswap V3)",
      depth: "Thin Local Liquidity",
      behavior: "Local Slippage Wick",
      desc: "Smart-contract-based liquidity. Single whale transactions can create massive wicks or price distortions that are quickly arbitraged away.",
      candle: { bullish: true, bodyHeight: 15, wickTop: 5, wickBottom: 75 }
    }
  };

  const current = venues[activeVenue as keyof typeof venues];

  return (
    <InstitutionalFrame label="Venue Disagreement Board" id="CRP-06-VNU">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        <div className="space-y-2">
          <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-[#F0FDF4] px-2 py-1 rounded border border-teal-200 inline-block">Venue Difference</span>
          <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">Cross-Exchange Disagreement</h3>
          <p className="text-xs font-medium text-slate-500 leading-relaxed">
            Click each venue to see how liquidity depth changes the shape of the candle evidence.
          </p>
        </div>

        {/* Venue Selector */}
        <div className="grid grid-cols-3 gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
          {Object.keys(venues).map((k) => (
            <button
              key={k}
              onClick={() => setActiveVenue(k)}
              className={cn(
                "py-2 px-3 text-[9px] font-black uppercase tracking-wider rounded-xl transition-all",
                activeVenue === k ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600 hover:text-[#071B36]"
              )}
            >
              {k === "cex" ? "CEX Spot" : k === "perp" ? "Perp Market" : "DEX Pool"}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Details (Left) */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <span className="px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase border tracking-wider inline-block bg-slate-50 text-[#071B36] border-slate-200">
                  {current.name}
                </span>
              </div>
              
              <div className="space-y-1">
                <span className="text-[8px] font-black uppercase text-slate-400 tracking-wider">Liquidity Depth</span>
                <p className="text-sm font-black text-[#071B36]">{current.depth} ({current.behavior})</p>
              </div>

              <div className="space-y-1">
                <span className="text-[8px] font-black uppercase text-slate-400 tracking-wider">Description</span>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">{current.desc}</p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-[10px] font-bold text-slate-500 leading-normal">
              Audit Tip: Do not trust a dramatic DEX breakout if CEX spot feeds show flat volume.
            </div>
          </div>

          {/* Interactive Candle (Right) */}
          <div className="md:col-span-5 bg-white border border-slate-200 rounded-[2.5rem] p-6 flex flex-col justify-between items-center text-center shadow-sm">
            <span className="text-[9px] font-extrabold uppercase text-slate-400 tracking-wider">Active Candle Shape</span>
            
            <div className="py-6">
              <MiniCandle 
                bullish={current.candle.bullish} 
                bodyHeight={current.candle.bodyHeight} 
                wickTop={current.candle.wickTop} 
                wickBottom={current.candle.wickBottom} 
                label={activeVenue.toUpperCase()} 
              />
            </div>

            <div className="text-[10px] font-bold text-slate-500 leading-normal">
              Price consensus is formed by high-volume CEX spot feeds. Avoid reading wicks in isolated pools.
            </div>
          </div>

        </div>

        <MentorInsight 
          text="The goal is not to check every exchange forever. The goal is to avoid trusting one dramatic chart too quickly." 
          analogy="Local ponds. A splash in a tiny garden pond (DEX pool) creates giant waves locally. A splash in a massive lake (CEX spot) barely leaves a ripple. Read the lake, not the garden pond."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 7: Funding and Leverage Can Pressure the Reading
 */
export const CryptoFundingLeveragePressure = () => {
  const [gaugeState, setGaugeState] = useState("neutral");

  const states = {
    longs: {
      title: "Crowded Longs (Elevated Funding)",
      rate: "Funding Rate: +0.08% / 8h",
      desc: "Almost all leverage traders are long. The market is top-heavy. Any small downward wiggle will trigger long liquidations.",
      risk: "Fragile Breakout / Long Squeeze Threat",
      color: "text-rose-600 bg-rose-50 border-rose-100",
      pColor: "bg-rose-500"
    },
    neutral: {
      title: "Stable Leverage (Neutral Funding)",
      rate: "Funding Rate: +0.01% / 8h",
      desc: "Leverage positioning is balanced and spot-led. Breakout structure is healthy and has organic support.",
      risk: "Stable Breakout / Healthy Confluence",
      color: "text-teal-600 bg-teal-50 border-teal-100",
      pColor: "bg-teal-500"
    },
    shorts: {
      title: "Crowded Shorts (Negative Funding)",
      rate: "Funding Rate: -0.05% / 8h",
      desc: "Short positions are heavily crowded. Shorts are paying longs to hold positions. Fragile structure with high squeeze potential.",
      risk: "Short Squeeze Threat / Extreme Volatility",
      color: "text-amber-600 bg-amber-50 border-amber-100",
      pColor: "bg-amber-500"
    }
  };

  const current = states[gaugeState as keyof typeof states];

  return (
    <InstitutionalFrame label="Funding Leverage Gauge" id="CRP-07-FUND">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <div className="space-y-1">
            <span className="text-[10px] font-black text-teal-600 uppercase tracking-widest bg-[#F0FDF4] px-2 py-1 rounded border border-teal-200 inline-block">Funding rate</span>
            <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">Leverage Crowd Monitor</h3>
          </div>
          
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200 shrink-0">
            {Object.keys(states).map((k) => (
              <button
                key={k}
                onClick={() => setGaugeState(k)}
                className={cn(
                  "px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-lg transition-all",
                  gaugeState === k ? "bg-[#071B36] text-white shadow-sm" : "text-slate-600 hover:text-[#071B36]"
                )}
              >
                {k}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Gauge details (Left) */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <span className={cn("px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase border tracking-wider inline-block", current.color)}>
                  {current.title}
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-[8px] font-black uppercase text-slate-400 tracking-wider">Active Cost</span>
                <p className="text-sm font-black text-[#071B36]">{current.rate}</p>
              </div>

              <div className="space-y-1">
                <span className="text-[8px] font-black uppercase text-slate-400 tracking-wider">Description</span>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">{current.desc}</p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-0.5">Reading Quality Log</span>
              <span className="text-xs font-black text-[#071B36]">{current.risk}</span>
            </div>
          </div>

          {/* Gauge Graphic (Right) */}
          <div className="md:col-span-5 bg-white border border-slate-200 rounded-[2.5rem] p-6 flex flex-col justify-between items-center text-center shadow-sm">
            <span className="text-[9px] font-extrabold uppercase text-slate-400 tracking-wider">Leverage Scale Indicator</span>
            
            <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden my-6 border border-slate-200 relative">
              <div 
                className={cn("h-full transition-all duration-500", current.pColor)} 
                style={{ 
                  width: gaugeState === "neutral" ? "50%" : gaugeState === "longs" ? "85%" : "15%" 
                }} 
              />
              <div className="absolute inset-0 flex items-center justify-between px-3 text-[7px] font-black text-slate-600 uppercase">
                <span>Shorts</span>
                <span>Neutral</span>
                <span>Longs</span>
              </div>
            </div>

            <div className="text-[10px] font-bold text-slate-500 leading-normal">
              When leverage is crowded, breakouts are fragile. Audit funding rates to filter high-risk, bloated moves.
            </div>
          </div>

        </div>

        <MentorInsight 
          text="When everyone is leaning on one side of the boat, a tiny wave will capsize it. In crypto, crowded leverage is that top-heavy boat." 
          analogy="A tug-of-war. If 9 people stand on the right side and only 1 on the left, the right side seems guaranteed to win. But if the rope slips even an inch, the 9 people fall flat on their faces in a pile (liquidation cascade)."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 8: Aligned Crypto Evidence vs Mixed Crypto Evidence
 */
export const CryptoAlignedVsMixedEvidence = () => {
  const [activeTab, setActiveTab] = useState("clear");

  const conditions = {
    clear: {
      title: "Clear Aligned Reading",
      badge: "bg-[#F0FDF4] text-teal-700 border-teal-200",
      desc: "All critical layers support the same interpretation. BTC is in a clear trend, spot volume is rising on Coinbase, perp OI rises stable, and the pullback holds support.",
      items: [
        "Altcoin breaks range high cleanly",
        "Bitcoin (BTC) is in a confirmed local uptrend",
        "Spot volume is expanding on Coinbase/Binance Spot",
        "Futures Open Interest is rising healthily (no crowded leverage)",
        "Price pullback holds broken range high successfully"
      ]
    },
    mixed: {
      title: "Mixed Reading (Conflict)",
      badge: "bg-amber-50 text-amber-600 border-amber-100",
      desc: "The altcoin breaks high but BTC is stuck under weekly resistance, spot volume is dry, perp funding is crowded, and price drifts back inside.",
      items: [
        "Altcoin breaks range high, but wick is long",
        "Bitcoin (BTC) is flat/neutral under major resistance",
        "Spot volume is dry and flat on all exchanges",
        "Funding rate is extremely elevated (+0.06%)",
        "First pullback candle closes back inside the range"
      ]
    }
  };

  const current = conditions[activeTab as keyof typeof conditions];

  return (
    <InstitutionalFrame label="Evidence Classification Board" id="CRP-08-ALGN">
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
              Rule: {activeTab === "clear" ? "Wait for verification checkpoint to confirm setup." : "Reduce risk, avoid crowded perp assets, or stay flat."}
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
          text="If your audit requires you to ignore Bitcoin's weakness or make excuses for dry spot volume, you're looking at a Mixed setup. A professional waits for the layouts that fit together without force." 
          analogy="A puzzle. If the pieces fit together smoothly (aligned), you build the picture. If you have to cut the edges and force the pieces in (mixed), the puzzle is broken."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 9: Crypto Verification: What Must Happen Next?
 */
export const CryptoVerificationWorkflow = () => {
  const [activeNode, setActiveNode] = useState(0);

  const workflow = [
    { label: "1. Initial Crypto Evidence", check: "An altcoin breakout candle closes above range high.", desc: "SOL breaks its local range high during high CEX volume. This starts the question, not the trade." },
    { label: "2. Verification Question", check: "Does BTC remain supportive and does spot volume confirm?", desc: "Define verification checkpoint: 'Does price hold above the broken range high on pullback? Does BTC remain stable? Is funding neutral?'" },
    { label: "3. Action Path", check: "Hold outside = Clear read. Return inside = Mixed/unclear.", desc: "If the pullback holds and volume is dry on drop, the read is verified. If it dumps back inside, the break is invalid." }
  ];

  return (
    <InstitutionalFrame label="Crypto Verification Flow" id="CRP-09-WORK">
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
          text="Verification logic is your shield against FOMO. It forces you to ask: 'What does the market have to show me next before I believe this move?' Let the price prove it first." 
          analogy="A post-office package. If the courier leaves a package on your porch (the breakout), you do not claim you have the contents inside until you physically open the box and verify the item is correct (pullback hold)."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 10: Practice Drill: Is This Crypto Reading Clear, Mixed, or Unclear?
 */
export const CryptoEvidenceAuditPracticeDrill = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const scenario = {
    supporting: [
      "Altcoin breaks above its local range resistance high on the hourly chart.",
      "Price candle successfully closes outside the consolidation range."
    ],
    limiting: [
      "Bitcoin is currently flat and trading directly below a major daily resistance zone.",
      "Spot volume on major CEX platforms is dry and unsupportive.",
      "Perp open interest is spiking aggressively with highly positive funding (crowded leverage).",
      "The next candle immediately stalls and starts drifting back inside the range."
    ]
  };

  const options = [
    {
      id: "A",
      text: "Clear bullish reading because the altcoin broke above the range.",
      isCorrect: false,
      feedback: "Incorrect. While the local breakout exists, you cannot classify this as clear when BTC is stuck under resistance, spot confirmation is thin, and the breakout candle is already losing momentum."
    },
    {
      id: "B",
      text: "Mixed evidence because the break happened, but BTC context, spot confirmation, and follow-through are not strong yet.",
      isCorrect: true,
      feedback: "Correct! The evidence is mixed. The local breakout is an active supportive clue, but the flat BTC context, thin spot volume, and stalling follow-through are significant limiting clues that prevent a clear reading."
    },
    {
      id: "C",
      text: "Guaranteed reversal because the next candle stalled.",
      isCorrect: false,
      feedback: "Incorrect. Stalling or drifting back limits reading confidence, but it does not guarantee a reversal. Avoid absolute predictions."
    },
    {
      id: "D",
      text: "Unclear forever because crypto markets cannot be read.",
      isCorrect: false,
      feedback: "Incorrect. Crypto markets can be read systematically, but we must audit the different layers (BTC, spot, perps, and structure) together rather than dismissing them."
    }
  ];

  return (
    <InstitutionalFrame label="Evidence Audit Practice Drill" id="CRP-10-DRILL">
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
                What is the disciplined Crypto evidence-audit reading?
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
          text="Breakouts are exciting, but a crypto breakout without spot volume and with BTC facing resistance is highly fragile. Labeling it as mixed is the only disciplined reading."
          analogy="A security check. If a visitor has an ID (support), but their face doesn't match the photo and their authorization is expired (limiting), you do not let them in. You flag it as mixed."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 11: Debrief: Crypto Reading Requires Market-Layer Evidence
 */
export const CryptoEvidenceAuditDebrief = () => {
  return (
    <InstitutionalFrame label="Crypto Roadway Debrief: Level 0 Summary" id="CRP-11-DEBR">
      <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
        
        <div className="bg-[#071B36] rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 p-6 text-slate-100"><Compass size={120} className="text-teal-400" /></div>
          
          <div className="relative z-10 space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F2D54] border border-[#133F73] text-[10px] font-extrabold text-teal-400 uppercase tracking-[0.25em]">Crypto Track Complete</span>
            <h3 className="text-xl font-black leading-tight uppercase tracking-tight">The Crypto Auditor</h3>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xl font-semibold">
              You have completed the Level 0 Crypto Roadway. You have shifted your mindset from a retail speculator chasing speed to a disciplined crypto auditor. You now understand that a crypto chart is just one piece of a fragmented market, shaped by Bitcoin's gravity, spot/perp volume, liquidation cascades, and verification checkpoints.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <h4 className="text-xs font-black uppercase text-[#071B36] mb-2">1. BTC Gravity Check</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              Always monitor Bitcoin's trend. If BTC structure breaks, altcoins will collapse regardless of local patterns.
            </p>
          </div>
          <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <h4 className="text-xs font-black uppercase text-[#071B36] mb-2">2. Spot Confirmation</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              Verify breakouts on spot exchanges. Do not trust perp leverage movements unless spot volume confirms.
            </p>
          </div>
          <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <h4 className="text-xs font-black uppercase text-[#071B36] mb-2">3. Leverage Audit</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              Monitor funding rates and open interest. Crowded leverage environments are structurally fragile.
            </p>
          </div>
        </div>

        <MentorInsight 
          text="Crypto trading is not about reacting to speed. It's about auditing the quality of the evidence across the fragmented venues. Slow down, check the layers, and let the market verify the path." 
          analogy="A professional navigator. You don't guess if a storm is coming; you read the wind, check the barometer, check the weather radar, and write down the safety checkpoints before leaving the harbor."
        />
      </div>
    </InstitutionalFrame>
  );
};
