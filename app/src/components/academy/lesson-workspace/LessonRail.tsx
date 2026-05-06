"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  Layout,
  Globe,
  Bitcoin,
  Target,
  CheckCircle2,
  Download,
} from "lucide-react";

interface StepperItem {
  index: number;
  label: string;
  completed: boolean;
  active: boolean;
}

interface LessonRailProps {
  moduleTitle: string;
  moduleNumber?: string;
  level: number;
  tracks: {
    id: string;
    label: string;
    available: boolean;
  }[];
  activeTrack: string;
  onTrackChange: (track: string) => void;
  steps: StepperItem[];
  onStepClick: (index: number) => void;
  progress: number;
  userTrack?: string;
}

const TRACK_ICONS: Record<string, React.ElementType> = {
  core: Layout,
  forex: Globe,
  crypto: Bitcoin,
  gold: Target,
};

export function LessonRail({
  moduleTitle,
  moduleNumber,
  level,
  tracks,
  activeTrack,
  onTrackChange,
  steps,
  onStepClick,
  progress,
  userTrack,
}: LessonRailProps) {
  return (
    <aside className="space-y-5 lg:sticky lg:top-6 self-start">
      {/* Compact Topline Progress */}
      <div className="px-2 space-y-1.5 mb-1">
        <div className="flex items-center justify-between text-[9px] font-extrabold uppercase tracking-widest">
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>L{level}</span>
            <span>•</span>
            <span>M{moduleNumber}</span>
          </div>
          <span className="text-[var(--ln-teal-500)]">
            {steps.filter((s) => s.completed).length} / {steps.length} Screens
          </span>
        </div>
        <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-[var(--ln-teal-500)] transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Module Identity Title */}
      <h2 className="text-[13px] font-extrabold text-[var(--ln-navy-900)] leading-tight px-2 uppercase tracking-tight mb-2">
        {moduleTitle}
      </h2>

      {/* Track Selector */}
      <div className="space-y-2">
        <h3 className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest px-2">
          Tracks
        </h3>
        <div className="p-1 bg-white rounded-2xl border border-[var(--ln-border)] flex flex-col gap-0.5 shadow-sm">
          {tracks.map((track) => {
            const Icon = TRACK_ICONS[track.id] || Layout;
            const isActive = activeTrack === track.id;
            const isCurrent = track.id === userTrack && track.id !== "core";
            return (
              <button
                key={track.id}
                disabled={!track.available && track.id !== "core"}
                onClick={() => onTrackChange(track.id)}
                className={cn(
                  "relative flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[11px] font-bold transition-all",
                  isActive
                    ? "bg-[var(--ln-teal-500)] text-white shadow-md shadow-[var(--ln-teal-500)]/20"
                    : !track.available && track.id !== "core"
                    ? "opacity-20 grayscale cursor-not-allowed text-slate-400"
                    : "text-slate-600 hover:bg-slate-50 hover:text-[var(--ln-navy-900)]"
                )}
              >
                <Icon className="w-3.5 h-3.5" />
                {track.label}
                {isCurrent && (
                  <span className="absolute right-3 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Lesson Screen Stepper */}
      <div className="space-y-2">
        <h3 className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest px-2">
          Lesson Screens
        </h3>
        <div className="space-y-0.5 relative">
          {/* Vertical connector */}
          <div className="absolute left-[21px] top-3 bottom-3 w-px bg-slate-100" />

          {steps.map((step) => (
            <button
              key={step.index}
              onClick={() => onStepClick(step.index)}
              className={cn(
                "relative flex items-center gap-2.5 w-full px-2.5 py-2 rounded-xl text-left transition-all",
                step.active
                  ? "bg-white shadow-sm border border-[var(--ln-border)]"
                  : "hover:bg-slate-50"
              )}
            >
              <div
                className={cn(
                  "relative z-10 w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[9px] font-bold transition-all border-2",
                  step.completed
                    ? "bg-[var(--ln-teal-500)] border-[var(--ln-teal-500)] text-white"
                    : step.active
                    ? "bg-[var(--ln-navy-900)] border-[var(--ln-navy-900)] text-white"
                    : "bg-white border-slate-200 text-slate-400"
                )}
              >
                {step.completed ? (
                  <CheckCircle2 size={12} />
                ) : (
                  step.index + 1
                )}
              </div>
              <span
                className={cn(
                  "text-[11px] font-semibold leading-tight truncate",
                  step.active
                    ? "text-[var(--ln-navy-900)]"
                    : step.completed
                    ? "text-[var(--ln-teal-600)]"
                    : "text-slate-400"
                )}
              >
                {step.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Optional action button */}
      <button className="w-full flex items-center justify-center gap-2 px-3 py-2.5 border border-slate-200 rounded-xl text-[11px] font-bold text-slate-500 hover:text-[var(--ln-navy-900)] hover:border-slate-300 hover:bg-white transition-all">
        <Download size={13} />
        Download Worksheet
      </button>
    </aside>
  );
}
