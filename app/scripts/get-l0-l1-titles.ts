import { level0Curriculum } from "../src/content/level-0";
import { level1Curriculum } from "../src/content/level-1";

console.log(`\n=================== LEVEL 0 MODULES ===================`);
level0Curriculum.forEach(mod => {
  console.log(`  - Module ${mod.moduleNumber}: "${mod.title}" (Level: ${mod.skillLevel})`);
});

console.log(`\n=================== LEVEL 1 MODULES ===================`);
level1Curriculum.forEach(mod => {
  console.log(`  - Module ${mod.moduleNumber}: "${mod.title}" (Level: ${mod.skillLevel})`);
});
