const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DIRECT_URL,
  ssl: { rejectUnauthorized: false }
});

const module3_2 = {
  title: "Candle Close Confirmation",
  objective: "Understand why the closing price is the only price that matters for confirmation.",
  content: `# Candle Close Confirmation\n\nPrice is a liar until the candle closes. During the formation of a candle, price may spike through your Level 2 zones, creating the illusion of a breakout or a rejection. This is often called "noise."\n\nProfessional traders wait for the **Candle Close**. The close represents the final agreement between buyers and sellers for that specific timeframe.\n\n## Wicks vs. Bodies\n- **The Wick (Shadow):** Represents where price *was* during the session. It shows temporary pressure but no lasting commitment.\n- **The Body:** Represents where price *settled*. A body closing outside of a zone indicates a structural shift; a body closing inside after a wick spike indicates a rejection.\n\n![Candle Close Confirmation](/C:/Users/User/.gemini/antigravity/brain/0afff2d3-b0b9-49a0-b9ff-c8e77ea5a7d9/candle_close_confirmation_3_2_1777503431030.png)\n\n### The Rule of Patience\nNever enter a trade based on a candle that is still moving. Wait for the "Clock to hit Zero." If you are trading the 1-hour chart, you wait for the 1-hour close. No exceptions.`,
  interactive_task_type: "identify_block",
  interactive_task_data: {
    question: "Identify the candle that confirms a REJECTION of the support level.",
    imageUrl: "/C:/Users/User/.gemini/antigravity/brain/0afff2d3-b0b9-49a0-b9ff-c8e77ea5a7d9/candle_close_confirmation_3_2_1777503431030.png",
    hotspots: [
      { id: "rejection", x: 30, y: 50, width: 20, height: 40, isCorrect: true, feedback: "Correct! The long wick below the level with a body closing above confirms rejection." },
      { id: "breakout", x: 70, y: 70, width: 20, height: 40, isCorrect: false, feedback: "Incorrect. This candle closed its body below the level, indicating acceptance/breakout, not rejection." }
    ]
  },
  skill_level: "intermediate"
};

async function updateModule() {
  try {
    console.log("Updating Module 3.2...");
    const result = await pool.query(
      `UPDATE course_modules 
       SET title = $1, objective = $2, content = $3, interactive_task_type = $4, interactive_task_data = $5, skill_level = $6
       WHERE level = 3 AND module_number = '3.2'
       RETURNING id`,
      [module3_2.title, module3_2.objective, module3_2.content, module3_2.interactive_task_type, module3_2.interactive_task_data, module3_2.skill_level]
    );

    if (result.rowCount === 0) {
      console.error("❌ Module 3.2 not found in database.");
    } else {
      console.log(`✅ Module 3.2 updated successfully. ID: ${result.rows[0].id}`);
    }
  } catch (err) {
    console.error("❌ Error updating module:", err);
  } finally {
    await pool.end();
  }
}

updateModule();
