<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Lurnava Strategy Vault - Developer Guidelines

## 0. Mandatory Strategy Upgrade Standard
* Before any strategy upgrade, curriculum link, strategy exam question, or strategy visual routing work, read and follow `STRATEGY_UPGRADE_STANDARD.md`.
* That file is the source of truth for 10/10 strategy quality, learner-facing clarity, visual teaching quality, batch safety, and review of existing upgraded strategies.

## 0A. Mandatory Asset Intelligence Final QA Standard
* Before any release-readiness work on Markets pages, Asset Lab pages, asset navigation, asset SEO, source freshness, access control, legal review, analytics, or final Asset Intelligence QA, read and follow `ASSET_INTELLIGENCE_FINAL_QA_STANDARD.md`.
* The route inventory for final Asset Intelligence QA must be generated from live `assetProfiles` with `npx tsx src/scripts/generate-asset-route-inventory.ts`. Do not hand-count the 142 public and paid asset routes.

## 1. Quality Standards & Tone Rules
* **Tone & Vocabulary Restrictions**:
  - Never use vague motivational words, emotional adjectives, or profit promises.
  - **BANNED words**: "signal", "signals", "beginner", "beginners", "recruit", "recruits", "perfect", "guaranteed", "always wins", "easy money", "journey".
  - **Permitted MACD exceptions**: "MACD Signal Line" or "MACD Trigger Line" are allowed ONLY when referencing MACD components. For all other strategies, replace "signal" with "trigger", "indication", "setup", or "crossover" (or their plurals).
  - Replace "beginner" with "student", "learner", "new trader", or "novice".
  - Replace "recruit" with "student" or "learner".
* **Educational Targets (No Rigid Profit Promises)**:
  - Do NOT write trade instructions or profit promises (e.g. "Target 3% profit level on Gold").
  - Use educational target logic (e.g. "Identify the next key structural zone and observe how price reacts", "Use prior high/low, volatility range, or macro reaction zone as the educational target reference").
  - Do NOT use the words "take-profit", "take profit", or "profit target" anywhere. Instead, use "educational target reference", "exit reference zone", or "simulated movement".
* **Asset-Specific Terminology**:
  - **Crypto**: Never use Forex pip-based language. Use "spread percentage", "slippage", "liquidity depth", or "basis points".
  - **Gold**: Never use Forex pip-based language. Use "dollars", "points", "ATR", or "wick behavior".
  - **Forex**: Must use Forex terms like "pips", "spread", "session", or "pair".
* **Concept Level Boundaries**:
  - **Level 1**: Basic swings, support/resistance, market structure. No indicators (no EMA, SMA, Bollinger Bands, RSI) or sessions.
  - **Level 2**: Simple indicators (EMA, SMA, Bollinger Bands, MACD, ADX, RSI). No macro drivers or session opens.
  - **Level 3**: Macro drivers (real yields, TIPS, DXY). No session timings.
  - **Level 4**: Session breakouts (London/NY opens, COMEX, ADR, ATR volatility sizing). No crypto derivatives.
  - **Level 5**: Crypto derivatives (Perps, funding rate arbitrage, Open Interest). No on-chain metrics.
  - **Level 6**: On-chain metrics, exchange inflows, advanced risk.
* **Volume Simulation**: Do NOT use exact volume numbers (e.g. "1,500 COMEX contracts"). Use simulated volume phrases: "simulated volume expansion", "relative volume confirmation", "volume spike marker", or "1.5x simulated volume expansion". Label any exact counts as classroom examples.

## 2. Visual Component Rules
* **No Generic Visuals**: Every strategy must use its specific chart type (`componentType` in `visualModel`) and describe realistic indicators, levels, and warnings.
* **Specialized Chart Routing**:
  - **MACD**: `MACDStructureChart`
  - **ADX**: `ADXStrengthChart`
  - **Moving Average/EMA/SMA**: `MovingAverageCrossoverChart`
  - **Session Breakouts**: `SessionBreakoutChart`
  - **Supertrend**: `SupertrendVolatilityChart`
  - **Parabolic SAR**: `ParabolicSARChart`
  - **Ichimoku**: `IchimokuCloudChart`
  - **Heikin-Ashi**: `HeikinAshiTrendChart`
  - **Donchian Channel**: `DonchianChannelBreakoutChart`
  - **Position Sizing**: `SizingCalculator` (for Risk / Position Sizing Visual)
  - **Gold Macro TIPS**: `GoldMacroRealYieldChart` (for Gold Macro Reaction Visual)
  - **Forex Strength**: `ForexPairStrengthMeter` (for Forex Pair Strength Visual)
  - **Crypto Derivatives**: `DerivativesDashboard` (for Crypto Derivatives Visual)
* **Required Suffixes**: Programmatic labels and zones must append the asset-specific suffix in the format: ` [Strategy Name (AssetClass)]` (e.g. ` [London Open Breakout (FOREX)]`) to ensure unique naming.

## 3. Workflow & Limits
* **Batch Size Limit**: Default batch size is 10 strategies. A 20-strategy pilot is allowed only after explicit user approval and only with the dry-run, exact-selection, validation, and audit gates in `STRATEGY_UPGRADE_STANDARD.md`.
* **Do-Not-Assume**: Do not assume Codex knows the previous context. Always inspect active code, check `prisma/schema.prisma`, and query database state using scripts.
* **Validation Requirement**: Always run validation scripts and build validation before submitting a final answer. Never skip validation.

## 4. Commands to Run
* **Compile Check**: `npx tsc --noEmit` (from the `app` directory)
* **Validation Suite**: `npx tsx src/scripts/validate-batch-1.ts` (master validation script, from the `app` directory)
* **Visual Model Sync**: `npx tsx src/scripts/patch-specialized-visuals.ts`
* **JSON Export**: `npx tsx src/scripts/dump-all-30.ts`
