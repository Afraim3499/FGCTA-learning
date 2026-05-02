
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
  const searchId = '335d2146-239f-431d-b892-748529f79624';
  
  const m = await prisma.courseModule.findUnique({ where: { id: searchId } });
  const s = await prisma.trainingScenario.findUnique({ where: { id: searchId } });
  const t = await prisma.knowledgeTest.findUnique({ where: { id: searchId } });
  
  console.log('Search Results:');
  console.log('- CourseModule:', m);
  console.log('- TrainingScenario:', s);
  console.log('- KnowledgeTest:', t);

  await prisma.$disconnect();
  await pool.end();
}

main().catch(e => console.error(e));
