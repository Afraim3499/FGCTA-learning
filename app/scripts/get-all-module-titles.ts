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

const allLevels = [
  { num: 0, curr: level0Curriculum },
  { num: 1, curr: level1Curriculum },
  { num: 2, curr: level2Curriculum },
  { num: 3, curr: level3Curriculum },
  { num: 4, curr: level4Curriculum },
  { num: 5, curr: level5Curriculum },
  { num: 6, curr: level6Curriculum },
  { num: 7, curr: level7Curriculum },
  { num: 8, curr: level8Curriculum },
  { num: 9, curr: level9Curriculum }
];

allLevels.forEach(lvl => {
  console.log(`\n=================== LEVEL ${lvl.num} MODULES ===================`);
  lvl.curr.forEach(mod => {
    console.log(`  - Module ${mod.moduleNumber}: "${mod.title}" (Level: ${mod.skillLevel})`);
  });
});
