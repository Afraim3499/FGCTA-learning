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
  ShieldAlert,
  Database,
  Globe,
  Sun,
  Moon,
  Coffee,
  Clock
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
