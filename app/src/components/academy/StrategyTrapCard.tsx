"use client";

import React from "react";
import { AlertTriangle, Lightbulb, ShieldCheck } from "lucide-react";

interface StrategyTrapCardProps {
  traps: string;
  risk: string;
  rawStrategy?: any;
}

function parseBullets(text: string): string[] {
  if (!text) return [];
  return text
    .split(/\n+/)
    .map(l => l.trim())
    .filter(l => l.startsWith("-") || l.startsWith("*") || l.startsWith("•") || /^\d+\./.test(l))
    .map(l => l.replace(/^[-*•\d.]+\s*/, "").replace(/\*\*/g, "").trim())
    .filter(Boolean);
}

function extractSection(text: string, keywords: string[], stopAt?: string[]): string {
  if (!text) return "";
  const lines = text.split("\n");
  let start = -1;
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i].toLowerCase();
    if (keywords.some(k => l.includes(k.toLowerCase()))) { start = i; break; }
  }
  if (start === -1) return "";
  let end = lines.length;
  for (let i = start + 1; i < lines.length; i++) {
    const l = lines[i].toLowerCase();
    const isStop = l.startsWith("###") || l.startsWith("##") ||
      (stopAt && stopAt.some(k => l.includes(k.toLowerCase())));
    if (isStop) { end = i; break; }
  }
  const slice = lines.slice(start, end);
  const firstLine = slice[0];
  const m = firstLine.match(/^-?\s*(\*\*|###)?\s*[^:*]+\s*(\*\*|###)?\s*:\s*(.*)/i);
  if (m) slice[0] = m[3];
  else slice.shift();
  return slice.join("\n").trim();
}

export function StrategyTrapCard({ traps, risk, rawStrategy }: StrategyTrapCardProps) {
  const trapMechanics = rawStrategy?.trapMechanics || "";

  // Parse all traps/how traders get trapped
  let trapLines = parseBullets(extractSection(trapMechanics, ["retail traders", "trapped", "sweep", "trap"], ["common mistake", "mitigation"]));
  if (trapLines.length === 0) trapLines = parseBullets(trapMechanics).slice(0, 5);
  if (trapLines.length === 0) trapLines = parseBullets(traps);
  if (trapLines.length === 0) {
    trapLines = [
      "Entering before the retest occurs — price reverses without a setup.",
      "Retest lacks clear rejection or confirmation candle.",
      "Ignoring higher timeframe structure that invalidates the trade.",
      "Confusing minor pullbacks with valid structural retests."
    ];
  }

  // Parse common mistake
  let commonMistake = extractSection(trapMechanics, ["common mistake"], ["mitigation"]).trim();
  if (!commonMistake) commonMistake = "";

  // Parse mitigation rules / pro tip
  let mitigationLines = parseBullets(extractSection(trapMechanics, ["mitigation rules", "mitigation rule"], []));
  if (mitigationLines.length === 0) {
    mitigationLines = parseBullets(risk);
  }
  if (mitigationLines.length === 0) {
    mitigationLines = [
      "Wait for confirmation with a candle close beyond the entry trigger before acting.",
      "Monitor news calendars — avoid trading during high-impact events.",
      "Use limit orders to avoid slippage during spread widening.",
      "The first clean retest after a structural break typically offers the best R multiple."
    ];
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

      {/* Common Traps */}
      <div className="bg-white border border-rose-100/60 rounded-2xl p-5 shadow-sm flex flex-col gap-4">
        <div className="flex items-center gap-2.5 pb-3 border-b border-rose-50">
          <div className="p-1.5 bg-rose-50 text-rose-500 rounded-lg shrink-0">
            <AlertTriangle className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-extrabold text-[var(--ln-navy-900)]">Common Traps</h4>
            <p className="text-[9px] text-rose-400 font-bold uppercase tracking-wider">How retail traders get caught</p>
          </div>
        </div>
        <ul className="space-y-2.5">
          {trapLines.map((trap, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 font-semibold leading-relaxed">
              <span className="text-rose-500 font-black shrink-0 mt-0.5 text-base leading-none">!</span>
              <span>{trap}</span>
            </li>
          ))}
        </ul>

        {commonMistake && (
          <div className="bg-rose-50/60 border border-rose-100 rounded-xl p-3 mt-1">
            <p className="text-[10px] font-black text-rose-600 uppercase tracking-wider mb-1">Most Common Mistake</p>
            <p className="text-xs text-rose-800 font-semibold leading-relaxed">{commonMistake}</p>
          </div>
        )}
      </div>

      {/* Mitigation / Pro Tips */}
      <div className="bg-gradient-to-br from-white to-teal-50/20 border border-teal-200/60 rounded-2xl p-5 shadow-sm flex flex-col gap-4">
        <div className="flex items-center gap-2.5 pb-3 border-b border-teal-100/50">
          <div className="p-1.5 bg-teal-50 text-[var(--ln-teal-600)] rounded-lg shrink-0">
            <Lightbulb className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-extrabold text-[var(--ln-navy-900)]">Pro Tips & Mitigation</h4>
            <p className="text-[9px] text-teal-500 font-bold uppercase tracking-wider">How to avoid these traps</p>
          </div>
        </div>
        <ul className="space-y-2.5">
          {mitigationLines.map((tip, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 font-semibold leading-relaxed">
              <div className="w-4 h-4 rounded-full bg-teal-100 text-[var(--ln-teal-600)] flex items-center justify-center text-[9px] font-black shrink-0 mt-0.5">
                {idx + 1}
              </div>
              <span>{tip}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5 pt-1">
          <ShieldCheck className="w-3.5 h-3.5 text-teal-500" />
          <p className="text-[9px] font-bold text-teal-500 uppercase tracking-wider">
            Following these rules improves your R multiple significantly
          </p>
        </div>
      </div>
    </div>
  );
}
