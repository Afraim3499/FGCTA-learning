"use client";

import React from "react";
import { AlertTriangle, ShieldCheck } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface StrategyTrapCardProps {
  traps: string;
  risk: string;
}

export function StrategyTrapCard({ traps, risk }: StrategyTrapCardProps) {
  return (
    <div className="bg-amber-50/50 border border-amber-200/60 rounded-2xl p-6 shadow-sm space-y-6">
      <div className="flex items-center gap-2 text-amber-800 border-b border-amber-200/30 pb-2">
        <AlertTriangle className="w-5 h-5 shrink-0" />
        <h3 className="text-xs font-extrabold uppercase tracking-wider">
          Market Trap Mechanics & Warnings
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Trap Breakdown */}
        <div className="space-y-2">
          <h4 className="text-[10px] font-extrabold text-amber-800 uppercase tracking-widest">
            Known Institutional Sweeps
          </h4>
          <div className="prose prose-amber text-xs text-amber-950/80 leading-relaxed font-semibold">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {traps || "No known market trap patterns documented for this level yet."}
            </ReactMarkdown>
          </div>
        </div>

        {/* Risk Mitigation */}
        <div className="space-y-3 bg-white p-4 rounded-xl border border-amber-200/40">
          <div className="flex items-center gap-1.5 text-emerald-600">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <h5 className="text-[10px] font-extrabold uppercase tracking-wider">Mitigation Safeguards</h5>
          </div>
          <div className="prose prose-slate text-xs text-slate-600 leading-relaxed font-semibold">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {risk || "Risk rules not defined yet. Use academy risk framework before practicing this setup."}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}
