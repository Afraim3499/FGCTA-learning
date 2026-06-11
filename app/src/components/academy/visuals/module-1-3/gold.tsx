"use client";

import React, { useState } from "react";
import { 
  Target, 
  ArrowRight, 
  TrendingUp, 
  ShieldAlert, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Sliders,
  DollarSign
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { InstitutionalFrame, MentorInsight } from "./shared";

/**
 * 1. GoldTargetFoundations: High ATR and Key Levels
 */
export const GoldTargetFoundations = () => {
  return (
    <InstitutionalFrame label="Gold Target Foundations" id="GD-1.3-FND">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 space-y-3">
              <span className="text-[9px] font-black uppercase tracking-widest text-teal-600 bg-teal-50 px-2 py-0.5 rounded border border-teal-100 inline-block">
                Gold Volatility Gating
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">
                High ATR and Institutional Zones
              </h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                In Gold planning, targets must account for Gold's **high Average True Range (ATR)** and **wick-heavy structures**. Exits must be placed at major Higher-Timeframe (HTF) levels where institutional order blocks reside, rather than arbitrary numbers.
              </p>
            </div>
            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden min-h-[180px]">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
              <div className="space-y-3 relative z-10 text-center flex-1 flex flex-col justify-center">
                <DollarSign size={32} className="text-teal-400 mx-auto animate-pulse" />
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Gold Indicator</span>
                <span className="text-xs font-black text-teal-300 uppercase tracking-tight">ATR Gated & Wick Optimized</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 2. GoldWickTargets: Targeting wick sweeps rather than candle bodies.
 */
export const GoldWickTargets = () => {
  const [targetLevel, setTargetLevel] = useState<"wick" | "body">("wick");

  return (
    <InstitutionalFrame label="Gold Wick Target Mapping" id="GD-1.3-WCK">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="flex justify-center gap-3 mb-2">
          <button
            onClick={() => setTargetLevel("wick")}
            className={cn(
              "px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              targetLevel === "wick"
                ? "bg-[#071B36] text-white border-[#071B36]"
                : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            Target Inside Previous Wick (Safe)
          </button>
          <button
            onClick={() => setTargetLevel("body")}
            className={cn(
              "px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              targetLevel === "body"
                ? "bg-[#071B36] text-white border-[#071B36]"
                : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            Target Beyond Wick Extremes (Risky)
          </button>
        </div>

        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            <div className="md:col-span-7 space-y-4">
              <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border border-[#071B36] text-[#071B36] inline-block">
                Wick Exits
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">
                {targetLevel === "wick" ? "Safe Fill Inside the Spike Range" : "Greedy Missed Fill at Wick Tip"}
              </h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                {targetLevel === "wick"
                  ? "Gold routinely prints long wicks that quickly retreat. Placing your target just below the previous wick peak ensures your limit order is filled during the initial volatility burst before price collapses."
                  : "Placing your target exactly at or past the absolute tip of the previous wick means you need a full breakout expansion. This is low-probability because wicks represent areas where selling pressure is heaviest."}
              </p>
            </div>

            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden min-h-[180px]">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
              <div className="space-y-3 relative z-10 text-center flex-1 flex flex-col justify-center">
                {targetLevel === "wick" ? (
                  <>
                    <CheckCircle2 size={32} className="text-teal-400 mx-auto" />
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Target Status</span>
                    <span className="text-xs font-black text-teal-300 uppercase tracking-tight">Filled inside volatility wick</span>
                  </>
                ) : (
                  <>
                    <XCircle size={32} className="text-rose-500 mx-auto animate-pulse" />
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Target Status</span>
                    <span className="text-xs font-black text-rose-400 uppercase tracking-tight">Missed by $0.80, reversed</span>
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
 * 3. GoldYieldTargetOverlay: US 10-Year Real Treasury Yield overlays.
 */
export const GoldYieldTargetOverlay = () => {
  const [yieldState, setYieldState] = useState<"normal" | "surging">("normal");

  return (
    <InstitutionalFrame label="Treasury Yield Correlation Check" id="GD-1.3-YLD">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="flex justify-center gap-3 mb-2">
          <button
            onClick={() => setYieldState("normal")}
            className={cn(
              "px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              yieldState === "normal"
                ? "bg-[#071B36] text-white border-[#071B36]"
                : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            Real Yields Consolidated (Hold Gold Long)
          </button>
          <button
            onClick={() => setYieldState("surging")}
            className={cn(
              "px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              yieldState === "surging"
                ? "bg-[#071B36] text-white border-[#071B36]"
                : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            Real Yields Surging (Exit Gold Long)
          </button>
        </div>

        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            <div className="md:col-span-7 space-y-4">
              <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border border-[#071B36] text-[#071B36] inline-block">
                Macro Competitor Check
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">
                {yieldState === "normal" ? "Yield Stable: Gold Room to Run" : "Yield Surge: Non-Yielding Gold Drops"}
              </h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                {yieldState === "normal"
                  ? "US Real Yields remain flat or negative. The opportunity cost of holding non-yielding gold is low. The gold long trade has fundamental backing."
                  : "US 10-Year Real Yields breakout past H4 resistance. Government bonds are offering higher guaranteed returns, draining capital out of gold. Close gold long plans immediately to prevent capital drawdown."}
              </p>
            </div>

            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden min-h-[180px]">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
              <div className="space-y-3 relative z-10 text-center flex-1 flex flex-col justify-center">
                {yieldState === "normal" ? (
                  <>
                    <TrendingUp size={32} className="text-teal-400 mx-auto" />
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Gold Health</span>
                    <span className="text-xs font-black text-teal-300 uppercase tracking-tight">Macro Context Safe</span>
                  </>
                ) : (
                  <>
                    <ShieldAlert size={32} className="text-rose-500 mx-auto animate-pulse" />
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Gold Health</span>
                    <span className="text-xs font-black text-rose-400 uppercase tracking-tight">Exit Gold Long immediately</span>
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
 * 4. GoldTargetRanges: Volatility-adjusted position sizing calculator.
 */
export const GoldTargetRanges = () => {
  const [stopDistance, setStopDistance] = useState<number>(4); // dollar distance
  const riskAmount = 100;
  const positionSize = (riskAmount / stopDistance).toFixed(1);

  return (
    <InstitutionalFrame label="Gold Volatility Sizing Calculator" id="GD-1.3-RNG">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          <div className="md:col-span-6 bg-white border border-slate-200 rounded-[2rem] p-6 space-y-6 flex flex-col justify-center shadow-sm">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Calculate Gold Lot Size</span>
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Planned Stop Distance ($)</span>
                <span className="font-mono font-black text-[#071B36]">${stopDistance}</span>
              </div>
              <input 
                type="range" 
                min="2" 
                max="12" 
                value={stopDistance}
                onChange={(e) => setStopDistance(parseInt(e.target.value))}
                className="w-full accent-[#071B36]"
              />
              <span className="text-[9px] font-bold text-slate-400 block">
                Account Risk per Trade: <span className="font-bold text-teal-600 font-mono">${riskAmount}</span>
              </span>
            </div>
            
            <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-bold text-slate-600">
              Formula: Position Size = Account Risk / Stop Distance
            </div>
          </div>

          <div className="md:col-span-6 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
            <div className="space-y-4 relative z-10 text-center flex-1 flex flex-col justify-center">
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Calculated Position Size</span>
              <h2 className="text-3xl font-black text-teal-400 font-mono tracking-tight">{positionSize} Oz</h2>
              <p className="text-[10px] text-slate-400 font-semibold leading-relaxed mt-2">
                As the stop distance increases to absorb volatility, position size scales down, keeping your total capital risk locked at exactly <span className="text-white">${riskAmount}</span>.
              </p>
            </div>
          </div>

        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 5. GoldTargetDrillComponent: Practice drill.
 */
export const GoldTargetDrillComponent = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  const options = [
    {
      id: "A",
      text: "The target is too close.",
      isCorrect: false,
      feedback: "Incorrect. Target details are not provided; the flaw is purely in the risk parameters."
    },
    {
      id: "B",
      text: "A $1.00 stop buffer is far too tight for Gold's volatility profile, making a stop-sweep highly likely, and using a fixed position size ignores volatility-adjusted sizing rules.",
      isCorrect: true,
      feedback: "Correct! A $1.00 stop buffer on Gold is extremely dangerous; normal market noise will easily sweep it. Additionally, failing to scale the position size down based on a proper structural stop buffer ($3.00-$4.00) means a normal sweep will cause a loss far exceeding the planned $100 risk limit."
    },
    {
      id: "C",
      text: "Gold should never be bought at $2,050.",
      isCorrect: false,
      feedback: "Incorrect. The price coordinate is technical; the issue is structure and sizing."
    },
    {
      id: "D",
      text: "The stop-loss should be placed exactly at $2,042.",
      isCorrect: false,
      feedback: "Incorrect. Placing the stop exactly at $2,042 ignores sweep risks, providing zero safety buffer."
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
    <InstitutionalFrame label="Practice Drill: Gold Target Audit" id="GD-1.3-DRL" status="DRILL ACTIVE">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm space-y-4">
          <p className="text-xs font-bold text-[#071B36] leading-relaxed">
            You want to buy Gold (XAU/USD) at $2,050. The H4 structural swing low is at $2,042. The daily ATR is $35 ($3.50 move). You decide to place your stop-loss at $2,041 (a $1.00/10-pip buffer). Your account risk is $100. You execute with a fixed position size based on a tight 10-pip stop. What is the fatal flaw in this plan?
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
              <CheckCircle2 size={16} className="text-teal-600 shrink-0 mt-0.5" />
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
 * 6. GoldTargetDebriefComponent: Summary debrief.
 */
export const GoldTargetDebriefComponent = () => {
  return (
    <InstitutionalFrame label="Debrief: Gold Exit Mastery" id="GD-1.3-DBF">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 space-y-3">
              <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-teal-50 px-2.5 py-1 rounded border border-teal-200 inline-block">
                Roadway Complete
              </span>
              <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">Volatility Gated Gold Exits</h3>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                You have completed the Gold roadway for Module 1.3. You have learned that Gold target mapping requires placing targets just below previous wick spikes, checking real treasury yields, and using volatility-adjusted position sizing.
              </p>
            </div>
            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 text-slate-200 flex flex-col justify-center items-center shadow-lg min-h-[180px]">
              <Target size={36} className="text-teal-400 mb-2 animate-bounce" />
              <span className="text-xs font-mono text-teal-400 font-black">GOLD EXIT SAFETY MASTERED</span>
            </div>
          </div>
        </div>
      </div>
    </InstitutionalFrame>
  );
};
