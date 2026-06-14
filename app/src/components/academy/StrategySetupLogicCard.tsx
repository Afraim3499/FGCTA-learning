"use client";

import React from "react";
import { ListTodo, CheckSquare } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface StrategySetupLogicCardProps {
  entryCriteria: string;
  confirmation: string;
}

export function StrategySetupLogicCard({ entryCriteria, confirmation }: StrategySetupLogicCardProps) {
  // Parse lines or display structured markdown
  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-6">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <h3 className="text-xs font-extrabold text-[var(--ln-navy-900)] uppercase tracking-wider flex items-center gap-2">
          <ListTodo className="w-4 h-4 text-[var(--ln-teal-500)]" />
          Setup Execution Logic
        </h3>
      </div>

      <div className="space-y-4">
        {/* Entry Criteria Section */}
        <div className="space-y-2">
          <h4 className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest">
            Step-by-Step Entry Rules
          </h4>
          <div className="prose prose-slate text-sm text-[var(--ln-text-secondary)] leading-relaxed font-medium pl-1">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {entryCriteria}
            </ReactMarkdown>
          </div>
        </div>

        {/* Confirmation Block */}
        {confirmation && (
          <div className="mt-4 p-4 bg-teal-50/30 border border-teal-100/50 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-[var(--ln-teal-600)]">
              <CheckSquare className="w-4 h-4 shrink-0" />
              <h5 className="text-xs font-bold uppercase tracking-wider">Confluence Confirmation</h5>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-semibold pl-6">
              {confirmation}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
