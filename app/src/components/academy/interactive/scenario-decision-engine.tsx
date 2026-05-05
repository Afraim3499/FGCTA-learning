"use client";

import React, { useState } from "react";
import { Target, AlertCircle, Lightbulb, CheckCircle2, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ScenarioTaskResult {
  taskId: string;
  moduleId: string;
  status: "passed" | "failed";
  totalAttempts: number;
  finalGrade: "best" | "acceptable";
  completionTimeMs: number;
  choicesMade: string[];
}

export interface ScenarioOption {
  id: string;
  text: string;
  grade: "best" | "acceptable" | "poor" | "invalid";
  feedback: string;
  rationale?: string; // New field for detailed explanation
}

interface ScenarioDecisionEngineProps {
  taskId: string;
  moduleId: string;
  contextPrompt: string;
  options: ScenarioOption[];
  onPass: (result: ScenarioTaskResult) => void;
}

export function ScenarioDecisionEngine({
  taskId,
  moduleId,
  contextPrompt,
  options,
  onPass,
}: ScenarioDecisionEngineProps) {
  const [startTime] = useState<number>(Date.now());
  const [attempts, setAttempts] = useState(0);
  const [status, setStatus] = useState<"idle" | "passed" | "failed">("idle");
  const [feedback, setFeedback] = useState<string | null>(null);
  const [rationale, setRationale] = useState<string | null>(null);
  const [choicesMade, setChoicesMade] = useState<string[]>([]);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  const handleSelectOption = (option: ScenarioOption) => {
    if (status === "passed") return;

    setSelectedOptionId(option.id);
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);
    setChoicesMade([...choicesMade, option.id]);
    setRationale(option.rationale || null);

    if (option.grade === "best" || option.grade === "acceptable") {
      setStatus("passed");
      setFeedback(option.feedback);

      onPass({
        taskId,
        moduleId,
        status: "passed",
        totalAttempts: newAttempts,
        finalGrade: option.grade,
        completionTimeMs: Date.now() - startTime,
        choicesMade: [...choicesMade, option.id],
      });
    } else {
      setStatus("failed");
      setFeedback(option.feedback);
    }
  };

  return (
    <div className={cn(
      "rounded-[2.5rem] border bg-white overflow-hidden flex flex-col transition-all duration-500 shadow-xl",
      status === "failed" ? "border-amber-500/30 shadow-amber-500/5" : 
      status === "passed" ? "border-[var(--ln-teal-500)]/30 shadow-[var(--ln-teal-500)]/5" : 
      "border-[var(--ln-border)]"
    )}>
      {/* Header / Briefing */}
      <div className="p-8 border-b border-[var(--ln-border)] bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none text-[var(--ln-navy-900)]">
            <Target size={120} />
        </div>
        <div className="flex items-center gap-3 mb-4 text-[var(--ln-teal-500)] text-[10px] font-extrabold tracking-[0.3em] uppercase">
          <Target className="w-4 h-4" />
          Interactive Scenario Method
        </div>
        <p className="text-[var(--ln-navy-900)] text-lg font-extrabold leading-relaxed max-w-2xl uppercase tracking-tight">{contextPrompt}</p>
      </div>

      {/* Options Matrix */}
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((option) => {
          const isSelected = selectedOptionId === option.id;
          const isCorrect = option.grade === "best" || option.grade === "acceptable";
          
          let optionStateClass = "bg-white border-[var(--ln-border)] hover:bg-slate-50 hover:border-[var(--ln-teal-500)]/40";
          
          if (isSelected) {
            if (isCorrect) {
              optionStateClass = "bg-[var(--ln-teal-soft)] border-[var(--ln-teal-500)] text-[var(--ln-teal-600)] ring-1 ring-[var(--ln-teal-500)]/20 shadow-md";
            } else {
              optionStateClass = "bg-amber-50 border-amber-500 text-amber-700 ring-1 ring-amber-500/20 shadow-md";
            }
          } else if (status === "passed") {
            optionStateClass = "opacity-40 cursor-not-allowed border-transparent bg-slate-50";
          }

          return (
            <button
              key={option.id}
              onClick={() => handleSelectOption(option)}
              disabled={status === "passed"}
              className={cn(
                "text-left p-6 rounded-2xl border transition-all duration-300 flex items-start gap-4 group relative overflow-hidden",
                optionStateClass
              )}
            >
              <div className={cn(
                  "w-6 h-6 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 transition-all",
                  isSelected && isCorrect ? "bg-[var(--ln-teal-500)] border-[var(--ln-teal-600)] text-white" :
                  isSelected && !isCorrect ? "bg-amber-500 border-amber-600 text-white" :
                  "bg-slate-100 border-[var(--ln-border)] text-[var(--ln-navy-900)] group-hover:border-[var(--ln-teal-500)]/30 group-hover:text-[var(--ln-teal-500)]"
              )}>
                {isSelected && isCorrect ? (
                  <CheckCircle2 size={14} />
                ) : isSelected && !isCorrect ? (
                  <AlertCircle size={14} />
                ) : (
                  <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                )}
              </div>
              <span className={cn(
                "text-sm font-bold leading-relaxed",
                isSelected ? "" : "text-[var(--ln-navy-900)] group-hover:text-[var(--ln-navy-900)]"
              )}>
                {option.text}
              </span>
            </button>
          );
        })}
      </div>

      {/* Analysis Panel (The "Why") */}
      {(feedback || rationale) && (
        <div className={cn(
          "mx-8 mb-8 p-8 rounded-3xl border animate-in slide-in-from-bottom-4 duration-500",
          status === "passed" ? "bg-[var(--ln-teal-soft)] border-[var(--ln-teal-500)]/20" : "bg-amber-50 border-amber-200"
        )}>
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
                <div className={cn(
                    "p-3 rounded-2xl",
                    status === "passed" ? "bg-[var(--ln-teal-500)]/10 text-[var(--ln-teal-500)]" : "bg-amber-100 text-amber-600"
                )}>
                    {status === "passed" ? <CheckCircle2 size={24} /> : <Lightbulb size={24} />}
                </div>
                <div className="space-y-1">
                    <p className={cn(
                        "text-[10px] font-extrabold uppercase tracking-[0.2em]",
                        status === "passed" ? "text-[var(--ln-teal-500)]" : "text-amber-600"
                    )}>
                        {status === "passed" ? "Logic Verified" : "Practice Analysis"}
                    </p>
                    <p className={cn(
                        "text-base font-extrabold tracking-tight",
                        status === "passed" ? "text-[var(--ln-teal-600)]" : "text-amber-900"
                    )}>
                        {feedback}
                    </p>
                </div>
            </div>

            {rationale && (
                <div className="space-y-3 pt-6 border-t border-[var(--ln-border)]">
                    <h5 className="text-[10px] font-extrabold text-[var(--ln-text-dim)] uppercase tracking-widest">The Academy Rationale</h5>
                    <p className="text-sm text-[var(--ln-text-secondary)] leading-relaxed italic font-medium">
                        {rationale}
                    </p>
                </div>
            )}

            {status !== "passed" && attempts > 0 && (
                <div className="flex items-center justify-between pt-4">
                    <span className="text-[9px] font-extrabold text-amber-600/50 uppercase tracking-widest">Attempt {attempts} Locked</span>
                    <button 
                        onClick={() => {
                            setSelectedOptionId(null);
                            setStatus("idle");
                            setFeedback(null);
                            setRationale(null);
                        }}
                        className="text-[10px] font-extrabold text-[var(--ln-navy-900)] hover:text-[var(--ln-teal-500)] transition-colors uppercase tracking-widest border-b border-transparent hover:border-[var(--ln-teal-500)]"
                    >
                        Reset Method & Try Again
                    </button>
                </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
