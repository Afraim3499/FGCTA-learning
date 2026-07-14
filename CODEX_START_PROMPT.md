# Start Prompt for Codex — Lurnava Strategy Vault Upgrades

Copy and paste the entire block below directly into your first chat with Codex.

***

```markdown
# Goal: Execute Batch 4 Strategy Vault Upgrades

We are moving the Lurnava Strategy Vault upgrades from Antigravity to Codex. 
Do NOT write code or proceed with database modifications until you have completed the required reading.

## STEP 1: Required Reading
First, read, analyze, and align with the following files:
1. [CODEX_HANDOFF.md](file:///c:/trading%20course/CODEX_HANDOFF.md) — Comprehensive architecture, pipeline overview, and Batch 4 preflight corrections.
2. [AGENTS.md](file:///c:/trading%20course/app/AGENTS.md) — Developer guidelines and strict tone/asset-language rules.
3. [prisma/schema.prisma](file:///c:/trading%20course/app/prisma/schema.prisma) — Strategy model definition.
4. [src/scripts/upgrade-strategies-openai.ts](file:///c:/trading%20course/app/src/scripts/upgrade-strategies-openai.ts) — OpenAI API upgrade script.
5. [src/scripts/validate-batch-1.ts](file:///c:/trading%20course/app/src/scripts/validate-batch-1.ts) — Master validation checks script.
6. [src/components/academy/StrategySetupVisual.tsx](file:///c:/trading%20course/app/src/components/academy/StrategySetupVisual.tsx) — SVG rendering component.
7. [src/components/academy/StrategySetupLogicCard.tsx](file:///c:/trading%20course/app/src/components/academy/StrategySetupLogicCard.tsx) — Markdown rendering card.

## STEP 2: Batch 4 Scope
Your task is to upgrade the following 10 strategies in the database.
Ensure you skip the first 30 already-completed strategies.

Proposed Batch 4 Strategy list:
31. Bollinger Band Trend Breakout (ID: 54152e9c-25b6-4f7e-bc7c-4748d5f2316f, Asset: FOREX)
32. Overnight Range Breakout (Swing) (ID: 45ceef50-94dd-428e-8e22-689005f9a84a, Asset: GOLD)
33. Supertrend Indicator Strategy (ID: 662f27f0-7cc7-484c-9a63-95abd4a00c2d, Asset: CRYPTO)
34. Price Channel Breakout (ID: 7e433f12-60d0-4687-bc38-19102b67a864, Asset: FOREX)
35. Donchian Channel Breakout (ID: 264882e6-4ba5-446f-8ed8-1a6d39e7fb8b, Asset: CRYPTO)
36. Higher‑High & Higher‑Low Trend Structure (ID: 548304b2-e14b-4197-8a64-8871de52e5ec, Asset: FOREX)
37. Bollinger Band Breakout (ID: 8a34ebe6-597e-47ba-a85a-9c61486ac488, Asset: GOLD)
38. Volatility Breakout (ATR) Strategy (ID: 0e05c77c-bbb9-43a6-86dc-174b4a0289e9, Asset: CRYPTO)
39. Volatility‑Adjusted Trend (ATR Filter) (ID: 908c3611-b819-403e-ac16-0b3eca7323f9, Asset: FOREX)
40. Bollinger Band Breakout (Intraday) (ID: c4329999-e991-4fa8-87b4-f7c6973a4051, Asset: GOLD)

## STEP 3: Apply Preflight Corrections
Before calling `upgrade-strategies-openai.ts`, adjust the script or apply post-processing fixes to satisfy:
* **Price Channel Breakout**: Change family to `Technical Breakout` or `Channel Breakout` (not Session). Route to a channel visual component.
* **Donchian Channel Breakout**: Change family to `Technical Breakout` or `Channel Breakout` (not Trend Following). Force component to `DonchianChannelBreakoutChart`.
* **Bollinger Band strategies**: Must differ. Bollinger Band Trend Breakout (Forex) uses trend continuation / band expansion. Bollinger Band Breakout (Gold) uses Gold-specific volatility and wick fakeouts (banned term: pips). Bollinger Band Breakout Intraday (Gold) uses short-timeframe squeezes and traps. No duplicated checklists or traps.
* **Higher-High & Higher-Low Trend Structure**: Keep pure **Level 1**. Rejects all Level 2+ concepts (EMA, SMA, ATR, MACD, ADX, sessions, sweeps, or order blocks). Focus strictly on swing structure.
* **Supertrend**: Map Crypto Supertrend to `SupertrendVolatilityChart` and include crypto-specific volatility, slippage/liquidity depth warnings (banned term: pips).
* **ATR strategies**: ATR Volatility Breakout (Crypto) vs ATR Volatility-Adjusted Trend (Forex) must not share checklists, traps, or setup logic.

## STEP 4: Execution & Verification
1. Run the upgrade script for Batch 4 strategies (limit=10, skip=30).
2. Run validation check: `npx tsx src/scripts/validate-batch-1.ts` from the `app` directory. Make sure it returns a clean pass for all 40 strategies.
3. Update [src/scripts/dump-all-30.ts](file:///c:/trading%20course/app/src/scripts/dump-all-30.ts) (or copy/create one) to export **all 40 completed strategies** to JSON.

## STEP 5: Final Report Output
Produce a Batch 4 report containing:
1. Batch 4 strategy list.
2. Corrected family and visual category table.
3. Similar-strategy differentiation table.
4. Bollinger differentiation proof.
5. ATR differentiation proof.
6. Level 1 purity audit for Higher-High & Higher-Low.
7. Visual component mapping table.
8. Strategy-by-strategy learning profile summary.
9. Strategy-by-strategy visual model summary.
10. Validation results.
11. Issues found and fixed.
12. Files changed.
13. Commands run.
14. Final verdict.

Please respond with your plan for Step 1 first.
```
