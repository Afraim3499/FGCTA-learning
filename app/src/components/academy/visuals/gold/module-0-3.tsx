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
  ClipboardCheck,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  ShieldAlert,
  Info,
  ArrowRight
} from "lucide-react";

/**
 * LURNAVA INSTITUTIONAL DESIGN TOKENS
 */
const UI = {
  navy: "#071B36",
  teal: "#0D9488",
  slate: "#475569",
  border: "#E2E8F0",
  bg: "#F8FBFC",
  rose: "#BE123C",
  sky: "#0284C7",
  amber: "#D97706"
};

/**
 * Institutional Frame Component for Module 0.3 Gold
 */
const InstitutionalFrame = ({ 
  children, 
  label, 
  status = "AUDIT STANDBY",
  id = "LN-0.3-AUD"
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
          <ClipboardCheck size={10} className="text-teal-600 animate-pulse" />
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
 * 0.3 - Gold Candles Are Volatility Records
 */
export const GoldCandleContextBoard = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const tags = [
    { id: "usd", label: "USD Context", desc: "Dollar strength/weakness directly pressure Gold prices.", icon: <Globe size={14} />, color: "bg-blue-500" },
    { id: "rates", label: "Rate Expectations", desc: "Yield changes shift the opportunity cost of holding Gold.", icon: <TrendingUp size={14} />, color: "bg-indigo-500" },
    { id: "news", label: "News Window", desc: "Periods of extreme instability during macro data releases.", icon: <Zap size={14} />, color: "bg-amber-500" },
    { id: "session", label: "Session Activity", desc: "Liquidity profiles shift between London and NY windows.", icon: <Clock size={14} />, color: "bg-slate-700" },
    { id: "liq", label: "Liquidity Condition", desc: "Thin books can cause disproportionate price jumps.", icon: <Layers size={14} />, color: "bg-teal-500" },
    { id: "futures", label: "Futures Pressure", desc: "COMEX flows and contract rolls impact the quote.", icon: <Activity size={14} />, color: "bg-rose-500" }
  ];

  const active = tags.find(t => t.id === activeTag);

  return (
    <InstitutionalFrame label="Gold Candle Context Analyzer" id="LN-0.3-CTX" status="CONTEXT SCAN">
      <div className="w-full pt-6">
        
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Central Candle with Tags */}
        <div className="lg:col-span-7 relative h-[450px] bg-[#F1F5F9] rounded-[3rem] border border-slate-200 flex items-center justify-center overflow-hidden">
          {/* Context Tags Grid */}
          <div className="absolute inset-0 grid grid-cols-2 gap-x-12 gap-y-16 p-12 pointer-events-none">
            {tags.map((t, i) => (
              <div 
                key={t.id}
                className={cn(
                  "flex items-center gap-3 p-4 rounded-3xl border bg-white shadow-xl transition-all duration-700 self-center max-w-[180px]",
                  i % 2 === 0 ? "justify-self-start -translate-x-4" : "justify-self-end translate-x-4",
                  activeTag === t.id ? "scale-125 border-slate-900 shadow-2xl z-30 " : " grayscale scale-90"
                )}
              >
                <div className={cn("w-8 h-8 rounded-xl text-white flex items-center justify-center shadow-lg shrink-0", t.color)}>
                  {t.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-tight text-slate-900 leading-tight">{t.label}</span>
              </div>
            ))}
          </div>

          {/* The Candle */}
          <div className="relative z-10 flex flex-col items-center translate-y-4">
            <div className="w-0.5 h-20 bg-slate-400 " />
            <div className="w-14 h-28 bg-amber-400 rounded-sm shadow-2xl border border-amber-500 relative">
               <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
               {/* Reflection */}
               <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10" />
            </div>
            <div className="w-0.5 h-20 bg-slate-400 " />
            
            <div className="mt-6 px-4 py-1.5 rounded-full bg-[#0F172A] backdrop-blur-sm text-white text-[9px] font-black uppercase tracking-[0.2em] shadow-lg border border-white/10">
              XAU/USD RECORD
            </div>
          </div>
        </div>

        {/* Info Panel */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Select Context Tag</p>
            <div className="grid grid-cols-2 gap-2">
              {tags.map(t => (
                <button
                  key={t.id}
                  onClick={() => setActiveTag(t.id)}
                  className={cn(
                    "p-3 rounded-xl border text-[9px] font-black uppercase tracking-tight transition-all",
                    activeTag === t.id ? "bg-slate-900 border-slate-900 text-white shadow-md" : "bg-white border-slate-100 text-slate-500 hover:border-slate-200"
                  )}
                >
                  {t.label}
                </button>
              ))}
            </div>
            
            {active && (
              <div className="mt-6 p-4 rounded-2xl bg-[#F8FAFC] border border-slate-100 animate-in fade-in slide-in-from-top-2">
                <p className="text-[10px] font-bold text-slate-600 leading-relaxed italic">
                  "{active.desc}"
                </p>
              </div>
            )}
          </div>

          <div className="p-5 bg-amber-900 rounded-[2rem] border border-amber-800 text-center">
            <p className="text-[10px] font-black uppercase tracking-widest text-amber-200">
              <span className="text-white">Professional Rule:</span> Read the environment, not just the candle.
            </p>
          </div>
        </div>
      </div>
    
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 0.3 - News Candle vs. Structured Candle
 */
export const GoldCandleQualityBoard = () => {
  const [activePart, setActivePart] = useState<'news' | 'struct'>('struct');

  return (
    <InstitutionalFrame label="Gold Candle Quality Comparator" id="LN-0.3-QUAL" status="QUALITY COMPARATOR">
      <div className="w-full pt-6">
        
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* News Panel */}
        <div 
          onMouseEnter={() => setActivePart('news')}
          className={cn(
            "p-6 rounded-[2.5rem] border relative transition-all duration-300",
            activePart === 'news' ? "bg-[#FFF5F5] border-rose-200 shadow-xl scale-[1.01]" : "bg-white border-slate-100  grayscale-[0.5]"
          )}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center shadow-lg">
              <Zap size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-rose-600">News Window</p>
              <p className="text-lg font-black text-slate-900">Event Candle</p>
            </div>
          </div>

          <div className="space-y-3 mb-8">
             {[
               "Spread Expansion",
               "Fast Repricing",
               "Panic Movement",
               "Unstable Liquidity"
             ].map((t, i) => (
               <div key={i} className="flex items-center gap-2">
                 <AlertCircle size={12} className="text-rose-500" />
                 <span className="text-[10px] font-bold text-slate-600 uppercase">{t}</span>
               </div>
             ))}
          </div>

          <div className="bg-white rounded-2xl p-6 border border-rose-100 flex flex-col items-center">
             <div className="w-0.5 h-24 bg-slate-300" />
             <div className="w-14 h-4 bg-rose-500 rounded-sm shadow-md" />
             <div className="w-0.5 h-12 bg-slate-300" />
             <p className="text-[8px] font-black uppercase tracking-widest mt-2 text-rose-500">Big Body ≠ Clean Body</p>
          </div>
        </div>

        {/* Structured Panel */}
        <div 
          onMouseEnter={() => setActivePart('struct')}
          className={cn(
            "p-6 rounded-[2.5rem] border relative transition-all duration-300",
            activePart === 'struct' ? "bg-[#EAFDF1] border-emerald-200 shadow-xl scale-[1.01]" : "bg-white border-slate-100  grayscale-[0.5]"
          )}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-lg">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600">Context Supported</p>
              <p className="text-lg font-black text-slate-900">Structured Candle</p>
            </div>
          </div>

          <div className="space-y-3 mb-8">
             {[
               "Clear Close Location",
               "Level Respected",
               "Confirmed Follow-Through",
               "Stable Liquidity"
             ].map((t, i) => (
               <div key={i} className="flex items-center gap-2">
                 <CheckCircle2 size={12} className="text-emerald-500" />
                 <span className="text-[10px] font-bold text-slate-600 uppercase">{t}</span>
               </div>
             ))}
          </div>

          <div className="bg-white rounded-2xl p-6 border border-emerald-100 flex flex-col items-center">
             <div className="w-0.5 h-8 bg-slate-300" />
             <div className="w-10 h-20 bg-emerald-500 rounded-sm shadow-md" />
             <div className="w-0.5 h-8 bg-slate-300" />
             <p className="text-[8px] font-black uppercase tracking-widest mt-2 text-emerald-600">Readable Evidence</p>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
          <span className="text-amber-400">Verdict:</span> Structure and close location decide quality, not just size.
        </p>
      </div>
    
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 0.3 - Gold Wick Diagnosis
 */
export const GoldWickDiagnosticBoard = () => {
  const [activePart, setActivePart] = useState<string | null>(null);

  const diagnoses = [
    { id: "rej", label: "Clean Rejection", desc: "Price tests an area and fails to hold, supported by context.", color: "border-emerald-500", wickH: "h-20", bodyH: "h-16" },
    { id: "sweep", label: "Liquidity Sweep", desc: "Price moves beyond a level then returns quickly.", color: "border-blue-500", wickH: "h-32", bodyH: "h-8" },
    { id: "spike", label: "News Spike", desc: "Fast repricing creates temporary extreme movement.", color: "border-rose-500", wickH: "h-40", bodyH: "h-4" },
    { id: "thin", label: "Thin Liquidity", desc: "Weak depth allows price to travel too far too quickly.", color: "border-amber-500", wickH: "h-28", bodyH: "h-12" }
  ];

  const active = diagnoses.find(d => d.id === activePart) || diagnoses[0];

  return (
    <InstitutionalFrame label="Gold Wick Diagnostic Board" id="LN-0.3-DIAG" status="WICK DIAGNOSTIC">
      <div className="w-full pt-6">
        
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Visualization */}
        <div className="lg:col-span-5 bg-[#F1F5F9] rounded-[3rem] p-10 border border-slate-200 flex flex-col items-center justify-center min-h-[350px]">
           <div className={cn("w-0.5 bg-slate-400 transition-all duration-500", active.wickH)} />
           <div className={cn("w-12 bg-amber-400 rounded-sm shadow-md transition-all duration-500 border border-amber-500", active.bodyH)} />
           <div className="w-0.5 h-8 bg-slate-300" />
           
           <div className="mt-8 text-center space-y-2 animate-in fade-in zoom-in-95 duration-500">
             <div className={cn("px-4 py-1 rounded-full border-2 text-[10px] font-black uppercase tracking-widest bg-white shadow-md", active.color)}>
               {active.label}
             </div>
             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Diagnostic Result</p>
           </div>
        </div>

        {/* Diagnosis Buttons */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Select Diagnostic Reading</p>
          {diagnoses.map(d => (
            <button
              key={d.id}
              onClick={() => setActivePart(d.id)}
              className={cn(
                "p-5 rounded-2xl border text-left transition-all duration-300",
                activePart === d.id ? "bg-slate-900 border-slate-800 shadow-xl scale-[1.02] text-white" : "bg-white border-slate-100 text-slate-600 hover:border-slate-200"
              )}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-black uppercase tracking-tight">{d.label}</span>
                <span className={cn("text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md", activePart === d.id ? "bg-white/10 text-white" : "bg-[#F8FAFC] text-slate-400")}>
                  {d.id === 'rej' ? 'High Trust' : 'Caution'}
                </span>
              </div>
              <p className={cn("text-[10px] font-bold leading-relaxed", activePart === d.id ? "text-slate-400" : "text-slate-500")}>
                {d.desc}
              </p>
            </button>
          ))}
        </div>
      </div>
    
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 0.3 - Gold Candle Decision Board
 */
export const GoldCandleDecisionBoard = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [auditedSteps, setAuditedSteps] = useState<Set<number>>(new Set([0]));

  const handleStepChange = (index: number) => {
    setActiveStep(index);
    setAuditedSteps(prev => new Set([...Array.from(prev), index]));
  };

  const isAuditComplete = auditedSteps.size === 6;

  const checklist = [
    { label: "News Window", val: "Major Economic Data", status: "Active", desc: "Volatility is currently high and unstable." },
    { label: "Close Location", val: "Middle of Range", status: "Neutral", desc: "Candle did not commit to a strong rejection." },
    { label: "Meaningful Level", val: "Near Previous High", status: "Testing", desc: "Price is reacting to a key structural area." },
    { label: "Liquidity Depth", val: "Thin/Fragile", status: "Caution", desc: "Orders are not providing stable support." },
    { label: "USD/Rate Context", val: "Unconfirmed", status: "Waiting", desc: "The move lacks dollar-driven confirmation." },
    { label: "Follow-Through", val: "Unknown", status: "Awaiting", desc: "The next candles have not appeared yet." }
  ];

  return (
    <InstitutionalFrame label="Gold Candle Decision Protocol" id="LN-0.3-DEC" status="DECISION AUDIT">
      <div className="w-full pt-6">
        
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {/* Situation Feed */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-6">
             <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shadow-lg">
               <ClipboardCheck size={20} />
             </div>
             <div>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Verification Checklist</p>
               <p className="text-lg font-black text-slate-900 tracking-tight leading-none mt-1">Audit Instrument</p>
             </div>
          </div>

          <div className="flex flex-col gap-2">
            {checklist.map((item, i) => {
              const isActive = activeStep === i;
              const isAudited = auditedSteps.has(i);
              return (
                <button
                  key={i}
                  onClick={() => handleStepChange(i)}
                  className={cn(
                    "p-4 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden",
                    isActive ? "bg-slate-900 border-slate-800 shadow-xl scale-[1.02] z-10 text-white" : 
                    isAudited ? "bg-white border-emerald-100 text-slate-600 shadow-sm" : "bg-[#F8FAFC] border-slate-100 text-slate-400"
                  )}
                >
                  {isActive && <div className="absolute top-0 left-0 w-1 h-full bg-amber-400" />}
                  <div className="flex items-center justify-between mb-1">
                     <div className="flex items-center gap-3">
                       <div className={cn(
                         "w-5 h-5 rounded-full border flex items-center justify-center transition-colors",
                         isActive ? "border-amber-400 bg-amber-400/20" : 
                         isAudited ? "border-emerald-500 bg-emerald-50" : "border-slate-200 bg-white"
                       )}>
                         {isAudited ? <CheckCircle2 size={10} className="text-emerald-600" /> : <span className="text-[8px] font-black">{i + 1}</span>}
                       </div>
                       <span className="text-[11px] font-black uppercase tracking-tight">{item.label}</span>
                     </div>
                     <span className={cn("text-[8px] font-black uppercase px-2 py-0.5 rounded-md", 
                       isActive ? "bg-amber-400 text-slate-900" : 
                       isAudited ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-400"
                     )}>
                       {item.status}
                     </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Diagnostic Result */}
        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 flex flex-col items-center text-center shadow-sm relative overflow-hidden">
           <div className="absolute top-0 right-0 p-4  text-slate-900">
             <ShieldAlert size={150} />
           </div>

           <div className="mb-6 p-4 bg-[#F8FAFC] rounded-2xl relative z-10">
             <Info size={24} className="text-slate-900" />
           </div>
           
           <h3 className="text-base font-black text-slate-900 mb-1 z-10">{checklist[activeStep].val}</h3>
           <p className="text-[11px] font-bold text-slate-500 leading-relaxed mb-8 z-10">
             {checklist[activeStep].desc}
           </p>

           <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden mb-8 z-10">
             <div 
               className="h-full bg-amber-500 transition-all duration-1000" 
               style={{ width: `${((activeStep + 1) / checklist.length) * 100}%` }}
             />
           </div>

            <div className="mt-auto w-full pt-4">
              {activeStep < checklist.length - 1 ? (
                <button 
                  onClick={() => handleStepChange(activeStep + 1)}
                  className="w-full py-4 rounded-2xl bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                >
                  Audit Next Instrument <ArrowRight size={16} />
                </button>
              ) : (
                <div className={cn(
                  "p-6 rounded-[2rem] border w-full z-10 transition-all duration-700 text-left",
                  isAuditComplete ? "bg-[#FFF5F5] border-rose-200" : "bg-[#FFFBEB] border-amber-200"
                )}>
                   <p className="text-[10px] font-black text-rose-900 uppercase tracking-widest leading-relaxed mb-2 flex items-center gap-2">
                     <AlertCircle size={14} /> Final Verdict
                   </p>
                   <p className="text-[11px] font-bold text-slate-700 leading-relaxed">
                     {isAuditComplete 
                       ? "MECHANICAL NOISE - DO NOT TRADE. This move is shaped by event-volatility and thin liquidity. Without USD context and clean structure, this is a trap for retail reactivity." 
                       : `AUDIT IN PROGRESS: ${auditedSteps.size}/6 variables checked.`}
                   </p>
                </div>
              )}
            </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] italic">
          Reading is not complete until every context variable is audited.
        </p>
      </div>
    
      </div>
    </InstitutionalFrame>
  );
};
