import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
const isLocal = connectionString?.includes("localhost") || connectionString?.includes("127.0.0.1");
const pool = new Pool({
  connectionString,
  ssl: isLocal ? false : { rejectUnauthorized: false },
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const allModules = await prisma.courseModule.findMany({
    select: {
      id: true,
      level: true,
      moduleNumber: true,
      title: true,
      strategyFamilies: true,
      logicIds: true
    }
  });

  const modulesWithFamilies = allModules.filter(m => m.strategyFamilies && m.strategyFamilies.length > 0);

  console.log(`\nFound ${modulesWithFamilies.length} modules with strategyFamilies defined:`);
  modulesWithFamilies.forEach(m => {
    console.log(`  - Lvl ${m.level} Mod ${m.moduleNumber} "${m.title}":`);
    console.log(`    Families: ${JSON.stringify(m.strategyFamilies)}`);
    console.log(`    Logic IDs: ${JSON.stringify(m.logicIds)}`);
  });

  await prisma.$disconnect();
  await pool.end();
}

main().catch(err => console.error(err));
