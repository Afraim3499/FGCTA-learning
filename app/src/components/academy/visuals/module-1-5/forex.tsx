"use client";

import React, { useState } from "react";
import { 
  Target, 
  ArrowRight, 
  TrendingUp, 
  ShieldAlert, 
  CheckCircle2, 
  XCircle, 
  FileText,
  BookmarkCheck,
  Zap
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { InstitutionalFrame, MentorInsight } from "./shared";

/**
 * 1. ForexSynthesisBrief: Forex track briefing
 */
export const ForexSynthesisBrief = () => {
  return (
    <InstitutionalFrame label="Forex Plan Synthesis Brief" id="FX-1.5-BRF">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 space-y-3">
              <span className="text-[9px] font-black uppercase tracking-widest text-teal-600 bg-teal-50 px-2 py-0.5 rounded border border-teal-100 inline-block">
                Final Synthesis
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">
                Forex Written Trade Plan
              </h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                In this module, you will synthesize currency-specific variables (sessions, DXY correlation, ADR volatility limits, ECN accounts) into a cohesive written plan.
              </p>
            </div>
            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden min-h-[180px]">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
              <div className="space-y-3 relative z-10 text-center flex-1 flex flex-col justify-center">
                <FileText size={32} className="text-teal-400 mx-auto animate-pulse" />
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Forex Template</span>
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
 * 2. ForexSynthesisChecklist: Forex planning checklist
 */
export const ForexSynthesisChecklist = () => {
  const [checkedPillars, setCheckedPillars] = useState<Record<number, boolean>>({
    1: false, 2: false, 3: false, 4: false, 5: false, 6: false
  });

  const togglePillar = (id: number) => {
    setCheckedPillars(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const allChecked = Object.values(checkedPillars).every(Boolean);

  const pillars = [
    { id: 1, name: "Active Session Window", desc: "Is the setup occurring during peak London or NY open volatility?" },
    { id: 2, name: "DXY Index Alignment", desc: "Is DXY macro structure in agreement with the pair direction?" },
    { id: 3, name: "Structural Location", desc: "Is price hitting a major support/resistance floor?" },
    { id: 4, name: "Entry Trigger", desc: "Did lower timeframe price actions confirm buyer/seller entry?" },
    { id: 5, name: "Spread-Adjusted Stop", desc: "Is the stop placement wide enough to absorb broker spreads?" },
    { id: 6, name: "ADR-Gated Target", desc: "Does the target distance sit safely below 70% of the pair's daily ADR?" }
  ];

  return (
    <InstitutionalFrame label="Forex Planning Checklist" id="FX-1.5-CHK">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm space-y-4">
          <span className="text-[9px] font-black uppercase tracking-widest text-[#071B36] block">Forex Checkpoints</span>
          
          <div className="space-y-2">
            {pillars.map((p) => (
              <button
                key={p.id}
                onClick={() => togglePillar(p.id)}
                className={cn(
                  "w-full p-3.5 rounded-2xl border text-left text-xs font-semibold flex items-start gap-4 transition-all duration-300 shadow-sm",
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
                  <span className="font-black uppercase tracking-wider block">Forex Checklist Verified</span>
                  <p className="text-slate-600 font-semibold font-mono">ALL FX CHECKPOINTS COMPLETED. PLAN AUTHORIZED.</p>
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
 * 3. ForexPlanBuilderPanel: Builder panel.
 */
export const ForexPlanBuilderPanel = () => {
  return (
    <InstitutionalFrame label="Forex Written Plan Synthesis Panel" id="FX-1.5-BLD">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm flex flex-col justify-center items-center text-center">
          <Zap size={36} className="text-teal-400 mb-2 animate-pulse" />
          <span className="text-xs font-mono font-bold text-[#071B36] uppercase">Forex Synthesis Panel Standby</span>
          <p className="text-slate-500 text-[11px] mt-1.5 leading-relaxed max-w-md">
            Use this panel to compile currency session boundaries, spread values, and daily ADR limits. Ensure all values are checked to lock in expectancy.
          </p>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 4. ForexPlanAuditComparison: Comparison visual
 */
export const ForexPlanAuditComparison = () => {
  return (
    <InstitutionalFrame label="Forex Plan Quality Audit" id="FX-1.5-COMP">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            <div className="md:col-span-6 space-y-4">
              <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border border-teal-600 text-teal-600 bg-teal-50 inline-block">
                Complete Forex Plan
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">Session-aligned, ADR-checked limits</h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                活動セッション（ロンドン/NY）、DXYとの相関、ADRの70%未満に収まる目標値、ECNスプレッドを考慮した損切り価格がすべて確定し、書き出されている計画的なプランです。
              </p>
            </div>

            <div className="md:col-span-6 space-y-4 border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-6">
              <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border border-rose-600 text-rose-600 bg-rose-50 inline-block">
                Vague / Incomplete Plan
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">Vague parameters vulnerable to emotions</h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                ボラティリティの上限（ADR）を考慮せず、セッションを意識しないプランです。閑散期にエントリーしてしまい、余計なスプレッドや金利を払い、損失につながります。
              </p>
            </div>

          </div>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 5. ForexLevel1GateDrill: Graduation assessment drill.
 */
export const ForexLevel1GateDrill = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  const options = [
    {
      id: "A",
      text: "No. The plan is unfeasible because the target (75 pips) is too close to the daily ADR limit (80 pips), violating the 70% ADR feasibility threshold.",
      isCorrect: true,
      feedback: "Correct! The R-multiple is 3.0R, but the target (75 pips) occupies 93.7% of the pair's daily ADR (80 pips), violating the 70% feasibility limit (56 pips). Expecting GBP/USD to complete almost its entire daily movement inside your trade window is a low-probability bet. The target must be scaled closer (e.g. 50 pips, yielding a feasible 2.0R plan) or the plan rejected."
    },
    {
      id: "B",
      text: "Yes. The plan contains all five pillars, all coordinates are explicitly defined, and the math yields a feasible 3.0R.",
      isCorrect: false,
      feedback: "Incorrect. The R-multiple is high, but the target exceeds the ADR volatility limit, making it unfeasible for an intraday setup."
    },
    {
      id: "C",
      text: "Yes, because London session is highly active.",
      isCorrect: false,
      feedback: "Incorrect. Active sessions do not justify violating the ADR volatility gating rules."
    },
    {
      id: "D",
      text: "No, because a 25-pip stop is too narrow for GBP/USD.",
      isCorrect: false,
      feedback: "Incorrect. A 25-pip stop is standard and structurally sound for GBP/USD swing support."
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
    <InstitutionalFrame label="Forex Graduation Assessment" id="FX-1.5-DRL" status="ASSESSMENT ACTIVE">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm space-y-4">
          <p className="text-xs font-bold text-[#071B36] leading-relaxed">
            Review this trade plan: Pair: GBP/USD. Session: London. Context: H4 bullish trend. Location: H1 support at 1.2650. Invalidation: 1.2625 (25 pips risk). Target: 1.2725 (75 pips reward). ADR: 80 pips. R-multiple: 3.0R. Does this plan meet all Level 1 standards for systematic execution?
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
 * 6. ForexSynthesisDebrief: Debrief certified screen
 */
export const ForexSynthesisDebrief = () => {
  return (
    <InstitutionalFrame label="Forex Level 1 Certified" id="FX-1.5-DBF">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          <div className="md:col-span-7 space-y-4 flex flex-col justify-center">
            <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-teal-50 px-2.5 py-1 rounded border border-teal-200 inline-block">
              Level 1 Certified
            </span>
            <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">Written Plan Synthesis Mastered</h3>
            <p className="text-xs text-slate-500 font-semibold leading-relaxed">
              You have completed the Forex roadway for Level 1: Planning Foundation. You have transitioned from charts to constructing fully synthesized, risk-aware written trade plans.
            </p>
          </div>

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
