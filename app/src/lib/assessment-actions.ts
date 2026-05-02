"use server";

import { prisma } from "@/lib/prisma";
import { getUser } from "@/lib/auth-actions";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { completeModule } from "./academy-actions";
import { logUserEvent } from "./analytics";

export type AssessmentResult = {
  success: boolean;
  failureType?: "TRAP" | "MISS_ZONE" | "RISK_VIOLATION";
  message: string;
  rationale: string;
  chartState?: any;
};

/**
 * Submits a module assessment for institutional review.
 * 
 * If it's a "Wipeout" (Fail), it logs a remediation requirement and redirects to /liquidation.
 */
export async function submitAssessment(moduleId: string, result: AssessmentResult) {
  const user = await getUser();
  if (!user) throw new Error("Unauthorized");

  if (!result.success) {
    // Log the failure (Wipeout)
    await (prisma as any).remediationLog.create({
      data: {
        userId: user.id,
        moduleId: moduleId,
        failureType: result.failureType || "MISS_ZONE",
        details: `${result.message} - ${result.rationale}`,
        isResolved: false
      }
    });

    await logUserEvent(user.id, "ASSESSMENT_FAIL", { 
      moduleId, 
      type: result.failureType,
      message: result.message
    });

    // Award minor XP for the attempt (Experience is the best teacher)
    const ATTEMPT_XP = 50;
    const progress = await prisma.userProgress.findUnique({ where: { userId: user.id } });
    if (progress) {
       await prisma.userProgress.update({
         where: { userId: user.id },
         data: { xpTotal: progress.xpTotal + ATTEMPT_XP }
       });
    }

    // Redirect to the Liquidation/Wipeout page
    redirect(`/journey/liquidation?moduleId=${moduleId}&reason=${result.failureType}`);
  }

  // If success, complete the module normally
  // [ANTI-CHEAT]: Re-verify logic on server
  const { AntiCheatEngine } = await import("@/lib/anti-cheat");
  const cheatCheck = await AntiCheatEngine.validateSubmission(user.id, moduleId, result.chartState?.boxes || []);
  
  if (cheatCheck.isSuspicious) {
    await logUserEvent(user.id, "CHEAT_DETECTED", { moduleId, reason: cheatCheck.reason });
    // In a real production app, we might block the user here.
    // For now, we log it and force a fail.
    return submitAssessment(moduleId, { 
      success: false, 
      failureType: "TRAP", 
      message: "Connection Mismatch: Verification failed on server.",
      rationale: "Our server-side monitors detected a mismatch between your local drawing and institutional data."
    });
  }

  const module = await prisma.courseModule.findUnique({ where: { id: moduleId } });
  const completion = await completeModule(user.id, moduleId, module?.marketTrack || "forex");
  
  await logUserEvent(user.id, "ASSESSMENT_PASS", { moduleId });

  return { success: true, completion };
}

/**
 * Resolves a remediation requirement by passing a quiz.
 */
export async function resolveRemediation(moduleId: string) {
  const user = await getUser();
  if (!user) throw new Error("Unauthorized");

  const log = await (prisma as any).remediationLog.findFirst({
    where: {
      userId: user.id,
      moduleId: moduleId,
      isResolved: false
    },
    orderBy: { createdAt: "desc" }
  });

  if (!log) return { success: true, message: "No active remediation found." };

  await (prisma as any).remediationLog.update({
    where: { id: log.id },
    data: {
      isResolved: true,
      resolvedAt: new Date()
    }
  });

  revalidatePath("/dashboard");
  revalidatePath(`/journey`);

  return { success: true };
}
