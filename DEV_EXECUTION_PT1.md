# DEVELOPER EXECUTION PLAN — PART 1
# Features, API, Database, Screens

---

# STEP 1 — FEATURE → TASK BREAKDOWN

---

## A. LEARNING ENGINE

### Feature L1: Course Module System
| # | Task | Type | Effort |
|---|------|------|--------|
| L1.1 | Create `course_modules` table + seed L0–L2 content | Backend/DB | 4h |
| L1.2 | `GET /api/course/levels` — list all levels with lock status | API | 2h |
| L1.3 | `GET /api/course/modules/:levelId` — list modules per level | API | 2h |
| L1.4 | `GET /api/course/module/:moduleId` — fetch module content | API | 2h |
| L1.5 | Markdown/rich-text content renderer component | Frontend | 4h |
| L1.6 | Market adaptation tab switcher (Forex/Crypto/Gold tabs) | Frontend | 3h |
| L1.7 | `POST /api/course/module/:moduleId/complete` — mark done, award XP | API | 2h |
| L1.8 | Module completion progress bar (per level) | Frontend | 2h |
| L1.9 | Gate logic: check all modules complete before test unlock | Backend | 2h |

### Feature L2: Knowledge Test System
| # | Task | Type | Effort |
|---|------|------|--------|
| L2.1 | Create `knowledge_tests` table + `test_attempts` table | DB | 2h |
| L2.2 | Seed question pools (min 60 questions per level, L0–L2 first) | Content | 8h |
| L2.3 | `GET /api/test/:levelId` — serve randomized 20-question subset | API | 3h |
| L2.4 | Answer order randomization logic | Backend | 1h |
| L2.5 | `POST /api/test/:levelId/submit` — grade, store attempt, check pass | API | 3h |
| L2.6 | Cooldown enforcement (4h between retakes, max 3/day) | Backend | 2h |
| L2.7 | Test UI: question display, timer, answer selection, submit | Frontend | 6h |
| L2.8 | Result screen: score, pass/fail, weak areas highlighted | Frontend | 3h |
| L2.9 | Gate trigger: test passed → unlock next level + trading phase | Backend | 2h |

### Feature L3: Challenge Exam (Skip Gate)
| # | Task | Type | Effort |
|---|------|------|--------|
| L3.1 | Combined exam pools (L0–L2, L3–L4, L5–L7) | Content | 4h |
| L3.2 | `POST /api/test/challenge/:gateId/submit` — 90% threshold | API | 2h |
| L3.3 | Skip gate UI on onboarding (for "experienced" users) | Frontend | 2h |

---

## B. TRADING ENGINE

### Feature T1: Price Engine
| # | Task | Type | Effort |
|---|------|------|--------|
| T1.1 | Historical data ingestion pipeline (CSV/API → DB) | Backend | 8h |
| T1.2 | Data storage: time-series table for OHLCV candles | DB | 3h |
| T1.3 | Replay engine: serve candles at configurable speed (1x–50x) | Backend | 8h |
| T1.4 | WebSocket server: `price:tick` event broadcasting | Backend | 4h |
| T1.5 | Anti-memorization: random start, date hiding, ±0.1% jitter | Backend | 4h |
| T1.6 | Synthetic data generator (regime-controlled) | Backend | 12h |
| T1.7 | Blend mode: splice multiple periods + mirror mode | Backend | 6h |
| T1.8 | Instrument obfuscation (hide real names) | Backend | 2h |
| T1.9 | Client-side chart integration (Lightweight Charts + WS feed) | Frontend | 8h |

### Feature T2: Order Execution
| # | Task | Type | Effort |
|---|------|------|--------|
| T2.1 | `POST /api/trade/open` — validate + execute order | API | 6h |
| T2.2 | `POST /api/trade/close` — close position, calc P&L | API | 4h |
| T2.3 | Market order fill with simulated spread + slippage | Backend | 3h |
| T2.4 | Limit order: add to pending, fill on tick match | Backend | 4h |
| T2.5 | Stop order + stop-limit order logic | Backend | 4h |
| T2.6 | Trailing stop logic (follow price by distance/%) | Backend | 3h |
| T2.7 | OCO (one-cancels-other) paired order logic | Backend | 3h |
| T2.8 | Take-profit auto-close on target hit | Backend | 2h |
| T2.9 | Margin calculation + margin call detection | Backend | 4h |
| T2.10 | Swap/funding rate application (overnight/8h) | Backend | 3h |
| T2.11 | Commission calculation per instrument | Backend | 1h |
| T2.12 | Order panel UI (direction, size, SL, TP, R:R preview) | Frontend | 6h |
| T2.13 | Open positions list (real-time unrealized P&L via WS) | Frontend | 4h |
| T2.14 | Trade log / history table | Frontend | 3h |

### Feature T3: Rules Engine
| # | Task | Type | Effort |
|---|------|------|--------|
| T3.1 | Rules validator middleware (runs on every order submit) | Backend | 4h |
| T3.2 | R001: Max risk per trade (2%) — hard block | Backend | 2h |
| T3.3 | R002: Max open positions (per phase) — hard block | Backend | 1h |
| T3.4 | R003: Stop-loss required — soft warn (3x) → hard block | Backend | 2h |
| T3.5 | R004: Max daily loss (3%) — lock trading for day | Backend | 3h |
| T3.6 | R005: Max trades per day — hard block | Backend | 1h |
| T3.7 | R006: No trades in final 5 min of session — hard block | Backend | 1h |
| T3.8 | R007: Min risk per trade (0.5%) — hard block | Backend | 1h |
| T3.9 | R008: Max single-trade risk (3% of starting capital) — hard block | Backend | 1h |
| T3.10 | R009: Final 25% time limit risk reduction (1%) — soft→hard | Backend | 2h |
| T3.11 | R010: Min 5 trades before reset available | Backend | 1h |
| T3.12 | R011: Escalation detection (3 losses + size increase) — soft warn | Backend | 3h |
| T3.13 | Rule violation logging (`rule_violations` table) | Backend | 2h |
| T3.14 | Violation notification UI (overlay with rule explanation) | Frontend | 3h |

### Feature T4: Phase System
| # | Task | Type | Effort |
|---|------|------|--------|
| T4.1 | Create `trading_phases` table + seed 5 phases | DB | 2h |
| T4.2 | Create `user_phase_attempts` table | DB | 2h |
| T4.3 | Phase activation: create attempt record on unlock | Backend | 2h |
| T4.4 | Capital tracking: current equity, peak equity, drawdown | Backend | 3h |
| T4.5 | Target hit detection → phase passed | Backend | 2h |
| T4.6 | Drawdown breach detection → phase failed | Backend | 2h |
| T4.7 | Time limit expiry check (daily cron job) | Backend | 2h |
| T4.8 | Min trade count + min trading days validation | Backend | 2h |
| T4.9 | Phase status dashboard (capital, target, DD, trades, days) | Frontend | 4h |
| T4.10 | Phase completion celebration screen | Frontend | 3h |

### Feature T5: Reset System
| # | Task | Type | Effort |
|---|------|------|--------|
| T5.1 | Reset counter per phase per user | Backend | 1h |
| T5.2 | Score multiplier lookup (0→1.00, 1→0.92, etc.) | Backend | 1h |
| T5.3 | Cooldown escalation (24h, 48h, 72h, 96h) | Backend | 2h |
| T5.4 | New price data assignment on reset | Backend | 2h |
| T5.5 | R010 check: min 5 trades before reset allowed | Backend | 1h |
| T5.6 | `POST /api/phase/reset` — validate cooldown, create new attempt | API | 3h |
| T5.7 | Reset UI: multiplier preview, cooldown timer, confirmation | Frontend | 3h |

### Feature T6: Performance Tracking
| # | Task | Type | Effort |
|---|------|------|--------|
| T6.1 | Create `daily_snapshots` table | DB | 1h |
| T6.2 | Daily snapshot cron: capture equity, P&L, trades, violations | Backend | 3h |
| T6.3 | Metric calculators: win rate, profit factor, expectancy | Backend | 3h |
| T6.4 | Metric calculators: Sharpe, R-multiple, risk consistency | Backend | 4h |
| T6.5 | Metric calculators: max DD, consec losses, SL compliance | Backend | 3h |
| T6.6 | Revenge trade detection logic | Backend | 3h |
| T6.7 | `GET /api/performance/:attemptId` — full metrics response | API | 2h |
| T6.8 | Performance dashboard UI (equity curve, metric cards) | Frontend | 8h |
| T6.9 | Trade journal: notes field per trade, strategy tag | Frontend | 3h |

### Feature T7: Strategy Lab
| # | Task | Type | Effort |
|---|------|------|--------|
| T7.1 | Sandbox mode: no phase rules, unlimited capital, no scoring | Backend | 3h |
| T7.2 | `POST /api/lab/start` — create sandbox session | API | 2h |
| T7.3 | Lab UI: reuse trading terminal, "Lab Mode" banner | Frontend | 2h |

---

## C. CERTIFICATION ENGINE

### Feature C1: Certification Scoring
| # | Task | Type | Effort |
|---|------|------|--------|
| C1.1 | Score calculator: profit sub-score (4 metrics → /40) | Backend | 3h |
| C1.2 | Score calculator: risk sub-score (3 metrics → /30) | Backend | 2h |
| C1.3 | Score calculator: consistency sub-score (2 metrics → /20) | Backend | 2h |
| C1.4 | Score calculator: discipline sub-score (1 metric → /10) | Backend | 1h |
| C1.5 | Final score aggregation + reset multiplier application | Backend | 2h |
| C1.6 | Market-adjusted scoring benchmarks (Gold tighter consistency) | Backend | 2h |

### Feature C2: Certification Gates
| # | Task | Type | Effort |
|---|------|------|--------|
| C2.1 | Create `certifications` table | DB | 1h |
| C2.2 | Gate checker: Level 1 requirements (L0–L2 + Phase 1 + metrics) | Backend | 3h |
| C2.3 | Gate checker: Level 2–4 requirements | Backend | 4h |
| C2.4 | Gate checker: Level 5 (all levels + Phase 5 + score ≥ 65) | Backend | 2h |
| C2.5 | Auto-check gates after phase completion | Backend | 2h |
| C2.6 | `GET /api/certification/status` — current level + requirements | API | 2h |
| C2.7 | Cert journey page (levels, checkmarks, requirements) | Frontend | 4h |

### Feature C3: Certificate Generation
| # | Task | Type | Effort |
|---|------|------|--------|
| C3.1 | Certificate PDF template (branded, with scores) | Design | 4h |
| C3.2 | PDF generation service (Puppeteer or react-pdf) | Backend | 4h |
| C3.3 | Unique cert ID generation (CERT-XXXXX-XXXXX) | Backend | 1h |
| C3.4 | `GET /api/certification/:certId/download` — serve PDF | API | 1h |
| C3.5 | Public verification page `/verify/:certId` | Frontend | 3h |
| C3.6 | Cert email delivery (Resend) | Backend | 2h |

### Feature C4: Provisional Cert + Recovery Phase
| # | Task | Type | Effort |
|---|------|------|--------|
| C4.1 | Score 60–64 → "Advanced Trader" provisional status | Backend | 2h |
| C4.2 | Recovery phase: Phase 5 rules, reset counter frozen | Backend | 3h |
| C4.3 | Recovery score replaces worst-phase performance | Backend | 2h |

---

## D. GAMIFICATION ENGINE

### Feature G1: XP System
| # | Task | Type | Effort |
|---|------|------|--------|
| G1.1 | Create `xp_ledger` table | DB | 1h |
| G1.2 | XP award service (validates no duplicates, applies daily cap) | Backend | 3h |
| G1.3 | XP rank calculator (total XP → rank title) | Backend | 1h |
| G1.4 | Event listeners: module complete, test pass, trade, violation | Backend | 3h |
| G1.5 | `GET /api/xp/summary` — total, rank, recent history | API | 1h |
| G1.6 | XP bar + rank display component | Frontend | 2h |
| G1.7 | XP award toast notification (+50 XP!) | Frontend | 1h |

### Feature G2: Badge System
| # | Task | Type | Effort |
|---|------|------|--------|
| G2.1 | Create `badges` + `user_badges` tables | DB | 1h |
| G2.2 | Seed 28 badge definitions with conditions | DB | 2h |
| G2.3 | Badge condition checker service (runs on relevant events) | Backend | 6h |
| G2.4 | `GET /api/badges` — all badges + earned status | API | 1h |
| G2.5 | Badge collection page (grid with locked/unlocked) | Frontend | 3h |
| G2.6 | Badge earned celebration modal | Frontend | 2h |

### Feature G3: Streak System
| # | Task | Type | Effort |
|---|------|------|--------|
| G3.1 | Streak tracking: consecutive clean trading days | Backend | 3h |
| G3.2 | Streak reset logic (missed day = reset to 0) | Backend | 1h |
| G3.3 | Streak display component (🔥 14 days) | Frontend | 1h |

### Feature G4: Leaderboard
| # | Task | Type | Effort |
|---|------|------|--------|
| G4.1 | Create `leaderboard_cache` table | DB | 1h |
| G4.2 | Leaderboard score calculator (cert 40% + XP 20% + discipline 25% + consistency 15%) | Backend | 3h |
| G4.3 | Cache refresh cron (every 15 min) | Backend | 2h |
| G4.4 | `GET /api/leaderboard?scope=global&market=forex` — paginated | API | 2h |
| G4.5 | Leaderboard page (global, market, weekly, discipline tabs) | Frontend | 4h |
| G4.6 | Anti-gaming: min trade count for ranking eligibility | Backend | 1h |

---

# STEP 2 — API DESIGN

---

## Auth

| Method | Endpoint | Input | Output | Purpose |
|--------|----------|-------|--------|---------|
| POST | `/api/auth/register` | `{email, password, name}` | `{user, token}` | Create account |
| POST | `/api/auth/login` | `{email, password}` | `{user, token}` | Login |
| GET | `/api/auth/me` | Bearer token | `{user, progress}` | Current user + progress |

## Course

| Method | Endpoint | Input | Output | Purpose |
|--------|----------|-------|--------|---------|
| GET | `/api/course/levels` | Bearer token | `[{level, title, status, completionPct}]` | All levels with lock status |
| GET | `/api/course/modules/:levelId` | Bearer token | `[{module, title, completed, locked}]` | Modules in level |
| GET | `/api/course/module/:moduleId` | Bearer token | `{content, adaptations{forex,crypto,gold}}` | Module content |
| POST | `/api/course/module/:moduleId/complete` | Bearer token | `{xpAwarded, nextModule, levelComplete}` | Mark complete |

## Tests

| Method | Endpoint | Input | Output | Purpose |
|--------|----------|-------|--------|---------|
| GET | `/api/test/:levelId` | Bearer token | `{questions[20], timeLimit}` | Get randomized test |
| POST | `/api/test/:levelId/submit` | `{answers[]}` | `{score, passed, weakAreas, cooldownUntil}` | Submit + grade |
| GET | `/api/test/:levelId/status` | Bearer token | `{attempts, lastScore, cooldownUntil}` | Test attempt status |
| POST | `/api/test/challenge/:gateId/submit` | `{answers[]}` | `{score, passed, levelsSkipped}` | Challenge exam |

## Trading

| Method | Endpoint | Input | Output | Purpose |
|--------|----------|-------|--------|---------|
| POST | `/api/trade/open` | `{instrument, direction, size, sl, tp, orderType, leverage}` | `{tradeId, fillPrice, slippage}` or `{rejected, ruleViolated}` | Open position |
| POST | `/api/trade/close/:tradeId` | Bearer token | `{pnl, rMultiple, newEquity}` | Close position |
| GET | `/api/trade/positions` | Bearer token | `[{tradeId, instrument, direction, unrealizedPnl}]` | Open positions |
| GET | `/api/trade/history` | `?attemptId&page&limit` | `[{trade records}]` | Trade log |
| PATCH | `/api/trade/:tradeId/journal` | `{notes, strategyTag}` | `{updated}` | Add journal entry |

## Phase

| Method | Endpoint | Input | Output | Purpose |
|--------|----------|-------|--------|---------|
| GET | `/api/phase/status` | Bearer token | `{phase, equity, target, dd, trades, days, timeRemaining}` | Current phase status |
| POST | `/api/phase/reset` | Bearer token | `{resetCount, multiplier, cooldownHours}` | Reset current phase |
| GET | `/api/phase/history` | Bearer token | `[{phase, attempt, status, score}]` | All phase attempts |

## Performance

| Method | Endpoint | Input | Output | Purpose |
|--------|----------|-------|--------|---------|
| GET | `/api/performance/:attemptId` | Bearer token | `{winRate, profitFactor, sharpe, maxDD, rMultiple, ...}` | Full metrics |
| GET | `/api/performance/equity-curve/:attemptId` | Bearer token | `[{date, equity}]` | Equity curve data |
| GET | `/api/performance/diagnostic` | Bearer token | `{weaknesses[], recommendations[]}` | After 3 failures |

## Certification

| Method | Endpoint | Input | Output | Purpose |
|--------|----------|-------|--------|---------|
| GET | `/api/certification/status` | Bearer token | `{currentLevel, requirements[], projectedScore}` | Cert progress |
| GET | `/api/certification/:certId/download` | Bearer token | PDF file | Download cert |
| GET | `/api/verify/:publicCertId` | Public | `{name, level, score, market, date}` | Public verification |

## Gamification

| Method | Endpoint | Input | Output | Purpose |
|--------|----------|-------|--------|---------|
| GET | `/api/xp/summary` | Bearer token | `{total, rank, recentActions[]}` | XP overview |
| GET | `/api/badges` | Bearer token | `[{badge, earned, earnedAt}]` | All badges |
| GET | `/api/leaderboard` | `?scope&market&page` | `[{rank, name, score, certLevel}]` | Rankings |
| GET | `/api/streak` | Bearer token | `{currentStreak, longestStreak}` | Streak info |

## WebSocket Events

| Event | Direction | Payload |
|-------|-----------|---------|
| `price:tick` | Server→Client | `{instrument, bid, ask, ts}` |
| `position:update` | Server→Client | `{tradeId, unrealizedPnl}` |
| `order:filled` | Server→Client | `{tradeId, fillPrice}` |
| `order:rejected` | Server→Client | `{reason, ruleId}` |
| `rule:violation` | Server→Client | `{ruleId, message, xpPenalty}` |
| `xp:awarded` | Server→Client | `{action, amount, newTotal}` |
| `badge:earned` | Server→Client | `{badgeName, rarity}` |
| `phase:update` | Server→Client | `{equity, ddPct, progressPct}` |

---

# STEP 3 — DATABASE FINALIZATION

## Index Strategy

| Table | Index | Type | Purpose |
|-------|-------|------|---------|
| `users` | `email` | UNIQUE | Login lookup |
| `module_completions` | `(user_id, module_id)` | UNIQUE | Prevent duplicate completions |
| `test_attempts` | `(user_id, test_id, attempted_at)` | BTREE | Cooldown check |
| `trades` | `(user_id, attempt_id)` | BTREE | Trade history queries |
| `trades` | `closed_at` | BTREE | Performance calculations |
| `daily_snapshots` | `(user_id, attempt_id, date)` | UNIQUE | One snapshot per day |
| `xp_ledger` | `(user_id, source_id, source_type)` | UNIQUE | Prevent duplicate XP |
| `xp_ledger` | `(user_id, created_at)` | BTREE | Daily cap enforcement |
| `user_badges` | `(user_id, badge_id)` | UNIQUE | One badge per user |
| `leaderboard_cache` | `leaderboard_score` | BTREE DESC | Ranking queries |
| `user_phase_attempts` | `(user_id, phase_id)` | BTREE | Phase history lookup |
| `rule_violations` | `(user_id, attempt_id)` | BTREE | Violation counts |
| `certifications` | `cert_id_public` | UNIQUE | Public verification |

## Additions to Schema (from audit)

```sql
-- Add to user_phase_attempts:
  cooldown_until    TIMESTAMP        -- when reset becomes available
  near_pass         BOOLEAN          -- was within 80% of target at failure

-- Add to trades:
  is_revenge_trade  BOOLEAN DEFAULT FALSE
  risk_consistency_flag BOOLEAN DEFAULT FALSE  -- micro or oversized

-- Add to user_progress:
  challenge_exams_passed  VARCHAR[]  -- which gates skipped
  strategy_lab_enabled    BOOLEAN DEFAULT FALSE

-- New table:
diagnostic_reports {
  id              UUID PK
  user_id         UUID FK → users
  phase_id        UUID FK → trading_phases
  consecutive_failures INT
  weakness_analysis JSONB    -- {pattern, metrics, recommendations}
  created_at      TIMESTAMP
}
```

---

# STEP 4 — FRONTEND SCREEN MAP

## Screen 1: Dashboard (`/dashboard`)
| Component | Data Required | User Actions |
|-----------|--------------|-------------|
| CourseProgressCard | `GET /api/course/levels` | Click → go to course |
| PhaseStatusCard | `GET /api/phase/status` | Click → go to trading |
| CertProgressCard | `GET /api/certification/status` | Click → go to cert page |
| XPBar + RankBadge | `GET /api/xp/summary` | — |
| StreakCounter | `GET /api/streak` | — |
| RecentBadges (last 3) | `GET /api/badges` | Click → badges page |
| NotificationFeed | `GET /api/notifications` | Dismiss / click through |

## Screen 2: Course Level View (`/course/:levelId`)
| Component | Data Required | User Actions |
|-----------|--------------|-------------|
| LevelHeader (title, progress%) | Level metadata | — |
| ModuleList (cards with ✅/🔒) | `GET /api/course/modules/:levelId` | Click module → open |
| TestButton (if all modules done) | Module completion status | Click → start test |

## Screen 3: Module Content (`/course/:levelId/:moduleId`)
| Component | Data Required | User Actions |
|-----------|--------------|-------------|
| ModuleContent (markdown render) | `GET /api/course/module/:moduleId` | Read |
| MarketAdaptationTabs | Module adaptations object | Switch tabs |
| CompleteButton | Completion status | Click → mark complete |
| NextModuleButton | Next module ID | Navigate |

## Screen 4: Knowledge Test (`/course/test/:levelId`)
| Component | Data Required | User Actions |
|-----------|--------------|-------------|
| QuestionCard | `GET /api/test/:levelId` | Select answer |
| Timer | Test time limit | — |
| ProgressIndicator (Q 5/20) | Local state | — |
| SubmitButton | All answers | Submit test |
| ResultScreen | `POST /api/test/:levelId/submit` response | Review / retry |

## Screen 5: Trading Terminal (`/trading`)
| Component | Data Required | User Actions |
|-----------|--------------|-------------|
| PriceChart (Lightweight Charts) | WS `price:tick` | Zoom, draw, analyze |
| OrderPanel | Phase rules (limits) | Set direction/size/SL/TP, place order |
| OpenPositions | WS `position:update` | Close position |
| PhaseStatusBar | `GET /api/phase/status` | — |
| DailyStats (P&L, trades, violations) | Daily snapshot | — |
| RuleViolationOverlay | WS `rule:violation` | Acknowledge |
| TradeLog | `GET /api/trade/history` | Review, add journal |

## Screen 6: Performance (`/trading/performance`)
| Component | Data Required | User Actions |
|-----------|--------------|-------------|
| EquityCurve | `GET /api/performance/equity-curve` | — |
| MetricCards (8 metrics) | `GET /api/performance/:attemptId` | — |
| ProjectedCertScore | Cert scoring preview | — |
| TradeDistributionChart | Trade data aggregation | — |

## Screen 7: Certification (`/certification`)
| Component | Data Required | User Actions |
|-----------|--------------|-------------|
| CertLevelTimeline | `GET /api/certification/status` | — |
| RequirementChecklist | Gate requirements | — |
| ScoreBreakdownPreview | Projected score | — |
| DownloadCertButton | `GET /api/certification/:id/download` | Download PDF |

## Screen 8: Badges (`/badges`)
| Component | Data Required | User Actions |
|-----------|--------------|-------------|
| BadgeGrid (earned + locked) | `GET /api/badges` | Click → view details |
| BadgeDetailModal | Badge condition info | — |
| RarityFilter | Local state | Filter by rarity |

## Screen 9: Leaderboard (`/leaderboard`)
| Component | Data Required | User Actions |
|-----------|--------------|-------------|
| ScopeTabs (Global/Market/Weekly) | — | Switch view |
| RankingTable | `GET /api/leaderboard?scope=` | Paginate |
| UserRankHighlight | Current user rank | — |

## Screen 10: Profile (`/profile`)
| Component | Data Required | User Actions |
|-----------|--------------|-------------|
| UserInfo | `GET /api/auth/me` | Edit name/avatar |
| StatsOverview | Aggregated data | — |
| ResetHistory | Phase attempts | — |
| MarketTrackSelector | Current track | Change track |

## Screen 11: Strategy Lab (`/lab`)
| Component | Data Required | User Actions |
|-----------|--------------|-------------|
| TradingTerminal (sandbox) | `POST /api/lab/start` | Trade freely |
| LabModeBanner | — | — |
| NoScoreDisclaimer | — | — |

---

*Part 1 complete. See DEV_EXECUTION_PT2.md for Sprint Plan, Team Allocation, MVP Cut, and Risk Plan.*
