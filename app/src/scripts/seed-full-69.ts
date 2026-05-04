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
    // LEVEL 5+: SYSTEMATIC PRACTICE
    // ============================================
    {
      level: 5, moduleNumber: "5.1", title: "Exposure Management",
      objective: "Professional protocols.",
      content: "# Exposure Management\n\nConsistency over speed.",
      skillLevel: "advanced", orderIndex: 1
    },
    {
      level: 8, moduleNumber: "8.1", title: "Cognitive Biases in Live Play",
      objective: "Removing the human element.",
      content: "# Psychology Mastery\n\nBecoming the machine.",
      skillLevel: "advanced", orderIndex: 1
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
    }
  ];

  for (const sc of scenarios) {
    const scenario = await prisma.trainingScenario.upsert({
      where: { slug: sc.slug },
      update: sc as any,
      create: sc as any,
    });

    let targetModuleNumber = "4.8";
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
