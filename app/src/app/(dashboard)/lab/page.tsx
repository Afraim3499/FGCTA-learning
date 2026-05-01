import { getUser, getProfile } from "@/lib/auth-actions";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { StrategyLabClient } from "@/components/academy/strategy-lab-client";

/**
 * Strategy Lab (V1) — Server Component
 * 
 * Acts as the operational reference layer for students.
 * Fetches user track and progress to populate the client-side library.
 */
export default async function StrategyLabPage() {
  const user = await getUser();
  if (!user) redirect("/login");

  const profile = await prisma.user.findUnique({
    where: { id: user.id },
    select: { marketTrack: true },
  });

  // Get completed module numbers
  const completions = await prisma.moduleCompletion.findMany({
    where: { userId: user.id },
    include: { module: { select: { moduleNumber: true } } },
  });

  const completedModuleNumbers = new Set(completions.map(c => c.module.moduleNumber));

  // Fetch saved analyses
  const savedAnalyses = await prisma.savedAnalysis.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" }
  });

  // Fetch all strategies from DB
  const dbStrategies = await prisma.strategy.findMany({
    orderBy: { sequenceNumber: "asc" }
  });

  return (
    <div className="space-y-8 pb-10 h-[calc(100vh-140px)]">
      {/* Header */}
      <section className="flex items-center justify-between shrink-0">
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-[var(--ln-navy-900)] tracking-tight">
            Technical Library
          </h1>
          <div className="flex items-center gap-3">
            <p className="text-[var(--ln-text-secondary)] font-medium text-sm">
              Review key academy concepts and practice them with structure.
            </p>
          </div>
        </div>
      </section>

      <StrategyLabClient 
        userTrack={profile?.marketTrack || "forex"} 
        completedModuleNumbers={completedModuleNumbers}
        initialSavedAnalyses={savedAnalyses}
        dbStrategies={dbStrategies}
      />
    </div>
  );
}
