import { PrismaClient, QuestionType } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import { getLegacyStrategyCode, getStrategyLevel, getVaultStrategyRef } from "../lib/strategy-curriculum";
import { BATCH_521_540_TARGETS, namesMatchExpected } from "./strategy-override-rules";

dotenv.config();
const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE URL missing");
const isLocal = connectionString.includes("localhost") || connectionString.includes("127.0.0.1");
const pool = new Pool({ connectionString, ssl: isLocal ? false : { rejectUnauthorized: false } });
const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });

type Asset = "FOREX" | "CRYPTO" | "GOLD";
type BatchSeed = { id: string; expectedName: string; expectedAsset: Asset; moduleNumber: string; prompt: string; options: string[]; explanation: string };

function seed(ordinal: number, moduleNumber: string, prompt: string, correct: string, wrong: [string, string, string], explanation: string): BatchSeed {
  const target = BATCH_521_540_TARGETS.find(item => item.ordinal === ordinal);
  if (!target) throw new Error(`Missing target ordinal ${ordinal}`);
  return { id: target.id, expectedName: target.name, expectedAsset: target.assetClass, moduleNumber, prompt, options: [correct, ...wrong], explanation };
}

const SEEDS: BatchSeed[] = [
  seed(521, "2.4", "What should Ichimoku Kumo Breakout compare?", "Kumo boundary, cloud thickness, Tenkan/Kijun agreement, Chikou context, completed cloud break, return-inside failure, sessions, spread, and pip distance.", ["Cloud color alone.", "A wick through the cloud only.", "No session or spread review."], "Forex Ichimoku needs cloud structure plus supporting line agreement."),
  seed(522, "9.9", "What controls Leverage Control?", "Leverage cap, liquidation buffer, margin-ratio warning, volatility cutback, venue depth, slippage, and spread percentage.", ["Maximum leverage by default.", "No liquidation buffer.", "Forex-style distance wording."], "Crypto leverage control is a risk gate, not a direction tool."),
  seed(523, "9.14", "What should Spot-Futures Divergence Trade review?", "Timestamped Gold spot and futures references, basis spread, carry cost, expiry context, convergence watch, divergence-widening trap, and point/dollar distance.", ["Spot price only.", "No carry or expiry context.", "Currency-pair distance wording."], "Gold spot/futures divergence needs aligned prices and cost context."),
  seed(524, "2.2", "What makes Adaptive RSI (Connors RSI) different?", "Short RSI component, streak component, rank component, range boundary, return-toward-mean path, sessions, spread, and pip distance.", ["Plain RSI only.", "No range boundary.", "No streak or rank component."], "Connors RSI is a composite oscillator, not a plain RSI copy."),
  seed(525, "9.7", "What controls Portfolio Diversification Across Sectors?", "Crypto sector buckets, weight caps, correlation check, concentration trap, stable reserve, liquidity depth, slippage, and spread percentage.", ["Many coins from one sector.", "No correlation check.", "Forex-style distance wording."], "Crypto sector allocation needs real diversification and venue-quality checks."),
  seed(526, "9.14", "What separates Spot-Futures Divergence Trade (Swing)?", "Multi-session Gold spot/futures spread, carry cost, expiry window, broader Gold structure, divergence-widening trap, and wider point/dollar distance.", ["One quick spread print.", "No broad Gold structure.", "Currency-pair distance wording."], "The swing version studies persistence and wider Gold context."),
  seed(527, "2.4", "What should Heikin-Ashi & RSI Confluence compare?", "Heikin-Ashi candle state, RSI pullback zone, trend context, disagreement trap, sessions, spread, and pip distance.", ["Heikin-Ashi color alone.", "RSI alone.", "No disagreement case."], "This lesson requires both smoothed candles and RSI context."),
  seed(528, "9.14", "What should Event Straddle show?", "Same-expiry Gold call and put legs, premium ledger, implied volatility, event window, move-needed area, IV-crush trap, and point/dollar distance.", ["One option leg only.", "No premium ledger.", "Currency-pair distance wording."], "A straddle studies two option legs and whether event movement can overcome cost."),
  seed(529, "9.7", "What controls Stablecoin Hedging?", "Stable reserve band, de-risking threshold, issuer/depeg warning, exchange liquidity depth, slippage, and spread percentage.", ["Any stablecoin treated equally.", "No depeg check.", "Forex-style distance wording."], "Stablecoin hedging needs reserve quality and execution-quality review."),
  seed(530, "2.2", "What supports Williams %R Mean Reversion?", "Williams %R extreme, Forex range boundary, return-toward-mean path, continuation failure, sessions, spread, and pip distance.", ["Oscillator extreme alone.", "No range boundary.", "No failure case."], "Williams %R needs location and completed range behavior."),
  seed(531, "9.14", "What separates Event Straddle (Swing)?", "Swing Gold call and put legs, premium ledger, IV term structure, multi-session event window, movement-needed area, IV-crush trap, and wider point/dollar distance.", ["Same as the base version.", "No term-structure review.", "Currency-pair distance wording."], "The swing version needs broader timing and cost review."),
  seed(532, "9.14", "What should Insurance via Options review?", "Protective option structure, premium cost, expiry window, implied-volatility drag, under-hedge trap, venue depth, slippage, and spread percentage.", ["Option label only.", "No premium or expiry review.", "Forex-style distance wording."], "Options insurance protects only if cost, coverage, and liquidity make sense."),
  seed(533, "3.11", "What should Klinger Volume Oscillator Strategy compare?", "Klinger volume line, zero-line pressure, price agreement or divergence, false volume surge trap, sessions, spread, and pip distance.", ["Volume line alone.", "No price comparison.", "No false-surge case."], "Klinger needs price agreement and Forex context."),
  seed(534, "6.1", "What defines Elder Triple Screen System?", "Higher-timeframe trend screen, intermediate oscillator screen, lower-timeframe activation screen, timeframe conflict trap, sessions, spread, and pip distance.", ["One timeframe only.", "No oscillator screen.", "No conflict case."], "Triple Screen works by separating each timeframe job."),
  seed(535, "9.7", "What controls Dollar-Cost Averaging (DCA)?", "Fixed schedule, tranche size, reserve rule, exposure cap, averaging-too-fast trap, liquidity depth, slippage, and spread percentage.", ["Add whenever price moves.", "No reserve rule.", "Forex-style distance wording."], "DCA is allocation discipline with spacing and exposure limits."),
  seed(536, "9.14", "What should Event Strangle show?", "OTM Gold call and put strikes, strike distance, premium ledger, event volatility, movement-needed area, IV-crush trap, and point/dollar distance.", ["Same strikes as a straddle.", "No strike-distance review.", "Currency-pair distance wording."], "A strangle is cheaper-looking but needs wider movement."),
  seed(537, "5.5", "What controls Laddered Entry and Exit?", "Planned tranches, spacing rule, average reference, invalidation line, educational exit reference zones, liquidity depth, slippage, and spread percentage.", ["All tranches at one level.", "No invalidation line.", "Forex-style distance wording."], "Laddering needs spacing, a pause rule, and venue-quality checks."),
  seed(538, "9.14", "What separates Event Strangle (Swing)?", "Swing OTM call and put strikes, strike distance, premium ledger, IV term structure, multi-session movement-needed area, IV-crush trap, and wider point/dollar distance.", ["Same as base strangle.", "No term-structure review.", "Currency-pair distance wording."], "The swing version needs broader timing and strike-distance review."),
  seed(539, "2.3", "What should Gann Angle Trading show?", "Fixed anchor point, 1x1 Gann angle, retest tolerance, candle reaction, angle-break failure, sessions, spread, and pip distance.", ["Redraw the angle after reaction.", "No fixed anchor.", "No failure boundary."], "Gann geometry is only useful when anchors and failure rules stay fixed."),
  seed(540, "9.4", "What should Liquidation Threshold Monitoring review?", "Estimated liquidation thresholds, margin buffer, threshold approach, cascade-risk area, venue depth, slippage, and spread percentage.", ["One static level.", "No margin buffer.", "Forex-style distance wording."], "Liquidation thresholds move with leverage, margin, and liquidity conditions."),
];

function questionIdFor(id: string): string {
  return `sv_${id.replace(/-/g, "")}_mcq`;
}

async function main() {
  const args = new Set(process.argv.slice(2));
  if (args.has("--apply") && args.has("--dry-run")) throw new Error("Use either --apply or --dry-run, not both.");
  const dryRun = !args.has("--apply");
  const ids = SEEDS.map(item => item.id);
  if (new Set(ids).size !== 20 || SEEDS.length !== BATCH_521_540_TARGETS.length) throw new Error("Batch 521-540 seed cardinality mismatch.");

  const [strategies, modules] = await Promise.all([
    prisma.strategy.findMany({ where: { id: { in: ids } }, select: { id: true, name: true, assetClass: true, sequenceNumber: true, learningProfile: true, visualModel: true } }),
    prisma.courseModule.findMany({ select: { id: true, level: true, moduleNumber: true, title: true, logicIds: true } }),
  ]);
  const strategyById = new Map(strategies.map(item => [item.id, item]));
  const moduleByNumber = new Map(modules.map(item => [item.moduleNumber, item]));
  const problems: string[] = [];

  BATCH_521_540_TARGETS.forEach((target, index) => {
    const seedItem = SEEDS[index];
    const strategy = strategyById.get(target.id);
    if (!seedItem || seedItem.id !== target.id) problems.push(`Seed order mismatch at ordinal ${target.ordinal}`);
    if (!strategy) return problems.push(`Missing strategy ${target.id}`);
    if (!namesMatchExpected(strategy.name, target.name)) problems.push(`${target.id} name mismatch: ${strategy.name}`);
    if (strategy.assetClass !== target.assetClass) problems.push(`${target.id} asset mismatch: ${strategy.assetClass}`);
    if (!strategy.learningProfile || !strategy.visualModel) problems.push(`${target.id} is not ready for curriculum linking`);
    if (!moduleByNumber.has(seedItem.moduleNumber)) problems.push(`Missing module ${seedItem.moduleNumber} for ${target.name}`);
  });
  if (problems.length) throw new Error(`Batch 521-540 curriculum safety stop:\n${problems.join("\n")}`);

  console.log(dryRun ? "--- DRY RUN: no database writes ---" : "--- APPLYING Batch 521-540 curriculum map ---");
  console.table(SEEDS.map((item, index) => {
    const strategy = strategyById.get(item.id)!;
    const module = moduleByNumber.get(item.moduleNumber)!;
    return {
      ordinal: 521 + index,
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
  console.log(dryRun ? "Dry run complete: no curriculum writes." : "Batch 521-540 curriculum map applied.");
}

main().catch(error => { console.error(error); process.exit(1); }).finally(async () => { await prisma.$disconnect(); await pool.end(); });
