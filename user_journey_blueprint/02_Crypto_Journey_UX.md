# User Journey UX/UI Blueprint: 02 - The Crypto Journey (30-Day Master Plan)

**Objective:** Map every screen and interaction from the moment the user clicks `[Enter the Crypto Matrix]` on the Global Dashboard, through the entire 8-Tier curriculum, ending in graduation. This journey focuses heavily on Web3 mechanics, On-Chain data, and Liquidation engines.

---

## Global Navigation (Persistent UI)
Once inside `/journey/crypto/*`, the user has a persistent sidebar.
*   **Theme**: Dark mode with neon purple/green accents (hacker/cyberpunk aesthetic).
*   **Sidebar Navigation**: 
    *   `Dashboard` (Returns to `/dashboard`)
    *   `The Strategy Vault` (Direct access to the 206 mapped Crypto strategies).
    *   `Tier Progression Map` (Vertical timeline from Level 0 to Level 8).
    *   `On-Chain Arsenal` (Links to simulated Glassnode/Nansen dashboards).

---

## Days 1-3: Tier 1 & 2 (The Awakening)
**URL**: `/journey/crypto/tier-1`
**Visual Layout**: Video player and interactive text. 

### The First Test (Day 3)
**URL**: `/journey/crypto/tier-2-assessment`
*   **UI State**: A simple chart of Bitcoin showing a massive retail breakout.
*   **Text**: *"Retail is buying the breakout. Where are their stops placed?"*
*   **User Action**: User clicks and drags a "Liquidity Zone" box below the breakout point.
*   **Button**: `[Confirm Liquidity Zone]`
    *   **System Action**: The engine verifies the coordinates.
    *   **Success**: "Correct. You've identified the prey. Now let's learn how to hunt." -> Unlocks Tier 3.

---

## Days 4-12: Tier 3 (The Mechanics - Teaching the 206 Strategies)
**URL**: `/journey/crypto/tier-3`

### The UI Shift: The "Glassnode/Web3 Terminal"
The UI shifts from standard charts to a multi-panel data dashboard.
*   **Left Panel**: On-Chain metrics (Exchange Outflows, Miner Hashrate).
*   **Center Panel**: Funding Rates and Open Interest.
*   **Right Panel**: DeFi Yield Farming Simulator.

### Interactive Strategy Modules (Examples)
1.  **Learning Strategy #91 (Whale Exchange Outflow)**
    *   **UI**: A line chart showing BTC price vs. Exchange Balances.
    *   **Task Text**: *"Exchange balances just dropped by 50,000 BTC. What is the fundamental impact?"*
    *   **Buttons**: `[Supply Shock (Bullish)]` | `[Sell Pressure (Bearish)]`
    *   **System Action**: Clicking `[Supply Shock (Bullish)]` triggers success.

2.  **Learning Strategy #135 (Lending & Borrowing Looping)**
    *   **UI**: A simulated Aave (DeFi) interface. Wallet balance: $10,000 USDC.
    *   **Task Text**: *"Achieve 2x leverage on ETH using Aave without your Health Factor dropping below 1.5."*
    *   **User Action**: Must click `[Supply USDC]`, `[Borrow ETH]`, `[Swap ETH for USDC]`, `[Supply USDC]`.
    *   **System Action**: The engine mathematically calculates the LTV (Loan-to-Value) and Health Factor after every click.

### Tier 3 Final Assessment (Day 12)
*   **Task**: 10 rapid-fire scenarios combining On-Chain data, DeFi mechanics, and standard technicals.
*   **Pass**: Unlocks Tier 4.

---

## Days 13-21: Tier 4 (The Institutional Trap)
**URL**: `/journey/crypto/tier-4`
The most brutal phase. The UI simulates the hostile environment of offshore unregulated crypto exchanges.

### The "Liquidation Cascade" Simulation
*   **UI**: The user is placed in a live simulation of Strategy #116 (Liquidation Cascade Trigger). They are staring at a massive "Liquidation Heatmap" instead of a price chart.
*   **Event**: Funding is deeply positive (retail is highly leveraged long). A massive cluster of liquidations sits just $500 below the current price.
*   **The Trap**: A green button flashes: `[BUY THE DIP - RSI OVERSOLD]`.
*   **User Action (Fail)**: The student clicks Buy.
    *   **System Action**: The price instantly wicks down $1,000, triggering the liquidation cluster.
    *   **UI Feedback**: Screen flashes red. *"REKT. You bought into a liquidation cascade. Institutions drove the price down specifically to trigger those liquidations."*
*   **User Action (Pass)**: The student ignores the buy button, waits for the wick to hit the liquidation cluster, and clicks `[ENTER POST-CASCADE LONG]`.
    *   **UI Feedback**: Screen flashes green. *"EXECUTED. You waited for the flush and bought the institutional absorption."*

---

## Days 22-26: Tier 5 & 6 (Risk and Mindset)
**URL**: `/journey/crypto/tier-5`
**UI Shift**: A simulated portfolio tracker containing highly volatile altcoins.

### The Drawdown Simulator
*   **Task**: Apply Strategy #167 (Volatility Adjusted Position Sizing). The user has $10,000. They must allocate it across BTC (Low Vol), ETH (Med Vol), and PEPE (Extreme Vol).
*   **UI Interaction**: Using sliders to allocate capital. They must set stop losses for each.
*   **Event**: A simulated "Flash Crash" occurs, dropping all assets by 30%.
*   **System Action**: If the student allocated too much to PEPE or placed stops too tight (getting wicked out), their portfolio drops >10% and they fail. If they sized correctly, they pass.

---

## Days 27-30: Tier 7 & 8 (The Final Evaluation)
**URL**: `/journey/crypto/tier-8`

### The "Web3" Crucible
*   **UI**: A simulated multi-screen crypto trading desk. Spot charts, Perp Funding Rates, and a simulated Web3 Wallet (MetaMask style) for DeFi transactions.
*   **The Mission**: *"Survive 3 simulated trading days. Execute an On-Chain Arb, survive a Liquidation Hunt, and Yield Farm without impermanent loss."*

### Execution Flow
1.  **Day 1 (Simulated)**: A basis arbitrage opportunity appears (Contango). Student must short perps and buy spot.
2.  **Day 2 (Simulated)**: A massive whale transfers 10k BTC to Binance (Strategy #92). Student must read the On-Chain alert and immediately short the market before the dump.
3.  **Day 3 (Simulated)**: The Flash Crash. Student must use the DOM to buy the absolute bottom of the liquidation cascade.

### The Final Button
*   **Button**: `[Mint Graduation NFT & Grade Portfolio]`
    *   **System Action**: Calculates PnL and strategy adherence.
    *   **Pass**: "Institutional Crypto Trader Status Unlocked." The user is issued a simulated "Soulbound Token" (or digital certificate).
    *   **Fail**: Routes to Failure UX.
