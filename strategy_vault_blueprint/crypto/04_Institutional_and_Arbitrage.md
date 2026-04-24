# Crypto Strategy Vault: Institutional and Arbitrage

**Module Overview:** This module dives into the high-finance strategies used by quantitative hedge funds, market makers, and high-frequency trading (HFT) firms in the crypto space.

## Strategy Roster (Strategies 102-129)
*Every strategy below will be ingested into the `Strategy` database and taught in the Vault.*

### Options & Volatility Arbitrage (102-116)
102. **Spot-Futures Basis Trade (Cash and Carry)**: Shorting futures and buying spot to capture the premium risk-free.
103. **Reverse Basis Trade**: Buying futures and shorting spot when futures are in backwardation.
104. **Calendar Spread (Futures Roll)**: Trading the spread between two different expiration dates.
105. **Perpetual Funding Rate Arbitrage (Cross-Exchange)**: Long on Exchange A, Short on Exchange B to capture differing funding rates.
106. **Gamma Scalping**: Maintaining delta neutrality on an options portfolio by scalping the underlying asset.
107. **Volatility Skew Trade**: Exploiting mispriced implied volatility between puts and calls.
108. **Long Straddle Strategy**: Buying an ATM call and put expecting massive volatility (e.g., before an SEC decision).
109. **Short Straddle Strategy**: Selling an ATM call and put to collect premium in a ranging market.
110. **Put-Call Parity Arbitrage**: Exploiting synthetic pricing inefficiencies.
111. **Protective Put Hedging**: Buying downside insurance while holding spot.
112. **Covered Call Income**: Selling upside calls against a spot holding for yield.
113. **Butterfly Spread**: Capping risk while betting on low volatility around a strike.
114. **Iron Condor**: Selling OTM call/put spreads for premium in low vol environments.
115. **Gamma Tilt Strategy**: Adjusting gamma across strikes to profit from skew.
116. **Liquidation Cascade Trigger**: Intentionally nudging price to hit a known cluster of liquidations.

### High-Frequency & Statistical Arbitrage (117-129)
117. **Cross-Exchange Arbitrage**: Buying BTC on Kraken and selling instantly on Binance.
118. **Spatial Arbitrage**: Exploiting premium differences in different geographic regions (e.g., the Kimchi Premium).
119. **Triangular Arbitrage**: Trading BTC -> ETH -> USDT -> BTC on the same exchange to exploit cross-rate inefficiencies.
120. **Cross-Exchange Market Making**: Quoting on a low-liquidity exchange and hedging on a high-liquidity one.
121. **Latency Market Making**: Using co-location to outpace retail order flow.
122. **Statistical Arbitrage Basket**: Using PCA to long undervalued coins and short overvalued ones based on historical correlation.
123. **Cointegration Basket Trading**: Trading mean reversion on a basket of statistically linked assets.
124. **HFT Momentum Ignition**: Creating a fake price spike to trigger retail breakout algorithms, then fading it.
125. **Order Flow Imbalance Analysis**: Scalping based on instantaneous changes in bid/ask depth.
126. **Imbalance + Price Ladder Scalping**: Trading tick-by-tick using the DOM.
127. **VWAP Reversion Execution**: Fading extreme intraday deviations from the Volume Weighted Average Price.
128. **Liquidity Provision Incentives**: Quoting strictly to farm exchange maker rebates.
129. **Cross-Asset Statistical Factor Model**: Trading crypto based on beta to Nasdaq or other macro factors.

## Interactive Simulation Engine Requirements
*   **The Delta-Neutral Simulator**: The UI provides a multi-exchange order execution window and an options chain.
*   **The Task**: The student must execute a Cash and Carry arbitrage (Strategy #102) by buying Spot and shorting the Quarterly Future to lock in an 8% annualized yield without exposing themselves to price risk.
*   **The Simulator**: Evaluates the math: Did the student perfectly match the contract sizes to achieve delta neutrality?

## Pass/Fail Criteria
*   **Pass**: Flawlessly executes a delta-neutral basis trade and a cross-exchange arbitrage.
*   **Fail**: Takes directional risk during an arbitrage task (e.g., naked shorting).

## The Institutional Trap (Tier 4 Link)
This module *is* the institutional tier. However, the trap taught here is *HFT Momentum Ignition* (Strategy #124). We show the student how high-frequency firms intentionally spark fake breakouts just to trigger the stop losses of retail traders, and how students can identify this spoofing in the order book to avoid getting caught in the ignition.
