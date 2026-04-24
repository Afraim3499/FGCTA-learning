// Shared TypeScript types for the Trading Academy platform
// This file is the single source of truth for all data types

// ============================================
// USER & AUTH
// ============================================

export type MarketTrack = "forex" | "crypto" | "gold" | "multi";
export type SkillLevel = "beginner" | "intermediate" | "advanced" | "institutional";
export type ExperienceLevel = "complete_beginner" | "some_experience" | "experienced";

export interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl: string | null;
  marketTrack: MarketTrack;
  createdAt: string;
}

export interface UserProgress {
  id: string;
  userId: string;
  currentLevel: number; // 0-9
  currentPhase: number; // 1-5
  xpTotal: number;
  xpRank: string;
  certLevel: number; // 0-5
  streakDays: number;
  streakStart: string | null;
  challengeExamsPassed: string[];
  strategyLabEnabled: boolean;
}

// ============================================
// COURSE / LEARNING
// ============================================

export type ModuleMarketTrack = "core" | "forex" | "crypto" | "gold";

export interface CourseLevel {
  level: number;
  title: string;
  status: "locked" | "unlocked" | "in_progress" | "completed";
  completionPct: number;
  moduleCount: number;
  modulesCompleted: number;
}

export interface CourseModule {
  id: string;
  level: number;
  moduleNumber: string; // e.g. "2.3"
  title: string;
  objective: string;
  strategyFamilies: string[];
  logicIds: string[];
  skillLevel: SkillLevel;
  marketTrack: ModuleMarketTrack;
  completed: boolean;
  locked: boolean;
  orderIndex: number;
}

export interface ModuleContent {
  id: string;
  title: string;
  objective: string;
  content: string; // markdown
  adaptations: {
    forex: string | null;
    crypto: string | null;
    gold: string | null;
  };
}

// ============================================
// KNOWLEDGE TESTS
// ============================================

export interface TestQuestion {
  id: string;
  question: string;
  options: string[];
  // correct answer index NOT sent to client
}

export interface TestSubmission {
  answers: { questionId: string; selectedIndex: number }[];
}

export interface TestResult {
  score: number; // percentage
  passed: boolean;
  weakAreas: string[];
  cooldownUntil: string | null;
  attemptsToday: number;
}

// ============================================
// TRADING ENGINE
// ============================================

export type TradeDirection = "buy" | "sell";
export type OrderType = "market" | "limit" | "stop" | "stop_limit" | "trailing_stop" | "oco";
export type PhaseStatus = "active" | "passed" | "failed_dd" | "failed_time" | "reset";
export type RuleEnforcement = "hard_block" | "soft_warning" | "silent";

export interface TradingPhase {
  id: string;
  phaseNumber: number;
  startingCapital: number;
  targetProfitPct: number;
  maxDrawdownPct: number;
  timeLimitDays: number;
  minTrades: number;
  minTradingDays: number;
  maxRiskPerTrade: number;
  maxPositions: number;
  maxTradesPerDay: number;
  maxLeverage: number;
}

export interface PhaseAttempt {
  id: string;
  userId: string;
  phaseNumber: number;
  attemptNumber: number;
  status: PhaseStatus;
  startingEquity: number;
  currentEquity: number;
  peakEquity: number;
  maxDrawdown: number;
  tradesCount: number;
  tradingDays: number;
  startedAt: string;
  endedAt: string | null;
  resetCount: number;
  scoreMultiplier: number;
  cooldownUntil: string | null;
  nearPass: boolean;
  timeRemainingDays: number;
}

export interface Trade {
  id: string;
  userId: string;
  attemptId: string;
  instrument: string;
  direction: TradeDirection;
  entryPrice: number;
  exitPrice: number | null;
  positionSize: number;
  leverage: number;
  stopLoss: number | null;
  takeProfit: number | null;
  riskAmount: number;
  riskPercent: number;
  pnl: number | null;
  rMultiple: number | null;
  holdDuration: number | null; // seconds
  orderType: OrderType;
  strategyTag: string | null;
  notes: string | null;
  openedAt: string;
  closedAt: string | null;
  isRevengeTrade: boolean;
  ruleViolations: string[];
}

export interface OpenPosition {
  tradeId: string;
  instrument: string;
  direction: TradeDirection;
  entryPrice: number;
  currentPrice: number;
  unrealizedPnl: number;
  size: number;
  stopLoss: number | null;
  takeProfit: number | null;
}

export interface RuleViolation {
  id: string;
  ruleId: string;
  ruleName: string;
  severity: RuleEnforcement;
  xpPenalty: number;
  occurredAt: string;
  tradeId: string | null;
}

// ============================================
// PERFORMANCE METRICS
// ============================================

export interface PerformanceMetrics {
  netPnl: number;
  winRate: number;
  profitFactor: number;
  avgRMultiple: number;
  expectancy: number;
  maxDrawdown: number;
  avgRiskPerTrade: number;
  riskRewardRatio: number;
  positionSizeCompliance: number;
  sharpeRatio: number;
  dailyPnlStdDev: number;
  maxConsecutiveLosses: number;
  tradingDayDistribution: number;
  ruleViolationsCount: number;
  stopLossCompliance: number;
  overtradingEvents: number;
  revengeTradeCount: number;
}

// ============================================
// CERTIFICATION
// ============================================

export interface CertificationStatus {
  currentLevel: number;
  levels: CertLevel[];
  projectedScore: number | null;
  scoreBreakdown: ScoreBreakdown | null;
}

export interface CertLevel {
  level: number;
  title: string;
  status: "locked" | "in_progress" | "earned";
  earnedAt: string | null;
  requirements: CertRequirement[];
}

export interface CertRequirement {
  name: string;
  met: boolean;
  currentValue: string;
  requiredValue: string;
}

export interface ScoreBreakdown {
  profitScore: number; // /40
  riskScore: number; // /30
  consistencyScore: number; // /20
  disciplineScore: number; // /10
  rawTotal: number;
  resetMultiplier: number;
  adjustedTotal: number;
  band: "distinction" | "merit" | "pass" | "provisional" | "fail";
}

// ============================================
// GAMIFICATION
// ============================================

export type BadgeRarity = "common" | "uncommon" | "rare" | "epic" | "legendary";

export interface XPSummary {
  total: number;
  rank: string;
  nextRankAt: number;
  recentActions: XPAction[];
}

export interface XPAction {
  action: string;
  amount: number;
  createdAt: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  iconUrl: string;
  rarity: BadgeRarity;
  earned: boolean;
  earnedAt: string | null;
}

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  name: string;
  avatarUrl: string | null;
  score: number;
  certLevel: number;
  marketTrack: MarketTrack;
}

export interface StreakInfo {
  currentStreak: number;
  longestStreak: number;
  lastActiveDate: string | null;
}

// ============================================
// API RESPONSE WRAPPERS
// ============================================

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
