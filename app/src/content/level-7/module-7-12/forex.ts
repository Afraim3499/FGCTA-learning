import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Gold Volatility and Forex Pair Execution",
    "label": "Forex Track",
    "body": "### Core Scenario: Gold Volatility and Forex Execution\nGold volatility can significantly influence forex pair movements, creating opportunities for informed execution. This card outlines **strategies for capitalizing on correlated movements between gold and forex pairs**.\n\n* **Volatility Assessment**: Monitor the COMEX gold futures for volatility spikes, particularly during economic releases or geopolitical events. A 1% movement in gold can lead to a corresponding 0.5% movement in XAU/USD.\n* **Execution Strategy**: Execute forex trades in pairs like AUD/USD or CAD/USD when gold volatility exceeds 1.5%. This correlation often leads to enhanced price movements in these pairs.\n* **Spread Considerations**: Be aware of spread widening during high volatility periods. For instance, spreads on AUD/USD may increase to 3 pips when gold spikes, affecting execution efficiency.",
    "context": {
      "keyTerms": [
        {
          "term": "Gold Volatility",
          "definition": "The degree of variation in gold prices over a specific period."
        },
        {
          "term": "Correlation",
          "definition": "The relationship between the price movements of gold and forex pairs."
        }
      ],
      "whyThisMatters": "Understanding gold volatility allows traders to anticipate forex pair movements and optimize execution strategies during critical market conditions.",
      "realLifeExample": "On March 10, 2023, gold spiked 2% following an unexpected inflation report, leading to a 1% rise in AUD/USD. Executing a long position at this time could have capitalized on the correlated movement.",
      "commonMistake": "Failing to adjust forex execution strategies based on gold volatility can lead to missed opportunities or increased losses.",
      "quickNote": "Gold volatility directly influences forex pair movements, necessitating strategic execution.",
      "mentorText": "When gold moves, forex pairs often follow. Keep an eye on those spikes and adjust your trades accordingly. If gold jumps, consider how your forex pairs will react.",
      "mentorAnalogy": "Think of trading like a symphony; when the conductor (gold volatility) raises the tempo, the musicians (forex pairs) must follow the rhythm to create harmony."
    },
    "taskData": null,
    "visualKey": "gold-exec-specifics"
  },
  {
    "type": "concept",
    "title": "Correlation Management During Gold Events",
    "label": "Forex Track",
    "body": "### Core Scenario: Managing Correlations\nDuring high volatility events in gold, managing correlations with forex pairs is critical for optimal execution. This card teaches **how to effectively manage these correlations**.\n\n* **Event Identification**: Identify key events such as FOMC announcements or major economic data releases that typically impact gold prices. For example, a surprise rate hike can lead to a rapid gold price adjustment.\n* **Correlation Analysis**: Use statistical tools to analyze historical correlations between gold and forex pairs. For instance, during the last FOMC meeting, XAU/USD and EUR/USD showed a 0.7 correlation, indicating a strong relationship.\n* **Execution Timing**: Execute trades in correlated pairs within 10 minutes of gold price movements. For instance, if gold drops by $10, consider shorting EUR/USD immediately to capitalize on the expected reaction.",
    "context": {
      "keyTerms": [
        {
          "term": "Correlation Analysis",
          "definition": "The statistical method of assessing the relationship between gold and forex pairs."
        },
        {
          "term": "High Volatility Events",
          "definition": "Market occurrences that cause significant price fluctuations in gold."
        }
      ],
      "whyThisMatters": "Effective correlation management during gold events can enhance trade execution and profitability in forex markets.",
      "realLifeExample": "On January 25, 2023, following a surprise jobs report, gold fell $15, leading to a corresponding 0.8% drop in GBP/USD. Executing a short position on GBP/USD during this time would have aligned with the observed correlation.",
      "commonMistake": "Ignoring correlation shifts during volatile events can lead to poorly timed trades and increased risk.",
      "quickNote": "Manage correlations actively during gold events to optimize forex execution.",
      "mentorText": "Always be aware of how gold's movements affect your forex pairs. If you see gold reacting, don't hesitate—execute your trades quickly to take advantage.",
      "mentorAnalogy": "Managing correlations is like a tightrope walker adjusting their balance; one misstep can lead to a fall, but careful adjustments keep you on track."
    },
    "taskData": null,
    "visualKey": "gold-exec-specifics"
  },
  {
    "type": "concept",
    "title": "Impact of Gold Price on Currency Pairs",
    "label": "Forex Track",
    "body": "### Core Scenario: Gold Price Influence\nFluctuations in gold prices can have a direct impact on major currency pairs. This card explores **how to adjust forex execution strategies based on gold price movements**.\n\n* **Price Movement Correlation**: Analyze how a $10 increase in gold typically affects currency pairs like AUD/USD and CAD/USD. Historically, a $10 rise in gold correlates with a 0.5% increase in these pairs.\n* **Execution Adjustments**: Adjust your forex execution strategy based on gold price trends. For example, if gold rises from $1,800 to $1,810, consider entering a long position in AUD/USD if it shows a corresponding bullish trend.\n* **Market Sentiment Analysis**: Monitor market sentiment indicators that reflect gold price movements. A bullish sentiment towards gold often leads to a stronger Australian dollar due to its commodity-linked economy.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of traders towards a particular market or asset."
        },
        {
          "term": "Execution Strategy",
          "definition": "The plan for entering and exiting trades based on market conditions."
        }
      ],
      "whyThisMatters": "Understanding the impact of gold prices on currency pairs allows traders to refine their execution strategies for enhanced profitability.",
      "realLifeExample": "On February 15, 2023, gold prices rose from $1,850 to $1,860, leading to a 0.6% increase in CAD/USD. Executing a long position at this time would have capitalized on the upward trend.",
      "commonMistake": "Failing to recognize the relationship between gold price movements and forex pairs can result in missed trading opportunities.",
      "quickNote": "Gold price fluctuations directly influence major currency pairs, necessitating strategic adjustments.",
      "mentorText": "Keep a close eye on gold prices; they can dictate the direction of your forex trades. If gold is rising, look for opportunities in related currency pairs.",
      "mentorAnalogy": "Think of gold as the sun; when it shines bright, the surrounding planets (currency pairs) are drawn closer, reflecting its light."
    },
    "taskData": null,
    "visualKey": "gold-exec-specifics"
  },
  {
    "type": "concept",
    "title": "Timing Forex Trades Around Gold Fixing",
    "label": "Forex Track",
    "body": "### Core Scenario: Gold Fixing Timing\nGold fixing times are critical moments that can influence forex market dynamics. This card explains **how to time forex trades to align with gold fixing**.\n\n* **Understanding Fixing Times**: The London gold fixing occurs at 10:30 AM GMT and can lead to significant price movements. Be prepared to execute trades shortly before and after this time.\n* **Pre-Fixing Strategy**: Analyze price action in forex pairs leading up to the fixing. If gold shows bullish momentum before the fixing, consider entering long positions in correlated pairs like AUD/USD.\n* **Post-Fixing Execution**: Monitor price reactions immediately after the fixing. For instance, if gold rises sharply post-fixing, execute a long position in USD/CAD if it shows a corresponding bullish trend.",
    "context": {
      "keyTerms": [
        {
          "term": "Gold Fixing",
          "definition": "The process of determining the price of gold at a specific time."
        },
        {
          "term": "Pre-Fixing Strategy",
          "definition": "The plan to execute trades based on anticipated movements around gold fixing times."
        }
      ],
      "whyThisMatters": "Aligning forex trades with gold fixing times can enhance execution precision and capitalize on market volatility.",
      "realLifeExample": "On April 5, 2023, leading up to the gold fixing, gold prices showed bullish momentum, rising from $1,950 to $1,960. Executing a long position in AUD/USD during this period would have been advantageous.",
      "commonMistake": "Not considering the impact of gold fixing times can lead to missed opportunities or poorly timed trades.",
      "quickNote": "Align forex trades with gold fixing times for optimal execution.",
      "mentorText": "Timing is everything. Pay attention to gold fixing; it can create opportunities in forex that you don't want to miss. Execute your trades strategically around these times.",
      "mentorAnalogy": "Timing your trades around gold fixing is like a chef preparing a dish; the right ingredients at the right moment create a perfect meal."
    },
    "taskData": null,
    "visualKey": "gold-exec-specifics"
  },
  {
    "type": "concept",
    "title": "Using Gold as a Hedge in Forex Trading",
    "label": "Forex Track",
    "body": "### Core Scenario: Gold as a Hedge\nGold serves as a strategic hedge against currency fluctuations, particularly during periods of market uncertainty. This card details **how to effectively incorporate gold into your forex trading strategy**.\n\n* **Correlation Analysis**: Assess the historical correlation between XAU/USD and your primary forex pairs. A negative correlation can provide a protective buffer during adverse movements.\n* **Position Sizing**: Adjust your position size in forex trades based on your gold holdings. For instance, if holding 1 ounce of gold, consider reducing your forex exposure by 10% to mitigate risk.\n* **Market Sentiment Monitoring**: Continuously evaluate market sentiment towards gold. An increase in gold prices often signals risk aversion, prompting adjustments in forex positions accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "Hedge",
          "definition": "A strategy used to offset potential losses in one investment by taking an opposite position in a related asset."
        }
      ],
      "whyThisMatters": "Utilizing gold as a hedge can protect forex positions during volatile market conditions, enhancing overall portfolio stability.",
      "realLifeExample": "If the EUR/USD is trading at 1.1200 and gold spikes to $1,800 due to geopolitical tensions, consider reducing your EUR/USD position to limit exposure.",
      "commonMistake": "Failing to adjust forex positions in response to gold price movements can lead to increased risk during market turbulence.",
      "quickNote": "Gold can serve as a protective asset against forex volatility.",
      "mentorText": "When gold prices rise, it often indicates market fear. I adjust my forex positions accordingly to shield my portfolio from potential losses.",
      "mentorAnalogy": "Think of gold as a parachute during turbulent flights; it provides a safety net when market conditions become unpredictable."
    },
    "taskData": null,
    "visualKey": "gold-exec-specifics"
  },
  {
    "type": "concept",
    "title": "Executing Forex Strategies During Gold News",
    "label": "Forex Track",
    "body": "### Core Scenario: News Impact on Forex\nGold-related news events can significantly influence forex markets, necessitating a strategic approach to execution. This card outlines **how to align forex trades with gold news releases**.\n\n* **Pre-News Positioning**: Establish positions ahead of major gold news releases, such as the Non-Farm Payrolls or inflation data. For example, if anticipating bullish gold news, consider a long position in USD/JPY.\n* **Volatility Management**: Utilize limit orders to manage slippage during high volatility periods. Set entry points slightly above or below key support/resistance levels to capture favorable moves.\n* **Post-News Reaction**: After news releases, reassess market conditions. If gold spikes due to positive news, evaluate the potential for a correlated movement in your forex pairs, adjusting positions as necessary.",
    "context": {
      "keyTerms": [
        {
          "term": "News Event",
          "definition": "A scheduled announcement that can significantly impact market prices, particularly in commodities and currencies."
        }
      ],
      "whyThisMatters": "Understanding the relationship between gold news and forex movements enables traders to capitalize on price volatility effectively.",
      "realLifeExample": "During a gold price surge following a positive jobs report, the AUD/USD may react negatively, allowing for a short position entry at 0.7400.",
      "commonMistake": "Entering trades without considering the potential impact of gold news can lead to unexpected losses due to rapid market shifts.",
      "quickNote": "Align forex strategies with gold news for optimal execution.",
      "mentorText": "Before a gold-related news release, I always position myself strategically. It’s about anticipating the market's reaction and being ready to adapt.",
      "mentorAnalogy": "Executing trades during news events is like a surgeon preparing for a critical operation; timing and precision are essential to success."
    },
    "taskData": null,
    "visualKey": "gold-exec-specifics"
  },
  {
    "type": "practice",
    "title": "Practical Forex Execution Exercises",
    "label": "Forex Track",
    "body": "### Core Scenario: Simulated Execution\nEngaging in practical exercises simulates real-time forex execution during gold volatility events. This card focuses on **applying learned strategies in controlled scenarios**.\n\n* **Scenario Setup**: Create a simulated trading environment where gold experiences a sudden price movement. For instance, simulate a $20 increase in gold prices within a 30-minute window.\n* **Execution Strategy Application**: Execute trades based on predefined strategies. For example, if gold rises sharply, consider shorting correlated pairs like GBP/USD or AUD/USD, targeting a 50-pip gain.\n* **Review and Adjust**: Post-execution, analyze the outcomes. Assess whether the strategies employed effectively captured the market movement and identify areas for improvement.",
    "context": {
      "keyTerms": [
        {
          "term": "Simulated Trading",
          "definition": "Practicing trading strategies in a controlled environment without real financial risk."
        }
      ],
      "whyThisMatters": "Practicing execution during simulated gold volatility enhances decision-making skills and prepares traders for real market conditions.",
      "realLifeExample": "In a simulation, if gold rises from $1,800 to $1,820, execute a short on the EUR/USD at 1.1200, aiming for a quick 30-pip profit.",
      "commonMistake": "Failing to adhere to execution strategies during simulations can lead to poor habits in real trading scenarios.",
      "quickNote": "Practice execution strategies during simulated gold volatility to enhance skills.",
      "mentorText": "In practice, I simulate various scenarios to ensure I’m ready for real market movements. It’s about honing your execution under pressure.",
      "mentorAnalogy": "Simulating trades is akin to a pilot conducting flight simulations; it prepares you for real-world challenges without the risk of crashing."
    },
    "taskData": {
      "type": "choice_block",
      "question": "In a simulated scenario where gold rises sharply, what is the best initial execution strategy for your forex positions?",
      "options": [
        {
          "id": "0",
          "text": "Short correlated pairs like AUD/USD immediately after the gold spike.",
          "isCorrect": true,
          "feedback": "Correct. Shorting correlated pairs allows you to capitalize on the inverse relationship during gold volatility."
        },
        {
          "id": "1",
          "text": "Hold existing forex positions without any changes.",
          "isCorrect": false,
          "feedback": "Incorrect. Holding positions without adjustment can lead to increased risk during gold volatility."
        },
        {
          "id": "2",
          "text": "Increase exposure in long positions for all forex pairs.",
          "isCorrect": false,
          "feedback": "Incorrect. Increasing exposure during gold spikes can amplify losses if the market moves against you."
        },
        {
          "id": "3",
          "text": "Wait for the gold price to stabilize before executing any trades.",
          "isCorrect": false,
          "feedback": "Incorrect. Waiting may cause missed opportunities to capitalize on immediate market movements."
        }
      ]
    },
    "visualKey": "gold-exec-specifics"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Execution Around Gold Volatility",
    "label": "Forex Track",
    "body": "### Core Scenario: Recap of Key Strategies\nA comprehensive understanding of forex execution strategies during gold volatility is crucial for effective trading. This card summarizes **the essential strategies for managing forex pairs in relation to gold movements**.\n\n* **Correlation Awareness**: Maintain a clear understanding of how gold prices affect your forex pairs. For instance, a rising gold price typically correlates with a stronger USD, impacting pairs like USD/CHF.\n* **Execution Discipline**: Stick to your execution plan during gold volatility. Avoid emotional trading decisions; instead, rely on your predefined strategies to guide actions.\n* **Risk Management**: Implement strict risk management protocols. For example, set stop-loss orders on forex trades correlated with gold to limit potential losses during unexpected price swings.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Management",
          "definition": "The process of identifying, assessing, and controlling financial risks in trading."
        }
      ],
      "whyThisMatters": "Reinforcing execution strategies ensures traders can navigate gold volatility effectively, maintaining profitability and minimizing risk.",
      "realLifeExample": "If gold rises to $1,850, adjust your USD/JPY position to reflect the anticipated stronger dollar, setting a stop-loss at 110.50.",
      "commonMistake": "Neglecting to adapt forex strategies in response to gold price movements can lead to significant losses.",
      "quickNote": "Effective execution strategies are vital during gold volatility.",
      "mentorText": "Always remember, execution is not just about entering trades; it’s about managing them in relation to gold’s movements. Stick to your plan.",
      "mentorAnalogy": "Think of your execution strategies as a ship's navigation system; they guide you through turbulent waters, ensuring you stay on course."
    },
    "taskData": null,
    "visualKey": "gold-exec-specifics"
  }
];
