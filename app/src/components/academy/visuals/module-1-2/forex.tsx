"use client";

import React, { useState } from "react";
import { 
  Compass, 
  Layout, 
  AlertTriangle, 
  CheckCircle2, 
  Info, 
  TrendingUp, 
  ShieldAlert, 
  Sliders,
  CheckCircle,
  XCircle,
  Clock,
  Globe,
  Coins
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { InstitutionalFrame, MentorInsight, UI } from "./shared";

/**
 * 1. ForexInvalidationFoundations: Rollover spreads
 */
export const ForexInvalidationFoundations = () => {
  return (
    <InstitutionalFrame label="Forex Rollover Spread Gating" id="FOR-1.2-ROLL">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Info Side */}
            <div className="md:col-span-7 space-y-3">
              <span className="text-[9px] font-black uppercase tracking-widest text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-100 inline-block">
                Rollover Hour Risk
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">Bid-Ask Spread Spikes</h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                Daily market rollover occurs at 5:00 PM EST. During this low-liquidity window, standard spreads on major pairs can widen by 5x-10x. If your stop-loss sits too close to current price, broker spread widening can trigger your stop automatically, even if the candlestick chart shows price never touched your coordinate.
              </p>
            </div>

            {/* Display Side */}
            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden min-h-[180px]">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
              <div className="space-y-3 relative z-10 text-center flex-1 flex flex-col justify-center">
                <Clock size={32} className="text-rose-400 mx-auto animate-pulse" />
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Time Filter Gating</span>
                  <span className="text-sm font-black text-rose-300 uppercase tracking-tight">Avoid rollover execution</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 2. ForexSpreadSafetyStops: Spread buffer toggle
 */
export const ForexSpreadSafetyStops = () => {
  const [activePair, setActivePair] = useState<"major" | "cross">("major");

  const data = {
    major: {
      pair: "EUR/USD (Major Pair)",
      spread: "0.2 - 0.8 pips",
      rolloverSpread: "3 - 5 pips",
      buffer: "4 pips",
      desc: "High liquidity ensures tight rollover spreads. A safety buffer of 4-5 pips beyond the swing low is sufficient to protect your plan."
    },
    cross: {
      pair: "GBP/JPY (Cross Pair)",
      spread: "1.2 - 2.5 pips",
      rolloverSpread: "8 - 12 pips",
      buffer: "10 pips",
      desc: "Cross currency pairs experience severe liquidity gaps during session handoffs. Stops require at least a 10-pip buffer to survive rollover spread widening."
    }
  };

  const current = data[activePair];

  return (
    <InstitutionalFrame label="Forex Pair Spread Buffer" id="FOR-1.2-PAIR">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <p className="text-xs text-slate-500 font-semibold text-center max-w-xl mx-auto">
          Toggle between Major and Cross pairs to see how stop buffers must scale to protect plans from rollover spreads.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-3">
          <button
            onClick={() => setActivePair("major")}
            className={cn(
              "px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              activePair === "major" ? "bg-[#071B36] text-white border-[#071B36]" : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            Major Pair (EUR/USD)
          </button>
          <button
            onClick={() => setActivePair("cross")}
            className={cn(
              "px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              activePair === "cross" ? "bg-[#071B36] text-white border-[#071B36]" : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            Cross Pair (GBP/JPY)
          </button>
        </div>

        {/* Display Panel */}
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            {/* Info */}
            <div className="md:col-span-7 space-y-4">
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">{current.pair}</h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                {current.desc}
              </p>
              
              <div className="grid grid-cols-3 gap-2">
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-center">
                  <span className="text-[8px] font-black uppercase tracking-wider text-slate-400 block">Normal Spread</span>
                  <span className="text-xs font-black text-slate-700 font-mono">{current.spread}</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-center">
                  <span className="text-[8px] font-black uppercase tracking-wider text-slate-400 block">Rollover Spread</span>
                  <span className="text-xs font-black text-rose-600 font-mono">{current.rolloverSpread}</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-center">
                  <span className="text-[8px] font-black uppercase tracking-wider text-slate-400 block">Stop Buffer</span>
                  <span className="text-xs font-black text-teal-600 font-mono">{current.buffer}</span>
                </div>
              </div>
            </div>

            {/* Graphic Gauge */}
            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden min-h-[180px]">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
              <div className="space-y-3 relative z-10 text-center flex-1 flex flex-col justify-center">
                <Sliders size={32} className="text-teal-400 mx-auto" />
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Safety Buffer Lock</span>
                  <span className="text-base font-black font-mono text-white tracking-tight">
                    {activePair === "major" ? "Buffer: 4 Pips" : "Buffer: 10 Pips"}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 3. ForexDxyInvalidationOverlay: Pair-level vs DXY-level stops
 */
export const ForexDxyInvalidationOverlay = () => {
  const [selectedDxy, setSelectedDxy] = useState<"reject" | "break">("reject");

  return (
    <InstitutionalFrame label="DXY Invalidation Overlay" id="FOR-1.2-DXY">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="flex justify-center gap-3 mb-2">
          <button
            onClick={() => setSelectedDxy("reject")}
            className={cn(
              "px-5 py-2 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              selectedDxy === "reject" ? "bg-[#071B36] text-white border-[#071B36]" : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            DXY Rejects Daily Resistance
          </button>
          <button
            onClick={() => setSelectedDxy("break")}
            className={cn(
              "px-5 py-2 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              selectedDxy === "break" ? "bg-[#071B36] text-white border-[#071B36]" : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            DXY Breakout Above Resistance
          </button>
        </div>

        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Info */}
            <div className="md:col-span-7 space-y-3">
              <span className={cn(
                "text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border inline-block",
                selectedDxy === "reject" ? "bg-teal-50 border-teal-200 text-teal-800" : "bg-rose-50 border-rose-200 text-rose-800"
              )}>
                {selectedDxy === "reject" ? "Alignment Verified" : "Thesis Invalidated"}
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">
                {selectedDxy === "reject" ? "Long Setup Alignment Active" : "DXY Breakout: Exit Longs Immediately"}
              </h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                {selectedDxy === "reject"
                  ? "DXY is rejecting resistance, confirming dollar weakness. This supports your EUR/USD long plan, keeping the setup active and healthy."
                  : "DXY has broken key resistance, demonstrating market-wide dollar strength. Because your EUR/USD long plan relies on dollar weakness, this DXY breakout invalidates the macro context. Exit the trade immediately."}
              </p>
            </div>

            {/* Display Side */}
            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden min-h-[180px]">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
              <div className="space-y-3 relative z-10 text-center flex-1 flex flex-col justify-center">
                {selectedDxy === "reject" ? (
                  <>
                    <TrendingUp size={32} className="text-teal-400 mx-auto" />
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Macro Status</span>
                    <span className="text-xs font-black text-teal-300 uppercase tracking-tight">Weak USD Supports EUR/USD</span>
                  </>
                ) : (
                  <>
                    <ShieldAlert size={32} className="text-rose-500 mx-auto animate-pulse" />
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Macro Status</span>
                    <span className="text-xs font-black text-rose-400 uppercase tracking-tight">Strong DXY Invalidates Setup</span>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 4. ForexAdrStopScaling: ADR vs stop size pips
 */
export const ForexAdrStopScaling = () => {
  const [stopDistance, setStopDistance] = useState<number>(15);

  const adr = 80;
  const percentOfAdr = ((stopDistance / adr) * 100).toFixed(0);
  const isTooTight = stopDistance < 10;

  return (
    <InstitutionalFrame label="Forex ADR Stop Feasibility Check" id="FOR-1.2-ADR">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Controls */}
          <div className="md:col-span-6 bg-white border border-slate-200 rounded-[2rem] p-6 space-y-6 flex flex-col justify-center shadow-sm">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Configure Stop Size</span>
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Stop-Loss Distance (Pips)</span>
                <span className={cn("font-mono font-black", isTooTight ? "text-rose-600 animate-pulse" : "text-teal-600")}>
                  {stopDistance} pips
                </span>
              </div>
              <input 
                type="range" 
                min="5" 
                max="40" 
                value={stopDistance}
                onChange={(e) => setStopDistance(parseInt(e.target.value))}
                className="w-full accent-[#071B36]"
              />
              <span className="text-[9px] font-bold text-slate-400 block">
                Active Daily ADR of this pair is <span className="font-mono text-[#071B36] font-bold">{adr} pips</span>.
              </span>
            </div>
          </div>

          {/* Results Graphic */}
          <div className="md:col-span-6 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">ADR Stop Check</span>
                <span className={cn(
                  "text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border",
                  isTooTight ? "bg-rose-950 border-rose-800 text-rose-300" : "bg-teal-950 border-teal-800 text-teal-300"
                )}>
                  {isTooTight ? "Noise Exposure" : "Noise Safe"}
                </span>
              </div>

              {/* Gauge */}
              <div className="text-center py-4 bg-slate-950/80 rounded-2xl border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-1">Stop % of Daily ADR</span>
                <span className={cn("text-3xl font-black font-mono tracking-tighter", isTooTight ? "text-rose-500" : "text-teal-400")}>
                  {percentOfAdr}%
                </span>
                <span className="text-[9px] text-slate-500 font-bold block mt-1">
                  {isTooTight ? "Stop is too tight! Will be swept by normal session noise." : "Stop distance is scaled to handle normal daily volatility."}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 5. ForexInvalidationDrillComponent: Practice drill
 */
export const ForexInvalidationDrillComponent = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  const options = [
    {
      id: "A",
      text: "The stop-loss is too wide; it should be placed at 0.8560.",
      isCorrect: false,
      feedback: "Incorrect. Placing the stop at 0.8560 would put it inside the swing structure, making it highly vulnerable to normal fluctuations."
    },
    {
      id: "B",
      text: "EUR/GBP is a cross pair, and rollover spread widening will easily exceed the tight 2-pip buffer, causing a premature stop-out.",
      isCorrect: true,
      feedback: "Correct! EUR/GBP is a cross pair, and rollover spreads routinely widen to 4-6 pips at 5:00 PM EST. A tight 2-pip buffer beyond the swing high is highly likely to be triggered by spread widening alone, even if price doesn't break structure. The plan must include a wider buffer (at least 6-8 pips) or avoid rollover execution."
    },
    {
      id: "C",
      text: "The target is too close.",
      isCorrect: false,
      feedback: "Incorrect. Target details are not provided; the fatal error lies in the stop-loss buffer during rollover."
    },
    {
      id: "D",
      text: "Shorting EUR/GBP is always invalid during NY close.",
      isCorrect: false,
      feedback: "Incorrect. Trading is allowed, but the risk parameters must accommodate rollover liquidity conditions."
    }
  ];

  const handleSelect = (id: string) => {
    setSelectedOption(id);
    setShowFeedback(true);
  };

  const handleReset = () => {
    setSelectedOption(null);
    setShowFeedback(false);
  };

  const selectedData = options.find(o => o.id === selectedOption);

  return (
    <InstitutionalFrame label="Forex Invalidation Audit" id="FOR-1.2-DRL" status="AUDIT ACTIVE">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
            <Globe size={14} className="text-teal-600" />
            Forex Case Study
          </div>
          <p className="text-xs font-bold text-[#071B36] leading-relaxed">
            You are planning a EUR/GBP short: Entry is set at 0.8550. The H1 swing high is at 0.8570. You place the Invalidation Checkpoint (stop-loss) at 0.8572 (2 pips buffer). The pair's ADR is 50 pips. The session rollover is occurring in 10 minutes. What is the critical error in this plan?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt.id)}
              disabled={showFeedback}
              className={cn(
                "p-4 rounded-2xl border text-left text-xs font-semibold transition-all duration-300 shadow-sm",
                selectedOption === opt.id
                  ? opt.isCorrect
                    ? "bg-teal-50 border-teal-500 text-teal-900 ring-2 ring-teal-100"
                    : "bg-rose-50 border-rose-500 text-rose-900 ring-2 ring-rose-100"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-60"
              )}
            >
              <div className="flex gap-3 items-start">
                <span className={cn(
                  "w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-[10px] font-black border",
                  selectedOption === opt.id
                    ? opt.isCorrect
                      ? "bg-teal-500 border-teal-600 text-white"
                      : "bg-rose-500 border-rose-600 text-white"
                    : "bg-slate-100 border-slate-200 text-slate-500"
                )}>
                  {opt.id}
                </span>
                <span className="leading-snug">{opt.text}</span>
              </div>
            </button>
          ))}
        </div>

        {showFeedback && selectedData && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "p-4 rounded-2xl border text-xs font-semibold leading-relaxed flex items-start gap-3 shadow-sm",
              selectedData.isCorrect 
                ? "bg-teal-50 border-teal-200 text-teal-900" 
                : "bg-rose-50 border-rose-200 text-rose-900"
            )}
          >
            {selectedData.isCorrect ? (
              <CheckCircle size={16} className="text-teal-600 shrink-0 mt-0.5" />
            ) : (
              <XCircle size={16} className="text-rose-600 shrink-0 mt-0.5" />
            )}
            <div className="space-y-1">
              <span className="font-black uppercase tracking-wider block">
                {selectedData.isCorrect ? "Correct Audit Verdict" : "Incorrect Audit Verdict"}
              </span>
              <p className="text-slate-600 font-semibold">{selectedData.feedback}</p>
            </div>
            {selectedOption && (
              <button 
                onClick={handleReset}
                className="ml-auto px-3 py-1 bg-white border border-slate-200 rounded-lg text-[9px] font-black uppercase tracking-wider hover:bg-slate-50 transition-colors shadow-sm shrink-0"
              >
                Reset
              </button>
            )}
          </motion.div>
        )}
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 6. ForexInvalidationDebriefComponent: Final debrief summary
 */
export const ForexInvalidationDebriefComponent = () => {
  return (
    <InstitutionalFrame label="Debrief: Forex Stops Locked" id="FOR-1.2-DBF">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Summary Box */}
          <div className="md:col-span-7 space-y-4 flex flex-col justify-center">
            <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-teal-50 px-2.5 py-1 rounded border border-teal-200 inline-block">
              Forex Invalidation Complete
            </span>
            <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">Structured Currency Invalidation</h3>
            <p className="text-xs text-slate-500 font-semibold leading-relaxed">
              You have completed the Forex roadway for Module 1.2. You now understand that securing your Forex invalidation checkpoint requires scaling buffers to match session rollover spreads, checking DXY index structures, and adjusting stop pips to pair ADRs. A Forex plan is only robust if it protects your account from transaction noise and broker spread spikes. Next, we will check the Gold roadway.
            </p>
          </div>

          {/* Graphics Display */}
          <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
            <div className="space-y-4 relative z-10">
              <span className="text-[9px] font-mono font-black text-slate-400 uppercase tracking-widest block">Blueprint Status</span>
              <h4 className="text-sm font-black uppercase text-teal-400">Roadway Complete</h4>
              
              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-[10px] font-mono leading-normal text-teal-500">
                VERDICT: Core + Forex invalidation components fully resolved. Ready to proceed to Gold track checks.
              </div>
            </div>
          </div>

        </div>
      </div>
    </InstitutionalFrame>
  );
};
