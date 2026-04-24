# Crypto Strategy Vault: Algorithmic, Hybrid, and Risk Management

**Module Overview:** This final crypto module covers the automation of strategies, the synthesis of multiple data sources (Hybrids), and the critical institutional risk protocols required to survive the market.

## Strategy Roster (Strategies 147-206)
*Every strategy below will be ingested into the `Strategy` database and taught in the Vault.*

### Algorithmic & Quant Strategies (147-157)
147. **Rule-Based Moving Average Bot**: Automating the MA crossover.
148. **Indicator Stack Bot**: Using AND/OR logic (e.g., RSI < 30 AND MACD crosses up).
149. **Scalping Bot**: High-frequency limit order placement around micro-S/R.
150. **Arbitrage Bot (CEX + DEX)**: Automated cross-venue arb.
151. **Machine-Learning-Enhanced Execution**: Using ML to predict slippage and chunk orders.
152. **Rebalancing Algorithm (Periodic)**: Auto-rebalancing a portfolio to fixed weights monthly.
153. **Momentum + Mean Reversion Hybrid Bot**: Running trend algos on trending coins and mean reversion on ranging coins simultaneously.
154. **AI-Assisted Discretionary Trading**: AI flags setups, human executes.
155. **Risk Parity Allocation Algorithm**: Weighting portfolio assets by inverse volatility.
156. **Reinforcement Learning Rebalancer**: AI agent trained to maximize Sharpe ratio.
157. **Volatility Targeting Strategy**: Sizing down exposure when VIX/Crypto Volatility spikes.

### Hybrid Systems (Confluence) (158-164)
158. **On-Chain + Technical Confluence**: Buying only when whale outflows align with a chart breakout.
159. **Funding + Social Sentiment Filter**: Shorting when funding is positive AND greed index > 90.
160. **Multi-Factor Quant Scoring**: Ranking tokens by a blended score of momentum, on-chain, and sentiment.
161. **Technical + Fundamental Confirmation**: Taking breakouts only if the token has strong active user growth.
162. **Funding + Basis + OI Composite**: Shorting only when all three derivatives metrics flash overbought.
163. **On-Chain + Sentiment Contrarian**: Buying when whales accumulate but retail is in extreme fear.
164. **Technical + Options Skew Confirmation**: Buying a chart breakout only if options skew shows calls are heavily bid.

### Risk & Capital Management (165-206)
165. **Fixed Fraction Position Sizing**: Risking only 1-2% of total capital per trade.
166. **Kelly Criterion Position Sizing**: Mathematically sizing based on win rate and reward ratio.
167. **Volatility Adjusted Position Sizing**: Trading smaller lot sizes on highly volatile altcoins.
168. **Stop-Loss Placement Under Support**: Placing stops technically, not arbitrarily.
169. **Trailing Stop Strategy**: Locking in profits mechanically.
170. **Risk-Reward Ratio Targeting**: Only taking trades with a minimum 1:2 or 1:3 R:R.
171. **Leverage Control**: Capping leverage to 3x-5x based on portfolio size.
172. **Portfolio Diversification Across Sectors**: Holding L1s, DeFi, and AI tokens.
173. **Stablecoin Hedging**: Holding 20-50% in cash as dry powder.
174. **Insurance via Options**: Buying OTM puts to protect a spot portfolio.
175. **Dollar-Cost Averaging (DCA)**: Mechanical, emotionless accumulation.
176. **Laddered Entry and Exit**: Scaling in and scaling out to average prices.
177. **Liquidation Threshold Monitoring**: Hard stops before exchange liquidation engines take over.
178. **Hedged Beta Exposure**: Shorting BTC while longing Alts to isolate idiosyncratic token performance.
179. **Rebalancing into Stablecoins After Parabolic Run**: Mechanical profit taking into strength.
180. **Dynamic Position Sizing Based on Drawdown**: Halving position size after 3 consecutive losses.
181. **Stop-Loss Under Volatility Band**: Placing stops outside the ATR band to avoid getting wicked out.
182. **Capital Allocation Caps**: Never allocating more than 10% to a single asset.
183. **Stress Testing Portfolio**: Modeling what happens to the portfolio if BTC drops 50% in 1 hour.
184. **Risk Buffer via Insurance Protocols**: Buying DeFi cover.
185. **Portfolio Volatility Cap**: Ensuring the portfolio's annualized volatility doesn't exceed 40%.
186. **Liquidity Risk Assessment**: Avoiding tokens where your position is >1% of daily volume.
187. **Counterparty Risk Diversification**: Splitting funds across 3 different exchanges.
188. **Stablecoin Yield Diversification**: Splitting cash across USDC, USDT, and DAI.
189. **Emergency Stop on Exchange Outage**: API monitors exchange latency and pulls all orders if lag > 500ms.
190. **Max Drawdown Alert System**: Hard kill switch if account drops 15% in a month.
191. **Staged Exit Strategy**: Selling 25% at TP1, 25% at TP2, letting the rest run.
192. **Hedging Stablecoin Depeg Risk**: Holding short futures against a stablecoin if the peg wavers.
193. **Portfolio Insurance via Stable Yield**: Using 10% APY on stables to offset small trading losses.
194. **Tax-Loss Harvesting**: Selling underwater bags in December to offset capital gains.
195. **Rebalancing Frequency Optimization**: Finding the sweet spot between monthly rebalancing and gas fees.
196. **Options Collar Hedging**: Buying a put and selling a call to finance the put.
197. **Diversified Custody**: Using cold storage, multi-sig, and hot wallets.
198. **Leverage Ladder**: Using leverage only on the final 10% of a spot position.
199. **Inverse ETP Hedging**: Buying 1x Short BTC tokens to hedge without using futures margin.
200. **Emergency Wallet Seed Backup Strategy**: Metal plates, geographic distribution.
201. **Dynamic Hedging via Perps**: Constantly adjusting a short perp to keep a spot portfolio delta-neutral.
202. **Self-Custody vs Exchange Risk Management**: Only keeping active trading capital on CEXs.
203. **Insurance on CeFi Platforms**: Evaluating counterparty risk of lending desks.
204. **Use of Multi-Sig for Fund Transfers**: Institutional grade wallet security.
205. **Fixed Withdrawal Schedule**: Automatically withdrawing 50% of trading profits to a bank account monthly.
206. **Structured Exit Laddering**: Pre-planning the exact dollar amounts to sell at $100k, $120k, etc.

## Interactive Simulation Engine Requirements
*   **The Risk Management Terminal**: The UI displays a portfolio consisting of multiple volatile assets.
*   **The Task**: The student is given a portfolio with a specific drawdown limit (e.g., Max 10%). They must apply *Volatility Adjusted Position Sizing* (Strategy #167) and *Stop-Loss Placement* to ensure that even if all assets hit their stops simultaneously, the account only loses 2%.
*   **The Simulator**: Evaluates the mathematical precision of the student's position sizing and R:R ratios.

## Pass/Fail Criteria
*   **Pass**: Successfully sizes trades so that a string of 5 losses does not breach the max drawdown threshold.
*   **Fail**: Using a static 10% position size on a highly volatile asset (like a meme coin), resulting in a portfolio breach.

## The Institutional Trap (Tier 4 Link)
The ultimate institutional realization taught here is that **retail trades direction, institutions trade risk**. We show how lack of *Leverage Control* (Strategy #171) and *Laddered Exits* (Strategy #176) is exactly what allows institutions to absorb retail liquidity during market corrections. Retail panics and liquidates; institutions, using Risk Parity, mechanically buy the dip.
