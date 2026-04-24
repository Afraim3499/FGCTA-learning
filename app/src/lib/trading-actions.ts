"use server";

import { prisma } from "@/lib/prisma";
import { getUser } from "@/lib/auth-actions";
import { revalidatePath } from "next/cache";
import { Prisma } from "@/generated/prisma/client";
import { getXPRank, serializeData } from "@/lib/utils";
import { logUserEvent } from "./analytics";

/**
 * Fetches the currently active trading phase attempt for the user.
 */
export async function getActivePhaseAttempt() {
  const user = await getUser();
  if (!user) return null;

  return await prisma.userPhaseAttempt.findFirst({
    where: {
      userId: user.id,
      status: "active",
    },
    include: {
      phase: true,
    },
  });
}

/**
 * Initializes a trading phase for a user.
 */
export async function initializePhase(phaseNumber: number) {
  const user = await getUser();
  if (!user) throw new Error("Unauthorized");

  const phase = await prisma.tradingPhase.findUnique({
    where: { phaseNumber },
  });

  if (!phase) throw new Error("Phase definition not found");

  return await prisma.$transaction(async (tx) => {
    const activeAttempt = await tx.userPhaseAttempt.findFirst({
      where: { userId: user.id, status: "active" },
    });

    if (activeAttempt) {
      if (activeAttempt.phaseId === phase.id) {
        return { success: true, attempt: activeAttempt, message: "Phase already active" };
      }
      throw new Error("User already has an active attempt in a different phase");
    }

    const attempt = await tx.userPhaseAttempt.create({
      data: {
        userId: user.id,
        phaseId: phase.id,
        attemptNumber: 1,
        status: "active",
        startingEquity: phase.startingCapital,
        currentEquity: phase.startingCapital,
        peakEquity: phase.startingCapital,
      },
    });

    await tx.userProgress.update({
      where: { userId: user.id },
      data: { currentPhase: phaseNumber },
    });

    await logUserEvent(user.id, "PHASE_INIT", { phaseNumber, startingCapital: Number(phase.startingCapital) });

    revalidatePath("/dashboard");
    revalidatePath("/trading");

    return serializeData({ success: true, attempt });
  });
}

/**
 * Checks phase status against profit target and drawdown limits.
 */
export async function checkPhaseStatus(attemptId: string, shouldRevalidate: boolean = true) {
  const attempt = await prisma.userPhaseAttempt.findUnique({
    where: { id: attemptId },
    include: { phase: true },
  });

  if (!attempt || attempt.status !== "active") return attempt?.status;

  const currentEquity = new Prisma.Decimal(attempt.currentEquity.toString());
  const startingEquity = new Prisma.Decimal(attempt.startingEquity.toString());
  
  const targetProfit = startingEquity.mul(new Prisma.Decimal(attempt.phase.targetProfitPct.toString()).div(100));
  const profitTargetPrice = startingEquity.add(targetProfit);
  
  const maxDrawdown = startingEquity.mul(new Prisma.Decimal(attempt.phase.maxDrawdownPct.toString()).div(100));
  const drawdownFloor = startingEquity.sub(maxDrawdown);

  let newStatus: "active" | "passed" | "failed_dd" = "active";

  if (currentEquity.gte(profitTargetPrice)) {
    newStatus = "passed";
  } else if (currentEquity.lte(drawdownFloor)) {
    newStatus = "failed_dd";
  }

  if (newStatus !== "active") {
    await prisma.$transaction(async (tx) => {
      await tx.userPhaseAttempt.update({
        where: { id: attemptId },
        data: { 
          status: newStatus,
          endedAt: new Date(),
        },
      });

      if (newStatus === "passed") {
        const XP_PASS = 500;
        await tx.xPLedgerEntry.create({
          data: {
            userId: attempt.userId,
            xpAmount: XP_PASS,
            action: "PHASE_UNLOCKED",
            sourceId: attemptId,
            sourceType: "phase",
          }
        });

        const progress = await tx.userProgress.findUnique({ where: { userId: attempt.userId } });
        if (progress) {
          const newTotal = progress.xpTotal + XP_PASS;
          await tx.userProgress.update({
            where: { userId: attempt.userId },
            data: { xpTotal: newTotal, xpRank: getXPRank(newTotal) }
          });
        }
      }

      await logUserEvent(attempt.userId, "PHASE_OUTCOME", { 
        phaseNumber: attempt.phase.phaseNumber, 
        status: newStatus,
        equity: Number(attempt.currentEquity)
      });
    });
    
    if (shouldRevalidate) {
      revalidatePath("/dashboard");
      revalidatePath("/trading");
    }
  }

  return newStatus;
}

/**
 * Hardened validation for trade rules.
 */
async function validateTradeRules(attempt: any, data: any) {
  if (attempt.status !== "active") {
    throw new Error(`Cannot open trades: Phase is ${attempt.status}`);
  }

  const phase = attempt.phase;
  const equity = new Prisma.Decimal(attempt.currentEquity.toString());

  if (data.stopLoss) {
    const riskAmount = Math.abs(data.entryPrice - data.stopLoss) * data.positionSize;
    const riskPercent = (riskAmount / Number(equity)) * 100;
    if (riskPercent > Number(phase.maxRiskPerTrade)) {
      const reason = `Risk per trade (${riskPercent.toFixed(2)}%) exceeds limit of ${phase.maxRiskPerTrade}%`;
      await logUserEvent(attempt.userId, "TRADE_REJECT", { ruleId: "MAX_RISK", reason, riskPercent });
      throw new Error(reason);
    }
  }

  const openPositionsCount = await prisma.trade.count({
    where: { attemptId: attempt.id, exitPrice: null },
  });
  if (openPositionsCount >= phase.maxPositions) {
    const reason = `Maximum open positions (${phase.maxPositions}) reached`;
    await logUserEvent(attempt.userId, "TRADE_REJECT", { ruleId: "MAX_POSITIONS", reason });
    throw new Error(reason);
  }

  if (!data.stopLoss) {
    const reason = "Stop loss is required for every trade";
    await logUserEvent(attempt.userId, "TRADE_REJECT", { ruleId: "SL_REQUIRED", reason });
    throw new Error(reason);
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tradesToday = await prisma.trade.count({
    where: { 
      attemptId: attempt.id, 
      openedAt: { gte: today }
    },
  });
  if (tradesToday >= phase.maxTradesPerDay) {
    const reason = `Daily trade limit (${phase.maxTradesPerDay}) reached`;
    await logUserEvent(attempt.userId, "TRADE_REJECT", { ruleId: "DAILY_LIMIT", reason });
    throw new Error(reason);
  }

  return true;
}

/**
 * Opens a new market order.
 */
export async function openMarketOrder(data: {
  instrument: string;
  direction: "buy" | "sell";
  positionSize: number;
  leverage: number;
  entryPrice: number;
  stopLoss: number;
  takeProfit?: number;
}) {
  const user = await getUser();
  if (!user) throw new Error("Unauthorized");

  const activeAttempt = await getActivePhaseAttempt();
  if (!activeAttempt) throw new Error("No active trading phase found");

  await validateTradeRules(activeAttempt, data);

  // Spread simulation
  let executionPrice = data.entryPrice;
  const spreads: Record<string, number> = {
    "EURUSD": 0.0002,
    "BTCUSD": 15.0,
    "XAUUSD": 0.40
  };
  const spread = spreads[data.instrument] || 0;
  executionPrice = data.direction === "buy" ? data.entryPrice + spread : data.entryPrice - spread;

  const riskAmount = Math.abs(executionPrice - data.stopLoss) * data.positionSize;
  const equity = new Prisma.Decimal(activeAttempt.currentEquity.toString());
  const riskPercent = (riskAmount / Number(equity)) * 100;

  const commissionRate = new Prisma.Decimal(activeAttempt.phase.commissionRate.toString());
  const notionalValue = data.positionSize * executionPrice * (data.instrument === "EURUSD" ? 100000 : 1); 
  const commission = commissionRate.mul(notionalValue);

  return await prisma.$transaction(async (tx) => {
    const trade = await tx.trade.create({
      data: {
        userId: user.id,
        attemptId: activeAttempt.id,
        instrument: data.instrument,
        direction: data.direction,
        entryPrice: executionPrice,
        positionSize: data.positionSize,
        leverage: data.leverage,
        stopLoss: data.stopLoss,
        takeProfit: data.takeProfit,
        riskAmount: riskAmount,
        riskPercent: riskPercent,
        orderType: "market",
      },
    });

    // Deduct commission from equity
    await tx.userPhaseAttempt.update({
      where: { id: activeAttempt.id },
      data: { 
        currentEquity: { decrement: commission },
      }
    });

    await logUserEvent(user.id, "TRADE_OPEN", { 
      tradeId: trade.id, 
      instrument: data.instrument, 
      direction: data.direction,
      commission: Number(commission),
      riskAmount,
      riskPercent
    });

    // Award XP (10 per trade open)
    const XP_OPEN = 10;
    await tx.xPLedgerEntry.create({
      data: {
        userId: user.id,
        xpAmount: XP_OPEN,
        action: "TRADE_EXECUTE",
        sourceId: trade.id,
        sourceType: "trade",
      }
    });

    const progress = await tx.userProgress.findUnique({ where: { userId: user.id } });
    if (progress) {
      const newTotal = progress.xpTotal + XP_OPEN;
      await tx.userProgress.update({
        where: { userId: user.id },
        data: { xpTotal: newTotal, xpRank: getXPRank(newTotal) }
      });
    }

    revalidatePath("/trading");
    revalidatePath("/dashboard");
    return { success: true, trade };
  });
}

/**
 * Closes an open position and realizes PnL.
 */
export async function closePosition(tradeId: string, exitPrice: number) {
  const user = await getUser();
  if (!user) throw new Error("Unauthorized");

  return await prisma.$transaction(async (tx) => {
    const trade = await tx.trade.findUnique({
      where: { id: tradeId, userId: user.id },
    });

    if (!trade) throw new Error("Trade not found");
    if (trade.exitPrice !== null || trade.closedAt !== null) {
      throw new Error("Trade already closed");
    }

    const entry = Number(trade.entryPrice);
    const size = Number(trade.positionSize);
    
    let pnl = 0;
    if (trade.direction === "buy") {
      pnl = (exitPrice - entry) * size;
    } else {
      pnl = (entry - exitPrice) * size;
    }

    const initialRisk = Number(trade.riskAmount);
    const rMultiple = initialRisk > 0 ? pnl / initialRisk : 0;

    const updatedTrade = await tx.trade.update({
      where: { id: tradeId },
      data: {
        exitPrice: exitPrice,
        pnl: pnl,
        closedAt: new Date(),
        rMultiple: rMultiple,
      },
    });

    // Award XP (10 per trade close)
    const XP_CLOSE = 10;
    await tx.xPLedgerEntry.create({
      data: {
        userId: user.id,
        xpAmount: XP_CLOSE,
        action: "TRADE_EXECUTE",
        sourceId: updatedTrade.id,
        sourceType: "trade",
      }
    });

    const progress = await tx.userProgress.findUnique({ where: { userId: user.id } });
    if (progress) {
      const newTotal = progress.xpTotal + XP_CLOSE;
      await tx.userProgress.update({
        where: { userId: user.id },
        data: { xpTotal: newTotal, xpRank: getXPRank(newTotal) }
      });
    }

    const attempt = await tx.userPhaseAttempt.findUnique({
      where: { id: trade.attemptId },
    });

    if (!attempt || attempt.status !== "active") {
      throw new Error("Cannot update equity: Phase is no longer active");
    }

    const currentEquity = new Prisma.Decimal(attempt.currentEquity.toString());
    const newEquity = currentEquity.add(new Prisma.Decimal(pnl.toString()));
    const peakEquity = new Prisma.Decimal(attempt.peakEquity.toString());
    const newPeakEquity = newEquity.gt(peakEquity) ? newEquity : peakEquity;

    await tx.userPhaseAttempt.update({
      where: { id: trade.attemptId },
      data: {
        currentEquity: newEquity,
        peakEquity: newPeakEquity,
        tradesCount: { increment: 1 },
      },
    });

    await logUserEvent(user.id, "TRADE_CLOSE", { 
      tradeId: trade.id, 
      pnl, 
      rMultiple 
    });

    // CRITICAL: Final check status after update
    const finalStatus = await checkPhaseStatus(trade.attemptId);

    revalidatePath("/trading");
    revalidatePath("/dashboard");

    return { success: true, trade: updatedTrade, pnl, finalStatus };
  });
}

/**
 * Calculates performance metrics for an active or completed phase attempt.
 */
export async function getPhasePerformance(attemptId: string) {
  const attempt = await prisma.userPhaseAttempt.findUnique({
    where: { id: attemptId },
    include: {
      trades: { where: { exitPrice: { not: null } } },
      phase: true,
    },
  });

  if (!attempt) throw new Error("Attempt not found");

  const trades = attempt.trades;
  const totalTrades = trades.length;
  
  if (totalTrades === 0) {
    return {
      winRate: 0,
      netPnl: 0,
      avgRMultiple: 0,
      profitFactor: 0,
      currentDrawdown: 0,
    };
  }

  const winners = trades.filter(t => Number(t.pnl || 0) > 0);
  const losers = trades.filter(t => Number(t.pnl || 0) <= 0);

  const winRate = (winners.length / totalTrades) * 100;
  const netPnl = trades.reduce((sum, t) => sum + Number(t.pnl || 0), 0);
  
  const grossProfit = winners.reduce((sum, t) => sum + Number(t.pnl || 0), 0);
  const grossLoss = Math.abs(losers.reduce((sum, t) => sum + Number(t.pnl || 0), 0));
  const profitFactor = grossLoss === 0 ? grossProfit : grossProfit / grossLoss;

  const avgRMultiple = trades.reduce((sum, t) => sum + Number(t.rMultiple || 0), 0) / totalTrades;

  const currentEquity = Number(attempt.currentEquity);
  const peakEquity = Number(attempt.peakEquity);
  const currentDrawdown = peakEquity > 0 ? ((peakEquity - currentEquity) / peakEquity) * 100 : 0;

  return {
    winRate: Math.round(winRate * 10) / 10,
    netPnl: Math.round(netPnl * 100) / 100,
    profitFactor: Math.round(profitFactor * 100) / 100,
    avgRMultiple: Math.round(avgRMultiple * 100) / 100,
    currentDrawdown: Math.round(currentDrawdown * 10) / 10,
    totalTrades,
  };
}

/**
 * Syncs the daily state for the active phase.
 * To be called on Dashboard load.
 */
export async function syncDailyState() {
  const activeAttempt = await getActivePhaseAttempt();
  if (!activeAttempt) return;

  await createDailySnapshot(activeAttempt.id);
  await checkPhaseStatus(activeAttempt.id, false);
}

/**
 * Records a daily snapshot of the user's trading account.
 */
export async function createDailySnapshot(attemptId: string) {
  const attempt = await prisma.userPhaseAttempt.findUnique({
    where: { id: attemptId },
  });

  if (!attempt) return;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Get trades closed today
  const tradesToday = await prisma.trade.findMany({
    where: {
      attemptId,
      closedAt: { gte: today },
    },
  });

  const dailyPnl = tradesToday.reduce((sum, t) => sum + Number(t.pnl || 0), 0);

  // Get previous snapshot to determine daily starting equity
  const lastSnapshot = await prisma.dailySnapshot.findFirst({
    where: { attemptId, date: { lt: today } },
    orderBy: { date: "desc" },
  });

  const startingEquity = lastSnapshot 
    ? lastSnapshot.endingEquity 
    : attempt.startingEquity;

  return await prisma.dailySnapshot.upsert({
    where: {
      userId_attemptId_date: {
        userId: attempt.userId,
        attemptId: attempt.id,
        date: today,
      },
    },
    update: {
      endingEquity: attempt.currentEquity,
      dailyPnl: dailyPnl,
      tradesCount: tradesToday.length,
    },
    create: {
      userId: attempt.userId,
      attemptId: attempt.id,
      date: today,
      startingEquity: startingEquity,
      endingEquity: attempt.currentEquity,
      dailyPnl: dailyPnl,
      tradesCount: tradesToday.length,
    },
  });
}
