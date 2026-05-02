const { PrismaClient } = require("@prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");
const { Pool } = require("pg");

const pool = new Pool({ 
  user: "postgres.oqaxpfldczldfmbuopbn",
  password: "Rizwan99636?",
  host: "aws-1-ap-southeast-1.pooler.supabase.com",
  port: 5432,
  database: "postgres",
  ssl: { rejectUnauthorized: false }
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const strategies = [
  {
    asset_class: "CRYPTO",
    sequence_number: 1,
    name: "Moving Average Crossover (20/50 EMA)",
    parent_family: "Trend Following",
    core_logic: "Captures momentum shifts when fast EMA crosses above/below slow EMA.",
    trap_mechanics: "Institutions use the 'lag' of EMAs to engineer fake breakouts (Inducement)."
  },
  {
    asset_class: "CRYPTO",
    sequence_number: 2,
    name: "Golden Cross (50/200 SMA)",
    parent_family: "Trend Following",
    core_logic: "Long-term bullish trend identifier when 50 SMA crosses above 200 SMA.",
    trap_mechanics: "Often used as a late-cycle exit liquidity for smart money."
  },
  {
    asset_class: "CRYPTO",
    sequence_number: 13,
    name: "Bollinger Band Squeeze Breakout",
    parent_family: "Breakout & Volatility",
    core_logic: "Trading the volatility expansion after bands contract significantly.",
    trap_mechanics: "The 'Wick-to-Squeeze' - a fake breakout to clear stops before the real move."
  },
  {
    asset_class: "CRYPTO",
    sequence_number: 36,
    name: "Support/Resistance Bounce",
    parent_family: "Price Action",
    core_logic: "Trading horizontal historical levels where price has previously reacted.",
    trap_mechanics: "Liquidity Sweeps: Driving price just below Support to trigger stop-loss sell orders."
  },
  {
    asset_class: "FOREX",
    sequence_number: 1,
    name: "London Open Breakout",
    parent_family: "Session Protocols",
    core_logic: "Capturing the surge in liquidity during the London/NY overlap.",
    trap_mechanics: "The Judas Swing: A fake move in the opposite direction of the daily bias."
  },
  {
    asset_class: "GOLD",
    sequence_number: 1,
    name: "Real Yield Inverse Correlation",
    parent_family: "Macro Economics",
    core_logic: "Selling Gold when Real Yields (TIPS) rise, as Gold is a non-yielding asset.",
    trap_mechanics: "Yield Curve Inversion Traps: Macro shifts that decouple correlation temporarily."
  }
];

async function main() {
  console.log("Seeding strategies...");
  for (const s of strategies) {
    await prisma.strategy.upsert({
      where: { 
        assetClass_name: { 
            assetClass: s.asset_class, 
            name: s.name 
        } 
      },
      update: {
        sequenceNumber: s.sequence_number,
        parentFamily: s.parent_family,
        coreLogic: s.core_logic,
        trapMechanics: s.trap_mechanics
      },
      create: {
        assetClass: s.asset_class,
        name: s.name,
        sequenceNumber: s.sequence_number,
        parentFamily: s.parent_family,
        coreLogic: s.core_logic,
        trapMechanics: s.trap_mechanics
      },
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
    await pool.end();
  });
