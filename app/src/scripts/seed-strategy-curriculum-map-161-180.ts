import { PrismaClient, QuestionType } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import {
  getLegacyStrategyCode,
  getStrategyLevel,
  getVaultStrategyRef,
} from "../lib/strategy-curriculum";
import { BATCH_161_180_TARGETS, namesMatchExpected } from "./strategy-override-rules";

dotenv.config();

const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
if (!connectionString) {
  console.error("DATABASE URL missing");
  process.exit(1);
}

const isLocal = connectionString.includes("localhost") || connectionString.includes("127.0.0.1");
const pool = new Pool({
  connectionString,
  ssl: isLocal ? false : { rejectUnauthorized: false },
});

const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });

type BatchSeed = {
  id: string;
  expectedName: string;
  expectedAsset: "FOREX" | "CRYPTO" | "GOLD";
  moduleNumber: string;
  domain: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

const SEEDS: BatchSeed[] = [
  {
    id: "ad481bb1-db73-484c-996c-e33bc5b9b460",
    expectedName: "Support/Resistance Bounce (Swing)",
    expectedAsset: "GOLD",
    moduleNumber: "2.2",
    domain: "gold",
    prompt: "What should the swing Gold support/resistance bounce lesson require?",
    options: [
      "A visible swing level, rejection wick, close away from the level, failed bounce area, and point or dollar distance.",
      "A crypto venue-depth rule as the main distance check.",
      "One candle in the middle of the chart with no level.",
      "A moving-average cross with no support or resistance.",
    ],
    correctIndex: 0,
    explanation: "The swing version needs a broader Gold level, clear wick rejection, and a failed-bounce case.",
  },
  {
    id: "b5eb4051-8a7b-4d81-9eae-a0b2e8e11795",
    expectedName: "Triple Top / Bottom",
    expectedAsset: "FOREX",
    moduleNumber: "2.3",
    domain: "forex",
    prompt: "What makes a Forex Triple Top / Bottom readable?",
    options: [
      "Three comparable peaks or troughs, a neckline, close through the neckline, failed reclaim, spread, sessions, and pip distance.",
      "Only two uneven highs with no neckline.",
      "Gold wick distance as the main Forex rule.",
      "Crypto funding data with no chart pattern.",
    ],
    correctIndex: 0,
    explanation: "The third reaction and neckline behavior make the pattern teachable.",
  },
  {
    id: "284993f5-df8c-4ac6-8c50-44c062836780",
    expectedName: "Engulfing Pattern",
    expectedAsset: "GOLD",
    moduleNumber: "0.4",
    domain: "gold",
    prompt: "What should the Gold Engulfing Pattern lesson show?",
    options: [
      "Prior candle range, engulfing body, support/resistance context, wick behavior, follow-up close, and point or dollar distance.",
      "Currency-pair distance wording as the Gold distance check.",
      "A volume-only read with no candle body.",
      "A crypto funding dashboard only.",
    ],
    correctIndex: 0,
    explanation: "This candle lesson starts with anatomy, then uses Gold level context and follow-up close quality.",
  },
  {
    id: "8503deed-5eb1-4912-a254-57184663c634",
    expectedName: "Cup and Handle Pattern",
    expectedAsset: "FOREX",
    moduleNumber: "2.9",
    domain: "forex",
    prompt: "What should a Forex Cup and Handle Pattern mark?",
    options: [
      "Cup rim, rounded base, handle pullback, breakout close, failed handle breakdown, spread, sessions, and pip distance.",
      "Only a round shape with no handle.",
      "Gold point distance as the main Forex rule.",
      "Crypto exchange depth with no rim line.",
    ],
    correctIndex: 0,
    explanation: "The rim and handle define the pattern before the breakout close is studied.",
  },
  {
    id: "cbf6a76f-8513-48d4-8cb3-a482c0b40066",
    expectedName: "TWAP Execution Algorithm",
    expectedAsset: "CRYPTO",
    moduleNumber: "7.13",
    domain: "crypto",
    prompt: "What should a crypto TWAP Execution Algorithm lesson audit?",
    options: [
      "Time slices, participation pace, venue depth, spread percentage, slippage, and thin-depth schedule traps.",
      "A candle pattern with no execution schedule.",
      "Currency-pair distance as the main crypto unit.",
      "Gold wick rejection only.",
    ],
    correctIndex: 0,
    explanation: "TWAP is taught as execution pacing against changing crypto venue depth.",
  },
  {
    id: "0a594e72-1858-4852-ba27-44950e72299a",
    expectedName: "Ascending Triangle Pattern",
    expectedAsset: "FOREX",
    moduleNumber: "2.9",
    domain: "forex",
    prompt: "What should a Forex Ascending Triangle Pattern show?",
    options: [
      "Flat resistance, higher lows, compression, breakout close, failed break back inside, spread, sessions, and pip distance.",
      "Flat support with lower highs.",
      "A crypto order-book queue only.",
      "A Gold engulfing candle with no triangle.",
    ],
    correctIndex: 0,
    explanation: "The Forex version studies pressure into resistance, then checks the breakout and failure case.",
  },
  {
    id: "4d0dca00-a47c-4135-b21b-130fac5bd8c0",
    expectedName: "VWAP Execution Algorithm",
    expectedAsset: "CRYPTO",
    moduleNumber: "7.13",
    domain: "crypto",
    prompt: "What should a crypto VWAP Execution Algorithm compare?",
    options: [
      "Volume-curve participation, VWAP drift, venue depth, spread percentage, slippage, and thin-liquidity execution traps.",
      "A chart pattern neckline only.",
      "Currency-pair distance as the main crypto measure.",
      "Gold macro pressure only.",
    ],
    correctIndex: 0,
    explanation: "VWAP execution is an execution-quality audit, not a simple chart entry rule.",
  },
  {
    id: "a1dd2828-cd6b-4b2d-8283-9bfa5901203f",
    expectedName: "Engulfing Pattern (Intraday)",
    expectedAsset: "GOLD",
    moduleNumber: "0.4",
    domain: "gold",
    prompt: "What separates intraday Gold Engulfing Pattern study?",
    options: [
      "5m/15m candle body, nearby level, fast wick behavior, follow-up close, and point or dollar distance.",
      "A swing-only chart with no short-timeframe context.",
      "Currency-pair distance wording.",
      "Crypto funding cost as the whole lesson.",
    ],
    correctIndex: 0,
    explanation: "The intraday version checks faster Gold wicks and immediate close quality.",
  },
  {
    id: "21417b83-f06b-4505-a9d8-e6542639e0b5",
    expectedName: "Engulfing Pattern (Swing)",
    expectedAsset: "GOLD",
    moduleNumber: "0.4",
    domain: "gold",
    prompt: "What should swing Gold Engulfing Pattern study?",
    options: [
      "1H/4H prior candle range, engulfing body, swing level context, follow-up close, and point or dollar distance.",
      "A 1m-only candle with no swing context.",
      "Crypto venue depth as the only rule.",
      "A currency-pair distance-only answer.",
    ],
    correctIndex: 0,
    explanation: "The swing version needs broader structure around the engulfing candle.",
  },
  {
    id: "82c3b335-c266-41d3-abb0-dd753d01b738",
    expectedName: "Descending Triangle Pattern",
    expectedAsset: "FOREX",
    moduleNumber: "2.9",
    domain: "forex",
    prompt: "What should a Forex Descending Triangle Pattern show?",
    options: [
      "Flat support, lower highs, compression, breakdown close, failed reclaim, spread, sessions, and pip distance.",
      "Flat resistance with higher lows.",
      "A Gold pin bar only.",
      "A crypto funding dashboard with no triangle.",
    ],
    correctIndex: 0,
    explanation: "The pattern teaches pressure into support and the failure case after a breakdown.",
  },
  {
    id: "b1a22410-4067-4930-9390-858dcfa8a16a",
    expectedName: "Iceberg Orders",
    expectedAsset: "CRYPTO",
    moduleNumber: "9.11",
    domain: "crypto",
    prompt: "What should a crypto Iceberg Orders lesson audit?",
    options: [
      "Visible depth, repeated refill behavior, hidden-size clue, spread percentage, slippage, and spoof-risk warning.",
      "One large candle with no order-book review.",
      "Currency-pair distance as the main crypto unit.",
      "Gold support bounce only.",
    ],
    correctIndex: 0,
    explanation: "Iceberg orders are taught through order-book behavior and venue-quality checks.",
  },
  {
    id: "13aa0a77-19f6-42cd-afd1-fde2eeaf4f02",
    expectedName: "Pin Bar Reversal",
    expectedAsset: "GOLD",
    moduleNumber: "0.4",
    domain: "gold",
    prompt: "What gives a Gold Pin Bar Reversal teaching value?",
    options: [
      "Long rejection wick, small body, close location, Gold support/resistance context, follow-up close, and point or dollar distance.",
      "Currency-pair distance wording as the Gold distance rule.",
      "A moving-average ribbon only.",
      "A crypto venue gap only.",
    ],
    correctIndex: 0,
    explanation: "The wick matters only when it appears at a meaningful Gold level and holds on follow-up.",
  },
  {
    id: "56748bdb-3ef1-4048-903f-81dbee972c94",
    expectedName: "Symmetrical Triangle Pattern",
    expectedAsset: "FOREX",
    moduleNumber: "2.9",
    domain: "forex",
    prompt: "What should a Forex Symmetrical Triangle Pattern show?",
    options: [
      "Converging highs and lows, compression, breakout or breakdown close, retest, failed break back inside, spread, sessions, and pip distance.",
      "A one-sided trendline with no compression.",
      "Gold point distance as the main Forex rule.",
      "Crypto venue depth with no pattern.",
    ],
    correctIndex: 0,
    explanation: "The symmetrical triangle is neutral compression until price closes outside the structure.",
  },
  {
    id: "7fb1d7bd-7578-46e6-b344-455f19713824",
    expectedName: "Multi-Timeframe Trend Confluence",
    expectedAsset: "CRYPTO",
    moduleNumber: "6.2",
    domain: "crypto",
    prompt: "What should crypto Multi-Timeframe Trend Confluence compare?",
    options: [
      "Higher-timeframe direction, mid-timeframe structure, lower-timeframe trigger, timeframe conflict, liquidity depth, slippage, and spread percentage.",
      "Only the smallest chart with no context.",
      "Currency-pair distance as the main crypto unit.",
      "Gold wick behavior only.",
    ],
    correctIndex: 0,
    explanation: "The strategy is useful only when the timeframes agree and venue depth supports the lower-timeframe trigger.",
  },
  {
    id: "03ad0164-12ee-4d17-96aa-da0fe64ec626",
    expectedName: "Pin Bar Reversal (Intraday)",
    expectedAsset: "GOLD",
    moduleNumber: "0.4",
    domain: "gold",
    prompt: "What separates intraday Gold Pin Bar Reversal study?",
    options: [
      "5m/15m rejection wick, small body, fast follow-up close, failed wick trap, and point or dollar distance.",
      "A swing-only wick with no intraday context.",
      "Currency-pair distance wording.",
      "Crypto order-book refill behavior only.",
    ],
    correctIndex: 0,
    explanation: "Intraday Gold pin bars need fast confirmation and clear failed-wick handling.",
  },
  {
    id: "22e36006-ef9a-4048-8f71-d68e7c771b1c",
    expectedName: "Volume Confirmation on Trend Signals",
    expectedAsset: "CRYPTO",
    moduleNumber: "3.9",
    domain: "crypto",
    prompt: "What should crypto Volume Confirmation on Trend Triggers check?",
    options: [
      "Trend structure, relative volume expansion, close quality, false volume burst trap, liquidity depth, slippage, and spread percentage.",
      "A volume burst with no price structure.",
      "Currency-pair distance as the main crypto unit.",
      "Gold wick distance only.",
    ],
    correctIndex: 0,
    explanation: "Volume is useful only when price structure, venue depth, and participation agree.",
  },
  {
    id: "7c6cf948-cf22-4beb-954e-34dff0030eff",
    expectedName: "Flag & Pennant Patterns",
    expectedAsset: "FOREX",
    moduleNumber: "2.9",
    domain: "forex",
    prompt: "What should Forex Flag & Pennant Patterns require?",
    options: [
      "Flagpole impulse, tight pause, boundary break, retest, failed continuation trap, spread, sessions, and pip distance.",
      "A sideways range with no impulse.",
      "Crypto funding data only.",
      "Gold point distance as the main Forex rule.",
    ],
    correctIndex: 0,
    explanation: "A flag or pennant needs an impulse, a clean pause, and a break that holds.",
  },
  {
    id: "5ce2bc88-e661-4ebb-9963-406327a3484d",
    expectedName: "Pin Bar Reversal (Swing)",
    expectedAsset: "GOLD",
    moduleNumber: "0.4",
    domain: "gold",
    prompt: "What should swing Gold Pin Bar Reversal emphasize?",
    options: [
      "1H/4H rejection wick, small body, swing level context, follow-up close, failed wick trap, and point or dollar distance.",
      "A 1m-only candle with no swing level.",
      "Currency-pair distance wording.",
      "Crypto venue latency only.",
    ],
    correctIndex: 0,
    explanation: "The swing version studies broader Gold rejection and slower follow-up confirmation.",
  },
  {
    id: "9d4fd01b-a4d1-4cf2-af45-f310d969dd16",
    expectedName: "Wedge Patterns (Falling & Rising)",
    expectedAsset: "FOREX",
    moduleNumber: "2.9",
    domain: "forex",
    prompt: "What should Forex Wedge Patterns show?",
    options: [
      "Rising or falling wedge boundaries, compression, breakout or breakdown close, failed break back inside, spread, sessions, and pip distance.",
      "A single trendline with no compression.",
      "Crypto order-book depth only.",
      "Gold wick rejection only.",
    ],
    correctIndex: 0,
    explanation: "The wedge is a compression pattern; the break and failed-break case make it teachable.",
  },
  {
    id: "f5c9bf81-3779-4f3e-8689-f3330c4f8a92",
    expectedName: "Funding-Adjusted Breakout",
    expectedAsset: "CRYPTO",
    moduleNumber: "9.4",
    domain: "crypto",
    prompt: "What should crypto Funding-Adjusted Breakout include?",
    options: [
      "Breakout boundary, funding rate context, perp crowding zone, failed break back inside, liquidity depth, slippage, and spread percentage.",
      "A breakout candle with no funding context.",
      "Currency-pair distance as the main crypto unit.",
      "Gold support bounce only.",
    ],
    correctIndex: 0,
    explanation: "Funding can show crowding, so the breakout must be checked against perp cost and venue quality.",
  },
];

function questionIdFor(strategyId: string): string {
  return `sv_${strategyId.replace(/-/g, "")}_mcq`;
}

function formatStatus(value: unknown): "ready" | "missing" {
  return value ? "ready" : "missing";
}

async function main() {
  const args = new Set(process.argv.slice(2));
  const apply = args.has("--apply");
  const explicitDryRun = args.has("--dry-run");

  if (apply && explicitDryRun) {
    throw new Error("Use either --apply or --dry-run, not both.");
  }

  const dryRun = !apply;
  const targetIds = SEEDS.map(seed => seed.id);
  const targetIdSet = new Set(targetIds);
  if (targetIdSet.size !== SEEDS.length) {
    throw new Error("Batch 161-180 seed list contains duplicate strategy IDs.");
  }
  for (const target of BATCH_161_180_TARGETS) {
    if (!targetIdSet.has(target.id)) {
      throw new Error(`Batch 161-180 seed list missing target: ${target.ordinal} ${target.id}`);
    }
  }

  const [strategies, modules] = await Promise.all([
    prisma.strategy.findMany({
      where: { id: { in: targetIds } },
      select: {
        id: true,
        name: true,
        assetClass: true,
        sequenceNumber: true,
        parentFamily: true,
        learningProfile: true,
        visualModel: true,
      },
    }),
    prisma.courseModule.findMany({
      select: {
        id: true,
        level: true,
        moduleNumber: true,
        title: true,
        logicIds: true,
      },
    }),
  ]);

  const strategyById = new Map(strategies.map(strategy => [strategy.id, strategy]));
  const moduleByNumber = new Map(modules.map(module => [module.moduleNumber, module]));
  const problems: string[] = [];

  for (const seed of SEEDS) {
    const strategy = strategyById.get(seed.id);
    const module = moduleByNumber.get(seed.moduleNumber);
    if (!strategy) {
      problems.push(`Missing strategy ${seed.id}`);
      continue;
    }
    if (!module) problems.push(`Missing module ${seed.moduleNumber} for ${seed.expectedName}`);
    if (!namesMatchExpected(strategy.name, seed.expectedName)) {
      problems.push(`${seed.id} name expected "${seed.expectedName}" but found "${strategy.name}"`);
    }
    if (strategy.assetClass !== seed.expectedAsset) {
      problems.push(`${seed.id} asset expected ${seed.expectedAsset} but found ${strategy.assetClass}`);
    }
    if (!strategy.learningProfile) problems.push(`${seed.id} is missing learningProfile`);
    if (!strategy.visualModel) problems.push(`${seed.id} is missing visualModel`);
  }
  if (problems.length > 0) {
    throw new Error(`Batch 161-180 curriculum seed safety stop:\n${problems.join("\n")}`);
  }

  console.log(dryRun ? "--- DRY RUN: no database writes ---" : "--- APPLYING Batch 161-180 curriculum map ---");
  console.table(SEEDS.map((seed, index) => {
    const strategy = strategyById.get(seed.id)!;
    const module = moduleByNumber.get(seed.moduleNumber)!;
    return {
      order: index + 1,
      ordinal: BATCH_161_180_TARGETS.find(target => target.id === seed.id)?.ordinal,
      ref: getVaultStrategyRef(seed.id),
      name: strategy.name,
      asset: strategy.assetClass,
      sequence: strategy.sequenceNumber,
      displayCode: getLegacyStrategyCode(strategy.assetClass, strategy.sequenceNumber),
      strategyLevel: getStrategyLevel(strategy),
      module: `${module.moduleNumber} ${module.title}`,
      examLevel: module.level,
      learningProfile: formatStatus(strategy.learningProfile),
      visualModel: formatStatus(strategy.visualModel),
    };
  }));

  const seedsByModule = new Map<string, BatchSeed[]>();
  for (const seed of SEEDS) {
    const group = seedsByModule.get(seed.moduleNumber) || [];
    group.push(seed);
    seedsByModule.set(seed.moduleNumber, group);
  }

  for (const [moduleNumber, seeds] of seedsByModule) {
    const module = moduleByNumber.get(moduleNumber)!;
    const refsToAdd = seeds.map(seed => getVaultStrategyRef(seed.id));
    const nextLogicIds = Array.from(new Set([...(module.logicIds || []), ...refsToAdd]));
    const addedRefs = refsToAdd.filter(ref => !(module.logicIds || []).includes(ref));
    console.log(`${dryRun ? "Would update" : "Updating"} module ${module.moduleNumber} ${module.title}: ${addedRefs.length} new strategy link(s)`);
    if (addedRefs.length > 0) console.log(`  ${addedRefs.join(", ")}`);

    if (!dryRun && addedRefs.length > 0) {
      await prisma.courseModule.update({
        where: { id: module.id },
        data: { logicIds: nextLogicIds },
      });
    }
  }

  for (const seed of SEEDS) {
    const strategy = strategyById.get(seed.id)!;
    const module = moduleByNumber.get(seed.moduleNumber)!;
    const questionId = questionIdFor(seed.id);
    console.log(`${dryRun ? "Would upsert" : "Upserting"} exam question ${questionId} (L${module.level}, ${getVaultStrategyRef(seed.id)}, ${strategy.name})`);

    if (!dryRun) {
      await prisma.examQuestion.upsert({
        where: { id: questionId },
        create: {
          id: questionId,
          level: module.level,
          type: QuestionType.MCQ,
          domain: seed.domain,
          logicId: getVaultStrategyRef(seed.id),
          prompt: seed.prompt,
          options: seed.options,
          correctIndex: seed.correctIndex,
          explanation: seed.explanation,
        },
        update: {
          level: module.level,
          type: QuestionType.MCQ,
          domain: seed.domain,
          logicId: getVaultStrategyRef(seed.id),
          prompt: seed.prompt,
          options: seed.options,
          correctIndex: seed.correctIndex,
          matchingLeft: [],
          matchingRight: [],
          chartState: undefined,
          targetX: null,
          targetY: null,
          tolerance: null,
          explanation: seed.explanation,
        },
      });
    }
  }

  console.log(dryRun ? "Dry run complete: no curriculum writes." : "Batch 161-180 curriculum map applied.");
}

main()
  .catch(error => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
