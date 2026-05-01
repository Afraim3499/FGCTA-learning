"use client";

import { AcademyButton } from "@/components/ui/academy-button";
import { ChevronRight } from "lucide-react";
import { completeModule } from "@/lib/academy-actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ModuleNavigationProps {
  userId: string;
  moduleId: string;
  assetClass: string;
  nextUrl: string;
}

export function ModuleNavigation({ userId, moduleId, assetClass, nextUrl }: ModuleNavigationProps) {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  const handleProceed = async () => {
    setIsPending(true);
    try {
      await completeModule(userId, moduleId, assetClass);
      router.push(nextUrl);
    } catch (err) {
      console.error("Navigation error:", err);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="flex items-center justify-between p-8 bg-white/5 border border-white/10 rounded-[2rem]">
       <div className="flex flex-col">
          <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Next Objective</span>
          <span className="text-sm font-bold text-white uppercase tracking-tight">Mission progression authorized</span>
       </div>
       <AcademyButton 
          size="lg" 
          glow 
          className="group" 
          onClick={handleProceed}
          disabled={isPending}
       >
          {isPending ? "SYNCHRONIZING..." : "PROCEED TO NEXT MODULE"}
          {!isPending && <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />}
       </AcademyButton>
    </div>
  );
}
