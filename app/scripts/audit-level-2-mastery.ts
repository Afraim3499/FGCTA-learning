import { PrismaClient } from '@prisma/client';
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({ 
  user: "postgres.oqaxpfldczldfmbuopbn",
  password: "Rizwan99636?",
  host: "aws-1-ap-southeast-1.pooler.supabase.com",
  port: 5432,
  database: "postgres",
  ssl: { rejectUnauthorized: false }
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('--- Level 2 Modules Audit (2.7-2.12) ---');
  const modules = await prisma.courseModule.findMany({
    where: {
      level: 2,
      moduleNumber: { in: ['2.7', '2.8', '2.9', '2.10', '2.11', '2.12'] }
    },
    include: {
      scenarioLinks: {
        include: {
          scenario: true
        }
      }
    },
    orderBy: { orderIndex: 'asc' }
  });

  for (const m of modules) {
    console.log(`\nModule ${m.moduleNumber}: ${m.title}`);
    console.log(`ID: ${m.id}`);
    console.log(`Word Count: ${m.content.split(/\s+/).length}`);
    console.log(`Interactive Task Type: ${m.interactiveTaskType}`);
    console.log(`Logic IDs: ${JSON.stringify(m.logicIds)}`);
    console.log(`Strategy Families: ${JSON.stringify(m.strategyFamilies)}`);
    console.log(`Scenario Links: ${m.scenarioLinks.length}`);
    for (const link of m.scenarioLinks) {
      console.log(`  - Scenario: ${link.scenario.title} (${link.scenario.scenarioType})`);
    }
    console.log('--- Content Sample ---');
    console.log(m.content.substring(0, 500) + '...');
    
    // Check for images in content
    const imgMatches = m.content.match(/!\[.*?\]\((.*?)\)/g);
    console.log(`Visual Assets Found: ${imgMatches ? imgMatches.length : 0}`);
    if (imgMatches) {
      imgMatches.forEach(img => console.log(`  - ${img}`));
    }
  }

  console.log('\n--- Level 2 Knowledge Test Audit ---');
  const test = await prisma.knowledgeTest.findUnique({
    where: { level: 2 }
  });
  if (test) {
    console.log(`Title: ${test.title}`);
    console.log(`Questions Count: ${JSON.parse(JSON.stringify(test.questions)).length}`);
    console.log('Questions Sample:');
    console.log(JSON.stringify(test.questions, null, 2).substring(0, 1000) + '...');
  } else {
    console.log('Level 2 Knowledge Test NOT FOUND');
  }
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
