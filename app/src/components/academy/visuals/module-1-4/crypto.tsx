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
  Coins
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { InstitutionalFrame, MentorInsight } from "./shared";

/**
 * 1. CryptoRrFoundations: Volatility and Leverage
 */
export const CryptoRrFoundations = () => {
  return (
    <InstitutionalFrame label="Crypto Risk-Reward Foundations" id="CR-1.4-FND">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 space-y-3">
              <span className="text-[9px] font-black uppercase tracking-widest text-teal-600 bg-teal-50 px-2 py-0.5 rounded border border-teal-100 inline-block">
                Crypto Cost Friction
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">
                Leverage, Depth, and Fees
              </h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                In cryptocurrency markets, planning R-multiples requires checking orderbook liquidity depth (slippage risk) and perp funding rate fee drag. High leverage enables size, but holding leveraged positions over multiple sessions decays target profit levels.
              </p>
            </div>
            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden min-h-[180px]">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
              <div className="space-y-3 relative z-10 text-center flex-1 flex flex-col justify-center">
                <Coins size={32} className="text-teal-400 mx-auto animate-pulse" />
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Crypto Indicator</span>
                <span className="text-xs font-black text-teal-300 uppercase tracking-tight">Depth Gated & Basis Audited</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 2. CryptoLeverageSizing: Leverage sizing math.
 */
export const CryptoLeverageSizing = () => {
  const [leverage, setLeverage] = useState<number>(20);
  const riskAmount = 100;
  const marginRequired = (5000 / leverage).toFixed(0);

  return (
    <InstitutionalFrame label="Crypto Leverage and Margin Sizing" id="CR-1.4-LEV">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          <div className="md:col-span-6 bg-white border border-slate-200 rounded-[2rem] p-6 space-y-6 flex flex-col justify-center shadow-sm">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Set Position Leverage</span>
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Leverage Ratio</span>
                <span className="font-mono font-black text-teal-600">{leverage}x</span>
              </div>
              <input 
                type="range" 
                min="5" 
                max="50" 
                step="5"
                value={leverage}
                onChange={(e) => setLeverage(parseInt(e.target.value))}
                className="w-full accent-[#071B36]"
              />
              <span className="text-[9px] font-bold text-slate-400 block">
                Calculates margin required to control a $5,000 position.
              </span>
            </div>
          </div>

          <div className="md:col-span-6 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
            <div className="space-y-4 relative z-10 text-center flex-1 flex flex-col justify-center">
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Required Margin</span>
              <h2 className="text-3xl font-black text-teal-400 font-mono tracking-tight">${marginRequired}</h2>
              <p className="text-[10px] text-slate-400 font-semibold leading-relaxed mt-2">
                At <span className="text-white">{leverage}x leverage</span>, you lock <span className="text-white">${marginRequired}</span> of collateral to hold a $5,000 contract value.
              </p>
            </div>
          </div>

        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 3. CryptoSlippageDepth: Slippage impact based on orderbook depth.
 */
export const CryptoSlippageDepth = () => {
  const [slippagePercent, setSlippagePercent] = useState<number>(0.5);
  const stopPercent = 2.0;
  const targetPercent = 5.0;

  const actualStop = stopPercent + slippagePercent;
  const actualTarget = targetPercent - slippagePercent;
  const actualR = (actualTarget / actualStop).toFixed(2);
  const isValid = parseFloat(actualR) >= 2.0;

  return (
    <InstitutionalFrame label="Crypto Orderbook Slippage Impact" id="CR-1.4-SLP">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          <div className="md:col-span-6 bg-white border border-slate-200 rounded-[2rem] p-6 space-y-6 flex flex-col justify-center shadow-sm">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Adjust Book Execution Slippage (%)</span>
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Slippage</span>
                <span className={cn("font-mono font-black", isValid ? "text-teal-600" : "text-rose-600")}>{slippagePercent}%</span>
              </div>
              <input 
                type="range" 
                min="0.0" 
                max="1.5" 
                step="0.25"
                value={slippagePercent}
                onChange={(e) => setSlippagePercent(parseFloat(e.target.value))}
                className="w-full accent-[#071B36]"
              />
              <span className="text-[9px] font-bold text-slate-400 block">
                Standard theoretical plan: <span className="font-mono text-slate-600">2.0% stop / 5.0% target (2.5R)</span>.
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
                {isValid ? "Plan Feasible" : "Rejected: Too Much Slippage"}
              </span>
              <p className="text-[10px] text-slate-400 font-semibold leading-relaxed mt-2">
                Friction: Net stop is <span className="text-white">{actualStop.toFixed(2)}%</span>, Net target is <span className="text-white">{actualTarget.toFixed(2)}%</span>.
              </p>
            </div>
          </div>

        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 4. CryptoFundingRatesDecay: Spot vs Perp comparison.
 */
export const CryptoFundingRatesDecay = () => {
  return (
    <InstitutionalFrame label="Spot vs Perp Venues on Crypto" id="CR-1.4-COMP">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            <div className="md:col-span-6 space-y-4">
              <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border border-[#071B36] text-[#071B36] inline-block">
                Spot Market Account
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">Zero Holding Fees, Higher Commission</h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                現物取引 (Spot Market) では、ポジションを保有し続けても金利コスト（ファンディング手数料）が発生しません。数週間〜数ヶ月保有するスイングトレードに適しており、強気相場における手数料の減衰（ドラッグ）を回避できます。
              </p>
            </div>

            <div className="md:col-span-6 space-y-4 border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-6">
              <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border border-teal-600 text-teal-600 bg-teal-50 inline-block">
                Perpetual Futures (Perps)
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">Leverage Efficiency, Dynamic Funding Rates</h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                無期限先物 (Perpetual Futures) は少額の資金でレバレッジ取引を行えますが、8時間ごとにファンディング資金が発生します。特に強気市場でロングを長期保有すると金利支払いが積み重なり、R倍数を蝕みます。
              </p>
            </div>

          </div>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 5. CryptoRrDrillComponent: Practice drill.
 */
export const CryptoRrDrillComponent = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  const options = [
    {
      id: "A",
      text: "Exactly 2.0R, because fees do not affect structural prices.",
      isCorrect: false,
      feedback: "Incorrect. Broker fees and funding rates represent direct financial costs that widen your risk and shrink your reward."
    },
    {
      id: "B",
      text: "Approximately 1.5R. The funding rate and transaction fees add $200 of friction, reducing the net reward to $1,800 and widening the net risk to $1,200 ($1,800 / $1,200 = 1.5R).",
      isCorrect: true,
      feedback: "Correct! The funding fee drag ($180) and transaction fees ($20) add a total of $200 of friction. In a long trade, this increases your actual entry price and reduces your exit price, turning a theoretical 2.0R trade ($2,000 reward / $1,000 risk) into a net 1.5R trade ($1,800 / $1,200). The plan must be modified to meet the 2.0R threshold."
    },
    {
      id: "C",
      text: "Exactly 1.8R, because funding rates are negligible.",
      isCorrect: false,
      feedback: "Incorrect. You must sum both funding rates and transaction fees to get the total friction ($200)."
    },
    {
      id: "D",
      text: "0.67R, because the trade is unfeasible.",
      isCorrect: false,
      feedback: "Incorrect. The R-multiple is 1.5R, which is unfeasible under our 2.0R rules, but 0.67R is mathematically incorrect."
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
    <InstitutionalFrame label="Practice Drill: Crypto Cost Audit" id="CR-1.4-DRL" status="DRILL ACTIVE">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm space-y-4">
          <p className="text-xs font-bold text-[#071B36] leading-relaxed">
            You want to long BTC/USDT perp: Entry is $60,000, stop-loss is $59,000 ($1,000 risk), target is $62,000 ($2,000 reward). The perp funding rate is 0.05% per 8h. You plan to hold the trade for 2 days (6 funding cycles). Total funding drag is $180. The broker fee is $20. What is your actual, net R-multiple?
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
 * 6. CryptoRrDebriefComponent: Final summary.
 */
export const CryptoRrDebriefComponent = () => {
  return (
    <InstitutionalFrame label="Debrief: Crypto Cost Controls" id="CR-1.4-DBF">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 space-y-3">
              <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-teal-50 px-2.5 py-1 rounded border border-teal-200 inline-block">
                Roadway Complete
              </span>
              <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">Structured Crypto Exits</h3>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                You have completed the Crypto roadway for Module 1.4. You have learned that Crypto target mapping requires front-running spot orderbook ask walls, checking Spot-Perp basis divergence, and accounting for Funding Fee drag.
              </p>
            </div>
            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 text-slate-200 flex flex-col justify-center items-center shadow-lg min-h-[180px]">
              <Target size={36} className="text-teal-400 mb-2 animate-bounce" />
              <span className="text-xs font-mono text-teal-400 font-black">CRYPTO RISK MASTERED</span>
            </div>
          </div>
        </div>
      </div>
    </InstitutionalFrame>
  );
};
