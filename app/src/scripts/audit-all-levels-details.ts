import { level0Curriculum } from "../content/level-0";
import { level1Curriculum } from "../content/level-1";
import { level2Curriculum } from "../content/level-2";
import { level3Curriculum } from "../content/level-3";
import { level4Curriculum } from "../content/level-4";
import { level5Curriculum } from "../content/level-5";
import { AcademyModule, LessonCard } from "../types/curriculum";

interface LevelStats {
  level: number;
  totalModules: number;
  totalCards: number;
  uniqueWhyThisMatters: number;
  uniqueQuickNote: number;
  uniqueCommonMistake: number;
  uniqueRealLifeExample: number;
  uniqueKeyTerms: number;
  uniqueBodyText: number;
}

function auditLevel(levelNum: number, curriculum: AcademyModule[]): LevelStats {
  let totalCards = 0;
  const whyThisMatters = new Set<string>();
  const quickNote = new Set<string>();
  const commonMistake = new Set<string>();
  const realLifeExample = new Set<string>();
  const keyTerms = new Set<string>();
  const bodyText = new Set<string>();

  curriculum.forEach((mod) => {
    Object.values(mod.tracks).forEach((cards) => {
      cards.forEach((card) => {
        totalCards++;
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

  return {
    level: levelNum,
    totalModules: curriculum.length,
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
    { num: 5, curriculum: level5Curriculum }
  ];

  console.log(`\n=================================== CURRICULUM DUPLICATION AUDIT ===================================`);
  console.log(`Level\tModules\tCards\tUniqWhy\tUniqNote\tUniqMistake\tUniqExample\tUniqTerms\tUniqBody`);
  console.log(`-----------------------------------------------------------------------------------------------------`);

  levels.forEach((l) => {
    const stats = auditLevel(l.num, l.curriculum);
    console.log(
      `${stats.level}\t` +
      `${stats.totalModules}\t` +
      `${stats.totalCards}\t` +
      `${stats.uniqueWhyThisMatters}\t` +
      `${stats.uniqueQuickNote}\t\t` +
      `${stats.uniqueCommonMistake}\t\t` +
      `${stats.uniqueRealLifeExample}\t\t` +
      `${stats.uniqueKeyTerms}\t\t` +
      `${stats.uniqueBodyText}`
    );
  });
  console.log(`=====================================================================================================\n`);
}

runAllAudits();
