"use client";

import { BookOpen, Target, Flag, Lock, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function MilestoneMapCard() {
  const steps = [
    { num: 1, title: "Learn", subtitle: "Complete", icon: BookOpen, active: true },
    { num: 2, title: "Practice", subtitle: "Complete", icon: Target, active: true },
    { num: 3, title: "Pass Mission", subtitle: "Not Started", icon: Flag, active: false },
    { num: 4, title: "Unlock Test", subtitle: "Locked", icon: Lock, active: false },
  ];

  return (
    <div className="bg-white rounded-3xl p-5 border border-[var(--ln-border)] shadow-sm hover:shadow-md transition-all flex flex-col justify-center h-full">
      <div className="mb-4 flex items-baseline gap-2">
        <h3 className="text-sm font-bold text-[var(--ln-navy-900)]">Milestone Map</h3>
        <span className="text-[10px] font-bold text-slate-400 tracking-wide uppercase">&bull; Road to Unlock</span>
      </div>

      <div className="flex items-center justify-between w-full">
        {steps.map((step, idx) => (
          <div key={idx} className="flex items-center flex-1 last:flex-none">
            <div className="flex items-center gap-3">
              <div className={cn(
                "w-10 h-10 rounded-full border-2 bg-white flex items-center justify-center transition-all",
                step.active ? "border-[var(--ln-teal-500)] text-[var(--ln-teal-500)] bg-[var(--ln-teal-soft)] shadow-sm" : "border-slate-200 text-slate-300"
              )}>
                <step.icon className="w-4 h-4" />
              </div>
              <div className="hidden sm:block">
                <p className="text-[10px] font-bold text-[var(--ln-navy-900)]">{step.title}</p>
                <p className={cn("text-[9px] font-bold", step.active ? "text-[var(--ln-teal-500)]" : "text-slate-400")}>
                  {step.subtitle}
                </p>
              </div>
            </div>
            {idx < steps.length - 1 && (
              <ChevronRight className="w-4 h-4 text-slate-200 mx-auto" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
