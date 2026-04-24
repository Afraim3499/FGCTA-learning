"use server";

import { prisma } from "./prisma";
import { getUser } from "./auth-actions";
import { revalidatePath } from "next/cache";

/**
 * Updates the user's daily activity streak.
 * Logic: 
 * - If last active was today: do nothing.
 * - If last active was yesterday: increment streak.
 * - If last active was before yesterday: reset streak to 1.
 */
export async function updateActivityStreak() {
  const user = await getUser();
  if (!user) return;

  const progress = await prisma.userProgress.findUnique({
    where: { userId: user.id },
  });

  if (!progress) return;

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
  const lastActive = progress.streakStart ? new Date(progress.streakStart) : null;
  const lastActiveDate = lastActive ? new Date(lastActive.getFullYear(), lastActive.getMonth(), lastActive.getDate()) : null;

  if (lastActiveDate && lastActiveDate.getTime() === today.getTime()) {
    return; // Already active today
  }

  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  let newStreak = 1;
  if (lastActiveDate && lastActiveDate.getTime() === yesterday.getTime()) {
    newStreak = progress.streakDays + 1;
  }

  await prisma.userProgress.update({
    where: { userId: user.id },
    data: {
      streakDays: newStreak,
      streakStart: now,
    },
  });
}

/**
 * Checks and awards milestones (badges) based on conditions.
 */
export async function checkMilestones() {
  const user = await getUser();
  if (!user) return;

  const [tradesCount, totalPnl] = await Promise.all([
    prisma.trade.count({ where: { userId: user.id } }),
    prisma.trade.aggregate({ 
      where: { userId: user.id, exitPrice: { not: null } },
      _sum: { pnl: true }
    })
  ]);

  const milestones = [
    { name: "First Trade", condition: tradesCount >= 1 },
    { name: "First Profit", condition: (totalPnl._sum.pnl ? Number(totalPnl._sum.pnl) : 0) > 0 },
  ];

  for (const m of milestones) {
    if (m.condition) {
      const badge = await prisma.badge.findUnique({ where: { name: m.name } });
      if (badge) {
        await prisma.userBadge.upsert({
          where: {
            userId_badgeId: {
              userId: user.id,
              badgeId: badge.id
            }
          },
          update: {},
          create: {
            userId: user.id,
            badgeId: badge.id
          }
        });
      }
    }
  }
}
