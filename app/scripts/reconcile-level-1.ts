import { PrismaClient } from '@prisma/client';
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

function createPrismaClient() {
  const pool = new Pool({ 
    user: "postgres.oqaxpfldczldfmbuopbn",
    password: "Rizwan99636?",
    host: "aws-1-ap-southeast-1.pooler.supabase.com",
    port: 5432,
    database: "postgres",
    ssl: { rejectUnauthorized: false }
  });
  const adapter = new PrismaPg(pool);
  return new PrismaClient({ adapter });
}

const prisma = createPrismaClient();

async function main() {
  console.log('--- BLOCKER 1 & 2: Level 1 Modules ---');
  const level1Modules = await prisma.courseModule.findMany({
    where: { level: 1 },
    orderBy: { orderIndex: 'asc' },
    select: {
      id: true,
      level: true,
      moduleNumber: true,
      title: true,
      orderIndex: true
    }
  });
  console.table(level1Modules);

  console.log('\n--- Checking for duplicates in module_number (Level 1) ---');
  const duplicates = await prisma.$queryRaw`
    SELECT module_number, COUNT(*) 
    FROM course_modules 
    WHERE level = 1 
    GROUP BY module_number 
    HAVING COUNT(*) > 1
  `;
  console.log(duplicates);

  console.log('\n--- Searching for previous IDs in DB ---');
  const previousIds = [
    '9b9b4f06-e7d4-4a4b-9721-3914a5840d6c', // Guessed full UUIDs or prefixes
    '9d48384a-7f61-4c1d-88f5-934c9c8e8c8a',
    '98611b04-8b6b-4b11-9e8a-8c5e9c6c8c8a',
    '8c161010-8b6b-4b11-9e8a-8c5e9c6c8c8a',
    'ba9c5981-8b6b-4b11-9e8a-8c5e9c6c8c8a'
  ];
  // Since I only have prefixes from user, I'll search by prefix if possible or just check all modules
  const allModules = await prisma.courseModule.findMany({
    select: { id: true, level: true, moduleNumber: true, title: true }
  });
  
  const matches = allModules.filter(m => 
    m.id.startsWith('9b9b4') || 
    m.id.startsWith('9d483') || 
    m.id.startsWith('98611') || 
    m.id.startsWith('8c161') || 
    m.id.startsWith('ba9c5')
  );
  console.log('Modules matching previous ID prefixes:', matches);

  console.log('\n--- BLOCKER 3: Knowledge Test Content ---');
  const level1Test = await prisma.knowledgeTest.findUnique({
    where: { level: 1 }
  });
  
  if (level1Test) {
    console.log('Title:', level1Test.title);
    console.log('Pass Threshold:', level1Test.passThreshold);
    console.log('Questions (JSON):');
    console.log(JSON.stringify(level1Test.questions, null, 2));
  } else {
    console.log('Level 1 Knowledge Test NOT FOUND');
  }

  console.log('\n--- BLOCKER 5: Legacy Modules Check ---');
  const level1Legacy = await prisma.courseModule.findMany({
    where: { 
      level: 1,
      OR: [
        { title: { contains: '[Legacy]' } },
        { moduleNumber: { notIn: ['1.1', '1.2', '1.3', '1.4', '1.5'] } }
      ]
    },
    select: { moduleNumber: true, title: true }
  });
  console.log('Level 1 modules outside 1.1-1.5 or marked legacy:');
  console.table(level1Legacy);
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
