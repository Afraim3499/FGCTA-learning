"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { InstitutionalButton } from "@/components/ui/institutional-button";

export function HeroSection() {
  return (
    <section className="relative pt-48 pb-32 px-6 lg:px-8 overflow-hidden bg-[#050505]">
      {/* Institutional Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#0070F322,transparent)]" />
         <svg className="w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <defs>
               <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
               </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
         </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-pass-green animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-muted">
                Institutional Terminal Active
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] text-white max-w-5xl mx-auto">
              RETAIL TRADERS BLEED LIQUIDITY.<br />
              <span className="bg-gradient-to-r from-accent-blue via-pass-green to-accent-blue bg-300% animate-gradient text-transparent bg-clip-text">
                INSTITUTIONS HARVEST IT.
              </span>
            </h1>

            <p className="text-xl md:text-3xl text-text-secondary max-w-3xl mx-auto leading-tight font-bold italic opacity-80">
              Which side of the trade are you on?
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <InstitutionalButton size="lg" glow onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}>
              ENTER THE ACADEMY
              <ArrowRight className="ml-2" size={20} />
            </InstitutionalButton>
            
            <InstitutionalButton variant="outline" size="lg" onClick={() => window.location.href = '/assessment/free-trial'}>
              TAKE THE FREE INSTITUTIONAL ASSESSMENT
            </InstitutionalButton>
          </motion.div>

          {/* Social Proof / Metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-white/5 w-full"
          >
            {[
              { label: "Execution Precision", value: "99.9%" },
              { label: "Institutional Assets", value: "GOLD • FX • WEB3" },
              { label: "Simulated AUM", value: "$10.4M+" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-1">
                <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">{stat.label}</p>
                <p className="text-2xl font-black text-white">{stat.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

