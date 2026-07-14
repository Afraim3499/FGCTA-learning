import { PrismaClient, QuestionType } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import { getLegacyStrategyCode, getStrategyLevel, getVaultStrategyRef } from "../lib/strategy-curriculum";
import { BATCH_621_640_TARGETS, namesMatchExpected } from "./strategy-override-rules";

dotenv.config();
const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE URL missing");
const isLocal = connectionString.includes("localhost") || connectionString.includes("127.0.0.1");
const pool = new Pool({ connectionString, ssl: isLocal ? false : { rejectUnauthorized: false } });
const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });

type Asset = "FOREX" | "CRYPTO" | "GOLD";
type BatchSeed = { id: string; expectedName: string; expectedAsset: Asset; moduleNumber: string; prompt: string; options: string[]; explanation: string };

function seed(ordinal: number, moduleNumber: string, prompt: string, correct: string, wrong: [string, string, string], explanation: string): BatchSeed {
  const target = BATCH_621_640_TARGETS.find(item => item.ordinal === ordinal);
  if (!target) throw new Error(`Missing target ordinal ${ordinal}`);
  return { id: target.id, expectedName: target.name, expectedAsset: target.assetClass, moduleNumber, prompt, options: [correct, ...wrong], explanation };
}

const SEEDS: BatchSeed[] = [
  seed(621, "9.11", "What should Use of Multi-Sig for Fund Transfers audit?", "Signer set, approval threshold, proposal details, hardware wallet state, destination review, withdrawal route, liquidity depth, slippage, and spread percentage.", ["One signer approval only.", "No destination review.", "No device-state check."], "Multi-sig transfer control depends on process quality, not just the number of signers."),
  seed(622, "9.11", "What should Fixed Withdrawal Schedule require?", "Calendar cadence, amount rule, venue balance, custody destination, withdrawal test, chain fee, congestion state, liquidity depth, slippage, and spread percentage.", ["Withdraw only during stress.", "No route test.", "No fee or congestion review."], "A withdrawal schedule is an access-control process that should be tested before pressure appears."),
  seed(623, "6.9", "What should Relative Value (Gold vs USD) compare?", "DXY context, Gold response, divergence window, real-yield cross-check, mean-reversion path, dollar-only trap, and point/dollar distance.", ["Gold chart alone.", "USD direction only.", "No real-yield cross-check."], "Gold/USD relative value needs both USD context and macro cross-checks."),
  seed(624, "6.9", "What separates Relative Value (Gold vs USD) (Swing)?", "Swing DXY trend, broad Gold response, real-yield cross-check, event risk, delayed mean-reversion path, and wider point/dollar distance.", ["Compact intraday divergence only.", "No event-risk review.", "No wider movement scale."], "The swing version needs broader time, larger distance, and slower macro response."),
  seed(625, "5.4", "What should Structured Exit Laddering show?", "Planned reduction tranches, remaining exposure, updated invalidation, fee and accounting note, liquidity depth, slippage, and spread percentage.", ["Random reductions after emotion rises.", "No remaining-exposure view.", "No updated invalidation."], "A reduction ladder teaches planned exposure control and the rule for what remains."),
  seed(626, "5.13", "What should Statistical Arbitrage (Gold Pair) measure?", "Paired instruments, hedge ratio, spread z-score, rolling correlation, mean-reversion path, relationship-break trap, and point/dollar or ratio distance.", ["One Gold chart only.", "No hedge ratio.", "No relationship-break review."], "Gold-pair statistical arbitrage depends on the spread relationship staying measurable."),
  seed(627, "5.13", "What separates Statistical Arbitrage (Gold Pair) (Swing)?", "Swing paired instruments, hedge ratio, broad z-score band, event risk, mean-reversion path, correlation break, and wider point/dollar or ratio distance.", ["Compact threshold only.", "No event-risk review.", "No broad correlation window."], "The swing version uses broader bands and more patience around macro repricing."),
  seed(628, "7.12", "What should Execution Algorithm (VWAP/TWAP) show for Gold?", "VWAP anchor, TWAP slices, participation rate, bid/ask spread, fill quality, inventory exposure, adverse selection, and point/dollar distance.", ["Schedule only.", "No fill-quality review.", "Forex-style distance wording."], "Gold execution algorithms teach pacing plus execution quality, not a schedule by itself."),
  seed(629, "7.12", "What separates Execution Algorithm (VWAP/TWAP) (Swing)?", "Multi-session schedule, volume curve, time slices, fill quality, inventory exposure, event gap review, and wider point/dollar distance.", ["Intraday schedule copied directly.", "No event-gap review.", "No multi-session pacing."], "Swing execution needs broader pacing and overnight/event awareness."),
  seed(630, "9.14", "What should Market Making / Inventory Model show?", "Bid/ask quote band, fill probability, inventory skew, hedge review, adverse selection, spread capture review, and point/dollar distance.", ["Quoted spread only.", "No inventory skew.", "No adverse-selection review."], "Market making is mainly an inventory and fill-quality lesson."),
  seed(631, "9.14", "What separates Market Making / Inventory Model (Swing)?", "Swing quote band, multi-session inventory skew, wider spread, hedge adjustment, event risk, adverse selection, and wider point/dollar distance.", ["One short quote snapshot.", "No multi-session inventory review.", "No hedge adjustment."], "The swing version carries inventory across time, so event and hedge review matter more."),
  seed(632, "6.9", "What should Gold vs DXY Divergence compare?", "DXY direction, Gold response, divergence window, real-yield cross-check, macro event context, USD-only trap, and point/dollar distance.", ["DXY only.", "Gold response ignored.", "No real-yield cross-check."], "DXY helps verify Gold context, but Gold still needs its own response and yield review."),
  seed(633, "6.12", "What should Gold vs Real Yields Spread compare?", "Nominal yield, inflation expectation, real-yield direction, Gold response, spread divergence, macro conflict trap, and point/dollar distance.", ["Nominal yield only.", "No inflation expectation.", "No Gold response comparison."], "Real-yield lessons need both yield and inflation inputs before comparing Gold."),
  seed(634, "6.12", "What should Gold vs Equities Risk-Off Divergence review?", "Equity stress, volatility proxy, Gold response, yield conflict, delayed reaction, risk-off reversal trap, and point/dollar distance.", ["Equity weakness only.", "No yield conflict.", "Assume Gold reacts instantly."], "Risk-off context can help Gold analysis, but yield and liquidity can delay or conflict."),
  seed(635, "5.13", "What should Gold vs Oil Relationship compare?", "Gold/Oil rolling correlation, inflation proxy context, divergence band, macro conflict, relationship-break trap, and point/dollar or ratio distance.", ["Oil chart only.", "No correlation window.", "No macro conflict review."], "Gold and oil can share inflation pressure but separate when USD, yields, or risk demand changes."),
  seed(636, "5.13", "What should Gold vs Copper Correlation compare?", "Gold/Copper rolling correlation, growth-metal context, safe-haven contrast, regime review, relationship-break trap, and point/dollar or ratio distance.", ["Both metals treated as identical.", "No regime review.", "No safe-haven contrast."], "Copper and Gold can describe different macro forces."),
  seed(637, "6.12", "What should Gold vs Inflation Expectations review?", "Inflation expectation proxy, real-yield cross-check, Gold response, macro event context, inflation-only trap, and point/dollar distance.", ["Inflation proxy only.", "No real-yield cross-check.", "No Gold response comparison."], "Inflation expectations matter most when checked against real yields and actual Gold behavior."),
  seed(638, "5.13", "What should Gold vs Silver Ratio High review?", "High Gold/Silver ratio, historical band, Silver rotation watch, confirmation path, correlation break, industrial-demand caveat, and ratio or point distance.", ["Rotate from ratio alone.", "No confirmation path.", "No Silver demand caveat."], "A high ratio is a stretch clue, not a standalone decision."),
  seed(639, "5.13", "What should Gold vs Silver Ratio Low review?", "Low Gold/Silver ratio, historical band, Gold rotation watch, confirmation path, correlation break, safe-haven caveat, and ratio or point distance.", ["Rotate from ratio alone.", "No confirmation path.", "No safe-haven caveat."], "A low ratio needs behavior confirmation before Gold leadership is reviewed."),
  seed(640, "8.10", "What should Rule-Based Trend System contain?", "Written trend rule, moving-average or structure filter, entry trigger, invalidation line, review checklist, whipsaw trap, and point/dollar distance.", ["Change the rule after one candle.", "No invalidation line.", "No review checklist."], "A rule-based system teaches repeatable process and clear failure handling."),
];

function questionIdFor(id: string): string {
  return `sv_${id.replace(/-/g, "")}_mcq`;
}

async function main() {
  const args = new Set(process.argv.slice(2));
  if (args.has("--apply") && args.has("--dry-run")) throw new Error("Use either --apply or --dry-run, not both.");
  const dryRun = !args.has("--apply");
  const ids = SEEDS.map(item => item.id);
  if (new Set(ids).size !== 20 || SEEDS.length !== BATCH_621_640_TARGETS.length) throw new Error("Batch 621-640 seed cardinality mismatch.");

  const strategies = await prisma.strategy.findMany({ where: { id: { in: ids } }, select: { id: true, name: true, assetClass: true, sequenceNumber: true, learningProfile: true, visualModel: true } });
  const strategyById = new Map(strategies.map(strategy => [strategy.id, strategy]));
  const modules = await prisma.courseModule.findMany({ where: { moduleNumber: { in: Array.from(new Set(SEEDS.map(seed => seed.moduleNumber))) } }, select: { id: true, level: true, moduleNumber: true, title: true, logicIds: true } });
  const moduleByNumber = new Map(modules.map(module => [module.moduleNumber, module]));

  const problems: string[] = [];
  BATCH_621_640_TARGETS.forEach((target, index) => {
    const strategy = strategyById.get(target.id);
    const item = SEEDS[index];
    if (!strategy) problems.push(`Missing strategy ${target.ordinal}: ${target.id}`);
    if (!item || item.id !== target.id) problems.push(`Seed order mismatch at ordinal ${target.ordinal}`);
    if (strategy && !namesMatchExpected(strategy.name, target.name)) problems.push(`Name mismatch at ${target.ordinal}: expected ${target.name}, got ${strategy.name}`);
    if (strategy && strategy.assetClass !== target.assetClass) problems.push(`Asset mismatch at ${target.ordinal}: expected ${target.assetClass}, got ${strategy.assetClass}`);
    if (strategy && (!strategy.learningProfile || !strategy.visualModel)) problems.push(`Strategy not ready at ${target.ordinal}: ${strategy.name}`);
  });
  for (const item of SEEDS) if (!moduleByNumber.has(item.moduleNumber)) problems.push(`Missing module ${item.moduleNumber} for ${item.expectedName}`);
  if (problems.length) throw new Error(`Batch 621-640 curriculum safety stop:\n${problems.join("\n")}`);

  console.log(dryRun ? "--- DRY RUN: no database writes ---" : "--- APPLYING Batch 621-640 curriculum map ---");
  console.table(SEEDS.map((item, index) => {
    const strategy = strategyById.get(item.id)!;
    const module = moduleByNumber.get(item.moduleNumber)!;
    return {
      ordinal: 621 + index,
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
    console.log(`${dryRun ? "Would update" : "Updating"} module ${moduleNumber} ${module.title}: ${next.length - (module.logicIds || []).length} new link(s)`);
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
  console.log(dryRun ? "Dry run complete: no curriculum writes." : "Batch 621-640 curriculum map applied.");
}

main().catch(error => { console.error(error); process.exit(1); }).finally(async () => { await prisma.$disconnect(); await pool.end(); });
