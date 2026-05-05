import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DIRECT_URL,
  ssl: { rejectUnauthorized: false }
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🚀 Initializing Full 69-Module Market Participant ingestion with Adaptations...");

  const modules = [
    // ============================================
    // LEVEL 0: MARKET READING FOUNDATIONS (6 MODULES)
    // ============================================
    {
      level: 0, moduleNumber: "0.1", title: "What Lurnava Teaches: Reading, Practice, Review",
      objective: "Welcome to the Market Reading Foundations.",
      content: `# What Lurnava Teaches: Reading, Practice, Review

Welcome to Lurnava. This is not a typical trading course. Most people come to the markets looking for "signals"—simple instructions to buy or sell. Lurnava does not provide signals, nor does it teach you how to "predict" the future. Predicting is a guessing game, and guessing leads to inconsistency.

Instead, Lurnava teaches you **Market Reading**. This is the ability to look at a chart and identify objective structural facts. It is like learning a language. Once you can read the language of the market, you don't need anyone to tell you what to do.

### The Lurnava Method
Our approach is built on a three-part loop: **Read, Practice, Review.**

1. **Read**: You learn a specific structural concept.
2. **Practice**: You immediately apply that concept in a simulation (The Lab).
3. **Review**: You document what happened in your Journal and analyze your decision-making.

:::skill-target
Understand that professional participation is about structured observation and repeated practice, not emotional guessing or following "experts."
:::

### What We Do Not Teach
It is important to be clear: Lurnava is not a "get rich quick" platform. We do not use hype, and we do not promise profits. In fact, we avoid the word "profit" because it focuses your mind on the result rather than the process.

**What this means:**
We focus on **Evidence**. Evidence is a piece of observable data on the chart that suggests a specific market state. For example, if price breaks a previous high, that is evidence of strength. We don't "believe" price is strong; we observe it.

:::visual
title: The Lurnava Learning Loop
lookFor: ["1. Learn: Master a structural concept", "2. Practice: Apply it in the Lab simulation", "3. Review: Document facts in your Journal", "4. Refine: Improve your reading based on data"]
:::

### Why You Should Not Rush
The biggest mistake beginners make is rushing to "trade." At Lurnava, we don't start with trading; we start with **Market Reading Foundations**. You wouldn't try to fly a plane before learning what the buttons do.

**Simple Scenario:**
Imagine a person who buys a "secret strategy" and starts clicking buttons. They might win once or twice by luck, but they have no idea *why* it happened. When they eventually lose, they get frustrated and quit.
A Lurnava learner, however, knows exactly what evidence they were looking for. If the market does something unexpected, they record it, review it, and learn from it.

### Your Tools
- **Modules**: These lessons where you learn the theory.
- **Interactive Tasks**: Small exercises inside the modules to check your understanding.
- **The Lab**: A simulation environment where you can practice reading real historical data without risk.
- **The Journal**: Your personal record of every observation and practice session.
- **Nava**: Your AI assistant that helps you review your logic and provides context.

:::decision-rule
Commit to the process of learning. If you find yourself looking for a "magic signal," stop and return to the foundations of objective reading.
:::

:::summary
Lurnava is a skill-building platform. We teach you to read the market as a professional observer. Success comes from the quality of your practice and the honesty of your reviews.
:::`,
      interactiveTaskType: "choice_block",
      interactiveTaskData: {
        question: "What is the correct Lurnava learning loop?",
        options: [
          "Follow a signal -> click buy -> check profit -> repeat.",
          "Learn concept -> complete practice -> take test/mission -> save review note.",
          "Guess the direction -> wait for the win -> ignore the loss -> continue.",
          "Read the news -> follow the hype -> buy the dip -> hope for the best."
        ],
        correctIndex: 1
      },
      skillLevel: "beginner", orderIndex: 1
    },
    {
      level: 0, moduleNumber: "0.2", title: "What a Market Really Is",
      objective: "Understanding the core of market interaction.",
      content: `# What a Market Really Is

To read a chart, you must first understand what you are actually looking at. A price chart is not just a bunch of lines or colored bars; it is a visual record of human and algorithmic interaction.

At its simplest level, a market is a place where buyers and sellers meet to exchange things. In our case, they exchange financial instruments like currencies, stocks, or commodities.

### The Meeting of Orders
Every price movement you see is the result of an **Order Interaction**.
- **Buyers** want to acquire an asset at the lowest possible price.
- **Sellers** want to get rid of an asset at the highest possible price.

When a buyer and a seller agree on a price, a transaction happens. If there are more people wanting to buy than there are people willing to sell at a certain price, the price must move higher to find new sellers. This is the law of supply and demand.

### Key Technical Terms
To participate like a professional, you need to understand three core concepts:

1. **The Spread**: This is the small gap between the price buyers offer (**Bid**) and the price sellers ask (**Ask**).
   *Beginner Example:* Imagine you want to buy a used car. You offer $5,000 (Bid), but the seller wants $5,500 (Ask). The $500 difference is the "spread." In financial markets, this gap is usually very small, but it always exists.

2. **Liquidity**: This means the availability of orders waiting in the market.
   *Simple Scenario:* If you want to sell 100 apples and there are 1,000 people waiting to buy apples, the market is "liquid." If you want to sell 100 apples but no one is there to buy, the market is "illiquid." Professional participants look for areas with high liquidity because it allows them to enter and exit easily.

3. **Orders**: An order is simply an instruction to the market. A **Market Order** says "buy/sell right now at the best available price." A **Limit Order** says "buy/sell only if the price reaches this specific level."

:::visual
title: Market Order Matching
lookFor: ["Sellers (Ask Prices) - Waiting above the current price", "The Spread - The gap between Bid and Ask", "Buyers (Bid Prices) - Waiting below the current price", "Transaction - Occurs when a buyer hits the Ask or a seller hits the Bid"]
:::

### What Price Movement Is Not
Price does not move because of magic patterns or "luck." It moves because of **Intent**. Large amounts of capital (money) are being moved by participants with specific goals.

**Common Beginner Mistake:**
Thinking that a "pattern" like a triangle or a head-and-shoulders *causes* the market to move. It doesn't. The pattern is just a symptom of the underlying order interaction.

:::trap
**The "Magic Chart" Fallacy**: Believing the chart is a living entity that "wants" to go somewhere. The chart is just a mirror of supply and demand.
:::

### Wrong Approach vs Better Approach
- **Wrong**: "The chart looks like it's going up, so I'll buy." (Emotional guessing)
- **Better**: "I observe that buyers are consistently hitting the Ask price and pushing through seller levels. This is evidence of upward intent." (Objective observation)

:::summary
A market is a matching engine for buyers and sellers. Price moves to find the next available area of liquidity (orders). Your job is to observe where those orders are likely clustered.
:::`,
      interactiveTaskType: "choice_block",
      interactiveTaskData: {
        question: "Which of the following is the best explanation of a market transaction?",
        options: [
          "A transaction happens when the chart forms a special pattern like a triangle.",
          "A transaction happens when a buyer and a seller agree on a price and an order is matched.",
          "A transaction happens when the computer decides it is time for the price to move.",
          "A transaction happens automatically every few seconds regardless of orders."
        ],
        correctIndex: 1
      },
      skillLevel: "beginner", orderIndex: 2
    },
    {
      level: 0, moduleNumber: "0.3", title: "Candles Are Records, Not Signals",
      objective: "Learning to read price data without bias.",
      content: `# Candles Are Records, Not Signals

Most beginners look at a "candlestick chart" and see symbols that tell them to buy or sell. They see a "Pin Bar" or an "Engulfing Candle" and think it is a "signal." This is a dangerous mistake.

A candle is not a signal. A candle is a **Record**. It is a visual summary of what happened to the price over a specific period.

### The Anatomy of a Candle
Every candle tells a four-part story:
1. **Open**: Where the price started.
2. **High**: The highest point reached.
3. **Low**: The lowest point reached.
4. **Close**: Where the price ended.

The rectangular part of the candle is called the **Body**. It shows the distance between the Open and the Close. If the Close is higher than the Open, the body is usually green (or white), showing a bullish period. If the Close is lower, the body is red (or black), showing a bearish period.

The thin lines above and below the body are called **Wicks** (or shadows). They represent the prices that were "tested" but rejected by the close of the period.

### Context is King
The most important rule in market reading is that **one candle alone is weak evidence.**

**Simple Scenario:**
Imagine you see a candle with a very long wick on top. This shows that the price went high but was pushed back down. Many beginners would see this and say, "That's a bearish signal! Sell now!"
But what if the previous ten candles were all strongly bullish? In that **Context**, the long wick might just be a brief pause before the price continues higher.

**What this does not mean:**
A single candle does not "guarantee" a reversal. It only tells you what happened in that specific window of time.

:::visual
title: Candle Anatomy & Context
lookFor: ["Body: The range between Open and Close", "Wicks: Prices that were rejected", "Context: The story told by the surrounding candles", "Evidence: Use candles to confirm a story, not to invent one"]
:::

### Common Beginner Mistake: Signal-Hunting
Beginners spend hours memorizing names of candle patterns. They think if they find a "Morning Star," they have found a shortcut.
Professionals don't care about the names. They care about the **Story**. They ask: "Who won this candle? Did the buyers hold their ground, or did the sellers displace them?"

### Wrong Approach vs Better Approach
- **Wrong**: "I see a Hammer candle. The book says a Hammer is a buy signal. I'm buying."
- **Better**: "This candle rejected a previous low and closed back inside the range. This is one piece of evidence that sellers are losing control, but I need more structural context before forming a reading."

:::decision-rule
Treat every candle as a journal entry of price action. Use it to build a case of evidence, never as a standalone reason to act.
:::

:::summary
Candles record the battle between buyers and sellers. The body shows commitment, and the wicks show rejection. To read them correctly, you must always look at the candles that came before them.
:::`,
      interactiveTaskType: "type_b_scenario",
      interactiveTaskData: {
        contextPrompt: "You see a red candle with a long wick at the bottom appearing after a series of strong red candles. How should you read this?",
        options: [
          { id: "opt1", text: "This is a buy signal because the wick shows rejection.", grade: "poor", feedback: "Acting on one candle without context is an assumption, not a reading.", rationale: "A single wick is not enough to reverse a strong sequence of bearish candles." },
          { id: "opt2", text: "This is a piece of evidence that sellers faced some resistance, but the overall context is still bearish. I will wait for more evidence.", grade: "best", feedback: "Correct. You are treating the candle as a record, not a signal.", rationale: "Professional reading requires multiple pieces of evidence and structural context." }
        ]
      },
      skillLevel: "beginner", orderIndex: 3
    },
    {
      level: 0, moduleNumber: "0.4", title: "Timeframes Change the Story",
      objective: "Understanding the chart's zoom levels.",
      content: `# Timeframes Change the Story

In the previous module, we learned that a candle records price over a "specific period." That period is determined by your **Timeframe**.

A timeframe is essentially the "zoom level" of your chart.
- A **1-hour (H1) chart** means each candle represents one hour of time.
- A **15-minute (m15) chart** means each candle represents fifteen minutes.
- A **Daily (D1) chart** means each candle represents a full day.

### The Multi-Layered Story
The market is happening on all timeframes at once. Understanding how they interact is one of the most important skills in market reading.

**Simple Scenario:**
Imagine you are looking at a map.
- On a **Global Map** (Higher Timeframe), you see that you are traveling North.
- On a **City Map** (Lower Timeframe), you might be turning left, right, or even going South to avoid a one-way street.

If you only look at the City Map, you might think you are lost. But if you look at the Global Map, you see that the small Southward turn is just a tiny part of a much larger Northward journey.

### Higher vs. Lower Timeframes
1. **Higher Timeframes (HTF)**: Provide the **Context**. They show the major "narrative" or direction. They are slower and carry more weight.
2. **Lower Timeframes (LTF)**: Provide the **Detail**. They show the specific "movements" and entries. They are faster and more "noisy" (filled with minor ups and downs).

:::skill-target
Learn to "zoom out" to find the big story before you "zoom in" to see the details. Never form a reading based only on a lower timeframe.
:::

:::visual
title: Timeframe Alignment
lookFor: ["HTF Anchor: The Daily/4H direction", "MTF Context: The 1H structural area", "LTF Catalyst: The 15m/5m specific behavior", "Alignment: When all 'maps' point in the same direction"]
:::

### The Zoom-In Trap
The most common beginner mistake is spending all day staring at a 1-minute or 5-minute chart.

**Why this is a mistake:**
Lower timeframes move very fast. They can show a "strong move" that is actually just a tiny, insignificant ripple inside a massive higher-timeframe wall. Beginners get excited by the ripple and forget about the wall.

**What this does not mean:**
"Lower timeframes are useless." They are very useful for seeing exactly where a move starts, but only if you already know the higher-timeframe direction.

### Wrong Approach vs Better Approach
- **Wrong**: "The 5-minute chart just showed a big green candle! I'm buying!" (Ignoring the fact that the 4-hour chart is in a massive downtrend).
- **Better**: "The Daily chart is bullish. I will zoom in to the 15-minute chart to find an area where I can observe a structural shift in my favor."

:::summary
Timeframes are tools for perspective. The higher timeframe tells you *where* you are going, and the lower timeframe shows you *how* you are getting there. Always start with the big picture.
:::`,
      interactiveTaskType: "type_b_scenario",
      interactiveTaskData: {
        contextPrompt: "The 4-hour chart is in a clear downtrend with lower highs and lower lows. You zoom into the 5-minute chart and see a very strong green candle. What is the most disciplined reading?",
        options: [
          { id: "opt1", text: "The trend has reversed on the 5-minute chart, so I should look for buys.", grade: "poor", feedback: "A single candle on a lower timeframe cannot reverse a higher-timeframe narrative.", rationale: "LTF moves are often just noise or small retracements inside an HTF move." },
          { id: "opt2", text: "The green candle is likely a minor retracement inside the 4-hour downtrend. I will wait for evidence that the 4-hour direction is resuming.", grade: "best", feedback: "Correct. You are prioritizing higher-timeframe context.", rationale: "Successful reading requires aligning the detail of the LTF with the context of the HTF." }
        ]
      },
      skillLevel: "beginner", orderIndex: 4
    },
    {
      level: 0, moduleNumber: "0.5", title: "Basic Structure: Swings, Ranges, Direction",
      objective: "Mapping the skeleton of the market.",
      content: `# Basic Structure: Swings, Ranges, Direction

If candles are the words, **Market Structure** is the grammar. It is the skeleton that holds everything together. Without structure, a chart is just a mess of random wiggles.

Structure allows us to map the market objectively. There are three core components you must master: **Swings**, **Ranges**, and **Direction**.

### 1. Swing Highs and Swing Lows
A **Swing** is a turning point in price.
- A **Swing High** is a peak. It is formed when price goes up, stops, and then moves down.
- A **Swing Low** is a valley. It is formed when price goes down, stops, and then moves up.

These points are our "anchors." They represent the extremes of a move where the market's intent shifted.

### 2. The Range
A **Range** is the distance between a Swing Low and a Swing High.
Think of it as a "box" that price is currently playing inside.
*Beginner Example:* If the highest price today was $100 (Swing High) and the lowest was $90 (Swing Low), the market is in a "$10 range." Until price breaks out of this box, it hasn't truly changed its structural story.

### 3. Direction (The Narrative)
By looking at how new Swings are formed, we can determine the **Directional Narrative**:
- **Uptrend**: Price is making Higher Highs and Higher Lows. It is stepping up.
- **Downtrend**: Price is making Lower Highs and Lower Lows. It is stepping down.
- **Unclear / Ranging**: Price is stuck inside an old range, making messy highs and lows that don't go anywhere.

:::skill-target
Identify the major "anchors" (Swings) of the current move to define the "box" (Range) you are working in.
:::

:::visual
title: Market Structure Map
lookFor: ["Swing High: A confirmed peak", "Swing Low: A confirmed valley", "Dealing Range: The area between the two extremes", "Direction: The sequence of high/low steps"]
:::

### What Does Not Count
A tiny "wiggle" on a 5-minute chart is not a "Major Swing High" if you are looking at a 1-hour story.
**What this means:**
Structure is relative to your timeframe. A "Major" swing is one that led to a significant move or broke a previous structural point.

### Common Beginner Mistake: Over-Mapping
Beginners try to label every single candle as a high or a low. This creates a messy chart and a confused mind.
*Better Approach:* Only label the obvious "peaks" and "valleys" that stand out. If you have to squint to see it, it's probably not important.

### Wrong Approach vs Better Approach
- **Wrong**: "Price just went up 10 pips, so the trend is bullish." (Reactive thinking)
- **Better**: "Price is still inside the range of yesterday's high and low. Until it breaks one of those anchors, the structural reading is Unclear/Sideways." (Proactive mapping)

:::summary
Market structure is the map of the market. By identifying Swing Highs and Swing Lows, you define the Range. By observing the sequence of these ranges, you determine the Direction.
:::`,
      interactiveTaskType: "choice_block",
      interactiveTaskData: {
        question: "How do you identify a valid range in the market?",
        options: [
          "It is the distance between the most recent green candle and the most recent red candle.",
          "It is the distance between the most recently confirmed Swing High and Swing Low.",
          "It is the area where the price has stayed for at least 24 hours.",
          "It is the gap between the current price and the price from one hour ago."
        ],
        correctIndex: 1
      },
      skillLevel: "beginner", orderIndex: 5
    },
    {
      level: 0, moduleNumber: "0.6", title: "Evidence vs Assumption",
      objective: "Building a disciplined reading process.",
      content: `# Evidence vs Assumption

The final foundation of market reading is the most important for your survival: **Discipline**.

In the markets, there are two ways to think: **Assumption** and **Evidence**. Most retail participants act on assumption. Lurnava learners act on evidence.

### What is Assumption?
An assumption is believing something will happen *before* the market has actually done it. It is a form of prediction.
- *Example*: "I think price is going to bounce here because it's a 'round number' like $1.1000."
- *Why it is dangerous*: You are hoping. You are trying to be "smarter" than the market. If you are wrong, you have no logical reason for why you failed.

### What is Evidence?
Evidence is an observable chart behavior that has *already happened*.
- *Example*: "I observe that price reached $1.1000 and then immediately showed a structural shift with strong displacement candles."
- *Why it is powerful*: You are responding. You aren't guessing what *will* happen; you are observing what *is* happening.

:::decision-rule
Never form a reading based on what you "feel" or "hope" will happen. Only form a reading based on structural facts that are visible on the chart right now.
:::

### The "Unclear" Reading
One of the most valuable phrases in market reading is: **"This is Unclear."**
If the Evidence Stack is messy—for example, if the Daily chart is bullish but the 1-hour chart is bearish and the current range is narrow—the professional answer is not to guess. The answer is to mark it as **Unclear** and wait.

### Review Conditions
A **Review Condition** is a specific event that tells you your current reading is no longer valid.
*Simple Scenario:* You have a bullish reading because price broke a high. Your review condition might be: "If price closes back below the Swing Low that started the move, my bullish reading is dead."

Having a review condition prevents you from becoming emotionally "locked" into a single story. It gives you an objective reason to step back and re-audit.

:::visual
title: The Professional Decision Board
lookFor: ["Evidence: Facts already on the chart", "Assumption: Guesses about the future (Avoid)", "Unclear: The state of waiting for more data", "Review Condition: The trigger for a new audit"]
:::

### Wrong Approach vs Better Approach
- **Wrong**: "I'm buying here because I think it's cheap." (Assumption)
- **Better**: "Price has reached a Discount area of the range and has printed a bullish structural shift. I have three pieces of evidence supporting a move higher. My review condition is a close below the new swing low." (Evidence-Based)

:::summary
Professional reading is about collecting evidence. If there isn't enough evidence, the reading is Unclear. Every plan must have a Review Condition to maintain objectivity.
:::`,
      interactiveTaskType: "type_b_scenario",
      interactiveTaskData: {
        contextPrompt: "You are looking at a chart that is moving sideways with no clear highs or lows being broken. You really want to find a reason to practice. What is the best classification of this situation?",
        options: [
          { id: "opt1", text: "Assumption: I will guess the breakout direction so I can start practicing.", grade: "poor", feedback: "Guessing is not practice; it is gambling.", rationale: "Practice must be based on objective structural logic." },
          { id: "opt2", text: "Unclear: The market is not providing enough structural evidence to form a reading. I will wait for a breakout or a clear shift.", grade: "best", feedback: "Correct. Recognizing an unclear market is a vital skill.", rationale: "Objectivity requires accepting when the data is insufficient for a decision." }
        ]
      },
      skillLevel: "beginner", orderIndex: 6
    },

    {
      level: 0, moduleNumber: "0.7", title: "Forex Is Relative Strength, Not One Asset Moving",
      objective: "Understand that a currency pair is a relationship between two economies.",
      content: `# Forex Is Relative Strength, Not One Asset Moving

When you enter the world of Forex (Foreign Exchange), the first thing you notice is that everything comes in pairs, like **EUR/USD** or **GBP/JPY**. Beginners often make the mistake of thinking they are buying "the Euro" or "the Yen" as if it were a single stock. In reality, you are participating in a **Relationship**.

### The Tug-of-War
Imagine a game of tug-of-war between two teams. One team is the Eurozone economy, and the other is the United States economy. The price you see on the chart is the center point of that rope.
- If the Euro team pulls harder (EUR gets stronger), the price moves up.
- If the U.S. team pulls harder (USD gets stronger), the price moves down.

**What this means:**
Price movement in Forex is **Relative**. A "rally" (upward move) in EUR/USD doesn't always mean Europe is doing great; it might just mean the U.S. is doing poorly. To read the market like a professional, you must always ask: "Which side of the pair is actually driving this move?"

### Technical Terms: Base and Quote
To navigate the Forex roadway, you must understand how pairs are structured:

1. **Base Currency**: This is the first currency listed in the pair.
   *Simple Example:* In **EUR/USD**, the **EUR** is the Base. Think of this as the "item" you are looking at.
2. **Quote Currency**: This is the second currency listed.
   *Simple Example:* In **EUR/USD**, the **USD** is the Quote. Think of this as the "money" you use to measure the item.

If the price of EUR/USD is 1.1000, it means 1 Euro is worth 1.10 U.S. Dollars.

:::visual
title: The Currency Pair Relationship
lookFor: ["Base Currency (The Item) - First in the pair", "Quote Currency (The Price) - Second in the pair", "Relative Strength - Price rises if Base strengthens OR Quote weakens", "The DXY - A special index that tracks the strength of the US Dollar alone"]
:::

### What Does Not Count
A move in one currency pair does not guarantee a move in another, even if they share a currency. For example, EUR/USD might be going up while EUR/JPY is going down. This tells you the move is likely driven by the USD and JPY, not the EUR.

### Common Beginner Mistake: Ignoring the Other Side
Many beginners see a news headline about "Strong U.S. Jobs Data" and immediately expect EUR/USD to fall. They forget to check if there was even stronger news for the Euro at the same time. Professional participants look at the **DXY** (U.S. Dollar Index) to see how the Dollar is performing against *all* major currencies, not just one.

### Wrong Approach vs Better Approach
- **Wrong**: "I like the British Pound, so I'm going to buy GBP/USD." (Emotional bias toward one asset).
- **Better**: "I observe that the US Dollar (DXY) is showing structural weakness, while the British Pound (GBP) is holding its range. GBP/USD is the most logical pair to observe for a potential upward shift." (Relative strength analysis).

:::summary
Forex is a market of relationships. Every price move is the result of one currency becoming stronger or weaker relative to another. Success comes from identifying which currency is the 'driver' of the move.
:::`,
      interactiveTaskType: "choice_block",
      interactiveTaskData: {
        question: "If the price of the GBP/USD currency pair is rising, which of the following is a correct structural explanation?",
        options: [
          "The British Pound (GBP) is gaining strength while the US Dollar (USD) remains the same or weakens.",
          "The US Dollar (USD) is gaining strength, which always makes the pair go up.",
          "The British Pound is the only currency that matters in this pair.",
          "The price is rising because more people in London are waking up."
        ],
        correctIndex: 0
      },
      skillLevel: "beginner", orderIndex: 7
    },
    {
      level: 0, moduleNumber: "0.8", title: "Forex Sessions and Liquidity Windows",
      objective: "Learn how the time of day changes market behavior.",
      content: `# Forex Sessions and Liquidity Windows

The Forex market is open 24 hours a day, 5 days a week. However, it does not move with the same intensity all the time. Because different parts of the world wake up and go to sleep at different times, the market goes through distinct "cycles" called **Sessions**.

### The Three Major Sessions
1. **The Asian Session (Tokyo)**: Usually the quietest. Price often stays in a narrow range.
2. **The London Session**: Often the start of the "real" daily move. London is the world's largest Forex hub.
3. **The New York Session**: High energy. When New York opens, many of the day's major decisions are finalized.

**What this means:**
The "personality" of the market changes depending on which session is active. A strategy that works during the busy London session might fail miserably during the quiet Asian session.

### Technical Terms: Session and Spread
1. **Session**: A specific window of time when a major financial center's banks are open.
   *Beginner Example:* If you try to buy a coffee at 3 AM, the shop is closed. If you try to trade the Australian Dollar at 3 PM in New York, the Australian banks are closed. The market is still "open," but there are fewer participants.
2. **Spread**: The difference between the buy price and the sell price.
   *Simple Scenario:* During busy sessions, the spread is very small (cheap to trade). During quiet times or when a session is just opening, the spread can get much wider (more expensive).

:::visual
title: The 24-Hour Forex Cycle
lookFor: ["Asian Session - Low volatility, often ranging", "London Open - Injection of volume and new trends", "The Overlap - When London and NY are both open (Highest activity)", "NY Close - Market slows down as the day ends"]
:::

### What to Observe: The Overlap
The most important window for many participants is the **London/New York Overlap**. This is a 4-hour window where the two largest financial centers are both active. This is where you see the most "Liquidity"—meaning there are thousands of orders being matched every second.

### Common Beginner Mistake: Over-Trading Quiet Hours
Beginners often get frustrated when the market doesn't move. They might enter a practice trade during the late Asian session and wonder why nothing is happening for 6 hours.
*Better Approach:* Focus your practice on the first 2-3 hours of a major session. This is when the most "Evidence" is generated.

### Wrong Approach vs Better Approach
- **Wrong**: "I have some free time at 8 PM on a Tuesday, so I'll start trading now." (Ignoring the session context).
- **Better**: "I observe that the London session is opening. I will check for structural shifts now because I know this is a high-liquidity window where real intent is revealed."

:::summary
Time is just as important as price. Use sessions to provide context for your readings. High-volume sessions provide the most reliable evidence, while quiet sessions often lead to false moves.
:::`,
      interactiveTaskType: "type_b_scenario",
      interactiveTaskData: {
        contextPrompt: "You are observing a price chart at 10 PM New York time (during the Asian session). Price is moving very slowly in a 5-pip range. What is the most disciplined observation?",
        options: [
          { id: "opt1", text: "The market is boring, so I should increase my position size to make a move happen.", grade: "poor", feedback: "Increasing size to 'force' a move is a sign of lack of discipline.", rationale: "Low-liquidity sessions require patience, not larger risk." },
          { id: "opt2", text: "This is a low-liquidity window. I will record the current range in my journal but wait for the London open to see if a real move begins.", grade: "best", feedback: "Correct. You are respecting the session context.", rationale: "Professional participation requires waiting for windows of high participation." }
        ]
      },
      skillLevel: "beginner", orderIndex: 8
    },
    {
      level: 0, moduleNumber: "0.9", title: "Gold Is Not Just Another Currency Pair",
      objective: "Understanding the unique drivers of the Gold market.",
      content: `# Gold Is Not Just Another Currency Pair

In your trading terminal, Gold is usually listed as **XAU/USD**. While it looks like a currency pair, Gold behaves very differently. In the financial world, Gold is a **Commodity** and a **Safe-Haven Asset**.

### The Multi-Driver Asset
Unlike Forex, where you mostly compare two economies, Gold is influenced by three "Gold’s Key Context Drivers":
1. **The US Dollar**: Since Gold is priced in Dollars (USD), if the Dollar gets stronger, Gold usually gets cheaper (and vice versa).
2. **Interest Rates**: Gold doesn't pay you interest. If bank interest rates go up, people might sell Gold to put money in the bank. If rates go down, Gold becomes more attractive.
3. **market uncertainty**: When the world is in crisis (wars, economic crashes), people run to Gold because it is a physical asset that has held value for thousands of years.

**What this means:**
Gold can move violently even if nothing is happening in the currency markets. It responds to market uncertainty and "inflation" in a way that the Euro or Yen does not.

:::visual
title: The Gold Context Triangle
lookFor: ["USD Strength - When the Dollar rises, Gold often falls", "Interest Rates - Higher rates make Gold less attractive", "Uncertainty - Crisis events often cause sudden Gold rallies", "Physical Supply - Mines and central bank reserves"]
:::

### Why This Roadway Is Different
Gold is often much more "Volatile" than Forex. This means the price can move much further and much faster in a single minute. For a beginner, this is both an opportunity and a major risk.

**Technical Term: Volatility**
Volatility is the "speed" and "distance" of price movement.
*Beginner Example:* Imagine a car. A calm Forex pair is like a family sedan driving at 40 mph. Gold is like a sports car that can go from 0 to 100 mph in seconds. You need better "brakes" (risk management) to drive the sports car.

### What Does Not Count
A "Gold Signal" from a social media guru that ignores the US Dollar or Interest Rates is not a valid reading. If someone says "Buy Gold because it's cheap," but the U.S. government just raised interest rates to 10%, that "cheap" Gold is likely going to get much cheaper.

### Common Beginner Mistake: Underestimating the Speed
Beginners often use the same position size on Gold that they use on a slow Forex pair like EUR/GBP. Because Gold moves so much faster, they end up losing their practice balance much quicker than they expected.

:::summary
Gold is a unique asset driven by the Dollar, interest rates, and market uncertainty. It is highly volatile and requires a higher level of respect for structural boundaries than most currency pairs.
:::`,
      interactiveTaskType: "choice_block",
      interactiveTaskData: {
        question: "Why does Gold often rise during times of global economic uncertainty?",
        options: [
          "Because it is considered a safe-haven asset that holds value when other assets are falling.",
          "Because the price of Gold is controlled by a secret group of banks.",
          "Because people use Gold coins more often when the internet is down.",
          "Because Gold is a currency just like the Euro."
        ],
        correctIndex: 0
      },
      skillLevel: "beginner", orderIndex: 9
    },
    {
      level: 0, moduleNumber: "0.10", title: "Gold Volatility and Review Discipline",
      objective: "Learning to manage high-speed market data.",
      content: `# Gold Volatility and Review Discipline

Because Gold (**XAU/USD**) moves so fast, it can be overwhelming for a beginner. The "noise" (random small wiggles) on a Gold chart can look like a major move. This is why the Gold roadway requires the highest level of **Review Discipline**.

### Respecting the 'Spikes'
Gold is famous for "Wick Spikes." This is when the price shoots up or down very quickly and then immediately returns to where it started.
- In Forex, a 20-pip spike is a big deal.
- In Gold, a 50-pip spike can happen in a few seconds.

**Simple Scenario:**
Imagine you are playing a game of catch. In the Forex game, the ball is thrown at a steady pace. In the Gold game, the ball is sometimes replaced by a rocket. If you aren't paying attention, you'll miss the catch or get hurt.

:::visual
title: Gold Movement: Clean vs. Noisy
lookFor: ["Clean Structure - Price respects highs and lows with clear bodies", "Noisy Movement - Long wicks on both sides, 'messy' candles", "Displacement - Strong, full-bodied candles that show real intent", "Exhaustion - When wicks get longer and longer at the top of a move"]
:::

### Technical Term: Volatility (Deep Dive)
We introduced volatility in the last module, but on the Gold roadway, it is your constant companion.
**What this does not mean:**
Volatility does not mean "randomness." Even a fast-moving market follows structural rules. The difference is that you have less time to react.

### Stricter Review Discipline
Because moves happen so fast, you cannot rely on "feeling." You must have a **Pre-Flight Checklist** for every observation:
1. **HTF Context**: Is the 4-hour Gold chart bullish or bearish?
2. **Current Range**: Am I in the middle of a "messy" area or at a clear boundary?
3. **Evidence Stack**: Do I have at least 3 reasons for my reading?

### Wrong Approach vs Better Approach
- **Wrong**: "Gold is pumping! I'll buy now before I miss it!" (FOMO - Fear Of Missing Out).
- **Better**: "I observe a high-volatility spike into a major 4-hour resistance level. I will not 'chase' the move. I will wait for a structural shift on the 15-minute chart to confirm that the spike was an exhaustion move."

### Journal / Review Prompt
Whenever you complete a Gold practice session in the Lab, your journal entry must include the "Speed Factor." Ask yourself: "Did I make this decision because I saw a clear structural fact, or because the fast movement made me feel panicked?"

:::summary
High volatility is not a reason to move faster; it is a reason to slow down and be more clinical. Gold requires you to be an expert at identifying 'Noise' versus 'Intent.'
:::`,
      interactiveTaskType: "type_b_scenario",
      interactiveTaskData: {
        contextPrompt: "You are looking at the 5-minute Gold chart. The price just shot up 40 pips in one candle, but the candle has a very long wick on top and the overall trend is down. What is the best reading?",
        options: [
          { id: "opt1", text: "This is a bullish breakout! I should buy immediately to capture the momentum.", grade: "poor", feedback: "Chasing a high-volatility spike without context is an assumption.", rationale: "Spikes often represent 'liquidity testing' rather than a change in trend." },
          { id: "opt2", text: "This looks like a high-volatility spike (noise). Since it hasn't broken the overall downtrend structure, I will wait for price to settle.", grade: "best", feedback: "Correct. You are filtering the noise.", rationale: "Professional reading requires distinguishing between a momentary spike and structural displacement." }
        ]
      },
      skillLevel: "beginner", orderIndex: 10
    },
    {
      level: 0, moduleNumber: "0.11", title: "Crypto Is a 24/7 Fragmented Market",
      objective: "Understanding the unique structure of digital asset markets.",
      content: `# Crypto Is a 24/7 Fragmented Market

The Crypto roadway (Bitcoin, Ethereum, etc.) is the youngest and most "wild" market. Unlike Forex and Gold, which have established banking hours and central hubs, Crypto never sleeps and lives everywhere at once.

### 1. The 24/7/365 Reality
Crypto markets are open every second of every day. There is no "weekend close."
- **What this means:** Moves can happen at 2 AM on a Sunday when most traditional participants are asleep. This can lead to "Low Liquidity" periods where the price moves erratically because there aren't enough orders to keep it stable.

### 2. Market Fragmentation
If you buy a share of Apple, it is the same share everywhere. But if you trade Bitcoin, you are trading on a specific **Exchange** (like Binance, Coinbase, or Bybit). Each exchange has its own **Order Book**.

**Technical Terms: Exchange and Order Book**
1. **Exchange**: A digital platform or marketplace where people buy and sell crypto.
   *Simple Scenario:* Imagine three different farmers' markets in three different towns. They all sell the same type of apples, but the price might be $1.00 in one town and $1.05 in another. In crypto, these "towns" are the exchanges.
2. **Order Book**: The live list of buy and sell orders on a specific exchange.
   *Beginner Example:* It's like a transparent waitlist. You can see exactly how many people want to buy Bitcoin at $40,000 and how many want to sell at $40,100.

:::visual
title: Crypto 24/7 Environment
lookFor: ["Weekday Volume - Often aligned with Forex session times", "Weekend Noise - Lower volume, prone to sudden spikes", "Exchange Price Gaps - Tiny differences between Binance/Coinbase/etc", "Aggregated Feed - A chart that combines data from many exchanges"]
:::

### Why This Roadway Is Different
Because there is no central authority, Crypto is driven purely by **public reaction** and **large participant activity**. This creates a market that is highly sensitive to social media, news, and "hype cycles."

### Common Beginner Mistake: Weekend Chasing
Many beginners start practicing on Saturdays because they have free time. They see a big move on Bitcoin and think a new trend has started.
*Reality Check:* Weekend moves are often "Fake-outs." Because the major banks and institutions are closed, a single large participant can move the price easily. When Monday morning comes and the big money returns, the price often snaps back to where it was on Friday.

### Wrong Approach vs Better Approach
- **Wrong**: "Bitcoin is up 5% on a Sunday afternoon! The bull market is back!"
- **Better**: "I observe an upward move during a low-liquidity weekend window. I will wait for Monday's London open to see if this move is supported by high-volume participants."

:::summary
Crypto is a 24/7, fragmented marketplace. It requires you to be aware of the 'time of week' and to understand that the price on your screen is just one version of the truth from a specific exchange.
:::`,
      interactiveTaskType: "choice_block",
      interactiveTaskData: {
        question: "What is a major risk of forming a structural reading during the weekend in the crypto market?",
        options: [
          "The market is closed, so you cannot see any price data.",
          "Low liquidity means a single large participant can move the price easily, creating 'fake' moves.",
          "The exchanges charge higher fees on Saturdays.",
          "Bitcoin only moves on weekdays."
        ],
        correctIndex: 1
      },
      skillLevel: "beginner", orderIndex: 11
    },
    {
      level: 0, moduleNumber: "0.12", title: "Spot, Perpetuals, Funding, and Liquidation Pressure",
      objective: "Learning the mechanics of crypto-native market data.",
      content: `# Spot, Perpetuals, Funding, and Liquidation Pressure

To truly read a crypto chart, you need to understand that there are two different "versions" of the market running at the same time: the **Spot** market and the **Perpetuals** (Derivatives) market.

### 1. Spot vs. Perpetuals
- **Spot Market**: You buy the actual coin and own it.
  *Beginner Example*: Buying a physical gold bar and putting it in a safe.
- **Perpetuals (Perps)**: You are trading a contract that tracks the price of the coin. You don't own the coin; you are just "betting" on the price movement.
  *Simple Scenario*: A perpetual is like a bet that never expires. As long as you have enough money to cover your losses, you can keep the bet open forever.

### 2. Funding and Liquidation
Because "Perps" allow people to use high leverage (borrowed money), they introduce two unique forces:

**Technical Terms: Funding and Liquidation**
1. **Funding Rate**: A periodic payment between traders. If too many people are "Long" (betting price goes up), they have to pay the "Shorts" (betting price goes down) to keep the contract price aligned with the spot price.
   *What this means:* If funding is very high, it's a sign the market is "overheated" with too many people guessing the same thing.
2. **Liquidation**: When a trader's loss exceeds their available money, the exchange **forcibly closes** their position.
   *Simple Scenario:* If you bet $100 that Bitcoin will go up, but you use 10x leverage (acting as if you have $1,000), if the price drops just 10%, you lose your $100. The exchange "liquidates" you to prevent them from losing money.

:::visual
title: Crypto Market Mechanics
lookFor: ["Spot Volume - Actual buying/selling for ownership", "Open Interest - Total number of active perp contracts", "Funding Rate - Shows if the market is leaning too hard in one direction", "Liquidation Map - Areas where many traders will be forced to close"]
:::

### What to Observe: Liquidation Pressure (Supporting Context)
In crypto, price often moves toward areas where many people are about to be liquidated. This creates a "Liquidation Cascade."
*Think of it this way:* If 1,000 people are forced to sell at the same price, that massive wave of selling will push the price even lower, forcing even more people to sell.

### Wrong Approach vs Better Approach
- **Wrong**: "I'm buying Bitcoin because the chart looks green." (Ignoring market mechanics).
- **Better**: "I observe that the Funding Rate is extremely high and price is approaching a major structural low. This provides supporting context for a high risk of a 'Long Liquidation' event. I will wait for the potential cascade to finish before looking for a structural shift."

:::summary
Crypto is driven by the interaction between spot owners and perpetual speculators. Funding rates and liquidations are 'Supporting Context' that tell you when the market is emotionally over-extended.
:::`,
      interactiveTaskType: "type_b_scenario",
      interactiveTaskData: {
        contextPrompt: "The Funding Rate for Ethereum is highly positive (meaning 'Longs' are paying 'Shorts'). Price is slowly drifting down toward a cluster of support levels. How should you read this?",
        options: [
          { id: "opt1", text: "Since everyone is 'Long' and paying funding, I should also buy to join the crowd.", grade: "poor", feedback: "Joining an 'overheated' crowd is a recipe for being liquidated.", rationale: "High positive funding often precedes a move in the opposite direction." },
          { id: "opt2", text: "The high funding suggests the market is over-leveraged to the upside. I will watch for a sudden drop that might trigger a liquidation cascade.", grade: "best", feedback: "Correct. You are reading the 'Liquidation Pressure'.", rationale: "Professional crypto reading requires monitoring how leveraged participants are positioned." }
        ]
      },
      skillLevel: "beginner", orderIndex: 12
    },

    {
      level: 0, moduleNumber: "0.13", title: "How to Practice Without Guessing",
      objective: "Establishing the mindset and process for professional simulation.",
      content: `# How to Practice Without Guessing

Most beginners enter a "trading simulator" or "the Lab" with the goal of making a virtual profit. They want to see their account balance go up. This is a fundamental mistake. At Lurnava, simulation is not for proving you can make money; it is for **Practicing your Reasoning**.

### The Purpose of Simulation
In the real world, a pilot uses a flight simulator to practice what to do when an engine fails. They don't do it to "win" a game; they do it so that when the real event happens, their response is automatic and based on logic, not panic.

**What this means:**
Your goal in the Lab is to find a high-quality "Evidence Stack." If you make a decision and the market goes against you, but your reasoning was sound and based on objective facts, that is a **Successful Practice Session**. If you guess the direction and "win," but you had no logical reason, that is a **Failed Practice Session**.

### Technical Terms: Practice Action and Simulation
1. **Practice Action**: Any decision you make in the Lab (like marking a structural shift or simulating an entry).
   *Simple Scenario:* Before you click a button, you must be able to say: "I am taking this action because I observe evidence A, B, and C." If you can't say that, you are guessing.
2. **Simulation**: A controlled environment (The Lab) using historical data where you can practice without financial risk.

:::visual
title: The Professional Practice Checklist
lookFor: ["1. Observation - What is the current roadway and structure?", "2. Reason - What specific evidence supports a move?", "3. Review Condition - At what point is my logic proven wrong?", "4. Note - Have I documented this thinking in the Journal?"]
:::

### What to Observe: The "Unclear" State
The hardest thing to practice is **Doing Nothing**. If the chart looks like a mess of random wiggles and you can't find a clear range or structure, your "Practice Action" should be to mark it as **Unclear** and move to the next period.

**What this does not mean:**
"Practicing" does not mean clicking buttons as fast as possible. It means waiting for the market to provide a clear story.

### Common Beginner Mistake: Outcome Bias
Beginners judge themselves by the result of the trade. If they "win," they think they are geniuses. If they "lose," they think the market is rigged.
*Better Approach:* Judge yourself by the **Quality of your Logic**. Did you follow your structural rules? Did you ignore the "noise"?

### Wrong Approach vs Better Approach
- **Wrong**: "I think it's going up, so I'll click buy and hope for the best." (Gambling).
- **Better**: "I observe that price has broken a major swing high on the 1-hour chart and is now returning to a discount area. I will simulate an entry here with a review condition below the recent swing low." (Professional reasoning).

:::summary
Simulation is a tool for building cognitive discipline. Every action must have a reason, and every reason must be based on observable evidence. Success is measured by the consistency of your process, not the outcome of a single move.
:::`,
      interactiveTaskType: "type_b_scenario",
      interactiveTaskData: {
        contextPrompt: "You are practicing in the Lab. The market is moving sideways in a very choppy way. You haven't made a decision in 10 minutes and you are starting to feel bored. What is the most disciplined action?",
        options: [
          { id: "opt1", text: "Pick a direction and enter a small practice trade just to see what happens.", grade: "poor", feedback: "Boredom is not a reason to act. This is how 'noise' creates losses.", rationale: "Acting out of boredom is the opposite of objective market reading." },
          { id: "opt2", text: "Identify the market as 'Unclear,' document why it is messy in your journal, and wait for a clear structural breakout.", grade: "best", feedback: "Correct. Recognizing 'Unclear' is a high-level skill.", rationale: "Professional practice requires the discipline to stay inactive when evidence is missing." }
        ]
      },
      skillLevel: "beginner", orderIndex: 13
    },
    {
      level: 0, moduleNumber: "0.14", title: "How to Write a Useful Practice Note",
      objective: "Learning to document the learning process for maximum improvement.",
      content: `# How to Write a Useful Practice Note

In the Lurnava system, the **Journal** is your most powerful tool. However, a journal is only as good as the notes you put into it. Most beginners write notes that are useless for learning. They write things like "I bought here and I was right" or "I lost money on this one."

### The Note as a Mirror
A useful practice note is a record of your **Thinking Process** at the time you made the decision. It allows you to look back a week later and see exactly where your logic was strong and where it was weak.

**What this means:**
You are documenting the **Evidence Stack** you saw before the result happened. This prevents you from "rewriting history" in your mind after you see what the market did.

### Technical Terms: Journal Review and Review Condition
1. **Journal Review**: The act of looking back at your past notes to find patterns in your thinking.
   *Simple Example:* You might notice that every time you buy during a "noisy" Gold spike, you end up with a poor result. Without a note, you would forget this. With a note, you have a lesson.
2. **Review Condition**: A specific price level or event that tells you your original idea is no longer valid.
   *Simple Scenario:* "I am bullish as long as price stays above $1.1000. If it closes below that, I must re-audit the chart."

:::visual
title: Weak Note vs. Strong Note
lookFor: ["Weak: 'I think it's going up. Buying.' (No reason, no context)", "Strong: 'H4 Trend: Bullish. M15: Just broke a swing high. Evidence: 2. Entry at 1.1050. Review Condition: Close below 1.1010.'", "Weak: 'Lost the trade. Market is weird.'", "Strong: 'Result: Loss. Reason: I entered during a low-liquidity window (Asia). Lesson: Wait for London for better evidence.'"]
:::

### What Does Not Count
A "Diary" entry about how you feel ("I feel nervous about this trade") is not a structural practice note. While feelings are important, your primary focus must be on **Objective Facts**.

### Common Beginner Mistake: Vague Descriptions
Using words like "seems," "looks like," or "maybe" in your notes.
*Better Approach:* Use definitive structural terms. "Price **broke** the high," "Price **rejected** the level," "The range is **defined** by X and Y."

### Wrong Approach vs Better Approach
- **Wrong**: "Bought Bitcoin because it's cheap. Hope it goes to 100k." (Weak note).
- **Better**: "Roadway: Crypto. Context: Bullish HTF. Action: Simulated buy at 65k following a 15m structural shift. Evidence: High spot volume. Review Condition: Break of 64.2k swing low." (Strong note).

:::summary
Your journal is your personal data set. By writing detailed, structural notes, you turn every practice session into a repeatable lesson. Strong notes lead to strong skills.
:::`,
      interactiveTaskType: "choice_block",
      interactiveTaskData: {
        question: "Which of the following is the strongest example of a professional practice note?",
        options: [
          "I have a feeling this is a good buy, so I'm going in with a big position.",
          "Bought EUR/USD. The chart looks like a head and shoulders pattern from the book.",
          "Roadway: FX. Context: H4 Bullish. Evidence: 15m structural break + London Open volume. Review Condition: Close below 1.0850.",
          "I lost this trade but I'm sure it will work next time if I just wait longer."
        ],
        correctIndex: 2
      },
      skillLevel: "beginner", orderIndex: 14
    },
    {
      level: 0, moduleNumber: "0.15", title: "Level 0 Foundation Mission",
      objective: "Synthesizing all Level 0 concepts into a single workflow.",
      content: `# Level 0 Foundation Mission

You have reached the end of the **Market Reading Foundations**. You have learned that the market is a matching engine, that candles are records, and that structure is the skeleton of everything we do. You have also seen how different roadways (Forex, Gold, Crypto) have their own unique "personalities."

### The Lurnava Synthesis
Before you move on to Level 1, you must be able to combine these ideas into a single, disciplined process. This is the **Lurnava Workflow**:

1. **Identify the Roadway Context**: Are you in the 24/5 FX market (Relative Strength), the high-speed Gold market (Macro/Volatility), or the 24/7 Crypto market (Fragmentation/Perps)? Each requires a different level of patience.
2. **Map the Basic Structure**: Identify the most recent Swing High and Swing Low. Define the "Box" (Range) that price is currently playing in.
3. **Separate Evidence from Assumption**: List the objective facts. "Price is in a discount area" is Evidence. "Price will go up from here" is an Assumption.
4. **Choose the Review Area**: Identify the structural zone where the next meaningful interaction will happen. This is your observation point.
5. **Define the Review Condition**: At what point does your current reading become "Unclear"?

:::visual
title: Level 0 Foundation Map
lookFor: ["Market Reality - Orders and Liquidity", "Observation Tools - Candles, Timeframes, Structure", "Roadway Context - FX Sessions, Gold Volatility, Crypto Perps", "The Discipline Loop - Read, Practice, Review"]
:::

### Technical Term: Platform Controls
As you move into the next levels, you will start using the **Platform Controls** in the Lab more frequently. These include:
- **Period Forward**: Moving the chart one candle at a time to test your reading.
- **Structural Markups**: Tools to draw ranges and swings directly on the chart.
- **Journal Sync**: Automatically saving your chart markups into your practice notes.

### What Does Not Count
Passing Level 0 does not mean you are a "pro trader." It means you have built the **Foundations** to start learning the actual mechanics of Level 1. Do not rush to Level 2 or 3 until you feel 100% comfortable identifying a Range and a Swing.

### The Foundation Mission
In the upcoming mission, you will be given a series of static charts. Your job is not to "trade" them, but to **Classify** them using the workflow. You will be asked to identify the Roadway, the Current Range, and the strongest piece of Evidence.

### After the Mission: Your First Review Note
Once you complete the mission, your final task is to write a **Synthesis Note** in your Journal. Document:
- Which roadway felt most intuitive to you.
- One structural fact you identified correctly.
- One "Assumption" you caught yourself making during the process.

:::summary
Level 0 is about learning to see the market as it truly is: a structured environment driven by data and human interaction. You now have the language and the mindset to begin your professional journey.
:::`,
      interactiveTaskType: "scenario_link",
      interactiveTaskData: {
        scenarioSlug: "level-0-foundation-review-mission",
        missionTitle: "Level 0 Foundation Mission",
        passThreshold: 80
      },
      skillLevel: "beginner", orderIndex: 15
    },

    // ============================================
    // LEVEL 1: MARKET BASICS (15 MODULES)
    // ============================================
    {
      level: 1, moduleNumber: "1.1", title: "Purpose of Financial Markets",
      objective: "Understand the historical role of value exchange.",
      content: "# The Purpose of Markets\n\nFinancial markets exist to facilitate the exchange of capital and value. Understanding this is the first step to thinking like a professional participant.",
      forexAdaptation: "## Fiat Reserve System\nCentral Banks manage currency valuation to maintain exchange balance. We observe the 'Yield Differential'.",
      cryptoAdaptation: "## Web3 Economy\nCrypto exists to remove the middleman. We observe the 'On-Chain Inflow' metrics.",
      goldAdaptation: "## Hard Money Heritage\nGold is the only asset with zero counterparty exposure. We observe it as the 'Inflation Compass'.",
      interactiveTaskType: "type_b_scenario",
      interactiveTaskData: {
        contextPrompt: "A Central Bank announces an unexpected 50bps rate hike. The currency pair immediately rallies 100 pips. Why did this happen in the context of global capital?",
        options: [
          { id: "opt1", text: "Global capital is seeking the higher yield available in this currency.", grade: "best", feedback: "Correct. Capital flows toward yield.", rationale: "The Yield Differential is a powerful macro driver." },
          { id: "opt2", text: "Participants are excited and buying the news.", grade: "poor", feedback: "Emotional excitement doesn't move trillions. Yield differentials do.", rationale: "Retail sentiment is a symptom, not the cause." }
        ]
      },
      logicIds: ["MAC_001"],
      skillLevel: "beginner", orderIndex: 1
    },
    {
      level: 1, moduleNumber: "1.2", title: "The Zero-Sum Fallacy",
      objective: "Deconstruct the myth of retail vs. primary participant 'performance'.",
      content: "# Zero-Sum vs Value Transfer\n\nYou are not playing against a chart; you are playing against matching algorithms.",
      skillLevel: "beginner", orderIndex: 2
    },
    {
      level: 1, moduleNumber: "1.3", title: "The Probability Matrix",
      objective: "Thinking in probabilities. The Casino Analogy.",
      content: "# The Probability Matrix\n\nLike a casino, we have a small edge. We don't care about a single unfavorable outcome; we care about the result over a large sample.",
      interactiveTaskType: "coin_flip_simulator",
      skillLevel: "beginner", orderIndex: 3
    },
    {
      level: 1, moduleNumber: "1.4", title: "Supply & Demand Fundamentals",
      objective: "Basic economics of value and scarcity.",
      content: "# Supply & Demand\n\nThe fundamental truth of value. If something is rare and desired, price rises.",
      skillLevel: "beginner", orderIndex: 4
    },
    {
      level: 1, moduleNumber: "1.5", title: "Inflation Mechanics",
      objective: "How fiat debasement drives asset pricing.",
      content: "# Inflation\n\nWhen the supply of currency expands, the purchasing power of each unit declines.",
      skillLevel: "beginner", orderIndex: 5
    },
    {
      level: 1, moduleNumber: "1.6", title: "Central Banking Basics",
      objective: "The role of the Fed, ECB, and BOJ.",
      content: "# Central Banking\n\nThe ultimate controllers of capital supply.",
      skillLevel: "beginner", orderIndex: 6
    },
    {
      level: 1, moduleNumber: "1.7", title: "Macro Interconnectivity",
      objective: "How Bonds, Stocks, and Currencies correlate.",
      content: "# Macro Interconnectivity\n\nEverything is connected. When bond yields rise, it impacts currency valuation.",
      interactiveTaskType: "macro_rags_to_riches",
      skillLevel: "beginner", orderIndex: 7
    },
    {
      level: 1, moduleNumber: "1.8", title: "Economic Indicators",
      objective: "Interest rates, CPI, and employment data.",
      content: "# Economic Indicators\n\nData points that participants use to gauge the health of an economy.",
      skillLevel: "beginner", orderIndex: 8
    },
    {
      level: 1, moduleNumber: "1.9", title: "The History of Currency",
      objective: "From Gold Standard to Fiat.",
      content: "# History of Money\n\nUnderstanding the transition to digital, borderless capital.",
      skillLevel: "beginner", orderIndex: 9
    },
    {
      level: 1, moduleNumber: "1.10", title: "The Auction Process",
      objective: "How orders are matched in real-time.",
      content: "# The Auction\n\nMarkets are continuous auctions matching buyers and sellers.",
      skillLevel: "beginner", orderIndex: 10
    },
    {
      level: 1, moduleNumber: "1.11", title: "Exposure Management: Part 1",
      objective: "The R-Multiple and Asymmetry.",
      content: "# Exposure Management\n\nProtecting capital is the first priority.",
      interactiveTaskType: "choice_block",
      interactiveTaskData: {
        question: "If you have a 1:3 planned exposure / possible outcome ratio, how many unfavorable outcomes can one favorable outcome cover?",
        options: ["One", "Two", "Three", "Zero"],
        correctIndex: 2
      },
      skillLevel: "beginner", orderIndex: 11
    },
    {
      level: 1, moduleNumber: "1.12", title: "Psychology of Uncertainty",
      objective: "Unfavorable outcome aversion and the gambler's fallacy.",
      content: "# Psychology\n\nThe human brain is not wired for probabilistic thinking.",
      skillLevel: "beginner", orderIndex: 12
    },
    {
      level: 1, moduleNumber: "1.13", title: "Result Expectations",
      objective: "The mathematical matrix of outcomes.",
      content: "# Outcome Mapping\n\nA participant with a 35% favorable rate can be highly successful.",
      skillLevel: "beginner", orderIndex: 13
    },
    {
      level: 1, moduleNumber: "1.14", title: "Asset Classes",
      objective: "Forex vs. Crypto vs. Commodities.",
      content: "# Asset Classes\n\nChoosing the right environment for your skills.",
      interactiveTaskType: "type_b_scenario",
      interactiveTaskData: {
        contextPrompt: "You are reviewing a high-volatility environment in BTC/USD. Why is the structural reading different from EUR/USD?",
        options: [
          { id: "opt1", text: "Crypto markets are thinner and more prone to rapid delivery gaps.", grade: "best", feedback: "Correct.", rationale: "Capital profiles vary by asset class." },
          { id: "opt2", text: "Charts work differently in Crypto.", grade: "poor", feedback: "Charts are just a reflection of participation.", rationale: "Logic is consistent, but delivery speed varies." }
        ]
      },
      skillLevel: "beginner", orderIndex: 14
    },
    {
      level: 1, moduleNumber: "1.15", title: "Final Level Review",
      objective: "Consolidating foundations.",
      content: "# Review\n\nYou are ready for the Level 1 Knowledge Test.",
      skillLevel: "beginner", orderIndex: 15
    },

    // ============================================
    // LEVEL 2: MARKET MECHANICS (15 MODULES)
    // ============================================
    {
      level: 2, moduleNumber: "2.1", title: "Chart Basics",
      objective: "Candlestick anatomy and timeframes.",
      content: "# The Chart\n\nA visual record of price and time.",
      skillLevel: "beginner", orderIndex: 1
    },
    {
      level: 2, moduleNumber: "2.2", title: "Fractal Nature of Price",
      objective: "Structure within structure.",
      content: "# Fractals\n\nPrice action mirrors itself across scales.",
      interactiveTaskType: "type_a_point_click",
      skillLevel: "beginner", orderIndex: 2
    },
    {
      level: 2, moduleNumber: "2.3", title: "Primary Price Feeds",
      objective: "Difference between B-Book and Direct feeds.",
      content: "# Primary vs Retail feeds.",
      skillLevel: "beginner", orderIndex: 3
    },
    {
      level: 2, moduleNumber: "2.4", title: "The Range Model",
      objective: "Equilibrium, Premium, and Discount.",
      content: "# Range Modeling\n\nIdentifying the midpoint of price delivery.",
      skillLevel: "beginner", orderIndex: 4
    },
    {
      level: 2, moduleNumber: "2.5", title: "Market Structure: Part 1",
      objective: "Identifying Primary Swings.",
      content: "# Market Structure\n\nDefining the major anchors of a directional move.",
      skillLevel: "beginner", orderIndex: 5
    },
    {
      level: 2, moduleNumber: "2.6", title: "Market Structure Shift (MSS)",
      objective: "Identifying the structural reading change.",
      content: "# Market Structure Shift (MSS)\n\nThe moment price displacement violates a major anchor.",
      interactiveTaskType: "type_a_point_click",
      skillLevel: "beginner", orderIndex: 6
    },
    {
      level: 2, moduleNumber: "2.7", title: "The Trend Fallacy",
      objective: "Why 'trend' is an unhelpful expectation.",
      content: "# The 'Trend' Fallacy\n\nLarge participants move between boundary areas.",
      skillLevel: "beginner", orderIndex: 7
    },
    {
      level: 2, moduleNumber: "2.8", title: "Internal vs External Structure",
      objective: "Noise vs. Major anchors.",
      content: "# Structural Layers\n\nFiltering lower-timeframe noise from higher-timeframe context.",
      skillLevel: "beginner", orderIndex: 8
    },
    {
      level: 2, moduleNumber: "2.9", title: "Displacement",
      objective: "Aggressive price movement.",
      content: "# Displacement\n\nClear, violent moves that indicate commitment.",
      skillLevel: "beginner", orderIndex: 9
    },
    {
      level: 2, moduleNumber: "2.10", title: "Breakouts vs Failed Breaks",
      objective: "Validation of boundaries.",
      content: "# Breakouts\n\nWhen price holds beyond a previous boundary.",
      interactiveTaskType: "type_a_point_click",
      skillLevel: "beginner", orderIndex: 10
    },
    {
      level: 2, moduleNumber: "2.11", title: "Boundary Areas (BSL/SSL)",
      objective: "Identifying resting orders.",
      content: "# Boundaries\n\nAreas where orders cluster beyond old highs and lows.",
      skillLevel: "beginner", orderIndex: 11
    },
    {
      level: 2, moduleNumber: "2.12", title: "External Range Boundary",
      objective: "Practice identifying range extremes.",
      content: "# External Boundaries\n\nLaunching the Chart Map Mission.",
      interactiveTaskType: "scenario_link",
      interactiveTaskData: { scenarioSlug: "m2-level-2-map-review-v1" },
      skillLevel: "beginner", orderIndex: 12
    },
    {
      level: 2, moduleNumber: "2.13", title: "HTF Anchors",
      objective: "Daily and Weekly levels.",
      content: "# HTF Anchors\n\nThe maps used by larger participants.",
      skillLevel: "beginner", orderIndex: 13
    },
    {
      level: 2, moduleNumber: "2.14", title: "Session Windows",
      objective: "London and NY participation windows.",
      content: "# Session Windows\n\nWhen the auction is most active.",
      skillLevel: "beginner", orderIndex: 14
    },
    {
      level: 2, moduleNumber: "2.15", title: "Level 2 Review",
      objective: "Consolidating mechanics.",
      content: "# Review\n\nYou are ready for the Level 2 Knowledge Test.",
      skillLevel: "beginner", orderIndex: 15
    },

    // ============================================
    // LEVEL 3: STRUCTURE & IMBALANCE (15 MODULES)
    // ============================================
    {
      level: 3, moduleNumber: "3.1", title: "Order Blocks",
      objective: "Identify where strong moves are initiated.",
      content: "# Order Blocks\n\nThe last candle before a structural shift.",
      skillLevel: "intermediate", orderIndex: 1
    },
    {
      level: 3, moduleNumber: "3.2", title: "Fair Value Gaps (FVG)",
      objective: "Price delivery imbalances.",
      content: "# Fair Value Gaps\n\nRapid delivery that leaves gaps in matching.",
      skillLevel: "intermediate", orderIndex: 2
    },
    {
      level: 3, moduleNumber: "3.3", title: "Breaker Blocks",
      objective: "Failed order blocks flipping polarity.",
      content: "# Breakers\n\nViolation of an OB that subsequently acts as an anchor.",
      skillLevel: "intermediate", orderIndex: 3
    },
    {
      level: 3, moduleNumber: "3.4", title: "Mitigation Blocks",
      objective: "Hedge clearing without boundary sweeps.",
      content: "# Mitigation\n\nNeutralizing previous exposure.",
      interactiveTaskType: "type_a_point_click",
      skillLevel: "intermediate", orderIndex: 4
    },
    {
      level: 3, moduleNumber: "3.5", title: "Inversion FVG",
      objective: "Inefficiency flipping polarity.",
      content: "# Inversion\n\nA shift in Primary structural reading.",
      skillLevel: "intermediate", orderIndex: 5
    },
    {
      level: 3, moduleNumber: "3.6", title: "Exchange Voids",
      objective: "Explosive moves and the vacuum effect.",
      content: "# Voids\n\nGaps in price where exchange did not occur.",
      skillLevel: "intermediate", orderIndex: 6
    },
    {
      level: 3, moduleNumber: "3.7", title: "Volume Imbalances",
      objective: "Identifying commitment via volume.",
      content: "# Volume Imbalances\n\nWhen candle bodies do not overlap.",
      skillLevel: "intermediate", orderIndex: 7
    },
    {
      level: 3, moduleNumber: "3.8", title: "Propulsion Blocks",
      objective: "Retest of an order block.",
      content: "# Propulsion\n\nAcceleration of price from a validated OB.",
      interactiveTaskType: "type_a_point_click",
      skillLevel: "intermediate", orderIndex: 8
    },
    {
      level: 3, moduleNumber: "3.9", title: "Footprint Basics",
      objective: "Order flow and Tape Reading.",
      content: "# Footprints\n\nObserving real-time exchange data.",
      interactiveTaskType: "tape_reading_basics",
      skillLevel: "intermediate", orderIndex: 9
    },
    {
      level: 3, moduleNumber: "3.10", title: "Level 3 Final Gate",
      objective: "Final structural assessment.",
      content: "# Final Gate\n\nComplete the mission to unlock Level 4.",
      interactiveTaskType: "scenario_link",
      skillLevel: "intermediate", orderIndex: 10
    },

    // ============================================
    // LEVEL 4: STRUCTURE MAPPING (REDACTED FOR MVP)
    // ============================================
    {
      level: 4, moduleNumber: "4.1", title: "Advanced Structure",
      objective: "Higher timeframe context.",
      content: "# HTF Structure\n\nMapping the primary map.",
      skillLevel: "advanced", orderIndex: 1
    },

    // ============================================
    // LEVEL 5: EVIDENCE-BASED SCENARIO PLANNING (10 MODULES)
    // ============================================
    {
      level: 5, moduleNumber: "5.1", title: "Evidence Stack Framework",
      objective: "Transition from identifying isolated components to building a unified, weighted reading of the market environment.",
      content: `# 5.1 — Evidence Stack Framework

:::skill-target
Master the ability to unify isolated structural clues into a single, weighted Evidence Stack.
:::

### The Shift to Professional Synthesis
In previous levels, you learned how to find individual tools: a Market Structure Shift, a Fair Value Gap, or an Order Block. However, in simulation, these tools often provide conflicting signals. A professional participant does not react to a single clue; they build an **Evidence Stack**.

:::visual
title: The Evidence Ladder
image: /images/academy/level5/5.1_stack.png
caption: Layering high-probability clues to find the path of highest structural alignment.
lookFor: ["HTF Directional Narrative", "Intermediate MSS Quality", "Price Delivery (FVG/OB)", "Session Liquidity Context"]
:::

### What Counts as Evidence?
Not all clues are weighted equally. The "Stack" follows a hierarchy of significance:
1. **The Anchor**: High-Timeframe structure (Daily/4H).
2. **The Catalyst**: A clear Market Structure Shift with displacement.
3. **The Vehicle**: The specific entry array (FVG, Order Block) being respected.
4. **The Timing**: Interaction occurring during a high-volume session window.

:::decision-rule
If your stack contains less than three layers of alignment, the environment is considered "Low Certainty." The professional decision is to observe, not participate.
:::

### The "Conflict" Filter
When you find a Bullish FVG but the Daily structure is Bearish, you have **Structural Conflict**. In Level 5, we do not "guess" which will win. We identify the conflict, document it in the journal, and wait for one side to be invalidated.

:::trap
**The Single-Clue Fallacy**: Assuming a "Perfect FVG" will hold even when the HTF Evidence Stack is pointing in the opposite direction.
:::

### Journal Review Prompt
After your simulation session, review your evidence stack and ask: 'Did I record conflicting evidence, or did I only collect clues that supported my initial impression?' If you only recorded supporting evidence, flag this session for bias review.`,
      interactiveTaskType: "choice_block",
      interactiveTaskData: {
        question: "A learner identifies a bearish MSS on the Daily chart and a bullish Order Block on the 4-hour chart. How should these be handled in the Evidence Stack?",
        options: [
          { id: "A", text: "Ignore the Order Block because the Daily MSS is more important.", isCorrect: false, feedback: "Incorrect. The stack must account for all relevant structural clues, even conflicting ones." },
          { id: "B", text: "Record both observations in the stack — the MSS as a supporting clue and the OB as a conflicting clue.", isCorrect: true, feedback: "Correct. A complete evidence stack includes both supporting and conflicting structural observations across timeframes." },
          { id: "C", text: "Wait until one of them disappears before building the stack.", isCorrect: false, feedback: "Waiting removes the ability to plan for alternative outcomes during the session." },
          { id: "D", text: "Choose whichever clue appeared most recently.", isCorrect: false, feedback: "Recency is not a weighting factor in a disciplined evidence stack." }
        ]
      },
      skillLevel: "advanced", orderIndex: 1
    },
    {
      level: 5, moduleNumber: "5.2", title: "Primary vs Alternative Scenario",
      objective: "Build two-way branching logic to maintain objectivity and prevent narrative lock.",
      content: `# 5.2 — Primary vs Alternative Scenario

:::skill-target
Develop the discipline to 'branch' your thinking by preparing for both your expected outcome and its logical invalidation.
:::

### Thinking in Branches
A "Scenario" is not a prediction. It is a logical "If/Then" statement. If you only have one plan, you are emotionally committed to a single outcome. A professional participant always carries two: the **Primary Scenario** and the **Alternative Scenario**.

:::visual
title: Branching Logic Map
image: /images/academy/level5/5.2_branching.png
caption: Preparing for market delivery in both directions to remain objective during the session.
lookFor: ["Primary Execution Logic", "Invalidation Trigger Point", "Alternative Narrative Pivot", "Neutral Observation Criteria"]
:::

### The Primary Scenario (The 'A' Plan)
This is the path with the most Evidence Stack alignment.
*   **Trigger**: Price interacts with a specific array (e.g., 1H FVG).
*   **Behavior**: Price shows immediate displacement in the narrative direction.
*   **Objective**: Price reaches the identified liquidity pool.

:::decision-rule
Before every session, you must be able to state: "If price closes below [Level X], my Primary Bullish Scenario is dead, and I will pivot to Neutral or Bearish."
:::

### The Alternative Scenario (The 'B' Plan)
This is what happens if your Primary Scenario is **invalidated**.
*   **Trigger**: Price closes through your invalidation anchor.
*   **New Logic**: The rejection of your plan confirms a move in the opposite direction or a transition to a "Sideways/Unclear" state.

:::visual-compare
title: Scenario Bias Check
caption: Compare how you feel when price reaches your area vs. how you should react.
leftImage: /images/academy/level5/5.2_branching.png
leftLabel: OBJECTIVE BRANCHING
rightImage: /images/academy/level5/5.2_lock.png
rightLabel: NARRATIVE LOCK (TRAP)
:::

:::trap
**Narrative Lock**: Entering a session so convinced that price 'must' go up that you ignore the structural clues telling you the Alternative Scenario is currently active.
:::`,
      interactiveTaskType: "type_b_scenario",
      interactiveTaskData: {
        contextPrompt: "You have built an evidence stack supporting a bearish scenario from a 1H FVG at 1.0965. The Daily MSS is bearish. You need to define your Alternative Scenario. Which of the following is the strongest alternative?",
        options: [
          { id: "opt1", text: "If price closes above the FVG at 1.0975 with a displacement candle creating a new bullish delivery gap, the bearish reading is no longer valid and the 1H structure may be shifting.", grade: "best", feedback: "Correct. This alternative is specific, structurally anchored, and defines the exact condition that invalidates the primary.", rationale: "Alternatives must be concrete — tied to a level, a candle behavior, and a structural consequence." },
          { id: "opt2", text: "If price goes up instead of down, I will reconsider my reading.", grade: "poor", feedback: "This is too vague to be an alternative scenario. It has no structural anchor or specific condition.", rationale: "Vague alternatives provide no decision framework and are functionally useless." },
          { id: "opt3", text: "I do not need an alternative because the Daily MSS is very clear.", grade: "poor", feedback: "Even the strongest readings require an alternative. No structural event is certain.", rationale: "Refusing to define an alternative is the definition of narrative lock." }
        ]
      },
      skillLevel: "advanced", orderIndex: 2
    },
    {
      level: 5, moduleNumber: "5.3", title: "Invalidation and Review Conditions",
      objective: "Define the exact structural conditions under which a scenario is no longer valid.",
      content: `# 5.3 — Invalidation and Review Conditions

:::skill-target
Learn to identify the exact structural point where a scenario 'dies' and requires an immediate audit.
:::

### The 'Kill-Switch' for Logic
Every Evidence Stack has a foundation. If that foundation is broken, the entire stack collapses. We call this the **Invalidation Anchor**. Without an invalidation point, you are not planning; you are guessing.

:::visual
title: Invalidation Anchor Visual
image: /images/academy/level5/5.3_invalidation.png
caption: Identifying the specific swing level that protects your structural narrative.
lookFor: ["Protected Swing High/Low", "Price Displacement Point", "Validation of MSS", "Point of No Return"]
:::

### Two Types of Invalidation
1.  **Structure-Based Invalidation**: A specific structural anchor is violated with displacement. For example, if your bullish scenario is built on the premise that a certain swing low holds, then a candle body closing below that swing low with a delivery gap is a structure-based invalidation.
2.  **Time-Based Invalidation**: The scenario has a time window. If the expected structural interaction does not occur within the defined session window, the scenario is marked 'Expired'.

:::decision-rule
If price reaches your Invalidation Anchor, the session logic is VOID. Do not re-enter based on the old plan. You must perform a full Review Audit before forming a new scenario.
:::

:::trap
**Anchor-Dragging**: Moving your invalidation point further away because you 'feel' price is just doing a deeper retracement. This is the fastest way to lose discipline.
:::`,
      interactiveTaskType: "type_a_point_click",
      interactiveTaskData: {
        prompt: "Identify the structural anchor that would serve as the logical invalidation point for a bullish scenario built from the recent Fair Value Gap. Look for the swing low that anchored the expansion.",
        chartData: [
          { time: '2024-01-10', open: 1.0810, high: 1.0840, low: 1.0805, close: 1.0835 },
          { time: '2024-01-11', open: 1.0835, high: 1.0860, low: 1.0830, close: 1.0855 },
          { time: '2024-01-12', open: 1.0855, high: 1.0880, low: 1.0850, close: 1.0870 },
          { time: '2024-01-15', open: 1.0870, high: 1.0875, low: 1.0825, close: 1.0830 },
          { time: '2024-01-16', open: 1.0830, high: 1.0850, low: 1.0815, close: 1.0840 },
          { time: '2024-01-17', open: 1.0840, high: 1.0890, low: 1.0835, close: 1.0885 }
        ],
        validationZones: {
          primary: [{ time: "2024-01-15", priceMin: 1.0820, priceMax: 1.0840 }]
        },
        hints: {
          light: "Look for the lowest point of the retracement before the final upward move.",
          guided: "Identify the candle on 2024-01-15 near the 1.0830 level."
        },
        rationale: "The swing low that anchored the bullish expansion is the structural foundation of the scenario. If this level is violated with displacement, the bullish reading is no longer valid."
      },
      skillLevel: "advanced", orderIndex: 3
    },
    {
      level: 5, moduleNumber: "5.4", title: "Context Alignment Across Timeframes",
      objective: "Synthesize HTF narrative with LTF structural evidence to build aligned scenario plans.",
      content: `# 5.4 — Context Alignment Across Timeframes

:::skill-target
Standardize how you 'zoom out' to find the Anchor and 'zoom in' to find the Catalyst.
:::

### The Multi-Timeframe Filter
In Level 5, we stop looking at charts as isolated patterns. Every 15-minute candle is a tiny fragment of a 4-hour story. **Context Alignment** is the process of ensuring your small-scale plan is supported by the large-scale environment.

:::visual
title: Timeframe Alignment Flow
image: /images/academy/level5/5.4_alignment.png
caption: How directional narrative flows from higher timeframes into execution timeframes.
lookFor: ["Weekly/Daily Narrative Anchor", "4H/1H Structural Phase", "15m/5m Execution Catalyst", "Alignment vs Divergence"]
:::

### The Roles
*   **High Timeframe (HTF - Daily/Weekly)**: Defines the **Narrative**. Are we in a retracement or an expansion?
*   **Medium Timeframe (MTF - 4H/1H)**: Defines the **Scenario Area**. Where should we look for a reaction?
*   **Low Timeframe (LTF - 15m/5m/1m)**: Defines the **Catalyst**. Is the reaction actually happening?

:::decision-rule
Never take an LTF Catalyst that is trading directly *into* an HTF Invalidation zone. The HTF always has more weight in the Evidence Stack.
:::

:::trap
**The Zoom-In Bias**: Spending 90% of your time on the 1-minute chart and losing track of the 4-hour supply zone you are currently trapped inside.
:::`,
      interactiveTaskType: "type_b_scenario",
      interactiveTaskData: {
        contextPrompt: "The Daily chart has completed a bearish MSS. On the 1-hour chart, price is retracing upward but has not created a bullish MSS — the retracement is a slow grind with no displacement. What is the most aligned reading?",
        options: [
          { id: "opt1", text: "The 1H retracement has no structural shift (no MSS, no displacement). The Daily bearish narrative remains the primary context. I will observe the retracement for signs of failure at a bearish anchor.", grade: "best", feedback: "Correct. The absence of an LTF structural shift means the HTF narrative is still dominant.", rationale: "Slow retracements without displacement are internal noise until a structural shift occurs." },
          { id: "opt2", text: "The 1H is moving upward, so the bearish Daily narrative may be changing. I will build a bullish scenario from the 1H move.", grade: "poor", feedback: "This is a counter-narrative reading built on price movement alone, not structural evidence.", rationale: "Directional movement without structural shift (MSS/FVG) is not evidence of narrative change." }
        ]
      },
      skillLevel: "advanced", orderIndex: 4
    },
    {
      level: 5, moduleNumber: "5.5", title: "Structural Conflict and Unclear Areas",
      objective: "Identify when the evidence stack is too conflicted to form a valid scenario plan.",
      content: `# 5.5 — Structural Conflict and Unclear Areas

:::skill-target
Learn to identify the 'No-Scenario Reading' — when the market is too messy to plan a high-probability path.
:::

### The Value of 'I Don't Know'
One of the most expensive habits in trading is the belief that every chart must have a scenario. A professional participant's most powerful tool is the ability to say: **"This structure is conflicted; I will wait."**

:::visual
title: Clear vs Conflicted Structure
image: /images/academy/level5/5.5_conflict.png
caption: Identifying when the Evidence Stack is too fragmented to support a disciplined plan.
lookFor: ["Clean Trending Expansion", "Opposing MSS Shifts", "Overlapping FVG Zones", "Consolidation Range Highs/Lows"]
:::

### Signs of Structural Conflict
- **Opposing MSS on adjacent timeframes**: The Daily has a bullish MSS, but the 4H has just completed a bearish MSS.
- **Consolidation without boundary interaction**: Price is ranging within a narrow zone.
- **Mixed displacement quality**: The most recent move had strong displacement in one direction, but it occurred entirely within a larger opposing structure.

:::decision-rule
If you cannot identify a Primary Scenario with at least 70% confidence based on the Evidence Stack, the chart is **Unclear**. Your scenario for the session is "Observe only."
:::

:::trap
**Over-Searching**: If you have to squint or change timeframes 5 times to 'find' a reason to enter, the setup doesn't exist. High-probability scenarios are usually obvious.
:::`,
      interactiveTaskType: "choice_block",
      interactiveTaskData: {
        question: "The Daily chart has a bullish MSS. The 4-hour chart has just completed a bearish MSS. The 1-hour chart is consolidating with no boundary interaction. What is the correct reading?",
        options: [
          { id: "A", text: "Build a bullish scenario because the Daily timeframe has more authority.", isCorrect: false, feedback: "HTF authority does not negate MTF structural shifts. This is conflict, not clarity." },
          { id: "B", text: "Build a bearish scenario because the 4-hour MSS is more recent.", isCorrect: false, feedback: "Recency does not resolve timeframe conflict." },
          { id: "C", text: "Record 'No Scenario — Structural Conflict' and wait for one MSS to be invalidated before building a plan.", isCorrect: true, feedback: "Correct. When adjacent timeframes have opposing MSS events with no resolution, the chart is structurally unclear." },
          { id: "D", text: "Build both a bullish and bearish scenario simultaneously and observe which one plays out.", isCorrect: false, feedback: "Building two opposing plans on the same timeframe in a conflicted environment leads to over-trading." }
        ]
      },
      skillLevel: "advanced", orderIndex: 5
    },
    {
      level: 5, moduleNumber: "5.6", title: "Confirmation vs Assumption",
      objective: "Distinguish between acting on structural evidence and acting before the chart provides observable proof.",
      content: `# 5.6 — Confirmation vs Assumption

:::skill-target
Differentiate between 'Predicting what price will do' and 'Responding to what price has done'.
:::

### The Reactivity Principle
Level 5 teaches you to be a **Reactive Observer**, not a Predictor. An **Assumption** is taking a trade because price reached a level. **Confirmation** is taking a trade because price reached a level AND showed a structural shift.

:::visual-compare
title: Assumption vs Confirmation
caption: The visual difference between 'Hoping' a level holds and 'Verifying' it holds.
leftImage: /images/academy/level5/5.6_confirmation.png
leftLabel: CONFIRMATION (REACTION)
rightImage: /images/academy/level5/5.6_confirmation.png
rightLabel: ASSUMPTION (PREDICTION)
:::

:::decision-rule
Confirmation usually requires a lower-timeframe shift (e.g., 5m or 1m) occurring *inside* a higher-timeframe area (e.g., 1H or 4H).
:::

### The Risk of Assumption
When you assume, you are betting that the "Anchor" will hold before any "Catalyst" appears. If the anchor fails, you take a full loss.
*   **Assumption**: "I'm buying here because it's a 4H FVG."
*   **Confirmation**: "I'm buying here because price hit the 4H FVG and then printed a 5m Bullish MSS."

:::trap
**Bottom Fishing**: Trying to catch the exact low of a retracement before any MSS occurs. This is an assumption that usually leads to being 'run over' by the trend.
:::`,
      interactiveTaskType: "type_b_scenario",
      interactiveTaskData: {
        contextPrompt: "You have identified a bullish Order Block at 1.0940 from the 4-hour chart. Price is currently at 1.0955, moving downward toward the OB. You want to build a bullish scenario. What is the correct approach?",
        options: [
          { id: "opt1", text: "Wait for price to reach the OB. If a 1-minute MSS occurs with displacement at or near 1.0940, build the scenario from the confirmed reaction.", grade: "best", feedback: "Correct. Confirmation requires waiting for structural evidence at the area.", rationale: "Scenarios built on delivered evidence produce better journal review data and reduce emotional attachment." },
          { id: "opt2", text: "Build the bullish scenario now because the OB is very clear and price is almost there.", grade: "poor", feedback: "This is assumption-based planning. The OB has not yet produced any structural reaction.", rationale: "Identifying a zone is not the same as confirming a reaction." }
        ]
      },
      skillLevel: "advanced", orderIndex: 6
    },
    {
      level: 5, moduleNumber: "5.7", title: "Scenario Review Under Pressure",
      objective: "Adapt scenario plans systematically as new structural evidence arrives during simulation.",
      content: `# 5.7 — Scenario Review Under Pressure

:::skill-target
Maintain objectivity when price action moves faster than your emotional processing.
:::

### The Fog of War
In a live simulation session, price action can be chaotic. Your brain will naturally try to ignore clues that contradict your bias. **Real-Time Review** is the practice of stepping back every 5–15 minutes to re-evaluate your Evidence Stack.

:::visual
title: Scenario Review Timeline
image: /images/academy/level5/5.7_timeline.png
caption: A step-by-step workflow for auditing your plan as new candles print.
lookFor: ["Planned Interaction Area", "Real-Time Structural Reaction", "Validity Check", "Decision Confirmation/Pivot"]
:::

### The 3-Step Mid-Session Audit
1.  **Check the Anchor**: Is the HTF narrative still valid, or did DXY just have a major shift?
2.  **Check the Invalidation**: Is price closer to my profit target or my Invalidation Anchor?
3.  **Check the Quality**: Is the displacement strong, or is this "lazy" price action?

:::decision-rule
If at any point during the session you feel "Confused" or "Anxious," your scenario is officially **Broken**. The only professional move is to exit or go neutral until clarity returns.
:::

:::trap
**Hope-Based Holding**: Staying in a plan because you 'need' the win, even though the structural clues (like a counter-MSS) have already invalidated your logic.
:::`,
      interactiveTaskType: "type_b_scenario",
      interactiveTaskData: {
        contextPrompt: "Your bullish scenario is confirmed from a 1H Order Block. On the 1-minute chart, price made a new high but immediately displaced downward, creating a bearish FVG that violates your confirmation zone. The swing low of your MSS at 1.0938 has NOT been violated yet. What do you do?",
        options: [
          { id: "opt1", text: "The bearish FVG through my confirmation zone is a structural warning. I note the warning in my journal and watch for the swing low violation.", grade: "best", feedback: "Correct. This is a measured response at a structural checkpoint.", rationale: "Adaptation requires distinguishing between warning signs and full invalidation." },
          { id: "opt2", text: "The high was broken so the bullish scenario is working. I ignore the bearish FVG.", grade: "poor", feedback: "A new high followed by immediate bearish displacement is a classic boundary sweep pattern.", rationale: "New highs without sustain, followed by displacement, are structural warnings." }
        ]
      },
      skillLevel: "advanced", orderIndex: 7
    },
    {
      level: 5, moduleNumber: "5.8", title: "Intermarket Context as Supporting Evidence",
      objective: "Use DXY and cross-asset correlation as secondary supporting context in scenario planning.",
      content: `# 5.8 — Intermarket Context as Supporting Evidence

:::skill-target
Use the Dollar Index (DXY) as a 'Truth Filter' for your currency scenarios.
:::

### The Inverse Mirror
For Forex participants, the Dollar Index (DXY) is the "Global Anchor." If you are planning a Bullish Scenario on EUR/USD, you MUST see a Bearish Evidence Stack on DXY. If they are both moving in the same direction, you have **Intermarket Conflict**.

:::visual
title: Intermarket Correlation Visual
image: /images/academy/level5/5.8_intermarket.png
caption: Using DXY as a secondary verification tool for your primary pair.
lookFor: ["DXY Inverse Alignment", "Correlation Strength", "Divergence Warning Signs", "Global Narrative Support"]
:::

:::decision-rule
Intermarket context is **Supporting Evidence**, not a Primary Catalyst. Never take a trade *only* because DXY looks good if the primary pair's structure is conflicted.
:::

### SMT Divergence (Advanced Clue)
Sometimes one pair makes a new high while its correlated pair (e.g., GBP/USD) fails to. This "crack" in correlation is a powerful signal of institutional manipulation.

:::trap
**The DXY-Only Trap**: Entering a trade on EUR/USD because DXY hit a level, even though EUR/USD hasn't printed an MSS yet. This is an assumption.
:::`,
      interactiveTaskType: "macro_rags_to_riches",
      skillLevel: "advanced", orderIndex: 8
    },
    {
      level: 5, moduleNumber: "5.9", title: "Journal-Based Decision Review",
      objective: "Use structured post-session auditing to identify bias patterns and improve scenario objectivity over time.",
      content: `# 5.9 — Journal-Based Decision Review

:::skill-target
Standardize your post-session audit to identify emotional bias vs. logical errors.
:::

### The 'L5' Audit Template
A professional's growth happens in the journal, not the chart. The goal of a Level 5 Review is to determine if your **Process** was correct, regardless of whether the simulated outcome was a "win" or "loss."

:::visual
title: The Professional Audit Template
image: /images/academy/level5/5.9_journal.png
caption: A structured 10-point checklist for objective session review.
lookFor: ["Evidence Weighting Accuracy", "Scenario Branching Clarity", "Invalidation Discipline", "Emotional State Audit"]
:::

### The Audit Questions
1. Did I identify a Primary and Alternative scenario *before* price reached the area?
2. Did my Evidence Stack have at least 3 layers of alignment?
3. Did I wait for Confirmation, or did I act on Assumption?
4. If price hit my Invalidation Anchor, did I stop trading immediately?

:::decision-rule
A "Good Trade" is any trade where the Scenario Planning Map was followed perfectly. A "Bad Trade" is any trade where the process was skipped, even if it resulted in profit.
:::

:::trap
**Outcome Bias**: Judging your performance based on simulation P&L rather than the quality of your Evidence Stack and Scenario discipline.
:::`,
      interactiveTaskType: "choice_block",
      interactiveTaskData: {
        question: "A learner completes a simulation session and writes in their journal: 'The scenario worked. Good session.' What is the primary problem with this entry?",
        options: [
          { id: "A", text: "It is too short to be a proper entry.", isCorrect: false, feedback: "Length is secondary to content quality." },
          { id: "B", text: "It records only the outcome without any process analysis — no evidence stack review, no confirmation check, no invalidation audit.", isCorrect: true, feedback: "Correct. A journal entry that only records outcomes provides no insight into the decision-making process." },
          { id: "C", text: "It should include the exact price levels reached.", isCorrect: false, feedback: "Price levels are data, but process analysis is the learning engine." },
          { id: "D", text: "It should compare the result to the previous session.", isCorrect: false, feedback: "Historical comparison is useful, but current process audit is critical." }
        ]
      },
      skillLevel: "advanced", orderIndex: 9
    },
    {
      level: 5, moduleNumber: "5.10", title: "Scenario Planning Map",
      objective: "Synthesize all Level 5 concepts into a complete scenario planning workflow and complete the capstone mission.",
      content: `# 5.10 — Scenario Planning Map

:::skill-target
Synthesize all Level 5 components into a repeatable, session-ready workflow.
:::

### The Unified Workflow
Everything you have learned — evidence stacking, branching logic, invalidation, timeframe alignment, unclear areas, confirmation, real-time adaptation, intermarket context, and journal review — comes together here.

:::visual
title: Scenario Planning Map
image: /images/academy/level5/5.10_map.png
caption: The complete circular workflow for professional market participation.
lookFor: ["HTF Narrative Anchor", "Evidence Stack Weights", "Scenario Branching", "Active Execution & Audit"]
:::

:::visual
title: The 10-Step Scenario Checklist
lookFor: ["1. Zoom Out: HTF Narrative Anchor", "2. Filter: Scan for Structural Conflict", "3. Stack: Build Evidence Stack (3+ layers)", "4. Branch: Define Primary/Alternative Scenarios", "5. Anchor: Mark Invalidation Level", "6. Verify: Check Intermarket (DXY) alignment", "7. Wait: Let price enter Scenario Area", "8. Confirm: Look for LTF Catalyst (MSS)", "9. Audit: Monitor for Lazy Delivery", "10. Review: Post-Session Journal Audit"]
:::

:::decision-rule
If Step 1 through Step 6 are not complete, you have no business performing Step 7.
:::

:::summary
Level 5 is about moving from "What is the chart doing?" to "How am I logically responding to the chart?" You are now a **Strategic Planner**, capable of maintaining objectivity in any simulated environment.
:::`,
      interactiveTaskType: "scenario_link",
      interactiveTaskData: {
        scenarioSlug: "level-5-scenario-planning-gate",
        missionTitle: "Level 5 Synthesis Mission",
        passThreshold: 85
      },
      skillLevel: "advanced", orderIndex: 10
    }
  ];

  console.log(`🚀 Ingesting modules via upsert...`);
  for (const mod of modules) {
    await prisma.courseModule.upsert({
      where: { level_moduleNumber: { level: mod.level, moduleNumber: mod.moduleNumber } },
      update: {
        ...(mod as any),
        marketTrack: "core",
      },
      create: {
        ...(mod as any),
        marketTrack: "core",
      },
    });
  }

  // ============================================
  // KNOWLEDGE TESTS (LEVEL 0-3)
  // ============================================
  const knowledgeTests = [
    {
      level: 0,
      title: "Level 0 Market Reading Foundations Test",
      questionsPerAttempt: 15,
      passThreshold: 80,
      timeLimitMin: 20,
      questions: [
        {
          id: "q0_1",
          topic: "Lurnava Learning Loop",
          difficulty: "easy",
          question: "You have just completed a module on structural shifts. According to the Lurnava learning loop, what is your next step?",
          options: [
            "Start trading in a live account to test the theory.",
            "Go to the Lab to practice the specific concept in simulation and document it in your Journal.",
            "Move immediately to Level 2 to save time.",
            "Follow a social media expert to see if they agree with the module."
          ],
          correctIndex: 1,
          explanation: "The Lurnava loop is: Learn (Module) -> Practice (Lab) -> Review (Journal). Professional skill is built through repeated, documented practice."
        },
        {
          id: "q0_2",
          topic: "Market Interaction",
          difficulty: "medium",
          question: "You observe price moving higher rapidly on your chart. Which of the following is the most objective explanation for this movement?",
          options: [
            "The market is 'feeling' optimistic about the future.",
            "Buyers are consistently hitting the 'Ask' prices and removing available sell orders (Liquidity).",
            "The computer algorithm decided it was time for an uptrend.",
            "A special 'bullish' pattern has appeared and is forcing the price up."
          ],
          correctIndex: 1,
          explanation: "Price moves because of order interaction. When buyers are aggressive enough to take all available sell orders at a price, the market must move higher to find new sellers (Liquidity)."
        },
        {
          id: "q0_3",
          topic: "Candle Context",
          difficulty: "medium",
          question: "In the middle of a strong multi-day downtrend, you see a single green 'Hammer' candle (a small body with a long wick at the bottom). How should you read this?",
          options: [
            "This is a 'Buy Signal' and I should act immediately.",
            "The trend has officially reversed and will now go up.",
            "This is a piece of evidence that some buyers stepped in, but the overall context remains bearish until structure shifts.",
            "A single candle is enough to ignore all previous market history."
          ],
          correctIndex: 2,
          explanation: "Context is King. A single candle is a record of a brief window of time; it must be interpreted within the larger structural story, which in this case is still bearish."
        },
        {
          id: "q0_4",
          topic: "Timeframe Context",
          difficulty: "hard",
          question: "The Daily chart shows a clear uptrend with higher highs. You zoom into the 5-minute chart and see a very strong red candle breaking a minor low. What is the most disciplined reading?",
          options: [
            "The 5-minute move is likely a minor retracement inside the larger Daily uptrend.",
            "The Daily trend has been canceled by this single 5-minute candle.",
            "I should sell immediately because the 5-minute chart is 'closer' to the action.",
            "Lower timeframes are always more important than higher timeframes."
          ],
          correctIndex: 0,
          explanation: "Higher timeframes provide the narrative (Context), while lower timeframes provide the detail. A small move against the major trend is usually just 'noise' or a brief retracement."
        },
        {
          id: "q0_5",
          topic: "Structure Basics",
          difficulty: "medium",
          question: "You are looking at a chart where price has just broken above a previous 'Peak' (Swing High) and has recently created a new higher 'Valley' (Swing Low). According to structural basics, what is the most logical reading of the current direction?",
          options: [
            "The market is in a Bearish Downtrend because it moved too far.",
            "The market is in a Bullish Uptrend because it is stepping higher through new structural anchors.",
            "The market is Unclear because the candles are green.",
            "The market is in a Range because it hasn't broken the Daily high yet."
          ],
          correctIndex: 1,
          explanation: "An uptrend is structurally defined by a sequence of rising peaks (Higher Highs) and rising valleys (Higher Lows). Identifying these anchors is the first step to mapping the market skeleton."
        },
        {
          id: "q0_6",
          topic: "Evidence vs Assumption",
          difficulty: "medium",
          question: "You believe price will 'bounce' at the $1.1000 level because it is a round number, but the price is currently at $1.1050 and moving down. Your belief is classified as:",
          options: [
            "Objective Evidence.",
            "A Structural Fact.",
            "An Assumption (Prediction).",
            "A Review Condition."
          ],
          correctIndex: 2,
          explanation: "Believing something will happen before it does is an assumption. Objective reading requires waiting for price to actually reach a level and show visible evidence of a reaction."
        },
        {
          id: "q0_7",
          topic: "Forex Relative Strength",
          difficulty: "medium",
          question: "When you observe the EUR/USD currency pair rising, what is actually happening in the market?",
          options: [
            "The Euro (EUR) is being bought and is strengthening relative to the US Dollar (USD).",
            "The US Dollar (USD) is weakening relative to the Euro.",
            "It is a relationship where the 'Base' currency is gaining strength or the 'Quote' currency is losing strength.",
            "All of the above."
          ],
          correctIndex: 3,
          explanation: "Forex pairs are relationships. A rise in EUR/USD means the EUR (Base) is stronger than the USD (Quote). This can be caused by Euro strength, Dollar weakness, or both."
        },
        {
          id: "q0_8",
          topic: "Forex Sessions",
          difficulty: "medium",
          question: "It is 10:00 PM in New York (the Asian/Tokyo session). You notice the price of EUR/USD is moving very slowly in a 3-pip range. How should you respond?",
          options: [
            "Increase your position size to force a profit from small moves.",
            "Recognize this as a low-liquidity window where structural evidence is often 'noisy' or absent.",
            "Assume the market is broken and contact support.",
            "Trade anyway because the market is open 24/5."
          ],
          correctIndex: 1,
          explanation: "The 'personality' of the market changes with the sessions. The Asian session is often lower in volume (Liquidity) for EUR/USD, leading to narrow ranges and less reliable evidence."
        },
        {
          id: "q0_9",
          topic: "Gold Context Drivers",
          difficulty: "hard",
          question: "Which combination of factors would typically provide supporting context for downward pressure on Gold (XAU/USD)?",
          options: [
            "A strengthening US Dollar (DXY) and rising global interest rates.",
            "A weakening US Dollar and falling interest rates.",
            "A global war and high economic uncertainty.",
            "Gold is unrelated to the US Dollar or interest rates."
          ],
          correctIndex: 0,
          explanation: "Gold is priced in Dollars (so a stronger Dollar makes it more expensive) and it pays no interest (so higher bank rates make it less attractive to hold)."
        },
        {
          id: "q0_10",
          topic: "Gold Volatility",
          difficulty: "medium",
          question: "Gold shoots up 60 pips in 15 seconds, then immediately leaves a long wick on top and returns to its starting point. This is an example of:",
          options: [
            "A clear bullish breakout that you missed.",
            "High-volatility 'noise' or a liquidity spike.",
            "The market 'guaranteeing' a move lower.",
            "A reason to act faster and skip your checklist."
          ],
          correctIndex: 1,
          explanation: "Gold is highly volatile. Sudden spikes (Wick Spikes) are often just 'noise' and do not necessarily indicate a change in the structural story."
        },
        {
          id: "q0_11",
          topic: "Crypto Fragmentation",
          difficulty: "medium",
          question: "On a Sunday afternoon, you see Bitcoin move 4% on a chart. Why should a Lurnava learner treat this move with extra caution?",
          options: [
            "Because crypto is closed on Sundays.",
            "Because weekend moves often happen on low liquidity and can be 'fake-outs' created by a few large participants.",
            "Because the weekend is the most reliable time to trade.",
            "Because all crypto exchanges show the exact same price at all times."
          ],
          correctIndex: 1,
          explanation: "Crypto is 24/7, but major banks/institutions are closed on weekends. This low-volume environment allows large orders to move price easily, creating moves that often reverse on Monday."
        },
        {
          id: "q0_12",
          topic: "Crypto Mechanics",
          difficulty: "hard",
          question: "You observe that Ethereum 'Funding Rates' are extremely positive (Longs paying Shorts) and price is reaching a major structural high. This is supporting context for:",
          options: [
            "A 'guaranteed' continuation of the uptrend.",
            "A potential 'Long Liquidation' cascade if price begins to shift downward.",
            "Buying more Ethereum immediately.",
            "Nothing, as funding rates are not related to price."
          ],
          correctIndex: 1,
          explanation: "High positive funding means many participants are 'Long' using leverage. If price drops, these participants may be forced to close (Liquidation), creating a wave of selling pressure."
        },
        {
          id: "q0_13",
          topic: "Simulation Discipline",
          difficulty: "easy",
          question: "You completed a practice session in the Lab. You 'lost' the simulated trade, but you followed your structural rules and documented the evidence correctly. This session was:",
          options: [
            "A failure that proves you cannot read the market.",
            "A success, because you practiced a sound, logical process regardless of the outcome.",
            "A waste of time because you didn't make a virtual profit.",
            "Something you should delete from your journal immediately."
          ],
          correctIndex: 1,
          explanation: "In the Lab, success is measured by the quality of your reasoning and discipline, not the outcome. A well-reasoned loss is better than a lucky guess."
        },
        {
          id: "q0_14",
          topic: "Journal Quality",
          difficulty: "easy",
          question: "Which of the following is the hallmark of a 'Strong' journal note?",
          options: [
            "Descriptions of how you 'feel' about the market.",
            "Objective records of the Roadway, Context, Evidence Stack, and a clear Review Condition.",
            "One-sentence notes like 'I won this one.'",
            "Predictions about where the price will be in one year."
          ],
          correctIndex: 1,
          explanation: "A strong note provides a clear mirror of your logic at the time, using objective structural facts that can be reviewed and improved later."
        },
        {
          id: "q0_15",
          topic: "Foundation Synthesis",
          difficulty: "medium",
          question: "You are starting a new practice session. What is the correct order of the Lurnava Workflow?",
          options: [
            "Guess direction -> Click Buy -> Check news -> Close trade.",
            "Identify Roadway -> Check Context -> Map Structure -> Stack Evidence -> Define Review Condition -> Record Note.",
            "Map Structure -> Ignore Context -> Act on feelings -> Review later.",
            "Wait for a signal -> Copy it -> Hope for the best -> Skip the journal."
          ],
          correctIndex: 1,
          explanation: "The professional workflow moves from the 'Big Picture' (Roadway/Context) down to the specific 'Structural Facts' and 'Evidence' before documenting the final plan."
        }
      ]
    },
    {
      level: 1,
      title: "Level 1 Market Basics Test",
      questionsPerAttempt: 15,
      passThreshold: 80,
      timeLimitMin: 20,
      questions: [
        { id: "q1_1", question: "What does the 'Casino Analogy' represent in market participation?", options: ["Trying to force a large outcome from one event.", "Maintaining a statistical edge over a large sample of independent events.", "Expecting one event to be known in advance."], correctIndex: 1, explanation: "Professional participation relies on the law of large numbers." },
        { id: "q1_2", question: "In a zero-sum matching environment, what is primarily being transferred?", options: ["Intelligence", "Capital and Value", "Confidence"], correctIndex: 1, explanation: "Markets facilitate the transfer of value." },
        { id: "q1_3", question: "If a system has a 55% success rate, what is a statistically normal occurrence in the short term?", options: ["Guaranteed positive results every week.", "A series of consecutive unfavorable attempts.", "No chance of an unsuccessful attempt."], correctIndex: 1, explanation: "Probability allows for significant short-term variance." },
        { id: "q1_4", question: "What does an R-Multiple compare?", options: ["Planned exposure relative to the outcome", "Account size only", "Price-feed speed", "A method for increasing size after a setback"], correctIndex: 0, explanation: "R-Multiple defines the unit of exposure relative to the result." },
        { id: "q1_5", question: "What is unfavorable outcome aversion in decision-making?", options: ["Feeling a negative outcome more strongly than an equal positive outcome", "Avoiding all practice to prevent mistakes", "Taking larger actions to avoid admitting a small mistake", "Both A and C"], correctIndex: 3, explanation: "Aversion can push learners to avoid objective review after an unfavorable result." },
        { id: "q1_6", question: "What is the primary intent when price moves beyond a known structural boundary and then reverses?", options: ["A sign that the structure is strengthening.", "Testing available orders and boundaries.", "A technical error."], correctIndex: 1, explanation: "Moves beyond boundaries test the available capital and interest at those extremes." },
        { id: "q1_7", question: "Why is account decrease described as 'asymmetrical'?", options: ["Because negative outcomes are always larger than positive ones.", "Because a 50% decrease requires a 100% increase to return to the original level.", "Because transaction fees change."], correctIndex: 1, explanation: "The math of recovery becomes exponentially harder as the percentage of decrease increases." },
        { id: "q1_8", question: "At their core, market price movements are driven by:", options: ["The relative scarcity of an asset and the desire to hold it (Supply and Demand).", "The specific colors and patterns of the candles.", "Random chance with no underlying cause."], correctIndex: 0, explanation: "Value is a function of supply, demand, and participant perception." },
        { id: "q1_9", question: "A central bank raising interest rates usually evidences:", options: ["A planned capital outflow from that currency.", "Capital inflow as participants seek the higher available yield.", "No change in participant behavior."], correctIndex: 1, explanation: "Higher relative yields attract global capital seeking better returns." },
        { id: "q1_10", question: "What is the most effective tool for maintaining emotional discipline?", options: ["A documented plan and an objective review journal.", "Larger actions to recover from small setbacks.", "Following advice in group chats."], correctIndex: 0, explanation: "Process-oriented discipline is built through documentation and review." },
        { id: "q1_11", question: "If a system has a 1:2 planned exposure / possible outcome ratio, what success rate is required to reach a breakeven state?", options: ["50%", "33.3%", "25%"], correctIndex: 1, explanation: "With 1:2, one successful outcome covers two failed ones." },
        { id: "q1_12", question: "What is the role of 'unlearning' in the foundations phase?", options: ["To forget how to read a price chart entirely.", "To remove unhelpful expectations of easy achievement.", "To stop paying attention to events."], correctIndex: 1, explanation: "Foundation requires clearing the mind of inaccurate terminology and unhelpful expectations." },
        { id: "q1_13", question: "Markets primarily exist to:", options: ["Create wealth for all participants simultaneously.", "Facilitate exchange between participants with different time and capital needs.", "Provide a platform for testing new high-frequency software."], correctIndex: 1, explanation: "Markets are matching engines for capital and time." },
        { id: "q1_14", question: "Inflationary mechanics typically cause a currency's purchasing power to:", options: ["Rise indefinitely over time.", "Decline as the total supply of the currency expands.", "Stay perfectly stable."], correctIndex: 1, explanation: "Expansion of currency supply (inflation) generally debases its purchasing power." },
        { id: "q1_15", question: "The probability of any single market outcome is:", options: ["Predetermined by previous events.", "Uncertain and independent of the previous outcome.", "Known in advance by participants with large capital."], correctIndex: 1, explanation: "In a probabilistic environment, every event is unique and its specific outcome is uncertain." }
      ]
    },
    {
      level: 2,
      title: "Level 2 Market Mechanics Test",
      questionsPerAttempt: 15,
      passThreshold: 80,
      timeLimitMin: 20,
      questions: [
        { id: "q2_1", question: "What is the defining characteristic of 'Fractal' market behavior?", options: ["One that only moves in a single direction without retracements.", "One where small-scale patterns mirror large-scale patterns.", "One that is completely random."], correctIndex: 1, explanation: "Markets are self-similar across timeframes." },
        { id: "q2_2", question: "A Market Structure Shift (MSS) is identified when:", options: ["Price touches a specific moving average line.", "Price violates a major structural anchor with clear displacement.", "A new daily session window begins."], correctIndex: 1, explanation: "A shift requires the clear violation of the points that anchored the previous structural sequence." },
        { id: "q2_3", question: "What does 'Equilibrium' represent within a defined dealing range?", options: ["The exact 50% midpoint between the range high and range low.", "The area immediately above the previous high.", "The current market price."], correctIndex: 0, explanation: "Equilibrium is the fair value midpoint of a structural range." },
        { id: "q2_4", question: "In structural mapping, price above the Equilibrium point is considered:", options: ["Discount", "Premium", "Neutral"], correctIndex: 1, explanation: "Above 50% is Premium." },
        { id: "q2_5", question: "In structural mapping, price below the Equilibrium point is considered:", options: ["Discount", "Premium", "Neutral"], correctIndex: 0, explanation: "Below 50% is Discount." },
        { id: "q2_6", question: "What is 'Internal Structure' in the context of a dealing range?", options: ["Movements that occur completely outside the major structural anchors.", "Fluctuations that occur within a larger, major directional leg.", "Raw data from the exchange."], correctIndex: 1, explanation: "Internal structure is the movement within a higher-timeframe leg." },
        { id: "q2_7", question: "External Range boundaries are typically identified at:", options: ["Old highs.", "Old lows.", "Both old highs and old lows that form the range extremes."], correctIndex: 2, explanation: "The extremes of the current structural sequence define the external boundaries." },
        { id: "q2_8", question: "A 'Failed Break' is best described as:", options: ["Price moving beyond a level and establishing a new range.", "Price moving briefly beyond a level but failing to close there and returning inside.", "A move that happens exactly at the session window open."], correctIndex: 1, explanation: "A failed break shows a lack of commitment to the new price level." },
        { id: "q2_9", question: "A 'Major Swing High' is confirmed as a structural anchor only when:", options: ["It is the highest visible point on the current screen.", "It anchors a move that successfully violates a previous major structural point.", "It consists of at least three consecutive candles."], correctIndex: 1, explanation: "Structural significance is earned through the violation of opposing structure." },
        { id: "q2_10", question: "True or False: Every small fluctuation that looks like a peak is a Major Structural Anchor.", options: ["True", "False"], correctIndex: 1, explanation: "Only swings that lead to significant structural changes are considered major anchors." },
        { id: "q2_11", question: "What is the primary goal of mapping external range boundaries?", options: ["To make an immediate action decision.", "To define the objective boundaries of the current structural reading.", "To guess where other participants are placing their orders."], correctIndex: 1, explanation: "Boundaries provide the map for objective review." },
        { id: "q2_12", question: "Primary price feeds differ from typical feeds primarily in:", options: ["The color of the candles.", "Direct access and transparency of the available orders.", "Their ability to be 100% accurate about what happens next."], correctIndex: 1, explanation: "Professional feeds have less filtering and provide more granular data." },
        { id: "q2_13", question: "A Market Structure Shift (MSS) represents:", options: ["A minor and expected pullback within a sequence.", "A behavioral shift in the underlying chart context.", "A random technical glitch."], correctIndex: 1, explanation: "MSS indicates that the character of price delivery has changed." },
        { id: "q2_14", question: "The 'Trend Fallacy' assumes that:", options: ["Markets move in straight, predictable lines for extended periods.", "All market structure is fractal and self-similar.", "Prices always return to their starting point."], correctIndex: 0, explanation: "Retail trends are often just expansion phases between ranges." },
        { id: "q2_15", question: "Dealing ranges are structurally established by:", options: ["Two major structural anchors forming the high and low.", "Sudden spikes in activity.", "Announcements made by government officials."], correctIndex: 0, explanation: "Ranges are the areas between confirmed structural extremes." }
      ]
    },
    {
      level: 3,
      title: "Level 3 Structure & Imbalance Test",
      questionsPerAttempt: 15,
      passThreshold: 80,
      timeLimitMin: 30,
      questions: [
        { id: "q3_1", question: "What is a Fair Value Gap (FVG)?", options: ["A simple gap between the close of one day and the open of the next.", "A 3-candle sequence where rapid delivery leaves an imbalance of orders.", "A horizontal line drawn at a round number."], correctIndex: 1, explanation: "FVGs represent areas where price moved too quickly to offer balanced delivery." },
        { id: "q3_2", question: "An Order Block (OB) is structurally defined as:", options: ["Any candle that has a large body.", "The origin point of a move that successfully violates major structure.", "A candle that appears exactly at the start of a new hour."], correctIndex: 1, explanation: "Order blocks anchor the beginning of an expansion that shifts structure." },
        { id: "q3_3", question: "A 'Breaker Block' is formed when:", options: ["A failed order block is violated and then retested.", "A current structural sequence continues without interruption.", "Price moves sideways for many candles."], correctIndex: 0, explanation: "Breakers are failed order blocks that flip their structural polarity." },
        { id: "q3_4", question: "What is an 'Exchange Void'?", options: ["A moment when the order book is empty.", "An explosive move that leaves behind no orders matched on one side.", "A slow period where no candles are formed."], correctIndex: 1, explanation: "Voids represent gaps in the delivery of price." },
        { id: "q3_5", question: "Mitigation occurs when:", options: ["A participant closes all positions.", "Price returns to an old order block to clear previous exposure.", "A new all-time high is reached."], correctIndex: 1, explanation: "Mitigation is the process of neutralizing exposure from previous orders." },
        { id: "q3_6", question: "An Inversion FVG is:", options: ["A price gap that never fills.", "An FVG that is broken and then acts as support/resistance level.", "A gap that opens on the 1-minute timeframe."], correctIndex: 1, explanation: "Inversion FVGs flip their structural role after being broken." },
        { id: "q3_7", question: "A 'Volume Imbalance' is characterized by:", options: ["Exceptionally high activity on a single candle.", "A gap between two candle bodies where the wicks still overlap.", "Candles that have no wicks."], correctIndex: 1, explanation: "Volume imbalances occur when bodies do not overlap despite wick overlap." },
        { id: "q3_8", question: "Tracking structural footprints is primarily about identifying:", options: ["The exact next direction of the chart.", "Evidence left by strong participation in price movement.", "The best session window for action.", "The names of participants involved."], correctIndex: 1, explanation: "Structural footprints are visible clues created by strong participation and delivery gaps." },
        { id: "q3_9", question: "A 1-minute MSS within a 4-hour upward leg is structurally:", options: ["Confirmation of a full structure change.", "Likely internal noise or a short-term retracement.", "The strongest possible evidence for a new directional move."], correctIndex: 1, explanation: "Higher-timeframe context always overrides lower-timeframe shifts." },
        { id: "q3_10", question: "Why does Premium/Discount context matter in Level 3 review?", options: ["It gives an automatic action instruction.", "It helps compare price location with the current range.", "It removes the need for structure mapping.", "It guarantees a clean reaction."], correctIndex: 1, explanation: "Premium/Discount context helps learners review where price is located within a defined range." },
        { id: "q3_11", question: "The underlying 'Engine' of a Fair Value Gap is:", options: ["Emotional overreaction only.", "A lack of two-way exchange during strong price delivery.", "A news label on the chart.", "A wider spread only."], correctIndex: 1, explanation: "FVGs are delivery failures." },
        { id: "q3_12", question: "A 'Mitigation Block' differs from a 'Breaker' primarily because:", options: ["It contains a significantly higher amount of volume.", "It does not require a boundary sweep of the previous high/low.", "It is only structurally valid on the daily chart."], correctIndex: 1, explanation: "Breakers are defined by the sweep of a previous extreme; Mitigations are not." },
        { id: "q3_13", question: "Time & Sales data helps identify:", options: ["The exact next chart movement.", "Aggressive participation hitting bid or ask.", "The content of future news.", "The final outcome of the current candle."], correctIndex: 1, explanation: "Data reveals aggressive participation in real-time." },
        { id: "q3_14", question: "An 'Iceberg Order' is revealed when:", options: ["A level is tested repeatedly while movement through it remains limited.", "A very large candle body appears without any news event.", "Price moves too quickly for candles to form."], correctIndex: 0, explanation: "Icebergs absorb value at a fixed price." },
        { id: "q3_15", question: "Price delivery is considered 'Balanced' only when:", options: ["Both sides of the spread have been offered at every price point in a range.", "The market is closed.", "There are an equal number of candles."], correctIndex: 0, explanation: "Balanced delivery ensures no visible delivery gaps are left behind." }
      ]
    },
    {
      level: 5,
      title: "Level 5 Scenario Planning Test",
      questionsPerAttempt: 20,
      passThreshold: 85,
      timeLimitMin: 45,
      questions: [
        { id: "q5_1", question: "You identify a bearish MSS on the Daily chart and a bullish FVG on the 4-hour chart. Neither has been invalidated. What is the correct evidence stack assessment?", options: ["The Daily MSS overrides the 4H FVG automatically because it is a higher timeframe.", "Both clues should be recorded — the MSS as supporting and the FVG as conflicting — creating an evidence stack with documented conflict.", "The 4H FVG should be ignored because it opposes the Daily narrative.", "Wait until one of the two clues self-resolves before recording anything."], correctIndex: 1, explanation: "A complete evidence stack includes both supporting and conflicting observations. Conflict is information, not a problem to eliminate." },
        { id: "q5_2", question: "Your primary scenario is bearish from a 1H FVG. Your alternative is a bullish shift if price closes above 1.0975 with displacement. During the session, price closes above 1.0975 with a strong displacement candle and creates a new bullish FVG. What should you do?", options: ["Hold the bearish scenario because the Daily narrative has not changed.", "Switch to the alternative scenario as pre-defined — the condition has been met.", "Wait for a second displacement candle to confirm the first one.", "Abandon both scenarios and stop observing for the session."], correctIndex: 1, explanation: "The pre-defined alternative condition was met. Switching is not a failure — it is the execution of a well-designed plan." },
        { id: "q5_3", question: "A learner writes their invalidation condition as: 'I will invalidate if things look bad.' What is the structural problem with this condition?", options: ["It is too emotional — invalidation must reference a specific structural level and candle behavior.", "It is fine as long as the learner has experience.", "It needs to include a time component only.", "The word 'bad' should be replaced with 'bearish.'"], correctIndex: 0, explanation: "Invalidation conditions must be specific: structural level + candle behavior (body close with displacement). Vague language produces vague decisions." },
        { id: "q5_4", question: "The Daily chart shows a bearish MSS. On the 1H chart, price is retracing upward in a slow grind with no displacement and no MSS. What is the aligned reading?", options: ["Build a bullish 1H scenario because the retracement is visible.", "The 1H retracement lacks structural evidence (no MSS, no displacement). The Daily bearish narrative remains the primary context.", "Switch to a bullish scenario because the 1H is more recent.", "The chart is unclear — record No Scenario."], correctIndex: 1, explanation: "A slow retracement without structural shift does not override the HTF narrative. It is internal noise until an MSS occurs." },
        { id: "q5_5", question: "The Daily chart has a bullish MSS. The 4H chart has just completed a bearish MSS. The 1H is consolidating with no boundary interaction. What is the correct reading?", options: ["Build a bullish scenario from the Daily MSS.", "Build a bearish scenario from the 4H MSS.", "Record No Scenario — Structural Conflict, and wait for one MSS to be invalidated.", "Build both scenarios simultaneously and observe."], correctIndex: 2, explanation: "Opposing MSS on adjacent timeframes without resolution creates structural conflict. Forcing a read produces poor review quality." },
        { id: "q5_6", question: "You have identified a bullish Order Block at 1.0940. Price is at 1.0960, moving toward it. You write: 'My scenario is bullish from 1.0940.' What type of planning is this?", options: ["Confirmation-based, because the OB is a strong structural level.", "Assumption-based, because price has not yet reached the area and no structural reaction has occurred.", "Aligned, because the OB supports the HTF narrative.", "Speculative, but acceptable for simulation practice."], correctIndex: 1, explanation: "Building a scenario before price reaches the area and before any structural reaction has occurred is assumption-based planning." },
        { id: "q5_7", question: "During a simulation session, a single red candle appears inside your bullish scenario. No MSS has occurred. No FVG has been created. No anchor has been violated. What should you do?", options: ["Update the scenario to bearish because the candle was red.", "Record the candle as a structural checkpoint and update the journal.", "Do nothing — a single candle without a structural event is not a review trigger.", "Close the simulation session to avoid further uncertainty."], correctIndex: 2, explanation: "Scenario reviews are triggered by structural events (MSS, FVG, boundary sweep), not by individual candle colors." },
        { id: "q5_8", question: "Your EUR/USD scenario is bullish. You check DXY and find it also has a bullish MSS with displacement. What is the intermarket assessment?", options: ["Intermarket aligned — both bullish is supporting.", "Intermarket conflicting — EUR/USD bullish requires DXY bearish. Both bullish simultaneously is a structural divergence that should be documented.", "Intermarket neutral — DXY does not affect EUR/USD.", "Ignore DXY because the EUR/USD chart is the primary source."], correctIndex: 1, explanation: "EUR/USD and DXY are negatively correlated. Both being bullish simultaneously is a divergence that should be recorded as intermarket conflict." },
        { id: "q5_9", question: "A learner writes in their journal: 'The scenario did not work. Bad session.' What is the primary problem with this entry?", options: ["It needs more detail about the price levels.", "It records only the outcome without process analysis — no evidence stack audit, no confirmation check, no invalidation review.", "It should blame a specific external factor for the outcome.", "It is an acceptable short-form entry for minor sessions."], correctIndex: 1, explanation: "Journal entries must audit the decision-making process, not just record outcomes. Process analysis is what produces learning." },
        { id: "q5_10", question: "In the Scenario Planning Map workflow, what must be completed before defining the Primary Scenario?", options: ["The HTF narrative check, the evidence stack, and the structural conflict check.", "Only the HTF narrative check.", "The intermarket context check.", "The post-session journal review."], correctIndex: 0, explanation: "Steps 1-3 (HTF narrative, evidence stack, conflict check) must be completed before Step 4 (Primary Scenario). Building a scenario without these steps produces structurally incomplete plans." },
        { id: "q5_11", question: "Your bullish scenario has a time-based invalidation: New York AM session (8:30-11:00 EST). By 11:15, price has not reached your area of interest. What is the correct action?", options: ["Extend the time window by one more hour to give it more room.", "Record 'Time-expired. No interaction. Scenario archived.' This is a clean, objective outcome.", "Switch to the alternative scenario because time ran out.", "The scenario is still valid — time-based invalidation is optional."], correctIndex: 1, explanation: "Time-based invalidation is a pre-defined condition. When the window expires without interaction, the scenario is archived. Extending the window is narrative protection." },
        { id: "q5_12", question: "Price reaches your identified 4H Order Block. On the 1-minute chart, a wick forms at the zone but immediately recovers — no MSS, no FVG, no displacement. Is this confirmation?", options: ["Yes — price touched the zone, which is enough.", "No — a wick reaction without a structural shift (MSS/FVG/displacement) is not confirmation. It may be a sweep.", "Yes — the wick shows that the zone is respected.", "It depends on the size of the wick."], correctIndex: 1, explanation: "Confirmation requires a structural event at the area — not just proximity or a wick. A wick without structural shift is ambiguous and may indicate a sweep." },
        { id: "q5_13", question: "You are reviewing your journal entries from three consecutive sessions. In all three, you defined an alternative scenario but never switched to it, even though the alternative conditions were met twice. What pattern does this reveal?", options: ["Strong conviction in primary readings — a positive trait.", "Narrative lock — the alternative was defined but not activated when conditions triggered it. This is a process failure.", "Insufficient alternative scenarios — they need to be rewritten.", "Normal behavior — alternatives rarely need to be activated."], correctIndex: 1, explanation: "Defining alternatives without activating them when conditions are met is narrative lock disguised as preparation. This is a critical process pattern to address." },
        { id: "q5_14", question: "A learner builds an evidence stack with five supporting clues and zero conflicting clues. What should they suspect?", options: ["Their reading is very strong because all clues align.", "Possible confirmation bias — a stack with zero conflicting clues may indicate that conflicting evidence was unconsciously filtered out.", "The chart is unusually clear and no further review is needed.", "They should add a sixth clue to strengthen the stack."], correctIndex: 1, explanation: "An evidence stack with zero conflicting observations should be treated with suspicion. Most chart environments contain at least some conflicting data." },
        { id: "q5_15", question: "During real-time adaptation, you updated your scenario four times in ten minutes, each time triggered by a single candle. What is the likely problem?", options: ["The chart is extremely volatile and requires rapid updates.", "Over-adaptation — updating the scenario based on individual candles rather than structural checkpoints. Most of the updates were likely noise reactions.", "Under-adaptation — four updates is too few for a ten-minute window.", "The scenario was poorly designed from the start."], correctIndex: 1, explanation: "Structural checkpoints (MSS, FVG, anchor violation) are the only valid review triggers. If every candle triggers a review, the learner is reacting to noise." },
        { id: "q5_16", question: "In the capstone mission, you are asked to identify a Review Area. What does this zone represent structurally?", options: ["The zone where price will most likely reverse.", "The structural zone where the next meaningful delivery interaction will provide evidence for or against the current reading.", "The zone with the highest volume concentration.", "The zone closest to the current price."], correctIndex: 1, explanation: "The Review Area is where the chart will provide the next piece of structural evidence. It is not a reversal prediction — it is an observation point." },
        { id: "q5_17", question: "Your scenario is bearish from a 1H FVG. Price creates a new bearish FVG below the first one, but your anchoring swing low has not been swept. A learner asks: 'Should I move my invalidation to the new FVG?' What is the correct answer?", options: ["Yes — the new FVG is more recent and therefore more relevant.", "No — invalidation is defined by the structural anchor (swing low), not by subsequent FVGs. Moving invalidation to track new FVGs is narrative protection.", "Yes — as long as the new FVG is in the same direction as the scenario.", "It depends on the displacement quality of the new FVG."], correctIndex: 1, explanation: "Invalidation is anchored to the structural level defined in the plan. Moving it to track subsequent price action is redefining the plan to protect the narrative." },
        { id: "q5_18", question: "A learner checks DXY after completing their EUR/USD evidence stack. DXY is unclear — consolidating with no recent MSS. How should this affect the EUR/USD scenario?", options: ["Cancel the EUR/USD scenario because DXY is unclear.", "Record 'Intermarket context: DXY unclear — no additional weight or conflict.' The primary EUR/USD reading stands on its own evidence.", "Force a DXY reading to ensure intermarket alignment.", "Use another correlated pair instead of DXY to find alignment."], correctIndex: 1, explanation: "When DXY is unclear, it provides neither supporting nor conflicting context. The primary chart's evidence stack is unchanged." },
        { id: "q5_19", question: "You are building a 1-minute scenario based on a Weekly chart narrative, skipping the Daily, 4H, and 1H charts entirely. What is the alignment problem?", options: ["There is no problem — the Weekly chart is the most authoritative.", "Timeframe mismatch — alignment requires stepping through intermediate timeframes, not jumping from the highest to the lowest.", "The 1-minute chart is too noisy for any scenario planning.", "The Weekly chart should only be used for scenarios lasting more than one week."], correctIndex: 1, explanation: "Alignment requires methodical review across intermediate timeframes. Jumping from Weekly to 1-minute skips the 4H, 1H, and 15m, making the scenario structurally incomplete." },
        { id: "q5_20", question: "After completing the 10-step Scenario Planning Map, you attempt the capstone mission but place the Review Area incorrectly. Your journal review reveals that you skipped Step 3 (Structural Conflict Check). What is the lesson?", options: ["The mission grading was too strict.", "Skipping the conflict check allowed a scenario to be built on conflicted structure, which led to an inaccurate zone selection. The full workflow must be completed.", "Step 3 is optional for experienced learners.", "The Review Area should have been placed at the closest FVG instead."], correctIndex: 1, explanation: "The Scenario Planning Map is a sequential workflow. Skipping steps compromises the structural logic of the entire plan, including zone selection." }
      ]
    }
  ];

  for (const test of knowledgeTests) {
    await prisma.knowledgeTest.upsert({
      where: { level: test.level },
      update: test as any,
      create: test as any,
    });
    console.log(`✅ Level ${test.level} Knowledge Test Ingested.`);
  }

  // ============================================
  // TRAINING SCENARIOS (LEVEL 3 + GATE)
  // ============================================
  const scenarios = [
    {
      slug: "level-3-final-gate",
      title: "Level 3 Final Gate",
      description: "Capstone mission for Level 3.",
      scenarioType: "structure_annotation", status: "active", marketTrack: "multi",
      level: 3, instrument: "BTCUSD", timeframe: "1H", candleSourceType: "curated",
      prompt: "Identify the primary zone.",
      passThreshold: 80, xpAward: 500,
      expectedActions: { interactionMode: "chart_markup_v1" },
      gradingRubric: { rules: ["accurate_zone_placement"] },
      metadata: {
        interactionMode: "chart_markup_v1",
        validationZones: [{ label: "Zone Check", timeStart: "2024-01-10", timeEnd: "2024-01-12", priceMin: 108, priceMax: 112 }],
        feedbackOnPass: "Level 3 complete.",
        feedbackOnFail: "Review required."
      }
    },
    {
      slug: "m2-level-2-map-review-v1",
      title: "Level 2 Boundary Review",
      description: "Boundary identification mission.",
      scenarioType: "structure_annotation", status: "active", marketTrack: "multi",
      level: 2, instrument: "EURUSD", timeframe: "1H", candleSourceType: "curated",
      prompt: "Identify the external boundary.",
      passThreshold: 80, xpAward: 250,
      expectedActions: { interactionMode: "chart_markup_v1" },
      gradingRubric: { rules: ["accurate_zone_placement"] },
      metadata: {
        interactionMode: "chart_markup_v1",
        validationZones: [{ label: "Boundary", timeStart: "2024-01-05", timeEnd: "2024-01-07", priceMin: 98, priceMax: 102 }],
        feedbackOnPass: "Boundary identified.",
        feedbackOnFail: "Review required."
      }
    },
    {
      slug: "level-5-scenario-planning-gate",
      title: "Level 5 Scenario Planning Review",
      description: "Capstone synthesis mission for Level 5 — Evidence-Based Scenario Planning. Validates the learner's ability to identify the correct Review Area based on structural context, evidence stacking, and timeframe alignment.",
      scenarioType: "structure_annotation", status: "active", marketTrack: "multi",
      level: 5, instrument: "EURUSD", timeframe: "1H", candleSourceType: "curated",
      prompt: "Using the Scenario Planning Map workflow, identify the Review Area — the structural zone where the next meaningful delivery interaction will provide evidence for or against the current reading. This mission validates a single zone, not a complete scenario map. However, your zone selection should reflect the full evidence stack: HTF narrative, LTF alignment, and structural context. Before placing your zone, consider: What is the HTF narrative? What structural clue makes this zone the next area to observe? What would confirmation and invalidation look like at this zone?",
      passThreshold: 85, xpAward: 750,
      expectedActions: { interactionMode: "chart_markup_v1" },
      gradingRubric: { rules: ["accurate_zone_placement"] },
      metadata: {
        interactionMode: "chart_markup_v1",
        validationZones: [{ label: "Review Area", timeStart: "2024-01-20", timeEnd: "2024-01-22", priceMin: 1.0950, priceMax: 1.0980 }],
        feedbackOnPass: "Level 5 complete. Your Review Area placement demonstrates structural understanding of the evidence stack and timeframe alignment. Complete your post-mission journal entry: document the HTF narrative, the evidence that led to your zone selection, and what confirmation or invalidation would look like at this area.",
        feedbackOnFail: "Review Area placement does not align with the structural context. Before retrying, revisit the Scenario Planning Map workflow (Module 5.10): verify your HTF narrative reading, confirm that your evidence stack includes both supporting and conflicting clues, and ensure your zone represents the area where the next meaningful structural interaction will occur — not where you expect price to reverse.",
        feedbackOnRetry: "Take time between attempts. Before retrying, complete the Pre-Mission Journal Note from Module 5.10: (1) What is the HTF narrative? (2) What evidence supports a scenario? (3) What evidence conflicts? (4) Where is the next meaningful structural interaction? Use this documentation to guide your zone selection."
      }
    },
    {
      slug: "level-0-foundation-review-mission",
      title: "Level 0 Foundation Review",
      description: "Capstone synthesis mission for Level 0. Apply roadway context and structural mapping to identify a professional review area.",
      scenarioType: "structure_annotation", status: "active", marketTrack: "multi",
      level: 0, instrument: "EURUSD", timeframe: "1H", candleSourceType: "curated",
      prompt: "Observe the EUR/USD chart during the London session. Identify the current bullish structure (Higher Highs and Higher Lows) and mark the 'Review Area' — the structural zone where you would wait for the next piece of objective evidence before continuing your reading. Avoid guessing the next candle; focus on identifying where the market's intent will be revealed.",
      passThreshold: 80, xpAward: 150,
      expectedActions: { interactionMode: "chart_markup_v1" },
      gradingRubric: { rules: ["accurate_zone_placement"] },
      metadata: {
        interactionMode: "chart_markup_v1",
        validationZones: [{ label: "Review Area", timeStart: "2024-05-10", timeEnd: "2024-05-12", priceMin: 1.0820, priceMax: 1.0850 }],
        feedbackOnPass: "Foundation Mission Complete. You identified the Review Area using objective structural logic rather than assumption. Now, write a short practice note in your Journal documenting the evidence you saw and what would make this reading 'Unclear.'",
        feedbackOnFail: "Review Area placement is not supported by the current structure. Remember: look for the most recent 'Swing' or 'Anchor' point. Do not mark a random candle; wait for the market to provide a clear boundary.",
        feedbackOnRetry: "Re-read Module 0.5 (Basic Structure) and 0.6 (Evidence vs Assumption). Focus on identifying the 'Range' before placing your marker. Success comes from patience, not speed."
      }
    }
  ];

  for (const sc of scenarios) {
    const scenario = await prisma.trainingScenario.upsert({
      where: { slug: sc.slug },
      update: sc as any,
      create: sc as any,
    });

    let targetModuleNumber = "4.8";
    if (sc.level === 5) targetModuleNumber = "5.10";
    if (sc.level === 3) targetModuleNumber = "3.10";
    if (sc.level === 2) targetModuleNumber = "2.12";
    if (sc.level === 0) targetModuleNumber = "0.15";

    const targetModule = await prisma.courseModule.findFirst({
      where: { moduleNumber: targetModuleNumber, level: sc.level }
    });

    if (targetModule) {
      await prisma.moduleScenarioLink.upsert({
        where: { moduleId_scenarioId: { moduleId: targetModule.id, scenarioId: scenario.id } },
        update: { requiredForProgress: true, sortOrder: 1 },
        create: {
          moduleId: targetModule.id,
          scenarioId: scenario.id,
          requiredForProgress: true,
          sortOrder: 1
        },
      });
    }
  }

  console.log(`✅ SUCCESS: All Tests and Missions Ingested.`);
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
