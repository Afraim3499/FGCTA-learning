# Tier 5: Advanced Risk & Trade Management

## Overview
By this tier, the student has a $10,000 Demo Account and understands algorithmic price delivery. Now, we introduce institutional risk models. This is not basic "1% risk" theory. This is dynamic scaling, asymmetric compounding, and equity curve defense.

---

## Section 15: Dynamic Position Sizing
*Goal: Sizing positions based on market volatility and personal equity curve state.*

### Module 15.1: The Kelly Criterion & Expected Value Optimization
- **Content**: Mathematical modeling to calculate optimal fraction sizing based on individual win rate and average Risk/Reward ratio.

### Module 15.2: Volatility-Adjusted Sizing
- **Content**: Why risking 1% on a tight 5-pip stop during high-impact news is statistically inferior to risking 0.5% with a 15-pip stop. Adjusting size to the ATR (Average True Range).

### Module 15.3: Interactive Task: The Dynamic Risk Calculator
- **Task**: `dynamic_risk_drill`
  - **Mechanic**: User is hit with rapid-fire market conditions (e.g., High Volatility + Recent 3-trade losing streak). They must quickly calculate and input the adjusted risk parameter.

---

## Section 16: The Art of Scaling and Partials
*Goal: Securing profits to fund risk, rather than praying for a home run.*

### Module 16.1: Risk-Free Funding (Scaling Out)
- **Content**: The psychology and math of taking 50% of the position off at 1R, and moving the stop to Break-Even (BE). 
- **Concept**: You are paying yourself to hold the remainder of the trade risk-free.

### Module 16.2: Scaling In (Pyramiding)
- **Content**: Adding to winners. How to add positions at subsequent FVGs during a strong trending Distribution phase, while trailing the stop loss to maintain the initial 1% risk.

---

## Section 17: Equity Curve Defense (Drawdown Management)
*Goal: Preventing the catastrophic spiral.*

### Module 17.1: The Asymmetric Gear Shift
- **Content**: Institutional rule: If you suffer 3 losses in a row, risk halves (1% -> 0.5%). If you suffer 2 more, it halves again (0.25%). The goal is to make it mathematically impossible to blow an account quickly.

### Module 17.2: Daily & Weekly Circuit Breakers
- **Content**: Setting hard limits. Max daily loss of 3%. Max weekly loss of 6%. Walking away from the terminal.

---

## Tier 5 Final Gate: The Drawdown Crucible
- **Task**: `drawdown_simulator`
- **Format**: User enters the simulator. The system *intentionally* forces the user into a 4-trade losing streak (regardless of their analysis, the algorithm stops them out). 
- **Requirement**: The system measures their Lot Size on the 5th and 6th trades. If the user revenge trades (increases size) or fails to implement the Asymmetric Gear Shift (halving their risk), they fail the Tier. They must claw back from the programmed drawdown using proper partials and scaled risk.
