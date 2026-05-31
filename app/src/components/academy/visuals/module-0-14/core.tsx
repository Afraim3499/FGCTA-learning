import React, { useState } from "react";
import { 
  ArrowRight, 
  RotateCcw, 
  XCircle, 
  CheckCircle2,
  Lock,
  Search,
  Server,
  Layers,
  Coins,
  Activity,
  AlertTriangle,
  Award,
  BookOpen,
  Clipboard,
  ListTodo,
  Tag,
  PenTool,
  CheckSquare,
  Sparkles,
  RefreshCw,
  FileText,
  AlertOctagon,
  Eye,
  ShieldCheck
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NoteInstitutionalFrame,
  NoteMentorInsight,
  NoteVocabularyShiftBadge,
  NoteToggleSelector,
  NoteDisplayPanel
} from "./shared";

/**
 * Card 1: PracticeNoteLabFoundation
 * Visual Key: practice-note-lab-foundation
 */
export const PracticeNoteLabFoundation = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const steps = [
    {
      title: "1. Attempt",
      desc: "Perform a simulated action (or choose active idle) inside the simulator.",
      tip: "Action is completed; reasoning is fresh in your working memory."
    },
    {
      title: "2. Facts",
      desc: "Record the roadway and context coordinates. Identify what key zones are tested.",
      tip: "Only write down visible chart objects, not subjective feelings."
    },
    {
      title: "3. Reasoning",
      desc: "Document your evidence stack and logic BEFORE the outcome occurred.",
      tip: "This prevents hindsight bias from rewriting what you thought."
    },
    {
      title: "4. Review Condition",
      desc: "State the exact price level or close event that invalidates your reading.",
      tip: "Must be a specific, testable trigger you can check later."
    },
    {
      title: "5. Result",
      desc: "Log what price actually did (e.g., hit invalidation, held support, spiked).",
      tip: "Treat the outcome strictly as objective validation data."
    },
    {
      title: "6. Process Audit",
      desc: "Score your process compliance. Grade yourself on rules, not virtual PnL.",
      tip: "A guessed win is a failure; a disciplined loss is a success."
    },
    {
      title: "7. Lesson",
      desc: "Summarize one concrete adjustment or validation target for your next run.",
      tip: "This turns one practice run into permanent learning data."
    }
  ];

  return (
    <NoteInstitutionalFrame label="Practice Note Pipeline" status="FOUNDATION LAB">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-700 font-bold max-w-xl text-center leading-relaxed">
          Click through the pipeline stages to trace how a raw simulator click is audited, logged, and converted into permanent learning evidence.
        </p>

        {/* Stepper buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 w-full max-w-3xl">
          {steps.map((s, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                type="button"
                key={s.title}
                onClick={() => setActiveStep(idx)}
                className={cn(
                  "p-3 rounded-2xl border transition-all text-left flex flex-col justify-between min-h-[90px] cursor-pointer",
                  isActive
                    ? "bg-[#071B36] text-white border-[#071B36] shadow-md scale-105"
                    : "bg-white text-slate-700 border-slate-200 hover:border-indigo-500 hover:bg-slate-50"
                )}
              >
                <span className={cn(
                  "text-[8px] font-black uppercase tracking-wider block mb-1",
                  isActive ? "text-indigo-400" : "text-slate-500"
                )}>
                  Step {idx + 1}
                </span>
                <span className="text-[10px] font-black leading-tight mb-2 uppercase tracking-tight">{s.title.split(". ")[1]}</span>
                <div className={cn(
                  "w-1.5 h-1.5 rounded-full",
                  isActive ? "bg-indigo-400 animate-ping" : "bg-slate-300"
                )} />
              </button>
            );
          })}
        </div>

        {/* Detail Stage Info */}
        <div className="w-full max-w-2xl bg-[#071B36] text-white rounded-2xl p-5 border border-slate-700 relative overflow-hidden text-left min-h-[120px] flex flex-col justify-center">
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#6366F1_1px,transparent_1px)] bg-[length:14px_14px]" />
          <div className="relative z-10">
            <span className="text-[8px] font-mono text-indigo-400 uppercase tracking-widest block mb-1 font-black">
              Pipeline Audit Stage &bull; {steps[activeStep].title}
            </span>
            <h5 className="text-sm font-black uppercase tracking-tight mb-1 text-white">
              {steps[activeStep].title.split(". ")[1]}
            </h5>
            <p className="text-xs leading-relaxed max-w-2xl text-slate-250 whitespace-normal break-words">
              {steps[activeStep].desc}
            </p>
            <p className="mt-2 text-[10px] text-indigo-300 font-bold italic">
              Verification Check: {steps[activeStep].tip}
            </p>
          </div>
        </div>

        <NoteMentorInsight 
          text="If you practice without taking structured notes, you are like a scientist doing chemical experiments without keeping a lab notebook. You consume time, but build no reviewable data."
          analogy="Commercial pilots log every flight hour in a standardized flight log, recording weather context, procedures practiced, and deviations. That log is their legal proof of competence."
        />
      </div>
    </NoteInstitutionalFrame>
  );
};

/**
 * Card 2: StandardPracticeNoteTemplate
 * Visual Key: standard-practice-note-template
 */
export const StandardPracticeNoteTemplate = () => {
  const [selectedField, setSelectedField] = useState<string>("pre-action");

  const fields = [
    {
      id: "roadway",
      label: "1. Roadway / Market",
      val: "Crypto (BTC/USD)",
      desc: "Define which specific roadway environment you are operating in. This sets the rhythm (24/5 relative strength, volatility, or venue fragmentation).",
      tip: "Do not mix assets. Keep logs separate."
    },
    {
      id: "context",
      label: "2. Context",
      val: "Daily range support swept, 4H market structure bullish.",
      desc: "Record the higher-timeframe environment before looking at local candles. Where is price on the big map?",
      tip: "Define context before you look at entry speed."
    },
    {
      id: "pre-action",
      label: "3. Pre-Action Reasoning",
      val: "15m candle swept daily support low, volume surged on close, related venue confirmed hold.",
      desc: "Explain exactly why you choose to act or stand aside. This must compile the facts you see, written BEFORE you know the result.",
      tip: "Forces you to state your case cleanly."
    },
    {
      id: "review",
      label: "4. Review Condition",
      val: "If price closes and holds below $63,800, my bullish reading is weak.",
      desc: "The exact falsifiable level or close criteria that invalidates your logical setup. Your emergency checklist exit.",
      tip: "Must be a measurable level, not a general feeling."
    },
    {
      id: "action",
      label: "5. Action or Stand Aside",
      val: "Simulated Buy at $64,150",
      desc: "Record your choice: simulated entry, active idle (stand aside), replay adjustments, or missed setup log.",
      tip: "Standing aside is a highly disciplined action."
    },
    {
      id: "result",
      label: "6. Result",
      val: "Price closed below $63,800 at 14:15. Position closed.",
      desc: "What price actually did. Recorded strictly as validation data for your pre-action reasoning.",
      tip: "The result belongs to the market, not your ego."
    },
    {
      id: "compliance",
      label: "7. Process Compliance",
      val: "100% compliant / Process Success",
      desc: "Grade yourself on rules followed, not virtual PnL. A disciplined loss is scored as a success.",
      tip: "Process compliance is your true score."
    },
    {
      id: "tag",
      label: "8. Mistake Tag",
      val: "None (Clean process)",
      desc: "Add standardized tags (#boredom-click, #chasing, etc.) if your cockpit discipline failed during the attempt.",
      tip: "Keeps mistake statistics clean."
    },
    {
      id: "lesson",
      label: "9. Lesson",
      val: "Location hold confirmed, but exited cleanly at invalidation. Do not fight the trigger.",
      desc: "One concrete takeaway that directly influences your next training setup. What will you continue or fix?",
      tip: "Turn this run into permanent learning data."
    }
  ];

  const current = fields.find(f => f.id === selectedField)!;

  return (
    <NoteInstitutionalFrame label="Standard Note Template" status="TEMPLATE LAB">
      <div className="w-full flex flex-col gap-5 items-center">
        <p className="text-xs text-slate-700 font-bold max-w-xl text-center leading-relaxed">
          Standardizing your notes ensures you can review dozens of past practice runs in minutes. Click any field in the template mockup to audit its job.
        </p>

        <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Note Form Mockup */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm text-left flex flex-col gap-3 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-indigo-500" />
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">Standard Note Form</span>
            
            <div className="flex flex-col gap-2.5">
              {fields.map((f) => {
                const isSelected = selectedField === f.id;
                return (
                  <button
                    type="button"
                    key={f.id}
                    onClick={() => setSelectedField(f.id)}
                    className={cn(
                      "w-full text-left p-2 rounded-xl transition-all cursor-pointer flex flex-col border",
                      isSelected 
                        ? "bg-slate-50 border-indigo-350 shadow-sm" 
                        : "bg-white border-transparent hover:bg-slate-50/50"
                    )}
                  >
                    <span className={cn(
                      "text-[7.5px] font-black uppercase tracking-wider mb-0.5",
                      isSelected ? "text-indigo-650 text-indigo-600" : "text-slate-500"
                    )}>
                      {f.label}
                    </span>
                    <span className="text-[11px] font-bold text-[#071B36] line-clamp-1">{f.val}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Details Pane */}
          <div className="flex flex-col gap-4 justify-between h-full">
            <div className="bg-[#071B36] text-white border border-slate-700 rounded-2xl p-5 text-left relative overflow-hidden flex-1 flex flex-col justify-center min-h-[180px]">
              <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#6366F1_1px,transparent_1px)] bg-[length:14px_14px]" />
              <div className="relative z-10">
                <span className="text-[8px] font-mono text-indigo-400 uppercase tracking-widest block mb-1 font-black">Field Auditor</span>
                <h5 className="text-xs font-black uppercase tracking-tight text-white mb-2">
                  {current.label}
                </h5>
                <p className="text-xs leading-relaxed text-slate-200 mb-3 whitespace-normal break-words">
                  {current.desc}
                </p>
                <p className="text-[10px] text-indigo-300 font-bold italic">
                  Pro Tip: {current.tip}
                </p>
              </div>
            </div>

            <NoteToggleSelector 
              options={fields.map(f => ({ id: f.id, name: f.label.split(". ")[1] }))}
              selectedId={selectedField}
              onChange={setSelectedField}
              className="w-full"
            />
          </div>
        </div>

        <NoteMentorInsight 
          text="A structured note is a search filter for your brain. If every entry is written in a different style, you cannot search for patterns."
          analogy="A medical chart in a hospital has fixed fields: symptoms, blood pressure, diagnostic codes, prescription. Doctors do not write stories; they write standardized medical records."
        />
      </div>
    </NoteInstitutionalFrame>
  );
};

/**
 * Card 3: FactsVsFeelingsNoteBoard
 * Visual Key: facts-vs-feelings-note-board
 */
export const FactsVsFeelingsNoteBoard = () => {
  const [activeCase, setActiveCase] = useState<number>(0);

  const cases = [
    {
      label: "Candle Speed vs Close Facts",
      weak: "It looked super strong and fast, I think it will pump more.",
      better: "Price closed above the 15m range ceiling on high volume, holding context.",
      why: "The weak phrase relies on speed and urgency ('pump more,' 'looked strong'). The better phrase records the close location and volume, which can be measured."
    },
    {
      label: "Range Midpoint vs Zone Sweep",
      weak: "BTC is cheap here, I bought because it must bounce.",
      better: "BTC swept the prior daily swing low and held above the range floor ($62,100).",
      why: "Cheap is an opinion. 'Must bounce' is a prediction. The better phrase maps the range floor and sweeps, which is objective structural data."
    },
    {
      label: "Hype vs Verification Stack",
      weak: "I felt this setup was massive because everyone is bullish.",
      better: "Bullish reading supported by session high swept + USD context weak across major pairs.",
      why: "Feelings and crowd opinions are noise. The better phrase lists specific, verified clues across context layers."
    }
  ];

  return (
    <NoteInstitutionalFrame label="Facts vs Feelings Auditor" status="OBJECTIVE LAB">
      <div className="w-full flex flex-col gap-6 items-center">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full max-w-2xl gap-3">
          <p className="text-xs text-slate-700 font-bold leading-relaxed text-left max-w-sm">
            Compare weak, feeling-based writing with structured, fact-based logs. Select a case study below.
          </p>
          <NoteToggleSelector 
            options={cases.map((c, idx) => ({ id: idx.toString(), name: c.label.split(" vs ")[0] }))}
            selectedId={activeCase.toString()}
            onChange={(id) => setActiveCase(parseInt(id))}
          />
        </div>

        {/* Side-by-Side Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
          {/* Weak side */}
          <div className="p-5 rounded-[2rem] bg-rose-50/50 border border-rose-200 text-left flex flex-col justify-between min-h-[140px]">
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-[9px] font-black text-rose-800 uppercase tracking-widest">Weak Log (Feelings)</span>
                <NoteVocabularyShiftBadge status="WEAK" />
              </div>
              <p className="text-xs font-bold text-rose-950 italic leading-relaxed whitespace-normal break-words">
                "{cases[activeCase].weak}"
              </p>
            </div>
            <span className="text-[9px] text-rose-800/80 font-medium block mt-3">❌ Contains subjective terms & predictions</span>
          </div>

          {/* Better side */}
          <div className="p-5 rounded-[2rem] bg-emerald-50/50 border border-emerald-250 text-left flex flex-col justify-between min-h-[140px]">
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-[9px] font-black text-emerald-800 uppercase tracking-widest">Strong Log (Facts)</span>
                <NoteVocabularyShiftBadge status="BETTER" />
              </div>
              <p className="text-xs font-bold text-emerald-950 italic leading-relaxed whitespace-normal break-words">
                "{cases[activeCase].better}"
              </p>
            </div>
            <span className="text-[9px] text-emerald-800/80 font-bold block mt-3">✓ Uses structural verbs and levels</span>
          </div>
        </div>

        {/* Explanation Box */}
        <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-2xl p-5 text-left relative overflow-hidden flex flex-col gap-2 shadow-sm">
          <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest block font-black">Why it matters</span>
          <h5 className="text-xs font-black text-[#071B36] uppercase tracking-tight">
            {cases[activeCase].label}
          </h5>
          <p className="text-xs text-slate-700 leading-relaxed whitespace-normal break-words">
            {cases[activeCase].why}
          </p>
        </div>

        <NoteMentorInsight 
          text="If you write feelings in your log, you are reviewing your emotions, not the chart. Strip out the adjectives and describe the verbs."
          analogy="An accident inspector does not write: 'The driver felt sad.' They write: 'Vehicle speed was 45 mph, brake marks spanned 12 feet, road surface was wet.'"
        />
      </div>
    </NoteInstitutionalFrame>
  );
};

/**
 * Card 4: PreActionReasoningNote
 * Visual Key: pre-action-reasoning-note
 */
export const PreActionReasoningNote = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const reasoningStack = [
    {
      title: "1. HTF Context",
      desc: "Record the higher-timeframe environment first.",
      value: "Daily chart is range-bound, testing daily support ceiling ($1.0820)."
    },
    {
      title: "2. Market Location",
      desc: "Identify whether price is at an edge or midpoint noise.",
      value: "Price is testing the extreme range floor support zone."
    },
    {
      title: "3. Local Evidence",
      desc: "List the candlestick closes and venue clues.",
      value: "15m candle swept the daily floor and closed back inside with high volume."
    },
    {
      title: "4. Conflict Audit",
      desc: "Note any signs that oppose your reading.",
      value: "GBP/USD is still showing weak structures; EUR/USD is leading."
    },
    {
      title: "5. Decision / Reasoning",
      desc: "Write down your pre-action case before the simulator prints the outcome.",
      value: "Simulated Buy at support hold. Invalidation is a clear close below floor."
    },
    {
      title: "6. Uncertainty Factor",
      desc: "Acknowledge what is still unknown or weak in the setup.",
      value: "Volume was high, but London session overlap is ending, so momentum may fade."
    }
  ];

  return (
    <NoteInstitutionalFrame label="Pre-Action Reasoning Stack" status="REASONING LAB">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-700 font-bold max-w-xl text-center leading-relaxed">
          Pre-action reasoning stops hindsight bias by freezing your analysis before the result occurs. Click the layers of the reasoning stack to examine their records.
        </p>

        <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          {/* Stack Representation */}
          <div className="flex flex-col gap-2.5">
            {reasoningStack.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  type="button"
                  key={step.title}
                  onClick={() => setActiveStep(idx)}
                  className={cn(
                    "w-full text-left p-3 rounded-2xl border transition-all cursor-pointer flex justify-between items-center",
                    isActive 
                      ? "bg-[#071B36] text-white border-[#071B36] shadow-md scale-102" 
                      : "bg-white text-slate-800 border-slate-200 hover:bg-slate-50"
                  )}
                >
                  <span className="text-xs font-black uppercase tracking-tight">{step.title}</span>
                  <div className={cn(
                    "w-3 h-3 rounded-full flex items-center justify-center text-[8px] font-black text-white",
                    isActive ? "bg-indigo-400" : "bg-slate-350 bg-slate-400"
                  )}>
                    {isActive ? "●" : ""}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Details Box */}
          <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm text-left flex flex-col justify-between min-h-[220px]">
            <div>
              <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1">
                Reasoning Layer Auditor
              </span>
              <h5 className="text-xs font-black text-[#071B36] uppercase tracking-tight mb-2">
                {reasoningStack[activeStep].title}
              </h5>
              <p className="text-[11px] text-slate-655 text-slate-700 font-bold leading-normal mb-3">
                {reasoningStack[activeStep].desc}
              </p>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 italic">
                <span className="text-[8px] font-black text-indigo-500 uppercase tracking-wider block mb-1">Note Record Draft</span>
                <p className="text-xs font-bold text-[#071B36] leading-relaxed whitespace-normal break-words">
                  "{reasoningStack[activeStep].value}"
                </p>
              </div>
            </div>
          </div>
        </div>

        <NoteMentorInsight 
          text="A note written after the result is a story you tell yourself. A note written before the result is evidence of your skill."
          analogy="A ship's captain notes coordinates and headings in the logbook before entering the storm, not after. This ensures their reasoning can be audited if something goes wrong."
        />
      </div>
    </NoteInstitutionalFrame>
  );
};

/**
 * Card 5: ReviewConditionWritingLab
 * Visual Key: review-condition-writing-lab
 */
export const ReviewConditionWritingLab = () => {
  const [activeCase, setActiveCase] = useState<number>(0);

  const cases = [
    {
      label: "Bullish Support Play",
      weak: "Bullish setup. If market reverses or looks bad, I will re-check.",
      strong: "If price closes and holds below the support floor ($1.0850), my bullish reading is invalid.",
      why: "The weak condition ('looks bad') is too subjective and allows for emotional excuses. The strong condition defines a specific price boundary and close condition."
    },
    {
      label: "Range Ceil Break",
      weak: "Bullish breakout. If it fails, I am out.",
      strong: "If price closes back inside the range floor ($64,200) and the next 4H candle fails to hold outside.",
      why: "The weak condition has no timeline or level. The strong condition specifies the close location and the next candle follow-through rule."
    },
    {
      label: "Gold Wick Sweep",
      weak: "Bearish sweep. Exit if price keeps going up.",
      strong: "If price breaks the high of the sweep candle ($2,352.50) by more than 2 pips on high volume.",
      why: "The weak condition creates panic. The strong condition defines the exact invalidation filter and volume behavior."
    }
  ];

  return (
    <NoteInstitutionalFrame label="Review Condition Writer" status="REVIEW LAB">
      <div className="w-full flex flex-col gap-6 items-center">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full max-w-2xl gap-3">
          <p className="text-xs text-slate-700 font-bold leading-relaxed text-left max-w-sm">
            A review condition must be specific and falsifiable. Check the case studies below to see the difference.
          </p>
          <NoteToggleSelector 
            options={cases.map((c, idx) => ({ id: idx.toString(), name: c.label }))}
            selectedId={activeCase.toString()}
            onChange={(id) => setActiveCase(parseInt(id))}
          />
        </div>

        {/* Side-by-Side Invalidation Conditions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
          {/* Weak side */}
          <div className="p-5 rounded-[2rem] bg-rose-50/50 border border-rose-200 text-left flex flex-col justify-between min-h-[140px]">
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-[9px] font-black text-rose-800 uppercase tracking-widest">Weak Review Condition</span>
                <NoteVocabularyShiftBadge status="WEAK" />
              </div>
              <p className="text-xs font-bold text-rose-950 italic leading-relaxed whitespace-normal break-words">
                "{cases[activeCase].weak}"
              </p>
            </div>
            <span className="text-[9px] text-rose-800/80 font-medium block mt-3">❌ Vague, non-testable boundaries</span>
          </div>

          {/* Better side */}
          <div className="p-5 rounded-[2rem] bg-emerald-50/50 border border-emerald-250 text-left flex flex-col justify-between min-h-[140px]">
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-[9px] font-black text-emerald-800 uppercase tracking-widest">Strong Review Condition</span>
                <NoteVocabularyShiftBadge status="BETTER" />
              </div>
              <p className="text-xs font-bold text-emerald-950 italic leading-relaxed whitespace-normal break-words">
                "{cases[activeCase].strong}"
              </p>
            </div>
            <span className="text-[9px] text-emerald-800/80 font-bold block mt-3">✓ Specific price boundaries & close rules</span>
          </div>
        </div>

        {/* Audit Details */}
        <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-2xl p-5 text-left relative overflow-hidden flex flex-col gap-2 shadow-sm">
          <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest block font-black">Audit Insight</span>
          <p className="text-xs text-slate-700 leading-relaxed whitespace-normal break-words">
            {cases[activeCase].why}
          </p>
        </div>

        <NoteMentorInsight 
          text="If your review condition cannot be checked with a simple yes/no question, it is not a condition. It is a guess."
          analogy="A building safety inspector does not write: 'Exit if the structure looks scary.' They write: 'Exit if vertical columns shift past 1.5 cm from the baseline.'"
        />
      </div>
    </NoteInstitutionalFrame>
  );
};

/**
 * Card 6: ProcessQualityNoteAudit
 * Visual Key: process-quality-note-audit
 */
export const ProcessQualityNoteAudit = () => {
  const [outcome, setOutcome] = useState<"win" | "loss">("loss");
  const [process, setProcess] = useState<"valid" | "invalid">("valid");

  return (
    <NoteInstitutionalFrame label="Process Quality Audit Tool" status="AUDIT LAB">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-700 font-bold max-w-xl text-center leading-relaxed">
          Toggle the trade outcome and process compliance below to audit the true value of the practice session.
        </p>

        {/* Controls block */}
        <div className="w-full max-w-xl bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row justify-between gap-4 select-none shrink-0">
          <div className="flex flex-col gap-1.5 text-left">
            <span className="text-[9px] font-black text-slate-550 text-slate-500 uppercase tracking-wider">1. Simulator Outcome</span>
            <NoteToggleSelector 
              options={[
                { id: "win", name: "Virtual Win (+ PnL)" },
                { id: "loss", name: "Virtual Loss (- PnL)" }
              ]}
              selectedId={outcome}
              onChange={(id) => setOutcome(id as any)}
            />
          </div>
          
          <div className="flex flex-col gap-1.5 text-left">
            <span className="text-[9px] font-black text-slate-550 text-slate-500 uppercase tracking-wider">2. Process Compliance</span>
            <NoteToggleSelector 
              options={[
                { id: "valid", name: "Checklist Followed" },
                { id: "invalid", name: "Checklist Ignored" }
              ]}
              selectedId={process}
              onChange={(id) => setProcess(id as any)}
            />
          </div>
        </div>

        {/* Process Evaluation Panel */}
        <div className="w-full max-w-xl bg-white border border-slate-200 rounded-2xl p-5 text-left relative overflow-hidden flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="absolute top-0 left-0 right-0 h-1 bg-indigo-500" />
          <div className="flex-1">
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1">Practice Audit Output</span>
            {process === "valid" ? (
              outcome === "win" ? (
                <div>
                  <h5 className="text-xs font-black text-emerald-950 uppercase tracking-tight mb-1 flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-emerald-600" /> Process Success + Good Result
                  </h5>
                  <p className="text-xs text-slate-700 leading-relaxed whitespace-normal break-words max-w-sm">
                    Ideal session. Your pre-action checklist was compliant, and the market confirmed your reading. High learning value.
                  </p>
                </div>
              ) : (
                <div>
                  <h5 className="text-xs font-black text-[#071B36] uppercase tracking-tight mb-1 flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-indigo-600 animate-pulse" /> Valid Attempt / Disciplined Loss
                  </h5>
                  <p className="text-xs text-slate-700 leading-relaxed whitespace-normal break-words max-w-sm">
                    Excellent training. You followed every rule, but price hit your invalidation floor. This log is a success of self-control.
                  </p>
                </div>
              )
            ) : (
              outcome === "win" ? (
                <div>
                  <h5 className="text-xs font-black text-rose-950 uppercase tracking-tight mb-1 flex items-center gap-1.5">
                    <AlertTriangle size={13} className="text-rose-600" /> Outcome Bias Trap / Junk Win
                  </h5>
                  <p className="text-xs text-slate-700 leading-relaxed whitespace-normal break-words max-w-sm">
                    Danger. You guessed out of boredom and got lucky. Logging this as 'success' teaches your brain to ignore rules. Score: Process Failure.
                  </p>
                </div>
              ) : (
                <div>
                  <h5 className="text-xs font-black text-rose-950 uppercase tracking-tight mb-1 flex items-center gap-1.5">
                    <XCircle size={13} className="text-rose-600 animate-pulse" /> Complete Process Failure
                  </h5>
                  <p className="text-xs text-slate-700 leading-relaxed whitespace-normal break-words max-w-sm">
                    Warning. You chased speed, defined no review condition, and took a loss. Audit this note to identify what trigger broke.
                  </p>
                </div>
              )
            )}
          </div>

          <div className="flex flex-col items-end gap-1 shrink-0 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100">
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest leading-none">Diagnostic Rating</span>
            <NoteVocabularyShiftBadge 
              status={
                process === "valid" 
                  ? outcome === "win" ? "AUDITED" : "STAND-ASIDE"
                  : "WEAK"
              } 
            />
          </div>
        </div>

        <NoteMentorInsight 
          text="Do not check your simulated balance to see if you had a good practice day. Check your process compliance score. Green PnL from poor rules is a trap."
          analogy="A driver who safely crosses a busy intersection on a red light didn't make a good decision. They were just lucky, and doing it again will lead to a crash."
        />
      </div>
    </NoteInstitutionalFrame>
  );
};

/**
 * Card 7: MistakeTaggingFramework
 * Visual Key: mistake-tagging-framework
 */
export const MistakeTaggingFramework = () => {
  const [tags, setTags] = useState({
    boredom: 0,
    chasing: 0,
    location: 0,
    trigger: 0
  });

  const incrementTag = (key: keyof typeof tags) => {
    setTags(prev => ({ ...prev, [key]: prev[key] + 1 }));
  };

  const resetTags = () => {
    setTags({ boredom: 0, chasing: 0, location: 0, trigger: 0 });
  };

  const tagList = [
    { key: "boredom", label: "#boredom-click", desc: "Acting out of inactivity rather than chart structure.", icon: <Activity size={12} /> },
    { key: "chasing", label: "#chasing", desc: "Buying a green spike or selling a red wick late because of candle speed.", icon: <Sparkles size={12} /> },
    { key: "location", label: "#location-ignore", desc: "Entering setups in range midpoints without Daily zones.", icon: <Layers size={12} /> },
    { key: "trigger", label: "#no-review-condition", desc: "Clicking without stating your exit price before the trade.", icon: <ListTodo size={12} /> }
  ];

  return (
    <NoteInstitutionalFrame label="Mistake Tagging Framework" status="TAGGING LAB">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-700 font-bold max-w-xl text-center leading-relaxed">
          Mistake tags help you count repeated errors over time. Click any tag button below to simulate logging a process error.
        </p>

        <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Tags selector list */}
          <div className="flex flex-col gap-3">
            {tagList.map((tag) => (
              <button
                type="button"
                key={tag.key}
                onClick={() => incrementTag(tag.key as any)}
                className="w-full p-3 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 text-left flex justify-between items-center cursor-pointer shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 bg-indigo-50 text-indigo-650 text-indigo-600 rounded-lg">
                    {tag.icon}
                  </div>
                  <div>
                    <span className="text-xs font-black text-[#071B36] uppercase tracking-tight block">{tag.label}</span>
                    <span className="text-[10px] text-slate-655 text-slate-750 font-medium block mt-0.5">{tag.desc}</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-400">Log +1</span>
              </button>
            ))}
          </div>

          {/* Tag compilation chart */}
          <div className="bg-[#071B36] text-white border border-slate-700 rounded-[2rem] p-6 text-left flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="flex justify-between items-center mb-4 border-b border-slate-700 pb-2">
                <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest block">Error Trend Summary</span>
                <button
                  type="button"
                  onClick={resetTags}
                  className="text-[9px] font-black text-slate-400 hover:text-white uppercase tracking-widest cursor-pointer"
                >
                  Reset Counts
                </button>
              </div>
              
              <div className="flex flex-col gap-4">
                {tagList.map((tag) => {
                  const count = tags[tag.key as keyof typeof tags];
                  const barWidth = Math.min(count * 20, 100);
                  return (
                    <div key={tag.key} className="flex flex-col gap-1.5">
                      <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-tight">
                        <span className="text-slate-300">{tag.label}</span>
                        <span className="text-indigo-400 font-mono font-black">{count} times</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-indigo-500 rounded-full transition-all duration-300"
                          style={{ width: `${barWidth || 5}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <NoteMentorInsight 
          text="Naming your errors with short labels stops them from feeling like mysterious losses. If you tag 10 sessions and find 8 #location-ignore tags, your job next week is simple: look only at edges."
          analogy="A manufacturing facility does not label products simply as 'broken.' They categorize rejects: #scratch, #cracked, #malaligned, to fix the specific machine."
        />
      </div>
    </NoteInstitutionalFrame>
  );
};

/**
 * Card 8: StandAsideNoteFormat
 * Visual Key: stand-aside-note-format
 */
export const StandAsideNoteFormat = () => {
  return (
    <NoteInstitutionalFrame label="Stand-Aside Note Audit" status="STAND-ASIDE LAB">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-700 font-bold max-w-xl text-center leading-relaxed">
          Choosing active idle means you did not trade, but you still did valuable practice work. Check the standard stand-aside note format below.
        </p>

        {/* Note Mockup */}
        <NoteDisplayPanel 
          fields={[
            { label: "Roadway", value: "Gold (XAU/USD)" },
            { label: "Context", value: "Sideways consolidation in 15m range midpoint, NY overlap open." },
            { label: "Pre-Action / Reason for Stand-Aside", value: "Price is chopping inside midpoint empty space. No Daily location support or swing ceilings are tested. Volume is low." },
            { label: "Missing Evidence", value: "Waiting for either a clear sweep of the range floor ($2,320) or a clean breakout close above the range ceiling ($2,335)." },
            { label: "Process Score", value: "100% compliant / Active Idle trophy", highlight: true },
            { label: "Lesson", value: " mid-range noise is designed to generate boredom clicks. Standing aside kept the database clean." }
          ]}
        />

        <NoteMentorInsight 
          text="A stand-aside note is proof that you can control your hands. Log it as a win of self-discipline in your database."
          analogy="A security guard's logbook that reads: '02:00 - No entry, area clear,' is not a record of a wasted shift. It is proof that the guard was alert and doing their job."
        />
      </div>
    </NoteInstitutionalFrame>
  );
};

/**
 * Card 9: ReplayMissedOpportunityNote
 * Visual Key: replay-missed-opportunity-note
 */
export const ReplayMissedOpportunityNote = () => {
  const [activeTab, setActiveTab] = useState<"replay" | "missed">("replay");

  return (
    <NoteInstitutionalFrame label="Specialized Note Formats" status="SPECIALIZED LAB">
      <div className="w-full flex flex-col gap-6 items-center">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full max-w-xl gap-3">
          <p className="text-xs text-slate-700 font-bold leading-relaxed text-left max-w-xs">
            Review the logs for scenario replays and missed opportunity auditing.
          </p>
          <NoteToggleSelector 
            options={[
              { id: "replay", name: "Replay Delta Note" },
              { id: "missed", name: "Missed Opportunity Note" }
            ]}
            selectedId={activeTab}
            onChange={(id) => setActiveTab(id as any)}
          />
        </div>

        {/* Display Panel based on active tab */}
        {activeTab === "replay" ? (
          <NoteDisplayPanel 
            fields={[
              { label: "Original Run ID", value: "#RUN-204 - Ignored Daily Resistance ceiling, chased spike." },
              { label: "Replay Correction Target", value: "Freeze at entry candle and explicitly map the H4 Daily ceiling box before selecting buy/sell." },
              { label: "Replay Observation / Reasoning", value: "Froze price at $1.0880. Located the Daily resistance ceiling block directly above ($1.0890). Stood aside." },
              { label: "Replay Result", value: "Stand-aside completed. Price reversed at $1.0888 exactly. Avoided original loss." },
              { label: "Lesson", value: "Mapping the daily level first prevents wicks from trapping my hands." }
            ]}
          />
        ) : (
          <NoteDisplayPanel 
            fields={[
              { label: "Opportunity Seen", value: "Crypto (BTC/USD) swept 4H support and closed strong." },
              { label: "Reason for Hesitation / No Action", value: "I saw the evidence, but felt nervous because my previous trade was a loss. I waited for too many confirmations." },
              { label: "What price did next", value: "Price rallied $800 directly from the sweep close." },
              { label: "Hesitation Audit / Tag", value: "#hesitation-lack-of-confidence", highlight: true },
              { label: "Takeaway", value: "When location and sweep hold are verified, the reading is clear. Do not let past outcomes block execution rules." }
            ]}
          />
        )}

        <NoteMentorInsight 
          text={
            activeTab === "replay"
              ? "Replays exist to rewrite your habits, not your balance. The replay note records the correction."
              : "A missed opportunity note contains no self-blame. It is data to audit why you hesitated when evidence was present."
          }
          analogy={
            activeTab === "replay"
              ? "A pilot landing in a simulator after a simulated crash doesn't record 'we made it.' They write down what instrument they checked differently on the second approach."
              : "A goalie reviews video of a shot they missed, not to feel bad, but to study if they were standing too far left before the ball was kicked."
          }
        />
      </div>
    </NoteInstitutionalFrame>
  );
};

/**
 * Card 10: PracticeNoteDrill
 * Visual Key: practice-note-rewrite-drill
 */
export const PracticeNoteRewriteDrill = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  const options = [
    {
      id: "opt1",
      text: "Keep the original note because it is brief and captures the outcome accurately.",
      feedback: "Incorrect. The note describes frustration ('Bad trade') but contains no structural facts, pre-action reasoning, or review condition. It cannot be used to audit errors."
    },
    {
      id: "opt2",
      text: "Rewrite using structured fields: Context (Daily Range Midpoint), Pre-Action Reasoning (Chased 15m spike), Review Condition (None), Result (Loss), Mistake Tag (#chasing), Lesson (Do not buy spikes in midpoint empty space).",
      feedback: "Correct! This rewrite separates facts from feelings, uses structural terms, logs the correct mistake tag, and provides an actionable takeaway."
    },
    {
      id: "opt3",
      text: "Delete the note completely because losing runs do not contribute to long-term skill database logs.",
      feedback: "Incorrect. Losing attempts are highly valuable logs if they are structured cleanly to highlight process errors."
    },
    {
      id: "opt4",
      text: "Change the note to state: 'Market was manipulated by algorithms,' as this keeps confidence high.",
      feedback: "Incorrect. Blaming the market prevents you from finding your own checklist and discipline failures."
    }
  ];

  const handleSelect = (id: string) => {
    setSelectedOption(id);
    setShowFeedback(true);
  };

  const isCorrect = selectedOption === "opt2";

  return (
    <NoteInstitutionalFrame label="Interactive Note Rewrite" status="PRACTICE DRILL">
      <div className="w-full flex flex-col gap-5 items-center">
        {/* Original Weak Note Box */}
        <div className="w-full max-w-xl bg-rose-50/55 border border-rose-200 rounded-2xl p-4 text-left shadow-sm relative">
          <div className="absolute top-3 right-3">
            <NoteVocabularyShiftBadge status="WEAK" />
          </div>
          <span className="text-[9px] font-black text-rose-800 uppercase tracking-widest block mb-1">Original Diary Note Log</span>
          <p className="text-xs font-bold text-rose-955 italic leading-relaxed whitespace-normal break-words pr-12">
            "Bad trade. I thought it would go up because it looked strong. Then it reversed. I should have waited."
          </p>
        </div>

        {/* Options grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl">
          {options.map((opt) => {
            const isSelected = selectedOption === opt.id;
            return (
              <button
                type="button"
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                className={cn(
                  "p-3.5 border rounded-2xl text-left flex items-start gap-3 transition-all cursor-pointer min-h-[60px]",
                  isSelected
                    ? isCorrect
                      ? "bg-emerald-50/70 border-emerald-500 text-emerald-955"
                      : "bg-rose-50/70 border-rose-500 text-rose-955"
                    : "bg-white text-slate-800 border-slate-200 hover:border-indigo-500 hover:bg-slate-50"
                )}
              >
                <span className={cn(
                  "w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-black shrink-0",
                  isSelected
                    ? isCorrect
                      ? "bg-emerald-500 text-white border-emerald-500"
                      : "bg-rose-500 text-white border-rose-500"
                    : "bg-slate-50 text-slate-550 text-slate-500 border-slate-200"
                )}>
                  {opt.id === "opt1" ? "A" : opt.id === "opt2" ? "B" : opt.id === "opt3" ? "C" : "D"}
                </span>
                <span className="text-xs font-bold leading-tight">{opt.text}</span>
              </button>
            );
          })}
        </div>

        {/* Feedback Display */}
        {showFeedback && (
          <div className={cn(
            "w-full max-w-2xl rounded-2xl p-4 border text-left min-h-[85px] transition-all",
            isCorrect
              ? "bg-emerald-50 text-emerald-900 border-emerald-350"
              : "bg-rose-50 text-rose-900 border-rose-350"
          )}>
            <span className="text-[9px] font-black uppercase tracking-wider block mb-1">Audit Result &bull; {isCorrect ? "Correct" : "Incorrect"}</span>
            <p className="text-xs font-bold leading-relaxed whitespace-normal break-words">
              {options.find(o => o.id === selectedOption)!.feedback}
            </p>
          </div>
        )}

        <NoteMentorInsight 
          text="Rewriting your raw logs from emotional reactions into structured facts is the first step toward self-auditing."
          analogy="A pilot who makes a hard landing does not write 'bad flight.' They report: 'Encountered 15-knot crosswind at 200 feet, descent rate exceeded 500 fpm at threshold.'"
        />
      </div>
    </NoteInstitutionalFrame>
  );
};

/**
 * Card 11: PracticeNoteLabDebrief
 * Visual Key: practice-note-lab-debrief
 */
export const PracticeNoteLabDebrief = () => {
  const [selectedStandard, setSelectedStandard] = useState<string>("template");

  const standards = [
    {
      id: "template",
      label: "Standard Template Usage",
      val: "Every note uses identical fields (Context, Reasoning, Review Condition) to keep records searchable.",
      status: "AUDITED"
    },
    {
      id: "language",
      label: "Factual Language Shift",
      val: "Zero emotional words. Adjectives like 'strong' or 'weak' are replaced by verifiable structural verbs.",
      status: "BETTER"
    },
    {
      id: "conditions",
      label: "Falsifiable Review Conditions",
      val: "Every attempt has an invalidation level or close trigger stated prior to simulator advancement.",
      status: "AUDITED"
    },
    {
      id: "tagging",
      label: "Cockpit Error Tagging",
      val: "Mistakes are logged with consistent tags (#boredom-click, #chasing) to generate error statistics.",
      status: "STAND-ASIDE"
    }
  ];

  const current = standards.find(s => s.id === selectedStandard)!;

  return (
    <NoteInstitutionalFrame label="Practice Evaluation Hub" status="LAB COMPLETED">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-700 font-bold max-w-xl text-center leading-relaxed">
          Review the Lurnava Clean Log standards. Toggle options to audit your note-writing compliance metrics.
        </p>

        {/* Toggles */}
        <NoteToggleSelector 
          options={standards.map(s => ({ id: s.id, name: s.label }))}
          selectedId={selectedStandard}
          onChange={setSelectedStandard}
        />

        {/* Mock sheet detail */}
        <div className="w-full max-w-xl bg-white border border-slate-200 rounded-2xl p-5 text-left relative overflow-hidden flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm">
          <div className="absolute top-0 left-0 right-0 h-1 bg-indigo-500" />
          <div className="flex-1">
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1">Compliance Parameter</span>
            <h5 className="text-sm font-black text-[#071B36] uppercase tracking-tight mb-2">
              {current.label}
            </h5>
            <p className="text-xs text-slate-700 leading-relaxed whitespace-normal break-words">
              {current.val}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1.5 shrink-0 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100">
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest leading-none">Status Badge</span>
            <NoteVocabularyShiftBadge status={current.status as any} />
          </div>
        </div>

        <NoteMentorInsight 
          text="A useful note does not protect your ego; it protects your progress. Treat your journal as a database."
          analogy="A professional laboratory maintains a locked logbook where pages cannot be deleted. Every experiment, success or explosion, remains as permanent science history."
        />
      </div>
    </NoteInstitutionalFrame>
  );
};
