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

const level1Syllabus = [
  {
    num: "1.1",
    title: "Reading-to-Hypothesis Conversion",
    objective:
      "Convert raw chart readings into clear, falsifiable trade hypotheses without executing.",
    coreKeys: [
      "hypothesis-intro",
      "hypothesis-sentence-builder",
      "watch-vs-plan",
      "pass-fail-gate",
      "hypothesis-debrief",
    ],
    fxKeys: ["forex-quote-pressure"],
    gdKeys: ["gold-zone-volatility"],
    crKeys: ["crypto-venue-btc"],
    coreContext: "Formulating structured, falsifiable trade hypotheses; defining clear if-then conditions; separating observation from planning; establishing pass-fail gates for hypothesis testing.",
    fxContext: "Base/quote currency strength mapping; identifying session clock pressures; formulating FX quote pressure hypotheses (e.g. DXY pressure vs specific pair).",
    gdContext: "Integrating macro volatility and real-yield shifts into gold hypotheses; identifying gold wick/zone reactions.",
    crContext: "Formulating crypto hypotheses that incorporate BTC-dominance context and CEX/DEX venue disagreement profiles."
  },
  {
    num: "1.2",
    title: "Plan Eligibility Filter",
    objective:
      "Filter out low-probability configurations by verifying evidence thresholds.",
    coreKeys: [
      "filter-intro",
      "evidence-threshold",
      "unclear-reading-rejection",
      "weak-plan-warning",
      "filter-debrief",
    ],
    fxKeys: ["forex-mixed-pressure-filter"],
    gdKeys: ["gold-spike-verification-filter"],
    crKeys: ["crypto-venue-disagreement-filter"],
    coreContext: "Setting strict evidence thresholds; mapping clear reading vs mixed reading; instant rejection of weak plan setups; filtering out noise and low-probability events.",
    fxContext: "Rejection rules for FX pairs showing conflicting session pressure (e.g. London bullish expansion vs NY bearish open displacement).",
    gdContext: "Verifying gold price spikes; rejecting setups that run after unconfirmed rapid spikes without zone consolidation.",
    crContext: "Filtering crypto setups with venue disagreement; rejecting planning when major exchanges (CEX vs DEX) display divergent price structures."
  },
  {
    num: "1.3",
    title: "Setup Anatomy",
    objective:
      "Define the visual and technical layout of a structured trade setup.",
    coreKeys: [
      "trade-plan-rationale",
      "five-plan-pillars",
      "context-location-matrix",
      "invalidation-vs-target",
      "plan-validation-drill",
      "trade-plan-debrief",
    ],
    fxKeys: [
      "forex-plan-session-windows",
      "forex-session-extremes-invalidation",
      "forex-dxy-correlation-matrix",
      "forex-session-target-mapping",
      "forex-plan-audit-drill",
      "forex-plan-debrief",
    ],
    gdKeys: [
      "gold-plan-volatility-profile",
      "gold-wick-invalidation-buffer",
      "gold-yield-usd-overlay",
      "gold-atr-target-mapping",
      "gold-plan-validation-drill",
      "gold-plan-debrief",
    ],
    crKeys: [
      "crypto-plan-continuous-markets",
      "crypto-liquidation-invalidation",
      "crypto-spot-perp-comparison",
      "crypto-funding-target-mapping",
      "crypto-plan-validation-drill",
      "crypto-plan-debrief",
    ],
    coreContext: "Anatomizing the trade plan; mapping the five pillars of a setup (Context, Location, Trigger, Invalidation, Target); differentiating invalidation zones from target boundaries.",
    fxContext: "Aligning setup with London/NY session windows; mapping FX session extremes; incorporating DXY correlation matrix into setup validation.",
    gdContext: "Designing gold setups based on ATR/volatility profiles; using US yields (US10Y) as macro overlay; mapping gold wick buffers for invalidation.",
    crContext: "Designing setups for 24/7 continuous crypto markets; mapping perp liquidation pools and spot-perp price spreads."
  },
  {
    num: "1.4",
    title: "Area of Interest",
    objective:
      "Map out clear reaction areas and ranges while avoiding entry in the middle.",
    coreKeys: [
      "planning-zone-intro",
      "aoi-mapping",
      "reaction-area-identification",
      "middle-zone-warning-drill",
      "aoi-debrief",
    ],
    fxKeys: ["forex-session-aoi"],
    gdKeys: ["gold-wick-cluster-aoi"],
    crKeys: ["crypto-liquidity-pool-aoi"],
    coreContext: "Defining and mapping Areas of Interest (AOIs); identifying high-probability reaction edges; strictly rejecting middle-of-range planning; managing zone transitions.",
    fxContext: "Mapping session high/low boundaries; using currency pair ADR extensions to define outer session AOIs.",
    gdContext: "Identifying gold-specific wick clusters and historical reaction zones; filtering out minor intraday noise wicks.",
    crContext: "Mapping crypto order book buy/sell walls and venue-specific liquidity pool zones."
  },
  {
    num: "1.5",
    title: "Plan Context Requirement",
    objective:
      "Align the trade setup style with the dominant higher-timeframe condition.",
    coreKeys: [
      "plan-context-intro",
      "trend-plan-mapping",
      "range-plan-mapping",
      "breakout-plan-mapping",
      "plan-context-debrief",
    ],
    fxKeys: ["forex-session-context-requirement"],
    gdKeys: ["gold-volatility-regime-requirement"],
    crKeys: ["crypto-btc-state-requirement"],
    coreContext: "Defining setup condition requirements; mapping trend plans, range plans, and breakout plans; identifying mismatch traps where setups violate HTF conditions.",
    fxContext: "Session-based context matching; aligning FX plans with the dominant session trend (London expansion vs NY reversal).",
    gdContext: "Matching gold plans with the prevailing volatility regime (high ATR expansion vs quiet consolidation).",
    crContext: "Aligning crypto plans with BTC dominance states, network-wide volume regimes, and funding rate cycles."
  },
  {
    num: "1.6",
    title: "Trigger Design",
    objective:
      "Structure clear triggers to activate a plan without treating them as certainty.",
    coreKeys: [
      "trigger-design-intro",
      "candle-trigger-mechanics",
      "level-trigger-mechanics",
      "timing-trigger-mechanics",
      "trigger-design-debrief",
    ],
    fxKeys: ["forex-session-trigger"],
    gdKeys: ["gold-zone-reaction-trigger"],
    crKeys: ["crypto-venue-confirmed-trigger"],
    coreContext: "Designing precise activation triggers; distinguishing candle-close, price level, and time-based triggers; preventing execution before trigger completion.",
    fxContext: "Session timing triggers; designing triggers around specific session open times and overlaps (London/NY overlap).",
    gdContext: "Designing gold zone-sweep triggers; utilizing rapid wick-rejections and candle confirmation on COMEX open.",
    crContext: "Designing crypto triggers that require multi-venue order book sweep agreement (spot and perp confirmation)."
  },
  {
    num: "1.7",
    title: "Confirmation Requirement",
    objective:
      "Establish structural verification criteria prior to final plan activation.",
    coreKeys: [
      "confirmation-intro",
      "close-quality-confirmation",
      "follow-through-confirmation",
      "failed-confirmation-trap",
      "confirmation-debrief",
    ],
    fxKeys: ["forex-session-news-confirmation"],
    gdKeys: ["gold-wick-noise-filter"],
    crKeys: ["crypto-venue-quality-confirmation"],
    coreContext: "Defining confirmation parameters; evaluating candle close quality and volume follow-through; identifying and avoiding failed confirmation traps.",
    fxContext: "Confirming setups after FX session open or scheduled news releases; waiting for spread normalization.",
    gdContext: "Filtering out gold wick noise; verifying that wicks represent true structural rejection rather than temporary yield sweeps.",
    crContext: "Confirming crypto setups across multiple exchange venues (CEX and DEX price agreement verification)."
  },
  {
    num: "1.8",
    title: "Plan Activation and Cancellation",
    objective: "Set explicit rules for when a trade plan becomes live or expires.",
    coreKeys: [
      "activation-cancellation-intro",
      "activation-rules",
      "cancellation-rules",
      "missed-plan-cancellation",
      "activation-cancellation-debrief",
    ],
    fxKeys: ["forex-session-handoff-cancellation"],
    gdKeys: ["gold-macro-distortion-cancellation"],
    crKeys: ["crypto-liquidity-spike-cancellation"],
    coreContext: "Structuring clear plan life cycles; defining activation windows; setting hard cancellation rules for time-decayed or missed plans.",
    fxContext: "FX session handoff rules; cancelling plans during low-volume session transitions or ahead of central bank events.",
    gdContext: "Gold macro-event cancellation rules; cancelling plans upon sudden US yield spikes or economic data releases.",
    crContext: "Crypto liquidation spike rules; cancelling plans during cascading perpetual contract liquidation sweeps."
  },
  {
    num: "1.9",
    title: "Invalidation Planning",
    objective:
      "Define structural price boundaries where your trade hypothesis is proven wrong.",
    coreKeys: [
      "invalidation-anatomy",
      "trend-structure-invalidation",
      "range-extreme-invalidation",
      "structural-vs-time-invalidation",
      "mapping-invalidation-drill",
      "invalidation-debrief",
    ],
    fxKeys: [
      "forex-invalidation-foundations",
      "forex-spread-safety-stops",
      "forex-dxy-invalidation-overlay",
      "forex-adr-stop-scaling",
      "forex-invalidation-drill-component",
      "forex-invalidation-debrief-component",
    ],
    gdKeys: [
      "gold-invalidation-foundations",
      "gold-stop-sweep-buffers",
      "gold-yield-invalidation-overlay",
      "gold-stop-position-sizing",
      "gold-invalidation-drill-component",
      "gold-invalidation-debrief-component",
    ],
    crKeys: [
      "crypto-invalidation-foundations",
      "crypto-spot-perp-stop-divergence",
      "crypto-weekend-vs-weekday-stops",
      "crypto-funding-risk-stops",
      "crypto-invalidation-drill-component",
      "crypto-invalidation-debrief-component",
    ],
    coreContext: "Mapping structural invalidation boundaries; separating invalidation logic from emotional discomfort; planning stops based on structural failure.",
    fxContext: "Spread-aware stop placement; using ADR to scale stops; incorporating DXY invalidation overlays for currency pairs.",
    gdContext: "Establishing stop buffers for gold; accounts for gold's aggressive sweep behavior; factoring in real-yield correlation breaks.",
    crContext: "Managing crypto stop placement; managing spot-perp price divergence; accounting for weekend low-liquidity spreads and funding risk."
  },
  {
    num: "1.10",
    title: "Target Path Planning",
    objective:
      "Map out realistic structural exits rather than arbitrary profit projections.",
    coreKeys: [
      "target-anatomy",
      "structural-target-mapping",
      "timeframe-target-alignment",
      "fixed-vs-trailing-exits",
      "mapping-targets-drill",
      "target-debrief",
    ],
    fxKeys: [
      "forex-target-foundations",
      "forex-session-liquidity-targets",
      "forex-dxy-target-overlay",
      "forex-adr-target-scaling-visual",
      "forex-target-drill-component",
      "forex-target-debrief-component",
    ],
    gdKeys: [
      "gold-target-foundations",
      "gold-wick-targets",
      "gold-yield-target-overlay",
      "gold-target-ranges",
      "gold-target-drill-component",
      "gold-target-debrief-component",
    ],
    crKeys: [
      "crypto-target-foundations",
      "crypto-ask-wall-targets",
      "crypto-spot-perp-target-peg",
      "crypto-funding-target-scaling",
      "crypto-target-drill-component",
      "crypto-target-debrief-component",
    ],
    coreContext: "Defining target paths; mapping structural exit zones and major liquidity hubs; planning multi-tier partial exits; rejecting unrealistic reward ratios.",
    fxContext: "Targeting opposite session high/low liquidity; scaling targets using average daily range (ADR) boundaries.",
    gdContext: "Targeting gold wick clusters and major structural zones; aligning target paths with yield-correlated expansion ranges.",
    crContext: "Targeting large exchange ask walls and CEX/DEX order book depths; adjusting targets based on funding rates."
  },
  {
    num: "1.11",
    title: "Timing Plan",
    objective:
      "Coordinate price zones with session timings and key volatility overlaps.",
    coreKeys: [
      "timing-plan-intro",
      "valid-timing-window",
      "dead-timing-window",
      "late-plan-warning",
      "timing-plan-debrief",
    ],
    fxKeys: ["forex-timing-session-matrix"],
    gdKeys: ["gold-macro-release-timing"],
    crKeys: ["crypto-funding-window-timing"],
    coreContext: "Developing timing plans; defining session-specific active windows and dead zones; rejecting setups that form outside valid operational hours.",
    fxContext: "Mapping London, New York, and Asian session clocks; planning setups around overlap liquidity peaks.",
    gdContext: "Timing around COMEX open and US macroeconomic data releases (8:30 AM EST volatility window).",
    crContext: "Crypto 24/7 timing rules; scheduling setups around funding rate calculation epochs and weekend low-volume blocks."
  },
  {
    num: "1.12",
    title: "Event Filter",
    objective:
      "Filter out plans during high-impact scheduled macroeconomic events.",
    coreKeys: [
      "event-filter-intro",
      "news-event-risk",
      "first-move-distortion-trap",
      "post-event-confirmation-rule",
      "event-filter-debrief",
    ],
    fxKeys: ["forex-cpi-nfp-filter"],
    gdKeys: ["gold-yield-usd-news-filter"],
    crKeys: ["crypto-unlock-liquidation-filter"],
    coreContext: "Filtering economic events; avoiding news-driven spread expansions and first-move price spikes; establishing post-event verification rules.",
    fxContext: "Filtering FX setups around high-impact prints like US CPI, NFP, and central bank interest rate decisions.",
    gdContext: "Managing gold volatility during Treasury auctions, inflation prints, and FOMC rate updates.",
    crContext: "Filtering crypto setups around major token unlocks, protocol upgrades, and derivative liquidation cascades."
  },
  {
    num: "1.13",
    title: "Plan Quality Score",
    objective:
      "Assess the structural integrity and compliance of your plan before action.",
    coreKeys: [
      "plan-quality-intro",
      "grading-completeness",
      "grading-clarity",
      "grading-evidence-fit",
      "plan-quality-debrief",
    ],
    fxKeys: ["forex-plan-score-sheet"],
    gdKeys: ["gold-plan-score-sheet"],
    crKeys: ["crypto-plan-score-sheet"],
    coreContext: "Developing a plan grading matrix; scoring setup completeness, structural clarity, and evidence alignment; setting a hard minimum score to trigger action.",
    fxContext: "Scoring FX plans on session volume fit, spread-to-range ratios, and DXY correlation alignment.",
    gdContext: "Scoring gold plans on volatility/ATR fit, US yield alignment, and wick buffer safety.",
    crContext: "Scoring crypto plans on spot-perp price spreads, funding rate impact, and exchange venue agreement."
  },
  {
    num: "1.14",
    title: "Full Plan Builder",
    objective:
      "Synthesize all planning fields into a complete, written trade setup.",
    coreKeys: [
      "synthesis-brief",
      "synthesis-checklist",
      "plan-builder-panel",
      "plan-audit-comparison",
    ],
    fxKeys: [
      "forex-synthesis-brief",
      "forex-synthesis-checklist",
      "forex-plan-builder-panel",
      "forex-plan-audit-comparison",
    ],
    gdKeys: [
      "gold-synthesis-brief",
      "gold-synthesis-checklist",
      "gold-plan-builder-panel",
      "gold-plan-audit-comparison",
    ],
    crKeys: [
      "crypto-synthesis-brief",
      "crypto-synthesis-checklist",
      "crypto-plan-builder-panel",
      "crypto-plan-audit-comparison",
    ],
    coreContext: "Synthesizing the five planning pillars into a unified document; verifying checklist completeness; peer-auditing plan logic against historical charts.",
    fxContext: "Integrating FX-specific parameters (session window, pair ADR, and DXY correlation) into a unified plan.",
    gdContext: "Integrating gold-specific parameters (ATR bounds, US yields overlay, and sweep buffer) into a unified plan.",
    crContext: "Integrating crypto-specific parameters (spot-perp spread, perp funding rate, and exchange depth) into a unified plan."
  },
  {
    num: "1.15",
    title: "Level 1 Planning Mission",
    objective:
      "Consolidate your learning by submitting and defending a full trade plan.",
    coreKeys: ["level-1-gate-drill", "synthesis-debrief"],
    fxKeys: ["forex-level-1-gate-drill", "forex-synthesis-debrief"],
    gdKeys: ["gold-level-1-gate-drill", "gold-synthesis-debrief"],
    crKeys: ["crypto-level-1-gate-drill", "crypto-synthesis-debrief"],
    coreContext: "Synthesizing all Level 1 course lessons; drafting a complete written trade plan; presenting a defensive thesis; scoring against the final graduation rubric.",
    fxContext: "Submitting and defending a comprehensive Forex session-based planning thesis.",
    gdContext: "Submitting and defending a comprehensive Gold yield-and-volatility planning thesis.",
    crContext: "Submitting and defending a comprehensive Crypto venue-and-liquidity planning thesis."
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
"### Forex Eligibility: Filtering Mixed Session Pressure
Forex majors expand and reverse relative to institutional session clocks. This card teaches **how to filter and reject setups that exhibit conflicting session pressure**.

* **Session Direction Conflict**: If the London session prints a bullish expansion, but the New York open generates aggressive bearish displacement, the plan is immediately canceled. Do not trade when sessions fight.
* **Liquidation Sweep Verification**: A setup is only eligible if the session high or low is swept with a clear displacement close. Wicks that fail to close outside the range are rejected as noise.
* **Spread-to-Range Ratio**: The average spread of the currency pair during rollover must not exceed 10% of the target range, as spread expansion mathematically decays the R:R expectancy."

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
  maxRetries = 3
): Promise<any> {
  let attempts = 0;
  while (attempts < maxRetries) {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o",
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
      await new Promise((r) => setTimeout(r, 6000 * attempts));
    }
  }
}

// ─── STAGE 1: OUTLINE GENERATION ─────────────────────────────────────────────

async function generateModuleOutlines(
  m: (typeof level1Syllabus)[0]
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
6. Do NOT create generic introductory cards about instruments (like "What is Forex", "Understanding Funding Rates", "US Treasury Yields 101", "DXY Correlation with Forex Pairs").
7. Integrate the track topics ONLY as context/examples as defined by the syllabus context above.
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

    // Fixed retry logic — overwrites batchResultCards instead of appending
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
      batchResultCards = retryResult.cards || []; // OVERWRITE, not append
    }

    if (batchResultCards.length !== batchOutline.length) {
      console.error(
        `      FATAL: Could not get correct batch size after ${retryAttempt} retries. Got ${batchResultCards.length}, expected ${batchOutline.length}.`
      );
      // Use what we have, pad with fallback cards if needed
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

    // Inject visualKey and label from outline into each card
    for (let idx = 0; idx < batchResultCards.length; idx++) {
      const outline = batchOutline[idx];
      const card = batchResultCards[idx];
      card.visualKey = outline.visualKey;
      card.label = `${track} Track`;
      
      // Defensively move taskData to card root if OpenAI nested it in card.context
      if (card.context && (card.context as any).taskData) {
        card.taskData = (card.context as any).taskData;
        delete (card.context as any).taskData;
      }

      // Ensure taskData is null for non-practice cards
      if (outline.type !== "practice") {
        card.taskData = null;
      }
      allCards.push(card);
    }
  }

  return allCards;
}

// ─── MODULE GENERATOR ────────────────────────────────────────────────────────

async function generateModule(m: (typeof level1Syllabus)[0]) {
  const modNum = m.num.split(".")[1];
  const modDir = path.join(
    __dirname,
    "../src/content/level-1",
    `module-1-${modNum}`
  );
  if (!fs.existsSync(modDir)) {
    fs.mkdirSync(modDir, { recursive: true });
  }

  console.log(`\n${"═".repeat(60)}`);
  console.log(`MODULE 1.${modNum}: ${m.title}`);
  console.log(`${"═".repeat(60)}`);

  // Determine total cards per track
  const coreTotalCards = 15;
  const roadTotalCards = 8;

  // ── Stage 1: Generate outlines for all tracks in a single call ──
  const outlines = await generateModuleOutlines(m);
  const coreOutline = outlines.core;
  const forexOutline = outlines.forex;
  const goldOutline = outlines.gold;
  const cryptoOutline = outlines.crypto;

  console.log(
    `  [Stage 1] Outlines complete. Core=${coreOutline.length}, Forex=${forexOutline.length}, Gold=${goldOutline.length}, Crypto=${cryptoOutline.length}`
  );

  // ── Stage 2: Generate actual card content using outlines ──
  console.log(`  [Stage 2] Generating card content...`);

  // Generate tracks sequentially to manage API rate limits
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

export const module1${modNum}: AcademyModule = {
  moduleNumber: "${m.num}",
  level: 1,
  title: "${m.title}",
  objective: "${m.objective}",
  skillLevel: "beginner",
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
    `  ✅ Module 1.${modNum} complete — Core:${coreCards.length} Forex:${forexCards.length} Gold:${goldCards.length} Crypto:${cryptoCards.length}`
  );
}

// ─── ROOT INDEX UPDATER ───────────────────────────────────────────────────────

function updateRootIndex() {
  const imports = level1Syllabus
    .map(
      (m) =>
        `import { module1${m.num.split(".")[1]} } from "./module-1-${m.num.split(".")[1]}";`
    )
    .join("\n");

  const exports =
    `export const level1Curriculum: AcademyModule[] = [\n` +
    level1Syllabus
      .map((m) => `  module1${m.num.split(".")[1]}`)
      .join(",\n") +
    `\n];`;

  const content = `${imports}\nimport { AcademyModule } from "../../types/curriculum";\n\n${exports}\n`;

  fs.writeFileSync(
    path.join(__dirname, "../src/content/level-1/index.ts"),
    content
  );
  console.log("\n✓ Updated Level 1 root index.ts");
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
    "║   Lurnava Level 1 — Two-Stage Curriculum Generator       ║"
  );
  console.log(
    "║   Stage 1: AI Outline → Stage 2: Full Card Writing       ║"
  );
  console.log(
    "╚══════════════════════════════════════════════════════════╝\n"
  );

  let targetModules = level1Syllabus;
  if (targetModuleArg) {
    targetModules = level1Syllabus.filter(
      (m) => m.num.split(".")[1] === targetModuleArg
    );
  } else if (startArg) {
    const startIdx = parseInt(startArg);
    targetModules = level1Syllabus.filter(
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
      "../src/content/level-1",
      `module-1-${modNum}`
    );
    const filesExist =
      fs.existsSync(path.join(modDir, "core.ts")) &&
      fs.existsSync(path.join(modDir, "forex.ts")) &&
      fs.existsSync(path.join(modDir, "gold.ts")) &&
      fs.existsSync(path.join(modDir, "crypto.ts"));

    if (filesExist && !force && !targetModuleArg) {
      console.log(
        `  Skipping Module 1.${modNum} (files exist — use --force to regenerate)`
      );
      continue;
    }

    // Interactive prompt BEFORE starting generation of the module
    // But we don't need to prompt if they are only running a single module
    if (targetModules.length > 1 && !auto) {
      console.log(`\n============================================================`);
      console.log(`Next Module in Queue: 1.${modNum} - ${m.title}`);
      console.log(`============================================================\n`);
      const answer = await askQuestion(
        `Press ENTER to generate Module 1.${modNum}, type 'skip' to skip it, or type 'exit' to stop: `
      );
      const cleanAnswer = answer.trim().toLowerCase();
      if (cleanAnswer === "exit" || cleanAnswer === "stop") {
        console.log("Exiting workflow. Updating root index file...");
        updateRootIndex();
        rl.close();
        process.exit(0);
      }
      if (cleanAnswer === "skip") {
        console.log(`Skipping Module 1.${modNum}.`);
        continue;
      }
    }

    try {
      await generateModule(m);
      completed++;
    } catch (err) {
      console.error(`\n❌ Failed to generate Module 1.${modNum}:`, err);
      failed++;
    }
  }

  // Update root index
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
