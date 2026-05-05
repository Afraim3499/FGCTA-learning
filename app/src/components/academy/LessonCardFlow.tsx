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
import { LearningLoop, CandleDiagram, NoteComparison } from "./AcademyVisuals";
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
  items?: { title: string; body: string; icon?: string }[];
  comparison?: {
    left: { title: string; content: string; icon?: string; type?: 'negative' | 'positive' };
    right: { title: string; content: string; icon?: string; type?: 'negative' | 'positive' };
  };
  scenario?: {
    left: { title: string; content: string };
    right: { title: string; content: string };
  };
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
  const currentCard = cards[currentIndex];
  const isLast = currentIndex === totalCards - 1;

  const handleNext = () => {
    if (currentIndex < totalCards - 1) {
      setCurrentIndex(currentIndex + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderVisual = (name?: string) => {
    switch (name) {
      case "learning-loop":
        return <LearningLoop />;
      case "candle-anatomy":
        return <CandleDiagram />;
      case "note-comparison":
        return <NoteComparison />;
      default:
        return null;
    }
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
      if (interactiveTaskType === 'choice_block' && interactiveTaskData?.question) {
        return (
          <div className="space-y-8">
            <ChoiceBlockPractice
              question={interactiveTaskData.question}
              options={interactiveTaskData.options || []}
              correctIndex={interactiveTaskData.correctIndex}
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
          <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-emerald-500" />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-extrabold text-[var(--ln-navy-900)] uppercase tracking-tight">Module Complete</h2>
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
      <div className="space-y-8">
        {/* Visual First */}
        {currentCard.visual && (
          <div className="mb-8">
            {renderVisual(currentCard.visual)}
          </div>
        )}

        {/* Comparison Type */}
        {currentCard.type === "comparison" && currentCard.comparison && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className={cn(
              "p-8 rounded-[2rem] border transition-all",
              currentCard.comparison.left.type === 'negative' ? "border-rose-100 bg-rose-50/20" : "border-slate-100 bg-white"
            )}>
              <div className="flex items-center gap-3 mb-4">
                {currentCard.comparison.left.type === 'negative' ? <XCircle className="w-5 h-5 text-rose-500" /> : <InfoIcon className="w-5 h-5 text-slate-400" />}
                <span className={cn(
                  "text-[10px] font-extrabold uppercase tracking-widest",
                  currentCard.comparison.left.type === 'negative' ? "text-rose-500" : "text-slate-500"
                )}>
                  {currentCard.comparison.left.title}
                </span>
              </div>
              <div className="text-sm text-slate-600 font-medium leading-relaxed">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{currentCard.comparison.left.content}</ReactMarkdown>
              </div>
            </div>
            <div className={cn(
              "p-8 rounded-[2rem] border transition-all",
              currentCard.comparison.right.type === 'positive' || !currentCard.comparison.right.type ? "border-emerald-100 bg-emerald-50/20" : "border-slate-100 bg-white"
            )}>
              <div className="flex items-center gap-3 mb-4">
                {currentCard.comparison.right.type === 'positive' || !currentCard.comparison.right.type ? <CheckCircle2 className="w-5 h-5 text-emerald-500" /> : <InfoIcon className="w-5 h-5 text-slate-400" />}
                <span className={cn(
                  "text-[10px] font-extrabold uppercase tracking-widest",
                  currentCard.comparison.right.type === 'positive' || !currentCard.comparison.right.type ? "text-emerald-500" : "text-slate-500"
                )}>
                  {currentCard.comparison.right.title}
                </span>
              </div>
              <div className="text-sm text-[var(--ln-navy-900)] font-bold leading-relaxed">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{currentCard.comparison.right.content}</ReactMarkdown>
              </div>
            </div>
          </div>
        )}

        {/* Scenario Type */}
        {currentCard.type === "scenario" && currentCard.scenario && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
             <div className="p-8 rounded-[2rem] border border-slate-100 bg-white shadow-sm">
                <h4 className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-widest">{currentCard.scenario.left.title}</h4>
                <div className="text-sm text-slate-600 font-medium leading-relaxed">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{currentCard.scenario.left.content}</ReactMarkdown>
                </div>
             </div>
             <div className="p-8 rounded-[2rem] border border-emerald-100 bg-emerald-50/10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Target size={64} className="text-emerald-500" />
                </div>
                <h4 className="text-xs font-bold text-emerald-600 mb-4 uppercase tracking-widest">{currentCard.scenario.right.title}</h4>
                <div className="text-sm text-[var(--ln-navy-900)] font-bold leading-relaxed">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{currentCard.scenario.right.content}</ReactMarkdown>
                </div>
             </div>
          </div>
        )}

        {/* Tool Cards (Items) */}
        {currentCard.items && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
            {currentCard.items.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border border-slate-100 bg-white hover:border-[var(--ln-teal-500)]/30 transition-all group">
                <div className="p-3 rounded-xl bg-slate-50 text-slate-400 group-hover:bg-[var(--ln-teal-soft)] group-hover:text-[var(--ln-teal-500)] w-fit mb-4 transition-colors">
                  {renderIcon(item.icon)}
                </div>
                <h4 className="text-sm font-bold text-[var(--ln-navy-900)] mb-2 uppercase tracking-tight">{item.title}</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {/* Standard Content */}
        <div className="prose prose-slate max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={markdownComponents}
          >
            {currentCard.body || ""}
          </ReactMarkdown>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header / Progress */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 rounded-full bg-[var(--ln-teal-soft)] text-[var(--ln-teal-500)] text-[9px] font-extrabold uppercase tracking-widest">
              {currentCard.label || currentCard.type.replace('_', ' ')}
            </div>
            {currentCard.title && (
              <h1 className="text-xl font-extrabold text-[var(--ln-navy-900)] tracking-tight uppercase">
                {currentCard.title}
              </h1>
            )}
          </div>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Card {currentIndex + 1} of {totalCards}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
          {/* eslint-disable-next-line react/no-inline-styles */}
          <div
            className="h-full bg-[var(--ln-teal-500)] transition-all duration-500 ease-out shadow-[0_0_8px_rgba(20,184,166,0.3)]"
            style={{
              "--progress-width": `${((currentIndex + 1) / totalCards) * 100}%`,
              width: "var(--progress-width)"
            } as React.CSSProperties}
          />
        </div>
      </div>

      {/* Card Container */}
      <div className={cn(
        "min-h-[500px] p-8 md:p-12 rounded-[2.5rem] border border-slate-100 bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500",
        currentCard.type === 'rule' && "bg-blue-50/30 border-blue-100",
        currentCard.type === 'practice' && "bg-slate-50/50 border-slate-200"
      )}>
        {renderCardContent()}
      </div>

      {/* Navigation */}
      {currentCard.type !== 'summary' && (
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={cn(
              "flex items-center gap-2 px-6 py-3 rounded-2xl text-[10px] font-extrabold uppercase tracking-widest transition-all",
              currentIndex === 0
                ? "opacity-0 pointer-events-none"
                : "text-slate-400 hover:text-[var(--ln-navy-900)] hover:bg-slate-50"
            )}
          >
            <ChevronLeft size={16} /> Previous
          </button>

          <div className="flex items-center gap-2">
            {cards.map((_, i) => (
               <div
                key={i}
                className={cn(
                  "w-1.5 h-1.5 rounded-full transition-all duration-300",
                  i === currentIndex ? "w-4 bg-[var(--ln-teal-500)]" : "bg-slate-200"
                )}
               />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={isLast || (currentCard.type === 'practice' && !practicePassed)}
            className={cn(
              "flex items-center gap-2 px-6 py-3 rounded-2xl text-[10px] font-extrabold uppercase tracking-widest transition-all",
              isLast || (currentCard.type === 'practice' && !practicePassed)
                ? "opacity-30 cursor-not-allowed text-slate-400"
                : "bg-[var(--ln-navy-900)] text-white hover:bg-[var(--ln-navy-800)] shadow-lg shadow-navy-900/10"
            )}
          >
            Next <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
