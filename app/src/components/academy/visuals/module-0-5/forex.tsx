"use client";

import React, { useState, useEffect } from "react";
import { 
  Activity, 
  ArrowRight, 
  ArrowRightCircle, 
  CheckCircle, 
  Clock, 
  Compass, 
  Database, 
  Eye, 
  Fingerprint, 
  Globe, 
  Layers, 
  Layout, 
  RefreshCw, 
  Scale, 
  ShieldAlert, 
  Target, 
  TrendingDown, 
  TrendingUp, 
  Workflow, 
  Zap 
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
  amber: "#D97706"
};

/**
 * Institutional Frame Component
 */
const InstitutionalFrame = ({ 
  children, 
  label, 
  status = "AUDIT ACTIVE",
  id = "LN-0.5-FX"
}: { 
  children: React.ReactNode; 
  label: string; 
  status?: string;
  id?: string;
}) => (
  <div className="w-full h-full min-h-[550px] bg-[#F8FBFC] border border-[#E2E8F0] rounded-[2rem] p-6 md:p-8 flex flex-col relative overflow-hidden shadow-sm">
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#071B36_1.5px,transparent_1.5px)] bg-[length:32px_32px]" />
    
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 relative z-10 border-b border-slate-200/50 pb-4">
      <div className="flex flex-col">
        <div className="flex items-center gap-2 mb-1">
          <Globe size={10} className="text-teal-600 animate-spin-slow" />
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Forex Track Adaptation</span>
        </div>
        <h4 className="text-base font-black text-[#071B36] uppercase tracking-tighter italic">{label}</h4>
      </div>
      <div className="flex items-center gap-3 self-end md:self-auto">
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
            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Exchange Rates Synchronized</span>
          </div>
       </div>
       <div className="flex items-center gap-1.5">
          <Fingerprint size={10} className="text-slate-300" />
          <span className="text-[8px] font-mono text-slate-300 uppercase tracking-tighter">LN-FX-PROD-V1</span>
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
 * Card 1: Forex Structure Is Pair Behavior
 */
export const ForexPairStructureSkeleton = () => {
  const [eurWeight, setEurWeight] = useState(50); // 0 to 100
  
  return (
    <InstitutionalFrame label="Relative Currency Pressure Balanced scale" id="FX-05-PAIR">
      <div className="w-full max-w-4xl mx-auto space-y-10">
        <div className="bg-[#071B36] rounded-[3rem] p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-5"><Scale size={160} className="text-teal-400" /></div>
          
          <div className="relative z-10 flex flex-col items-center gap-8">
            <div className="text-center space-y-2">
              <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-[9px] font-extrabold text-teal-400 uppercase tracking-widest">Interactive Equilibrium Scale</span>
              <h3 className="text-2xl font-black text-white uppercase italic tracking-tight">EUR/USD Exchange Rate Pressure</h3>
              <p className="text-xs text-slate-400 max-w-lg mx-auto">Adjust the relative weight of the base currency (EUR) vs the quote currency (USD) to observe how it pushes the structure.</p>
            </div>
            
            <div className="w-full max-w-md bg-slate-900/60 p-6 rounded-2xl border border-slate-800/80 space-y-6">
              <div className="flex justify-between items-center text-xs font-black text-white uppercase tracking-widest">
                <span className="text-teal-400">EUR Strength ({eurWeight}%)</span>
                <span className="text-rose-400">USD Strength ({100 - eurWeight}%)</span>
              </div>
              
              <input 
                type="range" 
                min="10" 
                max="90" 
                value={eurWeight} 
                onChange={(e) => setEurWeight(Number(e.target.value))} 
                className="w-full accent-teal-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                title="EUR vs USD Weight"
              />
              
              <div className="flex justify-between text-[10px] text-slate-500 font-bold uppercase">
                <span>EUR Dominant (Uptrend)</span>
                <span>Balanced (Range)</span>
                <span>USD Dominant (Downtrend)</span>
              </div>
            </div>

            {/* The Animated Scale */}
            <div className="w-full max-w-lg h-36 relative flex items-end justify-center pb-4">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 500 200">
                {/* Scale Stand */}
                <line x1="250" y1="120" x2="250" y2="150" stroke="#475569" strokeWidth="6" />
                <path d="M 220 150 L 280 150" stroke="#475569" strokeWidth="8" strokeLinecap="round" />
                
                {/* Scale Beam */}
                <motion.line 
                  animate={{ rotate: (eurWeight - 50) * 0.6 }}
                  transition={{ type: "spring", stiffness: 60 }}
                  x1="120" y1="120" x2="380" y2="120" 
                  stroke="#94a3b8" strokeWidth="4" 
                  style={{ originX: "250px", originY: "120px" }}
                />
                
                {/* Scale Pans & Strings */}
                <motion.g
                  animate={{ 
                    y: 130 * Math.sin(((eurWeight - 50) * 0.6 * Math.PI) / 180), 
                    x: 130 * (1 - Math.cos(((eurWeight - 50) * 0.6 * Math.PI) / 180)) 
                  }}
                  transition={{ type: "spring", stiffness: 60 }}
                >
                  {/* Left Pan (EUR) */}
                  <line x1="120" y1="120" x2="90" y2="160" stroke="#64748b" strokeWidth="2" />
                  <line x1="120" y1="120" x2="150" y2="160" stroke="#64748b" strokeWidth="2" />
                  <path d="M 80 160 Q 120 180 160 160" fill="none" stroke="#64748b" strokeWidth="4" />
                  {/* EUR Box */}
                  <rect x="100" y="130" width="40" height="30" rx="4" fill="#0D9488" className="shadow-lg" />
                  <text x="120" y="148" textAnchor="middle" fill="white" className="text-[10px] font-black uppercase">EUR</text>
                </motion.g>

                <motion.g
                  animate={{ 
                    y: -130 * Math.sin(((eurWeight - 50) * 0.6 * Math.PI) / 180), 
                    x: -130 * (1 - Math.cos(((eurWeight - 50) * 0.6 * Math.PI) / 180)) 
                  }}
                  transition={{ type: "spring", stiffness: 60 }}
                >
                  {/* Right Pan (USD) */}
                  <line x1="380" y1="120" x2="350" y2="160" stroke="#64748b" strokeWidth="2" />
                  <line x1="380" y1="120" x2="410" y2="160" stroke="#64748b" strokeWidth="2" />
                  <path d="M 340 160 Q 380 180 420 160" fill="none" stroke="#64748b" strokeWidth="4" />
                  {/* USD Box */}
                  <rect x="360" y="130" width="40" height="30" rx="4" fill="#BE123C" className="shadow-lg" />
                  <text x="380" y="148" textAnchor="middle" fill="white" className="text-[10px] font-black uppercase">USD</text>
                </motion.g>
              </svg>
            </div>
            
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center w-full max-w-md">
              <span className="text-[10px] font-black text-teal-400 uppercase tracking-widest block mb-1">Resulting Market Narrative</span>
              <p className="text-xs text-slate-300 font-bold uppercase">
                {eurWeight > 58 ? "EUR Dominates → High relative buying pressure → Clean Bullish Structure (Uptrend)" :
                 eurWeight < 42 ? "USD Dominates → High relative selling pressure → Clean Bearish Structure (Downtrend)" :
                 "Relative balance → Rotation between limits → Sideways Range Structure"}
              </p>
            </div>
          </div>
        </div>
        <MentorInsight 
          text="A Forex chart is never a picture of one asset. It is a scale. When the left side gains weight or the right side loses weight, the line moves up. When you read Forex structure, you are reading relative pressure." 
          analogy="A tug-of-war game between two teams. The rope's center point is the exchange rate. The movement of the center tells you who is pulling harder."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 2: Forex Swings Show Pressure Turning Points
 */
export const ForexSwingPressurePoints = () => {
  const [filterNoise, setFilterNoise] = useState(false);
  
  return (
    <InstitutionalFrame label="Swing Identification Diagnostic" id="FX-05-SWING">
      <div className="w-full max-w-4xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-extrabold text-blue-500 uppercase tracking-widest">Filter Verification</span>
            <h3 className="text-2xl font-black text-[#071B36] uppercase tracking-tighter italic">Filtering Forex Swings</h3>
            <p className="text-xs text-slate-500 leading-relaxed font-bold">
              Currency pairs have endless intraday noise due to continuous algorithmic transactions. If you mark every wiggle, the structure disappears. The Lurnava habit is to filter minor noise and focus purely on heavy pressure turning points.
            </p>
            <button 
              onClick={() => setFilterNoise(!filterNoise)} 
              className={cn(
                "px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:scale-102 active:scale-98 transition-all flex items-center gap-3 shadow-lg",
                filterNoise ? "bg-teal-600 text-white shadow-teal-600/10" : "bg-[#071B36] text-white shadow-slate-900/10"
              )}
            >
              {filterNoise ? "Noise Filter Applied" : "Apply Noise Filter"}
              <RefreshCw size={14} className={cn(filterNoise && "animate-spin")} />
            </button>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-[3rem] p-8 h-[350px] relative overflow-hidden shadow-sm flex flex-col justify-between">
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(0,0,0,0.1)_1.5px,transparent_1.5px)] bg-[length:100%_16px]" />
            
            {/* The Candle and Swing SVG */}
            <div className="flex-1 relative flex items-center justify-center">
              <svg className="w-full h-full max-w-[400px] overflow-visible" viewBox="0 0 400 300">
                {/* Wiggles Path */}
                <path 
                  d="M 20 280 L 50 200 L 80 230 L 110 140 L 140 180 L 175 110 L 210 160 L 250 80 L 290 190 L 330 150 L 370 230" 
                  fill="none" 
                  stroke="#94a3b8" 
                  strokeWidth="2" 
                  className={cn("transition-opacity duration-300", filterNoise ? "opacity-30" : "opacity-100")} 
                />
                
                {/* Filtered Heavy Path */}
                <AnimatePresence>
                  {filterNoise && (
                    <motion.path 
                      initial={{ pathLength: 0 }} 
                      animate={{ pathLength: 1 }} 
                      exit={{ opacity: 0 }}
                      d="M 20 280 L 175 110 L 290 190 L 370 230" 
                      fill="none" 
                      stroke="#0D9488" 
                      strokeWidth="5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                  )}
                </AnimatePresence>

                {/* Major Swing Points */}
                <circle cx="20" cy="280" r="5" fill="#071B36" />
                <circle cx="175" cy="110" r="5" fill="#0D9488" />
                {filterNoise && <text x="175" y="90" textAnchor="middle" fill="#0D9488" className="text-[9px] font-black uppercase tracking-widest animate-fade-in">Swing High (Major)</text>}
                
                <circle cx="290" cy="190" r="5" fill="#071B36" />
                {filterNoise && <text x="290" y="212" textAnchor="middle" fill="#071B36" className="text-[9px] font-black uppercase tracking-widest animate-fade-in">Swing Low (Major)</text>}

                {/* Minor Wiggles points */}
                {!filterNoise && (
                  <>
                    <circle cx="50" cy="200" r="3" fill="#ef4444" />
                    <circle cx="80" cy="230" r="3" fill="#ef4444" />
                    <circle cx="110" cy="140" r="3" fill="#ef4444" />
                    <circle cx="140" cy="180" r="3" fill="#ef4444" />
                    <circle cx="210" cy="160" r="3" fill="#ef4444" />
                    <text x="220" y="160" fill="#ef4444" className="text-[8px] font-bold uppercase">Minor Noise</text>
                  </>
                )}
              </svg>
            </div>
            
            <div className="text-center">
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                {filterNoise ? "Showing Institutional Pressure Swings" : "Showing Raw Session Activity"}
              </span>
            </div>
          </div>
        </div>
        <MentorInsight 
          text="Swings are the joints of the market skeleton. If you track every tiny wiggle, you'll call structure breaks every few minutes. Filter for the heavy turns." 
          analogy="A shoreline. You ignore the small splashes of the ripples (noise) and only mark the high-water line where the big waves broke (major swings)."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 3: Trend and Range in Currency Pairs
 */
export const ForexTrendRangeStructure = () => {
  const [activeTab, setActiveTab] = useState<'trend' | 'range' | 'unclear'>('trend');
  
  const visualData = {
    trend: {
      title: "Forex Trend Structure",
      subtitle: "EUR/USD Bullish Trend",
      points: [{ x: 50, y: 220, l: "HL" }, { x: 130, y: 120, l: "HH" }, { x: 210, y: 170, l: "HL" }, { x: 300, y: 70, l: "HH" }],
      path: "M 50 220 L 130 120 L 210 170 L 300 70",
      color: "#0D9488",
      description: "Consistent creation of Higher Highs (HH) and Higher Lows (HL) indicates dominant upward structural pressure."
    },
    range: {
      title: "Forex Range Structure",
      subtitle: "GBP/USD Sideways Rotation",
      points: [{ x: 50, y: 140, l: "Base" }, { x: 120, y: 70, l: "Ceiling" }, { x: 200, y: 190, l: "Floor" }, { x: 270, y: 70, l: "Ceiling" }, { x: 330, y: 190, l: "Floor" }],
      path: "M 50 140 L 120 70 L 200 190 L 270 70 L 330 190",
      color: "#D97706",
      description: "Price bounces symmetrically between clear boundaries without producing directional swing continuation."
    },
    unclear: {
      title: "Forex Unclear Structure",
      subtitle: "AUD/USD Overlapping Contraction",
      points: [{ x: 50, y: 140, l: "Start" }, { x: 120, y: 100, l: "H" }, { x: 200, y: 160, l: "L" }, { x: 270, y: 120, l: "Lower H" }, { x: 330, y: 140, l: "Higher L" }],
      path: "M 50 140 L 120 100 L 200 160 L 270 120 L 330 140",
      color: "#475569",
      description: "Highs and lows are converging and overlapping. No clean trends or ranges are verified. Highly mixed evidence."
    }
  };

  const current = visualData[activeTab];

  return (
    <InstitutionalFrame label="Pair Classification Diagnostic" id="FX-05-CLASSIFY">
      <div className="w-full max-w-4xl mx-auto space-y-12">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {(['trend', 'range', 'unclear'] as const).map((key) => (
            <button 
              key={key} 
              onClick={() => setActiveTab(key)} 
              className={cn(
                "px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border shadow-sm",
                activeTab === key 
                  ? "bg-[#071B36] text-white border-slate-900 scale-105" 
                  : "bg-white text-slate-500 border-slate-100 hover:border-slate-200"
              )}
            >
              {key === 'trend' ? "Trend Structure" : key === 'range' ? "Range Structure" : "Unclear / Mixed"}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white border border-slate-200 rounded-[3rem] p-8 shadow-sm">
          <div className="space-y-4">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{current.title}</span>
            <h4 className={cn(
              "text-xl font-black uppercase italic tracking-tighter",
              activeTab === 'trend' ? "text-teal-600" : activeTab === 'range' ? "text-amber-600" : "text-slate-600"
            )}>
              {current.subtitle}
            </h4>
            <p className="text-xs text-slate-500 font-bold leading-relaxed">{current.description}</p>
            
            <div className="pt-2 flex flex-col gap-2">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Diagnostic Verdict</span>
              <span className={cn(
                "px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest border self-start",
                activeTab === 'trend' ? "bg-teal-50 text-teal-600 border-teal-100" :
                activeTab === 'range' ? "bg-amber-50 text-amber-600 border-amber-100" :
                "bg-slate-100 text-slate-600 border-slate-200"
              )}>
                {activeTab === 'trend' ? "VERIFIED: Directional Bias Clear" :
                 activeTab === 'range' ? "VERIFIED: Boundary-to-Boundary Bias Only" :
                 "WARNING: Wait for Alignment"}
              </span>
            </div>
          </div>
          
          <div className="bg-slate-900 rounded-[2rem] p-6 h-[280px] relative overflow-hidden flex items-center justify-center border border-slate-800 shadow-xl">
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:24px_24px]" />
            {activeTab === 'range' && (
              <>
                <line x1="0" y1="70" x2="500" y2="70" stroke="#f43f5e" strokeWidth="2" strokeDasharray="4 4" className="opacity-40" />
                <line x1="0" y1="190" x2="500" y2="190" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" className="opacity-40" />
              </>
            )}
            <svg className="w-full h-full max-w-[350px] overflow-visible" viewBox="0 0 380 250">
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
              />
              {current.points.map((pt, i) => (
                <g 
                  key={`${activeTab}-${i}`} 
                  className={cn(
                    "animate-in zoom-in duration-300", 
                    i === 0 ? "delay-0" : i === 1 ? "delay-75" : i === 2 ? "delay-150" : i === 3 ? "delay-200" : "delay-300"
                  )}
                >
                  <circle cx={pt.x} cy={pt.y} r="6" fill="white" stroke={current.color} strokeWidth="3" />
                  <foreignObject x={pt.x - 35} y={pt.y < 120 ? pt.y - 28 : pt.y + 12} width="70" height="20">
                    <div className="flex justify-center">
                      <span className="px-1.5 py-0.5 rounded bg-[#071B36] text-white text-[8px] font-black uppercase tracking-widest shadow-sm">
                        {pt.l}
                      </span>
                    </div>
                  </foreignObject>
                </g>
              ))}
            </svg>
          </div>
        </div>
        <MentorInsight 
          text="First classify the environment, then choose your tools. Trying to trade range boundaries in a clean trend, or buying breakouts in a rotation, is a fast track to liquidation." 
          analogy="Weather forecasting. You don't wear a heavy winter coat in a summer heatwave. Know your season before walking outside."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 4: Session Ranges Become Structure
 */
export const ForexSessionRangeStructure = () => {
  const [activeSession, setActiveSession] = useState<'tokyo' | 'london' | 'ny'>('tokyo');

  return (
    <InstitutionalFrame label="Session Architecture Mapping" id="FX-05-SESSION">
      <div className="w-full max-w-4xl mx-auto space-y-12">
        <div className="flex items-center justify-center gap-4">
          {(['tokyo', 'london', 'ny'] as const).map((s) => (
            <button 
              key={s} 
              onClick={() => setActiveSession(s)} 
              className={cn(
                "px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-sm border",
                activeSession === s 
                  ? "bg-[#071B36] text-white border-slate-900 scale-105" 
                  : "bg-white text-slate-400 border-slate-100"
              )}
            >
              {s === 'tokyo' ? "Tokyo Range" : s === 'london' ? "London Expansion" : "NY Overlap"}
            </button>
          ))}
        </div>

        <div className="bg-[#071B36] rounded-[3rem] p-8 border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-center min-h-[380px]">
          <div className="absolute top-6 right-6 flex items-center gap-2 text-slate-400 text-[10px] font-mono font-bold">
            <Clock size={12} className="text-teal-400" />
            <span>24H GLOBAL SESSION STRUCTURE</span>
          </div>

          <div className="relative h-56 flex items-center justify-center mt-6">
            <svg className="w-full h-full max-w-[550px] overflow-visible z-10" viewBox="0 0 520 200">
              {/* Tokyo Range Box */}
              <rect x="50" y="100" width="120" height="40" fill="white" fillOpacity="0.03" stroke="#475569" strokeWidth="2" strokeDasharray="3 3" />
              <text x="110" y="125" textAnchor="middle" fill="#94a3b8" className="text-[9px] font-black uppercase tracking-widest">Tokyo Limit</text>
              
              {/* Tokyo Session Price Line */}
              <path d="M 0 120 L 50 110 L 80 130 L 110 105 L 140 125 L 170 120" fill="none" stroke="#64748b" strokeWidth="3" />
              
              {/* London Expansion */}
              <AnimatePresence>
                {(activeSession === 'london' || activeSession === 'ny') && (
                  <motion.path 
                    initial={{ pathLength: 0 }} 
                    animate={{ pathLength: 1 }} 
                    d="M 170 120 L 210 70 L 250 85 L 290 40 L 330 65" 
                    fill="none" 
                    stroke="#0D9488" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                  />
                )}
              </AnimatePresence>
              {(activeSession === 'london' || activeSession === 'ny') && (
                <>
                  <circle cx="290" cy="40" r="5" fill="#0D9488" className="animate-pulse" />
                  <text x="290" y="25" textAnchor="middle" fill="#0D9488" className="text-[8px] font-black uppercase tracking-widest">London High</text>
                </>
              )}

              {/* NY Overlap */}
              <AnimatePresence>
                {activeSession === 'ny' && (
                  <motion.path 
                    initial={{ pathLength: 0 }} 
                    animate={{ pathLength: 1 }} 
                    d="M 330 65 L 370 100 L 410 80 L 450 140 L 500 125" 
                    fill="none" 
                    stroke="#BE123C" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                  />
                )}
              </AnimatePresence>
              {activeSession === 'ny' && (
                <>
                  <circle cx="450" cy="140" r="5" fill="#BE123C" className="animate-pulse" />
                  <text x="450" y="160" textAnchor="middle" fill="#BE123C" className="text-[8px] font-black uppercase tracking-widest">NY Rotation Low</text>
                </>
              )}
            </svg>
            
            {/* HUD overlay */}
            <div className="absolute bottom-2 left-6 bg-slate-900/80 border border-slate-800 px-4 py-3 rounded-xl max-w-xs">
              <span className="text-[8px] font-black text-teal-400 uppercase tracking-widest block mb-1">Architecture Narrative</span>
              <p className="text-[10px] text-slate-300 font-bold leading-normal">
                {activeSession === 'tokyo' ? "Tokyo establishes initial session structure (limited range). A quiet equilibrium." :
                 activeSession === 'london' ? "London injection breaks Tokyo range. Massive capital flow establishes New High." :
                 "NY session overlaps, testing London extremes and rotating back into fair value areas."}
              </p>
            </div>
          </div>
        </div>
        <MentorInsight 
          text="A session range is not a target to trade, but a standard reference boundary. How the next session behaves relative to these boundaries dictates market intent." 
          analogy="A launchpad. The rocket's power is measured by how quickly and cleanly it leaves the pad, or if it falls back down to explode on it."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 5: Session Highs and Lows Are Reaction Areas
 */
export const ForexSessionHighLowReaction = () => {
  const [testArea, setTestArea] = useState<'hold' | 'overshoot'>('hold');

  return (
    <InstitutionalFrame label="Session Boundaries Reaction Audit" id="FX-05-REACTION">
      <div className="w-full max-w-4xl mx-auto space-y-12">
        <div className="flex items-center justify-center gap-4">
          <button 
            onClick={() => setTestArea('hold')} 
            className={cn("px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all border", testArea === 'hold' ? "bg-teal-600 text-white border-transparent" : "bg-white text-slate-400")}
          >
            Boundary Support Holds
          </button>
          <button 
            onClick={() => setTestArea('overshoot')} 
            className={cn("px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all border", testArea === 'overshoot' ? "bg-rose-600 text-white border-transparent" : "bg-white text-slate-400")}
          >
            Boundary Overshoots & Returns
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white border border-slate-200 rounded-[3rem] p-8 shadow-sm">
          <div className="space-y-4">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Reaction Behavior</span>
            <h4 className="text-xl font-black text-[#071B36] uppercase italic tracking-tighter">
              {testArea === 'hold' ? "Clean Reaction hold" : "Overshoot & Liquidate Trap"}
            </h4>
            <p className="text-xs text-slate-500 font-bold leading-relaxed">
              {testArea === 'hold' ? "Price approaches a major previous session boundary. Institutional orders fill, rejecting price away immediately. No boundary close established." :
               "Price briefly pierces the session extreme to trap break-out retail traders, but immediately rejects and closes back inside the structure, creating a trap."}
            </p>
            <div className="bg-[#F8FBFC] p-4 rounded-2xl border border-slate-100">
              <span className="text-[8px] font-black text-teal-600 uppercase tracking-widest block mb-1">Pedagogical Rule</span>
              <p className="text-[10px] text-[#071B36] font-bold">Never treat a session high/low as a perfect line. It is a zone of orders. Expect reactions, not perfect walls.</p>
            </div>
          </div>

          <div className="bg-slate-900 rounded-[2rem] p-6 h-[280px] relative overflow-hidden flex items-center justify-center border border-slate-800">
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:24px_24px]" />
            
            {/* The Session High Zone Area */}
            <div className="absolute top-[30%] left-0 w-full h-10 bg-teal-500/10 border-y border-dashed border-teal-500/20 flex items-center pl-4">
              <span className="text-[8px] font-black text-teal-400 uppercase tracking-widest">PREVIOUS LONDON HIGH AREA</span>
            </div>

            <svg className="w-full h-full max-w-[350px] overflow-visible z-10" viewBox="0 0 380 270">
              <motion.path 
                key={testArea} 
                initial={{ pathLength: 0 }} 
                animate={{ pathLength: 1 }} 
                d={testArea === 'hold' 
                  ? "M 0 250 L 100 200 L 180 100 L 250 180 L 350 220" 
                  : "M 0 250 L 100 200 L 180 75 L 230 150 L 350 200"
                } 
                fill="none" 
                stroke={testArea === 'hold' ? "#0D9488" : "#ef4444"} 
                strokeWidth="5" 
                strokeLinecap="round" 
              />
              
              {/* Boundary Point */}
              <circle cx="180" cy={testArea === 'hold' ? 100 : 75} r="6" fill="white" stroke={testArea === 'hold' ? "#0D9488" : "#ef4444"} strokeWidth="3" />
              
              {testArea === 'overshoot' && (
                <text x="180" y="55" textAnchor="middle" fill="#ef4444" className="text-[8px] font-black uppercase tracking-widest animate-pulse">False Break / Wick Piercing</text>
              )}
            </svg>
          </div>
        </div>
        <MentorInsight 
          text="Session levels are zones of interest, not absolute brick walls. A mild pierce of a session high is a test of liquidity, not a confirmed change in structure." 
          analogy="A dynamic guard rail. It can bend and flex under pressure (overshoot) to absorb impact before pushing price back into the safe lane."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 6: Expansion and Pullback in Forex
 */
export const ForexExpansionPullbackRhythm = () => {
  const [step, setStep] = useState<0 | 1 | 2>(0);
  
  return (
    <InstitutionalFrame label="Rhythmical Wave Diagnostics" id="FX-05-RHYTHM">
      <div className="w-full max-w-4xl mx-auto space-y-12">
        <div className="flex items-center justify-between max-w-md mx-auto relative pb-4">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-4 -z-10" />
          {[0, 1, 2].map((i) => (
            <button 
              key={i} 
              onClick={() => setStep(i as any)}
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center font-black text-xs transition-all relative z-10 border-2",
                step === i 
                  ? "bg-[#071B36] text-white border-slate-900 scale-110 shadow-lg" 
                  : "bg-white text-slate-400 border-slate-200 hover:border-slate-300"
              )}
            >
              {i === 0 ? "1" : i === 1 ? "2" : "3"}
              <span className="absolute top-12 left-1/2 -translate-x-1/2 text-[8px] font-black text-slate-400 uppercase tracking-widest whitespace-nowrap">
                {i === 0 ? "Compression" : i === 1 ? "Expansion" : "Pullback"}
              </span>
            </button>
          ))}
        </div>

        <div className="bg-[#071B36] rounded-[3rem] p-8 border border-slate-800 shadow-2xl relative overflow-hidden min-h-[380px] flex flex-col justify-center">
          <div className="relative h-64 flex items-center justify-center">
            <svg className="w-full h-full max-w-[500px] overflow-visible" viewBox="0 0 500 180">
              {/* Compression Phase */}
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                d="M 0 120 Q 25 110 50 125 Q 75 140 100 120"
                fill="none" 
                stroke="#64748b" 
                strokeWidth="4" 
                className="opacity-70"
              />
              
              {/* Expansion Phase */}
              {step >= 1 && (
                <motion.path 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  d="M 100 120 L 250 40"
                  fill="none" 
                  stroke="#0D9488" 
                  strokeWidth="6" 
                  strokeLinecap="round"
                />
              )}

              {/* Pullback Phase */}
              {step === 2 && (
                <motion.path 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  d="M 250 40 L 350 90"
                  fill="none" 
                  stroke="#ef4444" 
                  strokeWidth="5" 
                  strokeLinecap="round"
                />
              )}

              {/* continuation predictive dashed line */}
              {step === 2 && (
                <motion.path 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                  d="M 350 90 L 480 20"
                  fill="none" 
                  stroke="#0D9488" 
                  strokeWidth="4" 
                  strokeDasharray="6 4"
                  strokeLinecap="round"
                />
              )}
            </svg>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900/90 border border-slate-800/80 backdrop-blur-md px-6 py-4 rounded-2xl text-center max-w-sm">
              <h4 className="text-base font-black text-white uppercase italic tracking-tighter">
                {step === 0 ? "Phase 1: Session Compression" :
                 step === 1 ? "Phase 2: Impulsive Expansion" :
                 "Phase 3: Controlled Pullback"}
              </h4>
              <p className="text-[10px] text-slate-400 font-bold leading-relaxed mt-2 uppercase tracking-wide">
                {step === 0 ? "Currency trades closely within session boundaries. Volatility compresses like a spring." :
                 step === 1 ? "Big capital volume injects, driving price aggressively outside the session range. Bias emerges." :
                 "Price takes a breath, cooling back toward the broken session high to test for new support."}
              </p>
            </div>
          </div>
        </div>
        <MentorInsight 
          text="Price must breathe to sustain directional strength. Chasing a massive expansion leg is a beginner's trap. Wait for the pullback to verify if support holds." 
          analogy="Running a marathon. You cannot run at a full sprint indefinitely. You must pace yourself and take deep breaths (pullbacks) to cross the finish line."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 7: Breaks and Failed Breaks Around Forex Areas
 */
export const ForexBreakFailureQuality = () => {
  const [breakType, setBreakType] = useState<'clean' | 'failed'>('clean');

  return (
    <InstitutionalFrame label="Breakout Evidence Verifier" id="FX-05-BREAK">
      <div className="w-full max-w-4xl mx-auto space-y-12">
        <div className="flex items-center justify-center gap-4">
          <button 
            onClick={() => setBreakType('clean')} 
            className={cn("px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all border shadow-sm", breakType === 'clean' ? "bg-teal-600 text-white border-transparent" : "bg-white text-slate-400")}
          >
            Verified Clean Breakout
          </button>
          <button 
            onClick={() => setBreakType('failed')} 
            className={cn("px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all border shadow-sm", breakType === 'failed' ? "bg-rose-600 text-white border-transparent" : "bg-white text-slate-400")}
          >
            Failed Breakout (Liquidity Hunt)
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white border border-slate-200 rounded-[3rem] p-8 shadow-sm">
          <div className="space-y-4">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Structural Audit</span>
            <h4 className={cn(
              "text-xl font-black uppercase italic tracking-tighter",
              breakType === 'clean' ? "text-teal-600" : "text-rose-600"
            )}>
              {breakType === 'clean' ? "Verified Break + Hold" : "Trap: Piercing Wick Only"}
            </h4>
            <p className="text-xs text-slate-500 font-bold leading-relaxed">
              {breakType === 'clean' ? "The session breakout is verified. Price breaks range ceiling, candle closes strongly outside, and pulls back gently while maintaining higher support structure." :
               "Price spikes rapidly above the range ceiling to trigger retail buys, but fails immediately, wicking back and closing inside the prior session structure."}
            </p>
            
            <div className="pt-2">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-1">Institutional Audit checklist</span>
              <ul className="space-y-1 text-[9px] text-[#071B36] font-bold uppercase tracking-wide">
                <li className="flex items-center gap-1.5"><CheckCircle size={10} className="text-teal-600" /> Close outside area: {breakType === 'clean' ? "YES" : "NO"}</li>
                <li className="flex items-center gap-1.5"><CheckCircle size={10} className="text-teal-600" /> Hold support above limit: {breakType === 'clean' ? "YES" : "NO"}</li>
                <li className="flex items-center gap-1.5"><CheckCircle size={10} className="text-teal-600" /> Follow-through leg established: {breakType === 'clean' ? "YES" : "NO"}</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-900 rounded-[2rem] p-6 h-[280px] relative overflow-hidden flex items-center justify-center border border-slate-800 shadow-xl">
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:24px_24px]" />
            <div className="absolute top-[40%] left-0 w-full h-px bg-white/20 border-t border-dashed" />
            <div className="absolute top-[40%] left-4 -translate-y-4"><span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Range ceiling</span></div>

            <svg className="w-full h-full max-w-[350px] overflow-visible z-10" viewBox="0 0 400 280">
              <motion.path 
                key={breakType} 
                initial={{ pathLength: 0 }} 
                animate={{ pathLength: 1 }} 
                d={breakType === 'clean' 
                  ? "M 0 200 L 150 140 L 250 80 L 300 95 L 400 40" 
                  : "M 0 200 L 150 140 L 250 70 L 270 170 L 350 190"
                } 
                fill="none" 
                stroke={breakType === 'clean' ? "#0D9488" : "#ef4444"} 
                strokeWidth="5" 
                strokeLinecap="round" 
              />
              
              {/* Candlestick highlights */}
              {breakType === 'failed' && (
                <>
                  <line x1="250" y1="70" x2="250" y2="150" stroke="#ef4444" strokeWidth="2" />
                  <rect x="244" y="100" width="12" fill="#ef4444" height="40" rx="1" />
                  <text x="250" y="55" textAnchor="middle" fill="#ef4444" className="text-[8px] font-black uppercase tracking-widest">Wick Trap</text>
                </>
              )}
            </svg>
          </div>
        </div>
        <MentorInsight 
          text="The close of the candle is the ultimate vote of institutional intent. A spike above range boundaries is meaningless if the candle body closes back inside the range." 
          analogy="A castle gate check. Peeking through the keyhole isn't entering. You must open the gate, step through, and close it behind you (hold support)."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 8: Higher-Timeframe Pair Location Comes First
 */
export const ForexHtfLocationFirst = () => {
  const [zoomLevel, setZoomLevel] = useState<'15m' | '4H'>('15m');

  return (
    <InstitutionalFrame label="Multi-Timeframe Alignment Screen" id="FX-05-LOCATION">
      <div className="w-full max-w-4xl mx-auto space-y-12">
        <div className="flex items-center justify-center gap-4">
          <button 
            onClick={() => setZoomLevel('15m')} 
            className={cn("px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all border shadow-sm", zoomLevel === '15m' ? "bg-rose-600 text-white border-transparent" : "bg-white text-slate-400")}
          >
            Show Local View (15m)
          </button>
          <button 
            onClick={() => setZoomLevel('4H')} 
            className={cn("px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all border shadow-sm", zoomLevel === '4H' ? "bg-[#071B36] text-white border-transparent" : "bg-white text-slate-400")}
          >
            Show Macro Context View (4H)
          </button>
        </div>

        <div className="bg-white border border-slate-200 rounded-[3rem] p-8 min-h-[380px] shadow-sm flex flex-col justify-between">
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-100 pb-4 mb-4">
            <div>
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Perspective Diagnostic</span>
              <h4 className="text-lg font-black text-[#071B36] uppercase italic tracking-tighter">
                {zoomLevel === '15m' ? "15m Local Rally (Looks Bullish)" : "4H Higher Timeframe Location (Major Resistance)"}
              </h4>
            </div>
            <span className={cn(
              "px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest border mt-2 md:mt-0",
              zoomLevel === '15m' ? "bg-rose-50 text-rose-600 border-rose-100" : "bg-teal-50 text-teal-600 border-teal-100"
            )}>
              {zoomLevel === '15m' ? "Verdict: High Danger Trap Area" : "Verdict: Structural Wall Identified"}
            </span>
          </div>

          <div className="flex-1 relative flex items-center justify-center bg-slate-900 rounded-[2rem] p-6 h-[250px] overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:24px_24px]" />
             {zoomLevel === '15m' ? (
              <svg key="15m-view" className="w-full h-full max-w-[400px] overflow-visible" viewBox="0 0 400 230">
                {/* 15m bullish rally line */}
                <motion.path 
                  initial={{ pathLength: 0 }} 
                  animate={{ pathLength: 1 }} 
                  d="M 20 200 L 100 160 L 180 180 L 280 80 L 380 50" 
                  fill="none" 
                  stroke="#10b981" 
                  strokeWidth="5" 
                  strokeLinecap="round" 
                />
                <circle cx="380" cy="50" r="5" fill="#10b981" />
                <text x="380" y="30" textAnchor="middle" fill="#10b981" className="text-[9px] font-black uppercase tracking-widest">RALLY AGGRESSIVE</text>
              </svg>
            ) : (
              <svg key="4h-view" className="w-full h-full max-w-[400px] overflow-visible" viewBox="0 0 500 250">
                {/* 4H Macro ceiling zone */}
                <rect x="0" y="40" width="500" height="50" fill="#BE123C" fillOpacity="0.1" stroke="#BE123C" strokeWidth="2" strokeDasharray="3 3" />
                <text x="250" y="70" textAnchor="middle" fill="#BE123C" className="text-[10px] font-black uppercase tracking-[0.3em]">MAJOR 4H REJECTION CEILING</text>

                {/* Macro path show 15m rally inside the big picture */}
                <motion.path 
                  initial={{ pathLength: 0 }} 
                  animate={{ pathLength: 1 }} 
                  d="M 20 220 L 120 180 L 220 200 L 300 90 L 380 88" 
                  fill="none" 
                  stroke="#475569" 
                  strokeWidth="4" 
                />
                <circle cx="380" cy="88" r="6" fill="#ef4444" />
                <text x="380" y="115" textAnchor="middle" fill="#ef4444" className="text-[9px] font-black uppercase tracking-widest font-mono">15M RALLY ENTERS WALL</text>
              </svg>
            )}
          </div>
        </div>
        <MentorInsight 
          text="A beautiful lower-timeframe setup driving directly into a major higher-timeframe resistance wall is highly likely to fail. Always audit the macro location first." 
          analogy="A high-speed sports car driving into a concrete wall. The car is fast and active, but the wall does not care."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 9: Related-Pair Context Can Support or Complicate Structure
 */
export const ForexRelatedPairContext = () => {
  const [dxyTrend, setDxyTrend] = useState<'support' | 'conflict'>('support');

  return (
    <InstitutionalFrame label="Related-Pair Correlation Diagnostics" id="FX-05-CORR">
      <div className="w-full max-w-4xl mx-auto space-y-12">
        <div className="flex items-center justify-center gap-4">
          <button 
            onClick={() => setDxyTrend('support')} 
            className={cn("px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all border shadow-sm", dxyTrend === 'support' ? "bg-teal-600 text-white border-transparent" : "bg-white text-slate-400")}
          >
            DXY Context Supports Break
          </button>
          <button 
            onClick={() => setDxyTrend('conflict')} 
            className={cn("px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all border shadow-sm", dxyTrend === 'conflict' ? "bg-rose-600 text-white border-transparent" : "bg-white text-slate-400")}
          >
            DXY Context Conflicts Break
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* EUR/USD Panel */}
          <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm flex flex-col justify-between h-[280px]">
            <div className="border-b border-slate-100 pb-2 mb-2">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Base Pair Audit</span>
              <h5 className="text-sm font-black text-[#071B36] uppercase italic">EUR/USD Break</h5>
            </div>
            
            <div className="flex-1 relative flex items-center justify-center bg-slate-900 rounded-xl p-4 overflow-hidden">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 200 150">
                {/* ceiling */}
                <line x1="0" y1="50" x2="200" y2="50" stroke="white" strokeWidth="1" strokeDasharray="3 3" className="opacity-20" />
                <path d="M 10 120 Q 50 100 80 120 L 140 40 L 180 30" fill="none" stroke="#0D9488" strokeWidth="3" />
                <circle cx="140" cy="40" r="3" fill="#0D9488" />
              </svg>
            </div>
            
            <span className="text-[8px] font-black text-teal-600 uppercase tracking-widest text-center mt-2">Active Upward Break</span>
          </div>

          {/* DXY (US Dollar Index) Panel */}
          <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm flex flex-col justify-between h-[280px]">
            <div className="border-b border-slate-100 pb-2 mb-2">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">DXY Context Panel</span>
              <h5 className="text-sm font-black text-[#071B36] uppercase italic">USD Index (DXY)</h5>
            </div>
            
            <div className="flex-1 relative flex items-center justify-center bg-slate-900 rounded-xl p-4 overflow-hidden">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 200 150">
                {dxyTrend === 'support' ? (
                  <motion.path 
                    key="dxy-down"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    d="M 10 30 L 80 40 L 140 110 L 180 130" 
                    fill="none" 
                    stroke="#BE123C" 
                    strokeWidth="3" 
                  />
                ) : (
                  <motion.path 
                    key="dxy-up"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    d="M 10 120 L 80 110 L 140 50 L 180 40" 
                    fill="none" 
                    stroke="#0D9488" 
                    strokeWidth="3" 
                  />
                )}
              </svg>
            </div>
            
            <span className={cn(
              "text-[8px] font-black uppercase tracking-widest text-center mt-2",
              dxyTrend === 'support' ? "text-rose-600" : "text-teal-600"
            )}>
              {dxyTrend === 'support' ? "Weakening (Supports EUR/USD)" : "Strengthening (Conflicts EUR/USD)"}
            </span>
          </div>

          {/* Stacking Verdict */}
          <div className="bg-[#071B36] border border-slate-800 rounded-[2rem] p-6 shadow-xl flex flex-col justify-between text-white h-[280px]">
            <div className="border-b border-white/10 pb-2 mb-2">
              <span className="text-[8px] font-black text-teal-400 uppercase tracking-widest">STACK EVIDENCE AUDIT</span>
              <h5 className="text-sm font-black uppercase italic text-white">Final Correlation</h5>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Evidence Quality</span>
                <span className={cn(
                  "px-2 py-1 rounded text-[8px] font-black uppercase tracking-widest",
                  dxyTrend === 'support' ? "bg-teal-500/20 text-teal-300 border border-teal-500/30" : "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                )}>
                  {dxyTrend === 'support' ? "CLEAN & ALIGNED" : "MIXED & CONFLICTED"}
                </span>
              </div>
              <p className="text-[10px] text-slate-300 font-bold leading-normal">
                {dxyTrend === 'support' 
                  ? "EUR/USD breaks up while DXY sells off. Clear Dollar weakness confirms structural break pressure. High weight." 
                  : "EUR/USD breaks up, but DXY is also climbing. EUR/USD move is isolated or divergent. Watch for traps."
                }
              </p>
            </div>
            
            <div className="text-[8px] font-mono text-slate-400">
              Correlative Sync: Active
            </div>
          </div>
        </div>
        <MentorInsight 
          text="Correlation is a support layer, not a mechanical system. If EUR/USD breaks out but DXY is perfectly flat and other USD pairs are quiet, the breakout has less supportive evidence." 
          analogy="A choir. When one singer hits a high note (EUR/USD) but the rest of the choir remains silent (DXY/GBP/USD), the note feels thin and unconvincing."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 10: Practice Drill: Clean Break, Failed Break, or Mixed?
 */
export const ForexStructureBreakDrill = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const options = [
    { id: "A", label: "Confirmed Breakout", desc: "Buy GBP/USD breakout since price moved above London High.", correct: false, feedback: "Wrong: The price returned back inside the range immediately and HTF resistance sits directly above. High risk." },
    { id: "B", label: "Definite Bearish", desc: "Sell GBP/USD since price immediately returned inside the range.", correct: false, feedback: "Wrong: Returning inside weakens the breakout, but it does not automatically establish clean downward structure." },
    { id: "C", label: "Mixed / Weak Evidence", desc: "No clean break. Close quality failed, hold failed, and HTF wall restricts upside.", correct: true, feedback: "Correct! The breakout failed to hold above the area, and higher-timeframe resistance restricts clear upside. Disciplined reading is mixed/weak. Stay flat." }
  ];

  return (
    <InstitutionalFrame label="Interactive Practice Scenario" id="FX-05-DRILL">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        <div className="bg-[#071B36] rounded-[3rem] p-8 border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-center min-h-[350px]">
          <div className="absolute top-[25%] left-0 w-full h-8 bg-rose-500/10 border-y border-dashed border-rose-500/30 flex items-center justify-end pr-8">
            <span className="text-[8px] font-black text-rose-400 uppercase tracking-widest">HTF 4H Resistance Ceiling</span>
          </div>
          
          <div className="relative h-44 flex items-center justify-center">
            <svg className="w-full h-full max-w-[450px] overflow-visible" viewBox="0 0 380 150">
              {/* London Range Limits */}
              <rect x="50" y="90" width="150" height="40" fill="white" fillOpacity="0.02" stroke="#64748b" strokeWidth="1" strokeDasharray="3 3" />
              
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                d="M 0 110 L 50 100 L 100 120 L 150 95 L 200 115 C 220 80, 240 50, 250 55 L 270 120 L 350 110" 
                fill="none" 
                stroke="#ef4444" 
                strokeWidth="4" 
                strokeLinecap="round"
              />
              <circle cx="250" cy="55" r="5" fill="#ef4444" />
              <text x="250" y="38" textAnchor="middle" fill="#ef4444" className="text-[8px] font-black uppercase tracking-widest">OVERSHOOT & RETURN INSIDE</text>
            </svg>
          </div>

          <div className="text-center text-slate-300 max-w-lg mx-auto">
            <span className="text-[10px] font-black text-teal-400 uppercase tracking-widest block mb-1">Interactive Diagnostic</span>
            <p className="text-xs font-bold leading-relaxed">
              GBP/USD spikes above the tight London session range high, but instantly returns inside. The 4H higher-timeframe resistance sits directly above. Choose the disciplined structure reading:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelectedOption(opt.id)}
              className={cn(
                "p-6 rounded-[2rem] text-left border-2 transition-all flex flex-col justify-between h-[180px] shadow-sm",
                selectedOption === opt.id 
                  ? opt.correct 
                    ? "bg-teal-50 border-teal-500/60 shadow-teal-500/5 text-[#071B36]"
                    : "bg-rose-50 border-rose-500/60 shadow-rose-500/5 text-[#071B36]"
                  : "bg-white border-slate-100 hover:border-slate-200 text-slate-600"
              )}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className={cn(
                    "px-2.5 py-0.5 rounded text-[8px] font-black uppercase tracking-widest",
                    selectedOption === opt.id 
                      ? opt.correct ? "bg-teal-500 text-white" : "bg-rose-500 text-white"
                      : "bg-[#071B36] text-white"
                  )}>
                    Option {opt.id}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-wider">{opt.label}</span>
                </div>
                <p className="text-[10.5px] font-bold leading-normal">{opt.desc}</p>
              </div>

              {selectedOption === opt.id && (
                <p className={cn(
                  "text-[9px] font-black uppercase mt-4 border-t pt-2",
                  opt.correct ? "text-teal-600 border-teal-500/20" : "text-rose-600 border-rose-500/20"
                )}>
                  {opt.feedback}
                </p>
              )}
            </button>
          ))}
        </div>
        <MentorInsight 
          text="Never trade the breakout candle blindly. Audit the close quality, wait for the hold test, and check the higher-timeframe boundary locations. Professional trading is an audit." 
          analogy="A safety inspector. You don't sign off on a bridge just because it looks pretty; you pressure test the load-bearing columns."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Card 11: Forex Debrief: Reading Pair Structure Properly
 */
export const ForexStructureRoadwayDebrief = () => {
  return (
    <InstitutionalFrame label="Roadway Competency Verified" id="FX-05-DEBRIEF" status="COMPLETE">
      <div className="w-full max-w-4xl mx-auto space-y-12 flex flex-col items-center">
        <div className="relative group">
          <div className="w-24 h-24 rounded-[2.5rem] bg-teal-500 flex items-center justify-center text-white shadow-2xl shadow-teal-500/20 group-hover:scale-110 transition-transform duration-500">
            <CheckCircle size={48} strokeWidth={2.5} />
          </div>
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -inset-4 border-2 border-dashed border-teal-200 rounded-full opacity-30" />
        </div>

        <div className="text-center space-y-2">
          <h3 className="text-4xl font-black text-[#071B36] uppercase tracking-tighter italic">Forex Structure Verified</h3>
          <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.4em]">RELATIVE PRESSURE MASTERED</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
          {[
            { label: "Pair Behavior scale", desc: "Understanding exchange rate tug-of-war", icon: <Scale size={16} /> },
            { label: "Session reference", desc: "Using ranges as structural maps", icon: <Clock size={16} /> },
            { label: "Break Audit logic", desc: "Checking close, hold, and context", icon: <Zap size={16} /> }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow h-[140px]">
              <div className="w-9 h-9 rounded-2xl bg-[#071B36] text-white flex items-center justify-center shadow-lg">{item.icon}</div>
              <div className="space-y-1">
                <span className="text-[10px] font-black text-[#071B36] uppercase tracking-widest block">{item.label}</span>
                <span className="text-[9px] text-slate-400 font-bold uppercase leading-tight block">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>

        <MentorInsight 
          text="You no longer view Forex as a series of random candlesticks or breakout buttons. You see the relationship. You stack DXY, HTF locations, and session structure to form clean evidence." 
          analogy="A professional pilot. You do not fly by looking out the window at one cloud; you audit the dashboard, radar, wind patterns, and map before landing."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Standard Placeholder Visual for Fallbacks
 */
export const ForexPlaceholderVisual = () => (
  <div className="p-8 text-center text-slate-500">
    Placeholder for Module 0.5 Forex.
  </div>
);
