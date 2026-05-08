"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  Compass,
  Activity,
  Layers,
  AlertTriangle,
  CheckCircle,
  Crosshair,
  Search,
  Maximize2,
  Workflow,
  Scale,
  Radar,
  Box,
  Eye,
  Zap,
  Cpu,
  BarChart3,
  ArrowRight
} from "lucide-react";

/**
 * LURNAVA INSTITUTIONAL DESIGN TOKENS
 * Focus: High-density information, static hierarchy, and premium texture.
 */
const UI = {
  navy: "#071B36",
  teal: "#0D9488",
  tealSoft: "#F0FDFA",
  slate: "#475569",
  border: "#E2E8F0",
  bg: "#F8FBFC",
  rose: "#BE123C", // High contrast Red
  sky: "#0284C7",  // High contrast Blue
};

/**
 * Technical Card Component
 * Provides a structured, detailed frame for visual elements.
 */
const TechnicalFrame = ({ children, label, status }: { children: React.ReactNode; label: string; status?: string }) => (
  <div className="w-full h-full min-h-[440px] bg-white border-2 border-[#E2E8F0] rounded-[2.5rem] p-10 flex flex-col relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
    {/* Subtle Patterned Background */}
    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#071B36_1px,transparent_1px)] bg-[length:24px_24px]" />
    
    {/* Institutional Header */}
    <div className="flex items-center justify-between mb-10 relative z-10 border-b border-slate-100 pb-4">
      <div className="flex flex-col">
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-1">Module 0.4 Diagnostic</span>
        <h4 className="text-sm font-black text-[#071B36] uppercase tracking-tight italic">{label}</h4>
      </div>
      {status && (
        <div className="flex items-center gap-2 px-4 py-1.5 bg-slate-50 border border-slate-200 rounded-full">
          <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
          <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{status}</span>
        </div>
      )}
    </div>

    <div className="flex-1 flex flex-col items-center justify-center relative z-10">
      {children}
    </div>

    {/* Technical Metadata Bar */}
    <div className="mt-8 pt-4 border-t border-slate-50 flex items-center justify-between opacity-30">
       <span className="text-[8px] font-black text-slate-400">LN-SYSTEM-0.4</span>
       <div className="flex gap-2">
          <div className="w-1 h-1 bg-slate-400 rounded-full" />
          <div className="w-1 h-1 bg-slate-400 rounded-full" />
          <div className="w-1 h-1 bg-slate-400 rounded-full" />
       </div>
    </div>
  </div>
);

/**
 * Card 1: Time Compression Matrix
 * Focus: High-density data comparison (1h vs 60m).
 */
export const TimeCompressionBoard = () => {
  return (
    <TechnicalFrame label="Compression Logic" status="Data Aggregate">
      <div className="grid grid-cols-2 gap-12 w-full max-w-2xl items-center">
        {/* Left: Input Layer */}
        <div className="space-y-6">
           <div className="flex items-center gap-3">
              <Cpu size={18} className="text-slate-400" />
              <span className="text-[11px] font-black text-[#071B36] uppercase tracking-widest">Input: 60 Records (1m)</span>
           </div>
           <div className="grid grid-cols-10 gap-1.5 p-4 bg-slate-50 rounded-2xl border border-slate-200">
              {Array.from({ length: 60 }).map((_, i) => (
                <div key={i} className="w-1.5 h-3 bg-slate-200 rounded-full" />
              ))}
           </div>
           <p className="text-[10px] text-slate-400 font-bold leading-relaxed">
             Raw market noise is a collection of thousands of individual events.
           </p>
        </div>

        {/* Right: Output Layer */}
        <div className="bg-white border-2 border-[#0D9488] rounded-[2rem] p-8 shadow-xl shadow-teal-500/5 relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-4 opacity-5">
              <BarChart3 size={64} className="text-teal-950" />
           </div>
           <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white">
                 <CheckCircle size={16} />
              </div>
              <span className="text-[11px] font-black text-[#0D9488] uppercase tracking-widest">Output: 1 Record (1H)</span>
           </div>
           <div className="flex flex-col items-center">
              <div className="w-1 h-8 bg-teal-600/30" />
              <div className="w-14 h-24 bg-teal-500 rounded border border-teal-600 flex items-center justify-center">
                 <div className="w-10 h-1 bg-white/20 rounded-full" />
              </div>
              <div className="w-1 h-12 bg-teal-600/30" />
           </div>
        </div>
      </div>
    </TechnicalFrame>
  );
};

/**
 * Card 2: Synchronized Lenses
 * Focus: High-fidelity lens detail and spatial relation.
 */
export const TimeframeComparisonWindows = () => {
  return (
    <TechnicalFrame label="Visual Perspective" status="Active Lenses">
      <div className="flex flex-col gap-8 w-full max-w-2xl">
        <div className="flex items-center justify-between gap-4">
           {[
             { tf: "4H", label: "Macro", color: "text-[#071B36]", border: "border-[#071B36]", bg: "bg-[#071B36]" },
             { tf: "1H", label: "Working", color: "text-[#0D9488]", border: "border-[#0D9488]", bg: "bg-[#0D9488]" },
             { tf: "15m", label: "Tactical", color: "text-[#0284C7]", border: "border-[#0284C7]", bg: "bg-[#0284C7]" }
           ].map((lens) => (
             <div key={lens.tf} className="flex-1 flex flex-col gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl">
                   <div className={lens.color}><Layers size={14}/></div>
                   <span className="text-[10px] font-black text-[#071B36] uppercase tracking-widest">{lens.tf} {lens.label}</span>
                </div>
                <div className={cn("aspect-square bg-white border-2 rounded-[2rem] shadow-sm flex flex-col items-center justify-center relative overflow-hidden", lens.border)}>
                   <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:100%_8px]" />
                   <div className="w-full px-8 relative">
                      <div className="w-full h-px bg-slate-100 mb-4" />
                      <div className={cn("w-12 h-20 border-2 mx-auto rounded relative opacity-10", lens.bg)} />
                      <div className={cn("absolute inset-x-0 top-0 bottom-0 flex flex-col items-center justify-center pointer-events-none")}>
                        <div className={cn("w-[2px] h-32 opacity-20", lens.bg)} />
                      </div>
                   </div>
                </div>
             </div>
           ))}
        </div>
        <div className="p-4 bg-slate-900 rounded-2xl flex items-center justify-between text-white shadow-xl shadow-slate-900/10">
           <div className="flex items-center gap-4">
              <Eye size={20} className="text-teal-400" />
              <span className="text-xs font-bold italic">“Changing timeframe doesn't change reality—it changes the zoom.”</span>
           </div>
           <Search size={16} className="text-slate-500" />
        </div>
      </div>
    </TechnicalFrame>
  );
};

/**
 * Card 3: Gravitational Weight
 * Focus: Detailed "Density Map" of candles.
 */
export const CandleWeightTimeframe = () => {
  return (
    <TechnicalFrame label="Structural Mass" status="Gravity Map">
      <div className="grid grid-cols-2 gap-10 w-full max-w-xl">
        {/* Micro Layer */}
        <div className="p-8 bg-slate-50 border border-slate-200 rounded-[2.5rem] flex flex-col items-center gap-8 opacity-40">
           <div className="flex flex-col items-center gap-1">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">1m Candle</span>
              <span className="text-[8px] font-bold text-slate-300 italic">"Whisper"</span>
           </div>
           <div className="w-full flex flex-col items-center">
              <div className="w-px h-12 bg-slate-300" />
              <div className="w-6 h-8 border border-slate-300 rounded-sm" />
              <div className="w-px h-16 bg-slate-300" />
           </div>
           <div className="flex flex-col items-center gap-1">
              <div className="w-12 h-1 bg-slate-200 rounded-full" />
              <span className="text-[8px] font-black text-slate-400">Low Mass</span>
           </div>
        </div>

        {/* Institutional Layer */}
        <div className="p-8 bg-white border-2 border-[#071B36] rounded-[2.5rem] flex flex-col items-center gap-8 shadow-2xl relative overflow-hidden">
           <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#071B36_1px,transparent_1px)] bg-[length:12px_12px]" />
           <div className="flex flex-col items-center gap-1 relative z-10">
              <span className="text-[10px] font-black text-[#071B36] uppercase tracking-widest">Daily Candle</span>
              <span className="text-[8px] font-bold text-teal-600 italic uppercase tracking-widest">"Absolute Narrative"</span>
           </div>
           <div className="w-full flex flex-col items-center relative z-10">
              <div className="w-[3px] h-20 bg-[#071B36]" />
              <div className="w-16 h-32 bg-[#071B36] rounded-md shadow-xl flex items-center justify-center">
                 <div className="w-8 h-20 border border-white/20 rounded flex flex-col items-center gap-2 p-2">
                    <div className="w-full h-1 bg-white/20 rounded" />
                    <div className="w-full h-1 bg-white/20 rounded" />
                    <div className="w-full h-1 bg-white/20 rounded" />
                 </div>
              </div>
              <div className="w-[3px] h-24 bg-[#071B36]" />
           </div>
           <div className="flex flex-col items-center gap-1 relative z-10">
              <div className="w-16 h-2 bg-teal-500 rounded-full shadow-[0_0_10px_#14B8A6]" />
              <span className="text-[8px] font-black text-[#071B36] uppercase">High Density</span>
           </div>
        </div>
      </div>
    </TechnicalFrame>
  );
};

/**
 * Card 4: Operation Console
 * Focus: High-density dashboard elements.
 */
export const HtfLtfRoles = () => {
  return (
    <TechnicalFrame label="Strategic Roles" status="Dashboard Mode">
      <div className="grid grid-cols-2 gap-8 w-full max-w-4xl h-full py-4">
        {/* Role 1: HTF */}
        <div className="flex flex-col gap-6">
           <div className="p-6 bg-slate-900 rounded-[2rem] border-4 border-slate-800 text-white shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 rounded-xl bg-teal-500 flex items-center justify-center text-white">
                    <Compass size={24} strokeWidth={2.5} />
                 </div>
                 <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase text-teal-400 tracking-widest">Master Feed</span>
                    <span className="text-sm font-black uppercase italic">The Compass</span>
                 </div>
              </div>
              <div className="space-y-4">
                 {[
                   { label: "Narrative Alignment", status: "PRIMARY" },
                   { label: "Barrier Localization", status: "ANCHOR" },
                   { label: "Bias Calibration", status: "STATIC" }
                 ].map(item => (
                   <div key={item.label} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl border border-slate-700">
                      <span className="text-[10px] font-bold text-slate-300">{item.label}</span>
                      <span className="text-[8px] font-black text-teal-400 uppercase tracking-widest">{item.status}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Role 2: LTF */}
        <div className="flex flex-col gap-6">
           <div className="p-6 bg-white rounded-[2rem] border-2 border-slate-100 shadow-sm flex-1">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600">
                    <Activity size={24} strokeWidth={2.5} />
                 </div>
                 <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Detail Feed</span>
                    <span className="text-sm font-black uppercase italic text-[#071B36]">The Microscope</span>
                 </div>
              </div>
              <div className="space-y-4">
                 {[
                   { label: "Momentum Intensity", val: "88%" },
                   { label: "Reaction Precision", val: "HIGH" },
                   { label: "Local Structural Shift", val: "ACTIVE" }
                 ].map(item => (
                   <div key={item.label} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <span className="text-[10px] font-bold text-[#071B36]">{item.label}</span>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.val}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </TechnicalFrame>
  );
};

/**
 * Card 5: Conflict Hub
 * Focus: High-contrast clashing signals.
 */
export const TimeframeConflictRadar = () => {
  return (
    <TechnicalFrame label="Signal Interference" status="Warning Active">
      <div className="relative w-full max-w-sm flex flex-col gap-6">
        <div className="flex items-center justify-between px-2">
           <div className="flex items-center gap-2">
              <Radar className="text-rose-600" size={18} />
              <span className="text-[10px] font-black text-rose-600 uppercase tracking-widest">Collision Warning</span>
           </div>
           <div className="w-24 h-1 bg-slate-100 rounded-full relative overflow-hidden">
              <motion.div 
                animate={{ x: [-100, 100] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute inset-0 bg-rose-500"
              />
           </div>
        </div>

        <div className="flex flex-col gap-2 relative">
           <div className="absolute inset-0 bg-rose-50 blur-[60px] opacity-30 rounded-full" />
           {[
             { tf: "4H", label: "MACRO CEILING", status: "BEARISH", color: "text-[#BE123C]", border: "border-[#BE123C]", bg: "bg-[#BE123C]" },
             { tf: "5m", label: "LOCAL PUMP", status: "BULLISH", color: "text-[#0D9488]", border: "border-[#0D9488]", bg: "bg-[#0D9488]" }
           ].map((signal) => (
             <div key={signal.tf} className={cn("p-6 bg-white border-2 rounded-[2rem] flex items-center justify-between shadow-xl relative z-10", signal.border)}>
                <div className="flex items-center gap-5">
                   <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg", signal.bg)}>
                      <span className="font-black text-sm">{signal.tf}</span>
                   </div>
                   <div className="flex flex-col">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{signal.label}</span>
                      <span className={cn("text-xs font-black", signal.color)}>{signal.status}</span>
                   </div>
                </div>
                <AlertTriangle size={20} className={signal.color} />
             </div>
           ))}
        </div>

        <div className="text-center mt-4">
           <p className="text-[11px] text-[#071B36] font-black uppercase tracking-tight italic border-y border-slate-100 py-4">
             "Mixed evidence requires a neutral state."
           </p>
        </div>
      </div>
    </TechnicalFrame>
  );
};

/**
 * Card 6: Top-Down Architecture
 * Focus: Hierarchical funneling logic.
 */
export const TopDownReadingFlow = () => {
  return (
    <TechnicalFrame label="Analytical Workflow" status="Phase Sequence">
      <div className="flex flex-col items-center w-full max-w-sm">
        {[
          { step: "01", label: "NARRATIVE FILTER", detail: "4H: Where is the story?", bg: "bg-[#071B36]" },
          { step: "02", label: "STRUCTURE FILTER", detail: "1H: Where is the range?", bg: "bg-[#0D9488]" },
          { step: "03", label: "BEHAVIOR FILTER", detail: "5m: Where is the intent?", bg: "bg-[#0284C7]" }
        ].map((item, i) => (
          <React.Fragment key={item.step}>
             <div className="w-full p-6 bg-white border-2 border-slate-100 rounded-[2.5rem] flex items-center gap-6 shadow-sm group hover:border-slate-200 transition-colors">
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg", item.bg)}>
                   <span className="font-black italic">{item.step}</span>
                </div>
                <div className="flex flex-col">
                   <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Architecture Phase</span>
                   <span className="text-sm font-black text-[#071B36] uppercase tracking-tight">{item.label}</span>
                   <span className="text-[10px] font-bold text-slate-500 mt-1">{item.detail}</span>
                </div>
             </div>
             {i < 2 && (
               <div className="h-6 w-[2px] bg-slate-100 mx-auto" />
             )}
          </React.Fragment>
        ))}
      </div>
    </TechnicalFrame>
  );
};

/**
 * Card 7: Decision Center
 * Focus: Complex feed of data for decision.
 */
export const TimeframeDecisionScenario = () => {
  return (
    <TechnicalFrame label="Diagnostic Challenge" status="Live Scenario">
      <div className="grid grid-cols-2 gap-8 w-full max-w-4xl h-full py-2">
        {/* Data Cluster */}
        <div className="grid grid-cols-1 gap-3">
           {[
             { tf: "4H", signal: "RESISTANCE ZONE", val: "Critical", icon: <Compass size={14}/>, color: "text-[#BE123C]", bg: "bg-[#BE123C]" },
             { tf: "1H", signal: "CONSOLIDATION", val: "Neutral", icon: <Box size={14}/>, color: "text-[#475569]", bg: "bg-[#475569]" },
             { tf: "5m", signal: "IMPULSE PUMP", val: "Active", icon: <Zap size={14}/>, color: "text-[#0D9488]", bg: "bg-[#0D9488]" }
           ].map(item => (
             <div key={item.tf} className="p-5 bg-white border border-slate-100 rounded-2xl flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-4">
                   <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center text-white", item.bg)}>
                      {item.icon}
                   </div>
                   <div className="flex flex-col">
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{item.tf} DIAGNOSTIC</span>
                      <span className="text-[11px] font-black text-[#071B36] uppercase">{item.signal}</span>
                   </div>
                </div>
                <span className={cn("text-[9px] font-black uppercase tracking-widest", item.color)}>{item.val}</span>
             </div>
           ))}
        </div>

        {/* Tactical Prompt */}
        <div className="bg-[#071B36] rounded-[3rem] p-10 flex flex-col items-center justify-center text-center gap-8 shadow-2xl relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:16px_16px]" />
           <div className="w-20 h-20 rounded-[2rem] bg-white/10 border border-white/20 flex items-center justify-center text-white">
              <Workflow size={40} />
           </div>
           <div className="space-y-3 relative z-10">
              <h5 className="text-xl font-black text-white uppercase tracking-tight italic leading-none">Decision Hub</h5>
              <div className="h-px w-12 bg-teal-500 mx-auto" />
              <p className="text-sm text-slate-300 font-bold leading-relaxed max-w-[220px] mx-auto uppercase tracking-tighter">
                 Priority Logic Test: Which layer carries the burden of proof?
              </p>
           </div>
        </div>
      </div>
    </TechnicalFrame>
  );
};

/**
 * Card 8: Module Verification
 * Focus: Institutional seal of completion.
 */
export const TimeframeDebriefBoard = () => {
  return (
    <TechnicalFrame label="Module Completion" status="Verified">
      <div className="flex flex-col items-center gap-10 w-full max-w-xl text-center">
        <div className="relative">
           <div className="w-28 h-28 rounded-full border-8 border-teal-500 flex items-center justify-center text-teal-600 shadow-xl relative z-10 bg-white">
              <CheckCircle size={56} strokeWidth={2.5} />
           </div>
           <div className="absolute inset-[-15px] border-2 border-slate-100 rounded-full" />
        </div>

        <div className="space-y-4">
           <h2 className="text-4xl font-black text-[#071B36] tracking-tighter uppercase italic leading-none">Perspective Secure</h2>
           <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.6em] py-2 border-y border-slate-50 w-full">
             Institutional Record 0.4
           </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
           {["COMPRESSION", "ROLES", "CONFLICT", "WORKFLOW"].map((item) => (
             <div key={item} className="px-5 py-2.5 bg-slate-900 text-white text-[9px] font-black tracking-widest rounded-xl border border-slate-700 shadow-lg">
                {item}
             </div>
           ))}
        </div>

        <div className="pt-6 flex flex-col items-center gap-4">
           <div className="w-16 h-1 bg-slate-100 rounded-full" />
           <p className="text-[10px] font-black text-[#071B36] uppercase tracking-[0.4em] flex items-center gap-4">
              Step Forward <ArrowRight size={14} className="text-teal-500" />
           </p>
        </div>
      </div>
    </TechnicalFrame>
  );
};
