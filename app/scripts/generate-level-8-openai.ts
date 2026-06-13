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

const level8Syllabus = [
  {
    num: "8.1",
    title: "Recency Bias & Next Trade Fallacy",
    objective: "Detach execution decisions from the outcome of preceding trades using probability theory.",
    coreKeys: ["recency-bias-model"],
    fxKeys: ["recency-bias-model"],
    gdKeys: ["recency-bias-model"],
    crKeys: ["recency-bias-model"],
    coreContext: "Detaching the outcome of the last trade from the probability of the next trade.",
    fxContext: "Mitigating Forex streak biases and overconfidence during choppy range sessions.",
    gdContext: "Detaching from Gold swing wicks and managing FOMO sweeps after a loss streak.",
    crContext: "Detaching from local perp liquidation cascades and resisting revenge trading.",
  },
  {
    num: "8.2",
    title: "Probability vs the Need to be Right",
    objective: "Reframe losses as operating costs and shift from predicting outcomes to managing expectancy.",
    coreKeys: ["expectancy-calculator-l8"],
    fxKeys: ["expectancy-calculator-l8"],
    gdKeys: ["expectancy-calculator-l8"],
    crKeys: ["expectancy-calculator-l8"],
    coreContext: "Accepting losses as normal business expenses and shifting focus to mathematical expectancy.",
    fxContext: "Probability metrics and expectancy mapping for major Forex pairs under Central Bank news.",
    gdContext: "Gold trading expectancy rules and managing risk during FOMC re-pricing events.",
    crContext: "Evaluating expectancy and managing stop runs in volatile crypto perpetual markets.",
  },
  {
    num: "8.3",
    title: "Greed Cycles & Parabolic Growth Traps",
    objective: "Mitigate greed and retail FOMO during high-momentum market expansions.",
    coreKeys: ["greed-cycle-flow"],
    fxKeys: ["greed-cycle-flow"],
    gdKeys: ["greed-cycle-flow"],
    crKeys: ["greed-cycle-flow"],
    coreContext: "Identifying and mitigating greed and emotional euphoria during market expansions.",
    fxContext: "Forex news-chasing FOMO mitigation during major CPI and NFP volatility releases.",
    gdContext: "Gold panic-buying mitigation during global macroeconomic and geopolitical crises.",
    crContext: "Surviving the '100x Altcoin' parabolic growth trap and taking profit into extreme greed.",
  },
  {
    num: "8.4",
    title: "Daily Routines & Pre-Market Scans",
    objective: "Establish a rigorous pre-market scan checklist for macro calendars, yield spreads, and index indicators.",
    coreKeys: ["pre-market-prep-card"],
    fxKeys: ["pre-market-prep-card"],
    gdKeys: ["pre-market-prep-card"],
    crKeys: ["pre-market-prep-card"],
    coreContext: "Structuring the pre-market routine to define daily bias and identify candidate setups.",
    fxContext: "Forex daily routine: checking economic calendars, DXY correlation, and marking session highs/lows.",
    gdContext: "Gold pre-market checklist: scanning 10-Year Real TIPS yields, DXY, and XAU/XAG ratios.",
    crContext: "Crypto daily routine: scanning Glassnode exchange flows, funding rates, and Coinglass liquidations.",
  },
  {
    num: "8.5",
    title: "In-Session Execution & Focus Control",
    objective: "Manage cognitive load, eliminate distraction, and prevent impulsive or boredom-driven actions.",
    coreKeys: ["focus-session-monitor"],
    fxKeys: ["focus-session-monitor"],
    gdKeys: ["focus-session-monitor"],
    crKeys: ["focus-session-monitor"],
    coreContext: "Enforcing in-session focus rules and managing attention without emotional interference.",
    fxContext: "Enforcing focus and waiting for NY/London overlap setups without overtrading quiet sessions.",
    gdContext: "Resisting Gold tick noise and managing position sizing during treasury auction releases.",
    crContext: "Mitigating crypto 24/7 over-monitoring fatigue and avoiding CEX app-scrolling traps.",
  },
  {
    num: "8.6",
    title: "Post-Market Journaling Mechanics",
    objective: "Structure a post-market journaling protocol that logs technical entry, exit, and mental state.",
    coreKeys: ["trade-journal-mockup"],
    fxKeys: ["trade-journal-mockup"],
    gdKeys: ["trade-journal-mockup"],
    crKeys: ["trade-journal-mockup"],
    coreContext: "Running a structured post-session review to close the loop on process adherence.",
    fxContext: "Logging Forex spreads, fill times, execution slippage, and session-specific rules.",
    gdContext: "Logging COMEX open gold slippage, overnight swaps, and volatility wick reactions.",
    crContext: "Logging perp funding costs, CEX wicks, taker fees, and leverage margin metrics.",
  },
  {
    num: "8.7",
    title: "Structuring a Performance Database",
    objective: "Log trade data with structured variables, setup tags, and mistake classifications.",
    coreKeys: ["metric-database-grid"],
    fxKeys: ["metric-database-grid"],
    gdKeys: ["metric-database-grid"],
    crKeys: ["metric-database-grid"],
    coreContext: "Building a trade database to analyze execution patterns and identify systemic mistakes.",
    fxContext: "Forex database tags: categorizing trades by pair, session window, and news releases.",
    gdContext: "Gold database tags: tracking executions during London fix, COMEX open, and Asian sessions.",
    crContext: "Crypto database tags: tracking leverage used, isolated vs cross margin, and funding fees.",
  },
  {
    num: "8.8",
    title: "Core Performance Metric Analytics",
    objective: "Calculate win rate, profit factor, average R-multiple, and expectancy across trade samples.",
    coreKeys: ["performance-analytics-chart"],
    fxKeys: ["performance-analytics-chart"],
    gdKeys: ["performance-analytics-chart"],
    crKeys: ["performance-analytics-chart"],
    coreContext: "Calculating and interpreting core statistical metrics to evaluate trading edge.",
    fxContext: "Analyzing win rate, profit factor, and R-multiples across different Forex major pairs.",
    gdContext: "Evaluating performance metrics for Gold trades over high-volatility market regimes.",
    crContext: "Calculating crypto perp trading metrics net of exchange fees and funding rate drag.",
  },
  {
    num: "8.9",
    title: "Drawdown Auditing & Recovery",
    objective: "Identify tail events and equity curve stagnation, adjusting risk sizing rules to recover capital.",
    coreKeys: ["drawdown-recovery-model"],
    fxKeys: ["drawdown-recovery-model"],
    gdKeys: ["drawdown-recovery-model"],
    crKeys: ["drawdown-recovery-model"],
    coreContext: "Enforcing drawdown circuit breakers and scaling down risk during losing streaks.",
    fxContext: "Drawdown recovery rules: adjusting position sizes on Forex majors and crosses.",
    gdContext: "Gold drawdown controls: reducing exposure after gold range-break failures.",
    crContext: "Crypto perp drawdown controls: scaling down leverage during market liquidation flushes.",
  },
  {
    num: "8.10",
    title: "The Master Trading Plan Rulebook",
    objective: "Compile all strategy, risk, execution, and routine rules into a single governed document.",
    coreKeys: ["trading-plan-builder"],
    fxKeys: ["trading-plan-builder"],
    gdKeys: ["trading-plan-builder"],
    crKeys: ["trading-plan-builder"],
    coreContext: "Writing and locking the master trading plan to govern all live capital decisions.",
    fxContext: "Forex rulebook: defining pair lists, session hour limits, and news restriction parameters.",
    gdContext: "Gold rulebook: yield alignment rules, COMEX time windows, and maximum volatility stops.",
    crContext: "Crypto rulebook: leverage boundaries, TVL/funding limits, and profit scaling rules.",
  },
  {
    num: "8.11",
    title: "Strategy Confluence & Audit Loops",
    objective: "Audit strategy hit rates and R-distribution over samples of 20, 50, and 100 trades.",
    coreKeys: ["strategy-audit-sampler"],
    fxKeys: ["strategy-audit-sampler"],
    gdKeys: ["strategy-audit-sampler"],
    crKeys: ["strategy-audit-sampler"],
    coreContext: "Auditing individual strategy setups over sample sizes to verify statistical edge.",
    fxContext: "Auditing EURUSD vs GBPUSD setup hits and slippage costs over a 50-trade sample.",
    gdContext: "Auditing Gold range-break and sweep setup outcomes over a 50-trade sample.",
    crContext: "Auditing crypto perp sweep-invalidation and funding setup hits over 50 trades.",
  },
  {
    num: "8.12",
    title: "Gold Performance & Correlation Reviews",
    objective: "Review commodity-specific dynamics, real yields, XAU/XAG ratios, and COMEX spread leakage.",
    coreKeys: ["gold-metric-dashboard"],
    fxKeys: ["gold-metric-dashboard"],
    gdKeys: ["gold-metric-dashboard"],
    crKeys: ["gold-metric-dashboard"],
    coreContext: "Analyzing Gold performance against macro capital flows, yields, and commodity correlations.",
    fxContext: "Tracking how gold price swings correlate with commodity currency (AUD, CAD) performance.",
    gdContext: "Gold performance audit: evaluating real yields, TIPS curves, and COMEX spread leakage.",
    crContext: "Analyzing the safe-haven correlation between Gold and BTC during macro crises.",
  },
  {
    num: "8.13",
    title: "Crypto Performance & On-Chain Audits",
    objective: "Audit perpetual funding rate drag, on-chain flows (Glassnode), and exchange-specific wicks.",
    coreKeys: ["crypto-metric-dashboard"],
    fxKeys: ["crypto-metric-dashboard"],
    gdKeys: ["crypto-metric-dashboard"],
    crKeys: ["crypto-metric-dashboard"],
    coreContext: "Analyzing crypto performance net of funding costs, slippage, and on-chain capital flows.",
    fxContext: "Auditing Forex majors performance when Bitcoin dominance shifts macro capital risk.",
    gdContext: "Evaluating gold ETF fund flows vs crypto exchange deposit/withdrawal statistics.",
    crContext: "Crypto performance audit: analyzing Glassnode flows, TVL shifts, and perp funding drag.",
  },
  {
    num: "8.14",
    title: "Habits and Cognitive Optimization",
    objective: "Stack routines, evaluate feedback, and build a sustainable psychology habit loop.",
    coreKeys: ["cognitive-habit-stack"],
    fxKeys: ["cognitive-habit-stack"],
    gdKeys: ["cognitive-habit-stack"],
    crKeys: ["cognitive-habit-stack"],
    coreContext: "Building sustainable habits and feedback loops to optimize long-term cognitive performance.",
    fxContext: "Establishing habit routines for session re-balancing and transition planning.",
    gdContext: "Habit stacking for COMEX open execution routines and yield checks.",
    crContext: "Developing healthy habits around crypto funding settlements and evening reviews.",
  },
  {
    num: "8.15",
    title: "Level 8 Review & Final Gate Prep",
    objective: "Synthesize all journaling, plan rulebooks, and performance reviews in preparation for the Gate.",
    coreKeys: ["final-crucible-recap"],
    fxKeys: ["final-crucible-recap"],
    gdKeys: ["final-crucible-recap"],
    crKeys: ["final-crucible-recap"],
    coreContext: "Reviewing all Level 8 psychology and performance auditing concepts to prepare for the Crucible.",
    fxContext: "Forex final gate preparation: session checklist and master plan audit recap.",
    gdContext: "Gold final gate preparation: yield review, COMEX open prep, and correlation audit recap.",
    crContext: "Crypto final gate preparation: altcoin market cycle rules and funding drag audit recap.",
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

async function generateModuleOutlines(m: (typeof level8Syllabus)[0]) {
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
          subtopic: `${track} Management Review ${idx}`,
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
        body: `### ${track} Scenario: ${o.subtopic}\nThis card covers: ${o.focus}\n\n* **Management Rule**: Enforce systematic review loops.\n* **Process Parameters**: Psychology controls are set pre-session.\n* **Feedback Adherence**: Audit performance logs for long-term consistency.`,
        context: {
          keyTerms: [],
          whyThisMatters: `Psychology and performance management in ${track} requires structured review processes.`,
          realLifeExample: `Applied during ${track} routine execution and post-session audit reviews.`,
          commonMistake: `Failing to journal session details leads to recurring emotional errors.`,
          quickNote: `Review the ${o.subtopic} metric before the next trading session.`,
          mentorText: `Discipline is maintained through the feedback loop. Review your metrics to remove bias.`,
          mentorAnalogy: `Like an athlete studying game footage — you must analyze your execution to improve.`,
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

async function generateModule(m: (typeof level8Syllabus)[0]) {
  const modNum = m.num.split(".")[1];
  const modDir = path.join(__dirname, "../src/content/level-8", `module-8-${modNum}`);
  if (!fs.existsSync(modDir)) fs.mkdirSync(modDir, { recursive: true });

  console.log(`\n${"═".repeat(60)}`);
  console.log(`MODULE 8.${modNum}: ${m.title}`);
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

export const module8${modNum}: AcademyModule = {
  moduleNumber: "${m.num}",
  level: 8,
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
  console.log(`  ✅ Module 8.${modNum} complete — Core:${coreCards.length} Forex:${forexCards.length} Gold:${goldCards.length} Crypto:${cryptoCards.length}`);
}

// ─── ROOT INDEX ───────────────────────────────────────────────────────────────

function updateRootIndex() {
  const imports = level8Syllabus.map((m) => `import { module8${m.num.split(".")[1]} } from "./module-8-${m.num.split(".")[1]}";`).join("\n");
  const exports =
    `export const level8Curriculum: AcademyModule[] = [\n` +
    level8Syllabus.map((m) => `  module8${m.num.split(".")[1]}`).join(",\n") +
    `\n];`;
  const content = `${imports}\nimport { AcademyModule } from "../../types/curriculum";\n\n${exports}\n`;
  const contentDir = path.join(__dirname, "../src/content/level-8");
  if (!fs.existsSync(contentDir)) fs.mkdirSync(contentDir, { recursive: true });
  fs.writeFileSync(path.join(contentDir, "index.ts"), content);
  console.log("\n✓ Updated Level 8 root index.ts");
}

// ─── MAIN ────────────────────────────────────────────────────────────────────

async function run() {
  const args = process.argv.slice(2);
  const targetModuleArg = args.find((a) => a.startsWith("--module="))?.split("=")[1];
  const startArg = args.find((a) => a.startsWith("--start="))?.split("=")[1];
  const force = args.includes("--force");

  console.log("╔══════════════════════════════════════════════════════════╗");
  console.log("║   Lurnava Level 8 — Two-Stage Curriculum Generator       ║");
  console.log("║   Stage 1: AI Outline → Stage 2: Full Card Writing       ║");
  console.log("║   Model: gpt-4o-mini | Auto Mode: ON                     ║");
  console.log("╚══════════════════════════════════════════════════════════╝\n");

  let targetModules = level8Syllabus;
  if (targetModuleArg) {
    targetModules = level8Syllabus.filter((m) => m.num.split(".")[1] === targetModuleArg);
  } else if (startArg) {
    const startIdx = parseInt(startArg);
    targetModules = level8Syllabus.filter((m) => parseInt(m.num.split(".")[1]) >= startIdx);
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
    const modDir = path.join(__dirname, "../src/content/level-8", `module-8-${modNum}`);
    const filesExist =
      fs.existsSync(path.join(modDir, "core.ts")) &&
      fs.existsSync(path.join(modDir, "forex.ts")) &&
      fs.existsSync(path.join(modDir, "gold.ts")) &&
      fs.existsSync(path.join(modDir, "crypto.ts"));

    if (filesExist && !force && !targetModuleArg) {
      console.log(`  Skipping Module 8.${modNum} (files exist — use --force to regenerate)`);
      completed++;
      continue;
    }

    try {
      await generateModule(m);
      completed++;
      console.log(`\n  Progress: ${completed + failed}/${targetModules.length} modules (${completed} ok, ${failed} failed)`);
    } catch (err) {
      failed++;
      console.error(`\n  ❌ Module 8.${modNum} FAILED:`, err);
      console.log(`  Progress: ${completed + failed}/${targetModules.length} modules (${completed} ok, ${failed} failed)`);
    }
  }

  updateRootIndex();

  console.log("\n╔══════════════════════════════════════════════════════════╗");
  console.log(`║   GENERATION COMPLETE: ${completed} modules done, ${failed} failed         ║`);
  console.log("╚══════════════════════════════════════════════════════════╝");
  console.log("\nNext steps:");
  console.log("  1. npx tsx scripts/audit-uniqueness.ts --level=8");
  console.log("  2. npx tsx src/scripts/validate/validate-curriculum.ts");
  console.log("  3. FORCE_LIVE=true npx tsx src/scripts/sync/sync-level-8-curriculum.ts");
}

run().catch((err) => {
  console.error("FATAL:", err);
  process.exit(1);
});
