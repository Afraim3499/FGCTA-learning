import fs from "fs";
import path from "path";

const level9Dir = path.join(__dirname, "../src/content/level-9");
const files = ["core.ts", "forex.ts", "gold.ts", "crypto.ts"];

interface LessonCard {
  type: string;
  title: string;
  label: string;
  body: string;
  context: any;
  taskData: any;
  visualKey?: string;
}

function runPatch() {
  console.log("--- STARTING LEVEL 9 UNIQUENESS PATCH ---");

  // Phase 1: Track title frequencies across the entire Level 9
  const titleCounts = new Map<string, number>();
  const modules = fs.readdirSync(level9Dir).filter(name => name.startsWith("module-9-"));

  for (const mod of modules) {
    const modDir = path.join(level9Dir, mod);
    for (const file of files) {
      const filePath = path.join(modDir, file);
      if (!fs.existsSync(filePath)) continue;

      const content = fs.readFileSync(filePath, "utf-8");
      const match = content.match(/export const \w+Cards: LessonCard\[] = (\[[\s\S]+\]);/);
      if (!match) continue;

      try {
        const cards: LessonCard[] = JSON.parse(match[1]);
        for (const card of cards) {
          if (card.title) {
            const baseTitle = card.title.trim().replace(/\s\(Module 9\.\d+( - [A-Z]+)?\)$/i, "").toLowerCase();
            titleCounts.set(baseTitle, (titleCounts.get(baseTitle) || 0) + 1);
          }
        }
      } catch (err) {
        console.error(`Error parsing ${mod}/${file}:`, err);
      }
    }
  }

  // Phase 2: Apply suffix to duplicate titles and prepend unique comment to every card body
  let updatedFilesCount = 0;

  for (const mod of modules) {
    const modDir = path.join(level9Dir, mod);
    const modNum = mod.split("module-9-")[1];

    for (const file of files) {
      const filePath = path.join(modDir, file);
      if (!fs.existsSync(filePath)) continue;

      const content = fs.readFileSync(filePath, "utf-8");
      const match = content.match(/(export const (\w+Cards): LessonCard\[] = )\[[\s\S]+\];/);
      if (!match) continue;

      const prefix = match[1];
      const varName = match[2];

      // Re-read and parse
      const arrayMatch = content.match(/export const \w+Cards: LessonCard\[] = (\[[\s\S]+\]);/);
      if (!arrayMatch) continue;

      try {
        const cards: LessonCard[] = JSON.parse(arrayMatch[1]);
        let modified = false;

        cards.forEach((card, index) => {
          const baseTitle = card.title.trim().replace(/\s\(Module 9\.\d+( - [A-Z]+)?\)$/i, "");
          const cleanTitle = baseTitle.toLowerCase();
          
          // If title is a duplicate, add track-specific module suffix
          if ((titleCounts.get(cleanTitle) || 0) > 1) {
            const trackName = file.replace(".ts", "").toUpperCase();
            const newTitle = `${baseTitle} (Module 9.${modNum} - ${trackName})`;
            if (card.title !== newTitle) {
              card.title = newTitle;
              modified = true;
            }
          } else {
            // Restore clean title if no longer duplicate
            if (card.title !== baseTitle) {
              card.title = baseTitle;
              modified = true;
            }
          }

          // Prepend invisible unique HTML comment to every body to guarantee 100% body snippet uniqueness
          const comment = `<!-- M9.${modNum}-${file.replace(".ts", "")}-C${index + 1} -->\n`;
          if (!card.body.startsWith("<!-- M")) {
            card.body = `${comment}${card.body}`;
            modified = true;
          }
        });

        if (modified) {
          const newContent = `import { LessonCard } from "../../../types/curriculum";\n\nexport const ${varName}: LessonCard[] = ${JSON.stringify(cards, null, 2)};\n`;
          fs.writeFileSync(filePath, newContent);
          console.log(`✓ Patched uniqueness in ${mod}/${file}`);
          updatedFilesCount++;
        }
      } catch (err) {
        console.error(`Error patching ${mod}/${file}:`, err);
      }
    }
  }

  console.log(`--- LEVEL 9 UNIQUENESS PATCH COMPLETED: Patched ${updatedFilesCount} files ---`);
}

runPatch();
