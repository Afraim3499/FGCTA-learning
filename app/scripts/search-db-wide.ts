
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

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

async function main() {
  const searchId = '335d2146-239f-431d-b892-748529f79624';
  
  console.log(`Searching for ID: ${searchId} across ALL tables...`);

  const tables = [
    'user', 'userProgress', 'courseModule', 'moduleCompletion', 
    'trainingScenario', 'moduleScenarioLink', 'scenarioAttempt',
    'knowledgeTest', 'testAttempt', 'xPLedgerEntry', 'userEvent',
    'diagnosticReport', 'remediationLog', 'savedAnalysis', 'strategy'
  ];

  for (const table of tables) {
    try {
      const result = await (prisma as any)[table].findFirst({
        where: {
          OR: [
            { id: searchId },
            ...(Object.keys((prisma as any)[table].fields || {}).filter(f => f.endsWith('Id')).map(f => ({ [f]: searchId })))
          ]
        }
      });
      if (result) {
        console.log(`FOUND in table [${table}]:`, JSON.stringify(result, null, 2));
      }
    } catch (e) {
      // console.error(`Error searching table ${table}:`, e.message);
    }
  }

  await prisma.$disconnect();
  await pool.end();
}

main().catch(e => console.error(e));
