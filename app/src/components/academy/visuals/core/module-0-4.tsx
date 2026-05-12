"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  Compass,
  Activity,
  Layers,
  AlertTriangle,
  CheckCircle,
  Crosshair,
  Search,
  Maximize2,
  Workflow,
  Scale,
  Radar,
  Box,
  Eye,
  Zap,
  Cpu,
  BarChart3,
  ArrowRight,
  TrendingUp,
  Fingerprint,
  Shuffle,
  Wind,
  Target,
  AlertOctagon,
  ChevronRight,
  ShieldAlert,
  ShieldCheck,
  Database,
  Globe,
  Sun,
  Moon,
  Coffee,
  Clock,
  Map,
  MapPin,
  ArrowRightCircle,
  ClipboardList,
  Timer,
  RotateCcw,
  Shield,
  Check,
  ClipboardCheck
} from "lucide-react";

/**
 * LURNAVA INSTITUTIONAL DESIGN TOKENS
 * Focus: High-density information, static hierarchy, and premium texture.
 */
const UI = {
  navy: "#071B36",
  teal: "#0D9488",
  tealSoft: "#F0FDFA",
  slate: "#475569",
  border: "#E2E8F0",
  bg: "#F8FBFC",
  rose: "#BE123C", // High contrast Red
  sky: "#0284C7",  // High contrast Blue
  gold: "#B45309",
};

/**
 * Institutional Frame Component
 * High-density header with technical metadata and audit status.
 */
const InstitutionalFrame = ({ 
  children, 
  label, 
  status = "AUDIT ACTIVE",
  id = "LN-0.4-DIAG"
}: { 
  children: React.ReactNode; 
  label: string; 
  status?: string;
  id?: string;
}) => (
  <div className="w-full h-full min-h-[500px] bg-[#F8FBFC] border border-[#E2E8F0] rounded-[1.5rem] p-8 flex flex-col relative overflow-hidden shadow-sm">
    {/* Background Texture */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#071B36_1.5px,transparent_1.5px)] bg-[length:32px_32px]" />
    
    {/* Institutional Header */}
    <div className="flex items-center justify-between mb-8 relative z-10 border-b border-slate-200/50 pb-4">
      <div className="flex flex-col">
        <div className="flex items-center gap-2 mb-1">
          <Database size={10} className="text-teal-600" />
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Institutional Data Stream</span>
        </div>
        <h4 className="text-base font-black text-[#071B36] uppercase tracking-tighter italic">{label}</h4>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-end">
          <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">System ID</span>
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

    {/* Technical Status Footer */}
    <div className="mt-8 pt-4 border-t border-slate-200/50 flex items-center justify-between">
       <div className="flex gap-4">
          <div className="flex items-center gap-1.5">
            <div className="w-1 h-1 bg-teal-500 rounded-full" />
            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Logic Verified</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1 h-1 bg-teal-500 rounded-full" />
            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Multi-Feed Active</span>
          </div>
       </div>
       <div className="flex items-center gap-1.5">
          <Fingerprint size={10} className="text-slate-300" />
          <span className="text-[8px] font-mono text-slate-300 uppercase">LN-AUTH-PROD-SYNC</span>
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
 * Forex Adaptation: 2. The Forex Trading Day Has Rhythms
 * Visualizing the ebb and flow of global participation.
 */
export const ForexTradingRhythmBoard = () => {
  const rhythmData = [
    { name: "Asia", icon: <Moon size={20} />, time: "00:00 - 08:00", quality: "Quiet / Ranging", color: "text-slate-400", bg: "bg-slate-50", border: "border-slate-200", wave: 10 },
    { name: "London", icon: <Coffee size={20} />, time: "08:00 - 16:00", quality: "Expansion / Active", color: "text-teal-600", bg: "bg-teal-50", border: "border-teal-200", wave: 60 },
    { name: "New York", icon: <Sun size={20} />, time: "13:00 - 21:00", quality: "Reaction / Volatile", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200", wave: 85 },
    { name: "Late NY", icon: <Clock size={20} />, time: "21:00 - 00:00", quality: "Thin / Closing", color: "text-slate-300", bg: "bg-slate-50", border: "border-slate-100", wave: 5 },
  ];

  return (
    <InstitutionalFrame label="Session Rhythm Diagnostic" id="FX-RHYTHM-0.4">
      <div className="w-full max-w-4xl flex flex-col gap-12">
        <div className="grid grid-cols-4 gap-6 relative">
          {/* Connecting Rhythm Line */}
          <div className="absolute top-[2.2rem] left-[10%] right-[10%] h-[2px] bg-slate-100 -z-10" />

          {rhythmData.map((session, i) => (
            <div key={session.name} className="flex flex-col items-center gap-6 group">
               {/* Wave Icon */}
               <div className={cn(
                 "w-16 h-16 rounded-2xl flex items-center justify-center border-2 transition-all group-hover:scale-110 shadow-sm",
                 session.bg, session.border, session.color
               )}>
                  {session.icon}
               </div>

               {/* Meta Info */}
               <div className="flex flex-col items-center text-center">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#071B36]">{session.name}</span>
                  <span className="text-[8px] font-mono text-slate-400 mt-1">{session.time}</span>
               </div>

               {/* Activity Bar container */}
               <div className="w-full flex items-end justify-center h-32 bg-slate-50/50 rounded-2xl p-4 border border-dashed border-slate-200">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${session.wave * 1.5}px` }}
                    className={cn("w-6 rounded-t-lg transition-all shadow-sm", session.wave > 50 ? "bg-teal-500" : "bg-slate-200")}
                  />
               </div>

               {/* Quality Label */}
               <div className={cn("px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-tight text-center w-full", session.bg, session.color)}>
                  {session.quality}
               </div>
            </div>
          ))}
        </div>

        <MentorInsight 
          text="Forex doesn't move because the clock ticked; it moves because a human (or a bot) decided to pull the trigger. Knowing 'who' is at their desk is half the battle."
          analogy="Think of the market as a restaurant. Breakfast (Asia) is quiet. Lunch (London) is a rush. Dinner (New York) is the busiest time with the most drama. Don't expect a 5-course meal at 3 AM."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 1. Time Compression Board (The Aggregation Engine)
 * Visualizing the "Compression" of noise into structural records.
 */
export const TimeCompressionBoard = () => {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setPulse(p => (p + 1) % 60), 200);
    return () => clearInterval(timer);
  }, []);

  return (
    <InstitutionalFrame label="The Aggregation Engine" id="LN-COMP-0.1">
      <div className="w-full max-w-3xl flex flex-col gap-12">
        <div className="grid grid-cols-[1fr_auto_1fr] gap-8 items-center">
          {/* Input: Raw Market Noise (1m) */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between px-2">
              <span className="text-[10px] font-black text-[#071B36] uppercase tracking-widest">Raw Data (1m)</span>
              <span className="text-[9px] font-bold text-slate-400 uppercase">60 Packets / Hour</span>
            </div>
            <div className="p-6 bg-white border border-slate-200 rounded-[2rem] shadow-sm relative overflow-hidden">
               <div className="absolute inset-0 opacity-[0.02] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#071B36_2px,#071B36_4px)]" />
               <div className="grid grid-cols-10 gap-2 relative z-10">
                  {Array.from({ length: 60 }).map((_, i) => (
                    <motion.div 
                      key={i} 
                      className={cn(
                        "w-full aspect-[1/2] rounded-full transition-colors duration-500",
                        i === pulse ? "bg-teal-500 shadow-[0_0_10px_rgba(13,148,136,0.5)]" : i < pulse ? "bg-teal-200/50" : "bg-slate-100"
                      )}
                    />
                  ))}
               </div>
            </div>
          </div>

          {/* Aggregator Node */}
          <div className="flex flex-col items-center gap-4">
             <div className="w-px h-16 bg-gradient-to-b from-transparent via-slate-300 to-transparent" />
             <div className="w-16 h-16 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center relative shadow-xl">
                <motion.div 
                   animate={{ rotate: 360 }}
                   transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-0 border-t-2 border-teal-500 rounded-full"
                />
                <Cpu size={24} className="text-slate-400" />
             </div>
             <div className="w-px h-16 bg-gradient-to-b from-transparent via-slate-300 to-transparent" />
          </div>

          {/* Output: Compressed Record (1H) */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between px-2">
              <span className="text-[10px] font-black text-teal-600 uppercase tracking-widest">Compressed Record (1H)</span>
              <div className="px-2 py-0.5 bg-teal-50 border border-teal-100 rounded text-[8px] font-black text-teal-600">STABLE</div>
            </div>
            <div className="p-10 bg-white border-2 border-teal-500 rounded-[2.5rem] shadow-2xl shadow-teal-500/10 flex flex-col items-center relative overflow-hidden">
               <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,black_1px,transparent_1px)] bg-[length:12px_12px]" />
               <div className="flex flex-col items-center relative z-10">
                  <div className="w-1 h-12 bg-teal-500/20" />
                  <motion.div 
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    className="w-14 h-24 bg-teal-500 rounded-lg border border-teal-600 shadow-lg flex items-center justify-center"
                  >
                    <div className="w-8 h-1.5 bg-white/30 rounded-full" />
                  </motion.div>
                  <div className="w-1 h-16 bg-teal-500/20" />
               </div>
            </div>
          </div>
        </div>

        <MentorInsight 
          text="A 1-hour candle isn't more important because it's bigger; it's more important because it contains 60x more information than a 1-minute candle. It hides the 'noise' and shows the real commitment."
          analogy="Think of it like a highlight reel vs. every single camera angle. The highlight reel tells you the actual result of the game."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 2. Narrative Layers (Viewing Windows)
 * High-fidelity comparison of the SAME event across windows.
 */
export const TimeframeComparisonWindows = () => {
  return (
    <InstitutionalFrame label="Multi-Window Narrative Mapping" id="LN-VIEW-0.2">
      <div className="w-full max-w-4xl flex flex-col gap-8">
        <div className="grid grid-cols-3 gap-6">
           {[
             { tf: "15m", label: "DETAIL", desc: "A frantic push", color: "text-sky-600", bg: "bg-sky-50", border: "border-sky-200", icon: <Search size={12}/> },
             { tf: "1H", label: "STRUCTURE", desc: "A local swing", color: "text-teal-600", bg: "bg-teal-50", border: "border-teal-200", icon: <Layers size={12}/> },
             { tf: "4H", label: "NARRATIVE", desc: "Inside a larger range", color: "text-[#071B36]", bg: "bg-slate-100", border: "border-slate-300", icon: <Compass size={12}/> }
           ].map((window) => (
             <div key={window.tf} className="flex flex-col gap-4">
                <div className="flex items-center justify-between px-1">
                   <div className="flex flex-col">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{window.label}</span>
                      <span className={cn("text-xs font-black uppercase", window.color)}>{window.tf} View</span>
                   </div>
                   <div className={cn("p-1.5 rounded-lg border", window.bg, window.border)}>
                      {window.icon}
                   </div>
                </div>
                
                <div className={cn("aspect-[4/5] bg-white border-2 rounded-[2rem] relative overflow-hidden flex flex-col items-center justify-center p-6 shadow-sm", window.border)}>
                   <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(0,0,0,0.1)_1.5px,transparent_1.5px)] bg-[length:100%_12px]" />
                   
                   {/* The "Event" - same shared price reality */}
                   <div className="w-full flex flex-col items-center relative">
                      <div className="w-full h-px bg-slate-100 absolute top-1/2 -translate-y-1/2 opacity-50" />
                      
                      {/* Highlighted Zone */}
                      <div className="w-full h-16 bg-teal-50/50 border-y border-teal-100/30 flex items-center justify-center relative">
                         <div className="absolute top-1 right-2">
                           <span className="text-[7px] font-black text-teal-300 uppercase tracking-tighter">Reference Level</span>
                         </div>
                      </div>

                      {/* Candle representation - scaled based on TF */}
                      <div className="flex flex-col items-center mt-2 relative z-10">
                         <div className={cn("w-[2px] bg-slate-300", window.tf === "15m" ? "h-6" : window.tf === "1H" ? "h-4" : "h-3")} />
                         <div className={cn(
                           "border shadow-sm", 
                           window.tf === "15m" ? "w-4 h-12 bg-sky-500 border-sky-600" : 
                           window.tf === "1H" ? "w-8 h-10 bg-teal-500 border-teal-600" : 
                           "w-14 h-8 bg-slate-800 border-slate-900"
                         )} />
                         <div className={cn("w-[2px] bg-slate-300", window.tf === "15m" ? "h-8" : window.tf === "1H" ? "h-6" : "h-10")} />
                      </div>
                   </div>
                </div>
                <div className="text-center">
                   <span className="text-[9px] font-bold text-slate-400 uppercase italic">“{window.desc}”</span>
                </div>
             </div>
           ))}
        </div>
        
        <MentorInsight 
          text="You must look through the big window (HTF) to know which way the street goes, and the small window (LTF) only to see where to step."
          analogy="The Big Window shows the forest; the Small Window shows the individual trees. Don't get lost in the trees."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 3. The Weight Hierarchy (Evidence Stack)
 * Visualizing structural gravity across time layers.
 */
export const TimeframeWeightLadder = () => {
  return (
    <InstitutionalFrame label="Hierarchy of Structural Gravity" id="LN-WEIGHT-0.3">
      <div className="w-full max-w-3xl flex flex-col gap-10">
        <div className="flex flex-col gap-4">
           {[
             { tf: "DAILY / 4H", role: "NARRATIVE", weight: 100, desc: "Institutional Signature", color: "bg-slate-900", icon: <Fingerprint size={12}/> },
             { tf: "1H", role: "STRUCTURE", weight: 70, desc: "Working Context", color: "bg-teal-600", icon: <Layers size={12}/> },
             { tf: "15m", role: "TACTICAL", weight: 45, desc: "Execution Detail", color: "bg-sky-600", icon: <Search size={12}/> },
             { tf: "1m", role: "NOISE", weight: 20, desc: "Short-term Detail", color: "bg-slate-300", icon: <Activity size={12}/> }
           ].map((layer) => (
             <div key={layer.tf} className="flex items-center gap-6 group">
                <div className="w-24 text-right">
                   <span className="text-[11px] font-black text-[#071B36] tracking-tighter">{layer.tf}</span>
                </div>
                <div className="flex-1 h-12 bg-white border border-slate-200 rounded-xl relative overflow-hidden group-hover:border-teal-500 transition-colors">
                   <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${layer.weight}%` }}
                      className={cn("h-full opacity-90 relative flex items-center justify-end px-4", layer.color)}
                   >
                      <span className="text-[8px] font-black text-white/50 uppercase tracking-widest">Weight: {layer.weight}%</span>
                   </motion.div>
                </div>
                <div className="w-48 flex items-center gap-3">
                   <div className="text-slate-400">{layer.icon}</div>
                   <div className="flex flex-col">
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{layer.role}</span>
                      <span className="text-[10px] font-bold text-[#071B36] leading-none uppercase">{layer.desc}</span>
                   </div>
                </div>
             </div>
           ))}
        </div>
        
        <div className="w-full p-6 bg-teal-50 border border-teal-100 rounded-3xl flex items-center justify-between">
           <div className="flex items-center gap-4">
              <Scale className="text-teal-600" size={24} />
              <div className="flex flex-col">
                 <span className="text-[11px] font-black text-[#071B36] uppercase tracking-tight">Gravity Principle</span>
                 <span className="text-[9px] font-bold text-slate-500 uppercase">Higher Timeframes define the environment. Lower timeframes show the reaction.</span>
              </div>
           </div>
           <div className="px-4 py-2 bg-[#071B36] rounded-full">
              <span className="text-[8px] font-black text-white uppercase tracking-widest">Stack Downward</span>
           </div>
        </div>
        <MentorInsight 
          text="Higher timeframes represent the commitment of multi-billion dollar banks. Lower timeframes represent the noise of retail panic. We always follow the billions."
          analogy="Gravity. You can throw a ball up (LTF), but the Earth's gravity (HTF) will eventually bring it back down."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 4. Signature vs. Noise (Participant Roles)
 * High-contrast comparison of Institutional vs Retail data.
 */
export const HtfLtfRoles = () => {
  return (
    <InstitutionalFrame label="Signature vs. Noise Diagnostic" id="LN-ROLES-0.4">
      <div className="w-full max-w-4xl grid grid-cols-2 gap-10">
         {/* Institutional Signature */}
         <div className="flex flex-col gap-6">
            <div className="p-8 bg-[#071B36] border-[6px] border-slate-800 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-6 opacity-10">
                  <Fingerprint size={120} />
               </div>
               <div className="flex items-center gap-5 mb-8 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-teal-500 flex items-center justify-center shadow-lg shadow-teal-500/20">
                     <TrendingUp size={30} strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col">
                     <span className="text-[10px] font-black uppercase text-teal-400 tracking-widest leading-none mb-1">High-Weight Layer</span>
                     <h3 className="text-xl font-black uppercase italic tracking-tighter">The Signature</h3>
                  </div>
               </div>
               <div className="space-y-3 relative z-10">
                  {[
                    "Institutional Commitment",
                    "Major Flow Direction",
                    "Strategic Support/Resistance",
                    "Stable Market Environment"
                  ].map(item => (
                    <div key={item} className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl">
                       <div className="w-2 h-2 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.8)]" />
                       <span className="text-[11px] font-black uppercase tracking-widest opacity-80">{item}</span>
                    </div>
                  ))}
               </div>
            </div>
            <div className="text-center px-4">
               <p className="text-[10px] font-bold text-slate-400 uppercase italic">“What the Big Money is doing.”</p>
            </div>
         </div>

         {/* Retail Noise */}
         <div className="flex flex-col gap-6">
            <div className="p-8 bg-white border-2 border-slate-200 rounded-[3rem] shadow-sm relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-6 opacity-[0.03]">
                  <Activity size={120} />
               </div>
               <div className="flex items-center gap-5 mb-8 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-[#071B36]">
                     <Zap size={30} strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col">
                     <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest leading-none mb-1">Low-Weight Layer</span>
                     <h3 className="text-xl font-black uppercase italic tracking-tighter text-[#071B36]">The Noise</h3>
                  </div>
               </div>
               <div className="space-y-3 relative z-10">
                  {[
                    "Algorithmic Spikes",
                    "Emotional Reactions",
                    "Temporary Liquidity Sweeps",
                    "Unstable Local Moves"
                  ].map(item => (
                    <div key={item} className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                       <div className="w-2 h-2 rounded-full bg-slate-300" />
                       <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">{item}</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
      <MentorInsight 
          text="Professional reading is about ignoring the wiggles. If the Higher Timeframe isn't moving, the Lower Timeframe move is likely a trap for impatient traders."
          analogy="Whales leave massive footprints. Minnows just splash the water. Don't chase the splash."
        />
    </InstitutionalFrame>
  );
};

/**
 * 5. Timeframe Conflict Resolver (Mixed Evidence)
 * Diagnostic panel for resolving disagreeing layers.
 */
export const TimeframeConflictBoard = () => {
  return (
    <InstitutionalFrame label="Conflict Diagnostic Resolver" id="LN-CONF-0.5">
      <div className="w-full max-w-md flex flex-col gap-6">
         <div className="flex flex-col gap-2">
            {[
              { tf: "4H", status: "BEARISH WALL", weight: "NARRATIVE", color: "text-rose-600", border: "border-rose-100", bg: "bg-rose-50" },
              { tf: "1H", status: "NEUTRAL / RANGING", weight: "STRUCTURE", color: "text-slate-400", border: "border-slate-100", bg: "bg-slate-50" },
              { tf: "5m", status: "BULLISH PUSH", weight: "DETAIL", color: "text-teal-600", border: "border-teal-100", bg: "bg-teal-50" }
            ].map(layer => (
              <div key={layer.tf} className={cn("p-6 border-2 rounded-[2rem] flex items-center justify-between shadow-sm", layer.bg, layer.border)}>
                 <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center font-black text-sm text-[#071B36] shadow-sm">
                       {layer.tf}
                    </div>
                    <div className="flex flex-col">
                       <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{layer.weight} LAYER</span>
                       <span className={cn("text-xs font-black uppercase", layer.color)}>{layer.status}</span>
                    </div>
                 </div>
                 <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className={cn("w-2 h-2 rounded-full", i === 0 ? "bg-slate-300" : "bg-slate-100")} />
                    ))}
                 </div>
              </div>
            ))}
         </div>

          <div className="p-10 bg-[#071B36] border-[4px] border-slate-800 rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col items-center gap-6">
            <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(white_1.5px,transparent_1.5px)] bg-[length:24px_24px]" />
            
            <div className="w-16 h-16 rounded-[1.5rem] bg-rose-500/20 border border-rose-500 flex items-center justify-center text-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.3)]">
               <ShieldAlert size={32} />
            </div>

            <div className="text-center relative z-10">
               <span className="text-[10px] font-black text-teal-400 uppercase tracking-[0.5em] mb-2 block">Diagnostic Output</span>
               <h4 className="text-2xl font-black text-white uppercase italic tracking-tighter leading-tight">Mixed Reading</h4>
               <p className="text-[11px] font-bold text-slate-400 uppercase mt-4 max-w-[240px] mx-auto leading-relaxed">
                 High-weight Narrative layer is in conflict with Detail layer. <span className="text-teal-400">Professional choice: Stay Unclear.</span>
               </p>
            </div>
          </div>
        </div>
        <MentorInsight 
          text="When layers disagree, the market is in conflict. The highest skill in trading is not picking a side, but knowing when to do nothing and walk away."
          analogy="A red light and a green light at the same time. The only safe move is to stop and wait for clarity."
        />
    </InstitutionalFrame>
  );
};

/**
 * 6. Evidence Stack Workflow (Outside In)
 * The sequence of the institutional audit.
 */
export const TopDownReadingWorkflow = () => {
  return (
    <InstitutionalFrame label="Outside-In Evidence Stack" id="LN-STACK-0.6">
      <div className="w-full max-w-sm flex flex-col gap-4">
         {[
           { step: "01", label: "NARRATIVE AUDIT", htf: "4H / Daily", desc: "Define the environment", icon: <Compass size={18}/> },
           { step: "02", label: "STRUCTURAL AUDIT", htf: "1H / 15m", desc: "Define the skeleton", icon: <Layers size={18}/> },
           { step: "03", label: "DETAIL AUDIT", htf: "5m / 1m", desc: "Identify the reaction", icon: <Search size={18}/> },
           { step: "04", label: "FINAL STACK", htf: "CONSENSUS", desc: "Confirm alignment", icon: <CheckCircle size={18}/> }
         ].map((item, i) => (
           <React.Fragment key={item.step}>
             <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-[#071B36] flex items-center justify-center text-white shadow-xl relative overflow-hidden">
                   <div className="absolute inset-0 opacity-10 bg-teal-500" />
                   <span className="text-base font-black italic">{item.step}</span>
                </div>
                <div className="flex-1 p-5 bg-white border border-slate-200 rounded-[1.5rem] flex items-center justify-between group-hover:border-teal-500 transition-all shadow-sm">
                   <div className="flex flex-col">
                      <span className="text-[10px] font-black text-[#071B36] uppercase tracking-widest">{item.label}</span>
                      <span className="text-[9px] font-bold text-slate-400 uppercase">{item.desc}</span>
                   </div>
                   <div className="text-slate-300 group-hover:text-teal-500 transition-colors">
                      {item.icon}
                   </div>
                </div>
             </div>
             {i < 3 && (
               <div className="flex justify-center h-4 items-center">
                  <div className="w-px h-full bg-slate-200" />
               </div>
             )}
           </React.Fragment>
         ))}
        <MentorInsight 
          text="Always verify the 'Boss' (HTF) before looking for the 'Employee' (LTF). If the boss says the direction is down, a small upward move from the employee doesn't change the plan."
          analogy="Building a house. You don't pick the paint colors (LTF) before you've laid the solid foundation (HTF)."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * 7. Multi-Timeframe Practice Scenario
 * High-fidelity audit test.
 */
export const TimeframeDecisionScenario = () => {
  return (
    <InstitutionalFrame label="Evidence Audit Test Case" id="LN-CASE-0.7">
      <div className="w-full max-w-4xl flex flex-col gap-8">
         <div className="grid grid-cols-3 gap-6">
            {[
              { tf: "4H", label: "NARRATIVE", state: "BEARISH WALL", val: "HEAVY WEIGHT", color: "text-rose-600", bg: "bg-rose-50", border: "border-rose-100" },
              { tf: "1H", label: "STRUCTURE", state: "RANGING / FLAT", val: "MEDIUM WEIGHT", color: "text-slate-400", bg: "bg-slate-50", border: "border-slate-100" },
              { tf: "5m", label: "DETAIL", state: "BULLISH PUSH", val: "LIGHT WEIGHT", color: "text-teal-600", bg: "bg-teal-50", border: "border-teal-100" }
            ].map(item => (
              <div key={item.tf} className={cn("p-8 rounded-[2.5rem] border-2 shadow-sm flex flex-col gap-6 relative overflow-hidden", item.bg, item.border)}>
                 <div className="flex items-center justify-between">
                    <div className="px-4 py-1.5 bg-white border border-slate-200 rounded-xl shadow-sm">
                       <span className="text-sm font-black text-[#071B36]">{item.tf}</span>
                    </div>
                    <div className={cn("px-3 py-1 rounded-lg text-[8px] font-black text-white uppercase", item.tf === "4H" ? "bg-rose-600" : item.tf === "1H" ? "bg-slate-400" : "bg-teal-600")}>
                       {item.tf === "4H" ? "SIGNATURE" : "DETAIL"}
                    </div>
                 </div>
                 <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label} LAYER</span>
                    <h5 className={cn("text-lg font-black uppercase tracking-tighter leading-none", item.color)}>{item.state}</h5>
                 </div>
                 <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{item.val}</span>
                    <div className="flex gap-0.5">
                       {[...Array(3)].map((_, i) => (
                         <div key={i} className={cn(
                           "w-1.5 h-1.5 rounded-full", 
                           i < (item.tf === "4H" ? 3 : item.tf === "1H" ? 2 : 1) 
                             ? (item.tf === "4H" ? "bg-rose-600" : item.tf === "1H" ? "bg-slate-400" : "bg-teal-600") 
                             : "bg-slate-200"
                         )} />
                       ))}
                    </div>
                 </div>
              </div>
            ))}
         </div>

         <div className="bg-[#071B36] rounded-[3rem] p-10 flex items-center justify-between shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(white_1.5px,transparent_1.5px)] bg-[length:16px_16px]" />
            <div className="flex items-center gap-8 relative z-10">
               <div className="w-16 h-16 rounded-[1.5rem] bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400 shadow-[0_0_30px_rgba(20,184,166,0.3)]">
                  <Workflow size={32} />
               </div>
               <div className="flex flex-col">
                  <span className="text-[11px] font-black text-teal-400 uppercase tracking-[0.4em] mb-2">Audit Scenario Question</span>
                  <h4 className="text-xl font-black text-white uppercase italic tracking-tight">What is the disciplined market reading?</h4>
               </div>
            </div>
         </div>
        </div>
        <MentorInsight 
          text="Success is not about being 'right' about every move. It is about being clinical. If the evidence stack is mixed, the only objective reading is 'Unclear'."
          analogy="A judge doesn't guess when evidence is weak. They wait for enough facts to form a final verdict."
        />
    </InstitutionalFrame>
  );
};

/**
 * 8. Module Debrief: The Hierarchy of Evidence
 */
export const TimeframeDebriefBoard = () => {
  return (
    <InstitutionalFrame label="Module Competency Verified" id="LN-DEBRIEF-0.8" status="COMPLETE">
      <div className="flex flex-col items-center gap-10 w-full max-w-3xl">
        <div className="relative">
           <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-24 h-24 rounded-[2.5rem] bg-teal-50 text-teal-600 flex items-center justify-center shadow-inner"
           >
              <CheckCircle size={48} strokeWidth={2.5} />
           </motion.div>
           <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border-2 border-dashed border-teal-200 rounded-full opacity-50"
           />
        </div>

        <div className="flex flex-col gap-2 text-center">
           <span className="text-[10px] font-black text-teal-600 uppercase tracking-[0.6em] mb-2">Hierarchy Mastered</span>
           <h2 className="text-4xl font-black text-[#071B36] tracking-tighter uppercase italic leading-none">Evidence Auditor</h2>
           <div className="h-px w-32 bg-slate-200 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 gap-4 w-full">
           {[
             { label: "Signature Audit", icon: <Fingerprint size={12}/> },
             { label: "Weight Calculation", icon: <Scale size={12}/> },
             { label: "Conflict Resolution", icon: <ShieldAlert size={12}/> },
             { label: "Stack Integration", icon: <Layers size={12}/> }
           ].map((item) => (
             <div key={item.label} className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-[1.5rem] shadow-sm">
                <div className="w-8 h-8 rounded-xl bg-slate-50 text-[#071B36] flex items-center justify-center">
                   {item.icon}
                </div>
                <span className="text-xs font-black text-[#071B36] uppercase tracking-widest">{item.label}</span>
             </div>
           ))}
        </div>

        <MentorInsight 
          text="You have completed the audit. You now have the eyes of an institutional auditor. You respect the weight of time over the noise of the moment."
          analogy="You've moved from watching the scoreboard to reading the professional game plan."
        />
      </div>
    </InstitutionalFrame>
  );
};
/**
 * Forex Adaptation: 1. Forex Timeframes Are Session Records
 * Visualizing the intersection of Timeframe + Session context.
 */
export const ForexSessionTimeframeBoard = () => {
  const [activeSession, setActiveSession] = useState("London");

  const sessions = {
    Asia: { color: "text-slate-400", bg: "bg-slate-50", border: "border-slate-100", env: "QUIET / NARROW", icon: <Globe size={18} />, intensity: 20 },
    London: { color: "text-teal-600", bg: "bg-teal-50", border: "border-teal-100", env: "ACTIVE / VOLATILE", icon: <Zap size={18} />, intensity: 70 },
    NewYork: { color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100", env: "HIGH LIQUIDITY", icon: <Activity size={18} />, intensity: 85 },
    Overlap: { color: "text-rose-600", bg: "bg-rose-50", border: "border-rose-100", env: "EXTREME VOLATILITY", icon: <AlertTriangle size={18} />, intensity: 100 },
  };

  const session = sessions[activeSession as keyof typeof sessions];

  return (
    <InstitutionalFrame label="Forex Session Diagnostic" id="FX-SESSION-0.4">
      <div className="w-full max-w-4xl flex flex-col gap-10">
        <div className="grid grid-cols-4 gap-4">
          {Object.entries(sessions).map(([name, data]) => (
            <button
              key={name}
              onClick={() => setActiveSession(name)}
              className={cn(
                "p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-3",
                activeSession === name 
                  ? `${data.bg} ${data.border} shadow-lg shadow-teal-500/10 scale-105` 
                  : "bg-white border-slate-100 opacity-60 hover:opacity-100"
              )}
            >
              <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", activeSession === name ? data.color : "text-slate-300")}>
                {data.icon}
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest">{name}</span>
            </button>
          ))}
        </div>

        <div className="bg-white border-2 border-slate-100 rounded-[3rem] p-10 flex flex-col items-center gap-10 shadow-sm relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-slate-100" />
           
           <div className="flex items-center gap-20">
              {/* The Candle Record */}
              <div className="flex flex-col items-center gap-6">
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Timeframe Record</span>
                 <div className="relative group">
                    <div className="w-[3px] h-32 bg-slate-200 group-hover:bg-teal-500 transition-colors" />
                    <div className={cn(
                      "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 border-2 shadow-sm transition-all duration-500",
                      activeSession === "Asia" ? "h-12 bg-slate-100 border-slate-200" :
                      activeSession === "Overlap" ? "h-24 bg-rose-500 border-rose-600" :
                      "h-20 bg-teal-500 border-teal-600"
                    )} />
                    <div className="absolute -right-16 top-1/2 -translate-y-1/2 px-3 py-1 bg-[#071B36] rounded-lg shadow-xl">
                       <span className="text-[10px] font-black text-white italic">15m</span>
                    </div>
                 </div>
              </div>

              {/* The Interaction Map */}
              <div className="flex flex-col gap-8">
                 <div className="flex flex-col gap-2">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Active Environment</span>
                    <div className={cn("px-6 py-3 rounded-2xl border-2 flex items-center gap-4 transition-all duration-500", session.bg, session.border)}>
                       <div className={session.color}>{session.icon}</div>
                       <span className={cn("text-xs font-black uppercase tracking-tight", session.color)}>{session.env}</span>
                    </div>
                 </div>

                 <div className="flex flex-col gap-2">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Reading Quality</span>
                    <div className="w-48 h-2 bg-slate-100 rounded-full overflow-hidden">
                       <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${session.intensity}%` }}
                          className={cn("h-full", activeSession === "Overlap" ? "bg-rose-500" : "bg-teal-500")}
                       />
                    </div>
                 </div>
              </div>
           </div>
        </div>

        <MentorInsight 
          text="In Forex, time is the container, but the Session is the liquid. You can't understand the shape of the move without knowing the temperature of the room it was born in."
          analogy="A 15-minute run in the desert (London Overlap) is not the same as a 15-minute walk in the park (Late Asia). The clock says 15 minutes, but the impact is different."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Forex Adaptation: 3. Session Handoffs and Overlaps
 * Visualizing the 'Activity vs Clarity' diagnostic during major transitions.
 */
export const ForexHandoffOverlapBoard = () => {
  const [activeWindow, setActiveWindow] = useState("Overlap");

  const windows = {
    Handoff: {
      label: "Asia / London Handoff",
      time: "07:00 - 09:00",
      activity: "Rising",
      clarity: "Low (Unstable)",
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-200",
      icon: <Workflow size={20} />,
      desc: "Order books are shifting. Volume is returning, but direction is often deceptive as institutional desks come online."
    },
    Overlap: {
      label: "London / NY Overlap",
      time: "13:00 - 16:00",
      activity: "Extreme",
      clarity: "High (If Aligned)",
      color: "text-teal-600",
      bg: "bg-teal-50",
      border: "border-teal-200",
      icon: <Zap size={20} />,
      desc: "Maximum participation. Cleanest moves often happen here, but volatility spikes can hunt retail liquidity."
    },
    LateNY: {
      label: "Late New York",
      time: "18:00 - 21:00",
      activity: "Fading",
      clarity: "Low (Noisy)",
      color: "text-slate-400",
      bg: "bg-slate-50",
      border: "border-slate-200",
      icon: <Clock size={20} />,
      desc: "Closing rotations. Participation drops. Spreads can widen. Movement is often technical noise without follow-through."
    }
  };

  const current = windows[activeWindow as keyof typeof windows];

  return (
    <InstitutionalFrame label="Liquidity Window Diagnostic" id="FX-WINDOW-0.4">
      <div className="w-full max-w-4xl flex flex-col gap-10">
        {/* Window Selector */}
        <div className="grid grid-cols-3 gap-6">
          {Object.entries(windows).map(([key, data]) => (
            <button
              key={key}
              onClick={() => setActiveWindow(key)}
              className={cn(
                "group p-6 rounded-[2rem] border-2 transition-all flex flex-col gap-4 text-left relative overflow-hidden",
                activeWindow === key 
                  ? `${data.bg} ${data.border} shadow-xl scale-[1.02]` 
                  : "bg-white border-slate-100 opacity-60 hover:opacity-100"
              )}
            >
              <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110", activeWindow === key ? data.color : "text-slate-300")}>
                {data.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Context Window</span>
                <span className={cn("text-sm font-black uppercase tracking-tight leading-none mt-1", activeWindow === key ? "text-[#071B36]" : "text-slate-400")}>
                  {data.label}
                </span>
                <span className="text-[9px] font-mono mt-2 text-slate-400">{data.time}</span>
              </div>
              {activeWindow === key && (
                <motion.div 
                  layoutId="active-indicator"
                  className="absolute bottom-0 left-0 h-1 w-full bg-teal-500" 
                />
              )}
            </button>
          ))}
        </div>

        {/* Diagnostic Panel */}
        <div className="bg-white border-2 border-slate-100 rounded-[3rem] p-10 flex flex-col gap-10 shadow-sm relative overflow-hidden">
           <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#071B36_1.5px,transparent_1.5px)] bg-[length:24px_24px]" />
           
           <div className="grid grid-cols-[1fr_auto_1fr] gap-12 items-center relative z-10">
              {/* Participation Visual */}
              <div className="flex flex-col gap-6">
                 <div className="flex items-center justify-between px-2">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Participation Graph</span>
                    <div className="px-2 py-0.5 bg-teal-50 border border-teal-100 rounded text-[8px] font-black text-teal-600 uppercase tracking-widest">Live Audit</div>
                 </div>
                 <div className="h-48 bg-slate-50 border border-slate-100 rounded-[2rem] p-6 flex items-end gap-2 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(90deg,transparent,transparent_19px,white_1px,white_20px)]" />
                    {[...Array(12)].map((_, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ 
                          height: `${(i === 5 || i === 6) && activeWindow === "Overlap" ? 90 : 
                                    i > 4 && i < 8 && activeWindow === "Handoff" ? 50 : 
                                    i > 8 && activeWindow === "LateNY" ? 20 : 
                                    Math.random() * 40 + 10}%` 
                        }}
                        className={cn(
                          "flex-1 rounded-t-lg transition-colors",
                          (i === 5 || i === 6) && activeWindow === "Overlap" ? "bg-teal-500" : 
                          i > 4 && i < 8 && activeWindow === "Handoff" ? "bg-amber-400" :
                          "bg-slate-200"
                        )}
                      />
                    ))}
                 </div>
              </div>

              {/* Central Formula */}
              <div className="flex flex-col items-center gap-4">
                 <div className="w-px h-12 bg-slate-200" />
                 <div className="w-14 h-14 rounded-full bg-[#071B36] flex items-center justify-center shadow-2xl">
                    <Radar size={24} className="text-teal-400" />
                 </div>
                 <div className="w-px h-12 bg-slate-200" />
              </div>

              {/* Status readout */}
              <div className="flex flex-col gap-8">
                 <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Diagnostic Result</span>
                    <div className={cn("px-6 py-4 rounded-2xl border-2 shadow-sm flex flex-col gap-1 transition-all duration-500", current.bg, current.border)}>
                       <span className={cn("text-[10px] font-black uppercase tracking-tighter", current.color)}>Activity: {current.activity}</span>
                       <span className="text-base font-black text-[#071B36] uppercase italic tracking-tighter leading-tight">Clarity: {current.clarity}</span>
                    </div>
                 </div>
                 
                 <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl">
                    <p className="text-[11px] font-bold text-slate-500 leading-relaxed italic">
                      “{current.desc}”
                    </p>
                 </div>
              </div>
           </div>
        </div>

        <div className="w-full p-6 bg-amber-50 border border-amber-100 rounded-[2rem] flex items-center gap-6 group">
           <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:rotate-12 transition-transform">
              <AlertTriangle size={24} strokeWidth={2.5} />
           </div>
           <div className="flex flex-col flex-1">
              <span className="text-[11px] font-black text-[#B45309] uppercase tracking-widest">The Activity Fallacy</span>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-tight">Activity increases movement, but it does not guarantee structural clarity.</span>
           </div>
           <div className="px-4 py-2 bg-[#071B36] rounded-full">
              <span className="text-[8px] font-black text-white uppercase tracking-widest">Verify Structure First</span>
           </div>
        </div>

        <MentorInsight 
          text="Think of an overlap like a high-speed highway. The speed (activity) is great for reaching your destination, but if you don't have a map (structure), you're just going nowhere fast. Activity is the fuel; structure is the steering wheel."
          analogy="A crowded room is loud, but it isn't always organized. Don't mistake the noise of a session open for a coordinated institutional plan. Wait for the 'Adults' to show their hand through structure."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Forex Adaptation: 4. Same Candle, Different Session Meaning
 * Visualizing how 'Evidence Weight' shifts for the same shape across sessions.
 */
export const ForexCandleWeightBoard = () => {
  const [activeContext, setActiveContext] = useState("Active");

  const contexts = {
    Quiet: {
      label: "Quiet Period",
      weight: 30,
      quality: "THIN / WEAK",
      color: "text-slate-400",
      bg: "bg-slate-50",
      border: "border-slate-100",
      icon: <Wind size={20} />,
      desc: "Low participation makes this move easy to reverse. It is 'Thin' evidence that requires much more confirmation."
    },
    Active: {
      label: "Active Session",
      weight: 85,
      quality: "HIGH / USEFUL",
      color: "text-teal-600",
      bg: "bg-teal-50",
      border: "border-teal-200",
      icon: <Target size={20} />,
      desc: "Supported by institutional volume. This candle carries meaningful weight and can be used to anchor a reading."
    },
    News: {
      label: "News Window",
      weight: 50,
      quality: "UNSTABLE / NOISY",
      color: "text-rose-600",
      bg: "bg-rose-50",
      border: "border-rose-200",
      icon: <AlertOctagon size={20} />,
      desc: "Fast movement but no structural integrity. Often represents a 'stop hunt' or knee-jerk reaction rather than trend intent."
    }
  };

  const current = contexts[activeContext as keyof typeof contexts];

  return (
    <InstitutionalFrame label="Evidence Weight Diagnostic" id="FX-WEIGHT-0.4">
      <div className="w-full max-w-4xl flex flex-col gap-10">
        <div className="bg-white border-2 border-slate-100 rounded-[3rem] p-12 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-slate-100" />
          
          <div className="grid grid-cols-[1.2fr_auto_1fr] gap-16 items-center">
            {/* The Consistent Shape */}
            <div className="flex flex-col items-center gap-8">
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Constant: Candle Shape</span>
               <div className="p-10 bg-slate-50 border border-slate-100 rounded-[2rem] relative group">
                  <div className="w-[4px] h-32 bg-slate-200" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-20 bg-teal-500 border-2 border-teal-600 shadow-lg shadow-teal-500/20" />
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#071B36] rounded-lg text-[8px] font-black text-white uppercase tracking-widest">
                     Bullish 15m
                  </div>
               </div>
               <p className="text-[11px] font-bold text-slate-400 text-center max-w-[180px] leading-relaxed italic">
                 “This shape looks the same in every session, but its value is not constant.”
               </p>
            </div>

            {/* Transition Arrow */}
            <div className="flex flex-col items-center gap-2">
               <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                  <ArrowRight size={20} />
               </div>
               <span className="text-[9px] font-black text-slate-300 uppercase tracking-tighter">Applied Context</span>
            </div>

            {/* The Weight Result */}
            <div className="flex flex-col gap-8">
               <div className="flex flex-col gap-4">
                  {Object.entries(contexts).map(([key, data]) => (
                    <button
                      key={key}
                      onClick={() => setActiveContext(key)}
                      className={cn(
                        "px-6 py-4 rounded-2xl border-2 transition-all flex items-center justify-between group",
                        activeContext === key 
                          ? `${data.bg} ${data.border} shadow-md` 
                          : "bg-white border-slate-50 opacity-40 hover:opacity-100 hover:bg-slate-50"
                      )}
                    >
                      <div className="flex items-center gap-4">
                         <div className={cn("transition-transform group-hover:scale-110", activeContext === key ? data.color : "text-slate-300")}>
                           {data.icon}
                         </div>
                         <span className={cn("text-xs font-black uppercase tracking-tight", activeContext === key ? "text-[#071B36]" : "text-slate-400")}>
                           {data.label}
                         </span>
                      </div>
                      <ChevronRight size={14} className={cn("transition-transform", activeContext === key ? data.color : "text-slate-200")} />
                    </button>
                  ))}
               </div>

               <div className="p-8 bg-[#071B36] rounded-[2rem] shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 blur-[60px]" />
                  <div className="flex flex-col gap-6 relative z-10">
                     <div className="flex flex-col">
                        <span className="text-[9px] font-black text-teal-400/60 uppercase tracking-widest leading-none">Diagnostic Result</span>
                        <span className="text-xl font-black text-white uppercase italic tracking-tighter mt-1">{current.quality}</span>
                     </div>

                     <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                           <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Evidence Weight</span>
                           <span className="text-[9px] font-mono text-teal-400">{current.weight}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                           <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${current.weight}%` }}
                              className={cn("h-full", activeContext === "News" ? "bg-rose-500" : "bg-teal-500")} 
                           />
                        </div>
                     </div>

                     <p className="text-[10px] text-slate-400 leading-relaxed font-bold">
                        {current.desc}
                     </p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <MentorInsight 
          text="Memorizing candle shapes is a beginner's game. Judging the quality of the environment that created them is the professional's edge. A candle is only as strong as the hands that pulled the trigger."
          analogy="A footprint in wet mud (Active Session) tells you exactly where someone went. A footprint in dry sand (Quiet Period) disappears the moment you look away."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Forex Adaptation: 5. News Windows Distort Timeframe Reading
 * Visualizing the contrast between clean session movement and unstable news volatility.
 */
export const ForexNewsDistortionBoard = () => {
  return (
    <InstitutionalFrame label="Event Volatility Diagnostic" id="FX-NEWS-0.4">
      <div className="w-full max-w-4xl flex flex-col gap-10">
        <div className="grid grid-cols-2 gap-10">
          {/* Normal Candle Section */}
          <div className="flex flex-col gap-4">
             <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-teal-500" />
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Normal Session Flow</span>
             </div>
             <div className="p-10 bg-white border-2 border-slate-100 rounded-[3rem] shadow-sm flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:20px_100%]" />
                
                <div className="flex flex-col items-center gap-1 relative z-10">
                   <div className="w-[2px] h-12 bg-slate-200" />
                   <div className="w-8 h-20 bg-teal-500 border-2 border-teal-600 shadow-md" />
                   <div className="w-[2px] h-8 bg-slate-200" />
                </div>
                
                <div className="mt-8 px-4 py-2 bg-teal-50 border border-teal-100 rounded-xl">
                   <span className="text-[9px] font-black text-teal-700 uppercase">Stable Spread</span>
                </div>
             </div>
          </div>

          {/* News Candle Section */}
          <div className="flex flex-col gap-4">
             <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                <span className="text-[10px] font-black text-rose-500 uppercase tracking-widest">News Window Volatility</span>
             </div>
             <div className="p-10 bg-slate-900 border-2 border-slate-800 rounded-[3rem] shadow-2xl flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden">
                <div className="absolute inset-0 bg-rose-500/5" />
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:15px_15px]" />
                
                <div className="flex flex-col items-center gap-1 relative z-10">
                   <div className="w-[4px] h-32 bg-rose-500/40" />
                   <div className="w-12 h-32 bg-rose-500 border-2 border-rose-400 shadow-[0_0_30px_rgba(244,63,94,0.3)] relative">
                      {/* Distortion effects */}
                      <div className="absolute -inset-2 border border-rose-500/20 animate-ping rounded-sm" />
                      <div className="absolute top-1/2 -left-12 -translate-y-1/2 flex flex-col gap-1">
                         <div className="w-8 h-[1px] bg-rose-500/50" />
                         <span className="text-[7px] font-black text-rose-400 uppercase">Slippage</span>
                      </div>
                   </div>
                   <div className="w-[4px] h-24 bg-rose-500/40" />
                </div>

                <div className="mt-8 px-4 py-2 bg-rose-500/20 border border-rose-500/40 rounded-xl flex items-center gap-2">
                   <AlertTriangle size={12} className="text-rose-400" />
                   <span className="text-[9px] font-black text-rose-400 uppercase tracking-tighter">Fast Repricing / Spread Expansion</span>
                </div>
             </div>
          </div>
        </div>

        <div className="p-8 bg-[#071B36] rounded-[2.5rem] border border-white/10 flex items-center justify-between shadow-xl">
           <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400">
                 <ShieldCheck size={24} />
              </div>
              <div className="flex flex-col">
                 <span className="text-[10px] font-black text-teal-400 uppercase tracking-widest mb-1">Institutional Rule</span>
                 <h4 className="text-lg font-bold text-white uppercase tracking-tight">Large movement during news does not automatically equal clean evidence.</h4>
              </div>
           </div>
        </div>

        <MentorInsight 
          text="Economic news is like a storm hitting a ship. The ship might move fast, but it is the storm steering, not the captain. We wait for the wind to settle (Follow-Through) before we trust the new direction."
          analogy="A loud megaphone (News) makes a voice louder, but not necessarily clearer."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Forex Adaptation: 6. Higher-Timeframe Location in Forex
 * Visualizing the nesting of local movement inside higher-timeframe boundaries.
 */
export const ForexLocationContextBoard = () => {
  return (
    <InstitutionalFrame label="Location Context Diagnostic" id="FX-LOCATION-0.4">
      <div className="w-full max-w-4xl flex flex-col gap-10">
        <div className="relative p-12 bg-white border-2 border-slate-100 rounded-[3rem] shadow-sm overflow-hidden min-h-[400px] flex items-center justify-center">
           {/* Background Grid */}
           <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(0,0,0,0.1)_2px,transparent_2px),linear-gradient(90deg,rgba(0,0,0,0.1)_2px,transparent_2px)] bg-[length:40px_40px]" />
           
           {/* HTF Resistance Zone */}
           <div className="absolute top-12 left-8 right-8 h-20 bg-rose-500/5 border-y-2 border-rose-500/20 flex items-center justify-center">
              <div className="flex flex-col items-center gap-1">
                 <span className="text-[10px] font-black text-rose-500 uppercase tracking-[0.4em]">4H Resistance Area (Major Zone)</span>
                 <span className="text-[8px] font-bold text-rose-400 uppercase">Institutional Supply</span>
              </div>
           </div>

           {/* LTF Movement */}
           <div className="relative z-10 mt-20 flex flex-col items-center">
              <div className="flex items-end gap-2">
                 {[12, 16, 24, 32, 28, 40].map((h, i) => (
                    <motion.div 
                       key={i}
                       initial={{ height: 0 }}
                       animate={{ height: h * 2 }}
                       className={cn(
                         "w-6 rounded-sm border",
                         i === 5 ? "bg-teal-500 border-teal-600 shadow-lg" : "bg-slate-100 border-slate-200"
                       )}
                    >
                       {i === 5 && (
                          <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center whitespace-nowrap">
                             <div className="px-2 py-1 bg-[#071B36] rounded text-[8px] font-black text-white">Active Push</div>
                             <div className="w-px h-4 bg-[#071B36]" />
                          </div>
                       )}
                    </motion.div>
                 ))}
              </div>
              
              <div className="mt-12 flex flex-col items-center gap-4 text-center">
                 <div className="px-6 py-2 bg-slate-50 border border-slate-200 rounded-full flex items-center gap-3">
                    <Map size={14} className="text-slate-400" />
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Local 15m Momentum</span>
                 </div>
                 <p className="text-[11px] font-bold text-slate-400 max-w-[280px]">
                    "The push looks strong, but it is moving into the <span className="text-rose-500">4H Ceiling</span>."
                 </p>
              </div>
           </div>

           {/* Side Labels */}
           <div className="absolute left-8 bottom-8 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-rose-500/30" />
                 <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">HTF Boundaries</span>
              </div>
              <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                 <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">LTF Participation</span>
              </div>
           </div>
        </div>

        <div className="p-8 bg-[#071B36] rounded-[2.5rem] flex items-center justify-between border-b-4 border-teal-500 shadow-2xl">
           <div className="flex items-center gap-8">
              <div className="w-14 h-14 rounded-2xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400">
                 <Target size={28} />
              </div>
              <div className="flex flex-col">
                 <span className="text-[10px] font-black text-teal-400 uppercase tracking-[0.3em] mb-1">Audit Mastery</span>
                 <h4 className="text-xl font-bold text-white uppercase tracking-tighter">Location comes before reaction.</h4>
              </div>
           </div>
        </div>

        <MentorInsight 
          text="In Forex, price is always 'somewhere' in a bigger story. A car driving at 100mph (Reaction) is great, but if it is 5 feet away from a cliff (Location), the speed doesn't matter. Always check the cliff first."
          analogy="A hiker looking at their boots (LTF) to see if they're moving, while ignoring the mountain peak (HTF) they're walking into."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Forex Adaptation: 7. Lower-Timeframe Session Behavior
 * Visualizing the "Lens" metaphor for observing behavior within context.
 */
export const ForexBehaviorLensBoard = () => {
  return (
    <InstitutionalFrame label="Behavior Lens Diagnostic" id="FX-BEHAVIOR-0.4">
      <div className="w-full max-w-5xl flex flex-col gap-10">
        <div className="grid grid-cols-[0.4fr_0.6fr] gap-10 items-center">
           {/* HTF Context (The Map) */}
           <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                 <Globe size={14} className="text-slate-400" />
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">HTF Context (The Map)</span>
              </div>
              <div className="p-8 bg-slate-50 border-2 border-slate-100 rounded-[2.5rem] relative h-[350px] flex items-center justify-center overflow-hidden">
                 <div className="absolute top-10 left-4 right-4 h-12 bg-rose-500/10 border-y border-rose-500/20 flex items-center justify-center">
                    <span className="text-[8px] font-black text-rose-500 uppercase tracking-widest">4H Resistance Zone</span>
                 </div>
                 <div className="w-px h-full bg-slate-200 absolute left-1/2" />
                 <div className="w-4 h-4 rounded-full bg-[#071B36] relative z-10 shadow-lg border-2 border-white" />
                 <div className="absolute bottom-10 text-[9px] font-bold text-slate-400 uppercase tracking-tighter italic">"Price is here"</div>
              </div>
           </div>

           {/* LTF Behavior (The Lens) */}
           <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                 <Search size={14} className="text-teal-500" />
                 <span className="text-[10px] font-black text-teal-600 uppercase tracking-widest">LTF Behavior (The Lens)</span>
              </div>
              <div className="p-8 bg-[#071B36] border-[4px] border-slate-800 rounded-[3rem] shadow-2xl relative min-h-[350px] grid grid-cols-2 gap-6">
                 {[
                   { label: "Fast Push", icon: <Zap size={14}/>, color: "text-teal-400", bg: "bg-teal-400/10" },
                   { label: "Slowing", icon: <Activity size={14}/>, color: "text-amber-400", bg: "bg-amber-400/10" },
                   { label: "Rejection", icon: <ShieldAlert size={14}/>, color: "text-rose-400", bg: "bg-rose-400/10" },
                   { label: "Break Attempt", icon: <Target size={14}/>, color: "text-blue-400", bg: "bg-blue-400/10" }
                 ].map((item, i) => (
                   <div key={i} className={cn("p-6 rounded-2xl border border-white/5 flex flex-col gap-3", item.bg)}>
                      <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center bg-white/5", item.color)}>
                         {item.icon}
                      </div>
                      <span className={cn("text-[10px] font-black uppercase tracking-tight", item.color)}>{item.label}</span>
                      <div className="flex gap-1 h-8 items-end">
                         {[1,2,3,4].map(j => (
                           <div key={j} className="flex-1 bg-white/10 rounded-sm" style={{ height: Math.random() * 100 + "%" }} />
                         ))}
                      </div>
                   </div>
                 ))}
                 
                 <div className="absolute inset-0 pointer-events-none border-[20px] border-[#071B36] rounded-[2.5rem] opacity-50 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />
              </div>
           </div>
        </div>

        <div className="flex flex-col gap-6 p-8 bg-white border-2 border-slate-100 rounded-[3rem] shadow-sm">
           <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-slate-50 text-[#071B36] flex items-center justify-center">
                 <Scale size={24} />
              </div>
              <p className="text-sm font-bold text-slate-500 leading-relaxed">
                 <span className="text-[#071B36] font-black uppercase tracking-tighter italic">Behavior refined, not invented.</span> Lower timeframes should explain how price is interacting with the map, not create a brand new map.
              </p>
           </div>
        </div>

        <MentorInsight 
          text="A magnifying glass (LTF) is useless if you don't know where you are on the world map (HTF). Use the map to find the destination, and the glass to watch your step."
          analogy="A biologist using a microscope to study a cell, but needing the anatomical chart to know which organ the cell belongs to."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Forex Adaptation: 8. Resolving the Session vs. Timeframe Trap
 * Visualizing how HTF 'Structural Gravity' overrides Session 'Noise'.
 */
export const ForexConflictResolver = () => {
  return (
    <InstitutionalFrame label="Session Conflict Diagnostic" id="FX-CONFLICT-0.4">
      <div className="w-full max-w-4xl flex flex-col gap-10">
        <div className="grid grid-cols-[1.2fr_0.8fr] gap-10">
          {/* Scenario Board */}
          <div className="flex flex-col gap-6">
            <div className="p-8 bg-white border-2 border-slate-100 rounded-[3rem] shadow-sm relative overflow-hidden">
               <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(0,0,0,0.1)_2px,transparent_2px)] bg-[length:100%_20px]" />
               
               <div className="flex flex-col gap-8 relative z-10">
                  {/* HTF Resistance */}
                  <div className="relative">
                    <div className="absolute -left-4 right-0 h-4 bg-rose-500/10 border-y border-rose-500/20 flex items-center justify-center">
                       <span className="text-[8px] font-black text-rose-500 uppercase tracking-[0.4em]">4H Bearish Wall (NY Session)</span>
                    </div>
                    <div className="h-20" />
                  </div>

                  {/* London Push */}
                  <div className="flex flex-col items-center">
                     <div className="flex items-center gap-10">
                        <div className="flex flex-col items-center">
                           <div className="w-[3px] h-24 bg-slate-200" />
                           <div className="w-10 h-16 bg-teal-500 border-2 border-teal-600 shadow-lg relative">
                              <div className="absolute -right-12 top-0 px-2 py-0.5 bg-[#071B36] rounded text-[8px] font-black text-white">15m</div>
                           </div>
                           <div className="w-[3px] h-8 bg-slate-200" />
                        </div>
                        <div className="flex flex-col gap-2">
                           <div className="flex items-center gap-3 px-4 py-2 bg-teal-50 border border-teal-100 rounded-xl">
                              <Zap size={14} className="text-teal-600" />
                              <span className="text-[10px] font-black text-teal-700 uppercase">London Open Push</span>
                           </div>
                           <p className="text-[10px] font-bold text-slate-500 max-w-[140px] leading-relaxed">
                             "The move looks fast and strong, but it is moving into a Wall."
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Logic Panel */}
          <div className="flex flex-col gap-6">
             <div className="p-8 bg-[#071B36] rounded-[3rem] border-[4px] border-slate-800 shadow-2xl flex flex-col items-center text-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-500">
                   <ShieldAlert size={32} />
                </div>
                <div className="flex flex-col gap-2">
                   <span className="text-[10px] font-black text-teal-400 uppercase tracking-widest leading-none">Diagnostic Result</span>
                   <h4 className="text-2xl font-black text-white uppercase italic tracking-tighter">Mixed Reading</h4>
                </div>
                <div className="w-full h-px bg-white/10" />
                <p className="text-[11px] font-bold text-slate-400 uppercase leading-relaxed">
                  Session momentum (London) is hitting HTF Resistance (NY). <span className="text-teal-400">Professional choice: Wait for alignment.</span>
                </p>
             </div>
             
             <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl flex items-center gap-4">
                <Scale size={20} className="text-slate-400" />
                <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">HTF Wall {">"} Session Hype</span>
             </div>
          </div>
        </div>

        <MentorInsight 
          text="In Forex, sessions are powerful but Timeframes are absolute. A London rally into a 4H New York wall is like a car driving into a brick wall. The car is moving fast, but the wall doesn't care."
          analogy="A speedboat (Session) hitting a glacier (HTF). The speedboat is loud and fast, but the glacier isn't moving."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Forex Adaptation: 6. The Forex Evidence Stack Workflow
 * The step-by-step sequence for a clinical Forex audit.
 */
export const ForexTopDownWorkflow = () => {
  return (
    <InstitutionalFrame label="Forex Audit Workflow" id="FX-WORKFLOW-0.4">
      <div className="w-full max-w-2xl flex flex-col gap-10">
        <div className="relative flex flex-col gap-4">
          <div className="absolute left-[31px] top-8 bottom-8 w-px bg-slate-200" />
          
          {[
            { 
              step: "01", 
              label: "The Boss Audit", 
              tf: "Daily / 4H", 
              desc: "Identify the dominant session bias and major structural walls.",
              icon: <Fingerprint size={18} />,
              color: "bg-[#071B36]"
            },
            { 
              step: "02", 
              label: "The Roadway Audit", 
              tf: "1H / 15m", 
              desc: "Identify the current session's sequence of highs and lows.",
              icon: <MapPin size={18} />,
              color: "bg-teal-600"
            },
            { 
              step: "03", 
              label: "The Participation Audit", 
              tf: "Session Window", 
              desc: "Judge whether the move has real liquidity or is just technical noise.",
              icon: <Zap size={18} />,
              color: "bg-blue-600"
            },
            { 
              step: "04", 
              label: "The Evidence Stack", 
              tf: "Alignment", 
              desc: "Only proceed if the layers support the same directional story.",
              icon: <CheckCircle size={18} />,
              color: "bg-emerald-600"
            }
          ].map((item, i) => (
            <div key={item.step} className="flex items-center gap-8 group">
               <div className={cn(
                 "w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg relative z-10 transition-transform group-hover:scale-110",
                 item.color
               )}>
                  <span className="text-sm font-black italic">{item.step}</span>
               </div>
               
               <div className="flex-1 p-6 bg-white border border-slate-100 rounded-[2rem] shadow-sm flex items-center justify-between group-hover:border-teal-500 transition-all">
                  <div className="flex flex-col">
                     <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.tf}</span>
                        <div className="w-1 h-1 bg-slate-200 rounded-full" />
                        <span className="text-[9px] font-bold text-teal-600 uppercase tracking-tight">{item.label}</span>
                     </div>
                     <p className="text-[11px] font-bold text-[#071B36] leading-tight max-w-[300px]">
                        {item.desc}
                     </p>
                  </div>
                  <div className="text-slate-200 group-hover:text-teal-500 transition-colors">
                     {item.icon}
                  </div>
               </div>
            </div>
          ))}
        </div>

        <MentorInsight 
          text="Starting on the 1-minute chart in Forex is like looking at a blade of grass to predict the weather. Start with the atmosphere (HTF), then the garden (1H), then the leaf (15m)."
          analogy="A general doesn't look at a single soldier to plan a war. They look at the map (HTF), then the division (1H), then the squad (Detail)."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Forex Adaptation: 7. Forex Timeframe Practice Scenario
 */
export const ForexTimeframeDrill = () => {
  return (
    <InstitutionalFrame label="Forex Audit Case Study" id="FX-DRILL-0.4">
      <div className="w-full max-w-4xl flex flex-col gap-10">
        <div className="grid grid-cols-3 gap-6">
           {[
             { tf: "4H", label: "NARRATIVE", state: "BEARISH WALL", context: "NY SUPPLY ZONE", color: "text-rose-600", bg: "bg-rose-50", border: "border-rose-100", icon: <ShieldAlert size={14}/> },
             { tf: "1H", label: "STRUCTURE", state: "RANGING", context: "ASIA CONSOLIDATION", color: "text-slate-400", bg: "bg-slate-50", border: "border-slate-100", icon: <Clock size={14}/> },
             { tf: "15m", label: "DETAIL", state: "BULLISH PUSH", context: "LONDON OPEN", color: "text-teal-600", bg: "bg-teal-50", border: "border-teal-100", icon: <Zap size={14}/> }
           ].map(item => (
             <div key={item.tf} className={cn("p-8 rounded-[2.5rem] border-2 shadow-sm flex flex-col gap-6 relative overflow-hidden", item.bg, item.border)}>
                <div className="flex items-center justify-between">
                   <div className="px-3 py-1 bg-white border border-slate-200 rounded-lg shadow-sm">
                      <span className="text-xs font-black text-[#071B36]">{item.tf}</span>
                   </div>
                   <div className={cn("p-2 rounded-lg bg-white shadow-sm", item.color)}>
                      {item.icon}
                   </div>
                </div>
                <div className="flex flex-col gap-1">
                   <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{item.label} LAYER</span>
                   <h5 className={cn("text-base font-black uppercase tracking-tighter leading-none", item.color)}>{item.state}</h5>
                   <span className="text-[8px] font-mono text-slate-400 uppercase mt-2">{item.context}</span>
                </div>
             </div>
           ))}
        </div>

        <div className="bg-[#071B36] rounded-[3rem] p-10 flex items-center justify-between shadow-2xl relative overflow-hidden">
           <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(white_1.5px,transparent_1.5px)] bg-[length:20px_20px]" />
           <div className="flex items-center gap-8 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400">
                 <Target size={32} />
              </div>
              <div className="flex flex-col">
                 <span className="text-[10px] font-black text-teal-400 uppercase tracking-[0.4em] mb-2">Audit Scenario Question</span>
                 <h4 className="text-xl font-black text-white uppercase italic tracking-tight">What is the disciplined reading?</h4>
              </div>
           </div>
        </div>
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Forex Adaptation: 9. Forex Debrief: Time, Session, Structure
 * Final summary of the 7-step Forex Audit Process.
 */
export const ForexRoadwayDebrief = () => {
  return (
    <InstitutionalFrame label="Roadway Competency Verified" id="FX-RECAP-0.4" status="COMPLETE">
      <div className="w-full max-w-4xl flex flex-col gap-10">
        <div className="flex flex-col items-center gap-6 text-center">
           <div className="w-20 h-20 rounded-[2.5rem] bg-teal-500/10 border-2 border-teal-500/30 flex items-center justify-center text-teal-500 shadow-xl">
              <CheckCircle size={48} strokeWidth={2.5} />
           </div>
           <div className="flex flex-col gap-2">
              <span className="text-[10px] font-black text-teal-600 uppercase tracking-[0.5em]">Roadway Complete</span>
              <h2 className="text-4xl font-black text-[#071B36] uppercase italic tracking-tighter">The Forex Auditor</h2>
           </div>
        </div>

        <div className="p-10 bg-white border-2 border-slate-100 rounded-[3rem] shadow-sm relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-[0.05]">
              <Workflow size={120} />
           </div>
           
           <div className="flex flex-col gap-8 relative z-10">
              <div className="flex items-center gap-4">
                 <div className="w-8 h-8 rounded-lg bg-[#071B36] text-white flex items-center justify-center">
                    <Activity size={16} />
                 </div>
                 <h3 className="text-sm font-black text-[#071B36] uppercase tracking-widest">Your Repeatable Audit Process</h3>
              </div>

              <div className="grid grid-cols-2 gap-y-4 gap-x-12">
                 {[
                   { step: "01", label: "Identify Pair", desc: "Currency context & behavior" },
                   { step: "02", label: "Select Timeframe", desc: "Time compression weight" },
                   { step: "03", label: "Verify Session", desc: "Participation environment" },
                   { step: "04", label: "HTF Location", desc: "Nesting inside the Boss" },
                   { step: "05", label: "WT Structure", desc: "The current roadway" },
                   { step: "06", label: "LTF Behavior", desc: "The local reaction lens" },
                   { step: "07", label: "Reading Quality", desc: "Clear, Mixed, or Unclear" }
                 ].map((item, i) => (
                   <div key={i} className="flex items-start gap-4 p-4 hover:bg-slate-50 rounded-2xl transition-colors group">
                      <span className="text-xs font-black text-slate-300 group-hover:text-teal-500 transition-colors">{item.step}</span>
                      <div className="flex flex-col gap-0.5">
                         <span className="text-[11px] font-black text-[#071B36] uppercase tracking-tight">{item.label}</span>
                         <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{item.desc}</span>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
           <div className="p-8 bg-[#071B36] rounded-[2.5rem] flex flex-col gap-4 border-b-4 border-teal-500 shadow-xl">
              <div className="flex items-center gap-3">
                 <Zap size={14} className="text-teal-400" />
                 <span className="text-[10px] font-black text-teal-400 uppercase tracking-widest">New Competency</span>
              </div>
              <p className="text-sm font-bold text-white leading-relaxed">
                 You no longer react to candle shapes. You audit <span className="text-teal-400">Time, Session, and Structure</span> together.
              </p>
           </div>

           <div className="p-8 bg-slate-50 border-2 border-slate-100 rounded-[2.5rem] flex flex-col gap-4">
              <div className="flex items-center gap-3">
                 <ArrowRightCircle size={14} className="text-slate-400" />
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Bridge to Next</span>
              </div>
              <h4 className="text-base font-black text-[#071B36] uppercase tracking-tighter">Structure Reading</h4>
              <p className="text-[11px] font-bold text-slate-500 uppercase leading-snug">
                 Mapping the market skeleton: Swing Points and Trends.
              </p>
           </div>
        </div>

        <MentorInsight 
          text="Leaving a module with session names is a hobby. Leaving with a process is a career. You have graduated from 'reactive trader' to 'disciplined evidence auditor'."
          analogy="A pilot who doesn't just know the names of the buttons, but follows the pre-flight checklist every single time."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Crypto Adaptation: 1. Crypto Timeframes Run 24/7
 * Visualizing the 24/7 timeline vs. varying market quality.
 */
export const CryptoContinuousMarketBoard = () => {
  return (
    <InstitutionalFrame label="Continuous Market Diagnostic" id="CRYPTO-CONTINUOUS-0.4">
      <div className="w-full max-w-5xl flex flex-col gap-10">
        <div className="relative p-12 bg-white border-2 border-slate-100 rounded-[3rem] shadow-sm overflow-hidden min-h-[450px]">
           {/* Background Grid */}
           <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(0,0,0,0.1)_2px,transparent_2px),linear-gradient(90deg,rgba(0,0,0,0.1)_2px,transparent_2px)] bg-[length:40px_40px]" />
           
           <div className="flex flex-col gap-12 relative z-10">
              <div className="flex items-center justify-between">
                 <div className="flex flex-col">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Continuous Market Structure</span>
                    <h4 className="text-2xl font-black text-[#071B36] uppercase italic tracking-tighter">The 24/7 Crypto Timeline</h4>
                 </div>
                 <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">Live Market Engine</span>
                 </div>
              </div>

              {/* Timeline Visualization */}
              <div className="relative flex flex-col gap-8">
                 <div className="absolute left-0 right-0 h-px bg-slate-200 top-[60px]" />
                 
                 <div className="grid grid-cols-4 gap-4">
                    {[
                      { label: "Active Cycle", color: "bg-teal-500", icon: <TrendingUp size={12}/>, desc: "High Participation", quality: "HIGH" },
                      { label: "Quiet Window", color: "bg-slate-300", icon: <Moon size={12}/>, desc: "Low Volatility", quality: "LOW" },
                      { label: "Weekend", color: "bg-amber-500", icon: <Sun size={12}/>, desc: "Thin Liquidity", quality: "UNSTABLE" },
                      { label: "Event Spike", color: "bg-rose-500", icon: <Zap size={12}/>, desc: "News Driven", quality: "DISTORTED" }
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col gap-4">
                         <div className="h-10 flex items-center justify-center">
                            <div className={cn("px-3 py-1 rounded-full text-[8px] font-black uppercase text-white shadow-sm", item.color)}>
                               {item.label}
                            </div>
                         </div>
                         
                         <div className="p-6 bg-slate-50 border-2 border-slate-100 rounded-[2rem] flex flex-col items-center gap-6 group hover:border-teal-500 transition-all duration-500">
                            <div className="flex gap-1 h-12 items-end">
                               {[1,2,3,4,5].map(j => (
                                 <motion.div 
                                    key={j}
                                    initial={{ height: 0 }}
                                    animate={{ height: Math.random() * 100 + "%" }}
                                    className={cn("w-1.5 rounded-t-sm", item.color, "opacity-40 group-hover:opacity-100 transition-opacity")}
                                 />
                               ))}
                            </div>
                            
                            <div className="flex flex-col items-center text-center gap-1">
                               <span className="text-[9px] font-black text-[#071B36] uppercase">{item.desc}</span>
                               <div className="flex items-center gap-2">
                                  <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">Quality:</span>
                                  <span className={cn("text-[8px] font-black uppercase tracking-widest", 
                                    item.quality === "HIGH" ? "text-teal-600" : 
                                    item.quality === "LOW" ? "text-slate-400" : "text-rose-500"
                                  )}>{item.quality}</span>
                               </div>
                            </div>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="p-8 bg-[#071B36] rounded-[2.5rem] flex items-center justify-between border-b-4 border-teal-500 shadow-2xl">
                 <div className="flex items-center gap-8">
                    <div className="w-14 h-14 rounded-2xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400">
                       <Clock size={28} />
                    </div>
                    <div className="flex flex-col">
                       <span className="text-[10px] font-black text-teal-400 uppercase tracking-[0.3em] mb-1">Timeframe Logic</span>
                       <h4 className="text-xl font-bold text-white uppercase tracking-tighter italic">Crypto never sleeps, but candle quality still changes.</h4>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        <MentorInsight 
          text="In traditional markets, the clock tells you when to trade. In Crypto, the environment tells you when to trade. A candle printed at 3 AM on a Saturday is a record, but it is not the same kind of record as one printed during a global activity cycle."
          analogy="A 24-hour restaurant (Crypto) that stays open all night, but the quality of service changes depending on whether it's the lunch rush or the 4 AM skeleton crew."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Crypto Adaptation: 2. The Crypto Day Has Activity Cycles
 * Visualizing the rhythmic changes in participation across a 24-hour cycle.
 */
export const CryptoActivityCycleBoard = () => {
  return (
    <InstitutionalFrame label="Activity Rhythm Diagnostic" id="CRYPTO-RHYTHM-0.4">
      <div className="w-full max-w-5xl flex flex-col gap-10">
        <div className="relative p-12 bg-white border-2 border-slate-100 rounded-[3rem] shadow-sm overflow-hidden min-h-[450px]">
           {/* Background Grid */}
           <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(0,0,0,0.1)_2px,transparent_2px),linear-gradient(90deg,rgba(0,0,0,0.1)_2px,transparent_2px)] bg-[length:40px_40px]" />
           
           <div className="flex flex-col gap-12 relative z-10">
              <div className="flex items-center justify-between">
                 <div className="flex flex-col">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Participation Rhythm</span>
                    <h4 className="text-2xl font-black text-[#071B36] uppercase italic tracking-tighter">Crypto Activity Cycles</h4>
                 </div>
                 <div className="flex items-center gap-3 px-5 py-2 bg-slate-50 border border-slate-100 rounded-full">
                    <Activity size={14} className="text-slate-400" />
                    <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest italic">Rhythm is not a Clock</span>
                 </div>
              </div>

              {/* Activity Waveform */}
              <div className="relative h-48 flex items-end gap-1.5 px-4">
                 {/* Timeline axis */}
                 <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-100" />
                 
                 {Array.from({ length: 48 }).map((_, i) => {
                    const activity = 20 + Math.sin(i * 0.3) * 30 + (i > 16 && i < 36 ? 30 : 0) + (i > 40 ? 40 : 0);
                    const isUS = i >= 20 && i <= 34;
                    const isAsia = i >= 0 && i <= 16;
                    const isEurope = i >= 12 && i <= 26;
                    
                    return (
                       <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${Math.min(activity, 100)}%` }}
                          className={cn(
                            "flex-1 rounded-t-sm transition-all duration-500",
                            isUS ? "bg-teal-500/40 hover:bg-teal-500" : 
                            isEurope ? "bg-blue-500/30 hover:bg-blue-500" :
                            isAsia ? "bg-amber-500/30 hover:bg-amber-500" : "bg-slate-200 hover:bg-slate-400"
                          )}
                       />
                    );
                 })}

                 {/* Region Labels */}
                 <div className="absolute top-0 left-0 right-0 flex justify-between px-8">
                    <div className="flex flex-col items-center gap-2">
                       <span className="text-[7px] font-black text-slate-300 uppercase">Asia Cycle</span>
                       <div className="w-px h-4 bg-slate-100" />
                    </div>
                    <div className="flex flex-col items-center gap-2">
                       <span className="text-[7px] font-black text-slate-300 uppercase">Europe Cycle</span>
                       <div className="w-px h-4 bg-slate-100" />
                    </div>
                    <div className="flex flex-col items-center gap-2">
                       <span className="text-[7px] font-black text-teal-500 uppercase">US/Overlap Cycle</span>
                       <div className="w-px h-4 bg-teal-500/20" />
                    </div>
                 </div>
              </div>

              {/* Marker Cards */}
              <div className="grid grid-cols-3 gap-6">
                 {[
                   { label: "Quiet Windows", desc: "Tends to occur between major regional handoffs.", icon: <Moon size={14}/>, color: "text-slate-400" },
                   { label: "Funding Time", desc: "Mechanical markers that can influence positioning.", icon: <Database size={14}/>, color: "text-blue-500" },
                   { label: "Event Window", desc: "Often causes sudden, unaligned participation spikes.", icon: <Zap size={14}/>, color: "text-rose-500" }
                 ].map((item, i) => (
                   <div key={i} className="p-6 bg-slate-50 border border-slate-100 rounded-[2rem] flex flex-col gap-3">
                      <div className={cn("flex items-center gap-2", item.color)}>
                         {item.icon}
                         <span className="text-[9px] font-black uppercase tracking-widest">{item.label}</span>
                      </div>
                      <p className="text-[10px] font-bold text-slate-500 leading-snug">
                         {item.desc}
                      </p>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        <div className="p-8 bg-[#071B36] rounded-[2.5rem] border border-white/10 flex items-center justify-between shadow-xl">
           <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400">
                 <Radar size={24} />
              </div>
              <div className="flex flex-col">
                 <span className="text-[10px] font-black text-teal-400 uppercase tracking-widest mb-1">Rhythm Awareness</span>
                 <h4 className="text-lg font-bold text-white uppercase tracking-tight">Crypto is always open, but participation is not always equal.</h4>
              </div>
           </div>
        </div>

        <MentorInsight 
          text="Don't look for a rigid clock in Crypto. Look for participation waves. A move that happens when the major venues are active has different weight than a move that happens in a quiet window."
          analogy="The ocean is always there, but surfers wait for the tide to bring the right waves. In Crypto, you are waiting for participation waves."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Crypto Adaptation: 3. Same Candle, Different Market Condition
 * Visualizing how context changes the "weight" of identical candle shapes.
 */
export const CryptoCandleQualityBoard = () => {
  const [activeTab, setActiveTab] = useState("spot");

  const conditions = {
    spot: {
      label: "Strong Spot Demand",
      desc: "Clean participation across venues. High integrity.",
      quality: "HIGH",
      color: "text-teal-500",
      bg: "bg-teal-50",
      border: "border-teal-200",
      icon: <Layers size={14}/>
    },
    thin: {
      label: "Thin Liquidity",
      desc: "Exaggerated movement due to limited order book depth.",
      quality: "LOW",
      color: "text-slate-400",
      bg: "bg-slate-50",
      border: "border-slate-200",
      icon: <Wind size={14}/>
    },
    perp: {
      label: "Perp-Driven Pressure",
      desc: "Leverage & liquidations distort the structural signal.",
      quality: "MIXED",
      color: "text-blue-500",
      bg: "bg-blue-50",
      border: "border-blue-200",
      icon: <Database size={14}/>
    },
    event: {
      label: "Event Spike",
      desc: "Fast, news-driven volatility. Often unstable.",
      quality: "UNSTABLE",
      color: "text-rose-500",
      bg: "bg-rose-50",
      border: "border-rose-200",
      icon: <Zap size={14}/>
    }
  };

  const current = conditions[activeTab as keyof typeof conditions];

  return (
    <InstitutionalFrame label="Candle Quality Diagnostic" id="CRYPTO-QUALITY-0.4">
      <div className="w-full max-w-5xl flex flex-col gap-10">
        <div className="grid grid-cols-[0.4fr_0.6fr] gap-10">
           {/* Constant Side: The Shape */}
           <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                 <Box size={14} className="text-slate-400" />
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Constant: The Shape</span>
              </div>
              <div className="p-12 bg-white border-2 border-slate-100 rounded-[3rem] shadow-sm flex flex-col items-center justify-center min-h-[300px]">
                 <div className="flex flex-col items-center gap-1">
                    <div className="w-[3px] h-12 bg-slate-200" />
                    <div className="w-10 h-24 bg-teal-500 border-2 border-teal-600 shadow-lg" />
                    <div className="w-[3px] h-8 bg-slate-200" />
                 </div>
                 <span className="mt-8 text-[10px] font-black text-[#071B36] uppercase">15m Bullish Candle</span>
              </div>
           </div>

           {/* Variable Side: The Condition */}
           <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                 <Maximize2 size={14} className="text-teal-500" />
                 <span className="text-[10px] font-black text-teal-600 uppercase tracking-widest">Variable: The Condition</span>
              </div>
              <div className="flex flex-col gap-6">
                 <div className="grid grid-cols-2 gap-4">
                    {Object.entries(conditions).map(([key, data]) => (
                      <button 
                         key={key}
                         onClick={() => setActiveTab(key)}
                         className={cn(
                           "p-4 rounded-2xl border-2 transition-all flex items-center gap-4 text-left",
                           activeTab === key ? `${data.bg} ${data.border} shadow-md` : "bg-white border-slate-50 opacity-50 hover:opacity-100"
                         )}
                      >
                         <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center bg-white shadow-sm", activeTab === key ? data.color : "text-slate-300")}>
                            {data.icon}
                         </div>
                         <div className="flex flex-col">
                            <span className={cn("text-[9px] font-black uppercase tracking-tight", activeTab === key ? "text-[#071B36]" : "text-slate-400")}>{data.label}</span>
                         </div>
                      </button>
                    ))}
                 </div>

                 <div className="p-8 bg-[#071B36] rounded-[3rem] shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 blur-[60px]" />
                    <div className="flex flex-col gap-4 relative z-10">
                       <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black text-teal-400 uppercase tracking-widest">Reading Quality</span>
                          <span className={cn("text-xs font-black uppercase italic tracking-tighter", current.color)}>{current.quality}</span>
                       </div>
                       <div className="h-px w-full bg-white/10" />
                       <p className="text-xs font-bold text-slate-300 leading-relaxed">
                          {current.desc}
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        <MentorInsight 
          text="In Crypto, the same signal can be a masterpiece or a hallucination. The shape tells you 'what' happened, but the condition tells you 'why' it happened. Professional learners read the 'why' first."
          analogy="The same loud bang can be a celebratory firework (Spot Demand) or a flat tire (Thin Liquidity). You have to check the context to know whether to cheer or pull over."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Crypto Adaptation: 4. BTC Context Changes Timeframe Reading
 * Visualizing the relationship between Altcoin movement and BTC context.
 */
export const CryptoBtcContextBoard = () => {
  const [activeScenario, setActiveScenario] = useState("aligned");

  const scenarios = {
    aligned: {
      label: "Aligned Movement",
      btc: "BULLISH",
      alt: "BULLISH",
      quality: "HIGH (BROAD SUPPORT)",
      color: "text-teal-500",
      desc: "Move is supported by market-wide participation. High conviction reading."
    },
    caution: {
      label: "Divergent Risk",
      btc: "WEAK / BEARISH",
      alt: "BULLISH",
      quality: "LOW (CAUTION)",
      color: "text-amber-500",
      desc: "Altcoin strength may be a temporary anomaly or 'exit liquidity' trap."
    },
    isolated: {
      label: "Isolated Spike",
      btc: "FLAT / STABLE",
      alt: "SPIKE",
      quality: "MIXED (CHECK CATALYST)",
      color: "text-blue-500",
      desc: "Move is likely asset-specific (news/listing). Requires extra validation."
    }
  };

  const current = scenarios[activeScenario as keyof typeof scenarios];

  return (
    <InstitutionalFrame label="Market Context Diagnostic" id="CRYPTO-BTC-CONTEXT-0.4">
      <div className="w-full max-w-5xl flex flex-col gap-10">
        <div className="grid grid-cols-[1fr_auto_1fr] gap-8 items-center bg-white border-2 border-slate-100 rounded-[3rem] p-12 shadow-sm relative overflow-hidden">
           <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(0,0,0,0.1)_2px,transparent_2px)] bg-[length:100%_40px]" />
           
           {/* BTC Context */}
           <div className="flex flex-col items-center gap-6 relative z-10">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">BTC Context</span>
              <div className="p-8 bg-slate-900 border-2 border-slate-800 rounded-[2rem] w-full flex flex-col items-center justify-center min-h-[200px] shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Fingerprint size={80} className="text-white" />
                 </div>
                 <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-500 mb-2">
                       <span className="font-black text-sm">₿</span>
                    </div>
                    <span className={cn("text-xl font-black italic tracking-tighter uppercase", 
                       current.btc === "BULLISH" ? "text-teal-400" : 
                       current.btc === "WEAK / BEARISH" ? "text-rose-400" : "text-slate-400"
                    )}>{current.btc}</span>
                    <span className="text-[8px] font-black text-white/40 uppercase tracking-[0.3em]">1H / 4H Record</span>
                 </div>
              </div>
           </div>

           {/* Relationship */}
           <div className="flex flex-col items-center gap-2 relative z-10">
              <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-300">
                 <Activity size={20} />
              </div>
              <div className="w-px h-12 bg-slate-100" />
           </div>

           {/* Altcoin Reading */}
           <div className="flex flex-col items-center gap-6 relative z-10">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Altcoin Reading</span>
              <div className="p-8 bg-white border border-slate-100 rounded-[2rem] w-full flex flex-col items-center justify-center min-h-[200px] shadow-sm relative group overflow-hidden">
                 <div className="absolute inset-0 bg-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                 <div className="flex flex-col items-center gap-1 relative z-10">
                    <div className="w-[2px] h-8 bg-slate-200" />
                    <motion.div 
                       key={activeScenario}
                       initial={{ height: 0 }}
                       animate={{ height: current.alt === "SPIKE" ? 100 : 64 }}
                       className={cn("w-10 border-2 shadow-lg", 
                          current.alt === "BULLISH" ? "bg-teal-500 border-teal-600" : 
                          current.alt === "SPIKE" ? "bg-blue-500 border-blue-600 animate-pulse" : "bg-teal-500 border-teal-600"
                       )}
                    />
                    <div className="w-[2px] h-4 bg-slate-200" />
                 </div>
                 <div className="mt-4 flex flex-col items-center">
                    <span className="text-[10px] font-black text-[#071B36] uppercase tracking-tighter italic">Asset Detail</span>
                    <span className="text-[8px] font-bold text-slate-400 uppercase">15m Candle</span>
                 </div>
              </div>
           </div>
        </div>

        {/* Diagnostic Panel */}
        <div className="grid grid-cols-[0.4fr_0.6fr] gap-10">
           <div className="flex flex-col gap-4">
              {Object.entries(scenarios).map(([key, data]) => (
                <button
                  key={key}
                  onClick={() => setActiveScenario(key)}
                  className={cn(
                    "px-6 py-4 rounded-2xl border-2 transition-all text-left group",
                    activeScenario === key ? "bg-white border-[#071B36] shadow-lg" : "bg-slate-50 border-transparent opacity-50 hover:opacity-100"
                  )}
                >
                   <span className={cn("text-[10px] font-black uppercase tracking-widest", activeScenario === key ? "text-[#071B36]" : "text-slate-400")}>
                      {data.label}
                   </span>
                </button>
              ))}
           </div>

           <div className="p-10 bg-[#071B36] rounded-[3rem] shadow-2xl flex flex-col gap-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                 <Compass size={120} className="text-teal-400" />
              </div>
              <div className="flex flex-col gap-1 relative z-10">
                 <span className="text-[10px] font-black text-teal-400 uppercase tracking-[0.4em]">Audit Quality</span>
                 <h4 className={cn("text-2xl font-black uppercase italic tracking-tighter", current.color)}>
                    {current.quality}
                 </h4>
              </div>
              <div className="h-px w-full bg-white/10 relative z-10" />
              <p className="text-sm font-bold text-slate-400 leading-relaxed relative z-10">
                 {current.desc}
              </p>
           </div>
        </div>

        <MentorInsight 
          text="In Crypto, BTC is the 'Ocean' and Altcoins are 'Boats'. When the tide rises (BTC Context), all boats rise. If you see a boat rising while the tide is falling, it might just be a wave hitting a rock. Don't confuse a wave for a trend."
          analogy="A general checking the global battlefield status (BTC) before trusting a small victory reported by a single squad (Altcoin)."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Crypto Adaptation: 5. Spot vs Perp Timeframe Behavior
 * Visualizing the different "Engines" behind Spot and Perpetual candles.
 */
export const CryptoSpotPerpBoard = () => {
  return (
    <InstitutionalFrame label="Market Engine Diagnostic" id="CRYPTO-SPOT-PERP-0.4">
      <div className="w-full max-w-5xl flex flex-col gap-10">
        <div className="grid grid-cols-2 gap-10">
           {/* Spot Engine */}
           <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-teal-500" />
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Spot Market Engine</span>
              </div>
              <div className="p-10 bg-white border-2 border-slate-100 rounded-[3rem] shadow-sm flex flex-col gap-8 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                    <Database size={100} />
                 </div>
                 
                 <div className="flex flex-col items-center gap-1 relative z-10">
                    <div className="w-[2px] h-8 bg-slate-200" />
                    <div className="w-10 h-20 bg-teal-500 border-2 border-teal-600 shadow-lg" />
                    <div className="w-[2px] h-6 bg-slate-200" />
                 </div>

                 <div className="flex flex-col gap-4 relative z-10">
                    {[
                      { label: "Asset Trades", desc: "Actual ownership transfer" },
                      { label: "Spot Volume", desc: "Exchange liquidity flow" },
                      { label: "Ownership", desc: "Non-leveraged accumulation" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-xl border border-slate-100">
                         <CheckCircle size={12} className="text-teal-500" />
                         <div className="flex flex-col">
                            <span className="text-[9px] font-black text-[#071B36] uppercase">{item.label}</span>
                            <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">{item.desc}</span>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>

           {/* Perp Engine */}
           <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-blue-500" />
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Perp Market Engine</span>
              </div>
              <div className="p-10 bg-[#071B36] border-2 border-slate-800 rounded-[3rem] shadow-2xl flex flex-col gap-8 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-[0.05]">
                    <Cpu size={100} className="text-blue-400" />
                 </div>
                 
                 <div className="flex flex-col items-center gap-1 relative z-10">
                    <div className="w-[2px] h-10 bg-blue-400/20" />
                    <div className="w-12 h-24 bg-blue-600 border-2 border-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.2)] relative">
                       <div className="absolute -inset-1 border border-blue-400/20 animate-pulse rounded-sm" />
                    </div>
                    <div className="w-[2px] h-12 bg-blue-400/20" />
                 </div>

                 <div className="flex flex-col gap-4 relative z-10">
                    {[
                      { label: "Contract exposure", desc: "Synthetic positioning" },
                      { label: "Leverage pressure", desc: "Borrowed volatility" },
                      { label: "Liquidation risk", desc: "Forced candle extension" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl border border-white/5">
                         <Zap size={12} className="text-blue-400" />
                         <div className="flex flex-col">
                            <span className="text-[9px] font-black text-white uppercase">{item.label}</span>
                            <span className="text-[8px] font-bold text-slate-500 uppercase tracking-tighter">{item.desc}</span>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>

        <div className="p-8 bg-slate-50 border-2 border-slate-100 rounded-[2.5rem] flex items-center justify-between shadow-sm">
           <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#071B36]">
                 <Workflow size={24} />
              </div>
              <div className="flex flex-col">
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Structural Audit</span>
                 <h4 className="text-lg font-bold text-[#071B36] uppercase tracking-tight">Same timeframe. Different market engine.</h4>
              </div>
           </div>
        </div>

        <MentorInsight 
          text="A spot candle is a record of people buying the car (Asset Ownership). A perp candle is a record of people betting on the car's speed (Contract Exposure). They can look identical on the track, but one is fueled by ownership and the other is fueled by leverage."
          analogy="Reading a spot chart is like looking at the sales floor of a dealership. Reading a perp chart is like looking at the betting board at the race track."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Crypto Adaptation: 6. Weekend and Thin-Liquidity Timeframes
 * Visualizing the contrast between deep (Weekday) and thin (Weekend) liquidity.
 */
export const CryptoLiquidityRiskBoard = () => {
  return (
    <InstitutionalFrame label="Liquidity Depth Diagnostic" id="CRYPTO-LIQUIDITY-RISK-0.4">
      <div className="w-full max-w-5xl flex flex-col gap-10">
        <div className="grid grid-cols-2 gap-10">
           {/* Deep Liquidity (Weekday) */}
           <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-teal-500" />
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Participation (Weekday)</span>
              </div>
              <div className="p-10 bg-white border-2 border-slate-100 rounded-[3rem] shadow-sm flex flex-col gap-8 relative overflow-hidden">
                 <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:15px_100%]" />
                 
                 <div className="flex flex-col items-center gap-1 relative z-10">
                    <div className="w-[1.5px] h-6 bg-slate-200" />
                    <div className="w-12 h-24 bg-teal-500 border-2 border-teal-600 shadow-md" />
                    <div className="w-[1.5px] h-4 bg-slate-200" />
                 </div>

                 <div className="flex flex-col gap-3 relative z-10">
                    <div className="flex items-center justify-between px-4 py-2 bg-slate-50 rounded-lg">
                       <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Order Depth</span>
                       <span className="text-[9px] font-black text-teal-600 uppercase">DEEP</span>
                    </div>
                    <div className="flex items-center justify-between px-4 py-2 bg-slate-50 rounded-lg">
                       <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Wick Noise</span>
                       <span className="text-[9px] font-black text-teal-600 uppercase">LOW</span>
                    </div>
                    <div className="p-4 bg-teal-50 border border-teal-100 rounded-xl text-center">
                       <span className="text-[9px] font-bold text-teal-700 uppercase leading-none">Move requires high volume to sustain</span>
                    </div>
                 </div>
              </div>
           </div>

           {/* Thin Liquidity (Weekend) */}
           <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-rose-500" />
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Thin Liquidity (Weekend)</span>
              </div>
              <div className="p-10 bg-slate-50 border-2 border-slate-100 rounded-[3rem] shadow-sm flex flex-col gap-8 relative overflow-hidden">
                 <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:40px_100%]" />
                 
                 <div className="flex flex-col items-center gap-1 relative z-10">
                    <div className="w-[1.5px] h-16 bg-rose-500/40" />
                    <div className="w-12 h-32 bg-rose-100 border-2 border-rose-200 shadow-sm relative">
                       <div className="absolute -top-4 -left-4 -right-4 -bottom-4 border border-rose-500/10 rounded animate-pulse" />
                    </div>
                    <div className="w-[1.5px] h-12 bg-rose-500/40" />
                 </div>

                 <div className="flex flex-col gap-3 relative z-10">
                    <div className="flex items-center justify-between px-4 py-2 bg-rose-50 rounded-lg">
                       <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Order Depth</span>
                       <span className="text-[9px] font-black text-rose-500 uppercase">THIN</span>
                    </div>
                    <div className="flex items-center justify-between px-4 py-2 bg-rose-50 rounded-lg">
                       <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Wick Noise</span>
                       <span className="text-[9px] font-black text-rose-500 uppercase">HIGH</span>
                    </div>
                    <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl text-center">
                       <span className="text-[9px] font-bold text-rose-700 uppercase leading-none">Price travels far with low volume</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        <div className="p-8 bg-[#071B36] rounded-[2.5rem] border border-white/10 flex items-center justify-between shadow-xl">
           <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
                 <Wind size={28} />
              </div>
              <div className="flex flex-col">
                 <span className="text-[10px] font-black text-rose-400 uppercase tracking-[0.3em] mb-1">Execution Risk</span>
                 <h4 className="text-xl font-bold text-white uppercase tracking-tight">Thin liquidity can make candles look stronger than they are.</h4>
              </div>
           </div>
        </div>

        <MentorInsight 
          text="A weekend breakout is like running across a field of tall grass (Thin Liquidity). It looks like you're going fast, but as soon as the grass gets thicker (Weekday Liquidity), your speed might drop to zero. Always check the ground before you run."
          analogy="A small engine (Low Participation) in a light car (Thin Liquidity) reaching high speeds, but struggling as soon as the car gets loaded (High Participation)."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Crypto Adaptation: 7. News, Listings, and Event Candles
 * Visualizing the instability of event-driven volatility.
 */
export const CryptoEventPressureBoard = () => {
  return (
    <InstitutionalFrame label="Event Pressure Diagnostic" id="CRYPTO-EVENT-0.4">
      <div className="w-full max-w-5xl flex flex-col gap-10">
        <div className="grid grid-cols-2 gap-10">
           {/* Normal Condition */}
           <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                 <div className="w-2 h-2 rounded-full bg-teal-500" />
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Normal Participation</span>
              </div>
              <div className="p-10 bg-white border-2 border-slate-100 rounded-[3rem] shadow-sm flex flex-col items-center justify-center min-h-[350px] relative overflow-hidden">
                 <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:20px_100%]" />
                 
                 <div className="flex flex-col items-center gap-1 relative z-10">
                    <div className="w-[1.5px] h-8 bg-slate-200" />
                    <div className="w-10 h-24 bg-teal-500 border-2 border-teal-600 shadow-md" />
                    <div className="w-[1.5px] h-6 bg-slate-200" />
                 </div>
                 
                 <div className="mt-8 px-4 py-2 bg-teal-50 border border-teal-100 rounded-xl">
                    <span className="text-[9px] font-black text-teal-700 uppercase">Steady Flow</span>
                 </div>
              </div>
           </div>

           {/* Event Condition */}
           <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                 <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                 <span className="text-[10px] font-black text-rose-500 uppercase tracking-widest">Event Volatility (News/Listing)</span>
              </div>
              <div className="p-10 bg-slate-900 border-2 border-slate-800 rounded-[3rem] shadow-2xl flex flex-col items-center justify-center min-h-[350px] relative overflow-hidden">
                 <div className="absolute inset-0 bg-rose-500/5" />
                 <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:15px_15px]" />
                 
                 <div className="flex flex-col items-center gap-1 relative z-10">
                    <div className="w-[3px] h-32 bg-rose-500/40" />
                    <div className="w-14 h-32 bg-rose-500 border-2 border-rose-400 shadow-[0_0_30px_rgba(244,63,94,0.4)] relative">
                       <div className="absolute -inset-2 border border-rose-500/20 animate-ping rounded-sm" />
                       <div className="absolute -right-16 top-1/2 -translate-y-1/2 flex flex-col items-center">
                          <AlertTriangle size={14} className="text-rose-400 mb-1" />
                          <span className="text-[7px] font-black text-rose-400 uppercase whitespace-nowrap">Liquidation Spike</span>
                       </div>
                    </div>
                    <div className="w-[3px] h-16 bg-rose-500/40" />
                 </div>

                 <div className="mt-8 flex flex-col items-center gap-2">
                    <div className="px-4 py-2 bg-rose-500/20 border border-rose-500/40 rounded-xl flex items-center gap-2">
                       <Zap size={12} className="text-rose-400" />
                       <span className="text-[9px] font-black text-rose-400 uppercase tracking-tighter">Emotional Repricing</span>
                    </div>
                    <span className="text-[8px] font-bold text-slate-500 uppercase italic">"Uncertain Close"</span>
                 </div>
              </div>
           </div>
        </div>

        <div className="p-8 bg-[#071B36] rounded-[2.5rem] border border-white/10 flex items-center justify-between shadow-xl">
           <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
                 <AlertOctagon size={24} />
              </div>
              <div className="flex flex-col">
                 <span className="text-[10px] font-black text-rose-400 uppercase tracking-widest mb-1">Audit Rule</span>
                 <h4 className="text-lg font-bold text-white uppercase tracking-tight">Event candles are loud before they are clear.</h4>
              </div>
           </div>
        </div>

        <MentorInsight 
          text="A crypto event candle is like a megaphone (News) in a dark room. It makes everyone jump, but it doesn't turn the lights on. You wait for the lights (Follow-Through) before you decide which way the room is actually moving."
          analogy="A crowd running because someone shouted 'Free Food'. The first person there might get lucky, but half the crowd is just running because the other half is running (FOMO)."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Crypto Adaptation: 8. Multi-Timeframe Crypto Reading Process
 * Visualizing the "Audit Stack" for professional crypto reading.
 */
export const CryptoReadingStackBoard = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: "HTF Structure", icon: <Layers size={14}/>, desc: "Where is the asset in the broader market map?" },
    { title: "BTC Context", icon: <Zap size={14}/>, desc: "Is the broader market (BTC/ETH) supporting or pressuring?" },
    { title: "Venue / Market Check", icon: <Database size={14}/>, desc: "Spot demand or Perp pressure? Check liquidity sources." },
    { title: "Working Timeframe", icon: <Clock size={14}/>, desc: "What is the current structure on the focus chart?" },
    { title: "Lower-Timeframe Detail", icon: <Search size={14}/>, desc: "Observe behavior: Is it slowing, expanding, or rejecting?" },
    { title: "Reading Quality", icon: <ShieldCheck size={14}/>, desc: "Final Audit: Is the evidence Clear, Mixed, or Unclear?" }
  ];

  return (
    <InstitutionalFrame label="Crypto Audit Workflow" id="CRYPTO-STACK-0.4">
      <div className="w-full max-w-5xl flex flex-col gap-10">
        <div className="relative p-12 bg-white border-2 border-slate-100 rounded-[3rem] shadow-sm overflow-hidden">
           {/* Background Grid */}
           <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(0,0,0,0.1)_2px,transparent_2px),linear-gradient(90deg,rgba(0,0,0,0.1)_2px,transparent_2px)] bg-[length:30px_30px]" />
           
           <div className="grid grid-cols-[0.5fr_0.5fr] gap-12 relative z-10">
              {/* Stack Visualization */}
              <div className="flex flex-col gap-3">
                 {steps.map((step, i) => (
                    <motion.div 
                       key={i}
                       onMouseEnter={() => setActiveStep(i)}
                       className={cn(
                          "p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center gap-4",
                          activeStep === i ? "bg-[#071B36] border-[#071B36] text-white shadow-xl translate-x-4" : "bg-white border-slate-100 text-slate-400 grayscale opacity-60"
                       )}
                    >
                       <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center bg-white/10", activeStep === i ? "text-teal-400" : "text-slate-300")}>
                          {step.icon}
                       </div>
                       <span className="text-[10px] font-black uppercase tracking-widest">{step.title}</span>
                       {activeStep === i && <ArrowRight size={14} className="ml-auto text-teal-400" />}
                    </motion.div>
                 ))}
              </div>

              {/* Detail Panel */}
              <div className="flex flex-col justify-center">
                 <div className="p-10 bg-slate-50 border border-slate-100 rounded-[3rem] relative overflow-hidden min-h-[300px] flex flex-col justify-center">
                    <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                       {steps[activeStep].icon}
                    </div>
                    <div className="flex flex-col gap-4 relative z-10">
                       <span className="text-[10px] font-black text-teal-600 uppercase tracking-[0.4em]">Step 0{activeStep + 1}</span>
                       <h4 className="text-2xl font-black text-[#071B36] uppercase italic tracking-tighter">
                          {steps[activeStep].title}
                       </h4>
                       <div className="h-px w-16 bg-[#071B36]/10" />
                       <p className="text-sm font-bold text-slate-500 leading-relaxed max-w-xs">
                          {steps[activeStep].desc}
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        <div className="p-8 bg-teal-500 rounded-[2.5rem] flex items-center justify-between border-b-8 border-teal-600 shadow-2xl">
           <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-white border border-teal-400 flex items-center justify-center text-teal-600">
                 <ClipboardList size={24} />
              </div>
              <div className="flex flex-col">
                 <span className="text-[10px] font-black text-white/60 uppercase tracking-widest mb-1">Professional Process</span>
                 <h4 className="text-lg font-bold text-white uppercase tracking-tight">Read the market layer before reacting to the candle.</h4>
              </div>
           </div>
        </div>

        <MentorInsight 
          text="A professional crypto reading is like a medical scan. You don't just look at the bruise (The Candle). You look at the patient's history (HTF), the global environment (BTC), and the diagnostic source (Venue) before you decide what is actually happening."
          analogy="Building a house: You don't start with the paint color. You start with the foundation, the structure, and the plumbing before the final finish matters."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Crypto Adaptation: 9. Crypto Timeframe Conflict Drill
 * Visualizing a "Mixed Evidence" stack for active decision practice.
 */
export const CryptoConflictDrillBoard = () => {
  return (
    <InstitutionalFrame label="Evidence Audit Drill" id="CRYPTO-DRILL-0.4">
      <div className="w-full max-w-5xl flex flex-col gap-10">
        <div className="p-12 bg-white border-2 border-slate-100 rounded-[3rem] shadow-sm relative overflow-hidden">
           {/* Background Decoration */}
           <div className="absolute top-0 right-0 p-12 opacity-[0.03]">
              <Search size={150} />
           </div>

           <div className="flex flex-col gap-8 relative z-10">
              <div className="flex flex-col gap-2">
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Scenario Audit</span>
                 <h4 className="text-2xl font-black text-[#071B36] uppercase italic tracking-tighter">Diagnostic Evidence Stack</h4>
              </div>

              {/* Evidence Layers */}
              <div className="grid grid-cols-1 gap-3">
                 {[
                   { label: "4H Structure", val: "Under Resistance", status: "NEGATIVE", icon: <MapPin size={12}/>, color: "text-rose-500" },
                   { label: "BTC Context", val: "Flat / Not Confirming", status: "NEUTRAL", icon: <Activity size={12}/>, color: "text-slate-400" },
                   { label: "Spot Demand", val: "Weaker / Not Lead", status: "NEGATIVE", icon: <Database size={12}/>, color: "text-rose-500" },
                   { label: "Perp 15m", val: "Strong Bullish Candle", status: "POSITIVE", icon: <Zap size={12}/>, color: "text-teal-500" },
                   { label: "Liquidity", val: "Thin / Weekend", status: "UNSTABLE", icon: <Wind size={12}/>, color: "text-amber-500" }
                 ].map((layer, i) => (
                   <div key={i} className="flex items-center gap-6 p-4 bg-slate-50 border border-slate-100 rounded-2xl group hover:bg-white hover:shadow-md transition-all">
                      <div className={cn("w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center", layer.color)}>
                         {layer.icon}
                      </div>
                      <div className="flex flex-col">
                         <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{layer.label}</span>
                         <span className="text-xs font-bold text-[#071B36]">{layer.val}</span>
                      </div>
                      <div className="ml-auto flex items-center gap-3">
                         <div className={cn("px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest border", 
                            layer.status === "POSITIVE" ? "bg-teal-50 border-teal-200 text-teal-600" :
                            layer.status === "NEGATIVE" ? "bg-rose-50 border-rose-200 text-rose-600" :
                            layer.status === "NEUTRAL" ? "bg-slate-100 border-slate-200 text-slate-500" : "bg-amber-50 border-amber-200 text-amber-600"
                         )}>
                            {layer.status}
                         </div>
                      </div>
                   </div>
                 ))}
              </div>

              {/* Conflict Analysis */}
              <div className="p-8 bg-slate-900 rounded-[2.5rem] flex items-center justify-between shadow-2xl mt-4">
                 <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-500">
                       <Scale size={24} />
                    </div>
                    <div className="flex flex-col">
                       <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest mb-1">Conclusion Required</span>
                       <h4 className="text-lg font-bold text-white uppercase tracking-tight italic">Diagnostic Result: Mixed Evidence</h4>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        <MentorInsight 
          text="In Crypto, active movement is not an invitation. It is a request for an audit. If the stack is mixed, the reading is not 'Clearly Bullish'—it is 'Wait and See'. Chasing a perp candle while BTC and Spot are asleep is how most retail liquidity is taken."
          analogy="A building with a beautiful coat of paint (15m Perp Candle) but the foundation is cracked (HTF) and the electrical isn't connected (BTC/Spot). Do you move in?"
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Crypto Adaptation: 10. Crypto Debrief: Time, Venue, Liquidity, Alignment
 * Final summary of the 8-Step Clinical Crypto Audit process.
 */
export const CryptoRoadwayDebrief = () => {
  const auditSteps = [
    { label: "Asset", val: "Identity Check", icon: <Fingerprint size={12}/> },
    { label: "Timeframe", val: "Duration Check", icon: <Clock size={12}/> },
    { label: "Venue / Type", val: "Spot vs Perp", icon: <Database size={12}/> },
    { label: "BTC Context", val: "Market Tide", icon: <Activity size={12}/> },
    { label: "Liquidity", val: "Depth Check", icon: <Wind size={12}/> },
    { label: "HTF Structure", val: "Location Check", icon: <Map size={12}/> },
    { label: "LTF Behavior", val: "Local Detail", icon: <Search size={12}/> },
    { label: "Reading Quality", val: "Final Audit", icon: <ShieldCheck size={12}/> }
  ];

  return (
    <InstitutionalFrame label="Clinical Crypto Audit" id="CRYPTO-DEBRIEF-0.4">
      <div className="w-full max-w-5xl flex flex-col gap-10">
        <div className="p-12 bg-white border-2 border-slate-100 rounded-[3rem] shadow-sm relative overflow-hidden">
           {/* Background Grid */}
           <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(0,0,0,0.1)_2px,transparent_2px),linear-gradient(90deg,rgba(0,0,0,0.1)_2px,transparent_2px)] bg-[length:40px_40px]" />
           
           <div className="flex flex-col gap-10 relative z-10">
              <div className="flex items-center justify-between">
                 <div className="flex flex-col">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Process Finalization</span>
                    <h4 className="text-3xl font-black text-[#071B36] uppercase italic tracking-tighter">8-Step Clinical Crypto Audit</h4>
                 </div>
                 <div className="flex items-center gap-4 px-6 py-3 bg-teal-500 rounded-2xl shadow-lg shadow-teal-500/20">
                    <ShieldCheck size={20} className="text-white" />
                    <span className="text-xs font-black text-white uppercase tracking-widest italic">Standard Verified</span>
                 </div>
              </div>

              {/* Audit Grid */}
              <div className="grid grid-cols-4 gap-4">
                 {auditSteps.map((step, i) => (
                    <div key={i} className="p-6 bg-slate-50 border border-slate-100 rounded-[2rem] flex flex-col gap-3 group hover:bg-[#071B36] transition-all duration-300">
                       <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover:text-teal-400 group-hover:bg-white/10 transition-colors">
                          {step.icon}
                       </div>
                       <div className="flex flex-col">
                          <span className="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em] group-hover:text-white/40">{step.label}</span>
                          <span className="text-[10px] font-bold text-[#071B36] group-hover:text-white">{step.val}</span>
                       </div>
                    </div>
                 ))}
              </div>

              {/* Summary Statement */}
              <div className="p-8 bg-[#071B36] rounded-[2.5rem] border border-white/10 flex items-center justify-between shadow-xl">
                 <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-black text-teal-400 uppercase tracking-[0.4em]">Professional Shift</span>
                    <p className="text-white font-bold text-lg uppercase tracking-tight max-w-2xl leading-tight italic">
                       You are no longer reading crypto candles as isolated shapes. You now understand that every candle must be checked against venue, liquidity, BTC context, and broader structure.
                    </p>
                 </div>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
           <div className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] flex items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#071B36]">
                 <Compass size={24} />
              </div>
              <div className="flex flex-col">
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Coming Next</span>
                 <h4 className="text-lg font-bold text-[#071B36] uppercase tracking-tight">Module 0.5: Structure Reading</h4>
              </div>
              <ArrowRightCircle size={24} className="ml-auto text-teal-500" />
           </div>

           <div className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] flex items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#071B36]">
                 <RotateCcw size={24} />
              </div>
              <div className="flex flex-col">
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Roadway Mastery</span>
                 <h4 className="text-lg font-bold text-[#071B36] uppercase tracking-tight">Crypto Adaptation Complete</h4>
              </div>
              <CheckCircle size={24} className="ml-auto text-teal-500" />
           </div>
        </div>

        <MentorInsight 
          text="The crypto market is designed to trigger your emotions through fast, constant movement. The Audit Stack is your shield. It turns a loud, emotional candle into a clinical, data-driven reading. Do not enter the market without it."
          analogy="A pilot using a pre-flight checklist. It doesn't matter if they have flown 1,000 times—the checklist ensures that every layer of safety is verified before they leave the ground."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Gold Adaptation: 1. Gold Timeframes Are Volatility Records
 * Visualizing the "Quality" of a Gold candle based on its volatility environment.
 */
export const GoldVolatilityRecordBoard = () => {
  const [activeEnv, setActiveEnv] = useState("calm");

  const environments = {
    calm: {
      label: "Calm Condition",
      desc: "Slow movement, normal depth. Reading is stable.",
      quality: "HIGH",
      color: "text-teal-500",
      bg: "bg-teal-50",
      border: "border-teal-200",
      icon: <Wind size={14}/>
    },
    active: {
      label: "Active Window",
      desc: "Increased participation, clean momentum. Strong evidence.",
      quality: "HIGH",
      color: "text-blue-500",
      bg: "bg-blue-50",
      border: "border-blue-200",
      icon: <Activity size={14}/>
    },
    volatile: {
      label: "Volatile Spike",
      desc: "Fast, erratic movement. Higher risk of noise.",
      quality: "MIXED",
      color: "text-amber-500",
      bg: "bg-amber-50",
      border: "border-amber-200",
      icon: <Zap size={14}/>
    },
    event: {
      label: "Event Reaction",
      desc: "Sudden repricing, thin liquidity, extreme speed.",
      quality: "UNSTABLE",
      color: "text-rose-500",
      bg: "bg-rose-50",
      border: "border-rose-200",
      icon: <AlertTriangle size={14}/>
    }
  };

  const current = environments[activeEnv as keyof typeof environments];

  return (
    <InstitutionalFrame label="Gold Volatility Diagnostic" id="GOLD-VOL-0.4">
      <div className="w-full max-w-5xl flex flex-col gap-10">
        <div className="relative p-12 bg-white border-2 border-slate-100 rounded-[3rem] shadow-sm overflow-hidden">
           {/* Background Decoration */}
           <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(0,0,0,0.1)_2px,transparent_2px),linear-gradient(90deg,rgba(0,0,0,0.1)_2px,transparent_2px)] bg-[length:50px_50px]" />
           
           <div className="grid grid-cols-[0.4fr_0.6fr] gap-12 relative z-10">
              {/* The Candle */}
              <div className="flex flex-col items-center justify-center p-12 bg-slate-50 border border-slate-100 rounded-[2.5rem]">
                 <div className="flex flex-col items-center gap-1">
                    <div className="w-[2px] h-12 bg-slate-200" />
                    <motion.div 
                       key={activeEnv}
                       initial={{ scaleY: 0.8 }}
                       animate={{ scaleY: activeEnv === "event" ? 1.4 : 1 }}
                       className={cn("w-12 h-28 border-2 shadow-lg transition-colors duration-500", 
                          activeEnv === "event" ? "bg-rose-500 border-rose-600" : "bg-teal-500 border-teal-600"
                       )}
                    />
                    <div className="w-[2px] h-8 bg-slate-200" />
                 </div>
                 <div className="mt-8 flex flex-col items-center">
                    <span className="text-[10px] font-black text-[#071B36] uppercase tracking-widest italic">XAU/USD Record</span>
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">15m Duration</span>
                 </div>
              </div>

              {/* The Audit */}
              <div className="flex flex-col gap-6">
                 <div className="grid grid-cols-2 gap-4">
                    {Object.entries(environments).map(([key, env]) => (
                      <button 
                         key={key}
                         onClick={() => setActiveEnv(key)}
                         className={cn(
                           "p-4 rounded-2xl border-2 transition-all flex items-center gap-4 text-left",
                           activeEnv === key ? `${env.bg} ${env.border} shadow-md` : "bg-white border-transparent opacity-50 hover:opacity-100"
                         )}
                      >
                         <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", activeEnv === key ? "bg-white text-slate-900" : "bg-slate-50 text-slate-400")}>
                            {env.icon}
                         </div>
                         <span className={cn("text-[9px] font-black uppercase tracking-tight", activeEnv === key ? "text-[#071B36]" : "text-slate-400")}>{env.label}</span>
                      </button>
                    ))}
                 </div>

                 <div className="p-8 bg-[#071B36] rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                       <Shield size={80} className="text-teal-400" />
                    </div>
                    <div className="flex flex-col gap-4 relative z-10">
                       <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black text-teal-400 uppercase tracking-[0.3em]">Reading Quality</span>
                          <span className={cn("text-xs font-black uppercase tracking-tighter italic", current.color)}>{current.quality}</span>
                       </div>
                       <div className="h-px w-full bg-white/10" />
                       <p className="text-xs font-bold text-slate-300 leading-relaxed">
                          {current.desc}
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        <div className="p-8 bg-slate-900 rounded-[2.5rem] flex items-center justify-between border-l-8 border-amber-500 shadow-xl">
           <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-500">
                 <Radar size={24} />
              </div>
              <div className="flex flex-col">
                 <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest mb-1">XAU/USD Foundation</span>
                 <h4 className="text-lg font-bold text-white uppercase tracking-tight italic">Gold candles are records of time plus volatility.</h4>
              </div>
           </div>
        </div>

        <MentorInsight 
          text="In Gold, size can be a lie. A large candle in a quiet window might just be a single bank moving a position. A large candle after US data is a collective market repricing. You have to check the 'engine' of volatility before you trust the shape."
          analogy="The difference between a car going fast on a highway (Active Momentum) and a car spinning its tires in the mud (Unstable Volatility). They both look fast to a radar gun, but only one is actually moving the car forward."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Gold Adaptation: 2. Gold Does Not Move Equally All Day
 * Visualizing the rhythmic quality of Gold across the trading day.
 */
export const GoldMarketRhythmBoard = () => {
  return (
    <InstitutionalFrame label="Gold Market Rhythm Audit" id="GOLD-RHYTHM-0.4">
      <div className="w-full max-w-5xl flex flex-col gap-10">
        <div className="p-12 bg-white border-2 border-slate-100 rounded-[3rem] shadow-sm relative overflow-hidden">
           {/* Background Grid */}
           <div className="absolute inset-0 opacity-[0.01] bg-[radial-gradient(#000_1px,transparent_1px)] bg-[length:20px_20px]" />
           
           <div className="flex flex-col gap-12 relative z-10">
              <div className="flex items-center justify-between">
                 <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Participation Map</span>
                    <h4 className="text-2xl font-black text-[#071B36] uppercase italic tracking-tighter">XAU/USD Activity Cycles</h4>
                 </div>
                 <div className="px-6 py-3 bg-amber-500 rounded-2xl shadow-lg shadow-amber-500/20 flex items-center gap-3">
                    <Clock size={18} className="text-white" />
                    <span className="text-xs font-black text-white uppercase tracking-widest">Global Flow</span>
                 </div>
              </div>

              {/* Rhythm Visualization */}
              <div className="relative h-48 flex items-end gap-1 px-4 border-b-2 border-slate-100 pb-1">
                 {/* Asia - Quieter */}
                 <div className="flex-1 flex flex-col gap-2">
                    <div className="h-12 bg-slate-100 rounded-t-xl hover:bg-slate-200 transition-colors relative group">
                       <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-[#071B36] text-white text-[8px] font-black px-2 py-1 rounded">ASIA: THINNER</div>
                    </div>
                    <span className="text-[8px] font-black text-slate-300 uppercase text-center">Asia</span>
                 </div>
                 {/* Pre-London */}
                 <div className="flex-1 flex flex-col gap-2">
                    <div className="h-16 bg-slate-100 rounded-t-xl hover:bg-slate-200 transition-colors" />
                 </div>
                 {/* London Start */}
                 <div className="flex-1 flex flex-col gap-2">
                    <div className="h-28 bg-blue-400/40 rounded-t-xl hover:bg-blue-400 transition-colors relative group border-t-2 border-blue-500">
                       <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-[#071B36] text-white text-[8px] font-black px-2 py-1 rounded">LONDON: POSITIONING</div>
                    </div>
                    <span className="text-[8px] font-black text-blue-500 uppercase text-center">LDN</span>
                 </div>
                 {/* London Mid */}
                 <div className="flex-1 flex flex-col gap-2">
                    <div className="h-24 bg-blue-400/30 rounded-t-xl hover:bg-blue-400 transition-colors" />
                 </div>
                 {/* NY Open / Overlap */}
                 <div className="flex-[1.5] flex flex-col gap-2">
                    <div className="h-40 bg-amber-500/40 rounded-t-xl hover:bg-amber-500 transition-colors relative group border-t-2 border-amber-600 shadow-[0_-10px_20px_-10px_rgba(245,158,11,0.3)]">
                       <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-slate-900 text-white text-[8px] font-black px-3 py-2 rounded-lg flex flex-col items-center gap-1 shadow-xl">
                          <span>NY: PEAK PARTICIPATION</span>
                          <span className="text-amber-400 text-[6px]">DATA + FUTURES</span>
                       </div>
                    </div>
                    <span className="text-[8px] font-black text-amber-600 uppercase text-center tracking-tighter">NY OVERLAP</span>
                 </div>
                 {/* NY Late */}
                 <div className="flex-1 flex flex-col gap-2">
                    <div className="h-20 bg-amber-500/20 rounded-t-xl hover:bg-amber-500 transition-colors" />
                 </div>
                 {/* Post-NY / Slowing */}
                 <div className="flex-1 flex flex-col gap-2">
                    <div className="h-10 bg-slate-100 rounded-t-xl hover:bg-slate-200 transition-colors" />
                    <span className="text-[8px] font-black text-slate-300 uppercase text-center">Closing</span>
                 </div>
              </div>

              {/* Diagnostic Table */}
              <div className="grid grid-cols-3 gap-6">
                 {[
                    { label: "Quiet Windows", risk: "LOW VOL", participation: "ASIA / LATE NY", desc: "Moves can be thinner and slower." },
                    { label: "Active Windows", risk: "HIGH VOL", participation: "LDN / NY OVERLAP", desc: "Professional participation and clean trends." },
                    { label: "Event Windows", risk: "EXTREME", participation: "US DATA / MACRO", desc: "Fast repricing. Reading is unstable." }
                 ].map((item, i) => (
                    <div key={i} className="flex flex-col gap-2 p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-white hover:shadow-xl transition-all">
                       <span className="text-[10px] font-black text-[#071B36] uppercase tracking-widest">{item.label}</span>
                       <div className="flex items-center gap-2">
                          <div className={cn("px-2 py-0.5 rounded text-[7px] font-black uppercase", 
                             item.risk === "LOW VOL" ? "bg-slate-200 text-slate-500" :
                             item.risk === "HIGH VOL" ? "bg-teal-500 text-white" : "bg-rose-500 text-white animate-pulse"
                          )}>{item.risk}</div>
                       </div>
                       <p className="text-[10px] font-bold text-slate-500 leading-tight mt-2">{item.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        <div className="p-8 bg-[#071B36] rounded-[2.5rem] border border-white/10 flex items-center justify-between shadow-xl">
           <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-500">
                 <Timer size={24} />
              </div>
              <div className="flex flex-col">
                 <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest mb-1">Execution Rule</span>
                 <h4 className="text-lg font-bold text-white uppercase tracking-tight italic">Gold’s clock does not move equally.</h4>
              </div>
           </div>
        </div>

        <MentorInsight 
          text="A Gold candle at 3 AM Asia is not the same as a Gold candle at 8:30 AM New York. The 15-minute clock is the same, but the participation engine is different. Always check whether you are reading the 'Main Event' or just the 'Pre-Show'."
          analogy="The difference between a party starting (Asia), the music getting louder (London), and the dance floor being packed (NY Overlap). You can dance at any time, but the energy (Quality) is not the same."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Gold Adaptation: 3. Same Candle, Different Gold Window
 * Visualizing how context changes the weight of the same candle shape.
 */
export const GoldWindowComparisonBoard = () => {
  const [activeTab, setActiveTab] = useState(0);

  const scenarios = [
    {
      title: "Quiet Window",
      condition: "Thin Liquidity",
      weight: "WEAK",
      desc: "Price moves easily with low participation. High noise risk.",
      color: "text-slate-400",
      bg: "bg-slate-50",
      border: "border-slate-200",
      icon: <Wind size={18}/>
    },
    {
      title: "Active Window",
      condition: "High Participation",
      weight: "USEFUL",
      desc: "Movement backed by clean flow and professional volume.",
      color: "text-teal-500",
      bg: "bg-teal-50",
      border: "border-teal-200",
      icon: <Activity size={18}/>
    },
    {
      title: "News / Event",
      condition: "Fast Volatility",
      weight: "UNSTABLE",
      desc: "Emotional repricing. Candle may not hold its shape.",
      color: "text-rose-500",
      bg: "bg-rose-50",
      border: "border-rose-200",
      icon: <Zap size={18}/>
    },
    {
      title: "Major Level",
      condition: "Structural Context",
      weight: "SIGNIFICANT",
      desc: "Candle interacts with high-timeframe supply or demand.",
      color: "text-amber-500",
      bg: "bg-amber-50",
      border: "border-amber-200",
      icon: <Target size={18}/>
    }
  ];

  return (
    <InstitutionalFrame label="Evidence Weight Diagnostic" id="GOLD-WEIGHT-0.4">
      <div className="w-full max-w-5xl flex flex-col gap-10">
        <div className="p-12 bg-white border-2 border-slate-100 rounded-[3rem] shadow-sm relative overflow-hidden">
           <div className="grid grid-cols-[0.4fr_0.6fr] gap-12 relative z-10">
              {/* Central Candle (Fixed Shape) */}
              <div className="flex flex-col items-center justify-center p-12 bg-slate-50 border border-slate-100 rounded-[2.5rem] relative">
                 <div className="absolute top-6 left-6 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-slate-300" />
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Fixed Record</span>
                 </div>
                 
                 <div className="flex flex-col items-center gap-1">
                    <div className="w-[2px] h-20 bg-slate-300" />
                    <div className="w-12 h-16 bg-[#071B36] border-2 border-slate-700 shadow-xl" />
                    <div className="w-[2px] h-8 bg-slate-300" />
                 </div>

                 <div className="mt-8 flex flex-col items-center">
                    <span className="text-[9px] font-black text-[#071B36] uppercase tracking-[0.2em]">Long Upper Wick</span>
                    <span className="text-[8px] font-bold text-slate-400 uppercase italic">"The Rejection Shape"</span>
                 </div>
              </div>

              {/* Variable Contexts */}
              <div className="flex flex-col gap-4">
                 <div className="grid grid-cols-2 gap-3">
                    {scenarios.map((s, i) => (
                       <button 
                          key={i}
                          onClick={() => setActiveTab(i)}
                          className={cn(
                             "p-6 rounded-2xl border-2 transition-all text-left flex flex-col gap-2",
                             activeTab === i ? `${s.bg} ${s.border} shadow-md` : "bg-white border-transparent opacity-40 hover:opacity-80"
                          )}
                       >
                          <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mb-1", activeTab === i ? "bg-white shadow-sm" : "bg-slate-50")}>
                             {s.icon}
                          </div>
                          <span className="text-[10px] font-black text-[#071B36] uppercase tracking-tight leading-none">{s.title}</span>
                          <span className={cn("text-[8px] font-black uppercase tracking-widest", s.color)}>{s.weight} WEIGHT</span>
                       </button>
                    ))}
                 </div>

                 <div className="mt-4 p-8 bg-[#071B36] rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                       <Scale size={60} className="text-teal-400" />
                    </div>
                    <div className="flex flex-col gap-3 relative z-10">
                       <span className="text-[10px] font-black text-teal-400 uppercase tracking-[0.4em]">Audit Interpretation</span>
                       <h4 className="text-xl font-black text-white uppercase italic tracking-tighter">{scenarios[activeTab].condition}</h4>
                       <p className="text-sm font-bold text-slate-300 leading-relaxed max-w-sm">
                          {scenarios[activeTab].desc}
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        <div className="p-8 bg-slate-900 rounded-[2.5rem] flex items-center justify-between border-b-4 border-amber-500 shadow-xl">
           <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-500">
                 <Workflow size={24} />
              </div>
              <div className="flex flex-col">
                 <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest mb-1">Evidence Law</span>
                 <h4 className="text-lg font-bold text-white uppercase tracking-tight italic">Same Gold candle. Different window. Different reading.</h4>
              </div>
           </div>
        </div>

        <MentorInsight 
          text="A 'Rejection Wick' during a quiet Asia session might just be a lack of interest. The same wick during the London/NY overlap at a major structure level is a high-confidence signal of order absorption. The shape is just the cover; the context is the story."
          analogy="A red light (The Candle) in an empty parking lot (Quiet Window) vs. a red light at a busy intersection (Active Window). They look identical, but ignoring one has much higher consequences than the other."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Gold Adaptation: 4. Macro News Can Distort Gold Timeframes
 * Visualizing the instability and "Fake Clarity" of news-driven Gold volatility.
 */
export const GoldEventDistortionBoard = () => {
  return (
    <InstitutionalFrame label="Gold Event Distortion Audit" id="GOLD-EVENT-0.4">
      <div className="w-full max-w-5xl flex flex-col gap-10">
        <div className="grid grid-cols-2 gap-10">
           {/* Normal Participation */}
           <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-teal-500" />
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Normal Participation</span>
              </div>
              <div className="p-12 bg-white border-2 border-slate-100 rounded-[3rem] shadow-sm flex flex-col items-center justify-center min-h-[400px] relative overflow-hidden">
                 <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:20px_100%]" />
                 
                 <div className="flex flex-col items-center gap-1 relative z-10">
                    <div className="w-[1.5px] h-10 bg-slate-200" />
                    <div className="w-12 h-24 bg-teal-500 border-2 border-teal-600 shadow-md" />
                    <div className="w-[1.5px] h-6 bg-slate-200" />
                 </div>

                 <div className="mt-8 px-4 py-2 bg-teal-50 border border-teal-100 rounded-xl">
                    <span className="text-[9px] font-black text-teal-700 uppercase">Balanced Flow</span>
                 </div>
              </div>
           </div>

           {/* Macro Event Volatility */}
           <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                 <span className="text-[10px] font-black text-rose-500 uppercase tracking-widest">Macro Event Window (Data/Rates)</span>
              </div>
              <div className="p-12 bg-[#071B36] border-2 border-slate-800 rounded-[3rem] shadow-2xl flex flex-col items-center justify-center min-h-[400px] relative overflow-hidden">
                 <div className="absolute inset-0 bg-rose-500/5" />
                 <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:20px_20px]" />
                 
                 <div className="flex flex-col items-center gap-1 relative z-10">
                    <div className="w-[3px] h-32 bg-rose-500/40" />
                    <div className="w-14 h-48 bg-rose-500 border-2 border-rose-400 shadow-[0_0_40px_rgba(244,63,94,0.4)] relative">
                       <div className="absolute -inset-4 border border-rose-500/10 animate-ping rounded-sm" />
                       <div className="absolute -right-20 top-1/2 -translate-y-1/2 flex flex-col items-center">
                          <ShieldAlert size={16} className="text-rose-400 mb-1" />
                          <span className="text-[7px] font-black text-rose-400 uppercase whitespace-nowrap tracking-[0.2em]">Extreme Spread</span>
                       </div>
                    </div>
                    <div className="w-[3px] h-24 bg-rose-500/40" />
                 </div>

                 <div className="mt-10 flex flex-col items-center gap-2">
                    <div className="px-4 py-2 bg-rose-500/20 border border-rose-500/40 rounded-xl flex items-center gap-2">
                       <Zap size={14} className="text-rose-400" />
                       <span className="text-[9px] font-black text-rose-400 uppercase tracking-tighter italic">Macro Distortion</span>
                    </div>
                    <span className="text-[8px] font-bold text-slate-500 uppercase italic">"Loud but Unclear"</span>
                 </div>
              </div>
           </div>
        </div>

        <div className="p-8 bg-slate-900 rounded-[2.5rem] flex items-center justify-between border-b-4 border-rose-500 shadow-xl">
           <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
                 <ShieldAlert size={28} />
              </div>
              <div className="flex flex-col">
                 <span className="text-[10px] font-black text-rose-400 uppercase tracking-widest mb-1">XAU/USD Law</span>
                 <h4 className="text-lg font-bold text-white uppercase tracking-tight italic">A loud Gold candle is not automatically a clear Gold candle.</h4>
              </div>
           </div>
        </div>

        <MentorInsight 
          text="Macro news in Gold is like an explosion. It creates massive energy (Volatility), but also smoke and debris (Spread/Distortion). The disciplined learner doesn't try to read the chart while the smoke is still thick. You wait for the air to clear (Structure/Close) before calling direction."
          analogy="The difference between a plane flying at 30,000 feet (Normal Participation) and a plane in a hurricane (News Event). The pilot doesn't try to look at the ground; they trust the instruments and wait for the storm to pass."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Gold Adaptation: 5. London, New York, and Futures Participation
 * Visualizing the "Evidence Weight" increase through professional participation layers.
 */
export const GoldParticipationBoard = () => {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  const layers = [
    { 
      label: "Retail XAU/USD", 
      val: "Visible Surface", 
      desc: "The candle you see on your chart. It is the record of all underlying forces.", 
      icon: <Eye size={12}/>,
      color: "bg-slate-100 text-slate-500 border-slate-200"
    },
    { 
      label: "London Activity", 
      val: "Positioning Layer", 
      desc: "Initial professional participation, liquidity building, and trend initiation.", 
      icon: <Globe size={12}/>,
      color: "bg-blue-50 text-blue-600 border-blue-200"
    },
    { 
      label: "NY / Futures", 
      val: "Volume Engine", 
      desc: "US Data, Rate expectations, and heavy futures contract participation.", 
      icon: <Activity size={12}/>,
      color: "bg-amber-50 text-amber-600 border-amber-200"
    },
    { 
      label: "Macro Attention", 
      val: "Weight Multiplier", 
      desc: "USD Index, Treasury Yields, and global risk sentiment alignment.", 
      icon: <ShieldCheck size={12}/>,
      color: "bg-teal-50 text-teal-600 border-teal-200"
    }
  ];

  return (
    <InstitutionalFrame label="Participation Weight Audit" id="GOLD-PART-0.4">
      <div className="w-full max-w-5xl flex flex-col gap-10">
        <div className="p-12 bg-white border-2 border-slate-100 rounded-[3rem] shadow-sm relative overflow-hidden">
           {/* Background Grid */}
           <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(0,0,0,0.1)_2px,transparent_2px),linear-gradient(90deg,rgba(0,0,0,0.1)_2px,transparent_2px)] bg-[length:40px_40px]" />
           
           <div className="flex flex-col gap-12 relative z-10">
              <div className="flex items-center justify-between">
                 <div className="flex flex-col">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Evidence Depth</span>
                    <h4 className="text-3xl font-black text-[#071B36] uppercase italic tracking-tighter">XAU/USD Participation Stack</h4>
                 </div>
                 <div className="flex items-center gap-3 px-6 py-3 bg-[#071B36] rounded-2xl">
                    <Layers size={18} className="text-teal-400" />
                    <span className="text-xs font-black text-white uppercase tracking-widest">Weight Layered</span>
                 </div>
              </div>

              {/* Stack Visualization */}
              <div className="flex flex-col-reverse gap-3 max-w-2xl mx-auto w-full">
                 {layers.map((layer, i) => (
                    <motion.button
                       key={i}
                       onMouseEnter={() => setActiveLayer(i)}
                       onMouseLeave={() => setActiveLayer(null)}
                       className={cn(
                          "w-full p-6 rounded-2xl border-2 transition-all flex items-center justify-between group",
                          activeLayer === i ? `${layer.color} shadow-lg -translate-y-1` : "bg-white border-slate-100 hover:border-slate-200"
                       )}
                    >
                       <div className="flex items-center gap-6">
                          <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center transition-colors", 
                             activeLayer === i ? "bg-white shadow-sm" : "bg-slate-50 text-slate-400"
                          )}>
                             {layer.icon}
                          </div>
                          <div className="flex flex-col text-left">
                             <span className={cn("text-[8px] font-black uppercase tracking-[0.2em]", activeLayer === i ? "" : "text-slate-400")}>{layer.label}</span>
                             <span className={cn("text-xs font-bold uppercase", activeLayer === i ? "" : "text-[#071B36]")}>{layer.val}</span>
                          </div>
                       </div>
                       <div className={cn("text-[9px] font-black uppercase italic transition-all", activeLayer === i ? "opacity-100" : "opacity-0")}>
                          + Layered Evidence
                       </div>
                    </motion.button>
                 ))}
              </div>

              {/* Dynamic Insight */}
              <AnimatePresence mode="wait">
                 {activeLayer !== null ? (
                    <motion.div 
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       exit={{ opacity: 0, y: -10 }}
                       className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-200 text-center"
                    >
                       <p className="text-sm font-bold text-slate-600 leading-relaxed max-w-xl mx-auto">
                          {layers[activeLayer].desc}
                       </p>
                    </motion.div>
                 ) : (
                    <div className="p-8 border border-dashed border-slate-200 rounded-[2.5rem] text-center">
                       <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest italic">Hover over layers to audit participation depth</span>
                    </div>
                 )}
              </AnimatePresence>
           </div>
        </div>

        <div className="p-8 bg-[#071B36] rounded-[2.5rem] border border-white/10 flex items-center justify-between shadow-xl">
           <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400">
                 <ShieldCheck size={28} />
              </div>
              <div className="flex flex-col">
                 <span className="text-[10px] font-black text-teal-400 uppercase tracking-widest mb-1">Diagnostic Rule</span>
                 <h4 className="text-lg font-bold text-white uppercase tracking-tight italic">Participation adds weight, not certainty.</h4>
              </div>
           </div>
        </div>

        <MentorInsight 
          text="Retail traders look at the candle. Professional traders look at the participation stack that built the candle. When London, New York, and Futures participation are aligned, the candle carries 'Evidence Weight'. But even then, weight is not a guarantee—it is just higher-quality probability."
          analogy="The difference between one person shouting in a quiet room (Asia/Retail) and a stadium full of people cheering (NY/Macro). The 'Volume' is different, but they could still both be cheering for the wrong thing."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Gold Adaptation: 6. Higher-Timeframe Gold Location Comes First
 * Visualizing the "Location over Reaction" rule for Gold.
 */
export const GoldLocationContextBoard = () => {
  const [showHTF, setShowHTF] = useState(false);

  return (
    <InstitutionalFrame label="Gold Location Audit" id="GOLD-LOC-0.4">
      <div className="w-full max-w-5xl flex flex-col gap-10">
        <div className="p-12 bg-white border-2 border-slate-100 rounded-[3rem] shadow-sm relative overflow-hidden">
           {/* Background Grid */}
           <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(0,0,0,0.1)_2px,transparent_2px),linear-gradient(90deg,rgba(0,0,0,0.1)_2px,transparent_2px)] bg-[length:40px_40px]" />
           
           <div className="flex flex-col gap-10 relative z-10">
              <div className="flex items-center justify-between">
                 <div className="flex flex-col">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Structural Hierarchy</span>
                    <h4 className="text-3xl font-black text-[#071B36] uppercase italic tracking-tighter">Location vs. Reaction</h4>
                 </div>
                 <button 
                    onClick={() => setShowHTF(!showHTF)}
                    className={cn(
                       "flex items-center gap-4 px-6 py-3 rounded-2xl shadow-lg transition-all",
                       showHTF ? "bg-[#071B36] text-white shadow-[#071B36]/20" : "bg-amber-500 text-white shadow-amber-500/20"
                    )}
                 >
                    <Layers size={20} />
                    <span className="text-xs font-black uppercase tracking-widest">{showHTF ? "Hide HTF Context" : "View HTF Context"}</span>
                 </button>
              </div>

              <div className="grid grid-cols-1 gap-8">
                 {/* The Chart Comparison */}
                 <div className="p-12 bg-slate-50 border border-slate-100 rounded-[2.5rem] relative min-h-[400px] flex items-center justify-center overflow-hidden">
                    {/* HTF Layer (Invisible/Visible) */}
                    <AnimatePresence>
                       {showHTF && (
                          <motion.div 
                             initial={{ opacity: 0 }}
                             animate={{ opacity: 1 }}
                             exit={{ opacity: 0 }}
                             className="absolute inset-0 flex flex-col justify-between"
                          >
                             {/* Major Supply Zone */}
                             <div className="h-24 bg-rose-500/5 border-b-2 border-dashed border-rose-500/20 flex items-center px-12">
                                <div className="flex flex-col">
                                   <span className="text-[10px] font-black text-rose-500 uppercase tracking-widest leading-none mb-1">HTF Supply</span>
                                   <span className="text-[8px] font-bold text-slate-400 uppercase">Previous Rejection Zone</span>
                                </div>
                             </div>
                             {/* Major Demand Zone */}
                             <div className="h-24 bg-teal-500/5 border-t-2 border-dashed border-teal-500/20" />
                          </motion.div>
                       )}
                    </AnimatePresence>

                    {/* LTF Movement */}
                    <div className="flex flex-col items-center gap-2 relative z-20">
                       <div className="flex flex-col items-center gap-1">
                          <div className="w-[2px] h-12 bg-slate-200" />
                          <motion.div 
                             animate={{ y: showHTF ? -80 : 0 }}
                             className={cn("w-14 h-32 border-2 shadow-2xl transition-all duration-700", 
                                showHTF ? "bg-white border-rose-500 opacity-60" : "bg-teal-500 border-teal-600"
                             )}
                          />
                          <div className="w-[2px] h-8 bg-slate-200" />
                       </div>
                       <div className="mt-4 flex flex-col items-center text-center">
                          <span className="text-[10px] font-black text-[#071B36] uppercase tracking-[0.2em]">Local 15m Momentum</span>
                          <span className={cn("text-[8px] font-bold uppercase transition-colors", showHTF ? "text-rose-500" : "text-slate-400")}>
                             {showHTF ? "Blocked by Supply" : "Looks Strong Alone"}
                          </span>
                       </div>
                    </div>

                    {/* Status Badge */}
                    <div className="absolute bottom-8 right-8">
                       <div className={cn("px-6 py-3 rounded-xl border-2 flex items-center gap-3 transition-all", 
                          showHTF ? "bg-rose-50 border-rose-200 text-rose-600" : "bg-teal-50 border-teal-200 text-teal-600"
                       )}>
                          {showHTF ? <ShieldAlert size={16}/> : <Target size={16}/>}
                          <span className="text-[10px] font-black uppercase tracking-widest">
                             {showHTF ? "Context-Limited" : "Incomplete Reading"}
                          </span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        <div className="p-8 bg-slate-900 rounded-[2.5rem] flex items-center justify-between border-l-8 border-amber-500 shadow-xl">
           <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-500">
                 <MapPin size={24} />
              </div>
              <div className="flex flex-col">
                 <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest mb-1">Strategic Anchor</span>
                 <h4 className="text-lg font-bold text-white uppercase tracking-tight italic">In Gold, location comes before reaction.</h4>
              </div>
           </div>
        </div>

        <MentorInsight 
          text="Gold's volatility creates 'Reaction Heat'. A 15-minute candle can look incredibly bullish in isolation, but if that move is simply traveling into a 4-hour wall, the 'Reaction' is low-quality. You must first ask 'Where am I?' (Location) before you ask 'What is price doing?' (Reaction)."
          analogy="A sprinter running as fast as they can (LTF Momentum) directly into a brick wall (HTF Supply). The speed doesn't matter if they have no room to run."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Gold Adaptation: 7. Lower-Timeframe Gold Behavior: Wicks, Sweeps, and Reaction
 * Visualizing the "Behavior Lens" vs "Location Anchor" rule.
 */
export const GoldLocalBehaviorBoard = () => {
  const [activeBehavior, setActiveBehavior] = useState("sweep");

  const behaviors = {
    sweep: {
      label: "Liquidity Sweep",
      desc: "Fast move beyond a high/low that immediately returns. Shows absorption.",
      impact: "REJECTION",
      icon: <Target size={14}/>
    },
    failed: {
      label: "Failed Breakout",
      desc: "Candle closes above a level but subsequent candles fail to hold.",
      impact: "TRAP RISK",
      icon: <ShieldAlert size={14}/>
    },
    slowing: {
      label: "Slowing Candles",
      desc: "Momentum decreases as price approaches a known HTF level.",
      impact: "FRICTION",
      icon: <Wind size={14}/>
    },
    expansion: {
      label: "Fast Expansion",
      desc: "Violent price travel. Loud, emotional, and often unstable.",
      impact: "VOLATILITY",
      icon: <Zap size={14}/>
    }
  };

  const current = behaviors[activeBehavior as keyof typeof behaviors];

  return (
    <InstitutionalFrame label="Gold Behavior Lens" id="GOLD-BEH-0.4">
      <div className="w-full max-w-5xl flex flex-col gap-10">
        <div className="grid grid-cols-[0.35fr_0.65fr] gap-10">
           {/* HTF Location (The Anchor) */}
           <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-[#071B36]" />
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">HTF Anchor (Location)</span>
              </div>
              <div className="p-10 bg-[#071B36] border-2 border-slate-800 rounded-[3rem] shadow-xl flex flex-col justify-between min-h-[400px]">
                 <div className="h-16 border-b-2 border-dashed border-white/10 flex items-center px-4">
                    <span className="text-[9px] font-black text-teal-400 uppercase tracking-widest italic">4H Resistance Area</span>
                 </div>
                 <div className="flex-1 flex flex-col items-center justify-center relative">
                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.05]">
                       <Compass size={160} className="text-white" />
                    </div>
                    <div className="flex flex-col items-center text-center relative z-10 px-6 gap-3">
                       <Map size={32} className="text-teal-400" />
                       <p className="text-[10px] font-bold text-white uppercase leading-tight italic">
                          "I am at a high-timeframe supply zone. I am watching for local behavior."
                       </p>
                    </div>
                 </div>
                 <div className="h-12 bg-white/5 rounded-2xl flex items-center justify-center">
                    <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Location Fixed</span>
                 </div>
              </div>
           </div>

           {/* LTF Behavior (The Lens) */}
           <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                 <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest">LTF Lens (Behavior)</span>
              </div>
              <div className="p-12 bg-white border-2 border-slate-100 rounded-[3rem] shadow-sm flex flex-col gap-10 min-h-[400px]">
                 {/* Behavior Options */}
                 <div className="grid grid-cols-2 gap-3">
                    {Object.entries(behaviors).map(([key, b]) => (
                       <button 
                          key={key}
                          onClick={() => setActiveBehavior(key)}
                          className={cn(
                             "p-4 rounded-2xl border-2 transition-all flex items-center gap-4 text-left",
                             activeBehavior === key ? "bg-amber-50 border-amber-200 shadow-sm" : "bg-white border-transparent opacity-50"
                          )}
                       >
                          <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", activeBehavior === key ? "bg-white text-amber-600" : "bg-slate-50")}>
                             {b.icon}
                          </div>
                          <span className="text-[9px] font-black uppercase text-[#071B36] tracking-tight">{b.label}</span>
                       </button>
                    ))}
                 </div>

                 {/* Visualization */}
                 <div className="flex-1 p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] flex flex-col gap-6 justify-center relative">
                    <div className="flex flex-col gap-1">
                       <span className="text-[10px] font-black text-amber-500 uppercase tracking-[0.3em]">Local Impact</span>
                       <h4 className="text-xl font-black text-[#071B36] uppercase italic tracking-tighter">{current.impact}</h4>
                    </div>
                    <p className="text-xs font-bold text-slate-500 leading-relaxed max-w-sm italic">
                       "{current.desc}"
                    </p>
                    <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-[0.03]">
                       <Search size={100} className="text-[#071B36]" />
                    </div>
                 </div>
              </div>
           </div>
        </div>

        <div className="p-8 bg-slate-900 rounded-[2.5rem] flex items-center justify-between border-b-4 border-amber-500 shadow-xl">
           <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-500">
                 <Search size={24} />
              </div>
              <div className="flex flex-col">
                 <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest mb-1">Evidence Process</span>
                 <h4 className="text-lg font-bold text-white uppercase tracking-tight italic">Use small Gold charts to observe behavior, not to invent the whole story.</h4>
              </div>
           </div>
        </div>

        <MentorInsight 
          text="A lower-timeframe sweep or failed break in Gold is only meaningful because of where it happens. If price is in the middle of nowhere, a 5-minute wick is just noise. If price is at a 4-hour level, that same 5-minute wick is clinical behavior. Context is the frame; detail is the picture."
          analogy="Using a microscope (LTF) to look at a slide. The microscope shows you detail you can't see with your eyes, but you must first know what you put on the slide (HTF Location) before the detail makes any sense."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Gold Adaptation: 8. Multi-Timeframe Gold Reading Process
 * Visualizing the clinical 6-step Gold audit stack.
 */
export const GoldReadingStackBoard = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { 
      label: "HTF Location", 
      icon: <MapPin size={18}/>, 
      desc: "Where is Gold in the broader structure? (Levels/Ranges)",
      color: "border-slate-200 text-slate-400 bg-slate-50"
    },
    { 
      label: "Market Window", 
      icon: <Clock size={18}/>, 
      desc: "Timing and condition: Asia, London, NY, or Quiet/Active?",
      color: "border-blue-200 text-blue-500 bg-blue-50"
    },
    { 
      label: "Macro Context", 
      icon: <Zap size={18}/>, 
      desc: "USD Index, Treasury Yields, Rates, or News pressure?",
      color: "border-rose-200 text-rose-500 bg-rose-50"
    },
    { 
      label: "Working Structure", 
      icon: <Layers size={18}/>, 
      desc: "The current structural environment (1H/15m trend/range).",
      color: "border-teal-200 text-teal-500 bg-teal-50"
    },
    { 
      label: "LTF Behavior", 
      icon: <Search size={18}/>, 
      desc: "Local reaction at levels (Sweeps, Rejections, Momentum).",
      color: "border-amber-200 text-amber-500 bg-amber-50"
    },
    { 
      label: "Reading Quality", 
      icon: <ShieldCheck size={18}/>, 
      desc: "Clinical result: Clear, Mixed, or Unclear evidence.",
      color: "border-emerald-200 text-emerald-500 bg-emerald-50"
    }
  ];

  return (
    <InstitutionalFrame label="Clinical Gold Audit" id="GOLD-STACK-0.4">
      <div className="w-full max-w-5xl flex flex-col gap-10">
        <div className="p-12 bg-white border-2 border-slate-100 rounded-[3rem] shadow-sm relative overflow-hidden">
           <div className="grid grid-cols-[0.4fr_0.6fr] gap-12 relative z-10">
              {/* Stack Steps */}
              <div className="flex flex-col gap-3">
                 {steps.map((s, i) => (
                    <button
                       key={i}
                       onClick={() => setActiveStep(i)}
                       className={cn(
                          "w-full p-5 rounded-2xl border-2 transition-all flex items-center gap-4 text-left group",
                          activeStep === i ? `${s.color} shadow-md` : "bg-white border-transparent opacity-40 hover:opacity-100"
                       )}
                    >
                       <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center transition-colors", 
                          activeStep === i ? "bg-white shadow-sm" : "bg-slate-50")}>
                          {s.icon}
                       </div>
                       <div className="flex flex-col">
                          <span className="text-[10px] font-black uppercase tracking-tight leading-none mb-1">Step {i + 1}</span>
                          <span className="text-xs font-bold uppercase tracking-tight">{s.label}</span>
                       </div>
                       {activeStep === i && (
                          <div className="ml-auto">
                             <ArrowRight size={14} className="animate-pulse" />
                          </div>
                       )}
                    </button>
                 ))}
              </div>

              {/* Detailed Output */}
              <div className="flex flex-col gap-8 h-full">
                 <div className="flex-1 p-10 bg-[#071B36] rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col justify-center">
                    <div className="absolute top-0 right-0 p-10 opacity-10">
                       <ClipboardList size={100} className="text-teal-400" />
                    </div>
                    
                    <div className="flex flex-col gap-4 relative z-10">
                       <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-teal-400" />
                          <span className="text-[10px] font-black text-teal-400 uppercase tracking-[0.4em]">Audit Directive</span>
                       </div>
                       <h4 className="text-2xl font-black text-white uppercase italic tracking-tighter leading-tight">
                          {steps[activeStep].label}
                       </h4>
                       <p className="text-base font-bold text-slate-300 leading-relaxed max-w-sm">
                          {steps[activeStep].desc}
                       </p>
                    </div>

                    <div className="mt-10 pt-8 border-t border-white/10">
                       <div className="flex items-center gap-3 text-slate-500">
                          <Shield size={14} />
                          <span className="text-[9px] font-black uppercase tracking-widest italic">Verification Required</span>
                       </div>
                    </div>
                 </div>

                 <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-amber-500">
                       <AlertTriangle size={14} />
                    </div>
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tight">
                       Do not skip layers. A fast 15m candle is the <span className="text-[#071B36] font-black italic">result</span>, not the starting point.
                    </span>
                 </div>
              </div>
           </div>
        </div>

        <div className="p-8 bg-slate-900 rounded-[2.5rem] flex items-center justify-between border-b-4 border-teal-500 shadow-xl">
           <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400">
                 <ClipboardList size={24} />
              </div>
              <div className="flex flex-col">
                 <span className="text-[10px] font-black text-teal-400 uppercase tracking-widest mb-1">Evidence Law</span>
                 <h4 className="text-lg font-bold text-white uppercase tracking-tight italic">Read Gold from context into behavior, not from speed into emotion.</h4>
              </div>
           </div>
        </div>

        <MentorInsight 
          text="In Gold, the 'Noise' is louder than most other markets. If you start your reading at the 15-minute or 5-minute candle, you are immediately reacting to noise. By moving top-down through Location, Timing, Macro, and Structure, you filter out the noise and find the clinical evidence."
          analogy="A court trial. You don't start with a single witness shouting (The LTF Candle). You start with the crime scene (Location), the timeline (Market Window), the motive (Macro Context), and the forensics (Structure). Only then do you listen to the witness (Behavior)."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Gold Adaptation: 9. Gold Timeframe Conflict Drill
 * A diagnostic practice board testing alignment vs. speed.
 */
export const GoldConflictDrillBoard = () => {
  return (
    <InstitutionalFrame label="Gold Alignment Drill" id="GOLD-DRILL-0.4">
      <div className="w-full max-w-5xl flex flex-col gap-10">
        <div className="p-12 bg-white border-2 border-slate-100 rounded-[3rem] shadow-sm relative overflow-hidden">
           <div className="grid grid-cols-[0.55fr_0.45fr] gap-12 relative z-10">
              {/* Evidence Stack */}
              <div className="flex flex-col gap-4">
                 <div className="flex items-center gap-3 mb-4">
                    <Search size={20} className="text-amber-500" />
                    <span className="text-xs font-black text-[#071B36] uppercase tracking-widest">Evidence Audit</span>
                 </div>
                 
                 <div className="p-6 bg-rose-50 border border-rose-100 rounded-2xl flex items-center justify-between">
                    <div className="flex flex-col">
                       <span className="text-[9px] font-black text-rose-500 uppercase tracking-widest leading-none mb-1">4H Chart</span>
                       <span className="text-xs font-bold text-[#071B36] uppercase tracking-tight italic">Near Rejection Zone</span>
                    </div>
                    <ShieldAlert size={16} className="text-rose-400" />
                 </div>

                 <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-between">
                    <div className="flex flex-col">
                       <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">1H Chart</span>
                       <span className="text-xs font-bold text-[#071B36] uppercase tracking-tight italic">Sideways / Mixed Range</span>
                    </div>
                    <Activity size={16} className="text-slate-400" />
                 </div>

                 <div className="p-6 bg-teal-50 border border-teal-100 rounded-2xl flex items-center justify-between">
                    <div className="flex flex-col">
                       <span className="text-[9px] font-black text-teal-600 uppercase tracking-widest leading-none mb-1">15m Chart</span>
                       <span className="text-xs font-bold text-[#071B36] uppercase tracking-tight italic">Bullish Momentum Candle</span>
                    </div>
                    <Zap size={16} className="text-teal-500" />
                 </div>

                 <div className="p-6 bg-amber-50 border border-amber-100 rounded-2xl flex items-center justify-between">
                    <div className="flex flex-col">
                       <span className="text-[9px] font-black text-amber-600 uppercase tracking-widest leading-none mb-1">Close Behavior</span>
                       <span className="text-xs font-bold text-[#071B36] uppercase tracking-tight italic">Weak Close / Imperfect</span>
                    </div>
                    <Crosshair size={16} className="text-amber-500" />
                 </div>
              </div>

              {/* The Reading */}
              <div className="flex flex-col gap-6">
                 <div className="p-10 bg-[#071B36] rounded-[2.5rem] shadow-2xl flex-1 flex flex-col justify-center text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:30px_30px]" />
                    
                    <div className="flex flex-col gap-4 relative z-10">
                       <span className="text-[10px] font-black text-amber-500 uppercase tracking-[0.4em]">Clinical Verdict</span>
                       <h4 className="text-3xl font-black text-white uppercase italic tracking-tighter">MIXED READING</h4>
                       <div className="w-12 h-1 bg-amber-500 mx-auto rounded-full" />
                       <p className="text-sm font-bold text-slate-400 leading-relaxed italic">
                          "Lower-timeframe speed is active, but not supported by location."
                       </p>
                    </div>
                 </div>

                 <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-rose-500">
                       <AlertOctagon size={20} />
                    </div>
                    <span className="text-[10px] font-black text-slate-500 uppercase leading-tight">
                       Speed without <span className="text-[#071B36]">structural alignment</span> is high-risk evidence in Gold.
                    </span>
                 </div>
              </div>
           </div>
        </div>

        <div className="p-8 bg-slate-900 rounded-[2.5rem] flex items-center justify-between border-b-4 border-amber-500 shadow-xl">
           <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-500">
                 <Scale size={24} />
              </div>
              <div className="flex flex-col">
                 <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest mb-1">Diagnostic Rule</span>
                 <h4 className="text-lg font-bold text-white uppercase tracking-tight italic">Fast does not always mean aligned.</h4>
              </div>
           </div>
        </div>

        <MentorInsight 
          text="This is the most common emotional trap in Gold. You see a green 15-minute candle during New York and you want to call direction. But the clinical audit shows that the 'Wall' (4H rejection) is still there. In Gold, you don't bet against the wall just because the runner is fast."
          analogy="A fast car approaching a closed gate. The speed is impressive, but it doesn't mean the gate is open. You wait to see the gate open (Structural Break) before you call it a clear path."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Gold Adaptation: 10. Gold Debrief: Time, Volatility, Context, Alignment
 * Final synthesis of the Gold Timeframe Reading process.
 */
export const GoldRoadwayDebrief = () => {
  const steps = [
    { label: "Asset", val: "XAU/USD", icon: <Target size={14}/> },
    { label: "Timeframe", val: "Candle Duration", icon: <Clock size={14}/> },
    { label: "Market Window", val: "Timing & Condition", icon: <Timer size={14}/> },
    { label: "Volatility", val: "Movement Quality", icon: <Activity size={14}/> },
    { label: "Macro Context", val: "USD / Rates / News", icon: <Zap size={14}/> },
    { label: "HTF Location", val: "Structural Anchor", icon: <MapPin size={14}/> },
    { label: "LTF Behavior", val: "Local Reaction", icon: <Search size={14}/> },
    { label: "Reading Quality", val: "Clinical Verdict", icon: <ShieldCheck size={14}/> }
  ];

  return (
    <InstitutionalFrame label="XAU/USD Roadway Debrief" id="GOLD-DEBRIEF-0.4">
      <div className="w-full max-w-5xl flex flex-col gap-10">
        <div className="p-12 bg-white border-2 border-slate-100 rounded-[3rem] shadow-sm relative overflow-hidden">
           <div className="flex flex-col gap-12 relative z-10">
              <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                 <div className="w-16 h-16 rounded-[2rem] bg-[#071B36] flex items-center justify-center text-teal-400 mb-6 shadow-xl">
                    <Fingerprint size={32} />
                 </div>
                 <h4 className="text-4xl font-black text-[#071B36] uppercase italic tracking-tighter leading-none mb-4">
                    The 8-Step Gold Audit
                 </h4>
                 <p className="text-base font-bold text-slate-400 leading-relaxed">
                    You have graduated from reading isolated fast moves. You now possess a clinical process for auditing Gold evidence across time and context.
                 </p>
              </div>

              <div className="grid grid-cols-4 gap-4">
                 {steps.map((s, i) => (
                    <div key={i} className="p-6 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col gap-3">
                       <div className="flex items-center gap-2">
                          <div className="text-[#071B36]">{s.icon}</div>
                          <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none italic">Step {i + 1}</span>
                       </div>
                       <div className="flex flex-col">
                          <span className="text-[10px] font-black text-[#071B36] uppercase tracking-tight leading-none mb-1">{s.label}</span>
                          <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tight">{s.val}</span>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
           <div className="p-8 bg-slate-900 rounded-[2.5rem] flex items-center gap-6 border-b-4 border-teal-500 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400">
                 <Compass size={24} />
              </div>
              <div className="flex flex-col">
                 <span className="text-[10px] font-black text-teal-400 uppercase tracking-widest mb-1">Final Law</span>
                 <h4 className="text-lg font-bold text-white uppercase tracking-tight italic">Context anchors Reaction.</h4>
              </div>
           </div>

           <div className="p-8 bg-[#071B36] rounded-[2.5rem] flex items-center justify-between border-b-4 border-amber-500 shadow-xl group cursor-pointer">
              <div className="flex items-center gap-6">
                 <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-500">
                    <ArrowRightCircle size={24} />
                 </div>
                 <div className="flex flex-col">
                    <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest mb-1">Bridge Forward</span>
                    <h4 className="text-lg font-bold text-white uppercase tracking-tight italic">Next: Structure Reading</h4>
                 </div>
              </div>
           </div>
        </div>

        <MentorInsight 
          text="Gold is one of the most emotional markets in the world because of its speed. By applying this 8-step audit, you are removing the emotion and replacing it with a clinical diagnostic. You are no longer a passenger in Gold's volatility; you are the auditor of its evidence."
          analogy="A professional pilot. They don't just 'fly' (Trade). They follow a checklist before every move. Even if the plane is fast and the sky is clear, they audit the instruments. You are now a professional pilot of XAU/USD evidence."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Forex Adaptation: 8. Multi-Timeframe Forex Reading Process
 * Visualizing the clinical 6-step Forex audit stack.
 */
export const ForexReadingStackBoard = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { 
      label: "HTF Location", 
      icon: <MapPin size={18}/>, 
      desc: "Identify the broader 'Wall' or 'Gap' on the 4H/Daily chart.",
      color: "border-slate-200 text-slate-400 bg-slate-50"
    },
    { 
      label: "Session Timing", 
      icon: <Clock size={18}/>, 
      desc: "Is it London, NY, Asia, or an Overlap? Determine participation quality.",
      color: "border-blue-200 text-blue-500 bg-blue-50"
    },
    { 
      label: "Event Pressure", 
      icon: <Zap size={18}/>, 
      desc: "Check for high-impact news (NFP, CPI, Rates) that could distort price.",
      color: "border-rose-200 text-rose-500 bg-rose-50"
    },
    { 
      label: "Working Structure", 
      icon: <Layers size={18}/>, 
      desc: "The current 1H/15m structural environment and trend flow.",
      color: "border-teal-200 text-teal-500 bg-teal-50"
    },
    { 
      label: "Local Behavior", 
      icon: <Search size={18}/>, 
      desc: "Detailed reaction at levels (Wicks, Sweeps, Friction) on LTF.",
      color: "border-amber-200 text-amber-500 bg-amber-50"
    },
    { 
      label: "Reading Quality", 
      icon: <ShieldCheck size={18}/>, 
      desc: "The final verdict: Is the evidence aligned or in conflict?",
      color: "border-emerald-200 text-emerald-500 bg-emerald-50"
    }
  ];

  return (
    <InstitutionalFrame label="Clinical Forex Audit" id="FOREX-STACK-0.4">
      <div className="w-full max-w-5xl flex flex-col gap-10">
        <div className="p-12 bg-white border-2 border-slate-100 rounded-[3rem] shadow-sm relative overflow-hidden">
           <div className="grid grid-cols-[0.4fr_0.6fr] gap-12 relative z-10">
              {/* Stack Steps */}
              <div className="flex flex-col gap-3">
                 {steps.map((s, i) => (
                    <button
                       key={i}
                       onClick={() => setActiveStep(i)}
                       className={cn(
                          "w-full p-5 rounded-2xl border-2 transition-all flex items-center gap-4 text-left group",
                          activeStep === i ? `${s.color} shadow-md` : "bg-white border-transparent opacity-40 hover:opacity-100"
                       )}
                    >
                       <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center transition-colors", 
                          activeStep === i ? "bg-white shadow-sm" : "bg-slate-50")}>
                          {s.icon}
                       </div>
                       <div className="flex flex-col">
                          <span className="text-[10px] font-black uppercase tracking-tight leading-none mb-1">Step {i + 1}</span>
                          <span className="text-xs font-bold uppercase tracking-tight">{s.label}</span>
                       </div>
                    </button>
                 ))}
              </div>

              {/* Detailed Output */}
              <div className="flex flex-col gap-8 h-full">
                 <div className="flex-1 p-10 bg-[#071B36] rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col justify-center">
                    <div className="absolute top-0 right-0 p-10 opacity-10">
                       <Globe size={100} className="text-blue-400" />
                    </div>
                    
                    <div className="flex flex-col gap-4 relative z-10">
                       <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-400" />
                          <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em]">Audit Directive</span>
                       </div>
                       <h4 className="text-2xl font-black text-white uppercase italic tracking-tighter leading-tight">
                          {steps[activeStep].label}
                       </h4>
                       <p className="text-base font-bold text-slate-300 leading-relaxed max-w-sm">
                          {steps[activeStep].desc}
                       </p>
                    </div>
                 </div>

                 <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-blue-500">
                       <Compass size={14} />
                    </div>
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tight">
                       Forex reading is a top-down audit. Never start with the <span className="text-[#071B36] font-black italic">local reaction</span>.
                    </span>
                 </div>
              </div>
           </div>
        </div>

        <div className="p-8 bg-slate-900 rounded-[2.5rem] flex items-center justify-between border-b-4 border-blue-500 shadow-xl">
           <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                 <ClipboardList size={24} />
              </div>
              <div className="flex flex-col">
                 <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">Evidence Process</span>
                 <h4 className="text-lg font-bold text-white uppercase tracking-tight italic">Read Forex from session into behavior, not from speed into emotion.</h4>
              </div>
           </div>
        </div>

        <MentorInsight 
          text="In Forex, time is your greatest tool. By auditing the market from HTF Location down to Local Behavior, you avoid the trap of 'Session Noise.' You are looking for a story that makes sense across all layers before you accept the evidence as clean."
          analogy="A professional investigator. You don't just look at the footprint (LTF Wick). You look at the building (HTF Location), the time of day (Session), the weather (News), and the witness statements (Structure). Only then do you draw a conclusion."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Core Expansion: 6. Timeframe Personality: Trend vs. Range
 * Teaching that different timeframes can hold different 'States' simultaneously.
 */
export const TimeframePersonalityBoard = () => {
  return (
    <InstitutionalFrame label="Timeframe Personality" id="CORE-PERS-0.4">
      <div className="w-full max-w-5xl flex flex-col gap-10">
        <div className="grid grid-cols-2 gap-8">
           <div className="p-10 bg-white border-2 border-slate-100 rounded-[3rem] shadow-sm flex flex-col gap-6">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">
                    <TrendingUp size={20} />
                 </div>
                 <span className="text-sm font-black text-[#071B36] uppercase tracking-tight italic">HTF Personality</span>
              </div>
              <div className="flex-1 p-8 bg-[#071B36] rounded-3xl flex flex-col justify-center text-center">
                 <h4 className="text-2xl font-black text-white uppercase italic tracking-tighter leading-none mb-3">CLEAN TREND</h4>
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Macro Direction</p>
              </div>
              <p className="text-xs font-bold text-slate-500 leading-relaxed italic text-center">
                 "The Higher Timeframe is the Boss. It defines the current market route."
              </p>
           </div>

           <div className="p-10 bg-white border-2 border-slate-100 rounded-[3rem] shadow-sm flex flex-col gap-6">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500">
                    <Shuffle size={20} />
                 </div>
                 <span className="text-sm font-black text-[#071B36] uppercase tracking-tight italic">LTF Personality</span>
              </div>
              <div className="flex-1 p-8 bg-slate-50 rounded-3xl flex flex-col justify-center text-center border-2 border-dashed border-slate-200">
                 <h4 className="text-2xl font-black text-[#071B36] uppercase italic tracking-tighter leading-none mb-3">MESSY RANGE</h4>
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Local Friction</p>
              </div>
              <p className="text-xs font-bold text-slate-500 leading-relaxed italic text-center">
                 "The Lower Timeframe can be noisy or range-bound even inside a trend."
              </p>
           </div>
        </div>

        <div className="p-8 bg-slate-900 rounded-[2.5rem] flex items-center justify-between border-b-4 border-blue-500 shadow-xl">
           <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                 <Fingerprint size={24} />
              </div>
              <div className="flex flex-col">
                 <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">Structural Law</span>
                 <h4 className="text-lg font-bold text-white uppercase tracking-tight italic">Respect the Boss (HTF), but observe the detail (LTF).</h4>
              </div>
           </div>
        </div>

        <MentorInsight 
          text="A timeframe is not just a clock; it's a personality. The 4-hour chart might be a calm, disciplined marathon runner (Trending), while the 5-minute chart is a panicked sprinter trapped in a small room (Ranging). You must identify the personality of each layer before you trust the evidence."
          analogy="A big ship (HTF) moving steadily across the ocean. On the deck, people are running back and forth in a chaotic game (LTF). The chaos on deck doesn't change the direction of the ship."
        />
      </div>
    </InstitutionalFrame>
  );
};

/**
 * Core Expansion: 7. The Evidence Audit Checklist
 * A visual checklist for students to verify their stack.
 */
export const EvidenceAuditChecklistBoard = () => {
  const [checks, setChecks] = useState([false, false, false, false]);

  const toggleCheck = (idx: number) => {
    const newChecks = [...checks];
    newChecks[idx] = !newChecks[idx];
    setChecks(newChecks);
  };

  const items = [
    { label: "HTF Location Identified", desc: "Is price at a major wall or in a clear gap?" },
    { label: "Narrative Alignment Check", desc: "Do the 4H and 1H agree on direction?" },
    { label: "LTF Behavior Audit", desc: "Is the local reaction clean or messy?" },
    { label: "Evidence Weight Balance", desc: "Does the weight of 'Truth' outweigh the 'Noise'?" }
  ];

  const allChecked = checks.every(c => c);

  return (
    <InstitutionalFrame label="Evidence Audit Checklist" id="CORE-AUDIT-0.4">
      <div className="w-full max-w-5xl flex flex-col gap-10">
        <div className="p-12 bg-white border-2 border-slate-100 rounded-[3rem] shadow-sm flex flex-col gap-8">
           <div className="flex items-center justify-between">
              <div className="flex flex-col">
                 <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-1">Pre-Analysis Checklist</span>
                 <h4 className="text-2xl font-black text-[#071B36] uppercase italic tracking-tighter">Clinical Audit</h4>
              </div>
              <div className={cn(
                 "px-6 py-2 rounded-full border-2 transition-all text-[10px] font-black uppercase tracking-widest",
                 allChecked ? "bg-emerald-50 border-emerald-200 text-emerald-600" : "bg-slate-50 border-slate-200 text-slate-400"
              )}>
                 {allChecked ? "Audit Complete" : "Verification Pending"}
              </div>
           </div>

           <div className="grid grid-cols-2 gap-4">
              {items.map((item, i) => (
                 <button
                    key={i}
                    onClick={() => toggleCheck(i)}
                    className={cn(
                       "p-6 rounded-2xl border-2 transition-all flex flex-col text-left gap-2",
                       checks[i] ? "bg-blue-50 border-blue-200 shadow-sm" : "bg-white border-slate-100 opacity-60 hover:opacity-100"
                    )}
                 >
                    <div className="flex items-center justify-between w-full">
                       <span className="text-xs font-black text-[#071B36] uppercase tracking-tight">{item.label}</span>
                       <div className={cn(
                          "w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all",
                          checks[i] ? "bg-[#071B36] border-[#071B36] text-white" : "bg-white border-slate-200"
                       )}>
                          {checks[i] && <Check size={12} strokeWidth={4} />}
                       </div>
                    </div>
                    <p className="text-[10px] font-bold text-slate-500 leading-tight italic">
                       {item.desc}
                    </p>
                 </button>
              ))}
           </div>
        </div>

        <div className="p-8 bg-[#071B36] rounded-[2.5rem] flex items-center justify-between border-b-4 border-teal-500 shadow-xl">
           <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400">
                 <ClipboardCheck size={24} />
              </div>
              <div className="flex flex-col">
                 <span className="text-[10px] font-black text-teal-400 uppercase tracking-widest mb-1">Process Standard</span>
                 <h4 className="text-lg font-bold text-white uppercase tracking-tight italic">The audit must be clinical before the reading is clean.</h4>
              </div>
           </div>
        </div>

        <MentorInsight 
          text="A professional doesn't trust their gut; they trust their process. By manually auditing each layer of evidence, you remove the emotional urge to trade and replace it with the logical discipline of a risk manager. If you can't check every box, you don't have a reading."
          analogy="A surgeon before an operation. They check the patient's identity, the site of the surgery, and the equipment. They don't skip the checklist just because they feel 'confident.'"
        />
      </div>
    </InstitutionalFrame>
  );
};
