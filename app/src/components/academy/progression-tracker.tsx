"use client";

import { motion } from "framer-motion";
import { Clock, Target, Award, Zap, ChevronRight, AlertCircle } from "lucide-react";
import { AcademyButton } from "@/components/ui/academy-button";

interface ProgressionTrackerProps {
  currentTier: number;
  totalTiers: number;
  completedModules: number;
  totalModules: number;
  operationalScore: number; // 0-100
}

export function ProgressionTracker({
  currentTier,
  totalTiers,
  completedModules,
  totalModules,
  operationalScore
}: ProgressionTrackerProps) {

  // Logic calculations
  const progressPct = (completedModules / totalModules) * 100;
  const hoursPerModule = 0.75; // Average
  const hoursRemaining = Math.max(0, (totalModules - completedModules) * hoursPerModule);

  const nextMilestone = currentTier < 4 ? "Advanced Practice Access" : currentTier < 8 ? "Final Review" : "Mastery Verification";

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Time to Completion */}
      <div className="p-6 bg-white border border-[var(--ln-border)] rounded-3xl space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[var(--ln-text-muted)]">
          <Clock size={14} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Est. Completion</span>
        </div>
        <div className="space-y-1">
          <h4 className="text-3xl font-extrabold text-[var(--ln-navy-900)] tracking-tighter">~{hoursRemaining.toFixed(1)}h</h4>
          <p className="text-[10px] text-[var(--ln-text-secondary)] font-medium uppercase">Academy training remaining</p>
        </div>
      </div>

      {/* Next Big Milestone */}
      <div className="p-6 bg-[var(--ln-teal-soft)] border border-[var(--ln-teal-500)]/10 rounded-3xl space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[var(--ln-teal-600)]">
          <Target size={14} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Next Objective</span>
        </div>
        <div className="space-y-1">
          <h4 className="text-xl font-extrabold text-[var(--ln-navy-900)] tracking-tighter uppercase">{nextMilestone}</h4>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-1.5 bg-white/50 rounded-full overflow-hidden">
               <div className="h-full bg-[var(--ln-teal-500)] transition-all duration-1000" style={{ width: `${(currentTier/totalTiers)*100}%` }} />
            </div>
            <span className="text-[9px] font-bold text-[var(--ln-teal-600)] uppercase">Tier {currentTier}/{totalTiers}</span>
          </div>
        </div>
      </div>

      {/* Academy Progress */}
      <div className="p-6 bg-white border border-[var(--ln-border)] rounded-3xl space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[var(--ln-teal-600)]">
          <Zap size={14} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Readiness Score</span>
        </div>
        <div className="space-y-1">
          <h4 className="text-3xl font-extrabold text-[var(--ln-navy-900)] tracking-tighter">{operationalScore}%</h4>
          <p className="text-[10px] text-[var(--ln-text-secondary)] font-medium uppercase">Learning progress rating</p>
        </div>
      </div>

      {/* Fast-Track CTA */}
      <div className="p-6 bg-white border border-[var(--ln-border)] rounded-3xl flex flex-col justify-between shadow-sm">
         <div className="flex items-center gap-2 text-[var(--ln-text-muted)]">
            <AlertCircle size={14} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Fast-Track</span>
         </div>
         <p className="text-[9px] text-[var(--ln-text-muted)] leading-tight mb-4">
            Confidence check: Take a placement quiz to skip current theory.
         </p>
         <AcademyButton variant="outline" size="sm" className="w-full text-[9px] font-bold">
            ATTEMPT PLACEMENT TEST
         </AcademyButton>
      </div>
    </div>
  );
}
