"use client";

import { NextStep } from "@/lib/guidance-utils";
import { Sparkles, ArrowRight, BookOpen, Target, GraduationCap, TrendingUp, Trophy, Zap } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NextStepCardProps {
  step: NextStep;
}

export function NextStepCard({ step }: NextStepCardProps) {
  const getIcon = () => {
    switch (step.action) {
      case "START_FOUNDATION":
      case "CONTINUE_ACADEMY":
        return <BookOpen className="w-6 h-6 text-indigo-400" />;
      case "TAKE_ASSESSMENT":
        return <GraduationCap className="w-6 h-6 text-amber-400" />;
      case "START_PHASE":
      case "EXECUTE_TRADE":
        return <Target className="w-6 h-6 text-emerald-400" />;
      case "COMPLETE_PHASE":
        return <Trophy className="w-6 h-6 text-yellow-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <div className="relative group">
      {/* Animated Pulse Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--color-brand-500)] to-indigo-500 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
      
      <div className="relative p-8 bg-[var(--color-surface-tertiary)] border border-[var(--color-border-default)] rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-6 transition-all">
        <div className="flex items-center gap-6">
          <div className="p-4 bg-[var(--color-brand-500)]/10 rounded-2xl text-[var(--color-brand-400)] shadow-inner">
            <Zap size={32} fill="currentColor" className="animate-pulse" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-[var(--color-brand-500)] text-white text-[10px] font-bold rounded-md uppercase tracking-widest">
                Priority Mission
              </span>
              <p className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest">Next Objective</p>
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">{step.title}</h2>
            <p className="text-sm text-[var(--color-text-secondary)] max-w-md">{step.description}</p>
          </div>
        </div>

        <Link 
          href={step.link}
          className="w-full md:w-auto px-10 py-4 bg-white text-black font-bold rounded-xl hover:bg-white/90 active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-xl"
        >
          {step.action.replace("_", " ")}
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
