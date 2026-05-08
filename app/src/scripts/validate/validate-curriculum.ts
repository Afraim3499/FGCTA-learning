import { level0Curriculum } from "../../content/level-0";
import fs from "fs";
import path from "path";

async function validate() {
  console.log("--- CURRICULUM VALIDATION START ---");
  let errorCount = 0;

  // Load visual registry to check keys
  const cwd = process.cwd();
  const registryPath = cwd.endsWith("app") 
    ? path.join(cwd, "src/components/academy/visual-registry.tsx")
    : path.join(cwd, "app/src/components/academy/visual-registry.tsx");
    
  if (!fs.existsSync(registryPath)) {
    console.error(`[ERROR] Visual registry not found at: ${registryPath}`);
    process.exit(1);
  }
  
  const registryContent = fs.readFileSync(registryPath, "utf-8");

  for (const module of level0Curriculum) {
    console.log(`\nValidating Module ${module.moduleNumber}: ${module.title}`);

    if (!module.tracks.core || module.tracks.core.length === 0) {
      console.error(`[ERROR] Module ${module.moduleNumber} has no core track cards.`);
      errorCount++;
    }

    for (const [trackName, cards] of Object.entries(module.tracks)) {
      console.log(`  Track: ${trackName} (${cards.length} cards)`);
      
      cards.forEach((card, index) => {
        const cardRef = `${module.moduleNumber}.${trackName}[${index}]`;

        // Basic fields
        if (!card.type) { console.error(`[ERROR] ${cardRef} missing 'type'`); errorCount++; }
        if (!card.title) { console.error(`[ERROR] ${cardRef} missing 'title'`); errorCount++; }
        if (!card.body) { console.error(`[ERROR] ${cardRef} missing 'body'`); errorCount++; }

        // Visual Key check
        if (card.visualKey) {
          if (!registryContent.includes(`"${card.visualKey}":`) && 
              !registryContent.includes(`'${card.visualKey}':`)) {
            console.warn(`[WARN] ${cardRef} uses unknown visualKey: "${card.visualKey}"`);
            // Not necessarily an error if it's a dynamic or legacy key, but worth noting.
          }
        }

        // Practice card checks
        if (card.type === "practice") {
          if (!card.taskData) {
            console.error(`[ERROR] ${cardRef} is 'practice' but missing 'taskData'`);
            errorCount++;
          } else if (card.taskData.type === "choice_block" && (!card.taskData.options || card.taskData.options.length === 0)) {
            console.error(`[ERROR] ${cardRef} choice_block missing options`);
            errorCount++;
          }
        }
      });
    }
  }

  console.log(`\n--- VALIDATION FINISHED: ${errorCount} ERRORS ---`);
  if (errorCount > 0) {
    process.exit(1);
  }
}

validate();
