import { Pool } from "pg";
import * as dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), ".env") });

async function testConnection() {
  const password = encodeURIComponent("Afraim9934?");
  const connectionString = `postgresql://postgres:${password}@db.oqaxpfldczldfmbuopbn.supabase.co:5432/postgres`;
  console.log("Testing ALTERNATIVE connection to:", connectionString.split("@")[1]);

  const pool = new Pool({ 
    connectionString,
    ssl: { rejectUnauthorized: false }
  });

  try {
    const client = await pool.connect();
    console.log("✅ Successfully connected to PostgreSQL");
    const res = await client.query("SELECT NOW()");
    console.log("Current Time:", res.rows[0]);
    client.release();
  } catch (err: any) {
    console.error("❌ Connection failed:", err.message);
  } finally {
    await pool.end();
  }
}

testConnection();
