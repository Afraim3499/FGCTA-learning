import { prisma } from "@/lib/prisma";

export interface CertScore {
  profitScore: number;
  riskScore: number;
  consistencyScore: number;
  disciplineScore: number;
  finalScore: number;
}

/**
 * Calculates the learning score based on a completed practice session.
 * Scores are weighted based on pedagogical standards.
 */
export async function calculateLearningScore(attemptId: string): Promise<CertScore> {
  const attempt = await prisma.userPhaseAttempt.findUnique({
    where: { id: attemptId },
    include: { trades: true, violations: true },
  });

  if (!attempt) throw new Error("Attempt not found");

  const trades = attempt.trades;
  const totalTrades = trades.length;

  // 1. Progress Score (Target: hitting the practice target)
  const startingEquity = Number(attempt.startingEquity);
  const currentEquity = Number(attempt.currentEquity);
  const profitMade = currentEquity - startingEquity;
  // Assuming a 10% progress target for baseline
  const profitTarget = startingEquity * 0.10;
  const profitScore = Math.min(100, Math.max(0, (profitMade / profitTarget) * 100));

  // 2. Risk Awareness Score (Based on Max Drawdown relative to limit)
  const maxDD = Number(attempt.maxDrawdown);
  const ddLimit = 5.0; // 5% limit
  const riskScore = Math.max(0, 100 - (maxDD / ddLimit) * 100);

  // 3. Discipline Score (Based on Rule Violations)
  const violations = attempt.violations.length;
  const disciplineScore = Math.max(0, 100 - (violations * 20)); // -20 points per violation

  // 4. Consistency Score (Win Rate + Avg R-Multiple)
  const wins = trades.filter(t => Number(t.pnl || 0) > 0).length;
  const winRate = totalTrades > 0 ? (wins / totalTrades) * 100 : 0;
  
  // Consistency is a mix of win-rate (ideal 40-60%) and survival
  const consistencyScore = winRate; 

  const finalScore = (
    (profitScore * 0.4) + 
    (riskScore * 0.3) + 
    (disciplineScore * 0.2) + 
    (consistencyScore * 0.1)
  );

  return {
    profitScore,
    riskScore,
    disciplineScore,
    consistencyScore,
    finalScore
  };
}

/**
 * Issues a new learning record in the database.
 */
export async function issueLearningRecord(userId: string, track: string, score: CertScore) {
  const certIdPublic = `REC-${Math.random().toString(36).substring(2, 7).toUpperCase()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;

  return await prisma.certification.create({
    data: {
      userId,
      certLevel: 1, // Progress level 1
      certTitle: `${track.toUpperCase()} Learning Achievement`,
      finalScore: score.finalScore,
      profitScore: score.profitScore,
      riskScore: score.riskScore,
      consistencyScore: score.consistencyScore,
      disciplineScore: score.disciplineScore,
      resetMultiplier: 1.0,
      adjustedScore: score.finalScore,
      certIdPublic,
      marketTrack: track,
    }
  });
}

/**
 * Fetches all learning records earned by a specific user.
 */
export async function getUserLearningRecords(userId: string) {
  return await prisma.certification.findMany({
    where: { userId },
    orderBy: { issuedAt: "desc" },
  });
}

/**
 * Fetches a public learning record for verification.
 * Restricted to public-safe fields.
 */
export async function getPublicLearningRecord(certId: string) {
  return await prisma.certification.findUnique({
    where: { certIdPublic: certId },
    select: {
      certIdPublic: true,
      certTitle: true,
      marketTrack: true,
      issuedAt: true,
      finalScore: true,
      certLevel: true,
      user: {
        select: {
          name: true,
        }
      }
    }
  });
}
