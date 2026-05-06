"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Target,
  Lightbulb,
  AlertCircle,
  HelpCircle,
  ShieldAlert,
  Gavel,
  Scale,
  XCircle,
  Layers,
  Zap,
  BookOpen,
  MapPin,
  ClipboardCheck,
  MessageSquare,
  Info as InfoIcon,
} from "lucide-react";
import {
  LearningLoop,
  CandleDiagram,
  NoteComparison,
  AcademyPath,
  SystemMap,
  PracticeTimeline,
  DecisionGate,
  BehaviorFlow,
  HypeTrapPath,
  ForexRelationship,
  ForexInstrumentPanel,
  ForexContextComparison,
  ForexMiniDrillBoard,
  OrientationDebrief,
} from "../AcademyVisuals";
import { ChoiceBlockPractice } from "../interactive/choice-block-practice";
import { ScenarioDecisionEngine } from "../interactive/scenario-decision-engine";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface CardData {
  type: string;
  title?: string;
  label?: string;
  body?: string;
  visual?: string;
  visualKey?: string;
  items?: { title: string; body: string; icon?: string }[];
  comparison?: {
    left: {
      title: string;
      content: string;
      icon?: string;
      type?: "negative" | "positive";
    };
    right: {
      title: string;
      content: string;
      icon?: string;
      type?: "negative" | "positive";
    };
  };
  scenario?: {
    left: { title: string; content: string };
    right: { title: string; content: string };
  };
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

interface LessonStageProps {
  card: CardData;
  cardIndex: number;
  totalCards: number;
  onNext: () => void;
  onPrev: () => void;
  onComplete?: () => void;
  onNextModule?: () => void;
  interactiveTaskType?: string | null;
  interactiveTaskData?: any;
}

const markdownComponents = {
  h1: ({ className, ...props }: any) => (
    <h1
      className={cn(
        "text-3xl font-extrabold text-[var(--ln-navy-900)] mb-6 tracking-tight uppercase",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: any) => (
    <h2
      className={cn(
        "text-2xl font-bold text-[var(--ln-navy-900)] mt-8 mb-4 tracking-tight",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: any) => (
    <p
      className={cn(
        "text-base text-slate-600 leading-relaxed mb-6 font-medium",
        className
      )}
      {...props}
    />
  ),
  strong: ({ className, ...props }: any) => (
    <strong
      className={cn(
        "text-[var(--ln-navy-900)] font-extrabold",
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: any) => (
    <ul className={cn("list-none space-y-3 mb-8", className)} {...props} />
  ),
  li: ({ className, ...props }: any) => (
    <li
      className={cn(
        "flex items-start gap-3 text-sm text-slate-600 font-medium",
        className
      )}
      {...props}
    >
      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--ln-teal-500)] shrink-0" />
      {props.children}
    </li>
  ),
};

export function LessonStage({
  card,
  cardIndex,
  totalCards,
  onNext,
  onPrev,
  onComplete,
  onNextModule,
  interactiveTaskType,
  interactiveTaskData,
}: LessonStageProps) {
  const [practicePassed, setPracticePassed] = useState(false);
  const isLast = cardIndex === totalCards - 1;

  const renderVisual = (name?: string) => {
    switch (name) {
      case "learning-loop":
        return <LearningLoop />;
      case "candle-anatomy":
        return <CandleDiagram />;
      case "note-comparison":
        return <NoteComparison />;
      case "academy-path":
        return <AcademyPath />;
      case "training-cockpit":
        return <SystemMap />;
      case "practice-timeline":
        return <PracticeTimeline />;
      case "decision-gate":
        return <DecisionGate />;
      case "learner-profiles":
        return <BehaviorFlow />;
      case "hype-trap-path":
        return <HypeTrapPath />;
      case "forex-relationship":
        return <ForexRelationship />;
      case "forex-instruments":
        return <ForexInstrumentPanel />;
      case "forex-context-comparison":
        return <ForexContextComparison />;
      case "forex-mini-drill":
        return <ForexMiniDrillBoard />;
      case "orientation-debrief":
        return <OrientationDebrief />;
      default:
        return null;
    }
  };

  const renderIcon = (name?: string) => {
    switch (name) {
      case "target":
        return <Target className="w-5 h-5" />;
      case "lightbulb":
        return <Lightbulb className="w-5 h-5" />;
      case "alert":
        return <AlertCircle className="w-5 h-5" />;
      case "shield":
        return <ShieldAlert className="w-5 h-5" />;
      case "gavel":
        return <Gavel className="w-5 h-5" />;
      case "scale":
        return <Scale className="w-5 h-5" />;
      case "x":
        return <XCircle className="w-5 h-5" />;
      case "check":
        return <CheckCircle2 className="w-5 h-5" />;
      case "modules":
        return <Layers className="w-5 h-5" />;
      case "tasks":
        return <Zap className="w-5 h-5" />;
      case "lab":
        return <MapPin className="w-5 h-5" />;
      case "journal":
        return <ClipboardCheck className="w-5 h-5" />;
      case "nava":
        return <MessageSquare className="w-5 h-5" />;
      case "book":
        return <BookOpen className="w-5 h-5" />;
      default:
        return <InfoIcon className="w-5 h-5" />;
    }
  };

  // ── Practice card ──────────────────────────────────
  const renderPractice = () => {
    const activeTaskType = card.taskData?.type || interactiveTaskType;
    const activeTaskData = card.taskData || interactiveTaskData;
    const hasVisual = card.visualKey || card.visual;
    const hasBody = !!card.body;

    if (activeTaskType === "choice_block" && activeTaskData?.question) {
      return (
        <div className="space-y-10">
          {/* Top Section: Visual + Body */}
          {(hasVisual || hasBody) && (
            <div className="space-y-6">
              {hasVisual && (
                <div className={cn(
                  "w-full bg-slate-50/50 rounded-[2.5rem] p-4 border border-slate-100 flex items-center justify-center overflow-hidden",
                  (card.visualKey === "hype-trap-path" || card.visualKey === "practice-timeline" || card.visualKey === "decision-gate" || card.visualKey === "forex-mini-drill") ? "" : "max-h-[40vh]"
                )}>
                  <div className={cn(
                    "w-full flex justify-center",
                    (card.visualKey === "hype-trap-path" || card.visualKey === "practice-timeline" || card.visualKey === "decision-gate" || card.visualKey === "forex-mini-drill") ? "" : "max-h-full"
                  )}>
                    {renderVisual(card.visualKey || card.visual)}
                  </div>
                </div>
              )}
              {hasBody && (
                <div className="max-w-4xl mx-auto pt-2">
                  <div className="prose prose-slate max-w-none">
                    <ReactMarkdown
                      components={{
                        strong: ({ node, ...props }) => (
                          <span className="font-black text-slate-900" {...props} />
                        ),
                        p: ({ node, ...props }) => (
                          <p className="text-sm font-bold text-slate-600 leading-relaxed" {...props} />
                        ),
                      }}
                    >
                      {card.body}
                    </ReactMarkdown>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Interaction Section */}
          <ChoiceBlockPractice
            question={activeTaskData.question}
            options={activeTaskData.options || []}
            correctIndex={activeTaskData.correctIndex}
            onPass={() => {
              setPracticePassed(true);
              onComplete?.();
            }}
          />
          {practicePassed && (
            <div className="flex justify-center mt-8">
              <button
                onClick={onNext}
                className="px-8 py-4 bg-[var(--ln-teal-500)] text-white rounded-2xl font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-[var(--ln-teal-500)]/20 hover:bg-[var(--ln-teal-600)] transition-all"
              >
                Continue to Summary <ArrowRight size={18} />
              </button>
            </div>
          )}
        </div>
      );
    }

    if (
      interactiveTaskType === "type_b_scenario" &&
      interactiveTaskData?.options
    ) {
      return (
        <div className="space-y-8">
          <ScenarioDecisionEngine
            taskId="flow_task"
            moduleId="flow"
            contextPrompt={interactiveTaskData.contextPrompt}
            options={interactiveTaskData.options}
            onPass={() => {
              setPracticePassed(true);
              onComplete?.();
            }}
          />
          {practicePassed && (
            <div className="flex justify-center mt-8">
              <button
                onClick={onNext}
                className="px-8 py-4 bg-[var(--ln-teal-500)] text-white rounded-2xl font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-[var(--ln-teal-500)]/20 hover:bg-[var(--ln-teal-600)] transition-all"
              >
                Continue to Summary <ArrowRight size={18} />
              </button>
            </div>
          )}
        </div>
      );
    }

    return (
      <div className="p-12 text-center text-slate-400 font-medium">
        Practice task loading...
      </div>
    );
  };

  // ── Summary card ───────────────────────────────────
  const renderSummary = () => (
    <div className="space-y-10 text-center py-12">
      {card.visualKey || card.visual ? (
        <div className="w-full">{renderVisual(card.visualKey || card.visual)}</div>
      ) : (
        <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-emerald-500" />
        </div>
      )}
      <div className="space-y-4">
        <h2 className="text-3xl font-extrabold text-[var(--ln-navy-900)] uppercase tracking-tight">
          {card.title || "Module Complete"}
        </h2>
        <div className="prose prose-slate max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {card.body || ""}
          </ReactMarkdown>
        </div>
      </div>
      {onNextModule && (
        <button
          onClick={onNextModule}
          className="px-10 py-4 bg-[var(--ln-teal-500)] text-white rounded-2xl font-extrabold uppercase tracking-widest flex items-center gap-2 mx-auto shadow-xl shadow-[var(--ln-teal-500)]/20 hover:scale-105 transition-all"
        >
          Advance to Next Lesson <ArrowRight size={20} />
        </button>
      )}
    </div>
  );

  // ── Default content card ───────────────────────────
  const renderContent = () => {
    const hasVisual = card.visualKey || card.visual;
    const hasBody = !!card.body;
    const isSpecialLayout = 
      card.type === "comparison" || 
      card.type === "scenario" || 
      !!card.items || 
      card.visualKey === "academy-path" || 
      card.visualKey === "learning-loop" || 
      card.visualKey === "learner-profiles" || 
      card.visualKey === "training-cockpit" ||
      card.visualKey === "practice-timeline" ||
      card.visualKey === "decision-gate" ||
      card.visualKey === "hype-trap-path" ||
      card.visualKey === "forex-relationship" ||
      card.visualKey === "forex-instruments" ||
      card.visualKey === "forex-context-comparison" ||
      card.visualKey === "forex-mini-drill";

    return (
      <div className="space-y-5">
        {/* Side-by-side for simple visual + text cards */}
        {hasVisual && hasBody && !isSpecialLayout ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 bg-slate-50/50 rounded-[2rem] p-4 border border-slate-100 flex items-center justify-center min-h-[300px]">
              <div className="w-full max-h-[55vh]">
                {renderVisual(card.visualKey || card.visual)}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="prose prose-slate max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={markdownComponents}
                >
                  {card.body || ""}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Visual First (if stacked) */}
            {hasVisual && (
              <div className={cn(
                "w-full bg-slate-50/50 rounded-[2rem] p-2 md:p-4 border border-slate-100 flex items-center justify-center overflow-hidden",
                (card.visualKey === "academy-path" || card.visualKey === "learning-loop" || card.visualKey === "learner-profiles" || card.visualKey === "training-cockpit" || card.visualKey === "practice-timeline" || card.visualKey === "decision-gate" || card.visualKey === "hype-trap-path" || card.visualKey === "forex-relationship" || card.visualKey === "forex-instruments" || card.visualKey === "forex-context-comparison" || card.visualKey === "forex-mini-drill") ? "" : "max-h-[40vh]"
              )}>
                <div className={cn(
                  "w-full flex justify-center",
                  (card.visualKey === "academy-path" || card.visualKey === "learning-loop" || card.visualKey === "practice-timeline" || card.visualKey === "decision-gate" || card.visualKey === "hype-trap-path" || card.visualKey === "forex-relationship" || card.visualKey === "forex-instruments" || card.visualKey === "forex-context-comparison" || card.visualKey === "forex-mini-drill") ? "" : "max-h-full"
                )}>
                  {renderVisual(card.visualKey || card.visual)}
                </div>
              </div>
            )}

            {/* Special bypass for visuals that need body below them */}
            {(card.visualKey === "academy-path" || card.visualKey === "learning-loop" || card.visualKey === "learner-profiles" || card.visualKey === "training-cockpit" || card.visualKey === "practice-timeline" || card.visualKey === "decision-gate" || card.visualKey === "hype-trap-path" || card.visualKey === "forex-relationship" || card.visualKey === "forex-instruments" || card.visualKey === "forex-context-comparison" || card.visualKey === "forex-mini-drill") && hasBody && (
              <div className="max-w-4xl mx-auto pt-2">
                <div className="prose prose-slate max-w-none">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={markdownComponents}
                  >
                    {card.body || ""}
                  </ReactMarkdown>
                </div>
              </div>
            )}

            {/* Comparison layout */}
            {card.type === "comparison" && card.comparison && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                  className={cn(
                    "p-7 rounded-[2rem] border shadow-sm",
                    card.comparison.left.type === "negative"
                      ? "border-rose-100 bg-rose-50/20"
                      : "border-slate-100 bg-white"
                  )}
                >
                  <div className="flex items-center gap-3 mb-4">
                    {card.comparison.left.type === "negative" ? (
                      <XCircle className="w-5 h-5 text-rose-500" />
                    ) : (
                      <InfoIcon className="w-5 h-5 text-slate-400" />
                    )}
                    <span
                      className={cn(
                        "text-[10px] font-extrabold uppercase tracking-widest",
                        card.comparison.left.type === "negative"
                          ? "text-rose-500"
                          : "text-slate-500"
                      )}
                    >
                      {card.comparison.left.title}
                    </span>
                  </div>
                  <div className="text-sm text-slate-600 font-medium leading-relaxed prose-sm prose-slate">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {card.comparison.left.content}
                    </ReactMarkdown>
                  </div>
                </div>
                <div
                  className={cn(
                    "p-7 rounded-[2rem] border shadow-sm",
                    card.comparison.right.type === "positive" ||
                      !card.comparison.right.type
                      ? "border-emerald-100 bg-emerald-50/20"
                      : "border-slate-100 bg-white"
                  )}
                >
                  <div className="flex items-center gap-3 mb-4">
                    {card.comparison.right.type === "positive" ||
                    !card.comparison.right.type ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    ) : (
                      <InfoIcon className="w-5 h-5 text-slate-400" />
                    )}
                    <span
                      className={cn(
                        "text-[10px] font-extrabold uppercase tracking-widest",
                        card.comparison.right.type === "positive" ||
                          !card.comparison.right.type
                          ? "text-emerald-500"
                          : "text-slate-500"
                      )}
                    >
                      {card.comparison.right.title}
                    </span>
                  </div>
                  <div className="text-sm text-[var(--ln-navy-900)] font-bold leading-relaxed prose-sm prose-slate">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {card.comparison.right.content}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            )}

            {/* Scenario layout */}
            {card.type === "scenario" && card.scenario && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-7 rounded-[2rem] border border-slate-100 bg-white shadow-sm">
                  <h4 className="text-[10px] font-extrabold text-slate-400 mb-4 uppercase tracking-widest">
                    {card.scenario.left.title}
                  </h4>
                  <div className="text-sm text-slate-600 font-medium leading-relaxed prose-sm prose-slate">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {card.scenario.left.content}
                    </ReactMarkdown>
                  </div>
                </div>
                <div className="p-7 rounded-[2rem] border border-emerald-100 bg-emerald-50/10 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-10">
                    <Target size={60} className="text-emerald-500" />
                  </div>
                  <h4 className="text-[10px] font-extrabold text-emerald-600 mb-4 uppercase tracking-widest">
                    {card.scenario.right.title}
                  </h4>
                  <div className="text-sm text-[var(--ln-navy-900)] font-bold leading-relaxed prose-sm prose-slate">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {card.scenario.right.content}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            )}

            {/* Item cards */}
            {card.items && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {card.items.map((item, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-[1.5rem] border border-slate-100 bg-white hover:border-[var(--ln-teal-500)]/30 transition-all group shadow-sm"
                  >
                    <div className="p-2.5 rounded-xl bg-slate-50 text-slate-400 group-hover:bg-[var(--ln-teal-soft)] group-hover:text-[var(--ln-teal-500)] w-fit mb-4 transition-colors">
                      {renderIcon(item.icon)}
                    </div>
                    <h4 className="text-[11px] font-extrabold text-[var(--ln-navy-900)] mb-1.5 uppercase tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Body text (if stacked and no side-by-side) */}
            {hasBody && !hasVisual && (
              <div className="max-w-3xl">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={markdownComponents}
                >
                  {card.body || ""}
                </ReactMarkdown>
              </div>
            )}
          </>
        )}
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col min-h-0">
      {/* ─── Top Header (Pinned) ─── */}
      <div className="shrink-0 mb-4 space-y-3">
        {/* Progress bar */}
        <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-[var(--ln-teal-500)] transition-all duration-700 ease-out shadow-[0_0_12px_rgba(20,184,166,0.3)]"
            style={{ width: `${((cardIndex + 1) / totalCards) * 100}%` } as any}
          />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[var(--ln-teal-500)]">
            Screen {cardIndex + 1} of {totalCards}
          </span>
          {card.label && (
            <div className="px-3 py-1 rounded-full bg-[var(--ln-teal-soft)] text-[var(--ln-teal-500)] text-[9px] font-extrabold uppercase tracking-widest border border-[var(--ln-teal-200)] shadow-sm">
              {card.label}
            </div>
          )}
        </div>
        
        {card.title && card.type !== "summary" && (
          <h1 className="text-2xl md:text-3xl font-extrabold text-[var(--ln-navy-900)] tracking-tight leading-tight">
            {card.title}
          </h1>
        )}
      </div>

      {/* ─── Main Content Area (Scrollable if needed) ─── */}
      <div className="flex-1 overflow-y-auto custom-scrollbar min-h-0 pr-1">
        <div className="animate-in fade-in duration-500 pb-8">
          {card.type === "practice" ? renderPractice() : card.type === "summary" ? renderSummary() : renderContent()}
        </div>
      </div>

      {/* ─── Bottom Navigation (Pinned) ─── */}
      {card.type !== "summary" && (
        <div className="shrink-0 pt-6 mt-2 border-t border-slate-100 flex items-center justify-between gap-4">
          <button
            onClick={onPrev}
            disabled={cardIndex === 0}
            className={cn(
              "flex items-center gap-2 px-5 py-2.5 rounded-xl text-[10px] font-extrabold uppercase tracking-widest transition-all",
              cardIndex === 0
                ? "opacity-0 pointer-events-none"
                : "text-slate-400 hover:text-[var(--ln-navy-900)] hover:bg-slate-50"
            )}
          >
            <ChevronLeft size={14} /> Back
          </button>

          {/* Pagination dots */}
          <div className="hidden md:flex items-center gap-1.5">
            {Array.from({ length: totalCards }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  i === cardIndex
                    ? "w-6 bg-[var(--ln-teal-500)]"
                    : i < cardIndex
                    ? "w-1.5 bg-[var(--ln-teal-200)]"
                    : "w-1.5 bg-slate-200"
                )}
              />
            ))}
          </div>

          <button
            onClick={onNext}
            disabled={
              isLast || (card.type === "practice" && !practicePassed)
            }
            className={cn(
              "flex items-center gap-2.5 px-7 py-3 rounded-xl text-[11px] font-extrabold uppercase tracking-widest transition-all",
              isLast || (card.type === "practice" && !practicePassed)
                ? "opacity-30 cursor-not-allowed text-slate-400"
                : "bg-[var(--ln-teal-500)] text-white hover:bg-[var(--ln-teal-600)] shadow-lg shadow-[var(--ln-teal-500)]/20 active:scale-[0.98]"
            )}
          >
            Continue <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
