"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  BookOpen, 
  MapPin, 
  Target, 
  ClipboardCheck, 
  ChevronRight,
  TrendingUp,
  ArrowUp,
  ArrowDown,
  Info,
  XCircle,
  CheckCircle2,
  FileText
} from "lucide-react";

/**
 * 0.1 - Lurnava Learning Loop
 * Interactive 4-step loop
 */
export const LearningLoop = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      title: "Learn",
      icon: BookOpen,
      desc: "Master a specific structural concept through modules and theory. This is where you build your knowledge base.",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      title: "Practice",
      icon: MapPin,
      desc: "Apply the concept in the Lab simulation. Use historical data to see if you can identify the structure in real-time.",
      color: "text-teal-500",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200"
    },
    {
      title: "Test / Mission",
      icon: Target,
      desc: "Complete the knowledge test or synthesis mission to prove you can use the skill without guidance.",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      title: "Journal Review",
      icon: ClipboardCheck,
      desc: "Analyze your performance. Document what worked, what didn't, and what assumptions you made.",
      color: "text-amber-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200"
    }
  ];

  return (
    <div className="my-12 py-8 px-4 bg-slate-50/50 rounded-[2.5rem] border border-slate-100 shadow-sm">
      <div className="text-center mb-10">
        <h3 className="text-xl font-extrabold text-[var(--ln-navy-900)] tracking-tight">The Lurnava Learning Loop</h3>
        <p className="text-xs text-slate-500 font-medium mt-1 italic">Click a step to see how your skills are built</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
        {steps.map((step, i) => {
          const Icon = step.icon;
          const isActive = activeStep === i;
          
          return (
            <React.Fragment key={i}>
              <button
                onClick={() => setActiveStep(i)}
                className={cn(
                  "relative flex flex-col items-center gap-3 p-6 rounded-3xl border-2 transition-all duration-300 w-full md:w-1/4",
                  isActive 
                    ? cn("scale-110 shadow-xl z-10 bg-white", step.borderColor)
                    : "bg-white/50 border-transparent grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:bg-white"
                )}
              >
                <div className={cn("p-4 rounded-2xl shadow-inner", step.bgColor, step.color)}>
                  <Icon size={24} />
                </div>
                <span className={cn("text-[10px] font-extrabold uppercase tracking-widest", step.color)}>
                  {step.title}
                </span>
                
                {isActive && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b-2 border-r-2 rotate-45 border-[inherit]" />
                )}
              </button>
              
              {i < steps.length - 1 && (
                <div className="hidden md:flex text-slate-200">
                  <ChevronRight size={20} strokeWidth={3} />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      <div className="mt-12 max-w-2xl mx-auto p-8 bg-white rounded-3xl border border-slate-100 shadow-md animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex items-start gap-5">
          <div className={cn("p-3 rounded-xl", steps[activeStep].bgColor, steps[activeStep].color)}>
            {React.createElement(steps[activeStep].icon, { size: 24 })}
          </div>
          <div className="space-y-2">
            <h4 className={cn("text-lg font-bold tracking-tight", steps[activeStep].color)}>
              Step {activeStep + 1}: {steps[activeStep].title}
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              {steps[activeStep].desc}
            </p>
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
    <div className="my-12 p-8 md:p-12 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col lg:flex-row items-center gap-12 overflow-hidden">
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
    <div className="my-12 space-y-8">
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
