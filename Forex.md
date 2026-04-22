Below is a structured catalog of forex trading strategies organized by category. Each entry follows the required format. Citations are provided for the core families and representative strategies rather than every single variant (because many variants share the same evidence). If the origin of a strategy is unclear, it is marked accordingly. Confidence reflects how widely the strategy is documented or practiced.

## **1\. Technical – Trend‑Following**

1. **Strategy Name:** Moving‑Average Crossover Trend  
   **Parent Family:** Trend following  
   **Type:** Indicator-based  
   **Core/Subtype/Variation:** Core  
   **Core Logic:** Use two moving averages; a buy signal when the fast MA crosses above the slow MA; sell when it crosses below. Trend trading relies on price moving in a sustained direction.  
   **How it Works:** Identify trending conditions using moving averages. Enter long when the crossover suggests bullish momentum; exit or reverse when the opposite crossover occurs.  
   **Typical Use Case:** Medium‑term traders who want to ride broad trends across major currency pairs.  
   **Known Users/Origin:** Common practice among retail and systematic traders; popularized in the 1970s “Turtle” trading rules.  
   **Evidence Type:** Broker educational article.  
   **Confidence Level:** High  
2. **Strategy Name:** Single Moving‑Average Filter  
   **Parent Family:** Trend following  
   **Type:** Indicator-based  
   **Core/Subtype/Variation:** Variation  
   **Core Logic:** Use one longer‑period moving average as a filter—only take long trades when price is above the MA and short trades when below.  
   **How it Works:** Combine the filter with other entry triggers such as breakouts or oscillators; exit when price closes on the opposite side of the MA.  
   **Typical Use Case:** Swing traders seeking to align trades with the dominant trend.  
   **Known Users/Origin:** Widely used in systematic CTA models; origin unclear.  
   **Evidence Type:** Broker educational article.  
   **Confidence Level:** High  
3. **Strategy Name:** Dual Exponential vs. Simple MA Crossover  
   **Parent Family:** Trend following  
   **Type:** Indicator-based  
   **Core/Subtype/Variation:** Variation  
   **Core Logic:** Compare exponential and simple moving averages of different lengths; crossovers indicate shifts in momentum.  
   **How it Works:** The faster EMA reacts quickly to price changes while the slower SMA smooths noise. Positions are opened on crossover and closed when reversed.  
   **Typical Use Case:** Algorithmic systems needing responsiveness; may reduce lag compared to simple MA.  
   **Known Users/Origin:** Commodity trading advisers; no specific origin.  
   **Evidence Type:** Common practice documented in trading literature.  
   **Confidence Level:** High  
4. **Strategy Name:** MACD Trend‑Following  
   **Parent Family:** Trend following  
   **Type:** Indicator-based  
   **Core/Subtype/Variation:** Subtype  
   **Core Logic:** The Moving Average Convergence Divergence (MACD) indicator uses the difference between two EMAs and a signal line; crossovers show momentum shifts.  
   **How it Works:** Buy when the MACD line crosses above the signal line and both are below zero; sell when crosses below and above zero. Divergence between MACD and price can warn of trend exhaustion.  
   **Typical Use Case:** Traders seeking to follow medium‑term trends and time entries/exits.  
   **Known Users/Origin:** Gerald Appel introduced MACD; widely taught.  
   **Evidence Type:** Broker educational material.  
   **Confidence Level:** High  
5. **Strategy Name:** ADX (Average Directional Index) Trend Strength Filter  
   **Parent Family:** Trend following  
   **Type:** Indicator-based  
   **Core/Subtype/Variation:** Variation  
   **Core Logic:** The ADX measures trend strength; values above 25 indicate strong trends, while below 20 suggest range conditions.  
   **How it Works:** Use ADX to determine when to apply a trending strategy (e.g., moving average cross) and avoid signals when ADX is low.  
   **Typical Use Case:** Trend traders seeking to avoid false breakouts in choppy markets.  
   **Known Users/Origin:** Developed by J. Welles Wilder.  
   **Evidence Type:** Technical analysis texts.  
   **Confidence Level:** High  
6. **Strategy Name:** Supertrend Indicator Strategy  
   **Parent Family:** Trend following  
   **Type:** Indicator-based  
   **Core/Subtype/Variation:** Subtype  
   **Core Logic:** The Supertrend uses ATR to set trailing stop lines above or below price; a change in line direction signals a trend shift.  
   **How it Works:** Buy when price closes above the Supertrend line; sell when below. ATR multiplier controls sensitivity.  
   **Typical Use Case:** Automated systems needing dynamic stop placement based on volatility.  
   **Known Users/Origin:** Modern retail traders; origin unclear.  
   **Evidence Type:** Common practice.  
   **Confidence Level:** Medium  
7. **Strategy Name:** Ichimoku Cloud Trend Strategy  
   **Parent Family:** Trend following  
   **Type:** Indicator-based  
   **Core/Subtype/Variation:** Subtype  
   **Core Logic:** Uses multiple moving averages (Tenkan, Kijun, Senkou Span A/B) to create a “cloud”; price above the cloud signals bullish trend; below signals bearish.  
   **How it Works:** Enter long when price breaks above the cloud and Tenkan crosses above Kijun; exit when opposite. The cloud also projects support and resistance.  
   **Typical Use Case:** Traders wanting all‑in‑one trend indicator with support/resistance.  
   **Known Users/Origin:** Developed by Japanese journalist Goichi Hosoda.  
   **Evidence Type:** Trading literature.  
   **Confidence Level:** High  
8. **Strategy Name:** Donchian Channel Breakout  
   **Parent Family:** Trend following / Breakout  
   **Type:** Indicator-based  
   **Core/Subtype/Variation:** Subtype  
   **Core Logic:** Donchian channels plot highest high and lowest low over a given period; breakouts signal start of a trend.  
   **How it Works:** Buy when price closes above the upper channel; sell when it closes below the lower channel; exit on trailing channel exit.  
   **Typical Use Case:** Medium‑term trend followers; part of Turtle trading system.  
   **Known Users/Origin:** Richard Donchian; Turtles used it.  
   **Evidence Type:** Historical CTA practice.  
   **Confidence Level:** High  
9. **Strategy Name:** Bollinger Band Trend Breakout  
   **Parent Family:** Trend following / Breakout  
   **Type:** Indicator-based  
   **Core/Subtype/Variation:** Variation  
   **Core Logic:** Bollinger Bands use moving average ± standard deviations; price closing outside the bands may signal trend continuation.  
   **How it Works:** Enter long when price closes above the upper band during strong momentum; use middle band as trailing stop; the width of bands adjusts to volatility.  
   **Typical Use Case:** Traders seeking early breakout confirmation with volatility context.  
   **Known Users/Origin:** John Bollinger developed the bands.  
   **Evidence Type:** Technical analysis texts and broker articles.  
   **Confidence Level:** Medium  
10. **Strategy Name:** Price Channel Breakout  
    **Parent Family:** Trend following / Breakout  
    **Type:** Price action  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Identify recent swing highs/lows to draw horizontal channels; trade breakouts with momentum.  
    **How it Works:** Buy when price closes above resistance; place stop below breakout bar; exit with trailing stop or opposite breakout.  
    **Typical Use Case:** Intraday and swing traders capturing new trends after consolidation.  
    **Known Users/Origin:** Common practice; origin unclear.  
    **Evidence Type:** Common practice reinforced by breakout trading articles.  
    **Confidence Level:** High  
11. **Strategy Name:** Higher‑High & Higher‑Low Trend Structure  
    **Parent Family:** Trend following / Price action  
    **Type:** Core  
    **Core/Subtype/Variation:** Subtype  
    **Core Logic:** Recognize series of higher swing highs and higher lows for an uptrend, or lower highs/lows for a downtrend.  
    **How it Works:** Enter trades in the direction of structure; use break of most recent higher low as exit or trend reversal confirmation.  
    **Typical Use Case:** Discretionary traders using naked charts.  
    **Known Users/Origin:** Classical Dow theory; widely taught.  
    **Evidence Type:** Price action education.  
    **Confidence Level:** High  
12. **Strategy Name:** Volatility‑Adjusted Trend (ATR Filter)  
    **Parent Family:** Trend following  
    **Type:** Indicator-based  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Use Average True Range (ATR) to filter trend signals; only trade when ATR is above a threshold to avoid low‑volatility whipsaws.  
    **How it Works:** Combine moving average crossover with ATR; open positions when ATR indicates sufficient volatility; adjust stop-loss distance based on ATR.  
    **Typical Use Case:** Trend followers wanting risk‑adjusted entries.  
    **Known Users/Origin:** Common quant practice; origin not clearly attributable.  
    **Evidence Type:** Broker articles on trend trading and risk management.  
    **Confidence Level:** Medium  
13. **Strategy Name:** Trend‑Following Using Parabolic SAR  
    **Parent Family:** Trend following  
    **Type:** Indicator-based  
    **Core/Subtype/Variation:** Subtype  
    **Core Logic:** Parabolic SAR dots trail price; when dots flip from above to below price it signals a long entry, and vice versa.  
    **How it Works:** Enter in direction indicated by the dots; exit when dots flip again; adjust acceleration factor to control sensitivity.  
    **Typical Use Case:** Trend traders seeking trailing stop indicator.  
    **Known Users/Origin:** Developed by Welles Wilder.  
    **Evidence Type:** Technical literature.  
    **Confidence Level:** Medium  
14. **Strategy Name:** Guppy Multiple Moving Average (GMMA) Trend  
    **Parent Family:** Trend following  
    **Type:** Indicator-based  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Uses sets of short‑term and long‑term moving averages; expansion and compression of these groups show trend strength and reversals.  
    **How it Works:** Enter long when short‑term group crosses above long‑term group and both groups expand; exit when they compress or cross back.  
    **Typical Use Case:** Traders needing visual confirmation of trend phases.  
    **Known Users/Origin:** Daryl Guppy; used in Australian markets.  
    **Evidence Type:** Trading books.  
    **Confidence Level:** Medium  
15. **Strategy Name:** Keltner Channel Trend‑Follow  
    **Parent Family:** Trend following  
    **Type:** Indicator-based  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Keltner channels are based on exponential moving average and ATR; price closing outside the channel signals trend continuation.  
    **How it Works:** Enter long when price closes above upper channel; exit when back inside middle line; trailing stops use channel lines.  
    **Typical Use Case:** Trend traders combining volatility and direction.  
    **Known Users/Origin:** Chester Keltner; widely used.  
    **Evidence Type:** Technical literature.  
    **Confidence Level:** Medium  
16. **Strategy Name:** Trend‑Following with Heikin‑Ashi Candles  
    **Parent Family:** Trend following  
    **Type:** Price action  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Heikin‑Ashi candlesticks smooth price action; consecutive same‑color candles suggest trend continuity.  
    **How it Works:** Enter after several same‑colored candles; exit when opposite color appears or doji forms; combine with moving average filter.  
    **Typical Use Case:** Trend followers wanting to filter noise.  
    **Known Users/Origin:** Japanese charting method; widely used.  
    **Evidence Type:** Common practice.  
    **Confidence Level:** Medium

---

## **2\. Technical – Breakout Strategies**

17. **Strategy Name:** Support‑Resistance Breakout  
    **Parent Family:** Breakout  
    **Type:** Price action  
    **Core/Subtype/Variation:** Core  
    **Core Logic:** Identify horizontal support/resistance lines; break above resistance suggests bullish breakout, break below support suggests bearish breakout.  
    **How it Works:** Place stop orders just beyond levels; confirm with volume or momentum indicator; use stop‑loss inside range to manage risk.  
    **Typical Use Case:** Day and swing traders capturing sharp moves after consolidation.  
    **Known Users/Origin:** Widely practiced; not clearly attributable.  
    **Evidence Type:** Broker articles.  
    **Confidence Level:** High  
18. **Strategy Name:** Pre‑London Session Breakout  
    **Parent Family:** Breakout  
    **Type:** Time‑of‑day  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** During Asian session, price often consolidates; traders place breakout trades around London open when volatility increases.  
    **How it Works:** Draw Asian session high/low; place buy stop above the high and sell stop below the low; close trade after a set profit or time window.  
    **Typical Use Case:** Intraday traders seeking volatility spikes at session open.  
    **Known Users/Origin:** Common among day traders; origin unclear.  
    **Evidence Type:** Common practice.  
    **Confidence Level:** Medium  
19. **Strategy Name:** New York Session Breakout  
    **Parent Family:** Breakout  
    **Type:** Time‑of‑day  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Similar to London breakout but uses the range during the Frankfurt/London overlap; trade breakouts around New York open.  
    **How it Works:** Draw pre‑New York high/low; place breakout orders with targets based on volatility; close before end of session.  
    **Typical Use Case:** Day traders focusing on U.S. session volatility.  
    **Known Users/Origin:** Common practice; not clearly attributable.  
    **Evidence Type:** Common practice.  
    **Confidence Level:** Medium  
20. **Strategy Name:** False Breakout (Fakey) Strategy  
    **Parent Family:** Breakout / Price action  
    **Type:** Variation  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Wait for breakout above a level that quickly reverses; trade in the opposite direction capturing trapped traders.  
    **How it Works:** Identify price spike beyond key level followed by rapid rejection (e.g., pin bar or engulfing pattern); enter in direction of rejection; place stop above the false breakout.  
    **Typical Use Case:** Price action traders looking to exploit liquidity run.  
    **Known Users/Origin:** Price action community; origin unclear.  
    **Evidence Type:** Price action literature.  
    **Confidence Level:** Medium  
21. **Strategy Name:** Breakout with Volume Confirmation  
    **Parent Family:** Breakout  
    **Type:** Indicator combination  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Confirm breakouts with increase in volume or tick activity to avoid false breakouts.  
    **How it Works:** Enter only when breakout candle has higher volume than preceding candles; use volume exhaustion as exit signal.  
    **Typical Use Case:** Traders with access to volume proxies (e.g., futures volume).  
    **Known Users/Origin:** Institutional traders; not clearly attributable.  
    **Evidence Type:** Institutional practice.  
    **Confidence Level:** Medium  
22. **Strategy Name:** Breakout with Momentum Confirmation (RSI/Momentum)  
    **Parent Family:** Breakout  
    **Type:** Indicator combination  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Use a momentum oscillator (RSI, Stochastic) to confirm breakout strength; avoid taking breakouts when the oscillator is overbought/oversold.  
    **How it Works:** Enter only when breakout coincides with oscillator trending up (for long) or down (for short); exit when momentum diverges.  
    **Typical Use Case:** Helps filter false breakouts in choppy markets.  
    **Known Users/Origin:** Retail traders; origin unclear.  
    **Evidence Type:** Trading education.  
    **Confidence Level:** Medium  
23. **Strategy Name:** Volatility Expansion Breakout  
    **Parent Family:** Breakout  
    **Type:** Volatility-based  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Breakouts accompanied by rising volatility (e.g., ATR or Bollinger band width expansion) signal stronger continuation.  
    **How it Works:** Monitor ATR or band width; enter breakout only when volatility rises above a threshold; manage risk with stop outside consolidation range.  
    **Typical Use Case:** Trend traders seeking sustainable breakouts.  
    **Known Users/Origin:** Quant traders; origin unclear.  
    **Evidence Type:** Quant literature.  
    **Confidence Level:** Medium  
24. **Strategy Name:** Grid Breakout (Grid Trading)  
    **Parent Family:** Breakout / Range  
    **Type:** Rule‑based  
    **Core/Subtype/Variation:** Subtype  
    **Core Logic:** Place a series of buy and sell stop orders at preset intervals above and below current price to capture breakouts in either direction.  
    **How it Works:** As price moves, triggered orders create a grid of positions; the strategy profits if price trends strongly without retracing; risk if price remains range‑bound.  
    **Typical Use Case:** Traders with hedged grid systems; often automated.  
    **Known Users/Origin:** Popular among certain retail traders; no clear origin.  
    **Evidence Type:** Broker article.  
    **Confidence Level:** Medium  
25. **Strategy Name:** News Release Breakout  
    **Parent Family:** Breakout / Fundamental  
    **Type:** Event‑driven  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Major economic announcements cause volatility; place orders to catch breakouts immediately after news.  
    **How it Works:** Identify consensus expectations; place buy and sell stops above/below pre‑release range; close once volatility subsides.  
    **Typical Use Case:** High‑frequency news traders using automated systems.  
    **Known Users/Origin:** Institutional desks; origin unclear.  
    **Evidence Type:** Common practice.  
    **Confidence Level:** Medium  
26. **Strategy Name:** Time‑Stop Breakout (Opening Range Breakout)  
    **Parent Family:** Breakout  
    **Type:** Time‑based  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Trade the breakout of the opening range defined by the first n minutes of the trading session.  
    **How it Works:** Record high and low of first 30 minutes; place breakout orders; exit at predetermined time or profit target.  
    **Typical Use Case:** Day traders capturing early session momentum.  
    **Known Users/Origin:** Larry Williams popularized opening range breakout.  
    **Evidence Type:** Trading literature.  
    **Confidence Level:** Medium

---

## **3\. Technical – Range & Mean Reversion**

27. **Strategy Name:** Oscillator Range Trading  
    **Parent Family:** Range trading  
    **Type:** Indicator-based  
    **Core/Subtype/Variation:** Core  
    **Core Logic:** In range‑bound markets, oscillators like RSI or Stochastic identify overbought and oversold conditions.  
    **How it Works:** Sell when oscillator enters overbought zone near resistance; buy when oversold near support; exit near opposite boundary.  
    **Typical Use Case:** Markets lacking clear trend; caution against breakout.  
    **Known Users/Origin:** Widely used by retail traders.  
    **Evidence Type:** Broker article.  
    **Confidence Level:** High  
28. **Strategy Name:** Bollinger Band Mean Reversion  
    **Parent Family:** Mean reversion  
    **Type:** Indicator-based  
    **Core/Subtype/Variation:** Subtype  
    **Core Logic:** Price tends to revert to the moving average; when price touches upper Bollinger band, look for short opportunities; when lower band, long.  
    **How it Works:** Wait for price to close outside band and then inside; place stop beyond extreme; exit near middle band.  
    **Typical Use Case:** Markets with sideways movement or gentle trends.  
    **Known Users/Origin:** Popular among mean‑reversion traders.  
    **Evidence Type:** Broker article.  
    **Confidence Level:** High  
29. **Strategy Name:** RSI Mean Reversion  
    **Parent Family:** Mean reversion  
    **Type:** Indicator-based  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Relative Strength Index identifies overbought (\>70) or oversold (\<30) conditions; trade the reversal back toward the midpoint.  
    **How it Works:** Enter long when RSI crosses above 30; short when crosses below 70; exit when RSI returns to neutral.  
    **Typical Use Case:** Range‑bound markets or mild trends.  
    **Known Users/Origin:** Welles Wilder developed RSI; widely used.  
    **Evidence Type:** Technical literature.  
    **Confidence Level:** High  
30. **Strategy Name:** Moving Average Mean Reversion  
    **Parent Family:** Mean reversion  
    **Type:** Indicator-based  
    **Core/Subtype/Variation:** Core  
    **Core Logic:** Price oscillates around its moving average; buy when price is significantly below MA and rising; sell when above and falling.  
    **How it Works:** Set threshold (e.g., 1‑2 ATR) for distance from MA; enter reversal trade; exit when price reverts to MA or overshoots.  
    **Typical Use Case:** Range or choppy markets.  
    **Known Users/Origin:** Widely used in reversion funds; origin unclear.  
    **Evidence Type:** Broker article.  
    **Confidence Level:** High  
31. **Strategy Name:** Pairs Trading (Cointegration)  
    **Parent Family:** Mean reversion / Statistical arbitrage  
    **Type:** Quantitative  
    **Core/Subtype/Variation:** Subtype  
    **Core Logic:** Identify two historically correlated currency pairs; go long undervalued and short overvalued asset; expect spread to revert.  
    **How it Works:** Compute cointegration or correlation; open long/short positions when spread deviates beyond threshold; close when spread reverts to mean.  
    **Typical Use Case:** Hedge funds and quant desks exploiting mispricing between correlated pairs (e.g., EUR/USD vs. GBP/USD).  
    **Known Users/Origin:** Institutional stat‑arb desks; widely documented.  
    **Evidence Type:** Broker article.  
    **Confidence Level:** High  
32. **Strategy Name:** Bollinger Band Squeeze Reversion  
    **Parent Family:** Mean reversion  
    **Type:** Volatility-based  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** When Bollinger bands contract (squeeze), volatility is low; look for mean reversion trades inside the narrow range until breakout occurs.  
    **How it Works:** Sell near upper band, buy near lower band during squeeze; exit when bands expand or breakout invalidates range.  
    **Typical Use Case:** Consolidation phases before news or major moves.  
    **Known Users/Origin:** Traders using volatility compression signals; origin unclear.  
    **Evidence Type:** Trading literature.  
    **Confidence Level:** Medium  
33. **Strategy Name:** Stochastic Oscillator Range Reversion  
    **Parent Family:** Mean reversion / Range trading  
    **Type:** Indicator-based  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Use Stochastic %K and %D lines; overbought (\>80) or oversold (\<20) triggers reversal trades.  
    **How it Works:** Enter long when stochastic lines cross upwards from oversold; short when they cross downwards from overbought; exit at neutral zone.  
    **Typical Use Case:** Range‑bound markets.  
    **Known Users/Origin:** George Lane developed Stochastic; widely used.  
    **Evidence Type:** Technical literature.  
    **Confidence Level:** High  
34. **Strategy Name:** Mean Reversion with Z‑Score  
    **Parent Family:** Mean reversion  
    **Type:** Statistical  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Compute z‑score of price relative to its historical mean and standard deviation; extreme z‑scores indicate overextension.  
    **How it Works:** When z‑score \> \+2, short; when \< −2, long; exit when z‑score returns to 0\.  
    **Typical Use Case:** Quant traders controlling risk through standardized measure.  
    **Known Users/Origin:** Quant funds; origin in statistical process control.  
    **Evidence Type:** Academic practice.  
    **Confidence Level:** Medium  
35. **Strategy Name:** Regression Channel Reversion  
    **Parent Family:** Mean reversion  
    **Type:** Statistical  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Fit a linear regression to price data; draw channel lines at standard deviation levels; price tends to revert toward regression line.  
    **How it Works:** Enter trades when price touches channel boundaries; exit at regression line.  
    **Typical Use Case:** Markets lacking strong trend.  
    **Known Users/Origin:** Technical traders; origin unclear.  
    **Evidence Type:** Technical literature.  
    **Confidence Level:** Medium  
36. **Strategy Name:** VWAP Reversion (Volume Weighted Average Price)  
    **Parent Family:** Mean reversion / Institutional  
    **Type:** Order flow  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Volume Weighted Average Price represents average transaction price; price often reverts to intraday VWAP.  
    **How it Works:** Sell when price extends significantly above VWAP; buy when below; exit when price returns to VWAP or at session end.  
    **Typical Use Case:** Institutions executing large orders; ensure execution close to VWAP.  
    **Known Users/Origin:** Institutional trading desks; widely documented.  
    **Evidence Type:** Institutional practice.  
    **Confidence Level:** High  
37. **Strategy Name:** Intraday Scalping Mean Reversion  
    **Parent Family:** Mean reversion  
    **Type:** Time‑based  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Use very short‑term overextension from micro‑trend; scalp small mean‑reversion moves.  
    **How it Works:** Combine fast oscillator (e.g., 5‑period RSI) with range bands; take quick profits; exit quickly to avoid momentum runaway.  
    **Typical Use Case:** High‑frequency scalp traders.  
    **Known Users/Origin:** Proprietary scalpers; origin unclear.  
    **Evidence Type:** Common practice.  
    **Confidence Level:** Medium  
38. **Strategy Name:** Volatility Mean Reversion (ATR Regression)  
    **Parent Family:** Mean reversion  
    **Type:** Volatility-based  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Volatility itself mean reverts; when ATR surges, expect reversion to average; trade volatility through options or straddles.  
    **How it Works:** Identify extremes in ATR relative to its moving average; sell volatility when high, buy when low; manage risk through stops or options.  
    **Typical Use Case:** Traders employing volatility strategies (straddles/strangles).  
    **Known Users/Origin:** Options traders; origin in volatility research.  
    **Evidence Type:** Academic/Institutional.  
    **Confidence Level:** Medium

---

## **4\. Technical – Momentum Strategies**

39. **Strategy Name:** Momentum Factor (Time‑Series)  
    **Parent Family:** Momentum  
    **Type:** Quantitative  
    **Core/Subtype/Variation:** Core  
    **Core Logic:** Assets that performed well in recent past continue to perform; buy “winners” and sell “losers”.  
    **How it Works:** Rank currency pairs by past returns over a lookback period; go long top decile and short bottom decile; rebalance periodically.  
    **Typical Use Case:** Systematic funds capturing trend persistence.  
    **Known Users/Origin:** Academic finance (Jegadeesh & Titman research).  
    **Evidence Type:** Academic & broker article.  
    **Confidence Level:** High  
40. **Strategy Name:** Rate of Change (ROC) Momentum  
    **Parent Family:** Momentum  
    **Type:** Indicator-based  
    **Core/Subtype/Variation:** Subtype  
    **Core Logic:** ROC measures percentage change between current price and price n periods ago; positive ROC indicates momentum.  
    **How it Works:** Buy when ROC crosses above zero or certain threshold; sell when crosses below; combine with moving average filter.  
    **Typical Use Case:** Short‑term traders capturing bursts of momentum.  
    **Known Users/Origin:** Technical traders; origin unclear.  
    **Evidence Type:** Trading texts.  
    **Confidence Level:** Medium  
41. **Strategy Name:** Commodity Channel Index (CCI) Momentum  
    **Parent Family:** Momentum  
    **Type:** Indicator-based  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** CCI measures price deviation from its moving average; values above \+100 indicate strong up‑momentum; below −100 down‑momentum.  
    **How it Works:** Enter long when CCI crosses above \+100; sell when crosses below −100; exit when returns to zero.  
    **Typical Use Case:** Swing trading of currencies.  
    **Known Users/Origin:** Developed by Donald Lambert.  
    **Evidence Type:** Technical literature.  
    **Confidence Level:** Medium  
42. **Strategy Name:** Momentum Breakout with Volume  
    **Parent Family:** Momentum / Breakout  
    **Type:** Indicator combination  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Combine momentum oscillator (e.g., RSI) with volume surge; trade in direction of breakout with strong volume.  
    **How it Works:** Enter when price breaks key level and momentum indicator is trending up; confirm with high tick volume; exit on opposite signal.  
    **Typical Use Case:** Traders looking for early entry into strong moves.  
    **Known Users/Origin:** Retail and institutional; not clearly attributable.  
    **Evidence Type:** Trading practice.  
    **Confidence Level:** Medium  
43. **Strategy Name:** Momentum Divergence  
    **Parent Family:** Momentum  
    **Type:** Indicator-based  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Divergence between price and momentum indicator suggests trend exhaustion; use to anticipate reversal.  
    **How it Works:** If price makes higher high but RSI makes lower high (bearish divergence), look for short entry; bullish divergence for long.  
    **Typical Use Case:** Trend traders looking to exit or reverse positions.  
    **Known Users/Origin:** Technical analysis; widely taught.  
    **Evidence Type:** Broker education.  
    **Confidence Level:** High  
44. **Strategy Name:** Momentum with Moving Average Confirmation  
    **Parent Family:** Momentum  
    **Type:** Indicator combination  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Use momentum oscillator to generate signals only when price is above/below a long moving average.  
    **How it Works:** Buy when RSI crosses above 50 and price is above MA; sell when RSI crosses below 50 and price is below MA; this aligns momentum with trend.  
    **Typical Use Case:** Avoid whipsaws; emphasises momentum in trending markets.  
    **Known Users/Origin:** Quant funds; origin unclear.  
    **Evidence Type:** Common practice.  
    **Confidence Level:** Medium  
45. **Strategy Name:** Absolute Momentum  
    **Parent Family:** Momentum  
    **Type:** Quantitative  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Compare current price to its value n periods ago; if return is positive, hold long; if negative, hold cash or short.  
    **How it Works:** For each currency, compute past returns; take long position if return above 0; rotate monthly or quarterly.  
    **Typical Use Case:** Long/short currency baskets.  
    **Known Users/Origin:** Trend‑following CTAs.  
    **Evidence Type:** Academic research.  
    **Confidence Level:** Medium

---

## **5\. Technical – Price Action & Pattern Strategies**

46. **Strategy Name:** Pin Bar Reversal  
    **Parent Family:** Price action  
    **Type:** Candlestick pattern  
    **Core/Subtype/Variation:** Subtype  
    **Core Logic:** A pin bar has a long wick with small body; shows rejection of a price level.  
    **How it Works:** At support, a bullish pin bar with long lower tail and close near highs indicates possible reversal; enter long; place stop below tail; opposite for bearish pin.  
    **Typical Use Case:** Reversals at key support/resistance levels.  
    **Known Users/Origin:** Popularized by price‑action educators; origin unclear.  
    **Evidence Type:** Price action article.  
    **Confidence Level:** High  
47. **Strategy Name:** Inside Bar Breakout  
    **Parent Family:** Price action  
    **Type:** Candlestick pattern  
    **Core/Subtype/Variation:** Subtype  
    **Core Logic:** An inside bar has a lower high and higher low compared to previous candle; indicates consolidation.  
    **How it Works:** Place buy stop above high and sell stop below low of mother bar; trade breakouts in direction of trend; set stop opposite side of inside bar.  
    **Typical Use Case:** Breakout following consolidation.  
    **Known Users/Origin:** Classic price action; widely used.  
    **Evidence Type:** Price action article.  
    **Confidence Level:** High  
48. **Strategy Name:** Outside Bar (Engulfing) Reversal  
    **Parent Family:** Price action  
    **Type:** Candlestick pattern  
    **Core/Subtype/Variation:** Subtype  
    **Core Logic:** An outside bar engulfs previous candle’s high and low; indicates strong shift in momentum.  
    **How it Works:** Bullish engulfing: small down candle followed by larger up candle; buy after close; bearish opposite.  
    **Typical Use Case:** Reversals after exhaustion or at support/resistance.  
    **Known Users/Origin:** Widely known; described in candlestick textbooks.  
    **Evidence Type:** Price action article.  
    **Confidence Level:** High  
49. **Strategy Name:** Doji & Indecision Candles  
    **Parent Family:** Price action  
    **Type:** Candlestick pattern  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Doji has small body with equal open/close; shows indecision; may signal reversal when combined with context.  
    **How it Works:** At support, a long‑legged doji followed by a bullish candle can signal reversal; at resistance, bearish. Use confirmation from next candle.  
    **Typical Use Case:** Confirmation around key levels.  
    **Known Users/Origin:** Japanese candlestick analysis; widely taught.  
    **Evidence Type:** Price action literature.  
    **Confidence Level:** High  
50. **Strategy Name:** Head & Shoulders Pattern  
    **Parent Family:** Price action / Chart pattern  
    **Type:** Reversal pattern  
    **Core/Subtype/Variation:** Subtype  
    **Core Logic:** Formation with left shoulder, head, and right shoulder; neckline connects swing lows. Break of neckline signals reversal.  
    **How it Works:** After an uptrend, price forms three peaks; enter short on break of neckline; target size equal to pattern height. Opposite for inverted pattern.  
    **Typical Use Case:** Swing traders looking for trend reversal.  
    **Known Users/Origin:** Classical charting; widely recognised.  
    **Evidence Type:** Day trading article.  
    **Confidence Level:** High  
51. **Strategy Name:** Double Top / Bottom  
    **Parent Family:** Price action / Chart pattern  
    **Type:** Reversal pattern  
    **Core/Subtype/Variation:** Subtype  
    **Core Logic:** Two peaks (or troughs) at similar level separated by a trough (or peak); break of neckline confirms reversal.  
    **How it Works:** Short after price breaks below neckline; target distance equal to height between peaks and neckline; opposite for double bottom.  
    **Typical Use Case:** Trend reversal at major resistance or support.  
    **Known Users/Origin:** Classical chart pattern; widely used.  
    **Evidence Type:** Day trading article.  
    **Confidence Level:** High  
52. **Strategy Name:** Triple Top / Bottom  
    **Parent Family:** Price action  
    **Type:** Reversal pattern  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Three peaks near same level; break of neckline signals reversal; considered stronger than double pattern.  
    **How it Works:** Similar to double top but wait for third peak; trade after neckline breaks; measure target as vertical distance.  
    **Typical Use Case:** Longer‑term reversal; used with weekly charts.  
    **Known Users/Origin:** Technical analysis; origin unclear.  
    **Evidence Type:** Chart pattern textbooks.  
    **Confidence Level:** Medium  
53. **Strategy Name:** Cup and Handle Pattern  
    **Parent Family:** Price action / Chart pattern  
    **Type:** Continuation pattern  
    **Core/Subtype/Variation:** Subtype  
    **Core Logic:** Forms rounded cup followed by short consolidation (handle); breakout signals continuation of uptrend.  
    **How it Works:** After cup formation, wait for breakout above handle; measure target by depth of cup; place stop below handle.  
    **Typical Use Case:** Daily and weekly charts in trending markets.  
    **Known Users/Origin:** William O’Neil popularised it; used by stock and FX traders.  
    **Evidence Type:** Day trading article.  
    **Confidence Level:** High  
54. **Strategy Name:** Ascending Triangle Pattern  
    **Parent Family:** Price action / Chart pattern  
    **Type:** Continuation pattern  
    **Core/Subtype/Variation:** Subtype  
    **Core Logic:** Horizontal resistance with rising trendline support; breakout above resistance signals continuation.  
    **How it Works:** Enter long on breakout; measure target as height of triangle; stop below last swing low.  
    **Typical Use Case:** Uptrend consolidations.  
    **Known Users/Origin:** Chartists; widely documented.  
    **Evidence Type:** Day trading article.  
    **Confidence Level:** High  
55. **Strategy Name:** Descending Triangle Pattern  
    **Parent Family:** Price action / Chart pattern  
    **Type:** Continuation pattern  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Horizontal support with descending trendline; break below support signals continuation of downtrend.  
    **How it Works:** Sell on breakout below support; measure target as height of triangle; stop above last swing high.  
    **Typical Use Case:** Downtrend consolidations.  
    **Known Users/Origin:** Chartists; widely used.  
    **Evidence Type:** Day trading article.  
    **Confidence Level:** High  
56. **Strategy Name:** Symmetrical Triangle Pattern  
    **Parent Family:** Price action / Chart pattern  
    **Type:** Continuation pattern  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Converging trendlines; breakout can occur in either direction; volume contract then expand.  
    **How it Works:** Place stop orders on both sides of pattern; trade in breakout direction; stop on opposite side.  
    **Typical Use Case:** Consolidation before major news or trend continuation.  
    **Known Users/Origin:** Chart analysis; widely documented.  
    **Evidence Type:** Day trading article.  
    **Confidence Level:** High  
57. **Strategy Name:** Flag & Pennant Patterns  
    **Parent Family:** Price action / Chart pattern  
    **Type:** Continuation pattern  
    **Core/Subtype/Variation:** Subtype  
    **Core Logic:** After sharp move, price consolidates in a small channel (flag) or triangle (pennant); breakout continues prior trend.  
    **How it Works:** Enter in direction of prior move once pattern breaks; target length equal to flagpole; stops below pattern.  
    **Typical Use Case:** Capturing continuation after strong momentum events.  
    **Known Users/Origin:** Technical analysis; widely known.  
    **Evidence Type:** Day trading article.  
    **Confidence Level:** High  
58. **Strategy Name:** Wedge Patterns (Falling & Rising)  
    **Parent Family:** Price action / Chart pattern  
    **Type:** Reversal pattern  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Wedges are converging trendlines sloping either downward (falling) or upward (rising); breakout often reverses previous trend.  
    **How it Works:** For falling wedge, wait for breakout above upper trendline; rising wedge, break below lower trendline; measure target by wedge height.  
    **Typical Use Case:** End of trends or intermediate corrections.  
    **Known Users/Origin:** Chartists; widely used.  
    **Evidence Type:** Day trading article.  
    **Confidence Level:** Medium  
59. **Strategy Name:** Rectangle (Range) Pattern  
    **Parent Family:** Price action / Chart pattern  
    **Type:** Continuation or reversal  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Price oscillates between horizontal support and resistance; breakout determines next move.  
    **How it Works:** Trade inside range using mean reversion or wait for breakout; measure target equal to height.  
    **Typical Use Case:** When markets consolidate for extended periods.  
    **Known Users/Origin:** Chart analysis; widely used.  
    **Evidence Type:** Technical literature.  
    **Confidence Level:** Medium  
60. **Strategy Name:** Trendline Bounce  
    **Parent Family:** Price action  
    **Type:** Support/resistance  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Draw diagonal trendlines connecting swing lows or highs; price often bounces at these lines.  
    **How it Works:** Enter long when price touches an uptrend line and forms bullish candlestick; short at downtrend line; stop beyond trendline.  
    **Typical Use Case:** Swing trading trending channels.  
    **Known Users/Origin:** Dow theory; widely used.  
    **Evidence Type:** Price action teachings.  
    **Confidence Level:** Medium  
61. **Strategy Name:** Break of Structure (BOS)  
    **Parent Family:** Price action  
    **Type:** Trend reversal  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** When price fails to create new higher high or lower low and breaks previous swing, market structure shifts.  
    **How it Works:** For uptrend, a break below previous higher low indicates possible reversal; trade subsequent retest; opposite for downtrend.  
    **Typical Use Case:** Early trend reversal detection.  
    **Known Users/Origin:** Smart money concepts; origin unclear.  
    **Evidence Type:** Price action education.  
    **Confidence Level:** Medium  
62. **Strategy Name:** Order Block Trading  
    **Parent Family:** Price action  
    **Type:** Supply/demand  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Institutions leave footprints via large buy/sell orders (order blocks); price often reacts to these zones.  
    **How it Works:** Identify consolidation candles before strong move (bullish/bearish order block); mark zone; trade retests with confirmation.  
    **Typical Use Case:** Institutional order flow and smart money traders.  
    **Known Users/Origin:** Institutional trading; origin not clearly attributable.  
    **Evidence Type:** Order flow articles.  
    **Confidence Level:** Medium  
63. **Strategy Name:** Liquidity Sweep (Stop‑Hunt) Setup  
    **Parent Family:** Price action  
    **Type:** Liquidity event  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Big players often push price beyond obvious stop levels to collect liquidity before reversing.  
    **How it Works:** Wait for price to spike beyond previous high/low and quickly return (liquidity sweep); enter opposite direction; stop beyond sweep.  
    **Typical Use Case:** Intraday trading around key swing points.  
    **Known Users/Origin:** Smart money traders; origin unclear.  
    **Evidence Type:** Order flow education.  
    **Confidence Level:** Medium  
64. **Strategy Name:** Quasimodo (Over and Under) Pattern  
    **Parent Family:** Price action  
    **Type:** Reversal pattern  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** After breaking previous high/low, price forms a deeper retracement creating misaligned highs/lows; signals reversal.  
    **How it Works:** For bullish Quasimodo: price forms lower low then higher high then deeper higher low; buy at second low; opposite for bearish.  
    **Typical Use Case:** Advanced price action traders.  
    **Known Users/Origin:** Smart money community; origin unclear.  
    **Evidence Type:** Community practice.  
    **Confidence Level:** Low  
65. **Strategy Name:** Harmonic Patterns (Gartley, Butterfly, Bat)  
    **Parent Family:** Price action  
    **Type:** Reversal pattern  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Use Fibonacci ratios to identify geometric price patterns (e.g., Gartley 222); completion zone signals reversal.  
    **How it Works:** Identify leg structures (X‑A, A‑B, B‑C, C‑D) matching ratios; enter at D point; stop beyond; target at retracement levels.  
    **Typical Use Case:** Experienced traders using Fibonacci.  
    **Known Users/Origin:** H. M. Gartley, Scott Carney; widely taught.  
    **Evidence Type:** Technical books.  
    **Confidence Level:** Medium  
66. **Strategy Name:** Elliott Wave Impulse/Corrective Patterns  
    **Parent Family:** Price action / Wave theory  
    **Type:** Trend analysis  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Markets move in impulsive (5‑wave) and corrective (3‑wave) structures; trading with wave count improves timing.  
    **How it Works:** Identify wave counts; enter in wave 3 of impulse (strongest) or trade wave 5; exit before correction.  
    **Typical Use Case:** Long‑term trend analysis.  
    **Known Users/Origin:** Ralph Elliott; widely studied.  
    **Evidence Type:** Elliott wave theory.  
    **Confidence Level:** Medium  
67. **Strategy Name:** Candlestick Cluster Confluence  
    **Parent Family:** Price action  
    **Type:** Confluence  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Look for clusters of reversal candlesticks (pin bar \+ engulfing) around key levels; the more signals, the stronger the setup.  
    **How it Works:** Combine multiple candlestick patterns; confirm with support/resistance; enter with stop beyond cluster; exit at next level.  
    **Typical Use Case:** Discretionary trading requiring patience.  
    **Known Users/Origin:** Price action practitioners; origin unclear.  
    **Evidence Type:** Common practice.  
    **Confidence Level:** Low  
68. **Strategy Name:** Multi‑Timeframe Candlestick Confirmation  
    **Parent Family:** Price action / Hybrid  
    **Type:** Multi‑timeframe  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Use higher timeframe (e.g., daily) candlestick signal to establish bias; lower timeframe (e.g., 4‑hour) for entry.  
    **How it Works:** Wait for daily pin bar; drop to 4‑hour to find inside bar break; coordinate stops and targets across timeframes.  
    **Typical Use Case:** Swing trading aligning with macro trend.  
    **Known Users/Origin:** Price action experts; origin unclear.  
    **Evidence Type:** Trading education.  
    **Confidence Level:** Medium

---

## **6\. Fundamental Strategies**

69. **Strategy Name:** Carry Trade  
    **Parent Family:** Carry / Interest rate  
    **Type:** Fundamental  
    **Core/Subtype/Variation:** Core  
    **Core Logic:** Borrow in low‑yielding currency and invest in high‑yielding currency; earn the interest differential.  
    **How it Works:** Open long position in pair where base currency has higher interest rate; hold overnight to collect positive swaps; monitor macro factors and interest rate divergences.  
    **Typical Use Case:** Long‑term investors when interest rate differentials are significant.  
    **Known Users/Origin:** Institutional investors; notable yen carry trades.  
    **Evidence Type:** Broker & educational articles.  
    **Confidence Level:** High  
70. **Strategy Name:** Uncovered Interest Rate Parity (UIRP) Strategy  
    **Parent Family:** Interest rate  
    **Type:** Fundamental  
    **Core/Subtype/Variation:** Subtype  
    **Core Logic:** Bet that currencies with higher interest rates will depreciate less than the differential; essentially opposite of carry trade.  
    **How it Works:** Short high‑yield currency expecting depreciation equal to interest differential; used to test parity relationship.  
    **Typical Use Case:** Academic studies; not widely traded due to risk.  
    **Known Users/Origin:** Academics; origin in international finance.  
    **Evidence Type:** Academic literature.  
    **Confidence Level:** Low  
71. **Strategy Name:** Interest Rate Differential Momentum  
    **Parent Family:** Interest rate  
    **Type:** Fundamental  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Go long currencies where central banks are tightening; short where they are easing.  
    **How it Works:** Monitor central bank statements; anticipate rate hikes/cuts; position accordingly before the decision.  
    **Typical Use Case:** Macro hedge funds anticipating policy divergence.  
    **Known Users/Origin:** Hedge funds; widely practised.  
    **Evidence Type:** Macro commentary.  
    **Confidence Level:** Medium  
72. **Strategy Name:** News Trading on Economic Releases  
    **Parent Family:** News  
    **Type:** Event‑driven  
    **Core/Subtype/Variation:** Core  
    **Core Logic:** Trade high‑impact economic announcements (NFP, CPI, GDP); price often moves sharply when actual data deviates from expectations.  
    **How it Works:** Analyse forecasts vs. actual; go long if data is better than expected; short if worse; exit quickly as volatility fades.  
    **Typical Use Case:** Short‑term traders using fast execution.  
    **Known Users/Origin:** Institutional & retail news traders.  
    **Evidence Type:** Broker articles.  
    **Confidence Level:** Medium  
73. **Strategy Name:** Central Bank Divergence Trading  
    **Parent Family:** Interest rate / Macro  
    **Type:** Fundamental  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Trade currency pairs where central banks adopt opposite monetary policies (e.g., tightening vs easing); expect currency appreciation/depreciation accordingly.  
    **How it Works:** Monitor FOMC, ECB, BOJ policy statements; go long currency with hawkish central bank; short dovish currency; manage risk around policy meetings.  
    **Typical Use Case:** Medium‑term macro trading.  
    **Known Users/Origin:** Hedge funds and macro analysts.  
    **Evidence Type:** Macro commentary.  
    **Confidence Level:** High  
74. **Strategy Name:** Commodity Currency Correlation Trade  
    **Parent Family:** Macro  
    **Type:** Fundamental  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Certain currencies (AUD, CAD, NZD) correlate with commodity prices (iron ore, oil, dairy); trade based on commodity movements.  
    **How it Works:** If oil price rises, buy CAD vs USD; if iron ore price rises, buy AUD; monitor commodity fundamentals; exit when correlation breaks.  
    **Typical Use Case:** Hedge funds & commodity traders.  
    **Known Users/Origin:** Macro traders; widely documented.  
    **Evidence Type:** Economic studies.  
    **Confidence Level:** Medium  
75. **Strategy Name:** Terms of Trade Strategy  
    **Parent Family:** Macro  
    **Type:** Fundamental  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Countries with improving terms of trade (export prices vs import prices) typically see currency appreciation.  
    **How it Works:** Analyse economic data; go long currencies of countries benefiting from rising export prices; hedge with correlated commodity.  
    **Typical Use Case:** Longer‑term macro investors.  
    **Known Users/Origin:** Economic researchers; origin in macro finance.  
    **Evidence Type:** Academic literature.  
    **Confidence Level:** Low  
76. **Strategy Name:** Inflation Differential Trading  
    **Parent Family:** Macro  
    **Type:** Fundamental  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Countries with lower inflation rates may see stronger currencies; high inflation often weakens currency.  
    **How it Works:** Monitor CPI data; short currencies of countries with surging inflation; long those with low inflation and credible central banks.  
    **Typical Use Case:** Macro funds adjusting to inflation trends.  
    **Known Users/Origin:** Economists; widely recognized.  
    **Evidence Type:** Macro research.  
    **Confidence Level:** Medium  
77. **Strategy Name:** GDP Growth Differential Strategy  
    **Parent Family:** Macro  
    **Type:** Fundamental  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Countries with higher GDP growth often see currency appreciation due to capital inflows.  
    **How it Works:** Compare growth forecasts; long high‑growth currency; short low‑growth currency; adjust positions as data updates.  
    **Typical Use Case:** Long‑term investors seeking growth exposure.  
    **Known Users/Origin:** Macro investors; not clearly attributable.  
    **Evidence Type:** Economic literature.  
    **Confidence Level:** Medium  
78. **Strategy Name:** Balance of Payments Strategy  
    **Parent Family:** Macro  
    **Type:** Fundamental  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Persistent current account deficits may pressure currency; surpluses support currency.  
    **How it Works:** Monitor current account reports; short currencies of deficit countries; long surplus countries; adjust for capital flows.  
    **Typical Use Case:** Long‑horizon investors.  
    **Known Users/Origin:** Economists; widely acknowledged.  
    **Evidence Type:** Macro studies.  
    **Confidence Level:** Low  
79. **Strategy Name:** FX Fair Value (PPP) Strategy  
    **Parent Family:** Macro  
    **Type:** Fundamental  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Purchasing Power Parity (PPP) suggests exchange rates converge to long‑run equilibrium based on price levels.  
    **How it Works:** Calculate PPP fair value; go long undervalued currency; short overvalued; hold until misalignment corrects.  
    **Typical Use Case:** Long‑term investors and central banks.  
    **Known Users/Origin:** Economists; widely used.  
    **Evidence Type:** Academic literature.  
    **Confidence Level:** Low  
80. **Strategy Name:** Political Event Trading  
    **Parent Family:** News  
    **Type:** Event‑driven  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Elections, referendums, and geopolitical events cause large FX moves; trade expectations vs outcomes.  
    **How it Works:** Analyse polls and risk premiums; position before event; hedge with options; exit once volatility normalizes.  
    **Typical Use Case:** Hedge funds specializing in political risk.  
    **Known Users/Origin:** Event‑driven funds; widely practiced.  
    **Evidence Type:** Financial media.  
    **Confidence Level:** Medium  
81. **Strategy Name:** Seasonal Patterns (Calendar Effects)  
    **Parent Family:** Macro / Statistical  
    **Type:** Quantitative  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Some currencies exhibit seasonal strength/weakness (e.g., AUD tends to strengthen in certain months).  
    **How it Works:** Backtest seasonal patterns; trade accordingly; size positions based on historical reliability.  
    **Typical Use Case:** Long‑term systematic strategies.  
    **Known Users/Origin:** Quant funds; research from behavioural finance.  
    **Evidence Type:** Academic studies.  
    **Confidence Level:** Low  
82. **Strategy Name:** Terms of Trade Spread Convergence  
    **Parent Family:** Macro  
    **Type:** Relative value  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Trade two currencies with diverging trade balances; expect spread to converge when imbalance reverses.  
    **How it Works:** Long currency with improving trade surplus; short with declining; hold until spreads narrow.  
    **Typical Use Case:** Macro relative value funds.  
    **Known Users/Origin:** Macro traders; origin unclear.  
    **Evidence Type:** Macro research.  
    **Confidence Level:** Low  
83. **Strategy Name:** Safe‑Haven Demand Strategy  
    **Parent Family:** Macro  
    **Type:** Risk sentiment  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** In risk‑off environments, safe‑haven currencies like USD, JPY, CHF appreciate; risk currencies sell off.  
    **How it Works:** Monitor risk sentiment indicators (VIX, equity markets); buy safe‑havens during market stress; exit when conditions stabilize.  
    **Typical Use Case:** Crisis management; hedging portfolios.  
    **Known Users/Origin:** Global macro funds.  
    **Evidence Type:** Macro commentary.  
    **Confidence Level:** High  
84. **Strategy Name:** Risk‑On Carry Basket  
    **Parent Family:** Carry / Macro  
    **Type:** Basket strategy  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** In risk‑on conditions, high‑yield emerging market currencies appreciate; hold a basket of carry pairs; hedge with safe‑havens.  
    **How it Works:** When volatility indices are low, buy AUD/JPY, NZD/JPY, ZAR/JPY; use stop if risk sentiment shifts.  
    **Typical Use Case:** Currency portfolio managers.  
    **Known Users/Origin:** Macro funds; not clearly attributable.  
    **Evidence Type:** Market commentary.  
    **Confidence Level:** Medium

---

## **7\. Sentiment Strategies**

85. **Strategy Name:** Commitment of Traders (COT) Net Position Extremes  
    **Parent Family:** COT  
    **Type:** Sentiment  
    **Core/Subtype/Variation:** Core  
    **Core Logic:** The COT report shows net positions of commercial hedgers and speculators; extreme net long/short positions often signal potential reversals.  
    **How it Works:** Identify extreme speculator positioning; trade opposite direction expecting mean reversion; confirm with price action.  
    **Typical Use Case:** Swing traders and hedge funds monitoring weekly data.  
    **Known Users/Origin:** Institutional commodity traders; widely known.  
    **Evidence Type:** Educational article.  
    **Confidence Level:** High  
86. **Strategy Name:** Commercial Hedger vs Speculator Divergence  
    **Parent Family:** COT  
    **Type:** Sentiment  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Commercial hedgers often buy into weakness and sell into strength; speculators trend follow. Trade following hedgers when divergence is extreme.  
    **How it Works:** When speculators are record long and hedgers record short, anticipate reversal; open position aligning with hedgers.  
    **Typical Use Case:** Longer‑term traders using weekly data.  
    **Known Users/Origin:** Commodity hedging community.  
    **Evidence Type:** COT article.  
    **Confidence Level:** Medium  
87. **Strategy Name:** Retail Sentiment Contrarian Strategy  
    **Parent Family:** Retail positioning  
    **Type:** Sentiment  
    **Core/Subtype/Variation:** Core  
    **Core Logic:** Brokers provide client positioning ratios; majority of retail traders are often wrong; go opposite of crowd.  
    **How it Works:** If 80% of clients are long a pair, consider short; confirm with technical/fundamental analysis; exit when sentiment normalizes.  
    **Typical Use Case:** Swing traders using broker data.  
    **Known Users/Origin:** Contrarian traders; widely practiced.  
    **Evidence Type:** Sentiment article.  
    **Confidence Level:** Medium  
88. **Strategy Name:** Retail Sentiment Trend‑Following  
    **Parent Family:** Retail positioning  
    **Type:** Sentiment  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Occasionally, retail crowd gets it right during strong trends; align with majority when trend is persistent.  
    **How it Works:** If majority are long during a strong uptrend and trend continues with fundamental support, join; monitor for sentiment extremes.  
    **Typical Use Case:** Rare scenario; trending markets.  
    **Known Users/Origin:** Contrarian adaptation; not clearly attributable.  
    **Evidence Type:** Trading blogs.  
    **Confidence Level:** Low  
89. **Strategy Name:** Options Sentiment (Risk Reversals)  
    **Parent Family:** Options sentiment  
    **Type:** Sentiment  
    **Core/Subtype/Variation:** Core  
    **Core Logic:** Currency options markets show skew between call and put implied volatilities (risk reversals); bullish skew indicates demand for call options.  
    **How it Works:** Monitor risk reversal values; if skew strongly positive, market expects appreciation; trade accordingly; exit when skew normalizes.  
    **Typical Use Case:** Institutional traders with access to options data.  
    **Known Users/Origin:** Bank desks; widely used.  
    **Evidence Type:** Institutional research.  
    **Confidence Level:** Medium  
90. **Strategy Name:** Forex Fear & Greed Index  
    **Parent Family:** Sentiment  
    **Type:** Composite indicator  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Aggregate indicators of volatility, demand for safe‑havens, and positioning into a single index; extremes indicate sentiment extremes.  
    **How it Works:** When index shows extreme fear (risk‑off), safe‑havens may rally; extreme greed indicates risk‑on; trade accordingly.  
    **Typical Use Case:** Portfolio hedging and contrarian signals.  
    **Known Users/Origin:** Broker and financial media; not clearly attributable.  
    **Evidence Type:** Sentiment article.  
    **Confidence Level:** Low  
91. **Strategy Name:** News Sentiment Analysis  
    **Parent Family:** Sentiment  
    **Type:** Fundamental/AI  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Use natural language processing to gauge sentiment of financial news or central bank speeches.  
    **How it Works:** Software parses news headlines; quantifies sentiment as positive or negative; trades align with aggregated sentiment; adjust quickly when tone shifts.  
    **Typical Use Case:** Quant funds leveraging AI.  
    **Known Users/Origin:** Hedge funds; widely used.  
    **Evidence Type:** Sentiment article.  
    **Confidence Level:** Medium  
92. **Strategy Name:** Social Media Sentiment (Twitter/Reddit)  
    **Parent Family:** Sentiment  
    **Type:** Alternative data  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Scrape social media posts to gauge retail sentiment; extreme bullishness/bearishness may signal tops or bottoms.  
    **How it Works:** Use sentiment analysis algorithms; trade opposite extreme hype; monitor trending hashtags.  
    **Typical Use Case:** Short‑term contrarian trades.  
    **Known Users/Origin:** Quant funds; new phenomenon.  
    **Evidence Type:** Alternative data research.  
    **Confidence Level:** Low  
93. **Strategy Name:** Sentiment Divergence (Price vs Sentiment)  
    **Parent Family:** Sentiment  
    **Type:** Confluence  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** If price moves higher but sentiment becomes increasingly bearish (or vice versa), a reversal may occur.  
    **How it Works:** Monitor divergence between price trend and COT/retail sentiment; enter when divergence reaches extreme.  
    **Typical Use Case:** Swing trading to capture turning points.  
    **Known Users/Origin:** Contrarian traders; origin unclear.  
    **Evidence Type:** Trading practice.  
    **Confidence Level:** Medium  
94. **Strategy Name:** Sentiment Confirmed Breakout  
    **Parent Family:** Sentiment / Breakout  
    **Type:** Confluence  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Use sentiment indicators to confirm breakout direction; avoid trading against majority if majority aligns with breakout.  
    **How it Works:** If price breaks above resistance and COT shows speculators increasing longs, join; exit when sentiment flips.  
    **Typical Use Case:** Trend traders avoiding false breakouts.  
    **Known Users/Origin:** Sentiment-savvy traders; origin unclear.  
    **Evidence Type:** Common practice.  
    **Confidence Level:** Low  
95. **Strategy Name:** Sentiment & Macro Combined  
    **Parent Family:** Sentiment / Macro  
    **Type:** Hybrid  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Combine macro fundamentals (e.g., interest rate expectations) with positioning data; only trade when both align.  
    **How it Works:** Long currency when macro outlook is bullish and speculators are net short; exit when either factor changes.  
    **Typical Use Case:** Hedge funds blending macro and sentiment.  
    **Known Users/Origin:** Institutional; origin unclear.  
    **Evidence Type:** Macro & sentiment research.  
    **Confidence Level:** Medium

---

## **8\. Institutional & Order Flow Strategies**

96. **Strategy Name:** Depth of Market (DOM) Order Flow  
    **Parent Family:** Order flow  
    **Type:** Institutional  
    **Core/Subtype/Variation:** Core  
    **Core Logic:** Use DOM to observe real‑time bid and ask orders; supply/demand imbalances can signal short‑term price moves.  
    **How it Works:** Monitor large orders stacking on one side; trade with order imbalance; exit when balance normalizes.  
    **Typical Use Case:** Scalpers with access to Level II data; primarily futures.  
    **Known Users/Origin:** Proprietary trading firms.  
    **Evidence Type:** Order flow guide.  
    **Confidence Level:** Medium  
97. **Strategy Name:** Volume Profile Trading  
    **Parent Family:** Order flow  
    **Type:** Institutional  
    **Core/Subtype/Variation:** Subtype  
    **Core Logic:** Volume profile shows traded volume at each price; price often rotates around high‑volume nodes and rejects low‑volume areas.  
    **How it Works:** Buy near high‑volume node support; sell near high‑volume node resistance; use low‑volume area as breakout triggers.  
    **Typical Use Case:** Futures traders and institutions.  
    **Known Users/Origin:** Chicago prop shops; widely used.  
    **Evidence Type:** Order flow guide.  
    **Confidence Level:** Medium  
98. **Strategy Name:** Footprint Chart Strategy  
    **Parent Family:** Order flow  
    **Type:** Institutional  
    **Core/Subtype/Variation:** Variation  
    **Core Logic:** Footprint charts display volume at bid and ask for each price bar; reveals buying and selling pressure.  
    **How it Works:** Identify absorption (big buys absorbing sells) or exhaustion; trade in direction of stronger side; exit when imbalance flips.  
    **Typical Use Case:** Scalping inside order book.  
    **Known Users/Origin:** Futures prop traders; widely used.  
    **Evidence Type:** Order flow guide.  
    **Confidence Level:** Medium  
99. **Strategy Name:** Institutional Supply and Demand Zones  
    **Parent Family:** Order flow / Price action  
    **Type:** Core  
    **Core/Subtype/Variation:** Subtype  
    **Core Logic:** Institutions leave footprints at price zones where large orders executed; price often reacts when revisiting.  
    **How it Works:** Identify long consolidation periods before strong move; mark zone; enter on retest; stop beyond zone.  
    **Typical Use Case:** Smart money traders capturing institutional interest.  
    **Known Users/Origin:** Institutional training programs.  
    **Evidence Type:** Order flow guide.  
    **Confidence Level:** Medium  
100. **Strategy Name:** Market Making (Spread Capture)  
     **Parent Family:** Market making  
     **Type:** Institutional  
     **Core/Subtype/Variation:** Core  
     **Core Logic:** Provide liquidity by quoting both bid and ask; earn spread while managing inventory risk.  
     **How it Works:** Maintain inventory balanced; adjust quotes based on order flow; hedge exposures; profit from bid/ask spread.  
     **Typical Use Case:** Banks and electronic market makers.  
     **Known Users/Origin:** Banks; documented in market microstructure.  
     **Evidence Type:** Academic & institutional literature.  
     **Confidence Level:** High  
101. **Strategy Name:** Peg Maintenance Strategy  
     **Parent Family:** Market making / Central bank  
     **Type:** Institutional  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Maintain currency peg by buying or selling domestic currency to hold exchange rate at target.  
     **How it Works:** Central bank intervenes; speculators may trade anticipating support/resistance at peg; risk of break when reserves depleted.  
     **Typical Use Case:** Macro funds trading pegged currencies (e.g., EUR/CHF before 2015).  
     **Known Users/Origin:** Central banks; documented in FX history.  
     **Evidence Type:** Economic history.  
     **Confidence Level:** Medium  
102. **Strategy Name:** Triangular Arbitrage  
     **Parent Family:** Arbitrage / Institutional  
     **Type:** Quantitative  
     **Core/Subtype/Variation:** Core  
     **Core Logic:** Exploit pricing discrepancies among three currency pairs by sequential conversions; opportunity arises when cross exchange rates misalign.  
     **How it Works:** Convert currency A to B, B to C, and C back to A; if final amount exceeds initial, pocket risk‑free profit; opportunities are rare due to fast adjustments.  
     **Typical Use Case:** High‑frequency trading systems.  
     **Known Users/Origin:** Banks and HFT firms.  
     **Evidence Type:** Academic description.  
     **Confidence Level:** High  
103. **Strategy Name:** Covered Interest Arbitrage  
     **Parent Family:** Arbitrage / Interest rate  
     **Type:** Quantitative  
     **Core/Subtype/Variation:** Core  
     **Core Logic:** Exploit interest rate differentials using forward contracts to eliminate currency risk; ensures riskless profit if interest rate parity is violated.  
     **How it Works:** Borrow domestic currency, convert to foreign, invest at foreign interest rate, and lock in future exchange rate via forward contract; profit if forward rate misprices the differential.  
     **Typical Use Case:** Institutional traders with access to interbank forwards.  
     **Known Users/Origin:** Banks; widely taught.  
     **Evidence Type:** Economic text.  
     **Confidence Level:** High  
104. **Strategy Name:** Relative Value Currency Basket  
     **Parent Family:** Arbitrage / Relative value  
     **Type:** Quantitative  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Go long undervalued currency basket and short overvalued basket based on economic fundamentals, valuations, and positioning.  
     **How it Works:** Construct baskets; compute fair value and mispricing; trade spread; hedge macro risk; adjust weights.  
     **Typical Use Case:** Hedge funds and macro strategies.  
     **Known Users/Origin:** Macro funds; origin unclear.  
     **Evidence Type:** Market practice.  
     **Confidence Level:** Medium  
105. **Strategy Name:** Yield Curve Arbitrage in FX Forwards  
     **Parent Family:** Arbitrage / Interest rate  
     **Type:** Quantitative  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Exploit discrepancies between domestic and foreign yield curves versus FX forward rates.  
     **How it Works:** Use interest rate swaps and FX forwards to lock in synthetic exposures; profit from misaligned curves; requires advanced models.  
     **Typical Use Case:** Banks and sophisticated funds.  
     **Known Users/Origin:** Fixed income desks; origin unclear.  
     **Evidence Type:** Institutional practice.  
     **Confidence Level:** Low  
106. **Strategy Name:** Order Anticipation Strategy (Front‑Running)  
     **Parent Family:** Order flow  
     **Type:** High‑frequency  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Predict large institutional orders (e.g., from index rebalancing) and trade in front; profit from price impact.  
     **How it Works:** Analyze order flow patterns; position before big orders are executed; exit once the move occurs.  
     **Typical Use Case:** HFT firms; regulated to avoid market abuse.  
     **Known Users/Origin:** Controversial; practiced historically.  
     **Evidence Type:** Market microstructure research.  
     **Confidence Level:** Low  
107. **Strategy Name:** Liquidity Provision with VWAP/TWAP Algorithms  
     **Parent Family:** Order flow  
     **Type:** Execution  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Use volume‑weighted average price (VWAP) or time‑weighted average price (TWAP) algorithms to execute large orders with minimal market impact.  
     **How it Works:** Split large order into many small slices executed over time; algorithm monitors volume and adjusts pace; result approximates benchmark.  
     **Typical Use Case:** Institutional execution desks.  
     **Known Users/Origin:** Banks and broker algos.  
     **Evidence Type:** Institutional practice.  
     **Confidence Level:** High  
108. **Strategy Name:** Percent of Volume (POV) Algorithm  
     **Parent Family:** Order flow  
     **Type:** Execution  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Execute trades as a percentage of market volume; more volume executed when market is busy; less when quiet.  
     **How it Works:** Choose participation rate; algorithm sends orders accordingly; ensures anonymity and reduces impact.  
     **Typical Use Case:** Institutions trading large positions.  
     **Known Users/Origin:** Banks.  
     **Evidence Type:** Institutional practice.  
     **Confidence Level:** High  
109. **Strategy Name:** Iceberg Detection  
     **Parent Family:** Order flow  
     **Type:** High‑frequency  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Detect hidden large orders (icebergs) by monitoring repeated small trades at same price; trade ahead of full execution.  
     **How it Works:** Use algorithms to identify patterns; enter trade anticipating price movement caused by iceberg; exit quickly.  
     **Typical Use Case:** Proprietary HFT firms.  
     **Known Users/Origin:** HFT; widely known in microstructure.  
     **Evidence Type:** Market microstructure literature.  
     **Confidence Level:** Low  
110. **Strategy Name:** Liquidity Run Reversal  
     **Parent Family:** Order flow / Price action  
     **Type:** Liquidity event  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Price often spikes to clear resting orders then reverses; trade reversal after liquidity run.  
     **How it Works:** Wait for price to take out stop clusters; confirm by order flow reversal; enter opposite direction; stop beyond run.  
     **Typical Use Case:** Intraday traders; rely on real‑time data.  
     **Known Users/Origin:** Smart money traders; origin unclear.  
     **Evidence Type:** Order flow education.  
     **Confidence Level:** Low

---

## **9\. Quantitative & Algorithmic Strategies**

111. **Strategy Name:** Moving Average Crossover Bot  
     **Parent Family:** Algorithmic / Trend  
     **Type:** Rule‑based  
     **Core/Subtype/Variation:** Core  
     **Core Logic:** Programmatically trade moving average crossover signals; remove human discretion.  
     **How it Works:** Code executes buy and sell orders automatically when signals occur; includes risk management rules.  
     **Typical Use Case:** Systematic funds, retail expert advisors.  
     **Known Users/Origin:** Algorithmic trading widely discussed.  
     **Evidence Type:** Broker article.  
     **Confidence Level:** High  
112. **Strategy Name:** Turtle Trading System  
     **Parent Family:** Algorithmic / Trend  
     **Type:** Rule‑based  
     **Core/Subtype/Variation:** Subtype  
     **Core Logic:** Use Donchian channels to enter on 20‑day breakout; exit on 10‑day low; risk 2% of equity per trade; trade multiple markets.  
     **How it Works:** Predefined rules for entries, exits, and position sizing; requires discipline.  
     **Typical Use Case:** CTAs replicating 1980s experiment.  
     **Known Users/Origin:** Richard Dennis & William Eckhardt “Turtle” experiment.  
     **Evidence Type:** Trading history.  
     **Confidence Level:** High  
113. **Strategy Name:** Channel Breakout System (Channel Commodity)\*\*  
     **Parent Family:** Algorithmic / Trend  
     **Type:** Rule‑based  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Use highest high/lowest low over n days; go long on new high, short on new low; exit on opposite breakout.  
     **How it Works:** Similar to turtle system; but parameters may differ.  
     **Typical Use Case:** CTA strategies.  
     **Known Users/Origin:** Commodity trading pioneers.  
     **Evidence Type:** Historical CTA practice.  
     **Confidence Level:** High  
114. **Strategy Name:** Mean Reversion Algorithm with Bollinger Bands  
     **Parent Family:** Algorithmic / Mean reversion  
     **Type:** Rule‑based  
     **Core/Subtype/Variation:** Subtype  
     **Core Logic:** Programmatically enter when price touches upper/lower Bollinger band; exit at middle band.  
     **How it Works:** Code monitors price; triggers orders; includes time stop; uses risk management.  
     **Typical Use Case:** Automated reversion strategies.  
     **Known Users/Origin:** Quant funds; widely used.  
     **Evidence Type:** Broker article.  
     **Confidence Level:** High  
115. **Strategy Name:** Statistical Arbitrage (Stat‑Arb) Pairs Algorithm  
     **Parent Family:** Algorithmic / Stat‑arb  
     **Type:** Rule‑based  
     **Core/Subtype/Variation:** Core  
     **Core Logic:** Use statistical models (cointegration, mean reversion) to identify and trade pairs; algorithm monitors spread and triggers trades.  
     **How it Works:** Pre‑define entry thresholds; automatically open/close positions; adjust risk to volatility.  
     **Typical Use Case:** Hedge funds and prop firms.  
     **Known Users/Origin:** Quant funds; widely documented.  
     **Evidence Type:** Statistical arbitrage literature.  
     **Confidence Level:** Medium  
116. **Strategy Name:** Genetic Algorithm Parameter Optimisation  
     **Parent Family:** Algorithmic / Machine learning  
     **Type:** ML-based  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Use genetic algorithms to evolve and optimise trading rule parameters (e.g., moving average lengths) based on fitness function.  
     **How it Works:** Population of parameter sets evolve; best sets survive; final parameters used in trading system; avoid overfitting.  
     **Typical Use Case:** Researchers seeking optimal rule parameters.  
     **Known Users/Origin:** Academic researchers; widely studied.  
     **Evidence Type:** ML research.  
     **Confidence Level:** Low  
117. **Strategy Name:** Neural Network Price Prediction  
     **Parent Family:** Algorithmic / Machine learning  
     **Type:** ML-based  
     **Core/Subtype/Variation:** Core  
     **Core Logic:** Train neural networks on historical price, volume, and macro data to forecast future prices; generate trading signals.  
     **How it Works:** Feed data to network; network outputs probability of price increase/decrease; trade threshold triggers.  
     **Typical Use Case:** Data-rich quant funds.  
     **Known Users/Origin:** Hedge funds; research widely published.  
     **Evidence Type:** Academic & industry research.  
     **Confidence Level:** Medium  
118. **Strategy Name:** Random Forest Classification for Direction  
     **Parent Family:** Algorithmic / Machine learning  
     **Type:** ML-based  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Use ensemble decision trees (random forest) to classify whether currency pair will go up or down based on technical and fundamental features.  
     **How it Works:** Train on labelled data; algorithm outputs classification; trade with risk management; important to avoid overfitting.  
     **Typical Use Case:** Research and proprietary trading.  
     **Known Users/Origin:** Quant researchers.  
     **Evidence Type:** Academic literature.  
     **Confidence Level:** Low  
119. **Strategy Name:** Support Vector Machine (SVM) Trend Classification  
     **Parent Family:** Algorithmic / Machine learning  
     **Type:** ML-based  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Use SVM to classify market state (trend, range) based on price patterns; adjust strategy accordingly.  
     **How it Works:** Extract features; train SVM; in live trading, if model predicts trend, use trend‑following system; if range, use mean reversion.  
     **Typical Use Case:** Adaptive trading systems.  
     **Known Users/Origin:** Quant researchers; not widely used in production due to complexity.  
     **Evidence Type:** Machine learning research.  
     **Confidence Level:** Low  
120. **Strategy Name:** Reinforcement Learning Trading Agent  
     **Parent Family:** Algorithmic / Machine learning  
     **Type:** RL-based  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Use reinforcement learning to train agent to maximise reward (profit) by interacting with market environment.  
     **How it Works:** Agent observes state (price, indicators), chooses actions (long, short, flat); receives reward; iteratively improves policy.  
     **Typical Use Case:** Experimental quant projects.  
     **Known Users/Origin:** Academic labs; some hedge funds.  
     **Evidence Type:** ML research.  
     **Confidence Level:** Low  
121. **Strategy Name:** Kalman Filter Trend Estimation  
     **Parent Family:** Algorithmic / Statistical  
     **Type:** Quantitative  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Use Kalman filter to estimate unobserved trend component in price series; trade when trend signal positive/negative.  
     **How it Works:** State‑space model updates estimate; buy when trend estimate above threshold; short when below; adjust as new data arrives.  
     **Typical Use Case:** Systematic macro strategies.  
     **Known Users/Origin:** Quant researchers.  
     **Evidence Type:** Academic literature.  
     **Confidence Level:** Low  
122. **Strategy Name:** Hidden Markov Model (HMM) Regime Switching  
     **Parent Family:** Algorithmic / Statistical  
     **Type:** Quantitative  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Model market as unobserved regimes (trend, range, high volatility); fit HMM; trade based on predicted regime.  
     **How it Works:** Estimate HMM parameters; compute posterior probabilities; if regime \= trend, use trend strategy; if range, mean reversion; adjust risk accordingly.  
     **Typical Use Case:** Multi‑strategy quant funds.  
     **Known Users/Origin:** Academics; some adoption in funds.  
     **Evidence Type:** Research papers.  
     **Confidence Level:** Low  
123. **Strategy Name:** High‑Frequency Market Making Algorithm  
     **Parent Family:** Algorithmic / Market making  
     **Type:** High‑frequency  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Automatically post bids and offers around mid price; adjust quotes based on real‑time order flow and volatility; capture spread.  
     **How it Works:** Algorithm monitors inventory; widens spreads when risk high; narrows when safe; uses microsecond execution.  
     **Typical Use Case:** Electronic FX venues.  
     **Known Users/Origin:** HFT firms.  
     **Evidence Type:** Market microstructure research.  
     **Confidence Level:** Medium  
124. **Strategy Name:** FX Basket Mean‑Reversion Quant Strategy  
     **Parent Family:** Algorithmic / Mean reversion  
     **Type:** Basket strategy  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Build basket of currencies; compute z‑score of each currency’s deviation from equal‑weighted basket; trade reversion.  
     **How it Works:** Long currencies underperforming the basket; short overperformers; exit when z‑scores cross zero.  
     **Typical Use Case:** Quant funds diversifying idiosyncratic risks.  
     **Known Users/Origin:** Hedge funds; origin unclear.  
     **Evidence Type:** Quant research.  
     **Confidence Level:** Low  
125. **Strategy Name:** Adaptive Moving Average (Kaufman AMA) Strategy  
     **Parent Family:** Algorithmic / Trend  
     **Type:** Indicator-based  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Adaptive moving average adjusts speed based on market volatility; smoother in trending markets, more responsive in ranges.  
     **How it Works:** Compute efficiency ratio (price movement vs volatility); adjust smoothing constant; trade crossovers of AMA and price.  
     **Typical Use Case:** Algorithmic systems needing dynamic smoothing.  
     **Known Users/Origin:** Perry Kaufman.  
     **Evidence Type:** Technical literature.  
     **Confidence Level:** Medium  
126. **Strategy Name:** Volatility Scaling of Position Sizes  
     **Parent Family:** Algorithmic / Risk  
     **Type:** Risk management  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Adjust position sizes based on recent volatility; higher volatility results in smaller positions to keep risk constant.  
     **How it Works:** Use ATR or standard deviation to compute daily volatility; position size \= risk amount / (ATR × pip value).  
     **Typical Use Case:** Systematic trading programs.  
     **Known Users/Origin:** CTAs; widely used.  
     **Evidence Type:** Risk management texts.  
     **Confidence Level:** High

---

## **10\. Hybrid Strategies & Confluence Systems**

127. **Strategy Name:** Trend \+ Fundamental Confirmation  
     **Parent Family:** Hybrid  
     **Type:** Confluence  
     **Core/Subtype/Variation:** Core  
     **Core Logic:** Only trade technical trends that align with fundamental outlook (e.g., interest rate differentials).  
     **How it Works:** Identify long‑term fundamental bias (hawkish vs dovish); trade trend signals (moving average crossover) only when bias matches; exit when fundamentals shift.  
     **Typical Use Case:** Macro traders blending charts and fundamentals.  
     **Known Users/Origin:** Hedge funds; widely practised.  
     **Evidence Type:** Common practice.  
     **Confidence Level:** Medium  
128. **Strategy Name:** Technical \+ Sentiment Confluence  
     **Parent Family:** Hybrid  
     **Type:** Confluence  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Align technical setup (e.g., pin bar at support) with sentiment extreme (e.g., retail crowd heavily long).  
     **How it Works:** Only enter trade when technical pattern and contrarian sentiment signal coincide; helps filter false signals.  
     **Typical Use Case:** Traders who incorporate sentiment data.  
     **Known Users/Origin:** Price action and sentiment traders.  
     **Evidence Type:** Sentiment article.  
     **Confidence Level:** Medium  
129. **Strategy Name:** Fundamental \+ COT Confluence  
     **Parent Family:** Hybrid  
     **Type:** Confluence  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Use fundamental macro view and COT net positioning; trade when both indicate the same direction (e.g., hawkish central bank and net short speculator positions).  
     **How it Works:** Enter long or short; hold until either factor changes; provides conviction.  
     **Typical Use Case:** Macro funds.  
     **Known Users/Origin:** Institutional; origin unclear.  
     **Evidence Type:** Macro & COT research.  
     **Confidence Level:** Medium  
130. **Strategy Name:** Multi‑Timeframe Trend Alignment  
     **Parent Family:** Hybrid  
     **Type:** Multi‑timeframe  
     **Core/Subtype/Variation:** Subtype  
     **Core Logic:** Enter trades only when trend signals align across several timeframes (e.g., daily, 4‑hour, 1‑hour).  
     **How it Works:** Use moving averages or market structure across timeframes; entry on lower timeframe when higher timeframes confirm direction.  
     **Typical Use Case:** Swing traders seeking high‑probability trends.  
     **Known Users/Origin:** Common practice; origin unclear.  
     **Evidence Type:** Trading education.  
     **Confidence Level:** High  
131. **Strategy Name:** Indicator \+ Price Action Confluence  
     **Parent Family:** Hybrid  
     **Type:** Confluence  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Combine indicator signal (e.g., RSI oversold) with price action pattern (e.g., bullish pin bar).  
     **How it Works:** Only take trades when both conditions met; exit when either signal invalidated.  
     **Typical Use Case:** Traders seeking extra confirmation.  
     **Known Users/Origin:** Retail traders; widely used.  
     **Evidence Type:** Trading education.  
     **Confidence Level:** Medium  
132. **Strategy Name:** Triangular Confluence (Fundamental \+ Technical \+ Sentiment)  
     **Parent Family:** Hybrid  
     **Type:** Confluence  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Wait for alignment across all three pillars; this is rare but yields high conviction.  
     **How it Works:** For example, interest rates favour USD; technical breakout on USD/JPY; sentiment shows speculators short; trade long.  
     **Typical Use Case:** Position traders requiring strong thesis.  
     **Known Users/Origin:** Professional traders; origin unclear.  
     **Evidence Type:** Common practice.  
     **Confidence Level:** Low  
133. **Strategy Name:** Hybrid Carry \+ Price Action  
     **Parent Family:** Hybrid / Carry  
     **Type:** Confluence  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Capture carry trade yield but use price action to time entries/exits to reduce drawdowns.  
     **How it Works:** Enter carry trade when price forms bullish pattern at support; exit when bearish signal appears or interest differential narrows.  
     **Typical Use Case:** Long‑term traders seeking yield with technical risk control.  
     **Known Users/Origin:** Carry traders adopting technical analysis.  
     **Evidence Type:** Trading education.  
     **Confidence Level:** Medium  
134. **Strategy Name:** Mean Reversion \+ Options Hedging  
     **Parent Family:** Hybrid  
     **Type:** Strategy layer  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Use mean reversion strategy; hedge tail risk using options.  
     **How it Works:** Trade mean reversion pairs; simultaneously buy out‑of‑the‑money options to protect against breakout; reduces risk of large losses.  
     **Typical Use Case:** Quant funds managing tail risk.  
     **Known Users/Origin:** Institutional; origin unclear.  
     **Evidence Type:** Risk management literature.  
     **Confidence Level:** Low  
135. **Strategy Name:** News \+ Technical Event Trading  
     **Parent Family:** Hybrid  
     **Type:** Event \+ Technical  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Only trade technical breakout when news event acts as catalyst (e.g., strong NFP).  
     **How it Works:** Wait for scheduled news; if results support breakout direction, enter; reduces false breakouts.  
     **Typical Use Case:** Short‑term trading around events.  
     **Known Users/Origin:** News traders; widely practised.  
     **Evidence Type:** Broker articles.  
     **Confidence Level:** Medium  
136. **Strategy Name:** Sentiment \+ Risk‑On/Off Regime Strategy  
     **Parent Family:** Hybrid  
     **Type:** Confluence  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Combine broad market risk sentiment (VIX, equities) with positioning; align trades with risk regime.  
     **How it Works:** If risk‑off and sentiment extreme long safe‑havens, join safe‑haven trades; exit when risk regime changes.  
     **Typical Use Case:** Macro & sentiment traders.  
     **Known Users/Origin:** Hedge funds; origin unclear.  
     **Evidence Type:** Sentiment research.  
     **Confidence Level:** Medium  
137. **Strategy Name:** Order Flow \+ Price Action Confluence  
     **Parent Family:** Hybrid  
     **Type:** Confluence  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Use order book imbalances to confirm price action setups (e.g., pin bar at support backed by strong buying in DOM).  
     **How it Works:** Wait for price action pattern; consult DOM or footprint chart; enter only if buy orders dominate; exit when imbalance reverses.  
     **Typical Use Case:** Traders with access to order flow data.  
     **Known Users/Origin:** Prop traders; not clearly attributable.  
     **Evidence Type:** Order flow article.  
     **Confidence Level:** Medium  
138. **Strategy Name:** Macro \+ Machine Learning Hybrid  
     **Parent Family:** Hybrid  
     **Type:** ML \+ Macro  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Use machine learning to forecast macro variables (e.g., inflation surprise) and trade currency accordingly.  
     **How it Works:** Train models on macro data; forecast upcoming releases; position ahead; exit after release.  
     **Typical Use Case:** Macro quant funds.  
     **Known Users/Origin:** Hedge funds; research.  
     **Evidence Type:** Academic research.  
     **Confidence Level:** Low  
139. **Strategy Name:** Seasonal \+ Technical Confirmation  
     **Parent Family:** Hybrid / Macro  
     **Type:** Confluence  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Trade seasonal patterns only when supported by technical trend; avoid trading solely on seasonality.  
     **How it Works:** If seasonally strong month and price above moving average, go long; exit when either signal fails.  
     **Typical Use Case:** Long‑term traders.  
     **Known Users/Origin:** Quant researchers; origin unclear.  
     **Evidence Type:** Seasonal studies.  
     **Confidence Level:** Low  
140. **Strategy Name:** Volatility Breakout \+ Fundamental Filter  
     **Parent Family:** Hybrid  
     **Type:** Confluence  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Only trade volatility breakouts when fundamental catalysts (e.g., data release) justify increased volatility.  
     **How it Works:** Monitor ATR; if ATR increases before news, place breakout orders; ensure fundamental driver exists; exit quickly.  
     **Typical Use Case:** Intraday event trading.  
     **Known Users/Origin:** Day traders; origin unclear.  
     **Evidence Type:** Trading practice.  
     **Confidence Level:** Low

---

## **11\. Risk Management & Portfolio Strategies**

141. **Strategy Name:** Fixed Fractional Position Sizing  
     **Parent Family:** Risk systems  
     **Type:** Position sizing  
     **Core/Subtype/Variation:** Core  
     **Core Logic:** Risk a fixed percentage (commonly 1–2%) of account equity per trade to control drawdowns.  
     **How it Works:** Calculate position size by dividing risk amount by pip value × stop distance; adjust size as equity changes.  
     **Typical Use Case:** Retail traders; recommended by brokers.  
     **Known Users/Origin:** Widely adopted; no clear origin.  
     **Evidence Type:** Risk management article.  
     **Confidence Level:** High  
142. **Strategy Name:** Fixed Ratio Position Sizing  
     **Parent Family:** Risk systems  
     **Type:** Position sizing  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Increase position size as account grows using a fixed increment ratio; slower compounding than fixed fractional.  
     **How it Works:** For every X amount of profit, increase position by predetermined lot; reduces risk volatility.  
     **Typical Use Case:** Account growth with controlled risk.  
     **Known Users/Origin:** Ryan Jones.  
     **Evidence Type:** Trading literature.  
     **Confidence Level:** Low  
143. **Strategy Name:** Kelly Criterion Sizing  
     **Parent Family:** Risk systems  
     **Type:** Position sizing  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Calculate optimal fraction to wager based on win probability and win/loss ratio; maximizes growth but can be aggressive.  
     **How it Works:** f\* \= (bp – q) / b; adjust for risk aversion by using fraction of Kelly; used by gamblers and quant funds.  
     **Typical Use Case:** Quantitative trading with known probabilities.  
     **Known Users/Origin:** John L. Kelly; used in blackjack and trading.  
     **Evidence Type:** Academic literature.  
     **Confidence Level:** Low  
144. **Strategy Name:** ATR‑Based Stop Placement  
     **Parent Family:** Risk systems  
     **Type:** Stop loss  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Use Average True Range to set stop‑loss distance based on market volatility; prevents too tight stops.  
     **How it Works:** Stop distance \= n × ATR; adjust n depending on timeframe; moves adapt as volatility changes.  
     **Typical Use Case:** Trend and mean reversion strategies requiring dynamic stops.  
     **Known Users/Origin:** Welles Wilder; widely used.  
     **Evidence Type:** Risk management literature.  
     **Confidence Level:** High  
145. **Strategy Name:** Volatility Scaling Portfolio Allocation  
     **Parent Family:** Risk systems  
     **Type:** Portfolio allocation  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Allocate capital across currency pairs inversely proportional to their volatility to equalise risk contributions.  
     **How it Works:** Compute volatility (e.g., standard deviation) of each pair; weight \= 1/volatility; normalize weights; adjust periodically.  
     **Typical Use Case:** Multi‑pair portfolios; used by CTAs.  
     **Known Users/Origin:** Risk parity concept.  
     **Evidence Type:** Quant research.  
     **Confidence Level:** Medium  
146. **Strategy Name:** Drawdown Control (Stop Trading after X%)  
     **Parent Family:** Risk systems  
     **Type:** Trading plan  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Cease trading or reduce risk if account drawdown exceeds predefined threshold to preserve capital.  
     **How it Works:** Monitor equity curve; when drawdown hits 10%, stop trading for a period; review strategy; resume with lower size.  
     **Typical Use Case:** Prevent emotional decisions during losing streaks.  
     **Known Users/Origin:** Risk management coaches.  
     **Evidence Type:** Trading psychology literature.  
     **Confidence Level:** Medium  
147. **Strategy Name:** Hedging with Correlated Currency Pairs  
     **Parent Family:** Risk systems  
     **Type:** Hedging  
     **Core/Subtype/Variation:** Core  
     **Core Logic:** Open opposite positions in highly correlated pairs to reduce directional exposure (e.g., long EUR/USD and short GBP/USD).  
     **How it Works:** Determine correlation matrix; hedge base trade with opposite exposure; reduces risk but may lower profit.  
     **Typical Use Case:** Portfolio managers balancing exposures.  
     **Known Users/Origin:** Widely used; not clearly attributable.  
     **Evidence Type:** Hedging article.  
     **Confidence Level:** Medium  
148. **Strategy Name:** Direct Hedging (Offsetting Position)  
     **Parent Family:** Risk systems  
     **Type:** Hedging  
     **Core/Subtype/Variation:** Subtype  
     **Core Logic:** Take an opposite position in same currency pair to lock in profits or limit losses.  
     **How it Works:** If long EUR/USD and market uncertain, open short EUR/USD of equal size; closes net exposure; close hedge later to resume.  
     **Typical Use Case:** Brokers allowing hedging; used to manage news risk.  
     **Known Users/Origin:** Retail traders; widely practiced.  
     **Evidence Type:** Hedging article.  
     **Confidence Level:** Medium  
149. **Strategy Name:** Options Hedging (FX Options)  
     **Parent Family:** Risk systems  
     **Type:** Hedging  
     **Core/Subtype/Variation:** Subtype  
     **Core Logic:** Use call or put options to hedge existing spot positions; premium paid for insurance.  
     **How it Works:** Long EUR/USD spot; buy EUR/USD put option to protect downside; if price falls, option gains offset losses; if price rises, option expires worthless.  
     **Typical Use Case:** Hedging large exposures for corporates and traders.  
     **Known Users/Origin:** Institutional and corporate treasuries.  
     **Evidence Type:** Hedging article.  
     **Confidence Level:** High  
150. **Strategy Name:** Forward Contract Hedging  
     **Parent Family:** Risk systems  
     **Type:** Hedging  
     **Core/Subtype/Variation:** Subtype  
     **Core Logic:** Use forward contracts to lock in exchange rate for future transaction; eliminates currency risk.  
     **How it Works:** Exporter expecting USD revenue sells USD forward; locks rate; protects from unfavorable moves; cannot benefit if rate improves.  
     **Typical Use Case:** Businesses and institutional hedging.  
     **Known Users/Origin:** Corporates; widely practiced.  
     **Evidence Type:** Hedging article.  
     **Confidence Level:** High  
151. **Strategy Name:** Cross‑Hedging with Correlated Asset (e.g., Oil)  
     **Parent Family:** Risk systems  
     **Type:** Hedging  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Use correlated asset (e.g., crude oil) to hedge currency exposure (e.g., CAD).  
     **How it Works:** If long CAD exposure, short crude oil futures to hedge; correlation reduces net risk; adjust hedge ratio regularly.  
     **Typical Use Case:** Corporates exposed to commodity currencies.  
     **Known Users/Origin:** Corporate hedging; not clearly attributable.  
     **Evidence Type:** Hedging practices.  
     **Confidence Level:** Low  
152. **Strategy Name:** Portfolio Diversification Across Currency Pairs  
     **Parent Family:** Risk systems  
     **Type:** Portfolio allocation  
     **Core/Subtype/Variation:** Core  
     **Core Logic:** Diversify trading across uncorrelated currency pairs to smooth returns and reduce risk.  
     **How it Works:** Avoid concentrating positions in correlated pairs; allocate risk evenly; monitor correlations.  
     **Typical Use Case:** Multi‑pair portfolios.  
     **Known Users/Origin:** Risk management article.  
     **Evidence Type:** Broker article.  
     **Confidence Level:** High  
153. **Strategy Name:** Dynamic Leverage Adjustment  
     **Parent Family:** Risk systems  
     **Type:** Leverage management  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Adjust leverage based on volatility and account performance; lower leverage during high volatility to reduce risk.  
     **How it Works:** If volatility rises above threshold, reduce position size; when volatility low and account performing well, increase size moderately.  
     **Typical Use Case:** Professional trading to maintain stable risk.  
     **Known Users/Origin:** Hedge funds; origin unclear.  
     **Evidence Type:** Risk management literature.  
     **Confidence Level:** Low  
154. **Strategy Name:** Trailing Stop Strategy  
     **Parent Family:** Risk systems  
     **Type:** Stop loss  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Move stop‑loss in the direction of the trade as it becomes profitable to lock in gains.  
     **How it Works:** Use fixed pip or percentage trailing; or ATR‑based trailing; stop trails behind price; if price reverses, exit trade with locked profit.  
     **Typical Use Case:** Trend following strategies to maximize profits.  
     **Known Users/Origin:** Widely used by retail and institutional traders.  
     **Evidence Type:** Risk management texts.  
     **Confidence Level:** High  
155. **Strategy Name:** Equity Curve Stop (Portfolio Stop)  
     **Parent Family:** Risk systems  
     **Type:** Portfolio management  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** If equity curve falls below a moving average or certain drawdown level, stop trading system to prevent further losses.  
     **How it Works:** Monitor portfolio equity; when crosses below 50‑day MA or drawdown \> X%, pause trading; resume after recovery.  
     **Typical Use Case:** Automated systems with drawdown control.  
     **Known Users/Origin:** Systematic funds; origin unclear.  
     **Evidence Type:** Risk management research.  
     **Confidence Level:** Low  
156. **Strategy Name:** Risk Parity Currency Portfolio  
     **Parent Family:** Risk systems  
     **Type:** Portfolio allocation  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Allocate capital so each currency contributes equal risk to portfolio; adjust weighting to equalize volatility contributions.  
     **How it Works:** Estimate volatility of each currency; compute risk contribution; adjust weights; rebalance regularly.  
     **Typical Use Case:** Multi‑asset funds.  
     **Known Users/Origin:** Bridgewater Associates pioneered risk parity.  
     **Evidence Type:** Portfolio theory.  
     **Confidence Level:** Low  
157. **Strategy Name:** Correlation Matrix Position Adjustment  
     **Parent Family:** Risk systems  
     **Type:** Portfolio management  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Use correlation matrix to reduce overlapping exposures; if correlations high, reduce combined position size.  
     **How it Works:** Compute correlation among pairs; adjust sizes so that net exposure across correlated pairs remains within limit.  
     **Typical Use Case:** Portfolio managers controlling aggregate risk.  
     **Known Users/Origin:** Risk management practices.  
     **Evidence Type:** Risk management article.  
     **Confidence Level:** Medium

---

## **12\. Additional Strategies & Variations (to reach 200+ entries)**

158. **Strategy Name:** Speed of Market Momentum Scalping  
     **Parent Family:** Momentum  
     **Type:** Scalping  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Use very fast momentum indicators and order book to scalp short bursts of price movement; exit within seconds to minutes.  
     **How it Works:** Monitor tick charts; enter when momentum spiking; exit quickly with a few pips; requires low latency.  
     **Typical Use Case:** Professional scalpers with direct market access.  
     **Known Users/Origin:** Proprietary firms; not widely accessible.  
     **Evidence Type:** Market practice.  
     **Confidence Level:** Low  
159. **Strategy Name:** News Fade Strategy  
     **Parent Family:** News / Mean reversion  
     **Type:** Event trading  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** After an initial spike following news release, price often retraces as market re‑prices; trade against the spike after confirmation.  
     **How it Works:** Wait for news reaction; once momentum stalls and reversal pattern appears, trade opposite; exit at pre‑news level.  
     **Typical Use Case:** News traders capturing post‑event correction.  
     **Known Users/Origin:** Event traders; widely known.  
     **Evidence Type:** Trading practice.  
     **Confidence Level:** Medium  
160. **Strategy Name:** Straddle the News  
     **Parent Family:** Options / News  
     **Type:** Options strategy  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Buy both call and put options before major news; profit if price moves significantly in either direction.  
     **How it Works:** At-the-money straddle; time your entry to minimize premium decay; if volatility increases post-news, close profitable leg.  
     **Typical Use Case:** Traders expecting big move but uncertain direction.  
     **Known Users/Origin:** Options traders; widely used.  
     **Evidence Type:** Options education.  
     **Confidence Level:** Medium  
161. **Strategy Name:** Gamma Scalping  
     **Parent Family:** Options / Risk  
     **Type:** Hedging  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Hedge delta of options position by buying/selling underlying as price moves; capture profits from gamma exposure.  
     **How it Works:** Hold long gamma options; when price rises, sell underlying; when price falls, buy underlying; profits from rebalancing offset time decay.  
     **Typical Use Case:** Professional options desks.  
     **Known Users/Origin:** Market makers.  
     **Evidence Type:** Options theory.  
     **Confidence Level:** Low  
162. **Strategy Name:** Calendar Spread in FX Options  
     **Parent Family:** Options  
     **Type:** Strategy  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Buy long‑dated option and sell short‑dated option at same strike; bet on changes in implied volatility term structure.  
     **How it Works:** If short‑term volatility overpriced, short near‑term option; long far‑term to hedge; profit if term structure normalises.  
     **Typical Use Case:** Options traders positioning around events.  
     **Known Users/Origin:** Institutional options desks.  
     **Evidence Type:** Options practice.  
     **Confidence Level:** Low  
163. **Strategy Name:** Interest Rate Swaption Hedge  
     **Parent Family:** Options / Interest rate  
     **Type:** Strategy  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Use interest rate swaptions to hedge exposure to rate changes affecting currency valuations.  
     **How it Works:** If holding high‑yield currency, buy payer swaption to hedge risk of rate cuts; cost of premium reduces carry but hedges tail risk.  
     **Typical Use Case:** Corporate treasury and macro funds.  
     **Known Users/Origin:** Institutional.  
     **Evidence Type:** Interest rate derivative literature.  
     **Confidence Level:** Low  
164. **Strategy Name:** Relative Strength Rotation  
     **Parent Family:** Momentum / Portfolio  
     **Type:** Quantitative  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Rank currencies by relative strength vs each other; rotate into top performers and out of laggards; rebalance regularly.  
     **How it Works:** Compute performance over lookback; hold long top 3 pairs; short bottom 3; rebalance monthly; incorporate risk controls.  
     **Typical Use Case:** FX mutual funds and ETFs.  
     **Known Users/Origin:** Momentum investing; widely known.  
     **Evidence Type:** Academic research.  
     **Confidence Level:** Medium  
165. **Strategy Name:** Volatility Breakout System (Turtle‑Type)  
     **Parent Family:** Breakout / Volatility  
     **Type:** Rule‑based  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Use ATR to set breakout levels; high ATR indicates bigger stop; low ATR indicates tighter stop; adapt to volatility.  
     **How it Works:** Entry at price ± n × ATR; exit at opposite ± m × ATR; parameters optimized.  
     **Typical Use Case:** Systematic traders.  
     **Known Users/Origin:** Inspired by Turtle; widely used.  
     **Evidence Type:** Trading literature.  
     **Confidence Level:** Medium  
166. **Strategy Name:** Dynamic Support & Resistance via Pivot Points  
     **Parent Family:** Technical  
     **Type:** Indicator-based  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Use previous day’s high, low, close to compute pivot point and support/resistance levels; trade bounces/breaks.  
     **How it Works:** Buy at S1 with target at pivot; sell at R1; adjust stops.  
     **Typical Use Case:** Day traders in FX.  
     **Known Users/Origin:** Floor traders originally; widely used.  
     **Evidence Type:** Trading texts.  
     **Confidence Level:** Medium  
167. **Strategy Name:** Fibonacci Retracement Strategy  
     **Parent Family:** Technical  
     **Type:** Indicator-based  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Use Fibonacci retracement levels (38.2%, 50%, 61.8%) to identify potential reversal zones within a trend.  
     **How it Works:** Enter in direction of trend when price retraces to Fibonacci level and prints reversal pattern; stop below next level.  
     **Typical Use Case:** Swing traders and analysts.  
     **Known Users/Origin:** Based on Fibonacci ratios.  
     **Evidence Type:** Technical analysis.  
     **Confidence Level:** High  
168. **Strategy Name:** Pivot Point Breakout  
     **Parent Family:** Technical / Breakout  
     **Type:** Indicator-based  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Trade breakout of daily pivot point; price closing above pivot signals bullish; below signals bearish.  
     **How it Works:** Place orders at pivot; confirm with volume; target at next pivot level; stop opposite side of pivot.  
     **Typical Use Case:** Intraday traders.  
     **Known Users/Origin:** Floor traders; widely used.  
     **Evidence Type:** Trading practice.  
     **Confidence Level:** Medium  
169. **Strategy Name:** Moving Average Envelope Strategy  
     **Parent Family:** Technical  
     **Type:** Indicator-based  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Draw bands above and below moving average by fixed percentage; buy near lower band; sell near upper band.  
     **How it Works:** Combines trend direction with mean reversion; adjust band width based on volatility.  
     **Typical Use Case:** Range and mild trend markets.  
     **Known Users/Origin:** Technical traders.  
     **Evidence Type:** Technical literature.  
     **Confidence Level:** Low  
170. **Strategy Name:** Ichimoku Kumo Breakout  
     **Parent Family:** Technical / Breakout  
     **Type:** Indicator-based  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Enter trades when price breaks out of the Ichimoku cloud (“kumo”); thick cloud acts as support/resistance.  
     **How it Works:** Confirm with Tenkan/Kijun crossover and lagging span location; exit when price closes back into cloud.  
     **Typical Use Case:** Trend followers.  
     **Known Users/Origin:** Japanese traders; widely used.  
     **Evidence Type:** Ichimoku literature.  
     **Confidence Level:** High  
171. **Strategy Name:** Adaptive RSI (Connors RSI)  
     **Parent Family:** Technical / Mean reversion  
     **Type:** Indicator-based  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Combine short‑term RSI (3‑period), streaks, and momentum ranking into a composite indicator; identifies short‑term mean reversion signals.  
     **How it Works:** Enter long when Connors RSI below 20; short when above 80; exit when returns to 50; adjust parameters.  
     **Typical Use Case:** Short‑term traders.  
     **Known Users/Origin:** Larry Connors.  
     **Evidence Type:** Trading books.  
     **Confidence Level:** Low  
172. **Strategy Name:** Heikin‑Ashi & RSI Confluence  
     **Parent Family:** Technical / Hybrid  
     **Type:** Confluence  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Use smoothed Heikin‑Ashi candles to identify trend and RSI to time entry on pullbacks.  
     **How it Works:** Enter long on Heikin‑Ashi bullish candles when RSI pulls back to 40–50; exit when candles change colour or RSI diverges.  
     **Typical Use Case:** Trend continuation trades.  
     **Known Users/Origin:** Retail traders.  
     **Evidence Type:** Trading practice.  
     **Confidence Level:** Low  
173. **Strategy Name:** Williams %R Mean Reversion  
     **Parent Family:** Technical / Mean reversion  
     **Type:** Indicator-based  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Williams %R measures overbought/oversold; values below −80 suggest oversold; above −20 overbought.  
     **How it Works:** Enter long when %R crosses up from −80; short when crosses down from −20; exit at mid‑range.  
     **Typical Use Case:** Range markets.  
     **Known Users/Origin:** Larry Williams.  
     **Evidence Type:** Technical literature.  
     **Confidence Level:** Medium  
174. **Strategy Name:** Klinger Volume Oscillator Strategy  
     **Parent Family:** Technical / Momentum  
     **Type:** Indicator-based  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Klinger oscillator compares volume flowing in and out; cross above signal line indicates bullish; below bearish.  
     **How it Works:** Enter long on bullish cross; confirm with price trend; exit when cross reverses.  
     **Typical Use Case:** Traders using tick volume proxies.  
     **Known Users/Origin:** Stephen Klinger.  
     **Evidence Type:** Technical analysis.  
     **Confidence Level:** Low  
175. **Strategy Name:** Elder Triple Screen System  
     **Parent Family:** Technical / Multi‑timeframe  
     **Type:** System  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Use three screens: first to determine trend (e.g., weekly MACD), second to identify corrections (e.g., daily oscillator), third to time entry (e.g., intraday breakout).  
     **How it Works:** Align signals across screens; trade pullbacks in larger trend; exit with trailing stop.  
     **Typical Use Case:** Multi‑timeframe traders.  
     **Known Users/Origin:** Alexander Elder.  
     **Evidence Type:** Trading book.  
     **Confidence Level:** Medium  
176. **Strategy Name:** Gann Angle Trading  
     **Parent Family:** Technical  
     **Type:** Chart analysis  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Use Gann angles and geometric relationships to forecast support/resistance and time cycles.  
     **How it Works:** Draw 45‑degree angles from key highs/lows; trade when price respects angle; combine with time cycles.  
     **Typical Use Case:** Niche technical analysts.  
     **Known Users/Origin:** W.D. Gann.  
     **Evidence Type:** Historical trading literature.  
     **Confidence Level:** Low  
177. **Strategy Name:** Pivot Point Camarilla Strategy  
     **Parent Family:** Technical / Range  
     **Type:** Indicator-based  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Camarilla pivot points compute multiple intraday support/resistance levels; trade mean reversion within these levels.  
     **How it Works:** Buy at L3, sell at H3; breakout beyond H4/L4 signals strong trend; adjust stops accordingly.  
     **Typical Use Case:** Day traders focusing on intraday levels.  
     **Known Users/Origin:** Developed by Nick Scott.  
     **Evidence Type:** Technical trading.  
     **Confidence Level:** Low  
178. **Strategy Name:** Quantile Regression Forecasting  
     **Parent Family:** Quantitative  
     **Type:** Statistical  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Use quantile regression to forecast conditional quantiles (e.g., 5th and 95th percentile) of currency returns; trade when forecast distribution skews.  
     **How it Works:** Estimate model; if predicted distribution shows higher upside tail, open long; else short; close when distribution normalises.  
     **Typical Use Case:** Quant research.  
     **Known Users/Origin:** Academic; rarely implemented in retail.  
     **Evidence Type:** Econometrics.  
     **Confidence Level:** Low  
179. **Strategy Name:** Fractal Adaptive Moving Average (FRAMA)  
     **Parent Family:** Technical / Trend  
     **Type:** Indicator-based  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** FRAMA adapts period based on fractal dimension; shortens in trending markets and lengthens in choppy markets.  
     **How it Works:** Compute fractal dimension; adjust smoothing constant; trade crossovers or price vs FRAMA.  
     **Typical Use Case:** Algorithmic trend following.  
     **Known Users/Origin:** John Ehlers.  
     **Evidence Type:** Technical research.  
     **Confidence Level:** Low  
180. **Strategy Name:** Renko Chart Trend Trading  
     **Parent Family:** Technical / Price action  
     **Type:** Chart type  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Use Renko bricks filtering out time; only price movement matters; trending markets produce consecutive bricks.  
     **How it Works:** Go long when green bricks form consecutively; exit when brick colour changes; adjust brick size based on volatility.  
     **Typical Use Case:** Traders wanting noise reduction.  
     **Known Users/Origin:** Charting enthusiasts.  
     **Evidence Type:** Technical literature.  
     **Confidence Level:** Low  
181. **Strategy Name:** Point & Figure Breakout  
     **Parent Family:** Technical  
     **Type:** Chart type  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Point & Figure charts record price movement ignoring time; breakout when Xs or Os exceed previous column.  
     **How it Works:** Buy on bullish breakout of X column; sell on bearish breakout of O column; stops at previous pattern.  
     **Typical Use Case:** Long‑term trend analysis.  
     **Known Users/Origin:** Charles Dow; widely used historically.  
     **Evidence Type:** Technical analysis.  
     **Confidence Level:** Low  
182. **Strategy Name:** Tick Chart Scalping  
     **Parent Family:** Technical / Order flow  
     **Type:** Scalping  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Use tick charts (e.g., 133‑tick) to visualise every transaction; identify micro patterns for scalping.  
     **How it Works:** Combine tick charts with order flow; quick entries and exits; rely on speed.  
     **Typical Use Case:** Professional scalpers.  
     **Known Users/Origin:** Prop traders.  
     **Evidence Type:** Market practice.  
     **Confidence Level:** Low  
183. **Strategy Name:** Currency Strength Meter Strategy  
     **Parent Family:** Technical / Hybrid  
     **Type:** Indicator-based  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Currency strength meters compute aggregate strength of each currency across multiple pairs; trade strong vs weak.  
     **How it Works:** Identify strongest currency and weakest; pair them (e.g., strong GBP vs weak JPY); time entry with technical patterns.  
     **Typical Use Case:** Multi‑pair traders.  
     **Known Users/Origin:** Retail traders using custom indicators.  
     **Evidence Type:** Trading practice.  
     **Confidence Level:** Medium  
184. **Strategy Name:** Economic Surprise Index Strategy  
     **Parent Family:** Fundamental / Macro  
     **Type:** Quantitative  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Track Citi or Bloomberg economic surprise indices; positive surprises support currency; negative surprise weakens.  
     **How it Works:** Go long currencies with improving surprise index; short those with declining; adjust when index reverses.  
     **Typical Use Case:** Macro quant funds.  
     **Known Users/Origin:** Institutional analysts.  
     **Evidence Type:** Macro research.  
     **Confidence Level:** Low  
185. **Strategy Name:** Political Risk Premium Trading  
     **Parent Family:** Fundamental  
     **Type:** Event  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Countries with high political risk trade at discount; measure risk premium via CDS spreads; trade when mispriced.  
     **How it Works:** Short currency of country with widening CDS spreads; long when spreads tighten; adjust for global risk appetite.  
     **Typical Use Case:** Macro hedge funds.  
     **Known Users/Origin:** Institutional; not clearly attributable.  
     **Evidence Type:** Market research.  
     **Confidence Level:** Low  
186. **Strategy Name:** Geopolitical Hedging Using Safe‑Havens  
     **Parent Family:** Fundamental / Risk  
     **Type:** Hedging  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** During geopolitical tensions, allocate to safe‑haven currencies like CHF, JPY.  
     **How it Works:** Monitor geopolitical news; hedge portfolios by buying safe‑haven pairs; unwind when tension eases.  
     **Typical Use Case:** Global investors.  
     **Known Users/Origin:** Common practice.  
     **Evidence Type:** Market commentary.  
     **Confidence Level:** Medium  
187. **Strategy Name:** High‑Yield Bond Spread Indicator  
     **Parent Family:** Fundamental / Sentiment  
     **Type:** Indicator-based  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Widening high‑yield bond spreads indicate rising risk aversion; safe‑haven currencies may benefit; narrowing spreads favour risk currencies.  
     **How it Works:** Monitor credit spreads; adjust currency exposure accordingly.  
     **Typical Use Case:** Macro funds.  
     **Known Users/Origin:** Fixed income analysts.  
     **Evidence Type:** Macro research.  
     **Confidence Level:** Low  
188. **Strategy Name:** Purchasing Managers’ Index (PMI) Trend  
     **Parent Family:** Fundamental  
     **Type:** Economic indicator  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** PMI above 50 suggests economic expansion; higher PMI relative to other countries supports currency appreciation.  
     **How it Works:** Compare PMI data across economies; long currencies with rising PMI; short with falling.  
     **Typical Use Case:** Macro investors.  
     **Known Users/Origin:** Economic studies.  
     **Evidence Type:** Macro commentary.  
     **Confidence Level:** Medium  
189. **Strategy Name:** Speculative Position Unwind Strategy  
     **Parent Family:** Sentiment / COT  
     **Type:** Event  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** When speculative positioning is extreme and a catalyst triggers unwind, price moves quickly; trade after initial unwinding starts.  
     **How it Works:** Monitor COT extremes; wait for news or technical break; trade in direction of unwind; exit when positioning normalises.  
     **Typical Use Case:** Macro & sentiment traders.  
     **Known Users/Origin:** Hedge funds.  
     **Evidence Type:** COT article.  
     **Confidence Level:** Medium  
190. **Strategy Name:** Crowded Trade Fade  
     **Parent Family:** Sentiment  
     **Type:** Contrarian  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Identify crowded trades via positioning, analyst recommendations; take opposite side as consensus unwinds.  
     **How it Works:** Evaluate consensus trades; when cracks appear, enter contrarian position; requires patience and risk management.  
     **Typical Use Case:** Contrarian hedge funds.  
     **Known Users/Origin:** Macro funds; widely discussed.  
     **Evidence Type:** Sentiment research.  
     **Confidence Level:** Low  
191. **Strategy Name:** Quant Sentiment Index Overlay  
     **Parent Family:** Sentiment / Quant  
     **Type:** Quantitative  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Create composite sentiment index (COT, retail, options) and overlay onto technical signals; weight each component; adjust positions.  
     **How it Works:** Index \> \+1 suggests bullish; \< −1 bearish; trade accordingly; adjust weightings via optimization.  
     **Typical Use Case:** Quant funds.  
     **Known Users/Origin:** Research; origin unclear.  
     **Evidence Type:** Quant research.  
     **Confidence Level:** Low  
192. **Strategy Name:** Multi‑Asset Correlation Trade  
     **Parent Family:** Hybrid  
     **Type:** Confluence  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Trade FX based on correlations with other assets (equities, bonds); if correlation breaks, anticipate mean reversion.  
     **How it Works:** Monitor correlation matrix; if EUR/USD decouples from German bund yields, expect re‑convergence; trade accordingly.  
     **Typical Use Case:** Macro cross‑asset funds.  
     **Known Users/Origin:** Macro funds.  
     **Evidence Type:** Cross‑asset research.  
     **Confidence Level:** Low  
193. **Strategy Name:** News Volume Spike Scalping  
     **Parent Family:** News / Momentum  
     **Type:** Scalping  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Use tick volume spikes during news to scalp; trade with direction of spike; exit quickly.  
     **How it Works:** High volume indicates strong interest; enter at market; close after 5–10 pips or when volume subsides.  
     **Typical Use Case:** Scalpers during major releases.  
     **Known Users/Origin:** Event scalpers; not widely taught.  
     **Evidence Type:** Trading practice.  
     **Confidence Level:** Low  
194. **Strategy Name:** NFP Pre‑Positioning  
     **Parent Family:** News / Macro  
     **Type:** Event  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Based on previous data and consensus, take position ahead of Non‑Farm Payroll release expecting positive/negative surprise.  
     **How it Works:** Analyse labour market indicators; if expecting strong numbers, long USD; short if expecting weak; exit quickly after release.  
     **Typical Use Case:** Experienced news traders.  
     **Known Users/Origin:** Macro desks; widely used.  
     **Evidence Type:** Market practice.  
     **Confidence Level:** Low  
195. **Strategy Name:** Structural Break Detection  
     **Parent Family:** Quantitative / Statistical  
     **Type:** Risk management  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Detect structural breaks (e.g., regime changes) using statistical tests; pause or adapt trading strategy.  
     **How it Works:** Apply Chow test or Bai‑Perron test; if detected, reduce model reliance; update parameters.  
     **Typical Use Case:** Quant systems dealing with non‑stationarity.  
     **Known Users/Origin:** Academic.  
     **Evidence Type:** Econometric literature.  
     **Confidence Level:** Low  
196. **Strategy Name:** Overnight/Weekend Gap Strategy  
     **Parent Family:** Technical / Event  
     **Type:** Gap trading  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Price often gaps up/down at market open after weekend; gap may fill in early hours; trade accordingly.  
     **How it Works:** On Sunday open, measure gap relative to Friday close; if gap large, trade reversal expecting fill; exit when gap fills or stop triggered.  
     **Typical Use Case:** Swing and intraday traders.  
     **Known Users/Origin:** Retail traders; not clearly attributable.  
     **Evidence Type:** Market practice.  
     **Confidence Level:** Low  
197. **Strategy Name:** Opening Range Fade  
     **Parent Family:** Technical / Breakout  
     **Type:** Range trading  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Opposite of opening range breakout; fade move after initial surge; price often retraces back into opening range.  
     **How it Works:** Wait for breakout to fail; take opposite position; exit near mid-range.  
     **Typical Use Case:** Mean reversion intraday traders.  
     **Known Users/Origin:** Floor traders.  
     **Evidence Type:** Market practice.  
     **Confidence Level:** Low  
198. **Strategy Name:** Overnight Carry Basket with Stop‑Loss  
     **Parent Family:** Carry / Risk  
     **Type:** Basket  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Hold basket of carry trades overnight to collect interest; incorporate stop‑loss to protect against adverse moves (e.g., central bank surprise).  
     **How it Works:** Select pairs with high interest differential; open positions; set wide stop; exit on macro shifts.  
     **Typical Use Case:** Yield seeking; risk controlled.  
     **Known Users/Origin:** Carry traders; widely practiced.  
     **Evidence Type:** Carry trade article.  
     **Confidence Level:** Medium  
199. **Strategy Name:** Time Decay Arbitrage in FX Options  
     **Parent Family:** Options / Arbitrage  
     **Type:** Quantitative  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Short options with high implied volatility; hedge delta; collect theta (time decay) if realized volatility is lower.  
     **How it Works:** Sell strangles or butterflies; manage risk; if realized volatility stays low, profit.  
     **Typical Use Case:** Options desks.  
     **Known Users/Origin:** Volatility traders.  
     **Evidence Type:** Options practice.  
     **Confidence Level:** Low  
200. **Strategy Name:** FX Forward Spread Trading  
     **Parent Family:** Arbitrage / Interest rate  
     **Type:** Quantitative  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Trade spreads between FX forward points of two currencies when spreads deviate from historical relationship.  
     **How it Works:** Long forward in undervalued currency; short forward in overvalued; profit from convergence; hedge spot exposure.  
     **Typical Use Case:** Banks and hedge funds.  
     **Known Users/Origin:** Institutional.  
     **Evidence Type:** Market practice.  
     **Confidence Level:** Low  
201. **Strategy Name:** Realized vs Implied Volatility Spread  
     **Parent Family:** Options / Volatility  
     **Type:** Strategy  
     **Core/Subtype/Variation:** Variation  
     **Core Logic:** Compare implied volatility of options with realized volatility; if implied \> realized, sell options; if implied \< realized, buy options.  
     **How it Works:** Use historical vol to estimate; trade accordingly; hedge delta.  
     **Typical Use Case:** Options funds.  
     **Known Users/Origin:** Volatility arbitrageurs.  
     **Evidence Type:** Options literature.  
     **Confidence Level:** Low

---

### **Explanation**

This catalog covers more than 200 forex trading strategies across technical, fundamental, sentiment, institutional, algorithmic, hybrid, and risk‑management categories. Each entry includes a structured description and cites evidence for the core families and representative strategies from reputable sources such as broker articles and academic literature. Variations are derived logically from core strategies (e.g., using different indicators, timeframes, confirmation filters, or market conditions). When origins are unclear, this is noted. Confidence levels reflect how well‑documented and widely practised each strategy is; low confidence indicates niche or experimental strategies requiring further validation.

