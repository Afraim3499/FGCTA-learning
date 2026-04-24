# Tier 4: Time & Price (The Algorithmic Matrix)

## Overview
This tier introduces the absolute truth of algorithmic trading: **Time is more important than Price.** A perfect setup (FVG + OB) is irrelevant if it forms during a dead session (e.g., late Asian session). Institutions inject volume at specific, programmed times of the day.

---

## Section 12: The Daily Cycle
*Goal: Understand the specific behavioral characteristics of the Asian, London, and New York sessions.*

### Module 12.1: The Asian Range (Consolidation)
- **Content**: How the Asian session typically defines the initial boundaries (Buy-side and Sell-side liquidity) for the algorithmic daily cycle.

### Module 12.2: The London Session (Manipulation)
- **Content**: The concept of the "Judas Swing." Why London typically manipulates price to trigger Asian Range stops, forming the High or Low of the Day (HOD/LOD).

### Module 12.3: The New York Session (Distribution)
- **Content**: NY overlap and the continuation or reversal of the London manipulation.

---

## Section 13: AMD (Accumulation, Manipulation, Distribution)
*Goal: The Power of 3 (PO3). How to predict the shape of the Daily Candle before the day ends.*

### Module 13.1: The PO3 Template
- **Content**: Deconstructing the Open, High, Low, Close (OHLC) of a daily candle. 
  - Open = Accumulation.
  - Wicks = Manipulation.
  - Body = Distribution.

### Module 13.2: Identifying the True Day Direction
- **Content**: If we are bullish on the Daily timeframe, we expect price to drop below the Midnight Opening Price (Manipulation) before expanding upward (Distribution). 
- **Interactive Task**: `amd_predictor`
  - **Mechanic**: User is given the previous week's Daily candles. The simulation pauses at 2:00 AM EST. User must draw the anticipated AMD profile for the current day.

---

## Section 14: Macro Hours & Killzones
*Goal: Knowing exactly when to sit on your hands and when to strike.*

### Module 14.1: The ICT Killzones
- **Content**: Defining the exact hourly windows where algorithmic volatility is injected:
  - London Killzone (2:00 AM - 5:00 AM EST)
  - New York Killzone (7:00 AM - 10:00 AM EST)

### Module 14.2: Macro Delivery Windows
- **Content**: 20-minute macro windows (e.g., 9:50 AM to 10:10 AM EST) where algorithms spoof or seek immediate liquidity.

---

## Tier 4 Final Gate: The Timing Simulator -> UNLOCKS PHASE 1 ($10,000 DEMO)
- **Task**: `time_price_simulator`
- **Format**: User enters the `MiniReplayEngine`. 
- **The Catch**: The "Buy" and "Sell" buttons are deactivated outside of Killzones. The user must wait for the Asian Range to consolidate, the London Judas Swing to sweep liquidity, and execute a trade within the New York Killzone based on the AMD profile.
- **Reward**: Passing this rigorous execution test unlocks the **Phase 1 Trading Account ($10,000)**.
