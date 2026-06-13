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

const level5Syllabus = [
  {
    num: "5.1",
    title: "The Kelly Criterion & Expected Value Optimization",
    objective: "Learn the mathematics of expected value optimization and optimal fractional position sizing.",
    coreKeys: ["kelly-criterion-basics"],
    fxKeys: ["kelly-criterion-basics"],
    gdKeys: ["kelly-criterion-basics"],
    crKeys: ["kelly-criterion-basics"],
    coreContext: "Sizing positions mathematically based on win rates and reward-to-risk ratios. Expected value (EV) optimization to prevent account bankruptcies.",
    fxContext: "Adapting Kelly sizing to leverage ratios (up to 500:1) and institutional currency margins.",
    gdContext: "Kelly fraction safety factors to cushion against gold's overnight gap risks.",
    crContext: "Sizing perps using leverage coefficients while avoiding exchange auto-deleveraging (ADL) thresholds."
  },
  {
    num: "5.2",
    title: "Volatility-Adjusted Sizing",
    objective: "Understand how to adjust position size dynamically based on market volatility (ATR) rather than arbitrary pip limits.",
    coreKeys: ["volatility-sizing"],
    fxKeys: ["volatility-sizing"],
    gdKeys: ["volatility-sizing"],
    crKeys: ["volatility-sizing"],
    coreContext: "Adjusting stop distances and position size dynamically using Average True Range (ATR) rather than static pips.",
    fxContext: "Scaling lot sizes based on daily/hourly ATR for currency pairs like EURUSD and GBPUSD.",
    gdContext: "Adjusting for high-impact COMEX sessions and extreme USD interest rate news volatility.",
    crContext: "Volatility sizing adjustments for low-cap altcoins vs. Bitcoin (managing high-beta assets)."
  },
  {
    num: "5.3",
    title: "Dynamic Risk Sizing Calculations",
    objective: "Learn the exact mathematical formulas to compute unit sizes based on capital limits and stop distances.",
    coreKeys: ["dynamic-calculator-drill"],
    fxKeys: ["dynamic-calculator-drill"],
    gdKeys: ["dynamic-calculator-drill"],
    crKeys: ["dynamic-calculator-drill"],
    coreContext: "Precise mathematical formulas to calculate contract/lot sizes based on capital, stop distance, and risk limit.",
    fxContext: "Forex pip value calculations and cross-currency lot sizing mechanics.",
    gdContext: "Gold contract sizing (1 contract = 100 oz) and contract value tick multipliers.",
    crContext: "Perp contract size calculations using unit multipliers (e.g. BTC, ETH sizes) and margin collaterals."
  },
  {
    num: "5.4",
    title: "Scaling Out: Risk-Free Funding",
    objective: "Master the psychology and mathematics of taking partial profits at 1R to finance remaining trade risk.",
    coreKeys: ["scaling-out-basics"],
    fxKeys: ["scaling-out-basics"],
    gdKeys: ["scaling-out-basics"],
    crKeys: ["scaling-out-basics"],
    coreContext: "The mathematics of taking 50% partial profits at 1R and moving stop loss to break-even (BE) to create a risk-free trade.",
    fxContext: "Winding down half the position during session overlap highs to fund the daily swing runner.",
    gdContext: "Scaling out during gold's vertical 'blow-off' wicks before rapid session retracements.",
    crContext: "Partial closures to lock in USD gains on perp contracts, adjusting margin requirements."
  },
  {
    num: "5.5",
    title: "Scaling In: Pyramiding Rules",
    objective: "Learn the strict conditions under which size can be added to an active winning position.",
    coreKeys: ["scaling-in-pyramiding"],
    fxKeys: ["scaling-in-pyramiding"],
    gdKeys: ["scaling-in-pyramiding"],
    crKeys: ["scaling-in-pyramiding"],
    coreContext: "Strict rules for adding units to active winners at subsequent structural arrays (FVGs, OBs) while maintaining total initial risk.",
    fxContext: "Pyramiding FX trends during active NY/London overlaps and trailing stops to protect aggregate exposure.",
    gdContext: "Adding positions to gold breakouts during yields-driven expansions with trailing stops.",
    crContext: "Pyramiding crypto perpetual positions during leverage runs while monitoring liquidation prices."
  },
  {
    num: "5.6",
    title: "Stop-Loss Placement Mechanics",
    objective: "Differentiate between structural invalidation levels and arbitrary, psychology-driven stop-loss targets.",
    coreKeys: ["stop-loss-placement"],
    fxKeys: ["stop-loss-placement"],
    gdKeys: ["stop-loss-placement"],
    crKeys: ["stop-loss-placement"],
    coreContext: "Structural invalidation boundaries vs. arbitrary, psychology-driven stop-loss targets.",
    fxContext: "Placing stops behind structural session swings (Asian highs/lows) rather than standard 10-pip margins.",
    gdContext: "Designing stop-loss buffers to absorb COMEX open sweeps and bid/ask spreads.",
    crContext: "Placing stops outside liquidation pools and dealing with perpetual 'scam wicks.'"
  },
  {
    num: "5.7",
    title: "Break-Even Stop Protocols",
    objective: "Establish rules for moving stop losses to entry without prematurely suffocating high-probability trades.",
    coreKeys: ["break-even-protocols"],
    fxKeys: ["break-even-protocols"],
    gdKeys: ["break-even-protocols"],
    crKeys: ["break-even-protocols"],
    coreContext: "Mathematical criteria for moving stops to entry without suffocating setups prematurely.",
    fxContext: "Transitioning stops to break-even after price clears the first structural obstacle (liquidity sweep).",
    gdContext: "Moving stops to entry on gold spikes after key macro announcements.",
    crContext: "Break-even protocols for perp contracts when funding rate settlements approach."
  },
  {
    num: "5.8",
    title: "Trailing Stop Architectures",
    objective: "Master the mechanics of trailing stops behind swing structure to secure maximum trend expansion.",
    coreKeys: ["trailing-stop-architectures"],
    fxKeys: ["trailing-stop-architectures"],
    gdKeys: ["trailing-stop-architectures"],
    crKeys: ["trailing-stop-architectures"],
    coreContext: "Mechanics of trailing stops behind swing highs/lows to capture maximum trend expansion.",
    fxContext: "Trailing stop techniques for major currency pairs during daily trend expansions.",
    gdContext: "Trailing stops behind gold's parabolic runs using ATR or swing lows on low-timeframe charts.",
    crContext: "Trailing perp stops to protect gains from sudden crypto flash reversals."
  },
  {
    num: "5.9",
    title: "The Asymmetric Gear Shift",
    objective: "Implement the drawdown circuit rules that protect your equity curve during statistical variance.",
    coreKeys: ["asymmetric-gear-shift"],
    fxKeys: ["asymmetric-gear-shift"],
    gdKeys: ["asymmetric-gear-shift"],
    crKeys: ["asymmetric-gear-shift"],
    coreContext: "Institutional drawdown defense: halving risk after 3 consecutive losses, and halving again after 2 more.",
    fxContext: "Adjusting FX lot sizes downward to slow capital decay during adverse market environments.",
    gdContext: "Risk contraction on gold trades when correlation models break down during market stress.",
    crContext: "Scaling down perpetual futures leverage sizes during Altcoin drawdowns."
  },
  {
    num: "5.10",
    title: "Circuit Breakers: Daily Loss Limits",
    objective: "Learn to enforce absolute daily loss limits to protect capital from emotional escalation (tilt).",
    coreKeys: ["daily-circuit-breaker"],
    fxKeys: ["daily-circuit-breaker"],
    gdKeys: ["daily-circuit-breaker"],
    crKeys: ["daily-circuit-breaker"],
    coreContext: "Enforcing absolute daily loss limits (e.g. 3%) to protect capital from emotional escalation (tilt).",
    fxContext: "Forex execution locks and shutting down interbank feeds when daily loss limit is hit.",
    gdContext: "Comex circuit breaker rules and pausing gold trading after morning session losses.",
    crContext: "Equity curve preservation and daily perp trading shutdown criteria."
  },
  {
    num: "5.11",
    title: "Circuit Breakers: Weekly Loss Limits",
    objective: "Enforce weekly loss caps to pause trading, execute a systems audit, and restore psychological balance.",
    coreKeys: ["weekly-circuit-breaker"],
    fxKeys: ["weekly-circuit-breaker"],
    gdKeys: ["weekly-circuit-breaker"],
    crKeys: ["weekly-circuit-breaker"],
    coreContext: "Enforcing weekly loss caps (e.g. 6%) to trigger mandatory execution pause and systems audit.",
    fxContext: "Weekly account lockdowns, log audits, and psychology review protocols.",
    gdContext: "Pausing gold margin operations and reviewing macro-yield correlation deviations.",
    crContext: "Winding down all perpetual positions and auditing leverage settings."
  },
  {
    num: "5.12",
    title: "Capital Defense vs Narrative Protection",
    objective: "Differentiate between protecting your account balance and defending a market prediction bias.",
    coreKeys: ["capital-defense-basics"],
    fxKeys: ["capital-defense-basics"],
    gdKeys: ["capital-defense-basics"],
    crKeys: ["capital-defense-basics"],
    coreContext: "Differentiating between defending account balance and defending a market prediction bias (narrative protection).",
    fxContext: "Accepting invalidation on currency wicks instead of holding positions in hopes of a central bank intervention.",
    gdContext: "Exiting gold trades when technical structure breaks, regardless of macro-yield biases.",
    crContext: "Avoiding the trap of holding spot/perp altcoins during market-wide de-risking cycles."
  },
  {
    num: "5.13",
    title: "Correlation & Portfolio Risk",
    objective: "Understand how correlated assets duplicate risk, and how to manage aggregate account exposure.",
    coreKeys: ["correlation-portfolio-risk"],
    fxKeys: ["correlation-portfolio-risk"],
    gdKeys: ["correlation-portfolio-risk"],
    crKeys: ["correlation-portfolio-risk"],
    coreContext: "Managing aggregate portfolio risk and understanding how correlated assets duplicate risk.",
    fxContext: "Evaluating concurrent positions in EURUSD and GBPUSD as a single double-sized bet on DXY.",
    gdContext: "Correlation filters between spot gold, treasury yields (US10Y), and DXY index exposure.",
    crContext: "Managing BTC dominance correlation risk when holding multiple altcoin perp positions."
  },
  {
    num: "5.14",
    title: "Risk Management Checklists",
    objective: "Implement a rigorous pre-trade check list to ensure every parameter aligns with capital rules.",
    coreKeys: ["risk-checklists"],
    fxKeys: ["risk-checklists"],
    gdKeys: ["risk-checklists"],
    crKeys: ["risk-checklists"],
    coreContext: "Applying a quantitative risk check matrix before executing any position.",
    fxContext: "Forex pre-trade audits: calendar checks, ECN spread status, leverage levels.",
    gdContext: "Gold pre-trade audits: COMEX session clocks, ATR check, slippage allowance.",
    crContext: "Crypto pre-trade audits: Spot-perp funding rate status, liquidation price buffer, isolated margin verify."
  },
  {
    num: "5.15",
    title: "Level 5 Review & Final Gate Prep",
    objective: "Synthesize all Level 5 risk architecture concepts and prepare for the Drawdown Crucible exam.",
    coreKeys: ["level-5-debrief-recap"],
    fxKeys: ["level-5-debrief-recap"],
    gdKeys: ["level-5-debrief-recap"],
    crKeys: ["level-5-debrief-recap"],
    coreContext: "Synthesizing all Level 5 risk architecture concepts in preparation for the Drawdown Crucible.",
    fxContext: "Core FX risk management exam prep and simulation parameters.",
    gdContext: "Gold physical-to-futures slippage risk synthesis.",
    crContext: "Perpetual margin calculations and liquidation defense review."
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
- CONCRETE EXAMPLES: The realLifeExample must use specific instruments, numbers, session times, or prices (e.g. "EURUSD wicking 25 pips on news, triggering a 0.5% Kelly risk adjustment..."), never generic descriptions.
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
"### Core Risk: The Kelly Criterion & Growth Rate
Optimal fractional position sizing ensures the preservation of capital against statistical variance. This card teaches **how to use the Kelly Criterion to optimize account growth rates**.

* **Win-Loss Ratio Inputs**: The raw Kelly percentage uses win rate ($W$) and average payoff ratio ($R$) to output a theoretical maximum risk per trade.
* **Fractional Kelly Safeguard**: Professional accounts operate on a $1/4$ or $1/2$ Fractional Kelly setting, preventing catastrophic drawdowns during consecutive loss streaks.
* **Expected Value Filtering**: Positions are only planned if the trade setup exhibits a positive expectation value of greater than 0.2R per unit."

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
  m: (typeof level5Syllabus)[0]
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
          body: `### Risk Architecture: ${o.subtopic}\nThis card covers: ${o.focus}\n\n* **Risk parameter settings**: Sizing parameters are tailored to session setups.\n* **Execution rules**: Dynamic capital boundaries guide order entry.`,
          context: {
            keyTerms: [],
            whyThisMatters: `This risk concept is foundational to ${track} trading within Module ${mNum}.`,
            realLifeExample: `Applied in ${track} execution conditions.`,
            commonMistake: `Violating risk limits leads to account failures.`,
            quickNote: `Review the ${o.subtopic} concept carefully.`,
            mentorText: `Focus on understanding ${o.subtopic} before setting position lot sizes.`,
            mentorAnalogy: `Like checking aircraft weight and balance limits — safety is absolute.`,
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

async function generateModule(m: (typeof level5Syllabus)[0]) {
  const modNum = m.num.split(".")[1];
  const modDir = path.join(
    __dirname,
    "../src/content/level-5",
    `module-5-${modNum}`
  );
  if (!fs.existsSync(modDir)) {
    fs.mkdirSync(modDir, { recursive: true });
  }

  console.log(`\n${"═".repeat(60)}`);
  console.log(`MODULE 5.${modNum}: ${m.title}`);
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

export const module5${modNum}: AcademyModule = {
  moduleNumber: "${m.num}",
  level: 5,
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
    `  ✅ Module 5.${modNum} complete — Core:${coreCards.length} Forex:${forexCards.length} Gold:${goldCards.length} Crypto:${cryptoCards.length}`
  );
}

// ─── ROOT INDEX UPDATER ───────────────────────────────────────────────────────

function updateRootIndex() {
  const imports = level5Syllabus
    .map(
      (m) =>
        `import { module5${m.num.split(".")[1]} } from "./module-5-${m.num.split(".")[1]}";`
    )
    .join("\n");

  const exports =
    `export const level5Curriculum: AcademyModule[] = [\n` +
    level5Syllabus
      .map((m) => `  module5${m.num.split(".")[1]}`)
      .join(",\n") +
    `\n];`;

  const content = `${imports}\nimport { AcademyModule } from "../../types/curriculum";\n\n${exports}\n`;

  const contentDir = path.join(__dirname, "../src/content/level-5");
  if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir, { recursive: true });
  }

  fs.writeFileSync(
    path.join(contentDir, "index.ts"),
    content
  );
  console.log("\n✓ Updated Level 5 root index.ts");
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
    "║   Lurnava Level 5 — Two-Stage Curriculum Generator       ║"
  );
  console.log(
    "║   Stage 1: AI Outline → Stage 2: Full Card Writing       ║"
  );
  console.log(
    "╚══════════════════════════════════════════════════════════╝\n"
  );

  let targetModules = level5Syllabus;
  if (targetModuleArg) {
    targetModules = level5Syllabus.filter(
      (m) => m.num.split(".")[1] === targetModuleArg
    );
  } else if (startArg) {
    const startIdx = parseInt(startArg);
    targetModules = level5Syllabus.filter(
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
      "../src/content/level-5",
      `module-5-${modNum}`
    );
    const filesExist =
      fs.existsSync(path.join(modDir, "core.ts")) &&
      fs.existsSync(path.join(modDir, "forex.ts")) &&
      fs.existsSync(path.join(modDir, "gold.ts")) &&
      fs.existsSync(path.join(modDir, "crypto.ts"));

    if (filesExist && !force && !targetModuleArg) {
      console.log(
        `  Skipping Module 5.${modNum} (files exist — use --force to regenerate)`
      );
      continue;
    }

    if (targetModules.length > 1 && !auto) {
      console.log(`\n============================================================`);
      console.log(`Next Module in Queue: 5.${modNum} - ${m.title}`);
      console.log(`============================================================\n`);
      const answer = await askQuestion(
        `Press ENTER to generate Module 5.${modNum}, type 'skip' to skip it, or type 'exit' to stop: `
      );
      const cleanAnswer = answer.trim().toLowerCase();
      if (cleanAnswer === "exit" || cleanAnswer === "stop") {
        console.log("Exiting workflow. Updating root index file...");
        updateRootIndex();
        rl.close();
        process.exit(0);
      }
      if (cleanAnswer === "skip") {
        console.log(`Skipping Module 5.${modNum}.`);
        continue;
      }
    }

    try {
      await generateModule(m);
      completed++;
    } catch (err) {
      console.error(`\n❌ Failed to generate Module 5.${modNum}:`, err);
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
