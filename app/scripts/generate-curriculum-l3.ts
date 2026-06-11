import fs from "fs";
import path from "path";

const level3Syllabus = [
  {
    num: "3.1",
    title: "Order Blocks Intro",
    objective: "Understand the true definition and structural footprint of institutional Order Blocks.",
    coreKeys: ["ob-intro", "ob-definition", "ob-mechanics", "ob-bos-relation", "ob-intro-debrief"],
    fxKeys: ["forex-ob-accumulation"],
    gdKeys: ["gold-ob-yield-sweeps"],
    crKeys: ["crypto-ob-venue-liquidations"]
  },
  {
    num: "3.2",
    title: "Bullish & Bearish OBs",
    objective: "Identify open boundaries and calculate Mean Threshold (50%) of Order Blocks.",
    coreKeys: ["ob-types-intro", "ob-bullish-bearish", "ob-mean-threshold", "ob-entry-boundaries", "ob-types-debrief"],
    fxKeys: ["forex-ob-session"],
    gdKeys: ["gold-ob-spike-buffer"],
    crKeys: ["crypto-ob-spot-perp"]
  },
  {
    num: "3.3",
    title: "Mitigation Blocks",
    objective: "Map trapped institutional orders when price fails to take out swing extremes.",
    coreKeys: ["mitigation-intro", "mitigation-mechanics", "trapped-orders", "mitigation-entry", "mitigation-debrief"],
    fxKeys: ["forex-mitigation-session"],
    gdKeys: ["gold-mitigation-sweeps"],
    crKeys: ["crypto-mitigation-perp"]
  },
  {
    num: "3.4",
    title: "Breaker Blocks",
    objective: "Identify narrative shifts when protected order blocks are swept and turn into support/resistance breakers.",
    coreKeys: ["breaker-intro", "breaker-mechanics", "ob-to-breaker", "breaker-entry", "breaker-debrief"],
    fxKeys: ["forex-breaker-london"],
    gdKeys: ["gold-breaker-macro"],
    crKeys: ["crypto-breaker-funding"]
  },
  {
    num: "3.5",
    title: "Propulsion Blocks",
    objective: "Spot highly accelerated order block retests that show immediate price expansion.",
    coreKeys: ["propulsion-intro", "propulsion-mechanics", "momentum-acceleration", "propulsion-entry", "propulsion-debrief"],
    fxKeys: ["forex-propulsion-news"],
    gdKeys: ["gold-propulsion-sweeps"],
    crKeys: ["crypto-propulsion-liquidations"]
  },
  {
    num: "3.6",
    title: "Fair Value Gaps (FVG)",
    objective: "Understand three-candle imbalance delivery and efficient pricing mechanics.",
    coreKeys: ["fvg-intro", "fvg-three-candle", "imbalance-delivery", "fvg-validation", "fvg-debrief"],
    fxKeys: ["forex-fvg-news"],
    gdKeys: ["gold-fvg-yields"],
    crKeys: ["crypto-fvg-liquidations"]
  },
  {
    num: "3.7",
    title: "Inversion FVGs",
    objective: "Identify support/resistance flips when gaps are run through by price.",
    coreKeys: ["inversion-intro", "inversion-mechanics", "fvg-to-inversion", "inversion-entry", "inversion-debrief"],
    fxKeys: ["forex-inversion-rollover"],
    gdKeys: ["gold-inversion-sweeps"],
    crKeys: ["crypto-inversion-perp"]
  },
  {
    num: "3.8",
    title: "Consequent Encroachment",
    objective: "Calculate and trade the 50% midpoint of Fair Value Gaps as exact anchors.",
    coreKeys: ["ce-intro", "ce-midpoint", "ce-validation", "ce-reversal-signs", "ce-debrief"],
    fxKeys: ["forex-ce-adr"],
    gdKeys: ["gold-ce-volatility"],
    crKeys: ["crypto-ce-funding"]
  },
  {
    num: "3.9",
    title: "Volume Imbalances",
    objective: "Spot subtle gaps in candle bodies where wicks overlap but body ranges do not.",
    coreKeys: ["vi-intro", "vi-mechanics", "body-vs-wick-imbalance", "vi-entry-validation", "vi-debrief"],
    fxKeys: ["forex-vi-weekend"],
    gdKeys: ["gold-vi-comex"],
    crKeys: ["crypto-vi-fragmentation"]
  },
  {
    num: "3.10",
    title: "Liquidity Voids",
    objective: "Differentiate rate/news gaps from volume imbalances and map void fill reversals.",
    coreKeys: ["void-intro", "void-mechanics", "rate-voids", "void-fill-reversals", "void-debrief"],
    fxKeys: ["forex-void-rate"],
    gdKeys: ["gold-void-cpi"],
    crKeys: ["crypto-void-unlock"]
  },
  {
    num: "3.11",
    title: "Footprint Basics",
    objective: "Read bid/ask order book volume delta imbalances at specific price levels.",
    coreKeys: ["footprint-intro", "footprint-delta", "bid-ask-imbalances", "orderbook-depth", "footprint-debrief"],
    fxKeys: ["forex-footprint-ecn"],
    gdKeys: ["gold-footprint-comex"],
    crKeys: ["crypto-footprint-mismatch"]
  },
  {
    num: "3.12",
    title: "Order flow Confluences",
    objective: "Stack order flow block and gap footprints with market structure filters.",
    coreKeys: ["confluence-intro", "confluence-stacking", "orderflow-confluence", "confluence-entry", "confluence-debrief"],
    fxKeys: ["forex-confluence-dxy"],
    gdKeys: ["gold-confluence-yields"],
    crKeys: ["crypto-confluence-btc"]
  },
  {
    num: "3.13",
    title: "Invalidated Footprints",
    objective: "Manage risk when institutional order blocks and gaps fail to defend.",
    coreKeys: ["invalid-footprint-intro", "invalid-ob-fvg", "failure-signs", "risk-mitigation", "invalid-footprint-debrief"],
    fxKeys: ["forex-invalid-session"],
    gdKeys: ["gold-invalid-yields"],
    crKeys: ["crypto-invalid-perp"]
  },
  {
    num: "3.14",
    title: "Order Flow Checklists",
    objective: "Apply quantitative checks to grade order flow footprints before planning executions.",
    coreKeys: ["checklist-intro", "checklist-criteria", "orderflow-grade", "checklist-evaluation", "checklist-debrief"],
    fxKeys: ["forex-checklist-session"],
    gdKeys: ["gold-checklist-yields"],
    crKeys: ["crypto-checklist-spot-perp"]
  },
  {
    num: "3.15",
    title: "Level 3 Review",
    objective: "Synthesize all Level 3 order flow footprint concepts to prepare for the Capstone Scenario and Exam.",
    coreKeys: ["level3-review-intro", "orderflow-checklist", "interactive-footprint-prep", "exam-prep-overview", "level3-review-debrief"],
    fxKeys: ["forex-multi-pair-orderflow"],
    gdKeys: ["gold-comex-orderflow"],
    crKeys: ["crypto-cex-orderflow"]
  }
];

function generateDetailedCard(mNum: string, mTitle: string, track: string, cardIndex: number, visualKeys: string[], totalCards: number) {
  const isBrief = cardIndex === 1;
  const isSummary = cardIndex === totalCards;
  const isPractice = cardIndex === totalCards - 1;
  const vKey = visualKeys[(cardIndex - 1) % visualKeys.length] || "";
  const type = isBrief ? "mission_brief" : isSummary ? "summary" : isPractice ? "practice" : "concept";

  let title = `${mTitle} - ${track} Card ${cardIndex}`;
  let body = "";
  let keyTerms: { term: string; definition: string }[] = [];
  let whyThisMatters = "";
  let realLifeExample = "";
  let commonMistake = "";
  let quickNote = "";

  if (track === "Core") {
    title = `Core Concept ${cardIndex}: ${mTitle}`;
    body = `### Institutional Order Flow Principles\n\nIn Level 3, we analyze the micro footprints left behind by Bank Financial Institutions (BFIs). Understanding **${mTitle}** is about decoding institutional intent rather than chasing retail indicator signals.\n\n* **Order Flow Focus**: Track the imbalances between active bids and asks directly at key price levels.\n* **Footprint Parameter**: Analyze whether institutions are accumulating or distributing inventory inside structural zones.`;
    keyTerms = [
      { term: "Order Flow", definition: "The matching sequence of buying and selling pressure from institutional participants." },
      { term: "Footprint", definition: "The visible signature of transaction delta left inside candle structures." }
    ];
    whyThisMatters = `Institutions leave massive footprints on charts. If you fail to identify these zones, you will trade directly into trapped orders.`;
    realLifeExample = `A trader audits a 3-candle displacement sequence to identify an unmitigated footprint imbalance.`;
    commonMistake = `Trading minor lower timeframe imbalances without higher timeframe structural alignment.`;
    quickNote = `Follow the big money. Do not frontrun their orders; wait for retest validation.`;
  } else if (track === "Forex") {
    title = `Forex roadway: ${mTitle} (${cardIndex})`;
    body = `### FX Order Flow Adaptations\n\nIn Forex, order flow is scattered across global Interbank feeds. Tracking **${mTitle}** requires recognizing session-specific volume and dollar index (DXY) confluences.\n\n* **FX Order Flow**: Align footprint triggers with London and NY session openings when liquid spreads compress.`;
    keyTerms = [
      { term: "Interbank Feed", definition: "Decentralized networks of top-tier commercial banks matching spot currencies." },
      { term: "DXY Compass", definition: "The US Dollar Index that gauges global dollar positioning." }
    ];
    whyThisMatters = `Forex order blocks are highly session-dependent. Asian hours order flow is often swept during London opens.`;
    realLifeExample = `Identifying a EUR/USD bullish order block formed at the NY session open with backing from DXY structural weakness.`;
    commonMistake = `Assuming minor pair order blocks are respected during low-liquidity session rollovers.`;
    quickNote = `In FX, order flow must be synchronized with session time clocks.`;
  } else if (track === "Gold") {
    title = `Gold roadway: ${mTitle} (${cardIndex})`;
    body = `### Gold Order Flow Adaptations\n\nGold is a volatile macro instrument. Tracking **${mTitle}** requires buffering entry parameters to absorb deep wicks and spikes.\n\n* **Gold Order Flow**: Set entry points near the Mean Threshold (50%) of order blocks rather than at the outer boundaries.`;
    keyTerms = [
      { term: "COMEX Open", definition: "The Chicago Mercantile Exchange open where physical futures orders are executed." },
      { term: "Mean Threshold", definition: "The mathematical 50% midpoint of a high-volume block." }
    ];
    whyThisMatters = `Gold wicks sweep stops aggressively. Placing buy orders exactly at the top of a bullish block leaves no margin for wicks.`;
    realLifeExample = `Setting a buy limit at the consequent encroachment of a Gold daily FVG to mitigate risk.`;
    commonMistake = `Chasing rapid market orders during high-impact news releases instead of waiting for block retests.`;
    quickNote = `Gold demands wider stop margins and consequent encroachment entry buffers.`;
  } else if (track === "Crypto") {
    title = `Crypto roadway: ${mTitle} (${cardIndex})`;
    body = `### Crypto Order Flow Adaptations\n\nCrypto execution is fragmented across multiple exchanges. Tracking **${mTitle}** requires matching spot exchange order books with perpetual futures volume delta.\n\n* **Crypto Order Flow**: Verify whether perpetual sweeps are supported by spot exchange volumes.`;
    keyTerms = [
      { term: "Exchange Fragmentation", definition: "The dispersal of order books across Binance, Coinbase, OKX, etc." },
      { term: "Spot-Perp Delta", definition: "The volume divergence between cash token buys and derivatives leverage." }
    ];
    whyThisMatters = `Perpetual gaps are often created by leverage liquidations. Unbacked perp sweeps are highly prone to immediate reversals.`;
    realLifeExample = `Buying a BTC spot order block after perp funding turns heavily negative and short liquidations stabilize.`;
    commonMistake = `Trading low-cap altcoin order blocks that lack real spot market volume depth.`;
    quickNote = `Verify crypto footprint delta with spot exchange order book confirmation.`;
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
        { id: "0", text: `Wait for the footprint coordinates to align perfectly with your pre-written plan.`, isCorrect: true, feedback: "Correct! Order flow entries must be rule-based and patient." },
        { id: "1", text: "Execute immediately to avoid missing a fast-moving price block.", isCorrect: false, feedback: "Incorrect. Chasing price blocks leads to poor fill quality." }
      ]
    };
  }

  return card;
}

function generateModuleContent(m: typeof level3Syllabus[0]) {
  const modDir = path.join(__dirname, "../src/content/level-3", `module-3-${m.num.split(".")[1]}`);
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

export const module3${m.num.split(".")[1]}: AcademyModule = {
  moduleNumber: "${m.num}",
  level: 3,
  title: "${m.title}",
  objective: "${m.objective}",
  skillLevel: "intermediate",
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
  console.log("Generating 15 Modules for Level 3...");
  for (const m of level3Syllabus) {
    generateModuleContent(m);
    console.log(`  Module 3.${m.num.split(".")[1]} generated successfully.`);
  }

  // Generate Level 3 Index file
  const imports = level3Syllabus.map(m => `import { module3${m.num.split(".")[1]} } from "./module-3-${m.num.split(".")[1]}";`).join("\n");
  const exports = `export const level3Curriculum: AcademyModule[] = [\n` + level3Syllabus.map(m => `  module3${m.num.split(".")[1]}`).join(",\n") + `\n];`;
  
  const contentDir = path.join(__dirname, "../src/content/level-3");
  if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir, { recursive: true });
  }

  fs.writeFileSync(
    path.join(contentDir, "index.ts"),
    `${imports}\nimport { AcademyModule } from "../../types/curriculum";\n\n${exports}\n`
  );
  console.log("Level 3 index.ts updated.");
}

run();
