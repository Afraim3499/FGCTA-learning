import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Evaluating EURUSD and GBPUSD Correlation",
    "label": "Forex Track",
    "body": "### Correlation Analysis: EURUSD & GBPUSD\nSimultaneous positions in EURUSD and GBPUSD can lead to a compounded exposure to the DXY index, significantly increasing risk. This card details **how to evaluate the correlation between these pairs and its implications for risk management**.\n\n* **Correlation Coefficient Calculation**: Use historical price data to calculate the correlation coefficient between EURUSD and GBPUSD. A coefficient close to 1 indicates a strong positive correlation, suggesting that both pairs will likely move in the same direction.\n* **DXY Index Exposure**: Holding both pairs simultaneously may effectively double your exposure to the DXY index. For instance, if EURUSD rises by 50 pips and GBPUSD rises by 50 pips, your overall exposure to the dollar index increases significantly.\n* **Risk Assessment**: Assess the aggregate risk by considering the combined volatility of both pairs. If both pairs have a standard deviation of 30 pips, your exposure could lead to a potential loss of 60 pips if both move against your position.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Correlation Coefficient",
          "definition": "A statistical measure that describes the degree to which two assets move in relation to each other."
        },
        {
          "term": "DXY Index",
          "definition": "A measure of the value of the United States dollar relative to a basket of foreign currencies."
        }
      ],
      "whyThisMatters": "Understanding the correlation between EURUSD and GBPUSD is crucial for managing aggregate risk exposure in your portfolio.",
      "realLifeExample": "If EURUSD and GBPUSD both increase by 40 pips due to a USD weakness, your net exposure to the DXY index could lead to a 0.8% loss on a $10,000 account if both positions are leveraged at 1:100.",
      "commonMistake": "Traders often overlook the impact of correlated positions, leading to unexpected drawdowns when both pairs move against them.",
      "quickNote": "Simultaneous trades in correlated pairs can double your exposure to market movements.",
      "mentorText": "When you're trading EURUSD and GBPUSD together, think of them as two sides of the same coin. If one side goes down, the other likely follows, amplifying your risk.",
      "mentorAnalogy": "Consider this like an aerospace engineer designing a dual-engine aircraft; if one engine fails, the other must compensate. In trading, if one correlated pair moves unfavorably, the other can exacerbate your losses."
    },
    "taskData": null,
    "visualKey": "correlation-portfolio-risk"
  },
  {
    "type": "concept",
    "title": "Understanding DXY's Influence",
    "label": "Forex Track",
    "body": "### DXY's Impact on EURUSD and GBPUSD\nThe DXY index serves as a benchmark for the strength of the US dollar, directly influencing both EURUSD and GBPUSD. This card explores **how fluctuations in the DXY can affect your trading strategy**.\n\n* **Inverse Relationship**: Generally, when the DXY rises, EURUSD and GBPUSD tend to decline, and vice versa. For example, a 1% increase in the DXY could lead to a corresponding 1.5% drop in EURUSD, depending on market conditions.\n* **Market Sentiment Analysis**: Monitor economic indicators that impact the DXY, such as Non-Farm Payrolls or CPI data releases. A strong jobs report can lead to a bullish DXY, affecting your positions in EURUSD and GBPUSD.\n* **Strategic Adjustments**: Adjust your trading strategy based on DXY movements. If the DXY shows strength, consider reducing long positions in EURUSD and GBPUSD to mitigate potential losses.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of investors toward a particular security or financial market."
        },
        {
          "term": "Economic Indicators",
          "definition": "Statistics that provide information about the economic performance of a country."
        }
      ],
      "whyThisMatters": "Recognizing the influence of the DXY index on currency pairs is vital for making informed trading decisions.",
      "realLifeExample": "If the DXY index rises from 92.00 to 93.00 due to strong economic data, you may observe EURUSD dropping from 1.1800 to 1.1700, impacting your open positions.",
      "commonMistake": "Traders often fail to account for DXY movements, leading to unexpected losses when correlated pairs react negatively.",
      "quickNote": "The DXY index is a critical factor influencing the performance of EURUSD and GBPUSD.",
      "mentorText": "Think of the DXY as the weather for your trading strategy. If the forecast predicts a storm, you need to adjust your sails accordingly to avoid capsizing.",
      "mentorAnalogy": "Just as a pilot must account for wind direction and speed when planning a flight path, you must consider the DXY's movements when navigating your trades in EURUSD and GBPUSD."
    },
    "taskData": null,
    "visualKey": "correlation-portfolio-risk"
  },
  {
    "type": "concept",
    "title": "Position Sizing in Correlated Pairs",
    "label": "Forex Track",
    "body": "### Effective Position Sizing for Correlated Pairs\nProper position sizing is essential when trading correlated pairs like EURUSD and GBPUSD to manage risk effectively. This card outlines **how to determine appropriate position sizes based on correlation**.\n\n* **Risk Percentage Calculation**: Determine your risk tolerance per trade, typically 1-2% of your total account balance. For a $10,000 account, this equates to a maximum risk of $100 to $200 per trade.\n* **Adjusted Position Size**: Calculate the position size for each pair based on their correlation. If EURUSD and GBPUSD have a correlation of 0.9, reduce your position size by approximately 10% for one of the pairs to avoid overexposure.\n* **Volatility Consideration**: Factor in the volatility of each pair. If EURUSD has a standard deviation of 25 pips and GBPUSD has 30 pips, adjust your position size accordingly to maintain consistent risk across both trades.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Position Sizing",
          "definition": "The process of determining the amount of capital to allocate to a specific trade."
        },
        {
          "term": "Volatility",
          "definition": "A statistical measure of the dispersion of returns for a given security."
        }
      ],
      "whyThisMatters": "Effective position sizing in correlated pairs prevents excessive risk exposure and enhances overall portfolio stability.",
      "realLifeExample": "If you decide to risk $100 on a long position in EURUSD and calculate a position size of 1.0 lot, you should reduce your GBPUSD position to 0.9 lots to account for the high correlation.",
      "commonMistake": "Traders often use the same position size for correlated pairs, leading to increased risk without realizing it.",
      "quickNote": "Adjust position sizes in correlated pairs to manage risk effectively and avoid overexposure.",
      "mentorText": "When trading correlated pairs, think of your position size as the weight in a balanced scale. If one side is heavier, it can tip the scale and lead to losses.",
      "mentorAnalogy": "Like a chef balancing flavors in a dish, you must adjust your position sizes to ensure that no single ingredient overwhelms the overall outcome."
    },
    "taskData": null,
    "visualKey": "correlation-portfolio-risk"
  },
  {
    "type": "concept",
    "title": "Hedging Against Correlation Risks",
    "label": "Forex Track",
    "body": "### Hedging Strategies for Correlated Currency Pairs\nEmploying hedging strategies can mitigate risks associated with correlated currency pairs. This card discusses **effective hedging techniques to protect your portfolio**.\n\n* **Direct Hedging**: Open a position in the opposite direction of your existing trade. For instance, if you are long EURUSD, consider taking a short position in GBPUSD to offset potential losses if both pairs decline.\n* **Cross-Currency Hedging**: Use a non-correlated asset to hedge against your positions. For example, if you hold long positions in both EURUSD and GBPUSD, consider buying a USD-denominated asset like gold to hedge against dollar strength.\n* **Options Strategies**: Utilize options to hedge your positions. Buying put options on EURUSD while holding a long position can provide downside protection against adverse movements in the pair.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Direct Hedging",
          "definition": "Opening a position that offsets an existing position to reduce risk."
        },
        {
          "term": "Cross-Currency Hedging",
          "definition": "Using a non-correlated asset to mitigate risk in currency positions."
        }
      ],
      "whyThisMatters": "Implementing hedging strategies is essential for protecting your portfolio from the risks posed by correlated currency pairs.",
      "realLifeExample": "If you are long EURUSD at 1.1800 and short GBPUSD at 1.3700, a simultaneous decline in both pairs could be mitigated by the opposing positions, limiting your overall loss to 20 pips instead of 50 pips.",
      "commonMistake": "Traders often neglect to hedge their correlated positions, exposing themselves to greater risk during adverse market movements.",
      "quickNote": "Hedging strategies can effectively mitigate risks associated with correlated currency pairs.",
      "mentorText": "Think of hedging as an insurance policy for your trades. It won't prevent all losses, but it can significantly reduce the impact of adverse movements.",
      "mentorAnalogy": "Just as a pilot carries extra fuel to ensure a safe landing in case of emergencies, you should have hedging strategies in place to safeguard your trading positions."
    },
    "taskData": null,
    "visualKey": "correlation-portfolio-risk"
  },
  {
    "type": "concept",
    "title": "Interpreting Trading Signals: EURUSD & GBPUSD Correlation",
    "label": "Forex Track",
    "body": "### Correlation Analysis: EURUSD & GBPUSD Signals\nUnderstanding the correlation between EURUSD and GBPUSD is crucial for making informed trading decisions. This card focuses on **how to interpret trading signals from these pairs in the context of their correlation**.\n\n* **Correlation Coefficient**: A correlation coefficient close to +1 indicates that EURUSD and GBPUSD move in tandem, suggesting that a bullish signal in one may imply a similar movement in the other.\n* **Signal Confirmation**: If EURUSD shows a bullish breakout at 1.1200 while GBPUSD is also trending upwards, consider the strength of the signal, as both pairs may be influenced by the same macroeconomic factors.\n* **Risk Duplication**: Entering positions in both pairs simultaneously can duplicate risk exposure. For instance, if both pairs are correlated at 0.85, a 1% loss in one could lead to a similar loss in the other, amplifying overall risk.",
    "context": {
      "keyTerms": [
        {
          "term": "Correlation Coefficient",
          "definition": "A statistical measure that describes the degree to which two assets move in relation to each other."
        },
        {
          "term": "Signal Confirmation",
          "definition": "The process of validating a trading signal by analyzing related market movements."
        }
      ],
      "whyThisMatters": "Understanding the correlation between EURUSD and GBPUSD allows traders to make more informed decisions and manage risk effectively.",
      "realLifeExample": "On March 15, 2023, EURUSD broke above 1.1200, while GBPUSD simultaneously rose above 1.3000, both influenced by positive Eurozone economic data, suggesting a strong bullish sentiment in both pairs.",
      "commonMistake": "Traders often overlook the correlation, entering both positions without recognizing the increased risk exposure.",
      "quickNote": "High correlation between EURUSD and GBPUSD can amplify risk in your portfolio.",
      "mentorText": "When you see a bullish signal in EURUSD, check GBPUSD. If both are aligned, you might be looking at a stronger market trend. But remember, this also means your risk is compounded.",
      "mentorAnalogy": "Think of trading correlated pairs like flying two planes in formation; if one encounters turbulence, the other is likely to experience it too, increasing the risk of a crash."
    },
    "taskData": null,
    "visualKey": "correlation-portfolio-risk"
  },
  {
    "type": "concept",
    "title": "Monitoring Correlation Changes: EURUSD & GBPUSD",
    "label": "Forex Track",
    "body": "### Dynamic Correlation Monitoring: Adapting Strategies\nMonitoring changes in correlation between EURUSD and GBPUSD is essential for adapting trading strategies effectively. This card covers **techniques for tracking correlation shifts**.\n\n* **Statistical Tools**: Utilize tools like rolling correlation coefficients over a specified period (e.g., 30 days) to identify trends in correlation. A sudden drop from 0.85 to 0.50 may indicate a divergence in market behavior.\n* **News Impact Analysis**: Pay attention to economic news releases that can affect one currency pair more than the other, leading to a temporary change in correlation. For example, a strong U.S. jobs report may strengthen USD against EUR but not necessarily against GBP.\n* **Adjusting Exposure**: If correlation decreases significantly, consider reducing exposure in one of the pairs. For instance, if EURUSD and GBPUSD were previously correlated at 0.80 and drop to 0.40, it may be prudent to close positions in GBPUSD to mitigate risk.",
    "context": {
      "keyTerms": [
        {
          "term": "Rolling Correlation Coefficient",
          "definition": "A statistical measure that calculates the correlation between two variables over a moving time window."
        },
        {
          "term": "News Impact Analysis",
          "definition": "Evaluating how economic news affects currency pairs and their correlation."
        }
      ],
      "whyThisMatters": "Adapting trading strategies based on correlation changes can prevent unexpected losses and optimize portfolio performance.",
      "realLifeExample": "On February 10, 2023, following a significant U.S. inflation report, the correlation between EURUSD and GBPUSD dropped from 0.78 to 0.35, indicating a need to reassess positions in GBPUSD.",
      "commonMistake": "Traders often fail to monitor correlation changes, leading to overexposure in correlated pairs during market shifts.",
      "quickNote": "Regularly monitor correlation to adapt your trading strategy and manage risk effectively.",
      "mentorText": "Keep an eye on how EURUSD and GBPUSD are behaving relative to each other. If they start to diverge, it’s a signal to reassess your positions and adjust your risk accordingly.",
      "mentorAnalogy": "Monitoring currency correlation is like a pilot adjusting altitude based on weather reports; failing to adapt can lead to turbulence and potential disaster."
    },
    "taskData": null,
    "visualKey": "correlation-portfolio-risk"
  },
  {
    "type": "practice",
    "title": "Practical Exercises on Currency Correlation",
    "label": "Forex Track",
    "body": "### Currency Correlation Analysis: Practical Application\nEngaging in practical exercises with correlated currency pairs enhances understanding and application of risk management principles. This card focuses on **analyzing and trading correlated pairs**.\n\n* **Scenario Analysis**: Given a scenario where EURUSD is at 1.1150 and GBPUSD at 1.2950, analyze the correlation coefficient over the last 30 days. Determine if both pairs are aligned and how to position your trades accordingly.\n* **Risk Management Application**: If you decide to take a long position in EURUSD, calculate the appropriate position size in GBPUSD based on the correlation coefficient. For instance, if the correlation is 0.85, consider reducing your GBPUSD position size to mitigate risk.\n* **Trade Execution**: Execute trades based on your analysis, ensuring that you maintain a balanced exposure to both pairs. For example, if you risk 2% of your account on EURUSD, limit your risk on GBPUSD to 1% to account for correlation.",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Analysis",
          "definition": "Evaluating potential trading scenarios based on current market conditions and correlations."
        },
        {
          "term": "Position Size Calculation",
          "definition": "Determining the appropriate amount to invest in a trade based on risk management principles."
        }
      ],
      "whyThisMatters": "Practical exercises reinforce the application of theoretical concepts, enhancing decision-making skills in real trading scenarios.",
      "realLifeExample": "In a simulated trading exercise, you analyze EURUSD at 1.1150 and GBPUSD at 1.2950, finding a correlation of 0.80. You decide to risk 2% on EURUSD and adjust GBPUSD to 1.5% to manage overall exposure.",
      "commonMistake": "Traders often neglect to adjust position sizes based on correlation, leading to excessive risk in their portfolios.",
      "quickNote": "Practical exercises solidify your understanding of currency correlation and risk management.",
      "mentorText": "When you analyze correlated pairs, always adjust your position sizes to reflect the risk. If one pair moves against you, the other likely will too, so plan accordingly.",
      "mentorAnalogy": "Think of trading correlated currencies like a chef balancing flavors; too much of one ingredient can overpower the dish, just as too much exposure can jeopardize your portfolio."
    },
    "taskData": {
      "type": "choice_block",
      "question": "Given EURUSD at 1.1150 and GBPUSD at 1.2950 with a correlation of 0.80, how should you adjust your position sizes?",
      "options": [
        {
          "id": "0",
          "text": "Risk 2% on both pairs equally.",
          "isCorrect": false,
          "feedback": "This approach ignores the correlation risk and can lead to excessive exposure."
        },
        {
          "id": "1",
          "text": "Risk 2% on EURUSD and 1.5% on GBPUSD.",
          "isCorrect": true,
          "feedback": "This adjustment accounts for the correlation, reducing risk exposure on GBPUSD."
        },
        {
          "id": "2",
          "text": "Risk 1% on EURUSD and 2% on GBPUSD.",
          "isCorrect": false,
          "feedback": "This increases risk on GBPUSD without considering the correlation."
        },
        {
          "id": "3",
          "text": "Risk 3% on EURUSD and 2% on GBPUSD.",
          "isCorrect": false,
          "feedback": "This significantly increases overall risk due to high exposure in both correlated pairs."
        }
      ]
    },
    "visualKey": "correlation-portfolio-risk"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Correlation Risks",
    "label": "Forex Track",
    "body": "### Key Concepts: Managing Correlation Risks\nThis summary consolidates the essential concepts of managing correlation risks in forex trading. Understanding concurrent positions is vital for effective risk management.\n\n* **Correlation Awareness**: Recognizing the correlation between currency pairs like EURUSD and GBPUSD is fundamental to avoid duplicating risk in your portfolio.\n* **Dynamic Strategy Adaptation**: Continuously monitor correlation changes to adapt your trading strategies and mitigate potential losses.\n* **Practical Application**: Engage in practical exercises to reinforce your understanding of how to analyze and manage correlated currency pairs effectively.",
    "context": {
      "keyTerms": [
        {
          "term": "Correlation Awareness",
          "definition": "The understanding of how different assets move in relation to one another."
        },
        {
          "term": "Dynamic Strategy Adaptation",
          "definition": "The ability to modify trading strategies based on changing market conditions."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of correlation risks enhances a trader's ability to manage exposure and optimize portfolio performance.",
      "realLifeExample": "In recent months, traders who monitored the correlation between EURUSD and GBPUSD effectively adjusted their positions during significant economic announcements, avoiding unnecessary losses.",
      "commonMistake": "Failing to recognize the impact of correlation can lead to overexposure and increased risk in trading portfolios.",
      "quickNote": "Effective management of correlation risks is crucial for maintaining a balanced trading portfolio.",
      "mentorText": "Always keep an eye on how your positions relate to one another. If you’re heavily invested in correlated pairs, be ready to adjust your strategy to protect your capital.",
      "mentorAnalogy": "Managing correlation risks is like an architect ensuring that a building's structure can withstand external forces; neglecting this can lead to collapse."
    },
    "taskData": null,
    "visualKey": "correlation-portfolio-risk"
  }
];
