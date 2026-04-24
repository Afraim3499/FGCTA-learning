"use client";

import { ShieldAlert, ChevronRight, Lock } from "lucide-react";

export function InstitutionalFrame() {
  return (
    <div className="p-8 bg-amber-500/5 border border-amber-500/20 rounded-[2.5rem] space-y-4 mb-12">
      <div className="flex items-center gap-3 text-amber-500">
        <ShieldAlert size={20} />
        <h4 className="text-sm font-black uppercase tracking-tighter">Elite Friction Warning</h4>
      </div>
      <p className="text-xs text-text-secondary leading-relaxed max-w-2xl">
        This program is intentionally designed with high friction. If you find the theory dense, it is because your current "retail mind" is fighting the institutional reality. Amateurs seek secrets; Professionals seek mastery of fundamentals. 
      </p>
      <div className="flex items-center gap-6 pt-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span className="text-[9px] font-bold text-white uppercase tracking-widest">Cognitive Load: High</span>
        </div>
        <div className="flex items-center gap-2">
          <Lock size={12} className="text-slate-600" />
          <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Crucible Readiness: 0.01%</span>
        </div>
      </div>
    </div>
  );
}
