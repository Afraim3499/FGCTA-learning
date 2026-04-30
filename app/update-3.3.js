const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DIRECT_URL,
  ssl: { rejectUnauthorized: false }
});

const module3_3 = {
  title: "Rejection vs. Acceptance",
  objective: "Learn to distinguish between price failing a level and price preparing to break through it.",
  content: `# Rejection vs. Acceptance\n\nWhen price reaches a Level 2 zone, it doesn't just "hit and bounce." It tells a story of struggle between buyers and sellers. We classify this story into two categories: **Rejection** and **Acceptance**.\n\n## The Signatures\n\n### 1. Rejection (The Bounce)\nRejection is fast and aggressive. Price touches the zone and is immediately pushed away, leaving behind long wicks. This shows that the participants at that level have no interest in allowing price to stay there.\n\n### 2. Acceptance (The Build-up)\nAcceptance is slow and quiet. Instead of bouncing, price "hangs around" the level. Candle bodies stay tight against the zone without falling away. This is a warning sign! It shows that the pressure is building and a breakout is likely imminent.\n\n![Rejection vs Acceptance](/C:/Users/User/.gemini/antigravity/brain/0afff2d3-b0b9-49a0-b9ff-c8e77ea5a7d9/rejection_vs_acceptance_3_3_1777503464475.png)\n\n### The Takeaway\nIf you are looking for a reversal, you want to see **Rejection**. If you see price starting to "Accept" a level by consolidating right on top of it, stay out! The level is likely about to fail.`,
  interactive_task_type: "choice_block",
  interactive_task_data: {
    question: "You see price reach a resistance level and start consolidating with small candle bodies right under the line for 5 candles. What is price showing?",
    options: [
      { id: "a", text: "Rejection: Sellers are in control and price will drop soon.", isCorrect: false, feedback: "Incorrect. Consolidation at a level shows Acceptance, meaning the pressure is building to break through." },
      { id: "b", text: "Acceptance: Buyers are absorbing sell orders and preparing for a breakout.", isCorrect: true, feedback: "Correct! This is Acceptance. When price doesn't bounce immediately, the level is weakening." }
    ]
  },
  skill_level: "intermediate"
};

async function updateModule() {
  try {
    console.log("Updating Module 3.3...");
    const result = await pool.query(
      `UPDATE course_modules 
       SET title = $1, objective = $2, content = $3, interactive_task_type = $4, interactive_task_data = $5, skill_level = $6
       WHERE level = 3 AND module_number = '3.3'
       RETURNING id`,
      [module3_3.title, module3_3.objective, module3_3.content, module3_3.interactive_task_type, module3_3.interactive_task_data, module3_3.skill_level]
    );

    if (result.rowCount === 0) {
      console.error("❌ Module 3.3 not found in database.");
    } else {
      console.log(`✅ Module 3.3 updated successfully. ID: ${result.rows[0].id}`);
    }
  } catch (err) {
    console.error("❌ Error updating module:", err);
  } finally {
    await pool.end();
  }
}

updateModule();
