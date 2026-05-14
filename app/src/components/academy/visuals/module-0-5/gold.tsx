import React from "react";
import { Database, ShieldAlert, Target } from "lucide-react";

/**
 * Institutional Frame Component (Simplified for placeholders)
 */
const InstitutionalFrame = ({ children, label, id }: { children: React.ReactNode; label: string; id: string }) => (
  <div className="w-full min-h-[400px] bg-[#F8FBFC] border border-[#E2E8F0] rounded-[2rem] p-8 flex flex-col relative overflow-hidden shadow-sm">
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#071B36_1.5px,transparent_1.5px)] bg-[length:32px_32px]" />
    <div className="flex items-center justify-between mb-8 relative z-10 border-b border-slate-200/50 pb-4">
      <div className="flex flex-col">
        <div className="flex items-center gap-2 mb-1">
          <Database size={10} className="text-amber-600" />
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Track Adaptation Diagnostic</span>
        </div>
        <h4 className="text-base font-black text-[#071B36] uppercase tracking-tighter italic">{label}</h4>
      </div>
      <div className="text-[10px] font-mono text-[#071B36] font-bold">{id}</div>
    </div>
    <div className="flex-1 flex flex-col items-center justify-center relative z-10">
      {children}
    </div>
  </div>
);

/**
 * Module 0.5 - Gold Track Visuals
 */
export const GoldPlaceholderVisual = () => (
  <InstitutionalFrame label="Gold Structural Adaptation" id="STR-AU-05">
    <div className="flex flex-col items-center gap-6 text-center max-w-sm">
       <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600">
          <Target size={32} />
       </div>
       <div className="space-y-2">
          <h5 className="text-lg font-black text-[#071B36] uppercase">Metal Logic Pending</h5>
          <p className="text-xs text-slate-500 font-medium leading-relaxed">
             Gold's structural volatility requires unique swing filtering logic. Audit currently in progress.
          </p>
       </div>
       <div className="px-6 py-2 bg-slate-100 rounded-full text-[8px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
          <ShieldAlert size={12} />
          Awaiting Verification
       </div>
    </div>
  </InstitutionalFrame>
);
