"use client";

import React, { useState } from "react";
import { 
  Target, 
  ArrowRight, 
  TrendingUp, 
  ShieldAlert, 
  CheckCircle2, 
  XCircle, 
  Lock,
  Layers,
  FileText,
  BookmarkCheck
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { InstitutionalFrame, MentorInsight } from "./shared";

/**
 * 1. SynthesisBrief: Briefing of trade plan synthesis.
 */
export const SynthesisBrief = () => {
  return (
    <InstitutionalFrame label="Plan Synthesis Brief" id="SY-1.5-BRF">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 space-y-3">
              <span className="text-[9px] font-black uppercase tracking-widest text-teal-600 bg-teal-50 px-2 py-0.5 rounded border border-teal-100 inline-block">
                Final Synthesis
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">
                Written Trade Plan Synthesis
              </h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                In this module, you will synthesize all Level 1 concepts into a single, cohesive trade plan. A valid plan is a strict action contract detailing Context, Location, Entry, Invalidation, Target, and R-multiple.
              </p>
            </div>
            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden min-h-[180px]">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
              <div className="space-y-3 relative z-10 text-center flex-1 flex flex-col justify-center">
                <FileText size={32} className="text-teal-400 mx-auto animate-pulse" />
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Core Template</span>
                <span className="text-xs font-black text-teal-300 uppercase tracking-tight">Written Plan Synthesis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 2. SynthesisChecklist: Five pillars of trade planning.
 */
export const SynthesisChecklist = () => {
  const [checkedPillars, setCheckedPillars] = useState<Record<number, boolean>>({
    1: false, 2: false, 3: false, 4: false, 5: false
  });

  const togglePillar = (id: number) => {
    setCheckedPillars(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const allChecked = Object.values(checkedPillars).every(Boolean);

  const pillars = [
    { id: 1, name: "Market Context", desc: "Is the Higher Timeframe trend structure clear? (Bullish/Bearish/Range)" },
    { id: 2, name: "Key Location", desc: "Is price reaching a high-probability structural support or resistance zone?" },
    { id: 3, name: "Entry Trigger", desc: "Did a lower-timeframe candlestick print to confirm buyer/seller entry?" },
    { id: 4, name: "Invalidation Checkpoint", desc: "Is the stop-loss placed objectively behind structural barriers?" },
    { id: 5, name: "Target Location", desc: "Is the exit target mapped at opposing structure, yielding at least 2.0R?" }
  ];

  return (
    <InstitutionalFrame label="The Five Pillars Checklist" id="SY-1.5-CHK">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm space-y-4">
          <span className="text-[9px] font-black uppercase tracking-widest text-[#071B36] block">Pillar Checklist Gating</span>
          
          <div className="space-y-3">
            {pillars.map((p) => (
              <button
                key={p.id}
                onClick={() => togglePillar(p.id)}
                className={cn(
                  "w-full p-4 rounded-2xl border text-left text-xs font-semibold flex items-start gap-4 transition-all duration-300 shadow-sm",
                  checkedPillars[p.id]
                    ? "bg-teal-50 border-teal-500 text-teal-900 ring-2 ring-teal-100"
                    : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                )}
              >
                <div className={cn(
                  "w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-[10px] font-black border",
                  checkedPillars[p.id]
                    ? "bg-teal-500 border-teal-600 text-white"
                    : "bg-slate-100 border-slate-200 text-slate-500"
                )}>
                  {p.id}
                </div>
                <div className="flex-1 space-y-0.5">
                  <span className="font-bold text-[#071B36] block">{p.name}</span>
                  <span className="text-[11px] text-slate-500 font-normal leading-tight block">{p.desc}</span>
                </div>
              </button>
            ))}
          </div>

          <AnimatePresence>
            {allChecked && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="p-4 bg-teal-50 border border-teal-200 rounded-2xl text-xs font-bold text-teal-900 flex items-start gap-3 shadow-sm mt-4"
              >
                <CheckCircle2 size={16} className="text-teal-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-black uppercase tracking-wider block">Pillars Verified</span>
                  <p className="text-slate-600 font-semibold">All five trade pillars have passed the check. The trade plan is structurally authorized for execution.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 3. PlanBuilderPanel: Interactive template builder where they build trade plans.
 */
export const PlanBuilderPanel = () => {
  const [invalidation, setInvalidation] = useState<string>("");
  const [target, setTarget] = useState<string>("");
  const [risk, setRisk] = useState<number>(0);
  const [reward, setReward] = useState<number>(0);

  const calculatedR = risk > 0 ? (reward / risk).toFixed(2) : "0.00";
  const isValid = parseFloat(calculatedR) >= 2.0 && invalidation.length > 0 && target.length > 0;

  return (
    <InstitutionalFrame label="Written Plan Synthesis Panel" id="SY-1.5-BLD">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Builder Form */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-[2rem] p-6 space-y-4 shadow-sm">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Complete Your Plan</span>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider">Invalidation Level</label>
                <input 
                  type="text" 
                  placeholder="e.g. $97.00" 
                  value={invalidation}
                  onChange={(e) => setInvalidation(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#071B36]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider">Target Level</label>
                <input 
                  type="text" 
                  placeholder="e.g. $108.00" 
                  value={target}
                  onChange={(e) => setTarget(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#071B36]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider">Plan Risk ($ or pips)</label>
                <input 
                  type="number" 
                  placeholder="e.g. 2.00" 
                  value={risk || ""}
                  onChange={(e) => setRisk(parseFloat(e.target.value) || 0)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#071B36]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider">Plan Reward ($ or pips)</label>
                <input 
                  type="number" 
                  placeholder="e.g. 5.00" 
                  value={reward || ""}
                  onChange={(e) => setReward(parseFloat(e.target.value) || 0)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#071B36]"
                />
              </div>
            </div>
          </div>

          {/* Result Shield */}
          <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
            
            <div className="space-y-4 relative z-10 w-full h-full flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Plan Expectancy</span>
                <span className={cn(
                  "text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border",
                  isValid ? "bg-teal-950 border-teal-800 text-teal-300" : "bg-rose-950 border-rose-800 text-rose-300"
                )}>
                  {isValid ? "Plan Verified" : "Verification Failed"}
                </span>
              </div>

              <div className="text-center py-4">
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Calculated Ratio</span>
                <h2 className={cn("text-3xl font-black font-mono tracking-tight", isValid ? "text-teal-400" : "text-rose-500")}>
                  {calculatedR}R
                </h2>
              </div>

              <div className="text-[8px] text-slate-400 font-mono text-center">
                {isValid 
                  ? "Success: Written trade plan verified and ready for execution."
                  : "Verification failed: Enter invalidation/target and ensure R-multiple exceeds 2.0R."}
              </div>
            </div>
          </div>

        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 4. PlanAuditComparison: Compare complete vs vague plan.
 */
export const PlanAuditComparison = () => {
  return (
    <InstitutionalFrame label="Plan Quality Audit" id="SY-1.5-COMP">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            <div className="md:col-span-6 space-y-4">
              <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border border-teal-600 text-teal-600 bg-teal-50 inline-block">
                Complete Systematic Plan
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">Structured coordinates and locked risk</h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                すべての変数（エントリー、損切り、ターゲット）が具体的な価格値として事前に書き出され、R倍数計算が検証されています。実行段階で裁量の余地がなく、ルールに従って機械的に注文を出します。
              </p>
            </div>

            <div className="md:col-span-6 space-y-4 border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-6">
              <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border border-rose-600 text-rose-600 bg-rose-50 inline-block">
                Vague / Incomplete Plan
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">Loose parameters open to emotional bias</h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                「だいたいこの辺でカットする」「目標は適当に利益が出たところ」といった曖昧なプランです。トレード中の恐怖や強欲による感情的バイアスに晒され、ルールの一貫性を保つことができません。
              </p>
            </div>

          </div>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 5. Level1GateDrill: Graduation assessment drill.
 */
export const Level1GateDrill = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  const options = [
    {
      id: "A",
      text: "Yes. The plan contains all five pillars, all coordinates are explicitly defined, and the math yields a feasible 2.5R (above the 2.0R threshold).",
      isCorrect: true,
      feedback: "Correct! You have passed the Level 1 graduation assessment. This plan is fully synthesized and meets all standards: Context (H4 bullish), Location ($120 support), Trigger (engulfing), Invalidation ($118), Target ($125), and R-multiple (2.5R). You are ready to proceed to Level 2 (Execution Mechanics)!"
    },
    {
      id: "B",
      text: "No, because the entry trigger should be on the H4 timeframe.",
      isCorrect: false,
      feedback: "Incorrect. Using lower-timeframe entry triggers (M15) to enter higher-timeframe structures (H1/H4) is a standard and recommended practice."
    },
    {
      id: "C",
      text: "No, because a $2.00 stop is too tight.",
      isCorrect: false,
      feedback: "Incorrect. The stop width is structural; placing it below the $120 support ($118) is correct."
    },
    {
      id: "D",
      text: "No, because the target should be set at $130.",
      isCorrect: false,
      feedback: "Incorrect. The target must align with structural barriers ($125 daily resistance). Arbitrarily increasing it to $130 to get a higher R-multiple is a greed error."
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
    <InstitutionalFrame label="Level 1 Graduation Assessment" id="SY-1.5-DRL" status="ASSESSMENT ACTIVE">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm space-y-4">
          <p className="text-xs font-bold text-[#071B36] leading-relaxed">
            Review this trade plan: Context: H4 bullish structure. Location: H1 swing high broken support at $120. Entry Trigger: M15 bullish engulfing at support. Invalidation: $118 ($2.00 risk). Target: $125 ($5.00 reward). R-multiple: 2.5R. Does this plan meet all Level 1 standards for systematic execution?
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
                {selectedData.isCorrect ? "Graduation Passed" : "Graduation Failed"}
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
 * 6. SynthesisDebrief: Certified Screen
 */
export const SynthesisDebrief = () => {
  return (
    <InstitutionalFrame label="Level 1 Planning Certified" id="SY-1.5-DBF">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Summary Box */}
          <div className="md:col-span-7 space-y-4 flex flex-col justify-center">
            <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-teal-50 px-2.5 py-1 rounded border border-teal-200 inline-block">
              Level 1 Complete
            </span>
            <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">Written Plan Synthesis Mastered</h3>
            <p className="text-xs text-slate-500 font-semibold leading-relaxed">
              You have completed Level 1: Planning Foundation. You have transitioned from simply reading market charts to constructing fully synthesized, risk-aware written trade plans.
            </p>
          </div>

          {/* Graphics Display */}
          <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
            <div className="space-y-4 relative z-10 text-center flex-1 flex flex-col justify-center">
              <BookmarkCheck size={48} className="text-teal-400 mx-auto animate-bounce" />
              <h4 className="text-base font-black uppercase text-teal-400 mt-2">LEVEL 1 CERTIFIED</h4>
              <p className="text-[9px] text-slate-400 font-mono mt-1">Ready for Level 2: Execution Mechanics</p>
            </div>
          </div>

        </div>
      </div>
    </InstitutionalFrame>
  );
};
