import fs from 'fs';

function findDoubleNewlinesInStrings(path: string) {
  const content = fs.readFileSync(path, 'utf8');
  // Regex to find a string "..." that contains a literal newline followed by another literal newline
  // Note: we are looking for actual newlines, not the \n character
  const regex = /"([^"]*?\n\n[^"]*?)"/g;
  const matches = content.match(regex) || [];
  if (matches.length > 0) {
    console.log(`Found ${matches.length} issues in ${path}:`);
    matches.forEach(m => console.log(`  - ${m.replace(/\n/g, '\\n')}`));
  } else {
    console.log(`No issues found in ${path}`);
  }
}

findDoubleNewlinesInStrings('src/scripts/seed-full-69.ts');
findDoubleNewlinesInStrings('src/scripts/manual-patches/level-0-production-sync.ts');
