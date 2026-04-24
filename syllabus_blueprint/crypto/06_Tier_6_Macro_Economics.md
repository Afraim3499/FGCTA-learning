# Tier 6: The On-Chain & Derivatives Matrix (Crypto)

## Overview
Unlike Forex, which relies on delayed Central Bank data, Crypto offers real-time, transparent data. You can see exactly what whales are doing on the blockchain, and you can see exactly how much leverage retail is using on derivatives exchanges. This tier is the ultimate edge in Crypto.

---

## Section 21: Bitcoin Dominance (BTC.D) and Capital Rotation
*Goal: Mathematically predicting Altcoin Season.*

### Module 21.1: The Capital Flow Waterfall
- **Content**: Money in crypto flows in a strict sequence: Fiat -> Bitcoin -> Large Caps (ETH/SOL) -> Mid Caps -> Micro Caps. We track this flow using the BTC.D chart.
- **Rule**: When BTC price is rising and BTC.D is rising, altcoins bleed. When BTC price consolidates and BTC.D falls, Altcoin Season begins.

### Module 21.2: The ETH/BTC Ratio
- **Content**: The true indicator of risk-on sentiment in the crypto market. If ETH is bleeding against BTC, the market is not ready for risk.

---

## Section 22: Open Interest (OI) & Funding Rates
*Goal: Hunting retail liquidations using derivatives data.*

### Module 22.1: Open Interest Divergence
- **Content**: OI represents the total number of open futures contracts. 
  - If Price goes UP but OI goes DOWN: Shorts are being squeezed (Bear Trap).
  - If Price goes UP and OI goes UP: Healthy trend (New money entering).

### Module 22.2: Funding Rates (The Retail Tax)
- **Content**: Perpetual futures use funding rates to tether the contract price to the spot price. 
  - If Funding is extremely Positive: Retail is aggressively Long. (Prime condition for a sudden dump).
  - If Funding is extremely Negative: Retail is aggressively Short. (Prime condition for a short squeeze).

### Interactive Task: The Squeeze Predictor
- **Task**: `oi_funding_analyzer`
  - **Mechanic**: User is shown 5 charts overlaying Price, OI, and Funding Rates. They must correctly identify whether the market is primed for a Long Squeeze or a Short Squeeze.

---

## Section 23: On-Chain Data (The Whale Footprints)
*Goal: Reading the blockchain to front-run massive supply shocks.*

### Module 23.1: Exchange Netflows
- **Content**: Tracking large Bitcoin transfers. Massive inflows to Binance/Coinbase = Whales preparing to dump. Massive outflows = Accumulation and supply shock.

### Module 23.2: Miner Reserves & NVT Ratio
- **Content**: Miners are forced sellers. Understanding when miners are capitulating versus hoarding.

---

## Section 24: Stablecoin Minting Dynamics
*Goal: Tracking the fiat gateway.*

### Module 24.1: Tether (USDT) Dominance
- **Content**: USDT.D is the inverse of the crypto market. When USDT.D hits resistance, Crypto hits support.
- **Content**: Tracking massive USDT Treasury mints on the TRON and ETH networks as a leading indicator for institutional buying.

---

## Tier 6 Final Gate: The On-Chain Exam
- **Format**: User is presented with a dashboard showing conflicting signals: A bullish price chart, but massive Exchange Inflows, extremely positive funding rates, and rising USDT.D.
- **Requirement**: The user must correctly synthesize the data to realize the bullish chart is a trap, predict the impending long squeeze, and execute a short position in the simulator.
