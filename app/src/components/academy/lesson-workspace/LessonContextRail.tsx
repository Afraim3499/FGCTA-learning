"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  Lightbulb,
  AlertCircle,
  XCircle,
  CheckCircle2,
  StickyNote,
  ChevronDown,
} from "lucide-react";

interface ContextData {
  keyTerms?: Array<string | { term: string; definition: string }>;
  whyThisMatters?: string;
  realLifeExample?: string;
  commonMistake?: string;
  quickNote?: string;
  defaultExpanded?: string[];
}

interface LessonContextRailProps {
  context?: ContextData;
  objective?: string;
  cardType?: string;
}

interface AccordionItemProps {
  icon: React.ReactNode;
  title: string;
  color: string;
  bgColor: string;
  borderColor: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({
  icon,
  title,
  color,
  bgColor,
  borderColor,
  children,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border overflow-hidden transition-all duration-300",
        borderColor,
        isOpen ? bgColor : "bg-white hover:bg-slate-50/50"
      )}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-3 p-4 text-left"
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className={cn("shrink-0", color)}>{icon}</span>
          <span
            className={cn(
              "text-[11px] font-extrabold uppercase tracking-widest truncate",
              color
            )}
          >
            {title}
          </span>
        </div>
        <ChevronDown
          size={14}
          className={cn(
            "shrink-0 text-slate-400 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>
      {isOpen && (
        <div className="px-4 pb-4 animate-in fade-in slide-in-from-top-1 duration-300">
          {children}
        </div>
      )}
    </div>
  );
}

export function LessonContextRail({
  context,
  objective,
  cardType,
}: LessonContextRailProps) {
  const [activeTermIdx, setActiveTermIdx] = useState<number | null>(null);
  
  // Local state for accordions to allow manual toggle after initial auto-expansion
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [hasInitialized, setHasInitialized] = useState(false);

  // Initialize expanded sections based on card type or context override
  React.useEffect(() => {
    if (!context && !objective) return;

    const initialOpen: Record<string, boolean> = {};

    if (context?.defaultExpanded) {
      context.defaultExpanded.forEach(section => {
        initialOpen[section] = true;
      });
    } else if (cardType) {
      // Standard expansion rules based on card type
      const type = cardType.toLowerCase();
      if (["concept", "visual_intro", "brief", "mechanics", "driver"].includes(type)) {
        initialOpen.keyTerms = true;
        initialOpen.whyThisMatters = true;
      } else if (["mistake", "pattern", "mistake_pattern"].includes(type)) {
        initialOpen.keyTerms = true;
        initialOpen.whyThisMatters = true;
        initialOpen.commonMistake = true;
      } else if (["practice", "drill", "task", "practical"].includes(type)) {
        initialOpen.keyTerms = true;
        initialOpen.quickNote = true;
      } else if (["summary", "debrief"].includes(type)) {
        initialOpen.keyTerms = true;
        initialOpen.quickNote = true;
      }
    } else {
      // Default fallback
      initialOpen.keyTerms = true;
      initialOpen.whyThisMatters = true;
    }

    setOpenSections(initialOpen);
    setHasInitialized(true);

    // Auto-select first key term if section is open and terms exist
    if (initialOpen.keyTerms && context?.keyTerms?.length) {
      setActiveTermIdx(0);
    } else {
      setActiveTermIdx(null);
    }
  }, [context, cardType, objective]);

  if (!context && !objective) {
    return null;
  }

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <aside className="space-y-3 lg:sticky lg:top-6 self-start">
      {/* Objective box */}
      {objective && (
        <div className="p-5 rounded-2xl bg-[var(--ln-teal-soft)] border border-[var(--ln-teal-200)] space-y-2">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[var(--ln-teal-500)]">
            Objective
          </span>
          <p className="text-sm font-semibold text-[var(--ln-navy-900)] leading-relaxed">
            {objective}
          </p>
        </div>
      )}

      {/* Key Terms */}
      {context?.keyTerms && context.keyTerms.length > 0 && (
        <AccordionItem
          icon={<BookOpen size={16} />}
          title="Key Terms"
          color="text-slate-700"
          bgColor="bg-slate-50"
          borderColor="border-slate-200"
          isOpen={!!openSections.keyTerms}
          onToggle={() => toggleSection("keyTerms")}
        >
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {context.keyTerms.map((item, i) => {
                const term = typeof item === "string" ? item : item.term;
                return (
                  <button
                    key={i}
                    onClick={() => {
                      if (activeTermIdx === i) setActiveTermIdx(null);
                      else setActiveTermIdx(i);
                    }}
                    className={cn(
                      "px-2.5 py-1 rounded-lg text-[10px] font-bold border transition-all",
                      activeTermIdx === i
                        ? "bg-[var(--ln-navy-900)] text-white border-[var(--ln-navy-900)] shadow-sm"
                        : "bg-white text-slate-500 border-slate-200 hover:border-slate-300"
                    )}
                  >
                    {term}
                  </button>
                );
              })}
            </div>

            {activeTermIdx !== null && context.keyTerms[activeTermIdx] && (
              <div className="p-3 rounded-xl bg-white border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
                <h5 className="text-[10px] font-black uppercase tracking-widest text-[var(--ln-navy-900)] mb-1">
                  {typeof context.keyTerms[activeTermIdx] === "string" 
                    ? context.keyTerms[activeTermIdx] as string
                    : (context.keyTerms[activeTermIdx] as any).term}
                </h5>
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                  {typeof context.keyTerms[activeTermIdx] === "string"
                    ? "Concept vocabulary for this lesson."
                    : (context.keyTerms[activeTermIdx] as any).definition}
                </p>
              </div>
            )}
            
            {activeTermIdx === null && (
              <p className="text-[10px] text-slate-400 font-medium italic">
                Select a term to see its definition.
              </p>
            )}
          </div>
        </AccordionItem>
      )}

      {/* Why This Matters */}
      {context?.whyThisMatters && (
        <AccordionItem
          icon={<Lightbulb size={16} />}
          title="Why This Matters"
          color="text-amber-600"
          bgColor="bg-amber-50/50"
          borderColor="border-amber-200"
          isOpen={!!openSections.whyThisMatters}
          onToggle={() => toggleSection("whyThisMatters")}
        >
          <p className="text-sm font-medium text-slate-600 leading-relaxed">
            {context.whyThisMatters}
          </p>
        </AccordionItem>
      )}

      {/* Real-Life Example */}
      {context?.realLifeExample && (
        <AccordionItem
          icon={<AlertCircle size={16} />}
          title="Real-Life Example"
          color="text-blue-600"
          bgColor="bg-blue-50/50"
          borderColor="border-blue-200"
          isOpen={!!openSections.realLifeExample}
          onToggle={() => toggleSection("realLifeExample")}
        >
          <p className="text-sm font-medium text-slate-600 leading-relaxed">
            {context.realLifeExample}
          </p>
        </AccordionItem>
      )}

      {/* Common Mistake */}
      {context?.commonMistake && (
        <AccordionItem
          icon={<XCircle size={16} />}
          title="Common Mistake"
          color="text-rose-600"
          bgColor="bg-rose-50/50"
          borderColor="border-rose-200"
          isOpen={!!openSections.commonMistake}
          onToggle={() => toggleSection("commonMistake")}
        >
          <p className="text-sm font-medium text-slate-600 leading-relaxed">
            {context.commonMistake}
          </p>
        </AccordionItem>
      )}

      {/* Quick Note */}
      {context?.quickNote && (
        <AccordionItem
          icon={<StickyNote size={16} />}
          title="Quick Note"
          color="text-teal-600"
          bgColor="bg-teal-50/50"
          borderColor="border-teal-200"
          isOpen={!!openSections.quickNote}
          onToggle={() => toggleSection("quickNote")}
        >
          <p className="text-sm font-medium text-slate-600 leading-relaxed">
            {context.quickNote}
          </p>
        </AccordionItem>
      )}
    </aside>
  );
}
