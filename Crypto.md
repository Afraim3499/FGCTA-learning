# **Comprehensive Map of Cryptocurrency Trading Strategies**

This document catalogues a wide array of cryptocurrency trading strategies. Each entry is organized with the following fields:

* **Strategy Name**: descriptive title.  
* **Parent Family**: broader family or category.  
* **Type**: core, subtype or variation.  
* **Core/ Subtype/ Variation**: indicates whether it is a primary strategy, derivative subtype, or minor variation.  
* **Core Logic (2–3 lines)**: brief description of the strategy’s main concept.  
* **How it Works (mechanics only)**: operational steps or algorithm of the strategy.  
* **Typical Use Case**: common scenario in which this strategy is applied.  
* **Known Users / Origin**: known traders or institutions employing it; if unknown, stated as not clearly attributable.  
* **Evidence Type**: indicates whether evidence comes from academic research, institutional practice, exchange documentation, crypto‑native sources or common practice.  
* **Confidence Level**: High/Medium/Low depending on available sources.

All strategies are non‑duplicative and sorted into mandated categories. Variants (e.g., timeframe, confirmation, market condition) are included when they materially change implementation. Citations supporting the underlying concepts are provided using tether IDs like.

## **1 Technical Strategies**

### **1.1 Trend‑following Strategies**

1. **SMA Crossover Trend**  
   * **Parent Family**: Trend following  
   * **Type**: Core  
   * **Core Logic**: This strategy uses a short‑term simple moving average (SMA) crossing a longer‑term SMA to identify trend direction. When the short SMA crosses above the long SMA, the trend is considered bullish; a cross below signals bearishness.  
   * **How it Works**: Calculate two SMAs (e.g., 50‑day and 200‑day). Enter long when the short SMA crosses above the long SMA; exit or go short when it crosses below.  
   * **Typical Use Case**: Swing or position trading on major crypto pairs like BTC/USDT.  
   * **Known Users / Origin**: Widely used by technical traders; origin not clearly attributable.  
   * **Evidence Type**: Common practice; technical analysis literature.  
   * **Confidence Level**: High.  
2. **EMA Crossover Trend**  
   * **Parent Family**: Trend following  
   * **Type**: Subtype  
   * **Core Logic**: Similar to the SMA crossover but uses exponential moving averages (EMAs), which weight recent prices more heavily.  
   * **How it Works**: Compute a fast EMA (e.g., 9‑day) and a slow EMA (e.g., 26‑day). Signal is bullish when the fast EMA crosses above the slow EMA; bearish when the reverse occurs.  
   * **Typical Use Case**: Short‑term crypto trading where responsiveness is critical.  
   * **Known Users / Origin**: Momentum traders; origin not clearly attributable.  
   * **Evidence Type**: Common practice.  
   * **Confidence Level**: High.  
3. **Weighted Moving Average (WMA) Trend**  
   * **Parent Family**: Trend following  
   * **Type**: Subtype  
   * **Core Logic**: Uses a weighted moving average that assigns linearly decreasing weights to older prices, allowing faster response to recent price changes.  
   * **How it Works**: Compute WMA with specified period; signals are similar to SMA crossover.  
   * **Typical Use Case**: Day trading volatile altcoins where quick reaction is needed.  
   * **Known Users / Origin**: Not clearly attributable.  
   * **Evidence Type**: Technical analysis literature.  
   * **Confidence Level**: Medium.  
4. **Dual Moving Average Filter**  
   * **Parent Family**: Trend following  
   * **Type**: Variation  
   * **Core Logic**: Employs a long‑term SMA to define primary trend and a short‑term EMA to refine entries.  
   * **How it Works**: Trade only in direction of the long SMA slope; use EMA crossover or price crossing EMA to enter.  
   * **Typical Use Case**: Reduces whipsaws during volatile markets.  
   * **Known Users / Origin**: Quant funds; details not clearly attributable.  
   * **Evidence Type**: Common practice.  
   * **Confidence Level**: Medium.  
5. **Golden Cross / Death Cross**  
   * **Parent Family**: Trend following  
   * **Type**: Variation  
   * **Core Logic**: A golden cross occurs when the 50‑day SMA crosses above the 200‑day SMA; a death cross occurs when it crosses below. These events signal long‑term bullish or bearish trends.  
   * **How it Works**: Watch 50/200 SMA crossover; open long after golden cross confirmation; short or reduce exposure at death cross.  
   * **Typical Use Case**: Long‑term investors adjusting exposure to BTC/Ethereum.  
   * **Known Users / Origin**: Popularized in stock markets; used by crypto analysts.  
   * **Evidence Type**: Common practice.  
   * **Confidence Level**: High.  
6. **Triple Moving Average System**  
   * **Parent Family**: Trend following  
   * **Type**: Subtype  
   * **Core Logic**: Uses three MAs (short, medium, long) to refine trends. Entry occurs when the short crosses above both medium and long; exit when it crosses below.  
   * **How it Works**: Compute 20‑, 50‑ and 100‑period EMAs; require alignment of averages for entries.  
   * **Typical Use Case**: Filtering out noise in trending altcoins.  
   * **Known Users / Origin**: Not clearly attributable.  
   * **Evidence Type**: Technical analysis textbooks.  
   * **Confidence Level**: Medium.  
7. **Parabolic SAR Trend**  
   * **Parent Family**: Trend following  
   * **Type**: Subtype  
   * **Core Logic**: The Parabolic Stop‑and‑Reverse indicator plots trailing stops that move closer to price as the trend develops; when price crosses the SAR, the trend is considered over.  
   * **How it Works**: Calculate SAR; stay long if price remains above SAR; reverse to short when price breaks below SAR.  
   * **Typical Use Case**: Trend following with built‑in stop management.  
   * **Known Users / Origin**: Created by Welles Wilder; widely used.  
   * **Evidence Type**: Common practice.  
   * **Confidence Level**: Medium.  
8. **Adaptive Moving Average Trend**  
   * **Parent Family**: Trend following  
   * **Type**: Subtype  
   * **Core Logic**: Utilizes volatility or other market conditions to adapt the smoothing constant of an MA, providing faster response in trends and slower response in congestion.  
   * **How it Works**: Calculate efficiency ratio; adjust MA smoothing factor accordingly.  
   * **Typical Use Case**: Algorithmic trading requiring dynamic sensitivity.  
   * **Known Users / Origin**: Not clearly attributable.  
   * **Evidence Type**: Academic research.  
   * **Confidence Level**: Low.  
9. **Heikin‑Ashi Trend Filter**  
   * **Parent Family**: Trend following  
   * **Type**: Variation  
   * **Core Logic**: Uses Heikin‑Ashi candlestick transformation to smooth price series; entries are made when candles flip from red to green (or vice versa).  
   * **How it Works**: Convert price candles to Heikin‑Ashi; maintain position while candles remain the same colour; exit when they change.  
   * **Typical Use Case**: Trend filtering on daily crypto charts.  
   * **Known Users / Origin**: Trader community; origin not clearly attributable.  
   * **Evidence Type**: Common practice.  
   * **Confidence Level**: Medium.  
10. **Supertrend Indicator Strategy**  
* **Parent Family**: Trend following  
* **Type**: Subtype  
* **Core Logic**: Supertrend uses the ATR and a multiplier to plot dynamic support/resistance; price above the Supertrend indicates a long position, while below indicates short.  
* **How it Works**: Compute ATR; build Supertrend line; trade directionally based on price relative to the line.  
* **Typical Use Case**: Spot or perpetual trading of trending coins.  
* **Known Users / Origin**: Not clearly attributable.  
* **Evidence Type**: Technical indicator references.  
* **Confidence Level**: Low.  
11. **Donchian Channel Breakout**  
* **Parent Family**: Trend following / Breakout  
* **Type**: Core  
* **Core Logic**: Breaks above/below the highest high or lowest low over a set period signal new momentum.  
* **How it Works**: Define channel high and low over 20 days; enter long on breakout above the channel high; exit if price closes below channel midpoint; reverse for shorts.  
* **Typical Use Case**: Systematic trend strategies across a diversified portfolio of coins.  
* **Known Users / Origin**: Originated with turtle traders; used by CTA programs.  
* **Evidence Type**: Institutional practice.  
* **Confidence Level**: High.  
12. **Volatility Breakout (ATR) Strategy**  
* **Parent Family**: Breakout  
* **Type**: Subtype  
* **Core Logic**: Uses Average True Range (ATR) to define volatility bands; trades when price moves beyond a multiple of ATR from recent close.  
* **How it Works**: Compute ATR; set stop orders above and below the current price at distance of k×ATR; take breakout trades; adjust stops using ATR.  
* **Typical Use Case**: Capturing strong moves during news events in crypto.  
* **Known Users / Origin**: Popular with quant funds; origin not clearly attributable.  
* **Evidence Type**: Common practice.  
* **Confidence Level**: Medium.  
13. **Range Breakout at Support/Resistance**  
* **Parent Family**: Breakout  
* **Type**: Variation  
* **Core Logic**: Identify horizontal support/resistance levels where price previously bounced or reversed; trade breakouts when price closes above resistance or below support.  
* **How it Works**: Use previous highs/lows or pivot points; set entry orders above/below; confirm with volume spike; place stop loss on opposite side.  
* **Typical Use Case**: Day or swing trading trending altcoins.  
* **Known Users / Origin**: Common practice among technical traders.  
* **Evidence Type**: Technical analysis articles.  
* **Confidence Level**: High.  
14. **Gap Breakout Strategy**  
* **Parent Family**: Breakout  
* **Type**: Variation  
* **Core Logic**: Even though crypto trades 24/7, gaps can occur on lower‑liquidity tokens between exchange sessions or on weekend closes; trading the breakout from gap boundaries yields momentum.  
* **How it Works**: Identify small price gaps on daily chart; trade continuation if price closes above gap high; set stops below gap midpoint.  
* **Typical Use Case**: Lower‑volume exchange tokens.  
* **Known Users / Origin**: Not clearly attributable.  
* **Evidence Type**: Common practice.  
* **Confidence Level**: Low.  
15. **Asia Session Breakout**  
* **Parent Family**: Breakout  
* **Type**: Variation  
* **Core Logic**: Crypto markets exhibit intraday volatility patterns; Asia session highs/lows can act as range boundaries for subsequent breakouts.  
* **How it Works**: Define Asia session (e.g., 00:00–08:00 UTC); mark high and low; set entry orders outside this range for London/New York sessions.  
* **Typical Use Case**: Day trading on BTC and ETH futures.  
* **Known Users / Origin**: Adapted from Forex strategies; origin not clearly attributable.  
* **Evidence Type**: Common practice.  
* **Confidence Level**: Low.  
16. **Mean Reversion via Bollinger Bands**  
* **Parent Family**: Mean reversion  
* **Type**: Core  
* **Core Logic**: Bollinger Bands define a price envelope around a moving average; prices that touch or move outside the bands often revert to the mean.  
* **How it Works**: Calculate midline (20‑period SMA) and ±2 standard deviation bands; short when price closes above upper band; long when below lower band; exit near midline.  
* **Typical Use Case**: Range‑bound altcoins.  
* **Known Users / Origin**: Introduced by John Bollinger; widely used.  
* **Evidence Type**: Common practice.  
* **Confidence Level**: High.  
17. **Keltner Channel Mean Reversion**  
* **Parent Family**: Mean reversion  
* **Type**: Subtype  
* **Core Logic**: Uses ATR‑based envelope around an EMA; trades when price deviates from the channel.  
* **How it Works**: Compute EMA and channel width \= ATR× multiplier; short when price exceeds upper band; long when below lower band; exit at EMA.  
* **Typical Use Case**: Swing trading altcoins with moderate volatility.  
* **Known Users / Origin**: Not clearly attributable.  
* **Evidence Type**: Technical indicator references.  
* **Confidence Level**: Medium.  
18. **RSI Overbought/Oversold Mean Reversion**  
* **Parent Family**: Mean reversion / Momentum  
* **Type**: Subtype  
* **Core Logic**: Relative Strength Index (RSI) above 70 indicates overbought; below 30 indicates oversold; expectation is that price will revert toward its recent average.  
* **How it Works**: Go short when RSI \>70 and price shows weakening momentum; go long when RSI \<30; exit when RSI returns to mid‑range.  
* **Typical Use Case**: Counter‑trend trading on range‑bound assets.  
* **Known Users / Origin**: RSI created by Wilder; widely used.  
* **Evidence Type**: Common practice.  
* **Confidence Level**: High.  
19. **Z‑Score Mean Reversion**  
* **Parent Family**: Mean reversion  
* **Type**: Subtype  
* **Core Logic**: Computes z‑score of price relative to a moving average and standard deviation; extremes indicate overbought/oversold conditions.  
* **How it Works**: Determine z \= (price − mean)/std; enter contrarian positions when z exceeds ±2; exit when z returns to zero.  
* **Typical Use Case**: Automated mean reversion bots across altcoins.  
* **Known Users / Origin**: Quant traders; not clearly attributable.  
* **Evidence Type**: Quant finance.  
* **Confidence Level**: Medium.  
20. **Pair‑wise Mean Reversion (Statistical Arbitrage)**  
* **Parent Family**: Mean reversion / Statistical arbitrage  
* **Type**: Subtype  
* **Core Logic**: Identifies cointegrated pairs of cryptocurrencies; if their spread deviates from historical mean, trade anticipating reversion.  
* **How it Works**: Conduct cointegration test on BTC/ETH or other pairs; long the undervalued asset and short the overvalued asset; close when spread normalizes.  
* **Typical Use Case**: Neutral portfolios in hedge funds.  
* **Known Users / Origin**: Quantitative hedge funds; described in dYdX article.  
* **Evidence Type**: Academic / Institutional.  
* **Confidence Level**: High.  
21. **Momentum Strength Strategy**  
* **Parent Family**: Momentum  
* **Type**: Core  
* **Core Logic**: Buys assets with highest recent returns, expecting momentum to persist.  
* **How it Works**: Rank a universe of coins by 1‑week or 1‑month performance; allocate capital to top decile; rebalance periodically.  
* **Typical Use Case**: Trend‑following portfolio rotation.  
* **Known Users / Origin**: Research on momentum anomalies; widely used.  
* **Evidence Type**: Academic & common practice.  
* **Confidence Level**: High.  
22. **Volume‑Weighted Momentum**  
* **Parent Family**: Momentum  
* **Type**: Subtype  
* **Core Logic**: Incorporates volume by weighting returns by relative volume; high volume increases conviction in momentum.  
* **How it Works**: Compute momentum \* relative volume factor (RVOL \>1 means strong momentum); sort assets accordingly; trade top scorers.  
* **Typical Use Case**: Screening altcoins for breakouts.  
* **Known Users / Origin**: Data scientists; not clearly attributable.  
* **Evidence Type**: Volume analysis article.  
* **Confidence Level**: Medium.  
23. **RSI Momentum Strategy**  
* **Parent Family**: Momentum  
* **Type**: Variation  
* **Core Logic**: Takes trades in direction of RSI trend; if RSI crosses 50 upward, bullish momentum; downward cross signals bearish.  
* **How it Works**: Monitor RSI crossing 50; pair with moving average cross to enter trending trades.  
* **Typical Use Case**: Combine momentum and trend signals.  
* **Known Users / Origin**: Not clearly attributable.  
* **Evidence Type**: Common practice.  
* **Confidence Level**: Medium.  
24. **MACD Histogram Momentum**  
* **Parent Family**: Momentum / Indicator  
* **Type**: Subtype  
* **Core Logic**: Uses MACD histogram crossing zero to identify acceleration of momentum; positive histogram indicates bullish momentum, negative indicates bearish.  
* **How it Works**: Calculate MACD (difference between fast and slow EMAs) and its signal line; histogram crossing zero triggers entries; exit when histogram reverts.  
* **Typical Use Case**: Swing trading major pairs.  
* **Known Users / Origin**: Popularized in technical analysis.  
* **Evidence Type**: Common practice.  
* **Confidence Level**: High.  
25. **Price‑Rate‑of‑Change (ROC) Strategy**  
* **Parent Family**: Momentum  
* **Type**: Subtype  
* **Core Logic**: Measures percentage change over a specified period; positive momentum triggers buys, negative triggers sells.  
* **How it Works**: Compute ROC \= (current price − price n periods ago)/price n periods ago; trade when ROC crosses above/below 0\.  
* **Typical Use Case**: Short‑term momentum trading on altcoins.  
* **Known Users / Origin**: Not clearly attributable.  
* **Evidence Type**: Technical analysis reference.  
* **Confidence Level**: Low.  
26. **Ichimoku Cloud Trend**  
* **Parent Family**: Indicator‑based / Trend  
* **Type**: Core  
* **Core Logic**: Uses cloud (Kumo), conversion line, and base line to identify trend, support/resistance and momentum.  
* **How it Works**: Go long when price is above the cloud and conversion line crosses above base line; exit when price falls into the cloud.  
* **Typical Use Case**: Swing trading major crypto pairs.  
* **Known Users / Origin**: Derived from Japanese trading; widely used.  
* **Evidence Type**: Common practice.  
* **Confidence Level**: Medium.  
27. **Stochastic Oscillator Strategy**  
* **Parent Family**: Indicator‑based / Momentum  
* **Type**: Subtype  
* **Core Logic**: Compares closing price to its price range over time; signals overbought/oversold conditions.  
* **How it Works**: Compute %K and %D lines; buy when %K crosses above %D below 20; sell when %K crosses below %D above 80\.  
* **Typical Use Case**: Short‑term mean reversion trades.  
* **Known Users / Origin**: Not clearly attributable.  
* **Evidence Type**: Technical indicator references.  
* **Confidence Level**: Medium.  
28. **Commodity Channel Index (CCI) Strategy**  
* **Parent Family**: Indicator‑based  
* **Type**: Subtype  
* **Core Logic**: CCI measures deviation from typical price; extreme positive values (above \+100) indicate overbought; negative values (below −100) indicate oversold.  
* **How it Works**: Enter long when CCI moves from below −100 to above −100; short when it moves from above \+100 to below \+100.  
* **Typical Use Case**: Volatile altcoin markets.  
* **Known Users / Origin**: Not clearly attributable.  
* **Evidence Type**: Technical analysis.  
* **Confidence Level**: Low.  
29. **ATR Channel Trend**  
* **Parent Family**: Indicator‑based  
* **Type**: Subtype  
* **Core Logic**: ATR bands above and below price act as dynamic stop and reverse levels; similar to Keltner but purely ATR‑based.  
* **How it Works**: Compute ATR; set channel; buy when price closes above upper channel; sell when below lower; exit on midline cross.  
* **Typical Use Case**: Trend trading with built‑in volatility stops.  
* **Known Users / Origin**: Not clearly attributable.  
* **Evidence Type**: Technical indicator references.  
* **Confidence Level**: Low.  
30. **Volume‑Price Confirmation**  
* **Parent Family**: Indicator‑based / Volume  
* **Type**: Variation  
* **Core Logic**: Uses relative volume (RVOL) to confirm price breakouts; high RVOL indicates strong conviction.  
* **How it Works**: Monitor RVOL; only trade breakouts when RVOL \>2; avoid false breakouts when RVOL \<1.  
* **Typical Use Case**: Filtering breakout trades on altcoins.  
* **Known Users / Origin**: Traders referencing RVOL article.  
* **Evidence Type**: Crypto trading education.  
* **Confidence Level**: Medium.  
31. **On‑Balance Volume (OBV) Divergence**  
* **Parent Family**: Volume analysis  
* **Type**: Core  
* **Core Logic**: OBV adds/subtracts volume depending on whether price closes higher or lower; divergence between OBV and price signals reversal.  
* **How it Works**: Identify when price makes new highs but OBV fails; short; or when price makes new lows but OBV rises; long.  
* **Typical Use Case**: Spot trades on altcoins.  
* **Known Users / Origin**: Not clearly attributable.  
* **Evidence Type**: Technical analysis.  
* **Confidence Level**: Medium.  
32. **VWAP Trend Reversal**  
* **Parent Family**: Volume analysis  
* **Type**: Variation  
* **Core Logic**: Volume Weighted Average Price (VWAP) serves as dynamic mean; price crossing above VWAP after downtrend signals reversal.  
* **How it Works**: Monitor intraday VWAP; long when price crosses above and holds; short when below.  
* **Typical Use Case**: Intraday trading on perpetual futures.  
* **Known Users / Origin**: Institutional traders.  
* **Evidence Type**: Institutional practice.  
* **Confidence Level**: Medium.  
33. **Support and Resistance Bounce**  
* **Parent Family**: Price action / Support & Resistance  
* **Type**: Core  
* **Core Logic**: Buys near support zones and sells near resistance zones when price action indicates a bounce.  
* **How it Works**: Identify horizontal support/resistance; enter when price tests support with confirmation (bullish candle); place stop below support; target resistance.  
* **Typical Use Case**: Range trading on high‑cap coins.  
* **Known Users / Origin**: Day traders.  
* **Evidence Type**: Technical analysis article.  
* **Confidence Level**: High.  
34. **Support/Resistance Scalping**  
* **Parent Family**: Price action / Support & Resistance  
* **Type**: Variation  
* **Core Logic**: Scalps small moves between micro support/resistance levels within a range.  
* **How it Works**: Use five‑minute chart; mark intraday levels; place limit orders at edges; use tight stops.  
* **Typical Use Case**: High‑frequency day trading.  
* **Known Users / Origin**: Not clearly attributable.  
* **Evidence Type**: Common practice.  
* **Confidence Level**: Low.  
35. **Bullish Engulfing Pattern**  
* **Parent Family**: Price action / Pattern‑based  
* **Type**: Core  
* **Core Logic**: A small bearish candle followed by a larger bullish candle that completely engulfs it signals reversal of a downtrend.  
* **How it Works**: Identify pattern; enter long on close of the second candle; place stop below pattern; combine with volume confirmation.  
* **Typical Use Case**: Short‑term reversal trading on liquid coins.  
* **Known Users / Origin**: Technical analysis literature.  
* **Evidence Type**: Crypto education article.  
* **Confidence Level**: High.  
36. **Bearish Engulfing Pattern**  
* **Parent Family**: Price action / Pattern‑based  
* **Type**: Subtype  
* **Core Logic**: A small bullish candle followed by a larger bearish candle indicates trend reversal downward.  
* **How it Works**: Short after pattern forms; stop above high of second candle.  
* **Typical Use Case**: Reversal after a rally.  
* **Known Users / Origin**: Technical analysis.  
* **Evidence Type**: Common practice.  
* **Confidence Level**: Medium.  
37. **Pin Bar / Hammer Pattern**  
* **Parent Family**: Price action / Pattern‑based  
* **Type**: Subtype  
* **Core Logic**: A candle with a long lower wick and small body indicates rejection of lower prices and potential upward reversal.  
* **How it Works**: Wait for hammer after a decline; enter long when next candle breaks high; stop below low.  
* **Typical Use Case**: Spot trading on high‑caps.  
* **Known Users / Origin**: Candlestick charting; widely used.  
* **Evidence Type**: Common practice.  
* **Confidence Level**: Medium.  
38. **Shooting Star / Inverted Hammer**  
* **Parent Family**: Price action / Pattern‑based  
* **Type**: Subtype  
* **Core Logic**: A candle with a long upper wick and small body indicates rejection of higher prices; signals potential bearish reversal.  
* **How it Works**: Short when next candle trades below low of shooting star; place stop above high.  
* **Typical Use Case**: Shorting after rallies.  
* **Known Users / Origin**: Candlestick charting.  
* **Evidence Type**: Common practice.  
* **Confidence Level**: Medium.  
39. **Inside Bar Breakout**  
* **Parent Family**: Price action / Pattern‑based  
* **Type**: Subtype  
* **Core Logic**: An inside bar is a candle with a lower high and higher low than the previous candle; breakouts from inside bar range often signal continuation.  
* **How it Works**: Place buy stop above high and sell stop below low of inside bar; whichever triggers first becomes trade direction; stop placed at opposite side.  
* **Typical Use Case**: Pre-news consolidation breakouts.  
* **Known Users / Origin**: Price action traders.  
* **Evidence Type**: Common practice.  
* **Confidence Level**: Low.  
40. **Head and Shoulders Top**  
* **Parent Family**: Pattern‑based  
* **Type**: Core  
* **Core Logic**: Formation of a left shoulder, head, and right shoulder signals distribution and potential trend reversal downward.  
* **How it Works**: Identify pattern; draw neckline; enter short on break of neckline; place stop above right shoulder.  
* **Typical Use Case**: End of bull runs.  
* **Known Users / Origin**: Classical chartists.  
* **Evidence Type**: Common practice.  
* **Confidence Level**: Medium.  
41. **Inverse Head and Shoulders**  
* **Parent Family**: Pattern‑based  
* **Type**: Subtype  
* **Core Logic**: Opposite of head and shoulders; indicates accumulation and trend reversal upward.  
* **How it Works**: Enter long on neckline breakout.  
* **Typical Use Case**: Bottoming patterns on large caps.  
* **Known Users / Origin**: Chartists.  
* **Evidence Type**: Common practice.  
* **Confidence Level**: Medium.  
42. **Descending Triangle Breakout**  
* **Parent Family**: Pattern‑based  
* **Type**: Subtype  
* **Core Logic**: Series of lower highs and horizontal support; often leads to bearish breakout.  
* **How it Works**: Short when price breaks below horizontal support; stop above last lower high.  
* **Typical Use Case**: Bear markets.  
* **Known Users / Origin**: Chartists.  
* **Evidence Type**: Common practice.  
* **Confidence Level**: Medium.  
43. **Ascending Triangle Breakout**  
* **Parent Family**: Pattern‑based  
* **Type**: Subtype  
* **Core Logic**: Horizontal resistance with higher lows; typically resolves upward.  
* **How it Works**: Long on breakout above horizontal resistance; stop below last higher low.  
* **Typical Use Case**: Accumulation phases.  
* **Known Users / Origin**: Chartists.  
* **Evidence Type**: Common practice.  
* **Confidence Level**: Medium.  
44. **Symmetrical Triangle Breakout**  
* **Parent Family**: Pattern‑based  
* **Type**: Subtype  
* **Core Logic**: Converging trend lines with lower highs and higher lows; breakout can occur in either direction.  
* **How it Works**: Place entry orders on both sides; whichever triggers determines direction; stop on opposite side.  
* **Typical Use Case**: Pre‑breakout consolidation.  
* **Known Users / Origin**: Chartists.  
* **Evidence Type**: Common practice.  
* **Confidence Level**: Low.  
45. **Flag and Pennant Continuation**  
* **Parent Family**: Pattern‑based  
* **Type**: Subtype  
* **Core Logic**: Short‑term consolidation after a sharp move forms a flag or pennant; price usually continues in direction of preceding move.  
* **How it Works**: Identify flag; enter in direction of original move when price breaks out of consolidation; stop at opposite side.  
* **Typical Use Case**: Trend continuation following news events.  
* **Known Users / Origin**: Chartists.  
* **Evidence Type**: Common practice.  
* **Confidence Level**: Medium.

### **1.2 Machine‑Learning & Predictive Technical**

46. **ML Regression Price Prediction**  
* **Parent Family**: Algorithmic / ML  
* **Type**: Core  
* **Core Logic**: Uses machine‑learning regression models (e.g., linear regression, random forest, neural nets) trained on historical price and technical indicators to predict near‑future prices.  
* **How it Works**: Collect historical data; engineer features (MA, RSI, MACD); train model; use predictions to inform buy/sell decisions; manage risk as predictions are probabilistic.  
* **Typical Use Case**: Quant funds seeking edge in forecasting.  
* **Known Users / Origin**: Data scientists; origin not clearly attributable.  
* **Evidence Type**: Academic / ML research.  
* **Confidence Level**: Medium.  
47. **Reinforcement Learning Trading Bot**  
* **Parent Family**: Algorithmic / ML  
* **Type**: Subtype  
* **Core Logic**: Uses reinforcement learning to learn optimal actions (buy, sell, hold) by maximizing reward (profit) through trial and error in simulated markets.  
* **How it Works**: Define state space (price history, indicators); define reward function; train agent in environment; deploy agent to trade small positions; adapt to new data.  
* **Typical Use Case**: Experimental research; small capital.  
* **Known Users / Origin**: Research labs; no mainstream adoption.  
* **Evidence Type**: Academic research.  
* **Confidence Level**: Low.  
48. **Sentiment‑Driven ML Model**  
* **Parent Family**: Algorithmic / ML  
* **Type**: Variation  
* **Core Logic**: Integrates social media sentiment (Twitter, Reddit) into ML models to predict price movements; uses natural language processing to score sentiment.  
* **How it Works**: Scrape posts; compute sentiment index; add as feature to regression or classification model; trade when sentiment diverges from price.  
* **Typical Use Case**: Anticipating narrative‑driven pumps/dumps.  
* **Known Users / Origin**: Hedge funds; not widely disclosed.  
* **Evidence Type**: Common practice (sentiment analysis).  
* **Confidence Level**: Medium.  
49. **Autoencoder Anomaly Detection**  
* **Parent Family**: Algorithmic / ML  
* **Type**: Variation  
* **Core Logic**: Uses autoencoders to learn normal price patterns and detect anomalies (potential breakout points).  
* **How it Works**: Train autoencoder on historical price sequences; compute reconstruction error; large errors indicate abnormal events; take trades accordingly.  
* **Typical Use Case**: Early detection of pump‑and‑dump schemes.  
* **Known Users / Origin**: Research communities; limited adoption.  
* **Evidence Type**: Academic research.  
* **Confidence Level**: Low.  
50. **Genetic Algorithm Strategy Optimization**  
* **Parent Family**: Algorithmic / ML  
* **Type**: Subtype  
* **Core Logic**: Uses genetic algorithms to evolve and optimize parameters of trading rules (e.g., MA periods).  
* **How it Works**: Encode parameters as chromosomes; evaluate performance; use selection, crossover, mutation to produce better strategies; iterate.  
* **Typical Use Case**: Parameter tuning for algorithmic strategies.  
* **Known Users / Origin**: Quant researchers.  
* **Evidence Type**: Academic research.  
* **Confidence Level**: Low.

### **1.3 High‑Frequency & Algorithmic Execution**

51. **High‑Frequency Market Making**  
* **Parent Family**: Algorithmic / HFT  
* **Type**: Core  
* **Core Logic**: Places numerous small bid and ask orders and continuously updates them to profit from tiny spreads; requires low latency and high speed.  
* **How it Works**: Co‑locate servers near exchange; monitor order book; adjust quotes; hedge inventory risk with offsetting trades; rely on speed advantage.  
* **Typical Use Case**: Professional trading firms providing liquidity.  
* **Known Users / Origin**: HFT firms; widely used.  
* **Evidence Type**: Industry reports.  
* **Confidence Level**: High.  
52. **Latency Arbitrage**  
* **Parent Family**: Algorithmic / HFT  
* **Type**: Subtype  
* **Core Logic**: Exploits small price discrepancies across exchanges due to latency; buys on slow exchange and sells on fast one before prices converge.  
* **How it Works**: Use co‑location and direct market access to monitor price feeds; automatically execute cross‑exchange trades within microseconds.  
* **Typical Use Case**: Professional HFT shops.  
* **Known Users / Origin**: Proprietary trading firms.  
* **Evidence Type**: Industry practice.  
* **Confidence Level**: Medium.  
53. **TWAP Execution Algorithm**  
* **Parent Family**: Algorithmic / Execution  
* **Type**: Core  
* **Core Logic**: Time‑Weighted Average Price algorithm splits a large order into smaller pieces executed evenly over a set period to minimize market impact.  
* **How it Works**: Determine total order size and timeframe; send equal‑sized slices at regular intervals; monitor slippage.  
* **Typical Use Case**: Institutional investors entering/exiting positions quietly.  
* **Known Users / Origin**: Institutional desks.  
* **Evidence Type**: Institutional practice.  
* **Confidence Level**: Medium.  
54. **VWAP Execution Algorithm**  
* **Parent Family**: Algorithmic / Execution  
* **Type**: Subtype  
* **Core Logic**: Splits orders to match the volume distribution of the market, aiming to achieve an average execution price close to the volume‑weighted average price.  
* **How it Works**: Track intraday volume curve; trade more when volume is high, less when low; adjust to minimize slippage.  
* **Typical Use Case**: Large block trades in low‑liquidity tokens.  
* **Known Users / Origin**: Execution desks.  
* **Evidence Type**: Institutional practice.  
* **Confidence Level**: Medium.  
55. **Iceberg Orders**  
* **Parent Family**: Algorithmic / Execution  
* **Type**: Variation  
* **Core Logic**: Splits a large order into multiple small visible orders to hide true size; reduces market impact.  
* **How it Works**: Use exchange features to display only a small portion; rest sits in hidden order book; refresh as each portion fills.  
* **Typical Use Case**: Entering/exiting positions discreetly.  
* **Known Users / Origin**: Institutional traders.  
* **Evidence Type**: Common practice.  
* **Confidence Level**: Medium.

### **1.4 Hybrid Timeframe & Confirmation Variants**

56. **Multi‑Timeframe Trend Confluence**  
* **Parent Family**: Hybrid  
* **Type**: Core  
* **Core Logic**: Aligns trend signals across multiple timeframes (e.g., daily and four‑hour) to increase confidence.  
* **How it Works**: Only enter trades when both higher and lower timeframe MAs show same direction; exit on conflicting signals.  
* **Typical Use Case**: Discretionary traders wanting high probability setups.  
* **Known Users / Origin**: Not clearly attributable.  
* **Evidence Type**: Common practice.  
* **Confidence Level**: Medium.  
57. **Volume Confirmation on Trend Signals**  
* **Parent Family**: Hybrid  
* **Type**: Variation  
* **Core Logic**: Requires volume spike (RVOL\>2) to confirm moving‑average or breakout signal.  
* **How it Works**: Combine MA crossover with relative volume; trade only when volume threshold is met.  
* **Typical Use Case**: Filtering false breakouts.  
* **Known Users / Origin**: Traders referencing RVOL article.  
* **Evidence Type**: Crypto trading education.  
* **Confidence Level**: Medium.  
58. **Funding‑Adjusted Breakout**  
* **Parent Family**: Hybrid  
* **Type**: Variation  
* **Core Logic**: Combines funding rate information from perpetual futures with breakout signals; trades only when funding aligns with direction (e.g., short when funding is highly positive).  
* **How it Works**: Monitor funding rate; if breakout up but funding is negative (shorts paying longs), avoid long; if funding positive, consider fade.  
* **Typical Use Case**: Crypto perps arbitrage traders.  
* **Known Users / Origin**: Not clearly attributable.  
* **Evidence Type**: Derived from funding rate mechanics.  
* **Confidence Level**: Low.  
59. **Open Interest Confirmation**  
* **Parent Family**: Hybrid  
* **Type**: Variation  
* **Core Logic**: Uses open interest as confirmation of breakout or trend; increasing open interest with rising price indicates strong trend; decreasing open interest may signal false breakout.  
* **How it Works**: Combine open interest chart with price; trade only when both price and open interest increase; exit when divergence occurs.  
* **Typical Use Case**: Futures traders monitoring sentiment.  
* **Known Users / Origin**: Popular among derivatives traders.  
* **Evidence Type**: Crypto education article.  
* **Confidence Level**: High.  
60. **Bull/Bear Market Condition Adjustment**  
* **Parent Family**: Hybrid  
* **Type**: Variation  
* **Core Logic**: Adjusts trading rules depending on whether the market is trending bull or bear; e.g., take only long signals in bull markets; emphasize mean reversion in bear markets.  
* **How it Works**: Use moving averages or macro indicators to define regime; apply different sub‑strategies accordingly.  
* **Typical Use Case**: Portfolio management across cycles.  
* **Known Users / Origin**: Discretionary traders.  
* **Evidence Type**: Common practice.  
* **Confidence Level**: Medium.

## **2 Fundamental / Narrative Strategies**

61. **Narrative Rotation Strategy**  
* **Parent Family**: Fundamental / Narrative  
* **Type**: Core  
* **Core Logic**: Capital flows rotate between different crypto narratives (e.g., Bitcoin, then large‑cap altcoins, then small caps) driven by market sentiment and technical breakouts.  
* **How it Works**: Track which sector (Layer‑1, DeFi, AI, meme coins) is gaining momentum; allocate capital to sectors attracting inflows; exit when narrative loses steam.  
* **Typical Use Case**: Portfolio rotation to catch emerging narratives.  
* **Known Users / Origin**: Crypto fund managers; described by Weiss Ratings.  
* **Evidence Type**: Crypto research.  
* **Confidence Level**: High.  
62. **Ecosystem Growth Play**  
* **Parent Family**: Fundamental / Narrative  
* **Type**: Subtype  
* **Core Logic**: Invest in tokens of a blockchain ecosystem when on‑chain metrics (active addresses, TVL, developer activity) show strong growth.  
* **How it Works**: Monitor on‑chain analytics; evaluate protocol upgrades and partnerships; enter when usage metrics rise; exit when growth stagnates.  
* **Typical Use Case**: Fundamental investing in emerging chains.  
* **Known Users / Origin**: Venture capital funds.  
* **Evidence Type**: On‑chain analysis articles.  
* **Confidence Level**: Medium.  
63. **Tokenomics Supply‑Demand Strategy**  
* **Parent Family**: Fundamental / Narrative  
* **Type**: Core  
* **Core Logic**: Evaluates token supply schedule, inflation rate, burn mechanism and staking rewards to predict price pressure. Tokens with decreasing supply and strong demand may outperform.  
* **How it Works**: Analyze whitepaper; compute projected circulating supply; track staking lock‑ups; trade long if supply shock expected; short if inflation high.  
* **Typical Use Case**: Medium‑term investment.  
* **Known Users / Origin**: Fundamental analysts.  
* **Evidence Type**: Tokenomics research.  
* **Confidence Level**: Medium.  
64. **Token Unlock Event Trading**  
* **Parent Family**: Fundamental / Narrative  
* **Type**: Subtype  
* **Core Logic**: Anticipates price impact from scheduled token unlocks; large unlocks often create negative price pressure as early investors sell.  
* **How it Works**: Track token unlock schedules; short tokens 30 days before large unlock; close position after supply is absorbed; consider team vs investor unlock differences.  
* **Typical Use Case**: Hedge funds hedging vesting unlock risk.  
* **Known Users / Origin**: Research from Keyrock.  
* **Evidence Type**: Institutional research.  
* **Confidence Level**: High.  
65. **Halving Cycle Strategy**  
* **Parent Family**: Fundamental / Narrative  
* **Type**: Core  
* **Core Logic**: Bitcoin halving reduces block rewards every \~4 years; historically, halving triggers supply shock, leading to price appreciation followed by peaks and corrections.  
* **How it Works**: Accumulate Bitcoin 6–12 months before halving; hold through post‑halving rally; reduce exposure when parabolic run occurs.  
* **Typical Use Case**: Long‑term investment cycles.  
* **Known Users / Origin**: Market historians; widely discussed in Nexo article.  
* **Evidence Type**: Historical analysis.  
* **Confidence Level**: High.  
66. **Supply Shock / Burn Event Play**  
* **Parent Family**: Fundamental / Narrative  
* **Type**: Variation  
* **Core Logic**: Some protocols burn transaction fees or token buybacks; supply reduction can drive price if demand remains constant.  
* **How it Works**: Monitor supply‑burn announcements; buy ahead of burn; exit after event; evaluate long‑term effect on circulating supply.  
* **Typical Use Case**: Tokens like BNB or LUNA with burn mechanism.  
* **Known Users / Origin**: Token analysts.  
* **Evidence Type**: Tokenomics research.  
* **Confidence Level**: Medium.  
67. **Vesting Cliff Fade**  
* **Parent Family**: Fundamental / Narrative  
* **Type**: Variation  
* **Core Logic**: When a large number of tokens unlock after vesting cliffs, price may dump; fade rally ahead of the cliff.  
* **How it Works**: Identify vesting schedule; short before the cliff; exit after dump; monitor investor vs team share.  
* **Typical Use Case**: Venture‑funded tokens.  
* **Known Users / Origin**: Traders following unlock research.  
* **Evidence Type**: Institutional research.  
* **Confidence Level**: Medium.  
68. **Macro Liquidity Correlation Strategy**  
* **Parent Family**: Fundamental / Macro  
* **Type**: Core  
* **Core Logic**: Bitcoin’s price is highly correlated with global liquidity; increases in global liquidity or T‑bill issuance lead to price appreciation.  
* **How it Works**: Track global liquidity indices and central bank balance sheets; go long Bitcoin when liquidity expands; reduce when liquidity contracts.  
* **Typical Use Case**: Macro‑driven portfolio adjustments.  
* **Known Users / Origin**: Macro analysts and hedge funds.  
* **Evidence Type**: Institutional research.  
* **Confidence Level**: Medium.  
69. **Correlation & Beta Strategy**  
* **Parent Family**: Fundamental / Macro  
* **Type**: Variation  
* **Core Logic**: Identifies altcoins with high beta to Bitcoin; uses Bitcoin trends as leading indicator for altcoin performance.  
* **How it Works**: Compute rolling correlation; allocate more to high‑beta coins during BTC uptrend; shift to low‑beta coins during downtrend.  
* **Typical Use Case**: Portfolio diversification.  
* **Known Users / Origin**: Not clearly attributable.  
* **Evidence Type**: Statistical analysis.  
* **Confidence Level**: Low.  
70. **Network Adoption Trend**  
* **Parent Family**: Fundamental / On‑chain  
* **Type**: Subtype  
* **Core Logic**: According to Metcalfe’s law, network value scales with square of users; increasing active addresses signals long‑term bullishness.  
* **How it Works**: Track daily active addresses; invest when growth rate accelerates; reduce when user growth slows.  
* **Typical Use Case**: Assessing fundamental strength of Layer‑1 protocols.  
* **Known Users / Origin**: On‑chain analysts.  
* **Evidence Type**: On‑chain metrics article.  
* **Confidence Level**: Medium.  
71. **Ecosystem Developer Activity Play**  
* **Parent Family**: Fundamental / Narrative  
* **Type**: Variation  
* **Core Logic**: Measures GitHub commits or developer numbers; strong development indicates robust ecosystem.  
* **How it Works**: Monitor developer activity metrics; invest in ecosystems with growing developer base; exit when dev activity declines.  
* **Typical Use Case**: Early‑stage blockchain investments.  
* **Known Users / Origin**: Venture capital funds.  
* **Evidence Type**: Fundamental analysis.  
* **Confidence Level**: Low.  
72. **Governance Proposal Trading**  
* **Parent Family**: Fundamental / Narrative  
* **Type**: Subtype  
* **Core Logic**: Decentralized governance proposals (e.g., protocol upgrades, fee adjustments) can significantly affect token value.  
* **How it Works**: Monitor DAO forums; evaluate proposals; buy tokens of protocols with value‑accretive proposals; short those with dilutive changes.  
* **Typical Use Case**: DeFi governance tokens.  
* **Known Users / Origin**: DAO participants.  
* **Evidence Type**: Crypto governance research.  
* **Confidence Level**: Low.  
73. **On‑chain Treasury Monitoring**  
* **Parent Family**: Fundamental / On‑chain  
* **Type**: Variation  
* **Core Logic**: Observes movements of large treasuries or foundation wallets; large transfers to exchanges may precede sell‑offs.  
* **How it Works**: Use blockchain explorers to track foundation/treasury wallets; exit positions if they move funds to exchange.  
* **Typical Use Case**: Protecting against governance token dumps.  
* **Known Users / Origin**: On‑chain analysts.  
* **Evidence Type**: On‑chain tracking articles.  
* **Confidence Level**: Medium.  
74. **Narrative Sentiment Index**  
* **Parent Family**: Fundamental / Narrative  
* **Type**: Variation  
* **Core Logic**: Quantifies social media buzz and news coverage of specific narratives; invests based on trending topics.  
* **How it Works**: Use NLP to gauge sentiment around categories (e.g., Metaverse); rotate capital into narratives with rising positive sentiment; exit when sentiment wanes.  
* **Typical Use Case**: Short‑term rotations.  
* **Known Users / Origin**: Social sentiment trading desks.  
* **Evidence Type**: Social sentiment research.  
* **Confidence Level**: Low.  
75. **Regulatory Event Trading**  
* **Parent Family**: Fundamental / Narrative  
* **Type**: Variation  
* **Core Logic**: Anticipates impact of regulatory announcements (e.g., ETF approvals, legal actions) on token prices.  
* **How it Works**: Monitor legal/regulatory calendars; take positions ahead of expected decisions; manage risk due to binary outcomes.  
* **Typical Use Case**: Event‑driven funds.  
* **Known Users / Origin**: Macro event traders.  
* **Evidence Type**: Fundamental analysis.  
* **Confidence Level**: Low.

## **3 Sentiment Strategies**

76. **Funding Rate Arbitrage**  
* **Parent Family**: Sentiment / Derivatives  
* **Type**: Core  
* **Core Logic**: Perpetual futures funding rate reflects market bias; positive funding (longs pay shorts) indicates bullish sentiment; negative funding indicates bearishness. Traders capture funding payments by taking the opposite position.  
* **How it Works**: If funding is positive, open short perp and long spot to collect funding; if negative, long perp and short spot; hold until funding normalizes.  
* **Typical Use Case**: Market neutral yield generation.  
* **Known Users / Origin**: Professional arbitragers.  
* **Evidence Type**: Exchange documentation.  
* **Confidence Level**: High.  
77. **Funding Rate Mean Reversion**  
* **Parent Family**: Sentiment / Derivatives  
* **Type**: Variation  
* **Core Logic**: Funding rates mean‑revert to zero over time; extreme values often precede price reversals.  
* **How it Works**: Track funding rate; when extremely positive (e.g., \>0.1%), open contrarian short; exit when funding normalizes; inverse for negative.  
* **Typical Use Case**: Short‑term contrarian trades.  
* **Known Users / Origin**: Perp traders.  
* **Evidence Type**: Common practice derived from funding rate mechanism.  
* **Confidence Level**: Medium.  
78. **Funding Rate Momentum**  
* **Parent Family**: Sentiment / Derivatives  
* **Type**: Variation  
* **Core Logic**: Follows the direction of funding rate; increasing positive funding indicates bullish momentum; decreasing indicates bearish.  
* **How it Works**: Go long when funding flips from negative to positive and continues rising; go short when it flips from positive to negative.  
* **Typical Use Case**: Momentum trading on perps.  
* **Known Users / Origin**: Not clearly attributable.  
* **Evidence Type**: Derived from funding rate mechanism.  
* **Confidence Level**: Low.  
79. **Open Interest Expansion Strategy**  
* **Parent Family**: Sentiment / Derivatives  
* **Type**: Core  
* **Core Logic**: Rising open interest accompanied by rising price signals new money entering and validates trend.  
* **How it Works**: Monitor open interest; when both price and open interest rise, open a trend‑following position; exit when open interest declines.  
* **Typical Use Case**: Futures traders confirming trend strength.  
* **Known Users / Origin**: Futures analysts.  
* **Evidence Type**: Crypto education article.  
* **Confidence Level**: High.  
80. **Open Interest Divergence Strategy**  
* **Parent Family**: Sentiment / Derivatives  
* **Type**: Variation  
* **Core Logic**: If price rises while open interest falls, the trend may be near exhaustion; conversely, price falling with rising open interest suggests potential short squeeze.  
* **How it Works**: Compare open interest to price; take contrarian trade when divergence appears; exit when trend resumes.  
* **Typical Use Case**: Positioning ahead of squeezes.  
* **Known Users / Origin**: Not clearly attributable.  
* **Evidence Type**: Derived from open interest analysis.  
* **Confidence Level**: Medium.  
81. **Liquidation Cluster Trading**  
* **Parent Family**: Sentiment / Derivatives  
* **Type**: Core  
* **Core Logic**: Large clusters of liquidation orders at certain price levels create support/resistance; price often accelerates when these levels are hit.  
* **How it Works**: Monitor liquidation heat maps; anticipate cascades if price approaches cluster; fade moves after cascade or trade momentum into cascade; adjust risk due to volatility.  
* **Typical Use Case**: Short‑term trading during high leverage.  
* **Known Users / Origin**: Perp traders; described by Amberdata.  
* **Evidence Type**: Institutional research.  
* **Confidence Level**: Medium.  
82. **Liquidation Cascade Fade**  
* **Parent Family**: Sentiment / Derivatives  
* **Type**: Variation  
* **Core Logic**: After a cascade of forced liquidations, price often rebounds due to oversold conditions.  
* **How it Works**: Wait for a large liquidation event; open contrarian positions; use tight stop; exit when price retraces to pre‑cascade level.  
* **Typical Use Case**: Contrarian day trading.  
* **Known Users / Origin**: Not clearly attributable.  
* **Evidence Type**: Derived from liquidation research.  
* **Confidence Level**: Low.  
83. **Social Sentiment Index Trading**  
* **Parent Family**: Sentiment / Social  
* **Type**: Core  
* **Core Logic**: Uses aggregated sentiment from Twitter, Reddit and Telegram to gauge crowd mood; extreme positivity or negativity can signal tops or bottoms.  
* **How it Works**: Compute sentiment score; buy when sentiment is extremely negative (fear), sell when extremely positive (greed); combine with price.  
* **Typical Use Case**: Contrarian sentiment trading.  
* **Known Users / Origin**: Data analysts; not clearly attributable.  
* **Evidence Type**: Social sentiment research.  
* **Confidence Level**: Medium.  
84. **Twitter Influencer Monitoring**  
* **Parent Family**: Sentiment / Social  
* **Type**: Variation  
* **Core Logic**: Tracks tweets of influential crypto accounts; spikes in mentions often precede short‑term pumps.  
* **How it Works**: Use API to monitor influencer tweets; buy tokens they mention; exit quickly; risk high due to pump‑and‑dump.  
* **Typical Use Case**: Meme coin speculation.  
* **Known Users / Origin**: Retail traders; not clearly attributable.  
* **Evidence Type**: Social sentiment practice.  
* **Confidence Level**: Low.  
85. **Fear & Greed Index Contrarian**  
* **Parent Family**: Sentiment / Social  
* **Type**: Subtype  
* **Core Logic**: The Fear & Greed Index synthesizes volatility, momentum, social media trends, surveys and more; extreme fear often precedes rallies; extreme greed precedes corrections.  
* **How it Works**: Buy when index shows extreme fear (e.g., \<20); sell when extreme greed (\>80).  
* **Typical Use Case**: Medium‑term contrarian trading.  
* **Known Users / Origin**: Widely referenced by traders.  
* **Evidence Type**: Crypto education article.  
* **Confidence Level**: High.  
86. **Funding & OI Combined Sentiment**  
* **Parent Family**: Sentiment / Derivatives  
* **Type**: Variation  
* **Core Logic**: Uses both funding rate and open interest; extreme positive funding with rising open interest suggests euphoric longs; contrarian short; extreme negative funding with rising OI suggests panic; contrarian long.  
* **How it Works**: Monitor both metrics; establish thresholds; open contrarian positions accordingly.  
* **Typical Use Case**: Perp trading with sentiment overlay.  
* **Known Users / Origin**: Not clearly attributable.  
* **Evidence Type**: Derived from funding and OI articles.  
* **Confidence Level**: Medium.  
87. **Funding \+ Basis Convergence Trade**  
* **Parent Family**: Sentiment / Derivatives  
* **Type**: Variation  
* **Core Logic**: Combines funding rate and futures basis; if both funding and basis are rich, expect correction; trade accordingly.  
* **How it Works**: Monitor funding and basis; if positive funding with large futures premium, short futures and long spot; if negative funding with discount, long futures and short spot.  
* **Typical Use Case**: Market neutral arbitrage.  
* **Known Users / Origin**: Institutional traders.  
* **Evidence Type**: Derived from funding and basis articles.  
* **Confidence Level**: Medium.  
88. **Crowded Short Squeeze Play**  
* **Parent Family**: Sentiment / Derivatives  
* **Type**: Variation  
* **Core Logic**: When funding is highly negative and open interest is elevated, market may be crowded short; a catalyst can trigger short squeeze.  
* **How it Works**: Monitor negative funding and rising OI; search for positive catalyst (news, whale inflow); long ahead of squeeze.  
* **Typical Use Case**: Perp traders capturing squeezes.  
* **Known Users / Origin**: Contrarian traders.  
* **Evidence Type**: Derived from funding and OI analysis.  
* **Confidence Level**: Low.  
89. **Liquidation Level Front‑Run**  
* **Parent Family**: Sentiment / Derivatives  
* **Type**: Variation  
* **Core Logic**: Place orders just above or below known liquidation clusters to catch liquidity.  
* **How it Works**: Use heat map data; set limit orders slightly before cluster; exit quickly.  
* **Typical Use Case**: Scalping around liquidation levels.  
* **Known Users / Origin**: Not clearly attributable.  
* **Evidence Type**: Derived from liquidation research.  
* **Confidence Level**: Low.  
90. **Reddit Sentiment Swings**  
* **Parent Family**: Sentiment / Social  
* **Type**: Variation  
* **Core Logic**: Monitors r/cryptocurrency or other subreddits for trending posts; sudden spikes in posts or comments can indicate hype.  
* **How it Works**: Use scraping tools to track number of posts about a coin; long when post count surges with positive sentiment; short when negativity rises.  
* **Typical Use Case**: Meme coin speculation.  
* **Known Users / Origin**: Not clearly attributable.  
* **Evidence Type**: Social sentiment practice.  
* **Confidence Level**: Low.

## **4 On‑Chain Strategies**

91. **Whale Exchange Outflow Accumulation**  
* **Parent Family**: On‑chain / Whale tracking  
* **Type**: Core  
* **Core Logic**: Large transfers from exchanges to private wallets by whales indicate accumulation; this often precedes price rises.  
* **How it Works**: Monitor exchange outflows; when whale outflows spike, buy the corresponding token; hold until price rallies.  
* **Typical Use Case**: Anticipating bullish moves on Bitcoin or altcoins.  
* **Known Users / Origin**: On‑chain analysts; used by traders.  
* **Evidence Type**: Ledger article.  
* **Confidence Level**: High.  
92. **Whale Exchange Inflow Distribution**  
* **Parent Family**: On‑chain / Whale tracking  
* **Type**: Variation  
* **Core Logic**: Large deposits of coins to exchanges by whales indicate intention to sell; often precede price corrections.  
* **How it Works**: Monitor exchange inflows; if whales move large amounts to exchange, short the token; exit after sell‑off occurs.  
* **Typical Use Case**: Short‑term trading ahead of whale dumps.  
* **Known Users / Origin**: On‑chain analysts.  
* **Evidence Type**: On‑chain analysis articles.  
* **Confidence Level**: High.  
93. **Exchange Net Flow Divergence**  
* **Parent Family**: On‑chain  
* **Type**: Subtype  
* **Core Logic**: Net inflow/outflow (deposits minus withdrawals) can indicate supply pressure; positive net flow suggests selling pressure, negative net flow indicates accumulation.  
* **How it Works**: Track net flow; adjust positioning accordingly; combine with price action.  
* **Typical Use Case**: Spot trading ahead of trend shifts.  
* **Known Users / Origin**: On‑chain analysts.  
* **Evidence Type**: On‑chain metrics articles.  
* **Confidence Level**: Medium.  
94. **Dormant Coin Movement (TAC) Strategy**  
* **Parent Family**: On‑chain / Dormancy  
* **Type**: Core  
* **Core Logic**: Token Age Consumed (TAC) measures movement of long‑dormant coins; spikes signal increased probability of volatility.  
* **How it Works**: Monitor TAC; if a spike occurs, expect increased volatility; trade breakout or fade after confirming direction.  
* **Typical Use Case**: Anticipating large moves in Bitcoin or Ethereum.  
* **Known Users / Origin**: On‑chain analysts and traders.  
* **Evidence Type**: Santiment article.  
* **Confidence Level**: High.  
95. **UTXO Age Distribution Strategy**  
* **Parent Family**: On‑chain / Dormancy  
* **Type**: Subtype  
* **Core Logic**: Older unspent transaction outputs (UTXOs) have lower probability of being spent; changes in age bands signal shifts in supply dynamics.  
* **How it Works**: Analyze on‑chain charts of age distribution; if older coins start moving, expect increased selling pressure; adjust accordingly.  
* **Typical Use Case**: Long‑term supply dynamics.  
* **Known Users / Origin**: Glassnode analysts.  
* **Evidence Type**: On‑chain research.  
* **Confidence Level**: Medium.  
96. **Wallet Clustering Behaviour Analysis**  
* **Parent Family**: On‑chain / Whale tracking  
* **Type**: Subtype  
* **Core Logic**: Groups addresses belonging to the same entity; monitors their aggregated behaviour (accumulation, distribution) to anticipate market moves.  
* **How it Works**: Use heuristics to cluster wallets; track their token balances; mimic or counteract their trades depending on performance.  
* **Typical Use Case**: Smart money tracking.  
* **Known Users / Origin**: Analytics firms like Nansen.  
* **Evidence Type**: On‑chain analytics.  
* **Confidence Level**: Medium.  
97. **Stablecoin Supply Ratio Strategy**  
* **Parent Family**: On‑chain  
* **Type**: Variation  
* **Core Logic**: When stablecoin supply on exchanges increases, traders may be preparing to buy; decreasing supply indicates buying pressure used up.  
* **How it Works**: Monitor stablecoin exchange balances; long crypto when stablecoin balances accumulate; reduce exposure when they decline.  
* **Typical Use Case**: Predicting demand flows.  
* **Known Users / Origin**: On‑chain analysts.  
* **Evidence Type**: On‑chain analysis.  
* **Confidence Level**: Low.  
98. **Miner Outflow Signal**  
* **Parent Family**: On‑chain / Miner behaviour  
* **Type**: Core  
* **Core Logic**: Miners are key suppliers; rising miner outflow to exchanges increases selling pressure.  
* **How it Works**: Monitor miner wallet flows; short Bitcoin when outflows spike; exit after selling event.  
* **Typical Use Case**: Anticipating miner‑driven dips.  
* **Known Users / Origin**: On‑chain analysts.  
* **Evidence Type**: On‑chain article.  
* **Confidence Level**: High.  
99. **Miner Hashrate Trend Strategy**  
* **Parent Family**: On‑chain / Miner behaviour  
* **Type**: Subtype  
* **Core Logic**: Rising hashrate indicates miners investing in new hardware and expecting higher prices; falling hashrate may precede price declines.  
* **How it Works**: Track hashrate growth; long BTC when hashrate trends up; short when it declines.  
* **Typical Use Case**: Long‑term directional trades.  
* **Known Users / Origin**: Mining analysts.  
* **Evidence Type**: On‑chain research.  
* **Confidence Level**: Medium.  
100. **Stake/Unstake Flow Strategy**  
* **Parent Family**: On‑chain  
* **Type**: Variation  
* **Core Logic**: For proof‑of‑stake networks, flows into and out of staking contracts can indicate future price pressure; staking reduces circulating supply, un‑staking increases supply.  
* **How it Works**: Monitor on‑chain deposit/withdraw events to staking contracts; long when staking inflows rise; short when unstaking spikes.  
* **Typical Use Case**: Networks like ETH 2.0, ADA.  
* **Known Users / Origin**: Not clearly attributable.  
* **Evidence Type**: On‑chain analysis.  
* **Confidence Level**: Low.  
101. **Gas Price and Activity Indicator**  
* **Parent Family**: On‑chain  
* **Type**: Variation  
* **Core Logic**: High gas fees often coincide with periods of high demand; can signal network congestion and speculation.  
* **How it Works**: Track average gas price; high gas may indicate FOMO; trade accordingly; extremely high gas may signal near‑term top.  
* **Typical Use Case**: Ethereum network.  
* **Known Users / Origin**: Not clearly attributable.  
* **Evidence Type**: On‑chain practice.  
* **Confidence Level**: Low.

## **5 Derivatives Strategies**

102. **Spot‑Futures Basis Trade**  
* **Parent Family**: Derivatives / Arbitrage  
* **Type**: Core  
* **Core Logic**: Captures price difference between futures and spot markets; when futures trade at a premium, short futures and long spot to earn the basis.  
* **How it Works**: Buy asset on spot exchange; sell futures contract; hold until convergence or expiry; profit equals futures premium minus costs.  
* **Typical Use Case**: Market neutral arbitrage for BTC and ETH.  
* **Known Users / Origin**: Hedge funds; widely documented.  
* **Evidence Type**: Institutional and exchange documentation.  
* **Confidence Level**: High.  
103. **Reverse Basis Trade**  
* **Parent Family**: Derivatives / Arbitrage  
* **Type**: Subtype  
* **Core Logic**: When futures trade at a discount to spot (backwardation), long futures and short spot; hold until convergence.  
* **How it Works**: Short spot; buy futures; unwind at convergence.  
* **Typical Use Case**: Bear market conditions.  
* **Known Users / Origin**: Institutional traders.  
* **Evidence Type**: Exchange documentation.  
* **Confidence Level**: Medium.  
104. **Calendar Spread (Futures Roll)**  
* **Parent Family**: Derivatives / Arbitrage  
* **Type**: Subtype  
* **Core Logic**: Trades the spread between two futures contracts of different expirations; expects spread to widen or narrow due to funding and carry costs.  
* **How it Works**: Buy near‑term future; sell far‑term future if expecting contango compression; reverse for backwardation.  
* **Typical Use Case**: Yield enhancement in futures markets.  
* **Known Users / Origin**: Professional traders.  
* **Evidence Type**: Futures market practice.  
* **Confidence Level**: Medium.  
105. **Perpetual Funding Rate Arbitrage**  
* **Parent Family**: Derivatives / Arbitrage  
* **Type**: Core (same as 76 but emphasises cross‑platform)  
* **Core Logic**: Exploits differences in funding rates across exchanges; long on exchange with negative funding and short on exchange with positive funding; capture spread.  
* **How it Works**: Open equal sized positions on two exchanges; collect funding from both sides; close when rates converge.  
* **Typical Use Case**: Institutional arbitrage.  
* **Known Users / Origin**: Market makers.  
* **Evidence Type**: Derived from funding mechanism.  
* **Confidence Level**: Medium.  
106. **Gamma Scalping**  
* **Parent Family**: Derivatives / Options  
* **Type**: Core  
* **Core Logic**: When holding an options position with positive gamma (e.g., long straddle), traders adjust delta exposures to profit from price swings.  
* **How it Works**: Buy straddle; as price moves, buy/sell underlying to keep delta near zero; capture volatility profits; close when premium decays.  
* **Typical Use Case**: Volatility trading on BTC options.  
* **Known Users / Origin**: Options traders.  
* **Evidence Type**: Options trading practice.  
* **Confidence Level**: Medium.  
107. **Volatility Skew Trade**  
* **Parent Family**: Derivatives / Options  
* **Type**: Subtype  
* **Core Logic**: Takes positions based on implied volatility skew, e.g., selling overpriced out‑of‑the‑money puts and buying underpriced calls when skew is steep.  
* **How it Works**: Evaluate IV for calls vs puts at different strikes; trade vertical spreads that benefit from skew normalization.  
* **Typical Use Case**: Hedging or speculation in BTC and ETH options.  
* **Known Users / Origin**: Options desks.  
* **Evidence Type**: Institutional research.  
* **Confidence Level**: High.  
108. **Long Straddle Strategy**  
* **Parent Family**: Derivatives / Options  
* **Type**: Subtype  
* **Core Logic**: Buys a call and a put at the same strike to bet on large volatility but not direction.  
* **How it Works**: Purchase at‑the‑money call and put; profit if price moves significantly; loss limited to premiums.  
* **Typical Use Case**: Ahead of major events (e.g., halving, regulatory news).  
* **Known Users / Origin**: Options traders.  
* **Evidence Type**: Options strategy literature.  
* **Confidence Level**: Medium.  
109. **Short Straddle Strategy**  
* **Parent Family**: Derivatives / Options  
* **Type**: Subtype  
* **Core Logic**: Sells both call and put at same strike to collect premium; expects low volatility.  
* **How it Works**: Collect premiums; profits if price remains near strike; large moves cause losses; manage delta.  
* **Typical Use Case**: Range‑bound markets.  
* **Known Users / Origin**: Options traders.  
* **Evidence Type**: Options strategy literature.  
* **Confidence Level**: Medium.  
110. **Put‑Call Parity Arbitrage**  
* **Parent Family**: Derivatives / Options  
* **Type**: Subtype  
* **Core Logic**: When relationship between spot, call, put and strike is violated, arbitrage opportunity exists.  
* **How it Works**: Construct synthetic position (long call \+ short put \+ cash) and compare to actual underlying; trade mispricing.  
* **Typical Use Case**: Options markets with liquidity disparities.  
* **Known Users / Origin**: Quant traders.  
* **Evidence Type**: Options arbitrage theory.  
* **Confidence Level**: Low.  
111. **Protective Put Hedging**  
* **Parent Family**: Derivatives / Hedging  
* **Type**: Subtype  
* **Core Logic**: Buys put options to insure against price declines while maintaining long exposure.  
* **How it Works**: Hold spot position; buy out‑of‑the‑money put; adjust position as underlying moves; cost is premium.  
* **Typical Use Case**: Long‑term investors seeking downside protection.  
* **Known Users / Origin**: Institutional investors.  
* **Evidence Type**: Options hedging literature.  
* **Confidence Level**: High.  
112. **Covered Call Income**  
* **Parent Family**: Derivatives / Hedging  
* **Type**: Variation  
* **Core Logic**: Holds spot asset and sells call option to generate income; sacrifices upside beyond strike.  
* **How it Works**: Own BTC; sell out‑of‑the‑money call; collect premium; if price exceeds strike, deliver underlying.  
* **Typical Use Case**: Yield generation in sideways markets.  
* **Known Users / Origin**: Retail and institutional investors.  
* **Evidence Type**: Options strategy literature.  
* **Confidence Level**: Medium.  
113. **Butterfly Spread**  
* **Parent Family**: Derivatives / Options  
* **Type**: Subtype  
* **Core Logic**: Combines multiple option legs to profit from low volatility around a strike; limited risk.  
* **How it Works**: Buy one ITM call, sell two ATM calls, buy one OTM call; net premium low; profit if price stays near middle strike at expiry.  
* **Typical Use Case**: Range‑bound volatility trades.  
* **Known Users / Origin**: Options traders.  
* **Evidence Type**: Options strategy literature.  
* **Confidence Level**: Low.  
114. **Iron Condor**  
* **Parent Family**: Derivatives / Options  
* **Type**: Subtype  
* **Core Logic**: Sells both call and put vertical spreads; expects price to stay within range; collects premium.  
* **How it Works**: Sell OTM call spread and sell OTM put spread; net credit; profit if price stays within strikes; risk limited to width minus credit.  
* **Typical Use Case**: Low volatility periods.  
* **Known Users / Origin**: Options income traders.  
* **Evidence Type**: Options strategy literature.  
* **Confidence Level**: Low.  
115. **Gamma Tilt Strategy**  
* **Parent Family**: Derivatives / Options  
* **Type**: Variation  
* **Core Logic**: Adjusts the gamma exposure across strikes to profit from skew; e.g., long gamma in far OTM options and short near ATM.  
* **How it Works**: Structure options portfolio with varying gamma exposures; delta hedge accordingly; profit from asymmetric moves.  
* **Typical Use Case**: Professional option desks.  
* **Known Users / Origin**: Not clearly attributable.  
* **Evidence Type**: Options theory.  
* **Confidence Level**: Low.  
116. **Liquidation Cascade Trigger**  
* **Parent Family**: Derivatives / Sentiment  
* **Type**: Variation  
* **Core Logic**: Intentionally pushes price to a cluster of liquidations (e.g., by whales) to trigger cascade and profit from momentum.  
* **How it Works**: Place large orders to nudge price; once liquidations trigger, ride momentum; exit before rebound.  
* **Typical Use Case**: Large traders or whales; ethically questionable.  
* **Known Users / Origin**: Rumoured in markets.  
* **Evidence Type**: Market rumours; not widely documented.  
* **Confidence Level**: Low.

## **6 Institutional / Advanced Strategies**

117. **Cross‑Exchange Arbitrage**  
* **Parent Family**: Institutional / Arbitrage  
* **Type**: Core  
* **Core Logic**: Exploits price differences of the same token across different exchanges by simultaneously buying on one and selling on another.  
* **How it Works**: Monitor prices across exchanges; compute net profit after fees and transfer times; execute trades quickly to lock in spread.  
* **Typical Use Case**: Neutral trading by hedge funds and arbitrage bots.  
* **Known Users / Origin**: HFT firms and arbitrageurs.  
* **Evidence Type**: Industry article.  
* **Confidence Level**: High.  
118. **Spatial Arbitrage**  
* **Parent Family**: Institutional / Arbitrage  
* **Type**: Subtype  
* **Core Logic**: Similar to cross‑exchange arbitrage but across regions with different regulatory environments; can capture price difference due to capital controls.  
* **How it Works**: Trade on local exchange vs global exchange; consider currency conversion and legal restrictions.  
* **Typical Use Case**: Emerging market exchanges.  
* **Known Users / Origin**: Professional arbitrageurs.  
* **Evidence Type**: Industry practice.  
* **Confidence Level**: Medium.  
119. **Triangular Arbitrage**  
* **Parent Family**: Institutional / Arbitrage  
* **Type**: Subtype  
* **Core Logic**: Exploits pricing inefficiencies between three trading pairs on the same exchange (e.g., BTC/ETH, ETH/USDT, BTC/USDT).  
* **How it Works**: Sequentially trade between pairs to end up with more of original currency; must execute quickly.  
* **Typical Use Case**: Automated bots on high‑liquidity exchanges.  
* **Known Users / Origin**: Market makers.  
* **Evidence Type**: Exchange practice.  
* **Confidence Level**: Medium.  
120. **Cross‑Exchange Market Making**  
* **Parent Family**: Institutional / Market making  
* **Type**: Core  
* **Core Logic**: Places maker orders on less liquid exchange and hedges filled trades on more liquid exchange to capture spread.  
* **How it Works**: Quote orders with spread; when order fills, immediately execute hedge on other exchange; adjust quotes to maintain inventory balance.  
* **Typical Use Case**: Providing liquidity to smaller exchanges.  
* **Known Users / Origin**: Hummingbot documentation.  
* **Evidence Type**: Crypto‑native / Institutional.  
* **Confidence Level**: High.  
121. **Latency Market Making**  
* **Parent Family**: Institutional / HFT  
* **Type**: Subtype  
* **Core Logic**: Utilizes latency advantage to quote better prices and react faster than competitors; cancels stale orders quickly.  
* **How it Works**: Use co‑location; monitor market microstructure; adjust quotes in microseconds.  
* **Typical Use Case**: Professional HFT firms.  
* **Known Users / Origin**: HFT shops.  
* **Evidence Type**: Industry practice.  
* **Confidence Level**: Medium.  
122. **Statistical Arbitrage Basket**  
* **Parent Family**: Institutional / Stat arb  
* **Type**: Core  
* **Core Logic**: Uses statistical models to identify mispricing across a basket of correlated assets; goes long undervalued and short overvalued assets.  
* **How it Works**: Apply factor models or PCA; determine residuals; allocate capital accordingly; rebalance as mispricing converges.  
* **Typical Use Case**: Quant funds.  
* **Known Users / Origin**: Institutional quant teams.  
* **Evidence Type**: Academic / Institutional.  
* **Confidence Level**: High.  
123. **Cointegration Basket Trading**  
* **Parent Family**: Institutional / Stat arb  
* **Type**: Subtype  
* **Core Logic**: Applies cointegration analysis to more than two assets, forming baskets whose combined price series revert to mean.  
* **How it Works**: Identify cointegrated basket; long undervalued combination; short overvalued combination; rebalance.  
* **Typical Use Case**: Multi‑asset arbitrage.  
* **Known Users / Origin**: Quant researchers.  
* **Evidence Type**: Academic research.  
* **Confidence Level**: Low.  
124. **HFT Momentum Ignition**  
* **Parent Family**: Institutional / HFT  
* **Type**: Variation  
* **Core Logic**: HFT traders aggressively buy or sell to create a short‑term price move that triggers other traders’ algorithms, then they exit with profit.  
* **How it Works**: Rapidly send orders to move price; once other participants join, reverse position.  
* **Typical Use Case**: Microstructure exploitation; may be considered manipulative.  
* **Known Users / Origin**: HFT rumours; not officially documented.  
* **Evidence Type**: Market speculation.  
* **Confidence Level**: Low.  
125. **Order Flow Imbalance Analysis**  
* **Parent Family**: Institutional / Order flow  
* **Type**: Core  
* **Core Logic**: Measures difference between aggressive buyers and sellers (market orders) to gauge short‑term momentum.  
* **How it Works**: Analyze time and sales data or use order flow tools; go long when buy imbalance persists; short on persistent sell imbalance.  
* **Typical Use Case**: Day trading perps on large exchanges.  
* **Known Users / Origin**: Professional traders.  
* **Evidence Type**: Institutional practice.  
* **Confidence Level**: Medium.  
126. **Imbalance \+ Price Ladder Scalping**  
* **Parent Family**: Institutional / Order flow  
* **Type**: Subtype  
* **Core Logic**: Combines order book depth with imbalance; scalps small ticks when depth is skewed.  
* **How it Works**: Use DOM (depth of market) to spot large resting orders; trade around them; exit quickly.  
* **Typical Use Case**: Scalping.  
* **Known Users / Origin**: Prop desks.  
* **Evidence Type**: Professional practice.  
* **Confidence Level**: Low.  
127. **VWAP Reversion Execution**  
* **Parent Family**: Institutional / Execution  
* **Type**: Variation  
* **Core Logic**: When price deviates far from VWAP during intraday trading, large traders fade extremes expecting reversion to VWAP.  
* **How it Works**: Enter contrarian position when price is \>2% away from VWAP; close near VWAP.  
* **Typical Use Case**: Intraday mean reversion.  
* **Known Users / Origin**: Prop desks.  
* **Evidence Type**: Institutional practice.  
* **Confidence Level**: Low.  
128. **Liquidity Provision Incentives**  
* **Parent Family**: Institutional / Market making  
* **Type**: Variation  
* **Core Logic**: Some exchanges pay rebates to makers; high rebate rates can incentivize quoting strategies.  
* **How it Works**: Provide liquidity to exchange with high maker rebates; profit from both spread and rebates; hedge exposure.  
* **Typical Use Case**: Professional market makers.  
* **Known Users / Origin**: Market making firms.  
* **Evidence Type**: Exchange fee schedule.  
* **Confidence Level**: Low.  
129. **Cross‑Asset Statistical Factor Model**  
* **Parent Family**: Institutional / Stat arb  
* **Type**: Variation  
* **Core Logic**: Applies factor analysis to identify common risk factors (e.g., market, size, momentum) in crypto returns; trade assets relative to their factor exposures.  
* **How it Works**: Estimate factor betas; compute residual returns; long assets with positive alpha; short those with negative.  
* **Typical Use Case**: Quant funds.  
* **Known Users / Origin**: Quant research.  
* **Evidence Type**: Academic research.  
* **Confidence Level**: Low.

## **7 DeFi / Yield Strategies**

130. **Liquidity Provision to Stable Pair**  
* **Parent Family**: DeFi / LP  
* **Type**: Core  
* **Core Logic**: Provide liquidity to AMM pools consisting of two stablecoins (e.g., USDC/DAI); low volatility reduces impermanent loss and yields trading fees.  
* **How it Works**: Deposit equal value of each stablecoin into pool; earn fee revenue; withdraw when yields decline.  
* **Typical Use Case**: Passive yield generation.  
* **Known Users / Origin**: DeFi farmers.  
* **Evidence Type**: DeFi practice.  
* **Confidence Level**: Medium.  
131. **Liquidity Provision to Volatile Pair with Impermanent Loss Hedging**  
* **Parent Family**: DeFi / LP  
* **Type**: Subtype  
* **Core Logic**: Provide liquidity to volatile pairs (e.g., ETH/USDT) while hedging price risk using options or perps to mitigate impermanent loss.  
* **How it Works**: Provide liquidity; simultaneously short underlying on perps or buy protective options; adjust hedge as position value changes.  
* **Typical Use Case**: Sophisticated LPs balancing yield and risk.  
* **Known Users / Origin**: DeFi specialists.  
* **Evidence Type**: DeFi research on impermanent loss.  
* **Confidence Level**: Medium.  
132. **Yield Farming Rotation**  
* **Parent Family**: DeFi / Yield farming  
* **Type**: Core  
* **Core Logic**: Rotates capital across DeFi protocols offering the highest APYs; monitors yields and risk; uses aggregators for optimization.  
* **How it Works**: Periodically check APYs on platforms like Aave, Compound, Curve; move funds to best yield after evaluating risk; account for gas fees.  
* **Typical Use Case**: Maximize yield on stablecoins.  
* **Known Users / Origin**: DeFi farmers.  
* **Evidence Type**: DeFi strategy articles.  
* **Confidence Level**: High.  
133. **DEX Arbitrage**  
* **Parent Family**: DeFi / Arbitrage  
* **Type**: Core  
* **Core Logic**: Exploit price differences between decentralized exchanges (DEXs) or across chains; uses flash loans or bridging to arbitrage.  
* **How it Works**: Identify price discrepancy; use flash loan to borrow capital; buy low on one DEX and sell high on another; repay loan; pocket difference.  
* **Typical Use Case**: Bots performing high‑speed on‑chain trades.  
* **Known Users / Origin**: DeFi arbitrageurs.  
* **Evidence Type**: DeFi articles.  
* **Confidence Level**: High.  
134. **Perpetual DEX Funding Arbitrage**  
* **Parent Family**: DeFi / Derivatives  
* **Type**: Subtype  
* **Core Logic**: Compares funding rates across decentralized perpetual protocols; arbitrages differences similar to CEX funding arbitrage.  
* **How it Works**: Long on DEX with negative funding and short on CEX with positive funding (or vice versa); account for gas and slippage.  
* **Typical Use Case**: Advanced DeFi traders.  
* **Known Users / Origin**: DeFi arbitrageurs.  
* **Evidence Type**: DeFi article.  
* **Confidence Level**: Medium.  
135. **Lending & Borrowing Looping Strategy**  
* **Parent Family**: DeFi / Lending  
* **Type**: Core  
* **Core Logic**: Deposit a token as collateral, borrow stablecoin against it, use borrowed funds to buy more of the collateral token and deposit again, increasing exposure and yield.  
* **How it Works**: Supply token to lending protocol; borrow stablecoin; buy more of token; loop until reaching safe loan‑to‑value; monitor liquidation risk.  
* **Typical Use Case**: Leveraged long positions.  
* **Known Users / Origin**: DeFi enthusiasts; described in DeFi articles.  
* **Evidence Type**: DeFi research.  
* **Confidence Level**: High.  
136. **Rate Arbitrage Between Lending Platforms**  
* **Parent Family**: DeFi / Lending  
* **Type**: Subtype  
* **Core Logic**: Borrows stablecoins from one lending platform at low interest and deposits them into another platform with higher yield; profit from spread.  
* **How it Works**: Compare borrow and lend rates across protocols (Aave vs Compound); perform cross‑platform lending/borrowing; manage collateral.  
* **Typical Use Case**: Passive income.  
* **Known Users / Origin**: DeFi farmers.  
* **Evidence Type**: DeFi strategy.  
* **Confidence Level**: Medium.  
137. **Stablecoin Arbitrage Across Chains**  
* **Parent Family**: DeFi / Arbitrage  
* **Type**: Variation  
* **Core Logic**: Stablecoins sometimes trade above or below $1 on various chains/exchanges; arbitrage by buying discounted stablecoin and selling at $1 elsewhere.  
* **How it Works**: Bridge stablecoin from cheap chain; sell on chain where it trades at premium; account for bridge fees and slippage.  
* **Typical Use Case**: Cross‑chain traders.  
* **Known Users / Origin**: DeFi arbitrageurs.  
* **Evidence Type**: DeFi practice.  
* **Confidence Level**: Medium.  
138. **Impermanent Loss Protection Protocols**  
* **Parent Family**: DeFi / LP  
* **Type**: Variation  
* **Core Logic**: Some protocols (e.g., Bancor v2) offer insurance or compensation for impermanent loss; providing liquidity with such protection reduces risk.  
* **How it Works**: Provide liquidity; if withdrawal value is less than initial deposit, protocol compensates difference; yields often lower due to insurance cost.  
* **Typical Use Case**: Risk‑averse LPs.  
* **Known Users / Origin**: DeFi participants.  
* **Evidence Type**: DeFi article.  
* **Confidence Level**: Medium.  
139. **Staking Yield Strategy**  
* **Parent Family**: DeFi / Staking  
* **Type**: Core  
* **Core Logic**: Lock tokens in staking contracts to earn yield and secure network; yields vary by protocol.  
* **How it Works**: Deposit tokens into staking contract; receive staking rewards; consider lock‑up period and slashing risk.  
* **Typical Use Case**: Long‑term investors.  
* **Known Users / Origin**: Crypto holders.  
* **Evidence Type**: Common practice.  
* **Confidence Level**: Medium.  
140. **Restaking & Liquid Staking Tokens**  
* **Parent Family**: DeFi / Staking  
* **Type**: Subtype  
* **Core Logic**: Use liquid staking tokens (e.g., stETH) to maintain liquidity while earning staking rewards; restake or leverage these tokens in DeFi for additional yield.  
* **How it Works**: Stake ETH via Lido; receive stETH; supply stETH as collateral in lending protocol; borrow; invest further.  
* **Typical Use Case**: Yield stacking.  
* **Known Users / Origin**: DeFi investors.  
* **Evidence Type**: DeFi practice.  
* **Confidence Level**: Medium.  
141. **Liquidation Farming on DeFi Lending**  
* **Parent Family**: DeFi / Lending  
* **Type**: Variation  
* **Core Logic**: Participates in liquidation auctions by repaying borrowers’ debt in return for collateral at discount.  
* **How it Works**: Monitor under‑collateralized loans; use bots to repay debt and claim collateral at a discount; sell collateral to profit.  
* **Typical Use Case**: Sophisticated DeFi users.  
* **Known Users / Origin**: Liquidation bots.  
* **Evidence Type**: DeFi practice.  
* **Confidence Level**: Low.  
142. **Synthetic Asset Arbitrage**  
* **Parent Family**: DeFi / Derivatives  
* **Type**: Subtype  
* **Core Logic**: Price of synthetic assets (e.g., sETH) should equal underlying; deviations create arbitrage.  
* **How it Works**: Buy underpriced synth; burn for underlying; sell for profit; or mint synth when overpriced and sell; balance supply.  
* **Typical Use Case**: Synthetix or Mirror protocols.  
* **Known Users / Origin**: DeFi arbitrageurs.  
* **Evidence Type**: DeFi practice.  
* **Confidence Level**: Low.  
143. **Insurance Pool Participation**  
* **Parent Family**: DeFi / Risk  
* **Type**: Subtype  
* **Core Logic**: Provide liquidity to DeFi insurance protocols (e.g., Nexus Mutual) to earn premiums; profits if claims remain low.  
* **How it Works**: Stake capital in risk pools; receive share of premiums; risk of claim payouts due to hacks or exploits.  
* **Typical Use Case**: Diversifying DeFi yields.  
* **Known Users / Origin**: Risk‑tolerant investors.  
* **Evidence Type**: DeFi practice.  
* **Confidence Level**: Low.  
144. **Flash Loan Arbitrage**  
* **Parent Family**: DeFi / Arbitrage  
* **Type**: Variation  
* **Core Logic**: Utilizes flash loans to borrow large sums without collateral for arbitrage, as long as the loan is repaid within the same transaction.  
* **How it Works**: Borrow via flash loan; conduct arbitrage across DEXs; repay loan; keep profit.  
* **Typical Use Case**: On‑chain arbitrage bots.  
* **Known Users / Origin**: Sophisticated developers.  
* **Evidence Type**: DeFi practice.  
* **Confidence Level**: Medium.  
145. **Governance Token Short on Dilutive Emissions**  
* **Parent Family**: DeFi / Narrative  
* **Type**: Variation  
* **Core Logic**: Some DeFi protocols have high token emissions that dilute supply; short token when emissions are high relative to demand.  
* **How it Works**: Analyze emissions schedule; borrow token; sell short; wait until emissions drop or price corrects.  
* **Typical Use Case**: DeFi tokens with unsustainable yield.  
* **Known Users / Origin**: Fundamental analysts.  
* **Evidence Type**: Tokenomics analysis.  
* **Confidence Level**: Low.  
146. **DAO Treasury Diversification Trade**  
* **Parent Family**: DeFi / Governance  
* **Type**: Variation  
* **Core Logic**: Some DAOs decide to diversify treasury holdings; anticipation of large sell or buy orders can drive price.  
* **How it Works**: Monitor governance votes; front‑run or follow trades; exit after treasury diversification executed.  
* **Typical Use Case**: Governance tokens.  
* **Known Users / Origin**: Governance participants.  
* **Evidence Type**: Governance research.  
* **Confidence Level**: Low.

## **8 Algorithmic / Quant Strategies**

147. **Rule‑Based Moving Average Bot**  
* **Parent Family**: Algorithmic / Rule‑based  
* **Type**: Core  
* **Core Logic**: Automates execution of MA crossover strategy; removes human emotion.  
* **How it Works**: Program bot to compute moving averages; automatically place trades when crossover occurs; set stop‑losses; monitor performance.  
* **Typical Use Case**: Retail traders using bots.  
* **Known Users / Origin**: Described by Bookmap article.  
* **Evidence Type**: Common practice.  
* **Confidence Level**: Medium.  
148. **Indicator Stack Bot**  
* **Parent Family**: Algorithmic / Rule‑based  
* **Type**: Subtype  
* **Core Logic**: Combines multiple indicators (e.g., MA, RSI, MACD) with AND/OR logic to generate signals; reduces false positives.  
* **How it Works**: Use pre‑defined rules; trade when all conditions align; adjust parameters.  
* **Typical Use Case**: DIY algorithmic trading.  
* **Known Users / Origin**: Retail algorithmic traders.  
* **Evidence Type**: Common practice.  
* **Confidence Level**: Low.  
149. **Scalping Bot**  
* **Parent Family**: Algorithmic / Rule‑based  
* **Type**: Variation  
* **Core Logic**: Executes very short‑term trades to capture small price differences; uses limit orders and quick exits.  
* **How it Works**: Program bot to place limit orders at micro support/resistance; cancel or modify quickly; rely on high fill rate.  
* **Typical Use Case**: High liquidity markets.  
* **Known Users / Origin**: Retail and professional traders.  
* **Evidence Type**: HFT practice.  
* **Confidence Level**: Low.  
150. **Arbitrage Bot (CEX \+ DEX)**  
* **Parent Family**: Algorithmic / Arbitrage  
* **Type**: Core  
* **Core Logic**: Programmed to identify and execute cross‑exchange or DEX arbitrage automatically in milliseconds.  
* **How it Works**: Monitor price feeds; compute potential profit; execute trades across multiple venues; handle gas costs.  
* **Typical Use Case**: On‑chain arbitrage.  
* **Known Users / Origin**: DeFi bots.  
* **Evidence Type**: DeFi practice.  
* **Confidence Level**: Medium.  
151. **Machine‑Learning‑Enhanced Execution**  
* **Parent Family**: Algorithmic / ML  
* **Type**: Variation  
* **Core Logic**: Uses ML models to predict short‑term order book movements or slippage; optimizes execution schedule accordingly.  
* **How it Works**: Feed order book data into model; adjust order submission; minimize impact.  
* **Typical Use Case**: Institutional desks.  
* **Known Users / Origin**: Research labs.  
* **Evidence Type**: Emerging practice.  
* **Confidence Level**: Low.  
152. **Rebalancing Algorithm (Periodic)**  
* **Parent Family**: Algorithmic / Portfolio  
* **Type**: Core  
* **Core Logic**: Periodically rebalances a diversified crypto portfolio back to target weights to manage risk and maintain allocations.  
* **How it Works**: At fixed intervals (e.g., monthly), sell outperforming assets, buy underperforming ones; reduce drift.  
* **Typical Use Case**: Long‑term investors.  
* **Known Users / Origin**: Robo advisors.  
* **Evidence Type**: Portfolio management theory.  
* **Confidence Level**: Medium.  
153. **Momentum \+ Mean Reversion Hybrid Bot**  
* **Parent Family**: Algorithmic / Hybrid  
* **Type**: Variation  
* **Core Logic**: Identifies trending coins for momentum trades while simultaneously deploying mean‑reversion trades on range‑bound coins; diversifies risk.  
* **How it Works**: Classify assets by trending vs ranging; run appropriate algorithm for each; allocate capital accordingly.  
* **Typical Use Case**: Automated diversified strategies.  
* **Known Users / Origin**: Quant traders.  
* **Evidence Type**: Quant research.  
* **Confidence Level**: Low.  
154. **AI‑Assisted Discretionary Trading**  
* **Parent Family**: Algorithmic / Hybrid  
* **Type**: Core  
* **Core Logic**: Combines human decision‑making with AI models providing recommendations based on technical/fundamental indicators; human retains override.  
* **How it Works**: Use AI to generate trade suggestions; human reviews; executes trades; learn from outcomes.  
* **Typical Use Case**: Hedge funds experimenting with AI.  
* **Known Users / Origin**: Not clearly attributable.  
* **Evidence Type**: Emerging practice.  
* **Confidence Level**: Low.  
155. **Risk Parity Allocation Algorithm**  
* **Parent Family**: Algorithmic / Portfolio  
* **Type**: Subtype  
* **Core Logic**: Allocates capital such that each asset contributes equal risk to the overall portfolio; volatility of assets determines weights.  
* **How it Works**: Estimate volatility/covariance; solve for weights that equalize risk contributions; rebalance periodically.  
* **Typical Use Case**: Multi‑asset crypto portfolios.  
* **Known Users / Origin**: Quant funds.  
* **Evidence Type**: Portfolio theory.  
* **Confidence Level**: Low.  
156. **Reinforcement Learning Rebalancer**  
* **Parent Family**: Algorithmic / ML  
* **Type**: Variation  
* **Core Logic**: Uses reinforcement learning to adjust portfolio weights adaptively based on reward functions (e.g., Sharpe ratio).  
* **How it Works**: Train agent in simulation; apply to real portfolio; update weights; manage risk.  
* **Typical Use Case**: Experimental quant funds.  
* **Known Users / Origin**: Academic research.  
* **Evidence Type**: ML research.  
* **Confidence Level**: Low.  
157. **Volatility Targeting Strategy**  
* **Parent Family**: Algorithmic / Portfolio  
* **Type**: Variation  
* **Core Logic**: Adjusts position sizes based on realized volatility; reduces exposure during high volatility and increases during low volatility.  
* **How it Works**: Estimate historical volatility; compute target allocation; scale position size to maintain constant portfolio volatility.  
* **Typical Use Case**: Risk management in quant funds.  
* **Known Users / Origin**: Institutional funds.  
* **Evidence Type**: Portfolio theory.  
* **Confidence Level**: Medium.

## **9 Hybrid Systems**

158. **On‑Chain \+ Technical Confluence**  
* **Parent Family**: Hybrid Systems  
* **Type**: Core  
* **Core Logic**: Combines on‑chain indicators (e.g., exchange flows) with technical chart signals; trades when both align.  
* **How it Works**: For example, buy when exchange outflows spike (whale accumulation) and price breaks above resistance; exit when flows turn neutral.  
* **Typical Use Case**: Swing trading major coins.  
* **Known Users / Origin**: On‑chain analysts and traders.  
* **Evidence Type**: Derived from on‑chain and technical articles.  
* **Confidence Level**: Medium.  
159. **Funding \+ Social Sentiment Filter**  
* **Parent Family**: Hybrid Systems  
* **Type**: Subtype  
* **Core Logic**: Uses funding rate extremes as initial signal; confirms using social sentiment (fear & greed index); trades only when both indicate same direction.  
* **How it Works**: If funding is positive and sentiment extremely greedy, short; if funding negative and sentiment extremely fearful, long.  
* **Typical Use Case**: Contrarian trades.  
* **Known Users / Origin**: Not clearly attributable.  
* **Evidence Type**: Derived from funding and sentiment articles.  
* **Confidence Level**: Medium.  
160. **Multi‑Factor Quant Scoring**  
* **Parent Family**: Hybrid Systems  
* **Type**: Core  
* **Core Logic**: Creates composite score using technical momentum, on‑chain flow, funding rates, sentiment and volatility; ranks tokens; invests in top scores.  
* **How it Works**: Normalize each factor; weight factors based on historical predictive power; update scores; allocate capital accordingly.  
* **Typical Use Case**: Quantitative hedge funds.  
* **Known Users / Origin**: Multi‑factor research.  
* **Evidence Type**: Academic & institutional research.  
* **Confidence Level**: Low.  
161. **Technical \+ Fundamental Confirmation**  
* **Parent Family**: Hybrid Systems  
* **Type**: Subtype  
* **Core Logic**: Takes technical breakout trades only when underlying fundamentals (e.g., tokenomics, ecosystem growth) support the narrative.  
* **How it Works**: Evaluate fundamentals; if strong, take breakout; if weak, avoid.  
* **Typical Use Case**: Medium‑term investing.  
* **Known Users / Origin**: Fundamental/technical analysts.  
* **Evidence Type**: Derived from narrative and technical sources.  
* **Confidence Level**: Low.  
162. **Funding \+ Basis \+ OI Composite**  
* **Parent Family**: Hybrid Systems  
* **Type**: Variation  
* **Core Logic**: Combines funding rate, futures basis and open interest; enters contrarian or momentum trades when all three align.  
* **How it Works**: If funding positive, basis high, OI increasing, consider short; opposite for long.  
* **Typical Use Case**: Perp traders.  
* **Known Users / Origin**: Not clearly attributable.  
* **Evidence Type**: Derived from funding, basis and OI articles.  
* **Confidence Level**: Low.  
163. **On‑Chain \+ Sentiment Contrarian**  
* **Parent Family**: Hybrid Systems  
* **Type**: Variation  
* **Core Logic**: When on‑chain metrics indicate strong accumulation but social sentiment is extremely fearful, buy; when metrics show distribution and sentiment extremely greedy, sell.  
* **How it Works**: Combine whale outflows (bullish) with fear index; trade contrarian.  
* **Typical Use Case**: Medium‑term swing trades.  
* **Known Users / Origin**: Not clearly attributable.  
* **Evidence Type**: Derived from on‑chain and sentiment articles.  
* **Confidence Level**: Medium.  
164. **Technical \+ Options Skew Confirmation**  
* **Parent Family**: Hybrid Systems  
* **Type**: Variation  
* **Core Logic**: Use options volatility skew as sentiment gauge for technical trades; for example, when technical breakout occurs and skew indicates bullish hedging (puts expensive), confirm long.  
* **How it Works**: Check IV skew; align with chart pattern; enter if supportive.  
* **Typical Use Case**: Options‑aware traders.  
* **Known Users / Origin**: Not clearly attributable.  
* **Evidence Type**: Derived from options skew article.  
* **Confidence Level**: Low.

## **10 Risk & Capital Management**

165. **Fixed Fraction Position Sizing**  
* **Parent Family**: Risk / Capital management  
* **Type**: Core  
* **Core Logic**: Risks a fixed percentage (e.g., 2%) of total capital on each trade; ensures no single trade causes catastrophic loss.  
* **How it Works**: Determine maximum acceptable loss; compute position size based on stop‑loss distance; adjust for volatility.  
* **Typical Use Case**: Professional risk management.  
* **Known Users / Origin**: Widely taught in trading courses.  
* **Evidence Type**: Risk management article.  
* **Confidence Level**: High.  
166. **Kelly Criterion Position Sizing**  
* **Parent Family**: Risk  
* **Type**: Subtype  
* **Core Logic**: Allocates capital according to the Kelly formula to maximize long‑term growth while minimizing risk.  
* **How it Works**: Estimate edge (expected return) and win/loss ratio; compute fraction \= edge/odds; bet that fraction; adjust as conditions change.  
* **Typical Use Case**: Advanced gamblers/traders.  
* **Known Users / Origin**: Quant funds.  
* **Evidence Type**: Financial theory.  
* **Confidence Level**: Low.  
167. **Volatility Adjusted Position Sizing**  
* **Parent Family**: Risk  
* **Type**: Variation  
* **Core Logic**: Scales position sizes inversely with asset volatility; more volatile assets receive smaller allocations.  
* **How it Works**: Calculate historical volatility; compute risk parity weight; set position size accordingly.  
* **Typical Use Case**: Multi‑asset portfolios.  
* **Known Users / Origin**: Quant funds.  
* **Evidence Type**: Risk management practice.  
* **Confidence Level**: Medium.  
168. **Stop‑Loss Placement Under Support**  
* **Parent Family**: Risk  
* **Type**: Core  
* **Core Logic**: Places stop‑loss orders slightly below support levels in uptrending markets to limit downside.  
* **How it Works**: Identify recent swing low; set stop a few percent below; adjust for volatility; risk no more than predetermined fraction.  
* **Typical Use Case**: Swing trading on majors.  
* **Known Users / Origin**: Technical traders.  
* **Evidence Type**: Risk management article.  
* **Confidence Level**: High.  
169. **Trailing Stop Strategy**  
* **Parent Family**: Risk  
* **Type**: Subtype  
* **Core Logic**: Adjusts stop‑loss in the direction of trade as price moves favorably; locks in profits while allowing room for trend to continue.  
* **How it Works**: Set initial stop; if price increases, move stop upward by fixed distance or percentage; never move stop lower.  
* **Typical Use Case**: Trend following strategies.  
* **Known Users / Origin**: Traders widely.  
* **Evidence Type**: Common practice.  
* **Confidence Level**: High.  
170. **Risk‑Reward Ratio Targeting**  
* **Parent Family**: Risk  
* **Type**: Variation  
* **Core Logic**: Only enters trades when potential reward at least twice the potential loss (RRR 1:2) to ensure positive expectancy.  
* **How it Works**: Set profit target at twice distance of stop; ensure strategy produces more profitable trades than losing trades.  
* **Typical Use Case**: All discretionary trading.  
* **Known Users / Origin**: Risk management best practices.  
* **Evidence Type**: Risk management article.  
* **Confidence Level**: High.  
171. **Leverage Control**  
* **Parent Family**: Risk  
* **Type**: Core  
* **Core Logic**: Limits leverage to avoid liquidation; chooses conservative leverage based on asset volatility.  
* **How it Works**: Determine maximum acceptable drawdown; set leverage accordingly; adjust as volatility changes.  
* **Typical Use Case**: Futures/perps trading.  
* **Known Users / Origin**: Professional traders.  
* **Evidence Type**: Common practice.  
* **Confidence Level**: High.  
172. **Portfolio Diversification Across Sectors**  
* **Parent Family**: Risk  
* **Type**: Core  
* **Core Logic**: Spread investments across different sectors (Layer‑1, DeFi, NFTs) and instruments (spot, futures, DeFi) to reduce idiosyncratic risk.  
* **How it Works**: Allocate capital to uncorrelated assets; reallocate when correlations increase; manage exposures.  
* **Typical Use Case**: Long‑term portfolios.  
* **Known Users / Origin**: Portfolio managers.  
* **Evidence Type**: Investment theory.  
* **Confidence Level**: Medium.  
173. **Stablecoin Hedging**  
* **Parent Family**: Risk  
* **Type**: Subtype  
* **Core Logic**: Holds portion of portfolio in stablecoins to preserve capital and provide dry powder for opportunities.  
* **How it Works**: Allocate 20–50% to USDT/USDC/DAI; increase stablecoin allocation during market uncertainty; rebalance into crypto when risk decreases.  
* **Typical Use Case**: Market downturns.  
* **Known Users / Origin**: Crypto investors.  
* **Evidence Type**: Common practice.  
* **Confidence Level**: Medium.  
174. **Insurance via Options**  
* **Parent Family**: Risk / Hedging  
* **Type**: Variation  
* **Core Logic**: Buys puts or call spreads to protect portfolio from adverse moves; acts as portfolio insurance.  
* **How it Works**: Evaluate cost of protection; buy options; size appropriately.  
* **Typical Use Case**: Large crypto holders.  
* **Known Users / Origin**: Institutional investors.  
* **Evidence Type**: Options hedging.  
* **Confidence Level**: Medium.  
175. **Dollar‑Cost Averaging (DCA)**  
* **Parent Family**: Risk / Capital management  
* **Type**: Core  
* **Core Logic**: Invests a fixed amount of money at regular intervals regardless of price; reduces impact of volatility.  
* **How it Works**: Purchase predetermined amount weekly or monthly; accumulate over time; average cost basis.  
* **Typical Use Case**: Long‑term investors.  
* **Known Users / Origin**: Retail investors widely.  
* **Evidence Type**: Personal finance practice.  
* **Confidence Level**: High.  
176. **Laddered Entry and Exit**  
* **Parent Family**: Risk  
* **Type**: Variation  
* **Core Logic**: Breaks entry/exit orders into multiple tranches at different price levels to average entry price and manage slippage.  
* **How it Works**: Place limit orders at incremental prices; gradually build position; similarly take profits at multiple targets.  
* **Typical Use Case**: Traders wanting to smooth execution.  
* **Known Users / Origin**: Discretionary traders.  
* **Evidence Type**: Trading practice.  
* **Confidence Level**: Medium.  
177. **Liquidation Threshold Monitoring**  
* **Parent Family**: Risk  
* **Type**: Variation  
* **Core Logic**: Calculates liquidation price for each leveraged position; sets alerts; reduces risk as price approaches threshold.  
* **How it Works**: Use exchange calculators; adjust margin or reduce position to avoid forced liquidation; maintain margin ratio.  
* **Typical Use Case**: Futures/perp traders.  
* **Known Users / Origin**: Everyone using leverage.  
* **Evidence Type**: Risk management practice.  
* **Confidence Level**: High.  
178. **Hedged Beta Exposure**  
* **Parent Family**: Risk  
* **Type**: Variation  
* **Core Logic**: For altcoins with high beta to Bitcoin, hedge overall market exposure by shorting BTC futures while remaining long altcoins.  
* **How it Works**: Determine beta; size BTC short to offset portfolio’s beta; adjust as correlations change.  
* **Typical Use Case**: Hedge funds wanting market‑neutral alt exposure.  
* **Known Users / Origin**: Quant funds.  
* **Evidence Type**: Portfolio management.  
* **Confidence Level**: Medium.  
179. **Rebalancing into Stablecoins After Parabolic Run**  
* **Parent Family**: Risk / Capital management  
* **Type**: Subtype  
* **Core Logic**: After strong bull run, lock in gains by selling part of position into stablecoins, anticipating correction.  
* **How it Works**: Determine profit target; sell portion; hold stablecoins; repurchase after pullback.  
* **Typical Use Case**: Post‑parabolic markets.  
* **Known Users / Origin**: Experienced traders.  
* **Evidence Type**: Common practice.  
* **Confidence Level**: Medium.  
180. **Dynamic Position Sizing Based on Drawdown**  
* **Parent Family**: Risk  
* **Type**: Variation  
* **Core Logic**: Reduces position size after a losing streak; increases after winning streak; aims to protect capital.  
* **How it Works**: If drawdown exceeds X%, reduce risk per trade; increase when portfolio recovers.  
* **Typical Use Case**: Active traders.  
* **Known Users / Origin**: Not clearly attributable.  
* **Evidence Type**: Risk management literature.  
* **Confidence Level**: Low.  
181. **Stop‑Loss Under Volatility Band**  
* **Parent Family**: Risk  
* **Type**: Variation  
* **Core Logic**: Places stop at a multiple of ATR below/above entry to account for volatility; avoids getting stopped by noise.  
* **How it Works**: Compute ATR; set stop \= entry price − k×ATR (for long) or \+k×ATR (for short).  
* **Typical Use Case**: Trend following with volatility adjustment.  
* **Known Users / Origin**: Technical traders.  
* **Evidence Type**: Trading literature.  
* **Confidence Level**: Medium.  
182. **Capital Allocation Caps**  
* **Parent Family**: Risk  
* **Type**: Subtype  
* **Core Logic**: Caps maximum percentage of portfolio allocated to a single trade or sector; prevents concentration risk.  
* **How it Works**: Set limit (e.g., 10% per position); reallocate if exceeded due to price increases.  
* **Typical Use Case**: Portfolio management.  
* **Known Users / Origin**: Investment advisors.  
* **Evidence Type**: Risk management practice.  
* **Confidence Level**: Medium.  
183. **Stress Testing Portfolio**  
* **Parent Family**: Risk  
* **Type**: Core  
* **Core Logic**: Simulates portfolio performance under extreme scenarios (e.g., 50% market drop, exchange hack) to evaluate resilience.  
* **How it Works**: Use historical scenarios or Monte Carlo simulation; adjust allocations based on results.  
* **Typical Use Case**: Institutional funds.  
* **Known Users / Origin**: Risk managers.  
* **Evidence Type**: Financial risk management.  
* **Confidence Level**: Low.  
184. **Risk Buffer via Insurance Protocols**  
* **Parent Family**: Risk / DeFi  
* **Type**: Variation  
* **Core Logic**: Purchase coverage against smart contract hacks or exchange failures to protect capital.  
* **How it Works**: Buy coverage from DeFi insurance providers; pay premium; file claim if hack occurs.  
* **Typical Use Case**: DeFi participants.  
* **Known Users / Origin**: Risk‑conscious investors.  
* **Evidence Type**: DeFi practice.  
* **Confidence Level**: Low.  
185. **Portfolio Volatility Cap**  
* **Parent Family**: Risk  
* **Type**: Variation  
* **Core Logic**: Ensures portfolio’s annualized volatility stays below predetermined threshold; reduces exposures when volatility exceeds threshold.  
* **How it Works**: Estimate daily portfolio volatility; scale down positions if volatility \> target; scale up if below.  
* **Typical Use Case**: Quant funds.  
* **Known Users / Origin**: Institutional investors.  
* **Evidence Type**: Portfolio management.  
* **Confidence Level**: Low.  
186. **Liquidity Risk Assessment**  
* **Parent Family**: Risk  
* **Type**: Variation  
* **Core Logic**: Evaluates liquidity of each token or exchange; avoids large positions in illiquid markets to prevent slippage.  
* **How it Works**: Analyze order book depth and daily volume; set maximum position size; adjust as liquidity changes.  
* **Typical Use Case**: Portfolio managers.  
* **Known Users / Origin**: Institutional investors.  
* **Evidence Type**: Risk management.  
* **Confidence Level**: Medium.  
187. **Counterparty Risk Diversification**  
* **Parent Family**: Risk  
* **Type**: Variation  
* **Core Logic**: Spreads capital across multiple exchanges and custodians to mitigate risk of platform failure or hack.  
* **How it Works**: Deposit funds across several reputable exchanges and wallets; limit exposure to any single entity; regularly withdraw to cold storage.  
* **Typical Use Case**: Traders storing large amounts.  
* **Known Users / Origin**: Institutional and retail investors.  
* **Evidence Type**: Risk management.  
* **Confidence Level**: Medium.  
188. **Stablecoin Yield Diversification**  
* **Parent Family**: Risk  
* **Type**: Variation  
* **Core Logic**: Diversifies stablecoin holdings across different providers and chains to reduce risk of peg loss or platform failure.  
* **How it Works**: Hold USDC, USDT, DAI, FRAX; deposit to different protocols; monitor peg stability.  
* **Typical Use Case**: Yield farming.  
* **Known Users / Origin**: DeFi investors.  
* **Evidence Type**: DeFi practice.  
* **Confidence Level**: Low.  
189. **Emergency Stop on Exchange Outage**  
* **Parent Family**: Risk  
* **Type**: Variation  
* **Core Logic**: Implements automatic liquidation or hedging when an exchange experiences downtime or connectivity issues.  
* **How it Works**: Monitor latency; if connectivity lost, automatically close positions on other exchanges; ensures risk limited.  
* **Typical Use Case**: Automated traders.  
* **Known Users / Origin**: HFT firms.  
* **Evidence Type**: Risk management practice.  
* **Confidence Level**: Low.  
190. **Max Drawdown Alert System**  
* **Parent Family**: Risk  
* **Type**: Variation  
* **Core Logic**: Tracks drawdown of portfolio; if exceeds predetermined threshold (e.g., 20%), stops trading or reduces risk.  
* **How it Works**: Real‑time monitoring; triggers risk mitigation actions.  
* **Typical Use Case**: Systematic trading strategies.  
* **Known Users / Origin**: Risk managers.  
* **Evidence Type**: Risk management.  
* **Confidence Level**: Medium.  
191. **Staged Exit Strategy**  
* **Parent Family**: Risk  
* **Type**: Variation  
* **Core Logic**: Gradually exit a position rather than selling all at once to avoid slippage and emotional decision‑making.  
* **How it Works**: Sell predetermined percentage at various price targets; adjust stops; evaluate market context.  
* **Typical Use Case**: Exiting large positions.  
* **Known Users / Origin**: Traders.  
* **Evidence Type**: Trading practice.  
* **Confidence Level**: Medium.  
192. **Hedging Stablecoin Depeg Risk**  
* **Parent Family**: Risk  
* **Type**: Variation  
* **Core Logic**: Protects against risk of stablecoin losing its peg by diversifying into multiple stables or hedging with inverse derivatives.  
* **How it Works**: Spread holdings across USDC, USDT, DAI; hold put options on stablecoin tokens; monitor on‑chain reserves.  
* **Typical Use Case**: DeFi participants.  
* **Known Users / Origin**: Not clearly attributable.  
* **Evidence Type**: Risk management.  
* **Confidence Level**: Low.  
193. **Portfolio Insurance via Stable Yield**  
* **Parent Family**: Risk  
* **Type**: Variation  
* **Core Logic**: Allocates portion of portfolio to yield‑generating stablecoins to offset potential losses in volatile positions.  
* **How it Works**: Deposit stablecoins into protocols with fixed rates; use interest income to hedge volatility.  
* **Typical Use Case**: Conservative investors.  
* **Known Users / Origin**: DeFi investors.  
* **Evidence Type**: DeFi practice.  
* **Confidence Level**: Low.  
194. **Tax‑Loss Harvesting**  
* **Parent Family**: Risk / Capital management  
* **Type**: Subtype  
* **Core Logic**: Sells losing positions to realize tax losses and offset gains; repurchases similar assets after wash‑sale period if allowed.  
* **How it Works**: Identify positions below cost basis; sell before year end; repurchase after waiting period; track regulations.  
* **Typical Use Case**: Investors in jurisdictions where crypto taxed.  
* **Known Users / Origin**: Financial advisors.  
* **Evidence Type**: Tax planning.  
* **Confidence Level**: Low.  
195. **Rebalancing Frequency Optimization**  
* **Parent Family**: Risk / Portfolio  
* **Type**: Variation  
* **Core Logic**: Tests different rebalancing frequencies (daily, weekly, monthly) to find optimal trade‑off between turnover and risk control.  
* **How it Works**: Backtest; select frequency that maximizes risk‑adjusted returns; implement.  
* **Typical Use Case**: Portfolio management.  
* **Known Users / Origin**: Quant funds.  
* **Evidence Type**: Portfolio research.  
* **Confidence Level**: Low.  
196. **Options Collar Hedging**  
* **Parent Family**: Risk / Options  
* **Type**: Variation  
* **Core Logic**: Protects long position by buying put and selling call to offset cost; caps upside but reduces premium.  
* **How it Works**: Hold spot; buy OTM put; sell OTM call; net cost low; protect downside.  
* **Typical Use Case**: Investors seeking limited risk.  
* **Known Users / Origin**: Institutional investors.  
* **Evidence Type**: Options hedging.  
* **Confidence Level**: Medium.  
197. **Diversified Custody**  
* **Parent Family**: Risk  
* **Type**: Subtype  
* **Core Logic**: Splits storage across cold wallets, hardware wallets, and institutional custodians to mitigate theft/hack risk.  
* **How it Works**: Use multiple wallets; multi‑sig; distribute keys; use regulated custodians for large amounts.  
* **Typical Use Case**: High net worth individuals.  
* **Known Users / Origin**: Many investors.  
* **Evidence Type**: Security practice.  
* **Confidence Level**: Medium.  
198. **Leverage Ladder**  
* **Parent Family**: Risk  
* **Type**: Variation  
* **Core Logic**: Uses increasing leverage on small portion of position while keeping majority unleveraged; limits risk of liquidation.  
* **How it Works**: Hold core position spot; add small leveraged long; if price drops, reduce leverage; maintain core.  
* **Typical Use Case**: Traders seeking extra exposure without full risk.  
* **Known Users / Origin**: Not clearly attributable.  
* **Evidence Type**: Trading practice.  
* **Confidence Level**: Low.  
199. **Position Hedging via Inverse Exchange‑Traded Products**  
* **Parent Family**: Risk  
* **Type**: Variation  
* **Core Logic**: Uses inverse exchange‑traded products or tokens (e.g., \-1x BTC tokens) to hedge long holdings without using futures.  
* **How it Works**: Buy inverse token equal to portion of holdings; hedge market downturn; adjust weight.  
* **Typical Use Case**: Retail investors without access to derivatives.  
* **Known Users / Origin**: Not clearly attributable.  
* **Evidence Type**: Exchange product docs.  
* **Confidence Level**: Low.  
200. **Emergency Wallet Seed Backup Strategy**  
* **Parent Family**: Risk  
* **Type**: Variation  
* **Core Logic**: Secures wallet seeds in multiple secure locations (encrypted drives, safety deposit boxes) to avoid loss of funds.  
* **How it Works**: Create multiple backups; split seed into parts; store separately; ensure proper recovery.  
* **Typical Use Case**: Long‑term crypto holders.  
* **Known Users / Origin**: Security‑conscious investors.  
* **Evidence Type**: Security best practices.  
* **Confidence Level**: Medium.  
201. **Dynamic Hedging via Perps**  
* **Parent Family**: Risk / Hedging  
* **Type**: Variation  
* **Core Logic**: Continuously adjusts size of perpetual futures hedge to maintain fixed delta exposure relative to underlying portfolio.  
* **How it Works**: Calculate portfolio delta; open opposite position in perps; adjust as portfolio composition changes.  
* **Typical Use Case**: Hedge funds.  
* **Known Users / Origin**: Not clearly attributable.  
* **Evidence Type**: Hedging practice.  
* **Confidence Level**: Medium.  
202. **Self‑Custody vs Exchange Risk Management**  
* **Parent Family**: Risk  
* **Type**: Variation  
* **Core Logic**: Balances holding assets on exchanges for liquidity vs self‑custody for security; decide based on immediate trading needs and risk tolerance.  
* **How it Works**: Keep only trading capital on exchanges; store rest offline; rotate between as needed.  
* **Typical Use Case**: All crypto users.  
* **Known Users / Origin**: Security guidelines.  
* **Evidence Type**: Security best practices.  
* **Confidence Level**: High.  
203. **Insurance on CeFi Platforms**  
* **Parent Family**: Risk  
* **Type**: Variation  
* **Core Logic**: Deposits on centralized lending platforms sometimes include insurance fund; evaluate coverage before depositing.  
* **How it Works**: Research platform insurance; deposit only amounts covered; diversify across insured platforms.  
* **Typical Use Case**: Yield seekers on CeFi.  
* **Known Users / Origin**: CeFi users.  
* **Evidence Type**: CeFi practice.  
* **Confidence Level**: Low.  
204. **Use of Multi‑Sig for Fund Transfers**  
* **Parent Family**: Risk  
* **Type**: Variation  
* **Core Logic**: Requires multiple signatures to authorize a transaction; reduces single‑point failure.  
* **How it Works**: Set up multi‑sig wallet; require 2‑of‑3 or 3‑of‑5 signatures; ensures transactions cannot be executed by a single compromised key.  
* **Typical Use Case**: Institutional treasury management.  
* **Known Users / Origin**: Foundations and DAOs.  
* **Evidence Type**: Security practice.  
* **Confidence Level**: High.  
205. **Fixed Withdrawal Schedule**  
* **Parent Family**: Risk  
* **Type**: Variation  
* **Core Logic**: Regularly withdraw profits or principal from trading accounts to reduce exchange exposure and psychological risk.  
* **How it Works**: Set monthly or quarterly withdrawals; maintain discipline; prevents reinvesting entire profits.  
* **Typical Use Case**: Retail and professional traders.  
* **Known Users / Origin**: Trading psychology.  
* **Evidence Type**: Risk management.  
* **Confidence Level**: Medium.  
206. **Structured Exit Laddering**  
* **Parent Family**: Risk  
* **Type**: Variation  
* **Core Logic**: Pre‑plans exit levels and times for long‑term holdings; sells portions at predetermined price milestones or time intervals.  
* **How it Works**: Define price targets or time triggers; allocate portion of position to each; reduces decision fatigue and FOMO.  
* **Typical Use Case**: Long‑term investors wanting to realize gains gradually.  
* **Known Users / Origin**: Experienced investors.  
* **Evidence Type**: Investment practice.  
* **Confidence Level**: Medium.

