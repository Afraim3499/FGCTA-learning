"use client";

import React from "react";
import { Loader2 } from "lucide-react";

export const VisualLoadingState = () => {
  return (
    <div className="w-full h-[400px] flex flex-col items-center justify-center bg-slate-50/50 rounded-3xl border border-dashed border-slate-200 animate-pulse">
      <Loader2 className="w-8 h-8 text-slate-300 animate-spin mb-4" />
      <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">
        Loading Visual Component...
      </span>
    </div>
  );
};
