import { PrismaClient, QuestionType } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import { getLegacyStrategyCode, getStrategyLevel, getVaultStrategyRef } from "../lib/strategy-curriculum";
import { BATCH_261_280_TARGETS, namesMatchExpected } from "./strategy-override-rules";

dotenv.config();

const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE URL missing");
const isLocal = connectionString.includes("localhost") || connectionString.includes("127.0.0.1");
const pool = new Pool({ connectionString, ssl: isLocal ? false : { rejectUnauthorized: false } });
const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });

type Asset = "FOREX" | "CRYPTO" | "GOLD";
type BatchSeed = { id: string; expectedName: string; expectedAsset: Asset; moduleNumber: string; prompt: string; options: string[]; explanation: string };

function seed(ordinal: number, moduleNumber: string, prompt: string, correct: string, wrong: [string, string, string], explanation: string): BatchSeed {
  const target = BATCH_261_280_TARGETS.find(item => item.ordinal === ordinal);
  if (!target) throw new Error(`Missing target ordinal ${ordinal}`);
  return { id: target.id, expectedName: target.name, expectedAsset: target.assetClass, moduleNumber, prompt, options: [correct, ...wrong], explanation };
}

const SEEDS: BatchSeed[] = [
  seed(261, "6.11", "How should a Forex COT positioning extreme be interpreted?", "Place one named participant group's weekly net position inside a fixed historical range, account for publication lag, and compare persistence with completed pair structure.", ["Treat one extreme percentile as immediate reversal timing.", "Combine unrelated participant categories into one total.", "Ignore the gap between report and publication dates."], "COT extremes describe delayed crowding context and can persist."),
  seed(262, "2.4", "What completes the base Gold Parabolic SAR reversal study?", "A completed dot-side change, nearby Gold structure agreement, follow-through on the new side, and rejection of repeated flips inside a range.", ["One unfinished dot flip inside sideways price.", "A currency-pair distance measurement.", "Dots used without reading price structure."], "Parabolic SAR needs completed price agreement because ranges create repeated flips."),
  seed(263, "6.13", "Why combine crypto funding and open interest in a four-quadrant study?", "Funding shows perpetual positioning cost while OI shows outstanding participation; price, spot volume, and venues are needed to classify crowding, participation, covering, or liquidation.", ["The two numbers determine direction by themselves.", "One venue represents all crypto participation.", "Rising OI always means healthy demand."], "The combined view is diagnostic only when synchronized with market context."),
  seed(264, "6.11", "What makes commercial-versus-speculator COT divergence auditable?", "Comparable participant series, one historical window, normalized separation, weekly change, reporting lag, pair structure, and widening-versus-convergence states.", ["Assume commercial positions always lead price.", "Compare gross contracts with an unrelated net series.", "Use one opposite-position snapshot without history."], "Participant groups act for different reasons, so divergence is context rather than a forecast."),
  seed(265, "8.3", "What prevents misuse of a Forex retail-sentiment contrarian lesson?", "State the broker sample limits, measure crowding duration, and wait for completed price-structure change before studying normalization.", ["Oppose every trend once one broker reaches an arbitrary ratio.", "Treat the broker sample as the entire market.", "Ignore that extremes can persist."], "Crowding does not provide reversal timing without price evidence."),
  seed(266, "9.4", "What must a crypto funding-and-basis convergence audit include?", "Matched spot and derivative notionals, funding and expiry timing, basis, fees, borrow, slippage, margin, leg drift, and venue-failure cases.", ["Gross funding alone.", "Assume equal contract counts create equal exposure.", "Describe convergence as risk free."], "A matched-leg structure still carries basis, cost, margin, and venue risks."),
  seed(267, "2.4", "What separates the intraday Gold Parabolic SAR reversal lesson?", "One 5m or 15m window, a current compact boundary, completed dot flip, next-candle hold, rapid recross expiry, and compact point/dollar distance.", ["A broad 4H reversal requiring several days.", "An old flip from before the observation window.", "A wick through structure with no hold."], "The intraday version depends on fast acceptance and a short shelf life."),
  seed(268, "9.4", "What evidence distinguishes a crypto short squeeze from ordinary upward movement?", "Verified short crowding, spot reclaim, buy-side displacement, short liquidations, and OI reduction as price accelerates.", ["Negative funding alone.", "High OI without a price trigger.", "A rally with rising short exposure and no forced covering."], "A squeeze requires both crowding and visible forced-position reduction."),
  seed(269, "2.4", "What separates the swing Gold Parabolic SAR reversal lesson?", "A completed 4H structure change, sustained 1H dot-side placement, a patient pullback hold, and wider point/dollar invalidation.", ["One 5m dot flip with immediate expiry.", "A single 1H flip inside unchanged 4H structure.", "Currency-pair distance language."], "The swing version uses persistent indicator placement after higher-timeframe structure changes."),
  seed(270, "8.3", "How should retail sentiment support a Forex trend-context lesson?", "Establish price trend first, then use a documented broker ratio to study persistence through a pullback and possible late-crowd exhaustion.", ["Let majority opinion create the trend direction.", "Ignore price structure during the pullback.", "Treat a late ratio surge as durable continuation."], "Price leads; sentiment remains secondary participation context."),
  seed(271, "9.4", "How should an estimated crypto liquidation level be studied safely?", "Record venue, timestamp, confidence, and migration; use an observation buffer and classify reclaim versus sweep-through with spot, perpetual, depth, and slippage evidence.", ["Treat the heatmap band as a fixed executable wall.", "Place an assumed order directly ahead of forced flow.", "Ignore estimate error and cluster migration."], "Liquidation maps are estimates and can be swept through during cascades."),
  seed(272, "6.11", "What does a Forex options risk reversal measure?", "The implied-volatility difference between comparable call and put options with the same tenor and delta, interpreted with event premium and pair structure.", ["A direct forecast of spot direction.", "The price difference between unlike expiries.", "An option measure that cannot normalize without spot reversal."], "Risk reversals measure relative protection demand, not certain spot movement."),
  seed(273, "2.9", "What defines the base Gold Bollinger squeeze breakout lesson?", "Normalized bandwidth compression across several candles, structure formed inside the squeeze, a body close beyond structure and an outer band, and visible re-expansion.", ["Choose direction from narrow bands alone.", "Use one outside wick as completed expansion.", "Measure Gold movement in currency-pair terms."], "The base lesson teaches the full compression-to-expansion sequence."),
  seed(274, "8.3", "What makes Reddit sentiment data suitable for a crypto audit?", "Fixed communities and window, unique-author breadth, bot and duplicate filtering, post/comment weighting, timestamp alignment, and price-volume comparison.", ["Raw post count from whichever community is busiest.", "A coordinated posting burst treated as organic breadth.", "Old discussion aligned with later price movement."], "Source quality, breadth, and timing matter more than raw activity."),
  seed(275, "8.3", "What makes a Forex fear-and-greed composite transparent?", "Named components, fixed weights and windows, synchronized update times, component breadth, and confirmation from the selected pair's structure.", ["One undocumented index value.", "Assume every currency responds identically to risk appetite.", "Ignore disagreement among equities, volatility, yields, and credit."], "A composite is useful only when its construction and pair relevance can be inspected."),
  seed(276, "2.9", "What separates the intraday Gold Bollinger squeeze breakout lesson?", "A 5m or 15m session-relative squeeze, compact boundary, outside body close, next-candle hold, wick-return failure, and explicit expiry.", ["A multi-session 4H squeeze with patient confirmation.", "An outside wick that closes back inside.", "A setup kept active long after expansion stalls."], "The intraday version requires compact structure and quick acceptance."),
  seed(277, "8.13", "What must be verified before interpreting a large crypto exchange outflow?", "Current entity labels, internal-transfer filtering, entity-adjusted netflow, historical baseline, destination and custody context, persistence, and later price-volume response.", ["Treat every raw transfer as accumulation.", "Assume exchange wallets never change.", "Ignore whether the destination belongs to the same entity."], "Outflow meaning depends on ownership, destination, and repeated market evidence."),
  seed(278, "7.7", "How should Forex news-text sentiment be audited?", "Archive the primary source, speaker, topic, timestamp, and expectation; check full context for negation, then compare with the first stable close after spreads normalize.", ["Use a headline score without reading the source.", "Ignore what the market expected before publication.", "Judge acceptance from the first spread-distorted candle."], "Text scoring needs source context, expectation, freshness, and market response."),
  seed(279, "2.9", "What separates the swing Gold Bollinger squeeze breakout lesson?", "A 1H or 4H multi-session squeeze, broad structure, completed higher-timeframe close, several-candle hold, re-expansion, and wider point/dollar distance.", ["A 5m squeeze requiring immediate next-candle movement.", "An intrabar wick beyond a broad boundary.", "Abandon the study because acceptance develops slowly."], "The swing version uses broader compression and patient confirmation."),
  seed(280, "2.9", "How does Gold ATR expansion differ from a Bollinger squeeze lesson?", "Mark structure first, compare ATR with its own fixed baseline, require a body close beyond the range, and reject one-candle news distortion or return inside.", ["Use ATR to choose bullish or bearish direction.", "Start from band width instead of ATR's movement-size baseline.", "Treat one large event candle as sustained expansion."], "ATR measures movement size; price structure supplies direction and acceptance."),
];

function questionIdFor(id: string): string {
  return `sv_${id.replace(/-/g, "")}_mcq`;
}

async function main() {
  const args = new Set(process.argv.slice(2));
  if (args.has("--apply") && args.has("--dry-run")) throw new Error("Use either --apply or --dry-run, not both.");
  const dryRun = !args.has("--apply");
  const ids = SEEDS.map(item => item.id);
  if (new Set(ids).size !== 20 || SEEDS.length !== BATCH_261_280_TARGETS.length) throw new Error("Batch 261-280 seed cardinality mismatch.");

  const [strategies, modules] = await Promise.all([
    prisma.strategy.findMany({ where: { id: { in: ids } }, select: { id: true, name: true, assetClass: true, sequenceNumber: true, learningProfile: true, visualModel: true } }),
    prisma.courseModule.findMany({ select: { id: true, level: true, moduleNumber: true, title: true, logicIds: true } }),
  ]);
  const strategyById = new Map(strategies.map(item => [item.id, item]));
  const moduleByNumber = new Map(modules.map(item => [item.moduleNumber, item]));
  const problems: string[] = [];

  BATCH_261_280_TARGETS.forEach((target, index) => {
    const seedItem = SEEDS[index];
    const strategy = strategyById.get(target.id);
    if (!seedItem || seedItem.id !== target.id) problems.push(`Seed order mismatch at ordinal ${target.ordinal}`);
    if (!strategy) return problems.push(`Missing strategy ${target.id}`);
    if (!namesMatchExpected(strategy.name, target.name)) problems.push(`${target.id} name mismatch: ${strategy.name}`);
    if (strategy.assetClass !== target.assetClass) problems.push(`${target.id} asset mismatch: ${strategy.assetClass}`);
    if (!strategy.learningProfile || !strategy.visualModel) problems.push(`${target.id} is not ready for curriculum linking`);
    if (!moduleByNumber.has(seedItem.moduleNumber)) problems.push(`Missing module ${seedItem.moduleNumber} for ${target.name}`);
  });
  if (problems.length) throw new Error(`Batch 261-280 curriculum safety stop:\n${problems.join("\n")}`);

  console.log(dryRun ? "--- DRY RUN: no database writes ---" : "--- APPLYING Batch 261-280 curriculum map ---");
  console.table(SEEDS.map((item, index) => {
    const strategy = strategyById.get(item.id)!;
    const module = moduleByNumber.get(item.moduleNumber)!;
    return { ordinal: 261 + index, id: item.id, name: strategy.name, asset: strategy.assetClass, sequence: strategy.sequenceNumber, displayCode: getLegacyStrategyCode(strategy.assetClass, strategy.sequenceNumber), strategyLevel: getStrategyLevel(strategy), module: `${module.moduleNumber} ${module.title}`, examLevel: module.level, learningProfile: "ready", visualModel: "ready" };
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
  console.log(dryRun ? "Dry run complete: no curriculum writes." : "Batch 261-280 curriculum map applied.");
}

main().catch(error => { console.error(error); process.exit(1); }).finally(async () => { await prisma.$disconnect(); await pool.end(); });
