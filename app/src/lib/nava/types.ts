export type NavaMarkerType =
  | 'nava_badge'
  | 'soft_pulse'
  | 'highlight_card'
  | 'tooltip_arrow'
  | 'objective_strip'
  | 'locked_gate_marker'
  | 'spark';

export type NavaSparkVariant = 'next' | 'available' | 'locked' | 'review' | 'milestone';

export type NavaAttentionLevel = 'high' | 'medium' | 'low';

export type NavaMode = 
  | 'cinematic_intro' 
  | 'directional_focus' 
  | 'side_tip' 
  | 'recovery_support' 
  | 'celebration_moment';

export type NavaPose = 
  | 'full_body' 
  | 'bust_neutral' 
  | 'pointing' 
  | 'empathy' 
  | 'celebration' 
  | 'avatar';

export type NavaTrigger = 
  | 'dashboard_first_visit'
  | 'dashboard_visit'
  | 'module_visit'
  | 'test_result_ready'
  | 'mission_result_ready'
  | 'personalized_next_action'
  | 'journal_milestone'
  | 'test_review_needed'
  | 'mission_review_needed';

export interface NavaMessage {
  id: string; // Unique slug
  variant: 'welcome' | 'tip' | 'warning' | 'celebration' | 'locked';
  trigger: NavaTrigger; 
  title: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
  
  // Interaction Layers (Phase 1A)
  attentionLevel: NavaAttentionLevel;
  mode: NavaMode;
  pose: NavaPose;
  
  // Guidance Fields (Phase 1B)
  targetRoute?: string;
  targetSelector?: string; // CSS selector or data-nava-target
  markerType?: NavaMarkerType;
  sparkVariant?: NavaSparkVariant;
  scrollToTarget?: boolean;
  objective?: {
    label: string;
    priority: 'primary' | 'secondary';
  };
  
  // Placement/Rules
  placement?: 'top' | 'bottom' | 'inline';
  priority?: number;
  suppressDuring?: string[]; // e.g., ["active_test", "chart_drawing"]
  
  // Persistence
  dismissible: boolean;
  showOnce: boolean;
  maxShowCount?: number;
  cooldownDays?: number;
}

export type NavaSession = {
  id: string;
  seenCount: number;
  dismissCount: number;
  highAttentionShown: boolean;
  lastRoute?: string;
  autoMessageShownForRoute?: string;
};

export type NavaUserMode = "normal" | "quiet" | "muted";

export type NavaContextViewModel = {
  currentLevel?: number;
  xpTotal?: number;

  nextAction?: {
    title: string;
    href: string;
    type: 'module' | 'test' | 'mission' | 'lab' | 'course' | 'unknown';
    targetSelector?: string;
    confidence: 'high' | 'medium' | 'fallback';
  };

  journal?: {
    count: number;
    milestone?: 'first_note' | 'third_note' | null;
  };

  testReview?: {
    hasRecentReviewNeeded: boolean;
    level?: number;
    attemptCount?: number;
  };

  missionReview?: {
    hasRecentReviewNeeded: boolean;
    level?: number;
    attemptCount?: number;
  };

  gate?: {
    hasBlockedNextStep?: boolean;
    reason?: string;
  };
};

export interface NavaState {
  mode: NavaUserMode;
  quietUntil?: number | null;
  session?: NavaSession;
  context?: NavaContextViewModel | null;
  seenMessages: Record<string, {
    seenCount: number;
    dismissCount: number;
    lastSeenAt?: number;
    dismissedAt: number | null;
    actionTakenAt?: number | null;
  }>;
  muted: boolean; // Legacy support
}
