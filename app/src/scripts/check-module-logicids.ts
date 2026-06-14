import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
if (!connectionString) {
  console.error("DATABASE URL missing");
  process.exit(1);
}

const isLocal = connectionString.includes("localhost") || connectionString.includes("127.0.0.1");
const pool = new Pool({
  connectionString,
  ssl: isLocal ? false : { rejectUnauthorized: false },
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const modules = await prisma.courseModule.findMany({
    orderBy: { level: "asc" }
  });

  console.log(`\nFound ${modules.length} modules in the database:`);
  
  const levelLogicIds: Record<number, string[]> = {};
  modules.forEach(m => {
    if (!levelLogicIds[m.level]) {
      levelLogicIds[m.level] = [];
    }
    if (m.logicIds && m.logicIds.length > 0) {
      levelLogicIds[m.level].push(...m.logicIds);
    }
  });

  Object.keys(levelLogicIds).forEach(lvl => {
    const ids = levelLogicIds[parseInt(lvl)];
    console.log(`Level ${lvl} maps to logicIds: ${ids.length > 0 ? ids.join(", ") : "None"}`);
  });

  await prisma.$disconnect();
  await pool.end();
}

main().catch(err => console.error(err));
