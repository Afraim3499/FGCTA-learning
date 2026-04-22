# TRADING ENGINE SPECIFICATION v1.0

> **Type**: Proprietary In-House Trading Simulation
> **Purpose**: Test, validate, and certify trader performance in controlled environment
> **NOT**: Connected to live markets. NOT a paper trading wrapper.

---

# 1. CAPITAL PROGRESSION SYSTEM

## Phase Structure

| Phase | Virtual Capital | Target Profit | Max Drawdown | Time Limit | Unlock Condition |
|-------|----------------|---------------|--------------|------------|-----------------|
| **Phase 1** | $100 | +20% ($120) | -10% ($90) | 30 days | L2 course complete |
| **Phase 2** | $300 | +20% ($360) | -10% ($270) | 45 days | Phase 1 passed + L3 complete |
| **Phase 3** | $1,000 | +25% ($1,250) | -12% ($880) | 60 days | Phase 2 passed + L4 complete |
| **Phase 4** | $3,000 | +25% ($3,750) | -12% ($2,640) | 75 days | Phase 3 passed + L5 complete |
| **Phase 5** | $10,000 | +30% ($13,000) | -15% ($8,500) | 90 days | Phase 4 passed + L8 complete |

## Phase Transition Rules

- User MUST hit target profit to advance
- Hitting drawdown limit = phase FAILED → must reset or retry
- Time limit exceeded without target = phase FAILED
- Minimum trade count required per phase (prevents lucky single trades)

| Phase | Min Trades Required | Min Trading Days |
|-------|--------------------|-----------------:|
| 1 | 15 | 10 |
| 2 | 25 | 15 |
| 3 | 40 | 20 |
| 4 | 50 | 25 |
| 5 | 60 | 30 |

---

# 2. RESET SYSTEM

## Reset Mechanics

When a user fails a phase (drawdown breach or time expiry), they can **reset** that phase.

| Reset Count (per phase) | Score Multiplier | Additional Penalty |
|--------------------------|------------------|--------------------|
| 0 (first attempt) | 1.00 | None |
| 1 | 0.90 | Warning badge applied |
| 2 | 0.75 | "Reset Dependent" flag |
| 3 | 0.60 | Cert score capped at 85/100 max |
| 4+ | 0.50 | Cert score capped at 75/100 max |

## Reset Rules

- Resets are per-phase (Phase 3 resets don't affect Phase 1 score)
- Reset counter is permanent and visible on profile
- Capital resets to phase starting amount
- All trade history from failed attempt is preserved (for learning review)
- User must wait 24 hours before resetting (prevents tilt-resetting)
- **Optional**: Reset Pack purchase removes 1 reset from counter (revenue stream)

## Reset Data Tracking

```
reset_record {
  user_id
  phase_id
  reset_number        // 1, 2, 3...
  reason              // "drawdown_breach" | "time_expired" | "voluntary"
  equity_at_reset     // what was equity when reset triggered
  trades_completed    // how many trades before failure
  timestamp
}
```

---

# 3. PERFORMANCE TRACKING SYSTEM

## Tracked Metrics

### A. Profitability Metrics

| Metric | Formula | Weight in Score |
|--------|---------|:---------------:|
| Net P&L | Sum of all closed trade P&L | Component of 40% |
| Win Rate | Winning trades / Total trades | Component of 40% |
| Profit Factor | Gross profit / Gross loss | Component of 40% |
| Average R-Multiple | Avg (trade P&L / initial risk) | Component of 40% |
| Expectancy | (Win% × Avg Win) - (Loss% × Avg Loss) | Component of 40% |

### B. Risk Management Metrics

| Metric | Formula | Weight in Score |
|--------|---------|:---------------:|
| Max Drawdown | Largest peak-to-trough decline | Component of 30% |
| Avg Risk Per Trade | Average position risk as % of capital | Component of 30% |
| Risk/Reward Ratio | Average reward / average risk per trade | Component of 30% |
| Position Size Compliance | % trades within allowed size limits | Component of 30% |

### C. Consistency Metrics

| Metric | Formula | Weight in Score |
|--------|---------|:---------------:|
| Sharpe Ratio | (Avg return - Rf) / Std dev of returns | Component of 20% |
| Daily P&L Std Dev | Standard deviation of daily returns | Component of 20% |
| Consecutive Loss Limit | Max consecutive losing trades | Component of 20% |
| Trading Day Distribution | Spread of trades across available days | Component of 20% |

### D. Discipline Metrics

| Metric | Formula | Weight in Score |
|--------|---------|:---------------:|
| Rule Violations | Count of broken trading rules | Component of 10% |
| Stop-Loss Compliance | % trades with stop-loss set | Component of 10% |
| Overtrading Events | Days exceeding max trade count | Component of 10% |
| Revenge Trade Detection | Rapid re-entry after loss (< 2 min) | Component of 10% |

---

# 4. TRADING RULES ENGINE

## Universal Rules (All Phases)

| Rule ID | Rule | Violation Penalty |
|---------|------|-------------------|
| R001 | Max risk per trade: 2% of current equity | Trade rejected OR -40 XP |
| R002 | Max open positions: varies by phase | Trade rejected |
| R003 | Stop-loss required on every trade | Warning → repeated = -XP |
| R004 | Max daily loss: 3% of starting daily equity | Trading locked for day |
| R005 | Max trades per day: varies by phase | Trade rejected |
| R006 | No opening trades in final 5 min of session | Trade rejected |

## Phase-Specific Limits

| Rule | Phase 1 | Phase 2 | Phase 3 | Phase 4 | Phase 5 |
|------|---------|---------|---------|---------|---------|
| Max risk/trade | 2% | 2% | 2% | 2% | 1.5% |
| Max open positions | 2 | 3 | 4 | 5 | 6 |
| Max trades/day | 5 | 8 | 10 | 12 | 15 |
| Max leverage | 5x | 10x | 15x | 20x | 25x |
| Min hold time | 2 min | 1 min | 30 sec | 15 sec | None |
| Allowed order types | Market, Limit | +Stop | +Trailing | +OCO | All |

## Rule Enforcement Modes

| Mode | Behavior |
|------|----------|
| **Hard Block** | Trade is rejected; user sees error with rule explanation |
| **Soft Warning** | Trade executes but flagged; XP penalty applied; discipline score affected |
| **Silent Track** | No user-facing action; metric logged for cert scoring |

| Rule | Enforcement |
|------|-------------|
| R001 (risk limit) | Hard Block |
| R002 (max positions) | Hard Block |
| R003 (stop-loss) | Soft Warning (first 3) → Hard Block |
| R004 (daily loss) | Hard Block (locks trading) |
| R005 (max trades) | Hard Block |
| R006 (session timing) | Hard Block |

---

# 5. MARKET SIMULATION SYSTEM

## A. Price Data Engine

### Data Sources

| Type | Description | Use Case |
|------|-------------|----------|
| **Historical Replay** | Real market data played back at configurable speed | Primary simulation mode |
| **Synthetic Generation** | Algorithmically generated price data with controlled properties | Regime-specific practice |
| **Blended** | Historical base + synthetic noise/variation | Prevent memorization |

### Historical Replay Specs

```
replay_config {
  market            // "forex" | "crypto" | "gold"
  instrument        // "EUR/USD", "BTC/USDT", "XAU/USD"
  start_date
  end_date
  playback_speed    // 1x, 2x, 5x, 10x, 50x
  candle_interval   // 1m, 5m, 15m, 1H, 4H, 1D
  randomize_start   // true = random entry point (anti-memorization)
  hide_dates        // true = dates hidden from user
}
```

### Synthetic Data Generation

| Property | Control |
|----------|---------|
| Trend strength | ADX equivalent: 10–60 |
| Volatility | ATR multiplier: 0.5x–3x |
| Mean reversion tendency | Auto-correlation coefficient |
| Gap frequency | 0–5 per session |
| News spike injection | Configurable frequency + magnitude |
| Regime type | Trending / Ranging / High-Vol / Low-Vol / Event |

### Anti-Memorization Features

- Random start points within historical data
- Date/time labels hidden or scrambled
- Slight noise injection on historical data (±0.1% random jitter)
- Synthetic segments spliced into historical data
- Same period never served twice to same user

## B. Order Execution System

### Supported Order Types

| Order Type | Phase Available | Behavior |
|------------|----------------|----------|
| **Market Order** | All | Fills at current ask/bid + simulated slippage |
| **Limit Order** | All | Fills when price touches limit level |
| **Stop Order** | Phase 2+ | Triggers market order when stop level hit |
| **Stop-Limit** | Phase 3+ | Triggers limit order at stop level |
| **Trailing Stop** | Phase 3+ | Stop follows price by fixed distance/% |
| **OCO** | Phase 4+ | One-cancels-other paired orders |
| **Take Profit** | All | Limit close at target level |

### Execution Realism

| Feature | Implementation |
|---------|---------------|
| **Spread** | Dynamic spread based on historical bid-ask data per instrument |
| **Slippage** | Random 0–2 pip slippage on market orders; higher in high-vol |
| **Partial Fills** | Simulated for large positions (Phase 4+) |
| **Swap/Funding** | Overnight swap (Forex/Gold); funding rate (Crypto) applied |
| **Commission** | Configurable per instrument; realistic rates |
| **Margin** | Calculated per position; margin call at threshold |

### Execution Logic Pseudocode

```
on_order_submit(order):
  // 1. Validate against rules engine
  if !rules_engine.validate(order, user_state):
    return rejection(rule_violated)
  
  // 2. Check margin availability
  required_margin = calc_margin(order.size, order.leverage)
  if user.free_margin < required_margin:
    return rejection("insufficient_margin")
  
  // 3. Execute based on order type
  if order.type == "MARKET":
    fill_price = current_price + calc_slippage(volatility)
    fill_price += spread_half  // buy at ask, sell at bid
    execute_fill(order, fill_price)
  
  if order.type == "LIMIT":
    add_to_pending_orders(order)
    // checked on each price tick
  
  // 4. Log trade event
  emit_event("trade_opened", trade_data)
  
  // 5. Update XP
  gamification.award_xp("execute_trade", +10)
  
  // 6. Check rule compliance
  if !order.has_stop_loss:
    gamification.award_xp("break_rules", -40)
    discipline.log_violation("no_stop_loss")
```

## C. Leverage Simulation

| Market | Max Leverage by Phase | Margin Call Level | Liquidation Level |
|--------|----------------------|-------------------|-------------------|
| Forex | 5x → 10x → 15x → 20x → 25x | 80% margin used | 100% margin used |
| Crypto | 3x → 5x → 10x → 15x → 20x | 80% margin used | 100% margin used |
| Gold | 5x → 10x → 15x → 20x → 25x | 80% margin used | 100% margin used |

---

# 6. PERFORMANCE DASHBOARD

## Real-Time Display

```
┌─────────────────────────────────────────────┐
│            TRADING DASHBOARD                │
├──────────────────┬──────────────────────────┤
│ Current Phase: 3 │ Capital: $1,047 (+4.7%)  │
├──────────────────┼──────────────────────────┤
│ Target: $1,250   │ Drawdown: -3.2% / -12%   │
├──────────────────┼──────────────────────────┤
│ Trades: 18/40    │ Days: 12/60              │
├──────────────────┴──────────────────────────┤
│                                             │
│  Win Rate: 61%    │ Profit Factor: 1.8      │
│  Avg R:R: 1:2.1   │ Avg Risk: 1.4%          │
│  Sharpe: 1.3      │ Max DD: -3.2%           │
│  Violations: 1    │ SL Compliance: 94%      │
│                                             │
├─────────────────────────────────────────────┤
│ PROJECTED CERT SCORE                        │
│ ████████████████████░░░░  78/100            │
│ Profit: 32/40 | Risk: 24/30 | Cons: 14/20  │
│ Discipline: 8/10                            │
└─────────────────────────────────────────────┘
```

## Trade Log

Each trade records:

```
trade_record {
  id, user_id, phase_id
  instrument, direction        // "BUY" | "SELL"
  entry_price, exit_price
  position_size, leverage
  stop_loss, take_profit
  risk_amount, risk_percent
  pnl, r_multiple
  hold_duration
  entry_time, exit_time
  order_type
  rule_violations[]            // any rules broken on this trade
  strategy_tag                 // user-tagged strategy family (optional)
  notes                        // user trade journal entry
}
```

---

*Full trading engine specification. See CERTIFICATION_GAMIFICATION.md for scoring and engagement systems.*
