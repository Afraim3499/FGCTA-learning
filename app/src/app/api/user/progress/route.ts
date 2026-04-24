import { prisma } from "@/lib/prisma";
import { getUser } from "@/lib/auth-actions";
import { NextResponse } from "next/server";

export async function GET() {
  const user = await getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const progress = await prisma.userProgress.findUnique({
    where: { userId: user.id },
    select: {
      currentLevel: true,
      currentPhase: true,
      xpTotal: true,
      xpRank: true,
      certLevel: true,
      streakDays: true,
      challengeExamsPassed: true
    }
  });

  if (!progress) return NextResponse.json({ error: "Progress not initialized" }, { status: 404 });

  return NextResponse.json(progress);
}
