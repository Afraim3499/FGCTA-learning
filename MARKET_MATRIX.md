# MARKET APPLICABILITY MATRIX (v3)

> Each strategy mapped to Forex / Crypto / Gold with adaptation notes
> ✅ = Fully applicable | ⚠️ = Conditional | ❌ = Not applicable

---

| Logic ID | Strategy Name | Forex | Crypto | Gold | Adaptation Notes |
|----------|-------------|-------|--------|------|-----------------|
| **TF_01** | **MA Trend Systems** | ✅ | ✅ | ✅ | Crypto: shorter periods (9/21 vs 50/200); Gold: works on all TFs |
| **TF_02** | **MACD Trend** | ✅ | ✅ | ✅ | Universal. No adaptation needed |
| **TF_03** | **Channel Trend** | ✅ | ✅ | ✅ | Crypto: wider ATR multipliers for volatility |
| **TF_04** | **Ichimoku** | ✅ | ✅ | ✅ | All markets. Crypto may use 10/30/60 vs traditional 9/26/52 |
| **TF_05** | **Parabolic SAR** | ✅ | ✅ | ✅ | Universal |
| **TF_06** | **Price Structure** | ✅ | ✅ | ✅ | Universal |
| **TF_07** | **Algo Trend Systems** | ✅ | ✅ | ✅ | Universal |
| **BO_01** | **Level Breakout** | ✅ | ✅ | ✅ | Gold: round numbers ($1800, $2000) are stronger |
| **BO_02** | **Session Breakout** | ✅ | ✅ | ✅ | Crypto: 24/7 market; Asia session adapted to BTC volume cycles |
| **BO_03** | **Volatility Breakout** | ✅ | ✅ | ✅ | Crypto: wider bands needed |
| **BO_04** | **Confirmed Breakout** | ✅ | ✅ | ✅ | Funding/OI confirmation = crypto only |
| **BO_05** | **False BO Fade** | ✅ | ✅ | ✅ | Universal |
| **MR_01** | **Oscillator MR** | ✅ | ✅ | ✅ | Crypto: RSI 80/20 thresholds; FX/Gold: 70/30 |
| **MR_02** | **Band MR** | ✅ | ✅ | ✅ | Crypto: 3σ bands may be needed |
| **MR_03** | **Statistical MR** | ✅ | ✅ | ✅ | VWAP less relevant in FX (no centralized volume) |
| **MR_04** | **Pairs/Spread MR** | ✅ | ✅ | ✅ | Gold: Gold/Silver pair; Crypto: BTC/ETH pair |
| **MO_01** | **Cross-Sectional MO** | ✅ | ✅ | ⚠️ | Gold: limited universe for rotation |
| **MO_02** | **Momentum Indicators** | ✅ | ✅ | ✅ | Universal signals |
| **PA_01** | **Candlestick Patterns** | ✅ | ✅ | ✅ | Universal setups |
| **PA_02** | **Chart Reversal** | ✅ | ✅ | ✅ | Universal |
| **PA_03** | **Chart Continuation** | ✅ | ✅ | ✅ | Universal |
| **PA_04** | **Fibonacci** | ✅ | ✅ | ✅ | Universal setup |
| **PA_05** | **Wave/Cycle** | ✅ | ⚠️ | ✅ | Crypto: shorter cycles; less reliable wave counts |
| **PA_06** | **S/R Bounce** | ✅ | ✅ | ✅ | Universal |
| **CA_01** | **FX Carry Trade** | ✅ | ❌ | ❌ | Forex-only: requires interest rate differentials |
| **CA_02** | **Gold IR Sensitivity** | ❌ | ❌ | ✅ | Gold-only: real yields drive gold price |
| **FD_01** | **News/Event Trading** | ✅ | ✅ | ✅ | Crypto: regulatory events; FX: NFP/CPI; Gold: Fed |
| **FD_02** | **Macro Differential** | ✅ | ⚠️ | ✅ | Crypto: only macro liquidity correlation applies |
| **FD_03** | **Risk Regime** | ✅ | ✅ | ✅ | All markets respond to risk-on/off |
| **FD_04** | **Gold Macro Drivers** | ❌ | ❌ | ✅ | Gold-only: inflation hedge, USD inverse, CB buying |
| **FD_05** | **Seasonal** | ✅ | ⚠️ | ✅ | Crypto: less reliable seasonality |
| **NR_01** | **Narrative Rotation** | ❌ | ✅ | ❌ | Crypto-only: sector/narrative rotation |
| **NR_02** | **Tokenomics/Supply** | ❌ | ✅ | ❌ | Crypto-only: unlocks, burns, vesting |
| **NR_03** | **Halving Cycle** | ❌ | ✅ | ❌ | Crypto-only: BTC 4-year cycle |
| **NR_04** | **Macro Liquidity (Crypto)** | ❌ | ✅ | ❌ | Crypto-only: BTC vs global liquidity |
| **NR_05** | **Governance** | ❌ | ✅ | ❌ | Crypto-only: DAO/governance proposals |
| **OC_01** | **Whale Tracking** | ❌ | ✅ | ❌ | Crypto-only: on-chain transparency |
| **OC_02** | **Exchange Flow** | ❌ | ✅ | ❌ | Crypto-only |
| **OC_03** | **Network/Miner** | ❌ | ✅ | ❌ | Crypto-only |
| **SE_01** | **COT Positioning** | ✅ | ❌ | ✅ | FX/Gold futures; crypto lacks COT |
| **SE_02** | **Funding Rate** | ❌ | ✅ | ❌ | Crypto-only: perpetual futures funding |
| **SE_03** | **Open Interest** | ⚠️ | ✅ | ⚠️ | FX: limited data; Gold: futures OI available |
| **SE_04** | **Liquidation** | ❌ | ✅ | ❌ | Crypto-only: high leverage / transparent liquidation |
| **SE_05** | **Social Sentiment** | ⚠️ | ✅ | ⚠️ | Strongest in crypto; noisy in FX/Gold |
| **SE_06** | **Options Sentiment** | ✅ | ✅ | ✅ | All markets have options; crypto growing |
| **SE_07** | **Retail Sentiment** | ✅ | ✅ | ⚠️ | Gold: less retail positioning data |
| **SE_08** | **ETF Flow** | ❌ | ⚠️ | ✅ | Gold-primary: GLD flows; Crypto: BTC ETF emerging |
| **AR_01** | **Cross-Market Arb** | ✅ | ✅ | ⚠️ | FX: triangular; Crypto: cross-exchange; Gold: limited |
| **AR_02** | **Statistical Arb** | ✅ | ✅ | ✅ | Universal |
| **AR_03** | **Basis/Futures Arb** | ✅ | ✅ | ✅ | FX: covered interest; Crypto: perp basis; Gold: futures |
| **RV_01** | **Relative Value** | ⚠️ | ⚠️ | ✅ | Gold-primary: Gold/Silver, Gold/DXY |
| **DF_01** | **Liquidity Provision** | ❌ | ✅ | ❌ | Crypto-only: AMM/DEX |
| **DF_02** | **Yield Farming** | ❌ | ✅ | ❌ | Crypto-only: DeFi |
| **DF_03** | **DeFi Arb** | ❌ | ✅ | ❌ | Crypto-only: flash loans, DEX arb |
| **DE_01** | **Directional Options** | ✅ | ✅ | ✅ | Universal |
| **DE_02** | **Non-Directional Options** | ✅ | ✅ | ✅ | Universal |
| **DE_03** | **Greeks/Vol Trading** | ✅ | ✅ | ✅ | Universal |
| **DE_04** | **Hedging Structures** | ✅ | ✅ | ✅ | Universal |
| **OF_01** | **Order Flow** | ✅ | ✅ | ✅ | FX: limited DOM; Crypto: full DOM available |
| **OF_02** | **Supply/Demand Zones** | ✅ | ✅ | ✅ | Universal |
| **MM_01** | **Market Making** | ✅ | ✅ | ✅ | Crypto: cross-exchange MM is unique variant |
| **ML_01** | **Supervised ML** | ✅ | ✅ | ✅ | Universal |
| **ML_02** | **Reinforcement Learning** | ✅ | ✅ | ✅ | Universal |
| **ML_03** | **Regime Detection** | ✅ | ✅ | ✅ | Universal |
| **HY_01** | **Multi-Pillar** | ✅ | ✅ | ✅ | Crypto: includes on-chain/funding layers |
| **HY_02** | **Multi-Timeframe** | ✅ | ✅ | ✅ | Universal |
| **RM_01–06** | **Risk Management** | ✅ | ✅ | ✅ | Crypto: adds custody, depeg, DCA-specific models |

---

## COURSE FILTER SUMMARY

| Course | Total Strategies Available | Exclusive | Shared |
|--------|--------------------------|-----------|--------|
| **Forex** | ~145 | CA_01 (Carry) | Rest shared |
| **Crypto** | ~190 | NR, OC, SE_02/04, DF (48 exclusive) | Rest shared |
| **Gold** | ~120 | CA_02, FD_04, RV_01 | Rest shared |
| **Universal Core** | ~115 | — | Available to all 3 |
