# Crypto Strategy Vault: On-Chain Analytics

**Module Overview:** This module covers strategies unique to cryptocurrency—using the immutable public ledger to track the exact movements of large players (Whales), miners, and network health.

## Strategy Roster (Strategies 91-101)
*Every strategy below will be ingested into the `Strategy` database and taught in the Vault.*

### Whale Tracking & Exchange Flows (91-97)
91. **Whale Exchange Outflow Accumulation**: Buying when large amounts of BTC are moved off exchanges into cold storage (supply shock).
92. **Whale Exchange Inflow Distribution**: Shorting when large amounts of BTC are deposited onto exchanges (intent to sell).
93. **Exchange Net Flow Divergence**: Trading the delta between inflows and outflows to gauge immediate supply pressure.
94. **Dormant Coin Movement (Token Age Consumed - TAC)**: Monitoring for spikes in old coins moving, signaling major volatility or tops.
95. **UTXO Age Distribution Strategy (HODL Waves)**: Selling when long-term holders (older UTXO bands) begin to distribute to short-term holders.
96. **Wallet Clustering Behaviour Analysis**: Tracking known smart-money or institutional wallets via Nansen/Arkham and mimicking their trades.
97. **Stablecoin Supply Ratio (SSR) Divergence**: Going long when SSR drops (high stablecoin purchasing power relative to BTC market cap).

### Miner Behaviour & Network Health (98-101)
98. **Miner Outflow Signal**: Shorting when miners transfer large quantities to exchanges to cover costs or lock in profits.
99. **Miner Hashrate / Difficulty Ribbon Strategy**: Buying when miners capitulate (hashrate drops) and then recovers, signaling a bottom.
100. **Stake/Unstake Flow Strategy (PoS Networks)**: Going long when staking lockups spike (reducing circulating supply).
101. **Gas Price and Activity Indicator**: Fading extreme gas price spikes on Ethereum (signals retail euphoria and local tops).

## Interactive Simulation Engine Requirements
*   **The Glassnode-Style Dashboard**: The UI displays on-chain charts: Net Flows, Miner Balances, and UTXO Age Bands.
*   **The Task**: The student is shown a historical moment (e.g., May 2021) and must identify the distribution signals based on Whale Inflows and old coins moving (TAC).
*   **The Simulator**: The engine evaluates the student's ability to interpret on-chain metrics to accurately time a market cycle top or bottom without looking at the price chart.

## Pass/Fail Criteria
*   **Pass**: Successfully identifies 5 major accumulation and 5 major distribution phases using *only* on-chain flow data.
*   **Fail**: Confusing exchange outflows (bullish) with exchange inflows (bearish), or misinterpreting miner capitulation.

## The Institutional Trap (Tier 4 Link)
In Tier 4, we teach how institutions manipulate these exact metrics. We explore *Over-the-Counter (OTC) Desk Order Flow*. We teach how whales will intentionally send 10,000 BTC to Binance to trigger an *Exchange Inflow Distribution* alert (Strategy #92), intentionally causing retail algorithms to short, while the whale actually absorbs those shorts via limit orders on the bid.
