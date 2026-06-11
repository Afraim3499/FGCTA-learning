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
  Database,
  Clock
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { InstitutionalFrame, MentorInsight, UI } from "./shared";

/**
 * 1. CryptoInvalidationFoundations: Liquidation cascades
 */
export const CryptoInvalidationFoundations = () => {
  return (
    <InstitutionalFrame label="Crypto Liquidation Cascade Safety" id="CRY-1.2-LIQ">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Info Side */}
            <div className="md:col-span-7 space-y-3">
              <span className="text-[9px] font-black uppercase tracking-widest text-teal-600 bg-teal-50 px-2 py-0.5 rounded border border-teal-100 inline-block">
                Leverage Pool Hunts
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">Forced Liquidation Cascades</h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                Crypto markets are heavily leveraged. When price hits clusters of leveraged stops, it triggers cascading liquidation orders that accelerate price moves. A valid Crypto plan must locate these liquidation pools and place stops beyond the exhaustion line.
              </p>
            </div>

            {/* Display Side */}
            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden min-h-[180px]">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
              <div className="space-y-3 relative z-10 text-center flex-1 flex flex-col justify-center">
                <Database size={32} className="text-teal-400 mx-auto animate-pulse" />
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">System Diagnostics</span>
                  <span className="text-sm font-black text-teal-300 uppercase tracking-tight">Cascade Safety Zones Locked</span>
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
 * 2. CryptoSpotPerpStopDivergence: Spot vs Perp chart wicks
 */
export const CryptoSpotPerpStopDivergence = () => {
  const [activeTab, setActiveTab] = useState<"spot" | "perp">("perp");

  return (
    <InstitutionalFrame label="Spot vs. Perp Stop Divergence" id="CRY-1.2-DIVE">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="flex justify-center gap-3 mb-2">
          <button
            onClick={() => setActiveTab("spot")}
            className={cn(
              "px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              activeTab === "spot" ? "bg-[#071B36] text-white border-[#071B36]" : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            Spot Index Chart
          </button>
          <button
            onClick={() => setActiveTab("perp")}
            className={cn(
              "px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              activeTab === "perp" ? "bg-[#071B36] text-white border-[#071B36]" : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            Perpetual Contract Chart
          </button>
        </div>

        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Info */}
            <div className="md:col-span-7 space-y-3">
              <span className={cn(
                "text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border inline-block",
                activeTab === "spot" ? "bg-teal-50 border-teal-200 text-teal-800" : "bg-rose-50 border-rose-200 text-rose-800"
              )}>
                {activeTab === "spot" ? "Standard Spot Pricing" : "Derivatives Liquidation Pricing"}
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">
                {activeTab === "spot" ? "Basis Price Pegged" : "Liquidation Wicks Active"}
              </h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                {activeTab === "spot"
                  ? "Coinbase or Binance Spot charts represent actual coin ownership. Under normal conditions, they track other exchanges closely. However, they lack leverage liquidation wicks because spot markets cannot be liquidated."
                  : "Perpetual contract charts are traded using high leverage. During volatility events, cascading liquidations print sharp, local wicks that pierce key support levels by dozens of dollars. Your stops must be mapped using this chart."}
              </p>
            </div>

            {/* Display Side */}
            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden min-h-[180px]">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
              <div className="space-y-3 relative z-10 text-center flex-1 flex flex-col justify-center">
                <Server size={32} className="text-teal-400 mx-auto" />
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Execution Chart</span>
                  <span className="text-sm font-black text-white uppercase tracking-tight">
                    {activeTab === "spot" ? "Using Spot Index Data" : "Using Perp Liquidation Data"}
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
 * 3. CryptoWeekendVsWeekdayStops: Weekend range deviations
 */
export const CryptoWeekendVsWeekdayStops = () => {
  const [activeDay, setActiveDay] = useState<"weekday" | "weekend">("weekday");

  return (
    <InstitutionalFrame label="Crypto Weekend Liquidity Check" id="CRY-1.2-WEEK">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="flex justify-center gap-3 mb-2">
          <button
            onClick={() => setActiveDay("weekday")}
            className={cn(
              "px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              activeDay === "weekday" ? "bg-[#071B36] text-white border-[#071B36]" : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            Weekday Active
          </button>
          <button
            onClick={() => setActiveDay("weekend")}
            className={cn(
              "px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              activeDay === "weekend" ? "bg-[#071B36] text-white border-[#071B36]" : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            Weekend Dormant
          </button>
        </div>

        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Info */}
            <div className="md:col-span-7 space-y-3">
              <span className={cn(
                "text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border inline-block",
                activeDay === "weekday" ? "bg-teal-50 border-teal-200 text-teal-800" : "bg-rose-50 border-rose-200 text-rose-800"
              )}>
                {activeDay === "weekday" ? "Institutional Active" : "Retail Speculation noise"}
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">
                {activeDay === "weekday" ? "Weekday Orderbook Thickness" : "Weekend Liquidity Thinning"}
              </h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                {activeDay === "weekday"
                  ? "Standard weekday trading has heavy volume from institutional market makers. Trend breakouts are supported by real transactions. You can use standard tight stop buffers."
                  : "Weekend volume is extremely thin. Small transactions trigger large swings, creating false breakouts designed to sweep retail orders. Stops require wider buffers to survive the noise."}
              </p>
            </div>

            {/* Display */}
            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden min-h-[180px]">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
              <div className="space-y-3 relative z-10 text-center flex-1 flex flex-col justify-center">
                <Clock size={32} className="text-teal-400 mx-auto" />
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Liquidity Gating</span>
                  <span className="text-sm font-black text-white uppercase tracking-tight">
                    {activeDay === "weekday" ? "Use standard stops" : "Use wide stop buffers"}
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
 * 4. CryptoFundingRiskStops: Funding fee drag calculator
 */
export const CryptoFundingRiskStops = () => {
  const [leverage, setLeverage] = useState<number>(5);
  const [duration, setDuration] = useState<number>(7); // in days

  const fundingPerDay = 0.003; // 0.1% per 8h
  const feePercent = leverage * duration * fundingPerDay * 100;
  const isHigh = feePercent >= 10;

  return (
    <InstitutionalFrame label="Crypto Funding Fee Impact" id="CRY-1.2-FUND">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Controls */}
          <div className="md:col-span-6 bg-white border border-slate-200 rounded-[2rem] p-6 space-y-6 flex flex-col justify-center shadow-sm">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Configure Leverage & Hold Time</span>
            
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

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Position Duration (Days)</span>
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
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Fee Decay Console</span>
                <span className={cn(
                  "text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border",
                  isHigh ? "bg-rose-950 border-rose-800 text-rose-300" : "bg-teal-950 border-teal-800 text-teal-300"
                )}>
                  {isHigh ? "Severe Fee Drag" : "Normal Fee Drag"}
                </span>
              </div>

              {/* Gauge */}
              <div className="text-center py-4 bg-slate-950/80 rounded-2xl border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-1">Estimated Collateral Loss</span>
                <span className={cn("text-3xl font-black font-mono tracking-tighter", isHigh ? "text-rose-500" : "text-teal-400")}>
                  {feePercent.toFixed(1)}%
                </span>
                <span className="text-[9px] text-slate-500 font-bold block mt-1">
                  {isHigh ? "Warning: High funding cost erodes margin, pulling liquidation price closer." : "Fee carry costs are acceptable for this setup duration."}
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
 * 5. CryptoInvalidationDrillComponent: Practice drill
 */
export const CryptoInvalidationDrillComponent = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  const options = [
    {
      id: "A",
      text: "The target is too close.",
      isCorrect: false,
      feedback: "Incorrect. A target of $300 (around 9.3%) is reasonable for a 2-week ETH swing trade."
    },
    {
      id: "B",
      text: "The invalidation is placed inside a liquidation pool where it will be swept in a cascade, and holding a perp for 14 days with +0.1% funding will result in massive fee drag (about 4.2% of position size), eroding your margin and moving your liquidation price closer.",
      isCorrect: true,
      feedback: "Correct! Placing your stop inside the liquidation pool makes it highly vulnerable to cascades. Furthermore, holding a leveraged perp for 14 days under extreme positive funding conditions incurs massive fee drag, which erodes your account margin and risks premature liquidation. The plan should use Spot assets or a wider stop."
    },
    {
      id: "C",
      text: "ETH should never be bought when funding is positive.",
      isCorrect: false,
      feedback: "Incorrect. Positive funding is normal in bull markets; the issue is the high fee cost of long-term leverage."
    },
    {
      id: "D",
      text: "The stop-loss should be placed at $3,151 to minimize loss size.",
      isCorrect: false,
      feedback: "Incorrect. Placing a stop at $3,151 puts it above the structural low, ensuring a premature exit on normal noise."
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
    <InstitutionalFrame label="Crypto Invalidation Audit" id="CRY-1.2-DRL" status="AUDIT ACTIVE">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
            <Bitcoin size={14} className="text-teal-600" />
            Crypto Case Study
          </div>
          <p className="text-xs font-bold text-[#071B36] leading-relaxed">
            You want to long ETH perp: Entry is $3,200. Target is $3,500. Structural low is $3,150. You place your stop-loss (Invalidation) at $3,145 (exactly inside a major liquidation pool). The funding rate is extremely positive (+0.1% per 8 hours). You plan to hold this trade for 2 weeks. What is the critical error in this plan?
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
 * 6. CryptoInvalidationDebriefComponent: Final debrief summary
 */
export const CryptoInvalidationDebriefComponent = () => {
  return (
    <InstitutionalFrame label="Debrief: Crypto Invalidation Complete" id="CRY-1.2-DBF">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Summary Box */}
          <div className="md:col-span-7 space-y-4 flex flex-col justify-center">
            <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-teal-50 px-2.5 py-1 rounded border border-teal-200 inline-block">
              Crypto Invalidation Complete
            </span>
            <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">Structured Derivative Invalidation</h3>
            <p className="text-xs text-slate-500 font-semibold leading-relaxed">
              You have completed the Crypto roadway for Module 1.2. You now know that crypto invalidation requires mapping stop-losses beyond leverage liquidation pools, utilizing the correct chart vehicle (Spot vs. Perps), planning for weekend liquidity thinning, and auditing funding rate margin decay. A written plan is your only shield in the volatile crypto space. Next, we will index these files.
            </p>
          </div>

          {/* Graphics Display */}
          <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
            <div className="space-y-4 relative z-10">
              <span className="text-[9px] font-mono font-black text-slate-400 uppercase tracking-widest block">Blueprint Status</span>
              <h4 className="text-sm font-black uppercase text-teal-400">Roadway Complete</h4>
              
              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-[10px] font-mono leading-normal text-teal-500">
                VERDICT: Core + Crypto invalidation components fully resolved. Ready to create indexes and visual registries.
              </div>
            </div>
          </div>

        </div>
      </div>
    </InstitutionalFrame>
  );
};
