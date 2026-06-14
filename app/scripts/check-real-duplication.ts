import { level0Curriculum } from "../src/content/level-0";
import { level1Curriculum } from "../src/content/level-1";
import { level2Curriculum } from "../src/content/level-2";
import { level3Curriculum } from "../src/content/level-3";
import { level4Curriculum } from "../src/content/level-4";
import { level5Curriculum } from "../src/content/level-5";
import { level6Curriculum } from "../src/content/level-6";
import { level7Curriculum } from "../src/content/level-7";
import { level8Curriculum } from "../src/content/level-8";
import { level9Curriculum } from "../src/content/level-9";
import { AcademyModule } from "../types/curriculum";

const allLevels = [
  { levelNum: 0, curriculum: level0Curriculum },
  { levelNum: 1, curriculum: level1Curriculum },
  { levelNum: 2, curriculum: level2Curriculum },
  { levelNum: 3, curriculum: level3Curriculum },
  { levelNum: 4, curriculum: level4Curriculum },
  { levelNum: 5, curriculum: level5Curriculum },
  { levelNum: 6, curriculum: level6Curriculum },
  { levelNum: 7, curriculum: level7Curriculum },
  { levelNum: 8, curriculum: level8Curriculum },
  { levelNum: 9, curriculum: level9Curriculum }
];

function runRealDuplicationCheck() {
  console.log("\n=================================== DEEP REPETITION AUDIT (STRIPPING COMMENTS) ===================================");
  
  const allCardTexts = new Map<string, string[]>();

  allLevels.forEach((lvl) => {
    lvl.curriculum.forEach((mod) => {
      Object.entries(mod.tracks).forEach(([trackName, cards]) => {
        cards.forEach((card, idx) => {
          if (!card.body) return;
          
          // Strip comments: <!-- ... -->
          const cleanBody = card.body.replace(/<!--[\s\S]*?-->/g, "").trim();
          // Take first 150 chars for signature comparison
          const sig = cleanBody.substring(0, 150).toLowerCase().replace(/\s+/g, " ");
          const cardRef = `L${lvl.levelNum}.${mod.moduleNumber}-${trackName}[Card ${idx + 1}]`;

          if (allCardTexts.has(sig)) {
            allCardTexts.get(sig)!.push(cardRef);
          } else {
            allCardTexts.set(sig, [cardRef]);
          }
        });
      });
    });
  });

  let duplicateCount = 0;
  console.log("\nFound groups of cards sharing identical body text (stripped of comments):");
  allCardTexts.forEach((refs, sig) => {
    if (refs.length > 1) {
      duplicateCount++;
      console.log(`\nGroup ${duplicateCount} (Signature: "${sig.substring(0, 70)}..."):`);
      refs.forEach(r => console.log(`  - ${r}`));
    }
  });

  console.log(`\nTotal duplicate text body groups: ${duplicateCount}`);
  console.log("=================================================================================================================");
}

runRealDuplicationCheck();
