"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

interface LessonData {
  id: string;
  moduleNumber: string;
  level: number;
  title: string;
}

interface StrategyRelatedLessonsProps {
  linkedModule: LessonData | null;
  level: number;
  family: string;
}

export function StrategyRelatedLessons({ linkedModule, level, family }: StrategyRelatedLessonsProps) {
  return (
    <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
      <h3 className="text-xs font-extrabold text-[var(--ln-navy-900)] uppercase tracking-wider border-b border-slate-100 pb-2">
        Prerequisite Academy Lessons
      </h3>
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-white border border-slate-200 rounded-xl shrink-0 text-slate-500 shadow-sm">
            <BookOpen className="w-5 h-5 text-[var(--ln-teal-500)]" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-[var(--ln-navy-900)]">
              {linkedModule 
                ? `Level ${linkedModule.level} Module ${linkedModule.moduleNumber}: ${linkedModule.title}`
                : `Level ${level} Module: ${family}`}
            </h4>
            <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">
              Domain: {family} • Recommended Level {level}
            </p>
          </div>
        </div>

        {linkedModule ? (
          <Link
            href={`/course/module/${linkedModule.id}`}
            className="px-4 py-2 bg-[var(--ln-teal-soft)] hover:bg-[var(--ln-teal-200)] text-[var(--ln-teal-600)] text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 shrink-0 self-stretch sm:self-auto justify-center"
          >
            Review Lesson <ArrowRight size={14} />
          </Link>
        ) : (
          <span className="text-[10px] text-slate-400 font-bold bg-slate-100 px-2.5 py-1 rounded">
            Integrated Curriculum
          </span>
        )}
      </div>
    </div>
  );
}
