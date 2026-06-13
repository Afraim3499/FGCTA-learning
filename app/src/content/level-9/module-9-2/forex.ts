import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Managing USD Exposure in Forex",
    "label": "Forex Track",
    "body": "<!-- M9.2-forex-C1 -->\n### Core Scenario: USD Exposure Management\nManaging USD exposure is critical when trading pairs like EURUSD, GBPUSD, and USDJPY to avoid overlapping risk profiles. This card outlines **the methodology for assessing and adjusting USD exposure**.\n\n* **Exposure Assessment**: Calculate the net USD exposure by summing the notional values of all positions involving USD. For instance, if you hold a long position of 100,000 in EURUSD and a short position of 50,000 in GBPUSD, your net USD exposure is 50,000.\n* **Position Adjustment**: Implement position sizing rules to ensure that no single currency pair excessively influences overall USD exposure. Limit exposure to 20% of total capital in any USD-related trade to maintain balance.\n* **Diversification Strategy**: Incorporate non-USD pairs to mitigate risk. For example, trading AUDNZD alongside your USD positions can help reduce the overall USD correlation in your portfolio.",
    "context": {
      "keyTerms": [
        {
          "term": "USD Exposure",
          "definition": "The risk associated with fluctuations in the value of the US dollar due to currency pair positions."
        }
      ],
      "whyThisMatters": "Effective management of USD exposure prevents significant losses from correlated currency movements, maintaining portfolio integrity.",
      "realLifeExample": "Trading EURUSD at 1.1200 with a long position of 100,000 units while simultaneously holding a short position of 50,000 in GBPUSD at 1.3000 results in a net USD exposure of 50,000.",
      "commonMistake": "Failing to account for net USD exposure when executing trades across multiple USD pairs can lead to unintentional overexposure.",
      "quickNote": "Assess and adjust USD exposure to prevent overlapping risks in correlated pairs.",
      "mentorText": "When you trade multiple USD pairs, always calculate your net exposure. If you’re long EURUSD and short GBPUSD, know how much USD you’re really risking.",
      "mentorAnalogy": "Think of your USD exposure like a ship's ballast; if one side is too heavy, it risks capsizing. Balance your positions to keep your trading vessel steady."
    },
    "taskData": null,
    "visualKey": "portfolio-risk-model"
  },
  {
    "type": "concept",
    "title": "Analyzing Currency Correlations (Module 9.2 - FOREX)",
    "label": "Forex Track",
    "body": "<!-- M9.2-forex-C2 -->\n### Core Scenario: Currency Correlation Analysis\nUnderstanding currency correlations is essential for identifying potential risk overlaps in Forex trading. This card details **the analytical approach to assess currency pair relationships**.\n\n* **Correlation Coefficient Calculation**: Use statistical tools to compute the correlation coefficient between pairs. A value close to +1 indicates strong positive correlation, while -1 indicates strong negative correlation. For example, EURUSD and GBPUSD often show a correlation coefficient of around +0.85.\n* **Historical Data Review**: Analyze historical price data over various time frames to identify consistent correlation patterns. Review at least 90 days of data to establish reliable correlations.\n* **Impact Assessment**: Evaluate how correlated pairs react to economic events. For instance, if both EURUSD and AUDUSD respond similarly to a US interest rate change, this indicates overlapping risk that must be managed.",
    "context": {
      "keyTerms": [
        {
          "term": "Correlation Coefficient",
          "definition": "A statistical measure that describes the degree to which two currency pairs move in relation to each other."
        }
      ],
      "whyThisMatters": "Identifying correlations helps traders avoid excessive risk exposure by recognizing when multiple positions may react similarly to market events.",
      "realLifeExample": "Analyzing EURUSD and GBPUSD reveals a correlation coefficient of +0.85 over the past three months, indicating a high likelihood of simultaneous price movements.",
      "commonMistake": "Overlooking the correlation between pairs can lead to unintentional risk concentration, especially during volatile market conditions.",
      "quickNote": "Analyze currency correlations to identify and manage overlapping risks effectively.",
      "mentorText": "Always check the correlation between your pairs before entering trades. If they move together, you might be doubling your risk without realizing it.",
      "mentorAnalogy": "Think of currency correlations like traffic patterns; if two roads are congested at the same time, taking both routes can lead to a major jam."
    },
    "taskData": null,
    "visualKey": "portfolio-risk-model"
  },
  {
    "type": "concept",
    "title": "Hedging Currency Risk in Forex",
    "label": "Forex Track",
    "body": "<!-- M9.2-forex-C3 -->\n### Core Scenario: Currency Hedging Strategies\nImplementing effective hedging strategies is vital for mitigating risks associated with correlated currency pairs. This card outlines **specific hedging techniques to protect your portfolio**.\n\n* **Direct Hedging**: Open a position in the opposite direction of an existing trade. For example, if you are long EURUSD, you could short EURUSD to hedge against adverse movements while maintaining the original position.\n* **Cross-Hedging**: Use a correlated asset to hedge risk. If you are long GBPUSD, consider shorting AUDUSD, which often moves inversely to GBPUSD, to offset potential losses.\n* **Options Strategies**: Utilize options to hedge currency risk. Buying a put option on EURUSD while holding a long position allows for protection against downside risk without closing the position.",
    "context": {
      "keyTerms": [
        {
          "term": "Hedging",
          "definition": "A risk management strategy used to offset potential losses in an investment by taking an opposite position in a related asset."
        }
      ],
      "whyThisMatters": "Hedging strategies are essential for protecting against correlated risks, ensuring that losses in one position can be offset by gains in another.",
      "realLifeExample": "If you hold a long position of 100,000 in EURUSD at 1.1200, you could hedge by shorting 100,000 in EURUSD at the same price to protect against a downturn.",
      "commonMistake": "Failing to implement a hedge when holding correlated positions can lead to significant losses during market corrections.",
      "quickNote": "Employ hedging strategies to mitigate risks from correlated currency pairs effectively.",
      "mentorText": "If you’re worried about a position moving against you, don’t hesitate to hedge. It’s like wearing a seatbelt; it’s there to protect you when things go wrong.",
      "mentorAnalogy": "Hedging is like having insurance for your house; it protects your investment against unforeseen events that could cause damage."
    },
    "taskData": null,
    "visualKey": "portfolio-risk-model"
  },
  {
    "type": "concept",
    "title": "Understanding Cross-Currency Risks",
    "label": "Forex Track",
    "body": "<!-- M9.2-forex-C4 -->\n### Core Scenario: Cross-Currency Risk Assessment\nCross-currency trades can introduce significant risks that lead to overlapping exposures. This card explains **how to evaluate and manage these risks effectively**.\n\n* **Risk Identification**: Identify the currencies involved in cross-currency trades and assess their correlations. For instance, trading USDJPY and EURJPY simultaneously can expose you to risks from both USD and EUR fluctuations.\n* **Exposure Calculation**: Quantify the total exposure from cross-currency trades by calculating the notional values. If you hold a long position of 100,000 in USDJPY and a long position of 50,000 in EURJPY, your total exposure is influenced by both currencies’ movements.\n* **Risk Mitigation Techniques**: Implement strategies such as diversifying currency pairs or using derivatives to hedge against adverse movements. For example, if holding both USDJPY and EURJPY, consider shorting a correlated pair like AUDJPY to offset potential losses.",
    "context": {
      "keyTerms": [
        {
          "term": "Cross-Currency Risk",
          "definition": "The risk associated with trading two different currencies that can lead to overlapping exposures."
        }
      ],
      "whyThisMatters": "Understanding cross-currency risks is essential for maintaining a balanced portfolio and avoiding unintended exposure to correlated market movements.",
      "realLifeExample": "Holding a long position of 100,000 in USDJPY at 110.00 and 50,000 in EURJPY at 130.00 exposes you to risks from both the USD and EUR, necessitating careful management.",
      "commonMistake": "Neglecting to assess the correlations between cross-currency trades can result in compounded risks that are difficult to manage.",
      "quickNote": "Evaluate cross-currency risks to prevent overlapping exposures in your trading strategy.",
      "mentorText": "When trading multiple currencies, always check how they interact. If one moves, the other might too, and you need to be prepared for that.",
      "mentorAnalogy": "Cross-currency trading is like juggling; if you lose track of one ball, the others can fall too. Keep your eye on all currencies to maintain control."
    },
    "taskData": null,
    "visualKey": "portfolio-risk-model"
  },
  {
    "type": "concept",
    "title": "Impact of Economic Indicators on Correlation",
    "label": "Forex Track",
    "body": "<!-- M9.2-forex-C5 -->\n### Core Scenario: Economic Indicators and Currency Correlation\nEconomic indicators significantly influence currency correlations, impacting risk management strategies. Understanding these relationships is critical for maintaining a balanced portfolio.\n\n* **Indicator Sensitivity**: Monitor key economic releases such as GDP, unemployment rates, and inflation data. For instance, a strong U.S. Non-Farm Payroll report may lead to a positive correlation between USD pairs, increasing overall portfolio risk.\n* **Correlation Shifts**: Be aware that correlations can shift based on economic cycles. For example, during a recession, EUR/USD may correlate more closely with GBP/USD due to shared economic challenges, necessitating a reevaluation of risk exposure.\n* **Event-Driven Analysis**: Implement a framework to analyze how specific indicators affect currency pairs. For instance, if the ECB announces a rate hike, expect heightened correlation between EUR/USD and EUR/CHF as market participants adjust their positions accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "Economic Indicators",
          "definition": "Statistical data that reflects the economic performance of a country, influencing currency values."
        }
      ],
      "whyThisMatters": "Understanding how economic indicators affect currency correlations allows traders to adjust their risk profiles proactively.",
      "realLifeExample": "On March 8, 2023, the U.S. Non-Farm Payroll report showed an increase of 300,000 jobs, causing the USD to strengthen against multiple currencies, leading to a correlation spike between USD/JPY and USD/CAD.",
      "commonMistake": "Failing to adjust positions after significant economic releases can lead to unintended risk concentrations.",
      "quickNote": "Economic indicators can shift currency correlations, impacting overall portfolio risk.",
      "mentorText": "When you see a major economic release, assess how it can change the landscape of your currency pairs. Don't just react; analyze the potential correlations.",
      "mentorAnalogy": "Think of economic indicators like weather forecasts for a pilot. Just as a pilot adjusts flight paths based on weather changes, you must adjust your portfolio based on economic data."
    },
    "taskData": null,
    "visualKey": "portfolio-risk-model"
  },
  {
    "type": "concept",
    "title": "Assessing Volatility in Currency Pairs",
    "label": "Forex Track",
    "body": "<!-- M9.2-forex-C6 -->\n### Core Scenario: Volatility Assessment for Risk Management\nVolatility in currency pairs is a critical factor in understanding potential risk overlaps. Accurate assessment allows for informed decision-making in Forex trading.\n\n* **Historical Volatility Calculation**: Use statistical methods to calculate historical volatility over different time frames. For example, a 30-day historical volatility of 12% for EUR/USD indicates potential price swings that must be factored into risk assessments.\n* **Implied Volatility Analysis**: Incorporate implied volatility from options pricing to gauge market expectations. A spike in implied volatility for GBP/USD ahead of a major economic announcement can signal increased risk, necessitating adjustments in exposure.\n* **Volatility Correlation**: Analyze how volatility in one currency pair affects others. For instance, if AUD/USD experiences high volatility due to commodity price changes, it may also impact NZD/USD, leading to overlapping risk profiles.",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility",
          "definition": "A statistical measure of the dispersion of returns for a given currency pair."
        }
      ],
      "whyThisMatters": "Understanding volatility helps traders anticipate potential price movements and adjust their risk management strategies accordingly.",
      "realLifeExample": "On February 15, 2023, the volatility for USD/JPY spiked to 15% due to geopolitical tensions, impacting correlated pairs like USD/CHF, which also saw increased fluctuations.",
      "commonMistake": "Ignoring volatility metrics can lead to underestimating risk exposure in correlated currency pairs.",
      "quickNote": "Assessing volatility is essential for understanding risk overlaps in Forex trading.",
      "mentorText": "Always keep an eye on volatility. It’s like monitoring turbulence during a flight; knowing when to brace for impact can save your portfolio.",
      "mentorAnalogy": "Assessing volatility is akin to a surgeon evaluating patient vitals before an operation. Just as a surgeon must prepare for potential complications, you must prepare for market fluctuations."
    },
    "taskData": null,
    "visualKey": "portfolio-risk-model"
  },
  {
    "type": "practice",
    "title": "Mitigation Strategies for Forex Risks",
    "label": "Forex Track",
    "body": "<!-- M9.2-forex-C7 -->\n### Core Scenario: Implementing Risk Mitigation Strategies\nMitigating risks associated with overlapping exposures in Forex portfolios is essential for maintaining capital. This card focuses on practical strategies to achieve this.\n\n* **Diversification Protocol**: Diversify currency pairs to reduce correlated risk. For example, holding both USD/JPY and AUD/JPY can expose you to similar risk profiles; instead, consider diversifying into USD/CAD or EUR/CHF.\n* **Hedging Techniques**: Utilize hedging strategies such as options or futures to offset potential losses. For instance, if you hold a long position in EUR/USD, consider a put option to protect against downside risk.\n* **Position Sizing Rules**: Establish strict position sizing rules based on volatility and correlation. If AUD/USD and NZD/USD are both showing high correlation, limit exposure to one to avoid compounding risk.",
    "context": {
      "keyTerms": [
        {
          "term": "Hedging",
          "definition": "A risk management strategy used to offset potential losses in an investment."
        }
      ],
      "whyThisMatters": "Implementing effective risk mitigation strategies protects capital and enhances long-term trading performance.",
      "realLifeExample": "On January 10, 2023, a trader holding long positions in both EUR/USD and GBP/USD implemented a hedge using options, limiting losses when the market moved against them due to unexpected economic data.",
      "commonMistake": "Failing to hedge or diversify can lead to significant losses during correlated market movements.",
      "quickNote": "Effective risk mitigation strategies are crucial for managing overlapping exposures in Forex portfolios.",
      "mentorText": "Think of risk mitigation as your safety net. If you’re walking a tightrope, you need that net to catch you if you slip.",
      "mentorAnalogy": "Mitigation strategies in trading are like safety protocols in aviation. Just as pilots follow checklists to ensure safety, you must have strategies in place to protect your investments."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You hold long positions in both EUR/USD and GBP/USD. What is the best strategy to mitigate risk associated with these correlated positions?",
      "options": [
        {
          "id": "0",
          "text": "Increase position size in both pairs to maximize potential gains.",
          "isCorrect": false,
          "feedback": "Increasing position size amplifies risk exposure, especially in correlated pairs."
        },
        {
          "id": "1",
          "text": "Implement a hedge using options on one of the pairs.",
          "isCorrect": true,
          "feedback": "Hedging with options provides a safety net against adverse movements in correlated positions."
        },
        {
          "id": "2",
          "text": "Diversify into unrelated currency pairs to reduce overall exposure.",
          "isCorrect": true,
          "feedback": "Diversifying into unrelated pairs helps mitigate risk from correlated positions."
        },
        {
          "id": "3",
          "text": "Ignore the correlation and maintain current positions.",
          "isCorrect": false,
          "feedback": "Ignoring correlation can lead to significant losses during market volatility."
        }
      ]
    },
    "visualKey": "portfolio-risk-model"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Risk Management Techniques",
    "label": "Forex Track",
    "body": "<!-- M9.2-forex-C8 -->\n### Core Scenario: Key Forex Risk Management Techniques\nEffective risk management in Forex trading hinges on understanding correlation and implementing appropriate strategies. This summary encapsulates essential techniques for managing risk.\n\n* **Correlation Awareness**: Regularly assess the correlation between currency pairs to identify potential overlaps. For example, a correlation coefficient of 0.85 between EUR/USD and GBP/USD indicates a high risk of simultaneous movements.\n* **Volatility Monitoring**: Continuously monitor both historical and implied volatility to gauge market conditions. High volatility often leads to increased risk, necessitating adjustments in exposure.\n* **Strategic Diversification**: Employ diversification strategies to minimize risk from correlated assets. For instance, balancing positions across different currency pairs can reduce overall portfolio risk exposure.",
    "context": {
      "keyTerms": [
        {
          "term": "Correlation Coefficient",
          "definition": "A statistical measure that describes the degree to which two assets move in relation to each other."
        }
      ],
      "whyThisMatters": "Summarizing these techniques reinforces the importance of correlation awareness in Forex risk management.",
      "realLifeExample": "Traders who monitored the correlation between USD/CHF and USD/JPY during the recent market downturn were able to adjust their positions effectively, minimizing losses.",
      "commonMistake": "Overlooking the significance of correlation can lead to unintentional risk concentrations in a portfolio.",
      "quickNote": "Key techniques for managing Forex risk include correlation awareness, volatility monitoring, and strategic diversification.",
      "mentorText": "Always keep these techniques in mind. They are your tools for navigating the complexities of Forex trading and ensuring you manage risk effectively.",
      "mentorAnalogy": "Think of these risk management techniques as the safety measures in a skyscraper. Just as engineers design for stability and safety, you must design your trading strategy to withstand market fluctuations."
    },
    "taskData": null,
    "visualKey": "portfolio-risk-model"
  }
];
