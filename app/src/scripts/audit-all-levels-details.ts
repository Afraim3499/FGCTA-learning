import { level0Curriculum } from "../content/level-0";
import { level1Curriculum } from "../content/level-1";
import { level2Curriculum } from "../content/level-2";
import { level3Curriculum } from "../content/level-3";
import { level4Curriculum } from "../content/level-4";
import { level5Curriculum } from "../content/level-5";
import { level6Curriculum } from "../content/level-6";
import { level7Curriculum } from "../content/level-7";
import { level8Curriculum } from "../content/level-8";
import { level9Curriculum } from "../content/level-9";
import { AcademyModule } from "../types/curriculum";

interface LevelStats {
  level: number;
  totalModules: number;
  coreCards: number;
  forexCards: number;
  goldCards: number;
  cryptoCards: number;
  practiceCards: number;
  scenarioLinks: number;
  uniqueVisuals: number;
  totalCards: number;
  uniqueWhyThisMatters: number;
  uniqueQuickNote: number;
  uniqueCommonMistake: number;
  uniqueRealLifeExample: number;
  uniqueKeyTerms: number;
  uniqueBodyText: number;
}

function auditLevel(levelNum: number, curriculum: AcademyModule[]): LevelStats {
  let coreCards = 0;
  let forexCards = 0;
  let goldCards = 0;
  let cryptoCards = 0;
  let practiceCards = 0;
  let scenarioLinks = 0;
  
  const whyThisMatters = new Set<string>();
  const quickNote = new Set<string>();
  const commonMistake = new Set<string>();
  const realLifeExample = new Set<string>();
  const keyTerms = new Set<string>();
  const bodyText = new Set<string>();
  const visuals = new Set<string>();

  curriculum.forEach((mod) => {
    if ((mod as any).interactiveTaskType === "scenario_link" || (mod as any).interactiveTaskData?.scenarioSlug) {
      scenarioLinks++;
    }

    if (mod.tracks.core) {
      coreCards += mod.tracks.core.length;
      mod.tracks.core.forEach(c => {
        if (c.type === "practice") practiceCards++;
        if (c.visualKey) visuals.add(c.visualKey);
      });
    }
    if (mod.tracks.forex) {
      forexCards += mod.tracks.forex.length;
      mod.tracks.forex.forEach(c => {
        if (c.type === "practice") practiceCards++;
        if (c.visualKey) visuals.add(c.visualKey);
      });
    }
    if (mod.tracks.gold) {
      goldCards += mod.tracks.gold.length;
      mod.tracks.gold.forEach(c => {
        if (c.type === "practice") practiceCards++;
        if (c.visualKey) visuals.add(c.visualKey);
      });
    }
    if (mod.tracks.crypto) {
      cryptoCards += mod.tracks.crypto.length;
      mod.tracks.crypto.forEach(c => {
        if (c.type === "practice") practiceCards++;
        if (c.visualKey) visuals.add(c.visualKey);
      });
    }

    Object.values(mod.tracks).forEach((cards) => {
      cards.forEach((card) => {
        if (card.body) {
          bodyText.add(card.body.trim());
        }
        if (card.context) {
          const ctx = card.context;
          if (ctx.whyThisMatters) whyThisMatters.add(ctx.whyThisMatters.trim());
          if (ctx.quickNote) quickNote.add(ctx.quickNote.trim());
          if (ctx.commonMistake) commonMistake.add(ctx.commonMistake.trim());
          if (ctx.realLifeExample) realLifeExample.add(ctx.realLifeExample.trim());
          
          if (ctx.keyTerms) {
            ctx.keyTerms.forEach((kt: any) => {
              const term = typeof kt === "string" ? kt : kt.term;
              const def = typeof kt === "string" ? "" : kt.definition;
              keyTerms.add(`${term.trim()}:${def.trim()}`);
            });
          }
        }
      });
    });
  });

  const totalCards = coreCards + forexCards + goldCards + cryptoCards;

  return {
    level: levelNum,
    totalModules: curriculum.length,
    coreCards,
    forexCards,
    goldCards,
    cryptoCards,
    practiceCards,
    scenarioLinks,
    uniqueVisuals: visuals.size,
    totalCards,
    uniqueWhyThisMatters: whyThisMatters.size,
    uniqueQuickNote: quickNote.size,
    uniqueCommonMistake: commonMistake.size,
    uniqueRealLifeExample: realLifeExample.size,
    uniqueKeyTerms: keyTerms.size,
    uniqueBodyText: bodyText.size
  };
}

function runAllAudits() {
  const levels = [
    { num: 0, curriculum: level0Curriculum },
    { num: 1, curriculum: level1Curriculum },
    { num: 2, curriculum: level2Curriculum },
    { num: 3, curriculum: level3Curriculum },
    { num: 4, curriculum: level4Curriculum },
    { num: 5, curriculum: level5Curriculum },
    { num: 6, curriculum: level6Curriculum },
    { num: 7, curriculum: level7Curriculum },
    { num: 8, curriculum: level8Curriculum },
    { num: 9, curriculum: level9Curriculum }
  ];

  console.log(`\n====================================================== STRUCTURAL DETAILS ======================================================`);
  console.log(`Level\tModules\tCore\tForex\tGold\tCrypto\tPract\tScen\tVis\tTotal`);
  console.log(`--------------------------------------------------------------------------------------------------------------------------------`);
  levels.forEach((l) => {
    const stats = auditLevel(l.num, l.curriculum);
    console.log(`${stats.level}\t${stats.totalModules}\t${stats.coreCards}\t${stats.forexCards}\t${stats.goldCards}\t${stats.cryptoCards}\t${stats.practiceCards}\t${stats.scenarioLinks}\t${stats.uniqueVisuals}\t${stats.totalCards}`);
  });
  console.log(`================================================================================================================================\n`);

  console.log(`\n====================================================== DUPLICATION AUDIT =======================================================`);
  console.log(`Level\tTotalCards\tUniqWhy\tUniqNote\tUniqMistake\tUniqExample\tUniqTerms\tUniqBody`);
  console.log(`--------------------------------------------------------------------------------------------------------------------------------`);
  levels.forEach((l) => {
    const stats = auditLevel(l.num, l.curriculum);
    console.log(
      `${stats.level}\t` +
      `${stats.totalCards}\t` +
      `${stats.uniqueWhyThisMatters}\t` +
      `${stats.uniqueQuickNote}\t\t` +
      `${stats.uniqueCommonMistake}\t\t` +
      `${stats.uniqueRealLifeExample}\t\t` +
      `${stats.uniqueKeyTerms}\t\t` +
      `${stats.uniqueBodyText}`
    );
  });
  console.log(`================================================================================================--------------------------------\n`);
}

runAllAudits();
