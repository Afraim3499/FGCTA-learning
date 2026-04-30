const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DIRECT_URL,
  ssl: { rejectUnauthorized: false }
});

const module3_6 = {
  title: "Inefficiency / Gap Basics",
  objective: "Identify price gaps created by extreme momentum and understand their role as 'magnetic' zones.",
  content: `# Inefficiency / Gap Basics\n\nWhen price moves with extreme velocity (Displacement), it often moves so fast that orders are not filled at every price level. This creates an **Inefficiency** or a **Gap** on the chart.\n\n## The Anatomy of a Gap\nA gap is identified using a 3-candle sequence:\n1. **Candle 1:** The starting point.\n2. **Candle 2:** The large, explosive move.\n3. **Candle 3:** The follow-through.\n\nIf the wick of Candle 1 and the wick of Candle 3 **do not overlap**, the empty space in between is the Gap.\n\n![Inefficiency Gap Basics](/C:/Users/User/.gemini/antigravity/brain/0afff2d3-b0b9-49a0-b9ff-c8e77ea5a7d9/inefficiency_gap_basics_3_6_1777503578875.png)\n\n### Why Gaps Matter\nGaps represent an imbalance between buyers and sellers. Because the market seeks efficiency, price will often return to "fill" these gaps later. \n\n**Warning:** A gap is not a trade signal by itself. It is a "Magnet." We wait for price to reach the gap, and then we look for Level 3 Confirmation (Module 3.2 & 3.3) to enter.`,
  interactive_task_type: "identify_block",
  interactive_task_data: {
    question: "Identify the empty 'Gap' (Inefficiency) space on this 3-candle sequence.",
    imageUrl: "/C:/Users/User/.gemini/antigravity/brain/0afff2d3-b0b9-49a0-b9ff-c8e77ea5a7d9/inefficiency_gap_basics_3_6_1777503578875.png",
    hotspots: [
      { id: "gap", x: 45, y: 50, width: 15, height: 20, isCorrect: true, feedback: "Correct! This empty space between the first and third candle is the inefficiency." },
      { id: "candle2", x: 40, y: 30, width: 25, height: 50, isCorrect: false, feedback: "This is the candle itself. The gap is the empty space next to it where wicks do not overlap." }
    ]
  },
  skill_level: "intermediate"
};

async function updateModule() {
  try {
    console.log("Updating Module 3.6...");
    const result = await pool.query(
      `UPDATE course_modules 
       SET title = $1, objective = $2, content = $3, interactive_task_type = $4, interactive_task_data = $5, skill_level = $6
       WHERE level = 3 AND module_number = '3.6'
       RETURNING id`,
      [module3_6.title, module3_6.objective, module3_6.content, module3_6.interactive_task_type, module3_6.interactive_task_data, module3_6.skill_level]
    );

    if (result.rowCount === 0) {
      console.error("❌ Module 3.6 not found in database.");
    } else {
      console.log(`✅ Module 3.6 updated successfully. ID: ${result.rows[0].id}`);
    }
  } catch (err) {
    console.error("❌ Error updating module:", err);
  } finally {
    await pool.end();
  }
}

updateModule();
