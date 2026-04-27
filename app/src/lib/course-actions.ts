"use server";

import { prisma } from "@/lib/prisma";
import { getUser } from "@/lib/auth-actions";
import { getXPRank } from "./utils";
import { logUserEvent } from "./analytics";

/**
 * Fetches all course levels and calculates the completion percentage for the current user.
 */
export async function getCourseLevels() {
  const user = await getUser();
  if (!user) throw new Error("Unauthorized");

  const profile = await prisma.user.findUnique({
    where: { id: user.id },
    select: { marketTrack: true },
  });
  const userTrack = profile?.marketTrack || "forex";
  const trackCondition = userTrack === "multi" ? {} : { OR: [{ marketTrack: "core" }, { marketTrack: userTrack as any }] };

  // Fetch all modules grouped by level that belong to the user's track or core
  const allModules = await prisma.courseModule.findMany({
    where: trackCondition as any,
    select: { id: true, level: true, moduleNumber: true },
  });

  // Filter Level 1 to only 1.1-1.5 for students
  const approvedL1 = ["1.1", "1.2", "1.3", "1.4", "1.5"];
  const modules = allModules.filter(mod => {
    if (mod.level === 1) {
      return approvedL1.includes(mod.moduleNumber);
    }
    return true;
  });

  // Fetch all completions for the current user
  const completions = await prisma.moduleCompletion.findMany({
    where: { userId: user.id },
    select: { moduleId: true },
  });

  const completedModuleIds = new Set(completions.map((c) => c.moduleId));

  // Calculate stats per level
  const levelStats: Record<number, { total: number; completed: number }> = {};
  
  modules.forEach((mod) => {
    if (!levelStats[mod.level]) {
      levelStats[mod.level] = { total: 0, completed: 0 };
    }
    levelStats[mod.level].total++;
    if (completedModuleIds.has(mod.id)) {
      levelStats[mod.level].completed++;
    }
  });

  // Fetch the user's progress to check current level
  const progress = await prisma.userProgress.findUnique({
    where: { userId: user.id },
    select: { currentLevel: true },
  });

  const currentLevel = progress?.currentLevel ?? 0;

  // Format the output
  const levels = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((level) => {
    const stats = levelStats[level] || { total: 0, completed: 0 };
    const completionPct = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;
    
    return {
      level,
      title: getLevelTitle(level),
      totalModules: stats.total,
      completedModules: stats.completed,
      completionPct,
      locked: level > 0 && stats.total === 0, // Lock if no content
      testUnlocked: stats.total > 0 && stats.completed === stats.total, 
    };
  });

  return levels.sort((a, b) => a.level - b.level);
}

/**
 * Fetches all modules for a specific level with user completion status.
 */
export async function getModules(level: number) {
  const user = await getUser();
  if (!user) throw new Error("Unauthorized");

  const profile = await prisma.user.findUnique({
    where: { id: user.id },
    select: { marketTrack: true, progress: { select: { currentLevel: true } } },
  });
  const userTrack = profile?.marketTrack || "forex";
  const trackCondition = userTrack === "multi" ? {} : { OR: [{ marketTrack: "core" }, { marketTrack: userTrack as any }] };

  /* TEMPORARY UNLOCK FOR TESTING
  if (level > (profile?.progress?.currentLevel ?? 0)) {
    throw new Error("Level is locked");
  }
  */

  const rawModules = await prisma.courseModule.findMany({
    where: {
      level,
      ...(trackCondition as any),
    },
    orderBy: { orderIndex: "asc" },
    select: {
      id: true,
      moduleNumber: true,
      title: true,
      objective: true,
      skillLevel: true,
      orderIndex: true,
    },
  });

  // Filter Level 1 to only 1.1-1.5 for students
  const approvedL1 = ["1.1", "1.2", "1.3", "1.4", "1.5"];
  const modules = level === 1 
    ? rawModules.filter(m => approvedL1.includes(m.moduleNumber))
    : rawModules;

  const completions = await prisma.moduleCompletion.findMany({
    where: {
      userId: user.id,
      moduleId: { in: modules.map((m) => m.id) },
    },
    select: { moduleId: true },
  });

  const completedModuleIds = new Set(completions.map((c) => c.moduleId));

  return modules.map((mod) => ({
    ...mod,
    completed: completedModuleIds.has(mod.id),
  }));
}

/**
 * Fetches the specific content for a module.
 */
export async function getModuleContent(moduleId: string) {
  const user = await getUser();
  if (!user) throw new Error("Unauthorized");

  let module = await prisma.courseModule.findUnique({
    where: { id: moduleId },
  });

  if (!module) {
    const parts = moduleId.split('.');
    if (parts.length === 2) {
      const level = parseInt(parts[0]);
      module = await prisma.courseModule.findFirst({
        where: { level, moduleNumber: moduleId }
      });
    }
  }

  if (!module) throw new Error(`Module ${moduleId} not found`);
  
  const profile = await prisma.user.findUnique({
    where: { id: user.id },
    select: { isAdmin: true, marketTrack: true, progress: { select: { currentLevel: true } } },
  });

  const approvedL1 = ["1.1", "1.2", "1.3", "1.4", "1.5"];

  // Blocker 5: Legacy filtering - Reject non-approved Level 1 modules for students
  if (module.level === 1 && !approvedL1.includes(module.moduleNumber)) {
    if (!profile?.isAdmin) {
      throw new Error("Access denied: This module is archived or not part of the active curriculum.");
    }
  }

  const userTrack = profile?.marketTrack || "forex";
  const trackCondition = userTrack === "multi" ? {} : { OR: [{ marketTrack: "core" }, { marketTrack: userTrack as any }] };

  // Verify track access
  if (userTrack !== "multi" && module.marketTrack !== "core" && module.marketTrack !== (userTrack as any)) {
    throw new Error("Access denied: This module belongs to another market track.");
  }

  // Get all modules in this level (restricted to track) to find neighbors
  const rawInLevel = await prisma.courseModule.findMany({
    where: {
      level: module.level,
      ...(trackCondition as any),
    },
    orderBy: { orderIndex: "asc" },
    select: { id: true, moduleNumber: true },
  });

  // Filter Level 1 for navigation
  const allInLevel = module.level === 1
    ? rawInLevel.filter(m => approvedL1.includes(m.moduleNumber))
    : rawInLevel;

  const currentIndex = allInLevel.findIndex((m) => m.id === module.id);
  const prevModuleId = currentIndex > 0 ? allInLevel[currentIndex - 1].id : null;
  const nextModuleId =
    currentIndex < allInLevel.length - 1 ? allInLevel[currentIndex + 1].id : null;

  /* TEMPORARY UNLOCK FOR TESTING
  if (module.level > (profile?.progress?.currentLevel ?? 0)) {
    throw new Error("Module is locked");
  }
  */

  const completion = await prisma.moduleCompletion.findUnique({
    where: {
      userId_moduleId: {
        userId: user.id,
        moduleId,
      },
    },
  });

  return {
    ...module,
    completed: !!completion,
    prevModuleId,
    nextModuleId,
  };
}

/**
 * Marks a module as completed and awards XP to the user.
 */
export async function completeModule(
  moduleId: string, 
  taskResult?: any
) {
  const user = await getUser();
  if (!user) throw new Error("Unauthorized");

  const module = await prisma.courseModule.findUnique({
    where: { id: moduleId },
  });

  if (!module) throw new Error("Module not found");

  // Check level lock
  const userProgress = await prisma.userProgress.findUnique({
    where: { userId: user.id },
    select: { currentLevel: true },
  });

  /* TEMPORARY UNLOCK FOR TESTING
  if (module.level > (userProgress?.currentLevel ?? 0)) {
    throw new Error("Cannot complete modules in a locked level");
  }
  */

  // Standard award for module completion (Level 0, Level 1, and Level 2.7-2.11 award 0 XP)
  const isPracticeModule = 
    module.level === 0 || 
    module.level === 1 || 
    (module.level === 2 && parseFloat(module.moduleNumber) >= 2.7 && parseFloat(module.moduleNumber) <= 2.11);
  
  const XP_AWARD = isPracticeModule ? 0 : 50;

  try {
    return await prisma.$transaction(async (tx) => {
      // 1. Create the completion record (unique constraint will catch duplicates)
      const completion = await tx.moduleCompletion.create({
        data: {
          userId: user.id,
          moduleId: module.id,
          xpAwarded: XP_AWARD,
        },
      });

      await logUserEvent(user.id, "MODULE_COMPLETE", { 
        moduleId, 
        level: module.level,
        taskResult: taskResult || null
      });

      // 2. Add entry to XP ledger
      await tx.xPLedgerEntry.create({
        data: {
          userId: user.id,
          xpAmount: XP_AWARD,
          action: "MODULE_COMPLETE",
          sourceId: completion.id,
          sourceType: "module",
        },
      });

      // 3. Update user progress total and rank
      const progress = await tx.userProgress.findUnique({
        where: { userId: user.id },
      });

      if (progress) {
        const newTotal = progress.xpTotal + XP_AWARD;
        const newRank = getXPRank(newTotal);

        await tx.userProgress.update({
          where: { userId: user.id },
          data: {
            xpTotal: newTotal,
            xpRank: newRank,
          },
        });
      }

      return { success: true, xpAwarded: XP_AWARD };
    });
  } catch (error: any) {
    // If it's a P2002 (Unique constraint failed), it means they already completed it
    if (error.code === "P2002") {
      return { success: false, error: "Module already completed" };
    }
    throw error;
  }
}

// Helper function to map level number to blueprint title
function getLevelTitle(level: number): string {
  const titles: Record<number, string> = {
    0: "Market Foundations",
    1: "Awakening",
    2: "Mechanics",
    3: "Order Flow",
    4: "Time & Price",
    5: "Risk Mgmt",
    6: "Macro",
    7: "Synthesis",
    8: "The Crucible",
  };
  return titles[level] || `Level ${level}`;
}
