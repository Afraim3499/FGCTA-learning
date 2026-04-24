import { create } from "zustand";
import type { User, UserProgress, MarketTrack } from "@/types";

// ============================================
// AUTH STORE
// ============================================

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  setAuth: (user: User, token: string) => void;
  clearAuth: () => void;
  setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: true,
  setAuth: (user, token) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("auth_token", token);
    }
    set({ user, token, isAuthenticated: true, isLoading: false });
  },
  clearAuth: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("auth_token");
    }
    set({ user: null, token: null, isAuthenticated: false, isLoading: false });
  },
  setLoading: (loading) => set({ isLoading: loading }),
}));

// ============================================
// ONBOARDING STORE
// ============================================

interface OnboardingState {
  step: number;
  marketTrack: MarketTrack | null;
  experienceLevel: string | null;
  setStep: (step: number) => void;
  setMarketTrack: (track: MarketTrack) => void;
  setExperienceLevel: (level: string) => void;
  reset: () => void;
}

export const useOnboardingStore = create<OnboardingState>((set) => ({
  step: 1,
  marketTrack: null,
  experienceLevel: null,
  setStep: (step) => set({ step }),
  setMarketTrack: (track) => set({ marketTrack: track }),
  setExperienceLevel: (level) => set({ experienceLevel: level }),
  reset: () => set({ step: 1, marketTrack: null, experienceLevel: null }),
}));

// ============================================
// PROGRESS STORE (synced from backend)
// ============================================

interface ProgressState {
  progress: UserProgress | null;
  setProgress: (progress: UserProgress) => void;
}

export const useProgressStore = create<ProgressState>((set) => ({
  progress: null,
  setProgress: (progress) => set({ progress }),
}));
