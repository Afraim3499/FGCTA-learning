import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({ 
  connectionString: process.env.DIRECT_URL,
  ssl: { rejectUnauthorized: false }
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🚀 Initializing Full 69-Module Market Participant ingestion with Adaptations...");

  const modules = [
    // ============================================
    // LEVEL 0: FOUNDATIONS (3 MODULES)
    // ============================================
    {
      level: 0, moduleNumber: "0.1", title: "Introduction to the Matrix",
      objective: "Welcome to the Academy Foundations.",
      content: "# Welcome Candidate\n\nYou are here to unlearn everything the retail world taught you. Participation is not about charts; it is about the transfer of value.",
      forexAdaptation: "## FX Roots\nThe Interbank Price Delivery Algorithm (IPDA) handles $7.5 Trillion daily. Your job is to find where the banks are moving their hedges.",
      cryptoAdaptation: "## Crypto Roots\nDeFi and MEV (Maximal Extractable Value) have replaced the traditional broker. Transparency is your edge, if you know how to read the block.",
      goldAdaptation: "## Gold Roots\nGold is the ultimate store of value. We don't participate in it like a currency; we participate in it as a hedge against fiat debasement.",
      logicIds: ["INT_001"],
      skillLevel: "beginner", orderIndex: 1
    },
    {
      level: 0, moduleNumber: "0.2", title: "Market Participation Basics",
      objective: "Understanding why we participate the way we do.",
      content: "# Why Market Size Matters\n\nIt is not about intelligence; it is about capital and priority access.",
      forexAdaptation: "## FX Edge\nBullion banks and central banks have direct 'Prime' access. We replicate their entries by identifying their mitigation zones.",
      cryptoAdaptation: "## Crypto Edge\nExchange orderbooks are influenced by market makers (MMs). We participate alongside the MMs, not against them.",
      goldAdaptation: "## Gold Edge\nPhysical delivery cycles drive spot pricing. We track the 'London Fix' to determine the daily Primary goal.",
      interactiveTaskType: "type_b_scenario",
      interactiveTaskData: {
        contextPrompt: "You are observing a massive boundary sweep on the EUR/USD 15m chart. A retail 'Resistance' level has been broken by 10 pips, and price is now violently reversing. What is the Primary goal here?",
        options: [
          { id: "opt1", text: "Trap retail breakout buyers and engineer a value pool for a larger short position.", grade: "best", feedback: "Correct. This is a 'boundary sweep'.", rationale: "Larger participants require thousands of lots to fill. They must induce counterparty volume by triggering stops or breakout orders." },
          { id: "opt2", text: "The market has run out of buyers and is falling due to gravity.", grade: "poor", feedback: "Markets do not move by gravity. They move by the intent of capital.", rationale: "Every move is engineered. Thinking in terms of 'gravity' is a retail fallacy." },
          { id: "opt3", text: "Test the next major support level to see if it holds.", grade: "acceptable", feedback: "Partially correct, but the primary intent of the initial sweep was testing a known boundary.", rationale: "While price will likely seek support, the immediate action was a boundary sweep." }
        ]
      },
      logicIds: ["INT_002", "INT_003"],
      skillLevel: "beginner", orderIndex: 2
    },
    {
      level: 0, moduleNumber: "0.3", title: "Platform Orientation",
      objective: "Setting up your workspace for simulation.",
      content: "# Initialize Your Platform\n\nEnsure your data feeds are active. Market participant activity requires precision.",
      logicIds: ["INT_004"],
      skillLevel: "beginner", orderIndex: 3
    },

    // ============================================
    // LEVEL 1: MARKET BASICS (15 MODULES)
    // ============================================
    {
      level: 1, moduleNumber: "1.1", title: "Purpose of Financial Markets",
      objective: "Understand the historical role of value exchange.",
      content: "# The Purpose of Markets\n\nFinancial markets exist to facilitate the exchange of capital and value. Understanding this is the first step to thinking like a professional participant.",
      forexAdaptation: "## Fiat Reserve System\nCentral Banks manage currency valuation to maintain exchange balance. We observe the 'Yield Differential'.",
      cryptoAdaptation: "## Web3 Economy\nCrypto exists to remove the middleman. We observe the 'On-Chain Inflow' metrics.",
      goldAdaptation: "## Hard Money Heritage\nGold is the only asset with zero counterparty exposure. We observe it as the 'Inflation Compass'.",
      interactiveTaskType: "type_b_scenario",
      interactiveTaskData: {
        contextPrompt: "A Central Bank announces an unexpected 50bps rate hike. The currency pair immediately rallies 100 pips. Why did this happen in the context of global capital?",
        options: [
          { id: "opt1", text: "Global capital is seeking the higher yield available in this currency.", grade: "best", feedback: "Correct. Capital flows toward yield.", rationale: "The Yield Differential is a powerful macro driver." },
          { id: "opt2", text: "Participants are excited and buying the news.", grade: "poor", feedback: "Emotional excitement doesn't move trillions. Yield differentials do.", rationale: "Retail sentiment is a symptom, not the cause." }
        ]
      },
      logicIds: ["MAC_001"],
      skillLevel: "beginner", orderIndex: 1
    },
    {
      level: 1, moduleNumber: "1.2", title: "The Zero-Sum Fallacy",
      objective: "Deconstruct the myth of retail vs. primary participant 'performance'.",
      content: "# Zero-Sum vs Value Transfer\n\nYou are not playing against a chart; you are playing against matching algorithms.",
      skillLevel: "beginner", orderIndex: 2
    },
    {
      level: 1, moduleNumber: "1.3", title: "The Probability Matrix",
      objective: "Thinking in probabilities. The Casino Analogy.",
      content: "# The Probability Matrix\n\nLike a casino, we have a small edge. We don't care about a single unfavorable outcome; we care about the result over a large sample.",
      interactiveTaskType: "coin_flip_simulator",
      skillLevel: "beginner", orderIndex: 3
    },
    {
      level: 1, moduleNumber: "1.4", title: "Supply & Demand Fundamentals",
      objective: "Basic economics of value and scarcity.",
      content: "# Supply & Demand\n\nThe fundamental truth of value. If something is rare and desired, price rises.",
      skillLevel: "beginner", orderIndex: 4
    },
    {
      level: 1, moduleNumber: "1.5", title: "Inflation Mechanics",
      objective: "How fiat debasement drives asset pricing.",
      content: "# Inflation\n\nWhen the supply of currency expands, the purchasing power of each unit declines.",
      skillLevel: "beginner", orderIndex: 5
    },
    {
      level: 1, moduleNumber: "1.6", title: "Central Banking Basics",
      objective: "The role of the Fed, ECB, and BOJ.",
      content: "# Central Banking\n\nThe ultimate controllers of capital supply.",
      skillLevel: "beginner", orderIndex: 6
    },
    {
      level: 1, moduleNumber: "1.7", title: "Macro Interconnectivity",
      objective: "How Bonds, Stocks, and Currencies correlate.",
      content: "# Macro Interconnectivity\n\nEverything is connected. When bond yields rise, it impacts currency valuation.",
      interactiveTaskType: "macro_rags_to_riches",
      skillLevel: "beginner", orderIndex: 7
    },
    {
      level: 1, moduleNumber: "1.8", title: "Economic Indicators",
      objective: "Interest rates, CPI, and employment data.",
      content: "# Economic Indicators\n\nData points that participants use to gauge the health of an economy.",
      skillLevel: "beginner", orderIndex: 8
    },
    {
      level: 1, moduleNumber: "1.9", title: "The History of Currency",
      objective: "From Gold Standard to Fiat.",
      content: "# History of Money\n\nUnderstanding the transition to digital, borderless capital.",
      skillLevel: "beginner", orderIndex: 9
    },
    {
      level: 1, moduleNumber: "1.10", title: "The Auction Process",
      objective: "How orders are matched in real-time.",
      content: "# The Auction\n\nMarkets are continuous auctions matching buyers and sellers.",
      skillLevel: "beginner", orderIndex: 10
    },
    {
      level: 1, moduleNumber: "1.11", title: "Exposure Management: Part 1",
      objective: "The R-Multiple and Asymmetry.",
      content: "# Exposure Management\n\nProtecting capital is the first priority.",
      interactiveTaskType: "choice_block",
      interactiveTaskData: {
        question: "If you have a 1:3 planned exposure / possible outcome ratio, how many unfavorable outcomes can one favorable outcome cover?",
        options: ["One", "Two", "Three", "Zero"],
        correctIndex: 2
      },
      skillLevel: "beginner", orderIndex: 11
    },
    {
      level: 1, moduleNumber: "1.12", title: "Psychology of Uncertainty",
      objective: "Unfavorable outcome aversion and the gambler's fallacy.",
      content: "# Psychology\n\nThe human brain is not wired for probabilistic thinking.",
      skillLevel: "beginner", orderIndex: 12
    },
    {
      level: 1, moduleNumber: "1.13", title: "Result Expectations",
      objective: "The mathematical matrix of outcomes.",
      content: "# Outcome Mapping\n\nA participant with a 35% favorable rate can be highly successful.",
      skillLevel: "beginner", orderIndex: 13
    },
    {
      level: 1, moduleNumber: "1.14", title: "Asset Classes",
      objective: "Forex vs. Crypto vs. Commodities.",
      content: "# Asset Classes\n\nChoosing the right environment for your skills.",
      interactiveTaskType: "type_b_scenario",
      interactiveTaskData: {
        contextPrompt: "You are reviewing a high-volatility environment in BTC/USD. Why is the structural reading different from EUR/USD?",
        options: [
          { id: "opt1", text: "Crypto markets are thinner and more prone to rapid delivery gaps.", grade: "best", feedback: "Correct.", rationale: "Capital profiles vary by asset class." },
          { id: "opt2", text: "Charts work differently in Crypto.", grade: "poor", feedback: "Charts are just a reflection of participation.", rationale: "Logic is consistent, but delivery speed varies." }
        ]
      },
      skillLevel: "beginner", orderIndex: 14
    },
    {
      level: 1, moduleNumber: "1.15", title: "Final Level Review",
      objective: "Consolidating foundations.",
      content: "# Review\n\nYou are ready for the Level 1 Knowledge Test.",
      skillLevel: "beginner", orderIndex: 15
    },

    // ============================================
    // LEVEL 2: MARKET MECHANICS (15 MODULES)
    // ============================================
    {
      level: 2, moduleNumber: "2.1", title: "Chart Basics",
      objective: "Candlestick anatomy and timeframes.",
      content: "# The Chart\n\nA visual record of price and time.",
      skillLevel: "beginner", orderIndex: 1
    },
    {
      level: 2, moduleNumber: "2.2", title: "Fractal Nature of Price",
      objective: "Structure within structure.",
      content: "# Fractals\n\nPrice action mirrors itself across scales.",
      interactiveTaskType: "type_a_point_click",
      skillLevel: "beginner", orderIndex: 2
    },
    {
      level: 2, moduleNumber: "2.3", title: "Primary Price Feeds",
      objective: "Difference between B-Book and Direct feeds.",
      content: "# Primary vs Retail feeds.",
      skillLevel: "beginner", orderIndex: 3
    },
    {
      level: 2, moduleNumber: "2.4", title: "The Range Model",
      objective: "Equilibrium, Premium, and Discount.",
      content: "# Range Modeling\n\nIdentifying the midpoint of price delivery.",
      skillLevel: "beginner", orderIndex: 4
    },
    {
      level: 2, moduleNumber: "2.5", title: "Market Structure: Part 1",
      objective: "Identifying Primary Swings.",
      content: "# Market Structure\n\nDefining the major anchors of a directional move.",
      skillLevel: "beginner", orderIndex: 5
    },
    {
      level: 2, moduleNumber: "2.6", title: "Market Structure Shift (MSS)",
      objective: "Identifying the structural reading change.",
      content: "# Market Structure Shift (MSS)\n\nThe moment price displacement violates a major anchor.",
      interactiveTaskType: "type_a_point_click",
      skillLevel: "beginner", orderIndex: 6
    },
    {
      level: 2, moduleNumber: "2.7", title: "The Trend Fallacy",
      objective: "Why 'trend' is an unhelpful expectation.",
      content: "# The 'Trend' Fallacy\n\nLarge participants move between boundary areas.",
      skillLevel: "beginner", orderIndex: 7
    },
    {
      level: 2, moduleNumber: "2.8", title: "Internal vs External Structure",
      objective: "Noise vs. Major anchors.",
      content: "# Structural Layers\n\nFiltering lower-timeframe noise from higher-timeframe context.",
      skillLevel: "beginner", orderIndex: 8
    },
    {
      level: 2, moduleNumber: "2.9", title: "Displacement",
      objective: "Aggressive price movement.",
      content: "# Displacement\n\nClear, violent moves that indicate commitment.",
      skillLevel: "beginner", orderIndex: 9
    },
    {
      level: 2, moduleNumber: "2.10", title: "Breakouts vs Failed Breaks",
      objective: "Validation of boundaries.",
      content: "# Breakouts\n\nWhen price holds beyond a previous boundary.",
      interactiveTaskType: "type_a_point_click",
      skillLevel: "beginner", orderIndex: 10
    },
    {
      level: 2, moduleNumber: "2.11", title: "Boundary Areas (BSL/SSL)",
      objective: "Identifying resting orders.",
      content: "# Boundaries\n\nAreas where orders cluster beyond old highs and lows.",
      skillLevel: "beginner", orderIndex: 11
    },
    {
      level: 2, moduleNumber: "2.12", title: "External Range Boundary",
      objective: "Practice identifying range extremes.",
      content: "# External Boundaries\n\nLaunching the Chart Map Mission.",
      interactiveTaskType: "scenario_link",
      interactiveTaskData: { scenarioSlug: "m2-level-2-map-review-v1" },
      skillLevel: "beginner", orderIndex: 12
    },
    {
      level: 2, moduleNumber: "2.13", title: "HTF Anchors",
      objective: "Daily and Weekly levels.",
      content: "# HTF Anchors\n\nThe maps used by larger participants.",
      skillLevel: "beginner", orderIndex: 13
    },
    {
      level: 2, moduleNumber: "2.14", title: "Session Windows",
      objective: "London and NY participation windows.",
      content: "# Session Windows\n\nWhen the auction is most active.",
      skillLevel: "beginner", orderIndex: 14
    },
    {
      level: 2, moduleNumber: "2.15", title: "Level 2 Review",
      objective: "Consolidating mechanics.",
      content: "# Review\n\nYou are ready for the Level 2 Knowledge Test.",
      skillLevel: "beginner", orderIndex: 15
    },

    // ============================================
    // LEVEL 3: STRUCTURE & IMBALANCE (15 MODULES)
    // ============================================
    {
      level: 3, moduleNumber: "3.1", title: "Order Blocks",
      objective: "Identify where strong moves are initiated.",
      content: "# Order Blocks\n\nThe last candle before a structural shift.",
      skillLevel: "intermediate", orderIndex: 1
    },
    {
      level: 3, moduleNumber: "3.2", title: "Fair Value Gaps (FVG)",
      objective: "Price delivery imbalances.",
      content: "# Fair Value Gaps\n\nRapid delivery that leaves gaps in matching.",
      skillLevel: "intermediate", orderIndex: 2
    },
    {
      level: 3, moduleNumber: "3.3", title: "Breaker Blocks",
      objective: "Failed order blocks flipping polarity.",
      content: "# Breakers\n\nViolation of an OB that subsequently acts as an anchor.",
      skillLevel: "intermediate", orderIndex: 3
    },
    {
      level: 3, moduleNumber: "3.4", title: "Mitigation Blocks",
      objective: "Hedge clearing without boundary sweeps.",
      content: "# Mitigation\n\nNeutralizing previous exposure.",
      interactiveTaskType: "type_a_point_click",
      skillLevel: "intermediate", orderIndex: 4
    },
    {
      level: 3, moduleNumber: "3.5", title: "Inversion FVG",
      objective: "Inefficiency flipping polarity.",
      content: "# Inversion\n\nA shift in Primary structural reading.",
      skillLevel: "intermediate", orderIndex: 5
    },
    {
      level: 3, moduleNumber: "3.6", title: "Exchange Voids",
      objective: "Explosive moves and the vacuum effect.",
      content: "# Voids\n\nGaps in price where exchange did not occur.",
      skillLevel: "intermediate", orderIndex: 6
    },
    {
      level: 3, moduleNumber: "3.7", title: "Volume Imbalances",
      objective: "Identifying commitment via volume.",
      content: "# Volume Imbalances\n\nWhen candle bodies do not overlap.",
      skillLevel: "intermediate", orderIndex: 7
    },
    {
      level: 3, moduleNumber: "3.8", title: "Propulsion Blocks",
      objective: "Retest of an order block.",
      content: "# Propulsion\n\nAcceleration of price from a validated OB.",
      interactiveTaskType: "type_a_point_click",
      skillLevel: "intermediate", orderIndex: 8
    },
    {
      level: 3, moduleNumber: "3.9", title: "Footprint Basics",
      objective: "Order flow and Tape Reading.",
      content: "# Footprints\n\nObserving real-time exchange data.",
      interactiveTaskType: "tape_reading_basics",
      skillLevel: "intermediate", orderIndex: 9
    },
    {
      level: 3, moduleNumber: "3.10", title: "Level 3 Final Gate",
      objective: "Final structural assessment.",
      content: "# Final Gate\n\nComplete the mission to unlock Level 4.",
      interactiveTaskType: "scenario_link",
      skillLevel: "intermediate", orderIndex: 10
    },

    // ============================================
    // LEVEL 4: STRUCTURE MAPPING (REDACTED FOR MVP)
    // ============================================
    {
      level: 4, moduleNumber: "4.1", title: "Advanced Structure",
      objective: "Higher timeframe context.",
      content: "# HTF Structure\n\nMapping the primary map.",
      skillLevel: "advanced", orderIndex: 1
    },

    // ============================================
    // LEVEL 5: EVIDENCE-BASED SCENARIO PLANNING (10 MODULES)
    // ============================================
    {
      level: 5, moduleNumber: "5.1", title: "Evidence Stack Framework",
      objective: "Transition from identifying isolated components to building a unified, weighted reading of the market environment.",
      content: `# 5.1 — Evidence Stack Framework

:::skill-target
Master the ability to unify isolated structural clues into a single, weighted Evidence Stack.
:::

### The Shift to Professional Synthesis
In previous levels, you learned how to find individual tools: a Market Structure Shift, a Fair Value Gap, or an Order Block. However, in simulation, these tools often provide conflicting signals. A professional participant does not react to a single clue; they build an **Evidence Stack**.

:::visual
title: The Evidence Ladder
image: /images/academy/level5/5.1_stack.png
caption: Layering high-probability clues to find the path of highest structural alignment.
lookFor: ["HTF Directional Narrative", "Intermediate MSS Quality", "Price Delivery (FVG/OB)", "Session Liquidity Context"]
:::

### What Counts as Evidence?
Not all clues are weighted equally. The "Stack" follows a hierarchy of significance:
1. **The Anchor**: High-Timeframe structure (Daily/4H).
2. **The Catalyst**: A clear Market Structure Shift with displacement.
3. **The Vehicle**: The specific entry array (FVG, Order Block) being respected.
4. **The Timing**: Interaction occurring during a high-volume session window.

:::decision-rule
If your stack contains less than three layers of alignment, the environment is considered "Low Certainty." The professional decision is to observe, not participate.
:::

### The "Conflict" Filter
When you find a Bullish FVG but the Daily structure is Bearish, you have **Structural Conflict**. In Level 5, we do not "guess" which will win. We identify the conflict, document it in the journal, and wait for one side to be invalidated.

:::trap
**The Single-Clue Fallacy**: Assuming a "Perfect FVG" will hold even when the HTF Evidence Stack is pointing in the opposite direction.
:::

### Journal Review Prompt
After your simulation session, review your evidence stack and ask: 'Did I record conflicting evidence, or did I only collect clues that supported my initial impression?' If you only recorded supporting evidence, flag this session for bias review.`,
      interactiveTaskType: "choice_block",
      interactiveTaskData: {
        question: "A learner identifies a bearish MSS on the Daily chart and a bullish Order Block on the 4-hour chart. How should these be handled in the Evidence Stack?",
        options: [
          { id: "A", text: "Ignore the Order Block because the Daily MSS is more important.", isCorrect: false, feedback: "Incorrect. The stack must account for all relevant structural clues, even conflicting ones." },
          { id: "B", text: "Record both observations in the stack — the MSS as a supporting clue and the OB as a conflicting clue.", isCorrect: true, feedback: "Correct. A complete evidence stack includes both supporting and conflicting structural observations across timeframes." },
          { id: "C", text: "Wait until one of them disappears before building the stack.", isCorrect: false, feedback: "Waiting removes the ability to plan for alternative outcomes during the session." },
          { id: "D", text: "Choose whichever clue appeared most recently.", isCorrect: false, feedback: "Recency is not a weighting factor in a disciplined evidence stack." }
        ]
      },
      skillLevel: "advanced", orderIndex: 1
    },
    {
      level: 5, moduleNumber: "5.2", title: "Primary vs Alternative Scenario",
      objective: "Build two-way branching logic to maintain objectivity and prevent narrative lock.",
      content: `# 5.2 — Primary vs Alternative Scenario

:::skill-target
Develop the discipline to 'branch' your thinking by preparing for both your expected outcome and its logical invalidation.
:::

### Thinking in Branches
A "Scenario" is not a prediction. It is a logical "If/Then" statement. If you only have one plan, you are emotionally committed to a single outcome. A professional participant always carries two: the **Primary Scenario** and the **Alternative Scenario**.

:::visual
title: Branching Logic Map
image: /images/academy/level5/5.2_branching.png
caption: Preparing for market delivery in both directions to remain objective during the session.
lookFor: ["Primary Execution Logic", "Invalidation Trigger Point", "Alternative Narrative Pivot", "Neutral Observation Criteria"]
:::

### The Primary Scenario (The 'A' Plan)
This is the path with the most Evidence Stack alignment.
*   **Trigger**: Price interacts with a specific array (e.g., 1H FVG).
*   **Behavior**: Price shows immediate displacement in the narrative direction.
*   **Objective**: Price reaches the identified liquidity pool.

:::decision-rule
Before every session, you must be able to state: "If price closes below [Level X], my Primary Bullish Scenario is dead, and I will pivot to Neutral or Bearish."
:::

### The Alternative Scenario (The 'B' Plan)
This is what happens if your Primary Scenario is **invalidated**.
*   **Trigger**: Price closes through your invalidation anchor.
*   **New Logic**: The rejection of your plan confirms a move in the opposite direction or a transition to a "Sideways/Unclear" state.

:::visual-compare
title: Scenario Bias Check
caption: Compare how you feel when price reaches your area vs. how you should react.
leftImage: /images/academy/level5/5.2_branching.png
leftLabel: OBJECTIVE BRANCHING
rightImage: /images/academy/level5/5.2_lock.png
rightLabel: NARRATIVE LOCK (TRAP)
:::

:::trap
**Narrative Lock**: Entering a session so convinced that price 'must' go up that you ignore the structural clues telling you the Alternative Scenario is currently active.
:::`,
      interactiveTaskType: "type_b_scenario",
      interactiveTaskData: {
        contextPrompt: "You have built an evidence stack supporting a bearish scenario from a 1H FVG at 1.0965. The Daily MSS is bearish. You need to define your Alternative Scenario. Which of the following is the strongest alternative?",
        options: [
          { id: "opt1", text: "If price closes above the FVG at 1.0975 with a displacement candle creating a new bullish delivery gap, the bearish reading is no longer valid and the 1H structure may be shifting.", grade: "best", feedback: "Correct. This alternative is specific, structurally anchored, and defines the exact condition that invalidates the primary.", rationale: "Alternatives must be concrete — tied to a level, a candle behavior, and a structural consequence." },
          { id: "opt2", text: "If price goes up instead of down, I will reconsider my reading.", grade: "poor", feedback: "This is too vague to be an alternative scenario. It has no structural anchor or specific condition.", rationale: "Vague alternatives provide no decision framework and are functionally useless." },
          { id: "opt3", text: "I do not need an alternative because the Daily MSS is very clear.", grade: "poor", feedback: "Even the strongest readings require an alternative. No structural event is certain.", rationale: "Refusing to define an alternative is the definition of narrative lock." }
        ]
      },
      skillLevel: "advanced", orderIndex: 2
    },
    {
      level: 5, moduleNumber: "5.3", title: "Invalidation and Review Conditions",
      objective: "Define the exact structural conditions under which a scenario is no longer valid.",
      content: `# 5.3 — Invalidation and Review Conditions

:::skill-target
Learn to identify the exact structural point where a scenario 'dies' and requires an immediate audit.
:::

### The 'Kill-Switch' for Logic
Every Evidence Stack has a foundation. If that foundation is broken, the entire stack collapses. We call this the **Invalidation Anchor**. Without an invalidation point, you are not planning; you are guessing.

:::visual
title: Invalidation Anchor Visual
image: /images/academy/level5/5.3_invalidation.png
caption: Identifying the specific swing level that protects your structural narrative.
lookFor: ["Protected Swing High/Low", "Price Displacement Point", "Validation of MSS", "Point of No Return"]
:::

### Two Types of Invalidation
1.  **Structure-Based Invalidation**: A specific structural anchor is violated with displacement. For example, if your bullish scenario is built on the premise that a certain swing low holds, then a candle body closing below that swing low with a delivery gap is a structure-based invalidation.
2.  **Time-Based Invalidation**: The scenario has a time window. If the expected structural interaction does not occur within the defined session window, the scenario is marked 'Expired'.

:::decision-rule
If price reaches your Invalidation Anchor, the session logic is VOID. Do not re-enter based on the old plan. You must perform a full Review Audit before forming a new scenario.
:::

:::trap
**Anchor-Dragging**: Moving your invalidation point further away because you 'feel' price is just doing a deeper retracement. This is the fastest way to lose discipline.
:::`,
      interactiveTaskType: "type_a_point_click",
      interactiveTaskData: {
        prompt: "Identify the structural anchor that would serve as the logical invalidation point for a bullish scenario built from the recent Fair Value Gap. Look for the swing low that anchored the expansion.",
        chartData: [
          { time: '2024-01-10', open: 1.0810, high: 1.0840, low: 1.0805, close: 1.0835 },
          { time: '2024-01-11', open: 1.0835, high: 1.0860, low: 1.0830, close: 1.0855 },
          { time: '2024-01-12', open: 1.0855, high: 1.0880, low: 1.0850, close: 1.0870 },
          { time: '2024-01-15', open: 1.0870, high: 1.0875, low: 1.0825, close: 1.0830 },
          { time: '2024-01-16', open: 1.0830, high: 1.0850, low: 1.0815, close: 1.0840 },
          { time: '2024-01-17', open: 1.0840, high: 1.0890, low: 1.0835, close: 1.0885 }
        ],
        validationZones: {
          primary: [{ time: "2024-01-15", priceMin: 1.0820, priceMax: 1.0840 }]
        },
        hints: {
          light: "Look for the lowest point of the retracement before the final upward move.",
          guided: "Identify the candle on 2024-01-15 near the 1.0830 level."
        },
        rationale: "The swing low that anchored the bullish expansion is the structural foundation of the scenario. If this level is violated with displacement, the bullish reading is no longer valid."
      },
      skillLevel: "advanced", orderIndex: 3
    },
    {
      level: 5, moduleNumber: "5.4", title: "Context Alignment Across Timeframes",
      objective: "Synthesize HTF narrative with LTF structural evidence to build aligned scenario plans.",
      content: `# 5.4 — Context Alignment Across Timeframes

:::skill-target
Standardize how you 'zoom out' to find the Anchor and 'zoom in' to find the Catalyst.
:::

### The Multi-Timeframe Filter
In Level 5, we stop looking at charts as isolated patterns. Every 15-minute candle is a tiny fragment of a 4-hour story. **Context Alignment** is the process of ensuring your small-scale plan is supported by the large-scale environment.

:::visual
title: Timeframe Alignment Flow
image: /images/academy/level5/5.4_alignment.png
caption: How directional narrative flows from higher timeframes into execution timeframes.
lookFor: ["Weekly/Daily Narrative Anchor", "4H/1H Structural Phase", "15m/5m Execution Catalyst", "Alignment vs Divergence"]
:::

### The Roles
*   **High Timeframe (HTF - Daily/Weekly)**: Defines the **Narrative**. Are we in a retracement or an expansion?
*   **Medium Timeframe (MTF - 4H/1H)**: Defines the **Scenario Area**. Where should we look for a reaction?
*   **Low Timeframe (LTF - 15m/5m/1m)**: Defines the **Catalyst**. Is the reaction actually happening?

:::decision-rule
Never take an LTF Catalyst that is trading directly *into* an HTF Invalidation zone. The HTF always has more weight in the Evidence Stack.
:::

:::trap
**The Zoom-In Bias**: Spending 90% of your time on the 1-minute chart and losing track of the 4-hour supply zone you are currently trapped inside.
:::`,
      interactiveTaskType: "type_b_scenario",
      interactiveTaskData: {
        contextPrompt: "The Daily chart has completed a bearish MSS. On the 1-hour chart, price is retracing upward but has not created a bullish MSS — the retracement is a slow grind with no displacement. What is the most aligned reading?",
        options: [
          { id: "opt1", text: "The 1H retracement has no structural shift (no MSS, no displacement). The Daily bearish narrative remains the primary context. I will observe the retracement for signs of failure at a bearish anchor.", grade: "best", feedback: "Correct. The absence of an LTF structural shift means the HTF narrative is still dominant.", rationale: "Slow retracements without displacement are internal noise until a structural shift occurs." },
          { id: "opt2", text: "The 1H is moving upward, so the bearish Daily narrative may be changing. I will build a bullish scenario from the 1H move.", grade: "poor", feedback: "This is a counter-narrative reading built on price movement alone, not structural evidence.", rationale: "Directional movement without structural shift (MSS/FVG) is not evidence of narrative change." }
        ]
      },
      skillLevel: "advanced", orderIndex: 4
    },
    {
      level: 5, moduleNumber: "5.5", title: "Structural Conflict and Unclear Areas",
      objective: "Identify when the evidence stack is too conflicted to form a valid scenario plan.",
      content: `# 5.5 — Structural Conflict and Unclear Areas

:::skill-target
Learn to identify the 'No-Scenario Reading' — when the market is too messy to plan a high-probability path.
:::

### The Value of 'I Don't Know'
One of the most expensive habits in trading is the belief that every chart must have a scenario. A professional participant's most powerful tool is the ability to say: **"This structure is conflicted; I will wait."**

:::visual
title: Clear vs Conflicted Structure
image: /images/academy/level5/5.5_conflict.png
caption: Identifying when the Evidence Stack is too fragmented to support a disciplined plan.
lookFor: ["Clean Trending Expansion", "Opposing MSS Shifts", "Overlapping FVG Zones", "Consolidation Range Highs/Lows"]
:::

### Signs of Structural Conflict
- **Opposing MSS on adjacent timeframes**: The Daily has a bullish MSS, but the 4H has just completed a bearish MSS.
- **Consolidation without boundary interaction**: Price is ranging within a narrow zone.
- **Mixed displacement quality**: The most recent move had strong displacement in one direction, but it occurred entirely within a larger opposing structure.

:::decision-rule
If you cannot identify a Primary Scenario with at least 70% confidence based on the Evidence Stack, the chart is **Unclear**. Your scenario for the session is "Observe only."
:::

:::trap
**Over-Searching**: If you have to squint or change timeframes 5 times to 'find' a reason to enter, the setup doesn't exist. High-probability scenarios are usually obvious.
:::`,
      interactiveTaskType: "choice_block",
      interactiveTaskData: {
        question: "The Daily chart has a bullish MSS. The 4-hour chart has just completed a bearish MSS. The 1-hour chart is consolidating with no boundary interaction. What is the correct reading?",
        options: [
          { id: "A", text: "Build a bullish scenario because the Daily timeframe has more authority.", isCorrect: false, feedback: "HTF authority does not negate MTF structural shifts. This is conflict, not clarity." },
          { id: "B", text: "Build a bearish scenario because the 4-hour MSS is more recent.", isCorrect: false, feedback: "Recency does not resolve timeframe conflict." },
          { id: "C", text: "Record 'No Scenario — Structural Conflict' and wait for one MSS to be invalidated before building a plan.", isCorrect: true, feedback: "Correct. When adjacent timeframes have opposing MSS events with no resolution, the chart is structurally unclear." },
          { id: "D", text: "Build both a bullish and bearish scenario simultaneously and observe which one plays out.", isCorrect: false, feedback: "Building two opposing plans on the same timeframe in a conflicted environment leads to over-trading." }
        ]
      },
      skillLevel: "advanced", orderIndex: 5
    },
    {
      level: 5, moduleNumber: "5.6", title: "Confirmation vs Assumption",
      objective: "Distinguish between acting on structural evidence and acting before the chart provides observable proof.",
      content: `# 5.6 — Confirmation vs Assumption

:::skill-target
Differentiate between 'Predicting what price will do' and 'Responding to what price has done'.
:::

### The Reactivity Principle
Level 5 teaches you to be a **Reactive Observer**, not a Predictor. An **Assumption** is taking a trade because price reached a level. **Confirmation** is taking a trade because price reached a level AND showed a structural shift.

:::visual-compare
title: Assumption vs Confirmation
caption: The visual difference between 'Hoping' a level holds and 'Verifying' it holds.
leftImage: /images/academy/level5/5.6_confirmation.png
leftLabel: CONFIRMATION (REACTION)
rightImage: /images/academy/level5/5.6_confirmation.png
rightLabel: ASSUMPTION (PREDICTION)
:::

:::decision-rule
Confirmation usually requires a lower-timeframe shift (e.g., 5m or 1m) occurring *inside* a higher-timeframe area (e.g., 1H or 4H).
:::

### The Risk of Assumption
When you assume, you are betting that the "Anchor" will hold before any "Catalyst" appears. If the anchor fails, you take a full loss.
*   **Assumption**: "I'm buying here because it's a 4H FVG."
*   **Confirmation**: "I'm buying here because price hit the 4H FVG and then printed a 5m Bullish MSS."

:::trap
**Bottom Fishing**: Trying to catch the exact low of a retracement before any MSS occurs. This is an assumption that usually leads to being 'run over' by the trend.
:::`,
      interactiveTaskType: "type_b_scenario",
      interactiveTaskData: {
        contextPrompt: "You have identified a bullish Order Block at 1.0940 from the 4-hour chart. Price is currently at 1.0955, moving downward toward the OB. You want to build a bullish scenario. What is the correct approach?",
        options: [
          { id: "opt1", text: "Wait for price to reach the OB. If a 1-minute MSS occurs with displacement at or near 1.0940, build the scenario from the confirmed reaction.", grade: "best", feedback: "Correct. Confirmation requires waiting for structural evidence at the area.", rationale: "Scenarios built on delivered evidence produce better journal review data and reduce emotional attachment." },
          { id: "opt2", text: "Build the bullish scenario now because the OB is very clear and price is almost there.", grade: "poor", feedback: "This is assumption-based planning. The OB has not yet produced any structural reaction.", rationale: "Identifying a zone is not the same as confirming a reaction." }
        ]
      },
      skillLevel: "advanced", orderIndex: 6
    },
    {
      level: 5, moduleNumber: "5.7", title: "Scenario Review Under Pressure",
      objective: "Adapt scenario plans systematically as new structural evidence arrives during simulation.",
      content: `# 5.7 — Scenario Review Under Pressure

:::skill-target
Maintain objectivity when price action moves faster than your emotional processing.
:::

### The Fog of War
In a live simulation session, price action can be chaotic. Your brain will naturally try to ignore clues that contradict your bias. **Real-Time Review** is the practice of stepping back every 5–15 minutes to re-evaluate your Evidence Stack.

:::visual
title: Scenario Review Timeline
image: /images/academy/level5/5.7_timeline.png
caption: A step-by-step workflow for auditing your plan as new candles print.
lookFor: ["Planned Interaction Area", "Real-Time Structural Reaction", "Validity Check", "Decision Confirmation/Pivot"]
:::

### The 3-Step Mid-Session Audit
1.  **Check the Anchor**: Is the HTF narrative still valid, or did DXY just have a major shift?
2.  **Check the Invalidation**: Is price closer to my profit target or my Invalidation Anchor?
3.  **Check the Quality**: Is the displacement strong, or is this "lazy" price action?

:::decision-rule
If at any point during the session you feel "Confused" or "Anxious," your scenario is officially **Broken**. The only professional move is to exit or go neutral until clarity returns.
:::

:::trap
**Hope-Based Holding**: Staying in a plan because you 'need' the win, even though the structural clues (like a counter-MSS) have already invalidated your logic.
:::`,
      interactiveTaskType: "type_b_scenario",
      interactiveTaskData: {
        contextPrompt: "Your bullish scenario is confirmed from a 1H Order Block. On the 1-minute chart, price made a new high but immediately displaced downward, creating a bearish FVG that violates your confirmation zone. The swing low of your MSS at 1.0938 has NOT been violated yet. What do you do?",
        options: [
          { id: "opt1", text: "The bearish FVG through my confirmation zone is a structural warning. I note the warning in my journal and watch for the swing low violation.", grade: "best", feedback: "Correct. This is a measured response at a structural checkpoint.", rationale: "Adaptation requires distinguishing between warning signs and full invalidation." },
          { id: "opt2", text: "The high was broken so the bullish scenario is working. I ignore the bearish FVG.", grade: "poor", feedback: "A new high followed by immediate bearish displacement is a classic boundary sweep pattern.", rationale: "New highs without sustain, followed by displacement, are structural warnings." }
        ]
      },
      skillLevel: "advanced", orderIndex: 7
    },
    {
      level: 5, moduleNumber: "5.8", title: "Intermarket Context as Supporting Evidence",
      objective: "Use DXY and cross-asset correlation as secondary supporting context in scenario planning.",
      content: `# 5.8 — Intermarket Context as Supporting Evidence

:::skill-target
Use the Dollar Index (DXY) as a 'Truth Filter' for your currency scenarios.
:::

### The Inverse Mirror
For Forex participants, the Dollar Index (DXY) is the "Global Anchor." If you are planning a Bullish Scenario on EUR/USD, you MUST see a Bearish Evidence Stack on DXY. If they are both moving in the same direction, you have **Intermarket Conflict**.

:::visual
title: Intermarket Correlation Visual
image: /images/academy/level5/5.8_intermarket.png
caption: Using DXY as a secondary verification tool for your primary pair.
lookFor: ["DXY Inverse Alignment", "Correlation Strength", "Divergence Warning Signs", "Global Narrative Support"]
:::

:::decision-rule
Intermarket context is **Supporting Evidence**, not a Primary Catalyst. Never take a trade *only* because DXY looks good if the primary pair's structure is conflicted.
:::

### SMT Divergence (Advanced Clue)
Sometimes one pair makes a new high while its correlated pair (e.g., GBP/USD) fails to. This "crack" in correlation is a powerful signal of institutional manipulation.

:::trap
**The DXY-Only Trap**: Entering a trade on EUR/USD because DXY hit a level, even though EUR/USD hasn't printed an MSS yet. This is an assumption.
:::`,
      interactiveTaskType: "macro_rags_to_riches",
      skillLevel: "advanced", orderIndex: 8
    },
    {
      level: 5, moduleNumber: "5.9", title: "Journal-Based Decision Review",
      objective: "Use structured post-session auditing to identify bias patterns and improve scenario objectivity over time.",
      content: `# 5.9 — Journal-Based Decision Review

:::skill-target
Standardize your post-session audit to identify emotional bias vs. logical errors.
:::

### The 'L5' Audit Template
A professional's growth happens in the journal, not the chart. The goal of a Level 5 Review is to determine if your **Process** was correct, regardless of whether the simulated outcome was a "win" or "loss."

:::visual
title: The Professional Audit Template
image: /images/academy/level5/5.9_journal.png
caption: A structured 10-point checklist for objective session review.
lookFor: ["Evidence Weighting Accuracy", "Scenario Branching Clarity", "Invalidation Discipline", "Emotional State Audit"]
:::

### The Audit Questions
1. Did I identify a Primary and Alternative scenario *before* price reached the area?
2. Did my Evidence Stack have at least 3 layers of alignment?
3. Did I wait for Confirmation, or did I act on Assumption?
4. If price hit my Invalidation Anchor, did I stop trading immediately?

:::decision-rule
A "Good Trade" is any trade where the Scenario Planning Map was followed perfectly. A "Bad Trade" is any trade where the process was skipped, even if it resulted in profit.
:::

:::trap
**Outcome Bias**: Judging your performance based on simulation P&L rather than the quality of your Evidence Stack and Scenario discipline.
:::`,
      interactiveTaskType: "choice_block",
      interactiveTaskData: {
        question: "A learner completes a simulation session and writes in their journal: 'The scenario worked. Good session.' What is the primary problem with this entry?",
        options: [
          { id: "A", text: "It is too short to be a proper entry.", isCorrect: false, feedback: "Length is secondary to content quality." },
          { id: "B", text: "It records only the outcome without any process analysis — no evidence stack review, no confirmation check, no invalidation audit.", isCorrect: true, feedback: "Correct. A journal entry that only records outcomes provides no insight into the decision-making process." },
          { id: "C", text: "It should include the exact price levels reached.", isCorrect: false, feedback: "Price levels are data, but process analysis is the learning engine." },
          { id: "D", text: "It should compare the result to the previous session.", isCorrect: false, feedback: "Historical comparison is useful, but current process audit is critical." }
        ]
      },
      skillLevel: "advanced", orderIndex: 9
    },
    {
      level: 5, moduleNumber: "5.10", title: "Scenario Planning Map",
      objective: "Synthesize all Level 5 concepts into a complete scenario planning workflow and complete the capstone mission.",
      content: `# 5.10 — Scenario Planning Map

:::skill-target
Synthesize all Level 5 components into a repeatable, session-ready workflow.
:::

### The Unified Workflow
Everything you have learned — evidence stacking, branching logic, invalidation, timeframe alignment, unclear areas, confirmation, real-time adaptation, intermarket context, and journal review — comes together here.

:::visual
title: Scenario Planning Map
image: /images/academy/level5/5.10_map.png
caption: The complete circular workflow for professional market participation.
lookFor: ["HTF Narrative Anchor", "Evidence Stack Weights", "Scenario Branching", "Active Execution & Audit"]
:::

:::visual
title: The 10-Step Scenario Checklist
lookFor: ["1. Zoom Out: HTF Narrative Anchor", "2. Filter: Scan for Structural Conflict", "3. Stack: Build Evidence Stack (3+ layers)", "4. Branch: Define Primary/Alternative Scenarios", "5. Anchor: Mark Invalidation Level", "6. Verify: Check Intermarket (DXY) alignment", "7. Wait: Let price enter Scenario Area", "8. Confirm: Look for LTF Catalyst (MSS)", "9. Audit: Monitor for Lazy Delivery", "10. Review: Post-Session Journal Audit"]
:::

:::decision-rule
If Step 1 through Step 6 are not complete, you have no business performing Step 7.
:::

:::summary
Level 5 is about moving from "What is the chart doing?" to "How am I logically responding to the chart?" You are now a **Strategic Planner**, capable of maintaining objectivity in any simulated environment.
:::`,
      interactiveTaskType: "scenario_link",
      interactiveTaskData: {
        scenarioSlug: "level-5-scenario-planning-gate",
        missionTitle: "Level 5 Synthesis Mission",
        passThreshold: 85
      },
      skillLevel: "advanced", orderIndex: 10
    }
  ];

  console.log(`🚀 Ingesting modules via upsert...`);
  for (const mod of modules) {
    await prisma.courseModule.upsert({
      where: { level_moduleNumber: { level: mod.level, moduleNumber: mod.moduleNumber } },
      update: {
        ...(mod as any),
        marketTrack: "core",
      },
      create: {
        ...(mod as any),
        marketTrack: "core",
      },
    });
  }

  // ============================================
  // KNOWLEDGE TESTS (LEVEL 0-3)
  // ============================================
  const knowledgeTests = [
    {
      level: 0,
      title: "Level 0 Foundations Test",
      questionsPerAttempt: 5,
      passThreshold: 100,
      timeLimitMin: 15,
      questions: [
        { id: "q0_1", question: "What is the primary objective of the Lurnava Lab?", options: ["To guess the next candle without review.", "To practice objective mapping and structural reading review.", "To find shortcuts without completing practice."], correctIndex: 1, explanation: "The Lab is for practice and objective mapping." },
        { id: "q0_2", question: "True or False: The Lurnava platform provides financial guidance or action instructions.", options: ["True", "False"], correctIndex: 1, explanation: "Lurnava is an educational and simulation platform only." },
        { id: "q0_3", question: "Where are your saved chart analyses and session notes stored?", options: ["In the Dashboard", "In the Technical Library / Lab Journal", "In the user profile settings"], correctIndex: 1, explanation: "All saved work is localized in your Technical Library." },
        { id: "q0_4", question: "How is your academic progression measured within the Academy?", options: ["By completing modules, missions, and passing knowledge tests.", "By the number of logins.", "By the speed at which you click through content."], correctIndex: 0, explanation: "Progression is based on academic achievement and skill verification." },
        { id: "q0_5", question: "True or False: Learners should copy Academy practice scenarios into real-world decisions.", options: ["True", "False"], correctIndex: 1, explanation: "Simulations are for educational practice only. They should not be copied into real-world financial decisions." }
      ]
    },
    {
      level: 1,
      title: "Level 1 Market Basics Test",
      questionsPerAttempt: 15,
      passThreshold: 80,
      timeLimitMin: 20,
      questions: [
        { id: "q1_1", question: "What does the 'Casino Analogy' represent in market participation?", options: ["Trying to force a large outcome from one event.", "Maintaining a statistical edge over a large sample of independent events.", "Expecting one event to be known in advance."], correctIndex: 1, explanation: "Professional participation relies on the law of large numbers." },
        { id: "q1_2", question: "In a zero-sum matching environment, what is primarily being transferred?", options: ["Intelligence", "Capital and Value", "Confidence"], correctIndex: 1, explanation: "Markets facilitate the transfer of value." },
        { id: "q1_3", question: "If a system has a 55% success rate, what is a statistically normal occurrence in the short term?", options: ["Guaranteed positive results every week.", "A series of consecutive unfavorable attempts.", "No chance of an unsuccessful attempt."], correctIndex: 1, explanation: "Probability allows for significant short-term variance." },
        { id: "q1_4", question: "What does an R-Multiple compare?", options: ["Planned exposure relative to the outcome", "Account size only", "Price-feed speed", "A method for increasing size after a setback"], correctIndex: 0, explanation: "R-Multiple defines the unit of exposure relative to the result." },
        { id: "q1_5", question: "What is unfavorable outcome aversion in decision-making?", options: ["Feeling a negative outcome more strongly than an equal positive outcome", "Avoiding all practice to prevent mistakes", "Taking larger actions to avoid admitting a small mistake", "Both A and C"], correctIndex: 3, explanation: "Aversion can push learners to avoid objective review after an unfavorable result." },
        { id: "q1_6", question: "What is the primary intent when price moves beyond a known structural boundary and then reverses?", options: ["A sign that the structure is strengthening.", "Testing available orders and boundaries.", "A technical error."], correctIndex: 1, explanation: "Moves beyond boundaries test the available capital and interest at those extremes." },
        { id: "q1_7", question: "Why is account decrease described as 'asymmetrical'?", options: ["Because negative outcomes are always larger than positive ones.", "Because a 50% decrease requires a 100% increase to return to the original level.", "Because transaction fees change."], correctIndex: 1, explanation: "The math of recovery becomes exponentially harder as the percentage of decrease increases." },
        { id: "q1_8", question: "At their core, market price movements are driven by:", options: ["The relative scarcity of an asset and the desire to hold it (Supply and Demand).", "The specific colors and patterns of the candles.", "Random chance with no underlying cause."], correctIndex: 0, explanation: "Value is a function of supply, demand, and participant perception." },
        { id: "q1_9", question: "A central bank raising interest rates usually evidences:", options: ["A planned capital outflow from that currency.", "Capital inflow as participants seek the higher available yield.", "No change in participant behavior."], correctIndex: 1, explanation: "Higher relative yields attract global capital seeking better returns." },
        { id: "q1_10", question: "What is the most effective tool for maintaining emotional discipline?", options: ["A documented plan and an objective review journal.", "Larger actions to recover from small setbacks.", "Following advice in group chats."], correctIndex: 0, explanation: "Process-oriented discipline is built through documentation and review." },
        { id: "q1_11", question: "If a system has a 1:2 planned exposure / possible outcome ratio, what success rate is required to reach a breakeven state?", options: ["50%", "33.3%", "25%"], correctIndex: 1, explanation: "With 1:2, one successful outcome covers two failed ones." },
        { id: "q1_12", question: "What is the role of 'unlearning' in the foundations phase?", options: ["To forget how to read a price chart entirely.", "To remove unhelpful expectations of easy achievement.", "To stop paying attention to events."], correctIndex: 1, explanation: "Foundation requires clearing the mind of inaccurate terminology and unhelpful expectations." },
        { id: "q1_13", question: "Markets primarily exist to:", options: ["Create wealth for all participants simultaneously.", "Facilitate exchange between participants with different time and capital needs.", "Provide a platform for testing new high-frequency software."], correctIndex: 1, explanation: "Markets are matching engines for capital and time." },
        { id: "q1_14", question: "Inflationary mechanics typically cause a currency's purchasing power to:", options: ["Rise indefinitely over time.", "Decline as the total supply of the currency expands.", "Stay perfectly stable."], correctIndex: 1, explanation: "Expansion of currency supply (inflation) generally debases its purchasing power." },
        { id: "q1_15", question: "The probability of any single market outcome is:", options: ["Predetermined by previous events.", "Uncertain and independent of the previous outcome.", "Known in advance by participants with large capital."], correctIndex: 1, explanation: "In a probabilistic environment, every event is unique and its specific outcome is uncertain." }
      ]
    },
    {
      level: 2,
      title: "Level 2 Market Mechanics Test",
      questionsPerAttempt: 15,
      passThreshold: 80,
      timeLimitMin: 20,
      questions: [
        { id: "q2_1", question: "What is the defining characteristic of 'Fractal' market behavior?", options: ["One that only moves in a single direction without retracements.", "One where small-scale patterns mirror large-scale patterns.", "One that is completely random."], correctIndex: 1, explanation: "Markets are self-similar across timeframes." },
        { id: "q2_2", question: "A Market Structure Shift (MSS) is identified when:", options: ["Price touches a specific moving average line.", "Price violates a major structural anchor with clear displacement.", "A new daily session window begins."], correctIndex: 1, explanation: "A shift requires the clear violation of the points that anchored the previous structural sequence." },
        { id: "q2_3", question: "What does 'Equilibrium' represent within a defined dealing range?", options: ["The exact 50% midpoint between the range high and range low.", "The area immediately above the previous high.", "The current market price."], correctIndex: 0, explanation: "Equilibrium is the fair value midpoint of a structural range." },
        { id: "q2_4", question: "In structural mapping, price above the Equilibrium point is considered:", options: ["Discount", "Premium", "Neutral"], correctIndex: 1, explanation: "Above 50% is Premium." },
        { id: "q2_5", question: "In structural mapping, price below the Equilibrium point is considered:", options: ["Discount", "Premium", "Neutral"], correctIndex: 0, explanation: "Below 50% is Discount." },
        { id: "q2_6", question: "What is 'Internal Structure' in the context of a dealing range?", options: ["Movements that occur completely outside the major structural anchors.", "Fluctuations that occur within a larger, major directional leg.", "Raw data from the exchange."], correctIndex: 1, explanation: "Internal structure is the movement within a higher-timeframe leg." },
        { id: "q2_7", question: "External Range boundaries are typically identified at:", options: ["Old highs.", "Old lows.", "Both old highs and old lows that form the range extremes."], correctIndex: 2, explanation: "The extremes of the current structural sequence define the external boundaries." },
        { id: "q2_8", question: "A 'Failed Break' is best described as:", options: ["Price moving beyond a level and establishing a new range.", "Price moving briefly beyond a level but failing to close there and returning inside.", "A move that happens exactly at the session window open."], correctIndex: 1, explanation: "A failed break shows a lack of commitment to the new price level." },
        { id: "q2_9", question: "A 'Major Swing High' is confirmed as a structural anchor only when:", options: ["It is the highest visible point on the current screen.", "It anchors a move that successfully violates a previous major structural point.", "It consists of at least three consecutive candles."], correctIndex: 1, explanation: "Structural significance is earned through the violation of opposing structure." },
        { id: "q2_10", question: "True or False: Every small fluctuation that looks like a peak is a Major Structural Anchor.", options: ["True", "False"], correctIndex: 1, explanation: "Only swings that lead to significant structural changes are considered major anchors." },
        { id: "q2_11", question: "What is the primary goal of mapping external range boundaries?", options: ["To make an immediate action decision.", "To define the objective boundaries of the current structural reading.", "To guess where other participants are placing their orders."], correctIndex: 1, explanation: "Boundaries provide the map for objective review." },
        { id: "q2_12", question: "Primary price feeds differ from typical feeds primarily in:", options: ["The color of the candles.", "Direct access and transparency of the available orders.", "Their ability to be 100% accurate about what happens next."], correctIndex: 1, explanation: "Professional feeds have less filtering and provide more granular data." },
        { id: "q2_13", question: "A Market Structure Shift (MSS) represents:", options: ["A minor and expected pullback within a sequence.", "A behavioral shift in the underlying chart context.", "A random technical glitch."], correctIndex: 1, explanation: "MSS indicates that the character of price delivery has changed." },
        { id: "q2_14", question: "The 'Trend Fallacy' assumes that:", options: ["Markets move in straight, predictable lines for extended periods.", "All market structure is fractal and self-similar.", "Prices always return to their starting point."], correctIndex: 0, explanation: "Retail trends are often just expansion phases between ranges." },
        { id: "q2_15", question: "Dealing ranges are structurally established by:", options: ["Two major structural anchors forming the high and low.", "Sudden spikes in activity.", "Announcements made by government officials."], correctIndex: 0, explanation: "Ranges are the areas between confirmed structural extremes." }
      ]
    },
    {
      level: 3,
      title: "Level 3 Structure & Imbalance Test",
      questionsPerAttempt: 15,
      passThreshold: 80,
      timeLimitMin: 30,
      questions: [
        { id: "q3_1", question: "What is a Fair Value Gap (FVG)?", options: ["A simple gap between the close of one day and the open of the next.", "A 3-candle sequence where rapid delivery leaves an imbalance of orders.", "A horizontal line drawn at a round number."], correctIndex: 1, explanation: "FVGs represent areas where price moved too quickly to offer balanced delivery." },
        { id: "q3_2", question: "An Order Block (OB) is structurally defined as:", options: ["Any candle that has a large body.", "The origin point of a move that successfully violates major structure.", "A candle that appears exactly at the start of a new hour."], correctIndex: 1, explanation: "Order blocks anchor the beginning of an expansion that shifts structure." },
        { id: "q3_3", question: "A 'Breaker Block' is formed when:", options: ["A failed order block is violated and then retested.", "A current structural sequence continues without interruption.", "Price moves sideways for many candles."], correctIndex: 0, explanation: "Breakers are failed order blocks that flip their structural polarity." },
        { id: "q3_4", question: "What is an 'Exchange Void'?", options: ["A moment when the order book is empty.", "An explosive move that leaves behind no orders matched on one side.", "A slow period where no candles are formed."], correctIndex: 1, explanation: "Voids represent gaps in the delivery of price." },
        { id: "q3_5", question: "Mitigation occurs when:", options: ["A participant closes all positions.", "Price returns to an old order block to clear previous exposure.", "A new all-time high is reached."], correctIndex: 1, explanation: "Mitigation is the process of neutralizing exposure from previous orders." },
        { id: "q3_6", question: "An Inversion FVG is:", options: ["A price gap that never fills.", "An FVG that is broken and then acts as support/resistance level.", "A gap that opens on the 1-minute timeframe."], correctIndex: 1, explanation: "Inversion FVGs flip their structural role after being broken." },
        { id: "q3_7", question: "A 'Volume Imbalance' is characterized by:", options: ["Exceptionally high activity on a single candle.", "A gap between two candle bodies where the wicks still overlap.", "Candles that have no wicks."], correctIndex: 1, explanation: "Volume imbalances occur when bodies do not overlap despite wick overlap." },
        { id: "q3_8", question: "Tracking structural footprints is primarily about identifying:", options: ["The exact next direction of the chart.", "Evidence left by strong participation in price movement.", "The best session window for action.", "The names of participants involved."], correctIndex: 1, explanation: "Structural footprints are visible clues created by strong participation and delivery gaps." },
        { id: "q3_9", question: "A 1-minute MSS within a 4-hour upward leg is structurally:", options: ["Confirmation of a full structure change.", "Likely internal noise or a short-term retracement.", "The strongest possible evidence for a new directional move."], correctIndex: 1, explanation: "Higher-timeframe context always overrides lower-timeframe shifts." },
        { id: "q3_10", question: "Why does Premium/Discount context matter in Level 3 review?", options: ["It gives an automatic action instruction.", "It helps compare price location with the current range.", "It removes the need for structure mapping.", "It guarantees a clean reaction."], correctIndex: 1, explanation: "Premium/Discount context helps learners review where price is located within a defined range." },
        { id: "q3_11", question: "The underlying 'Engine' of a Fair Value Gap is:", options: ["Emotional overreaction only.", "A lack of two-way exchange during strong price delivery.", "A news label on the chart.", "A wider spread only."], correctIndex: 1, explanation: "FVGs are delivery failures." },
        { id: "q3_12", question: "A 'Mitigation Block' differs from a 'Breaker' primarily because:", options: ["It contains a significantly higher amount of volume.", "It does not require a boundary sweep of the previous high/low.", "It is only structurally valid on the daily chart."], correctIndex: 1, explanation: "Breakers are defined by the sweep of a previous extreme; Mitigations are not." },
        { id: "q3_13", question: "Time & Sales data helps identify:", options: ["The exact next chart movement.", "Aggressive participation hitting bid or ask.", "The content of future news.", "The final outcome of the current candle."], correctIndex: 1, explanation: "Data reveals aggressive participation in real-time." },
        { id: "q3_14", question: "An 'Iceberg Order' is revealed when:", options: ["A level is tested repeatedly while movement through it remains limited.", "A very large candle body appears without any news event.", "Price moves too quickly for candles to form."], correctIndex: 0, explanation: "Icebergs absorb value at a fixed price." },
        { id: "q3_15", question: "Price delivery is considered 'Balanced' only when:", options: ["Both sides of the spread have been offered at every price point in a range.", "The market is closed.", "There are an equal number of candles."], correctIndex: 0, explanation: "Balanced delivery ensures no visible delivery gaps are left behind." }
      ]
    },
    {
      level: 5,
      title: "Level 5 Scenario Planning Test",
      questionsPerAttempt: 20,
      passThreshold: 85,
      timeLimitMin: 45,
      questions: [
        { id: "q5_1", question: "You identify a bearish MSS on the Daily chart and a bullish FVG on the 4-hour chart. Neither has been invalidated. What is the correct evidence stack assessment?", options: ["The Daily MSS overrides the 4H FVG automatically because it is a higher timeframe.", "Both clues should be recorded — the MSS as supporting and the FVG as conflicting — creating an evidence stack with documented conflict.", "The 4H FVG should be ignored because it opposes the Daily narrative.", "Wait until one of the two clues self-resolves before recording anything."], correctIndex: 1, explanation: "A complete evidence stack includes both supporting and conflicting observations. Conflict is information, not a problem to eliminate." },
        { id: "q5_2", question: "Your primary scenario is bearish from a 1H FVG. Your alternative is a bullish shift if price closes above 1.0975 with displacement. During the session, price closes above 1.0975 with a strong displacement candle and creates a new bullish FVG. What should you do?", options: ["Hold the bearish scenario because the Daily narrative has not changed.", "Switch to the alternative scenario as pre-defined — the condition has been met.", "Wait for a second displacement candle to confirm the first one.", "Abandon both scenarios and stop observing for the session."], correctIndex: 1, explanation: "The pre-defined alternative condition was met. Switching is not a failure — it is the execution of a well-designed plan." },
        { id: "q5_3", question: "A learner writes their invalidation condition as: 'I will invalidate if things look bad.' What is the structural problem with this condition?", options: ["It is too emotional — invalidation must reference a specific structural level and candle behavior.", "It is fine as long as the learner has experience.", "It needs to include a time component only.", "The word 'bad' should be replaced with 'bearish.'"], correctIndex: 0, explanation: "Invalidation conditions must be specific: structural level + candle behavior (body close with displacement). Vague language produces vague decisions." },
        { id: "q5_4", question: "The Daily chart shows a bearish MSS. On the 1H chart, price is retracing upward in a slow grind with no displacement and no MSS. What is the aligned reading?", options: ["Build a bullish 1H scenario because the retracement is visible.", "The 1H retracement lacks structural evidence (no MSS, no displacement). The Daily bearish narrative remains the primary context.", "Switch to a bullish scenario because the 1H is more recent.", "The chart is unclear — record No Scenario."], correctIndex: 1, explanation: "A slow retracement without structural shift does not override the HTF narrative. It is internal noise until an MSS occurs." },
        { id: "q5_5", question: "The Daily chart has a bullish MSS. The 4H chart has just completed a bearish MSS. The 1H is consolidating with no boundary interaction. What is the correct reading?", options: ["Build a bullish scenario from the Daily MSS.", "Build a bearish scenario from the 4H MSS.", "Record No Scenario — Structural Conflict, and wait for one MSS to be invalidated.", "Build both scenarios simultaneously and observe."], correctIndex: 2, explanation: "Opposing MSS on adjacent timeframes without resolution creates structural conflict. Forcing a read produces poor review quality." },
        { id: "q5_6", question: "You have identified a bullish Order Block at 1.0940. Price is at 1.0960, moving toward it. You write: 'My scenario is bullish from 1.0940.' What type of planning is this?", options: ["Confirmation-based, because the OB is a strong structural level.", "Assumption-based, because price has not yet reached the area and no structural reaction has occurred.", "Aligned, because the OB supports the HTF narrative.", "Speculative, but acceptable for simulation practice."], correctIndex: 1, explanation: "Building a scenario before price reaches the area and before any structural reaction has occurred is assumption-based planning." },
        { id: "q5_7", question: "During a simulation session, a single red candle appears inside your bullish scenario. No MSS has occurred. No FVG has been created. No anchor has been violated. What should you do?", options: ["Update the scenario to bearish because the candle was red.", "Record the candle as a structural checkpoint and update the journal.", "Do nothing — a single candle without a structural event is not a review trigger.", "Close the simulation session to avoid further uncertainty."], correctIndex: 2, explanation: "Scenario reviews are triggered by structural events (MSS, FVG, boundary sweep), not by individual candle colors." },
        { id: "q5_8", question: "Your EUR/USD scenario is bullish. You check DXY and find it also has a bullish MSS with displacement. What is the intermarket assessment?", options: ["Intermarket aligned — both bullish is supporting.", "Intermarket conflicting — EUR/USD bullish requires DXY bearish. Both bullish simultaneously is a structural divergence that should be documented.", "Intermarket neutral — DXY does not affect EUR/USD.", "Ignore DXY because the EUR/USD chart is the primary source."], correctIndex: 1, explanation: "EUR/USD and DXY are negatively correlated. Both being bullish simultaneously is a divergence that should be recorded as intermarket conflict." },
        { id: "q5_9", question: "A learner writes in their journal: 'The scenario did not work. Bad session.' What is the primary problem with this entry?", options: ["It needs more detail about the price levels.", "It records only the outcome without process analysis — no evidence stack audit, no confirmation check, no invalidation review.", "It should blame a specific external factor for the outcome.", "It is an acceptable short-form entry for minor sessions."], correctIndex: 1, explanation: "Journal entries must audit the decision-making process, not just record outcomes. Process analysis is what produces learning." },
        { id: "q5_10", question: "In the Scenario Planning Map workflow, what must be completed before defining the Primary Scenario?", options: ["The HTF narrative check, the evidence stack, and the structural conflict check.", "Only the HTF narrative check.", "The intermarket context check.", "The post-session journal review."], correctIndex: 0, explanation: "Steps 1-3 (HTF narrative, evidence stack, conflict check) must be completed before Step 4 (Primary Scenario). Building a scenario without these steps produces structurally incomplete plans." },
        { id: "q5_11", question: "Your bullish scenario has a time-based invalidation: New York AM session (8:30-11:00 EST). By 11:15, price has not reached your area of interest. What is the correct action?", options: ["Extend the time window by one more hour to give it more room.", "Record 'Time-expired. No interaction. Scenario archived.' This is a clean, objective outcome.", "Switch to the alternative scenario because time ran out.", "The scenario is still valid — time-based invalidation is optional."], correctIndex: 1, explanation: "Time-based invalidation is a pre-defined condition. When the window expires without interaction, the scenario is archived. Extending the window is narrative protection." },
        { id: "q5_12", question: "Price reaches your identified 4H Order Block. On the 1-minute chart, a wick forms at the zone but immediately recovers — no MSS, no FVG, no displacement. Is this confirmation?", options: ["Yes — price touched the zone, which is enough.", "No — a wick reaction without a structural shift (MSS/FVG/displacement) is not confirmation. It may be a sweep.", "Yes — the wick shows that the zone is respected.", "It depends on the size of the wick."], correctIndex: 1, explanation: "Confirmation requires a structural event at the area — not just proximity or a wick. A wick without structural shift is ambiguous and may indicate a sweep." },
        { id: "q5_13", question: "You are reviewing your journal entries from three consecutive sessions. In all three, you defined an alternative scenario but never switched to it, even though the alternative conditions were met twice. What pattern does this reveal?", options: ["Strong conviction in primary readings — a positive trait.", "Narrative lock — the alternative was defined but not activated when conditions triggered it. This is a process failure.", "Insufficient alternative scenarios — they need to be rewritten.", "Normal behavior — alternatives rarely need to be activated."], correctIndex: 1, explanation: "Defining alternatives without activating them when conditions are met is narrative lock disguised as preparation. This is a critical process pattern to address." },
        { id: "q5_14", question: "A learner builds an evidence stack with five supporting clues and zero conflicting clues. What should they suspect?", options: ["Their reading is very strong because all clues align.", "Possible confirmation bias — a stack with zero conflicting clues may indicate that conflicting evidence was unconsciously filtered out.", "The chart is unusually clear and no further review is needed.", "They should add a sixth clue to strengthen the stack."], correctIndex: 1, explanation: "An evidence stack with zero conflicting observations should be treated with suspicion. Most chart environments contain at least some conflicting data." },
        { id: "q5_15", question: "During real-time adaptation, you updated your scenario four times in ten minutes, each time triggered by a single candle. What is the likely problem?", options: ["The chart is extremely volatile and requires rapid updates.", "Over-adaptation — updating the scenario based on individual candles rather than structural checkpoints. Most of the updates were likely noise reactions.", "Under-adaptation — four updates is too few for a ten-minute window.", "The scenario was poorly designed from the start."], correctIndex: 1, explanation: "Structural checkpoints (MSS, FVG, anchor violation) are the only valid review triggers. If every candle triggers a review, the learner is reacting to noise." },
        { id: "q5_16", question: "In the capstone mission, you are asked to identify a Review Area. What does this zone represent structurally?", options: ["The zone where price will most likely reverse.", "The structural zone where the next meaningful delivery interaction will provide evidence for or against the current reading.", "The zone with the highest volume concentration.", "The zone closest to the current price."], correctIndex: 1, explanation: "The Review Area is where the chart will provide the next piece of structural evidence. It is not a reversal prediction — it is an observation point." },
        { id: "q5_17", question: "Your scenario is bearish from a 1H FVG. Price creates a new bearish FVG below the first one, but your anchoring swing low has not been swept. A learner asks: 'Should I move my invalidation to the new FVG?' What is the correct answer?", options: ["Yes — the new FVG is more recent and therefore more relevant.", "No — invalidation is defined by the structural anchor (swing low), not by subsequent FVGs. Moving invalidation to track new FVGs is narrative protection.", "Yes — as long as the new FVG is in the same direction as the scenario.", "It depends on the displacement quality of the new FVG."], correctIndex: 1, explanation: "Invalidation is anchored to the structural level defined in the plan. Moving it to track subsequent price action is redefining the plan to protect the narrative." },
        { id: "q5_18", question: "A learner checks DXY after completing their EUR/USD evidence stack. DXY is unclear — consolidating with no recent MSS. How should this affect the EUR/USD scenario?", options: ["Cancel the EUR/USD scenario because DXY is unclear.", "Record 'Intermarket context: DXY unclear — no additional weight or conflict.' The primary EUR/USD reading stands on its own evidence.", "Force a DXY reading to ensure intermarket alignment.", "Use another correlated pair instead of DXY to find alignment."], correctIndex: 1, explanation: "When DXY is unclear, it provides neither supporting nor conflicting context. The primary chart's evidence stack is unchanged." },
        { id: "q5_19", question: "You are building a 1-minute scenario based on a Weekly chart narrative, skipping the Daily, 4H, and 1H charts entirely. What is the alignment problem?", options: ["There is no problem — the Weekly chart is the most authoritative.", "Timeframe mismatch — alignment requires stepping through intermediate timeframes, not jumping from the highest to the lowest.", "The 1-minute chart is too noisy for any scenario planning.", "The Weekly chart should only be used for scenarios lasting more than one week."], correctIndex: 1, explanation: "Alignment requires methodical review across intermediate timeframes. Jumping from Weekly to 1-minute skips the 4H, 1H, and 15m, making the scenario structurally incomplete." },
        { id: "q5_20", question: "After completing the 10-step Scenario Planning Map, you attempt the capstone mission but place the Review Area incorrectly. Your journal review reveals that you skipped Step 3 (Structural Conflict Check). What is the lesson?", options: ["The mission grading was too strict.", "Skipping the conflict check allowed a scenario to be built on conflicted structure, which led to an inaccurate zone selection. The full workflow must be completed.", "Step 3 is optional for experienced learners.", "The Review Area should have been placed at the closest FVG instead."], correctIndex: 1, explanation: "The Scenario Planning Map is a sequential workflow. Skipping steps compromises the structural logic of the entire plan, including zone selection." }
      ]
    }
  ];

  for (const test of knowledgeTests) {
    await prisma.knowledgeTest.upsert({
      where: { level: test.level },
      update: test as any,
      create: test as any,
    });
    console.log(`✅ Level ${test.level} Knowledge Test Ingested.`);
  }

  // ============================================
  // TRAINING SCENARIOS (LEVEL 3 + GATE)
  // ============================================
  const scenarios = [
    {
      slug: "level-3-final-gate",
      title: "Level 3 Final Gate",
      description: "Capstone mission for Level 3.",
      scenarioType: "structure_annotation", status: "active", marketTrack: "multi",
      level: 3, instrument: "BTCUSD", timeframe: "1H", candleSourceType: "curated",
      prompt: "Identify the primary zone.",
      passThreshold: 80, xpAward: 500,
      expectedActions: { interactionMode: "chart_markup_v1" },
      gradingRubric: { rules: ["accurate_zone_placement"] },
      metadata: {
        interactionMode: "chart_markup_v1",
        validationZones: [{ label: "Zone Check", timeStart: "2024-01-10", timeEnd: "2024-01-12", priceMin: 108, priceMax: 112 }],
        feedbackOnPass: "Level 3 complete.",
        feedbackOnFail: "Review required."
      }
    },
    {
      slug: "m2-level-2-map-review-v1",
      title: "Level 2 Boundary Review",
      description: "Boundary identification mission.",
      scenarioType: "structure_annotation", status: "active", marketTrack: "multi",
      level: 2, instrument: "EURUSD", timeframe: "1H", candleSourceType: "curated",
      prompt: "Identify the external boundary.",
      passThreshold: 80, xpAward: 250,
      expectedActions: { interactionMode: "chart_markup_v1" },
      gradingRubric: { rules: ["accurate_zone_placement"] },
      metadata: {
        interactionMode: "chart_markup_v1",
        validationZones: [{ label: "Boundary", timeStart: "2024-01-05", timeEnd: "2024-01-07", priceMin: 98, priceMax: 102 }],
        feedbackOnPass: "Boundary identified.",
        feedbackOnFail: "Review required."
      }
    },
    {
      slug: "level-5-scenario-planning-gate",
      title: "Level 5 Scenario Planning Review",
      description: "Capstone synthesis mission for Level 5 — Evidence-Based Scenario Planning. Validates the learner's ability to identify the correct Review Area based on structural context, evidence stacking, and timeframe alignment.",
      scenarioType: "structure_annotation", status: "active", marketTrack: "multi",
      level: 5, instrument: "EURUSD", timeframe: "1H", candleSourceType: "curated",
      prompt: "Using the Scenario Planning Map workflow, identify the Review Area — the structural zone where the next meaningful delivery interaction will provide evidence for or against the current reading. This mission validates a single zone, not a complete scenario map. However, your zone selection should reflect the full evidence stack: HTF narrative, LTF alignment, and structural context. Before placing your zone, consider: What is the HTF narrative? What structural clue makes this zone the next area to observe? What would confirmation and invalidation look like at this zone?",
      passThreshold: 85, xpAward: 750,
      expectedActions: { interactionMode: "chart_markup_v1" },
      gradingRubric: { rules: ["accurate_zone_placement"] },
      metadata: {
        interactionMode: "chart_markup_v1",
        validationZones: [{ label: "Review Area", timeStart: "2024-01-20", timeEnd: "2024-01-22", priceMin: 1.0950, priceMax: 1.0980 }],
        feedbackOnPass: "Level 5 complete. Your Review Area placement demonstrates structural understanding of the evidence stack and timeframe alignment. Complete your post-mission journal entry: document the HTF narrative, the evidence that led to your zone selection, and what confirmation or invalidation would look like at this area.",
        feedbackOnFail: "Review Area placement does not align with the structural context. Before retrying, revisit the Scenario Planning Map workflow (Module 5.10): verify your HTF narrative reading, confirm that your evidence stack includes both supporting and conflicting clues, and ensure your zone represents the area where the next meaningful structural interaction will occur — not where you expect price to reverse.",
        feedbackOnRetry: "Take time between attempts. Before retrying, complete the Pre-Mission Journal Note from Module 5.10: (1) What is the HTF narrative? (2) What evidence supports a scenario? (3) What evidence conflicts? (4) Where is the next meaningful structural interaction? Use this documentation to guide your zone selection."
      }
    }
  ];

  for (const sc of scenarios) {
    const scenario = await prisma.trainingScenario.upsert({
      where: { slug: sc.slug },
      update: sc as any,
      create: sc as any,
    });

    let targetModuleNumber = "4.8";
    if (sc.level === 5) targetModuleNumber = "5.10";
    if (sc.level === 3) targetModuleNumber = "3.10";
    if (sc.level === 2) targetModuleNumber = "2.12";

    const targetModule = await prisma.courseModule.findFirst({ 
      where: { moduleNumber: targetModuleNumber, level: sc.level } 
    });

    if (targetModule) {
      await prisma.moduleScenarioLink.upsert({
        where: { moduleId_scenarioId: { moduleId: targetModule.id, scenarioId: scenario.id } },
        update: { requiredForProgress: true, sortOrder: 1 },
        create: { 
          moduleId: targetModule.id,
          scenarioId: scenario.id,
          requiredForProgress: true,
          sortOrder: 1
        },
      });
    }
  }

  console.log(`✅ SUCCESS: All Tests and Missions Ingested.`);
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
