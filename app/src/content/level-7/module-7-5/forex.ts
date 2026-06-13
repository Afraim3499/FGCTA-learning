import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Monitoring Forex Positions Across Killzones",
    "label": "Forex Track",
    "body": "### Core Scenario: Session Killzone Monitoring\nMonitoring forex positions during key session killzones is essential for maintaining an objective trading approach. This card outlines **specific rules for tracking open positions across different trading sessions**.\n\n* **Session Identification**: Clearly define the major forex sessions (Asian, London, New York) and their respective killzones. Monitor price action and volatility during these periods to assess position performance.\n* **Price Action Review**: Conduct a price action review every 30 minutes during active killzones. Look for significant price movements or reversals that may impact your open trades.\n* **Adjust Monitoring Frequency**: Increase monitoring frequency during high-impact news releases or market events. Be prepared to adjust your stop-loss or take-profit levels based on market volatility and session dynamics.",
    "context": {
      "keyTerms": [
        {
          "term": "Killzone",
          "definition": "Specific time periods during which trading activity is heightened due to session overlaps."
        }
      ],
      "whyThisMatters": "Understanding session killzones allows traders to effectively manage positions and respond to market dynamics without emotional bias.",
      "realLifeExample": "During the London session, EURUSD shows a 50-pip movement from 1.0850 to 1.0900. Monitoring every 30 minutes reveals a potential reversal at 1.0900, prompting a reassessment of the open position.",
      "commonMistake": "Failing to adjust monitoring frequency during high-impact news can lead to missed opportunities or increased losses.",
      "quickNote": "Monitor open positions closely during session killzones to maintain objectivity.",
      "mentorText": "Stay vigilant during session overlaps. Every 30 minutes, reassess your positions based on the latest price action. This is not about emotions; it's about strategy.",
      "mentorAnalogy": "Think of it like a pilot monitoring flight instruments during takeoff and landing. Each session is a critical phase where attention to detail can prevent turbulence."
    },
    "taskData": null,
    "visualKey": "open-trade-manager"
  },
  {
    "type": "concept",
    "title": "Understanding Session Timings Impact",
    "label": "Forex Track",
    "body": "### Core Scenario: Impact of Session Timings\nDifferent forex session timings significantly influence market behavior and open positions. This card focuses on **how to adapt monitoring strategies based on session characteristics**.\n\n* **Volatility Patterns**: Recognize that volatility typically peaks during session overlaps (e.g., London/New York). Adjust your stop-loss and take-profit levels to accommodate increased price swings.\n* **Liquidity Considerations**: Assess liquidity conditions based on session timings. The Asian session may present lower liquidity, impacting execution speed and slippage.\n* **Market Sentiment Shifts**: Monitor how market sentiment changes with each session. For instance, the London session often reflects European economic data, which can shift market dynamics for open trades.",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility",
          "definition": "The degree of variation of a trading price series over time."
        }
      ],
      "whyThisMatters": "Adapting strategies to different session timings enhances the ability to manage open trades effectively and objectively.",
      "realLifeExample": "During the London session, GBPJPY experiences a surge in volatility, moving from 150.00 to 152.00. Adjusting the stop-loss to accommodate this volatility prevents premature exits.",
      "commonMistake": "Ignoring the impact of session timings can lead to inappropriate stop-loss placements and missed profit opportunities.",
      "quickNote": "Adjust monitoring strategies based on the unique characteristics of each forex session.",
      "mentorText": "Understand the rhythm of the market. Each session has its own tempo, and you must adapt your strategy accordingly to avoid being caught off guard.",
      "mentorAnalogy": "Like a conductor leading an orchestra, you must adjust your tempo based on the instruments at play during each session."
    },
    "taskData": null,
    "visualKey": "open-trade-manager"
  },
  {
    "type": "concept",
    "title": "Applying Trailing Stops in Forex Trading",
    "label": "Forex Track",
    "body": "### Core Scenario: Trailing Stop Implementation\nTrailing stops are a vital tool for managing open forex positions while minimizing emotional interference. This card explores **effective techniques for applying trailing stops**.\n\n* **Setting the Trailing Distance**: Determine an appropriate trailing distance based on the volatility of the currency pair. For instance, a 30-pip trailing stop may be suitable for EURUSD during high volatility.\n* **Dynamic Adjustment**: Adjust the trailing stop as the market moves in your favor. If EURUSD rises from 1.0800 to 1.0850, move your trailing stop to lock in profits at 1.0820.\n* **Avoiding Over-Adjustment**: Resist the urge to frequently adjust the trailing stop based on emotional reactions. Stick to your pre-defined strategy and only adjust when market conditions warrant it.",
    "context": {
      "keyTerms": [
        {
          "term": "Trailing Stop",
          "definition": "A stop order that moves with the market price to lock in profits."
        }
      ],
      "whyThisMatters": "Utilizing trailing stops effectively allows traders to secure profits while maintaining a disciplined approach to trade management.",
      "realLifeExample": "After entering a long position in USDCHF at 0.9000, the price moves to 0.9050. A trailing stop is set at 0.9020, ensuring a minimum profit of 20 pips if the market reverses.",
      "commonMistake": "Over-adjusting trailing stops based on short-term market fluctuations can lead to premature exits.",
      "quickNote": "Implement trailing stops to lock in profits while remaining disciplined.",
      "mentorText": "Set your trailing stop and let the market work for you. Don’t let fear dictate your adjustments; stick to your strategy.",
      "mentorAnalogy": "Like a sailor adjusting the sails based on wind direction, you must adjust your trailing stop according to market conditions without overreacting."
    },
    "taskData": null,
    "visualKey": "open-trade-manager"
  },
  {
    "type": "concept",
    "title": "Exit Strategies Tailored for Forex Markets",
    "label": "Forex Track",
    "body": "### Core Scenario: Systematic Exit Strategies\nEffective exit strategies are crucial for realizing profits and minimizing losses in forex trading. This card details **systematic approaches to exiting positions**.\n\n* **Pre-Defined Exit Levels**: Establish exit levels based on technical analysis before entering a trade. For example, set a take-profit level at a key resistance level identified on the daily chart.\n* **News Event Considerations**: Be aware of upcoming news events that may impact your open positions. If a high-impact news release is scheduled, consider adjusting your exit strategy to mitigate risk.\n* **Review and Adapt**: Regularly review your exit strategies based on market conditions. If the market shows signs of reversal, be prepared to exit even if your pre-defined levels have not been reached.",
    "context": {
      "keyTerms": [
        {
          "term": "Take-Profit Level",
          "definition": "A predetermined price at which a trader will close a position to secure profits."
        }
      ],
      "whyThisMatters": "Systematic exit strategies ensure that traders can capitalize on market movements without emotional interference.",
      "realLifeExample": "After entering a short position in AUDCAD at 0.9500, a take-profit level is set at 0.9400, coinciding with a significant support level. A news event causes a rapid price drop, allowing for an exit at 0.9405.",
      "commonMistake": "Failing to adjust exit strategies in response to changing market conditions can lead to missed profit opportunities or increased losses.",
      "quickNote": "Implement systematic exit strategies to capitalize on market movements effectively.",
      "mentorText": "Establish your exit strategy before entering a trade. This is your plan, and sticking to it will keep emotions at bay.",
      "mentorAnalogy": "Like a chef timing the removal of a dish from the oven, you must know when to exit based on the conditions, not just the recipe."
    },
    "taskData": null,
    "visualKey": "open-trade-manager"
  },
  {
    "type": "concept",
    "title": "Managing Currency Pair Volatility",
    "label": "Forex Track",
    "body": "### Core Scenario: Navigating Volatile Conditions\nManaging open trades during periods of high volatility requires a structured approach to mitigate risk and enhance decision-making. This card outlines **rules for monitoring and adjusting positions in response to currency pair volatility**.\n\n* **Volatility Assessment**: Utilize the Average True Range (ATR) to gauge current volatility levels. Adjust position sizes accordingly; for instance, if the ATR for EURUSD is 0.0050, consider reducing position size to maintain risk exposure.\n* **Dynamic Stop-Loss Adjustments**: Implement trailing stop-loss orders based on volatility thresholds. For example, if EURUSD moves 15 pips in your favor, adjust your stop-loss to secure profits while allowing for further movement.\n* **News Event Awareness**: Identify scheduled economic releases that may impact volatility. For instance, if the U.S. Non-Farm Payroll report is due, tighten your stop-loss and monitor price action closely to avoid slippage.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical indicator measuring market volatility."
        },
        {
          "term": "Trailing Stop-Loss",
          "definition": "A stop-loss order that moves with the market price to lock in profits."
        }
      ],
      "whyThisMatters": "Understanding volatility management prevents emotional decision-making and protects capital during unpredictable market movements.",
      "realLifeExample": "During the release of the U.S. CPI data, EURUSD surged 30 pips within minutes. A trader using ATR to adjust their stop-loss effectively secured profits while avoiding a potential reversal.",
      "commonMistake": "Failing to adjust position sizes based on volatility, leading to excessive risk exposure.",
      "quickNote": "Use ATR to guide position sizing and stop-loss adjustments during volatile periods.",
      "mentorText": "When volatility spikes, stick to your rules. Adjust your position size based on ATR and tighten your stops to protect gains. Don’t let emotions dictate your moves.",
      "mentorAnalogy": "Managing volatility in trading is like a pilot adjusting altitude based on turbulence; both require precise adjustments to maintain stability."
    },
    "taskData": null,
    "visualKey": "open-trade-manager"
  },
  {
    "type": "concept",
    "title": "Impact of Economic Indicators on Open Trades",
    "label": "Forex Track",
    "body": "### Core Scenario: Economic Indicator Monitoring\nEconomic indicators play a critical role in shaping market sentiment and influencing currency values. This card details **how to systematically monitor economic indicators affecting open forex positions**.\n\n* **Scheduled Releases Tracking**: Maintain a calendar of key economic indicators such as GDP, unemployment rates, and interest rate decisions. For example, if the U.S. Federal Reserve is set to announce interest rates, prepare to adjust your positions accordingly.\n* **Data Interpretation Framework**: Develop a framework for interpreting economic data releases. If the actual Non-Farm Payroll number exceeds expectations, consider closing or adjusting long positions in USD pairs to capitalize on potential strength.\n* **Market Sentiment Analysis**: Assess market reactions to economic data. If EURUSD reacts negatively to a strong U.S. employment report, be prepared to implement a stop-loss or take profit based on the new market sentiment.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Economic Indicator",
          "definition": "A statistic about economic activity that can influence market movements."
        },
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of investors toward a particular currency or market."
        }
      ],
      "whyThisMatters": "Monitoring economic indicators allows traders to make informed decisions, reducing the risk of unexpected losses from market volatility.",
      "realLifeExample": "After the U.S. GDP growth rate was reported at 3.5%, a trader adjusted their long position in USDJPY, resulting in a 50-pip gain as the pair rallied.",
      "commonMistake": "Ignoring the impact of economic indicators on open trades, leading to unanticipated losses.",
      "quickNote": "Track economic indicators to inform decisions on managing open trades effectively.",
      "mentorText": "Stay ahead of the curve by knowing when key economic data is released. Adjust your trades based on the data, not your gut feeling.",
      "mentorAnalogy": "Monitoring economic indicators is like a surgeon reviewing patient vitals; both require attention to detail to ensure successful outcomes."
    },
    "taskData": null,
    "visualKey": "open-trade-manager"
  },
  {
    "type": "practice",
    "title": "Simulating Forex Trade Management",
    "label": "Forex Track",
    "body": "### Core Scenario: Trade Management Simulation\nEngaging in simulated scenarios enhances your ability to manage open trades effectively across various market conditions. This card provides **a structured approach to practicing trade management in different killzones**.\n\n* **Scenario Setup**: Create a simulation environment with predefined market conditions, including volatility levels and economic news events. For instance, simulate managing a long position in GBPUSD during the London session.\n* **Execution of Rules**: Apply systematic rules for adjusting stop-loss and take-profit levels based on market movements. For example, if GBPUSD moves 20 pips in your favor, practice moving your stop-loss to breakeven.\n* **Review and Adjust**: After each simulation, review your decisions and outcomes. Analyze what strategies worked and where improvements can be made, such as refining your response to unexpected volatility.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Killzone",
          "definition": "Specific times during the trading day when market activity is typically heightened."
        },
        {
          "term": "Simulated Trading",
          "definition": "Practicing trading strategies in a risk-free environment."
        }
      ],
      "whyThisMatters": "Simulations allow traders to practice and refine their management strategies without the risk of real capital loss.",
      "realLifeExample": "In a simulation, a trader managed a long position in AUDCAD during the Asian session, successfully adjusting their stop-loss based on a sudden spike in volatility.",
      "commonMistake": "Failing to adhere to systematic rules during simulations, leading to unrealistic practice outcomes.",
      "quickNote": "Use simulations to practice managing trades systematically across various market conditions.",
      "mentorText": "Treat simulations like real trades. Stick to your rules and analyze your performance to improve your trade management skills.",
      "mentorAnalogy": "Simulating trade management is akin to a pilot conducting flight drills; both require practice to ensure readiness for real-world scenarios."
    },
    "taskData": {
      "type": "choice_block",
      "question": "During a simulated trading session, GBPUSD moves 25 pips in your favor. What is the best action to take according to your systematic rules?",
      "options": [
        {
          "id": "0",
          "text": "Move the stop-loss to breakeven.",
          "isCorrect": true,
          "feedback": "Moving the stop-loss to breakeven secures your position and eliminates risk."
        },
        {
          "id": "1",
          "text": "Leave the stop-loss unchanged.",
          "isCorrect": false,
          "feedback": "Leaving the stop-loss unchanged exposes your position to potential losses."
        },
        {
          "id": "2",
          "text": "Increase the position size.",
          "isCorrect": false,
          "feedback": "Increasing position size at this stage increases risk unnecessarily."
        },
        {
          "id": "3",
          "text": "Close the position immediately.",
          "isCorrect": false,
          "feedback": "Closing the position prematurely may result in missed profit opportunities."
        }
      ]
    },
    "visualKey": "open-trade-manager"
  },
  {
    "type": "summary",
    "title": "Key Takeaways for Managing Forex Positions",
    "label": "Forex Track",
    "body": "### Core Scenario: Summary of Management Strategies\nEffective management of open forex positions hinges on systematic monitoring and adherence to established rules. This card summarizes **the essential strategies for managing open trades**.\n\n* **Volatility Management**: Regularly assess volatility using ATR and adjust position sizes and stop-loss levels accordingly. This ensures risk is managed effectively during turbulent market conditions.\n* **Economic Indicator Awareness**: Keep abreast of key economic indicators and their potential impacts on open trades. This knowledge enables data-driven adjustments to positions, enhancing overall performance.\n* **Simulation Practice**: Engage in regular simulations to refine trade management skills. Practicing systematic responses to various market scenarios builds confidence and prepares traders for real-world conditions.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Systematic Monitoring",
          "definition": "Consistent and structured observation of market conditions and trade performance."
        },
        {
          "term": "Position Management",
          "definition": "The process of adjusting trades based on market movements and predefined rules."
        }
      ],
      "whyThisMatters": "Summarizing key strategies reinforces the importance of a disciplined approach to managing open trades, ultimately leading to improved trading outcomes.",
      "realLifeExample": "A trader who consistently applies these strategies was able to navigate a volatile market and secure a 100-pip gain on a long EURUSD position.",
      "commonMistake": "Neglecting to review and adjust strategies based on market conditions, leading to missed opportunities.",
      "quickNote": "Systematic monitoring and adherence to rules are essential for effective trade management.",
      "mentorText": "Review your strategies regularly. Stick to your rules, manage volatility, and keep an eye on economic indicators to maximize your trading success.",
      "mentorAnalogy": "Managing forex positions is like a conductor leading an orchestra; both require precise timing and coordination to achieve harmony."
    },
    "taskData": null,
    "visualKey": "open-trade-manager"
  }
];
