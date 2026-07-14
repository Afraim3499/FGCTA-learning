import { PrismaClient, QuestionType } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import {
  getLegacyStrategyCode,
  getStrategyLevel,
  getVaultStrategyRef,
} from "../lib/strategy-curriculum";
import { BATCH_141_160_TARGETS, namesMatchExpected } from "./strategy-override-rules";

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
    id: "e8bb2d7c-bd97-422f-b23e-0d4f12a148f0",
    expectedName: "Flag and Pennant Continuation",
    expectedAsset: "CRYPTO",
    moduleNumber: "2.9",
    domain: "crypto",
    prompt: "What should the crypto Flag and Pennant Continuation lesson show?",
    options: [
      "Flagpole impulse, tight flag or pennant boundary, breakout close, failed break back inside, and liquidity depth.",
      "A model output with no chart pattern boundary.",
      "A Gold support bounce using point distance only.",
      "A Forex doji with no prior impulse.",
    ],
    correctIndex: 0,
    explanation: "The pattern teaches compression after an impulse, then checks whether the crypto break is accepted outside the boundary.",
  },
  {
    id: "0bbc3d75-52e1-4a9c-b3ac-55e1fe9fd428",
    expectedName: "Pin Bar Reversal",
    expectedAsset: "FOREX",
    moduleNumber: "0.4",
    domain: "forex",
    prompt: "What gives a Forex Pin Bar Reversal teaching value?",
    options: [
      "Long wick, small body, close location, support/resistance context, spread, session context, and pip distance.",
      "ADX and +DI/-DI lines only.",
      "Crypto venue depth without a candle shape.",
      "Gold dollar distance without Forex context.",
    ],
    correctIndex: 0,
    explanation: "The candle anatomy matters only when the wick rejection appears at a meaningful Forex level with clean distance context.",
  },
  {
    id: "8d7c44ff-e6d2-4a54-9b2c-c95500ff5db3",
    expectedName: "DMI/ADX Trend System (Swing)",
    expectedAsset: "GOLD",
    moduleNumber: "2.4",
    domain: "gold",
    prompt: "What should swing Gold DMI/ADX include?",
    options: [
      "1H/4H Gold structure, ADX threshold, +DI/-DI direction, wick/chop trap, and point or dollar distance.",
      "Currency-pair distance wording as the main Gold rule.",
      "A model validation split without ADX.",
      "A doji candle lesson with no indicator structure.",
    ],
    correctIndex: 0,
    explanation: "ADX shows trend strength, while +DI and -DI show direction; Gold wick behavior can still weaken the read.",
  },
  {
    id: "c488d87e-6dac-4bfd-a31a-8d87a0b0a7e7",
    expectedName: "ML Regression Price Prediction",
    expectedAsset: "CRYPTO",
    moduleNumber: "8.8",
    domain: "crypto",
    prompt: "How should a crypto ML regression strategy be taught?",
    options: [
      "As a model audit with features, prediction band, error band, validation split, overfitting trap, liquidity depth, and slippage.",
      "As a promise that the next price must follow the model.",
      "As a currency-pair candle pattern with pair-distance wording.",
      "As a Gold trendline retest with no data audit.",
    ],
    correctIndex: 0,
    explanation: "The lesson treats regression as a data-quality and validation exercise, not as certainty.",
  },
  {
    id: "2bd691f1-a274-49ad-9bda-f9a5091d953d",
    expectedName: "Inside Bar Breakout",
    expectedAsset: "FOREX",
    moduleNumber: "0.4",
    domain: "forex",
    prompt: "What should the Forex Inside Bar Breakout lesson mark?",
    options: [
      "Mother-bar high/low, inside candle, breakout close, failed close back inside, spread, session context, and pip distance.",
      "Crypto exchange depth as the only check.",
      "A Gold trendline without a mother bar.",
      "An optimization fitness score only.",
    ],
    correctIndex: 0,
    explanation: "The Forex version keeps the candle compression simple and adds Forex spread, session, and pip-distance context.",
  },
  {
    id: "37a2d848-4067-4cab-aea9-22942accd14e",
    expectedName: "Trendline Break and Retest",
    expectedAsset: "GOLD",
    moduleNumber: "2.9",
    domain: "gold",
    prompt: "What should Gold Trendline Break and Retest show?",
    options: [
      "Multiple trendline touches, break close, retest from the other side, wick fakeout, and point or dollar distance.",
      "Currency-pair distance wording as the main Gold distance unit.",
      "A sentiment model with no trendline.",
      "A doji candle without a break or retest.",
    ],
    correctIndex: 0,
    explanation: "The trendline needs evidence, then the retest decides whether the break is accepted or failed.",
  },
  {
    id: "db4c6526-26b2-40af-a05e-b110896e0822",
    expectedName: "Reinforcement Learning Trading Bot",
    expectedAsset: "CRYPTO",
    moduleNumber: "8.11",
    domain: "crypto",
    prompt: "What is the safest way to teach a crypto reinforcement-learning bot strategy?",
    options: [
      "As a policy audit with state, action, reward, validation, regime-shift trap, liquidity depth, slippage, and spread percentage.",
      "As a bot that should be trusted without review.",
      "As a Gold wick-only setup.",
      "As a currency-pair outside bar with pair-distance wording.",
    ],
    correctIndex: 0,
    explanation: "The lesson audits the model policy and checks whether the current crypto market still matches the training environment.",
  },
  {
    id: "13e2e541-7b63-45c6-996c-d94d3c8f4002",
    expectedName: "Sentiment-Driven ML Model",
    expectedAsset: "CRYPTO",
    moduleNumber: "8.13",
    domain: "crypto",
    prompt: "What should a crypto sentiment-driven ML lesson check?",
    options: [
      "Sentiment input quality, price disagreement, source filter, crowding trap, liquidity depth, slippage, and spread percentage.",
      "A currency-pair breakout as the whole lesson.",
      "A Gold trendline without sentiment data.",
      "A single social post with no source-quality review.",
    ],
    correctIndex: 0,
    explanation: "Sentiment is useful only after source quality, price context, and crowding risk are reviewed.",
  },
  {
    id: "56cefd7a-66e1-47c7-8c79-f7f6a48bb6da",
    expectedName: "Outside Bar (Engulfing) Reversal",
    expectedAsset: "FOREX",
    moduleNumber: "0.4",
    domain: "forex",
    prompt: "What should the Forex Outside Bar Reversal lesson require?",
    options: [
      "Prior candle high/low, engulfing outside range, close location, structure context, spread, session context, and pip distance.",
      "Crypto order-book queue only.",
      "Gold point distance without candle anatomy.",
      "A model error band only.",
    ],
    correctIndex: 0,
    explanation: "The outside bar must be read through candle anatomy and location, not size alone.",
  },
  {
    id: "6e0dfa2c-9900-451f-963d-e125f6027932",
    expectedName: "Trendline Break and Retest (Intraday)",
    expectedAsset: "GOLD",
    moduleNumber: "2.9",
    domain: "gold",
    prompt: "What separates intraday Gold Trendline Break and Retest?",
    options: [
      "5m/15m trendline touches, break close, fast retest, wick fakeout, failed return through the line, and point or dollar distance.",
      "A swing-only chart with no intraday context.",
      "Currency-pair distance wording as the Gold distance rule.",
      "A sentiment input with no chart line.",
    ],
    correctIndex: 0,
    explanation: "The intraday version studies faster Gold retests and sharper wick traps.",
  },
  {
    id: "15dbdfc0-e989-42a9-b0f6-a77e8d06d020",
    expectedName: "Doji & Indecision Candles",
    expectedAsset: "FOREX",
    moduleNumber: "0.4",
    domain: "forex",
    prompt: "What should the Forex Doji and Indecision Candles lesson show?",
    options: [
      "Small body, balanced wicks, location at support/resistance, confirmation close, spread, session context, and pip distance.",
      "A crypto latency audit only.",
      "A Gold DMI line without candle anatomy.",
      "A flagpole impulse with no doji.",
    ],
    correctIndex: 0,
    explanation: "A doji shows indecision; the next candle and location decide whether the pause has teaching value.",
  },
  {
    id: "4760bd42-6893-4d17-a9bc-c035cad770cc",
    expectedName: "Autoencoder Anomaly Detection",
    expectedAsset: "CRYPTO",
    moduleNumber: "8.8",
    domain: "crypto",
    prompt: "What should a crypto Autoencoder Anomaly Detection lesson focus on?",
    options: [
      "Normal behavior window, reconstruction error, anomaly threshold, false-anomaly trap, liquidity depth, slippage, and spread percentage.",
      "Currency-pair distance wording as the main metric.",
      "Gold trendline retest only.",
      "A model output with no error threshold.",
    ],
    correctIndex: 0,
    explanation: "The autoencoder lesson is about error versus normal behavior, then checking whether current liquidity makes the anomaly readable.",
  },
  {
    id: "ba9bf2f0-26eb-440a-a153-a80d2218f209",
    expectedName: "Trendline Break and Retest (Swing)",
    expectedAsset: "GOLD",
    moduleNumber: "2.9",
    domain: "gold",
    prompt: "What should swing Gold Trendline Break and Retest emphasize?",
    options: [
      "1H/4H trendline touches, break close, broader retest, wick fakeout, failed acceptance back through the line, and point or dollar distance.",
      "A fast 1m-only retest.",
      "Currency-pair distance wording.",
      "A crypto model validation split with no trendline.",
    ],
    correctIndex: 0,
    explanation: "The swing version uses broader structure and waits for acceptance around the retest.",
  },
  {
    id: "113a72a9-2f04-46da-bafd-08c347a1a124",
    expectedName: "Head & Shoulders Pattern",
    expectedAsset: "FOREX",
    moduleNumber: "2.3",
    domain: "forex",
    prompt: "What should the Forex Head and Shoulders Pattern lesson mark?",
    options: [
      "Left shoulder, head, right shoulder, neckline, breakdown close, failed reclaim, spread, session context, and pip distance.",
      "A single head with no neckline.",
      "Crypto venue latency only.",
      "Gold point distance as the Forex rule.",
    ],
    correctIndex: 0,
    explanation: "The neckline and failed reclaim make the pattern teachable after the shape is visible.",
  },
  {
    id: "751da8e5-388c-4b86-b07f-bc62c857d49a",
    expectedName: "Genetic Algorithm Strategy Optimization",
    expectedAsset: "CRYPTO",
    moduleNumber: "9.8",
    domain: "crypto",
    prompt: "What should crypto Genetic Algorithm Strategy Optimization avoid?",
    options: [
      "Overfitting by using train/test checks, fitness review, mutation/crossover context, liquidity depth, slippage, and spread percentage.",
      "Trusting the highest backtest score without validation.",
      "Currency-pair distance wording as the main check.",
      "Gold support bounce rules with no optimization audit.",
    ],
    correctIndex: 0,
    explanation: "Optimization must be judged by validation and robustness, not by the best historical score alone.",
  },
  {
    id: "b852376a-6ef1-4b1e-916b-58a2662cd68f",
    expectedName: "Support/Resistance Bounce",
    expectedAsset: "GOLD",
    moduleNumber: "2.2",
    domain: "gold",
    prompt: "What should Gold Support/Resistance Bounce show?",
    options: [
      "Reaction level, rejection wick, close away from the level, failed bounce through the level, and point or dollar distance.",
      "Currency-pair distance wording as the main Gold distance unit.",
      "A model validation split only.",
      "A crypto venue discrepancy with no support/resistance.",
    ],
    correctIndex: 0,
    explanation: "The lesson studies whether Gold rejects a visible level or starts accepting through it.",
  },
  {
    id: "b16a105b-3cfb-48d2-948f-3fedf1f6bde8",
    expectedName: "Double Top / Bottom",
    expectedAsset: "FOREX",
    moduleNumber: "2.3",
    domain: "forex",
    prompt: "What should the Forex Double Top / Bottom lesson mark?",
    options: [
      "Two comparable peaks or troughs, neckline, breakout or breakdown close, failed reclaim, spread, session context, and pip distance.",
      "One high or low with no neckline.",
      "Crypto order-book queue only.",
      "Gold point distance as the Forex rule.",
    ],
    correctIndex: 0,
    explanation: "The pattern needs comparable extremes and neckline behavior before it becomes useful.",
  },
  {
    id: "c4ec7eaf-7df9-4d0c-ba07-c1ac592fbd0c",
    expectedName: "Support/Resistance Bounce (Intraday)",
    expectedAsset: "GOLD",
    moduleNumber: "2.2",
    domain: "gold",
    prompt: "What separates intraday Gold Support/Resistance Bounce?",
    options: [
      "5m/15m reaction level, fast rejection wick, close away from the level, failed bounce, and point or dollar distance.",
      "A swing-only chart with no intraday context.",
      "Currency-pair distance wording as the Gold rule.",
      "A crypto model output only.",
    ],
    correctIndex: 0,
    explanation: "The intraday version focuses on faster Gold reactions and failed bounces around visible levels.",
  },
  {
    id: "eea0bc02-efbb-41f1-9d1c-3bb568c271f0",
    expectedName: "High-Frequency Market Making",
    expectedAsset: "CRYPTO",
    moduleNumber: "9.11",
    domain: "crypto",
    prompt: "What should a crypto High-Frequency Market Making lesson emphasize?",
    options: [
      "Bid/ask spread, order-book depth, queue risk, inventory imbalance, latency/slippage warning, toxic flow trap, and spread percentage.",
      "A simple candle pattern with no book depth.",
      "Currency-pair distance wording.",
      "Gold wick rejection as the only rule.",
    ],
    correctIndex: 0,
    explanation: "The lesson is a microstructure audit, not a retail execution instruction.",
  },
  {
    id: "9e3bc521-41aa-43b9-b0e2-34de7950fd84",
    expectedName: "Latency Arbitrage",
    expectedAsset: "CRYPTO",
    moduleNumber: "9.4",
    domain: "crypto",
    prompt: "What should a crypto Latency Arbitrage lesson audit?",
    options: [
      "Exchange price discrepancy, stale quote risk, execution delay, fee/slippage drag, venue depth, and spread percentage.",
      "Only the visible price gap without costs.",
      "Currency-pair distance wording.",
      "A Gold support bounce with no venue comparison.",
    ],
    correctIndex: 0,
    explanation: "The visible venue gap is not enough; delay, fees, slippage, and depth decide whether the read survives.",
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
    throw new Error("Batch 141-160 seed list contains duplicate strategy IDs.");
  }
  for (const target of BATCH_141_160_TARGETS) {
    if (!targetIdSet.has(target.id)) {
      throw new Error(`Batch 141-160 seed list missing target: ${target.ordinal} ${target.id}`);
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
    throw new Error(`Batch 141-160 curriculum seed safety stop:\n${problems.join("\n")}`);
  }

  console.log(dryRun ? "--- DRY RUN: no database writes ---" : "--- APPLYING Batch 141-160 curriculum map ---");
  console.table(SEEDS.map((seed, index) => {
    const strategy = strategyById.get(seed.id)!;
    const module = moduleByNumber.get(seed.moduleNumber)!;
    return {
      order: index + 1,
      ordinal: BATCH_141_160_TARGETS.find(target => target.id === seed.id)?.ordinal,
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

  console.log(dryRun ? "--- DRY RUN COMPLETE ---" : "--- BATCH 141-160 CURRICULUM MAP APPLIED ---");
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
