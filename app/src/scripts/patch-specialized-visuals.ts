import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
if (!connectionString) {
  console.error("DATABASE URL missing");
  process.exit(1);
}

const isLocal = connectionString.includes("localhost") || connectionString.includes("127.0.0.1");
const pool = new Pool({
  connectionString,
  ssl: isLocal ? false : { rejectUnauthorized: false },
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

function overrideVisualModel(sName: string, assetClass: string, vm: any): any {
  const name = sName.toLowerCase();
  const labelSuffix = ` [${sName} (${assetClass})]`;

  if (name.includes("macd")) {
    vm.visualCategory = "Indicator Structure Visual";
    vm.componentType = "MACDStructureChart";
    vm.requiredLabels = [
      `MACD Line${labelSuffix}`,
      `MACD Signal Line / Trigger Line${labelSuffix}`,
      `Zero Line Baseline${labelSuffix}`
    ];
    vm.requiredZones = [
      `MACD Crossover Area${labelSuffix}`,
      `MACD Histogram Expansion Zone${labelSuffix}`,
      `Zero Line Midpoint${labelSuffix}`
    ];
  } else if (name.includes("adx") || name.includes("directional index")) {
    vm.visualCategory = "Trend Continuation Visual";
    vm.componentType = "ADXStrengthChart";
    vm.requiredLabels = [
      `ADX Strength Line${labelSuffix}`,
      `ADX Threshold (25)${labelSuffix}`,
      `Trend Confirmation Trigger${labelSuffix}`
    ];
    vm.requiredZones = [
      `Strong Trend Zone (ADX > 25)${labelSuffix}`,
      `Weak Trend Zone (ADX < 25)${labelSuffix}`,
      `ADX Confirmation Area${labelSuffix}`
    ];
  } else if (name.includes("london open breakout") || name.includes("london open")) {
    vm.visualCategory = "Session / Time Window Visual";
    vm.componentType = "SessionBreakoutChart";
    vm.requiredLabels = [
      `Asian Range High Boundary${labelSuffix}`,
      `Asian Range Low Boundary${labelSuffix}`,
      `London Open Breakout Trigger${labelSuffix}`
    ];
    vm.requiredZones = [
      `Asian Range Consolidation Box${labelSuffix}`,
      `London Open Expansion Zone${labelSuffix}`,
      `False Breakout / Liquidity Sweep Area${labelSuffix}`
    ];
  } else if (name.includes("new york open breakout") || name.includes("ny open breakout")) {
    vm.visualCategory = "Session / Time Window Visual";
    vm.componentType = "SessionBreakoutChart";
    vm.requiredLabels = [
      `Pre-Market Range High Boundary${labelSuffix}`,
      `Pre-Market Range Low Boundary${labelSuffix}`,
      `NY Open Volatility Trigger${labelSuffix}`
    ];
    vm.requiredZones = [
      `US Pre-Market Consolidation Box${labelSuffix}`,
      `NY Open Expansion Zone${labelSuffix}`,
      `False Breakout Sweep / News Trap Area${labelSuffix}`
    ];
  } else if (name.includes("overnight range breakout")) {
    vm.visualCategory = "Session / Time Window Visual";
    vm.componentType = "SessionBreakoutChart";
    vm.requiredLabels = [
      `Overnight Range High Boundary${labelSuffix}`,
      `Overnight Range Low Boundary${labelSuffix}`,
      `Morning Session Breakout Trigger${labelSuffix}`
    ];
    vm.requiredZones = [
      `Overnight Consolidation Range Box${labelSuffix}`,
      `Morning Open Expansion Zone${labelSuffix}`,
      `Overnight Range Liquidity Sweep${labelSuffix}`
    ];
  } else if (name.includes("donchian channel breakout") || name.includes("donchian")) {
    vm.visualCategory = "Session / Time Window Visual";
    vm.componentType = "DonchianChannelBreakoutChart";
    vm.requiredLabels = [
      `Donchian Upper Channel Band${labelSuffix}`,
      `Donchian Lower Channel Band${labelSuffix}`,
      `Channel Breakout Trigger${labelSuffix}`
    ];
    vm.requiredZones = [
      `Donchian Channel High/Low Bound${labelSuffix}`,
      `Channel Breakout Expansion Zone${labelSuffix}`,
      `False Channel Breakout Trap Area${labelSuffix}`
    ];
  } else if (name.includes("real yield") || name.includes("correlation")) {
    vm.visualCategory = "Gold Macro Reaction Visual";
    vm.componentType = "GoldMacroRealYieldChart";
    vm.requiredLabels = [
      `US 10Y Real Yield (TIPS)${labelSuffix}`,
      `XAU/USD Spot Gold Price${labelSuffix}`,
      `Correlation Divergence${labelSuffix}`
    ];
    vm.requiredZones = [
      `Real Yield Tracking Zone${labelSuffix}`,
      `Macro Reaction Window${labelSuffix}`,
      `Divergence Action Area${labelSuffix}`
    ];
  } else if (name.includes("supertrend")) {
    vm.visualCategory = "Volatility / Trailing Stop Visual";
    vm.componentType = "SupertrendVolatilityChart";
    vm.requiredLabels = [
      `Supertrend Trailing Stop Line${labelSuffix}`,
      `Trend Flip Marker${labelSuffix}`,
      `ATR Volatility Band${labelSuffix}`
    ];
    vm.requiredZones = [
      `Shaded Volatility Zone${labelSuffix}`,
      `Sideways Chop Warning Zone${labelSuffix}`,
      `Dynamic Stop-Loss Area${labelSuffix}`
    ];
  } else if (name.includes("parabolic sar")) {
    vm.visualCategory = "Volatility / Trailing Stop Visual";
    vm.componentType = "ParabolicSARChart";
    vm.requiredLabels = [
      `Parabolic SAR Acceleration Dot${labelSuffix}`,
      `Dot Flip Reversal Point${labelSuffix}`,
      `Trend Acceleration Indicator${labelSuffix}`
    ];
    vm.requiredZones = [
      `Bullish Acceleration Area${labelSuffix}`,
      `Bearish Acceleration Area${labelSuffix}`,
      `SAR Reversal Boundary${labelSuffix}`
    ];
  } else if (name.includes("ichimoku")) {
    vm.visualCategory = "Trend Continuation Visual";
    vm.componentType = "IchimokuCloudChart";
    vm.requiredLabels = [
      `Tenkan-sen Conversion Line${labelSuffix}`,
      `Kijun-sen Base Line${labelSuffix}`,
      `Senkou Span Cloud Boundary${labelSuffix}`
    ];
    vm.requiredZones = [
      `Senkou Span Shaded Cloud Support${labelSuffix}`,
      `False Trend Zone Inside Cloud${labelSuffix}`,
      `Ichimoku Equilibrium Area${labelSuffix}`
    ];
  } else if (name.includes("heikin")) {
    vm.visualCategory = "Trend Continuation Visual";
    vm.componentType = "HeikinAshiTrendChart";
    vm.requiredLabels = [
      `Heikin-Ashi Smoothed Candles${labelSuffix}`,
      `Trend Continuation Marker${labelSuffix}`,
      `Flat Candle Boundaries${labelSuffix}`
    ];
    vm.requiredZones = [
      `Strong Bullish Flat-Bottom Zone${labelSuffix}`,
      `Strong Bearish Flat-Top Zone${labelSuffix}`,
      `Heikin-Ashi Smoothing Area${labelSuffix}`
    ];
  } else if (
    name.includes("crossover") || 
    name.includes("moving average") || 
    name.includes("moving‑average") || 
    name.includes("filter") ||
    name.includes("cross") ||
    name.includes("wma")
  ) {
    vm.visualCategory = "Trend Continuation Visual";
    vm.componentType = "MovingAverageCrossoverChart";
    
    let fastLabel = `Fast Moving Average Line${labelSuffix}`;
    let slowLabel = `Slow Moving Average Line${labelSuffix}`;
    
    if (name.includes("wma") || name.includes("weighted")) {
      fastLabel = `Fast Weighted WMA Line${labelSuffix}`;
      slowLabel = `Slow Weighted WMA Line${labelSuffix}`;
      vm.requiredLabels = [fastLabel, slowLabel, `MA Crossover Point${labelSuffix}`];
    } else if (name.includes("20/50 ema")) {
      fastLabel = `20 EMA Fast Line${labelSuffix}`;
      slowLabel = `50 EMA Slow Line${labelSuffix}`;
      vm.requiredLabels = [fastLabel, slowLabel, `MA Crossover Point${labelSuffix}`];
    } else if (name.includes("50/200 sma") || name.includes("golden cross") || name.includes("death cross")) {
      fastLabel = `50 SMA Line${labelSuffix}`;
      slowLabel = `200 SMA Line${labelSuffix}`;
      vm.requiredLabels = [fastLabel, slowLabel, `MA Crossover Point${labelSuffix}`];
    } else if (name.includes("triple")) {
      fastLabel = `Fast EMA Line${labelSuffix}`;
      const medLabel = `Medium EMA Line${labelSuffix}`;
      slowLabel = `Slow EMA Line${labelSuffix}`;
      vm.requiredLabels = [fastLabel, medLabel, slowLabel, `Triple Crossover Point${labelSuffix}`];
    } else {
      vm.requiredLabels = [fastLabel, slowLabel, `MA Crossover Point${labelSuffix}`];
    }
    
    vm.requiredZones = [
      `Entry Trigger Zone${labelSuffix}`,
      `Whipsaw / Lag Trap Zone${labelSuffix}`,
      `Dynamic Trend Support Area${labelSuffix}`
    ];
  }
  
  return vm;
}

async function main() {
  console.log("Starting patch process for specialized chart visual models...");
  
  const strategies = await prisma.strategy.findMany({
    orderBy: [
      { sequenceNumber: "asc" },
      { id: "asc" }
    ]
  });

  const upgraded = strategies.filter((s: any) => s.learningProfile !== null);
  console.log(`Found ${upgraded.length} upgraded strategies to patch.`);

  for (const s of upgraded) {
    const originalVm = s.visualModel as any;
    if (!originalVm) continue;

    const newVm = overrideVisualModel(s.name, s.assetClass, { ...originalVm });
    
    if (newVm.componentType !== originalVm.componentType || JSON.stringify(newVm.requiredLabels) !== JSON.stringify(originalVm.requiredLabels)) {
      console.log(`Patching "${s.name}" (${s.assetClass}) -> Mapped to "${newVm.componentType}"`);
      await prisma.strategy.update({
        where: { id: s.id },
        data: {
          visualModel: newVm
        }
      });
    }
  }

  console.log("Patch process complete!");
  await prisma.$disconnect();
  await pool.end();
}

main().catch(err => console.error(err));
