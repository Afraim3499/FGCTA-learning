"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Globe,
  TrendingUp,
  Activity,
  Layers,
  Gavel,
  Lock,
  Monitor,
  Users,
  ArrowRightLeft,
  ShieldCheck,
  Cpu,
  Brain,
  Eye
} from "lucide-react";

/**
 * 0.2 - Gold Market Map Visual
 */
export const GoldMarketMapVisual = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  const nodes = [
    { id: "otc", label: "London OTC Spot", sub: "Bilateral Trading", color: "amber", icon: <Globe size={14} />, bg: "bg-amber-50 text-amber-600", activeBg: "bg-amber-100 text-amber-700 border-amber-200" },
    { id: "futures", label: "COMEX Futures", sub: "Exchange Contracts", color: "slate", icon: <Layers size={14} />, bg: "bg-slate-50 text-slate-600", activeBg: "bg-slate-100 text-slate-700 border-slate-200" },
    { id: "benchmark", label: "Gold Price Benchmark", sub: "LBMA Auctions", color: "yellow", icon: <Gavel size={14} />, bg: "bg-yellow-50 text-yellow-600", activeBg: "bg-yellow-100 text-yellow-700 border-yellow-200" },
    { id: "physical", label: "Physical Bullion", sub: "Vaults & Logistics", color: "orange", icon: <Lock size={14} />, bg: "bg-orange-50 text-orange-600", activeBg: "bg-orange-100 text-orange-700 border-orange-200" },
    { id: "retail", label: "Retail XAU/USD", sub: "Quote Platform", color: "blue", icon: <Monitor size={14} />, bg: "bg-blue-50 text-blue-600", activeBg: "bg-blue-100 text-blue-700 border-blue-200" }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <div className="flex flex-col items-center">
        {/* Central Gold Node */}
        <div className="relative mb-16 group">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-amber-600 border-4 border-white shadow-2xl flex items-center justify-center z-10 relative">
            <span className="text-2xl font-black text-white italic drop-shadow-md">XAU</span>
          </div>
          <div className="absolute inset-0 rounded-full bg-amber-400 blur-2xl opacity-20 animate-pulse" />
        </div>

        {/* Market Layer Nodes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 w-full">
          {nodes.map((node) => (
            <button 
              key={node.label} 
              onMouseEnter={() => setActivePart(node.id)}
              onMouseLeave={() => setActivePart(null)}
              onFocus={() => setActivePart(node.id)}
              onBlur={() => setActivePart(null)}
              className={cn("p-5 rounded-[2rem] border shadow-sm flex flex-col items-center text-center transition-all duration-300 w-full outline-none", isActive(node.id) ? "bg-slate-50 border-slate-300 scale-105 shadow-md" : "bg-white border-slate-100 hover:border-amber-200 hover:shadow-md", activePart && !isActive(node.id) ? "opacity-60" : "opacity-100")}
            >
              <div className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center mb-4 shadow-sm border transition-colors",
                isActive(node.id) ? node.activeBg : cn("border-transparent", node.bg)
              )}>
                {node.icon}
              </div>
              <p className={cn("text-[10px] font-black uppercase tracking-widest mb-1 leading-tight transition-colors", isActive(node.id) ? "text-slate-900" : "text-slate-900")}>{node.label}</p>
              <p className={cn("text-[9px] font-bold uppercase tracking-tighter transition-colors", isActive(node.id) ? "text-slate-500" : "text-slate-400")}>{node.sub}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * 0.2 - Gold OTC Bilateral Visual
 */
export const GoldOTCBilateralVisual = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <div className="flex flex-col gap-8">
        {/* OTC Flow */}
        <div className="bg-slate-50 rounded-[3rem] p-10 border border-slate-100 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-[0.03] text-slate-900">
            <Globe size={300} />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Participant A */}
            <button 
              onMouseEnter={() => setActivePart('bank')}
              onMouseLeave={() => setActivePart(null)}
              onFocus={() => setActivePart('bank')}
              onBlur={() => setActivePart(null)}
              className={cn("flex flex-col items-center text-center outline-none transition-all duration-300", activePart && !isActive('bank') ? "opacity-60" : "opacity-100", isActive('bank') ? "scale-110" : "")}
            >
              <div className={cn("w-16 h-16 rounded-2xl border flex items-center justify-center shadow-sm mb-4 transition-colors", isActive('bank') ? "bg-amber-50 border-amber-200" : "bg-white border-slate-200")}>
                <Globe size={32} className={cn("transition-colors", isActive('bank') ? "text-amber-500" : "text-slate-400")} />
              </div>
              <p className={cn("text-xs font-black uppercase tracking-widest transition-colors", isActive('bank') ? "text-amber-700" : "text-slate-900")}>Bank / Dealer A</p>
            </button>

            {/* Negotiation */}
            <button 
              onMouseEnter={() => setActivePart('neg')}
              onMouseLeave={() => setActivePart(null)}
              onFocus={() => setActivePart('neg')}
              onBlur={() => setActivePart(null)}
              className={cn("flex-1 flex flex-col items-center outline-none transition-all duration-300 w-full", activePart && !isActive('neg') ? "opacity-60" : "opacity-100", isActive('neg') ? "scale-105" : "")}
            >
              <div className="w-full flex items-center gap-2 mb-4">
                <div className={cn("h-[2px] flex-1 bg-gradient-to-r transition-colors", isActive('neg') ? "from-transparent via-amber-300 to-transparent" : "from-transparent via-slate-300 to-transparent")} />
                <ArrowRightLeft className={cn("transition-colors", isActive('neg') ? "text-amber-500" : "text-slate-400")} size={20} />
                <div className={cn("h-[2px] flex-1 bg-gradient-to-r transition-colors", isActive('neg') ? "from-transparent via-amber-300 to-transparent" : "from-transparent via-slate-300 to-transparent")} />
              </div>
              <div className={cn("px-4 py-2 rounded-full border shadow-sm transition-colors", isActive('neg') ? "bg-amber-50 border-amber-200" : "bg-white border-slate-100")}>
                <p className={cn("text-[10px] font-black uppercase tracking-[0.15em] transition-colors", isActive('neg') ? "text-amber-700" : "text-slate-900")}>Bilateral Negotiation</p>
              </div>
              <p className={cn("text-[9px] font-bold uppercase tracking-tighter mt-2 transition-colors", isActive('neg') ? "text-amber-600" : "text-slate-400")}>No Central Exchange Order Book</p>
            </button>

            {/* Participant B */}
            <button 
              onMouseEnter={() => setActivePart('client')}
              onMouseLeave={() => setActivePart(null)}
              onFocus={() => setActivePart('client')}
              onBlur={() => setActivePart(null)}
              className={cn("flex flex-col items-center text-center outline-none transition-all duration-300", activePart && !isActive('client') ? "opacity-60" : "opacity-100", isActive('client') ? "scale-110" : "")}
            >
              <div className={cn("w-16 h-16 rounded-2xl border flex items-center justify-center shadow-sm mb-4 transition-colors", isActive('client') ? "bg-amber-50 border-amber-200" : "bg-white border-slate-200")}>
                <Users size={32} className={cn("transition-colors", isActive('client') ? "text-amber-500" : "text-slate-400")} />
              </div>
              <p className={cn("text-xs font-black uppercase tracking-widest transition-colors", isActive('client') ? "text-amber-700" : "text-slate-900")}>Dealer / Client B</p>
            </button>
          </div>

          {/* Settlement Layer */}
          <div className="mt-12 pt-8 border-t border-slate-200/50 flex flex-col items-center">
            <div className="flex items-center gap-3 mb-6">
              <Lock size={16} className="text-amber-500" />
              <p className="text-[11px] font-black text-slate-900 uppercase tracking-[0.2em]">Loco London Settlement</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <button 
                onMouseEnter={() => setActivePart('alloc')}
                onMouseLeave={() => setActivePart(null)}
                onFocus={() => setActivePart('alloc')}
                onBlur={() => setActivePart(null)}
                className={cn("p-5 rounded-3xl border shadow-sm outline-none text-left transition-all duration-300 w-full", isActive('alloc') ? "bg-slate-100 border-slate-300 scale-105" : "bg-white border-slate-100", activePart && !isActive('alloc') ? "opacity-60" : "opacity-100")}
              >
                <p className={cn("text-[10px] font-black uppercase mb-1 transition-colors", isActive('alloc') ? "text-slate-900" : "text-slate-900")}>Allocated Account</p>
                <p className={cn("text-[9px] font-medium leading-relaxed transition-colors", isActive('alloc') ? "text-slate-600" : "text-slate-500")}>Ownership of specific physical bars in the vault.</p>
              </button>
              <button 
                onMouseEnter={() => setActivePart('unalloc')}
                onMouseLeave={() => setActivePart(null)}
                onFocus={() => setActivePart('unalloc')}
                onBlur={() => setActivePart(null)}
                className={cn("p-5 rounded-3xl border shadow-sm outline-none text-left transition-all duration-300 w-full", isActive('unalloc') ? "bg-slate-100 border-slate-300 scale-105" : "bg-white border-slate-100", activePart && !isActive('unalloc') ? "opacity-60" : "opacity-100")}
              >
                <p className={cn("text-[10px] font-black uppercase mb-1 transition-colors", isActive('unalloc') ? "text-slate-900" : "text-slate-900")}>Unallocated Account</p>
                <p className={cn("text-[9px] font-medium leading-relaxed transition-colors", isActive('unalloc') ? "text-slate-600" : "text-slate-500")}>General entitlement to metal; used for most settlement.</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 0.2 - Gold Futures Mechanics Visual
 */
export const GoldFuturesMechanicsVisual = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <div className="flex flex-col gap-6">
        {/* Futures Ticker */}
        <button 
          onMouseEnter={() => setActivePart('ticker')}
          onMouseLeave={() => setActivePart(null)}
          onFocus={() => setActivePart('ticker')}
          onBlur={() => setActivePart(null)}
          className={cn("p-6 rounded-[2rem] text-white border flex flex-col sm:flex-row items-center justify-between shadow-xl relative overflow-hidden outline-none transition-all duration-300 w-full text-left gap-4", isActive('ticker') ? "bg-slate-800 border-white/20 scale-[1.02]" : "bg-slate-900 border-white/10", activePart && !isActive('ticker') ? "opacity-60" : "opacity-100")}
        >
          <div className="absolute top-0 right-0 p-6 opacity-[0.05] text-white">
            <Layers size={100} />
          </div>

          <div className="flex items-center gap-4 relative z-10 w-full">
            <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center transition-colors shadow-lg", isActive('ticker') ? "bg-amber-400 shadow-amber-400/30 text-slate-900" : "bg-amber-500 shadow-amber-500/20 text-slate-900")}>
              <span className="font-black italic text-lg">GC</span>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50">COMEX Benchmark</p>
              <p className="text-lg font-black tracking-tight">Gold Futures Contract</p>
            </div>
          </div>

          <div className="flex gap-4 relative z-10 shrink-0">
            <div className={cn("px-4 py-2 rounded-xl text-white text-[9px] font-black uppercase tracking-widest border text-center transition-colors", isActive('ticker') ? "bg-white/20 border-white/30" : "bg-white/10 border-white/10")}>
              Standardized
            </div>
            <div className={cn("px-4 py-2 rounded-xl text-white text-[9px] font-black uppercase tracking-widest border text-center transition-colors", isActive('ticker') ? "bg-white/20 border-white/30" : "bg-white/10 border-white/10")}>
              Physical Link
            </div>
          </div>
        </button>

        {/* Mechanism Chain */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {[
            { id: "part", label: "Participants", sub: "Hedgers / Traders", icon: <Users size={16} /> },
            { id: "match", label: "Order Matching", sub: "Exchange Engine", icon: <ArrowRightLeft size={16} /> },
            { id: "clear", label: "Central Clearing", sub: "Risk Management", icon: <ShieldCheck size={16} /> },
            { id: "disc", label: "Price Discovery", sub: "Benchmark Feed", icon: <Eye size={16} /> }
          ].map((step, i) => (
            <button 
              key={i} 
              onMouseEnter={() => setActivePart(step.id)}
              onMouseLeave={() => setActivePart(null)}
              onFocus={() => setActivePart(step.id)}
              onBlur={() => setActivePart(null)}
              className={cn("p-6 rounded-[2rem] border shadow-sm flex flex-col items-center text-center transition-all duration-300 outline-none w-full relative z-10", isActive(step.id) ? "bg-slate-50 border-slate-300 scale-105 shadow-md" : "bg-white border-slate-100", activePart && !isActive(step.id) ? "opacity-60" : "opacity-100")}
            >
              <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors", isActive(step.id) ? "bg-slate-200 text-slate-700" : "bg-slate-50 text-slate-400")}>
                {step.icon}
              </div>
              <p className={cn("text-[10px] font-black uppercase tracking-widest mb-1 transition-colors", isActive(step.id) ? "text-slate-900" : "text-slate-900")}>{step.label}</p>
              <p className={cn("text-[9px] font-bold uppercase tracking-tighter leading-tight transition-colors", isActive(step.id) ? "text-slate-600" : "text-slate-400")}>{step.sub}</p>
            </button>
          ))}
          {/* Connecting Arrows (desktop) */}
          <div className="hidden md:block absolute top-1/2 left-[23%] w-[4%] h-[2px] bg-slate-100 z-0" />
          <div className="hidden md:block absolute top-1/2 left-[48%] w-[4%] h-[2px] bg-slate-100 z-0" />
          <div className="hidden md:block absolute top-1/2 left-[73%] w-[4%] h-[2px] bg-slate-100 z-0" />
        </div>
      </div>
    </div>
  );
};

/**
 * 0.2 - Gold Market Layer Drill Visual
 */
export const GoldMarketLayerDrillVisual = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <div className="bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-xl">
        <div className="flex flex-col gap-8">
          {/* Situation Header */}
          <div className="flex items-center justify-between border-b border-slate-50 pb-6 flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-lg shadow-amber-500/20">
                <TrendingUp size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Active Scenario</p>
                <p className="text-lg font-black tracking-tight leading-tight">Gold Sharp Move (Session Window)</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest">
              <Activity size={14} className="animate-pulse" />
              Live Evidence
            </div>
          </div>

          {/* Layer Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {[
              { id: "l1", label: "London OTC", sub: "Spot Flow Check", status: "Incomplete" },
              { id: "l2", label: "COMEX Futures", sub: "Volume & Depth", status: "Incomplete" },
              { id: "l3", label: "Benchmark", sub: "Auction Timing", status: "Incomplete" },
              { id: "l4", label: "Retail Quote", sub: "Spread Check", status: "Incomplete" },
              { id: "l5", label: "USD / Rates", sub: "Macro Context", status: "Incomplete" }
            ].map((layer, i) => (
              <button 
                key={i} 
                onMouseEnter={() => setActivePart(layer.id)}
                onMouseLeave={() => setActivePart(null)}
                onFocus={() => setActivePart(layer.id)}
                onBlur={() => setActivePart(null)}
                className={cn("p-5 rounded-3xl border flex flex-col items-center text-center transition-all duration-300 outline-none w-full", isActive(layer.id) ? "bg-white border-amber-200 scale-105 shadow-md" : "bg-slate-50/50 border-slate-100", activePart && !isActive(layer.id) ? "opacity-60" : "opacity-100")}
              >
                <p className={cn("text-[9px] font-black uppercase tracking-widest mb-1 transition-colors", isActive(layer.id) ? "text-amber-900" : "text-slate-900")}>{layer.label}</p>
                <p className={cn("text-[8px] font-bold uppercase tracking-tighter mb-4 transition-colors", isActive(layer.id) ? "text-slate-500" : "text-slate-400")}>{layer.sub}</p>
                <div className={cn("mt-auto px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest transition-colors", isActive(layer.id) ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-400")}>
                  {layer.status}
                </div>
              </button>
            ))}
          </div>

          {/* Decision Question */}
          <button 
            onMouseEnter={() => setActivePart('decision')}
            onMouseLeave={() => setActivePart(null)}
            onFocus={() => setActivePart('decision')}
            onBlur={() => setActivePart(null)}
            className={cn("rounded-3xl p-6 text-white text-center flex flex-col items-center outline-none transition-all duration-300 w-full", isActive('decision') ? "bg-slate-800 scale-[1.02] shadow-xl shadow-slate-800/20" : "bg-slate-900", activePart && !isActive('decision') ? "opacity-60" : "opacity-100")}
          >
            <div className={cn("w-10 h-10 rounded-full flex items-center justify-center mb-4 transition-colors", isActive('decision') ? "bg-white/20" : "bg-white/10")}>
              <Brain size={20} className={cn("transition-colors", isActive('decision') ? "text-amber-300" : "text-amber-400")} />
            </div>
            <p className={cn("text-xs font-black uppercase tracking-widest mb-2 transition-colors", isActive('decision') ? "text-white" : "text-white")}>Disciplined Reading</p>
            <p className={cn("text-[11px] font-medium leading-relaxed max-w-xl transition-colors", isActive('decision') ? "text-white/90" : "text-white/70")}>
              Should the learner treat this fast XAU/USD candle as complete evidence without verifying the market layer underneath?
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};
