# User Journey UX/UI Blueprint: 03 - The Gold Journey (30-Day Master Plan)

**Objective:** Map every screen and interaction from the moment the user clicks `[Enter the Gold Matrix]` on the Global Dashboard, through the entire 8-Tier curriculum, ending in graduation. This journey focuses on Macroeconomics, Bond Yields, and massive volatility.

---

## Global Navigation (Persistent UI)
Once inside `/journey/gold/*`, the user has a persistent sidebar.
*   **Theme**: Dark mode with metallic gold and deep red accents (classic institutional commodity desk aesthetic).
*   **Sidebar Navigation**: 
    *   `Dashboard` (Returns to `/dashboard`)
    *   `The Strategy Vault` (Direct access to the 238 mapped Gold strategies).
    *   `Tier Progression Map` (Vertical timeline from Level 0 to Level 8).
    *   `The Macro Terminal` (Links to simulated US Treasury Yields and DXY dashboards).

---

## Days 1-3: Tier 1 & 2 (The Awakening)
**URL**: `/journey/gold/tier-1`
**Visual Layout**: Standard video/text layout focusing on the history of the Gold Standard and fiat debasement.

### The First Test (Day 3)
**URL**: `/journey/gold/tier-2-assessment`
*   **UI State**: A simple chart comparing Gold to the US Dollar Index (DXY).
*   **Text**: *"When the DXY breaks out to new highs, what is the default mechanical action for Gold?"*
*   **Buttons**: `[Buy Gold]` | `[Short Gold]` | `[Do Nothing]`
*   **User Action**: Clicks `[Short Gold]`.
*   **System Action**: "Correct. Gold is priced in Dollars. A strong dollar crushes Gold. Now let's look at Yields." -> Unlocks Tier 3.

---

## Days 4-12: Tier 3 (The Mechanics - Teaching the 238 Strategies)
**URL**: `/journey/gold/tier-3`

### The UI Shift: The "Macro Terminal"
The UI completely discards standard retail candlestick charts.
*   **Top Bar**: "Module 3.2: Real Yields and The Bond Market"
*   **Main Screen**: A split-screen. Left side: The theoretical text. Right side: A live-updating chart of the **10-Year TIPS Yield (Real Yields)** overlaid with the Gold Spot Price.

### Interactive Strategy Modules (Examples)
1.  **Learning Strategy #51 (TIPS / Real Yield Inverse Correlation)**
    *   **UI**: The TIPS yield line on the chart suddenly spikes violently upwards (indicating higher real interest rates).
    *   **Task Text**: *"Real Yields are spiking. Cash now pays a massive risk-free return. Execute your Gold position."*
    *   **Buttons**: `[BUY XAU/USD]` | `[SELL XAU/USD]`
    *   **System Action**: Clicking `[SELL XAU/USD]` triggers success. (Gold pays no yield; when real yields rise, Gold is sold).

2.  **Learning Strategy #17 (New York Open Breakout)**
    *   **UI**: A highly volatile, fast-moving tick chart of Gold. The simulated time is 8:20 AM EST.
    *   **Task Text**: *"The COMEX floor opens in 10 minutes. The Asian/London range is tight. Place your bracket orders."*
    *   **User Action**: Drags a Buy Stop above the range and a Sell Stop below the range.
    *   **System Action**: The clock hits 8:30 AM. Volume explodes. The Buy Stop is triggered and rockets into profit.

### Tier 3 Final Assessment (Day 12)
*   **Task**: 10 scenarios requiring the student to synthesize DXY movement, Bond Yields, and COMEX futures positioning (COT data) to predict Gold's direction.
*   **Pass**: Unlocks Tier 4.

---

## Days 13-21: Tier 4 (The Institutional Trap)
**URL**: `/journey/gold/tier-4`
The most psychologically demanding phase. Gold is notorious for false breakouts and brutal wicks.

### The "Deflationary Margin Call" Simulation
*   **UI**: A simulated global panic. The S&P 500 chart is crashing. The VIX is spiking above 80.
*   **Event**: Strategy #72 (Deflationary Shock Short). News headlines scream "Global Liquidity Crisis!" Retail traders everywhere assume Gold will skyrocket as a "Safe Haven."
*   **The Trap**: A gold button flashes: `[BUY GOLD - SAFE HAVEN PROTOCOL]`.
*   **User Action (Fail)**: The student clicks Buy.
    *   **System Action**: The Gold price instantly collapses $100/oz.
    *   **UI Feedback**: Screen flashes red. *"LIQUIDATED. You fell for the retail safe-haven narrative. Institutions were facing margin calls on their equity portfolios and had to liquidate their Gold holdings to raise USD cash. You bought their exit."*
*   **User Action (Pass)**: The student clicks `[SHORT GOLD - LIQUIDITY CRUNCH]`.
    *   **UI Feedback**: Screen flashes green. *"EXECUTED. You traded the institutional liquidity need, not the retail narrative."*

---

## Days 22-26: Tier 5 & 6 (Risk and Mindset)
**URL**: `/journey/gold/tier-5`

### The Volatility Survival Simulator
*   **Task**: Apply Strategy #212 (ATR-Based Stop Loss Placement).
*   **UI Interaction**: The student enters a Long Gold trade. They must place a stop loss.
*   **The Trap**: If they place a tight 20-pip stop loss (like a Forex trader), the simulation instantly generates a random massive wick that stops them out before the price rockets in their favor.
*   **System Action**: The student must drag the stop-loss slider down to 2x the Daily ATR (a very wide stop) and compensate by reducing their lot size by 50%.
*   **Pass**: The wick occurs, their wide stop survives, and the trade hits target.

---

## Days 27-30: Tier 7 & 8 (The Final Evaluation)
**URL**: `/journey/gold/tier-8`

### The "COMEX Floor" Crucible
*   **UI**: A brutally complex Macro Dashboard. Real Yields, DXY, COT Data, and a Gold DOM are all flashing data simultaneously.
*   **The Mission**: *"Survive 3 simulated trading days. Execute 5 trades based purely on Macro data and Futures Arbitrage."*

### Execution Flow
1.  **Day 1 (Simulated)**: The Fed announces a surprise rate cut (Strategy #53). The student must instantly market-buy Gold.
2.  **Day 2 (Simulated)**: The Gold/Silver ratio hits 90 (Strategy #141). Student must execute a pairs trade: Long Silver, Short Gold.
3.  **Day 3 (Simulated)**: The NFP report drops. The student must use the *News Release Liquidity Void* (Strategy #187) to avoid the initial massive slippage and enter on the retracement.

### The Final Button
*   **Button**: `[Close Portfolio & Finalize Grade]`
    *   **System Action**: Calculates PnL and macro adherence.
    *   **Pass**: "Institutional Commodity Trader Status Unlocked." Certificate generated.
    *   **Fail**: Routes to Failure UX.
