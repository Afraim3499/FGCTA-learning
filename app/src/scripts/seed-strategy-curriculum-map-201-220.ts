import { PrismaClient, QuestionType } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import { getLegacyStrategyCode, getStrategyLevel, getVaultStrategyRef } from "../lib/strategy-curriculum";
import { BATCH_201_220_TARGETS, namesMatchExpected } from "./strategy-override-rules";

dotenv.config();

const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE URL missing");
const isLocal = connectionString.includes("localhost") || connectionString.includes("127.0.0.1");
const pool = new Pool({ connectionString, ssl: isLocal ? false : { rejectUnauthorized: false } });
const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });

type Asset = "FOREX" | "CRYPTO" | "GOLD";
type BatchSeed = {
  id: string;
  expectedName: string;
  expectedAsset: Asset;
  moduleNumber: string;
  prompt: string;
  options: string[];
  explanation: string;
};

function seed(
  ordinal: number,
  moduleNumber: string,
  prompt: string,
  correct: string,
  wrong: [string, string, string],
  explanation: string,
): BatchSeed {
  const target = BATCH_201_220_TARGETS.find(item => item.ordinal === ordinal);
  if (!target) throw new Error(`Missing target ordinal ${ordinal}`);
  return {
    id: target.id,
    expectedName: target.name,
    expectedAsset: target.assetClass,
    moduleNumber,
    prompt,
    options: [correct, ...wrong],
    explanation,
  };
}

const SEEDS: BatchSeed[] = [
  seed(201, "2.1", "What makes a Forex harmonic pattern valid for study?", "Fixed X-A-B-C-D swing anchors, pattern-specific Fibonacci tolerances, a potential reversal zone, reaction evidence, and D-point invalidation.", ["Moving swing anchors until any ratio fits.", "Treating point D as an automatic reversal.", "Using one ratio for Gartley, Butterfly, and Bat."], "Harmonic patterns depend on measured geometry and a clear failure boundary."),
  seed(202, "2.3", "What separates the intraday Gold Double Top/Bottom lesson?", "Two distinct 5m or 15m extremes, a compact neckline close, an immediate retest, and a sharp wick-reclaim trap.", ["A broad multi-day pattern with no short-timeframe neckline.", "Two random wicks without an intervening reaction.", "Currency-pair distance language."], "The intraday version is defined by compact structure and fast confirmation behavior."),
  seed(203, "2.1", "How should an Elliott Wave count be handled?", "Test a five-wave impulse and A-B-C correction against explicit rules while keeping an alternate count and invalidation visible.", ["Relabel every swing so the preferred count never fails.", "Assume Wave 3 before completed swing evidence.", "Treat the count as a certain forecast."], "A wave count is a structured hypothesis with rules and alternatives."),
  seed(204, "8.13", "What must a crypto burn-event audit compare?", "Verified burn mechanics, net supply change, prior expectations, demand, post-event absorption, and venue liquidity.", ["Only the headline number of burned tokens.", "A fixed rise after every scheduled burn.", "Currency-pair distance and session highs."], "A burn changes supply only to the extent that it is real, net, and meaningful relative to demand."),
  seed(205, "1.7", "What defines Level 1 Candlestick Cluster Confluence?", "Two or more completed candle clues agreeing at one horizontal area, with a cluster boundary and opposing-close invalidation.", ["An indicator crossover plus a session filter.", "Unfinished candles collected from unrelated locations.", "A macro event and volatility model."], "The lesson stays with simple candle anatomy, location, agreement, and failure."),
  seed(206, "8.13", "What makes a vesting-cliff scenario auditable?", "Cliff date, circulating-supply share, recipient type, transferability, exchange flow, positioning, and absorption.", ["Assuming every unlock creates immediate selling.", "Using social excitement without supply data.", "Ignoring whether tokens can be transferred."], "Potential new supply must be traced from schedule to actual market flow."),
  seed(207, "2.3", "What separates the swing Gold Double Top/Bottom lesson?", "Completed 1H or 4H extremes, a higher-timeframe neckline close, patient retest, and sustained-reclaim invalidation.", ["A rapid 5m wick through a compact neckline.", "Two adjacent candles with no completed swings.", "An immediate reaction requirement."], "The swing version uses broader structure and slower acceptance."),
  seed(208, "2.1", "How is multi-timeframe candlestick confirmation built?", "Start with higher-timeframe location, verify middle-timeframe structure, then wait for one completed lower-timeframe candle clue.", ["Let one tiny candle overrule every larger timeframe.", "Combine unfinished candles from unrelated periods.", "Use only an indicator value."], "Top-down context gives the trigger candle meaning."),
  seed(209, "2.9", "What completes the base Gold Cup and Handle lesson?", "Two rim tests, a rounded cup, a smaller controlled handle, a breakout close, and a failed-handle example.", ["Any V-shaped rebound followed by one candle.", "A handle deeper than the whole cup.", "A boundary wick without a close."], "The base lesson emphasizes correct pattern anatomy before breakout quality."),
  seed(210, "6.9", "How should crypto macro-liquidity correlation be studied?", "With synchronized data, a named liquidity proxy, fixed rolling windows, lead-or-lag checks, price structure, and decoupling.", ["As proof that liquidity directly causes every crypto move.", "By changing windows until two lines match.", "Without checking data dates or venue depth."], "Correlation is a changing relationship that must be measured and challenged."),
  seed(211, "6.11", "What is central to a Forex carry-trade study?", "Policy-rate differential, expected persistence, forward or swap cost, spot structure, and policy-reversal risk.", ["Choosing the highest nominal rate alone.", "Ignoring adverse movement in the currency pair.", "Treating carry as the same as parity theory."], "Carry depends on both the rate advantage and the currency path."),
  seed(212, "5.13", "How do correlation and beta differ in a crypto portfolio?", "Correlation measures shared direction; beta estimates sensitivity to a chosen benchmark.", ["They are two names for the same calculation.", "Beta measures only exchange fees.", "Correlation stays fixed across every market condition."], "Separating direction from sensitivity reveals duplicated exposure more clearly."),
  seed(213, "2.9", "What separates intraday Gold Cup and Handle study?", "A compact rounded recovery, shallow handle near the rim, immediate breakout/retest behavior, and a sharp wick-back-inside trap.", ["A broad 1H or 4H base with a multi-candle retest.", "A deep handle below the cup midpoint.", "A V-shaped bounce with no handle."], "The intraday version is compact and depends on fast acceptance."),
  seed(214, "6.11", "What is the proper role of UIRP in this Forex lesson?", "Compare a starting rate differential with the later spot change over a fixed window and measure the parity gap.", ["Use it as an automatic short-term entry rule.", "Change the observation window after seeing price.", "Assume the model must hold every time."], "UIRP is a classroom relationship to test, including its failures."),
  seed(215, "8.13", "What supports a crypto network-adoption trend?", "Retained activity, useful transactions or fees, broad participation, limited incentive distortion, and fresh data.", ["A one-day address spike caused by rewards.", "Raw address count without retention.", "Price movement with no network evidence."], "Durable adoption requires quality, breadth, and persistence."),
  seed(216, "2.9", "What separates swing Gold Cup and Handle study?", "A broad 1H or 4H rounded base, patient handle, completed higher-timeframe break, and multi-candle retest.", ["A fast 5m handle with instant follow-through.", "A deep handle that destroys the cup.", "One intrabar wick above the rim."], "The swing version uses completed broad structure and patient confirmation."),
  seed(217, "6.11", "What drives Interest Rate Differential Momentum?", "A change in expected policy-rate paths that agrees with pair structure and remains valid through event repricing.", ["The static rate difference alone.", "Joining after both the differential and pair are fully extended.", "Ignoring a reversal in policy expectations."], "Momentum comes from changing expectations, not merely existing yield differences."),
  seed(218, "8.13", "What makes developer activity useful in a crypto audit?", "Active contributors, meaningful releases, relevant repositories, fork filtering, continuity, and fresh data.", ["Raw commit count without repository checks.", "Automated formatting changes treated as product growth.", "Assuming development activity equals immediate adoption."], "Development quality and relevance matter more than inflated counts."),
  seed(219, "2.9", "What defines a Gold Flag and Pennant continuation lesson?", "A clear flagpole, controlled flag or pennant contraction, body close outside, retest, and failed return inside.", ["Any sideways pause without a prior impulse.", "A loose range with no boundaries.", "A wick outside the pattern with no close."], "Continuation requires both a prior move and controlled compression."),
  seed(220, "8.13", "What must be checked before interpreting a crypto governance proposal?", "Proposal mechanics, quorum, delegate concentration, executable change, implementation timing, crowding, and absorption.", ["Forum sentiment alone.", "The vote headline without execution details.", "A fixed response immediately after publication."], "Governance impact depends on voting power, execution, timing, and economic substance."),
];

function questionIdFor(id: string): string {
  return `sv_${id.replace(/-/g, "")}_mcq`;
}

async function main() {
  const args = new Set(process.argv.slice(2));
  if (args.has("--apply") && args.has("--dry-run")) throw new Error("Use either --apply or --dry-run, not both.");
  const dryRun = !args.has("--apply");
  const ids = SEEDS.map(item => item.id);
  if (new Set(ids).size !== 20 || SEEDS.length !== BATCH_201_220_TARGETS.length) throw new Error("Batch 201-220 seed cardinality mismatch.");

  const [strategies, modules] = await Promise.all([
    prisma.strategy.findMany({ where: { id: { in: ids } }, select: { id: true, name: true, assetClass: true, sequenceNumber: true, parentFamily: true, learningProfile: true, visualModel: true } }),
    prisma.courseModule.findMany({ select: { id: true, level: true, moduleNumber: true, title: true, logicIds: true } }),
  ]);
  const strategyById = new Map(strategies.map(item => [item.id, item]));
  const moduleByNumber = new Map(modules.map(item => [item.moduleNumber, item]));
  const problems: string[] = [];

  BATCH_201_220_TARGETS.forEach((target, index) => {
    const seedItem = SEEDS[index];
    const strategy = strategyById.get(target.id);
    if (!seedItem || seedItem.id !== target.id) problems.push(`Seed order mismatch at ordinal ${target.ordinal}`);
    if (!strategy) return problems.push(`Missing strategy ${target.id}`);
    if (!namesMatchExpected(strategy.name, target.name)) problems.push(`${target.id} name mismatch: ${strategy.name}`);
    if (strategy.assetClass !== target.assetClass) problems.push(`${target.id} asset mismatch: ${strategy.assetClass}`);
    if (!strategy.learningProfile || !strategy.visualModel) problems.push(`${target.id} is not ready for curriculum linking`);
    if (!moduleByNumber.has(seedItem.moduleNumber)) problems.push(`Missing module ${seedItem.moduleNumber} for ${target.name}`);
  });
  if (problems.length) throw new Error(`Batch 201-220 curriculum safety stop:\n${problems.join("\n")}`);

  console.log(dryRun ? "--- DRY RUN: no database writes ---" : "--- APPLYING Batch 201-220 curriculum map ---");
  console.table(SEEDS.map((item, index) => {
    const strategy = strategyById.get(item.id)!;
    const module = moduleByNumber.get(item.moduleNumber)!;
    return { ordinal: 201 + index, id: item.id, name: strategy.name, asset: strategy.assetClass, sequence: strategy.sequenceNumber, displayCode: getLegacyStrategyCode(strategy.assetClass, strategy.sequenceNumber), strategyLevel: getStrategyLevel(strategy), module: `${module.moduleNumber} ${module.title}`, examLevel: module.level, learningProfile: "ready", visualModel: "ready" };
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
  console.log(dryRun ? "Dry run complete: no curriculum writes." : "Batch 201-220 curriculum map applied.");
}

main().catch(error => { console.error(error); process.exit(1); }).finally(async () => { await prisma.$disconnect(); await pool.end(); });
