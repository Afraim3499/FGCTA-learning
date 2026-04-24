const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

async function checkMigrations() {
  try {
    const res = await pool.query("SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_name = '_prisma_migrations')");
    console.log("Table _prisma_migrations exists:", res.rows[0].exists);
    
    if (res.rows[0].exists) {
      const history = await pool.query("SELECT * FROM _prisma_migrations");
      console.log("Migration History Count:", history.rowCount);
    }
    
    await pool.end();
  } catch (err) {
    console.error("Error checking migrations:", err.message);
    process.exit(1);
  }
}

checkMigrations();
