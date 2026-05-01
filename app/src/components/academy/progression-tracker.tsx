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
      <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl space-y-4">
        <div className="flex items-center gap-2 text-text-muted">
          <Clock size={14} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Est. Completion</span>
        </div>
        <div className="space-y-1">
          <h4 className="text-3xl font-extrabold text-white tracking-tighter">~{hoursRemaining.toFixed(1)}h</h4>
          <p className="text-[10px] text-text-secondary font-medium uppercase">Academy training remaining</p>
        </div>
      </div>

      {/* Next Big Milestone */}
      <div className="p-6 bg-accent-blue/5 border border-accent-blue/10 rounded-3xl space-y-4">
        <div className="flex items-center gap-2 text-accent-blue">
          <Target size={14} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Next Objective</span>
        </div>
        <div className="space-y-1">
          <h4 className="text-xl font-extrabold text-white tracking-tighter uppercase">{nextMilestone}</h4>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
               <div className="h-full bg-accent-blue transition-all duration-1000" style={{ width: `${(currentTier/totalTiers)*100}%` }} />
            </div>
            <span className="text-[9px] font-bold text-accent-blue uppercase">Tier {currentTier}/{totalTiers}</span>
          </div>
        </div>
      </div>

      {/* Academy Progress */}
      <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl space-y-4">
        <div className="flex items-center gap-2 text-pass-green">
          <Zap size={14} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Readiness Score</span>
        </div>
        <div className="space-y-1">
          <h4 className="text-3xl font-extrabold text-white tracking-tighter">{operationalScore}%</h4>
          <p className="text-[10px] text-text-secondary font-medium uppercase">Learning progress rating</p>
        </div>
      </div>

      {/* Fast-Track CTA (For ego management) */}
      <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl flex flex-col justify-between">
         <div className="flex items-center gap-2 text-slate-500">
            <AlertCircle size={14} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Fast-Track</span>
         </div>
         <p className="text-[9px] text-text-muted leading-tight mb-4">
            Confidence check: Take a placement quiz to skip current theory.
         </p>
         <AcademyButton variant="outline" size="sm" className="w-full text-[9px]">
            ATTEMPT PLACEMENT TEST
         </AcademyButton>
      </div>
    </div>
  );
}
