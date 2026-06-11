"use client";

import React, { useState } from "react";
import { 
  Clock, 
  Layers, 
  Activity, 
  Calendar, 
  ChevronRight, 
  CheckCircle, 
  HelpCircle, 
  Maximize2,
  TrendingUp,
  XCircle,
  Timer,
  Sliders,
  CheckCircle2,
  AlertTriangle,
  RotateCw,
  Sun,
  Moon,
  Compass,
  FileText
} from "lucide-react";
import { cn } from "@/lib/utils";

// L4Frame uses a Midnight-Blue "Time & Price Matrix Clocks" theme matching institutional clock dials
const L4Frame = ({ 
  children, 
  title, 
  id, 
  mentorText = "Wait for session windows to open before planning executions. High-probability liquidity sweeps only exist when supported by volatility clocks.",
  mentorAnalogy = "A ship captain does not exit port during low tide. The tide is the clock of the sea, and Killzones are the tide of the market." 
}: { 
  children: React.ReactNode; 
  title: string; 
  id: string; 
  mentorText?: string; 
  mentorAnalogy?: string; 
}) => (
  <div className="w-full bg-[#0A1128] border border-[#1C2D42] rounded-[2rem] p-6 md:p-8 flex flex-col relative overflow-hidden shadow-xl text-left min-h-[500px] text-white">
    {/* Grid Background Effect */}
    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#1E293B_1px,transparent_1px)] bg-[length:24px_24px] opacity-65" />
    
    {/* Top Header Row */}
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 relative z-10 border-b border-[#1C2D42] pb-4 shrink-0">
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5 mb-1">
          <Clock size={10} className="text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Time & Price Matrix</span>
        </div>
        <h4 className="text-sm font-black text-cyan-400 uppercase tracking-tight italic leading-tight">{title}</h4>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-end">
          <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Matrix Ref</span>
          <span className="text-[10px] font-mono text-cyan-200 font-bold">{id}</span>
        </div>
      </div>
    </div>
    
    {/* Dynamic Content Center Stage */}
    <div className="flex-1 flex flex-col items-center justify-center relative z-10 w-full min-h-0">
      {children}
    </div>

    {/* Mentor Blueprint Insight at the Bottom */}
    <div className="w-full mt-6 pt-5 border-t border-[#1C2D42] flex flex-col gap-2 shrink-0 text-left relative z-10">
      <div className="flex items-center gap-2">
        <div className="px-2 py-1 bg-cyan-950 text-cyan-400 text-[8px] font-black uppercase tracking-widest rounded-sm border border-cyan-800">Mentor Blueprint</div>
        <div className="h-px flex-1 bg-[#1C2D42]" />
      </div>
      <div className="flex gap-4">
         <div className="flex-1">
            <p className="text-xs font-bold text-slate-200 leading-relaxed">{mentorText}</p>
            {mentorAnalogy && (
              <p className="mt-1.5 text-[11px] text-slate-400 italic leading-snug">
                <span className="font-black uppercase text-[9px] mr-2 text-cyan-400 not-italic">Concept Analogy:</span>
                {mentorAnalogy}
              </p>
            )}
         </div>
      </div>
    </div>
  </div>
);

// --- MODULE 4.1 VISUALS ---
export const DailyCycleBasicsVisual = () => {
  const [hour, setHour] = useState(8);

  const getSessionName = (h: number) => {
    if (h >= 18 || h < 2) return "Asia Consolidation";
    if (h >= 2 && h < 7) return "London Open (Manipulation)";
    if (h >= 7 && h < 12) return "New York (Distribution)";
    return "London Close / Dead Window";
  };

  return (
    <L4Frame 
      title="The Programmed Daily Cycle" 
      id="FLOW-4.1-CYCLE-BASICS"
      mentorText="Price does not move at random; it coordinates expansion and sweep phases based on session windows. The Daily Cycle is the master timing template."
      mentorAnalogy="A standard stage play: Act 1 consolidates the actors (Asia), Act 2 creates the conflict (London Judas sweep), and Act 3 resolves the plot (NY distribution)."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-base font-black text-cyan-400 uppercase tracking-tight">Daily Hour Sweep</h3>
          <p className="text-xs text-slate-300 font-semibold leading-relaxed">
            Drag the slider to sweep through the 24-hour cycle. Notice how algorithmic characteristics switch based on the EST clock dial.
          </p>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Time EST: {hour}:00</label>
            <input 
              type="range" 
              min="0" 
              max="23" 
              value={hour} 
              onChange={e => setHour(Number(e.target.value))} 
              className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
          </div>
        </div>
        <div className="md:col-span-7 flex flex-col items-center justify-center bg-slate-900 border border-slate-800 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          <div className="flex items-center gap-4 mb-4">
            {hour >= 18 || hour < 5 ? <Moon className="text-cyan-400 animate-pulse" size={24} /> : <Sun className="text-yellow-400 animate-spin" size={24} style={{ animationDuration: '10s' }} />}
            <span className="font-mono text-xl font-bold">{hour < 10 ? `0${hour}` : hour}:00 EST</span>
          </div>
          <div className={cn("p-4 border rounded-xl w-full text-center text-xs font-black uppercase tracking-wider transition-all", 
            hour >= 18 || hour < 2 ? "text-cyan-400 bg-cyan-950/20 border-cyan-800/35" :
            hour >= 2 && hour < 7 ? "text-rose-400 bg-rose-950/20 border-rose-800/35" :
            hour >= 7 && hour < 12 ? "text-emerald-400 bg-emerald-950/20 border-emerald-800/35" :
            "text-slate-400 bg-slate-800/20 border-slate-700/35"
          )}>
            Active Phase: {getSessionName(hour)}
          </div>
        </div>
      </div>
    </L4Frame>
  );
};

// --- MODULE 4.2 VISUALS ---
export const AsianRangeVisual = () => {
  const [rangeBound, setRangeBound] = useState(30);

  return (
    <L4Frame 
      title="Asian Range Boundaries" 
      id="FLOW-4.2-ASIA-RANGE"
      mentorText="The Asian session is characterized by low volume. The consolidation highs and lows form a clear liquid boundary that algorithms target immediately at the London Open."
      mentorAnalogy="Placing bait at the edges of a cage. The price consolidates in the middle, setting up stops at both edges for the morning hunt."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-base font-black text-cyan-400 uppercase tracking-tight">Range Boundary Height</h3>
          <p className="text-xs text-slate-300 font-semibold leading-relaxed">
            Adjust the volatility of the Asian Range. Notice how the tighter range highlights resting Buy-Side and Sell-Side liquidity stops.
          </p>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Asian Volatility: {rangeBound} pips</label>
            <input 
              type="range" 
              min="10" 
              max="60" 
              value={rangeBound} 
              onChange={e => setRangeBound(Number(e.target.value))} 
              className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
          </div>
        </div>
        <div className="md:col-span-7 flex items-center justify-center bg-slate-900 border border-slate-800 rounded-[2rem] p-6 shadow-sm min-h-[220px] relative overflow-hidden">
          <div className="w-full h-32 border-y border-dashed border-slate-700 relative flex flex-col justify-between py-2">
            <div className="w-full h-px bg-cyan-400/35 border-dashed" style={{ transform: `translateY(${-rangeBound / 2}px)` }} />
            <span className="text-[8px] font-bold text-cyan-400 absolute left-2 top-2 uppercase">Buy-Side Liquidity (BSL)</span>
            
            {/* Asian Consolidation Boxes */}
            <div className="flex gap-2 items-center justify-center h-12 bg-cyan-950/20 border border-cyan-800/35 rounded-xl mx-8">
              <span className="text-[9px] font-mono font-bold text-cyan-300 uppercase tracking-widest">Asian Range Consolidation</span>
            </div>
            
            <div className="w-full h-px bg-cyan-400/35 border-dashed" style={{ transform: `translateY(${rangeBound / 2}px)` }} />
            <span className="text-[8px] font-bold text-cyan-400 absolute left-2 bottom-2 uppercase">Sell-Side Liquidity (SSL)</span>
          </div>
        </div>
      </div>
    </L4Frame>
  );
};

// --- MODULE 4.3 VISUALS ---
export const LondonOpenVisual = () => {
  const [swept, setSwept] = useState(false);

  return (
    <L4Frame 
      title="London Judas Swing Mechanics" 
      id="FLOW-4.3-LONDON-OPEN"
      mentorText="The Judas Swing is a false move designed to hunt stops. It sweeps the Asian boundaries to build order matching before reversing back in the true day direction."
      mentorAnalogy="A boxer throwing a left feint to pull down the opponent's guard before landing the decisive right hook."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-base font-black text-cyan-400 uppercase tracking-tight">Judas Swing Sweep</h3>
          <p className="text-xs text-slate-300 font-semibold leading-relaxed">
            The London open sweeps the Asian range boundaries. Trigger the Judas Swing to witness the sweep-rejection signature.
          </p>
          <button 
            onClick={() => setSwept(!swept)}
            className="px-5 py-2.5 bg-cyan-950 text-cyan-400 border border-cyan-800 text-[10px] font-black uppercase tracking-wider rounded-xl transition-all shadow-sm hover:bg-cyan-900"
          >
            {swept ? "Reset Cycle" : "Trigger London Open"}
          </button>
        </div>
        <div className="md:col-span-7 flex flex-col items-center justify-center bg-slate-900 border border-slate-800 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          <div className="relative w-full h-32">
            <svg className="w-full h-full" viewBox="0 0 300 120">
              {/* Asian range box */}
              <rect x="20" y="40" width="80" height="40" className="fill-cyan-950/20 stroke-cyan-800/35" strokeWidth="1" strokeDasharray="3" />
              <text x="30" y="63" className="text-[7px] font-black fill-cyan-400">ASIA RANGE</text>
              
              {/* Price Path */}
              {swept ? (
                <path d="M 20 60 L 100 60 L 150 110 L 220 20 L 280 30" stroke="#10B981" strokeWidth="2.5" fill="none" />
              ) : (
                <path d="M 20 60 L 100 60" stroke="#CBD5E1" strokeWidth="2" fill="none" />
              )}
              
              {swept && (
                <>
                  <circle cx="150" cy="110" r="5" className="fill-rose-500 animate-ping" />
                  <text x="160" y="112" className="text-[8px] font-black fill-rose-400 uppercase">Judas Swing Sweep</text>
                </>
              )}
            </svg>
          </div>
        </div>
      </div>
    </L4Frame>
  );
};

// --- MODULE 4.4 VISUALS ---
export const NyOpenOverlapVisual = () => {
  const [scenario, setScenario] = useState("continuation");

  return (
    <L4Frame 
      title="NY Overlap Handoffs" 
      id="FLOW-4.4-NY-OPEN"
      mentorText="The New York Open handles the orders built during London hours. It will either continue London's expansion or reverse it entirely depending on macro release anchors."
      mentorAnalogy="A relay race. The runner (London) passes the baton to NY. NY will either run forward in the same direction or head back to recover dropped assets."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-base font-black text-cyan-400 uppercase tracking-tight">Handoff Scenarios</h3>
          <p className="text-xs text-slate-300 font-semibold leading-relaxed">
            Compare Continuation (NY follows London direction) vs Reversal (NY sweeps London extremes and reverses trend).
          </p>
          <div className="flex gap-2">
            <button 
              onClick={() => setScenario("continuation")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-xl transition-all border", scenario === "continuation" ? "bg-cyan-950 border-cyan-800 text-cyan-400" : "bg-slate-800 border-slate-700 text-slate-400")}
            >
              Continuation
            </button>
            <button 
              onClick={() => setScenario("reversal")} 
              className={cn("px-4 py-2 text-[9px] font-black uppercase tracking-wider rounded-xl transition-all border", scenario === "reversal" ? "bg-cyan-950 border-cyan-800 text-cyan-400" : "bg-slate-800 border-slate-700 text-slate-400")}
            >
              Reversal
            </button>
          </div>
        </div>
        <div className="md:col-span-7 flex items-center justify-center bg-slate-900 border border-slate-800 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          <div className="relative w-full h-32">
            <svg className="w-full h-full" viewBox="0 0 300 120">
              {/* London Path */}
              <path d="M 20 100 L 120 40" stroke="#38BDF8" strokeWidth="2.5" fill="none" />
              <text x="30" y="90" className="text-[8px] font-black fill-[#38BDF8] uppercase">London Leg</text>
              
              {/* NY Handoff Path */}
              {scenario === "continuation" ? (
                <path d="M 120 40 L 160 50 L 260 10" stroke="#10B981" strokeWidth="2.5" fill="none" />
              ) : (
                <path d="M 120 40 L 140 25 L 260 110" stroke="#F43F5E" strokeWidth="2.5" fill="none" />
              )}
              <text x="170" y="30" className={cn("text-[8px] font-black uppercase", scenario === "continuation" ? "fill-emerald-400" : "fill-rose-400")}>
                NY {scenario === "continuation" ? "Continuation" : "Reversal Sweep"}
              </text>
            </svg>
          </div>
        </div>
      </div>
    </L4Frame>
  );
};

// --- MODULE 4.5 VISUALS ---
export const Po3CandleBuilder = () => {
  const [open, setOpen] = useState(50);
  const [high, setHigh] = useState(85);
  const [low, setLow] = useState(15);
  const [close, setClose] = useState(70);

  const adjustValue = (type: string, val: number) => {
    if (type === "open") {
      setOpen(val);
      if (val > high) setHigh(val);
      if (val < low) setLow(val);
    } else if (type === "high") {
      setHigh(Math.max(val, open, close, low));
    } else if (type === "low") {
      setLow(Math.min(val, open, close, high));
    } else if (type === "close") {
      setClose(val);
      if (val > high) setHigh(val);
      if (val < low) setLow(val);
    }
  };

  return (
    <L4Frame 
      title="Daily PO3 Candle Builder" 
      id="FLOW-4.5-PO3-BUILDER"
      mentorText="The daily candle body represents distribution, while the wicks represent the manipulation of early traders. Map these phases relative to the opening price."
      mentorAnalogy="Drawing a bow. You pull the string back (manipulation) to build tension, then release it to send the arrow flying forward (distribution)."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-5 space-y-3">
          <h3 className="text-base font-black text-cyan-400 uppercase tracking-tight">OHLC Adjusters</h3>
          <div className="space-y-1">
            <label className="text-[8px] font-black text-slate-400 uppercase">Open Price: {open}</label>
            <input type="range" min="20" max="80" value={open} onChange={e => adjustValue("open", Number(e.target.value))} className="w-full h-1 bg-slate-700 rounded accent-cyan-400" />
          </div>
          <div className="space-y-1">
            <label className="text-[8px] font-black text-slate-400 uppercase">High Price: {high}</label>
            <input type="range" min="20" max="98" value={high} onChange={e => adjustValue("high", Number(e.target.value))} className="w-full h-1 bg-slate-700 rounded accent-cyan-400" />
          </div>
          <div className="space-y-1">
            <label className="text-[8px] font-black text-slate-400 uppercase">Low Price: {low}</label>
            <input type="range" min="2" max="80" value={low} onChange={e => adjustValue("low", Number(e.target.value))} className="w-full h-1 bg-slate-700 rounded accent-cyan-400" />
          </div>
          <div className="space-y-1">
            <label className="text-[8px] font-black text-slate-400 uppercase">Close Price: {close}</label>
            <input type="range" min="20" max="80" value={close} onChange={e => adjustValue("close", Number(e.target.value))} className="w-full h-1 bg-slate-700 rounded accent-cyan-400" />
          </div>
        </div>
        <div className="md:col-span-7 flex items-center justify-center bg-slate-900 border border-slate-800 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          <div className="relative w-24 h-40 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center">
            {/* Candle Wick line */}
            <div 
              className="absolute w-0.5 bg-slate-400"
              style={{ top: `${100 - high}%`, bottom: `${low}%` }}
            />
            {/* Candle Body */}
            <div 
              className={cn("absolute w-8 border rounded-sm transition-all", close >= open ? "bg-emerald-500/20 border-emerald-500" : "bg-rose-500/20 border-rose-500")}
              style={{
                top: `${100 - Math.max(open, close)}%`,
                height: `${Math.abs(open - close)}%`
              }}
            />
          </div>
        </div>
      </div>
    </L4Frame>
  );
};

// --- MODULE 4.6 VISUALS ---
export const MidnightOpenAnchorVisual = () => {
  const [aboveOpen, setAboveOpen] = useState(true);

  return (
    <L4Frame 
      title="Midnight Open Reference" 
      id="FLOW-4.6-MIDNIGHT-OPEN"
      mentorText="The Midnight EST opening price is the compass of the day. If we are bullish, we hunt for setups below midnight open; if bearish, we sell above it."
      mentorAnalogy="A thermal waterline. You dive below the waterline to build upward speed before launching yourself into the air."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-base font-black text-cyan-400 uppercase tracking-tight">Waterline Position</h3>
          <p className="text-xs text-slate-300 font-semibold leading-relaxed">
            Toggle price above or below Midnight Open. Bullish setups are premium risk unless purchased in discount below opening price.
          </p>
          <button 
            onClick={() => setAboveOpen(!aboveOpen)}
            className="px-5 py-2.5 bg-cyan-950 text-cyan-400 border border-cyan-800 text-[10px] font-black uppercase tracking-wider rounded-xl transition-all shadow-sm hover:bg-cyan-900"
          >
            {aboveOpen ? "Move Price BELOW Midnight" : "Move Price ABOVE Midnight"}
          </button>
        </div>
        <div className="md:col-span-7 flex flex-col justify-center bg-slate-900 border border-slate-800 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          <div className="relative w-full h-32 border border-slate-800 rounded-xl overflow-hidden bg-slate-950 p-4 flex flex-col justify-between">
            <span className="text-[7px] font-black text-slate-500 uppercase">Day Pricing Grid</span>
            
            {/* Midnight horizontal line */}
            <div className="w-full h-0.5 bg-yellow-500 border-dashed relative z-10 flex items-center">
              <span className="absolute left-2 bg-yellow-950 border border-yellow-800 px-2 py-0.5 text-[8px] font-black text-yellow-400 rounded-sm">12:00 AM EST OPENING PRICE</span>
            </div>

            {/* Price candle representation */}
            <div className={cn("w-12 h-16 rounded border mx-auto transition-all", 
              aboveOpen ? "bg-rose-500/10 border-rose-500 translate-y-[-20px]" : "bg-emerald-500/10 border-emerald-500 translate-y-[20px]"
            )}>
              <div className="w-full h-full flex items-center justify-center text-[7px] font-black uppercase tracking-widest text-slate-300">
                {aboveOpen ? "Bearish premium" : "Bullish Discount"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </L4Frame>
  );
};

// --- MODULE 4.7 VISUALS ---
export const LondonKillzoneVisual = () => {
  const [active, setActive] = useState(false);

  return (
    <L4Frame 
      title="London Killzone Clock" 
      id="FLOW-4.7-LONDON-KZ"
      mentorText="The London Killzone (2:00 - 5:00 AM EST) is when the highest volume of sterling and euro orders are matched. Maintain focus exclusively during this time block."
      mentorAnalogy="An airport gateway. The gate is only open for passenger boarding during a narrow schedule; miss it, and you cannot board."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-base font-black text-cyan-400 uppercase tracking-tight">Active Hours Check</h3>
          <p className="text-xs text-slate-300 font-semibold leading-relaxed">
            Synchronize execution filters with the London timing window. Click to simulate entering the active session hour.
          </p>
          <button 
            onClick={() => setActive(!active)}
            className="px-5 py-2.5 bg-cyan-950 text-cyan-400 border border-cyan-800 text-[10px] font-black uppercase tracking-wider rounded-xl transition-all shadow-sm hover:bg-cyan-900"
          >
            {active ? "Exit Killzone" : "Enter Killzone Hour (3:00 AM)"}
          </button>
        </div>
        <div className="md:col-span-7 flex flex-col items-center justify-center bg-slate-900 border border-slate-800 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          <div className="relative w-28 h-28 rounded-full border-4 border-slate-800 flex items-center justify-center transition-all bg-slate-950">
            {/* Clock Highlight arc */}
            <div className={cn("absolute inset-0 rounded-full border-4 border-cyan-500/20 transition-all", active && "border-cyan-500 animate-pulse")} />
            <span className="font-mono text-lg font-bold">{active ? "03:00" : "13:00"} EST</span>
          </div>
          <div className={cn("mt-4 text-[9px] font-black uppercase tracking-widest", active ? "text-cyan-400" : "text-slate-500")}>
            {active ? "LONDON WINDOW ACTIVE — PREPARE SETUP" : "DEAD WINDOW — SIT ON HANDS"}
          </div>
        </div>
      </div>
    </L4Frame>
  );
};

// --- MODULE 4.8 VISUALS ---
export const NyKillzoneVisual = () => {
  const [active, setActive] = useState(false);

  return (
    <L4Frame 
      title="New York Killzone Clock" 
      id="FLOW-4.8-NY-KZ"
      mentorText="The New York Killzone (7:00 - 10:00 AM EST) coordinates central bank liquidity runs around US macro index releases. Filter plans around this morning clock."
      mentorAnalogy="A highway tollbooth. The traffic flow peaks during morning commute hours, creating the necessary momentum to cross structural barriers."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-base font-black text-cyan-400 uppercase tracking-tight">Active Hours Check</h3>
          <p className="text-xs text-slate-300 font-semibold leading-relaxed">
            Synchronize execution filters with the NY timing window. Click to simulate entering the active session hour.
          </p>
          <button 
            onClick={() => setActive(!active)}
            className="px-5 py-2.5 bg-cyan-950 text-cyan-400 border border-cyan-800 text-[10px] font-black uppercase tracking-wider rounded-xl transition-all shadow-sm hover:bg-cyan-900"
          >
            {active ? "Exit Killzone" : "Enter Killzone Hour (8:30 AM)"}
          </button>
        </div>
        <div className="md:col-span-7 flex flex-col items-center justify-center bg-slate-900 border border-slate-800 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          <div className="relative w-28 h-28 rounded-full border-4 border-slate-800 flex items-center justify-center transition-all bg-slate-950">
            {/* Clock Highlight arc */}
            <div className={cn("absolute inset-0 rounded-full border-4 border-emerald-500/20 transition-all", active && "border-emerald-500 animate-pulse")} />
            <span className="font-mono text-lg font-bold">{active ? "08:30" : "15:30"} EST</span>
          </div>
          <div className={cn("mt-4 text-[9px] font-black uppercase tracking-widest", active ? "text-emerald-400" : "text-slate-500")}>
            {active ? "NY WINDOW ACTIVE — EXPANSION TARGET VALID" : "DEAD WINDOW — PASS PLAN"}
          </div>
        </div>
      </div>
    </L4Frame>
  );
};

// --- MODULE 4.9 VISUALS ---
export const LondonCloseVisual = () => {
  const [retracePercent, setRetracePercent] = useState(0);

  return (
    <L4Frame 
      title="London Close Retracement" 
      id="FLOW-4.9-LONDON-CLOSE"
      mentorText="During the London Close (10:00 AM - 12:00 PM EST), European desks square their books, resulting in reliable counter-trend profit-taking retracements."
      mentorAnalogy="A runner stopping at the finish line to catch their breath. They walk backwards a few steps to cool down before leaving the track."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-base font-black text-cyan-400 uppercase tracking-tight">Retracement Slider</h3>
          <p className="text-xs text-slate-300 font-semibold leading-relaxed">
            Adjust the book squaring retracement. London Close often returns price back by 20% to 30% of the daily range leg.
          </p>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Retracement: {retracePercent}%</label>
            <input 
              type="range" 
              min="0" 
              max="50" 
              value={retracePercent} 
              onChange={e => setRetracePercent(Number(e.target.value))} 
              className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
          </div>
        </div>
        <div className="md:col-span-7 flex flex-col justify-center bg-slate-900 border border-slate-800 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          <div className="relative w-full h-32 bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 300 120">
              {/* Daily expansion path */}
              <path d="M 20 100 L 220 20" stroke="#0070F3" strokeWidth="2.5" fill="none" />
              <text x="30" y="80" className="text-[8px] font-black fill-sky-400 uppercase">Daily Expansion</text>
              
              {/* Retracement leg */}
              <path d={`M 220 20 L ${220 + retracePercent * 1.5} ${20 + retracePercent * 1.5}`} stroke="#F43F5E" strokeWidth="2.5" fill="none" />
              <text x="210" y="50" className="text-[8px] font-black fill-rose-400 uppercase">Retracement</text>
            </svg>
          </div>
        </div>
      </div>
    </L4Frame>
  );
};

// --- MODULE 4.10 VISUALS ---
export const MacroWindowsVisual = () => {
  const [macroTime, setMacroTime] = useState(0);

  const getStatus = (t: number) => {
    if (t >= 50 && t <= 70) return "Macro window active. Algorithms recalculating bids/asks.";
    return "Standby. Main session routing in progress.";
  };

  return (
    <L4Frame 
      title="Algorithmic Macro Timer" 
      id="FLOW-4.10-MACRO-WINDOWS"
      mentorText="Macro windows are precise 20-minute intervals where liquidity runs are executed. The algorithm sweeps local wicks rapidly during these windows."
      mentorAnalogy="A bank vault timer. The vault mechanism is unlocked only during a few minutes every hour; you must align the key exactly with the timer."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-base font-black text-cyan-400 uppercase tracking-tight">Macro Timing Dial</h3>
          <p className="text-xs text-slate-300 font-semibold leading-relaxed">
            Adjust the hour minutes tracker. The 9:50 AM to 10:10 AM EST macro window represents a high-probability algorithm run.
          </p>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Minute Indicator: 09:{macroTime < 10 ? `0${macroTime}` : macroTime}</label>
            <input 
              type="range" 
              min="0" 
              max="90" 
              value={macroTime} 
              onChange={e => setMacroTime(Number(e.target.value))} 
              className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
          </div>
        </div>
        <div className="md:col-span-7 flex flex-col items-center justify-center bg-slate-900 border border-slate-800 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          <div className="flex items-center gap-3 mb-4">
            <Timer className="text-cyan-400 animate-pulse" size={24} />
            <span className="font-mono text-xl font-bold">09:{macroTime < 10 ? `0${macroTime}` : macroTime} EST</span>
          </div>
          <div className={cn("p-4 border rounded-xl w-full text-center text-xs font-black uppercase tracking-wider transition-all", 
            macroTime >= 50 && macroTime <= 70 ? "text-cyan-400 bg-cyan-950/20 border-cyan-800" : "text-slate-500 bg-slate-800/20 border-slate-700"
          )}>
            Status: {getStatus(macroTime)}
          </div>
        </div>
      </div>
    </L4Frame>
  );
};

// --- MODULE 4.11 VISUALS ---
export const WeeklyCyclesVisual = () => {
  const [selectedDay, setSelectedDay] = useState("");

  return (
    <L4Frame 
      title="Weekly LOD/HOD Formations" 
      id="FLOW-4.11-WEEKLY-CYCLES"
      mentorText="Monday and Tuesday form the High or Low of the week (LOW/HOW) in 70% of weekly cycles. Track whether price consolidates or sweeps early in the week."
      mentorAnalogy="A weekly weather pattern. The temperature drops early in the week to its lowest mark, setting up a warm distribution for the remaining days."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-base font-black text-cyan-400 uppercase tracking-tight">Select Cycle Day</h3>
          <p className="text-xs text-slate-300 font-semibold leading-relaxed">
            Click on the calendar days to see where the weekly liquidity extremes are formed.
          </p>
          <div className="grid grid-cols-5 gap-2">
            {["Mon", "Tue", "Wed", "Thu", "Fri"].map(d => (
              <button 
                key={d}
                onClick={() => setSelectedDay(d)}
                className={cn("p-2 text-[10px] font-black uppercase tracking-wider rounded border transition-all", selectedDay === d ? "bg-cyan-950 border-cyan-800 text-cyan-400" : "bg-slate-800 border-slate-700 text-slate-400")}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
        <div className="md:col-span-7 flex flex-col justify-center bg-slate-900 border border-slate-800 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          <div className={cn("p-4 border rounded-xl text-center text-xs font-black uppercase tracking-wider transition-all", 
            selectedDay === "Mon" || selectedDay === "Tue" ? "text-cyan-400 bg-cyan-950/20 border-cyan-800" : "text-slate-500 bg-slate-800/20 border-slate-700"
          )}>
            {selectedDay === "Mon" ? "Monday: Typically establishes the initial consolidation high/low boundaries." :
             selectedDay === "Tue" ? "Tuesday: High probability of forming the true Low or High of the week (70%)." :
             selectedDay === "Wed" ? "Wednesday: Mid-week reversal point or continuation expansion phase." :
             selectedDay === "Thu" ? "Thursday: Distribution completion and correction phase." :
             selectedDay === "Fri" ? "Friday: European desk squaring and London close retracement." :
             "Select a day from the weekly cycle."}
          </div>
        </div>
      </div>
    </L4Frame>
  );
};

// --- MODULE 4.12 VISUALS ---
export const TimePriceConfluencesVisual = () => {
  const [checks, setChecks] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false
  });

  const toggleCheck = (id: number) => {
    setChecks(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const isAllChecked = Object.values(checks).every(v => v);

  return (
    <L4Frame 
      title="Time & Price Stacker" 
      id="FLOW-4.12-CONFLUENCE"
      mentorText="Price parameters mean nothing without timing confluences. Stack the Killzone clock with unmitigated order blocks to filter entries."
      mentorAnalogy="A solar eclipse. The moon (price levels) must align perfectly with the sun (timing windows) to create the complete eclipse."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-6 space-y-4">
          <h3 className="text-base font-black text-cyan-400 uppercase tracking-tight">Time & Price filters</h3>
          <p className="text-xs text-slate-300 font-semibold leading-relaxed">
            Verify timing alignment with your structural plan before executing order books.
          </p>
          <div className="space-y-2">
            {[
              { id: 1, text: "Active Killzone clock window (London/NY)." },
              { id: 2, text: "Price is inside a valid higher-timeframe FVG or OB." },
              { id: 3, text: "Judas Swing has swept early session extremes." }
            ].map(item => (
              <button 
                key={item.id}
                onClick={() => toggleCheck(item.id)}
                className="w-full flex items-center gap-3 p-3 bg-slate-900 border border-slate-800 rounded-xl text-left cursor-pointer hover:bg-slate-800 transition-colors"
              >
                <div className={cn("w-4 h-4 rounded-full border flex items-center justify-center transition-colors", checks[item.id] ? "bg-cyan-500 border-cyan-600 text-white" : "border-slate-700")}>
                  {checks[item.id] && <CheckCircle size={10} />}
                </div>
                <span className="text-xs font-semibold text-slate-300">{item.text}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="md:col-span-6 flex flex-col items-center justify-center bg-slate-900 border border-slate-800 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          {isAllChecked ? (
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <CheckCircle2 size={40} className="text-cyan-400" />
              <span className="text-xs font-black text-cyan-400 uppercase tracking-widest">Timing Eligible!</span>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2 text-slate-500">
              <HelpCircle size={40} className="animate-pulse" />
              <span className="text-xs font-black uppercase tracking-widest text-slate-400">Match the Clock</span>
            </div>
          )}
        </div>
      </div>
    </L4Frame>
  );
};

// --- MODULE 4.13 VISUALS ---
export const TimeInvalidationVisual = () => {
  const [expired, setExpired] = useState(false);

  return (
    <L4Frame 
      title="Session Window Expiration" 
      id="FLOW-4.13-TIME-INVALID"
      mentorText="Setups have expiration dates. When the Killzone hour closes, cancel active limit orders immediately to avoid illiquid rollover sweeps."
      mentorAnalogy="A parking ticket. You are only permitted to park during the hours purchased; stay longer, and the city will tow the vehicle."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-base font-black text-cyan-400 uppercase tracking-tight">Clock Expiration</h3>
          <p className="text-xs text-slate-300 font-semibold leading-relaxed">
            Simulate the closing hour of the NY Killzone. Setups left unmitigated beyond 11:00 AM EST must be cancelled.
          </p>
          <button 
            onClick={() => setExpired(!expired)}
            className="px-5 py-2.5 bg-cyan-950 text-cyan-400 border border-cyan-800 text-[10px] font-black uppercase tracking-wider rounded-xl transition-all shadow-sm hover:bg-cyan-900"
          >
            {expired ? "Reset Session Clock" : "Expire Session Window (11:00 AM)"}
          </button>
        </div>
        <div className="md:col-span-7 flex flex-col justify-between bg-slate-900 border border-slate-800 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          <div className={cn("p-4 border rounded-xl text-center text-xs font-black uppercase tracking-wider transition-all", 
            expired ? "text-rose-400 bg-rose-950/20 border-rose-800 animate-pulse" : "text-cyan-400 bg-cyan-950/20 border-cyan-800"
          )}>
            {expired ? "SESSION CLOSED — CANCEL ALL ACTIVE ORDERS" : "SESSION RUNNING — MONITORS VALID"}
          </div>
        </div>
      </div>
    </L4Frame>
  );
};

// --- MODULE 4.14 VISUALS ---
export const TimePriceChecklistsVisual = () => {
  const [score, setScore] = useState(0);

  const incrementScore = () => {
    setScore(prev => Math.min(prev + 25, 100));
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <L4Frame 
      title="Timing Quality Auditor" 
      id="FLOW-4.14-CHECKLIST"
      mentorText="Always audit your timing plan before executing. Trades built outside the PO3 accumulation/manipulation zone have a negative mathematical outcome expectation."
      mentorAnalogy="A farmer planting seeds. If you sow during winter, no amount of water or care will force the crop to grow."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-base font-black text-cyan-400 uppercase tracking-tight">Grade your Timing</h3>
          <p className="text-xs text-slate-300 font-semibold leading-relaxed">
            Grade timing parameters. Execution requires score &gt;= 75 before committing orders.
          </p>
          <div className="flex gap-2">
            <button onClick={incrementScore} className="px-4 py-2 bg-cyan-950 text-cyan-400 border border-cyan-800 text-[10px] font-black uppercase tracking-wider rounded-xl">Add Confluence</button>
            <button onClick={resetScore} className="px-4 py-2 bg-slate-800 border border-slate-700 text-slate-400 text-[10px] font-black uppercase tracking-wider rounded-xl">Reset</button>
          </div>
        </div>
        <div className="md:col-span-7 flex flex-col justify-between bg-slate-900 border border-slate-800 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          <div className="space-y-4">
            <div className="flex justify-between text-xs font-bold text-slate-300">
              <span>Timing Audit Score:</span>
              <span className="font-mono text-cyan-400">{score}%</span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div className="bg-cyan-400 h-2 transition-all duration-300" style={{ width: `${score}%` }} />
            </div>
            <div className={cn("p-3 border rounded-xl text-center text-xs font-black uppercase tracking-wider", score >= 75 ? "text-emerald-400 bg-emerald-950/20 border-emerald-800 animate-pulse" : "text-rose-400 bg-rose-950/20 border-rose-800")}>
              Recommendation: {score >= 75 ? "Timing Valid — Prepare Order" : "Insufficient Clock Alignment — Pass Trade"}
            </div>
          </div>
        </div>
      </div>
    </L4Frame>
  );
};

// --- MODULE 4.15 VISUALS ---
export const Level4ReviewVisual = () => {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
    4: false
  });

  const toggleCheck = (id: number) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const isAllChecked = Object.values(checkedItems).every(v => v);

  return (
    <L4Frame 
      title="Level 4 Final Review" 
      id="FLOW-4.15-REVIEW"
      mentorText="Time is the absolute filter. If a pattern forms outside the programmed Killzone windows, the setup does not exist."
      mentorAnalogy="An executive calendar. A scheduled meeting has priority; an uninvited visitor showing up at midnight is locked outside."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
        <div className="md:col-span-6 space-y-4">
          <h3 className="text-base font-black text-cyan-400 uppercase tracking-tight">Time & Price Checklist</h3>
          <p className="text-xs text-slate-300 font-semibold leading-relaxed">
            Verify you understand the Daily Cycle, PO3 candles, and Killzone clocks before taking the Level 4 Structure & Timing Test.
          </p>
          <div className="space-y-2">
            {[
              { id: 1, text: "I can map the Asian Consolidation Range." },
              { id: 2, text: "I understand Judas Swings at London Open." },
              { id: 3, text: "I know how to calculate Midnight Open anchors." },
              { id: 4, text: "I can trace PO3 Accumulation/Manipulation phases." }
            ].map(item => (
              <button 
                key={item.id}
                onClick={() => toggleCheck(item.id)}
                className="w-full flex items-center gap-3 p-3 bg-slate-900 border border-slate-800 rounded-xl text-left cursor-pointer hover:bg-slate-800 transition-colors"
              >
                <div className={cn("w-4 h-4 rounded-full border flex items-center justify-center transition-colors", checkedItems[item.id] ? "bg-cyan-500 border-cyan-600 text-white" : "border-slate-700")}>
                  {checkedItems[item.id] && <CheckCircle size={10} />}
                </div>
                <span className="text-xs font-semibold text-slate-300">{item.text}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="md:col-span-6 flex flex-col items-center justify-center bg-slate-900 border border-slate-800 rounded-[2rem] p-6 shadow-sm min-h-[220px]">
          {isAllChecked ? (
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <CheckCircle2 size={40} className="text-cyan-400" />
              <span className="text-xs font-black text-cyan-400 uppercase tracking-widest">Ready for the Timing Exam!</span>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2 text-slate-500">
              <HelpCircle size={40} className="animate-pulse" />
              <span className="text-xs font-black uppercase tracking-widest text-slate-400">Complete Checklist</span>
            </div>
          )}
        </div>
      </div>
    </L4Frame>
  );
};
