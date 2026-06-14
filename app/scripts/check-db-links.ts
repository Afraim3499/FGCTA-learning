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

const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const links = await prisma.moduleScenarioLink.findMany({
    include: {
      module: true,
      scenario: true
    }
  });

  console.log(`\nFound ${links.length} Module-Scenario Links:`);
  links.forEach(l => {
    console.log(`  - Module ${l.module.moduleNumber} (Level ${l.module.level}) linked to Scenario "${l.scenario.slug}" (Level ${l.scenario.level}) [Required: ${l.requiredForProgress}]`);
  });

  await prisma.$disconnect();
  await pool.end();
}

main().catch(err => console.error(err));
