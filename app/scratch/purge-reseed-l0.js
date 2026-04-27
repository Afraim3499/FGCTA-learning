
const { PrismaClient } = require('@prisma/client');
const { PrismaPg }     = require('@prisma/adapter-pg');
const { Pool }         = require('pg');
require('dotenv').config();

const pool = new Pool({ user:'postgres.oqaxpfldczldfmbuopbn',password:'Afraim9934?',host:'aws-1-ap-southeast-1.pooler.supabase.com',port:5432,database:'postgres',ssl:{rejectUnauthorized:false}});
const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });

const MODULE_DATA = [
  {
    moduleNumber: '0.1',
    title: 'What Trading Actually Is',
    objective: 'Understand trading as decision-making under uncertainty.',
    content: `
# What Trading Actually Is

Welcome to the Academy. Before we look at charts or numbers, we must understand the core nature of this profession.

Trading is **Decision-Making Under Uncertainty.**

:::skill-target
Understand that the goal of trading is disciplined decision-making, not "predicting the future."
:::

:::visual
title: The Nature of Price
image: /images/academy/l0/onb_01_uncertainty.png
caption: At any given moment, price has a probability of moving up or down. No one knows for sure which path it will take.
lookFor: [ "Decision Point", "Upward Probability", "Downward Probability" ]
:::

### The Professional Mindset
A beginner thinks: *"I need to know where the market is going."*
A professional thinks: *"I don't know where it's going, but I have a plan for either outcome."*

:::simple-meaning
Trading is like being a casino owner, not a gambler. You accept that individual outcomes are random, but you rely on a disciplined process to succeed over time.
:::

:::choice
question: If a trader sees a "perfect" setup, is the profit guaranteed?
options: [ "Yes, if the logic is strong enough.", "No, every single trade carries risk." ]
correctIndex: 1
correctFeedback: Correct. Even the best setup can fail. This is why we manage risk on every single trade.
incorrectFeedback: Not quite. In trading, there are no guarantees. Every trade is a probability, not a certainty.
:::

:::reveal
*Answer: The Goal of Level 0 is to prepare you for this reality.*
:::
`
  },
  {
    moduleNumber: '0.2',
    title: 'The Three Market Tracks',
    objective: 'Understand the basic differences between Forex, Crypto, and Gold.',
    content: `
# The Three Market Tracks

The Academy focuses on three primary domains. While the core logic remains the same, each market has its own "personality."

:::skill-target
Identify which market track best fits your lifestyle and risk tolerance.
:::

:::visual
title: Market Personalities
image: /images/academy/l0/onb_02_tracks.png
caption: Forex, Crypto, and Gold each have different speeds, hours, and drivers.
:::

### The Domains
*   **Forex:** High liquidity, news-driven, trades Monday to Friday.
*   **Crypto:** High speed, 24/7 access, extreme volatility.
*   **Gold:** Sensitive to the US Dollar and global macro events.

:::simple-meaning
No market is "easier" than another. Choose the track that you find most interesting and that fits your schedule.
:::

:::choice
question: Which market is known for trading 24/7 without closing for the weekend?
options: [ "Forex", "Crypto", "Gold" ]
correctIndex: 1
correctFeedback: Correct! Crypto markets never sleep, which offers flexibility but requires strict discipline.
incorrectFeedback: Check the comparison again. Only one of these operates 24/7.
:::
`
  },
  {
    moduleNumber: '0.3',
    title: 'Price, Candles & Spread',
    objective: 'Understand that charts show price movement and trades happen through bid/ask.',
    content: `
# Price, Candles & Spread

Charts are simply a visual history of price movement. We use "Candlesticks" to read that history.

:::visual
title: Candlestick Anatomy
image: /images/academy/l0/onb_03_candle_basic.png
caption: A candle shows the 'Body' (where price moved) and 'Wicks' (the extremes reached).
:::

### The Cost of Entry: The Spread
When you enter a trade, you don't enter at one single price. There is a "gap" between the Buying price and the Selling price.

:::visual
title: Understanding the Spread
image: /images/academy/l0/onb_04_spread_diagram.png
caption: The gap between the Ask (Buy) and Bid (Sell) is called the Spread.
:::

:::identify
question: Practice: Click the **SPREAD GAP** between the two price lines.
image: /images/academy/l0/onb_04_spread_diagram.png
xMin: 35
xMax: 45
yMin: 22
yMax: 33
successFeedback: Correct! That gap is your "Entry Tax." It's why trades often start slightly negative.
failFeedback: Look for the dotted vertical line in the middle representing the gap.
:::

:::simple-meaning
The spread is a small cost paid to the market for every trade. You must account for it when planning your exits.
:::
`
  },
  {
    moduleNumber: '0.4',
    title: 'Risk Basics',
    objective: 'Understand why exit planning comes before entry.',
    content: `
# Risk Basics: The Safety Net

In the Academy, we never enter a trade without a "Safety Net." This is called your **Stop Loss.**

:::skill-target
Understand that protecting your capital is more important than chasing profit.
:::

:::visual
title: The Trade Map
image: /images/academy/l0/onb_05_risk_boxes.png
caption: Every trade should have a clear Exit for a loss (Stop Loss) and an Exit for a profit (Take Profit).
:::

### Risk vs Reward (R-Multiple)
We always aim for a "Reward" that is significantly larger than our "Risk."

*   **Stop Loss (Risk):** Where you admit you are wrong.
*   **Take Profit (Reward):** Where you collect your winnings.
*   **2R Trade:** A trade where the reward is 2x larger than the risk.

:::choice
question: Why do we set a Stop Loss before entering the trade?
options: [ "To guarantee a profit.", "To protect our account if the market moves against us." ]
correctIndex: 1
correctFeedback: Exactly. Your Stop Loss is your "exit for a loss" that prevents a small mistake from becoming a disaster.
incorrectFeedback: Remember, there are no guarantees. What is the purpose of a safety net?
:::

:::reveal
*Answer: Professionals focus on what they might LOSE first. Beginners focus on what they might WIN.*
:::
`
  },
  {
    moduleNumber: '0.5',
    title: 'Platform Orientation',
    objective: 'Understand how to use the academy and complete missions.',
    content: `
# Platform Orientation

You are now ready to begin your official training. First, let's look at how the Academy works.

:::visual
title: Your Command Center
image: /images/academy/l0/onb_06_academy_map.png
caption: Your dashboard tracks your rank, XP, and progress through the tiers.
:::

### Learning vs Assessment
*   **Modules:** These are for learning. Use the **Practice Blocks** to test your knowledge without stress.
*   **Chart Missions:** These are your formal assessments. They award **XP** and move you closer to Certification.

:::identify
question: Practice: Find and click the **XP COUNTER** on the dashboard map.
image: /images/academy/l0/onb_06_academy_map.png
xMin: 80
xMax: 95
yMin: 0
yMax: 10
successFeedback: Correct! That tracks your cumulative experience as a trader.
failFeedback: Look in the top right corner of the dashboard.
:::

:::task-prep
You are now cleared for **Mission 1: Terminal Synchronization.**
:::
`
  }
];

async function main() {
  console.log('--- LEVEL 0 DEEP PURGE & RE-SEED ---');

  for (const data of MODULE_DATA) {
    console.log(`Purging & Updating Module ${data.moduleNumber}...`);
    await prisma.courseModule.updateMany({
      where: { level: 0, moduleNumber: data.moduleNumber },
      data: {
        title: data.title,
        objective: data.objective,
        content: data.content,
        orderIndex: parseInt(data.moduleNumber.split('.')[1]),
        // PURGE EXTRA FIELDS
        forexAdaptation: null,
        cryptoAdaptation: null,
        goldAdaptation: null,
        logicIds: [],
        interactiveTaskType: null,
        interactiveTaskData: null,
        correctZones: null,
        skillLevel: 'beginner',
        marketTrack: 'core'
      }
    });
  }

  console.log('✅ Level 0 Purge Complete.');
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); await pool.end(); });
