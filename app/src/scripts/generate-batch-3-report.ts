import * as fs from "fs";
import * as path from "path";

const dataPath = path.join(__dirname, "dumped_30_strategies.json");
const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

// Batch 3 is strategies 21-30 (index 20 to 29)
const batch3 = data.slice(20, 30);

console.log("# Batch 3 Strategy Summaries\n");

batch3.forEach((s: any, idx: number) => {
  const lp = s.learningProfile;
  const vm = s.visualModel;
  console.log(`## Strategy ${idx + 21}: ${s.name}`);
  console.log(`- **Asset Class**: ${s.assetClass}`);
  console.log(`- **Family**: ${lp.family}`);
  console.log(`- **Level**: ${lp.level}`);
  console.log(`- **Simple Explanation**: ${lp.simpleExplanation}`);
  console.log(`- **Why Exists**: ${lp.whyExists}`);
  console.log(`- **Why Useful**: ${lp.whyUseful}`);
  console.log(`- **Timeframe**: ${lp.suitableTimeframes}`);
  console.log(`- **Visual Category**: ${vm.visualCategory}`);
  console.log(`- **Component Type**: ${vm.componentType}`);
  console.log(`- **Chart Title**: ${vm.chartTitle}`);
  console.log(`- **Required Labels**: ${JSON.stringify(vm.requiredLabels)}`);
  console.log(`- **Required Zones**: ${JSON.stringify(vm.requiredZones)}`);
  console.log(`- **Invalidation Rules**: ${lp.invalidationRules}`);
  console.log(`- **Risk Rules**: ${lp.riskRules}`);
  console.log("\n---\n");
});
