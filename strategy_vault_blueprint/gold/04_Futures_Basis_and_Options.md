# Gold Strategy Vault: Futures Basis, Arbitrage, and Relative Value

**Module Overview:** This module covers the complex institutional arbitrage strategies used in the Gold market, focusing on the spread between physical gold, futures contracts, and correlated assets.

## Strategy Roster (Strategies 126-170)
*Every strategy below will be ingested into the `Strategy` database and taught in the Vault.*

### Futures Basis & Arbitrage (126-140)
126. **Cash and Carry Arbitrage (Contango)**: Buying physical Gold (or spot) and shorting the longer-dated futures contract when the market is in steep contango, locking in a risk-free yield.
127. **Reverse Cash and Carry (Backwardation)**: Shorting spot Gold and buying the futures contract when the market is in backwardation (indicating a physical shortage).
128. **Calendar Spread (Roll Yield)**: Buying the near-month contract and shorting the far-month contract to capture the roll yield as the curve normalizes.
129. **Exchange for Physical (EFP) Spread**: Trading the premium/discount between OTC London spot Gold and COMEX futures.
130. **EFP Squeeze Strategy**: Buying COMEX futures during a severe supply chain disruption (e.g., COVID 2020) when bullion banks cannot fly physical bars to New York to settle.
131. **Loco London vs Loco Zurich Arbitrage**: Arbitraging the minuscule price differences between physical gold delivery locations.
132. **Paper vs Physical Divergence**: Buying physical bullion coins/bars when paper COMEX prices are artificially driven down by massive margin liquidations.
133. **Triangular Arbitrage (XAU/USD, EUR/USD, XAU/EUR)**: High-frequency algorithm exploiting split-second mispricings across fiat currencies and Gold.
134. **Lease Rate Arbitrage**: Borrowing physical Gold at the GOFO (Gold Forward Offered Rate), selling it for USD, investing the USD in T-Bills, and hedging the price risk.
135. **Cross-Exchange Spot Arbitrage**: Buying XAU/USD on a retail broker with low spread and instantly selling on a lagging institutional feed.
136. **Bullion Bank Market Making**: Providing simultaneous bids and offers in the OTC market to capture the spread, maintaining delta-neutrality.
137. **Fixing Arbitrage**: Trading the volatility around the LBMA AM or PM Gold Price Fix.
138. **COMEX Delivery Month Squeeze**: Buying the active delivery month contract if open interest remains suspiciously high heading into the delivery period.
139. **Fractional Reserve Short Squeeze**: Buying Gold aggressively on the fundamental thesis that COMEX paper claims vastly outnumber eligible physical vault inventories.
140. **Margin Requirement Arbitrage**: Trading the forced liquidations that occur exactly when the CME Group unexpectedly raises margin requirements for Gold futures.

### Cross-Market & Relative Value (141-170)
141. **Gold/Silver Ratio (GSR) Mean Reversion**: Buying Silver and shorting Gold when the GSR hits 85+; Buying Gold and shorting Silver when the GSR drops below 50.
142. **Gold/Copper Ratio (Doctor Copper)**: Buying Gold and shorting Copper as a macro play on global economic recession.
143. **Gold/Platinum Spread Trade**: Trading the historical spread between Gold and Platinum, buying the undervalued metal and shorting the overvalued one.
144. **Gold/Oil Ratio Trade**: Trading the purchasing power of Gold relative to a barrel of crude oil.
145. **Gold vs S&P 500 Ratio (Macro Rotation)**: Shifting portfolio weighting from SPY to GLD when the SPX/Gold ratio breaks its long-term moving average.
146. **Miners vs Metal Divergence (GDX/GLD)**: Buying Gold Miners (GDX) if spot Gold is rallying but the miners are lagging (anticipating a catch-up).
147. **Junior Miners Beta Play (GDXJ)**: Buying Junior miners as a high-beta leveraged play on a confirmed Gold spot breakout.
148. **Miner Margin Squeeze Trade**: Shorting Gold miners if spot Gold is flat but energy prices (oil) are skyrocketing, crushing their operating margins.
149. **Gold vs Treasury Bonds (GLD/TLT) Correlation**: Trading the ratio between Gold and long-term Treasuries to isolate inflation expectations from pure safe-haven flows.
150. **AUD/USD Proxy Trade**: Going long AUD/USD instead of Gold to earn swap interest while participating in a commodity supercycle.
151. **CAD/JPY Cross-Asset Hedging**: Using CAD/JPY as a proxy to hedge a Gold position due to its high correlation to global growth and commodities.
152. **Bitcoin vs Gold (Digital vs Analog Store of Value)**: Trading the rotation of capital between BTC and Gold during risk-off events.
153. **Gold vs Real Estate Ratio**: Using Gold as the denominator to value global real estate to time macro housing cycles.
154. **Palladium Substitution Trade**: Trading Gold/Palladium spreads based on auto-catalyst industrial demand shifts.
155. **Silver Squeeze Spillover**: Buying Gold aggressively if Silver experiences a retail-driven short squeeze, anticipating margin call spillovers.
156. **Fiat Debasement Basket**: Holding Gold, Silver, and Bitcoin in equal weight against a basket of short G7 fiat currencies.
157. **Gold vs Emerging Market FX**: Shorting ZAR (South African Rand) while longing Gold to play sovereign risk against the country's primary export.
158. **Yield Curve vs Gold Miners**: Rotating from physical Gold into Gold Miners when the yield curve steepens (signaling economic recovery and better equities environment).
159. **Inflation Break-Even Divergence**: Buying Gold if 5-Year TIPS breakevens rise but Gold spot price remains flat.
160. **Cross-Commodity Momentum Portfolio**: Holding a long-only basket of Gold, Copper, and Oil, rebalancing monthly based on momentum.
161. **Sector Rotation (Tech to Materials)**: Selling Nasdaq futures to fund Long Gold positions at the end of an economic cycle.
162. **Gold vs Yen Safe Haven Arbitrage**: Going long Gold/JPY during a pure panic event to compound the safe-haven flows of both assets.
163. **Relative Strength Index (RSI) Rotation**: Rotating capital between Silver, Gold, and Platinum based entirely on which asset has the highest weekly RSI.
164. **Statistical Arbitrage (Statistical Cointegration)**: A purely mathematical model trading the residual spread between Gold and Silver without any fundamental bias.
165. **Principal Component Analysis (PCA) on Precious Metals**: Using machine learning to isolate the specific "precious metal factor" from broader USD noise.
166. **Machine Learning Spread Prediction**: Using neural networks to predict the direction of the Gold/Silver ratio 5 days out.
167. **Hedge Fund Replication Strategy**: Mimicking the 13F filings of major macro funds like Bridgewater by constructing their Gold/Equities ratio.
168. **Tail-Risk Hedging via Gold Options**: Continuously rolling far out-of-the-money Gold calls funded by selling equity puts.
169. **Currency-Hedged Gold ETF Arbitrage**: Trading the spread between USD-priced GLD and Euro-hedged Gold ETFs during times of extreme FX volatility.
170. **The "Everything Bubble" Short**: A long-term portfolio strategy shorting global equities and sovereign bonds while holding 100% unleveraged physical Gold.

## Interactive Simulation Engine Requirements
*   **The Relative Value Dashboard**: The UI displays side-by-side charts of Gold, Silver, Copper, and the GDX ETF.
*   **The Task**: The student must execute a *Gold/Silver Ratio Mean Reversion* trade (Strategy #141) when the GSR hits an extreme of 90:1.
*   **The Simulator**: Evaluates if the student correctly shorts Gold and goes long Silver in mathematically equivalent dollar amounts to capture the ratio compression without taking directional risk.

## Pass/Fail Criteria
*   **Pass**: Successfully executes the pairs trade and profits from the ratio returning to its historical mean of 65:1.
*   **Fail**: Going long both Gold and Silver during a macro liquidity crash, resulting in a dual loss instead of a delta-neutral spread trade.

## The Institutional Trap (Tier 4 Link)
Retail traders often look at the *Miners vs Metal Divergence* (Strategy #146) and assume that if Gold is up, miners must follow. The institutional trap is the **Operating Cost Squeeze**. Institutions will dump Gold Miners (even when Gold is hitting all-time highs) if Oil prices and labor costs are rising faster than the price of Gold. We teach students how institutions short the GDX to trap retail investors who blindly buy miners as a leveraged play on Gold.
