import { prisma } from '../src/lib/prisma';

const level2Questions = [
  {
    id: "l2_q1",
    question: "What does the wick of a candlestick represent?",
    options: [
      "The opening price of the session.",
      "The highest and lowest prices reached during the session before it closed.",
      "The closing price of the session.",
      "The volume traded during the session."
    ],
    correctIndex: 1,
    explanation: "The wick shows the extremes (high and low) of price action during the session before it closed.",
  },
  {
    id: "l2_q2",
    question: "How does a higher timeframe chart relate to a lower timeframe chart?",
    options: [
      "They show completely different markets.",
      "The higher timeframe chart compresses multiple lower timeframe candles into a single candle.",
      "Lower timeframes are more reliable for overall trend direction.",
      "They are the exact same, just scaled differently."
    ],
    correctIndex: 1,
    explanation: "Fractal scaling means a higher timeframe candle is simply a compressed view of multiple lower timeframe candles.",
  },
  {
    id: "l2_q3",
    question: "What defines an uptrend in basic market structure?",
    options: [
      "Continuous sideways movement.",
      "A series of lower highs and lower lows.",
      "A series of higher highs and higher lows.",
      "A single large expansion candle upwards."
    ],
    correctIndex: 2,
    explanation: "An uptrend is characterized by price continuously making higher highs and higher lows.",
  },
  {
    id: "l2_q4",
    question: "What is the main difference between internal structure and external structure?",
    options: [
      "Internal structure happens on the 1-minute chart, external structure is on the daily chart.",
      "External structure outlines the main swing highs and lows, while internal structure is the smaller price action between them.",
      "Internal structure is more important than external structure.",
      "External structure only applies to forex."
    ],
    correctIndex: 1,
    explanation: "External structure represents the broader swings, while internal structure refers to the localized price movement inside those major boundaries.",
  },
  {
    id: "l2_q5",
    question: "What is a Market Structure Shift (MSS)?",
    options: [
      "When price closes beyond a meaningful protected swing, suggesting structure may be changing.",
      "When price moves sideways for a long time.",
      "When the market opens with a gap.",
      "When one candle has a long wick."
    ],
    correctIndex: 0,
    explanation: "An MSS is not just any small break. It becomes meaningful when price closes beyond an important protected swing, showing that the previous structure may be weakening.",
  },
  {
    id: "l2_q6",
    question: "How do we identify the boundaries of a range on a chart?",
    options: [
      "By drawing a line across the highest body and the lowest wick of the entire chart.",
      "By marking the obvious range high and range low where price is currently contained.",
      "By finding the exact middle price of the last year.",
      "By looking at where the most volume was traded."
    ],
    correctIndex: 1,
    explanation: "A range is defined by the clear high and low boundaries where price is actively reacting and contained.",
  },
  {
    id: "l2_q7",
    question: "What does the midpoint of a range represent?",
    options: [
      "The guaranteed reversal point for the next trend.",
      "The divider between the upper half and the lower half of the range.",
      "The highest probability area to enter a trade.",
      "The price where the market opened for the week."
    ],
    correctIndex: 1,
    explanation: "The midpoint simply divides the range into an upper half and a lower half to help locate better-positioned planning areas.",
  },
  {
    id: "l2_q8",
    question: "Where is a supply zone generally considered better-positioned for planning sell-side ideas?",
    options: [
      "Below the midpoint, in the lower half of the range.",
      "Exactly on the midpoint.",
      "Above the midpoint, in the upper half of the range.",
      "Only outside of the current range."
    ],
    correctIndex: 2,
    explanation: "Supply zones in the upper half of a range are generally better-positioned for sell-side planning.",
  },
  {
    id: "l2_q9",
    question: "Where do orders often sit that make old highs and old lows logical target areas to watch?",
    options: [
      "Exactly at the midpoint of the range.",
      "In the messy middle of the chart.",
      "Just above obvious old highs and just below obvious old lows.",
      "Inside the bodies of large expansion candles."
    ],
    correctIndex: 2,
    explanation: "Market participants often place stops and orders just above obvious highs and below obvious lows, making them logical target areas.",
  },
  {
    id: "l2_q10",
    question: "Why do we generally want to avoid planning trades in the \"messy middle\" of a range?",
    options: [
      "Because price action is often choppy, unclear, and lacks a defined edge.",
      "Because that is where the most expansion happens.",
      "Because it is the only place where supply and demand zones form.",
      "Because the midpoint acts as an unbreakable wall."
    ],
    correctIndex: 0,
    explanation: "The middle of a range is often characterized by choppy, overlapping price action without clear directional conviction.",
  },
  {
    id: "l2_q11",
    question: "You have marked a range with a clear high, low, and midpoint. Price is currently in the lower half of the range and approaches a strong demand zone. What is the most logical plan?",
    options: [
      "Look for sell-side opportunities because price is going down.",
      "Watch for buyers to show control at the demand zone, as it is a well-positioned buy-side planning area.",
      "Wait for price to cross the midpoint before making any plans.",
      "Assume the range low will break and sell immediately."
    ],
    correctIndex: 1,
    explanation: "A demand zone in the lower half of a range is a better-positioned area to watch for buy-side reactions.",
  },
  {
    id: "l2_q12",
    question: "Price closes below a protected external higher low after an uptrend. The chart also shows an obvious old low below current price. How should you map this?",
    options: [
      "Mark the close below the protected swing as a possible structure shift, and mark the old low as a target area to watch.",
      "Ignore the structure shift and buy immediately because the old trend was bullish.",
      "Assume price is guaranteed to reach the old low.",
      "Delete all previous chart marks because one shift invalidates all mapping."
    ],
    correctIndex: 0,
    explanation: "A close below a protected external higher low can suggest a possible structure shift. The old low below price becomes a logical target area to watch, but not a guaranteed destination.",
  }
];

async function main() {
  console.log("Seeding Level 2 Knowledge Test...");

  const existingTest = await prisma.knowledgeTest.findUnique({
    where: { level: 2 }
  });

  if (existingTest) {
    await prisma.knowledgeTest.update({
      where: { level: 2 },
      data: {
        title: "Level 2 Knowledge Test",
        passThreshold: 80, // 80% pass threshold
        timeLimitMin: 20,
        questionsPerAttempt: 12,
        questions: level2Questions as any,
      }
    });
    console.log("Updated existing Level 2 Knowledge Test.");
  } else {
    await prisma.knowledgeTest.create({
      data: {
        level: 2,
        title: "Level 2 Knowledge Test",
        passThreshold: 80,
        timeLimitMin: 20,
        questionsPerAttempt: 12,
        questions: level2Questions as any,
      }
    });
    console.log("Created new Level 2 Knowledge Test.");
  }

  // Ensure Level 2 has 12 modules registered in the database, just to be safe for prerequisite checks.
  // Actually, the prerequisite checks in test-actions might rely on all modules being completed.
  console.log("Seed completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
