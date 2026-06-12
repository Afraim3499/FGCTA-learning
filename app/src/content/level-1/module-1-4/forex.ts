import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Mapping Forex Session AOIs",
    "label": "Forex Track",
    "body": "### Mapping Forex Session AOIs: Introduction\nSession-specific Areas of Interest (AOIs) are crucial for identifying potential market turning points. This card introduces **how to map high and low boundaries that define these zones**.\n\n* **Session Highs and Lows**: Identify the highest and lowest points of major sessions (London, New York, Tokyo) as primary AOIs. These points often act as psychological barriers.\n* **Volume Concentration Zones**: Look for areas where trading volume spikes significantly within a session. These zones often precede strong market reactions.\n* **Historical Reaction Points**: Use historical data to pinpoint where price has previously reacted strongly within a session. These points can provide clues for future market behavior.",
    "context": {
      "keyTerms": [
        {
          "term": "Area of Interest (AOI)",
          "definition": "A price zone where significant market reactions are likely to occur."
        },
        {
          "term": "Session High/Low",
          "definition": "The highest and lowest price levels reached during a specific trading session."
        }
      ],
      "whyThisMatters": "Defining AOIs helps traders anticipate where significant price reactions may occur, improving entry and exit precision.",
      "realLifeExample": "During the London session, EURUSD reaches a high of 1.1200 and a low of 1.1150. These levels become AOIs for potential reversals.",
      "commonMistake": "Ignoring session-specific highs and lows, leading to trades in less predictable areas.",
      "quickNote": "Session highs and lows often act as magnets for price action.",
      "mentorText": "Think of session AOIs as the boundaries of a soccer field. You need to know where the lines are to play effectively.",
      "mentorAnalogy": "Mapping AOIs is like an architect identifying load-bearing walls in a building design. These walls define the structure's integrity."
    },
    "taskData": null,
    "visualKey": "forex-session-aoi"
  },
  {
    "type": "concept",
    "title": "Using ADR Extensions for AOI Definition",
    "label": "Forex Track",
    "body": "### Using ADR Extensions for AOI Definition\nAverage Daily Range (ADR) extensions help define outer session AOIs by projecting potential price movement limits. This card explains **how to leverage these extensions to anticipate market reactions**.\n\n* **ADR Calculation**: Calculate the ADR by averaging the daily high-low range over a set period (e.g., 14 days). Use this to project potential session boundaries.\n* **Extension Levels**: Apply ADR extensions (e.g., 1.5x, 2x) to current session highs/lows to identify outer AOIs. These levels often act as resistance or support.\n* **Reaction Anticipation**: Use ADR extensions to anticipate where price may reverse or consolidate, enhancing entry and exit timing.",
    "context": {
      "keyTerms": [
        {
          "term": "Average Daily Range (ADR)",
          "definition": "The average range between the high and low prices over a specified number of days."
        },
        {
          "term": "ADR Extension",
          "definition": "A multiple of the ADR used to project potential price movement limits."
        }
      ],
      "whyThisMatters": "ADR extensions provide a statistical basis for defining potential reversal zones, reducing reliance on guesswork.",
      "realLifeExample": "GBPUSD has an ADR of 100 pips. During the New York session, an ADR extension projects a potential high at 1.3200, where price reverses.",
      "commonMistake": "Misapplying ADR extensions without considering current market volatility, leading to inaccurate AOI projections.",
      "quickNote": "ADR extensions act as statistical guardrails for price movement.",
      "mentorText": "Using ADR extensions is like a pilot calculating fuel range. It sets realistic boundaries for the journey.",
      "mentorAnalogy": "ADR extensions are like a chef using a recipe's ingredient ratios to ensure a dish's balance and flavor."
    },
    "taskData": null,
    "visualKey": "forex-session-aoi"
  },
  {
    "type": "concept",
    "title": "Identifying Reaction Boundaries in Forex",
    "label": "Forex Track",
    "body": "### Identifying Reaction Boundaries in Forex\nReaction boundaries within Forex sessions are key to mapping areas where price is likely to respond. This card teaches **how to map these areas to enhance your trading strategy**.\n\n* **Pivot Points**: Use pivot points calculated from previous session data to identify potential reaction boundaries. These points often align with significant price movements.\n* **Fibonacci Retracements**: Apply Fibonacci retracement levels to recent swings to identify potential reaction zones within a session.\n* **Confluence Zones**: Look for areas where multiple indicators (e.g., pivot points, Fibonacci levels) align, increasing the likelihood of a strong market reaction.",
    "context": {
      "keyTerms": [
        {
          "term": "Pivot Point",
          "definition": "A technical analysis indicator used to determine overall market trends across different time frames."
        },
        {
          "term": "Fibonacci Retracement",
          "definition": "A method of technical analysis for determining support and resistance levels."
        }
      ],
      "whyThisMatters": "Identifying reaction boundaries allows traders to anticipate and capitalize on market movements with greater accuracy.",
      "realLifeExample": "USDJPY reacts at a pivot point of 110.50 during the Tokyo session, aligning with a 61.8% Fibonacci retracement.",
      "commonMistake": "Over-relying on a single indicator without considering confluence, leading to missed or false signals.",
      "quickNote": "Confluence increases the reliability of reaction boundaries.",
      "mentorText": "Think of reaction boundaries as checkpoints in a race. They guide you on when to accelerate or slow down.",
      "mentorAnalogy": "Identifying reaction boundaries is like a surgeon marking incision points before an operation to ensure precision."
    },
    "taskData": null,
    "visualKey": "forex-session-aoi"
  },
  {
    "type": "concept",
    "title": "Avoiding Middle-of-Session Trades",
    "label": "Forex Track",
    "body": "### Avoiding Middle-of-Session Trades\nTrading in the middle of a Forex session often involves increased risk due to lack of directional clarity. This card explains **strategies to focus on high-probability edge trades instead**.\n\n* **Directional Ambiguity**: Middle-of-session trades often lack clear directional bias, increasing the likelihood of whipsaws and false signals.\n* **Reduced Volatility**: Volatility tends to decrease in the middle of sessions, leading to smaller price movements and reduced profit potential.\n* **Edge Focus**: Concentrate on session opens and closes where volatility and directional bias are more pronounced, providing clearer trading opportunities.",
    "context": {
      "keyTerms": [
        {
          "term": "Directional Bias",
          "definition": "The overall direction in which a market is expected to move."
        },
        {
          "term": "Volatility",
          "definition": "The degree of variation in trading prices over a certain period."
        }
      ],
      "whyThisMatters": "Avoiding trades in the middle of sessions helps traders focus on periods with higher probability setups, improving risk management.",
      "realLifeExample": "During the New York session, EURUSD shows no clear direction at 11:00 AM, resulting in choppy price action and increased risk.",
      "commonMistake": "Entering trades during low volatility periods, leading to frustration and unnecessary losses.",
      "quickNote": "Session edges offer clearer trading signals than the middle.",
      "mentorText": "Avoid the middle of the session like a pilot avoids turbulence. Stick to the edges where conditions are clearer.",
      "mentorAnalogy": "Avoiding middle-of-session trades is like a chess player waiting for the opening or endgame to make decisive moves."
    },
    "taskData": null,
    "visualKey": "forex-session-aoi"
  },
  {
    "type": "concept",
    "title": "Managing Session Transitions in Forex",
    "label": "Forex Track",
    "body": "### Managing Session Transitions\nForex markets operate continuously, but session transitions can introduce volatility. This card focuses on **strategically managing trades during these transitions**.\n\n* **Session Overlap Awareness**: During the overlap of the London and New York sessions, liquidity increases, often leading to sharp price movements. Avoid initiating new trades during this period unless a clear directional bias is established.\n* **Risk Adjustment**: As sessions transition, adjust your risk parameters. Reduce position size or tighten stop-loss levels to account for increased volatility and potential whipsaws.\n* **Position Monitoring**: Actively monitor open positions as sessions change. Be prepared to exit trades if the transition invalidates your initial setup or if the market's direction becomes unclear.",
    "context": {
      "keyTerms": [
        {
          "term": "Session Transition",
          "definition": "The period when one Forex session ends and another begins, often marked by increased volatility."
        }
      ],
      "whyThisMatters": "Session transitions can lead to unexpected price movements, impacting trade outcomes. Managing these periods is crucial for risk control.",
      "realLifeExample": "During the London-New York overlap, GBPUSD may experience a 50-pip spike due to a sudden influx of liquidity, invalidating a prior setup.",
      "commonMistake": "Traders often ignore session transitions, leading to unexpected losses due to increased volatility.",
      "quickNote": "Session overlaps can be volatile; adjust your risk accordingly.",
      "mentorText": "Think of session transitions like a shift change at a factory. You need to be aware of the incoming team and adjust your operations accordingly.",
      "mentorAnalogy": "Just like a pilot adjusts flight controls when transitioning between airspace zones, traders must adjust their strategies during session transitions."
    },
    "taskData": null,
    "visualKey": "forex-session-aoi"
  },
  {
    "type": "concept",
    "title": "Confirmation Signals for Forex Areas of Interest",
    "label": "Forex Track",
    "body": "### Confirmation Signals for Forex AOIs\nIdentifying confirmation signals is essential for validating areas of interest (AOIs) in Forex. This card details **how to incorporate these signals into your trading plan**.\n\n* **Price Action Confirmation**: Look for candlestick patterns such as pin bars or engulfing patterns at AOIs. These indicate potential reversals or continuations.\n* **Volume Analysis**: Increased volume at an AOI can confirm the strength of a price move. Low volume may suggest a false breakout or lack of commitment.\n* **Technical Indicators**: Use indicators like RSI or MACD to confirm overbought or oversold conditions at AOIs. Divergence between price and indicators can signal a potential reversal.",
    "context": {
      "keyTerms": [
        {
          "term": "Confirmation Signal",
          "definition": "A technical indicator or pattern that validates an area of interest for a potential trade."
        }
      ],
      "whyThisMatters": "Confirmation signals help traders avoid false breakouts and improve the accuracy of their entries.",
      "realLifeExample": "EURUSD forms a bullish engulfing pattern at a key support level, confirmed by rising volume, indicating a potential upward move.",
      "commonMistake": "Relying solely on one type of confirmation signal without considering the broader market context.",
      "quickNote": "Always seek confirmation signals to validate your AOIs.",
      "mentorText": "Treat confirmation signals like a second opinion from a trusted advisor. They should reinforce your initial analysis.",
      "mentorAnalogy": "Just as a surgeon waits for all vital signs to stabilize before proceeding, a trader should wait for confirmation signals before entering a trade."
    },
    "taskData": null,
    "visualKey": "forex-session-aoi"
  },
  {
    "type": "practice",
    "title": "Practical Application of Forex AOI Concepts",
    "label": "Forex Track",
    "body": "### Practical Application of Forex AOI Concepts\nEngage in exercises designed to test your ability to map and trade within session AOIs effectively. This card provides scenarios to apply your knowledge in real-world contexts.",
    "context": {
      "keyTerms": [
        {
          "term": "Area of Interest (AOI)",
          "definition": "A price level or zone where potential trading opportunities are identified based on historical data and technical analysis."
        }
      ],
      "whyThisMatters": "Applying AOI concepts in practice helps solidify understanding and improve real-world trading performance.",
      "realLifeExample": "Analyzing USDJPY during the Tokyo session, identifying an AOI at 110.50 based on previous support, and executing a trade as price confirms the level.",
      "commonMistake": "Failing to adapt AOI strategies to different market conditions and session characteristics.",
      "quickNote": "Practice mapping AOIs to enhance your trading precision.",
      "mentorText": "Think of this practice as a flight simulator. It prepares you for the real thing by allowing you to test and refine your strategies.",
      "mentorAnalogy": "Just like a chef practices recipes to perfect them, a trader must practice AOI mapping to execute trades flawlessly."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You are analyzing EURUSD during the London session and identify an AOI at 1.2000. What confirmation signal should you look for before entering a trade?",
      "options": [
        {
          "id": "0",
          "text": "A bullish engulfing pattern with increased volume",
          "isCorrect": true,
          "feedback": "A bullish engulfing pattern with increased volume confirms buying interest at the AOI."
        },
        {
          "id": "1",
          "text": "A decrease in volume",
          "isCorrect": false,
          "feedback": "Decreased volume suggests a lack of commitment, not a confirmation."
        },
        {
          "id": "2",
          "text": "A bearish divergence on RSI",
          "isCorrect": false,
          "feedback": "Bearish divergence on RSI indicates potential weakness, not a buy confirmation."
        },
        {
          "id": "3",
          "text": "A doji candlestick",
          "isCorrect": false,
          "feedback": "A doji indicates indecision, not a strong confirmation signal."
        }
      ]
    },
    "visualKey": "forex-session-aoi"
  },
  {
    "type": "summary",
    "title": "Summary of Forex AOI Mapping and Trading",
    "label": "Forex Track",
    "body": "### Summary of Forex AOI Mapping and Trading\nReview the key concepts and strategies for mapping and trading within Forex AOIs. This card consolidates your understanding and prepares you for advanced applications.\n\n* **AOI Identification**: Recognize key price levels where significant market reactions are likely. Use historical data and technical analysis to pinpoint these zones.\n* **Session Transition Management**: Adjust strategies during session overlaps to mitigate risk and capitalize on increased liquidity.\n* **Confirmation Signals**: Validate AOIs with technical patterns, volume analysis, and indicators to enhance trade accuracy.",
    "context": {
      "keyTerms": [
        {
          "term": "Forex AOI",
          "definition": "A strategic price level in Forex trading where significant market reactions are anticipated."
        }
      ],
      "whyThisMatters": "Mastering AOI mapping and trading enhances precision and effectiveness in Forex trading.",
      "realLifeExample": "Mapping an AOI on GBPUSD at 1.3500 during the New York session, confirmed by a bullish engulfing pattern and rising volume.",
      "commonMistake": "Overlooking the importance of session transitions and confirmation signals when trading AOIs.",
      "quickNote": "Consolidate your AOI strategies for more effective trading.",
      "mentorText": "Consider this summary as your checklist before a flight. Ensure all systems are go before takeoff.",
      "mentorAnalogy": "Like an architect reviews blueprints before construction, a trader reviews AOI strategies before executing trades."
    },
    "taskData": null,
    "visualKey": "forex-session-aoi"
  }
];
