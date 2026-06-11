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
  TrendingDown,
  Bitcoin,
  Server,
  AlertOctagon
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { InstitutionalFrame, MentorInsight, UI } from "./shared";

/**
 * 1. CryptoPlanContinuousMarkets: Weekday vs. Weekend spreads
 */
export const CryptoPlanContinuousMarkets = () => {
  const [activeDay, setActiveDay] = useState<"weekday" | "weekend">("weekday");

  const data = {
    weekday: {
      label: "Weekday Active Market",
      volume: "High ($45B/24h)",
      spread: "Tight (0.01% on BTC)",
      slippage: "Low (0.02% average)",
      desc: "Institutional market makers are active. Liquidity is thick. Trend structures are genuine and supported by high volume. Ideal for trade plan executions.",
      statusColor: "text-teal-600 bg-teal-50 border-teal-100",
      status: "ACTIVE PLAN MODE"
    },
    weekend: {
      label: "Weekend Dormant Market",
      volume: "Low ($12B/24h)",
      spread: "Wide (0.08% on BTC)",
      slippage: "Extreme (0.25% average)",
      desc: "Institutional makers go offline. Spreads widen and liquidity thins. Sudden sweeps occur with zero follow-through. High risk of false breakouts.",
      statusColor: "text-rose-600 bg-rose-50 border-rose-100",
      status: "GATED (NO BREAKOUT EXECUTION)"
    }
  };

  const current = data[activeDay];

  return (
    <InstitutionalFrame label="24/7 Market Hour Planning" id="CRY-1.1-TIME">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <p className="text-xs text-slate-500 font-semibold text-center max-w-xl mx-auto">
          Crypto is a 24/7 continuous market. Toggle between Weekdays and Weekends to inspect planning viability.
        </p>

        {/* Day Selector */}
        <div className="flex justify-center gap-3">
          <button
            onClick={() => setActiveDay("weekday")}
            className={cn(
              "px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              activeDay === "weekday"
                ? "bg-[#071B36] text-white border-[#071B36] scale-105"
                : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            Weekday Active (Mon - Fri)
          </button>
          <button
            onClick={() => setActiveDay("weekend")}
            className={cn(
              "px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              activeDay === "weekend"
                ? "bg-[#071B36] text-white border-[#071B36] scale-105"
                : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            Weekend Dormant (Sat - Sun)
          </button>
        </div>

        {/* Display Panel */}
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            {/* Info Side */}
            <div className="md:col-span-7 space-y-4">
              <div className="space-y-1.5">
                <span className={cn("text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border inline-block", current.statusColor)}>
                  {current.status}
                </span>
                <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">{current.label}</h4>
              </div>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                {current.desc}
              </p>
              
              <div className="grid grid-cols-3 gap-2 pt-2">
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-center">
                  <span className="text-[8px] font-black uppercase tracking-wider text-slate-400 block mb-0.5">24h Volume</span>
                  <span className="text-xs font-black text-[#071B36] font-mono">{current.volume}</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-center">
                  <span className="text-[8px] font-black uppercase tracking-wider text-slate-400 block mb-0.5">Bid-Ask Spread</span>
                  <span className={cn("text-xs font-black font-mono", activeDay === "weekend" ? "text-rose-600" : "text-teal-600")}>{current.spread}</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-center">
                  <span className="text-[8px] font-black uppercase tracking-wider text-slate-400 block mb-0.5">Avg Slippage</span>
                  <span className={cn("text-xs font-black font-mono", activeDay === "weekend" ? "text-rose-600" : "text-teal-600")}>{current.slippage}</span>
                </div>
              </div>
            </div>

            {/* Graphic Console */}
            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden min-h-[180px]">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
              <div className="space-y-3 relative z-10 text-center flex-1 flex flex-col justify-center">
                <Server size={32} className="text-teal-400 mx-auto animate-pulse" />
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Liquidity Depth</span>
                  <span className="text-base font-black font-mono text-white tracking-tight">
                    {activeDay === "weekday" ? "Orderbooks Thick" : "Orderbooks Fragile"}
                  </span>
                </div>
              </div>
              <div className="text-[8px] font-mono text-slate-500 text-center border-t border-slate-800 pt-2">
                CONTINUOUS GATING SYSTEM ON
              </div>
            </div>

          </div>
        </div>

        <MentorInsight 
          text="Weekend movements in crypto are highly untrustworthy. Spikes are easily printed with low capital size, only to be completely reversed when institutions return on Monday." 
          analogy="Do not planned to run a marathon (take active breakout plans) in a shopping mall during closed hours (weekends). The doors are locked (no volume) and you will just hit walls."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 2. CryptoLiquidationInvalidation: Stop-loss placement relative to liquidation pools
 */
export const CryptoLiquidationInvalidation = () => {
  const [stopPlacement, setStopPlacement] = useState<"inside" | "below">("below");

  return (
    <InstitutionalFrame label="Liquidation Pool Boundary Check" id="CRY-1.1-LIQ">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <p className="text-xs text-slate-500 font-semibold text-center max-w-xl mx-auto">
          Select stop-loss placement to see how a liquidation cascade affects your trade plan.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-3">
          <button
            onClick={() => setStopPlacement("inside")}
            className={cn(
              "px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              stopPlacement === "inside"
                ? "bg-rose-950 text-rose-200 border-rose-900 scale-105"
                : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            Stop-Loss Inside Pool
          </button>
          <button
            onClick={() => setStopPlacement("below")}
            className={cn(
              "px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              stopPlacement === "below"
                ? "bg-teal-950 text-teal-200 border-teal-900 scale-105"
                : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            Stop-Loss Below Pool (Exhaustion Zone)
          </button>
        </div>

        {/* Display Panel */}
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Info Side */}
            <div className="md:col-span-7 space-y-3">
              <span className={cn(
                "text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border inline-block",
                stopPlacement === "below" ? "bg-teal-50 border-teal-200 text-teal-800" : "bg-rose-50 border-rose-200 text-rose-800"
              )}>
                {stopPlacement === "below" ? "Exhaustion Protected" : "Cascade Exposure"}
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">
                {stopPlacement === "below" ? "Safety Shield Locked" : "Premature Stop-Out Guaranteed"}
              </h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                {stopPlacement === "below"
                  ? "By placing your stop-loss below the liquidation pool ($60,000), you survive the cascade. The market triggers the liquidations, dumps rapidly to $59,800, runs out of sellers (exhaustion), and rotates back up. Your trade survives."
                  : "By placing your stop-loss inside the liquidation pool at $60,050, your order is executed *during* the cascade. The forced selling spikes price down, sweeping your stop before the market exhausts and reverses."}
              </p>
            </div>

            {/* Graphic Side */}
            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden min-h-[185px]">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
              <div className="space-y-3 relative z-10 text-center flex-1 flex flex-col justify-center">
                {stopPlacement === "below" ? (
                  <>
                    <CheckCircle2 size={32} className="text-teal-400 mx-auto animate-bounce" />
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Status</span>
                    <span className="text-xs font-black text-teal-300 uppercase tracking-tight">Exhaustion Safety Locked</span>
                  </>
                ) : (
                  <>
                    <AlertOctagon size={32} className="text-rose-500 mx-auto animate-pulse" />
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Status</span>
                    <span className="text-xs font-black text-rose-400 uppercase tracking-tight">Cascade Exposure Alert</span>
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
 * 3. CryptoSpotPerpComparison: Side-by-side vehicle parameters
 */
export const CryptoSpotPerpComparison = () => {
  return (
    <InstitutionalFrame label="Spot vs. Perpetual Contract Planning" id="CRY-1.1-COMP">
      <div className="w-full max-w-4xl mx-auto space-y-4 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm overflow-x-auto">
          <table className="w-full text-xs font-semibold text-slate-500 min-w-[500px]">
            <thead>
              <tr className="border-b border-slate-200 text-[#071B36] uppercase text-[9px] tracking-wider">
                <th className="pb-3 text-left w-1/3">Feature</th>
                <th className="pb-3 text-left w-1/3">Spot Market Plan</th>
                <th className="pb-3 text-left w-1/3">Perp Contract Plan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3 font-black text-slate-700">Ownership</td>
                <td className="py-3">Actual Asset (Coin)</td>
                <td className="py-3">Derivative Contract</td>
              </tr>
              <tr>
                <td className="py-3 font-black text-slate-700">Leverage</td>
                <td className="py-3">1x (No Leverage)</td>
                <td className="py-3">Up to 100x (High Risk)</td>
              </tr>
              <tr>
                <td className="py-3 font-black text-slate-700">Carrying Costs</td>
                <td className="py-3">Zero Fees</td>
                <td className="py-3">Funding Rates (Every 8h)</td>
              </tr>
              <tr>
                <td className="py-3 font-black text-slate-700">Liquidation Risk</td>
                <td className="py-3">None</td>
                <td className="py-3">Forced Liquidation Sweeps</td>
              </tr>
              <tr>
                <td className="py-3 font-black text-slate-700">Hold Duration</td>
                <td className="py-3">Weeks to Months (Safe)</td>
                <td className="py-3">Short-Term (Intraday/Days)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 4. CryptoFundingTargetMapping: Funding fee estimator
 */
export const CryptoFundingTargetMapping = () => {
  const [leverage, setLeverage] = useState<number>(5);
  const [duration, setDuration] = useState<number>(7); // in days

  const fundingPerDay = 0.003; // 0.1% per 8h = 0.3% per day
  const totalFundingFeePercent = leverage * duration * fundingPerDay * 100;
  const isHighFee = totalFundingFeePercent >= 10;

  return (
    <InstitutionalFrame label="Perp Funding Fee Estimator" id="CRY-1.1-FND">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Controls */}
          <div className="md:col-span-6 bg-white border border-slate-200 rounded-[2rem] p-6 space-y-6 flex flex-col justify-center shadow-sm">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Configure Plan Parameters</span>
            
            {/* Leverage Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Leverage Multiplier</span>
                <span className="font-mono text-[#071B36] font-bold">{leverage}x</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="20" 
                value={leverage}
                onChange={(e) => setLeverage(parseInt(e.target.value))}
                className="w-full accent-[#071B36]"
              />
            </div>

            {/* Duration Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Trade Duration (Days)</span>
                <span className="font-mono text-[#071B36] font-bold">{duration} Days</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="30" 
                value={duration}
                onChange={(e) => setDuration(parseInt(e.target.value))}
                className="w-full accent-[#071B36]"
              />
            </div>
          </div>

          {/* Results Graphic */}
          <div className="md:col-span-6 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-mono font-black text-slate-400 uppercase tracking-widest">Fee Drag Console</span>
                <span className={cn(
                  "text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border",
                  isHighFee ? "bg-rose-950 border-rose-800 text-rose-300 animate-pulse" : "bg-teal-950 border-teal-800 text-teal-300"
                )}>
                  {isHighFee ? "Severe Fee Drag" : "Normal Fee Drag"}
                </span>
              </div>

              {/* Gauge */}
              <div className="text-center py-4 bg-slate-950/80 rounded-2xl border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-1">Estimated Funding Fee Loss</span>
                <span className={cn("text-3xl font-black font-mono tracking-tighter", isHighFee ? "text-rose-500" : "text-teal-400")}>
                  {totalFundingFeePercent.toFixed(1)}%
                </span>
                <span className="text-[9px] text-slate-500 font-bold block mt-1">
                  {isHighFee ? "Warning: Funding fee drag will absorb a massive portion of trade gains." : "Fees are manageable relative to standard price movements."}
                </span>
              </div>
            </div>

            <div className="text-[9px] text-slate-500 font-bold text-center mt-4">
              Assumption: Stable +0.1% Funding rate per 8-hour window.
            </div>
          </div>

        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 5. CryptoPlanValidationDrill: Choice block matching practice card
 */
export const CryptoPlanValidationDrill = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  const options = [
    {
      id: "A",
      text: "The target is too large; ETH cannot move that far in 3 weeks.",
      isCorrect: false,
      feedback: "Incorrect. A target of $200 (around 5.7%) is fully achievable for ETH within a 3-week window."
    },
    {
      id: "B",
      text: "The invalidation is placed inside a liquidation pool where it will be swept, and holding a perp for 3 weeks with high positive funding will cause severe fee drag.",
      isCorrect: true,
      feedback: "Correct! The invalidation checkpoint is placed inside a high-risk liquidation cluster, making a sweep highly likely. Additionally, holding a leveraged perp for 21 days with extreme positive funding will result in massive fee drag (about 9.45% of position value paid in fees), eroding potential profits. The plan should use Spot or a wider stop."
    },
    {
      id: "C",
      text: "The entry price is too high.",
      isCorrect: false,
      feedback: "Incorrect. Entry price level is purely technical; the real issues lie in stop placement and fee drag."
    },
    {
      id: "D",
      text: "The plan lacks technical indicators.",
      isCorrect: false,
      feedback: "Incorrect. Structured planning relies on price structure, liquidation boundaries, and market costs, not indicators."
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
    <InstitutionalFrame label="Crypto Plan Validation Audit" id="CRY-1.1-DRL" status="AUDIT ACTIVE">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
            <Bitcoin size={14} className="text-teal-600" />
            Crypto Case Study
          </div>
          <p className="text-xs font-bold text-[#071B36] leading-relaxed">
            A trader writes a plan to long ETH perp: <span className="italic font-normal">Entry is set at $3,500. Structural low is $3,450. Invalidation is placed at $3,445 (exactly inside a major liquidation pool). Funding rate is currently extremely high positive (+0.15% per 8 hours). The trader plans to hold this position for 3 weeks to hit a target of $3,700.</span> What is the main structural flaw?
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
 * 6. CryptoPlanDebrief: Summary debrief component
 */
export const CryptoPlanDebrief = () => {
  return (
    <InstitutionalFrame label="Debrief: Crypto Plan Locked" id="CRY-1.1-DBF">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Summary Box */}
          <div className="md:col-span-7 space-y-4 flex flex-col justify-center">
            <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-teal-50 px-2.5 py-1 rounded border border-teal-200 inline-block">
              Crypto Pipeline Locked
            </span>
            <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">Structured Derivative Planning</h3>
            <p className="text-xs text-slate-500 font-semibold leading-relaxed">
              You have completed the Crypto roadway for Module 1.1. You now know that crypto planning requires adjusting for 24/7 liquidity variations (avoiding weekend traps), mapping invalidation checkpoints beyond liquidation pools, choosing the correct vehicle (Spot vs. Perps), and auditing funding fees. Crypto is highly dynamic, and a written plan is your only defense against sudden market sweeps.
            </p>
          </div>

          {/* Graphics Display */}
          <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
            <div className="space-y-4 relative z-10">
              <span className="text-[9px] font-mono font-black text-slate-400 uppercase tracking-widest block">Blueprint Status</span>
              <h4 className="text-sm font-black uppercase text-teal-400">Roadway Complete</h4>
              
              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-[10px] font-mono leading-normal text-teal-500">
                VERDICT: Core + Crypto planning components fully resolved. Ready to register visuals and run build checks.
              </div>
            </div>
          </div>

        </div>
        
        <MentorInsight 
          text="Continuous markets create an illusion of constant opportunity. Discipline means ignoring low-liquidity cycles and planning execution parameters strictly around institutional active hours." 
          analogy="A 24-hour convenience store is open, but you don't buy fresh vegetables there at 3:00 AM (weekend liquidity). Wait for the fresh market to open (weekdays) to get high quality."
        />
      </div>
    </InstitutionalFrame>
  );
};
