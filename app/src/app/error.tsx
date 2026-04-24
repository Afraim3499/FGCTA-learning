"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCcw } from "lucide-react";
import { InstitutionalButton } from "@/components/ui/institutional-button";

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
    <div className="min-h-screen bg-[#0A0A0B] flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in-95 duration-500">
        <div className="w-20 h-20 rounded-full bg-fail-red/10 border border-fail-red/20 flex items-center justify-center text-fail-red mx-auto shadow-[0_0_50px_rgba(255,0,0,0.1)]">
          <AlertTriangle size={40} />
        </div>
        
        <div className="space-y-3">
          <h1 className="text-3xl font-black text-white tracking-tighter uppercase">Terminal <span className="text-fail-red">Corrupted</span></h1>
          <p className="text-slate-500 text-sm leading-relaxed">
            A critical system fault has occurred. The institutional interface has been suspended for safety.
          </p>
          <div className="p-3 bg-white/5 border border-white/5 rounded-xl font-mono text-[10px] text-fail-red/70 truncate">
             ERROR_ID: {error.digest || "UNKNOWN_FAULT"}
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col gap-3">
          <InstitutionalButton glow className="w-full" onClick={() => reset()}>
            <RefreshCcw size={16} className="mr-2" /> REBOOT TERMINAL
          </InstitutionalButton>
          <InstitutionalButton variant="outline" className="w-full" onClick={() => window.location.href = "/dashboard"}>
             EXIT TO COMMAND CENTER
          </InstitutionalButton>
        </div>
      </div>
    </div>
  );
}
