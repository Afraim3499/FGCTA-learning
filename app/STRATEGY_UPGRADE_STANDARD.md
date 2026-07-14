# Lurnava Strategy Upgrade Standard

This file is mandatory reading before any strategy upgrade, strategy visual mapping, strategy exam question, or curriculum-linking work.

The goal is not to generate content. The goal is to teach one strategy so clearly that a learner can understand what the setup is, why it exists, where it fails, and what the chart visual is showing.

## Non-Negotiable Workflow

1. Read the relevant lessons first.
   - Identify the exact module topic the learner has already studied.
   - Do not attach a strategy to a module just because the level looks close.
   - If a strategy requires concepts from a later module, map it to the later module or hold it back.

2. Analyze the database strategy before upgrading it.
   - Read the existing name, asset class, sequence, family, current content, and any related rows.
   - Check for near-duplicate strategies before writing.
   - Decide whether the strategy is truly ready for this level.

3. Write the learning profile as a teaching artifact.
   - Explain why the strategy exists.
   - Explain when it works.
   - Explain when it should be ignored.
   - Explain setup logic in simple steps.
   - Explain confirmation, invalidation, common traps, checklist, and walkthrough.
   - Use calm, direct teaching words. Avoid generic filler and robotic phrasing.

4. Design the visual model as part of the lesson.
   - The visual must show the actual strategy idea.
   - Do not use a generic chart when the strategy needs a specialized model.
   - Every visual zone, label, and warning must help the learner read the setup.

5. Connect the strategy to curriculum and exams.
   - Add the stable `SV-{strategyId}` ref to the exact module.
   - Add at least one strategy exam question tied to the same curriculum logic.
   - Strategy Lab deep links must open the exact strategy.

6. Validate before delivery.
   - Run the dry run before live writes.
   - Run TypeScript.
   - Run the strategy validator.
   - Run the curriculum mapping audit.
   - Export the upgraded strategies for review.

## 10/10 Quality Rubric

A strategy is not complete until it passes every item below.

1. Lesson fit
   - The strategy maps to the exact lesson concept.
   - The learner has enough prior knowledge to understand the strategy.

2. Asset fit
   - Forex, Gold, and Crypto language must be asset-correct.
   - Crypto and Gold must not use Forex pip language.
   - Forex may use pips, spread, pair, and session terms where relevant.

3. Simple teaching
   - The explanation must be clear enough for a young learner.
   - Use short sentences, concrete examples, and plain reasoning.
   - Avoid vague phrases like "look for confirmation" without saying what the learner should observe.

4. Strategy depth
   - Required fields: why it exists, market condition, setup logic, confirmation steps, invalidation, reference zone, common traps, checklist, walkthrough, and sandbox practice instruction.
   - The learner should know what to do, what to avoid, and why.

5. Visual teaching
   - The chart must teach the core mechanism.
   - Channels show upper/lower boundaries, breakout, failed break, and invalidation back inside.
   - Bollinger visuals show squeeze, expansion, band behavior, wick/fakeout behavior when relevant, and retest/trap areas when relevant.
   - ATR visuals distinguish volatility expansion from volatility filtering.
   - Structure visuals show swing points, valid structure, failed structure, and invalidation.
   - Session visuals show the time window, range, break, trap, and invalidation.

6. Similar-strategy differentiation
   - Similar names must not become the same lesson.
   - Setup logic, traps, checklist, and visual zones must differ when the strategy purpose differs.
   - Asset-specific variants must teach the asset-specific reason for the difference.

7. Level discipline
   - Do not introduce concepts the linked lesson has not taught.
   - Level 1 strategies must stay simple and structure-based.
   - Higher-level concepts must wait for the correct module.

8. Exam readiness
   - Each upgraded strategy needs a clear exam question.
   - The question must test understanding, not memorization of a phrase.
   - Distractors should reveal common misunderstandings.

9. Validation cleanliness
   - `npx tsc --noEmit` must pass.
   - `npx tsx src/scripts/validate-batch-1.ts` must pass.
   - The curriculum audit must show no upgraded strategy without a module link or exam ref.
   - Restricted-word and asset-language scans must be clean for touched files.

10. Learner experience
   - The path must feel connected: lesson -> related strategy -> Strategy Lab -> visual -> practice checklist -> exam.
   - The strategy page must answer: "What am I seeing, why does it matter, what would prove it wrong?"

## Visual Selection Rules

Choose the visual component by the strategy mechanism, not by the strategy name alone.

- Moving average, EMA, SMA, WMA: `MovingAverageCrossoverChart`
- MACD: `MACDStructureChart`
- ADX: `ADXStrengthChart`
- Supertrend: `SupertrendVolatilityChart`
- Parabolic SAR: `ParabolicSARChart`
- Ichimoku: `IchimokuCloudChart`
- Heikin-Ashi: `HeikinAshiTrendChart`
- Price channel breakout: `ChannelBreakoutChart`
- Donchian channel breakout: `DonchianChannelBreakoutChart`
- Market structure only: `MarketStructureChart`
- Session/time breakout: `SessionBreakoutChart`
- Gold real-yield/macro relationship: `GoldMacroRealYieldChart`
- ATR breakout/filter: specialized ATR visual, with the learning profile making the distinction clear

If no component exists for the mechanism, create the component instead of forcing a wrong existing visual.

## Batch Safety Standard

Default batch size is 10 strategies. A 20-strategy pilot is allowed only when the user explicitly approves it and all safety gates below are active.

Required gates:

- `--dry-run` preview before live writes.
- Target by explicit IDs or exact sequence range, not by `--limit` alone.
- Print selected IDs, names, asset classes, sequence numbers, current learning profile status, and current visual model status.
- Stop if the selected list does not exactly match the intended batch.
- Do not process the next batch in the same run.
- Do not claim completion without validation output.

## Review Standard For Existing Upgrades

Previously upgraded strategies do not need to be regenerated automatically.

They do need a rubric audit before we call them final:

- Check lesson mapping.
- Check learning profile depth.
- Check visual model fit.
- Check similar-strategy differentiation.
- Check asset-language compliance.
- Check exam linkage.
- Fix only the strategies that fail the rubric.

