import { PrismaClient } from '../src/generated/prisma/client';
import { SkillLevel, ModuleTrack } from '../src/generated/prisma/enums';
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({ 
  user: "postgres.oqaxpfldczldfmbuopbn",
  password: "Afraim9934?",
  host: "aws-1-ap-southeast-1.pooler.supabase.com",
  port: 5432,
  database: "postgres",
  ssl: { rejectUnauthorized: false }
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('--- Starting Level 1 Production Seeding ---');

  // 1.1: Trend Structure
  await prisma.courseModule.upsert({
    where: { level_moduleNumber: { level: 1, moduleNumber: '1.1' } },
    update: {
      title: 'Mastering Trend Structure',
      objective: 'Identify directional bias using Dow Theory and swing-point analysis.',
      forexAdaptation: 'FX trends are often driven by Central Bank policy (NFP/CPI). Watch for structural shifts during these windows.',
      cryptoAdaptation: 'Crypto trends exhibit extreme verticality. A "Higher Low" may be shallower due to aggressive momentum bots.',
      goldAdaptation: 'Gold respects structural levels with extreme precision. Watch for "Stop Hunts" at old HH/HL zones.',
      logicIds: ['TF_06.1'],
      strategyFamilies: ['TF_06'],
      interactiveTaskType: 'type_a_point_click',
      interactiveTaskData: {
        chartData: [
          { time: '2022-12-15', open: 109, high: 112, low: 107, close: 108 },
          { time: '2022-12-16', open: 108, high: 109, low: 102, close: 103 },
          { time: '2022-12-17', open: 103, high: 105, low: 100, close: 101 },
          { time: '2022-12-18', open: 101, high: 104, low: 98, close: 103 },
          { time: '2022-12-19', open: 103, high: 108, low: 101, close: 107 },
          { time: '2022-12-20', open: 107, high: 111, low: 105, close: 110 },
          { time: '2022-12-21', open: 110, high: 114, low: 108, close: 112 },
          { time: '2022-12-22', open: 112, high: 113, low: 109, close: 110 },
          { time: '2022-12-23', open: 110, high: 112, low: 106, close: 107 },
          { time: '2022-12-24', open: 107, high: 108, low: 102, close: 103 },
          { time: '2022-12-25', open: 103, high: 105, low: 99, close: 104 },
          { time: '2022-12-26', open: 104, high: 108, low: 102, close: 107 },
          { time: '2022-12-27', open: 107, high: 112, low: 105, close: 110 },
          { time: '2022-12-28', open: 110, high: 115, low: 108, close: 113 },
          { time: '2022-12-29', open: 113, high: 116, low: 111, close: 112 },
          { time: '2022-12-30', open: 112, high: 113, low: 105, close: 106 },
          { time: '2022-12-31', open: 106, high: 108, low: 100, close: 102 },
          { time: '2023-01-01', open: 102, high: 105, low: 95, close: 98 },
          { time: '2023-01-02', open: 98, high: 102, low: 96, close: 100 },
          { time: '2023-01-03', open: 100, high: 108, low: 98, close: 106 },
          { time: '2023-01-04', open: 106, high: 112, low: 104, close: 110 },
          { time: '2023-01-05', open: 110, high: 115, low: 108, close: 113 },
          { time: '2023-01-06', open: 113, high: 114, low: 105, close: 108 },
          { time: '2023-01-07', open: 108, high: 110, low: 102, close: 104 },
          { time: '2023-01-08', open: 104, high: 120, low: 102, close: 118 },
          { time: '2023-01-09', open: 118, high: 130, low: 115, close: 125 },
          { time: '2023-01-10', open: 125, high: 135, low: 120, close: 130 }
        ],
        prompt: "Identify the exact origin of the impulsive move that created the new Higher High (HH). Click the wick of the defining Higher Low (HL).",
        validationZones: {
          primary: [{ time: '2023-01-07', priceMin: 100, priceMax: 105 }],
          secondary: [{ time: '2023-01-06', priceMin: 103, priceMax: 110 }]
        },
        hints: {
          light: "Look for the lowest point before the massive green candle expansion.",
          guided: "The defining HL is the long wick in the bottom-left quadrant. This is where institutional buy orders were filled."
        }
      },
      content: `
# Mastering Trend Structure (TF_06.1)

Institutional trading starts with one question: **Who is in control?** We answer this using Price Structure.

## The Core Logic
A market is in a trend when it produces a directional series of peaks and troughs.
- **Bullish (The Staircase Up)**: Higher Highs (HH) and Higher Lows (HL)
- **Bearish (The Staircase Down)**: Lower Lows (LL) and Lower Highs (LH)

## The Institutional Edge
Retail traders try to predict reversals by buying falling markets ("catching a falling knife"). Institutional algorithms simply follow the existing order flow. They wait for a **Higher Low (HL)** to form, confirming that buyers are stepping in at higher prices to protect the trend.

## The Retail Trap
The biggest trap in trend trading is confusing a "Liquidity Sweep" with a "Break of Structure." A wick below a previous Higher Low is often just institutions triggering retail stop-losses before continuing the trend. **Wicks do not break structure—only candle bodies do.**

## The Execution Protocol
1. Identify the most recent swing high and swing low.
2. Verify that the current low is higher than the previous low (HL).
3. Wait for a bullish candle close to confirm the HL is locked in.
4. Set stop-loss safely below the HL wick.
`
    },
    create: {
      level: 1,
      moduleNumber: '1.1',
      title: 'Mastering Trend Structure',
      objective: 'Identify directional bias using Dow Theory and swing-point analysis.',
      skillLevel: SkillLevel.beginner,
      marketTrack: ModuleTrack.core,
      orderIndex: 1,
      strategyFamilies: ['TF_06'],
      logicIds: ['TF_06.1'],
      interactiveTaskType: 'type_a_point_click',
      interactiveTaskData: {
        chartData: [
          { time: '2022-12-15', open: 109, high: 112, low: 107, close: 108 },
          { time: '2022-12-16', open: 108, high: 109, low: 102, close: 103 },
          { time: '2022-12-17', open: 103, high: 105, low: 100, close: 101 },
          { time: '2022-12-18', open: 101, high: 104, low: 98, close: 103 },
          { time: '2022-12-19', open: 103, high: 108, low: 101, close: 107 },
          { time: '2022-12-20', open: 107, high: 111, low: 105, close: 110 },
          { time: '2022-12-21', open: 110, high: 114, low: 108, close: 112 },
          { time: '2022-12-22', open: 112, high: 113, low: 109, close: 110 },
          { time: '2022-12-23', open: 110, high: 112, low: 106, close: 107 },
          { time: '2022-12-24', open: 107, high: 108, low: 102, close: 103 },
          { time: '2022-12-25', open: 103, high: 105, low: 99, close: 104 },
          { time: '2022-12-26', open: 104, high: 108, low: 102, close: 107 },
          { time: '2022-12-27', open: 107, high: 112, low: 105, close: 110 },
          { time: '2022-12-28', open: 110, high: 115, low: 108, close: 113 },
          { time: '2022-12-29', open: 113, high: 116, low: 111, close: 112 },
          { time: '2022-12-30', open: 112, high: 113, low: 105, close: 106 },
          { time: '2022-12-31', open: 106, high: 108, low: 100, close: 102 },
          { time: '2023-01-01', open: 102, high: 105, low: 95, close: 98 },
          { time: '2023-01-02', open: 98, high: 102, low: 96, close: 100 },
          { time: '2023-01-03', open: 100, high: 108, low: 98, close: 106 },
          { time: '2023-01-04', open: 106, high: 112, low: 104, close: 110 },
          { time: '2023-01-05', open: 110, high: 115, low: 108, close: 113 },
          { time: '2023-01-06', open: 113, high: 114, low: 105, close: 108 },
          { time: '2023-01-07', open: 108, high: 110, low: 102, close: 104 },
          { time: '2023-01-08', open: 104, high: 120, low: 102, close: 118 },
          { time: '2023-01-09', open: 118, high: 130, low: 115, close: 125 },
          { time: '2023-01-10', open: 125, high: 135, low: 120, close: 130 }
        ],
        prompt: "Identify the exact origin of the impulsive move that created the new Higher High (HH). Click the wick of the defining Higher Low (HL).",
        validationZones: {
          primary: [{ time: '2023-01-07', priceMin: 100, priceMax: 105 }],
          secondary: [{ time: '2023-01-06', priceMin: 103, priceMax: 110 }]
        },
        hints: {
          light: "Look for the lowest point before the massive green candle expansion.",
          guided: "The defining HL is the long wick in the bottom-left quadrant. This is where institutional buy orders were filled."
        }
      },
      content: `
# Mastering Trend Structure (TF_06.1)

Institutional trading starts with one question: **Who is in control?** We answer this using Price Structure.

## The Core Logic
A market is in a trend when it produces a directional series of peaks and troughs.
- **Bullish (The Staircase Up)**: Higher Highs (HH) and Higher Lows (HL)
- **Bearish (The Staircase Down)**: Lower Lows (LL) and Lower Highs (LH)

## The Institutional Edge
Retail traders try to predict reversals by buying falling markets ("catching a falling knife"). Institutional algorithms simply follow the existing order flow. They wait for a **Higher Low (HL)** to form, confirming that buyers are stepping in at higher prices to protect the trend.

## The Retail Trap
The biggest trap in trend trading is confusing a "Liquidity Sweep" with a "Break of Structure." A wick below a previous Higher Low is often just institutions triggering retail stop-losses before continuing the trend. **Wicks do not break structure—only candle bodies do.**

## The Execution Protocol
1. Identify the most recent swing high and swing low.
2. Verify that the current low is higher than the previous low (HL).
3. Wait for a bullish candle close to confirm the HL is locked in.
4. Set stop-loss safely below the HL wick.
`
    }
  });

  // 1.2: Institutional Levels
  await prisma.courseModule.upsert({
    where: { level_moduleNumber: { level: 1, moduleNumber: '1.2' } },
    update: {
      title: 'Institutional Supply & Demand',
      objective: 'Identify where the "Big Money" is clustered using Order Blocks.',
      forexAdaptation: 'In FX, these levels are often found at round numbers (e.g., 1.1000) and previous day highs/lows.',
      cryptoAdaptation: 'Crypto whales often use "Hidden Walls". Look for high-volume nodes in the order book.',
      goldAdaptation: 'Gold respects old daily levels for years. Institutional memory in Gold is exceptionally long.',
      logicIds: ['SR_01.1'],
      strategyFamilies: ['SR'],
      interactiveTaskType: 'type_a_point_click',
      interactiveTaskData: {
        chartData: [
          { time: '2023-02-01', open: 150, high: 155, low: 148, close: 149 },
          { time: '2023-02-02', open: 149, high: 151, low: 142, close: 144 },
          { time: '2023-02-03', open: 144, high: 146, low: 140, close: 141 },
          { time: '2023-02-04', open: 141, high: 145, low: 138, close: 144 },
          { time: '2023-02-05', open: 144, high: 158, low: 143, close: 156 },
          { time: '2023-02-06', open: 156, high: 165, low: 155, close: 163 },
          { time: '2023-02-07', open: 163, high: 170, low: 162, close: 168 }
        ],
        prompt: "Locate the Institutional Order Block (the last opposing candle before the break of structure). Click the body of the candle that represents the OB.",
        validationZones: {
          primary: [{ time: '2023-02-03', priceMin: 140, priceMax: 145 }],
          secondary: [{ time: '2023-02-04', priceMin: 138, priceMax: 146 }]
        },
        hints: {
          light: "Look for the final red candle before the massive move higher.",
          guided: "The OB is the origin of the expansion. Click the small bearish candle at the base."
        }
      },
      content: `
# Institutional Levels (SR_01.1)

Retail traders trade *at* lines. Institutional traders trade the *reaction* to zones.

## The Core Logic
An **Order Block (OB)** is the last opposing candle before an aggressive expansion in price that breaks structure. This represents the "footprint" of institutional money entering the market.

## The Institutional Edge
Institutions cannot enter all their positions at once without causing massive slippage. They leave "resting orders" at the origin of their initial move (the OB). When price returns to this zone, these resting orders are triggered, causing a high-probability bounce.

## The Retail Trap
Retail traders buy *before* price reaches the true OB, entering too early and getting stopped out. Conversely, they place stops exactly at the OB, making them prime targets for a liquidity sweep. 

## The Execution Protocol
1. Identify a clean Break of Structure (BoS).
2. Look back to find the last opposing candle before the BoS (The Order Block).
3. Wait for price to retrace into the OB zone.
4. **Do not front-run.** Wait for a rejection candle (pin bar or engulfing) inside the OB before entering.
`
    },
    create: {
      level: 1,
      moduleNumber: '1.2',
      title: 'Institutional Supply & Demand',
      objective: 'Identify where the "Big Money" is clustered using Order Blocks.',
      skillLevel: SkillLevel.beginner,
      marketTrack: ModuleTrack.core,
      orderIndex: 2,
      strategyFamilies: ['SR'],
      logicIds: ['SR_01.1'],
      interactiveTaskType: 'type_a_point_click',
      interactiveTaskData: {
        chartData: [
          { time: '2023-02-01', open: 150, high: 155, low: 148, close: 149 },
          { time: '2023-02-02', open: 149, high: 151, low: 142, close: 144 },
          { time: '2023-02-03', open: 144, high: 146, low: 140, close: 141 },
          { time: '2023-02-04', open: 141, high: 145, low: 138, close: 144 },
          { time: '2023-02-05', open: 144, high: 158, low: 143, close: 156 },
          { time: '2023-02-06', open: 156, high: 165, low: 155, close: 163 },
          { time: '2023-02-07', open: 163, high: 170, low: 162, close: 168 }
        ],
        prompt: "Locate the Institutional Order Block (the last opposing candle before the break of structure). Click the body of the candle that represents the OB.",
        validationZones: {
          primary: [{ time: '2023-02-03', priceMin: 140, priceMax: 145 }],
          secondary: [{ time: '2023-02-04', priceMin: 138, priceMax: 146 }]
        },
        hints: {
          light: "Look for the final red candle before the massive move higher.",
          guided: "The OB is the origin of the expansion. Click the small bearish candle at the base."
        }
      },
      content: `
# Institutional Levels (SR_01.1)

Retail traders trade *at* lines. Institutional traders trade the *reaction* to zones.

## The Core Logic
An **Order Block (OB)** is the last opposing candle before an aggressive expansion in price that breaks structure. This represents the "footprint" of institutional money entering the market.

## The Institutional Edge
Institutions cannot enter all their positions at once without causing massive slippage. They leave "resting orders" at the origin of their initial move (the OB). When price returns to this zone, these resting orders are triggered, causing a high-probability bounce.

## The Retail Trap
Retail traders buy *before* price reaches the true OB, entering too early and getting stopped out. Conversely, they place stops exactly at the OB, making them prime targets for a liquidity sweep. 

## The Execution Protocol
1. Identify a clean Break of Structure (BoS).
2. Look back to find the last opposing candle before the BoS (The Order Block).
3. Wait for price to retrace into the OB zone.
4. **Do not front-run.** Wait for a rejection candle (pin bar or engulfing) inside the OB before entering.
`
    }
  });

  // 1.3: Momentum Fuel
  await prisma.courseModule.upsert({
    where: { level_moduleNumber: { level: 1, moduleNumber: '1.3' } },
    update: {
      title: 'The Fuel of the Move (Volume)',
      objective: 'Differentiate between a real breakout and a retail trap using Volume.',
      forexAdaptation: 'Forex has no central volume. Use "Tick Volume" or the Currency Strength Meter as a proxy.',
      cryptoAdaptation: 'Use Real Volume (on-chain) + Exchange Volume. Watch for "Wash Trading" patterns.',
      goldAdaptation: 'Volume in Gold spikes during the London/NY overlap. This is the most reliable fuel window.',
      logicIds: ['VM_02.1'],
      strategyFamilies: ['VM'],
      interactiveTaskType: 'type_b_scenario',
      interactiveTaskData: {
        contextPrompt: "Price is breaking above a clear consolidation zone. The breakout candle is large and bullish, but volume is significantly lower than the 20-period average. What is the institutional read?",
        options: [
          {
            id: 'vm_1',
            text: 'Institutional continuation. Low volume means no one is selling.',
            grade: 'invalid',
            feedback: 'Incorrect. Low volume on a breakout signifies a lack of institutional interest. This is a retail trap.'
          },
          {
            id: 'vm_2',
            text: 'Avoid the trade. Low volume indicates a high probability of a "Fakeout".',
            grade: 'best',
            feedback: 'Correct. A valid institutional breakout requires "Fuel" (Volume Expansion). Without it, the move is fragile.'
          },
          {
            id: 'vm_3',
            text: 'Market buy immediately to avoid missing the move.',
            grade: 'poor',
            feedback: 'You are chasing FOMO. Professional traders wait for volume confirmation.'
          }
        ]
      },
      content: `
# Momentum & Volume (VM_02.1)

Price tells you *what* is happening. Volume tells you *how much belief* there is in what is happening.

## The Core Logic
Volume is the "fuel" of the market. A breakout with high volume indicates strong institutional participation. A breakout with low volume indicates a lack of interest.

## The Institutional Edge
Smart money uses volume anomalies to identify turning points. If price is rising aggressively but volume is dropping (Divergence), the move is "hollow." Institutions will use this hollow liquidity to offload their positions to retail buyers.

## The Retail Trap
The **Low-Volume Fakeout**. Retail sees price break above a resistance line and immediately market buys (FOMO). Institutions, seeing the lack of real buying pressure, aggressively short the market, creating a "Bull Trap."

## The Execution Protocol
1. Identify a key level or breakout point.
2. Check the volume on the breakout candle. Is it significantly higher than the 20-period average?
3. If YES: Proceed with the trade (Institutional Continuation).
4. If NO: Avoid the trade (High probability Fakeout).
`
    },
    create: {
      level: 1,
      moduleNumber: '1.3',
      title: 'The Fuel of the Move (Volume)',
      objective: 'Differentiate between a real breakout and a retail trap using Volume.',
      skillLevel: SkillLevel.beginner,
      marketTrack: ModuleTrack.core,
      orderIndex: 3,
      strategyFamilies: ['VM'],
      logicIds: ['VM_02.1'],
      interactiveTaskType: 'type_b_scenario',
      interactiveTaskData: {
        contextPrompt: "Price is breaking above a clear consolidation zone. The breakout candle is large and bullish, but volume is significantly lower than the 20-period average. What is the institutional read?",
        options: [
          {
            id: 'vm_1',
            text: 'Institutional continuation. Low volume means no one is selling.',
            grade: 'invalid',
            feedback: 'Incorrect. Low volume on a breakout signifies a lack of institutional interest. This is a retail trap.'
          },
          {
            id: 'vm_2',
            text: 'Avoid the trade. Low volume indicates a high probability of a "Fakeout".',
            grade: 'best',
            feedback: 'Correct. A valid institutional breakout requires "Fuel" (Volume Expansion). Without it, the move is fragile.'
          },
          {
            id: 'vm_3',
            text: 'Market buy immediately to avoid missing the move.',
            grade: 'poor',
            feedback: 'You are chasing FOMO. Professional traders wait for volume confirmation.'
          }
        ]
      },
      content: `
# Momentum & Volume (VM_02.1)

Price tells you *what* is happening. Volume tells you *how much belief* there is in what is happening.

## The Core Logic
Volume is the "fuel" of the market. A breakout with high volume indicates strong institutional participation. A breakout with low volume indicates a lack of interest.

## The Institutional Edge
Smart money uses volume anomalies to identify turning points. If price is rising aggressively but volume is dropping (Divergence), the move is "hollow." Institutions will use this hollow liquidity to offload their positions to retail buyers.

## The Retail Trap
The **Low-Volume Fakeout**. Retail sees price break above a resistance line and immediately market buys (FOMO). Institutions, seeing the lack of real buying pressure, aggressively short the market, creating a "Bull Trap."

## The Execution Protocol
1. Identify a key level or breakout point.
2. Check the volume on the breakout candle. Is it significantly higher than the 20-period average?
3. If YES: Proceed with the trade (Institutional Continuation).
4. If NO: Avoid the trade (High probability Fakeout).
`
    }
  });

  // 1.4: Candle Mechanics
  await prisma.courseModule.upsert({
    where: { level_moduleNumber: { level: 1, moduleNumber: '1.4' } },
    update: {
      title: 'Institutional Footprints (Candles)',
      objective: 'Identify entry triggers using price action footprints at key levels.',
      forexAdaptation: 'Look for "News Spikes" that leave long wicks. These are often institutional "Stop Runs".',
      cryptoAdaptation: 'In Crypto, "Engulfing" candles are powerful after a deep pullback.',
      goldAdaptation: 'Gold "Pin Bars" are extremely reliable at Round Numbers ($2000, $2100).',
      logicIds: ['PA_04.1'],
      strategyFamilies: ['PA'],
      interactiveTaskType: 'type_a_point_click',
      interactiveTaskData: {
        chartData: [
          { time: '2023-04-01', open: 120, high: 122, low: 118, close: 121 },
          { time: '2023-04-02', open: 121, high: 135, low: 115, close: 118 }, // Pin Bar at Resistance
          { time: '2023-04-03', open: 118, high: 120, low: 110, close: 112 },
          { time: '2023-04-04', open: 112, high: 115, low: 105, close: 108 }
        ],
        prompt: "Identify the institutional 'Stop Run' (Pin Bar) that rejected the resistance level. Click the tip of the rejection wick.",
        validationZones: {
          primary: [{ time: '2023-04-02', priceMin: 130, priceMax: 136 }],
          secondary: [{ time: '2023-04-02', priceMin: 125, priceMax: 135 }]
        },
        hints: {
          light: "Look for the longest wick that pushed into supply before reversing.",
          guided: "The Pin Bar is the second candle. Institutions used this spike to trigger stop losses before the move down."
        }
      },
      content: `
# Candle Mechanics (PA_04.1)

Candles are the granular footprints of the battle between buyers and sellers. 

## The Core Logic
A **Pin Bar** (or hammer/shooting star) occurs when price pushes aggressively into a zone but is immediately rejected, leaving a long wick and a small body.

## The Institutional Edge
A long wick into a key level is the visual representation of an **Institutional Stop Run**. The "Smart Money" pushed price past a level to trigger retail stop losses (which are market orders), using that liquidity to fill their own massive positions in the opposite direction.

## The Retail Trap
Trading candle patterns in isolation. A pin bar in the middle of a random price range is just noise. It only holds power if it occurs at a structurally significant level (like an Order Block or major S&R).

## The Execution Protocol
1. Wait for price to approach a verified institutional zone (OB or Daily Level).
2. Look for a liquidity sweep (price temporarily piercing the zone).
3. Confirm the rejection via a Pin Bar or Engulfing candle close.
4. Enter on the close of the rejection candle.
`
    },
    create: {
      level: 1,
      moduleNumber: '1.4',
      title: 'Institutional Footprints (Candles)',
      objective: 'Identify entry triggers using price action footprints at key levels.',
      skillLevel: SkillLevel.beginner,
      marketTrack: ModuleTrack.core,
      orderIndex: 4,
      strategyFamilies: ['PA'],
      logicIds: ['PA_04.1'],
      interactiveTaskType: 'type_a_point_click',
      interactiveTaskData: {
        chartData: [
          { time: '2023-04-01', open: 120, high: 122, low: 118, close: 121 },
          { time: '2023-04-02', open: 121, high: 135, low: 115, close: 118 },
          { time: '2023-04-03', open: 118, high: 120, low: 110, close: 112 },
          { time: '2023-04-04', open: 112, high: 115, low: 105, close: 108 }
        ],
        prompt: "Identify the institutional 'Stop Run' (Pin Bar) that rejected the resistance level. Click the tip of the rejection wick.",
        validationZones: {
          primary: [{ time: '2023-04-02', priceMin: 130, priceMax: 136 }],
          secondary: [{ time: '2023-04-02', priceMin: 125, priceMax: 135 }]
        },
        hints: {
          light: "Look for the longest wick that pushed into supply before reversing.",
          guided: "The Pin Bar is the second candle. Institutions used this spike to trigger stop losses before the move down."
        }
      },
      content: `
# Candle Mechanics (PA_04.1)

Candles are the granular footprints of the battle between buyers and sellers. 

## The Core Logic
A **Pin Bar** (or hammer/shooting star) occurs when price pushes aggressively into a zone but is immediately rejected, leaving a long wick and a small body.

## The Institutional Edge
A long wick into a key level is the visual representation of an **Institutional Stop Run**. The "Smart Money" pushed price past a level to trigger retail stop losses (which are market orders), using that liquidity to fill their own massive positions in the opposite direction.

## The Retail Trap
Trading candle patterns in isolation. A pin bar in the middle of a random price range is just noise. It only holds power if it occurs at a structurally significant level (like an Order Block or major S&R).

## The Execution Protocol
1. Wait for price to approach a verified institutional zone (OB or Daily Level).
2. Look for a liquidity sweep (price temporarily piercing the zone).
3. Confirm the rejection via a Pin Bar or Engulfing candle close.
4. Enter on the close of the rejection candle.
`
    }
  });

  // 1.5: Level 1 Capstone
  await prisma.courseModule.upsert({
    where: { level_moduleNumber: { level: 1, moduleNumber: '1.5' } },
    update: {
      title: 'Level 1 Capstone: The Full Setup',
      objective: 'Combine structure, levels, volume, and candles into a single execution protocol.',
      forexAdaptation: 'Apply the full protocol to the EUR/USD 1H chart during the London Open.',
      cryptoAdaptation: 'Apply the full protocol to BTC/USDT 4H during a volatility squeeze.',
      goldAdaptation: 'Apply the full protocol to XAU/USD 15m at a daily liquidity zone.',
      logicIds: ['TF_06.1', 'SR_01.1', 'VM_02.1', 'PA_04.1'],
      strategyFamilies: ['TF', 'SR', 'VM', 'PA'],
      content: `
# The Level 1 Capstone

You now possess the four foundational pillars of Alpha. 

## The "Perfect" Level 1 Setup
An institutional execution is never based on one variable. It is a confluence of factors aligning perfectly.
1. **Trend (1.1)**: The market is objectively making Higher Highs and Higher Lows. You are trading WITH the money.
2. **Level (1.2)**: Price has pulled back into a high-probability value area, such as an Order Block.
3. **Fuel (1.3)**: Volume decreased during the pullback (low selling pressure) and expanded on the reaction (institutional buying).
4. **Trigger (1.4)**: A clear footprint (like a Pin Bar or Bullish Engulfing) confirms the rejection at the level.

## The Execution Protocol
If any of these 4 pillars are missing, **you do not trade.** Patience is your greatest edge. Waiting for the "A+ Setup" is what separates professionals from gamblers.

**Operational Gate**: Before taking the Level 1 Test, you must mark up 5 screenshots showing all four pillars aligned and post them in the Simulation channel.
`
    },
    create: {
      level: 1,
      moduleNumber: '1.5',
      title: 'Level 1 Capstone: The Full Setup',
      objective: 'Combine structure, levels, volume, and candles into a single execution protocol.',
      skillLevel: SkillLevel.beginner,
      marketTrack: ModuleTrack.core,
      orderIndex: 5,
      strategyFamilies: ['TF', 'SR', 'VM', 'PA'],
      logicIds: ['TF_06.1', 'SR_01.1', 'VM_02.1', 'PA_04.1'],
      content: `
# The Level 1 Capstone

You now possess the four foundational pillars of Alpha. 

## The "Perfect" Level 1 Setup
An institutional execution is never based on one variable. It is a confluence of factors aligning perfectly.
1. **Trend (1.1)**: The market is objectively making Higher Highs and Higher Lows. You are trading WITH the money.
2. **Level (1.2)**: Price has pulled back into a high-probability value area, such as an Order Block.
3. **Fuel (1.3)**: Volume decreased during the pullback (low selling pressure) and expanded on the reaction (institutional buying).
4. **Trigger (1.4)**: A clear footprint (like a Pin Bar or Bullish Engulfing) confirms the rejection at the level.

## The Execution Protocol
If any of these 4 pillars are missing, **you do not trade.** Patience is your greatest edge. Waiting for the "A+ Setup" is what separates professionals from gamblers.

**Operational Gate**: Before taking the Level 1 Test, you must mark up 5 screenshots showing all four pillars aligned and post them in the Simulation channel.
`
    }
  });

  // 2.2: Support & Resistance (Scenario Decision)
  await prisma.courseModule.upsert({
    where: { level_moduleNumber: { level: 2, moduleNumber: '2.2' } },
    update: {
      title: 'Institutional Reaction Zones',
      objective: 'Determine the highest probability action at a major daily resistance level.',
      forexAdaptation: 'In FX, avoid front-running resistance before major data drops.',
      cryptoAdaptation: 'Crypto resistance often sweeps liquidity above the high before reversing.',
      goldAdaptation: 'Gold will commonly push 20-30 pips past resistance to trigger stops.',
      logicIds: ['SR_02.2'],
      strategyFamilies: ['SR'],
      interactiveTaskType: 'type_b_scenario',
      interactiveTaskData: {
        contextPrompt: "Price has impulsed aggressively into a Daily Resistance zone. The 15m chart shows strong bullish momentum, but volume is dropping. What is the highest probability institutional action?",
        options: [
          {
            id: 'opt_1',
            text: 'Market Buy the breakout immediately.',
            grade: 'invalid',
            feedback: 'Undisciplined. Buying directly into resistance without a structural shift is retail behavior.'
          },
          {
            id: 'opt_2',
            text: 'Market Sell immediately at the line.',
            grade: 'poor',
            feedback: 'You are fighting momentum blindly. The trend is still bullish until proven otherwise.'
          },
          {
            id: 'opt_3',
            text: 'Set a Limit Sell above the line to catch the liquidity sweep.',
            grade: 'acceptable',
            feedback: 'Valid execution, but carries higher risk due to premature entry without confirmation. A better play existed.'
          },
          {
            id: 'opt_4',
            text: 'Wait for the 15m structure to break bearish (HL failure) before entering short.',
            grade: 'best',
            feedback: 'Excellent. You waited for structural confirmation before committing capital. Patience pays.'
          }
        ]
      },
      content: `
# Institutional Reaction Zones (SR_02.2)

Retail traders trade *at* lines. Institutional traders trade the *reaction* to lines.

## The Core Logic
When price approaches a major daily resistance, massive liquidity sits just above it in the form of breakout buyers' buy stops and early sellers' stop losses.

## The Institutional Edge
Institutions know exactly where these stops are. They will intentionally push price through the resistance line just to capture this liquidity (The Liquidity Sweep) before aggressively reversing the market.

## The Retail Trap
**The Blind Entry**. Retail traders either market buy the moment price touches the line (anticipating a breakout) or market sell immediately (anticipating a bounce). Both are gambling against momentum.

## The Execution Protocol
1. Mark the major daily/weekly level.
2. Wait for price to reach the level. **Do nothing.**
3. Let the candle close. Did it sweep liquidity and reject (leaving a wick)?
4. Drop to a lower timeframe (e.g., 15m) and wait for a structural Break of Structure (BoS) in the opposite direction before entering.
`
    },
    create: {
      level: 2,
      moduleNumber: '2.2',
      title: 'Institutional Reaction Zones',
      objective: 'Determine the highest probability action at a major daily resistance level.',
      skillLevel: SkillLevel.intermediate,
      marketTrack: ModuleTrack.core,
      orderIndex: 2,
      strategyFamilies: ['SR'],
      logicIds: ['SR_02.2'],
      interactiveTaskType: 'type_b_scenario',
      interactiveTaskData: {
        contextPrompt: "Price has impulsed aggressively into a Daily Resistance zone. The 15m chart shows strong bullish momentum, but volume is dropping. What is the highest probability institutional action?",
        options: [
          {
            id: 'opt_1',
            text: 'Market Buy the breakout immediately.',
            grade: 'invalid',
            feedback: 'Undisciplined. Buying directly into resistance without a structural shift is retail behavior.'
          },
          {
            id: 'opt_2',
            text: 'Market Sell immediately at the line.',
            grade: 'poor',
            feedback: 'You are fighting momentum blindly. The trend is still bullish until proven otherwise.'
          },
          {
            id: 'opt_3',
            text: 'Set a Limit Sell above the line to catch the liquidity sweep.',
            grade: 'acceptable',
            feedback: 'Valid execution, but carries higher risk due to premature entry without confirmation. A better play existed.'
          },
          {
            id: 'opt_4',
            text: 'Wait for the 15m structure to break bearish (HL failure) before entering short.',
            grade: 'best',
            feedback: 'Excellent. You waited for structural confirmation before committing capital. Patience pays.'
          }
        ]
      },
      content: `
# Institutional Reaction Zones (SR_02.2)

Retail traders trade *at* lines. Institutional traders trade the *reaction* to lines.

## The Core Logic
When price approaches a major daily resistance, massive liquidity sits just above it in the form of breakout buyers' buy stops and early sellers' stop losses.

## The Institutional Edge
Institutions know exactly where these stops are. They will intentionally push price through the resistance line just to capture this liquidity (The Liquidity Sweep) before aggressively reversing the market.

## The Retail Trap
**The Blind Entry**. Retail traders either market buy the moment price touches the line (anticipating a breakout) or market sell immediately (anticipating a bounce). Both are gambling against momentum.

## The Execution Protocol
1. Mark the major daily/weekly level.
2. Wait for price to reach the level. **Do nothing.**
3. Let the candle close. Did it sweep liquidity and reject (leaving a wick)?
4. Drop to a lower timeframe (e.g., 15m) and wait for a structural Break of Structure (BoS) in the opposite direction before entering.
`
    }
  });
  // 2.1: The Moving Average Suite
  await prisma.courseModule.upsert({
    where: { level_moduleNumber: { level: 2, moduleNumber: '2.1' } },
    update: {
      title: 'The Moving Average Suite',
      objective: 'Filter trends and time entries using MA crossovers and price-to-mean relationships.',
      logicIds: ['TF_MA_01', 'TF_MA_02', 'TF_MA_03'],
      strategyFamilies: ['TF'],
      interactiveTaskType: 'type_a_point_click',
      interactiveTaskData: {
        chartData: [
          { time: '2023-01-01', open: 120, high: 122, low: 118, close: 119 },
          { time: '2023-01-02', open: 119, high: 120, low: 115, close: 116 },
          { time: '2023-01-03', open: 116, high: 118, low: 114, close: 115 },
          { time: '2023-01-04', open: 115, high: 117, low: 112, close: 113 },
          { time: '2023-01-05', open: 113, high: 115, low: 111, close: 114 }, // Crossover Start
          { time: '2023-01-06', open: 114, high: 120, low: 113, close: 119 }, // Golden Cross
          { time: '2023-01-07', open: 119, high: 125, low: 118, close: 124 }
        ],
        prompt: "Identify the 'Golden Cross' where the fast momentum (EMA) crosses above the slow trend (SMA). Click the exact intersection candle.",
        validationZones: {
          primary: [{ time: '2023-01-06', priceMin: 110, priceMax: 125 }],
          secondary: [{ time: '2023-01-05', priceMin: 110, priceMax: 125 }]
        },
        hints: {
          light: "Look for the candle that finally breaks the downward momentum and closes high.",
          guided: "The Golden Cross happened on Jan 6th. This signifies the shift from bearish to bullish control."
        },
        rationale: "The Golden Cross (50 EMA over 200 SMA) is a heavy-weight signal used by algorithmic funds. It signifies that the 'average cost' of recent buyers is now significantly higher than long-term holders, creating a self-fulfilling bullish momentum as systems align their biases."
      },
      content: `
# The Moving Average Suite (TF_MA_01, 02, 03)

Moving averages (MAs) are the most widely used indicators in the world, yet most retail traders use them incorrectly. Stop viewing MAs as "entry signals" and start viewing them as **Dynamic Equilibrium Zones**.

## The Core Logic
- **SMA (Simple, The Trend)**: Averages the last N candles equally. The 200 SMA is the ultimate trend filter.
- **EMA (Exponential, The Pulse)**: Gives weight to recent action. The 50 EMA is used for momentum tracking.
- **The Golden Cross**: When the 50 EMA crosses above the 200 SMA, signaling a major structural shift to the upside.

## The Institutional Edge
Institutional desks use the 200 SMA as a strict "Line in the Sand." If price is below the 200 SMA, the desk is strictly forbidden from taking LONG positions, eliminating the urge to "catch falling knives."

## The Retail Trap
**The Exhaustion Cross**: Retail traders buy a Golden Cross blindly. If the cross happens after price has already surged massively (extended from the mean), it's a trap. Professionals only trade crosses that happen near consolidation zones.

## The Execution Protocol
1. Verify price is above the 200 SMA.
2. Wait for the 50 EMA to cross above the 200 SMA.
3. Wait for price to pullback and retest the MAs (Dynamic Support).
4. Enter on a bullish rejection candle at the MAs.
`
    },
    create: {
      level: 2,
      moduleNumber: '2.1',
      title: 'The Moving Average Suite',
      objective: 'Filter trends and time entries using MA crossovers.',
      skillLevel: SkillLevel.intermediate,
      marketTrack: ModuleTrack.core,
      orderIndex: 1,
      strategyFamilies: ['TF'],
      logicIds: ['TF_MA_01', 'TF_MA_02', 'TF_MA_03'],
      interactiveTaskType: 'type_a_point_click',
      interactiveTaskData: {
        chartData: [
          { time: '2023-01-01', open: 120, high: 122, low: 118, close: 119 },
          { time: '2023-01-02', open: 119, high: 120, low: 115, close: 116 },
          { time: '2023-01-03', open: 116, high: 118, low: 114, close: 115 },
          { time: '2023-01-04', open: 115, high: 117, low: 112, close: 113 },
          { time: '2023-01-05', open: 113, high: 115, low: 111, close: 114 },
          { time: '2023-01-06', open: 114, high: 120, low: 113, close: 119 },
          { time: '2023-01-07', open: 119, high: 125, low: 118, close: 124 }
        ],
        prompt: "Identify the 'Golden Cross' intersection candle where momentum shifts bullish.",
        validationZones: {
          primary: [{ time: '2023-01-03', priceMin: 110, priceMax: 118 }],
          secondary: [{ time: '2023-01-02', priceMin: 110, priceMax: 120 }]
        },
        rationale: "In an uptrend, a Higher Low (HL) is the most critical structural point. Institutions place their buy orders at these levels to protect the trend. Identifying the HL correctly allows you to set a stop loss that is protected by institutional liquidity."
      },
      content: `
# The Moving Average Suite (TF_MA_01, 02, 03)

Moving averages (MAs) are the most widely used indicators in the world, yet most retail traders use them incorrectly. Stop viewing MAs as "entry signals" and start viewing them as **Dynamic Equilibrium Zones**.

## The Core Logic
- **SMA (Simple, The Trend)**: Averages the last N candles equally. The 200 SMA is the ultimate trend filter.
- **EMA (Exponential, The Pulse)**: Gives weight to recent action. The 50 EMA is used for momentum tracking.
- **The Golden Cross**: When the 50 EMA crosses above the 200 SMA, signaling a major structural shift to the upside.

## The Institutional Edge
Institutional desks use the 200 SMA as a strict "Line in the Sand." If price is below the 200 SMA, the desk is strictly forbidden from taking LONG positions, eliminating the urge to "catch falling knives."

## The Retail Trap
**The Exhaustion Cross**: Retail traders buy a Golden Cross blindly. If the cross happens after price has already surged massively (extended from the mean), it's a trap. Professionals only trade crosses that happen near consolidation zones.

## The Execution Protocol
1. Verify price is above the 200 SMA.
2. Wait for the 50 EMA to cross above the 200 SMA.
3. Wait for price to pullback and retest the MAs (Dynamic Support).
4. Enter on a bullish rejection candle at the MAs.
`
    }
  });

  // 2.3: MACD & Momentum
  await prisma.courseModule.upsert({
    where: { level_moduleNumber: { level: 2, moduleNumber: '2.3' } },
    update: {
      title: 'Momentum & MACD',
      objective: 'Use oscillators to identify trend exhaustion and momentum shifts.',
      logicIds: ['TF_MACD_01'],
      strategyFamilies: ['TF'],
      interactiveTaskType: 'type_b_scenario',
      interactiveTaskData: {
        contextPrompt: "Price is making a new Higher High, but the MACD histogram is making a Lower High. What is this phenomenon called, and what does it suggest?",
        options: [
          {
            id: 'macd_1',
            text: 'Momentum Expansion. Buy more.',
            grade: 'invalid',
            feedback: 'Incorrect. If price goes up but momentum goes down, the move is "hollow" and likely to fail.',
            rationale: "Momentum is the fuel of price. When price makes a Higher High but MACD fails to follow (Lower High), it indicates that the number of participants supporting the move is declining. This is a classic 'Exhaustion' signal."
          },
          {
            id: 'macd_2',
            text: 'Bearish Divergence. Expect a trend reversal or deep pullback.',
            grade: 'best',
            feedback: 'Correct. Divergence shows that the "engine" (momentum) is losing power even as the "car" (price) keeps moving forward.',
            rationale: "Bearish Divergence at a resistance level is one of the highest-probability signals for institutional shorting. It proves that retail traders are FOMO-buying the top while institutions are offloading into that liquidity."
          },
          {
            id: 'macd_3',
            text: 'Trend Continuation. MACD is lagging and should be ignored.',
            grade: 'poor',
            feedback: 'Ignoring divergence is a common retail error that leads to being trapped in major reversals.',
            rationale: "While MACD is lagging, Divergence is a LEADING indicator of potential reversal. Ignoring it at major structural levels is how accounts get wiped out during trend shifts."
          }
        ]
      },
      content: `
# Momentum & MACD (TF_MACD_01)

Price is the vehicle. Momentum is the engine. The MACD measures the engine's RPM.

## The Core Logic
The MACD (Moving Average Convergence Divergence) shows the relationship between fast and slow moving averages. 
- Above the Zero Line: Bullish Control.
- Below the Zero Line: Bearish Control.

## The Institutional Edge: Divergence
The ultimate professional signal is Divergence. If price makes a **Higher High**, but the MACD makes a **Lower High**, this is Bearish Divergence. It proves that the upward move is running on empty fumes (low momentum). Institutions use this to spot exhaustion before a major reversal.

## The Retail Trap
Ignoring divergence. Retail traders see a new Higher High and FOMO buy, unaware that the underlying momentum engine is dead. They get trapped at the exact top.

## The Execution Protocol
1. Spot a new High in price.
2. Check the MACD histogram. Is it lower than the previous peak? (Bearish Divergence).
3. **Crucial**: Do NOT short immediately. Divergence is a warning, not a trigger.
4. Wait for a structural lower-timeframe Break of Structure (BoS) to confirm the reversal before entering short.
`
    },
    create: {
      level: 2,
      moduleNumber: '2.3',
      title: 'Momentum & MACD',
      objective: 'Identify trend exhaustion using MACD.',
      skillLevel: SkillLevel.intermediate,
      marketTrack: ModuleTrack.core,
      orderIndex: 3,
      strategyFamilies: ['TF'],
      logicIds: ['TF_MACD_01'],
      interactiveTaskType: 'type_b_scenario',
      interactiveTaskData: {
        contextPrompt: "Price makes a Higher High, but MACD makes a Lower High. What is this?",
        options: [
          { id: 'macd_1', text: 'Momentum Expansion', grade: 'invalid', feedback: '...' },
          { id: 'macd_2', text: 'Bearish Divergence', grade: 'best', feedback: '...' },
          { id: 'macd_3', text: 'Trend Continuation', grade: 'poor', feedback: '...' }
        ]
      },
      content: `
# Momentum & MACD (TF_MACD_01)

Price is the vehicle. Momentum is the engine. The MACD measures the engine's RPM.

## The Core Logic
The MACD (Moving Average Convergence Divergence) shows the relationship between fast and slow moving averages. 
- Above the Zero Line: Bullish Control.
- Below the Zero Line: Bearish Control.

## The Institutional Edge: Divergence
The ultimate professional signal is Divergence. If price makes a **Higher High**, but the MACD makes a **Lower High**, this is Bearish Divergence. It proves that the upward move is running on empty fumes (low momentum). Institutions use this to spot exhaustion before a major reversal.

## The Retail Trap
Ignoring divergence. Retail traders see a new Higher High and FOMO buy, unaware that the underlying momentum engine is dead. They get trapped at the exact top.

## The Execution Protocol
1. Spot a new High in price.
2. Check the MACD histogram. Is it lower than the previous peak? (Bearish Divergence).
3. **Crucial**: Do NOT short immediately. Divergence is a warning, not a trigger.
4. Wait for a structural lower-timeframe Break of Structure (BoS) to confirm the reversal before entering short.
`
    }
  });

  // 2.5: Trend Strength (ADX)
  await prisma.courseModule.upsert({
    where: { level_moduleNumber: { level: 2, moduleNumber: '2.5' } },
    update: {
      title: 'Measuring Trend Strength (ADX)',
      objective: 'Differentiate between a trending market and a choppy range.',
      logicIds: ['TF_ADX_01'],
      strategyFamilies: ['TF'],
      interactiveTaskType: 'type_b_scenario',
      interactiveTaskData: {
        contextPrompt: "Price is crossing above the 200 SMA, but the ADX value is 14 and sloping downwards. Should you enter a trend-following trade?",
        options: [
          {
            id: 'adx_1',
            text: 'Yes. The MA crossover is the primary signal.',
            grade: 'poor',
            feedback: 'High risk. An ADX below 20 indicates a "Choppy" market where trend signals are noise. You will likely be stopped out.',
            rationale: "Trading a trend system in a range is the #1 reason for trader failure. ADX acts as your tactical gatekeeper. If the value is below 20, there is no 'edge' for trend followers."
          },
          {
            id: 'adx_2',
            text: 'No. Wait for ADX to cross above 25 to confirm trend strength.',
            grade: 'best',
            feedback: 'Correct. Institutional traders use ADX as a "Safety Switch." If there is no trend strength, they stay in cash.',
            rationale: "Patience is a skill. By waiting for ADX to show strength (>25), you ensure that you are only putting capital at risk when the market has enough 'Fuel' to sustain a move beyond your entry point."
          }
        ]
      },
      content: `
# Measuring Trend Strength (TF_ADX_01)

The fastest way to destroy a trading account is using a Trend-Following system in a Ranging market.

## The Core Logic
The ADX (Average Directional Index) does not tell you *where* price is going; it only tells you *how hard* it is going there. It measures pure trend velocity.

## The Institutional Edge: The Safety Switch
Institutions use ADX as a hard operational gate.
- **ADX < 20**: The market is choppy and ranging. Turn off trend systems.
- **ADX > 25**: A strong trend is active. Engage trend-following systems.

## The Retail Trap
**The Whipsaw**. Retail traders get a moving average crossover signal and blindly buy, not realizing the ADX is at 12. The market chops sideways, stops them out, and reverses. 

## The Execution Protocol
1. You spot a valid trend-following entry signal (e.g., a pullback in an uptrend).
2. Check the ADX value. Is it above 25?
3. Check the ADX slope. Is it pointing UP?
4. If Yes to both, execute the trade. If No, stay in cash.
`
    },
    create: {
      level: 2,
      moduleNumber: '2.5',
      title: 'Measuring Trend Strength (ADX)',
      objective: 'Filter choppy markets using ADX.',
      skillLevel: SkillLevel.intermediate,
      marketTrack: ModuleTrack.core,
      orderIndex: 5,
      strategyFamilies: ['TF'],
      logicIds: ['TF_ADX_01'],
      interactiveTaskType: 'type_b_scenario',
      interactiveTaskData: {
        contextPrompt: "ADX is 14 and sloping down. Price crosses MA. Trade?",
        options: [
          { id: 'adx_1', text: 'Yes', grade: 'poor', feedback: '...' },
          { id: 'adx_2', text: 'No', grade: 'best', feedback: '...' }
        ]
      },
      content: `
# Measuring Trend Strength (TF_ADX_01)

The fastest way to destroy a trading account is using a Trend-Following system in a Ranging market.

## The Core Logic
The ADX (Average Directional Index) does not tell you *where* price is going; it only tells you *how hard* it is going there. It measures pure trend velocity.

## The Institutional Edge: The Safety Switch
Institutions use ADX as a hard operational gate.
- **ADX < 20**: The market is choppy and ranging. Turn off trend systems.
- **ADX > 25**: A strong trend is active. Engage trend-following systems.

## The Retail Trap
**The Whipsaw**. Retail traders get a moving average crossover signal and blindly buy, not realizing the ADX is at 12. The market chops sideways, stops them out, and reverses. 

## The Execution Protocol
1. You spot a valid trend-following entry signal (e.g., a pullback in an uptrend).
2. Check the ADX value. Is it above 25?
3. Check the ADX slope. Is it pointing UP?
4. If Yes to both, execute the trade. If No, stay in cash.
`
    }
  });

  // Level 1 Test
  await prisma.knowledgeTest.upsert({
    where: { level: 1 },
    update: {
      title: 'Level 1: Foundations Assessment',
      questions: [
        {
          id: 'q1',
          question: 'What is the "Golden Rule" of Trend Structure?',
          options: [
            'A trend breaks when price touches an old level',
            'A trend is valid until a candle body closes below the most recent Higher Low (uptrend)',
            'Trends always reverse after 3 waves',
            'A trend is broken by any wick that goes below a low'
          ],
          correctIndex: 1,
          explanation: 'Wicks are noise. Only a candle body close signifies a true shift in structural control.'
        },
        {
          id: 'q2',
          question: 'Where is an "Order Block" typically found?',
          options: [
            'In the middle of a range',
            'At the very top of a trend',
            'The last opposing candle before an impulsive move that broke structure',
            'Every 100 pips in the market'
          ],
          correctIndex: 2,
          explanation: 'Order Blocks represent the origin of institutional expansion.'
        },
        {
          id: 'q3',
          question: 'What does "Climax Volume" signify?',
          options: [
            'A strong breakout with high probability of continuation',
            'A period of no market interest',
            'Potential exhaustion where big money is exiting to retail buyers',
            'A news event that should be ignored'
          ],
          correctIndex: 2,
          explanation: 'Extremely high volume at price peaks often means the "smart money" is offloading their positions.'
        },
        {
          id: 'q4',
          question: 'Which of these is a requirement for a Pin Bar to be a valid trigger?',
          options: [
            'It must be green',
            'It must occur at a predefined institutional level',
            'It must have a wick on both sides',
            'It must be the largest candle on the chart'
          ],
          correctIndex: 1,
          explanation: 'Candle patterns are noise unless they occur at a valid structural or liquidity level.'
        }
      ]
    },
    create: {
      level: 1,
      title: 'Level 1: Foundations Assessment',
      passThreshold: 75,
      questionsPerAttempt: 4,
      timeLimitMin: 10,
      questions: [
        {
          id: 'q1',
          question: 'What is the "Golden Rule" of Trend Structure?',
          options: [
            'A trend breaks when price touches an old level',
            'A trend is valid until a candle body closes below the most recent Higher Low (uptrend)',
            'Trends always reverse after 3 waves',
            'A trend is broken by any wick that goes below a low'
          ],
          correctIndex: 1,
          explanation: 'Wicks are noise. Only a candle body close signifies a true shift in structural control.'
        }
      ]
    }
  });

  // 3.1: Execution Protocols (Type C - Mini Replay)
  await prisma.courseModule.upsert({
    where: { level_moduleNumber: { level: 3, moduleNumber: '3.1' } },
    update: {
      title: 'High-Probability Execution',
      objective: 'Execute a trade based on structural alignment and order block reaction.',
      skillLevel: SkillLevel.intermediate,
      marketTrack: ModuleTrack.core,
      orderIndex: 1,
      interactiveTaskType: 'type_c_replay',
      interactiveTaskData: {
        initialCandleCount: 15,
        prompt: "Price is returning to the H4 Order Block. Wait for the bullish rejection, then execute a LONG position. Aim for 2R.",
        chartData: [
          { time: '2023-03-01', open: 100, high: 105, low: 98, close: 104 },
          { time: '2023-03-02', open: 104, high: 108, low: 102, close: 106 },
          { time: '2023-03-03', open: 106, high: 115, low: 105, close: 112 },
          { time: '2023-03-04', open: 112, high: 114, low: 108, close: 110 },
          { time: '2023-03-05', open: 110, high: 112, low: 105, close: 107 },
          { time: '2023-03-06', open: 107, high: 109, low: 101, close: 103 },
          { time: '2023-03-07', open: 103, high: 105, low: 99, close: 104 },
          { time: '2023-03-08', open: 104, high: 106, low: 98, close: 100 },
          { time: '2023-03-09', open: 100, high: 102, low: 95, close: 97 },
          { time: '2023-03-10', open: 97, high: 99, low: 94, close: 95 },
          { time: '2023-03-11', open: 95, high: 102, low: 94, close: 101 }, // Rejection candle
          { time: '2023-03-12', open: 101, high: 105, low: 100, close: 104 },
          { time: '2023-03-13', open: 104, high: 110, low: 103, close: 108 },
          { time: '2023-03-14', open: 108, high: 115, low: 107, close: 113 },
          { time: '2023-03-15', open: 113, high: 118, low: 112, close: 116 },
          { time: '2023-03-16', open: 116, high: 125, low: 115, close: 122 }, // Target reached
          { time: '2023-03-17', open: 122, high: 128, low: 121, close: 126 }
        ],
        rationale: "Institutional execution is about 'Wait and React.' By waiting for the price to reach the Order Block and showing a clear rejection (The wick on the Jan 11th candle), you are joining the institutional flow with a statistically superior risk-to-reward ratio."
      },
      content: `
# High-Probability Execution (EX_01)

Theory is useless without flawless execution. This is where you put everything together in a live simulation.

## The Core Logic
A high-probability execution is the result of waiting for multiple institutional factors to align, and then pulling the trigger without hesitation or fear.

## The Institutional Edge
Amateurs predict. Professionals react. By waiting for price to enter a premium value area (Order Block) and waiting for a rejection footprint (Pin Bar), you shift the mathematical probability entirely in your favor.

## The Retail Trap
"If I wait for confirmation, I'll miss the move." This FOMO mindset causes retail traders to enter prematurely, ensuring they have wider stop losses and worse risk-to-reward ratios. 

## The Execution Protocol
1. **Structural Alignment**: Verify the higher timeframe trend is bullish.
2. **Value Area**: Identify the Order Block.
3. **Patience**: Let price fall into the Order Block. Do not front-run.
4. **Trigger**: Wait for a bullish rejection candle (wick) or engulfing close.
5. **Execution**: Enter Long, set stop below the wick, and aim for a minimum of 2R.
`
    },
    create: {
      level: 3,
      moduleNumber: '3.1',
      title: 'High-Probability Execution',
      objective: 'Execute a trade based on structural alignment and order block reaction.',
      skillLevel: SkillLevel.intermediate,
      marketTrack: ModuleTrack.core,
      orderIndex: 1,
      interactiveTaskType: 'type_c_replay',
      interactiveTaskData: {
        initialCandleCount: 15,
        prompt: "Price is returning to the H4 Order Block. Wait for the bullish rejection, then execute a LONG position. Aim for 2R.",
        chartData: [
            { time: '2023-03-01', open: 100, high: 105, low: 98, close: 104 },
            { time: '2023-03-02', open: 104, high: 108, low: 102, close: 106 },
            { time: '2023-03-03', open: 106, high: 115, low: 105, close: 112 },
            { time: '2023-03-04', open: 112, high: 114, low: 108, close: 110 },
            { time: '2023-03-05', open: 110, high: 112, low: 105, close: 107 },
            { time: '2023-03-06', open: 107, high: 109, low: 101, close: 103 },
            { time: '2023-03-07', open: 103, high: 105, low: 99, close: 104 },
            { time: '2023-03-08', open: 104, high: 106, low: 98, close: 100 },
            { time: '2023-03-09', open: 100, high: 102, low: 95, close: 97 },
            { time: '2023-03-10', open: 97, high: 99, low: 94, close: 95 },
            { time: '2023-03-11', open: 95, high: 102, low: 94, close: 101 },
            { time: '2023-03-12', open: 101, high: 105, low: 100, close: 104 },
            { time: '2023-03-13', open: 104, high: 110, low: 103, close: 108 },
            { time: '2023-03-14', open: 108, high: 115, low: 107, close: 113 },
            { time: '2023-03-15', open: 113, high: 118, low: 112, close: 116 },
            { time: '2023-03-16', open: 116, high: 125, low: 115, close: 122 },
            { time: '2023-03-17', open: 122, high: 128, low: 121, close: 126 }
        ]
      },
      content: `
# High-Probability Execution (EX_01)

Theory is useless without flawless execution. This is where you put everything together in a live simulation.

## The Core Logic
A high-probability execution is the result of waiting for multiple institutional factors to align, and then pulling the trigger without hesitation or fear.

## The Institutional Edge
Amateurs predict. Professionals react. By waiting for price to enter a premium value area (Order Block) and waiting for a rejection footprint (Pin Bar), you shift the mathematical probability entirely in your favor.

## The Retail Trap
"If I wait for confirmation, I'll miss the move." This FOMO mindset causes retail traders to enter prematurely, ensuring they have wider stop losses and worse risk-to-reward ratios. 

## The Execution Protocol
1. **Structural Alignment**: Verify the higher timeframe trend is bullish.
2. **Value Area**: Identify the Order Block.
3. **Patience**: Let price fall into the Order Block. Do not front-run.
4. **Trigger**: Wait for a bullish rejection candle (wick) or engulfing close.
5. **Execution**: Enter Long, set stop below the wick, and aim for a minimum of 2R.
`
    }
  });

  // 2.7: Ichimoku & Supertrend Protocols
  await prisma.courseModule.upsert({
    where: { level_moduleNumber: { level: 2, moduleNumber: '2.7' } },
    update: {
      title: 'The Cloud & Volatility Stops',
      objective: 'Master Ichimoku and Supertrend for advanced trend tracking.',
      logicIds: ['TF_ICH_01', 'TF_ST_01'],
      strategyFamilies: ['TF'],
      interactiveTaskType: 'type_c_replay',
      interactiveTaskData: {
        chartData: [
          { time: '2023-04-01', open: 150, high: 155, low: 148, close: 152 },
          { time: '2023-04-02', open: 152, high: 158, low: 151, close: 157 },
          { time: '2023-04-03', open: 157, high: 165, low: 156, close: 163 },
          { time: '2023-04-04', open: 163, high: 162, low: 155, close: 158 }, // Pullback
          { time: '2023-04-05', open: 158, high: 168, low: 157, close: 166 }, // Trend Resume
          { time: '2023-04-06', open: 166, high: 175, low: 165, close: 172 },
          { time: '2023-04-07', open: 172, high: 180, low: 170, close: 178 },
          { time: '2023-04-08', open: 178, high: 176, low: 165, close: 168 }, // Supertrend Flip
          { time: '2023-04-09', open: 168, high: 165, low: 155, close: 158 }
        ],
        initialCandleCount: 3,
        prompt: "The market is accelerating. Initiate a LONG position and use the Supertrend (ATR-based) trailing stop to capture the maximum trend expansion. Exit only when the trend flips red.",
        rationale: "The Supertrend is a volatility-adjusted trailing stop. It outshines fixed stops because it 'breathes' with the market. In this scenario, exit on Apr 8th captures a 26-point move, whereas a static stop might have been hit during the minor pullback on Apr 4th."
      },
      content: `
# The Cloud & Volatility Stops (TF_ICH_01, TF_ST_01)

Advanced trend-following requires moving beyond static numbers and accounting for Volatility and Time.

## The Core Logic
- **Ichimoku Kumo (The Cloud)**: Projects support/resistance forward in time. If price is above the Cloud, the path of least resistance is UP.
- **Supertrend**: Uses the Average True Range (ATR) to calculate a trailing stop that tightens during low volatility and widens during high volatility.

## The Institutional Edge
Systematic funds use Volatility Stops (like Supertrend) because they "breathe" with the market. A static 50-pip stop might be too tight during a news event and too loose during consolidation. ATR-based stops solve this mathematically.

## The Retail Trap
**Cutting Winners Early**. Retail traders get nervous during minor pullbacks and close their positions, missing the massive parabolic moves. Professionals "Walk the Bands," trusting the Supertrend to keep them in the trade until the trend structurally breaks.

## The Execution Protocol
1. Ensure price is Above the Ichimoku Cloud (Bullish Bias).
2. Wait for a Supertrend buy signal.
3. Enter Long.
4. **Do not set a fixed Take Profit.** Trail your stop-loss precisely along the Supertrend line until you are stopped out in profit.
`
    },
    create: {
      level: 2,
      moduleNumber: '2.7',
      title: 'The Cloud & Volatility Stops',
      objective: 'Master Ichimoku and Supertrend for advanced trend tracking.',
      skillLevel: SkillLevel.intermediate,
      marketTrack: ModuleTrack.core,
      orderIndex: 7,
      strategyFamilies: ['TF'],
      logicIds: ['TF_ICH_01', 'TF_ST_01'],
      interactiveTaskType: 'type_c_replay',
      interactiveTaskData: {
        chartData: [
          { time: '2023-04-01', open: 150, high: 155, low: 148, close: 152 },
          { time: '2023-04-02', open: 152, high: 158, low: 151, close: 157 },
          { time: '2023-04-03', open: 157, high: 165, low: 156, close: 163 },
          { time: '2023-04-04', open: 163, high: 162, low: 155, close: 158 },
          { time: '2023-04-05', open: 158, high: 168, low: 157, close: 166 },
          { time: '2023-04-06', open: 166, high: 175, low: 165, close: 172 },
          { time: '2023-04-07', open: 172, high: 180, low: 170, close: 178 },
          { time: '2023-04-08', open: 178, high: 176, low: 165, close: 168 },
          { time: '2023-04-09', open: 168, high: 165, low: 155, close: 158 }
        ],
        initialCandleCount: 3,
        prompt: "The market is accelerating. Initiate a LONG position and use the Supertrend (ATR-based) trailing stop to capture the maximum trend expansion. Exit only when the trend flips red.",
        rationale: "The Supertrend is a volatility-adjusted trailing stop. It outshines fixed stops because it 'breathes' with the market. In this scenario, exit on Apr 8th captures a 26-point move, whereas a static stop might have been hit during the minor pullback on Apr 4th."
      },
      content: `
# The Cloud & Volatility Stops (TF_ICH_01, TF_ST_01)

Advanced trend-following requires moving beyond static numbers and accounting for Volatility and Time.

## The Core Logic
- **Ichimoku Kumo (The Cloud)**: Projects support/resistance forward in time. If price is above the Cloud, the path of least resistance is UP.
- **Supertrend**: Uses the Average True Range (ATR) to calculate a trailing stop that tightens during low volatility and widens during high volatility.

## The Institutional Edge
Systematic funds use Volatility Stops (like Supertrend) because they "breathe" with the market. A static 50-pip stop might be too tight during a news event and too loose during consolidation. ATR-based stops solve this mathematically.

## The Retail Trap
**Cutting Winners Early**. Retail traders get nervous during minor pullbacks and close their positions, missing the massive parabolic moves. Professionals "Walk the Bands," trusting the Supertrend to keep them in the trade until the trend structurally breaks.

## The Execution Protocol
1. Ensure price is Above the Ichimoku Cloud (Bullish Bias).
2. Wait for a Supertrend buy signal.
3. Enter Long.
4. **Do not set a fixed Take Profit.** Trail your stop-loss precisely along the Supertrend line until you are stopped out in profit.
`
    }
  });

  // 2.9: Channel Breakouts (Donchian & Bollinger)
  await prisma.courseModule.upsert({
    where: { level_moduleNumber: { level: 2, moduleNumber: '2.9' } },
    update: {
      title: 'Volatility & Channel Breakouts',
      objective: 'Trade explosive volatility releases using Donchian and Bollinger systems.',
      logicIds: ['TF_DC_01', 'TF_BB_01'],
      strategyFamilies: ['TF'],
      interactiveTaskType: 'type_b_scenario',
      interactiveTaskData: {
        contextPrompt: "Price is hugging the upper Bollinger Band. The 'Squeeze' has lasted for 20 days, but the breakout candle just closed with extremely LOW volume. What is the institutional read?",
        options: [
          {
            id: 'bo_1',
            text: 'Low-Volume Breakout. Enter LONG immediately.',
            grade: 'invalid',
            feedback: 'Incorrect. This is a "Bull Trap" or "Low-Confidence Breakout."',
            rationale: "A breakout requires 'Fuel' (Volume). If price moves outside the band on low volume, there is no institutional follow-through. The move is likely a 'Fakeout' designed to trigger retail buy orders before reversing."
          },
          {
            id: 'bo_2',
            text: 'Wait for a high-volume confirmation candle or a retest.',
            grade: 'best',
            feedback: 'Correct. Institutional traders wait for the "Expansion" phase to be confirmed by volume.',
            rationale: "Volatility Cycles move from Compression to Expansion. A low-volume break suggests the market is still in Compression, even if price is slightly outside the level. Professionals stay in cash until the 'Explosion' is real."
          }
        ]
      },
      content: `
# Channel Breakouts (TF_DC_01, TF_BB_01)

Markets breathe in cycles: Compression (Consolidation) leads to Expansion (Breakouts). 

## The Core Logic
- **Bollinger Bands**: When the bands tighten (The Squeeze), volatility is incredibly low. A massive move is imminent.
- **Donchian Channels**: A breakout of the 20-period high is the purest momentum entry trigger.

## The Institutional Edge
Institutions load their massive positions during the "Compression" phase (The Squeeze). Once they are ready, they trigger the breakout. Breakout traders aim to catch the resulting wave of forced liquidation as trapped traders are stopped out.

## The Retail Trap
**The Low-Volume Fakeout**. Price pierces the upper Bollinger Band, retail buys the breakout, but volume is dead. Institutions fade the move and drive price back into the range. 

## The Execution Protocol
1. Identify a prolonged Bollinger Squeeze (tight consolidation).
2. Wait for a candle to close outside the bands (The Breakout).
3. **Verify Fuel**: Check if volume on the breakout candle is significantly higher than average.
4. If volume is high, enter the trade and "Walk the Band" up.
`
    },
    create: {
      level: 2,
      moduleNumber: '2.9',
      title: 'Volatility & Channel Breakouts',
      objective: 'Trade explosive volatility releases using Donchian and Bollinger systems.',
      skillLevel: SkillLevel.intermediate,
      marketTrack: ModuleTrack.core,
      orderIndex: 9,
      strategyFamilies: ['TF'],
      logicIds: ['TF_DC_01', 'TF_BB_01'],
      interactiveTaskType: 'type_b_scenario',
      interactiveTaskData: {
        contextPrompt: "Price is hugging the upper Bollinger Band. The 'Squeeze' has lasted for 20 days, but the breakout candle just closed with extremely LOW volume. What is the institutional read?",
        options: [
          {
            id: 'bo_1',
            text: 'Low-Volume Breakout. Enter LONG immediately.',
            grade: 'invalid',
            feedback: 'Incorrect. This is a "Bull Trap" or "Low-Confidence Breakout."',
            rationale: "A breakout requires 'Fuel' (Volume). If price moves outside the band on low volume, there is no institutional follow-through. The move is likely a 'Fakeout' designed to trigger retail buy orders before reversing."
          },
          {
            id: 'bo_2',
            text: 'Wait for a high-volume confirmation candle or a retest.',
            grade: 'best',
            feedback: 'Correct. Institutional traders wait for the "Expansion" phase to be confirmed by volume.',
            rationale: "Volatility Cycles move from Compression to Expansion. A low-volume break suggests the market is still in Compression, even if price is slightly outside the level. Professionals stay in cash until the 'Explosion' is real."
          }
        ]
      },
      content: `
# Channel Breakouts (TF_DC_01, TF_BB_01)

Markets breathe in cycles: Compression (Consolidation) leads to Expansion (Breakouts). 

## The Core Logic
- **Bollinger Bands**: When the bands tighten (The Squeeze), volatility is incredibly low. A massive move is imminent.
- **Donchian Channels**: A breakout of the 20-period high is the purest momentum entry trigger.

## The Institutional Edge
Institutions load their massive positions during the "Compression" phase (The Squeeze). Once they are ready, they trigger the breakout. Breakout traders aim to catch the resulting wave of forced liquidation as trapped traders are stopped out.

## The Retail Trap
**The Low-Volume Fakeout**. Price pierces the upper Bollinger Band, retail buys the breakout, but volume is dead. Institutions fade the move and drive price back into the range. 

## The Execution Protocol
1. Identify a prolonged Bollinger Squeeze (tight consolidation).
2. Wait for a candle to close outside the bands (The Breakout).
3. **Verify Fuel**: Check if volume on the breakout candle is significantly higher than average.
4. If volume is high, enter the trade and "Walk the Band" up.
`
    }
  });

  // 2.11: Market Structure Mastery
  await prisma.courseModule.upsert({
    where: { level_moduleNumber: { level: 2, moduleNumber: '2.11' } },
    update: {
      title: 'Market Structure Mastery',
      objective: 'Identify trends and reversals using Pure Price Action (HH/HL/LH/LL).',
      logicIds: ['TF_PS_01'],
      strategyFamilies: ['TF'],
      interactiveTaskType: 'type_a_point_click',
      interactiveTaskData: {
        chartData: [
          { time: '2023-05-01', open: 100, high: 110, low: 95, close: 105 }, // HL
          { time: '2023-05-02', open: 105, high: 120, low: 102, close: 118 }, // HH
          { time: '2023-05-03', open: 118, high: 115, low: 108, close: 112 }, // HL
          { time: '2023-05-04', open: 112, high: 130, low: 110, close: 125 }, // HH
          { time: '2023-05-05', open: 125, high: 122, low: 105, close: 108 }, // Break of HL (BoS)
          { time: '2023-05-06', open: 108, high: 112, low: 90, close: 95 }   // LL
        ],
        prompt: "Identify the 'Break of Structure' (BoS) candle where the previous Higher Low is violated, signalling a trend reversal.",
        validationZones: {
          primary: [{ time: '2023-05-05', priceMin: 90, priceMax: 115 }]
        },
        rationale: "Market Structure is the skeleton of the market. An uptrend is a series of Higher Highs and Higher Lows. The moment price closes below the most recent Higher Low (HL), the trend is officially dead. This is where professional traders flip their bias from Bullish to Bearish."
      },
      content: `
# Market Structure Mastery (TF_PS_01)

Indicators are just delayed derivatives of price. To master the markets, you must learn to read the naked chart.

## The Core Logic
A valid uptrend is an unbroken series of Higher Highs (HH) and Higher Lows (HL). The trend remains intact until price breaks and closes below the most recent Higher Low.

## The Institutional Edge
Institutions don't use RSI or Stochastics to determine trends; they use liquidity. A Higher Low represents the exact price level where institutional buyers previously absorbed all selling pressure. It is a fortified wall. 

## The Retail Trap
**The Liquidity Sweep**. Retail traders place their stops exactly 1 pip below the Higher Low. Institutions will briefly spike price below the HL (creating a wick) to trigger those stops and acquire liquidity, before continuing the uptrend. 

## The Execution Protocol
1. Map every major swing high and swing low on the chart.
2. To short the market, wait for price to break below the most recent Higher Low.
3. Wait for the candle to **CLOSE** below the HL. (Wicks do not count).
4. Enter short on the subsequent pullback (Lower High formation).
`
    },
    create: {
      level: 2,
      moduleNumber: '2.11',
      title: 'Market Structure Mastery',
      objective: 'Identify trends and reversals using Pure Price Action (HH/HL/LH/LL).',
      skillLevel: SkillLevel.intermediate,
      marketTrack: ModuleTrack.core,
      orderIndex: 11,
      strategyFamilies: ['TF'],
      logicIds: ['TF_PS_01'],
      interactiveTaskType: 'type_a_point_click',
      interactiveTaskData: {
        chartData: [
          { time: '2023-05-01', open: 100, high: 110, low: 95, close: 105 }, // HL
          { time: '2023-05-02', open: 105, high: 120, low: 102, close: 118 }, // HH
          { time: '2023-05-03', open: 118, high: 115, low: 108, close: 112 }, // HL
          { time: '2023-05-04', open: 112, high: 130, low: 110, close: 125 }, // HH
          { time: '2023-05-05', open: 125, high: 122, low: 105, close: 108 }, // Break of HL (BoS)
          { time: '2023-05-06', open: 108, high: 112, low: 90, close: 95 }   // LL
        ],
        prompt: "Identify the 'Break of Structure' (BoS) candle where the previous Higher Low is violated, signalling a trend reversal.",
        validationZones: {
          primary: [{ time: '2023-05-05', priceMin: 90, priceMax: 115 }]
        },
        rationale: "Market Structure is the skeleton of the market. An uptrend is a series of Higher Highs and Higher Lows. The moment price closes below the most recent Higher Low (HL), the trend is officially dead. This is where professional traders flip their bias from Bullish to Bearish."
      },
      content: `
# Market Structure Mastery (TF_PS_01)

Indicators are just delayed derivatives of price. To master the markets, you must learn to read the naked chart.

## The Core Logic
A valid uptrend is an unbroken series of Higher Highs (HH) and Higher Lows (HL). The trend remains intact until price breaks and closes below the most recent Higher Low.

## The Institutional Edge
Institutions don't use RSI or Stochastics to determine trends; they use liquidity. A Higher Low represents the exact price level where institutional buyers previously absorbed all selling pressure. It is a fortified wall. 

## The Retail Trap
**The Liquidity Sweep**. Retail traders place their stops exactly 1 pip below the Higher Low. Institutions will briefly spike price below the HL (creating a wick) to trigger those stops and acquire liquidity, before continuing the uptrend. 

## The Execution Protocol
1. Map every major swing high and swing low on the chart.
2. To short the market, wait for price to break below the most recent Higher Low.
3. Wait for the candle to **CLOSE** below the HL. (Wicks do not count).
4. Enter short on the subsequent pullback (Lower High formation).
`
    }
  });

  // Level 1 Test
  await prisma.knowledgeTest.upsert({
    where: { level: 1 },
    update: {
      title: 'Level 1: Foundations Assessment',
      questions: [
        {
          id: 'q1',
          question: 'What is the "Golden Rule" of Trend Structure?',
          options: [
            'A trend breaks when price touches an old level',
            'A trend is valid until a candle body closes below the most recent Higher Low (uptrend)',
            'Trends always reverse after 3 waves',
            'A trend is broken by any wick that goes below a low'
          ],
          correctIndex: 1,
          explanation: 'Wicks are noise. Only a candle body close signifies a true shift in structural control.'
        },
        {
          id: 'q2',
          question: 'Where is an "Order Block" typically found?',
          options: [
            'In the middle of a range',
            'At the very top of a trend',
            'The last opposing candle before an impulsive move that broke structure',
            'Every 100 pips in the market'
          ],
          correctIndex: 2,
          explanation: 'Order Blocks represent the origin of institutional expansion.'
        },
        {
          id: 'q3',
          question: 'What does "Climax Volume" signify?',
          options: [
            'A strong breakout with high probability of continuation',
            'A period of no market interest',
            'Potential exhaustion where big money is exiting to retail buyers',
            'A news event that should be ignored'
          ],
          correctIndex: 2,
          explanation: 'Extremely high volume at price peaks often means the "smart money" is offloading their positions.'
        },
        {
          id: 'q4',
          question: 'Which of these is a requirement for a Pin Bar to be a valid trigger?',
          options: [
            'It must be green',
            'It must occur at a predefined institutional level',
            'It must have a wick on both sides',
            'It must be the largest candle on the chart'
          ],
          correctIndex: 1,
          explanation: 'Candle patterns are noise unless they occur at a valid structural or liquidity level.'
        }
      ]
    },
    create: {
      level: 1,
      title: 'Level 1: Foundations Assessment',
      passThreshold: 75,
      questionsPerAttempt: 4,
      timeLimitMin: 10,
      questions: [
        {
          id: 'q1',
          question: 'What is the "Golden Rule" of Trend Structure?',
          options: [
            'A trend breaks when price touches an old level',
            'A trend is valid until a candle body closes below the most recent Higher Low (uptrend)',
            'Trends always reverse after 3 waves',
            'A trend is broken by any wick that goes below a low'
          ],
          correctIndex: 1,
          explanation: 'Wicks are noise. Only a candle body close signifies a true shift in structural control.'
        },
        {
          id: 'q2',
          question: 'Where is an "Order Block" typically found?',
          options: [
            'In the middle of a range',
            'At the very top of a trend',
            'The last opposing candle before an impulsive move that broke structure',
            'Every 100 pips in the market'
          ],
          correctIndex: 2,
          explanation: 'Order Blocks represent the origin of institutional expansion.'
        },
        {
          id: 'q3',
          question: 'What does "Climax Volume" signify?',
          options: [
            'A strong breakout with high probability of continuation',
            'A period of no market interest',
            'Potential exhaustion where big money is exiting to retail buyers',
            'A news event that should be ignored'
          ],
          correctIndex: 2,
          explanation: 'Extremely high volume at price peaks often means the "smart money" is offloading their positions.'
        },
        {
          id: 'q4',
          question: 'Which of these is a requirement for a Pin Bar to be a valid trigger?',
          options: [
            'It must be green',
            'It must occur at a predefined institutional level',
            'It must have a wick on both sides',
            'It must be the largest candle on the chart'
          ],
          correctIndex: 1,
          explanation: 'Candle patterns are noise unless they occur at a valid structural or liquidity level.'
        }
      ]
    }
  });

  console.log('--- Seeding Complete: Level 1-3 Interactive Tasks are Live ---');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
