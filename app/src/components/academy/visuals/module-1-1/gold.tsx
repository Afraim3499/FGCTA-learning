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
  LineChart
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { InstitutionalFrame, MentorInsight, UI } from "./shared";

/**
 * 1. GoldPlanVolatilityProfile: ATR scaling compared to EUR/USD
 */
export const GoldPlanVolatilityProfile = () => {
  const [activeAsset, setActiveAsset] = useState<"eurusd" | "gold">("gold");

  const data = {
    eurusd: {
      name: "EUR/USD Currency Pair",
      atr: "70 pips",
      stop: "15 pips",
      target: "45 pips",
      riskLabel: "Quiet/Steady",
      multiplier: "1x Size",
      notes: "Standard currency volatility. Narrow stops are safe because price rarely prints massive isolated wicks during normal sessions."
    },
    gold: {
      name: "Gold (XAU/USD)",
      atr: "250 pips ($25.00 move)",
      stop: "60 pips ($6.00 move)",
      target: "180 pips ($18.00 move)",
      riskLabel: "Aggressive Expansion",
      multiplier: "0.25x Size",
      notes: "Extreme gold volatility. Stop distance must be widened by 4x. Position size must be reduced by 75% to keep capital risk identical."
    }
  };

  const current = data[activeAsset];

  return (
    <InstitutionalFrame label="Gold Volatility Scaling" id="GLD-1.1-VOL">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <p className="text-xs text-slate-500 font-semibold text-center max-w-xl mx-auto">
          Gold requires volatility scaling. Toggle between EUR/USD and Gold to see how stop distance and size must adapt.
        </p>

        {/* Selector Buttons */}
        <div className="flex justify-center gap-3">
          <button
            onClick={() => setActiveAsset("eurusd")}
            className={cn(
              "px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              activeAsset === "eurusd"
                ? "bg-[#071B36] text-white border-[#071B36] scale-105"
                : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            EUR/USD (Forex)
          </button>
          <button
            onClick={() => setActiveAsset("gold")}
            className={cn(
              "px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              activeAsset === "gold"
                ? "bg-[#071B36] text-white border-[#071B36] scale-105"
                : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            Gold (XAU/USD)
          </button>
        </div>

        {/* Display Panel */}
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            {/* Info Side */}
            <div className="md:col-span-7 space-y-4">
              <div className="space-y-1.5">
                <span className={cn(
                  "text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border inline-block",
                  activeAsset === "gold" ? "bg-amber-50 border-amber-200 text-amber-800" : "bg-teal-50 border-teal-200 text-teal-800"
                )}>
                  {current.riskLabel} Profile
                </span>
                <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">{current.name}</h4>
              </div>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                {current.notes}
              </p>
              
              <div className="grid grid-cols-3 gap-2 pt-2">
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-center">
                  <span className="text-[8px] font-black uppercase tracking-wider text-slate-400 block mb-0.5">Daily ATR</span>
                  <span className="text-xs font-black text-[#071B36] font-mono">{current.atr}</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-center">
                  <span className="text-[8px] font-black uppercase tracking-wider text-slate-400 block mb-0.5">Stop-Loss</span>
                  <span className="text-xs font-black text-rose-600 font-mono">{current.stop}</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-center">
                  <span className="text-[8px] font-black uppercase tracking-wider text-slate-400 block mb-0.5">Position Size</span>
                  <span className="text-xs font-black text-teal-600 font-mono">{current.multiplier}</span>
                </div>
              </div>
            </div>

            {/* Scale Gauge Side */}
            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden min-h-[180px]">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
              <div className="space-y-3 relative z-10 text-center flex-1 flex flex-col justify-center">
                <Sliders size={32} className="text-amber-400 mx-auto animate-pulse" />
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Volatility Adjuster</span>
                  <span className="text-base font-black font-mono text-white tracking-tight">
                    {activeAsset === "gold" ? "Stop Distance: +400%" : "Stop Distance: Baseline"}
                  </span>
                </div>
              </div>
              <div className="text-[8px] font-mono text-slate-500 text-center border-t border-slate-800 pt-2">
                EQUAL RISK MULTIPLIER ENFORCED
              </div>
            </div>

          </div>
        </div>

        <MentorInsight 
          text="Wider stops do not mean higher risk, provided you scale your position size down accordingly. If you risk $100 per trade, a 15-pip stop on EUR/USD and a 60-pip stop on Gold both risk exactly $100." 
          analogy="A small shield (tight stop) is fine for a water pistol fight (Forex noise). You need a brick wall (wide stop) to survive a cannonball blast (Gold sweep)."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 2. GoldWickInvalidationBuffer: Invalidation sweep buffer
 */
export const GoldWickInvalidationBuffer = () => {
  const [buffer, setBuffer] = useState<number>(1); // in dollars ($)

  const isValid = buffer >= 3;

  return (
    <InstitutionalFrame label="Gold Stop Sweep Buffer" id="GLD-1.1-SWP">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Controls (Left) */}
          <div className="md:col-span-6 bg-white border border-slate-200 rounded-[2rem] p-6 space-y-6 flex flex-col justify-center shadow-sm">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Configure Stop Buffer</span>
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Stop-Loss Buffer Below Lows</span>
                <span className={cn("font-mono font-black", isValid ? "text-teal-600" : "text-rose-600")}>${buffer.toFixed(2)}</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="6" 
                step="0.5"
                value={buffer}
                onChange={(e) => setBuffer(parseFloat(e.target.value))}
                className="w-full accent-[#071B36]"
              />
              <span className="text-[9px] font-bold text-slate-400 block">
                Recommended Gold stop-sweep buffer is <span className="font-bold text-[#071B36] font-mono">$3.00 - $4.00</span> (30-40 pips) below structural lows.
              </span>
            </div>
          </div>

          {/* Graphic Side */}
          <div className="md:col-span-6 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:24px_24px]" />
            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Wick Sweep Simulation</span>
                <span className={cn(
                  "text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border",
                  isValid ? "bg-teal-950 border-teal-800 text-teal-300" : "bg-rose-950 border-rose-800 text-rose-300"
                )}>
                  {isValid ? "Protected" : "Sweep Trap"}
                </span>
              </div>

              {/* Graphic Candle Wick representing stop hunts */}
              <div className="h-32 w-full bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden">
                {/* Structural Low */}
                <div className="absolute left-0 right-0 top-1/3 border-t border-slate-700 border-dashed z-0 flex justify-between px-2">
                  <span className="text-[6px] font-mono text-slate-400 -mt-2">STRUCTURAL LOW LOW ($2,320)</span>
                </div>

                {/* Stop Line */}
                <div 
                  className="absolute left-0 right-0 border-t transition-all duration-300 z-10 flex justify-between px-2"
                  style={{ top: `${33 + buffer * 10}%` }}
                >
                  <span className={cn("text-[6px] font-mono -mt-2.5", isValid ? "text-teal-400" : "text-rose-500")}>
                    STOP-LOSS LEVEL ($2,320 - ${buffer.toFixed(2)})
                  </span>
                </div>

                <div className="text-[7px] text-slate-500 font-mono mt-auto relative z-20">
                  {isValid 
                    ? "Safe: Stop-loss is positioned beyond the standard Gold wick spike corridor ($2-$2.50)."
                    : "Dangerous: Gold sweeps routinely exceed $2.00. Your stop lies directly in the trap zone."}
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
 * 3. GoldYieldUsdOverlay: Yield & USD context checking matrix
 */
export const GoldYieldUsdOverlay = () => {
  const [yields, setYields] = useState<"surging" | "declining">("declining");
  const [dxy, setDxy] = useState<"surging" | "declining">("declining");

  const isBullishGold = yields === "declining" && dxy === "declining";
  const isBearishGold = yields === "surging" && dxy === "surging";

  const getVerdict = () => {
    if (isBullishGold) {
      return {
        label: "BULLISH ALIGNMENT (HIGH PROBABILITY)",
        color: "bg-teal-50 border-teal-200 text-teal-800",
        desc: "EXCELLENT: Real yields and DXY are both declining. Opposing pressure on Gold is entirely removed, creating a massive wind at your back for long setups."
      };
    }
    if (isBearishGold) {
      return {
        label: "BEARISH PRESSURE (LONG SETUP BLOCKED)",
        color: "bg-rose-50 border-rose-200 text-rose-800",
        desc: "CRITICAL: Yields are rising and DXY is surging. Capital is escaping into bonds and paper cash. Long setups have extremely low probability. Scrap the long plan."
      };
    }
    return {
      label: "MIXED CONTEXT (FILTER REQUIRED)",
      color: "bg-amber-50 border-amber-200 text-amber-800",
      desc: "WARNING: Divergence between Yields and DXY. Yields might be dropping while DXY rises. Gold is caught in a range. Proceed only at major daily locations with reduced size."
    };
  };

  const verdict = getVerdict();

  return (
    <InstitutionalFrame label="Gold Macro Context Overlay" id="GLD-1.1-MAC">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Controls Panel (Left) */}
          <div className="md:col-span-6 bg-white border border-slate-200 rounded-[2rem] p-6 space-y-4 flex flex-col justify-center shadow-sm">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Audit Macro Context</span>
            
            {/* Real Yields Toggle */}
            <div className="space-y-1.5">
              <span className="text-[9px] font-black text-slate-500 uppercase tracking-wider block">1. US Real Treasury Yields</span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setYields("surging")}
                  className={cn(
                    "p-2 rounded-lg border text-[10px] font-black uppercase transition-all",
                    yields === "surging" ? "bg-[#071B36] text-white border-[#071B36]" : "bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100"
                  )}
                >
                  Surging Yields
                </button>
                <button
                  onClick={() => setYields("declining")}
                  className={cn(
                    "p-2 rounded-lg border text-[10px] font-black uppercase transition-all",
                    yields === "declining" ? "bg-[#071B36] text-white border-[#071B36]" : "bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100"
                  )}
                >
                  Declining Yields
                </button>
              </div>
            </div>

            {/* DXY Toggle */}
            <div className="space-y-1.5">
              <span className="text-[9px] font-black text-slate-500 uppercase tracking-wider block">2. US Dollar Index (DXY)</span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setDxy("surging")}
                  className={cn(
                    "p-2 rounded-lg border text-[10px] font-black uppercase transition-all",
                    dxy === "surging" ? "bg-[#071B36] text-white border-[#071B36]" : "bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100"
                  )}
                >
                  Surging USD
                </button>
                <button
                  onClick={() => setDxy("declining")}
                  className={cn(
                    "p-2 rounded-lg border text-[10px] font-black uppercase transition-all",
                    dxy === "declining" ? "bg-[#071B36] text-white border-[#071B36]" : "bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100"
                  )}
                >
                  Declining USD
                </button>
              </div>
            </div>
          </div>

          {/* Matrix Recommendation Console (Right) */}
          <div className="md:col-span-6 bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <span className="text-[9px] font-mono font-black text-slate-400 uppercase tracking-widest block">Overlay Diagnosis</span>
              
              <div className="space-y-2">
                <span className={cn("text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border inline-block", verdict.color)}>
                  {verdict.label}
                </span>
                <p className="text-xs font-semibold text-slate-500 leading-relaxed">
                  {verdict.desc}
                </p>
              </div>
            </div>

            <div className="mt-4 bg-slate-50 border border-slate-100 p-3 rounded-xl text-[9px] font-bold text-slate-400 leading-normal">
              PRO TIP: Always monitor bond yield trends when planning gold swing positions. They are highly correlated.
            </div>
          </div>

        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 4. GoldAtrTargetMapping: Target vs. ATR feasibility check
 */
export const GoldAtrTargetMapping = () => {
  const [target, setTarget] = useState<number>(15); // in dollars ($)

  const atr = 25; // $25 daily move
  const isGreedTarget = target > atr;

  return (
    <InstitutionalFrame label="Gold Target & ATR Feasibility" id="GLD-1.1-ATR">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Controls */}
          <div className="md:col-span-6 bg-white border border-slate-200 rounded-[2rem] p-6 space-y-6 flex flex-col justify-center shadow-sm">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Configure Target Level</span>
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Planned Profit Target (Distance)</span>
                <span className={cn("font-mono font-black", isGreedTarget ? "text-rose-600 animate-pulse" : "text-teal-600")}>
                  ${target.toFixed(2)}
                </span>
              </div>
              <input 
                type="range" 
                min="5" 
                max="40" 
                value={target}
                onChange={(e) => setTarget(parseInt(e.target.value))}
                className="w-full accent-[#071B36]"
              />
              <span className="text-[9px] font-bold text-slate-400 block">
                Active Gold Daily ATR is <span className="font-bold text-[#071B36] font-mono">${atr.toFixed(2)}</span>.
              </span>
            </div>
          </div>

          {/* Results Graphic */}
          <div className="md:col-span-6 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-mono font-black text-slate-400 uppercase tracking-widest">ATR Feasibility</span>
                <span className={cn(
                  "text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border",
                  isGreedTarget ? "bg-rose-950 border-rose-800 text-rose-300" : "bg-teal-950 border-teal-800 text-teal-300"
                )}>
                  {isGreedTarget ? "Exceeds Range" : "Within Range"}
                </span>
              </div>

              {/* Gauge */}
              <div className="text-center py-4 bg-slate-950/80 rounded-2xl border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-1">Target Percent of Daily ATR</span>
                <span className={cn("text-3xl font-black font-mono tracking-tighter", isGreedTarget ? "text-rose-500 animate-pulse" : "text-teal-400")}>
                  {((target / atr) * 100).toFixed(0)}%
                </span>
                <span className="text-[9px] text-slate-500 font-bold block mt-1">
                  {isGreedTarget ? "Greed Exit! Target exceeds the active daily volatility range." : "Target fits comfortably inside normal daily movements."}
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
 * 5. GoldPlanValidationDrill: Interactive choices matching practice card
 */
export const GoldPlanValidationDrill = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  const options = [
    {
      id: "A",
      text: "The target is too small for a Gold trade.",
      isCorrect: false,
      feedback: "Incorrect. A target of $35 is aligned with the daily ATR, which is standard for Gold."
    },
    {
      id: "B",
      text: "The Invalidation Checkpoint is set too close, ignoring Gold's typical stop-sweep wicks and volatility profile.",
      isCorrect: true,
      feedback: "Correct! A 10-pip ($1) stop on Gold is far too narrow; a normal wick fluctuation will easily stop you out before the trade moves. Invalidation levels must be scaled to the active ATR, including a safety buffer."
    },
    {
      id: "C",
      text: "The entry is set at a round number.",
      isCorrect: false,
      feedback: "Incorrect. Round numbers can act as psychological support/resistance; this is not a structural flaw."
    },
    {
      id: "D",
      text: "Buying Gold is always wrong when ATR is high.",
      isCorrect: false,
      feedback: "Incorrect. High ATR provides excellent trading opportunity, provided the plan's risk parameters are scaled appropriately."
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
    <InstitutionalFrame label="Gold Plan Validation Audit" id="GLD-1.1-DRL" status="AUDIT ACTIVE">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
            <LineChart size={14} className="text-teal-600" />
            Gold Case Study
          </div>
          <p className="text-xs font-bold text-[#071B36] leading-relaxed">
            You write a plan to buy Gold (XAU/USD) at $2,150. The structural low is at $2,145. You place the Invalidation Checkpoint at $2,144 (a 10-pip stop). The daily ATR of Gold is $35 ($3.50 move, or 350 pips). The Target is placed at $2,185. What is the fatal flaw in this plan?
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
 * 6. GoldPlanDebrief: Summary debrief component
 */
export const GoldPlanDebrief = () => {
  return (
    <InstitutionalFrame label="Debrief: Gold Plan Complete" id="GLD-1.1-DBF">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Summary Box */}
          <div className="md:col-span-7 space-y-4 flex flex-col justify-center">
            <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-teal-50 px-2.5 py-1 rounded border border-teal-200 inline-block">
              Gold Pipeline Locked
            </span>
            <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">Structured Volatility Planning</h3>
            <p className="text-xs text-slate-500 font-semibold leading-relaxed">
              You have completed the Gold roadway for Module 1.1. You have learned that Gold requires a distinct planning framework: wider invalidation zones to absorb stop-sweeps, targets aligned with daily ATR, and macro checks on US Treasury yields and DXY. Gold is a powerful asset, but it requires extreme discipline. Next, we will check the Crypto roadway.
            </p>
          </div>

          {/* Graphics Display */}
          <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
            <div className="space-y-4 relative z-10">
              <span className="text-[9px] font-mono font-black text-slate-400 uppercase tracking-widest block">Blueprint Status</span>
              <h4 className="text-sm font-black uppercase text-teal-400">Roadway Complete</h4>
              
              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-[10px] font-mono leading-normal text-teal-500">
                VERDICT: Core + Gold planning components fully resolved. Ready to proceed to Crypto track.
              </div>
            </div>
          </div>

        </div>
        
        <MentorInsight 
          text="Gold has a high ATR. That is a gift if you plan your exits and stops correctly, and a curse if you trade with tight currency-like parameters." 
          analogy="You wouldn't ride a bucking bronco (Gold) with the same loose grip you use on a bicycle (Forex). Tighten your rules, widen your boundaries, and secure your seat."
        />
      </div>
    </InstitutionalFrame>
  );
};
