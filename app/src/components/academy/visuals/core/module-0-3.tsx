"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Maximize2,
  ArrowDownToLine,
  Target,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Database,
  ArrowUp,
  ArrowDown,
  FileText,
  Zap,
  Lightbulb
} from "lucide-react";

/**
 * LURNAVA INSTITUTIONAL DESIGN TOKENS
 */
const UI = {
  navy: "#071B36",
  teal: "#0D9488",
  slate: "#475569",
  border: "#E2E8F0",
  bg: "#F8FBFC",
  rose: "#BE123C",
  sky: "#0284C7",
  amber: "#D97706"
};

/**
 * Institutional Frame Component for Module 0.3
 */
const InstitutionalFrame = ({ 
  children, 
  label, 
  status = "AUDIT STANDBY",
  id = "LN-0.3-AUD"
}: { 
  children: React.ReactNode; 
  label: string; 
  status?: string;
  id?: string;
}) => (
  <div className="w-full h-full min-h-[450px] bg-[#F8FBFC] border border-[#E2E8F0] rounded-[2rem] p-6 md:p-8 flex flex-col relative overflow-hidden shadow-sm">
    {/* Grid Background Effect */}
    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] bg-[length:24px_24px]" />
    
    {/* Top Header Row */}
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 relative z-10 border-b border-slate-200 pb-4 shrink-0">
      <div className="flex flex-col">
        <div className="flex items-center gap-2 mb-1">
          <Database size={10} className="text-teal-600 animate-pulse" />
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.25em]">Evidence Audit Stream</span>
        </div>
        <h4 className="text-base font-black text-[#071B36] uppercase tracking-tighter italic leading-tight">{label}</h4>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-end">
          <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Audit ID</span>
          <span className="text-[10px] font-mono text-[#071B36] font-bold">{id}</span>
        </div>
        <div className="w-px h-6 bg-slate-200" />
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg shadow-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
          <span className="text-[9px] font-black text-[#071B36] uppercase tracking-widest">{status}</span>
        </div>
      </div>
    </div>

    {/* Dynamic Content Center Stage */}
    <div className="flex-1 flex flex-col items-center justify-center relative z-10 w-full min-h-0">
      {children}
    </div>
  </div>
);


/**
 * 0.3 - Candle Evidence Board
 */
export const CandleEvidenceBoard = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <InstitutionalFrame label="Candle Evidence Board" id="LN-0.3-EVID" status="EVIDENCE AUDIT">
      <div className="w-full max-w-4xl mx-auto py-2 flex flex-col items-center gap-6">
        
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <button 
          onMouseEnter={() => setActivePart('body')}
          onMouseLeave={() => setActivePart(null)}
          onFocus={() => setActivePart('body')}
          onBlur={() => setActivePart(null)}
          className={cn(
            "p-6 rounded-[2.5rem] border shadow-sm flex flex-col items-center text-center transition-all duration-300",
            isActive('body') ? "bg-[#EFFDF5] border-emerald-300 shadow-md scale-[1.02]" : "bg-white border-slate-100",
            ""
          )}
        >
          <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors", isActive('body') ? "bg-emerald-100 text-emerald-700" : "bg-emerald-50 text-emerald-600")}>
            <Maximize2 size={24} />
          </div>
          <p className="text-sm font-black text-slate-900 mb-2">1. The Body</p>
          <div className={cn("w-12 h-20 bg-emerald-500 rounded-lg border-2 mb-4 shadow-sm transition-all", isActive('body') ? "border-emerald-300 shadow-emerald-500/20 scale-110" : "border-emerald-400")} />
          <p className="text-[11px] font-bold text-slate-500 leading-tight">
            The body records <span className="text-slate-900">open-to-close movement</span>.
          </p>
        </button>

        <button 
          onMouseEnter={() => setActivePart('wick')}
          onMouseLeave={() => setActivePart(null)}
          onFocus={() => setActivePart('wick')}
          onBlur={() => setActivePart(null)}
          className={cn(
            "p-6 rounded-[2.5rem] border shadow-sm flex flex-col items-center text-center transition-all duration-300",
            isActive('wick') ? "bg-[#FEFBF0] border-amber-300 shadow-md scale-[1.02]" : "bg-white border-slate-100",
            ""
          )}
        >
          <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors", isActive('wick') ? "bg-amber-100 text-amber-700" : "bg-amber-50 text-amber-600")}>
            <ArrowDownToLine size={24} />
          </div>
          <p className="text-sm font-black text-slate-900 mb-2">2. The Wicks</p>
          <div className={cn("flex flex-col items-center mb-4 transition-transform", isActive('wick') ? "scale-110" : "")}>
            <div className={cn("w-0.5 h-12 transition-colors", isActive('wick') ? "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" : "bg-slate-300")} />
            <div className="w-8 h-8 bg-slate-100 border border-slate-200 rounded-sm" />
            <div className={cn("w-0.5 h-6 transition-colors", isActive('wick') ? "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" : "bg-slate-300")} />
          </div>
          <p className="text-[11px] font-bold text-slate-500 leading-tight">
            Wicks show where price <span className="text-slate-900">travelled beyond the body</span> but did not close.
          </p>
        </button>

        <button 
          onMouseEnter={() => setActivePart('close')}
          onMouseLeave={() => setActivePart(null)}
          onFocus={() => setActivePart('close')}
          onBlur={() => setActivePart(null)}
          className={cn(
            "p-6 rounded-[2.5rem] border shadow-sm flex flex-col items-center text-center transition-all duration-300",
            isActive('close') ? "bg-[#F0F7FF] border-blue-300 shadow-md scale-[1.02]" : "bg-white border-slate-100",
            ""
          )}
        >
          <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors", isActive('close') ? "bg-blue-100 text-blue-700" : "bg-blue-50 text-blue-600")}>
            <Target size={24} />
          </div>
          <p className="text-sm font-black text-slate-900 mb-2">3. Close Location</p>
          <div className={cn("flex gap-3 mb-4 transition-transform", isActive('close') ? "scale-110" : "")}>
            <div className={cn("flex flex-col items-center transition-all", isActive('close') ? " shadow-[0_0_8px_rgba(59,130,246,0.5)] bg-[#EFF6FF] rounded" : "")}>
              <div className="w-0.5 h-2 bg-slate-300" />
              <div className="w-4 h-6 bg-emerald-500 rounded-sm" />
              <div className="w-0.5 h-6 bg-slate-300" />
            </div>
            <div className={cn("flex flex-col items-center transition-all", isActive('close') ? "" : "")}>
              <div className="w-0.5 h-6 bg-slate-300" />
              <div className="w-4 h-6 bg-red-500 rounded-sm" />
              <div className="w-0.5 h-2 bg-slate-300" />
            </div>
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-4 bg-slate-300" />
              <div className="w-4 h-4 bg-slate-400 rounded-sm" />
              <div className="w-0.5 h-4 bg-slate-300" />
            </div>
          </div>
          <div className="space-y-1">
            <p className={cn("text-[9px] font-black uppercase tracking-tighter transition-colors", isActive('close') ? "text-blue-700" : "text-slate-900")}>Near High = Stronger finish</p>
            <p className={cn("text-[9px] font-black uppercase tracking-tighter transition-colors", isActive('close') ? "text-blue-700" : "text-slate-900")}>Near Low = Weaker finish</p>
            <p className={cn("text-[9px] font-black uppercase tracking-tighter transition-opacity", isActive('close') ? "opacity-70 text-slate-700" : " text-slate-900")}>Near Middle = Mixed finish</p>
          </div>
        </button>
      </div>

      <div className="w-full p-5 rounded-[2rem] bg-slate-900 text-white">
        <p className="text-[11px] font-bold text-center leading-relaxed">
          The body shows where price opened and closed. Wicks show where price travelled but did not close. Close location helps you judge how the candle finished, but <span className="text-emerald-400">context decides</span> what it means.
        </p>
      </div>
    
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 0.3 - Context Logic Board
 */
export const ContextLogicBoard = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <InstitutionalFrame label="Context Logic Analyzer" id="LN-0.3-LOGIC" status="CONTEXT AUDIT">
      <div className="w-full max-w-4xl mx-auto py-2">
        
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <button 
          onMouseEnter={() => setActivePart('resistance')}
          onMouseLeave={() => setActivePart(null)}
          onFocus={() => setActivePart('resistance')}
          onBlur={() => setActivePart(null)}
          className={cn(
            "p-6 rounded-[2.5rem] border flex flex-col items-center text-center transition-all duration-300",
            isActive('resistance') ? "bg-[#FFF1F2] border-rose-300 shadow-md scale-[1.02]" : "bg-[#FFF5F5] border-rose-100",
            ""
          )}
        >
          <p className="text-[10px] font-black uppercase tracking-widest text-rose-500 mb-4">At Resistance</p>
          <div className={cn(
            "relative w-full h-32 bg-white rounded-2xl border shadow-sm flex items-center justify-center overflow-hidden transition-colors",
            isActive('resistance') ? "border-rose-300 shadow-rose-500/10" : "border-rose-100"
          )}>
            <div className={cn("absolute top-8 left-0 right-0 h-0.5 border-t border-dashed transition-all", isActive('resistance') ? "bg-rose-400 border-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)]" : "bg-rose-300 border-rose-400")} />
            <div className={cn("absolute top-4 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[8px] font-bold uppercase transition-colors", isActive('resistance') ? "bg-rose-200 text-rose-800" : "bg-rose-100 text-rose-600")}>Resistance</div>
            <div className={cn("relative mt-4 flex flex-col items-center transition-transform", isActive('resistance') ? "-translate-y-2" : "translate-y-0")}>
              <div className="w-0.5 h-12 bg-slate-300" />
              <div className="w-6 h-4 bg-emerald-500 rounded-sm" />
              <div className="w-0.5 h-2 bg-slate-300" />
            </div>
          </div>
          <div className={cn("mt-4 px-4 py-2 rounded-xl text-white text-[10px] font-black uppercase tracking-widest transition-colors", isActive('resistance') ? "bg-rose-700 shadow-md" : "bg-rose-600")}>
            Possible Rejection
          </div>
        </button>

        <button 
          onMouseEnter={() => setActivePart('range')}
          onMouseLeave={() => setActivePart(null)}
          onFocus={() => setActivePart('range')}
          onBlur={() => setActivePart(null)}
          className={cn(
            "p-6 rounded-[2.5rem] border flex flex-col items-center text-center transition-all duration-300",
            isActive('range') ? "bg-slate-100 border-slate-300 shadow-md scale-[1.02]" : "bg-slate-50 border-slate-100",
            ""
          )}
        >
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">Inside a Range</p>
          <div className={cn(
            "relative w-full h-32 bg-white rounded-2xl border shadow-sm flex items-center justify-center overflow-hidden transition-colors",
            isActive('range') ? "border-slate-300" : "border-slate-100"
          )}>
            <div className={cn("absolute inset-4 border-2 border-dashed rounded-lg transition-colors", isActive('range') ? "border-slate-400 bg-[#F1F5F9]" : "border-slate-200 bg-[#F8FAFC]")} />
            <div className={cn("relative flex flex-col items-center transition-transform", isActive('range') ? "scale-110" : "scale-100")}>
              <div className="w-0.5 h-4 bg-slate-300" />
              <div className="w-6 h-4 bg-emerald-500 rounded-sm" />
              <div className="w-0.5 h-4 bg-slate-300" />
            </div>
          </div>
          <div className={cn("mt-4 px-4 py-2 rounded-xl text-white text-[10px] font-black uppercase tracking-widest transition-colors", isActive('range') ? "bg-slate-900 shadow-md" : "bg-slate-800")}>
            Possible Noise
          </div>
        </button>

        <button 
          onMouseEnter={() => setActivePart('move')}
          onMouseLeave={() => setActivePart(null)}
          onFocus={() => setActivePart('move')}
          onBlur={() => setActivePart(null)}
          className={cn(
            "p-6 rounded-[2.5rem] border flex flex-col items-center text-center transition-all duration-300",
            isActive('move') ? "bg-[#EFF6FF] border-blue-300 shadow-md scale-[1.02]" : "bg-[#EFF6FF] border-blue-100",
            ""
          )}
        >
          <p className="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-4">After Strong Move</p>
          <div className={cn(
            "relative w-full h-32 bg-white rounded-2xl border shadow-sm flex items-center justify-center overflow-hidden transition-colors",
            isActive('move') ? "border-blue-300 shadow-blue-500/10" : "border-blue-100"
          )}>
            <div className="absolute bottom-4 left-4 flex gap-1 items-end">
              <div className={cn("w-2 h-4 rounded-sm transition-colors", isActive('move') ? "bg-emerald-200" : "bg-emerald-100")} />
              <div className={cn("w-2 h-8 rounded-sm transition-colors", isActive('move') ? "bg-emerald-300" : "bg-emerald-200")} />
              <div className={cn("w-2 h-12 rounded-sm transition-colors", isActive('move') ? "bg-emerald-400" : "bg-emerald-300")} />
              <div className={cn("w-2 h-16 rounded-sm transition-colors", isActive('move') ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-emerald-400")} />
            </div>
            <div className={cn("relative flex flex-col items-center ml-10 transition-transform", isActive('move') ? "scale-110" : "scale-100")}>
              <div className="w-0.5 h-2 bg-slate-300" />
              <div className="w-6 h-4 bg-emerald-500 rounded-sm" />
              <div className="w-0.5 h-10 bg-slate-300" />
            </div>
          </div>
          <div className={cn("mt-4 px-4 py-2 rounded-xl text-white text-[10px] font-black uppercase tracking-widest transition-colors", isActive('move') ? "bg-blue-700 shadow-md" : "bg-blue-600")}>
            Possible Exhaustion
          </div>
        </button>
      </div>

      <div className="p-6 rounded-[2.5rem] bg-slate-900 text-white text-center shadow-xl">
        <p className="text-lg font-black italic mb-2">“Same shape. Different location. Different reading.”</p>
        <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-[0.2em]">The Golden Rule of Reading</p>
      </div>
    
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 0.3 - Candle Family Preview
 */
export const CandleFamilyPreview = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  const families = [
    { title: "1. Single-Candle Forms", items: ["Doji", "Marubozu", "Hammer", "Spinning Top", "Long Wick"], color: "emerald" },
    { title: "2. Two-Candle Structures", items: ["Engulfing", "Harami", "Tweezer", "Inside / Outside"], color: "blue" },
    { title: "3. Multi-Candle Formations", items: ["Morning Star", "Evening Star", "Three Soldiers", "Three Crows"], color: "purple" }
  ];

  return (
    <InstitutionalFrame label="Candle Family Previewer" id="LN-0.3-FAM" status="PREVIEW ACTIVE">
      <div className="w-full max-w-4xl mx-auto py-4">
        
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {families.map((fam, i) => (
          <button 
            key={i} 
            onMouseEnter={() => setActivePart(fam.title)}
            onMouseLeave={() => setActivePart(null)}
            onFocus={() => setActivePart(fam.title)}
            onBlur={() => setActivePart(null)}
            className={cn(
              "p-5 rounded-[2rem] border text-left transition-all duration-300",
              isActive(fam.title) ? `bg-${fam.color}-50/30 border-${fam.color}-200 shadow-lg scale-[1.02]` : "bg-white border-slate-100 shadow-sm",
              activePart && !isActive(fam.title) ? " scale-[0.98]" : ""
            )}
          >
             <p className={cn("text-xs font-black mb-4 pb-2 border-b transition-colors", isActive(fam.title) ? `text-${fam.color}-700 border-${fam.color}-100` : "text-slate-900 border-slate-50")}>{fam.title}</p>
             <div className="space-y-2">
               {fam.items.map((item, j) => (
                 <div key={j} className={cn(
                   "flex items-center gap-3 p-2 rounded-xl transition-all",
                   isActive(fam.title) ? `bg-${fam.color}-50 border-${fam.color}-100` : "bg-[#F8FAFC]"
                 )}>
                    <div className={cn(`w-2 h-2 rounded-full transition-all`, isActive(fam.title) ? `bg-${fam.color}-500 shadow-[0_0_5px_currentColor]` : `bg-${fam.color}-500/30`)} />
                    <p className={cn("text-[10px] font-bold transition-colors", isActive(fam.title) ? `text-${fam.color}-900` : "text-slate-600")}>{item}</p>
                 </div>
               ))}
             </div>
          </button>
        ))}
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="px-6 py-3 rounded-full bg-slate-900 text-white text-xs font-black uppercase tracking-widest shadow-xl shadow-slate-200">
           Master behavior first, patterns second.
        </div>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
           These will be taught later in detail.
        </p>
      </div>
    
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 0.3 - Candle Decision Board
 */
export const CandleDecisionBoard = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <InstitutionalFrame label="Candle Decision Board" id="LN-0.3-DEC" status="DECISION STANDBY">
      <div className="w-full max-w-2xl mx-auto py-2">
        
      <div className="p-6 rounded-[2.5rem] bg-white border border-slate-200 shadow-xl overflow-hidden">
        <div className="flex items-center justify-center gap-3 mb-6 p-3 bg-rose-600 rounded-2xl text-white">
          <AlertCircle size={18} />
          <p className="text-[11px] font-black uppercase tracking-widest">Do not jump from wick → reversal</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <button 
            onMouseEnter={() => setActivePart('specimen')}
            onMouseLeave={() => setActivePart(null)}
            onFocus={() => setActivePart('specimen')}
            onBlur={() => setActivePart(null)}
            className={cn(
              "p-6 rounded-3xl border flex flex-col items-center transition-all duration-300",
              isActive('specimen') || activePart ? "bg-[#EAFDF1] border-emerald-200 shadow-md scale-[1.02]" : "bg-slate-50 border-slate-100"
            )}
          >
            <div className={cn("w-0.5 h-6 transition-colors", isActive('specimen') || activePart ? "bg-emerald-300" : "bg-slate-300")} />
            <div className={cn("w-12 h-10 rounded shadow-md transition-all", isActive('specimen') || activePart ? "bg-emerald-400 shadow-emerald-500/30 scale-110" : "bg-emerald-500")} />
            <div className={cn("w-0.5 h-20 transition-colors", isActive('specimen') || activePart ? "bg-emerald-300" : "bg-slate-300")} />
            <p className={cn("mt-4 text-[10px] font-bold italic transition-colors", isActive('specimen') || activePart ? "text-emerald-600" : "text-slate-400")}>Example Specimen</p>
          </button>
          <div className="space-y-2">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-900 mb-2">Before forming a reading, ask:</p>
            {[
              "Where did it form?",
              "Where did it close?",
              "What was rejected?",
              "What structure surrounds it?",
              "What confirms or weakens it?"
            ].map((item, i) => (
              <button 
                key={i} 
                onMouseEnter={() => setActivePart(item)}
                onMouseLeave={() => setActivePart(null)}
                onFocus={() => setActivePart(item)}
                onBlur={() => setActivePart(null)}
                className={cn(
                  "flex items-center gap-3 w-full text-left p-2 rounded-xl border transition-all duration-300",
                  isActive(item) ? "bg-emerald-50 border-emerald-300 shadow-sm scale-[1.02]" : "bg-white border-slate-100",
                  activePart && !isActive(item) ? "" : ""
                )}
              >
                 <div className={cn("w-4 h-4 rounded-md border flex items-center justify-center transition-colors", isActive(item) ? "bg-emerald-500 text-white border-emerald-500" : "border-slate-200 text-emerald-500")}>
                    <CheckCircle2 size={10} />
                 </div>
                 <p className={cn("text-[10px] font-black uppercase tracking-tight transition-colors", isActive(item) ? "text-emerald-800" : "text-slate-700")}>{item}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 0.3 - Forex Candle Quote Record Board
 */
export const ForexCandleQuoteRecordBoard = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <InstitutionalFrame label="Forex Candle Quote Recorder" id="LN-0.3-QUOTE" status="QUOTE STREAM">
      <div className="w-full max-w-2xl mx-auto py-2 flex flex-col items-center">
        
      <div className="w-full p-6 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl overflow-hidden relative">
        <div className="flex items-center justify-between gap-4 mb-8">
          <button 
            onMouseEnter={() => setActivePart('feed')}
            onMouseLeave={() => setActivePart(null)}
            onFocus={() => setActivePart('feed')}
            onBlur={() => setActivePart(null)}
            className={cn("flex-1 p-3 rounded-2xl border text-center transition-all duration-300", isActive('feed') ? "bg-slate-100 border-slate-300 shadow-sm scale-[1.02]" : "bg-slate-50 border-slate-200", activePart && !isActive('feed') ? "" : "")}
          >
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Source</p>
            <p className="text-[10px] font-black text-slate-900 uppercase">Liquidity Feed</p>
          </button>
          <ArrowRight className={cn("transition-colors duration-300", isActive('feed') || isActive('movement') ? "text-slate-500" : "text-slate-300")} size={16} />
          <button 
            onMouseEnter={() => setActivePart('movement')}
            onMouseLeave={() => setActivePart(null)}
            onFocus={() => setActivePart('movement')}
            onBlur={() => setActivePart(null)}
            className={cn("flex-1 p-3 rounded-2xl border text-center transition-all duration-300", isActive('movement') ? "bg-blue-100 border-blue-300 shadow-sm scale-[1.02]" : "bg-blue-50 border-blue-100", activePart && !isActive('movement') ? "" : "")}
          >
            <p className="text-[9px] font-black text-blue-400 uppercase tracking-widest mb-1">Movement</p>
            <p className="text-[10px] font-black text-blue-900 uppercase">Quoted Pips</p>
          </button>
          <ArrowRight className={cn("transition-colors duration-300", isActive('movement') || isActive('record') ? "text-slate-500" : "text-slate-300")} size={16} />
          <button 
            onMouseEnter={() => setActivePart('record')}
            onMouseLeave={() => setActivePart(null)}
            onFocus={() => setActivePart('record')}
            onBlur={() => setActivePart(null)}
            className={cn("flex-1 p-3 rounded-2xl border text-center transition-all duration-300", isActive('record') ? "bg-emerald-100 border-emerald-300 shadow-sm scale-[1.02]" : "bg-emerald-50 border-emerald-100", activePart && !isActive('record') ? "" : "")}
          >
            <p className="text-[9px] font-black text-emerald-400 uppercase tracking-widest mb-1">Result</p>
            <p className="text-[10px] font-black text-emerald-900 uppercase">Candle Record</p>
          </button>
        </div>
        <div className="relative flex items-center justify-center h-48 bg-slate-50 rounded-3xl border border-slate-100 mb-6 transition-all duration-300">
          <button 
            onMouseEnter={() => setActivePart('pair')}
            onMouseLeave={() => setActivePart(null)}
            onFocus={() => setActivePart('pair')}
            onBlur={() => setActivePart(null)}
            className={cn("absolute top-4 left-4 px-3 py-1 bg-white rounded-lg border shadow-sm transition-all duration-300", isActive('pair') ? "border-slate-400 shadow-md scale-105" : "border-slate-200", activePart && !isActive('pair') ? "" : "")}
          >
             <p className="text-[9px] font-black text-slate-900 uppercase tracking-widest">EUR/USD 15m</p>
          </button>
          <div className="flex flex-col items-center relative">
            <div className={cn("w-1 h-12 transition-colors duration-300", isActive('record') ? "bg-slate-600" : "bg-slate-400")} />
            <div className={cn("w-12 h-20 rounded-lg border-2 shadow-lg transition-all duration-300", isActive('record') ? "bg-emerald-400 border-emerald-300 scale-110 shadow-emerald-500/20" : "bg-emerald-500 border-emerald-400")} />
            <div className={cn("w-1 h-16 transition-colors duration-300", isActive('record') ? "bg-slate-600" : "bg-slate-400")} />
            <div className={cn("absolute -left-32 top-1/2 -translate-y-1/2 text-right transition-all duration-300", isActive('movement') ? "scale-105 " : "opacity-70", activePart && !isActive('movement') ? "" : "")}>
              <p className={cn("text-[10px] font-black uppercase transition-colors", isActive('movement') ? "text-blue-600" : "text-slate-900")}>Quote Journey</p>
              <p className={cn("text-[9px] font-bold transition-colors", isActive('movement') ? "text-blue-500" : "text-slate-400")}>1.0850 → 1.0872 → 1.0844</p>
            </div>
            <div className={cn("absolute -right-32 top-1/2 -translate-y-1/2 text-left transition-all duration-300", isActive('record') ? "scale-105 " : "opacity-70", activePart && !isActive('record') ? "" : "")}>
              <p className={cn("text-[10px] font-black uppercase transition-colors", isActive('record') ? "text-emerald-700" : "text-emerald-600")}>Final Record</p>
              <p className={cn("text-[9px] font-bold transition-colors", isActive('record') ? "text-emerald-600" : "text-emerald-500")}>Closed @ 1.0865</p>
            </div>
          </div>
        </div>
        <div className="p-4 rounded-2xl bg-slate-900 text-white flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#334155] flex items-center justify-center text-emerald-400">
            <Database size={20} />
          </div>
          <p className="text-[11px] font-bold leading-relaxed">
            A Forex candle records price movement from a specific <span className="text-emerald-400">Quote Feed</span>. It is evidence of what happened in that pair and timeframe.
          </p>
        </div>
      </div>
    
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 0.3 - Candle Anatomy Board
 */
export const CandleAnatomyBoard = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <InstitutionalFrame label="Candle Anatomy Audit" id="LN-0.3-ANAT" status="ANATOMY AUDIT">
      <div className="w-full max-w-4xl mx-auto py-2">
        
      <div className="bg-white rounded-[3rem] p-10 border border-slate-200 shadow-xl relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Specimen Side */}
          <div className="relative flex flex-col items-center">
            {/* The Candle */}
            <div className="relative flex flex-col items-center">
              {/* Upper Wick */}
              <button 
                onMouseEnter={() => setActivePart('wick-up')}
                onMouseLeave={() => setActivePart(null)}
                onFocus={() => setActivePart('wick-up')}
                onBlur={() => setActivePart(null)}
                className={cn("w-1 h-16 transition-all duration-300 relative group outline-none", isActive('wick-up') ? "bg-amber-400 shadow-[0_0_10px_#fbbf24] scale-y-110" : "bg-slate-300")}
              >
                {isActive('wick-up') && <div className="absolute -right-4 top-0 bottom-0 flex items-center"><ArrowUp size={14} className="text-amber-500 animate-bounce" /></div>}
              </button>

              {/* Body */}
              <button 
                onMouseEnter={() => setActivePart('body')}
                onMouseLeave={() => setActivePart(null)}
                onFocus={() => setActivePart('body')}
                onBlur={() => setActivePart(null)}
                className={cn(
                  "w-16 h-32 rounded-lg border-2 shadow-lg transition-all duration-300 outline-none relative z-10",
                  isActive('body') ? "bg-emerald-400 border-emerald-300 scale-105 shadow-emerald-500/20" : "bg-emerald-500 border-emerald-400"
                )}
              />

              {/* Lower Wick */}
              <button 
                onMouseEnter={() => setActivePart('wick-down')}
                onMouseLeave={() => setActivePart(null)}
                onFocus={() => setActivePart('wick-down')}
                onBlur={() => setActivePart(null)}
                className={cn("w-1 h-12 transition-all duration-300 relative group outline-none", isActive('wick-down') ? "bg-amber-400 shadow-[0_0_10px_#fbbf24] scale-y-110" : "bg-slate-300")}
              >
                {isActive('wick-down') && <div className="absolute -right-4 top-0 bottom-0 flex items-center"><ArrowDown size={14} className="text-amber-500 animate-bounce" /></div>}
              </button>
            </div>

            {/* Labels overlay */}
            <div className="mt-8 flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-black uppercase text-slate-400">The Fact</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-[10px] font-black uppercase text-slate-400">The Context</span>
              </div>
            </div>
          </div>

          {/* Logic Side */}
          <div className="space-y-6">
            <div className="space-y-1">
              <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Structural Anatomy</p>
              <h4 className="text-lg font-black text-slate-900 uppercase leading-none">Reading the Record</h4>
            </div>

            <div className="space-y-3">
              {[
                { id: "wick-up", title: "Upper Wick", desc: "Highest Price Reached", meaning: "Rejection of higher prices; selling pressure." },
                { id: "body", title: "Real Body", desc: "Open to Close Distance", meaning: "The core intent and dominance of the period." },
                { id: "wick-down", title: "Lower Wick", desc: "Lowest Price Reached", meaning: "Rejection of lower prices; buying pressure." }
              ].map((item, i) => (
                <button
                  key={i}
                  onMouseEnter={() => setActivePart(item.id)}
                  onMouseLeave={() => setActivePart(null)}
                  onFocus={() => setActivePart(item.id)}
                  onBlur={() => setActivePart(null)}
                  className={cn(
                    "w-full p-5 rounded-2xl border text-left transition-all duration-300 group outline-none",
                    isActive(item.id) ? "bg-slate-900 border-slate-800 shadow-xl scale-[1.02] -translate-x-2" : "bg-white border-slate-100 hover:border-slate-200"
                  )}
                >
                  <div className="flex justify-between items-center mb-1">
                    <h5 className={cn("text-xs font-black uppercase transition-colors", isActive(item.id) ? "text-white" : "text-slate-900")}>{item.title}</h5>
                    <span className={cn("text-[9px] font-black uppercase transition-colors", isActive(item.id) ? "text-slate-400" : "text-slate-400")}>{item.desc}</span>
                  </div>
                  <p className={cn("text-[11px] font-medium leading-relaxed transition-colors", isActive(item.id) ? "text-slate-300" : "text-slate-500")}>{item.meaning}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 0.3 - Record vs. Signal Board
 */
export const RecordVsSignalBoard = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <InstitutionalFrame label="Record vs Signal Comparator" id="LN-0.3-VS" status="COMPARATOR STANDBY">
      <div className="w-full max-w-5xl mx-auto py-2">
        
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* The Record */}
        <button 
          onMouseEnter={() => setActivePart('record')}
          onMouseLeave={() => setActivePart(null)}
          onFocus={() => setActivePart('record')}
          onBlur={() => setActivePart(null)}
          className={cn(
            "p-10 rounded-[3rem] border relative overflow-hidden transition-all duration-500 outline-none text-left w-full",
            isActive('record') ? "bg-white border-blue-200 shadow-2xl scale-[1.02] z-20" : "bg-[#F8FAFC] border-slate-100 ",
            activePart && !isActive('record') ? "" : ""
          )}
        >
          <div className="absolute top-0 right-0 p-8  text-slate-900">
             <FileText size={160} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
               <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center transition-colors shadow-lg", isActive('record') ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-400")}>
                 <FileText size={24} />
               </div>
               <div>
                 <p className={cn("text-[10px] font-black uppercase tracking-widest transition-colors", isActive('record') ? "text-blue-600" : "text-slate-400")}>Instrument Role</p>
                 <h4 className="text-xl font-black text-slate-900 uppercase leading-none">The Record</h4>
               </div>
            </div>
            <div className="space-y-6">
               <p className={cn("text-sm font-bold leading-relaxed transition-colors", isActive('record') ? "text-slate-800" : "text-slate-500")}>
                 The candle is a historical document. It tells you exactly what price did within a window of time.
               </p>
               <div className="space-y-3">
                  {["Objective Fact", "Completed Data", "Market Memory"].map((t, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span className="text-[11px] font-black text-slate-900 uppercase tracking-tight">{t}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </button>

        {/* The Signal */}
        <button 
          onMouseEnter={() => setActivePart('signal')}
          onMouseLeave={() => setActivePart(null)}
          onFocus={() => setActivePart('signal')}
          onBlur={() => setActivePart(null)}
          className={cn(
            "p-10 rounded-[3rem] border relative overflow-hidden transition-all duration-500 outline-none text-left w-full",
            isActive('signal') ? "bg-white border-amber-200 shadow-2xl scale-[1.02] z-20" : "bg-[#F8FAFC] border-slate-100 ",
            activePart && !isActive('signal') ? "" : ""
          )}
        >
          <div className="absolute top-0 right-0 p-8  text-slate-900">
             <Zap size={160} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
               <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center transition-colors shadow-lg", isActive('signal') ? "bg-amber-500 text-white" : "bg-slate-200 text-slate-400")}>
                 <Zap size={24} />
               </div>
               <div>
                 <p className={cn("text-[10px] font-black uppercase tracking-widest transition-colors", isActive('signal') ? "text-amber-600" : "text-slate-400")}>Common Mistake</p>
                 <h4 className="text-xl font-black text-slate-900 uppercase leading-none">The Signal</h4>
               </div>
            </div>
            <div className="space-y-6">
               <p className={cn("text-sm font-bold leading-relaxed transition-colors", isActive('signal') ? "text-slate-800" : "text-slate-500")}>
                 The "Signal" is a mental trap. It assumes the candle is telling you what will happen next.
               </p>
               <div className="space-y-3">
                  {["Subjective Hope", "Predictive Guess", "Reactive Trigger"].map((t, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span className="text-[11px] font-black text-slate-900 uppercase tracking-tight">{t}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </button>
      </div>

      <div className="mt-10 p-8 rounded-[2.5rem] bg-slate-900 text-white flex items-center gap-8 shadow-2xl shadow-slate-900/20">
         <div className="w-16 h-16 rounded-[2rem] bg-[#334155] flex items-center justify-center shrink-0">
           <Lightbulb size={32} className="text-amber-400" />
         </div>
         <div className="space-y-1">
           <h4 className="text-xs font-black text-amber-400 uppercase tracking-widest">Professional Shift</h4>
           <p className="text-sm font-bold leading-relaxed">
             Stop looking for signals. Start reading records. A candle is evidence of what happened, which allows you to build a case for what might happen.
           </p>
         </div>
      </div>
    
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 0.3 - Candle Diagram
 */
export const CandleDiagram = () => {
  return (
    <InstitutionalFrame label="Candle Diagram Model" id="LN-0.3-DIAG" status="DIAGRAM ACTIVE">
      <div className="flex flex-col items-center justify-center py-6">
        
      <div className="relative flex flex-col items-center">
        {/* Upper Wick */}
        <div className="w-0.5 h-16 bg-slate-400" />
        
        {/* Body */}
        <div className="w-16 h-32 rounded-sm border-2 border-emerald-600 bg-emerald-500 shadow-lg relative flex items-center justify-center">
           <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
           <span className="text-[10px] font-black text-white uppercase tracking-widest rotate-90">Body</span>
        </div>

        {/* Lower Wick */}
        <div className="w-0.5 h-12 bg-slate-400" />

        {/* Labels */}
        <div className="absolute -left-16 top-0 text-right">
          <p className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">High</p>
        </div>
        <div className="absolute -left-16 top-16 text-right">
          <p className="text-[9px] font-black text-slate-900 uppercase tracking-tighter">Open</p>
        </div>
        <div className="absolute -left-16 bottom-12 text-right">
          <p className="text-[9px] font-black text-slate-900 uppercase tracking-tighter">Close</p>
        </div>
        <div className="absolute -left-16 bottom-0 text-right">
          <p className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">Low</p>
        </div>

        {/* Wick labels */}
        <div className="absolute -right-20 top-4">
          <p className="text-[9px] font-bold text-amber-500 uppercase italic">Wick (Rejection)</p>
        </div>
        <div className="absolute -right-20 bottom-4">
          <p className="text-[9px] font-bold text-amber-500 uppercase italic">Wick (Rejection)</p>
        </div>
      </div>
    
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 0.3 - Candle Recap Map
 */
export const CandleRecapMap = () => {
  return (
    <InstitutionalFrame label="Candle Recap Map" id="LN-0.3-RECAP" status="RECAP STANDBY">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-2">
        
      {[
        { title: "The Record", desc: "Every candle is a complete record of what happened in a period.", icon: <FileText size={18} />, color: "blue" },
        { title: "The Context", desc: "Wicks show where price was rejected by participants.", icon: <Zap size={18} />, color: "amber" },
        { title: "The Evidence", desc: "Body and Close show where the period actually committed.", icon: <Target size={18} />, color: "emerald" }
      ].map((item, i) => (
        <div key={i} className="p-6 rounded-[2rem] bg-white border border-slate-100 shadow-sm space-y-3">
          <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center transition-colors", 
            item.color === "blue" ? "bg-blue-50 text-blue-600" :
            item.color === "amber" ? "bg-amber-50 text-amber-600" :
            "bg-emerald-50 text-emerald-600"
          )}>
            {item.icon}
          </div>
          <h4 className="text-xs font-black text-slate-900 uppercase tracking-tight">{item.title}</h4>
          <p className="text-[10px] text-slate-500 font-bold leading-relaxed">{item.desc}</p>
        </div>
      ))}
    
      </div>
    </InstitutionalFrame>
  );
};
