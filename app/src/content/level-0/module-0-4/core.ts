import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "visual_intro",
    "title": "Candle Anatomy",
    "visualKey": "candle-anatomy-board",
    "label": "Visual First",
    "body": "A candle is a time-boxed record. It shows where price opened, how high and low it travelled, and where it closed during that period. It is evidence of participant commitment, not a direct instruction to act.",
    "context": {
      "keyTerms": [
        {
          "term": "Open",
          "definition": "The price when the time period started."
        },
        {
          "term": "High",
          "definition": "The highest price reached during the period."
        },
        {
          "term": "Low",
          "definition": "The lowest price reached during the period."
        },
        {
          "term": "Close",
          "definition": "The price when the time period ended."
        },
        {
          "term": "Body",
          "definition": "The area between Open and Close; shows the net result of the period."
        },
        {
          "term": "Wick",
          "definition": "The lines showing prices that were tested but rejected."
        },
        {
          "term": "Timeframe",
          "definition": "The specific duration one candle represents (e.g., 1 hour)."
        }
      ],
      "whyThisMatters": "Every part of the candle answers a question. The body shows who 'won' the period. The wicks show where one side tried to push but failed. Without this anatomy, you are just looking at colors.",
      "realLifeExample": "A 5-minute candle on EUR/USD (Euro vs. US Dollar). If EUR/USD opens at 1.1000, moves up to 1.1012, drops to 1.0998, and closes at 1.1009, that single candle records the full journey of that 5-minute period.",
      "commonMistake": "Thinking one candle is a prediction. Many beginners see a green candle and instantly think 'buy.' But a candle first shows what already happened inside one period — not a guaranteed next move.",
      "quickNote": "A candle records a period of market activity."
    }
  },
  {
    "type": "concept",
    "title": "Candles Are Records, Not Signals",
    "visualKey": "record-vs-signal-board",
    "label": "Core Principle",
    "body": "A candle does not give an instruction. It records movement. A Lurnava learner does not ask, “What does this candle tell me to do?” They ask, “What market behavior did this candle record?”",
    "context": {
      "keyTerms": [
        {
          "term": "Record",
          "definition": "An objective history of price action during a set window."
        },
        {
          "term": "Signal Trap",
          "definition": "The mistake of treating a candle shape as an automatic buy/sell instruction."
        },
        {
          "term": "Market Behavior",
          "definition": "The collective interaction of buyers and sellers recorded by price."
        }
      ],
      "whyThisMatters": "If you treat candles as magic signals, you will lose discipline. If you treat them as records, you gain clarity.",
      "realLifeExample": "A fast move after a news release. When a strong candle appears right after major news, the candle is recording aggressive buying or selling during that moment. It is evidence of behavior, not magic.",
      "commonMistake": "Treating candles like signal stickers. Beginners often label a candle 'bullish' or 'bearish' and stop thinking. A candle should be read as a market record, not as a one-word decision tool.",
      "quickNote": "The candle is the record. The reading comes from context."
    }
  },
  {
    "type": "concept",
    "title": "Body, Wick, and Close Location",
    "visualKey": "candle-evidence-board",
    "label": "Candle Mechanics",
    "body": "The body records net commitment. Wicks record rejected pressure. The close location shows where the balance of power shifted at the final moment of the record.",
    "context": {
      "keyTerms": [
        {
          "term": "Rejection",
          "definition": "When price reaches a level but cannot be maintained, leaving a wick."
        },
        {
          "term": "Commitment",
          "definition": "When price holds a direction and closes there, creating a body."
        },
        {
          "term": "Balance of Power",
          "definition": "The net result of buyer vs. seller interaction at the close."
        }
      ],
      "whyThisMatters": "Color is a shortcut. Anatomy is the full story.",
      "realLifeExample": "The 'Flash Rejection'. In high-speed markets like Gold, you might see price spike up 40 pips (which are the smallest price fractions in Forex) and then immediately crash back down. The resulting long upper wick is the record of that failed attempt to move higher.",
      "commonMistake": "Ignoring the close location. A candle can be green but close near its low after a big rejection. If you only look at the color, you miss the fact that the sellers actually took control at the end of the period.",
      "quickNote": "Color is not enough. Read the whole record."
    }
  },
  {
    "type": "concept",
    "title": "Decoding Candlestick Components",
    "label": "Core Track",
    "body": "### Candlestick Components: Dissecting Price Action\nEach candlestick is composed of distinct elements that convey price action and market sentiment. This card teaches **how to analyze the body and wicks of a candlestick**.\n\n* **Body Analysis**: The body of the candlestick represents the price range between the open and close. A long body indicates strong buying or selling pressure, while a short body suggests indecision.\n* **Wick Interpretation**: The wicks, or shadows, indicate price extremes within the timeframe. A long upper wick may signal selling pressure after a rally, while a long lower wick can indicate buying interest after a decline.\n* **Color Significance**: The color of the candlestick (typically green for bullish and red for bearish) provides immediate visual cues about market sentiment, but must be analyzed in conjunction with body size and wick length.",
    "context": {
      "keyTerms": [
        {
          "term": "Candlestick Body",
          "definition": "The area between the open and close prices of a candlestick."
        },
        {
          "term": "Wick",
          "definition": "The lines extending from the body representing price extremes."
        }
      ],
      "whyThisMatters": "Dissecting candlestick components allows traders to gauge market sentiment and potential price movements more accurately.",
      "realLifeExample": "On a daily chart of AAPL, a candlestick with a large green body and a short upper wick indicates strong buying interest, closing at $150 after opening at $145, with a high of $152 and a low of $144.",
      "commonMistake": "Traders often misinterpret wick lengths without considering the context of the body size and overall market conditions.",
      "quickNote": "Understanding body and wick dynamics is crucial for accurate price action analysis.",
      "mentorText": "Look closely at each candlestick. The body tells you how much the price moved, while the wicks show you where the price tried to go. Together, they provide a complete picture of market sentiment.",
      "mentorAnalogy": "Think of a candlestick as a sports play; the body is the main action, while the wicks are the attempts to score that didn't succeed, reflecting the struggle between opposing teams."
    },
    "taskData": null,
    "visualKey": "candle-anatomy"
  },
  {
    "type": "mission_brief",
    "title": "Understanding Candlestick Footprints",
    "label": "Core Track",
    "body": "### Candlestick Anatomy: OHLC Footprints\nCandlestick patterns encapsulate critical market data through their Open, High, Low, and Close (OHLC) values. This card focuses on **how these values act as algorithmic footprints reflecting market behavior**.\n\n* **Open and Close**: The open price indicates the starting point of a trading session, while the close reflects the final price at session end. Analyzing the relationship between these two can reveal bullish or bearish sentiment.\n* **High and Low**: The high and low prices represent the extremes of market movement within the timeframe. A candlestick with a long wick indicates volatility and potential reversal points.\n* **Market Behavior Reflection**: The combination of OHLC values provides insights into institutional trading patterns, as large players often manipulate price levels to achieve specific objectives.",
    "context": {
      "keyTerms": [
        {
          "term": "OHLC",
          "definition": "Open, High, Low, and Close prices of a candlestick."
        }
      ],
      "whyThisMatters": "Understanding OHLC values allows traders to interpret market sentiment and identify potential reversals or continuations in price action.",
      "realLifeExample": "On a 1-hour chart of EURUSD, a candlestick opens at 1.1000, reaches a high of 1.1050, a low of 1.0950, and closes at 1.1020, indicating bullish pressure despite volatility.",
      "commonMistake": "Traders often overlook the significance of the open and close prices, focusing solely on the high and low.",
      "quickNote": "OHLC values are essential for analyzing market behavior and institutional strategies.",
      "mentorText": "When you look at a candlestick, think of it as a snapshot of market activity. The open tells you where the session began, and the close shows where it ended. Pay attention to the extremes, as they reveal the battle between buyers and sellers.",
      "mentorAnalogy": "Consider a candlestick as a report card for a trading session, where the open is the starting grade, the close is the final score, and the high and low are the peaks and valleys of performance."
    },
    "taskData": null,
    "visualKey": "chart-basics-intro"
  },
  {
    "type": "concept",
    "title": "OHLC as Timeframe Indicators",
    "label": "Core Track",
    "body": "### OHLC Values: Timeframe Insights\nThe Open, High, Low, and Close values serve as critical indicators of price delivery across various timeframes. This card explores **how OHLC values reveal institutional trading strategies and market dynamics**.\n\n* **Timeframe Relevance**: Each timeframe provides a different perspective on market behavior. A daily OHLC may indicate long-term trends, while a 5-minute OHLC reveals short-term volatility.\n* **Institutional Strategy Reflection**: Large institutions often set key levels based on OHLC values. A breakout above the previous day's high can trigger significant buying interest from institutional players.\n* **Price Delivery Analysis**: Comparing OHLC values across multiple timeframes helps identify convergence or divergence, indicating potential market reversals or continuations based on institutional activity.",
    "context": {
      "keyTerms": [
        {
          "term": "Timeframe",
          "definition": "The duration over which price action is analyzed."
        }
      ],
      "whyThisMatters": "Recognizing how OHLC values function across timeframes enables traders to align their strategies with institutional movements and market trends.",
      "realLifeExample": "On a 4-hour chart of GBPUSD, the OHLC values show a close at 1.3600 after a high of 1.3650 and a low of 1.3550, indicating potential resistance at 1.3650 for the next trading session.",
      "commonMistake": "Traders frequently analyze OHLC values in isolation without considering the implications of different timeframes.",
      "quickNote": "OHLC values across timeframes provide insights into institutional trading behavior.",
      "mentorText": "When you analyze OHLC values, think of them as clues left by institutional traders. They set the stage for the next moves, and understanding these clues can give you an edge.",
      "mentorAnalogy": "Consider OHLC values like a series of weather reports; each timeframe provides a snapshot of conditions, helping you decide whether to carry an umbrella or wear sunglasses."
    },
    "taskData": null,
    "visualKey": "ohlc-delivery"
  },
  {
    "type": "concept",
    "title": "Timeframes as Institutional Intervals",
    "label": "Core Track",
    "body": "### Timeframes: Institutional Perspectives\nTimeframes represent intervals that reflect institutional trading strategies rather than mere retail sentiment. This card emphasizes **the importance of understanding timeframes for effective price delivery and analysis**.\n\n* **Institutional Time Buckets**: Different timeframes correspond to specific institutional trading strategies. For instance, daily charts are often used for swing trading, while 1-minute charts cater to scalpers.\n* **Impact on Price Delivery**: Price movements on higher timeframes tend to be more significant, as they reflect larger capital flows and institutional decisions. A breakout on a daily chart carries more weight than one on a 5-minute chart.\n* **Inter-timeframe Analysis**: Analyzing price action across multiple timeframes allows traders to identify key levels and trends, enhancing their ability to make informed trading decisions based on institutional behavior.",
    "context": {
      "keyTerms": [
        {
          "term": "Inter-timeframe Analysis",
          "definition": "The practice of analyzing price action across multiple timeframes."
        }
      ],
      "whyThisMatters": "Understanding timeframes enables traders to align their strategies with institutional trading patterns, improving decision-making and trade execution.",
      "realLifeExample": "On a weekly chart of USDJPY, a breakout above 110.00 indicates strong bullish sentiment, while a 15-minute chart shows consolidation at that level, suggesting potential entry points for day traders.",
      "commonMistake": "Traders often focus solely on lower timeframes, neglecting the broader context provided by higher timeframes.",
      "quickNote": "Timeframes are critical for aligning trading strategies with institutional activity.",
      "mentorText": "When you look at timeframes, think of them as different lenses through which to view the market. Each lens reveals unique insights that can guide your trading decisions.",
      "mentorAnalogy": "Imagine timeframes as different camera angles in a film; each angle provides a unique perspective on the same scene, helping you understand the full story of market movement."
    },
    "taskData": null,
    "visualKey": "timeframe-intro"
  },
  {
    "type": "concept",
    "title": "Context Changes the Reading",
    "visualKey": "context-logic-board",
    "label": "Context Logic",
    "body": "The same candle shape can mean different things depending on where it forms. A long wick in the middle of a range is just noise; the same wick at a major resistance level is significant evidence.",
    "context": {
      "keyTerms": [
        {
          "term": "Location",
          "definition": "Where a candle forms relative to previous price structure."
        },
        {
          "term": "Structure",
          "definition": "The 'landscape' of the market (ranges, trends, levels)."
        },
        {
          "term": "Contextual Weight",
          "definition": "How much importance is given to a record based on its surroundings."
        }
      ],
      "whyThisMatters": "Pattern memorization is dangerous without location. Context is the judge.",
      "realLifeExample": "The 'Resistance Wick'. A rejection wick that forms right at a major historical high has much more 'contextual weight' than a random wick that forms in the middle of a messy sideways range.",
      "commonMistake": "Reading candles in a vacuum. A hammer candle at the bottom of a trend is evidence of a potential shift. A hammer candle in the middle of a consolidation is often just noise. Never read the record without checking the location.",
      "quickNote": "Same shape. Different context. Different reading."
    }
  },
  {
    "type": "concept",
    "title": "Price Delivery Dynamics",
    "label": "Core Track",
    "body": "### Price Delivery: Institutional vs. Retail Dynamics\nPrice delivery reflects the balance of power between institutional and retail traders. This card analyzes **how candlestick formations can indicate shifts in market control**.\n\n* **Bullish/Bearish Engulfing Patterns**: A bullish engulfing pattern indicates a potential shift to institutional buying dominance, while a bearish engulfing suggests retail selling pressure may be losing control. For example, if EURUSD forms a bullish engulfing at 1.1000 after a downtrend, it signals institutional interest.\n* **Doji Candlesticks**: A doji indicates indecision in the market, often occurring at key support or resistance levels. If a doji appears at 1.1500 on GBPUSD after a strong bullish trend, it may suggest that institutions are reevaluating their positions.\n* **Volume Confirmation**: Analyze volume spikes accompanying candlestick formations. A bullish candlestick with increased volume suggests institutional support, while a bearish candlestick with low volume may indicate retail-driven moves.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Engulfing Pattern",
          "definition": "A candlestick pattern where a larger candle engulfs the previous candle, indicating a potential reversal."
        },
        {
          "term": "Doji",
          "definition": "A candlestick with a small body and long wicks, indicating market indecision."
        },
        {
          "term": "Volume Spike",
          "definition": "A significant increase in trading volume, often indicating strong market interest."
        }
      ],
      "whyThisMatters": "Understanding price delivery dynamics allows traders to identify potential shifts in market control, enhancing decision-making.",
      "realLifeExample": "On July 15, 2023, EURUSD formed a bullish engulfing pattern at 1.1000 with a volume spike of 150% compared to the previous day, indicating institutional buying interest.",
      "commonMistake": "Traders often misinterpret doji candles as definitive signals rather than indicators of indecision.",
      "quickNote": "Candlestick formations reveal the balance of power between institutional and retail traders.",
      "mentorText": "When you see a bullish engulfing pattern, think of it as institutions stepping in to take control. If the volume supports it, you have a strong signal of a potential trend reversal.",
      "mentorAnalogy": "Consider the market like a tug-of-war match; candlestick patterns show which side is gaining strength and control."
    },
    "taskData": null,
    "visualKey": "chart-basics-debrief"
  },
  {
    "type": "concept",
    "title": "Institutional Timing and Market Moves",
    "label": "Core Track",
    "body": "### Institutional Timing: Analyzing Market Moves\nUnderstanding the timing of institutional trades is critical for anticipating market movements. This card investigates **how candlestick patterns can serve as indicators of institutional activity**.\n\n* **Opening Range Breakouts**: Identify the first hour's high and low as key levels. A breakout above the high with a strong bullish candle suggests institutional buying, while a breakout below indicates selling. For instance, if the S&P 500 opens at 4,000 and breaks above 4,020 with a large green candle, it signals institutional buying.\n* **End-of-Day Patterns**: Pay attention to candlestick formations at market close. A strong close above the opening price often indicates institutional confidence. If NASDAQ closes above its opening price after a volatile day, it reflects institutional accumulation.\n* **News Reaction Candles**: Analyze candlestick patterns following major news releases. A rapid bullish candle after a positive employment report can indicate institutional buying, while a bearish candle may suggest profit-taking or selling pressure.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Opening Range",
          "definition": "The high and low of the first hour of trading, used as key levels for breakouts."
        },
        {
          "term": "End-of-Day Close",
          "definition": "The final price of an asset at the end of the trading session, reflecting market sentiment."
        },
        {
          "term": "News Reaction Candle",
          "definition": "A candlestick formed in response to significant news events, indicating market sentiment."
        }
      ],
      "whyThisMatters": "Recognizing institutional timing enhances the ability to anticipate market movements and align trading strategies accordingly.",
      "realLifeExample": "On August 5, 2023, after a positive non-farm payroll report, the S&P 500 formed a bullish candle that closed 1.5% higher, indicating strong institutional buying interest.",
      "commonMistake": "Traders often overlook the significance of the opening range, missing potential breakout opportunities.",
      "quickNote": "Institutional timing can reveal potential market movements through candlestick patterns.",
      "mentorText": "When you see a breakout from the opening range, consider it a signal that institutions are making their move. Timing is everything in this game.",
      "mentorAnalogy": "Think of institutional timing like a conductor leading an orchestra; their cues dictate the market's rhythm and direction."
    },
    "taskData": null,
    "visualKey": "chart-basics-intro"
  },
  {
    "type": "concept",
    "title": "Recognizing Candlestick Patterns",
    "label": "Core Track",
    "body": "### Candlestick Patterns: Implications for Price Movements\nIdentifying candlestick patterns is essential for understanding future price movements. This card focuses on **how these patterns reflect institutional trading strategies**.\n\n* **Hammer and Shooting Star**: A hammer at the bottom of a downtrend indicates potential reversal, while a shooting star at the top signals a bearish reversal. For example, if USDJPY forms a hammer at 110.00, it suggests institutional buying interest.\n* **Three White Soldiers and Three Black Crows**: A sequence of three bullish candles indicates strong buying pressure, while three bearish candles suggest selling dominance. If AUDCAD closes with three white soldiers, it reflects institutional confidence in upward momentum.\n* **Morning and Evening Stars**: These patterns indicate potential reversals. A morning star after a downtrend suggests institutional buying, while an evening star after an uptrend indicates selling pressure from institutions.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Hammer",
          "definition": "A candlestick pattern with a small body and long lower wick, indicating potential reversal."
        },
        {
          "term": "Shooting Star",
          "definition": "A candlestick pattern with a small body and long upper wick, indicating potential bearish reversal."
        },
        {
          "term": "Three White Soldiers",
          "definition": "A sequence of three consecutive bullish candles, indicating strong buying pressure."
        }
      ],
      "whyThisMatters": "Recognizing candlestick patterns allows traders to anticipate potential market reversals and align their strategies with institutional behavior.",
      "realLifeExample": "On September 10, 2023, GBPUSD formed a hammer at 1.2500 after a downtrend, leading to a subsequent rally of 150 pips, indicating institutional buying interest.",
      "commonMistake": "Traders often misinterpret single candlestick patterns without considering the overall market context.",
      "quickNote": "Candlestick patterns provide insights into potential future price movements based on institutional strategies.",
      "mentorText": "When you spot a hammer, think of it as a signal that institutions are ready to step in. Always consider the context before acting on it.",
      "mentorAnalogy": "Recognizing candlestick patterns is like reading the signals of a traffic light; they guide your decisions in the market."
    },
    "taskData": null,
    "visualKey": "candle-anatomy"
  },
  {
    "type": "concept",
    "title": "Many Candle Forms Exist",
    "visualKey": "candle-family-preview",
    "label": "Pattern Preview",
    "body": "There are dozens of named candle patterns. You will study them in detail later. For now, focus on the foundation: every pattern is just a specific type of record. Don't memorize names yet; understand behavior.",
    "context": {
      "keyTerms": [
        {
          "term": "Candle Formation",
          "definition": "A group of candles that together record a specific market behavior."
        },
        {
          "term": "Pattern Recognition",
          "definition": "The skill of identifying high-probability behavioral records."
        }
      ],
      "whyThisMatters": "Knowing the name 'Hammer' is useless if you don't understand the rejection it recorded.",
      "realLifeExample": "The 'Engulfing' record. Instead of just memorizing the name, see it as a record where the current period’s activity completely overwhelmed and 'erased' the previous period’s progress. It’s a record of a sudden shift in power.",
      "commonMistake": "Collecting patterns like stamps. Many learners try to learn 50 patterns and look for them everywhere. It is better to understand the OHLC (Open, High, Low, Close) logic of 3 patterns than to know the names of 30 without understanding the record.",
      "quickNote": "Pattern names are vocabulary. Context creates the reading."
    }
  },
  {
    "type": "practice",
    "title": "Practice Check: Candle or Signal?",
    "visualKey": "candle-decision-board",
    "label": "Interactive Task",
    "body": "A candle is evidence, not a full decision. The disciplined learner reads what the candle recorded, checks where it formed, and waits for context before forming a stronger reading.",
    "taskData": {
      "type": "choice_block",
      "question": "A learner sees a candle with a long lower wick and immediately buys, saying 'It's a reversal signal!' What is the disciplined response?",
      "options": [
        {
          "id": "A",
          "text": "The wick guarantees reversal.",
          "isCorrect": false,
          "feedback": "Not correct. A wick can suggest rejection, but it does not guarantee reversal. The learner still needs location, structure, and follow-through."
        },
        {
          "id": "B",
          "text": "The candle is useful evidence, but it must be checked with location, close, structure, and context.",
          "isCorrect": true,
          "feedback": "Correct. A candle records what happened, but the reading depends on context. The wick may be useful evidence, but it is not a complete conclusion by itself."
        },
        {
          "id": "C",
          "text": "The candle color is the only thing that matters.",
          "isCorrect": false,
          "feedback": "Not correct. Candle color is only one small part of the record. Body, wick, close location, and context matter."
        },
        {
          "id": "D",
          "text": "Candle patterns should be followed without review.",
          "isCorrect": false,
          "feedback": "Not correct. Pattern-following without review creates weak reasoning. Lurnava trains observation before conclusion."
        }
      ]
    },
    "context": {
      "keyTerms": [
        {
          "term": "Evidence-First",
          "definition": "The discipline of identifying clear, objective chart facts before forming a reading, instead of acting on assumptions."
        },
        {
          "term": "Discipline",
          "definition": "The commitment to wait for completed records and confirmed context rather than chasing fast price movements."
        },
        {
          "term": "Context Check",
          "definition": "The process of verifying where a candle forms (such as key levels or ranges) before assigning meaning to its shape."
        }
      ],
      "whyThisMatters": "This prevents 'impulse trading' based on single candle shapes.",
      "realLifeExample": "Waiting for the 'Evidence Stack'. A professional sees a bullish candle at a key level but waits to see if the next candle confirms the commitment. They are treating the first candle as a piece of evidence, not a finished signal.",
      "commonMistake": "Emotional 'Front-Running'. Seeing a candle starting to look like a 'Hammer' and entering a trade before the candle even closes. The record is not final until the period is over. Anything can happen in the last 10 seconds.",
      "quickNote": "A candle starts a question; it doesn't end the analysis."
    }
  },
  {
    "type": "concept",
    "title": "Analyzing Multiple Timeframes",
    "label": "Core Track",
    "body": "### Multiple Timeframes: Comprehensive Market Analysis\nAnalyzing multiple timeframes is crucial for gaining a holistic view of market conditions. This card explores **how this practice enhances understanding of price action and institutional behavior**.\n\n* **Daily vs. Hourly Analysis**: Use daily charts to identify the overall trend and hourly charts for entry points. If the daily chart shows a bullish trend while the hourly chart shows a pullback, it may present a buying opportunity. For instance, if the daily trend for USDCHF is bullish, and the hourly chart shows a retracement to 0.9500, consider entering long.\n* **Support and Resistance Levels**: Identify key support and resistance levels across multiple timeframes. A resistance level on the daily chart that aligns with a bearish reversal pattern on the hourly chart indicates a strong potential for price rejection.\n* **Trend Confirmation**: Use higher timeframes to confirm trends observed in lower timeframes. If the weekly chart indicates a bullish trend, and the daily chart shows a bullish breakout, it reinforces the likelihood of continued upward movement.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Higher Timeframe",
          "definition": "A longer duration chart used to identify overall market trends."
        },
        {
          "term": "Lower Timeframe",
          "definition": "A shorter duration chart used for precise entry and exit points."
        },
        {
          "term": "Support and Resistance",
          "definition": "Price levels where the market tends to reverse or consolidate."
        }
      ],
      "whyThisMatters": "Analyzing multiple timeframes allows traders to align their strategies with broader market trends and institutional behavior.",
      "realLifeExample": "On October 2, 2023, the daily chart for EURJPY showed a bullish trend, while the hourly chart indicated a retracement to 145.00, providing a clear buying opportunity as price bounced off that level.",
      "commonMistake": "Traders often rely solely on one timeframe, missing critical insights from higher or lower timeframes.",
      "quickNote": "Multiple timeframe analysis enhances understanding of market conditions and price action.",
      "mentorText": "When analyzing timeframes, think of it as looking at a map from different heights; each perspective reveals different details about the market landscape.",
      "mentorAnalogy": "Consider multiple timeframe analysis like an architect reviewing blueprints; each layer provides essential insights for the final structure."
    },
    "taskData": null,
    "visualKey": "ohlc-delivery"
  },
  {
    "type": "summary",
    "title": "Module Debrief: Candles Are Records",
    "visualKey": "candle-recap-map",
    "label": "Module Debrief",
    "body": "You have successfully moved from 'Shape Recognition' to 'Record Reading.' You now understand that a candle is a visual summary of participant interaction.\n\n### Your New Foundation:\n\n* [x] Candles are **Records**, not magic signals\n* [x] **Anatomy** (OHLC) provides the evidence\n* [x] **Context** (Location) creates the meaning\n* [x] **Patterns** are just named behavioral records\n\n**Next**: We see how these records interact across different zoom levels: **Timeframes**.",
    "context": {
      "keyTerms": [
        {
          "term": "Participant Interaction",
          "definition": "The buying and selling activity of traders that determines price direction and forms candle anatomy."
        },
        {
          "term": "Behavioral Record",
          "definition": "The objective trace of market participant decisions, stored in the open, high, low, and close values of a candle."
        },
        {
          "term": "Contextual Foundation",
          "definition": "The structural framework of key price levels and ranges that gives meaning to individual candle records."
        }
      ],
      "whyThisMatters": "This foundation allows you to understand every future concept in the academy with much higher clarity.",
      "realLifeExample": "The Multi-Asset Audit. If you see a strong record on EUR/USD (Euro vs. US Dollar), a disciplined learner checks if the same behavior is recorded on GBP/USD (British Pound vs. US Dollar) or the DXY (US Dollar Index). This turns a single record into a 'cluster' of evidence.",
      "commonMistake": "Thinking you are 'done' learning candles. Reading candles is a life-long skill. As you move to higher levels, you will see that every advanced concept (like Order Blocks) is just a more sophisticated way of reading candle records.",
      "quickNote": "You are reading behavior, not shapes."
    }
  }
];
