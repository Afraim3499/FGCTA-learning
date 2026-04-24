import { PrismaClient, AssetType } from "@prisma/client";

const prisma = new PrismaClient();

const strategies = [
  // CRYPTO TREND
  {
    assetClass: AssetType.CRYPTO,
    sequenceNumber: 1,
    name: "Moving Average Crossover (20/50 EMA)",
    parentFamily: "Trend Following",
    coreLogic: "Captures momentum shifts when fast EMA crosses above/below slow EMA.",
    trapMechanics: "Institutions use the 'lag' of EMAs to engineer fake breakouts (Inducement)."
  },
  {
    assetClass: AssetType.CRYPTO,
    sequenceNumber: 2,
    name: "Golden Cross (50/200 SMA)",
    parentFamily: "Trend Following",
    coreLogic: "Long-term bullish trend identifier when 50 SMA crosses above 200 SMA.",
    trapMechanics: "Often used as a late-cycle exit liquidity for smart money."
  },
  {
    assetClass: AssetType.CRYPTO,
    sequenceNumber: 13,
    name: "Bollinger Band Squeeze Breakout",
    parentFamily: "Breakout & Volatility",
    coreLogic: "Trading the volatility expansion after bands contract significantly.",
    trapMechanics: "The 'Wick-to-Squeeze' - a fake breakout to clear stops before the real move."
  },
  {
    assetClass: AssetType.CRYPTO,
    sequenceNumber: 36,
    name: "Support/Resistance Bounce",
    parentFamily: "Price Action",
    coreLogic: "Trading horizontal historical levels where price has previously reacted.",
    trapMechanics: "Liquidity Sweeps: Driving price just below Support to trigger stop-loss sell orders."
  },
  // FOREX
  {
    assetClass: AssetType.FOREX,
    sequenceNumber: 1,
    name: "London Open Breakout",
    parentFamily: "Session Protocols",
    coreLogic: "Capturing the surge in liquidity during the London/NY overlap.",
    trapMechanics: "The Judas Swing: A fake move in the opposite direction of the daily bias."
  },
  // GOLD
  {
    assetClass: AssetType.GOLD,
    sequenceNumber: 1,
    name: "Real Yield Inverse Correlation",
    parentFamily: "Macro Economics",
    coreLogic: "Selling Gold when Real Yields (TIPS) rise, as Gold is a non-yielding asset.",
    trapMechanics: "Yield Curve Inversion Traps: Macro shifts that decouple correlation temporarily."
  }
];

async function main() {
  console.log("Seeding strategies...");
  for (const s of strategies) {
    await prisma.strategy.upsert({
      where: { assetClass_name: { assetClass: s.assetClass, name: s.name } },
      update: s,
      create: s,
    });
  }
  console.log("Strategies seeded successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
