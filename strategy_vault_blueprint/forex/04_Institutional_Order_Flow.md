# Forex Strategy Vault: Institutional Order Flow

**Module Overview:** This module moves away from indicators entirely and focuses on the pure mechanics of liquidity, order matching, and bank-level execution algorithms.

## Strategy Roster (Strategies 111-140)
*Every strategy below will be ingested into the `Strategy` database and taught in the Vault.*

### Liquidity & Stop Hunting (111-125)
111. **Liquidity Sweep (Stop Run)**: Fading the market immediately after it breaks a major high/low to trigger stop losses, anticipating a reversal.
112. **Fair Value Gap (FVG) / Imbalance Fill**: Trading the return to an area of price action that was bypassed by aggressive institutional buying/selling.
113. **Order Block Trading**: Identifying the last bearish candle before a massive institutional rally, and buying the retracement to that block.
114. **Breaker Block Trading**: Trading the retest of a failed Order Block.
115. **Mitigation Block Trading**: Similar to breaker blocks, but occurs when price fails to make a higher high before breaking structure.
116. **Institutional Pricing (Whole Numbers/Psychological Levels)**: Trading reactions at major "00" or "50" bank levels.
117. **Asian Range Manipulation (Judas Swing)**: Trading the fakeout move during the London open that sweeps Asian session liquidity before reversing.
118. **Previous Daily High/Low Sweep**: Fading the break of yesterday's extreme.
119. **Weekly Profile Trading**: Anticipating the high or low of the week forming on Tuesday or Wednesday after an initial manipulation.
120. **Market Maker Buy/Sell Models**: Identifying the accumulation, manipulation, and distribution phases of a market maker's intraday cycle.
121. **Time of Day (Macro) Execution**: Only executing trades during specific 90-minute windows when institutional volume is highest (e.g., NY open, London close).
122. **Killzone Trading**: Focusing solely on the overlaps of major sessions (London/NY overlap) for maximum liquidity.
123. **Sponsorship (Smart Money Footprints)**: Identifying aggressive displacement in price as proof of institutional "sponsorship" of a level.
124. **Change of Character (ChoCh)**: Trading the first break of market structure on a lower timeframe after a higher timeframe liquidity sweep.
125. **Inducement Trading**: Identifying areas where retail traders are "induced" to enter early, waiting for them to be stopped out, and then entering.

### Tape Reading & Execution Algos (126-140)
126. **Depth of Market (DOM) Imbalances**: Scalping based on massive disparities between limit buy and sell orders.
127. **Iceberg Order Detection**: Identifying large institutional orders hidden in the DOM that continuously reload on the bid or ask.
128. **Spoofing Detection**: Identifying fake limit orders designed to push price in a certain direction, and trading the opposite way.
129. **Tick Chart Scalping**: Using 133-tick charts to visualize every transaction and identify micro-patterns in order flow.
130. **VWAP Deviation Scalping**: Fading price when it deviates more than 2 standard deviations from the institutional Volume Weighted Average Price.
131. **Anchored VWAP Trading**: Anchoring the VWAP to a major news event or high/low to find institutional average entry prices.
132. **Time-Weighted Average Price (TWAP) Mimicry**: Identifying when an institution is executing a TWAP algo and trading alongside them.
133. **Speed of Market Momentum Scalping**: Using very fast momentum indicators and the order book to scalp short bursts of price movement.
134. **Order Flow Absorption**: Identifying when passive limit orders are successfully absorbing aggressive market orders.
135. **Order Flow Exhaustion**: Identifying when aggressive buyers stop buying at new highs.
136. **Market Depth Gap Trading**: Trading rapid price movement through areas of the DOM with zero resting limit orders.
137. **Correlated Pair Order Flow (Cross-Pair Arbitrage)**: Using order flow on EUR/USD to predict an imminent move on GBP/USD.
138. **Large Trade Print Fading**: Fading the market immediately after a massive block trade prints on the tape, assuming it was a capitulation or climax.
139. **Dark Pool Print Tracking**: Using third-party data to track off-exchange block trades and finding support/resistance at those levels.
140. **Stop-Loss Cascade Anticipation**: Placing limit orders deep below the market to catch the wick of an institutional stop-loss cascade.

## Interactive Simulation Engine Requirements
*   **The Order Flow Simulator**: The UI displays a Depth of Market (DOM) ladder, a Time & Sales tape, and a Footprint chart instead of a standard candlestick chart.
*   **The Task**: The student is tasked with identifying an *Iceberg Order* (Strategy #127) on the bid. They must watch the tape to see massive sell orders hitting the bid, but the price refusing to drop because the iceberg is absorbing them. They must then execute a long trade.
*   **The Simulator**: Evaluates the student's ability to read the tape and execute the trade before the iceberg finishes absorbing and the price rallies.

## Pass/Fail Criteria
*   **Pass**: Successfully identifies liquidity absorption and executes the trade with a tight stop directly underneath the iceberg order.
*   **Fail**: Selling into the iceberg order because the "momentum" looks bearish on a standard chart.

## The Institutional Trap (Tier 4 Link)
This entire module represents the institutional level. However, the ultimate trap taught here is the **Spoofed Imbalance** (Strategy #128). We teach students how HFT firms will flash a massive fake buy wall on the DOM to trick retail DOM-traders into buying, only to pull the wall microseconds before execution and dump massive sell market orders on the retail buyers.
