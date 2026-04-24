"use client";

import { initializePhase } from "@/lib/trading-actions";
import { ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function StartPhaseButton({ phaseNumber = 1 }: { phaseNumber?: number }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleStart = async () => {
    setIsLoading(true);
    try {
      const result = await initializePhase(phaseNumber);
      if (result.success) {
        router.refresh();
      } else {
        alert((result as any).message || "Failed to initialize phase");
      }
    } catch (error: any) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button 
      onClick={handleStart}
      disabled={isLoading}
      className="px-8 py-4 bg-accent-blue text-white font-bold rounded-2xl hover:bg-accent-blue/90 active:scale-[0.98] transition-all flex items-center gap-3 group disabled:opacity-50"
    >
      {isLoading ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          COMMISSIONING...
        </>
      ) : (
        <>
          COMMISSION PHASE {phaseNumber}
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </>
      )}
    </button>
  );
}
