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
# 2.7 — Range vs Expansion

### Skill Target
After this module, you should be able to tell whether price is stuck inside a range or expanding away from it. This is the first step in building a reliable chart map.

---

### Simple Meaning
To navigate a chart effectively, you must first identify the current "environment" or speed of the market. Most beginners make the mistake of looking for a trend on every single chart they open. In reality, markets spend a vast majority of their time in a state of consolidation. Price generally exists in one of two primary states:

1.  **Range (Consolidation)**: Price is moving sideways, bouncing between a clear ceiling (Range High) and floor (Range Low). During this phase, the market is "contracting" or building up energy. It is essentially waiting for a reason to move.
2.  **Expansion (Impulse)**: Price leaves an area of consolidation with stronger movement and momentum. During this phase, the market is "stretching" or seeking a new area of value. This is where the most significant directional moves occur.

Understanding which phase you are in is critical because a range requires different rules than an expansion. In a range, we expect price to revert to the middle; in an expansion, we expect price to continue away.

---

### Visual 1 — Clean Range
![REX_01_CLEAN_RANGE](file:///C:/Users/User/.gemini/antigravity/brain/3961f568-404a-42a1-ae7d-f576c4d0ee6f/rex_01_clean_range_1777243702732.png)

### What to Notice in a Range
When price is ranging, it behaves like a ball bouncing between two invisible walls. Look for these specific signatures:
- **Repeated Rejections**: Price touches the same general price levels at the top and bottom multiple times. Each touch confirms the boundary of the range.
- **Magnetism of the Middle**: Instead of breaking out and staying out, price constantly gravitates back to the center of the range after touching the edges.
- **Lack of Momentum**: You will see a mix of red and green candles of similar sizes. No single side is "winning" the battle for control.
- **Low Follow-Through**: Even if a candle looks strong, the next candle often reverses it. This is why we avoid forcing a directional bias when price is clearly rotating sideways.

---

### Visual 2 — Clean Expansion
![REX_02_CLEAN_EXPANSION](file:///C:/Users/User/.gemini/antigravity/brain/3961f568-404a-42a1-ae7d-f576c4d0ee6f/rex_02_clean_expansion_1777243720068.png)

Expansion is the opposite of a range. It occurs when one side (buyers or sellers) finally overwhelms the other, forcing price to seek a new level. 
- **Signatures of Expansion**: Notice the change in candle size—expansion candles are typically larger and more "impulsive." 
- **The Departure**: Unlike a range, price does not immediately return to the previous area. It stays outside the boundary and continues to move vertically.

---

### Side-by-Side Comparison: Range vs Expansion
![REX_03_RANGE_VS_EXPANSION_COMPARE](file:///C:/Users/User/.gemini/antigravity/brain/3961f568-404a-42a1-ae7d-f576c4d0ee6f/rex_03_range_vs_expansion_compare_1777243737549.png)

Separating these two in your mind is the key to patience. Ranges are for waiting; expansions are for watching for the next setup.

---

### Trap Visual — Fake Expansion
![REX_04_FAKE_EXPANSION_TRAP](file:///C:/Users/User/.gemini/antigravity/brain/3961f568-404a-42a1-ae7d-f576c4d0ee6f/rex_04_fake_expansion_trap_1777243755269.png)

**One sharp candle is not always real expansion.**
This is a common "trap" for beginner traders. Price will often "peek" above a range high or below a range low with a single aggressive candle. If price does not continue higher and instead closes back inside the range, the expansion has failed. 

This is often a sign of "liquidity raiding," where the market seeks just enough orders to fuel a move in the opposite direction. Professional traders wait for evidence of **continuation** (closes outside the range) rather than chasing the first impulsive candle they see.

---

### Decision Rule: When to Act
Use these simple rules to guide your chart mapping and keep your discipline:

1.  **IDENTIFY THE RANGE**: IF price keeps rejecting the same high or low levels, treat the environment as a range. Do not guess the breakout.
2.  **LOOK FOR CONTINUATION**: IF price closes outside the range boundary and continues to move away with size, an expansion phase is likely confirmed.
3.  **RESPECT THE RETURN**: IF price breaks out but quickly returns and closes back inside the range, **wait**. The breakout was likely a trap, and no directional conviction has been proven yet.

### Summary and Next Step
By separating Range from Expansion, you avoid the most common mistake: overtrading in "noisy" sideways markets. 

In the next module, **2.8 — Measuring the Range**, we will learn how to use a simple tool to find the **Midpoint** of a range. This helps us identify where the "fair value" is and where the high-probability zones truly begin.
`;

const taskData = {
  contextPrompt: "Analyze the chart behavior shown. Is this market currently in a range, expansion, or a fake expansion trap?",
  options: [
    {
      id: "opt_range",
      text: "Range",
      feedback: "Incorrect. While there was a range on the left, price has clearly broken out with momentum and is continuing away.",
      isCorrect: false
    },
    {
      id: "opt_expansion",
      text: "Expansion",
      feedback: "Correct! Price has left the previous range with clear momentum and follow-through, showing an expansion phase.",
      isCorrect: true
    },
    {
      id: "opt_fake",
      text: "Fake Expansion",
      feedback: "Incorrect. A fake expansion would have returned back inside the range quickly. This move is continuing away.",
      isCorrect: false
    }
  ]
};

async function main() {
  const result = await prisma.courseModule.update({
    where: { level_moduleNumber: { level: 2, moduleNumber: '2.7' } },
    data: {
      title: 'Range vs Expansion',
      content: content.trim(),
      interactiveTaskType: 'type_b_scenario',
      interactiveTaskData: taskData
    }
  });
  console.log('Updated Module 2.7:', result.title);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
