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
  Database,
  Coins
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { InstitutionalFrame, MentorInsight } from "./shared";

/**
 * 1. CryptoTargetFoundations: Orderbooks and Funding Rates
 */
export const CryptoTargetFoundations = () => {
  return (
    <InstitutionalFrame label="Crypto Target Foundations" id="CR-1.3-FND">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 space-y-3">
              <span className="text-[9px] font-black uppercase tracking-widest text-teal-600 bg-teal-50 px-2 py-0.5 rounded border border-teal-100 inline-block">
                Crypto Volatility Gating
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">
                Orderbook Ask Walls and Funding Rate Pressure
              </h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                In cryptocurrency markets, mapping targets requires checking **Orderbook Ask Walls** and **Funding Rate pressure**. Exits must be placed where liquidity pools cluster (e.g., previous Asian session highs/lows or prior day extremes) where massive orders are waiting.
              </p>
            </div>
            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden min-h-[180px]">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
              <div className="space-y-3 relative z-10 text-center flex-1 flex flex-col justify-center">
                <Coins size={32} className="text-teal-400 mx-auto animate-pulse" />
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Crypto Indicator</span>
                <span className="text-xs font-black text-teal-300 uppercase tracking-tight">Ask Wall Gated & Basis Audited</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 2. CryptoAskWallTargets: Targeting orderbook ask walls.
 */
export const CryptoAskWallTargets = () => {
  const [levelOffset, setLevelOffset] = useState<"exact" | "front-run">("front-run");

  return (
    <InstitutionalFrame label="Orderbook Ask Wall Target Mapping" id="CR-1.3-ASK">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="flex justify-center gap-3 mb-2">
          <button
            onClick={() => setLevelOffset("front-run")}
            className={cn(
              "px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              levelOffset === "front-run"
                ? "bg-[#071B36] text-white border-[#071B36]"
                : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            Front-Run Ask Wall (Safe)
          </button>
          <button
            onClick={() => setLevelOffset("exact")}
            className={cn(
              "px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              levelOffset === "exact"
                ? "bg-[#071B36] text-white border-[#071B36]"
                : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            Exactly On Ask Wall (Risky)
          </button>
        </div>

        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            <div className="md:col-span-7 space-y-4">
              <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border border-[#071B36] text-[#071B36] inline-block">
                Ask Walls
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">
                {levelOffset === "front-run" ? "Secure Exit Before Reversal" : "Unfilled at the Block Barrier"}
              </h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                {levelOffset === "front-run"
                  ? "Placing your target $10-$20 below a major BTC ask wall ensures you exit as initial buy orders execute. You secure profits before the momentum is swept and rotates back."
                  : "Placing your target exactly on the ask wall means you must compete with the thickest institutional sell order queues. Often, price will tap the level on some feeds but fail to fill your take-profit order, followed by a sharp drop."}
              </p>
            </div>

            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden min-h-[180px]">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
              <div className="space-y-3 relative z-10 text-center flex-1 flex flex-col justify-center">
                {levelOffset === "front-run" ? (
                  <>
                    <CheckCircle2 size={32} className="text-teal-400 mx-auto" />
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Fill State</span>
                    <span className="text-xs font-black text-teal-300 uppercase tracking-tight">Order Executed Cleanly</span>
                  </>
                ) : (
                  <>
                    <XCircle size={32} className="text-rose-500 mx-auto animate-pulse" />
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Fill State</span>
                    <span className="text-xs font-black text-rose-400 uppercase tracking-tight">Missed, price reversed</span>
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
 * 3. CryptoSpotPerpTargetPeg: Spot vs Perp target overlays.
 */
export const CryptoSpotPerpTargetPeg = () => {
  const [marketType, setMarketType] = useState<"spot" | "perp">("spot");

  return (
    <InstitutionalFrame label="Spot-Perp Target Coordination" id="CR-1.3-PEG">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="flex justify-center gap-3 mb-2">
          <button
            onClick={() => setMarketType("spot")}
            className={cn(
              "px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              marketType === "spot"
                ? "bg-[#071B36] text-white border-[#071B36]"
                : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            Spot Orderbook Focus
          </button>
          <button
            onClick={() => setMarketType("perp")}
            className={cn(
              "px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              marketType === "perp"
                ? "bg-[#071B36] text-white border-[#071B36]"
                : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            Perpetual Futures Focus
          </button>
        </div>

        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            <div className="md:col-span-7 space-y-4">
              <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border border-[#071B36] text-[#071B36] inline-block">
                Basis Divergence
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">
                {marketType === "spot" ? "Real Spot Liquidity Exit" : "Perpetual Contract Premium Exit"}
              </h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                {marketType === "spot"
                  ? "Real money transactions take place on spot markets. Spot orderbook ask walls represent authentic sell pressure that will resist price advances. Plan exits based on spot coordinates."
                  : "Perpetuals track spot via funding rates, but during high volatility, perps can trade at a significant premium or discount (basis divergence). If longing perps, ensure you adjust targets for funding rate fee drag."}
              </p>
            </div>

            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden min-h-[180px]">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
              <div className="space-y-3 relative z-10 text-center flex-1 flex flex-col justify-center">
                {marketType === "spot" ? (
                  <>
                    <Database size={32} className="text-teal-400 mx-auto" />
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Liquidity Layer</span>
                    <span className="text-xs font-black text-teal-300 uppercase tracking-tight">Spot Book Target Locked</span>
                  </>
                ) : (
                  <>
                    <Database size={32} className="text-rose-500 mx-auto animate-pulse" />
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Liquidity Layer</span>
                    <span className="text-xs font-black text-rose-400 uppercase tracking-tight">Perp Premium Mismatch</span>
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
 * 4. CryptoFundingTargetScaling: Volatility and funding rate adjustments.
 */
export const CryptoFundingTargetScaling = () => {
  const [fundingRate, setFundingRate] = useState<number>(0.05); // percent
  const isHigh = fundingRate >= 0.08;

  return (
    <InstitutionalFrame label="Crypto Funding Fee Impact" id="CR-1.3-FNDG">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          <div className="md:col-span-6 bg-white border border-slate-200 rounded-[2rem] p-6 space-y-6 flex flex-col justify-center shadow-sm">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Adjust Funding Rate (per 8h)</span>
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Funding Rate (%)</span>
                <span className={cn("font-mono font-black", isHigh ? "text-rose-600" : "text-teal-600")}>{fundingRate}%</span>
              </div>
              <input 
                type="range" 
                min="0.01" 
                max="0.20" 
                step="0.01"
                value={fundingRate}
                onChange={(e) => setFundingRate(parseFloat(e.target.value))}
                className="w-full accent-[#071B36]"
              />
              <span className="text-[9px] font-bold text-slate-400 block">
                Standard neutral funding is around <span className="font-bold text-[#071B36] font-mono">0.01%</span>.
              </span>
            </div>
            
            <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-bold text-slate-600 flex items-start gap-2">
              <span>{isHigh ? "Dangerous: Holding long positions will drain capital rapidly via funding fees." : "Safe: Low fee drag on open positions."}</span>
            </div>
          </div>

          <div className="md:col-span-6 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Fee Drag State</span>
                <span className={cn(
                  "text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border",
                  isHigh ? "bg-rose-950 border-rose-800 text-rose-300" : "bg-teal-950 border-teal-800 text-teal-300"
                )}>
                  {isHigh ? "High Drag Warning" : "Optimal Drag"}
                </span>
              </div>

              <div className="h-28 w-full bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col justify-center items-center text-center">
                {isHigh ? (
                  <ShieldAlert size={32} className="text-rose-500 mb-2 animate-bounce" />
                ) : (
                  <CheckCircle2 size={32} className="text-teal-400 mb-2" />
                )}
                <span className="text-[10px] text-slate-400 font-semibold block leading-tight">
                  {isHigh 
                    ? "Target must be hit quickly or closed early to avoid severe funding fee decay."
                    : "Position holds can remain open without significant fee decay."}
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
 * 5. CryptoTargetDrillComponent: Practice drill.
 */
export const CryptoTargetDrillComponent = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  const options = [
    {
      id: "A",
      text: "The stop-loss is too wide.",
      isCorrect: false,
      feedback: "Incorrect. A 30-pip stop is standard and structurally sound for GBP/USD."
    },
    {
      id: "B",
      text: "The target is placed beyond the nearest structural barrier (Asian High) and exceeds the daily ADR, requiring an abnormal volatility expansion to succeed.",
      isCorrect: true,
      feedback: "Correct! The Asian High ($1.2740) is the major resistance ceiling. Setting the target at 1.2785 (85 pips away) exceeds both the structural barrier and the daily ADR (75 pips). The plan should front-run the Asian High (target around 1.2737) to ensure high probability, yielding a feasible 1.2R trade, or wait for a breakout plan."
    },
    {
      id: "C",
      text: "The target should be set at exactly 1.2740.",
      isCorrect: false,
      feedback: "Incorrect. Placing the target exactly on the high coordinate increases the risk of a missed fill during a sweep."
    },
    {
      id: "D",
      text: "Longing GBP/USD is invalid when ADR is 75 pips.",
      isCorrect: false,
      feedback: "Incorrect. GBP/USD can be traded at any normal ADR; the error is purely target coordinate selection."
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
    <InstitutionalFrame label="Practice Drill: Crypto Target Audit" id="CR-1.3-DRL" status="DRILL ACTIVE">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm space-y-4">
          <p className="text-xs font-bold text-[#071B36] leading-relaxed">
            You are planning a GBP/USD long: Entry is 1.2700. Invalidation is 1.2670 (30 pips stop). The Asian Session High is at 1.2740. The Daily ADR is 75 pips. You set your take-profit target at 1.2785 (85 pips target) because you want to make a 2.8R trade. What is the critical error in this plan?
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
 * 6. CryptoTargetDebriefComponent: Final summary.
 */
export const CryptoTargetDebriefComponent = () => {
  return (
    <InstitutionalFrame label="Debrief: Safe Crypto Profits" id="CR-1.3-DBF">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 space-y-3">
              <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-teal-50 px-2.5 py-1 rounded border border-teal-200 inline-block">
                Roadway Complete
              </span>
              <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">Structured Crypto Exits</h3>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                You have completed the Crypto roadway for Module 1.3. You have learned that Crypto target mapping requires front-running spot orderbook ask walls, checking Spot-Perp basis divergence, and accounting for Funding Fee drag.
              </p>
            </div>
            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 text-slate-200 flex flex-col justify-center items-center shadow-lg min-h-[180px]">
              <Target size={36} className="text-teal-400 mb-2 animate-bounce" />
              <span className="text-xs font-mono text-teal-400 font-black">CRYPTO EXIT SAFETY MASTERED</span>
            </div>
          </div>
        </div>
      </div>
    </InstitutionalFrame>
  );
};
