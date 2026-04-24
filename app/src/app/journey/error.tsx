"use client";

import { useEffect } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { InstitutionalButton } from "@/components/ui/institutional-button";

export default function JourneyError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("JOURNEY_SIMULATION_ERROR:", error);
  }, [error]);

  return (
    <div className="min-h-[400px] flex items-center justify-center p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem]">
      <div className="max-w-xs w-full text-center space-y-6">
        <div className="w-12 h-12 rounded-xl bg-warning/10 border border-warning/20 flex items-center justify-center text-warning mx-auto">
          <AlertTriangle size={24} />
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-white uppercase tracking-tight">Simulator Sync Failure</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            The market simulation engine lost connection to the institutional feed.
          </p>
        </div>
        <InstitutionalButton variant="outline" size="sm" className="w-full" onClick={() => reset()}>
          <RotateCcw size={14} className="mr-2" /> RE-SYNC DATA
        </InstitutionalButton>
      </div>
    </div>
  );
}
