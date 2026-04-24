# User Journey UX/UI Blueprint: 01 - The Forex Journey (30-Day Master Plan)

**Objective:** Map every screen and interaction from the moment the user clicks `[Enter the Forex Matrix]` on the Global Dashboard, through the entire 8-Tier, 30+ day comprehensive curriculum, ending in graduation. Every word, every letter, every click.

---

## Global Navigation (Persistent UI)
Once inside `/journey/forex/*`, the user has a persistent sidebar.
*   **Sidebar Navigation**: 
    *   `Dashboard` (Returns to `/dashboard`)
    *   `The Strategy Vault` (Direct access to the 201 mapped Forex strategies, locked based on Tier).
    *   `Tier Progression Map` (A vertical timeline from Level 0 to Level 8. Current tier pulses; future tiers are padlocked).
    *   `Student Dossier` (Shows win rate, liquidation count, and grade average).

---

## Days 1-3: Tier 1 & 2 (The Awakening)
**URL**: `/journey/forex/tier-1`
**Visual Layout**: Standard modern learning UI. Video player on the left, interactive text/notes on the right. 

### Content Consumption Flow
*   **Video/Text**: User watches the "Retail Matrix" module. 
*   **Button**: `[Mark Module Complete]`
    *   **System Action**: Updates database `UserProgress.completedModules.push('fx_t1_m1')`. Unlocks the next module.

### The First Test (Day 3)
**URL**: `/journey/forex/tier-2-assessment`
*   **UI State**: The screen goes dark. A simple candlestick chart appears.
*   **Text**: *"Draw the retail support line."*
*   **User Action**: User clicks and drags a line on the chart.
*   **Button**: `[Submit Analysis]`
    *   **System Action**: The `PointClickEngine` verifies the coordinates of the line.
    *   **Success**: "Correct. You see the matrix. Now let's break it." -> Unlocks Tier 3.

---

## Days 4-12: Tier 3 (The Mechanics - Teaching the 201 Strategies)
**URL**: `/journey/forex/tier-3`
This is a massive, multi-week phase. The user must learn the strategies detailed in our `Strategy Vault Blueprint`.

### The UI Shift: The "Vault Terminal"
Instead of simple videos, the UI shifts to look like a trading terminal.
*   **Top Bar**: "Module 3.4: Macro Fundamentals & Carry Trade"
*   **Main Screen**: A split-screen. Left side: The theoretical text (e.g., explaining Strategy #49: Classic Carry Trade). Right side: A simulated Bloomberg-style dashboard showing fake interest rates.

### Interactive Strategy Modules (Examples)
1.  **Learning Strategy #81 (COT Commercial Hedger Extremes)**
    *   **UI**: A simulated Commitment of Traders report is displayed.
    *   **Task Text**: *"Commercials are net short 400,000 contracts. Identify the market bias."*
    *   **Buttons**: `[Bullish Bias]` | `[Bearish Bias]`
    *   **System Action**: Clicking `[Bearish Bias]` triggers a green success toast. "Correct. Commercials are hedging a top."

2.  **Learning Strategy #16 (London Open Breakout)**
    *   **UI**: A chart showing a tight Asian session consolidation.
    *   **Task Text**: *"Place your Buy Stop above the Asian Range."*
    *   **User Action**: Clicks the chart at the resistance level.

### Tier 3 Final Assessment (Day 12)
*   **Task**: The user is hit with a rapid-fire quiz requiring them to successfully identify 10 different strategy setups from the Vault.
*   **Pass**: Unlocks Tier 4. 

---

## Days 13-21: Tier 4 (The Institutional Trap)
**URL**: `/journey/forex/tier-4`
This is where the user's worldview is shattered. The UI becomes hostile and intentionally tries to trick the user using the exact strategies they learned in Tier 3.

### The UI Shift: The "Order Flow DOM"
The candlestick chart is minimized. The Depth of Market (DOM) and Footprint charts become the primary visual focus.

### The "Slippage Trap" Simulation
*   **UI**: The user is placed in a live simulation of Strategy #66 (NFP Employment Shock). The fake clock ticks down to 8:30 AM EST.
*   **Event**: The NFP number flashes green (massive beat). The candlestick chart shoots up.
*   **The Trap**: A massive flashing button appears: `[BUY MARKET - RIDE THE TREND]`. 
*   **User Action (Fail)**: The student clicks Buy.
    *   **System Action**: The DOM instantly pulls all liquidity. The spread widens to 50 pips. The student is filled at the absolute top of the wick. The market instantly reverses.
    *   **UI Feedback**: Screen flashes red. *"LIQUIDATED. You chased retail momentum into an institutional sell-wall. You provided the liquidity they needed to exit."*
*   **User Action (Pass)**: The student ignores the flashing `[BUY]` button and instead clicks the smaller `[ANALYZE DOM]` button. They identify an Iceberg Sell Order. They click `[SELL LIMIT at Resistance]`.
    *   **UI Feedback**: Screen flashes green. *"EXECUTED. You faded the retail shock. Welcome to the institutional side."*

---

## Days 22-26: Tier 5 & 6 (Risk and Mindset)
**URL**: `/journey/forex/tier-5`
**UI Shift**: The charts disappear. The UI is a cold, mathematical spreadsheet representing a $100,000 portfolio.

### The Portfolio Survival Simulator
*   **Task**: The user must apply Strategy #188 (Correlation Matrix Position Adjustment). They have 5 open trades. A simulated news event causes the USD to spike.
*   **UI Interaction**: The user must use sliders to dynamically reduce lot sizes on their EUR/USD and GBP/USD positions to maintain a portfolio VaR (Value at Risk) under 5%.
*   **Button**: `[Lock Portfolio Sizing]`
    *   **System Action**: If VaR > 5%, they fail the module. If <= 5%, they pass.

---

## Days 27-30: Tier 7 & 8 (The Final Evaluation)
**URL**: `/journey/forex/tier-8`
The culmination of the entire 30-day course.

### The "Live" Market Crucible
*   **UI**: A full-screen, highly complex trading terminal. Real-time simulated price action, a live DOM, a simulated news ticker, and a live PnL (Profit and Loss) gauge.
*   **The Mission**: *"Survive 3 simulated trading days. Execute 5 profitable trades. Maximum Drawdown cannot exceed 4%."*

### Execution Flow
1.  **Day 1 (Simulated)**: A slow ranging market. The student must use Mean Reversion strategies. If they use Breakout strategies, they get chopped up.
2.  **Day 2 (Simulated)**: A massive macro news event (CPI release). The student must either hedge their positions or execute a Fade strategy.
3.  **Day 3 (Simulated)**: The Institutional Stop Run. The market aggressively hunts the student's stop loss. The student must dynamically move their stop outside the ATR band.

### The Final Button
*   **Button**: `[End Simulation & Grade Portfolio]`
    *   **System Action**: The backend calculates the final PnL, the Max Drawdown, and the adherence to the 201 strategies.
    *   **Pass**: The screen goes white. A beautifully designed "Institutional Grade Certificate" is generated with their username. A button appears: `[Enter the Alumni Discord]`.
    *   **Fail**: Routes to the Failure & Recovery UX (Detailed in Blueprint 04).

## Database State Checkpoint (Graduation)
```json
{
  "progress": {
    "forex": {
      "currentTier": 8,
      "status": "COMPLETED",
      "graduationDate": "2026-05-23T00:00:00Z",
      "finalScore": 92.5
    }
  }
}
```
