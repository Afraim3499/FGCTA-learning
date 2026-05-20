"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Database,
  TrendingUp,
  TrendingDown,
  ArrowRight,
  ArrowRightLeft,
  Cpu,
  BarChart3,
  MousePointer2,
  MousePointerClick,
  Layers,
  Zap,
  Info,
  CheckCircle2,
  AlertCircle,
  Brain,
  Eye,
  RefreshCcw,
  Users,
  ArrowDown,
  ChevronRight,
  ChevronLeft
} from "lucide-react";

/**
 * Institutional Frame Component for Module 0.2
 */
const InstitutionalFrame = ({ 
  children, 
  label, 
  status = "AUDIT STANDBY",
  id = "LN-0.2-AUD"
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
 * 0.2 - Transaction Mechanism Mini Visual
 */
export const TransactionMechanismMiniVisual = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <InstitutionalFrame label="Transaction Mechanism" id="LN-0.2-TXMINI" status="MECHANICS SCAN">
      <div className="w-full max-w-3xl mx-auto py-4">
        
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
        <button 
          onMouseEnter={() => setActivePart('orders')}
          onMouseLeave={() => setActivePart(null)}
          onFocus={() => setActivePart('orders')}
          onBlur={() => setActivePart(null)}
          className={cn(
            "flex items-center gap-3 px-4 py-2 rounded-xl border transition-all duration-300",
            isActive('orders') ? "bg-blue-100 border-blue-300 shadow-md scale-105" : "bg-slate-50 border-slate-200"
          )}
        >
          <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-blue-600 flex items-center justify-center">
            <TrendingUp size={16} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Orders</span>
        </button>

        <ArrowRight className={cn("hidden md:block transition-colors duration-300", isActive('matching') || isActive('orders') ? "text-slate-400" : "text-slate-200")} size={16} />

        <button 
          onMouseEnter={() => setActivePart('matching')}
          onMouseLeave={() => setActivePart(null)}
          onFocus={() => setActivePart('matching')}
          onBlur={() => setActivePart(null)}
          className={cn(
            "flex items-center gap-3 px-4 py-2 rounded-xl border relative transition-all duration-300",
            isActive('matching') ? "bg-teal-100 border-teal-300 shadow-md scale-105" : "bg-teal-50 border-teal-200 shadow-sm"
          )}
        >
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-teal-500 rounded-full animate-ping" />
          <div className="w-8 h-8 rounded-lg bg-[#F0FDFA] text-teal-600 flex items-center justify-center">
            <Cpu size={16} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-teal-900">Matching</span>
        </button>

        <ArrowRight className={cn("hidden md:block transition-colors duration-300", isActive('transaction') || isActive('matching') ? "text-slate-400" : "text-slate-200")} size={16} />

        <button 
          onMouseEnter={() => setActivePart('transaction')}
          onMouseLeave={() => setActivePart(null)}
          onFocus={() => setActivePart('transaction')}
          onBlur={() => setActivePart(null)}
          className={cn(
            "flex items-center gap-3 px-4 py-2 rounded-xl border shadow-sm transition-all duration-300",
            isActive('transaction') ? "bg-emerald-100 border-emerald-300 shadow-md scale-105" : "bg-emerald-50 border-emerald-200"
          )}
        >
          <div className="w-8 h-8 rounded-lg bg-[#F0FDF4] text-emerald-600 flex items-center justify-center">
            <ArrowRightLeft size={16} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-emerald-900">Transaction</span>
        </button>

        <ArrowRight className={cn("hidden md:block transition-colors duration-300", isActive('chart') || isActive('transaction') ? "text-slate-400" : "text-slate-200")} size={16} />

        <button 
          onMouseEnter={() => setActivePart('chart')}
          onMouseLeave={() => setActivePart(null)}
          onFocus={() => setActivePart('chart')}
          onBlur={() => setActivePart(null)}
          className={cn(
            "flex items-center gap-3 px-4 py-2 rounded-xl border transition-all duration-300",
            isActive('chart') ? "bg-slate-800 border-slate-600 shadow-xl scale-105" : "bg-slate-900 border-slate-800 shadow-lg text-white"
          )}
        >
          <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300", isActive('chart') ? "bg-[#475569] text-white" : "bg-[#334155] text-white")}>
            <BarChart3 size={16} />
          </div>
          <span className={cn("text-[10px] font-black uppercase tracking-widest transition-colors duration-300", isActive('chart') ? "text-white" : "text-slate-300")}>Chart Record</span>
        </button>
      </div>
    
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 0.2 - Intent Logic Board
 */
export const IntentLogicBoardVisual = () => {
  const [activeStep, setActiveStep] = useState<string | null>(null);

  const steps = [
    { id: "intent", title: "Participant Intent", desc: "“They want to buy / sell / defend / exit”", icon: <MousePointer2 size={16} />, color: "blue" },
    { id: "orders", title: "Orders Enter Market", desc: "Bids, asks, market orders, limit orders", icon: <Layers size={16} />, color: "teal" },
    { id: "pressure", title: "Pressure Builds", desc: "One side becomes more aggressive", icon: <Zap size={16} />, color: "emerald" },
    { id: "movement", title: "Price Moves", desc: "Transactions happen at new levels", icon: <TrendingUp size={16} />, color: "rose" },
    { id: "pattern", title: "Pattern Appears", desc: "The chart records the result", icon: <BarChart3 size={16} />, color: "slate" }
  ];

  return (
    <InstitutionalFrame label="Intent Logic Analyzer" id="LN-0.2-INTENT" status="INTENT SCAN">
      <div className="w-full max-w-5xl mx-auto py-8 px-4 relative">
        
      <div className="max-w-2xl mx-auto mb-12 p-6 rounded-[2.5rem] bg-[var(--ln-navy-900)] text-white shadow-2xl border border-[#CCFBF1] relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 p-4 ">
          <Info size={40} className="text-teal-400" />
        </div>
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#2DD4BF] mb-4">The Central Rule</p>
        <div className="space-y-1">
          <p className="text-sm font-black uppercase tracking-tight">Patterns do not cause intent.</p>
          <p className="text-sm font-black uppercase tracking-tight text-teal-400">Intent creates pressure.</p>
          <p className="text-sm font-black uppercase tracking-tight text-emerald-400">Pressure creates movement.</p>
          <p className="text-sm font-black uppercase tracking-tight text-slate-400">Movement forms patterns.</p>
        </div>
      </div>

      <div className="space-y-4 relative">
        <div className="absolute left-[39px] top-10 bottom-10 w-0.5 bg-slate-100 -z-10 hidden md:block" />
        {steps.map((step, i) => {
          const isActive = activeStep === step.id;
          return (
            <button 
              key={step.id} 
              onMouseEnter={() => setActiveStep(step.id)}
              onMouseLeave={() => setActiveStep(null)}
              onFocus={() => setActiveStep(step.id)}
              onBlur={() => setActiveStep(null)}
              className="w-full flex flex-col md:flex-row items-center md:items-start gap-6 group text-left transition-all duration-300"
            >
              <div className={cn(
                "w-20 h-20 rounded-[2rem] flex items-center justify-center border-4 border-white shrink-0 transition-all duration-300",
                isActive ? "scale-110 shadow-2xl" : "shadow-xl group-hover:scale-[1.05]",
                step.color === 'blue' && (isActive ? "bg-blue-100 text-blue-600 shadow-blue-500/30" : "bg-blue-50 text-blue-500 shadow-blue-500/10"),
                step.color === 'teal' && (isActive ? "bg-teal-100 text-teal-600 shadow-teal-500/30" : "bg-teal-50 text-teal-500 shadow-teal-500/10"),
                step.color === 'emerald' && (isActive ? "bg-emerald-100 text-emerald-600 shadow-emerald-500/30" : "bg-emerald-50 text-emerald-500 shadow-emerald-500/10"),
                step.color === 'rose' && (isActive ? "bg-rose-100 text-rose-600 shadow-rose-500/30" : "bg-rose-50 text-rose-500 shadow-rose-500/10"),
                step.color === 'slate' && (isActive ? "bg-slate-200 text-slate-700 shadow-slate-500/30" : "bg-slate-50 text-slate-500 shadow-slate-500/10")
              )}>
                {step.icon}
              </div>
              <div className={cn(
                "flex-1 w-full p-6 rounded-[2.5rem] bg-white border transition-all duration-300",
                isActive ? "border-teal-400 shadow-xl scale-[1.02] bg-[#F8FAFC]" : "border-slate-100 shadow-lg group-hover:border-[#99F6E4]"
              )}>
                <div className="flex items-center justify-between mb-2">
                  <span className={cn(
                    "text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-300",
                    isActive ? "text-teal-600" : "text-slate-400"
                  )}>Step {i + 1}</span>
                  {i < steps.length - 1 && (
                    <ArrowDown className={cn("hidden md:block transition-colors duration-300", isActive ? "text-teal-400" : "text-slate-200")} size={14} />
                  )}
                </div>
                <h5 className="text-sm font-black text-slate-900 uppercase tracking-tight">{step.title}</h5>
                <p className="text-[11px] font-bold text-slate-500 mt-1 uppercase tracking-tight italic leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-teal-50 border border-teal-100 shadow-sm">
          <CheckCircle2 size={16} className="text-teal-500" />
          <p className="text-[11px] font-black text-teal-900 uppercase tracking-widest">
            The shape is the symptom. The behavior is the lesson.
          </p>
        </div>
      </div>
    
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 0.2 - Mindset Comparison
 */
export const MindsetComparisonVisual = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <InstitutionalFrame label="Mindset Comparison Board" id="LN-0.2-MINDSET" status="MINDSET AUDIT">
      <div className="w-full max-w-5xl mx-auto py-8 px-4 relative">
        
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <button
          onMouseEnter={() => setActivePart('guesser')}
          onMouseLeave={() => setActivePart(null)}
          onFocus={() => setActivePart('guesser')}
          onBlur={() => setActivePart(null)}
          className={cn(
            "flex flex-col rounded-[2.5rem] border shadow-xl overflow-hidden group text-left transition-all duration-300",
            isActive('guesser') ? "bg-[#FFFDFD] border-rose-300 scale-[1.02] shadow-rose-500/10" : "bg-white border-slate-100",
            activePart && activePart !== 'guesser' ? " scale-[0.98]" : ""
          )}
        >
          <div className="bg-[#FFF5F5] px-6 py-3 border-b border-[#FFE4E6] flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-widest text-rose-700">The Guesser</span>
            <div className="w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center">
               <AlertCircle size={14} />
            </div>
          </div>
          <div className="p-6 space-y-6 flex-1 flex flex-col items-center">
            <div className="w-48 h-48 rounded-[2rem] overflow-hidden border border-slate-100 shadow-inner bg-slate-50 relative">
              <img
                src="/images/academy/the_guesser_mindset.png"
                alt="Reactive Learner"
                className={cn(
                  "w-full h-full object-cover transition-all duration-500",
                  isActive('guesser') ? " scale-105" : ""
                )}
              />
            </div>
            <div className="text-center space-y-4">
              <div className={cn(
                "inline-block px-4 py-2 rounded-2xl border transition-colors duration-300",
                isActive('guesser') ? "bg-rose-100 border-rose-300 shadow-sm" : "bg-rose-50 border-rose-100"
              )}>
                <p className="text-[11px] font-extrabold text-rose-900 leading-tight italic">
                  “The chart looks like it’s going up, so I’ll buy.”
                </p>
              </div>
              <div className="pt-2">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Interpretation</p>
                <p className={cn("text-sm font-black uppercase tracking-tight transition-colors duration-300", isActive('guesser') ? "text-rose-900" : "text-slate-900")}>Focuses on appearance, not evidence.</p>
              </div>
            </div>
          </div>
        </button>

        <button
          onMouseEnter={() => setActivePart('observer')}
          onMouseLeave={() => setActivePart(null)}
          onFocus={() => setActivePart('observer')}
          onBlur={() => setActivePart(null)}
          className={cn(
            "flex flex-col rounded-[2.5rem] border shadow-xl overflow-hidden group text-left transition-all duration-300",
            isActive('observer') ? "bg-[#FBFDFB] border-emerald-300 scale-[1.02] shadow-emerald-500/10" : "bg-white border-slate-100",
            activePart && activePart !== 'observer' ? " scale-[0.98]" : ""
          )}
        >
          <div className="bg-[#F0FDF4] px-6 py-3 border-b border-[#D1FAE5] flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700">The Observer</span>
            <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center">
               <CheckCircle2 size={14} />
            </div>
          </div>
          <div className="p-6 space-y-6 flex-1 flex flex-col items-center">
            <div className="w-48 h-48 rounded-[2rem] overflow-hidden border border-emerald-100 shadow-inner bg-emerald-50 relative">
              <img
                src="/images/academy/the_observer_mindset.png"
                alt="Analytical Learner"
                className={cn(
                  "w-full h-full object-cover transition-transform duration-500",
                  isActive('observer') ? "scale-105" : "scale-100"
                )}
              />
            </div>
            <div className="text-center space-y-4">
              <div className={cn(
                "inline-block px-4 py-2 rounded-2xl border transition-colors duration-300",
                isActive('observer') ? "bg-emerald-100 border-emerald-300 shadow-sm" : "bg-emerald-50 border-emerald-100"
              )}>
                <p className="text-[11px] font-extrabold text-emerald-900 leading-tight italic">
                  “I observe buyers hitting the Ask and pushing through seller levels. This is evidence of intent.”
                </p>
              </div>
              <div className="pt-2">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Interpretation</p>
                <p className={cn("text-sm font-black uppercase tracking-tight transition-colors duration-300", isActive('observer') ? "text-emerald-900" : "text-slate-900")}>Reads market behavior before forming a conclusion.</p>
              </div>
            </div>
          </div>
        </button>
      </div>

      <div className="mt-12 p-8 rounded-[3rem] bg-[var(--ln-navy-900)] text-white shadow-2xl border border-[#CCFBF1] relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-6  group-hover: transition-opacity">
          <Brain size={80} className="text-teal-400" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
          <div className="space-y-4">
            <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#2DD4BF]">Lurnava Rule</h5>
            <div className="space-y-1">
              <p className="text-lg font-black uppercase tracking-tight leading-none">Do not guess from shape.</p>
              <p className="text-lg font-black uppercase tracking-tight text-teal-400 leading-none">Read behavior, pressure, and intent.</p>
            </div>
          </div>
          <div className="flex items-center gap-6 p-5 rounded-[2rem] bg-[#1E293B] border border-slate-800 backdrop-blur-sm">
             <div className="w-12 h-12 rounded-2xl bg-[#CCFBF1] flex items-center justify-center shrink-0 border border-[#99F6E4]">
               <Eye size={24} className="text-teal-400" />
             </div>
             <div>
               <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">The Core Question</p>
               <p className="text-[11px] font-bold text-slate-200 leading-snug uppercase">
                 Lurnava learners do not ask “What does this shape suggest?” They ask “What market behavior is visible here?”
               </p>
             </div>
          </div>
        </div>
      </div>
    
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 0.2 - Liquidity Comparison
 */
export const LiquidityComparisonVisual = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <InstitutionalFrame label="Liquidity Impact Board" id="LN-0.2-LIQ" status="LIQUIDITY AUDIT">
      <div className="w-full max-w-5xl mx-auto py-6 px-4">
        
      <div className="text-center mb-8">
        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">Market Impact Analysis</h4>
        <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight italic">Same Order, Different Market Depth</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <button
          onMouseEnter={() => setActivePart('liquid')}
          onMouseLeave={() => setActivePart(null)}
          onFocus={() => setActivePart('liquid')}
          onBlur={() => setActivePart(null)}
          className={cn(
            "flex flex-col rounded-[2.5rem] border shadow-xl overflow-hidden group text-left transition-all duration-300",
            isActive('liquid') ? "bg-[#FBFDFB] border-emerald-300 scale-[1.02] shadow-emerald-500/10" : "bg-white border-slate-100",
            activePart && activePart !== 'liquid' ? " scale-[0.98]" : ""
          )}
        >
          <div className="bg-[#F0FDF4] px-6 py-3 border-b border-[#D1FAE5] flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700">Liquid Market</span>
            <span className="text-[8px] font-bold px-2 py-0.5 rounded-full bg-[#F0FDF4] text-emerald-600 uppercase">High Depth</span>
          </div>
          <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
            <div className="space-y-2">
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-3">Sell Order Depth (Asks)</p>
              {[
                { price: 100.30, size: 5 },
                { price: 100.20, size: 8 },
                { price: 100.10, size: 10 },
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-slate-400 w-10">{row.price.toFixed(2)}</span>
                  <div className={cn(
                    "flex-1 h-6 bg-slate-50 rounded-lg flex items-center px-1 border overflow-hidden transition-colors duration-300",
                    isActive('liquid') ? "border-emerald-200" : "border-slate-100"
                  )}>
                    <div className="h-4 bg-[#FFE4E6] rounded-md border border-[#FECDD3] flex items-center px-2" style={{ width: `${row.size * 10}%` }}>
                       <span className="text-[8px] font-black text-rose-600">{row.size} Units</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center justify-center ">
                <RefreshCcw size={40} className="animate-spin-slow" />
              </div>
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className={cn(
                  "px-4 py-2 rounded-xl text-white border shadow-lg flex items-center gap-3 transition-colors duration-300",
                  isActive('liquid') ? "bg-slate-800 border-slate-600" : "bg-slate-900 border-slate-800"
                )}>
                  <TrendingUp size={14} className="text-emerald-400" />
                  <span className="text-[10px] font-black uppercase tracking-widest">BUY ORDER: 5 UNITS</span>
                </div>
                <div className="h-8 w-px bg-slate-200" />
              </div>
            </div>
            <div className={cn(
              "p-4 rounded-2xl border transition-all duration-300",
              isActive('liquid') ? "bg-emerald-100 border-emerald-300 shadow-md" : "bg-emerald-50 border-emerald-100"
            )}>
               <div className="flex items-center gap-3 mb-2">
                 <CheckCircle2 size={14} className="text-emerald-500" />
                 <p className="text-[10px] font-black uppercase tracking-widest text-emerald-800">Result: Near-Price Fill</p>
               </div>
               <p className="text-[9px] font-bold text-emerald-600 uppercase leading-tight">Order filled at 100.10. No price jump required.</p>
               <div className="mt-2 text-[10px] font-black text-emerald-700 uppercase">Outcome: Small Move</div>
            </div>
          </div>
        </button>

        <button
          onMouseEnter={() => setActivePart('illiquid')}
          onMouseLeave={() => setActivePart(null)}
          onFocus={() => setActivePart('illiquid')}
          onBlur={() => setActivePart(null)}
          className={cn(
            "flex flex-col rounded-[2.5rem] border shadow-xl overflow-hidden group text-left transition-all duration-300",
            isActive('illiquid') ? "bg-[#FFFDFD] border-rose-300 scale-[1.02] shadow-rose-500/10" : "bg-white border-slate-100",
            activePart && activePart !== 'illiquid' ? " scale-[0.98]" : ""
          )}
        >
          <div className="bg-[#FFF5F5] px-6 py-3 border-b border-[#FFE4E6] flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-widest text-rose-700">Illiquid Market</span>
            <span className="text-[8px] font-bold px-2 py-0.5 rounded-full bg-[#FFF5F5] text-rose-600 uppercase">Low Depth</span>
          </div>
          <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
            <div className="space-y-2">
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-3">Sell Order Depth (Asks)</p>
              {[
                { price: 100.30, size: 5, hasGap: false },
                { price: 100.20, size: 0, hasGap: true },
                { price: 100.10, size: 2, hasGap: false },
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-slate-400 w-10">{row.price.toFixed(2)}</span>
                  <div className={cn(
                    "flex-1 h-6 rounded-lg flex items-center px-1 border overflow-hidden transition-colors duration-300",
                    row.hasGap ? (isActive('illiquid') ? 'bg-[#FFE4E6] border-dashed border-rose-300' : 'bg-[#FFFDFD] border-dashed border-rose-100') : (isActive('illiquid') ? 'bg-rose-50 border-rose-200' : 'bg-slate-50 border-slate-100')
                  )}>
                    {row.size > 0 && (
                      <div className="h-4 bg-[#FFE4E6] rounded-md border border-[#FECDD3] flex items-center px-2" style={{ width: `${row.size * 10}%` }}>
                         <span className="text-[8px] font-black text-rose-600">{row.size} Units</span>
                      </div>
                    )}
                    {row.hasGap && (
                      <span className="text-[8px] font-black text-rose-400 uppercase tracking-widest mx-auto">Empty Gap</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="relative py-4">
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className={cn(
                  "px-4 py-2 rounded-xl text-white border shadow-lg flex items-center gap-3 transition-colors duration-300",
                  isActive('illiquid') ? "bg-slate-800 border-slate-600" : "bg-slate-900 border-slate-800"
                )}>
                  <TrendingUp size={14} className="text-rose-400" />
                  <span className="text-[10px] font-black uppercase tracking-widest">BUY ORDER: 5 UNITS</span>
                </div>
                <div className="h-8 w-px bg-slate-200" />
              </div>
            </div>
            <div className={cn(
              "p-4 rounded-2xl border shadow-lg transition-all duration-300",
              isActive('illiquid') ? "bg-rose-100 border-rose-300 shadow-rose-500/10" : "bg-rose-50 border-rose-100 shadow-rose-500/5"
            )}>
               <div className="flex items-center gap-3 mb-2">
                 <AlertCircle size={14} className="text-rose-500" />
                 <p className="text-[10px] font-black uppercase tracking-widest text-rose-800">Result: Consumes Depth</p>
               </div>
               <p className="text-[9px] font-bold text-rose-600 uppercase leading-tight">Must reach 100.30 to fill total 5 units.</p>
               <div className="mt-2 text-[10px] font-black text-rose-700 uppercase animate-pulse">Outcome: Larger Jump</div>
            </div>
          </div>
        </button>
      </div>
      <div className="mt-10 py-5 px-8 rounded-[2rem] bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center">
            <Layers size={18} />
          </div>
          <p className="text-[11px] font-black text-slate-900 uppercase tracking-tight">
            Same buy order. Different order depth. Different price movement.
          </p>
        </div>
        <div className="px-6 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-[10px] font-black text-slate-400 uppercase tracking-widest">
           Liquidity affects travel distance
        </div>
      </div>
    
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 0.2 - Market Microstructure
 */
export const MicrostructureBoardVisual = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <InstitutionalFrame label="Market Microstructure" id="LN-0.2-MICRO" status="MICROSTRUCTURE SCAN">
      <div className="w-full max-w-5xl mx-auto py-8 px-4 relative">
        
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between px-2 mb-2">
            <h4 className={cn("text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-300", isActive('bid') ? "text-emerald-500" : "text-slate-400")}>Bid Side (Liquidity)</h4>
            <h4 className={cn("text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-300", isActive('ask') ? "text-rose-500" : "text-slate-400")}>Ask Side (Liquidity)</h4>
          </div>
          <div className="relative">
            <div className="absolute top-[2px] left-0 right-0 h-[52px] bg-[#F2FDFB] rounded-2xl border-y border-[#CCFBF1] pointer-events-none" />
            <div className="space-y-1 relative z-10">
              {[
                { bid: 99.90, bidSize: "████████", ask: 100.10, askSize: "██████", isBest: true },
                { bid: 99.80, bidSize: "██████", ask: 100.20, askSize: "████" },
                { bid: 99.70, bidSize: "████", ask: 100.30, askSize: "██" },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-2 gap-4">
                  <button 
                    onMouseEnter={() => setActivePart('bid')}
                    onMouseLeave={() => setActivePart(null)}
                    onFocus={() => setActivePart('bid')}
                    onBlur={() => setActivePart(null)}
                    className={cn(
                      "flex items-center justify-end gap-3 p-3 rounded-xl border transition-all duration-300",
                      isActive('bid') ? "bg-[#F0FDF4] border-emerald-300 shadow-md scale-[1.02]" : "bg-white border-slate-100 shadow-sm hover:border-emerald-200",
                      activePart && !isActive('bid') && !isActive('liquidity') ? "" : ""
                    )}
                  >
                    <span className="text-[10px] font-mono text-emerald-600 truncate">{row.bidSize}</span>
                    <span className={`text-sm font-black font-mono ${row.isBest ? 'text-emerald-600' : 'text-slate-400'}`}>{row.bid.toFixed(2)}</span>
                  </button>
                  <button 
                    onMouseEnter={() => setActivePart('ask')}
                    onMouseLeave={() => setActivePart(null)}
                    onFocus={() => setActivePart('ask')}
                    onBlur={() => setActivePart(null)}
                    className={cn(
                      "flex items-center justify-start gap-3 p-3 rounded-xl border transition-all duration-300",
                      isActive('ask') ? "bg-[#FFF5F5] border-rose-300 shadow-md scale-[1.02]" : "bg-white border-slate-100 shadow-sm hover:border-rose-200",
                      activePart && !isActive('ask') && !isActive('liquidity') ? "" : ""
                    )}
                  >
                    <span className={`text-sm font-black font-mono ${row.isBest ? 'text-rose-600' : 'text-slate-400'}`}>{row.ask.toFixed(2)}</span>
                    <span className="text-[10px] font-mono text-rose-600 truncate">{row.askSize}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 py-4">
            <button 
              onMouseEnter={() => setActivePart('spread')}
              onMouseLeave={() => setActivePart(null)}
              onFocus={() => setActivePart('spread')}
              onBlur={() => setActivePart(null)}
              className="flex items-center gap-4 w-full px-12 group"
            >
              <div className={cn("h-px flex-1 transition-colors duration-300", isActive('spread') ? "bg-slate-800" : "bg-slate-200")} />
              <div className={cn(
                "px-4 py-1.5 rounded-full border shadow-lg text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all duration-300",
                isActive('spread') ? "bg-white text-slate-900 border-slate-900 scale-105" : "bg-slate-900 text-white border-slate-800"
              )}>
                Spread: 0.20
              </div>
              <div className={cn("h-px flex-1 transition-colors duration-300", isActive('spread') ? "bg-slate-800" : "bg-slate-200")} />
            </button>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Gap between best buyer & seller</p>
          </div>
        </div>
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-[2.5rem] bg-[var(--ln-navy-900)] text-white shadow-2xl border border-[#CCFBF1] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4  group-hover: transition-opacity">
              <Layers size={80} />
            </div>
            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#2DD4BF] mb-6">The Relationship</h5>
            <div className="space-y-6 relative z-10">
              <button 
                onMouseEnter={() => setActivePart('orders')}
                onMouseLeave={() => setActivePart(null)}
                onFocus={() => setActivePart('orders')}
                onBlur={() => setActivePart(null)}
                className={cn(
                  "flex items-center gap-4 group/item w-full text-left transition-all duration-300 p-2 rounded-xl",
                  isActive('orders') ? "bg-[#334155] shadow-lg scale-[1.02]" : "hover:bg-[#1E293B]"
                )}
              >
                <div className={cn(
                  "w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 transition-colors",
                  isActive('orders') ? "bg-[#CCFBF1] border-teal-500/50 text-teal-300" : "bg-[#1E293B] border-slate-800 text-teal-400"
                )}>
                  <MousePointer2 size={18} />
                </div>
                <div>
                  <p className={cn("text-[10px] font-black uppercase tracking-widest transition-colors", isActive('orders') ? "text-teal-400" : "text-white")}>Orders</p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tight mt-0.5">The instructions sent by participants</p>
                </div>
              </button>
              <div className="flex justify-center -my-2">
                <ArrowRight size={14} className={cn("rotate-90 transition-colors duration-300", isActive('orders') || isActive('liquidity') ? "text-teal-400" : "text-teal-500/40")} />
              </div>
              <button 
                onMouseEnter={() => setActivePart('liquidity')}
                onMouseLeave={() => setActivePart(null)}
                onFocus={() => setActivePart('liquidity')}
                onBlur={() => setActivePart(null)}
                className={cn(
                  "flex items-center gap-4 group/item w-full text-left transition-all duration-300 p-2 rounded-xl",
                  isActive('liquidity') ? "bg-[#334155] shadow-lg scale-[1.02]" : "hover:bg-[#1E293B]"
                )}
              >
                <div className={cn(
                  "w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 transition-colors",
                  isActive('liquidity') ? "bg-[#CCFBF1] border-teal-500/50 text-teal-300" : "bg-[#1E293B] border-slate-800 text-teal-400"
                )}>
                  <Layers size={18} />
                </div>
                <div>
                  <p className={cn("text-[10px] font-black uppercase tracking-widest transition-colors", isActive('liquidity') ? "text-teal-400" : "text-white")}>Liquidity</p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tight mt-0.5">The pool of orders waiting at each price</p>
                </div>
              </button>
              <div className="flex justify-center -my-2">
                <ArrowRight size={14} className={cn("rotate-90 transition-colors duration-300", isActive('liquidity') || isActive('spread') ? "text-teal-400" : "text-teal-500/40")} />
              </div>
              <button 
                onMouseEnter={() => setActivePart('spread')}
                onMouseLeave={() => setActivePart(null)}
                onFocus={() => setActivePart('spread')}
                onBlur={() => setActivePart(null)}
                className={cn(
                  "flex items-center gap-4 group/item w-full text-left transition-all duration-300 p-2 rounded-xl",
                  isActive('spread') ? "bg-[#334155] shadow-lg scale-[1.02]" : "hover:bg-[#1E293B]"
                )}
              >
                <div className={cn(
                  "w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 transition-colors",
                  isActive('spread') ? "bg-[#CCFBF1] border-teal-500/50 text-teal-300" : "bg-[#1E293B] border-slate-800 text-teal-400"
                )}>
                  <ArrowRightLeft size={18} />
                </div>
                <div>
                  <p className={cn("text-[10px] font-black uppercase tracking-widest transition-colors", isActive('spread') ? "text-teal-400" : "text-white")}>Spread</p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tight mt-0.5">The gap formed by liquidity depth</p>
                </div>
              </button>
            </div>
          </div>
          <div className="p-5 rounded-[2rem] bg-teal-50 border border-teal-100 shadow-sm">
             <p className="text-[11px] font-extrabold text-teal-900 leading-relaxed uppercase tracking-tight">
               Liquidity acts like a buffer. More liquidity usually means a tighter spread and smoother movement.
             </p>
          </div>
        </div>
      </div>
    
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 0.2 - Order Matching
 */
export const OrderMatchingVisual = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <InstitutionalFrame label="Order Matching Engine" id="LN-0.2-MATCH" status="MATCHING SCAN">
      <div className="w-full max-w-4xl mx-auto py-8 px-4 relative">
        
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative">
        <button 
          onMouseEnter={() => setActivePart('bids')}
          onMouseLeave={() => setActivePart(null)}
          onFocus={() => setActivePart('bids')}
          onBlur={() => setActivePart(null)}
          className={cn(
            "space-y-4 text-left transition-all duration-300",
            activePart && !isActive('bids') && !isActive('matching') ? "" : ""
          )}
        >
          <div className="text-center mb-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 mb-1">Buyers</h4>
            <span className="text-sm font-black text-slate-900 uppercase tracking-tight">Bid Side</span>
          </div>
          {[99.90, 99.80, 99.70].map((price, i) => (
            <div key={i} className={cn(
              "flex items-center justify-between p-4 rounded-2xl border transition-all duration-300",
              isActive('bids') ? "bg-emerald-50 border-emerald-300 shadow-md scale-[1.02]" : "bg-white border-emerald-100 shadow-sm hover:border-emerald-300"
            )}>
              <span className="text-[10px] font-bold text-slate-400 uppercase">Bid</span>
              <span className="text-sm font-black text-emerald-600 font-mono">{price.toFixed(2)}</span>
            </div>
          ))}
          <div className="flex flex-col items-center gap-2 pt-4">
            <div className={cn("p-3 rounded-full transition-colors duration-300", isActive('bids') ? "bg-emerald-100 text-emerald-600" : "bg-emerald-50 text-emerald-500 animate-bounce")}>
              <ArrowRightLeft size={16} className="-rotate-45" />
            </div>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Want to buy</p>
          </div>
        </button>

        <button 
          onMouseEnter={() => setActivePart('matching')}
          onMouseLeave={() => setActivePart(null)}
          onFocus={() => setActivePart('matching')}
          onBlur={() => setActivePart(null)}
          className={cn(
            "flex flex-col items-center gap-8 py-10 text-left transition-all duration-300",
            activePart && !isActive('matching') && !isActive('transaction') ? "" : ""
          )}
        >
          <div className="relative w-full">
            <div className={cn("absolute inset-0 rounded-[2.5rem] blur-xl transition-all duration-300", isActive('matching') ? "bg-[#CCFBF1] scale-110" : "bg-[#F2FDFB]")} />
            <div className={cn(
              "relative p-6 rounded-[2.5rem] bg-[var(--ln-navy-900)] text-white border text-center space-y-4 transition-all duration-300",
              isActive('matching') ? "border-teal-400 shadow-[0_0_30px_rgba(45,212,191,0.3)] scale-[1.02]" : "shadow-2xl border-[#CCFBF1]"
            )}>
              <div className={cn(
                "w-12 h-12 rounded-2xl flex items-center justify-center mx-auto border transition-colors",
                isActive('matching') ? "bg-[#99F6E4] text-teal-300 border-teal-400" : "bg-[#CCFBF1] text-teal-400 border-[#99F6E4]"
              )}>
                <RefreshCcw size={24} className="animate-spin-slow" />
              </div>
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#2DD4BF]">Matching Point</h5>
              <p className="text-[11px] font-bold text-slate-200 leading-relaxed uppercase tracking-tight">Compatible orders meet</p>
            </div>
          </div>
          <div className={cn(
            "w-full p-5 rounded-[2rem] border-2 shadow-lg relative overflow-hidden transition-all duration-300",
            isActive('matching') ? "bg-emerald-100 border-emerald-400 shadow-xl scale-[1.02]" : "bg-emerald-50 border-[#A7F3D0]"
          )}>
             <div className="absolute top-0 right-0 p-2 text-emerald-500 ">
                <MousePointer2 size={32} />
             </div>
             <div className="relative z-10">
                <h6 className="text-[10px] font-black uppercase tracking-widest text-emerald-700 mb-2 flex items-center gap-2">
                  <Zap size={12} /> Live Scenario
                </h6>
                <p className="text-[11px] font-extrabold text-emerald-900 leading-snug">
                  Aggressive buyer accepts seller's ask @ 100.10
                </p>
             </div>
          </div>
          <div className="w-full flex flex-col items-center gap-2">
            <div className={cn("h-8 w-0.5 transition-colors duration-300", isActive('transaction') || isActive('matching') ? "bg-emerald-400" : "bg-slate-100")} />
            <div className={cn(
              "px-6 py-3 rounded-full text-white border shadow-xl flex items-center gap-3 transition-all duration-300",
              isActive('transaction') || isActive('matching') ? "bg-slate-800 border-emerald-500 shadow-emerald-500/20 scale-105" : "bg-slate-900 border-slate-800"
            )}>
              <CheckCircle2 size={14} className={cn("transition-colors", isActive('transaction') || isActive('matching') ? "text-emerald-300" : "text-emerald-400")} />
              <span className="text-[10px] font-black uppercase tracking-widest">Transaction Recorded</span>
            </div>
          </div>
        </button>

        <button 
          onMouseEnter={() => setActivePart('asks')}
          onMouseLeave={() => setActivePart(null)}
          onFocus={() => setActivePart('asks')}
          onBlur={() => setActivePart(null)}
          className={cn(
            "space-y-4 text-left transition-all duration-300",
            activePart && !isActive('asks') && !isActive('matching') ? "" : ""
          )}
        >
          <div className="text-center mb-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-rose-600 mb-1">Sellers</h4>
            <span className="text-sm font-black text-slate-900 uppercase tracking-tight">Ask Side</span>
          </div>
          {[100.10, 100.20, 100.30].map((price, i) => (
            <div key={i} className={cn(
              "flex items-center justify-between p-4 rounded-2xl border shadow-sm transition-all duration-300 relative",
              isActive('asks') ? "bg-rose-50 border-rose-300 shadow-md scale-[1.02]" : (i === 0 ? 'bg-rose-50 border-rose-300' : 'bg-white border-rose-100 hover:border-rose-300')
            )}>
              <span className="text-sm font-black text-rose-600 font-mono">{price.toFixed(2)}</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase">Ask</span>
              {i === 0 && (
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white border-2 border-white animate-pulse shadow-lg">
                  <Zap size={10} />
                </div>
              )}
            </div>
          ))}
          <div className="flex flex-col items-center gap-2 pt-4">
            <div className={cn("p-3 rounded-full transition-colors duration-300", isActive('asks') ? "bg-rose-100 text-rose-600" : "bg-rose-50 text-rose-500 animate-bounce")}>
              <ArrowRightLeft size={16} className="rotate-45" />
            </div>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Want to sell</p>
          </div>
        </button>
      </div>

      <button 
        onMouseEnter={() => setActivePart('transaction')}
        onMouseLeave={() => setActivePart(null)}
        onFocus={() => setActivePart('transaction')}
        onBlur={() => setActivePart(null)}
        className={cn(
          "mt-12 flex flex-col items-center w-full transition-all duration-300 text-left",
          activePart && !isActive('transaction') ? "" : ""
        )}
      >
        <div className={cn("h-10 w-0.5 transition-colors duration-300", isActive('transaction') ? "bg-teal-400" : "bg-slate-100")} />
        <div className={cn(
          "w-full max-w-md p-6 rounded-[2.5rem] bg-white border flex items-center gap-6 relative overflow-hidden transition-all duration-300",
          isActive('transaction') ? "border-teal-400 shadow-2xl scale-[1.02]" : "border-teal-100 shadow-xl"
        )}>
          <div className={cn("absolute inset-0 bg-[#F2FDFB] transition-transform duration-500", isActive('transaction') ? "translate-y-0" : "translate-y-full")} />
          <div className={cn(
            "w-14 h-14 rounded-2xl flex items-center justify-center border shrink-0 relative z-10 transition-colors",
            isActive('transaction') ? "bg-teal-100 text-teal-600 border-teal-300" : "bg-teal-50 text-teal-500 border-teal-100"
          )}>
            <BarChart3 size={28} />
          </div>
          <div className="relative z-10">
            <h5 className="text-[10px] font-black uppercase tracking-widest text-teal-600 mb-1">Result</h5>
            <p className="text-base font-black text-slate-900 uppercase leading-none">Price Update</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight mt-2">The chart prints a new price point</p>
          </div>
        </div>
      </button>
    
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 0.2 - Market Mechanism Visual
 */
export const MarketMechanismVisual = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <InstitutionalFrame label="Market Mechanism Board" id="LN-0.2-MECH" status="MECHANICS STREAM">
      <div className="w-full max-w-5xl mx-auto py-6 px-2 relative">
        
      <div className={cn("hidden md:block absolute top-[75px] left-[15%] right-[15%] h-0.5 -z-10 transition-colors duration-300", isActive('matching') ? "bg-teal-200" : "bg-slate-100")} />
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-4 relative">
        <button 
          onMouseEnter={() => setActivePart('buyers')}
          onMouseLeave={() => setActivePart(null)}
          onFocus={() => setActivePart('buyers')}
          onBlur={() => setActivePart(null)}
          className={cn(
            "w-full md:w-[28%] order-2 md:order-1 transition-all duration-300",
            activePart && !isActive('buyers') && !isActive('matching') ? "" : ""
          )}
        >
          <div className={cn(
            "flex flex-col items-center p-5 rounded-[2rem] bg-white border shadow-lg relative transition-all duration-300",
            isActive('buyers') ? "border-emerald-300 shadow-emerald-500/20 scale-[1.02]" : "border-emerald-100 shadow-emerald-500/5"
          )}>
            <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-colors", isActive('buyers') ? "bg-emerald-100 text-emerald-600" : "bg-emerald-50 text-emerald-500")}>
              <Users size={20} />
            </div>
            <span className="text-xs font-black text-slate-900 uppercase tracking-tight">Buyers</span>
            <p className="text-[9px] font-bold text-slate-400 mt-1 uppercase tracking-widest text-center leading-tight">Place buy orders</p>
            <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2">
              <ChevronRight size={16} className={cn("transition-colors", isActive('buyers') || isActive('matching') ? "text-teal-400" : "text-slate-200")} />
            </div>
          </div>
        </button>

        <div className="w-full md:w-[36%] order-1 md:order-2 flex flex-col items-center gap-4">
          <button 
            onMouseEnter={() => setActivePart('matching')}
            onMouseLeave={() => setActivePart(null)}
            onFocus={() => setActivePart('matching')}
            onBlur={() => setActivePart(null)}
            className={cn(
              "relative w-full text-left transition-all duration-300",
              activePart && !isActive('matching') ? "" : ""
            )}
          >
            <div className={cn("absolute inset-0 rounded-[2rem] transition-all duration-300", isActive('matching') ? "bg-[#CCFBF1] scale-105" : "bg-[#F2FDFB] animate-pulse")} />
            <div className={cn(
              "relative flex flex-col items-center p-6 rounded-[2rem] bg-[var(--ln-navy-900)] text-white border w-full text-center transition-all duration-300",
              isActive('matching') ? "shadow-[0_0_30px_rgba(45,212,191,0.3)] border-teal-400 scale-[1.02]" : "shadow-xl border-[#CCFBF1]"
            )}>
              <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mb-3 border transition-colors", isActive('matching') ? "bg-[#5EEAD4] text-teal-300 border-teal-300" : "bg-[#CCFBF1] text-teal-400 border-[#99F6E4]")}>
                <Cpu size={22} className="animate-spin-slow" />
              </div>
              <span className="text-sm font-black uppercase tracking-widest mb-1 text-white">Matching Engine</span>
              <p className="text-[9px] font-bold text-[#2DD4BF] uppercase tracking-widest">Orders meet at a price</p>
            </div>
          </button>
          <div className="flex flex-col items-center -my-2">
            <div className={cn("h-6 w-0.5 transition-colors duration-300", isActive('matching') || isActive('transaction') ? "bg-emerald-400" : "bg-slate-100")} />
            <div className={cn("w-2 h-2 rotate-45 border-r border-b -mt-1 transition-colors duration-300", isActive('matching') || isActive('transaction') ? "border-emerald-400" : "border-slate-100")} />
          </div>
          <button 
            onMouseEnter={() => setActivePart('transaction')}
            onMouseLeave={() => setActivePart(null)}
            onFocus={() => setActivePart('transaction')}
            onBlur={() => setActivePart(null)}
            className={cn(
              "flex items-center gap-3 p-4 rounded-2xl border w-full text-left transition-all duration-300",
              isActive('transaction') ? "bg-emerald-100 border-emerald-400 shadow-md scale-[1.02]" : "bg-emerald-50 border-emerald-100 shadow-sm",
              activePart && !isActive('transaction') && !isActive('matching') ? "" : ""
            )}
          >
            <div className={cn("w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 transition-colors", isActive('transaction') ? "bg-white text-emerald-600 border-emerald-200" : "bg-white text-emerald-500 border-emerald-100")}>
              <CheckCircle2 size={16} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-900 uppercase leading-none">Transaction</p>
              <p className="text-[8px] font-bold text-slate-400 uppercase tracking-tight mt-1">A trade happens</p>
            </div>
          </button>
          <button 
            onMouseEnter={() => setActivePart('chart')}
            onMouseLeave={() => setActivePart(null)}
            onFocus={() => setActivePart('chart')}
            onBlur={() => setActivePart(null)}
            className={cn(
              "flex items-center gap-3 p-4 rounded-2xl border w-full text-left transition-all duration-300",
              isActive('chart') ? "bg-teal-100 border-teal-400 shadow-md scale-[1.02]" : "bg-teal-50 border-teal-100 shadow-sm",
              activePart && !isActive('chart') && !isActive('transaction') ? "" : ""
            )}
          >
            <div className={cn("w-8 h-8 rounded-lg bg-white border flex items-center justify-center shrink-0 transition-colors", isActive('chart') ? "text-teal-600 border-teal-200" : "text-teal-500 border-teal-100")}>
              <BarChart3 size={16} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-900 uppercase leading-none">Price Chart</p>
              <p className="text-[8px] font-bold text-slate-400 uppercase tracking-tight mt-1">Records completed interactions</p>
            </div>
          </button>
        </div>

        <button 
          onMouseEnter={() => setActivePart('sellers')}
          onMouseLeave={() => setActivePart(null)}
          onFocus={() => setActivePart('sellers')}
          onBlur={() => setActivePart(null)}
          className={cn(
            "w-full md:w-[28%] order-3 transition-all duration-300",
            activePart && !isActive('sellers') && !isActive('matching') ? "" : ""
          )}
        >
          <div className={cn(
            "flex flex-col items-center p-5 rounded-[2rem] bg-white border shadow-lg relative transition-all duration-300",
            isActive('sellers') ? "border-rose-300 shadow-rose-500/20 scale-[1.02]" : "border-rose-100 shadow-rose-500/5"
          )}>
            <div className="hidden md:block absolute top-1/2 -left-4 -translate-y-1/2">
              <ChevronLeft size={16} className={cn("transition-colors", isActive('sellers') || isActive('matching') ? "text-teal-400" : "text-slate-200")} />
            </div>
            <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-colors", isActive('sellers') ? "bg-rose-100 text-rose-600" : "bg-rose-50 text-rose-500")}>
              <Users size={20} />
            </div>
            <span className="text-xs font-black text-slate-900 uppercase tracking-tight">Sellers</span>
            <p className="text-[9px] font-bold text-slate-400 mt-1 uppercase tracking-widest text-center leading-tight">Place sell orders</p>
          </div>
        </button>
      </div>
    
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 0.2 - Market Mechanism Recap Map
 */
export const MarketMechanismRecapVisual = ({ moduleNumber = "0.2" }) => {
  const steps = [
    { label: "Participants", icon: <Users size={12} />, color: "blue" },
    { label: "Orders", icon: <MousePointerClick size={12} />, color: "indigo" },
    { label: "Matching", icon: <Cpu size={12} />, color: "teal" },
    { label: "Transaction", icon: <ArrowRightLeft size={12} />, color: "emerald" },
    { label: "Price Chart", icon: <BarChart3 size={12} />, color: "slate" },
    { label: "Market Reading", icon: <Brain size={12} />, color: "amber" }
  ];

  return (
    <InstitutionalFrame label="Market Mechanism Debrief" id="LN-0.2-RECAP" status="RECAP ACTIVE">
      <div className="w-full max-w-4xl mx-auto py-2">
        
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 shadow-sm">
          <CheckCircle2 size={14} className="text-emerald-500" />
          <span className="text-[11px] font-black text-emerald-700 uppercase tracking-[0.2em]">
            Module {moduleNumber} Complete
          </span>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-1.5">
        {steps.map((step, i) => (
          <React.Fragment key={step.label}>
            <div className={cn(
              "flex flex-col items-center gap-2 p-3 rounded-2xl border bg-white shadow-sm transition-all duration-500 hover:shadow-md min-w-[100px]",
              step.color === "blue" && "border-blue-100",
              step.color === "indigo" && "border-indigo-100",
              step.color === "teal" && "border-teal-100",
              step.color === "emerald" && "border-emerald-100",
              step.color === "slate" && "border-slate-100",
              step.color === "amber" && "border-amber-100 bg-[#FFFBEB]"
            )}>
              <div className={cn(
                "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border",
                step.color === "blue" && "bg-[#EFF6FF] text-blue-600 border-blue-100",
                step.color === "indigo" && "bg-[#EEF2FF] text-indigo-600 border-indigo-100",
                step.color === "teal" && "bg-[#F0FDFA] text-teal-600 border-teal-100",
                step.color === "emerald" && "bg-[#F0FDF4] text-emerald-600 border-emerald-100",
                step.color === "slate" && "bg-[#F1F5F9] text-slate-600 border-slate-100",
                step.color === "amber" && "bg-[#FEF3C7] text-amber-600 border-amber-200"
              )}>
                {step.icon}
              </div>
              <p className="text-[9px] font-black uppercase tracking-tight text-slate-600 text-center leading-none">
                {step.label}
              </p>
            </div>
            {i < steps.length - 1 && (
              <ChevronRight className="text-slate-200 hidden sm:block" size={14} />
            )}
          </React.Fragment>
        ))}
      </div>
    
      </div>
    </InstitutionalFrame>
  );
};
