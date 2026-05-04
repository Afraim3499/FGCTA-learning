"use client";

import { BookOpen, CheckCircle2, Lock, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface LevelData {
  level: number;
  title: string;
  completed: boolean;
  locked: boolean;
}

interface LearningPathCardProps {
  levels: LevelData[];
}

export function LearningPathCard({ levels }: LearningPathCardProps) {
  const displayLevels = levels.slice(0, 4);

  return (
    <div className="bg-white rounded-3xl p-5 border border-[var(--ln-border)] shadow-sm flex flex-col h-full hover:shadow-md transition-all">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-[var(--ln-navy-900)]">Learning Path</h3>
        <BookOpen className="w-4 h-4 text-[var(--ln-text-muted)]" />
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <div className="flex items-start justify-between relative mt-2">
          {/* Horizontal Connecting line */}
          <div className="absolute left-6 right-6 top-5 h-0.5 bg-[var(--ln-border)] -z-10" />

          {displayLevels.map((lvl, idx) => {
            const isInProgress = !lvl.locked && !lvl.completed;
            return (
              <div key={lvl.level} className="flex flex-col items-center gap-3 w-1/4 group relative z-10">
                <div className="relative">
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center border-4 border-white shadow-sm transition-transform duration-300",
                    lvl.completed ? "bg-[var(--ln-teal-500)] text-white" :
                    isInProgress ? "bg-[var(--ln-teal-soft)] border-[var(--ln-teal-500)] text-[var(--ln-teal-500)] shadow-[0_0_15px_rgba(15,118,110,0.3)] scale-110" :
                    "bg-[var(--ln-bg-soft)] text-[var(--ln-text-muted)] border-[var(--ln-border)]"
                  )}>
                    {lvl.completed ? <CheckCircle2 className="w-4 h-4" /> :
                     isInProgress ? <PlayCircle className="w-4 h-4" /> :
                     <Lock className="w-3 h-3" />}
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-[9px] font-bold text-[var(--ln-text-muted)] uppercase tracking-wider mb-0.5">
                    Lvl {lvl.level}
                  </p>
                  <p className={cn("text-[10px] font-extrabold px-1 line-clamp-1", isInProgress ? "text-[var(--ln-navy-900)]" : "text-[var(--ln-text-secondary)]")}>
                    {lvl.title}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
