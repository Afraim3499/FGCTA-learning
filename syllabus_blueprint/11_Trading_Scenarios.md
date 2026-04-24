# Trading Scenarios & Phase Graduations

This document defines the rules and configurations for the Strategy Cluster tests that gate each Phase of trading capital.

## The Architecture of a Scenario Gate
A Phase Graduation Gate is not a multiple-choice test. It is a live simulated trading session running in the `MiniReplayEngine`. 
The engine is pre-loaded with specific historical data (`historicalDataId`) containing a predetermined price action setup. The user must successfully navigate the setup using strict rules.

---

## Gate A: Teen to Adult (Unlocks Phase 1 - $10,000)

### Objective
The user must demonstrate they can identify a trend, wait for a pullback to structure (Support/Resistance or Trendline), and execute a trade with exact 1% risk management.

### Configuration
- **Allowed Tools**: Trendline tool, Limit Orders.
- **Hidden Tools**: Leverage, Market Orders, Stop Orders.
- **Scenario Data**: `SCENARIO_P1_GATE` (A clean 15m uptrend with a 50% retracement).

### Win / Fail Conditions
- **Win**: Execute a Buy Limit order precisely at the trendline touch. Set Stop Loss perfectly to 1% of the $10,000 account ($100). The trade must hit a 1:2 Risk/Reward target.
- **Fail 1 (Impatience)**: Executing a market order before the price reaches the trendline.
- **Fail 2 (Risk Breach)**: Sizing the lot so that the Stop Loss exceeds $100 risk.
- **Fail 3 (Greed)**: Closing the trade before the 1:2 target is hit manually.

---

## Gate B: Adult to Elite (Unlocks Phase 2 - $25,000)

### Objective
The user must demonstrate they understand liquidity traps. They must avoid trading obvious retail support, wait for the liquidity sweep, and enter on the resulting Order Block.

### Configuration
- **Allowed Tools**: S/R Zones, Order Block annotations, Limit Orders, Market Orders.
- **Hidden Tools**: Moving Averages, trailing stops.
- **Scenario Data**: `SCENARIO_P2_GATE` (A glaring double-bottom on the 1H chart, followed by a violent wick down to sweep stops, tapping an imbalance).

### Win / Fail Conditions
- **Win**: Wait for the double bottom to break. Execute a Buy Limit at the origin Order Block below the retail support. Survive the wick, achieve a 1:3 RR.
- **Fail 1 (The Trap)**: Buying at the Double Bottom (retail support) before the sweep occurs. This will instantly hit the stop loss.
- **Fail 2 (Hesitation)**: Failing to place the limit order at the Order Block after the sweep occurs.

---

## Gate C: Elite Certification (Unlocks Phase 3 - $50,000)

### Objective
The user must trade a volatile macro-economic week (NFP Friday), managing drawdowns and applying multi-timeframe analysis across 5 separate trades.

### Configuration
- **Allowed Tools**: ALL tools unlocked.
- **Scenario Data**: `SCENARIO_P3_GATE` (A full 5-day replay of a chaotic NFP week).

### Win / Fail Conditions
- **Win**: The user must place at least 5 trades over the 5 simulated days. The total account balance must end strictly at +5% ($52,500) without ever breaching a 4% maximum drawdown.
- **Fail 1 (Drawdown Breach)**: Account equity drops below $48,000 at any point during the simulation.
- **Fail 2 (Over-risking)**: Any single trade risks more than 1.5% of the account.
- **Fail 3 (Inaction)**: Placing fewer than 5 trades.
