"use client";

import { useState } from "react";
import { InstitutionalButton } from "@/components/ui/institutional-button";
import { CheckCircle2, ChevronRight, Lock, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { resolveRemediation } from "@/lib/assessment-actions";
import { useRouter } from "next/navigation";

interface RemediationQuizProps {
  moduleId: string;
}

const QUIZ_STEPS = [
  {
    question: "Why was your entry considered a 'Retail Trap'?",
    options: [
      "I entered before the HTF structure break was confirmed.",
      "The volume was too high on the breakout candle.",
      "I was using a 1-minute timeframe for a daily bias.",
      "All of the above."
    ],
    correct: 0
  },
  {
    question: "Where should the institutional stop-loss have been placed?",
    options: [
      "Exactly at the break-even point.",
      "Below the last structural HL (Higher Low) candle.",
      "Directly at the 50% equilibrium of the trap zone.",
      "Stops are not necessary for institutional strategies."
    ],
    correct: 1
  },
  {
    question: "What is the correct protocol after a Liquidation event?",
    options: [
      "Double the position size to recover losses quickly (Martingale).",
      "Immediate re-entry into the same zone.",
      "Post-mortem analysis and 24h market cooling period.",
      "Contacting the broker to reverse the trade."
    ],
    correct: 2
  }
];

export function RemediationQuiz({ moduleId }: RemediationQuizProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isResolved, setIsResolved] = useState(false);
  const [isResolving, setIsResolving] = useState(false);
  const router = useRouter();

  const handleNext = () => {
    if (selectedOption === QUIZ_STEPS[currentStep].correct) {
      if (currentStep < QUIZ_STEPS.length - 1) {
        setCurrentStep(currentStep + 1);
        setSelectedOption(null);
      } else {
        setIsResolved(true);
      }
    } else {
      // Failed a question - restart the remediation
      alert("Logic mismatch detected. Remediation reset.");
      setCurrentStep(0);
      setSelectedOption(null);
    }
  };

  const handleUnlock = async () => {
    setIsResolving(true);
    try {
      const res = await resolveRemediation(moduleId);
      if (res.success) {
        router.push(`/journey/core/tier-1/module-1.1`); // Return to module (should be dynamic)
      }
    } finally {
      setIsResolving(false);
    }
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 space-y-8 relative overflow-hidden">
      {!isResolved ? (
        <>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
               <span className="text-[10px] font-bold text-accent-blue uppercase tracking-widest">Remediation Quiz</span>
               <span className="text-[10px] font-mono text-slate-500">{currentStep + 1} / {QUIZ_STEPS.length}</span>
            </div>
            <h3 className="text-xl font-bold text-white leading-tight">
               {QUIZ_STEPS[currentStep].question}
            </h3>
          </div>

          <div className="space-y-3">
             {QUIZ_STEPS[currentStep].options.map((option, i) => (
               <button
                 key={i}
                 onClick={() => setSelectedOption(i)}
                 className={cn(
                   "w-full text-left p-5 rounded-2xl border transition-all text-sm",
                   selectedOption === i 
                     ? "bg-accent-blue/20 border-accent-blue text-white" 
                     : "bg-white/5 border-white/5 text-slate-400 hover:bg-white/10"
                 )}
               >
                 {option}
               </button>
             ))}
          </div>

          <InstitutionalButton 
            glow 
            className="w-full" 
            disabled={selectedOption === null}
            onClick={handleNext}
          >
             CONTINUE ANALYSIS <ChevronRight size={16} className="ml-2" />
          </InstitutionalButton>
        </>
      ) : (
        <div className="text-center space-y-8 animate-in zoom-in-95 duration-500">
           <div className="w-24 h-24 rounded-full bg-pass-green/10 border border-pass-green/20 flex items-center justify-center text-pass-green mx-auto shadow-[0_0_50px_rgba(0,255,0,0.1)]">
              <CheckCircle2 size={48} />
           </div>
           <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Remediation Complete</h3>
              <p className="text-slate-500 text-sm max-w-xs mx-auto">
                 Institutional logic has been restored. You are authorized for a secondary execution attempt.
              </p>
           </div>

           <div className="pt-6 border-t border-white/5">
              <InstitutionalButton 
                glow 
                className="w-full" 
                onClick={handleUnlock}
                disabled={isResolving}
              >
                 {isResolving ? "SYNCING..." : "RETRY EXECUTION"}
              </InstitutionalButton>
           </div>
        </div>
      )}
    </div>
  );
}
