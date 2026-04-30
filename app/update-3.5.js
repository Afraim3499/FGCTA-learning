const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DIRECT_URL,
  ssl: { rejectUnauthorized: false }
});

const module3_5 = {
  title: "Momentum and Displacement",
  objective: "Identify where strong directional pressure exists by analyzing candle size and velocity.",
  content: `# Momentum and Displacement\n\nNot all price moves are created equal. To find high-probability setups, you must distinguish between "lazy" price action and "aggressive" price action. We call aggressive moves **Displacement**.\n\n## What is Displacement?\nDisplacement occurs when price moves rapidly in one direction, leaving behind large, solid candle bodies with very small wicks. It signals that one side (buyers or sellers) has completely overwhelmed the other.\n\n### The Characteristics\n- **Size Matters:** Large candle bodies compared to the recent history.\n- **Clarity:** Several candles of the same color in a row.\n- **Minimal Resistance:** Very short wicks, indicating price didn't struggle to move.\n\n![Momentum and Displacement](/C:/Users/User/.gemini/antigravity/brain/0afff2d3-b0b9-49a0-b9ff-c8e77ea5a7d9/momentum_and_displacement_3_5_1777503534992.png)\n\n### Displacement vs. Noise\nIf price is moving with small, overlapping candles and long wicks on both sides, that is **noise**. There is no clear winner. We only want to trade when we see clear Displacement, as it proves that a strong move is underway and likely to continue.`,
  interactive_task_type: "choice_block",
  interactive_task_data: {
    question: "You see a series of 5 candles: 3 small red, 2 small green, all with long wicks. Is this Displacement?",
    options: [
      { id: "a", text: "Yes: Price is moving and creating structure.", isCorrect: false, feedback: "Incorrect. Displacement requires large, clear, directional candles. Overlapping wicks signal indecision (noise)." },
      { id: "b", text: "No: This is choppy price action (noise) with no clear momentum.", isCorrect: true, feedback: "Correct! Displacement is unmistakable—it looks like a 'surge' of price, not a crawl." }
    ]
  },
  skill_level: "intermediate"
};

async function updateModule() {
  try {
    console.log("Updating Module 3.5...");
    const result = await pool.query(
      `UPDATE course_modules 
       SET title = $1, objective = $2, content = $3, interactive_task_type = $4, interactive_task_data = $5, skill_level = $6
       WHERE level = 3 AND module_number = '3.5'
       RETURNING id`,
      [module3_5.title, module3_5.objective, module3_5.content, module3_5.interactive_task_type, module3_5.interactive_task_data, module3_5.skill_level]
    );

    if (result.rowCount === 0) {
      console.error("❌ Module 3.5 not found in database.");
    } else {
      console.log(`✅ Module 3.5 updated successfully. ID: ${result.rows[0].id}`);
    }
  } catch (err) {
    console.error("❌ Error updating module:", err);
  } finally {
    await pool.end();
  }
}

updateModule();
