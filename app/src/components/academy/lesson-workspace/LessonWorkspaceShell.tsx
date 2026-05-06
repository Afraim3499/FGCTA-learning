"use client";

import React, { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { LessonRail } from "./LessonRail";
import { LessonStage } from "./LessonStage";
import { LessonContextRail } from "./LessonContextRail";
import { Menu, X, ChevronDown } from "lucide-react";

interface CardData {
  type: string;
  title?: string;
  label?: string;
  body?: string;
  visual?: string;
  visualKey?: string;
  items?: { title: string; body: string; icon?: string }[];
  comparison?: any;
  scenario?: any;
  taskData?: any;
  context?: {
    keyTerms?: string[];
    whyThisMatters?: string;
    realLifeExample?: string;
    commonMistake?: string;
    quickNote?: string;
  };
  objective?: string;
  stepperLabel?: string;
}

interface LessonWorkspaceShellProps {
  moduleTitle: string;
  moduleNumber?: string;
  level: number;
  cards: CardData[];
  tracks: {
    id: string;
    label: string;
    available: boolean;
  }[];
  activeTrack: string;
  onTrackChange: (track: string) => void;
  userTrack?: string;
  interactiveTaskType?: string | null;
  interactiveTaskData?: any;
  onComplete?: () => void;
  onNextModule?: () => void;
  /** Each track's cards — used to switch content when track changes */
  trackCards?: Record<string, CardData[]>;
}

export function LessonWorkspaceShell({
  moduleTitle,
  moduleNumber,
  level,
  cards,
  tracks,
  activeTrack,
  onTrackChange,
  userTrack,
  interactiveTaskType,
  interactiveTaskData,
  onComplete,
  onNextModule,
}: LessonWorkspaceShellProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileContextOpen, setMobileContextOpen] = useState(false);

  // Safety clamp
  const safeIndex = Math.max(0, Math.min(currentIndex, cards.length - 1));
  const currentCard = cards[safeIndex];

  if (!currentCard || cards.length === 0) {
    return (
      <div className="p-12 text-center text-slate-400 font-medium">
        Loading lesson content...
      </div>
    );
  }

  const progress = ((safeIndex + 1) / cards.length) * 100;

  // Build stepper items
  const steps = cards.map((card, i) => ({
    index: i,
    label:
      card.stepperLabel ||
      card.title ||
      `Screen ${i + 1}`,
    completed: i < safeIndex,
    active: i === safeIndex,
  }));

  const handleStepClick = useCallback(
    (index: number) => {
      setCurrentIndex(index);
      setMobileNavOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    []
  );

  const handleNext = useCallback(() => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentIndex, cards.length]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentIndex]);

  const handleTrackChange = useCallback(
    (track: string) => {
      onTrackChange(track);
      setCurrentIndex(0);
    },
    [onTrackChange]
  );

  return (
    <div className="relative h-full flex flex-col min-h-0 pb-4">
      {/* ─── Mobile: Top Navigation Toggles ─── */}
      <div className="lg:hidden flex items-center justify-between mb-4 gap-2 shrink-0">
        <button
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-white border border-[var(--ln-border)] rounded-xl text-[10px] font-extrabold text-[var(--ln-navy-900)] uppercase tracking-wider shadow-sm"
        >
          {mobileNavOpen ? <X size={14} /> : <Menu size={14} />}
          {mobileNavOpen ? "Close Menu" : "Module Index"}
        </button>
      </div>

      {/* ─── Mobile: Left rail drawer ─── */}
      {mobileNavOpen && (
        <div className="lg:hidden mb-6 animate-in slide-in-from-top-2 duration-300">
          <LessonRail
            moduleTitle={moduleTitle}
            moduleNumber={moduleNumber}
            level={level}
            tracks={tracks}
            activeTrack={activeTrack}
            onTrackChange={handleTrackChange}
            steps={steps}
            onStepClick={handleStepClick}
            progress={progress}
            userTrack={userTrack}
          />
        </div>
      )}

      {/* ─── Three-Column Desktop Grid ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_340px] gap-6 xl:gap-10 flex-1 min-h-0 overflow-hidden">
        {/* Left Rail — hidden on mobile (uses drawer/toggle) */}
        <div className={cn(
          "h-full lg:block overflow-y-auto custom-scrollbar pr-2 pb-8",
          mobileNavOpen ? "block" : "hidden"
        )}>
          <LessonRail
            moduleTitle={moduleTitle}
            moduleNumber={moduleNumber}
            level={level}
            tracks={tracks}
            activeTrack={activeTrack}
            onTrackChange={handleTrackChange}
            steps={steps}
            onStepClick={handleStepClick}
            progress={progress}
            userTrack={userTrack}
          />
        </div>

        {/* Center Stage — Always visible */}
        <main className={cn(
          "min-w-0 bg-white rounded-[2rem] border border-[var(--ln-border)] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.04)] h-full overflow-y-auto custom-scrollbar flex flex-col",
          mobileNavOpen ? "hidden lg:flex" : "flex"
        )}>
          <div className="p-5 md:p-8 lg:p-10 flex-1">
            <LessonStage
              card={currentCard}
              cardIndex={safeIndex}
              totalCards={cards.length}
              onNext={handleNext}
              onPrev={handlePrev}
              onComplete={onComplete}
              onNextModule={onNextModule}
              interactiveTaskType={interactiveTaskType}
              interactiveTaskData={interactiveTaskData}
            />
          </div>

          {/* Mobile Context Accordion (Below Stage) */}
          <div className="lg:hidden p-5 md:p-8 border-t border-slate-100 bg-slate-50/50">
            <h3 className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-4 px-1">
              Context & Glossary
            </h3>
            <LessonContextRail
              context={currentCard.context}
              objective={currentCard.objective}
            />
          </div>
        </main>

        {/* Right Rail — hidden on mobile (rendered below stage instead) */}
        <div className="hidden lg:block h-full overflow-y-auto custom-scrollbar pl-2 pb-8">
          <LessonContextRail
            context={currentCard.context}
            objective={currentCard.objective}
          />
        </div>
      </div>
    </div>
  );
}
