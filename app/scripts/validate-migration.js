const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

async function validate() {
  try {
    console.log("🧐 Validating Migration...");

    // 1. New Tables
    const newTables = ['training_scenarios', 'module_scenario_links', 'scenario_attempts'];
    for (const table of newTables) {
      const res = await pool.query(`SELECT COUNT(*) FROM ${table}`);
      console.log(`Table ${table} count: ${res.rows[0].count}`);
    }

    // 2. Existing Tables (Integrity Check)
    const existingTables = ['course_modules', 'strategies', 'users', 'user_progress'];
    for (const table of existingTables) {
      const res = await pool.query(`SELECT COUNT(*) FROM ${table}`);
      console.log(`Existing Table ${table} count: ${res.rows[0].count}`);
    }

    // 3. Index Check
    const indexRes = await pool.query(`
      SELECT indexname 
      FROM pg_indexes 
      WHERE indexname = 'scenario_attempt_one_active_per_context'
    `);
    console.log("Index 'scenario_attempt_one_active_per_context' exists:", indexRes.rowCount > 0);

    await pool.end();
  } catch (err) {
    console.error("❌ Validation failed:", err.message);
    process.exit(1);
  }
}

validate();
