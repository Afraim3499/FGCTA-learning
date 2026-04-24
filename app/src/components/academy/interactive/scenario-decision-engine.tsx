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
      "rounded-[2rem] border bg-[var(--color-surface)] overflow-hidden flex flex-col transition-all duration-500 shadow-2xl",
      status === "failed" ? "border-amber-500/30 shadow-amber-500/5" : 
      status === "passed" ? "border-emerald-500/30 shadow-emerald-500/5" : 
      "border-[var(--color-border)]"
    )}>
      {/* Header / Briefing */}
      <div className="p-8 border-b border-[var(--color-border)] bg-[var(--color-surface-hover)]/50 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <Target size={120} />
        </div>
        <div className="flex items-center gap-3 mb-4 text-[var(--color-brand-400)] text-[10px] font-bold tracking-[0.3em] uppercase">
          <Target className="w-4 h-4" />
          Interactive Scenario Execution
        </div>
        <p className="text-white text-lg font-medium leading-relaxed max-w-2xl">{contextPrompt}</p>
      </div>

      {/* Options Matrix */}
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((option) => {
          const isSelected = selectedOptionId === option.id;
          const isCorrect = option.grade === "best" || option.grade === "acceptable";
          
          let optionStateClass = "bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/10";
          
          if (isSelected) {
            if (isCorrect) {
              optionStateClass = "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 ring-1 ring-emerald-500/20";
            } else {
              optionStateClass = "bg-amber-500/10 border-amber-500/30 text-amber-400 ring-1 ring-amber-500/20";
            }
          } else if (status === "passed") {
            optionStateClass = "opacity-40 cursor-not-allowed border-transparent";
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
                  isSelected && isCorrect ? "bg-emerald-500 border-emerald-400 text-white" :
                  isSelected && !isCorrect ? "bg-amber-500 border-amber-400 text-white" :
                  "bg-white/5 border-white/10 text-slate-500 group-hover:border-white/30"
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
                "text-sm font-semibold leading-relaxed",
                isSelected ? "" : "text-slate-300 group-hover:text-white"
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
          status === "passed" ? "bg-emerald-500/5 border-emerald-500/10" : "bg-amber-500/5 border-amber-500/10"
        )}>
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
                <div className={cn(
                    "p-3 rounded-2xl",
                    status === "passed" ? "bg-emerald-500/10 text-emerald-500" : "bg-amber-500/10 text-amber-500"
                )}>
                    {status === "passed" ? <CheckCircle2 size={24} /> : <Lightbulb size={24} />}
                </div>
                <div className="space-y-1">
                    <p className={cn(
                        "text-[10px] font-bold uppercase tracking-[0.2em]",
                        status === "passed" ? "text-emerald-500" : "text-amber-500"
                    )}>
                        {status === "passed" ? "Protocol Verified" : "Tactical Analysis"}
                    </p>
                    <p className={cn(
                        "text-base font-bold",
                        status === "passed" ? "text-emerald-400" : "text-amber-200"
                    )}>
                        {feedback}
                    </p>
                </div>
            </div>

            {rationale && (
                <div className="space-y-3 pt-6 border-t border-white/5">
                    <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">The Institutional Rationale</h5>
                    <p className="text-sm text-slate-400 leading-relaxed italic">
                        {rationale}
                    </p>
                </div>
            )}

            {status !== "passed" && attempts > 0 && (
                <div className="flex items-center justify-between pt-4">
                    <span className="text-[9px] font-bold text-amber-500/50 uppercase tracking-widest">Attempt {attempts} Locked</span>
                    <button 
                        onClick={() => {
                            setSelectedOptionId(null);
                            setStatus("idle");
                            setFeedback(null);
                            setRationale(null);
                        }}
                        className="text-[10px] font-bold text-white hover:text-[var(--color-brand-400)] transition-colors uppercase tracking-widest"
                    >
                        Reset Execution & Try Again
                    </button>
                </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
