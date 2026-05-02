/**
 * Post-execution grader for training missions.
 * Calculates score and generates feedback summary.
 */

export interface GradingResult {
  score: number;
  passed: boolean;
  summary: string;
  points: Record<string, number>;
  weaknessTags: string[];
}

export function gradeMission(
  scenarioSlug: string,
  trade: any // The completed order data
): GradingResult {
  if (scenarioSlug === 'l0-sync-order-entry-v1') {
    return gradeMission1(trade);
  }

  return {
    score: 100,
    passed: true,
    summary: "Scenario completed.",
    points: {},
    weaknessTags: []
  };
}

function gradeMission1(trade: any): GradingResult {
  let score = 0;
  const points: Record<string, number> = {};
  const weaknessTags: string[] = [];

  // Points Rubric:
  // correct_instrument: 10
  // correct_size: 20
  // valid_sl: 25
  // valid_tp: 20
  // min_2r: 15
  // discipline: 10

  // 1. Instrument (10)
  if (trade.instrument === 'EURUSD') {
    score += 10;
    points['correct_instrument'] = 10;
  } else {
    weaknessTags.push('wrong_instrument');
  }

  // 2. Size (20)
  if (Number(trade.positionSize) === 0.01) {
    score += 20;
    points['correct_size'] = 20;
  } else {
    weaknessTags.push('invalid_sizing');
  }

  // 3. Stop Loss (25)
  if (trade.stopLoss) {
    score += 25;
    points['valid_sl'] = 25;
  } else {
    weaknessTags.push('missing_sl');
  }

  // 4. Take Profit (20)
  if (trade.takeProfit) {
    score += 20;
    points['valid_tp'] = 20;
  } else {
    weaknessTags.push('missing_tp');
  }

  // 5. Min 2R (15)
  const risk = Math.abs(trade.entryPrice - (trade.stopLoss || 0));
  const reward = Math.abs((trade.takeProfit || 0) - trade.entryPrice);
  if (reward >= risk * 1.99) {
    score += 15;
    points['min_2r'] = 15;
  } else {
    weaknessTags.push('low_rr');
  }

  // 6. Discipline (10)
  // For V1, we award this if they didn't violate rules during validation (handled by UI)
  score += 10;
  points['discipline'] = 10;

  const passThreshold = 90;
  const passed = score >= passThreshold;

  return {
    score,
    passed,
    summary: passed 
      ? "Fully Complete! You successfully placed a disciplined order with correct risk controls." 
      : "Mission Failed. Review the required lot size and risk-to-reward ratio.",
    points,
    weaknessTags
  };
}
