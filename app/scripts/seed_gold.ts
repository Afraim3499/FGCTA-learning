import { AssetType } from '@prisma/client';
import { prisma } from '../src/lib/prisma';
import * as fs from 'fs';
import * as path from 'path';
async function main() {
  console.log('Initiating Gold Strategy Ingestion...');
  
  // Path to the raw CSV file
  const filePath = path.join(process.cwd(), '..', 'gold_trading_strategies.csv');
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const lines = fileContent.split('\n');
  let count = 0;

  // Function to parse a CSV line accounting for quotes
  function parseCSVLine(text: string) {
    let result = [];
    let cur = '';
    let inQuotes = false;
    for (let j = 0; j < text.length; j++) {
      const char = text[j];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        result.push(cur);
        cur = '';
      } else {
        cur += char;
      }
    }
    result.push(cur);
    return result.map(s => s.trim());
  }

  // Assuming CSV format: Strategy Name, Parent Family, Type, Core / Subtype / Variation, Core Logic, ...
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const columns = parseCSVLine(line);
    const name = columns[0];
    const parentFamily = columns[1];
    const coreLogic = columns[4];
    const sequenceNumber = i;

    if (!name) continue;

    await prisma.strategy.upsert({
      where: {
        assetClass_name: {
          assetClass: AssetType.GOLD,
          name: name,
        }
      },
      update: {
        coreLogic: coreLogic || 'TBD',
        parentFamily: parentFamily || 'TBD',
      },
      create: {
        assetClass: AssetType.GOLD,
        sequenceNumber,
        name: name,
        parentFamily: parentFamily || 'TBD',
        coreLogic: coreLogic || 'TBD',
        trapMechanics: 'Simulated Trap Mechanics (To be populated from Blueprints)',
      },
    });
    count++;
  }

  console.log(`Successfully upserted ${count} Gold strategies.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
