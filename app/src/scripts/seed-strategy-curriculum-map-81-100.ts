import { PrismaClient, QuestionType } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import {
  getLegacyStrategyCode,
  getStrategyLevel,
  getVaultStrategyRef,
} from "../lib/strategy-curriculum";
import { BATCH_81_100_TARGETS, namesMatchExpected } from "./strategy-override-rules";

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
    id: "6ca2f969-dcce-4817-849c-180e830b7708",
    expectedName: "Ichimoku Cloud Trend",
    expectedAsset: "CRYPTO",
    moduleNumber: "2.4",
    domain: "crypto",
    prompt: "What should a crypto Ichimoku Cloud Trend lesson check before the trend read is trusted?",
    options: [
      "Price location versus the cloud, Tenkan/Kijun context, chop risk, and liquidity depth.",
      "A fixed Gold wick rule with no cloud context.",
      "One fast candle above any line.",
      "A Forex session rule by itself.",
    ],
    correctIndex: 0,
    explanation: "The cloud, Tenkan/Kijun context, and crypto depth help separate organized trend from noisy chop.",
  },
  {
    id: "c9404e89-906b-4f46-bac1-f79b81afd047",
    expectedName: "Time-Stop Breakout (Opening Range Breakout)",
    expectedAsset: "FOREX",
    moduleNumber: "4.13",
    domain: "forex",
    prompt: "What makes the Forex time-stop opening-range breakout valid for study?",
    options: [
      "Opening-range high and low, breakout close, retest, time expiry, spread, and pip distance.",
      "Any late break after the active window has passed.",
      "A crypto liquidity-depth rule with no range.",
      "Gold wick behavior without a clock rule.",
    ],
    correctIndex: 0,
    explanation: "The time-stop version needs both range acceptance and a clock boundary; late breaks are treated differently.",
  },
  {
    id: "fbb12542-43c5-4d36-a72a-79d719c61b1e",
    expectedName: "VWAP Reversion",
    expectedAsset: "GOLD",
    moduleNumber: "2.2",
    domain: "gold",
    prompt: "What should a Gold VWAP Reversion example show?",
    options: [
      "Stretch away from VWAP, wick rejection, acceptance back toward value, and point or dollar distance.",
      "A currency-pair distance rule.",
      "A crypto pair-spread relationship.",
      "A moving-average crossover with no VWAP.",
    ],
    correctIndex: 0,
    explanation: "Gold VWAP reversion studies distance from value, rejection, and a return path toward VWAP.",
  },
  {
    id: "71ea8d75-0c8b-4f78-9a22-7a266c61f99a",
    expectedName: "VWAP Reversion (Intraday)",
    expectedAsset: "GOLD",
    moduleNumber: "2.2",
    domain: "gold",
    prompt: "What separates intraday Gold VWAP Reversion from the base version?",
    options: [
      "A 5m or 15m VWAP stretch, fast wick reaction, quick return path, and continuation trap.",
      "A 1H-only swing plan.",
      "Crypto exchange-depth analysis alone.",
      "A fixed distance count with no VWAP.",
    ],
    correctIndex: 0,
    explanation: "The intraday version focuses on fast stretch, fast reaction, and quick failure behavior around VWAP.",
  },
  {
    id: "896bbc6c-a676-4832-a505-d06f023ecfe8",
    expectedName: "Stochastic Oscillator Strategy",
    expectedAsset: "CRYPTO",
    moduleNumber: "2.2",
    domain: "crypto",
    prompt: "What should the crypto Stochastic Oscillator lesson combine?",
    options: [
      "Range context, Stochastic extreme, price reaction, liquidity depth, and spread percentage.",
      "A currency-pair distance rule.",
      "Gold pivot levels only.",
      "A trend continuation read with no range.",
    ],
    correctIndex: 0,
    explanation: "The oscillator is useful only when the range location, price reaction, and crypto depth all remain readable.",
  },
  {
    id: "ac3db937-ed95-49ff-a3ac-440915dc48d4",
    expectedName: "Oscillator Range Trading",
    expectedAsset: "FOREX",
    moduleNumber: "2.2",
    domain: "forex",
    prompt: "What is the correct Forex Oscillator Range Trading sequence?",
    options: [
      "Mark the range edge, wait for oscillator stretch, check the candle reaction, then study the mid-range path.",
      "Use the oscillator anywhere in the middle of the chart.",
      "Ignore spread and pip distance.",
      "Replace the range with a crypto venue rule.",
    ],
    correctIndex: 0,
    explanation: "The range boundary gives the oscillator stretch a useful location, then the learner studies reaction toward the range center.",
  },
  {
    id: "09452fe9-a557-4cf7-9487-ab6d97e296dc",
    expectedName: "Commodity Channel Index (CCI) Strategy",
    expectedAsset: "CRYPTO",
    moduleNumber: "2.2",
    domain: "crypto",
    prompt: "What should a crypto CCI reversion lesson watch?",
    options: [
      "CCI extreme, zero baseline, price stretch, acceptance back toward the baseline, and liquidity depth.",
      "A currency-pair distance count.",
      "Gold wick behavior with no oscillator.",
      "Every CCI extreme as an instant reversal.",
    ],
    correctIndex: 0,
    explanation: "CCI gives stretch context, but the chart still needs price acceptance and crypto liquidity checks.",
  },
  {
    id: "5168cf28-ed10-49ba-b5ac-04027f62d10f",
    expectedName: "Bollinger Band Mean Reversion",
    expectedAsset: "FOREX",
    moduleNumber: "2.2",
    domain: "forex",
    prompt: "What should the Forex Bollinger Band Mean Reversion lesson emphasize?",
    options: [
      "Range shelf, outer-band stretch, close back inside, middle-band path, spread, and pip distance.",
      "A crypto squeeze breakout checklist.",
      "Gold wick language with no Forex pair context.",
      "A trend continuation read after widening bands.",
    ],
    correctIndex: 0,
    explanation: "This Forex version studies range exhaustion and the path back toward the middle band, not breakout expansion.",
  },
  {
    id: "9c8618dd-956a-422f-8d1c-6cfe817917bc",
    expectedName: "VWAP Reversion (Swing)",
    expectedAsset: "GOLD",
    moduleNumber: "2.2",
    domain: "gold",
    prompt: "What should the swing Gold VWAP Reversion version include?",
    options: [
      "1H or 4H VWAP distance, broader Gold structure, rejection area, and slower return path.",
      "A 1m-only snapback.",
      "A currency-pair distance rule.",
      "A crypto OBV disagreement model.",
    ],
    correctIndex: 0,
    explanation: "The swing version needs broader structure because Gold can stay away from VWAP longer.",
  },
  {
    id: "491edc5b-bddb-4980-aca3-fbcf994476aa",
    expectedName: "Moving Average Crossover (20/50 EMA)",
    expectedAsset: "GOLD",
    moduleNumber: "2.4",
    domain: "gold",
    prompt: "What should a Gold 20/50 EMA crossover lesson check?",
    options: [
      "20 EMA and 50 EMA relationship, close quality, Gold wick behavior, and nearby structure.",
      "A crypto liquidity-depth rule with no moving averages.",
      "A fixed currency-pair distance rule.",
      "VWAP distance only.",
    ],
    correctIndex: 0,
    explanation: "The crossover needs the EMA relationship plus Gold-specific wick and structure context.",
  },
  {
    id: "4f2b4372-fa9c-4784-8412-fcf2df377532",
    expectedName: "ATR Channel Trend",
    expectedAsset: "CRYPTO",
    moduleNumber: "5.2",
    domain: "crypto",
    prompt: "What is the core read in crypto ATR Channel Trend?",
    options: [
      "ATR channel midline, trend-side closes, pullback behavior, liquidity depth, slippage, and spread percentage.",
      "A fixed currency-pair stop idea.",
      "Gold VWAP stretch.",
      "Every channel touch as a trade decision.",
    ],
    correctIndex: 0,
    explanation: "The ATR channel version studies organized crypto trend behavior while checking volatility and depth.",
  },
  {
    id: "9f6d1a0b-a564-4c0d-b020-9e4a283b7769",
    expectedName: "RSI Mean Reversion",
    expectedAsset: "FOREX",
    moduleNumber: "2.2",
    domain: "forex",
    prompt: "What makes the Forex RSI Mean Reversion lesson valid for study?",
    options: [
      "Range edge, RSI extreme, price reaction, middle-range path, spread, and pip distance.",
      "A crypto depth rule with no range edge.",
      "Gold wick behavior alone.",
      "RSI momentum continuation only.",
    ],
    correctIndex: 0,
    explanation: "The Forex version needs a range edge plus RSI stretch and price reaction, not RSI alone.",
  },
  {
    id: "5b7e4b4c-8300-46e4-a94d-e29a35b462c6",
    expectedName: "Moving Average Mean Reversion",
    expectedAsset: "FOREX",
    moduleNumber: "2.2",
    domain: "forex",
    prompt: "What should Moving Average Mean Reversion teach on a Forex pair?",
    options: [
      "Stretch away from the moving average, candle reaction, return path to the average, spread, and pip distance.",
      "A Gold pivot breakout.",
      "A crypto venue-volume spike.",
      "A moving-average crossover with no reversion path.",
    ],
    correctIndex: 0,
    explanation: "The moving average acts as a mean reference only after price stretch and reaction are visible.",
  },
  {
    id: "a496e436-5752-4d1b-912b-a0632538e362",
    expectedName: "Volume-Price Confirmation",
    expectedAsset: "CRYPTO",
    moduleNumber: "3.9",
    domain: "crypto",
    prompt: "What should crypto Volume-Price Confirmation compare?",
    options: [
      "Price close quality, relative volume, exchange participation, liquidity depth, and false spike risk.",
      "A currency-pair distance rule.",
      "Gold VWAP only.",
      "Volume without price structure.",
    ],
    correctIndex: 0,
    explanation: "The lesson is price plus participation; volume should support structure rather than replace it.",
  },
  {
    id: "cbe17918-f93f-48b5-be05-f3ab3c52856d",
    expectedName: "Moving Average Crossover (20/50 EMA) (Intraday)",
    expectedAsset: "GOLD",
    moduleNumber: "2.4",
    domain: "gold",
    prompt: "What distinguishes the intraday Gold 20/50 EMA crossover?",
    options: [
      "5m or 15m EMA cross, first pullback or retest, fast wick trap, and nearby Gold structure.",
      "A 4H-only swing reading.",
      "A crypto OBV divergence.",
      "A fixed currency-pair distance count.",
    ],
    correctIndex: 0,
    explanation: "The intraday version studies a faster EMA cross and quick Gold wick traps around the first pullback.",
  },
  {
    id: "2938cc1e-8a69-49e8-965e-e69a513b4585",
    expectedName: "On-Balance Volume (OBV) Divergence",
    expectedAsset: "CRYPTO",
    moduleNumber: "3.9",
    domain: "crypto",
    prompt: "What should crypto OBV Divergence require before the lesson is trusted?",
    options: [
      "Price direction disagreeing with OBV, a confirmation close, liquidity depth, and spread percentage.",
      "OBV disagreement with no price confirmation.",
      "A currency-pair range rule.",
      "Gold pivot wick behavior.",
    ],
    correctIndex: 0,
    explanation: "OBV disagreement is only context until price confirms that participation has changed.",
  },
  {
    id: "a2a911c8-dc7b-46b1-9c5f-ed8e64960adc",
    expectedName: "Pairs Trading (Cointegration)",
    expectedAsset: "FOREX",
    moduleNumber: "5.13",
    domain: "forex",
    prompt: "What makes Forex Pairs Trading (Cointegration) different from a single-chart lesson?",
    options: [
      "Two related currency pairs, normal spread band, divergence, convergence path, correlation-break risk, spread, and pip distance.",
      "One candle on one pair.",
      "Gold wick rejection only.",
      "A crypto exchange-depth model with no pair relationship.",
    ],
    correctIndex: 0,
    explanation: "Cointegration lessons compare a relationship between two Forex pairs and warn when that relationship breaks.",
  },
  {
    id: "c4e518fc-2de6-4a2d-a8af-5b2c5f552b02",
    expectedName: "Moving Average Crossover (20/50 EMA) (Swing)",
    expectedAsset: "GOLD",
    moduleNumber: "2.4",
    domain: "gold",
    prompt: "What should the swing Gold 20/50 EMA crossover include?",
    options: [
      "1H or 4H EMA cross, broader Gold structure, pullback area, and wick-failure risk.",
      "A 1m-only chart.",
      "A currency-pair range model.",
      "Crypto venue-volume without EMAs.",
    ],
    correctIndex: 0,
    explanation: "The swing version needs a broader timeframe and Gold structure around the EMA relationship.",
  },
  {
    id: "2babbc7c-e5c3-46b3-95b6-7471ec64552f",
    expectedName: "VWAP Trend Reversal",
    expectedAsset: "CRYPTO",
    moduleNumber: "2.4",
    domain: "crypto",
    prompt: "What should crypto VWAP Trend Reversal show?",
    options: [
      "Price losing one VWAP side, accepting on the other side, retesting VWAP, and checking depth plus slippage.",
      "Every quick VWAP touch as a reversal.",
      "A currency-pair distance rule.",
      "Gold wick rejection with no VWAP.",
    ],
    correctIndex: 0,
    explanation: "The reversal requires a value-side shift, retest, and crypto liquidity checks.",
  },
  {
    id: "af3efe3a-7f29-4f8d-a884-137a875c48e6",
    expectedName: "Bollinger Band Squeeze Reversion",
    expectedAsset: "FOREX",
    moduleNumber: "2.2",
    domain: "forex",
    prompt: "What is the Forex Bollinger Band Squeeze Reversion sequence?",
    options: [
      "Compressed bands, failed squeeze break, close back inside, middle-band snapback path, spread, and pip distance.",
      "A crypto squeeze breakout continuation checklist.",
      "Gold wick behavior with no Forex pair context.",
      "A fixed outcome after any band touch.",
    ],
    correctIndex: 0,
    explanation: "This version studies a failed break after compression and a return toward the middle band.",
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
    throw new Error("Batch 81-100 seed list contains duplicate strategy IDs.");
  }
  for (const target of BATCH_81_100_TARGETS) {
    if (!targetIdSet.has(target.id)) {
      throw new Error(`Batch 81-100 seed list missing target: ${target.ordinal} ${target.id}`);
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
    throw new Error(`Batch 81-100 curriculum seed safety stop:\n${problems.join("\n")}`);
  }

  console.log(dryRun ? "--- DRY RUN: no database writes ---" : "--- APPLYING Batch 81-100 curriculum map ---");
  console.table(SEEDS.map((seed, index) => {
    const strategy = strategyById.get(seed.id)!;
    const module = moduleByNumber.get(seed.moduleNumber)!;
    return {
      order: index + 1,
      ordinal: BATCH_81_100_TARGETS.find(target => target.id === seed.id)?.ordinal,
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

  console.log(dryRun ? "--- DRY RUN COMPLETE ---" : "--- BATCH 81-100 CURRICULUM MAP APPLIED ---");
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
