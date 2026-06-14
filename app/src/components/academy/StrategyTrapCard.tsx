"use client";

import React from "react";
import { AlertTriangle, Lightbulb } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface StrategyTrapCardProps {
  traps: string;
  risk: string;
}

export function StrategyTrapCard({ traps, risk }: StrategyTrapCardProps) {
  // Parse traps list into bullet items if it has list structure, otherwise display as paragraphs
  const parsedTraps = traps
    .split(/\n+/)
    .map(line => line.trim())
    .filter(line => line.startsWith("-") || line.startsWith("*") || line.startsWith("•") || /^\d+\./.test(line))
    .map(line => line.replace(/^[-*•\d.]+\s*/, "").trim());

  const defaultTraps = [
    "Entering before the retest occurs.",
    "Retest lacks clear rejection or confirmation.",
    "Ignoring higher timeframe structure.",
    "Confusing minor pullbacks with valid retests."
  ];

  const finalTraps = parsedTraps.length > 0 ? parsedTraps : defaultTraps;

  // Clean risk text to serve as the Pro Tip
  const cleanedRisk = risk
    .replace(/^###/g, "")
    .replace(/^\*\*Mitigation Rules\*\*:/i, "")
    .replace(/^\*\*Common Mistake\*\*:/i, "")
    .trim();

  const defaultProTip = "The first retest after a structural break is often the highest probability entry. Patience here improves your R multiple significantly.";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {/* Common Traps (Left Column) */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm flex items-start gap-4">
        <div className="p-2 bg-rose-50 text-rose-500 rounded-lg shrink-0">
          <AlertTriangle className="w-5 h-5" />
        </div>
        <div className="space-y-3 flex-1">
          <h4 className="text-sm font-bold text-[var(--ln-navy-900)]">
            Common Traps
          </h4>
          <ul className="space-y-2">
            {finalTraps.map((trap, idx) => (
              <li key={idx} className="text-xs text-[var(--ln-text-secondary)] leading-relaxed font-semibold flex items-start gap-2">
                <span className="text-rose-500 font-bold shrink-0 mt-1">•</span>
                <span>{trap}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Pro Tip (Right Column) */}
      <div className="bg-gradient-to-br from-white to-teal-50/10 border border-teal-200/60 rounded-2xl p-6 shadow-sm flex items-start gap-4">
        <div className="p-2 bg-teal-50 text-[var(--ln-teal-600)] rounded-lg shrink-0">
          <Lightbulb className="w-5 h-5" />
        </div>
        <div className="space-y-2 flex-1">
          <h4 className="text-sm font-bold text-[var(--ln-navy-900)]">
            Pro Tip
          </h4>
          <p className="text-xs text-[var(--ln-text-secondary)] leading-relaxed font-semibold">
            {cleanedRisk || defaultProTip}
          </p>
        </div>
      </div>

    </div>
  );
}
