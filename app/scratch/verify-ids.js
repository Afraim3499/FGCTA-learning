const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');

async function verify() {
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
    const l1Modules = await prisma.courseModule.findMany({
      where: { level: 1 },
      orderBy: { orderIndex: 'asc' },
      select: { id: true, level: true, moduleNumber: true, title: true, orderIndex: true }
    });

    const l2Modules = await prisma.courseModule.findMany({
      where: { 
        level: 2,
        moduleNumber: { in: ['2.5', '2.6'] }
      },
      orderBy: { orderIndex: 'asc' },
      select: { id: true, level: true, moduleNumber: true, title: true, orderIndex: true }
    });

    const l1Test = await prisma.knowledgeTest.findFirst({
      where: { level: 1 }
    });

    console.log(JSON.stringify({ l1Modules, l2Modules, l1Test }, null, 2));
  } catch (error) {
    console.error("Verification Error:", error);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

verify();
