const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DIRECT_URL,
  ssl: { rejectUnauthorized: false }
});

const module3_1 = {
  title: "Prediction vs. Confirmation",
  objective: "Transition from guessing where price will go to reacting to what price is actually doing.",
  content: `# Prediction vs. Confirmation\n\nThe biggest mistake beginner traders make is trying to **predict** the future. They place "Limit Orders" at a level, hoping it will hold, and are often surprised when price slices right through them.\n\nProfessional traders operate on **Confirmation**. We don't guess if a zone will hold; we wait for price to reach the zone and prove it is holding through a rejection or a candle close.\n\n## The Professional Mindset\n- **Prediction:** "I think price will bounce here, so I'll buy now."\n- **Confirmation:** "Price has reached my zone. I will wait for a sign of strength before I consider entering."\n\n![Confirmation vs Prediction](/C:/Users/User/.gemini/antigravity/brain/0afff2d3-b0b9-49a0-b9ff-c8e77ea5a7d9/prediction_vs_confirmation_3_1_1777503392078.png)\n\n### Why Wait?\nWaiting for confirmation might mean you get a slightly worse entry price, but it drastically increases your **probability of success**. You are no longer trading a "maybe"—you are trading a confirmed reaction.`,
  interactive_task_type: "choice_block",
  interactive_task_data: {
    question: "Which of these traders is following a Professional Confirmation approach?",
    options: [
      { id: "a", text: "Trader A: Sets a Buy Limit order at a support level before price arrives.", isCorrect: false, feedback: "Incorrect. This is prediction. You are assuming the level will hold without proof." },
      { id: "b", text: "Trader B: Sees price hit support, waits for a green rejection candle, then enters.", isCorrect: true, feedback: "Correct! This is confirmation. You are reacting to evidence that the level is holding." }
    ]
  },
  skill_level: "intermediate"
};

async function updateModule() {
  try {
    console.log("Updating Module 3.1...");
    const result = await pool.query(
      `UPDATE course_modules 
       SET title = $1, objective = $2, content = $3, interactive_task_type = $4, interactive_task_data = $5, skill_level = $6
       WHERE level = 3 AND module_number = '3.1'
       RETURNING id`,
      [module3_1.title, module3_1.objective, module3_1.content, module3_1.interactive_task_type, module3_1.interactive_task_data, module3_1.skill_level]
    );

    if (result.rowCount === 0) {
      console.error("❌ Module 3.1 not found in database.");
    } else {
      console.log(`✅ Module 3.1 updated successfully. ID: ${result.rows[0].id}`);
    }
  } catch (err) {
    console.error("❌ Error updating module:", err);
  } finally {
    await pool.end();
  }
}

updateModule();
