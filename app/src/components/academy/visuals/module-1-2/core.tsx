"use client";

import React, { useState } from "react";
import { 
  ArrowRight, 
  Layers, 
  Activity, 
  Compass, 
  Layout, 
  AlertTriangle, 
  CheckCircle2, 
  Info, 
  ChevronRight, 
  TrendingUp, 
  ShieldAlert, 
  Sliders,
  CheckCircle,
  XCircle,
  Clock,
  ShieldCheck,
  ZapOff
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { InstitutionalFrame, MentorInsight, UI } from "./shared";

/**
 * 1. InvalidationAnatomy: Thesis disproof zone
 */
export const InvalidationAnatomy = () => {
  const [activeTab, setActiveTab] = useState<"thesis" | "entry">("thesis");

  return (
    <InstitutionalFrame label="The Anatomy of Invalidation" id="SHLD-1.2-ANAT">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="flex justify-center gap-3 mb-2">
          <button
            onClick={() => setActiveTab("thesis")}
            className={cn(
              "px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              activeTab === "thesis"
                ? "bg-[#071B36] text-white border-[#071B36] scale-105"
                : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            Thesis Disproof zone
          </button>
          <button
            onClick={() => setActiveTab("entry")}
            className={cn(
              "px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              activeTab === "entry"
                ? "bg-[#071B36] text-white border-[#071B36] scale-105"
                : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            Pre-Entry Accepting Loss
          </button>
        </div>

        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Info Side */}
            <div className="md:col-span-7 space-y-3">
              <span className="text-[9px] font-black uppercase tracking-widest text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-100 inline-block">
                {activeTab === "thesis" ? "Thesis Check" : "Risk Acceptance"}
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">
                {activeTab === "thesis" ? "Where Is Your Thesis Wrong?" : "The Pre-Entry Contract"}
              </h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                {activeTab === "thesis"
                  ? "Every trade plan is based on a reading. The Invalidation Checkpoint marks the price where that reading is proven structurally incorrect. If price crosses this line, your thesis is dead. Continuing to hold the position is logical insanity because you are trading a fantasy, not structure."
                  : "By defining your invalidation coordinate before opening the order window, you calculate your exact dollar risk. You accept that this loss is highly possible. If triggered, you exit cleanly with zero emotional hesitation because the risk was fully authorized before entry."}
              </p>
            </div>

            {/* Graphic Side */}
            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden min-h-[180px]">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
              <div className="space-y-3 relative z-10 text-center flex-1 flex flex-col justify-center">
                {activeTab === "thesis" ? (
                  <>
                    <ZapOff size={32} className="text-rose-400 mx-auto animate-pulse" />
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">System Verdict</span>
                    <span className="text-xs font-black text-rose-300 uppercase tracking-tight">Thesis Disproven = Hard Exit</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck size={32} className="text-teal-400 mx-auto animate-bounce" />
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">System Verdict</span>
                    <span className="text-xs font-black text-teal-300 uppercase tracking-tight">Accepted Risk = Zero Tilting</span>
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
 * 2. TrendStructureInvalidation: Trend HL sequence disproof
 */
export const TrendStructureInvalidation = () => {
  const [priceState, setPriceState] = useState<"holding" | "broken">("holding");

  return (
    <InstitutionalFrame label="Trend Structural Invalidation" id="SHLD-1.2-TRND">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="flex justify-center gap-3 mb-2">
          <button
            onClick={() => setPriceState("holding")}
            className={cn(
              "px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              priceState === "holding"
                ? "bg-[#071B36] text-white border-[#071B36]"
                : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            Trend Intact (Price Above HL)
          </button>
          <button
            onClick={() => setPriceState("broken")}
            className={cn(
              "px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              priceState === "broken"
                ? "bg-[#071B36] text-white border-[#071B36]"
                : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            Trend Broken (Price Breaks HL)
          </button>
        </div>

        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            {/* Info Side */}
            <div className="md:col-span-7 space-y-4">
              <div className="space-y-1.5">
                <span className={cn(
                  "text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border inline-block",
                  priceState === "holding" ? "bg-teal-50 border-teal-200 text-teal-800" : "bg-rose-50 border-rose-200 text-rose-800"
                )}>
                  {priceState === "holding" ? "Uptrend Confirmed" : "Uptrend Terminated"}
                </span>
                <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">
                  {priceState === "holding" ? "Higher Low Sequence Maintained" : "Sequence Violated: Lower Low Printed"}
                </h4>
              </div>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                {priceState === "holding"
                  ? "The market is printing Higher Highs and Higher Lows. Your long plan utilizes the previous swing low ($100) as the invalidation anchor. As long as price stays above $100, the trend is technically intact."
                  : "Price breaks below the previous swing low at $100, printing $98. The trend is broken because the Higher Low sequence is terminated. The long setup is dead, and the plan commands an immediate exit."}
              </p>
            </div>

            {/* Graphics representation */}
            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden min-h-[180px]">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
              <div className="space-y-3 relative z-10 text-center flex-1 flex flex-col justify-center">
                {priceState === "holding" ? (
                  <>
                    <TrendingUp size={32} className="text-teal-400 mx-auto" />
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Structural State</span>
                    <span className="text-xs font-black text-teal-300 uppercase tracking-tight">Uptrend Active</span>
                  </>
                ) : (
                  <>
                    <ZapOff size={32} className="text-rose-500 mx-auto animate-pulse" />
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Structural State</span>
                    <span className="text-xs font-black text-rose-400 uppercase tracking-tight">Lower Low Confirmed</span>
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
 * 3. RangeExtremeInvalidation: Deviation buffer
 */
export const RangeExtremeInvalidation = () => {
  const [buffer, setBuffer] = useState<number>(3); // in points

  const isProtected = buffer >= 8;

  return (
    <InstitutionalFrame label="Range Deviation Stop Buffer" id="SHLD-1.2-RNG">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Controls */}
          <div className="md:col-span-6 bg-white border border-slate-200 rounded-[2rem] p-6 space-y-6 flex flex-col justify-center shadow-sm">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Configure Stop Buffer</span>
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Stop-Loss Buffer Below Range Low</span>
                <span className={cn("font-mono font-black", isProtected ? "text-teal-600" : "text-rose-600")}>${buffer}</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="15" 
                value={buffer}
                onChange={(e) => setBuffer(parseInt(e.target.value))}
                className="w-full accent-[#071B36]"
              />
              <span className="text-[9px] font-bold text-slate-400 block">
                Range Low is set at <span className="font-bold text-[#071B36] font-mono">$50.00</span>.
              </span>
            </div>
            
            <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-bold text-slate-600 flex items-start gap-2">
              <Info size={14} className="text-teal-600 shrink-0 mt-0.5" />
              <span>Stops placed exactly at the range low are highly vulnerable to institutional liquidity sweeps.</span>
            </div>
          </div>

          {/* Results Graphic */}
          <div className="md:col-span-6 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Sweep Simulation</span>
                <span className={cn(
                  "text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border",
                  isProtected ? "bg-teal-950 border-teal-800 text-teal-300" : "bg-rose-950 border-rose-800 text-rose-300"
                )}>
                  {isProtected ? "Stop Protected" : "Vulnerable to Sweeps"}
                </span>
              </div>

              {/* Graphic Candle showing sweep */}
              <div className="h-32 w-full bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden">
                {/* Range Low */}
                <div className="absolute left-0 right-0 top-1/3 border-t border-slate-700 border-dashed z-0 flex justify-between px-2">
                  <span className="text-[6px] font-mono text-slate-400 -mt-2">RANGE SUPPORT FLOOR ($50)</span>
                </div>

                {/* Stop Line */}
                <div 
                  className="absolute left-0 right-0 border-t transition-all duration-300 z-10 flex justify-between px-2"
                  style={{ top: `${33 + buffer * 5}%` }}
                >
                  <span className={cn("text-[6px] font-mono -mt-2.5", isProtected ? "text-teal-400" : "text-rose-500")}>
                    STOP-LOSS ($50 - ${buffer})
                  </span>
                </div>

                <div className="text-[7px] text-slate-500 font-mono mt-auto relative z-20">
                  {isProtected 
                    ? "Safe: Stop-loss is placed outside the typical range sweep zone ($50.00 to $45.00)."
                    : "Dangerous: Stop-loss lies inside the sweep corridor. A spike below support will stop you out."}
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
 * 4. StructuralVsTimeInvalidation: Price vs Time stops
 */
export const StructuralVsTimeInvalidation = () => {
  const [activeStop, setActiveStop] = useState<"structural" | "time">("structural");

  return (
    <InstitutionalFrame label="Invalidation Boundaries Comparison" id="SHLD-1.2-COMP">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="flex justify-center gap-3 mb-2">
          <button
            onClick={() => setActiveStop("structural")}
            className={cn(
              "px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              activeStop === "structural"
                ? "bg-[#071B36] text-white border-[#071B36]"
                : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            Structural Stop
          </button>
          <button
            onClick={() => setActiveStop("time")}
            className={cn(
              "px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              activeStop === "time"
                ? "bg-[#071B36] text-white border-[#071B36]"
                : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            Time Stop
          </button>
        </div>

        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            {/* Info Side */}
            <div className="md:col-span-7 space-y-4">
              <div className="space-y-1.5">
                <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border border-[#071B36] text-[#071B36] inline-block">
                  {activeStop === "structural" ? "Price Coordinate Stop" : "Elapsed Duration Stop"}
                </span>
                <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">
                  {activeStop === "structural" ? "Structural Invalidation" : "Time Invalidation"}
                </h4>
              </div>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                {activeStop === "structural"
                  ? "Exiting because price has crossed a key price coordinate on the chart, proving the technical thesis incorrect. This is standard, non-negotiable stop-loss placement based on swing points or ranges."
                  : "Exiting because price has consolidated too long inside a zone without initiating the expected momentum expansion. If buyers were truly active, price should have expanded. Sideways consolidation represents momentum failure."}
              </p>
            </div>

            {/* Display Side */}
            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden min-h-[180px]">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
              <div className="space-y-3 relative z-10 text-center flex-1 flex flex-col justify-center">
                {activeStop === "structural" ? (
                  <>
                    <ShieldAlert size={32} className="text-rose-400 mx-auto" />
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Exit Trigger</span>
                    <span className="text-xs font-black text-white uppercase tracking-tight">Price breaches coordinate</span>
                  </>
                ) : (
                  <>
                    <Clock size={32} className="text-teal-400 mx-auto" />
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Exit Trigger</span>
                    <span className="text-xs font-black text-white uppercase tracking-tight">Time limit reached</span>
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
 * 5. MappingInvalidationDrill: Practice component
 */
export const MappingInvalidationDrill = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  const options = [
    {
      id: "A",
      text: "At $164, just below the entry price to minimize loss size.",
      isCorrect: false,
      feedback: "Incorrect. Placing a stop at $164 ignores market structure and will likely be triggered by normal price noise."
    },
    {
      id: "B",
      text: "Below $162 (the previous major Higher Low).",
      isCorrect: true,
      feedback: "Correct! The previous major Higher Low ($162) is the trend anchor. If price breaks below $162, it prints a Lower Low, invalidating the bullish trend sequence. Placing the stop below $162 is the most structurally objective decision."
    },
    {
      id: "C",
      text: "Below $155, to ensure the stop is extremely safe.",
      isCorrect: false,
      feedback: "Incorrect. While safe, a stop below $155 is unnecessarily wide, requiring a tiny position size and ruined risk-reward ratio."
    },
    {
      id: "D",
      text: "At $162.90, just below the pullback's local swing low.",
      isCorrect: false,
      feedback: "Incorrect. The local low is minor; price routinely sweeps local lows to test the major trend anchor ($162) before continuing."
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
    <InstitutionalFrame label="Practice Drill: Mapping Invalidation" id="SHLD-1.2-DRL" status="DRILL ACTIVE">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm space-y-4">
          <p className="text-xs font-bold text-[#071B36] leading-relaxed">
            You are planning a long trade on a bullish chart. The trend sequence has printed Higher Lows at $150, $155, and $162. You are entering on a pullback to $165. The pullback has printed a local H1 swing low at $163. Where is the most objective, structurally secure invalidation checkpoint?
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
 * 6. InvalidationDebrief: Summary debrief component
 */
export const InvalidationDebrief = () => {
  return (
    <InstitutionalFrame label="Debrief: Stop Safety Mastered" id="SHLD-1.2-DBF">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Summary Box */}
          <div className="md:col-span-7 space-y-4 flex flex-col justify-center">
            <span className="text-[10px] font-extrabold text-rose-600 uppercase tracking-widest bg-rose-50 px-2.5 py-1 rounded border border-rose-200 inline-block">
              Invalidation Locked
            </span>
            <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">The Non-Negotiable Exit Contract</h3>
            <p className="text-xs text-slate-500 font-semibold leading-relaxed">
              You have completed the core concept of defining invalidation checkpoints. You now know that a professional trade plan treats the invalidation level as a hard, non-negotiable boundary. By locating the structural anchors on your chart (Higher Lows, Range Extremes) and positioning your stop-loss behind them with a buffer, you ensure that you only exit when your thesis is proven wrong.
            </p>
          </div>

          {/* Graphics Display */}
          <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
            <div className="space-y-4 relative z-10">
              <span className="text-[9px] font-mono font-black text-slate-400 uppercase tracking-widest block">System Diagnostics</span>
              <h4 className="text-sm font-black uppercase text-rose-400">Boundary Protected</h4>
              
              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-[10px] font-mono leading-normal text-rose-500">
                VERDICT: Core invalidation components fully resolved. Ready to proceed to Forex, Gold, or Crypto roadway checks.
              </div>
            </div>
          </div>

        </div>
      </div>
    </InstitutionalFrame>
  );
};
