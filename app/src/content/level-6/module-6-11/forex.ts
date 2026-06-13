import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Multi-Pair Relative Strength Analysis",
    "label": "Forex Track",
    "body": "### Core Scenario: Multi-Pair Relative Strength Analysis\nMulti-pair relative strength analysis evaluates the performance of multiple currency pairs to identify the strongest and weakest pairs simultaneously. This card teaches **how to synthesize relative strength metrics across various pairs**.\n\n* **Relative Strength Metrics**: Calculate the relative strength of each currency pair by comparing their price movements over a defined period, such as the last 14 days.\n* **Strength Comparison**: Rank the currency pairs based on their relative strength values, focusing on the top three strongest and weakest pairs for potential trading opportunities.\n* **Market Context Integration**: Incorporate broader market context, such as economic indicators and geopolitical events, to validate the relative strength findings before execution.",
    "context": {
      "keyTerms": [
        {
          "term": "Relative Strength",
          "definition": "A measure comparing the performance of one currency pair against another."
        },
        {
          "term": "Currency Pair Ranking",
          "definition": "The process of ordering currency pairs based on their relative strength values."
        }
      ],
      "whyThisMatters": "Understanding multi-pair relative strength allows traders to optimize their positions by focusing on the most favorable pairs for trading.",
      "realLifeExample": "During the London session, EURJPY shows a relative strength of +3.5% while AUDUSD shows -1.2%, indicating a potential long position on EURJPY against AUDUSD.",
      "commonMistake": "Traders often overlook the importance of market context, relying solely on numerical strength without considering external factors.",
      "quickNote": "Rank currency pairs based on their relative strength to identify optimal trading opportunities.",
      "mentorText": "When analyzing multiple pairs, focus on the strongest and weakest. This will guide your trades towards the most favorable setups.",
      "mentorAnalogy": "Think of this analysis like a sports team evaluation, where you assess players' performances to determine the best lineup for a game."
    },
    "taskData": null,
    "visualKey": "forex-scenario-checklist"
  },
  {
    "type": "concept",
    "title": "Session Calendar Utilization",
    "label": "Forex Track",
    "body": "### Core Scenario: Session Calendar Utilization\nUtilizing session calendars effectively allows traders to pinpoint optimal trading times based on historical performance of currency pairs. This card teaches **how to align trading strategies with session activity**.\n\n* **Session Timing Analysis**: Identify the peak trading hours for specific currency pairs, such as the overlap between the London and New York sessions, which often produces higher volatility.\n* **Historical Performance Review**: Analyze historical data to determine which currency pairs have shown consistent performance during specific sessions, enhancing the probability of successful trades.\n* **Event Calendar Integration**: Incorporate economic news releases into your session calendar to anticipate potential volatility and adjust trading strategies accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "Session Calendar",
          "definition": "A schedule outlining the active trading hours of different forex markets."
        },
        {
          "term": "Volatility",
          "definition": "The degree of variation in trading prices over time."
        }
      ],
      "whyThisMatters": "Effective session calendar utilization maximizes trading opportunities by aligning strategies with periods of heightened market activity.",
      "realLifeExample": "On a Wednesday, the EURUSD pair typically shows increased volatility during the overlap of the London and New York sessions, making it an ideal time for entry.",
      "commonMistake": "Traders often trade outside of peak hours, missing out on significant price movements and liquidity.",
      "quickNote": "Align your trading strategies with peak session times for optimal performance.",
      "mentorText": "Plan your trades around the session calendar. Focus on the times when the market is most active to increase your chances of success.",
      "mentorAnalogy": "Utilizing a session calendar is like a chef timing the preparation of dishes to ensure everything is served at the perfect moment."
    },
    "taskData": null,
    "visualKey": "forex-scenario-checklist"
  },
  {
    "type": "concept",
    "title": "Relative Strength Index (RSI) Application",
    "label": "Forex Track",
    "body": "### Core Scenario: Relative Strength Index (RSI) Application\nThe Relative Strength Index (RSI) is a momentum oscillator that measures the speed and change of price movements. This card teaches **how to apply RSI in multi-pair strength assessment**.\n\n* **RSI Calculation**: Calculate the RSI for each currency pair using the formula: RSI = 100 - (100 / (1 + RS)), where RS is the average of 'n' days' up closes divided by the average of 'n' days' down closes.\n* **Divergence Analysis**: Identify divergences between the RSI and price action to spot potential reversals; for instance, if the price makes a new high while RSI fails to do so, it signals weakening momentum.\n* **Threshold Levels**: Use the standard RSI thresholds of 70 (overbought) and 30 (oversold) to determine potential entry and exit points for trades across multiple pairs.",
    "context": {
      "keyTerms": [
        {
          "term": "Momentum Oscillator",
          "definition": "A technical indicator that measures the speed of price movements."
        },
        {
          "term": "Divergence",
          "definition": "A scenario where the price action and indicator move in opposite directions."
        }
      ],
      "whyThisMatters": "Applying RSI across multiple pairs enhances decision-making by providing insights into momentum shifts and potential reversals.",
      "realLifeExample": "If GBPUSD shows an RSI of 75 while EURUSD shows 25, consider shorting GBPUSD and going long on EURUSD based on momentum analysis.",
      "commonMistake": "Traders often misinterpret RSI signals, failing to consider the context of market conditions and price action.",
      "quickNote": "Use RSI to assess momentum and identify potential reversals in multi-pair analysis.",
      "mentorText": "When applying RSI, look for divergences and threshold breaches. These can provide critical insights into market momentum.",
      "mentorAnalogy": "Think of RSI like a pressure gauge in an engine; it indicates when the system is under stress and may need attention."
    },
    "taskData": null,
    "visualKey": "forex-scenario-checklist"
  },
  {
    "type": "concept",
    "title": "Intermarket Correlation Checks",
    "label": "Forex Track",
    "body": "### Core Scenario: Intermarket Correlation Checks\nIntermarket correlations play a significant role in multi-pair analysis, influencing trading strategies based on the relationships between different asset classes. This card teaches **how to assess correlations between currency pairs and other markets**.\n\n* **Correlation Coefficient Calculation**: Calculate the correlation coefficient (r) between currency pairs and other assets, such as commodities or indices, to understand their relationships. Values range from -1 to +1, where +1 indicates a strong positive correlation.\n* **Market Influence Assessment**: Analyze how movements in correlated markets, such as gold prices affecting AUDUSD, can impact trading decisions and timing.\n* **Diversification Strategy**: Use correlation analysis to diversify your portfolio by selecting pairs with low or negative correlations to reduce overall risk exposure.",
    "context": {
      "keyTerms": [
        {
          "term": "Correlation Coefficient",
          "definition": "A statistical measure that describes the degree of relationship between two variables."
        },
        {
          "term": "Diversification",
          "definition": "The strategy of spreading investments across various assets to reduce risk."
        }
      ],
      "whyThisMatters": "Understanding intermarket correlations enables traders to make informed decisions based on the broader market context, enhancing strategy effectiveness.",
      "realLifeExample": "If the correlation between USDJPY and gold is -0.85, a rise in gold prices may suggest a potential short opportunity on USDJPY.",
      "commonMistake": "Traders often neglect correlation checks, leading to overexposure in correlated pairs and increased risk.",
      "quickNote": "Assess intermarket correlations to inform your trading strategies and manage risk effectively.",
      "mentorText": "Always check how different markets interact. A shift in one market can signal a move in another, guiding your trades.",
      "mentorAnalogy": "Intermarket correlation checks are like a weather forecast for a region; understanding one area's climate can help predict conditions in another."
    },
    "taskData": null,
    "visualKey": "forex-scenario-checklist"
  },
  {
    "type": "concept",
    "title": "Session Overlap Strategies",
    "label": "Forex Track",
    "body": "### Core Scenario: Session Overlap Dynamics\nSession overlaps create unique trading opportunities due to heightened volatility and liquidity. This card outlines **strategies to capitalize on these conditions**.\n\n* **Identifying Overlap Periods**: Key overlaps occur between the London and New York sessions, typically from 8 AM to 12 PM EST. Focus on pairs like EURUSD and GBPUSD during this window for increased price action.\n* **Volatility Assessment**: Use the Average True Range (ATR) to gauge volatility during overlaps. For instance, if EURUSD shows an ATR of 50 pips during overlap, anticipate larger price movements.\n* **Liquidity Considerations**: Execute trades with tighter spreads during overlaps. For example, spreads on major pairs can narrow to 1-2 pips, enhancing potential profit margins during active trading hours.",
    "context": {
      "keyTerms": [
        {
          "term": "Session Overlap",
          "definition": "The period when two major forex trading sessions coincide, leading to increased market activity."
        }
      ],
      "whyThisMatters": "Understanding session overlaps allows traders to exploit periods of heightened market activity for better execution and profit potential.",
      "realLifeExample": "On March 15, 2023, during the London-New York overlap, EURUSD surged 80 pips in two hours due to strong US retail sales data, offering optimal entry points.",
      "commonMistake": "Failing to adjust position sizes based on increased volatility can lead to excessive risk exposure.",
      "quickNote": "Maximize trading opportunities during session overlaps by focusing on volatility and liquidity.",
      "mentorText": "When the London and New York sessions overlap, think of it as a rush hour in the market. You want to be positioned to take advantage of the increased traffic.",
      "mentorAnalogy": "Consider this like a busy airport during peak hours. Just as planes take off and land more frequently, trades can execute rapidly, creating opportunities for skilled pilots—traders—in the cockpit."
    },
    "taskData": null,
    "visualKey": "forex-scenario-checklist"
  },
  {
    "type": "concept",
    "title": "Economic Data Impact on Pairs",
    "label": "Forex Track",
    "body": "### Core Scenario: Economic Data Relevance\nEconomic data releases significantly influence currency pair valuations. This card explains **how to integrate economic data into trading strategies**.\n\n* **Data Release Timing**: Major releases, such as Non-Farm Payrolls or CPI, typically occur at 8:30 AM EST. Plan trades around these times to leverage market reactions.\n* **Relative Strength Analysis**: Assess how data impacts currency strength. For example, if the US GDP beats expectations while Eurozone data is weak, expect USD to strengthen against EUR.\n* **Market Sentiment**: Monitor market expectations prior to releases. A consensus forecast of 200K jobs added can lead to volatility if the actual figure deviates significantly, such as 300K or 100K.",
    "context": {
      "keyTerms": [
        {
          "term": "Economic Data Release",
          "definition": "Scheduled announcements that provide insights into economic performance, influencing currency valuations."
        }
      ],
      "whyThisMatters": "Incorporating economic data into trading plans enhances decision-making and can lead to more informed trades.",
      "realLifeExample": "On February 3, 2023, the US Non-Farm Payrolls report showed 517K jobs added, causing USDJPY to spike 150 pips within minutes as traders adjusted positions.",
      "commonMistake": "Ignoring the consensus forecast can lead to unexpected losses if the actual data significantly diverges.",
      "quickNote": "Economic data releases are critical to understanding currency pair movements and should be factored into trading plans.",
      "mentorText": "Think of economic data as the fuel that drives the market engine. When you know the fuel type, you can better predict how the engine will run.",
      "mentorAnalogy": "Like a chef timing the release of a dish based on ingredient readiness, traders must time their entries around economic data to optimize their outcomes."
    },
    "taskData": null,
    "visualKey": "forex-scenario-checklist"
  },
  {
    "type": "practice",
    "title": "Applying Multi-Pair Checklists",
    "label": "Forex Track",
    "body": "### Core Scenario: Multi-Pair Evaluation\nUtilizing multi-pair checklists allows traders to assess relative strength and session calendars effectively. This card provides **real-time application exercises**.\n\n* **Checklist Development**: Create a checklist that includes key pairs, their current strength, and economic calendar events. For instance, evaluate EURUSD, GBPUSD, and AUDUSD against upcoming data releases.\n* **Strength Comparison**: Use a relative strength index (RSI) to compare pairs. If EURUSD has an RSI of 70 while GBPUSD is at 40, prioritize trades on EURUSD for potential upward momentum.\n* **Session Calendar Integration**: Align your checklist with session calendars to identify optimal trading times. For example, if AUDUSD is strong and the Asian session is active, focus on that pair during the session.",
    "context": {
      "keyTerms": [
        {
          "term": "Multi-Pair Checklist",
          "definition": "A systematic approach to evaluate multiple currency pairs based on strength and economic events."
        }
      ],
      "whyThisMatters": "Applying multi-pair checklists enhances analytical rigor, allowing for informed trading decisions based on relative strength.",
      "realLifeExample": "During the Asian session on April 10, 2023, a trader used a checklist to identify AUDJPY as the strongest pair, executing a long position that yielded a 1% gain within the session.",
      "commonMistake": "Overlooking the impact of session times on pair strength can lead to missed opportunities.",
      "quickNote": "Multi-pair checklists streamline the evaluation of currency strength and trading opportunities.",
      "mentorText": "Think of your checklist as a flight plan. You need to know which routes are clear and which are congested before taking off.",
      "mentorAnalogy": "Just like an architect reviews multiple blueprints to ensure the best design, traders must evaluate multiple pairs to determine the most favorable conditions."
    },
    "taskData": {
      "type": "choice_block",
      "question": "Given the following economic calendar, which currency pair should you prioritize for trading?",
      "options": [
        {
          "id": "0",
          "text": "EURUSD with a strong RSI and upcoming Eurozone GDP release",
          "isCorrect": true,
          "feedback": "Correct. The strong RSI indicates upward momentum, and the GDP release can further influence price."
        },
        {
          "id": "1",
          "text": "GBPJPY with a weak RSI and no upcoming news",
          "isCorrect": false,
          "feedback": "Incorrect. A weak RSI suggests downward momentum, and lack of news means less volatility."
        },
        {
          "id": "2",
          "text": "AUDCAD with a neutral RSI and upcoming employment data",
          "isCorrect": false,
          "feedback": "Incorrect. While employment data is important, the neutral RSI does not indicate a clear direction."
        },
        {
          "id": "3",
          "text": "USDCHF with a strong RSI but no relevant economic events",
          "isCorrect": false,
          "feedback": "Incorrect. Without relevant events, the potential for movement is limited despite the strong RSI."
        }
      ]
    },
    "visualKey": "forex-scenario-checklist"
  },
  {
    "type": "summary",
    "title": "Summary of Multi-Pair Strategies",
    "label": "Forex Track",
    "body": "### Core Scenario: Multi-Pair Strategy Recap\nThis card summarizes the essential strategies for evaluating multi-pair relative strength and session calendars. Key takeaways include **practical applications for trading**.\n\n* **Relative Strength Focus**: Regularly assess the relative strength of currency pairs using tools like RSI and ATR to identify favorable trading conditions.\n* **Session Calendar Awareness**: Align trading strategies with session calendars to optimize entry points, especially during high-impact news events.\n* **Checklist Utilization**: Develop and maintain multi-pair checklists to streamline decision-making and enhance trading efficiency.",
    "context": {
      "keyTerms": [
        {
          "term": "Relative Strength",
          "definition": "A measure of a currency pair's performance compared to others, often assessed using technical indicators."
        }
      ],
      "whyThisMatters": "Summarizing these strategies reinforces the importance of structured analysis in achieving consistent trading results.",
      "realLifeExample": "A trader who consistently applies these strategies identified a 3% gain over a month by focusing on high-strength pairs during session overlaps.",
      "commonMistake": "Neglecting to update checklists based on market changes can lead to outdated strategies and missed opportunities.",
      "quickNote": "Effective multi-pair strategies enhance trading precision and capitalize on market dynamics.",
      "mentorText": "Reviewing your strategies is like a pilot checking their instruments before takeoff. You want to ensure everything is in order for a successful flight.",
      "mentorAnalogy": "Just as a conductor leads an orchestra, ensuring all instruments are in harmony, traders must synchronize their strategies across multiple pairs for optimal performance."
    },
    "taskData": null,
    "visualKey": "forex-scenario-checklist"
  }
];
