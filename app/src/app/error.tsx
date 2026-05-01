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
        <div className="w-24 h-24 rounded-[2rem] bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500 mx-auto shadow-sm">
          <AlertTriangle size={48} />
        </div>
        
        <div className="space-y-4">
          <h1 className="text-3xl font-extrabold text-[var(--ln-navy-900)] tracking-tighter uppercase">System <span className="text-rose-500">Error</span></h1>
          <p className="text-[var(--ln-text-secondary)] text-sm leading-relaxed font-medium">
            An unexpected error has occurred. The academy interface has been temporarily suspended.
          </p>
          <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl font-mono text-[10px] text-rose-500/70 truncate shadow-inner">
             ERROR_ID: {error.digest || "UNKNOWN_FAULT"}
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--ln-border)] flex flex-col gap-4">
          <AcademyButton className="w-full bg-rose-500 hover:bg-rose-600 text-white font-extrabold uppercase tracking-widest text-[10px] h-14 rounded-2xl shadow-lg shadow-rose-500/20" onClick={() => reset()}>
            <RefreshCcw size={16} className="mr-2" /> RETRY SESSION
          </AcademyButton>
          <AcademyButton variant="outline" className="w-full border-[var(--ln-border)] text-[var(--ln-navy-900)] font-extrabold uppercase tracking-widest text-[10px] h-14 rounded-2xl" onClick={() => window.location.href = "/dashboard"}>
             RETURN TO DASHBOARD
          </AcademyButton>
        </div>
      </div>
    </div>
  );
}
