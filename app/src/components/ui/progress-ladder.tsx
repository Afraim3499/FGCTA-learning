"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check, Lock, Play } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ProgressLadderProps {
  currentLevel: number;
  totalLevels?: number;
  onLevelClick?: (level: number) => void;
}

const levels = [
  { id: 1, title: "Level 1: Planning Foundation", description: "Master written plan rules, Areas of Interest, and target paths." },
  { id: 2, title: "Level 2: Execution Mechanics", description: "Master price feed delivery, structure shifts, and session windows." },
  { id: 3, title: "Level 3: Institutional Order Flow", description: "Master Order Blocks, Fair Value Gaps, and footprint imbalances." },
  { id: 4, title: "Level 4: Time & Price Cycles", description: "Master PO3 accumulation/distribution cycles and Killzones." },
  { id: 5, title: "Level 5: Risk Architecture", description: "Master dynamic position sizing, trailing stops, and drawdown limits." },
  { id: 6, title: "Level 6: Scenario Planning", description: "Master if-then decision branch trees for dynamic conditions." },
  { id: 7, title: "Level 7: Strategy Playbook Mastery", description: "Compile sweeps, shifts, and mitigations into strategy playbooks." },
  { id: 8, title: "Level 8: Management and Review", description: "Set up trade journals and statistical performance reviews." },
  { id: 9, title: "Level 9: Certification & Crucible", description: "Complete the final capstone tests to earn your certification." },
];

export function ProgressLadder({ currentLevel, totalLevels = 9, onLevelClick }: ProgressLadderProps) {
  return (
    <div className="relative space-y-10 py-6">
      {/* Background Line */}
      <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-[var(--ln-border)]" />
      
      {/* Active Progress Line */}
      <motion.div 
        className="absolute left-6 top-4 w-0.5 bg-[var(--ln-teal-500)]"
        initial={{ height: 0 }}
        animate={{ height: `${((currentLevel - 1) / (totalLevels - 1)) * 100}%` }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      {levels.map((level, index) => {
        const isCompleted = currentLevel > level.id;
        const isActive = currentLevel === level.id;
        const isLocked = currentLevel < level.id;

        return (
          <div 
            key={level.id}
            className={cn(
              "relative flex items-start space-x-8 cursor-pointer group transition-all",
              isLocked && "opacity-40 grayscale pointer-events-none"
            )}
            onClick={() => !isLocked && onLevelClick?.(level.id)}
          >
            {/* Icon/Step Indicator */}
            <div className="relative z-10">
              <motion.div
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-[1rem] border-2 transition-all duration-500",
                  isCompleted && "bg-[var(--ln-teal-600)] border-[var(--ln-teal-600)] text-white shadow-lg shadow-[var(--ln-teal-500)]/20",
                  isActive && "bg-white border-[var(--ln-teal-500)] text-[var(--ln-teal-500)] shadow-xl shadow-[var(--ln-teal-500)]/10",
                  isLocked && "bg-slate-50 border-[var(--ln-border)] text-slate-300"
                )}
                whileHover={!isLocked ? { scale: 1.05 } : {}}
              >
                {isCompleted ? (
                  <Check className="h-6 w-6 stroke-[2px]" />
                ) : isLocked ? (
                  <Lock className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4 fill-current ml-0.5" />
                )}
              </motion.div>
            </div>

            {/* Content */}
            <div className="flex-1 pt-1">
              <h4 className={cn(
                "text-sm font-extrabold transition-colors uppercase tracking-tight",
                isActive ? "text-[var(--ln-teal-600)]" : isCompleted ? "text-[var(--ln-navy-900)]" : "text-slate-400"
              )}>
                {level.title}
              </h4>
              <p className="text-xs text-[var(--ln-text-secondary)] mt-1.5 max-w-sm font-medium leading-relaxed">
                {level.description}
              </p>
            </div>
            
            {isActive && (
              <div className="flex items-center">
                <span className="text-[9px] font-extrabold uppercase tracking-widest text-[var(--ln-teal-600)] bg-[var(--ln-teal-soft)] px-3 py-1.5 rounded-lg border border-[var(--ln-teal-500)]/10">
                  Current
                </span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
