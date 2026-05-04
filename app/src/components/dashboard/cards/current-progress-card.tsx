"use client";

import { BarChart2 } from "lucide-react";

interface CurrentProgressCardProps {
  currentLevel: number;
  levelTitle: string;
  xpTotal: number;
  completionPercent: number;
  nextGate: string;
}

export function CurrentProgressCard({
  currentLevel,
  levelTitle,
  xpTotal,
  completionPercent,
  nextGate
}: CurrentProgressCardProps) {

  // Simple SVG circle progress
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (completionPercent / 100) * circumference;

  return (
    <div className="bg-white rounded-3xl p-5 border border-[var(--ln-border)] shadow-sm flex flex-col h-full hover:shadow-md transition-all">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-[var(--ln-navy-900)]">Current Progress</h3>
        <BarChart2 className="w-4 h-4 text-[var(--ln-text-muted)]" />
      </div>

      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-20 h-20 flex shrink-0 items-center justify-center">
          {/* Background Circle */}
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-slate-100"
            />
            {/* Progress Circle */}
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="text-[var(--ln-teal-500)] transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-extrabold text-[var(--ln-navy-900)]">{completionPercent}%</span>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-bold text-[var(--ln-navy-900)]">Level {currentLevel} — {levelTitle}</h4>
            <p className="text-sm font-bold text-[var(--ln-teal-500)] mt-0.5">{xpTotal.toLocaleString()} XP</p>
          </div>

          <div>
            <p className="text-[10px] text-[var(--ln-text-secondary)] uppercase tracking-wider font-bold mb-0.5">Next Gate</p>
            <p className="text-xs text-[var(--ln-text-secondary)]">{nextGate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
