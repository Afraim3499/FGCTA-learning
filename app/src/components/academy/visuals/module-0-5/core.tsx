"use client";

import React, { useState, useEffect } from "react";
import { 
  Columns, 
  TrendingUp, 
  Layers, 
  Eye, 
  ArrowRight,
  ChevronRight,
  Activity,
  Database,
  Fingerprint,
  Target,
  Compass,
  Zap,
  Clock,
  Layout,
  AlertTriangle,
  ArrowRightCircle,
  TrendingDown,
  Maximize2,
  Box,
  Scale,
  CheckCircle,
  Workflow,
  ShieldAlert,
  Search
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

/**
 * LURNAVA INSTITUTIONAL DESIGN TOKENS
 */
const UI = {
  navy: "#071B36",
  teal: "#0D9488",
  slate: "#475569",
  border: "#E2E8F0",
  bg: "#F8FBFC",
  rose: "#BE123C",
  sky: "#0284C7",
};

/**
 * Institutional Frame Component
 */
const InstitutionalFrame = ({ 
  children, 
  label, 
  status = "ANALYSIS ACTIVE",
  id = "LN-0.5-STR"
}: { 
  children: React.ReactNode; 
  label: string; 
  status?: string;
  id?: string;
}) => (
  <div className="w-full h-full min-h-[550px] bg-[#F8FBFC] border border-[#E2E8F0] rounded-[2rem] p-8 flex flex-col relative overflow-hidden shadow-sm">
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#071B36_1.5px,transparent_1.5px)] bg-[length:32px_32px]" />
    
    <div className="flex items-center justify-between mb-8 relative z-10 border-b border-slate-200/50 pb-4">
      <div className="flex flex-col">
        <div className="flex items-center gap-2 mb-1">
          <Database size={10} className="text-teal-600" />
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Structural Audit Stream</span>
        </div>
        <h4 className="text-base font-black text-[#071B36] uppercase tracking-tighter italic">{label}</h4>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-end">
          <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Audit ID</span>
          <span className="text-[10px] font-mono text-[#071B36] font-bold">{id}</span>
        </div>
        <div className="w-px h-6 bg-slate-200" />
        <div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
          <span className="text-[9px] font-black text-[#071B36] uppercase tracking-widest">{status}</span>
        </div>
      </div>
    </div>

    <div className="flex-1 flex flex-col items-center justify-center relative z-10">
      {children}
    </div>

    <div className="mt-8 pt-4 border-t border-slate-200/50 flex items-center justify-between">
       <div className="flex gap-4">
          <div className="flex items-center gap-1.5">
            <div className="w-1 h-1 bg-teal-500 rounded-full" />
            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Structure Verified</span>
          </div>
       </div>
       <div className="flex items-center gap-1.5">
          <Fingerprint size={10} className="text-slate-300" />
          <span className="text-[8px] font-mono text-slate-300 uppercase tracking-tighter">LN-STR-PROD-V1</span>
       </div>
    </div>
  </div>
);

const MentorInsight = ({ text, analogy }: { text: string; analogy?: string }) => (
  <div className="w-full mt-8 pt-6 border-t border-slate-200/50 flex flex-col gap-3">
    <div className="flex items-center gap-2">
      <div className="px-2 py-1 bg-[#071B36] text-white text-[8px] font-black uppercase tracking-widest rounded-sm">Mentor Insight</div>
      <div className="h-px flex-1 bg-slate-200" />
    </div>
    <div className="flex gap-4">
       <div className="flex-1">
          <p className="text-xs font-bold text-[#071B36] leading-relaxed">{text}</p>
          {analogy && (
            <p className="mt-2 text-[11px] text-slate-500 italic leading-snug">
              <span className="font-black uppercase text-[9px] mr-2 text-teal-600 not-italic">Analogy:</span>
              {analogy}
            </p>
          )}
       </div>
    </div>
  </div>
);

/**
 * Card 1: Structure Is the Market’s Skeleton
 */
export const StructureSkeletonIntro = () => {
  const stages = [
    { id: "candles", title: "Single Record", subtitle: "The Candle", icon: <Columns size={18} />, color: "bg-slate-100 text-slate-500 border-slate-200" },
    { id: "swing", title: "Single Turn", subtitle: "The Swing", icon: <Activity size={18} />, color: "bg-blue-50 text-blue-500 border-blue-100" },
    { id: "swings", title: "The Skeleton", subtitle: "Structure", icon: <Layers size={18} />, color: "bg-indigo-50 text-indigo-600 border-indigo-100" },
    { id: "reading", title: "The Conclusion", subtitle: "Market Reading", icon: <Eye size={18} />, color: "bg-emerald-50 text-emerald-600 border-emerald-100" }
  ];

  return (
    <InstitutionalFrame label="Structural Hierarchy Diagnostic" id="STR-01-HIER">
      <div className="w-full max-w-4xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
          <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100 -z-10 hidden md:block" />
          {stages.map((stage, i) => (
            <React.Fragment key={stage.id}>
              <div className="flex flex-col items-center gap-3 group relative">
                <div className={cn("w-16 h-16 rounded-[1.5rem] flex items-center justify-center border-2 transition-all duration-500 shadow-sm", stage.color, "group-hover:scale-110 group-hover:shadow-md")}>
                  {stage.icon}
                </div>
                <div className="text-center space-y-0.5">
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">{stage.title}</span>
                  <h4 className="text-[13px] font-black text-slate-900 uppercase">{stage.subtitle}</h4>
                </div>
              </div>
              {i < stages.length - 1 && <div className="hidden md:block text-slate-200"><ArrowRight size={20} /></div>}
            </React.Fragment>
          ))}
        </div>

        <div className="bg-[#071B36] rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-10"><TrendingUp size={120} className="text-teal-400" /></div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-[10px] font-extrabold text-teal-400 uppercase tracking-[0.2em]">The Building Process</div>
              <h3 className="text-2xl font-black text-white leading-tight uppercase tracking-tight">Structure is <span className="text-teal-400 underline decoration-teal-500/30 underline-offset-8 italic">Built</span>, Not Guessed.</h3>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-medium">You are moving from reading isolated "sentences" (candles) to reading the entire "story" (structure).</p>
            </div>
            <div className="relative h-40 flex items-center justify-center">
               <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-transparent rounded-full blur-3xl" />
               <div className="flex gap-1 items-end relative h-24">
                  {[30, 50, 40, 70, 60, 90, 80].map((h, i) => (
                    <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: i * 0.1, duration: 1 }} className="w-4 bg-slate-800 rounded-t-sm border-x border-t border-slate-700 relative">
                       {i % 2 === 0 && h > 50 && <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-teal-500 rounded-full border-2 border-slate-900" />}
                    </motion.div>
                  ))}
               </div>
            </div>
          </div>
        </div>
        <MentorInsight text="Market structure is the only 'truth' that matters. If you lose sight of the skeleton, you are just gambling on colors." analogy="Blueprints of a building. You don't judge a skyscraper by its windows (candles); you judge it by its steel frame (structure)." />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 2: Swings: The Building Blocks of Structure
 */
export const SwingLogicVisual = () => {
  const [showLogic, setShowLogic] = useState(false);
  return (
    <InstitutionalFrame label="Swing Identification Diagnostic" id="STR-02-SWING">
      <div className="w-full max-w-4xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-extrabold text-blue-500 uppercase tracking-widest">Noise vs. Meaning</div>
             <h3 className="text-3xl font-black text-[#071B36] uppercase tracking-tighter italic">Filtering the Chaos</h3>
             <p className="text-sm text-slate-500 leading-relaxed font-bold">Most beginners see every candle as a move. A Lurnava learner only cares about the **Turns** and **Legs**.</p>
             <button onClick={() => setShowLogic(!showLogic)} className="px-8 py-3 bg-[#071B36] text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-slate-800 transition-all flex items-center gap-3 shadow-xl shadow-slate-900/10">
               {showLogic ? "Reset Analysis" : "Apply Swing Filter"}
               <ArrowRightCircle size={16} />
             </button>
          </div>
          <div className="bg-white border-2 border-slate-200 rounded-[3rem] p-10 h-[300px] relative overflow-hidden shadow-sm flex items-center justify-center">
             <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(0,0,0,0.1)_1.5px,transparent_1.5px)] bg-[length:100%_16px]" />
             <div className="flex gap-1.5 items-end h-32 opacity-20">
                {[40, 45, 42, 60, 55, 65, 62, 80, 75, 85, 82, 95, 90, 70, 75, 60, 65, 50, 55, 40].map((h, i) => (
                  <div key={i} className="w-3 bg-slate-400 rounded-sm" style={{ height: `${h}%` }} />
                ))}
             </div>
             <AnimatePresence>
               {showLogic && (
                 <svg key="logic-overlay" className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible">
                    <motion.path key="swing-path" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} d="M 50,220 L 150,120 L 250,180 L 350,80" fill="none" stroke="#0D9488" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                    <motion.circle key="l1" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }} cx="50" cy="220" r="8" fill="#071B36" />
                    <motion.text key="t1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} x="35" y="245" fill="#071B36" className="text-[10px] font-black uppercase tracking-widest">Swing Low</motion.text>
                    <motion.circle key="h1" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1 }} cx="150" cy="120" r="8" fill="#0D9488" />
                    <motion.text key="t2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} x="135" y="105" fill="#0D9488" className="text-[10px] font-black uppercase tracking-widest">Swing High</motion.text>
                    <motion.circle key="l2" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5 }} cx="250" cy="180" r="8" fill="#071B36" />
                    <motion.text key="t3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 }} x="235" y="205" fill="#071B36" className="text-[10px] font-black uppercase tracking-widest">Swing Low</motion.text>
                    <motion.circle key="h2" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2 }} cx="350" cy="80" r="8" fill="#0D9488" />
                    <motion.text key="t4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }} x="335" y="65" fill="#0D9488" className="text-[10px] font-black uppercase tracking-widest">Swing High</motion.text>
                 </svg>
               )}
             </AnimatePresence>
          </div>
        </div>
        <MentorInsight text="A swing is not a candle. It is a visual record of where price successfully turned. If there is no clear turn, there is no swing." analogy="The joints of an arm. Your arm can move in many tiny ways, but the 'structure' only changes at the shoulder, elbow, and wrist." />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 3: Higher Highs, Higher Lows, Lower Highs, Lower Lows
 */
export const StructureLanguageVisual = () => {
  const [activeTab, setActiveTab] = useState<'up' | 'down' | 'unclear'>('up');
  const scenarios = {
    up: { title: "Upward Structure", desc: "Sequence of HH and HL.", points: [{ x: 50, y: 220, label: "HL" }, { x: 150, y: 100, label: "HH" }, { x: 250, y: 180, label: "HL" }, { x: 350, y: 50, label: "HH" }], path: "M 50 220 L 150 100 L 250 180 L 350 50", color: "emerald" },
    down: { title: "Downward Structure", desc: "Sequence of LL and LH.", points: [{ x: 50, y: 50, label: "LH" }, { x: 150, y: 180, label: "LL" }, { x: 250, y: 100, label: "LH" }, { x: 350, y: 220, label: "LL" }], path: "M 50 50 L 150 180 L 250 100 L 350 220", color: "rose" },
    unclear: { title: "Unclear Structure", desc: "Equal or overlapping points.", points: [{ x: 50, y: 120, label: "H" }, { x: 150, y: 120, label: "H" }, { x: 250, y: 120, label: "H" }, { x: 350, y: 120, label: "H" }], path: "M 50 120 L 150 120 L 250 120 L 350 120", color: "slate" }
  };
  const current = scenarios[activeTab];
  return (
    <InstitutionalFrame label="Structural Vocabulary Audit" id="STR-03-VOCAB">
      <div className="w-full max-w-4xl mx-auto space-y-12">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {Object.entries(scenarios).map(([key, data]) => (
            <button key={key} onClick={() => setActiveTab(key as any)} className={cn("px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border shadow-sm", activeTab === key ? "bg-slate-900 text-white border-slate-900 scale-105" : "bg-white text-slate-500 border-slate-100 hover:border-slate-200")}>{data.title}</button>
          ))}
        </div>
        <div className="bg-slate-900 rounded-[3rem] p-10 h-[400px] relative overflow-hidden border border-slate-800 shadow-2xl flex items-center justify-center">
           <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:24px_24px]" />
           <svg className="w-full h-full max-w-[400px] pointer-events-none overflow-visible">
              <motion.path key={activeTab} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} d={current.path} fill="none" stroke={current.color === 'emerald' ? "#10b981" : current.color === 'rose' ? "#f43f5e" : "#64748b"} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-700" />
              {current.points.map((pt, i) => (
                <g key={`${activeTab}-${i}`} className="animate-in zoom-in duration-300" style={{ transitionDelay: `${i * 100}ms` }}>
                  <circle cx={pt.x} cy={pt.y} r="8" fill="white" stroke={current.color === 'emerald' ? "#10b981" : current.color === 'rose' ? "#f43f5e" : "#64748b"} strokeWidth="3" />
                  <foreignObject x={pt.x - 40} y={pt.y < 120 ? pt.y - 35 : pt.y + 15} width="80" height="20">
                    <div className="flex justify-center"><span className={cn("px-2 py-0.5 rounded bg-white text-[9px] font-black uppercase tracking-widest shadow-sm border", current.color === 'emerald' ? "text-emerald-600 border-emerald-100" : current.color === 'rose' ? "text-rose-600 border-rose-100" : "text-slate-600 border-slate-200")}>{pt.label}</span></div>
                  </foreignObject>
                </g>
              ))}
           </svg>
        </div>
        <MentorInsight text="You aren't naming these points for fun. You are naming them to identify the 'Story' of the market. HH and HL are your 'North.' LL and LH are your 'South.'" analogy="Cardinal directions on a map. Without these terms, you are lost at sea." />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 4: Trend Structure: Direction Through Swings
 */
export const TrendStructureVisual = () => {
  const [activeTrend, setActiveTrend] = useState<'up' | 'down'>('up');
  return (
    <InstitutionalFrame label="Directional Context Diagnostic" id="STR-04-TREND">
      <div className="w-full max-w-4xl mx-auto space-y-12">
        <div className="flex items-center justify-center gap-4">
           {['up', 'down'].map((type) => (
             <button key={type} onClick={() => setActiveTrend(type as any)} className={cn("px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all", activeTrend === type ? "bg-[#071B36] text-white" : "bg-slate-100 text-slate-400")}>{type === 'up' ? "Uptrend Audit" : "Downtrend Audit"}</button>
           ))}
        </div>
        <div className="bg-white border-2 border-slate-200 rounded-[3rem] p-10 min-h-[350px] relative overflow-hidden flex flex-col justify-center">
           <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#071B36_1.5px,transparent_1.5px)] bg-[length:24px_24px]" />
           <div className="flex flex-col md:flex-row items-center justify-around gap-8">
              <div className="space-y-4 max-w-xs">
                 <h4 className={cn("text-2xl font-black uppercase italic tracking-tighter", activeTrend === 'up' ? "text-teal-600" : "text-rose-600")}>{activeTrend === 'up' ? "Expansion (Bullish)" : "Contraction (Bearish)"}</h4>
                 <ul className="space-y-2">
                    {activeTrend === 'up' ? (
                      ['Higher Highs Established', 'Higher Lows Maintained', 'Dominant Buy Pressure'].map(li => <li key={li} className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest"><div className="w-1.5 h-1.5 rounded-full bg-teal-500" />{li}</li>)
                    ) : (
                      ['Lower Lows Established', 'Lower Highs Maintained', 'Dominant Sell Pressure'].map(li => <li key={li} className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest"><div className="w-1.5 h-1.5 rounded-full bg-rose-500" />{li}</li>)
                    )}
                 </ul>
              </div>
              <div className="relative w-64 h-64 bg-[#071B36] rounded-[2.5rem] shadow-2xl flex items-center justify-center overflow-hidden border border-slate-800">
                 <svg className="w-48 h-48 overflow-visible">
                    <motion.path key={activeTrend} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} d={activeTrend === 'up' ? "M 0 150 L 50 100 L 80 120 L 150 30" : "M 0 30 L 50 100 L 80 80 L 150 150"} fill="none" stroke={activeTrend === 'up' ? "#0D9488" : "#BE123C"} strokeWidth="8" strokeLinecap="round" />
                 </svg>
              </div>
           </div>
        </div>
        <MentorInsight text="A trend is a weight of evidence. One candle doesn't change it. You need the relationship between the swings to change before you change your bias." analogy="A staircase. You don't call it a downward move just because you stepped on a flat landing. You look at the direction of the whole flight of stairs." />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 5: Range Structure: When Price Moves Sideways
 */
export const RangeStructureVisual = () => {
  return (
    <InstitutionalFrame label="Equilibrium Diagnostic" id="STR-05-RANGE">
      <div className="w-full max-w-4xl mx-auto space-y-12">
        <div className="bg-[#071B36] rounded-[3rem] p-10 min-h-[400px] relative overflow-hidden border border-slate-800 shadow-2xl flex flex-col justify-center">
           <div className="absolute top-1/4 left-0 w-full h-px bg-rose-500/30 border-t border-dashed" />
           <div className="absolute bottom-1/4 left-0 w-full h-px bg-teal-500/30 border-t border-dashed" />
           <div className="absolute top-1/4 left-8 -translate-y-6"><span className="text-[8px] font-black text-rose-400 uppercase tracking-widest">Resistance Ceiling</span></div>
           <div className="absolute bottom-1/4 left-8 translate-y-2"><span className="text-[8px] font-black text-teal-400 uppercase tracking-widest">Support Floor</span></div>
           
           <div className="relative h-64 flex items-center justify-center">
              <svg className="w-full h-full max-w-[500px] overflow-visible">
                 <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} d="M 0 120 L 100 60 L 200 180 L 300 60 L 400 180 L 500 120" fill="none" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                 <circle cx="100" cy="60" r="4" fill="#BE123C" />
                 <circle cx="300" cy="60" r="4" fill="#BE123C" />
                 <circle cx="200" cy="180" r="4" fill="#0D9488" />
                 <circle cx="400" cy="180" r="4" fill="#0D9488" />
              </svg>
           </div>

           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/5 border border-white/10 backdrop-blur-md px-6 py-4 rounded-2xl text-center">
              <h4 className="text-xl font-black text-white uppercase italic tracking-tighter">Balanced Market</h4>
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-1">Rotation without Breakout</p>
           </div>
        </div>
        <MentorInsight text="Ranges are not 'dead' time; they are 'battle' time. Both sides are equal. Don't guess who will win. Wait for a boundary to fail." analogy="A tennis match. Price is the ball moving between players. You don't know who will win the set until the ball actually flies out of the court (breakout)." />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 6: Impulse and Pullback
 */
export const ImpulsePullbackVisual = () => {
  const [phase, setPhase] = useState<'impulse' | 'pullback' | 'outcome'>('impulse');
  return (
    <InstitutionalFrame label="Rhythm Audit Diagnostic" id="STR-06-RHYTHM">
      <div className="w-full max-w-4xl mx-auto space-y-12">
        <div className="flex items-center justify-center gap-4 bg-slate-100 p-2 rounded-2xl">
           {['impulse', 'pullback', 'outcome'].map((p) => (
             <button key={p} onClick={() => setPhase(p as any)} className={cn("px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all", phase === p ? "bg-white text-[#071B36] shadow-sm" : "text-slate-400")}>{p}</button>
           ))}
        </div>
        <div className="bg-white border-2 border-slate-200 rounded-[3rem] p-10 h-[350px] relative flex items-center justify-center overflow-hidden">
           <svg className="w-full h-full max-w-[500px] overflow-visible">
              <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} d="M 0 250 L 200 50" fill="none" stroke="#0D9488" strokeWidth="8" strokeLinecap="round" className={cn("transition-opacity duration-500", phase === 'impulse' ? "opacity-100" : "opacity-30")} />
              <AnimatePresence>
                {(phase === 'pullback' || phase === 'outcome') && (
                  <motion.path key="pullback-path" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} d="M 200 50 L 300 150" fill="none" stroke="#475569" strokeWidth="6" strokeLinecap="round" className={cn("transition-opacity duration-500", phase === 'pullback' ? "opacity-100" : "opacity-30")} />
                )}
                {phase === 'outcome' && (
                  <motion.path key="outcome-path" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} d="M 300 150 L 500 0" fill="none" stroke="#0D9488" strokeWidth="6" strokeDasharray="8 4" strokeLinecap="round" />
                )}
              </AnimatePresence>
              <text x="100" y="130" transform="rotate(-45, 100, 130)" className="text-[10px] font-black fill-teal-600 uppercase tracking-widest">The Impulse</text>
              {(phase === 'pullback' || phase === 'outcome') && <text x="250" y="90" transform="rotate(45, 250, 90)" className="text-[10px] font-black fill-slate-400 uppercase tracking-widest">The Pullback</text>}
           </svg>
        </div>
        <MentorInsight text="The market has to breathe. An impulse is a shout; a pullback is a breath in. Don't panic when the market breathes; only panic if it stops moving entirely." analogy="Running a sprint. You can't run at 100% forever. You have to slow down to catch your breath (pullback) before you can sprint again (continuation)." />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 7: Reaction Areas, Not Magic Lines
 */
export const ReactionAreasVisual = () => {
  const [isZone, setIsZone] = useState(false);
  return (
    <InstitutionalFrame label="Zone vs. Line Diagnostic" id="STR-07-ZONE">
      <div className="w-full max-w-4xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="space-y-1 text-center md:text-left">
              <h4 className="text-2xl font-black text-[#071B36] uppercase tracking-tighter italic">Flexibility Over Rigidity</h4>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Stop chasing perfect prices.</p>
           </div>
           <button onClick={() => setIsZone(!isZone)} className={cn("px-10 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-xl", isZone ? "bg-teal-600 text-white" : "bg-[#071B36] text-white")}>{isZone ? "Apply Zone Logic" : "Apply Rigid Line"}</button>
        </div>
        <div className="bg-white border-2 border-slate-200 rounded-[3.5rem] p-10 h-[400px] relative overflow-hidden flex items-center justify-center">
           <AnimatePresence mode="wait">
              {!isZone ? (
                <motion.div key="line-marker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute top-[30%] left-0 w-full h-px bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.5)] z-20" />
              ) : (
                <motion.div key="zone-marker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute top-[25%] left-0 w-full h-20 bg-teal-500/10 border-y border-dashed border-teal-500/30 z-20" />
              )}
           </AnimatePresence>
           <svg className="w-full h-full max-w-[600px] overflow-visible z-10">
              <path d="M 0 300 L 100 100 L 200 250 L 300 80 L 400 280 L 500 110 L 600 300" fill="none" stroke="#475569" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="100" cy="100" r="5" fill={isZone ? "#0D9488" : "#BE123C"} />
              <circle cx="300" cy="80" r="5" fill={isZone ? "#0D9488" : "#BE123C"} />
              <circle cx="500" cy="110" r="5" fill={isZone ? "#0D9488" : "#BE123C"} />
           </svg>
           <div className="absolute bottom-10 right-10 text-right">
              <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest italic">{isZone ? "Zone incorporates wicks & noise" : "Line creates false failures"}</span>
           </div>
        </div>
        <MentorInsight text="The market doesn't care about your $1.2345 line. It cares about the area where orders were filled. Think in zones, not points." analogy="A goal post in soccer. The ball doesn't have to hit the exact center of the net to be a goal; it just has to be within the frame (zone)." />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 8: Breaks, Failed Breaks, and Structure Change
 */
export const StructureChangeVisual = () => {
  const [type, setType] = useState<'clean' | 'fail'>('clean');
  return (
    <InstitutionalFrame label="Breakout Quality Audit" id="STR-08-BREAK">
      <div className="w-full max-w-4xl mx-auto space-y-12">
        <div className="flex items-center justify-center gap-4">
           <button onClick={() => setType('clean')} className={cn("px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all", type === 'clean' ? "bg-teal-600 text-white" : "bg-slate-100 text-slate-400")}>Confirmed Break</button>
           <button onClick={() => setType('fail')} className={cn("px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all", type === 'fail' ? "bg-rose-600 text-white" : "bg-slate-100 text-slate-400")}>Failed Break (Trap)</button>
        </div>
        <div className="bg-[#071B36] rounded-[3rem] p-10 h-[350px] relative overflow-hidden border border-slate-800 shadow-2xl flex items-center justify-center">
           <div className="absolute top-[40%] left-0 w-full h-px bg-white/20 border-t border-dashed" />
           <svg className="w-full h-full max-w-[500px] overflow-visible">
              <motion.path key={type} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} d={type === 'clean' ? "M 0 200 L 200 140 L 300 40 L 400 80 L 500 0" : "M 0 200 L 200 140 L 300 40 L 350 150 L 500 180"} fill="none" stroke={type === 'clean' ? "#0D9488" : "#BE123C"} strokeWidth="6" strokeLinecap="round" />
              <text x="310" y="30" className={cn("text-[10px] font-black uppercase tracking-widest", type === 'clean' ? "fill-teal-400" : "fill-rose-400")}>{type === 'clean' ? "Break + Follow Thru" : "Break + Trap"}</text>
           </svg>
        </div>
        <MentorInsight text="A break is just a door opening. You have to see if the market actually walks through the door (follow-through) or just peaks out and runs back inside (failed break)." analogy="Testing the ice on a lake. Stepping on it is the 'break'. If it holds your weight, you have confirmation. If it cracks and you pull back, it was a failure." />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 9: Structure Across Timeframes
 */
export const MultiTimeframeStructureVisual = () => {
  const [activeTf, setActiveTf] = useState<'4H' | '15m'>('4H');
  return (
    <InstitutionalFrame label="Multi-Layer Context Audit" id="STR-09-MTF">
      <div className="w-full max-w-4xl mx-auto space-y-12">
        <div className="flex items-center justify-center gap-4">
           <button onClick={() => setActiveTf('4H')} className={cn("px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-xl", activeTf === '4H' ? "bg-[#071B36] text-white" : "bg-slate-100 text-slate-400")}>4H (The Big Window)</button>
           <button onClick={() => setActiveTf('15m')} className={cn("px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-xl", activeTf === '15m' ? "bg-teal-600 text-white" : "bg-slate-100 text-slate-400")}>15m (The Detail Window)</button>
        </div>
        <div className="bg-white border-2 border-slate-200 rounded-[3.5rem] p-10 h-[400px] relative overflow-hidden flex flex-col items-center justify-center">
           <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#071B36_2px,transparent_2px)] bg-[length:32px:32px]" />
           <div className="text-center mb-8 relative z-10">
              <h4 className="text-2xl font-black text-[#071B36] uppercase tracking-tighter italic">{activeTf === '4H' ? "Higher Timeframe Range" : "Lower Timeframe Uptrend"}</h4>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{activeTf === '4H' ? "The Market Environment" : "The Local Movement"}</p>
           </div>
           <div className="relative w-full h-48 flex items-center justify-center">
              <svg className="w-full h-full max-w-[500px] overflow-visible">
                 {activeTf === '4H' ? (
                   <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} d="M 0 100 L 500 100" fill="none" stroke="#475569" strokeWidth="10" strokeLinecap="round" />
                 ) : (
                   <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} d="M 0 150 L 100 100 L 200 130 L 300 50 L 400 80 L 500 0" fill="none" stroke="#0D9488" strokeWidth="6" strokeLinecap="round" />
                 )}
              </svg>
              {activeTf === '4H' && <div className="absolute top-[30%] left-1/2 -translate-x-1/2 px-4 py-2 bg-rose-500 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full">Resistance Area</div>}
           </div>
        </div>
        <MentorInsight text="The 4H is the boss, the 15m is the employee. The employee might be running around fast (uptrend), but the boss decides if they are allowed to leave the building (range)." analogy="A magnifying glass. Looking closely (LTF) shows the texture of a leaf, but zooming out (HTF) shows the whole tree is leaning over." />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 10: Practice Drill: Trend, Range, or Mixed?
 */
export const StructureDrillVisual = () => {
  return (
    <InstitutionalFrame label="Evidence Conflict Diagnostic" id="STR-10-DRILL">
      <div className="w-full max-w-4xl mx-auto space-y-12">
        <div className="bg-[#071B36] rounded-[3rem] p-12 border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-center">
           <div className="absolute top-[20%] left-0 w-full h-12 bg-rose-500/10 border-y border-dashed border-rose-500/30 flex items-center justify-end pr-8">
              <span className="text-[10px] font-black text-rose-400 uppercase tracking-widest">HTF Ceiling</span>
           </div>
           <div className="relative h-64 flex items-center justify-center">
              <svg className="w-full h-full max-w-[500px] overflow-visible">
                 <path d="M 0 250 L 150 150 L 250 180 L 400 60" fill="none" stroke="#0D9488" strokeWidth="6" strokeLinecap="round" />
                 <circle cx="250" cy="180" r="6" fill="#0D9488" />
                 <circle cx="400" cy="60" r="6" fill="#0D9488" />
                 <text x="400" y="40" textAnchor="middle" className="text-[10px] font-black fill-teal-400 uppercase tracking-widest">LTF HH Approaching Ceiling</text>
              </svg>
           </div>
           <div className="mt-8 flex justify-center gap-12">
              <div className="flex items-center gap-3">
                 <div className="w-4 h-4 rounded bg-teal-500" />
                 <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Local Uptrend</span>
              </div>
              <div className="flex items-center gap-3">
                 <div className="w-4 h-4 rounded border-2 border-dashed border-rose-500" />
                 <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Higher Context Wall</span>
              </div>
           </div>
        </div>
        <MentorInsight text="When you see an uptrend on a small chart hitting a wall on a big chart, the reading is 'Mixed'. Professional traders wait for the boss to give permission before following the employee." analogy="A fast car (LTF) driving toward a closed gate (HTF). The car is fast, but it doesn't matter until the gate opens." />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 11: Module Debrief: Structure Gives Movement Meaning
 */
export const StructureDebriefVisual = () => {
  return (
    <InstitutionalFrame label="Module Competency Verified" id="STR-11-DEBRIEF" status="COMPLETE">
      <div className="w-full max-w-4xl mx-auto space-y-12 flex flex-col items-center">
        <div className="relative group">
           <div className="w-24 h-24 rounded-[2.5rem] bg-teal-500 flex items-center justify-center text-white shadow-2xl shadow-teal-500/20 group-hover:scale-110 transition-transform duration-500">
              <CheckCircle size={48} strokeWidth={2.5} />
           </div>
           <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -inset-4 border-2 border-dashed border-teal-200 rounded-full opacity-30" />
        </div>

        <div className="text-center space-y-2">
           <h3 className="text-4xl font-black text-[#071B36] uppercase tracking-tighter italic">Skeleton Mastered</h3>
           <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.4em]">From Noise to Narrative</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
           {[
             { label: "Candle Aggregation", icon: <Columns size={16} /> },
             { label: "Swing Identification", icon: <Activity size={16} /> },
             { label: "Directional Bias", icon: <TrendingUp size={16} /> },
             { label: "MTF Integration", icon: <Layers size={16} /> }
           ].map((item, i) => (
             <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-2xl bg-[#071B36] text-white flex items-center justify-center shadow-lg">{item.icon}</div>
                <span className="text-[11px] font-black text-[#071B36] uppercase tracking-widest">{item.label}</span>
             </div>
           ))}
        </div>

        <MentorInsight text="You have moved from a person who 'guesses' where price might go, to an auditor who 'reads' what the market is building. This is the first step toward professional logic." analogy="Learning to read music. You no longer just hear sounds; you see the notes and understand the symphony." />
      </div>
    </InstitutionalFrame>
  );
};
