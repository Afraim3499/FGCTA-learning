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
  { id: 1, title: "Level 1: Core Logic", description: "Market fundamentals and institutional intent." },
  { id: 2, title: "Level 2: Edge Mechanics", description: "Defining high-probability setups." },
  { id: 3, title: "Level 3: Retail Traps", description: "Identifying and avoiding common traps." },
  { id: 4, title: "Level 4: Execution Protocols", description: "Step-by-step entry and exit logic." },
  { id: 5, title: "Level 5: Risk Architecture", description: "Advanced position sizing and management." },
  { id: 6, title: "Level 6: Performance Psychology", description: "Discipline and mental performance." },
  { id: 7, title: "Level 7: Institutional Flow", description: "Understanding HTF intent and orderflow." },
  { id: 8, title: "Level 8: Elite Certification", description: "The final performance evaluation." },
];

export function ProgressLadder({ currentLevel, totalLevels = 8, onLevelClick }: ProgressLadderProps) {
  return (
    <div className="relative space-y-8 py-4">
      {/* Background Line */}
      <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-border-default" />
      
      {/* Active Progress Line */}
      <motion.div 
        className="absolute left-6 top-4 w-0.5 bg-brand-500 shadow-glow-blue"
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
              "relative flex items-start space-x-6 cursor-pointer group transition-all",
              isLocked && "opacity-50 grayscale pointer-events-none"
            )}
            onClick={() => !isLocked && onLevelClick?.(level.id)}
          >
            {/* Icon/Step Indicator */}
            <div className="relative z-10">
              <motion.div
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-500",
                  isCompleted && "bg-profit border-profit text-white",
                  isActive && "bg-brand-500 border-brand-500 text-white shadow-glow-blue",
                  isLocked && "bg-surface-primary border-border-default text-text-muted"
                )}
                whileHover={!isLocked ? { scale: 1.1 } : {}}
              >
                {isCompleted ? (
                  <Check className="h-6 w-6" />
                ) : isLocked ? (
                  <Lock className="h-5 w-5" />
                ) : (
                  <Play className="h-5 w-5 fill-current" />
                )}
              </motion.div>
              
              {isActive && (
                <motion.div 
                  className="absolute -inset-2 rounded-full border border-brand-500/50"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pt-1">
              <h4 className={cn(
                "text-base font-bold transition-colors",
                isActive ? "text-brand-500" : isCompleted ? "text-text-primary" : "text-text-secondary"
              )}>
                {level.title}
              </h4>
              <p className="text-sm text-text-muted mt-1 max-w-md">
                {level.description}
              </p>
            </div>
            
            {isActive && (
              <div className="flex items-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-500 bg-brand-500/10 px-2 py-1 rounded">
                  In Progress
                </span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
