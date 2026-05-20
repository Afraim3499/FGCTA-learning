import React, { useState } from "react";
import { 
  Compass, 
  MapPin, 
  ArrowRight, 
  RotateCcw, 
  XCircle, 
  CheckCircle2,
  Lock,
  Compass as GoldLabIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Premium Gold Institutional Frame for Module 0.9
 */
export const GoldInstitutionalFrame = ({ 
  children, 
  label, 
  status = "LAB STANDBY",
  id = "LN-0.9-XAU"
}: { 
  children: React.ReactNode; 
  label: string; 
  status?: string;
  id?: string;
}) => (
  <div className="w-full h-full min-h-[550px] bg-[#FAF8F5] border border-[#E6DFD5] rounded-[2rem] p-6 md:p-8 flex flex-col relative overflow-hidden shadow-sm">
    {/* Grid Background Effect */}
    <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#B45309_1.5px,transparent_1.5px)] bg-[length:24px_24px]" />
    
    {/* Top Header Row */}
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 relative z-10 border-b border-amber-200/50 pb-4 shrink-0">
      <div className="flex flex-col">
        <div className="flex items-center gap-2 mb-1">
          <Compass size={11} className="text-amber-600 animate-spin-slow" style={{ animationDuration: '8s' }} />
          <span className="text-[9px] font-black text-amber-800 uppercase tracking-[0.25em]">Gold Reading Lab</span>
        </div>
        <h4 className="text-base font-black text-[#1C160C] uppercase tracking-tighter italic leading-tight">{label}</h4>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-end">
          <span className="text-[8px] font-black text-amber-800 uppercase tracking-widest leading-none mb-1">Module ID</span>
          <span className="text-[10px] font-mono text-[#1C160C] font-bold">{id}</span>
        </div>
        <div className="w-px h-6 bg-amber-200/60" />
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-amber-200/80 rounded-lg shadow-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          <span className="text-[9px] font-black text-[#1C160C] uppercase tracking-widest">{status}</span>
        </div>
      </div>
    </div>

    {/* Dynamic Content Center Stage */}
    <div className="flex-1 flex flex-col items-center justify-center relative z-10 w-full min-h-0 min-w-0">
      {children}
    </div>

    {/* Bottom Footer Row */}
    <div className="mt-6 pt-4 border-t border-amber-200/50 flex items-center justify-between shrink-0">
       <div className="flex gap-4">
          <div className="flex items-center gap-1.5">
            <div className="w-1 h-1 bg-amber-500 rounded-full" />
            <span className="text-[8px] font-black text-amber-800 uppercase tracking-widest">XAU/USD Audited</span>
          </div>
       </div>
       <div className="flex items-center gap-1.5">
          <Lock size={10} className="text-amber-600" />
          <span className="text-[8px] font-mono text-amber-700 uppercase tracking-tighter">LN-GOLD-LAB-V1</span>
       </div>
    </div>
  </div>
);

/**
 * Mentor Insight Component
 */
export const GoldMentorInsight = ({ text, analogy }: { text: string; analogy?: string }) => (
  <div className="w-full mt-6 pt-5 border-t border-amber-200/50 flex flex-col gap-2 shrink-0 text-left">
    <div className="flex items-center gap-2">
      <div className="px-2 py-1 bg-[#1C160C] text-white text-[8px] font-black uppercase tracking-widest rounded-sm">Mentor Insight</div>
      <div className="h-px flex-1 bg-amber-200/50" />
    </div>
    <div className="flex gap-4">
       <div className="flex-1">
          <p className="text-xs font-bold text-[#1C160C] leading-relaxed">{text}</p>
          {analogy && (
            <p className="mt-1.5 text-[11px] text-amber-800 italic leading-snug">
              <span className="font-black uppercase text-[9px] mr-2 text-amber-600 not-italic">Analogy:</span>
              {analogy}
            </p>
          )}
       </div>
    </div>
  </div>
);

/**
 * Custom Solid Gold Candlestick (never transparent or white)
 */
export const MiniGoldCandle = ({
  color,
  bodyHeight,
  upperWick = 15,
  lowerWick = 15,
  isDoji = false
}: {
  color: "gold" | "rose" | "slate" | "amber";
  bodyHeight: number;
  upperWick?: number;
  lowerWick?: number;
  isDoji?: boolean;
}) => {
  const styles = {
    gold: { bg: "#D97706", border: "#B45309", label: "Bullish Value" }, // amber-600
    rose: { bg: "#E11D48", border: "#BE123C", label: "Bearish Value" }, // rose-600
    amber: { bg: "#F59E0B", border: "#D97706", label: "Event Spikes" }, // amber-500
    slate: { bg: "#475569", border: "#334155", label: "Neutral/Chop" } // slate-600
  };

  const currentStyle = styles[color] || styles.slate;

  return (
    <div className="flex flex-col items-center justify-center select-none py-1 shrink-0">
      {/* Upper Wick */}
      {upperWick > 0 && (
        <div 
          className="w-0.5" 
          style={{ height: `${upperWick}px`, backgroundColor: currentStyle.border }} 
        />
      )}

      {/* Body */}
      {isDoji ? (
        <div 
          className="w-6 h-0.5" 
          style={{ backgroundColor: currentStyle.border }} 
        />
      ) : (
        <div 
          className="w-4 rounded-sm border shadow-sm transition-all duration-300"
          style={{ 
            height: `${bodyHeight}px`, 
            backgroundColor: currentStyle.bg,
            borderColor: currentStyle.border
          }}
        />
      )}

      {/* Lower Wick */}
      {lowerWick > 0 && (
        <div 
          className="w-0.5" 
          style={{ height: `${lowerWick}px`, backgroundColor: currentStyle.border }} 
        />
      )}
    </div>
  );
};

/**
 * Reading Quality Badge
 */
export const GoldReadingQualityBadge = ({
  quality,
  className
}: {
  quality: string;
  className?: string;
}) => {
  const upper = quality.toUpperCase();
  const isHigh = ["HIGH QUALITY", "CLEAR", "STABILIZED HOLD", "FOLLOW-THROUGH HOLD", "REJECTION SWEEP", "VALID BREAKOUT"].includes(upper);
  const isLow = ["LOW QUALITY", "UNSTABLE", "NOISE", "TRAP", "FAKE BREAKOUT", "CHOPPY NOISE", "MIXED"].includes(upper);

  return (
    <span className={cn(
      "text-[8px] font-mono font-black px-2 py-0.5 rounded border uppercase tracking-wider shrink-0",
      isHigh ? "bg-emerald-50 text-emerald-700 border-emerald-200" :
      isLow ? "bg-rose-50 text-rose-700 border-rose-200" :
      "bg-amber-50 text-amber-700 border-amber-200",
      className
    )}>
      {quality}
    </span>
  );
};

/**
 * Toggle Selector Tab Component
 */
export const GoldToggleSelector = ({
  options,
  selectedId,
  onChange,
  className
}: {
  options: { id: string; name: string }[];
  selectedId: string;
  onChange: (id: string) => void;
  className?: string;
}) => (
  <div className={cn("flex bg-amber-100/50 border border-amber-200/40 p-1 rounded-xl shrink-0 gap-1 overflow-x-auto max-w-full", className)}>
    {options.map((opt) => (
      <button
        key={opt.id}
        onClick={() => onChange(opt.id)}
        className={cn(
          "px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap",
          selectedId === opt.id ? "bg-[#1C160C] text-white shadow-sm" : "text-amber-900 hover:text-[#1C160C] hover:bg-amber-200/30"
        )}
      >
        {opt.name}
      </button>
    ))}
  </div>
);

/**
 * Workflow Stepper Primitive
 */
interface WorkflowStep {
  title: string;
  action?: string;
  desc: string;
  icon?: React.ComponentType<{ className?: string; size?: number }>;
  status?: string;
}

export const GoldStepWorkflow = ({
  steps,
  label = "Gold Reading Sequence",
  status = "LAB CHECKLIST",
  desc = "Interactive Sequence Checklist: Step through the Gold reading protocol in chronological order."
}: {
  steps: WorkflowStep[];
  label?: string;
  status?: string;
  desc?: string;
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <GoldInstitutionalFrame label={label} status={status}>
      <div className="w-full flex flex-col gap-5 items-center">
        <p className="text-xs text-amber-900 max-w-xl text-center leading-relaxed whitespace-normal break-words font-medium">
          {desc}
        </p>

        {/* Step Nodes Stepper */}
        <div className="w-full flex justify-between items-center bg-amber-100 border border-amber-200 p-2 rounded-xl shrink-0 gap-1 overflow-x-auto">
          {steps.map((s, index) => {
            const Icon = s.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={cn(
                  "flex-1 min-w-[50px] p-2 rounded-lg flex flex-col items-center justify-center transition-all cursor-pointer",
                  activeStep === index ? "bg-[#1C160C] text-white shadow-sm" : "text-amber-800 hover:text-amber-950 hover:bg-amber-200/50"
                )}
              >
                {Icon ? (
                  <Icon size={14} className={activeStep === index ? "text-amber-400" : "text-amber-800"} />
                ) : (
                  <span className={cn(
                    "text-[10px] font-mono font-bold",
                    activeStep === index ? "text-amber-400" : "text-amber-800"
                  )}>#{index + 1}</span>
                )}
                <span className="text-[7px] font-mono font-bold mt-1 hidden md:inline">Step {index + 1}</span>
              </button>
            );
          })}
        </div>

        {/* Step details display */}
        <div className="w-full bg-[#1C160C] text-white rounded-xl p-4 border border-amber-950 min-h-[160px] flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#F59E0B_1px,transparent_1px)] bg-[length:14px_14px]" />
          <div className="relative z-10">
            {steps[activeStep].action && (
              <span className="text-[8px] font-mono text-amber-400 uppercase tracking-widest block mb-1 font-bold">
                {steps[activeStep].action}
              </span>
            )}
            <h5 className="text-sm font-black uppercase tracking-tight mb-2 whitespace-normal break-words">
              {steps[activeStep].title}
            </h5>
            <p className="text-xs text-amber-200 leading-relaxed whitespace-normal break-words">
              {steps[activeStep].desc}
            </p>
          </div>
          <div className="flex justify-between items-center mt-4 pt-2 border-t border-amber-950 relative z-10">
            <span className="text-[7px] font-mono text-amber-400">
              SEQUENCE AUDIT: {steps[activeStep].status || "VERIFIED"}
            </span>
            <button
              onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
              className="text-[8px] font-black uppercase tracking-widest text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
            >
              Next Step <ArrowRight size={10} />
            </button>
          </div>
        </div>
      </div>
    </GoldInstitutionalFrame>
  );
};

/**
 * Gold Practice Drill Multiple Choice Panel
 */
interface DrillOption {
  id: string;
  text: string;
  isCorrect: boolean;
  feedback: string;
}

export const GoldPracticeDrill = ({
  question,
  options,
  chartPreview,
  label = "Gold Reading Lab Drill",
  status = "DRILL ACTIVE"
}: {
  question: string;
  options: DrillOption[];
  chartPreview?: React.ReactNode;
  label?: string;
  status?: string;
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  const handleSelect = (id: string) => {
    setSelectedOption(id);
    setShowFeedback(true);
  };

  const handleReset = () => {
    setSelectedOption(null);
    setShowFeedback(false);
  };

  const activeOption = options.find(o => o.id === selectedOption);

  return (
    <GoldInstitutionalFrame label={label} status={status}>
      <div className="w-full flex flex-col gap-4 items-center min-h-[480px] justify-between">
        
        {/* Custom chart preview */}
        {chartPreview}

        {/* Question */}
        <p className="text-xs font-bold text-[#1C160C] text-center whitespace-normal break-words w-full leading-normal">
          {question}
        </p>

        {/* Options */}
        <div className="w-full flex flex-col gap-2 shrink-0">
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt.id)}
              disabled={showFeedback}
              className={cn(
                "w-full text-left p-3 rounded-xl border text-[11px] font-bold transition-all flex items-start gap-3 cursor-pointer whitespace-normal break-words leading-snug",
                selectedOption === opt.id
                  ? opt.isCorrect
                    ? "bg-emerald-50 border-emerald-500 text-emerald-950 shadow-sm"
                    : "bg-rose-50 border-rose-500 text-rose-950 shadow-sm"
                  : "bg-white border-[#E6DFD5] text-[#1C160C] hover:bg-amber-100 hover:border-amber-400"
              )}
            >
              <span className={cn(
                "w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-black shrink-0",
                selectedOption === opt.id 
                  ? opt.isCorrect ? "bg-[#1C160C] border-[#1C160C] text-white" : "bg-rose-500 border-rose-500 text-white"
                  : "border-amber-300 text-amber-800"
              )}>
                {opt.id}
              </span>
              <span className="min-w-0 flex-1">{opt.text}</span>
            </button>
          ))}
        </div>

        {/* Feedback Panel */}
        {showFeedback && activeOption && (
          <div className={cn(
            "w-full p-4 rounded-xl border flex gap-3 shrink-0 animate-fadeIn transition-all text-left",
            activeOption.isCorrect ? "bg-emerald-50 border-emerald-200 text-emerald-950" : "bg-rose-50 border-rose-200 text-rose-950"
          )}>
            {activeOption.isCorrect ? (
              <CheckCircle2 className="text-emerald-600 shrink-0" size={18} />
            ) : (
              <XCircle className="text-rose-500 shrink-0" size={18} />
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[8px] font-mono font-black uppercase tracking-widest text-[#1C160C]">
                  {activeOption.isCorrect ? "VERDICT: CORRECT" : "VERDICT: INCORRECT"}
                </span>
                {!activeOption.isCorrect && (
                  <button 
                    onClick={handleReset}
                    className="text-[8px] font-black uppercase text-rose-700 hover:text-rose-950 flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw size={8} /> Retry
                  </button>
                )}
              </div>
              <p className="text-xs leading-relaxed whitespace-normal break-words">{activeOption.feedback}</p>
            </div>
          </div>
        )}
      </div>
    </GoldInstitutionalFrame>
  );
};

/**
 * Gold Debrief Dashboard Recap component
 */
interface DebriefCard {
  id: string;
  title: string;
  habit: string;
  desc: string;
  icon?: React.ComponentType<{ className?: string; size?: number }>;
}

export const GoldDebriefDashboard = ({
  cards,
  label = "Gold Reading Lab Wrap-Up",
  status = "DRILL COMPLETE",
  desc = "Interactive Debrief: Select a coordinate layer below to view the core Gold-reading habit."
}: {
  cards: DebriefCard[];
  label?: string;
  status?: string;
  desc?: string;
}) => {
  const [selectedKey, setSelectedKey] = useState<string>(cards[0].id);
  const active = cards.find(k => k.id === selectedKey) || cards[0];
  const IconComponent = active.icon;

  return (
    <GoldInstitutionalFrame label={label} status={status}>
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-amber-900 max-w-xl text-center leading-relaxed whitespace-normal break-words font-medium">
          {desc}
        </p>

        {/* Dashboard Grid */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2">
          {cards.map((item) => {
            const isSelected = item.id === selectedKey;
            const ItemIcon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedKey(item.id)}
                className={cn(
                  "p-3 rounded-xl border flex flex-col items-center gap-2 text-center transition-all cursor-pointer justify-center min-h-[85px]",
                  isSelected 
                    ? "bg-[#1C160C] border-[#1C160C] text-white shadow-md scale-105" 
                    : "bg-white border-[#E6DFD5] text-amber-950 hover:bg-amber-100"
                )}
              >
                {ItemIcon && <ItemIcon size={16} className={isSelected ? "text-amber-400" : "text-amber-800"} />}
                <span className="text-[8px] font-black uppercase tracking-tight leading-none break-words max-w-full">
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detailed Recap Panel */}
        <div className="w-full bg-[#1C160C] rounded-2xl p-5 border border-amber-950 text-white flex flex-col gap-3 relative overflow-hidden text-left">
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#F59E0B_1px,transparent_1px)] bg-[length:14px_14px]" />
          
          <div className="flex items-center gap-3 relative z-10 border-b border-amber-950 pb-3">
            {IconComponent && <IconComponent size={20} className="text-amber-400 shrink-0" />}
            <div>
              <h5 className="text-xs font-mono font-black text-amber-500 uppercase tracking-widest leading-none mb-1">
                {active.title}
              </h5>
              <p className="text-xs font-black text-white whitespace-normal break-words leading-tight uppercase">
                {active.habit}
              </p>
            </div>
          </div>

          <p className="text-xs text-amber-200 leading-relaxed whitespace-normal break-words relative z-10">
            {active.desc}
          </p>
        </div>
      </div>
    </GoldInstitutionalFrame>
  );
};
