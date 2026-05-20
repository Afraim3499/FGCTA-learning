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
  ShieldCheck,
  Database
} from "lucide-react";

/**
 * Institutional Frame Component for Module 0.1
 */
const InstitutionalFrame = ({ 
  children, 
  label, 
  status = "AUDIT STANDBY",
  id = "LN-0.1-AUD-GOLD"
}: { 
  children: React.ReactNode; 
  label: string; 
  status?: string;
  id?: string;
}) => (
  <div className="w-full h-full min-h-[480px] bg-[#F8FBFC] border border-[#E2E8F0] rounded-[2rem] p-6 md:p-8 flex flex-col relative overflow-hidden shadow-sm">
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
 * 0.1 - Gold Reading Map
 */
export const GoldReadingMap = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <InstitutionalFrame label="Gold Roadway: Speed vs Clarity Priority" id="LN-0.1-AUD-GOLD-READING">
      <div className="w-full max-w-4xl mx-auto py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <button 
            onMouseEnter={() => setActivePart('speed')}
            onMouseLeave={() => setActivePart(null)}
            onFocus={() => setActivePart('speed')}
            onBlur={() => setActivePart(null)}
            className={cn(
              "p-8 rounded-[3rem] border relative overflow-hidden group text-left transition-all duration-300 outline-none w-full", 
              isActive('speed') 
                ? "bg-[#FFF1F2] border-[#FDA4AF] scale-[1.02] shadow-sm" 
                : "bg-[#FFF8F8] border-[#FEE2E2]", 
              activePart && !isActive('speed') ? "text-slate-450 border-rose-50 scale-[0.98]" : ""
            )}
          >
            <div className="absolute top-0 right-0 p-8 text-rose-100/50 group-hover:scale-110 transition-transform pointer-events-none">
              <Zap size={140} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center shadow-sm">
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
                  <div key={i} className="flex items-center justify-between p-3 rounded-2xl bg-white border border-[#FEE2E2] shadow-sm">
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
            className={cn(
              "p-8 rounded-[3rem] border relative overflow-hidden group text-left transition-all duration-300 outline-none w-full", 
              isActive('clarity') 
                ? "bg-[#ECFDF5] border-[#6EE7B7] scale-[1.02] shadow-sm" 
                : "bg-[#F4FDF9] border-[#D1FAE5]", 
              activePart && !isActive('clarity') ? "text-slate-450 border-emerald-50 scale-[0.98]" : ""
            )}
          >
            <div className="absolute top-0 right-0 p-8 text-emerald-100/50 group-hover:scale-110 transition-transform pointer-events-none">
              <ShieldCheck size={140} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-sm">
                  <ShieldCheck size={20} />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#0D9488]">The Edge</p>
                  <h3 className="text-sm font-black text-slate-900 uppercase">Clarity Priority</h3>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Structured Verification", status: "Process" },
                  { label: "Dollar & Yield Analysis", status: "Confirm" },
                  { label: "Market Layer Audit", status: "Depth" }
                ].map((step, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-2xl bg-white border border-[#D1FAE5] shadow-sm">
                    <span className="text-[10px] font-bold text-slate-700 uppercase tracking-tight">{step.label}</span>
                    <span className="text-[8px] font-black bg-[#E6F4F1] text-teal-800 px-2 py-0.5 rounded-md uppercase">{step.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </button>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 0.1 - Gold Context Driver Map
 */
export const GoldContextDriverMap = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <InstitutionalFrame label="Gold Drivers: XAU Relationship Matrix" id="LN-0.1-AUD-GOLD-DRIVERS">
      <div className="w-full max-w-4xl mx-auto py-4">
        <div className="relative p-10 bg-slate-50 rounded-[3rem] border border-slate-200 flex flex-col items-center">
          <div className="absolute top-0 right-0 p-8 text-slate-200 pointer-events-none">
            <Globe size={160} />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            {/* Driver 1 */}
            <button 
              onMouseEnter={() => setActivePart('usd')}
              onMouseLeave={() => setActivePart(null)}
              onFocus={() => setActivePart('usd')}
              onBlur={() => setActivePart(null)}
              className={cn("flex flex-col items-center text-center transition-all duration-300 outline-none", isActive('usd') ? "scale-110" : "", activePart && !isActive('usd') ? "text-slate-400" : "")}
            >
              <div className={cn("w-20 h-20 rounded-[2rem] border flex items-center justify-center shadow-sm mb-4 transition-colors", isActive('usd') ? "bg-blue-600 border-blue-500 text-white" : "bg-white border-slate-200 text-slate-400")}>
                <TrendingUp size={32} />
              </div>
              <p className={cn("text-xs font-black uppercase tracking-widest transition-colors", isActive('usd') ? "text-slate-900" : "text-slate-600")}>USD Strength</p>
              <p className="text-[9px] font-bold text-blue-650 uppercase tracking-tighter mt-1 italic">Inverse Pressure</p>
            </button>

            {/* Connection */}
            <div className="hidden md:flex flex-col items-center gap-2">
              <div className="w-12 h-[2px] bg-slate-200" />
              <ActivityIcon size={16} className="text-slate-350" />
              <div className="w-12 h-[2px] bg-slate-200" />
            </div>

            {/* Core Asset */}
            <div className="w-32 h-32 rounded-[2.5rem] bg-gradient-to-br from-amber-300 via-amber-500 to-amber-600 border-4 border-white shadow-md flex items-center justify-center relative">
               <span className="text-3xl font-black text-white italic drop-shadow-md">XAU</span>
               <div className="absolute -inset-2 rounded-[3rem] border border-amber-400" />
            </div>

            {/* Connection */}
            <div className="hidden md:flex flex-col items-center gap-2">
              <div className="w-12 h-[2px] bg-slate-200" />
              <ActivityIcon size={16} className="text-slate-350" />
              <div className="w-12 h-[2px] bg-slate-200" />
            </div>

            {/* Driver 2 */}
            <button 
              onMouseEnter={() => setActivePart('yields')}
              onMouseLeave={() => setActivePart(null)}
              onFocus={() => setActivePart('yields')}
              onBlur={() => setActivePart(null)}
              className={cn("flex flex-col items-center text-center transition-all duration-300 outline-none", isActive('yields') ? "scale-110" : "", activePart && !isActive('yields') ? "text-slate-400" : "")}
            >
              <div className={cn("w-20 h-20 rounded-[2rem] border flex items-center justify-center shadow-sm mb-4 transition-colors", isActive('yields') ? "bg-indigo-600 border-indigo-500 text-white" : "bg-white border-slate-200 text-slate-400")}>
                <Zap size={32} />
              </div>
              <p className={cn("text-xs font-black uppercase tracking-widest transition-colors", isActive('yields') ? "text-slate-900" : "text-slate-600")}>Treasury Yields</p>
              <p className="text-[9px] font-bold text-indigo-650 uppercase tracking-tighter mt-1 italic">Real Rates Pressure</p>
            </button>
          </div>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 0.1 - Gold Urgency Trap Visual
 */
export const GoldUrgencyTrapVisual = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <InstitutionalFrame label="Gold Execution: The Reaction Window" id="LN-0.1-AUD-GOLD-WINDOW">
      <div className="w-full max-w-4xl mx-auto py-2">
        <div className="bg-white rounded-[3rem] border border-slate-200 p-8 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-sm">
                  <Clock size={20} />
                </div>
                <h3 className="text-sm font-black text-slate-905 uppercase">The Reaction Window</h3>
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
                       isActive(step.id) ? "bg-slate-900 border-slate-800 text-white scale-[1.02] shadow-sm" : "bg-slate-50 border-slate-100 text-slate-650",
                       activePart && !isActive(step.id) ? "text-slate-400 border-slate-50" : ""
                     )}
                   >
                     <div className="flex items-center gap-3">
                       <span className={cn("text-[9px] font-black px-2 py-0.5 rounded-md", isActive(step.id) ? "bg-slate-800 text-white" : "bg-white border border-slate-200")}>{step.time}</span>
                       <span className="text-[10px] font-bold uppercase">{step.label}</span>
                     </div>
                     <span className={cn("text-[8px] font-black uppercase tracking-widest", isActive(step.id) ? "text-amber-450" : "text-slate-450")}>{step.status}</span>
                   </button>
                 ))}
              </div>
            </div>

            <div className="flex flex-col items-center justify-center py-10 bg-slate-50 rounded-[2.5rem] border border-slate-200">
               <div className="relative mb-6">
                  <ActivityIcon size={80} className={cn("transition-colors duration-500", isActive('t1') || isActive('t2') ? "text-rose-600" : "text-slate-300")} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <TrendingUp size={24} className={cn("transition-all duration-500", isActive('t1') || isActive('t2') ? "text-rose-650 scale-125" : "text-slate-400")} />
                  </div>
               </div>
               <p className="text-center text-[10px] font-black text-slate-450 uppercase tracking-widest mb-4">Signal Quality</p>
               <div className="flex gap-2">
                  <div className={cn("w-12 h-1 rounded-full transition-colors", isActive('t1') ? "bg-rose-500" : "bg-slate-200")} />
                  <div className={cn("w-12 h-1 rounded-full transition-colors", isActive('t2') ? "bg-rose-500" : "bg-slate-200")} />
                  <div className={cn("w-12 h-1 rounded-full transition-colors", isActive('t3') ? "bg-emerald-500" : "bg-slate-200")} />
               </div>
            </div>
          </div>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 0.1 - Gold Noise Decision Board
 */
export const GoldNoiseDecisionBoard = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <InstitutionalFrame label="Gold Decision Board: React vs Respond" id="LN-0.1-AUD-GOLD-DECISION">
      <div className="w-full max-w-3xl mx-auto py-2">
        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-sm overflow-hidden relative">
          <div className="flex items-center justify-between mb-8">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-sm">
                  <Search size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-405 uppercase tracking-widest">Decision Protocol</p>
                  <h4 className="text-sm font-black text-slate-905 uppercase">React vs. Respond</h4>
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
               className={cn(
                 "p-6 rounded-3xl border flex flex-col items-center text-center transition-all duration-300 outline-none w-full", 
                 isActive('react') 
                   ? "bg-[#FFF5F5] border-[#FECACA] scale-[1.02] shadow-sm" 
                   : "bg-white border-slate-100", 
                 activePart && !isActive('react') ? "text-slate-450 border-rose-50" : ""
               )}
             >
               <div className={cn("w-10 h-10 rounded-xl text-white flex items-center justify-center mb-4 transition-colors bg-rose-600 shadow-sm")}>
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
               className={cn(
                 "p-6 rounded-3xl border flex flex-col items-center text-center transition-all duration-300 outline-none w-full", 
                 isActive('respond') 
                   ? "bg-[#F0FDF4] border-[#A7F3D0] scale-[1.02] shadow-sm" 
                   : "bg-white border-slate-100", 
                 activePart && !isActive('respond') ? "text-slate-450 border-emerald-50" : ""
               )}
             >
               <div className={cn("w-10 h-10 rounded-xl text-white flex items-center justify-center mb-4 transition-colors bg-emerald-600 shadow-sm")}>
                 <CheckCircle2 size={18} />
               </div>
               <p className={cn("text-[11px] font-black uppercase mb-1 transition-colors", isActive('respond') ? "text-emerald-900" : "text-slate-905")}>Disciplined Response</p>
               <p className="text-[10px] font-bold text-slate-500 leading-relaxed italic">"Gold is moving fast. What is the USD doing? What window are we in?"</p>
             </button>
          </div>

          <div className="p-6 rounded-3xl bg-[#0F172A] text-white flex items-center gap-4">
             <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
               <Brain size={20} className="text-amber-400" />
             </div>
             <p className="text-[11px] font-bold text-slate-300 leading-relaxed">
               <span className="text-white font-black">Mental Model:</span> Professional trading in Gold is about verification, not reflexes.
             </p>
          </div>
        </div>
      </div>
    </InstitutionalFrame>
  );
};
