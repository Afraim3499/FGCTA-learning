"use client";

import React, { useState } from "react";
import { 
  Target, 
  ArrowRight, 
  Layers, 
  TrendingUp, 
  ShieldAlert, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Lock,
  ChevronRight,
  TrendingDown
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { InstitutionalFrame, MentorInsight, UI } from "./shared";

/**
 * 1. TargetAnatomy: Visualizes the destination of a trade, comparing structural targets with greed-driven targets.
 */
export const TargetAnatomy = () => {
  const [targetType, setTargetType] = useState<"structural" | "greed">("structural");

  return (
    <InstitutionalFrame label="The Anatomy of Target Mapping" id="TRGT-1.3-ANAT">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="flex justify-center gap-3 mb-2">
          <button
            onClick={() => setTargetType("structural")}
            className={cn(
              "px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              targetType === "structural"
                ? "bg-[#071B36] text-white border-[#071B36] scale-105"
                : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            Structural Exit (Professional)
          </button>
          <button
            onClick={() => setTargetType("greed")}
            className={cn(
              "px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              targetType === "greed"
                ? "bg-[#071B36] text-white border-[#071B36] scale-105"
                : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            Greed Target (Gambler)
          </button>
        </div>

        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            {/* Info Side */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-4">
              <div>
                <span className={cn(
                  "text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded border inline-block mb-2",
                  targetType === "structural" ? "bg-teal-50 border-teal-200 text-teal-800" : "bg-rose-50 border-rose-200 text-rose-800"
                )}>
                  {targetType === "structural" ? "Probability Gated" : "Greed Gated"}
                </span>
                <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">
                  {targetType === "structural" ? "Technical Swing Exit" : "Objective Mismatch"}
                </h4>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed mt-2">
                  {targetType === "structural"
                    ? "Professional traders map targets based strictly on chart structure (resistance/support levels). They lock in profits just before price reaches major barriers, avoiding the risk of a sudden reversal that wipes out paper gains."
                    : "Gamblers hold trades hoping for a massive, unrealistic breakout. They place targets arbitrarily based on desired monetary payouts, completely ignoring technical walls where sellers are waiting to crush momentum."}
                </p>
              </div>
              
              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-[#071B36]">
                  <span>Key Result:</span>
                  <span className={cn(targetType === "structural" ? "text-teal-600" : "text-rose-600")}>
                    {targetType === "structural" ? "Consistent profit compounding" : "Reversals turn wins into losses"}
                  </span>
                </div>
              </div>
            </div>

            {/* Graphic Side */}
            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden min-h-[200px]">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
              
              <div className="space-y-4 relative z-10 flex-1 flex flex-col justify-center text-center">
                {targetType === "structural" ? (
                  <>
                    <Target size={36} className="text-teal-400 mx-auto animate-pulse" />
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Exit Boundary</span>
                    <span className="text-xs font-black text-teal-300 uppercase tracking-tight">Limit Filled at Key Level</span>
                  </>
                ) : (
                  <>
                    <ShieldAlert size={36} className="text-rose-400 mx-auto animate-bounce" />
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Exit Boundary</span>
                    <span className="text-xs font-black text-rose-300 uppercase tracking-tight">Missed target, trade reversed</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <MentorInsight 
          text={targetType === "structural"
            ? "Exit before the wall, not behind it. The market owes you nothing past major resistance."
            : "If your target depends on a resistance level breaking on the first attempt, your plan is built on hope, not math."}
          analogy={targetType === "structural"
            ? "Exiting a highway at the planned exit ramp before traffic jams start."
            : "Refusing to pull over for gas, hoping you'll make it another 100 miles on an empty tank."}
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 2. StructuralTargetMapping: Interactive supply/demand barrier mapping.
 */
export const StructuralTargetMapping = () => {
  const [targetPlacement, setTargetPlacement] = useState<"on-wall" | "front-run">("front-run");

  return (
    <InstitutionalFrame label="Structural Target Placement" id="TRGT-1.3-STRC">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="flex justify-center gap-3 mb-2">
          <button
            onClick={() => setTargetPlacement("front-run")}
            className={cn(
              "px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              targetPlacement === "front-run"
                ? "bg-[#071B36] text-white border-[#071B36]"
                : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            Front-Run The Wall (Safe)
          </button>
          <button
            onClick={() => setTargetPlacement("on-wall")}
            className={cn(
              "px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              targetPlacement === "on-wall"
                ? "bg-[#071B36] text-white border-[#071B36]"
                : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            Exactly On The Wall (Risky)
          </button>
        </div>

        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            {/* Context Info */}
            <div className="md:col-span-6 space-y-4 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Exit Tactics</span>
                <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight mt-1">
                  {targetPlacement === "front-run" ? "Liquid Exits by Front-Running" : "Trapped at the Resistance Wall"}
                </h4>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed mt-2">
                  {targetPlacement === "front-run"
                    ? "Placing your take-profit order 2-3 pips/cents below the actual structural wall guarantees your order gets filled when price sweeps the zone. You exit into massive institutional buying pressure before it collapses."
                    : "Placing your target exactly on or past the swing high means you require the market to completely clear the seller's order backlog to get filled. A few ticks of spread mismatch can leave your order unfilled as price crashes."}
                </p>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-bold text-slate-600 flex items-start gap-2">
                <CheckCircle2 size={14} className="text-teal-600 shrink-0 mt-0.5" />
                <span>Always leave a buffer. Broker spreads and orderbook queues are real execution frictions.</span>
              </div>
            </div>

            {/* Visual Chart Graphic */}
            <div className="md:col-span-6 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden min-h-[220px]">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
              
              <div className="space-y-4 relative z-10 w-full h-full flex flex-col justify-between">
                <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Orderbook Depth Simulation</span>
                  <span className={cn(
                    "text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border",
                    targetPlacement === "front-run" ? "bg-teal-950 border-teal-800 text-teal-300" : "bg-rose-950 border-rose-800 text-rose-300"
                  )}>
                    {targetPlacement === "front-run" ? "High Fill Likelihood" : "Low Fill Likelihood"}
                  </span>
                </div>

                <div className="relative h-28 bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col justify-between overflow-hidden">
                  {/* Resistance line */}
                  <div className="absolute left-0 right-0 top-1/4 border-t border-rose-500 border-dashed z-0 flex justify-between px-2">
                    <span className="text-[7px] font-mono text-rose-400 -mt-2">HEAVY RESISTANCE WALL ($100.00)</span>
                  </div>

                  {/* Target line */}
                  <div 
                    className={cn(
                      "absolute left-0 right-0 border-t transition-all duration-300 z-10 flex justify-between px-2",
                      targetPlacement === "front-run" ? "top-[40%] border-teal-400" : "top-1/4 border-rose-400"
                    )}
                  >
                    <span className={cn("text-[7px] font-mono -mt-2.5", targetPlacement === "front-run" ? "text-teal-400" : "text-rose-500")}>
                      YOUR TARGET LIMIT ({targetPlacement === "front-run" ? "$99.50" : "$100.00"})
                    </span>
                  </div>

                  <div className="text-[8px] text-slate-400 font-mono mt-auto relative z-20">
                    {targetPlacement === "front-run" 
                      ? "Success: Exit filled on the approach sweep. Position closed in profit."
                      : "Warning: Price touched $99.90 and dropped. Your target was missed."}
                  </div>
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
 * 3. TimeframeTargetAlignment: Multi-timeframe mapping matching context.
 */
export const TimeframeTargetAlignment = () => {
  const [alignment, setAlignment] = useState<"aligned" | "mismatched">("aligned");

  return (
    <InstitutionalFrame label="Timeframe Target Alignment" id="TRGT-1.3-TIME">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="flex justify-center gap-3 mb-2">
          <button
            onClick={() => setAlignment("aligned")}
            className={cn(
              "px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              alignment === "aligned"
                ? "bg-[#071B36] text-white border-[#071B36]"
                : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            Aligned Timeframe (H1 Entry / H1 Target)
          </button>
          <button
            onClick={() => setAlignment("mismatched")}
            className={cn(
              "px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              alignment === "mismatched"
                ? "bg-[#071B36] text-white border-[#071B36]"
                : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            Mismatched Timeframe (H1 Entry / Daily Target)
          </button>
        </div>

        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            {/* Info Side */}
            <div className="md:col-span-7 space-y-4">
              <span className={cn(
                "text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border inline-block",
                alignment === "aligned" ? "bg-teal-50 border-teal-200 text-teal-800" : "bg-rose-50 border-rose-200 text-rose-800"
              )}>
                {alignment === "aligned" ? "Volatility Aligned" : "Volatility Mismatch"}
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">
                {alignment === "aligned" ? "Matching Target Horizons" : "Holding Too Long"}
              </h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                {alignment === "aligned"
                  ? "An H1 entry plan has H1-sized stops and H1-sized targets. This matches normal volatility cycles. The trade will reach its outcome within a few hours, minimizing exposure to overnight sessions and fundamental news shocks."
                  : "Using a Daily target for an H1 entry plan requires a huge market trend extension. This forces you to hold the trade for days, violating the logic of your entry pattern and exposing you to swap fees and session changes."}
              </p>
            </div>

            {/* Display Side */}
            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden min-h-[180px]">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
              <div className="space-y-3 relative z-10 text-center flex-1 flex flex-col justify-center">
                {alignment === "aligned" ? (
                  <>
                    <Clock size={32} className="text-teal-400 mx-auto" />
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Expected Hold Time</span>
                    <span className="text-xs font-black text-teal-300 uppercase tracking-tight">2 to 6 Hours (Safe)</span>
                  </>
                ) : (
                  <>
                    <Clock size={32} className="text-rose-500 mx-auto animate-pulse" />
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Expected Hold Time</span>
                    <span className="text-xs font-black text-rose-400 uppercase tracking-tight">48 to 72 Hours (Risky)</span>
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
 * 4. FixedVsTrailingExits: Standard Comparison of Fixed vs. Trailing stops
 */
export const FixedVsTrailingExits = () => {
  const [exitStyle, setExitStyle] = useState<"fixed" | "trailing">("fixed");

  return (
    <InstitutionalFrame label="Exit Methodology Comparison" id="TRGT-1.3-COMP">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="flex justify-center gap-3 mb-2">
          <button
            onClick={() => setExitStyle("fixed")}
            className={cn(
              "px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              exitStyle === "fixed"
                ? "bg-[#071B36] text-white border-[#071B36] scale-105"
                : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            Fixed Structural Target
          </button>
          <button
            onClick={() => setExitStyle("trailing")}
            className={cn(
              "px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              exitStyle === "trailing"
                ? "bg-[#071B36] text-white border-[#071B36] scale-105"
                : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            Trailing Stop Exit
          </button>
        </div>

        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            {/* Description */}
            <div className="md:col-span-7 space-y-4">
              <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border border-[#071B36] text-[#071B36] inline-block">
                {exitStyle === "fixed" ? "Pre-Planned Coordinate" : "Dynamic Stop Trail"}
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">
                {exitStyle === "fixed" ? "Fixed Take-Profit Target" : "Dynamic Trailing Stop"}
              </h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                {exitStyle === "fixed"
                  ? "Exits your position entirely at a pre-defined level just inside a major chart barrier. It provides the highest execution probability and guarantees you capture the target R-multiple. Perfect for beginners who need to develop consistent exit discipline."
                  : "Moves your stop-loss order up behind major structural swing points as price expands in your direction. It allows you to catch massive trend movements, but it requires active management and means giving back 20-30% of peak profits when price finally pulls back to trigger your stop."}
              </p>
            </div>

            {/* Graphic representation */}
            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden min-h-[180px]">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
              <div className="space-y-3 relative z-10 text-center flex-1 flex flex-col justify-center">
                {exitStyle === "fixed" ? (
                  <>
                    <Lock size={32} className="text-teal-400 mx-auto" />
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Plan Execution</span>
                    <span className="text-xs font-black text-teal-300 uppercase tracking-tight">Set and Forget Exit</span>
                  </>
                ) : (
                  <>
                    <TrendingUp size={32} className="text-sky-400 mx-auto" />
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Plan Execution</span>
                    <span className="text-xs font-black text-sky-300 uppercase tracking-tight">Active Trend Pursuit</span>
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
 * 5. MappingTargetsDrill: Practice component matching core drill.
 */
export const MappingTargetsDrill = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  const options = [
    {
      id: "A",
      text: "At $91.50, just below the daily resistance, to maximize profit potential.",
      isCorrect: false,
      feedback: "Incorrect. A target of $9.50 ($91.50 exit) exceeds the average weekly range of $6.00, making it mathematically unfeasible for an intraday trade."
    },
    {
      id: "B",
      text: "At $86.50, just below the H1 swing high structure.",
      isCorrect: true,
      feedback: "Correct! The H1 swing high ($87.00) is the nearest major structural barrier. Placing the target just below it ($86.50) provides a highly feasible exit that aligns with intraday volatility, while still yielding a solid 2.25R reward-to-risk ratio ($4.50 reward / $2.00 risk)."
    },
    {
      id: "C",
      text: "At $83.50, to guarantee a quick win.",
      isCorrect: false,
      feedback: "Incorrect. A target of $83.50 only yields a 0.75R reward-to-risk ratio ($1.50 profit / $2.00 risk), which violates the 2.0R feasibility contract."
    },
    {
      id: "D",
      text: "At $89.00, because it is a nice round number.",
      isCorrect: false,
      feedback: "Incorrect. Round numbers are psychological but mapping exits must be based on structural chart barriers and average daily range realities."
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
    <InstitutionalFrame label="Practice Drill: Target Mapping" id="TRGT-1.3-DRL" status="DRILL ACTIVE">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm space-y-4">
          <p className="text-xs font-bold text-[#071B36] leading-relaxed">
            You enter a long trade on a stock at $82.00. Your stop-loss (Invalidation) is set at $80.00 (risk of $2.00). The H1 swing high is at $87.00. Daily resistance is at $92.00. The average weekly range is $6.00. Where is the most objective and highly feasible target location for an intraday trade?
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
 * 6. TargetDebrief: Summary debrief component
 */
export const TargetDebrief = () => {
  return (
    <InstitutionalFrame label="Debrief: Target Mapping Complete" id="TRGT-1.3-DBF">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Summary Box */}
          <div className="md:col-span-7 space-y-4 flex flex-col justify-center">
            <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-teal-50 px-2.5 py-1 rounded border border-teal-200 inline-block">
              Exit Coordinate Locked
            </span>
            <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">Structured Exits Build Equity Curves</h3>
            <p className="text-xs text-slate-500 font-semibold leading-relaxed">
              You have completed the core concept of mapping target locations. You now know that a professional trade plan treats profit targets as objective, structural boundaries. By locating the nearest major chart barriers (Prior Highs, Resistance Zones) and placing your limit orders just before them, you ensure high-probability fills.
            </p>
          </div>

          {/* Graphics Display */}
          <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
            <div className="space-y-4 relative z-10">
              <span className="text-[9px] font-mono font-black text-slate-400 uppercase tracking-widest block">System Diagnostics</span>
              <h4 className="text-sm font-black uppercase text-teal-400">Target Resolution Clear</h4>
              
              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-[10px] font-mono leading-normal text-teal-400">
                VERDICT: Core target components resolved. Ready to proceed to Forex, Gold, or Crypto roadway checks.
              </div>
            </div>
          </div>

        </div>
      </div>
    </InstitutionalFrame>
  );
};
