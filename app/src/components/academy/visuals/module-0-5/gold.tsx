"use client";

import React, { useState, useEffect } from "react";
import {
  Database,
  ShieldAlert,
  Target,
  TrendingUp,
  TrendingDown,
  Activity,
  Eye,
  ArrowRight,
  CheckCircle,
  Maximize2,
  ChevronRight,
  AlertTriangle,
  Workflow,
  Compass,
  RefreshCw,
  Globe,
  Layers
} from "lucide-react";
import { UI, InstitutionalFrame, MentorInsight } from "./shared";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Card 1: Gold Structure Is Volatility-Shaped Movement
 */
export const GoldVolatilityStructureSkeleton = () => {
  const [viewMode, setViewMode] = useState<"noise" | "audited">("noise");

  return (
    <InstitutionalFrame label="Volatility-Structure Diagnostic" id="AU-01-SHAPE">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => setViewMode("noise")}
            className={cn(
              "px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border shadow-sm",
              viewMode === "noise" ? "bg-slate-900 text-white border-slate-900 scale-105" : "bg-white text-slate-500 border-slate-100 hover:border-slate-200"
            )}
          >
            Show Raw Price (Speed & Noise)
          </button>
          <button
            onClick={() => setViewMode("audited")}
            className={cn(
              "px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border shadow-sm",
              viewMode === "audited" ? "bg-[#071B36] text-white border-[#071B36] scale-105" : "bg-white text-slate-500 border-slate-100 hover:border-slate-200"
            )}
          >
            Show Audited Structure (Clean Swings)
          </button>
        </div>

        <div className="bg-[#071B36] rounded-[2.5rem] p-10 h-[300px] relative overflow-hidden border border-slate-800 shadow-2xl flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(#0C233E_1px,transparent_1px)] bg-[length:24px_24px]" />

          <svg className="w-full h-full max-w-[500px] overflow-visible pointer-events-none">
            {/* Audited Structure Swings (Background reference when showing noise) */}
            <motion.path
              d="M 20 220 L 120 80 L 220 180 L 320 50 L 420 140"
              fill="none"
              stroke="#D97706"
              strokeWidth={viewMode === "audited" ? "6" : "2"}
              strokeDasharray={viewMode === "audited" ? "none" : "4 4"}
              className="transition-all duration-700"
            />

            {/* Volatile Raw Noise Overlay */}
            <AnimatePresence>
              {viewMode === "noise" && (
                <motion.path
                  initial={{ opacity: 0, pathLength: 0 }}
                  animate={{ opacity: 1, pathLength: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  d="M 20 220 L 40 180 L 30 190 L 60 130 L 50 140 L 90 90 L 80 110 L 120 80 L 140 130 L 130 120 L 170 160 L 160 150 L 190 200 L 180 190 L 220 180 L 240 130 L 230 140 L 270 90 L 260 110 L 300 65 L 290 80 L 320 50 L 340 100 L 335 90 L 370 120 L 360 110 L 390 160 L 380 150 L 420 140"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="3"
                />
              )}
            </AnimatePresence>

            {/* Audited Swing Point Anchors */}
            {viewMode === "audited" && [
              { x: 20, y: 220, label: "L" },
              { x: 120, y: 80, label: "H" },
              { x: 220, y: 180, label: "HL" },
              { x: 320, y: 50, label: "HH" },
              { x: 420, y: 140, label: "HL" }
            ].map((pt, idx) => (
              <g key={idx} className="animate-in zoom-in duration-300">
                <circle cx={pt.x} cy={pt.y} r="8" fill="white" stroke="#D97706" strokeWidth="4" />
                <text x={pt.x} y={pt.y < 120 ? pt.y - 18 : pt.y + 24} textAnchor="middle" fill="#FFFFFF" className="text-[10px] font-black font-mono">
                  {pt.label}
                </text>
              </g>
            ))}
          </svg>

          {/* Quick context box inside visual */}
          <div className="absolute bottom-6 right-8 bg-[#0B1E36] border border-slate-800 px-4 py-2 rounded-xl backdrop-blur-sm">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Reading Quality</span>
            <span className={cn(
              "text-[10px] font-black uppercase tracking-wider",
              viewMode === "noise" ? "text-rose-400" : "text-[#D97706]"
            )}>
              {viewMode === "noise" ? "Mixed / Unstable Noise" : "Clear Structural Swings"}
            </span>
          </div>
        </div>

        <MentorInsight
          text="Gold can make weak structure look important because movement is fast. If you trace every minor tick as a structure change, you'll be constantly whipsawed. Separate the speed from the bones."
          analogy="A rushing river. The water splashes violently over tiny pebbles (volatility noise), but the actual direction is carved by the deep granite bedrock (true structure)."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 2: Gold Swings Are Often Wick-Heavy Turning Points
 */
export const GoldWickHeavySwingPoints = () => {
  const [selectedSwing, setSelectedSwing] = useState<"high" | "low">("high");

  return (
    <InstitutionalFrame label="Swing Integrity Audit" id="AU-02-SWING">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => setSelectedSwing("high")}
            className={cn(
              "px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border shadow-sm",
              selectedSwing === "high" ? "bg-slate-900 text-white border-slate-900 scale-105" : "bg-white text-slate-500 border-slate-100 hover:border-slate-200"
            )}
          >
            Audit Swing High
          </button>
          <button
            onClick={() => setSelectedSwing("low")}
            className={cn(
              "px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border shadow-sm",
              selectedSwing === "low" ? "bg-slate-900 text-white border-slate-900 scale-105" : "bg-white text-slate-500 border-slate-100 hover:border-slate-200"
            )}
          >
            Audit Swing Low
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-white border-2 border-slate-200 rounded-[3rem] p-10 h-[300px] relative overflow-hidden shadow-sm flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(#F1F5F9_1px,transparent_1px)] bg-[length:24px_24px]" />

            <svg className="w-full h-full max-w-[300px] overflow-visible" viewBox="0 0 200 200">
              <line x1="20" y1="100" x2="180" y2="100" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="4 4" />

              {selectedSwing === "high" ? (
                <g key="swing-high-svg" className="animate-in slide-in-from-bottom-6 duration-500">
                  {/* Left Candle */}
                  <rect x="50" y="80" width="16" height="40" fill="#0D9488" rx="2" />
                  <line x1="58" y1="60" x2="58" y2="130" stroke="#0D9488" strokeWidth="2" />

                  {/* Middle Wick-Heavy Candle */}
                  <rect x="92" y="90" width="16" height="30" fill="#BE123C" rx="2" />
                  {/* Violent upper wick */}
                  <line x1="100" y1="20" x2="100" y2="140" stroke="#BE123C" strokeWidth="3" />
                  <circle cx="100" cy="20" r="5" fill="#BE123C" />
                  <text x="100" y="12" textAnchor="middle" fill="#BE123C" className="text-[8px] font-black uppercase tracking-widest">Overshoot Wick</text>

                  {/* Right Candle */}
                  <rect x="134" y="110" width="16" height="30" fill="#BE123C" rx="2" />
                  <line x1="142" y1="95" x2="142" y2="150" stroke="#BE123C" strokeWidth="2" />
                </g>
              ) : (
                <g key="swing-low-svg" className="animate-in slide-in-from-top-6 duration-500">
                  {/* Left Candle */}
                  <rect x="50" y="90" width="16" height="30" fill="#BE123C" rx="2" />
                  <line x1="58" y1="70" x2="58" y2="140" stroke="#BE123C" strokeWidth="2" />

                  {/* Middle Wick-Heavy Candle */}
                  <rect x="92" y="70" width="16" height="40" fill="#0D9488" rx="2" />
                  {/* Violent lower wick */}
                  <line x1="100" y1="60" x2="100" y2="180" stroke="#0D9488" strokeWidth="3" />
                  <circle cx="100" cy="180" r="5" fill="#0D9488" />
                  <text x="100" y="194" textAnchor="middle" fill="#0D9488" className="text-[8px] font-black uppercase tracking-widest">Sweep Wick</text>

                  {/* Right Candle */}
                  <rect x="134" y="60" width="16" height="30" fill="#0D9488" rx="2" />
                  <line x1="142" y1="45" x2="142" y2="100" stroke="#0D9488" strokeWidth="2" />
                </g>
              )}
            </svg>
          </div>

          <div className="space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF3C7] border border-amber-200 text-[10px] font-black text-[#D97706] uppercase tracking-widest">
              Wick Audit Diagnostics
            </span>
            <h4 className="text-xl font-black text-[#071B36] uppercase tracking-tight italic">
              {selectedSwing === "high" ? "The Overshoot Wick High" : "The Stop-Sweep Wick Low"}
            </h4>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wide leading-relaxed">
              {selectedSwing === "high"
                ? "This swing high pierced the local structural level violently before returning. The long upper wick is evidence of aggressive liquidity tapping, but close location and lack of follow-through indicate mixed reading quality."
                : "This swing low swept below previous support, trapping short sellers before aggressively closing high inside the range. Mark this as a key liquidity sweep."}
            </p>
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl flex flex-col gap-2">
              <div className="flex items-center justify-between text-[9px] font-black uppercase tracking-wider text-slate-400">
                <span>Wick Source</span>
                <span className="text-[#071B36]">{selectedSwing === "high" ? "News Volatility / Stop Trap" : "Liquidity Hunt / Event Sweep"}</span>
              </div>
              <div className="flex items-center justify-between text-[9px] font-black uppercase tracking-wider text-slate-400">
                <span>Close Quality</span>
                <span className="text-[#071B36]">{selectedSwing === "high" ? "Weak (Closed in Middle)" : "Strong (Closed in Upper 30%)"}</span>
              </div>
              <div className="flex items-center justify-between text-[9px] font-black uppercase tracking-wider text-slate-400">
                <span>Structure Verdict</span>
                <span className="text-amber-600 font-black">{selectedSwing === "high" ? "Mixed - Await Confirmation" : "Sweep Confirmed"}</span>
              </div>
            </div>
          </div>
        </div>

        <MentorInsight
          text="A swing is not a single candle; it is a visible record of where price successfully turned. When gold turns wick-heavy, you must stop treating every wick as an automatic reversal. Look at the body close first."
          analogy="A spring. The harder you compress it (the lower the wick sweeps), the stronger the rebound. But if it doesn't rebound and close high, the spring is broken."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 3: Trend and Range in Gold
 */
export const GoldTrendRangeStructure = () => {
  const [activeTab, setActiveTab] = useState<"up" | "down" | "range" | "unclear">("up");

  const scenarios = {
    up: {
      title: "Gold Volatility Uptrend",
      desc: "Uptrend structure requires Higher Highs (HH) and Higher Lows (HL) through the swing anchor points, despite volatile intra-day wick noise.",
      points: [
        { x: 50, y: 220, label: "HL" },
        { x: 130, y: 120, label: "HH" },
        { x: 210, y: 170, label: "HL" },
        { x: 300, y: 70, label: "HH" }
      ],
      path: "M 50 220 L 130 120 L 210 170 L 300 70",
      color: "#0D9488"
    },
    down: {
      title: "Gold Volatility Downtrend",
      desc: "Downtrend structure requires Lower Lows (LL) and Lower Highs (LH) showing solid containment under resistance.",
      points: [
        { x: 50, y: 70, label: "LH" },
        { x: 130, y: 170, label: "LL" },
        { x: 210, y: 120, label: "LH" },
        { x: 300, y: 220, label: "LL" }
      ],
      path: "M 50 70 L 130 170 L 210 120 L 300 220",
      color: "#BE123C"
    },
    range: {
      title: "Gold Liquidity Range",
      desc: "Range structure represents balanced rotation between high-contrast resistance and support zones, with wicks piercing both boundaries before closing inside.",
      points: [
        { x: 50, y: 140, label: "Floor" },
        { x: 120, y: 70, label: "Ceiling" },
        { x: 200, y: 140, label: "Floor" },
        { x: 270, y: 70, label: "Ceiling" },
        { x: 330, y: 140, label: "Floor" }
      ],
      path: "M 50 140 L 120 70 L 200 140 L 270 70 L 330 140",
      color: "#D97706"
    },
    unclear: {
      title: "Unclear / Overlapping Noise",
      desc: "Overlapping swings and lack of structure relationships mean the evidence is highly mixed. Sit on your hands and wait for clear location.",
      points: [
        { x: 50, y: 140, label: "L" },
        { x: 120, y: 100, label: "H" },
        { x: 200, y: 160, label: "L" },
        { x: 270, y: 120, label: "LH" },
        { x: 330, y: 140, label: "HL" }
      ],
      path: "M 50 140 L 120 100 L 200 160 L 270 120 L 330 140",
      color: "#64748B"
    }
  };

  const current = scenarios[activeTab];

  return (
    <InstitutionalFrame label="Market Condition Diagnostics" id="AU-03-TYPES">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {(["up", "down", "range", "unclear"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border shadow-sm",
                activeTab === tab ? "bg-slate-900 text-white border-slate-900 scale-105" : "bg-white text-slate-500 border-slate-100 hover:border-slate-200"
              )}
            >
              {tab === "up" ? "Uptrend" : tab === "down" ? "Downtrend" : tab === "range" ? "Range" : "Unclear"}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="bg-[#071B36] rounded-[3rem] p-10 h-[300px] relative overflow-hidden border border-slate-800 shadow-2xl flex items-center justify-center md:col-span-2">
            <div className="absolute inset-0 bg-[radial-gradient(#152C48_1px,transparent_1px)] bg-[length:24px_24px]" />

            {activeTab === "range" && (
              <>
                <div className="absolute top-[20%] left-0 w-full h-px bg-[#FDE2E2] border-t border-dashed" />
                <div className="absolute bottom-[35%] left-0 w-full h-px bg-[#CCECE6] border-t border-dashed" />
              </>
            )}

            <svg className="w-full h-full max-w-[350px] overflow-visible pointer-events-none">
              <motion.path
                key={activeTab}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                d={current.path}
                fill="none"
                stroke={current.color}
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-all duration-500"
              />
              {current.points.map((pt, idx) => (
                <g key={`${activeTab}-${idx}`} className="animate-in zoom-in duration-300">
                  <circle cx={pt.x} cy={pt.y} r="6" fill="white" stroke={current.color} strokeWidth="3" />
                  <foreignObject x={pt.x - 30} y={pt.y < 120 ? pt.y - 30 : pt.y + 12} width="60" height="20">
                    <div className="flex justify-center">
                      <span className="px-1.5 py-0.5 rounded bg-slate-900 text-white border border-slate-800 text-[8px] font-black uppercase tracking-widest shadow-sm">
                        {pt.label}
                      </span>
                    </div>
                  </foreignObject>
                </g>
              ))}
            </svg>
          </div>

          <div className="space-y-4">
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 border border-slate-200 text-[9px] font-black uppercase tracking-widest">
              Structure Analysis
            </span>
            <h4 className="text-xl font-black text-[#071B36] uppercase tracking-tight italic">
              {current.title}
            </h4>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wide leading-relaxed">
              {current.desc}
            </p>
          </div>
        </div>

        <MentorInsight
          text="Gold can move loudly inside the same structure. One massive event candle doesn't automatically mean a new trend has begun. Make sure swing relationships confirm it."
          analogy="A child bouncing on a train seat. They are moving up and down violently (volatility), but they are still traveling forward at 60mph with the train (trend)."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 4: Gold Reaction Areas Are Zones, Not Lines
 */
export const GoldReactionZonesNotLines = () => {
  const [viewMode, setViewMode] = useState<"line" | "zone">("line");

  return (
    <InstitutionalFrame label="Support & Resistance Auditing" id="AU-04-ZONE">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => setViewMode("line")}
            className={cn(
              "px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border shadow-sm",
              viewMode === "line" ? "bg-slate-900 text-white border-slate-900 scale-105" : "bg-white text-slate-500 border-slate-100 hover:border-slate-200"
            )}
          >
            Rigid Line Thinking
          </button>
          <button
            onClick={() => setViewMode("zone")}
            className={cn(
              "px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border shadow-sm",
              viewMode === "zone" ? "bg-[#D97706] text-white border-[#D97706] scale-105" : "bg-white text-slate-500 border-slate-100 hover:border-slate-200"
            )}
          >
            Reaction Zone Thinking
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="bg-white border-2 border-slate-200 rounded-[3.5rem] p-10 h-[300px] relative overflow-hidden flex items-center justify-center shadow-sm">
            <div className="absolute inset-0 bg-[radial-gradient(#F1F5F9_1px,transparent_1px)] bg-[length:24px_24px]" />

            <AnimatePresence mode="wait">
              {viewMode === "line" ? (
                <motion.div
                  key="rigid-line"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-[35%] left-0 w-full h-[2px] bg-rose-500 shadow-[0_0_10px_rgba(239,68,68,0.4)] z-20"
                />
              ) : (
                <motion.div
                  key="reaction-zone"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-[28%] left-0 w-full h-12 bg-[#FEF3C7] border-y border-dashed border-[#FCD34D] z-20"
                />
              )}
            </AnimatePresence>

            <svg className="w-full h-full max-w-[300px] overflow-visible z-10">
              {/* Gold Volatile Price Line wicking through boundaries */}
              <path
                d="M 0 250 L 50 100 L 100 200 L 150 65 L 200 220 L 250 80 L 300 250"
                fill="none"
                stroke="#071B36"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <circle cx="50" cy="100" r="4" fill={viewMode === "line" ? "#BE123C" : "#0D9488"} />
              <circle cx="150" cy="65" r="4" fill={viewMode === "line" ? "#BE123C" : "#0D9488"} />
              <circle cx="250" cy="80" r="4" fill={viewMode === "line" ? "#BE123C" : "#0D9488"} />
            </svg>

            <div className="absolute bottom-6 right-8 text-right bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-xl">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest italic block">Diagnostics Result</span>
              <span className={cn("text-[9px] font-black uppercase tracking-wider", viewMode === "line" ? "text-rose-600" : "text-teal-600")}>
                {viewMode === "line" ? "Rigid Line — Pierced & Trapped" : "Reaction Zone — respected & Held"}
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <span className="px-3 py-1 rounded-full bg-[#FEF3C7] text-amber-700 border border-amber-200 text-[9px] font-black uppercase tracking-widest">
              Support/Resistance Strategy
            </span>
            <h4 className="text-xl font-black text-[#071B36] uppercase tracking-tight italic">
              {viewMode === "line" ? "The Rigid Line Trap" : "Flexibility in Action"}
            </h4>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wide leading-relaxed">
              {viewMode === "line"
                ? "Expecting Gold to turn at a perfect magic price usually fails. The sharp overshoots at $1920.50 and $1921.20 trigger stop-out and force invalid structural conclusions because line-thinking treats every wick as a break."
                : "By marking the area as a flexible 40-pip Reaction Zone, you incorporate wicks, spread distortion, and news noise. You observe price behavior inside the zone instead of chasing exact entry lines."}
            </p>
          </div>
        </div>

        <MentorInsight
          text="Gold reaction areas are zones, not perfect prices. Think of them as soft buffers where liquidity is exchanged, not concrete walls where price bounces to the dollar."
          analogy="A trampoline. You sink into it slightly (the wick through the line) before being propelled upward. The trampoline didn't break; it just adapted to the weight."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 5: Sweeps, Wicks, and Failed Reactions
 */
export const GoldSweepWickFailedReaction = () => {
  const [step, setStep] = useState(1);

  const steps = [
    {
      title: "Step 1: Locate Major Liquidity High",
      desc: "We identify a key historical swing high with heavy pending sell orders sitting just above it.",
      highlights: ["pool"]
    },
    {
      title: "Step 2: The Squeeze (Sweeping High)",
      desc: "Gold spikes aggressively past the resistance line, tapping the orders and triggering buyers to stop out.",
      highlights: ["wick", "pool"]
    },
    {
      title: "Step 3: Close Quality Assessment",
      desc: "Instead of holding above the broken high, the candle body closes deep inside the range, creating a long upper wick.",
      highlights: ["wick", "close"]
    },
    {
      title: "Step 4: Follow-Through Verification",
      desc: "The next candle confirms direction by breaking downward. The sweep is verified as solid structural rejection.",
      highlights: ["confirm"]
    }
  ];

  return (
    <InstitutionalFrame label="Liquidity Sweep Audit" id="AU-05-SWEEP">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex gap-1 bg-slate-100 p-1.5 rounded-xl">
            {[1, 2, 3, 4].map((s) => (
              <button
                key={s}
                onClick={() => setStep(s)}
                className={cn(
                  "w-8 h-8 rounded-lg text-xs font-black transition-all",
                  step === s ? "bg-[#071B36] text-white shadow-md" : "text-slate-400 hover:text-slate-600"
                )}
              >
                {s}
              </button>
            ))}
          </div>
          <button
            onClick={() => setStep((prev) => (prev < 4 ? prev + 1 : 1))}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#D97706] border-2 border-amber-200 px-4 py-2 rounded-xl bg-white hover:bg-slate-50"
          >
            <span>Next Stage</span>
            <ChevronRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="bg-[#071B36] rounded-[3rem] p-10 h-[300px] relative overflow-hidden border border-slate-800 shadow-2xl flex items-center justify-center md:col-span-2">
            <div className="absolute inset-0 bg-[radial-gradient(#152C48_1px,transparent_1px)] bg-[length:24px_24px]" />

            {/* Liquidity High Line */}
            <div className="absolute top-[35%] left-0 w-full h-px bg-[#FDE68A] border-t border-dashed" />
            <div className="absolute top-[35%] left-8 -translate-y-5">
              <span className="text-[8px] font-black text-amber-400 uppercase tracking-widest">Historical Swing High</span>
            </div>

            <svg className="w-full h-full max-w-[350px] overflow-visible pointer-events-none" viewBox="0 0 200 200">
              {/* Baseline path */}
              <path d="M 10 140 L 40 100 L 70 120" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="3 3" />

              {/* Step 1: Liquidity High */}
              <circle cx="40" cy="100" r="4" fill="#D97706" />

              {/* Step 2 & 3: The Sweep Candle */}
              {step >= 2 && (
                <g key="sweep-candle" className="animate-in fade-in duration-300">
                  <line x1="100" y1="30" x2="100" y2="130" stroke="#ef4444" strokeWidth="3" />
                  <rect x="92" y="80" width="16" height="40" fill="#BE123C" rx="2" />
                  <circle cx="100" cy="30" r="4" fill="#ef4444" />

                  {step === 2 && (
                    <text x="100" y="15" textAnchor="middle" fill="#ef4444" className="text-[7px] font-black uppercase tracking-widest">
                      Sweep Liquidated
                    </text>
                  )}
                  {step >= 3 && (
                    <text x="100" y="145" textAnchor="middle" fill="#ef4444" className="text-[7px] font-black uppercase tracking-widest">
                      Close Quality: Low
                    </text>
                  )}
                </g>
              )}

              {/* Step 4: Confirmation Candle */}
              {step === 4 && (
                <g key="confirm-candle" className="animate-in fade-in slide-in-from-top-4 duration-300">
                  <line x1="140" y1="110" x2="140" y2="170" stroke="#ef4444" strokeWidth="3" />
                  <rect x="132" y="120" width="16" height="40" fill="#BE123C" rx="2" />
                  <text x="140" y="184" textAnchor="middle" fill="#ef4444" className="text-[7px] font-black uppercase tracking-widest">
                    Confirm Down
                  </text>
                </g>
              )}
            </svg>
          </div>

          <div className="space-y-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#D97706]">
              {steps[step - 1].title}
            </span>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wide leading-relaxed">
              {steps[step - 1].desc}
            </p>
          </div>
        </div>

        <MentorInsight
          text="A sweep is the start of the question; follow-through is the final answer. Wicks show price travelled beyond the boundary, but close location proves whether sellers regained command."
          analogy="A thief breaking a window (the sweep). If they run away immediately (the close back inside), they didn't steal the goods (no structure change)."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 6: Impulse and Pullback in Gold
 */
export const GoldImpulsePullbackRhythm = () => {
  const [strength, setStrength] = useState<"normal" | "deep" | "failed">("normal");

  return (
    <InstitutionalFrame label="Rhythm Auditing Diagnostic" id="AU-06-RHYTHM">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-center gap-3">
          {(["normal", "deep", "failed"] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setStrength(mode)}
              className={cn(
                "px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border shadow-sm",
                strength === mode ? "bg-slate-900 text-white border-slate-900 scale-105" : "bg-white text-slate-500 border-slate-100 hover:border-slate-200"
              )}
            >
              {mode === "normal" ? "Normal Pullback" : mode === "deep" ? "Deep Retracement" : "Immediate Failure"}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="bg-white border-2 border-slate-200 rounded-[3rem] p-10 h-[300px] relative overflow-hidden shadow-sm flex items-center justify-center md:col-span-2">
            <div className="absolute inset-0 bg-[radial-gradient(#F1F5F9_1px,transparent_1px)] bg-[length:24px_24px]" />

            <svg className="w-full h-full max-w-[350px] overflow-visible pointer-events-none" viewBox="0 0 200 200">
              {/* Impulse leg */}
              <line x1="20" y1="170" x2="100" y2="40" stroke="#0D9488" strokeWidth="6" strokeLinecap="round" />
              <text x="50" y="90" fill="#0D9488" className="text-[8px] font-black uppercase tracking-widest">Impulse</text>

              {/* Pullback variations */}
              <AnimatePresence mode="wait">
                {strength === "normal" && (
                  <motion.g key="normal-pullback" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <line x1="100" y1="40" x2="140" y2="90" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
                    <line x1="140" y1="90" x2="180" y2="30" stroke="#0D9488" strokeWidth="4" strokeDasharray="5 3" strokeLinecap="round" />
                    <text x="135" y="105" fill="#475569" className="text-[7px] font-black uppercase tracking-widest">HL Hold</text>
                  </motion.g>
                )}

                {strength === "deep" && (
                  <motion.g key="deep-pullback" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <line x1="100" y1="40" x2="140" y2="140" stroke="#D97706" strokeWidth="4" strokeLinecap="round" />
                    <line x1="140" y1="140" x2="180" y2="90" stroke="#D97706" strokeWidth="4" strokeDasharray="5 3" strokeLinecap="round" />
                    <text x="145" y="155" fill="#D97706" className="text-[7px] font-black uppercase tracking-widest">Deep Test (Exhaustion)</text>
                  </motion.g>
                )}

                {strength === "failed" && (
                  <motion.g key="failed-pullback" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <line x1="100" y1="40" x2="140" y2="180" stroke="#BE123C" strokeWidth="4" strokeLinecap="round" />
                    <text x="145" y="195" fill="#BE123C" className="text-[7px] font-black uppercase tracking-widest">Failure (Bull Trap)</text>
                  </motion.g>
                )}
              </AnimatePresence>
            </svg>
          </div>

          <div className="space-y-4">
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 border border-slate-200 text-[9px] font-black uppercase tracking-widest">
              Rhythm Audit
            </span>
            <h4 className="text-xl font-black text-[#071B36] uppercase tracking-tight italic">
              {strength === "normal" ? "Healthy Structure Retest" : strength === "deep" ? "Exhaustive Liquidity Test" : "Immediate Bull Trap"}
            </h4>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wide leading-relaxed">
              {strength === "normal" && "The pullback holds neatly at the shallow golden 30-50% zone, indicating active buyers are ready to continue the directional expansion."}
              {strength === "deep" && "Gold retraces deeply (over 70%), wiping out early buyers. This indicates heavy structural exhaustion. The structure is weakening and may become range-bound."}
              {strength === "failed" && "The entire impulse is completely erased, breaking the baseline low. This is a classic bull trap. The impulse was an unsustainable speed bubble."}
            </p>
          </div>
        </div>

        <MentorInsight
          text="The market has to breathe. An impulse is a shout; a pullback is a breath in. Don't panic when Gold pulls back; instead, audit where it decides to hold."
          analogy="A sprinter. A normal runner pauses to catch their breath (normal pullback). An exhausted runner collapses on the track (deep pullback). A runner who ran in the wrong direction had a false start (immediate failure)."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 7: News and Macro Events Can Fake Structure
 */
export const GoldMacroFakeStructure = () => {
  const [viewMode, setViewMode] = useState<"reaction" | "confirmation">("reaction");

  return (
    <InstitutionalFrame label="Macro-Event Auditing" id="AU-07-MACRO">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => setViewMode("reaction")}
            className={cn(
              "px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border shadow-sm",
              viewMode === "reaction" ? "bg-slate-900 text-white border-slate-900 scale-105" : "bg-white text-slate-500 border-slate-100 hover:border-slate-200"
            )}
          >
            Reaction (CPI Release Candle)
          </button>
          <button
            onClick={() => setViewMode("confirmation")}
            className={cn(
              "px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border shadow-sm",
              viewMode === "confirmation" ? "bg-[#071B36] text-white border-[#071B36] scale-105" : "bg-white text-slate-500 border-slate-100 hover:border-slate-200"
            )}
          >
            Confirmation (Next-Day Close)
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-[#071B36] rounded-[3rem] p-10 h-[300px] relative overflow-hidden border border-slate-800 shadow-2xl flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(#152C48_1px,transparent_1px)] bg-[length:24px_24px]" />

            {/* Major Resistance Area */}
            <div className="absolute top-[35%] left-0 w-full h-[2px] bg-[#FDE68A] border-t border-dashed" />
            <div className="absolute top-[35%] left-8 -translate-y-5">
              <span className="text-[8px] font-black text-amber-400 uppercase tracking-widest">Major Resistance Wall</span>
            </div>

            <svg className="w-full h-full max-w-[280px] overflow-visible pointer-events-none" viewBox="0 0 200 200">
              {viewMode === "reaction" ? (
                <g key="reaction-macro" className="animate-in fade-in duration-300">
                  {/* Left normal candles */}
                  <rect x="30" y="100" width="12" height="30" fill="#0D9488" rx="1" />
                  <rect x="50" y="90" width="12" height="20" fill="#0D9488" rx="1" />

                  {/* Violent event candle */}
                  <line x1="100" y1="20" x2="100" y2="130" stroke="#0D9488" strokeWidth="4" />
                  <rect x="92" y="30" width="16" height="70" fill="#0D9488" rx="2" />
                  <circle cx="100" cy="20" r="4" fill="#2DD4BF" />
                  <text x="100" y="12" textAnchor="middle" fill="#2DD4BF" className="text-[7px] font-black uppercase tracking-widest">CPI Spike</text>
                </g>
              ) : (
                <g key="confirm-macro" className="animate-in fade-in duration-300">
                  {/* Violent event candle from yesterday (faded) */}
                  <line x1="80" y1="20" x2="80" y2="130" stroke="#0D9488" strokeWidth="1" strokeOpacity="0.3" />
                  <rect x="72" y="30" width="16" height="70" fill="#0D9488" fillOpacity="0.2" stroke="#0D9488" strokeOpacity="0.3" rx="2" />

                  {/* FAKE OUT / Next day crash back inside */}
                  <line x1="120" y1="40" x2="120" y2="150" stroke="#BE123C" strokeWidth="4" />
                  <rect x="112" y="75" width="16" height="70" fill="#BE123C" rx="2" />
                  <text x="120" y="165" textAnchor="middle" fill="#BE123C" className="text-[7px] font-black uppercase tracking-widest font-mono">Returned Inside</text>
                </g>
              )}
            </svg>
          </div>

          <div className="space-y-6">
            <span className="px-3 py-1 rounded-full bg-[#FDF2F2] text-rose-600 border border-rose-200 text-[9px] font-black uppercase tracking-widest">
              Event Distortion Diagnostic
            </span>
            <h4 className="text-xl font-black text-[#071B36] uppercase tracking-tight italic">
              {viewMode === "reaction" ? "The News Candle Illusion" : "The Structural Re-alignment"}
            </h4>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wide leading-relaxed">
              {viewMode === "reaction"
                ? "During high-impact news releases, Gold can pump $30 in 2 minutes, slicing through historic resistance. Emotional traders call a clean breakout, but the price is moving solely on speed and spread widening, not structure."
                : "The next day, price closes directly back inside the prior range, completely neutralizing the spike. The structural breakout failed completely. The news candle was a liquidity hunt (fake clarity)."}
            </p>
          </div>
        </div>

        <MentorInsight
          text="News can create fast movement long before it creates lasting structure. When macro events strike, a disciplined auditor steps back and waits for the daily close to confirm the reality."
          analogy="A firework. It lights up the entire sky with blinding white light (the CPI spike). But once the explosion ends, the sky remains exactly the same as it was before (range maintained)."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 8: Breaks and Failed Breaks Around Gold Levels
 */
export const GoldBreakFailureQuality = () => {
  const [activeCase, setActiveCase] = useState<1 | 2 | 3>(1);

  const cases = [
    {
      id: 1,
      label: "Confirmed Breakout & Hold",
      desc: "Gold body closes strongly above the resistance zone, consolidation forms above the zone, and price continues higher.",
      verdict: "Valid Structure Change",
      color: "text-teal-600",
      svgPath: "M 20 150 L 80 120 L 140 60 L 180 80 L 240 30"
    },
    {
      id: 2,
      label: "Failed Break & Reversal Trap",
      desc: "Gold spikes above the zone, leaves a massive upper wick, and closes low. The next candle crashes back below.",
      verdict: "Bull Trap / Liquidity Sweep",
      color: "text-rose-600",
      svgPath: "M 20 150 L 80 120 L 140 50 L 160 140 L 220 180"
    },
    {
      id: 3,
      label: "Unclear Break / Flat Congestion",
      desc: "Price closes 10 pips above the level, but has narrow body ranges with weak volume, stalling inside the threshold.",
      verdict: "Unstable / Sit On Hands",
      color: "text-slate-500",
      svgPath: "M 20 150 L 80 120 L 140 100 L 180 105 L 220 100"
    }
  ];

  const current = cases.find(c => c.id === activeCase)!;

  return (
    <InstitutionalFrame label="Breakout Integrity Diagnostic" id="AU-08-BREAK">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {cases.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCase(c.id as any)}
              className={cn(
                "p-4 rounded-xl text-left border-2 transition-all flex flex-col justify-between h-20 shadow-sm",
                activeCase === c.id ? "bg-slate-900 text-white border-slate-900 scale-102" : "bg-white text-slate-500 border-slate-100 hover:border-slate-200"
              )}
            >
              <span className="text-[8px] font-black uppercase tracking-widest text-[#D97706]">Case 0{c.id}</span>
              <span className="text-[10px] font-black uppercase tracking-wider">{c.label}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="bg-[#071B36] rounded-[3rem] p-10 h-[300px] relative overflow-hidden border border-slate-800 shadow-2xl flex items-center justify-center md:col-span-2">
            <div className="absolute inset-0 bg-[radial-gradient(#152C48_1px,transparent_1px)] bg-[length:24px_24px]" />

            {/* Standard Resistance Zone */}
            <div className="absolute top-[45%] left-0 w-full h-8 bg-[#FEF3C7] border-y border-dashed border-[#FCD34D] z-10" />
            <div className="absolute top-[45%] left-8 -translate-y-5 z-20">
              <span className="text-[8px] font-black text-amber-400 uppercase tracking-widest">Historic Resistance Zone</span>
            </div>

            <svg className="w-full h-full max-w-[320px] overflow-visible pointer-events-none" viewBox="0 0 240 200">
              <motion.path
                key={activeCase}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                d={current.svgPath}
                fill="none"
                stroke={activeCase === 1 ? "#0D9488" : activeCase === 2 ? "#BE123C" : "#64748b"}
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-all duration-500"
              />

              {/* Highlight dynamic points */}
              {activeCase === 1 && <circle cx="140" cy="60" r="5" fill="#0D9488" />}
              {activeCase === 2 && <circle cx="140" cy="50" r="5" fill="#BE123C" />}
              {activeCase === 3 && <circle cx="140" cy="100" r="5" fill="#64748b" />}
            </svg>
          </div>

          <div className="space-y-4">
            <span className={cn("px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[9px] font-black uppercase tracking-widest", current.color)}>
              Verdict: {current.verdict}
            </span>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wide leading-relaxed">
              {current.desc}
            </p>
          </div>
        </div>

        <MentorInsight
          text="A breakout in Gold requires quality proof: close quality, hold structure, volume support, and macro context. Do not force an entry model until the proof holds."
          analogy="Testing ice on a lake. Slicing through the surface is the 'break'. If it holds your weight, you have confirmation (Hold). If it cracks and you collapse under, it was a trap (Failed Break)."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 9: Higher-Timeframe Gold Location Comes First
 */
export const GoldHtfLocationFirst = () => {
  const [showHtf, setShowHtf] = useState(false);

  return (
    <InstitutionalFrame label="Multi-Timeframe Context Alignment" id="AU-09-LOCATION">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => setShowHtf(false)}
            className={cn(
              "px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border shadow-sm",
              !showHtf ? "bg-slate-900 text-white border-slate-900 scale-105" : "bg-white text-slate-500 border-slate-100 hover:border-slate-200"
            )}
          >
            Show Local 15m Action Only
          </button>
          <button
            onClick={() => setShowHtf(true)}
            className={cn(
              "px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border shadow-sm",
              showHtf ? "bg-[#D97706] text-white border-[#D97706] scale-105" : "bg-white text-slate-500 border-slate-100 hover:border-slate-200"
            )}
          >
            Apply Macro 4H Location Layer
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="bg-white border-2 border-slate-200 rounded-[3.5rem] p-10 h-[300px] relative overflow-hidden flex items-center justify-center shadow-sm md:col-span-2">
            <div className="absolute inset-0 bg-[radial-gradient(#F1F5F9_1px,transparent_1px)] bg-[length:24px_24px]" />

            {/* Fictional 4H resistance wall layer */}
            <AnimatePresence>
              {showHtf && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "80px" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="absolute top-[15%] left-0 w-full bg-[#FDF2F2] border-y border-dashed border-rose-300 z-20 flex items-center justify-end pr-8"
                >
                  <span className="text-[9px] font-black text-rose-600 uppercase tracking-widest">
                    HTF 4H Rejection Wall
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            <svg className="w-full h-full max-w-[320px] overflow-visible z-10" viewBox="0 0 200 200">
              {/* Local 15m active uptrend */}
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                d="M 10 180 L 50 140 L 80 160 L 130 90 L 160 110 L 195 50"
                fill="none"
                stroke="#0D9488"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <circle cx="195" cy="50" r="5" fill="#0D9488" />

              {showHtf && (
                <g key="htf-clash-indicator" className="animate-in zoom-in duration-300">
                  <circle cx="195" cy="50" r="12" fill="none" stroke="#BE123C" strokeWidth="2" strokeDasharray="3 2" />
                  <text x="180" y="32" textAnchor="end" fill="#BE123C" className="text-[7px] font-black uppercase tracking-widest">
                    Clashing HTF Wall
                  </text>
                </g>
              )}
            </svg>
          </div>

          <div className="space-y-4">
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 border border-slate-200 text-[9px] font-black uppercase tracking-widest">
              Multi-Timeframe Audit
            </span>
            <h4 className="text-xl font-black text-[#071B36] uppercase tracking-tight italic">
              {showHtf ? "Context-Limited Rally" : "Active Bullish Expansion"}
            </h4>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wide leading-relaxed">
              {showHtf
                ? "Context Alert: The 15m local uptrend looks highly bullish in isolation. However, mapping the 4H location reveals price is driving directly into a concrete historical rejection wall. The upside is extremely capped."
                : "Looking solely at the 15m timeframe, the sequence of Higher Highs and Higher Lows suggests a clean, high-probability bullish continuation breakout is occurring."}
            </p>
          </div>
        </div>

        <MentorInsight
          text="Always audit the macro location before buying speed. A beautiful, high-volume lower-timeframe structure break driving straight into a concrete higher-timeframe resistance wall is highly likely to fail."
          analogy="A high-speed sports car racing forward. The car is fast and active, but it is driving straight into a massive mountain. The mountain does not care how fast the car is."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 10: Practice Drill: Clean Break, Sweep, or Mixed?
 */
export const GoldStructureBreakDrill = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const options = [
    {
      id: "A",
      label: "Confirmed Breakout",
      desc: "Buy the breakout because price broke above the reaction area range high.",
      correct: false,
      feedback: "Not correct. Moving above an area is not enough. A break needs close quality, hold, and follow-through."
    },
    {
      id: "B",
      label: "Guaranteed Reversal",
      desc: "Sell immediately because the candle has a long upper wick showing rejection.",
      correct: false,
      feedback: "Not correct. A wick does not guarantee reversal. It is a clue that needs context and follow-through."
    },
    {
      id: "C",
      label: "Mixed / Weak Evidence",
      desc: "The move is active but mixed because the wick, middle close, missing follow-through, and 4H rejection location reduce clarity.",
      correct: true,
      feedback: "Correct! Gold moved above the area, but the upper wick, middle close, missing follow-through, and higher-timeframe location reduce clarity. This is mixed evidence, not a clean break or guaranteed reversal."
    },
    {
      id: "D",
      label: "Timeframe Irrelevant",
      desc: "The higher timeframe does not matter because Gold moves so fast.",
      correct: false,
      feedback: "Not correct. Gold’s speed makes higher-timeframe location more important, not less important. Location dominates speed."
    }
  ];

  return (
    <InstitutionalFrame label="Interactive Practice Scenario" id="AU-05-DRILL">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        <div className="bg-[#071B36] rounded-[3rem] p-8 border border-slate-800 shadow-2xl relative min-h-[350px] flex flex-col justify-between">
          <div className="absolute top-[25%] left-0 w-full h-8 bg-[#FDF2F2] border-y border-dashed border-rose-300 flex items-center justify-end pr-8">
            <span className="text-[8px] font-black text-rose-400 uppercase tracking-widest">HTF 4H Rejection Ceiling</span>
          </div>

          <div className="relative h-44 flex items-center justify-center">
            <svg className="w-full h-full max-w-[450px] overflow-visible" viewBox="0 0 380 150">
              <rect x="50" y="80" width="150" height="50" fill="white" fillOpacity="0.02" stroke="#64748b" strokeWidth="1" strokeDasharray="3 3" />

              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                d="M 0 110 L 50 100 L 100 120 L 150 95 L 200 115 C 220 70, 240 40, 250 45 L 270 120 L 350 110"
                fill="none"
                stroke="#D97706"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <circle cx="250" cy="45" r="5" fill="#ef4444" />
              <text x="250" y="28" textAnchor="middle" fill="#ef4444" className="text-[8px] font-black uppercase tracking-widest">Intra-Day Wick Spike</text>
            </svg>
          </div>

          <div className="text-center text-slate-300 max-w-lg mx-auto">
            <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest block mb-1">Interactive Diagnostic</span>
            <p className="text-xs font-bold leading-relaxed uppercase">
              Gold spikes above a range resistance area during New York activity, leaving a long upper wick and closing near the middle. The next candle has not formed yet, and the 4H chart sits in a historical rejection wall. Classify the disciplined structure reading:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelectedOption(opt.id)}
              className={cn(
                "p-5 rounded-[2rem] text-left border-2 transition-all flex flex-col justify-start gap-3 h-auto min-h-[120px] shadow-sm cursor-pointer",
                selectedOption === opt.id
                  ? opt.correct
                    ? "bg-teal-50 border-teal-200 shadow-teal-100 text-[#071B36]"
                    : "bg-rose-50 border-rose-200 shadow-rose-100 text-[#071B36]"
                  : "bg-white border-slate-100 hover:border-slate-200 text-slate-600"
              )}
            >
              <div className="flex items-center justify-between w-full">
                <span className={cn(
                  "px-2.5 py-0.5 rounded text-[8px] font-black uppercase tracking-widest text-white",
                  selectedOption === opt.id
                    ? opt.correct ? "bg-teal-500" : "bg-rose-500"
                    : "bg-[#071B36]"
                )}>
                  Option {opt.id}
                </span>
                <span className="text-[9px] font-black uppercase tracking-wider">{opt.label}</span>
              </div>
              <p className="text-[10px] font-bold leading-normal uppercase">{opt.desc}</p>
            </button>
          ))}
        </div>

        {selectedOption && (() => {
          const opt = options.find(o => o.id === selectedOption);
          if (!opt) return null;
          return (
            <div className={cn(
              "p-6 rounded-[2rem] border-2 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-300",
              opt.correct
                ? "bg-[#E6F2F0] border-teal-300 text-[#0D9488]"
                : "bg-[#FFF5F5] border-rose-300 text-[#BE123C]"
            )}>
              <div className="flex items-center gap-3 mb-2">
                <span className={cn(
                  "px-3 py-1 rounded-xl text-[9px] font-black uppercase tracking-widest text-white",
                  opt.correct ? "bg-teal-600" : "bg-rose-600"
                )}>
                  {opt.correct ? "Audit Passed" : "Audit Rejected"}
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">XAU/USD Structure Feedback</span>
              </div>
              <p className="text-xs font-bold leading-relaxed uppercase tracking-wide">
                {opt.feedback}
              </p>
            </div>
          );
        })()}

        <MentorInsight
          text="Gold speed can easily pull you into emotional readings. A move beyond an area is only the first clue. Check close location, wick source, and macro location before calling a winner."
          analogy="A radar ping. Just because you see a dot on the screen doesn't mean you launch a rocket. You verify its height, speed, origin, and shape before identifying the target."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 11: Gold Debrief: Reading Structure Through Volatility and Context
 */
export const GoldStructureRoadwayDebrief = () => {
  return (
    <InstitutionalFrame label="Roadway Competency Verified" id="AU-05-DEBRIEF" status="COMPLETE">
      <div className="w-full max-w-4xl mx-auto space-y-12 flex flex-col items-center">
        <div className="relative group">
          <div className="w-24 h-24 rounded-[2.5rem] bg-teal-500 flex items-center justify-center text-white shadow-2xl shadow-teal-100 group-hover:scale-110 transition-transform duration-500">
            <CheckCircle size={48} strokeWidth={2.5} />
          </div>
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -inset-4 border-2 border-dashed border-teal-100 rounded-full" />
        </div>

        <div className="text-center space-y-2">
          <h3 className="text-4xl font-black text-[#071B36] uppercase tracking-tighter italic">Gold Structure Verified</h3>
          <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.4em]">VOLATILE MARKETS MASTERED</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
          {[
            { label: "Volatility Filter", desc: "Speed and noise separated from bedrock swings", icon: <Layers size={16} /> },
            { label: "Wick Diagnostics", desc: "Sweeps and wicks analyzed for body close quality", icon: <Activity size={16} /> },
            { label: "HTF Dominance", desc: "Local structure filtered through macro locations", icon: <Compass size={16} /> }
          ].map((item, i) => (
            <div key={i} className="bg-white border border-slate-200 p-6 rounded-[2rem] shadow-sm flex flex-col gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#E6F2F0] text-teal-600 flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h5 className="text-[10px] font-black uppercase tracking-wider text-[#071B36]">{item.label}</h5>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#071B36] rounded-[2rem] p-6 text-center max-w-md border border-slate-800 shadow-2xl">
          <span className="text-[9px] font-black text-[#D97706] uppercase tracking-widest block mb-1">Bridge to Next Module</span>
          <p className="text-xs text-white font-bold uppercase tracking-wider leading-relaxed">
            Next: Level 0 Synthesis — Evidence vs. Assumption & Confirmation Logic.
          </p>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Placeholder kept for visual-registry import compatibility
 */
export const GoldPlaceholderVisual = () => (
  <GoldStructureRoadwayDebrief />
);
