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

const level3Syllabus = [
  {
    num: "3.1",
    title: "Order Blocks Intro",
    objective: "Understand the true definition and structural footprint of institutional Order Blocks.",
    coreKeys: ["ob-intro", "ob-definition", "ob-mechanics", "ob-bos-relation", "ob-intro-debrief"],
    fxKeys: ["forex-ob-accumulation"],
    gdKeys: ["gold-ob-yield-sweeps"],
    crKeys: ["crypto-ob-venue-liquidations"],
    coreContext: "Defining institutional Order Blocks (OBs) as footprint accumulations; distinguishing institutional blocks from retail support/resistance zones.",
    fxContext: "Session-specific ECN/STP bank accumulation/distribution; London open OB prints.",
    gdContext: "Gold OB volatility; yields sweeps causing rapid OB formations.",
    crContext: "Crypto exchange books; CEX/DEX venue liquidation delta footprints."
  },
  {
    num: "3.2",
    title: "Bullish & Bearish OBs",
    objective: "Identify open boundaries and calculate Mean Threshold (50%) of Order Blocks.",
    coreKeys: ["ob-types-intro", "ob-bullish-bearish", "ob-mean-threshold", "ob-entry-boundaries", "ob-types-debrief"],
    fxKeys: ["forex-ob-session"],
    gdKeys: ["gold-ob-spike-buffer"],
    crKeys: ["crypto-ob-spot-perp"],
    coreContext: "Bullish vs bearish candle structures; calculating Mean Threshold (50% midpoint of the block).",
    fxContext: "Session OB retest timing; NY open retest alignments.",
    gdContext: "Stop sweep buffers for gold OBs; wick tolerance metrics.",
    crContext: "Spot-perp deviations; comparing perp blocks with spot order book volumes."
  },
  {
    num: "3.3",
    title: "Mitigation Blocks",
    objective: "Map trapped institutional orders when price fails to take out swing extremes.",
    coreKeys: ["mitigation-intro", "mitigation-mechanics", "trapped-orders", "mitigation-entry", "mitigation-debrief"],
    fxKeys: ["forex-mitigation-session"],
    gdKeys: ["gold-mitigation-sweeps"],
    crKeys: ["crypto-mitigation-perp"],
    coreContext: "Trapped institutional orders; price failing to clear swing extremes.",
    fxContext: "Session-specific mitigation; EURUSD/GBPUSD block mitigations.",
    gdContext: "Gold stop hunt mitigations; COMEX futures ledger sweeps.",
    crContext: "Altcoin perp mitigations; exchange funding rollover imbalances."
  },
  {
    num: "3.4",
    title: "Breaker Blocks",
    objective: "Identify narrative shifts when protected order blocks are swept and turn into support/resistance breakers.",
    coreKeys: ["breaker-intro", "breaker-mechanics", "ob-to-breaker", "breaker-entry", "breaker-debrief"],
    fxKeys: ["forex-breaker-london"],
    gdKeys: ["gold-breaker-macro"],
    crKeys: ["crypto-breaker-funding"],
    coreContext: "Protected OB sweeps; narrative shifts converting blocks to support/resistance.",
    fxContext: "London session breaker blocks; GBPUSD sweeps converting to breakers.",
    gdContext: "US yields and CPI sweeps; gold macro news breaker setups.",
    crContext: "Funding rate cycles; clearing perp leverage structures."
  },
  {
    num: "3.5",
    title: "Propulsion Blocks",
    objective: "Spot highly accelerated order block retests that show immediate price expansion.",
    coreKeys: ["propulsion-intro", "propulsion-mechanics", "momentum-acceleration", "propulsion-entry", "propulsion-debrief"],
    fxKeys: ["forex-propulsion-news"],
    gdKeys: ["gold-propulsion-sweeps"],
    crKeys: ["crypto-propulsion-liquidations"],
    coreContext: "Accelerated OB retests; momentum propagation and instant expansion.",
    fxContext: "News-driven FX propulsion; CPI/NFP instant expansions.",
    gdContext: "Gold propulsion blocks; COMEX pit volume retest spikes.",
    crContext: "Perpetual liquidation cascade propulsion; leverage accelerations."
  },
  {
    num: "3.6",
    title: "Fair Value Gaps (FVG)",
    objective: "Understand three-candle imbalance delivery and efficient pricing mechanics.",
    coreKeys: ["fvg-intro", "fvg-three-candle", "imbalance-delivery", "fvg-validation", "fvg-debrief"],
    fxKeys: ["forex-fvg-news"],
    gdKeys: ["gold-fvg-yields"],
    crKeys: ["crypto-fvg-liquidations"],
    coreContext: "Three-candle imbalance delivery; efficient vs inefficient pricing.",
    fxContext: "News prints causing FX gaps; USD CPI/NFP three-candle imbalances.",
    gdContext: "Real yield spreads; Gold yield-related imbalances.",
    crContext: "CEX/DEX funding imbalances; perp liquidations forming voids."
  },
  {
    num: "3.7",
    title: "Inversion FVGs",
    objective: "Identify support/resistance flips when gaps are run through by price.",
    coreKeys: ["inversion-intro", "inversion-mechanics", "fvg-to-inversion", "inversion-entry", "inversion-debrief"],
    fxKeys: ["forex-inversion-rollover"],
    gdKeys: ["gold-inversion-sweeps"],
    crKeys: ["crypto-inversion-perp"],
    coreContext: "Gap runs; converting FVG support to resistance and vice versa.",
    fxContext: "London close rollover inversion FVGs.",
    gdContext: "Gold wick-swept inversions; Treasury auction shifts.",
    crContext: "Funding rate flips; perpetual leverage inversion gaps."
  },
  {
    num: "3.8",
    title: "Consequent Encroachment",
    objective: "Calculate and trade the 50% midpoint of Fair Value Gaps as exact anchors.",
    coreKeys: ["ce-intro", "ce-midpoint", "ce-validation", "ce-reversal-signs", "ce-debrief"],
    fxKeys: ["forex-ce-adr"],
    gdKeys: ["gold-ce-volatility"],
    crKeys: ["crypto-ce-funding"],
    coreContext: "Consequent Encroachment (CE) as the 50% midpoint of FVGs; entry anchors.",
    fxContext: "Forex ADR target scaling; daily/weekly CE anchors.",
    gdContext: "Gold wick-tolerances; Gold volatility adjustments for FVG midpoints.",
    crContext: "Crypto funding rate cycles; perp premium/discount CE alignment."
  },
  {
    num: "3.9",
    title: "Volume Imbalances",
    objective: "Spot subtle gaps in candle bodies where wicks overlap but body ranges do not.",
    coreKeys: ["vi-intro", "vi-mechanics", "body-vs-wick-imbalance", "vi-entry-validation", "vi-debrief"],
    fxKeys: ["forex-vi-weekend"],
    gdKeys: ["gold-vi-comex"],
    crKeys: ["crypto-vi-fragmentation"],
    coreContext: "Candle body gap delivery where wicks overlap but body ranges do not.",
    fxContext: "FX weekend gap rollovers; market reopen volume imbalances.",
    gdContext: "COMEX futures pit reopens; volume imbalances during pit opens.",
    crContext: "Crypto CEX/DEX book fragmentations; venue volume deviations."
  },
  {
    num: "3.10",
    title: "Liquidity Voids",
    objective: "Differentiate rate/news gaps from volume imbalances and map void fill reversals.",
    coreKeys: ["void-intro", "void-mechanics", "rate-voids", "void-fill-reversals", "void-debrief"],
    fxKeys: ["forex-void-rate"],
    gdKeys: ["gold-void-cpi"],
    crKeys: ["crypto-void-unlock"],
    coreContext: "Rate/news gaps vs volume imbalances; void fill reversal mechanics.",
    fxContext: "Central bank interest rate decisions; FX rate voids.",
    gdContext: "US CPI prints; gold void fills under yield accelerations.",
    crContext: "Token unlock cascades; crypto liquidity voids."
  },
  {
    num: "3.11",
    title: "Footprint Basics",
    objective: "Read bid/ask order book volume delta imbalances at specific price levels.",
    coreKeys: ["footprint-intro", "footprint-delta", "bid-ask-imbalances", "orderbook-depth", "footprint-debrief"],
    fxKeys: ["forex-footprint-ecn"],
    gdKeys: ["gold-footprint-comex"],
    crKeys: ["crypto-footprint-mismatch"],
    coreContext: "Bid/ask order book volume delta imbalances at key prices.",
    fxContext: "ECN interbank volume deltas.",
    gdContext: "COMEX physical futures ledger deltas.",
    crContext: "Spot vs perp leverage mismatches."
  },
  {
    num: "3.12",
    title: "Order flow Confluences",
    objective: "Stack order flow block and gap footprints with market structure filters.",
    coreKeys: ["confluence-intro", "confluence-stacking", "orderflow-confluence", "confluence-entry", "confluence-debrief"],
    fxKeys: ["forex-confluence-dxy"],
    gdKeys: ["gold-confluence-yields"],
    crKeys: ["crypto-confluence-btc"],
    coreContext: "Stacking order flow blocks/gaps with structural filters.",
    fxContext: "Forex DXY index alignment confluences.",
    gdContext: "Gold yields overlay; macro confluence models.",
    crContext: "BTC dominance state confluences for altcoins."
  },
  {
    num: "3.13",
    title: "Invalidated Footprints",
    objective: "Manage risk when institutional order blocks and gaps fail to defend.",
    coreKeys: ["invalid-footprint-intro", "invalid-ob-fvg", "failure-signs", "risk-mitigation", "invalid-footprint-debrief"],
    fxKeys: ["forex-invalid-session"],
    gdKeys: ["gold-invalid-yields"],
    crKeys: ["crypto-invalid-perp"],
    coreContext: "Risk management when OBs and FVGs fail to defend; failure signs.",
    fxContext: "FX session rollover failures; spread expansion stop invalidations.",
    gdContext: "Gold yield correlation breaks; stop position sizing adjustments.",
    crContext: "Funding cascades; perpetual liquidation breaks."
  },
  {
    num: "3.14",
    title: "Order Flow Checklists",
    objective: "Apply quantitative checks to grade order flow footprints before planning executions.",
    coreKeys: ["checklist-intro", "checklist-criteria", "orderflow-grade", "checklist-evaluation", "checklist-debrief"],
    fxKeys: ["forex-checklist-session"],
    gdKeys: ["gold-checklist-yields"],
    crKeys: ["crypto-checklist-spot-perp"],
    coreContext: "Scoring order flow footprints before execution planning.",
    fxContext: "Session footprint grades; spread-to-range check.",
    gdContext: "Gold ATR checks; volatility fit scores.",
    crContext: "Spot-perp delta checks; book depth validation."
  },
  {
    num: "3.15",
    title: "Level 3 Review",
    objective: "Synthesize all Level 3 order flow footprint concepts to prepare for the Capstone Scenario and Exam.",
    coreKeys: ["level3-review-intro", "orderflow-checklist", "interactive-footprint-prep", "exam-prep-overview", "level3-review-debrief"],
    fxKeys: ["forex-multi-pair-orderflow"],
    gdKeys: ["gold-comex-orderflow"],
    crKeys: ["crypto-cex-orderflow"],
    coreContext: "Synthesis of order flow footprint concepts; exam checklist.",
    fxContext: "Multi-pair structural audits; session flow check.",
    gdContext: "Gold COMEX order flow checklist; macro review.",
    crContext: "Spot vs futures review checklist; perp funding and spot book checks."
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
- CONCRETE EXAMPLES: The realLifeExample must use specific instruments, numbers, session times, or prices (e.g. "EURUSD at 8:30 AM EST CPI release wicking 25 pips..."), never generic descriptions.
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
"### Forex Order Flow: ECN Liquidity Footprints
Forex spot markets route volume across decentralized ECN networks. This card teaches **how to spot volume footprint deltas on session-specific liquidity pools**.

* **ECN Feed Deltas**: Imbalance thresholds are identified when the bid-ask spread on spot platforms deviates by more than 15% from futures ledger benchmarks during session openings.
* **Asian Session Mitigation**: Order blocks printed in low-volume Asian consolidation ranges are rejected if London opens without a clearing stop-run of the Asian high or low.
* **DXY Correlation Filter**: Confirm the USD order flow footprint by checking for matching inverse deltas on the DXY index before initiating major pair entries."

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
- DO NOT write generic instrument definitions or introductions (e.g. do not just explain what DXY, funding rates, or treasury yields are). Frame them strictly within the subtopic/focus of this module's lesson.
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
        model: "gpt-4o-mini", // Optimized Model
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
  m: (typeof level3Syllabus)[0]
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
7. Integrate the track topics ONLY as order flow/market mechanics contexts or examples as defined by the syllabus context above.
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
          subtopic: `${track} Advanced Application ${idx}`,
          focus: `Advanced application of ${mTitle} concepts specific to ${track} trading, covering edge cases and professional-level nuances for card ${idx}.`,
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
          body: `This card covers: ${o.focus}`,
          context: {
            keyTerms: [],
            whyThisMatters: `This concept is foundational to ${track} trading within Module ${mNum}.`,
            realLifeExample: `Applied in ${track} market conditions.`,
            commonMistake: `Skipping this step leads to poorly planned setups.`,
            quickNote: `Review the ${o.subtopic} concept carefully.`,
            mentorText: `Focus on understanding ${o.subtopic} before moving forward.`,
            mentorAnalogy: `Like building a house — foundations before walls.`,
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

async function generateModule(m: (typeof level3Syllabus)[0]) {
  const modNum = m.num.split(".")[1];
  const modDir = path.join(
    __dirname,
    "../src/content/level-3",
    `module-3-${modNum}`
  );
  if (!fs.existsSync(modDir)) {
    fs.mkdirSync(modDir, { recursive: true });
  }

  console.log(`\n${"═".repeat(60)}`);
  console.log(`MODULE 3.${modNum}: ${m.title}`);
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

export const module3${modNum}: AcademyModule = {
  moduleNumber: "${m.num}",
  level: 3,
  title: "${m.title}",
  objective: "${m.objective}",
  skillLevel: "intermediate",
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
    `  ✅ Module 3.${modNum} complete — Core:${coreCards.length} Forex:${forexCards.length} Gold:${goldCards.length} Crypto:${cryptoCards.length}`
  );
}

// ─── ROOT INDEX UPDATER ───────────────────────────────────────────────────────

function updateRootIndex() {
  const imports = level3Syllabus
    .map(
      (m) =>
        `import { module3${m.num.split(".")[1]} } from "./module-3-${m.num.split(".")[1]}";`
    )
    .join("\n");

  const exports =
    `export const level3Curriculum: AcademyModule[] = [\n` +
    level3Syllabus
      .map((m) => `  module3${m.num.split(".")[1]}`)
      .join(",\n") +
    `\n];`;

  const content = `${imports}\nimport { AcademyModule } from "../../types/curriculum";\n\n${exports}\n`;

  const contentDir = path.join(__dirname, "../src/content/level-3");
  if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir, { recursive: true });
  }

  fs.writeFileSync(
    path.join(contentDir, "index.ts"),
    content
  );
  console.log("\n✓ Updated Level 3 root index.ts");
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
    "║   Lurnava Level 3 — Two-Stage Curriculum Generator       ║"
  );
  console.log(
    "║   Stage 1: AI Outline → Stage 2: Full Card Writing       ║"
  );
  console.log(
    "╚══════════════════════════════════════════════════════════╝\n"
  );

  let targetModules = level3Syllabus;
  if (targetModuleArg) {
    targetModules = level3Syllabus.filter(
      (m) => m.num.split(".")[1] === targetModuleArg
    );
  } else if (startArg) {
    const startIdx = parseInt(startArg);
    targetModules = level3Syllabus.filter(
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
      "../src/content/level-3",
      `module-3-${modNum}`
    );
    const filesExist =
      fs.existsSync(path.join(modDir, "core.ts")) &&
      fs.existsSync(path.join(modDir, "forex.ts")) &&
      fs.existsSync(path.join(modDir, "gold.ts")) &&
      fs.existsSync(path.join(modDir, "crypto.ts"));

    if (filesExist && !force && !targetModuleArg) {
      console.log(
        `  Skipping Module 3.${modNum} (files exist — use --force to regenerate)`
      );
      continue;
    }

    if (targetModules.length > 1 && !auto) {
      console.log(`\n============================================================`);
      console.log(`Next Module in Queue: 3.${modNum} - ${m.title}`);
      console.log(`============================================================\n`);
      const answer = await askQuestion(
        `Press ENTER to generate Module 3.${modNum}, type 'skip' to skip it, or type 'exit' to stop: `
      );
      const cleanAnswer = answer.trim().toLowerCase();
      if (cleanAnswer === "exit" || cleanAnswer === "stop") {
        console.log("Exiting workflow. Updating root index file...");
        updateRootIndex();
        rl.close();
        process.exit(0);
      }
      if (cleanAnswer === "skip") {
        console.log(`Skipping Module 3.${modNum}.`);
        continue;
      }
    }

    try {
      await generateModule(m);
      completed++;
    } catch (err) {
      console.error(`\n❌ Failed to generate Module 3.${modNum}:`, err);
      failed++;
    }
  }

  updateRootIndex();
  rl.close();

  console.log(`\n${"═".repeat(60)}`);
  console.log(
    `Generation complete — ✅ ${completed} modules succeeded, ❌ ${failed} failed.`
  );
  console.log(`${"═".repeat(60)}`);

  if (failed > 0) process.exit(1);
}

run();
