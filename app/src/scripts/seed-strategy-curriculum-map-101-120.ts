import { PrismaClient, QuestionType } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import {
  getLegacyStrategyCode,
  getStrategyLevel,
  getVaultStrategyRef,
} from "../lib/strategy-curriculum";
import { BATCH_101_120_TARGETS, namesMatchExpected } from "./strategy-override-rules";

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
    id: "d451237e-f03d-4ab9-a2c3-61cc3ccc6f22",
    expectedName: "Golden Cross (50/200 SMA)",
    expectedAsset: "GOLD",
    moduleNumber: "2.4",
    domain: "gold",
    prompt: "What should the Gold Golden Cross lesson check?",
    options: [
      "Daily 50 SMA and 200 SMA, Gold structure, first pullback, wick trap, and point or dollar distance.",
      "A crypto depth rule with no moving averages.",
      "A Forex range rule by itself.",
      "One candle far away from the averages.",
    ],
    correctIndex: 0,
    explanation: "The base version studies the slow 50/200 SMA cross with Gold structure and lag risk.",
  },
  {
    id: "8f18ee6d-37d8-4381-9887-8a13895040cf",
    expectedName: "Support and Resistance Bounce",
    expectedAsset: "CRYPTO",
    moduleNumber: "2.2",
    domain: "crypto",
    prompt: "What makes a crypto support and resistance bounce readable?",
    options: [
      "Repeated level quality, rejection close, return path, liquidity depth, and spread percentage.",
      "A currency-pair distance rule.",
      "A Gold moving-average cross.",
      "A bounce without a marked level.",
    ],
    correctIndex: 0,
    explanation: "The level, rejection close, and crypto depth decide whether the bounce is clear enough for study.",
  },
  {
    id: "afa031cb-c7d3-4d65-b7d6-3c9e5fcaf311",
    expectedName: "Golden Cross (50/200 SMA) (Intraday)",
    expectedAsset: "GOLD",
    moduleNumber: "2.4",
    domain: "gold",
    prompt: "What separates intraday Gold Golden Cross from the base version?",
    options: [
      "5m or 15m 50/200 SMA cross, daily context, first pullback, and fast wick whipsaw risk.",
      "A swing-only chart with no intraday context.",
      "A crypto support tap with no averages.",
      "VWAP distance only.",
    ],
    correctIndex: 0,
    explanation: "The intraday version uses a faster chart while still checking the slow 50/200 SMA context.",
  },
  {
    id: "e561f424-0b3a-476f-aa0d-1eec5841ca65",
    expectedName: "Stochastic Oscillator Range Reversion",
    expectedAsset: "FOREX",
    moduleNumber: "2.2",
    domain: "forex",
    prompt: "What should Forex Stochastic Oscillator Range Reversion combine?",
    options: [
      "Range edge, Stochastic extreme, candle reaction, mid-range path, spread, and pip distance.",
      "A crypto exchange-depth rule only.",
      "A Gold wick rule with no oscillator.",
      "A breakout continuation checklist.",
    ],
    correctIndex: 0,
    explanation: "The oscillator extreme needs a range edge and a price reaction before reversion is studied.",
  },
  {
    id: "41b2d509-ee2c-4ed0-b8cc-02c761f65b40",
    expectedName: "Golden Cross (50/200 SMA) (Swing)",
    expectedAsset: "GOLD",
    moduleNumber: "2.4",
    domain: "gold",
    prompt: "What should the swing Gold Golden Cross version include?",
    options: [
      "1H or 4H structure, daily 50/200 SMA context, pullback area, wick failure, and point or dollar distance.",
      "A 1m-only cross.",
      "A crypto candlestick pattern with no averages.",
      "A Forex VWAP stretch.",
    ],
    correctIndex: 0,
    explanation: "The swing version needs broader structure and a slower pullback read around the averages.",
  },
  {
    id: "502ebb25-686c-42e9-add9-2dbf3698ca4f",
    expectedName: "Support/Resistance Scalping",
    expectedAsset: "CRYPTO",
    moduleNumber: "7.13",
    domain: "crypto",
    prompt: "What must crypto support/resistance scalping check before the example is useful?",
    options: [
      "Fast level tap, immediate rejection, tight invalidation, depth, slippage, and spread percentage.",
      "A slow swing bounce with no depth check.",
      "A currency-pair distance rule.",
      "A Gold daily 50/200 SMA cross.",
    ],
    correctIndex: 0,
    explanation: "The scalping version is execution-sensitive, so fast rejection and crypto depth matter.",
  },
  {
    id: "8bcfef24-cefc-408d-8770-fe71669610da",
    expectedName: "Mean Reversion with Z-Score",
    expectedAsset: "FOREX",
    moduleNumber: "2.2",
    domain: "forex",
    prompt: "What is the core sequence in Forex Z-score mean reversion?",
    options: [
      "Z-score extreme, mean baseline, acceptance back toward the mean, spread, and pip distance.",
      "Every extreme reversing instantly.",
      "A crypto venue-depth model only.",
      "A Gold wick pattern without a mean.",
    ],
    correctIndex: 0,
    explanation: "The learner studies statistical stretch and acceptance back toward the baseline, not the extreme alone.",
  },
  {
    id: "7ccc5d19-a4a6-4b82-9f8b-0464f9593194",
    expectedName: "Bullish Engulfing Pattern",
    expectedAsset: "CRYPTO",
    moduleNumber: "0.4",
    domain: "crypto",
    prompt: "What should a crypto bullish engulfing pattern show?",
    options: [
      "Prior decline, support context, body reclaiming the prior candle, confirmation close, and liquidity depth.",
      "A moving-average cross.",
      "A currency-pair distance rule.",
      "A candle with only a tiny body and no context.",
    ],
    correctIndex: 0,
    explanation: "The bullish engulfing lesson starts with candlestick anatomy plus crypto depth and close quality.",
  },
  {
    id: "dea3d2bb-c6be-462f-8437-0b37d3bc26ce",
    expectedName: "EMA Cross with RSI Filter",
    expectedAsset: "GOLD",
    moduleNumber: "2.4",
    domain: "gold",
    prompt: "What should Gold EMA Cross with RSI Filter check?",
    options: [
      "Fast EMA, slow EMA, RSI midline context, Gold structure, wick whipsaw risk, and point or dollar distance.",
      "A crypto level tap with no indicators.",
      "A currency-pair range rule.",
      "RSI without the EMA cross.",
    ],
    correctIndex: 0,
    explanation: "The EMA cross is checked against RSI context and Gold wick behavior.",
  },
  {
    id: "e33de523-6778-47da-80f9-9128ca99e7be",
    expectedName: "Regression Channel Reversion",
    expectedAsset: "FOREX",
    moduleNumber: "2.2",
    domain: "forex",
    prompt: "What should Forex Regression Channel Reversion mark?",
    options: [
      "Regression upper/lower edges, midline, channel-edge reaction, return path, spread, and pip distance.",
      "A crypto candlestick wick only.",
      "A Gold 50/200 SMA cross.",
      "A channel touch with no close quality.",
    ],
    correctIndex: 0,
    explanation: "The channel edge and midline frame the mean-reversion lesson.",
  },
  {
    id: "31c3d45c-7a01-488d-85fe-80e9720e3763",
    expectedName: "VWAP Reversion (Volume Weighted Average Price)",
    expectedAsset: "FOREX",
    moduleNumber: "2.2",
    domain: "forex",
    prompt: "What should Forex VWAP Reversion study?",
    options: [
      "VWAP fair-value line, pair stretch, close back toward VWAP, session context, spread, and pip distance.",
      "A crypto depth rule with no VWAP.",
      "A Gold wick pattern only.",
      "A moving-average cross with no value line.",
    ],
    correctIndex: 0,
    explanation: "VWAP frames fair value; the pair still needs acceptance back toward VWAP.",
  },
  {
    id: "85dbd266-bc29-4598-8995-efff7f00464f",
    expectedName: "Support/Resistance Bounce",
    expectedAsset: "CRYPTO",
    moduleNumber: "2.2",
    domain: "crypto",
    prompt: "What distinguishes crypto Support/Resistance Bounce from a first-touch level bounce?",
    options: [
      "A retest of the marked level, close away from it, failed retest trap, depth, and spread percentage.",
      "A level touch with no close.",
      "A Gold EMA cross.",
      "A currency-pair distance model.",
    ],
    correctIndex: 0,
    explanation: "This version studies retest behavior after the level is already known.",
  },
  {
    id: "b95eed4d-b1fa-455f-afaa-35469d084818",
    expectedName: "Bearish Engulfing Pattern",
    expectedAsset: "CRYPTO",
    moduleNumber: "0.4",
    domain: "crypto",
    prompt: "What should a crypto bearish engulfing pattern show?",
    options: [
      "Prior rise, resistance context, body rejecting the prior candle, confirmation close, and liquidity depth.",
      "A VWAP return path.",
      "A currency-pair distance rule.",
      "A candle color change with no context.",
    ],
    correctIndex: 0,
    explanation: "The bearish version needs prior upside movement, resistance context, body rejection, and depth awareness.",
  },
  {
    id: "c7936cc4-a81e-4dc1-97b6-74a5859d25bc",
    expectedName: "EMA Cross with RSI Filter (Intraday)",
    expectedAsset: "GOLD",
    moduleNumber: "2.4",
    domain: "gold",
    prompt: "What separates intraday Gold EMA Cross with RSI Filter?",
    options: [
      "5m or 15m EMA cross, RSI midline support, first pullback, fast wick trap, and point or dollar distance.",
      "A 4H-only swing cross.",
      "A crypto level bounce.",
      "A fixed Forex distance rule.",
    ],
    correctIndex: 0,
    explanation: "The intraday version focuses on fast EMA/RSI alignment and quick Gold wick failure risk.",
  },
  {
    id: "163ec38a-647e-4953-988f-7e2e801da7bd",
    expectedName: "Pin Bar / Hammer Pattern",
    expectedAsset: "CRYPTO",
    moduleNumber: "0.4",
    domain: "crypto",
    prompt: "What should a crypto Pin Bar / Hammer lesson show?",
    options: [
      "Long lower rejection wick, small body, support context, confirmation close, and liquidity depth.",
      "A moving-average cross.",
      "A Gold VWAP stretch.",
      "A currency-pair range model.",
    ],
    correctIndex: 0,
    explanation: "The lesson is candlestick anatomy at support, with depth checks so wick-only reads do not mislead.",
  },
  {
    id: "6d1bde77-087d-4a94-941a-daf5fcb12f07",
    expectedName: "EMA Cross with RSI Filter (Swing)",
    expectedAsset: "GOLD",
    moduleNumber: "2.4",
    domain: "gold",
    prompt: "What should the swing Gold EMA Cross with RSI Filter include?",
    options: [
      "1H or 4H EMA cross, RSI trend support, broader structure, wick failure, and point or dollar distance.",
      "A 1m-only cross.",
      "A crypto candlestick wick only.",
      "VWAP without the EMAs.",
    ],
    correctIndex: 0,
    explanation: "The swing version needs broader structure and a slower EMA/RSI read.",
  },
  {
    id: "cae2a2cc-f5c8-46a6-8432-9a977aeba237",
    expectedName: "Intraday Scalping Mean Reversion",
    expectedAsset: "FOREX",
    moduleNumber: "7.8",
    domain: "forex",
    prompt: "What should Forex Intraday Scalping Mean Reversion check?",
    options: [
      "1m or 5m stretch from mean, fast reaction, time cancellation, spread sensitivity, and pip distance.",
      "A slow daily cross.",
      "A crypto depth model only.",
      "A Gold wick pattern with no mean.",
    ],
    correctIndex: 0,
    explanation: "This is a fast execution lesson, so timing, spread, and fast invalidation matter.",
  },
  {
    id: "0b2c8f23-7524-4221-aba5-544d683b3473",
    expectedName: "Shooting Star / Inverted Hammer",
    expectedAsset: "CRYPTO",
    moduleNumber: "0.4",
    domain: "crypto",
    prompt: "What should a crypto Shooting Star / Inverted Hammer lesson show?",
    options: [
      "Long upper rejection wick, small body, resistance context, confirmation close, and liquidity depth.",
      "A 50/200 SMA cross.",
      "A currency-pair distance rule.",
      "A lower wick at support only.",
    ],
    correctIndex: 0,
    explanation: "The upper-wick version studies rejection near resistance and the next close.",
  },
  {
    id: "9bf79610-6adf-49be-b993-3db235dfb949",
    expectedName: "MACD Momentum",
    expectedAsset: "GOLD",
    moduleNumber: "2.4",
    domain: "gold",
    prompt: "What should Gold MACD Momentum compare?",
    options: [
      "MACD line, trigger line, histogram bars, zero baseline, Gold structure, and wick rejection risk.",
      "A crypto support tap.",
      "A currency-pair range rule.",
      "Histogram bars without price context.",
    ],
    correctIndex: 0,
    explanation: "The MACD map is useful only when it is compared with Gold structure and wick behavior.",
  },
  {
    id: "9f07a2ff-3ed0-4549-83ce-7e97f0e8fb62",
    expectedName: "Volatility Mean Reversion (ATR Regression)",
    expectedAsset: "FOREX",
    moduleNumber: "5.2",
    domain: "forex",
    prompt: "What is the core read in Forex ATR Regression mean reversion?",
    options: [
      "ATR stretch around a regression channel, reaction toward the midline, spread, and pip distance.",
      "A crypto ATR breakout after compression.",
      "A Gold candlestick pattern only.",
      "High ATR as automatic continuation.",
    ],
    correctIndex: 0,
    explanation: "This version studies ATR stretch returning toward the regression center, not crypto-style breakout expansion.",
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
    throw new Error("Batch 101-120 seed list contains duplicate strategy IDs.");
  }
  for (const target of BATCH_101_120_TARGETS) {
    if (!targetIdSet.has(target.id)) {
      throw new Error(`Batch 101-120 seed list missing target: ${target.ordinal} ${target.id}`);
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
    if (!module) {
      problems.push(`Missing module ${seed.moduleNumber} for ${seed.expectedName}`);
    }
    if (!namesMatchExpected(strategy.name, seed.expectedName)) {
      problems.push(`${seed.id} name expected "${seed.expectedName}" but found "${strategy.name}"`);
    }
    if (strategy.assetClass !== seed.expectedAsset) {
      problems.push(`${seed.id} asset expected ${seed.expectedAsset} but found ${strategy.assetClass}`);
    }
    if (!strategy.learningProfile) {
      problems.push(`${seed.id} is missing learningProfile`);
    }
    if (!strategy.visualModel) {
      problems.push(`${seed.id} is missing visualModel`);
    }
  }
  if (problems.length > 0) {
    throw new Error(`Batch 101-120 curriculum seed safety stop:\n${problems.join("\n")}`);
  }

  console.log(dryRun ? "--- DRY RUN: no database writes ---" : "--- APPLYING Batch 101-120 curriculum map ---");
  console.table(SEEDS.map((seed, index) => {
    const strategy = strategyById.get(seed.id)!;
    const module = moduleByNumber.get(seed.moduleNumber)!;
    return {
      order: index + 1,
      ordinal: BATCH_101_120_TARGETS.find(target => target.id === seed.id)?.ordinal,
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
      });
    }
  }

  console.log(dryRun ? "--- DRY RUN COMPLETE ---" : "--- BATCH 101-120 CURRICULUM MAP APPLIED ---");
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
