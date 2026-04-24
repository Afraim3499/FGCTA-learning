# Gold Strategy Vault: Technical and Volatility Mechanics

**Module Overview:** This module covers the foundational Technical Analysis strategies specific to Gold (XAU/USD). Gold is highly technical but also highly volatile, requiring specific adaptations to standard indicators.

## Strategy Roster (Strategies 1-50)
*Every strategy below will be ingested into the `Strategy` database and taught in the Vault.*

### Trend Following & Moving Averages (1-15)
1. **Moving Average Crossover (20/50 EMA)**: Capturing the start of a new Gold trend.
2. **Golden Cross (50/200 SMA)**: Identifying massive, multi-year macro bull runs in Gold.
3. **Death Cross (50/200 SMA)**: Identifying macro bear markets.
4. **EMA Cross with RSI Filter**: Entering Gold trends only when momentum is supportive.
5. **MACD Momentum Trend**: Using the MACD histogram to time entries in established trends.
6. **Parabolic SAR Trailing**: Following Gold's notoriously strong parabolic moves.
7. **Ichimoku Cloud Breakout**: Using the Kumo to filter out Gold's noisy intraday chop.
8. **ADX/DMI Trend Strength**: Waiting for ADX > 25 to avoid getting chopped up in ranging Gold.
9. **SuperTrend Indicator**: ATR-based trailing stops adapted for Gold's daily range.
10. **Hull Moving Average (HMA) Turn**: Fast-reacting moving average for short-term Gold trends.
11. **Moving Average Ribbon**: Stacking MAs to visualize trend compression and expansion.
12. **Alligator Indicator**: Trading the "awakening" of a Gold trend.
13. **Heikin-Ashi Smoothed Trend**: Filtering out the massive intraday wicks common in Gold.
14. **Fractal Adaptive Moving Average (FRAMA)**: Adjusting to Gold's rapidly shifting market dimensions.
15. **Elder Triple Screen System**: Aligning Weekly, Daily, and 4H charts before entering a Gold swing trade.

### Breakout & Range Expansion (16-30)
16. **London Open Breakout**: Capturing the liquidity injection as European desks open.
17. **New York Open Breakout (Comex)**: Trading the immense volume spike when US physical/futures markets open.
18. **Bollinger Band Squeeze Breakout**: Trading the massive volatility expansion after a tight Gold consolidation.
19. **Donchian Channel Breakout**: Buying 20-day highs in Gold.
20. **Keltner Channel Breakout**: ATR-based channel trading.
21. **Opening Range Breakout (ORB)**: Trading the first hour of the NY Comex session.
22. **Asian Session Range Breakout**: Waiting for London/NY to break the tight Tokyo range.
23. **Triangle Breakout (Ascending/Descending)**: Trading classic compression patterns.
24. **Pennant / Flag Continuation**: Trading the flag pole consolidation break.
25. **Cup and Handle Breakout**: A classic, highly reliable pattern in Gold macro charts.
26. **NR7 / NR4 Breakout**: Trading the narrowest range bar of the week.
27. **Volatility Contraction Pattern (VCP)**: Trading contracting swings before a major markup.
28. **ATR Expansion Confirmation**: Buying breakouts only if accompanied by a massive surge in Average True Range.
29. **Pivot Point Breakout**: Trading past the R1 or S1 daily pivots.
30. **Point & Figure Breakout**: Filtering out time and focusing purely on $10 or $20 block breakouts.

### Mean Reversion & Oscillators (31-40)
31. **RSI Oversold/Overbought Fade**: Fading Gold at <30 and >70, *only* during ranging market environments.
32. **Stochastic Oscillator Cross**: Fading <20 and >80 K/D crosses.
33. **Bollinger Band Mean Reversion**: Selling the upper band, buying the lower band.
34. **VWAP Reversion**: Fading massive intraday spikes back to the institutional Volume Weighted Average Price.
35. **Williams %R Reversion**: Fading extreme overbought/oversold levels.
36. **Commodity Channel Index (CCI) Extremes**: Fading +/- 100 levels.
37. **Standard Deviation Channel Fade**: Trading the +/- 2 Sigma bounds.
38. **Mean Reversion to 50 EMA**: Trading rubber-band stretches after news spikes.
39. **Pivot Point Camarilla Strategy**: Fading L3 and H3 levels on intraday Gold charts.
40. **Opening Range Fade**: Fading the initial NY Open spike if it fails to maintain momentum.

### Price Action & Chart Patterns (41-50)
41. **Support/Resistance Bounce**: Trading major horizontal levels (e.g., $2000/oz psychological level).
42. **Trendline Break and Retest**: Trading the backside of a broken macro trendline.
43. **Head and Shoulders Reversal**: Trading major topping patterns.
44. **Double Top / Double Bottom**: Trading the 'M' and 'W' formations.
45. **Pin Bar (Hammer/Shooting Star) Reversal**: Fading long wick rejections at key daily levels.
46. **Engulfing Candle Pattern**: Trading massive bullish/bearish engulfing daily bars.
47. **Inside Bar (Harami) Breakout**: Trading daily consolidation breakouts.
48. **Fibonacci Retracement Confluence**: Buying the 61.8% or 50% pullbacks in a major Gold bull market.
49. **Elliott Wave (Wave 3 Impulse)**: Trading the longest impulsive wave in a Gold cycle.
50. **Wyckoff Accumulation Spring**: Trading the Phase C shakeout before a major Gold markup.

## Interactive Simulation Engine Requirements
*   **The Volatility Chart Engine**: The UI loads a highly volatile XAU/USD chart, complete with massive simulated wicks to test the student's nerve.
*   **The Task**: The student is tasked with executing a *New York Open Breakout* (Strategy #17). They must wait for the exact timestamp of the Comex open, identify the opening range, and place a buy stop order above the range.
*   **The Simulator**: Evaluates if the student correctly identified the NY Open and placed the stop-loss appropriately using ATR to survive Gold's inherent volatility.

## Pass/Fail Criteria
*   **Pass**: Successfully executes the breakout and utilizes an ATR-based stop-loss to survive the initial market chop before the trend establishes.
*   **Fail**: Placing a tight 10-pip stop loss on Gold during the NY open, which is instantly triggered by normal market noise.

## The Institutional Trap (Tier 4 Link)
Gold is notorious for liquidity sweeps. In Tier 4, we revisit Strategy #41 (Support/Resistance Bounce). We show how retail traders constantly try to buy major psychological levels like $2000. We teach the **Psychological Level Sweep**, demonstrating how institutional algorithms will intentionally drive the price to $1995 just to trigger all the retail stop-losses placed precisely below $2000, before reversing the market higher.
