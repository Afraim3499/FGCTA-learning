export type NavaMarkerType =
  | 'nava_badge'
  | 'soft_pulse'
  | 'highlight_card'
  | 'tooltip_arrow'
  | 'objective_strip'
  | 'locked_gate_marker';

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
  
  // Guidance Fields
  targetRoute?: string;
  targetSelector?: string; // CSS selector or data-nava-target
  markerType?: NavaMarkerType;
  scrollToTarget?: boolean;
  
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

export interface NavaState {
  seenMessages: Record<string, {
    seenCount: number;
    lastSeenAt: number;
    dismissedAt: number | null;
  }>;
  muted: boolean;
}
