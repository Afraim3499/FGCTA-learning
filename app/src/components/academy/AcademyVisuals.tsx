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
  FileText,
  Zap,
  MessageSquare,
  Lightbulb,
  AlertCircle,
  ShieldAlert,
  Gavel,
  Scale,
  Layers
} from "lucide-react";

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
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Interactive Loop */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">
        {steps.map((step, i) => {
          const Icon = step.icon;
          const isActive = activeStep === i;
          
          return (
            <React.Fragment key={i}>
              <button
                onClick={() => setActiveStep(i)}
                className={cn(
                  "relative flex flex-col items-center gap-2 p-4 rounded-[1.5rem] border-2 transition-all duration-500 w-full md:w-1/4 group",
                  isActive 
                    ? cn("scale-105 shadow-xl bg-white", step.borderColor)
                    : "bg-white/40 border-transparent opacity-60 hover:opacity-100 hover:bg-white/80 hover:shadow-lg"
                )}
              >
                <div className={cn(
                  "p-3 rounded-xl transition-transform duration-500 group-hover:scale-110",
                  isActive ? cn("shadow-inner", step.bgColor, step.color) : "bg-slate-100 text-slate-400"
                )}>
                  <Icon size={20} />
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
                  <ChevronRight size={18} strokeWidth={3} />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Detail Panel */}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden">
          <div className={cn("px-6 py-3 border-b flex items-center justify-between", steps[activeStep].bgColor, steps[activeStep].borderColor.replace("border-", "border-b-"))}>
             <div className="flex items-center gap-2.5">
                <div className={cn("p-1.5 rounded-lg bg-white", steps[activeStep].color)}>
                  {React.createElement(steps[activeStep].icon, { size: 14 })}
                </div>
                <span className={cn("text-[10px] font-extrabold uppercase tracking-widest", steps[activeStep].color)}>
                  Phase Detail: {steps[activeStep].title}
                </span>
             </div>
             <div className="px-2.5 py-1 rounded-full bg-white/50 text-[9px] font-bold text-slate-500 uppercase tracking-tight">
               Step {activeStep + 1} of 4
             </div>
          </div>
          
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <h5 className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">What happens here</h5>
                <p className="text-sm font-bold text-[var(--ln-navy-900)] leading-relaxed">
                  {steps[activeStep].what}
                </p>
              </div>
              <div className="space-y-2">
                <h5 className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Why it matters</h5>
                <p className="text-sm font-medium text-slate-600 leading-relaxed">
                  {steps[activeStep].why}
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-100 space-y-2">
                <h5 className="text-[10px] font-extrabold uppercase tracking-widest text-rose-500">If skipped</h5>
                <p className="text-sm font-medium text-rose-700 leading-relaxed">
                  {steps[activeStep].skipped}
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-2">
                <h5 className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-600">Learner Action</h5>
                <p className="text-sm font-bold text-emerald-900 leading-relaxed italic">
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
 * 0.1 - Training Cockpit
 * Interactive System Map
 */
export const TrainingCockpit = () => {
  const [activeItem, setActiveItem] = useState<number>(0);

  const instruments = [
    { title: "Modules", role: "Structured Manual", prevents: "Terminology confusion", guide: "Read and understand one concept at a time before moving to the simulator.", icon: <BookOpen size={20} /> },
    { title: "Tasks", role: "Instrument Check", prevents: "Mental lazy shortcuts", guide: "Use these to prove you understand the mechanics of a single rule.", icon: <Zap size={20} /> },
    { title: "The Lab", role: "Simulator", prevents: "Financial risk while learning", guide: "Practice reading real historical data without the pressure of live execution.", icon: <MapPin size={20} /> },
    { title: "Scenarios", role: "Case-File Study", prevents: "Generic chart reading", guide: "Study curated historical situations to see how rules were applied correctly.", icon: <BookOpen size={20} /> },
    { title: "Journal", "role": "Black-Box Recorder", prevents: "Memory bias and recurring errors", guide: "Record your logic for every reading. This is where your data lives.", icon: <ClipboardCheck size={20} /> },
    { title: "Nava", "role": "Checklist Assistant", prevents: "Impulsive decision gaps", guide: "Use Nava to verify your structural evidence and pass the 3-question gate.", icon: <MessageSquare size={20} /> }
  ];

  return (
    <div className="my-6 p-8 bg-slate-900 rounded-[2.5rem] border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none grid grid-cols-6 gap-4">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="border-r border-b border-white/20" />
        ))}
      </div>

      <div className="relative z-10 space-y-10">
        <div className="text-center">
          <h3 className="text-lg font-extrabold text-white uppercase tracking-[0.2em]">Academy Instrument Panel</h3>
          <p className="text-[10px] text-slate-400 font-bold mt-2 uppercase">Lurnava Training System v1.0</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {instruments.map((item, i) => (
            <button
              key={i}
              onClick={() => setActiveItem(i)}
              className={cn(
                "p-4 rounded-2xl border-2 transition-all text-left group",
                activeItem === i
                  ? "bg-teal-500/10 border-teal-500/50 text-white shadow-[0_0_15px_rgba(20,184,166,0.2)]"
                  : "bg-slate-800/50 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-300"
              )}
            >
              <div className={cn(
                "mb-3 p-2 rounded-lg w-fit",
                activeItem === i ? "bg-teal-500 text-white" : "bg-slate-700 text-slate-500 group-hover:bg-slate-600 group-hover:text-slate-300"
              )}>
                {item.icon}
              </div>
              <span className="text-xs font-extrabold uppercase tracking-tight">{item.title}</span>
            </button>
          ))}
        </div>

        <div className="p-8 bg-slate-800/80 rounded-[2rem] border border-slate-700 space-y-6">
          <div className="flex items-center justify-between">
             <div className="space-y-1">
               <span className="text-[10px] font-extrabold text-teal-400 uppercase tracking-widest">Instrument Role</span>
               <h4 className="text-xl font-extrabold text-white uppercase">{instruments[activeItem].title}: {instruments[activeItem].role}</h4>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <span className="text-[9px] font-extrabold text-rose-400 uppercase tracking-widest flex items-center gap-2">
                <XCircle size={12} /> Prevents Failure
              </span>
              <p className="text-sm text-slate-300 font-medium leading-relaxed">
                {instruments[activeItem].prevents}
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-[9px] font-extrabold text-teal-400 uppercase tracking-widest flex items-center gap-2">
                <CheckCircle2 size={12} /> Usage Guide
              </span>
              <p className="text-sm text-slate-300 font-medium leading-relaxed italic">
                {instruments[activeItem].guide}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 0.1 - Practice Timeline
 * Comparison of Busy vs Deliberate Practice
 */
export const PracticeTimeline = () => {
  return (
    <div className="my-6 space-y-10">
      <div className="text-center">
        <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-[0.2em]">60 Minutes of Practice</h3>
        <p className="text-[10px] text-slate-400 font-bold mt-1 uppercase">Activity vs Outcome</p>
      </div>

      <div className="space-y-4">
        {/* Bad Timeline */}
        <div className="space-y-2">
          <div className="flex justify-between items-center px-4">
             <span className="text-[10px] font-extrabold text-rose-500 uppercase tracking-widest flex items-center gap-2">
               <XCircle size={12} /> Junk Practice
             </span>
             <span className="text-[10px] text-slate-400 font-bold">14 Actions Recorded</span>
          </div>
          <div className="h-6 w-full bg-slate-100 rounded-full overflow-hidden flex border border-slate-200">
            <div className="h-full w-1/6 bg-rose-200 border-r border-rose-300/30" />
            <div className="h-full w-1/12 bg-rose-300 border-r border-rose-300/30" />
            <div className="h-full w-1/4 bg-rose-200 border-r border-rose-300/30" />
            <div className="h-full w-1/6 bg-rose-400 border-r border-rose-300/30" />
            <div className="h-full w-1/12 bg-rose-200 border-r border-rose-300/30" />
            <div className="h-full w-1/4 bg-rose-300" />
          </div>
          <p className="text-[10px] text-rose-600/70 font-medium px-4 italic">High activity, random asset jumps, no reasoning. Results in zero skill data.</p>
        </div>

        <div className="py-2 flex justify-center">
           <div className="h-8 w-px bg-slate-200" />
        </div>

        {/* Good Timeline */}
        <div className="space-y-2">
          <div className="flex justify-between items-center px-4">
             <span className="text-[10px] font-extrabold text-teal-500 uppercase tracking-widest flex items-center gap-2">
               <CheckCircle2 size={12} /> Deliberate Practice
             </span>
             <span className="text-[10px] text-slate-400 font-bold uppercase">1 Lesson Extracted</span>
          </div>
          <div className="h-6 w-full bg-slate-100 rounded-full overflow-hidden flex border border-slate-200">
            <div className="h-full w-[45%] bg-slate-200 border-r border-white/50" />
            <div className="h-full w-[10%] bg-teal-500 border-r border-white/50 shadow-[0_0_10px_rgba(20,184,166,0.3)]" />
            <div className="h-full w-[45%] bg-slate-200" />
          </div>
          <p className="text-[10px] text-teal-600/70 font-medium px-4 italic">Focused study of one concept. One clear journal note. High quality learning data.</p>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-teal-50 border border-teal-100 text-center">
         <p className="text-xs text-teal-800 font-bold leading-relaxed">
           "Do not measure practice by the number of actions. Measure it by the clarity of your reasoning."
         </p>
      </div>
    </div>
  );
};

/**
 * 0.1 - Decision Gate
 * Coded Checkpoint Panel
 */
export const DecisionGate = () => {
  return (
    <div className="my-6 p-8 bg-white rounded-[2.5rem] border border-slate-200 shadow-xl space-y-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none rotate-12">
        <Target size={160} />
      </div>

      <div className="text-center space-y-2">
        <h3 className="text-xl font-extrabold text-[var(--ln-navy-900)] tracking-tight uppercase">The Three-Question Gate</h3>
        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Mental Checkpoint Protocol</p>
      </div>

      <div className="space-y-4">
        {[
          { q: "What did I observe?", desc: "Name the specific structural concept you are seeing." },
          { q: "What evidence supports it?", desc: "List the objective facts on the chart, not your feelings." },
          { q: "What would make me review this?", desc: "Define the condition where the reading no longer makes sense." }
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-5 p-5 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="w-8 h-8 rounded-full bg-[var(--ln-navy-900)] text-white flex items-center justify-center shrink-0 font-bold text-xs">
              {i + 1}
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-extrabold text-[var(--ln-navy-900)] uppercase tracking-tight">{item.q}</h4>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 rounded-[2rem] bg-rose-50/50 border border-rose-100 space-y-3">
          <div className="flex items-center gap-2 text-[10px] font-extrabold text-rose-500 uppercase tracking-widest">
            <XCircle size={14} /> Weak Logic (Reject)
          </div>
          <p className="text-xs text-rose-700 font-mono italic leading-relaxed">
            "It looks strong, price is moving fast, I think it's going to go."
          </p>
        </div>
        <div className="p-6 rounded-[2rem] bg-emerald-50/50 border border-emerald-100 space-y-3">
          <div className="flex items-center gap-2 text-[10px] font-extrabold text-emerald-500 uppercase tracking-widest">
            <CheckCircle2 size={14} /> Valid Reading (Pass)
          </div>
          <p className="text-xs text-emerald-700 font-mono italic leading-relaxed">
            "Observed a range. Evidence: Highs not breaking. Review if price closes outside range."
          </p>
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
 * 0.1 - Learner Profiles
 * Comparison of different learner personas
 */
export const LearnerProfiles = () => {
  return (
    <div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { title: "The Gambler", trait: "High Emotion", focus: "Quick Wins", risk: "Account Ruin", color: "rose" },
        { title: "The Student", trait: "High Effort", focus: "Information", risk: "Analysis Paralysis", color: "amber" },
        { title: "The Reader", trait: "High Discipline", focus: "Evidence", risk: "Market Noise", color: "teal" }
      ].map((p, i) => (
        <div key={i} className={cn(
          "p-8 rounded-[2.5rem] border flex flex-col items-center text-center space-y-4 shadow-sm",
          p.color === 'rose' ? "bg-rose-50/20 border-rose-100" :
          p.color === 'amber' ? "bg-amber-50/20 border-amber-100" :
          "bg-teal-50/20 border-teal-100"
        )}>
          <div className={cn(
            "w-12 h-12 rounded-2xl flex items-center justify-center mb-2",
            p.color === 'rose' ? "bg-rose-100 text-rose-500" :
            p.color === 'amber' ? "bg-amber-100 text-amber-500" :
            "bg-teal-100 text-teal-500"
          )}>
            <Info size={24} />
          </div>
          <h4 className={cn(
            "text-sm font-extrabold uppercase tracking-widest",
            p.color === 'rose' ? "text-rose-600" :
            p.color === 'amber' ? "text-amber-600" :
            "text-teal-600"
          )}>{p.title}</h4>
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Core Trait</p>
            <p className="text-xs font-bold text-slate-700">{p.trait}</p>
          </div>
          <div className="pt-4 w-full border-t border-slate-100 space-y-2">
            <div className="flex justify-between text-[9px] font-bold uppercase tracking-widest text-slate-400">
              <span>Focus</span>
              <span className="text-slate-600">{p.focus}</span>
            </div>
            <div className="flex justify-between text-[9px] font-bold uppercase tracking-widest text-slate-400">
              <span>Primary Risk</span>
              <span className="text-rose-500">{p.risk}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

/**
 * 0.1 - Hype Trap Path
 * Decision flow for avoiding hype
 */
export const HypeTrapPath = () => {
  return (
    <div className="my-6 p-10 rounded-[3rem] bg-slate-900 text-white relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 p-10 opacity-10">
        <Zap size={120} />
      </div>
      <div className="relative z-10 space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-rose-500 flex items-center justify-center shadow-lg shadow-rose-500/20">
            <AlertCircle size={24} />
          </div>
          <div>
            <h4 className="text-lg font-extrabold uppercase tracking-tight">The Hype Trap Warning</h4>
            <p className="text-xs text-slate-400 font-medium">Emotional Impulse vs. Academy Logic</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-[10px] font-extrabold text-rose-400 uppercase tracking-widest">
              <XCircle size={14} /> The Hype Trigger
            </div>
            <p className="text-sm text-slate-300 font-medium leading-relaxed">
              You see a fast move or a viral tip. Your brain screams "Don't miss out!"
            </p>
          </div>
          <div className="p-6 rounded-[2rem] bg-emerald-500/10 border border-emerald-500/20 space-y-4">
            <div className="flex items-center gap-2 text-[10px] font-extrabold text-emerald-400 uppercase tracking-widest">
              <CheckCircle2 size={14} /> The Academy Filter
            </div>
            <p className="text-sm text-slate-100 font-bold leading-relaxed">
              Stop. Filter the noise. Is there objective structural evidence?
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-px h-8 bg-gradient-to-b from-white/0 to-white/20" />
            <div className="px-6 py-2 rounded-full bg-white text-slate-900 text-[10px] font-extrabold uppercase tracking-widest">
              Result: Skill Preservation
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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
