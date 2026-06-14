"use client";

import React from "react";
import { Target, Clock, Lock, ShieldAlert, Award, Bookmark, ArrowRight } from "lucide-react";
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
    <div className="w-full lg:w-80 shrink-0 lg:sticky lg:top-24 space-y-6">
      {/* Primary Action Card */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-6">
        <div>
          <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
            Practice Command
          </h4>
          <h3 className="text-base font-extrabold text-[var(--ln-navy-900)] mt-1">
            Setup Status: <span className="text-slate-500 font-bold">{statusText}</span>
          </h3>
        </div>

        {isLocked ? (
          <div className="space-y-3">
            <div className="flex items-start gap-2 p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <Lock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <p className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider leading-none">
                  Content Gated
                </p>
                <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">
                  Complete required modules at Level {level} to unlock practice mode.
                </p>
              </div>
            </div>
            <button
              disabled
              className="w-full py-3 bg-slate-100 text-slate-400 font-bold text-xs rounded-xl cursor-not-allowed flex items-center justify-center gap-1.5 uppercase tracking-wider"
            >
              <Lock className="w-3.5 h-3.5" /> Practice Locked
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            <button
              onClick={onPractice}
              className="w-full py-3.5 bg-[var(--ln-teal-500)] text-white font-extrabold text-xs rounded-xl shadow-md shadow-[var(--ln-teal-500)]/20 hover:bg-[var(--ln-teal-600)] transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
            >
              <Target className="w-4 h-4" /> Practice in Chart Lab
            </button>

            <button
              onClick={onSave}
              disabled={isSaving}
              className={cn(
                "w-full py-2.5 border rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all",
                isSaved
                  ? "bg-slate-50 text-[var(--ln-teal-600)] border-[var(--ln-teal-500)]/20"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
              )}
            >
              <Bookmark className={cn("w-3.5 h-3.5", isSaved && "fill-current")} />
              {isSaved ? "Saved to Technical Journal" : "Save Concept Layout"}
            </button>
          </div>
        )}
      </div>

      {/* Meta Specifications Card */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
        <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">
          Concept Specifications
        </h4>

        <div className="space-y-3">
          {/* Level */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-500">
              <Award className="w-4 h-4" />
              <span className="text-xs font-semibold">Academy Level</span>
            </div>
            <span className="text-xs font-extrabold text-[var(--ln-teal-600)]">
              Level {level}
            </span>
          </div>

          {/* Complexity */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-500">
              <Clock className="w-4 h-4" />
              <span className="text-xs font-semibold">Difficulty Rating</span>
            </div>
            <span className={cn(
              "text-[10px] font-black px-2 py-0.5 rounded uppercase",
              complexity === "LOW" ? "bg-emerald-50 text-emerald-600" :
              complexity === "MED" ? "bg-teal-50 text-teal-600" :
              complexity === "HIGH" ? "bg-amber-50 text-amber-600" :
              "bg-rose-50 text-rose-600"
            )}>
              {complexity}
            </span>
          </div>

          {/* Practice Time */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-500">
              <Clock className="w-4 h-4" />
              <span className="text-xs font-semibold">Est. Practice Time</span>
            </div>
            <span className="text-xs font-bold text-slate-600">
              {practiceDuration}
            </span>
          </div>

          {/* Hist Win Rate */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-500">
              <Bookmark className="w-4 h-4" />
              <span className="text-xs font-semibold">Historical Win Rate</span>
            </div>
            <span className="text-xs font-extrabold text-[var(--ln-navy-900)]">
              {winRate}
            </span>
          </div>

          {/* Avg R-Factor */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-500">
              <Target className="w-4 h-4" />
              <span className="text-xs font-semibold">Average R Factor</span>
            </div>
            <span className="text-xs font-extrabold text-[var(--ln-navy-900)]">
              {avgR} R
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
