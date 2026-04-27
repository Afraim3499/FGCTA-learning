const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');
const fs = require('fs');

async function preflight() {
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
    // 1. Full Inventory
    const modules = await prisma.courseModule.findMany({
      where: { level: 1 },
      orderBy: { orderIndex: 'asc' },
      include: { scenarioLinks: true }
    });

    // 2. Knowledge Test
    const test = await prisma.knowledgeTest.findFirst({
      where: { level: 1 }
    });

    const inventory = modules.map(m => ({
      module_number: m.moduleNumber,
      id: m.id,
      title: m.title,
      order_index: m.orderIndex,
      word_count: m.content.split(/\s+/).length,
      objective: m.objective,
      interactiveTaskType: m.interactiveTaskType,
      logicIdsCount: m.logicIds ? m.logicIds.length : 0,
      strategyFamiliesCount: m.strategyFamilies ? m.strategyFamilies.length : 0,
      scenarioLinksCount: m.scenarioLinks ? m.scenarioLinks.length : 0
    }));

    console.log("INVENTORY_START");
    console.log(JSON.stringify(inventory, null, 2));
    console.log("INVENTORY_END");

    // 3. Backup
    const backupDir = 'scratch/backups';
    if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });
    
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const moduleBackupPath = `${backupDir}/l1-modules-backup-${timestamp}.json`;
    const testBackupPath = `${backupDir}/l1-test-backup-${timestamp}.json`;

    fs.writeFileSync(moduleBackupPath, JSON.stringify(modules, null, 2));
    fs.writeFileSync(testBackupPath, JSON.stringify(test, null, 2));

    console.log(`BACKUP_CREATED: ${moduleBackupPath}`);
    console.log(`BACKUP_CREATED: ${testBackupPath}`);

  } catch (error) {
    console.error("Preflight Error:", error);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

preflight();
