import fs from "fs";
import path from "path";

const level1Syllabus = [
  {
    num: "1.1",
    title: "Reading-to-Hypothesis Conversion",
    objective: "Convert raw chart readings into clear, falsifiable trade hypotheses without executing.",
    coreKeys: ["hypothesis-intro", "hypothesis-sentence-builder", "watch-vs-plan", "pass-fail-gate", "hypothesis-debrief"],
    fxKeys: ["forex-quote-pressure"],
    gdKeys: ["gold-zone-volatility"],
    crKeys: ["crypto-venue-btc"]
  },
  {
    num: "1.2",
    title: "Plan Eligibility Filter",
    objective: "Filter out low-probability configurations by verifying evidence thresholds.",
    coreKeys: ["filter-intro", "evidence-threshold", "unclear-reading-rejection", "weak-plan-warning", "filter-debrief"],
    fxKeys: ["forex-mixed-pressure-filter"],
    gdKeys: ["gold-spike-verification-filter"],
    crKeys: ["crypto-venue-disagreement-filter"]
  },
  {
    num: "1.3",
    title: "Setup Anatomy",
    objective: "Define the visual and technical layout of a structured trade setup.",
    coreKeys: ["trade-plan-rationale", "five-plan-pillars", "context-location-matrix", "invalidation-vs-target", "plan-validation-drill", "trade-plan-debrief"],
    fxKeys: ["forex-plan-session-windows", "forex-session-extremes-invalidation", "forex-dxy-correlation-matrix", "forex-session-target-mapping", "forex-plan-audit-drill", "forex-plan-debrief"],
    gdKeys: ["gold-plan-volatility-profile", "gold-wick-invalidation-buffer", "gold-yield-usd-overlay", "gold-atr-target-mapping", "gold-plan-validation-drill", "gold-plan-debrief"],
    crKeys: ["crypto-plan-continuous-markets", "crypto-liquidation-invalidation", "crypto-spot-perp-comparison", "crypto-funding-target-mapping", "crypto-plan-validation-drill", "crypto-plan-debrief"]
  },
  {
    num: "1.4",
    title: "Area of Interest",
    objective: "Map out clear reaction areas and ranges while avoiding entry in the middle.",
    coreKeys: ["planning-zone-intro", "aoi-mapping", "reaction-area-identification", "middle-zone-warning-drill", "aoi-debrief"],
    fxKeys: ["forex-session-aoi"],
    gdKeys: ["gold-wick-cluster-aoi"],
    crKeys: ["crypto-liquidity-pool-aoi"]
  },
  {
    num: "1.5",
    title: "Plan Context Requirement",
    objective: "Align the trade setup style with the dominant higher-timeframe condition.",
    coreKeys: ["plan-context-intro", "trend-plan-mapping", "range-plan-mapping", "breakout-plan-mapping", "plan-context-debrief"],
    fxKeys: ["forex-session-context-requirement"],
    gdKeys: ["gold-volatility-regime-requirement"],
    crKeys: ["crypto-btc-state-requirement"]
  },
  {
    num: "1.6",
    title: "Trigger Design",
    objective: "Structure clear triggers to activate a plan without treating them as certainty.",
    coreKeys: ["trigger-design-intro", "candle-trigger-mechanics", "level-trigger-mechanics", "timing-trigger-mechanics", "trigger-design-debrief"],
    fxKeys: ["forex-session-trigger"],
    gdKeys: ["gold-zone-reaction-trigger"],
    crKeys: ["crypto-venue-confirmed-trigger"]
  },
  {
    num: "1.7",
    title: "Confirmation Requirement",
    objective: "Establish structural verification criteria prior to final plan activation.",
    coreKeys: ["confirmation-intro", "close-quality-confirmation", "follow-through-confirmation", "failed-confirmation-trap", "confirmation-debrief"],
    fxKeys: ["forex-session-news-confirmation"],
    gdKeys: ["gold-wick-noise-filter"],
    crKeys: ["crypto-venue-quality-confirmation"]
  },
  {
    num: "1.8",
    title: "Plan Activation and Cancellation",
    objective: "Set explicit rules for when a trade plan becomes live or expires.",
    coreKeys: ["activation-cancellation-intro", "activation-rules", "cancellation-rules", "missed-plan-cancellation", "activation-cancellation-debrief"],
    fxKeys: ["forex-session-handoff-cancellation"],
    gdKeys: ["gold-macro-distortion-cancellation"],
    crKeys: ["crypto-liquidity-spike-cancellation"]
  },
  {
    num: "1.9",
    title: "Invalidation Planning",
    objective: "Define structural price boundaries where your trade hypothesis is proven wrong.",
    coreKeys: ["invalidation-anatomy", "trend-structure-invalidation", "range-extreme-invalidation", "structural-vs-time-invalidation", "mapping-invalidation-drill", "invalidation-debrief"],
    fxKeys: ["forex-invalidation-foundations", "forex-spread-safety-stops", "forex-dxy-invalidation-overlay", "forex-adr-stop-scaling", "forex-invalidation-drill-component", "forex-invalidation-debrief-component"],
    gdKeys: ["gold-invalidation-foundations", "gold-stop-sweep-buffers", "gold-yield-invalidation-overlay", "gold-stop-position-sizing", "gold-invalidation-drill-component", "gold-invalidation-debrief-component"],
    crKeys: ["crypto-invalidation-foundations", "crypto-spot-perp-stop-divergence", "crypto-weekend-vs-weekday-stops", "crypto-funding-risk-stops", "crypto-invalidation-drill-component", "crypto-invalidation-debrief-component"]
  },
  {
    num: "1.10",
    title: "Target Path Planning",
    objective: "Map out realistic structural exits rather than arbitrary profit projections.",
    coreKeys: ["target-anatomy", "structural-target-mapping", "timeframe-target-alignment", "fixed-vs-trailing-exits", "mapping-targets-drill", "target-debrief"],
    fxKeys: ["forex-target-foundations", "forex-session-liquidity-targets", "forex-dxy-target-overlay", "forex-adr-target-scaling-visual", "forex-target-drill-component", "forex-target-debrief-component"],
    gdKeys: ["gold-target-foundations", "gold-wick-targets", "gold-yield-target-overlay", "gold-target-ranges", "gold-target-drill-component", "gold-target-debrief-component"],
    crKeys: ["crypto-target-foundations", "crypto-ask-wall-targets", "crypto-spot-perp-target-peg", "crypto-funding-target-scaling", "crypto-target-drill-component", "crypto-target-debrief-component"]
  },
  {
    num: "1.11",
    title: "Timing Plan",
    objective: "Coordinate price zones with session timings and key volatility overlaps.",
    coreKeys: ["timing-plan-intro", "valid-timing-window", "dead-timing-window", "late-plan-warning", "timing-plan-debrief"],
    fxKeys: ["forex-timing-session-matrix"],
    gdKeys: ["gold-macro-release-timing"],
    crKeys: ["crypto-funding-window-timing"]
  },
  {
    num: "1.12",
    title: "Event Filter",
    objective: "Filter out plans during high-impact scheduled macroeconomic events.",
    coreKeys: ["event-filter-intro", "news-event-risk", "first-move-distortion-trap", "post-event-confirmation-rule", "event-filter-debrief"],
    fxKeys: ["forex-cpi-nfp-filter"],
    gdKeys: ["gold-yield-usd-news-filter"],
    crKeys: ["crypto-unlock-liquidation-filter"]
  },
  {
    num: "1.13",
    title: "Plan Quality Score",
    objective: "Assess the structural integrity and compliance of your plan before action.",
    coreKeys: ["plan-quality-intro", "grading-completeness", "grading-clarity", "grading-evidence-fit", "plan-quality-debrief"],
    fxKeys: ["forex-plan-score-sheet"],
    gdKeys: ["gold-plan-score-sheet"],
    crKeys: ["crypto-plan-score-sheet"]
  },
  {
    num: "1.14",
    title: "Full Plan Builder",
    objective: "Synthesize all planning fields into a complete, written trade setup.",
    coreKeys: ["synthesis-brief", "synthesis-checklist", "plan-builder-panel", "plan-audit-comparison"],
    fxKeys: ["forex-synthesis-brief", "forex-synthesis-checklist", "forex-plan-builder-panel", "forex-plan-audit-comparison"],
    gdKeys: ["gold-synthesis-brief", "gold-synthesis-checklist", "gold-plan-builder-panel", "gold-plan-audit-comparison"],
    crKeys: ["crypto-synthesis-brief", "crypto-synthesis-checklist", "crypto-plan-builder-panel", "crypto-plan-audit-comparison"]
  },
  {
    num: "1.15",
    title: "Level 1 Planning Mission",
    objective: "Consolidate your learning by submitting and defending a full trade plan.",
    coreKeys: ["level-1-gate-drill", "synthesis-debrief"],
    fxKeys: ["forex-level-1-gate-drill", "forex-synthesis-debrief"],
    gdKeys: ["gold-level-1-gate-drill", "gold-synthesis-debrief"],
    crKeys: ["crypto-level-1-gate-drill", "crypto-synthesis-debrief"]
  }
];

function generateDetailedCard(mNum: string, mTitle: string, track: string, cardIndex: number, visualKeys: string[], totalCards: number) {
  const isBrief = cardIndex === 1;
  const isSummary = cardIndex === totalCards;
  const isPractice = cardIndex === totalCards - 1;
  const vKey = visualKeys[(cardIndex - 1) % visualKeys.length] || "";
  const type = isBrief ? "mission_brief" : isSummary ? "summary" : isPractice ? "practice" : "concept";

  // Detailed track-specific content generators
  let title = `${mTitle} - ${track} Card ${cardIndex}`;
  let body = "";
  let keyTerms: { term: string; definition: string }[] = [];
  let whyThisMatters = "";
  let realLifeExample = "";
  let commonMistake = "";
  let quickNote = "";

  if (track === "Core") {
    title = `Core Concept ${cardIndex}: ${mTitle}`;
    body = `### Structured Planning Rationale\n\nIn Level 1, we learn the core discipline of **${mTitle}**. This lesson ensures that early-stage learners do not react to candles impulsively. Instead, we convert raw observations into a written hypothesis. This builds a repeatable process.\n\n* **Pillar Focus**: Ensure that every single planned zone has structural confirmation.\n* **Falsification Gating**: If the invalidation level is hit first, the setup is dead.`;
    keyTerms = [
      { term: "Hypothesis", definition: "A falsifiable planning statement outlining conditions for execution." },
      { term: "Observation", definition: "Identifying structures on the chart without assuming direction." }
    ];
    whyThisMatters = `A planned hypothesis keeps you out of random, unviable market noise.`;
    realLifeExample = `A learner observes price hitting support, writes down the trigger condition, and waits instead of executing immediately.`;
    commonMistake = `Chasing flickering green candles before the H4 close confirms structure.`;
    quickNote = `Observe structure, write the hypothesis, then wait.`;
  } else if (track === "Forex") {
    title = `Forex roadway: ${mTitle} (${cardIndex})`;
    body = `### Currency Relationship Adaptations\n\nIn Forex, currency pairs represent a relationship. The concept of **${mTitle}** changes because we must coordinate base and quote pressure. We cross-check the US Dollar Index (DXY) to verify whether pair movement is broadly supported.\n\n* **FX Gating**: Align session open hours (London/NY) with the planning zone.`;
    keyTerms = [
      { term: "DXY Alignment", definition: "Cross-checking the USD Index to verify base/quote pressure." },
      { term: "Session Overlap", definition: "High volume windows where London and New York sessions run concurrently." }
    ];
    whyThisMatters = `Forex moves are often DXY-driven. Ignoring this relationship yields poor context.`;
    realLifeExample = `Trading GBP/USD long is filtered out because DXY is coiling at major support, suggesting dollar strength.`;
    commonMistake = `Trading EUR/USD breakouts during quiet Tokyo consolidation hours.`;
    quickNote = `FX planning requires base, quote, and session checks.`;
  } else if (track === "Gold") {
    title = `Gold roadway: ${mTitle} (${cardIndex})`;
    body = `### Commodity Macro Adaptations\n\nGold (XAU/USD) is a highly volatile, macro-sensitive asset class. Implementing **${mTitle}** means we must coordinate yields and inflation expectations. We use Treasury yields as a fundamental filter.\n\n* **Gold Gating**: Filter out setups if yields are coiling at range extremes.`;
    keyTerms = [
      { term: "Real Yields", definition: "Interest rates adjusted for inflation; inversely correlated with Gold." },
      { term: "Wick Sweep", definition: "Rapid spikes through support to consume resting liquidity." }
    ];
    whyThisMatters = `Gold wicks are deep and fast. Stopping out prematurely occurs when wicks are ignored.`;
    realLifeExample = `Mapping an invalidation level 30 pips below obvious support to accommodate Gold's sweep volatility.`;
    commonMistake = `Using tight stop-losses suited for major currency pairs on Gold.`;
    quickNote = `Gold requires real yield correlation and wide sweep buffers.`;
  } else if (track === "Crypto") {
    title = `Crypto roadway: ${mTitle} (${cardIndex})`;
    body = `### Digital Asset Adaptation\n\nCrypto markets are fragmented across multiple CEX/DEX venues. The concept of **${mTitle}** requires checking BTC dominance and perpetual funding rates. We map the spot-perp premium.\n\n* **Crypto Gating**: Spot volume must support perp funding spikes.`;
    keyTerms = [
      { term: "Spot-Perp Premium", definition: "The price discrepancy between spot exchange and perpetual contract prices." },
      { term: "Liquidation Cascade", definition: "Forced stops triggering consecutive liquidations." }
    ];
    whyThisMatters = `Perpetual contracts trigger fakeouts. Check spot exchange support to filter noise.`;
    realLifeExample = `Filtering out a breakout plan on Bybit because Binance Spot shows no matching volume.`;
    commonMistake = `Planning altcoin longs while Bitcoin dominance is rising rapidly.`;
    quickNote = `Crypto planning requires spot support and funding checks.`;
  }

  const card: any = {
    type,
    title,
    label: `${track} Track Pillar`,
    visualKey: vKey,
    body,
    context: {
      keyTerms,
      whyThisMatters,
      realLifeExample,
      commonMistake,
      quickNote
    }
  };

  if (isPractice) {
    card.type = "practice";
    card.taskData = {
      type: "choice_block",
      question: `What is the disciplined ${track} response for ${mTitle}?`,
      options: [
        { id: "0", text: `Verify structural context first, write a plan, and wait for confirmation.`, isCorrect: true, feedback: "Correct! Deliberate process over quick reaction." },
        { id: "1", text: "React immediately to the candle spikes to prevent missing the move.", isCorrect: false, feedback: "Incorrect. Chasing is a gambler's trap." }
      ]
    };
  }

  return card;
}

function generateModuleContent(m: typeof level1Syllabus[0]) {
  const modDir = path.join(__dirname, "../src/content/level-1", `module-1-${m.num.split(".")[1]}`);
  if (!fs.existsSync(modDir)) {
    fs.mkdirSync(modDir, { recursive: true });
  }

  const coreCards = [];
  const forexCards = [];
  const goldCards = [];
  const cryptoCards = [];

  for (let i = 1; i <= 15; i++) {
    coreCards.push(generateDetailedCard(m.num, m.title, "Core", i, m.coreKeys, 15));
  }
  for (let i = 1; i <= 8; i++) {
    forexCards.push(generateDetailedCard(m.num, m.title, "Forex", i, m.fxKeys, 8));
    goldCards.push(generateDetailedCard(m.num, m.title, "Gold", i, m.gdKeys, 8));
    cryptoCards.push(generateDetailedCard(m.num, m.title, "Crypto", i, m.crKeys, 8));
  }

  fs.writeFileSync(path.join(modDir, "core.ts"), `import { LessonCard } from "../../../types/curriculum";\n\nexport const coreCards: LessonCard[] = ${JSON.stringify(coreCards, null, 2)};\n`);
  fs.writeFileSync(path.join(modDir, "forex.ts"), `import { LessonCard } from "../../../types/curriculum";\n\nexport const forexCards: LessonCard[] = ${JSON.stringify(forexCards, null, 2)};\n`);
  fs.writeFileSync(path.join(modDir, "gold.ts"), `import { LessonCard } from "../../../types/curriculum";\n\nexport const goldCards: LessonCard[] = ${JSON.stringify(goldCards, null, 2)};\n`);
  fs.writeFileSync(path.join(modDir, "crypto.ts"), `import { LessonCard } from "../../../types/curriculum";\n\nexport const cryptoCards: LessonCard[] = ${JSON.stringify(cryptoCards, null, 2)};\n`);

  fs.writeFileSync(path.join(modDir, "index.ts"), `import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module1${m.num.split(".")[1]}: AcademyModule = {
  moduleNumber: "${m.num}",
  level: 1,
  title: "${m.title}",
  objective: "${m.objective}",
  skillLevel: "beginner",
  orderIndex: ${parseInt(m.num.split(".")[1])},
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
`);
}

function run() {
  console.log("Generating 15 Modules for Level 1...");
  for (const m of level1Syllabus) {
    generateModuleContent(m);
    console.log(`  Module 1.${m.num.split(".")[1]} generated successfully.`);
  }

  // Generate Level 1 Index file
  const imports = level1Syllabus.map(m => `import { module1${m.num.split(".")[1]} } from "./module-1-${m.num.split(".")[1]}";`).join("\n");
  const exports = `export const level1Curriculum: AcademyModule[] = [\n` + level1Syllabus.map(m => `  module1${m.num.split(".")[1]}`).join(",\n") + `\n];`;
  
  fs.writeFileSync(
    path.join(__dirname, "../src/content/level-1/index.ts"),
    `${imports}\nimport { AcademyModule } from "../../types/curriculum";\n\n${exports}\n`
  );
  console.log("Level 1 index.ts updated.");
}

run();
