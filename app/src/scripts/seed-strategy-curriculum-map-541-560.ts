import { PrismaClient, QuestionType } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import { getLegacyStrategyCode, getStrategyLevel, getVaultStrategyRef } from "../lib/strategy-curriculum";
import { BATCH_541_560_TARGETS, namesMatchExpected } from "./strategy-override-rules";

dotenv.config();
const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE URL missing");
const isLocal = connectionString.includes("localhost") || connectionString.includes("127.0.0.1");
const pool = new Pool({ connectionString, ssl: isLocal ? false : { rejectUnauthorized: false } });
const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });

type Asset = "FOREX" | "CRYPTO" | "GOLD";
type BatchSeed = { id: string; expectedName: string; expectedAsset: Asset; moduleNumber: string; prompt: string; options: string[]; explanation: string };

function seed(ordinal: number, moduleNumber: string, prompt: string, correct: string, wrong: [string, string, string], explanation: string): BatchSeed {
  const target = BATCH_541_560_TARGETS.find(item => item.ordinal === ordinal);
  if (!target) throw new Error(`Missing target ordinal ${ordinal}`);
  return { id: target.id, expectedName: target.name, expectedAsset: target.assetClass, moduleNumber, prompt, options: [correct, ...wrong], explanation };
}

const SEEDS: BatchSeed[] = [
  seed(541, "2.9", "What should Pivot Point Camarilla Strategy separate?", "R3/S3 reaction bands, R4/S4 breakout boundaries, close quality, failed pivot fade trap, sessions, spread, and pip distance.", ["One central pivot only.", "No breakout/fade separation.", "No session or spread review."], "Camarilla lessons need separate reversal and breakout evidence."),
  seed(542, "9.14", "What controls Volatility Selling (Short Straddle)?", "Short call, short put, premium received, margin, breakeven band, IV expansion risk, gap risk, and Gold point/dollar distance.", ["Long call only.", "No margin review.", "Forex-style distance wording."], "A short straddle is a volatility structure with expanding risk."),
  seed(543, "9.14", "What separates Volatility Selling (Short Straddle) (Swing)?", "Swing short call and put, premium, margin, multi-session breakeven band, IV term context, delayed gap risk, and wider Gold point/dollar distance.", ["Same as a short intraday range.", "No IV term context.", "Forex-style distance wording."], "The swing version needs broader timing and risk review."),
  seed(544, "5.13", "What should Hedged Beta Exposure review?", "Portfolio beta estimate, hedge leg, net beta, correlation break, rebalance threshold, venue depth, slippage, and spread percentage.", ["Hedge label only.", "No net beta calculation.", "No liquidity review."], "Crypto beta hedges need exposure math and liquidity checks."),
  seed(545, "9.10", "What should Quantile Regression Forecasting show?", "Median forecast, upper/lower quantile bands, prediction interval, walk-forward review, outlier regime shift, sessions, spread, and pip distance.", ["One forecast line only.", "No validation window.", "No regime-shift case."], "Quantile regression teaches forecast ranges and model risk."),
  seed(546, "8.3", "What controls Rebalancing into Stablecoins After Parabolic Run?", "Parabolic extension score, tranche schedule, stablecoin reserve target, issuer/depeg review, depth, slippage, and spread percentage.", ["Wait for emotion only.", "No reserve target.", "Forex-style distance wording."], "The lesson is planned de-risking after extension."),
  seed(547, "9.14", "What should Gold Gamma Scalping map?", "Option gamma, delta hedge line, re-hedge points, theta cost, IV change, execution friction, and Gold point/dollar distance.", ["Spot direction only.", "No theta review.", "Forex-style distance wording."], "Gamma scalping teaches hedge mechanics and cost."),
  seed(548, "2.4", "What makes FRAMA different from an ordinary moving average?", "Adaptive smoothing, fractal efficiency, trend/chop contrast, lag trap, sessions, spread, and pip distance.", ["Fixed smoothing only.", "No chop review.", "No spread review."], "FRAMA adapts to market texture, but still needs structure."),
  seed(549, "2.4", "What should Renko Chart Trend Trading define first?", "Fixed brick size, reversal brick rule, trend sequence, missing-time warning, false brick trap, sessions, spread, and pip distance.", ["Change brick size after reaction.", "No reversal rule.", "No spread review."], "Renko lessons need fixed construction rules."),
  seed(550, "5.3", "What controls Dynamic Position Sizing Based on Drawdown?", "Equity curve state, drawdown threshold, size cutback, recovery gate, depth, slippage, and spread percentage.", ["Random size changes.", "No recovery gate.", "Forex-style distance wording."], "Drawdown sizing should follow a fixed rule."),
  seed(551, "9.14", "What separates Gamma Scalping (Swing)?", "Swing option gamma, wider delta hedge line, multi-session re-hedge intervals, theta/IV term change, execution friction, and wider Gold point/dollar distance.", ["Same fast re-hedging rhythm.", "No time-cost review.", "Forex-style distance wording."], "The swing version needs broader hedge timing."),
  seed(552, "2.9", "What should Point & Figure Breakout use?", "X/O column structure, box size, reversal amount, completed breakout column, failed-column trap, sessions, spread, and pip distance.", ["Candlestick body close only.", "Change box size after the move.", "No failed-column case."], "Point-and-figure breakouts depend on fixed box logic."),
  seed(553, "5.6", "What should Stop-Loss Under Volatility Band place?", "Volatility band boundary, band width, invalidation below the band, band reclaim trap, depth, slippage, and spread percentage.", ["Failure line inside normal band noise.", "No band width review.", "Forex-style distance wording."], "Crypto volatility-band invalidation needs room beyond normal movement."),
  seed(554, "9.14", "What defines Bull Call Spread?", "Long lower call, short higher call, debit paid, defined risk, capped upside zone, IV/time review, and Gold point/dollar distance.", ["Short put only.", "No debit review.", "Forex-style distance wording."], "Bull call spreads teach defined-risk upside exposure."),
  seed(555, "9.14", "What separates Bull Call Spread (Swing)?", "Swing long lower call, short higher call, debit, expiry, defined risk, wider capped upside area, and wider Gold point/dollar distance.", ["No expiry review.", "Same compact distance as base version.", "Forex-style distance wording."], "The swing version needs broader time and distance assumptions."),
  seed(556, "7.4", "What should Tick Chart Scalping check?", "Tick-bar construction, spread filter, micro range, completed tick-bar break, fill-quality review, sessions, and pip distance.", ["Every tick movement.", "No spread filter.", "No fill-quality review."], "Tick charts need execution checks because movement is small."),
  seed(557, "5.14", "What controls Capital Allocation Caps?", "Per-asset cap, sector/theme cap, reserve floor, concentration warning, rebalance review, depth, slippage, and spread percentage.", ["Unlimited theme exposure.", "No reserve floor.", "Forex-style distance wording."], "Capital caps keep concentration visible."),
  seed(558, "9.5", "What should Stress Testing Portfolio apply?", "Shock scenario, correlation spike, drawdown estimate, liquidity haircut, reserve response, depth, slippage, and spread percentage.", ["Normal-market weights only.", "No liquidity haircut.", "Forex-style distance wording."], "Stress testing studies how a portfolio behaves when conditions worsen."),
  seed(559, "9.14", "What defines Bear Put Spread?", "Long higher put, short lower put, debit paid, defined risk, capped downside zone, IV/time review, and Gold point/dollar distance.", ["Long call only.", "No debit review.", "Forex-style distance wording."], "Bear put spreads teach defined-risk downside exposure."),
  seed(560, "5.13", "What should Currency Strength Meter Strategy compare?", "Currency basket inputs, base/quote strength split, relative strength ranking, correlation overlap, stale reading trap, sessions, spread, and pip distance.", ["One pair candle only.", "No basket source.", "No stale-reading case."], "Currency strength needs basket context and pair selection checks."),
];

function questionIdFor(id: string): string {
  return `sv_${id.replace(/-/g, "")}_mcq`;
}

async function main() {
  const args = new Set(process.argv.slice(2));
  if (args.has("--apply") && args.has("--dry-run")) throw new Error("Use either --apply or --dry-run, not both.");
  const dryRun = !args.has("--apply");
  const ids = SEEDS.map(item => item.id);
  if (new Set(ids).size !== 20 || SEEDS.length !== BATCH_541_560_TARGETS.length) throw new Error("Batch 541-560 seed cardinality mismatch.");

  const strategies = await prisma.strategy.findMany({ where: { id: { in: ids } }, select: { id: true, name: true, assetClass: true, sequenceNumber: true, learningProfile: true, visualModel: true } });
  const strategyById = new Map(strategies.map(strategy => [strategy.id, strategy]));
  const modules = await prisma.courseModule.findMany({ where: { moduleNumber: { in: Array.from(new Set(SEEDS.map(seed => seed.moduleNumber))) } }, select: { id: true, level: true, moduleNumber: true, title: true, logicIds: true } });
  const moduleByNumber = new Map(modules.map(module => [module.moduleNumber, module]));

  const problems: string[] = [];
  BATCH_541_560_TARGETS.forEach((target, index) => {
    const strategy = strategyById.get(target.id);
    const seed = SEEDS[index];
    if (!strategy) problems.push(`Missing strategy ${target.ordinal}: ${target.id}`);
    if (!seed || seed.id !== target.id) problems.push(`Seed order mismatch at ordinal ${target.ordinal}`);
    if (strategy && !namesMatchExpected(strategy.name, target.name)) problems.push(`Name mismatch at ${target.ordinal}: expected ${target.name}, got ${strategy.name}`);
    if (strategy && strategy.assetClass !== target.assetClass) problems.push(`Asset mismatch at ${target.ordinal}: expected ${target.assetClass}, got ${strategy.assetClass}`);
    if (strategy && (!strategy.learningProfile || !strategy.visualModel)) problems.push(`Strategy not ready at ${target.ordinal}: ${strategy.name}`);
  });
  for (const seed of SEEDS) if (!moduleByNumber.has(seed.moduleNumber)) problems.push(`Missing module ${seed.moduleNumber} for ${seed.expectedName}`);
  if (problems.length) throw new Error(`Batch 541-560 curriculum safety stop:\n${problems.join("\n")}`);

  console.log(dryRun ? "--- DRY RUN: no database writes ---" : "--- APPLYING Batch 541-560 curriculum map ---");
  console.table(SEEDS.map((item, index) => {
    const strategy = strategyById.get(item.id)!;
    const module = moduleByNumber.get(item.moduleNumber)!;
    return {
      ordinal: 541 + index,
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
  console.log(dryRun ? "Dry run complete: no curriculum writes." : "Batch 541-560 curriculum map applied.");
}

main().catch(error => { console.error(error); process.exit(1); }).finally(async () => { await prisma.$disconnect(); await pool.end(); });
