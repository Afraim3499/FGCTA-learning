"use client";

import { useState } from "react";
import { Brain, Star, TrendingUp, HelpCircle, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

interface SkillProfileCardProps {
  level: number;
  profile: {
    chartReading: number;
    marketStructure: number;
    executionPrecision: number;
    riskManagement: number;
    swingMarketMastery: number;
    flatMarketMastery: number;
    forexUnderstanding: number;
    goldSpecifics: number;
    cryptoDerivatives: number;
  } | null;
}

export function SkillProfileCard({ level, profile }: SkillProfileCardProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Safe defaults if profile is null
  const data = {
    chartReading: profile?.chartReading ?? 0,
    marketStructure: profile?.marketStructure ?? 0,
    executionPrecision: profile?.executionPrecision ?? 0,
    riskManagement: profile?.riskManagement ?? 0,
    swingMarketMastery: profile?.swingMarketMastery ?? 0,
    flatMarketMastery: profile?.flatMarketMastery ?? 0,
    forexUnderstanding: profile?.forexUnderstanding ?? 0,
    goldSpecifics: profile?.goldSpecifics ?? 0,
    cryptoDerivatives: profile?.cryptoDerivatives ?? 0,
  };

  const domains = [
    { key: "chartReading", val: data.chartReading },
    { key: "marketStructure", val: data.marketStructure },
    { key: "executionPrecision", val: data.executionPrecision },
    { key: "riskManagement", val: data.riskManagement },
    { key: "swingMarketMastery", val: data.swingMarketMastery },
    { key: "flatMarketMastery", val: data.flatMarketMastery },
    { key: "forexUnderstanding", val: data.forexUnderstanding },
    { key: "goldSpecifics", val: data.goldSpecifics },
    { key: "cryptoDerivatives", val: data.cryptoDerivatives },
  ];

  // Stable Main Domain Labels
  const getStableLabel = (key: string) => {
    const labels: Record<string, string> = {
      chartReading: "Chart Reading",
      marketStructure: "Market Structure",
      executionPrecision: "Execution Precision",
      riskManagement: "Risk Management",
      swingMarketMastery: "Swing Mastery",
      flatMarketMastery: "Flat Mastery",
      forexUnderstanding: "Forex Edge",
      goldSpecifics: "Gold Edge",
      cryptoDerivatives: "Crypto Edge"
    };
    return labels[key] || key;
  };

  // Dynamic Level-Based Subtitles
  const getScaledSubLabel = (key: string) => {
    if (level <= 3) {
      const subtitles: Record<string, string> = {
        chartReading: "Visualizing Price Feeds",
        marketStructure: "Basic Range Boundaries",
        executionPrecision: "Order Entry Protocol",
        riskManagement: "Fixed Fractional Sizing",
        swingMarketMastery: "Trend Pullbacks",
        flatMarketMastery: "Range Bound Fills",
        forexUnderstanding: "Forex Basics & Pairs",
        goldSpecifics: "Gold Spreads & Basics",
        cryptoDerivatives: "Spot & Perp Basics"
      };
      return subtitles[key] || "";
    } else if (level <= 6) {
      const subtitles: Record<string, string> = {
        chartReading: "Advanced Structure Mapping",
        marketStructure: "Break & Retest Cycles",
        executionPrecision: "Precision Trigger Timing",
        riskManagement: "Drawdown Management",
        swingMarketMastery: "Swing Structural Shift",
        flatMarketMastery: "Mean Reversion Fills",
        forexUnderstanding: "Forex Session Flows",
        goldSpecifics: "COMEX Real Yields",
        cryptoDerivatives: "Funding Rate Bleed"
      };
      return subtitles[key] || "";
    } else {
      const subtitles: Record<string, string> = {
        chartReading: "Order Book Liquidity",
        marketStructure: "Macro Cycle Invalidation",
        executionPrecision: "Institutional Order Routing",
        riskManagement: "Portfolio Risk Architecture",
        swingMarketMastery: "Expansion Regime Exploitation",
        flatMarketMastery: "Compressed Regime Arbitrage",
        forexUnderstanding: "Forex Capital Liquidity",
        goldSpecifics: "Gold Yield Inversions",
        cryptoDerivatives: "Delta Neutral Arbitrage"
      };
      return subtitles[key] || "";
    }
  };

  // SVG Radar Coordinates Calculation
  const N = domains.length;
  const cx = 150;
  const cy = 135;
  const rMax = 80;

  const getCoordinates = (index: number, value: number) => {
    const angle = (2 * Math.PI * index) / N - Math.PI / 2;
    const r = (Math.min(value, 100) / 100) * rMax;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    return { x, y };
  };

  // Generate background spiderweb grid points
  const getGridPoints = (levelPct: number) => {
    const points: string[] = [];
    for (let i = 0; i < N; i++) {
      const angle = (2 * Math.PI * i) / N - Math.PI / 2;
      const r = (levelPct / 100) * rMax;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      points.push(`${x},${y}`);
    }
    return points.join(" ");
  };

  // Generate user value polygon points
  const valuePoints = domains
    .map((d, i) => {
      const { x, y } = getCoordinates(i, d.val);
      return `${x},${y}`;
    })
    .join(" ");

  const activeDomain = hoveredIndex !== null ? domains[hoveredIndex] : null;

  return (
    <div className="bg-[#090d16] rounded-3xl p-6 border border-slate-800 shadow-xl hover:shadow-2xl transition-all flex flex-col md:flex-row gap-6 items-center min-h-[350px] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />

      {/* Radar Chart SVG Visual */}
      <div className="relative w-[280px] h-[260px] shrink-0">
        <svg className="w-full h-full" viewBox="0 0 300 270">
          {/* Concentric grid lines */}
          {[20, 40, 60, 80, 100].map((gridLevel) => (
            <polygon
              key={gridLevel}
              points={getGridPoints(gridLevel)}
              fill="none"
              stroke="#1e293b"
              strokeWidth="0.8"
            />
          ))}

          {/* Axis lines from center to outer limit */}
          {domains.map((_, i) => {
            const outer = getCoordinates(i, 100);
            return (
              <line
                key={i}
                x1={cx}
                y1={cy}
                x2={outer.x}
                y2={outer.y}
                stroke="#1e293b"
                strokeWidth="0.8"
              />
            );
          })}

          {/* User Value Area Polygon */}
          <polygon
            points={valuePoints}
            fill="rgba(99, 102, 241, 0.15)"
            stroke="#6366f1"
            strokeWidth="2"
            className="transition-all duration-500"
          />

          {/* Interactive dots and hover trigger lines */}
          {domains.map((d, i) => {
            const pt = getCoordinates(i, d.val);
            const outerPt = getCoordinates(i, 100);
            const isHovered = hoveredIndex === i;

            return (
              <g key={i}>
                {/* Outer index coordinate guide dot */}
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r={isHovered ? "5" : "3.5"}
                  fill={isHovered ? "#818cf8" : "#6366f1"}
                  className="transition-all duration-200 cursor-pointer"
                />

                {/* Invisible hover-trigger lines extending from center */}
                <line
                  x1={cx}
                  y1={cy}
                  x2={outerPt.x}
                  y2={outerPt.y}
                  stroke="transparent"
                  strokeWidth="22"
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Details & List Section */}
      <div className="flex-1 w-full space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-850 pb-3">
          <Activity className="w-5 h-5 text-indigo-400" />
          <div>
            <h3 className="text-sm font-bold text-slate-200">Expertise Calibration Profile</h3>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Interactive Radar Analysis</p>
          </div>
        </div>

        {/* Dynamic Hover Details */}
        <div className="h-16 flex flex-col justify-center bg-slate-950/40 p-3 rounded-xl border border-slate-850">
          {activeDomain ? (
            <div>
              <div className="flex justify-between items-center text-xs">
                <div className="flex flex-col">
                  <span className="font-bold text-indigo-300">{getStableLabel(activeDomain.key)}</span>
                  <span className="text-[9px] text-slate-400 font-medium italic mt-0.5">{getScaledSubLabel(activeDomain.key)}</span>
                </div>
                <span className="font-extrabold text-indigo-400">{Math.round(activeDomain.val)}%</span>
              </div>
              <p className="text-[10px] text-slate-500 mt-1 leading-tight truncate">
                Focus: {activeDomain.val >= 80 ? "Mastered at current routine limits." : activeDomain.val >= 50 ? "Satisfactory. Practice Strategy Lab for optimization." : "Attention Required. Complete course lessons to build competence."}
              </p>
            </div>
          ) : (
            <div className="text-center text-[10px] text-slate-500 italic py-1">
              *Hover over any axis point on the chart to inspect skill details.
            </div>
          )}
        </div>

        {/* Quick summary of domains list */}
        <div className="grid grid-cols-3 gap-2">
          {domains.slice(0, 6).map((d, i) => (
            <div 
              key={i} 
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={cn(
                "p-2 rounded-lg border text-center transition-all cursor-pointer",
                hoveredIndex === i 
                  ? "bg-indigo-950/40 border-indigo-500/30 shadow"
                  : "bg-slate-950 border-slate-900"
              )}
            >
              <span className="block text-[8px] text-slate-500 font-bold uppercase truncate">{getStableLabel(d.key)}</span>
              <span className={cn("text-xs font-black", d.val >= 70 ? "text-emerald-400" : d.val >= 40 ? "text-amber-400" : "text-slate-400")}>
                {Math.round(d.val)}%
              </span>
            </div>
          ))}
          {/* Asset specializations pill */}
          <div className="col-span-3 p-2 bg-indigo-950/15 border border-indigo-900/10 rounded-lg flex justify-between items-center text-[9px] text-indigo-300 px-3">
            <span className="font-bold uppercase tracking-wider">Assets Specialization:</span>
            <div className="flex gap-2">
              <span className="font-extrabold">Forex: {Math.round(data.forexUnderstanding)}%</span>
              <span className="text-slate-700">|</span>
              <span className="font-extrabold">Gold: {Math.round(data.goldSpecifics)}%</span>
              <span className="text-slate-700">|</span>
              <span className="font-extrabold">Crypto: {Math.round(data.cryptoDerivatives)}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
