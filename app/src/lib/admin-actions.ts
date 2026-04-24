"use server";

import { prisma } from "@/lib/prisma";
import { getProfile } from "./auth-actions";
import { revalidatePath } from "next/cache";

/**
 * Fetches all registered users with their progress and track information.
 * Restricted to administrators only.
 */
export async function getAllUsers() {
  const admin = await getProfile();
  if (!admin?.isAdmin) throw new Error("Unauthorized access to administrative data.");

  return await prisma.user.findMany({
    include: { 
      progress: true,
      phaseAttempts: {
        where: { status: "active" },
        take: 1
      }
    },
    orderBy: { createdAt: "desc" },
  });
}

/**
 * Resets a user's active trading phase attempt.
 * Used for operational support and manual intervention.
 */
export async function resetUserPhase(userId: string) {
  const admin = await getProfile();
  if (!admin?.isAdmin) throw new Error("Unauthorized: Only admins can reset user phases.");

  await prisma.userPhaseAttempt.updateMany({
    where: { userId, status: "active" },
    data: { 
      status: "reset",
      endedAt: new Date()
    },
  });

  revalidatePath("/admin");
  return { success: true };
}

/**
 * Updates a user's market track manually.
 */
export async function updateUserTrack(userId: string, track: any) {
  const admin = await getProfile();
  if (!admin?.isAdmin) throw new Error("Unauthorized");

  await prisma.user.update({
    where: { id: userId },
    data: { marketTrack: track }
  });

  revalidatePath("/admin");
  return { success: true };
}
