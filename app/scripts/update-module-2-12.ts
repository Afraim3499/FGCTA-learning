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
# 2.12 — Level 2 Map Review

### Skill Target
After this module, you should be able to build a simple chart map using range, midpoint, zones, and targets. This is the final step in your Level 2 Mastery before the final chart mapping mission.

---

### Simple Meaning
A **Chart Map** is not a crystal ball or a prediction of where price *must* go. Instead, it is a way to organize the visual information on your screen so that your decisions become clearer. 

By layering the tools you have learned in a specific order, you transform a messy chart into a professional workspace. This allows you to ignore the "noise" and focus only on areas that truly matter for planning.

---

### Visual 1 — The Raw Chart
![MAP_01_RAW_CHART](/images/academy/m2-12/MAP_01_RAW_CHART.png)

Before mapping, the chart can feel overwhelming. Price is moving, but without boundaries, it is easy to get distracted by every small candle movement.

---

### Visual 2 — Step 1: Range Boundaries
![MAP_02_RANGE_BOUNDARIES](/images/academy/m2-12/MAP_02_RANGE_BOUNDARIES.png)

The first step is always to identify the **Range High** and **Range Low**. This defines the "playing field" and tells you exactly where the boundaries of the current sideways movement are.

---

### Visual 3 — Step 2: The Midpoint
![MAP_03_MIDPOINT](/images/academy/m2-12/MAP_03_MIDPOINT.png)

Next, add the **Midpoint** (50% line). This immediately divides the chart into two halves: the **Upper Half** (Expensive) and the **Lower Half** (Cheap). It also identifies the **Messy Middle** which we want to avoid for new planning.

---

### Visual 4 — Step 3: Structural Zones
![MAP_04_ZONES](/images/academy/m2-12/MAP_04_ZONES.png)

Now, add your zones:
- **Supply Zones** in the upper half.
- **Demand Zones** in the lower half.
These are your planning areas. We look for price to reach these spots before we even consider making a decision.

---

### Visual 5 — Step 4: Target Areas
![MAP_05_TARGETS](/images/academy/m2-12/MAP_05_TARGETS.png)

Finally, mark **Target Areas** above obvious old highs or below obvious old lows. These are the clusters where many traders' orders sit, and they act as logical "destination areas" to watch if price leaves a zone.

---

### Visual 6 — The Complete Level 2 Map
![MAP_06_COMPLETE_MAP](/images/academy/m2-12/MAP_06_COMPLETE_MAP.png)

This is your completed map. You now have:
- Clear boundaries (High/Low).
- A value filter (Midpoint).
- Planning areas (Zones).
- Target areas (Highs/Lows).

Instead of chasing price, you are now **waiting** for price to reach your mapped areas.

---

### Decision Rule
Follow this checklist for every chart you map:

1.  **MAP FIRST**: Never make a decision on a raw chart. Draw the map first.
2.  **AVOID THE MIDDLE**: If price is stuck near the midpoint, wait.
3.  **ZONES ARE FOR PLANNING**: A zone is an area to watch for evidence, not a guarantee of a reversal.
4.  **IF UNCLEAR, WAIT**: If you cannot easily find a clear range or obvious zones, the market is too messy. Wait for a cleaner structure to form.

---

---

### Final Task: Chart Mapping Mission
You are now ready to put these steps into practice. In the final task of this module, you will be presented with a raw chart and asked to mark all the key Level 2 mapping elements.

**Summary**: Mapping is about discipline. It ensures you are only planning trades in areas of high visual clarity and high value.

---

### MISSION READY
**Capstone: Level 2 Chart Map Mission**
Mark all 8 elements on the mission chart to prove mastery of the Level 2 Mapping Protocol.

- Range High / Low / Midpoint
- Supply / Demand Zones
- Targets Above / Below
- No-Trade Middle

[Launch Mission](mission:m2-level-2-map-review-v1)
`;

const taskData = {
  contextPrompt: "You are starting a new chart map. Based on the professional workflow you just learned, which element should you identify and draw FIRST?",
  options: [
    {
      id: "opt_range",
      text: "Range High and Range Low boundaries.",
      feedback: "Correct! Defining the boundaries of the range is the foundation of every professional chart map. You must know the 'playing field' before you can layer other tools.",
      isCorrect: true
    },
    {
      id: "opt_zones",
      text: "Supply and Demand zones.",
      feedback: "Incorrect. While zones are important, you need the range boundaries and midpoint first to determine if those zones are in the correct 'Cheap' or 'Expensive' halves.",
      isCorrect: false
    }
  ]
};

async function main() {
  const result = await prisma.courseModule.update({
    where: { level_moduleNumber: { level: 2, moduleNumber: '2.12' } },
    data: {
      title: 'Level 2 Map Review',
      content: content.trim(),
      interactiveTaskType: 'type_b_scenario',
      interactiveTaskData: taskData
    }
  });
  console.log('Updated Module 2.12:', result.title);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
