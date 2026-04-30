const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DIRECT_URL,
  ssl: { rejectUnauthorized: false }
});

async function main() {
  // 1. All Level 3 modules - full raw data
  const { rows: modules } = await pool.query(`
    SELECT 
      id, level, module_number, title, order_index,
      interactive_task_type, logic_ids, strategy_families,
      content,
      interactive_task_data,
      LENGTH(content) - LENGTH(REPLACE(content, ' ', '')) + 1 AS word_estimate
    FROM course_modules 
    WHERE level = 3 
    ORDER BY order_index ASC
  `);
  console.log("=== MODULES ===");
  console.log(JSON.stringify(modules, null, 2));

  // 2. Check for duplicates
  const { rows: dups } = await pool.query(`
    SELECT module_number, COUNT(*) as count 
    FROM course_modules 
    WHERE level = 3 
    GROUP BY module_number 
    HAVING COUNT(*) > 1
  `);
  console.log("=== DUPLICATES ===");
  console.log(JSON.stringify(dups, null, 2));

  // 3. Total count
  const { rows: count } = await pool.query(`SELECT COUNT(*) FROM course_modules WHERE level = 3`);
  console.log("=== COUNT ===", count[0].count);

  // 4. Scenario links
  const { rows: links } = await pool.query(`
    SELECT msl.*, ts.slug, ts.title as scenario_title
    FROM module_scenario_links msl
    JOIN training_scenarios ts ON msl.scenario_id = ts.id
    JOIN course_modules cm ON msl.module_id = cm.id
    WHERE cm.level = 3
  `);
  console.log("=== SCENARIO LINKS ===");
  console.log(JSON.stringify(links, null, 2));

  // 5. Level 3 Scenario
  const { rows: scenarios } = await pool.query(`SELECT * FROM training_scenarios WHERE level = 3`);
  console.log("=== L3 SCENARIOS ===");
  console.log(JSON.stringify(scenarios, null, 2));

  // 6. Level 3 Knowledge Test
  const { rows: tests } = await pool.query(`SELECT * FROM knowledge_tests WHERE level = 3`);
  console.log("=== L3 KNOWLEDGE TEST ===");
  console.log(JSON.stringify(tests, null, 2));

  // 7. Levels 0/1/2 module counts (verify untouched)
  const { rows: otherLevels } = await pool.query(`
    SELECT level, COUNT(*) as count FROM course_modules 
    WHERE level IN (0, 1, 2) 
    GROUP BY level ORDER BY level
  `);
  console.log("=== OTHER LEVELS COUNT (should not have changed) ===");
  console.log(JSON.stringify(otherLevels, null, 2));

  // 8. Other knowledge tests (verify untouched)
  const { rows: otherTests } = await pool.query(`SELECT level, title, pass_threshold FROM knowledge_tests ORDER BY level`);
  console.log("=== ALL KNOWLEDGE TESTS ===");
  console.log(JSON.stringify(otherTests, null, 2));
}

main().catch(console.error).finally(() => pool.end());
