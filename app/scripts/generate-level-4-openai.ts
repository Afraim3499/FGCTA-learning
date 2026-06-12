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

const level4Syllabus = [
  {
    num: "4.1",
    title: "Daily Cycle Basics",
    objective: "Understand the core session cycle of consolidation, manipulation, and distribution.",
    coreKeys: ["daily-cycle-intro", "asia-london-ny-flow", "judas-swing-basics", "distribution-mechanics", "daily-cycle-debrief"],
    fxKeys: ["forex-daily-cycle"],
    gdKeys: ["gold-daily-cycle"],
    crKeys: ["crypto-daily-cycle"],
    coreContext: "The consolidation, manipulation, and distribution (AMD) cycle. How intraday price cycles repeat algorithmically.",
    fxContext: "Session timing flow (Asia consolidation, London Judas swing, NY expansion).",
    gdContext: "Gold spot pricing cycles, London fixing AM/PM windows and COMEX open.",
    crContext: "The 24/7 crypto volume cycle, Asian bidding hours vs. Western profit-taking."
  },
  {
    num: "4.2",
    title: "The Asian Range",
    objective: "Map the Asian range and identify its boundaries as early key liquidity pools.",
    coreKeys: ["asia-range-intro", "asian-boundaries", "range-extension-traps", "equilibrium-reference", "asia-range-debrief"],
    fxKeys: ["forex-asia-range"],
    gdKeys: ["gold-asia-range"],
    crKeys: ["crypto-asia-range"],
    coreContext: "Mapping the Asian Range (8:00 PM - 12:00 AM EST) to identify early liquidity pools.",
    fxContext: "EURUSD/GBPUSD Asian range boundaries and daily projections.",
    gdContext: "Gold spot Asian consolidation ranges (USD/oz) and early pricing.",
    crContext: "Tokyo/Seoul session bid ranges, low-liquidity weekend ranges."
  },
  {
    num: "4.3",
    title: "The London Open",
    objective: "Identify Judas Swing manipulation sweeps at London open that form the LOD/HOD.",
    coreKeys: ["london-open-intro", "judas-swing-mechanics", "sweep-rejection-signatures", "london-low-high-day", "london-open-debrief"],
    fxKeys: ["forex-london-open"],
    gdKeys: ["gold-london-open"],
    crKeys: ["crypto-london-open"],
    coreContext: "The Judas Swing mechanics. How algorithms sweep early liquidity to form HOD/LOD.",
    fxContext: "GBPUSD/EURUSD London open liquidity sweeps (2:00 AM - 5:00 AM EST).",
    gdContext: "Pre-London fixing liquidity runs (10:30 AM GMT) and physical market setups.",
    crContext: "London open altcoin volatility swings and leverage flushes."
  },
  {
    num: "4.4",
    title: "The NY Open & Overlap",
    objective: "Recognize the NY session overlap volatility and trade London reversals or continuations.",
    coreKeys: ["ny-open-intro", "london-reversal-signs", "ny-continuation-mechanics", "session-handoffs", "ny-open-debrief"],
    fxKeys: ["forex-ny-open"],
    gdKeys: ["gold-ny-open"],
    crKeys: ["crypto-ny-open"],
    coreContext: "NY session overlap volatility. Analyzing London continuation vs. reversal profiles.",
    fxContext: "NY overlap (7:00 AM - 10:00 AM EST) continuation or reversal patterns.",
    gdContext: "COMEX physical futures open volatility (8:20 AM EST) and fading initial sweeps.",
    crContext: "US derivatives open volume surges and spot vs. CME futures overlap."
  },
  {
    num: "4.5",
    title: "Power of 3 (PO3)",
    objective: "Deconstruct the daily candle into Accumulation, Manipulation, and Distribution phases.",
    coreKeys: ["po3-template-intro", "ohlc-phase-mapping", "accumulation-phase", "manipulation-sweeps", "po3-template-debrief"],
    fxKeys: ["forex-po3-template"],
    gdKeys: ["gold-po3-template"],
    crKeys: ["crypto-po3-template"],
    coreContext: "Daily candle OHLC anatomy: Open (Accumulation), Wick (Manipulation), Body (Distribution).",
    fxContext: "PO3 daily candle development templates for major currency pairs.",
    gdContext: "Gold daily candle projections based on interest rates and fixings.",
    crContext: "Perpetual contract daily profiles, funding rate settlements, close liquidations."
  },
  {
    num: "4.6",
    title: "Midnight Open Anchor",
    objective: "Utilize the 12:00 AM EST Midnight Opening Price as the primary algorithmic line of accumulation.",
    coreKeys: ["midnight-open-intro", "midnight-price-anchor", "above-below-midnight", "true-day-direction", "midnight-open-debrief"],
    fxKeys: ["forex-midnight-open"],
    gdKeys: ["gold-midnight-open"],
    crKeys: ["crypto-midnight-open"],
    coreContext: "The 12:00 AM EST Midnight Opening Price as the primary algorithmic line of accumulation.",
    fxContext: "Trading EURUSD above/below midnight open to confirm daily directional bias.",
    gdContext: "Gold spot pricing behavior relative to midnight benchmark for day trading.",
    crContext: "Midnight open as the key reference point for daily perpetual leverage sweeps."
  },
  {
    num: "4.7",
    title: "London Killzone",
    objective: "Master the execution parameters of the 2:00 AM - 5:00 AM EST London Killzone.",
    coreKeys: ["london-killzone-intro", "london-hours-window", "london-liquidity-sweeps", "london-setup-filters", "london-killzone-debrief"],
    fxKeys: ["forex-london-killzone"],
    gdKeys: ["gold-london-killzone"],
    crKeys: ["crypto-london-killzone"],
    coreContext: "Execution rules for the 2:00 AM - 5:00 AM EST London Killzone window.",
    fxContext: "Capturing London Open setups on GBPUSD/EURUSD after Asian Range runs.",
    gdContext: "Bullion price volatility during early morning European sessions.",
    crContext: "Hedging perp positions and trading early European session breakouts."
  },
  {
    num: "4.8",
    title: "NY Killzone",
    objective: "Master the execution parameters of the 7:00 AM - 10:00 AM EST New York Killzone.",
    coreKeys: ["ny-killzone-intro", "ny-hours-window", "ny-macro-overlaps", "ny-news-filters", "ny-killzone-debrief"],
    fxKeys: ["forex-ny-killzone"],
    gdKeys: ["gold-ny-killzone"],
    crKeys: ["crypto-ny-killzone"],
    coreContext: "Execution rules for the 7:00 AM - 10:00 AM EST New York Killzone window.",
    fxContext: "Macro news releases (CPI, NFP, retail sales) trading parameters.",
    gdContext: "Trading the gold COMEX volatility window and post-open stabilization setups.",
    crContext: "Trading US equities open volume bursts and CME Bitcoin futures volume spikes."
  },
  {
    num: "4.9",
    title: "London Close Killzone",
    objective: "Understand position liquidations and profit-taking targets during the 10:00 AM - 12:00 PM EST London Close.",
    coreKeys: ["london-close-intro", "london-close-hours", "counter-trend-retracements", "position-unwinding", "london-close-debrief"],
    fxKeys: ["forex-london-close"],
    gdKeys: ["gold-london-close"],
    crKeys: ["crypto-london-close"],
    coreContext: "Capital preservation during the London close (10:00 AM - 12:00 PM EST) profit-taking window.",
    fxContext: "Trading counter-trend retracements or winding down FX exposure.",
    gdContext: "London PM fix (3:00 PM GMT) sweeps and post-noon gold stabilization.",
    crContext: "Crypto afternoon consolidations and perpetual leverage unwinding."
  },
  {
    num: "4.10",
    title: "Macro Windows",
    objective: "Audit algorithmic delivery during high-precision 20-minute macro windows.",
    coreKeys: ["macro-windows-intro", "macro-time-frames", "algo-spoofing-signs", "liquidity-run-macro", "macro-windows-debrief"],
    fxKeys: ["forex-macro-windows"],
    gdKeys: ["gold-macro-windows"],
    crKeys: ["crypto-macro-windows"],
    coreContext: "High-frequency 20-minute algorithmic macro delivery windows (e.g. 9:50 AM - 10:10 AM EST).",
    fxContext: "Interbank algo spoofing and liquidity runs during scheduled windows.",
    gdContext: "Gold COMEX order book resets and basis bid shifts during macro windows.",
    crContext: "Perp order book depth checks and cross-venue latency arb windows."
  },
  {
    num: "4.11",
    title: "Weekly Cycles",
    objective: "Map the formation of the High/Low of the Week (HOW/LOW) on Monday or Tuesday.",
    coreKeys: ["weekly-cycles-intro", "mon-tue-low-high", "mid-week-reversals", "weekly-range-expansion", "weekly-cycles-debrief"],
    fxKeys: ["forex-weekly-cycles"],
    gdKeys: ["gold-weekly-cycles"],
    crKeys: ["crypto-weekly-cycles"],
    coreContext: "Deconstructing the weekly candle. High/Low of the week (HOW/LOW) on Monday/Tuesday and mid-week reversals.",
    fxContext: "Weekly range expansion profiles for Forex pairs (Tuesday LOD/HOD setups).",
    gdContext: "Commodity weekly cycles, yield adjustments, physical gold weekly flows.",
    crContext: "The weekend CME Gap, Monday morning sweeps, and weekly leverage expansion."
  },
  {
    num: "4.12",
    title: "Time & Price Confluences",
    objective: "Synthesize killzone clock windows with order blocks and Fair Value Gap anchors.",
    coreKeys: ["confluence-tp-intro", "session-anchor-confluence", "time-price-stacking", "high-prob-windows", "confluence-tp-debrief"],
    fxKeys: ["forex-confluence-tp"],
    gdKeys: ["gold-confluence-tp"],
    crKeys: ["crypto-confluence-tp"],
    coreContext: "Confluence of Killzone windows, order blocks, FVGs, and equilibrium.",
    fxContext: "Aligning DXY structures with major FX setups for high-probability executions.",
    gdContext: "Gold COMEX open sweeps coinciding with daily support/resistance and yields.",
    crContext: "BTC funding rates matching perpetual discount arrays during high-volume sessions."
  },
  {
    num: "4.13",
    title: "Time-based Invalidation",
    objective: "Invalidate trade blueprints when setup targets are missed within killzone windows.",
    coreKeys: ["time-invalidation-intro", "window-expiration-rules", "time-decay-plan", "inactive-session-pass", "time-invalidation-debrief"],
    fxKeys: ["forex-time-invalidation"],
    gdKeys: ["gold-time-invalidation"],
    crKeys: ["crypto-time-invalidation"],
    coreContext: "Invalidating setups when target prices are not reached within specific session windows (time decay).",
    fxContext: "Winding down open FX positions when setups fail to expand before overlap ends.",
    gdContext: "Removing limit orders if gold does not sweep COMEX open within 30 minutes.",
    crContext: "Managing perpetual trades that stall during weekend ranges or funding gaps."
  },
  {
    num: "4.14",
    title: "Time & Price Checklists",
    objective: "Grade daily session and weekly cycle eligibility before committing execution orders.",
    coreKeys: ["tp-checklist-intro", "session-readiness-checks", "narrative-continuity", "timing-checks", "tp-checklist-debrief"],
    fxKeys: ["forex-tp-checklist"],
    gdKeys: ["gold-tp-checklist"],
    crKeys: ["crypto-tp-checklist"],
    coreContext: "Grading trade readiness using a matrix of daily, weekly, and session timing parameters.",
    fxContext: "Forex intraday checklists combining calendar news, ranges, and DXY trend.",
    gdContext: "Gold checklists grading physical fixings, COMEX volumes, and US treasury auctions.",
    crContext: "Perp-spot divergence scoring, funding cycles, and CME gap checks."
  },
  {
    num: "4.15",
    title: "Level 4 Review",
    objective: "Synthesize all Time & Price concepts to prepare for the weekly cycle capstone scenario and knowledge exam.",
    coreKeys: ["level4-review-intro", "weekly-narrative-audit", "time-price-checklist", "exam-prep-tp", "level4-review-debrief"],
    fxKeys: ["forex-multi-pair-tp"],
    gdKeys: ["gold-comex-tp"],
    crKeys: ["crypto-cex-tp"],
    coreContext: "Synthesis of all Time & Price principles to prepare for the timing simulator.",
    fxContext: "Multi-pair session analysis review and execution audit checklist.",
    gdContext: "Gold COMEX open and fixing sweeps review checklist.",
    crContext: "CME Gap and perp funding settlement review prep."
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
"### Forex Time & Price: London Open Judas Swing
The London session open marks a massive spike in institutional volatility. This card teaches **how to spot Judas Swing manipulation moves sweeping Asian boundaries**.

* **Judas swing parameters**: Manipulation runs typically form between 2:00 AM and 3:30 AM EST, extending past the Asian Range high/low by 10 to 20 pips.
* **Stop Sweep Rejections**: Order entries are only planned if the sweep exhibits swift price displacement back inside the Asian boundary on lower-timeframe charts.
* **DXY Inversion Confirmation**: Confirm that the Judas swing matches a concurrent inverse manipulation wick on the DXY index before initiating major pair positions."

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
  m: (typeof level4Syllabus)[0]
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
7. Integrate the track topics ONLY as time & price session execution contexts or examples as defined by the syllabus context above.
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
          subtopic: `${track} Advanced Time & Price ${idx}`,
          focus: `Advanced application of ${mTitle} concepts specific to ${track} trading, covering timing filters and session dynamics for card ${idx}.`,
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
          body: `### Time & Price Concept: ${o.subtopic}\nThis card covers: ${o.focus}\n\n* **Timing parameters**: Execution settings are tailored to session opens.\n* **Volume dynamics**: Volatility spikes guide order book entries.`,
          context: {
            keyTerms: [],
            whyThisMatters: `This timing concept is foundational to ${track} trading within Module ${mNum}.`,
            realLifeExample: `Applied in ${track} session conditions.`,
            commonMistake: `Trading out-of-session leads to sweep invalidations.`,
            quickNote: `Review the ${o.subtopic} concept carefully.`,
            mentorText: `Focus on understanding ${o.subtopic} before executing configurations.`,
            mentorAnalogy: `Like waiting for runway clearance — timing is absolute safety.`,
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

async function generateModule(m: (typeof level4Syllabus)[0]) {
  const modNum = m.num.split(".")[1];
  const modDir = path.join(
    __dirname,
    "../src/content/level-4",
    `module-4-${modNum}`
  );
  if (!fs.existsSync(modDir)) {
    fs.mkdirSync(modDir, { recursive: true });
  }

  console.log(`\n${"═".repeat(60)}`);
  console.log(`MODULE 4.${modNum}: ${m.title}`);
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

export const module4${modNum}: AcademyModule = {
  moduleNumber: "${m.num}",
  level: 4,
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
    `  ✅ Module 4.${modNum} complete — Core:${coreCards.length} Forex:${forexCards.length} Gold:${goldCards.length} Crypto:${cryptoCards.length}`
  );
}

// ─── ROOT INDEX UPDATER ───────────────────────────────────────────────────────

function updateRootIndex() {
  const imports = level4Syllabus
    .map(
      (m) =>
        `import { module4${m.num.split(".")[1]} } from "./module-4-${m.num.split(".")[1]}";`
    )
    .join("\n");

  const exports =
    `export const level4Curriculum: AcademyModule[] = [\n` +
    level4Syllabus
      .map((m) => `  module4${m.num.split(".")[1]}`)
      .join(",\n") +
    `\n];`;

  const content = `${imports}\nimport { AcademyModule } from "../../types/curriculum";\n\n${exports}\n`;

  const contentDir = path.join(__dirname, "../src/content/level-4");
  if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir, { recursive: true });
  }

  fs.writeFileSync(
    path.join(contentDir, "index.ts"),
    content
  );
  console.log("\n✓ Updated Level 4 root index.ts");
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
    "║   Lurnava Level 4 — Two-Stage Curriculum Generator       ║"
  );
  console.log(
    "║   Stage 1: AI Outline → Stage 2: Full Card Writing       ║"
  );
  console.log(
    "╚══════════════════════════════════════════════════════════╝\n"
  );

  let targetModules = level4Syllabus;
  if (targetModuleArg) {
    targetModules = level4Syllabus.filter(
      (m) => m.num.split(".")[1] === targetModuleArg
    );
  } else if (startArg) {
    const startIdx = parseInt(startArg);
    targetModules = level4Syllabus.filter(
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
      "../src/content/level-4",
      `module-4-${modNum}`
    );
    const filesExist =
      fs.existsSync(path.join(modDir, "core.ts")) &&
      fs.existsSync(path.join(modDir, "forex.ts")) &&
      fs.existsSync(path.join(modDir, "gold.ts")) &&
      fs.existsSync(path.join(modDir, "crypto.ts"));

    if (filesExist && !force && !targetModuleArg) {
      console.log(
        `  Skipping Module 4.${modNum} (files exist — use --force to regenerate)`
      );
      continue;
    }

    if (targetModules.length > 1 && !auto) {
      console.log(`\n============================================================`);
      console.log(`Next Module in Queue: 4.${modNum} - ${m.title}`);
      console.log(`============================================================\n`);
      const answer = await askQuestion(
        `Press ENTER to generate Module 4.${modNum}, type 'skip' to skip it, or type 'exit' to stop: `
      );
      const cleanAnswer = answer.trim().toLowerCase();
      if (cleanAnswer === "exit" || cleanAnswer === "stop") {
        console.log("Exiting workflow. Updating root index file...");
        updateRootIndex();
        rl.close();
        process.exit(0);
      }
      if (cleanAnswer === "skip") {
        console.log(`Skipping Module 4.${modNum}.`);
        continue;
      }
    }

    try {
      await generateModule(m);
      completed++;
    } catch (err) {
      console.error(`\n❌ Failed to generate Module 4.${modNum}:`, err);
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
