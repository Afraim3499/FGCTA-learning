"use client";

import React from "react";
import { CheckCircle2, XCircle, Clock, TrendingUp, BarChart2 } from "lucide-react";

interface StrategyConditionCardProps {
  conditions: string;   // parsed marketConditions — might be full walkthrough context
  family: string;
  rawStrategy?: any;    // pass the full strategy object for richer fallback
}

/** Parse bullet lines from a markdown block */
function parseBulletLines(text: string): string[] {
  if (!text) return [];
  return text
    .split(/\n+/)
    .map(l => l.trim())
    .filter(l => l.startsWith("-") || l.startsWith("*") || /^\d+\./.test(l))
    .map(l => l.replace(/^[-*\d.]+\s*/, "").replace(/\*\*/g, "").trim())
    .filter(Boolean);
}

/** Extract a named section from markdown text */
function extractSection(text: string, keywords: string[]): string {
  if (!text) return "";
  const lines = text.split("\n");
  let start = -1;
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i].toLowerCase();
    if (keywords.some(k => l.includes(k.toLowerCase()))) { start = i; break; }
  }
  if (start === -1) return "";
  const end = lines.findIndex((l, i) => i > start && (l.startsWith("###") || l.startsWith("##") || (l.trim().startsWith("- **") && !keywords.some(k => l.toLowerCase().includes(k)))));
  const slice = lines.slice(start, end === -1 ? undefined : end);
  const firstLine = slice[0];
  const titleMatch = firstLine.match(/^-?\s*(\*\*|###)?\s*[^:*]+\s*(\*\*|###)?\s*:\s*(.*)/i);
  if (titleMatch) slice[0] = titleMatch[3];
  else slice.shift();
  return slice.join("\n").trim();
}

function buildWhenItWorks(family: string, rawStrategy?: any): string[] {
  // 1) Try to extract from tradeWalkthrough Market Context
  if (rawStrategy?.tradeWalkthrough) {
    const ctx = extractSection(rawStrategy.tradeWalkthrough, ["market context"]);
    if (ctx) {
      const lines = parseBulletLines(ctx);
      if (lines.length > 0) return lines.slice(0, 4);
    }
  }
  // 2) Try coreLogic first section
  if (rawStrategy?.coreLogic) {
    const ctx = extractSection(rawStrategy.coreLogic, ["market condition", "session", "environment", "context"]);
    if (ctx) {
      const lines = parseBulletLines(ctx);
      if (lines.length > 0) return lines.slice(0, 4);
    }
  }
  // 3) Family-based intelligent defaults
  const fl = family.toLowerCase();
  if (fl.includes("trend")) return [
    "Clear directional structure with higher highs and higher lows (bull) or lower lows (bear)",
    "Strong momentum on structure break candle — wide range, high volume",
    "Clean retests of broken swing levels without deep penetration",
    "Multiple timeframe alignment confirming the same bias"
  ];
  if (fl.includes("breakout")) return [
    "Price compressing inside a defined range (low ATR, tight candles)",
    "High relative volume on the breakout candle",
    "London or NY session open — the most liquid expansion windows",
    "No major resistance within 2R of the breakout point"
  ];
  if (fl.includes("revers")) return [
    "Price reaching a major structural extreme (previous high/low, daily level)",
    "Exhaustion signs: long wicks, engulfing candles, volume divergence",
    "Sentiment extreme and institutional positioning showing disagreement",
    "Clear higher-timeframe reason to expect rotation"
  ];
  return [
    "Clean market structure at key institutional levels",
    "Session open liquidity available to drive the move",
    "Confluence of technical factors at the entry zone",
    "Low-volatility pre-entry consolidation confirming intent"
  ];
}

function buildAvoidWhen(family: string, rawStrategy?: any): string[] {
  // Try trapMechanics for avoidance signals
  if (rawStrategy?.trapMechanics) {
    const tm = rawStrategy.trapMechanics;
    const lines = parseBulletLines(tm);
    // Filter lines that suggest avoidance conditions
    const avoidLines = lines.filter(l => {
      const ll = l.toLowerCase();
      return ll.includes("news") || ll.includes("spread") || ll.includes("volatil") ||
             ll.includes("chop") || ll.includes("avoid") || ll.includes("low volume") ||
             ll.includes("fake") || ll.includes("false") || ll.includes("do not") ||
             ll.includes("don't") || ll.includes("caution");
    });
    if (avoidLines.length >= 2) return avoidLines.slice(0, 4);
  }
  // Family-based defaults
  const fl = family.toLowerCase();
  if (fl.includes("trend")) return [
    "Choppy, sideways markets with overlapping candles and no clear direction",
    "Low-volume sessions (Asian midnight, bank holidays)",
    "Structure breaks without follow-through momentum",
    "Trading into a major daily supply/demand zone against the trend"
  ];
  if (fl.includes("breakout")) return [
    "After 16:00 UTC when liquidity dries up and fake breakouts are common",
    "Low relative volume breakouts — no institutional participation",
    "News-driven spikes that immediately reverse after initial move",
    "Overlapping consolidations on the 15-min with no clear trigger range"
  ];
  return [
    "High-impact news announcements (NFP, CPI, FOMC) — spreads widen, stops get hunted",
    "Overlapping session dead zones with thin orderflow",
    "When two or more timeframes disagree on direction",
    "After a significant exhaustion move has already occurred intraday"
  ];
}

export function StrategyConditionCard({ conditions, family, rawStrategy }: StrategyConditionCardProps) {
  const whenItWorks = buildWhenItWorks(family, rawStrategy);
  const avoidWhen = buildAvoidWhen(family, rawStrategy);

  // Try to pull session/asset from walkthrough
  let sessionInfo = "";
  if (rawStrategy?.tradeWalkthrough) {
    const wt = rawStrategy.tradeWalkthrough;
    const sessionMatch = wt.match(/session[:\s]+([^\n,]+)/i);
    const assetMatch = wt.match(/asset[:\s]+([^\n,]+)/i);
    if (sessionMatch || assetMatch) {
      const parts: string[] = [];
      if (assetMatch) parts.push(assetMatch[1].trim());
      if (sessionMatch) parts.push(sessionMatch[1].trim() + " Session");
      sessionInfo = parts.join(" · ");
    }
  }

  return (
    <div className="space-y-4">
      {sessionInfo && (
        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <BarChart2 className="w-3 h-3" />
          <span>Optimal Context: {sessionInfo}</span>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* When It Works */}
        <div className="bg-white border border-emerald-100/80 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-emerald-50">
            <div className="p-1.5 bg-emerald-50 text-emerald-600 rounded-lg shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-extrabold text-[var(--ln-navy-900)]">When It Works</h4>
          </div>
          <ul className="space-y-2.5">
            {whenItWorks.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 font-semibold leading-relaxed">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[9px] font-black shrink-0 mt-0.5">{i + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Avoid When */}
        <div className="bg-white border border-rose-100/60 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-rose-50">
            <div className="p-1.5 bg-rose-50 text-rose-500 rounded-lg shrink-0">
              <XCircle className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-extrabold text-[var(--ln-navy-900)]">Avoid When</h4>
          </div>
          <ul className="space-y-2.5">
            {avoidWhen.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 font-semibold leading-relaxed">
                <span className="text-rose-400 font-black shrink-0 mt-0.5 text-base leading-none">×</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
