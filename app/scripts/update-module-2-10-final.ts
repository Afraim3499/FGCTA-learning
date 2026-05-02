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
# 2.10 — Demand Zones Below Midpoint

### Skill Target
After this module, you should be able to identify a demand zone below the midpoint of a range. This ensures your buy-side planning is focused on areas where price is truly cheap relative to the range.

---

### Simple Meaning
A **Demand Zone** is an area where buying pressure previously took control of the market, causing price to rise. 

Just like supply, location is everything. We prioritize demand zones that are in the **lower half** of a range (below the midpoint). This simple filter prevents you from "buying the top" of a range and keeps your focus on areas worth watching for buy-side planning.

---

### Visual 1 — Basic Demand Zone
![DEM_01_BASIC_DEMAND_ZONE](file:///C:/Users/User/.gemini/antigravity/brain/3961f568-404a-42a1-ae7d-f576c4d0ee6f/dem_01_basic_demand_zone_v2_1777245248592.png)

### What to Notice
Look for these core signatures of a valid demand zone:
- **The Base**: Price pauses or moves sideways briefly.
- **The Departure**: Price leaves the area with strong, impulsive upward candles.
- **The Area**: The zone is a box covering the basing period.
- **Label**: "Buying pressure appeared here."

---

### Visual 2 — Demand Zone Below Midpoint
![DEM_02_DEMAND_BELOW_MIDPOINT](file:///C:/Users/User/.gemini/antigravity/brain/3961f568-404a-42a1-ae7d-f576c4d0ee6f/dem_02_demand_below_midpoint_v2_1777245267341.png)

This is a **better-positioned buy-side planning area**. By waiting for price to reach the lower half of the range map, you ensure that you are not chasing price in the middle of a choppy market.

---

### Visual 3 — Weak / Poor Demand Zone in the Middle
![DEM_03_POOR_DEMAND_MIDDLE](file:///C:/Users/User/.gemini/antigravity/brain/3961f568-404a-42a1-ae7d-f576c4d0ee6f/dem_03_poor_demand_middle_v2_1777245286033.png)

An **unclear middle area** demand zone is often ignored by the market. Buying here is risky because price is still in equilibrium and has not reached the "cheap" extremes of the range.

---

### Side-by-Side Comparison: Better vs Poor Location
![DEM_04_BETTER_VS_POOR_DEMAND](file:///C:/Users/User/.gemini/antigravity/brain/3961f568-404a-42a1-ae7d-f576c4d0ee6f/dem_04_better_vs_poor_demand_v2_1777245305228.png)

Comparing the two makes the choice obvious. We want to plan our buys where price is stretched to its lower limit, not where it is resting in the middle.

---

### Decision Rule
Apply this IF/THEN logic to your buy-side map:

- **IF** a demand zone is below the midpoint and had a strong previous reaction, it is an area worth watching.
- **IF** the zone is in the middle, be careful. This is often where "fake" demand traps beginners.
- **IF** price closes cleanly below the zone, the planning area is **invalidated**.

**Remember**: A demand zone is a planning area, not a guarantee of a reversal. Always wait for evidence that buyers are actually returning before making a final decision.

---

### Summary and Next Step
You now know how to map both Supply (above midpoint) and Demand (below midpoint). You have a professional "Value Map" for any range.

In the next module, **2.11 — Liquidity Targets**, we will look at the other side of the trade: how old highs and lows become logical targets for price to reach.
`;

const taskData = {
  contextPrompt: "You are looking for a clean buy-side planning area. Which demand zone is better positioned on your range map?",
  options: [
    {
      id: "opt_below",
      text: "A demand zone sitting in the Lower Half of the range.",
      feedback: "Correct! Buying at 'cheap' value (below midpoint) ensures you are better positioned and away from the messy middle.",
      isCorrect: true
    },
    {
      id: "opt_middle",
      text: "A demand zone sitting right in the Middle Area.",
      feedback: "Incorrect. The middle is equilibrium; buying here lacks a clear location advantage and is often unpredictable.",
      isCorrect: false
    }
  ]
};

async function main() {
  const result = await prisma.courseModule.update({
    where: { level_moduleNumber: { level: 2, moduleNumber: '2.10' } },
    data: {
      title: 'Demand Zones Below Midpoint',
      content: content.trim(),
      interactiveTaskType: 'type_b_scenario',
      interactiveTaskData: taskData
    }
  });
  console.log('Updated Module 2.10 with visuals:', result.title);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
