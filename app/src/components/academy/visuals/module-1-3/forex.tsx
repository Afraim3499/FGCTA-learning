"use client";

import React, { useState } from "react";
import { 
  Target, 
  ArrowRight, 
  TrendingUp, 
  ShieldAlert, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Layers,
  Zap
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { InstitutionalFrame, MentorInsight } from "./shared";

/**
 * 1. ForexTargetFoundations: Session boundaries and ADR
 */
export const ForexTargetFoundations = () => {
  return (
    <InstitutionalFrame label="Forex Target Foundations" id="FX-1.3-FND">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 space-y-3">
              <span className="text-[9px] font-black uppercase tracking-widest text-teal-600 bg-teal-50 px-2 py-0.5 rounded border border-teal-100 inline-block">
                Forex Volatility Gating
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">
                ADR and Session Highs/Lows
              </h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                In Forex planning, targets must check two critical anchors: **Regional Session Highs/Lows** (where liquidity rests) and the **Average Daily Range (ADR)**. Setting targets beyond daily volatility capacity risks leaving positions open through quiet sessions, incurring swap fees and holding risks.
              </p>
            </div>
            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden min-h-[180px]">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
              <div className="space-y-3 relative z-10 text-center flex-1 flex flex-col justify-center">
                <Zap size={32} className="text-teal-400 mx-auto animate-pulse" />
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Volatility Guard</span>
                <span className="text-xs font-black text-teal-300 uppercase tracking-tight">ADR Checked & Session Aligned</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 2. ForexSessionLiquidityTargets: Front-running session extremes.
 */
export const ForexSessionLiquidityTargets = () => {
  const [levelOffset, setLevelOffset] = useState<"exact" | "front-run">("front-run");

  return (
    <InstitutionalFrame label="Session Liquidity Target Mapping" id="FX-1.3-LIQ">
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
            Front-Run Extreme (Clean Fill)
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
            Exact Session Extreme (Risky)
          </button>
        </div>

        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            <div className="md:col-span-7 space-y-4">
              <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border border-[#071B36] text-[#071B36] inline-block">
                Liquidity Sweeps
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">
                {levelOffset === "front-run" ? "Secure Exit Before Reversal" : "Trapped by broker spread"}
              </h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                {levelOffset === "front-run"
                  ? "Placing your target 2-3 pips inside the regional session high (e.g. Asian High) ensures you exit with a profit as initial buy orders execute. You secure profits before the momentum is swept and rotates back."
                  : "Placing your target exactly on the high means you must compete with the thickest institutional sell order queues. Often, price will tap the level on some broker feeds but fail to fill your take-profit order, followed by a sharp drop."}
              </p>
            </div>

            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden min-h-[180px]">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
              <div className="space-y-3 relative z-10 text-center flex-1 flex flex-col justify-center">
                {levelOffset === "front-run" ? (
                  <>
                    <CheckCircle2 size={32} className="text-teal-400 mx-auto" />
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Fill State</span>
                    <span className="text-xs font-black text-teal-300 uppercase tracking-tight">Order Executed +35 pips</span>
                  </>
                ) : (
                  <>
                    <XCircle size={32} className="text-rose-500 mx-auto animate-pulse" />
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Fill State</span>
                    <span className="text-xs font-black text-rose-400 uppercase tracking-tight">Missed by 0.5 pips, reversed</span>
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
 * 3. ForexDxyTargetOverlay: DXY Support/Resistance overlays.
 */
export const ForexDxyTargetOverlay = () => {
  const [dxyState, setDxyState] = useState<"approaching" | "touching">("approaching");

  return (
    <InstitutionalFrame label="DXY Correlation target overlay" id="FX-1.3-DXY">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="flex justify-center gap-3 mb-2">
          <button
            onClick={() => setDxyState("approaching")}
            className={cn(
              "px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              dxyState === "approaching"
                ? "bg-[#071B36] text-white border-[#071B36]"
                : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            DXY Approaching Support Floor
          </button>
          <button
            onClick={() => setDxyState("touching")}
            className={cn(
              "px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              dxyState === "touching"
                ? "bg-[#071B36] text-white border-[#071B36]"
                : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            DXY Touches Daily Support (Exit Setup)
          </button>
        </div>

        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            <div className="md:col-span-7 space-y-4">
              <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border border-[#071B36] text-[#071B36] inline-block">
                US Dollar Index Correlation
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">
                {dxyState === "approaching" ? "EUR/USD Long Room to Expand" : "DXY Bounce Expected: Close EUR/USD"}
              </h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                {dxyState === "approaching"
                  ? "As long as DXY has space to slide down to its daily support level, your EUR/USD long plan has clean headroom to rally. You hold your target."
                  : "DXY hits its major daily support zone. Dollar strength is highly likely to return immediately. Your EUR/USD long plan must exit immediately in profit, even if the EUR/USD local target coordinate has not been touched."}
              </p>
            </div>

            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden min-h-[180px]">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
              <div className="space-y-3 relative z-10 text-center flex-1 flex flex-col justify-center">
                {dxyState === "approaching" ? (
                  <>
                    <TrendingUp size={32} className="text-teal-400 mx-auto" />
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Market Action</span>
                    <span className="text-xs font-black text-teal-300 uppercase tracking-tight">Hold EUR/USD Long</span>
                  </>
                ) : (
                  <>
                    <ShieldAlert size={32} className="text-rose-500 mx-auto animate-pulse" />
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Market Action</span>
                    <span className="text-xs font-black text-rose-400 tracking-tight uppercase">Exit EUR/USD immediately</span>
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
 * 4. ForexAdrTargetScalingVisual: Volatility gating targets.
 */
export const ForexAdrTargetScalingVisual = () => {
  const [targetPips, setTargetPips] = useState<number>(40);
  const eurUsdAdr = 70;
  const feasibilityPercent = Math.round((targetPips / eurUsdAdr) * 100);
  const isValid = feasibilityPercent <= 70;

  return (
    <InstitutionalFrame label="Forex ADR Target Scaling" id="FX-1.3-ADR">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          <div className="md:col-span-6 bg-white border border-slate-200 rounded-[2rem] p-6 space-y-6 flex flex-col justify-center shadow-sm">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Set Target Distance</span>
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Planned Target (Pips)</span>
                <span className={cn("font-mono font-black", isValid ? "text-teal-600" : "text-rose-600")}>{targetPips} pips</span>
              </div>
              <input 
                type="range" 
                min="20" 
                max="100" 
                value={targetPips}
                onChange={(e) => setTargetPips(parseInt(e.target.value))}
                className="w-full accent-[#071B36]"
              />
              <span className="text-[9px] font-bold text-slate-400 block">
                EUR/USD ADR is currently <span className="font-bold text-[#071B36] font-mono">{eurUsdAdr} pips</span>.
              </span>
            </div>
            
            <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-bold text-slate-600 flex items-start gap-2">
              <span>Target occupies <span className="font-black text-[#071B36] font-mono">{feasibilityPercent}%</span> of ADR.</span>
            </div>
          </div>

          <div className="md:col-span-6 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Feasibility State</span>
                <span className={cn(
                  "text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border",
                  isValid ? "bg-teal-950 border-teal-800 text-teal-300" : "bg-rose-950 border-rose-800 text-rose-300"
                )}>
                  {isValid ? "Plan Feasible" : "Plan Unfeasible"}
                </span>
              </div>

              <div className="h-28 w-full bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col justify-center items-center text-center">
                {isValid ? (
                  <CheckCircle2 size={32} className="text-teal-400 mb-2" />
                ) : (
                  <ShieldAlert size={32} className="text-rose-500 mb-2 animate-bounce" />
                )}
                <span className="text-[10px] text-slate-400 font-semibold block leading-tight">
                  {isValid 
                    ? "Target fits well within daily volatility. High probability fill."
                    : "Target exceeds typical daily range (limit 70% of ADR). Reduce target."}
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
 * 5. ForexTargetDrillComponent: Practice drill.
 */
export const ForexTargetDrillComponent = () => {
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
    <InstitutionalFrame label="Practice Drill: Forex Target Audit" id="FX-1.3-DRL" status="DRILL ACTIVE">
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
 * 6. ForexTargetDebriefComponent: Final summary.
 */
export const ForexTargetDebriefComponent = () => {
  return (
    <InstitutionalFrame label="Debrief: Secure Forex Exits" id="FX-1.3-DBF">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 space-y-3">
              <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-teal-50 px-2.5 py-1 rounded border border-teal-200 inline-block">
                Roadway Complete
              </span>
              <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">Exit Gated by Forex Realities</h3>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                You have completed the Forex roadway for Module 1.3. You have learned that securing currency exits requires front-running session extremes, checking DXY support levels, and validating target distances against ADR volatility limits.
              </p>
            </div>
            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 text-slate-200 flex flex-col justify-center items-center shadow-lg min-h-[180px]">
              <Target size={36} className="text-teal-400 mb-2 animate-bounce" />
              <span className="text-xs font-mono text-teal-400 font-black">EXIT SAFETY RESOLVED</span>
            </div>
          </div>
        </div>
      </div>
    </InstitutionalFrame>
  );
};
