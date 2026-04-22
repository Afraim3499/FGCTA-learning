# WEAK / NEEDS VALIDATION LIST (v2 — COMPLETE)

> Updated with full Crypto.md (206 strategies). 62 items flagged.

---

## CATEGORY 1 — LOW CONFIDENCE (Unverified Edge) — 22 items

| Logic ID | Strategy Name | Source | Issue | Action |
|----------|-------------|--------|-------|--------|
| TF_02d | MA Envelope | Forex/Crypto | No clear edge over BB; arbitrary band width | Validate vs BB |
| TF_03c | FRAMA | Forex | Niche; limited adoption | Keep as Variation |
| TF_03d | Adaptive MA Trend | Crypto #8 | "Low" confidence in source | Needs backtest |
| TF_07c | Renko Chart Trend | Forex | No time axis; backtesting unreliable | Reclassify as Tool |
| TF_07d | Point & Figure | Forex | Minimal modern usage | Reclassify as Tool |
| MR_01f | Connors RSI | Forex | Retail-originated; limited evidence | Needs backtest |
| MR_03c | Quantile Regression | Forex | Academic only | Research ref only |
| MR_05b | Camarilla Pivot | Forex | Niche pivot variant | Needs validation |
| MO_03a | ROC Strategy | Crypto #25 | "Low" confidence in source | Needs validation |
| PA_03e | Quasimodo Pattern | Forex | Smart money concept; limited evidence | Needs validation |
| PA_06b | Harmonic Patterns | Forex | Highly subjective | Needs validation |
| PA_07a | Elliott Wave | Forex | Subjective wave counting | Needs validation |
| PA_07b | Gann Angle Trading | Forex | No statistical evidence | Likely invalid |
| PA_08c | Heikin-Ashi & RSI | Forex | Retail combination; no documented edge | Needs validation |
| BO_02e | Asia Session Breakout | Crypto #15 | "Low" confidence; adapted from FX | Needs crypto backtest |
| BO_05c | Gap Breakout (crypto) | Crypto #14 | "Low" confidence; 24/7 market | Needs validation |
| SE_02c | Funding Rate Momentum | Crypto #78 | "Low" confidence in source | Needs validation |
| SE_04c | Liquidation Level Front-Run | Crypto #89 | "Low" confidence; ethically grey | Flag as risky |
| SE_04e | Liquidation Cascade Trigger | Crypto #116 | "Low"; manipulation; ethically questionable | Flag: manipulative |
| OC_03c | Stake/Unstake Flow | Crypto #100 | "Low" confidence in source | Needs validation |
| OC_02b | Stablecoin Supply Ratio | Crypto #97 | "Low" confidence; leading indicator unclear | Needs validation |
| NR_01d | Dev Activity Play | Crypto #71 | "Low" confidence; correlation unclear | Needs validation |

## CATEGORY 2 — RETAIL-BIASED / OVERREPRESENTED — 10 items

| Logic ID | Strategy Name | Issue |
|----------|-------------|-------|
| BO_07a | Grid Trading | High risk in trending markets; blows accounts |
| SE_05c | Twitter Influencer Monitoring | Crypto #84 — "Low"; pump-and-dump risk |
| SE_05d | Reddit Sentiment Swings | Crypto #90 — "Low"; noisy signal |
| SE_05b | Fear & Greed Index | Crypto #85 — Lagging composite; retail-focused |
| SE_04d | Crowded Short Squeeze | Crypto #88 — "Low"; hard to time |
| BO_06b | Opening Range Fade | Works only in specific conditions |
| FD_06b | Weekend Gap Strategy | FX gaps are small; inconsistent |
| CA_02c | UIRP Strategy | Academic; rarely profitable |
| NR_01c | Narrative Sentiment Index | Crypto #74 — "Low"; easily manipulated |
| NR_05a | Governance Proposal Trading | Crypto #72 — "Low"; front-running risk |

## CATEGORY 3 — MISCLASSIFIED (Not True Strategies) — 12 items

| Original Name | Source | Listed As | Correct Classification |
|--------------|--------|-----------|----------------------|
| ADX Filter | All | Strategy | **Tool** (trend strength filter) |
| ATR | All | Strategy | **Tool** (volatility measure) |
| Fibonacci Retracement | All | Strategy | **Tool/Setup** (level identification) |
| Pivot Points | All | Strategy | **Tool** (level calculation) |
| Heikin-Ashi Candles | Multi | Strategy | **Tool** (chart type) |
| Currency Strength Meter | Forex #183 | Strategy | **Tool** (scanning) |
| Renko Charts | Forex #180 | Strategy | **Tool** (chart type) |
| OBV Confirmation | Crypto #31 | Core | **Tool** (confirmation indicator) |
| RVOL Spike / Vol-Price Confirm | Crypto #30 | Variation | **Setup** (entry condition) |
| Volume Profile | Forex #97 | Strategy | **Tool** (analysis framework) |
| Genetic Algorithm Optimization | Crypto #50 | Strategy | **Tool** (parameter tuner, not strategy) |
| Stress Testing Portfolio | Crypto #183 | Core | **Tool** (risk analysis, not trading strategy) |

## CATEGORY 4 — UNCLEAR / INCOMPLETE / ETHICALLY GREY — 18 items

| Logic ID | Strategy Name | Source | Issue |
|----------|-------------|--------|-------|
| BO_05b | NFP Pre-Positioning | Forex | Directional bet; not systematic |
| FD_02e | Balance of Payments | Forex | Too slow-moving; academic |
| FD_02d | Economic Surprise Index | Forex | Lagging; edge erodes |
| FD_03a | FX Fair Value (PPP) | Forex | Multi-year horizon |
| OF_06d | Order Anticipation | Forex | Legally grey; front-running |
| SE_04e | Liquidation Cascade Trigger | Crypto #116 | **Manipulation** — ethically questionable |
| MM_01d | Latency Market Making | Crypto #121 | Requires co-location; not accessible |
| AR_01c | Spatial Arbitrage | Crypto #118 | Capital controls; legal restrictions |
| HY_04a | Multi-Factor Quant Scoring | Crypto #160 | "Low" confidence; complex to implement |
| ML_02a | Autoencoder Anomaly | Crypto #49 | Experimental; no production evidence |
| ML_03a | RL Trading Agent | Crypto #47 | Experimental; no mainstream adoption |
| ML_03b | RL Rebalancer | Crypto #156 | Experimental |
| DE_02g | Put-Call Parity Arb | Crypto #110 | "Low"; requires options infrastructure |
| DE_02h | Gamma Tilt | Crypto #115 | "Low"; professional desk only |
| DF_05b | Liquidation Farming | Crypto #141 | "Low"; requires sophisticated bots |
| DF_04d | Synthetic Asset Arb | Crypto #142 | "Low"; protocol-specific risk |
| DF_05a | Insurance Pool | Crypto #143 | "Low"; claim risk from hacks |
| NR_02e | Gov Token Short on Emissions | Crypto #145 | "Low"; requires emissions modeling |

---

## SUMMARY

| Category | Count |
|----------|-------|
| Low Confidence (unverified edge) | 22 |
| Retail-Biased (overrepresented) | 10 |
| Misclassified (not true strategies) | 12 |
| Unclear / Incomplete / Ethically Grey | 18 |
| **Total flagged items** | **62** |
| **Total clean, verified strategies** | **~218** |
