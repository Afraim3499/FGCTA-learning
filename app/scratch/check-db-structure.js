
const { PrismaClient } = require('@prisma/client');
const { PrismaPg }     = require('@prisma/adapter-pg');
const { Pool }         = require('pg');
require('dotenv').config();

const pool = new Pool({ user:'postgres.oqaxpfldczldfmbuopbn',password:'Afraim9934?',host:'aws-1-ap-southeast-1.pooler.supabase.com',port:5432,database:'postgres',ssl:{rejectUnauthorized:false}});
const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });

async function main() {
  const ms = await prisma.courseModule.findMany({ where: { level: 0 } });
  console.log('Total Count:', ms.length);
  console.log('Modules:', ms.map(m => m.moduleNumber).sort());
  
  const mission = await prisma.trainingScenario.findFirst({ where: { slug: 'l0-sync-order-entry-v1' } });
  console.log('\nMission 1 Metadata:');
  console.log(JSON.stringify(mission?.metadata, null, 2));
  console.log('Mission 1 XP:', mission?.xpAward);
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); await pool.end(); });
