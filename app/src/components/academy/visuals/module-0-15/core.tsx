import React, { useState } from "react";
import { 
  ArrowRight, 
  RotateCcw, 
  XCircle, 
  CheckCircle2,
  Lock,
  Search,
  Server,
  Layers,
  Coins,
  Activity,
  AlertTriangle,
  Award,
  BookOpen,
  Clipboard,
  ListTodo,
  Tag,
  PenTool,
  CheckSquare,
  Sparkles,
  RefreshCw,
  FileText,
  AlertOctagon,
  Eye,
  ShieldCheck,
  Compass,
  Zap,
  TrendingUp,
  Map,
  ShieldAlert
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  MissionInstitutionalFrame,
  MissionMentorInsight,
  MissionStatusBadge,
  MissionToggleSelector,
  MissionWorkflowStepper
} from "./shared";
import { NoteToggleSelector, NoteDisplayPanel } from "../module-0-14";


/**
 * Card 1: Level0FoundationMissionBrief
 * Visual Key: level-0-foundation-mission-brief
 */
export const Level0FoundationMissionBrief = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  
  const steps = [
    { name: "Observe", desc: "List raw visible candle facts on the chart first." },
    { name: "Map", desc: "Map timeframe structures (HTF map vs. LTF details)." },
    { name: "Cross-check", desc: "Evaluate location priority and market condition." },
    { name: "Stack", desc: "Compile indicators (location, close, context) into a stack." },
    { name: "Verify", desc: "Write a specific, falsifiable verification question." },
    { name: "Decide", desc: "Select action, wait, or active idle based on clarity." },
    { name: "Log", desc: "Record a pre-action reasoning note before advancing." }
  ];

  return (
    <MissionInstitutionalFrame label="Final Mission Map" status="START MISSION">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-700 font-bold max-w-xl text-center leading-relaxed">
          Welcome to the final Level 0 checkpoint. Your mission is to run the complete Lurnava reading workflow on every chart. Click any phase below to trace the workflow.
        </p>

        {/* Stepper map */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 w-full max-w-3xl">
          {steps.map((s, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                type="button"
                key={s.name}
                onClick={() => setActiveStep(idx)}
                className={cn(
                  "p-3 rounded-2xl border transition-all text-left flex flex-col justify-between min-h-[90px] cursor-pointer",
                  isActive
                    ? "bg-[#071B36] text-white border-[#071B36] shadow-md scale-105"
                    : "bg-white text-slate-700 border-slate-200 hover:border-rose-500 hover:bg-slate-50"
                )}
              >
                <span className={cn(
                  "text-[8px] font-black uppercase tracking-wider block mb-1",
                  isActive ? "text-rose-455 text-rose-400" : "text-slate-500"
                )}>
                  Phase {idx + 1}
                </span>
                <span className="text-[10px] font-black leading-tight mb-2 uppercase tracking-tight">{s.name}</span>
                <div className={cn(
                  "w-1.5 h-1.5 rounded-full",
                  isActive ? "bg-rose-400 animate-ping" : "bg-slate-350 bg-slate-400"
                )} />
              </button>
            );
          })}
        </div>

        {/* Stage details */}
        <div className="w-full max-w-2xl bg-[#071B36] text-white rounded-2xl p-5 border border-slate-700 relative overflow-hidden text-left min-h-[110px] flex flex-col justify-center">
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#F43F5E_1px,transparent_1px)] bg-[length:14px_14px]" />
          <div className="relative z-10">
            <span className="text-[8px] font-mono text-rose-400 uppercase tracking-widest block mb-1 font-black">
              Workflow Phase &bull; {steps[activeStep].name}
            </span>
            <p className="text-xs leading-relaxed max-w-2xl text-slate-200 whitespace-normal break-words font-bold">
              {steps[activeStep].desc}
            </p>
          </div>
        </div>

        <MissionMentorInsight 
          text="A professional trader does not click buttons because they feel lucky. They run a rigid, repeatable checklist that filters out predictions and exposes structure."
          analogy="A flight commander doesn't fly a jet by memory. They run the pre-flight checklist, cross-check coordinates, audit engine indicators, and only then start the engines."
        />
      </div>
    </MissionInstitutionalFrame>
  );
};

/**
 * Card 2: RawObservationMissionLayer
 * Visual Key: raw-observation-mission-layer
 */
export const RawObservationMissionLayer = () => {
  const [selectedCase, setSelectedCase] = useState<number>(0);

  const observations = [
    {
      label: "Spike at Highs",
      fact: "Price swept the prior daily swing high ($68,500) and printed an upper wick. The next 15m candle closed back inside the range floor.",
      assumption: "The market is manipulated by whales. It is guaranteed to dump now, so I should short it immediately.",
      why: "The fact describes candle closes, ranges, and sweeps which are visible objects. The assumption includes emotions ('manipulated,' 'guaranteed') and forces a trade before follow-through."
    },
    {
      label: "Midpoint Chop",
      fact: "Price is consolidating in the middle of the daily range. Candlesticks overlap heavily with low volume.",
      assumption: "It is cheap here. A breakout is building, so I must buy before the move gets away.",
      why: "Midpoint overlap is a measurable fact. 'Cheap' is an opinion. 'breakout building' is a guess that leads to midpoint wicks trapping your hands."
    },
    {
      label: "Forex Session Highs",
      fact: "EUR/USD is testing the London session high ceiling. USD Index is testing daily support.",
      assumption: "Euro looks super strong today. It is going to break out and run up.",
      why: "Testing London high is an observable coordinate. 'Euro looks strong' is a subjective feeling. Check USD location before concluding Euro strength."
    }
  ];

  return (
    <MissionInstitutionalFrame label="Observation Layer Auditor" status="OBSERVATION LAB">
      <div className="w-full flex flex-col gap-6 items-center">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full max-w-2xl gap-3">
          <p className="text-xs text-slate-700 font-bold leading-relaxed text-left max-w-sm">
            Separate visible price facts from subjective assumptions. Select an observation scenario below.
          </p>
          <NoteToggleSelector 
            options={observations.map((o, idx) => ({ id: idx.toString(), name: o.label }))}
            selectedId={selectedCase.toString()}
            onChange={(id) => setSelectedCase(parseInt(id))}
          />
        </div>

        {/* Comparison Board */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
          {/* Fact Side */}
          <div className="p-5 rounded-[2rem] bg-emerald-50/50 border border-emerald-250 text-left flex flex-col justify-between min-h-[140px]">
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-[9px] font-black text-emerald-800 uppercase tracking-widest">Observable Chart Facts</span>
                <MissionStatusBadge status="VISIBLE" />
              </div>
              <p className="text-xs font-bold text-emerald-955 italic leading-relaxed whitespace-normal break-words">
                "{observations[selectedCase].fact}"
              </p>
            </div>
            <span className="text-[9px] text-emerald-850 text-emerald-800 font-bold block mt-3">✓ Visible coordinates, closes, and levels</span>
          </div>

          {/* Assumption Side */}
          <div className="p-5 rounded-[2rem] bg-rose-50/50 border border-rose-200 text-left flex flex-col justify-between min-h-[140px]">
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-[9px] font-black text-rose-800 uppercase tracking-widest">Subjective Assumptions</span>
                <MissionStatusBadge status="ASSUMPTION" />
              </div>
              <p className="text-xs font-bold text-rose-955 italic leading-relaxed whitespace-normal break-words">
                "{observations[selectedCase].assumption}"
              </p>
            </div>
            <span className="text-[9px] text-rose-850 text-rose-800 font-bold block mt-3">❌ Contains opinions, hope, and predictions</span>
          </div>
        </div>

        {/* Explain Box */}
        <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-2xl p-5 text-left relative overflow-hidden flex flex-col gap-1.5 shadow-sm">
          <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest block font-black">Audit Detail</span>
          <p className="text-xs text-slate-700 leading-relaxed whitespace-normal break-words">
            {observations[selectedCase].why}
          </p>
        </div>

        <MissionMentorInsight 
          text="Before you decode what a candle means, write down what it is. A wick is a wick, a level is a level. Do not let your wishes turn a wick into a reversal."
          analogy="A radar operator does not log: 'An enemy jet is trying to scare us.' They log: 'Unidentified target at bearing 180, altitude 12,000 feet, speed 450 knots.'"
        />
      </div>
    </MissionInstitutionalFrame>
  );
};

/**
 * Card 3: TimeframeStructureMissionMap
 * Visual Key: timeframe-structure-mission-map
 */
export const TimeframeStructureMissionMap = () => {
  const [activeStep, setActiveStep] = useState<string>("range");

  const views = [
    {
      id: "range",
      label: "HTF Range Middle",
      htf: "4H chart is consolidative, price is stuck in range center, far from boundaries.",
      ltf: "15m chart shows a fast green candle breaking a local swing high.",
      conclusion: "MIDPOINT NOISE. Although the 15m candle broke a swing high, the HTF map shows price is in the middle of a range. The breakout has low clarity."
    },
    {
      id: "edge",
      label: "HTF Range Edge",
      htf: "4H chart shows price testing major daily swing support floor.",
      ltf: "15m chart prints a sweep wick below support and closes back inside.",
      conclusion: "ALIGNED SWEEP. The LTF sweep wick aligns perfectly with the HTF daily support floor. The reading quality is high."
    },
    {
      id: "trend",
      label: "HTF Bullish Trend",
      htf: "4H structure is printing higher swings; price pulled back to support.",
      ltf: "15m chart shows compression holding above the 4H support floor.",
      conclusion: "ALIGNED PULLBACK. The LTF compression holds structural support in an HTF trend. Reading is clear."
    }
  ];

  const current = views.find(v => v.id === activeStep)!;

  return (
    <MissionInstitutionalFrame label="Dual-Timeframe Map auditor" status="MAP LAB">
      <div className="w-full flex flex-col gap-6 items-center">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full max-w-2xl gap-3">
          <p className="text-xs text-slate-700 font-bold leading-relaxed text-left max-w-sm">
            Locate local candle behavior inside the higher timeframe map. Select a timeframe scenario below.
          </p>
          <NoteToggleSelector 
            options={views.map(v => ({ id: v.id, name: v.label }))}
            selectedId={activeStep}
            onChange={setActiveStep}
          />
        </div>

        {/* Dual Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
          {/* HTF Map */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 text-left flex flex-col justify-between min-h-[140px] shadow-sm">
            <div>
              <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-2">Higher Timeframe Map (HTF)</span>
              <p className="text-xs font-bold text-[#071B36] leading-relaxed whitespace-normal break-words">
                "{current.htf}"
              </p>
            </div>
            <div className="border-t border-slate-100 pt-3 flex justify-between items-center mt-3">
              <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">HTF State</span>
              <MissionStatusBadge status="VISIBLE" />
            </div>
          </div>

          {/* LTF detail */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 text-left flex flex-col justify-between min-h-[140px] shadow-sm">
            <div>
              <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-2">Lower Timeframe Detail (LTF)</span>
              <p className="text-xs font-bold text-[#071B36] leading-relaxed whitespace-normal break-words">
                "{current.ltf}"
              </p>
            </div>
            <div className="border-t border-slate-100 pt-3 flex justify-between items-center mt-3">
              <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">LTF Action</span>
              <MissionStatusBadge status="VISIBLE" />
            </div>
          </div>
        </div>

        {/* Conclusion box */}
        <div className="w-full max-w-2xl bg-[#071B36] text-white rounded-2xl p-5 border border-slate-700 relative overflow-hidden text-left min-h-[100px] flex flex-col justify-center">
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#F43F5E_1px,transparent_1px)] bg-[length:14px_14px]" />
          <div className="relative z-10">
            <span className="text-[8px] font-mono text-rose-400 uppercase tracking-widest block mb-1 font-black">Synthesis Conclusion</span>
            <p className="text-xs text-slate-205 text-slate-200 leading-relaxed whitespace-normal break-words">
              {current.conclusion}
            </p>
          </div>
        </div>

        <MissionMentorInsight 
          text="A local 15-minute breakout candle is meaningless unless you know where it lives. If it lives in the middle of a 4-hour range, it is a trap."
          analogy="A hiker seeing a flat path (LTF) might think walking is easy. But checking the topo map (HTF) reveals they are standing right at the edge of a vertical cliff."
        />
      </div>
    </MissionInstitutionalFrame>
  );
};

/**
 * Card 4: ConditionLocationMissionCrosscheck
 * Visual Key: condition-location-mission-crosscheck
 */
export const ConditionLocationMissionCrosscheck = () => {
  const [condition, setCondition] = useState<"trend" | "range" | "chop">("trend");
  const [location, setLocation] = useState<"edge" | "middle">("edge");

  return (
    <MissionInstitutionalFrame label="Condition / Location Auditor" status="CROSSCHECK LAB">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-700 font-bold max-w-xl text-center leading-relaxed">
          Toggle the market environment (condition) and location to see how they combine to determine reading quality.
        </p>

        {/* Controls */}
        <div className="w-full max-w-xl bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row justify-between gap-4 select-none shrink-0">
          <div className="flex flex-col gap-1.5 text-left">
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-wider">1. Market Condition</span>
            <NoteToggleSelector 
              options={[
                { id: "trend", name: "Clean Trend" },
                { id: "range", name: "Wide Range" },
                { id: "chop", name: "Sideways Chop" }
              ]}
              selectedId={condition}
              onChange={(id) => setCondition(id as any)}
            />
          </div>
          
          <div className="flex flex-col gap-1.5 text-left">
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-wider">2. Location Priority</span>
            <NoteToggleSelector 
              options={[
                { id: "edge", name: "High-Priority Edge" },
                { id: "middle", name: "Range Midpoint" }
              ]}
              selectedId={location}
              onChange={(id) => setLocation(id as any)}
            />
          </div>
        </div>

        {/* Audit Output */}
        <div className="w-full max-w-xl bg-white border border-slate-200 rounded-2xl p-5 text-left relative overflow-hidden flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="absolute top-0 left-0 right-0 h-1 bg-rose-500" />
          <div className="flex-1">
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1 font-black">Crosscheck Evaluation</span>
            {condition === "chop" ? (
              <div>
                <h5 className="text-xs font-black text-rose-950 uppercase tracking-tight mb-1 flex items-center gap-1.5">
                  <AlertTriangle size={13} className="text-rose-600 animate-pulse" /> Unclear Reading / High Risk Trap
                </h5>
                <p className="text-xs text-slate-700 leading-relaxed whitespace-normal break-words max-w-sm">
                  Chop overrides location. No matter if price is at an edge or midpoint, sideways overlapping candles mean there is no clear direction. Stand aside.
                </p>
              </div>
            ) : location === "middle" ? (
              <div>
                <h5 className="text-xs font-black text-rose-955 uppercase tracking-tight mb-1 flex items-center gap-1.5">
                  <AlertTriangle size={13} className="text-rose-650 text-rose-600" /> Midpoint Noise / Low Quality
                </h5>
                <p className="text-xs text-slate-700 leading-relaxed whitespace-normal break-words max-w-sm">
                  Midpoint locations are noise. Candles printed in empty space carry low information value, even in clean trends. Avoid action.
                </p>
              </div>
            ) : condition === "trend" ? (
              <div>
                <h5 className="text-xs font-black text-emerald-950 uppercase tracking-tight mb-1 flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-emerald-600 animate-pulse" /> Clear Reading / High Quality
                </h5>
                <p className="text-xs text-slate-700 leading-relaxed whitespace-normal break-words max-w-sm">
                  Ideal alignment. Price is testing a high-priority edge in a clean structural trend. Candle confirmation wicks are highly reliable.
                </p>
              </div>
            ) : (
              <div>
                <h5 className="text-xs font-black text-[#071B36] uppercase tracking-tight mb-1 flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-indigo-600" /> Stabilized Range Edge / Valid Reading
                </h5>
                <p className="text-xs text-slate-700 leading-relaxed whitespace-normal break-words max-w-sm">
                  Clean range context. Price is testing the range floor support edge. Look for sweep closes to verify.
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-col items-end gap-1.5 shrink-0 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100">
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest leading-none">Reading Quality</span>
            <MissionStatusBadge 
              status={
                condition === "chop" 
                  ? "UNCLEAR" 
                  : location === "middle" 
                    ? "MIXED" 
                    : condition === "trend" ? "CLEAR" : "VERIFIED"
              } 
            />
          </div>
        </div>

        <MissionMentorInsight 
          text="A wick at daily support in a trend is evidence. A wick in range center chop is just market breathing. Never evaluate wicks in isolation."
          analogy="A fire alarm ringing in a chemical factory (Location: High priority) is an immediate evacuation trigger. The same alarm ringing on a testing bench in a repair shop (Location: Midpoint) is ignored."
        />
      </div>
    </MissionInstitutionalFrame>
  );
};

/**
 * Card 5: FoundationEvidenceStackBuilder
 * Visual Key: foundation-evidence-stack-builder
 */
export const FoundationEvidenceStackBuilder = () => {
  const [activeLayers, setActiveLayers] = useState<Record<number, boolean>>({});

  const layers = [
    { num: 1, label: "Timeframe Alignment", desc: "LTF movement aligns with HTF trend direction." },
    { num: 2, label: "Structure Status", desc: "Prior major swing high/low box is defined." },
    { num: 3, label: "Market Condition", desc: "Chart is verified as clean trend or wide range." },
    { num: 4, label: "Location Priority", desc: "Price is actively testing a high-priority edge." },
    { num: 5, label: "Close Quality", desc: "Entry candle closed strong, holding inside/outside." },
    { num: 6, label: "Follow-through Hold", desc: "Next candle confirms direction without reversal wicks." },
    { num: 7, label: "Asset Context Check", desc: "Verified session open, DXY, or perp funding blocks." }
  ];

  const toggleLayer = (num: number) => {
    setActiveLayers(prev => ({ ...prev, [num]: !prev[num] }));
  };

  const count = Object.values(activeLayers).filter(Boolean).length;
  const isComplete = count >= 6;

  return (
    <MissionInstitutionalFrame label="Evidence Stack Builder" status="STACK LAB">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-700 font-bold max-w-xl text-center leading-relaxed">
          Assemble the evidence stack layer-by-layer. A high-quality market reading requires at least 6 aligned clues before action is valid.
        </p>

        <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          {/* Layers buttons */}
          <div className="flex flex-col gap-2">
            {layers.map((l) => {
              const active = !!activeLayers[l.num];
              return (
                <button
                  type="button"
                  key={l.num}
                  onClick={() => toggleLayer(l.num)}
                  className={cn(
                    "w-full text-left p-2.5 rounded-xl border transition-all cursor-pointer flex justify-between items-center",
                    active 
                      ? "bg-[#071B36] text-white border-[#071B36] shadow-sm" 
                      : "bg-white text-slate-800 border-slate-200 hover:bg-slate-50"
                  )}
                >
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black uppercase tracking-wider block mb-0.5 text-indigo-400">Layer {l.num}</span>
                    <span className="text-xs font-bold leading-tight">{l.label}</span>
                  </div>
                  <span className="text-xs font-bold">{active ? "✓" : "+"}</span>
                </button>
              );
            })}
          </div>

          {/* Stack Visualization Output */}
          <div className="bg-[#071B36] text-white border border-slate-700 rounded-[2rem] p-6 text-left flex flex-col justify-between min-h-[280px]">
            <div>
              <span className="text-[9px] font-black text-rose-400 uppercase tracking-widest block mb-4 border-b border-slate-700 pb-2">
                Active Evidence Auditor
              </span>
              
              <div className="flex flex-col-reverse gap-1 mb-4 h-[120px] justify-end">
                {layers.map((l) => {
                  const active = !!activeLayers[l.num];
                  return (
                    <div 
                      key={l.num} 
                      className={cn(
                        "h-3 rounded transition-all duration-300 text-[8px] font-black flex items-center justify-center uppercase tracking-widest",
                        active ? "bg-rose-500 text-white scale-102" : "bg-slate-800 text-slate-655 text-slate-600 border border-slate-700"
                      )}
                    >
                      {active ? `L${l.num}: ALIGNED` : ""}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-slate-700 pt-3 flex justify-between items-center">
              <div>
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none block mb-1">Clarity Score</span>
                <span className="text-xs font-bold text-white font-mono">{count} / 7 Layers Aligned</span>
              </div>
              <MissionStatusBadge status={isComplete ? "CLEAR" : count >= 4 ? "MIXED" : "UNCLEAR"} />
            </div>
          </div>
        </div>

        <MissionMentorInsight 
          text="An evidence stack prevents single-clue dependency. If only one candle is green but timeframe, location, and session are conflicting, do not buy."
          analogy="A court judge doesn't convict a suspect because of one fingerprint. They wait for the alignment of fingerprint, video footage, timeline coordinates, and motive stack."
        />
      </div>
    </MissionInstitutionalFrame>
  );
};

/**
 * Card 6: AssetSpecificTrapCheck
 * Visual Key: asset-specific-trap-check
 */
export const AssetSpecificTrapCheck = () => {
  const [selectedAsset, setSelectedAsset] = useState<"fx" | "gold" | "crypto">("fx");

  const specifications = {
    fx: {
      title: "Forex Roadway Audit Checklist",
      traps: [
        { name: "Session Handoffs", desc: "Watch for false moves when volume shifts from London close to NY afternoon." },
        { name: "USD Context Check", desc: "Crosscheck major moves against USD Index daily reaction edges." },
        { name: "ADR Overstretch", desc: "Avoid reading trend continuations if the pair has crossed 90% of its daily range." },
        { name: "News Calendars", desc: "Clear your screen 15m before and after high-impact announcements (CPI, FOMC)." }
      ],
      tip: "Focus: Broad currency relationships and structural boundaries."
    },
    gold: {
      title: "Gold Volatility Audit Checklist",
      traps: [
        { name: "Reaction Zone Precision", desc: "Gold sweeps levels heavily. Draw support zones, not thin rigid price lines." },
        { name: "Wick Diagnostics", desc: "An upper wick is just noise unless printed directly inside high-priority resistance edges." },
        { name: "News Candle Volatility", desc: "Gold spikes heavily on news releases. Do not trust breakout closes printed during CPI." },
        { name: "Follow-through verification", desc: "Gold reverses fast. Wait for next close to confirm breakout hold." }
      ],
      tip: "Focus: Extreme sweep control and close verification."
    },
    crypto: {
      title: "Crypto Fragmentation Checklist",
      traps: [
        { name: "Venue Comparison", desc: "Verify wicks exist across multiple CEX spot charts (Binance, Coinbase)." },
        { name: "BTC Context Check", desc: "Do not buy altcoin breakouts if BTC is consolidating at major daily ceilings." },
        { name: "Funding Pressure Check", desc: "Avoid buying breakouts if funding rate is crowded positive (+0.05% or higher)." },
        { name: "Liquidation Flush Check", desc: "Wicks driven by liquidation spikes are volatile and must hold before assigning a reading." }
      ],
      tip: "Focus: derivatives pressure and venue disagreements."
    }
  };

  const current = specifications[selectedAsset];

  return (
    <MissionInstitutionalFrame label="Asset-Specific Trap Check" status="TRAPS LAB">
      <div className="w-full flex flex-col gap-6 items-center">
        <div className="flex justify-between items-center w-full max-w-2xl">
          <p className="text-xs text-slate-700 font-bold leading-relaxed text-left max-w-sm">
            Toggle roadways to audit asset-specific trap behaviors before validating your final evidence stack.
          </p>
          <NoteToggleSelector 
            options={[
              { id: "fx", name: "Forex Roadway" },
              { id: "gold", name: "Gold Volatility" },
              { id: "crypto", name: "Crypto venue" }
            ]}
            selectedId={selectedAsset}
            onChange={(id) => setSelectedAsset(id as any)}
          />
        </div>

        {/* Checklist Board */}
        <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 text-left flex flex-col justify-between min-h-[200px] shadow-sm">
            <div>
              <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-2">Audit Registry</span>
              <h5 className="text-xs font-black text-[#071B36] uppercase tracking-tight mb-2">
                {current.title}
              </h5>
              <p className="text-xs text-slate-700 leading-relaxed font-bold">
                Roadway Tip: <span className="font-normal text-slate-655 text-slate-600">{current.tip}</span>
              </p>
            </div>
            <div className="border-t border-slate-105 border-slate-100 pt-3 flex justify-between items-center mt-3">
              <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Traps Monitored</span>
              <span className="px-2 py-0.5 rounded-full bg-slate-100 text-[8px] font-black text-slate-600 border border-slate-200 uppercase tracking-widest">Active Check</span>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-5 flex flex-col gap-2.5 justify-center text-left">
            {current.traps.map((trap) => (
              <div key={trap.name} className="px-3 py-2 bg-white rounded-xl border border-slate-100 flex flex-col">
                <span className="text-[8px] font-black text-rose-500 uppercase tracking-wider mb-0.5">{trap.name}</span>
                <span className="text-[11px] font-bold text-[#071B36] leading-snug">{trap.desc}</span>
              </div>
            ))}
          </div>
        </div>

        <MissionMentorInsight 
          text="A gold breakout and a crypto breakout look identical on an empty chart. But crypto breaks fail if spot volume is missing, and gold breaks fail if NFP news releases."
          analogy="A ship captain navigating a shallow bay does not use the same steering inputs as a pilot landing in a crosswind. Each must adapt to their local physical environment."
        />
      </div>
    </MissionInstitutionalFrame>
  );
};

/**
 * Card 7: VerificationQuestionMissionBoard
 * Visual Key: verification-question-mission-board
 */
export const VerificationQuestionMissionBoard = () => {
  const [activeCase, setActiveCase] = useState<number>(0);

  const cases = [
    {
      label: "Support Hold",
      weak: "Will price bounce at support?",
      strong: "Does price sweep the support floor ($1.0850) and print a 15m close back inside on high volume?",
      why: "The weak question is a prediction request. The strong question defines the exact sweep, level, close location, and volume clues to check."
    },
    {
      label: "Gold Breakout",
      weak: "Is this gold move a real trend breakout?",
      strong: "Does the current 1H candle close above the swing ceiling ($2,350) and hold above it during the first 15m of the next hour?",
      why: "The weak question has no measurable parameters. The strong question defines timeframe, level, close quality, and follow-through hold duration."
    },
    {
      label: "Crypto Flush",
      weak: "Is this dump over?",
      strong: "Does spot volume show buying absorption wicks at range lows ($62,000) while funding rates reset below 0.01%?",
      why: "The weak question asks for future certainty. The strong question crosschecks spot wicks and derivatives funding rates."
    }
  ];

  return (
    <MissionInstitutionalFrame label="Verification Question Auditor" status="VERIFICATION LAB">
      <div className="w-full flex flex-col gap-6 items-center">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full max-w-2xl gap-3">
          <p className="text-xs text-slate-700 font-bold leading-relaxed text-left max-w-sm">
            A verification question turns vague confidence into a checkable condition. Select a scenario below.
          </p>
          <NoteToggleSelector 
            options={cases.map((c, idx) => ({ id: idx.toString(), name: c.label }))}
            selectedId={activeCase.toString()}
            onChange={(id) => setActiveCase(parseInt(id))}
          />
        </div>

        {/* Comparison Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
          {/* Weak side */}
          <div className="p-5 rounded-[2rem] bg-rose-50/50 border border-rose-200 text-left flex flex-col justify-between min-h-[140px]">
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-[9px] font-black text-rose-800 uppercase tracking-widest">Weak Verification Question</span>
                <MissionStatusBadge status="ASSUMPTION" />
              </div>
              <p className="text-xs font-bold text-rose-955 italic leading-relaxed whitespace-normal break-words">
                "{cases[activeCase].weak}"
              </p>
            </div>
            <span className="text-[9px] text-rose-800/80 font-medium block mt-3">❌ Asks for predictions and future certainty</span>
          </div>

          {/* Better side */}
          <div className="p-5 rounded-[2rem] bg-emerald-50/50 border border-emerald-250 text-left flex flex-col justify-between min-h-[140px]">
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-[9px] font-black text-emerald-800 uppercase tracking-widest">Strong Verification Question</span>
                <MissionStatusBadge status="VERIFIED" />
              </div>
              <p className="text-xs font-bold text-emerald-955 italic leading-relaxed whitespace-normal break-words">
                "{cases[activeCase].strong}"
              </p>
            </div>
            <span className="text-[9px] text-emerald-800/80 font-bold block mt-3">✓ Specific, yes/no falsifiable conditions</span>
          </div>
        </div>

        {/* Explain Box */}
        <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-2xl p-5 text-left relative overflow-hidden flex flex-col gap-1.5 shadow-sm">
          <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest block font-black">Audit Detail</span>
          <p className="text-xs text-slate-700 leading-relaxed whitespace-normal break-words">
            {cases[activeCase].why}
          </p>
        </div>

        <MissionMentorInsight 
          text="Verification questions force you to wait. If you state what price must do to prove you correct, you cannot chase wicks in real time."
          analogy="A building safety inspector doesn't ask: 'Is this building safe?' They ask: 'Do the concrete columns meet standard load ratings? Yes or No?'"
        />
      </div>
    </MissionInstitutionalFrame>
  );
};

/**
 * Card 8: PracticeDecisionMissionGate
 * Visual Key: practice-decision-mission-gate
 */
export const PracticeDecisionMissionGate = () => {
  const [activeDecision, setActiveDecision] = useState<string>("wait");

  const decisions = [
    {
      id: "action",
      label: "Practice Action may be Valid",
      desc: "Your evidence stack has at least 6 aligned clues. Location is edge, condition is clean trend, close held, and roadway context confirms. You have written your pre-action reasoning and invalidation trigger.",
      tag: "ACTION"
    },
    {
      id: "wait",
      label: "Disciplined Wait State",
      desc: "Price is testing a key zone edge but the candle close is weak, context is mixed, or follow-through is missing. You write your verification condition and choose not to advance or act until it is met.",
      tag: "WAIT"
    },
    {
      id: "idle",
      label: "Active Idle / Stand-Aside",
      desc: "The chart is trapped in a sideways choppy range midpoint. Clues conflict heavily and volume is missing. The correct practice action is to stand aside. Close the simulator and log active idle.",
      tag: "ACTIVE IDLE"
    }
  ];

  const current = decisions.find(d => d.id === activeDecision)!;

  return (
    <MissionInstitutionalFrame label="Decision Gate Auditor" status="DECISION LAB">
      <div className="w-full flex flex-col gap-6 items-center">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full max-w-2xl gap-3">
          <p className="text-xs text-slate-700 font-bold leading-relaxed text-left max-w-sm">
            Toggle decisions to match your evidence stack quality to simulator action.
          </p>
          <NoteToggleSelector 
            options={decisions.map(d => ({ id: d.id, name: d.label.split(" ")[0] + " " + d.label.split(" ")[1] }))}
            selectedId={activeDecision}
            onChange={setActiveDecision}
          />
        </div>

        {/* Display Panel */}
        <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-[2rem] p-6 text-left relative overflow-hidden flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm">
          <div className="absolute top-0 left-0 right-0 h-1 bg-rose-500" />
          <div className="flex-1">
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1">Gate Diagnostic</span>
            <h5 className="text-sm font-black text-[#071B36] uppercase tracking-tight mb-2">
              {current.label}
            </h5>
            <p className="text-xs text-slate-700 leading-relaxed whitespace-normal break-words max-w-lg">
              {current.desc}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1 shrink-0 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100">
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest leading-none">Decision Badge</span>
            <MissionStatusBadge status={current.tag as any} />
          </div>
        </div>

        <MissionMentorInsight 
          text="Every practice session is a test of your hands. If the evidence says wait, the only successful action is wait. Do not let boredom generate clicks."
          analogy="A sniper doesn't shoot because they are tired of waiting. They lie completely still until wind, distance coordinates, and target alignment are perfect."
        />
      </div>
    </MissionInstitutionalFrame>
  );
};

/**
 * Card 9: ReviewNotePrepMissionBoard
 * Visual Key: review-note-prep-mission-board
 */
export const ReviewNotePrepMissionBoard = () => {
  return (
    <MissionInstitutionalFrame label="Review Note Preparation" status="NOTE PREP LAB">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-700 font-bold max-w-xl text-center leading-relaxed">
          Before advancing the simulator or seeing what happened next, you must write down your pre-action reasoning. Stating your evidence, location priority, and review condition before the result prevents hindsight bias.
        </p>

        {/* Mock Index Card Note */}
        <NoteDisplayPanel 
          fields={[
            { label: "Roadway", value: "Gold (XAU/USD)" },
            { label: "Context", value: "H4 Trend Bullish, Daily support swept." },
            { label: "Pre-Action Reasoning", value: "15m candle swept daily support floor ($2,310) and closed strong. Volume spiked on close. No CPI news distorter today." },
            { label: "Review Condition", value: "If price closes and holds below $2,305 floor support, my bullish reading is invalid.", highlight: true },
            { label: "Decision", value: "Simulated Buy at support sweep close." },
            { label: "Takeaway Target", value: "Keep hands inactive during sweeps until 15m candle closes to confirm close hold quality." }
          ]}
        />

        <MissionMentorInsight 
          text="A practice note written before the outcome is the key to training. Stating your invalidation price freezes your original thoughts."
          analogy="A flight cadet logs their landing plan and runway headwind vector before starting the descent. They do not write the plan after the wheels touch the tarmac."
        />
      </div>
    </MissionInstitutionalFrame>
  );
};

/**
 * Card 10: Level0FinalReadingDrill
 * Visual Key: level-0-final-reading-drill
 */
export const Level0FinalReadingDrill = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  const scenarioMetrics = [
    { label: "HTF Location", value: "Upper Range Edge" },
    { label: "LTF Candle", value: "Weak breakout close" },
    { label: "Asset Context", value: "Mixed (1 sup / 1 conf)" },
    { label: "Follow-through", value: "Missing / Hesitates" },
    { label: "Learner State", value: "Urgency / FOMO" }
  ];

  const options = [
    {
      id: "opt1",
      text: "Act immediately because the lower-timeframe candle broke above the range edge.",
      feedback: "Incorrect. One lower-timeframe break is not enough when the close is weak, context is mixed, and follow-through is missing. Acting now is chasing."
    },
    {
      id: "opt2",
      text: "Classify the reading as mixed, write a specific verification condition, and wait for proof.",
      feedback: "Correct! This is disciplined Level 0 behavior. The learner identifies the mixed context, sets a falsifiable verification question, and avoids acting out of urgency."
    },
    {
      id: "opt3",
      text: "Ignore the scenario completely because mixed readings are useless for your practice database.",
      feedback: "Incorrect. A mixed reading is highly valuable. It tells you that there is no clear structural edge, indicating you must wait or stand aside."
    },
    {
      id: "opt4",
      text: "Act because feeling urgency usually means a significant market breakout is occurring.",
      feedback: "Incorrect. Urgency is an emotional reaction to candle speed, not chart evidence. Acting on urgency is a process failure."
    }
  ];

  const handleSelect = (id: string) => {
    setSelectedOption(id);
    setShowFeedback(true);
  };

  const isCorrect = selectedOption === "opt2";

  return (
    <MissionInstitutionalFrame label="Final Mission Classifier" status="PRACTICE DRILL">
      <div className="w-full flex flex-col gap-5 items-center">
        {/* Scenario Details */}
        <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-2xl p-4 shadow-sm text-left select-none shrink-0">
          <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-2">Final Capstone Scenario</span>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {scenarioMetrics.map((det) => (
              <div key={det.label} className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[8px] font-black text-slate-500 uppercase tracking-wider block mb-1">{det.label}</span>
                <span className="text-[10px] font-bold text-[#071B36] uppercase tracking-tight block leading-snug">{det.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Options grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl">
          {options.map((opt) => {
            const isSelected = selectedOption === opt.id;
            return (
              <button
                type="button"
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                className={cn(
                  "p-3.5 border rounded-2xl text-left flex items-start gap-3 transition-all cursor-pointer min-h-[60px]",
                  isSelected
                    ? isCorrect
                      ? "bg-emerald-50/70 border-emerald-500 text-emerald-955"
                      : "bg-rose-50/70 border-rose-500 text-rose-955"
                    : "bg-white text-slate-800 border-slate-200 hover:border-indigo-500 hover:bg-slate-50"
                )}
              >
                <span className={cn(
                  "w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-black shrink-0",
                  isSelected
                    ? isCorrect
                      ? "bg-emerald-500 text-white border-emerald-500"
                      : "bg-rose-500 text-white border-rose-500"
                    : "bg-slate-50 text-slate-550 text-slate-500 border-slate-200"
                )}>
                  {opt.id === "opt1" ? "A" : opt.id === "opt2" ? "B" : opt.id === "opt3" ? "C" : "D"}
                </span>
                <span className="text-xs font-bold leading-tight">{opt.text}</span>
              </button>
            );
          })}
        </div>

        {/* Feedback Display */}
        {showFeedback && (
          <div className={cn(
            "w-full max-w-2xl rounded-2xl p-4 border text-left min-h-[85px] transition-all",
            isCorrect
              ? "bg-emerald-50 text-emerald-900 border-emerald-350"
              : "bg-rose-50 text-rose-900 border-rose-350"
          )}>
            <span className="text-[9px] font-black uppercase tracking-wider block mb-1">Drill Result &bull; {isCorrect ? "Passed" : "Failed"}</span>
            <p className="text-xs font-bold leading-relaxed whitespace-normal break-words">
              {options.find(o => o.id === selectedOption)!.feedback}
            </p>
          </div>
        )}

        <MissionMentorInsight 
          text="Mixed reading context warns you to wait. Urgency is an emotion. If you click because price is moving fast, you pay a tax to the market."
          analogy="A cadet pilot encountering heavy runway wind shear (mixed context) does not try to force a landing out of urgency. They pull up, enter a holding pattern, and wait for confirmation."
        />
      </div>
    </MissionInstitutionalFrame>
  );
};

/**
 * Card 11: Level0FoundationMissionDebrief
 * Visual Key: level-0-foundation-mission-debrief
 */
export const Level0FoundationMissionDebrief = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>("obs");

  const competencies = [
    { id: "obs", title: "Objective Observation", desc: "List raw visible chart wicks and closes, stripping out predictions and feelings.", badge: "CLEAR" },
    { id: "map", title: "Dual Timeframe Mapping", desc: "Mapping structure (HTF map vs. LTF details) to locate price zones.", badge: "CLEAR" },
    { id: "cross", title: "Location / Condition Audit", desc: "Crosschecking location priority (edges) and condition (trend/range) to grade clarity.", badge: "CLEAR" },
    { id: "stack", title: "Evidence Stacking", desc: "Layering multiple independent clues (close, location, context) into a single analysis.", badge: "CLEAR" },
    { id: "verify", title: "Verification Question", desc: "Writing testable, yes/no falsifiable invalidation triggers prior to advancing.", badge: "VERIFIED" },
    { id: "decide", title: "Practice Discipline", desc: "Choosing action, wait, or active idle based on reading quality, avoiding urgency traps.", badge: "PROMOTED" }
  ];

  const current = competencies.find(c => c.id === selectedTopic)!;

  return (
    <MissionInstitutionalFrame label="Mastery Dashboard" status="PROMOTED">
      <div className="w-full flex flex-col gap-6 items-center">
        <p className="text-xs text-slate-700 font-bold max-w-xl text-center leading-relaxed">
          Level 0 graduation requires mastery of the 6 foundational competencies. Select a parameter to audit your readiness score.
        </p>

        {/* steppers */}
        <div className="flex flex-wrap gap-2.5 justify-center max-w-xl">
          {competencies.map(c => (
            <button
              type="button"
              key={c.id}
              onClick={() => setSelectedTopic(c.id)}
              className={cn(
                "px-3 py-1.5 border rounded-xl text-xs font-bold transition-all cursor-pointer",
                selectedTopic === c.id 
                  ? "bg-[#071B36] text-white border-[#071B36] shadow-sm" 
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
              )}
            >
              {c.title}
            </button>
          ))}
        </div>

        {/* Detail Panel */}
        <div className="w-full max-w-xl bg-white border border-slate-200 rounded-2xl p-5 text-left relative overflow-hidden flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm">
          <div className="absolute top-0 left-0 right-0 h-1 bg-rose-500" />
          <div className="flex-1">
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1">Readiness Parameter</span>
            <h5 className="text-xs font-black text-[#071B36] uppercase tracking-tight mb-2">
              {current.title}
            </h5>
            <p className="text-xs text-slate-750 text-slate-700 leading-relaxed whitespace-normal break-words max-w-lg">
              {current.desc}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1.5 shrink-0 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100">
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest leading-none">Graduation Status</span>
            <MissionStatusBadge status={current.badge as any} />
          </div>
        </div>

        <MissionMentorInsight 
          text="Graduating from Level 0 means you have built the cockpit discipline to read charts. In Level 1, you will study actual order matching mechanics."
          analogy="A cadet pilot graduating from ground training is now permitted to enter the flight school hangar to sit in the real cockpit. Your training is just beginning."
        />
      </div>
    </MissionInstitutionalFrame>
  );
};
