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

export interface NavaMessage {
  id: string; // Unique slug
  variant: 'welcome' | 'tip' | 'warning' | 'celebration' | 'locked';
  trigger: string; // e.g., 'dashboard_returning', 'course_new_level'
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


export type NavaUserMode = "normal" | "quiet" | "muted";

export interface NavaState {
  mode: NavaUserMode;
  quietUntil?: number | null;
  session?: {
    id: string;
    seenCount: number;
    dismissCount: number;
    highAttentionShown: boolean;
    lastRoute?: string;
    autoMessageShownForRoute?: string;
  };
  seenMessages: Record<string, {
    seenCount: number;
    dismissCount: number;
    lastSeenAt?: number;
    dismissedAt: number | null;
    actionTakenAt?: number | null;
  }>;
  muted: boolean; // Legacy support
}
