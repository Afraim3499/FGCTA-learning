"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Target,
  Lightbulb,
  AlertCircle,
  HelpCircle,
  ArrowRight,
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
  Info as InfoIcon
} from "lucide-react";
import { VISUAL_REGISTRY } from "./visual-registry";
import { ChoiceBlockPractice } from "./interactive/choice-block-practice";
import { ScenarioDecisionEngine } from "./interactive/scenario-decision-engine";
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
    left: { title: string; content: string; icon?: string; type?: 'negative' | 'positive' };
    right: { title: string; content: string; icon?: string; type?: 'negative' | 'positive' };
  };
  scenario?: {
    left: { title: string; content: string };
    right: { title: string; content: string };
  };
  taskData?: any;
}

interface LessonCardFlowProps {
  cards: CardData[];
  interactiveTaskType?: string | null;
  interactiveTaskData?: any;
  onComplete?: () => void;
  onNextModule?: () => void;
}

const markdownComponents = {
  h1: ({ className, ...props }: any) => (
    <h1 className={cn("text-3xl font-extrabold text-[var(--ln-navy-900)] mb-6 tracking-tight uppercase", className)} {...props} />
  ),
  h2: ({ className, ...props }: any) => (
    <h2 className={cn("text-2xl font-bold text-[var(--ln-navy-900)] mt-8 mb-4 tracking-tight", className)} {...props} />
  ),
  p: ({ className, ...props }: any) => (
    <p className={cn("text-base text-slate-600 leading-relaxed mb-6 font-medium", className)} {...props} />
  ),
  strong: ({ className, ...props }: any) => (
    <strong className={cn("text-[var(--ln-navy-900)] font-extrabold", className)} {...props} />
  ),
  ul: ({ className, ...props }: any) => (
    <ul className={cn("list-none space-y-3 mb-8", className)} {...props} />
  ),
  li: ({ className, ...props }: any) => (
    <li className={cn("flex items-start gap-3 text-sm text-slate-600 font-medium", className)} {...props}>
      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--ln-teal-500)] shrink-0" />
      {props.children}
    </li>
  ),
};

export function LessonCardFlow({
  cards,
  interactiveTaskType,
  interactiveTaskData,
  onComplete,
  onNextModule
}: LessonCardFlowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [practicePassed, setPracticePassed] = useState(false);

  const totalCards = cards.length;
  // Guard: clamp index to valid range to prevent mobile crash
  const safeIndex = Math.max(0, Math.min(currentIndex, totalCards - 1));
  const currentCard = cards[safeIndex];
  const isLast = safeIndex === totalCards - 1;

  // Early return if cards array is empty or card is undefined
  if (!currentCard || totalCards === 0) {
    return <div className="p-12 text-center text-slate-400 font-medium">Loading lesson content...</div>;
  }

  const handleNext = () => {
    if (currentIndex < totalCards - 1) {
      setCurrentIndex(currentIndex + 1);
      setPracticePassed(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setPracticePassed(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderVisual = (name?: string) => {
    if (!name) return null;

    // Direct registry check
    const RegistryComponent = VISUAL_REGISTRY[name];
    if (RegistryComponent) {
      return <RegistryComponent />;
    }

    // Legacy mapping support
    const legacyMap: Record<string, string> = {
      "candle-anatomy": "candle-diagram", // Note: LessonCardFlow specifically used CandleDiagram for this key
      "training-cockpit": "system-map",
      "learner-profiles": "behavior-flow",
      "gold-driver-map": "gold-context-driver-map",
      "gold-urgency-trap": "gold-urgency-trap-visual",
      "gold-noise-decision": "gold-noise-decision-board"
    };

    const mappedName = legacyMap[name];
    if (mappedName && VISUAL_REGISTRY[mappedName]) {
      const MappedComponent = VISUAL_REGISTRY[mappedName];
      return <MappedComponent />;
    }

    return null;
  };

  const renderIcon = (name?: string) => {
    switch (name) {
      case "target": return <Target className="w-5 h-5" />;
      case "lightbulb": return <Lightbulb className="w-5 h-5" />;
      case "alert": return <AlertCircle className="w-5 h-5" />;
      case "shield": return <ShieldAlert className="w-5 h-5" />;
      case "gavel": return <Gavel className="w-5 h-5" />;
      case "scale": return <Scale className="w-5 h-5" />;
      case "x": return <XCircle className="w-5 h-5" />;
      case "check": return <CheckCircle2 className="w-5 h-5" />;
      case "modules": return <Layers className="w-5 h-5" />;
      case "tasks": return <Zap className="w-5 h-5" />;
      case "lab": return <MapPin className="w-5 h-5" />;
      case "journal": return <ClipboardCheck className="w-5 h-5" />;
      case "nava": return <MessageSquare className="w-5 h-5" />;
      case "book": return <BookOpen className="w-5 h-5" />;
      default: return <InfoIcon className="w-5 h-5" />;
    }
  };

  const renderCardContent = () => {
    if (currentCard.type === "practice") {
      const activeTaskType = currentCard.taskData?.type || interactiveTaskType;
      const activeTaskData = currentCard.taskData || interactiveTaskData;

      if (activeTaskType === 'choice_block' && activeTaskData?.question) {
        return (
          <div className="space-y-8">
            <ChoiceBlockPractice
              question={activeTaskData.question}
              options={activeTaskData.options || []}
              correctIndex={activeTaskData.correctIndex}
              correctId={activeTaskData.correctId}
              feedback={activeTaskData.feedback}
              onPass={() => {
                setPracticePassed(true);
                if (onComplete) onComplete();
              }}
            />
            {practicePassed && (
               <div className="flex justify-center mt-8">
                 <button
                  onClick={handleNext}
                  className="px-8 py-4 bg-[var(--ln-teal-500)] text-white rounded-2xl font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-[var(--ln-teal-500)]/20 hover:bg-[var(--ln-teal-600)] transition-all"
                 >
                   Continue to Summary <ArrowRight size={18} />
                 </button>
               </div>
            )}
          </div>
        );
      }

      if (interactiveTaskType === 'type_b_scenario' && interactiveTaskData?.options) {
        return (
          <div className="space-y-8">
            <ScenarioDecisionEngine
              taskId="flow_task"
              moduleId="flow"
              contextPrompt={interactiveTaskData.contextPrompt}
              options={interactiveTaskData.options}
              onPass={() => {
                setPracticePassed(true);
                if (onComplete) onComplete();
              }}
            />
            {practicePassed && (
               <div className="flex justify-center mt-8">
                 <button
                  onClick={handleNext}
                  className="px-8 py-4 bg-[var(--ln-teal-500)] text-white rounded-2xl font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-[var(--ln-teal-500)]/20 hover:bg-[var(--ln-teal-600)] transition-all"
                 >
                   Continue to Summary <ArrowRight size={18} />
                 </button>
               </div>
            )}
          </div>
        );
      }
      return <div className="p-12 text-center text-slate-400 font-medium">Practice task loading...</div>;
    }

    if (currentCard.type === "summary") {
      return (
        <div className="space-y-10 text-center py-12">
          {/* Render visualKey for summary cards (e.g. orientation-debrief) */}
          {(currentCard.visualKey || currentCard.visual) ? (
            <div className="w-full">
              {renderVisual(currentCard.visualKey || currentCard.visual)}
            </div>
          ) : (
            <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-emerald-500" />
            </div>
          )}
          <div className="space-y-4">
            <h2 className="text-3xl font-extrabold text-[var(--ln-navy-900)] uppercase tracking-tight">{currentCard.title || "Module Complete"}</h2>
            <div className="prose prose-slate max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{currentCard.body || ""}</ReactMarkdown>
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
    }

    return (
      <div className="space-y-12">
        {/* Header inside Card */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="px-4 py-1.5 rounded-full bg-[var(--ln-teal-soft)] text-[var(--ln-teal-500)] text-[10px] font-extrabold uppercase tracking-widest border border-[var(--ln-teal-200)] shadow-sm">
            {currentCard.label || currentCard.type.replace('_', ' ')}
          </div>
          {currentCard.title && (
            <h1 className="text-3xl md:text-4xl font-extrabold text-[var(--ln-navy-900)] tracking-tight uppercase max-w-2xl leading-tight">
              {currentCard.title}
            </h1>
          )}
        </div>

        {/* Visual First */}
        {(currentCard.visualKey || currentCard.visual) && (
          <div className="w-full">
            {renderVisual(currentCard.visualKey || currentCard.visual)}
          </div>
        )}

        {/* Comparison Type */}
        {currentCard.type === "comparison" && currentCard.comparison && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={cn(
              "p-10 rounded-[2.5rem] border transition-all shadow-sm",
              currentCard.comparison.left.type === 'negative' ? "border-rose-100 bg-rose-50/20" : "border-slate-100 bg-white"
            )}>
              <div className="flex items-center gap-3 mb-6">
                {currentCard.comparison.left.type === 'negative' ? <XCircle className="w-5 h-5 text-rose-500" /> : <InfoIcon className="w-5 h-5 text-slate-400" />}
                <span className={cn(
                  "text-[11px] font-extrabold uppercase tracking-widest",
                  currentCard.comparison.left.type === 'negative' ? "text-rose-500" : "text-slate-500"
                )}>
                  {currentCard.comparison.left.title}
                </span>
              </div>
              <div className="text-[15px] text-slate-600 font-medium leading-relaxed prose-sm prose-slate">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{currentCard.comparison.left.content}</ReactMarkdown>
              </div>
            </div>
            <div className={cn(
              "p-10 rounded-[2.5rem] border transition-all shadow-sm",
              currentCard.comparison.right.type === 'positive' || !currentCard.comparison.right.type ? "border-emerald-100 bg-emerald-50/20" : "border-slate-100 bg-white"
            )}>
              <div className="flex items-center gap-3 mb-6">
                {currentCard.comparison.right.type === 'positive' || !currentCard.comparison.right.type ? <CheckCircle2 className="w-5 h-5 text-emerald-500" /> : <InfoIcon className="w-5 h-5 text-slate-400" />}
                <span className={cn(
                  "text-[11px] font-extrabold uppercase tracking-widest",
                  currentCard.comparison.right.type === 'positive' || !currentCard.comparison.right.type ? "text-emerald-500" : "text-slate-500"
                )}>
                  {currentCard.comparison.right.title}
                </span>
              </div>
              <div className="text-[15px] text-[var(--ln-navy-900)] font-bold leading-relaxed prose-sm prose-slate">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{currentCard.comparison.right.content}</ReactMarkdown>
              </div>
            </div>
          </div>
        )}

        {/* Scenario Type */}
        {currentCard.type === "scenario" && currentCard.scenario && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="p-10 rounded-[2.5rem] border border-slate-100 bg-white shadow-sm">
                <h4 className="text-[11px] font-extrabold text-slate-400 mb-6 uppercase tracking-widest">{currentCard.scenario.left.title}</h4>
                <div className="text-[15px] text-slate-600 font-medium leading-relaxed prose-sm prose-slate">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{currentCard.scenario.left.content}</ReactMarkdown>
                </div>
             </div>
             <div className="p-10 rounded-[2.5rem] border border-emerald-100 bg-emerald-50/10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                  <Target size={80} className="text-emerald-500" />
                </div>
                <h4 className="text-[11px] font-extrabold text-emerald-600 mb-6 uppercase tracking-widest">{currentCard.scenario.right.title}</h4>
                <div className="text-[15px] text-[var(--ln-navy-900)] font-bold leading-relaxed prose-sm prose-slate">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{currentCard.scenario.right.content}</ReactMarkdown>
                </div>
             </div>
          </div>
        )}

        {/* Tool Cards (Items) */}
        {currentCard.items && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCard.items.map((item, i) => (
              <div key={i} className="p-8 rounded-[2rem] border border-slate-100 bg-white hover:border-[var(--ln-teal-500)]/30 transition-all group shadow-sm">
                <div className="p-4 rounded-2xl bg-slate-50 text-slate-400 group-hover:bg-[var(--ln-teal-soft)] group-hover:text-[var(--ln-teal-500)] w-fit mb-6 transition-colors">
                  {renderIcon(item.icon)}
                </div>
                <h4 className="text-sm font-extrabold text-[var(--ln-navy-900)] mb-3 uppercase tracking-tight">{item.title}</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {/* Standard Content (Body) */}
        {currentCard.body && (
          <div className="prose prose-slate max-w-3xl mx-auto text-center md:text-left">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={markdownComponents}
            >
              {currentCard.body}
            </ReactMarkdown>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-1000">
      {/* Top Meta / Progress */}
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[var(--ln-navy-900)] text-white flex items-center justify-center text-xs font-bold shadow-lg shadow-navy-900/20">
            {currentIndex + 1}
          </div>
          <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
            Module Progress
          </div>
        </div>
        <div className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">
          {totalCards - currentIndex - 1} Cards Remaining
        </div>
      </div>

      {/* Main Card Shell */}
      <div className={cn(
        "min-h-[600px] p-8 md:p-16 rounded-[3rem] border border-slate-100 bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.04)] transition-all duration-700 relative overflow-hidden",
        currentCard.type === 'rule' && "bg-slate-50/30",
        currentCard.type === 'practice' && "bg-slate-50/50"
      )}>
        {/* Progress Line */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-50">
          <div
            className="h-full bg-[var(--ln-teal-500)] transition-all duration-1000 ease-out shadow-[0_0_12px_rgba(20,184,166,0.4)]"
            style={{ width: `${((currentIndex + 1) / totalCards) * 100}%` }}
          />
        </div>

        {renderCardContent()}
      </div>

      {/* Navigation */}
      {currentCard.type !== 'summary' && (
        <div className="flex items-center justify-between gap-6 px-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={cn(
              "flex items-center gap-2 px-8 py-4 rounded-2xl text-[11px] font-extrabold uppercase tracking-widest transition-all",
              currentIndex === 0
                ? "opacity-0 pointer-events-none"
                : "text-slate-400 hover:text-[var(--ln-navy-900)] hover:bg-white hover:shadow-sm"
            )}
          >
            <ChevronLeft size={18} /> Back
          </button>

          <div className="hidden md:flex items-center gap-3">
            {cards.map((_, i) => (
               <div
                key={i}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-500",
                  i === currentIndex ? "w-8 bg-[var(--ln-teal-500)] shadow-[0_0_8px_rgba(20,184,166,0.3)]" :
                  i < currentIndex ? "bg-[var(--ln-teal-200)]" : "bg-slate-200"
                )}
               />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={isLast || (currentCard.type === 'practice' && !practicePassed)}
            className={cn(
              "flex items-center gap-3 px-10 py-4 rounded-2xl text-[11px] font-extrabold uppercase tracking-widest transition-all",
              isLast || (currentCard.type === 'practice' && !practicePassed)
                ? "opacity-30 cursor-not-allowed text-slate-400"
                : "bg-[var(--ln-navy-900)] text-white hover:bg-[var(--ln-navy-800)] shadow-xl shadow-navy-900/20 hover:scale-[1.02] active:scale-[0.98]"
            )}
          >
            {isLast ? "Complete" : "Continue"} <ChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
