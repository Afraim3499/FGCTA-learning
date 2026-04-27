
const { PrismaClient } = require('@prisma/client');
const { PrismaPg }     = require('@prisma/adapter-pg');
const { Pool }         = require('pg');
require('dotenv').config();

const pool = new Pool({ user:'postgres.oqaxpfldczldfmbuopbn',password:'Afraim9934?',host:'aws-1-ap-southeast-1.pooler.supabase.com',port:5432,database:'postgres',ssl:{rejectUnauthorized:false}});
const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });

async function main() {
  const user = await prisma.user.findFirst({ where: { email: 'tester@example.com' } });
  if (!user) {
    console.log('User not found');
    return;
  }
  const completions = await prisma.moduleCompletion.findMany({ 
    where: { userId: user.id }, 
    include: { module: true } 
  });
  console.log('Completions for tester@example.com:');
  completions.forEach(c => {
    console.log(`- [${c.module.level}.${c.module.moduleNumber}] ${c.module.title} (XP: ${c.xpAwarded})`);
  });
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); await pool.end(); });
