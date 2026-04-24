# Forex Strategy Vault: Sentiment and COT

**Module Overview:** This module teaches students how to trade the players, not just the chart. By analyzing positioning data, retail sentiment, and options markets, students learn to identify when a trade is "crowded" and ripe for a reversal.

## Strategy Roster (Strategies 81-110)
*Every strategy below will be ingested into the `Strategy` database and taught in the Vault.*

### Commitment of Traders (COT) Data (81-90)
81. **COT Commercial Hedger Extremes**: Trading in the direction of commercial hedgers when their net position reaches historic extremes.
82. **COT Large Speculator Reversal**: Fading the large speculators (hedge funds) when their net long/short positioning reaches an extreme, anticipating a long squeeze or short squeeze.
83. **COT Open Interest Expansion vs Contraction**: Confirming trend strength by analyzing total open interest changes alongside commercial positioning.
84. **COT Net Position Flip**: Entering a new trend when commercial hedgers flip from net short to net long.
85. **Speculative Position Unwind Strategy**: Trading the aggressive unwind after a catalyst hits a market with extreme speculative positioning.
86. **COT Commercial vs Speculator Divergence**: Trading the divergence when speculators are buying but commercials are aggressively selling into the rally.
87. **Crowded Trade Fade**: Taking the contrarian side when consensus positioning and analyst recommendations become overwhelmingly one-sided.
88. **COT Non-Reportable (Retail) Fade**: Consistently trading opposite to the non-reportable (small speculator) category in the COT report.
89. **Index of Market Extremes**: Using a normalized index of COT data to objectively define "overbought" or "oversold" positioning.
90. **Seasonal COT Trends**: Combining historical seasonal tendencies with current COT positioning to time entries.

### Retail Sentiment & Options Market (91-110)
91. **Broker Client Sentiment Contrarian**: Shorting a currency pair when a retail broker's client sentiment index shows 80%+ of traders are long.
92. **Retail SSI (Speculative Sentiment Index) Fade**: Scaling into a short position as the retail SSI becomes increasingly long.
93. **Options Risk Reversal (Skew) Trade**: Using 25-delta risk reversals to gauge whether institutional options traders are paying more for puts or calls.
94. **Implied Volatility (IV) vs Historical Volatility (HV)**: Selling options premium when IV is significantly higher than HV.
95. **Currency Strength Meter Strategy**: Using an aggregated indicator to trade the strongest currency against the weakest.
96. **Time Decay Arbitrage in FX Options**: Selling strangles and hedging delta to collect theta (time decay) in a ranging market.
97. **Realized vs Implied Volatility Spread**: Trading the spread when options pricing diverges from actual market movement.
98. **Gamma Scalping**: Buying options and scalping the underlying FX pair to capture profits from gamma exposure while staying delta-neutral.
99. **Calendar Spread in FX Options**: Betting on changes in the implied volatility term structure by buying long-dated and selling short-dated options.
100. **Straddle the News Event**: Buying ATM calls and puts prior to NFP or CPI.
101. **Options Collar Hedging**: Protecting a long FX position by buying a put and selling a call.
102. **Options Barrier Level Trading (Knock-Outs/Knock-Ins)**: Fading or fading levels where large exotic option barriers are known to reside.
103. **Exotic Options Delta Hedging**: Trading the spot market to mimic the delta hedging of a large exotic options desk.
104. **Quant Sentiment Index Overlay**: Creating a composite index of COT, Retail, and Options data to weight trading decisions.
105. **VIX Spillover Effect**: Trading FX pairs based on sentiment spillovers from the equity options market (VIX).
106. **Retail Stop-Loss Cluster Hunting**: Using broker order book data (if available) to target areas where retail stops are clustered.
107. **Momentum Ignition Fade**: Fading sudden, unbacked price spikes designed to trigger retail sentiment buying.
108. **Social Media / News Sentiment NLP**: Using Natural Language Processing on Bloomberg headlines to gauge algorithmic sentiment.
109. **Retail Margin Call Cascade**: Anticipating and trading the forced liquidation of retail accounts during massive gap downs (e.g., CHF peg removal).
110. **The "Pain Trade"**: Identifying the market direction that will cause the maximum financial loss to the majority of market participants, and trading that direction.

## Interactive Simulation Engine Requirements
*   **The Sentiment Dashboard**: The UI provides a simulated weekly COT report, a real-time Retail Client Sentiment gauge (e.g., 85% Long), and an Options Volatility surface.
*   **The Task**: The student is presented with a scenario where the price chart looks incredibly bullish, but the COT report shows Commercials at record net short extremes and Retail Sentiment is 90% long. They must execute a contrarian short.
*   **The Simulator**: Evaluates the student's ability to ignore the technical chart and trust the positioning data to fade the crowded trade.

## Pass/Fail Criteria
*   **Pass**: Successfully executes 5 contrarian trades based on extreme sentiment readings, ignoring the short-term chart noise.
*   **Fail**: Buying the top of a rally simply because the chart is "breaking out," ignoring the fact that retail is 95% long and the trade is impossibly crowded.

## The Institutional Trap (Tier 4 Link)
This module introduces the concept of the **Crowded Trade** (Strategy #87). In Tier 4, we expand on this by teaching students how institutions *engineer* the crowded trade. Institutions will intentionally hold a price at a resistance level to entice retail traders to build a massive short position (increasing the Retail Sentiment Short %). Once the retail liquidity pool is deep enough, the institution executes a massive market buy, triggering all the retail stop-losses in a massive short squeeze.
