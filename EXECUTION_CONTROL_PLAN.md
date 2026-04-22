# EXECUTION CONTROL PLAN v1.0

> **Scope**: Build priority, UX flows, retention strategy
> **Depends on**: SYSTEM_AUDIT_REPORT.md (all fixes incorporated)

---

# STEP 3 — BUILD PRIORITY PLAN

---

## Phase A — Core MVP (Weeks 1–8)

**Goal**: User can register, learn L0–L2, and execute basic trades in Phase 1.

### A1: Foundation (Week 1–2)

| Task | Priority | Dependency |
|------|----------|------------|
| Next.js project setup + Tailwind + Framer Motion | Critical | None |
| PostgreSQL schema (users, user_progress, course_modules) | Critical | None |
| Auth system (NextAuth + JWT) | Critical | DB ready |
| Stripe payment integration (one-time purchase) | Critical | Auth ready |
| User registration + onboarding flow | Critical | Auth + Stripe |

**Why first**: Nothing works without auth, payment, and data storage.

### A2: Learning Engine Core (Week 3–4)

| Task | Priority | Dependency |
|------|----------|------------|
| Course module content management (CRUD) | Critical | DB |
| Module content renderer (markdown/rich text) | Critical | None |
| L0–L2 content loaded into DB | Critical | Module system |
| Progress tracking (module_completions table) | Critical | DB + Auth |
| Knowledge test system (question pool, randomization) | Critical | DB |
| Test attempt tracking + cooldown logic (4h retake) | High | Test system |
| Gate logic: test passed → next level unlocked | Critical | Progress + Tests |

**Why second**: Learning is the first thing users interact with. Trading builds on course completion.

### A3: Trading Engine MVP (Week 5–7)

| Task | Priority | Dependency |
|------|----------|------------|
| Price engine: historical replay (1 instrument per market) | Critical | None |
| WebSocket server for price tick streaming | Critical | Price engine |
| TradingView Lightweight Charts integration | Critical | WS ready |
| Order execution: market orders + limit orders | Critical | Price engine |
| Position tracking (open/close, P&L calculation) | Critical | Execution |
| Phase 1 rules: R001 (risk limit), R003 (SL), R004 (daily loss) | Critical | Execution |
| Phase 1 capital tracking ($100, +20% target, -15% DD) | Critical | Position tracking |
| Trade log (trades table) | Critical | Execution |
| Basic performance dashboard (equity curve, win rate, P&L) | High | Trades data |

**Why third**: Users reach trading after completing L2 (≈ week 2-3 of usage). Build must be ready by then.

### A4: Basic Integration (Week 8)

| Task | Priority | Dependency |
|------|----------|------------|
| Gate: L2 test passed → Phase 1 unlocked | Critical | Learning + Trading |
| XP system MVP (module complete, trade execute, rule break) | High | Both engines |
| XP display on dashboard | High | XP ledger |
| Daily snapshots job (cron) | High | Trading engine |
| Basic notification system (in-app toasts) | Medium | Events |

**Why last in MVP**: Integration connects engines. Must work individually first.

### MVP Exit Criteria

- [ ] User can purchase access, register, onboard
- [ ] User can complete L0–L2 modules
- [ ] User can pass knowledge tests with randomized questions
- [ ] Phase 1 trading simulation works with market + limit orders
- [ ] Rules R001, R003, R004 enforced
- [ ] Phase 1 pass/fail logic works
- [ ] XP awarded for core actions
- [ ] Basic performance metrics displayed

---

## Phase B — Trading Engine Expansion (Weeks 9–12)

**Goal**: Full trading engine with all phases, rules, and reset system.

| Week | Tasks |
|------|-------|
| 9 | All order types (stop, trailing, OCO) + stop-limit |
| 9 | Rules R002, R005, R006, R007, R008, R009, R010, R011 |
| 10 | Phases 2–5 capital progression + per-phase rule configs |
| 10 | Reset system: counter, cooldown escalation, multiplier |
| 11 | Synthetic data generation (regime-controlled) |
| 11 | Anti-memorization (blend mode, mirror, instrument obfuscation) |
| 12 | Advanced performance metrics (Sharpe, profit factor, R-multiple) |
| 12 | Execution realism (dynamic spread, slippage, swap/funding, partial fills) |

**Dependencies**: Requires MVP trading engine complete.

### Phase B Exit Criteria

- [ ] All 5 phases operational with correct rules per phase
- [ ] Reset system with escalating cooldowns and multipliers
- [ ] All 11 rules (R001–R011) enforced correctly
- [ ] Synthetic data generator produces regime-specific scenarios
- [ ] Anti-memorization features active (never same data twice)
- [ ] Full performance metric suite calculated

---

## Phase C — Certification + Gamification (Weeks 13–16)

**Goal**: Cert scoring, badges, leaderboard, full engagement system.

| Week | Tasks |
|------|-------|
| 13 | Certification scoring formula implementation |
| 13 | Cert gate requirements (Levels 1–5) with automatic checking |
| 14 | Certificate generation (PDF) + public verification page |
| 14 | Challenge exam system (skip gates for experienced users) |
| 15 | Badge system (20+ badges, condition checkers, award logic) |
| 15 | Streak tracking system |
| 16 | Leaderboard (global, market, weekly, discipline) |
| 16 | Leaderboard anti-gaming rules (percentile, min trades) |

**Dependencies**: Requires full trading engine metrics for cert scoring.

### Phase C Exit Criteria

- [ ] All 5 cert levels awarded correctly based on formula
- [ ] Reset multiplier applied to final score
- [ ] PDF certificate generated with verification URL
- [ ] All badges triggering correctly
- [ ] Leaderboard calculating and ranking users
- [ ] Challenge exams functional for skip gates

---

## Phase D — Full Platform (Weeks 17–22)

**Goal**: Complete course content, polish, payments, launch-ready.

| Week | Tasks |
|------|-------|
| 17–18 | L3–L9 course content loaded + knowledge tests |
| 19 | Strategy Lab (unlimited practice mode) |
| 19 | Diagnostic report system (after 3 consecutive phase failures) |
| 20 | Broker referral integration (Level 3+ trigger) |
| 20 | Premium community system (1-month included, then subscription) |
| 21 | Email notifications (cert earned, phase passed, weekly summary) |
| 21 | Mobile-responsive polish + performance optimization |
| 22 | Security audit + load testing + launch prep |

### Phase D Exit Criteria

- [ ] All L0–L9 content live for all 3 market tracks
- [ ] Strategy Lab accessible after L2
- [ ] Broker referral links active at Cert Level 3
- [ ] Community chat/forum working
- [ ] All emails sending correctly
- [ ] <3s page load on 3G
- [ ] Security audit passed

---

# STEP 4 — UX FLOW DESIGN

---

## A. First Login Flow

```
1. LANDING PAGE
   └→ "Join the Academy" CTA → Payment (Stripe Checkout)

2. PAYMENT COMPLETE
   └→ Redirect to /onboarding

3. ONBOARDING (5 steps, ~3 minutes)
   ├→ Step 1: Welcome screen
   │   "Welcome to the Academy. You're about to begin a structured
   │    journey from beginner to certified trader."
   │
   ├→ Step 2: Market Track Selection
   │   ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐
   │   │  FOREX  │ │ CRYPTO  │ │  GOLD   │ │  ALL 3  │
   │   └─────────┘ └─────────┘ └─────────┘ └─────────┘
   │   "Choose your primary market. You can add more later."
   │
   ├→ Step 3: Experience Level Check
   │   ○ Complete beginner
   │   ○ Some trading experience
   │   ○ Experienced trader (→ offer Challenge Exam)
   │
   ├→ Step 4: Platform Tour (interactive overlay)
   │   Highlight: Dashboard → Course → Trading → Badges
   │
   └→ Step 5: "Start Level 0" CTA
       └→ Redirect to /course/0/0.1 (first module)
```

**What user sees on dashboard after onboarding**:
- Course: L0 unlocked, 0% complete
- Trading: "Locked — Complete L2 to begin"
- Certification: Level 0 — "Not yet started"
- XP: 0 | Rank: Recruit
- Badges: 0/28

---

## B. Learning Flow

```
MODULE VIEW:
┌──────────────────────────────────────┐
│  L2 — Core Strategy Families         │
│  Module 2.1: Trend Following (Core)  │
├──────────────────────────────────────┤
│                                      │
│  [Module Content — rich text/video]  │
│                                      │
│  Market Adaptation:                  │
│  [Forex Tab] [Crypto Tab] [Gold Tab] │
│                                      │
├──────────────────────────────────────┤
│  ✅ Mark Complete     [→ Next Module] │
│  +50 XP awarded!                     │
└──────────────────────────────────────┘

After last module in level:
┌──────────────────────────────────────┐
│  Level 2 Complete!                   │
│  Ready for Knowledge Test?           │
│                                      │
│  Requirements: 80% to pass           │
│  Questions: 20 (from pool of 60)     │
│  Time: 30 minutes                    │
│                                      │
│  [Begin Test]                        │
└──────────────────────────────────────┘

Test result:
  PASS → "L3 Unlocked! + Phase 1 Trading Unlocked!" + 40 XP
  FAIL → "Score: 65%. Review [weak areas]. Retry in 4 hours."
```

---

## C. Trading Flow

### Opening a Trade

```
TRADING TERMINAL:
┌─────────────────────────────────────────────────┐
│  [========= PRICE CHART (Lightweight Charts) =] │
│  [                                             ] │
│  [                                             ] │
├────────────────┬────────────────────────────────┤
│  ORDER PANEL   │  PHASE STATUS                  │
│                │                                │
│  Instrument:   │  Phase 1 | $108.40 (+8.4%)    │
│  [ASSET-A/B]   │  Target: $120 | DD: -2.1%/-15% │
│                │  Trades: 9/15 | Days: 7/45    │
│  Direction:    │                                │
│  [BUY] [SELL]  │  OPEN POSITIONS               │
│                │  1. BUY ASSET-A  +$1.20       │
│  Size: [___]   │                                │
│  Risk: 1.4%    │  TODAY                         │
│  SL: [___]     │  P&L: +$2.40                  │
│  TP: [___]     │  Trades: 2/5 max              │
│  R:R: 1:2.1    │  Violations: 0                │
│                │                                │
│  [PLACE ORDER] │                                │
└────────────────┴────────────────────────────────┘
```

### Rule Violation Experience

```
SCENARIO: User submits order without stop-loss

┌─────────────────────────────────────┐
│  ⚠️ RULE VIOLATION: R003            │
│                                     │
│  Stop-loss is required on every     │
│  trade. This protects your capital  │
│  and builds discipline.             │
│                                     │
│  Occurrence: 2/3 (warning phase)    │
│  Next violation: trade will be      │
│  blocked.                           │
│                                     │
│  XP Penalty: -40 XP                │
│                                     │
│  [Add Stop-Loss] [Cancel Order]     │
└─────────────────────────────────────┘
```

### Phase Progress Alerts

```
AT 50%:  "Halfway to Phase 1 target! You're at $110 / $120."
AT 80%:  "Almost there! $118 / $120. Stay disciplined."
AT 100%: 
┌─────────────────────────────────────┐
│  🎉 PHASE 1 COMPLETE!               │
│                                     │
│  Final Equity: $124.80 (+24.8%)     │
│  Trades: 18 | Days: 23             │
│  Max DD: -4.2% | Violations: 1     │
│                                     │
│  Cert Check: Level 1 ✅ EARNED      │
│  +300 XP | Badge: Phase Crusher 🏅  │
│                                     │
│  Phase 2 Unlocked ($300)            │
│  [View Performance Report]          │
│  [Start Phase 2]                    │
└─────────────────────────────────────┘
```

---

## D. Failure Flow

```
DRAWDOWN BREACH:

┌─────────────────────────────────────┐
│  ❌ PHASE 3 — DRAWDOWN LIMIT HIT    │
│                                     │
│  Your equity dropped to $878.20     │
│  (below $880 / -12% limit)          │
│                                     │
│  This is part of the learning       │
│  process. Every trader faces this.  │
│                                     │
│  YOUR STATS (preserved):            │
│  Trades: 32 | Win Rate: 48%        │
│  Best streak: 5 wins               │
│  Your weakness: Position sizing     │
│  after consecutive losses           │
│                                     │
│  ⚡ XP from this attempt: KEPT      │
│  (trades, clean days, modules)      │
│                                     │
│  RESET OPTIONS:                     │
│  Reset #1 → Score multiplier: 0.92  │
│  Cooldown: 24 hours                 │
│  New price data will be assigned    │
│                                     │
│  [Reset Phase 3]                    │
│  [Review Trade History]             │
│  [Return to Course — Recommended:   │
│   Module 6.1 Position Sizing]       │
└─────────────────────────────────────┘
```

**Key design decisions**:
- **Never blame the user** — use "This is part of the process" language
- **Show what they did well** — best streak, clean days
- **Diagnose weakness** — auto-analyze what went wrong
- **Preserve XP** — failure shouldn't wipe engagement progress
- **Recommend action** — link back to relevant course module
- **24h cooldown** — prevents tilt-resetting; gives time to reflect

### After 3 Consecutive Failures (EC-01 fix)

```
┌─────────────────────────────────────┐
│  📊 DIAGNOSTIC REPORT               │
│                                     │
│  You've attempted Phase 3 three     │
│  times. Here's what the data shows: │
│                                     │
│  PATTERN DETECTED:                  │
│  • Risk increases after losses      │
│  • Avg hold time drops under stress │
│  • Win rate stable but R:R declining│
│                                     │
│  RECOMMENDED PATH:                  │
│  1. Review Module 6.1 (Position     │
│     Sizing) — focus on dynamic      │
│     sizing after drawdown           │
│  2. Use Strategy Lab to practice    │
│     without phase pressure          │
│  3. Try Phase 3 on a different      │
│     market track                    │
│                                     │
│  [Open Strategy Lab]                │
│  [Review Recommended Modules]       │
│  [Switch Market Track]              │
└─────────────────────────────────────┘
```

---

## E. Certification Flow

```
CERTIFICATION PAGE:

┌─────────────────────────────────────────┐
│  YOUR CERTIFICATION JOURNEY             │
│                                         │
│  ✅ Level 1: Market Literate    [View]  │
│  ✅ Level 2: Structured Trader  [View]  │
│  ✅ Level 3: Strategy Operator  [View]  │
│  🔄 Level 4: Consistent Trader          │
│  🔒 Level 5: Certified Trader           │
│                                         │
│  LEVEL 4 REQUIREMENTS:                  │
│  ├ Course: L6 ✅ | L7 ✅                │
│  ├ Phase 4: ⏳ In Progress ($3,420)     │
│  ├ Sharpe Ratio: 1.3 ✅ (need ≥ 1.0)   │
│  ├ Consistency: 16/20 ✅ (need ≥ 14)   │
│  └ SL Compliance: 97% ✅ (need ≥ 95%)  │
│                                         │
│  STATUS: Complete Phase 4 to earn       │
│                                         │
│  PROJECTED FINAL SCORE: 78/100         │
│  ██████████████████░░  (Merit range)    │
│                                         │
│  Score Breakdown:                        │
│  Profit:      31/40                     │
│  Risk Mgmt:   25/30                     │
│  Consistency: 15/20                     │
│  Discipline:   7/10                     │
│  Reset Penalty: ×0.92 (1 reset total)   │
│  Adjusted: 72/100                       │
└─────────────────────────────────────────┘
```

---

# STEP 5 — RETENTION SYSTEM DESIGN

---

## Drop-Off Points & Recovery

| Drop-Off Point | When | Why Users Leave | Recovery Strategy |
|----------------|------|-----------------|-------------------|
| **Day 1** | After purchase | Overwhelmed by content volume | Guided onboarding; single first action ("Read Module 0.1") |
| **Day 3-5** | During L0 | "Too basic / boring" | Challenge exam for experienced users; progress bar shows L2 trading unlock nearby |
| **Week 2** | L1–L2 transition | Impatient to trade | Show trading preview; countdown "X modules until trading unlocks" |
| **Week 4** | First Phase 1 failure | Frustration | Failure flow design (above); preserve XP; diagnostic; Strategy Lab |
| **Week 6-8** | Phase 2-3 grind | Plateau feeling | Weekly milestones; streak badges; leaderboard competition |
| **Week 10-12** | Mid-course fatigue | "When does this end?" | Clear completion % ; show cert proximity; "You're in top X%" |
| **Week 16+** | Approaching Phase 5 | Anxiety about final cert | Provisional cert option; score preview; "You're already further than 80% of users" |

## Engagement Loops

### Daily Loop (5-15 minutes)

```
Login → Check streak counter → Execute 1-3 trades → Review daily P&L
  → Earn daily clean trading XP (+30) → See streak increment → Logout
```

**Trigger**: Push notification / email at user's usual login time: "Your 14-day streak is active. Don't break it!"

### Weekly Loop (30-60 minutes)

```
Complete 1-2 modules → Take practice exercise → Review weekly performance
  → Check leaderboard movement → See badge progress → Plan next week
```

**Trigger**: Weekly email: "Your Week 6 Summary — Win rate up 4%, 2 badges close to unlock"

### Milestone Loop (per phase completion)

```
Complete phase → Earn cert level → Unlock next phase + new course content
  → See capital increase → Feel progression → Share achievement
```

**Trigger**: Cert earned email + social share card generation

## Retention Mechanics Summary

| Mechanic | Implementation | Retention Impact |
|----------|---------------|------------------|
| **Streak Counter** | Consecutive clean trading days; resets on miss | Daily return (high) |
| **Progress Bar** | Visible everywhere: course %, phase %, cert % | Goal proximity (high) |
| **Loss Recovery** | XP kept on failure; diagnostic reports | Reduces churn at failure (critical) |
| **Social Proof** | Leaderboard; "X users are at your level" | Competition (medium) |
| **Sunk Cost** | XP total, badges earned, time invested visible | Prevents abandonment (medium) |
| **Escalating Stakes** | Capital grows: $100 → $10K feels real | Increasing engagement (high) |
| **Notification Cadence** | Daily: streak. Weekly: summary. Monthly: milestone | Re-engagement (medium) |
| **Strategy Lab** | Pressure-free trading sandbox | Prevents frustration-quit (high) |
| **Near-Miss Signals** | "You were 2% from passing!" | Motivates retry (medium) |

## Anti-Churn Email Sequences

| Trigger | Email | Timing |
|---------|-------|--------|
| No login for 3 days | "Your streak is about to expire — log in to save it" | Day 3 |
| No login for 7 days | "Here's what you've accomplished so far [stats]. Keep going." | Day 7 |
| No login for 14 days | "We've added new features. Come check Phase X." | Day 14 |
| Phase failed + no login for 3 days | "Every pro trader has failed phases. Here's your diagnostic report." | Day 3 post-fail |
| 80% course complete + stalled | "You're 80% done. Only [X modules] to go." | After 5 days stalled |

---

# STEP 6 — FINAL EXECUTION SUMMARY

---

## Document Index

| # | Document | Purpose | Status |
|---|----------|---------|--------|
| 1 | `SYSTEM_AUDIT_REPORT.md` | Exploits, weak points, edge cases, rebalancing | ✅ Complete |
| 2 | `EXECUTION_CONTROL_PLAN.md` | Build priority, UX flows, retention | ✅ Complete |
| 3 | `PLATFORM_MASTER_PLAN.md` | System architecture, user journey, monetization | ✅ Complete |
| 4 | `TRADING_ENGINE_SPEC.md` | Simulation engine full specification | ✅ Complete |
| 5 | `CERTIFICATION_GAMIFICATION.md` | Scoring formula, badges, leaderboard | ✅ Complete |
| 6 | `TECHNICAL_IMPLEMENTATION.md` | Tech stack, DB schema, roadmap | ✅ Complete |
| 7 | `COURSE_BLUEPRINT_PT1.md` | L0–L4 module breakdown | ✅ Complete |
| 8 | `COURSE_BLUEPRINT_PT2.md` | L5–L9, strategy mapping, regime system | ✅ Complete |

## Changes Applied From Audit

| Change | Source | Applied To |
|--------|--------|------------|
| Phase 1 DD loosened to 15% | WP-02 | TRADING_ENGINE_SPEC |
| Phase 1 time extended to 45d | WP-01 | TRADING_ENGINE_SPEC |
| Phase 1 zero commission | WP-01 | TRADING_ENGINE_SPEC |
| Reset cooldown escalation | EXP-04 | TRADING_ENGINE_SPEC |
| First reset penalty softened (0.92) | Rebalancing | CERTIFICATION_GAMIFICATION |
| Cert Level 5 threshold: 65 | Rebalancing | CERTIFICATION_GAMIFICATION |
| 5 new trading rules (R007–R011) | EXP-02/03/04 | TRADING_ENGINE_SPEC |
| XP rebalanced toward process | Rebalancing | CERTIFICATION_GAMIFICATION |
| Strategy Lab added | EC-01 | PLATFORM_MASTER_PLAN |
| Challenge Exam system added | EC-04 | PLATFORM_MASTER_PLAN |
| Diagnostic reports after 3 failures | EC-01 | PLATFORM_MASTER_PLAN |
| Anti-memorization features | EXP-01 | TRADING_ENGINE_SPEC |

---

*End of Execution Control Plan. System is stress-tested, rebalanced, and build-ready.*
