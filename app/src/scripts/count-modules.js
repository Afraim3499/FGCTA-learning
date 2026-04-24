const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');

async function main() {
  const pool = new Pool({ 
    user: "postgres.oqaxpfldczldfmbuopbn",
    password: "Afraim9934?",
    host: "aws-1-ap-southeast-1.pooler.supabase.com",
    port: 5432,
    database: "postgres",
    ssl: { rejectUnauthorized: false }
  });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });

  try {
    const modules = await prisma.courseModule.findMany({
      select: { level: true, marketTrack: true }
    });

    const stats = {};
    modules.forEach(m => {
      const key = `Level ${m.level}`;
      if (!stats[key]) stats[key] = { total: 0, tracks: {} };
      stats[key].total++;
      stats[key].tracks[m.marketTrack] = (stats[key].tracks[m.marketTrack] || 0) + 1;
    });

    console.log(JSON.stringify(stats, null, 2));
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

main().catch(console.error);
