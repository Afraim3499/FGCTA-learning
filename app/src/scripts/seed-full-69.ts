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
      objective: "Learn to collect objective structural clues into a cohesive case for scenario observation.",
      content: "# The Evidence Stack\n\nIn Level 5, we transition from identifying isolated structures to building a complete case for chart observation. In Levels 2 through 4, you learned to identify individual components: Market Structure Shifts, Fair Value Gaps, Order Blocks, Premium and Discount zones, and session-based delivery windows. Each of those was a single clue. Level 5 teaches you to combine multiple clues into a unified reading called an Evidence Stack.\n\nAn Evidence Stack is not a checklist that tells you what to do. It is an objective collection of structural observations that, when aligned, create a scenario worth observing in simulation. The stack itself does not produce an instruction. It produces a reading.\n\n### Why it Matters\nA single structural clue can appear anywhere on any chart at any time. An MSS on the 1-minute chart inside a 4-hour consolidation is not the same quality of clue as an MSS on the 4-hour chart that violates a Weekly anchor. The Evidence Stack framework forces you to weigh each clue by its timeframe origin, its structural context, and whether it aligns with or contradicts other clues already in the stack.\n\nWithout this framework, learners tend to act on the first clue they see. This produces inconsistent readings and poor journal review quality over time.\n\n### What to Observe\n- Alignment of HTF structural anchors (Is the Daily or Weekly narrative clear?).\n- Presence of delivery gaps (FVG/Voids) in the direction of the HTF reading.\n- Interaction with major boundaries (BSL/SSL) that would change the narrative if violated.\n- Session context (Is the current session window historically associated with delivery?).\n- Displacement quality (Was the move that created the clue strong and sustained, or weak and immediately retraced?).\n\n### What Does Not Count as Evidence\n- Intuition, gut feelings, or emotional reactions to recent candles.\n- Isolated candles without structural context (a single large candle is not an evidence stack).\n- News headlines without observable price displacement on the chart.\n- Indicators or oscillators that are not part of the structural curriculum.\n- Other learners' opinions or readings shared in group discussions.\n\n### Common Mistake\nThe most common mistake is confirmation bias within the stack itself. A learner identifies one bullish clue and then unconsciously filters all subsequent observations to support that initial reading. A genuine evidence stack includes both supporting and conflicting clues. If the Daily chart shows a bearish MSS but the 4-hour chart has a bullish FVG, both observations belong in the stack. The conflict is the information.\n\n### Example Scenario\nImagine the EUR/USD Daily chart has completed a bearish MSS, violating the previous swing low with displacement. On the 1-hour chart, price is currently retracing upward into a Fair Value Gap left behind during the Daily displacement. Your evidence stack would include: (1) Daily bearish MSS — strong clue, (2) 1H FVG acting as a potential area to observe — supporting clue, (3) price is currently in a Premium zone relative to the recent dealing range — contextual alignment. All three clues align. This is a stacked reading.\n\nNow consider: if the 4-hour chart showed a bullish Order Block that has not yet been violated, that is a conflicting clue. It belongs in the stack too. The stack is not about building a case for one direction. It is about collecting all observable evidence.\n\n### Wrong Reading vs Better Reading\n- **Wrong**: 'I see one FVG on the 15-minute chart, so my scenario is bearish.' (Single clue, no HTF context, no conflict check.)\n- **Better**: 'The Daily MSS is bearish. The 1H has a FVG aligned with that narrative. However, a 4H OB below has not been violated, which is conflicting. My primary reading is bearish, but I note the conflict.' (Multiple timeframes, aligned and conflicting clues, no instruction generated.)\n\n### Practice Instruction\nOpen a simulation chart. Before forming any reading, write down every structural clue you can identify across at least two timeframes. Label each clue as 'supporting' or 'conflicting' relative to the HTF narrative. Do not form a scenario until you have at least three observations recorded.\n\n### Journal Review Prompt\nAfter your simulation session, review your evidence stack and ask: 'Did I record conflicting evidence, or did I only collect clues that supported my initial impression?' If you only recorded supporting evidence, flag this session for bias review.\n\n### Summary\nThe Evidence Stack is the foundation of Level 5. Every subsequent module builds on this framework. A scenario plan without a stack is just an opinion. A stack without conflict acknowledgment is just confirmation bias in a structured format.",
      interactiveTaskType: "choice_block",
      interactiveTaskData: {
        question: "A learner identifies a bearish MSS on the Daily chart and a bullish Order Block on the 4-hour chart. How should these be handled in the Evidence Stack?",
        options: [
          "Ignore the Order Block because the Daily MSS is more important.",
          "Record both observations in the stack — the MSS as a supporting clue and the OB as a conflicting clue.",
          "Wait until one of them disappears before building the stack.",
          "Choose whichever clue appeared most recently."
        ],
        correctIndex: 1,
        feedback: "Correct. A complete evidence stack includes both supporting and conflicting structural observations across timeframes."
      },
      skillLevel: "advanced", orderIndex: 1
    },
    {
      level: 5, moduleNumber: "5.2", title: "Primary vs Alternative Scenario",
      objective: "Build two-way branching logic to maintain objectivity and prevent narrative lock.",
      content: "# Thinking in Branches\n\nEvery scenario plan must contain two paths: a Primary Scenario and an Alternative Scenario. This is not optional. A plan with only one expected outcome is not a scenario plan — it is a prediction. And predictions, by definition, assume certainty where none exists.\n\n### Concept Explanation\n- **Primary Scenario**: The current strongest reading based on the evidence stack. This is the path that has the most aligned structural clues across timeframes.\n- **Alternative Scenario**: The path that becomes valid if a specific structural anchor is violated, making the primary reading no longer valid.\n\nBoth scenarios must be defined before the session begins. Writing them down is not a suggestion — it is a requirement. If you cannot articulate both paths clearly, the reading is not ready.\n\n### Why it Matters\nWithout an alternative scenario, learners fall into 'narrative lock' — the psychological state where they refuse to accept that their reading is incorrect, even as the chart provides clear evidence of structural change. Narrative lock leads to ignoring invalidation, extending timelines, and rationalizing contradictory evidence. It is one of the most damaging patterns in simulation review.\n\nBranching logic forces the mind to pre-commit to objectivity. When you have already written 'If price violates X with displacement, my alternative scenario is Y,' the emotional resistance to accepting the alternative is significantly reduced.\n\n### What to Observe\n- The specific structural anchor that separates the primary from the alternative. This must be a concrete level, not a vague area.\n- Whether the alternative scenario has its own evidence (even if weaker than the primary). Alternatives are not random — they are structurally grounded.\n- The displacement quality required to trigger the switch. A wick through a level is not the same as a full body close with a delivery gap.\n\n### What Does Not Count\n- 'I think it might also go the other way' is not an alternative scenario. It must be specific and anchored.\n- Emotional hedging ('I'll just wait and see') is not branching logic.\n- Copying another learner's alternative scenario without understanding the structural basis.\n\n### Common Mistake\nDefining the alternative scenario but never actually switching to it when the evidence triggers the change. This is narrative lock disguised as preparation. The alternative exists to be activated when the conditions are met — not to sit unused in the journal.\n\n### Full Example\n**Chart**: EUR/USD 1-hour. Daily chart has a bearish MSS. Price is retracing into a 1H Fair Value Gap at 1.0965.\n\n**Primary Scenario**: Price reaches the 1H FVG at 1.0965, fails to close above it with displacement, and continues the bearish Daily narrative. The area to observe is the FVG itself and the reaction candles. If price creates a new bearish delivery gap from this zone, the primary reading is supported.\n\n**Alternative Scenario**: Price reaches the 1H FVG at 1.0965, closes above it with a full-body displacement candle, and creates a new bullish FVG above. This would violate the bearish retracement thesis and indicate that the 1H structure is shifting. If this happens, the Daily bearish narrative must be re-evaluated — the MSS may have been a false break of the previous swing.\n\n**Invalidation for Primary**: A 1H candle body closes above 1.0975 with displacement.\n**Invalidation for Alternative**: Price returns below 1.0950 after the initial displacement above, indicating the bullish move was a sweep.\n\n**Journal Entry**: Write both scenarios and their invalidation levels before the session. After the session, record which scenario activated and whether you followed the plan.\n\n### Wrong Reading vs Better Reading\n- **Wrong**: 'My scenario is bearish because the Daily MSS is clear.' (No alternative, no invalidation, no branching.)\n- **Better**: 'Primary: bearish continuation from the 1H FVG. Alternative: bullish shift if price closes above 1.0975 with displacement. I will observe both and record which activates.' (Branched, specific, anchored.)\n\n### Practice Instruction\nIn your next simulation session, write both scenarios in full before you begin observing. Include the exact structural level that separates them. After the session, check: did the primary or alternative activate? Did you follow the correct branch? If you stayed on the primary after the alternative conditions were met, flag this as narrative lock.\n\n### Journal Review Prompt\n'Did I define both scenarios with specific structural anchors? When the alternative conditions were met, did I switch, or did I hold the primary? What was my emotional state during the switch point?'\n\n### Summary\nBranching logic is the structural defense against narrative lock. Every session must begin with two written scenarios. The quality of your planning is measured not by whether the primary scenario played out, but by whether you followed the correct branch when conditions changed.",
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
      content: "# When a Scenario Ends\n\nA scenario plan is only as useful as its invalidation conditions. If you have not defined the specific structural event that makes your current reading no longer valid, you do not have a plan — you have a hope. Invalidation is not about being 'wrong.' It is about recognizing that the structural conditions that supported your reading have objectively changed.\n\n### Concept Explanation\nInvalidation conditions are pre-defined structural checkpoints written into the scenario plan before the observation session begins. They answer the question: 'What specific event on the chart would cause me to update or abandon this reading?'\n\nThere are two categories of invalidation:\n\n**Structure-Based Invalidation**: A specific structural anchor is violated with displacement. For example, if your bullish scenario is built on the premise that a certain swing low holds, then a candle body closing below that swing low with a delivery gap is a structure-based invalidation.\n\n**Time-Based Invalidation**: The scenario has a time window. If the expected structural interaction does not occur within the defined session window, the scenario is marked 'Expired — No Interaction' in the journal. This is not a failure. It is an objective observation that the conditions did not materialize.\n\n### Why it Matters\nWithout pre-defined invalidation, learners enter a dangerous loop: they keep waiting for their scenario to play out, reinterpreting every candle as 'almost there.' This leads to extended observation sessions with no structural basis, which degrades review quality and reinforces subjective pattern-matching.\n\nPre-defined invalidation creates a clean decision point. When the condition is met, the scenario ends. There is no ambiguity, no negotiation, and no emotional override.\n\n### What to Observe\n- The structural anchor that supports the current scenario. If this anchor is a swing low, the invalidation is the violation of that swing low with displacement.\n- The session window for the scenario. If the scenario is built around London Open delivery, and no interaction occurs by the end of the London session, the scenario is time-expired.\n- The quality of the violation. A wick through a level is not the same as a body close through a level with a new delivery gap. Only displacement counts.\n\n### What Does Not Count\n- Moving the invalidation point after the session starts. This is called 'giving it more room' and it is the most common form of plan abandonment disguised as flexibility.\n- Emotional invalidation ('I feel like this is not working'). Feelings are not structural events.\n- Partial violations without displacement. A wick through a level that immediately recovers is not invalidation — it may be a sweep.\n\n### Common Mistake\nThe most dangerous mistake is redefining invalidation in real time. A learner sets their invalidation at a swing low. Price approaches that level. Instead of observing the interaction objectively, they move the invalidation lower, reasoning that 'the real support is a bit further down.' This is not adaptation — it is narrative protection. True adaptation happens when you switch to your pre-defined alternative scenario, not when you extend the boundaries of your current one.\n\n### Example Scenario\n**Structure-Based**: Your bullish scenario is anchored by the swing low at 1.0830. Your invalidation condition is: 'If a 1H candle body closes below 1.0825 with displacement and creates a bearish FVG, the bullish reading is no longer valid.' During the session, price wicks to 1.0828 but closes back above 1.0835 — this is NOT invalidation (no body close, no displacement). Later, a candle closes at 1.0820 with a clear bearish delivery gap — this IS invalidation. The scenario is over.\n\n**Time-Based**: Your scenario is built around a New York AM delivery window (8:30–11:00 EST). By 11:15, price has not reached your area to observe. You record: 'Time-expired. No interaction. Scenario archived.' This is a clean, objective outcome.\n\n### Wrong Reading vs Better Reading\n- **Wrong**: 'Price went past my level but I think it will come back, so I am keeping the scenario.' (Invalidation ignored, narrative protection active.)\n- **Better**: 'Price closed below my structural anchor with displacement. The bullish scenario is no longer valid. Switching to the pre-defined alternative and recording the invalidation in the journal.' (Clean, objective, pre-defined.)\n\n### Practice Instruction\nFor your next simulation session, write the invalidation condition in a single sentence before you begin. It must include: (1) the specific structural level, (2) the candle behavior required (body close with displacement), and (3) what you will do when it triggers (switch to alternative or archive the scenario). After the session, review whether the condition was met and whether you followed the plan.\n\n### Journal Review Prompt\n'Did I define my invalidation before the session? Was it specific (level + candle behavior)? If the condition was met, did I follow the plan or did I adjust the invalidation to keep the scenario alive?'\n\n### Summary\nInvalidation is not failure. It is the most objective part of the scenario planning process. A scenario that is cleanly invalidated and properly archived produces better learning data than a scenario that was vaguely right for unclear reasons. Define the end before you begin.",
      interactiveTaskType: "type_a_point_click",
      interactiveTaskData: {
        prompt: "Identify the structural anchor that would serve as the logical invalidation point for a bullish scenario built from the recent Fair Value Gap. Look for the swing low that anchored the expansion.",
        validationZones: [{ label: "Invalidation Point", timeStart: "2024-01-15", timeEnd: "2024-01-16", priceMin: 1.0820, priceMax: 1.0840 }],
        rationale: "The swing low that anchored the bullish expansion is the structural foundation of the scenario. If this level is violated with displacement, the bullish reading is no longer valid."
      },
      skillLevel: "advanced", orderIndex: 3
    },
    {
      level: 5, moduleNumber: "5.4", title: "Context Alignment Across Timeframes",
      objective: "Synthesize HTF narrative with LTF structural evidence to build aligned scenario plans.",
      content: "# Timeframe Alignment\n\nEvery scenario plan exists within a hierarchy. The Higher Timeframe (HTF) provides the narrative. The Lower Timeframe (LTF) provides the evidence. A scenario built on LTF evidence alone, without HTF context, is structurally incomplete. A scenario built on HTF narrative alone, without LTF confirmation evidence, is premature.\n\nThis module teaches you to read the HTF narrative first, then look for LTF evidence that either aligns with it or conflicts with it. Alignment does not mean certainty. It means the structural clues across timeframes are pointing in the same direction, which produces higher-quality readings for simulation observation.\n\n### Concept Explanation\n- **HTF Narrative**: The structural story told by the Daily or Weekly chart. Is the current dealing range expanding bearish? Has a major MSS occurred? Is price in Premium or Discount?\n- **LTF Evidence**: The structural clues on the 1H or 15m chart that either support or contradict the HTF narrative. A 15m bullish FVG inside a Daily bearish expansion is a counter-narrative clue.\n- **Aligned Reading**: When both HTF and LTF clues point in the same direction. For example, a Daily bearish MSS combined with a 1H bearish FVG forming at a Premium zone.\n- **Counter-Narrative Reading**: When LTF clues point against the HTF narrative. These readings are less aligned and require stronger structural evidence before they are considered for observation.\n\n### Why it Matters\nLTF charts contain enormous amounts of structural noise. A 1-minute MSS can occur dozens of times within a single 4-hour candle. Without HTF context, every one of those shifts looks meaningful. With HTF context, most of them are internal retracements within a larger committed move.\n\nAlignment does not guarantee outcomes. It provides a filter. An aligned reading produces cleaner journal entries because the structural logic is coherent across timeframes. A counter-narrative reading requires the learner to document why they believe the LTF evidence is strong enough to override the HTF commitment — and this documentation itself improves review quality.\n\n### What to Observe\n- Whether the HTF narrative is clear. If the Daily chart is in the middle of a consolidation with no recent MSS, there may not be a clear HTF narrative to align with. This is an 'unclear area' (covered in Module 5.5).\n- Whether the LTF clue was created by displacement or by slow, grinding movement. Displacement clues carry more weight.\n- The location of the LTF clue relative to HTF Premium/Discount. A bearish 1H FVG forming in a Daily Premium zone is aligned. A bearish 1H FVG forming in a Daily Discount zone is counter-narrative.\n\n### What Does Not Count\n- Assuming that any LTF move in the direction of the HTF narrative is automatically valid. The LTF move must have its own structural basis (MSS, FVG, OB interaction).\n- Using only one timeframe. A scenario plan without at least two timeframes reviewed is structurally incomplete.\n- Ignoring counter-narrative clues because they are inconvenient. Counter-narrative clues belong in the evidence stack as conflicting observations.\n\n### Common Mistake\nThe most common alignment error is timeframe mismatch: building a 1-minute scenario plan based on a Weekly chart narrative without any intermediate confirmation. The Weekly chart says bearish, so the learner assumes every 1-minute dip is a continuation. This skips the 4H, 1H, and 15m entirely. Alignment requires stepping through timeframes methodically, not jumping from the highest to the lowest.\n\n### Example Scenario\n**HTF (Daily)**: Bearish MSS completed. Price is retracing into a Daily FVG in the Premium zone.\n**LTF (1H)**: Price has reached the Daily FVG. On the 1H, a bearish MSS has just occurred with displacement, creating a new 1H FVG.\n**Reading**: The 1H bearish MSS aligns with the Daily bearish narrative. The 1H FVG is the area to observe for continuation. This is an aligned, two-timeframe reading.\n\n**Counter-Example**: Same Daily chart (bearish MSS), but on the 1H, price has created a bullish MSS with displacement from a Discount zone. The 1H is now structurally bullish, conflicting with the Daily bearish narrative. This is a counter-narrative reading. It belongs in the evidence stack as a conflict, and the learner should document: 'LTF is currently opposing HTF. Waiting for further evidence before forming a scenario.'\n\n### Wrong Reading vs Better Reading\n- **Wrong**: 'The Daily is bearish, so I will mark every 15m dip as a continuation.' (No LTF structural basis, no alignment verification.)\n- **Better**: 'The Daily MSS is bearish. I am waiting for a 1H structural shift that aligns with this narrative before building a scenario. Currently, the 1H shows no MSS, so I have no aligned LTF evidence yet.' (Methodical, patient, structurally grounded.)\n\n### Practice Instruction\nOpen a simulation chart on the Daily timeframe. Identify the current narrative (bullish MSS, bearish MSS, or unclear). Then switch to the 1H chart and document whether the 1H structure aligns with, opposes, or is neutral to the Daily reading. Record this in your journal before forming any scenario.\n\n### Journal Review Prompt\n'Did I verify HTF alignment before building my LTF scenario? If I took a counter-narrative reading, did I document the stronger evidence I required? Did I skip any intermediate timeframes?'\n\n### Summary\nAlignment is a filter, not an instruction. An aligned reading across timeframes produces cleaner scenarios, cleaner invalidation points, and better journal review data. Counter-narrative readings are not forbidden, but they require stronger evidence and explicit documentation.",
      interactiveTaskType: "type_b_scenario",
      interactiveTaskData: {
        contextPrompt: "The Daily chart has completed a bearish MSS. On the 1-hour chart, price is retracing upward but has not created a bullish MSS — the retracement is a slow grind with no displacement. What is the most aligned reading?",
        options: [
          { id: "opt1", text: "The 1H retracement has no structural shift (no MSS, no displacement). The Daily bearish narrative remains the primary context. I will observe the retracement for signs of failure at a bearish anchor.", grade: "best", feedback: "Correct. The absence of an LTF structural shift means the HTF narrative is still dominant. Observing for failure evidence is the aligned approach.", rationale: "Slow retracements without displacement are internal noise until a structural shift occurs." },
          { id: "opt2", text: "The 1H is moving upward, so the bearish Daily narrative may be changing. I will build a bullish scenario from the 1H move.", grade: "acceptable", feedback: "This is a counter-narrative reading built on price movement alone, not structural evidence. It requires much stronger documentation.", rationale: "Directional movement without structural shift (MSS/FVG) is not evidence of narrative change." }
        ]
      },
      skillLevel: "advanced", orderIndex: 4
    },
    {
      level: 5, moduleNumber: "5.5", title: "Structural Conflict and Unclear Areas",
      objective: "Identify when the evidence stack is too conflicted to form a valid scenario plan.",
      content: "# The No-Scenario Reading\n\nNot every chart session produces a scenario. This is not a failure — it is an objective observation. If the evidence stack contains deep structural conflict across timeframes, and no clear boundary interaction is resolving that conflict, the correct reading is: 'No Scenario — Unclear Structure.'\n\nThis module teaches you to identify unclear areas and to treat them as valid outcomes of the scenario planning process, not as missed opportunities.\n\n### Concept Explanation\nAn unclear area exists when the structural evidence is genuinely ambiguous. This is different from a learner being confused. Confusion is a knowledge gap. An unclear area is a structural condition where the chart itself has not committed to a direction.\n\nCommon structural conditions that produce unclear areas:\n- **Opposing MSS on adjacent timeframes**: The Daily has a bullish MSS, but the 4H has just completed a bearish MSS. Neither has been invalidated yet.\n- **Consolidation without boundary interaction**: Price is ranging within a narrow zone, and neither the range high nor the range low has been swept or violated.\n- **Mixed displacement quality**: The most recent move had strong displacement in one direction, but it occurred entirely within a larger opposing structure.\n- **Session transition**: A structural reading from the London session is being tested during a low-participation Asian session. The structural quality during low-participation windows is inherently less reliable.\n\n### Why it Matters\nForcing a scenario on unclear structure usually creates poor review quality. The learner ends up rationalizing the reading after the fact, writing journal entries like 'I should have seen it' or 'The clue was there but I missed it.' These entries are not useful because the structure was genuinely ambiguous at the time of observation.\n\nRecording 'No Scenario — Unclear Structure' is a legitimate and valuable journal entry. Over time, reviewing these entries reveals patterns: certain sessions, certain instruments, and certain structural conditions consistently produce unclear readings. This awareness improves future session selection.\n\n### What to Observe\n- Whether opposing MSS events exist on adjacent timeframes without resolution.\n- Whether price is inside a tight consolidation with no boundary interaction.\n- Whether recent displacement has been immediately countered by equal displacement in the opposite direction.\n- Whether the current session window has historically low participation for the instrument.\n\n### What Does Not Count\n- Personal uncertainty. Feeling unsure does not make the chart unclear. The chart may be structurally clear, and the learner may simply need to review Level 4 concepts.\n- Complexity. A chart with many structural elements is not necessarily unclear. It may simply require more careful stacking.\n- Single conflicting clues. One bearish candle inside a bullish expansion is not a structural conflict. It is internal noise.\n\n### Common Mistake\nThe most common mistake is treating unclear areas as challenges to overcome rather than information to record. A learner sees the conflict, recognizes the ambiguity, and then forces a scenario anyway, reasoning that 'I need to practice making decisions.' In simulation, forcing a scenario on unclear structure teaches nothing except how to rationalize poor reads.\n\n### Example Scenario\n**Chart**: GBP/USD 1-hour. The Daily chart completed a bullish MSS two days ago. Since then, the 4H has created a bearish MSS that has not been invalidated. The 1H is ranging between 1.2650 and 1.2690 with no FVGs formed and no boundary swept.\n\n**Reading**: The Daily says bullish. The 4H says bearish. Neither has been invalidated. The 1H is consolidating without committing. This is an unclear area. The correct journal entry is: 'No Scenario — Opposing MSS on Daily (bullish) and 4H (bearish). 1H consolidating without boundary interaction. Will revisit when one side is invalidated.'\n\n### Wrong Reading vs Better Reading\n- **Wrong**: 'The chart is messy but I think the Daily bullish reading will eventually win, so my scenario is bullish.' (Forcing a read on genuine conflict.)\n- **Better**: 'Daily and 4H are in structural conflict. No scenario at this time. I will revisit when one MSS is invalidated by the other.' (Objective, documented, patient.)\n\n### Practice Instruction\nIn your next three simulation sessions, actively look for at least one unclear area. When you find one, resist the urge to form a scenario. Instead, write the full conflict description in your journal: what the HTF says, what the LTF says, and why neither has been resolved. Review these entries weekly to identify patterns in when and where unclear areas tend to form.\n\n### Journal Review Prompt\n'Did I record any No-Scenario readings this week? If not, did every session genuinely have a clear reading, or did I force scenarios on conflicted structure? When I did record unclear areas, what resolved them — and could I have predicted the resolution?'\n\n### Summary\nThe ability to identify and record unclear areas is a mark of maturity in scenario planning. It separates structured observation from impulsive interpretation. Not every session produces a scenario, and that is valuable data.",
      interactiveTaskType: "choice_block",
      interactiveTaskData: {
        question: "The Daily chart has a bullish MSS. The 4-hour chart has just completed a bearish MSS that has not been invalidated. The 1-hour chart is consolidating with no boundary interaction. What is the correct reading?",
        options: [
          "Build a bullish scenario because the Daily timeframe has more authority.",
          "Build a bearish scenario because the 4-hour MSS is more recent.",
          "Record 'No Scenario — Structural Conflict' and wait for one MSS to be invalidated before building a plan.",
          "Build both a bullish and bearish scenario simultaneously and observe which one plays out."
        ],
        correctIndex: 2,
        feedback: "Correct. When adjacent timeframes have opposing MSS events with no resolution, the chart is structurally unclear. Recording the conflict and waiting is the objective approach."
      },
      skillLevel: "advanced", orderIndex: 5
    },
    {
      level: 5, moduleNumber: "5.6", title: "Confirmation vs Assumption",
      objective: "Distinguish between acting on structural evidence and acting before the chart provides observable proof.",
      content: "# Evidence Before Expectation\n\nOne of the most critical distinctions in scenario planning is the difference between Confirmation and Assumption. Both involve identifying an area of interest on the chart. The difference is timing: Assumption acts before price provides observable evidence at the area. Confirmation waits until the chart delivers new structural proof.\n\nThis module teaches you to recognize when you are building a scenario based on what you expect to happen versus what has actually been delivered.\n\n### Concept Explanation\n\n| | Assumption | Confirmation |\n|---|---|---|\n| **When** | Before price reaches the area or before any structural reaction | After price has interacted with the area and produced new structural evidence |\n| **Based On** | Expectation that the area 'should' work based on historical or theoretical significance | Observable structural change (MSS, new FVG, displacement) that occurred at the area |\n| **Scenario Quality** | Speculative — no delivery proof exists | Evidence-based — new structural data supports the reading |\n| **Journal Value** | Low — outcomes cannot be attributed to structural logic | High — the reading was anchored to observable events |\n\n### Why it Matters\nAssumption-based scenarios are the primary source of narrative lock. When you commit to a reading before evidence exists, you become emotionally invested in the area 'working.' Every candle that moves toward your area feels like validation, even though no structural event has occurred. When the area fails — when price displaces through it without reaction — the emotional response is significantly stronger than if you had waited for confirmation.\n\nConfirmation-based scenarios carry less emotional weight because the commitment happens after the evidence. You are not hoping the area works — you are observing that it has already produced a structural reaction, and you are planning around that reaction.\n\n### What to Observe\n- Has price actually reached the area of interest, or are you planning around an area that is still 20+ pips away?\n- Has the area produced a reaction candle, an MSS, or a new FVG? If yes, you have confirmation evidence. If no, you are still in assumption territory.\n- Is your scenario anchored to an observable event ('Price created a 1m MSS at the OB') or to an expectation ('The OB should hold because it is a strong level')?\n\n### What Does Not Count\n- Price approaching an area is not confirmation. Proximity is not evidence.\n- A single wick reaction without a structural shift is not confirmation. It may be a sweep.\n- Another learner saying 'This area is very strong' is not confirmation. Only the chart provides evidence.\n\n### Common Mistake\nThe most common mistake is treating the identification of an Order Block or FVG as confirmation itself. Identifying a zone is step one — it creates an area to observe. Confirmation only occurs when price reaches that area and delivers a structural reaction. The zone is a hypothesis. The reaction is the evidence.\n\nAnother common mistake is 'pre-confirmation' — writing the scenario as if confirmation has already occurred before the session starts. Statements like 'When price reaches the OB, it will reverse' are assumption statements. The corrected version is: 'If price reaches the OB and delivers a 1m MSS with displacement, the primary scenario is supported.'\n\n### Example Scenario\n**Assumption-Based**: 'Price is 15 pips away from a 4H Order Block. My scenario is that price will reverse from this OB. I am building my plan now.' — This is assumption. Price has not reached the area. No structural reaction has occurred. The scenario is built entirely on expectation.\n\n**Confirmation-Based**: 'Price has reached the 4H Order Block. On the 1-minute chart, a Market Structure Shift has occurred with displacement, creating a new FVG. My scenario is that this structural shift represents a genuine reaction from the OB. My area to observe is the new 1m FVG. My invalidation is the violation of the swing low created by the 1m MSS.' — This is confirmation. The scenario is anchored to observable structural events that have already occurred.\n\n### Wrong Reading vs Better Reading\n- **Wrong**: 'The Order Block is at 1.0940. My scenario is bearish from this level.' (No price interaction, no structural reaction, pure assumption.)\n- **Better**: 'Price reached 1.0940 and delivered a 1m MSS with a bearish FVG. The OB has produced observable evidence. My scenario is bearish with invalidation at 1.0948.' (Structural reaction observed, scenario anchored to delivered evidence.)\n\n### Practice Instruction\nIn your next simulation session, identify an area of interest before the session begins. When the session starts, do NOT build a scenario until price has reached the area and produced a structural reaction. Record the time gap between identifying the area and receiving confirmation evidence. If no confirmation occurs during the session, record: 'Area identified but no structural reaction delivered. No scenario formed.'\n\n### Journal Review Prompt\n'Did I build my scenario before or after price produced structural evidence at my area of interest? If I built it before, what assumption was I making? If I waited for confirmation, what specific structural event triggered my scenario?'\n\n### Summary\nThe discipline of waiting for the chart to provide observable evidence before building a scenario separates structured analysis from speculation. Zones are hypotheses. Reactions are evidence. Build your scenarios on evidence, not expectation.",
      interactiveTaskType: "type_b_scenario",
      interactiveTaskData: {
        contextPrompt: "You have identified a bullish Order Block at 1.0940 from the 4-hour chart. Price is currently at 1.0955, moving downward toward the OB. You want to build a bullish scenario. What is the correct approach?",
        options: [
          { id: "opt1", text: "Wait for price to reach the OB. If a 1-minute MSS occurs with displacement at or near 1.0940, the OB has produced observable evidence. Build the scenario from the confirmed reaction, not from the expectation.", grade: "best", feedback: "Correct. Confirmation requires waiting for structural evidence at the area, not planning around the expectation that the area will hold.", rationale: "Scenarios built on delivered evidence produce better journal review data and reduce emotional attachment." },
          { id: "opt2", text: "Build the bullish scenario now because the OB is very clear and price is almost there. Waiting might mean missing the move.", grade: "poor", feedback: "This is assumption-based planning. The OB has not yet produced any structural reaction. Building the scenario before evidence exists creates emotional attachment to an untested hypothesis.", rationale: "Identifying a zone is not the same as confirming a reaction. Proximity is not evidence." }
        ]
      },
      skillLevel: "advanced", orderIndex: 6
    },
    {
      level: 5, moduleNumber: "5.7", title: "Scenario Review Under Pressure",
      objective: "Adapt scenario plans systematically as new structural evidence arrives during simulation.",
      content: "# Real-Time Adaptation\n\nA scenario plan is not a static document. It is a living framework that must be reviewed as each new candle closes. The question that governs every candle is: 'Does this new evidence support, weaken, or invalidate my current reading?'\n\nThis module teaches you to review your scenario plan in real time without abandoning it prematurely and without clinging to it past its structural validity.\n\n### Concept Explanation\nReal-time adaptation sits between two extremes:\n- **Over-Adapting**: Changing the scenario with every candle. This produces erratic readings and useless journal data. If every candle triggers a review, the learner is reacting to noise, not structure.\n- **Under-Adapting**: Refusing to update the scenario even when clear structural evidence contradicts it. This is narrative lock (Module 5.2).\n\nThe correct approach is to review only at structural checkpoints — moments when a candle creates a new MSS, a new FVG, violates an anchor, or sweeps a boundary. Between these events, the scenario remains unchanged.\n\n### Why it Matters\nSimulation sessions are designed to test the learner's ability to observe and update. If the plan never changes, the learner is not practicing adaptation — they are practicing stubbornness. If the plan changes every 30 seconds, the learner is not practicing discipline — they are practicing panic. The goal is measured, evidence-based review at structural checkpoints.\n\n### Candle-by-Candle Review Example\nImagine you are in a bullish scenario observation. Your evidence stack supports a bullish reading from a 1H OB. You are watching the 1-minute chart for confirmation:\n\n**Candle 1-5**: Price is slowly approaching the OB. No structural event. No review needed. Scenario unchanged.\n**Candle 6**: Price touches the OB zone. A wick forms but no MSS. This is not confirmation. Scenario unchanged, but you note: 'Price has reached the area. Awaiting structural reaction.'\n**Candle 7-8**: A 1-minute MSS occurs with displacement. A new FVG forms. This IS a structural checkpoint. Review: 'Confirmation evidence delivered. Updating scenario: bullish reading is now active. Invalidation is the swing low of the MSS at 1.0938.'\n**Candle 9-12**: Price moves upward, respecting the new FVG. No new structural events. No review needed.\n**Candle 13**: Price reverses sharply, creating a bearish FVG that violates the bullish FVG. This IS a structural checkpoint. Review: 'Bearish displacement through my confirmation zone. The bullish reading is weakened. If the MSS swing low at 1.0938 is violated, the scenario is invalidated.'\n**Candle 14**: Price closes below 1.0938 with a delivery gap. Invalidation condition met. Review: 'Bullish scenario invalidated. Switching to pre-defined alternative. Recording in journal.'\n\nNotice: only four of the fourteen candles triggered a review. The rest were noise.\n\n### What to Observe\n- New FVGs forming in the opposite direction of your scenario. These are structural warnings.\n- Violation of the swing that anchors your confirmation. This is invalidation.\n- Sweeps of boundaries that were part of your evidence stack. These change the structural landscape.\n- Time expiration. If your session window has passed with no further development, archive the scenario.\n\n### What Does Not Count\n- Candle color alone. A red candle in a bullish scenario is not a review trigger unless it creates a structural event.\n- Emotional discomfort. Feeling nervous is not a structural checkpoint.\n- Other learners updating their readings. Your scenario is independent.\n\n### Common Mistake\nThe most common mistake is premature adaptation — changing the scenario after a single opposing candle that has no structural significance. A bullish scenario is not invalidated by one bearish candle. It is invalidated by a bearish structural event (MSS with displacement, violation of the anchoring swing). Learning to distinguish between noise and structure is the core skill of this module.\n\n### Wrong Reading vs Better Reading\n- **Wrong**: 'A red candle appeared. I am switching to bearish.' (Noise reaction, not structural review.)\n- **Better**: 'A bearish FVG has formed through my confirmation zone. This is a structural checkpoint. Reviewing the scenario: if the anchoring swing is violated, the scenario is invalidated.' (Structured, checkpoint-based, calm.)\n\n### Practice Instruction\nDuring your next simulation session, keep a running log with two columns: 'Candle Number' and 'Structural Event (if any).' Only write in the second column when a genuine structural event occurs (MSS, FVG, boundary sweep, anchor violation). After the session, count how many candles had no structural event. This ratio tells you how much of the session was noise.\n\n### Journal Review Prompt\n'How many times did I update my scenario during this session? Was each update triggered by a structural event, or by emotional discomfort? If I updated more than three times, was the chart genuinely volatile, or was I over-adapting?'\n\n### Summary\nReal-time adaptation is not about reacting to every candle. It is about identifying the structural checkpoints that genuinely change the reading and ignoring the noise between them. The fewer unnecessary updates, the better the review quality.",
      interactiveTaskType: "type_b_scenario",
      interactiveTaskData: {
        contextPrompt: "Your bullish scenario is confirmed from a 1H Order Block. On the 1-minute chart, price made a new high but immediately displaced downward, creating a bearish FVG that violates your confirmation zone. The swing low of your MSS at 1.0938 has NOT been violated yet. What do you do?",
        options: [
          { id: "opt1", text: "The bearish FVG through my confirmation zone is a structural warning. The scenario is weakened but not yet invalidated — the MSS swing low at 1.0938 still holds. I note the warning in my journal and watch for the swing low violation.", grade: "best", feedback: "Correct. This is a measured response at a structural checkpoint. The scenario is weakened, not abandoned, because the invalidation condition has not been fully met.", rationale: "Adaptation requires distinguishing between warning signs and full invalidation. The bearish FVG is a warning; the swing low violation would be invalidation." },
          { id: "opt2", text: "The high was broken so the bullish scenario is working. I ignore the bearish FVG.", grade: "poor", feedback: "A new high followed by immediate bearish displacement is a classic boundary sweep pattern. Ignoring the bearish FVG is refusing to acknowledge conflicting evidence.", rationale: "New highs without sustain, followed by displacement, are structural warnings that must be recorded." }
        ]
      },
      skillLevel: "advanced", orderIndex: 7
    },
    {
      level: 5, moduleNumber: "5.8", title: "Intermarket Context as Supporting Evidence",
      objective: "Use DXY and cross-asset correlation as secondary supporting context in scenario planning.",
      content: "# Intermarket Context\n\nIn Forex, most major currency pairs are quoted against the US Dollar. This means the structural narrative of the US Dollar Index (DXY) is relevant context for any USD-denominated scenario plan. If your EUR/USD scenario is bullish (expecting EUR strength), a bearish DXY narrative (expecting USD weakness) provides supporting intermarket context.\n\nThis module teaches you to incorporate DXY analysis as secondary supporting evidence — not as a standalone decision tool.\n\n### Important Warning\nIntermarket context is supporting evidence only. It does not replace primary chart analysis. A bearish DXY narrative does not automatically make a EUR/USD bullish scenario valid. The EUR/USD chart must have its own structural basis (evidence stack, alignment, confirmation). DXY context adds weight to an existing reading. It does not create one.\n\n### Concept Explanation\n- **Positive Correlation**: When two assets tend to move in the same direction. Example: EUR/USD and GBP/USD often move similarly because both are USD pairs.\n- **Negative Correlation**: When two assets tend to move in opposite directions. Example: EUR/USD and DXY are negatively correlated because a stronger Dollar weakens the Euro relative to it.\n- **Correlation Breakdown**: When normally correlated assets diverge. This is a signal of structural conflict in the intermarket environment.\n\n### Why it Matters\nWhen your EUR/USD scenario is bullish and DXY structure is simultaneously bearish, both instruments are telling the same story from opposite perspectives. This alignment adds confidence to the reading — not certainty, but supporting context.\n\nWhen your EUR/USD scenario is bullish but DXY structure is also bullish, something is structurally conflicted. Both instruments should not be strong simultaneously in the same session. This divergence should be recorded in the evidence stack as an intermarket conflict — similar to an unclear area.\n\n### What to Observe\n- Whether DXY has a clear structural narrative (bullish or bearish MSS on the HTF chart).\n- Whether that narrative aligns with or contradicts your primary pair's scenario.\n- Whether any recent correlation breakdown has occurred (both assets moving in the same direction when they normally move opposite).\n- Session-specific correlation patterns. DXY and EUR/USD may correlate strongly during London and New York sessions but weakly during the Asian session.\n\n### What Does Not Count\n- Using DXY as the primary basis for a scenario. DXY is context, not evidence.\n- Assuming correlation is always active. Correlation is a tendency, not a rule. It can and does break down.\n- Checking DXY after building the scenario to 'confirm' a predetermined reading. This is confirmation bias. Check DXY as part of the evidence stack, not as a validation step after the plan is made.\n\n### Common Mistake\nThe most common mistake is treating intermarket alignment as instruction. A learner sees that DXY is bearish and immediately writes a bullish EUR/USD scenario, even if the EUR/USD chart has no structural basis. DXY is a secondary lens. The primary chart must stand on its own structural evidence first.\n\nAnother mistake is ignoring intermarket conflict. If DXY and EUR/USD are both bullish simultaneously, many learners simply ignore the conflict and proceed. This conflict should be documented in the evidence stack and may warrant a 'No Scenario' reading until it resolves.\n\n### Example Scenario\n**Primary**: EUR/USD 1H chart has a bullish evidence stack. Daily MSS bullish. 1H FVG aligned. Price in Discount. Confirmation delivered via 1m MSS at OB.\n**Intermarket Check**: DXY Daily chart has a bearish MSS. DXY is retracing into a FVG in Premium.\n**Reading**: Intermarket context is aligned. DXY bearish supports EUR/USD bullish. This adds weight to the primary reading. Journal note: 'Intermarket aligned — DXY bearish supports primary bullish EUR/USD scenario.'\n\n**Conflict Example**: Same EUR/USD bullish evidence stack, but DXY is also showing a bullish MSS with displacement. EUR strength and USD strength simultaneously is a structural conflict. Journal note: 'Intermarket conflict — DXY bullish contradicts EUR/USD bullish scenario. Reducing conviction. May warrant unclear area classification.'\n\n### Wrong Reading vs Better Reading\n- **Wrong**: 'DXY is bearish, so EUR/USD must be bullish. Building bullish scenario now.' (DXY as primary evidence, no EUR/USD chart analysis.)\n- **Better**: 'EUR/USD bullish evidence stack is complete. Checking DXY: bearish MSS on Daily, aligned with my reading. Recording as supporting context, not primary evidence.' (DXY as secondary lens, primary chart analyzed first.)\n\n### Practice Instruction\nBefore your next simulation session, open the DXY chart alongside your primary pair. Complete your evidence stack on the primary pair first. Then check DXY structure. Record whether the intermarket context is aligned, conflicting, or unclear. Never build a scenario from DXY alone.\n\n### Journal Review Prompt\n'Did I check intermarket context before or after forming my scenario? If after, was I looking for confirmation of a predetermined reading? If before, did I give DXY too much weight relative to the primary chart?'\n\n### Summary\nIntermarket context is a supporting layer, not a primary evidence source. When aligned, it adds weight. When conflicting, it raises a flag. When unclear, it does not change the primary reading. The primary chart always comes first.",
      interactiveTaskType: "macro_rags_to_riches",
      skillLevel: "advanced", orderIndex: 8
    },
    {
      level: 5, moduleNumber: "5.9", title: "Journal-Based Decision Review",
      objective: "Use structured post-session auditing to identify bias patterns and improve scenario objectivity over time.",
      content: "# The Post-Session Audit\n\nThe journal is where learning actually happens. The simulation session itself is data collection. The journal review is where that data becomes insight. Without structured post-session review, simulation sessions produce experience but not improvement. A learner can complete hundreds of sessions and repeat the same mistakes if they never systematically review their decision-making process.\n\nThis module teaches you to conduct a structured post-session audit using a repeatable review template.\n\n### Why it Matters\nThe human mind is remarkably good at rewriting history. After a session, you will naturally remember the moments where your reading was correct and minimize the moments where you ignored evidence, moved invalidation, or clung to a narrative. The journal prevents this selective memory by recording the raw decisions as they happened.\n\nOver time, journal reviews reveal patterns that are invisible in individual sessions. You may discover that you consistently ignore invalidation during the New York session, or that your evidence stacks are weaker on Fridays, or that you over-adapt during volatile Asian sessions. These patterns are the real curriculum of Level 5.\n\n### The Review Template\nAfter every simulation session, complete the following template in your journal:\n\n**1. Initial Reading**: What was your HTF narrative at the start of the session? Was it clear, or did you start with an unclear area?\n\n**2. Evidence Stack**: List every structural clue you identified. Label each as 'supporting' or 'conflicting.' Were there at least three observations before you formed a scenario?\n\n**3. Primary Scenario**: What was your primary reading? Was it written down before the session, or did you form it after price started moving?\n\n**4. Alternative Scenario**: Did you define an alternative? Was it specific and structurally anchored, or vague?\n\n**5. Invalidation Condition**: What was your pre-defined invalidation? Was it structure-based, time-based, or both?\n\n**6. Confirmation vs Assumption**: Did you wait for confirmation evidence, or did you build the scenario before price interacted with your area?\n\n**7. Review Conditions Met**: During the session, did any structural checkpoints occur? How did you respond to each one?\n\n**8. What Changed**: If you updated the scenario, what triggered the change? Was it a structural event or an emotional reaction?\n\n**9. Outcome**: What was the structural outcome? Did the primary scenario play out, did the alternative activate, or was the scenario invalidated/expired?\n\n**10. What Was Learned**: What specific insight does this session provide about your process? Is there a pattern emerging across multiple sessions?\n\n### What to Observe During Review\n- Whether your evidence stack was genuinely objective or showed confirmation bias.\n- Whether your invalidation condition was respected or moved.\n- Whether you switched to the alternative when conditions were met, or held the primary past its validity.\n- Whether your adaptation during the session was triggered by structure or emotion.\n- The ratio of structural checkpoints to noise candles (from Module 5.7).\n\n### What Does Not Count\n- Recording only outcomes. 'The scenario worked' or 'the scenario did not work' without process analysis is not a review.\n- Blaming external factors. 'The market was manipulated' or 'the spread widened' are not process insights.\n- Reviewing only sessions where the scenario did not play out. Successful sessions also contain process data — you may have been right for the wrong reasons.\n\n### Common Mistake\nThe most common mistake is abandoning the journal after the first few sessions because 'the readings are straightforward.' If every session feels straightforward, the learner is either not pushing into sufficiently complex structural environments or is not reviewing with enough honesty. A genuinely useful journal review should occasionally reveal uncomfortable truths about bias and process shortcuts.\n\nAnother common mistake is writing the journal entry days after the session. Memory degrades rapidly. The review should be completed immediately after the session ends, while the raw observations are still fresh.\n\n### Example Journal Entry\n**Session**: EUR/USD, London Open, 2024-01-22\n**HTF Narrative**: Daily bearish MSS. Clear.\n**Evidence Stack**: (1) Daily MSS bearish — supporting. (2) 1H FVG at 1.0965 in Premium — supporting. (3) 4H OB at 1.0920 not yet violated — conflicting. Three clues recorded.\n**Primary Scenario**: Bearish continuation from 1H FVG.\n**Alternative**: Bullish shift if 1H closes above 1.0975 with displacement.\n**Invalidation**: 1H body close above 1.0975 with displacement.\n**Confirmation**: Waited for 1m MSS at FVG. Confirmation delivered at 08:47.\n**Review Conditions**: Bearish FVG formed at 09:15 — supporting. No opposing checkpoints.\n**Outcome**: Primary scenario supported. Price continued bearish.\n**What Was Learned**: I correctly waited for confirmation and did not pre-commit. However, I did not check DXY until after forming the scenario. Next session, I will check DXY as part of the evidence stack.\n\n### Practice Instruction\nComplete the full 10-point review template for your next three simulation sessions. After the third review, read all three entries together and look for patterns. Are you consistently skipping any of the ten points? That skip is your current blind spot.\n\n### Journal Review Prompt (Meta-Review)\n'Am I completing the full template, or am I skipping sections that feel uncomfortable? Which section do I spend the least time on? That section likely contains my primary process weakness.'\n\n### Summary\nThe journal is not a record of what happened. It is a structured audit of how you made decisions. The template provides a repeatable framework that exposes bias, rewards discipline, and turns every session — regardless of outcome — into a learning event.",
      interactiveTaskType: "choice_block",
      interactiveTaskData: {
        question: "A learner completes a simulation session and writes in their journal: 'The scenario worked. Good session.' What is the primary problem with this entry?",
        options: [
          "It is too short to be a proper entry.",
          "It records only the outcome without any process analysis — no evidence stack review, no confirmation check, no invalidation audit.",
          "It should include the exact price levels reached.",
          "It should compare the result to the previous session."
        ],
        correctIndex: 1,
        feedback: "Correct. A journal entry that only records outcomes provides no insight into the decision-making process. The review template exists to audit how the scenario was built, reviewed, and adapted — not just whether it played out."
      },
      skillLevel: "advanced", orderIndex: 9
    },
    {
      level: 5, moduleNumber: "5.10", title: "Scenario Planning Map",
      objective: "Synthesize all Level 5 concepts into a complete scenario planning workflow and complete the capstone mission.",
      content: "# The Final Synthesis\n\nThis is the capstone module of Level 5. Everything you have learned — evidence stacking, branching logic, invalidation, timeframe alignment, unclear areas, confirmation, real-time adaptation, intermarket context, and journal review — comes together here into a single, repeatable workflow called the Scenario Planning Map.\n\nThe Scenario Planning Map is not a prediction tool. It is a structured observation framework that ensures every simulation session is approached with discipline, objectivity, and documented reasoning.\n\n### The Complete Workflow\nBefore every simulation session, complete the following Scenario Planning Map:\n\n**Step 1 — HTF Narrative Check** (Module 5.4)\nOpen the Daily chart. Identify the current structural narrative: bullish MSS, bearish MSS, or unclear. If unclear, record 'No HTF Narrative' and consider whether a scenario is viable.\n\n**Step 2 — Evidence Stack** (Module 5.1)\nSwitch to the 1H chart. Identify all structural clues: FVGs, OBs, boundaries, Premium/Discount location. Label each clue as 'supporting' or 'conflicting' relative to the HTF narrative. Record at least three observations.\n\n**Step 3 — Structural Conflict Check** (Module 5.5)\nReview the evidence stack for deep conflicts. If opposing MSS events exist on adjacent timeframes without resolution, record 'No Scenario — Structural Conflict' and stop.\n\n**Step 4 — Primary Scenario** (Module 5.2)\nIf the stack is aligned, define the Primary Scenario. This is the current strongest reading based on the evidence. Include: the direction, the area to observe, and the expected structural behavior at that area.\n\n**Step 5 — Alternative Scenario** (Module 5.2)\nDefine the Alternative Scenario. Include: the specific structural anchor that separates the primary from the alternative, and the displacement condition required to switch.\n\n**Step 6 — Invalidation Conditions** (Module 5.3)\nWrite the invalidation condition for the Primary Scenario. Include the structural level, the candle behavior required (body close with displacement), and the time window.\n\n**Step 7 — Intermarket Context** (Module 5.8)\nCheck DXY (or the relevant correlated instrument). Record whether the intermarket context is aligned, conflicting, or unclear. Adjust conviction accordingly — do not change the scenario.\n\n**Step 8 — Wait for Confirmation** (Module 5.6)\nDo not commit to the scenario until price reaches the area of interest and delivers a structural reaction. Record the confirmation event or 'No Confirmation Delivered.'\n\n**Step 9 — Real-Time Adaptation** (Module 5.7)\nDuring the session, review only at structural checkpoints. Record each checkpoint and your response. Distinguish between warnings and full invalidation.\n\n**Step 10 — Post-Session Journal Review** (Module 5.9)\nComplete the full 10-point review template. Identify what was learned and whether any process shortcuts were taken.\n\n### The Capstone Mission\nThe Level 5 Gate mission asks you to identify a single Review Area on a chart — the structural zone where evidence should be observed before updating the scenario reading. This mission validates one critical skill: can you identify the correct area to observe based on structural context?\n\nThe mission validates a single zone, not the complete Scenario Planning Map. However, the zone selection itself requires the full workflow: you must read the HTF narrative, stack the LTF evidence, identify alignment, and choose the area where confirmation or invalidation will occur. The zone is the output of the entire process.\n\n### What the Zone Represents\nThe Review Area is not a place where you expect price to reverse. It is not a point where price 'should' stop. It is the structural zone where, based on the evidence stack and timeframe alignment, the chart will provide the next piece of meaningful structural evidence — the evidence that either supports or invalidates the current reading.\n\n### Wrong Reading vs Better Reading\n- **Wrong**: 'I am placing the zone where I think price will reverse.' (Assumption-based, outcome-focused.)\n- **Better**: 'I am placing the zone at the structural anchor where the next delivery interaction will provide evidence for or against the current reading.' (Process-based, observation-focused.)\n\n### Pre-Mission Journal Note\nBefore attempting the capstone mission, write the following in your journal:\n1. What is the HTF narrative on this chart?\n2. What evidence supports a scenario? What evidence conflicts?\n3. Where is the structural zone where the next meaningful interaction will occur?\n4. What would confirmation look like at this zone?\n5. What would invalidation look like at this zone?\n\nThen attempt the mission. After completing it (regardless of result), return to your journal and review whether your zone selection matched the structural logic you documented.\n\n### Practice Instruction\nBefore the mission, run through the complete 10-step Scenario Planning Map on a practice chart. Write the full map in your journal. Then compare your process to the Level 5 curriculum modules. Are you skipping any steps? Are any steps weaker than others? Use this self-assessment to identify which modules to revisit before attempting the gate.\n\n### Journal Review Prompt\n'Did I complete the full Scenario Planning Map before selecting my Review Area? Did the zone selection follow logically from my evidence stack, or did I place it based on intuition? After the mission, was my zone structurally justified?'\n\n### Summary\nThe Scenario Planning Map is the culmination of Level 5. It is not a formula that produces outcomes. It is a structured observation process that produces objective, reviewable, and repeatable scenario plans. Master this workflow, and every simulation session becomes a deliberate learning event — not a guess.",
      interactiveTaskType: "scenario_link",
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
