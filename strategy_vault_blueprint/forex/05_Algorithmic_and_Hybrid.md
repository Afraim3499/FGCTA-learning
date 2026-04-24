# Forex Strategy Vault: Algorithmic, Quant, and Hybrid Systems

**Module Overview:** This module covers advanced quantitative models, statistical arbitrage, and hybrid systems that blend multiple disciplines (e.g., Macro + Technicals).

## Strategy Roster (Strategies 141-170)
*Every strategy below will be ingested into the `Strategy` database and taught in the Vault.*

### Quantitative & Statistical Arbitrage (141-155)
141. **Statistical Arbitrage (Pairs Trading)**: Going long EUR/USD and short GBP/USD when their historical correlation breaks, betting on mean reversion.
142. **Triangular Arbitrage**: Trading EUR/USD, USD/JPY, and EUR/JPY to exploit cross-rate inefficiencies before algorithms close the gap.
143. **Cointegration-Based Spread Trading**: Trading a basket of currencies that are statistically cointegrated.
144. **Hidden Markov Model (HMM) Regime Switching**: Using HMMs to mathematically determine if the market is trending or ranging, and auto-switching the strategy.
145. **Machine Learning Predictive Execution**: Using ML to predict the optimal microsecond to execute a large order to minimize slippage.
146. **Principal Component Analysis (PCA) Factor Trading**: Isolating the primary factors driving FX returns (e.g., USD strength, global risk) and trading the residual variance.
147. **Quantile Regression Forecasting**: Forecasting the conditional quantiles of currency returns to trade asymmetric tail risks.
148. **Structural Break Detection**: Using Bai-Perron tests to detect regime changes and pause algorithmic trading to prevent losses.
149. **High-Frequency Market Making**: Providing two-sided quotes to capture the bid-ask spread and exchange rebates.
150. **Latency Arbitrage**: Exploiting microsecond delays in price feeds between different brokers or liquidity providers.
151. **Volatility Premium Arbitrage**: Trading the difference between implied volatility and realized volatility using delta-hedged options.
152. **Mean Reversion of Yield Differentials**: Stat-arb applied to sovereign yield curves to predict FX spot movements.
153. **Algorithmic News Reading (NLP)**: Using Natural Language Processing to scan central bank statements and execute trades in milliseconds.
154. **Order Book Dynamics Modeling**: Using queuing theory to predict the probability of a limit order being filled before a price move.
155. **Reinforcement Learning Execution**: Training an AI agent to execute a $100M order over 4 hours with minimum market impact.

### Hybrid Systems & Confluence (156-170)
156. **Macro + Technical Breakout**: Only taking technical breakouts if they align with the central bank interest rate differential.
157. **COT Sentiment + Order Block Entry**: Identifying extreme COT commercial positioning, then dropping to a 15M chart to enter on an Institutional Order Block.
158. **Multi-Asset Correlation Trade**: Trading USD/JPY based on the real-time breakout of the US 10-Year Treasury Yield chart.
159. **Options Skew + Spot Reversion**: Fading a spot market rally if the options skew shows institutions are aggressively buying puts.
160. **Carry Trade + Trend Following**: Buying a high-yield currency only when it is above its 200-day moving average.
161. **Fundamental Value + Technical Timing**: Using Purchasing Power Parity to find undervalued currencies, but waiting for a MACD cross to enter.
162. **News Fade + Fibonacci Confluence**: Fading an NFP spike exactly at the 61.8% daily Fibonacci retracement level.
163. **Volume Profile + Moving Average**: Buying the POC only if it aligns with the 50 EMA.
164. **VIX + Carry Trade Hybrid**: Mechanically exiting all Carry Trades the moment the VIX crosses 25, regardless of technicals.
165. **Retail Sentiment + Support/Resistance**: Fading support levels when retail sentiment is overwhelmingly long.
166. **Yield Curve Inversion + Safe Haven Hybrid**: Buying CHF or JPY immediately when the 2y/10y yield curve inverts.
167. **Commodity Correlation + Pivot Point**: Shorting AUD/USD at a Daily Pivot Resistance when Iron Ore prices drop.
168. **Order Flow + Moving Average**: Using a 20 EMA for trend direction, but entering via Footprint Chart absorption.
169. **Seasonality + Technical Trend**: Going long GBP/USD in April (historically strong month) only if it's making higher highs.
170. **Algorithmic Filter + Discretionary Entry**: An algorithm flags 5 potential setups based on HMM regime detection; the human selects the best one based on geopolitics.

## Interactive Simulation Engine Requirements
*   **The Hybrid Dashboard**: The UI provides a split screen. On the left: Macro data (Interest Rates, VIX, Yields). On the right: A technical chart.
*   **The Task**: The student is tasked with executing a *Macro + Technical Breakout* (Strategy #156). They must identify a technical breakout on a currency pair where the central bank divergence supports the move.
*   **The Simulator**: Evaluates the student's ability to synthesize two entirely different datasets (Fundamental and Technical) to validate a trade.

## Pass/Fail Criteria
*   **Pass**: Successfully executes trades where both the macro narrative and the technical chart align.
*   **Fail**: Executing a technical breakout on EUR/USD while the ECB is cutting rates and the Fed is hiking rates (ignoring the macro headwind).

## The Institutional Trap (Tier 4 Link)
We teach how algorithms exploit human cognitive load. Retail traders try to process too many variables in a *Hybrid System* (e.g., looking at COT, MACD, and Yields simultaneously). Institutions use *Machine Learning Predictive Execution* (Strategy #145) to process this data in milliseconds, front-running the retail trader who is still trying to synthesize the chart. We teach students how to simplify their hybrid systems to avoid analysis paralysis.
