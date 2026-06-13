import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Trailing Stops in Gold's Parabolic Runs",
    "label": "Gold Track",
    "body": "### Trailing Stops: Techniques for Gold's Parabolic Runs\nEffective trailing stops during parabolic price movements in gold can secure profits while allowing for maximum trend expansion. This card teaches **specific techniques for applying trailing stops in these volatile conditions**.\n\n* **Dynamic Adjustment**: Implement a trailing stop that adjusts dynamically based on the price action, typically set at a distance of 1.5% to 2% below the peak price during a parabolic run.\n* **Incremental Lock-In**: As gold prices surge, incrementally adjust the trailing stop to lock in profits at key psychological levels, such as $1,800 or $1,900, to minimize risk while maximizing potential gains.\n* **Volatility Consideration**: Monitor the volatility of gold during parabolic runs; if the price exhibits rapid fluctuations, consider widening the trailing stop to avoid premature exits while still protecting capital.",
    "context": {
      "keyTerms": [
        {
          "term": "Parabolic Run",
          "definition": "A rapid price increase in gold characterized by steep upward movement."
        },
        {
          "term": "Trailing Stop",
          "definition": "A stop order that moves with the market price to secure profits."
        }
      ],
      "whyThisMatters": "Understanding how to apply trailing stops during parabolic runs is essential for capitalizing on significant price movements in gold markets.",
      "realLifeExample": "During a parabolic run in gold from $1,750 to $2,000, a trader sets a trailing stop at 1.5% below the peak, effectively locking in profits as the price fluctuates.",
      "commonMistake": "Traders often set trailing stops too tight during parabolic runs, leading to premature exits from profitable positions.",
      "quickNote": "Dynamic trailing stops maximize profit capture in volatile gold markets.",
      "mentorText": "When gold starts to run parabolically, adjust your trailing stop to follow the price closely but give it enough room to breathe. This way, you can ride the wave without getting knocked off too early.",
      "mentorAnalogy": "Think of your trailing stop as a safety harness on a roller coaster; it keeps you secure while allowing you to experience the full thrill of the ride."
    },
    "taskData": null,
    "visualKey": "trailing-stop-architectures"
  },
  {
    "type": "concept",
    "title": "Using ATR for Trailing Stops in Gold",
    "label": "Gold Track",
    "body": "### Trailing Stops: Utilizing ATR in Gold Trading\nThe Average True Range (ATR) indicator provides a quantitative measure of volatility, essential for setting effective trailing stops in gold trading. This card teaches **how to leverage ATR for optimal stop placement**.\n\n* **ATR Calculation**: Calculate the ATR over a specified period (e.g., 14 days) to determine the average volatility; use this value to set trailing stops at a multiple of the ATR (e.g., 1.5x ATR).\n* **Volatility-Based Adjustment**: Adjust the trailing stop based on current ATR readings; during high volatility, widen the stop to avoid being stopped out, while tightening it during low volatility periods.\n* **Market Context**: Always consider the broader market context; if gold is trending strongly, use a higher multiple of ATR to allow for price fluctuations while still protecting gains.",
    "context": {
      "keyTerms": [
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical indicator measuring market volatility."
        },
        {
          "term": "Volatility",
          "definition": "The degree of variation in trading prices over time."
        }
      ],
      "whyThisMatters": "Using ATR to set trailing stops allows traders to adapt to changing market conditions, enhancing risk management.",
      "realLifeExample": "If the ATR of gold is $20, a trader might set a trailing stop at $30 ($20 x 1.5) below the current price to accommodate volatility.",
      "commonMistake": "Traders often ignore ATR readings, leading to inappropriate stop placements that either get triggered too early or are too loose.",
      "quickNote": "ATR-based trailing stops adapt to market volatility, enhancing trade management.",
      "mentorText": "Always check the ATR before setting your trailing stop. If the market is volatile, give your trade some room to move; if it's calm, you can tighten your stop.",
      "mentorAnalogy": "Using ATR for trailing stops is like adjusting your car's suspension based on road conditions; it ensures a smoother ride regardless of the bumps ahead."
    },
    "taskData": null,
    "visualKey": "trailing-stop-architectures"
  },
  {
    "type": "concept",
    "title": "Identifying Swing Lows in Gold Markets",
    "label": "Gold Track",
    "body": "### Trailing Stops: Identifying Swing Lows in Gold Markets\nIdentifying swing lows is critical for strategically placing trailing stops in gold trading. This card teaches **how to leverage price action to optimize stop placement**.\n\n* **Swing Low Definition**: A swing low is defined as a price point that is lower than the surrounding price points; use this to determine potential areas for trailing stops.\n* **Confirmation with Candlestick Patterns**: Utilize candlestick patterns to confirm swing lows; a bullish engulfing pattern following a swing low can signal a strong upward movement, justifying a tighter trailing stop.\n* **Multiple Timeframe Analysis**: Analyze swing lows across multiple timeframes (e.g., daily and hourly) to identify robust support levels for placing trailing stops effectively.",
    "context": {
      "keyTerms": [
        {
          "term": "Swing Low",
          "definition": "A price point lower than the surrounding price points, indicating potential support."
        },
        {
          "term": "Candlestick Patterns",
          "definition": "Visual representations of price movements that provide insights into market sentiment."
        }
      ],
      "whyThisMatters": "Identifying swing lows allows traders to place trailing stops at strategic levels, enhancing trade management and risk control.",
      "realLifeExample": "After identifying a swing low at $1,750, a trader places a trailing stop just below this level, allowing for potential upward movement while protecting against downside risk.",
      "commonMistake": "Traders often place trailing stops without confirming swing lows, leading to ineffective stop placements that do not align with market structure.",
      "quickNote": "Identifying swing lows enhances the precision of trailing stop placements.",
      "mentorText": "When you spot a swing low, think of it as a safety net. Place your trailing stop just below it to protect your gains while allowing the trade to develop.",
      "mentorAnalogy": "Identifying swing lows is like finding the foundation of a building; it provides a solid base for your trading strategy."
    },
    "taskData": null,
    "visualKey": "trailing-stop-architectures"
  },
  {
    "type": "concept",
    "title": "Low-Timeframe Strategies for Gold Trailing Stops",
    "label": "Gold Track",
    "body": "### Trailing Stops: Low-Timeframe Strategies in Gold Trading\nImplementing trailing stops on low timeframes can capture rapid price movements in gold markets. This card discusses **the advantages of shorter timeframes for effective trailing stop management**.\n\n* **Increased Frequency of Trades**: Low timeframes allow for more frequent trading opportunities; set trailing stops tighter to capitalize on quick price movements while managing risk effectively.\n* **Quick Reaction to Market Changes**: Utilize shorter timeframes to react swiftly to market changes; trailing stops can be adjusted in real-time as price action unfolds, enhancing profit protection.\n* **Scalping Techniques**: For scalping strategies, set trailing stops at a fixed number of pips (e.g., 10-15 pips) to secure profits quickly while minimizing exposure to adverse price movements.",
    "context": {
      "keyTerms": [
        {
          "term": "Low-Timeframe Trading",
          "definition": "Trading strategies that utilize shorter time intervals for analysis and execution."
        },
        {
          "term": "Scalping",
          "definition": "A trading strategy focused on making small profits from rapid price changes."
        }
      ],
      "whyThisMatters": "Low-timeframe strategies enhance responsiveness to market dynamics, allowing traders to secure profits quickly.",
      "realLifeExample": "In a 5-minute chart, a trader sets a trailing stop 12 pips below the entry point after a quick upward movement in gold, locking in profits from rapid price fluctuations.",
      "commonMistake": "Traders often set trailing stops too wide on low timeframes, missing out on quick profit opportunities.",
      "quickNote": "Low-timeframe strategies enhance responsiveness and profit capture in gold trading.",
      "mentorText": "On lower timeframes, you need to be quick. Set your trailing stops tighter to catch those rapid moves and protect your gains without hesitation.",
      "mentorAnalogy": "Trading on low timeframes is like a sprinter; you need to react quickly and adjust your pace to stay ahead of the competition."
    },
    "taskData": null,
    "visualKey": "trailing-stop-architectures"
  },
  {
    "type": "concept",
    "title": "Understanding Gold Market Cycles",
    "label": "Gold Track",
    "body": "### Gold Market Cycles: Cyclical Nature and Trailing Stops\nUnderstanding the cyclical behavior of gold prices is essential for effective trailing stop strategies. This card teaches **how to align trailing stop placements with gold market cycles**.\n\n* **Cycle Identification**: Analyze historical price data to identify recurring patterns in gold prices, such as seasonal trends or geopolitical influences that affect demand.\n* **Stop Placement Strategy**: Position trailing stops at key cycle points, such as above recent swing highs during bullish phases or below swing lows in bearish trends, to maximize profit capture.\n* **Volatility Consideration**: Adjust trailing stop distances based on market volatility; tighter stops during low volatility phases and wider stops during high volatility to avoid premature exits.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Cycle",
          "definition": "A recurring pattern in price movements influenced by various economic factors."
        },
        {
          "term": "Swing High",
          "definition": "A peak in price action that indicates a potential reversal point."
        },
        {
          "term": "Swing Low",
          "definition": "A trough in price action that indicates a potential reversal point."
        }
      ],
      "whyThisMatters": "Understanding gold market cycles allows traders to strategically place trailing stops that align with price movements, enhancing profit retention.",
      "realLifeExample": "In Q1 2023, gold prices exhibited a bullish cycle, reaching $1,950. Placing a trailing stop 2% below the recent swing high allowed for profit capture as prices retraced to $1,900.",
      "commonMistake": "Failing to recognize the cyclical nature of gold can lead to inappropriate stop placements, resulting in missed profit opportunities.",
      "quickNote": "Align trailing stops with identified market cycles for optimal profit retention.",
      "mentorText": "When you analyze gold cycles, think of them as waves. Position your trailing stops at the crest of these waves to ride the trend without getting knocked off.",
      "mentorAnalogy": "Like a surfer who rides the waves, you must anticipate the cycle of the ocean to position yourself correctly and avoid wipeouts."
    },
    "taskData": null,
    "visualKey": "trailing-stop-architectures"
  },
  {
    "type": "concept",
    "title": "Practical Exercises for Gold Trailing Stops",
    "label": "Gold Track",
    "body": "### Practical Exercises: Implementing Trailing Stops in Gold Trading\nEngaging in practical exercises reinforces the application of trailing stop strategies in gold trading. This card provides **scenarios for traders to practice trailing stop implementation**.\n\n* **Scenario Simulation**: Create hypothetical trading scenarios using historical gold price data. Identify entry points and determine optimal trailing stop placements based on price action.\n* **Risk Assessment**: Evaluate the risk-reward ratio for each scenario, adjusting trailing stops accordingly to ensure that potential losses are minimized while profits are maximized.\n* **Performance Review**: After simulating trades, review the outcomes to analyze the effectiveness of trailing stop placements and refine strategies based on results.",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Simulation",
          "definition": "Creating hypothetical trading situations to practice decision-making."
        },
        {
          "term": "Risk-Reward Ratio",
          "definition": "A measure comparing the potential profit of a trade to its potential loss."
        }
      ],
      "whyThisMatters": "Practical exercises enable traders to apply theoretical knowledge, enhancing their ability to implement trailing stops effectively in real market conditions.",
      "realLifeExample": "In a simulated exercise, a trader identifies a bullish entry at $1,800 and sets a trailing stop at $1,780. After a price surge to $1,850, the stop is adjusted to $1,840, securing profits during a subsequent pullback.",
      "commonMistake": "Overlooking the importance of practice can lead to poor execution in live trading, resulting in ineffective trailing stop strategies.",
      "quickNote": "Engage in scenario simulations to refine trailing stop strategies in gold trading.",
      "mentorText": "Think of these exercises as practice drills. The more you simulate, the more instinctive your trailing stop placements will become in live markets.",
      "mentorAnalogy": "Just as athletes train with drills to perfect their skills, traders must practice scenarios to ensure they're ready for real market conditions."
    },
    "taskData": null,
    "visualKey": "trailing-stop-architectures"
  },
  {
    "type": "practice",
    "title": "Price Action Analysis for Gold Trailing Stops",
    "label": "Gold Track",
    "body": "### Price Action Analysis: Informing Trailing Stop Placements\nAnalyzing price action in gold markets is critical for effective trailing stop placements. This card emphasizes **the importance of real-time analysis for optimizing trailing stops**.\n\n* **Candlestick Patterns**: Identify key candlestick patterns that signal potential reversals or continuations, using them to adjust trailing stop levels dynamically as market conditions change.\n* **Support and Resistance Levels**: Utilize established support and resistance levels to inform trailing stop placements, ensuring that stops are set beyond these critical points to avoid being triggered by normal fluctuations.\n* **Volume Analysis**: Monitor trading volume alongside price action to confirm trends; increasing volume during price advances suggests a strong trend, warranting tighter trailing stops to lock in profits.",
    "context": {
      "keyTerms": [
        {
          "term": "Candlestick Patterns",
          "definition": "Visual representations of price movements that indicate market sentiment."
        },
        {
          "term": "Support Level",
          "definition": "A price level at which buying interest is strong enough to prevent further decline."
        },
        {
          "term": "Resistance Level",
          "definition": "A price level at which selling interest is strong enough to prevent further advance."
        }
      ],
      "whyThisMatters": "Real-time price action analysis enables traders to make informed decisions regarding trailing stop placements, enhancing the effectiveness of their strategies.",
      "realLifeExample": "During a bullish trend in gold, a trader observes a bullish engulfing pattern at $1,850, prompting an adjustment of the trailing stop to $1,840, effectively locking in profits as the price rises to $1,900.",
      "commonMistake": "Neglecting to analyze price action can lead to poorly timed trailing stop adjustments, resulting in unnecessary losses.",
      "quickNote": "Utilize price action analysis to inform and adjust trailing stop placements dynamically.",
      "mentorText": "Always keep an eye on the price action. It’s like reading the pulse of the market; adjust your stops based on what you see happening in real-time.",
      "mentorAnalogy": "Like a pilot constantly monitoring instruments during flight, you must analyze price action to navigate your trades effectively."
    },
    "taskData": {
      "type": "choice_block",
      "question": "A trader notices a bullish engulfing pattern forming on the gold chart at $1,850. What should be the next step regarding the trailing stop?",
      "options": [
        {
          "id": "0",
          "text": "Adjust the trailing stop to $1,840 to lock in profits.",
          "isCorrect": true,
          "feedback": "Correct. Adjusting the stop to $1,840 captures profits while allowing for further price movement."
        },
        {
          "id": "1",
          "text": "Leave the trailing stop unchanged at $1,820.",
          "isCorrect": false,
          "feedback": "Incorrect. Leaving the stop unchanged does not capitalize on the bullish signal."
        },
        {
          "id": "2",
          "text": "Move the trailing stop to $1,900 immediately.",
          "isCorrect": false,
          "feedback": "Incorrect. Moving the stop too far away can expose you to larger losses."
        },
        {
          "id": "3",
          "text": "Cancel the trailing stop altogether.",
          "isCorrect": false,
          "feedback": "Incorrect. Canceling the stop removes the safety net for your profits."
        }
      ]
    },
    "visualKey": "trailing-stop-architectures"
  },
  {
    "type": "summary",
    "title": "Summary of Gold Trailing Stop Techniques",
    "label": "Gold Track",
    "body": "### Summary: Key Techniques for Implementing Trailing Stops in Gold Trading\nThis card summarizes the essential techniques for effectively implementing trailing stops in gold trading. Understanding these techniques is vital for adapting to market conditions.\n\n* **Dynamic Adjustments**: Continuously adjust trailing stops based on price action, market cycles, and volatility to maximize profit retention while minimizing risk exposure.\n* **Strategic Placement**: Position trailing stops around key support and resistance levels, ensuring they are set to withstand normal market fluctuations without triggering unnecessarily.\n* **Performance Monitoring**: Regularly review trailing stop effectiveness and adjust strategies based on market performance to ensure alignment with current conditions.",
    "context": {
      "keyTerms": [
        {
          "term": "Dynamic Adjustments",
          "definition": "The practice of continuously modifying trailing stops based on market conditions."
        },
        {
          "term": "Performance Monitoring",
          "definition": "The process of evaluating the effectiveness of trading strategies over time."
        }
      ],
      "whyThisMatters": "Mastering these techniques allows traders to secure profits while effectively managing risk in the volatile gold market.",
      "realLifeExample": "A trader who consistently adjusts trailing stops based on market conditions was able to secure profits during a gold rally from $1,800 to $1,950, avoiding losses during subsequent pullbacks.",
      "commonMistake": "Failing to adapt trailing stop strategies to changing market conditions can lead to missed profit opportunities and increased risk.",
      "quickNote": "Implement dynamic adjustments and strategic placements for effective trailing stop management.",
      "mentorText": "Always be ready to adapt your trailing stops. The market is fluid, and your strategy must be just as dynamic to protect your gains.",
      "mentorAnalogy": "Like a seasoned sailor adjusting sails to changing winds, you must modify your trailing stops to navigate the unpredictable currents of the market."
    },
    "taskData": null,
    "visualKey": "trailing-stop-architectures"
  }
];
