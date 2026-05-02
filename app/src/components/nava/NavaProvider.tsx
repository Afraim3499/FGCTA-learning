'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { NavaMessage, NavaState } from '@/lib/nava/types';
import { NAVA_MESSAGES } from '@/lib/nava/registry';
import { getLocalStorageState, saveLocalStorageState, scrollToTarget } from '@/lib/nava/utils';

interface NavaContextType {
  activeMessage: NavaMessage | null;
  activeObjective?: { label: string; priority: 'primary' | 'secondary' };
  dismissMessage: (id: string) => void;
  muteNava: () => void;
  triggerMessage: (id: string, overrides?: Partial<NavaMessage>) => void;
  setSuppressed: (suppressed: boolean) => void;
  isMounted: boolean;
}

const NavaContext = createContext<NavaContextType | undefined>(undefined);

const INITIAL_STATE: NavaState = {
  seenMessages: {},
  muted: false,
};

export function NavaProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [activeMessage, setActiveMessage] = useState<NavaMessage | null>(null);
  const [state, setState] = useState<NavaState>(INITIAL_STATE);
  const [isMounted, setIsMounted] = useState(false);
  const [isSuppressed, setIsSuppressed] = useState(false);

  // Initialize state from localStorage
  useEffect(() => {
    setIsMounted(true);
    const storedState = getLocalStorageState();
    if (storedState) {
      setState(storedState);
    }
  }, []);

  // Automatic message selection logic
  useEffect(() => {
    if (!isMounted || state.muted) return;

    // Rule: Don't clear manually triggered messages unless route changed
    if (activeMessage) {
      const isStillValidRoute = !activeMessage.targetRoute || pathname.startsWith(activeMessage.targetRoute);
      if (isStillValidRoute) return;
    }

    const possibleMessages = NAVA_MESSAGES.filter((msg) => {
      if (msg.targetRoute && !pathname.startsWith(msg.targetRoute)) return false;
      
      if (isSuppressed) return false;

      const isDrawing = pathname.includes('/practice');
      const isTesting = pathname.includes('/test/') && !pathname.endsWith('/result');
      if (isTesting || isDrawing) return false;

      if (msg.suppressDuring?.some(s => pathname.includes(s))) return false;

      const msgState = state.seenMessages[msg.id];
      if (msg.showOnce && msgState?.seenCount > 0) return false;
      if (msg.maxShowCount && msgState?.seenCount >= msg.maxShowCount) return false;
      if (msgState?.dismissedAt) return false;

      if (msg.cooldownDays && msgState?.lastSeenAt) {
        const cooldownMs = msg.cooldownDays * 24 * 60 * 60 * 1000;
        if (Date.now() - msgState.lastSeenAt < cooldownMs) return false;
      }

      if (!msg.trigger) return true;
      if (msg.trigger === 'dashboard_first_visit') {
        return pathname === '/dashboard' && !state.seenMessages[msg.id];
      }
      if (msg.trigger === 'dashboard_visit') return false; // Manual trigger only
      if (msg.trigger === 'module_visit') return pathname.includes('/course/module/');
      if (msg.trigger === 'test_result_ready') return false; // Manual trigger only
      
      return false;
    });

    possibleMessages.sort((a, b) => (b.priority || 0) - (a.priority || 0));
    const msg = possibleMessages[0] || null;

    if (msg) {
      setActiveMessage(msg);
      setState(prevState => {
        const currentMsgState = prevState.seenMessages[msg.id];
        const newState = {
          ...prevState,
          seenMessages: {
            ...prevState.seenMessages,
            [msg.id]: {
              seenCount: (currentMsgState?.seenCount || 0) + 1,
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
  }, [isMounted, pathname, state.muted, isSuppressed]);

  const dismissMessage = useCallback((id: string) => {
    setState(prevState => {
      const newState = {
        ...prevState,
        seenMessages: {
          ...prevState.seenMessages,
          [id]: {
            ...prevState.seenMessages[id],
            dismissedAt: Date.now(),
          },
        },
      };
      saveLocalStorageState(newState);
      return newState;
    });
    setActiveMessage(null);
  }, []);

  const muteNava = useCallback(() => {
    setState(prevState => {
      const newState = { ...prevState, muted: true };
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
        const newState = {
          ...prevState,
          seenMessages: {
            ...prevState.seenMessages,
            [baseMsg.id]: {
              seenCount: (currentMsgState?.seenCount || 0) + 1,
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
      muteNava,
      triggerMessage,
      setSuppressed: setIsSuppressed,
      isMounted
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
