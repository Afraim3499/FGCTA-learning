import { STRATEGIES_DATA } from "../lib/strategies-data";

console.log("--- STRATEGY INVENTORY ---");
console.log(`Total Strategies defined: ${STRATEGIES_DATA.length}\n`);

const levelsMap: Record<number, string[]> = {};
const tracksMap: Record<string, string[]> = {};

STRATEGIES_DATA.forEach(s => {
  if (!levelsMap[s.level]) levelsMap[s.level] = [];
  levelsMap[s.level].push(`${s.logicId} (${s.name})`);

  if (!tracksMap[s.track]) tracksMap[s.track] = [];
  tracksMap[s.track].push(s.logicId);
});

console.log("By Levels:");
Object.keys(levelsMap).sort().forEach(lvl => {
  console.log(`Level ${lvl}:`);
  levelsMap[parseInt(lvl)].forEach(item => {
    console.log(`  - ${item}`);
  });
});

console.log("\nBy Tracks:");
Object.keys(tracksMap).forEach(track => {
  console.log(`Track '${track}': ${tracksMap[track].join(", ")}`);
});
