import { create } from "zustand";
import type { UserProgress } from "@/types";

interface ProgressState {
  progress: UserProgress | null;
  setProgress: (progress: UserProgress | null) => void;
  // UI helper getters
  currentTier: number;
  isStrategyLabEnabled: boolean;
  unlockStrategyLab: () => void;
}

export const useProgressStore = create<ProgressState>((set, get) => ({
  progress: null,
  
  setProgress: (progress) => set({ progress }),
  
  get currentTier() {
    return get().progress?.currentLevel || 0;
  },
  
  get isStrategyLabEnabled() {
    return get().progress?.strategyLabEnabled || false;
  },

  unlockStrategyLab: () => {
    set((state) => ({
      progress: state.progress 
        ? { ...state.progress, strategyLabEnabled: true } 
        : null
    }));
  }
}));
