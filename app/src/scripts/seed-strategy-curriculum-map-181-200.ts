import { PrismaClient, QuestionType } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import {
  getLegacyStrategyCode,
  getStrategyLevel,
  getVaultStrategyRef,
} from "../lib/strategy-curriculum";
import { BATCH_181_200_TARGETS, namesMatchExpected } from "./strategy-override-rules";

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
    id: "17c0e353-851e-476a-90a7-dfe1b887ab9a",
    expectedName: "Inside Bar Breakout",
    expectedAsset: "GOLD",
    moduleNumber: "0.4",
    domain: "gold",
    prompt: "What defines the base Gold Inside Bar Breakout lesson?",
    options: [
      "A mother-bar high and low, a smaller candle inside it, an outside close, a failed return inside, and Gold point or dollar distance.",
      "A currency-pair distance rule with no candle range.",
      "A crypto derivatives dashboard with no candles.",
      "One small candle without a mother bar.",
    ],
    correctIndex: 0,
    explanation: "The mother bar defines compression; the close and failed return show expansion quality.",
  },
  {
    id: "62bbe664-99c8-414c-b90f-067e11a65560",
    expectedName: "Open Interest Confirmation",
    expectedAsset: "CRYPTO",
    moduleNumber: "6.13",
    domain: "crypto",
    prompt: "How should crypto open interest be interpreted?",
    options: [
      "Together with price direction, crowding, liquidation risk, venue agreement, depth, and spread percentage.",
      "As automatically bullish whenever it rises.",
      "As automatically bearish whenever it falls.",
      "Using currency-pair distance as the main measure.",
    ],
    correctIndex: 0,
    explanation: "Open interest measures derivatives participation; price direction and crowding determine the context.",
  },
  {
    id: "773d3bad-457f-41c1-92dd-884ee8dbd81f",
    expectedName: "Rectangle (Range) Pattern",
    expectedAsset: "FOREX",
    moduleNumber: "2.2",
    domain: "forex",
    prompt: "What makes a Forex rectangle pattern readable?",
    options: [
      "Flat upper and lower boundaries, repeated reactions, midpoint, outside close, retest, failed return inside, spread, sessions, and pip distance.",
      "One diagonal line with no lower boundary.",
      "A Gold wick-only example.",
      "An open-interest chart with no price range.",
    ],
    correctIndex: 0,
    explanation: "A rectangle is a defended two-sided range before it is a breakout pattern.",
  },
  {
    id: "378e3397-aba4-4a8d-ab61-eb61d0b04449",
    expectedName: "Trendline Bounce",
    expectedAsset: "FOREX",
    moduleNumber: "2.3",
    domain: "forex",
    prompt: "What should confirm a Forex Trendline Bounce study?",
    options: [
      "Multiple prior touches, horizontal structure agreement, a reaction close, failed hold, spread, sessions, and pip distance.",
      "A newly drawn line after the move completes.",
      "A line with no swing reactions.",
      "Crypto token supply data only.",
    ],
    correctIndex: 0,
    explanation: "The trendline is a visual guide that needs repeated reactions and price confirmation.",
  },
  {
    id: "39048402-2630-489c-b6c2-311b71ebb82a",
    expectedName: "Inside Bar Breakout (Intraday)",
    expectedAsset: "GOLD",
    moduleNumber: "0.4",
    domain: "gold",
    prompt: "What separates intraday Gold Inside Bar Breakout study?",
    options: [
      "5m/15m mother-bar compression, a prompt outside close, fast wick traps, and point or dollar distance.",
      "A 4H-only chart with no short-timeframe reaction.",
      "Currency-pair distance wording.",
      "A token unlock schedule.",
    ],
    correctIndex: 0,
    explanation: "The intraday version emphasizes fast Gold wick behavior and immediate close quality.",
  },
  {
    id: "d183a7a5-29df-432e-a23c-3bf6a14400e1",
    expectedName: "Bull/Bear Market Condition Adjustment",
    expectedAsset: "CRYPTO",
    moduleNumber: "6.1",
    domain: "crypto",
    prompt: "What is the purpose of crypto market-condition adjustment?",
    options: [
      "Choose an accept, reduce, or stand-aside branch from higher-timeframe structure, volatility, and liquidity.",
      "Use the same setup rule in every environment.",
      "Classify the market from the latest candle only.",
      "Replace structure with social excitement.",
    ],
    correctIndex: 0,
    explanation: "Branching logic changes the lesson response when the market moves between trend, range, and transition.",
  },
  {
    id: "0c18fc0d-df61-4c45-9b77-f4b2929333b6",
    expectedName: "Break of Structure (BOS)",
    expectedAsset: "FOREX",
    moduleNumber: "2.5",
    domain: "forex",
    prompt: "What separates a continuation BOS from a false swing break?",
    options: [
      "A protected swing, body close beyond it in the established direction, displacement, retest, spread, sessions, and pip distance.",
      "Any wick beyond any recent candle.",
      "An opposing swing break labeled as continuation.",
      "An order block added without displacement.",
    ],
    correctIndex: 0,
    explanation: "BOS continues established structure and requires accepted movement beyond a protected swing.",
  },
  {
    id: "6d7b9fdd-3d1c-44fc-b919-25709c628128",
    expectedName: "Narrative Rotation Strategy",
    expectedAsset: "CRYPTO",
    moduleNumber: "6.2",
    domain: "crypto",
    prompt: "What supports a crypto narrative-rotation reading?",
    options: [
      "Sector relative strength, broad-market context, breadth, catalyst freshness, liquidity migration, and crowding checks.",
      "One popular social post.",
      "A sector name without comparative strength.",
      "Currency-pair distance wording.",
    ],
    correctIndex: 0,
    explanation: "Rotation requires relative participation and liquidity, not a story by itself.",
  },
  {
    id: "e05b5b76-ce6c-49d8-bf1e-5ebddf183b99",
    expectedName: "Inside Bar Breakout (Swing)",
    expectedAsset: "GOLD",
    moduleNumber: "0.4",
    domain: "gold",
    prompt: "What separates swing Gold Inside Bar Breakout study?",
    options: [
      "1H/4H mother-bar structure, patient outside-close confirmation, broader invalidation, wick behavior, and point or dollar distance.",
      "A 1m candle with no swing context.",
      "A currency-pair distance checklist.",
      "An open-interest-only decision.",
    ],
    correctIndex: 0,
    explanation: "The swing version uses a wider structural range and slower confirmation.",
  },
  {
    id: "1fe45d70-50cc-4ef2-9185-4fc4429a1e98",
    expectedName: "Order Block Trading",
    expectedAsset: "FOREX",
    moduleNumber: "3.1",
    domain: "forex",
    prompt: "What makes a Forex candle a valid order-block candidate?",
    options: [
      "It is the last opposing candle before displacement, aligned with protected structure, with a defined boundary, mean threshold, mitigation return, and invalidation.",
      "It is any candle before price rises.",
      "It is any horizontal support line.",
      "It has no displacement or structure context.",
    ],
    correctIndex: 0,
    explanation: "Structure and displacement distinguish an order block from an ordinary candle.",
  },
  {
    id: "36d8a014-9f12-4186-8647-2d1d56db984d",
    expectedName: "Head and Shoulders",
    expectedAsset: "GOLD",
    moduleNumber: "2.3",
    domain: "gold",
    prompt: "What completes the base Gold Head and Shoulders pattern?",
    options: [
      "Left shoulder, head, right shoulder, neckline, neckline close, failed reclaim, wick behavior, and point or dollar distance.",
      "A head with no shoulders.",
      "Three candles with no neckline.",
      "Currency-pair distance wording.",
    ],
    correctIndex: 0,
    explanation: "The neckline close completes the pattern; the shoulders alone do not.",
  },
  {
    id: "4c8f6a4b-af9e-437e-82ad-f8e828f8ef96",
    expectedName: "Ecosystem Growth Play",
    expectedAsset: "CRYPTO",
    moduleNumber: "8.13",
    domain: "crypto",
    prompt: "What should a crypto ecosystem-growth audit compare?",
    options: [
      "Relative user or address activity, applications, fees, liquidity growth, valuation context, data quality, and concentration.",
      "One promotional metric.",
      "Only the token price candle.",
      "Currency-pair distance.",
    ],
    correctIndex: 0,
    explanation: "Durable growth should appear across several independent usage and liquidity measures.",
  },
  {
    id: "26c5db92-6c85-4d96-83ff-36f8a59fb86d",
    expectedName: "Tokenomics Supply-Demand Strategy",
    expectedAsset: "CRYPTO",
    moduleNumber: "8.13",
    domain: "crypto",
    prompt: "What belongs in a crypto tokenomics supply-demand audit?",
    options: [
      "Circulating supply, emissions, burns or sinks, staking lockups, concentration, unlock pressure, demand use, and liquidity depth.",
      "Maximum supply by itself.",
      "A candle pattern with no supply data.",
      "Forex session timing as the main input.",
    ],
    correctIndex: 0,
    explanation: "Token supply matters only alongside release mechanics, concentration, demand, and absorption capacity.",
  },
  {
    id: "822b522b-86d9-4534-92f5-42680c6b15fe",
    expectedName: "Head and Shoulders (Intraday)",
    expectedAsset: "GOLD",
    moduleNumber: "2.3",
    domain: "gold",
    prompt: "What separates intraday Gold Head and Shoulders study?",
    options: [
      "5m/15m shoulders, neckline close, fast retest or wick trap, and point or dollar distance.",
      "A weekly-only pattern.",
      "A tokenomics dashboard.",
      "Currency-pair distance wording.",
    ],
    correctIndex: 0,
    explanation: "The intraday version emphasizes quick neckline tests and Gold wick traps.",
  },
  {
    id: "a33198d7-8070-46ac-8a80-e281ff9e10d4",
    expectedName: "Liquidity Sweep (Stop-Hunt) Setup",
    expectedAsset: "FOREX",
    moduleNumber: "2.9",
    domain: "forex",
    prompt: "What separates a Forex liquidity sweep from a valid breakout?",
    options: [
      "Price moves beyond a prior boundary but closes back inside and displaces away, with spread, sessions, and pip distance checked.",
      "Price closes and holds outside the boundary.",
      "Any wick anywhere on the chart.",
      "A moving-average cross with no boundary.",
    ],
    correctIndex: 0,
    explanation: "The close back inside is the key distinction between a sweep and accepted breakout.",
  },
  {
    id: "3899648c-0e28-400b-b87c-ec80668ed316",
    expectedName: "Quasimodo (Over and Under) Pattern",
    expectedAsset: "FOREX",
    moduleNumber: "2.5",
    domain: "forex",
    prompt: "What defines a Forex Quasimodo reversal sequence?",
    options: [
      "A final extreme, break of the opposing swing, return to the earlier shoulder level, invalidation beyond the extreme, spread, sessions, and pip distance.",
      "Any uneven head-and-shoulders shape.",
      "A trendline touch without a structure break.",
      "A crypto supply event.",
    ],
    correctIndex: 0,
    explanation: "The opposing swing break and shoulder return distinguish Quasimodo from a generic pattern.",
  },
  {
    id: "46ba778f-d91d-4eba-8bd3-3d5c8c38d32b",
    expectedName: "Token Unlock Event Trading",
    expectedAsset: "CRYPTO",
    moduleNumber: "8.13",
    domain: "crypto",
    prompt: "What should be reviewed for a crypto token-unlock event?",
    options: [
      "Unlock percentage of circulating supply, recipient type, vesting, liquid supply, expectations, absorption, depth, and spread percentage.",
      "Assume every unlock has the same outcome.",
      "Ignore whether the event was expected.",
      "Use currency-pair distance as the main measure.",
    ],
    correctIndex: 0,
    explanation: "Unlock impact depends on who receives supply, how liquid it becomes, and whether the market absorbs it.",
  },
  {
    id: "8cb41197-3710-4d11-9487-9031d1bb450c",
    expectedName: "Head and Shoulders (Swing)",
    expectedAsset: "GOLD",
    moduleNumber: "2.3",
    domain: "gold",
    prompt: "What separates swing Gold Head and Shoulders study?",
    options: [
      "1H/4H shoulder structure, neckline close, broad retest, wider invalidation, wick behavior, and point or dollar distance.",
      "A 1m pattern with no larger structure.",
      "Currency-pair distance wording.",
      "A social-sentiment chart only.",
    ],
    correctIndex: 0,
    explanation: "The swing version needs broader structure and patient neckline confirmation.",
  },
  {
    id: "09ce5a31-c2c0-4a1c-b272-13fa0dbe00f2",
    expectedName: "Double Top/Bottom",
    expectedAsset: "GOLD",
    moduleNumber: "2.3",
    domain: "gold",
    prompt: "What completes a Gold Double Top/Bottom lesson?",
    options: [
      "Two comparable peaks or troughs, neckline, neckline close, failed reclaim, wick behavior, and point or dollar distance.",
      "Two unrelated candles without a neckline.",
      "A crypto derivatives input only.",
      "Currency-pair distance wording.",
    ],
    correctIndex: 0,
    explanation: "The neckline reaction determines whether the repeated Gold boundary became a completed pattern.",
  },
  {
    id: "bb1d502b-ce6f-440a-a81f-2d606e80dd00",
    expectedName: "Halving Cycle Strategy",
    expectedAsset: "CRYPTO",
    moduleNumber: "8.13",
    domain: "crypto",
    prompt: "How should a crypto halving cycle be taught?",
    options: [
      "As an issuance-change scenario checked against anticipation, miner pressure, liquidity, macro context, crowding, and cycle uncertainty.",
      "As a fixed timetable for price appreciation.",
      "As identical to every prior cycle.",
      "Using currency-pair distance.",
    ],
    correctIndex: 0,
    explanation: "The issuance change is known, but market expectations and surrounding conditions determine the observed response.",
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
  if (apply && explicitDryRun) throw new Error("Use either --apply or --dry-run, not both.");

  const dryRun = !apply;
  const targetIds = SEEDS.map(seed => seed.id);
  const targetIdSet = new Set(targetIds);
  if (targetIdSet.size !== SEEDS.length) throw new Error("Batch 181-200 seed list contains duplicate strategy IDs.");
  for (const target of BATCH_181_200_TARGETS) {
    if (!targetIdSet.has(target.id)) throw new Error(`Batch 181-200 seed list missing target: ${target.ordinal} ${target.id}`);
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
      select: { id: true, level: true, moduleNumber: true, title: true, logicIds: true },
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
    if (!namesMatchExpected(strategy.name, seed.expectedName)) problems.push(`${seed.id} name expected "${seed.expectedName}" but found "${strategy.name}"`);
    if (strategy.assetClass !== seed.expectedAsset) problems.push(`${seed.id} asset expected ${seed.expectedAsset} but found ${strategy.assetClass}`);
    if (!strategy.learningProfile) problems.push(`${seed.id} is missing learningProfile`);
    if (!strategy.visualModel) problems.push(`${seed.id} is missing visualModel`);
  }
  if (problems.length > 0) throw new Error(`Batch 181-200 curriculum seed safety stop:\n${problems.join("\n")}`);

  console.log(dryRun ? "--- DRY RUN: no database writes ---" : "--- APPLYING Batch 181-200 curriculum map ---");
  console.table(SEEDS.map((seed, index) => {
    const strategy = strategyById.get(seed.id)!;
    const module = moduleByNumber.get(seed.moduleNumber)!;
    return {
      order: index + 1,
      ordinal: BATCH_181_200_TARGETS.find(target => target.id === seed.id)?.ordinal,
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
    if (!dryRun && addedRefs.length > 0) {
      await prisma.courseModule.update({ where: { id: module.id }, data: { logicIds: nextLogicIds } });
    }
  }

  for (const seed of SEEDS) {
    const strategy = strategyById.get(seed.id)!;
    const module = moduleByNumber.get(seed.moduleNumber)!;
    const questionId = questionIdFor(seed.id);
    console.log(`${dryRun ? "Would upsert" : "Upserting"} exam question ${questionId} (L${module.level}, ${getVaultStrategyRef(seed.id)}, ${strategy.name})`);
    if (!dryRun) {
      const question = {
        level: module.level,
        type: QuestionType.MCQ,
        domain: seed.domain,
        logicId: getVaultStrategyRef(seed.id),
        prompt: seed.prompt,
        options: seed.options,
        correctIndex: seed.correctIndex,
        explanation: seed.explanation,
      };
      await prisma.examQuestion.upsert({
        where: { id: questionId },
        create: { id: questionId, ...question },
        update: {
          ...question,
          matchingLeft: [],
          matchingRight: [],
          chartState: undefined,
          targetX: null,
          targetY: null,
          tolerance: null,
        },
      });
    }
  }

  console.log(dryRun ? "Dry run complete: no curriculum writes." : "Batch 181-200 curriculum map applied.");
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
