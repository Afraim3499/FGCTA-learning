"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Globe,
  TrendingUp,
  Zap,
  Clock,
  Layers,
  Activity,
  ArrowUp,
  AlertCircle,
  Activity as ActivityIcon,
  Search,
  CheckCircle2,
  Brain,
  XCircle,
  ShieldCheck
} from "lucide-react";

/**
 * 0.1 - Gold Reading Map
 */
export const GoldReadingMap = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <div className="w-full max-w-4xl mx-auto py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        <button 
          onMouseEnter={() => setActivePart('speed')}
          onMouseLeave={() => setActivePart(null)}
          onFocus={() => setActivePart('speed')}
          onBlur={() => setActivePart(null)}
          className={cn("p-8 rounded-[3rem] border relative overflow-hidden group text-left transition-all duration-300 outline-none w-full", isActive('speed') ? "bg-rose-100/40 border-rose-300 scale-[1.02] shadow-md" : "bg-rose-50/30 border-rose-100", activePart && !isActive('speed') ? "opacity-60 scale-[0.98]" : "opacity-100")}
        >
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-rose-900 group-hover:scale-110 transition-transform">
            <Zap size={140} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center shadow-lg shadow-rose-600/20">
                <Zap size={20} />
              </div>
              <div className="space-y-0.5">
                <p className="text-[10px] font-black uppercase tracking-widest text-rose-600">The Trap</p>
                <h3 className="text-sm font-black text-slate-900 uppercase">Speed Priority</h3>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: "Reactive Execution", status: "Instinct" },
                { label: "Ignoring Macro Context", status: "Isolated" },
                { label: "Chasing Volatility", status: "Late" }
              ].map((step, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-2xl bg-white border border-rose-100/50 shadow-sm">
                  <span className="text-[10px] font-bold text-slate-700 uppercase tracking-tight">{step.label}</span>
                  <span className="text-[8px] font-black bg-rose-50 text-rose-600 px-2 py-0.5 rounded-md uppercase">{step.status}</span>
                </div>
              ))}
            </div>
          </div>
        </button>

        <button 
          onMouseEnter={() => setActivePart('clarity')}
          onMouseLeave={() => setActivePart(null)}
          onFocus={() => setActivePart('clarity')}
          onBlur={() => setActivePart(null)}
          className={cn("p-8 rounded-[3rem] border relative overflow-hidden group text-left transition-all duration-300 outline-none w-full", isActive('clarity') ? "bg-emerald-100/40 border-emerald-300 scale-[1.02] shadow-md" : "bg-emerald-50/30 border-emerald-100", activePart && !isActive('clarity') ? "opacity-60 scale-[0.98]" : "opacity-100")}
        >
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-emerald-900 group-hover:scale-110 transition-transform">
            <ShieldCheck size={140} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-600/20">
                <ShieldCheck size={20} />
              </div>
              <div className="space-y-0.5">
                <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600">The Edge</p>
                <h3 className="text-sm font-black text-slate-900 uppercase">Clarity Priority</h3>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: "Structured Verification", status: "Process" },
                { label: "Dollar & Yield Analysis", status: "Confirm" },
                { label: "Market Layer Audit", status: "Depth" }
              ].map((step, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-2xl bg-white border border-emerald-100/50 shadow-sm">
                  <span className="text-[10px] font-bold text-slate-700 uppercase tracking-tight">{step.label}</span>
                  <span className="text-[8px] font-black bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-md uppercase">{step.status}</span>
                </div>
              ))}
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

/**
 * 0.1 - Gold Context Driver Map
 */
export const GoldContextDriverMap = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <div className="relative p-10 bg-slate-50/50 rounded-[3rem] border border-slate-100 flex flex-col items-center">
        <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-slate-900 pointer-events-none">
          <Globe size={160} />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
          {/* Driver 1 */}
          <button 
            onMouseEnter={() => setActivePart('usd')}
            onMouseLeave={() => setActivePart(null)}
            onFocus={() => setActivePart('usd')}
            onBlur={() => setActivePart(null)}
            className={cn("flex flex-col items-center text-center transition-all duration-300 outline-none", isActive('usd') ? "scale-110" : "", activePart && !isActive('usd') ? "opacity-60" : "opacity-100")}
          >
            <div className={cn("w-20 h-20 rounded-[2rem] border flex items-center justify-center shadow-lg mb-4 transition-colors", isActive('usd') ? "bg-blue-600 border-blue-500 text-white" : "bg-white border-slate-200 text-slate-400")}>
              <TrendingUp size={32} />
            </div>
            <p className={cn("text-xs font-black uppercase tracking-widest transition-colors", isActive('usd') ? "text-slate-900" : "text-slate-600")}>USD Strength</p>
            <p className="text-[9px] font-bold text-blue-600 uppercase tracking-tighter mt-1 italic">Inverse Pressure</p>
          </button>

          {/* Connection */}
          <div className="hidden md:flex flex-col items-center gap-2">
            <div className="w-12 h-[2px] bg-slate-200" />
            <ActivityIcon size={16} className="text-slate-300" />
            <div className="w-12 h-[2px] bg-slate-200" />
          </div>

          {/* Core Asset */}
          <div className="w-32 h-32 rounded-[2.5rem] bg-gradient-to-br from-amber-300 via-amber-500 to-amber-600 border-4 border-white shadow-2xl flex items-center justify-center relative">
             <span className="text-3xl font-black text-white italic drop-shadow-md">XAU</span>
             <div className="absolute -inset-2 rounded-[3rem] border border-amber-400 opacity-20 animate-pulse" />
          </div>

          {/* Connection */}
          <div className="hidden md:flex flex-col items-center gap-2">
            <div className="w-12 h-[2px] bg-slate-200" />
            <ActivityIcon size={16} className="text-slate-300" />
            <div className="w-12 h-[2px] bg-slate-200" />
          </div>

          {/* Driver 2 */}
          <button 
            onMouseEnter={() => setActivePart('yields')}
            onMouseLeave={() => setActivePart(null)}
            onFocus={() => setActivePart('yields')}
            onBlur={() => setActivePart(null)}
            className={cn("flex flex-col items-center text-center transition-all duration-300 outline-none", isActive('yields') ? "scale-110" : "", activePart && !isActive('yields') ? "opacity-60" : "opacity-100")}
          >
            <div className={cn("w-20 h-20 rounded-[2rem] border flex items-center justify-center shadow-lg mb-4 transition-colors", isActive('yields') ? "bg-indigo-600 border-indigo-500 text-white" : "bg-white border-slate-200 text-slate-400")}>
              <Zap size={32} />
            </div>
            <p className={cn("text-xs font-black uppercase tracking-widest transition-colors", isActive('yields') ? "text-slate-900" : "text-slate-600")}>Treasury Yields</p>
            <p className="text-[9px] font-bold text-indigo-600 uppercase tracking-tighter mt-1 italic">Real Rates Pressure</p>
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * 0.1 - Gold Urgency Trap Visual
 */
export const GoldUrgencyTrapVisual = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <div className="w-full max-w-4xl mx-auto py-4">
      <div className="bg-white rounded-[3rem] border border-slate-100 p-8 shadow-xl relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-lg shadow-amber-500/20">
                <Clock size={20} />
              </div>
              <h3 className="text-sm font-black text-slate-900 uppercase">The Reaction Window</h3>
            </div>
            
            <div className="space-y-3">
               {[
                 { id: 't1', label: 'Spike Observed', time: '0s', status: 'Retail Panic' },
                 { id: 't2', label: 'FOMO Entry', time: '15s', status: 'Liquidity Exit' },
                 { id: 't3', label: 'Audit Start', time: '60s', status: 'Professional Window' }
               ].map((step, i) => (
                 <button 
                   key={i}
                   onMouseEnter={() => setActivePart(step.id)}
                   onMouseLeave={() => setActivePart(null)}
                   onFocus={() => setActivePart(step.id)}
                   onBlur={() => setActivePart(null)}
                   className={cn(
                     "w-full flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 outline-none",
                     isActive(step.id) ? "bg-slate-900 border-slate-800 text-white scale-[1.02] shadow-md" : "bg-slate-50 border-slate-100 text-slate-600",
                     activePart && !isActive(step.id) ? "opacity-60" : "opacity-100"
                   )}
                 >
                   <div className="flex items-center gap-3">
                     <span className={cn("text-[9px] font-black px-2 py-0.5 rounded-md", isActive(step.id) ? "bg-white/10" : "bg-white border border-slate-100")}>{step.time}</span>
                     <span className="text-[10px] font-bold uppercase">{step.label}</span>
                   </div>
                   <span className={cn("text-[8px] font-black uppercase tracking-widest", isActive(step.id) ? "text-amber-400" : "text-slate-400")}>{step.status}</span>
                 </button>
               ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center py-10 bg-slate-50 rounded-[2.5rem] border border-slate-100">
             <div className="relative mb-6">
                <ActivityIcon size={80} className={cn("transition-colors duration-500", isActive('t1') || isActive('t2') ? "text-rose-500 animate-pulse" : "text-slate-300")} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <TrendingUp size={24} className={cn("transition-all duration-500", isActive('t1') || isActive('t2') ? "text-rose-600 scale-125" : "text-slate-400")} />
                </div>
             </div>
             <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Signal Quality</p>
             <div className="flex gap-2">
                <div className={cn("w-12 h-1 rounded-full transition-colors", isActive('t1') ? "bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)]" : "bg-slate-200")} />
                <div className={cn("w-12 h-1 rounded-full transition-colors", isActive('t2') ? "bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)]" : "bg-slate-200")} />
                <div className={cn("w-12 h-1 rounded-full transition-colors", isActive('t3') ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-slate-200")} />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 0.1 - Gold Noise Decision Board
 */
export const GoldNoiseDecisionBoard = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <div className="w-full max-w-3xl mx-auto py-2">
      <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-xl overflow-hidden relative">
        <div className="flex items-center justify-between mb-8">
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-lg">
                <Search size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Decision Protocol</p>
                <h4 className="text-sm font-black text-slate-900 uppercase">React vs. Respond</h4>
              </div>
           </div>
           <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
             <ActivityIcon size={20} className="text-slate-400" />
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
           <button 
             onMouseEnter={() => setActivePart('react')}
             onMouseLeave={() => setActivePart(null)}
             onFocus={() => setActivePart('react')}
             onBlur={() => setActivePart(null)}
             className={cn("p-6 rounded-3xl border flex flex-col items-center text-center transition-all duration-300 outline-none w-full", isActive('react') ? "bg-rose-50 border-rose-200 scale-[1.02] shadow-md" : "bg-white border-slate-100", activePart && !isActive('react') ? "opacity-60" : "opacity-100")}
           >
             <div className={cn("w-10 h-10 rounded-xl text-white flex items-center justify-center mb-4 transition-colors", isActive('react') ? "bg-rose-600 shadow-xl shadow-rose-600/30" : "bg-rose-500 shadow-lg shadow-rose-500/20")}>
               <XCircle size={18} />
             </div>
             <p className={cn("text-[11px] font-black uppercase mb-1 transition-colors", isActive('react') ? "text-rose-900" : "text-slate-900")}>Retail Reactivity</p>
             <p className="text-[10px] font-bold text-slate-500 leading-relaxed italic">"Gold is moving fast, I have to get in now before I miss it."</p>
           </button>

           <button 
             onMouseEnter={() => setActivePart('respond')}
             onMouseLeave={() => setActivePart(null)}
             onFocus={() => setActivePart('respond')}
             onBlur={() => setActivePart(null)}
             className={cn("p-6 rounded-3xl border flex flex-col items-center text-center transition-all duration-300 outline-none w-full", isActive('respond') ? "bg-emerald-50 border-emerald-200 scale-[1.02] shadow-md" : "bg-white border-slate-100", activePart && !isActive('respond') ? "opacity-60" : "opacity-100")}
           >
             <div className={cn("w-10 h-10 rounded-xl text-white flex items-center justify-center mb-4 transition-colors", isActive('respond') ? "bg-emerald-600 shadow-xl shadow-emerald-600/30" : "bg-emerald-500 shadow-lg shadow-emerald-500/20")}>
               <CheckCircle2 size={18} />
             </div>
             <p className={cn("text-[11px] font-black uppercase mb-1 transition-colors", isActive('respond') ? "text-emerald-900" : "text-slate-900")}>Disciplined Response</p>
             <p className="text-[10px] font-bold text-slate-500 leading-relaxed italic">"Gold is moving fast. What is the USD doing? What window are we in?"</p>
           </button>
        </div>

        <div className="p-6 rounded-3xl bg-slate-900 text-white flex items-center gap-4">
           <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
             <Brain size={20} className="text-amber-400" />
           </div>
           <p className="text-[11px] font-bold text-slate-300 leading-relaxed">
             <span className="text-white font-black">Mental Model:</span> Professional trading in Gold is about verification, not reflexes.
           </p>
        </div>
      </div>
    </div>
  );
};
