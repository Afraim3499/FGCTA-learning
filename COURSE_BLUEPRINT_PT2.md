# COURSE BLUEPRINT — PART 2: LEVELS 5–9, MAPPING TABLES, SYSTEMS

---

## LEVEL 5 — ADVANCED & INSTITUTIONAL

**Purpose**: Derivatives, order flow, arbitrage, ML, market making.
**Skill Level**: Advanced → Institutional
**Prerequisites**: L4 complete

### Module 5.1 — Order Flow & Liquidity
- **Objective**: Read institutional order flow and supply/demand zones
- **Families**: OF_01, OF_02
- **IDs**: OF_01.1, OF_01.2, OF_01.3, OF_02.1, OF_02.2

### Module 5.2 — Directional Options
- **Objective**: Express directional views via options structures
- **Families**: DE_01
- **IDs**: DE_01.1, DE_01.2

### Module 5.3 — Non-Directional Options
- **Objective**: Trade volatility and time decay without directional bias
- **Families**: DE_02
- **IDs**: DE_02.1, DE_02.2, DE_02.3, DE_02.4

### Module 5.4 — Greeks & Volatility Trading
- **Objective**: Trade implied vs realized vol, gamma, skew
- **Families**: DE_03
- **IDs**: DE_03.1, DE_03.2, DE_03.3

### Module 5.5 — Arbitrage Systems
- **Objective**: Exploit pricing inefficiencies across markets and instruments
- **Families**: AR_01, AR_02, AR_03
- **IDs**: AR_01.1, AR_01.2, AR_01.3, AR_02.1, AR_02.2, AR_02.3, AR_03.1, AR_03.2, AR_03.3

### Module 5.6 — Market Making
- **Objective**: Understand spread capture and liquidity provision mechanics
- **Families**: MM_01
- **IDs**: MM_01.1, MM_01.2, MM_01.3

### Module 5.7 — Machine Learning in Trading
- **Objective**: Apply ML models to prediction, regime detection, optimization
- **Families**: ML_01, ML_02, ML_03, ML_04
- **IDs**: ML_01.1, ML_01.2, ML_02.1, ML_03.1, ML_03.2, ML_04.1, ML_04.2

| Adapt | Forex | Crypto | Gold |
|-------|-------|--------|------|
| 5.1 | Limited DOM; use tick data | Full DOM + on-chain liquidity | CME futures DOM available |
| 5.5 | Triangular arb (AR_01.1); covered interest (AR_03.3) | Cross-exchange (AR_01.2); DEX arb (DF_03) | Basis trade on GC futures; Gold/Silver stat-arb |
| 5.6 | ECN market making | Cross-exchange MM unique to crypto | Futures pit/electronic MM |

---

## LEVEL 6 — RISK & CAPITAL SYSTEMS

**Purpose**: Build complete risk frameworks for live capital deployment.
**Skill Level**: Intermediate → Advanced
**Prerequisites**: L2 minimum (taught alongside L3–L5)

### Module 6.1 — Position Sizing
- **Families**: RM_01
- **IDs**: RM_01.1, RM_01.2, RM_01.3, RM_01.4

### Module 6.2 — Stop Systems
- **Families**: RM_02
- **IDs**: RM_02.1, RM_02.2, RM_02.3

### Module 6.3 — Portfolio Risk Management
- **Families**: RM_03
- **IDs**: RM_03.1, RM_03.2, RM_03.3, RM_03.4, RM_03.5

### Module 6.4 — Leverage & Liquidation Control
- **Families**: RM_04
- **IDs**: RM_04.1, RM_04.2

### Module 6.5 — Hedging Strategies
- **Families**: RM_05, DE_04
- **IDs**: RM_05.1, RM_05.2, RM_05.3, RM_05.4, DE_04.1, DE_04.2, DE_04.3, DE_04.4

### Module 6.6 — Operational & Execution Risk (Crypto-Heavy)
- **Families**: RM_06
- **IDs**: RM_06.1, RM_06.2, RM_06.3

| Adapt | Forex | Crypto | Gold |
|-------|-------|--------|------|
| 6.1 | Standard 1-2% risk; stable vol | Wider stops needed; adjust for 24/7 gaps | Moderate vol; standard sizing works |
| 6.4 | Regulated leverage (30:1–50:1) | 125x available; liquidation cascades are real | Lower leverage typical; margin calls on futures |
| 6.6 | Broker counterparty risk only | Custody, depeg, DCA, exchange outage, self-custody | Minimal; storage/delivery risk on physical |

---

## LEVEL 7 — REGIME & MARKET CONDITIONS

**Purpose**: Classify market state and select strategies accordingly.
**Skill Level**: Advanced
**Prerequisites**: L3+ complete

### Module 7.1 — Regime Classification
- **Objective**: Identify trending, ranging, high-vol, low-vol, event-driven states
- **Families**: ML_03 (Regime Detection), FD_03 (Risk Regime)
- **IDs**: ML_03.1, ML_03.2, FD_03.1, FD_03.4

### Module 7.2 — Strategy-Regime Matching
- **Objective**: Map every strategy family to its optimal regime
- **Key Concepts**: Strategy selection matrix, regime filters, when NOT to trade

(See Regime Mapping Table in Section 6 below)

---

## LEVEL 8 — STRATEGY INTEGRATION

**Purpose**: Combine multiple strategies into unified decision frameworks.
**Skill Level**: Advanced → Institutional
**Prerequisites**: L5+ complete

### Module 8.1 — Multi-Pillar Confluence
- **Families**: HY_01
- **IDs**: HY_01.1, HY_01.2, HY_01.3, HY_01.4, HY_01.5

### Module 8.2 — Multi-Timeframe Systems
- **Families**: HY_02
- **IDs**: HY_02.1, HY_02.2

| Adapt | Forex | Crypto | Gold |
|-------|-------|--------|------|
| 8.1 | Technical + fundamental confluence | On-chain + technical + funding composite | Macro + technical + COT confluence |
| 8.2 | Daily/4H/1H standard stack | Weekly/Daily/4H for swing; 4H/1H/15m for intraday | Weekly/Daily/4H preferred (slower structure) |

---

## LEVEL 9 — EXECUTION & PSYCHOLOGY

**Purpose**: Bridge from strategy knowledge to live performance.
**Skill Level**: All levels (revisited throughout)
**Prerequisites**: L2+ (progressive)

### Module 9.1 — Execution Algorithms
- **Families**: EX_01
- **IDs**: EX_01.1, EX_01.2, EX_01.3, EX_01.4

### Module 9.2 — Trading Psychology & Discipline
- **Objective**: Manage cognitive biases, emotional triggers, discipline systems
- **Key Concepts**: Loss aversion, FOMO, revenge trading, process vs outcome, journal systems

### Module 9.3 — Trade Journal & Performance Review
- **Objective**: Build systematic feedback loops for continuous improvement
- **Key Concepts**: Trade logging, metric tracking (win rate, R-multiple, expectancy), review cadence

---

# 3. STRATEGY MAPPING TABLE (COMPLETE)

| Module | Strategy Family | Logic IDs |
|--------|----------------|-----------|
| 1.1 | TF_06 | TF_06.1 |
| 1.2 | PA_06 | PA_06.1, PA_06.2 |
| 2.1 | TF_01, TF_02, TF_05 | TF_01.1, TF_02.1, TF_02.2, TF_05.1 |
| 2.2 | BO_01, BO_02, BO_03 | BO_01.1, BO_02.1, BO_02.4, BO_03.1, BO_03.4 |
| 2.3 | MR_01, MR_02 | MR_01.1, MR_02.1 |
| 2.4 | MO_01, MO_02 | MO_01.1, MO_02.1–MO_02.3 |
| 2.5 | PA_01, PA_02, PA_03 | PA_01.1, PA_01.2, PA_02.1, PA_02.2, PA_03.1, PA_03.2 |
| 3.1 | TF_01, TF_03, TF_04 | TF_01.2–TF_01.4, TF_03.1–TF_03.4, TF_04.1 |
| 3.2 | BO_03, BO_04, BO_05 | BO_03.2, BO_03.3, BO_04.1, BO_05.1, BO_05.2 |
| 3.3 | MR_01–MR_04 | MR_01.2, MR_01.3, MR_02.2, MR_02.3, MR_03.1–MR_03.4, MR_04.1, MR_04.2 |
| 3.4 | PA_02–PA_04 | PA_02.3, PA_03.3, PA_03.4, PA_04.1, PA_04.2 |
| 3.5 | PA_05, TF_06 | PA_05.1, PA_05.2, TF_06.2, TF_06.3 |
| 3.6 | TF_07 | TF_07.1, TF_07.2, TF_07.3 |
| 4.1 | FD_01–FD_03 | FD_01.1, FD_01.2, FD_02.1, FD_02.2, FD_03.1–FD_03.4 |
| 4.2 | SE_01, SE_06, SE_07 | SE_01.1, SE_01.2, SE_06.1, SE_06.2, SE_07.1 |
| 4.3F | CA_01 | CA_01.1, CA_01.2, CA_01.3 |
| 4.3C | OC_01–OC_03 | OC_01.1–OC_01.3, OC_02.1, OC_02.2, OC_03.1–OC_03.3 |
| 4.3G | FD_04, CA_02 | FD_04.1–FD_04.4, CA_02.1, CA_02.2 |
| 4.4C | SE_02–SE_04 | SE_02.1–SE_02.3, SE_03.1, SE_03.2, SE_04.1, SE_04.2 |
| 4.4G | RV_01 | RV_01.1, RV_01.2, RV_01.3 |
| 4.5C | NR_01–NR_04 | NR_01.1, NR_01.2, NR_02.1–NR_02.3, NR_03.1, NR_04.1, NR_04.2 |
| 4.5G | SE_08, SE_01 | SE_08.1, SE_01.1, SE_01.2 |
| 4.6C | DF_01, DF_02 | DF_01.1, DF_01.2, DF_02.1–DF_02.4 |
| 4.6G | FD_05, FD_03 | FD_05.1, FD_03.2, FD_03.3 |
| 4.7C | DF_03 | DF_03.1–DF_03.4 |
| 4.8C | NR_05, SE_05 | NR_05.1, NR_05.2, SE_05.1, SE_05.2 |
| 5.1 | OF_01, OF_02 | OF_01.1–OF_01.3, OF_02.1, OF_02.2 |
| 5.2 | DE_01 | DE_01.1, DE_01.2 |
| 5.3 | DE_02 | DE_02.1–DE_02.4 |
| 5.4 | DE_03 | DE_03.1–DE_03.3 |
| 5.5 | AR_01–AR_03 | AR_01.1–AR_01.3, AR_02.1–AR_02.3, AR_03.1–AR_03.3 |
| 5.6 | MM_01 | MM_01.1–MM_01.3 |
| 5.7 | ML_01–ML_04 | ML_01.1, ML_01.2, ML_02.1, ML_03.1, ML_03.2, ML_04.1, ML_04.2 |
| 6.1 | RM_01 | RM_01.1–RM_01.4 |
| 6.2 | RM_02 | RM_02.1–RM_02.3 |
| 6.3 | RM_03 | RM_03.1–RM_03.5 |
| 6.4 | RM_04 | RM_04.1, RM_04.2 |
| 6.5 | RM_05, DE_04 | RM_05.1–RM_05.4, DE_04.1–DE_04.4 |
| 6.6 | RM_06 | RM_06.1–RM_06.3 |
| 7.1 | ML_03, FD_03 | ML_03.1, ML_03.2, FD_03.1, FD_03.4 |
| 8.1 | HY_01 | HY_01.1–HY_01.5 |
| 8.2 | HY_02 | HY_02.1, HY_02.2 |
| 9.1 | EX_01 | EX_01.1–EX_01.4 |

---

# 4. LEARNING PROGRESSION MAP

## Skill Stage Definitions

| Stage | Capabilities Gained | Strategies Accessible | Gate Criteria |
|-------|--------------------|-----------------------|---------------|
| **Beginner** | Chart reading, trend/range ID, basic S/R, single-indicator trades | TF_01.1, MR_01.1, MR_02.1, BO_01.1, PA_01, PA_06 | Can identify market structure; execute paper trades |
| **Intermediate** | Multi-indicator systems, pattern recognition, session awareness, basic risk | All L2–L3 families; FD_01; SE_01/06/07; market-specific L4 basics | Can build a trade plan with entry/exit/risk; consistent paper results |
| **Advanced** | Derivatives, order flow, arbitrage, regime awareness, portfolio risk | All L4–L5 families; RM full suite; ML_03; HY_01/02 | Can manage multi-position portfolios; backtested systems |
| **Institutional** | Market making, ML systems, multi-factor quant, execution algos | MM_01; ML_01/02; AR full suite; EX_01; DE_03 | Can design automated systems; manage institutional capital |

## Unlock Progression

```
L0 (Foundations)
  └→ L1 (Structure) — unlocks: trend/S/R identification
      └→ L2 (Core Families) — unlocks: 5 strategy archetypes
          ├→ L3 (Subtypes) — unlocks: variant selection per condition
          │   └→ L4 (Market-Specific) — unlocks: exclusive alpha sources
          │       └→ L5 (Institutional) — unlocks: derivatives, arb, ML
          ├→ L6 (Risk) — parallel track, unlocked at L2
          └→ L7 (Regime) — unlocks: strategy selection matrix
              └→ L8 (Integration) — unlocks: multi-pillar confluence
                  └→ L9 (Execution) — unlocks: live trading readiness
```

---

# 5. REGIME MAPPING SYSTEM

## Regime Classification

| Regime | Characteristics | Detection Methods |
|--------|----------------|-------------------|
| **Trending** | Sustained directional movement; ADX > 25; MA alignment | ADX/DMI, MA slope, HH/HL structure |
| **Ranging** | Price oscillates between S/R; ADX < 20; flat MAs | ADX, Bollinger width, ATR contraction |
| **High Volatility** | Large candles; wide ATR; fast moves | ATR expansion, VIX/DVOL, BB width |
| **Low Volatility** | Tight ranges; small candles; compressed BBs | NR7/NR4, BB squeeze, ATR contraction |
| **Event-Driven** | News/data releases cause spikes; gaps; regime shifts | Calendar, news feed, COT shift |

## Strategy → Regime Map

| Regime | Primary Strategies | Avoid |
|--------|-------------------|-------|
| **Trending** | TF_01–TF_07, MO_01, MO_02, PA_03, BO_01, BO_02, HY_02 | MR_01, MR_02 (will get stopped out) |
| **Ranging** | MR_01, MR_02, MR_03, PA_06, MR_04, DE_02 (Iron Condor) | TF_01–TF_05 (whipsaws), BO_01 (false breakouts) |
| **High Volatility** | BO_03, DE_02 (Straddle), DE_03, BO_05 (fade), SE_04 | MM_01 (spread risk), tight stop systems |
| **Low Volatility** | BO_03 (squeeze), MR_02, DE_02 (short straddle), CA_01 | MO_01 (no momentum), TF_01 (flat MAs) |
| **Event-Driven** | FD_01, FD_02, FD_03, FD_04, NR_02, SE_01, DE_01 | MR_01 (trend after event), systematic bots |

### Market-Specific Regime Notes

| Regime | Forex | Crypto | Gold |
|--------|-------|--------|------|
| Trending | Central bank divergence drives multi-month trends | Narrative/halving cycles drive multi-month trends | Macro regime (inflation/USD weakness) drives trends |
| Ranging | Major pairs range during policy uncertainty | Consolidation between cycles; altcoin rotation | Ranges during stable rate environments |
| High Vol | NFP, CPI, rate decisions | Liquidation cascades, regulatory news | Geopolitical events, Fed pivot |
| Low Vol | Summer months, holiday periods | Post-halving early cycle | Stable macro backdrop |
| Event | Scheduled data releases predictable | Regulatory + token events less predictable | Fed meetings, CPI, geopolitical shock |

---

# 6. PRACTICAL TRAINING DESIGN

| Level | Exercise Type | Skill Output |
|-------|--------------|-------------|
| **L0** | Platform walkthrough; place demo orders; read 10 charts | Can navigate platform and read price action |
| **L1** | Mark S/R on 20 charts; identify trend/range on 20 charts; label sessions | Can correctly classify market structure |
| **L2** | Paper trade each archetype 10x; log every trade with R:R | Can execute 5 core strategy types with proper entries/exits |
| **L3** | Scenario: "Given this chart + conditions, which subtype?" (20 scenarios) | Can select optimal variant for given conditions |
| **L4** | Market-specific case studies (5 per market); live data exercises | Can apply market-exclusive strategies with real data |
| **L5** | Build option payoff diagrams; construct arb trade on paper; backtest ML model | Can design multi-leg structures and systematic models |
| **L6** | Size 20 positions using 3 methods; build risk dashboard | Can implement complete risk framework |
| **L7** | Classify 30 historical periods by regime; map strategy selections | Can identify regime and select appropriate strategies |
| **L8** | Build 3 confluence systems (one per market); backtest each | Can combine strategies into unified decision models |
| **L9** | 30-day simulated trading journal; psychology self-audit | Ready for live execution with discipline framework |

### Practice Type Breakdown

| Practice Type | Used In Levels | Description |
|--------------|----------------|-------------|
| **Chart Analysis** | L0, L1, L3, L7 | Static chart markup, pattern identification, structure labeling |
| **Simulation** | L2, L4, L5, L9 | Paper/demo trading with real-time or historical data |
| **Scenario-Based Thinking** | L3, L7, L8 | "What would you do?" decision trees with multiple correct paths |
| **System Building** | L5, L6, L8 | Construct complete trading systems with rules, risk, and review |
| **Backtesting** | L3, L5, L8 | Historical validation of strategies using defined rules |
| **Journaling** | L9 (ongoing) | Trade logging, performance metrics, behavioral pattern tracking |

---

# 7. MARKET ADAPTATION SUMMARY TABLE

| Module | Forex Emphasis | Crypto Emphasis | Gold Emphasis |
|--------|---------------|-----------------|---------------|
| Trend Following | 50/200 MA; daily/4H | 9/21 MA; 1H/4H; wider stops | All TFs; slower but cleaner trends |
| Breakout | London/NY session opens | 24/7 adapted; Asia accumulation | COMEX open; round number breakouts |
| Mean Reversion | RSI 70/30; tick volume limits VWAP | RSI 80/20; 3σ BB needed | Standard thresholds; ranges well |
| Fundamentals | NFP, CPI, rate decisions | Regulatory events, narrative shifts | Fed, inflation, USD, CB buying |
| Sentiment | COT, retail positioning | Funding rate, OI, liquidations, social | COT, ETF flows, options |
| Risk | Regulated leverage; broker risk | 125x available; custody/depeg risk | Moderate leverage; storage risk |
| Exclusive | Carry trade (CA_01) | On-chain, DeFi, tokenomics, narrative | Gold macro drivers, relative value |

---

*End of Course Blueprint. Total: 10 Levels | 42 Modules | ~220 Strategies Mapped | Zero Duplication.*
