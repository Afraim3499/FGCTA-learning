import { PrismaClient } from '@prisma/client';
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

const content = `
# 2.11 — Liquidity Targets Above Highs and Below Lows

### Skill Target
After this module, you should be able to identify obvious highs and lows that may act as target areas. Understanding where orders cluster helps you set realistic expectations for price movement.

---

### Simple Meaning
When you look at a chart, some levels are more obvious than others. These are usually previous peaks (Old Highs) and valleys (Old Lows). 

Because these levels are easy to see, many traders around the world place their orders around them:
- **Breakout traders** place orders to buy above highs or sell below lows.
- **Current traders** place their stop-loss orders just beyond these levels for protection.

Because so many orders cluster in these areas, they become logical **target areas** to watch. This does not mean price *must* go there, but it means if price is moving in that direction, these are the spots where it is most likely to encounter a surge in activity.

---

### Visual 1 — Obvious Highs and Lows
![LIQ_01_OBVIOUS_HIGHS_LOWS](/images/academy/m2-11/LIQ_01_OBVIOUS_HIGHS_LOWS.png)

### What to Notice
When identifying targets, simplicity is your best friend:
- **Old Highs**: Visible peaks above the current price.
- **Old Lows**: Visible valleys below the current price.
- **Visibility**: If you have to search for it, it's not a primary target. The best targets are the ones everyone else sees too.

---

### Visual 2 — Orders Above Highs
![LIQ_02_ORDERS_ABOVE_HIGHS](/images/academy/m2-11/LIQ_02_ORDERS_ABOVE_HIGHS.png)

Orders often sit above obvious highs. These include buy-stops from traders who are short, and buy-limits from breakout traders. These clusters create an area that price may be "drawn" toward when it leaves the midpoint of a range.

---

### Visual 3 — Orders Below Lows
![LIQ_03_ORDERS_BELOW_LOWS](/images/academy/m2-11/LIQ_03_ORDERS_BELOW_LOWS.png)

Similarly, orders often sit below obvious lows. Sell-stops and breakout-sell orders create a cluster of activity below these structural points.

---

### Side-by-Side Comparison: Clean Target vs Messy Area
![LIQ_04_CLEAN_VS_MESSY_TARGET](/images/academy/m2-11/LIQ_04_CLEAN_VS_MESSY_TARGET.png)

A clean target is isolated and clear. A messy area is full of overlapping wicks and noise. We always prioritize the cleanest, most obvious structural points as our primary planning targets.

---

### Decision Rule
Use target awareness to guide your planning, not to predict the future:

- **IF** a high or low is obvious and clean, mark it as a target area to watch.
- **IF** price is already very close to the target, do not chase. You are entering at the end of a move, not the beginning.
- **IF** the area is messy, treat it with less confidence. There is no clear cluster of orders.

**A target area helps planning; it does not guarantee price movement.** It is a map of where "fuel" exists in the market, not a crystal ball.

---

### Summary and Next Step
By identifying these target areas, you now have the final piece of your chart map. 

In the next module, **2.12 — Level 2 Map Review**, we will combine everything we've learned—Ranges, Midpoints, Supply/Demand Zones, and Targets—into one complete, professional workflow.
`;

const taskData = {
  contextPrompt: "You are looking for a logical target area for a move higher. Which area is the clearer target to watch?",
  options: [
    {
      id: "opt_clean",
      text: "An obvious, isolated Old High above price.",
      feedback: "Correct! The most obvious structural points are where the most orders cluster, making them the cleanest planning targets.",
      isCorrect: true
    },
    {
      id: "opt_messy",
      text: "A choppy area with many overlapping wicks.",
      feedback: "Incorrect. Messy areas lack clear structural definition and are harder for the general market to use as a consensus target.",
      isCorrect: false
    }
  ]
};

async function main() {
  const result = await prisma.courseModule.update({
    where: { level_moduleNumber: { level: 2, moduleNumber: '2.11' } },
    data: {
      title: 'Liquidity Targets Above Highs and Below Lows',
      content: content.trim(),
      interactiveTaskType: 'type_b_scenario',
      interactiveTaskData: taskData
    }
  });
  console.log('Updated Module 2.11:', result.title);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
