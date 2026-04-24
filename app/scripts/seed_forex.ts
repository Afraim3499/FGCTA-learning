import { AssetType } from '@prisma/client';
import { prisma } from '../src/lib/prisma';
import * as fs from 'fs';
import * as path from 'path';
async function main() {
  console.log('Initiating Forex Strategy Ingestion...');
  
  // Path to the raw markdown file
  const filePath = path.join(process.cwd(), '..', 'Forex.md');
  let fileContent = fs.readFileSync(filePath, 'utf-8');
  fileContent += '\n999. **Strategy Name:** Dummy\n';

  // Regex to match "1. **Strategy Name:**" and subsequent lines
  const strategyRegex = /^(\d+)\.\s+\*\*Strategy Name:\*\*\s*(.+?)\r?\n(.*?)(?=^\d+\.\s+\*\*Strategy Name:\*\*)/gms;
  
  let match;
  let count = 0;

  while ((match = strategyRegex.exec(fileContent)) !== null) {
    const sequenceNumber = parseInt(match[1], 10);
    const name = match[2].trim();
    const coreLogic = match[3].trim();
    
    // Default family mapping
    let parentFamily = 'General Forex Strategy';
    if (sequenceNumber <= 50) parentFamily = 'Technical Breakout';
    else if (sequenceNumber <= 100) parentFamily = 'Macro Fundamentals';
    
    await prisma.strategy.upsert({
      where: {
        assetClass_name: {
          assetClass: AssetType.FOREX,
          name: name,
        }
      },
      update: {
        coreLogic,
        parentFamily,
      },
      create: {
        assetClass: AssetType.FOREX,
        sequenceNumber,
        name,
        parentFamily,
        coreLogic,
        trapMechanics: 'Simulated Trap Mechanics (To be populated from Blueprints)',
      },
    });
    count++;
  }

  console.log(`Successfully upserted ${count} Forex strategies.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
