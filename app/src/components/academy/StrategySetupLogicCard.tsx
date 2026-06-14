"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { StrategySetupVisual } from "@/components/academy/StrategySetupVisual";

interface StrategySetupLogicCardProps {
  entryCriteria: string;
}

export function StrategySetupLogicCard({ entryCriteria }: StrategySetupLogicCardProps) {
  // Parse lines of entryCriteria dynamically into structured steps
  const parsedSteps = entryCriteria
    .split(/\n+/)
    .map(line => line.trim())
    .filter(line => line.startsWith("-") || line.startsWith("*") || /^\d+\./.test(line))
    .map(line => {
      // Remove bullets
      const cleaned = line.replace(/^[-*\d.]+\s*/, "").trim();
      
      // Try to separate bold prefix from body
      const boldMatch = cleaned.match(/^\*\*(.*?)\*\*:(.*)/);
      if (boldMatch) {
        return {
          title: boldMatch[1].trim(),
          desc: boldMatch[2].trim()
        };
      }
      
      const boldMatch2 = cleaned.match(/^\*\*(.*?)\*\*(.*)/);
      if (boldMatch2) {
        return {
          title: boldMatch2[1].trim(),
          desc: boldMatch2[2].trim()
        };
      }
      
      return {
        title: cleaned.split(".")[0] || "Execute Entry",
        desc: cleaned
      };
    });

  const defaultSteps = [
    { title: "Identify the structure break", desc: "Confirm a clear swing structure in one direction." },
    { title: "Spot the structure break", desc: "Price breaks a key swing high/low with impulsive momentum." },
    { title: "Wait for the retest", desc: "Price returns to the broken level now acting as support/resistance." },
    { title: "Confirm at retest", desc: "Look for bullish/bearish rejection signals to align with the trend." }
  ];

  const finalSteps = parsedSteps.length > 0 ? parsedSteps.slice(0, 4) : defaultSteps;

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-5">
      <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
        <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-3.5 h-3.5" />
        </div>
        <h3 className="text-sm font-extrabold text-[var(--ln-navy-900)] uppercase tracking-wider">
          Setup Logic
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Side: Numbered Steps */}
        <div className="lg:col-span-5 space-y-4">
          {finalSteps.map((step, idx) => (
            <div key={idx} className="flex gap-4 items-start group">
              <div className="w-6 h-6 rounded-full border border-slate-200 text-slate-400 group-hover:border-[var(--ln-teal-500)] group-hover:text-[var(--ln-teal-600)] flex items-center justify-center text-xs font-black shrink-0 transition-colors bg-white shadow-sm mt-0.5">
                {idx + 1}
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-extrabold text-[var(--ln-navy-900)] group-hover:text-[var(--ln-teal-600)] transition-colors">
                  {step.title}
                </h4>
                <p className="text-[11px] text-[var(--ln-text-secondary)] leading-relaxed font-semibold">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Setup Visual Chart */}
        <div className="lg:col-span-7">
          <StrategySetupVisual />
        </div>
      </div>
    </div>
  );
}
