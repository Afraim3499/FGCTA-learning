import { AssetType } from '@prisma/client';
import { prisma } from '../src/lib/prisma';
import * as fs from 'fs';
import * as path from 'path';
async function main() {
  console.log('Initiating Crypto Strategy Ingestion...');
  
  // Path to the raw markdown file
  const filePath = path.join(process.cwd(), '..', 'Crypto.md');
  let fileContent = fs.readFileSync(filePath, 'utf-8');
  fileContent += '\n999. **Strategy Name:** Dummy\n';

  // Regex to match "1. **Strategy Name**" and subsequent lines
  const strategyRegex = /^(\d+)\.\s+\*\*([^*]+)\*\*(.*?)(?=^\d+\.\s+\*\*)/gms;
  
  let match;
  let count = 0;

  while ((match = strategyRegex.exec(fileContent)) !== null) {
    const sequenceNumber = parseInt(match[1], 10);
    const name = match[2].trim();
    const coreLogic = match[3].trim();
    
    // Default family mapping (can be expanded based on sequence bounds)
    let parentFamily = 'General Crypto Strategy';
    if (sequenceNumber <= 30) parentFamily = 'On-Chain Analytics';
    else if (sequenceNumber <= 60) parentFamily = 'DeFi Yields';
    
    await prisma.strategy.upsert({
      where: {
        assetClass_name: {
          assetClass: AssetType.CRYPTO,
          name: name,
        }
      },
      update: {
        coreLogic,
        parentFamily,
      },
      create: {
        assetClass: AssetType.CRYPTO,
        sequenceNumber,
        name,
        parentFamily,
        coreLogic,
        trapMechanics: 'Simulated Trap Mechanics (To be populated from Blueprints)',
      },
    });
    count++;
  }

  console.log(`Successfully upserted ${count} Crypto strategies.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
