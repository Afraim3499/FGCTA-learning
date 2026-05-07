import { PrismaClient } from '@prisma/client';

async function main() {
  const prisma = new PrismaClient();
  const modules = await prisma.courseModule.findMany({
    orderBy: { moduleNumber: 'asc' }
  });

  for (const mod of modules) {
    console.log(`Module ${mod.moduleNumber} (${mod.title}):`);
    console.log(`  - Content: ${mod.content?.includes(':::lesson-cards') ? 'V2' : 'V1'}`);
    console.log(`  - Forex: ${mod.forexAdaptation ? (mod.forexAdaptation.includes(':::lesson-cards') ? 'V2' : 'V1') : 'MISSING'}`);
    console.log(`  - Crypto: ${mod.cryptoAdaptation ? (mod.cryptoAdaptation.includes(':::lesson-cards') ? 'V2' : 'V1') : 'MISSING'}`);
    console.log(`  - Gold: ${mod.goldAdaptation ? (mod.goldAdaptation.includes(':::lesson-cards') ? 'V2' : 'V1') : 'MISSING'}`);
    
    if (mod.goldAdaptation) {
        try {
            const match = mod.goldAdaptation.match(/:::lesson-cards\s*\n([\s\S]*?)\n\s*:::/);
            if (match) {
                JSON.parse(match[1]);
                console.log(`  - Gold JSON: OK`);
            } else {
                console.log(`  - Gold JSON: REGEX FAIL`);
            }
        } catch (e) {
            console.log(`  - Gold JSON: PARSE FAIL (${(e as Error).message})`);
        }
    }
  }

  await prisma.$disconnect();
}

main();
