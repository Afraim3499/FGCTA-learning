import { PrismaClient } from '@prisma/client';
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({ 
  user: "postgres.oqaxpfldczldfmbuopbn",
  password: "Afraim9934?",
  host: "aws-1-ap-southeast-1.pooler.supabase.com",
  port: 5432,
  database: "postgres",
  ssl: { rejectUnauthorized: false }
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const content = `
# 2.9 — Supply Zones Above Midpoint

### Skill Target
After this module, you should be able to identify a supply zone above the midpoint of a range. This helps you focus your planning on areas where price is truly expensive.

---

### Simple Meaning
A **Supply Zone** is simply an area on the chart where selling pressure previously overwhelmed buying pressure, causing price to drop. 

However, not every supply zone is equal. In this module, we focus on zones that sit in the **upper half** of a range (above the midpoint). By doing this, we avoid the "messy middle" where price is balanced and unpredictable. We only look for supply when price has stretched into the expensive upper boundary.

---

### Visual 1 — Basic Supply Zone
![SUP_01_BASIC_SUPPLY_ZONE](file:///C:/Users/User/.gemini/antigravity/brain/3961f568-404a-42a1-ae7d-f576c4d0ee6f/sup_01_basic_supply_zone_1777244424410.png)

### What to Notice
When identifying a supply zone, look for these signatures:
- **The Base**: Price pauses or moves sideways briefly (forming a "base").
- **The Departure**: Price leaves that base strongly with impulsive downward candles.
- **The Area**: The zone is a horizontal box covering the basing candles, not a single exact line.
- **Clarity**: It should be visually obvious. If you have to squint to see it, it's likely not a strong zone.

---

### Visual 2 — Supply Zone Above Midpoint
![SUP_02_SUPPLY_ABOVE_MIDPOINT](file:///C:/Users/User/.gemini/antigravity/brain/3961f568-404a-42a1-ae7d-f576c4d0ee6f/sup_02_supply_above_midpoint_1777244441348.png)

When we combine the **Range Map** (from 2.8) with **Supply Zones**, we gain a massive advantage. We ignore zones that are too low in the range and focus exclusively on those in the upper half. This ensures we are only planning to sell when price is at a premium value.

---

### Visual 3 — Weak / Poor Supply Zone in the Middle
![SUP_03_POOR_SUPPLY_MIDDLE](file:///C:/Users/User/.gemini/antigravity/brain/3961f568-404a-42a1-ae7d-f576c4d0ee6f/sup_03_poor_supply_middle_1777244459382.png)

Notice how a zone in the "messy middle" often gets ignored or sliced through by price. Because the market is in equilibrium at the midpoint, these zones have much less conviction. Chasing price in the middle is a common beginner mistake that leads to "getting chopped up."

---

### Side-by-Side Comparison: Better vs Poor Location
![SUP_04_BETTER_VS_POOR_SUPPLY](file:///C:/Users/User/.gemini/antigravity/brain/3961f568-404a-42a1-ae7d-f576c4d0ee6f/sup_04_better_vs_poor_supply_1777244477708.png)

Location is the filter. Even a "perfect looking" supply zone is low probability if it is sitting in the lower half of a range.

---

### Decision Rule
Use this checklist for your sell-side planning:

1.  **IS IT ABOVE MIDPOINT?**: IF the supply zone is in the upper half of the range, it is worth watching.
2.  **IS THE DEPARTURE STRONG?**: IF price previously fell away from this area with momentum, the zone is valid.
3.  **IS IT BROKEN?**: IF price closes cleanly above the zone, the idea is **invalidated**. Wait for a new range to form.

**A zone is a planning area, not a guarantee.** We use these areas to alert us that price has reached an interesting spot, but we always wait for new evidence before acting.

---

### Summary and Next Step
By filtering your supply zones to the upper half of the range, you have removed most of the "market noise" from your chart. 

In the next module, **2.10 — Demand Zones Below Midpoint**, we will apply this same logic to the lower half of the range to find high-probability buy zones.
`;

const taskData = {
  contextPrompt: "You are mapping a range. You find two supply zones. Zone A is sitting near the Range High (Upper Half). Zone B is sitting right on top of the Midpoint (Middle Area). Which one is more useful for a professional sell-side plan?",
  options: [
    {
      id: "opt_a",
      text: "Zone A (Above Midpoint)",
      feedback: "Correct! Selling at premium value (above midpoint) is a core principle of disciplined chart mapping. This avoids the messy middle.",
      isCorrect: true
    },
    {
      id: "opt_b",
      text: "Zone B (On Midpoint)",
      feedback: "Incorrect. The midpoint is equilibrium; selling here is like flipping a coin in the middle of a noisy range.",
      isCorrect: false
    }
  ]
};

async function main() {
  const result = await prisma.courseModule.update({
    where: { level_moduleNumber: { level: 2, moduleNumber: '2.9' } },
    data: {
      title: 'Supply Zones Above Midpoint',
      content: content.trim(),
      interactiveTaskType: 'type_b_scenario',
      interactiveTaskData: taskData
    }
  });
  console.log('Updated Module 2.9:', result.title);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
