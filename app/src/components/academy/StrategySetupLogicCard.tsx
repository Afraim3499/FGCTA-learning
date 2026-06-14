"use client";

import React, { useState } from "react";
import { CheckCircle2, ShieldAlert, Target as TargetIcon, ChevronDown, ChevronUp } from "lucide-react";
import { StrategySetupVisual } from "@/components/academy/StrategySetupVisual";

interface StrategySetupLogicCardProps {
  entryCriteria: string;
  rawStrategy?: any;
}

interface Step {
  title: string;
  desc: string;
  type?: "entry" | "stoploss" | "target" | "general";
}

function parseCoreLogicIntoSteps(coreLogic: string): Step[] {
  if (!coreLogic) return [];

  const steps: Step[] = [];
  const lines = coreLogic.split("\n");

  let currentSection: string = "general";
  let currentLines: string[] = [];

  const flush = () => {
    const text = currentLines.join(" ").replace(/\*\*/g, "").trim();
    if (text && currentLines.length > 0) {
      // Each bullet under the section becomes a step
      for (const line of currentLines) {
        const clean = line.trim().replace(/^[-*\d.]+\s*/, "").replace(/\*\*/g, "").trim();
        if (clean) {
          steps.push({ title: sectionTitle(currentSection), desc: clean, type: currentSection as any });
        }
      }
    }
    currentLines = [];
  };

  const sectionTitle = (s: string) => {
    if (s === "entry") return "Entry Criteria";
    if (s === "stoploss") return "Stop-Loss Placement";
    if (s === "target") return "Profit Target";
    return "Setup Rule";
  };

  for (const raw of lines) {
    const line = raw.trim();
    const ll = line.toLowerCase();

    if (ll.includes("entry criteria") || ll.includes("entry rules")) {
      flush();
      currentSection = "entry";
      // Inline content after colon
      const colonIdx = line.indexOf(":");
      if (colonIdx !== -1 && line.substring(colonIdx + 1).trim()) {
        currentLines.push(line.substring(colonIdx + 1).trim());
      }
    } else if (ll.includes("stop-loss") || ll.includes("stop loss") || ll.includes("stoploss")) {
      flush();
      currentSection = "stoploss";
      const colonIdx = line.indexOf(":");
      if (colonIdx !== -1 && line.substring(colonIdx + 1).trim()) {
        currentLines.push(line.substring(colonIdx + 1).trim());
      }
    } else if (ll.includes("profit target") || ll.includes("exit criteria") || ll.includes("target path")) {
      flush();
      currentSection = "target";
      const colonIdx = line.indexOf(":");
      if (colonIdx !== -1 && line.substring(colonIdx + 1).trim()) {
        currentLines.push(line.substring(colonIdx + 1).trim());
      }
    } else if (ll.includes("checklist")) {
      flush();
      break; // Stop before checklist section
    } else if ((line.startsWith("-") || line.startsWith("*") || /^\d+\./.test(line)) && !line.toLowerCase().includes("entry:") && !line.toLowerCase().includes("exit:") && !line.toLowerCase().includes("invalidation:")) {
      const clean = line.replace(/^[-*\d.]+\s*/, "").replace(/\*\*/g, "").trim();
      if (clean && clean.length > 5) {
        currentLines.push(clean);
      }
    }
  }
  flush();

  return steps;
}

const STEP_COLORS: Record<string, { bg: string; text: string; badge: string }> = {
  entry: { bg: "bg-emerald-50", text: "text-emerald-700", badge: "bg-emerald-100 text-emerald-700" },
  stoploss: { bg: "bg-rose-50", text: "text-rose-600", badge: "bg-rose-100 text-rose-700" },
  target: { bg: "bg-blue-50", text: "text-blue-600", badge: "bg-blue-100 text-blue-700" },
  general: { bg: "bg-slate-50", text: "text-slate-500", badge: "bg-slate-100 text-slate-600" },
};

const STEP_ICONS: Record<string, React.ReactNode> = {
  entry: <CheckCircle2 className="w-4 h-4" />,
  stoploss: <ShieldAlert className="w-4 h-4" />,
  target: <TargetIcon className="w-4 h-4" />,
  general: <CheckCircle2 className="w-4 h-4" />,
};

export function StrategySetupLogicCard({ entryCriteria, rawStrategy }: StrategySetupLogicCardProps) {
  const [showAll, setShowAll] = useState(false);

  const steps: Step[] = rawStrategy?.coreLogic
    ? parseCoreLogicIntoSteps(rawStrategy.coreLogic)
    : [];

  // Fallback to basic entry criteria parsing
  const fallbackSteps: Step[] = entryCriteria
    .split(/\n+/)
    .map(l => l.trim())
    .filter(l => l.startsWith("-") || l.startsWith("*") || /^\d+\./.test(l))
    .map(l => ({
      title: "Entry Rule",
      desc: l.replace(/^[-*\d.]+\s*/, "").replace(/\*\*/g, "").trim(),
      type: "entry" as const,
    }))
    .filter(s => s.desc.length > 5);

  const defaultSteps: Step[] = [
    { title: "Identify the Trend", desc: "Confirm a clear swing structure in one direction with aligned higher timeframe bias.", type: "entry" },
    { title: "Spot the Structure Break", desc: "Price breaks a key swing high/low with impulsive momentum and closes beyond the level.", type: "entry" },
    { title: "Wait for the Retest", desc: "Price returns to the broken level now acting as support/resistance. Do not enter early.", type: "entry" },
    { title: "Set Stop-Loss", desc: "Place stop-loss below/above the retest zone by 1–1.5x ATR. This is your invalidation.", type: "stoploss" },
    { title: "Define Target", desc: "Aim for minimum 1:2 RR. Mark the next structural level as your primary target.", type: "target" },
  ];

  const finalSteps = steps.length > 0 ? steps : (fallbackSteps.length > 0 ? fallbackSteps : defaultSteps);
  const displaySteps = showAll ? finalSteps : finalSteps.slice(0, 5);

  // Group by type for summary pills
  const entryCount = finalSteps.filter(s => s.type === "entry").length;
  const slCount = finalSteps.filter(s => s.type === "stoploss").length;
  const tgtCount = finalSteps.filter(s => s.type === "target").length;

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-5">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-3.5 h-3.5" />
          </div>
          <h3 className="text-sm font-extrabold text-[var(--ln-navy-900)] uppercase tracking-wider">
            Setup Logic
          </h3>
        </div>
        <div className="flex items-center gap-1.5 text-[9px] font-black uppercase">
          {entryCount > 0 && <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded">{entryCount} Entry Rules</span>}
          {slCount > 0 && <span className="px-2 py-0.5 bg-rose-50 text-rose-700 rounded">{slCount} SL Rules</span>}
          {tgtCount > 0 && <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded">{tgtCount} Targets</span>}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side: All Steps */}
        <div className="lg:col-span-6 space-y-3">
          {displaySteps.map((step, idx) => {
            const colors = STEP_COLORS[step.type || "general"];
            const icon = STEP_ICONS[step.type || "general"];
            return (
              <div key={idx} className="flex gap-3.5 items-start group">
                <div className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${colors.bg} ${colors.text}`}>
                  {icon}
                </div>
                <div className="space-y-0.5 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="text-xs font-extrabold text-[var(--ln-navy-900)]">
                      {step.title}
                    </h4>
                    {step.type && step.type !== "general" && (
                      <span className={`text-[8px] font-black uppercase px-1.5 py-0.5 rounded ${colors.badge}`}>
                        {step.type === "stoploss" ? "Stop-Loss" : step.type}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-[var(--ln-text-secondary)] leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}

          {finalSteps.length > 5 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-1.5 text-[10px] font-bold text-[var(--ln-teal-600)] hover:text-[var(--ln-teal-500)] transition-colors pt-1 cursor-pointer"
            >
              {showAll ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              {showAll ? "Show less" : `Show ${finalSteps.length - 5} more rules`}
            </button>
          )}
        </div>

        {/* Right Side: Chart Visual */}
        <div className="lg:col-span-6">
          <StrategySetupVisual />
        </div>
      </div>
    </div>
  );
}
