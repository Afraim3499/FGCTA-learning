# TRADING ACADEMY PLATFORM — MASTER PLAN v1.0

> **Product**: Elite Trading Academy — Learn. Trade. Certify.
> **Model**: Single-tier premium platform (no free/basic tiers)
> **Engines**: Learning | Trading Simulation | Certification | Gamification
> **Markets**: Forex / Crypto / Gold (unified core + adaptation layers)

---

# 1. SYSTEM ARCHITECTURE OVERVIEW

```
┌─────────────────────────────────────────────────────────────────┐
│                    TRADING ACADEMY PLATFORM                     │
├─────────────┬──────────────┬───────────────┬───────────────────┤
│  LEARNING   │   TRADING    │ CERTIFICATION │   GAMIFICATION    │
│   ENGINE    │   ENGINE     │    ENGINE     │     ENGINE        │
├─────────────┼──────────────┼───────────────┼───────────────────┤
│ L0–L9 Course│ Sim Capital  │ 5-Level Cert  │ XP / Badges /    │
│ Modules     │ Phases 1–5   │ Score-Based   │ Leaderboard      │
│ Strategy DB │ Rules Engine │ Multi-metric  │ Progress System   │
│ Market Adapt│ Perf Tracker │ Gate Logic    │ Streaks & Ranks   │
└──────┬──────┴──────┬───────┴───────┬───────┴────────┬──────────┘
       │             │               │                │
       └─────────────┴───────────────┴────────────────┘
                            │
                   ┌────────┴────────┐
                   │   USER PROFILE  │
                   │   & DATA LAYER  │
                   └────────┬────────┘
                            │
              ┌─────────────┼─────────────┐
              │             │             │
        ┌─────┴─────┐ ┌────┴────┐ ┌──────┴──────┐
        │  FRONTEND │ │ BACKEND │ │  DATABASE   │
        │  Next.js  │ │ Node.js │ │ PostgreSQL  │
        │  React    │ │ Express │ │ Redis Cache │
        └───────────┘ └─────────┘ └─────────────┘
```

## Engine Interconnections

| From → To | Connection Logic |
|-----------|-----------------|
| Learning → Trading | Module completion unlocks corresponding trading phase |
| Learning → Certification | Course progress feeds certification requirements |
| Trading → Certification | Trading metrics feed certification scoring |
| Trading → Gamification | Every trade action generates XP events |
| Learning → Gamification | Module completion generates XP + badge checks |
| Certification → Gamification | Cert level-up triggers prestige badges |
| Gamification → All | XP/rank displayed across all engine interfaces |

## Data Flow

```
User Action → Event Bus → [Learning DB | Trading DB | XP Ledger]
                              ↓             ↓            ↓
                         Progress      Performance    Rank/Badge
                         Tracker        Tracker       Calculator
                              ↓             ↓            ↓
                         Cert Gate ← Score Aggregator → Leaderboard
```

---

# 2. USER JOURNEY — COMPLETE FLOW

## Phase 1: Onboarding (Day 1)

```
1. User purchases Elite Access
2. Platform creates user profile
3. Market track selection: Forex / Crypto / Gold (or All)
4. Onboarding tutorial (platform walkthrough)
5. Sim account created: Phase 1 ($100 virtual capital)
6. L0 — Market Foundations auto-unlocked
7. User begins Module 0.1
```

## Phase 2: Foundation Building (Week 1–2)

```
8.  Complete L0 modules (0.1–0.4) → earn XP
9.  Pass L0 Knowledge Test (80% min) → unlock L1
10. Complete L1 modules (1.1–1.4) → earn XP
11. Pass L1 Knowledge Test → unlock L2 + Trading Phase 1
12. Begin Phase 1 trading simulation ($100)
13. Practice basic entries/exits while learning L2
```

## Phase 3: Core Strategy Mastery (Week 3–6)

```
14. Complete L2 modules (2.1–2.5) → core strategies learned
15. Pass L2 Test → unlock L3
16. Complete Trading Phase 1 (hit +20% on $100)
17. → CERTIFICATION: Level 1 — "Market Literate" check
18. Phase 2 unlocks ($300 capital)
19. Complete L3 modules (3.1–3.6) → subtypes mastered
20. Complete Trading Phase 2 (hit +20% on $300)
```

## Phase 4: Specialization (Week 7–12)

```
21. Complete L4 (Market-Specific Edge modules)
22. → CERTIFICATION: Level 2 — "Structured Trader" check
23. Phase 3 unlocks ($1,000 capital)
24. Complete L5 (Advanced/Institutional)
25. Complete Trading Phase 3 (hit +25% on $1,000)
26. → CERTIFICATION: Level 3 — "Strategy Operator" check
27. Phase 4 unlocks ($3,000 capital)
28. Broker referral introduced (user can open real account)
```

## Phase 5: Consistency Proving (Week 13–20)

```
29. Complete L6 (Risk & Capital Systems)
30. Complete L7 (Regime & Market Conditions)
31. Complete Trading Phase 4 (hit +25% on $3,000)
32. → CERTIFICATION: Level 4 — "Consistent Trader" check
33. Phase 5 unlocks ($10,000 capital)
34. Complete L8 (Strategy Integration)
35. Complete L9 (Execution & Psychology)
```

## Phase 6: Certification (Week 21–26)

```
36. Complete Trading Phase 5 (hit +30% on $10,000)
37. Final Score calculated across all metrics
38. → CERTIFICATION: Level 5 — "Certified Trader"
39. Certificate issued (verifiable)
40. Leaderboard rank finalized
41. Premium community continuation offered
```

## Journey Gate Map

| Gate | Requirement | Unlocks |
|------|------------|---------|
| G1 | L0 complete + L0 test passed | L1 |
| G2 | L1 complete + L1 test passed | L2 + Trading Phase 1 |
| G3 | L2 complete + Phase 1 passed | L3 + Cert L1 check |
| G4 | L3 complete + Phase 2 passed | L4 + Cert L2 check |
| G5 | L4 complete + Phase 3 passed | L5 + Cert L3 check |
| G6 | L5 + L6 + L7 complete + Phase 4 passed | L8 + Cert L4 check |
| G7 | All levels + Phase 5 passed + final score ≥ 70 | Cert L5 — Certified Trader |

---

# 3. COURSE EXECUTION FLOW

## How Learning Connects to Trading

Every course level has 4 sequential phases:

```
┌──────────┐    ┌──────────┐    ┌──────────────┐    ┌────────────┐
│  LEARN   │ →  │ PRACTICE │ →  │   SIMULATE   │ →  │  EVALUATE  │
│ (Module) │    │(Exercise)│    │(Trading Sim) │    │  (Test +   │
│          │    │          │    │              │    │  Metrics)  │
└──────────┘    └──────────┘    └──────────────┘    └────────────┘
```

### Per-Level Execution Detail

| Level | Learn | Practice | Simulate | Evaluate |
|-------|-------|----------|----------|----------|
| L0 | Read modules 0.1–0.4 | Platform walkthrough, chart reading drills | N/A (no trading yet) | Knowledge test (MCQ) |
| L1 | Read modules 1.1–1.4 | Mark S/R, identify trends on 20 charts | N/A | Structure identification test |
| L2 | Read modules 2.1–2.5 | Paper trade each archetype 10x | Phase 1 ($100) — execute core strategies | Phase 1 metrics + L2 test |
| L3 | Read modules 3.1–3.6 | Scenario selection exercises (20) | Phase 2 ($300) — apply subtypes | Phase 2 metrics + L3 test |
| L4 | Read market-specific modules | Market case studies (5 per market) | Phase 3 ($1,000) — market-specific trades | Phase 3 metrics + L4 test |
| L5 | Read modules 5.1–5.7 | Build option structures, backtest | Phase 4 ($3,000) — advanced execution | Phase 4 metrics + L5 test |
| L6 | Read modules 6.1–6.6 | Size 20 positions, build risk dashboard | Integrated into Phase 4–5 | Risk management audit |
| L7 | Read modules 7.1–7.2 | Classify 30 historical regimes | Regime-aware trading in Phase 4–5 | Regime classification test |
| L8 | Read modules 8.1–8.2 | Build 3 confluence systems | Phase 5 ($10,000) — integration | Phase 5 metrics + L8 test |
| L9 | Read modules 9.1–9.3 | 30-day simulated journal | Phase 5 continuation | Final evaluation |

---

# 4. MONETIZATION STRUCTURE

## Single Elite Model

| Component | Included |
|-----------|----------|
| Full L0–L9 Course Access | ✅ |
| Trading Simulation Engine (all 5 phases) | ✅ |
| 5-Level Certification System | ✅ |
| Gamification (XP, Badges, Leaderboard) | ✅ |
| 1-Month Premium Community Access | ✅ |
| Verifiable Certificate (Level 5) | ✅ |
| 3 Market Tracks (Forex/Crypto/Gold) | ✅ |

## Additional Revenue Streams

| Stream | Trigger | Model |
|--------|---------|-------|
| **Broker Referral** | User reaches Level 3+ certification | CPA/rev-share per funded account |
| **Community Continuation** | After 1-month included period | Monthly subscription |
| **Reset Packs** | User wants to reset sim without penalty | One-time purchase (optional) |
| **Certificate Verification** | Employers/firms verify certificates | Free (drives brand authority) |

---

# 5. CROSS-REFERENCE INDEX

| Document | Contents |
|----------|----------|
| `COURSE_BLUEPRINT_PT1.md` | L0–L4 module breakdown, market adaptations |
| `COURSE_BLUEPRINT_PT2.md` | L5–L9 modules, strategy mapping, regime system |
| `TRADING_ENGINE_SPEC.md` | Trading simulation system full specification |
| `CERTIFICATION_GAMIFICATION.md` | Certification scoring + gamification systems |
| `TECHNICAL_IMPLEMENTATION.md` | Tech stack, DB schema, component map, roadmap |
| `MASTER_TAXONOMY.md` | Strategy families, subtypes, logic IDs |
| `MARKET_MATRIX.md` | Market applicability per strategy |
| `STRATEGY_TABLE.md` | Confidence/validation status per strategy |

---

*This document is the master index. All system details are in linked specification files.*
