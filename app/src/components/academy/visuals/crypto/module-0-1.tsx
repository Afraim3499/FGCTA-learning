"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Cpu,
  RefreshCcw,
  Layers,
  Search,
  Activity,
  Zap,
  Globe,
  Database,
  Coins,
  TrendingUp,
  AlertCircle,
  MessageSquare,
  Scale,
  XCircle,
  CheckCircle2
} from "lucide-react";

/**
 * 0.1 - Crypto Mechanics Map
 */
export const CryptoMechanicsMap = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <div className="w-full max-w-4xl mx-auto py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Central Engine Comparison */}
        <button 
          onMouseEnter={() => setActivePart('cex')}
          onMouseLeave={() => setActivePart(null)}
          onFocus={() => setActivePart('cex')}
          onBlur={() => setActivePart(null)}
          className={cn("p-8 rounded-[3rem] border relative overflow-hidden group text-left transition-all duration-300 outline-none w-full", isActive('cex') ? "bg-slate-100 border-slate-300 scale-[1.02] shadow-md" : "bg-slate-50 border-slate-100", activePart && !isActive('cex') ? "opacity-60" : "opacity-100")}
        >
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-slate-900 group-hover:scale-110 transition-transform">
            <Cpu size={140} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/20">
                <Cpu size={20} />
              </div>
              <div className="space-y-0.5">
                <p className="text-[10px] font-black uppercase tracking-widest text-blue-600">Centralized</p>
                <h3 className="text-sm font-black text-slate-900 uppercase">CEX Order Book</h3>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: "Exchange Matching Engine", status: "Closed System" },
                { label: "Limit / Market Orders", status: "Direct" },
                { label: "Centralized Custody", status: "Off-Chain" }
              ].map((step, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <span className="text-[10px] font-bold text-slate-700 uppercase tracking-tight">{step.label}</span>
                  <span className="text-[8px] font-black bg-slate-100 text-slate-500 px-2 py-0.5 rounded-md uppercase">{step.status}</span>
                </div>
              ))}
            </div>
          </div>
        </button>

        <button 
          onMouseEnter={() => setActivePart('dex')}
          onMouseLeave={() => setActivePart(null)}
          onFocus={() => setActivePart('dex')}
          onBlur={() => setActivePart(null)}
          className={cn("p-8 rounded-[3rem] border relative overflow-hidden group text-left transition-all duration-300 outline-none w-full", isActive('dex') ? "bg-teal-100/40 border-teal-300 scale-[1.02] shadow-md" : "bg-teal-50/30 border-teal-100", activePart && !isActive('dex') ? "opacity-60" : "opacity-100")}
        >
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-teal-900 group-hover:scale-110 transition-transform">
            <RefreshCcw size={140} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-lg shadow-teal-600/20">
                <RefreshCcw size={20} />
              </div>
              <div className="space-y-0.5">
                <p className="text-[10px] font-black uppercase tracking-widest text-teal-600">Decentralized</p>
                <h3 className="text-sm font-black text-slate-900 uppercase">DEX Liquidity Pool</h3>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: "Automated Market Maker", status: "On-Chain" },
                { label: "Token Swaps (A vs B)", status: "Direct" },
                { label: "Non-Custodial", status: "Wallet-Link" }
              ].map((step, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-2xl bg-white border border-teal-100/50 shadow-sm">
                  <span className="text-[10px] font-bold text-slate-700 uppercase tracking-tight">{step.label}</span>
                  <span className="text-[8px] font-black bg-teal-50 text-teal-600 px-2 py-0.5 rounded-md uppercase">{step.status}</span>
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
 * 0.1 - Hype Trap Path
 */
export const HypeTrapPath = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <div className="w-full max-w-4xl mx-auto py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button 
          onMouseEnter={() => setActivePart('trap')}
          onMouseLeave={() => setActivePart(null)}
          onFocus={() => setActivePart('trap')}
          onBlur={() => setActivePart(null)}
          className={cn("p-8 rounded-[3rem] border flex flex-col transition-all duration-300 text-left w-full", isActive('trap') ? "bg-rose-100/40 border-rose-300 shadow-md scale-[1.02]" : "bg-rose-50/30 border-rose-100", activePart && !isActive('trap') ? "opacity-60 scale-[0.98]" : "opacity-100")}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-2xl bg-rose-500 text-white flex items-center justify-center shadow-lg shadow-rose-500/20">
              <Zap size={20} />
            </div>
            <h3 className="text-sm font-black text-slate-900 uppercase">The Hype Trap</h3>
          </div>
          <div className="space-y-3 flex-1">
            {[
              "Price Spikes suddenly",
              "Social Media Alert fires",
              "Fear of Missing Out (FOMO)",
              "Late Entry at Resistance"
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-rose-100 shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                <span className="text-[10px] font-bold text-slate-700 uppercase tracking-tight">{step}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-rose-100 text-center">
            <p className="text-[10px] font-black text-rose-600 uppercase tracking-widest italic">Result: Exit Liquidity</p>
          </div>
        </button>

        <button 
          onMouseEnter={() => setActivePart('structured')}
          onMouseLeave={() => setActivePart(null)}
          onFocus={() => setActivePart('structured')}
          onBlur={() => setActivePart(null)}
          className={cn("p-8 rounded-[3rem] border flex flex-col transition-all duration-300 text-left w-full", isActive('structured') ? "bg-emerald-100/40 border-emerald-300 shadow-md scale-[1.02]" : "bg-emerald-50/30 border-emerald-100", activePart && !isActive('structured') ? "opacity-60 scale-[0.98]" : "opacity-100")}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Layers size={20} />
            </div>
            <h3 className="text-sm font-black text-slate-900 uppercase">Structured Reading</h3>
          </div>
          <div className="space-y-3 flex-1">
            {[
              "Identify Broad Move",
              "Verify Source Venue",
              "Check On-Chain Support",
              "Wait for Consolidation"
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-emerald-100 shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-bold text-slate-700 uppercase tracking-tight">{step}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-emerald-100 text-center">
            <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest italic">Result: Evidence-Based Trade</p>
          </div>
        </button>
      </div>
    </div>
  );
};

/**
 * 0.1 - Crypto Drill Board
 */
export const CryptoDrillBoard = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <div className="w-full max-w-2xl mx-auto py-2">
      <div className="p-8 rounded-[2.5rem] bg-white border border-slate-200 shadow-xl relative overflow-hidden">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-lg shadow-amber-500/20">
               <Search size={20} />
             </div>
             <div>
               <p className="text-[10px] font-black text-amber-600 uppercase tracking-widest">Market Condition Audit</p>
               <h4 className="text-sm font-black text-slate-900 uppercase">Active Crypto Environment</h4>
             </div>
          </div>
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
            <Activity size={20} className="text-slate-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           {[
             { id: 'move', label: 'BTC Sharp Move', icon: <TrendingUp size={16} />, color: 'blue' },
             { id: 'hype', label: 'Funding High', icon: <Zap size={16} />, color: 'rose' },
             { id: 'social', label: 'Social Hype', icon: <Globe size={16} />, color: 'purple' },
             { id: 'data', label: 'News Event', icon: <Database size={16} />, color: 'amber' }
           ].map((item, i) => (
             <button 
               key={i}
               onMouseEnter={() => setActivePart(item.id)}
               onMouseLeave={() => setActivePart(null)}
               onFocus={() => setActivePart(item.id)}
               onBlur={() => setActivePart(null)}
               className={cn(
                 "p-4 rounded-2xl border flex items-center gap-3 transition-all duration-300 text-left w-full outline-none",
                 isActive(item.id) ? "bg-slate-50 border-slate-300 scale-[1.02] shadow-sm" : "bg-white border-slate-100",
                 activePart && !isActive(item.id) ? "opacity-60" : "opacity-100"
               )}
             >
               <div className={cn("w-8 h-8 rounded-xl flex items-center justify-center transition-colors shadow-sm", isActive(item.id) ? "bg-white" : "bg-slate-50")}>
                 {React.cloneElement(item.icon as React.ReactElement<any>, { className: isActive(item.id) ? `text-${item.color}-500` : 'text-slate-400' })}
               </div>
               <span className="text-[10px] font-black text-slate-900 uppercase leading-none tracking-tight">{item.label}</span>
             </button>
           ))}
        </div>

        <div className="mt-8 p-6 rounded-3xl bg-slate-900 text-white text-center">
           <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 text-amber-400">Decision Gate</p>
           <p className="text-xs font-bold leading-relaxed text-slate-300">Before reacting to the spike, are you treating this noise as a command or supporting context?</p>
        </div>
      </div>
    </div>
  );
};

/**
 * 0.1 - Crypto Hype Filtering Drill
 */
export const CryptoHypeFilteringDrill = () => {
  const [activePart, setActivePart] = useState<string | null>(null);

  const isActive = (part: string) => activePart === part;

  return (
    <div className="w-full max-w-2xl mx-auto py-2">
      <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-xl relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-slate-50 rounded-full -ml-12 -mb-12" />

        <div className="relative space-y-8">
          {/* Header Section */}
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="text-[10px] font-black text-amber-500 uppercase tracking-widest flex items-center gap-2">
                <AlertCircle size={12} />
                Market Condition Audit
              </div>
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">Active Crypto Environment</h4>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <Scale size={20} className="text-slate-400" />
            </div>
          </div>

          {/* Condition Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { id: "btc", label: "BTC Sharp Move", icon: TrendingUp, color: "text-orange-500", bg: "bg-orange-50", activeBg: "bg-orange-100 border-orange-200 shadow-sm scale-[1.02]" },
              { id: "funding", label: "Funding High", icon: Activity, color: "text-rose-500", bg: "bg-rose-50", activeBg: "bg-rose-100 border-rose-200 shadow-sm scale-[1.02]" },
              { id: "social", label: "Social Hype", icon: MessageSquare, color: "text-blue-500", bg: "bg-blue-50", activeBg: "bg-blue-100 border-blue-200 shadow-sm scale-[1.02]" }
            ].map((item, i) => (
              <button 
                key={i} 
                onMouseEnter={() => setActivePart(item.id)}
                onMouseLeave={() => setActivePart(null)}
                onFocus={() => setActivePart(item.id)}
                onBlur={() => setActivePart(null)}
                className={cn("p-4 rounded-2xl border flex items-center justify-center gap-3 transition-all duration-300 outline-none w-full", isActive(item.id) ? item.activeBg : cn("border-transparent", item.bg), activePart && !isActive(item.id) ? "opacity-60" : "opacity-100")}
              >
                <item.icon size={16} className={item.color} />
                <span className="text-[10px] font-black text-slate-900 uppercase leading-none">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Decision Point */}
          <div className="flex flex-col items-center py-2 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-px bg-slate-100" />
            </div>
            <button 
              onMouseEnter={() => setActivePart('decision')}
              onMouseLeave={() => setActivePart(null)}
              onFocus={() => setActivePart('decision')}
              onBlur={() => setActivePart(null)}
              className={cn("relative px-6 py-2 rounded-full text-white text-[9px] font-black uppercase tracking-[0.2em] shadow-lg transition-all outline-none", isActive('decision') ? "bg-amber-500 scale-110 shadow-amber-500/30" : "bg-slate-900", activePart && !isActive('decision') ? "opacity-60" : "opacity-100")}
            >
              Decision Point
            </button>
          </div>

          {/* Path Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button 
              onMouseEnter={() => setActivePart('weak')}
              onMouseLeave={() => setActivePart(null)}
              onFocus={() => setActivePart('weak')}
              onBlur={() => setActivePart(null)}
              className={cn("p-5 rounded-[2rem] border space-y-3 relative text-left transition-all duration-300 outline-none w-full", isActive('weak') ? "bg-rose-50/60 border-rose-300 shadow-md scale-[1.02]" : "border-rose-100 bg-rose-50/30", activePart && !isActive('weak') ? "opacity-60" : "opacity-100")}
            >
              <div className="flex items-center gap-2">
                <XCircle className={cn("transition-colors", isActive('weak') ? "text-rose-500" : "text-rose-400")} size={16} />
                <span className={cn("text-[10px] font-black uppercase tracking-widest transition-colors", isActive('weak') ? "text-rose-600" : "text-rose-500")}>Weak Response</span>
              </div>
              <p className="text-[11px] font-bold text-slate-600 leading-snug uppercase tracking-tight">
                Treating hype/funding as a <span className={cn("transition-colors", isActive('weak') ? "text-rose-700 bg-rose-100 px-1 rounded" : "text-rose-600")}>Direct Instruction</span>.
              </p>
            </button>

            <button 
              onMouseEnter={() => setActivePart('disciplined')}
              onMouseLeave={() => setActivePart(null)}
              onFocus={() => setActivePart('disciplined')}
              onBlur={() => setActivePart(null)}
              className={cn("p-5 rounded-[2rem] border space-y-3 relative text-left transition-all duration-300 outline-none w-full", isActive('disciplined') ? "bg-emerald-50/60 border-emerald-300 shadow-md scale-[1.02]" : "border-emerald-100 bg-emerald-50/30", activePart && !isActive('disciplined') ? "opacity-60" : "opacity-100")}
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className={cn("transition-colors", isActive('disciplined') ? "text-emerald-500" : "text-emerald-400")} size={16} />
                <span className={cn("text-[10px] font-black uppercase tracking-widest transition-colors", isActive('disciplined') ? "text-emerald-600" : "text-emerald-500")}>Disciplined Response</span>
              </div>
              <p className="text-[11px] font-bold text-slate-600 leading-snug uppercase tracking-tight">
                Treating hype/funding as <span className={cn("transition-colors", isActive('disciplined') ? "text-emerald-700 bg-emerald-100 px-1 rounded" : "text-emerald-600")}>Supporting Context</span>.
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
