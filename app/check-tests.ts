import { PrismaClient } from './src/generated/prisma/client/index.js';

const prisma = new PrismaClient();

async function main() {
    const tests = await prisma.knowledgeTest.findMany();
    console.log(JSON.stringify(tests, null, 2));
}

main().finally(() => prisma.$disconnect());
