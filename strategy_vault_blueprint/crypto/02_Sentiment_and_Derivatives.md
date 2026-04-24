# Crypto Strategy Vault: Sentiment and Derivatives

**Module Overview:** This module moves beyond chart patterns and dives into the derivatives data that uniquely drives crypto markets. We teach all 38 strategies in this category, ensuring students understand funding rates, liquidations, and options skews.

## Strategy Roster (Strategies 53-90)
*Every strategy below will be ingested into the `Strategy` database and taught in the Vault.*

### Order Flow & Market Profile (53-65)
53. **Order Book Imbalance (DOM)**: Trading skewed bid/ask ratios.
54. **Footprint Chart Absorption**: Identifying passive buyers absorbing active sellers.
55. **Footprint Chart Exhaustion**: Identifying a lack of aggressive buyers at highs.
56. **Volume Profile Point of Control (POC) Bounce**: Trading the highest volume node.
57. **Volume Profile Value Area High/Low Fade**: Fading the VAH/VAL back to POC.
58. **Low Volume Node (LVN) Breakout**: Trading fast moves through low liquidity areas.
59. **Cumulative Volume Delta (CVD) Divergence**: Price makes higher high, CVD makes lower high (hidden selling).
60. **Time and Sales Tape Reading**: Monitoring print speed and size.
61. **Spoofing Detection**: Identifying large fake orders that are pulled before execution.
62. **Iceberg Order Tracking**: Detecting large hidden orders reloading on the bid/ask.
63. **VWAP Bands Order Flow**: Combining VWAP deviations with CVD.
64. **Tick Chart Scalping**: Using 133-tick charts for micro-momentum.
65. **Volume Spread Analysis (VSA)**: Analyzing the spread of the candle against volume.

### Sentiment & Social (66-75)
66. **Crypto Fear & Greed Index Contrarian**: Buying extreme fear (<= 10), selling extreme greed (>= 90).
67. **Twitter/X Sentiment Spikes**: Fading extreme retail euphoria on social media.
68. **Reddit Mention Rate Divergence**: Shorting when r/CryptoCurrency mentions spike exponentially.
69. **Google Trends FOMO**: Selling when "Buy Bitcoin" searches reach 100.
70. **Long/Short Ratio Extremes**: Going long when the retail long/short ratio drops below 0.8.
71. **Altcoin Season Index Rotation**: Rotating from BTC to Alts when index crosses 75.
72. **Bitcoin Dominance Breakout**: Trading ALTs short when BTC.D breaks resistance.
73. **Funding Rate Heatmap Sentiment**: Gauging broad market euphoria via API aggregated funding.
74. **Stablecoin Supply Ratio (SSR) Sentiment**: Buying when stablecoin purchasing power is high.
75. **Exchange Net Inflow/Outflow Sentiment**: Broad market fear (inflows) vs greed (outflows).

### Derivatives & Liquidation Tracking (76-90)
76. **Perpetual Funding Rate Contrarian**: Shorting when funding is extremely positive (longs paying shorts).
77. **Perpetual Funding Rate Arbitrage**: Capturing the yield without directional risk (Delta Neutral).
78. **Open Interest (OI) Flush**: Entering a position immediately after a massive drop in OI.
79. **OI + Price Divergence**: Price rising but OI falling (short covering rally; bearish).
80. **Liquidation Cascade Fade**: Buying the wick immediately after a massive long liquidation cascade.
81. **Liquidation Heatmap Front-Running**: Placing limit orders just before major liquidation clusters.
82. **Short Squeeze Play**: Buying when funding is deeply negative and OI is rising rapidly.
83. **Futures Basis Spread Trade**: Shorting futures and buying spot when contango is extreme.
84. **Reverse Basis Trade**: Buying futures and shorting spot during backwardation.
85. **CME Gap Weekend Arbitrage**: Exploiting the Friday close vs Sunday open difference.
86. **Options Put/Call Ratio Extremes**: Contrarian buying when PCR is extremely high (fear).
87. **Implied Volatility (IV) Crush**: Selling options right before a known event (e.g., ETF decision).
88. **Volatility Skew Trade**: Buying cheap puts and selling expensive calls when skew is extreme.
89. **Gamma Squeeze Participation**: Buying when market makers are forced to hedge short calls.
90. **Max Pain Options Expiry Trade**: Anticipating price pinning to the strike with the highest open interest.

## Interactive Simulation Engine Requirements
*   **The Derivatives Dashboard**: Instead of a price chart, the UI loads a dashboard showing Funding Rates, Open Interest, CVD, and a Liquidation Heatmap.
*   **The Task**: The student is presented with 10 historical scenarios where Funding is highly positive and OI is rising. They must identify the crowded trade and execute the contrarian short.
*   **The Simulator**: The engine evaluates if the student correctly interpreted the derivatives data to execute the trade, independent of price action.

## Pass/Fail Criteria
*   **Pass**: Correctly identifies 10/10 derivatives setups (e.g., accurately spotting a Short Squeeze setup using OI and Funding).
*   **Fail**: Buying a breakout when funding is extremely positive and OI is at all-time highs (falling for the crowded trade).

## The Institutional Trap (Tier 4 Link)
In Tier 4, we teach how institutions use *Liquidation Cascade Triggers* (Strategy #116). We show how smart money sees the retail Long/Short ratio (Strategy #70) and intentionally nudges the price to trigger the massive liquidation clusters we tracked in Strategy #81, wiping out the retail derivatives traders.
