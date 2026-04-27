
const { PrismaClient } = require('@prisma/client');
const { PrismaPg }     = require('@prisma/adapter-pg');
const { Pool }         = require('pg');
require('dotenv').config();

const pool = new Pool({ user:'postgres.oqaxpfldczldfmbuopbn',password:'Afraim9934?',host:'aws-1-ap-southeast-1.pooler.supabase.com',port:5432,database:'postgres',ssl:{rejectUnauthorized:false}});
const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });

async function main() {
  const modules = await prisma.courseModule.findMany({
    where: { level: 0 },
    orderBy: { moduleNumber: 'asc' }
  });

  console.log('--- LEVEL 0 MODULE AUDIT ---');
  modules.forEach(m => {
    console.log(`\n[${m.moduleNumber}] ${m.title}`);
    console.log(`Objective: ${m.objective}`);
    console.log(`Content Length: ${m.content.length} chars`);
    console.log(`Interactive Type: ${m.interactiveTaskType || 'None'}`);
    
    // Check if content has images or blocks
    const images = (m.content.match(/!\[.*?\]\((.*?)\)/g) || []).length;
    const blocks = (m.content.match(/:::[a-z-]+/g) || []).length;
    console.log(`Images: ${images} | Blocks: ${blocks}`);
  });

  const missions = await prisma.trainingScenario.findMany({
    where: { level: 0 }
  });
  console.log('\n--- LEVEL 0 MISSIONS ---');
  missions.forEach(s => {
    console.log(`[${s.slug}] ${s.title} | Type: ${s.scenarioType}`);
  });
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); await pool.end(); });
