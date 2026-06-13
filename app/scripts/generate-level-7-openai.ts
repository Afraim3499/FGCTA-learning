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

const level7Syllabus = [
  {
    num: "7.1",
    title: "The Execution Operating System",
    objective: "Build a repeatable, emotion-free pre-session to post-session execution protocol.",
    coreKeys: ["execution-os-framework"],
    fxKeys: ["execution-os-framework"],
    gdKeys: ["execution-os-framework"],
    crKeys: ["execution-os-framework"],
    coreContext: "Building the full execution OS: pre-session → execution → debrief cycle.",
    fxContext: "Forex session handoff execution protocol during London/NY overlap.",
    gdContext: "Gold gap-and-go execution protocol at COMEX open.",
    crContext: "Crypto perp vs spot execution sequencing during Asia open.",
  },
  {
    num: "7.2",
    title: "Pre-Session Preparation Routines",
    objective: "Structure the pre-session checklist that prepares mind, model, and market data before any trade.",
    coreKeys: ["pre-session-checklist"],
    fxKeys: ["pre-session-checklist"],
    gdKeys: ["pre-session-checklist"],
    crKeys: ["pre-session-checklist"],
    coreContext: "Building a systematic pre-session routine before any trade is considered.",
    fxContext: "Pre-session pair screening and DXY alignment checklist for forex.",
    gdContext: "Gold pre-market yield, DXY, and spread readiness audits.",
    crContext: "Crypto pre-session funding rate and volume readiness audits.",
  },
  {
    num: "7.3",
    title: "Order Entry Precision",
    objective: "Master limit, stop, and market order mechanics for clean structural entries.",
    coreKeys: ["order-entry-simulator"],
    fxKeys: ["order-entry-simulator"],
    gdKeys: ["order-entry-simulator"],
    crKeys: ["order-entry-simulator"],
    coreContext: "Distinguishing and correctly deploying limit, stop, and market orders at structural levels.",
    fxContext: "Limit order placement at session order blocks in major forex pairs.",
    gdContext: "Gold precision entry at COMEX range extremes and fixing levels.",
    crContext: "Crypto entry precision around liquidation zones using limit orders.",
  },
  {
    num: "7.4",
    title: "Reading Live Price Action",
    objective: "Interpret real-time candle formations and order flow within the active scenario framework.",
    coreKeys: ["live-price-reader"],
    fxKeys: ["live-price-reader"],
    gdKeys: ["live-price-reader"],
    crKeys: ["live-price-reader"],
    coreContext: "Interpreting live candle sequences and order flow against the pre-planned scenario.",
    fxContext: "Reading live candle sequences during NY open volatility on forex pairs.",
    gdContext: "Reading spot gold tick behaviour during CPI and bond auction events.",
    crContext: "BTC real-time order flow interpretation during funding settlement events.",
  },
  {
    num: "7.5",
    title: "Managing Open Trades",
    objective: "Rules for monitoring, trailing, and exiting running positions without emotional interference.",
    coreKeys: ["open-trade-manager"],
    fxKeys: ["open-trade-manager"],
    gdKeys: ["open-trade-manager"],
    crKeys: ["open-trade-manager"],
    coreContext: "Systematic rules for monitoring, trailing, and exiting active positions.",
    fxContext: "Managing open forex positions across multiple session killzones.",
    gdContext: "Gold stop management around COMEX fixing windows and spread spikes.",
    crContext: "Managing leveraged perp positions during flash wicks and funding resets.",
  },
  {
    num: "7.6",
    title: "Partial Profit Protocols",
    objective: "The mechanics of structured scale-outs, securing risk-free trades, and locking partials.",
    coreKeys: ["partial-profit-engine"],
    fxKeys: ["partial-profit-engine"],
    gdKeys: ["partial-profit-engine"],
    crKeys: ["partial-profit-engine"],
    coreContext: "Structured scale-out mechanics: when, where, and how to take partials.",
    fxContext: "Forex partial profit rules during session momentum and liquidity pool hits.",
    gdContext: "Gold scale-out mechanics around resistance confluences and ATH zones.",
    crContext: "Crypto perp position partial profit and deleverage execution rules.",
  },
  {
    num: "7.7",
    title: "Execution Under News Events",
    objective: "Define execution rules for high-impact news windows — what to do before, during, and after.",
    coreKeys: ["news-event-protocol"],
    fxKeys: ["news-event-protocol"],
    gdKeys: ["news-event-protocol"],
    crKeys: ["news-event-protocol"],
    coreContext: "Protocol for execution before, during, and after high-impact news windows.",
    fxContext: "Forex execution rules around NFP and CPI releases including spread freeze periods.",
    gdContext: "Gold execution during FOMC and bond auction events with spread spike allowances.",
    crContext: "Crypto execution during macro ETF approval/rejection and CPI events.",
  },
  {
    num: "7.8",
    title: "Slippage & Spread Management",
    objective: "Account for execution cost leakage, spread spikes, and slippage in trade planning.",
    coreKeys: ["spread-slippage-meter"],
    fxKeys: ["spread-slippage-meter"],
    gdKeys: ["spread-slippage-meter"],
    crKeys: ["spread-slippage-meter"],
    coreContext: "Quantifying and budgeting for spread and slippage as real execution costs.",
    fxContext: "Forex spread spikes during illiquid Asian sessions and news windows.",
    gdContext: "Gold spread management during Asian hours and pre-COMEX open.",
    crContext: "Exchange slippage, taker fee drag, and perp funding costs in crypto execution.",
  },
  {
    num: "7.9",
    title: "The Execution Debrief",
    objective: "Post-session review protocol — comparing executions against the pre-planned scenario, not P&L.",
    coreKeys: ["execution-debrief-log"],
    fxKeys: ["execution-debrief-log"],
    gdKeys: ["execution-debrief-log"],
    crKeys: ["execution-debrief-log"],
    coreContext: "Running a structured post-session debrief focused on process, not profit.",
    fxContext: "Post-session forex trade vs plan debrief across session pair analysis.",
    gdContext: "COMEX session gold debrief: spread cost review and entry precision audit.",
    crContext: "Crypto session debrief: funding rate audit and leverage execution review.",
  },
  {
    num: "7.10",
    title: "Building Execution Habits",
    objective: "Convert reactive impulse trading into consistent pre-programmed execution responses.",
    coreKeys: ["habit-execution-stack"],
    fxKeys: ["habit-execution-stack"],
    gdKeys: ["habit-execution-stack"],
    crKeys: ["habit-execution-stack"],
    coreContext: "Building repeatable execution habits that override emotional impulse responses.",
    fxContext: "Building forex session habits for consistent NY and London continuity.",
    gdContext: "Building COMEX execution habit routines tied to gold fixing windows.",
    crContext: "Building consistency in perp execution windows around funding settlement.",
  },
  {
    num: "7.11",
    title: "Multi-Pair Execution Management",
    objective: "Execute scenarios across correlated pairs simultaneously without overexposure.",
    coreKeys: ["multi-pair-exec-grid"],
    fxKeys: ["multi-pair-exec-grid"],
    gdKeys: ["multi-pair-exec-grid"],
    crKeys: ["multi-pair-exec-grid"],
    coreContext: "Rules for simultaneously executing correlated pair setups without overexposure.",
    fxContext: "Executing EURUSD and GBPUSD setups simultaneously with correlation limits.",
    gdContext: "Gold and Silver correlated execution management and position netting.",
    crContext: "BTC and ETH multi-asset execution without doubling directional exposure.",
  },
  {
    num: "7.12",
    title: "Gold Execution Specifics",
    objective: "Master COMEX session timing, spread behaviour, and XAU/USD tick-level execution rules.",
    coreKeys: ["gold-exec-specifics"],
    fxKeys: ["gold-exec-specifics"],
    gdKeys: ["gold-exec-specifics"],
    crKeys: ["gold-exec-specifics"],
    coreContext: "Gold-specific execution: tick sizing, COMEX timing, and spread budgeting.",
    fxContext: "Executing forex pairs during gold volatility events for correlation management.",
    gdContext: "XAU/USD tick-level execution: COMEX spread, fixing timing, and slippage rules.",
    crContext: "Gold price correlation with BTC during macro risk events and ETF flows.",
  },
  {
    num: "7.13",
    title: "Crypto Execution Specifics",
    objective: "Master perp exchange mechanics, funding rate windows, and slippage management for BTC/ETH.",
    coreKeys: ["crypto-exec-specifics"],
    fxKeys: ["crypto-exec-specifics"],
    gdKeys: ["crypto-exec-specifics"],
    crKeys: ["crypto-exec-specifics"],
    coreContext: "Crypto-specific execution: perp mechanics, funding windows, and liquidation risk.",
    fxContext: "Managing forex exposure when BTC dominance impacts risk-on forex pairs.",
    gdContext: "Gold vs BTC safe-haven correlation execution during crypto market stress.",
    crContext: "Perp funding windows, liquidation cascade avoidance, and exchange slippage rules.",
  },
  {
    num: "7.14",
    title: "Execution Errors & Recovery",
    objective: "Identify, classify, and recover from the 7 most common live execution errors.",
    coreKeys: ["execution-error-recovery"],
    fxKeys: ["execution-error-recovery"],
    gdKeys: ["execution-error-recovery"],
    crKeys: ["execution-error-recovery"],
    coreContext: "Classifying and systematically recovering from the 7 most common execution errors.",
    fxContext: "Forex execution error taxonomy: wrong lot size, missed limit, re-entry traps.",
    gdContext: "Gold execution errors: spread ignorance, COMEX timing failures, re-entry traps.",
    crContext: "Crypto execution errors: leverage miscalculation, wick stops, funding blind spots.",
  },
  {
    num: "7.15",
    title: "Level 7 Review & Final Gate Prep",
    objective: "Synthesise the full execution OS into a comprehensive pre-gate final review.",
    coreKeys: ["level-7-debrief-recap"],
    fxKeys: ["level-7-debrief-recap"],
    gdKeys: ["level-7-debrief-recap"],
    crKeys: ["level-7-debrief-recap"],
    coreContext: "Synthesising all execution OS components for the final gate review.",
    fxContext: "Forex execution final gate: live scenario execution simulation.",
    gdContext: "Gold final gate: COMEX execution precision review.",
    crContext: "Crypto final gate: perp execution simulation and debrief.",
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
"### Core Scenario: Pre-Session Preparation
The pre-session routine sets the execution boundary before any trade is placed. This card teaches **how to complete a systematic pre-session checklist in under 15 minutes**.

* **Market Context Audit**: Review the daily bias from the previous session close. Confirm DXY direction and session liquidity pool locations before identifying candidate pairs.
* **Scenario Activation Rules**: Only activate a trade scenario if price is within 20 pips of the pre-defined structural entry zone at session open. No chasing entries outside this window.
* **Capital & Risk Parameters**: Lock in the session's maximum loss limit before the first order is placed. No in-session limit changes are permitted once execution begins."

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

async function generateModuleOutlines(m: (typeof level7Syllabus)[0]) {
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
          subtopic: `${track} Execution Mastery ${idx}`,
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
        body: `### ${track} Scenario: ${o.subtopic}\nThis card covers: ${o.focus}\n\n* **Execution Rule**: Apply systematic protocols per session.\n* **Risk Parameters**: Capital limits are set pre-session.\n* **Process Adherence**: Follow the established checklist without deviation.`,
        context: {
          keyTerms: [],
          whyThisMatters: `Execution mastery in ${track} requires adherence to pre-defined protocols.`,
          realLifeExample: `Applied during ${track} live execution conditions with session-specific parameters.`,
          commonMistake: `Deviating from the pre-defined execution protocol leads to emotional entries.`,
          quickNote: `Review the ${o.subtopic} concept before live session execution.`,
          mentorText: `Execution discipline is the difference between consistent performance and reactive trading.`,
          mentorAnalogy: `Like a pilot following a pre-flight checklist — every step exists for a reason.`,
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

async function generateModule(m: (typeof level7Syllabus)[0]) {
  const modNum = m.num.split(".")[1];
  const modDir = path.join(__dirname, "../src/content/level-7", `module-7-${modNum}`);
  if (!fs.existsSync(modDir)) fs.mkdirSync(modDir, { recursive: true });

  console.log(`\n${"═".repeat(60)}`);
  console.log(`MODULE 7.${modNum}: ${m.title}`);
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

export const module7${modNum}: AcademyModule = {
  moduleNumber: "${m.num}",
  level: 7,
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
  console.log(`  ✅ Module 7.${modNum} complete — Core:${coreCards.length} Forex:${forexCards.length} Gold:${goldCards.length} Crypto:${cryptoCards.length}`);
}

// ─── ROOT INDEX ───────────────────────────────────────────────────────────────

function updateRootIndex() {
  const imports = level7Syllabus.map((m) => `import { module7${m.num.split(".")[1]} } from "./module-7-${m.num.split(".")[1]}";`).join("\n");
  const exports =
    `export const level7Curriculum: AcademyModule[] = [\n` +
    level7Syllabus.map((m) => `  module7${m.num.split(".")[1]}`).join(",\n") +
    `\n];`;
  const content = `${imports}\nimport { AcademyModule } from "../../types/curriculum";\n\n${exports}\n`;
  const contentDir = path.join(__dirname, "../src/content/level-7");
  if (!fs.existsSync(contentDir)) fs.mkdirSync(contentDir, { recursive: true });
  fs.writeFileSync(path.join(contentDir, "index.ts"), content);
  console.log("\n✓ Updated Level 7 root index.ts");
}

// ─── MAIN ────────────────────────────────────────────────────────────────────

async function run() {
  const args = process.argv.slice(2);
  const targetModuleArg = args.find((a) => a.startsWith("--module="))?.split("=")[1];
  const startArg = args.find((a) => a.startsWith("--start="))?.split("=")[1];
  const force = args.includes("--force");
  // --auto is always on (no interactive prompts)

  console.log("╔══════════════════════════════════════════════════════════╗");
  console.log("║   Lurnava Level 7 — Two-Stage Curriculum Generator       ║");
  console.log("║   Stage 1: AI Outline → Stage 2: Full Card Writing       ║");
  console.log("║   Model: gpt-4o-mini | Auto Mode: ON                     ║");
  console.log("╚══════════════════════════════════════════════════════════╝\n");

  let targetModules = level7Syllabus;
  if (targetModuleArg) {
    targetModules = level7Syllabus.filter((m) => m.num.split(".")[1] === targetModuleArg);
  } else if (startArg) {
    const startIdx = parseInt(startArg);
    targetModules = level7Syllabus.filter((m) => parseInt(m.num.split(".")[1]) >= startIdx);
  }

  if (targetModules.length === 0) {
    console.error("Error: No matching modules found.");
    process.exit(1);
  }

  let completed = 0;
  let failed = 0;

  for (let i = 0; i < targetModules.length; i++) {
    const m = targetModules[i];
    const modNum = m.num.split(".")[1];
    const modDir = path.join(__dirname, "../src/content/level-7", `module-7-${modNum}`);
    const filesExist =
      fs.existsSync(path.join(modDir, "core.ts")) &&
      fs.existsSync(path.join(modDir, "forex.ts")) &&
      fs.existsSync(path.join(modDir, "gold.ts")) &&
      fs.existsSync(path.join(modDir, "crypto.ts"));

    if (filesExist && !force && !targetModuleArg) {
      console.log(`  Skipping Module 7.${modNum} (files exist — use --force to regenerate)`);
      completed++;
      continue;
    }

    try {
      await generateModule(m);
      completed++;
      console.log(`\n  Progress: ${completed + failed}/${targetModules.length} modules (${completed} ok, ${failed} failed)`);
    } catch (err) {
      failed++;
      console.error(`\n  ❌ Module 7.${modNum} FAILED:`, err);
      console.log(`  Progress: ${completed + failed}/${targetModules.length} modules (${completed} ok, ${failed} failed)`);
    }
  }

  updateRootIndex();

  console.log("\n╔══════════════════════════════════════════════════════════╗");
  console.log(`║   GENERATION COMPLETE: ${completed} modules done, ${failed} failed         ║`);
  console.log("╚══════════════════════════════════════════════════════════╝");
  console.log("\nNext steps:");
  console.log("  1. npx tsx scripts/audit-uniqueness.ts --level=7");
  console.log("  2. npx tsx src/scripts/validate/validate-curriculum.ts");
  console.log("  3. FORCE_LIVE=true npx tsx src/scripts/sync/sync-level-7-curriculum.ts");
}

run().catch((err) => {
  console.error("FATAL:", err);
  process.exit(1);
});
