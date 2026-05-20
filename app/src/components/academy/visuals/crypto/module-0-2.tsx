"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Database,
  Globe,
  Activity,
  RefreshCcw,
  Layers,
  Cpu,
  Coins,
  TrendingUp,
  AlertTriangle,
  Brain,
  ShieldAlert
} from "lucide-react";

/**
 * Institutional Frame Component for Module 0.2 (Crypto)
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
 * 0.2 - Crypto Venue Map Visual
 */
export const CryptoVenueMapVisual = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  const venues = [
    { id: "cex-spot", label: "CEX Spot", sub: "BTC/USDT", liquidity: "High", spread: "0.01%", icon: <Globe size={14} />, color: "blue", bg: "bg-blue-50 text-blue-600", activeBg: "bg-blue-100 text-blue-700 border-blue-200" },
    { id: "cex-perp", label: "CEX Perpetual", sub: "BTC-PERP", liquidity: "Massive", spread: "0.02%", icon: <Activity size={14} />, color: "indigo", bg: "bg-indigo-50 text-indigo-600", activeBg: "bg-indigo-100 text-indigo-700 border-indigo-200" },
    { id: "dex", label: "DEX Pool", sub: "WBTC/USDC", liquidity: "Variable", spread: "0.15%+", icon: <RefreshCcw size={14} />, color: "teal", bg: "bg-teal-50 text-teal-600", activeBg: "bg-teal-100 text-teal-700 border-teal-200" },
    { id: "feed", label: "Aggregated Feed", sub: "Market Index", liquidity: "Synthetic", spread: "Average", icon: <Layers size={14} />, color: "amber", bg: "bg-amber-50 text-amber-600", activeBg: "bg-amber-100 text-amber-700 border-amber-200" }
  ];

  return (
    <InstitutionalFrame label="Crypto Venue Map" id="LN-0.2-CRYPTO-MAP" status="VENUE SCAN">
      <div className="w-full max-w-4xl mx-auto py-8">
        
      <div className="flex flex-col items-center">
        {/* Central Asset */}
        <div className="relative mb-12 group">
          <div className="w-20 h-20 rounded-full bg-slate-900 border-4 border-white shadow-xl flex items-center justify-center z-10 relative">
            <span className="text-xl font-black text-white italic">BTC</span>
          </div>
          {/* Animated rings */}
          <div className="absolute inset-0 rounded-full border border-slate-200 animate-ping " />
        </div>

        {/* Fragmented Venues */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {venues.map((venue) => (
            <button 
              key={venue.label} 
              onMouseEnter={() => setActivePart(venue.id)}
              onMouseLeave={() => setActivePart(null)}
              onFocus={() => setActivePart(venue.id)}
              onBlur={() => setActivePart(null)}
              className={cn("p-5 rounded-[2rem] border shadow-sm flex flex-col items-center text-center transition-all duration-300 w-full outline-none", isActive(venue.id) ? "bg-slate-50 border-slate-300 scale-105 shadow-md" : "bg-white border-slate-100", activePart && !isActive(venue.id) ? "" : "")}
            >
              <div className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center mb-4 shadow-sm border transition-colors",
                isActive(venue.id) ? venue.activeBg : cn("border-transparent", venue.bg)
              )}>
                {venue.icon}
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-900 mb-1">{venue.label}</p>
              <p className="text-[9px] font-bold text-slate-400 uppercase mb-3 tracking-tighter">{venue.sub}</p>

              <div className="w-full space-y-1.5 pt-3 border-t border-slate-50">
                <div className="flex justify-between items-center">
                  <span className="text-[8px] font-bold text-slate-400 uppercase">Liquidity</span>
                  <span className={cn("text-[8px] font-black uppercase transition-colors", isActive(venue.id) ? "text-slate-900" : "text-slate-700")}>{venue.liquidity}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[8px] font-bold text-slate-400 uppercase">Spread</span>
                  <span className={cn("text-[8px] font-black uppercase transition-colors", isActive(venue.id) ? "text-slate-900" : "text-slate-700")}>{venue.spread}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 0.2 - Crypto Market Engines Visual
 */
export const CryptoMarketEnginesVisual = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <InstitutionalFrame label="Crypto Market Engines" id="LN-0.2-CRYPTO-ENGINES" status="ENGINE AUDIT">
      <div className="w-full max-w-4xl mx-auto py-8">
        
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: CEX Order Book */}
        <button 
          onMouseEnter={() => setActivePart('cex')}
          onMouseLeave={() => setActivePart(null)}
          onFocus={() => setActivePart('cex')}
          onBlur={() => setActivePart(null)}
          className={cn("p-8 rounded-[2.5rem] border relative overflow-hidden group text-left transition-all duration-300 outline-none w-full", isActive('cex') ? "bg-[#F1F5F9] border-slate-300 scale-[1.02] shadow-md" : "bg-slate-50 border-slate-100", activePart && !isActive('cex') ? " scale-[0.98]" : "")}
        >
          <div className="absolute top-0 right-0 p-8  text-slate-900 group-hover:scale-110 transition-transform">
            <Cpu size={140} />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className={cn("w-10 h-10 rounded-xl text-white flex items-center justify-center transition-colors", isActive('cex') ? "bg-blue-700 shadow-xl shadow-blue-700/30" : "bg-blue-600 shadow-lg shadow-blue-600/20")}>
                <Cpu size={18} />
              </div>
              <div>
                <p className={cn("text-xs font-black uppercase tracking-widest leading-tight transition-colors", isActive('cex') ? "text-slate-900" : "text-slate-800")}>CEX Order Book</p>
                <p className="text-[9px] font-bold text-blue-600 uppercase tracking-tighter mt-0.5">Centralized Engine</p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { label: "Buy / Sell Orders", status: "Active" },
                { label: "Matching Engine", status: "Matching" },
                { label: "Transaction Record", status: "Instant" },
                { label: "Chart Update", status: "Pushed" }
              ].map((step, i) => (
                <div key={i} className={cn("flex items-center gap-3 p-3 rounded-2xl border shadow-sm transition-colors", isActive('cex') ? "bg-[#EFF6FF] border-blue-100" : "bg-white border-slate-100")}>
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className={cn("text-[10px] font-bold uppercase tracking-tight transition-colors", isActive('cex') ? "text-slate-900" : "text-slate-700")}>{step.label}</span>
                  <div className={cn("ml-auto px-2 py-0.5 rounded-md text-[8px] font-black uppercase transition-colors", isActive('cex') ? "bg-blue-100 text-blue-700" : "bg-blue-50 text-blue-600")}>{step.status}</div>
                </div>
              ))}
            </div>
          </div>
        </button>

        {/* Right: DEX Liquidity Pool */}
        <button 
          onMouseEnter={() => setActivePart('dex')}
          onMouseLeave={() => setActivePart(null)}
          onFocus={() => setActivePart('dex')}
          onBlur={() => setActivePart(null)}
          className={cn("p-8 rounded-[2.5rem] border relative overflow-hidden group text-left transition-all duration-300 outline-none w-full", isActive('dex') ? "bg-[#E6FFFA] border-teal-300 scale-[1.02] shadow-md" : "bg-[#F2FDFB] border-teal-100", activePart && !isActive('dex') ? " scale-[0.98]" : "")}
        >
          <div className="absolute top-0 right-0 p-8  text-teal-900 group-hover:scale-110 transition-transform">
            <RefreshCcw size={140} />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className={cn("w-10 h-10 rounded-xl text-white flex items-center justify-center transition-colors", isActive('dex') ? "bg-teal-700 shadow-xl shadow-teal-700/30" : "bg-teal-600 shadow-lg shadow-teal-600/20")}>
                <RefreshCcw size={18} />
              </div>
              <div>
                <p className={cn("text-xs font-black uppercase tracking-widest leading-tight transition-colors", isActive('dex') ? "text-slate-900" : "text-slate-800")}>DEX Liquidity Pool</p>
                <p className="text-[9px] font-bold text-teal-600 uppercase tracking-tighter mt-0.5">AMM Mechanism</p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { label: "Token Reserves (A/B)", status: "Balanced" },
                { label: "Swap Interface", status: "User-Side" },
                { label: "Pool Ratio Change", status: "Dynamic" },
                { label: "Price Impact / Slippage", status: "Variable" }
              ].map((step, i) => (
                <div key={i} className={cn("flex items-center gap-3 p-3 rounded-2xl border shadow-sm transition-colors", isActive('dex') ? "bg-[#E6FFFA] border-teal-100" : "bg-white border-teal-100")}>
                  <div className="w-2 h-2 rounded-full bg-teal-500" />
                  <span className={cn("text-[10px] font-bold uppercase tracking-tight transition-colors", isActive('dex') ? "text-slate-900" : "text-slate-700")}>{step.label}</span>
                  <div className={cn("ml-auto px-2 py-0.5 rounded-md text-[8px] font-black uppercase transition-colors", isActive('dex') ? "bg-teal-100 text-teal-700" : "bg-teal-50 text-teal-600")}>{step.status}</div>
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
 * 0.2 - Crypto Liquidity Fragmentation Visual
 */
export const CryptoLiquidityFragmentationVisual = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  const venues = [
    { id: "cex-a", label: "CEX A (Tier 1)", sub: "Deep Liquidity", move: "0.05%", bar: "w-full", color: "blue", impact: "Minimal" },
    { id: "cex-b", label: "CEX B (Tier 2)", sub: "Medium Liquidity", move: "0.45%", bar: "w-3/4", color: "indigo", impact: "Moderate" },
    { id: "dex", label: "DEX Pool", sub: "Thin Liquidity", move: "2.10%", bar: "w-1/4", color: "teal", impact: "Extreme" }
  ];

  return (
    <InstitutionalFrame label="Crypto Liquidity Fragmentation" id="LN-0.2-CRYPTO-FRAG" status="FRAGMENTATION SCAN">
      <div className="w-full max-w-4xl mx-auto py-8">
        
      <div className="flex flex-col gap-6">
        {/* Order Input */}
        <div className="p-6 rounded-[2rem] bg-slate-900 text-white border border-slate-800 flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#1E293B] flex items-center justify-center">
              <Coins size={24} className="text-amber-400" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] ">Buy Order Action</p>
              <p className="text-lg font-black tracking-tight">$10,000 Spot Buy</p>
            </div>
          </div>
          <div className="px-4 py-2 rounded-xl bg-[#D1FAE5] text-emerald-400 text-[10px] font-black uppercase tracking-widest border border-[#A7F3D0]">
            Market Impact Test
          </div>
        </div>

        {/* Fragmentation Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {venues.map((venue) => (
            <button 
              key={venue.label} 
              onMouseEnter={() => setActivePart(venue.id)}
              onMouseLeave={() => setActivePart(null)}
              onFocus={() => setActivePart(venue.id)}
              onBlur={() => setActivePart(null)}
              className={cn("p-6 rounded-[2rem] border bg-white shadow-sm transition-all duration-300 outline-none text-left w-full", isActive(venue.id) ? "border-slate-300 scale-105 shadow-md bg-slate-50" : "border-slate-100", activePart && !isActive(venue.id) ? "" : "")}
            >
              <p className={cn("text-[10px] font-black uppercase tracking-widest mb-1 transition-colors", isActive(venue.id) ? "text-slate-900" : "text-slate-800")}>{venue.label}</p>
              <p className={cn("text-[9px] font-bold uppercase tracking-tighter mb-6 transition-colors", isActive(venue.id) ? "text-slate-500" : "text-slate-400")}>{venue.sub}</p>

              <div className="space-y-4">
                <div className="flex justify-between items-end mb-1">
                  <p className="text-[9px] font-bold text-slate-400 uppercase">Available Depth</p>
                  <p className={cn("text-[10px] font-black uppercase transition-colors", isActive(venue.id) ? "text-slate-900" : "text-slate-700")}>{venue.impact}</p>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className={cn("h-full rounded-full transition-all duration-500", venue.bar,
                    venue.color === "blue" ? "bg-blue-500" : venue.color === "indigo" ? "bg-indigo-500" : "bg-teal-500"
                  )} />
                </div>

                <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                  <p className="text-[10px] font-bold text-slate-700 uppercase">Price Impact</p>
                  <p className={cn("text-sm font-black transition-colors", isActive(venue.id) ? "text-slate-900" : "text-slate-800")}>+{venue.move}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 0.2 - Crypto Venue Noise Drill Visual
 */
export const CryptoVenueNoiseDrillVisual = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <InstitutionalFrame label="Venue Noise Drill" id="LN-0.2-CRYPTO-DRILL" status="DRILL ACTIVE">
      <div className="w-full max-w-3xl mx-auto py-8">
        
      <div className="bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Situation Analysis */}
          <div className="md:col-span-8 grid grid-cols-2 gap-4">
            <button 
              onMouseEnter={() => setActivePart('cexa')}
              onMouseLeave={() => setActivePart(null)}
              onFocus={() => setActivePart('cexa')}
              onBlur={() => setActivePart(null)}
              className={cn("p-5 rounded-3xl border text-center transition-all duration-300 outline-none w-full", isActive('cexa') ? "bg-[#D1FAE5] border-emerald-300 scale-105 shadow-md" : "bg-emerald-50 border-emerald-100", activePart && !isActive('cexa') ? "" : "")}
            >
              <div className={cn("w-10 h-10 rounded-xl text-white flex items-center justify-center mx-auto mb-3 transition-colors", isActive('cexa') ? "bg-emerald-600 shadow-xl shadow-emerald-600/30" : "bg-emerald-500 shadow-lg shadow-emerald-500/20")}>
                <TrendingUp size={18} />
              </div>
              <p className={cn("text-[10px] font-black uppercase mb-1 transition-colors", isActive('cexa') ? "text-emerald-900" : "text-slate-900")}>CEX A: +9%</p>
              <p className="text-[8px] font-bold text-emerald-600 uppercase tracking-widest italic">Thin Liquidity</p>
            </button>

            <button 
              onMouseEnter={() => setActivePart('cexb')}
              onMouseLeave={() => setActivePart(null)}
              onFocus={() => setActivePart('cexb')}
              onBlur={() => setActivePart(null)}
              className={cn("p-5 rounded-3xl border text-center transition-all duration-300 outline-none w-full", isActive('cexb') ? "bg-slate-100 border-slate-300 scale-105 shadow-md" : "bg-slate-50 border-slate-100", activePart && !isActive('cexb') ? "" : "")}
            >
              <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 transition-colors", isActive('cexb') ? "bg-slate-300 text-slate-700" : "bg-slate-200 text-slate-500")}>
                <Activity size={18} />
              </div>
              <p className={cn("text-[10px] font-black uppercase mb-1 transition-colors", isActive('cexb') ? "text-slate-900" : "text-slate-900")}>CEX B: +2%</p>
              <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest italic">Normal Volume</p>
            </button>

            <button 
              onMouseEnter={() => setActivePart('dex')}
              onMouseLeave={() => setActivePart(null)}
              onFocus={() => setActivePart('dex')}
              onBlur={() => setActivePart(null)}
              className={cn("p-5 rounded-3xl border text-center transition-all duration-300 outline-none w-full", isActive('dex') ? "bg-[#FEF3C7] border-amber-300 scale-105 shadow-md" : "bg-[#FFFBEB] border-amber-100", activePart && !isActive('dex') ? "" : "")}
            >
              <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 transition-colors", isActive('dex') ? "bg-amber-200 text-amber-700" : "bg-[#FEF3C7] text-amber-600")}>
                <ShieldAlert size={18} />
              </div>
              <p className={cn("text-[10px] font-black uppercase mb-1 transition-colors", isActive('dex') ? "text-amber-900" : "text-slate-900")}>DEX: High Slippage</p>
              <p className="text-[8px] font-bold text-amber-600 uppercase tracking-widest italic">Low Pool Depth</p>
            </button>

            <button 
              onMouseEnter={() => setActivePart('index')}
              onMouseLeave={() => setActivePart(null)}
              onFocus={() => setActivePart('index')}
              onBlur={() => setActivePart(null)}
              className={cn("p-5 rounded-3xl border text-center transition-all duration-300 outline-none w-full", isActive('index') ? "bg-[#E0E7FF] border-indigo-300 scale-105 shadow-md" : "bg-[#EEF2FF] border-indigo-100", activePart && !isActive('index') ? "" : "")}
            >
              <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 transition-colors", isActive('index') ? "bg-indigo-200 text-indigo-700" : "bg-[#E0E7FF] text-indigo-600")}>
                <Globe size={18} />
              </div>
              <p className={cn("text-[10px] font-black uppercase mb-1 transition-colors", isActive('index') ? "text-indigo-900" : "text-slate-900")}>Index: Mixed</p>
              <p className="text-[8px] font-bold text-indigo-600 uppercase tracking-widest italic">No Major Conf.</p>
            </button>
          </div>

          {/* Decision */}
          <button 
            onMouseEnter={() => setActivePart('decision')}
            onMouseLeave={() => setActivePart(null)}
            onFocus={() => setActivePart('decision')}
            onBlur={() => setActivePart(null)}
            className={cn("md:col-span-4 flex flex-col items-center gap-4 text-center outline-none transition-all duration-300", activePart && !isActive('decision') ? "" : "", isActive('decision') ? "scale-105" : "")}
          >
            <div className={cn("w-16 h-16 rounded-full border flex items-center justify-center relative transition-colors", isActive('decision') ? "bg-slate-100 border-slate-300 shadow-md" : "bg-slate-50 border-slate-100")}>
              <Brain size={32} className={cn("transition-colors", isActive('decision') ? "text-slate-600" : "text-slate-400")} />
              <div className={cn("absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-black text-white transition-all", isActive('decision') ? "bg-amber-500 shadow-md" : "bg-amber-400")}>?</div>
            </div>
            <div>
              <p className={cn("text-xs font-black uppercase tracking-widest mb-1 transition-colors", isActive('decision') ? "text-slate-900" : "text-slate-900")}>Market Reading</p>
              <p className={cn("text-[10px] font-medium leading-relaxed transition-colors", isActive('decision') ? "text-slate-700" : "text-slate-500")}>Is this a broad market move or venue-specific noise?</p>
            </div>
          </button>
        </div>
      </div>
    
      </div>
    </InstitutionalFrame>
  );
};
