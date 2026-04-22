# CERTIFICATION & GAMIFICATION SYSTEMS v1.0

---

# PART A — CERTIFICATION ENGINE

## 1. Certification Levels

| Level | Title | Requirement Summary |
|-------|-------|---------------------|
| **Cert 1** | Market Literate | L0–L2 complete + Phase 1 passed |
| **Cert 2** | Structured Trader | L3–L4 complete + Phase 2 passed |
| **Cert 3** | Strategy Operator | L5 complete + Phase 3 passed + broker referral eligible |
| **Cert 4** | Consistent Trader | L6–L7 complete + Phase 4 passed |
| **Cert 5** | Certified Trader | All levels complete + Phase 5 passed + Final Score ≥ 70 |

## 2. Certification Scoring Formula

```
FINAL SCORE = (Profit × 0.40) + (Risk Mgmt × 0.30) + (Consistency × 0.20) + (Discipline × 0.10)
```

### Profit Sub-Score (40% weight) — max 40 points

| Metric | Excellent (10) | Good (7) | Adequate (4) | Poor (1) |
|--------|:--------------:|:--------:|:------------:|:--------:|
| Net P&L vs Target | ≥ 150% of target | 100–149% | 80–99% | < 80% |
| Win Rate | ≥ 55% | 45–54% | 35–44% | < 35% |
| Profit Factor | ≥ 2.0 | 1.5–1.99 | 1.0–1.49 | < 1.0 |
| Avg R-Multiple | ≥ 2.0R | 1.5–1.99R | 1.0–1.49R | < 1.0R |

**Profit Sub-Score** = (sum of 4 metric scores / 40) × 40

### Risk Management Sub-Score (30% weight) — max 30 points

| Metric | Excellent (10) | Good (7) | Adequate (4) | Poor (1) |
|--------|:--------------:|:--------:|:------------:|:--------:|
| Max Drawdown | < 5% | 5–8% | 8–12% | ≥ 12% |
| Avg Risk/Trade | ≤ 1% | 1–1.5% | 1.5–2% | > 2% |
| Risk/Reward Ratio | ≥ 1:2.5 | 1:2.0 | 1:1.5 | < 1:1.5 |

**Risk Sub-Score** = (sum of 3 metric scores / 30) × 30

### Consistency Sub-Score (20% weight) — max 20 points

| Metric | Excellent (10) | Good (7) | Adequate (4) | Poor (1) |
|--------|:--------------:|:--------:|:------------:|:--------:|
| Sharpe Ratio | ≥ 2.0 | 1.5–1.99 | 1.0–1.49 | < 1.0 |
| Max Consec Losses | ≤ 3 | 4–5 | 6–7 | ≥ 8 |

**Consistency Sub-Score** = (sum of 2 metric scores / 20) × 20

### Discipline Sub-Score (10% weight) — max 10 points

| Metric | Excellent (10) | Good (7) | Adequate (4) | Poor (1) |
|--------|:--------------:|:--------:|:------------:|:--------:|
| Rule Violations | 0 | 1–2 | 3–5 | > 5 |

**Discipline Sub-Score** = metric score

### Reset Penalty Application

```
ADJUSTED SCORE = FINAL SCORE × Reset Multiplier

Reset Multiplier:
  0 resets = 1.00
  1 reset  = 0.90
  2 resets = 0.75
  3 resets = 0.60
  4+ resets = 0.50
```

## 3. Certification Gate Requirements

### Level 1 — Market Literate

| Requirement | Threshold |
|-------------|-----------|
| Course completion | L0 + L1 + L2 (100%) |
| Knowledge tests passed | L0, L1, L2 (≥ 80% each) |
| Phase 1 passed | Target profit hit within drawdown/time limits |
| Phase 1 min trades | ≥ 15 trades |
| Phase 1 min trading days | ≥ 10 days |

### Level 2 — Structured Trader

| Requirement | Threshold |
|-------------|-----------|
| Cert 1 earned | ✅ |
| Course completion | L3 + L4 (100%) |
| Knowledge tests passed | L3, L4 (≥ 80%) |
| Phase 2 passed | +20% on $300 |
| Cumulative win rate | ≥ 40% |
| Avg risk per trade | ≤ 2% |

### Level 3 — Strategy Operator

| Requirement | Threshold |
|-------------|-----------|
| Cert 2 earned | ✅ |
| Course completion | L5 (100%) |
| Phase 3 passed | +25% on $1,000 |
| Profit factor | ≥ 1.3 |
| Max drawdown | ≤ 12% |
| Rule violations | ≤ 5 across phase |
| **Broker referral unlocked** | ✅ |

### Level 4 — Consistent Trader

| Requirement | Threshold |
|-------------|-----------|
| Cert 3 earned | ✅ |
| Course completion | L6 + L7 (100%) |
| Phase 4 passed | +25% on $3,000 |
| Sharpe ratio | ≥ 1.0 |
| Consistency score | ≥ 14/20 |
| SL compliance | ≥ 95% |

### Level 5 — Certified Trader

| Requirement | Threshold |
|-------------|-----------|
| Cert 4 earned | ✅ |
| Course completion | ALL levels L0–L9 (100%) |
| Phase 5 passed | +30% on $10,000 |
| **Final Score** | **≥ 70/100** |
| Min 60 trades in Phase 5 | ✅ |
| Min 30 trading days in Phase 5 | ✅ |
| Rule violations in Phase 5 | ≤ 3 |

## 4. Certificate Output

```
┌─────────────────────────────────────────────┐
│       TRADING ACADEMY — CERTIFICATE         │
├─────────────────────────────────────────────┤
│                                             │
│  CERTIFIED TRADER — LEVEL 5                 │
│                                             │
│  Name:    [User Full Name]                  │
│  Market:  [Forex / Crypto / Gold / Multi]   │
│  Score:   [XX / 100]                        │
│  Date:    [YYYY-MM-DD]                      │
│  ID:      [CERT-XXXXX-XXXXX]               │
│                                             │
│  Metrics:                                   │
│    Profit:      XX/40                       │
│    Risk Mgmt:   XX/30                       │
│    Consistency: XX/20                       │
│    Discipline:  XX/10                       │
│                                             │
│  Verify: academy.com/verify/[CERT-ID]       │
│                                             │
└─────────────────────────────────────────────┘
```

---

# PART B — GAMIFICATION ENGINE

## 1. XP System

### XP Award Table

| Action | XP | Category |
|--------|:--:|----------|
| Complete a course module | +50 | Learning |
| Pass a knowledge test | +30 | Learning |
| Complete a practice exercise | +20 | Learning |
| Open a trade (sim) | +10 | Trading |
| Close a profitable trade | +15 | Trading |
| Follow all rules in a trade | +20 | Discipline |
| Complete a trading day with no violations | +25 | Discipline |
| Achieve positive P&L day | +10 | Performance |
| Hit weekly target | +50 | Performance |
| Advance to next trading phase | +200 | Milestone |
| Earn certification level | +500 | Milestone |
| **Break a trading rule** | **-40** | **Penalty** |
| **Revenge trade detected** | **-50** | **Penalty** |
| **Overtrade (exceed daily limit)** | **-30** | **Penalty** |
| **Reset a phase** | **-100** | **Penalty** |

### XP Levels

| XP Range | Rank Title |
|----------|-----------|
| 0–500 | Recruit |
| 501–1,500 | Apprentice |
| 1,501–3,500 | Analyst |
| 3,501–7,000 | Tactician |
| 7,001–12,000 | Strategist |
| 12,001–20,000 | Operator |
| 20,001–35,000 | Master Trader |
| 35,001+ | Elite |

## 2. Badge System

### Achievement Badges

| Badge | Condition | Rarity |
|-------|-----------|--------|
| **First Trade** | Execute first simulated trade | Common |
| **Foundation Complete** | Complete L0–L1 | Common |
| **Five Strategy Master** | Complete all L2 modules | Uncommon |
| **Market Specialist** | Complete all market-specific L4 modules for one track | Uncommon |
| **Phase Crusher** | Pass any phase on first attempt (0 resets) | Rare |
| **Clean Sweep** | Pass all 5 phases with 0 total resets | Legendary |

### Discipline Badges

| Badge | Condition | Rarity |
|-------|-----------|--------|
| **Discipline Streak (7)** | 7 consecutive trading days with 0 violations | Uncommon |
| **Discipline Streak (30)** | 30 consecutive trading days with 0 violations | Epic |
| **Risk Master** | Complete a phase with avg risk/trade ≤ 1% | Rare |
| **Stop-Loss Saint** | 100% SL compliance across an entire phase | Rare |
| **No Revenge** | 0 revenge trades detected across any phase | Rare |

### Performance Badges

| Badge | Condition | Rarity |
|-------|-----------|--------|
| **Profit Machine** | Profit factor ≥ 2.5 in any phase | Rare |
| **Sharpe Shooter** | Sharpe ratio ≥ 2.0 in any phase | Epic |
| **Consistency King** | 20+ consecutive profitable trading days | Epic |
| **Drawdown Dodger** | Complete a phase with max DD < 3% | Legendary |
| **Perfect Score** | Final cert score ≥ 95/100 | Legendary |

### Strategy Badges

| Badge | Condition | Rarity |
|-------|-----------|--------|
| **Trend Rider** | 10+ profitable trend-following trades tagged | Uncommon |
| **Breakout Hunter** | 10+ profitable breakout trades tagged | Uncommon |
| **Mean Reverter** | 10+ profitable MR trades tagged | Uncommon |
| **Multi-Regime** | Profitable trades in 3+ different regime types | Rare |
| **Confluence Master** | 10+ trades using multi-pillar confluence (L8) | Rare |

## 3. Progress System

### User Dashboard Elements

```
┌─────────────────────────────────────────┐
│  RANK: Tactician    XP: 4,230 / 7,000  │
│  ██████████████░░░░░░░  60%             │
│  Next Rank: Strategist                  │
├─────────────────────────────────────────┤
│  COURSE: L4 — Market-Specific Edge      │
│  █████████████████░░░  85% complete     │
│  Next Module: 4.3C — On-Chain Analytics │
├─────────────────────────────────────────┤
│  TRADING: Phase 3 — $1,047 / $1,250    │
│  █████████░░░░░░░░░░░  41% to target   │
│  DD: -3.2% / -12% max                  │
├─────────────────────────────────────────┤
│  CERTIFICATION: Level 2 — Structured   │
│  Next: Level 3 — Strategy Operator     │
│  Requirements: L5 ✅ | Phase 3 ⏳      │
├─────────────────────────────────────────┤
│  BADGES: 12 / 28 unlocked              │
│  [🏅] [⚡] [🎯] [🛡️] [📊] ...          │
│  Latest: Risk Master (2 days ago)       │
├─────────────────────────────────────────┤
│  STREAK: 🔥 14 days clean trading      │
└─────────────────────────────────────────┘
```

### Notification Triggers

| Event | Notification |
|-------|-------------|
| Module available | "Module 3.2 — Breakout Refinement is now unlocked!" |
| Badge earned | "🏅 Badge Earned: Risk Master — Avg risk ≤ 1% in Phase 2" |
| Phase milestone (50%) | "Halfway to Phase 3 target! Keep going." |
| Cert level earned | "🎓 Certification Level 2: Structured Trader — EARNED" |
| Streak milestone | "🔥 14-day discipline streak! +25 XP" |
| Rule violation | "⚠️ Rule R003 violated: No stop-loss set. -40 XP" |

## 4. Leaderboard System

### Ranking Algorithm

```
Leaderboard Score = (Cert Score × 0.40) + (XP Normalized × 0.20)
                  + (Discipline Rate × 0.25) + (Consistency Score × 0.15)
```

### Leaderboard Tiers

| View | Scope | Ranked By |
|------|-------|-----------|
| **Global** | All users | Leaderboard Score |
| **Market-Specific** | Forex / Crypto / Gold track | Leaderboard Score |
| **Phase** | Users in same phase | Phase performance metrics |
| **Weekly** | Rolling 7-day window | Weekly XP earned |
| **Discipline** | All users | Discipline rate + streak |

### Anti-Gaming Rules

- Leaderboard score requires minimum trade count (prevents cherry-picking)
- XP from trading capped at 200/day (prevents spam trades)
- Profit-only traders penalized if discipline < 50th percentile
- Reset-heavy users display reset count on leaderboard profile

---

*End of Certification & Gamification specification.*
