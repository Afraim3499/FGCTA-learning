"use client";

import React, { useState } from "react";
import { MapPin, TrendingUp, ChevronDown, ChevronUp, Calendar, BarChart2 } from "lucide-react";

interface StrategyTradeWalkthroughProps {
  rawStrategy: any;
}

interface TradeStep {
  label: string;
  content: string;
}

function parseWalkthrough(text: string): { context: Record<string, string>; steps: TradeStep[] } {
  if (!text) return { context: {}, steps: [] };

  const lines = text.split("\n");
  const context: Record<string, string> = {};
  const steps: TradeStep[] = [];

  let inSteps = false;
  let currentStep: TradeStep | null = null;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    const ll = line.toLowerCase();

    // Market context fields
    if (ll.includes("date:") || ll.match(/^\-?\s*\*?\*?date\*?\*?:/i)) {
      const v = line.replace(/^.*?date\s*:\s*/i, "").replace(/\*\*/g, "").trim();
      if (v) context["Date"] = v;
    } else if (ll.includes("session:") || ll.match(/^\-?\s*\*?\*?session\*?\*?:/i)) {
      const v = line.replace(/^.*?session\s*:\s*/i, "").replace(/\*\*/g, "").trim();
      if (v) context["Session"] = v;
    } else if (ll.includes("asset:") || ll.match(/^\-?\s*\*?\*?asset\*?\*?:/i)) {
      const v = line.replace(/^.*?asset\s*:\s*/i, "").replace(/\*\*/g, "").trim();
      if (v) context["Asset"] = v;
    } else if (ll.includes("macro") || ll.includes("price context") || ll.match(/^\-?\s*\*?\*?macro/i)) {
      const v = line.replace(/^.*?(?:macro\/price context|price context|macro)\s*:\s*/i, "").replace(/\*\*/g, "").trim();
      if (v) context["Market Context"] = v;
    }

    // Detect step-by-step section
    if (ll.includes("step-by-step") || ll.includes("trade setup") || ll.includes("step by step")) {
      inSteps = true;
      continue;
    }

    if (inSteps) {
      // Numbered steps like "1. " or "  1. "
      const numberedMatch = line.match(/^\s*(\d+)\.\s+(.*)/);
      if (numberedMatch) {
        if (currentStep) steps.push(currentStep);
        currentStep = {
          label: `Step ${numberedMatch[1]}`,
          content: numberedMatch[2].replace(/\*\*/g, "").trim(),
        };
        continue;
      }

      // Bullet items that are sub-details of a current step
      if ((line.startsWith("-") || line.startsWith("*")) && currentStep) {
        const sub = line.replace(/^[-*]\s*/, "").replace(/\*\*/g, "").trim();
        if (sub) currentStep.content += `\n${sub}`;
        continue;
      }

      // Named bullets like "- **Entry Price**: ..."
      const boldBulletMatch = line.match(/^-\s*\*\*(.*?)\*\*\s*:\s*(.*)/);
      if (boldBulletMatch && !ll.includes("step-by-step")) {
        if (currentStep) steps.push(currentStep);
        currentStep = {
          label: boldBulletMatch[1].trim(),
          content: boldBulletMatch[2].replace(/\*\*/g, "").trim(),
        };
        continue;
      }

      // Section header — end steps
      if (ll.startsWith("###") || ll.startsWith("##")) {
        break;
      }
    }
  }

  if (currentStep) steps.push(currentStep);

  return { context, steps };
}

const STEP_BADGE_COLORS = [
  "bg-teal-50 text-teal-700 border-teal-100",
  "bg-blue-50 text-blue-700 border-blue-100",
  "bg-purple-50 text-purple-700 border-purple-100",
  "bg-amber-50 text-amber-700 border-amber-100",
  "bg-emerald-50 text-emerald-700 border-emerald-100",
  "bg-indigo-50 text-indigo-700 border-indigo-100",
];

export function StrategyTradeWalkthrough({ rawStrategy }: StrategyTradeWalkthroughProps) {
  const [showAll, setShowAll] = useState(false);

  const wt = rawStrategy?.tradeWalkthrough || "";
  if (!wt) return null;

  const { context, steps } = parseWalkthrough(wt);

  if (steps.length === 0 && Object.keys(context).length === 0) return null;

  const displaySteps = showAll ? steps : steps.slice(0, 4);

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-5">
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
        <div className="p-1.5 bg-indigo-50 text-indigo-600 rounded-lg shrink-0">
          <MapPin className="w-4 h-4" />
        </div>
        <div>
          <h3 className="text-sm font-extrabold text-[var(--ln-navy-900)] uppercase tracking-wider">
            Trade Walkthrough
          </h3>
          <p className="text-[9px] font-bold text-indigo-400 uppercase tracking-wider">Real example setup</p>
        </div>
      </div>

      {/* Context pills */}
      {Object.keys(context).length > 0 && (
        <div className="flex flex-wrap gap-2">
          {Object.entries(context).map(([key, val]) => (
            <div key={key} className="flex items-center gap-1.5 bg-slate-50 border border-slate-200/80 rounded-lg px-2.5 py-1.5">
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider">{key}</span>
              <span className="text-[10px] font-bold text-[var(--ln-navy-900)] max-w-[200px] truncate">{val}</span>
            </div>
          ))}
        </div>
      )}

      {/* Steps */}
      {steps.length > 0 && (
        <div className="space-y-3">
          {displaySteps.map((step, idx) => {
            const colorClass = STEP_BADGE_COLORS[idx % STEP_BADGE_COLORS.length];
            const contentLines = step.content.split("\n").filter(Boolean);
            return (
              <div key={idx} className="flex gap-3.5 items-start">
                <div className={`text-[9px] font-black px-2 py-1 rounded-lg border shrink-0 mt-0.5 min-w-[52px] text-center ${colorClass}`}>
                  {step.label}
                </div>
                <div className="flex-1 space-y-1">
                  {contentLines.map((cl, ci) => (
                    <p key={ci} className={`text-xs font-semibold leading-relaxed ${ci === 0 ? "text-[var(--ln-navy-900)]" : "text-[var(--ln-text-secondary)]"}`}>
                      {cl}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}

          {steps.length > 4 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-1.5 text-[10px] font-bold text-[var(--ln-teal-600)] hover:text-[var(--ln-teal-500)] transition-colors pt-1 cursor-pointer"
            >
              {showAll ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              {showAll ? "Show fewer steps" : `Show all ${steps.length} steps`}
            </button>
          )}
        </div>
      )}

      <div className="flex items-center gap-1.5 pt-1 border-t border-slate-100">
        <TrendingUp className="w-3 h-3 text-slate-400" />
        <p className="text-[9px] font-semibold text-slate-400">
          Study this example and replay it mentally before applying the strategy on live charts.
        </p>
      </div>
    </div>
  );
}
