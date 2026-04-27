"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { 
  Target, Lightbulb, AlertCircle, Search, BookOpen, 
  ListChecks, CheckCircle2, ShieldAlert, HelpCircle, 
  Gavel, Scale, XCircle, PlayCircle, ClipboardCheck,
  ChevronDown, ChevronUp, MapPin, Info, ArrowRight
} from "lucide-react";

interface LessonBlockProps {
  type: string;
  content: string;
  onLaunchScenario?: () => void;
}

const BLOCK_CONFIG: Record<string, { icon: any; label: string; color: string; bgColor: string; borderColor: string }> = {
  "skill-target": { 
    icon: Target, 
    label: "SKILL TARGET", 
    color: "text-blue-400", 
    bgColor: "bg-blue-500/5", 
    borderColor: "border-blue-500/20" 
  },
  "simple-meaning": { 
    icon: Lightbulb, 
    label: "SIMPLE MEANING", 
    color: "text-amber-400", 
    bgColor: "bg-amber-500/5", 
    borderColor: "border-amber-500/20" 
  },
  "why-it-matters": { 
    icon: AlertCircle, 
    label: "WHY IT MATTERS", 
    color: "text-indigo-400", 
    bgColor: "bg-indigo-500/5", 
    borderColor: "border-indigo-500/20" 
  },
  "look-for": { 
    icon: Search, 
    label: "CHART LOOK-FOR", 
    color: "text-emerald-400", 
    bgColor: "bg-emerald-500/5", 
    borderColor: "border-emerald-500/20" 
  },
  "key-terms": { 
    icon: BookOpen, 
    label: "KEY TERMS", 
    color: "text-slate-300", 
    bgColor: "bg-slate-800/20", 
    borderColor: "border-slate-700" 
  },
  "steps": { 
    icon: ListChecks, 
    label: "STEP-BY-STEP RECOGNITION", 
    color: "text-brand-400", 
    bgColor: "bg-brand-500/5", 
    borderColor: "border-brand-500/20" 
  },
  "example": { 
    icon: CheckCircle2, 
    label: "VALID EXAMPLE", 
    color: "text-emerald-400", 
    bgColor: "bg-emerald-500/5", 
    borderColor: "border-emerald-500/20" 
  },
  "trap": { 
    icon: ShieldAlert, 
    label: "TRAP ALERT", 
    color: "text-rose-400", 
    bgColor: "bg-rose-500/5", 
    borderColor: "border-rose-500/30" 
  },
  "quick-check": { 
    icon: HelpCircle, 
    label: "QUICK CHECK", 
    color: "text-amber-500", 
    bgColor: "bg-amber-500/5", 
    borderColor: "border-amber-500/20" 
  },
  "decision-rule": { 
    icon: Gavel, 
    label: "DECISION RULE", 
    color: "text-blue-400", 
    bgColor: "bg-blue-500/5", 
    borderColor: "border-blue-500/20" 
  },
  "risk-logic": { 
    icon: Scale, 
    label: "RISK / INVALIDATION LOGIC", 
    color: "text-slate-400", 
    bgColor: "bg-slate-800/10", 
    borderColor: "border-slate-700" 
  },
  "common-mistakes": { 
    icon: XCircle, 
    label: "COMMON MISTAKES", 
    color: "text-rose-400", 
    bgColor: "bg-rose-500/5", 
    borderColor: "border-rose-500/20" 
  },
  "task-prep": { 
    icon: PlayCircle, 
    label: "FINAL TASK PREPARATION", 
    color: "text-brand-400", 
    bgColor: "bg-brand-500/5", 
    borderColor: "border-brand-500/30" 
  },
  "summary": { 
    icon: ClipboardCheck, 
    label: "MODULE SUMMARY", 
    color: "text-slate-300", 
    bgColor: "bg-slate-800/20", 
    borderColor: "border-slate-700" 
  },
  "choice": {
    icon: HelpCircle,
    label: "PRACTICE CHOICE",
    color: "text-blue-400",
    bgColor: "bg-blue-500/5",
    borderColor: "border-blue-500/20"
  },
  "identify": {
    icon: Target,
    label: "PRACTICE IDENTIFY",
    color: "text-purple-400",
    bgColor: "bg-purple-500/5",
    borderColor: "border-purple-500/20"
  }
};

const LessonBlock = ({ type, content, onLaunchScenario }: { type: string, content: string, onLaunchScenario?: () => void }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [choiceSelected, setChoiceSelected] = useState<number | null>(null);
  const [identifyStatus, setIdentifyStatus] = useState<{ x: number; y: number; success: boolean | null } | null>(null);

  const parseMetadata = (rawContent: string) => {
    const lines = rawContent.split('\n');
    const metadata: Record<string, any> = {};
    let currentKey = '';
    let currentVal = '';

    lines.forEach(line => {
      const match = line.match(/^([a-zA-Z]+):\s*(.*)/);
      if (match) {
        if (currentKey) metadata[currentKey] = currentVal.trim();
        currentKey = match[1];
        currentVal = match[2];
      } else if (currentKey) {
        currentVal += ' ' + line.trim();
      }
    });
    if (currentKey) metadata[currentKey] = currentVal.trim();
    
    // Parse arrays
    ['lookFor', 'options'].forEach(key => {
      if (metadata[key]) {
        try {
          metadata[key] = JSON.parse(metadata[key].replace(/'/g, '"'));
        } catch (e) {
          metadata[key] = metadata[key].replace(/[\[\]]/g, '').split(',').map((s: string) => s.trim().replace(/^"|"$/g, ''));
        }
      }
    });
    
    return metadata;
  };

  const config = BLOCK_CONFIG[type] || { icon: Info, label: type.toUpperCase(), color: 'text-slate-400', bgColor: 'bg-slate-800/20', borderColor: 'border-slate-700' };

  if (type === 'visual') {
    const meta = parseMetadata(content);
    return (
      <div className="my-10 space-y-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1.5 h-6 bg-brand-500 rounded-full" />
          <h3 className="text-xl font-bold text-white tracking-tight">{meta.title}</h3>
        </div>
        <div className="group overflow-hidden rounded-xl border border-white/10 bg-slate-900/50 shadow-2xl">
          <div className="relative overflow-hidden">
            {meta.image ? (
              <img 
                src={meta.image} 
                alt={meta.title || "Visual content"} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            ) : (
              <div className="aspect-video bg-slate-900 flex flex-col items-center justify-center text-slate-500 gap-2">
                <AlertCircle className="w-8 h-8 opacity-20" />
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-30">Image Reference Missing</span>
              </div>
            )}
          </div>
          {meta.caption && (
            <div className="p-5 bg-slate-900/80 border-t border-white/10">
              <p className="text-sm text-slate-300 italic leading-relaxed">
                <span className="text-brand-400 font-semibold not-italic mr-2">Note:</span>
                {meta.caption}
              </p>
            </div>
          )}
        </div>
        {meta.lookFor && (
          <div className="bg-slate-900/80 border-l-4 border-amber-500/50 p-6 rounded-r-xl">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest block mb-4">Tactical Checklist</span>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {meta.lookFor.map((item: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  if (type === 'visual-compare') {
    const meta = parseMetadata(content);
    const leftImg = meta.leftImage || meta.imageLeft;
    const rightImg = meta.rightImage || meta.imageRight;
    const leftLbl = meta.leftLabel || meta.labelLeft;
    const rightLbl = meta.rightLabel || meta.labelRight;
    return (
      <div className="my-12 space-y-6">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-white mb-2">{meta.title}</h3>
          {meta.caption && <p className="text-slate-400 text-sm italic max-w-xl mx-auto">{meta.caption}</p>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="relative rounded-xl overflow-hidden border border-emerald-500/30 bg-slate-900 shadow-lg">
              {leftImg ? (
                <img src={leftImg} alt={leftLbl || 'Valid Example'} className="w-full h-auto" />
              ) : (
                <div className="h-48 flex items-center justify-center text-slate-600 text-sm">No image</div>
              )}
              <div className="absolute top-3 left-3 px-3 py-1 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest rounded-md shadow-lg">
                {leftLbl || 'VALID'}
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="relative rounded-xl overflow-hidden border border-rose-500/30 bg-slate-900 shadow-lg">
              {rightImg ? (
                <img src={rightImg} alt={rightLbl || 'Invalid Example'} className="w-full h-auto" />
              ) : (
                <div className="h-48 flex items-center justify-center text-slate-600 text-sm">No image</div>
              )}
              <div className="absolute top-3 left-3 px-3 py-1 bg-rose-500 text-white text-[10px] font-black uppercase tracking-widest rounded-md shadow-lg">
                {rightLbl || 'INVALID'}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'choice') {
    const meta = parseMetadata(content);
    const options = meta.options || [];
    const correctIdx = parseInt(meta.correctIndex || '0');
    const isCorrect = choiceSelected === correctIdx;
    
    return (
      <div className={cn("my-8 rounded-[1.5rem] border overflow-hidden bg-blue-500/5 border-blue-500/20")}>
        <div className="px-6 py-4 border-b border-inherit flex items-center gap-3">
          <div className="p-2 rounded-lg bg-white/5 text-blue-400">
            <HelpCircle size={18} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">PRACTICE CHOICE</span>
        </div>
        <div className="p-8 space-y-6">
          <p className="text-white font-bold">{meta.question || "What is your decision?"}</p>
          <div className="space-y-3">
            {options.map((opt: string, i: number) => (
              <button
                key={i}
                disabled={choiceSelected !== null}
                onClick={() => setChoiceSelected(i)}
                className={cn(
                  "w-full text-left px-5 py-4 rounded-xl border text-sm transition-all flex items-center justify-between group",
                  choiceSelected === null 
                    ? "bg-white/5 border-white/10 hover:border-brand-500/50 hover:bg-white/10"
                    : i === correctIdx 
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                      : i === choiceSelected
                        ? "bg-rose-500/10 border-rose-500/30 text-rose-400"
                        : "bg-white/5 border-white/10 opacity-50"
                )}
              >
                {opt}
                {choiceSelected !== null && i === correctIdx && <CheckCircle2 size={16} />}
                {choiceSelected === i && i !== correctIdx && <XCircle size={16} />}
              </button>
            ))}
          </div>
          {choiceSelected !== null && (
            <div className={cn(
              "p-6 rounded-2xl border animate-in fade-in slide-in-from-top-2 duration-300",
              isCorrect ? "bg-emerald-500/5 border-emerald-500/20" : "bg-rose-500/5 border-rose-500/20"
            )}>
              <div className="flex items-center gap-2 text-xs font-bold mb-2">
                {isCorrect ? <CheckCircle2 size={14} className="text-emerald-400" /> : <ShieldAlert size={14} className="text-rose-400" />}
                {isCorrect ? "CORRECT" : "NOT QUITE"}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed italic">
                {isCorrect ? (meta.correctFeedback || "Great job! You understood the logic.") : (meta.incorrectFeedback || "Review the lesson and try again.")}
              </p>
              {!isCorrect && (
                <button 
                  onClick={() => setChoiceSelected(null)}
                  className="mt-4 text-[10px] font-bold text-slate-500 hover:text-slate-300"
                >
                  Try Again
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  if (type === 'identify') {
    const meta = parseMetadata(content);
    const target = {
      xMin: parseFloat(meta.xMin || '0'),
      xMax: parseFloat(meta.xMax || '100'),
      yMin: parseFloat(meta.yMin || '0'),
      yMax: parseFloat(meta.yMax || '100')
    };

    const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (identifyStatus?.success) return;
      
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      const isHit = x >= target.xMin && x <= target.xMax && y >= target.yMin && y <= target.yMax;
      setIdentifyStatus({ x, y, success: isHit });
    };

    return (
      <div className="my-8 rounded-[1.5rem] border overflow-hidden bg-purple-500/5 border-purple-500/20">
        <div className="px-6 py-4 border-b border-inherit flex items-center gap-3">
          <div className="p-2 rounded-lg bg-white/5 text-purple-400">
            <Target size={18} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400">PRACTICE IDENTIFY</span>
        </div>
        <div className="p-8 space-y-6">
          <div className="space-y-2">
            <p className="text-white font-bold text-lg">{meta.question || "Find the target"}</p>
            <p className="text-slate-400 text-sm">Click the exact area on the chart below.</p>
          </div>
          <div className="relative group cursor-crosshair rounded-xl overflow-hidden border border-white/10" onClick={handleImageClick}>
            {meta.image ? (
              <img src={meta.image} alt="Identify Task" className="w-full h-auto select-none pointer-events-none" />
            ) : (
              <div className="h-64 bg-slate-900 flex items-center justify-center text-slate-600">No task image provided</div>
            )}
            {identifyStatus && (
              <div 
                className={cn(
                  "absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 flex items-center justify-center animate-in zoom-in duration-200",
                  identifyStatus.success ? "bg-emerald-500/20 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" : "bg-rose-500/20 border-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.5)]"
                )}
                style={{ left: `${identifyStatus.x}%`, top: `${identifyStatus.y}%` }}
              >
                {identifyStatus.success ? <CheckCircle2 size={16} className="text-emerald-400" /> : <XCircle size={16} className="text-rose-400" />}
              </div>
            )}
          </div>
          {identifyStatus && (
            <div className={cn(
              "p-6 rounded-2xl border animate-in fade-in slide-in-from-top-2 duration-300",
              identifyStatus.success ? "bg-emerald-500/5 border-emerald-500/20" : "bg-rose-500/5 border-rose-500/20"
            )}>
              <div className="flex items-center gap-2 text-xs font-bold mb-2">
                {identifyStatus.success ? <CheckCircle2 size={14} className="text-emerald-400" /> : <ShieldAlert size={14} className="text-rose-400" />}
                {identifyStatus.success ? "FOUND IT" : "NOT QUITE"}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed italic">
                {identifyStatus.success ? (meta.successFeedback || "Excellent eye for detail.") : (meta.failFeedback || "Try looking at the wicks or the specific close price.")}
              </p>
              {!identifyStatus.success && (
                <button 
                  onClick={() => setIdentifyStatus(null)}
                  className="mt-4 text-[10px] font-bold text-slate-500 hover:text-slate-300"
                >
                  Try Again
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  if (type === 'launch') {
    return (
      <div className="mt-12 mb-16 p-10 rounded-2xl border-2 border-dashed border-brand-500/30 bg-brand-500/5 flex flex-col items-center text-center group">
        <div className="w-20 h-20 rounded-full bg-brand-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <Target className="w-10 h-10 text-brand-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Mastery Check: Final Mission</h3>
        <p className="text-slate-400 max-w-md mb-8 leading-relaxed">
          The practice phase is complete. Now, apply your logic to a formal assessment to confirm your understanding.
        </p>
        <button 
          onClick={onLaunchScenario}
          className="px-10 py-4 bg-brand-500 hover:bg-brand-400 text-white font-bold rounded-xl transition-all shadow-xl shadow-brand-500/20 active:scale-95 flex items-center gap-3 text-lg"
        >
          LAUNCH MASTERY CHECK
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    );
  }

  const Icon = config.icon;

  return (
    <div className={cn(
      "my-8 rounded-[1.5rem] border overflow-hidden transition-all duration-300",
      config.bgColor,
      config.borderColor,
      type === "trap" && "shadow-[0_0_30px_rgba(244,63,94,0.05)]",
      type === "decision-rule" && "shadow-[0_0_30px_rgba(59,130,246,0.05)]"
    )}>
      <div className="px-6 py-4 border-b border-inherit flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={cn("p-2 rounded-lg bg-white/5", config.color)}>
            <Icon size={18} />
          </div>
          <span className={cn("text-[10px] font-bold uppercase tracking-[0.2em]", config.color)}>
            {config.label}
          </span>
        </div>
      </div>

      <div className="p-8">
        {type === "quick-check" ? (
          <div className="space-y-6">
            <div className="text-[var(--color-text-secondary)] leading-relaxed">
              {content.split(/\n\*(Answer:.*)\*/s)[0]}
            </div>
            
            {!isRevealed ? (
              <button 
                onClick={() => setIsRevealed(true)}
                className="flex items-center gap-2 px-5 py-2.5 bg-amber-500/10 text-amber-500 border border-amber-500/20 rounded-xl text-xs font-bold hover:bg-amber-500/20 transition-all"
              >
                Reveal Logic <ChevronDown size={14} />
              </button>
            ) : (
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 animate-in fade-in slide-in-from-top-2 duration-500">
                <div className="flex items-center gap-2 text-xs font-bold text-white mb-3">
                  <Lightbulb size={14} className="text-amber-400" /> RATIONALE
                </div>
                <div className="text-xs text-[var(--color-text-muted)] leading-relaxed italic">
                  {content.match(/\*Answer:(.*)\*/s)?.[1] || "Check the next module for the answer."}
                </div>
                <button 
                  onClick={() => setIsRevealed(false)}
                  className="mt-4 text-[10px] font-bold text-slate-500 hover:text-slate-300 flex items-center gap-1"
                >
                  Hide <ChevronUp size={12} />
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="prose prose-invert max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </div>
        )}

        {/* Optional Action Button for Task Prep */}
        {type === "task-prep" && onLaunchScenario && (
          <div className="mt-8 pt-8 border-t border-inherit">
            <button 
              onClick={onLaunchScenario}
              className="flex items-center gap-3 px-6 py-3.5 bg-[var(--color-brand-500)] text-white rounded-xl text-xs font-bold hover:bg-[var(--color-brand-400)] transition-all shadow-glow-blue group"
            >
              LAUNCH MASTERY CHECK <MapPin size={16} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

interface MarkdownRendererProps {
  content: string;
  className?: string;
  onLaunchScenario?: () => void;
}

export function MarkdownRenderer({ content, className, onLaunchScenario }: MarkdownRendererProps) {
  // Parse content for ::: blocks
  const parts = content.split(/(:::[a-z-]+\n[\s\S]*?\n:::)/g);

  return (
    <div className={cn("markdown-content prose prose-invert max-w-none", className)}>
      {parts.map((part, index) => {
        if (part.startsWith(":::")) {
          const match = part.match(/:::([a-z-]+)\n([\s\S]*?)\n:::/);
          if (match) {
            return (
              <LessonBlock 
                key={index} 
                type={match[1]} 
                content={match[2]} 
                onLaunchScenario={onLaunchScenario}
              />
            );
          }
        }
        
        if (!part.trim()) return null;

        return (
          <ReactMarkdown 
            key={index}
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ className, ...props }) => (
                <h1 className={cn("text-3xl font-bold text-white mb-6 border-b border-[var(--color-border-default)] pb-4", className)} {...props} />
              ),
              h2: ({ className, ...props }) => (
                <h2 className={cn("text-2xl font-bold text-[var(--color-brand-400)] mt-10 mb-4", className)} {...props} />
              ),
              h3: ({ className, ...props }) => (
                <h3 className={cn("text-xl font-bold text-white mt-8 mb-2", className)} {...props} />
              ),
              p: ({ className, ...props }) => (
                <p className={cn("text-[var(--color-text-secondary)] leading-relaxed mb-6", className)} {...props} />
              ),
              ul: ({ className, ...props }) => (
                <ul className={cn("list-disc list-inside space-y-3 mb-8 text-[var(--color-text-secondary)]", className)} {...props} />
              ),
              li: ({ className, ...props }) => (
                <li className={cn("marker:text-[var(--color-brand-500)]", className)} {...props} />
              ),
              blockquote: ({ className, ...props }) => (
                <blockquote className={cn("border-l-4 border-[var(--color-brand-500)] bg-[var(--color-surface-tertiary)] p-6 rounded-r-xl italic my-8", className)} {...props} />
              ),
              strong: ({ className, ...props }) => (
                <strong className={cn("text-white font-bold", className)} {...props} />
              ),
              code: ({ className, ...props }) => (
                <code className={cn("bg-white/10 px-1.5 py-0.5 rounded text-sm text-[var(--color-brand-300)] font-mono", className)} {...props} />
              ),
            }}
          >
            {part}
          </ReactMarkdown>
        );
      })}
    </div>
  );
}
