"use client";

import { useTransition } from "react";
import { resetUserPhase, updateUserTrack } from "@/lib/admin-actions";
import { Loader2, MoreHorizontal } from "lucide-react";

interface AdminActionButtonsProps {
  userId: string;
  currentTrack: string;
}

/**
 * Client component for administrative actions within the user table.
 * Handles reset and track update operations with loading states.
 */
export function AdminActionButtons({ userId, currentTrack }: AdminActionButtonsProps) {
  const [isPending, startTransition] = useTransition();

  const handleReset = () => {
    if (confirm("CAUTION: Are you sure you want to reset this candidate's active Practice phase? This action will archive their current progress and cannot be undone.")) {
      startTransition(async () => {
        try {
          await resetUserPhase(userId);
        } catch (error: any) {
          alert(`Operational Error: ${error.message}`);
        }
      });
    }
  };

  const handleChangeTrack = () => {
    const tracks = ["forex", "crypto", "gold", "multi"];
    const newTrack = prompt(`Enter new market Logic (${tracks.join(", ")}):`, currentTrack);
    
    if (newTrack && newTrack !== currentTrack && tracks.includes(newTrack)) {
      startTransition(async () => {
        try {
          await updateUserTrack(userId, newTrack as any);
        } catch (error: any) {
          alert(`Operational Error: ${error.message}`);
        }
      });
    } else if (newTrack && !tracks.includes(newTrack)) {
      alert("Invalid Logic selection.");
    }
  };

  return (
    <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
      <button 
        disabled={isPending}
        onClick={handleChangeTrack}
        className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors disabled:opacity-30 flex items-center gap-1"
      >
        Logic
      </button>
      <button 
        disabled={isPending}
        onClick={handleReset}
        className="text-[10px] font-bold uppercase tracking-widest text-rose-400 hover:text-rose-300 transition-colors disabled:opacity-30 flex items-center gap-1"
      >
        {isPending ? <Loader2 className="animate-spin" size={10} /> : "Reset"}
      </button>
      <button className="p-1.5 hover:bg-white/5 rounded-lg text-slate-500">
        <MoreHorizontal size={16} />
      </button>
    </div>
  );
}
