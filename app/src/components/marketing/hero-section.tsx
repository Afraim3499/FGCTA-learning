"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, CheckCircle2, TrendingUp, ChevronRight, Book, Layout, Target, Map, Sparkles, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative pt-20 pb-24 px-6 lg:px-8 overflow-hidden bg-[var(--ln-bg)] min-h-[820px] flex items-center">
      {/* Background System */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(15, 23, 42, 0.045) 1px, transparent 1px),
              linear-gradient(90deg, rgba(15, 23, 42, 0.045) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
        
        {/* Soft Wave at Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white to-transparent opacity-60 z-0" />
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10 w-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[42%] space-y-12"
          >
            <div className="space-y-6">
              <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-[var(--ln-teal-500)] flex items-center gap-2">
                <Sparkles size={14} className="animate-pulse" />
                STRUCTURED MARKET EDUCATION PLATFORM
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-[76px] font-black tracking-tight leading-[0.9] text-[var(--ln-navy-900)]">
                Learn the market<br />with structure<span className="text-[var(--ln-teal-500)]">.</span>
              </h1>
              <p className="text-base md:text-lg text-[var(--ln-text-secondary)] max-w-xl leading-relaxed font-medium">
                Visual lessons, guided practice, and chart missions that help beginners build risk awareness and structured market decisions—step by step.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-5">
              <button className="w-full sm:w-auto px-10 py-5 bg-[var(--ln-navy-900)] text-white font-bold rounded-2xl hover:bg-[var(--ln-navy-800)] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_20px_40px_rgba(8,26,54,0.12)] flex items-center justify-center gap-3 group">
                Start Learning
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="w-full sm:w-auto px-10 py-5 bg-white text-[var(--ln-navy-900)] font-bold rounded-2xl border border-[var(--ln-border)] hover:bg-[var(--ln-bg-soft)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                Explore Curriculum
                <Book size={20} />
              </button>
            </div>

            {/* Trust Points Horizontal */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-6 pt-6 border-t border-[var(--ln-border-soft)]">
              {[
                { icon: CheckCircle2, label: "Beginner-safe", sub: "No hype. Just clarity." },
                { icon: Target, label: "Guided lessons", sub: "Learn with direction." },
                { icon: TrendingUp, label: "Structured progress", sub: "Practice. Prove. Improve." },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 group/trust cursor-default">
                  <div className="w-10 h-10 rounded-full bg-[var(--ln-teal-soft)] flex items-center justify-center group-hover/trust:scale-110 transition-transform">
                    <item.icon size={18} className="text-[var(--ln-teal-500)]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] font-bold text-[var(--ln-navy-900)] group-hover/trust:text-[var(--ln-teal-500)] transition-colors">{item.label}</span>
                    <span className="text-[10px] text-slate-500">{item.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Cards Cluster - Side-by-side Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full lg:w-[58%] grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 items-stretch"
          >
            {/* Card 1: Learning Path */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white border border-[var(--ln-border)] rounded-[28px] p-6 shadow-[0_15px_45px_rgba(8,26,54,0.04)] flex flex-col hover:shadow-[0_30px_70px_rgba(8,26,54,0.08)] transition-all duration-500 min-h-[500px] relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-bold text-[var(--ln-navy-900)] text-[12px] tracking-tight uppercase">Learning Path</h3>
                <Map size={16} className="text-slate-400 animate-bounce" />
              </div>
              <div className="space-y-8 flex-1 relative z-10">
                {[
                  { id: "01", title: "Foundations", sub: "Start here", status: "completed" },
                  { id: "02", title: "Market Structure", sub: "4 / 8 lessons", status: "active" },
                  { id: "03", title: "Risk & Money", sub: "2 / 7 lessons", status: "pending" },
                  { id: "04", title: "Scenarios", sub: "0 / 6 lessons", status: "pending" },
                ].map((item, i, arr) => (
                  <motion.div 
                    key={item.id} 
                    whileHover={{ x: 6 }}
                    className="flex gap-4 relative group/item cursor-pointer"
                  >
                    <div className="flex flex-col items-center">
                      <div className={cn(
                        "w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold border-2 transition-all duration-500 relative",
                        item.status === "completed" ? "bg-[var(--ln-teal-500)] border-[var(--ln-teal-500)] text-white shadow-[0_0_15px_rgba(20,184,166,0.2)]" :
                        item.status === "active" ? "border-[var(--ln-teal-500)] text-[var(--ln-teal-500)]" :
                        "border-[var(--ln-border)] text-slate-400"
                      )}>
                        {item.status === "active" && (
                          <motion.div 
                            className="absolute inset-0 rounded-full bg-[var(--ln-teal-500)] opacity-20"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                          />
                        )}
                        {item.id}
                      </div>
                      {i < arr.length - 1 && (
                        <div className="w-[1px] h-10 bg-[var(--ln-border-soft)] mt-1 relative overflow-hidden">
                           {item.status === "completed" && (
                             <motion.div 
                               className="absolute top-0 left-0 w-full bg-[var(--ln-teal-500)] h-full origin-top"
                               initial={{ scaleY: 0 }}
                               animate={{ scaleY: 1 }}
                               transition={{ duration: 1, delay: 0.5 }}
                             />
                           )}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 pt-0.5">
                      <span className={cn(
                        "text-[13px] font-bold transition-colors leading-tight block group-hover/item:text-[var(--ln-teal-500)]", 
                        item.status === "pending" ? "text-slate-400" : "text-[var(--ln-navy-900)]"
                      )}>
                        {item.title}
                      </span>
                      <p className="text-[10px] text-slate-500 font-medium mt-0.5">{item.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Card 2: Your Progress */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white border border-[var(--ln-border)] rounded-[28px] p-6 shadow-[0_15px_45px_rgba(8,26,54,0.04)] flex flex-col hover:shadow-[0_30px_70px_rgba(8,26,54,0.08)] transition-all duration-500 min-h-[500px]"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-bold text-[var(--ln-navy-900)] text-[12px] tracking-tight uppercase">Your Progress</h3>
                <TrendingUp size={16} className="text-[var(--ln-text-muted)] animate-pulse" />
              </div>
              
              <div className="flex flex-col items-center mb-10 group/progress cursor-pointer">
                <div className="relative w-28 h-28 transform transition-transform group-hover/progress:scale-110 duration-500">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="56" cy="56" r="48" stroke="var(--ln-bg-soft)" strokeWidth="8" fill="none" />
                    <motion.circle 
                      cx="56" cy="56" r="48" 
                      stroke="var(--ln-teal-500)" strokeWidth="8" fill="none"
                      strokeDasharray={2 * Math.PI * 48}
                      initial={{ strokeDashoffset: 2 * Math.PI * 48 }}
                      animate={{ strokeDashoffset: 2 * Math.PI * 48 * (1 - 0.72) }}
                      transition={{ duration: 2, delay: 0.8, ease: "circOut" }}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.span 
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: 1 }}
                       className="text-2xl font-black text-[var(--ln-navy-900)] tracking-tighter"
                    >
                      72%
                    </motion.span>
                    <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest text-center leading-none mt-1">Overall<br/>Progress</span>
                  </div>
                </div>
              </div>

              <div className="space-y-5 flex-1">
                {[
                  { label: "Lessons Completed", val: "18", icon: Book, color: "text-[var(--ln-navy-900)]" },
                  { label: "Study Streak", val: "7 days", icon: Zap, color: "text-orange-500" },
                  { label: "XP Earned", val: "1,250 XP", accent: true, icon: Sparkles, color: "text-[var(--ln-teal-500)]" },
                ].map((stat) => (
                  <motion.div 
                    key={stat.label} 
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-between group/stat cursor-pointer p-1 rounded-lg hover:bg-[var(--ln-bg-soft)] transition-colors"
                  >
                    <div className="flex items-center gap-2">
                       <div className="w-6 h-6 rounded-lg bg-[var(--ln-bg-soft)] flex items-center justify-center group-hover/stat:bg-white transition-colors">
                          <stat.icon size={12} className={cn("text-[var(--ln-text-muted)]", stat.color)} />
                       </div>
                       <p className="text-[10px] font-bold text-[var(--ln-navy-900)]">{stat.label}</p>
                    </div>
                    <span className={cn("text-[12px] font-black", stat.accent ? "text-[var(--ln-teal-500)]" : "text-[var(--ln-navy-900)]")}>
                      {stat.val}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Card 3: Chart Practice */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white border border-[var(--ln-border)] rounded-[28px] p-6 shadow-[0_15px_45px_rgba(8,26,54,0.04)] flex flex-col hover:shadow-[0_30px_70px_rgba(8,26,54,0.08)] transition-all duration-500 min-h-[500px]"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-[var(--ln-navy-900)] text-[12px] tracking-tight uppercase">Chart Practice</h3>
                <Layout size={16} className="text-[var(--ln-text-muted)] animate-pulse" />
              </div>
              <div className="mb-4 group/header cursor-default">
                <p className="text-[13px] font-bold text-[var(--ln-navy-900)] group-hover/header:text-[var(--ln-teal-500)] transition-colors">Read Structure</p>
                <p className="text-[10px] text-[var(--ln-text-muted)] font-medium mt-1">Identify shifts on chart.</p>
              </div>

              <div className="flex-1 bg-[var(--ln-bg-soft)] rounded-2xl relative overflow-hidden flex flex-col group/chart cursor-crosshair">
                 {/* Crosshair Mockup */}
                 <div className="absolute inset-0 opacity-0 group-hover/chart:opacity-100 transition-opacity pointer-events-none">
                    <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-[var(--ln-teal-500)]/20" />
                    <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-[var(--ln-teal-500)]/20" />
                 </div>

                 <div className="p-3 flex-1 flex items-center justify-center">
                    <svg viewBox="0 0 300 200" className="w-full h-full">
                       <motion.path 
                         d="M20 160 L60 110 L100 140 L140 70 L180 100 L220 40 L250 90 L280 50" 
                         fill="none" 
                         stroke="var(--ln-navy-900)" 
                         strokeWidth="2.5" 
                         strokeLinecap="round" 
                         className="opacity-10"
                         initial={{ pathLength: 0 }}
                         animate={{ pathLength: 1 }}
                         transition={{ duration: 3, ease: "easeInOut" }}
                       />
                       {[
                         {x: 40, o: 160, c: 140, h: 170, l: 130},
                         {x: 80, o: 140, c: 90, h: 150, l: 80},
                         {x: 120, o: 90, c: 120, h: 130, l: 85},
                         {x: 160, o: 120, c: 60, h: 130, l: 50},
                         {x: 200, o: 60, c: 90, h: 100, l: 55},
                         {x: 240, o: 90, c: 30, h: 100, l: 25},
                       ].map((c, i) => (
                         <motion.g 
                           key={i}
                           whileHover={{ scaleY: 1.2, filter: "drop-shadow(0 0 8px rgba(20,184,166,0.4))" }}
                           className="transition-all duration-300 origin-bottom"
                         >
                           <line x1={c.x} y1={c.h} x2={c.x} y2={c.l} stroke={c.c < c.o ? "var(--ln-teal-500)" : "var(--ln-navy-900)"} strokeWidth="1" />
                           <rect x={c.x - 4} y={Math.min(c.o, c.c)} width="8" height={Math.max(2, Math.abs(c.o - c.c))} fill={c.c < c.o ? "var(--ln-teal-500)" : "var(--ln-navy-900)"} rx="1.5" />
                         </motion.g>
                       ))}
                       <g className="text-[10px] font-black uppercase tracking-tighter">
                          <text x="60" y="50" className="fill-[var(--ln-teal-500)]">HH</text>
                          <text x="100" y="180" className="fill-[var(--ln-teal-500)]">HL</text>
                          <motion.circle 
                            cx="240" cy="60" r="6" 
                            fill="none" stroke="var(--ln-teal-500)" strokeWidth="1.5" strokeDasharray="3" 
                            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                            transition={{ rotate: { duration: 10, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity } }}
                          />
                       </g>
                    </svg>
                 </div>
                 <div className="p-3 bg-white/40 border-t border-[var(--ln-border-soft)]">
                    <div className="flex justify-between items-center">
                       <span className="text-[9px] font-bold text-[var(--ln-navy-900)] tracking-widest">ASSESSMENT</span>
                       <div className="flex items-center gap-1.5">
                          <motion.div 
                            className="w-1.5 h-1.5 rounded-full bg-[var(--ln-teal-500)]"
                            animate={{ opacity: [1, 0.4, 1] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                          />
                          <span className="text-[9px] font-bold text-[var(--ln-teal-500)]">LIVE</span>
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


