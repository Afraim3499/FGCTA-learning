"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Globe,
  TrendingUp,
  TrendingDown,
  Zap,
  AlertCircle,
  Clock,
  Activity,
  Network,
  Layout,
  ArrowUp,
  ArrowDown,
  ShieldCheck
} from "lucide-react";

/**
 * 0.2 - Forex Relationship
 */
export const ForexRelationship = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <div className="my-2 space-y-10 max-w-4xl mx-auto w-full text-left">
      {/* The Core Relationship */}
      <div className="relative p-10 bg-white rounded-[3rem] border border-slate-200 shadow-xl overflow-hidden text-center">
        <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none rotate-12">
          <Globe size={160} />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 relative z-10">
          {/* Base */}
          <button 
            onMouseEnter={() => setActivePart('base')}
            onMouseLeave={() => setActivePart(null)}
            onFocus={() => setActivePart('base')}
            onBlur={() => setActivePart(null)}
            className={cn("space-y-4 transition-all duration-300", activePart && !isActive('base') ? "opacity-60 scale-[0.98]" : "opacity-100", isActive('base') ? "scale-105" : "")}
          >
            <div className={cn("w-32 h-32 rounded-[2.5rem] flex flex-col items-center justify-center border-4 transition-colors", isActive('base') ? "bg-slate-800 border-slate-700 shadow-2xl text-white" : "bg-slate-900 border-slate-800 text-white")}>
              <span className="text-3xl font-black tracking-tighter">EUR</span>
              <span className="text-[10px] font-bold opacity-50 uppercase tracking-widest mt-1 italic">Base</span>
            </div>
            <div className="text-center">
              <div className={cn("text-[10px] font-black uppercase tracking-widest mb-1 transition-colors", isActive('base') ? "text-slate-600" : "text-slate-400")}>The Item</div>
              <p className={cn("text-[11px] font-bold leading-tight transition-colors", isActive('base') ? "text-slate-900" : "text-slate-800")}>Euro being priced</p>
            </div>
          </button>

          {/* Separator / Divider */}
          <div className="hidden md:flex flex-col items-center gap-2">
            <div className="h-10 w-px bg-slate-200" />
            <div className="text-xl font-black text-slate-300">/</div>
            <div className="h-10 w-px bg-slate-200" />
          </div>
          <div className="md:hidden text-2xl font-black text-slate-200 my-2">/</div>

          {/* Quote */}
          <button 
            onMouseEnter={() => setActivePart('quote')}
            onMouseLeave={() => setActivePart(null)}
            onFocus={() => setActivePart('quote')}
            onBlur={() => setActivePart(null)}
            className={cn("space-y-4 transition-all duration-300", activePart && !isActive('quote') ? "opacity-60 scale-[0.98]" : "opacity-100", isActive('quote') ? "scale-105" : "")}
          >
            <div className={cn("w-32 h-32 rounded-[2.5rem] flex flex-col items-center justify-center border-4 transition-colors", isActive('quote') ? "bg-slate-50 border-slate-200 shadow-xl text-slate-900" : "bg-white border-slate-100 text-slate-900")}>
              <span className="text-3xl font-black tracking-tighter">USD</span>
              <span className="text-[10px] font-bold uppercase tracking-widest mt-1 italic transition-colors text-slate-400">Quote</span>
            </div>
            <div className="text-center">
              <div className={cn("text-[10px] font-black uppercase tracking-widest mb-1 transition-colors", isActive('quote') ? "text-slate-600" : "text-slate-400")}>The Measuring Stick</div>
              <p className={cn("text-[11px] font-bold leading-tight transition-colors", isActive('quote') ? "text-slate-900" : "text-slate-800")}>Dollar measuring it</p>
            </div>
          </button>
        </div>
      </div>

      {/* The 3 Drivers for a Rise */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 px-4">
          <div className="h-px flex-1 bg-slate-100" />
          <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Why EUR/USD Rises</h4>
          <div className="h-px flex-1 bg-slate-100" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { id: "base", title: "EUR Strengthens", desc: "Base gets stronger", icon: <TrendingUp className="text-emerald-500" size={16} /> },
            { id: "quote", title: "USD Weakens", desc: "Quote gets weaker", icon: <TrendingDown className="text-rose-500" size={16} /> },
            { id: "dual", title: "Dual Force", desc: "Both happen together", icon: <Zap className="text-amber-500" size={16} /> }
          ].map((item, i) => (
            <button 
              key={i} 
              onMouseEnter={() => setActivePart(item.id)}
              onMouseLeave={() => setActivePart(null)}
              onFocus={() => setActivePart(item.id)}
              onBlur={() => setActivePart(null)}
              className={cn(
                "p-5 rounded-2xl border flex items-center gap-4 transition-all duration-300 text-left w-full", 
                isActive(item.id) || (item.id === "dual" && (isActive("base") || isActive("quote"))) ? "bg-slate-50 border-slate-300 shadow-md scale-105" : "bg-white border-slate-100 shadow-sm",
                activePart && !isActive(item.id) && !(item.id === "dual" && (isActive("base") || isActive("quote"))) ? "opacity-60" : "opacity-100"
              )}
            >
              <div className={cn("w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors", isActive(item.id) ? "bg-slate-200" : "bg-slate-50")}>
                {item.icon}
              </div>
              <div className="space-y-0.5 text-left">
                <h5 className={cn("text-xs font-black uppercase tracking-tight transition-colors", isActive(item.id) ? "text-slate-900" : "text-slate-900")}>{item.title}</h5>
                <p className={cn("text-[10px] font-bold transition-colors", isActive(item.id) ? "text-slate-700" : "text-slate-500")}>{item.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Warning Box */}
      <button 
        onMouseEnter={() => setActivePart('warning')}
        onMouseLeave={() => setActivePart(null)}
        onFocus={() => setActivePart('warning')}
        onBlur={() => setActivePart(null)}
        className={cn("p-6 rounded-[2rem] border flex items-start gap-4 transition-all duration-300 w-full text-left", isActive('warning') ? "bg-amber-100/50 border-amber-300 shadow-md scale-[1.01]" : "bg-amber-50/50 border-amber-100 shadow-sm", activePart && !isActive('warning') ? "opacity-80" : "opacity-100")}
      >
        <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/20">
          <AlertCircle size={20} />
        </div>
        <div className="space-y-1 text-left">
          <h4 className="text-[10px] font-black text-amber-600 uppercase tracking-widest">Crucial Warning</h4>
          <p className="text-xs text-slate-800 font-bold leading-relaxed">
            A rising chart does not automatically prove the Base Currency (EUR) is strong. It may simply be the result of a collapsing Quote Currency (USD).
          </p>
        </div>
      </button>
    </div>
  );
};

/**
 * 0.2 - Forex Network Visual
 */
export const ForexNetworkVisual = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  const nodes = [
    { label: "Liquidity Providers", sub: "Bank Network", icon: <Globe size={14} />, color: "blue" },
    { label: "Broker / Aggregator", sub: "Price Feed", icon: <Network size={14} />, color: "indigo" },
    { label: "Retail Platform", sub: "Your Terminal", icon: <Layout size={14} />, color: "teal" },
    { label: "Market Quote", sub: "Bid / Ask", icon: <Activity size={14} />, color: "amber" }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 px-4">
        {/* Connection Line */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 hidden md:block z-0" />

        {nodes.map((node, i) => (
          <button 
            key={node.label} 
            onMouseEnter={() => setActivePart(node.label)}
            onMouseLeave={() => setActivePart(null)}
            onFocus={() => setActivePart(node.label)}
            onBlur={() => setActivePart(null)}
            className={cn(
              "relative z-10 flex flex-col items-center gap-3 transition-all duration-300",
              activePart && !isActive(node.label) ? "opacity-60 scale-[0.98]" : "opacity-100"
            )}
          >
            <div className={cn(
              "w-14 h-14 rounded-2xl flex items-center justify-center border shadow-sm transition-all duration-300",
              isActive(node.label) ? "scale-110 shadow-md" : "",
              node.color === "blue" && (isActive(node.label) ? "bg-blue-100 border-blue-300 text-blue-700" : "bg-blue-50 border-blue-100 text-blue-600"),
              node.color === "indigo" && (isActive(node.label) ? "bg-indigo-100 border-indigo-300 text-indigo-700" : "bg-indigo-50 border-indigo-100 text-indigo-600"),
              node.color === "teal" && (isActive(node.label) ? "bg-teal-100 border-teal-300 text-teal-700" : "bg-teal-50 border-teal-100 text-teal-600"),
              node.color === "amber" && (isActive(node.label) ? "bg-amber-100 border-amber-300 text-amber-700" : "bg-amber-50 border-amber-100 text-amber-600")
            )}>
              {node.icon}
            </div>
            <div className="text-center">
              <p className={cn("text-[10px] font-black uppercase tracking-widest leading-tight transition-colors", isActive(node.label) ? "text-slate-900" : "text-slate-700")}>{node.label}</p>
              <p className={cn("text-[9px] font-bold uppercase tracking-tighter mt-0.5 transition-colors", isActive(node.label) ? "text-slate-500" : "text-slate-400")}>{node.sub}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-100">
        <p className="text-xs text-slate-500 font-medium text-center leading-relaxed max-w-2xl mx-auto">
          Forex is <span className="text-slate-900 font-black">Decentralized</span>. You are not looking at one central exchange; you are looking at a feed generated by a network of providers.
        </p>
      </div>
    </div>
  );
};

/**
 * 0.2 - Forex Quote Panel Visual
 */
export const ForexQuotePanelVisual = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  return (
    <div className="w-full max-w-3xl mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Quote Card */}
        <div className="bg-slate-900 rounded-[2rem] p-8 shadow-2xl border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <Activity size={80} className="text-white" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <Globe size={14} className="text-teal-400" />
              <span className="text-xs font-black text-white uppercase tracking-[0.2em]">EUR / USD</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button 
                onMouseEnter={() => setActivePart('bid')}
                onMouseLeave={() => setActivePart(null)}
                onFocus={() => setActivePart('bid')}
                onBlur={() => setActivePart(null)}
                className={cn("space-y-1 text-left transition-all duration-300 p-2 rounded-xl border border-transparent", isActive('bid') ? "bg-white/5 border-white/10 scale-105" : "", activePart && !isActive('bid') ? "opacity-40" : "opacity-100")}
              >
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Sell (Bid)</p>
                <p className="text-3xl font-black text-white tracking-tighter">1.08<span className={cn("italic transition-colors", isActive('bid') ? "text-teal-300" : "text-teal-400")}>24</span><span className="text-[12px] align-top ml-0.5">5</span></p>
              </button>
              <button 
                onMouseEnter={() => setActivePart('ask')}
                onMouseLeave={() => setActivePart(null)}
                onFocus={() => setActivePart('ask')}
                onBlur={() => setActivePart(null)}
                className={cn("space-y-1 text-right transition-all duration-300 p-2 rounded-xl border border-transparent", isActive('ask') ? "bg-white/5 border-white/10 scale-105" : "", activePart && !isActive('ask') ? "opacity-40" : "opacity-100")}
              >
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Buy (Ask)</p>
                <p className="text-3xl font-black text-white tracking-tighter">1.08<span className={cn("italic transition-colors", isActive('ask') ? "text-rose-300" : "text-rose-400")}>25</span><span className="text-[12px] align-top ml-0.5">7</span></p>
              </button>
            </div>

            <button 
              onMouseEnter={() => setActivePart('spread')}
              onMouseLeave={() => setActivePart(null)}
              onFocus={() => setActivePart('spread')}
              onBlur={() => setActivePart(null)}
              className={cn("mt-6 pt-6 border-t border-white/10 flex justify-between items-center w-full transition-all duration-300 rounded-xl p-2", isActive('spread') ? "bg-white/5 scale-[1.02]" : "", activePart && !isActive('spread') ? "opacity-40" : "opacity-100")}
            >
              <div className="flex items-center gap-2">
                <div className={cn("w-2 h-2 rounded-full transition-colors", isActive('spread') ? "bg-white shadow-[0_0_8px_white]" : "bg-teal-500")} />
                <span className={cn("text-[10px] font-bold uppercase transition-colors", isActive('spread') ? "text-slate-300" : "text-slate-400")}>Spread</span>
              </div>
              <span className={cn("text-xs font-black tracking-widest transition-colors", isActive('spread') ? "text-teal-300" : "text-white")}>1.2 PIPS</span>
            </button>
          </div>
        </div>

        {/* Mechanics Labels */}
        <div className="space-y-6">
          <button 
            onMouseEnter={() => setActivePart('bid')}
            onMouseLeave={() => setActivePart(null)}
            onFocus={() => setActivePart('bid')}
            onBlur={() => setActivePart(null)}
            className={cn("flex gap-4 items-start p-4 rounded-2xl border text-left w-full transition-all duration-300", isActive('bid') ? "bg-teal-50/50 border-teal-200 shadow-sm scale-[1.02]" : "bg-white border-transparent", activePart && !isActive('bid') ? "opacity-60" : "opacity-100")}
          >
            <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-colors", isActive('bid') ? "bg-teal-100 text-teal-700 border-teal-300" : "bg-teal-500/10 text-teal-600 border-teal-100")}>
              <ArrowDown size={14} />
            </div>
            <div>
              <p className={cn("text-xs font-black uppercase mb-1 transition-colors", isActive('bid') ? "text-teal-900" : "text-slate-900")}>Sellers Hit the Bid</p>
              <p className={cn("text-[11px] font-medium leading-relaxed transition-colors", isActive('bid') ? "text-teal-800" : "text-slate-500")}>When you sell, you get the lower price where buyers are waiting.</p>
            </div>
          </button>
          <button 
            onMouseEnter={() => setActivePart('ask')}
            onMouseLeave={() => setActivePart(null)}
            onFocus={() => setActivePart('ask')}
            onBlur={() => setActivePart(null)}
            className={cn("flex gap-4 items-start p-4 rounded-2xl border text-left w-full transition-all duration-300", isActive('ask') ? "bg-rose-50/50 border-rose-200 shadow-sm scale-[1.02]" : "bg-white border-transparent", activePart && !isActive('ask') ? "opacity-60" : "opacity-100")}
          >
            <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-colors", isActive('ask') ? "bg-rose-100 text-rose-700 border-rose-300" : "bg-rose-500/10 text-rose-600 border-rose-100")}>
              <ArrowUp size={14} />
            </div>
            <div>
              <p className={cn("text-xs font-black uppercase mb-1 transition-colors", isActive('ask') ? "text-rose-900" : "text-slate-900")}>Buyers Hit the Ask</p>
              <p className={cn("text-[11px] font-medium leading-relaxed transition-colors", isActive('ask') ? "text-rose-800" : "text-slate-500")}>When you buy, you pay the higher price where sellers are waiting.</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * 0.2 - Forex Instrument Panel
 */
export const ForexInstrumentPanel = () => {
  const [activePart, setActivePart] = useState<string | null>(null);
  const isActive = (part: string) => activePart === part;

  const instruments = [
    {
      id: "pair",
      title: "Pair Identity",
      desc: "Base vs. Quote",
      details: "Identifying which is the item and which is the stick.",
      icon: <Globe size={18} className="text-slate-600" />,
      color: "border-slate-200",
      accent: "bg-slate-50",
      activeBg: "bg-slate-100 border-slate-300"
    },
    {
      id: "usd",
      title: "USD Context",
      desc: "The Global Weather",
      details: "Is the Dollar strong, weak, or mixed across the market?",
      icon: <Zap size={18} className="text-amber-500" />,
      color: "border-amber-200",
      accent: "bg-amber-50/30",
      activeBg: "bg-amber-50 border-amber-300"
    },
    {
      id: "session",
      title: "Session Context",
      desc: "Active Window",
      details: "Major markets (LDN, NY, TYO) currently active.",
      icon: <Clock size={18} className="text-emerald-500" />,
      color: "border-emerald-200",
      accent: "bg-emerald-50/30",
      activeBg: "bg-emerald-50 border-emerald-300"
    },
    {
      id: "spread",
      title: "Spread / Activity",
      desc: "Reading Quality",
      details: "Is there enough participation for a clean reading?",
      icon: <Activity size={18} className="text-blue-500" />,
      color: "border-blue-200",
      accent: "bg-blue-50/30",
      activeBg: "bg-blue-50 border-blue-300"
    }
  ];

  return (
    <div className="my-2 space-y-8 max-w-5xl mx-auto w-full text-left pb-10">
      <div className="relative p-8 bg-slate-50/30 rounded-[3rem] border border-slate-100/50">

        {/* Connection Lines Layout */}
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          <svg className="w-full h-full opacity-20" viewBox="0 0 800 600" fill="none">
            <path d="M200 150 L400 300 M600 150 L400 300 M200 450 L400 300 M600 450 L400 300" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-slate-400" />
          </svg>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">

          {/* Left Column Tools */}
          <div className="space-y-8 order-2 lg:order-1">
            {[instruments[0], instruments[2]].map((item, i) => (
              <button 
                key={item.id} 
                onMouseEnter={() => setActivePart(item.id)}
                onMouseLeave={() => setActivePart(null)}
                onFocus={() => setActivePart(item.id)}
                onBlur={() => setActivePart(null)}
                className={cn(
                  "w-full text-left p-6 rounded-[2.5rem] border-2 transition-all duration-300", 
                  isActive(item.id) ? `${item.activeBg} shadow-md scale-105` : `bg-white ${item.color} shadow-xl hover:-translate-y-1`,
                  activePart && !isActive(item.id) ? "opacity-60" : "opacity-100"
                )}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={cn("w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 border border-slate-100 transition-colors", isActive(item.id) ? "bg-white" : item.accent)}>
                    {item.icon}
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tool {item.id === "pair" ? "1" : "3"}</h4>
                    <h3 className="text-xs font-black text-slate-900 uppercase">{item.title}</h3>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="text-[11px] font-bold text-slate-800">{item.desc}</div>
                  <p className="text-[10px] text-slate-500 font-bold leading-relaxed">{item.details}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Center Column: The Pair */}
          <div className="flex flex-col items-center justify-center order-1 lg:order-2">
            <div className={cn("relative group transition-all duration-500", activePart ? "scale-105" : "")}>
              <div className="absolute -inset-4 bg-gradient-to-r from-slate-900 to-slate-800 rounded-[3.5rem] blur-2xl opacity-10 transition duration-1000" />
              <div className={cn("relative w-52 h-52 rounded-[3.5rem] text-white flex flex-col items-center justify-center shadow-2xl border-4 transition-colors duration-500", activePart ? "bg-slate-800 border-slate-700" : "bg-slate-900 border-slate-800", "scale-105")}>
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1 italic">Active Pair</div>
                <span className="text-5xl font-black tracking-tighter">EUR/USD</span>
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest">Live Feed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Tools */}
          <div className="space-y-8 order-3">
            {[instruments[1], instruments[3]].map((item, i) => (
              <button 
                key={item.id} 
                onMouseEnter={() => setActivePart(item.id)}
                onMouseLeave={() => setActivePart(null)}
                onFocus={() => setActivePart(item.id)}
                onBlur={() => setActivePart(null)}
                className={cn(
                  "w-full text-left p-6 rounded-[2.5rem] border-2 transition-all duration-300", 
                  isActive(item.id) ? `${item.activeBg} shadow-md scale-105` : `bg-white ${item.color} shadow-xl hover:-translate-y-1`,
                  activePart && !isActive(item.id) ? "opacity-60" : "opacity-100"
                )}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={cn("w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 border border-slate-100 transition-colors", isActive(item.id) ? "bg-white" : item.accent)}>
                    {item.icon}
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tool {item.id === "usd" ? "2" : "4"}</h4>
                    <h3 className="text-xs font-black text-slate-900 uppercase">{item.title}</h3>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="text-[11px] font-bold text-slate-800">{item.desc}</div>
                  <p className="text-[10px] text-slate-500 font-bold leading-relaxed">{item.details}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Protocol Footer */}
      <div className="flex items-center gap-5 px-6 py-6 bg-slate-900 rounded-[2.5rem] shadow-xl text-white">
        <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/20">
          <ShieldCheck size={24} />
        </div>
        <div className="flex-1 space-y-0.5">
          <h4 className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em]">Verification Protocol</h4>
          <h3 className="text-sm font-black text-white uppercase tracking-tight">The Forex Pre-Reading Checklist</h3>
        </div>
        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl border border-white/10">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-[10px] font-bold uppercase tracking-widest">V2 Standard</span>
        </div>
      </div>
    </div>
  );
};
