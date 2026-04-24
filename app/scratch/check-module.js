const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const mod = await prisma.courseModule.findFirst({
    where: { moduleNumber: '2.7' }
  });
  console.log(JSON.stringify(mod, null, 2));
}

main().catch(console.error).finally(() => prisma.$disconnect());
