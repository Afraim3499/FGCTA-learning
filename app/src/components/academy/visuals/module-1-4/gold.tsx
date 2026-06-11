"use client";

import React, { useState } from "react";
import { 
  Target, 
  ArrowRight, 
  TrendingUp, 
  ShieldAlert, 
  CheckCircle2, 
  XCircle, 
  Zap,
  DollarSign
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { InstitutionalFrame, MentorInsight } from "./shared";

/**
 * 1. GoldRrFoundations: Volatility and Leverage
 */
export const GoldRrFoundations = () => {
  return (
    <InstitutionalFrame label="Gold Risk-Reward Foundations" id="GD-1.4-FND">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 space-y-3">
              <span className="text-[9px] font-black uppercase tracking-widest text-teal-600 bg-teal-50 px-2 py-0.5 rounded border border-teal-100 inline-block">
                Gold Volatility Gating
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">
                Volatility Sizing and Slippage
              </h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                In Gold planning, achieving a valid R-multiple requires dynamic lot sizing based on ATR volatility and utilizing limit entries to prevent execution slippage. High slippage on market orders can corrupt planned risk parameters instantly.
              </p>
            </div>
            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden min-h-[180px]">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
              <div className="space-y-3 relative z-10 text-center flex-1 flex flex-col justify-center">
                <DollarSign size={32} className="text-teal-400 mx-auto animate-pulse" />
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Gold Indicator</span>
                <span className="text-xs font-black text-teal-300 uppercase tracking-tight">ATR Gated & Limit Protected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 2. GoldLeverageSizing: Dynamic Lot Sizing
 */
export const GoldLeverageSizing = () => {
  const [stopDistance, setStopDistance] = useState<number>(5); // in dollars
  const riskAmount = 150;
  const lotSize = (riskAmount / (stopDistance * 100)).toFixed(2);

  return (
    <InstitutionalFrame label="Gold Dynamic Position Sizing" id="GD-1.4-SIZ">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          <div className="md:col-span-6 bg-white border border-slate-200 rounded-[2rem] p-6 space-y-6 flex flex-col justify-center shadow-sm">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Adjust Stop Distance ($)</span>
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Stop Distance</span>
                <span className="font-mono font-black text-teal-600">${stopDistance.toFixed(2)}</span>
              </div>
              <input 
                type="range" 
                min="2.0" 
                max="15.0" 
                step="0.5"
                value={stopDistance}
                onChange={(e) => setStopDistance(parseFloat(e.target.value))}
                className="w-full accent-[#071B36]"
              />
              <span className="text-[9px] font-bold text-slate-400 block">
                Account risk per trade is locked at <span className="font-bold text-[#071B36] font-mono">${riskAmount}</span>.
              </span>
            </div>
            
            <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-bold text-slate-600">
              Formula: Lots = Risk / (Stop * 100)
            </div>
          </div>

          <div className="md:col-span-6 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
            <div className="space-y-4 relative z-10 text-center flex-1 flex flex-col justify-center">
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Calculated Lot Size</span>
              <h2 className="text-4xl font-black text-teal-400 font-mono tracking-tight">{lotSize} Lots</h2>
              <p className="text-[10px] text-slate-400 font-semibold leading-relaxed mt-2">
                Exposure: <span className="text-white">{(parseFloat(lotSize) * 100).toFixed(0)} Ounces</span>. Risk is held stable at <span className="text-white">${riskAmount}</span>.
              </p>
            </div>
          </div>

        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 3. GoldSpreadSlippage: Slippage friction
 */
export const GoldSpreadSlippage = () => {
  const [slippage, setSlippage] = useState<number>(1.0); // in dollars
  const stopDistance = 5.0;
  const targetDistance = 12.0;

  const actualStop = stopDistance + slippage;
  const actualTarget = targetDistance - slippage;
  const actualR = (actualTarget / actualStop).toFixed(2);
  const isValid = parseFloat(actualR) >= 2.0;

  return (
    <InstitutionalFrame label="Gold Execution Slippage Impact" id="GD-1.4-SLP">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          <div className="md:col-span-6 bg-white border border-slate-200 rounded-[2rem] p-6 space-y-6 flex flex-col justify-center shadow-sm">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Adjust Execution Slippage ($)</span>
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Slippage</span>
                <span className={cn("font-mono font-black", isValid ? "text-teal-600" : "text-rose-600")}>${slippage.toFixed(2)}</span>
              </div>
              <input 
                type="range" 
                min="0.0" 
                max="3.0" 
                step="0.5"
                value={slippage}
                onChange={(e) => setSlippage(parseFloat(e.target.value))}
                className="w-full accent-[#071B36]"
              />
              <span className="text-[9px] font-bold text-slate-400 block">
                Standard theoretical plan: <span className="font-mono text-slate-600">$5.00 stop / $12.00 target (2.4R)</span>.
              </span>
            </div>
          </div>

          <div className="md:col-span-6 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
            <div className="space-y-4 relative z-10 text-center flex-1 flex flex-col justify-center">
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Friction-Adjusted Reward Ratio</span>
              <h2 className={cn("text-4xl font-black font-mono tracking-tight", isValid ? "text-teal-400" : "text-rose-500")}>
                {actualR}R
              </h2>
              <span className={cn(
                "text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border inline-block mx-auto mt-2",
                isValid ? "bg-teal-950 border-teal-800 text-teal-300" : "bg-rose-950 border-rose-800 text-rose-300"
              )}>
                {isValid ? "Plan Feasible" : "Rejected: Excess Slippage"}
              </span>
              <p className="text-[10px] text-slate-400 font-semibold leading-relaxed mt-2">
                Friction: Net stop is <span className="text-white">${actualStop.toFixed(2)}</span>, Net target is <span className="text-white">${actualTarget.toFixed(2)}</span>.
              </p>
            </div>
          </div>

        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 4. GoldRealYieldsRr: Limit vs Market comparison.
 */
export const GoldRealYieldsRr = () => {
  return (
    <InstitutionalFrame label="Limit vs Market Execution on Gold" id="GD-1.4-COMP">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            <div className="md:col-span-6 space-y-4">
              <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border border-[#071B36] text-[#071B36] inline-block">
                Limit Entry Plan
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">Guaranteed Price, High Fill Quality</h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                指値注文 (Limit Order) は指定した価格以下でのみ約定を保証します。スリッページが発生せず、事前のリスク・リワード設計（R倍数）を完全に維持できますが、価格が急激に動く場合は約定しないリスクがあります。
              </p>
            </div>

            <div className="md:col-span-6 space-y-4 border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-6">
              <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border border-rose-600 text-rose-600 bg-rose-50 inline-block">
                Market Entry Plan
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">Instant Fill, Slippage Vulnerability</h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                成行注文 (Market Order) は即時約定を保証しますが、価格は保証されません。ボラティリティの高いゴールド市場では、$1〜$3のスリッページが頻繁に発生し、計画した損切り位置が広がり、R倍数が破壊されます。
              </p>
            </div>

          </div>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 5. GoldRrDrillComponent: Practice drill.
 */
export const GoldRrDrillComponent = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  const options = [
    {
      id: "A",
      text: "Lot size is 0.30 lots. The plan meets feasibility at 2.4R.",
      isCorrect: true,
      feedback: "Correct! Lot size = $150 / ($5.00 * 100) = 0.30 lots (30 ounces). The R-multiple is $12.00 reward / $5.00 risk = 2.4R, which exceeds the 2.0R threshold, making the plan highly feasible and mathematically sound."
    },
    {
      id: "B",
      text: "Lot size is 3.0 lots. The plan meets feasibility at 2.4R.",
      isCorrect: false,
      feedback: "Incorrect. 3.0 standard lots controls 300 ounces; a $5.00 stop would result in a $1,500 loss, which is 10 times your planned risk."
    },
    {
      id: "C",
      text: "Lot size is 0.30 lots. Reject the trade because 2.4R is too low.",
      isCorrect: false,
      feedback: "Incorrect. 2.4R exceeds the minimum 2.0R requirement; rejecting it is illogical."
    },
    {
      id: "D",
      text: "Lot size is 0.03 lots. The plan is unfeasible.",
      isCorrect: false,
      feedback: "Incorrect. 0.03 lots represents only 3 ounces; your loss would be $15, which under-allocates your planned risk."
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
    <InstitutionalFrame label="Practice Drill: Gold Sizing Audit" id="GD-1.4-DRL" status="DRILL ACTIVE">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm space-y-4">
          <p className="text-xs font-bold text-[#071B36] leading-relaxed">
            You want to long Gold: Entry limit is at $2,000. Stop-loss is at $1,995 ($5.00 risk). Target limit is at $2,012 ($12.00 reward). Account risk is $150. What is the correct lot size to execute, and does the plan meet the 2.0R feasibility threshold?
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
 * 6. GoldRrDebriefComponent: Final summary.
 */
export const GoldRrDebriefComponent = () => {
  return (
    <InstitutionalFrame label="Debrief: Gold Position Controls" id="GD-1.4-DBF">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 space-y-3">
              <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-teal-50 px-2.5 py-1 rounded border border-teal-200 inline-block">
                Roadway Complete
              </span>
              <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">Sizing Gated Gold Exits</h3>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                You have completed the Gold roadway for Module 1.4. You have learned that Gold target mapping requires placing targets just below previous wick spikes, checking real treasury yields, and using volatility-adjusted position sizing.
              </p>
            </div>
            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 text-slate-200 flex flex-col justify-center items-center shadow-lg min-h-[180px]">
              <Target size={36} className="text-teal-400 mb-2 animate-bounce" />
              <span className="text-xs font-mono text-teal-400 font-black">GOLD RISK MASTERED</span>
            </div>
          </div>
        </div>
      </div>
    </InstitutionalFrame>
  );
};
