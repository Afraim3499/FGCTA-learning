const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DIRECT_URL,
  ssl: { rejectUnauthorized: false }
});

async function main() {
  try {
    console.log("Seeding Phase 10: Final Gate...");

    // 1. Update Module 3.10 to be the Scenario Gate
    const module3_10 = {
      title: "Level 3 Final Scenario",
      objective: "Demonstrate your ability to apply the Pre-Trade Checklist in a multi-step decision scenario.",
      content: `# Level 3 Final Scenario\n\nYou have completed the Level 3 curriculum. It is time to prove your discipline.\n\nIn this final scenario, you will be presented with a sequence of chart events. At each step, you must use your **Pre-Trade Checklist** to decide whether to **Wait**, **Enter**, or **Skip**.\n\n### Rules\n- **No Terminal:** This is a decision-only scenario.\n- **Passing Grade:** You must achieve at least 80% accuracy to pass.\n- **XP:** Successful completion awards 100 XP and completes Level 3.`,
      interactive_task_type: "scenario_link",
      interactive_task_data: {
        scenarioSlug: "level-3-final-gate",
        passThreshold: 80
      },
      skill_level: "intermediate"
    };

    await pool.query(
      `UPDATE course_modules 
       SET title = $1, objective = $2, content = $3, interactive_task_type = $4, interactive_task_data = $5, skill_level = $6
       WHERE level = 3 AND module_number = '3.10'`,
      [module3_10.title, module3_10.objective, module3_10.content, module3_10.interactive_task_type, module3_10.interactive_task_data, module3_10.skill_level]
    );
    console.log("✅ Module 3.10 updated.");

    // 2. Seed the Training Scenario
    const scenario = {
      slug: "level-3-final-gate",
      title: "Level 3 Entry Logic Assessment",
      description: "Step through 5 chart situations and apply the Pre-Trade Checklist.",
      scenario_type: "structure_annotation", // Using this type for decision-making logic
      status: "active",
      level: 3,
      instrument: "EUR/USD",
      timeframe: "1H",
      candle_source_type: "curated",
      prompt: "Use your Pre-Trade Checklist to decide the correct action at each step.",
      expected_actions: [
        { step: 1, action: "WAIT", justification: "Price is at a Level 2 Zone but no rejection candle has formed yet." },
        { step: 2, action: "ENTER", justification: "Price has produced a clear Level 3 rejection candle at the Level 2 Zone." },
        { step: 3, action: "SKIP", justification: "Price has hit the Invalidation Zone. The trade idea is dead." },
        { step: 4, action: "SKIP", justification: "Price is in the middle of a range with no Level 2 zone nearby." },
        { step: 5, action: "ENTER", justification: "Price has successfully retested the broken level and shown confirmation." }
      ],
      grading_rubric: {
        perfect_score: 100,
        passing_score: 80,
        deduction_per_mistake: 20
      },
      xp_award: 100,
      metadata: {
        imageUrl: "/C:/Users/User/.gemini/antigravity/brain/0afff2d3-b0b9-49a0-b9ff-c8e77ea5a7d9/level_3_final_scenario_3_10_v2_1777503710969.png"
      }
    };

    // Upsert scenario (using slug as unique key)
    await pool.query(
      `INSERT INTO training_scenarios (slug, title, description, scenario_type, status, level, instrument, timeframe, candle_source_type, prompt, expected_actions, grading_rubric, xp_award, metadata)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
       ON CONFLICT (slug) DO UPDATE SET
       title = EXCLUDED.title, description = EXCLUDED.description, scenario_type = EXCLUDED.scenario_type, status = EXCLUDED.status, level = EXCLUDED.level, instrument = EXCLUDED.instrument, timeframe = EXCLUDED.timeframe, candle_source_type = EXCLUDED.candle_source_type, prompt = EXCLUDED.prompt, expected_actions = EXCLUDED.expected_actions, grading_rubric = EXCLUDED.grading_rubric, xp_award = EXCLUDED.xp_award, metadata = EXCLUDED.metadata`,
      [scenario.slug, scenario.title, scenario.description, scenario.scenario_type, scenario.status, scenario.level, scenario.instrument, scenario.timeframe, scenario.candle_source_type, scenario.prompt, JSON.stringify(scenario.expected_actions), JSON.stringify(scenario.grading_rubric), scenario.xp_award, JSON.stringify(scenario.metadata)]
    );
    console.log("✅ Training Scenario seeded.");

    // 3. Seed Knowledge Test (Preview Only per instructions)
    const test = {
      level: 3,
      title: "Level 3: Entry Logic & Confirmation",
      pass_threshold: 80,
      time_limit_min: 20,
      questions_per_attempt: 10,
      questions: [
        {
          id: "q3_1",
          question: "What is the primary difference between Prediction and Confirmation?",
          options: ["Prediction is safer, Confirmation is riskier", "Prediction assumes a level will hold, Confirmation waits for proof", "There is no difference", "Confirmation is only for professional terminals"],
          correctIndex: 1,
          explanation: "Confirmation requires waiting for a price reaction (rejection or close) before entering."
        },
        {
          id: "q3_2",
          question: "Why is the Candle Close important for timing?",
          options: ["It gives you a better price", "It represents the final agreement of that session", "It is required by the broker", "It makes the spread smaller"],
          correctIndex: 1,
          explanation: "The close filters out 'noise' and spikes that happen during the candle's formation."
        }
        // ... 8 more questions would follow in full seed
      ]
    };

    await pool.query(
      `INSERT INTO knowledge_tests (level, title, pass_threshold, time_limit_min, questions_per_attempt, questions)
       VALUES ($1, $2, $3, $4, $5, $6)
       ON CONFLICT (level) DO UPDATE SET
       title = EXCLUDED.title, pass_threshold = EXCLUDED.pass_threshold, time_limit_min = EXCLUDED.time_limit_min, questions_per_attempt = EXCLUDED.questions_per_attempt, questions = EXCLUDED.questions`,
      [test.level, test.title, test.pass_threshold, test.time_limit_min, test.questions_per_attempt, JSON.stringify(test.questions)]
    );
    console.log("✅ Knowledge Test seeded.");

  } catch (err) {
    console.error("❌ Error in Phase 10:", err);
  } finally {
    await pool.end();
  }
}

main();
