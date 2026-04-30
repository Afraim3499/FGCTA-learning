const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DIRECT_URL,
  ssl: { rejectUnauthorized: false }
});

const module3_9 = {
  title: "Wait / Enter / Skip Decisions",
  objective: "Practice the 3-step checklist in various market conditions to develop rapid decision-making skills.",
  content: `# Wait / Enter / Skip Decisions\n\nIn the heat of the market, you don't have time to overthink. You must train your brain to quickly categorize every chart into one of three buckets: **Wait**, **Enter**, or **Skip**.\n\n## The Decision Matrix\n\n### 1. ENTER (The Green Bucket)\n- **Criteria:** Price is at a Level 2 Zone AND Level 3 Confirmation has formed AND Invalidation is defined.\n- **Action:** Execute the trade immediately.\n\n### 2. WAIT (The Yellow Bucket)\n- **Criteria:** Price is at a Level 2 Zone but Level 3 Confirmation has NOT formed yet.\n- **Action:** Set an alert and wait for the candle close.\n\n### 3. SKIP (The Red Bucket)\n- **Criteria:** Price is in "No Man's Land" (no zone) OR Invalidation point has been hit OR the setup is messy.\n- **Action:** Close the chart and look for a different instrument.\n\n![Decision Matrix](/C:/Users/User/.gemini/antigravity/brain/0afff2d3-b0b9-49a0-b9ff-c8e77ea5a7d9/wait_enter_skip_decisions_3_9_v2_1777503680066.png)\n\n### The "No-Trade" Trade\nMost traders fail because they feel they *must* be in a trade to be productive. Professionals know that **Skipping** a bad trade is just as profitable as winning a good one, because it preserves your capital for the next high-probability setup.`,
  interactive_task_type: "choice_block",
  interactive_task_data: {
    question: "You open a chart and see price is trending strongly, but it is currently right in the middle of two Level 2 zones. There is no clear support or resistance nearby. What is your decision?",
    options: [
      { id: "a", text: "Wait: I'll wait here to see if a new zone forms.", isCorrect: false, feedback: "Incorrect. Waiting 'in the middle' is a waste of time. This is a Skip." },
      { id: "b", text: "Enter: The trend is strong, so I'll just jump in.", isCorrect: false, feedback: "Incorrect. Never enter without a Level 2 Zone location. This is chasing." },
      { id: "c", text: "Skip: Price is not at a Level 2 Zone. This instrument is currently untradable.", isCorrect: true, feedback: "Correct! If there is no Location (L2), there is no trade. Close the chart and move on." }
    ]
  },
  skill_level: "intermediate"
};

async function updateModule() {
  try {
    console.log("Updating Module 3.9...");
    const result = await pool.query(
      `UPDATE course_modules 
       SET title = $1, objective = $2, content = $3, interactive_task_type = $4, interactive_task_data = $5, skill_level = $6
       WHERE level = 3 AND module_number = '3.9'
       RETURNING id`,
      [module3_9.title, module3_9.objective, module3_9.content, module3_9.interactive_task_type, module3_9.interactive_task_data, module3_9.skill_level]
    );

    if (result.rowCount === 0) {
      console.error("❌ Module 3.9 not found in database.");
    } else {
      console.log(`✅ Module 3.9 updated successfully. ID: ${result.rows[0].id}`);
    }
  } catch (err) {
    console.error("❌ Error updating module:", err);
  } finally {
    await pool.end();
  }
}

updateModule();
