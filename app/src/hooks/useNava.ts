'use client';

import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { NavaMessage, NavaState } from '@/lib/nava/types';
import { NAVA_MESSAGES } from '@/lib/nava/registry';
import { getLocalStorageState, saveLocalStorageState, scrollToTarget } from '@/lib/nava/utils';

const INITIAL_STATE: NavaState = {
  seenMessages: {},
  muted: false,
};

export function useNava() {
  const pathname = usePathname();
  const [activeMessage, setActiveMessage] = useState<NavaMessage | null>(null);
  const [state, setState] = useState<NavaState>(INITIAL_STATE);
  const [isMounted, setIsMounted] = useState(false);

  // Initialize state from localStorage
  useEffect(() => {
    setIsMounted(true);
    const storedState = getLocalStorageState();
    if (storedState) {
      setState(storedState);
    }
  }, []);

  useEffect(() => {
    if (!isMounted || state.muted) return;

    const possibleMessages = NAVA_MESSAGES.filter((msg) => {
      // 1. Route check
      if (msg.targetRoute && !pathname.startsWith(msg.targetRoute)) {
        return false;
      }

      // 2. Suppression check (Phase 1A)
      // Hide Nava during active tests or on the chart canvas
      const isDrawing = pathname.includes('/lab') || pathname.includes('/practice');
      const isTesting = pathname.includes('/test/') && !pathname.endsWith('/result');
      
      if (isTesting || isDrawing) {
        return false;
      }

      // Explicit suppression from message config
      if (msg.suppressDuring?.some(s => pathname.includes(s))) {
        return false;
      }

      const msgState = state.seenMessages[msg.id];

      // 3. "Show once" check
      if (msg.showOnce && msgState?.seenCount > 0) {
        return false;
      }

      // 4. Max show count check
      if (msg.maxShowCount && msgState?.seenCount >= msg.maxShowCount) {
        return false;
      }

      // 5. Dismissed check
      if (msgState?.dismissedAt) {
        return false;
      }

      // 6. Cooldown check
      if (msg.cooldownDays && msgState?.lastSeenAt) {
        const cooldownMs = msg.cooldownDays * 24 * 60 * 60 * 1000;
        if (Date.now() - msgState.lastSeenAt < cooldownMs) {
          return false;
        }
      }

      // 7. Trigger Logic (Phase 1A Remediation)
      // If no trigger is specified, it's a general context message (default allowed)
      if (!msg.trigger) return true;

      // dashboard_first_visit: Only on dashboard, if never seen
      if (msg.trigger === 'dashboard_first_visit') {
        const hasSeenDashboard = state.seenMessages[msg.id];
        return pathname === '/dashboard' && !hasSeenDashboard;
      }

      // dashboard_visit: Only on dashboard (Disabled auto-trigger in favor of manual dynamic trigger)
      if (msg.trigger === 'dashboard_visit') {
        return false;
      }

      // module_visit: Only on module pages
      if (msg.trigger === 'module_visit') {
        return pathname.includes('/course/module/');
      }

      // test_result_ready: Only on test result page (Disabled auto-trigger for manual control)
      if (msg.trigger === 'test_result_ready') {
        return false;
      }

      // manual / custom triggers: Skip automatic selection
      // These must be triggered via triggerMessage()
      return false;
    });

    // Sort by priority (higher first)
    possibleMessages.sort((a, b) => (b.priority || 0) - (a.priority || 0));

    const msg = possibleMessages[0] || null;

    if (msg) {
      setActiveMessage(msg);
      
      // Update seen state - but only if we haven't already marked this message in this render cycle
      // Actually, we only want to trigger this once per route change.
      // If we update the state here, it will trigger the effect again because 'state' is a dependency.
      // We can use a functional update to avoid 'state' as a dependency.
      
      setState(prevState => {
        const currentMsgState = prevState.seenMessages[msg.id];
        
        // Check if we already updated for this message recently (to prevent loop)
        // However, since we are in an effect triggered by pathname, we only need to worry 
        // about the state update triggering the effect again.
        
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

      // Handle auto-scroll
      if (msg.scrollToTarget && msg.targetSelector) {
        setTimeout(() => {
          scrollToTarget(msg.targetSelector!);
        }, 500);
      }
    } else {
      setActiveMessage(null);
    }
    // We remove 'state' from dependencies to avoid infinite loop.
    // We only want to re-run message selection when the route changes or when we mount.
  }, [isMounted, pathname, state.muted]);

  const dismissMessage = useCallback((id: string) => {
    const newState = {
      ...state,
      seenMessages: {
        ...state.seenMessages,
        [id]: {
          ...state.seenMessages[id],
          dismissedAt: Date.now(),
        },
      },
    };
    setState(newState);
    saveLocalStorageState(newState);
    setActiveMessage(null);
  }, [state]);

  const muteNava = useCallback(() => {
    const newState = { ...state, muted: true };
    setState(newState);
    saveLocalStorageState(newState);
    setActiveMessage(null);
  }, [state]);

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

      // Handle auto-scroll for triggered messages too
      if (msg.scrollToTarget && msg.targetSelector) {
        setTimeout(() => {
          scrollToTarget(msg.targetSelector!);
        }, 500);
      }
    }
  }, []);

  return {
    activeMessage,
    dismissMessage,
    muteNava,
    triggerMessage,
    isMounted,
  };
}

