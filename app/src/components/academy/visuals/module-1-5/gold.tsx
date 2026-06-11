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
  Zap,
  DollarSign
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { InstitutionalFrame, MentorInsight } from "./shared";

/**
 * 1. GoldSynthesisBrief: Gold briefing
 */
export const GoldSynthesisBrief = () => {
  return (
    <InstitutionalFrame label="Gold Plan Synthesis Brief" id="GD-1.5-BRF">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 space-y-3">
              <span className="text-[9px] font-black uppercase tracking-widest text-teal-600 bg-teal-50 px-2 py-0.5 rounded border border-teal-100 inline-block">
                Final Synthesis
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">
                Gold Written Trade Plan
              </h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                In this module, you will synthesize gold-specific variables (US session overlaps, Real Treasury Yields, ATR volatility scaling, dynamic position sizing) into a cohesive written plan.
              </p>
            </div>
            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden min-h-[180px]">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
              <div className="space-y-3 relative z-10 text-center flex-1 flex flex-col justify-center">
                <FileText size={32} className="text-teal-400 mx-auto animate-pulse" />
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Gold Template</span>
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
 * 2. GoldSynthesisChecklist: Gold planning checklist
 */
export const GoldSynthesisChecklist = () => {
  const [checkedPillars, setCheckedPillars] = useState<Record<number, boolean>>({
    1: false, 2: false, 3: false, 4: false, 5: false, 6: false
  });

  const togglePillar = (id: number) => {
    setCheckedPillars(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const allChecked = Object.values(checkedPillars).every(Boolean);

  const pillars = [
    { id: 1, name: "US Session Overlap", desc: "Is the trade planned during high liquidity London/NY session hours?" },
    { id: 2, name: "Real Yield Context Check", desc: "Are US Real Treasury Yields stable, confirming macro demand?" },
    { id: 3, name: "Key S/R Location", desc: "Is entry positioned at major structural HTF zones?" },
    { id: 4, name: "Entry Trigger", desc: "Did lower timeframe price action confirm buyer/seller strength?" },
    { id: 5, name: "Stop Buffer ($3.00+)", desc: "Is the stop-loss wide enough to avoid normal volatility sweeps?" },
    { id: 6, name: "Dynamic Lot Size", desc: "Is position size calculated to lock risk at 1% of account?" }
  ];

  return (
    <InstitutionalFrame label="Gold Planning Checklist" id="GD-1.5-CHK">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm space-y-4">
          <span className="text-[9px] font-black uppercase tracking-widest text-[#071B36] block">Gold Checkpoints</span>
          
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
                  <span className="font-black uppercase tracking-wider block">Gold Checklist Verified</span>
                  <p className="text-slate-600 font-semibold font-mono">ALL GOLD CHECKPOINTS COMPLETED. RISK LOCKED.</p>
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
 * 3. GoldPlanBuilderPanel: Builder panel standby.
 */
export const GoldPlanBuilderPanel = () => {
  return (
    <InstitutionalFrame label="Gold Written Plan Synthesis Panel" id="GD-1.5-BLD">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm flex flex-col justify-center items-center text-center">
          <DollarSign size={36} className="text-teal-400 mb-2 animate-pulse" />
          <span className="text-xs font-mono font-bold text-[#071B36] uppercase">Gold Synthesis Panel Standby</span>
          <p className="text-slate-500 text-[11px] mt-1.5 leading-relaxed max-w-md">
            Use this panel to compile Gold contract parameters, US treasury yield directions, and ATR volatility limits. Keep your stop buffers wide to survive sweeps.
          </p>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 4. GoldPlanAuditComparison: Comparison visual.
 */
export const GoldPlanAuditComparison = () => {
  return (
    <InstitutionalFrame label="Gold Plan Quality Audit" id="GD-1.5-COMP">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            <div className="md:col-span-6 space-y-4">
              <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border border-teal-600 text-teal-600 bg-teal-50 inline-block">
                Complete Gold Plan
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">Volatility sized, yield aligned limits</h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                ボラティリティ指標（ATR）に基づき、スリッページを考慮した指値注文、実質金利の確認、および動的ポジションサイズ計算がすべて確定して書き出されているプランです。
              </p>
            </div>

            <div className="md:col-span-6 space-y-4 border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-6">
              <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border border-rose-600 text-rose-600 bg-rose-50 inline-block">
                Vague / Incomplete Plan
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">Fixed sizing vulnerable to sweeps</h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                ボラティリティを考慮せず、一定のロットサイズで取引を行うプランです。損切り幅が狭すぎて簡単にカットされるか、損失が想定額を遥かに上回るリスクがあります。
              </p>
            </div>

          </div>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 5. GoldLevel1GateDrill: Graduation assessment drill.
 */
export const GoldLevel1GateDrill = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  const options = [
    {
      id: "A",
      text: "Yes. The plan contains all five pillars, the stop buffer ($8.00) is safe, position size is correctly calculated to risk exactly $100, and the reward ($18.00) yields a feasible 2.25R (above 2.0R).",
      isCorrect: true,
      feedback: "Correct! You have passed the Gold Level 1 graduation assessment. This plan is fully synthesized and meets all standards: Context (bullish), Location ($2,050 support), stop buffer ($8.00), position size (0.125 lots, or 12.5 ounces, risking exactly $100), and R-multiple (2.25R). You are ready to proceed to Level 2 (Execution Mechanics)!"
    },
    {
      id: "B",
      text: "No, because a 0.125 lot size is not allowed.",
      isCorrect: false,
      feedback: "Incorrect. Micro-lots allow you to trade in decimal sizes (0.125 lots is 12.5 ounces, which is standard on ECN brokers)."
    },
    {
      id: "C",
      text: "No, because the stop buffer ($8.00) is too wide.",
      isCorrect: false,
      feedback: "Incorrect. Gold requires wider stops to avoid liquidity sweeps; reducing it would increase stop-out risk."
    },
    {
      id: "D",
      text: "No, because the target should be set at $2,080.",
      isCorrect: false,
      feedback: "Incorrect. The target must align with structural barriers ($2,068 H4 resistance). Arbitrarily increasing it to $2,080 to get a higher R-multiple is a greed error."
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
    <InstitutionalFrame label="Gold Graduation Assessment" id="GD-1.5-DRL" status="ASSESSMENT ACTIVE">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm space-y-4">
          <p className="text-xs font-bold text-[#071B36] leading-relaxed">
            Review this trade plan: Asset: Gold. Context: H4 bullish trend, real yields consolidated. Location: H1 swing support at $2,050. Invalidation: $2,042 ($8.00 risk/80 pips). Target: $2,068 ($18.00 reward). Account risk: $100. Lot size: 0.125 lots. Does this plan meet all Level 1 standards for systematic execution?
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
 * 6. GoldSynthesisDebrief: Graduation debrief certified screen
 */
export const GoldSynthesisDebrief = () => {
  return (
    <InstitutionalFrame label="Gold Level 1 Certified" id="GD-1.5-DBF">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          <div className="md:col-span-7 space-y-4 flex flex-col justify-center">
            <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-teal-50 px-2.5 py-1 rounded border border-teal-200 inline-block">
              Level 1 Certified
            </span>
            <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">Written Plan Synthesis Mastered</h3>
            <p className="text-xs text-slate-500 font-semibold leading-relaxed">
              You have completed the Gold roadway for Level 1: Planning Foundation. You have transitioned from charts to constructing fully synthesized, risk-aware written trade plans.
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
