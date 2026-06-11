"use client";

import React, { useState } from "react";
import { 
  Target, 
  ArrowRight, 
  TrendingUp, 
  ShieldAlert, 
  CheckCircle2, 
  XCircle, 
  Scale, 
  Percent, 
  Calculator,
  Lock
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { InstitutionalFrame, MentorInsight } from "./shared";

/**
 * 1. RrAnatomy: Visualizes risk vs reward anatomy
 */
export const RrAnatomy = () => {
  return (
    <InstitutionalFrame label="Risk-Reward Anatomy" id="RR-1.4-ANAT">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 space-y-3">
              <span className="text-[9px] font-black uppercase tracking-widest text-teal-600 bg-teal-50 px-2 py-0.5 rounded border border-teal-100 inline-block">
                Expectancy Foundation
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">
                Why R-Feasibility Rules
              </h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                A professional plan prioritizes R-feasibility over prediction. Taking trades with a minimum 2.0R ratio guarantees that wins easily cover losses, protecting your portfolio from the mathematical certainty of drawdowns.
              </p>
            </div>
            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden min-h-[180px]">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
              <div className="space-y-3 relative z-10 text-center flex-1 flex flex-col justify-center">
                <Scale size={32} className="text-teal-400 mx-auto animate-pulse" />
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Core Balance</span>
                <span className="text-xs font-black text-teal-300 uppercase tracking-tight">2.0R Minimum Feasibility Filter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 2. RrRatioScale: Risk-to-Reward Ratio dynamic balance scale.
 */
export const RrRatioScale = () => {
  const [rewardR, setRewardR] = useState<number>(2.5);
  const isValid = rewardR >= 2.0;

  return (
    <InstitutionalFrame label="Risk-Reward Balance Scale" id="RR-1.4-SCL">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          <div className="md:col-span-6 bg-white border border-slate-200 rounded-[2rem] p-6 space-y-6 flex flex-col justify-center shadow-sm">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Configure Reward Ratio</span>
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Planned Reward (R-Multiple)</span>
                <span className={cn("font-mono font-black", isValid ? "text-teal-600" : "text-rose-600")}>{rewardR}R</span>
              </div>
              <input 
                type="range" 
                min="0.5" 
                max="5.0" 
                step="0.5"
                value={rewardR}
                onChange={(e) => setRewardR(parseFloat(e.target.value))}
                className="w-full accent-[#071B36]"
              />
              <span className="text-[9px] font-bold text-slate-400 block">
                Risk unit is fixed at <span className="font-bold text-[#071B36] font-mono">1.0R</span>.
              </span>
            </div>
            
            <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-bold text-slate-600 flex items-start gap-2">
              <span>Feasibility Check: {isValid ? "Passed (2.0R+)" : "Failed (Below 2.0R)"}</span>
            </div>
          </div>

          <div className="md:col-span-6 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
            <div className="space-y-4 relative z-10 w-full h-full flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Expectancy Scale</span>
                <span className={cn(
                  "text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border",
                  isValid ? "bg-teal-950 border-teal-800 text-teal-300" : "bg-rose-950 border-rose-800 text-rose-300"
                )}>
                  {isValid ? "Trade Feasible" : "Trade Rejected"}
                </span>
              </div>

              {/* Graphical Scale representations */}
              <div className="h-32 w-full bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden">
                <div className="flex justify-around items-end h-20 border-b border-slate-800 pb-2">
                  {/* Risk weight */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-rose-950 border border-rose-800 rounded-lg flex items-center justify-center text-xs font-black text-rose-300">
                      1.0R
                    </div>
                    <span className="text-[7px] text-slate-500 font-mono mt-1">RISK</span>
                  </div>

                  {/* Pivot indicator */}
                  <div className="w-1 h-12 bg-slate-800" />

                  {/* Reward weight */}
                  <div className="flex flex-col items-center">
                    <motion.div 
                      animate={{ height: `${12 + rewardR * 12}px` }}
                      className={cn(
                        "w-12 rounded-lg flex items-center justify-center text-xs font-black transition-colors duration-300",
                        isValid ? "bg-teal-950 border border-teal-800 text-teal-300" : "bg-rose-950 border-rose-800 text-rose-300"
                      )}
                    >
                      {rewardR}R
                    </motion.div>
                    <span className="text-[7px] text-slate-500 font-mono mt-1">REWARD</span>
                  </div>
                </div>

                <div className="text-[8px] text-slate-400 font-mono text-center">
                  {isValid 
                    ? "Optimal: Profit potential outweighs risk. Highly viable structure."
                    : "Invalid: Poor risk-to-reward ratio. Do not execute."}
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
 * 3. WinrateVsRr: Interactive visual displaying winrate vs risk-to-reward tradeoffs.
 */
export const WinrateVsRr = () => {
  const [winrate, setWinrate] = useState<number>(40); // in percent
  const requiredReward = ((100 - winrate) / winrate).toFixed(2);

  return (
    <InstitutionalFrame label="Win Rate vs. Required R-Multiple" id="RR-1.4-WNRT">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          <div className="md:col-span-6 bg-white border border-slate-200 rounded-[2rem] p-6 space-y-6 flex flex-col justify-center shadow-sm">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Select Your Strategy Win Rate</span>
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Planned Win Rate (%)</span>
                <span className="font-mono font-black text-teal-600">{winrate}%</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="90" 
                step="5"
                value={winrate}
                onChange={(e) => setWinrate(parseInt(e.target.value))}
                className="w-full accent-[#071B36]"
              />
              <span className="text-[9px] font-bold text-slate-400 block">
                Calculates the minimum average R-multiple required just to break even.
              </span>
            </div>
          </div>

          <div className="md:col-span-6 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
            <div className="space-y-4 relative z-10 text-center flex-1 flex flex-col justify-center">
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Breakeven Reward Requirement</span>
              <h2 className="text-3xl font-black text-teal-400 font-mono tracking-tight">{requiredReward}R</h2>
              <p className="text-[10px] text-slate-400 font-semibold leading-relaxed mt-2">
                At a <span className="text-white">{winrate}% win rate</span>, your winning trades must average at least <span className="text-white">{requiredReward}R</span> to cover your losing trades.
              </p>
            </div>
          </div>

        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 4. ExpectancyCalculator: Interactive expectancy calculator.
 */
export const ExpectancyCalculator = () => {
  const [winrate, setWinrate] = useState<number>(45);
  const [avgWinR, setAvgWinR] = useState<number>(2.5);
  
  const expectancy = ((winrate / 100) * avgWinR - ((100 - winrate) / 100) * 1.0).toFixed(2);
  const isPositive = parseFloat(expectancy) > 0;

  return (
    <InstitutionalFrame label="Expectancy Calculator" id="RR-1.4-EXPC">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Controls */}
          <div className="md:col-span-6 bg-white border border-slate-200 rounded-[2rem] p-6 space-y-4 flex flex-col justify-center shadow-sm">
            <div className="space-y-1.5">
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Strategy Win Rate</span>
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Win Rate</span>
                <span className="font-mono font-black">{winrate}%</span>
              </div>
              <input 
                type="range" 
                min="20" 
                max="80" 
                value={winrate}
                onChange={(e) => setWinrate(parseInt(e.target.value))}
                className="w-full accent-[#071B36]"
              />
            </div>

            <div className="space-y-1.5">
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Average Winning Trade (R)</span>
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Average Win (R)</span>
                <span className="font-mono font-black">{avgWinR}R</span>
              </div>
              <input 
                type="range" 
                min="1.0" 
                max="4.0" 
                step="0.1"
                value={avgWinR}
                onChange={(e) => setAvgWinR(parseFloat(e.target.value))}
                className="w-full accent-[#071B36]"
              />
            </div>
            
            <div className="text-[9px] font-bold text-slate-400 border-t border-slate-100 pt-3">
              * Average losing trade is fixed at <span className="font-mono text-slate-600">1.0R</span>.
            </div>
          </div>

          {/* Result */}
          <div className="md:col-span-6 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
            <div className="space-y-4 relative z-10 text-center flex-1 flex flex-col justify-center">
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Mathematical Expectancy</span>
              <h2 className={cn("text-4xl font-black font-mono tracking-tight", isPositive ? "text-teal-400" : "text-rose-500")}>
                {isPositive ? "+" : ""}{expectancy}R
              </h2>
              <span className={cn(
                "text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded border inline-block mx-auto mt-2",
                isPositive ? "bg-teal-950 border-teal-800 text-teal-300" : "bg-rose-950 border-rose-800 text-rose-300"
              )}>
                {isPositive ? "Edge Verified" : "Negative Edge Warning"}
              </span>
              <p className="text-[10px] text-slate-400 font-semibold leading-relaxed mt-2">
                This strategy will generate an average of <span className="text-white">{expectancy}R profit</span> per trade over a large sample size.
              </p>
            </div>
          </div>

        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 5. RrFeasibilityDrill: Interactive practice component matching the core drill.
 */
export const RrFeasibilityDrill = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  const options = [
    {
      id: "A",
      text: "The R-multiple is 1.5R. The plan must be rejected because it does not meet the minimum 2.0R feasibility threshold.",
      isCorrect: true,
      feedback: "Correct! The R-multiple is $4.50 reward / $3.00 risk = 1.5R. Because this is below the non-negotiable 2.0R feasibility contract, you must reject the setup or wait for a deeper pullback that tightens the risk and expands the R-multiple."
    },
    {
      id: "B",
      text: "The R-multiple is 1.5R. Accept the trade because $4.50 is a solid dollar gain.",
      isCorrect: false,
      feedback: "Incorrect. Taking 1.5R trades requires an unsustainably high win rate to stay profitable over time, violating our systematic rules."
    },
    {
      id: "C",
      text: "The R-multiple is 2.5R. Accept the trade.",
      isCorrect: false,
      feedback: "Incorrect. You calculated the R-multiple incorrectly; reward is $4.50 and risk is $3.00, yielding 1.5R."
    },
    {
      id: "D",
      text: "The R-multiple is 0.67R. Reject the trade.",
      isCorrect: false,
      feedback: "Incorrect. You inverted the risk and reward calculations; R-multiple is reward divided by risk."
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
    <InstitutionalFrame label="Practice Drill: R-Feasibility Audit" id="RR-1.4-DRL" status="DRILL ACTIVE">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm space-y-4">
          <p className="text-xs font-bold text-[#071B36] leading-relaxed">
            You map a long setup on a stock: Entry is at $50.00. Invalidation is at $47.00 ($3.00 risk). The nearest daily resistance zone (structural target) is at $54.50 ($4.50 reward). What is the R-multiple of this plan, and should you accept it?
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
 * 6. RrDebrief: Summary debrief component
 */
export const RrDebrief = () => {
  return (
    <InstitutionalFrame label="Debrief: Feasibility Mastered" id="RR-1.4-DBF">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Summary Box */}
          <div className="md:col-span-7 space-y-4 flex flex-col justify-center">
            <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-teal-50 px-2.5 py-1 rounded border border-teal-200 inline-block">
              Risk Audit Verified
            </span>
            <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">The Mathematical Edge Secured</h3>
            <p className="text-xs text-slate-500 font-semibold leading-relaxed">
              You have completed the core concept of Risk-Reward and Feasibility. You now know that professional trading is built on mathematical expectancy, not chart prediction. By enforcing a strict 2.0R minimum feasibility filter and calculating expectancy, you guarantee that winning trades cover losses.
            </p>
          </div>

          {/* Graphics Display */}
          <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
            <div className="space-y-4 relative z-10">
              <span className="text-[9px] font-mono font-black text-slate-400 uppercase tracking-widest block">System Diagnostics</span>
              <h4 className="text-sm font-black uppercase text-teal-400">Expectancy Verified</h4>
              
              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-[10px] font-mono leading-normal text-teal-400">
                VERDICT: Core risk components resolved. Ready to proceed to Forex, Gold, or Crypto roadway checks.
              </div>
            </div>
          </div>

        </div>
      </div>
    </InstitutionalFrame>
  );
};
