import fs from "fs";
import path from "path";

const args = process.argv.slice(2);
const levelArg = args.find((a) => a.startsWith("--level="))?.split("=")[1] || "1";
const levelNum = parseInt(levelArg);

const levelDir = path.join(__dirname, `../src/content/level-${levelNum}`);
const modules = Array.from({ length: 15 }, (_, i) => `module-${levelNum}-${i + 1}`);

function audit() {
  console.log(`--- LEVEL ${levelNum} UNIQUENESS AUDIT START ---`);
  
  const allTitles = new Set<string>();
  const allBodies = new Set<string>();
  const duplicateTitles: string[] = [];
  const duplicateBodies: string[] = [];

  let totalCardsCount = 0;
  let hasErrors = false;

  for (const mod of modules) {
    const modPath = path.join(levelDir, mod);
    if (!fs.existsSync(modPath)) {
      console.error(`❌ Module folder missing: ${mod}`);
      hasErrors = true;
      continue;
    }

    const files = ["core.ts", "forex.ts", "gold.ts", "crypto.ts"];
    for (const file of files) {
      const filePath = path.join(modPath, file);
      if (!fs.existsSync(filePath)) {
        console.error(`❌ File missing: ${mod}/${file}`);
        hasErrors = true;
        continue;
      }

      // Read file content
      const content = fs.readFileSync(filePath, "utf-8");
      
      // Match cards JSON pattern inside file (using greedy match for array brackets to avoid stopping on semicolons in strings)
      const match = content.match(/export const \w+Cards: LessonCard\[] = (\[[\s\S]+\]);/);
      if (!match) {
        console.error(`❌ Could not parse cards array from ${mod}/${file}`);
        hasErrors = true;
        continue;
      }

      try {
        const cards = JSON.parse(match[1]);
        const expectedCount = file === "core.ts" ? 15 : 8;
        
        if (cards.length !== expectedCount) {
          console.error(`❌ Incorrect card count in ${mod}/${file}: expected ${expectedCount}, got ${cards.length}`);
          hasErrors = true;
        }

        for (let i = 0; i < cards.length; i++) {
          const card = cards[i];
          const cardRef = `${mod}/${file} Card ${i + 1}`;
          
          if (!card.title || card.title.trim() === "") {
            console.error(`❌ Empty title in ${cardRef}`);
            hasErrors = true;
          }
          if (!card.body || card.body.trim() === "") {
            console.error(`❌ Empty body in ${cardRef}`);
            hasErrors = true;
          }

          // Check duplicate titles
          const titleKey = `${card.title.trim().toLowerCase()}`;
          if (allTitles.has(titleKey)) {
            duplicateTitles.push(`${cardRef}: "${card.title}"`);
            hasErrors = true;
          } else {
            allTitles.add(titleKey);
          }

          // Check duplicate bodies (first 100 chars to avoid small markdown formatting differences)
          const bodySnippet = card.body.trim().substring(0, 100).toLowerCase();
          if (allBodies.has(bodySnippet)) {
            duplicateBodies.push(`${cardRef}: "${card.body.substring(0, 60)}..."`);
            hasErrors = true;
          } else {
            allBodies.add(bodySnippet);
          }

          totalCardsCount++;
        }
      } catch (err) {
        console.error(`❌ JSON Parse error in ${mod}/${file}:`, err);
        hasErrors = true;
      }
    }
  }

  console.log(`\nAudited ${totalCardsCount} cards across 15 modules.`);
  
  if (duplicateTitles.length > 0) {
    console.error(`\n❌ Found ${duplicateTitles.length} duplicate titles:`);
    duplicateTitles.forEach(t => console.error(`  - ${t}`));
  } else {
    console.log("✓ Zero duplicate titles found.");
  }

  if (duplicateBodies.length > 0) {
    console.error(`\n❌ Found ${duplicateBodies.length} duplicate body texts/placeholders:`);
    duplicateBodies.forEach(b => console.error(`  - ${b}`));
  } else {
    console.log("✓ Zero duplicate body texts found.");
  }

  if (hasErrors) {
    console.error("\n❌ AUDIT FAILED: Structural or uniqueness errors found.");
    process.exit(1);
  } else {
    console.log("\n✅ AUDIT PASSED: All cards exist with correct counts and 100% unique titles and bodies!");
  }
}

audit();
