import { prisma } from "@/lib/prisma";
import { getUser } from "@/lib/auth-actions";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const user = await getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(request.url);
  const assetClass = searchParams.get("assetClass")?.toUpperCase();

  // Get user progress to determine max tier access
  const progress = await prisma.userProgress.findUnique({
    where: { userId: user.id }
  });

  const currentLevel = progress?.currentLevel || 0;

  // Fetch strategies filtered by user's progress level
  // Note: Level 0-8 map to specific difficulty/tier.
  const strategies = await (prisma as any).strategy.findMany({
    where: {
      ...(assetClass && { assetClass: assetClass as any }),
      sequenceNumber: {
        lte: (currentLevel + 1) * 10 // Approximation: every level unlocks 10 more institutional families
      }
    },
    orderBy: { sequenceNumber: "asc" }
  });

  return NextResponse.json({
    count: strategies.length,
    tier_access: currentLevel,
    strategies
  });
}
