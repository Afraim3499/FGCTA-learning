const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

async function verify() {
  try {
    const res = await pool.query(`
      SELECT a.*, s.slug as scenario_slug 
      FROM scenario_attempts a 
      JOIN training_scenarios s ON a.scenario_id = s.id 
      ORDER BY a.started_at DESC 
      LIMIT 1
    `);

    if (res.rows.length === 0) {
      console.log('NO_ATTEMPTS_FOUND');
      return;
    }

    const attempt = res.rows[0];
    const xpRes = await pool.query('SELECT * FROM xp_ledger_entries WHERE source_id = $1 AND source_type = $2', [attempt.id, 'scenario_attempt']);

    console.log('--- DATABASE VERIFICATION ---');
    console.log('Scenario Slug:', attempt.scenario_slug);
    console.log('Attempt ID:', attempt.id);
    console.log('Status:', attempt.status);
    console.log('Score:', attempt.score);
    console.log('Passed:', attempt.passed);
    console.log('XP Awarded:', attempt.xp_awarded);
    console.log('Progress Applied:', attempt.progress_applied);
    console.log('Grading Result Summary:', attempt.result_summary);

    if (xpRes.rows.length > 0) {
      console.log('XP Ledger Source Key:', xpRes.rows[0].source_id + ':' + xpRes.rows[0].source_type);
      console.log('XP Ledger Count for this attempt:', xpRes.rows.length);
    } else {
      console.log('XP Ledger: NOT_FOUND');
    }
  } catch (e) {
    console.error(e);
  } finally {
    await pool.end();
  }
}

verify();
