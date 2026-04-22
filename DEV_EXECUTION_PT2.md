# DEVELOPER EXECUTION PLAN — PART 2
# Sprints, Team, MVP Cut, Risk Plan

---

# STEP 5 — DEVELOPMENT SPRINT PLAN

---

## Sprint 1 (Week 1–2): Foundation

| Task ID | Task | Owner | Effort | Depends On |
|---------|------|-------|--------|------------|
| S1.1 | Next.js project init + Tailwind + Framer Motion | FE | 4h | — |
| S1.2 | Design system: colors, typography, component tokens | Design | 8h | — |
| S1.3 | PostgreSQL setup + Prisma init + base schema | BE | 4h | — |
| S1.4 | Users + user_progress + course_modules tables | BE | 3h | S1.3 |
| S1.5 | Auth endpoints (register, login, me) + JWT | BE | 6h | S1.4 |
| S1.6 | Stripe checkout integration (one-time purchase) | BE | 6h | S1.5 |
| S1.7 | Auth pages (login, register) | FE | 4h | S1.1 |
| S1.8 | Payment flow + success redirect | FE | 3h | S1.6, S1.7 |
| S1.9 | Onboarding flow (5 steps: welcome, track, experience, tour, start) | FE | 6h | S1.8 |
| S1.10 | Dashboard layout (sidebar, topnav, main area) | FE | 6h | S1.1, S1.2 |
| S1.11 | Dashboard placeholder cards (course, trading-locked, cert, XP) | FE | 4h | S1.10 |

**Sprint 1 Exit**: User can purchase, register, onboard, see dashboard.

---

## Sprint 2 (Week 3–4): Learning Engine

| Task ID | Task | Owner | Effort | Depends On |
|---------|------|-------|--------|------------|
| S2.1 | Course module CRUD + seed L0–L2 content | BE | 6h | S1.4 |
| S2.2 | Course API: levels list, modules list, module content | BE | 6h | S2.1 |
| S2.3 | Module completion API + XP award (first XP logic) | BE | 4h | S2.2 |
| S2.4 | Knowledge test tables + seed L0–L2 question pools (60 each) | BE+Content | 12h | S1.4 |
| S2.5 | Test API: get randomized test, submit/grade, cooldown | BE | 8h | S2.4 |
| S2.6 | Gate logic: all modules → unlock test; test pass → unlock next level | BE | 4h | S2.3, S2.5 |
| S2.7 | Course level view page (module list with lock/complete status) | FE | 4h | S2.2 |
| S2.8 | Module content page (markdown render + market tabs) | FE | 6h | S2.2 |
| S2.9 | Complete button + progress bar | FE | 3h | S2.3 |
| S2.10 | Test interface (questions, timer, submit, results) | FE | 8h | S2.5 |
| S2.11 | Dashboard: live course progress card | FE | 2h | S2.3 |
| S2.12 | XP ledger table + basic XP display on dashboard | BE+FE | 4h | S2.3 |

**Sprint 2 Exit**: User can learn L0–L2, take tests, see progress, earn XP.

---

## Sprint 3 (Week 5–6): Trading Engine MVP

| Task ID | Task | Owner | Effort | Depends On |
|---------|------|-------|--------|------------|
| S3.1 | Historical data ingestion (1 instrument per market: EUR/USD, BTC/USDT, XAU/USD) | BE | 8h | — |
| S3.2 | Time-series data table for OHLCV candles | BE | 3h | S1.3 |
| S3.3 | Replay engine: serve candles at 1x–10x speed | BE | 8h | S3.1, S3.2 |
| S3.4 | WebSocket server: price:tick broadcasting | BE | 4h | S3.3 |
| S3.5 | Trading phases table + user_phase_attempts table | BE | 4h | S1.3 |
| S3.6 | Phase 1 activation on L2 test pass (gate trigger) | BE | 2h | S2.6, S3.5 |
| S3.7 | Market order execution (fill + spread + slippage) | BE | 6h | S3.4 |
| S3.8 | Limit order: pending + fill on tick match | BE | 4h | S3.7 |
| S3.9 | Position tracking (open/close, P&L, equity update) | BE | 4h | S3.7 |
| S3.10 | Rules engine MVP: R001 (max risk), R003 (SL), R004 (daily loss) | BE | 6h | S3.9 |
| S3.11 | Trades table + trade logging | BE | 2h | S3.9 |
| S3.12 | Phase status tracking (equity, DD, trade count, day count) | BE | 4h | S3.9 |
| S3.13 | Phase pass/fail detection (target hit, DD breach, time expiry) | BE | 4h | S3.12 |
| S3.14 | Lightweight Charts integration + WS price feed | FE | 8h | S3.4 |
| S3.15 | Order panel (buy/sell, size, SL, TP, R:R preview) | FE | 6h | S3.7 |
| S3.16 | Open positions list (real-time P&L updates) | FE | 4h | S3.9 |
| S3.17 | Phase status bar on trading page | FE | 3h | S3.12 |
| S3.18 | Rule violation overlay (warning/block display) | FE | 3h | S3.10 |

**Sprint 3 Exit**: User can trade in Phase 1 with live chart, market+limit orders, basic rules enforced.

---

## Sprint 4 (Week 7–8): Integration + MVP Polish

| Task ID | Task | Owner | Effort | Depends On |
|---------|------|-------|--------|------------|
| S4.1 | Trade XP events: execute trade (+10), rule followed (+25), rule broken (-40) | BE | 3h | S3.11, S2.12 |
| S4.2 | Daily snapshot cron job | BE | 3h | S3.12 |
| S4.3 | Basic performance metrics: win rate, profit factor, max DD | BE | 4h | S3.11 |
| S4.4 | Performance dashboard page (equity curve + 4 metric cards) | FE | 6h | S4.3 |
| S4.5 | Trade log page with history table | FE | 3h | S3.11 |
| S4.6 | Trade journal (notes + strategy tag per trade) | FE+BE | 4h | S3.11 |
| S4.7 | Phase completion screen (celebration + stats) | FE | 3h | S3.13 |
| S4.8 | Dashboard: live phase status card + XP bar | FE | 3h | S3.12, S2.12 |
| S4.9 | Anti-memorization: random start + date hiding | BE | 3h | S3.3 |
| S4.10 | End-to-end testing: register → learn → test → trade → pass phase | QA | 8h | All |
| S4.11 | Bug fixes + UX polish from testing | FE+BE | 8h | S4.10 |
| S4.12 | Mobile responsive pass (dashboard, course, trading) | FE | 6h | S4.10 |

**Sprint 4 Exit = MVP COMPLETE**: Full loop works end-to-end.

---

## Sprint 5 (Week 9–10): Full Trading Engine

| Task ID | Task | Owner | Effort | Depends On |
|---------|------|-------|--------|------------|
| S5.1 | Stop order + stop-limit execution | BE | 4h | S3.7 |
| S5.2 | Trailing stop logic | BE | 3h | S3.7 |
| S5.3 | OCO order logic | BE | 3h | S3.7 |
| S5.4 | Rules R002, R005, R006, R007, R008, R009, R010, R011 | BE | 12h | S3.10 |
| S5.5 | Phases 2–5 config + per-phase rule adjustments | BE | 4h | S3.5 |
| S5.6 | Phase unlock gates (course level + previous phase) | BE | 3h | S5.5 |
| S5.7 | Reset system: counter, cooldown, multiplier, new data | BE | 6h | S5.5 |
| S5.8 | Reset UI: confirmation modal, cooldown timer, multiplier preview | FE | 3h | S5.7 |
| S5.9 | Failure screen (stats preserved, diagnosis, recommendations) | FE | 4h | S3.13 |
| S5.10 | Order type selector in order panel (all types) | FE | 3h | S5.1–S5.3 |

**Sprint 5 Exit**: All 5 phases, all order types, all rules, reset system working.

---

## Sprint 6 (Week 11–12): Advanced Trading + Simulation

| Task ID | Task | Owner | Effort | Depends On |
|---------|------|-------|--------|------------|
| S6.1 | Synthetic data generator (regime params: trend/range/vol) | BE | 12h | S3.3 |
| S6.2 | Blend mode: multi-period splice | BE | 4h | S3.3 |
| S6.3 | Mirror mode: horizontal flip | BE | 3h | S3.3 |
| S6.4 | Instrument obfuscation | BE | 2h | S3.3 |
| S6.5 | Execution realism: dynamic spread, swap/funding, partial fills | BE | 6h | S3.7 |
| S6.6 | Advanced metrics: Sharpe, R-multiple, risk consistency, revenge detection | BE | 8h | S4.3 |
| S6.7 | Margin calculation + margin call detection | BE | 4h | S3.9 |
| S6.8 | Requirements shortfall warning (at 75% time elapsed) | BE+FE | 3h | S3.12 |
| S6.9 | Near-pass detection (within 80% of target at failure) | BE | 2h | S3.13 |
| S6.10 | Diagnostic report service (after 3 consecutive failures) | BE | 4h | S5.7 |
| S6.11 | Diagnostic report UI | FE | 3h | S6.10 |

**Sprint 6 Exit**: Full simulation realism, advanced metrics, diagnostic system.

---

## Sprint 7 (Week 13–14): Certification Engine

| Task ID | Task | Owner | Effort | Depends On |
|---------|------|-------|--------|------------|
| S7.1 | Cert scoring: profit sub-score (4 metrics) | BE | 3h | S6.6 |
| S7.2 | Cert scoring: risk, consistency, discipline sub-scores | BE | 5h | S6.6 |
| S7.3 | Final score aggregation + reset multiplier | BE | 2h | S7.1, S7.2 |
| S7.4 | Market-adjusted benchmarks (Gold tighter consistency) | BE | 2h | S7.3 |
| S7.5 | Certifications table + gate checkers (all 5 levels) | BE | 6h | S7.3 |
| S7.6 | Auto-check on phase completion | BE | 2h | S7.5 |
| S7.7 | Certificate PDF template | Design | 4h | — |
| S7.8 | PDF generation service (Puppeteer) | BE | 4h | S7.7 |
| S7.9 | Unique cert ID + download endpoint | BE | 2h | S7.8 |
| S7.10 | Public verification page (`/verify/:certId`) | FE | 3h | S7.9 |
| S7.11 | Cert journey page (timeline, requirements, score preview) | FE | 6h | S7.5 |
| S7.12 | Cert earned email (Resend) | BE | 2h | S7.8 |
| S7.13 | Provisional cert (60–64 score) + recovery phase | BE | 4h | S7.3 |

**Sprint 7 Exit**: Full certification system with PDF, verification, scoring.

---

## Sprint 8 (Week 15–16): Gamification + Content

| Task ID | Task | Owner | Effort | Depends On |
|---------|------|-------|--------|------------|
| S8.1 | Badge system: tables, seed 28 badges, condition checkers | BE | 8h | S2.12 |
| S8.2 | Streak tracking service | BE | 3h | S4.2 |
| S8.3 | Leaderboard: score calculator, cache table, refresh cron | BE | 6h | S7.3 |
| S8.4 | Leaderboard anti-gaming (min trades, percentile ranking) | BE | 2h | S8.3 |
| S8.5 | Badge collection page + earned modal | FE | 4h | S8.1 |
| S8.6 | Streak counter component | FE | 1h | S8.2 |
| S8.7 | Leaderboard page (global, market, weekly, discipline tabs) | FE | 4h | S8.3 |
| S8.8 | XP award toast notifications | FE | 2h | S2.12 |
| S8.9 | Seed L3–L5 course content + question pools | Content | 16h | S2.1 |
| S8.10 | Challenge exam system (skip gates) | BE+FE | 4h | S2.5 |
| S8.11 | Integration testing full loop (learn→trade→cert→badges) | QA | 8h | All |

**Sprint 8 Exit**: Full gamification live, L3–L5 content loaded.

---

## Sprint 9 (Week 17–18): Content + Lab

| Task ID | Task | Owner | Effort | Depends On |
|---------|------|-------|--------|------------|
| S9.1 | Seed L6–L9 course content + question pools | Content | 16h | S2.1 |
| S9.2 | Strategy Lab: sandbox mode (no rules, no scoring) | BE | 3h | S3.7 |
| S9.3 | Lab API: start session | BE | 2h | S9.2 |
| S9.4 | Lab UI: trading terminal + "Lab Mode" banner | FE | 2h | S9.2 |

**Sprint 9 Exit**: All course content live, Strategy Lab available.

---

## Sprint 10 (Week 19–20): Revenue + Community

| Task ID | Task | Owner | Effort | Depends On |
|---------|------|-------|--------|------------|
| S10.1 | Broker referral system (Level 3+ trigger, tracking links) | BE | 4h | S7.5 |
| S10.2 | Broker referral UI (banner + link in cert page) | FE | 2h | S10.1 |
| S10.3 | Community system: basic forum/chat | BE+FE | 12h | S1.5 |
| S10.4 | Community subscription (Stripe recurring after 1-month free) | BE | 4h | S1.6 |
| S10.5 | Email notifications: phase passed, cert earned, weekly summary | BE | 6h | S7.12 |
| S10.6 | Anti-churn emails (3-day, 7-day, 14-day no-login) | BE | 4h | S10.5 |

**Sprint 10 Exit**: Revenue streams active, community live.

---

## Sprint 11 (Week 21–22): Launch Prep

| Task ID | Task | Owner | Effort | Depends On |
|---------|------|-------|--------|------------|
| S11.1 | Mobile responsive audit (all 11 screens) | FE | 8h | All |
| S11.2 | Performance optimization (<3s load on 3G) | FE+BE | 8h | All |
| S11.3 | Security audit (auth, payment, data access) | BE | 8h | All |
| S11.4 | Load testing (100 concurrent trading sessions) | BE | 4h | All |
| S11.5 | SEO: meta tags, OG images, sitemap | FE | 3h | — |
| S11.6 | Landing page (marketing, pricing, features) | FE+Design | 8h | — |
| S11.7 | Analytics setup (PostHog: funnels, retention, drops) | BE | 3h | — |
| S11.8 | Final QA pass | QA | 8h | All |

**Sprint 11 Exit = LAUNCH READY**.

---

# STEP 6 — TEAM REQUIREMENTS

| Role | Count | Responsibilities |
|------|:-----:|------------------|
| **Frontend Dev** | 1–2 | All FE tasks: pages, components, charts, responsive, animations |
| **Backend Dev** | 1–2 | APIs, trading engine, rules engine, WS server, crons, scoring |
| **Designer** | 1 | Design system, cert template, landing page, badge icons, UX review |
| **Content Writer** | 1 | Course content (L0–L9), question pools (540+ questions), module text |
| **QA / Tester** | 0.5 | Sprint 4, 8, 11 integration tests; edge case coverage |

### Solo Developer Path (1 person)
If building alone, follow this priority: BE foundation → FE learning → BE trading → FE trading → cert → gamification. Skip community (Sprint 10.3–10.4) until post-launch. Estimated timeline: **32–36 weeks** instead of 22.

---

# STEP 7 — MVP CUT

## What Ships in MVP (Week 8)

| Feature | Included | Notes |
|---------|:--------:|-------|
| Auth + Payment (Stripe) | ✅ | Full purchase flow |
| Onboarding (5-step) | ✅ | Track selection, tour |
| L0–L2 Course Content | ✅ | 12 modules + market tabs |
| Knowledge Tests (L0–L2) | ✅ | Randomized, cooldown |
| Phase 1 Trading Sim | ✅ | Market + limit orders |
| Historical Replay (3 instruments) | ✅ | 1 per market |
| Rules R001, R003, R004 | ✅ | Core risk rules |
| Basic Performance (win rate, PF, DD) | ✅ | Enough for feedback |
| XP System (basic) | ✅ | Module + trade actions |
| Trade Journal | ✅ | Notes + tags |
| Dashboard | ✅ | Course + phase + XP |
| Phase 1 Pass/Fail | ✅ | Target + DD logic |

## What Is Cut from MVP

| Feature | Deferred To | Reason |
|---------|:-----------:|--------|
| Phases 2–5 | Sprint 5 | Phase 1 tests the full loop |
| Stop/Trailing/OCO orders | Sprint 5 | Market + limit sufficient for beginners |
| Reset system | Sprint 5 | Not needed until Phase 2+ |
| Synthetic data | Sprint 6 | Historical replay sufficient for MVP |
| Anti-memorization (blend/mirror) | Sprint 6 | Low user count = low risk |
| Certification scoring | Sprint 7 | No one reaches cert in week 1–8 |
| Badges | Sprint 8 | XP is sufficient gamification for MVP |
| Leaderboard | Sprint 8 | Needs user base |
| Strategy Lab | Sprint 9 | Nice-to-have for MVP |
| L3–L9 content | Sprint 8–9 | Users still in L0–L2 during MVP |
| Community | Sprint 10 | Post-launch feature |
| Broker referral | Sprint 10 | Triggered at Cert L3 |
| Challenge exams | Sprint 8 | Edge case for experienced users |
| Email notifications | Sprint 10 | In-app notifications sufficient |

## MVP Success Criteria

- [ ] 1 user can complete full flow: purchase → L0 → L1 → L2 → Phase 1 trade → Phase 1 pass
- [ ] Trading chart renders with real-time price feed
- [ ] Rules block invalid trades correctly
- [ ] Performance metrics calculate accurately
- [ ] XP awards for all core actions
- [ ] Works on mobile (responsive)
- [ ] Page load <3s on broadband

---

# STEP 8 — RISK & FAILURE PLAN

| # | Risk | Severity | Likelihood | Mitigation | Fallback |
|---|------|----------|------------|------------|----------|
| 1 | **Price data quality** — bad/missing candle data causes simulation errors | High | Medium | Validate data on ingestion; gap-fill algo for missing candles | Use only verified data sources (TradingView CSV exports); reduce to 1 instrument per market |
| 2 | **WebSocket scalability** — WS server can't handle concurrent users | High | Low (early) | Use Redis pub/sub for WS message distribution; horizontal scaling | Fallback to REST polling (1s interval) for price updates; degrades UX but functional |
| 3 | **Stripe payment edge cases** — failed payments, double charges | High | Low | Use Stripe webhooks for payment confirmation; idempotency keys | Manual refund process; customer support email |
| 4 | **Trading engine calculation errors** — P&L, margin, or DD calculated wrong | Critical | Medium | Unit tests for EVERY calculation; property-based testing with random inputs | Shadow mode: run engine calculations in parallel with a second implementation; compare results |
| 5 | **Content bottleneck** — course content not ready in time | Medium | High | Start content creation in Sprint 1 (parallel); L0–L2 minimum for MVP | Ship with L0–L2 only; add levels as content completes post-launch |
| 6 | **User drops off at Phase 1** — too hard/frustrating | High | Medium | Rebalanced difficulty (15% DD, 45 days, zero commission); Strategy Lab | Further loosen Phase 1 to 20% DD if data shows >50% failure rate in first 2 weeks |
| 7 | **Chart library limitations** — Lightweight Charts can't support needed features | Medium | Low | Evaluate capabilities before Sprint 3; prototype first | Switch to TradingView Advanced Charts (paid) or custom canvas renderer |
| 8 | **Scope creep** — new features requested during build | Medium | High | Strict sprint scope; all additions go to backlog; MVP cut enforced | Defer everything not on sprint plan; review backlog every 2 sprints |
| 9 | **Solo developer burnout** — 22-week sprint is intense | High | High (if solo) | Realistic sprint sizing; each sprint has buffer day; automate tests early | Extend to 32 weeks; cut community + broker referral for launch |
| 10 | **Data privacy / GDPR** — trading data, performance, certificates | Medium | Medium | Minimal data collection; user data export endpoint; delete account flow | Cookie consent banner; privacy policy page; data retention limits |

## Critical Path Dependencies

```
Auth → Learning → Trading → Certification → Gamification
  ↓                  ↓
Payment          Price Data
  ↓                  ↓
Onboarding     Chart Library

BLOCKING RISKS:
- If Auth fails → everything blocked
- If Price Data fails → Trading blocked → Cert blocked
- If Stripe fails → no users can enter
```

## Go/No-Go Checklist (Pre-Launch)

| Check | Status |
|-------|--------|
| Auth flow works (register → login → session) | ☐ |
| Payment processes successfully | ☐ |
| L0–L2 content renders correctly | ☐ |
| Tests grade accurately | ☐ |
| Phase 1 trading executes without errors | ☐ |
| Rules engine blocks invalid trades | ☐ |
| Performance metrics calculate correctly | ☐ |
| XP awards/deducts correctly | ☐ |
| Mobile responsive (all screens) | ☐ |
| Page load <3s | ☐ |
| No critical security vulnerabilities | ☐ |
| Stripe webhook handles edge cases | ☐ |

---

*End of Developer Execution Plan. System is fully broken down into buildable, assignable, sprint-ready tasks.*
