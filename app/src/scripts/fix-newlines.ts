import fs from 'fs';

function fixFile(path: string) {
  let content = fs.readFileSync(path, 'utf8');
  
  // This is a bit complex because we are inside a template literal.
  // We want to find cases where there is a newline inside a JSON-like string.
  
  // A simpler approach: find all occurrences of "something\n\nsomething" inside the adaptations
  // and replace them with "something\\n\\nsomething".
  
  // Actually, I'll just look for the specific pattern I found.
  const regex = /"([^"]*?)\n\n([^"]*?)"/g;
  let newContent = content.replace(regex, (match, p1, p2) => {
    return `"${p1}\\n\\n${p2}"`;
  });
  
  if (content !== newContent) {
    fs.writeFileSync(path, newContent);
    console.log(`Fixed ${path}`);
  } else {
    console.log(`No changes needed for ${path}`);
  }
}

fixFile('src/scripts/seed-full-69.ts');
fixFile('src/scripts/manual-patches/level-0-production-sync.ts');
