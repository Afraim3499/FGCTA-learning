const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');

async function audit() {
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
      where: { level: 1 },
      orderBy: { orderIndex: 'asc' }
    });

    const test = await prisma.knowledgeTest.findUnique({
      where: { level: 1 }
    });

    console.log("DB_AUDIT_START");
    console.log(JSON.stringify({ modules, test }, null, 2));
    console.log("DB_AUDIT_END");

  } catch (error) {
    console.error("Audit Error:", error);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

audit();
