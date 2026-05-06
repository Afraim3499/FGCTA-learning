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
  keyTerms?: string[];
  whyThisMatters?: string;
  realLifeExample?: string;
  commonMistake?: string;
  quickNote?: string;
  comparison?: {
    left: { title: string; subtitle: string; items: string[]; description: string; type: "negative" | "positive" };
    right: { title: string; subtitle: string; items: string[]; description: string; type: "negative" | "positive" };
  };
}

interface LessonContextRailProps {
  context?: ContextData;
  objective?: string;
}

interface AccordionItemProps {
  icon: React.ReactNode;
  title: string;
  color: string;
  bgColor: string;
  borderColor: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function AccordionItem({
  icon,
  title,
  color,
  bgColor,
  borderColor,
  children,
  defaultOpen = false,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={cn(
        "rounded-2xl border overflow-hidden transition-all duration-300",
        borderColor,
        isOpen ? bgColor : "bg-white hover:bg-slate-50/50"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
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
}: LessonContextRailProps) {
  if (!context && !objective) {
    return null;
  }

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
          defaultOpen={true}
        >
          <div className="flex flex-wrap gap-2">
            {context.keyTerms.map((term, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-[var(--ln-navy-900)] shadow-sm"
              >
                {term}
              </span>
            ))}
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
          defaultOpen={true}
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
          defaultOpen={true}
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
        >
          <p className="text-sm font-medium text-slate-600 leading-relaxed">
            {context.quickNote}
          </p>
        </AccordionItem>
      )}
    </aside>
  );
}
