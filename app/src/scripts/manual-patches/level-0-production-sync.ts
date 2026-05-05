import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

// ============================================
// LEVEL 0 CURRICULUM DATA (EXTRACTED FROM SEED SOURCE)
// ============================================

const MODULES = [
  {
    level: 0, moduleNumber: "0.1", title: "What Lurnava Teaches: Reading, Practice, Review",
    objective: "Welcome to the Market Reading Foundations.",
    content: `# What Lurnava Teaches: Reading, Practice, Review\n\nWelcome to Lurnava. This is not a typical trading course. Most people come to the markets looking for \"signals\"—simple instructions to buy or sell. Lurnava does not provide signals, nor does it teach you how to \"predict\" the future. Predicting is a guessing game, and guessing leads to inconsistency.\n\nInstead, Lurnava teaches you **Market Reading**. This is the ability to look at a chart and identify objective structural facts. It is like learning a language. Once you can read the language of the market, you don't need anyone to tell you what to do.\n\n### The Lurnava Method\nOur approach is built on a three-part loop: **Read, Practice, Review.**\n\n1. **Read**: You learn a specific structural concept.\n2. **Practice**: You immediately apply that concept in a simulation (The Lab).\n3. **Review**: You document what happened in your Journal and analyze your decision-making.\n\n:::skill-target\nUnderstand that professional participation is about structured observation and repeated practice, not emotional guessing or following \"experts.\"\n:::\n\n### What We Do Not Teach\nIt is important to be clear: Lurnava is not a \"get rich quick\" platform. We do not use hype, and we do not promise profits. In fact, we avoid the word \"profit\" because it focuses your mind on the result rather than the process.\n\n**What this means:**\nWe focus on **Evidence**. Evidence is a piece of observable data on the chart that suggests a specific market state. For example, if price breaks a previous high, that is evidence of strength. We don't \"believe\" price is strong; we observe it.\n\n:::learning-loop\n:::\n\n### Why You Should Not Rush\nThe biggest mistake beginners make is rushing to \"trade.\" At Lurnava, we don't start with trading; we start with **Market Reading Foundations**. You wouldn't try to fly a plane before learning what the buttons do.\n\n**Simple Scenario:**\nImagine a person who buys a \"secret strategy\" and starts clicking buttons. They might win once or twice by luck, but they have no idea *why* it happened. When they eventually lose, they get frustrated and quit.\nA Lurnava learner, however, knows exactly what evidence they were looking for. If the market does something unexpected, they record it, review it, and learn from it.\n\n### Your Tools\n- **Modules**: These lessons where you learn the theory.\n- **Interactive Tasks**: Small exercises inside the modules to check your understanding.\n- **The Lab**: A simulation environment where you can practice reading real historical data without risk.\n- **The Journal**: Your personal record of every observation and practice session.\n- **Nava**: Your AI assistant that helps you review your logic and provides context.\n\n:::decision-rule\nCommit to the process of learning. If you find yourself looking for a \"magic signal,\" stop and return to the foundations of objective reading.\n:::\n\n:::summary\nLurnava is a skill-building platform. We teach you to read the market as a professional observer. Success comes from the quality of your practice and the honesty of your reviews.\n:::`,
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
    content: `# What a Market Really Is\n\nTo read a chart, you must first understand what you are actually looking at. A price chart is not just a bunch of lines or colored bars; it is a visual record of human and algorithmic interaction.\n\nAt its simplest level, a market is a place where buyers and sellers meet to exchange things. In our case, they exchange financial instruments like currencies, stocks, or commodities.\n\n### The Meeting of Orders\nEvery price movement you see is the result of an **Order Interaction**.\n- **Buyers** want to acquire an asset at the lowest possible price.\n- **Sellers** want to get rid of an asset at the highest possible price.\n\nWhen a buyer and a seller agree on a price, a transaction happens. If there are more people wanting to buy than there are people willing to sell at a certain price, the price must move higher to find new sellers. This is the law of supply and demand.\n\n### Key Technical Terms\nTo participate like a professional, you need to understand three core concepts:\n\n1. **The Spread**: This is the small gap between the price buyers offer (**Bid**) and the price sellers ask (**Ask**).\n   *Beginner Example:* Imagine you want to buy a used car. You offer $5,000 (Bid), but the seller wants $5,500 (Ask). The $500 difference is the \"spread.\" In financial markets, this gap is usually very small, but it always exists.\n\n2. **Liquidity**: This means the availability of orders waiting in the market.\n   *Simple Scenario:* If you want to sell 100 apples and there are 1,000 people waiting to buy apples, the market is \"liquid.\" If you want to sell 100 apples but no one is there to buy, the market is \"illiquid.\" Professional participants look for areas with high liquidity because it allows them to enter and exit easily.\n\n3. **Orders**: An order is simply an instruction to the market. A **Market Order** says \"buy/sell right now at the best available price.\" A **Limit Order** says \"buy/sell only if the price reaches this specific level.\"\n\n:::visual\ntitle: Market Order Matching\nlookFor: [\"Sellers (Ask Prices) - Waiting above the current price\", \"The Spread - The gap between Bid and Ask\", \"Buyers (Bid Prices) - Waiting below the current price\", \"Transaction - Occurs when a buyer hits the Ask or a seller hits the Bid\"]\n:::\n\n### What Price Movement Is Not\nPrice does not move because of magic patterns or \"luck.\" It moves because of **Intent**. Large amounts of capital (money) are being moved by participants with specific goals.\n\n**Common Beginner Mistake:**\nThinking that a \"pattern\" like a triangle or a head-and-shoulders *causes* the market to move. It doesn't. The pattern is just a symptom of the underlying order interaction.\n\n:::trap\n**The \"Magic Chart\" Fallacy**: Believing the chart is a living entity that \"wants\" to go somewhere. The chart is just a mirror of supply and demand.\n:::\n\n### Wrong Approach vs Better Approach\n- **Wrong**: \"The chart looks like it's going up, so I'll buy.\" (Emotional guessing)\n- **Better**: \"I observe that buyers are consistently hitting the Ask price and pushing through seller levels. This is evidence of upward intent.\" (Objective observation)\n\n:::summary\nA market is a matching engine for buyers and sellers. Price moves to find the next available area of liquidity (orders). Your job is to observe where those orders are likely clustered.\n:::`,
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
    content: `# Candles Are Records, Not Signals\n\nMost beginners look at a \"candlestick chart\" and see symbols that tell them to buy or sell. They see a \"Pin Bar\" or an \"Engulfing Candle\" and think it is a \"signal.\" This is a dangerous mistake.\n\nA candle is not a signal. A candle is a **Record**. It is a visual summary of what happened to the price over a specific period.\n\n### The Anatomy of a Candle\nEvery candle tells a four-part story:\n1. **Open**: Where the price started.\n2. **High**: The highest point reached.\n3. **Low**: The lowest point reached.\n4. **Close**: Where the price ended.\n\nThe rectangular part of the candle is called the **Body**. It shows the distance between the Open and the Close. If the Close is higher than the Open, the body is usually green (or white), showing a bullish period. If the Close is lower, the body is red (or black), showing a bearish period.\n\nTHE thin lines above and below the body are called **Wicks** (or shadows). They represent the prices that were \"tested\" but rejected by the close of the period.\n\n### Context is King\nThe most important rule in market reading is that **one candle alone is weak evidence.**\n\n**Simple Scenario:**\nImagine you see a candle with a very long wick on top. This shows that the price went high but was pushed back down. Many beginners would see this and say, \"That's a bearish signal! Sell now!\"\nBut what if the previous ten candles were all strongly bullish? In that **Context**, the long wick might just be a brief pause before the price continues higher.\n\n**What this does not mean:**\nA single candle does not \"guarantee\" a reversal. It only tells you what happened in that specific window of time.\n\n:::candle-diagram\n:::\n\n### Common Beginner Mistake: Signal-Hunting\nBeginners spend hours memorizing names of candle patterns. They think if they find a \"Morning Star,\" they have found a shortcut.\nProfessionals don't care about the names. They care about the **Story**. They ask: \"Who won this candle? Did the buyers hold their ground, or did the sellers displace them?\"\n\n### Wrong Approach vs Better Approach\n- **Wrong**: \"I see a Hammer candle. The book says a Hammer is a buy signal. I'm buying.\"\n- **Better**: \"This candle rejected a previous low and closed back inside the range. This is one piece of evidence that sellers are losing control, but I need more structural context before forming a reading.\"\n\n:::decision-rule\nTreat every candle as a journal entry of price action. Use it to build a case of evidence, never as a standalone reason to act.\n:::\n\n:::summary\nCandles record the battle between buyers and sellers. The body shows commitment, and the wicks show rejection. To read them correctly, you must always look at the candles that came before them.\n:::`,
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
    content: `# Timeframes Change the Story\n\nIn the previous module, we learned that a candle records price over a \"specific period.\" That period is determined by your **Timeframe**.\n\nA timeframe is essentially the \"zoom level\" of your chart.\n- A **1-hour (H1) chart** means each candle represents one hour of time.\n- A **15-minute (m15) chart** means each candle represents fifteen minutes.\n- A **Daily (D1) chart** means each candle represents a full day.\n\n### The Multi-Layered Story\nThe market is happening on all timeframes at once. Understanding how they interact is one of the most important skills in market reading.\n\n**Simple Scenario:**\nImagine you are looking at a map.\n- On a **Global Map** (Higher Timeframe), you see that you are traveling North.\n- On a **City Map** (Lower Timeframe), you might be turning left, right, or even going South to avoid a one-way street.\n\nIf you only look at the City Map, you might think you are lost. But if you look at the Global Map, you see that the small Southward turn is just a tiny part of a much larger Northward journey.\n\n### Higher vs. Lower Timeframes\n1. **Higher Timeframes (HTF)**: Provide the **Context**. They show the major \"narrative\" or direction. They are slower and carry more weight.\n2. **Lower Timeframes (LTF)**: Provide the **Detail**. They show the specific \"movements\" and entries. They are faster and more \"noisy\" (filled with minor ups and downs).\n\n:::skill-target\nLearn to \"zoom out\" to find the big story before you \"zoom in\" to see the details. Never form a reading based only on a lower timeframe.\n:::\n\n:::visual\ntitle: Timeframe Alignment\nlookFor: [\"HTF Anchor: The Daily/4H direction\", \"MTF Context: The 1H structural area\", \"LTF Catalyst: The 15m/5m specific behavior\", \"Alignment: When all 'maps' point in the same direction\"]\n:::\n\n### The Zoom-In Trap\nThe most common beginner mistake is spending all day staring at a 1-minute or 5-minute chart.\n\n**Why this is a mistake:**\nLower timeframes move very fast. They can show a \"strong move\" that is actually just a tiny, insignificant ripple inside a massive higher-timeframe wall. Beginners get excited by the ripple and forget about the wall.\n\n**What this does not mean:**\n\"Lower timeframes are useless.\" They are very useful for seeing exactly where a move starts, but only if you already know the higher-timeframe direction.\n\n### Wrong Approach vs Better Approach\n- **Wrong**: \"The 5-minute chart just showed a big green candle! I'm buying!\" (Ignoring the fact that the 4-hour chart is in a massive downtrend).\n- **Better**: \"The Daily chart is bullish. I will zoom in to the 15-minute chart to find an area where I can observe a structural shift in my favor.\"\n\n:::summary\nTimeframes are tools for perspective. The higher timeframe tells you *where* you are going, and the lower timeframe shows you *how* you are getting there. Always start with the big picture.\n:::`,
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
    content: `# Basic Structure: Swings, Ranges, Direction\n\nIf candles are the words, **Market Structure** is the grammar. It is the skeleton that holds everything together. Without structure, a chart is just a mess of random wiggles.\n\nStructure allows us to map the market objectively. There are three core components you must master: **Swings**, **Ranges**, and **Direction**.\n\n### 1. Swing Highs and Swing Lows\nA **Swing** is a turning point in price.\n- A **Swing High** is a peak. It is formed when price goes up, stops, and then moves down.\n- A **Swing Low** is a valley. It is formed when price goes down, stops, and then moves up.\n\nThese points are our \"anchors.\" They represent the extremes of a move where the market's intent shifted.\n\n### 2. The Range\nA **Range** is the distance between a Swing Low and a Swing High.\nThink of it as a \"box\" that price is currently playing inside.\n*Beginner Example:* If the highest price today was $100 (Swing High) and the lowest was $90 (Swing Low), the market is in a \"$10 range.\" Until price breaks out of this box, it hasn't truly changed its structural story.\n\n### 3. Direction (The Narrative)\nBy looking at how new Swings are formed, we can determine the **Directional Narrative**:\n- **Uptrend**: Price is making Higher Highs and Higher Lows. It is stepping up.\n- **Downtrend**: Price is making Lower Highs and Lower Lows. It is stepping down.\n- **Unclear / Ranging**: Price is stuck inside an old range, making messy highs and lows that don't go anywhere.\n\n:::skill-target\nIdentify the major \"anchors\" (Swings) of the current move to define the \"box\" (Range) you are working in.\n:::\n\n:::visual\ntitle: Market Structure Map\nlookFor: [\"Swing High: A confirmed peak\", \"Swing Low: A confirmed valley\", \"Dealing Range: The area between the two extremes\", \"Direction: The sequence of high/low steps\"]\n:::\n\n### What Does Not Count\nA tiny \"wiggle\" on a 5-minute chart is not a \"Major Swing High\" if you are looking at a 1-hour story.\n**What this means:**\nStructure is relative to your timeframe. A \"Major\" swing is one that led to a significant move or broke a previous structural point.\n\n### Common Beginner Mistake: Over-Mapping\nBeginners try to label every single candle as a high or a low. This creates a messy chart and a confused mind.\n*Better Approach:* Only label the obvious \"peaks\" and \"valleys\" that stand out. If you have to squint to see it, it's probably not important.\n\n### Wrong Approach vs Better Approach\n- **Wrong**: \"Price just went up 10 pips, so the trend is bullish.\" (Reactive thinking)\n- **Better**: \"Price is still inside the range of yesterday's high and low. Until it breaks one of those anchors, the structural reading is Unclear/Sideways.\" (Proactive mapping)\n\n:::summary\nMarket structure is the map of the market. By identifying Swing Highs and Swing Lows, you define the Range. By observing the sequence of these ranges, you determine the Direction.\n:::`,
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
    content: `# Evidence vs Assumption\n\nThe final foundation of market reading is the most important for your survival: **Discipline**.\n\nIn the markets, there are two ways to think: **Assumption** and **Evidence**. Most retail participants act on assumption. Lurnava learners act on evidence.\n\n### What is Assumption?\nAn assumption is believing something will happen *before* the market has actually done it. It is a form of prediction.\n- *Example*: \"I think price is going to bounce here because it's a 'round number' like $1.1000.\"\n- *Why it is dangerous*: You are hoping. You are trying to be \"smarter\" than the market. If you are wrong, you have no logical reason for why you failed.\n\n### What is Evidence?\nEvidence is an observable chart behavior that has *already happened*.\n- *Example*: \"I observe that price reached $1.1000 and then immediately showed a structural shift with strong displacement candles.\"\n- *Why it is powerful*: You are responding. You aren't guessing what *will* happen; you are observing what *is* happening.\n\n:::decision-rule\nNever form a reading based on what you \"feel\" or \"hope\" will happen. Only form a reading based on structural facts that are visible on the chart right now.\n:::\n\n### The \"Unclear\" Reading\nOne of the most valuable phrases in market reading is: **\"This is Unclear.\"**\nIf the Evidence Stack is messy—for example, if the Daily chart is bullish but the 1-hour chart is bearish and the current range is narrow—the professional answer is not to guess. The answer is to mark it as **Unclear** and wait.\n\n### Review Conditions\nA **Review Condition** is a specific event that tells you your current reading is no longer valid.\n*Simple Scenario:* You have a bullish reading because price broke a high. Your review condition might be: \"If price closes back below the Swing Low that started the move, my bullish reading is dead.\"\n\nHaving a review condition prevents you from becoming emotionally \"locked\" into a single story. It gives you an objective reason to step back and re-audit.\n\n:::visual\ntitle: The Professional Decision Board\nlookFor: [\"Evidence: Facts already on the chart\", \"Assumption: Guesses about the future (Avoid)\", \"Unclear: The state of waiting for more data\", \"Review Condition: The trigger for a new audit\"]\n:::\n\n### Wrong Approach vs Better Approach\n- **Wrong**: \"I'm buying here because I think it's cheap.\" (Assumption)\n- **Better**: \"Price has reached a Discount area of the range and has printed a bullish structural shift. I have three pieces of evidence supporting a move higher. My review condition is a close below the new swing low.\" (Evidence-Based)\n\n:::summary\nProfessional reading is about collecting evidence. If there isn't enough evidence, the reading is Unclear. Every plan must have a Review Condition to maintain objectivity.\n:::`,
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
    content: `# Forex Is Relative Strength, Not One Asset Moving\n\nWhen you enter the world of Forex (Foreign Exchange), the first thing you notice is that everything comes in pairs, like **EUR/USD** or **GBP/JPY**. Beginners often make the mistake of thinking they are buying \"the Euro\" or \"the Yen\" as if it were a single stock. In reality, you are participating in a **Relationship**.\n\n### The Tug-of-War\nImagine a game of tug-of-war between two teams. One team is the Eurozone economy, and the other is the United States economy. The price you see on the chart is the center point of that rope.\n- If the Euro team pulls harder (EUR gets stronger), the price moves up.\n- If the U.S. team pulls harder (USD gets stronger), the price moves down.\n\n**What this means:**\nPrice movement in Forex is **Relative**. A \"rally\" (upward move) in EUR/USD doesn't always mean Europe is doing great; it might just mean the U.S. is doing poorly. To read the market like a professional, you must always ask: \"Which side of the pair is actually driving this move?\"\n\n### Technical Terms: Base and Quote\nTo navigate the Forex roadway, you must understand how pairs are structured:\n\n1. **Base Currency**: This is the first currency listed in the pair.\n   *Simple Example:* In **EUR/USD**, the **EUR** is the Base. Think of this as the \"item\" you are looking at.\n2. **Quote Currency**: This is the second currency listed.\n   *Simple Example:* In **EUR/USD**, the **USD** is the Quote. Think of this as the \"money\" you use to measure the item.\n\nIf the price of EUR/USD is 1.1000, it means 1 Euro is worth 1.10 U.S. Dollars.\n\n:::visual\ntitle: The Currency Pair Relationship\nlookFor: [\"Base Currency (The Item) - First in the pair\", \"Quote Currency (The Price) - Second in the pair\", \"Relative Strength - Price rises if Base strengthens OR Quote weakens\", \"The DXY - A special index that tracks the strength of the US Dollar alone\"]\n:::\n\n### What Does Not Count\nA move in one currency pair does not guarantee a move in another, even if they share a currency. For example, EUR/USD might be going up while EUR/JPY is going down. This tells you the move is likely driven by the USD and JPY, not the EUR.\n\n### Common Beginner Mistake: Ignoring the Other Side\nMany beginners see a news headline about \"Strong U.S. Jobs Data\" and immediately expect EUR/USD to fall. They forget to check if there was even stronger news for the Euro at the same time. Professional participants look at the **DXY** (U.S. Dollar Index) to see how the Dollar is performing against *all* major currencies, not just one.\n\n### Wrong Approach vs Better Approach\n- **Wrong**: \"I like the British Pound, so I'm going to buy GBP/USD.\" (Emotional bias toward one asset).\n- **Better**: \"I observe that the US Dollar (DXY) is showing structural weakness, while the British Pound (GBP) is holding its range. GBP/USD is the most logical pair to observe for a potential upward shift.\" (Relative strength analysis).\n\n:::summary\nForex is a market of relationships. Every price move is the result of one currency becoming stronger or weaker relative to another. Success comes from identifying which currency is the 'driver' of the move.\n:::`,
    interactiveTaskType: "choice_block",
    interactiveTaskData: {
      question: "If the price of the GBP/USD currency pair is rising, which of the following is a correct structural explanation?",
      options: [
        { id: "opt1", text: "The British Pound (GBP) is gaining strength while the US Dollar (USD) remains the same or weakens.", grade: "best" },
        { id: "opt2", text: "The US Dollar (USD) is gaining strength, which always makes the pair go up.", grade: "poor" },
        { id: "opt3", text: "The British Pound is the only currency that matters in this pair.", grade: "poor" },
        { id: "opt4", text: "The price is rising because more people in London are waking up.", grade: "poor" }
      ],
      correctIndex: 0
    },
    skillLevel: "beginner", orderIndex: 7
  },
  {
    level: 0, moduleNumber: "0.8", title: "Forex Sessions and Liquidity Windows",
    objective: "Learn how the time of day changes market behavior.",
    content: `# Forex Sessions and Liquidity Windows\n\nThe Forex market is open 24 hours a day, 5 days a week. However, it does not move with the same intensity all the time. Because different parts of the world wake up and go to sleep at different times, the market goes through distinct \"cycles\" called **Sessions**.\n\n### The Three Major Sessions\n1. **The Asian Session (Tokyo)**: Usually the quietest. Price often stays in a narrow range.\n2. **The London Session**: Often the start of the \"real\" daily move. London is the world's largest Forex hub.\n3. **The New York Session**: High energy. When New York opens, many of the day's major decisions are finalized.\n\n**What this means:**\nThe \"personality\" of the market changes depending on which session is active. A strategy that works during the busy London session might fail miserably during the quiet Asian session.\n\n### Technical Terms: Session and Spread\n1. **Session**: A specific window of time when a major financial center's banks are open.\n   *Beginner Example:* If you try to buy a coffee at 3 AM, the shop is closed. If you try to trade the Australian Dollar at 3 PM in New York, the Australian banks are closed. The market is still \"open,\" but there are fewer participants.\n2. **Spread**: The difference between the buy price and the sell price.\n   *Simple Scenario:* During busy sessions, the spread is very small (cheap to trade). During quiet times or when a session is just opening, the spread can get much wider (more expensive).\n\n:::visual\ntitle: The 24-Hour Forex Cycle\nlookFor: [\"Asian Session - Low volatility, often ranging\", \"London Open - Injection of volume and new trends\", \"The Overlap - When London and NY are both open (Highest activity)\", \"NY Close - Market slows down as the day ends\"]\n:::\n\n### What to Observe: The Overlap\nThe most important window for many participants is the **London/New York Overlap**. This is a 4-hour window where the two largest financial centers are both active. This is where you see the most \"Liquidity\"—meaning there are thousands of orders being matched every second.\n\n### Common Beginner Mistake: Over-Trading Quiet Hours\nBeginners often get frustrated when the market doesn't move. They might enter a practice trade during the late Asian session and wonder why nothing is happening for 6 hours.\n*Better Approach:* Focus your practice on the first 2-3 hours of a major session. This is when the most \"Evidence\" is generated.\n\n### Wrong Approach vs Better Approach\n- **Wrong**: \"I have some free time at 8 PM on a Tuesday, so I'll start trading now.\" (Ignoring the session context).\n- **Better**: \"I observe that the London session is opening. I will check for structural shifts now because I know this is a high-liquidity window where real intent is revealed.\"\n\n:::summary\nTime is just as important as price. Use sessions to provide context for your readings. High-volume sessions provide the most reliable evidence, while quiet sessions often lead to false moves.\n:::`,
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
    content: `# Gold Is Not Just Another Currency Pair\n\nIn your trading terminal, Gold is usually listed as **XAU/USD**. While it looks like a currency pair, Gold behaves very differently. In the financial world, Gold is a **Commodity** and a **Safe-Haven Asset**.\n\n### The Multi-Driver Asset\nUnlike Forex, where you mostly compare two economies, Gold is influenced by three \"Gold’s Key Context Drivers\":\n1. **The US Dollar**: Since Gold is priced in Dollars (USD), if the Dollar gets stronger, Gold usually gets cheaper (and vice versa).\n2. **Interest Rates**: Gold doesn't pay you interest. If bank interest rates go up, people might sell Gold to put money in the bank. If rates go down, Gold becomes more attractive.\n3. **market uncertainty**: When the world is in crisis (wars, economic crashes), people run to Gold because it is a physical asset that has held value for thousands of years.\n\n**What this means:**\nGold can move violently even if nothing is happening in the currency markets. It responds to market uncertainty and \"inflation\" in a way that the Euro or Yen does not.\n\n:::visual\ntitle: The Gold Context Triangle\nlookFor: [\"USD Strength - When the Dollar rises, Gold often falls\", \"Interest Rates - Higher rates make Gold less attractive\", \"Uncertainty - Crisis events often cause sudden Gold rallies\", \"Physical Supply - Mines and central bank reserves\"]\n:::\n\n### Why This Roadway Is Different\nGold is often much more \"Volatile\" than Forex. This means the price can move much further and much faster in a single minute. For a beginner, this is both an opportunity and a major risk.\n\n**Technical Term: Volatility**\nVolatility is the \"speed\" and \"distance\" of price movement.\n*Beginner Example:* Imagine a car. A calm Forex pair is like a family sedan driving at 40 mph. Gold is like a sports car that can go from 0 to 100 mph in seconds. You need better \"brakes\" (risk management) to drive the sports car.\n\n### What Does Not Count\nA \"Gold Signal\" from a social media guru that ignores the US Dollar or Interest Rates is not a valid reading. If someone says \"Buy Gold because it's cheap,\" but the U.S. government just raised interest rates to 10%, that \"cheap\" Gold is likely going to get much cheaper.\n\n### Common Beginner Mistake: Underestimating the Speed\nBeginners often use the same position size on Gold that they use on a slow Forex pair like EUR/GBP. Because Gold moves so much faster, they end up losing their practice balance much quicker than they expected.\n\n:::summary\nGold is a unique asset driven by the Dollar, interest rates, and market uncertainty. It is highly volatile and requires a higher level of respect for structural boundaries than most currency pairs.\n:::`,
    interactiveTaskType: "choice_block",
    interactiveTaskData: {
      question: "Why does Gold often rise during times of global economic uncertainty?",
      options: [
        { id: "opt1", text: "Because it is considered a safe-haven asset that holds value when other assets are falling.", grade: "best" },
        { id: "opt2", text: "Because the price of Gold is controlled by a secret group of banks.", grade: "poor" },
        { id: "opt3", text: "Because people use Gold coins more often when the internet is down.", grade: "poor" },
        { id: "opt4", text: "Because Gold is a currency just like the Euro.", grade: "poor" }
      ],
      correctIndex: 0
    },
    skillLevel: "beginner", orderIndex: 9
  },
  {
    level: 0, moduleNumber: "0.10", title: "Gold Volatility and Review Discipline",
    objective: "Learning to manage high-speed market data.",
    content: `# Gold Volatility and Review Discipline\n\nBecause Gold (**XAU/USD**) moves so fast, it can be overwhelming for a beginner. The \"noise\" (random small wiggles) on a Gold chart can look like a major move. This is why the Gold roadway requires the highest level of **Review Discipline**.\n\n### Respecting the 'Spikes'\nGold is famous for \"Wick Spikes.\" This is when the price shoots up or down very quickly and then immediately returns to where it started.\n- In Forex, a 20-pip spike is a big deal.\n- In Gold, a 50-pip spike can happen in a few seconds.\n\n**Simple Scenario:**\nImagine you are playing a game of catch. In the Forex game, the ball is thrown at a steady pace. In the Gold game, the ball is sometimes replaced by a rocket. If you aren't paying attention, you'll miss the catch or get hurt.\n\n:::visual\ntitle: Gold Movement: Clean vs. Noisy\nlookFor: [\"Clean Structure - Price respects highs and lows with clear bodies\", \"Noisy Movement - Long wicks on both sides, 'messy' candles\", \"Displacement - Strong, full-bodied candles that show real intent\", \"Exhaustion - When wicks get longer and longer at the top of a move\"]\n:::\n\n### Technical Term: Volatility (Deep Dive)\nWe introduced volatility in the last module, but on the Gold roadway, it is your constant companion.\n**What this does not mean:**\nVolatility does not mean \"randomness.\" Even a fast-moving market follows structural rules. The difference is that you have less time to react.\n\n### Stricter Review Discipline\nBecause moves happen so fast, you cannot rely on \"feeling.\" You must have a **Pre-Flight Checklist** for every observation:\n1. **HTF Context**: Is the 4-hour Gold chart bullish or bearish?\n2. **Current Range**: Am I in the middle of a \"messy\" area or at a clear boundary?\n3. **Evidence Stack**: Do I have at least 3 reasons for my reading?\n\n### Wrong Approach vs Better Approach\n- **Wrong**: \"Gold is pumping! I'll buy now before I miss it!\" (FOMO - Fear Of Missing Out).\n- **Better**: \"I observe a high-volatility spike into a major 4-hour resistance level. I will not 'chase' the move. I will wait for a structural shift on the 15-minute chart to confirm that the spike was an exhaustion move.\"\n\n### Journal / Review Prompt\nWhenever you complete a Gold practice session in the Lab, your journal entry must include the \"Speed Factor.\" Ask yourself: \"Did I make this decision because I saw a clear structural fact, or because the fast movement made me feel panicked?\"\n\n:::summary\nHigh volatility is not a reason to move faster; it is a reason to slow down and be more clinical. Gold requires you to be an expert at identifying 'Noise' versus 'Intent.'\n:::`,
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
    content: `# Crypto Is a 24/7 Fragmented Market\n\nThe Crypto roadway (Bitcoin, Ethereum, etc.) is the youngest and most \"wild\" market. Unlike Forex and Gold, which have established banking hours and central hubs, Crypto never sleeps and lives everywhere at once.\n\n### 1. The 24/7/365 Reality\nCrypto markets are open every second of every day. There is no \"weekend close.\"\n- **What this means:** Moves can happen at 2 AM on a Sunday when most traditional participants are asleep. This can lead to \"Low Liquidity\" periods where the price moves erratically because there aren't enough orders to keep it stable.\n\n### 2. Market Fragmentation\nIf you buy a share of Apple, it is the same share everywhere. But if you trade Bitcoin, you are trading on a specific **Exchange** (like Binance, Coinbase, or Bybit). Each exchange has its own **Order Book**.\n\n**Technical Terms: Exchange and Order Book**\n1. **Exchange**: A digital platform or marketplace where people buy and sell crypto.\n   *Simple Example:* Imagine three different farmers' markets in three different towns. They all sell the same type of apples, but the price might be $1.00 in one town and $1.05 in another. In crypto, these \"towns\" are the exchanges.\n2. **Order Book**: The live list of buy and sell orders on a specific exchange.\n   *Beginner Example:* It's like a transparent waitlist. You can see exactly how many people want to buy Bitcoin at $40,000 and how many want to sell at $40,100.\n\n:::visual\ntitle: Crypto 24/7 Environment\nlookFor: [\"Weekday Volume - Often aligned with Forex session times\", \"Weekend Noise - Lower volume, prone to sudden spikes\", \"Exchange Price Gaps - Tiny differences between Binance/Coinbase/etc\", \"Aggregated Feed - A chart that combines data from many exchanges\"]\n:::\n\n### Why This Roadway Is Different\nBecause there is no central authority, Crypto is driven purely by **public reaction** and **large participant activity**. This creates a market that is highly sensitive to social media, news, and \"hype cycles.\"\n\n### Common Beginner Mistake: Weekend Chasing\nBeginners often start practicing on Saturdays because they have free time. They see a big move on Bitcoin and think a new trend has started.\n*Reality Check:* Weekend moves are often \"Fake-outs.\" Because the major banks and institutions are closed, a single large participant can move the price easily. When Monday morning comes and the big money returns, the price often snaps back to where it was on Friday.\n\n### Wrong Approach vs Better Approach\n- **Wrong**: \"Bitcoin is up 5% on a Sunday afternoon! The bull market is back!\"\n- **Better**: \"I observe an upward move during a low-liquidity weekend window. I will wait for Monday's London open to see if this move is supported by high-volume participants.\"\n\n:::summary\nCrypto is a 24/7, fragmented marketplace. It requires you to be aware of the 'time of week' and to understand that the price on your screen is just one version of the truth from a specific exchange.\n:::`,
    interactiveTaskType: "choice_block",
    interactiveTaskData: {
      question: "What is a major risk of forming a structural reading during the weekend in the crypto market?",
      options: [
        { id: "opt1", text: "The market is closed, so you cannot see any price data.", grade: "poor" },
        { id: "opt2", text: "Low liquidity means a single large participant can move the price easily, creating 'fake' moves.", grade: "best" },
        { id: "opt3", text: "The exchanges charge higher fees on Saturdays.", grade: "poor" },
        { id: "opt4", text: "Bitcoin only moves on weekdays.", grade: "poor" }
      ],
      correctIndex: 1
    },
    skillLevel: "beginner", orderIndex: 11
  },
  {
    level: 0, moduleNumber: "0.12", title: "Spot, Perpetuals, Funding, and Liquidation Pressure",
    objective: "Learning the mechanics of crypto-native market data.",
    content: `# Spot, Perpetuals, Funding, and Liquidation Pressure\n\nTo truly read a crypto chart, you need to understand that there are two different \"versions\" of the market running at the same time: the **Spot** market and the **Perpetuals** (Derivatives) market.\n\n### 1. Spot vs. Perpetuals\n- **Spot Market**: You buy the actual coin and own it.\n  *Beginner Example*: Buying a physical gold bar and putting it in a safe.\n- **Perpetuals (Perps)**: You are trading a contract that tracks the price of the coin. You don't own the coin; you are just \"betting\" on the price movement.\n  *Simple Scenario*: A perpetual is like a bet that never expires. As long as you have enough money to cover your losses, you can keep the bet open forever.\n\n### 2. Funding and Liquidation\nBecause \"Perps\" allow people to use high leverage (borrowed money), they introduce two unique forces:\n\n**Technical Terms: Funding and Liquidation**\n1. **Funding Rate**: A periodic payment between traders. If too many people are \"Long\" (betting price goes up), they have to pay the \"Shorts\" (betting price goes down) to keep the contract price aligned with the spot price.\n   *What this means:* If funding is very high, it's a sign the market is \"overheated\" with too many people guessing the same thing.\n2. **Liquidation**: When a trader's loss exceeds their available money, the exchange **forcibly closes** their position.\n   *Simple Scenario:* If you bet $100 that Bitcoin will go up, but you use 10x leverage (acting as if you have $1,000), if the price drops just 10%, you lose your $100. The exchange \"liquidates\" you to prevent them from losing money.\n\n:::visual\ntitle: Crypto Market Mechanics\nlookFor: [\"Spot Volume - Actual buying/selling for ownership\", \"Open Interest - Total number of active perp contracts\", \"Funding Rate - Shows if the market is leaning too hard in one direction\", \"Liquidation Map - Areas where many traders will be forced to close\"]\n:::\n\n### What to Observe: Liquidation Pressure (Supporting Context)\nIn crypto, price often moves toward areas where many people are about to be liquidated. This creates a \"Liquidation Cascade.\"\n*Think of it this way:* If 1,000 people are forced to sell at the same price, that massive wave of selling will push the price even lower, forcing even more people to sell.\n\n### Wrong Approach vs Better Approach\n- **Wrong**: \"I'm buying Bitcoin because the chart looks green.\" (Ignoring market mechanics).\n- **Better**: \"I observe that the Funding Rate is extremely high and price is approaching a major structural low. This provides supporting context for a high risk of a 'Long Liquidation' event. I will wait for the potential cascade to finish before looking for a structural shift.\"\n\n:::summary\nCrypto is driven by the interaction between spot owners and perpetual speculators. Funding rates and liquidations are 'Supporting Context' that tell you when the market is emotionally over-extended.\n:::`,
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
    content: `# How to Practice Without Guessing\n\nMost beginners enter a \"trading simulator\" or \"the Lab\" with the goal of making a virtual profit. They want to see their account balance go up. This is a fundamental mistake. At Lurnava, simulation is not for proving you can make money; it is for **Practicing your Reasoning**.\n\n### The Purpose of Simulation\nIn the real world, a pilot uses a flight simulator to practice what to do when an engine fails. They don't do it to \"win\" a game; they do it so that when the real event happens, their response is automatic and based on logic, not panic.\n\n**What this means:**\nYour goal in the Lab is to find a high-quality \"Evidence Stack.\" If you make a decision and the market goes against you, but your reasoning was sound and based on objective facts, that is a **Successful Practice Session**. If you guess the direction and \"win,\" but you had no logical reason, that is a **Failed Practice Session**.\n\n### Technical Terms: Practice Action and Simulation\n1. **Practice Action**: Any decision you make in the Lab (like marking a structural shift or simulating an entry).\n   *Simple Example:* Before you click a button, you must be able to say: \"I am taking this action because I observe evidence A, B, and C.\" If you can't say that, you are guessing.\n2. **Simulation**: A controlled environment (The Lab) using historical data where you can practice without financial risk.\n\n:::visual\ntitle: The Professional Practice Checklist\nlookFor: [\"1. Observation - What is the current roadway and structure?\", \"2. Reason - What specific evidence supports a move?\", \"3. Review Condition - At what point is my logic proven wrong?\", \"4. Note - Have I documented this thinking in the Journal?\"]\n:::\n\n### What to Observe: The \"Unclear\" State\nThe hardest thing to practice is **Doing Nothing**. If the chart looks like a mess of random wiggles and you can't find a clear range or structure, your \"Practice Action\" should be to mark it as **Unclear** and move to the next period.\n\n**What this does not mean:**\n\"Practicing\" does not mean clicking buttons as fast as possible. It means waiting for the market to provide a clear story.\n\n### Common Beginner Mistake: Outcome Bias\nBeginners judge themselves by the result of the trade. If they \"win,\" they think they are geniuses. If they \"lose,\" they think the market is rigged.\n*Better Approach:* Judge yourself by the **Quality of your Logic**. Did you follow your structural rules? Did you ignore the \"noise\"?\n\n### Wrong Approach vs Better Approach\n- **Wrong**: \"I think it's going up, so I'll click buy and hope for the best.\" (Gambling).\n- **Better**: \"I observe that price has broken a major swing high on the 1-hour chart and is now returning to a discount area. I will simulate an entry here with a review condition below the recent swing low.\" (Professional reasoning).\n\n:::summary\nSimulation is a tool for building cognitive discipline. Every action must have a reason, and every reason must be based on observable evidence. Success is measured by the consistency of your process, not the outcome of a single move.\n:::`,
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
    content: `# How to Write a Useful Practice Note\n\nIn the Lurnava system, the **Journal** is your most powerful tool. However, a journal is only as good as the notes you put into it. Most beginners write notes that are useless for learning. They write things like \"I bought here and I was right\" or \"I lost money on this one.\"\n\n### The Note as a Mirror\nA useful practice note is a record of your **Thinking Process** at the time you made the decision. It allows you to look back a week later and see exactly where your logic was strong and where it was weak.\n\n**What this means:**\nYou are documenting the **Evidence Stack** you saw before the result happened. This prevents you from \"rewriting history\" in your mind after you see what the market did.\n\n### Technical Terms: Journal Review and Review Condition\n1. **Journal Review**: The act of looking back at your past notes to find patterns in your thinking.\n   *Simple Example:* You might notice that every time you buy during a \"noisy\" Gold spike, you end up with a poor result. Without a note, you would forget this. With a note, you have a lesson.\n2. **Review Condition**: A specific price level or event that tells you your original idea is no longer valid.\n   *Simple Scenario:* \"I am bullish as long as price stays above $1.1000. If it closes below that, I must re-audit the chart.\"\n\n:::note-comparison\n:::\n\n### What Does Not Count\nA \"Diary\" entry about how you feel (\"I feel nervous about this trade\") is not a structural practice note. While feelings are important, your primary focus must be on **Objective Facts**.\n\n### Common Beginner Mistake: Vague Descriptions\nUsing words like \"seems,\" \"looks like,\" or \"maybe\" in your notes.\n*Better Approach:* Use definitive structural terms. \"Price **broke** the high,\" \"Price **rejected** the level,\" \"The range is **defined** by X and Y.\"\n\n### Wrong Approach vs Better Approach\n- **Wrong**: \"Bought Bitcoin because it's cheap. Hope it goes to 100k.\" (Weak note).\n- **Better**: \"Roadway: Crypto. Context: Bullish HTF. Action: Simulated buy at 65k following a 15m structural shift. Evidence: High spot volume. Review Condition: Break of 64.2k swing low.\" (Strong note).\n\n:::summary\nYour journal is your personal data set. By writing detailed, structural notes, you turn every practice session into a repeatable lesson. Strong notes lead to strong skills.\n:::`,
    interactiveTaskType: "choice_block",
    interactiveTaskData: {
      question: "Which of the following is the strongest example of a professional practice note?",
      options: [
        { id: "opt1", text: "I have a feeling this is a good buy, so I'm going in with a big position.", grade: "poor" },
        { id: "opt2", text: "Bought EUR/USD. The chart looks like a head and shoulders pattern from the book.", grade: "poor" },
        { id: "opt3", text: "Roadway: FX. Context: H4 Bullish. Evidence: 15m structural break + London Open volume. Review Condition: Close below 1.0850.", grade: "best" },
        { id: "opt4", text: "I lost this trade but I'm sure it will work next time if I just wait longer.", grade: "poor" }
      ],
      correctIndex: 2
    },
    skillLevel: "beginner", orderIndex: 14
  },
  {
    level: 0, moduleNumber: "0.15", title: "Level 0 Foundation Mission",
    objective: "Synthesizing all Level 0 concepts into a single workflow.",
    content: `# Level 0 Foundation Mission\n\nYou have reached the end of the **Market Reading Foundations**. You have learned that the market is a matching engine, that candles are records, and that structure is the skeleton of everything we do. You have also seen how different roadways (Forex, Gold, Crypto) have their own unique \"personalities.\"\n\n### The Lurnava Synthesis\nBefore you move on to Level 1, you must be able to combine these ideas into a single, disciplined process. This is the **Lurnava Workflow**:\n\n1. **Identify the Roadway Context**: Are you in the 24/5 FX market (Relative Strength), the high-speed Gold market (Macro/Volatility), or the 24/7 Crypto market (Fragmentation/Perps)? Each requires a different level of patience.\n2. **Map the Basic Structure**: Identify the most recent Swing High and Swing Low. Define the \"Box\" (Range) that price is currently playing in.\n3. **Separate Evidence from Assumption**: List the objective facts. \"Price is in a discount area\" is Evidence. \"Price will go up from here\" is an Assumption.\n4. **Choose the Review Area**: Identify the structural zone where the next meaningful interaction will happen. This is your observation point.\n5. **Define the Review Condition**: At what point does your current reading become \"Unclear\"?\n\n:::visual\ntitle: Level 0 Foundation Map\nlookFor: [\"Roadway Context - Applied constraints\", \"Range Boundaries - Mapping the anchors\", \"Evidence Stack - Listing the facts\", \"Review Area - Placing the observation marker\", \"Review Condition - The logic reset trigger\"]\n:::\n\n### Mission Objectives\nTo pass the Level 0 mission, you must demonstrate that you can identify a **Review Area** based on structural logic. You are not trying to predict a winner; you are trying to identify where the market's next move will reveal its intent.\n\n:::decision-rule\nProfessional skill is not about being right about every move. It is about having a repeatable workflow that keeps you objective regardless of the market's behavior.\n:::\n\n:::summary\nYou are now ready for the capstone mission. Apply the Level 0 workflow to identify the Review Area on the mission chart. Once complete, document your reasoning in your Journal to finish the Foundations phase.\n:::`,
    interactiveTaskType: "choice_block",
    interactiveTaskData: {
      question: "What is the primary goal of the Level 0 Foundation Mission?",
      options: [
        { id: "opt1", text: "To make a high simulated profit and win a prize.", grade: "poor" },
        { id: "opt2", text: "To demonstrate that you can identify a Review Area using objective structural logic.", grade: "best" },
        { id: "opt3", text: "To guess correctly which way the market will move next.", grade: "poor" },
        { id: "opt4", text: "To complete as many practice trades as possible in 10 minutes.", grade: "poor" }
      ],
      correctIndex: 1
    },
    skillLevel: "beginner", orderIndex: 15
  }
];

const KNOWLEDGE_TEST = {
  level: 0,
  title: "Level 0 Market Reading Foundations Test",
  questionsPerAttempt: 15,
  passThreshold: 80,
  timeLimitMin: 20,
  questions: [
    {
      id: "q0_1", topic: "Lurnava Learning Loop", difficulty: "easy",
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
      id: "q0_2", topic: "Market Interaction", difficulty: "medium",
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
      id: "q0_3", topic: "Candle Context", difficulty: "medium",
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
      id: "q0_4", topic: "Timeframe Context", difficulty: "hard",
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
      id: "q0_5", topic: "Structure Basics", difficulty: "medium",
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
      id: "q0_6", topic: "Evidence vs Assumption", difficulty: "medium",
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
      id: "q0_7", topic: "Forex Relative Strength", difficulty: "medium",
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
      id: "q0_8", topic: "Forex Sessions", difficulty: "medium",
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
      id: "q0_9", topic: "Gold Context Drivers", difficulty: "hard",
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
      id: "q0_10", topic: "Gold Volatility", difficulty: "medium",
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
      id: "q0_11", topic: "Crypto Fragmentation", difficulty: "medium",
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
      id: "q0_12", topic: "Crypto Mechanics", difficulty: "hard",
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
      id: "q0_13", topic: "Simulation Discipline", difficulty: "easy",
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
      id: "q0_14", topic: "Journal Quality", difficulty: "easy",
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
      id: "q0_15", topic: "Foundation Synthesis", difficulty: "medium",
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
};

const MISSION = {
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
};

async function main() {
  const isDryRun = process.env.DRY_RUN !== "false";

  if (process.env.NODE_ENV === "production" && !isDryRun) {
    console.error("CRITICAL SAFETY BLOCK: Direct mutation in production NODE_ENV is locked.");
    process.exit(1);
  }

  const pool = new Pool({ 
    connectionString: process.env.DIRECT_URL || process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });

  console.log("\n--- LEVEL 0 PRODUCTION PATCH START ---");
  console.log(`Dry Run Mode: ${isDryRun}`);
  console.log(`Target Host: ${process.env.DB_HOST || "Unknown"}\n`);

  try {
    let updateCount = 0;
    let createCount = 0;

    // 1. Sync CourseModules
    console.log("Processing CourseModules (Level 0)...");
    for (const mod of MODULES) {
      const existing = await (prisma as any).courseModule.findUnique({
        where: { level_moduleNumber: { level: 0, moduleNumber: mod.moduleNumber } }
      });

      if (existing) {
        updateCount++;
        if (!isDryRun) {
          await (prisma as any).courseModule.update({
            where: { id: existing.id },
            data: { ...mod, marketTrack: "core" }
          });
        }
        console.log(`[${isDryRun ? "DRY" : "LIVE"}] WOULD UPDATE: Module ${mod.moduleNumber}`);
      } else {
        createCount++;
        if (!isDryRun) {
          await (prisma as any).courseModule.create({
            data: { ...mod, marketTrack: "core" }
          });
        }
        console.log(`[${isDryRun ? "DRY" : "LIVE"}] WOULD CREATE: Module ${mod.moduleNumber}`);
      }
    }

    // 2. Sync KnowledgeTest
    console.log("\nProcessing KnowledgeTest (Level 0)...");
    const existingTest = await (prisma as any).knowledgeTest.findUnique({
      where: { level: 0 }
    });
    if (existingTest) {
      if (!isDryRun) {
        await (prisma as any).knowledgeTest.update({
          where: { id: existingTest.id },
          data: KNOWLEDGE_TEST as any
        });
      }
      console.log(`[${isDryRun ? "DRY" : "LIVE"}] WOULD UPDATE: KnowledgeTest Level 0`);
    } else {
      if (!isDryRun) {
        await (prisma as any).knowledgeTest.create({
          data: KNOWLEDGE_TEST as any
        });
      }
      console.log(`[${isDryRun ? "DRY" : "LIVE"}] WOULD CREATE: KnowledgeTest Level 0`);
    }

    // 3. Sync TrainingScenario (Mission)
    console.log("\nProcessing TrainingScenario (Level 0 Mission)...");
    const existingMission = await (prisma as any).trainingScenario.findUnique({
      where: { slug: MISSION.slug }
    });
    let scenarioId = existingMission?.id;

    if (existingMission) {
      if (!isDryRun) {
        await (prisma as any).trainingScenario.update({
          where: { id: existingMission.id },
          data: MISSION as any
        });
      }
      console.log(`[${isDryRun ? "DRY" : "LIVE"}] WOULD UPDATE: TrainingScenario ${MISSION.slug}`);
    } else {
      if (!isDryRun) {
        const created = await (prisma as any).trainingScenario.create({
          data: MISSION as any
        });
        scenarioId = created.id;
      }
      console.log(`[${isDryRun ? "DRY" : "LIVE"}] WOULD CREATE: TrainingScenario ${MISSION.slug}`);
    }

    // 4. Sync ModuleScenarioLink
    console.log("\nProcessing ModuleScenarioLink (0.15 -> Mission)...");
    const targetModule = await (prisma as any).courseModule.findFirst({
      where: { moduleNumber: "0.15", level: 0 }
    });

    if (targetModule && scenarioId) {
      const existingLink = await (prisma as any).moduleScenarioLink.findUnique({
        where: { moduleId_scenarioId: { moduleId: targetModule.id, scenarioId } }
      });

      if (existingLink) {
        if (!isDryRun) {
          await (prisma as any).moduleScenarioLink.update({
            where: { id: existingLink.id },
            data: { requiredForProgress: true, sortOrder: 1 }
          });
        }
        console.log(`[${isDryRun ? "DRY" : "LIVE"}] WOULD UPDATE: ModuleScenarioLink`);
      } else {
        if (!isDryRun) {
          await (prisma as any).moduleScenarioLink.create({
            data: {
              moduleId: targetModule.id,
              scenarioId,
              requiredForProgress: true,
              sortOrder: 1
            }
          });
        }
        console.log(`[${isDryRun ? "DRY" : "LIVE"}] WOULD CREATE: ModuleScenarioLink`);
      }
    } else {
      console.log("[INFO] Skipping Link: Module 0.15 or Scenario ID not available in dry-run/current state.");
    }

    console.log("\n--- PATCH SUMMARY ---");
    console.log(`CourseModules: ${updateCount} updates, ${createCount} creates`);
    console.log(`KnowledgeTest: ${existingTest ? 1 : 0} updates, ${existingTest ? 0 : 1} creates`);
    console.log(`TrainingScenario: ${existingMission ? 1 : 0} updates, ${existingMission ? 0 : 1} creates`);
    console.log(`Rows Deleted: 0`);
    console.log(`Protected Tables Touched: 0`);
    console.log(`Level 1+ Touched: 0`);
    
    if (isDryRun) {
      console.log("\nDRY RUN COMPLETE: No data was changed.");
    } else {
      console.log("\nLIVE SYNC COMPLETE: Database updated.");
    }

  } catch (error) {
    console.error("\nPATCH FAILED:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

main();
