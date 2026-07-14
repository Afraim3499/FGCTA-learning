# Strategy Vault Codex Developer Guidelines

Please refer to the detailed guidelines inside the Next.js application directory at [app/AGENTS.md](file:///c:/trading%20course/app/AGENTS.md).

For quick reference, the most critical developer rules are:
1. **Strict Tone Limits**: Under no circumstances use banned words: "signal" (unless MACD Signal/Trigger Line context), "beginner", "recruit", "perfect", "guaranteed", "easy money", "journey", etc.
2. **Educational Targets Only**: Banned words: "take-profit", "take profit", "profit target". Emphasize simulation and educational structural reference zones.
3. **Asset-Language Rules**: Crypto/Gold must never use Forex pip-based language. Forex must use Forex terms like pips, sessions, etc.
4. **Specialized Visuals & Suffixes**: Ensure correct chart component types (e.g. `SessionBreakoutChart`, `SupertrendVolatilityChart`) are mapped, and suffix ` [Strategy Name (AssetClass)]` is appended to all visual labels/zones for uniqueness.
5. **Always Run Validation**: Run `npx tsx src/scripts/validate-batch-1.ts` to verify your upgrades pass all 16 checks before final delivery.
