
const { PrismaClient } = require('@prisma/client');
const { PrismaPg }     = require('@prisma/adapter-pg');
const { Pool }         = require('pg');
require('dotenv').config();

const pool = new Pool({ user:'postgres.oqaxpfldczldfmbuopbn',password:'Afraim9934?',host:'aws-1-ap-southeast-1.pooler.supabase.com',port:5432,database:'postgres',ssl:{rejectUnauthorized:false}});
const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });

async function main() {
  const m05 = await prisma.courseModule.findFirst({ where: { level: 0, moduleNumber: '0.5' } });
  const scenario = await prisma.trainingScenario.findUnique({ where: { slug: 'l0-sync-order-entry-v1' } });
  
  if (!m05 || !scenario) {
    console.error('Module 0.5 or Scenario not found');
    return;
  }

  console.log(`Linking Mission 1 (${scenario.id}) to Module 0.5 (${m05.id})...`);
  
  await prisma.moduleScenarioLink.upsert({
    where: {
      moduleId_scenarioId: {
        moduleId: m05.id,
        scenarioId: scenario.id
      }
    },
    update: {},
    create: {
      moduleId: m05.id,
      scenarioId: scenario.id,
      requiredForProgress: true,
      sortOrder: 1
    }
  });
  
  console.log('✅ Mission 1 linked via ModuleScenarioLink.');
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); await pool.end(); });
