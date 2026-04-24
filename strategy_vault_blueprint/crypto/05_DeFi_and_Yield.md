# Crypto Strategy Vault: DeFi and Yield 

**Module Overview:** This module explores Decentralized Finance (DeFi) mechanics, teaching students how to farm yield, provide liquidity, and arbitrage across decentralized protocols and smart contracts.

## Strategy Roster (Strategies 130-146)
*Every strategy below will be ingested into the `Strategy` database and taught in the Vault.*

### Liquidity Provision & Yield Farming (130-140)
130. **Liquidity Provision to Stable Pair**: LPing USDC/USDT on Curve to earn fees without impermanent loss.
131. **LP with Impermanent Loss Hedging**: LPing ETH/USDC while shorting ETH on a perpetual DEX to remain delta-neutral.
132. **Yield Farming Rotation**: Moving capital dynamically across Aave, Compound, and new protocols to chase the highest APY.
133. **DEX Arbitrage**: Exploiting price differences between Uniswap and Sushiswap pools.
134. **Perpetual DEX Funding Arbitrage**: Shorting on dYdX (negative funding) and longing on Binance (positive funding).
135. **Lending & Borrowing Looping**: Supplying ETH, borrowing USDC, buying more ETH, supplying again (leveraged long).
136. **Rate Arbitrage Between Lending Platforms**: Borrowing stablecoins cheaply on Aave and lending them at a higher rate on Compound.
137. **Stablecoin Arbitrage Across Chains**: Bridging USDC from Ethereum to Arbitrum to exploit a 0.5% premium.
138. **Impermanent Loss Protection Protocols**: Utilizing protocols like Bancor that offer IL insurance.
139. **Staking Yield Strategy**: Delegating tokens to validators to secure PoS networks.
140. **Restaking & Liquid Staking Tokens (LST)**: Staking ETH for stETH, then supplying stETH as collateral in DeFi to earn double yield.

### Advanced DeFi Mechanics (141-146)
141. **Liquidation Farming on DeFi Lending**: Running keeper bots to liquidate undercollateralized loans on Aave for a discount fee.
142. **Synthetic Asset Arbitrage**: Arbitraging the peg of sETH (Synthetix) or other synthetic assets against the underlying.
143. **Insurance Pool Participation**: Providing capital to Nexus Mutual to earn premiums from underwriting smart contract risk.
144. **Flash Loan Arbitrage**: Borrowing $10M uncollateralized via Aave, arbitraging across DEXs, and repaying in a single block.
145. **Governance Token Short on Dilutive Emissions**: Shorting DeFi tokens with high inflationary emissions schedules.
146. **DAO Treasury Diversification Trade**: Front-running or following large DAO governance votes to dump treasury tokens.

## Interactive Simulation Engine Requirements
*   **The Web3 Simulator**: The UI mimics a Web3 interface (like Uniswap or Aave) requiring the student to "connect wallet" and interact with simulated smart contracts.
*   **The Task**: The student must execute a *Lending & Borrowing Loop* (Strategy #135) to achieve 3x leverage on ETH, while maintaining a healthy Loan-to-Value (LTV) ratio to avoid liquidation.
*   **The Simulator**: Calculates gas fees, slippage, and LTV health factor in real-time.

## Pass/Fail Criteria
*   **Pass**: Successfully loops the asset without the Health Factor dropping below 1.1, and calculates the true APY after borrow costs.
*   **Fail**: Getting "liquidated" due to borrowing too much stablecoin against volatile collateral, or losing money due to uncalculated gas fees.

## The Institutional Trap (Tier 4 Link)
We teach the reality of *Impermanent Loss* and *Emission Dilution* (Strategy #145). Institutions often spin up high-APY farms to attract retail liquidity. Retail buys the governance token to farm the yield. The institutional trap is that the yield is paid in a highly inflationary token that the institutional founders are simultaneously dumping. We teach students how to short the inflationary token while delta-hedging the farm.
