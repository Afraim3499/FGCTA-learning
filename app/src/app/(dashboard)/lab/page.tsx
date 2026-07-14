import { getUser, getProfile } from "@/lib/auth-actions";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { StrategyLabClient } from "@/components/academy/strategy-lab-client";
import { Suspense } from "react";
import { getCompletedStrategyRefs } from "@/lib/strategy-curriculum";

/**
 * Strategy Lab (V1) — Server Component
 * 
 * Acts as the operational reference layer for students.
 * Fetches user track and progress to populate the client-side library.
 */
export default async function StrategyLabPage({
  searchParams,
}: {
  searchParams?: Promise<{ strategy?: string }>;
}) {
  const user = await getUser();
  if (!user) return null;
  const resolvedSearchParams = searchParams ? await searchParams : {};

  const profile = await prisma.user.findUnique({
    where: { id: user.id },
    select: { 
      isAdmin: true,
      marketTrack: true,
      progress: {
        select: { currentLevel: true }
      }
    },
  });

  const currentLevel = profile?.progress?.currentLevel ?? 0;

  // Get completed module numbers
  const completions = await prisma.moduleCompletion.findMany({
    where: { userId: user.id },
    include: {
      module: {
        select: {
          id: true,
          moduleNumber: true,
          level: true,
          title: true,
          logicIds: true,
          strategyFamilies: true,
        },
      },
    },
  });

  const completedModuleNumbers = new Set<string>(completions.map((c: any) => c.module.moduleNumber));
  const completedStrategyRefs = getCompletedStrategyRefs(
    completions.map((c: any) => ({ ...c.module, completed: true }))
  );

  // Fetch saved analyses
  const savedAnalyses = await prisma.savedAnalysis.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" }
  });

  // Fetch upgraded strategy records only. The database contains a large backlog of
  // strategy drafts; Strategy Lab should not expose rows before the vault upgrade
  // has produced both learning content and a visual model.
  const allDbStrategies = await prisma.strategy.findMany({
    orderBy: { sequenceNumber: "asc" }
  });
  const dbStrategies = allDbStrategies.filter((strategy: any) => (
    strategy.learningProfile !== null && strategy.visualModel !== null
  ));

  // Fetch all modules for linking
  const modules = await prisma.courseModule.findMany({
    select: {
      id: true,
      moduleNumber: true,
      level: true,
      title: true,
      logicIds: true,
      strategyFamilies: true,
    }
  });

  console.log("--- STRATEGY LAB DIAGNOSTIC LOG ---", {
    userId: user.id,
    userTrack: profile?.marketTrack,
    userLevel: currentLevel,
    dbStrategiesCount: dbStrategies.length,
    staticStrategiesCount: 25,
    modulesCount: modules.length,
    completedStrategyRefsCount: completedStrategyRefs.length,
  });

  return (
    <div className="flex flex-col h-[calc(100vh-100px)] overflow-hidden">
      <Suspense fallback={<div className="p-8 text-center text-slate-400 font-medium">Loading Strategy Lab...</div>}>
        <StrategyLabClient 
          userTrack={profile?.marketTrack || "forex"} 
          currentLevel={currentLevel}
          completedModuleNumbers={completedModuleNumbers}
          initialSavedAnalyses={savedAnalyses}
          dbStrategies={dbStrategies}
          modules={modules}
          completedStrategyRefs={completedStrategyRefs}
          initialStrategyRef={resolvedSearchParams?.strategy}
          canBypassLocks={profile?.isAdmin || false}
        />
      </Suspense>
    </div>
  );
}

