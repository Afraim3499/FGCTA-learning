import fs from "fs";
import path from "path";
import { OpenAI } from "openai";
import dotenv from "dotenv";
import readline from "readline";

dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
  console.error("CRITICAL: OPENAI_API_KEY is not defined in environment variables.");
  process.exit(1);
}

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query: string): Promise<string> => {
  return new Promise((resolve) => rl.question(query, resolve));
};

// ─── SYLLABUS ────────────────────────────────────────────────────────────────

const level6Syllabus = [
  {
    num: "6.1",
    title: "The Branching Logic Mindset",
    objective: "Transition from static predictions to two-way branching 'If/Then' logic.",
    coreKeys: ["decision-branching-logic"],
    fxKeys: ["decision-branching-logic"],
    gdKeys: ["decision-branching-logic"],
    crKeys: ["decision-branching-logic"],
    coreContext: "Moving from static predictions to two-way branching 'If/Then' logic.",
    fxContext: "Handling session-to-session direction swaps on major pairs.",
    gdContext: "Branching rules for sudden gold safe-haven yield swings.",
    crContext: "Preparing for fast perp funding rate shift trends."
  },
  {
    num: "6.2",
    title: "HTF Narrative Anchors",
    objective: "Identify the Daily/Weekly narrative that anchors all scenario planning.",
    coreKeys: ["htf-narrative-anchors"],
    fxKeys: ["htf-narrative-anchors"],
    gdKeys: ["htf-narrative-anchors"],
    crKeys: ["htf-narrative-anchors"],
    coreContext: "Identifying the Daily/Weekly narrative that anchors all scenario planning.",
    fxContext: "Mapping interbank session highs/lows as higher timeframe anchors.",
    gdContext: "Using gold midnight open and weekly highs as narrative limits.",
    crContext: "Auditing weekly spot vs futures volume anchors."
  },
  {
    num: "6.3",
    title: "Defining the Primary Scenario",
    objective: "Formulate the path of highest structural probability based on the evidence stack.",
    coreKeys: ["primary-scenario-map"],
    fxKeys: ["primary-scenario-map"],
    gdKeys: ["primary-scenario-map"],
    crKeys: ["primary-scenario-map"],
    coreContext: "Formulating the path of highest structural probability based on the evidence stack.",
    fxContext: "Sizing NY continuation trades based on London session trends.",
    gdContext: "Planning primary breakouts during active COMEX volume hours.",
    crContext: "Designing perp long entries using order block test confirmation."
  },
  {
    num: "6.4",
    title: "Defining the Alternative Scenario",
    objective: "Create the defensive counter-scenario when the primary expectation fails.",
    coreKeys: ["alternative-scenario-map"],
    fxKeys: ["alternative-scenario-map"],
    gdKeys: ["alternative-scenario-map"],
    crKeys: ["alternative-scenario-map"],
    coreContext: "Creating the defensive counter-scenario when the primary expectation fails.",
    fxContext: "Designing London session reversal scenarios during Asian range sweeps.",
    gdContext: "Planning sharp COMEX sweeps that invalidate the yield model.",
    crContext: "Designing hedging scenarios on spot holdings using perp shorts."
  },
  {
    num: "6.5",
    title: "Invalidation Anchors & Triggers",
    objective: "Identify the exact price levels and candle behaviors that kill a scenario.",
    coreKeys: ["invalidation-boundaries"],
    fxKeys: ["invalidation-boundaries"],
    gdKeys: ["invalidation-boundaries"],
    crKeys: ["invalidation-boundaries"],
    coreContext: "Identifying the exact price levels and candle behaviors that kill a scenario.",
    fxContext: "Marking session swing extremes as stop-run invalidations.",
    gdContext: "Using Gold fixing price highs as invalidation filters.",
    crContext: "Using liquidation pool boundaries as invalidation limits."
  },
  {
    num: "6.6",
    title: "Time-Based Invalidation",
    objective: "Expire scenario plans if structural interactions fail to occur within key time windows.",
    coreKeys: ["time-invalidation-clocks"],
    fxKeys: ["time-invalidation-clocks"],
    gdKeys: ["time-invalidation-clocks"],
    crKeys: ["time-invalidation-clocks"],
    coreContext: "Expiring scenario plans if structural interactions fail to occur within key time windows.",
    fxContext: "Setting session-hour limits on forex breakout setups.",
    gdContext: "Timing constraints around COMEX opening range developments.",
    crContext: "Time limits on crypto setups before funding rate settlements."
  },
  {
    num: "6.7",
    title: "Identifying Structural Conflict",
    objective: "Recognize when adjacent timeframes display opposing MSS directions.",
    coreKeys: ["structural-conflict-zones"],
    fxKeys: ["structural-conflict-zones"],
    gdKeys: ["structural-conflict-zones"],
    crKeys: ["structural-conflict-zones"],
    coreContext: "Recognizing when adjacent timeframes display opposing MSS directions.",
    fxContext: "Resolving conflict between Daily DXY and 1H currency structures.",
    gdContext: "Navigating gold structure spikes when macro yields conflict.",
    crContext: "Navigating spot accumulation vs futures perp liquidation conflict."
  },
  {
    num: "6.8",
    title: "Mid-Session Scenario Audits",
    objective: "Audit active positions and structural clues in real-time during live execution.",
    coreKeys: ["mid-session-audit-log"],
    fxKeys: ["mid-session-audit-log"],
    gdKeys: ["mid-session-audit-log"],
    crKeys: ["mid-session-audit-log"],
    coreContext: "Auditing active positions and structural clues in real-time during live execution.",
    fxContext: "Scanning forex calendar releases and adjusting target levels.",
    gdContext: "Auditing gold spreads and morning momentum sweeps.",
    crContext: "Adjusting leverage and margin settings during flash wicks."
  },
  {
    num: "6.9",
    title: "DXY Intermarket Verification",
    objective: "Use the U.S. Dollar Index as a confirmation filter for primary setups.",
    coreKeys: ["dxy-correlation-grid"],
    fxKeys: ["dxy-correlation-grid"],
    gdKeys: ["dxy-correlation-grid"],
    crKeys: ["dxy-correlation-grid"],
    coreContext: "Using the U.S. Dollar Index as a confirmation filter for primary setups.",
    fxContext: "EURUSD/GBPUSD alignment checks against inverse DXY moves.",
    gdContext: "Correlating Gold sweeps with DXY structural resistance.",
    crContext: "Using DXY trends as risk-on/risk-off crypto market filters."
  },
  {
    num: "6.10",
    title: "SMT Divergence Patterns",
    objective: "Identify cracks in correlated assets as advanced institutional evidence.",
    coreKeys: ["smt-divergence-charts"],
    fxKeys: ["smt-divergence-charts"],
    gdKeys: ["smt-divergence-charts"],
    crKeys: ["smt-divergence-charts"],
    coreContext: "Identifying cracks in correlated assets as advanced institutional evidence.",
    fxContext: "Spotting divergence between EURUSD and GBPUSD structure.",
    gdContext: "Correlating spot Gold vs Silver sweep discrepancies.",
    crContext: "Spotting BTC vs ETH divergence during local market runs."
  },
  {
    num: "6.11",
    title: "Forex Scenario Checklists",
    objective: "Synthesize currency session ranges and intermarket context.",
    coreKeys: ["forex-scenario-checklist"],
    fxKeys: ["forex-scenario-checklist"],
    gdKeys: ["forex-scenario-checklist"],
    crKeys: ["forex-scenario-checklist"],
    coreContext: "Synthesizing currency session ranges and intermarket context.",
    fxContext: "Multi-pair relative strength checks and session calendars.",
    gdContext: "Checklists for trading major pairs during NY open windows.",
    crContext: "Checklists for handling currency pairs during CPI releases."
  },
  {
    num: "6.12",
    title: "Gold Scenario Checklists",
    objective: "Pre-execution checklist incorporating gold fixings and yield correlations.",
    coreKeys: ["gold-scenario-checklist"],
    fxKeys: ["gold-scenario-checklist"],
    gdKeys: ["gold-scenario-checklist"],
    crKeys: ["gold-scenario-checklist"],
    coreContext: "Pre-execution checklist incorporating gold fixings and yield correlations.",
    fxContext: "Checklist for COMEX open sweeps and silver divergences.",
    gdContext: "Checklists for trading gold during bond yield shifts.",
    crContext: "Gold price location filters and slippage allowances."
  },
  {
    num: "6.13",
    title: "Crypto Scenario Checklists",
    objective: "Pre-execution checklist incorporating spot-perp discrepancies and liquidations.",
    coreKeys: ["crypto-scenario-checklist"],
    fxKeys: ["crypto-scenario-checklist"],
    gdKeys: ["crypto-scenario-checklist"],
    crKeys: ["crypto-scenario-checklist"],
    coreContext: "Pre-execution checklist incorporating spot-perp discrepancies and liquidations.",
    fxContext: "Isolated margin limits and liquidation pool boundaries.",
    gdContext: "Checklists for trading altcoins during BTC dominance runs.",
    crContext: "Spot-perp funding rate limits and exchange volume checks."
  },
  {
    num: "6.14",
    title: "Journal-Based Process Audits",
    objective: "Reviewing session journals focusing strictly on scenario adherence over P&L.",
    coreKeys: ["journal-process-audit"],
    fxKeys: ["journal-process-audit"],
    gdKeys: ["journal-process-audit"],
    crKeys: ["journal-process-audit"],
    coreContext: "Reviewing session journals focusing strictly on scenario adherence over P&L.",
    fxContext: "Auditing lot sizing and session window entries.",
    gdContext: "Auditing gold slippage and spread cost records.",
    crContext: "Auditing crypto execution speeds and margin adjustments."
  },
  {
    num: "6.15",
    title: "Level 6 Review & Final Gate Prep",
    objective: "Synthesize all branching logic workflows for the final gate mission.",
    coreKeys: ["level-6-debrief-recap"],
    fxKeys: ["level-6-debrief-recap"],
    gdKeys: ["level-6-debrief-recap"],
    crKeys: ["level-6-debrief-recap"],
    coreContext: "Synthesizing all branching logic workflows for the final gate mission.",
    fxContext: "Final Scenario Planning exam preparation.",
    gdContext: "Reviewing gold-futures-to-spot divergence scenarios.",
    crContext: "Preparing for perp margin sweeps and liquidation gate drills."
  }
];

// ─── PROMPTS ─────────────────────────────────────────────────────────────────

const cardWriterSystemPrompt = `You are a master curriculum content writer for Lurnava, an elite trading academy.
Lurnava teaches OBJECTIVE, PROCESS-DRIVEN market planning — NOT signals, predictions, or get-rich-quick shortcuts.

Your task: Write unique, high-quality lesson cards for a specific trading education module.

WRITING STYLE GUIDELINES (LURNAVA STYLE):
- TONE: Professional, institutional, technical, and process-driven. Never use "beginner", "easy", or vague motivational language.
- NO FILLER OR TEXTBOOK INTRODUCTIONS: Never start cards with fluff like "In the dynamic world of trading...", "Trading is a journey...", "X is a crucial tool...", "Understanding X is key...". Start directly with the technical concept or rule.
- STRUCTURED BODY: The body text must be highly structured. Use a clear subheader (### Track Name: Specific Topic), a brief 2-sentence context, and then 2-3 detailed bullet points (with bold headers) detailing technical rules, math, or mechanics.
- CONCRETE EXAMPLES: The realLifeExample must use specific instruments, numbers, session times, or prices (e.g. "EURUSD wicking 25 pips on news, triggering a 0.5% DXY risk adjustment..."), never generic descriptions.
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
"### Core Scenario: Branching Logic
Branching logic prevents cognitive bias by planning paths for both the primary trend and its invalidation. This card teaches **how to map branching response paths before session open**.

* **Primary Branch Parameters**: The primary pathway is built on the highest aligned evidence stack, executing only when session catalysts trigger.
* **Alternative Branch Parameters**: The alternative pathway triggers immediately upon invalidation of the primary anchor, shifting the system state to neutral.
* **Objective State Transitions**: The model moves between branches dynamically based on hard structural closes rather than emotional predictions."

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
  "forex": [
    {
      "cardIndex": 1,
      "type": "mission_brief",
      "visualKey": "key-name",
      "subtopic": "Specific unique subtopic title",
      "focus": "2-3 sentence description of exactly what this card teaches — precise, no repeats."
    }
  ],
  "gold": [
    {
      "cardIndex": 1,
      "type": "mission_brief",
      "visualKey": "key-name",
      "subtopic": "Specific unique subtopic title",
      "focus": "2-3 sentence description of exactly what this card teaches — precise, no repeats."
    }
  ],
  "crypto": [
    {
      "cardIndex": 1,
      "type": "mission_brief",
      "visualKey": "key-name",
      "subtopic": "Specific unique subtopic title",
      "focus": "2-3 sentence description of exactly what this card teaches — precise, no repeats."
    }
  ]
}

Rules:
- Core has 15 cards. Forex, Gold, and Crypto have 8 cards each.
- Every card must teach a DISTINCT sub-concept. Even if the same visualKey repeats, the teaching angle must be completely different.
- Frame EVERY card's subtopic and focus strictly through the lens of this module's title and objective. Do NOT create cards that are generic introductions to the instrument/track.
- Progress from foundational → intermediate → advanced → traps/pitfalls → synthesis.
- In each track, Card 1 is always type "mission_brief". The last card is "summary". The second-to-last is "practice". All others are "concept".
- Focus descriptions must be specific enough that a writer can generate 3-5 unique paragraphs without repeating any other card.`;

// ─── OPENAI HELPERS ───────────────────────────────────────────────────────────

async function callOpenAI(
  systemPrompt: string,
  userPrompt: string,
  maxRetries = 4
): Promise<any> {
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
      const text = response.choices[0].message.content || "{}";
      return JSON.parse(text);
    } catch (error) {
      attempts++;
      console.warn(
        `    OpenAI API error (attempt ${attempts}/${maxRetries}):`,
        error
      );
      if (attempts >= maxRetries) throw error;
      await new Promise((r) => setTimeout(r, 8000 * attempts));
    }
  }
}

// ─── STAGE 1: OUTLINE GENERATION ─────────────────────────────────────────────

async function generateModuleOutlines(
  m: (typeof level6Syllabus)[0]
): Promise<{
  core: any[];
  forex: any[];
  gold: any[];
  crypto: any[];
}> {
  const mNum = m.num;
  const mTitle = m.title;
  const mObjective = m.objective;
  const coreKeys = m.coreKeys;
  const fxKeys = m.fxKeys;
  const gdKeys = m.gdKeys;
  const crKeys = m.crKeys;

  const keyList = (keys: string[]) => keys.map((k, i) => `Card ${i + 1}: visualKey="${k}"`).join("\n");

  const prompt = `Design progressive learning outlines for all 4 tracks of Module ${mNum}: "${mTitle}".
Module Objective: ${mObjective}

Syllabus Context for each Track:
- Core Track Focus: ${m.coreContext}
- Forex Track Focus: ${m.fxContext}
- Gold Track Focus: ${m.gdContext}
- Crypto Track Focus: ${m.crContext}

Tracks to design:
1. Core Track (15 cards):
${keyList(coreKeys)}

2. Forex Track (8 cards):
${keyList(fxKeys)}

3. Gold Track (8 cards):
${keyList(gdKeys)}

4. Crypto Track (8 cards):
${keyList(crKeys)}

CRITICAL RULES FOR SUBTOPIC GENERATION:
1. Frame EVERY SINGLE card's subtopic and focus strictly through the lens of this module's title: "${mTitle}", objective: "${mObjective}", and the track-specific syllabus context.
2. The subtopics in Core MUST cover: ${m.coreContext}
3. The subtopics in Forex MUST cover: ${m.fxContext}
4. The subtopics in Gold MUST cover: ${m.gdContext}
5. The subtopics in Crypto MUST cover: ${m.crContext}
6. Do NOT create generic introductory cards about instruments (like "What is Forex", "Understanding Funding Rates", "US Treasury Yields 101").
7. Integrate the track topics ONLY as risk/trade execution parameters or examples as defined by the syllabus context above.
8. In each track, Card 1 is type "mission_brief", the last is "summary", the second-to-last is "practice". All others are "concept".
9. The subtopic titles must be unique to this module to prevent duplication with other modules. Do NOT repeat titles or body contents from other modules.`;

  console.log(`  [Stage 1] Generating outlines for all 4 tracks in a single call...`);
  const result = await callOpenAI(outlineSystemPrompt, prompt);

  const core = result.core || [];
  const forex = result.forex || [];
  const gold = result.gold || [];
  const crypto = result.crypto || [];

  const cleanOutline = (outline: any[], totalCards: number, track: string, visualKeys: string[]) => {
    if (outline.length !== totalCards) {
      console.warn(`    Outline for ${track} returned ${outline.length} items instead of ${totalCards}. Adjusting.`);
      while (outline.length < totalCards) {
        const idx = outline.length + 1;
        const vKey = visualKeys[(outline.length) % visualKeys.length] || "";
        outline.push({
          cardIndex: idx,
          type: idx === 1 ? "mission_brief" : idx === totalCards ? "summary" : idx === totalCards - 1 ? "practice" : "concept",
          visualKey: vKey,
          subtopic: `${track} Advanced Risk Management ${idx}`,
          focus: `Advanced application of ${mTitle} concepts specific to ${track} trading, covering capital defense and risk management metrics for card ${idx}.`,
        });
      }
      outline.length = totalCards;
    }
    // Force index and key assignments correctly
    for (let i = 0; i < outline.length; i++) {
      outline[i].cardIndex = i + 1;
      outline[i].visualKey = visualKeys[i % visualKeys.length] || "";
      outline[i].type = i === 0 ? "mission_brief" : i === totalCards - 1 ? "summary" : i === totalCards - 2 ? "practice" : "concept";
    }
    return outline;
  };

  return {
    core: cleanOutline(core, 15, "Core", coreKeys),
    forex: cleanOutline(forex, 8, "Forex", fxKeys),
    gold: cleanOutline(gold, 8, "Gold", gdKeys),
    crypto: cleanOutline(crypto, 8, "Crypto", crKeys),
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
    const batchOutline = outlineSlice.slice(
      batchIdx * batchSize,
      batchIdx * batchSize + batchSize
    );

    const prompt = `Write ${batchOutline.length} lesson cards for Module ${mNum} ("${mTitle}"), ${track} Track.
Module Objective: ${mObjective}

Cards to write (in order):
${batchOutline
  .map(
    (c) =>
      `- Card ${c.cardIndex} | Type: "${c.type}" | VisualKey: "${c.visualKey}"
  Subtopic: "${c.subtopic}"
  Focus: ${c.focus}
  Label: "${track} Track"`
  )
  .join("\n\n")}

IMPORTANT: Write each card's body and context fields SPECIFICALLY about the subtopic and focus above — not about the module in general. Each card must be completely distinct from the others in this batch.
Return exactly ${batchOutline.length} cards in the "cards" array.`;

    console.log(
      `      [Stage 2] Generating Batch ${batchIdx + 1}/${totalBatches} (Cards ${batchOutline[0].cardIndex}–${batchOutline[batchOutline.length - 1].cardIndex})...`
    );

    let batchResultCards: any[] = [];
    let retryAttempt = 0;

    const result = await callOpenAI(cardWriterSystemPrompt, prompt);
    batchResultCards = result.cards || [];

    while (
      batchResultCards.length !== batchOutline.length &&
      retryAttempt < 3
    ) {
      retryAttempt++;
      console.warn(
        `      Warning: Got ${batchResultCards.length} cards, expected ${batchOutline.length}. Retry attempt ${retryAttempt}...`
      );
      const retryResult = await callOpenAI(cardWriterSystemPrompt, prompt);
      batchResultCards = retryResult.cards || [];
    }

    if (batchResultCards.length !== batchOutline.length) {
      console.error(
        `      FATAL: Could not get correct batch size after ${retryAttempt} retries. Got ${batchResultCards.length}, expected ${batchOutline.length}.`
      );
      while (batchResultCards.length < batchOutline.length) {
        const o = batchOutline[batchResultCards.length];
        batchResultCards.push({
          type: o.type,
          title: o.subtopic,
          label: `${track} Track`,
          body: `### Scenario Planning: ${o.subtopic}\nThis card covers: ${o.focus}\n\n* **Branch parameters**: Sizing parameters are tailored to session setups.\n* **Execution rules**: Dynamic capital boundaries guide order entry.`,
          context: {
            keyTerms: [],
            whyThisMatters: `This scenario planning concept is foundational to ${track} trading within Module ${mNum}.`,
            realLifeExample: `Applied in ${track} execution conditions.`,
            commonMistake: `Violating branch triggers leads to narrative lock.`,
            quickNote: `Review the ${o.subtopic} concept carefully.`,
            mentorText: `Focus on understanding ${o.subtopic} before setting position parameters.`,
            mentorAnalogy: `Like checking flight path checklists — flight plan safety is absolute.`,
          },
          taskData: null,
          visualKey: o.visualKey,
        });
      }
    }

    for (let idx = 0; idx < batchResultCards.length; idx++) {
      const outline = batchOutline[idx];
      const card = batchResultCards[idx];
      card.visualKey = outline.visualKey;
      card.label = `${track} Track`;
      
      // Defensively move taskData to card root if nested in card.context
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

async function generateModule(m: (typeof level6Syllabus)[0]) {
  const modNum = m.num.split(".")[1];
  const modDir = path.join(
    __dirname,
    "../src/content/level-6",
    `module-6-${modNum}`
  );
  if (!fs.existsSync(modDir)) {
    fs.mkdirSync(modDir, { recursive: true });
  }

  console.log(`\n${"═".repeat(60)}`);
  console.log(`MODULE 6.${modNum}: ${m.title}`);
  console.log(`${"═".repeat(60)}`);

  const outlines = await generateModuleOutlines(m);
  const coreOutline = outlines.core;
  const forexOutline = outlines.forex;
  const goldOutline = outlines.gold;
  const cryptoOutline = outlines.crypto;

  console.log(
    `  [Stage 1] Outlines complete. Core=${coreOutline.length}, Forex=${forexOutline.length}, Gold=${goldOutline.length}, Crypto=${cryptoOutline.length}`
  );

  console.log(`  [Stage 2] Generating card content...`);

  console.log(`  Generating Core cards...`);
  const coreCards = await generateCardsFromOutline(
    m.num,
    m.title,
    m.objective,
    "Core",
    coreOutline
  );

  console.log(`  Generating Forex cards...`);
  const forexCards = await generateCardsFromOutline(
    m.num,
    m.title,
    m.objective,
    "Forex",
    forexOutline
  );

  console.log(`  Generating Gold cards...`);
  const goldCards = await generateCardsFromOutline(
    m.num,
    m.title,
    m.objective,
    "Gold",
    goldOutline
  );

  console.log(`  Generating Crypto cards...`);
  const cryptoCards = await generateCardsFromOutline(
    m.num,
    m.title,
    m.objective,
    "Crypto",
    cryptoOutline
  );

  // ── Write files ──
  const writeTS = (filename: string, varName: string, cards: any[]) => {
    const content = `import { LessonCard } from "../../../types/curriculum";\n\nexport const ${varName}: LessonCard[] = ${JSON.stringify(cards, null, 2)};\n`;
    fs.writeFileSync(path.join(modDir, filename), content);
    console.log(`  ✓ Wrote ${filename} (${cards.length} cards)`);
  };

  writeTS("core.ts", "coreCards", coreCards);
  writeTS("forex.ts", "forexCards", forexCards);
  writeTS("gold.ts", "goldCards", goldCards);
  writeTS("crypto.ts", "cryptoCards", cryptoCards);

  // Write index.ts
  const indexContent = `import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module6${modNum}: AcademyModule = {
  moduleNumber: "${m.num}",
  level: 6,
  title: "${m.title}",
  objective: "${m.objective}",
  skillLevel: "advanced",
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

  console.log(
    `  ✅ Module 6.${modNum} complete — Core:${coreCards.length} Forex:${forexCards.length} Gold:${goldCards.length} Crypto:${cryptoCards.length}`
  );
}

// ─── ROOT INDEX UPDATER ───────────────────────────────────────────────────────

function updateRootIndex() {
  const imports = level6Syllabus
    .map(
      (m) =>
        `import { module6${m.num.split(".")[1]} } from "./module-6-${m.num.split(".")[1]}";`
    )
    .join("\n");

  const exports =
    `export const level6Curriculum: AcademyModule[] = [\n` +
    level6Syllabus
      .map((m) => `  module6${m.num.split(".")[1]}`)
      .join(",\n") +
    `\n];`;

  const content = `${imports}\nimport { AcademyModule } from "../../types/curriculum";\n\n${exports}\n`;

  const contentDir = path.join(__dirname, "../src/content/level-6");
  if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir, { recursive: true });
  }

  fs.writeFileSync(
    path.join(contentDir, "index.ts"),
    content
  );
  console.log("\n✓ Updated Level 6 root index.ts");
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

async function run() {
  const args = process.argv.slice(2);
  const targetModuleArg = args
    .find((a) => a.startsWith("--module="))
    ?.split("=")[1];
  const startArg = args
    .find((a) => a.startsWith("--start="))
    ?.split("=")[1];
  const force = args.includes("--force");
  const auto = args.includes("--auto");

  console.log(
    "╔══════════════════════════════════════════════════════════╗"
  );
  console.log(
    "║   Lurnava Level 6 — Two-Stage Curriculum Generator       ║"
  );
  console.log(
    "║   Stage 1: AI Outline → Stage 2: Full Card Writing       ║"
  );
  console.log(
    "╚══════════════════════════════════════════════════════════╝\n"
  );

  let targetModules = level6Syllabus;
  if (targetModuleArg) {
    targetModules = level6Syllabus.filter(
      (m) => m.num.split(".")[1] === targetModuleArg
    );
  } else if (startArg) {
    const startIdx = parseInt(startArg);
    targetModules = level6Syllabus.filter(
      (m) => parseInt(m.num.split(".")[1]) >= startIdx
    );
  }

  if (targetModules.length === 0) {
    console.error(`Error: Targeted module(s) not found.`);
    rl.close();
    process.exit(1);
  }

  let completed = 0;
  let failed = 0;

  for (let i = 0; i < targetModules.length; i++) {
    const m = targetModules[i];
    const modNum = m.num.split(".")[1];
    const modDir = path.join(
      __dirname,
      "../src/content/level-6",
      `module-6-${modNum}`
    );
    const filesExist =
      fs.existsSync(path.join(modDir, "core.ts")) &&
      fs.existsSync(path.join(modDir, "forex.ts")) &&
      fs.existsSync(path.join(modDir, "gold.ts")) &&
      fs.existsSync(path.join(modDir, "crypto.ts"));

    if (filesExist && !force && !targetModuleArg) {
      console.log(
        `  Skipping Module 6.${modNum} (files exist — use --force to regenerate)`
      );
      continue;
    }

    if (targetModules.length > 1 && !auto) {
      console.log(`\n============================================================`);
      console.log(`Next Module in Queue: 6.${modNum} - ${m.title}`);
      console.log(`============================================================\n`);
      const answer = await askQuestion(
        `Press ENTER to generate Module 6.${modNum}, type 'skip' to skip it, or type 'exit' to stop: `
      );
      if (answer.toLowerCase() === "exit") {
        console.log("Exiting generator queue.");
        break;
      }
      if (answer.toLowerCase() === "skip") {
        console.log(`Skipped Module 6.${modNum}`);
        continue;
      }
    }

    try {
      await generateModule(m);
      completed++;
    } catch (err) {
      console.error(`❌ Failed to generate Module 6.${modNum}:`, err);
      failed++;
    }
  }

  updateRootIndex();

  console.log(`\nCurriculum generation session complete! Completed: ${completed}, Failed: ${failed}`);
  rl.close();
}

run();
