const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DIRECT_URL,
  ssl: { rejectUnauthorized: false }
});

async function main() {
  const { rows: modules } = await pool.query(`SELECT * FROM course_modules WHERE level = 3 ORDER BY order_index ASC`);
  console.log("=== MODULES ===");
  console.log(JSON.stringify(modules, null, 2));

  const { rows: scenarios } = await pool.query(`SELECT * FROM training_scenarios WHERE level = 3`);
  console.log("=== SCENARIOS ===");
  console.log(JSON.stringify(scenarios, null, 2));

  const { rows: tests } = await pool.query(`SELECT * FROM knowledge_tests WHERE level = 3`);
  console.log("=== KNOWLEDGE TEST ===");
  console.log(JSON.stringify(tests, null, 2));
}

main().catch(console.error).finally(() => pool.end());
