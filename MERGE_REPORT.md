# DUPLICATE MERGE REPORT (v2 — COMPLETE)

> Crypto.md (206 strategies) now fully integrated. Previous PDF extraction captured only ~50.

---

## RAW DATASET CENSUS

| Dataset | Raw Entries | After Dedup | Notes |
|---------|-------------|-------------|-------|
| Forex.md | 201 | ~145 | Internal duplicates (Fib, Pivot, Pairs) |
| Crypto.md | 206 | ~165 | Unique families: DeFi, On-chain, Funding, Narrative |
| Gold CSV | 238 | ~79 | 3x timeframe inflation (Core/Intraday/Swing) |
| **Total** | **645** | **~280 unique** | |

---

## CROSS-DATASET MERGES (Strategies appearing in 2+ datasets)

### 1. Moving Average Systems (ALL 3 datasets → TF_01/02/03)
| Merged From | Source | Into |
|------------|--------|------|
| MA Crossover Trend #1 | Forex | TF_01a |
| SMA Crossover Trend #1 | Crypto | TF_01a |
| Golden Cross #5 | Crypto | TF_01a |
| EMA Crossover #2 | Crypto | TF_01b |
| WMA Trend #3 | Crypto | TF_01c |
| Dual MA Filter #4 | Crypto | TF_01d |
| Triple MA System #6 | Crypto | TF_02a |
| MA Crossover (20/50 EMA) | Gold | TF_01b |
| Golden Cross (50/200) | Gold | TF_01a |
| **10 entries → 5 unique** |

### 2. MACD Systems (ALL 3 → TF_04)
| Merged | Source | Into |
|--------|--------|------|
| MACD Trend-Following #4 | Forex | TF_04a |
| MACD Histogram Momentum #24 | Crypto | TF_04b |
| MACD Momentum | Gold | TF_04a |
| **3 entries → 2 unique** |

### 3. Ichimoku (ALL 3 → TF_06d)
| Merged | Source | Into |
|--------|--------|------|
| Ichimoku Cloud #7 | Forex | TF_06d |
| Ichimoku Cloud Trend #26 | Crypto | TF_06d |
| Ichimoku Cloud | Gold | TF_06d |
| **3 → 1** |

### 4. Parabolic SAR (ALL 3 → TF_06c)
| Merged | Source | Into |
|--------|--------|------|
| Parabolic SAR #13 | Forex | TF_06c |
| Parabolic SAR #7 | Crypto | TF_06c |
| Parabolic SAR | Gold | TF_06c |
| **3 → 1** |

### 5. Supertrend (ALL 3 → TF_06b)
| Merged | Source | Into |
|--------|--------|------|
| Supertrend #6 | Forex | TF_06b |
| Supertrend #10 | Crypto | TF_06b |
| Supertrend | Gold | TF_06b |
| **3 → 1** |

### 6. ADX/DMI (ALL 3 → TF_06a)
| Merged | Source | Into |
|--------|--------|------|
| ADX Filter #5 | Forex | TF_06a |
| ADX Trend Strength (implied in Crypto momentum section) | Crypto | TF_06a |
| DMI/ADX + ADX/DMI Filter | Gold (2 entries!) | TF_06a |
| **4 → 1** |

### 7. Donchian Channel (ALL 3 → TF_05a)
**3 → 1** (identical across all datasets)

### 8. Heikin-Ashi (Forex + Crypto → TF_07b)
**2 → 1** (identical)

### 9. Bollinger Band Mean Reversion (ALL 3 → MR_02a)
| Merged | Source | Into |
|--------|--------|------|
| BB Mean Reversion #28 | Forex | MR_02a |
| BB Mean Reversion #16 | Crypto | MR_02a |
| BB Mean Reversion | Gold | MR_02a |
| **3 → 1** |

### 10. RSI Mean Reversion (ALL 3 → MR_01a)
| Merged | Source | Into |
|--------|--------|------|
| RSI MR #29 | Forex | MR_01a |
| RSI OB/OS #18 | Crypto | MR_01a |
| RSI MR | Gold | MR_01a |
| **3 → 1** |

### 11. Stochastic Oscillator (Forex + Crypto → MR_01b)
| Merged | Source | Into |
|--------|--------|------|
| Stochastic #33 | Forex | MR_01b |
| Stochastic #27 | Crypto | MR_01b |
| **2 → 1** |

### 12. CCI Strategy (Forex + Crypto → MR_01e)
**2 → 1** (same Lambert indicator)

### 13. VWAP Reversion (ALL 3 → MR_04a)
| Merged | Source | Into |
|--------|--------|------|
| VWAP Reversion #36 | Forex | MR_04a |
| VWAP Trend Reversal #32 | Crypto | MR_04a |
| VWAP Reversion | Gold | MR_04a |
| **3 → 1** |

### 14. Z-Score MR (Forex + Crypto → MR_03a)
**2 → 1** (both use z > ±2 threshold)

### 15. Support/Resistance (ALL 3 → SR_01a + BO_01a)
| Merged | Source | Into |
|--------|--------|------|
| S/R Breakout #17 | Forex | BO_01a |
| Range Breakout at S/R #13 | Crypto | BO_01a |
| S/R Bounce #33 | Crypto | SR_01a |
| S/R Scalping #34 | Crypto | SR_01b (new) |
| S/R Bounce | Gold | SR_01a |

### 16. Head & Shoulders (ALL 3 → PA_03a)
| Merged | Source | Into |
|--------|--------|------|
| H&S #50 | Forex | PA_03a |
| H&S Top #40 + Inverse #41 | Crypto | PA_03a |
| H&S | Gold | PA_03a |
| **4 → 1** |

### 17. Engulfing Patterns (ALL 3 → PA_01c/d)
| Merged | Source | Into |
|--------|--------|------|
| Outside Bar #48 | Forex | PA_01c |
| Bullish Engulfing #35 | Crypto | PA_01c |
| Bearish Engulfing #36 | Crypto | PA_01d |
| Engulfing Pattern | Gold | PA_01c/d |
| **4 → 2** |

### 18. Inside Bar (ALL 3 → PA_02a) **3 → 1**
### 19. Cup & Handle (ALL 3 → PA_04e) **3 → 1**
### 20. Flag & Pennant (Forex + Crypto + Gold → PA_04a) **3 → 1**
### 21. Triangle Patterns (ALL 3 → PA_04b/c/d) **~8 → 3**
### 22. Pin Bar / Hammer (Forex + Crypto → PA_01a) **2 → 1**
### 23. Fibonacci Retracement (ALL 3 → PA_06a) **3 → 1**
### 24. Multi-Timeframe (Forex + Crypto → PA_08a) **2 → 1**

### 25. Pairs / Stat Arb (Forex + Crypto → AR_03a)
| Merged | Source | Into |
|--------|--------|------|
| Pairs Trading #31 | Forex | AR_03a |
| Pairwise MR / Stat Arb #20 | Crypto | AR_03a / MR_06a |
| Stat-Arb Pairs #115 | Forex | AR_03a (duplicate within Forex) |
| Stat Arb Basket #122 | Crypto | AR_03b |
| Cointegration Basket #123 | Crypto | AR_03c |
| **5 → 3** |

### 26. Cross-Exchange Arb (Forex + Crypto → AR_01)
| Merged | Source | Into |
|--------|--------|------|
| Triangular Arb | Forex | AR_01a |
| Cross-Exchange Arb #117 | Crypto | AR_01b |
| Spatial Arb #118 | Crypto | AR_01c |
| Triangular Arb #119 | Crypto | AR_01d |

### 27. Market Making (Forex + Crypto → MM_01)
| Merged | Source | Into |
|--------|--------|------|
| Market Making | Forex | MM_01a |
| HF Market Making #51 | Crypto | MM_01b |
| Cross-Exchange MM #120 | Crypto | MM_01c |
| Latency MM #121 | Crypto | MM_01d |

### 28. Options Strategies (Forex + Crypto + Gold → DE_02 + OP)
| Merged | Source | Into |
|--------|--------|------|
| Gamma Scalping #161 | Forex | DE_02a |
| Gamma Scalping #106 | Crypto | DE_02a |
| Straddle #160 | Forex | DE_02c |
| Long/Short Straddle #108/109 | Crypto | DE_02c/d |
| Iron Condor #114 | Crypto | DE_02f |
| Iron Condor | Gold | DE_02f |
| Protective Put #111 | Crypto | DE_03a |
| Covered Call #112 | Crypto | DE_03b |
| Collar #196 | Crypto | DE_03c |

### 29. Execution Algos (Forex + Crypto → OF_06)
| Merged | Source | Into |
|--------|--------|------|
| VWAP/TWAP Execution | Forex | OF_06a/b |
| TWAP #53 | Crypto | OF_06b |
| VWAP Execution #54 | Crypto | OF_06a |
| Iceberg #55 | Crypto | OF_06c |

### 30. Risk Management (ALL 3 → RM)
| Merged | Source | Into |
|--------|--------|------|
| Fixed Fractional | Forex | RM_01a |
| Fixed Fraction #165 | Crypto | RM_01a |
| Kelly Criterion | Forex | RM_01b |
| Kelly Criterion #166 | Crypto | RM_01b |
| ATR Trailing Stop | Forex/Crypto | RM_02c |
| Trailing Stop #169 | Crypto | RM_02b |
| Drawdown Control | Forex | RM_03a |
| Max Drawdown Alert #190 | Crypto | RM_03a |
| Risk Parity | Forex | RM_05a |
| Risk Parity #155 | Crypto | RM_05a |

---

## INTRA-DATASET MERGES

### Gold — Timeframe Inflation
238 raw entries → 79 unique (Core/Intraday/Swing collapsed)

### Forex — Internal Duplicates
- Fibonacci Retracement #167 ≡ Fibonacci usage in #65 → PA_06a
- Pivot Point Breakout #168 ≡ Dynamic S/R #166 → SR_01c
- Pairs Trading #31 ≡ Stat-Arb #115 → AR_03a

### Crypto — Internal Cross-References
- Funding Rate Arb #76 ≡ Perp Funding Arb #105 (noted as cross-ref in source)
- OBV Divergence #31 ≡ Volume-Price Confirmation #30 (kept separate — different logic)

---

## MERGE STATISTICS

| Metric | Count |
|--------|-------|
| Cross-dataset strategy groups merged | 30 |
| Total raw entries merged across datasets | ~120 |
| Gold timeframe inflation collapsed | 159 entries removed |
| Intra-dataset duplicates removed | ~6 |
| **Total raw entries** | **645** |
| **Total unique strategies** | **~280** |
