const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DIRECT_URL,
  ssl: { rejectUnauthorized: false }
});

const module3_4 = {
  title: "Retest Logic",
  objective: "Learn to enter trades after a structural breakout by waiting for price to return to the scene of the crime.",
  content: `# Retest Logic\n\nOne of the most dangerous things a trader can do is "chase" a breakout. When price suddenly explodes through a level, beginners feel FOMO (Fear Of Missing Out) and buy at the peak. Professionals do the opposite: they wait for the **Retest**.\n\n## The Break-and-Retest Cycle\n1. **The Break:** Price moves through a Level 2 zone with strong momentum.\n2. **The Return:** Price slows down and "drifts" back to the level it just broke. This is the market testing if the old support has become new resistance (or vice versa).\n3. **The Continuation:** If the level holds on the retest, price continues in the original breakout direction. This is your high-probability entry point.\n\n![Retest Logic](/C:/Users/User/.gemini/antigravity/brain/0afff2d3-b0b9-49a0-b9ff-c8e77ea5a7d9/retest_logic_3_4_1777503499129.png)\n\n### Why it works\nRetests occur because the big players who missed the initial move wait for a better price to enter. It also allows the breakout to "breathe" and flush out weak hands. If you miss the break, **do not chase**. Wait for the retest or skip the trade entirely.`,
  interactive_task_type: "identify_block",
  interactive_task_data: {
    question: "Identify the high-probability 'Retest' entry point on this chart.",
    imageUrl: "/C:/Users/User/.gemini/antigravity/brain/0afff2d3-b0b9-49a0-b9ff-c8e77ea5a7d9/retest_logic_3_4_1777503499129.png",
    hotspots: [
      { id: "breakout", x: 20, y: 50, width: 20, height: 40, isCorrect: false, feedback: "This is the breakout. Chasing here is high risk. Wait for price to return." },
      { id: "retest", x: 55, y: 45, width: 20, height: 40, isCorrect: true, feedback: "Correct! This is the retest. Price has returned to the level to confirm it as new resistance." }
    ]
  },
  skill_level: "intermediate"
};

async function updateModule() {
  try {
    console.log("Updating Module 3.4...");
    const result = await pool.query(
      `UPDATE course_modules 
       SET title = $1, objective = $2, content = $3, interactive_task_type = $4, interactive_task_data = $5, skill_level = $6
       WHERE level = 3 AND module_number = '3.4'
       RETURNING id`,
      [module3_4.title, module3_4.objective, module3_4.content, module3_4.interactive_task_type, module3_4.interactive_task_data, module3_4.skill_level]
    );

    if (result.rowCount === 0) {
      console.error("❌ Module 3.4 not found in database.");
    } else {
      console.log(`✅ Module 3.4 updated successfully. ID: ${result.rows[0].id}`);
    }
  } catch (err) {
    console.error("❌ Error updating module:", err);
  } finally {
    await pool.end();
  }
}

updateModule();
