import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Reading Candle Sequences During NY Open",
    "label": "Forex Track",
    "body": "### Core Scenario: Candle Interpretation at NY Open\nInterpreting candle sequences during the New York open is critical for identifying volatility and market reactions. This card teaches **how to analyze live candle formations to gauge market sentiment**.\n\n* **Candle Sequence Analysis**: Observe the first 15 minutes of the NY session for three consecutive bullish or bearish candles. A sequence of three bullish candles indicates strong buying pressure, while three bearish candles suggest selling dominance.\n* **Volatility Indicators**: Measure the range of the first five candles. A range exceeding 20 pips typically signals increased volatility, warranting immediate attention for potential trade setups.\n* **Market Reaction Assessment**: Compare the current candle's close to the previous candle's high or low. A close above the previous high confirms bullish momentum, while a close below the previous low indicates bearish sentiment.",
    "context": {
      "keyTerms": [
        {
          "term": "Candle Sequence",
          "definition": "A series of consecutive candlesticks that indicate market sentiment."
        },
        {
          "term": "Volatility",
          "definition": "The degree of variation in trading prices over time."
        }
      ],
      "whyThisMatters": "Accurate interpretation of candle sequences during the NY open allows traders to align with market momentum and capitalize on volatility.",
      "realLifeExample": "During the NY open on March 15, 2023, EURUSD formed three consecutive bullish candles, each closing above the previous high, indicating a strong buying opportunity at 1.0850.",
      "commonMistake": "Traders often misinterpret a single bullish or bearish candle as a trend reversal without considering the broader sequence.",
      "quickNote": "Focus on the first 15 minutes of the NY session for actionable candle sequences.",
      "mentorText": "When you see three bullish candles in a row at the NY open, take note. This is a clear signal of strong buying pressure that you can leverage for your trades.",
      "mentorAnalogy": "Think of reading candle sequences like a pilot monitoring flight instruments during takeoff. Each indicator provides critical information about the aircraft's trajectory."
    },
    "taskData": null,
    "visualKey": "live-price-reader"
  },
  {
    "type": "concept",
    "title": "Analyzing Volatility in Major Forex Pairs",
    "label": "Forex Track",
    "body": "### Core Scenario: Volatility Assessment in Forex\nAssessing volatility in major currency pairs through live candle analysis is essential for identifying potential trading opportunities. This card teaches **how to evaluate real-time volatility using candle formations**.\n\n* **Candle Body Size**: Monitor the size of the candle bodies in the first hour of the trading session. Larger bodies (greater than 15 pips) indicate higher volatility, while smaller bodies suggest consolidation.\n* **Wick Analysis**: Analyze the length of wicks in relation to the body. Long wicks signify rejection of price levels, indicating potential reversals or continuations depending on their position within the trend.\n* **Volume Correlation**: Cross-reference candle formations with trading volume. Increased volume accompanying large candles enhances the reliability of the volatility signal, indicating stronger market participation.",
    "context": {
      "keyTerms": [
        {
          "term": "Candle Body",
          "definition": "The filled or hollow part of a candlestick representing the price movement within a specific time frame."
        },
        {
          "term": "Wick",
          "definition": "The line extending from the body of a candlestick indicating price extremes during the time frame."
        }
      ],
      "whyThisMatters": "Understanding volatility through candle analysis enables traders to make informed decisions on entry and exit points, optimizing trade performance.",
      "realLifeExample": "On April 10, 2023, GBPUSD exhibited a large bullish candle with a body of 25 pips and a long wick, indicating strong buying interest after a news release, presenting a clear trading opportunity.",
      "commonMistake": "Traders often overlook wick analysis, missing critical signals of market rejection or continuation.",
      "quickNote": "Evaluate candle body size and wick length to gauge volatility in major pairs.",
      "mentorText": "When analyzing volatility, remember that large candle bodies paired with significant wicks can reveal powerful market dynamics. Pay attention to these details.",
      "mentorAnalogy": "Assessing volatility is like a surgeon evaluating a patient's vital signs before an operation; each indicator provides essential insights into the patient's condition."
    },
    "taskData": null,
    "visualKey": "live-price-reader"
  },
  {
    "type": "concept",
    "title": "Impact of Economic News on Candle Behavior",
    "label": "Forex Track",
    "body": "### Core Scenario: Economic News Influence on Price Action\nEconomic news releases significantly impact candle formations and order flow during the NY session. This card teaches **how to interpret candle behavior in response to economic data**.\n\n* **Pre-News Candle Patterns**: Identify candle patterns leading up to a news release. A series of narrowing candles may indicate market anticipation and potential breakout opportunities post-release.\n* **Immediate Reaction Analysis**: Observe the first three candles after the news release. A strong move in one direction followed by a retracement can signal a false breakout, while sustained momentum indicates a genuine trend shift.\n* **Volatility Spike Measurement**: Measure the price movement within the first five minutes post-release. A movement exceeding 30 pips typically indicates significant market reaction, warranting immediate trading consideration.",
    "context": {
      "keyTerms": [
        {
          "term": "Economic News Release",
          "definition": "Scheduled announcements that can influence market conditions and price movements."
        },
        {
          "term": "Order Flow",
          "definition": "The buying and selling activity in the market that drives price changes."
        }
      ],
      "whyThisMatters": "Understanding the impact of economic news on candle behavior allows traders to anticipate market movements and adjust strategies accordingly.",
      "realLifeExample": "On May 5, 2023, the US Non-Farm Payroll report caused USDJPY to spike 50 pips within the first five minutes, with candles forming a clear bullish trend following the release.",
      "commonMistake": "Traders often react impulsively to news without analyzing the subsequent candle formations, leading to poor decision-making.",
      "quickNote": "Monitor candle behavior closely after economic news releases for actionable insights.",
      "mentorText": "After a news release, focus on the first few candles. They tell you whether the market is reacting strongly or hesitating, guiding your next steps.",
      "mentorAnalogy": "Interpreting candle behavior after news is like a firefighter assessing the spread of flames after a spark; immediate reactions reveal the potential for escalation."
    },
    "taskData": null,
    "visualKey": "live-price-reader"
  },
  {
    "type": "concept",
    "title": "Scalping Techniques Using Live Price Action",
    "label": "Forex Track",
    "body": "### Core Scenario: Scalping with Live Price Action\nEffective scalping techniques leverage live price action during high volatility periods in forex trading. This card teaches **how to implement scalping strategies based on real-time candle analysis**.\n\n* **Entry Timing**: Enter trades during the first five minutes of high volatility sessions, looking for quick price movements of 10-15 pips. Utilize a tight stop-loss of 5 pips to manage risk effectively.\n* **Candle Confirmation**: Wait for a confirmation candle to close in your favor before entering a trade. A bullish candle closing above the previous high signals a buy opportunity, while a bearish candle closing below the low indicates a sell signal.\n* **Exit Strategy**: Set profit targets at 10 pips for quick exits. Monitor the next two candles for signs of reversal or continuation to adjust exit points accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "Scalping",
          "definition": "A trading strategy focused on making small profits from minor price changes."
        },
        {
          "term": "Confirmation Candle",
          "definition": "A candle that validates a potential trade setup by closing in the desired direction."
        }
      ],
      "whyThisMatters": "Mastering scalping techniques through live price action allows traders to capitalize on short-term price movements, enhancing profitability.",
      "realLifeExample": "On June 12, 2023, during the NY session, GBPUSD exhibited a bullish candle followed by a confirmation candle, allowing scalpers to enter at 1.3000 and exit at 1.3010 within minutes.",
      "commonMistake": "Traders often enter scalping positions without waiting for confirmation candles, increasing the risk of false entries.",
      "quickNote": "Utilize confirmation candles for precise scalping entries during high volatility.",
      "mentorText": "In scalping, timing is everything. Wait for that confirmation candle to close before jumping in; it’s your assurance that the market is moving in your favor.",
      "mentorAnalogy": "Scalping is akin to a chef timing the perfect moment to flip a pancake; precision is essential to achieve the desired outcome without burning."
    },
    "taskData": null,
    "visualKey": "live-price-reader"
  },
  {
    "type": "concept",
    "title": "Interpreting Order Flow in Forex Markets",
    "label": "Forex Track",
    "body": "### Core Scenario: Analyzing Order Flow\nUnderstanding order flow during the NY open is crucial for identifying shifts in market sentiment. This card focuses on **how to interpret live order flow to gauge potential price direction**.\n\n* **Volume Analysis**: Monitor the volume spikes in conjunction with price movements. A significant increase in volume alongside a price breakout indicates strong buying or selling interest.\n* **Bid-Ask Dynamics**: Observe the bid-ask spread and how it narrows or widens. A narrowing spread often signals increased buying pressure, while a widening spread can indicate uncertainty or selling pressure.\n* **Order Book Insights**: Utilize the order book to identify large buy or sell orders. The presence of substantial orders at specific price levels can act as support or resistance, influencing future price action.",
    "context": {
      "keyTerms": [
        {
          "term": "Order Flow",
          "definition": "The analysis of buy and sell orders in the market to determine price movement."
        }
      ],
      "whyThisMatters": "Recognizing order flow dynamics enables traders to anticipate potential reversals or continuations in price action, enhancing decision-making.",
      "realLifeExample": "During the NY open, EURUSD shows a volume spike at 1.0850, coinciding with a breakout above the previous resistance level, indicating strong bullish sentiment.",
      "commonMistake": "Traders often misinterpret volume spikes as definitive signals without considering the context of the overall market structure.",
      "quickNote": "Order flow analysis reveals market sentiment shifts that can precede price movements.",
      "mentorText": "When you see a volume spike, assess whether it aligns with your market bias. If it does, consider it a confirmation rather than a standalone signal.",
      "mentorAnalogy": "Think of order flow like air traffic control; understanding the flow of planes (orders) helps you predict potential congestion (price movement) at the airport (market)."
    },
    "taskData": null,
    "visualKey": "live-price-reader"
  },
  {
    "type": "concept",
    "title": "Key Candle Patterns in Forex Trading",
    "label": "Forex Track",
    "body": "### Core Scenario: Identifying Candle Patterns\nCandle patterns provide critical insights into market psychology during the NY session. This card details **how to recognize and interpret key candle formations**.\n\n* **Engulfing Patterns**: Look for bullish or bearish engulfing patterns at key support or resistance levels. A bullish engulfing pattern indicates potential reversal after a downtrend, while a bearish engulfing suggests a reversal after an uptrend.\n* **Doji Candles**: Identify doji candles, which signify indecision in the market. A doji at the top of an uptrend may indicate a potential reversal, while a doji at the bottom of a downtrend could signal a reversal to the upside.\n* **Pin Bars**: Recognize pin bars that indicate rejection of price levels. A pin bar with a long wick and a small body at a support level can signal a bullish reversal, while at resistance, it indicates a bearish reversal.",
    "context": {
      "keyTerms": [
        {
          "term": "Engulfing Pattern",
          "definition": "A candlestick pattern where one candle completely engulfs the previous candle, indicating a potential reversal."
        }
      ],
      "whyThisMatters": "Understanding candle patterns enhances the ability to make informed trading decisions based on market sentiment and potential reversals.",
      "realLifeExample": "During the NY session, GBPUSD forms a bullish engulfing pattern at 1.3000, suggesting a potential reversal after a downtrend, prompting a buy decision.",
      "commonMistake": "Traders often overlook the context of candle patterns, taking them at face value without considering surrounding price action.",
      "quickNote": "Key candle patterns serve as visual cues for potential market reversals or continuations.",
      "mentorText": "When you spot an engulfing pattern, check the preceding trend and volume. It’s not just about the pattern; it’s about what it represents in the market context.",
      "mentorAnalogy": "Candle patterns are like weather indicators; just as a storm cloud suggests rain, certain patterns indicate shifts in market conditions."
    },
    "taskData": null,
    "visualKey": "live-price-reader"
  },
  {
    "type": "practice",
    "title": "Practical Exercises for NY Open Trading",
    "label": "Forex Track",
    "body": "### Core Scenario: Real-Time Price Action Exercises\nEngaging in practical exercises during the NY open allows traders to apply learned concepts effectively. This card focuses on **real-time scenarios to enhance live price action reading skills**.\n\n* **Scenario Simulation**: Create a simulated trading environment where you analyze live price action for 30 minutes at the NY open. Focus on identifying order flow and candle patterns in real time.\n* **Trade Journal Entry**: Document your observations of price movements, volume changes, and candle formations. Note your reasoning for potential trades and outcomes based on your analysis.\n* **Peer Review**: Collaborate with fellow traders to review each other's observations and trading decisions. Discuss the rationale behind trades and the effectiveness of reading live price action.",
    "context": {
      "keyTerms": [
        {
          "term": "Trade Journal",
          "definition": "A record of trades, observations, and reflections to improve trading performance."
        }
      ],
      "whyThisMatters": "Practical exercises reinforce theoretical knowledge and enhance the ability to read live price action under real market conditions.",
      "realLifeExample": "Simulating a trading session at the NY open, you observe USDJPY forming a pin bar at 110.50, leading to a documented buy trade based on your analysis.",
      "commonMistake": "Traders often neglect to document their thought process, missing valuable insights for future improvement.",
      "quickNote": "Practical exercises solidify your ability to interpret live price action effectively.",
      "mentorText": "Treat each live session as a test. Document everything you see and feel; it’s your best tool for growth.",
      "mentorAnalogy": "Think of these exercises like flight simulations for pilots; they prepare you for real-world scenarios without the risk."
    },
    "taskData": {
      "type": "choice_block",
      "question": "During the NY open, you notice a strong bullish engulfing pattern forming on EURUSD. What should be your next step?",
      "options": [
        {
          "id": "0",
          "text": "Enter a buy position immediately without further analysis.",
          "isCorrect": false,
          "feedback": "Entering without further analysis ignores the importance of confirming the pattern with volume and market context."
        },
        {
          "id": "1",
          "text": "Wait for confirmation from volume and the next candle before entering.",
          "isCorrect": true,
          "feedback": "Waiting for confirmation ensures that the pattern is supported by market sentiment and reduces the risk of false signals."
        },
        {
          "id": "2",
          "text": "Sell the position because the market is too volatile.",
          "isCorrect": false,
          "feedback": "Selling based on volatility without analyzing the pattern can lead to missed opportunities."
        },
        {
          "id": "3",
          "text": "Ignore the pattern and focus on other currency pairs.",
          "isCorrect": false,
          "feedback": "Ignoring the pattern disregards potential trading opportunities that could arise from valid setups."
        }
      ]
    },
    "visualKey": "live-price-reader"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Price Action Insights",
    "label": "Forex Track",
    "body": "### Core Scenario: Consolidating Price Action Knowledge\nSummarizing key insights from live price action analysis reinforces effective trading practices. This card encapsulates **the essential takeaways from analyzing price action in forex markets**.\n\n* **Market Sentiment Indicators**: Recognize that order flow and candle patterns are vital indicators of market sentiment. Understanding these elements can lead to more accurate trading decisions.\n* **Contextual Analysis**: Always analyze candle patterns within the context of overall market structure and volume. Patterns alone do not dictate action; they must be corroborated by market conditions.\n* **Continuous Learning**: Engage in ongoing practice and review of live price action to refine your skills. Regularly updating your trade journal enhances learning and adaptation to market changes.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of traders towards a particular currency pair, influencing price movement."
        }
      ],
      "whyThisMatters": "Consolidating insights ensures traders can apply learned concepts effectively and adapt to changing market conditions.",
      "realLifeExample": "Reflecting on a week of trading, you identify that recognizing engulfing patterns at key levels led to successful trades in EURUSD and GBPUSD.",
      "commonMistake": "Traders often fail to integrate insights from price action analysis into their overall trading strategy.",
      "quickNote": "Summarizing insights solidifies your understanding and prepares you for future trading scenarios.",
      "mentorText": "Take time to reflect on your trades. What worked? What didn’t? This reflection is where growth happens.",
      "mentorAnalogy": "Summarizing insights is like a post-flight debrief for pilots; it’s essential for improving future performance."
    },
    "taskData": null,
    "visualKey": "live-price-reader"
  }
];
