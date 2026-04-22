# SYSTEM AUDIT & BALANCING REPORT v1.0

> **Scope**: Full platform stress-test — exploits, weak points, edge cases, and rebalancing
> **Input**: PLATFORM_MASTER_PLAN, TRADING_ENGINE_SPEC, CERTIFICATION_GAMIFICATION, TECHNICAL_IMPLEMENTATION
> **Objective**: Identify every way the system breaks, then fix it

---

# STEP 1 — SYSTEM BREAK TEST

---

## A. EXPLOITS — Ways Users Can Game The System

### EXP-01: Cherry-Pick Timing on Historical Replay (SEVERITY: HIGH)

**Exploit**: If user can see instrument name + dates, they look up what happened historically and trade with hindsight.

**Even with date hiding**: Experienced traders can recognize specific price patterns (COVID crash, BTC halving, etc.)

**Fix**:
- ✅ Already have `randomize_start` and `hide_dates` — keep these mandatory
- **ADD**: Blend mode — splice 3-5 different historical periods together seamlessly
- **ADD**: Mirror mode — flip price action horizontally (reverse time axis) randomly
- **ADD**: Instrument obfuscation — display as "ASSET-A/ASSET-B" with no real labels
- **ADD**: Slight amplitude scaling (±5-15%) so exact price levels don't match memory

---

### EXP-02: Micro-Position Sizing to Avoid Risk Rules (SEVERITY: MEDIUM)

**Exploit**: User opens tiny positions (0.01% risk) to accumulate trade count without real risk, then places 1-2 large trades for all the profit. Technically follows rules but defeats the purpose.

**Fix**:
- **ADD Rule R007**: Minimum risk per trade = 0.5% of equity
- **ADD Metric**: Risk consistency variance — if std dev of risk sizes is too high (>1.5% spread), flag as "inconsistent sizing"
- **ADD to Cert Scoring**: Position size consistency as sub-metric under Risk Management

---

### EXP-03: End-of-Phase Gambling (SEVERITY: HIGH)

**Exploit**: User is at 18% profit with 2 days left (needs 20%). Goes all-in on final trade. If it works, passes. If not, resets with only 1 penalty.

**Fix**:
- **ADD Rule R008**: No single trade can risk more than 3% of STARTING phase capital (not current equity)
- **ADD**: "Final week" risk reduction — max risk drops to 1% per trade in last 25% of time limit
- **ADD to Scoring**: Large variance in late-phase trades penalizes consistency score

---

### EXP-04: Reset Farming for Optimal Run (SEVERITY: MEDIUM)

**Exploit**: User intentionally fails early (day 2, burns drawdown), resets, and starts fresh with knowledge of the price data pattern. Repeat until they get favorable data.

**Fix**:
- ✅ Already have reset penalties (multiplier drops)
- **ADD**: New price data on every reset — never serve the same historical segment twice
- **ADD**: Minimum 5 trades before reset is available (prevents instant-reset loops)
- **ADD**: Cooldown escalation: Reset 1 = 24h wait, Reset 2 = 48h, Reset 3 = 72h

---

### EXP-05: XP Inflation via Spam Modules (SEVERITY: LOW)

**Exploit**: User re-reads completed modules or exploits module completion events.

**Fix**:
- ✅ Module XP awarded only ONCE per module (already implied but must be explicit)
- **ADD**: `xp_ledger` must check for duplicate `source_id` before awarding
- **ADD**: Daily XP cap from learning actions = 300 XP/day
- Trading XP cap already exists (200/day) — keep

---

### EXP-06: Test Answer Memorization (SEVERITY: MEDIUM)

**Exploit**: User fails knowledge test, notes correct answers, retakes immediately and passes.

**Fix**:
- **ADD**: Question pool per level (minimum 3x questions vs. test length)
- **ADD**: Randomized question selection (e.g., 20 questions from pool of 60)
- **ADD**: Randomized answer order
- **ADD**: Cooldown between test retakes: 4 hours minimum
- **ADD**: Max 3 attempts per test per 24 hours

---

### EXP-07: Certification Score Gaming via Market Selection (SEVERITY: LOW)

**Exploit**: User picks "easiest" market track (e.g., Gold with slower moves) to get better consistency/drawdown scores.

**Fix**:
- **ADD**: Market-adjusted scoring benchmarks — Gold consistency thresholds should be tighter since volatility is lower
- **ADD**: Display market track on certificate so employers/viewers see context
- Already handled: cert shows market track — keep and ensure scoring adjusts

---

## B. WEAK POINTS — Unfair or Demotivating Design

### WP-01: Phase 1 Time Pressure + Low Capital = Frustrating (SEVERITY: HIGH)

**Problem**: $100 capital with 2% risk = $2 per trade. Need +$20 profit. With realistic spreads and commissions, user needs many perfect trades. 30-day limit creates pressure on beginners who are JUST learning in L2.

**Fix**:
- **CHANGE**: Phase 1 time limit: 30 days → **45 days**
- **CHANGE**: Phase 1 commission: **zero commission** (training wheels)
- **CHANGE**: Phase 1 spread: **fixed minimum spread** (not dynamic) — reduces variance
- **ADD**: Phase 1 is labeled "Training Phase" — explicitly lower stakes messaging
- Keep 15 min trade minimum and other rules — they still learn discipline

---

### WP-02: Drawdown Limit Too Tight in Early Phases (SEVERITY: MEDIUM)

**Problem**: 10% drawdown on $100 = $10. A single bad trade at 2% risk with slippage can take $2-3. Five losing trades in a row (normal for beginners) = phase failed. Too punishing for Phase 1-2.

**Fix**:
- **CHANGE Phase 1 drawdown**: 10% → **15%** ($85 floor instead of $90)
- **CHANGE Phase 2 drawdown**: 10% → **12%** ($264 floor instead of $270)
- Keep Phase 3-5 at original levels (user should be skilled by then)

**Updated Phase Table**:

| Phase | Capital | Target | Max DD | Time Limit |
|-------|---------|--------|--------|------------|
| 1 | $100 | +20% | **-15%** | **45 days** |
| 2 | $300 | +20% | **-12%** | 45 days |
| 3 | $1,000 | +25% | -12% | 60 days |
| 4 | $3,000 | +25% | -12% | 75 days |
| 5 | $10,000 | +30% | -15% | 90 days |

---

### WP-03: "Revenge Trade" Detection is Fragile (SEVERITY: MEDIUM)

**Problem**: Current rule = "re-entry < 2 minutes after loss." But scalpers legitimately re-enter fast. Also, user could wait 2:01 and still be revenge trading.

**Fix**:
- **CHANGE**: Revenge trade = re-entry within 2 min **AND** position size ≥ 150% of previous losing trade
- **ADD**: If user takes 3+ losses in a row AND increases size, flag as "escalation pattern" (not just time-based)
- **ADD**: Soft warning first, XP penalty on second occurrence within same day
- Phase 1 users: detection disabled (they're still learning)

---

### WP-04: Leaderboard Favors Early Completers (SEVERITY: LOW)

**Problem**: First users to finish have less competition → inflate ranks. Later users face tougher benchmarks.

**Fix**:
- **ADD**: Leaderboard uses percentile ranking, not absolute position
- **ADD**: Weekly leaderboard resets keep competition fresh
- **ADD**: "All-time" board is separate from "current cohort" board

---

### WP-05: No Partial Credit for Failed Phases (SEVERITY: MEDIUM)

**Problem**: User trades well for 50 days, has +22% profit, then one bad day breaches drawdown on day 51. All progress = zero. Massively demotivating.

**Fix**:
- **ADD**: "Phase Performance Record" — even failed phases contribute learning data
- **ADD**: If user was within 80% of target at failure, show "Near Pass" status with encouragement
- **ADD**: Failed phase trade data feeds into a "What Went Wrong" analysis report
- **ADD**: XP earned during failed phase is KEPT (trades, rule-following) — only phase completion XP is lost
- Reset penalty still applies — this doesn't make failure free

---

## C. EDGE CASES

### EC-01: User Completes All Course Content But Can't Pass Trading (SEVERITY: HIGH)

**Scenario**: User finishes L0-L9 perfectly (all tests passed) but keeps failing Phase 3. They're stuck. Course is done, trading is blocked, certification unreachable.

**Fix**:
- **ADD**: "Strategy Lab" mode — unlimited practice simulation with no phase rules, available after L2
- **ADD**: Diagnostic report after 3 consecutive phase failures: "Your weakness appears to be [risk management / consistency / ...]"
- **ADD**: Targeted remedial modules that link back to relevant course sections
- **ADD**: Phase can be retried on different market track (user doing Forex Phase 3 can try Gold Phase 3 instead)

---

### EC-02: User Performs Well But Fails On Technicality (SEVERITY: HIGH)

**Scenario**: User has +28% profit, great risk metrics, but has 14 trades (min is 15) when time expires. Phase fails.

**Fix**:
- **ADD**: "Requirements Shortfall Warning" at 75% time elapsed: "You need 1 more trade and 2 more trading days to qualify"
- **ADD**: Dashboard prominently displays ALL requirements with red/green status
- **ADD**: If user meets profit target but misses min trades by ≤ 2, grant a 7-day extension (one-time per phase)

---

### EC-03: User Passes All Phases But Cert Score < 70 (SEVERITY: MEDIUM)

**Scenario**: User completed everything but accumulated resets (3 resets × 0.60 multiplier) tank the score to 58.

**Fix**:
- **ADD**: "Provisional Certification" at score 60-69 — user gets Level 4.5 status ("Advanced Trader")
- **ADD**: Option to attempt a "Certification Recovery Phase" — one additional phase (same as Phase 5 rules) where reset counter is frozen, and performance score replaces previous worst phase
- Clear messaging: "Your resets impacted your score. Complete the recovery phase to improve."

---

### EC-04: User Achieves Perfect Phase Score But Skipped Course (SEVERITY: LOW)

**Scenario**: Experienced trader wants to skip course content and just trade.

**Fix**:
- Gate system already prevents this (phases unlock AFTER course levels)
- **ADD**: "Challenge Exam" per level — if user scores ≥ 90% on combined L0-L2 test, they can skip to Phase 1 directly
- Challenge exams available for L0-L2, L3-L4, L5-L7 (three skip gates)
- User still must complete all phases — no trading shortcuts

---

### EC-05: WebSocket Disconnection During Trade (SEVERITY: HIGH)

**Scenario**: User's internet drops while they have open positions. Price moves against them. They can't close.

**Fix**:
- **ADD**: All open positions must have stop-loss (already enforced by R003)
- **ADD**: Server-side auto-close if client disconnected > 5 minutes
- **ADD**: "Connection Lost" overlay on reconnect with position status summary
- **ADD**: Grace period — if disconnection caused a rule violation (e.g., daily loss limit hit while disconnected), violation is waived with audit log

---

# STEP 2 — SYSTEM BALANCING

---

## Rebalanced Phase Difficulty

| Phase | Capital | Target | Max DD | Time | Min Trades | Min Days | Max Risk | Max Leverage | Commission |
|-------|---------|--------|--------|------|-----------|----------|----------|-------------|------------|
| 1 | $100 | +20% | -15% | 45d | 15 | 10 | 2% | 5x | **$0** |
| 2 | $300 | +20% | -12% | 45d | 25 | 15 | 2% | 10x | Low |
| 3 | $1,000 | +25% | -12% | 60d | 40 | 20 | 2% | 15x | Standard |
| 4 | $3,000 | +25% | -12% | 75d | 50 | 25 | 2% | 20x | Standard |
| 5 | $10,000 | +30% | -15% | 90d | 60 | 30 | 1.5% | 25x | Standard |

## Rebalanced Reset Penalties

| Resets (per phase) | Score Multiplier | Cooldown | Max Cert Score |
|--------------------|:----------------:|----------|:--------------:|
| 0 | 1.00 | — | 100 |
| 1 | 0.92 | 24h | 100 |
| 2 | 0.80 | 48h | 90 |
| 3 | 0.65 | 72h | 85 |
| 4 | 0.55 | 96h | 75 |
| 5+ | 0.50 | 96h | 70 |

**Change rationale**: Original penalties were too steep early (0.90 on first reset punishes normal learning). Softened first reset, steepened later resets.

## Rebalanced XP Awards

| Action | Original | Rebalanced | Rationale |
|--------|:--------:|:----------:|-----------|
| Complete module | +50 | +50 | Fine |
| Pass knowledge test | +30 | **+40** | Tests are harder than modules; reward accordingly |
| Practice exercise | +20 | +20 | Fine |
| Execute trade | +10 | +10 | Fine |
| Profitable trade close | +15 | **+10** | Reduce profit-focus in XP |
| Follow all rules in trade | +20 | **+25** | Increase discipline reward |
| Clean trading day | +25 | **+30** | Strongest daily discipline signal |
| Positive P&L day | +10 | **+5** | De-emphasize P&L in XP |
| Weekly target hit | +50 | +50 | Fine |
| Phase advance | +200 | **+300** | Major milestone deserves more |
| Cert level earned | +500 | +500 | Fine |
| Break rule | -40 | -40 | Fine |
| Revenge trade | -50 | **-40** | Aligned with other penalties |
| Overtrade | -30 | -30 | Fine |
| Reset phase | -100 | **-75** | Original was double-penalty with multiplier |

**Design philosophy**: XP should reward PROCESS (discipline, consistency, learning) more than OUTCOME (profit). Rebalanced to ~60% process / 40% outcome weighting.

## Rebalanced Certification Thresholds

### Scoring Rubric Adjustments

| Metric | Original "Excellent" | Rebalanced "Excellent" | Rationale |
|--------|---------------------|----------------------|-----------|
| Win Rate | ≥ 55% | **≥ 50%** | 55% is institutional-level; unfair for retail/student |
| Profit Factor | ≥ 2.0 | ≥ 2.0 | Keep — achievable with good R:R |
| Max Drawdown (Excellent) | < 5% | **< 6%** | 5% is extremely tight; slightly loosened |
| Max Consec Losses | ≤ 3 | **≤ 4** | 3 is unrealistic over 60+ trades; 4 is still strong |

### Cert Level 5 Pass Threshold

| Original | Rebalanced | Rationale |
|:--------:|:----------:|-----------|
| ≥ 70/100 | **≥ 65/100** | With reset penalties applied, 70 was nearly impossible after 2+ resets. 65 maintains standards while being achievable. |

**ADD**: Score band labels on certificate:
- 90-100: **Distinction**
- 80-89: **Merit**
- 65-79: **Pass**
- 60-64: **Provisional** (if recovery phase system is used)

---

## New Rules Summary (Added from Break Test)

| Rule ID | Rule | Enforcement |
|---------|------|-------------|
| R007 | Min risk per trade: 0.5% of equity | Hard Block |
| R008 | Max single-trade risk: 3% of STARTING phase capital | Hard Block |
| R009 | Final 25% of time limit: max risk drops to 1% | Soft Warning → Hard Block |
| R010 | Min 5 trades before reset available | System Lock |
| R011 | Escalation detection (3 losses + size increase) | Soft Warning |

---

*End of System Audit & Balancing Report. See EXECUTION_CONTROL_PLAN.md for build plan, UX flows, and retention strategy.*
