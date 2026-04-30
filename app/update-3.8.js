const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DIRECT_URL,
  ssl: { rejectUnauthorized: false }
});

const module3_8 = {
  title: "Entry Timing Checklist",
  objective: "Synthesize all Level 2 and Level 3 concepts into a strict binary checklist for consistent execution.",
  content: `# Entry Timing Checklist\n\nTrading is not about being smart; it's about being disciplined. To remove emotion from your decisions, you must use a **Pre-Trade Checklist**. If any item on the checklist is a "No," the trade is a "No-Go."\n\n## The Professional Filter\nBefore you even think about entering a trade, ask yourself these three questions:\n\n1. **Location (Level 2):** Is price currently at a high-probability zone (Midpoint, S/D, or Range edge)?\n2. **Confirmation (Level 3):** Has price shown a clear rejection, candle close, or retest at that zone?\n3. **Risk (Level 3):** Do I know exactly where my invalidation point is?\n\n![Pre-Trade Checklist](/C:/Users/User/.gemini/antigravity/brain/0afff2d3-b0b9-49a0-b9ff-c8e77ea5a7d9/entry_timing_checklist_3_8_v2_1777503644297.png)\n\n### The "Three Yes" Rule\nA professional trade only happens when all three questions are answered with a firm **Yes**. If price is in a zone but there is no confirmation, we wait. If there is confirmation but price is in the middle of nowhere, we skip. Discipline is the only way to achieve consistency.`,
  interactive_task_type: "choice_block",
  interactive_task_data: {
    question: "Price is sitting exactly at a Level 2 Support zone. It is currently moving with small, choppy candles and no clear rejection has formed yet. Should you enter?",
    options: [
      { id: "a", text: "Yes: Price is at the level, and that's good enough.", isCorrect: false, feedback: "Incorrect. You have Location (L2), but you are missing Confirmation (L3). Entering now is Prediction, not Professionalism." },
      { id: "b", text: "No: I have the location, but I must wait for a clear Level 3 confirmation signal.", isCorrect: true, feedback: "Correct! You must wait for the full checklist to be satisfied. No signal, no trade." }
    ]
  },
  skill_level: "intermediate"
};

async function updateModule() {
  try {
    console.log("Updating Module 3.8...");
    const result = await pool.query(
      `UPDATE course_modules 
       SET title = $1, objective = $2, content = $3, interactive_task_type = $4, interactive_task_data = $5, skill_level = $6
       WHERE level = 3 AND module_number = '3.8'
       RETURNING id`,
      [module3_8.title, module3_8.objective, module3_8.content, module3_8.interactive_task_type, module3_8.interactive_task_data, module3_8.skill_level]
    );

    if (result.rowCount === 0) {
      console.error("❌ Module 3.8 not found in database.");
    } else {
      console.log(`✅ Module 3.8 updated successfully. ID: ${result.rows[0].id}`);
    }
  } catch (err) {
    console.error("❌ Error updating module:", err);
  } finally {
    await pool.end();
  }
}

updateModule();
