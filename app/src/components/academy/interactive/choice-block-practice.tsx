"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle, RefreshCw } from "lucide-react";

interface ChoiceOption {
  id: string;
  text: string;
  isCorrect: boolean;
  feedback: string;
}

interface ChoiceBlockPracticeProps {
  question: string;
  options: ChoiceOption[] | string[];
  correctIndex?: number;
  correctId?: string;
  feedback?: Record<string, string>;
  onPass: () => void;
}

/**
 * Non-graded practice block for Level 3 modules (3.1 - 3.9).
 * - Awards 0 XP
 * - Creates no ScenarioAttempt
 * - Unlimited retries
 * - Shows feedback on selection
 * - Calls onPass() when correct answer is selected
 */
export function ChoiceBlockPractice({ 
  question, 
  options: rawOptions, 
  correctIndex, 
  correctId,
  feedback: feedbackMap,
  onPass 
}: ChoiceBlockPracticeProps) {
  const options: ChoiceOption[] = (rawOptions as any[]).map((opt: any, index) => {
    if (typeof opt === 'string') {
      return {
        id: String.fromCharCode(65 + index), // A, B, C...
        text: opt,
        isCorrect: correctIndex === index,
        feedback: correctIndex === index ? "Correct! Well done." : "Incorrect. Review the lesson content."
      };
    }
    
    // If it's already an object but missing isCorrect/feedback, fill them from props
    const id = opt.id || String.fromCharCode(65 + index);
    return {
      ...opt,
      id,
      isCorrect: opt.isCorrect !== undefined ? opt.isCorrect : (correctId ? id === correctId : correctIndex === index),
      feedback: opt.feedback || (feedbackMap ? feedbackMap[id] : (correctIndex === index ? "Correct! Well done." : "Incorrect. Review the lesson content."))
    };
  });

  const [selected, setSelected] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [passed, setPassed] = useState(false);

  const handleSelect = (option: ChoiceOption) => {
    if (hasAnswered && isCorrect) return; // lock after correct
    setSelected(option.id);
    setHasAnswered(true);
    const correct = option.isCorrect;
    setIsCorrect(correct);
    if (correct && !passed) {
      setPassed(true);
      onPass();
    }
  };

  const handleRetry = () => {
    setSelected(null);
    setHasAnswered(false);
    setIsCorrect(false);
    // Do NOT reset passed - once unlocked, stays unlocked
  };

  return (
    <div className="mt-8 pt-8 border-t border-[var(--ln-border)] relative z-20">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--ln-teal-soft)] border border-[var(--ln-teal-500)]/30">
            <span className="text-[9px] font-bold text-[var(--ln-teal-600)]">?</span>
          </div>
          <span className="text-[10px] font-bold text-[var(--ln-teal-600)] uppercase tracking-[0.2em]">
            Practice Check — No Grade · Unlimited Retries
          </span>
        </div>

        {/* Question */}
        <p className="text-base font-extrabold text-[var(--ln-navy-900)] leading-relaxed uppercase tracking-tight">
          {question}
        </p>

        {/* Options */}
        <div className="space-y-3">
          {options.map((option) => {
            const isSelected = selected === option.id;
            const showResult = hasAnswered && isSelected;

            return (
              <button
                key={option.id}
                onClick={() => handleSelect(option)}
                disabled={hasAnswered && isCorrect}
                className={cn(
                  "w-full text-left p-4 rounded-xl border text-xs font-bold transition-all duration-200",
                  !hasAnswered
                    ? "border-[var(--ln-border)] bg-white hover:bg-slate-50 hover:border-[var(--ln-teal-500)]/40 text-[var(--ln-navy-900)] cursor-pointer shadow-sm"
                    : isSelected && option.isCorrect
                    ? "border-[var(--ln-teal-500)] bg-[var(--ln-teal-soft)] text-[var(--ln-teal-700)] cursor-default shadow-md"
                    : isSelected && !option.isCorrect
                    ? "border-rose-500 bg-rose-50 text-rose-700 cursor-default shadow-md"
                    : "border-[var(--ln-border)] bg-slate-50 text-[var(--ln-navy-900)] cursor-not-allowed"
                )}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={cn(
                      "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border text-[8px] font-extrabold",
                      !hasAnswered
                        ? "border-[var(--ln-border)] text-[var(--ln-navy-900)]"
                        : isSelected && option.isCorrect
                        ? "border-[var(--ln-teal-500)] bg-[var(--ln-teal-500)]/10 text-[var(--ln-teal-600)]"
                        : isSelected && !option.isCorrect
                        ? "border-rose-500 bg-rose-500/10 text-rose-600"
                        : "border-[var(--ln-border)] text-[var(--ln-navy-900)]"
                    )}
                  >
                    {String(option.id).toUpperCase()}
                  </span>
                  <div className="flex-1 space-y-1">
                    <span className="font-extrabold leading-snug">{option.text}</span>
                    {showResult && (
                      <p className={cn(
                        "text-[10px] leading-relaxed mt-1 font-bold",
                        option.isCorrect ? "text-[var(--ln-teal-700)]" : "text-rose-700"
                      )}>
                        {option.feedback}
                      </p>
                    )}
                  </div>
                  {showResult && (
                    option.isCorrect
                      ? <CheckCircle2 className="w-4 h-4 shrink-0 text-[var(--ln-teal-600)] mt-0.5" />
                      : <XCircle className="w-4 h-4 shrink-0 text-rose-600 mt-0.5" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Result State */}
        {hasAnswered && (
          <div className={cn(
            "p-6 rounded-3xl border animate-in slide-in-from-top-2 duration-500 shadow-xl relative overflow-hidden",
            isCorrect
              ? "bg-emerald-50/50 border-emerald-100"
              : "bg-rose-50/50 border-rose-100"
          )}>
            {/* Background Accent */}
            <div className={cn(
              "absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none",
              isCorrect ? "text-emerald-500" : "text-rose-500"
            )}>
              {isCorrect ? <CheckCircle2 size={120} /> : <XCircle size={120} />}
            </div>

            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-3">
                <div className={cn(
                  "w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg",
                  isCorrect ? "bg-emerald-500 text-white shadow-emerald-500/20" : "bg-rose-500 text-white shadow-rose-500/20"
                )}>
                  {isCorrect ? <CheckCircle2 size={20} /> : <XCircle size={20} />}
                </div>
                <div>
                  <h4 className={cn(
                    "text-[10px] font-black uppercase tracking-[0.2em]",
                    isCorrect ? "text-emerald-600" : "text-rose-600"
                  )}>
                    {isCorrect ? "Academy Logic Confirmed" : "Training Correction"}
                  </h4>
                  <p className="text-sm font-black text-slate-900 uppercase">
                    {isCorrect ? "Valid Decision" : "Scenario Trap Detected"}
                  </p>
                </div>
              </div>

              <div className="pl-1 space-y-3">
                <div className={cn(
                  "text-xs font-bold leading-relaxed prose-sm",
                  isCorrect ? "text-slate-800" : "text-rose-700"
                )}>
                  {options.find(o => o.id === selected)?.feedback?.split('\\n').map((line, i) => (
                    <p key={i} className={cn(line.startsWith('**') ? "mt-4 pt-4 border-t border-emerald-100 font-black uppercase tracking-widest text-[9px]" : "")}>
                      {line.replace(/\*\*/g, '')}
                    </p>
                  )) || <p>Correct! Well done.</p>}
                </div>
              </div>

              {!isCorrect && (
                <div className="pt-2">
                  <button
                    onClick={handleRetry}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-rose-200 text-[10px] font-black text-rose-600 uppercase tracking-widest hover:bg-rose-50 transition-all shadow-sm active:scale-95"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    Reset & Try Again
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
