"use client";

import { useEffect } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { AcademyButton } from "@/components/ui/academy-button";

export default function JourneyError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("ACADEMY_CONNECTION_ERROR:", error);
  }, [error]);

  return (
    <div className="min-h-[400px] flex items-center justify-center p-8 bg-white border border-[var(--ln-border)] rounded-[3rem] shadow-sm">
      <div className="max-w-xs w-full text-center space-y-8">
        <div className="w-16 h-16 rounded-[1.5rem] bg-[var(--ln-teal-soft)] border border-[var(--ln-teal-500)]/10 flex items-center justify-center text-[var(--ln-teal-500)] mx-auto shadow-sm">
          <AlertTriangle size={32} />
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-extrabold text-[var(--ln-navy-900)] uppercase tracking-tight">Sync Delayed</h3>
          <p className="text-xs text-[var(--ln-text-secondary)] leading-relaxed font-medium">
            The academy interface is having trouble connecting to the course data feed. 
          </p>
        </div>
        <button 
          onClick={() => reset()}
          className="w-full py-4 bg-[var(--ln-teal-500)] text-white rounded-2xl font-extrabold uppercase text-[10px] tracking-widest shadow-lg shadow-[var(--ln-teal-500)]/20 hover:bg-[var(--ln-teal-600)] transition-all flex items-center justify-center gap-2"
        >
          <RotateCcw size={14} /> RETRY CONNECTION
        </button>
      </div>
    </div>
  );
}
