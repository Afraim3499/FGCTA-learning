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
  Search
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
 * 0.1 - Hype Trap Path
 * Decision flow for avoiding hype
 */
export const HypeTrapPath = () => {
  const steps = [
    { title: "Trigger", desc: "Watched online video / tip", color: "blue" },
    { title: "Observation", desc: "Similar-looking chart appears", color: "amber" },
    { title: "Risk", desc: "Emotional urgency / confidence", color: "rose" },
    { title: "Decision", desc: "Lurnava Verification Gate", color: "teal" }
  ];

  return (
    <div className="my-2 space-y-6 max-w-4xl mx-auto w-full">
      {/* Central Illustration Area */}
      <div className="relative group p-1 bg-slate-100 rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-inner">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-rose-500/5 pointer-events-none" />
        <img 
          src="/hype_trap_scenario_visual.png" 
          alt="Hype Trap Scenario" 
          className="w-full h-auto rounded-[2.4rem] object-cover mix-blend-multiply opacity-90 group-hover:opacity-100 transition-opacity duration-700"
        />
        
        {/* Overlay Badges */}
        <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/90 border border-white shadow-sm backdrop-blur-md">
          <AlertCircle size={14} className="text-rose-500" />
          <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Urgency Trap</span>
        </div>
      </div>

      {/* 4-Step Flow */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {steps.map((step, i) => (
          <div key={i} className="relative group p-4 rounded-2xl bg-white border border-slate-100 shadow-sm transition-all hover:shadow-md">
            <div className={`w-8 h-8 rounded-lg mb-3 flex items-center justify-center text-xs font-black
              ${step.color === 'blue' ? 'bg-blue-50 text-blue-600' : 
                step.color === 'amber' ? 'bg-amber-50 text-amber-600' : 
                step.color === 'rose' ? 'bg-rose-50 text-rose-600' : 
                'bg-teal-50 text-teal-600'}`}>
              0{i + 1}
            </div>
            <h5 className="text-[10px] font-black text-slate-900 uppercase tracking-tight mb-1">{step.title}</h5>
            <p className="text-[10px] text-slate-500 font-bold leading-tight">{step.desc}</p>
          </div>
        ))}
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


