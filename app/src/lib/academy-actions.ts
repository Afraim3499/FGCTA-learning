"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { issueCertification } from "./certification-engine";

export async function getNextModule(level: number, moduleNumber: string, assetClass: string) {
  // Find all modules in this level, ordered
  const levelModules = await prisma.courseModule.findMany({
    where: { level },
    orderBy: { orderIndex: 'asc' }
  });

  const currentIndex = levelModules.findIndex(m => m.moduleNumber === moduleNumber);

  // If there's another module in this level
  if (currentIndex !== -1 && currentIndex < levelModules.length - 1) {
    const nextMod = levelModules[currentIndex + 1];
    return `/journey/${assetClass}/tier-${level}/module-${nextMod.moduleNumber}`;
  }

  // If no more modules in this level, go to next level module 1
  const nextLevel = level + 1;
  const firstModNextLevel = await prisma.courseModule.findFirst({
    where: { level: nextLevel },
    orderBy: { orderIndex: 'asc' }
  });

  if (firstModNextLevel) {
    return `/journey/${assetClass}/tier-${nextLevel}/module-${firstModNextLevel.moduleNumber}`;
  }

  // If this was the last module of the final level, go to Certification
  return "/journey/certification";
}

export async function completeModule(userId: string, moduleId: string, assetClass: string) {
  const module = await prisma.courseModule.findUnique({ where: { id: moduleId } });
  
  await prisma.moduleCompletion.upsert({
    where: {
      userId_moduleId: {
        userId,
        moduleId
      }
    },
    update: {
      completedAt: new Date()
    },
    create: {
      userId,
      moduleId,
      xpAwarded: (module?.level ?? 0) <= 1 ? 0 : 50
    }
  });

  // If this was the final crucible, issue certification
  if (module && module.level === 8 && module.moduleNumber === "8.1") {
    await issueCertification(userId, assetClass.toUpperCase() as any, {
      profitScore: 95,
      riskScore: 95,
      consistencyScore: 95,
      disciplineScore: 100,
      finalScore: 96
    }); 
  }

  revalidatePath("/dashboard");
  revalidatePath(`/journey/${assetClass}`);
}

export async function saveAnalysis(data: {
  assetClass: string;
  instrument: string;
  timeframe: string;
  bias: string;
  rationale: string;
  chartState: any;
  moduleId?: string;
}) {
  const { getUser } = await import("./auth-actions");
  const user = await getUser();
  if (!user) throw new Error("Unauthorized");

  const result = await prisma.savedAnalysis.create({
    data: {
      userId: user.id,
      assetClass: data.assetClass,
      instrument: data.instrument,
      timeframe: data.timeframe,
      bias: data.bias,
      rationale: data.rationale,
      chartState: data.chartState,
      moduleId: data.moduleId
    }
  });

  revalidatePath("/dashboard/lab");
  return { success: true, analysis: result };
}
