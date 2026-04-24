# Forex Strategy Vault: Macro Fundamentals and Carry Trade

**Module Overview:** This module transitions from technical analysis to the macroeconomic drivers of the foreign exchange market. It covers interest rates, central bank policies, economic data releases, and global capital flows.

## Strategy Roster (Strategies 49-80)
*Every strategy below will be ingested into the `Strategy` database and taught in the Vault.*

### Interest Rates & Carry Trade (49-56)
49. **Classic Carry Trade**: Buying a high-yield currency and funding it with a low-yield currency to earn the interest differential (e.g., Long AUD/JPY).
50. **Risk-Adjusted Carry Trade**: Filtering carry trades based on global risk appetite (only entering during VIX < 20).
51. **Interest Rate Divergence**: Buying a currency whose central bank is hiking rates against one that is cutting.
52. **Forward Rate Bias Trading**: Trading the forward premium/discount puzzle based on covered interest parity deviations.
53. **Yield Curve Spread Trading**: Trading FX based on the spread between two countries' 2-year or 10-year government bond yields.
54. **Overnight Carry Basket with Stop-Loss**: Holding a diversified basket of carry pairs overnight, but with hard stops to protect against sudden risk-off shocks.
55. **Interest Rate Swaption Hedge**: Using swaptions to hedge exposure to rate changes affecting currency valuations.
56. **FX Forward Spread Trading**: Trading spreads between FX forward points when they deviate from historical norms.

### Central Bank Policy & Macro Economics (57-70)
57. **Central Bank Forward Guidance Trade**: Positioning ahead of or immediately after a central bank's rate decision based on the tone of their statement.
58. **Purchasing Power Parity (PPP) Reversion**: Long-term strategy buying severely undervalued currencies relative to their PPP (Big Mac Index).
59. **Terms of Trade Strategy**: Trading commodity currencies (AUD, CAD, NZD) based on their export/import price ratios.
60. **Balance of Payments (Current Account) Trade**: Selling currencies of nations with expanding current account deficits.
61. **Quantitative Easing (QE) Devaluation**: Shorting a currency when its central bank announces asset purchasing programs.
62. **Inflation Differential Trade**: Selling currencies with chronically high inflation relative to their trading partners.
63. **Commodity Currency Correlation Trade**: Trading CAD based on WTI Oil prices, or AUD based on Iron Ore.
64. **Economic Surprise Index Strategy**: Trading currencies based on the Citi Economic Surprise Index (positive surprises = currency strength).
65. **Purchasing Managers’ Index (PMI) Trend**: Longing currencies with rising PMIs (economic expansion) against those with falling PMIs.
66. **Employment Data (NFP) Shock Trade**: Trading the immediate repricing after a massive beat/miss in Non-Farm Payrolls.
67. **NFP Pre-Positioning**: Taking a position *before* the NFP release based on consensus and leading indicators (ADP, ISM).
68. **Consumer Price Index (CPI) Inflation Trade**: Trading inflation prints that alter central bank hiking expectations.
69. **Retail Sales Momentum**: Trading consumer strength as a leading indicator of GDP growth.
70. **News Fade Strategy**: Fading the initial spike after a news release once momentum stalls, expecting a mean reversion.

### Risk Sentiment & Geopolitics (71-80)
71. **Risk-On / Risk-Off (RORO) Paradigm**: Longing high-beta pairs (AUD/JPY, NZD/JPY) during risk-on, shorting during risk-off.
72. **Safe Haven Currency Flows**: Buying CHF, JPY, or USD during geopolitical shocks or equity market panics.
73. **Geopolitical Hedging Using Safe-Havens**: Proactively buying safe-havens when geopolitical tensions escalate.
74. **VIX Correlation Strategy**: Shorting risk currencies when the VIX (volatility index) spikes above 30.
75. **High-Yield Bond Spread Indicator**: Using widening high-yield credit spreads as a leading indicator to buy safe-haven currencies.
76. **Political Risk Premium Trading**: Shorting the currency of a country experiencing political turmoil (e.g., Brexit, elections).
77. **Sovereign CDS Spread Trading**: Using Credit Default Swap spreads as a proxy for sovereign risk to trade the currency.
78. **Equity Market Correlation (S&P 500)**: Trading high-yielding FX pairs based on the intraday momentum of the S&P 500.
79. **News Volume Spike Scalping**: Scalping the immediate tick volume spike during a major news event.
80. **Straddle the News**: Buying both a call and a put option before major news to profit from massive volatility in either direction.

## Interactive Simulation Engine Requirements
*   **The Macro Dashboard**: The UI displays a Bloomberg-terminal style dashboard showing global interest rates, yield curves, commodity prices, and an economic calendar.
*   **The Task**: The student is tasked with executing an *Interest Rate Divergence* trade (Strategy #51) based on a simulated central bank press release.
*   **The Simulator**: Evaluates if the student correctly interpreted the macroeconomic data to select the strongest currency to buy and the weakest currency to sell.

## Pass/Fail Criteria
*   **Pass**: Successfully constructs a fundamentally sound currency pair (e.g., Long strong economy / Short weak economy) and profits from the macro divergence over a simulated multi-week timeframe.
*   **Fail**: Trying to execute a Carry Trade during a "Risk-Off" simulated environment, getting wiped out by a safe-haven repatriation flow.

## The Institutional Trap (Tier 4 Link)
In Tier 4, we teach the **News Release Trap**. Retail traders often use the *Employment Data Shock Trade* (Strategy #66) and try to jump into the market immediately when a positive NFP number is released. Institutions, however, know this. They use the initial surge of retail "buy" orders as liquidity to exit their existing long positions or build a massive short position, causing the price to spike up and then immediately crash down, trapping retail buyers.
