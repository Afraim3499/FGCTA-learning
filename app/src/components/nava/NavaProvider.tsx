'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { NavaMessage, NavaState, NavaUserMode } from '@/lib/nava/types';
import { NAVA_MESSAGES } from '@/lib/nava/registry';
import { getLocalStorageState, saveLocalStorageState, scrollToTarget } from '@/lib/nava/utils';

interface NavaContextType {
  activeMessage: NavaMessage | null;
  activeObjective?: { label: string; priority: 'primary' | 'secondary' };
  dismissMessage: (id: string) => void;
  muteNava: () => void;
  triggerMessage: (id: string, overrides?: Partial<NavaMessage>) => void;
  setSuppressed: (suppressed: boolean) => void;
  setQuietMode: (hours?: number) => void;
  mode: NavaUserMode;
  isMounted: boolean;
}

const NavaContext = createContext<NavaContextType | undefined>(undefined);

const INITIAL_STATE: NavaState = {
  mode: 'normal',
  seenMessages: {},
  muted: false,
};

function generateSessionId() {
  return Math.random().toString(36).substring(2, 15);
}

export function NavaProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [activeMessage, setActiveMessage] = useState<NavaMessage | null>(null);
  const [state, setState] = useState<NavaState>(INITIAL_STATE);
  const [isMounted, setIsMounted] = useState(false);
  const [isSuppressed, setIsSuppressed] = useState(false);

  // Initialize state from localStorage with migration
  useEffect(() => {
    setIsMounted(true);
    const storedState = getLocalStorageState();
    
    if (storedState) {
      // Migration & session init
      const sessionId = generateSessionId();
      const migratedState: NavaState = {
        ...INITIAL_STATE,
        ...storedState,
        mode: storedState.mode || (storedState.muted ? 'muted' : 'normal'),
        session: {
          id: sessionId,
          seenCount: 0,
          dismissCount: 0,
          highAttentionShown: false,
          lastRoute: window.location.pathname,
        }
      };
      setState(migratedState);
      
      // Dev helper
      if (process.env.NODE_ENV === 'development') {
        (window as any).resetNava = () => {
          localStorage.removeItem('lurnava_nava_state');
          console.log('✅ Nava state reset. Reloading...');
          window.location.reload();
        };
      }
    } else {
      setState({
        ...INITIAL_STATE,
        session: {
          id: generateSessionId(),
          seenCount: 0,
          dismissCount: 0,
          highAttentionShown: false,
          lastRoute: window.location.pathname,
        }
      });
    }
  }, []);

  // Automatic message selection logic
  useEffect(() => {
    if (!isMounted || state.mode === 'muted') return;

    // Check for Quiet Mode expiry
    if (state.mode === 'quiet' && state.quietUntil && Date.now() > state.quietUntil) {
      setState(prev => ({ ...prev, mode: 'normal', quietUntil: null }));
      return;
    }

    // Rule: Don't clear manually triggered messages unless route changed
    if (activeMessage) {
      const isStillValidRoute = !activeMessage.targetRoute || pathname.startsWith(activeMessage.targetRoute);
      if (isStillValidRoute) return;
    }

    // Route cap: Only 1 auto-message per navigation
    if (state.session?.autoMessageShownForRoute === pathname) return;

    const possibleMessages = NAVA_MESSAGES.filter((msg) => {
      // Basic route check
      if (msg.targetRoute && !pathname.startsWith(msg.targetRoute)) return false;
      
      // Global suppression check
      if (isSuppressed) return false;

      // Activity suppression check
      const isDrawing = pathname.includes('/practice');
      const isTesting = pathname.includes('/test/') && !pathname.endsWith('/result');
      if (isTesting || isDrawing) return false;

      // Route-specific suppression
      if (msg.suppressDuring?.some(s => pathname.includes(s))) return false;

      // Mode-based filtering
      if (state.mode === 'quiet') {
        const isCritical = msg.attentionLevel === 'high' && msg.showOnce;
        const isResult = msg.trigger === 'test_result_ready' || msg.trigger === 'mission_result_ready';
        const isGated = msg.variant === 'locked';
        const isHighPriority = (msg.priority || 0) >= 80;
        
        if (!isCritical && !isResult && !isGated && !isHighPriority) return false;
      }

      // Caps & state checks
      const msgState = state.seenMessages[msg.id];
      if (msg.showOnce && msgState?.seenCount > 0) return false;
      if (msg.maxShowCount && msgState?.seenCount >= msg.maxShowCount) return false;
      if (msgState?.dismissedAt) return false;

      // Cooldown check
      if (msg.cooldownDays && msgState?.lastSeenAt) {
        const cooldownMs = msg.cooldownDays * 24 * 60 * 60 * 1000;
        if (Date.now() - msgState.lastSeenAt < cooldownMs) return false;
      }

      // Session Caps
      if (msg.attentionLevel === 'high' && state.session?.highAttentionShown) return false;

      // Trigger matching
      if (!msg.trigger) return true;
      if (msg.trigger === 'dashboard_first_visit') {
        return pathname === '/dashboard' && !state.seenMessages[msg.id];
      }
      if (msg.trigger === 'dashboard_visit') return false; // Manual trigger only
      if (msg.trigger === 'module_visit') return pathname.includes('/course/module/');
      if (msg.trigger === 'test_result_ready' || msg.trigger === 'mission_result_ready') return false; // Manual trigger only
      
      return false;
    });

    // Sort by priority
    possibleMessages.sort((a, b) => (b.priority || 0) - (a.priority || 0));
    const msg = possibleMessages[0] || null;

    if (msg) {
      setActiveMessage(msg);
      setState(prevState => {
        const currentMsgState = prevState.seenMessages[msg.id];
        const newState: NavaState = {
          ...prevState,
          session: prevState.session ? {
            ...prevState.session,
            seenCount: prevState.session.seenCount + 1,
            highAttentionShown: prevState.session.highAttentionShown || msg.attentionLevel === 'high',
            autoMessageShownForRoute: pathname,
          } : undefined,
          seenMessages: {
            ...prevState.seenMessages,
            [msg.id]: {
              seenCount: (currentMsgState?.seenCount || 0) + 1,
              dismissCount: currentMsgState?.dismissCount || 0,
              lastSeenAt: Date.now(),
              dismissedAt: currentMsgState?.dismissedAt || null,
            },
          },
        };
        saveLocalStorageState(newState);
        return newState;
      });

      if (msg.scrollToTarget && msg.targetSelector) {
        setTimeout(() => scrollToTarget(msg.targetSelector!), 500);
      }
    } else {
      setActiveMessage(null);
    }
  }, [isMounted, pathname, state.mode, state.quietUntil, isSuppressed]);

  const dismissMessage = useCallback((id: string) => {
    setState(prevState => {
      const currentMsgState = prevState.seenMessages[id];
      const newDismissCount = (currentMsgState?.dismissCount || 0) + 1;
      const sessionDismissCount = (prevState.session?.dismissCount || 0) + 1;
      
      // Auto-quiet logic: 3 dismisses in session -> 48h quiet
      let newMode = prevState.mode;
      let newQuietUntil = prevState.quietUntil;
      
      if (sessionDismissCount >= 3 && prevState.mode === 'normal') {
        newMode = 'quiet';
        newQuietUntil = Date.now() + (48 * 60 * 60 * 1000);
      }

      const newState: NavaState = {
        ...prevState,
        mode: newMode,
        quietUntil: newQuietUntil,
        session: prevState.session ? {
          ...prevState.session,
          dismissCount: sessionDismissCount,
        } : undefined,
        seenMessages: {
          ...prevState.seenMessages,
          [id]: {
            ...prevState.seenMessages[id],
            dismissCount: newDismissCount,
            dismissedAt: Date.now(),
          },
        },
      };
      saveLocalStorageState(newState);
      return newState;
    });
    setActiveMessage(null);
  }, []);

  const setQuietMode = useCallback((durationHours: number = 48) => {
    setState(prevState => {
      const newState: NavaState = { 
        ...prevState, 
        mode: 'quiet',
        quietUntil: Date.now() + (durationHours * 60 * 60 * 1000)
      };
      saveLocalStorageState(newState);
      return newState;
    });
    setActiveMessage(null);
  }, []);

  const setMutedMode = useCallback(() => {
    setState(prevState => {
      const newState: NavaState = { ...prevState, mode: 'muted', muted: true };
      saveLocalStorageState(newState);
      return newState;
    });
    setActiveMessage(null);
  }, []);

  const triggerMessage = useCallback((id: string, overrides?: Partial<NavaMessage>) => {
    const baseMsg = NAVA_MESSAGES.find(m => m.id === id);
    if (baseMsg) {
      const msg = { ...baseMsg, ...overrides };
      setActiveMessage(msg);
      setState(prevState => {
        const currentMsgState = prevState.seenMessages[baseMsg.id];
        const newState: NavaState = {
          ...prevState,
          seenMessages: {
            ...prevState.seenMessages,
            [baseMsg.id]: {
              seenCount: (currentMsgState?.seenCount || 0) + 1,
              dismissCount: currentMsgState?.dismissCount || 0,
              lastSeenAt: Date.now(),
              dismissedAt: currentMsgState?.dismissedAt || null,
            },
          },
        };
        saveLocalStorageState(newState);
        return newState;
      });

      if (msg.scrollToTarget && msg.targetSelector) {
        setTimeout(() => scrollToTarget(msg.targetSelector!), 500);
      }
    }
  }, []);

  return (
    <NavaContext.Provider value={{
      activeMessage,
      activeObjective: activeMessage?.objective,
      dismissMessage,
      muteNava: setMutedMode,
      setQuietMode,
      triggerMessage,
      setSuppressed: setIsSuppressed,
      isMounted,
      mode: state.mode
    }}>
      {children}
    </NavaContext.Provider>
  );
}

export function useNavaContext() {
  const context = useContext(NavaContext);
  if (context === undefined) {
    throw new Error('useNava must be used within a NavaProvider');
  }
  return context;
}
