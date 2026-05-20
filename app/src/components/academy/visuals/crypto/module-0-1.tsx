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
 * Institutional Frame Component for Module 0.1
 */
const InstitutionalFrame = ({ 
  children, 
  label, 
  status = "AUDIT STANDBY",
  id = "LN-0.1-AUD-CRYPTO"
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
 * 0.1 - Crypto Mechanics Map
 */
export const CryptoMechanicsMap = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <InstitutionalFrame label="Crypto Mechanics: Centralized vs Decentralized Exchange" id="LN-0.1-AUD-CRYPTO-MECHANICS">
      <div className="w-full max-w-4xl mx-auto py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Centralized */}
          <button 
            onMouseEnter={() => setActivePart('cex')}
            onMouseLeave={() => setActivePart(null)}
            onFocus={() => setActivePart('cex')}
            onBlur={() => setActivePart(null)}
            className={cn(
              "p-8 rounded-[3rem] border relative overflow-hidden group text-left transition-all duration-300 outline-none w-full", 
              isActive('cex') 
                ? "bg-slate-100 border-slate-350 scale-[1.02] shadow-sm" 
                : "bg-slate-50 border-slate-100", 
              activePart && !isActive('cex') ? "text-slate-400 border-slate-100" : ""
            )}
          >
            <div className="absolute top-0 right-0 p-8 text-slate-200 group-hover:scale-110 transition-transform pointer-events-none">
              <Cpu size={140} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm">
                  <Cpu size={20} />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] font-black uppercase tracking-widest text-blue-600">Centralized</p>
                  <h3 className="text-sm font-black text-slate-905 uppercase">CEX Order Book</h3>
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

          {/* Decentralized */}
          <button 
            onMouseEnter={() => setActivePart('dex')}
            onMouseLeave={() => setActivePart(null)}
            onFocus={() => setActivePart('dex')}
            onBlur={() => setActivePart(null)}
            className={cn(
              "p-8 rounded-[3rem] border relative overflow-hidden group text-left transition-all duration-300 outline-none w-full", 
              isActive('dex') 
                ? "bg-[#E6F4F1] border-[#5EEAD4] scale-[1.02] shadow-sm" 
                : "bg-[#F4FDFB] border-[#CCFBF1]", 
              activePart && !isActive('dex') ? "text-slate-400 border-slate-100" : ""
            )}
          >
            <div className="absolute top-0 right-0 p-8 text-[#E2F1EE] group-hover:scale-110 transition-transform pointer-events-none">
              <RefreshCcw size={140} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-sm">
                  <RefreshCcw size={20} />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#0D9488]">Decentralized</p>
                  <h3 className="text-sm font-black text-slate-905 uppercase">DEX Liquidity Pool</h3>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Automated Market Maker", status: "On-Chain" },
                  { label: "Token Swaps (A vs B)", status: "Direct" },
                  { label: "Non-Custodial", status: "Wallet-Link" }
                ].map((step, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-2xl bg-white border border-[#CCFBF1] shadow-sm">
                    <span className="text-[10px] font-bold text-slate-700 uppercase tracking-tight">{step.label}</span>
                    <span className="text-[8px] font-black bg-[#CCFBF1] text-teal-800 px-2 py-0.5 rounded-md uppercase">{step.status}</span>
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
 * 0.1 - Hype Trap Path
 */
export const HypeTrapPath = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <InstitutionalFrame label="Crypto Decision: Hype Trap vs Structured Reading" id="LN-0.1-AUD-HYPE-TRAP">
      <div className="w-full max-w-4xl mx-auto py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button 
            onMouseEnter={() => setActivePart('trap')}
            onMouseLeave={() => setActivePart(null)}
            onFocus={() => setActivePart('trap')}
            onBlur={() => setActivePart(null)}
            className={cn(
              "p-8 rounded-[3rem] border flex flex-col transition-all duration-300 text-left w-full", 
              isActive('trap') 
                ? "bg-[#FFF1F2] border-[#FDA4AF] shadow-sm scale-[1.02]" 
                : "bg-[#FFF8F8] border-[#FEE2E2]", 
              activePart && !isActive('trap') ? "text-slate-450 border-rose-100 scale-[0.98]" : ""
            )}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-2xl bg-rose-500 text-white flex items-center justify-center shadow-sm">
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
                <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-[#FEE2E2] shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  <span className="text-[10px] font-bold text-slate-700 uppercase tracking-tight">{step}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-[#FEE2E2] text-center">
              <p className="text-[10px] font-black text-rose-600 uppercase tracking-widest italic">Result: Exit Liquidity</p>
            </div>
          </button>

          <button 
            onMouseEnter={() => setActivePart('structured')}
            onMouseLeave={() => setActivePart(null)}
            onFocus={() => setActivePart('structured')}
            onBlur={() => setActivePart(null)}
            className={cn(
              "p-8 rounded-[3rem] border flex flex-col transition-all duration-300 text-left w-full", 
              isActive('structured') 
                ? "bg-[#ECFDF5] border-[#6EE7B7] shadow-sm scale-[1.02]" 
                : "bg-[#F4FDF9] border-[#D1FAE5]", 
              activePart && !isActive('structured') ? "text-slate-450 border-emerald-100 scale-[0.98]" : ""
            )}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-sm">
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
                <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-[#D1FAE5] shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="text-[10px] font-bold text-slate-700 uppercase tracking-tight">{step}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-[#D1FAE5] text-center">
              <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest italic">Result: Evidence-Based Trade</p>
            </div>
          </button>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 0.1 - Crypto Drill Board
 */
export const CryptoDrillBoard = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <InstitutionalFrame label="Market Condition Audit: Active Crypto Environment" id="LN-0.1-AUD-CRYPTO-DRILL">
      <div className="w-full max-w-2xl mx-auto py-2">
        <div className="p-8 rounded-[2.5rem] bg-white border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-sm">
                 <Search size={20} />
               </div>
               <div>
                 <p className="text-[10px] font-black text-amber-700 uppercase tracking-widest">Market Condition Audit</p>
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
                   isActive(item.id) ? "bg-slate-50 border-slate-350 scale-[1.02] shadow-sm" : "bg-white border-slate-100",
                   activePart && !isActive(item.id) ? "text-slate-400 border-slate-50" : ""
                 )}
               >
                 <div className={cn("w-8 h-8 rounded-xl flex items-center justify-center transition-colors shadow-sm bg-slate-50")}>
                   {React.cloneElement(item.icon as React.ReactElement<any>, { className: isActive(item.id) ? `text-${item.color}-600` : 'text-slate-400' })}
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
    </InstitutionalFrame>
  );
};

/**
 * 0.1 - Crypto Hype Filtering Drill
 */
export const CryptoHypeFilteringDrill = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <InstitutionalFrame label="Hype Filtering Decision Protocol" id="LN-0.1-AUD-HYPE-FILTER">
      <div className="w-full max-w-2xl mx-auto py-2">
        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="relative space-y-8">
            {/* Header Section */}
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="text-[10px] font-black text-amber-650 uppercase tracking-widest flex items-center gap-2">
                  <AlertCircle size={12} className="text-amber-500" />
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
                { id: "btc", label: "BTC Sharp Move", icon: TrendingUp, color: "text-orange-600", bg: "bg-orange-50", activeBg: "bg-orange-100 border-orange-200 shadow-sm scale-[1.02]" },
                { id: "funding", label: "Funding High", icon: Activity, color: "text-rose-600", bg: "bg-rose-50", activeBg: "bg-rose-100 border-rose-200 shadow-sm scale-[1.02]" },
                { id: "social", label: "Social Hype", icon: MessageSquare, color: "text-blue-600", bg: "bg-blue-50", activeBg: "bg-blue-100 border-blue-200 shadow-sm scale-[1.02]" }
              ].map((item, i) => (
                <button 
                  key={i} 
                  onMouseEnter={() => setActivePart(item.id)}
                  onMouseLeave={() => setActivePart(null)}
                  onFocus={() => setActivePart(item.id)}
                  onBlur={() => setActivePart(null)}
                  className={cn(
                    "p-4 rounded-2xl border flex items-center justify-center gap-3 transition-all duration-300 outline-none w-full", 
                    isActive(item.id) ? item.activeBg : cn("border-transparent", item.bg), 
                    activePart && !isActive(item.id) ? "text-slate-400 border-slate-50" : ""
                  )}
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
                className={cn(
                  "relative px-6 py-2 rounded-full text-white text-[9px] font-black uppercase tracking-[0.2em] shadow-sm transition-all outline-none bg-slate-900", 
                  isActive('decision') ? "bg-amber-600 scale-110" : "", 
                  activePart && !isActive('decision') ? "text-slate-400" : ""
                )}
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
                className={cn(
                  "p-5 rounded-[2rem] border space-y-3 relative text-left transition-all duration-300 outline-none w-full", 
                  isActive('weak') ? "bg-[#FFF5F5] border-rose-300 shadow-sm scale-[1.02]" : "border-rose-100 bg-[#FFF8F8]", 
                  activePart && !isActive('weak') ? "text-slate-450 border-rose-50" : ""
                )}
              >
                <div className="flex items-center gap-2">
                  <XCircle className={cn("transition-colors", isActive('weak') ? "text-rose-500" : "text-rose-450")} size={16} />
                  <span className={cn("text-[10px] font-black uppercase tracking-widest transition-colors", isActive('weak') ? "text-rose-600" : "text-rose-500")}>Weak Response</span>
                </div>
                <p className="text-[11px] font-bold text-slate-650 leading-snug uppercase tracking-tight">
                  Treating hype/funding as a <span className={cn("transition-colors font-extrabold", isActive('weak') ? "text-rose-800 bg-rose-100 px-1 rounded" : "text-rose-700")}>Direct Instruction</span>.
                </p>
              </button>

              <button 
                onMouseEnter={() => setActivePart('disciplined')}
                onMouseLeave={() => setActivePart(null)}
                onFocus={() => setActivePart('disciplined')}
                onBlur={() => setActivePart(null)}
                className={cn(
                  "p-5 rounded-[2rem] border space-y-3 relative text-left transition-all duration-300 outline-none w-full", 
                  isActive('disciplined') ? "bg-[#F0FDF4] border-emerald-300 shadow-sm scale-[1.02]" : "border-emerald-100 bg-[#F4FDF9]", 
                  activePart && !isActive('disciplined') ? "text-slate-450 border-emerald-50" : ""
                )}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className={cn("transition-colors", isActive('disciplined') ? "text-emerald-500" : "text-emerald-450")} size={16} />
                  <span className={cn("text-[10px] font-black uppercase tracking-widest transition-colors", isActive('disciplined') ? "text-emerald-600" : "text-emerald-500")}>Disciplined Response</span>
                </div>
                <p className="text-[11px] font-bold text-slate-650 leading-snug uppercase tracking-tight">
                  Treating hype/funding as <span className={cn("transition-colors font-extrabold", isActive('disciplined') ? "text-emerald-800 bg-emerald-100 px-1 rounded" : "text-emerald-700")}>Supporting Context</span>.
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </InstitutionalFrame>
  );
};
