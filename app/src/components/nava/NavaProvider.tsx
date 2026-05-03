'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { NavaMessage, NavaState, NavaUserMode } from '@/lib/nava/types';
import { NAVA_MESSAGES } from '@/lib/nava/registry';
import { getLocalStorageState, saveLocalStorageState, scrollToTarget } from '@/lib/nava/utils';

const NAVA_ALLOWED_ROUTES = [
  '/dashboard',
  '/course',
  '/test',
  '/lab',
  '/trading',
];

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
  context: null,
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
  const lastFetchRef = React.useRef<number>(0);

  const fetchContext = useCallback(async () => {
    // Route guard: Strictly only allow dashboard, course, test, lab, and trading
    const publicRoutes = ['/login', '/register', '/forgot-password', '/nava', '/pricing', '/about', '/program', '/curriculum', '/methodology', '/outcomes', '/journey', '/verify', '/checkout', '/free-trial', '/terms', '/privacy', '/disclaimer'];
    const isPublic = publicRoutes.some(route => pathname === route || pathname.startsWith(route + '/')) || pathname === '/';
    
    const isAllowed = NAVA_ALLOWED_ROUTES.some(route => pathname.startsWith(route));
    
    if (isPublic || !isAllowed) return;

    // 3-minute TTL to prevent spam
    const now = Date.now();
    if (now - lastFetchRef.current < 3 * 60 * 1000) return;
    
    try {
      const res = await fetch('/api/nava/context');
      if (res.ok) {
        const data = await res.json();
        setState(prev => {
          const newState = { ...prev, context: data };
          saveLocalStorageState(newState);
          return newState;
        });
        lastFetchRef.current = now;
      }
    } catch (error) {
      console.warn('[NAVA] Context fetch failed, falling back to static guidance.');
    }
  }, []);

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

    // Fetch context on initial load
    fetchContext();
  }, [fetchContext]);

  // Refetch context on major route changes
  useEffect(() => {
    if (pathname === '/dashboard' || pathname === '/course' || pathname === '/lab') {
      fetchContext();
    }
  }, [pathname, fetchContext]);

  // Automatic message selection logic
  useEffect(() => {
    if (!isMounted || state.mode === 'muted') return;

    // Route guard
    const isAllowed = NAVA_ALLOWED_ROUTES.some(route => pathname.startsWith(route));
    if (!isAllowed) {
      if (activeMessage) setActiveMessage(null);
      return;
    }

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
        const isGated = msg.variant === 'locked' || msg.trigger?.startsWith('gate_blocker_');
        const isRepeatedReview = msg.trigger === 'test_review_repeated' || msg.trigger === 'mission_review_repeated';
        const isHighPriority = (msg.priority || 0) >= 80;
        
        if (!isCritical && !isResult && !isGated && !isRepeatedReview && !isHighPriority) return false;
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
      
      // Phase 2B Review Triggers
      if (msg.trigger === 'test_review_repeated') {
        return !!state.context?.review?.test?.repeated;
      }
      if (msg.trigger === 'test_review_needed') {
        return !!state.context?.review?.test?.hasReviewNeeded && !state.context?.review?.test?.repeated;
      }
      if (msg.trigger === 'mission_review_repeated') {
        return !!state.context?.review?.mission?.repeated;
      }
      if (msg.trigger === 'mission_review_needed') {
        return !!state.context?.review?.mission?.hasReviewNeeded && !state.context?.review?.mission?.repeated;
      }
      if (msg.trigger === 'gate_blocker_module') {
        return state.context?.gates?.missingRequirement === 'module';
      }
      if (msg.trigger === 'gate_blocker_test') {
        return state.context?.gates?.missingRequirement === 'test';
      }
      if (msg.trigger === 'journal_review_habit') {
        return !!state.context?.journal?.reviewPromptEligible;
      }

      // Phase 2A Personalized Triggers
      if (msg.trigger === 'personalized_next_action') {
        return pathname === '/dashboard' && !!state.context?.nextAction;
      }
      if (msg.trigger === 'journal_milestone') {
        return !!state.context?.journal?.milestone;
      }

      // Phase 1 Legacy Triggers
      if (msg.trigger === 'dashboard_first_visit') {
        return pathname === '/dashboard' && !state.seenMessages[msg.id];
      }
      if (msg.trigger === 'dashboard_visit') {
        if (msg.id === 'level_0_tone_orientation') return state.context?.currentLevel === 0;
        if (msg.id === 'level_2_tone_orientation') return state.context?.currentLevel === 2;
        return false;
      }
      if (msg.trigger === 'module_visit') return pathname.includes('/course/module/');
      
      return false;
    });

    // Sort by priority
    possibleMessages.sort((a, b) => (b.priority || 0) - (a.priority || 0));
    let msg = possibleMessages[0] || null;

    // Apply personalization
    if (msg && state.context) {
      const ctx = state.context;
      let body = msg.body;
      let title = msg.title;
      let ctaHref = msg.ctaHref;
      let ctaLabel = msg.ctaLabel;

      if (msg.trigger === 'personalized_next_action' && ctx.nextAction) {
        body = body.replace('{level}', String(ctx.currentLevel ?? 0))
                   .replace('{type}', ctx.nextAction.type);
        ctaHref = ctx.nextAction.href;
        ctaLabel = 'Continue ' + ctx.nextAction.title;
      }

      // Inject dynamic links for gate blockers if available
      if (msg.trigger?.startsWith('gate_blocker_') && ctx.gates?.ctaHref) {
        ctaHref = ctx.gates.ctaHref;
      }

      if (body !== msg.body || title !== msg.title || ctaHref !== msg.ctaHref || ctaLabel !== msg.ctaLabel) {
        msg = { ...msg, body, title, ctaHref, ctaLabel };
      }
    }

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
  }, [isMounted, pathname, state.mode, state.quietUntil, isSuppressed, state.context, activeMessage]);

  const dismissMessage = useCallback((id: string) => {
    setState(prevState => {
      const currentMsgState = prevState.seenMessages[id];
      const newDismissCount = (currentMsgState?.dismissCount || 0) + 1;
      const sessionDismissCount = (prevState.session?.dismissCount || 0) + 1;
      
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
