"use client";

import React from "react";
import { Target, Clock, Lock, Award, Bookmark, BarChart3, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface StrategyStickyProfilePanelProps {
  level: number;
  family: string;
  complexity: string;
  winRate: string;
  avgR: string;
  isSaved: boolean;
  onSave: () => void;
  isSaving: boolean;
  isLocked: boolean;
  onPractice: () => void;
  practiceDuration?: string;
  statusText?: string;
}

export function StrategyStickyProfilePanel({
  level,
  family,
  complexity,
  winRate,
  avgR,
  isSaved,
  onSave,
  isSaving,
  isLocked,
  onPractice,
  practiceDuration = "45 mins",
  statusText = "Not Practiced",
}: StrategyStickyProfilePanelProps) {
  return (
    <div className="w-full lg:w-80 shrink-0 lg:sticky lg:top-8 bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden flex flex-col divide-y divide-slate-100">
      
      {/* 1. Action Block */}
      <div className="p-5 bg-slate-50/30 space-y-4">
        <div>
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">
            Practice Command
          </span>
          <h3 className="text-sm font-extrabold text-[var(--ln-navy-900)] mt-1 flex items-center gap-1.5">
            Setup: <span className="text-[var(--ln-teal-600)] font-bold">{statusText}</span>
          </h3>
        </div>

        {isLocked ? (
          <div className="space-y-3">
            <div className="flex items-start gap-2.5 p-3 bg-rose-50/30 border border-rose-100/40 rounded-xl">
              <Lock className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <p className="text-[10px] font-extrabold text-rose-800 uppercase tracking-wider leading-none">
                  Content Locked
                </p>
                <p className="text-[9px] text-rose-700/80 font-semibold leading-relaxed">
                  Earn Level {level} to unlock practice simulator.
                </p>
              </div>
            </div>
            <button
              disabled
              className="w-full py-3 bg-slate-100 text-slate-400 font-bold text-xs rounded-xl cursor-not-allowed flex items-center justify-center gap-1.5 uppercase tracking-wider border border-slate-200/40"
            >
              <Lock className="w-3.5 h-3.5" /> Simulation Locked
            </button>
          </div>
        ) : (
          <div className="space-y-2.5">
            <button
              onClick={onPractice}
              className="w-full py-3 bg-[var(--ln-teal-500)] text-white font-extrabold text-xs rounded-xl shadow-sm hover:bg-[var(--ln-teal-600)] transition-all flex items-center justify-center gap-2 uppercase tracking-widest active:scale-[0.98]"
            >
              <Target className="w-4 h-4" /> Practice Setup
            </button>

            <button
              onClick={onSave}
              disabled={isSaving}
              className={cn(
                "w-full py-2.5 border rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-[0.98]",
                isSaved
                  ? "bg-teal-50 text-[var(--ln-teal-600)] border-[var(--ln-teal-500)]/20"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
              )}
            >
              <Bookmark className={cn("w-3.5 h-3.5", isSaved && "fill-current")} />
              {isSaved ? "Saved in Journal" : "Bookmark Layout"}
            </button>
          </div>
        )}
      </div>

      {/* 2. Specs Block */}
      <div className="p-5 space-y-4">
        <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
          Concept Specifications
        </h4>

        <div className="space-y-3.5">
          {/* Academy Level */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-500">
              <Award className="w-4 h-4 text-slate-400" />
              <span className="text-xs font-semibold">Academy Level</span>
            </div>
            <span className="text-xs font-black text-[var(--ln-teal-600)]">
              Level {level}
            </span>
          </div>

          {/* Difficulty Rating */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-500">
              <Clock className="w-4 h-4 text-slate-400" />
              <span className="text-xs font-semibold">Difficulty Rating</span>
            </div>
            <span className={cn(
              "text-[9px] font-black px-2 py-0.5 rounded-full uppercase border",
              complexity === "LOW" ? "bg-emerald-50 text-emerald-600 border-emerald-100" :
              complexity === "MED" ? "bg-teal-50 text-teal-600 border-teal-100" :
              complexity === "HIGH" ? "bg-amber-50 text-amber-600 border-amber-100" :
              "bg-rose-50 text-rose-600 border-rose-100"
            )}>
              {complexity}
            </span>
          </div>

          {/* Practice Duration */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-500">
              <Clock className="w-4 h-4 text-slate-400" />
              <span className="text-xs font-semibold">Practice Duration</span>
            </div>
            <span className="text-xs font-bold text-slate-700">
              {practiceDuration}
            </span>
          </div>

          {/* Win Rate */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-500">
              <BarChart3 className="w-4 h-4 text-slate-400" />
              <span className="text-xs font-semibold">Hist. Win Rate</span>
            </div>
            <span className="text-xs font-black text-[var(--ln-navy-900)]">
              {winRate}
            </span>
          </div>

          {/* R Factor */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-500">
              <Target className="w-4 h-4 text-slate-400" />
              <span className="text-xs font-semibold">Average R Factor</span>
            </div>
            <span className="text-xs font-black text-[var(--ln-navy-900)]">
              {avgR} R
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
