# Forex Strategy Vault: Technical and Breakout Mechanics

**Module Overview:** This module covers the foundational Technical Analysis strategies specific to Forex markets, including Trend Following, Breakouts, Mean Reversion, and Price Action.

## Strategy Roster (Strategies 1-48)
*Every strategy below will be ingested into the `Strategy` database and taught in the Vault.*

### Trend Following & Momentum (1-15)
1. **Moving Average Crossover (20/50 EMA)**: Captures momentum shifts in currency pairs.
2. **Golden Cross / Death Cross (50/200 SMA)**: Long-term macro trend identifier for major pairs.
3. **MACD Momentum Trend**: Trading the histogram and signal line cross.
4. **Parabolic SAR Trailing**: Following the dots for trend continuation in strong trends.
5. **Ichimoku Kinko Hyo (Cloud Breakout)**: Japanese trend trading using the Kumo twist and Kijun crosses.
6. **ADX/DMI Trend Strength**: Entering only when ADX > 25 to filter out ranging pairs.
7. **SuperTrend Indicator**: ATR-based trailing stop trend following.
8. **Heikin-Ashi Smoothed Trend**: Filtering out noise in volatile FX pairs using average price bars.
9. **Hull Moving Average (HMA) Turn**: Fast responsiveness trend shifts.
10. **Relative Strength Index (RSI) Trend Confluence**: Using RSI > 50 as a bullish trend filter.
11. **Moving Average Envelope Strategy**: Trading deviations from the moving average.
12. **Fractal Adaptive Moving Average (FRAMA)**: Adjusting moving averages based on fractal market dimension.
13. **Heikin-Ashi & RSI Confluence**: Combining smoothed candles with momentum pullbacks.
14. **Klinger Volume Oscillator Strategy**: Using volume flow to confirm trend direction.
15. **Elder Triple Screen System**: Multi-timeframe trend alignment (Weekly/Daily/4H).

### Breakout & Range Expansion (16-25)
16. **London Open Breakout**: Capturing the momentum expansion at the start of the European session.
17. **Asian Session Range Breakout**: Trading the consolidation break of the Tokyo session.
18. **Opening Range Breakout (ORB)**: Trading the first 1-hour high/low break.
19. **Bollinger Band Squeeze Breakout**: Trading volatility expansion after low volatility periods.
20. **Donchian Channel Breakout**: 20-day high/low breakout (Turtle Trader logic).
21. **Keltner Channel Breakout**: ATR-based channel trading.
22. **Pivot Point Breakout**: Trading breakouts of daily/weekly S1/R1 pivot levels.
23. **Triangle Breakout (Ascending/Descending)**: Trading the apex compression.
24. **Volatility Breakout System (Turtle-Type)**: ATR-scaled breakout sizing.
25. **Point & Figure Breakout**: Trading pure price movement breakouts independent of time.

### Mean Reversion & Oscillators (26-38)
26. **RSI Oversold/Overbought Fade**: Fading <30 and >70 extremes in ranging markets (e.g., EUR/CHF).
27. **Stochastic Oscillator Cross**: Fading <20 and >80 K/D crosses.
28. **Bollinger Band Mean Reversion**: Selling the upper band, buying the lower in a range.
29. **Williams %R Mean Reversion**: Fading -20 and -80 extremes.
30. **Commodity Channel Index (CCI) Extremes**: Fading +/- 100 levels.
31. **VWAP Reversion**: Fading intraday extremes back to the Volume Weighted Avg Price.
32. **Envelopes / Deviation Reversion**: Trading deviations from the mean.
33. **Mean Reversion to 50 EMA**: Trading rubber-band stretches.
34. **Standard Deviation Channel Fade**: Trading the +/- 2 Sigma bounds.
35. **Adaptive RSI (Connors RSI)**: Using a highly responsive 3-period RSI for short-term reversions.
36. **Pivot Point Camarilla Strategy**: Fading L3 and H3 levels.
37. **Gap Fill Strategy (Weekend)**: Fading the Sunday open gap assuming a reversion to Friday's close.
38. **Opening Range Fade**: Fading the initial breakout of the opening range if it fails.

### Price Action & Chart Patterns (39-48)
39. **Support/Resistance Bounce**: Trading horizontal historical levels.
40. **Trendline Break and Retest**: Trading the backside of a broken trend.
41. **Head and Shoulders Reversal**: Trading the neckline break.
42. **Double Top / Double Bottom**: Trading the 'M' and 'W' formations.
43. **Pin Bar (Hammer/Shooting Star) Reversal**: Trading long wick rejection at key levels.
44. **Engulfing Candle Pattern**: Trading bullish/bearish engulfing bars.
45. **Inside Bar (Harami) Breakout**: Trading consolidation breakouts.
46. **Fibonacci Retracement Confluence**: Trading the 61.8% / 50% pullbacks.
47. **Gann Angle Trading**: Using geometric angles for support/resistance.
48. **Renko Chart Trend Trading**: Using brick charts to trade pure price action noise-free.

## Interactive Simulation Engine Requirements
*   **The Charting Engine**: The UI must load a TradingView-style interactive chart tailored for Forex (pip calculation, lot sizes).
*   **The Task**: The student is tasked with manually executing trades using specific indicators, like the *London Open Breakout* (Strategy #16).
*   **The Simulator**: The engine automatically grades if the student waited for the correct session time (London Open) and placed the entry/stop-loss appropriately above the Asian session range.

## Pass/Fail Criteria
*   **Pass**: Successfully executes trades strictly adhering to the mechanical rules of the Technical Strategies, properly calculating risk in pips.
*   **Fail**: Trading a London Breakout strategy during the low-volatility Asian session, or miscalculating stop-loss placement.

## The Institutional Trap (Tier 4 Link)
In Tier 4, we teach how institutions hunt these exact retail strategies. 
*   *Example*: We teach the *Asian Session Range Breakout* (Strategy #17). In Tier 4, we teach the **Stop Run (Frankfurt Fakeout)**, showing how institutional algorithms will intentionally push the price out of the Asian range during the Frankfurt open to trigger retail breakout orders, before immediately reversing the price for the true London session move.
