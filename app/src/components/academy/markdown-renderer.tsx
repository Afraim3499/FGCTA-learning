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
    color: "text-blue-600", 
    bgColor: "bg-blue-50", 
    borderColor: "border-blue-100" 
  },
  "simple-meaning": { 
    icon: Lightbulb, 
    label: "SIMPLE MEANING", 
    color: "text-amber-600", 
    bgColor: "bg-amber-50", 
    borderColor: "border-amber-100" 
  },
  "why-it-matters": { 
    icon: AlertCircle, 
    label: "INSIGHT", 
    color: "text-[var(--ln-teal-500)]", 
    bgColor: "bg-[var(--ln-teal-soft)]", 
    borderColor: "border-[var(--ln-teal-500)]/10" 
  },
  "look-for": { 
    icon: Search, 
    label: "LOOK FOR", 
    color: "text-emerald-600", 
    bgColor: "bg-emerald-50", 
    borderColor: "border-emerald-100" 
  },
  "key-terms": { 
    icon: BookOpen, 
    label: "KEY TERMS", 
    color: "text-slate-600", 
    bgColor: "bg-slate-50", 
    borderColor: "border-slate-100" 
  },
  "steps": { 
    icon: ListChecks, 
    label: "ACTION STEPS", 
    color: "text-[var(--ln-teal-500)]", 
    bgColor: "bg-[var(--ln-teal-soft)]", 
    borderColor: "border-[var(--ln-teal-500)]/10" 
  },
  "example": { 
    icon: CheckCircle2, 
    label: "VALID EXAMPLE", 
    color: "text-emerald-600", 
    bgColor: "bg-emerald-50", 
    borderColor: "border-emerald-100" 
  },
  "trap": { 
    icon: ShieldAlert, 
    label: "CAUTION", 
    color: "text-amber-600", 
    bgColor: "bg-amber-50", 
    borderColor: "border-amber-200" 
  },
  "quick-check": { 
    icon: HelpCircle, 
    label: "QUICK CHECK", 
    color: "text-[var(--ln-teal-500)]", 
    bgColor: "bg-[var(--ln-teal-soft)]", 
    borderColor: "border-[var(--ln-teal-500)]/20" 
  },
  "decision-rule": { 
    icon: Gavel, 
    label: "DECISION RULE", 
    color: "text-blue-600", 
    bgColor: "bg-blue-50", 
    borderColor: "border-blue-100" 
  },
  "risk-logic": { 
    icon: Scale, 
    label: "RISK LOGIC", 
    color: "text-slate-500", 
    bgColor: "bg-slate-50", 
    borderColor: "border-slate-100" 
  },
  "common-mistakes": { 
    icon: XCircle, 
    label: "COMMON ERRORS", 
    color: "text-rose-600", 
    bgColor: "bg-rose-50", 
    borderColor: "border-rose-100" 
  },
  "task-prep": { 
    icon: PlayCircle, 
    label: "PRACTICE PREP", 
    color: "text-[var(--ln-teal-500)]", 
    bgColor: "bg-[var(--ln-teal-soft)]", 
    borderColor: "border-[var(--ln-teal-500)]/20" 
  },
  "summary": { 
    icon: ClipboardCheck, 
    label: "MODULE SUMMARY", 
    color: "text-slate-600", 
    bgColor: "bg-slate-50", 
    borderColor: "border-slate-200" 
  }
};

const LessonBlock = ({ type, content, onLaunchScenario }: { type: string, content: string, onLaunchScenario?: () => void }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [choiceSelected, setChoiceSelected] = useState<number | null>(null);
  const [identifyStatus, setIdentifyStatus] = useState<{ x: number; y: number; success: boolean | null } | null>(null);

  const parseMetadata = (rawContent: string) => {
    const lines = rawContent.split(/\r?\n/);
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

  const config = BLOCK_CONFIG[type] || { icon: Info, label: type.toUpperCase(), color: 'text-slate-500', bgColor: 'bg-slate-50', borderColor: 'border-slate-200' };

  if (type === 'visual') {
    const meta = parseMetadata(content);
    return (
      <div className="my-10 space-y-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1 h-5 bg-[var(--ln-teal-500)] rounded-full" />
          <h3 className="text-lg font-bold text-[var(--ln-navy-900)] tracking-tight">{meta.title}</h3>
        </div>
        
        {meta.image && (
          <div className="group rounded-2xl border border-[var(--ln-border)] bg-white shadow-md">
            <div className="relative bg-slate-50/50 p-2 rounded-t-2xl">
              <img 
                src={meta.image} 
                alt={meta.title || "Visual content"} 
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
            {meta.caption && (
              <div className="p-4 bg-slate-50/50 border-t border-[var(--ln-border)]">
                <p className="text-xs text-[var(--ln-text-secondary)] italic leading-relaxed">
                  <span className="text-[var(--ln-teal-500)] font-bold not-italic mr-2">Context:</span>
                  {meta.caption}
                </p>
              </div>
            )}
          </div>
        )}

        {meta.lookFor && (
          <div className="bg-slate-50 border-l-4 border-amber-500/50 p-6 rounded-r-2xl">
            <span className="text-[10px] font-extrabold text-amber-600 uppercase tracking-widest block mb-4">Observation Points</span>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {meta.lookFor.map((item: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3 text-xs text-slate-600 font-medium">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500/40 shrink-0" />
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
          <h3 className="text-lg font-bold text-[var(--ln-navy-900)] mb-1">{meta.title}</h3>
          {meta.caption && <p className="text-slate-500 text-xs italic max-w-xl mx-auto">{meta.caption}</p>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="relative rounded-2xl border border-emerald-500/20 bg-white shadow-sm p-2">
              {leftImg ? (
                <img src={leftImg} alt={leftLbl || 'Valid'} className="w-full h-auto object-contain rounded-xl" />
              ) : (
                <div className="h-48 flex items-center justify-center text-slate-300 text-xs">No image</div>
              )}
              <div className="absolute top-4 left-4 px-2.5 py-1 bg-emerald-500 text-white text-[9px] font-extrabold uppercase tracking-widest rounded-lg shadow-md">
                {leftLbl || 'VALID'}
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="relative rounded-2xl border border-rose-500/20 bg-white shadow-sm p-2">
              {rightImg ? (
                <img src={rightImg} alt={rightLbl || 'Invalid'} className="w-full h-auto object-contain rounded-xl" />
              ) : (
                <div className="h-48 flex items-center justify-center text-slate-300 text-xs">No image</div>
              )}
              <div className="absolute top-4 left-4 px-2.5 py-1 bg-rose-500 text-white text-[9px] font-extrabold uppercase tracking-widest rounded-lg shadow-md">
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
      <div className={cn("my-8 rounded-3xl border overflow-hidden bg-white border-[var(--ln-border)] shadow-sm")}>
        <div className="px-6 py-4 border-b border-inherit bg-slate-50/50 flex items-center gap-3">
          <div className="p-2 rounded-lg bg-white text-blue-500 shadow-sm border border-slate-100">
            <HelpCircle size={16} />
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600">Knowledge Check</span>
        </div>
        <div className="p-8 space-y-6">
          <p className="text-[var(--ln-navy-900)] font-bold">{meta.question || "What is your decision?"}</p>
          <div className="space-y-2.5">
            {options.map((opt: string, i: number) => (
              <button
                key={i}
                disabled={choiceSelected !== null}
                onClick={() => setChoiceSelected(i)}
                className={cn(
                  "w-full text-left px-5 py-3.5 rounded-2xl border text-xs font-medium transition-all flex items-center justify-between group",
                  choiceSelected === null 
                    ? "bg-white border-slate-200 hover:border-[var(--ln-teal-500)] hover:bg-slate-50"
                    : i === correctIdx 
                      ? "bg-emerald-50 border-emerald-500/30 text-emerald-700"
                      : i === choiceSelected
                        ? "bg-rose-50 border-rose-500/30 text-rose-700"
                        : "bg-white border-slate-100 opacity-50"
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
              isCorrect ? "bg-emerald-50 border-emerald-100" : "bg-rose-50 border-rose-100"
            )}>
              <div className="flex items-center gap-2 text-[10px] font-extrabold mb-2 uppercase tracking-tight">
                {isCorrect ? <CheckCircle2 size={14} className="text-emerald-600" /> : <ShieldAlert size={14} className="text-rose-600" />}
                {isCorrect ? "Correct Solution" : "Review Concepts"}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {isCorrect ? (meta.correctFeedback || "Excellent. Your understanding of this logic is correct.") : (meta.incorrectFeedback || "Review the key indicators before attempting again.")}
              </p>
              {!isCorrect && (
                <button 
                  onClick={() => setChoiceSelected(null)}
                  className="mt-4 text-[10px] font-extrabold text-slate-400 hover:text-[var(--ln-navy-900)] uppercase tracking-widest transition-colors"
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
      <div className="my-8 rounded-3xl border overflow-hidden bg-white border-[var(--ln-border)] shadow-sm">
        <div className="px-6 py-4 border-b border-inherit bg-slate-50/50 flex items-center gap-3">
          <div className="p-2 rounded-lg bg-white text-purple-600 shadow-sm border border-slate-100">
            <Target size={16} />
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-600">Visual Identification</span>
        </div>
        <div className="p-8 space-y-6">
          <div className="space-y-1">
            <p className="text-[var(--ln-navy-900)] font-bold text-lg">{meta.question || "Find the target"}</p>
            <p className="text-slate-500 text-xs font-medium">Analyze the chart and click the identified area.</p>
          </div>
          <div className="relative group cursor-crosshair rounded-2xl overflow-hidden border border-slate-200" onClick={handleImageClick}>
            {meta.image ? (
              <img src={meta.image} alt="Identify Task" className="w-full h-auto select-none pointer-events-none" />
            ) : (
              <div className="h-64 bg-slate-50 flex items-center justify-center text-slate-300">No chart image provided</div>
            )}
            {identifyStatus && (
              <div 
                className={cn(
                  "absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 flex items-center justify-center animate-in zoom-in duration-200 shadow-lg",
                  identifyStatus.success ? "bg-emerald-500/20 border-emerald-500" : "bg-rose-500/20 border-rose-500"
                )}
                style={{ left: `${identifyStatus.x}%`, top: `${identifyStatus.y}%` }}
              >
                {identifyStatus.success ? <CheckCircle2 size={16} className="text-emerald-600" /> : <XCircle size={16} className="text-rose-600" />}
              </div>
            )}
          </div>
          {identifyStatus && (
            <div className={cn(
              "p-6 rounded-2xl border animate-in fade-in slide-in-from-top-2 duration-300",
              identifyStatus.success ? "bg-emerald-50 border-emerald-100" : "bg-rose-50 border-rose-100"
            )}>
              <div className="flex items-center gap-2 text-[10px] font-extrabold mb-2 uppercase tracking-tight">
                {identifyStatus.success ? <CheckCircle2 size={14} className="text-emerald-600" /> : <ShieldAlert size={14} className="text-rose-600" />}
                {identifyStatus.success ? "Target Verified" : "Incorrect Area"}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {identifyStatus.success ? (meta.successFeedback || "Perfect identification.") : (meta.failFeedback || "Review the technical requirements and try again.")}
              </p>
              {!identifyStatus.success && (
                <button 
                  onClick={() => setIdentifyStatus(null)}
                  className="mt-4 text-[10px] font-extrabold text-slate-400 hover:text-[var(--ln-navy-900)] uppercase tracking-widest transition-colors"
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
      <div className="mt-12 mb-16 p-10 rounded-3xl border border-[var(--ln-border)] bg-slate-50 flex flex-col items-center text-center group shadow-sm">
        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6 shadow-md border border-slate-100 group-hover:scale-110 transition-transform">
          <Target className="w-10 h-10 text-[var(--ln-teal-500)]" />
        </div>
        <h3 className="text-2xl font-extrabold text-[var(--ln-navy-900)] mb-3 uppercase tracking-tight">Knowledge Test</h3>
        <p className="text-[var(--ln-text-secondary)] font-medium max-w-md mb-8 leading-relaxed">
          Final practice phase. Apply your knowledge to a guided mission to confirm your learning progress.
        </p>
        <button 
          onClick={onLaunchScenario}
          className="px-10 py-4 bg-[var(--ln-teal-500)] hover:bg-[var(--ln-teal-600)] text-white font-extrabold rounded-2xl transition-all shadow-lg shadow-[var(--ln-teal-500)]/20 active:scale-95 flex items-center gap-3 text-lg uppercase tracking-widest"
        >
          Start Test
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
            <div className="text-[var(--ln-text-secondary)] font-medium leading-relaxed">
              {content.split(/\n\*(Answer:.*)\*/s)[0]}
            </div>
            
            {!isRevealed ? (
              <button 
                onClick={() => setIsRevealed(true)}
                className="flex items-center gap-2 px-5 py-2.5 bg-[var(--ln-teal-soft)] text-[var(--ln-teal-500)] border border-[var(--ln-teal-500)]/20 rounded-xl text-[10px] font-extrabold uppercase tracking-widest hover:bg-[var(--ln-teal-500)]/10 transition-all"
              >
                Reveal Logic <ChevronDown size={14} />
              </button>
            ) : (
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 animate-in fade-in slide-in-from-top-2 duration-500">
                <div className="flex items-center gap-2 text-[10px] font-extrabold text-[var(--ln-navy-900)] mb-3 uppercase tracking-tight">
                  <Lightbulb size={14} className="text-amber-500" /> Rationale
                </div>
                <div className="text-xs text-slate-500 leading-relaxed font-medium">
                  {content.match(/\*Answer:(.*)\*/s)?.[1] || "Reference your roadmap notes for the solution."}
                </div>
                <button 
                  onClick={() => setIsRevealed(false)}
                  className="mt-4 text-[10px] font-extrabold text-slate-300 hover:text-slate-500 flex items-center gap-1 uppercase tracking-widest"
                >
                  Hide <ChevronUp size={12} />
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="markdown-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </div>
        )}

        {/* Optional Action Button for Task Prep */}
        {type === "task-prep" && onLaunchScenario && (
          <div className="mt-8 pt-8 border-t border-inherit">
            <button 
              onClick={onLaunchScenario}
              className="flex items-center gap-3 px-6 py-3.5 bg-[var(--ln-teal-500)] text-white rounded-2xl text-[10px] font-extrabold tracking-widest uppercase hover:bg-[var(--ln-teal-600)] transition-all shadow-lg shadow-[var(--ln-teal-500)]/20 group"
            >
              Start Practice <MapPin size={16} className="group-hover:scale-110 transition-transform" />
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
  const parts = content.split(/(:::[a-z-]+\s*[\r\n]+[\s\S]*?[\r\n]+\s*:::)/g);

  return (
    <div className={cn("markdown-content max-w-none", className)}>
      {parts.map((part, index) => {
        if (part.startsWith(":::")) {
          const match = part.match(/:::([a-z-]+)\s*[\r\n]+([\s\S]*?)[\r\n]+\s*:::/);
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
                <h1 className={cn("text-3xl font-extrabold text-[var(--ln-navy-900)] mb-6 border-b border-slate-100 pb-4 tracking-tight", className)} {...props} />
              ),
              h2: ({ className, ...props }) => (
                <h2 className={cn("text-2xl font-bold text-[var(--ln-navy-900)] mt-12 mb-4 tracking-tight", className)} {...props} />
              ),
              h3: ({ className, ...props }) => (
                <h3 className={cn("text-xl font-bold text-[var(--ln-navy-900)] mt-10 mb-3 tracking-tight", className)} {...props} />
              ),
              p: ({ className, ...props }) => (
                <p className={cn("text-[var(--ln-text-secondary)] leading-relaxed mb-6 font-medium", className)} {...props} />
              ),
              ul: ({ className, ...props }) => (
                <ul className={cn("list-disc list-inside space-y-3 mb-8 text-[var(--ln-text-secondary)] font-medium", className)} {...props} />
              ),
              li: ({ className, ...props }) => (
                <li className={cn("marker:text-[var(--ln-teal-500)]", className)} {...props} />
              ),
              blockquote: ({ className, ...props }) => (
                <blockquote className={cn("border-l-4 border-[var(--ln-teal-500)] bg-[var(--ln-teal-soft)] p-6 rounded-r-2xl italic my-8 font-medium", className)} {...props} />
              ),
              strong: ({ className, ...props }) => (
                <strong className={cn("text-[var(--ln-navy-900)] font-extrabold", className)} {...props} />
              ),
              code: ({ className, ...props }) => (
                <code className={cn("bg-slate-100 px-1.5 py-0.5 rounded text-sm text-[var(--ln-teal-600)] font-mono font-bold", className)} {...props} />
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
