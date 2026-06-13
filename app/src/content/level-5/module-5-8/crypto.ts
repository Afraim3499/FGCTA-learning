import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Trailing Perpetual Stops in Crypto",
    "label": "Crypto Track",
    "body": "### Trailing Mechanism: Perpetual Stops in Cryptocurrency\nTrailing perpetual stops are designed to secure profits by adjusting dynamically with market movements, particularly in the volatile crypto landscape. This card details **how to implement trailing perpetual stops to protect gains from sudden reversals**.\n\n* **Dynamic Adjustment**: Set the trailing stop at a fixed percentage or dollar amount below the market price, ensuring it moves up with price increases while remaining static during declines.\n* **Trigger Conditions**: Activate the trailing stop when the asset price exceeds a predetermined threshold, such as a recent swing high, to lock in profits effectively.\n* **Execution Timing**: Monitor market conditions closely; the trailing stop should be adjusted in real-time to account for rapid price movements common in crypto trading.",
    "context": {
      "keyTerms": [
        {
          "term": "Trailing Stop",
          "definition": "A stop order that moves with the market price to secure profits."
        },
        {
          "term": "Perpetual Stop",
          "definition": "A trailing stop that continuously adjusts as the market price rises."
        }
      ],
      "whyThisMatters": "Effective use of trailing perpetual stops can significantly enhance profit retention in highly volatile crypto markets.",
      "realLifeExample": "In a scenario where Bitcoin rises from $30,000 to $35,000, a trailing stop set at 5% would adjust from $28,500 to $33,250, securing profits against a sudden drop.",
      "commonMistake": "Traders often set trailing stops too tight, leading to premature exits during normal market fluctuations.",
      "quickNote": "Utilize trailing perpetual stops to dynamically lock in profits as market prices rise.",
      "mentorText": "Think of trailing stops as your safety net. If Bitcoin surges, let your stop follow it up, but don’t let it get too close to the action; you want to avoid getting knocked out by minor dips.",
      "mentorAnalogy": "Consider a tightrope walker adjusting their balance pole; they must maintain a safe distance from the edge while still moving forward."
    },
    "taskData": null,
    "visualKey": "trailing-stop-architectures"
  },
  {
    "type": "concept",
    "title": "Strategies for Managing Flash Reversals",
    "label": "Crypto Track",
    "body": "### Flash Reversals: Managing Trailing Stops\nFlash reversals in crypto can occur rapidly, necessitating effective strategies for managing trailing stops. This card focuses on **quick decision-making techniques to mitigate losses during sudden market shifts**.\n\n* **Predefined Exit Points**: Establish clear exit points based on volatility metrics, such as Average True Range (ATR), to determine appropriate trailing stop distances before entering a trade.\n* **Adaptive Responses**: Be prepared to adjust trailing stops in real-time based on market sentiment and sudden price movements, especially during high-impact news events.\n* **Order Types**: Utilize conditional orders to automate trailing stop adjustments, ensuring that your strategy remains intact even during periods of high volatility.",
    "context": {
      "keyTerms": [
        {
          "term": "Flash Reversal",
          "definition": "A rapid price movement in the opposite direction of the prevailing trend."
        },
        {
          "term": "Average True Range (ATR)",
          "definition": "A measure of market volatility used to set stop distances."
        }
      ],
      "whyThisMatters": "Understanding how to manage trailing stops during flash reversals can prevent significant losses and protect capital.",
      "realLifeExample": "If Ethereum experiences a flash reversal from $2,000 to $1,800 in minutes, having a trailing stop set based on ATR could allow for a more strategic exit rather than a panic sell.",
      "commonMistake": "Failing to adjust trailing stops in response to sudden market changes can lead to missed opportunities or amplified losses.",
      "quickNote": "Prepare for flash reversals by establishing exit points and adapting your trailing stop strategy accordingly.",
      "mentorText": "When the market moves fast, you must react faster. Set your stops based on volatility, and don’t hesitate to adjust them as conditions change.",
      "mentorAnalogy": "Think of a race car driver adjusting their speed based on the track conditions; quick adjustments can mean the difference between winning and losing."
    },
    "taskData": null,
    "visualKey": "trailing-stop-architectures"
  },
  {
    "type": "concept",
    "title": "Understanding Volatility in Cryptocurrency Markets",
    "label": "Crypto Track",
    "body": "### Volatility Characteristics: Cryptocurrency Markets\nCryptocurrency markets exhibit unique volatility characteristics that significantly impact trailing stop placements. This card explores **how to assess volatility to optimize trailing stop strategies**.\n\n* **Volatility Indicators**: Use indicators like Bollinger Bands and ATR to gauge market volatility, which informs the distance of trailing stops from current prices.\n* **Market Sentiment Analysis**: Monitor sentiment indicators and news cycles that can trigger sudden price swings, adjusting trailing stops accordingly to avoid being stopped out prematurely.\n* **Timeframe Considerations**: Different timeframes exhibit varying volatility; longer timeframes may require wider trailing stops to accommodate larger price swings.",
    "context": {
      "keyTerms": [
        {
          "term": "Bollinger Bands",
          "definition": "A volatility indicator that consists of a middle band and two outer bands."
        },
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of investors toward a particular security or financial market."
        }
      ],
      "whyThisMatters": "Understanding volatility is crucial for placing effective trailing stops that can withstand market fluctuations.",
      "realLifeExample": "During a period of high volatility, Bitcoin's price may fluctuate by $1,000 within hours; utilizing ATR to set a trailing stop at $1,200 below the peak can help secure profits.",
      "commonMistake": "Traders often underestimate volatility, leading to trailing stops that are too tight and resulting in frequent stop-outs.",
      "quickNote": "Assess market volatility using indicators to determine optimal trailing stop distances.",
      "mentorText": "Volatility is your friend and enemy. Use it to your advantage by placing your stops wisely, allowing for price fluctuations without getting knocked out.",
      "mentorAnalogy": "Like a sailor adjusting their sails to the wind, you must adapt your trailing stops to the market's volatility."
    },
    "taskData": null,
    "visualKey": "trailing-stop-architectures"
  },
  {
    "type": "concept",
    "title": "Analyzing Market Structure in Crypto",
    "label": "Crypto Track",
    "body": "### Market Structure: Analyzing for Trailing Stops\nEffective placement of trailing stops requires a thorough analysis of market structure in cryptocurrency trading. This card discusses **how to identify swing points to optimize trailing stop placement**.\n\n* **Identifying Swing Highs and Lows**: Use technical analysis to pinpoint swing highs and lows, which serve as critical reference points for setting trailing stops.\n* **Support and Resistance Levels**: Incorporate key support and resistance levels into your trailing stop strategy; placing stops just below these levels can provide additional protection against market reversals.\n* **Trend Analysis**: Assess the overall trend direction; in an uptrend, trailing stops should be adjusted upward based on recent swing lows to maximize profit potential.",
    "context": {
      "keyTerms": [
        {
          "term": "Swing High",
          "definition": "A peak in price action where the price reverses downward."
        },
        {
          "term": "Support and Resistance",
          "definition": "Price levels where the market tends to reverse direction."
        }
      ],
      "whyThisMatters": "Analyzing market structure allows for strategic trailing stop placements that align with market dynamics.",
      "realLifeExample": "If Litecoin forms a swing high at $150 and a swing low at $140, placing a trailing stop just below $140 can protect against a potential reversal while allowing for upward movement.",
      "commonMistake": "Ignoring market structure can lead to trailing stops that are poorly positioned, resulting in unnecessary losses.",
      "quickNote": "Analyze swing points and market structure to strategically place trailing stops.",
      "mentorText": "Market structure is your roadmap. Identify the swings, and let them guide your trailing stop placements to maximize your gains.",
      "mentorAnalogy": "Like an architect studying blueprints, you must understand the structure of the market to build a solid trading plan."
    },
    "taskData": null,
    "visualKey": "trailing-stop-architectures"
  },
  {
    "type": "concept",
    "title": "Risk Management Techniques for Crypto Trailing Stops",
    "label": "Crypto Track",
    "body": "### Risk Management: Trailing Stops in Cryptocurrency\nEffective risk management is vital for capital preservation in volatile crypto markets. This card discusses **specific techniques for implementing trailing stops to safeguard investments**.\n\n* **Dynamic Adjustment**: Set trailing stops based on volatility metrics, such as Average True Range (ATR), to adapt to rapid price movements. For instance, if Bitcoin's ATR is $500, consider a trailing stop of 1.5x ATR, equating to a $750 buffer.\n* **Percentage-Based Stops**: Implement a fixed percentage trailing stop (e.g., 5%) from the highest price achieved during the trade. If Ethereum reaches $3,000, the stop would activate at $2,850, securing profits while allowing for upward movement.\n* **Time-Based Adjustments**: Regularly review and adjust trailing stops based on market conditions and timeframes. For example, a trader might tighten stops after a significant price surge to lock in gains while maintaining exposure to further upside potential.",
    "context": {
      "keyTerms": [
        {
          "term": "Average True Range (ATR)",
          "definition": "A volatility indicator measuring market movement over a specified period."
        },
        {
          "term": "Trailing Stop",
          "definition": "A stop order that moves with the market price to protect gains."
        }
      ],
      "whyThisMatters": "Implementing robust risk management techniques with trailing stops is essential to mitigate losses in the unpredictable crypto landscape.",
      "realLifeExample": "During a bullish run, Litecoin surged from $150 to $200. A trader set a trailing stop at 5%, which would activate at $190, effectively locking in a $40 profit per unit.",
      "commonMistake": "Traders often set trailing stops too close to the market price, leading to premature exits during normal price fluctuations.",
      "quickNote": "Utilize dynamic adjustments and percentage-based stops to effectively manage risk in crypto trading.",
      "mentorText": "As your coach, I want you to think of trailing stops as your safety net. If you’re riding a wave of profit, don’t let it crash without a plan to secure your gains.",
      "mentorAnalogy": "Think of trailing stops like a parachute for skydivers; it allows you to enjoy the free fall while ensuring a safe landing when the time comes."
    },
    "taskData": null,
    "visualKey": "trailing-stop-architectures"
  },
  {
    "type": "concept",
    "title": "Practical Exercises for Crypto Trailing Stops",
    "label": "Crypto Track",
    "body": "### Practical Application: Implementing Trailing Stops\nHands-on practice is crucial for mastering trailing stop techniques in cryptocurrency trading. This card provides **scenarios to reinforce your understanding of trailing stop implementation**.\n\n* **Scenario Simulation**: Create a simulated trading environment where you apply trailing stops on various cryptocurrencies. For example, simulate a trade on Cardano (ADA) starting at $1.00, applying a trailing stop of 10% to observe how it reacts to price fluctuations.\n* **Backtesting Strategies**: Utilize historical price data to backtest different trailing stop strategies. Analyze a scenario where Bitcoin fluctuated between $30,000 and $35,000, testing both fixed and percentage-based trailing stops to determine which yielded better results.\n* **Real-Time Application**: Execute a live trade with a trailing stop in a low-stakes environment. For instance, buy Ripple (XRP) at $0.50 and set a trailing stop at 5%, tracking how the stop adjusts as the price moves.",
    "context": {
      "keyTerms": [
        {
          "term": "Backtesting",
          "definition": "The process of testing a trading strategy using historical data."
        },
        {
          "term": "Simulated Trading",
          "definition": "Practicing trading strategies in a risk-free environment."
        }
      ],
      "whyThisMatters": "Engaging in practical exercises solidifies understanding and prepares traders for real market conditions.",
      "realLifeExample": "In a simulated environment, a trader applies a trailing stop on Solana (SOL) starting at $40, observing how the stop adjusts as the price reaches $50, then $55.",
      "commonMistake": "Failing to adjust trailing stops based on market conditions can lead to missed opportunities or losses.",
      "quickNote": "Practice with simulations and backtesting to refine your trailing stop strategies.",
      "mentorText": "I want you to immerse yourself in these scenarios. The more you practice, the more instinctive your trailing stop decisions will become in live trading.",
      "mentorAnalogy": "Consider this practice like a flight simulator for pilots; it prepares you for real-world conditions without the risk of crashing."
    },
    "taskData": null,
    "visualKey": "trailing-stop-architectures"
  },
  {
    "type": "practice",
    "title": "Automating Trailing Stops in Crypto Trading",
    "label": "Crypto Track",
    "body": "### Automation: Enhancing Trailing Stops\nAutomation can significantly improve the efficiency of trailing stops in cryptocurrency trading. This card explores **tools and methods for automating trailing stop processes**.\n\n* **Trading Bots**: Utilize trading bots that support trailing stop functionality. For example, a bot can be programmed to automatically set a trailing stop for Bitcoin at 3% below the highest price reached during the trade.\n* **API Integration**: Leverage APIs from exchanges like Binance or Coinbase Pro to automate trailing stop orders. A trader can set parameters to trigger a trailing stop when Ethereum exceeds $2,500, ensuring timely execution without manual intervention.\n* **Alerts and Notifications**: Set up alerts to notify you when your trailing stop is triggered. For instance, if you set a trailing stop for Litecoin at 5%, receive a notification when the price hits the stop level, allowing for immediate action if necessary.",
    "context": {
      "keyTerms": [
        {
          "term": "Trading Bot",
          "definition": "Automated software that executes trades based on predefined criteria."
        },
        {
          "term": "API (Application Programming Interface)",
          "definition": "A set of protocols for building and interacting with software applications."
        }
      ],
      "whyThisMatters": "Automating trailing stops enhances trading efficiency and reduces the emotional burden of manual adjustments.",
      "realLifeExample": "A trader uses a trading bot to manage a position in Chainlink (LINK), setting an automated trailing stop at 4% below the peak price of $25, ensuring consistent risk management.",
      "commonMistake": "Over-reliance on automation without understanding the underlying mechanics can lead to unexpected losses.",
      "quickNote": "Automate trailing stops to enhance efficiency and reduce manual intervention.",
      "mentorText": "Think of automation as your co-pilot. It handles the repetitive tasks, allowing you to focus on strategy and market analysis.",
      "mentorAnalogy": "Just as an autopilot system assists pilots in maintaining course, automated trailing stops help traders manage their positions without constant monitoring."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You want to automate a trailing stop for a position in Bitcoin currently trading at $35,000. What is the best approach?",
      "options": [
        {
          "id": "0",
          "text": "Set a trading bot to trigger a trailing stop at 3% below the highest price reached.",
          "isCorrect": true,
          "feedback": "This approach ensures that the stop adjusts dynamically as the price increases."
        },
        {
          "id": "1",
          "text": "Manually adjust the trailing stop every hour based on market conditions.",
          "isCorrect": false,
          "feedback": "Manual adjustments can lead to emotional decision-making and missed opportunities."
        },
        {
          "id": "2",
          "text": "Use a fixed stop loss instead of a trailing stop.",
          "isCorrect": false,
          "feedback": "A fixed stop loss does not allow for profit protection as the price increases."
        },
        {
          "id": "3",
          "text": "Set a trailing stop at a fixed dollar amount below the entry price.",
          "isCorrect": false,
          "feedback": "This method does not account for price volatility and may lead to premature exits."
        }
      ]
    },
    "visualKey": "trailing-stop-architectures"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Trailing Stop Techniques",
    "label": "Crypto Track",
    "body": "### Summary: Key Techniques for Trailing Stops\nThis summary consolidates the essential techniques for implementing trailing stops in cryptocurrency trading. Understanding these methods is critical for adapting to market volatility.\n\n* **Adaptive Strategies**: Employ dynamic trailing stops based on volatility indicators like ATR, ensuring stops are responsive to market conditions.\n* **Percentage and Time-Based Stops**: Utilize both percentage-based and time-based adjustments to secure profits while allowing for potential price expansion.\n* **Automation Tools**: Leverage trading bots and APIs to enhance the efficiency of trailing stop management, reducing emotional decision-making during trades.",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility Indicator",
          "definition": "A metric used to measure the degree of price variation over time."
        },
        {
          "term": "Dynamic Trailing Stop",
          "definition": "A trailing stop that adjusts based on market volatility."
        }
      ],
      "whyThisMatters": "Mastering these techniques enables traders to navigate the unpredictable nature of cryptocurrency markets effectively.",
      "realLifeExample": "A trader successfully implements a dynamic trailing stop on Polkadot (DOT), adjusting based on market volatility, resulting in a secured profit of $15 per unit as the price rises from $20 to $25.",
      "commonMistake": "Neglecting to adapt trailing stop strategies to changing market conditions can lead to missed profit opportunities.",
      "quickNote": "Master adaptive strategies and automation to optimize trailing stop implementation.",
      "mentorText": "Remember, the market is always changing. Your trailing stop strategies must evolve with it to maximize your potential gains.",
      "mentorAnalogy": "Just as a skilled sailor adjusts the sails to changing winds, a trader must adapt trailing stop strategies to the ever-shifting market currents."
    },
    "taskData": null,
    "visualKey": "trailing-stop-architectures"
  }
];
