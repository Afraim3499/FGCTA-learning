1. Level 0 is missing from the gating logic

The plan says gating applies across Levels 1 through 9.

But Lurnava has Level 0 to Level 9.

So the first question is:

Can students unlock Level 1 without passing Level 0?

If yes, that weakens the system.

Better rule:

Level 0 unlocks by default.
Level 1 unlocks only after Level 0 test + Level 0 final mission.
Level 2 unlocks only after Level 1 test + Level 1 gate.
Continue until Level 9.
2. Strategy questions should not appear too early

If Strategy Lab opens after Level 2, then Level 0 and Level 1 should not force 30% strategy questions.

Better:

Level 0–1: 100% curriculum questions.
Level 2 onward: 70% curriculum + 30% unlocked Strategy Lab questions.
If student has too few unlocked strategies, fallback to curriculum questions.

Otherwise the exam will test things the student has not earned yet.

3. MATCHING grading is fragile

The plan says compare matching to [0, 1, 2, ...].

That can break if the right-side options are shuffled.

Better: each pair should have stable IDs.

Example:

left: risk_invalidation
right correct: where_plan_is_wrong

Server should compare IDs, not visual positions.

4. SCENARIO_CLICK must not use raw pixels

Click-map questions are good.

But if the chart is responsive, raw x/y pixels can break on mobile or different screen sizes.

Use normalized coordinates.

Example:

x: 0–100
y: 0–100
tolerance: percentage radius

Not raw browser pixels.

5. TICKER_DECISION must be clearly simulated

Do not make it look like live trading.

It should say:

Simulated educational ticker. Not live market data.

Otherwise it can create the wrong behavior.

6. No-cooldown alpha mode can damage skill scores

No cooldown is fine for alpha testing.

But if every retry updates StudentSkillProfile, students can spam exams and distort their profile.

Better:

In alpha: allow no cooldown.
For skill profile, either:
use best attempt only, or
use latest passed attempt, or
reduce weighting after repeated attempts.

The formula is good:

New Value = Old × 0.7 + Exam Performance × 0.3

But repeated retries can game it.

7. Strategy level classification is risky

This part worries me:

Level 3 = Gold, Level 4 = Forex, Level 5 = Crypto by default

That is not clean.

A strategy’s unlock level should be based on difficulty, not only asset class.

A simple Gold support/resistance setup is not automatically Level 3.
A complex Forex macro strategy is not automatically Level 4.
A basic crypto breakout is not automatically Level 5.

Better classification logic:

difficulty
required concepts
risk complexity
data dependency
execution complexity
asset class

Asset class alone should not decide level.

8. Radar chart labels changing by level may confuse students

Dynamic labels sound premium, but can confuse users.

If “Chart Reading” becomes “Order Book Liquidity,” students may not understand whether their old score changed or the category changed.

Better:

Keep stable main domains:

Chart Reading
Planning
Execution
Risk
Strategy
Review

Then show advanced level labels as subtitles.

Example:

Execution
Level 7 label: Order Routing & Slippage Control

That is clearer.

My recommended build order

Do not build everything at once.

Build in this order:

Phase 1 — Core gating system

Only implement:

dual-gate unlock logic
server-side unlock check
level progression table/status
Level 0–9 gating
test pass + scenario pass requirement

No fancy question types yet.

Phase 2 — Exam attempt system

Implement:

exam attempts
server-side grading
answer stripping before client
attempt snapshot storage
pass/fail
80% threshold
MCQ only first
Phase 3 — Add interactive question types

Then add:

MATCHING
SCENARIO_CLICK
TICKER_DECISION

One by one. Validate each.

Phase 4 — StudentSkillProfile

Then add:

skill profile update
domain scoring
smoothing formula
retry protection
dashboard profile data
Phase 5 — Radar chart

Then build the radar chart.

Keep the domain names stable. Use dynamic subtitles instead of replacing the whole label.

Phase 6 — Strategy Lab exam integration

Then add:

70/30 exam sourcing
unlocked strategy question pool
fallback logic
strategy deduplication
level locking
strategy question snapshot
Phase 7 — Full smoke test

Then build:

smoke-test-gating.ts
mock users at each level
test + scenario pass/fail simulation
locked/unlocked verification
StudentSkillProfile update verification
My final opinion

This plan is valuable and serious.

But I would tell Antigravity:

Do not build this as one giant run. Split it into controlled phases.

The most important piece is not the radar chart.
The most important piece is the server-side dual-gate progression system.

Get the gate system right first.
Then exams.
Then skill profile.
Then Strategy Lab integration.
Then dashboard polish.

That will keep Lurnava stable.