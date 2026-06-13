import fs from "fs";
import path from "path";
import { OpenAI } from "openai";
import dotenv from "dotenv";

dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY) {
  console.error("CRITICAL: OPENAI_API_KEY is not defined.");
  process.exit(1);
}

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

// ─── SYLLABUS ─────────────────────────────────────────────────────────────────

const level9Syllabus = [
  {
    num: "9.1",
    title: "Certification Structure & Scorecard Rules",
    objective: "Understand the grading rubric, metrics, and exam conditions of the Lurnava Final Certification.",
    coreKeys: ["cert-scorecard-model"],
    fxKeys: ["cert-scorecard-model"],
    gdKeys: ["cert-scorecard-model"],
    crKeys: ["cert-scorecard-model"],
    coreContext: "The grading rubric, metrics, and passing conditions of the Lurnava Final Certification.",
    fxContext: "Forex evaluation metrics for portfolio risk, drawdown gating, and major pair compliance.",
    gdContext: "Gold evaluation rules, spread-aware performance grading, and swing-protection compliance.",
    crContext: "Crypto portfolio performance scoring, perp funding rate adjustments, and custody checks.",
  },
  {
    num: "9.2",
    title: "Portfolio Risk & Strategy Correlation",
    objective: "Model strategy correlation to prevent overlapping risk profiles across correlated assets.",
    coreKeys: ["portfolio-risk-model"],
    fxKeys: ["portfolio-risk-model"],
    gdKeys: ["portfolio-risk-model"],
    crKeys: ["portfolio-risk-model"],
    coreContext: "Mathematical modeling of strategy correlation to prevent overlapping risk profiles.",
    fxContext: "Managing correlation between EURUSD, GBPUSD, and USDJPY to avoid double USD exposure.",
    gdContext: "Correlating gold volatility setups with real yield TIPS and US Treasury flows.",
    crContext: "Tracking altcoin beta correlation to Bitcoin during high-dominance cycles.",
  },
  {
    num: "9.3",
    title: "Live Capital Sizing Audits",
    objective: "Audit position sizing protocols against live brokerage execution costs and liquidity spreads.",
    coreKeys: ["live-capital-planner"],
    fxKeys: ["live-capital-planner"],
    gdKeys: ["live-capital-planner"],
    crKeys: ["live-capital-planner"],
    coreContext: "Auditing position sizing protocols against live execution costs and slippage curves.",
    fxContext: "Calculating Forex lot sizing adjusted for ADR and ECN liquidity spreads.",
    gdContext: "Sizing gold contracts to account for COMEX swaps and overnight financing wicks.",
    crContext: "Leverage bounds, cross vs isolated margin, and liquidity adjustments for crypto perp positions.",
  },
  {
    num: "9.4",
    title: "Advanced Slippage & Liquidations Auditing",
    objective: "Quantify slippage leakage and liquidation events on active performance logs.",
    coreKeys: ["execution-speed-monitor"],
    fxKeys: ["execution-speed-monitor"],
    gdKeys: ["execution-speed-monitor"],
    crKeys: ["execution-speed-monitor"],
    coreContext: "Tracking slippage leakage and execution speed decay on live accounts.",
    fxContext: "Tracking ECN slippage variance during volatile London and New York overlaps.",
    gdContext: "Slippage audits on GC futures during high-impact US macro announcements.",
    crContext: "Analyzing taker fee drag and funding rate impact on crypto perp liquidations.",
  },
  {
    num: "9.5",
    title: "System Stress Testing & Black Swans",
    objective: "Build recovery protocols for extreme market disruptions and black swan events.",
    coreKeys: ["stress-test-model"],
    fxKeys: ["stress-test-model"],
    gdKeys: ["stress-test-model"],
    crKeys: ["stress-test-model"],
    coreContext: "Designing operational stress testing and disaster recovery protocols.",
    fxContext: "Handling sudden central bank currency peg removals and spread freezes.",
    gdContext: "Executing emergency stops during extreme geopolitical gold gapping events.",
    crContext: "Mitigating exchange API outages, smart contract exploits, and stablecoin depegs.",
  },
  {
    num: "9.6",
    title: "Prop Firm Rules & Funding Audits",
    objective: "Align strategy execution with proprietary trading firm rules and drawdowns.",
    coreKeys: ["prop-rulebook-checker"],
    fxKeys: ["prop-rulebook-checker"],
    gdKeys: ["prop-rulebook-checker"],
    crKeys: ["prop-rulebook-checker"],
    coreContext: "Aligning strategy execution parameters with strict proprietary firm rulebooks.",
    fxContext: "Navigating Forex prop firm daily drawdowns and weekend holding restrictions.",
    gdContext: "Managing contract size limitations during London Fix and COMEX opening windows.",
    crContext: "Navigating crypto prop funding challenges and third-party custody auditing requirements.",
  },
  {
    num: "9.7",
    title: "Multi-Asset Capital Allocation",
    objective: "Dynamically allocate capital across Forex, Gold, and Crypto based on regime opportunity.",
    coreKeys: ["multi-asset-allocator"],
    fxKeys: ["multi-asset-allocator"],
    gdKeys: ["multi-asset-allocator"],
    crKeys: ["multi-asset-allocator"],
    coreContext: "Dynamically allocating capital across diverse asset classes based on regime conditions.",
    fxContext: "Routing capital to currency pairs showing clear central bank policy divergence.",
    gdContext: "Adjusting gold portfolio weightings based on inflation and macro TIPS curves.",
    crContext: "Shifting capital between BTC dominance periods and altcoin momentum windows.",
  },
  {
    num: "9.8",
    title: "Sharpe and Expectancy Optimization",
    objective: "Calculate and optimize the Sharpe Ratio and Expectancy over active trade samples.",
    coreKeys: ["sharpe-optimizer"],
    fxKeys: ["sharpe-optimizer"],
    gdKeys: ["sharpe-optimizer"],
    crKeys: ["sharpe-optimizer"],
    coreContext: "Optimizing Sharpe ratio and statistical expectancy over a 100-trade sample.",
    fxContext: "Optimizing Sharpe ratios for EURUSD and GBPUSD intraday session strategies.",
    gdContext: "Calculating gold trading expectancy net of COMEX swaps and liquidity slippage.",
    crContext: "Auditing crypto perpetual performance net of funding rate drag and exchange fees.",
  },
  {
    num: "9.9",
    title: "Dynamic Leverage Gating",
    objective: "Restrict or scale leverage parameters based on equity curve drawdown stages.",
    coreKeys: ["leverage-gate-calculator"],
    fxKeys: ["leverage-gate-calculator"],
    gdKeys: ["leverage-gate-calculator"],
    crKeys: ["leverage-gate-calculator"],
    coreContext: "Implementing dynamic leverage boundaries based on equity curve drawdowns.",
    fxContext: "Scaling down Forex leverage windows when currency majors enter range states.",
    gdContext: "Enforcing conservative leverage parameters during extreme gold volatility sweeps.",
    crContext: "Enforcing strict crypto perp leverage bounds when hourly funding rates spike.",
  },
  {
    num: "9.10",
    title: "Performance Drift Monitoring",
    objective: "Audit strategy metrics to identify performance drift and model style mismatch.",
    coreKeys: ["performance-drift-monitor"],
    fxKeys: ["performance-drift-monitor"],
    gdKeys: ["performance-drift-monitor"],
    crKeys: ["performance-drift-monitor"],
    coreContext: "Auditing performance metrics to identify strategy drift and market condition mismatches.",
    fxContext: "Detecting Forex strategy drift when currency majors transition from trend to range.",
    gdContext: "Monitoring gold model decay when price action decouples from yield correlations.",
    crContext: "Auditing altcoin strategy drift when Bitcoin dominance shifts overall market beta.",
  },
  {
    num: "9.11",
    title: "Multi-Exchange Liquidity Auditing",
    objective: "Evaluate venue liquidity profiles to optimize order execution and routing.",
    coreKeys: ["multi-venue-auditor"],
    fxKeys: ["multi-venue-auditor"],
    gdKeys: ["multi-venue-auditor"],
    crKeys: ["multi-venue-auditor"],
    coreContext: "Evaluating order book depth and liquidity profiles across execution venues.",
    fxContext: "Auditing ECN vs retail broker spreads and execution routing slippage.",
    gdContext: "Comparing COMEX futures depth with spot OTC gold liquidity pools.",
    crContext: "Analyzing order book fragmentation and execution slippage across CEXs and DEXs.",
  },
  {
    num: "9.12",
    title: "The Live Execution Desk Setup",
    objective: "Establish a distraction-free physical and digital live execution workspace.",
    coreKeys: ["desk-setup-diagram"],
    fxKeys: ["desk-setup-diagram"],
    gdKeys: ["desk-setup-diagram"],
    crKeys: ["desk-setup-diagram"],
    coreContext: "Designing a professional digital and physical live execution desk layout.",
    fxContext: "Structuring workspace around economic calendars, DXY feeds, and key session clocks.",
    gdContext: "Organizing workspace around real yields, TIPS feeds, and COMEX futures depth charts.",
    crContext: "Configuring multi-monitor setups with CEX order books, Glassnode flows, and funding rate tables.",
  },
  {
    num: "9.13",
    title: "Multi-Strategy Portfolio Construction",
    objective: "Assemble a multi-strategy playbook governed by a single institutional document.",
    coreKeys: ["multi-strategy-builder"],
    fxKeys: ["multi-strategy-builder"],
    gdKeys: ["multi-strategy-builder"],
    crKeys: ["multi-strategy-builder"],
    coreContext: "Assembling a multi-strategy portfolio governed by a unified playbook.",
    fxContext: "Combining Forex intraday London expansion and New York mean reversion strategies.",
    gdContext: "Integrating gold intraday breakout and swing zone-rejection systems.",
    crContext: "Assembling spot accumulation structures and perpetual swap hedging strategies.",
  },
  {
    num: "9.14",
    title: "Institutional Capital Management",
    objective: "Understand investor reporting, fiduciary limits, and institutional drawdown gating.",
    coreKeys: ["capital-reporting-grid"],
    fxKeys: ["capital-reporting-grid"],
    gdKeys: ["capital-reporting-grid"],
    crKeys: ["capital-reporting-grid"],
    coreContext: "Structuring professional investor reports and managing capital under fiduciary limits.",
    fxContext: "Managing forex capital under strict institutional leverage limits and reporting timelines.",
    gdContext: "Reporting gold exposure risk metrics and commodity margin parameters to capital providers.",
    crContext: "Auditing crypto asset custody, multisig logs, and on-chain transaction records.",
  },
  {
    num: "9.15",
    title: "Level 9 Review & Final Certification Crucible",
    objective: "Synthesize all prior curriculum concepts and execute the Final Certification Gate.",
    coreKeys: ["final-certification-crucible"],
    fxKeys: ["final-certification-crucible"],
    gdKeys: ["final-certification-crucible"],
    crKeys: ["final-certification-crucible"],
    coreContext: "Synthesizing all Lurnava curriculum levels to prepare for the final Certification Crucible.",
    fxContext: "Forex portfolio defense, session execution validation, and final gate preparation.",
    gdContext: "Gold risk profile defense, yield alignment validation, and final gate preparation.",
    crContext: "Crypto custody verification, perp funding drag defense, and final gate preparation.",
  },
];

// ─── PROMPTS ─────────────────────────────────────────────────────────────────

const cardWriterSystemPrompt = `You are a master curriculum content writer for Lurnava, an elite trading academy.
Lurnava teaches OBJECTIVE, PROCESS-DRIVEN market planning — NOT signals, predictions, or get-rich-quick shortcuts.

Your task: Write unique, high-quality lesson cards for a specific trading education module.

WRITING STYLE GUIDELINES (LURNAVA STYLE):
- TONE: Professional, institutional, technical, and process-driven. Never use "beginner", "easy", or vague motivational language.
- NO FILLER OR TEXTBOOK INTRODUCTIONS: Never start cards with fluff like "In the dynamic world of trading...", "Trading is a journey...", "X is a crucial tool...", "Understanding X is key...". Start directly with the technical concept or rule.
- STRUCTURED BODY: The body text must be highly structured. Use a clear subheader (### Track Name: Specific Topic), a brief 2-sentence context, and then 2-3 detailed bullet points (with bold headers) detailing technical rules, math, or mechanics.
- CONCRETE EXAMPLES: The realLifeExample must use specific instruments, numbers, session times, or prices (e.g. "EURUSD executing a 15-pip partial fill at 1.0840 NY open..."), never generic descriptions.
- MENTOR TEXTS & ANALOGIES: The mentorText must sound like a direct, strict institutional coach. The mentorAnalogy must map a technical discipline (like aerospace engineering, surgical checklist, commercial aviation flight plans) directly to the trading mechanic.

BANNED INTRODUCTORY AND FILLER PHRASES (DO NOT USE):
- "In the dynamic world of..."
- "X is an essential tool..."
- "Understanding X is crucial..."
- "A key factor in..."
- "In this lesson..."
- "It is important to remember..."
- "As a trader, you..."
- "Whether you are a..."
- "Not every setup is..."
- "In the fast-paced world..."

STYLE EXAMPLE FOR CARD BODY (FOLLOW THIS EXACT PATTERN FOR ALL CONCEPTS):
"### Core Scenario: Recency Bias Control
Recency bias causes traders to over-weight the outcome of their most recent trades, skewing objective probability. This card teaches **how to apply a mathematical model to reset focus after any streak**.

* **Independent Event Principle**: Re-establish that each trade is an isolated statistical event. A coin toss has a 50% probability regardless of the last 10 flips; likewise, setup validation is independent of prior results.
* **Size Isolation Protocol**: Lock trade size parameters pre-session. Under no circumstances may position size be increased to chase recovery or scaled up in a state of euphoria.
* **The Five-Trade Reset**: After any streak of 3 consecutive wins or losses, enforce a mandatory 15-minute screen break to disrupt neural patterns of overconfidence or fear."

Return ONLY valid JSON matching this exact schema:
{
  "cards": [
    {
      "type": "mission_brief" | "concept" | "practice" | "summary",
      "title": "Unique, descriptive title matching this card's specific subtopic",
      "label": "Core Track" | "Forex Track" | "Gold Track" | "Crypto Track",
      "body": "Markdown body text formatted according to the style guide above (with ### header, context, and bullet points for concept cards). Do NOT paste definitions here — those go in keyTerms. Do NOT repeat content from other cards.",
      "context": {
        "keyTerms": [
          { "term": "Term", "definition": "Clear one-sentence definition." }
        ],
        "whyThisMatters": "Card-specific reason this sub-concept matters for a professional trader. NOT generic motivation.",
        "realLifeExample": "Specific, concrete market scenario illustrating this exact concept. Name instruments, numbers, conditions.",
        "commonMistake": "One specific mistake learners make on THIS subtopic. Direct, not insulting.",
        "quickNote": "One-sentence memory anchor for this card only.",
        "mentorText": "A mentor explaining this in plain language using a scenario. First-person or direct coaching voice.",
        "mentorAnalogy": "A vivid non-trading analogy (pilot, surgeon, architect, chef, etc.) that maps directly to this concept."
      },
      "taskData": null
    }
  ]
}

PRACTICE cards MUST include taskData:
{
  "type": "choice_block",
  "question": "Clear scenario-based question testing the card's specific skill.",
  "options": [
    { "id": "0", "text": "...", "isCorrect": true, "feedback": "Detailed explanation of WHY this is correct." },
    { "id": "1", "text": "...", "isCorrect": false, "feedback": "Detailed explanation of WHY this is wrong." },
    { "id": "2", "text": "...", "isCorrect": false, "feedback": "..." },
    { "id": "3", "text": "...", "isCorrect": false, "feedback": "..." }
  ]
}

HARD RULES:
- Every card in the batch must have a COMPLETELY different title, body, keyTerms, mentorText, and mentorAnalogy.
- DO NOT write generic instrument definitions or introductions. Frame them strictly within the subtopic/focus of this module's lesson.
- DO NOT use "prediction", "signal", "guaranteed", "sure thing", or "beginner" more than once per card.
- DO NOT include definitions in the card body. They go ONLY in keyTerms.
- DO NOT copy-paste the subtopic description as-is. Write real teaching content.
- Keep body text focused and compact. No filler. No fluff.`;

const outlineSystemPrompt = `You are a curriculum architect for Lurnava, an elite trading academy.
Your task: Design a progressive card-by-card learning plan for all 4 tracks of a module, ensuring ZERO duplicate subtopics across all cards and tracks.

Return ONLY valid JSON:
{
  "core": [
    {
      "cardIndex": 1,
      "type": "mission_brief",
      "visualKey": "key-name",
      "subtopic": "Specific unique subtopic title",
      "focus": "2-3 sentence description of exactly what this card teaches — precise, no repeats."
    }
  ],
  "forex": [ ... ],
  "gold": [ ... ],
  "crypto": [ ... ]
}

Rules:
- Core has 15 cards. Forex, Gold, and Crypto have 8 cards each.
- Every card must teach a DISTINCT sub-concept. Even if the same visualKey repeats, the teaching angle must be completely different.
- Frame EVERY card's subtopic and focus strictly through the lens of this module's title and objective. Do NOT create cards that are generic introductions to the instrument/track.
- Progress from foundational → intermediate → advanced → traps/pitfalls → synthesis.
- In each track, Card 1 is always type "mission_brief". The last card is "summary". The second-to-last is "practice". All others are "concept".
- Focus descriptions must be specific enough that a writer can generate 3-5 unique paragraphs without repeating any other card.`;

// ─── OPENAI HELPERS ──────────────────────────────────────────────────────────

async function callOpenAI(systemPrompt: string, userPrompt: string, maxRetries = 4): Promise<any> {
  let attempts = 0;
  while (attempts < maxRetries) {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.3,
      });
      return JSON.parse(response.choices[0].message.content || "{}");
    } catch (error) {
      attempts++;
      console.warn(`    OpenAI error (attempt ${attempts}/${maxRetries}):`, error);
      if (attempts >= maxRetries) throw error;
      await new Promise((r) => setTimeout(r, 8000 * attempts));
    }
  }
}

// ─── STAGE 1: OUTLINE GENERATION ─────────────────────────────────────────────

async function generateModuleOutlines(m: (typeof level9Syllabus)[0]) {
  const keyList = (keys: string[]) => keys.map((k, i) => `Card ${i + 1}: visualKey="${k}"`).join("\n");

  const prompt = `Design progressive learning outlines for all 4 tracks of Module ${m.num}: "${m.title}".
Module Objective: ${m.objective}

Syllabus Context for each Track:
- Core Track Focus: ${m.coreContext}
- Forex Track Focus: ${m.fxContext}
- Gold Track Focus: ${m.gdContext}
- Crypto Track Focus: ${m.crContext}

Tracks to design:
1. Core Track (15 cards):
${keyList(m.coreKeys)}

2. Forex Track (8 cards):
${keyList(m.fxKeys)}

3. Gold Track (8 cards):
${keyList(m.gdKeys)}

4. Crypto Track (8 cards):
${keyList(m.crKeys)}

CRITICAL RULES FOR SUBTOPIC GENERATION:
1. Frame EVERY SINGLE card's subtopic and focus strictly through the lens of this module's title: "${m.title}", objective: "${m.objective}", and the track-specific syllabus context.
2. The subtopics in Core MUST cover: ${m.coreContext}
3. The subtopics in Forex MUST cover: ${m.fxContext}
4. The subtopics in Gold MUST cover: ${m.gdContext}
5. The subtopics in Crypto MUST cover: ${m.crContext}
6. Do NOT create generic introductory cards about instruments (like "What is Forex", "Understanding Funding Rates").
7. In each track, Card 1 is type "mission_brief", the last is "summary", the second-to-last is "practice". All others are "concept".
8. The subtopic titles must be unique to this module to prevent duplication with other modules.`;

  console.log(`  [Stage 1] Generating outlines for all 4 tracks...`);
  const result = await callOpenAI(outlineSystemPrompt, prompt);

  const cleanOutline = (outline: any[], totalCards: number, track: string, visualKeys: string[]) => {
    if (outline.length !== totalCards) {
      console.warn(`    Outline for ${track} returned ${outline.length} items instead of ${totalCards}. Adjusting.`);
      while (outline.length < totalCards) {
        const idx = outline.length + 1;
        const vKey = visualKeys[outline.length % visualKeys.length] || "";
        outline.push({
          cardIndex: idx,
          type: idx === 1 ? "mission_brief" : idx === totalCards ? "summary" : idx === totalCards - 1 ? "practice" : "concept",
          visualKey: vKey,
          subtopic: `${track} Certification Portfolio ${idx}`,
          focus: `Advanced application of ${m.title} concepts specific to ${track} trading for card ${idx}.`,
        });
      }
      outline.length = totalCards;
    }
    for (let i = 0; i < outline.length; i++) {
      outline[i].cardIndex = i + 1;
      outline[i].visualKey = visualKeys[i % visualKeys.length] || "";
      outline[i].type = i === 0 ? "mission_brief" : i === totalCards - 1 ? "summary" : i === totalCards - 2 ? "practice" : "concept";
    }
    return outline;
  };

  return {
    core: cleanOutline(result.core || [], 15, "Core", m.coreKeys),
    forex: cleanOutline(result.forex || [], 8, "Forex", m.fxKeys),
    gold: cleanOutline(result.gold || [], 8, "Gold", m.gdKeys),
    crypto: cleanOutline(result.crypto || [], 8, "Crypto", m.crKeys),
  };
}

// ─── STAGE 2: CARD CONTENT GENERATION ────────────────────────────────────────

async function generateCardsFromOutline(
  mNum: string,
  mTitle: string,
  mObjective: string,
  track: string,
  outlineSlice: any[]
): Promise<any[]> {
  const allCards: any[] = [];
  const batchSize = 4;
  const totalBatches = Math.ceil(outlineSlice.length / batchSize);

  for (let batchIdx = 0; batchIdx < totalBatches; batchIdx++) {
    const batchOutline = outlineSlice.slice(batchIdx * batchSize, batchIdx * batchSize + batchSize);

    const prompt = `Write ${batchOutline.length} lesson cards for Module ${mNum} ("${mTitle}"), ${track} Track.
Module Objective: ${mObjective}

Cards to write (in order):
${batchOutline.map((c) => `- Card ${c.cardIndex} | Type: "${c.type}" | VisualKey: "${c.visualKey}"\n  Subtopic: "${c.subtopic}"\n  Focus: ${c.focus}\n  Label: "${track} Track"`).join("\n\n")}

IMPORTANT: Write each card's body and context fields SPECIFICALLY about the subtopic and focus above. Each card must be completely distinct.
Return exactly ${batchOutline.length} cards in the "cards" array.`;

    console.log(`      [Stage 2] Batch ${batchIdx + 1}/${totalBatches} (Cards ${batchOutline[0].cardIndex}–${batchOutline[batchOutline.length - 1].cardIndex})...`);

    const result = await callOpenAI(cardWriterSystemPrompt, prompt);
    let batchCards = result.cards || [];

    // Retry if wrong count
    let retry = 0;
    while (batchCards.length !== batchOutline.length && retry < 3) {
      retry++;
      console.warn(`      Count mismatch: got ${batchCards.length}, expected ${batchOutline.length}. Retry ${retry}...`);
      const r2 = await callOpenAI(cardWriterSystemPrompt, prompt);
      batchCards = r2.cards || [];
    }

    // Fallback fill
    while (batchCards.length < batchOutline.length) {
      const o = batchOutline[batchCards.length];
      batchCards.push({
        type: o.type,
        title: o.subtopic,
        label: `${track} Track`,
        body: `### ${track} Scenario: ${o.subtopic}\nThis card covers: ${o.focus}\n\n* **Portfolio Metric**: Evaluate systemic risk factors.\n* **Operational Rules**: Restrict capital exposure parameters based on drawdown.\n* **Certification Audit**: Document 100% adherence to standard operating procedures.`,
        context: {
          keyTerms: [],
          whyThisMatters: `Operational control and certification readiness in ${track} require strict adherence to sizing audits and correlation protocols.`,
          realLifeExample: `Applied during ${track} live desk allocation and peak stress testing events.`,
          commonMistake: `Failing to monitor correlation parameters leads to overlapping USD/BTC risk exposure.`,
          quickNote: `Keep dynamic leverage bounds locked during certification crucible runs.`,
          mentorText: `Discipline is binary. Verify your strategy correlation metrics to remove structural risk.`,
          mentorAnalogy: `Like an engineer running load tests on a bridge — you must stress test your sizing under extreme regime conditions.`,
        },
        taskData: null,
        visualKey: o.visualKey,
      });
    }

    for (let idx = 0; idx < batchCards.length; idx++) {
      const outline = batchOutline[idx];
      const card = batchCards[idx];
      card.visualKey = outline.visualKey;
      card.label = `${track} Track`;
      if (card.context && (card.context as any).taskData) {
        card.taskData = (card.context as any).taskData;
        delete (card.context as any).taskData;
      }
      if (outline.type !== "practice") {
        card.taskData = null;
      }
      allCards.push(card);
    }
  }

  return allCards;
}

// ─── MODULE GENERATOR ────────────────────────────────────────────────────────

async function generateModule(m: (typeof level9Syllabus)[0]) {
  const modNum = m.num.split(".")[1];
  const modDir = path.join(__dirname, "../src/content/level-9", `module-9-${modNum}`);
  if (!fs.existsSync(modDir)) fs.mkdirSync(modDir, { recursive: true });

  console.log(`\n${"═".repeat(60)}`);
  console.log(`MODULE 9.${modNum}: ${m.title}`);
  console.log(`${"═".repeat(60)}`);

  const outlines = await generateModuleOutlines(m);
  console.log(`  [Stage 1] Done. Core=${outlines.core.length}, Forex=${outlines.forex.length}, Gold=${outlines.gold.length}, Crypto=${outlines.crypto.length}`);

  console.log(`  [Stage 2] Generating Core cards...`);
  const coreCards = await generateCardsFromOutline(m.num, m.title, m.objective, "Core", outlines.core);

  console.log(`  Generating Forex cards...`);
  const forexCards = await generateCardsFromOutline(m.num, m.title, m.objective, "Forex", outlines.forex);

  console.log(`  Generating Gold cards...`);
  const goldCards = await generateCardsFromOutline(m.num, m.title, m.objective, "Gold", outlines.gold);

  console.log(`  Generating Crypto cards...`);
  const cryptoCards = await generateCardsFromOutline(m.num, m.title, m.objective, "Crypto", outlines.crypto);

  // Write files
  const writeTS = (filename: string, varName: string, cards: any[]) => {
    const content = `import { LessonCard } from "../../../types/curriculum";\n\nexport const ${varName}: LessonCard[] = ${JSON.stringify(cards, null, 2)};\n`;
    fs.writeFileSync(path.join(modDir, filename), content);
    console.log(`  ✓ Wrote ${filename} (${cards.length} cards)`);
  };

  writeTS("core.ts", "coreCards", coreCards);
  writeTS("forex.ts", "forexCards", forexCards);
  writeTS("gold.ts", "goldCards", goldCards);
  writeTS("crypto.ts", "cryptoCards", cryptoCards);

  const indexContent = `import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module9${modNum}: AcademyModule = {
  moduleNumber: "${m.num}",
  level: 9,
  title: "${m.title}",
  objective: "${m.objective}",
  skillLevel: "expert",
  orderIndex: ${parseInt(modNum)},
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
`;
  fs.writeFileSync(path.join(modDir, "index.ts"), indexContent);
  console.log(`  ✓ Wrote index.ts`);
  console.log(`  ✅ Module 9.${modNum} complete — Core:${coreCards.length} Forex:${forexCards.length} Gold:${goldCards.length} Crypto:${cryptoCards.length}`);
}

// ─── ROOT INDEX ───────────────────────────────────────────────────────────────

function updateRootIndex() {
  const imports = level9Syllabus.map((m) => `import { module9${m.num.split(".")[1]} } from "./module-9-${m.num.split(".")[1]}";`).join("\n");
  const exports =
    `export const level9Curriculum: AcademyModule[] = [\n` +
    level9Syllabus.map((m) => `  module9${m.num.split(".")[1]}`).join(",\n") +
    `\n];`;
  const content = `${imports}\nimport { AcademyModule } from "../../types/curriculum";\n\n${exports}\n`;
  const contentDir = path.join(__dirname, "../src/content/level-9");
  if (!fs.existsSync(contentDir)) fs.mkdirSync(contentDir, { recursive: true });
  fs.writeFileSync(path.join(contentDir, "index.ts"), content);
  console.log("\n✓ Updated Level 9 root index.ts");
}

// ─── MAIN ────────────────────────────────────────────────────────────────────

async function run() {
  const args = process.argv.slice(2);
  const targetModuleArg = args.find((a) => a.startsWith("--module="))?.split("=")[1];
  const startArg = args.find((a) => a.startsWith("--start="))?.split("=")[1];
  const force = args.includes("--force");

  console.log("╔══════════════════════════════════════════════════════════╗");
  console.log("║   Lurnava Level 9 — Two-Stage Curriculum Generator       ║");
  console.log("║   Stage 1: AI Outline → Stage 2: Full Card Writing       ║");
  console.log("║   Model: gpt-4o-mini | Auto Mode: ON                     ║");
  console.log("╚══════════════════════════════════════════════════════════╝\n");

  let targetModules = level9Syllabus;
  if (targetModuleArg) {
    targetModules = level9Syllabus.filter((m) => m.num.split(".")[1] === targetModuleArg);
  } else if (startArg) {
    const startIdx = parseInt(startArg);
    targetModules = level9Syllabus.filter((m) => parseInt(m.num.split(".")[1]) >= startIdx);
  }

  if (targetModules.length === 0) {
    console.error("Error: No matching modules found.");
    process.exit(1);
  }

  let completed = 0;
  let failed = 0;

  // Simple concurrency pool helper to process modules in parallel
  async function pool<T>(workers: number, items: T[], fn: (item: T) => Promise<void>) {
    const queue = [...items];
    const runWorker = async () => {
      while (queue.length > 0) {
        const item = queue.shift();
        if (!item) break;
        await fn(item);
      }
    };
    await Promise.all(Array.from({ length: workers }, runWorker));
  }

  await pool(3, targetModules, async (m) => {
    const modNum = m.num.split(".")[1];
    const modDir = path.join(__dirname, "../src/content/level-9", `module-9-${modNum}`);
    const filesExist =
      fs.existsSync(path.join(modDir, "core.ts")) &&
      fs.existsSync(path.join(modDir, "forex.ts")) &&
      fs.existsSync(path.join(modDir, "gold.ts")) &&
      fs.existsSync(path.join(modDir, "crypto.ts"));

    if (filesExist && !force && !targetModuleArg) {
      console.log(`  Skipping Module 9.${modNum} (files exist — use --force to regenerate)`);
      completed++;
      return;
    }

    try {
      await generateModule(m);
      completed++;
      console.log(`\n  Progress: ${completed + failed}/${targetModules.length} modules (${completed} ok, ${failed} failed)`);
    } catch (err) {
      failed++;
      console.error(`\n  ❌ Module 9.${modNum} FAILED:`, err);
      console.log(`  Progress: ${completed + failed}/${targetModules.length} modules (${completed} ok, ${failed} failed)`);
    }
  });

  updateRootIndex();

  console.log("\n╔══════════════════════════════════════════════════════════╗");
  console.log(`║   GENERATION COMPLETE: ${completed} modules done, ${failed} failed         ║`);
  console.log("╚══════════════════════════════════════════════════════════╝");
  console.log("\nNext steps:");
  console.log("  1. npx tsx scripts/audit-uniqueness.ts --level=9");
  console.log("  2. npx tsx src/scripts/validate/validate-curriculum.ts");
  console.log("  3. FORCE_LIVE=true npx tsx src/scripts/sync/sync-level-9-curriculum.ts");
}

run().catch((err) => {
  console.error("FATAL:", err);
  process.exit(1);
});
