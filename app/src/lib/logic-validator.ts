import { UTCTimestamp } from "lightweight-charts";

export type ValidationResult = {
  success: boolean;
  code: string;
  message: string;
  rationale?: string;
  precision?: number; // 0-100
  grade?: "S" | "A" | "B" | "C" | "F";
};

export type Zone = {
  startTime: UTCTimestamp;
  endTime: UTCTimestamp;
  priceMax: number;
  priceMin: number;
};

export class LogicValidator {
  /**
   * Validates if a drawn box matches an institutional Liquidity or Supply/Demand zone.
   */
  static validateZone(drawnBox: Zone, targetZone: Zone, tolerance: number = 0.1): ValidationResult {
    const timeOverlap = Math.max(drawnBox.startTime, targetZone.startTime) <= Math.min(drawnBox.endTime, targetZone.endTime);
    
    // Calculate overlap percentage for price to allow some "retail" slop but require "institutional" precision
    const priceOverlapMin = Math.max(drawnBox.priceMin, targetZone.priceMin);
    const priceOverlapMax = Math.min(drawnBox.priceMax, targetZone.priceMax);
    const overlapHeight = Math.max(0, priceOverlapMax - priceOverlapMin);
    const targetHeight = targetZone.priceMax - targetZone.priceMin;
    
    const overlapRatio = overlapHeight / targetHeight;

    const precision = Math.round(overlapRatio * 100);
    let grade: "S" | "A" | "B" | "C" | "F" = "F";

    if (precision >= 95) grade = "S";
    else if (precision >= 85) grade = "A";
    else if (precision >= 70) grade = "B";
    else if (precision >= 50) grade = "C";

    if (!timeOverlap) {
      return {
        success: false,
        code: "TIME_MISMATCH",
        message: "Incorrect Time Context",
        grade: "F",
        precision: 0,
        rationale: "Institutional liquidity is time-bound. You are marking a zone that was either already mitigated or hasn't formed yet."
      };
    }

    if (precision < 50) {
      return {
        success: false,
        code: "INACCURATE_PRICE",
        message: "Inaccurate Price Precision",
        grade: "F",
        precision,
        rationale: "You identified the right area, but your box is too wide. Institutional entries require precision at the wick level."
      };
    }

    return {
      success: true,
      code: "VALID_ZONE",
      message: grade === "S" ? "Elite Precision Validated" : "Institutional POI Validated",
      grade,
      precision,
      rationale: grade === "S" 
        ? "Perfect alignment. You've identified the exact candle where institutional orders are clustered."
        : "Precision confirmed. This zone represents a significant pool of resting liquidity."
    };
  }

  /**
   * Validates a trade entry (Engine C / Performance Module)
   */
  static validateEntry(
    entryPrice: number,
    entryTime: UTCTimestamp,
    context: { 
      htfTrend: "bullish" | "bearish";
      poiMitigated: boolean;
      msShift: boolean;
    }
  ): ValidationResult {
    if (!context.poiMitigated) {
      return {
        success: false,
        code: "NO_MITIGATION",
        message: "Early Entry: No POI Mitigation",
        rationale: "You entered before price reached the HTF Point of Interest. This is retail FOMO. Institutions wait for mitigation."
      };
    }

    if (!context.msShift) {
      return {
        success: false,
        code: "NO_MSS",
        message: "Retail Trap: Lack of MSS",
        rationale: "Price hit the POI but has not shifted structure. You are attempting to 'catch a falling knife'. Wait for the Market Structure Shift (MSS)."
      };
    }

    return {
      success: true,
      code: "LOGIC_CONFIRMED",
      message: "Entry Logic Validated",
      rationale: "Context, Mitigation, and Confirmation aligned. This is a high-probability institutional setup."
    };
  }
}
