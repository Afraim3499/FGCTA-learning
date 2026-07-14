import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import {
  getLegacyStrategyCode,
  getStrategyFamily,
  getStrategyLevel,
  getVaultStrategyRef,
  strategyMatchesModule,
} from "../lib/strategy-curriculum";

dotenv.config();

const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
if (!connectionString) {
  console.error("DATABASE URL missing");
  process.exit(1);
}

const isLocal = connectionString.includes("localhost") || connectionString.includes("127.0.0.1");
const pool = new Pool({
  connectionString,
  ssl: isLocal ? false : { rejectUnauthorized: false },
});

const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });

async function main() {
  const [strategies, modules, examQuestions] = await Promise.all([
    prisma.strategy.findMany({
      orderBy: [{ sequenceNumber: "asc" }, { id: "asc" }],
      select: {
        id: true,
        name: true,
        assetClass: true,
        sequenceNumber: true,
        parentFamily: true,
        learningProfile: true,
        visualModel: true,
      },
    }),
    prisma.courseModule.findMany({
      orderBy: [{ level: "asc" }, { orderIndex: "asc" }],
      select: {
        id: true,
        level: true,
        moduleNumber: true,
        title: true,
        logicIds: true,
        strategyFamilies: true,
      },
    }),
    prisma.examQuestion.findMany({
      select: {
        id: true,
        level: true,
        logicId: true,
      },
    }),
  ]);

  const readyStrategies = strategies.filter(strategy => strategy.learningProfile && strategy.visualModel);
  const moduleLogicRefs = new Set(modules.flatMap(module => module.logicIds || []));
  const examLogicRefs = new Set(examQuestions.map(question => question.logicId).filter(Boolean) as string[]);

  const readyCoverage = readyStrategies.map(strategy => {
    const logicId = getVaultStrategyRef(strategy.id);
    const displayCode = getLegacyStrategyCode(strategy.assetClass, strategy.sequenceNumber);
    const strategyShape = {
      id: strategy.id,
      logicId,
      displayCode,
      sequenceNumber: strategy.sequenceNumber,
      assetClass: strategy.assetClass,
      parentFamily: strategy.parentFamily,
      learningProfile: strategy.learningProfile,
    };
    const linkedModules = modules.filter(module => strategyMatchesModule(strategyShape, module));

    return {
      id: strategy.id,
      logicId,
      displayCode,
      name: strategy.name,
      assetClass: strategy.assetClass,
      level: getStrategyLevel(strategyShape),
      family: getStrategyFamily(strategyShape),
      moduleCount: linkedModules.length,
      moduleNumbers: linkedModules.map(module => module.moduleNumber),
      examQuestionCount: examQuestions.filter(question => question.logicId === logicId || question.logicId === displayCode || question.logicId === strategy.id).length,
      hasModuleRef: linkedModules.length > 0 || moduleLogicRefs.has(logicId) || moduleLogicRefs.has(displayCode) || moduleLogicRefs.has(strategy.id),
      hasExamRef: examLogicRefs.has(logicId) || examLogicRefs.has(displayCode) || examLogicRefs.has(strategy.id),
    };
  });

  const modulesWithLinks = modules.filter(module => (module.logicIds || []).length > 0 || (module.strategyFamilies || []).length > 0);
  const byLevel = Array.from({ length: 10 }, (_, level) => {
    const levelStrategies = readyCoverage.filter(strategy => strategy.level === level);
    const levelModules = modules.filter(module => module.level === level);
    return {
      level,
      modules: levelModules.length,
      modulesWithLinks: levelModules.filter(module => (module.logicIds || []).length > 0 || (module.strategyFamilies || []).length > 0).length,
      readyStrategies: levelStrategies.length,
      readyStrategiesWithModuleLinks: levelStrategies.filter(strategy => strategy.hasModuleRef).length,
      readyStrategiesWithExamQuestions: levelStrategies.filter(strategy => strategy.hasExamRef).length,
    };
  });

  const report = {
    totals: {
      strategies: strategies.length,
      readyStrategies: readyStrategies.length,
      modules: modules.length,
      modulesWithLinks: modulesWithLinks.length,
      examQuestions: examQuestions.length,
      examQuestionsWithStrategyRef: examQuestions.filter(question => question.logicId).length,
    },
    byLevel,
    unmappedReadyStrategies: readyCoverage
      .filter(strategy => !strategy.hasModuleRef)
      .map(strategy => ({
        logicId: strategy.logicId,
        displayCode: strategy.displayCode,
        name: strategy.name,
        assetClass: strategy.assetClass,
        level: strategy.level,
        family: strategy.family,
      })),
    readyStrategiesWithoutExamQuestions: readyCoverage
      .filter(strategy => !strategy.hasExamRef)
      .map(strategy => ({
        logicId: strategy.logicId,
        displayCode: strategy.displayCode,
        name: strategy.name,
        assetClass: strategy.assetClass,
        level: strategy.level,
      })),
  };

  console.log(JSON.stringify(report, null, 2));
}

main()
  .catch(error => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
