const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');
require('dotenv').config();

async function main() {
  const pool = new Pool({ 
    connectionString: process.env.DIRECT_URL,
    ssl: { rejectUnauthorized: false }
  });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });

  const email = "afraim.afraim99@gmail.com";
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    console.error("User not found");
    process.exit(1);
  }

  console.log(`🚀 Granting Master Completion to ${email}...`);

  const modules = await prisma.courseModule.findMany({ select: { id: true } });

  for (const mod of modules) {
    await prisma.moduleCompletion.upsert({
      where: {
        userId_moduleId: {
          userId: user.id,
          moduleId: mod.id,
        },
      },
      update: {},
      create: {
        userId: user.id,
        moduleId: mod.id,
        xpAwarded: 50,
      },
    });
  }

  // Update user progress to Level 9 (Certified)
  await prisma.userProgress.upsert({
    where: { userId: user.id },
    update: { currentLevel: 9, xpTotal: modules.length * 50 },
    create: { userId: user.id, currentLevel: 9, xpTotal: modules.length * 50 },
  });

  console.log(`✅ ${modules.length} modules marked as completed for Rizwan.`);
  console.log(`✅ Rizwan is now officially 'The Elite' (Level 9).`);

  await prisma.$disconnect();
  await pool.end();
}

main().catch(console.error);
