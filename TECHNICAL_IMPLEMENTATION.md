# TECHNICAL IMPLEMENTATION PLAN & ROADMAP v1.0

---

# 1. TECH STACK

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **Frontend** | Next.js 15 (App Router) + React 19 | SSR for SEO, RSC for performance, app-like UX |
| **Styling** | Tailwind CSS 4 + Framer Motion | Rapid UI dev + micro-animations for gamification |
| **State** | Zustand (client) + React Query (server) | Lightweight, no boilerplate; cache trading data |
| **Charts** | Lightweight Charts (TradingView open-source) | Professional trading chart library; free |
| **Backend** | Node.js + Express (REST) + WebSocket (WS) | Real-time price feed + trade execution via WS |
| **Auth** | NextAuth.js + JWT | Session management, role-based access |
| **Database** | PostgreSQL (primary) + Redis (cache/sessions) | Relational for structured data; Redis for real-time |
| **ORM** | Prisma | Type-safe queries, migration management |
| **File Storage** | S3-compatible (AWS/Cloudflare R2) | Course media, certificate PDFs |
| **Hosting** | Vercel (frontend) + Railway/Render (backend) | Auto-scaling, edge network |
| **Payments** | Stripe | One-time purchase + subscription for community |
| **Email** | Resend | Transactional emails, cert delivery |
| **Analytics** | PostHog | Product analytics, funnel tracking |

---

# 2. DATABASE SCHEMA (Core Tables)

## Users & Auth

```sql
users {
  id              UUID PK
  email           VARCHAR UNIQUE
  name            VARCHAR
  avatar_url      VARCHAR
  market_track    ENUM('forex','crypto','gold','multi')
  created_at      TIMESTAMP
  updated_at      TIMESTAMP
}

user_progress {
  id              UUID PK
  user_id         UUID FK → users
  current_level   INT (0-9)
  current_phase   INT (1-5)
  xp_total        INT
  xp_rank         VARCHAR
  cert_level      INT (0-5)
  streak_days     INT
  streak_start    TIMESTAMP
}
```

## Learning Engine

```sql
course_modules {
  id              UUID PK
  level           INT (0-9)
  module_number   VARCHAR (e.g. "2.3")
  title           VARCHAR
  objective       TEXT
  content_url     VARCHAR
  strategy_families VARCHAR[]    -- linked family codes
  logic_ids       VARCHAR[]      -- linked strategy IDs
  skill_level     ENUM('beginner','intermediate','advanced','institutional')
  market_track    ENUM('core','forex','crypto','gold')
  order_index     INT
}

module_completions {
  id              UUID PK
  user_id         UUID FK → users
  module_id       UUID FK → course_modules
  completed_at    TIMESTAMP
  xp_awarded      INT
}

knowledge_tests {
  id              UUID PK
  level           INT
  questions       JSONB          -- array of {question, options, correct, explanation}
  pass_threshold  INT (percentage)
}

test_attempts {
  id              UUID PK
  user_id         UUID FK → users
  test_id         UUID FK → knowledge_tests
  score           INT
  passed          BOOLEAN
  answers         JSONB
  attempted_at    TIMESTAMP
}
```

## Trading Engine

```sql
trading_phases {
  id              UUID PK
  phase_number    INT (1-5)
  starting_capital DECIMAL
  target_profit_pct DECIMAL
  max_drawdown_pct DECIMAL
  time_limit_days INT
  min_trades      INT
  min_trading_days INT
  max_risk_per_trade DECIMAL
  max_positions   INT
  max_trades_per_day INT
  max_leverage    INT
}

user_phase_attempts {
  id              UUID PK
  user_id         UUID FK → users
  phase_id        UUID FK → trading_phases
  attempt_number  INT
  status          ENUM('active','passed','failed_dd','failed_time','reset')
  starting_equity DECIMAL
  current_equity  DECIMAL
  peak_equity     DECIMAL
  max_drawdown    DECIMAL
  trades_count    INT
  trading_days    INT
  started_at      TIMESTAMP
  ended_at        TIMESTAMP
  reset_count     INT
  score_multiplier DECIMAL
}

trades {
  id              UUID PK
  user_id         UUID FK → users
  attempt_id      UUID FK → user_phase_attempts
  instrument      VARCHAR
  direction       ENUM('buy','sell')
  entry_price     DECIMAL
  exit_price      DECIMAL
  position_size   DECIMAL
  leverage        INT
  stop_loss       DECIMAL
  take_profit     DECIMAL
  risk_amount     DECIMAL
  risk_percent    DECIMAL
  pnl             DECIMAL
  r_multiple      DECIMAL
  hold_duration   INTERVAL
  order_type      VARCHAR
  strategy_tag    VARCHAR          -- user-tagged strategy family
  notes           TEXT             -- journal entry
  opened_at       TIMESTAMP
  closed_at       TIMESTAMP
}

rule_violations {
  id              UUID PK
  user_id         UUID FK → users
  attempt_id      UUID FK → user_phase_attempts
  trade_id        UUID FK → trades (nullable)
  rule_id         VARCHAR          -- R001, R002, etc.
  rule_name       VARCHAR
  severity        ENUM('hard_block','soft_warning','silent')
  xp_penalty      INT
  occurred_at     TIMESTAMP
}

daily_snapshots {
  id              UUID PK
  user_id         UUID FK → users
  attempt_id      UUID FK → user_phase_attempts
  date            DATE
  starting_equity DECIMAL
  ending_equity   DECIMAL
  daily_pnl       DECIMAL
  trades_count    INT
  violations_count INT
  rules_followed  BOOLEAN
}
```

## Certification Engine

```sql
certifications {
  id              UUID PK
  user_id         UUID FK → users
  cert_level      INT (1-5)
  cert_title      VARCHAR
  final_score     DECIMAL
  profit_score    DECIMAL
  risk_score      DECIMAL
  consistency_score DECIMAL
  discipline_score DECIMAL
  reset_multiplier DECIMAL
  adjusted_score  DECIMAL
  cert_id_public  VARCHAR UNIQUE   -- CERT-XXXXX-XXXXX
  issued_at       TIMESTAMP
  market_track    VARCHAR
}
```

## Gamification Engine

```sql
xp_ledger {
  id              UUID PK
  user_id         UUID FK → users
  action          VARCHAR          -- "complete_module", "execute_trade", etc.
  xp_amount       INT              -- positive or negative
  source_id       UUID             -- reference to module/trade/etc.
  source_type     VARCHAR          -- "module", "trade", "test", "violation"
  created_at      TIMESTAMP
}

badges {
  id              UUID PK
  name            VARCHAR
  description     TEXT
  icon_url        VARCHAR
  rarity          ENUM('common','uncommon','rare','epic','legendary')
  condition_type  VARCHAR          -- "trades_count", "streak", "phase_clean", etc.
  condition_value JSONB            -- {"min_streak": 30} etc.
}

user_badges {
  id              UUID PK
  user_id         UUID FK → users
  badge_id        UUID FK → badges
  earned_at       TIMESTAMP
}

leaderboard_cache {
  user_id         UUID PK FK → users
  leaderboard_score DECIMAL
  cert_component  DECIMAL
  xp_component    DECIMAL
  discipline_component DECIMAL
  consistency_component DECIMAL
  rank_global     INT
  rank_market     INT
  updated_at      TIMESTAMP
}
```

---

# 3. KEY COMPONENT MAP

## Frontend Components

```
app/
├── (auth)/
│   ├── login/
│   └── register/
├── (dashboard)/
│   ├── layout.tsx              -- sidebar + top nav
│   ├── page.tsx                -- main dashboard (progress overview)
│   ├── course/
│   │   ├── page.tsx            -- course overview (all levels)
│   │   ├── [level]/
│   │   │   ├── page.tsx        -- level overview + modules list
│   │   │   └── [module]/
│   │   │       └── page.tsx    -- module content + exercises
│   │   └── tests/
│   │       └── [level]/page.tsx -- knowledge test interface
│   ├── trading/
│   │   ├── page.tsx            -- trading terminal (chart + orders)
│   │   ├── history/page.tsx    -- trade log + journal
│   │   └── dashboard/page.tsx  -- performance metrics
│   ├── certification/
│   │   ├── page.tsx            -- cert progress + requirements
│   │   └── [level]/page.tsx    -- cert detail + score breakdown
│   ├── leaderboard/page.tsx    -- rankings
│   ├── badges/page.tsx         -- badge collection
│   └── profile/page.tsx        -- user profile + settings
├── verify/[cert-id]/page.tsx   -- public cert verification
└── components/
    ├── trading/
    │   ├── Chart.tsx            -- TradingView Lightweight Charts
    │   ├── OrderPanel.tsx       -- order entry form
    │   ├── PositionList.tsx     -- open positions
    │   ├── TradeLog.tsx         -- closed trade history
    │   └── RulesOverlay.tsx     -- rule violation alerts
    ├── course/
    │   ├── ModuleCard.tsx
    │   ├── ProgressBar.tsx
    │   └── TestQuestion.tsx
    ├── gamification/
    │   ├── XPBar.tsx
    │   ├── BadgeCard.tsx
    │   ├── StreakCounter.tsx
    │   └── LeaderboardRow.tsx
    └── shared/
        ├── Sidebar.tsx
        ├── TopNav.tsx
        └── NotificationToast.tsx
```

## Backend Services

```
services/
├── auth.service.ts              -- login, register, JWT
├── course.service.ts            -- module CRUD, progress tracking
├── test.service.ts              -- test generation, grading
├── trading.service.ts           -- order execution, position mgmt
├── price-engine.service.ts      -- historical replay + synthetic gen
├── rules-engine.service.ts      -- trade validation, rule checks
├── performance.service.ts       -- metric calculation, snapshots
├── certification.service.ts     -- score calculation, cert issuance
├── gamification.service.ts      -- XP ledger, badge checker
├── leaderboard.service.ts       -- ranking calculation, cache
└── notification.service.ts      -- in-app + email notifications
```

## WebSocket Events

| Event | Direction | Payload |
|-------|-----------|---------|
| `price:tick` | Server → Client | `{instrument, bid, ask, timestamp}` |
| `order:submit` | Client → Server | `{type, instrument, size, sl, tp, ...}` |
| `order:filled` | Server → Client | `{trade_id, fill_price, slippage}` |
| `order:rejected` | Server → Client | `{reason, rule_violated}` |
| `position:update` | Server → Client | `{trade_id, unrealized_pnl, current_price}` |
| `rule:violation` | Server → Client | `{rule_id, message, xp_penalty}` |
| `xp:awarded` | Server → Client | `{action, amount, new_total}` |
| `badge:earned` | Server → Client | `{badge_name, rarity}` |
| `phase:status` | Server → Client | `{equity, drawdown, progress_pct}` |

---

# 4. DEVELOPMENT ROADMAP

## Phase 1 — MVP (Weeks 1–8)

**Goal**: Core learning + basic trading simulation working end-to-end.

| Week | Deliverable |
|------|-------------|
| 1–2 | Project setup, auth, DB schema, user registration |
| 3–4 | Course module system (L0–L2 content loaded), progress tracking |
| 5–6 | Trading engine MVP (historical replay, market orders only, Phase 1) |
| 7 | Basic performance dashboard, daily snapshots |
| 8 | Integration: module completion → phase unlock; XP basics |

**MVP Scope**:
- ✅ Auth + user profiles
- ✅ L0–L2 course content with progress tracking
- ✅ Knowledge tests for L0–L2
- ✅ Phase 1 trading simulation (market orders, basic rules)
- ✅ Historical replay (1 instrument per market)
- ✅ Basic XP system (module + trade actions)
- ✅ Simple performance metrics display
- ❌ No certification scoring yet
- ❌ No badges/leaderboard yet
- ❌ No advanced order types

## Phase 2 — Beta (Weeks 9–16)

**Goal**: Full trading engine, certification system, gamification.

| Week | Deliverable |
|------|-------------|
| 9–10 | Full rules engine (all R001–R006), all order types |
| 11–12 | Phases 2–5 with capital progression, reset system |
| 13 | Certification scoring engine (formula + gate logic) |
| 14 | Badge system, streak tracking, leaderboard |
| 15 | L3–L5 course content loaded, knowledge tests |
| 16 | Integration testing, bug fixes, performance optimization |

**Beta Scope (adds to MVP)**:
- ✅ All 5 trading phases with full rules
- ✅ Reset system with penalty tracking
- ✅ All order types (limit, stop, trailing, OCO)
- ✅ Certification Levels 1–3
- ✅ Full badge system (20+ badges)
- ✅ Leaderboard (global + market-specific)
- ✅ L3–L5 course content
- ✅ Synthetic data generation (basic)

## Phase 3 — Full System (Weeks 17–24)

**Goal**: Complete platform ready for launch.

| Week | Deliverable |
|------|-------------|
| 17–18 | L6–L9 course content, all knowledge tests |
| 19 | Certification Levels 4–5, certificate generation (PDF) |
| 20 | Public verification page, certificate sharing |
| 21 | Broker referral integration (Level 3+ trigger) |
| 22 | Stripe payment integration, onboarding flow |
| 23 | Premium community system (1-month included + subscription) |
| 24 | Load testing, security audit, launch preparation |

**Full System Scope (adds to Beta)**:
- ✅ All course content (L0–L9, all market tracks)
- ✅ All 5 certification levels with PDF certificates
- ✅ Public cert verification
- ✅ Broker referral system
- ✅ Payment + access control
- ✅ Premium community (basic chat/forum)
- ✅ Advanced synthetic data (regime-specific)
- ✅ Anti-memorization features
- ✅ Email notifications (cert earned, phase passed)
- ✅ Mobile-responsive design

## Post-Launch Enhancements

| Feature | Priority | Timeline |
|---------|----------|----------|
| Mobile app (React Native) | High | Month 2–4 |
| Live market data integration (optional upgrade) | Medium | Month 3 |
| AI trade analysis ("Why did this trade fail?") | Medium | Month 4 |
| Strategy tagging analytics | Low | Month 5 |
| Team/cohort leaderboards | Low | Month 6 |
| API for cert verification (B2B) | Low | Month 6 |

---

# 5. INFRASTRUCTURE & DEPLOYMENT

```
┌─────────────────────────────────────────────────┐
│                  PRODUCTION                      │
├─────────────────────────────────────────────────┤
│                                                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────────┐  │
│  │  Vercel   │  │ Railway  │  │   Supabase   │  │
│  │ Frontend  │  │ Backend  │  │  PostgreSQL  │  │
│  │ (Next.js) │  │ (Node)   │  │  + Auth      │  │
│  └─────┬─────┘  └─────┬────┘  └──────┬───────┘  │
│        │              │               │          │
│        └──────────────┼───────────────┘          │
│                       │                          │
│  ┌──────────┐  ┌──────┴─────┐  ┌─────────────┐  │
│  │  Redis   │  │ S3 / R2    │  │   Stripe    │  │
│  │ (Upstash)│  │ (Media)    │  │  (Payments) │  │
│  └──────────┘  └────────────┘  └─────────────┘  │
│                                                  │
└─────────────────────────────────────────────────┘
```

---

*Complete technical implementation plan. All specifications are execution-ready.*
*Cross-reference: PLATFORM_MASTER_PLAN.md | TRADING_ENGINE_SPEC.md | CERTIFICATION_GAMIFICATION.md*
