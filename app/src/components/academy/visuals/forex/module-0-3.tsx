"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  AlertTriangle,
  CheckCircle2,
  XCircle,
  MousePointerClick,
  Clock,
  Globe,
  Maximize2,
  Activity,
  Target,
  Info,
  TrendingUp,
  TrendingDown,
  Search,
  Brain
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
 * Institutional Frame Component for Module 0.3 Forex
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
          <Activity size={10} className="text-teal-600 animate-pulse" />
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
 * 0.3 - Forex Pip Candle Board
 */
export const ForexPipCandleBoard = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <InstitutionalFrame label="Forex Pip Candle Board" id="LN-0.3-PIP" status="PIP RECORDER">
      <div className="w-full max-w-2xl mx-auto py-2">
        
      <div className="p-6 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl flex flex-col items-center">
        <div className="relative w-full h-64 bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-center mb-6 overflow-hidden">
          {/* Grid Background */}
          <div className="absolute inset-0 " style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

          <div className="relative flex flex-col items-center">
            {/* Upper Wick with Pip Label */}
            <button 
              onMouseEnter={() => setActivePart('wick-up')}
              onMouseLeave={() => setActivePart(null)}
              onFocus={() => setActivePart('wick-up')}
              onBlur={() => setActivePart(null)}
              className={cn("relative flex flex-col items-center transition-all duration-300", activePart && !isActive('wick-up') && !isActive('range') ? "" : "", isActive('wick-up') ? "scale-105" : "")}
            >
              <div className={cn("w-1 h-10 transition-colors duration-300", isActive('wick-up') ? "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" : "bg-slate-400")} />
              <div className={cn("absolute -right-16 top-2 px-2 py-0.5 border rounded-md text-[9px] font-black uppercase transition-colors duration-300", isActive('wick-up') ? "bg-amber-100 border-amber-300 text-amber-700" : "bg-amber-50 border-amber-100 text-amber-600")}>7 Pips</div>
            </button>

            {/* Body with Pip Label */}
            <button 
              onMouseEnter={() => setActivePart('body')}
              onMouseLeave={() => setActivePart(null)}
              onFocus={() => setActivePart('body')}
              onBlur={() => setActivePart(null)}
              className={cn("relative w-16 h-24 rounded-lg border-2 shadow-md flex items-center justify-center transition-all duration-300 z-10", isActive('body') ? "bg-emerald-400 border-emerald-300 scale-105 shadow-emerald-500/20" : "bg-emerald-500 border-emerald-400", activePart && !isActive('body') && !isActive('range') ? "" : "")}
            >
              <div className={cn("absolute -right-20 px-2 py-0.5 border rounded-md text-[9px] font-black uppercase transition-colors duration-300", isActive('body') ? "bg-emerald-100 border-emerald-300 text-emerald-700" : "bg-emerald-50 border-emerald-100 text-emerald-600")}>15 Pips</div>
            </button>

            {/* Lower Wick with Pip Label */}
            <button 
              onMouseEnter={() => setActivePart('wick-down')}
              onMouseLeave={() => setActivePart(null)}
              onFocus={() => setActivePart('wick-down')}
              onBlur={() => setActivePart(null)}
              className={cn("relative flex flex-col items-center transition-all duration-300", activePart && !isActive('wick-down') && !isActive('range') ? "" : "", isActive('wick-down') ? "scale-105" : "")}
            >
              <div className={cn("w-1 h-8 transition-colors duration-300", isActive('wick-down') ? "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" : "bg-slate-400")} />
              <div className={cn("absolute -right-16 bottom-2 px-2 py-0.5 border rounded-md text-[9px] font-black uppercase transition-colors duration-300", isActive('wick-down') ? "bg-amber-100 border-amber-300 text-amber-700" : "bg-slate-100 border-slate-200 text-slate-500")}>6 Pips</div>
            </button>

            {/* Total Range Bracket */}
            <button 
              onMouseEnter={() => setActivePart('range')}
              onMouseLeave={() => setActivePart(null)}
              onFocus={() => setActivePart('range')}
              onBlur={() => setActivePart(null)}
              className={cn("absolute -left-20 top-0 bottom-0 flex items-center transition-all duration-300", activePart && !isActive('range') ? "" : "", isActive('range') ? "scale-105" : "")}
            >
              <div className={cn("h-full w-2 border-y-2 border-l-2 rounded-l-lg transition-colors duration-300", isActive('range') ? "border-slate-500" : "border-slate-300")} />
              <div className={cn("ml-2 px-2 py-1 text-white rounded-lg text-[10px] font-black uppercase whitespace-nowrap transition-colors duration-300", isActive('range') ? "bg-slate-800 shadow-md" : "bg-slate-900")}>28 Pips Total</div>
            </button>
          </div>
        </div>

        {/* Interpretation Tiles */}
        <div className="grid grid-cols-3 gap-3 w-full">
          {[
            { id: "body", label: "Body", desc: "Open to Close", color: "emerald" },
            { id: "wick-up", label: "Wicks", desc: "Rejected Price", color: "amber" },
            { id: "range", label: "Range", desc: "Total High-Low", color: "slate" }
          ].map((tile, i) => (
            <button 
              key={i} 
              onMouseEnter={() => setActivePart(tile.id)}
              onMouseLeave={() => setActivePart(null)}
              onFocus={() => setActivePart(tile.id)}
              onBlur={() => setActivePart(null)}
              className={cn(
                `p-3 rounded-2xl border text-center transition-all duration-300`,
                isActive(tile.id) ? `bg-${tile.color}-100 border-${tile.color}-300 shadow-sm scale-105` : `bg-${tile.color}-50 border-${tile.color}-100`,
                activePart && !isActive(tile.id) && !(tile.id === "wick-up" && isActive("wick-down")) ? "" : ""
              )}
            >
              <p className={`text-[9px] font-black text-${tile.color}-600 uppercase mb-0.5`}>{tile.label}</p>
              <p className="text-[10px] font-black text-slate-900">{tile.desc}</p>
            </button>
          ))}
        </div>

        {/* Warning Tile */}
        <div className="mt-4 w-full p-4 rounded-2xl bg-rose-50 border border-rose-100 flex items-center gap-3">
          <AlertTriangle size={18} className="text-rose-500 shrink-0" />
          <p className="text-[11px] font-bold text-rose-900 leading-tight">
            Warning: A 20-pip candle is not equally meaningful on every pair. Normal movement varies by pair and session.
          </p>
        </div>
      </div>
    
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 0.3 - Forex Distorted Candle Board
 */
export const ForexDistortedCandleBoard = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <InstitutionalFrame label="Forex Distorted Candle Board" id="LN-0.3-DIST" status="DISTORTION SCAN">
      <div className="w-full max-w-4xl mx-auto py-2">
        
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* 1. Clean Record */}
        <button 
          onMouseEnter={() => setActivePart('clean')}
          onMouseLeave={() => setActivePart(null)}
          onFocus={() => setActivePart('clean')}
          onBlur={() => setActivePart(null)}
          className={cn(
            "p-6 rounded-[2.5rem] border flex flex-col items-center transition-all duration-300 text-left w-full",
            isActive('clean') ? "bg-[#D1FAE5] border-emerald-300 shadow-md scale-[1.02]" : "bg-[#EFFDF5] border-emerald-100",
            activePart && !isActive('clean') ? " scale-[0.98]" : ""
          )}
        >
          <div className={cn("px-4 py-1.5 rounded-full text-white text-[9px] font-black uppercase tracking-widest mb-6 transition-colors", isActive('clean') ? "bg-emerald-600" : "bg-emerald-500")}>Clean Record</div>
          <div className={cn("relative flex flex-col items-center mb-6 transition-transform", isActive('clean') ? "scale-105" : "")}>
            <div className="w-0.5 h-6 bg-slate-400" />
            <div className={cn("w-12 h-24 rounded-lg border-2 shadow-md transition-colors", isActive('clean') ? "bg-emerald-400 border-emerald-300 shadow-emerald-500/20" : "bg-emerald-500 border-emerald-400")} />
            <div className="w-0.5 h-6 bg-slate-400" />
          </div>
          <div className="w-full space-y-2">
             <div className={cn("flex items-center gap-3 p-3 rounded-xl border transition-colors", isActive('clean') ? "bg-[#EAFDF1] border-emerald-200" : "bg-white border-emerald-100")}>
               <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center"><CheckCircle2 size={14} /></div>
               <p className="text-[10px] font-bold text-slate-700 uppercase">Active Session / Tight Spread</p>
             </div>
             <div className={cn("flex items-center gap-3 p-3 rounded-xl border transition-colors", isActive('clean') ? "bg-[#EAFDF1] border-emerald-200" : "bg-white border-emerald-100")}>
               <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center"><CheckCircle2 size={14} /></div>
               <p className="text-[10px] font-bold text-slate-700 uppercase">Clear Body / Reliable Evidence</p>
             </div>
          </div>
        </button>

        {/* 2. Distorted Record */}
        <button 
          onMouseEnter={() => setActivePart('distorted')}
          onMouseLeave={() => setActivePart(null)}
          onFocus={() => setActivePart('distorted')}
          onBlur={() => setActivePart(null)}
          className={cn(
            "p-6 rounded-[2.5rem] border flex flex-col items-center transition-all duration-300 text-left w-full",
            isActive('distorted') ? "bg-[#FEE2E2] border-rose-300 shadow-md scale-[1.02]" : "bg-[#FFF5F5] border-rose-100 shadow-sm",
            activePart && !isActive('distorted') ? " scale-[0.98]" : ""
          )}
        >
          <div className={cn("px-4 py-1.5 rounded-full text-white text-[9px] font-black uppercase tracking-widest mb-6 transition-colors", isActive('distorted') ? "bg-rose-600" : "bg-rose-500")}>Distorted Record</div>
          <div className={cn("relative flex flex-col items-center mb-6 transition-transform", isActive('distorted') ? "scale-105" : "")}>
            <div className={cn("w-0.5 h-20 transition-all", isActive('distorted') ? "bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)] " : "bg-rose-400 ")} />
            <div className={cn("w-12 h-6 rounded-md border transition-colors", isActive('distorted') ? "bg-rose-200 border-rose-300" : "bg-rose-100 border-rose-200")} />
            <div className={cn("w-0.5 h-6 transition-all", isActive('distorted') ? "bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)] " : "bg-rose-400 ")} />
          </div>
          <div className="w-full space-y-2">
             <div className={cn("flex items-center gap-3 p-3 rounded-xl border transition-colors", isActive('distorted') ? "bg-[#FFF1F1] border-rose-200" : "bg-white border-rose-100")}>
               <div className="w-6 h-6 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center"><XCircle size={14} /></div>
               <p className="text-[10px] font-bold text-slate-700 uppercase">Low Liquidity / Wide Spread</p>
             </div>
             <div className={cn("flex items-center gap-3 p-3 rounded-xl border transition-colors", isActive('distorted') ? "bg-[#FFF1F1] border-rose-200" : "bg-white border-rose-100")}>
               <div className="w-6 h-6 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center"><XCircle size={14} /></div>
               <p className="text-[10px] font-bold text-slate-700 uppercase">Long Wick / Weak Evidence</p>
             </div>
          </div>
        </button>
      </div>

      <div className="p-5 rounded-[2rem] bg-slate-900 text-white text-center">
        <p className="text-sm font-black italic">“A Forex candle is only as useful as the condition it formed in.”</p>
      </div>
    
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 0.3 - Forex Candle Decision Board
 */
export const ForexCandleDecisionBoard = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <InstitutionalFrame label="Forex Candle Decision Board" id="LN-0.3-DEC" status="DECISION AUDIT">
      <div className="w-full max-w-2xl mx-auto py-2">
        
      <div className="p-6 rounded-[2.5rem] bg-white border border-slate-200 shadow-xl overflow-hidden">
        {/* Scenario Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-blue-500 text-white flex items-center justify-center shadow-lg shadow-blue-500/20">
               <MousePointerClick size={20} />
             </div>
             <div>
               <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Interactive Drill</p>
               <p className="text-sm font-black text-slate-900 uppercase">Quote Quality Check</p>
             </div>
          </div>
          <button 
            onMouseEnter={() => setActivePart('spread')}
            onMouseLeave={() => setActivePart(null)}
            onFocus={() => setActivePart('spread')}
            onBlur={() => setActivePart(null)}
            className={cn("px-3 py-1 border rounded-lg flex items-center gap-2 transition-all duration-300", isActive('spread') ? "bg-rose-100 border-rose-300 scale-105" : "bg-rose-50 border-rose-100", activePart && !isActive('spread') && !isActive('wick') ? "" : "")}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
            <span className={cn("text-[10px] font-black uppercase transition-colors duration-300", isActive('spread') ? "text-rose-700" : "text-rose-600")}>Wide Spread</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-6">
          {/* The Specimen */}
          <div className="relative p-8 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col items-center">
             {/* Quiet Session Label */}
             <button 
               onMouseEnter={() => setActivePart('session')}
               onMouseLeave={() => setActivePart(null)}
               onFocus={() => setActivePart('session')}
               onBlur={() => setActivePart(null)}
               className={cn("absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-white rounded-lg border shadow-sm flex items-center gap-2 transition-all duration-300", isActive('session') ? "border-slate-400 scale-105" : "border-slate-200", activePart && !isActive('session') && !isActive('wick') ? "" : "")}
             >
               <Clock size={12} className={cn("transition-colors duration-300", isActive('session') ? "text-slate-600" : "text-slate-400")} />
               <span className={cn("text-[9px] font-black uppercase transition-colors duration-300", isActive('session') ? "text-slate-800" : "text-slate-600")}>Quiet Session</span>
             </button>

             <div className="mt-4 flex flex-col items-center">
                <button 
                  onMouseEnter={() => setActivePart('wick')}
                  onMouseLeave={() => setActivePart(null)}
                  onFocus={() => setActivePart('wick')}
                  onBlur={() => setActivePart(null)}
                  className={cn("w-2 h-24 rounded-full transition-all duration-300", isActive('wick') ? "bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)] scale-110" : "bg-rose-400 w-0.5 rounded-none", activePart && !isActive('wick') ? "" : "")} 
                />
                <button 
                  onMouseEnter={() => setActivePart('body')}
                  onMouseLeave={() => setActivePart(null)}
                  onFocus={() => setActivePart('body')}
                  onBlur={() => setActivePart(null)}
                  className={cn("w-12 h-6 rounded border transition-all duration-300", isActive('body') ? "bg-slate-300 border-slate-400 scale-110 shadow-sm" : "bg-slate-200 border-slate-300", activePart && !isActive('body') ? "" : "")} 
                />
                <div className="w-0.5 h-4 bg-slate-400" />
             </div>
             <p className="mt-4 text-[10px] font-black text-slate-400 uppercase tracking-widest italic">EUR/USD 15m Record</p>
          </div>

          {/* Verification Checklist */}
          <div className="space-y-2">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-900 mb-4">Verification Checklist:</p>
            {[
              { id: "pair", label: "Pair & Timeframe", icon: <Globe size={12} /> },
              { id: "wick", label: "Full Pip Range", icon: <Maximize2 size={12} /> },
              { id: "spread", label: "Spread Condition", icon: <Activity size={12} /> },
              { id: "session", label: "Session Window", icon: <Clock size={12} /> },
              { id: "body", label: "Close Location", icon: <Target size={12} /> }
            ].map((item, i) => (
              <button 
                key={i} 
                onMouseEnter={() => setActivePart(item.id)}
                onMouseLeave={() => setActivePart(null)}
                onFocus={() => setActivePart(item.id)}
                onBlur={() => setActivePart(null)}
                className={cn(
                  "flex items-center gap-3 w-full text-left p-3 rounded-2xl border transition-all duration-300",
                  isActive(item.id) ? "bg-slate-50 border-slate-300 shadow-sm scale-[1.02]" : "bg-white border-slate-100 shadow-sm",
                  activePart && !isActive(item.id) ? "" : ""
                )}
              >
                <div className={cn("w-6 h-6 rounded-lg flex items-center justify-center transition-colors duration-300", isActive(item.id) ? "bg-slate-200 text-slate-700" : "bg-slate-50 text-slate-400")}>{item.icon}</div>
                <p className={cn("text-[10px] font-bold uppercase tracking-tight transition-colors duration-300", isActive(item.id) ? "text-slate-900" : "text-slate-600")}>{item.label}</p>
              </button>
            ))}
          </div>
        </div>

        <button 
          onMouseEnter={() => setActivePart('quality')}
          onMouseLeave={() => setActivePart(null)}
          onFocus={() => setActivePart('quality')}
          onBlur={() => setActivePart(null)}
          className={cn("w-full p-4 rounded-2xl border flex items-center text-left gap-3 transition-all duration-300", isActive('quality') || isActive('wick') ? "bg-blue-100 border-blue-300 shadow-sm scale-[1.01]" : "bg-blue-50 border-blue-100", activePart && !isActive('quality') && !isActive('wick') ? "" : "")}
        >
          <Info size={18} className="text-blue-500 shrink-0" />
          <p className="text-[11px] font-bold text-blue-900 leading-tight">
            The record shows a long upper wick, but the context shows low liquidity and wide spread. Treat the evidence carefully.
          </p>
        </button>
      </div>
    
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 0.3 - Forex Context Comparison
 */
export const ForexContextComparison = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <InstitutionalFrame label="Forex Context Comparison" id="LN-0.3-CTX" status="CONTEXT MONITOR">
      <div className="my-2 space-y-10 max-w-5xl mx-auto w-full text-left pb-10">
        
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Left: Isolated Reading */}
        <button 
          onMouseEnter={() => setActivePart('isolated')}
          onMouseLeave={() => setActivePart(null)}
          onFocus={() => setActivePart('isolated')}
          onBlur={() => setActivePart(null)}
          className={cn(
            "flex flex-col h-full rounded-[3rem] border p-8 transition-all duration-300 text-left w-full",
            isActive('isolated') ? "bg-[#FEE2E2] border-rose-300 shadow-md scale-[1.02]" : "bg-[#FFF5F5] border-rose-100/50",
            activePart && !isActive('isolated') ? " scale-[0.98]" : ""
          )}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className={cn("w-10 h-10 rounded-2xl text-white flex items-center justify-center shrink-0 shadow-lg transition-colors", isActive('isolated') ? "bg-rose-600 shadow-rose-600/30" : "bg-rose-500 shadow-rose-500/20")}>
              <XCircle size={24} />
            </div>
            <div>
              <h4 className={cn("text-[10px] font-black uppercase tracking-widest transition-colors", isActive('isolated') ? "text-rose-700" : "text-rose-500")}>Mistake Pattern</h4>
              <h3 className="text-sm font-black text-slate-900 uppercase">Isolated Reading</h3>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center py-10 space-y-8">
            {/* The Single Pair */}
            <div className={cn("w-full max-w-[240px] p-6 rounded-[2.5rem] border-2 shadow-xl flex flex-col items-center transition-colors", isActive('isolated') ? "bg-white border-rose-200" : "bg-white border-slate-200")}>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Single Data Point</div>
              <div className="text-3xl font-black text-slate-900 tracking-tighter mb-2">GBP/USD</div>
              <div className="flex items-center gap-2 text-emerald-500">
                <TrendingUp size={24} />
                <span className="text-sm font-black uppercase">Rising Fast</span>
              </div>
            </div>

            <div className="space-y-4 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-500/10 text-rose-600 border border-rose-200">
                <span className="text-[11px] font-black uppercase italic">"GBP is strong!"</span>
              </div>
              <p className={cn("text-[11px] font-bold max-w-[200px] transition-colors", isActive('isolated') ? "text-slate-700" : "text-slate-500")}>
                Problem: No other pairs checked. Assumption made on 50% of the data.
              </p>
            </div>
          </div>
        </button>

        {/* Right: Contextual Reading */}
        <button 
          onMouseEnter={() => setActivePart('contextual')}
          onMouseLeave={() => setActivePart(null)}
          onFocus={() => setActivePart('contextual')}
          onBlur={() => setActivePart(null)}
          className={cn(
            "flex flex-col h-full rounded-[3rem] border p-8 transition-all duration-300 text-left w-full",
            isActive('contextual') ? "bg-[#D1FAE5] border-emerald-300 shadow-md scale-[1.02]" : "bg-[#EFFDF5] border-emerald-100/50",
            activePart && !isActive('contextual') ? " scale-[0.98]" : ""
          )}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className={cn("w-10 h-10 rounded-2xl text-white flex items-center justify-center shrink-0 shadow-lg transition-colors", isActive('contextual') ? "bg-emerald-600 shadow-emerald-600/30" : "bg-emerald-500 shadow-emerald-500/20")}>
              <CheckCircle2 size={24} />
            </div>
            <div>
              <h4 className={cn("text-[10px] font-black uppercase tracking-widest transition-colors", isActive('contextual') ? "text-emerald-700" : "text-emerald-500")}>Professional Logic</h4>
              <h3 className="text-sm font-black text-slate-900 uppercase">Contextual Reading</h3>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {[
                { pair: "GBP/USD", dir: "up", color: "text-emerald-500" },
                { pair: "EUR/USD", dir: "up", color: "text-emerald-500" },
                { pair: "AUD/USD", dir: "up", color: "text-emerald-500" },
                { pair: "USD/JPY", dir: "down", color: "text-rose-500" }
              ].map((item, i) => (
                <div key={i} className={cn("p-4 rounded-2xl border shadow-sm flex flex-col items-center gap-1 transition-colors", isActive('contextual') ? "bg-[#EAFDF1] border-emerald-200" : "bg-white border-slate-100")}>
                  <span className="text-xs font-black text-slate-900">{item.pair}</span>
                  {item.dir === "up" ? <TrendingUp size={16} className={item.color} /> : <TrendingDown size={16} className={item.color} />}
                </div>
              ))}
            </div>

            <div className={cn("p-6 rounded-[2rem] border-2 shadow-xl space-y-3 transition-colors", isActive('contextual') ? "bg-emerald-50 border-emerald-300" : "bg-white border-emerald-100")}>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Environment Conclusion</h4>
              </div>
              <div className="text-xs font-black text-slate-900 uppercase leading-tight tracking-tight">
                USD may be broadly weakening across several pairs.
              </div>
              <div className="h-px bg-slate-50 w-full" />
              <div className="text-[11px] text-emerald-600 font-extrabold italic leading-relaxed">
                Better Reading: "Check both sides before concluding GBP strength."
              </div>
            </div>
          </div>
        </button>

      </div>

      <div className="p-6 rounded-[2rem] bg-slate-900 text-white flex items-start gap-5 shadow-xl">
        <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/20">
          <Info size={24} />
        </div>
        <div className="space-y-1">
          <h4 className="text-[10px] font-black text-amber-400 uppercase tracking-widest">The Core Lesson</h4>
          <p className="text-xs text-slate-300 font-bold leading-relaxed">
            A fast move in one Forex pair is only the first clue. Before blaming the base currency, check whether the quote currency is moving broadly across related pairs.
          </p>
        </div>
      </div>
    
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 0.3 - Forex Session Liquidity Visual
 */
export const ForexSessionLiquidityVisual = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <InstitutionalFrame label="Forex Session Liquidity Monitor" id="LN-0.3-LIQ" status="LIQUIDITY AUDIT">
      <div className="w-full max-w-4xl mx-auto py-8">
        
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Active Session */}
        <button 
          onMouseEnter={() => setActivePart('active')}
          onMouseLeave={() => setActivePart(null)}
          onFocus={() => setActivePart('active')}
          onBlur={() => setActivePart(null)}
          className={cn(
            "p-6 rounded-3xl border text-left transition-all duration-300 w-full",
            isActive('active') ? "bg-[#CCFBF1] border-teal-300 shadow-md scale-[1.02]" : "bg-[#F0FDFA] border-teal-100",
            activePart && !isActive('active') ? " scale-[0.98]" : ""
          )}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className={cn("w-10 h-10 rounded-xl text-white flex items-center justify-center shadow-lg transition-colors", isActive('active') ? "bg-teal-600 shadow-teal-600/30" : "bg-teal-500 shadow-teal-500/20")}>
                <Clock size={18} />
              </div>
              <div>
                <p className={cn("text-xs font-black uppercase transition-colors", isActive('active') ? "text-teal-900" : "text-slate-900")}>London / NY Overlap</p>
                <p className="text-[9px] font-bold text-teal-600 uppercase tracking-widest">Active Session</p>
              </div>
            </div>
            <div className={cn("px-3 py-1 rounded-full text-white text-[9px] font-black uppercase tracking-widest transition-colors", isActive('active') ? "bg-teal-600" : "bg-teal-500")}>High Liquidity</div>
          </div>
          <div className="space-y-4">
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className={cn("h-full w-full transition-colors", isActive('active') ? "bg-teal-400" : "bg-teal-500")} />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Average Spread</span>
              <span className={cn("text-[10px] font-black uppercase transition-colors", isActive('active') ? "text-teal-900" : "text-teal-700")}>0.2 - 0.5 Pips</span>
            </div>
            <p className={cn("text-[11px] font-medium leading-relaxed italic transition-colors", isActive('active') ? "text-teal-800" : "text-slate-500")}>"Quotes are tight and movement is backed by massive volume. Evidence is cleaner."</p>
          </div>
        </button>

        {/* Quiet Session */}
        <button 
          onMouseEnter={() => setActivePart('quiet')}
          onMouseLeave={() => setActivePart(null)}
          onFocus={() => setActivePart('quiet')}
          onBlur={() => setActivePart(null)}
          className={cn(
            "p-6 rounded-3xl border text-left transition-all duration-300 w-full",
            isActive('quiet') ? "bg-slate-100 border-slate-300 shadow-md scale-[1.02] " : "bg-white border-slate-200 shadow-sm ",
            activePart && !isActive('quiet') ? " scale-[0.98]" : ""
          )}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center transition-colors", isActive('quiet') ? "bg-slate-300 text-slate-600" : "bg-slate-200 text-slate-500")}>
                <Activity size={18} />
              </div>
              <div>
                <p className={cn("text-xs font-black uppercase transition-colors", isActive('quiet') ? "text-slate-900" : "text-slate-700")}>Late Asia / Quiet Period</p>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Inactive Session</p>
              </div>
            </div>
            <div className={cn("px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest transition-colors", isActive('quiet') ? "bg-slate-200 text-slate-700" : "bg-slate-100 text-slate-500")}>Thin Liquidity</div>
          </div>
          <div className="space-y-4">
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className={cn("h-full w-1/4 transition-colors", isActive('quiet') ? "bg-slate-500" : "bg-slate-400")} />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Average Spread</span>
              <span className={cn("text-[10px] font-black uppercase transition-colors", isActive('quiet') ? "text-slate-800" : "text-slate-600")}>1.5 - 3.0 Pips</span>
            </div>
            <p className={cn("text-[11px] font-medium leading-relaxed italic transition-colors", isActive('quiet') ? "text-slate-700" : "text-slate-500")}>"Quotes are wide and movement may jump without real intent. Evidence is noisy."</p>
          </div>
        </button>
      </div>
    
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 0.3 - Forex Mini Drill Board
 */
export const ForexMiniDrillBoard = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { label: "Pair Type", val: "Major (EUR/USD)", status: "Clean", icon: <Globe size={16} /> },
    { label: "Spread", val: "0.4 Pips", status: "Tight", icon: <Activity size={16} /> },
    { label: "Session", val: "LDN Open", status: "Active", icon: <Clock size={16} /> },
    { label: "Candle", val: "Full Body", status: "Strong", icon: <CheckCircle2 size={16} /> }
  ];

  return (
    <InstitutionalFrame label="Forex Mini Drill Board" id="LN-0.3-DRILL" status="DRILL STANDBY">
      <div className="w-full max-w-2xl mx-auto py-2">
        
      <div className="p-8 rounded-[2.5rem] bg-white border border-slate-200 shadow-xl overflow-hidden relative">
        <div className="flex items-center gap-3 mb-8">
           <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg">
             <Target size={20} />
           </div>
           <div>
             <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Verification Protocol</p>
             <h4 className="text-sm font-black text-slate-900 uppercase">Forex Quality Audit</h4>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
           {steps.map((s, i) => (
             <button
               key={i}
               onClick={() => setActiveStep(i)}
               className={cn(
                 "p-4 rounded-xl border text-left transition-all duration-300",
                 activeStep === i 
                   ? "bg-slate-900 border-slate-800 shadow-md scale-[1.02] text-white" 
                   : "bg-slate-50 border-slate-100 text-slate-600"
               )}
             >
               <div className="flex items-center justify-between mb-1">
                 <span className="text-[10px] font-black uppercase tracking-widest">{s.label}</span>
                 <span className={cn("text-[8px] font-black uppercase px-2 py-0.5 rounded-md", activeStep === i ? "bg-emerald-400 text-slate-900" : "bg-white border border-slate-100")}>
                   {s.status}
                 </span>
               </div>
               <div className="flex items-center gap-2 mt-2">
                 {React.cloneElement(s.icon as React.ReactElement<any>, { size: 12, className: activeStep === i ? "text-slate-400" : "text-slate-300" })}
                 <span className="text-[11px] font-bold">{s.val}</span>
               </div>
             </button>
           ))}
        </div>

        <div className="p-6 rounded-3xl bg-slate-900 text-white text-center">
           <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 text-emerald-400">Verdict</p>
           <p className="text-xs font-bold leading-relaxed text-slate-300">This candle record is high-quality evidence. Sourced from a major pair during an active session with tight spreads.</p>
        </div>
      </div>
    
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 0.3 - Forex Quote Quality Drill Visual
 */
export const ForexQuoteQualityDrillVisual = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <InstitutionalFrame label="Forex Quote Quality Drill" id="LN-0.3-QUAL" status="QUALITY SCAN">
      <div className="w-full max-w-4xl mx-auto py-8">
        
      <div className="bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-xl relative overflow-hidden">
        {/* Scenario Header */}
        <div className="flex items-center justify-between mb-8 border-b border-slate-50 pb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/20">
              <Search size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Active Verification</p>
              <p className="text-lg font-black tracking-tight leading-tight">GBP/JPY Sharp Move (Quiet Window)</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Situation Analysis */}
          <div className="space-y-4">
            {[
              { id: "pair", label: "Pair: GBP/JPY", sub: "Minor / Cross", status: "Caution" },
              { id: "spread", label: "Spread: 3.5 Pips", sub: "Wide", status: "Noisy" },
              { id: "session", label: "Session: Tokyo Close", sub: "Low Volume", status: "Weak" },
              { id: "candle", label: "Candle: Long Wick", sub: "Rejection?", status: "Doubtful" }
            ].map((item, i) => (
              <button 
                key={i} 
                onMouseEnter={() => setActivePart(item.id)}
                onMouseLeave={() => setActivePart(null)}
                onFocus={() => setActivePart(item.id)}
                onBlur={() => setActivePart(null)}
                className={cn("p-5 rounded-2xl border flex items-center justify-between transition-all duration-300 outline-none w-full", isActive(item.id) ? "bg-slate-50 border-slate-300 scale-105 shadow-md" : "bg-white border-slate-100", activePart && !isActive(item.id) ? "" : "")}
              >
                <div className="text-left">
                  <p className={cn("text-xs font-black uppercase mb-1 transition-colors", isActive(item.id) ? "text-slate-900" : "text-slate-900")}>{item.label}</p>
                  <p className={cn("text-[9px] font-bold uppercase tracking-widest transition-colors", isActive(item.id) ? "text-slate-600" : "text-slate-400")}>{item.sub}</p>
                </div>
                <div className={cn("px-3 py-1 rounded-full text-[9px] font-black uppercase transition-colors", isActive(item.id) ? "bg-rose-100 text-rose-700" : "bg-rose-50 text-rose-500")}>
                  {item.status}
                </div>
              </button>
            ))}
          </div>

          {/* Verdict Box */}
          <button 
            onMouseEnter={() => setActivePart('verdict')}
            onMouseLeave={() => setActivePart(null)}
            onFocus={() => setActivePart('verdict')}
            onBlur={() => setActivePart(null)}
            className={cn("h-full rounded-[2.5rem] p-8 text-white text-center flex flex-col items-center justify-center outline-none transition-all duration-300 w-full", isActive('verdict') ? "bg-slate-800 scale-[1.02] shadow-xl" : "bg-slate-900", activePart && !isActive('verdict') ? "" : "")}
          >
            <div className={cn("w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors", isActive('verdict') ? "bg-[#475569]" : "bg-[#334155]")}>
              <Brain size={32} className={cn("transition-colors", isActive('verdict') ? "text-rose-400" : "text-rose-500")} />
            </div>
            <p className={cn("text-xs font-black uppercase tracking-widest mb-2 transition-colors", isActive('verdict') ? "text-white" : "text-white")}>Professional Verdict</p>
            <p className={cn("text-[11px] font-medium leading-relaxed max-w-xs transition-colors", isActive('verdict') ? "text-white/90" : "text-white/70")}>
              The move is happening during thin liquidity with wide spreads. Treat the rejection as noise until London session confirms it.
            </p>
          </button>
        </div>
      </div>
    
      </div>
    </InstitutionalFrame>
  );
};
