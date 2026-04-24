const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL.split('?')[0],
  ssl: {
    rejectUnauthorized: false
  }
});

async function exportData() {
  console.log("🚀 Connecting to Supabase via PG...");
  const client = await pool.connect();
  try {
    // Get all table names
    const tablesRes = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `);
    
    const tables = tablesRes.rows.map(r => r.table_name);
    const exportData = {};

    for (const table of tables) {
      console.log(`📦 Fetching ${table}...`);
      const res = await client.query(`SELECT * FROM "${table}"`);
      exportData[table] = res.rows;
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const fileName = `full_db_export_${timestamp}.json`;
    fs.writeFileSync(fileName, JSON.stringify(exportData, null, 2));
    console.log(`✅ Success! Data saved to ${fileName}`);
  } catch (err) {
    console.error("❌ Export failed:", err);
  } finally {
    client.release();
    await pool.end();
  }
}

exportData();
