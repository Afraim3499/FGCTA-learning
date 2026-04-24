import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const phases = await prisma.tradingPhase.findMany({
    orderBy: { phaseNumber: "asc" }
  });

  console.log("Trading Phases:", JSON.stringify(phases, null, 2));
}

main();
