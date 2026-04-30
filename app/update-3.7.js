const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DIRECT_URL,
  ssl: { rejectUnauthorized: false }
});

const module3_7 = {
  title: "Invalidation Zones",
  objective: "Determine exactly where a trade idea is proven wrong before risk is ever taken.",
  content: `# Invalidation Zones\n\nEvery professional trade starts with a single question: **"Where am I wrong?"**\n\nMost beginners only think about how much they can win. Professionals only care about where the setup dies. The point where your trade idea is no longer valid is called the **Invalidation Zone**.\n\n## The Logic of Invalidation\nIf you are buying because price bounced off a Level 2 support zone, your "story" is that support will hold. If price breaks significantly below that support, your story is dead. You are wrong. You must exit.\n\n### Where to Place Invalidation\n1. **Below the Low:** In a long setup, place your invalidation line below the most recent swing low.\n2. **Above the High:** In a short setup, place it above the most recent swing high.\n3. **Give it Room:** Do not place it exactly on the line; give price a small "buffer" to account for noise.\n\n![Invalidation Zones](/C:/Users/User/.gemini/antigravity/brain/0afff2d3-b0b9-49a0-b9ff-c8e77ea5a7d9/invalidation_zones_3_7_1777503611381.png)\n\n### The Golden Rule\nIf you don't know where your invalidation point is, **do not enter the trade**. The Invalidation Zone is the anchor for your Stop-Loss and the foundation of your Risk Management.`,
  interactive_task_type: "markup_task",
  interactive_task_data: {
    question: "Draw a horizontal line at the logical Invalidation Zone for this long (Buy) setup.",
    imageUrl: "/C:/Users/User/.gemini/antigravity/brain/0afff2d3-b0b9-49a0-b9ff-c8e77ea5a7d9/invalidation_zones_3_7_1777503611381.png",
    correctZones: [
      { id: "invalidation", type: "horizontal_line", yMin: 70, yMax: 85, feedback: "Correct! The invalidation zone must be below the recent low to ensure the trade idea is truly dead if hit." }
    ]
  },
  skill_level: "intermediate"
};

async function updateModule() {
  try {
    console.log("Updating Module 3.7...");
    const result = await pool.query(
      `UPDATE course_modules 
       SET title = $1, objective = $2, content = $3, interactive_task_type = $4, interactive_task_data = $5, skill_level = $6
       WHERE level = 3 AND module_number = '3.7'
       RETURNING id`,
      [module3_7.title, module3_7.objective, module3_7.content, module3_7.interactive_task_type, module3_7.interactive_task_data, module3_7.skill_level]
    );

    if (result.rowCount === 0) {
      console.error("❌ Module 3.7 not found in database.");
    } else {
      console.log(`✅ Module 3.7 updated successfully. ID: ${result.rows[0].id}`);
    }
  } catch (err) {
    console.error("❌ Error updating module:", err);
  } finally {
    await pool.end();
  }
}

updateModule();
