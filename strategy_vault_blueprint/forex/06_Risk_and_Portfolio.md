# Forex Strategy Vault: Risk Management and Portfolio Allocation

**Module Overview:** The final Forex module covers the survival mechanics of institutional trading. It focuses on position sizing, portfolio correlation, and hedging strategies to protect capital from macro shocks.

## Strategy Roster (Strategies 171-201)
*Every strategy below will be ingested into the `Strategy` database and taught in the Vault.*

### Position Sizing & Drawdown Control (171-185)
171. **Fixed Fractional Position Sizing**: Risking a strict 1% of total account equity per trade.
172. **Volatility-Adjusted Sizing**: Sizing positions based on Average True Range (ATR); smaller lots for volatile pairs like GBP/JPY, larger lots for EUR/CHF.
173. **Kelly Criterion Optimization**: Mathematically optimizing position size based on historical win rate and payoff ratio.
174. **Optimal f Position Sizing**: Advanced mathematical sizing to maximize long-term geometric growth.
175. **Max Drawdown Alert System**: Hard stop on all algorithmic trading if the portfolio drops 10% from its peak.
176. **Dynamic Position Sizing Based on Drawdown**: Reducing position size by 50% after a losing streak to protect capital.
177. **Staged Exit Strategy (Scale-Out)**: Taking partial profits at predetermined Fibonacci extension levels.
178. **Time-Based Stop Loss**: Closing a trade if it hasn't moved into profit within a specific timeframe (e.g., 48 hours) to free up margin.
179. **Trailing Stop under Volatility Band**: Trailing a stop-loss using a 2x ATR band rather than arbitrary pip amounts.
180. **Leverage Laddering**: Adding leverage only after a position is already in profit and a stop-loss is moved to breakeven.
181. **Capital Allocation Caps**: Never allowing exposure to a single currency (e.g., USD) to exceed 30% of the portfolio.
182. **Stress Testing Portfolio**: Running Monte Carlo simulations to see how the portfolio performs if EUR drops 500 pips in a day.
183. **Liquidity Risk Assessment**: Avoiding trading exotic pairs (e.g., USD/TRY) with large position sizes to prevent massive slippage.
184. **Fixed Withdrawal Schedule**: Mechanically withdrawing profits at the end of the month to protect against psychological blow-ups.
185. **Account Margin Monitoring**: Hard-coding alerts when free margin drops below 500% to avoid broker margin calls.

### Hedging, Correlation & Portfolio Management (186-201)
186. **Direct Correlation Hedging**: Going long EUR/USD and short GBP/USD to remain market-neutral on the USD.
187. **Inverse Correlation Hedging**: Going long EUR/USD and long USD/CHF to hedge out USD exposure.
188. **Correlation Matrix Position Adjustment**: Dynamically reducing position sizes if multiple correlated trades are open simultaneously (e.g., Long EUR/USD, AUD/USD, NZD/USD).
189. **Risk Parity Currency Portfolio**: Allocating capital so that each currency pair contributes an equal amount of volatility risk to the portfolio.
190. **Options Protective Put Hedge**: Buying an OTM put option to protect a massive long spot position before an NFP release.
191. **Interest Rate Swaption Hedge**: Using interest rate derivatives to hedge the carry cost of a long-term position.
192. **Proxy Hedging**: Hedging an illiquid exotic pair (e.g., EUR/TRY) by taking an opposite position in a highly correlated major pair (e.g., EUR/USD).
193. **Cross-Asset Geopolitical Hedge**: Buying Gold or JPY spot to hedge an equity-heavy portfolio against war or macro shocks.
194. **Overnight/Weekend Gap Hedge**: Closing all positions on Friday, or buying cheap weekend options to hedge against Sunday gap risk.
195. **Counterparty Risk Diversification**: Splitting a large trading account across 3 different prime brokers to mitigate platform insolvency risk.
196. **Algorithmic Circuit Breaker**: Auto-pausing all trading bots if the VIX spikes above 35.
197. **Rebalancing Frequency Optimization**: Determining whether to rebalance a currency basket daily, weekly, or monthly to minimize transaction costs.
198. **Synthetic Pair Creation**: Creating a synthetic exotic pair by trading two majors (e.g., Long EUR/USD, Short AUD/USD = Long EUR/AUD) to save on spreads.
199. **Delta-Neutral Carry Portfolio**: Constructing a basket of carry trades that are perfectly balanced so net exposure to any single currency is zero.
200. **Structural Break Detection & Pause**: Automatically halting trading when statistical tests show the market has shifted from a trend regime to a volatile range regime.
201. **The "Do Nothing" Strategy**: A conscious risk-management decision to hold 100% cash during periods of extreme macroeconomic uncertainty or illiquidity.

## Interactive Simulation Engine Requirements
*   **The Portfolio Risk Simulator**: The UI displays a multi-currency portfolio with varying levels of leverage, correlation, and margin utilization.
*   **The Task**: The student is given a portfolio heavily concentrated in USD longs (EUR/USD short, GBP/USD short, USD/JPY long). The task is to apply *Correlation Matrix Position Adjustment* (Strategy #188) to reduce the aggregate USD risk without closing all positions.
*   **The Simulator**: Evaluates the mathematical reduction in portfolio variance and ensures margin levels return to safe thresholds.

## Pass/Fail Criteria
*   **Pass**: Successfully rebalances the portfolio to achieve a risk-parity state where no single currency shock can cause a 10% drawdown.
*   **Fail**: Opening a Long AUD/USD trade to "hedge" a Long NZD/USD trade, demonstrating a failure to understand positive correlation.

## The Institutional Trap (Tier 4 Link)
Retail traders often treat "Risk Management" simply as placing a 20-pip stop loss. In Tier 4, we teach how institutions hunt these exact tight stops. We show that true institutional risk management isn't about tight stops; it's about *Volatility-Adjusted Sizing* (Strategy #172) and *Correlation Hedging* (Strategy #186), allowing institutions to use wide stops to survive volatility spikes while keeping overall portfolio risk low.
