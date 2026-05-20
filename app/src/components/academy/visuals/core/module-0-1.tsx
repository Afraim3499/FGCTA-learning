"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  MapPin,
  Target,
  ClipboardCheck,
  ChevronRight,
  Zap,
  XCircle,
  CheckCircle2,
  MessageSquare,
  Layers,
  Eye,
  Search,
  ShieldCheck,
  RefreshCcw,
  AlertCircle,
  Database
} from "lucide-react";

/**
 * Institutional Frame Component for Module 0.1
 */
const InstitutionalFrame = ({ 
  children, 
  label, 
  status = "AUDIT STANDBY",
  id = "LN-0.1-AUD"
}: { 
  children: React.ReactNode; 
  label: string; 
  status?: string;
  id?: string;
}) => (
  <div className="w-full h-full min-h-[480px] bg-[#F8FBFC] border border-[#E2E8F0] rounded-[2rem] p-6 md:p-8 flex flex-col relative overflow-hidden shadow-sm">
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
 * 0.1 - Comparison of Random vs Structured Learning
 */
export const AcademyPath = () => {
  return (
    <InstitutionalFrame label="Academy Path: Random vs Lurnava" id="LN-0.1-AUD-PATH">
      <div className="my-2 flex flex-col gap-4 relative w-full max-w-4xl mx-auto">
        <div className="absolute left-[38px] md:left-[52px] top-6 bottom-6 w-0.5 bg-slate-100 -z-10 hidden md:block" />

        <div className="flex flex-col md:flex-row gap-4 relative">
          <div className="flex flex-col items-center shrink-0 w-full md:w-[104px]">
            <div className="p-3 rounded-[1.25rem] bg-rose-50 text-rose-500 shadow-sm border border-rose-100 z-10">
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

        <div className="flex flex-col md:flex-row gap-4 relative">
          <div className="flex flex-col items-center shrink-0 w-full md:w-[104px]">
            <div className="p-3 rounded-[1.25rem] bg-teal-50 text-[#0F766E] shadow-sm border border-emerald-100 z-10">
              <CheckCircle2 size={28} />
            </div>
          </div>

          <div className="flex-1 bg-white p-4 md:p-5 rounded-[1.5rem] border border-emerald-100 shadow-sm space-y-3 relative">
            <div className="absolute top-1/2 -left-[13px] -translate-y-1/2 w-3 h-3 rotate-45 border-l border-b border-emerald-100 bg-white hidden md:block" />
            <div className="space-y-0.5">
              <h4 className="text-sm font-extrabold uppercase tracking-widest text-[#0F766E]">The Lurnava Path</h4>
              <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-tight italic">"Structured Skill Building"</p>
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
    </InstitutionalFrame>
  );
};

/**
 * 0.1 - Lurnava Learning Loop
 */
export const LearningLoop = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const displayStep = hoveredStep !== null ? hoveredStep : activeStep;

  const steps = [
    {
      title: "Learn",
      icon: BookOpen,
      what: "You study one concept and understand the language before applying it.",
      why: "Without a clear concept, every chart movement feels random.",
      skipped: "You start copying shapes without knowing what they mean.",
      action: "Name the concept in your own words before moving to practice.",
      color: "text-blue-600",
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
      color: "text-teal-600",
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
      color: "text-purple-600",
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
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200"
    }
  ];

  return (
    <InstitutionalFrame label="The Lurnava Learning Loop" id="LN-0.1-AUD-LOOP">
      <div className="w-full max-w-4xl mx-auto space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2.5">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isActive = activeStep === i;
            const isHovered = hoveredStep === i;
            const isDisplaying = displayStep === i;

            return (
              <React.Fragment key={i}>
                <button
                  onClick={() => setActiveStep(i)}
                  onMouseEnter={() => setHoveredStep(i)}
                  onMouseLeave={() => setHoveredStep(null)}
                  onFocus={() => setHoveredStep(i)}
                  onBlur={() => setHoveredStep(null)}
                  className={cn(
                    "relative flex flex-col items-center gap-1.5 p-3 rounded-[1.25rem] border-2 transition-all duration-300 w-full md:w-1/4 group",
                    isActive
                      ? cn("scale-105 shadow-md bg-white", step.borderColor)
                      : isHovered
                        ? "scale-[1.02] shadow-sm bg-white border-slate-200"
                        : "bg-[#F8FAFC] border-slate-100 text-slate-400 hover:bg-[#F1F5F9]"
                  )}
                >
                  <div className={cn(
                    "p-2.5 rounded-xl transition-all duration-300",
                    isDisplaying ? cn("scale-110", step.bgColor, step.color) : "bg-slate-100 text-slate-400"
                  )}>
                    <Icon size={18} />
                  </div>
                  <span className={cn(
                    "text-[9px] font-extrabold uppercase tracking-widest transition-colors",
                    isDisplaying ? step.color : "text-slate-400"
                  )}>
                    {step.title}
                  </span>

                  {isActive && (
                    <div className={cn("absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b-2 border-r-2 rotate-45 z-10", step.borderColor)} />
                  )}
                </button>

                {i < steps.length - 1 && (
                  <div className={cn(
                    "hidden md:flex transition-colors duration-300",
                    (displayStep > i) ? "text-teal-500" : "text-slate-200"
                  )}>
                    <ChevronRight size={16} strokeWidth={3} />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
          <div className="bg-white rounded-[1.5rem] border border-slate-100 shadow-sm overflow-hidden">
            <div className={cn(
              "px-5 py-2.5 border-b flex items-center justify-between transition-colors duration-300",
              steps[displayStep].bgColor,
              steps[displayStep].borderColor.replace("border-", "border-b-")
            )}>
               <div className="flex items-center gap-2">
                  <div className={cn("p-1.5 rounded-lg bg-white transition-all duration-300", steps[displayStep].color)}>
                    {React.createElement(steps[displayStep].icon, { size: 12 })}
                  </div>
                  <span className={cn("text-[9px] font-extrabold uppercase tracking-widest transition-colors duration-300", steps[displayStep].color)}>
                    Phase Detail: {steps[displayStep].title}
                  </span>
               </div>
               <div className="px-2 py-0.5 rounded-full bg-white text-[8px] font-bold text-slate-500 uppercase tracking-tight border border-slate-100">
                 Step {displayStep + 1} of 4
               </div>
            </div>

            <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <h5 className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400">What happens here</h5>
                  <p className="text-[13px] font-bold text-[#0F172A] leading-relaxed">
                    {steps[displayStep].what}
                  </p>
                </div>
                <div className="space-y-1.5">
                  <h5 className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400">Why it matters</h5>
                  <p className="text-[13px] font-medium text-slate-600 leading-relaxed">
                    {steps[displayStep].why}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#FFF5F5] border border-rose-100 space-y-1.5">
                  <h5 className="text-[9px] font-extrabold uppercase tracking-widest text-rose-500">If skipped</h5>
                  <p className="text-[12px] font-medium text-rose-700 leading-relaxed">
                    {steps[displayStep].skipped}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F0FDF4] border border-emerald-100 space-y-1.5">
                  <h5 className="text-[9px] font-extrabold uppercase tracking-widest text-emerald-600">Learner Action</h5>
                  <p className="text-[13px] font-bold text-emerald-900 leading-relaxed italic">
                    {steps[displayStep].action}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 0.1 - System Map (The Cockpit)
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
    <InstitutionalFrame label="The Cockpit: Training Instruments" id="LN-0.1-AUD-SYSTEM">
      <div className="my-2 p-6 md:p-10 bg-[#0F172A] rounded-[3rem] border border-slate-800 shadow-2xl relative overflow-hidden w-full max-w-5xl mx-auto">
        <div className="absolute inset-0 pointer-events-none">
          <div className="h-full w-full grid grid-cols-8 gap-4 p-8">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="border-r border-b border-[#1E293B]" />
            ))}
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-12 relative">
            <div className="w-24 h-24 rounded-full bg-[#133F3D] border-2 border-[#1B5C58] flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[#1A5C58] border border-[#20827C] flex items-center justify-center">
                <Target className="text-teal-400" size={32} />
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-extrabold text-teal-400 uppercase tracking-[0.2em]">
              Training Session
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full relative">
            {instruments.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-[#1E293B] border border-[#334155] hover:bg-[#334155] hover:border-[#475569] transition-all group relative overflow-hidden"
              >
                <div className={cn(
                  "mb-4 p-2.5 rounded-xl w-fit transition-all",
                  item.color === 'blue' ? "bg-[#1A365D] text-blue-400 group-hover:bg-blue-600 group-hover:text-white" :
                  item.color === 'amber' ? "bg-[#451A03] text-amber-400 group-hover:bg-amber-600 group-hover:text-white" :
                  item.color === 'teal' ? "bg-[#064E3B] text-teal-400 group-hover:bg-teal-600 group-hover:text-white" :
                  item.color === 'purple' ? "bg-[#3B0764] text-purple-400 group-hover:bg-purple-600 group-hover:text-white" :
                  item.color === 'indigo' ? "bg-[#1E1B4B] text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white" :
                  "bg-[#064E3B] text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white"
                )}>
                  {item.icon}
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h4 className="text-[10px] font-extrabold text-white uppercase tracking-wider">
                      <span className="text-teal-400 mr-2">{item.phase}</span>
                      <span className="text-slate-500 mx-1">—</span>
                      <span className="ml-2">{item.title}</span>
                    </h4>
                    <ChevronRight size={14} className="text-[#475569] group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-[10px] text-slate-400 font-medium leading-relaxed group-hover:text-slate-300 transition-colors">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 px-4 py-3 rounded-full bg-[#1E293B] border border-[#334155]">
            {["Learn", "Check", "Practice", "Study", "Record", "Review"].map((step, i) => (
              <React.Fragment key={step}>
                <span className="text-[10px] font-extrabold text-teal-400 uppercase tracking-widest">{step}</span>
                {i < 5 && <ChevronRight size={14} className="text-[#475569]" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 0.1 - Practice Timeline (One Hour of Bad Practice)
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
    <InstitutionalFrame label="One Hour of Bad vs Deliberate Practice" id="LN-0.1-AUD-TIMELINE">
      <div className="my-2 grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl mx-auto">
        <div className="p-6 rounded-[2.5rem] bg-[#FFF8F8] border border-rose-100 flex flex-col h-full">
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
              <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-[#FFE4E6]" />
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

          <div className="mt-8 p-3 rounded-xl bg-[#FEE2E2] border border-rose-200 text-[10px] font-bold text-rose-600 text-center uppercase tracking-wider">
            Outcome: No useful learning record
          </div>
        </div>

        <div className="p-6 rounded-[2.5rem] bg-[#F4FDF7] border border-emerald-100 flex flex-col h-full shadow-sm">
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
              <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-[#D1FAE5]" />
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

          <div className="mt-8 p-3 rounded-xl bg-emerald-600 text-white shadow-md text-[10px] font-bold text-center uppercase tracking-wider">
            Outcome: 1 Clear Review Note Created
          </div>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 0.1 - Note Comparison
 */
export const NoteComparison = () => {
  return (
    <InstitutionalFrame label="Note Audit: Passive vs Active Verification" id="LN-0.1-AUD-NOTE">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2 w-full">
        <div className="p-6 rounded-[2rem] bg-[#FFF5F5] border border-rose-100 space-y-4">
          <div className="flex items-center gap-3">
            <XCircle className="text-rose-500" size={20} />
            <h4 className="text-sm font-black text-slate-900 uppercase">Passive Reading</h4>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-rose-200 text-xs font-bold text-slate-600 italic">
            "Bitcoin (BTC) looks strong here, maybe it goes up soon."
          </div>
          <p className="text-[10px] text-slate-500 font-bold leading-relaxed">
            Problem: Vague, non-falsifiable, and relies on feeling rather than structure.
          </p>
        </div>

        <div className="p-6 rounded-[2rem] bg-[#F0FDF4] border border-emerald-100 space-y-4">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-emerald-500" size={20} />
            <h4 className="text-sm font-black text-slate-900 uppercase">Active Verification</h4>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-emerald-200 text-xs font-bold text-slate-900 italic">
            "Bitcoin (BTC) is currently holding above the 64,500 level. I observed three failed attempts to close below. I will review this if we close and hold below 64,200."
          </div>
          <p className="text-[10px] text-slate-500 font-bold leading-relaxed">
            Edge: Specific, based on observation, and includes a clear review condition.
          </p>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 0.1 - Behavior Flow
 */
export const BehaviorFlow = () => {
  return (
    <InstitutionalFrame label="Structured Behavior Flow" id="LN-0.1-AUD-FLOW">
      <div className="w-full py-4 px-2">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
          <div className="absolute top-1/2 left-0 w-full h-px bg-slate-200 hidden md:block" />
          {[
            { label: "Observe", icon: <Eye size={18} />, color: "blue" },
            { label: "Verify", icon: <Search size={18} />, color: "amber" },
            { label: "Conclude", icon: <ShieldCheck size={18} />, color: "emerald" },
            { label: "Review", icon: <RefreshCcw size={18} />, color: "purple" }
          ].map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center gap-3 group">
              <div className={cn(
                "w-12 h-12 rounded-2xl flex items-center justify-center border shadow-sm transition-all group-hover:scale-110",
                step.color === "blue" ? "bg-blue-50 border-blue-100 text-blue-600" :
                step.color === "amber" ? "bg-amber-50 border-amber-100 text-amber-600" :
                step.color === "emerald" ? "bg-emerald-50 border-emerald-100 text-emerald-600" :
                "bg-purple-50 border-purple-100 text-purple-600"
              )}>
                {step.icon}
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">{step.label}</span>
            </div>
          ))}
        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 0.1 - Decision Gate
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
    <InstitutionalFrame label="The Decision Gate Checkpoint" id="LN-0.1-AUD-GATE">
      <div className="my-2 space-y-8 w-full max-w-5xl mx-auto">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-extrabold text-slate-500 uppercase tracking-widest">
            System Checkpoint
          </div>
          <h3 className="text-xl font-black text-slate-900 uppercase">Can this reading pass the gate?</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {questions.map((q, i) => (
            <div key={i} className="group p-6 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <div className={cn(
                "w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black mb-4",
                q.color === "blue" ? "bg-[#EFF6FF] text-blue-600" :
                q.color === "amber" ? "bg-[#FEF3C7] text-amber-650" :
                "bg-[#F3E8FF] text-purple-600"
              )}>
                {q.num}
              </div>
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight mb-1">{q.title}</h4>
              <p className="text-xs text-slate-800 font-bold mb-2">{q.desc}</p>
              <p className="text-[10px] text-slate-400 font-medium leading-relaxed">{q.detail}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="p-8 rounded-[2.5rem] bg-[#FFF5F5] border border-rose-100 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-rose-500 text-white flex items-center justify-center">
                  <XCircle size={20} />
                </div>
                <div>
                  <span className="text-[9px] font-extrabold text-rose-500 uppercase tracking-widest block">Outcome: Reject</span>
                  <h4 className="text-base font-black text-slate-900 uppercase">Weak Logic</h4>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-white border border-rose-100 text-xs font-bold text-slate-600 italic">
                "It looks strong... I feel like it may go... The chart is moving fast."
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-rose-600">
                <AlertCircle size={14} />
                No observation. No evidence. No review condition.
              </div>
            </div>
          </div>

          <div className="p-8 rounded-[2.5rem] bg-[#F0FDF4] border border-emerald-100 flex flex-col gap-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center">
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
    </InstitutionalFrame>
  );
};

/**
 * 0.1 - Orientation Debrief
 */
export const OrientationDebrief = () => {
  return (
    <InstitutionalFrame label="Orientation Debrief" id="LN-0.1-AUD-DEBRIEF">
      <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <div className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-teal-500 flex items-center justify-center text-white">
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

        <div className="p-10 rounded-[2.5rem] bg-[#0F172A] text-white shadow-xl flex flex-col justify-center items-center text-center space-y-6">
          <div className="w-20 h-20 rounded-[2rem] bg-[#1E293B] border border-slate-700 flex items-center justify-center text-teal-400 mb-2">
            <Target size={40} />
          </div>
          <h4 className="text-xl font-extrabold uppercase tracking-tight">Mission Ready</h4>
          <p className="text-xs text-slate-450 font-medium leading-relaxed max-w-[200px]">
            You are now prepared to begin Level 0 structural training.
          </p>
        </div>
      </div>
    </InstitutionalFrame>
  );
};
