"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { issueLearningRecord } from "./learning-record-engine";

export async function getNextModule(level: number, moduleNumber: string, assetClass: string) {
  // Find all modules in this level, ordered
  const levelModules = await prisma.courseModule.findMany({
    where: { level },
    orderBy: { orderIndex: 'asc' }
  });

  const currentIndex = levelModules.findIndex((m: any) => m.moduleNumber === moduleNumber);

  // If there's another module in this level
  if (currentIndex !== -1 && currentIndex < levelModules.length - 1) {
    const nextMod = levelModules[currentIndex + 1];
    return `/course/module/${nextMod.id}`;
  }

  // If no more modules in this level, go to next level module 1
  const nextLevel = level + 1;
  const firstModNextLevel = await prisma.courseModule.findFirst({
    where: { level: nextLevel },
    orderBy: { orderIndex: 'asc' }
  });

  if (firstModNextLevel) {
    return `/course/module/${firstModNextLevel.id}`;
  }

  // If this was the last module of the final level, go to records
  return "/course";
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

  // If this was the final review, issue learning record
  if (module && module.level === 3 && module.moduleNumber === "3.10") {
    await issueLearningRecord(userId, assetClass.toUpperCase() as any, {
      profitScore: 95,
      riskScore: 95,
      consistencyScore: 95,
      disciplineScore: 100,
      finalScore: 96
    }); 
  }

  revalidatePath("/dashboard");
  revalidatePath("/course");
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
  try {
    const { getUser } = await import("./auth-actions");
    const user = await getUser();
    if (!user) throw new Error("Unauthorized");

    const analysis = await prisma.savedAnalysis.create({
      data: {
        userId: user.id,
        assetClass: data.assetClass,
        instrument: data.instrument,
        timeframe: data.timeframe,
        bias: data.bias,
        rationale: data.rationale,
        chartState: data.chartState || {},
        moduleId: data.moduleId
      }
    });

    console.log(`[saveAnalysis] Success: Created analysis ${analysis.id} for user ${user.id}`);
    
    // Forced revalidation of both path and layout to ensure server components refresh
    revalidatePath('/lab');
    revalidatePath('/lab', 'page');
    revalidatePath('/(dashboard)/lab', 'page');
    
    return { success: true, analysis };
  } catch (error) {
    console.error("[saveAnalysis] Critical Error:", error);
    return { success: false, error: String(error) };
  }
}
