import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Stop Sweep Buffers for Gold Order Blocks",
    "label": "Gold Track",
    "body": "### Gold Order Blocks: Identifying Stop Sweep Buffers\nStop sweep buffers are critical for recognizing market manipulation in gold trading. This card teaches **how to identify stop sweep buffers within gold order blocks**.\n\n* **Buffer Identification**: A stop sweep buffer is identified when price action moves 10-15 pips above the order block high or below the order block low, indicating potential liquidity grabs.\n* **Market Reaction**: Observe the immediate price reaction after the sweep; a rapid reversal back into the order block suggests strong buying or selling interest.\n* **Volume Confirmation**: Validate the stop sweep with volume spikes; a significant increase in volume during the sweep indicates institutional participation and strengthens the order block's validity.",
    "context": {
      "keyTerms": [
        {
          "term": "Stop Sweep Buffer",
          "definition": "A price level where stop orders are triggered, leading to potential liquidity grabs."
        }
      ],
      "whyThisMatters": "Understanding stop sweep buffers allows traders to anticipate market reversals and position themselves effectively around order blocks.",
      "realLifeExample": "On October 5th, 2023, gold spiked to $1,920, triggering stop orders above the previous high before reversing sharply to $1,910, indicating a stop sweep.",
      "commonMistake": "Traders often misinterpret stop sweeps as trend continuation signals rather than potential reversals.",
      "quickNote": "Identify stop sweep buffers to enhance your understanding of market manipulation.",
      "mentorText": "When you see price action pushing above or below an order block, look for a quick reversal. This is often a sign that stops are being hunted, and you need to be ready to act.",
      "mentorAnalogy": "Think of this like a surgeon identifying a critical point during an operation; recognizing the stop sweep is akin to spotting a vital sign that indicates a need for immediate intervention."
    },
    "taskData": null,
    "visualKey": "gold-ob-spike-buffer"
  },
  {
    "type": "concept",
    "title": "Wick Tolerance Metrics in Gold Trading",
    "label": "Gold Track",
    "body": "### Gold Order Blocks: Applying Wick Tolerance Metrics\nWick tolerance metrics are essential for assessing the reliability of gold order blocks. This card focuses on **how to apply wick tolerance metrics to improve trade entries**.\n\n* **Wick Measurement**: Measure the wicks of the last three candles before the order block; a tolerance of 5-10% of the order block's height is acceptable for confirming its strength.\n* **Rejection Signals**: A rejection of price within the wick range indicates a higher probability of the order block holding; look for at least two consecutive candles closing within this range.\n* **Session Context**: Analyze wick behavior during key economic releases; for instance, if gold wicks sharply during a CPI release, it may indicate a strong order block formation.",
    "context": {
      "keyTerms": [
        {
          "term": "Wick Tolerance Metric",
          "definition": "A measurement used to assess the reliability of price action around order blocks."
        }
      ],
      "whyThisMatters": "Applying wick tolerance metrics enhances the precision of trade entries, reducing the likelihood of false breakouts.",
      "realLifeExample": "On September 15th, 2023, gold formed a bullish order block at $1,850 with a wick tolerance of 7%; a subsequent rejection confirmed the block's strength, leading to a rally to $1,870.",
      "commonMistake": "Traders often overlook wick behavior, leading to premature entries or exits based on incomplete analysis.",
      "quickNote": "Utilize wick tolerance metrics to validate order block strength before entering trades.",
      "mentorText": "When assessing an order block, always check the wicks. They tell you whether the market is rejecting or accepting those price levels.",
      "mentorAnalogy": "Consider this like a structural engineer assessing the stability of a building; the wicks are the stress points that indicate whether the structure can hold."
    },
    "taskData": null,
    "visualKey": "gold-ob-spike-buffer"
  },
  {
    "type": "concept",
    "title": "Supply and Demand Dynamics in Gold Order Blocks",
    "label": "Gold Track",
    "body": "### Gold Order Blocks: Exploring Supply and Demand Dynamics\nSupply and demand dynamics play a pivotal role in the formation of gold order blocks. This card examines **how these dynamics influence price levels and market sentiment**.\n\n* **Supply Zones**: Identify supply zones by observing where price consistently reverses; these zones often precede bearish order blocks and indicate selling pressure.\n* **Demand Zones**: Conversely, demand zones are marked by price rallies; a bullish order block forms when price consolidates after a significant drop, indicating strong buying interest.\n* **Market Sentiment Analysis**: Use sentiment indicators to gauge market psychology; for instance, a high level of bullish sentiment coinciding with a bearish order block may signal a potential reversal.",
    "context": {
      "keyTerms": [
        {
          "term": "Supply and Demand Dynamics",
          "definition": "The relationship between supply and demand that influences price movements and order block formations."
        }
      ],
      "whyThisMatters": "Understanding supply and demand dynamics helps traders anticipate potential reversals and align their strategies with market sentiment.",
      "realLifeExample": "On August 23rd, 2023, gold reached a supply zone at $1,950, leading to a bearish order block formation as price reversed to $1,925, confirming selling pressure.",
      "commonMistake": "Traders frequently misinterpret supply and demand zones, failing to recognize their impact on order block validity.",
      "quickNote": "Analyze supply and demand dynamics to enhance your understanding of order block formations.",
      "mentorText": "Always consider where the supply and demand zones are located. They will guide you in understanding whether an order block is likely to hold or fail.",
      "mentorAnalogy": "Think of this like a market researcher analyzing consumer behavior; understanding where demand peaks can help predict future price movements."
    },
    "taskData": null,
    "visualKey": "gold-ob-spike-buffer"
  },
  {
    "type": "concept",
    "title": "Advanced Stop Sweep Techniques for Gold",
    "label": "Gold Track",
    "body": "### Gold Order Blocks: Delving into Advanced Stop Sweep Techniques\nAdvanced techniques for identifying stop sweeps can significantly enhance your understanding of market behavior. This card focuses on **how to identify stop sweeps in gold trading**.\n\n* **Multi-Timeframe Analysis**: Use a multi-timeframe approach; identify stop sweeps on a lower timeframe while confirming with higher timeframes to validate the sweep's significance.\n* **Order Flow Assessment**: Analyze order flow data; a sudden increase in sell orders during a stop sweep can indicate institutional activity and validate the sweep's legitimacy.\n* **Psychological Levels**: Pay attention to psychological price levels; stop sweeps often occur around these levels, as traders cluster their stop orders, making them prime targets for manipulation.",
    "context": {
      "keyTerms": [
        {
          "term": "Advanced Stop Sweep Techniques",
          "definition": "Techniques used to identify and analyze stop sweeps in trading."
        }
      ],
      "whyThisMatters": "Mastering advanced stop sweep techniques allows traders to navigate market manipulation and position themselves advantageously.",
      "realLifeExample": "On October 12th, 2023, gold experienced a stop sweep at $1,880, where a rapid increase in sell orders confirmed institutional activity as price reversed to $1,870.",
      "commonMistake": "Traders often fail to consider multi-timeframe analysis, leading to missed opportunities or false confirmations.",
      "quickNote": "Utilize advanced techniques to identify stop sweeps and enhance your market analysis.",
      "mentorText": "When identifying stop sweeps, always check multiple timeframes. This will give you a clearer picture of the market's intent.",
      "mentorAnalogy": "Consider this like an air traffic controller monitoring multiple flight paths; understanding the broader context is essential for safe navigation."
    },
    "taskData": null,
    "visualKey": "gold-ob-spike-buffer"
  },
  {
    "type": "concept",
    "title": "Market Conditions Affecting Gold Order Blocks",
    "label": "Gold Track",
    "body": "### Market Conditions: Impact on Gold Order Blocks\nMarket conditions significantly influence the effectiveness of order blocks in gold trading. Understanding these dynamics is essential for optimizing entry and exit strategies.\n\n* **Economic Indicators**: Major economic announcements, such as U.S. Non-Farm Payrolls or inflation data, can create volatility that disrupts established order blocks. Monitor these releases closely, as they can invalidate previous setups.\n* **Geopolitical Events**: Tensions or crises can lead to sudden shifts in gold demand. For instance, during a geopolitical crisis, a bullish order block may be reinforced as investors seek safe-haven assets, while bearish conditions may arise from stabilizing factors.\n* **Market Sentiment**: The overall market mood, reflected in sentiment indicators, can affect gold's price action. A bullish sentiment may strengthen existing order blocks, while a bearish sentiment could lead to their failure, requiring traders to adapt their strategies accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "Order Block",
          "definition": "A price range where significant buying or selling has occurred, indicating potential future support or resistance."
        },
        {
          "term": "Economic Indicators",
          "definition": "Statistics that provide insights into economic performance, influencing market expectations."
        },
        {
          "term": "Geopolitical Events",
          "definition": "Occurrences related to international relations that can impact market stability and investor behavior."
        }
      ],
      "whyThisMatters": "Recognizing how external conditions impact order blocks allows traders to refine their strategies and improve decision-making.",
      "realLifeExample": "On March 10, 2023, gold prices surged following a major U.S. inflation report, invalidating a previously established bearish order block at $1,800.",
      "commonMistake": "Traders often overlook the influence of economic data releases, leading to premature entries or exits based on outdated order blocks.",
      "quickNote": "Market conditions can validate or invalidate gold order blocks, requiring constant assessment.",
      "mentorText": "When trading gold, always assess the broader market context. If a significant economic report is due, be prepared for potential shifts that could disrupt your order block analysis.",
      "mentorAnalogy": "Think of trading gold order blocks like navigating through turbulent weather. Just as pilots adjust their flight paths based on weather conditions, traders must adapt their strategies based on market dynamics."
    },
    "taskData": null,
    "visualKey": "gold-ob-spike-buffer"
  },
  {
    "type": "concept",
    "title": "Volume Analysis for Gold Order Blocks",
    "label": "Gold Track",
    "body": "### Volume Analysis: Confirming Gold Order Blocks\nVolume analysis serves as a critical tool in validating the strength of order blocks in gold trading. High volume often indicates stronger price movements and more reliable setups.\n\n* **Volume Spikes**: A significant increase in volume during the formation of an order block suggests strong interest and conviction. For example, if a bullish order block forms at $1,850 with a volume spike of 30% above the average, it signals potential upward momentum.\n* **Volume Divergence**: Observing discrepancies between price movement and volume can indicate weakening order blocks. If gold prices rise but volume decreases, it may suggest a lack of conviction, signaling caution.\n* **Volume Profiles**: Analyzing volume profiles at key price levels helps identify where market participants are most active. This can assist in determining the strength of support or resistance at established order blocks.",
    "context": {
      "keyTerms": [
        {
          "term": "Volume Spike",
          "definition": "A sudden increase in trading volume, indicating heightened interest in a specific price level."
        },
        {
          "term": "Volume Divergence",
          "definition": "A situation where price movement does not align with volume trends, often signaling potential reversals."
        },
        {
          "term": "Volume Profile",
          "definition": "A graphical representation of trading activity over a specified time period at various price levels."
        }
      ],
      "whyThisMatters": "Incorporating volume analysis enhances the reliability of order blocks, allowing traders to make more informed decisions.",
      "realLifeExample": "On April 15, 2023, gold formed a bullish order block at $1,900, accompanied by a volume spike of 40%, confirming strong buying interest.",
      "commonMistake": "Traders frequently disregard volume trends, leading to reliance on weak order blocks that may not hold.",
      "quickNote": "Volume analysis is essential for confirming the validity of gold order blocks.",
      "mentorText": "Always check the volume when assessing order blocks. A strong order block without volume support is like a foundation without solid ground—it may not hold.",
      "mentorAnalogy": "Consider volume analysis like a chef checking ingredient freshness. Just as fresh ingredients ensure a quality dish, strong volume confirms the reliability of your trading setups."
    },
    "taskData": null,
    "visualKey": "gold-ob-spike-buffer"
  },
  {
    "type": "practice",
    "title": "Practical Scenarios for Gold Order Block Trading",
    "label": "Gold Track",
    "body": "### Practical Application: Gold Order Block Trading Scenarios\nEngaging in practical scenarios helps solidify understanding of gold order blocks and enhances decision-making skills in live trading environments.\n\n* **Scenario 1**: Gold is trading at $1,850, forming a bullish order block with a volume spike of 25% during a positive economic report. What is the appropriate action?\n* **Scenario 2**: A bearish order block appears at $1,900, but volume is declining. Should you enter a short position based on this setup?\n* **Scenario 3**: Gold retraces to $1,800, where a previous bullish order block was established. Volume is stable. Is this a valid entry point for a long position?",
    "context": {
      "keyTerms": [
        {
          "term": "Bullish Order Block",
          "definition": "A price range where buying interest has previously led to upward price movement."
        },
        {
          "term": "Bearish Order Block",
          "definition": "A price range where selling pressure has previously caused downward price movement."
        },
        {
          "term": "Retracement",
          "definition": "A temporary reversal in the price movement of an asset, often returning to a previous support or resistance level."
        }
      ],
      "whyThisMatters": "Practicing real-world scenarios reinforces the application of order block concepts, improving traders' responsiveness to market conditions.",
      "realLifeExample": "During a trading session on May 5, 2023, gold retraced to $1,800, aligning with a bullish order block, allowing traders to capitalize on the rebound.",
      "commonMistake": "Traders often hesitate to act on valid setups due to over-analysis, missing profitable opportunities.",
      "quickNote": "Engaging in practical scenarios sharpens decision-making skills in gold trading.",
      "mentorText": "In trading, practice makes perfect. Simulate these scenarios to build your confidence and refine your execution skills before entering live markets.",
      "mentorAnalogy": "Think of these scenarios like a pilot practicing emergency landings in a simulator. The more you practice, the more instinctive your responses become in real situations."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You observe a bullish order block at $1,850 with a volume spike of 25%. What should you do?",
      "options": [
        {
          "id": "0",
          "text": "Enter a long position immediately.",
          "isCorrect": true,
          "feedback": "Entering a long position is appropriate given the bullish order block and volume confirmation."
        },
        {
          "id": "1",
          "text": "Wait for a retracement before entering.",
          "isCorrect": false,
          "feedback": "While waiting for a retracement can be prudent, the current conditions support an immediate entry."
        },
        {
          "id": "2",
          "text": "Short the position as it may reverse.",
          "isCorrect": false,
          "feedback": "Shorting against a confirmed bullish order block is not advisable."
        },
        {
          "id": "3",
          "text": "Ignore the setup as it may fail.",
          "isCorrect": false,
          "feedback": "Ignoring a valid setup with volume support can lead to missed opportunities."
        }
      ]
    },
    "visualKey": "gold-ob-spike-buffer"
  },
  {
    "type": "summary",
    "title": "Summary of Gold Order Block Concepts",
    "label": "Gold Track",
    "body": "### Summary: Key Concepts of Gold Order Blocks\nThis summary consolidates the essential concepts related to gold order blocks, reinforcing their practical application in trading.\n\n* **Order Block Identification**: Recognizing bullish and bearish order blocks is fundamental for establishing potential entry and exit points.\n* **Market Conditions**: External factors, including economic indicators and geopolitical events, can validate or invalidate order blocks, necessitating continuous market assessment.\n* **Volume Analysis**: Utilizing volume trends is crucial for confirming the strength of order blocks, enhancing the reliability of trading decisions.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Assessment",
          "definition": "The ongoing evaluation of market conditions to inform trading strategies."
        },
        {
          "term": "Entry and Exit Points",
          "definition": "Strategic price levels where traders initiate or close positions."
        },
        {
          "term": "Reliability in Trading",
          "definition": "The degree to which a trading strategy consistently produces favorable outcomes."
        }
      ],
      "whyThisMatters": "A solid grasp of these concepts equips traders to navigate the gold market effectively, improving their overall trading performance.",
      "realLifeExample": "Traders who effectively identify and analyze order blocks during the geopolitical tensions of 2023 capitalized on significant price movements in gold.",
      "commonMistake": "Failing to integrate market conditions and volume analysis into order block strategies often leads to suboptimal trading outcomes.",
      "quickNote": "Mastering gold order blocks enhances trading precision and effectiveness.",
      "mentorText": "Review these concepts regularly. A strong foundation in order blocks will empower you to make informed decisions in volatile markets.",
      "mentorAnalogy": "Consider this summary like a pilot's checklist before takeoff. Each item ensures you're prepared for a successful flight, just as mastering these concepts prepares you for effective trading."
    },
    "taskData": null,
    "visualKey": "gold-ob-spike-buffer"
  }
];
