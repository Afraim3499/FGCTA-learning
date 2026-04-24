import * as fs from 'fs';
import * as path from 'path';

function testCrypto() {
  const fileContent = fs.readFileSync(path.join(__dirname, '..', '..', 'Crypto.md'), 'utf-8');
  const strategyRegex = /^(\d+)\.\s+\*\*([^*]+)\*\*(.*?)(?=^\d+\.\s+\*\*|\Z)/gms;
  let match;
  let count = 0;
  while ((match = strategyRegex.exec(fileContent)) !== null) {
    count++;
  }
  console.log('Crypto matched:', count);
}

function testForex() {
  const fileContent = fs.readFileSync(path.join(__dirname, '..', '..', 'Forex.md'), 'utf-8');
  const strategyRegex = /^(\d+)\.\s+\*\*Strategy Name:\*\*\s*(.+?)\r?\n(.*?)(?=^\d+\.\s+\*\*Strategy Name:\*\*|\Z)/gms;
  let match;
  let count = 0;
  while ((match = strategyRegex.exec(fileContent)) !== null) {
    count++;
  }
  console.log('Forex matched:', count);
}

testCrypto();
testForex();
