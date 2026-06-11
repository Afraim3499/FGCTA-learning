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
  Coins,
  ShieldCheck,
  Scale
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { InstitutionalFrame, MentorInsight, UI } from "./shared";

/**
 * 1. GoldInvalidationFoundations: Volatility sweeps
 */
export const GoldInvalidationFoundations = () => {
  return (
    <InstitutionalFrame label="Gold Volatility Sweep Safety" id="GLD-1.2-VOL">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Info Side */}
            <div className="md:col-span-7 space-y-3">
              <span className="text-[9px] font-black uppercase tracking-widest text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-100 inline-block">
                Gold Liquidity Hunts
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">Wick-Heavy Price Actions</h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                Gold has a unique volatility signature: it prints deep wicks beyond key levels to trigger stops before reversing. A valid Gold plan must place stop-losses beyond this sweep corridor, adding a buffer scaled directly to Gold's active Daily ATR.
              </p>
            </div>

            {/* Display Side */}
            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden min-h-[180px]">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
              <div className="space-y-3 relative z-10 text-center flex-1 flex flex-col justify-center">
                <ShieldCheck size={32} className="text-amber-400 mx-auto animate-pulse" />
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Security Gating</span>
                  <span className="text-sm font-black text-amber-300 uppercase tracking-tight">ATR-Scaled Stops Enabled</span>
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
 * 2. GoldStopSweepBuffers: Volatility stops buffer toggle
 */
export const GoldStopSweepBuffers = () => {
  const [buffer, setBuffer] = useState<number>(1); // in dollars ($)

  const isValid = buffer >= 3;

  return (
    <InstitutionalFrame label="Gold Stop-Loss Buffer" id="GLD-1.2-BUFF">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Controls */}
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
                Standard Gold stop buffer is <span className="font-bold text-[#071B36] font-mono">$3.00 - $4.00</span> (30-40 pips).
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
                <div className="absolute left-0 right-0 top-1/3 border-t border-slate-700 border-dashed z-0 flex justify-between px-2">
                  <span className="text-[6px] font-mono text-slate-400 -mt-2">STRUCTURAL LOW LOW ($2,320)</span>
                </div>

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
 * 3. GoldYieldInvalidationOverlay: Yield breaking structure
 */
export const GoldYieldInvalidationOverlay = () => {
  const [yields, setYields] = useState<"surging" | "declining">("declining");

  return (
    <InstitutionalFrame label="Treasury Yield Invalidation check" id="GLD-1.2-YLD">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="flex justify-center gap-3 mb-2">
          <button
            onClick={() => setYields("declining")}
            className={cn(
              "px-5 py-2 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              yields === "declining" ? "bg-[#071B36] text-white border-[#071B36]" : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            Real Yields Declining
          </button>
          <button
            onClick={() => setYields("surging")}
            className={cn(
              "px-5 py-2 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              yields === "surging" ? "bg-[#071B36] text-white border-[#071B36]" : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            Real Yields Surging Breakout
          </button>
        </div>

        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Info */}
            <div className="md:col-span-7 space-y-3">
              <span className={cn(
                "text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border inline-block",
                yields === "declining" ? "bg-teal-50 border-teal-200 text-teal-800" : "bg-rose-50 border-rose-200 text-rose-800"
              )}>
                {yields === "declining" ? "Macro Supported" : "Thesis Invalidated"}
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">
                {yields === "declining" ? "Gold Long Context Confirmed" : "Bond Yield Breakout: Exit Gold Longs"}
              </h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                {yields === "declining"
                  ? "US Real Treasury Yields are declining, indicating falling interest rates. This makes non-yielding Gold highly attractive, supporting your long plan context."
                  : "US 10-Year Real Yields are surging, breaking key resistance. This indicates capital will yield more in government bonds, invalidating your Gold long plan. Exit the trade."}
              </p>
            </div>

            {/* Display Side */}
            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden min-h-[180px]">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
              <div className="space-y-3 relative z-10 text-center flex-1 flex flex-col justify-center">
                {yields === "declining" ? (
                  <>
                    <TrendingUp size={32} className="text-teal-400 mx-auto" />
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Yield Curve</span>
                    <span className="text-xs font-black text-teal-300 uppercase tracking-tight">Declining Yields support Gold</span>
                  </>
                ) : (
                  <>
                    <ShieldAlert size={32} className="text-rose-500 mx-auto animate-pulse" />
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Yield Curve</span>
                    <span className="text-xs font-black text-rose-400 uppercase tracking-tight">Surging Yields halt Gold Rally</span>
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
 * 4. GoldStopPositionSizing: Position sizing comparison
 */
export const GoldStopPositionSizing = () => {
  const [stopDistance, setStopDistance] = useState<number>(4); // in dollars ($)

  const capitalRisk = 100;
  const positionSize = (capitalRisk / stopDistance).toFixed(1);

  return (
    <InstitutionalFrame label="Gold Volatility-Adjusted Sizing" id="GLD-1.2-SIZE">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Controls */}
          <div className="md:col-span-6 bg-white border border-slate-200 rounded-[2rem] p-6 space-y-6 flex flex-col justify-center shadow-sm">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Configure Risk Coordinate</span>
            
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Planned Stop-Loss Distance ($)</span>
                <span className="font-mono text-rose-600 font-black">${stopDistance.toFixed(2)}</span>
              </div>
              <input 
                type="range" 
                min="2" 
                max="10" 
                step="0.5"
                value={stopDistance}
                onChange={(e) => setStopDistance(parseFloat(e.target.value))}
                className="w-full accent-[#071B36]"
              />
              <span className="text-[9px] font-bold text-slate-400 block">
                Fixed Capital Risk is capped at <span className="font-mono text-[#071B36] font-bold">${capitalRisk}</span>.
              </span>
            </div>
          </div>

          {/* Results Graphic */}
          <div className="md:col-span-6 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Sizing Calculator</span>
                <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border bg-teal-950 border-teal-800 text-teal-300">
                  Risk Locked
                </span>
              </div>

              {/* Display */}
              <div className="text-center py-4 bg-slate-950/80 rounded-2xl border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-1">Lot / Contract Size</span>
                <span className="text-3xl font-black font-mono tracking-tighter text-teal-400 animate-pulse">
                  {positionSize} Oz
                </span>
                <span className="text-[9px] text-slate-500 font-bold block mt-1">
                  Adjusting contract size ensures you risk exactly $100.
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
 * 5. GoldInvalidationDrillComponent: Practice drill
 */
export const GoldInvalidationDrillComponent = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  const options = [
    {
      id: "A",
      text: "The target is too close.",
      isCorrect: false,
      feedback: "Incorrect. Target details are not provided; the flaw is purely in the risk parameters."
    },
    {
      id: "B",
      text: "A $1.00 stop buffer is far too tight for Gold's volatility profile, making a stop-sweep highly likely, and using a fixed position size ignores volatility-adjusted sizing rules.",
      isCorrect: true,
      feedback: "Correct! A $1.00 stop buffer on Gold is extremely dangerous; normal market noise will easily sweep it. Additionally, failing to scale the position size down based on a proper structural stop buffer ($3.00-$4.00) means a normal sweep will cause a loss far exceeding the planned $100 risk limit."
    },
    {
      id: "C",
      text: "Gold should never be bought at $2,050.",
      isCorrect: false,
      feedback: "Incorrect. The price coordinate is technical; the issue is structure and sizing."
    },
    {
      id: "D",
      text: "The stop-loss should be placed exactly at $2,042.",
      isCorrect: false,
      feedback: "Incorrect. Placing the stop exactly at $2,042 ignores sweep risks, providing zero safety buffer."
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
    <InstitutionalFrame label="Gold Invalidation Audit" id="GLD-1.2-DRL" status="AUDIT ACTIVE">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
            <Coins size={14} className="text-teal-600" />
            Gold Case Study
          </div>
          <p className="text-xs font-bold text-[#071B36] leading-relaxed">
            You want to buy Gold (XAU/USD) at $2,050. The H4 structural swing low is at $2,042. The daily ATR is $35 ($3.50 move). You decide to place your stop-loss at $2,041 (a $1.00/10-pip buffer). Your account risk is $100. You execute with a fixed position size based on a tight 10-pip stop. What is the fatal flaw in this plan?
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
 * 6. GoldInvalidationDebriefComponent: Final debrief summary
 */
export const GoldInvalidationDebriefComponent = () => {
  return (
    <InstitutionalFrame label="Debrief: Gold Invalidation Locked" id="GLD-1.2-DBF">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Summary Box */}
          <div className="md:col-span-7 space-y-4 flex flex-col justify-center">
            <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-teal-50 px-2.5 py-1 rounded border border-teal-200 inline-block">
              Gold Invalidation Complete
            </span>
            <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">Structured Volatility Invalidation</h3>
            <p className="text-xs text-slate-500 font-semibold leading-relaxed">
              You have completed the Gold roadway for Module 1.2. You have learned that Gold invalidation requires placing stops beyond the exhaustion zone of wick sweeps ($3.00-$4.00 buffer), checking real treasury yields, and using volatility-adjusted position sizing. Gold is a volatile and rewarding asset, but it will ruthlessly exploit lazy risk parameters. Next, we will check the Crypto roadway.
            </p>
          </div>

          {/* Graphics Display */}
          <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
            <div className="space-y-4 relative z-10">
              <span className="text-[9px] font-mono font-black text-slate-400 uppercase tracking-widest block">Blueprint Status</span>
              <h4 className="text-sm font-black uppercase text-teal-400">Roadway Complete</h4>
              
              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-[10px] font-mono leading-normal text-teal-500">
                VERDICT: Core + Gold invalidation components fully resolved. Ready to proceed to Crypto track checks.
              </div>
            </div>
          </div>

        </div>
      </div>
    </InstitutionalFrame>
  );
};
