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
  Coins
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { InstitutionalFrame, MentorInsight } from "./shared";

/**
 * 1. CryptoSynthesisBrief: Crypto briefing
 */
export const CryptoSynthesisBrief = () => {
  return (
    <InstitutionalFrame label="Crypto Plan Synthesis Brief" id="CR-1.5-BRF">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 space-y-3">
              <span className="text-[9px] font-black uppercase tracking-widest text-teal-600 bg-teal-50 px-2 py-0.5 rounded border border-teal-100 inline-block">
                Final Synthesis
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">
                Crypto Written Trade Plan
              </h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                In this module, you will synthesize crypto-specific variables (liquidity depth, ask walls, spot-perp premiums, funding rate drag, liquidation-safe stops) into a cohesive written plan.
              </p>
            </div>
            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden min-h-[180px]">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
              <div className="space-y-3 relative z-10 text-center flex-1 flex flex-col justify-center">
                <FileText size={32} className="text-teal-400 mx-auto animate-pulse" />
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Crypto Template</span>
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
 * 2. CryptoSynthesisChecklist: Crypto planning checklist
 */
export const CryptoSynthesisChecklist = () => {
  const [checkedPillars, setCheckedPillars] = useState<Record<number, boolean>>({
    1: false, 2: false, 3: false, 4: false, 5: false, 6: false
  });

  const togglePillar = (id: number) => {
    setCheckedPillars(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const allChecked = Object.values(checkedPillars).every(Boolean);

  const pillars = [
    { id: 1, name: "Liquidity Window", desc: "Is the setup occurring during active weekdays instead of illiquid weekends?" },
    { id: 2, name: "Spot Book Wall Check", desc: "Did you verify that no massive limit sell walls sit before your target?" },
    { id: 3, name: "Structural Location", desc: "Is entry positioned at clean chart support/resistance?" },
    { id: 4, name: "Entry Trigger", desc: "Did lower timeframe candles confirm buyer/seller strength?" },
    { id: 5, name: "Liquidation Price Check", desc: "Is your stop-loss placed above the exchange liquidation price?" },
    { id: 6, name: "Funding-Adjusted Target", desc: "Did you calculate and adjust targets for funding rate decay drag?" }
  ];

  return (
    <InstitutionalFrame label="Crypto Planning Checklist" id="CR-1.5-CHK">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm space-y-4">
          <span className="text-[9px] font-black uppercase tracking-widest text-[#071B36] block">Crypto Checkpoints</span>
          
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
                  <span className="font-black uppercase tracking-wider block">Crypto Checklist Verified</span>
                  <p className="text-slate-600 font-semibold font-mono">ALL CRYPTO CHECKPOINTS COMPLETED. COLLATERAL SAFE.</p>
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
 * 3. CryptoPlanBuilderPanel: Builder standby.
 */
export const CryptoPlanBuilderPanel = () => {
  return (
    <InstitutionalFrame label="Crypto Written Plan Synthesis Panel" id="CR-1.5-BLD">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm flex flex-col justify-center items-center text-center">
          <Coins size={36} className="text-teal-400 mb-2 animate-pulse" />
          <span className="text-xs font-mono font-bold text-[#071B36] uppercase">Crypto Synthesis Panel Standby</span>
          <p className="text-slate-500 text-[11px] mt-1.5 leading-relaxed max-w-md">
            Use this panel to compile spot orderbook ask walls, perp premium offsets, liquidation price checks, and funding rate drag. Keep stops above liquidation price.
          </p>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 4. CryptoPlanAuditComparison: Comparison visual.
 */
export const CryptoPlanAuditComparison = () => {
  return (
    <InstitutionalFrame label="Crypto Plan Quality Audit" id="CR-1.5-COMP">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            <div className="md:col-span-6 space-y-4">
              <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border border-teal-600 text-teal-600 bg-teal-50 inline-block">
                Complete Crypto Plan
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">Depth-checked, liquidation-safe limits</h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                現物取引所の板情報（指値の厚み）、レバレッジから計算された清算価格、および資金調達率による減衰を考慮した損切り・利食い値が確定して書き出されているプランです。
              </p>
            </div>

            <div className="md:col-span-6 space-y-4 border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-6">
              <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border border-rose-600 text-rose-600 bg-rose-50 inline-block">
                Vague / Incomplete Plan
              </span>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">High-leverage plans vulnerable to liquidation</h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                清算価格を考慮せず、損切り注文を入れるだけのプランです。急激な変動時に、損切り注文が執行される前に強制決済（ロスカット）され、ペナルティを課されるリスクがあります。
              </p>
            </div>

          </div>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 5. CryptoLevel1GateDrill: Graduation assessment drill.
 */
export const CryptoLevel1GateDrill = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  const options = [
    {
      id: "A",
      text: "No. The plan is invalid because the exchange liquidation price ($61,200) sits above your technical invalidation checkpoint ($60,800), creating the risk of getting liquidated before your stop-loss triggers.",
      isCorrect: true,
      feedback: "Correct! The liquidation price ($61,200) must always sit *below* your technical invalidation checkpoint ($60,800). If liquidation is higher, the exchange will forcefully close your position and charge a liquidation penalty before price reaches your planned stop-loss coordinate. You must add more collateral, reduce leverage, or reject the plan."
    },
    {
      id: "B",
      text: "Yes. The plan contains all five pillars, all coordinates are explicitly defined, and the math yields a feasible 2.08R.",
      isCorrect: false,
      feedback: "Incorrect. The R-multiple is feasible, but the liquidation price sits above your stop-loss, making the trade unsafe."
    },
    {
      id: "C",
      text: "Yes, because the funding rate (0.02%) is low.",
      isCorrect: false,
      feedback: "Incorrect. Low funding does not protect you from getting liquidated before your stop-loss triggers."
    },
    {
      id: "D",
      text: "No, because a $1,200 stop is too wide for BTC.",
      isCorrect: false,
      feedback: "Incorrect. The stop width is structural; placing it below the $62,000 support ($60,800) is correct."
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
    <InstitutionalFrame label="Crypto Graduation Assessment" id="CR-1.5-DRL" status="ASSESSMENT ACTIVE">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm space-y-4">
          <p className="text-xs font-bold text-[#071B36] leading-relaxed">
            Review this trade plan: Asset: BTC/USDT perp. Context: H4 bullish trend. Location: H1 support at $62,000. Invalidation: $60,800 ($1,200 risk). Target: $64,500 ($2,500 reward). Funding Rate: 0.02%. Exchange liquidation price: $61,200. Does this plan meet all Level 1 standards for systematic execution?
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
 * 6. CryptoSynthesisDebrief: Debrief certified screen.
 */
export const CryptoSynthesisDebrief = () => {
  return (
    <InstitutionalFrame label="Crypto Level 1 Certified" id="CR-1.5-DBF">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          <div className="md:col-span-7 space-y-4 flex flex-col justify-center">
            <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-teal-50 px-2.5 py-1 rounded border border-teal-200 inline-block">
              Level 1 Certified
            </span>
            <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">Written Plan Synthesis Mastered</h3>
            <p className="text-xs text-slate-500 font-semibold leading-relaxed">
              You have completed the Crypto roadway for Level 1: Planning Foundation. You have transitioned from charts to constructing fully synthesized, risk-aware written trade plans.
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
