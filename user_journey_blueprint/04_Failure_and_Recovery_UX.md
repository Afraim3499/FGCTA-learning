# User Journey UX/UI Blueprint: 04 - Failure & Recovery Protocols

**Objective:** Map the psychological and UI flow when a student fails a tier assessment or gets "liquidated" in the Tier 8 Crucible. We do not want them to churn; we want them to learn from the institutional trap.

---

## 1. The "Wipeout" Screen (The Failure State)

**Trigger**: The user fails a Tier 4 (Institutional Trap) simulation or breaches the Max Drawdown in Tier 8.
**URL**: `/journey/[asset]/liquidation`
**Visual Layout**: 
*   The screen instantly darkens. All charts and data vanish.
*   A harsh red overlay pulses once.
*   **Header**: `[ MARGIN CALL EXECUTED ]` or `[ ACCOUNT LIQUIDATED ]` in bold, monospace font.
*   **Subtext**: "You failed to identify the institutional liquidity sweep. You became the liquidity."

### The Post-Mortem Panel
Beneath the liquidation header, the UI generates a dynamic post-mortem report based on exactly what they did wrong.
*   **Example (Forex)**: "You bought the breakout at 1.0550. Retail sentiment was 92% Long. Commercials were heavily net short. You traded against the smart money."
*   **Data Replay**: A small video box automatically replays the last 10 seconds of their simulation, showing exactly where they clicked and how the market instantly reversed on them.

---

## 2. The Remediation Loop (The Path Back)

We do not let them instantly click "Try Again". That encourages gambling behavior. They must complete a remediation step.

### Step 2.1: The Forced Review
*   **Button**: `[Review Institutional Mechanics]` (This is the *only* clickable button on the screen).
*   **Action**: Routes the user to a specific Remediation Page (`/journey/[asset]/remediation/[strategy_id]`).
*   **UI**: The specific Strategy Vault blueprint file that they failed (e.g., Strategy #128: Spoofed Imbalance) is displayed on screen.
*   **Task**: They must read the mechanics of the trap again.

### Step 2.2: The Mini-Quiz
*   Before unlocking the simulation, they must answer a 3-question multiple-choice quiz specifically about the trap they just fell for.
*   **Example Question**: "When the DOM shows a massive Buy Wall, but price is not moving up, what is the institution likely doing?"
    *   A) Preparing for a breakout.
    *   B) Spoofing the bid to absorb market sell orders (Iceberg). *(Correct)*

### Step 2.3: Unlocking the Retake
*   Once the mini-quiz is passed (100% required), the UI shifts back to neutral colors.
*   **Header**: "Mechanics verified. Capital reloaded."
*   **Button**: `[Re-enter the Simulation]` (Electric Blue)
    *   **System Action**: Routes the user back to the Assessment screen. *Crucially, the backend randomizes the parameters of the simulation so they cannot simply memorize the previous chart.*

---

## 3. The Tier 8 Crucible Failure (The Hard Reset)

Failing the final 3-day simulated crucible at the end of the 30-day course requires a stricter penalty to maintain the prestige of the certificate.

**Trigger**: Breaching 4% Max Drawdown during the final Tier 8 assessment.
**Visual Layout**: 
*   "Crucible Failed. Risk Management Breached."
*   **Penalty UI**: The user is temporarily "locked out" of the final assessment for 24 hours (simulated cooling-off period).
*   **Countdown Timer**: A large timer counts down from 24:00:00.
*   **Call to Action**: While waiting, the only available button is `[Return to Strategy Vault]`. They are forced to study while they wait.

## Database State Checkpoint (Failure Tracking)
Every failure is logged to build their "Student Dossier".
```json
{
  "email": "student@example.com",
  "progress": {
    "forex": {
      "currentTier": 4,
      "status": "REMEDIATION",
      "failureCount": 3,
      "lastFailedStrategy": "STRATEGY_128_SPOOFING"
    }
  }
}
```
