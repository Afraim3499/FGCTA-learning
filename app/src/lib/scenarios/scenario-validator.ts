/**
 * Pre-execution validator for training missions.
 * Ensures the order meets mission-specific rules before allowing placement.
 */

export interface ValidationResult {
  isValid: boolean;
  message: string | null;
}

export interface OrderParams {
  instrument: string;
  lotSize: number;
  entryPrice: number;
  stopLoss: number | null;
  takeProfit: number | null;
  direction: 'buy' | 'sell';
}

export function validateMissionOrder(
  scenarioSlug: string,
  params: OrderParams
): ValidationResult {
  // Mission 1: l0-sync-order-entry-v1
  if (scenarioSlug === 'l0-sync-order-entry-v1') {
    return validateMission1(params);
  }

  return { isValid: true, message: null };
}

function validateMission1(params: OrderParams): ValidationResult {
  const { instrument, lotSize, entryPrice, stopLoss, takeProfit, direction } = params;

  // 1. Instrument Lock
  if (instrument !== 'EURUSD') {
    return { isValid: false, message: "EURUSD is locked for this mission." };
  }

  // 2. Lot Size Lock
  if (lotSize !== 0.01) {
    return { isValid: false, message: "Mission allows 0.01 lot only." };
  }

  // 3. Stop Loss Mandatory
  if (!stopLoss) {
    return { isValid: false, message: "Stop loss is required." };
  }

  // 4. Take Profit Mandatory
  if (!takeProfit) {
    return { isValid: false, message: "Take profit is required." };
  }

  // 5. SL Direction
  if (direction === 'buy' && stopLoss >= entryPrice) {
    return { isValid: false, message: "Stop loss is on the wrong side of price." };
  }
  if (direction === 'sell' && stopLoss <= entryPrice) {
    return { isValid: false, message: "Stop loss is on the wrong side of price." };
  }

  // 6. TP Direction
  if (direction === 'buy' && takeProfit <= entryPrice) {
    return { isValid: false, message: "Take profit is on the wrong side of price." };
  }
  if (direction === 'sell' && takeProfit >= entryPrice) {
    return { isValid: false, message: "Take profit is on the wrong side of price." };
  }

  // 7. Minimum 2R
  const risk = Math.abs(entryPrice - stopLoss);
  const reward = Math.abs(takeProfit - entryPrice);
  
  if (reward < risk * 1.99) { // Using 1.99 to account for minor rounding/pipettes
    return { isValid: false, message: "Take profit must be at least 2R." };
  }

  return { isValid: true, message: null };
}
