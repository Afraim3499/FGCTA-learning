"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  BookOpen, 
  MapPin, 
  Target, 
  ClipboardCheck, 
  ChevronRight,
  ChevronLeft,
  TrendingUp,
  TrendingDown,
  Globe,
  ArrowUp,
  ArrowDown,
  Info,
  XCircle,
  CheckCircle2,
  FileText,
  Zap,
  MessageSquare,
  Lightbulb,
  AlertCircle,
  ShieldCheck,
  ShieldAlert,
  Gavel,
  Scale,
  Layers,
  Clock,
  Activity,
  Layout,
  Search,
  Users,
  Cpu,
  RefreshCcw,
  BarChart3,
  ArrowRightLeft,
  MousePointer2,
  MousePointerClick,
  ArrowRight,
  Eye,
  Brain,
  Network,
  Coins,
  Map,
  Lock,
  Unlock,
  AlertTriangle,
  Monitor
} from "lucide-react";

/**
 * 0.2 - Transaction Mechanism Mini Visual
 * A compact horizontal flow showing the lifecycle of a transaction.
 */
export const TransactionMechanismMiniVisual = () => {
  return (
    <div className="w-full max-w-3xl mx-auto py-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
        
        {/* Input */}
        <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200">
          <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center">
            <TrendingUp size={16} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Orders</span>
        </div>

        <ArrowRight className="text-slate-200 hidden md:block" size={16} />

        {/* Engine */}
        <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-teal-50 border border-teal-200 shadow-sm relative">
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-teal-500 rounded-full animate-ping" />
          <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-600 flex items-center justify-center">
            <Cpu size={16} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-teal-900">Matching</span>
        </div>

        <ArrowRight className="text-slate-200 hidden md:block" size={16} />

        {/* Output */}
        <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200 shadow-sm">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
            <ArrowRightLeft size={16} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-emerald-900">Transaction</span>
        </div>

        <ArrowRight className="text-slate-200 hidden md:block" size={16} />

        {/* Record */}
        <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-900 text-white border border-white/10 shadow-lg">
          <div className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center">
            <BarChart3 size={16} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest">Chart Record</span>
        </div>

      </div>
    </div>
  );
};

/**
 * 0.2 - Intent Logic Board
 * Visualizes the causal chain from Participant Intent to the appearance of a Pattern on a chart.
 */
export const IntentLogicBoardVisual = () => {
  const steps = [
    {
      id: "intent",
      title: "Participant Intent",
      desc: "“They want to buy / sell / defend / exit”",
      icon: <MousePointer2 size={16} />,
      color: "blue"
    },
    {
      id: "orders",
      title: "Orders Enter Market",
      desc: "Bids, asks, market orders, limit orders",
      icon: <Layers size={16} />,
      color: "teal"
    },
    {
      id: "pressure",
      title: "Pressure Builds",
      desc: "One side becomes more aggressive",
      icon: <Zap size={16} />,
      color: "emerald"
    },
    {
      id: "movement",
      title: "Price Moves",
      desc: "Transactions happen at new levels",
      icon: <TrendingUp size={16} />,
      color: "rose"
    },
    {
      id: "pattern",
      title: "Pattern Appears",
      desc: "The chart records the result",
      icon: <BarChart3 size={16} />,
      color: "slate"
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-4 relative">
      {/* Header Rule */}
      <div className="max-w-2xl mx-auto mb-12 p-6 rounded-[2.5rem] bg-[var(--ln-navy-900)] text-white shadow-2xl border border-teal-500/20 relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Info size={40} className="text-teal-400" />
        </div>
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-teal-400/80 mb-4">The Central Rule</p>
        <div className="space-y-1">
          <p className="text-sm font-black uppercase tracking-tight">Patterns do not cause intent.</p>
          <p className="text-sm font-black uppercase tracking-tight text-teal-400">Intent creates pressure.</p>
          <p className="text-sm font-black uppercase tracking-tight text-emerald-400">Pressure creates movement.</p>
          <p className="text-sm font-black uppercase tracking-tight text-slate-400">Movement forms patterns.</p>
        </div>
      </div>

      {/* Logic Chain (Stepped) */}
      <div className="space-y-4 relative">
        {/* Vertical Connector Line */}
        <div className="absolute left-[39px] top-10 bottom-10 w-0.5 bg-slate-100 -z-10 hidden md:block" />
        
        {steps.map((step, i) => (
          <div key={step.id} className="flex flex-col md:flex-row items-center md:items-start gap-6 group">
            {/* Icon Circle */}
            <div className={cn(
              "w-20 h-20 rounded-[2rem] flex items-center justify-center border-4 border-white shadow-xl shrink-0 transition-all group-hover:scale-110",
              step.color === 'blue' && "bg-blue-50 text-blue-500 shadow-blue-500/10",
              step.color === 'teal' && "bg-teal-50 text-teal-500 shadow-teal-500/10",
              step.color === 'emerald' && "bg-emerald-50 text-emerald-500 shadow-emerald-500/10",
              step.color === 'rose' && "bg-rose-50 text-rose-500 shadow-rose-500/10",
              step.color === 'slate' && "bg-slate-50 text-slate-500 shadow-slate-500/10"
            )}>
              {step.icon}
            </div>

            {/* Content Card */}
            <div className="flex-1 w-full p-6 rounded-[2.5rem] bg-white border border-slate-100 shadow-lg group-hover:border-teal-500/30 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Step {i + 1}</span>
                {i < steps.length - 1 && (
                  <ArrowDown size={14} className="text-slate-200 hidden md:block" />
                )}
              </div>
              <h5 className="text-sm font-black text-slate-900 uppercase tracking-tight">{step.title}</h5>
              <p className="text-[11px] font-bold text-slate-500/80 mt-1 uppercase tracking-tight italic leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Memory Anchor */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-teal-50 border border-teal-100 shadow-sm">
          <CheckCircle2 size={16} className="text-teal-500" />
          <p className="text-[11px] font-black text-teal-900 uppercase tracking-widest">
            The shape is the symptom. The behavior is the lesson.
          </p>
        </div>
      </div>
    </div>
  );
};

/**
 * 0.2 - Mindset Comparison
 * Contrasts reactive "guessing" with analytical "observation" using generated images and pro/trap paths.
 */
export const MindsetComparisonVisual = () => {
  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-4 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left: The Guesser (Trap Path) */}
        <div className="flex flex-col rounded-[2.5rem] bg-white border border-slate-100 shadow-xl overflow-hidden group">
          <div className="bg-rose-500/5 px-6 py-3 border-b border-rose-500/10 flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-widest text-rose-700">The Guesser</span>
            <div className="w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center">
               <AlertCircle size={14} />
            </div>
          </div>
          
          <div className="p-6 space-y-6 flex-1 flex flex-col items-center">
            {/* Square Image Container */}
            <div className="w-48 h-48 rounded-[2rem] overflow-hidden border border-slate-100 shadow-inner bg-slate-50">
              <img 
                src="/images/academy/the_guesser_mindset.png" 
                alt="Reactive Learner"
                className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500"
              />
            </div>

            <div className="text-center space-y-4">
              <div className="inline-block px-4 py-2 rounded-2xl bg-rose-50 border border-rose-100">
                <p className="text-[11px] font-extrabold text-rose-900 leading-tight italic">
                  “The chart looks like it’s going up, so I’ll buy.”
                </p>
              </div>
              
              <div className="pt-2">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Interpretation</p>
                <p className="text-sm font-black text-slate-900 uppercase tracking-tight">Focuses on appearance, not evidence.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: The Observer (Pro Path) */}
        <div className="flex flex-col rounded-[2.5rem] bg-white border border-slate-100 shadow-xl overflow-hidden group">
          <div className="bg-emerald-500/5 px-6 py-3 border-b border-emerald-500/10 flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700">The Observer</span>
            <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center">
               <CheckCircle2 size={14} />
            </div>
          </div>

          <div className="p-6 space-y-6 flex-1 flex flex-col items-center">
            {/* Square Image Container */}
            <div className="w-48 h-48 rounded-[2rem] overflow-hidden border border-emerald-100 shadow-inner bg-emerald-50">
              <img 
                src="/images/academy/the_observer_mindset.png" 
                alt="Analytical Learner"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="text-center space-y-4">
              <div className="inline-block px-4 py-2 rounded-2xl bg-emerald-50 border border-emerald-100">
                <p className="text-[11px] font-extrabold text-emerald-900 leading-tight italic">
                  “I observe buyers hitting the Ask and pushing through seller levels. This is evidence of intent.”
                </p>
              </div>

              <div className="pt-2">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Interpretation</p>
                <p className="text-sm font-black text-slate-900 uppercase tracking-tight">Reads market behavior before forming a conclusion.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Takeaway Strip */}
      <div className="mt-12 p-8 rounded-[3rem] bg-[var(--ln-navy-900)] text-white shadow-2xl border border-teal-500/20 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
          <Brain size={80} className="text-teal-400" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
          <div className="space-y-4">
            <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-teal-400/80">Lurnava Rule</h5>
            <div className="space-y-1">
              <p className="text-lg font-black uppercase tracking-tight leading-none">Do not guess from shape.</p>
              <p className="text-lg font-black uppercase tracking-tight text-teal-400 leading-none">Read behavior, pressure, and intent.</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6 p-5 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm">
             <div className="w-12 h-12 rounded-2xl bg-teal-500/20 flex items-center justify-center shrink-0 border border-teal-500/30">
               <Eye size={24} className="text-teal-400" />
             </div>
             <div>
               <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">The Core Question</p>
               <p className="text-[11px] font-bold text-white/90 leading-snug uppercase">
                 Lurnava learners do not ask “What does this shape suggest?” They ask “What market behavior is visible here?”
               </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 0.2 - Liquidity Comparison (Redesigned)
 * A compact comparison showing how the same buy order interacts with different order depths.
 */
export const LiquidityComparisonVisual = () => {
  return (
    <div className="w-full max-w-5xl mx-auto py-6 px-4">
      {/* Visual Title */}
      <div className="text-center mb-8">
        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">Market Impact Analysis</h4>
        <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight italic">Same Order, Different Market Depth</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        
        {/* Left: Liquid Market (Dense Depth) */}
        <div className="flex flex-col rounded-[2.5rem] bg-white border border-slate-100 shadow-xl overflow-hidden group">
          <div className="bg-emerald-500/5 px-6 py-3 border-b border-emerald-500/10 flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700">Liquid Market</span>
            <span className="text-[8px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 uppercase">High Depth</span>
          </div>
          
          <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
            {/* The Order Book Representation */}
            <div className="space-y-2">
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-3">Sell Order Depth (Asks)</p>
              {[
                { price: 100.30, size: 5 },
                { price: 100.20, size: 8 },
                { price: 100.10, size: 10 },
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-slate-400 w-10">{row.price.toFixed(2)}</span>
                  <div className="flex-1 h-6 bg-slate-50 rounded-lg flex items-center px-1 border border-slate-100 overflow-hidden">
                    <div className="h-4 bg-rose-400/20 rounded-md border border-rose-400/30 flex items-center px-2" style={{ width: `${row.size * 10}%` }}>
                       <span className="text-[8px] font-black text-rose-600">{row.size} Units</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* The Interaction */}
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <RefreshCcw size={40} className="animate-spin-slow" />
              </div>
              
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="px-4 py-2 rounded-xl bg-slate-900 text-white border border-white/10 shadow-lg flex items-center gap-3">
                  <TrendingUp size={14} className="text-emerald-400" />
                  <span className="text-[10px] font-black uppercase tracking-widest">BUY ORDER: 5 UNITS</span>
                </div>
                <div className="h-8 w-px bg-slate-100" />
              </div>
            </div>

            {/* The Outcome */}
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
               <div className="flex items-center gap-3 mb-2">
                 <CheckCircle2 size={14} className="text-emerald-500" />
                 <p className="text-[10px] font-black uppercase tracking-widest text-emerald-800">Result: Near-Price Fill</p>
               </div>
               <p className="text-[9px] font-bold text-emerald-600/70 uppercase leading-tight">Order filled at 100.10. No price jump required.</p>
               <div className="mt-2 text-[10px] font-black text-emerald-700 uppercase">Outcome: Small Move</div>
            </div>
          </div>
        </div>

        {/* Right: Illiquid Market (Thin Depth) */}
        <div className="flex flex-col rounded-[2.5rem] bg-white border border-slate-100 shadow-xl overflow-hidden group">
          <div className="bg-rose-500/5 px-6 py-3 border-b border-rose-500/10 flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-widest text-rose-700">Illiquid Market</span>
            <span className="text-[8px] font-bold px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-600 uppercase">Low Depth</span>
          </div>

          <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
            {/* The Order Book Representation */}
            <div className="space-y-2">
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-3">Sell Order Depth (Asks)</p>
              {[
                { price: 100.30, size: 5, hasGap: false },
                { price: 100.20, size: 0, hasGap: true },
                { price: 100.10, size: 2, hasGap: false },
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-slate-400 w-10">{row.price.toFixed(2)}</span>
                  <div className={`flex-1 h-6 rounded-lg flex items-center px-1 border overflow-hidden ${row.hasGap ? 'bg-rose-50/30 border-dashed border-rose-100' : 'bg-slate-50 border-slate-100'}`}>
                    {row.size > 0 && (
                      <div className="h-4 bg-rose-400/20 rounded-md border border-rose-400/30 flex items-center px-2" style={{ width: `${row.size * 10}%` }}>
                         <span className="text-[8px] font-black text-rose-600">{row.size} Units</span>
                      </div>
                    )}
                    {row.hasGap && (
                      <span className="text-[8px] font-black text-rose-300 uppercase tracking-widest mx-auto">Empty Gap</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* The Interaction */}
            <div className="relative py-4">
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="px-4 py-2 rounded-xl bg-slate-900 text-white border border-white/10 shadow-lg flex items-center gap-3">
                  <TrendingUp size={14} className="text-rose-400" />
                  <span className="text-[10px] font-black uppercase tracking-widest">BUY ORDER: 5 UNITS</span>
                </div>
                <div className="h-8 w-px bg-slate-100" />
              </div>
            </div>

            {/* The Outcome */}
            <div className="p-4 rounded-2xl bg-rose-50 border-2 border-rose-100 shadow-lg shadow-rose-500/5">
               <div className="flex items-center gap-3 mb-2">
                 <AlertCircle size={14} className="text-rose-500" />
                 <p className="text-[10px] font-black uppercase tracking-widest text-rose-800">Result: Consumes Depth</p>
               </div>
               <p className="text-[9px] font-bold text-rose-600/70 uppercase leading-tight">Must reach 100.30 to fill total 5 units.</p>
               <div className="mt-2 text-[10px] font-black text-rose-700 uppercase animate-pulse">Outcome: Larger Jump</div>
            </div>
          </div>
        </div>

      </div>

      {/* Final Takeaway */}
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
  );
};

/**
 * 0.2 - Market Microstructure
 * Visualizes the order book depth, spread, and the relationship between orders, liquidity, and spread.
 */
export const MicrostructureBoardVisual = () => {
  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-4 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left: The Order Book / Depth (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between px-2 mb-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Bid Side (Liquidity)</h4>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Ask Side (Liquidity)</h4>
          </div>

          <div className="relative">
            {/* Best Bid/Ask Highlight */}
            <div className="absolute top-[2px] left-0 right-0 h-[52px] bg-teal-500/5 rounded-2xl border-y border-teal-500/10 pointer-events-none" />
            
            <div className="space-y-1 relative z-10">
              {[
                { bid: 99.90, bidSize: "████████", ask: 100.10, askSize: "██████", isBest: true },
                { bid: 99.80, bidSize: "██████", ask: 100.20, askSize: "████" },
                { bid: 99.70, bidSize: "████", ask: 100.30, askSize: "██" },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-2 gap-4">
                  {/* Bid Row */}
                  <div className="flex items-center justify-end gap-3 p-3 rounded-xl bg-white border border-slate-100 shadow-sm">
                    <span className="text-[10px] font-mono text-emerald-500/60 truncate">{row.bidSize}</span>
                    <span className={`text-sm font-black font-mono ${row.isBest ? 'text-emerald-600' : 'text-slate-400'}`}>{row.bid.toFixed(2)}</span>
                  </div>
                  {/* Ask Row */}
                  <div className="flex items-center justify-start gap-3 p-3 rounded-xl bg-white border border-slate-100 shadow-sm">
                    <span className={`text-sm font-black font-mono ${row.isBest ? 'text-rose-600' : 'text-slate-400'}`}>{row.ask.toFixed(2)}</span>
                    <span className="text-[10px] font-mono text-rose-500/60 truncate">{row.askSize}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Spread Indicator */}
          <div className="flex flex-col items-center gap-2 py-4">
            <div className="flex items-center gap-4 w-full px-12">
              <div className="h-px bg-slate-200 flex-1" />
              <div className="px-4 py-1.5 rounded-full bg-slate-900 text-white border border-white/10 shadow-lg text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                Spread: 0.20
              </div>
              <div className="h-px bg-slate-200 flex-1" />
            </div>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Gap between best buyer & seller</p>
          </div>
        </div>

        {/* Right: The Relationship (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-[2.5rem] bg-[var(--ln-navy-900)] text-white shadow-2xl border border-teal-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Layers size={80} />
            </div>
            
            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-teal-400/80 mb-6">The Relationship</h5>
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-4 group/item">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/item:border-teal-500/50 transition-colors">
                  <MousePointer2 size={18} className="text-teal-400" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white">Orders</p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tight mt-0.5">The instructions sent by participants</p>
                </div>
              </div>

              <div className="flex justify-center -my-2">
                <ArrowRight size={14} className="rotate-90 text-teal-500/40" />
              </div>

              <div className="flex items-center gap-4 group/item">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/item:border-teal-500/50 transition-colors">
                  <Layers size={18} className="text-teal-400" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white">Liquidity</p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tight mt-0.5">The pool of orders waiting at each price</p>
                </div>
              </div>

              <div className="flex justify-center -my-2">
                <ArrowRight size={14} className="rotate-90 text-teal-500/40" />
              </div>

              <div className="flex items-center gap-4 group/item">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/item:border-teal-500/50 transition-colors">
                  <ArrowRightLeft size={18} className="text-teal-400" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white">Spread</p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tight mt-0.5">The gap formed by liquidity depth</p>
                </div>
              </div>
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
  );
};

/**
 * 0.2 - Order Matching
 * Visualizes the interaction between Bids and Asks
 */
export const OrderMatchingVisual = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-4 relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative">
        
        {/* Buyers / Bids (Left) */}
        <div className="space-y-4">
          <div className="text-center mb-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 mb-1">Buyers</h4>
            <span className="text-sm font-black text-slate-900 uppercase tracking-tight">Bid Side</span>
          </div>
          
          {[99.90, 99.80, 99.70].map((price, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white border border-emerald-100 shadow-sm group transition-all hover:border-emerald-300">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Bid</span>
              <span className="text-sm font-black text-emerald-600 font-mono">{price.toFixed(2)}</span>
            </div>
          ))}
          
          <div className="flex flex-col items-center gap-2 pt-4">
            <div className="p-3 rounded-full bg-emerald-50 text-emerald-500 animate-bounce">
              <ArrowRightLeft size={16} className="-rotate-45" />
            </div>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Want to buy</p>
          </div>
        </div>

        {/* Center: Matching & Interaction (Center) */}
        <div className="flex flex-col items-center gap-8 py-10">
          {/* Interaction Zone */}
          <div className="relative w-full">
            <div className="absolute inset-0 rounded-[2.5rem] bg-teal-500/5 blur-xl" />
            <div className="relative p-6 rounded-[2.5rem] bg-[var(--ln-navy-900)] text-white shadow-2xl border border-teal-500/20 text-center space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center mx-auto border border-teal-500/30">
                <RefreshCcw size={24} className="animate-spin-slow" />
              </div>
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-teal-400/80">Matching Point</h5>
              <p className="text-[11px] font-bold text-white/90 leading-relaxed uppercase tracking-tight">
                Compatible orders meet
              </p>
            </div>
          </div>

          {/* Aggressive Action Overlay (Scenario) */}
          <div className="w-full p-5 rounded-[2rem] bg-emerald-50 border-2 border-emerald-500/30 shadow-lg relative group overflow-hidden">
             <div className="absolute top-0 right-0 p-2 text-emerald-500 opacity-20">
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

          {/* Transaction Result */}
          <div className="w-full flex flex-col items-center gap-2">
            <div className="h-8 w-0.5 bg-slate-100" />
            <div className="px-6 py-3 rounded-full bg-slate-900 text-white border border-white/10 shadow-xl flex items-center gap-3">
              <CheckCircle2 size={14} className="text-emerald-400" />
              <span className="text-[10px] font-black uppercase tracking-widest">Transaction Recorded</span>
            </div>
          </div>
        </div>

        {/* Sellers / Asks (Right) */}
        <div className="space-y-4">
          <div className="text-center mb-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-rose-600 mb-1">Sellers</h4>
            <span className="text-sm font-black text-slate-900 uppercase tracking-tight">Ask Side</span>
          </div>
          
          {[100.10, 100.20, 100.30].map((price, i) => (
            <div key={i} className={`flex items-center justify-between p-4 rounded-2xl border shadow-sm group transition-all ${i === 0 ? 'bg-rose-50 border-rose-300' : 'bg-white border-rose-100 hover:border-rose-300'}`}>
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
            <div className="p-3 rounded-full bg-rose-50 text-rose-500 animate-bounce">
              <ArrowRightLeft size={16} className="rotate-45" />
            </div>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Want to sell</p>
          </div>
        </div>

      </div>

      {/* Output Section */}
      <div className="mt-12 flex flex-col items-center">
        <div className="h-10 w-0.5 bg-slate-100" />
        <div className="w-full max-w-md p-6 rounded-[2.5rem] bg-white border border-teal-100 shadow-xl flex items-center gap-6 relative overflow-hidden group">
          <div className="absolute inset-0 bg-teal-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-500 flex items-center justify-center border border-teal-100 shrink-0 relative z-10">
            <BarChart3 size={28} />
          </div>
          <div className="relative z-10">
            <h5 className="text-[10px] font-black uppercase tracking-widest text-teal-600 mb-1">Result</h5>
            <p className="text-base font-black text-slate-900 uppercase leading-none">Price Update</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight mt-2">The chart prints a new price point</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 0.1 - Academy Path
 * Introduction to the buyer-seller matching engine
 */
export const MarketMechanismVisual = () => {
  return (
    <div className="w-full max-w-5xl mx-auto py-6 px-2 relative">
      {/* Horizontal Connector (Desktop) */}
      <div className="hidden md:block absolute top-[75px] left-[15%] right-[15%] h-0.5 bg-slate-100 -z-10" />
      
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-4 relative">
        
        {/* Buyers (Left) */}
        <div className="w-full md:w-[28%] order-2 md:order-1">
          <div className="flex flex-col items-center p-5 rounded-[2rem] bg-white border border-emerald-100 shadow-lg shadow-emerald-500/5 relative group transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center mb-3">
              <Users size={20} />
            </div>
            <span className="text-xs font-black text-slate-900 uppercase tracking-tight">Buyers</span>
            <p className="text-[9px] font-bold text-slate-400 mt-1 uppercase tracking-widest text-center leading-tight">Place buy orders</p>
            
            {/* Arrow Right (Desktop) */}
            <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2">
              <ChevronRight size={16} className="text-slate-200" />
            </div>
          </div>
        </div>

        {/* Center: Matching Engine + Downward Flow (Center) */}
        <div className="w-full md:w-[36%] order-1 md:order-2 flex flex-col items-center gap-4">
          <div className="relative w-full">
            <div className="absolute inset-0 rounded-[2rem] bg-teal-500/5 animate-pulse" />
            <div className="relative flex flex-col items-center p-6 rounded-[2rem] bg-[var(--ln-navy-900)] text-white shadow-xl border border-teal-500/20 w-full text-center">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center mb-3 border border-teal-500/30">
                <Cpu size={22} className="animate-spin-slow" />
              </div>
              <span className="text-sm font-black uppercase tracking-widest mb-1 text-white">Matching Engine</span>
              <p className="text-[9px] font-bold text-teal-400/80 uppercase tracking-widest">Orders meet at a price</p>
            </div>
          </div>

          {/* Downward Connector */}
          <div className="flex flex-col items-center -my-2">
            <div className="h-6 w-0.5 bg-slate-100" />
            <div className="w-2 h-2 rotate-45 border-r border-b border-slate-100 -mt-1" />
          </div>

          {/* Transaction (Below Engine) */}
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-50 border border-emerald-100 shadow-sm w-full">
            <div className="w-8 h-8 rounded-lg bg-white border border-emerald-100 flex items-center justify-center text-emerald-500 shrink-0">
              <CheckCircle2 size={16} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-900 uppercase leading-none">Transaction</p>
              <p className="text-[8px] font-bold text-slate-400 uppercase tracking-tight mt-1">A trade happens</p>
            </div>
          </div>

          {/* Final Output (Below Transaction) */}
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-teal-50 border border-teal-100 shadow-sm w-full">
            <div className="w-8 h-8 rounded-lg bg-white border border-teal-100 flex items-center justify-center text-teal-500 shrink-0">
              <BarChart3 size={16} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-900 uppercase leading-none">Price Chart</p>
              <p className="text-[8px] font-bold text-slate-400 uppercase tracking-tight mt-1">Records completed interactions</p>
            </div>
          </div>
        </div>

        {/* Sellers (Right) */}
        <div className="w-full md:w-[28%] order-3">
          <div className="flex flex-col items-center p-5 rounded-[2rem] bg-white border border-rose-100 shadow-lg shadow-rose-500/5 relative group transition-all">
            {/* Arrow Left (Desktop) */}
            <div className="hidden md:block absolute top-1/2 -left-4 -translate-y-1/2">
              <ChevronLeft size={16} className="text-slate-200" />
            </div>
            
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center mb-3">
              <Users size={20} />
            </div>
            <span className="text-xs font-black text-slate-900 uppercase tracking-tight">Sellers</span>
            <p className="text-[9px] font-bold text-slate-400 mt-1 uppercase tracking-widest text-center leading-tight">Place sell orders</p>
          </div>
        </div>

      </div>
    </div>
  );
};

/**
 * 0.1 - Academy Path
 * Comparison of Random vs Structured Learning
 */
export const AcademyPath = () => {
  return (
    <div className="my-2 flex flex-col gap-4 relative max-w-4xl mx-auto">
      {/* Background connector line */}
      <div className="absolute left-[38px] md:left-[52px] top-6 bottom-6 w-0.5 bg-slate-100 -z-10 hidden md:block" />

      {/* Random Side (Row 1) */}
      <div className="flex flex-col md:flex-row gap-4 relative">
        <div className="flex flex-col items-center shrink-0 w-full md:w-[104px]">
          <div className="p-3 rounded-[1.25rem] bg-rose-50 text-rose-400 shadow-sm border border-rose-100 z-10">
            <XCircle size={28} />
          </div>
        </div>
        
        <div className="flex-1 bg-white p-4 md:p-5 rounded-[1.5rem] border border-rose-100 shadow-sm space-y-3 relative">
          <div className="absolute top-1/2 -left-[13px] -translate-y-1/2 w-3 h-3 rotate-45 border-l border-b border-rose-100 bg-white hidden md:block" />
          
          <div className="space-y-0.5">
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-rose-500">The Random Learner</h4>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight italic">"Busy Activity, No Skill"</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-1.5">
            {["Scattered Videos", "Conflicting Tips", "Emotional Hype"].map((item, i) => (
              <React.Fragment key={i}>
                <span className="px-2.5 py-1 rounded-[1rem] bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-500">
                  {item}
                </span>
                {i < 2 && <ChevronRight size={14} className="text-rose-300 shrink-0" />}
              </React.Fragment>
            ))}
            <ChevronRight size={14} className="text-rose-300 shrink-0 mx-0.5" />
            <span className="px-3 py-1.5 rounded-xl bg-rose-50 border border-rose-100 text-[10px] font-extrabold text-rose-600 uppercase tracking-tight">
              Confusion
            </span>
          </div>

          <div className="pt-3 border-t border-slate-50 text-[11px] text-slate-500 font-medium leading-relaxed">
            The learner feels informed, but cannot explain what evidence they are looking for when the chart opens.
          </div>
        </div>
      </div>

      {/* Structured Side (Row 2) */}
      <div className="flex flex-col md:flex-row gap-4 relative">
        <div className="flex flex-col items-center shrink-0 w-full md:w-[104px]">
          <div className="p-3 rounded-[1.25rem] bg-[var(--ln-teal-soft)] text-[var(--ln-teal-500)] shadow-sm border border-emerald-100 z-10">
            <CheckCircle2 size={28} />
          </div>
        </div>
        
        <div className="flex-1 bg-white p-4 md:p-5 rounded-[1.5rem] border border-emerald-100 shadow-lg shadow-emerald-500/5 space-y-3 relative">
          <div className="absolute top-1/2 -left-[13px] -translate-y-1/2 w-3 h-3 rotate-45 border-l border-b border-emerald-100 bg-white hidden md:block" />
          
          <div className="space-y-0.5">
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-[var(--ln-teal-500)]">The Lurnava Path</h4>
            <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-tight italic">"Structured Skill Building"</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-1.5">
            {["One Concept", "Deliberate Practice", "Mission Check-ride"].map((item, i) => (
              <React.Fragment key={i}>
                <span className="px-2.5 py-1 rounded-[1rem] bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-500">
                  {item}
                </span>
                {i < 2 && <ChevronRight size={14} className="text-emerald-300 shrink-0" />}
              </React.Fragment>
            ))}
            <ChevronRight size={14} className="text-emerald-300 shrink-0 mx-0.5" />
            <span className="px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-100 text-[10px] font-extrabold text-emerald-600 uppercase tracking-tight shadow-sm">
              Clarity
            </span>
          </div>

          <div className="pt-3 border-t border-slate-50 text-[11px] text-slate-600 font-bold leading-relaxed">
            Every session adds a repeatable brick to the foundation. Confidence comes from evidence, not emotion.
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 0.1 - Lurnava Learning Loop
 * Interactive 4-step loop refined
 */
export const LearningLoop = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      title: "Learn",
      icon: BookOpen,
      what: "You study one concept and understand the language before applying it.",
      why: "Without a clear concept, every chart movement feels random.",
      skipped: "You start copying shapes without knowing what they mean.",
      action: "Name the concept in your own words before moving to practice.",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      title: "Practice",
      icon: MapPin,
      what: "You apply the concept in a controlled training environment.",
      why: "Practice reveals whether you can recognize the idea outside the lesson text.",
      skipped: "The concept stays theoretical and may feel clear only because the explanation was easy to read.",
      action: "Complete one focused practice action using the concept you just studied.",
      color: "text-teal-500",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200"
    },
    {
      title: "Mission",
      icon: Target,
      what: "You prove recognition under a slightly more demanding condition.",
      why: "A mission checks whether the learner can stay structured when the screen feels less guided.",
      skipped: "The learner may think they understand, but never test that understanding under pressure.",
      action: "Complete the mission and pay attention to what felt clear or unclear.",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      title: "Review",
      icon: ClipboardCheck,
      what: "You write what you saw, what evidence supported it, and what confused you.",
      why: "Review turns practice into learning data.",
      skipped: "The same mistake can repeat because the learner has no record of their reasoning.",
      action: "Save a review note before treating the session as complete.",
      color: "text-amber-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200"
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {/* Interactive Loop */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-2.5">
        {steps.map((step, i) => {
          const Icon = step.icon;
          const isActive = activeStep === i;
          
          return (
            <React.Fragment key={i}>
              <button
                onClick={() => setActiveStep(i)}
                className={cn(
                  "relative flex flex-col items-center gap-1.5 p-3 rounded-[1.25rem] border-2 transition-all duration-500 w-full md:w-1/4 group",
                  isActive 
                    ? cn("scale-105 shadow-xl bg-white", step.borderColor)
                    : "bg-white/40 border-transparent opacity-60 hover:opacity-100 hover:bg-white/80 hover:shadow-lg"
                )}
              >
                <div className={cn(
                  "p-2.5 rounded-xl transition-transform duration-500 group-hover:scale-110",
                  isActive ? cn("shadow-inner", step.bgColor, step.color) : "bg-slate-100 text-slate-400"
                )}>
                  <Icon size={18} />
                </div>
                <span className={cn(
                  "text-[9px] font-extrabold uppercase tracking-widest transition-colors",
                  isActive ? step.color : "text-slate-400"
                )}>
                  {step.title}
                </span>
                
                {isActive && (
                  <div className={cn("absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b-2 border-r-2 rotate-45", step.borderColor)} />
                )}
              </button>
              
              {i < steps.length - 1 && (
                <div className="hidden md:flex text-slate-200">
                  <ChevronRight size={16} strokeWidth={3} />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Detail Panel */}
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
        <div className="bg-white rounded-[1.5rem] border border-slate-100 shadow-xl overflow-hidden">
          <div className={cn("px-5 py-2.5 border-b flex items-center justify-between", steps[activeStep].bgColor, steps[activeStep].borderColor.replace("border-", "border-b-"))}>
             <div className="flex items-center gap-2">
                <div className={cn("p-1.5 rounded-lg bg-white", steps[activeStep].color)}>
                  {React.createElement(steps[activeStep].icon, { size: 12 })}
                </div>
                <span className={cn("text-[9px] font-extrabold uppercase tracking-widest", steps[activeStep].color)}>
                  Phase Detail: {steps[activeStep].title}
                </span>
             </div>
             <div className="px-2 py-0.5 rounded-full bg-white/50 text-[8px] font-bold text-slate-500 uppercase tracking-tight">
               Step {activeStep + 1} of 4
             </div>
          </div>
          
          <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-4">
              <div className="space-y-1.5">
                <h5 className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400">What happens here</h5>
                <p className="text-[13px] font-bold text-[var(--ln-navy-900)] leading-relaxed">
                  {steps[activeStep].what}
                </p>
              </div>
              <div className="space-y-1.5">
                <h5 className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400">Why it matters</h5>
                <p className="text-[13px] font-medium text-slate-600 leading-relaxed">
                  {steps[activeStep].why}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-rose-50/50 border border-rose-100 space-y-1.5">
                <h5 className="text-[9px] font-extrabold uppercase tracking-widest text-rose-500">If skipped</h5>
                <p className="text-[12px] font-medium text-rose-700 leading-relaxed">
                  {steps[activeStep].skipped}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-100 space-y-1.5">
                <h5 className="text-[9px] font-extrabold uppercase tracking-widest text-emerald-600">Learner Action</h5>
                <p className="text-[13px] font-bold text-emerald-900 leading-relaxed italic">
                  {steps[activeStep].action}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 0.1 - System Map (The Cockpit)
 * Connected visual of training instruments
 */
export const SystemMap = () => {
  const instruments = [
    { id: "learn", title: "Modules", phase: "01 Learn", role: "Learn the concept, terms, and examples before applying them.", icon: <BookOpen size={18} />, color: "blue" },
    { id: "check", title: "Tasks", phase: "02 Check", role: "Check whether you understand the mechanism behind the concept.", icon: <Zap size={18} />, color: "amber" },
    { id: "practice", title: "Lab", phase: "03 Practice", role: "Apply one concept inside a controlled chart exercise.", icon: <MapPin size={18} />, color: "teal" },
    { id: "study", title: "Scenarios", phase: "04 Study", role: "Study historical market case files and identify what evidence mattered.", icon: <Layers size={18} />, color: "purple" },
    { id: "record", title: "Journal", phase: "05 Record", role: "Record your reading, evidence, and review condition.", icon: <ClipboardCheck size={18} />, color: "indigo" },
    { id: "review", title: "Nava", phase: "06 Review", role: "Ask better questions; final judgment stays with you.", icon: <MessageSquare size={18} />, color: "emerald" }
  ];

  return (
    <div className="my-2 p-6 md:p-10 bg-slate-900 rounded-[3rem] border border-slate-800 shadow-2xl relative overflow-hidden max-w-5xl mx-auto">
      {/* HUD Background elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-500/20 via-transparent to-transparent" />
        <div className="h-full w-full grid grid-cols-8 gap-4 p-8">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="border-r border-b border-white/10" />
          ))}
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Central Hub */}
        <div className="mb-12 relative">
          <div className="w-24 h-24 rounded-full bg-teal-500/10 border-2 border-teal-500/30 flex items-center justify-center animate-pulse">
            <div className="w-16 h-16 rounded-full bg-teal-500/20 border border-teal-500/50 flex items-center justify-center">
              <Target className="text-teal-400" size={32} />
            </div>
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-extrabold text-teal-400 uppercase tracking-[0.2em]">
            Training Session
          </div>
        </div>

        {/* Circular Instruments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full relative">
          {/* Connecting Lines (Visual only for layout) */}
          <div className="absolute inset-0 pointer-events-none opacity-20 hidden lg:block">
            <svg className="w-full h-full" viewBox="0 0 800 200">
              <path d="M150,100 L400,100 M400,100 L650,100" stroke="white" strokeWidth="1" fill="none" strokeDasharray="4 4" />
            </svg>
          </div>

          {instruments.map((item, i) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group relative overflow-hidden"
            >
              <div className={cn(
                "mb-4 p-2.5 rounded-xl w-fit transition-all",
                item.color === 'blue' ? "bg-blue-500/20 text-blue-400 group-hover:bg-blue-500 group-hover:text-white" :
                item.color === 'amber' ? "bg-amber-500/20 text-amber-400 group-hover:bg-amber-500 group-hover:text-white" :
                item.color === 'teal' ? "bg-teal-500/20 text-teal-400 group-hover:bg-teal-500 group-hover:text-white" :
                item.color === 'purple' ? "bg-purple-500/20 text-purple-400 group-hover:bg-purple-500 group-hover:text-white" :
                item.color === 'indigo' ? "bg-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white" :
                "bg-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white"
              )}>
                {item.icon}
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-[10px] font-extrabold text-white uppercase tracking-wider">
                    <span className="text-teal-400 mr-2">{item.phase}</span>
                    <span className="opacity-40 mx-1">—</span>
                    <span className="ml-2">{item.title}</span>
                  </h4>
                  <ChevronRight size={14} className="text-white/20 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-[10px] text-slate-400 font-medium leading-relaxed group-hover:text-slate-300 transition-colors">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Flow Connector */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 px-4 py-3 rounded-full bg-white/5 border border-white/10">
          {["Learn", "Check", "Practice", "Study", "Record", "Review"].map((step, i) => (
            <React.Fragment key={step}>
              <span className="text-[10px] font-extrabold text-teal-400 uppercase tracking-widest">{step}</span>
              {i < 5 && <ChevronRight size={14} className="text-white/20" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};


/**
 * 0.1 - Practice Timeline (One Hour of Bad Practice)
 * Comparative timeline of practice quality
 */
export const PracticeTimeline = () => {
  const leftTimeline = [
    { time: "00–10", task: "Opens chart and jumps ideas" },
    { time: "10–20", task: "Watches candles without a plan" },
    { time: "20–35", task: "Clicks because movement feels fast" },
    { time: "35–50", task: "Switches method after uncertainty" },
    { time: "50–60", task: "Closes with no note or review condition" }
  ];

  const rightTimeline = [
    { time: "00–10", task: "Chooses one concept" },
    { time: "10–25", task: "Studies one clear situation" },
    { time: "25–40", task: "Completes one focused drill" },
    { time: "40–55", task: "Writes one review note" },
    { time: "55–60", task: "Defines what to review next" }
  ];

  return (
    <div className="my-2 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto w-full">
      {/* Left: Junk Practice */}
      <div className="p-6 rounded-[2.5rem] bg-rose-50/30 border border-rose-100 flex flex-col h-full">
        <div className="mb-6 space-y-1">
          <div className="flex items-center gap-2">
            <XCircle className="text-rose-500" size={18} />
            <span className="text-[10px] font-extrabold text-rose-500 uppercase tracking-widest">Junk Practice</span>
          </div>
          <h4 className="text-sm font-bold text-slate-800">High Activity. Low Learning.</h4>
        </div>

        <div className="flex-1 space-y-4">
          <div className="grid grid-cols-2 gap-2 mb-6">
            <div className="p-3 rounded-2xl bg-white border border-rose-100">
              <div className="text-[9px] font-extrabold text-slate-400 uppercase">Actions</div>
              <div className="text-xl font-black text-rose-500">14</div>
            </div>
            <div className="p-3 rounded-2xl bg-white border border-rose-100">
              <div className="text-[9px] font-extrabold text-slate-400 uppercase">Review Notes</div>
              <div className="text-xl font-black text-slate-300">0</div>
            </div>
          </div>

          <div className="space-y-3 relative">
            <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-rose-100/50" />
            {leftTimeline.map((step, i) => (
              <div key={i} className="flex gap-4 relative">
                <div className="w-6 h-6 rounded-full bg-white border-2 border-rose-200 flex items-center justify-center shrink-0 z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-[9px] font-extrabold text-rose-400 uppercase tracking-tighter">{step.time}</div>
                  <div className="text-[11px] text-slate-600 font-bold">{step.task}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 p-3 rounded-xl bg-rose-500/10 border border-rose-200 text-[10px] font-bold text-rose-600 text-center uppercase tracking-wider">
          Outcome: No useful learning record
        </div>
      </div>

      {/* Right: Deliberate Practice */}
      <div className="p-6 rounded-[2.5rem] bg-emerald-50/30 border border-emerald-100 flex flex-col h-full shadow-sm">
        <div className="mb-6 space-y-1">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-emerald-500" size={18} />
            <span className="text-[10px] font-extrabold text-emerald-500 uppercase tracking-widest">Deliberate Practice</span>
          </div>
          <h4 className="text-sm font-bold text-slate-800">Less Activity. More Learning.</h4>
        </div>

        <div className="flex-1 space-y-4">
          <div className="grid grid-cols-2 gap-2 mb-6">
            <div className="p-3 rounded-2xl bg-white border border-emerald-100">
              <div className="text-[9px] font-extrabold text-slate-400 uppercase">Focus</div>
              <div className="text-xl font-black text-emerald-500">1 Concept</div>
            </div>
            <div className="p-3 rounded-2xl bg-white border border-emerald-100">
              <div className="text-[9px] font-extrabold text-slate-400 uppercase">Review Notes</div>
              <div className="text-xl font-black text-emerald-500">1</div>
            </div>
          </div>

          <div className="space-y-3 relative">
            <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-emerald-100/50" />
            {rightTimeline.map((step, i) => (
              <div key={i} className="flex gap-4 relative">
                <div className="w-6 h-6 rounded-full bg-white border-2 border-emerald-200 flex items-center justify-center shrink-0 z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-[9px] font-extrabold text-emerald-400 uppercase tracking-tighter">{step.time}</div>
                  <div className="text-[11px] text-slate-800 font-bold">{step.task}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 p-3 rounded-xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 text-[10px] font-bold text-center uppercase tracking-wider">
          Outcome: 1 Clear Review Note Created
        </div>
      </div>
    </div>
  );
};

/**
 * 0.1 - Decision Gate
 * Coded Checkpoint Panel
 */
export const DecisionGate = () => {
  const questions = [
    { 
      num: "01", 
      title: "Observation", 
      desc: "What did I observe?", 
      detail: "Identify the specific structural concept.",
      color: "blue"
    },
    { 
      num: "02", 
      title: "Evidence", 
      desc: "What objective facts support it?", 
      detail: "List the facts, not your feelings.",
      color: "amber"
    },
    { 
      num: "03", 
      title: "Review Condition", 
      desc: "What would make me re-check this?", 
      detail: "Define the point of invalidation.",
      color: "purple"
    }
  ];

  return (
    <div className="my-2 space-y-8 max-w-5xl mx-auto w-full">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-extrabold text-slate-500 uppercase tracking-widest">
          System Checkpoint
        </div>
        <h3 className="text-xl font-black text-slate-900 uppercase">Can this reading pass the gate?</h3>
      </div>

      {/* The Three Questions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {questions.map((q, i) => (
          <div key={i} className="group p-6 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
            <div className={cn(
              "w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black mb-4",
              q.color === "blue" ? "bg-blue-50 text-blue-600" :
              q.color === "amber" ? "bg-amber-50 text-amber-600" :
              "bg-purple-50 text-purple-600"
            )}>
              {q.num}
            </div>
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight mb-1">{q.title}</h4>
            <p className="text-xs text-slate-800 font-bold mb-2">{q.desc}</p>
            <p className="text-[10px] text-slate-400 font-medium leading-relaxed">{q.detail}</p>
          </div>
        ))}
      </div>

      {/* Outcomes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {/* Reject Panel */}
        <div className="p-8 rounded-[2.5rem] bg-rose-50/50 border border-rose-100 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-rose-500 text-white flex items-center justify-center shadow-lg shadow-rose-500/20">
                <XCircle size={20} />
              </div>
              <div>
                <span className="text-[9px] font-extrabold text-rose-500 uppercase tracking-widest block">Outcome: Reject</span>
                <h4 className="text-base font-black text-slate-900 uppercase">Weak Logic</h4>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="p-4 rounded-2xl bg-white/60 border border-rose-100 text-xs font-bold text-slate-600 italic">
              "It looks strong... I feel like it may go... The chart is moving fast."
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold text-rose-600">
              <AlertCircle size={14} />
              No observation. No evidence. No review condition.
            </div>
          </div>
        </div>

        {/* Pass Panel */}
        <div className="p-8 rounded-[2.5rem] bg-emerald-50/50 border border-emerald-100 flex flex-col gap-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <span className="text-[9px] font-extrabold text-emerald-500 uppercase tracking-widest block">Outcome: Pass</span>
                <h4 className="text-base font-black text-slate-900 uppercase">Valid Reading</h4>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="p-4 rounded-2xl bg-white border border-emerald-100 text-xs font-bold text-slate-800 italic">
              "I observed price moving in a range. Recent highs and lows are holding. I will review if price closes outside and holds."
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-600">
              <CheckCircle2 size={14} />
              Observation + Evidence + Review Condition.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 0.3 - Candle Anatomy
 * Visual diagram with labels
 */
export const CandleDiagram = () => {
  return (
    <div className="my-6 p-8 md:p-12 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col lg:flex-row items-center gap-12 overflow-hidden">
      <div className="relative w-48 h-80 shrink-0">
        {/* Upper Wick */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-20 bg-slate-300 rounded-full" />
        {/* Body */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-24 h-40 bg-emerald-500 rounded-xl shadow-lg border-2 border-emerald-400" />
        {/* Lower Wick */}
        <div className="absolute top-60 left-1/2 -translate-x-1/2 w-1 h-20 bg-slate-300 rounded-full" />
        
        {/* Label Lines */}
        <div className="absolute top-0 left-1/2 w-20 h-px bg-slate-200 -translate-y-px" />
        <div className="absolute top-20 left-1/2 w-20 h-px bg-slate-200 -translate-y-px" />
        <div className="absolute top-60 left-1/2 w-20 h-px bg-slate-200 -translate-y-px" />
        <div className="absolute top-80 left-1/2 w-20 h-px bg-slate-200 -translate-y-px" />
        
        {/* Center line */}
        <div className="absolute top-[50%] left-[calc(50%-48px)] w-[96px] h-px bg-emerald-500/20" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
          <div className="flex items-center gap-2 text-[10px] font-extrabold text-emerald-600 uppercase tracking-widest">
            <ArrowUp size={12} /> High
          </div>
          <p className="text-xs text-slate-500 font-medium leading-relaxed">The absolute highest price reached during this period.</p>
        </div>
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
          <div className="flex items-center gap-2 text-[10px] font-extrabold text-emerald-600 uppercase tracking-widest">
            <TrendingUp size={12} /> Close
          </div>
          <p className="text-xs text-slate-500 font-medium leading-relaxed">Where price ended. Higher than Open = Bullish (Green).</p>
        </div>
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
          <div className="flex items-center gap-2 text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
            <Info size={12} /> Open
          </div>
          <p className="text-xs text-slate-500 font-medium leading-relaxed">Where the price started when the clock began.</p>
        </div>
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
          <div className="flex items-center gap-2 text-[10px] font-extrabold text-emerald-600 uppercase tracking-widest">
            <ArrowDown size={12} /> Low
          </div>
          <p className="text-xs text-slate-500 font-medium leading-relaxed">The absolute lowest price reached during this period.</p>
        </div>
        <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-1 col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 text-[10px] font-extrabold text-emerald-700 uppercase tracking-widest">
             Body & Wicks
          </div>
          <p className="text-xs text-slate-600 font-medium leading-relaxed">The <strong>Body</strong> shows commitment. The <strong>Wicks</strong> show prices that were tested but rejected.</p>
        </div>
      </div>
    </div>
  );
};

/**
 * 0.14 - Note Comparison
 * Card-based comparison
 */
export const NoteComparison = () => {
  return (
    <div className="my-6 space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Weak Note */}
        <div className="relative group p-8 rounded-[2rem] border border-rose-100 bg-white shadow-sm hover:shadow-md transition-all">
          <div className="absolute top-6 right-6 p-2 rounded-full bg-rose-50 text-rose-500">
            <XCircle size={20} />
          </div>
          <div className="space-y-6">
            <span className="text-[10px] font-extrabold text-rose-500 uppercase tracking-[0.2em]">Weak Note</span>
            <div className="p-6 rounded-2xl bg-rose-50/30 border border-rose-100/50 font-mono text-xs text-slate-400 leading-relaxed italic">
              "I think it's going up because it looks cheap. Buying a lot now to catch the move. I hope it works out."
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-300" />
                Vague and emotional
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-300" />
                No objective evidence
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-300" />
                No exit logic (Review Condition)
              </div>
            </div>
          </div>
        </div>

        {/* Strong Note */}
        <div className="relative group p-8 rounded-[2rem] border border-emerald-100 bg-white shadow-lg transition-all ring-1 ring-emerald-500/10">
          <div className="absolute top-6 right-6 p-2 rounded-full bg-emerald-50 text-emerald-500">
            <CheckCircle2 size={20} />
          </div>
          <div className="space-y-6">
            <span className="text-[10px] font-extrabold text-emerald-500 uppercase tracking-[0.2em]">Strong Note</span>
            <div className="p-6 rounded-2xl bg-emerald-50/30 border border-emerald-100/50 space-y-2">
              <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-700">
                <FileText size={12} /> EUR/USD - LONDON SESSION
              </div>
              <div className="text-xs text-emerald-900 leading-relaxed font-mono font-medium">
                "Context: Daily Bullish. Evidence: 15m structural break + retest of swing low. Action: Simulated buy. Review Condition: Close below 1.0820."
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs text-slate-600 font-bold">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Specific structural facts
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-600 font-bold">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Evidence-stack logic
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-600 font-bold">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Defined Review Condition
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center p-6 rounded-2xl bg-blue-50 border border-blue-100 max-w-2xl mx-auto">
        <p className="text-xs text-blue-800 font-bold leading-relaxed italic">
          "A professional note is a mirror of your logic, not a diary of your feelings."
        </p>
      </div>
    </div>
  );
};
/**
 * 0.1 - Behavior Flow
 * Comparison of Random vs Trained learning behaviors
 */
export const BehaviorFlow = () => {
  const leftSteps = [
    { label: "Consumes content", desc: "Scattered videos & tips" },
    { label: "Gets excited", desc: "Emotional hype" },
    { label: "Changes method", desc: "Searching for 'secrets'" },
    { label: "Acts without evidence", desc: "Reactive guessing" },
    { label: "Avoids review", desc: "No record of logic" },
    { label: "Repeats confusion", desc: "The cycle restarts" }
  ];

  const rightSteps = [
    { label: "Studies one concept", desc: "Focused manual study" },
    { label: "Observes one condition", desc: "Finding structural facts" },
    { label: "Practices deliberately", desc: "Controlled simulation" },
    { label: "Records reasoning", desc: "Journal entry data" },
    { label: "Reviews weak points", desc: "Logic audit" },
    { label: "Improves next session", desc: "Repeatable skill" }
  ];

  return (
    <div className="my-2 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
      {/* Random Path */}
      <div className="relative p-6 rounded-[2.5rem] bg-rose-50/30 border border-rose-100 flex flex-col space-y-4">
        <div className="flex items-center gap-3 mb-2 px-2">
          <div className="p-2 rounded-xl bg-rose-100 text-rose-500">
            <XCircle size={18} />
          </div>
          <div className="space-y-0.5">
            <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-rose-600">Random Learner Loop</h4>
            <p className="text-[9px] font-bold text-rose-400 uppercase tracking-tight">Reactive Behavior</p>
          </div>
        </div>

        <div className="space-y-2 relative">
          {leftSteps.map((step, i) => (
            <div key={i} className="flex items-start gap-3 group">
              <div className="flex flex-col items-center">
                <div className="w-5 h-5 rounded-full bg-rose-100 border border-rose-200 flex items-center justify-center text-[9px] font-extrabold text-rose-500 z-10 group-hover:bg-rose-200 transition-colors">
                  {i + 1}
                </div>
                {i < leftSteps.length - 1 && <div className="w-0.5 h-6 bg-rose-100 -mt-1 -mb-1" />}
              </div>
              <div className="space-y-0.5 pt-0.5">
                <p className="text-[11px] font-bold text-slate-700 leading-none">{step.label}</p>
                <p className="text-[9px] font-medium text-slate-400">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-4 border-t border-rose-100/50">
          <div className="p-3 rounded-2xl bg-rose-50/50 border border-rose-100 text-center">
            <p className="text-[10px] font-extrabold text-rose-600 uppercase tracking-tight">Outcome: Feels active, but cannot measure improvement.</p>
          </div>
        </div>
      </div>

      {/* Trained Path */}
      <div className="relative p-6 rounded-[2.5rem] bg-emerald-50/30 border border-emerald-100 flex flex-col space-y-4 shadow-sm ring-1 ring-emerald-500/5">
        <div className="flex items-center gap-3 mb-2 px-2">
          <div className="p-2 rounded-xl bg-emerald-100 text-emerald-500">
            <CheckCircle2 size={18} />
          </div>
          <div className="space-y-0.5">
            <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-600">Lurnava Learner Loop</h4>
            <p className="text-[9px] font-bold text-emerald-400 uppercase tracking-tight">Trained Behavior</p>
          </div>
        </div>

        <div className="space-y-2 relative">
          {rightSteps.map((step, i) => (
            <div key={i} className="flex items-start gap-3 group">
              <div className="flex flex-col items-center">
                <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-[9px] font-extrabold text-emerald-500 z-10 group-hover:bg-emerald-200 transition-colors">
                  {i + 1}
                </div>
                {i < rightSteps.length - 1 && <div className="w-0.5 h-6 bg-emerald-100 -mt-1 -mb-1" />}
              </div>
              <div className="space-y-0.5 pt-0.5">
                <p className="text-[11px] font-bold text-[var(--ln-navy-900)] leading-none">{step.label}</p>
                <p className="text-[9px] font-medium text-slate-500">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-4 border-t border-emerald-100/50">
          <div className="p-3 rounded-2xl bg-emerald-100/50 border border-emerald-200 text-center">
            <p className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-tight">Outcome: Builds repeatable judgment.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 0.1 - Hype Trap Path
 * Decision flow for avoiding hype
 */

/**
 * 0.1 - Orientation Debrief
 * Final module summary visual
 */
export const OrientationDebrief = () => {
  return (
    <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-teal-500 flex items-center justify-center text-white shadow-lg shadow-teal-500/20">
            <ClipboardCheck size={20} />
          </div>
          <h4 className="text-sm font-extrabold uppercase tracking-widest text-slate-900">Training Outcomes</h4>
        </div>
        <div className="space-y-4">
          {[
            "Distinguish noise from evidence",
            "Follow the 4-step training loop",
            "Navigate the training cockpit",
            "Commit to deliberate practice"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-xs font-medium text-slate-600">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              {item}
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-10 rounded-[2.5rem] bg-[var(--ln-navy-900)] text-white shadow-xl flex flex-col justify-center items-center text-center space-y-6">
        <div className="w-20 h-20 rounded-[2rem] bg-white/10 flex items-center justify-center text-teal-400 mb-2">
          <Target size={40} />
        </div>
        <h4 className="text-xl font-extrabold uppercase tracking-tight">Mission Ready</h4>
        <p className="text-xs text-slate-400 font-medium leading-relaxed max-w-[200px]">
          You are now prepared to begin Level 0 structural training.
        </p>
      </div>
    </div>
  );
};

/**
 * 0.1 - Forex Relationship
 * Visualizing Base vs Quote interaction
 */
export const ForexRelationship = () => {
  return (
    <div className="my-2 space-y-10 max-w-4xl mx-auto w-full text-left">
      {/* The Core Relationship */}
      <div className="relative p-10 bg-white rounded-[3rem] border border-slate-200 shadow-xl overflow-hidden text-center">
        <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none rotate-12">
          <Globe size={160} />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 relative z-10">
          {/* Base */}
          <div className="space-y-4">
            <div className="w-32 h-32 rounded-[2.5rem] bg-slate-900 text-white flex flex-col items-center justify-center shadow-2xl border-4 border-slate-800">
              <span className="text-3xl font-black tracking-tighter">EUR</span>
              <span className="text-[10px] font-bold opacity-50 uppercase tracking-widest mt-1 italic">Base</span>
            </div>
            <div className="text-center">
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">The Item</div>
              <p className="text-[11px] text-slate-800 font-bold leading-tight">Euro being priced</p>
            </div>
          </div>

          {/* Separator / Divider */}
          <div className="hidden md:flex flex-col items-center gap-2">
            <div className="h-10 w-px bg-slate-200" />
            <div className="text-xl font-black text-slate-300">/</div>
            <div className="h-10 w-px bg-slate-200" />
          </div>
          <div className="md:hidden text-2xl font-black text-slate-200 my-2">/</div>

          {/* Quote */}
          <div className="space-y-4">
            <div className="w-32 h-32 rounded-[2.5rem] bg-white text-slate-900 flex flex-col items-center justify-center shadow-xl border-4 border-slate-100">
              <span className="text-3xl font-black tracking-tighter">USD</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 italic">Quote</span>
            </div>
            <div className="text-center">
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">The Measuring Stick</div>
              <p className="text-[11px] text-slate-800 font-bold leading-tight">Dollar measuring it</p>
            </div>
          </div>
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
            { title: "EUR Strengthens", desc: "Base gets stronger", icon: <TrendingUp className="text-emerald-500" size={16} /> },
            { title: "USD Weakens", desc: "Quote gets weaker", icon: <TrendingDown className="text-rose-500" size={16} /> },
            { title: "Dual Force", desc: "Both happen together", icon: <Zap className="text-amber-500" size={16} /> }
          ].map((item, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center gap-4">
              <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div className="space-y-0.5 text-left">
                <h5 className="text-xs font-black text-slate-900 uppercase tracking-tight">{item.title}</h5>
                <p className="text-[10px] text-slate-500 font-bold">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Warning Box */}
      <div className="p-6 rounded-[2rem] bg-amber-50/50 border border-amber-100 flex items-start gap-4 shadow-sm">
        <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/20">
          <AlertCircle size={20} />
        </div>
        <div className="space-y-1 text-left">
          <h4 className="text-[10px] font-black text-amber-600 uppercase tracking-widest">Crucial Warning</h4>
          <p className="text-xs text-slate-800 font-bold leading-relaxed">
            A rising chart does not automatically prove the Base Currency (EUR) is strong. It may simply be the result of a collapsing Quote Currency (USD).
          </p>
        </div>
      </div>
    </div>
  );
};
/**
 * 0.1 - Forex Training Instruments
 * Visualizing the pre-reading checklist
 */
export const ForexInstrumentPanel = () => {
  const instruments = [
    {
      id: "pair",
      title: "Pair Identity",
      desc: "Base vs. Quote",
      details: "Identifying which is the item and which is the stick.",
      icon: <Globe size={18} className="text-slate-600" />,
      color: "border-slate-200",
      accent: "bg-slate-50"
    },
    {
      id: "usd",
      title: "USD Context",
      desc: "The Global Weather",
      details: "Is the Dollar strong, weak, or mixed across the market?",
      icon: <Zap size={18} className="text-amber-500" />,
      color: "border-amber-200",
      accent: "bg-amber-50/30"
    },
    {
      id: "session",
      title: "Session Context",
      desc: "Active Window",
      details: "Major markets (LDN, NY, TYO) currently active.",
      icon: <Clock size={18} className="text-emerald-500" />,
      color: "border-emerald-200",
      accent: "bg-emerald-50/30"
    },
    {
      id: "spread",
      title: "Spread / Activity",
      desc: "Reading Quality",
      details: "Is there enough participation for a clean reading?",
      icon: <Activity size={18} className="text-blue-500" />,
      color: "border-blue-200",
      accent: "bg-blue-50/30"
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
              <div key={item.id} className={cn("p-6 rounded-[2.5rem] bg-white border-2 shadow-xl transition-all hover:-translate-y-1", item.color)}>
                <div className="flex items-center gap-3 mb-3">
                  <div className={cn("w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 border border-slate-100", item.accent)}>
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
              </div>
            ))}
          </div>

          {/* Center Column: The Pair */}
          <div className="flex flex-col items-center justify-center order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-slate-900 to-slate-800 rounded-[3.5rem] blur-2xl opacity-10 group-hover:opacity-20 transition duration-1000" />
              <div className="relative w-52 h-52 rounded-[3.5rem] bg-slate-900 text-white flex flex-col items-center justify-center shadow-2xl border-4 border-slate-800 scale-105">
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
              <div key={item.id} className={cn("p-6 rounded-[2.5rem] bg-white border-2 shadow-xl transition-all hover:-translate-y-1", item.color)}>
                <div className="flex items-center gap-3 mb-3">
                  <div className={cn("w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 border border-slate-100", item.accent)}>
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
              </div>
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

/**
 * 0.1 - The One-Sided Mistake
 * Visualizing isolated vs contextual reading
 */
export const ForexContextComparison = () => {
  return (
    <div className="my-2 space-y-10 max-w-5xl mx-auto w-full text-left pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Left: Isolated Reading */}
        <div className="flex flex-col h-full bg-rose-50/30 rounded-[3rem] border border-rose-100/50 p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-2xl bg-rose-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-rose-500/20">
              <XCircle size={24} />
            </div>
            <div>
              <h4 className="text-[10px] font-black text-rose-500 uppercase tracking-widest">Mistake Pattern</h4>
              <h3 className="text-sm font-black text-slate-900 uppercase">Isolated Reading</h3>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center py-10 space-y-8">
            {/* The Single Pair */}
            <div className="w-full max-w-[240px] p-6 rounded-[2.5rem] bg-white border-2 border-slate-200 shadow-xl flex flex-col items-center">
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
              <p className="text-[11px] text-slate-500 font-bold max-w-[200px]">
                Problem: No other pairs checked. Assumption made on 50% of the data.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Contextual Reading */}
        <div className="flex flex-col h-full bg-emerald-50/30 rounded-[3rem] border border-emerald-100/50 p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/20">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <h4 className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Professional Logic</h4>
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
                <div key={i} className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col items-center gap-1">
                  <span className="text-xs font-black text-slate-900">{item.pair}</span>
                  {item.dir === "up" ? <TrendingUp size={16} className={item.color} /> : <TrendingDown size={16} className={item.color} />}
                </div>
              ))}
            </div>

            <div className="p-6 rounded-[2rem] bg-white border-2 border-emerald-100 shadow-xl space-y-3">
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
        </div>

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
  );
};

/**
 * 0.1 - Forex Mini Drill: The Quote Factor
 * Compact scenario board for the drill
 */
export const ForexMiniDrillBoard = () => {
  return (
    <div className="my-2 space-y-6 max-w-4xl mx-auto w-full text-left pb-4">
      <div className="p-8 bg-slate-50/50 rounded-[3rem] border border-slate-100 flex flex-col gap-8">
        
        {/* Header Strip */}
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 shadow-sm">
              <Layout size={20} />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Training Lab</h4>
              <h3 className="text-xs font-black text-slate-900 uppercase">Market Context Board</h3>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[9px] font-black uppercase tracking-widest">Active Feed</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Primary Pair (Focus) */}
          <div className="md:col-span-5 flex flex-col justify-center p-8 rounded-[2.5rem] bg-slate-900 text-white shadow-xl border-4 border-slate-800">
            <div className="space-y-1 mb-4">
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">Primary Pair</div>
              <div className="text-4xl font-black tracking-tighter">EUR/USD</div>
            </div>
            <div className="flex items-center gap-2 text-emerald-400">
              <TrendingUp size={28} />
              <span className="text-sm font-black uppercase tracking-tight">Rising Sharply</span>
            </div>
          </div>

          {/* Related Pairs Grid */}
          <div className="md:col-span-7 grid grid-cols-2 gap-4">
            {[
              { pair: "GBP/USD", dir: "up", label: "Rising" },
              { pair: "AUD/USD", dir: "up", label: "Rising" },
              { pair: "USD/JPY", dir: "down", label: "Falling" },
              { pair: "USD/CHF", dir: "down", label: "Falling" }
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white border border-slate-100 flex items-center justify-between shadow-sm">
                <div className="space-y-0.5">
                  <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Related</div>
                  <span className="text-xs font-black text-slate-900">{item.pair}</span>
                </div>
                <div className={cn("p-2 rounded-xl bg-slate-50 border border-slate-100", item.dir === "up" ? "text-emerald-500" : "text-rose-500")}>
                  {item.dir === "up" ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion Strip */}
        <div className="p-5 rounded-[2rem] bg-white border-2 border-emerald-100 flex items-center gap-5 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/20">
            <Search size={24} />
          </div>
          <div className="space-y-0.5">
            <h4 className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">System Conclusion</h4>
            <p className="text-xs text-slate-900 font-extrabold leading-tight tracking-tight uppercase">
              USD appears weak across several related pairs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 0.1 - Crypto Mechanics Map
 * Visualizing core crypto market pillars
 */
export const CryptoMechanicsMap = () => {
  const pillars = [
    {
      id: "spot",
      title: "Spot Market",
      tag: "Asset Ownership",
      desc: "Buying/holding actual assets. Base market driver.",
      icon: CheckCircle2,
      color: "text-emerald-500",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-100"
    },
    {
      id: "perps",
      title: "Perpetual Market",
      tag: "Price Exposure",
      desc: "Derivative contracts affected by leverage and funding.",
      icon: Activity,
      color: "text-amber-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-100"
    },
    {
      id: "btc",
      title: "BTC Context",
      tag: "Market Reference",
      desc: "Bitcoin's broad influence on market sentiment and flow.",
      icon: Zap,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-100"
    },
    {
      id: "noise",
      title: "Exchange Noise",
      tag: "Breadth Check",
      desc: "Differentiating broad moves from isolated exchange noise.",
      icon: AlertCircle,
      color: "text-rose-500",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-100"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-4">
      <div className="relative">
        {/* Central Node */}
        <div className="flex justify-center mb-12">
          <div className="px-8 py-4 rounded-[2rem] bg-[var(--ln-navy-900)] text-white shadow-xl shadow-navy-900/20 border border-white/10 z-10">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-1">Crypto Market</h3>
            <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Mechanical Pillars</div>
          </div>
          
          {/* Connector lines (Desktop) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-0.5 bg-slate-100 -z-10 hidden md:block" />
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {pillars.map((pillar, i) => (
            <div 
              key={pillar.id}
              className={cn(
                "p-6 rounded-[2.5rem] bg-white border-2 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1",
                pillar.borderColor
              )}
            >
              <div className={cn("p-3 rounded-2xl w-fit mb-6", pillar.bgColor, pillar.color)}>
                <pillar.icon size={20} />
              </div>
              
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className={cn("text-[9px] font-black uppercase tracking-widest", pillar.color)}>
                    {pillar.tag}
                  </div>
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight leading-none">
                    {pillar.title}
                  </h4>
                </div>
                
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Synthesis Note */}
      <div className="p-6 rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-col md:flex-row items-center gap-6">
        <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm text-slate-400">
          <ShieldCheck size={24} />
        </div>
        <div className="space-y-1 text-center md:text-left">
          <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Training Standard</h5>
          <p className="text-xs text-slate-600 font-extrabold leading-tight uppercase tracking-tight">
            Before reading crypto price, name the mechanical driver. Is it Spot, Perpetual, BTC Context, or Exchange Noise?
          </p>
        </div>
      </div>
    </div>
  );
};

/**
 * 0.1 - Hype Trap Path
 * Compact 3-row comparison matrix for reading paths
 */
export const HypeTrapPath = () => {
  return (
    <div className="max-w-4xl mx-auto py-4">
      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden">
        {/* Header Strip */}
        <div className="grid grid-cols-2 border-b border-slate-50">
          <div className="bg-rose-50/30 py-4 flex flex-col items-center border-r border-slate-50">
            <div className="px-3 py-1 rounded-full bg-rose-100 text-rose-600 text-[9px] font-black uppercase tracking-widest mb-1">Trap Path</div>
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-tight">Hype-First</h4>
          </div>
          <div className="bg-emerald-50/30 py-4 flex flex-col items-center">
            <div className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-600 text-[9px] font-black uppercase tracking-widest mb-1">Pro Path</div>
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-tight">Mechanic-First</h4>
          </div>
        </div>

        {/* Matrix Rows */}
        <div className="divide-y divide-slate-50">
          {/* Row 1: Input */}
          <div className="grid grid-cols-2 group">
            <div className="p-6 bg-rose-50/10 border-r border-slate-50 flex items-center gap-4 group-hover:bg-rose-50/20 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-white border border-rose-100 flex items-center justify-center text-rose-500 shrink-0 shadow-sm">
                <MessageSquare size={18} />
              </div>
              <div className="space-y-0.5">
                <div className="text-[9px] font-black text-rose-400 uppercase tracking-widest leading-none">Input</div>
                <div className="text-[11px] font-black text-slate-900 uppercase">Online Excitement</div>
              </div>
            </div>
            <div className="p-6 bg-emerald-50/10 flex items-center gap-4 group-hover:bg-emerald-50/20 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-white border border-emerald-100 flex items-center justify-center text-emerald-500 shrink-0 shadow-sm">
                <Layout size={18} />
              </div>
              <div className="space-y-0.5">
                <div className="text-[9px] font-black text-emerald-400 uppercase tracking-widest leading-none">Input</div>
                <div className="text-[11px] font-black text-slate-900 uppercase leading-tight">Structure + BTC Context</div>
              </div>
            </div>
          </div>

          {/* Row 2: Process */}
          <div className="grid grid-cols-2 group">
            <div className="p-6 bg-rose-50/10 border-r border-slate-50 flex items-center gap-4 group-hover:bg-rose-50/20 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-white border border-rose-100 flex items-center justify-center text-rose-500 shrink-0 shadow-sm">
                <Zap size={18} />
              </div>
              <div className="space-y-0.5">
                <div className="text-[9px] font-black text-rose-400 uppercase tracking-widest leading-none">Process</div>
                <div className="text-[11px] font-black text-slate-900 uppercase leading-tight">Public Emotion → Urgency</div>
              </div>
            </div>
            <div className="p-6 bg-emerald-50/10 flex items-center gap-4 group-hover:bg-emerald-50/20 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-white border border-emerald-100 flex items-center justify-center text-emerald-500 shrink-0 shadow-sm">
                <Scale size={18} />
              </div>
              <div className="space-y-0.5">
                <div className="text-[9px] font-black text-emerald-400 uppercase tracking-widest leading-none">Process</div>
                <div className="text-[11px] font-black text-slate-900 uppercase leading-tight">Funding / Leverage / Liquidity</div>
              </div>
            </div>
          </div>

          {/* Row 3: Conclusion */}
          <div className="grid grid-cols-2 group">
            <div className="p-6 bg-rose-50/10 border-r border-slate-50 flex items-center gap-4 group-hover:bg-rose-50/20 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-rose-100 border border-rose-200 flex items-center justify-center text-rose-600 shrink-0 shadow-sm">
                <XCircle size={18} />
              </div>
              <div className="space-y-0.5">
                <div className="text-[9px] font-black text-rose-500 uppercase tracking-widest leading-none">Conclusion</div>
                <div className="text-[11px] font-black text-slate-900 uppercase">"This must be real"</div>
              </div>
            </div>
            <div className="p-6 bg-emerald-50/10 flex items-center gap-4 group-hover:bg-emerald-50/20 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 shadow-sm">
                <CheckCircle2 size={18} />
              </div>
              <div className="space-y-0.5">
                <div className="text-[9px] font-black text-emerald-500 uppercase tracking-widest leading-none">Conclusion</div>
                <div className="text-[11px] font-black text-slate-900 uppercase">"Is this supported?"</div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Bottom Outcome Band */}
        <div className="grid grid-cols-2 bg-[var(--ln-navy-900)] text-white">
          <div className="p-5 flex flex-col items-center text-center border-r border-white/5 bg-rose-500/10">
            <div className="text-[9px] font-black text-rose-400 uppercase tracking-[0.2em] mb-1">Outcome</div>
            <div className="text-[10px] font-bold uppercase tracking-tight leading-tight">Emotion Mistaken for Evidence</div>
          </div>
          <div className="p-5 flex flex-col items-center text-center bg-emerald-500/10">
            <div className="text-[9px] font-black text-emerald-400 uppercase tracking-[0.2em] mb-1">Outcome</div>
            <div className="text-[10px] font-bold uppercase tracking-tight leading-tight">Evidence Checked Before Confidence</div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 0.1 - Crypto Drill Board
 * Practical decision visual for crypto scenarios
 */
export const CryptoDrillBoard = () => {
  return (
    <div className="max-w-2xl mx-auto py-6">
      <div className="bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl border border-white/5 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-500/10 blur-[100px] -ml-32 -mb-32" />

        <div className="relative space-y-8">
          {/* Market Conditions Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[9px] font-black uppercase tracking-widest text-white/60">
                Market Conditions
              </div>
              <div className="h-px bg-white/10 grow" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-4 transition-all hover:bg-white/10">
                <TrendingUp className="text-orange-400" size={18} />
                <div className="text-[10px] font-black text-white/90 uppercase">BTC Sharp Move</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-4 transition-all hover:bg-white/10">
                <Scale className="text-rose-400" size={18} />
                <div className="text-[10px] font-black text-white/90 uppercase">Funding High</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-4 transition-all hover:bg-white/10">
                <MessageSquare className="text-blue-400" size={18} />
                <div className="text-[10px] font-black text-white/90 uppercase">Social Hype</div>
              </div>
            </div>
          </div>

          {/* Decision Point */}
          <div className="flex flex-col items-center py-4">
            <ArrowDown className="text-white/20 mb-4 animate-bounce" size={24} />
            <div className="px-8 py-3 rounded-2xl bg-white text-slate-900 shadow-xl shadow-white/10">
              <h4 className="text-[11px] font-black uppercase tracking-widest">Decision Point</h4>
            </div>
          </div>

          {/* Paths Section */}
          <div className="grid grid-cols-2 gap-6 pt-4">
            {/* Weak Path */}
            <div className="p-5 rounded-2xl bg-rose-500/5 border border-rose-500/20 space-y-4">
              <div className="flex items-center gap-2">
                <XCircle className="text-rose-500" size={16} />
                <div className="text-[10px] font-black text-rose-500 uppercase tracking-widest">Instruction</div>
              </div>
              <p className="text-[10px] font-bold text-rose-200/60 leading-tight uppercase tracking-tight">
                Treating noise as a direct command to react.
              </p>
            </div>

            {/* Disciplined Path */}
            <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-emerald-500" size={16} />
                <div className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Context</div>
              </div>
              <p className="text-[10px] font-bold text-emerald-200/60 leading-tight uppercase tracking-tight">
                Review structure and mechanics before deciding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};




/**
 * 0.1 - Crypto Hype Filtering Drill
 * Redesigned V2 visual for Card 4 practical drill.
 * Light-mode premium training board.
 */
export const CryptoHypeFilteringDrill = () => {
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
              { label: "BTC Sharp Move", icon: TrendingUp, color: "text-orange-500", bg: "bg-orange-50" },
              { label: "Funding High", icon: Activity, color: "text-rose-500", bg: "bg-rose-50" },
              { label: "Social Hype", icon: MessageSquare, color: "text-blue-500", bg: "bg-blue-50" }
            ].map((item, i) => (
              <div key={i} className={cn("p-4 rounded-2xl border border-transparent flex items-center gap-3 transition-all", item.bg)}>
                <item.icon size={16} className={item.color} />
                <span className="text-[10px] font-black text-slate-900 uppercase leading-none">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Decision Point */}
          <div className="flex flex-col items-center py-2 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-px bg-slate-100" />
            </div>
            <div className="relative px-6 py-2 rounded-full bg-slate-900 text-white text-[9px] font-black uppercase tracking-[0.2em] shadow-lg">
              Decision Point
            </div>
          </div>

          {/* Path Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-[2rem] border border-rose-100 bg-rose-50/30 space-y-3 relative group">
              <div className="flex items-center gap-2">
                <XCircle className="text-rose-400" size={16} />
                <span className="text-[10px] font-black text-rose-500 uppercase tracking-widest">Weak Response</span>
              </div>
              <p className="text-[11px] font-bold text-slate-600 leading-snug uppercase tracking-tight">
                Treating hype/funding as a <span className="text-rose-600">Direct Instruction</span>.
              </p>
            </div>

            <div className="p-5 rounded-[2rem] border border-emerald-100 bg-emerald-50/30 space-y-3 relative group">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-emerald-400" size={16} />
                <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Disciplined Response</span>
              </div>
              <p className="text-[11px] font-bold text-slate-600 leading-snug uppercase tracking-tight">
                Treating hype/funding as <span className="text-emerald-600">Supporting Context</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 0.1 - Gold Reading Map (Speed vs Clarity)
 * Visual for Gold foundations
 */
export const GoldReadingMap = () => {
  return (
    <div className="my-2 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto w-full">
      {/* Left: Fast but Unclear */}
      <div className="p-6 rounded-[2.5rem] bg-rose-50/30 border border-rose-100 flex flex-col h-full">
        <div className="mb-6 space-y-1 text-left">
          <div className="flex items-center gap-2">
            <AlertCircle className="text-rose-500" size={18} />
            <span className="text-[10px] font-extrabold text-rose-500 uppercase tracking-widest">Fast but Unclear</span>
          </div>
          <h4 className="text-sm font-bold text-slate-800 uppercase tracking-tight">Reactive Impulse</h4>
        </div>
        
        <div className="flex-1 space-y-3">
          {[
            { label: "Long Wick", desc: "Sudden rejection without structural hold" },
            { label: "Thin Liquidity", desc: "Erratic gaps in order matching" },
            { label: "Sudden Spike", desc: "News-driven or mechanical pressure" },
            { label: "Emotional Reaction", desc: "FOMO-driven decision making" }
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-2xl bg-white border border-rose-100 flex items-start gap-4 transition-all hover:bg-rose-50/50">
              <div className="mt-1 w-2 h-2 rounded-full bg-rose-400 shrink-0 shadow-sm shadow-rose-200" />
              <div className="space-y-1 text-left">
                <div className="text-[12px] font-black text-slate-800 uppercase tracking-tight">{item.label}</div>
                <div className="text-[10px] font-medium text-slate-400 leading-tight">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Clearer Reading */}
      <div className="p-6 rounded-[2.5rem] bg-emerald-50/30 border border-emerald-100 flex flex-col h-full shadow-sm">
        <div className="mb-6 space-y-1 text-left">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-emerald-500" size={18} />
            <span className="text-[10px] font-extrabold text-emerald-500 uppercase tracking-widest">Clearer Reading</span>
          </div>
          <h4 className="text-sm font-bold text-slate-800 uppercase tracking-tight">Disciplined Observation</h4>
        </div>

        <div className="flex-1 space-y-3">
          {[
            { label: "Structure Holds", desc: "Price respects previous high/low anchors" },
            { label: "Context Supports Move", desc: "Dollar/Rate background aligns with reading" },
            { label: "Wick Rejection Understood", desc: "Identifying 'footprints' as noise, not signals" },
            { label: "Review Condition Defined", desc: "Clear logic for when the reading is dead" }
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-2xl bg-white border border-emerald-100 flex items-start gap-4 transition-all hover:bg-emerald-50/50">
              <div className="mt-1 w-2 h-2 rounded-full bg-emerald-400 shrink-0 shadow-sm shadow-emerald-200" />
              <div className="space-y-1 text-left">
                <div className="text-[12px] font-black text-slate-800 uppercase tracking-tight">{item.label}</div>
                <div className="text-[10px] font-medium text-slate-400 leading-tight">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * 0.1 - Gold Context Driver Map
 * Visual showing the 6 key drivers for Gold
 */
export const GoldContextDriverMap = () => {
  return (
    <div className="my-2 max-w-5xl mx-auto w-full">
      <div className="p-8 rounded-[3rem] bg-slate-50/50 border border-slate-100 relative overflow-hidden group transition-all">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl opacity-50 -mr-32 -mt-32 transition-all group-hover:scale-110" />
        
        <div className="relative space-y-8">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-[10px] font-black uppercase tracking-widest border border-amber-200">
              Gold Context Driver Map
            </div>
            <h4 className="text-xl font-black text-slate-800 uppercase tracking-tight">XAU/USD Background Forces</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                label: "USD Context",
                desc: "Is the Dollar broadly strong or weak?",
                icon: Globe,
                color: "text-blue-500",
                bg: "bg-blue-50/50"
              },
              {
                label: "Rate Expectations",
                desc: "Is cash becoming more or less attractive?",
                icon: Scale,
                color: "text-amber-500",
                bg: "bg-amber-50/50"
              },
              {
                label: "Market Uncertainty",
                desc: "Is Gold reacting to fear or risk?",
                icon: ShieldAlert,
                color: "text-rose-500",
                bg: "bg-rose-50/50"
              },
              {
                label: "Liquidity",
                desc: "Is movement clean or thin/noisy?",
                icon: Activity,
                color: "text-emerald-500",
                bg: "bg-emerald-50/50"
              },
              {
                label: "Wick Behavior",
                desc: "Did price hold or reject quickly?",
                icon: Zap,
                color: "text-purple-500",
                bg: "bg-purple-50/50"
              },
              {
                label: "News Sensitivity",
                desc: "Is the move in a major data window?",
                icon: AlertCircle,
                color: "text-orange-500",
                bg: "bg-orange-50/50"
              }
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-3xl bg-white border border-slate-100 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md group/card">
                <div className={cn("p-3 rounded-2xl w-fit mb-4 transition-colors", item.bg)}>
                  <item.icon size={20} className={item.color} />
                </div>
                <div className="space-y-1">
                  <div className="text-[12px] font-black text-slate-800 uppercase tracking-tight group-hover/card:text-amber-600 transition-colors">
                    {item.label}
                  </div>
                  <div className="text-[10px] font-medium text-slate-500 leading-tight">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="pt-4 flex justify-center">
            <div className="px-6 py-3 rounded-2xl bg-slate-900/5 border border-slate-900/10 backdrop-blur-sm">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest text-center">
                Before reading a candle, check the environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 0.1 - Gold Urgency Trap (Mistake Flow)
 * Visual showing the Trap Path vs Structured Path for Gold wicks
 */
export const GoldUrgencyTrapVisual = () => {
  return (
    <div className="my-2 max-w-5xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left: Trap Path */}
        <div className="lg:col-span-4 p-6 rounded-[2.5rem] bg-rose-50/30 border border-rose-100 flex flex-col space-y-4 relative overflow-hidden">
          <div className="flex items-center gap-2 mb-2">
            <XCircle className="text-rose-500" size={18} />
            <span className="text-[10px] font-black text-rose-500 uppercase tracking-widest text-left">Trap Path</span>
          </div>
          
          {[
            { label: "Fast Move Appears", sub: "Sudden spike or drop" },
            { label: "Long Wick Forms", sub: "Visual rejection noticed" },
            { label: "Learner Feels Urgency", sub: "Fear of missing the reversal" },
            { label: "Assumes Reversal", sub: "Decision made too early" }
          ].map((step, i) => (
            <div key={i} className="p-4 rounded-2xl bg-white border border-rose-100 shadow-sm relative z-10 text-left">
              <div className="text-[11px] font-black text-slate-800 uppercase tracking-tight">{step.label}</div>
              <div className="text-[9px] font-bold text-rose-400 uppercase tracking-tighter">{step.sub}</div>
            </div>
          ))}

          <div className="mt-auto pt-4 border-t border-rose-100">
            <div className="text-[10px] font-black text-rose-600 uppercase tracking-widest text-center">Outcome: Urgency Mistaken for Evidence</div>
          </div>
        </div>

        {/* Middle: Visual Candle/Wick */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 relative min-h-[300px]">
          <div className="absolute top-4 left-4">
            <Zap className="text-amber-400 opacity-20" size={40} />
          </div>
          
          {/* Stylized Gold Candle */}
          <div className="flex flex-col items-center space-y-0 relative">
            {/* Upper Wick */}
            <div className="w-1 h-32 bg-slate-300 relative">
              <div className="absolute inset-0 bg-amber-400 animate-pulse opacity-50" />
            </div>
            {/* Body */}
            <div className="w-12 h-16 bg-white border-4 border-amber-500 rounded-lg shadow-lg shadow-amber-500/20 z-10 flex items-center justify-center">
               <span className="text-[10px] font-black text-amber-600 uppercase tracking-tighter">Gold</span>
            </div>
            {/* Lower Wick */}
            <div className="w-1 h-8 bg-slate-300" />
          </div>

          <div className="mt-8 text-center space-y-1">
            <div className="text-[12px] font-black text-slate-800 uppercase tracking-tight italic">"Must reverse now!"</div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">vs</p>
            <div className="text-[12px] font-black text-emerald-600 uppercase tracking-tight">"Wait for structure."</div>
          </div>
        </div>

        {/* Right: Structured Path */}
        <div className="lg:col-span-4 p-6 rounded-[2.5rem] bg-emerald-50/30 border border-emerald-100 flex flex-col space-y-4 relative overflow-hidden">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="text-emerald-500" size={18} />
            <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest text-left">Structured Path</span>
          </div>
          
          {[
            { label: "Fast Move Appears", sub: "Volatility acknowledged" },
            { label: "Wick is Noticed", sub: "Identified as a 'clue'" },
            { label: "Learner Pauses", sub: "Checks context drivers" },
            { label: "Checks Structure", sub: "Waiting for confirmation" }
          ].map((step, i) => (
            <div key={i} className="p-4 rounded-2xl bg-white border border-emerald-100 shadow-sm relative z-10 text-left">
              <div className="text-[11px] font-black text-slate-800 uppercase tracking-tight">{step.label}</div>
              <div className="text-[9px] font-bold text-emerald-400 uppercase tracking-tighter">{step.sub}</div>
            </div>
          ))}

          <div className="mt-auto pt-4 border-t border-emerald-100">
            <div className="text-[10px] font-black text-emerald-600 uppercase tracking-widest text-center">Outcome: Clue Tested Before Action</div>
          </div>
        </div>

      </div>
    </div>
  );
};

/**
 * 0.1 - Gold Noise Decision Board
 * Visual for Gold Card 4 (Practical Drill)
 */
export const GoldNoiseDecisionBoard = () => {
  return (
    <div className="my-2 max-w-5xl mx-auto w-full">
      <div className="p-8 rounded-[3rem] bg-slate-50 border border-slate-200 relative overflow-hidden group">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-left">
          
          {/* Left: Noise Signals */}
          <div className="p-6 rounded-[2rem] bg-white border border-slate-100 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="text-amber-500" size={18} />
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Noise Signals</span>
            </div>
            <div className="space-y-3">
              {[
                "Fast Movement",
                "Rejection Both Sides",
                "Unclear Pressure"
              ].map((signal, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-tight">{signal}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Middle: The Candle Visual */}
          <div className="flex flex-col items-center justify-center py-4">
            <div className="relative flex flex-col items-center">
              {/* Upper Wick */}
              <div className="w-1 h-20 bg-slate-400 relative">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-400/20 blur-sm" />
              </div>
              {/* Body */}
              <div className="w-16 h-12 bg-white border-[6px] border-slate-900 rounded-md z-10 shadow-xl flex items-center justify-center">
                 <Activity size={24} className="text-slate-900 opacity-20" />
              </div>
              {/* Lower Wick */}
              <div className="w-1 h-24 bg-slate-400" />
              
              {/* Volatility Indicator */}
              <div className="absolute -left-12 top-1/2 -translate-y-1/2">
                <Zap className="text-amber-400 animate-pulse" size={24} />
              </div>
              <div className="absolute -right-12 top-1/2 -translate-y-1/2">
                <Zap className="text-amber-400 animate-pulse delay-75" size={24} />
              </div>
            </div>
            <div className="mt-8 px-4 py-1.5 rounded-full bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest shadow-lg">
              Volatile Event
            </div>
          </div>

          {/* Right: Disciplined Path */}
          <div className="p-6 rounded-[2rem] bg-emerald-50/50 border border-emerald-100 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-emerald-500" size={18} />
              <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">What To Do</span>
            </div>
            <div className="space-y-3">
              {[
                { label: "Mark Unclear", icon: Search },
                { label: "Wait for Structure", icon: Layers },
                { label: "Define Review Condition", icon: ClipboardCheck }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <item.icon size={14} className="text-emerald-500" />
                  <span className="text-[11px] font-bold text-slate-800 uppercase tracking-tight">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Callout */}
        <div className="mt-8 flex justify-center">
          <div className="px-6 py-3 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center gap-3">
            <Info size={16} className="text-slate-400" />
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">
              Is this a clear clue or a noisy condition?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 0.2 - Market Mechanism Recap Map (Compact Debrief Version)
 * A streamlined horizontal synthesis visual showing the causal path.
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
    <div className="w-full max-w-4xl mx-auto py-2">
      {/* Completion Indicator */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 shadow-sm">
          <CheckCircle2 size={14} className="text-emerald-500" />
          <span className="text-[11px] font-black text-emerald-700 uppercase tracking-[0.2em]">
            Module {moduleNumber} Complete
          </span>
        </div>
      </div>

      {/* Horizontal Flow */}
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
              step.color === "amber" && "border-amber-100 bg-amber-50/10"
            )}>
              <div className={cn(
                "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border",
                step.color === "blue" && "bg-blue-500/10 text-blue-600 border-blue-100",
                step.color === "indigo" && "bg-indigo-500/10 text-indigo-600 border-indigo-100",
                step.color === "teal" && "bg-teal-500/10 text-teal-600 border-teal-100",
                step.color === "emerald" && "bg-emerald-500/10 text-emerald-600 border-emerald-100",
                step.color === "slate" && "bg-slate-500/10 text-slate-600 border-slate-100",
                step.color === "amber" && "bg-amber-500/10 text-amber-600 border-amber-200"
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
  );
};
/**
 * 0.2 - Forex Network Visual
 * Shows decentralized liquidity providers -> broker -> retail -> chart.
 */
export const ForexNetworkVisual = () => {
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
          <div key={node.label} className="relative z-10 flex flex-col items-center gap-3 group">
            <div className={cn(
              "w-14 h-14 rounded-2xl flex items-center justify-center border shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:shadow-md",
              node.color === "blue" && "bg-blue-50 border-blue-100 text-blue-600 group-hover:border-blue-200",
              node.color === "indigo" && "bg-indigo-50 border-indigo-100 text-indigo-600 group-hover:border-indigo-200",
              node.color === "teal" && "bg-teal-50 border-teal-100 text-teal-600 group-hover:border-teal-200",
              node.color === "amber" && "bg-amber-50 border-amber-100 text-amber-600 group-hover:border-amber-200"
            )}>
              {node.icon}
            </div>
            <div className="text-center">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-900 leading-tight">{node.label}</p>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter mt-0.5">{node.sub}</p>
            </div>
          </div>
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
 * Shows Bid, Ask, and Spread mechanics.
 */
export const ForexQuotePanelVisual = () => {
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
              <div className="space-y-1">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Sell (Bid)</p>
                <p className="text-3xl font-black text-white tracking-tighter">1.08<span className="text-teal-400 italic">24</span><span className="text-[12px] align-top ml-0.5">5</span></p>
              </div>
              <div className="space-y-1 text-right">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Buy (Ask)</p>
                <p className="text-3xl font-black text-white tracking-tighter">1.08<span className="text-rose-400 italic">25</span><span className="text-[12px] align-top ml-0.5">7</span></p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-teal-500" />
                <span className="text-[10px] font-bold text-slate-400 uppercase">Spread</span>
              </div>
              <span className="text-xs font-black text-white tracking-widest">1.2 PIPS</span>
            </div>
          </div>
        </div>

        {/* Mechanics Labels */}
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-600 flex items-center justify-center shrink-0 border border-teal-100">
              <ArrowDown size={14} />
            </div>
            <div>
              <p className="text-xs font-black text-slate-900 uppercase mb-1">Sellers Hit the Bid</p>
              <p className="text-[11px] text-slate-500 font-medium leading-relaxed">When you sell, you get the lower price where buyers are waiting.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-600 flex items-center justify-center shrink-0 border border-rose-100">
              <ArrowUp size={14} />
            </div>
            <div>
              <p className="text-xs font-black text-slate-900 uppercase mb-1">Buyers Hit the Ask</p>
              <p className="text-[11px] text-slate-500 font-medium leading-relaxed">When you buy, you pay the higher price where sellers are waiting.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 0.2 - Forex Session Liquidity Visual
 * Compares session quality.
 */
export const ForexSessionLiquidityVisual = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Active Session */}
        <div className="p-6 rounded-3xl border border-teal-100 bg-teal-50/30">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500 text-white flex items-center justify-center shadow-lg shadow-teal-500/20">
                <Clock size={18} />
              </div>
              <div>
                <p className="text-xs font-black text-slate-900 uppercase">London / NY Overlap</p>
                <p className="text-[9px] font-bold text-teal-600 uppercase tracking-widest">Active Session</p>
              </div>
            </div>
            <div className="px-3 py-1 rounded-full bg-teal-500 text-white text-[9px] font-black uppercase tracking-widest">High Liquidity</div>
          </div>
          <div className="space-y-4">
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full w-full bg-teal-500" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Average Spread</span>
              <span className="text-[10px] font-black text-teal-700 uppercase">0.2 - 0.5 Pips</span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium leading-relaxed italic">"Quotes are tight and movement is backed by massive volume. Evidence is cleaner."</p>
          </div>
        </div>

        {/* Quiet Session */}
        <div className="p-6 rounded-3xl border border-slate-200 bg-white shadow-sm opacity-80">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-500 flex items-center justify-center">
                <Activity size={18} />
              </div>
              <div>
                <p className="text-xs font-black text-slate-900 uppercase">Late Asia / Quiet Period</p>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Inactive Session</p>
              </div>
            </div>
            <div className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[9px] font-black uppercase tracking-widest">Thin Liquidity</div>
          </div>
          <div className="space-y-4">
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full w-1/4 bg-slate-400" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Average Spread</span>
              <span className="text-[10px] font-black text-slate-600 uppercase">1.5 - 3.0 Pips</span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium leading-relaxed italic">"Quotes are wide and movement may jump without real intent. Evidence is noisy."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 0.2 - Forex Quote Quality Drill Visual
 * Decision board for the drill.
 */
export const ForexQuoteQualityDrillVisual = () => {
  return (
    <div className="w-full max-w-2xl mx-auto py-8">
      <div className="bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-xl">
        <div className="flex flex-col gap-8">
          {/* Situation Row */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 w-full p-6 rounded-3xl bg-slate-50 border border-slate-100 text-center">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mx-auto mb-3">
                <TrendingUp size={20} />
              </div>
              <p className="text-[11px] font-black text-slate-900 uppercase mb-1">Price Moves Up</p>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Candle Evidence</p>
            </div>

            <div className="flex-1 w-full p-6 rounded-3xl bg-amber-50/50 border border-amber-100 text-center">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mx-auto mb-3">
                <AlertTriangle size={20} />
              </div>
              <p className="text-[11px] font-black text-slate-900 uppercase mb-1">Spread Widens</p>
              <p className="text-[9px] font-bold text-amber-600 uppercase tracking-widest">Quiet Session</p>
            </div>
          </div>

          <div className="flex justify-center">
            <ArrowDown className="text-slate-200" size={24} />
          </div>

          {/* Result Row */}
          <div className="p-6 rounded-3xl border-2 border-dashed border-slate-200 flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
              <Brain size={24} className="text-slate-400" />
            </div>
            <div className="text-center">
              <p className="text-xs font-black text-slate-900 uppercase tracking-widest mb-1">Decision Gate</p>
              <p className="text-[11px] text-slate-500 font-medium">Is this move clean evidence or a weak quote condition?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 0.2 - Crypto Venue Map Visual
 * Shows fragmented market structure.
 */
export const CryptoVenueMapVisual = () => {
  const venues = [
    { label: "CEX Spot", sub: "BTC/USDT", liquidity: "High", spread: "0.01%", icon: <Globe size={14} />, color: "blue" },
    { label: "CEX Perpetual", sub: "BTC-PERP", liquidity: "Massive", spread: "0.02%", icon: <Activity size={14} />, color: "indigo" },
    { label: "DEX Pool", sub: "WBTC/USDC", liquidity: "Variable", spread: "0.15%+", icon: <RefreshCcw size={14} />, color: "teal" },
    { label: "Aggregated Feed", sub: "Market Index", liquidity: "Synthetic", spread: "Average", icon: <Layers size={14} />, color: "amber" }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <div className="flex flex-col items-center">
        {/* Central Asset */}
        <div className="relative mb-12">
          <div className="w-20 h-20 rounded-full bg-slate-900 border-4 border-white shadow-xl flex items-center justify-center z-10 relative">
            <span className="text-xl font-black text-white italic">BTC</span>
          </div>
          {/* Animated rings */}
          <div className="absolute inset-0 rounded-full border border-slate-200 animate-ping opacity-20" />
        </div>

        {/* Fragmented Venues */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {venues.map((venue) => (
            <div key={venue.label} className="p-5 rounded-[2rem] border border-slate-100 bg-white shadow-sm flex flex-col items-center text-center transition-transform hover:scale-105">
              <div className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center mb-4 shadow-sm",
                venue.color === "blue" && "bg-blue-50 text-blue-600",
                venue.color === "indigo" && "bg-indigo-50 text-indigo-600",
                venue.color === "teal" && "bg-teal-50 text-teal-600",
                venue.color === "amber" && "bg-amber-50 text-amber-600"
              )}>
                {venue.icon}
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-900 mb-1">{venue.label}</p>
              <p className="text-[9px] font-bold text-slate-400 uppercase mb-3 tracking-tighter">{venue.sub}</p>
              
              <div className="w-full space-y-1.5 pt-3 border-t border-slate-50">
                <div className="flex justify-between items-center">
                  <span className="text-[8px] font-bold text-slate-400 uppercase">Liquidity</span>
                  <span className="text-[8px] font-black text-slate-700 uppercase">{venue.liquidity}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[8px] font-bold text-slate-400 uppercase">Spread</span>
                  <span className="text-[8px] font-black text-slate-700 uppercase">{venue.spread}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * 0.2 - Crypto Market Engines Visual
 * CEX Order Book vs DEX Liquidity Pool.
 */
export const CryptoMarketEnginesVisual = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: CEX Order Book */}
        <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-slate-900 group-hover:scale-110 transition-transform">
            <Cpu size={140} />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/20">
                <Cpu size={18} />
              </div>
              <div>
                <p className="text-xs font-black text-slate-900 uppercase tracking-widest leading-tight">CEX Order Book</p>
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
                <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-slate-700 uppercase tracking-tight">{step.label}</span>
                  <div className="ml-auto px-2 py-0.5 rounded-md bg-blue-50 text-[8px] font-black text-blue-600 uppercase">{step.status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: DEX Liquidity Pool */}
        <div className="p-8 rounded-[2.5rem] bg-teal-50/30 border border-teal-100 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-teal-900 group-hover:scale-110 transition-transform">
            <RefreshCcw size={140} />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-lg shadow-teal-600/20">
                <RefreshCcw size={18} />
              </div>
              <div>
                <p className="text-xs font-black text-slate-900 uppercase tracking-widest leading-tight">DEX Liquidity Pool</p>
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
                <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-teal-100 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-teal-500" />
                  <span className="text-[10px] font-bold text-slate-700 uppercase tracking-tight">{step.label}</span>
                  <div className="ml-auto px-2 py-0.5 rounded-md bg-teal-50 text-[8px] font-black text-teal-600 uppercase">{step.status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 0.2 - Crypto Liquidity Fragmentation Visual
 * Price impact comparison.
 */
export const CryptoLiquidityFragmentationVisual = () => {
  const venues = [
    { label: "CEX A (Tier 1)", sub: "Deep Liquidity", move: "0.05%", bar: "w-full", color: "blue", impact: "Minimal" },
    { label: "CEX B (Tier 2)", sub: "Medium Liquidity", move: "0.45%", bar: "w-3/4", color: "indigo", impact: "Moderate" },
    { label: "DEX Pool", sub: "Thin Liquidity", move: "2.10%", bar: "w-1/4", color: "teal", impact: "Extreme" }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <div className="flex flex-col gap-6">
        {/* Order Input */}
        <div className="p-6 rounded-[2rem] bg-slate-900 text-white border border-white/10 flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
              <Coins size={24} className="text-amber-400" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50">Buy Order Action</p>
              <p className="text-lg font-black tracking-tight">$10,000 Spot Buy</p>
            </div>
          </div>
          <div className="px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest border border-emerald-500/30">
            Market Impact Test
          </div>
        </div>

        {/* Fragmentation Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {venues.map((venue) => (
            <div key={venue.label} className="p-6 rounded-[2rem] border border-slate-100 bg-white shadow-sm hover:border-slate-200 transition-colors">
              <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-1">{venue.label}</p>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter mb-6">{venue.sub}</p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-end mb-1">
                  <p className="text-[9px] font-bold text-slate-400 uppercase">Available Depth</p>
                  <p className="text-[10px] font-black uppercase text-slate-700">{venue.impact}</p>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className={cn("h-full rounded-full", venue.bar, 
                    venue.color === "blue" ? "bg-blue-500" : venue.color === "indigo" ? "bg-indigo-500" : "bg-teal-500"
                  )} />
                </div>
                
                <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                  <p className="text-[10px] font-bold text-slate-700 uppercase">Price Impact</p>
                  <p className="text-sm font-black text-slate-900">+{venue.move}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * 0.2 - Crypto Venue Noise Drill Visual
 * Decision board for the drill.
 */
export const CryptoVenueNoiseDrillVisual = () => {
  return (
    <div className="w-full max-w-3xl mx-auto py-8">
      <div className="bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Situation Analysis */}
          <div className="md:col-span-8 grid grid-cols-2 gap-4">
            <div className="p-5 rounded-3xl bg-emerald-50 border border-emerald-100 text-center">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center mx-auto mb-3 shadow-lg shadow-emerald-500/20">
                <TrendingUp size={18} />
              </div>
              <p className="text-[10px] font-black text-slate-900 uppercase mb-1">CEX A: +9%</p>
              <p className="text-[8px] font-bold text-emerald-600 uppercase tracking-widest italic">Thin Liquidity</p>
            </div>
            
            <div className="p-5 rounded-3xl bg-slate-50 border border-slate-100 text-center">
              <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-500 flex items-center justify-center mx-auto mb-3">
                <Activity size={18} />
              </div>
              <p className="text-[10px] font-black text-slate-900 uppercase mb-1">CEX B: +2%</p>
              <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest italic">Normal Volume</p>
            </div>
            
            <div className="p-5 rounded-3xl bg-amber-50/50 border border-amber-100 text-center">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mx-auto mb-3">
                <ShieldAlert size={18} />
              </div>
              <p className="text-[10px] font-black text-slate-900 uppercase mb-1">DEX: High Slippage</p>
              <p className="text-[8px] font-bold text-amber-600 uppercase tracking-widest italic">Low Pool Depth</p>
            </div>

            <div className="p-5 rounded-3xl bg-indigo-50/50 border border-indigo-100 text-center">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center mx-auto mb-3">
                <Globe size={18} />
              </div>
              <p className="text-[10px] font-black text-slate-900 uppercase mb-1">Index: Mixed</p>
              <p className="text-[8px] font-bold text-indigo-600 uppercase tracking-widest italic">No Major Conf.</p>
            </div>
          </div>

          {/* Decision */}
          <div className="md:col-span-4 flex flex-col items-center gap-4 text-center">
            <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center relative">
              <Brain size={32} className="text-slate-400" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full flex items-center justify-center text-[10px] font-black text-white">?</div>
            </div>
            <div>
              <p className="text-xs font-black text-slate-900 uppercase tracking-widest mb-1">Market Reading</p>
              <p className="text-[10px] text-slate-500 font-medium leading-relaxed">Is this a broad market move or venue-specific noise?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 0.2 - Gold Market Map Visual
 * Shows multi-layered gold market structure.
 */
export const GoldMarketMapVisual = () => {
  const nodes = [
    { label: "London OTC Spot", sub: "Bilateral Trading", color: "amber", icon: <Globe size={14} /> },
    { label: "COMEX Futures", sub: "Exchange Contracts", color: "slate", icon: <Layers size={14} /> },
    { label: "Gold Price Benchmark", sub: "LBMA Auctions", color: "yellow", icon: <Gavel size={14} /> },
    { label: "Physical Bullion", sub: "Vaults & Logistics", color: "orange", icon: <Lock size={14} /> },
    { label: "Retail XAU/USD", sub: "Quote Platform", color: "blue", icon: <Monitor size={14} /> }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <div className="flex flex-col items-center">
        {/* Central Gold Node */}
        <div className="relative mb-16">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-amber-600 border-4 border-white shadow-2xl flex items-center justify-center z-10 relative">
            <span className="text-2xl font-black text-white italic drop-shadow-md">XAU</span>
          </div>
          <div className="absolute inset-0 rounded-full bg-amber-400 blur-2xl opacity-20 animate-pulse" />
        </div>

        {/* Market Layer Nodes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 w-full">
          {nodes.map((node) => (
            <div key={node.label} className="p-5 rounded-[2rem] border border-slate-100 bg-white shadow-sm flex flex-col items-center text-center transition-all hover:border-amber-200 hover:shadow-md">
              <div className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center mb-4 shadow-sm",
                node.color === "amber" && "bg-amber-50 text-amber-600",
                node.color === "slate" && "bg-slate-50 text-slate-600",
                node.color === "yellow" && "bg-yellow-50 text-yellow-600",
                node.color === "orange" && "bg-orange-50 text-orange-600",
                node.color === "blue" && "bg-blue-50 text-blue-600"
              )}>
                {node.icon}
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-900 mb-1 leading-tight">{node.label}</p>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{node.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * 0.2 - Gold OTC Bilateral Visual
 * Loco London OTC mechanics.
 */
export const GoldOTCBilateralVisual = () => {
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
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm mb-4">
                <Globe size={32} className="text-slate-400" />
              </div>
              <p className="text-xs font-black text-slate-900 uppercase tracking-widest">Bank / Dealer A</p>
            </div>

            {/* Negotiation */}
            <div className="flex-1 flex flex-col items-center">
              <div className="w-full flex items-center gap-2 mb-4">
                <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
                <ArrowRightLeft className="text-slate-400" size={20} />
                <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
              </div>
              <div className="px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm">
                <p className="text-[10px] font-black text-slate-900 uppercase tracking-[0.15em]">Bilateral Negotiation</p>
              </div>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter mt-2">No Central Exchange Order Book</p>
            </div>

            {/* Participant B */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm mb-4">
                <Users size={32} className="text-slate-400" />
              </div>
              <p className="text-xs font-black text-slate-900 uppercase tracking-widest">Dealer / Client B</p>
            </div>
          </div>

          {/* Settlement Layer */}
          <div className="mt-12 pt-8 border-t border-slate-200/50 flex flex-col items-center">
            <div className="flex items-center gap-3 mb-6">
              <Lock size={16} className="text-amber-500" />
              <p className="text-[11px] font-black text-slate-900 uppercase tracking-[0.2em]">Loco London Settlement</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div className="p-5 rounded-3xl bg-white border border-slate-100 shadow-sm">
                <p className="text-[10px] font-black text-slate-900 uppercase mb-1">Allocated Account</p>
                <p className="text-[9px] text-slate-500 font-medium leading-relaxed">Ownership of specific physical bars in the vault.</p>
              </div>
              <div className="p-5 rounded-3xl bg-white border border-slate-100 shadow-sm">
                <p className="text-[10px] font-black text-slate-900 uppercase mb-1">Unallocated Account</p>
                <p className="text-[9px] text-slate-500 font-medium leading-relaxed">General entitlement to metal; used for most settlement.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 0.2 - Gold Futures Mechanics Visual
 * COMEX standardized contract flow.
 */
export const GoldFuturesMechanicsVisual = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <div className="flex flex-col gap-6">
        {/* Futures Ticker */}
        <div className="p-6 rounded-[2rem] bg-slate-900 text-white border border-white/10 flex items-center justify-between shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-[0.05] text-white">
            <Layers size={100} />
          </div>
          
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
              <span className="font-black italic text-lg">GC</span>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50">COMEX Benchmark</p>
              <p className="text-lg font-black tracking-tight">Gold Futures Contract</p>
            </div>
          </div>
          
          <div className="flex gap-4 relative z-10">
            <div className="px-4 py-2 rounded-xl bg-white/10 text-white text-[9px] font-black uppercase tracking-widest border border-white/10 text-center">
              Standardized
            </div>
            <div className="px-4 py-2 rounded-xl bg-white/10 text-white text-[9px] font-black uppercase tracking-widest border border-white/10 text-center">
              Physical Link
            </div>
          </div>
        </div>

        {/* Mechanism Chain */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {[
            { label: "Participants", sub: "Hedgers / Traders", icon: <Users size={16} /> },
            { label: "Order Matching", sub: "Exchange Engine", icon: <RefreshCcw size={16} /> },
            { label: "Central Clearing", sub: "Risk Management", icon: <ShieldCheck size={16} /> },
            { label: "Price Discovery", sub: "Benchmark Feed", icon: <Eye size={16} /> }
          ].map((step, i) => (
            <div key={i} className="p-6 rounded-[2rem] border border-slate-100 bg-white shadow-sm flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-1">{step.label}</p>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter leading-tight">{step.sub}</p>
            </div>
          ))}
          {/* Connecting Arrows (desktop) */}
          <div className="hidden md:block absolute top-1/2 left-[23%] w-[4%] h-[2px] bg-slate-100" />
          <div className="hidden md:block absolute top-1/2 left-[48%] w-[4%] h-[2px] bg-slate-100" />
          <div className="hidden md:block absolute top-1/2 left-[73%] w-[4%] h-[2px] bg-slate-100" />
        </div>
      </div>
    </div>
  );
};

/**
 * 0.2 - Gold Market Layer Drill Visual
 * Decision board for market layers.
 */
export const GoldMarketLayerDrillVisual = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <div className="bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-xl">
        <div className="flex flex-col gap-8">
          {/* Situation Header */}
          <div className="flex items-center justify-between border-b border-slate-50 pb-6">
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
              { label: "London OTC", sub: "Spot Flow Check", status: "Incomplete" },
              { label: "COMEX Futures", sub: "Volume & Depth", status: "Incomplete" },
              { label: "Benchmark", sub: "Auction Timing", status: "Incomplete" },
              { label: "Retail Quote", sub: "Spread Check", status: "Incomplete" },
              { label: "USD / Rates", sub: "Macro Context", status: "Incomplete" }
            ].map((layer, i) => (
              <div key={i} className="p-5 rounded-3xl border border-slate-100 bg-slate-50/50 flex flex-col items-center text-center group transition-all hover:bg-white hover:border-amber-200">
                <p className="text-[9px] font-black text-slate-900 uppercase tracking-widest mb-1">{layer.label}</p>
                <p className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter mb-4">{layer.sub}</p>
                <div className="mt-auto px-3 py-1 rounded-full bg-slate-100 text-[8px] font-black text-slate-400 uppercase tracking-widest group-hover:bg-amber-100 group-hover:text-amber-600">
                  {layer.status}
                </div>
              </div>
            ))}
          </div>

          {/* Decision Question */}
          <div className="bg-slate-900 rounded-3xl p-6 text-white text-center flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4">
              <Brain size={20} className="text-amber-400" />
            </div>
            <p className="text-xs font-black uppercase tracking-widest mb-2">Disciplined Reading</p>
            <p className="text-[11px] text-white/70 font-medium leading-relaxed max-w-xl">
              Should the learner treat this fast XAU/USD candle as complete evidence without verifying the market layer underneath?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
