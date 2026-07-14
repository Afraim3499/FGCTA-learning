# Lurnava Strategy Vault Regeneration Workflow

## Strategy Setup Explanation, Context, and Custom Visual System

You are now responsible for rebuilding Lurnava’s Strategy Vault into a real learning system.

The current issue is serious:

A strategy is useless if the student only sees a name, a generic explanation, and a generic chart.

Every strategy must explain and show the actual setup clearly enough that the student understands:

* what the setup is
* why the setup works
* what market context it needs
* what must happen before the setup is valid
* what confirms the setup
* where the setup fails
* what the visual should show
* how to practice the setup without treating it as a signal

Do not start implementation immediately.

First, define and follow the criteria below.

============================================================
PRIMARY OBJECTIVE
=================

Every strategy must become a complete learning object.

Not a database card.

Not a generic checklist.

Not the same chart with a different title.

A complete strategy page must teach:

1. The setup.
2. The context where the setup belongs.
3. The exact condition that makes the setup valid.
4. The visual structure of the setup.
5. The confirmation logic.
6. The invalidation logic.
7. The risk logic.
8. The target logic.
9. The traps.
10. The practice method.

If the setup is not explained and visually shown properly, the strategy is not useful.

============================================================
CORE RULE
=========

Do not generate or render any strategy using generic explanation or generic visuals.

Every strategy must have a strategy-specific setup explanation and a strategy-specific visual model.

A breakout strategy must not look like a moving-average strategy.

A moving-average strategy must not look like a supply/demand strategy.

A risk-sizing strategy must not show a candlestick breakout chart.

A crypto funding strategy must not show a normal price breakout diagram.

A gold macro strategy must not show a generic support/resistance setup.

The visual must match the strategy logic.

============================================================
WHAT EACH STRATEGY MUST EXPLAIN
===============================

For every strategy, generate or build the following:

1. Strategy Name

   * Clear strategy name
   * Strategy family
   * Asset class
   * Level
   * Difficulty

2. Simple Explanation

   * Explain the strategy in normal student-friendly language.
   * Avoid fake institutional language.
   * Avoid vague “high probability” claims.

3. Why This Strategy Exists

   * What market behavior creates the opportunity?
   * What problem does this strategy solve?
   * Why would a trader use this instead of random entry?

4. Why This Strategy Is Useful

   * What skill does it train?
   * What market mistake does it help avoid?
   * What decision does it make clearer?

5. Setup Context

   * What market condition must exist before this setup matters?
   * Trend?
   * Range?
   * Volatility compression?
   * Session breakout?
   * Liquidity sweep?
   * Macro reaction?
   * Indicator alignment?
   * Funding / derivatives pressure?
   * Pair strength / asset correlation?

6. When To Use It

   * Use plain language.
   * List the specific conditions where the strategy makes sense.
   * Include asset/session/timeframe requirements when relevant.

7. When Not To Use It

   * This is mandatory.
   * Explain the market condition where this strategy becomes dangerous or useless.
   * Include chop, news, low liquidity, overextension, wrong session, wrong asset behavior, or missing confirmation where relevant.

8. Suitable Markets / Pairs / Assets

   * Forex: suitable pairs, session behavior, spread condition.
   * Gold: XAUUSD behavior, COMEX/London/NY context, USD/yields sensitivity.
   * Crypto: spot/perp suitability, BTC dominance, funding, venue/liquidity condition.
   * Core concepts: explain whether it is universal or asset-sensitive.

9. Suitable Sessions

   * London, New York, Asia, COMEX, crypto weekend, news windows, etc.
   * Mention when the strategy should not be used due to session behavior.

10. Suitable Timeframes

* Which timeframes are realistic for learning and practice.
* Explain why.
* Warn against noisy timeframes if needed.

11. Setup Logic

* Step-by-step.
* No vague language.
* Each step must explain what the student should see.
* Each step must explain why it matters.

12. Confirmation Rules

* What must happen before the setup is considered valid?
* Candle close?
* Retest?
* Indicator alignment?
* Volume?
* Session timing?
* Higher timeframe agreement?
* Spread condition?
* Funding/OI condition?

13. Invalidation Rules

* Where is the idea wrong?
* What price action or condition cancels the setup?
* Explain invalidation structurally, not emotionally.

14. Risk Rules

* What makes this setup risky?
* What size/risk caution applies?
* What condition should reduce or cancel the attempt?

15. Target Logic

* Explain target logic without profit-promise language.
* Use structure, liquidity, prior high/low, measured move, volatility range, or next zone where relevant.

16. Trade Management Notes

* What should be monitored after entry in a simulator/practice context?
* When to hold, reduce, exit, or stop practicing?

17. Common Traps

* Must be unique to the strategy.
* Explain why the trap happens.
* Explain how to avoid it.

18. Beginner Mistakes

* Must be strategy-specific.
* Not the same generic “don’t chase” list everywhere.

19. Example Walkthrough

* Short educational scenario.
* Show how the setup forms.
* Show what confirms it.
* Show what invalidates it.
* Show what the learner should notice.
* No live signal language.

20. Practice Checklist

* Must be unique to the strategy.
* Each checklist item needs a reason.
* Do not use the same checklist for all strategies.

21. Related Academy Lessons

* Connect the strategy to the curriculum.
* Explain why the lesson is related.

22. Prerequisite Knowledge

* What must the learner understand before using this strategy?

23. Skill Domains Trained

* Chart reading
* Planning
* Execution
* Risk
* Strategy logic
* Review
* Psychology
* Asset specialization

24. Sandbox Practice Instructions

* How the student should practice this in Chart Lab or Strategy Lab.
* What they should mark.
* What they should write down.
* What outcome they should review.

============================================================
VISUAL / CHART REQUIREMENT
==========================

Every strategy must include a visualModel.

The visualModel must describe the correct chart or interactive visual for that exact strategy.

The visual must show the setup clearly.

It must not be generic.

For each strategy, define:

1. visualCategory
2. componentType
3. chartTitle
4. chartPurpose
5. marketConditionShown
6. setupFormationShown
7. entryOrActivationZone
8. confirmationMarker
9. invalidationZone
10. targetZone
11. trapZone
12. warningLabel
13. whatLearnerShouldNotice
14. mistakePrevented
15. interactionType
16. requiredLabels
17. requiredZones
18. assetSpecificVisualNotes

============================================================
VISUAL CATEGORY OPTIONS
=======================

Choose the correct visual category based on the strategy.

Allowed visual categories:

1. Breakout / Retest Visual
   For structural breakout, range breakout, retest, breakout confirmation.

2. Trend Continuation Visual
   For pullbacks, moving averages, trend-following, continuation setups.

3. Range / Mean Reversion Visual
   For range fill, support/resistance bounce, RSI reversion, Bollinger mean return.

4. Supply / Demand Zone Visual
   For order blocks, market supply/demand, return-to-origin setups.

5. Liquidity Sweep / Trap Visual
   For fakeout, stop hunt, sweep-reversal, failed breakout.

6. Volatility / Trailing Stop Visual
   For Supertrend, ATR stop, volatility stop, trailing models.

7. Indicator Structure Visual
   For Ichimoku, MACD, RSI, ADX, Bollinger, MA crossover.

8. Multi-Timeframe Confluence Visual
   For HTF/LTF alignment strategies.

9. Session / Time Window Visual
   For London open, Asian range, NY session, news-window setups.

10. Order Flow / Imbalance Visual
    For FVG, OB, breaker, displacement, volume imbalance.

11. Risk / Position Sizing Visual
    For fixed fractional, ATR sizing, Kelly, drawdown, margin, risk controls.

12. Crypto Derivatives Visual
    For funding, OI, liquidation, perp/spot spread, exchange inflow.

13. Gold Macro Reaction Visual
    For real yields, USD reaction, COMEX wick behavior, macro events.

14. Forex Pair Strength Visual
    For base/quote strength, DXY correlation, session pair pressure.

15. Psychology / Process Audit Visual
    For discipline, journaling, bias, review, habit loops.

16. Portfolio / Allocation Visual
    For multi-asset allocation, strategy mix, capital reporting, stress testing.

============================================================
EXAMPLES OF VISUAL FIT
======================

Moving Average Crossover:

* visualCategory: Indicator Structure Visual
* must show two moving averages crossing
* must show price context
* must show false crossover zone
* must show confirmation area
* must not use generic breakout chart

Supertrend Volatility Stop:

* visualCategory: Volatility / Trailing Stop Visual
* must show trailing stop line changing with volatility
* must show trend continuation
* must show where stop flips
* must show danger in sideways chop

London Open Breakout:

* visualCategory: Session / Time Window Visual
* must show Asian range
* must show London session expansion
* must show false breakout trap
* must show valid breakout confirmation

Funding Rate Arbitrage:

* visualCategory: Crypto Derivatives Visual
* must show spot/perp difference
* must show funding rate
* must show basis spread
* must show liquidation or exchange risk
* must not show a normal candle breakout diagram

Real Yield Inversion:

* visualCategory: Gold Macro Reaction Visual
* must show gold vs real yields
* must show USD/yield pressure
* must show macro confirmation
* must not show basic support/resistance only

Fixed Fractional Sizing:

* visualCategory: Risk / Position Sizing Visual
* must show account size
* risk percentage
* stop distance
* calculated position size
* it should be calculator-style, not candlestick chart

============================================================
OPENAI API ROLE
===============

Use OpenAI API to generate the StrategyLearningProfile.

OpenAI must not receive only the strategy name.

For each strategy, Antigravity must send:

1. strategy name
2. current strategy data
3. strategy family
4. asset class
5. level
6. difficulty
7. existing coreLogic
8. existing trapMechanics
9. existing tradeWalkthrough
10. related academy lessons
11. allowed level concepts
12. forbidden future-level concepts
13. required StrategyLearningProfile schema
14. required visualModel schema
15. examples of correct visual fit
16. anti-generic rules
17. tone rules
18. validation rules

OpenAI returns JSON only.

OpenAI drafts the content.

Antigravity validates the content.

Antigravity creates or maps the visual.

============================================================
TONE REQUIREMENT
================

The strategy profile must sound like a good teacher.

Use:

* clear language
* direct explanations
* student-friendly vocabulary
* practical examples
* honest warnings
* simple but serious tone

Do not use:

* fake institutional language
* vague motivational language
* gambling language
* signal language
* profit promises
* “perfect setup”
* “guaranteed”
* “always wins”
* copy-paste checklists
* generic traps

============================================================
BATCH WORKFLOW
==============

Process strategies in batches of 10.

Do not process all strategies at once.

For each batch:

1. Select 10 strategies.
2. Confirm each exists in database.
3. If missing, prepare seed/migration first.
4. Build full context package for each strategy.
5. Call OpenAI API to generate StrategyLearningProfile JSON.
6. Validate output.
7. Store or update learningProfile and visualModel.
8. Antigravity maps each visualModel to the correct visual component family.
9. Antigravity customizes labels, zones, and interaction.
10. Render each strategy page.
11. Run uniqueness and quality checks.
12. Return batch report.
13. Stop and wait for approval before next batch.

============================================================
VALIDATION RULES PER STRATEGY
=============================

A strategy fails validation if:

1. setup explanation is vague
2. context is missing
3. visualModel is missing
4. visual does not match the strategy
5. confirmation rules are generic
6. invalidation is generic
7. risk rules are generic
8. checklist is generic
9. common traps are generic
10. related lessons are irrelevant
11. future-level concepts are used too early
12. strategy encourages live trading
13. strategy implies profit certainty
14. same visual is reused without strategy-specific labels
15. setup cannot be understood from the page

============================================================
VISUAL VALIDATION RULES
=======================

A visual fails validation if:

1. it does not show the actual setup
2. it uses the same generic breakout diagram for unrelated strategies
3. it does not show confirmation
4. it does not show invalidation
5. it does not show trap/warning area
6. it does not show why the setup belongs in that market condition
7. it does not explain what the learner should notice
8. it is decorative only
9. it creates fake precision
10. it implies live signal or real-time data

============================================================
FIRST REQUIRED TASK
===================

Before regeneration begins, return:

1. Total strategy count
2. Strategies currently in database
3. Strategies missing from database
4. Strategies with rich content
5. Strategies with fallback/generic content
6. Strategies with visualModel
7. Strategies using generic visual
8. Strategies needing full regeneration
9. Recommended schema/storage approach
10. First 10 strategies proposed for Batch 1
11. Reason those 10 should go first
12. OpenAI prompt structure for StrategyLearningProfile generation
13. Visual creation strategy
14. Validation checklist

Do not begin Batch 1 until this is approved.

============================================================
BATCH REPORT FORMAT
===================

After each batch of 10, return:

1. Batch number
2. Strategy IDs
3. Strategy names
4. Asset class
5. Level
6. Content status before
7. Content status after
8. Setup explanation quality
9. Context quality
10. Visual category selected
11. Visual component used or created
12. Visual match quality
13. Validation result per strategy
14. UI render status
15. Problems found
16. Problems fixed
17. Remaining issues
18. Recommendation for next batch

============================================================
FINAL STANDARD
==============

A student opening a strategy page must understand:

* what the strategy is
* why it exists
* when it works
* when it fails
* what the setup looks like
* what confirms it
* where it is invalid
* what the risk is
* what trap to avoid
* how to practice it

If the setup is not explained clearly and shown visually in the correct context, the strategy has no educational value.

That is the standard.
