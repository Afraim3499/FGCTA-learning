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
 * 1. ForexRrFoundations: Volatility gating and leverage
 */
export const ForexRrFoundations = () => {
  return (
    <InstitutionalFrame label="Forex Risk-Reward Foundations" id="FX-1.4-FND">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 space-y-3">
              <span className="text-[9px] font-black uppercase tracking-widest text-teal-600 bg-teal-50 px-2 py-0.5 rounded border border-teal-100 inline-block">
                Forex Cost Friction
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">
                Leverage and Spread Friction
              </h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                In Forex planning, R-multiples are heavily eroded by broker transaction costs (Spreads & Commissions). A plan must audit these frictions, as high spreads on tight intraday stops can drop a theoretical 2.0R trade to 1.5R.
              </p>
            </div>
            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden min-h-[180px]">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
              <div className="space-y-3 relative z-10 text-center flex-1 flex flex-col justify-center">
                <Zap size={32} className="text-teal-400 mx-auto animate-pulse" />
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Cost Guard</span>
                <span className="text-xs font-black text-teal-300 uppercase tracking-tight">Friction Audited & Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 2. ForexLeverageMath: Sizing with leverage.
 */
export const ForexLeverageMath = () => {
  const [leverage, setLeverage] = useState<number>(30); // e.g. 30:1
  const accountSize = 2000;
  const marginRequired = (100000 / leverage).toFixed(0);

  return (
    <InstitutionalFrame label="Forex Leverage and Margin Calculator" id="FX-1.4-LEV">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          <div className="md:col-span-6 bg-white border border-slate-200 rounded-[2rem] p-6 space-y-6 flex flex-col justify-center shadow-sm">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Set Broker Leverage</span>
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Leverage Ratio</span>
                <span className="font-mono font-black text-teal-600">{leverage}:1</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="100" 
                step="10"
                value={leverage}
                onChange={(e) => setLeverage(parseInt(e.target.value))}
                className="w-full accent-[#071B36]"
              />
              <span className="text-[9px] font-bold text-slate-400 block">
                Calculates the cash deposit (margin) required to open 1 Standard Lot ($100,000).
              </span>
            </div>
          </div>

          <div className="md:col-span-6 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
            <div className="space-y-4 relative z-10 text-center flex-1 flex flex-col justify-center">
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Required Margin</span>
              <h2 className="text-3xl font-black text-teal-400 font-mono tracking-tight">${marginRequired}</h2>
              <p className="text-[10px] text-slate-400 font-semibold leading-relaxed mt-2">
                At <span className="text-white">{leverage}:1 leverage</span>, you must lock <span className="text-white">${marginRequired}</span> of your capital as margin to hold a $100,000 position.
              </p>
            </div>
          </div>

        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 3. ForexSpreadRrDecay: Interactive spread decay visual.
 */
export const ForexSpreadRrDecay = () => {
  const [spreadPips, setSpreadPips] = useState<number>(1.5);
  const stopPips = 10;
  const targetPips = 20;

  const actualStop = stopPips + spreadPips;
  const actualTarget = targetPips - spreadPips;
  const actualR = (actualTarget / actualStop).toFixed(2);
  const isValid = parseFloat(actualR) >= 2.0;

  return (
    <InstitutionalFrame label="Forex Spread Decay Impact" id="FX-1.4-DCY">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          <div className="md:col-span-6 bg-white border border-slate-200 rounded-[2rem] p-6 space-y-6 flex flex-col justify-center shadow-sm">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Adjust Broker Spread</span>
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Spread (Pips)</span>
                <span className={cn("font-mono font-black", isValid ? "text-teal-600" : "text-rose-600")}>{spreadPips} pips</span>
              </div>
              <input 
                type="range" 
                min="0.0" 
                max="4.0" 
                step="0.5"
                value={spreadPips}
                onChange={(e) => setSpreadPips(parseFloat(e.target.value))}
                className="w-full accent-[#071B36]"
              />
              <span className="text-[9px] font-bold text-slate-400 block">
                Standard theoretical plan: <span className="font-mono text-slate-600">10-pip stop / 20-pip target (2.0R)</span>.
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
                {isValid ? "Acceptable Feasibility" : "Rejected: Too Much Decay"}
              </span>
              <p className="text-[10px] text-slate-400 font-semibold leading-relaxed mt-2">
                Friction: Net stop is <span className="text-white">{actualStop} pips</span>, Net target is <span className="text-white">{actualTarget} pips</span>.
              </p>
            </div>
          </div>

        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 4. ForexCommissionCosts: standard ECN vs Standard ECN comparison.
 */
export const ForexCommissionCosts = () => {
  return (
    <InstitutionalFrame label="Standard vs ECN Account Comparison" id="FX-1.4-COMP">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            <div className="md:col-span-6 space-y-4">
              <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border border-[#071B36] text-[#071B36] inline-block">
                Standard Account
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">Zero Commission, Wide Spread</h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                標準口座 (Standard Account) では手数料は無料ですが、スプレッドが1.5〜3.0pipsと広く設定されています。これにより、デイトレードのようなタイトなトレードプランでは、スプレッドの摩擦によって期待値（R倍数）が大幅に低下してしまいます。
              </p>
            </div>

            <div className="md:col-span-6 space-y-4 border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-6">
              <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border border-teal-600 text-teal-600 bg-teal-50 inline-block">
                Raw / ECN Account
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">Flat Commission, Raw Spread</h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                ECN口座では、スプレッドが0.0〜0.5pipsと極めて狭く提供される代わりに、1ロットあたり定額の手数料（例：往復 $7）が請求されます。デイトレーダーにとっては、スプレッドによるR倍数減衰を防ぎ、優位性を確保するための必須の口座タイプです。
              </p>
            </div>

          </div>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 5. ForexRrDrillComponent: Practice drill.
 */
export const ForexRrDrillComponent = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  const options = [
    {
      id: "A",
      text: "Exactly 2.0R, because fees do not affect structural pips.",
      isCorrect: false,
      feedback: "Incorrect. Broker spread and commissions represent direct financial costs that widen your risk and shrink your reward."
    },
    {
      id: "B",
      text: "Approximately 1.5R. The spread and commission add 2.0 pips of friction, reducing the net reward to 18 pips and widening the net risk to 12 pips (18 / 12 = 1.5R).",
      isCorrect: true,
      feedback: "Correct! The broker spread (1.5 pips) and commission (0.5 pips) add a total of 2.0 pips of friction. In a long trade, this increases your actual entry price and reduces your exit price, turning a theoretical 2.0R trade ($20 reward / $10 risk) into a net 1.5R trade ($18 / $12). The plan must be modified to meet the 2.0R threshold."
    },
    {
      id: "C",
      text: "Exactly 1.8R, because commissions are negligible.",
      isCorrect: false,
      feedback: "Incorrect. You must sum both spread and commission to get the total friction (2.0 pips)."
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
    <InstitutionalFrame label="Practice Drill: Forex Cost Audit" id="FX-1.4-DRL" status="DRILL ACTIVE">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm space-y-4">
          <p className="text-xs font-bold text-[#071B36] leading-relaxed">
            You want to long EUR/USD: Entry is 1.0900, stop-loss is 1.0890 (10 pips risk), target is 1.0920 (20 pips reward). The broker spread is 1.5 pips. You pay a round-turn commission equivalent to 0.5 pips. What is your actual, net R-multiple?
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
 * 6. ForexRrDebriefComponent: Final summary.
 */
export const ForexRrDebriefComponent = () => {
  return (
    <InstitutionalFrame label="Debrief: Forex Cost Controls" id="FX-1.4-DBF">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 space-y-3">
              <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-teal-50 px-2.5 py-1 rounded border border-teal-200 inline-block">
                Roadway Complete
              </span>
              <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">Friction Gated Forex Exits</h3>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                You have completed the Forex roadway for Module 1.4. You have learned that planning currency R-multiples requires calculating leverage, auditing spread size, and choosing direct ECN accounts to minimize friction.
              </p>
            </div>
            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 text-slate-200 flex flex-col justify-center items-center shadow-lg min-h-[180px]">
              <Target size={36} className="text-teal-400 mb-2 animate-bounce" />
              <span className="text-xs font-mono text-teal-400 font-black">COST SAFETY LOCKED</span>
            </div>
          </div>
        </div>
      </div>
    </InstitutionalFrame>
  );
};
