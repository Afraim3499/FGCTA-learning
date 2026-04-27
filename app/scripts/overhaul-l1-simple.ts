import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DIRECT_URL
    }
  }
});

const L1_CONTENT = [
  { moduleNumber: "1.1", title: "Why Price Moves" },
  { moduleNumber: "1.2", title: "Market Participants" },
  { moduleNumber: "1.3", title: "Supply and Demand Basics" },
  { moduleNumber: "1.4", title: "Liquidity Basics" },
  { moduleNumber: "1.5", title: "Timing and Discipline" }
];

async function overhaul() {
  console.log("🚀 Starting Level 1 Overhaul (No Adapter Mode)...");

  try {
    for (const mod of L1_CONTENT) {
      const existing = await prisma.courseModule.findUnique({
        where: { level_moduleNumber: { level: 1, moduleNumber: mod.moduleNumber } }
      });

      if (existing) {
        await prisma.courseModule.update({
          where: { id: existing.id },
          data: {
            title: mod.title,
            logicIds: [],
            strategyFamilies: [],
            skillLevel: "beginner"
          }
        });
        console.log(`✨ Updated ${mod.moduleNumber}`);
      }
    }

    const legacy = await prisma.courseModule.findMany({
      where: { level: 1, moduleNumber: { notIn: ["1.1", "1.2", "1.3", "1.4", "1.5"] } }
    });

    for (const mod of legacy) {
      if (!mod.title.startsWith("[Legacy]")) {
        await prisma.courseModule.update({
          where: { id: mod.id },
          data: { title: `[Legacy] ${mod.title}` }
        });
        console.log(`📦 Prefixed ${mod.moduleNumber}`);
      }
    }

    console.log("🏆 Success.");
  } catch (error) {
    console.error("❌ Error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

overhaul();
