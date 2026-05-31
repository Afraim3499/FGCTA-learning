import React, { useState } from "react";
import { 
  Compass, 
  ArrowRight, 
  RotateCcw, 
  XCircle, 
  CheckCircle2,
  Lock,
  Search,
  Server,
  Layers,
  Coins,
  Activity,
  AlertTriangle
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Premium Crypto Institutional Frame for Module 0.12
 * Uses the proven dark-on-light design system
 * with cyan/indigo accent touches for Crypto identity.
 */
export const CryptoDerivativesInstitutionalFrame = ({ 
  children, 
  label, 
  status = "STANDBY",
  id = "LN-0.12-CRD"
}: { 
  children: React.ReactNode; 
  label: string; 
  status?: string;
  id?: string;
}) => (
  <div className="w-full h-full min-h-[550px] bg-[#F7FAFC] border border-[#E2E8F0] rounded-[2rem] p-6 md:p-8 flex flex-col relative overflow-hidden shadow-sm select-none">
    {/* Grid Background Effect */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#071B36_1.5px,transparent_1.5px)] bg-[length:24px_24px]" />
    
    {/* Top Header Row */}
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 relative z-10 border-b border-slate-200 pb-4 shrink-0">
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-2 mb-1">
          <Activity size={11} className="text-cyan-600 animate-pulse" />
          <span className="text-[9px] font-black text-slate-600 uppercase tracking-[0.25em]">Crypto Derivatives Lab</span>
        </div>
        <h4 className="text-base font-black text-[#071B36] uppercase tracking-tighter italic leading-tight">{label}</h4>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-end">
          <span className="text-[8px] font-black text-slate-600 uppercase tracking-widest leading-none mb-1">Module ID</span>
          <span className="text-[10px] font-mono text-[#071B36] font-bold">{id}</span>
        </div>
        <div className="w-px h-6 bg-slate-200" />
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg shadow-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
          <span className="text-[9px] font-black text-[#071B36] uppercase tracking-widest">{status}</span>
        </div>
      </div>
    </div>

    {/* Dynamic Content Center Stage */}
    <div className="flex-1 flex flex-col items-center justify-center relative z-10 w-full min-h-0 min-w-0">
      {children}
    </div>

    {/* Bottom Footer Row */}
    <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between shrink-0">
       <div className="flex gap-4">
          <div className="flex items-center gap-1.5">
            <Server size={10} className="text-slate-400" />
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Derivatives Engine Linked</span>
          </div>
       </div>
       <div className="flex items-center gap-1.5">
          <Lock size={10} className="text-slate-400" />
          <span className="text-[8px] font-mono text-slate-400 uppercase tracking-tighter">LN-DERIVATIVES-LAB-V2</span>
       </div>
    </div>
  </div>
);

/**
 * Mentor Insight Component for Crypto
 */
export const CryptoDerivativesMentorInsight = ({ text, analogy }: { text: string; analogy?: string }) => (
  <div className="w-full mt-6 pt-5 border-t border-slate-200 flex flex-col gap-2 shrink-0 text-left">
    <div className="flex items-center gap-2">
      <div className="px-2 py-1 bg-[#071B36] text-white text-[8px] font-black uppercase tracking-widest rounded-sm">Mentor Insight</div>
      <div className="h-px flex-1 bg-slate-200" />
    </div>
    <div className="flex gap-4">
       <div className="flex-1">
          <p className="text-xs font-bold text-[#071B36] leading-relaxed">{text}</p>
          {analogy && (
            <p className="mt-1.5 text-[11px] text-slate-700 italic leading-snug">
              <span className="font-black uppercase text-[9px] mr-2 text-cyan-600 not-italic">Analogy:</span>
              {analogy}
            </p>
          )}
       </div>
    </div>
  </div>
);

/**
 * Crypto Reading Quality Badge
 */
export const CryptoDerivativesReadingQualityBadge = ({
  quality,
  className
}: {
  quality: string;
  className?: string;
}) => {
  const upper = quality.toUpperCase();
  const isHigh = ["HIGH QUALITY", "CLEAR", "STABILIZED HOLD", "FOLLOW-THROUGH HOLD", "BROAD CONSENSUS", "STABILIZED", "CLEAN MOVE", "CLEAN OUTFLOW"].includes(upper);
  const isLow = ["LOW QUALITY", "UNSTABLE", "NOISE", "TRAP", "FAKE BREAKOUT", "CHOPPY NOISE", "MIXED", "ISOLATED SPIKE", "LOCAL DISTORTION", "FRAGILE", "MIXED / FRAGILE", "CROWDED RISK"].includes(upper);

  return (
    <span className={cn(
      "text-[8px] font-mono font-black px-2 py-0.5 rounded border uppercase tracking-wider shrink-0",
      isHigh ? "bg-emerald-50 text-emerald-800 border-emerald-300/60" :
      isLow ? "bg-rose-50 text-rose-800 border-rose-300/60" :
      "bg-amber-50 text-amber-800 border-amber-300/60",
      className
    )}>
      {quality}
    </span>
  );
};

/**
 * Toggle Selector Tab Component for Crypto
 */
export const CryptoDerivativesToggleSelector = ({
  options,
  selectedId,
  onChange,
  className
}: {
  options: { id: string; name: string }[];
  selectedId: string;
  onChange: (id: string) => void;
  className?: string;
}) => (
  <div className={cn("flex bg-slate-100 border border-slate-200 p-1 rounded-xl shrink-0 gap-1 overflow-x-auto max-w-full", className)}>
    {options.map((opt) => (
      <button
        type="button"
        key={opt.id}
        onClick={() => onChange(opt.id)}
        className={cn(
          "px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap",
          selectedId === opt.id
            ? "bg-[#071B36] text-white shadow-sm"
            : "text-slate-600 hover:text-[#071B36] hover:bg-slate-50"
        )}
      >
        {opt.name}
      </button>
    ))}
  </div>
);

/**
 * Step Workflow Progress Tracker
 */
export const CryptoDerivativesStepWorkflow = ({
  steps,
  activeStep,
  className
}: {
  steps: { id: string; label: string; done?: boolean }[];
  activeStep: string;
  className?: string;
}) => (
  <div className={cn("flex items-center justify-between w-full max-w-2xl bg-white border border-slate-200 rounded-xl p-3 shadow-sm overflow-x-auto gap-2", className)}>
    {steps.map((step, idx) => {
      const isCurrent = step.id === activeStep;
      const isDone = step.done;
      return (
        <React.Fragment key={step.id}>
          <div className="flex items-center gap-2 shrink-0">
            <div className={cn(
              "w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold border transition-all",
              isCurrent ? "bg-[#071B36] text-white border-[#071B36]" :
              isDone ? "bg-cyan-50 text-cyan-700 border-cyan-300" :
              "bg-slate-50 text-slate-400 border-slate-200"
            )}>
              {idx + 1}
            </div>
            <span className={cn(
              "text-[10px] font-bold uppercase tracking-tight",
              isCurrent ? "text-[#071B36]" :
              isDone ? "text-cyan-700" : "text-slate-400"
            )}>
              {step.label}
            </span>
          </div>
          {idx < steps.length - 1 && (
            <ArrowRight size={12} className="text-slate-300 shrink-0" />
          )}
        </React.Fragment>
      );
    })}
  </div>
);
