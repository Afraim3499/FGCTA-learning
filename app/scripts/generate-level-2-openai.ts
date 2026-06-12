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

const level2Syllabus = [
  {
    num: "2.1",
    title: "Chart Basics",
    objective: "Understand candlestick anatomy (OHLC) and timeframe relationship basics.",
    coreKeys: ["chart-basics-intro", "candle-anatomy", "ohlc-delivery", "timeframe-intro", "chart-basics-debrief"],
    fxKeys: ["forex-pip-value"],
    gdKeys: ["gold-spread-volatility"],
    crKeys: ["crypto-venue-mismatch"],
    coreContext: "Candlestick anatomy as algorithmic footprints (Open, High, Low, Close); timeframes as delivery intervals; understanding how price delivery represents institutional time buckets rather than retail sentiment shapes.",
    fxContext: "Pip values, currency quoting, bid-ask spreads at institutional session opens.",
    gdContext: "XAUUSD spreads, COMEX contract tick sizes, volatility spikes, and liquidity sweeps.",
    crContext: "Multi-venue order books, spot vs perp contract structures, CEX/DEX feed differences, and exchange venue mismatches."
  },
  {
    num: "2.2",
    title: "Fractal Nature of Price",
    objective: "Identify how price structure repeats fractal patterns across scales.",
    coreKeys: ["fractal-nature-intro", "swing-mirroring", "multi-timeframe-scaling", "structure-fractions", "fractal-nature-debrief"],
    fxKeys: ["forex-h4-m15-scaling"],
    gdKeys: ["gold-wick-clusters-scaling"],
    crKeys: ["crypto-venue-spikes-scaling"],
    coreContext: "Structural mirroring across timeframes; mapping how higher timeframe (HTF) candles (e.g. Daily/Weekly) are composed of lower timeframe (LTF) swings (e.g. H1/M15); structure fractions.",
    fxContext: "Top-down scaling from H4 to M15 for session plans.",
    gdContext: "Gold wick clusters; how Daily wicks are made of M5/M15 shifts during COMEX open.",
    crContext: "24/7 continuous fractal structure; micro-swings during BTC expansions."
  },
  {
    num: "2.3",
    title: "Primary Price Feeds",
    objective: "Distinguish between institutional direct price feeds and retail B-Book brokers.",
    coreKeys: ["price-feeds-intro", "direct-market-access", "b-book-broker", "spread-slippage", "price-feeds-debrief"],
    fxKeys: ["forex-stp-execution"],
    gdKeys: ["gold-comex-futures-feeds"],
    crKeys: ["crypto-cex-dex-fragmentation"],
    coreContext: "DMA (Direct Market Access) vs B-Book broker routing; execution mechanisms, spread manipulations, slippage dynamics, and retail counter-party routing.",
    fxContext: "STP/ECN executions; interbank liquidity feeds; broker spread padding at session handoffs.",
    gdContext: "COMEX gold futures feed comparison; physical vs paper market arbitrage; tracking the COMEX volume ledger as a primary price anchor.",
    crContext: "CEX vs DEX venue fragmentation; API order book feeds; flash crash mechanics due to disjointed liquidity pools."
  },
  {
    num: "2.4",
    title: "The Range Model",
    objective: "Model price movement inside dealing ranges using equilibrium and discount/premium arrays.",
    coreKeys: ["range-model-intro", "dealing-range-bounds", "equilibrium-line", "discount-premium-arrays", "range-model-debrief"],
    fxKeys: ["forex-adr-stretch-range"],
    gdKeys: ["gold-volatility-adjusted-zones"],
    crKeys: ["crypto-perp-funding-premium"],
    coreContext: "Defining current dealing range boundaries; using Fibonacci 50% Equilibrium line as a mathematical division; Premium/Discount zones where algorithms distribute/accumulate.",
    fxContext: "Average Daily Range (ADR) extensions; weekly ranges relative to Tuesday high/low profiles.",
    gdContext: "Volatility-adjusted ranges; using ATR (Average True Range) bands to identify premium/discount boundaries for XAUUSD.",
    crContext: "Perpetual funding rate impact on ranges; mapping premium/discount arrays while perp premium is positive or negative."
  },
  {
    num: "2.5",
    title: "Market Structure: Part 1",
    objective: "Identify primary swing highs and swing lows to establish structure.",
    coreKeys: ["structure-part1-intro", "protected-swings", "swing-validation", "market-structure-breaks", "structure-part1-debrief"],
    fxKeys: ["forex-session-structure-limits"],
    gdKeys: ["gold-wick-structure-sweeps"],
    crKeys: ["crypto-venue-confirmed-structure"],
    coreContext: "Validation rules for protected swing highs and lows; distinguishing structural breaks (BOS) from simple liquidity sweeps; swing confirmation metrics.",
    fxContext: "Mapping session structure boundaries; validating structural points during London open vs NY open volume expansions.",
    gdContext: "Managing gold wick volatility; identifying true swing highs/lows on Gold without getting fooled by sweeps.",
    crContext: "Multi-venue structure validation; identifying structure shifts that are validated by spot volume vs perp-driven speculative spikes."
  },
  {
    num: "2.6",
    title: "Market Structure Shift (MSS)",
    objective: "Identify change of character (ChoCh) and displacement confirming a structure shift.",
    coreKeys: ["mss-intro", "displacement-confirm", "swing-invalidation", "change-of-character", "mss-debrief"],
    fxKeys: ["forex-london-open-mss"],
    gdKeys: ["gold-rapid-sweeps-mss"],
    crKeys: ["crypto-funding-oi-shift"],
    coreContext: "Mechanics of Market Structure Shift (MSS) and Change of Character (ChoCh); identifying high-volume displacement candles that invalidate swing points.",
    fxContext: "Identifying London open MSS; tracking shifts when the London session breaks Asian range structure with displacement.",
    gdContext: "Spotting rapid COMEX open MSS; tracking quick M5 wick-sweeps followed by immediate displacement closes.",
    crContext: "Correlating MSS with Open Interest (OI) spikes and funding rate reversals; perpetual order book data."
  },
  {
    num: "2.7",
    title: "The Trend Fallacy",
    objective: "Why price moves between liquidity pools rather than continuous trendlines.",
    coreKeys: ["trend-fallacy-intro", "liquidity-to-liquidity", "retail-trend-traps", "order-matching-flow", "trend-fallacy-debrief"],
    fxKeys: ["forex-session-rotation-fallacy"],
    gdKeys: ["gold-safe-haven-sweeps"],
    crKeys: ["crypto-tokenomics-sweeps"],
    coreContext: "Debunking retail trendline and channel concepts; order-matching mechanics; detailing how algorithms programmatically seek liquidity pools (BSL/SSL) rather than trendlines.",
    fxContext: "Session rotation sweeps; how price rotates between yesterday's session highs/lows rather than expanding along a diagonal line.",
    gdContext: "Safe-haven flows and economic data releases; how XAUUSD hunts extreme liquidity pools during macro events.",
    crContext: "Tokenomics and exchange-driven liquidity sweeps; how whales drive price to clear perp leverage liquidations."
  },
  {
    num: "2.8",
    title: "Internal vs External Structure",
    objective: "Filter minor internal pullbacks from major external dealing ranges.",
    coreKeys: ["internal-external-intro", "minor-pullbacks", "major-dealing-ranges", "layer-filtering", "internal-external-debrief"],
    fxKeys: ["forex-session-vs-macro-structure"],
    gdKeys: ["gold-wicks-vs-daily-anchors"],
    crKeys: ["crypto-altcoin-vs-btc-structure"],
    coreContext: "Dissecting major external dealing ranges from minor internal pullbacks; hierarchy of structure mapping; filtering noise on the LTF.",
    fxContext: "Session-level internal swings vs daily/weekly external macro ranges; London internal structures within H4 bounds.",
    gdContext: "Gold wick cluster filtering; distinguishing daily high/low anchors from noise-induced intraday wicks.",
    crContext: "Altcoin internal structures relative to BTC external macro trend; mapping altcoin structures while BTC consolidates."
  },
  {
    num: "2.9",
    title: "Displacement",
    objective: "Measure raw displacement using large body-to-wick ratios and volume.",
    coreKeys: ["displacement-intro", "body-to-wick-ratio", "volume-displacement", "commitment-candles", "displacement-debrief"],
    fxKeys: ["forex-london-breakout-displacement"],
    gdKeys: ["gold-news-displacement-wicks"],
    crKeys: ["crypto-perp-liquidation-displacement"],
    coreContext: "Measuring raw algorithmic displacement; identifying high body-to-wick ratio commitment candles; volume-weighted commitment analysis.",
    fxContext: "London breakout displacement; analyzing the expansion candle that exits the Asian consolidation range.",
    gdContext: "News-driven gold displacement; tracking heavy volume expansion candles following US macroeconomic data (e.g. CPI, NFP).",
    crContext: "Perp liquidation-driven displacement; identifying cascading liquidations that create massive, high-volume price candles."
  },
  {
    num: "2.10",
    title: "Breakouts vs Failed Breaks",
    objective: "Evaluate close quality to differentiate valid breakouts from sweeps.",
    coreKeys: ["breakouts-failed-intro", "close-quality-validation", "sweep-rejection-signs", "breakout-confirmation-rules", "breakouts-failed-debrief"],
    fxKeys: ["forex-session-breakout-fade"],
    gdKeys: ["gold-stop-sweeps-rejections"],
    crKeys: ["crypto-spot-perp-deviations"],
    coreContext: "Differentiating true breakouts from sweeps/failed breaks; evaluating candle close quality outside horizontal boundaries.",
    fxContext: "Session breakout fade setups; analyzing EURUSD or GBPUSD candle closes relative to London session extremes.",
    gdContext: "Rejection of COMEX sweeps; validating if gold's push past daily highs/lows is a sweep or a sustainable breakout close.",
    crContext: "Spot-perp deviation analysis; identifying when perps break a level but spot volume fails to support the move."
  },
  {
    num: "2.11",
    title: "Boundary Areas (BSL/SSL)",
    objective: "Map buy-side and sell-side liquidity clusters where resting orders sit.",
    coreKeys: ["boundary-areas-intro", "bsl-mapping", "ssl-mapping", "resting-liquidity-pools", "boundary-areas-debrief"],
    fxKeys: ["forex-session-extremes-liquidity"],
    gdKeys: ["gold-wicks-liquidity-pools"],
    crKeys: ["crypto-liquidation-heatmap-zones"],
    coreContext: "Mapping Buy-Side Liquidity (BSL) and Sell-Side Liquidity (SSL) pools; understanding resting order clusters (stop-losses, buy/sell stops) above/below key swings.",
    fxContext: "Mapping session-extreme liquidity; identifying previous daily high/low (PDH/PDL) and Asian range boundaries.",
    gdContext: "XAUUSD wick-cluster liquidity pools; locating heavy institutional rest orders beyond gold's daily wick extremes.",
    crContext: "Perpetual contract liquidation heatmaps; locating liquidation clusters on order books that act as magnets for price."
  },
  {
    num: "2.12",
    title: "External Range Boundary",
    objective: "Map the highest and lowest points of the HTF range to set boundaries.",
    coreKeys: ["external-boundary-intro", "htf-range-extremes", "boundary-acceptance", "boundary-rejection", "external-boundary-debrief"],
    fxKeys: ["forex-daily-adr-bands"],
    gdKeys: ["gold-monthly-range-bounds"],
    crKeys: ["crypto-cex-dex-margin-bounds"],
    coreContext: "Determining Higher Timeframe (HTF) range extremes; evaluating boundary acceptance vs rejection; maintaining trading discipline at range limits.",
    fxContext: "Daily Average Daily Range (ADR) bands; integrating ADR limits to find external bounds for intraday setups.",
    gdContext: "Monthly and weekly range boundaries; setting macro range limits for gold amidst inflation or interest rate cycles.",
    crContext: "CEX/DEX margin boundaries; mapping leverage exhaustion zones across major exchange order books."
  },
  {
    num: "2.13",
    title: "HTF Anchors",
    objective: "Anchor key support and resistance zones on Daily and Weekly charts.",
    coreKeys: ["htf-anchors-intro", "daily-weekly-levels", "anchor-strength-metrics", "confluence-anchors", "htf-anchors-debrief"],
    fxKeys: ["forex-dxy-structure-anchors"],
    gdKeys: ["gold-treasury-yield-levels"],
    crKeys: ["crypto-btc-macro-levels"],
    coreContext: "Identifying Daily and Weekly structural anchors; calculating anchor strength metrics; finding confluence zones.",
    fxContext: "DXY structure anchors; overlaying the US Dollar Index structural zones as macro anchors for EURUSD and GBPUSD.",
    gdContext: "Treasury yields (US10Y) and real-yield levels as macro structural anchors for gold.",
    crContext: "BTC macro levels (halving zones, historical cycle highs, spot ETF inflows) acting as anchors."
  },
  {
    num: "2.14",
    title: "Session Windows",
    objective: "Coordinate execution plans with high-volume session openings.",
    coreKeys: ["session-windows-intro", "london-ny-opens", "volume-overlap-windows", "timing-rules-execution", "session-windows-debrief"],
    fxKeys: ["forex-session-overlaps"],
    gdKeys: ["gold-comex-open-window"],
    crKeys: ["crypto-funding-settlement-times"],
    coreContext: "Identifying peak institutional volume session openings; mapping session overlap windows (e.g. London/NY overlap); time-and-price rules.",
    fxContext: "The daily Forex session matrix; coordinating plans precisely with London open (2-5 AM EST) and NY open (7-10 AM EST) clocks.",
    gdContext: "COMEX open window (8:20 AM EST); managing high-impact execution windows when futures pit volume enters.",
    crContext: "Perpetual funding rate settlement times (00:00, 08:00, 16:00 UTC); planning execution around volatility windows."
  },
  {
    num: "2.15",
    title: "Level 2 Review",
    objective: "Synthesize all Level 2 concepts to prepare for the Execution Mechanics exam.",
    coreKeys: ["level2-review-intro", "execution-mechanics-checklist", "interactive-terminal-prep", "exam-rubric-overview", "level2-review-debrief"],
    fxKeys: ["forex-multi-pair-audit"],
    gdKeys: ["gold-macro-checklist"],
    crKeys: ["crypto-spot-futures-checklist"],
    coreContext: "Comprehensive review of execution mechanics; final preparation checklist for the interactive terminal exam; understanding the graduation rubric.",
    fxContext: "Multi-pair structural audits; reviewing forex-specific correlations, session alignments, and execution metrics.",
    gdContext: "Gold macro-execution checklist; summarizing yield-rejections, wick-sweep tolerances, and volume validation.",
    crContext: "Spot vs futures execution checklist; verifying perp funding, spot-perp spreads, and venue liquidity profiles."
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
"### Forex Execution: STP Network Rollover Dynamics
Forex pairs execute across ECN/STP liquidity feeds. This card teaches **how rollover spreads and execution delays affect trading mechanics**.

* **Spread Padding Filter**: Do not execute plans within 15 minutes of the 5:00 PM EST daily rollover window, as low liquidity results in mathematical spread widening of up to 400%.
* **STP Execution Delays**: Limit orders are mapped to outer liquidity edges rather than immediate market fills to avoid the slippage cost generated by STP order routing buffers.
* **Volume Threshold**: If the currency pair ADR is below its 14-day average by more than 30%, execution plans are cancelled due to low institutional volume."

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
  m: (typeof level2Syllabus)[0]
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
7. Integrate the track topics ONLY as execution/market mechanics contexts or examples as defined by the syllabus context above.
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

async function generateModule(m: (typeof level2Syllabus)[0]) {
  const modNum = m.num.split(".")[1];
  const modDir = path.join(
    __dirname,
    "../src/content/level-2",
    `module-2-${modNum}`
  );
  if (!fs.existsSync(modDir)) {
    fs.mkdirSync(modDir, { recursive: true });
  }

  console.log(`\n${"═".repeat(60)}`);
  console.log(`MODULE 2.${modNum}: ${m.title}`);
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

export const module2${modNum}: AcademyModule = {
  moduleNumber: "${m.num}",
  level: 2,
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
    `  ✅ Module 2.${modNum} complete — Core:${coreCards.length} Forex:${forexCards.length} Gold:${goldCards.length} Crypto:${cryptoCards.length}`
  );
}

// ─── ROOT INDEX UPDATER ───────────────────────────────────────────────────────

function updateRootIndex() {
  const imports = level2Syllabus
    .map(
      (m) =>
        `import { module2${m.num.split(".")[1]} } from "./module-2-${m.num.split(".")[1]}";`
    )
    .join("\n");

  const exports =
    `export const level2Curriculum: AcademyModule[] = [\n` +
    level2Syllabus
      .map((m) => `  module2${m.num.split(".")[1]}`)
      .join(",\n") +
    `\n];`;

  const content = `${imports}\nimport { AcademyModule } from "../../types/curriculum";\n\n${exports}\n`;

  fs.writeFileSync(
    path.join(__dirname, "../src/content/level-2/index.ts"),
    content
  );
  console.log("\n✓ Updated Level 2 root index.ts");
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
    "║   Lurnava Level 2 — Two-Stage Curriculum Generator       ║"
  );
  console.log(
    "║   Stage 1: AI Outline → Stage 2: Full Card Writing       ║"
  );
  console.log(
    "╚══════════════════════════════════════════════════════════╝\n"
  );

  let targetModules = level2Syllabus;
  if (targetModuleArg) {
    targetModules = level2Syllabus.filter(
      (m) => m.num.split(".")[1] === targetModuleArg
    );
  } else if (startArg) {
    const startIdx = parseInt(startArg);
    targetModules = level2Syllabus.filter(
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
      "../src/content/level-2",
      `module-2-${modNum}`
    );
    const filesExist =
      fs.existsSync(path.join(modDir, "core.ts")) &&
      fs.existsSync(path.join(modDir, "forex.ts")) &&
      fs.existsSync(path.join(modDir, "gold.ts")) &&
      fs.existsSync(path.join(modDir, "crypto.ts"));

    if (filesExist && !force && !targetModuleArg) {
      console.log(
        `  Skipping Module 2.${modNum} (files exist — use --force to regenerate)`
      );
      continue;
    }

    if (targetModules.length > 1 && !auto) {
      console.log(`\n============================================================`);
      console.log(`Next Module in Queue: 2.${modNum} - ${m.title}`);
      console.log(`============================================================\n`);
      const answer = await askQuestion(
        `Press ENTER to generate Module 2.${modNum}, type 'skip' to skip it, or type 'exit' to stop: `
      );
      const cleanAnswer = answer.trim().toLowerCase();
      if (cleanAnswer === "exit" || cleanAnswer === "stop") {
        console.log("Exiting workflow. Updating root index file...");
        updateRootIndex();
        rl.close();
        process.exit(0);
      }
      if (cleanAnswer === "skip") {
        console.log(`Skipping Module 2.${modNum}.`);
        continue;
      }
    }

    try {
      await generateModule(m);
      completed++;
    } catch (err) {
      console.error(`\n❌ Failed to generate Module 2.${modNum}:`, err);
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
