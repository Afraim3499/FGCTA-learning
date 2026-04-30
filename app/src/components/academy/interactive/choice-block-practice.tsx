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
  options: ChoiceOption[];
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
export function ChoiceBlockPractice({ question, options, onPass }: ChoiceBlockPracticeProps) {
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
    <div className="mt-8 pt-8 border-t border-[var(--color-border-default)] relative z-20">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-brand-500)]/20 border border-[var(--color-brand-500)]/30">
            <span className="text-[9px] font-bold text-[var(--color-brand-400)]">?</span>
          </div>
          <span className="text-[10px] font-bold text-[var(--color-brand-400)] uppercase tracking-[0.2em]">
            Practice Check — No Grade · Unlimited Retries
          </span>
        </div>

        {/* Question */}
        <p className="text-sm font-medium text-white leading-relaxed">
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
                  "w-full text-left p-4 rounded-xl border text-xs font-medium transition-all duration-200",
                  !hasAnswered
                    ? "border-white/10 bg-white/5 hover:bg-white/10 hover:border-[var(--color-brand-500)]/40 text-[var(--color-text-secondary)] cursor-pointer"
                    : isSelected && option.isCorrect
                    ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300 cursor-default"
                    : isSelected && !option.isCorrect
                    ? "border-rose-500/40 bg-rose-500/10 text-rose-300 cursor-default"
                    : "border-white/5 bg-white/3 text-[var(--color-text-muted)] opacity-50 cursor-not-allowed"
                )}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={cn(
                      "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border text-[8px] font-bold",
                      !hasAnswered
                        ? "border-white/20 text-white/40"
                        : isSelected && option.isCorrect
                        ? "border-emerald-400 bg-emerald-500/20 text-emerald-400"
                        : isSelected && !option.isCorrect
                        ? "border-rose-400 bg-rose-500/20 text-rose-400"
                        : "border-white/10 text-white/20"
                    )}
                  >
                    {option.id.toUpperCase()}
                  </span>
                  <div className="flex-1 space-y-1">
                    <span>{option.text}</span>
                    {showResult && (
                      <p className={cn(
                        "text-[10px] leading-relaxed mt-1",
                        option.isCorrect ? "text-emerald-400/80" : "text-rose-400/80"
                      )}>
                        {option.feedback}
                      </p>
                    )}
                  </div>
                  {showResult && (
                    option.isCorrect
                      ? <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
                      : <XCircle className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Result State */}
        {hasAnswered && (
          <div className={cn(
            "flex items-center justify-between p-4 rounded-xl border",
            isCorrect
              ? "bg-emerald-500/5 border-emerald-500/20"
              : "bg-rose-500/5 border-rose-500/20"
          )}>
            <div className="flex items-center gap-2">
              {isCorrect ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-emerald-400">Correct! Module unlocked.</span>
                </>
              ) : (
                <>
                  <XCircle className="w-4 h-4 text-rose-400" />
                  <span className="text-xs font-bold text-rose-400">Not quite. Review the lesson and try again.</span>
                </>
              )}
            </div>
            {!isCorrect && (
              <button
                onClick={handleRetry}
                className="flex items-center gap-1 text-[10px] font-bold text-[var(--color-text-muted)] hover:text-white transition-colors"
              >
                <RefreshCw className="w-3 h-3" />
                Retry
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
