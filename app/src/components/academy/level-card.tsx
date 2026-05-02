"use client";

import { Lock, Target, ChevronRight, Unlock, CheckCircle2, PlayCircle, Clock } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useNava } from "@/hooks/useNava";

export interface LevelData {
  level: number;
  title: string;
  completedModules: number;
  totalModules: number;
  completionPct: number;
  locked: boolean;
  description?: string;
}

interface LevelCardProps {
  level: LevelData;
  isPlanned?: boolean;
}

export function LevelCard({ level, isPlanned = false }: LevelCardProps) {
  const { triggerMessage } = useNava();
  const isComplete = level.completionPct === 100;
  const isInProgress = !level.locked && !isComplete && !isPlanned;
  
  // Gate label mapping based on level
  const getGateLabel = (lvl: number) => {
    if (isPlanned) return "Gate: Coming Later";
    if (lvl === 0) return "Gate: Mission 1";
    if (lvl === 1) return "Gate: Knowledge Test";
    if (lvl === 2) return "Gate: Chart Map Mission + Test";
    if (lvl === 3) return "Gate: Final Scenario + Test";
    return "Gate: Not available yet";
  };

  const status = isPlanned ? "Planned" : level.locked ? "Locked" : isComplete ? "Complete" : "In Progress";

  const StatusBadge = () => {
    switch(status) {
      case "Complete":
        return <span className="text-[10px] px-2 py-1 rounded-lg bg-[var(--ln-teal-soft)] text-[var(--ln-teal-500)] font-extrabold uppercase tracking-wider">Complete</span>;
      case "In Progress":
        return <span className="text-[10px] px-2 py-1 rounded-lg bg-[var(--ln-teal-soft)] text-[var(--ln-teal-500)] font-extrabold uppercase tracking-wider animate-pulse">In Progress</span>;
      case "Planned":
        return <span className="text-[10px] px-2 py-1 rounded-lg bg-slate-100 text-slate-400 font-extrabold uppercase tracking-wider border border-slate-200">Planned</span>;
      default:
        return <span className="text-[10px] px-2 py-1 rounded-lg bg-slate-50 text-slate-400 font-extrabold uppercase tracking-wider flex items-center gap-1 border border-slate-100"><Lock className="w-2.5 h-2.5"/> Locked</span>;
    }
  };

  const CardContent = (
    <div className={cn(
      "p-5 h-full flex flex-col transition-all duration-300",
      status === "Locked" || status === "Planned" ? "opacity-75" : "opacity-100"
    )}>
      <div className="flex items-start justify-between mb-6">
        <div className="space-y-1">
          <p className="text-[10px] font-extrabold text-[var(--ln-teal-500)] uppercase tracking-widest">
            Level {level.level}
          </p>
          <h3 className="text-lg font-extrabold text-[var(--ln-navy-900)] leading-tight group-hover:text-[var(--ln-teal-600)] transition-colors">
            {level.title}
          </h3>
        </div>
        <StatusBadge />
      </div>

      <div className="flex-1">
        <p className="text-xs text-[var(--ln-text-secondary)] font-medium leading-relaxed mb-6 line-clamp-2">
          {level.description || `Build your core skills through Level ${level.level} curriculum and practical missions.`}
        </p>

        <div className="space-y-4">
          <div className="flex justify-between items-end">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-extrabold text-[var(--ln-navy-900)] uppercase">
                {level.completedModules} / {level.totalModules}
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Modules</span>
            </div>
            <span className="text-xs font-extrabold text-[var(--ln-navy-900)]">{level.completionPct}%</span>
          </div>
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <div 
              className={cn(
                "h-full rounded-full transition-all duration-1000",
                isComplete ? "bg-[var(--ln-teal-500)]" : "bg-[var(--ln-teal-500)]"
              )}
              style={{ width: `${level.completionPct}%` }}
            />
          </div>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-[var(--ln-border)] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[10px] font-bold text-slate-500">{getGateLabel(level.level)}</span>
        </div>
        
        {!level.locked && !isPlanned && (
          <div className="flex items-center text-[10px] font-extrabold text-[var(--ln-teal-500)] uppercase tracking-widest group-hover:translate-x-1 transition-transform">
            {isComplete ? "Review" : "Continue"} <ChevronRight className="w-4 h-4 ml-0.5" />
          </div>
        )}
      </div>
    </div>
  );



  if (level.locked || isPlanned) {
    return (
      <button 
        data-nava-target={level.locked ? "gate-requirement-card" : undefined}
        onClick={() => level.locked && triggerMessage('locked_level_explanation')}
        className="bg-white rounded-3xl border border-[var(--ln-border)] shadow-sm relative overflow-hidden group grayscale-[0.5] text-left w-full"
      >
        {CardContent}
      </button>
    );
  }

  return (
    <Link 
      href={`/course/${level.level}`}
      data-nava-target={`level-card-${level.level}`}
      className="bg-white rounded-3xl border border-[var(--ln-border)] shadow-sm hover:shadow-xl hover:shadow-[var(--ln-teal-500)]/5 hover:border-[var(--ln-teal-500)]/30 transition-all duration-300 relative overflow-hidden group"
    >
      {CardContent}
    </Link>
  );
}
