import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({ 
  user: "postgres.oqaxpfldczldfmbuopbn",
  password: "Rizwan99636?",
  host: "aws-1-ap-southeast-1.pooler.supabase.com",
  port: 5432,
  database: "postgres",
  ssl: { rejectUnauthorized: false }
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const L1_CONTENT = [
  {
    moduleNumber: "1.1",
    title: "Why Price Moves",
    objective: "Understand that price moves due to imbalances between buying and selling pressure.",
    content: `# Why Price Moves\n\nTo the untrained eye, price movement looks like a series of random fluctuations. However, every tick on a chart represents a completed transaction between a buyer and a seller. Price moves because these two forces are rarely in perfect balance.\n\n### The Imbalance Principle\n\nPrice is a discovery mechanism. When there are more aggressive buyers than sellers at a specific price, the market must move higher to find new sellers. Conversely, when selling pressure exceeds buying interest, price drops to attract new buyers.\n\n![Why Price Moves](/images/academy/l1/onb_01_imbalance.png)\n\n### Balance vs. Imbalance\n\n- **Balanced Market**: When buying and selling pressure are roughly equal, price stays within a horizontal range. This is known as "Consolidation."\n- **Imbalanced Market**: When one side becomes significantly more aggressive, price "launches" away from the previous range. This creates a trend.\n\n### Key Takeaway\nPrice doesn't move because of "lines" on a chart. It moves because human and algorithmic participants are actively competing to fill their orders.`,
    interactiveTaskType: "type_b_scenario",
    interactiveTaskData: {
      contextPrompt: "If price is currently moving sideways in a tight horizontal range, what does this tell you about market pressure?",
      options: [
        { id: "a", text: "Buyers are significantly stronger than sellers.", isCorrect: false, feedback: "Incorrect. Sideways movement indicates a state of balance." },
        { id: "b", text: "Buying and selling pressure are roughly equal.", isCorrect: true, feedback: "Correct! This is a state of equilibrium or consolidation." },
        { id: "c", text: "The market has closed for the day.", isCorrect: false, feedback: "Not necessarily. Active markets can be balanced too." }
      ]
    }
  },
  {
    moduleNumber: "1.2",
    title: "Market Participants",
    objective: "Identify the different roles in the market and how their motives differ.",
    content: `# Market Participants\n\nThe market is a collection of diverse participants, each with different goals, tools, and capital sizes. Understanding these roles helps remove the mystery of how markets function.\n\n### Larger Participants\n\nFinancial institutions, central banks, and hedge funds are the "heavyweights." Their orders are so large that they cannot be filled instantly without moving the market significantly. Because of this, they often use **Resting Orders** to build their positions over time.\n\n![Participant Flow](/images/academy/l1/onb_02_participants.png)\n\n### Market Providers\n\nLiquidity providers (often large banks) act as the middlemen. Their primary role is to help buyers and sellers transact by offering available prices and liquidity. They don't necessarily "predict" direction; they facilitate flow.\n\n### Retail Traders\n\nIndividual traders like us have the smallest capital but the highest speed. We can enter and exit the market instantly. Our goal is to identify the "footprints" left behind by larger participants and follow the path of least resistance.`,
    interactiveTaskType: "type_b_scenario",
    interactiveTaskData: {
      contextPrompt: "In a professional market, what is the main role of a 'Liquidity Provider'?",
      options: [
        { id: "a", text: "To predict the news", isCorrect: false, feedback: "Incorrect. Providers are usually market-neutral facilitators." },
        { id: "b", text: "To help buyers and sellers transact by offering available prices", isCorrect: true, feedback: "Correct! Liquidity providers ensure that transactions can occur smoothly by providing depth." },
        { id: "c", text: "To make retail traders lose money", isCorrect: false, feedback: "While markets are competitive, the provider's specific job is facilitation." }
      ]
    }
  },
  {
    moduleNumber: "1.3",
    title: "Supply and Demand Basics",
    objective: "Learn to identify areas of strong previous activity where price is likely to react again.",
    content: `# Supply and Demand Basics\n\nIf price moves because of imbalance, then we need to find where those imbalances started. These are known as **Supply** and **Demand** zones.\n\n### Identifying a Zone\n\nA valid zone is an area on the chart where price previously "launched" away with extreme speed. This speed tells us that one side (buyers or sellers) was overwhelmingly dominant.\n\n![Supply and Demand](/images/academy/l1/onb_03_sd_zone.png)\n\n### The Memory of the Market\n\nWhen price returns to a zone where a previous imbalance occurred, it often finds "resting orders" left behind. \n\n- **Demand Zone**: An area of previous strong buying. When price returns, we look for signs of buying interest.\n- **Supply Zone**: An area of previous strong selling. When price returns, we look for signs of selling interest.\n\n### Quality Over Quantity\n\nNot every horizontal area is a zone. We prioritize zones that created a significant structural break or a very aggressive move away.`,
    interactiveTaskType: "type_a_point_click",
    interactiveTaskData: {
      prompt: "Examine the chart. Click the area where price launched upward with the most aggressive speed.",
      chartData: [], 
      validationZones: [
        { id: "demand", x: 20, y: 70, width: 15, height: 20, isCorrect: true, rationale: "Correct! This aggressive 'launch' marks a strong Demand Zone." }
      ]
    }
  },
  {
    moduleNumber: "1.4",
    title: "Liquidity Basics",
    objective: "Understand why price is often attracted to areas with high clusters of resting orders.",
    content: `# Liquidity Basics\n\nIn trading, **Liquidity** refers to the availability of orders. For a large participant to buy, there must be enough sellers. For them to sell, there must be enough buyers.\n\n### The Magnet Effect\n\nObvious highs and lows are watched because many traders place **Stop-Loss** or **Breakout Orders** around them. These areas represent "Liquidity Pools." Larger participants are often attracted to these pools because they provide the volume necessary to fill their large positions.\n\n![Liquidity Clusters](/images/academy/l1/onb_04_liquidity.png)\n\n### Obvious Highs and Lows\n\n- **Buy-Side Liquidity**: Resting orders sitting above an obvious peak (swing high).\n- **Sell-Side Liquidity**: Resting orders sitting below an obvious trough (swing low).\n\nWhen price "sweeps" one of these areas, it often reverses because the resting orders have been consumed, and the imbalance has shifted.`,
    interactiveTaskType: "type_a_point_click",
    interactiveTaskData: {
      prompt: "Look at the swing highs and lows. Click the area where you would expect the highest concentration of resting stop-loss orders.",
      chartData: [],
      validationZones: [
        { id: "high_liq", x: 45, y: 15, width: 20, height: 10, isCorrect: true, rationale: "Correct! Obvious peaks are magnets for stop-loss and breakout buy orders." }
      ]
    }
  },
  {
    moduleNumber: "1.5",
    title: "Timing and Discipline",
    objective: "Understand that not all market hours are equal, and waiting is a professional skill.",
    content: `# Timing and Discipline\n\nTrading is not a 24/7 activity for professionals. The market moves in cycles of **Expansion** and **Contraction**, largely driven by when major financial centers are open.\n\n### The Volatility Clock\n\nVolatility (price movement) is highest when major sessions overlap, such as the London and New York open. During quiet hours (like the late Asian session), price often enters a "Balanced" range with very little profit potential.\n\n![Timing Volatility](/images/academy/l1/onb_05_timing.png)\n\n### The Three Decisions\n\nBeginners believe they must always be "Long" or "Short." Professionals know there is a third, more important decision: **Waiting.**\n\n1. **Trade**: When your plan and market conditions align perfectly.\n2. **Wait**: When you have a plan, but price hasn't reached your zone yet.\n3. **Skip**: When conditions are low-probability (e.g., quiet sessions or high news impact).\n\n### The Goal\n\nYour job is not to catch every move. Your job is to protect your capital and only risk it when the odds are in your favor.`,
    interactiveTaskType: "type_b_scenario",
    interactiveTaskData: {
      contextPrompt: "The market has been moving sideways for 4 hours during a quiet Asian session. No clear zones have been reached. What is the professional decision?",
      options: [
        { id: "a", text: "Enter a trade anyway to stay active.", isCorrect: false, feedback: "Incorrect. Boredom is not a reason to risk capital." },
        { id: "b", text: "Wait or Skip until a higher-probability session starts.", isCorrect: true, feedback: "Correct! Protecting capital during low-volatility periods is a core professional skill." },
        { id: "c", text: "Try to predict which way it will break out.", isCorrect: false, feedback: "Prediction without structure is gambling." }
      ]
    }
  }
];

const L1_TEST = {
  level: 1,
  title: "Level 1: Foundations Assessment",
  passThreshold: 80,
  timeLimitMin: 10,
  questionsPerAttempt: 8,
  questions: [
    {
      id: "l1_q1",
      question: "What is the primary cause of price movement on a chart?",
      options: [
        "The time of day",
        "An imbalance between buying and selling pressure",
        "The colors of the candles",
        "Luck and coincidence"
      ],
      correctIndex: 1,
      explanation: "Price moves up when buying pressure exceeds selling pressure, and down when the opposite occurs."
    },
    {
      id: "l1_q2",
      question: "If buyers and sellers are perfectly balanced, what usually happens to the price?",
      options: [
        "It moves sideways in a range",
        "It stops moving entirely",
        "It crashes instantly",
        "It breaks out into a new trend"
      ],
      correctIndex: 0,
      explanation: "A 'balanced' market is one where neither side is stronger, resulting in a horizontal range."
    },
    {
      id: "l1_q3",
      question: "Why do larger participants (like banks) often use 'resting orders' instead of entering all at once?",
      options: [
        "To hide their trades from retail",
        "Because their orders are too large for the market to handle instantly",
        "Because they are not allowed to use market orders",
        "To save on electricity"
      ],
      correctIndex: 1,
      explanation: "Large institutional orders require significant liquidity. Entering all at once would cause massive price slippage."
    },
    {
      id: "l1_q4",
      question: "In a professional market, what is the main role of a 'Liquidity Provider'?",
      options: [
        "To predict the news",
        "To help buyers and sellers transact by offering available prices",
        "To make retail traders lose money",
        "To trade for personal profit only"
      ],
      correctIndex: 1,
      explanation: "Liquidity providers help buyers and sellers transact by offering available prices/liquidity."
    },
    {
      id: "l1_q5",
      question: "What is a 'Demand Zone' in a chart?",
      options: [
        "An area where price recently dropped fast",
        "An area where strong buying pressure previously appeared",
        "A horizontal line at the top of the chart",
        "A news headline"
      ],
      correctIndex: 1,
      explanation: "Demand zones represent areas where buyers previously overwhelmed sellers, launching price higher."
    },
    {
      id: "l1_q6",
      question: "Why do traders look at areas where price previously 'launched' with strength?",
      options: [
        "To find where price is likely to react again",
        "To see how fast the candles move",
        "To guess the next news event",
        "Because the chart looks better"
      ],
      correctIndex: 0,
      explanation: "Areas of strong previous activity often contain resting orders that can trigger a new reaction."
    },
    {
      id: "l1_q7",
      question: "Where do many traders commonly place their 'Stop-Loss' orders?",
      options: [
        "In the middle of a range",
        "Above obvious highs and below obvious lows",
        "Only at the end of the day",
        "They don't use stops"
      ],
      correctIndex: 1,
      explanation: "Obvious highs and lows are watched because many traders place stop-loss or breakout orders around them."
    },
    {
      id: "l1_q8",
      question: "Why is 'Waiting' considered a professional trading decision?",
      options: [
        "Because you are too scared to trade",
        "Because not all market conditions are favorable for a plan",
        "To avoid paying fees",
        "Because the broker is closed"
      ],
      correctIndex: 1,
      explanation: "Disciplined traders only act when their specific criteria are met; skipping low-probability moves is essential for capital preservation."
    }
  ]
};

async function main() {
  console.log("🚀 Executing Level 1 Overhaul...");
  try {
    for (const mod of L1_CONTENT) {
      await prisma.courseModule.update({
        where: { level_moduleNumber: { level: 1, moduleNumber: mod.moduleNumber } },
        data: {
          title: mod.title,
          objective: mod.objective,
          content: mod.content,
          interactiveTaskType: mod.interactiveTaskType,
          interactiveTaskData: mod.interactiveTaskData as any,
          logicIds: [],
          strategyFamilies: [],
          skillLevel: "beginner"
        }
      });
      console.log(`  ✅ Updated ${mod.moduleNumber}`);
    }

    const legacy = await prisma.courseModule.findMany({
      where: { level: 1, moduleNumber: { notIn: ["1.1", "1.2", "1.3", "1.4", "1.5"] } }
    });
    for (const mod of legacy) {
      const prefix = "[Legacy] ";
      const newTitle = mod.title.startsWith(prefix) ? mod.title : prefix + mod.title;
      await prisma.courseModule.update({
        where: { id: mod.id },
        data: { title: newTitle }
      });
      console.log(`  📦 Prefixed ${mod.moduleNumber}`);
    }

    await prisma.knowledgeTest.upsert({
      where: { level: 1 },
      update: L1_TEST,
      create: L1_TEST
    });
    console.log("  🏆 Updated Test");
    
    console.log("✨ Overhaul successful.");
  } catch (e) {
    console.error("❌ Failed:", e);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

main();
