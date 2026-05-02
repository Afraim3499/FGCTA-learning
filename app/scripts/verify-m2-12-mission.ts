
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
  const slug = "m2-level-2-map-review-v1";
  const scenario = await prisma.trainingScenario.findUnique({
    where: { slug },
    include: {
      links: {
        include: {
          module: true
        }
      }
    }
  });

  if (!scenario) {
    console.log("Scenario NOT found!");
    return;
  }

  console.log("--- SCENARIO VERIFICATION ---");
  console.log(`ID: ${scenario.id}`);
  console.log(`Slug: ${scenario.slug}`);
  console.log(`Type: ${scenario.scenarioType}`);
  console.log(`InteractionMode: ${(scenario.metadata as any)?.interactionMode}`);
  console.log(`XP Award: ${scenario.xpAward}`);
  console.log(`Pass Threshold: ${scenario.passThreshold}`);
  
  const link = scenario.links[0];
  console.log(`Linked Module: ${link?.module?.level}.${link?.module?.moduleNumber} (${link?.moduleId})`);
  console.log(`Link Status: ${link ? "Active" : "None"}`);
  console.log(`Required for Progress: ${link?.requiredForProgress}`);

  console.log("--- METADATA REQUIREMENTS ---");
  const requirements = (scenario.metadata as any)?.requirements;
  console.log(`Requirements Count: ${requirements?.length}`);
  if (requirements) {
    requirements.forEach((r: any) => {
      console.log(` - ${r.label} (${r.type})`);
    });
  }

  console.log("--- XP LEDGER CHECK (SOURCE TYPE/ID) ---");
  console.log(`Target SourceType: scenario_attempt`);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
