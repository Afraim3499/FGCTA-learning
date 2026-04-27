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
# 2.8 — Measuring the Range

### Skill Target
After this module, you should be able to mark the range high, range low, and midpoint. This allows you to orient yourself on the chart and avoid low-probability zones.

---

### Simple Meaning
Once you have identified that price is in a range, the next step is to measure it. Think of a range like a building:
- **Range High**: The ceiling or upper boundary where price has repeatedly struggled to break higher.
- **Range Low**: The floor or lower boundary where price has consistently found support.
- **Midpoint**: The halfway point (50% line) between the high and low.

The midpoint is one of the most powerful tools for chart judgment. It helps you separate the **upper value area** from the **lower value area**. Without this line, you are essentially guessing where the "middle" is.

---

### Visual 1 — Range High and Range Low
![RNG_01_RANGE_BOUNDARIES](file:///C:/Users/User/.gemini/antigravity/brain/3961f568-404a-42a1-ae7d-f576c4d0ee6f/rng_01_range_boundaries_1777244020352.png)

### What to Notice
When marking your boundaries, look for these signatures:
- **Repeated Rejection**: Price doesn't just touch a level once; it returns to it and fails to pass multiple times.
- **Obvious Extremes**: Do not force a range boundary where it doesn't exist. The high and low should be the most obvious turning points on the chart.
- **Magnetism**: Notice how price leaves one boundary and eventually returns toward the other.

---

### Visual 2 — The Midpoint (50% Line)
![RNG_02_MIDPOINT_LINE](file:///C:/Users/User/.gemini/antigravity/brain/3961f568-404a-42a1-ae7d-f576c4d0ee6f/rng_02_midpoint_line_1777244037733.png)

The midpoint is the "fair value" of the range. It is the equilibrium where buyers and sellers are most balanced. When price is at the midpoint, it has no clear advantage.

---

### Visual 3 — Upper Half vs Lower Half
![RNG_03_UPPER_LOWER_HALF](file:///C:/Users/User/.gemini/antigravity/brain/3961f568-404a-42a1-ae7d-f576c4d0ee6f/rng_03_upper_lower_half_1777244071897.png)

By marking the midpoint, you now have a map:
- **Upper Half**: This is where price is considered relatively expensive within the current range.
- **Lower Half**: This is where price is considered relatively cheap within the current range.

---

### Trap Visual — Trading in the Middle
![RNG_04_MIDDLE_TRAP](file:///C:/Users/User/.gemini/antigravity/brain/3961f568-404a-42a1-ae7d-f576c4d0ee6f/rng_04_middle_trap_1777244096899.png)

The middle of the range is often the most frustrating area for new traders. Because price is "balanced" here, it often becomes choppy and unpredictable. Decisions made in the middle are often "50/50" coin flips. Professionals wait for price to reach the extremes (the upper or lower thirds) before looking for clarity.

---

### Decision Rule
Use the midpoint as a map to guide your patience:

- **IF** price is near the middle, **wait**. There is no clear advantage.
- **IF** price is in the upper half, do not blindly buy. You are in an area of high value where sellers are likely to appear.
- **IF** price is in the lower half, do not blindly sell. You are in an area of low value where buyers are likely to appear.

The midpoint is a tool for orientation, not a signal by itself. It tells you **where** you are, not necessarily what to do.

---

### Summary and Next Step
By measuring the range and marking the midpoint, you have created a basic "value map" of the chart. 

In the next modules, **2.9** and **2.10**, we will combine this map with structure to find **Supply Zones** above the midpoint and **Demand Zones** below the midpoint. This is where high-probability chart judgment truly begins.
`;

const taskData = {
  contextPrompt: "Based on the mapping rules you just learned, which area of the range usually provides the LEAST clear decision-making and should often be avoided?",
  options: [
    {
      id: "opt_high",
      text: "Near the Range High",
      feedback: "Incorrect. The extremes of a range (High/Low) are actually where we look for the most clarity.",
      isCorrect: false
    },
    {
      id: "opt_middle",
      text: "Near the Midpoint / Middle Area",
      feedback: "Correct! The middle is the equilibrium point where price is balanced and often choppy. Professionals avoid making high-stakes decisions here.",
      isCorrect: true
    },
    {
      id: "opt_low",
      text: "Near the Range Low",
      feedback: "Incorrect. The Range Low is a key boundary where we watch for clear rejections or expansions.",
      isCorrect: false
    }
  ]
};

async function main() {
  const result = await prisma.courseModule.update({
    where: { level_moduleNumber: { level: 2, moduleNumber: '2.8' } },
    data: {
      title: 'Measuring the Range',
      content: content.trim(),
      interactiveTaskType: 'type_b_scenario',
      interactiveTaskData: taskData
    }
  });
  console.log('Updated Module 2.8:', result.title);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
