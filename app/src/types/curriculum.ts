export type CardType = 
  | "mission_brief" 
  | "visual_intro" 
  | "concept" 
  | "mechanics" 
  | "driver" 
  | "mistake" 
  | "pattern" 
  | "practice" 
  | "drill" 
  | "task" 
  | "summary" 
  | "debrief"
  | string;

export interface KeyTerm {
  term: string;
  definition: string;
}

export interface CardContext {
  keyTerms?: Array<string | KeyTerm>;
  whyThisMatters?: string;
  realLifeExample?: string;
  commonMistake?: string;
  quickNote?: string;
  defaultExpanded?: string[];
}

export interface LessonCard {
  type: CardType;
  title: string;
  label: string;
  visualKey?: string;
  body?: string;
  objective?: string;
  context?: CardContext;
  taskData?: any;
  items?: any[];
  comparison?: any;
  scenario?: any;
}

export interface ModuleTrack {
  id: string; // core, forex, gold, crypto
  label: string;
  cards: LessonCard[];
}

export interface AcademyModule {
  moduleNumber: string;
  level: number;
  title: string;
  objective: string;
  skillLevel: string;
  orderIndex: number;
  tracks: Record<string, LessonCard[]>; // e.g., { core: [], forex: [] }
}
