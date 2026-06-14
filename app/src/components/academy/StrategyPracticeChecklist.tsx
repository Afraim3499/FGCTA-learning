"use client";

import React from "react";
import { Check, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface StrategyPracticeChecklistProps {
  items: string[];
  checkedItems: string[];
  onChange: (checked: string[]) => void;
}

export function StrategyPracticeChecklist({
  items,
  checkedItems,
  onChange,
}: StrategyPracticeChecklistProps) {
  const total = items.length;
  const completedCount = checkedItems.filter(item => items.includes(item)).length;
  const progressPercent = total > 0 ? Math.round((completedCount / total) * 100) : 0;
  const isCompleted = completedCount === total && total > 0;

  const toggleItem = (item: string) => {
    if (checkedItems.includes(item)) {
      onChange(checkedItems.filter(i => i !== item));
    } else {
      onChange([...checkedItems, item]);
    }
  };

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
        <div>
          <h3 className="text-xs font-extrabold text-[var(--ln-navy-900)] uppercase tracking-wider">
            Interactive Practice Checklist
          </h3>
          <p className="text-[10px] text-slate-400 font-medium">
            Confirm all rules before identifying this setup on charts.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-500">
            {completedCount} / {total} Requirements
          </span>
          {isCompleted && (
            <span className="flex items-center gap-1 text-[9px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full uppercase">
              <CheckCircle2 className="w-3 h-3" /> Fully Confirmed
            </span>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-1.5">
        <div className="flex justify-between items-center text-[10px] font-bold text-slate-400">
          <span>SETUP VERIFICATION STATUS</span>
          <span className={cn(isCompleted ? "text-emerald-500" : "text-[var(--ln-teal-500)]")}>
            {progressPercent}% Complete
          </span>
        </div>
        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
          <div
            className={cn(
              "h-full transition-all duration-500 ease-out rounded-full",
              isCompleted ? "bg-emerald-500" : "bg-[var(--ln-teal-500)]"
            )}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Checklist items list */}
      <div className="grid grid-cols-1 gap-2.5">
        {items.map((item, index) => {
          const isChecked = checkedItems.includes(item);
          return (
            <button
              key={index}
              onClick={() => toggleItem(item)}
              className={cn(
                "w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 group",
                isChecked
                  ? "bg-teal-50/30 border-[var(--ln-teal-500)]/30 text-[var(--ln-teal-600)]"
                  : "bg-slate-50 border-slate-200/60 text-slate-600 hover:bg-slate-100 hover:border-slate-300"
              )}
            >
              {/* Custom checkbox square/tick */}
              <div
                className={cn(
                  "w-5 h-5 rounded-lg border-2 flex items-center justify-center shrink-0 transition-all mt-0.5",
                  isChecked
                    ? "bg-[var(--ln-teal-500)] border-[var(--ln-teal-500)] text-white shadow-sm"
                    : "bg-white border-slate-300 group-hover:border-[var(--ln-teal-500)]/40"
                )}
              >
                {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </div>
              <div className="space-y-0.5">
                <span className={cn("text-xs md:text-sm font-semibold leading-relaxed", isChecked && "line-through text-slate-500 font-medium")}>
                  {item}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
