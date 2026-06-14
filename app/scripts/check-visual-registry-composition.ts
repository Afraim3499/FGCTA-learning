import fs from "fs";
import path from "path";

const registryPath = path.join(__dirname, "../src/components/academy/visual-registry.tsx");
if (!fs.existsSync(registryPath)) {
  console.error("Registry not found");
  process.exit(1);
}

const content = fs.readFileSync(registryPath, "utf-8");
const lines = content.split("\n");

interface VisualEntry {
  key: string;
  importPath: string;
  component: string;
}

const entries: VisualEntry[] = [];

// Match patterns like:
// "recency-bias-model": dynamic(() => import("./visuals/shared-l8").then(m => m.CognitiveBiasModeler), { loading: VisualLoading }),
const regex = /"([^"]+)":\s*dynamic\(\(\)\s*=>\s*import\("([^"]+)"\)\.then\(m\s*=>\s*m\.(\w+)\)/;

lines.forEach((line) => {
  const match = line.match(regex);
  if (match) {
    entries.push({
      key: match[1],
      importPath: match[2],
      component: match[3],
    });
  }
});

console.log(`\n=================================== VISUAL REGISTRY AUDIT ===================================`);
console.log(`Total registered visual keys parsed: ${entries.length}\n`);

// Group by Import Path
const byPath: Record<string, number> = {};
// Group by Component
const byComponent: Record<string, number> = {};
// Placeholder mappings
const placeholders: string[] = [];

entries.forEach((e) => {
  byPath[e.importPath] = (byPath[e.importPath] || 0) + 1;
  byComponent[e.component] = (byComponent[e.component] || 0) + 1;
  if (e.component.toLowerCase().includes("placeholder")) {
    placeholders.push(e.key);
  }
});

console.log("Visual Keys grouped by import folder:");
Object.entries(byPath).sort((a, b) => b[1] - a[1]).forEach(([p, count]) => {
  console.log(`  - ${p}: ${count} visual keys`);
});

console.log("\nTop 15 most reused visual components:");
Object.entries(byComponent).sort((a, b) => b[1] - a[1]).slice(0, 15).forEach(([c, count]) => {
  console.log(`  - ${c}: reused across ${count} visual keys`);
});

console.log(`\nTotal keys mapped to a 'Placeholder' component: ${placeholders.length}`);
if (placeholders.length > 0) {
  console.log("Placeholder keys:");
  placeholders.slice(0, 20).forEach((k) => console.log(`  - ${k}`));
  if (placeholders.length > 20) {
    console.log(`  ... and ${placeholders.length - 20} more.`);
  }
}
console.log(`==============================================================================================\n`);
