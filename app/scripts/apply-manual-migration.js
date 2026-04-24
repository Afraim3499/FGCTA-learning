const fs = require('fs');
const { Pool } = require('pg');
require('dotenv').config();

const SQL_PATH = 'prisma/migrations/20260424014100_add_training_scenario_bridge_v1/migration.sql';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

async function applyMigration() {
  try {
    const sql = fs.readFileSync(SQL_PATH, 'utf8');
    console.log("🚀 Applying Migration SQL...");
    
    // Split by -- comments if needed, but pg can handle blocks.
    // However, enums need careful handling if they already exist (unlikely here).
    
    await pool.query(sql);
    console.log("✅ Migration applied successfully!");
    
    await pool.end();
  } catch (err) {
    console.error("❌ Migration failed:", err.message);
    if (err.detail) console.error("Detail:", err.detail);
    process.exit(1);
  }
}

applyMigration();
