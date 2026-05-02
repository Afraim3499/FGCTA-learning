"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCcw } from "lucide-react";
import { AcademyButton } from "@/components/ui/academy-button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an analytics provider (e.g. Sentry)
    console.error("GLOBAL_RUNTIME_ERROR:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[var(--ln-bg)] flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center space-y-10 animate-in fade-in zoom-in-95 duration-500 bg-white border border-[var(--ln-border)] rounded-[3rem] p-12 shadow-2xl">
        <div className="w-24 h-24 rounded-[2rem] bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 mx-auto shadow-sm">
          <AlertTriangle size={48} />
        </div>
        
        <div className="space-y-4">
          <h1 className="text-3xl font-extrabold text-[var(--ln-navy-900)] tracking-tighter uppercase">Connection <span className="text-[var(--ln-teal-500)]">Delayed</span></h1>
          <p className="text-[var(--ln-text-secondary)] text-sm leading-relaxed font-medium">
            We’re having trouble loading your course data. Try again in a moment.
          </p>
          <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl font-mono text-[10px] text-slate-400 truncate shadow-inner">
             FAULT_ID: {error.digest || "UNKNOWN"}
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--ln-border)] flex flex-col gap-4">
          <button className="w-full bg-[var(--ln-teal-500)] hover:bg-[var(--ln-teal-600)] text-white font-extrabold uppercase tracking-widest text-[10px] h-14 rounded-2xl shadow-lg shadow-[var(--ln-teal-500)]/20 transition-all flex items-center justify-center gap-2" onClick={() => reset()}>
            <RefreshCcw size={16} /> RETRY
          </button>
          <button className="w-full border border-[var(--ln-border)] text-[var(--ln-navy-900)] font-extrabold uppercase tracking-widest text-[10px] h-14 rounded-2xl hover:bg-slate-50 transition-all" onClick={() => window.location.href = "/dashboard"}>
             RETURN TO DASHBOARD
          </button>
        </div>
      </div>
    </div>
  );
}
