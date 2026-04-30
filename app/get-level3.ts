import { PrismaClient } from "@prisma/client";
import "dotenv/config";

const prisma = new PrismaClient();

async function main() {
  const modules = await prisma.courseModule.findMany({
    where: { level: 3 },
    orderBy: { orderIndex: 'asc' }
  });
  console.log("=== MODULES ===");
  console.log(JSON.stringify(modules, null, 2));

  const scenarios = await prisma.trainingScenario.findMany({
    where: { level: 3 }
  });
  console.log("=== SCENARIOS ===");
  console.log(JSON.stringify(scenarios, null, 2));

  const test = await prisma.knowledgeTest.findUnique({
    where: { level: 3 }
  });
  console.log("=== KNOWLEDGE TEST ===");
  console.log(JSON.stringify(test, null, 2));
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
