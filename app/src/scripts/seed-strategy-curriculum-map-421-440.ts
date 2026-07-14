import { PrismaClient, QuestionType } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import { getLegacyStrategyCode, getStrategyLevel, getVaultStrategyRef } from "../lib/strategy-curriculum";
import { BATCH_421_440_TARGETS, namesMatchExpected } from "./strategy-override-rules";

dotenv.config();
const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE URL missing");
const isLocal = connectionString.includes("localhost") || connectionString.includes("127.0.0.1");
const pool = new Pool({ connectionString, ssl: isLocal ? false : { rejectUnauthorized: false } });
const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });

type Asset = "FOREX" | "CRYPTO" | "GOLD";
type BatchSeed = { id: string; expectedName: string; expectedAsset: Asset; moduleNumber: string; prompt: string; options: string[]; explanation: string };

function seed(ordinal: number, moduleNumber: string, prompt: string, correct: string, wrong: [string, string, string], explanation: string): BatchSeed {
  const target = BATCH_421_440_TARGETS.find(item => item.ordinal === ordinal);
  if (!target) throw new Error(`Missing target ordinal ${ordinal}`);
  return { id: target.id, expectedName: target.name, expectedAsset: target.assetClass, moduleNumber, prompt, options: [correct, ...wrong], explanation };
}

const SEEDS: BatchSeed[] = [
  seed(421, "9.11", "What keeps Stablecoin Arbitrage Across Chains realistic?", "Chain A/B stablecoin price, bridge and gas cost, transfer time, pool depth, depeg/oracle risk, slippage, and spread percentage.", ["Stablecoin price gap only.", "No bridge timing.", "No depeg review."], "Cross-chain stablecoin gaps need transfer friction, liquidity depth, and stablecoin risk checks."),
  seed(422, "6.12", "What supports De-Dollarization Theme (Long Gold)?", "Reserve-diversification theme, dollar trend, real-yield conflict, Gold response window, narrative-only trap, and point/dollar distance.", ["Macro headline only.", "No Gold response.", "Currency-pair distance wording."], "The Gold lesson needs macro context plus visible Gold behavior."),
  seed(423, "9.13", "What should Impermanent Loss Protection Protocols include?", "Protected LP position, IL coverage mechanism, premium/cost, protocol reserves, claim limits, slippage, and spread percentage.", ["Protection name only.", "No reserves or claim limits.", "No IL path comparison."], "Protection wrappers still have cost, limits, reserves, and execution risk."),
  seed(424, "9.10", "What keeps Macro + Machine Learning Hybrid grounded?", "Macro feature set, model output, validation split, feature drift, macro/model disagreement, spread, sessions, and pip distance.", ["Model score only.", "No validation split.", "No macro disagreement case."], "The hybrid model lesson audits input quality, drift, and Forex execution context."),
  seed(425, "6.12", "What separates De-Dollarization Theme (Long Gold) (Swing)?", "Broader reserve-diversification window, delayed Gold demand response, dollar/real-yield conflict, broad invalidation, and wider point/dollar distance.", ["One Gold candle.", "No delayed response.", "Currency-pair distance wording."], "The swing version needs broad macro persistence and wider Gold invalidation."),
  seed(426, "6.12", "What supports Supply Disruption (Long Gold)?", "Physical supply stress, inventory/logistics context, Gold reaction window, yield/dollar conflict, shortage-headline trap, and point/dollar distance.", ["Supply headline only.", "No inventory context.", "No Gold reaction window."], "Supply disruption must be tied to Gold behavior and macro conflict checks."),
  seed(427, "8.11", "What should Seasonal + Technical Confirmation compare?", "Seasonal window, historical tendency, technical structure, out-of-sample check, broken-seasonality trap, sessions, spread, and pip distance.", ["Seasonal month only.", "No technical structure.", "No recent-cycle check."], "Seasonality needs current technical agreement and an out-of-sample review."),
  seed(428, "8.13", "What matters in Staking Yield Strategy?", "Yield source, validator/protocol terms, lockup and unstake queue, slashing risk, liquidity depth, slippage, and spread percentage.", ["Yield rate only.", "No unstake queue.", "No slashing review."], "Staking yield must be checked against protocol terms, exit timing, and market quality."),
  seed(429, "9.13", "What separates Restaking & Liquid Staking Tokens?", "Restaked collateral, LST peg, reward source, liquidity depth, slashing/depeg risk, rehypothecation trap, slippage, and spread percentage.", ["Reward source only.", "No LST peg review.", "No layered-risk check."], "Restaking and LSTs add layered collateral and liquidity risks."),
  seed(430, "6.12", "What separates Supply Disruption (Long Gold) (Swing)?", "Broader supply-stress window, delayed Gold scarcity response, logistics resolution risk, broad invalidation, and wider point/dollar distance.", ["One shortage headline.", "No delayed response.", "Currency-pair distance wording."], "The swing version checks whether supply stress persists across a wider Gold window."),
  seed(431, "8.11", "What keeps Volatility Breakout + Fundamental Filter distinct?", "Compression, breakout close, macro/fundamental filter, conflict case, false expansion trap, sessions, spread, and pip distance.", ["Volatility spike only.", "No fundamental filter.", "No false-expansion case."], "The filter makes this different from a pure volatility breakout."),
  seed(432, "6.12", "What should COT Speculator Extreme Long (Contrarian Short) include?", "Weekly COT lag, speculator long percentile, Gold structure, reversal trigger, extreme-persistence trap, and point/dollar distance.", ["COT extreme only.", "No report lag.", "No Gold structure."], "COT crowding is delayed context and needs Gold structure before contrarian study."),
  seed(433, "5.3", "What controls Fixed Fractional Position Sizing?", "Account equity, fixed risk percentage, pip invalidation distance, pip value, position size, spread/slippage allowance, and exposure cap.", ["Same size every time.", "No pip distance.", "No exposure cap."], "The size follows risk budget and invalidation distance."),
  seed(434, "9.4", "What keeps Liquidation Farming on DeFi Lending realistic?", "Collateral vault health factor, liquidation threshold, liquidation bonus, gas competition, oracle risk, slippage, and spread percentage.", ["Liquidation bonus only.", "No gas competition.", "No oracle risk."], "DeFi liquidations need execution, oracle, and collateral-liquidity checks."),
  seed(435, "5.3", "What should Fixed Ratio Position Sizing include?", "Equity step, delta rule, size increase threshold, pip invalidation distance, drawdown restraint, spread/slippage allowance, and exposure cap.", ["Size increase only.", "No drawdown restraint.", "No pip-distance review."], "Fixed-ratio sizing needs a rule, restraint, and Forex friction checks."),
  seed(436, "6.12", "What separates COT Speculator Extreme Long (Contrarian Short) (Swing)?", "Weekly COT lag, speculator long percentile across reports, broader Gold structure, delayed reversal risk, broad invalidation, and wider point/dollar distance.", ["One weekly print.", "No broad structure.", "Currency-pair distance wording."], "The swing version needs persistent crowding and broader Gold structure."),
  seed(437, "9.11", "What keeps Synthetic Asset Arbitrage realistic?", "Synthetic price, spot/oracle reference, collateral backing, mint/redeem or hedge path, fees, oracle/peg risk, slippage, and spread percentage.", ["Synthetic discount only.", "No oracle review.", "No redeem path."], "Synthetic gaps must survive collateral, oracle, liquidity, and route checks."),
  seed(438, "5.1", "What controls Kelly Criterion Sizing?", "Win-rate estimate, payoff estimate, Kelly fraction, fractional cap, sample-size warning, pip invalidation distance, spread/slippage allowance, and overbetting trap.", ["Full Kelly only.", "No sample-size check.", "No pip invalidation."], "Kelly sizing depends on fragile estimates and needs fractional restraint."),
  seed(439, "9.13", "What matters in Insurance Pool Participation?", "Pool exposure, premium income source, claim reserve, covered-risk definition, correlated-claims trap, liquidity depth, slippage, and spread percentage.", ["Premium income only.", "No claim reserve.", "No correlated-claims review."], "Insurance pools need reserve and clustered-claim stress checks."),
  seed(440, "6.12", "What should COT Speculator Extreme Short (Contrarian Long) include?", "Weekly COT lag, speculator short percentile, Gold structure, reversal trigger, extreme-persistence trap, and point/dollar distance.", ["COT short extreme only.", "No report lag.", "No Gold structure."], "Short crowding is context, not timing, so Gold structure and lag must be checked."),
];

function questionIdFor(id: string): string {
  return `sv_${id.replace(/-/g, "")}_mcq`;
}

async function main() {
  const args = new Set(process.argv.slice(2));
  if (args.has("--apply") && args.has("--dry-run")) throw new Error("Use either --apply or --dry-run, not both.");
  const dryRun = !args.has("--apply");
  const ids = SEEDS.map(item => item.id);
  if (new Set(ids).size !== 20 || SEEDS.length !== BATCH_421_440_TARGETS.length) throw new Error("Batch 421-440 seed cardinality mismatch.");

  const [strategies, modules] = await Promise.all([
    prisma.strategy.findMany({ where: { id: { in: ids } }, select: { id: true, name: true, assetClass: true, sequenceNumber: true, learningProfile: true, visualModel: true } }),
    prisma.courseModule.findMany({ select: { id: true, level: true, moduleNumber: true, title: true, logicIds: true } }),
  ]);
  const strategyById = new Map(strategies.map(item => [item.id, item]));
  const moduleByNumber = new Map(modules.map(item => [item.moduleNumber, item]));
  const problems: string[] = [];

  BATCH_421_440_TARGETS.forEach((target, index) => {
    const seedItem = SEEDS[index];
    const strategy = strategyById.get(target.id);
    if (!seedItem || seedItem.id !== target.id) problems.push(`Seed order mismatch at ordinal ${target.ordinal}`);
    if (!strategy) return problems.push(`Missing strategy ${target.id}`);
    if (!namesMatchExpected(strategy.name, target.name)) problems.push(`${target.id} name mismatch: ${strategy.name}`);
    if (strategy.assetClass !== target.assetClass) problems.push(`${target.id} asset mismatch: ${strategy.assetClass}`);
    if (!strategy.learningProfile || !strategy.visualModel) problems.push(`${target.id} is not ready for curriculum linking`);
    if (!moduleByNumber.has(seedItem.moduleNumber)) problems.push(`Missing module ${seedItem.moduleNumber} for ${target.name}`);
  });
  if (problems.length) throw new Error(`Batch 421-440 curriculum safety stop:\n${problems.join("\n")}`);

  console.log(dryRun ? "--- DRY RUN: no database writes ---" : "--- APPLYING Batch 421-440 curriculum map ---");
  console.table(SEEDS.map((item, index) => {
    const strategy = strategyById.get(item.id)!;
    const module = moduleByNumber.get(item.moduleNumber)!;
    return {
      ordinal: 421 + index,
      id: item.id,
      name: strategy.name,
      asset: strategy.assetClass,
      sequence: strategy.sequenceNumber,
      displayCode: getLegacyStrategyCode(strategy.assetClass, strategy.sequenceNumber),
      strategyLevel: getStrategyLevel(strategy),
      module: `${module.moduleNumber} ${module.title}`,
      examLevel: module.level,
      learningProfile: "ready",
      visualModel: "ready",
    };
  }));

  const byModule = new Map<string, BatchSeed[]>();
  for (const item of SEEDS) byModule.set(item.moduleNumber, [...(byModule.get(item.moduleNumber) || []), item]);
  for (const [moduleNumber, moduleSeeds] of byModule) {
    const module = moduleByNumber.get(moduleNumber)!;
    const refs = moduleSeeds.map(item => getVaultStrategyRef(item.id));
    const next = Array.from(new Set([...(module.logicIds || []), ...refs]));
    console.log(`${dryRun ? "Would update" : "Updating"} module ${moduleNumber} ${module.title}: ${next.length - module.logicIds.length} new link(s)`);
    if (!dryRun) await prisma.courseModule.update({ where: { id: module.id }, data: { logicIds: next } });
  }

  for (const item of SEEDS) {
    const module = moduleByNumber.get(item.moduleNumber)!;
    const id = questionIdFor(item.id);
    console.log(`${dryRun ? "Would upsert" : "Upserting"} ${id} at Level ${module.level}`);
    if (!dryRun) {
      const question = { level: module.level, type: QuestionType.MCQ, domain: item.expectedAsset.toLowerCase(), logicId: getVaultStrategyRef(item.id), prompt: item.prompt, options: item.options, correctIndex: 0, explanation: item.explanation };
      await prisma.examQuestion.upsert({ where: { id }, create: { id, ...question }, update: { ...question, matchingLeft: [], matchingRight: [], chartState: undefined, targetX: null, targetY: null, tolerance: null } });
    }
  }
  console.log(dryRun ? "Dry run complete: no curriculum writes." : "Batch 421-440 curriculum map applied.");
}

main().catch(error => { console.error(error); process.exit(1); }).finally(async () => { await prisma.$disconnect(); await pool.end(); });
