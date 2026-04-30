import fs from 'fs';
import { prisma } from '../src/lib/prisma';

async function main() {
  const backupPath = 'E:/trading course/app/scratch/backups/l1-modules-backup-2026-04-26T09-58-34-666Z.json';
  if (!fs.existsSync(backupPath)) {
    console.log('Backup file not found at:', backupPath);
    return;
  }
  const data = JSON.parse(fs.readFileSync(backupPath, 'utf8'));
  const modulesToRestore = data.filter((m: any) => {
    const parts = m.moduleNumber.split('.');
    const main = parseInt(parts[0]);
    const sub = parseInt(parts[1]);
    return main === 1 && sub >= 6 && sub <= 15;
  });

  console.log('Found modules to restore:', modulesToRestore.map((m: any) => m.moduleNumber));
  
  for (const m of modulesToRestore) {
    const title = m.title.includes('[Legacy]') ? m.title : '[Legacy] ' + m.title;
    
    await prisma.courseModule.upsert({
      where: { id: m.id },
      update: {},
      create: {
        id: m.id,
        level: m.level,
        moduleNumber: m.moduleNumber,
        title: title,
        objective: m.objective,
        content: m.content,
        forexAdaptation: m.forexAdaptation,
        cryptoAdaptation: m.cryptoAdaptation,
        goldAdaptation: m.goldAdaptation,
        strategyFamilies: m.strategyFamilies || [],
        logicIds: m.logicIds || [],
        skillLevel: m.skillLevel || 'beginner',
        marketTrack: m.marketTrack || 'core',
        orderIndex: m.orderIndex
      }
    });
    console.log('Restored', m.moduleNumber);
  }
  
  const m1Count = await prisma.courseModule.count({ where: { level: 1 } });
  console.log("Total Level 1 Modules now:", m1Count);
}

main().catch(console.error).finally(() => process.exit(0));
