"use client";

import { NextStep } from "@/lib/guidance-utils";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

interface ContinueLearningCardProps {
  step: NextStep;
  progressPercent: number;
}

export function ContinueLearningCard({ step, progressPercent }: ContinueLearningCardProps) {
  // Try to parse out level and module from the description if possible, or use defaults
  // e.g. title: "Start Level 1", description: "Module 1.1 - Something"
  
  return (
    <div className="bg-white rounded-3xl p-5 border border-[var(--ln-border)] shadow-sm flex flex-col h-full hover:shadow-md transition-all">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-bold text-[var(--ln-navy-900)]">Continue Learning</h3>
        <BookOpen className="w-4 h-4 text-slate-400" />
      </div>

      <div className="flex gap-4 items-start mb-4 flex-1">
        <div className="w-10 h-10 rounded-2xl bg-[var(--ln-teal-soft)] flex items-center justify-center shrink-0">
          <div className="flex gap-1 items-end h-4">
            <div className="w-1 bg-[var(--ln-teal-500)] h-full rounded-sm" />
            <div className="w-1 bg-[var(--ln-teal-500)]/60 h-3/4 rounded-sm" />
            <div className="w-1 bg-[var(--ln-teal-500)] h-4/5 rounded-sm" />
          </div>
        </div>
        <div>
          <h4 className="text-sm font-bold text-[var(--ln-navy-900)]">{step.title}</h4>
          <p className="text-xs text-[var(--ln-text-secondary)] mt-1">{step.description}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold text-[var(--ln-teal-500)] uppercase tracking-wider">{progressPercent}% Complete</span>
          </div>
          <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[var(--ln-teal-500)] rounded-full transition-all duration-1000" 
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <Link 
          href={step.link}
          className="w-full py-2.5 bg-[var(--ln-teal-500)] text-white font-bold rounded-xl hover:bg-[var(--ln-teal-600)] transition-colors flex items-center justify-center gap-2 text-xs shadow-sm"
        >
          Continue
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
