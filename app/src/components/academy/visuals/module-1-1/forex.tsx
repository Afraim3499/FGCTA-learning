"use client";

import React, { useState } from "react";
import { 
  Compass, 
  Layout, 
  AlertTriangle, 
  CheckCircle2, 
  Info, 
  ChevronRight, 
  TrendingUp, 
  ShieldAlert, 
  Sliders,
  CheckCircle,
  XCircle,
  Clock,
  Coins,
  Globe,
  Gauge
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { InstitutionalFrame, MentorInsight, UI } from "./shared";

/**
 * 1. ForexPlanSessionWindows: Session clock/timeline selector
 */
export const ForexPlanSessionWindows = () => {
  const [selectedSession, setSelectedSession] = useState<"asia" | "london" | "ny">("london");

  const sessionDetails = {
    asia: {
      hours: "7:00 PM - 4:00 AM EST",
      status: "GATED (REVERSAL PLANS BLOCKED)",
      statusColor: "text-rose-600 bg-rose-50 border-rose-100",
      desc: "Low volume, quiet ranges. Most breakout plans will fail due to lack of institutional momentum. Plans should focus strictly on mean-reversion or remain inactive.",
      tips: "Do not plan trend-following entries here. Gaps and thin orderbooks are common."
    },
    london: {
      hours: "3:00 AM - 12:00 PM EST",
      status: "ACTIVE (PEAK VOLATILITY)",
      statusColor: "text-teal-600 bg-teal-50 border-teal-100",
      desc: "Highest volume session. Institutional trends are established here. Breakout and pullback plans are highly viable at major structure levels.",
      tips: "Look for initial session sweeps and subsequent trend expansion structures."
    },
    ny: {
      hours: "8:00 AM - 5:00 PM EST",
      status: "ACTIVE (EXPANSION & REVERSAL)",
      statusColor: "text-teal-600 bg-teal-50 border-teal-100",
      desc: "US economic releases trigger major reversals or expansions. The overlap window (8 AM - 12 PM) provides maximum liquidity.",
      tips: "DXY correlation is most critical during US economic release hours."
    }
  };

  const current = sessionDetails[selectedSession];

  return (
    <InstitutionalFrame label="Session-Locked Planning" id="FOR-1.1-SESS">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <p className="text-xs text-slate-500 font-semibold text-center max-w-xl mx-auto">
          Forex plans must be gated by regional session hours. Click a session to verify its alignment with your plan.
        </p>

        {/* Timeline Buttons */}
        <div className="grid grid-cols-3 gap-3">
          {(["asia", "london", "ny"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setSelectedSession(s)}
              className={cn(
                "p-4 rounded-2xl border text-center transition-all duration-300 shadow-sm flex flex-col items-center gap-1.5",
                selectedSession === s
                  ? "bg-[#071B36] text-white border-[#071B36] scale-105"
                  : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50"
              )}
            >
              <Clock size={16} className={selectedSession === s ? "text-teal-400" : "text-slate-400"} />
              <span className="text-xs font-black uppercase tracking-wider">{s === "ny" ? "New York" : s}</span>
              <span className="text-[9px] font-mono text-slate-400">{sessionDetails[s].hours.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Display Panel */}
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            {/* Info Side */}
            <div className="md:col-span-7 space-y-4">
              <div className="space-y-1.5">
                <span className={cn("text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border inline-block", current.statusColor)}>
                  {current.status}
                </span>
                <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">{selectedSession} Session Profile</h4>
              </div>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                {current.desc}
              </p>
              <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-bold text-slate-600 flex items-start gap-2">
                <Info size={14} className="text-teal-600 shrink-0 mt-0.5" />
                <span>{current.tips}</span>
              </div>
            </div>

            {/* Visual Clock representation */}
            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden min-h-[180px]">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
              <div className="space-y-3 relative z-10 text-center flex-1 flex flex-col justify-center">
                <Clock size={32} className="text-teal-400 mx-auto animate-pulse" />
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Active Window</span>
                  <span className="text-base font-black font-mono text-white tracking-tight">{current.hours}</span>
                </div>
              </div>
              <div className="text-[8px] font-mono text-slate-500 text-center border-t border-slate-800 pt-2">
                ZONE GATING SYSTEM ACTIVE
              </div>
            </div>

          </div>
        </div>

        <MentorInsight 
          text="A trade level is only as good as the volume defending it. NY and London sessions provide the institutional liquidity needed to fuel consistent moves." 
          analogy="Attempting to sail a ship during a dead calm (Asian session) gets you nowhere. You must wait for the tide and wind (London/NY Open) to fill the sails."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 2. ForexSessionExtremesInvalidation: Stop sweep buffer calculator
 */
export const ForexSessionExtremesInvalidation = () => {
  const [buffer, setBuffer] = useState<number>(5); // in pips

  const isValid = buffer >= 12;

  return (
    <InstitutionalFrame label="Session Sweep Buffer Calculator" id="FOR-1.1-SWP">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Controls (Left) */}
          <div className="md:col-span-6 bg-white border border-slate-200 rounded-[2rem] p-6 space-y-6 flex flex-col justify-center shadow-sm">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Configure Protective Buffer</span>
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Stop-Loss Buffer Beyond Extremes</span>
                <span className={cn("font-mono", isValid ? "text-teal-600" : "text-rose-600")}>{buffer} pips</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="25" 
                value={buffer}
                onChange={(e) => setBuffer(parseInt(e.target.value))}
                className="w-full accent-[#071B36]"
              />
              <span className="text-[9px] font-bold text-slate-400 block">Adding a buffer protects your trade plan from sudden liquidity sweeps.</span>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-bold text-slate-600 flex items-start gap-2">
              <Info size={14} className="text-teal-600 shrink-0 mt-0.5" />
              <span>Recommended sweep buffer for GBP/USD and EUR/USD is 12 - 15 pips beyond session extremes.</span>
            </div>
          </div>

          {/* Graphic Panel (Right) */}
          <div className="md:col-span-6 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:24px_24px]" />
            
            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-mono font-black text-slate-400 uppercase tracking-widest">Visual Structure</span>
                <span className={cn(
                  "text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border",
                  isValid ? "bg-teal-950 border-teal-800 text-teal-300" : "bg-rose-950 border-rose-800 text-rose-300"
                )}>
                  {isValid ? "Buffer Secured" : "Swept Trap Risk"}
                </span>
              </div>

              {/* Graphical Candlestick and Stop representation */}
              <div className="h-32 w-full bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden">
                {/* Asian Session Low Line */}
                <div className="absolute left-0 right-0 top-1/2 border-t border-slate-700 border-dashed z-0 flex justify-between px-2">
                  <span className="text-[6px] font-mono text-slate-400 -mt-2">ASIAN SESSION LOW</span>
                </div>

                {/* Protective Stop Line */}
                <div 
                  className="absolute left-0 right-0 border-t transition-all duration-300 z-10 flex justify-between px-2"
                  style={{ top: `${50 + buffer * 1.5}%` }}
                >
                  <span className={cn("text-[6px] font-mono -mt-2.5", isValid ? "text-teal-400" : "text-rose-500")}>
                    INVALIDATION CHECKPOINT (STOP-LOSS)
                  </span>
                  <span className={cn("text-[6px] font-mono -mt-2.5", isValid ? "text-teal-400" : "text-rose-500")}>
                    -{buffer} pips
                  </span>
                </div>

                <div className="text-[7px] text-slate-500 font-mono mt-auto relative z-20">
                  {isValid 
                    ? "Safe: Stop-loss is positioned beyond the typical institutional sweep corridor."
                    : "Dangerous: Stop-loss lies inside the high-frequency trigger zone. A spike will stop you out."}
                </div>
              </div>
            </div>

            <div className="text-[9px] text-slate-500 font-bold text-center mt-4">
              Liquidity Corridor: 0 to 10 pips below extremes. Place stops at 12+ pips.
            </div>
          </div>

        </div>
        
        <MentorInsight 
          text="Institutions know exactly where retail orders are placed: precisely at the session highs and lows. They sweep these levels to trigger liquidity, then reverse. Plan for this behavior." 
          analogy="Placing your stop-loss right on the Asian low is like hiding behind a glass window. It offers no protection. Step back into the shadow (structural buffer) to remain unseen."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 3. ForexDxyCorrelationMatrix: Aligned vs. Divergent Bet
 */
export const ForexDxyCorrelationMatrix = () => {
  const [selectedDxy, setSelectedDxy] = useState<"rejection" | "breakout">("rejection");

  const isAligned = selectedDxy === "rejection";

  return (
    <InstitutionalFrame label="DXY Correlation Alignment" id="FOR-1.1-DXY">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="flex justify-center gap-3 mb-2">
          <button
            onClick={() => setSelectedDxy("rejection")}
            className={cn(
              "px-5 py-2 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              selectedDxy === "rejection"
                ? "bg-[#071B36] text-white border-[#071B36]"
                : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            DXY tests key resistance & rejects
          </button>
          <button
            onClick={() => setSelectedDxy("breakout")}
            className={cn(
              "px-5 py-2 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm",
              selectedDxy === "breakout"
                ? "bg-[#071B36] text-white border-[#071B36]"
                : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            )}
          >
            DXY breakouts strongly upward
          </button>
        </div>

        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            {/* Context Summary */}
            <div className="md:col-span-7 space-y-4">
              <div className="space-y-1.5">
                <span className={cn(
                  "text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border inline-block",
                  isAligned ? "bg-teal-50 border-teal-200 text-teal-800" : "bg-rose-50 border-rose-200 text-rose-800"
                )}>
                  {isAligned ? "High Probability Alignment" : "High Divergence Risk"}
                </span>
                <h4 className="text-base font-black text-[#071B36] uppercase tracking-tight">
                  {isAligned ? "EUR/USD Long Setup Confirmed" : "EUR/USD Long Plan Blocked"}
                </h4>
              </div>

              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                {isAligned
                  ? "Your technical setup calls for a EUR/USD long. The US Dollar Index (DXY) is rejecting major resistance. This creates a powerful alignment: USD weakness supports your long thesis, significantly improving the probability of the trade plan."
                  : "Your technical setup calls for a EUR/USD long. However, the US Dollar Index (DXY) is accelerating upward in a strong breakout. Planning a long against a surging USD index is an extremely low-probability trade. Your plan must be discarded."}
              </p>

              <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-bold text-slate-600 flex items-start gap-2">
                <Info size={14} className="text-teal-600 shrink-0 mt-0.5" />
                <span>
                  {isAligned 
                    ? "Expectancy is maximized when individual pair structures align with the master DXY flow." 
                    : "Do not attempt to long EUR/USD or GBP/USD when DXY is in expansion mode."}
                </span>
              </div>
            </div>

            {/* Matrix comparison cards */}
            <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
              <div className="space-y-3 relative z-10 text-center">
                <Coins size={32} className="text-teal-400 mx-auto" />
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">Correlation Check</span>
                  <span className="text-sm font-black text-white uppercase tracking-tight">
                    {isAligned ? "Aligned: USD Weakness" : "Divergent: USD Strong"}
                  </span>
                </div>
                <div className="h-px bg-slate-800" />
                <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">
                  {isAligned 
                    ? "DXY Resistance holding supports EUR/USD longs. Trend pressure is supportive."
                    : "Surging DXY puts downward pressure on EUR/USD. Technical support will likely break."}
                </p>
              </div>
            </div>

          </div>
        </div>

        <MentorInsight 
          text="The US Dollar Index is the master currency tide. If DXY is surging, EUR/USD, GBP/USD, and AUD/USD will almost always be pressured lower. Plan with the tide, not against it." 
          analogy="A swimmer can be extremely strong (pair setup), but they cannot swim up a massive waterfall (DXY breakout). Swim with the current (USD alignment) to reach your target."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 4. ForexSessionTargetMapping: ADR Target feasibility check
 */
export const ForexSessionTargetMapping = () => {
  const [target, setTarget] = useState<number>(40); // in pips

  const adr = 80;
  const targetPercentOfAdr = ((target / adr) * 100).toFixed(0);
  const isGreedTarget = target > adr;

  return (
    <InstitutionalFrame label="Average Daily Range Target Check" id="FOR-1.1-ADR">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Slider Controls */}
          <div className="md:col-span-6 bg-white border border-slate-200 rounded-[2rem] p-6 space-y-6 flex flex-col justify-center shadow-sm">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Configure Target Level</span>
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Intraday Take-Profit Distance</span>
                <span className={cn("font-mono font-black", isGreedTarget ? "text-rose-600 animate-pulse" : "text-teal-600")}>
                  {target} pips
                </span>
              </div>
              <input 
                type="range" 
                min="20" 
                max="120" 
                value={target}
                onChange={(e) => setTarget(parseInt(e.target.value))}
                className="w-full accent-[#071B36]"
              />
              <span className="text-[9px] font-bold text-slate-400 block">
                Average Daily Range (ADR) of this pair is <span className="font-mono text-[#071B36] font-bold">{adr} pips</span>.
              </span>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-bold text-slate-600 flex items-start gap-2">
              <Info size={14} className="text-teal-600 shrink-0 mt-0.5" />
              <span>Intraday targets should rarely exceed 60-70% of the active Daily ADR to ensure high probability exit completion.</span>
            </div>
          </div>

          {/* Results Graphic */}
          <div className="md:col-span-6 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-mono font-black text-slate-400 uppercase tracking-widest">ADR Check Console</span>
                <span className={cn(
                  "text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border",
                  isGreedTarget ? "bg-rose-950 border-rose-800 text-rose-300" : "bg-teal-950 border-teal-800 text-teal-300"
                )}>
                  {isGreedTarget ? "Exceeds Volatility" : "Target Realistic"}
                </span>
              </div>

              {/* Graphic Gauge */}
              <div className="text-center py-4 bg-slate-950/80 rounded-2xl border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-1">Target % of ADR</span>
                <span className={cn("text-3xl font-black font-mono tracking-tighter", isGreedTarget ? "text-rose-500 animate-pulse" : "text-teal-400")}>
                  {targetPercentOfAdr}%
                </span>
                <span className="text-[9px] text-slate-500 font-bold block mt-1">
                  {isGreedTarget ? "Greed exit! Requires abnormal volatility event." : "Target lies comfortably within standard daily movement limits."}
                </span>
              </div>
            </div>

            <div className="text-[9px] text-slate-500 font-bold text-center mt-4">
              ADR Formula: Average (Daily High - Daily Low) over 20 days.
            </div>
          </div>

        </div>
        
        <MentorInsight 
          text="Setting a 100-pip take-profit target on a pair that only moves 70 pips a day is mathematically absurd. Your target will rarely be hit, turning wins into losses." 
          analogy="If a runner is only capable of running 5 miles (ADR), do not build a plan that expects them to run 8 miles (Greed Target) in the same session without collapsing."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 5. ForexPlanAuditDrill: Interactive choices matching the practice card
 */
export const ForexPlanAuditDrill = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  const options = [
    {
      id: "A",
      text: "The entry time is incorrect, but the invalidation and target are structurally sound.",
      isCorrect: false,
      feedback: "Incorrect. Placing the invalidation exactly on a session low makes it highly vulnerable to sweeps, and the target is unrealistically placed beyond the ADR."
    },
    {
      id: "B",
      text: "The entry is planned in a low-volume session, the invalidation lacks a buffer against sweeps, and the target is mathematically unfeasible due to ADR limitations.",
      isCorrect: true,
      feedback: "Correct! Executing in the quiet Asian session lacks institutional backing, placing the invalidation exactly on the session low ignores sweep risks, and setting the target beyond the ADR is greed-driven, not structure-driven."
    },
    {
      id: "C",
      text: "There are no errors; this is a standard high-probability GBP/USD setup.",
      isCorrect: false,
      feedback: "Incorrect. This plan violates session rules, invalidation safety guidelines, and volatility realities."
    },
    {
      id: "D",
      text: "The only error is using GBP/USD instead of EUR/USD.",
      isCorrect: false,
      feedback: "Incorrect. Both pairs behave similarly; the errors are purely structural and planning-related."
    }
  ];

  const handleSelect = (id: string) => {
    setSelectedOption(id);
    setShowFeedback(true);
  };

  const handleReset = () => {
    setSelectedOption(null);
    setShowFeedback(false);
  };

  const selectedData = options.find(o => o.id === selectedOption);

  return (
    <InstitutionalFrame label="Forex Plan Validation Audit" id="FOR-1.1-DRL" status="AUDIT ACTIVE">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
            <Globe size={14} className="text-teal-600" />
            Forex Case Study
          </div>
          <p className="text-xs font-bold text-[#071B36] leading-relaxed">
            You are auditing a GBP/USD long plan: <span className="italic font-normal">Entry is set at 1.2500 during the quiet Asian session (7:00 PM EST). The Invalidation Checkpoint is placed at 1.2485 (exactly on the Asian session low). The Target is set at 1.2560 (60 pips away), which is 20 pips beyond the Average Daily Range (ADR).</span> What are the main errors in this plan?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt.id)}
              disabled={showFeedback}
              className={cn(
                "p-4 rounded-2xl border text-left text-xs font-semibold transition-all duration-300 shadow-sm",
                selectedOption === opt.id
                  ? opt.isCorrect
                    ? "bg-teal-50 border-teal-500 text-teal-900 ring-2 ring-teal-100"
                    : "bg-rose-50 border-rose-500 text-rose-900 ring-2 ring-rose-100"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-60"
              )}
            >
              <div className="flex gap-3 items-start">
                <span className={cn(
                  "w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-[10px] font-black border",
                  selectedOption === opt.id
                    ? opt.isCorrect
                      ? "bg-teal-500 border-teal-600 text-white"
                      : "bg-rose-500 border-rose-600 text-white"
                    : "bg-slate-100 border-slate-200 text-slate-500"
                )}>
                  {opt.id}
                </span>
                <span className="leading-snug">{opt.text}</span>
              </div>
            </button>
          ))}
        </div>

        {showFeedback && selectedData && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "p-4 rounded-2xl border text-xs font-semibold leading-relaxed flex items-start gap-3 shadow-sm",
              selectedData.isCorrect 
                ? "bg-teal-50 border-teal-200 text-teal-900" 
                : "bg-rose-50 border-rose-200 text-rose-900"
            )}
          >
            {selectedData.isCorrect ? (
              <CheckCircle size={16} className="text-teal-600 shrink-0 mt-0.5" />
            ) : (
              <XCircle size={16} className="text-rose-600 shrink-0 mt-0.5" />
            )}
            <div className="space-y-1">
              <span className="font-black uppercase tracking-wider block">
                {selectedData.isCorrect ? "Correct Audit Verdict" : "Incorrect Audit Verdict"}
              </span>
              <p className="text-slate-600 font-semibold">{selectedData.feedback}</p>
            </div>
            {selectedOption && (
              <button 
                onClick={handleReset}
                className="ml-auto px-3 py-1 bg-white border border-slate-200 rounded-lg text-[9px] font-black uppercase tracking-wider hover:bg-slate-50 transition-colors shadow-sm shrink-0"
              >
                Reset
              </button>
            )}
          </motion.div>
        )}
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 6. ForexPlanDebrief: Summary debrief component
 */
export const ForexPlanDebrief = () => {
  return (
    <InstitutionalFrame label="Debrief: Forex Plan Complete" id="FOR-1.1-DBF">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Summary Box */}
          <div className="md:col-span-7 space-y-4 flex flex-col justify-center">
            <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest bg-teal-50 px-2.5 py-1 rounded border border-teal-200 inline-block">
              Forex Pipeline Locked
            </span>
            <h3 className="text-xl font-black text-[#071B36] uppercase tracking-tight">Structured Currency Planning</h3>
            <p className="text-xs text-slate-500 font-semibold leading-relaxed">
              You have completed the Forex roadway for Module 1.1. You now understand that a solid Forex plan requires integrating time (session windows), currency correlation (DXY), and relative range boundaries (Asian highs/lows and ADR). A Forex plan is a strict set of rules that defines not just where, but *when* you will participate. Next, we will look at the Gold roadway.
            </p>
          </div>

          {/* Graphics Display */}
          <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-[2rem] p-6 text-slate-200 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:16px_16px]" />
            <div className="space-y-4 relative z-10">
              <span className="text-[9px] font-mono font-black text-slate-400 uppercase tracking-widest block">Blueprint Status</span>
              <h4 className="text-sm font-black uppercase text-teal-400">Roadway Complete</h4>
              
              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-[10px] font-mono leading-normal text-teal-500">
                VERDICT: Core + Forex planning components fully resolved. Ready to proceed to Gold and Crypto tracks.
              </div>
            </div>
          </div>

        </div>
        
        <MentorInsight 
          text="Forex is a dual-currency equation. Never write a plan that looks at EUR in isolation. Check the Quote currency (USD Index) and the session timing first." 
          analogy="You can't buy half of a pair of scissors. If you want to cut paper (execute a trade), check both blades (Base and Quote currency context) to ensure they are aligned."
        />
      </div>
    </InstitutionalFrame>
  );
};
