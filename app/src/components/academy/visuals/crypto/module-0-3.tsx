"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Globe,
  Activity,
  Database,
  Coins,
  CheckCircle2,
  Database as DatabaseIcon,
  Target,
  ShieldAlert,
  Layers,
  Brain
} from "lucide-react";

/**
 * 0.3 - Crypto Candle Source Map
 */
export const CryptoCandleSourceMap = () => {
  const [activePart, setActivePart] = useState<string | null>("agg");

  const sources = [
    { 
      id: "spot", 
      label: "CEX Spot", 
      mechanic: "Asset Ownership", 
      impact: "Strong Support",
      desc: "Based on actual BTC held. High volume here is 'Real Evidence'.",
      color: "bg-blue-500"
    },
    { 
      id: "perp", 
      label: "CEX Perpetual", 
      mechanic: "Leverage Flow", 
      impact: "High Volatility",
      desc: "Based on contracts. High volume here can be speculative pressure.",
      color: "bg-amber-500"
    },
    { 
      id: "dex", 
      label: "DEX (AMM)", 
      mechanic: "Pool Rebalance", 
      impact: "Fragmented",
      desc: "Swap-based price. Can deviate during thin liquidity events.",
      color: "bg-indigo-500"
    },
    { 
      id: "agg", 
      label: "Aggregated Feed", 
      mechanic: "VWAP Pricing", 
      impact: "Smoothed",
      desc: "The standard view. It blends all venues into one record.",
      color: "bg-slate-500"
    }
  ];

  const active = sources.find(s => s.id === activePart) || sources[3];

  return (
    <div className="w-full pt-6 py-4 px-2">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Source Selector */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Select Venue Source</p>
          {sources.map((s) => (
            <button
              key={s.id}
              onClick={() => setActivePart(s.id)}
              className={cn(
                "group p-4 rounded-2xl border text-left transition-all duration-300",
                activePart === s.id 
                  ? "bg-slate-900 border-slate-800 shadow-xl scale-[1.02] text-white" 
                  : "bg-white border-slate-100 text-slate-600 hover:border-slate-300"
              )}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-tight">{s.label}</p>
                  <p className={cn("text-[9px] font-bold uppercase transition-colors", activePart === s.id ? "text-slate-400" : "text-slate-400")}>{s.mechanic}</p>
                </div>
                <div className={cn("w-2 h-2 rounded-full", s.color)} />
              </div>
            </button>
          ))}
        </div>

        {/* Dynamic Candle Record */}
        <div className="lg:col-span-7 bg-slate-100/50 rounded-3xl p-6 border border-slate-200 relative min-h-[320px] flex flex-col items-center justify-center">
          <div className="relative z-10 flex flex-col items-center">
            {/* Candle Rendering based on source */}
            <div className="flex flex-col items-center mb-6">
              <div className={cn("w-0.5 bg-slate-300 transition-all duration-500", activePart === 'perp' || activePart === 'dex' ? "h-32" : "h-16")} />
              <div className={cn("w-10 h-16 rounded-sm shadow-md transition-all duration-500", activePart === 'perp' ? "bg-rose-500" : "bg-emerald-500")} />
              <div className={cn("w-0.5 bg-slate-300 transition-all duration-500", activePart === 'spot' ? "h-20" : "h-8")} />
            </div>

            <div className="text-center space-y-2 max-w-xs">
              <div className={cn("inline-block px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-white mb-2", active.color)}>
                {active.impact}
              </div>
              <p className="text-sm font-black text-slate-900 leading-tight">
                {active.label} Record
              </p>
              <p className="text-xs font-bold text-slate-500 leading-relaxed italic">
                "{active.desc}"
              </p>
            </div>
          </div>

          {/* Connection Lines (Visual Polish) */}
          <div className="absolute top-1/2 left-0 w-8 h-px bg-slate-200 hidden lg:block" />
        </div>
      </div>
      
      <div className="mt-8 p-5 bg-slate-900 rounded-3xl flex items-center gap-4 border border-slate-800 shadow-2xl shadow-slate-900/20">
        <div className="p-2 bg-slate-800 rounded-xl text-amber-400">
          <DatabaseIcon size={16} />
        </div>
        <p className="text-[11px] font-bold text-slate-300 leading-relaxed uppercase tracking-tight">
          <span className="text-white font-black">Mechanic Check:</span> A single price event can look dramatically different depending on where you source the data.
        </p>
      </div>
    </div>
  );
};

/**
 * 0.3 - Two Candle Engines Board
 */
export const TwoCandleEnginesBoard = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <div className="w-full pt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Spot Panel */}
        <div 
          onMouseEnter={() => setActivePart('spot')}
          className={cn(
            "p-5 rounded-3xl border relative overflow-hidden transition-all duration-300",
            isActive('spot') ? "bg-blue-50/50 border-blue-200 shadow-md scale-[1.01]" : "bg-white border-slate-100 opacity-90"
          )}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg">
              <Coins size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-600">Spot Engine</p>
              <p className="text-lg font-black text-slate-900">Asset Record</p>
            </div>
          </div>
          
          <div className="space-y-3 mb-6">
            {[
              "Actual Bitcoin Trades",
              "Order Book Sourced",
              "Cleaner Mechanics"
            ].map((txt, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 size={12} className="text-blue-500" />
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tight">{txt}</span>
              </div>
            ))}
          </div>

          <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-100 flex flex-col items-center">
             <div className="w-0.5 h-12 bg-slate-300" />
             <div className="w-8 h-8 bg-emerald-500 rounded-sm shadow-md" />
             <div className="w-0.5 h-12 bg-slate-300" />
             <p className="text-[8px] font-black uppercase tracking-widest mt-2 text-slate-400">Spot Evidence</p>
          </div>
        </div>

        {/* Perpetual Panel */}
        <div 
          onMouseEnter={() => setActivePart('perp')}
          className={cn(
            "p-5 rounded-3xl border relative overflow-hidden transition-all duration-300",
            isActive('perp') ? "bg-amber-50/50 border-amber-200 shadow-md scale-[1.01]" : "bg-white border-slate-100 opacity-90"
          )}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-lg">
              <Activity size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-amber-600">Perp Engine</p>
              <p className="text-lg font-black text-slate-900">Pressure Record</p>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            {[
              "Leverage Pressure",
              "Liquidation Wicks",
              "Synthetic Volume"
            ].map((txt, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 size={12} className="text-amber-500" />
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tight">{txt}</span>
              </div>
            ))}
          </div>

          <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-100 flex flex-col items-center">
             <div className="w-0.5 h-20 bg-slate-300" />
             <div className="w-8 h-4 bg-emerald-500 rounded-sm shadow-md" />
             <div className="w-0.5 h-4 bg-slate-300" />
             <p className="text-[8px] font-black uppercase tracking-widest mt-2 text-slate-400">Speculative Noise</p>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 rounded-3xl bg-slate-900 border border-slate-800 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
          <span className="text-amber-400">Rule:</span> Spot volume is more reliable evidence than Perpetual volume.
        </p>
      </div>
    </div>
  );
};

/**
 * 0.3 - Wick Source Diagnostic Board
 */
export const WickSourceDiagnosticBoard = () => {
  const [activePart, setActivePart] = useState<string | null>(null);

  const causes = [
    { 
      id: "rej", 
      label: "Real Rejection", 
      mechanic: "Aggressive Selling", 
      evidence: "High Spot Volume",
      body: "Price hit a wall of actual sell orders. This is a strong structural clue.",
      color: "border-emerald-500",
      wickH: "h-24",
      bodyH: "h-12"
    },
    { 
      id: "liq", 
      label: "Liquidation", 
      mechanic: "Forced Buying/Selling", 
      evidence: "Perp Delta Spike",
      body: "Price spike caused by liquidating leveraged traders. Mechanical noise.",
      color: "border-rose-500",
      wickH: "h-40",
      bodyH: "h-4"
    },
    { 
      id: "thin", 
      label: "Thin Liquidity", 
      mechanic: "Spread Gaps", 
      evidence: "Low Depth",
      body: "Small orders moved price dramatically due to empty books. Unreliable.",
      color: "border-amber-500",
      wickH: "h-32",
      bodyH: "h-8"
    }
  ];

  const active = causes.find(c => c.id === activePart) || causes[0];

  return (
    <div className="w-full pt-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Candle Visualization */}
        <div className="lg:col-span-5 bg-slate-50 rounded-3xl p-6 border border-slate-100 flex flex-col items-center justify-center min-h-[350px]">
           <div className={cn("w-0.5 bg-slate-300 transition-all duration-500", active.wickH)} />
           <div className={cn("w-10 bg-emerald-500 rounded-sm shadow-md transition-all duration-500", active.bodyH)} />
           <div className="w-0.5 h-8 bg-slate-300" />
           
           <div className="mt-8 text-center space-y-2">
             <div className={cn("px-4 py-1.5 rounded-full border-2 text-[10px] font-black uppercase tracking-widest bg-white shadow-sm", active.color)}>
               {active.label}
             </div>
             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Diagnostic Reading</p>
           </div>
        </div>

        {/* Diagnosis Selection */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Select Cause to Diagnose</p>
          {causes.map((cause) => (
            <button 
              key={cause.id}
              onClick={() => setActivePart(cause.id)}
              className={cn(
                "p-6 rounded-[2rem] border text-left transition-all duration-300 outline-none relative group",
                activePart === cause.id 
                  ? "bg-slate-900 border-slate-800 shadow-xl scale-[1.02] text-white" 
                  : "bg-white border-slate-100 text-slate-600 hover:border-slate-200"
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-black uppercase tracking-tight">{cause.label}</span>
                <span className={cn("text-[8px] font-black uppercase px-2 py-0.5 rounded-md", activePart === cause.id ? "bg-white/10 text-white" : "bg-slate-50 text-slate-500")}>
                  {cause.evidence}
                </span>
              </div>
              <p className={cn("text-[10px] font-bold leading-relaxed", activePart === cause.id ? "text-slate-400" : "text-slate-500")}>
                {cause.body}
              </p>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
          <span className="text-emerald-500">Target:</span> Only trust wicks supported by high spot volume.
        </p>
      </div>
    </div>
  );
};

/**
 * 0.3 - Crypto Candle Decision Board
 */
export const CryptoCandleDecisionBoard = () => {
  const [step, setStep] = useState(0);

  const steps = [
    { 
      label: "Venue Source", 
      val: "Bybit Perpetual", 
      status: "Caution", 
      desc: "Contract-based price; check for leverage pressure.",
      icon: <DatabaseIcon size={16} />
    },
    { 
      label: "Spot Support", 
      val: "Weak Confirmation", 
      status: "Warning", 
      desc: "Spot exchanges did not match the move. Low trust.",
      icon: <Target size={16} />
    },
    { 
      label: "Liquidation Data", 
      val: "High Vol Delta", 
      status: "Mechanical", 
      desc: "Large wicks coincide with forced exits.",
      icon: <Activity size={16} />
    },
    { 
      label: "Liquidity Depth", 
      val: "Thin Books", 
      status: "Slippage", 
      desc: "Gap in orders allowed the spike to happen.",
      icon: <Layers size={16} />
    }
  ];

  return (
    <div className="w-full pt-6">
      <div className="p-4 relative">
        <div className="absolute top-4 right-0 p-8 opacity-[0.03] text-slate-900 rotate-12">
          <ShieldAlert size={300} />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Situation Feed */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-md">
                <Target size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Verification Drill</p>
                <p className="text-lg font-black text-slate-900 tracking-tight">BTC Sudden Spike</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              {steps.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setStep(i)}
                  className={cn(
                    "p-4 rounded-xl border text-left transition-all duration-300",
                    step === i 
                      ? "bg-slate-900 border-slate-800 shadow-md scale-[1.01] text-white" 
                      : "bg-slate-50/50 border-slate-100 text-slate-600 hover:border-slate-200"
                  )}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-black uppercase tracking-widest">{s.label}</span>
                    <span className={cn("text-[8px] font-black uppercase px-2 py-0.5 rounded-md", step === i ? "bg-amber-400 text-slate-900" : "bg-slate-100 text-slate-400")}>
                      {s.val}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Diagnostic Result */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 flex flex-col items-center text-center shadow-sm">
            <div className="mb-4 p-3 bg-slate-50 rounded-xl">
              {steps[step].icon}
            </div>
            <h3 className="text-base font-black text-slate-900 mb-1">{steps[step].val}</h3>
            <p className="text-[10px] font-bold text-slate-500 leading-relaxed mb-4">
              {steps[step].desc}
            </p>
            
            <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden mb-6">
              <div 
                className="h-full bg-amber-500 transition-all duration-1000" 
                style={{ width: `${((step + 1) / steps.length) * 100}%` }} 
              />
            </div>

            <div className="p-3 rounded-xl bg-amber-50 border border-amber-100 w-full">
              <p className="text-[9px] font-black text-amber-900 uppercase tracking-widest leading-relaxed">
                Verdict: {step === 3 ? "MECHANICAL NOISE - DO NOT TRUST" : "AWAITING MORE DATA..."}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-center">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] italic">
          Reading is not complete until every mechanical instrument is audited.
        </p>
      </div>
    </div>
  );
};
