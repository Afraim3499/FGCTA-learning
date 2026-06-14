"use client";

import React from "react";
import { AlertOctagon, TrendingUp } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface StrategyInvalidationCardProps {
  invalidation: string;
  targetPath: string;
}

export function StrategyInvalidationCard({ invalidation, targetPath }: StrategyInvalidationCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Structural Invalidation Card */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-rose-600 border-b border-rose-50 pb-2">
            <AlertOctagon className="w-4 h-4 shrink-0" />
            <h3 className="text-xs font-extrabold uppercase tracking-wider">
              Structural Invalidation
            </h3>
          </div>
          <div className="prose prose-rose text-xs text-slate-600 leading-relaxed font-semibold">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {invalidation || "No structural invalidation rules defined."}
            </ReactMarkdown>
          </div>
        </div>
        <div className="p-2.5 bg-rose-50 border border-rose-100 rounded-lg text-[10px] text-rose-800 font-semibold leading-relaxed mt-4">
          ⚠️ Stop loss is hard-gated at invalidation. Do not widen stop loss under any circumstances during drawdown.
        </div>
      </div>

      {/* Target Path Card */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-emerald-600 border-b border-emerald-50 pb-2">
            <TrendingUp className="w-4 h-4 shrink-0" />
            <h3 className="text-xs font-extrabold uppercase tracking-wider">
              Target Logic & Path
            </h3>
          </div>
          <div className="prose prose-emerald text-xs text-slate-600 leading-relaxed font-semibold">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {targetPath || "Target rules not defined."}
            </ReactMarkdown>
          </div>
        </div>
        <div className="p-2.5 bg-emerald-50 border border-emerald-100 rounded-lg text-[10px] text-emerald-800 font-semibold leading-relaxed mt-4">
          📈 Standard target sizing matches 1:2 R:R minimum context. Scale out at key support/resistance flips.
        </div>
      </div>
    </div>
  );
}
