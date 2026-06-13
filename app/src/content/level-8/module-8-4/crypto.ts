import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Crypto Daily Routine Fundamentals",
    "label": "Crypto Track",
    "body": "<!-- M8.4-crypto-C1 -->\n### Core Scenario: Daily Routine Structure\nEstablishing a structured daily routine is essential for effective cryptocurrency trading. This card outlines **the critical components necessary for a comprehensive pre-market scan**.\n\n* **Macro Calendar Review**: Analyze upcoming economic events that may impact cryptocurrency markets, such as regulatory announcements or macroeconomic data releases. Schedule this review at least one hour before market open to adjust strategies accordingly.\n* **Yield Spread Analysis**: Monitor yield spreads between major cryptocurrencies and fiat currencies. A widening spread may indicate increased risk appetite or market volatility, prompting a reassessment of positions.\n* **Index Indicator Check**: Evaluate key index indicators like the Crypto Fear & Greed Index to gauge market sentiment. This should be done daily to align trading strategies with prevailing market psychology.",
    "context": {
      "keyTerms": [
        {
          "term": "Macro Calendar",
          "definition": "A schedule of significant economic events that can influence market movements."
        },
        {
          "term": "Yield Spread",
          "definition": "The difference in yield between two financial instruments, indicating relative risk."
        },
        {
          "term": "Index Indicator",
          "definition": "A statistical measure that reflects the overall market sentiment."
        }
      ],
      "whyThisMatters": "A rigorous daily routine ensures that traders are prepared for market fluctuations and can make informed decisions based on current conditions.",
      "realLifeExample": "Prior to the NY market open, a trader reviews the macro calendar and notes a scheduled announcement from the SEC regarding cryptocurrency regulations, adjusting their strategy for potential volatility.",
      "commonMistake": "Failing to consistently review the macro calendar can lead to unexpected market reactions and unpreparedness.",
      "quickNote": "A structured daily routine is vital for informed trading decisions.",
      "mentorText": "You must treat your daily routine like a pilot's pre-flight checklist. Every component matters; missing one could lead to turbulence in your trading.",
      "mentorAnalogy": "Think of your daily routine as a surgeon's checklist before an operation. Each step ensures that you're prepared for any unexpected outcomes."
    },
    "taskData": null,
    "visualKey": "pre-market-prep-card"
  },
  {
    "type": "concept",
    "title": "Analyzing Glassnode Exchange Flows",
    "label": "Crypto Track",
    "body": "<!-- M8.4-crypto-C2 -->\n### Core Scenario: Exchange Flow Analysis\nGlassnode provides valuable data on exchange flows, which can indicate market sentiment and potential price movements. This card teaches **how to interpret these flows effectively**.\n\n* **Inflow vs. Outflow Metrics**: Track the volume of Bitcoin and Ethereum inflows versus outflows on exchanges. A significant increase in inflows may suggest selling pressure, while outflows can indicate accumulation or bullish sentiment.\n* **Net Flow Calculation**: Calculate net flow by subtracting total outflows from total inflows. A positive net flow indicates more assets are moving to exchanges, which may signal impending selling, while a negative net flow suggests accumulation.\n* **Timeframe Analysis**: Analyze flows over different timeframes (daily, weekly) to identify trends. Short-term spikes can indicate immediate market reactions, while long-term trends provide insights into broader market sentiment.",
    "context": {
      "keyTerms": [
        {
          "term": "Inflow",
          "definition": "The volume of cryptocurrency entering exchanges."
        },
        {
          "term": "Outflow",
          "definition": "The volume of cryptocurrency leaving exchanges."
        },
        {
          "term": "Net Flow",
          "definition": "The difference between inflows and outflows, indicating market direction."
        }
      ],
      "whyThisMatters": "Understanding exchange flows helps traders anticipate market movements and adjust their strategies accordingly.",
      "realLifeExample": "On a day when Bitcoin inflows spike by 10,000 BTC while outflows remain steady, a trader may interpret this as a signal to tighten stop-loss orders due to potential selling pressure.",
      "commonMistake": "Overlooking the context of exchange flows can lead to misinterpretation of market sentiment.",
      "quickNote": "Analyzing exchange flows provides insights into market sentiment and potential price movements.",
      "mentorText": "When you look at exchange flows, think of it as reading the pulse of the market. If inflows are rising, the market might be getting ready for a shock.",
      "mentorAnalogy": "Consider exchange flows like traffic patterns in a city. Heavy inflow to exchanges is like rush hour; it indicates potential congestion or volatility ahead."
    },
    "taskData": null,
    "visualKey": "pre-market-prep-card"
  },
  {
    "type": "concept",
    "title": "Understanding Funding Rates in Crypto Markets",
    "label": "Crypto Track",
    "body": "<!-- M8.4-crypto-C3 -->\n### Core Scenario: Funding Rate Interpretation\nFunding rates are a crucial aspect of cryptocurrency trading that can influence trading strategies. This card focuses on **how to interpret these rates effectively**.\n\n* **Funding Rate Calculation**: Understand how funding rates are calculated based on the difference between perpetual contract prices and spot prices. A positive funding rate indicates that long positions are paying shorts, while a negative rate suggests the opposite.\n* **Impact on Position Management**: Monitor funding rates to adjust your position sizes. High funding rates may necessitate reducing leverage or closing positions to avoid excessive costs, while low rates can allow for increased risk-taking.\n* **Market Sentiment Indicator**: Use funding rates as a sentiment gauge. Elevated positive funding rates often indicate bullish sentiment, while negative rates can signal bearish sentiment, helping to inform entry and exit points.",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate",
          "definition": "The periodic payment made between long and short positions in perpetual contracts."
        },
        {
          "term": "Perpetual Contract",
          "definition": "A derivative that allows trading without an expiration date."
        },
        {
          "term": "Spot Price",
          "definition": "The current market price at which an asset can be bought or sold."
        }
      ],
      "whyThisMatters": "Understanding funding rates allows traders to optimize their strategies and manage risks effectively in volatile markets.",
      "realLifeExample": "If the funding rate for Bitcoin perpetual contracts is 0.1% and remains positive for several days, a trader might decide to reduce their long position to avoid accumulating costs.",
      "commonMistake": "Ignoring funding rates can lead to unexpected costs that erode profits over time.",
      "quickNote": "Funding rates are critical for managing costs and gauging market sentiment.",
      "mentorText": "Think of funding rates as the cost of doing business in the crypto market. If you're not aware of them, you could be losing money without realizing it.",
      "mentorAnalogy": "Consider funding rates like interest rates on a loan. They can significantly affect your overall cost and should be monitored closely."
    },
    "taskData": null,
    "visualKey": "pre-market-prep-card"
  },
  {
    "type": "concept",
    "title": "Coinglass Liquidation Data for Market Insights",
    "label": "Crypto Track",
    "body": "<!-- M8.4-crypto-C4 -->\n### Core Scenario: Liquidation Data Utilization\nCoinglass provides critical liquidation data that can inform trading decisions. This card explores **how to effectively utilize this data in pre-market analysis**.\n\n* **Liquidation Levels Monitoring**: Track liquidation levels across major cryptocurrencies. High liquidation levels can indicate potential price volatility, as a significant number of positions may be forced to close under adverse conditions.\n* **Market Sentiment Analysis**: Analyze liquidation data in conjunction with price movements. A sudden spike in liquidations during a price drop can signify panic selling, while a lack of liquidations during a rally may indicate strong buying support.\n* **Risk Management Strategy**: Use liquidation data to inform your risk management strategies. If liquidation levels are approaching critical thresholds, consider adjusting your positions or implementing tighter stop-loss orders to mitigate risk.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation Data",
          "definition": "Information regarding positions that are forcibly closed due to margin calls."
        },
        {
          "term": "Margin Call",
          "definition": "A demand by a broker for an investor to deposit additional funds to cover potential losses."
        },
        {
          "term": "Volatility Indicator",
          "definition": "A measure that reflects the degree of price fluctuations in the market."
        }
      ],
      "whyThisMatters": "Utilizing liquidation data helps traders anticipate market movements and manage risk effectively during volatile conditions.",
      "realLifeExample": "If Coinglass shows a high liquidation level for Ethereum at $2,000, a trader may decide to avoid entering long positions until the market stabilizes.",
      "commonMistake": "Failing to monitor liquidation data can lead to unexpected losses during market downturns.",
      "quickNote": "Liquidation data is essential for anticipating market volatility and managing risk.",
      "mentorText": "Liquidation data is your early warning system. If you see high levels, it’s time to reassess your positions and prepare for potential market shifts.",
      "mentorAnalogy": "Think of liquidation data like a weather forecast for traders. Just as you wouldn't venture out in a storm without an umbrella, don't enter trades without understanding potential liquidations."
    },
    "taskData": null,
    "visualKey": "pre-market-prep-card"
  },
  {
    "type": "concept",
    "title": "Assessing Market Sentiment in Crypto",
    "label": "Crypto Track",
    "body": "<!-- M8.4-crypto-C5 -->\n### Core Scenario: Market Sentiment Analysis\nMarket sentiment in cryptocurrency can significantly influence price movements and trading strategies. This card details **how to evaluate sentiment through various indicators and data sources**.\n\n* **Social Media Sentiment**: Analyze platforms like Twitter and Reddit for sentiment indicators. Tools like The TIE or Santiment can quantify sentiment based on tweet volumes and positivity ratios, providing insights into trader psychology.\n* **Fear and Greed Index**: Utilize the Crypto Fear and Greed Index to gauge market emotions. A reading below 20 indicates extreme fear, suggesting potential buying opportunities, while a reading above 80 signals extreme greed, often preceding corrections.\n* **Volume Analysis**: Monitor trading volumes across major exchanges. A spike in volume during price increases can indicate strong bullish sentiment, while declining volume during price drops may suggest weakening bearish pressure.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of traders towards a particular cryptocurrency or the market as a whole."
        },
        {
          "term": "Fear and Greed Index",
          "definition": "A tool that measures market sentiment based on emotions and market behavior."
        }
      ],
      "whyThisMatters": "Understanding market sentiment allows traders to align their strategies with prevailing market conditions, improving decision-making.",
      "realLifeExample": "On March 15, 2023, Bitcoin's price surged from $25,000 to $28,000 as social media sentiment shifted from fear to greed, with the Fear and Greed Index rising from 30 to 65.",
      "commonMistake": "Traders often overlook sentiment indicators, relying solely on technical analysis, which can lead to missed opportunities.",
      "quickNote": "Market sentiment is a critical component in shaping trading strategies in crypto.",
      "mentorText": "When assessing market sentiment, I always check social media trends and the Fear and Greed Index. If I see a shift towards greed, I prepare for potential pullbacks.",
      "mentorAnalogy": "Think of market sentiment like weather patterns; just as a storm can change quickly, so can trader emotions. A sudden shift in sentiment can indicate a change in market conditions."
    },
    "taskData": null,
    "visualKey": "pre-market-prep-card"
  },
  {
    "type": "concept",
    "title": "Identifying Trading Signals from Pre-Market Data",
    "label": "Crypto Track",
    "body": "<!-- M8.4-crypto-C6 -->\n### Core Scenario: Actionable Signals from Pre-Market Data\nPre-market data offers critical insights into potential trading opportunities in the cryptocurrency market. This card outlines **how to extract actionable signals from this data**.\n\n* **Order Book Analysis**: Examine the order book for significant buy and sell walls. Large orders can indicate potential support or resistance levels, guiding entry and exit points.\n* **Price Action Patterns**: Identify key price action patterns such as breakouts or reversals in the pre-market session. For instance, a breakout above a significant resistance level on high volume can signal a strong buying opportunity.\n* **Correlation with Major Indices**: Monitor correlations with major indices like the S&P 500 or Bitcoin dominance. A divergence can signal potential shifts in market direction, providing early trading signals.",
    "context": {
      "keyTerms": [
        {
          "term": "Order Book",
          "definition": "A list of buy and sell orders for a specific cryptocurrency."
        },
        {
          "term": "Price Action",
          "definition": "The movement of a cryptocurrency's price over time."
        }
      ],
      "whyThisMatters": "Identifying trading signals from pre-market data enhances the ability to make informed decisions before the market opens.",
      "realLifeExample": "On April 10, 2023, Ethereum displayed a breakout pattern at $1,800 with significant buy orders in the order book, leading to a rally to $1,900 shortly after market open.",
      "commonMistake": "Traders often ignore pre-market data, missing critical signals that could enhance their trading strategies.",
      "quickNote": "Pre-market data is essential for identifying actionable trading signals.",
      "mentorText": "I always start my day by analyzing the order book and price action. If I see a breakout forming, I prepare to enter as soon as the market opens.",
      "mentorAnalogy": "Consider pre-market data like a pilot's pre-flight checklist; it ensures all systems are go before takeoff, allowing for a smoother flight."
    },
    "taskData": null,
    "visualKey": "pre-market-prep-card"
  },
  {
    "type": "practice",
    "title": "Practicing Crypto Pre-Market Checks",
    "label": "Crypto Track",
    "body": "<!-- M8.4-crypto-C7 -->\n### Core Scenario: Engaging in Pre-Market Checks\nConducting thorough pre-market checks is essential for successful trading in the cryptocurrency market. This card provides **practical exercises to reinforce pre-market routines**.\n\n* **Daily Market Review**: Create a checklist to review key macroeconomic events, news articles, and social media sentiment before market open. This should include checking for any major announcements that could impact prices.\n* **Technical Setup Validation**: Review your technical setups against the current market conditions. Ensure that your planned trades align with the prevailing sentiment and market structure identified during your pre-market analysis.\n* **Risk Assessment**: Conduct a risk assessment for each planned trade. Determine stop-loss levels and position sizes based on volatility and market conditions observed during the pre-market session.",
    "context": {
      "keyTerms": [
        {
          "term": "Macro Events",
          "definition": "Significant economic events that can impact market conditions."
        },
        {
          "term": "Risk Assessment",
          "definition": "The process of evaluating potential risks associated with a trade."
        }
      ],
      "whyThisMatters": "Engaging in pre-market checks ensures that traders are well-prepared and informed, reducing the likelihood of impulsive decisions.",
      "realLifeExample": "On May 5, 2023, a major regulatory announcement was expected, prompting traders to adjust their strategies and risk assessments before market open, leading to a more structured approach.",
      "commonMistake": "Failing to conduct a comprehensive pre-market check can lead to unpreparedness and missed opportunities.",
      "quickNote": "Thorough pre-market checks are vital for successful trading.",
      "mentorText": "Before the market opens, I always run through my checklist. It’s like preparing for a big game; you need to know your strategy and the conditions.",
      "mentorAnalogy": "Think of pre-market checks like a surgeon’s pre-op briefing; every detail matters to ensure a successful outcome."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You are preparing for a trading session in the cryptocurrency market. After conducting your pre-market checks, you notice a significant macroeconomic announcement scheduled for the same day. What should be your immediate course of action regarding your planned trades?",
      "options": [
        {
          "id": "0",
          "text": "Reassess your planned trades and adjust your risk assessment based on the potential impact of the announcement.",
          "isCorrect": true,
          "feedback": "This is correct because understanding the implications of macroeconomic events is crucial for managing risk and aligning trades with market sentiment."
        },
        {
          "id": "1",
          "text": "Proceed with your planned trades without any adjustments, as macroeconomic announcements do not affect cryptocurrency prices.",
          "isCorrect": false,
          "feedback": "This is incorrect because macroeconomic announcements can significantly influence market sentiment and price movements in the cryptocurrency market."
        },
        {
          "id": "2",
          "text": "Ignore the announcement and focus solely on technical setups, as they are more reliable than news events.",
          "isCorrect": false,
          "feedback": "This is incorrect because neglecting macroeconomic factors can lead to unexpected losses, as news can alter market conditions rapidly."
        },
        {
          "id": "3",
          "text": "Cancel all planned trades immediately, as any announcement could lead to losses.",
          "isCorrect": false,
          "feedback": "This is incorrect because while caution is necessary, outright cancellation without reassessment may lead to missed opportunities if the announcement has a neutral or positive impact."
        }
      ]
    },
    "visualKey": "pre-market-prep-card"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Pre-Market Routine",
    "label": "Crypto Track",
    "body": "<!-- M8.4-crypto-C8 -->\n### Core Scenario: Recap of Pre-Market Routine\nA structured pre-market routine is crucial for navigating the cryptocurrency market effectively. This card summarizes **the key elements of a comprehensive pre-market routine**.\n\n* **Exchange Flow Monitoring**: Regularly check exchange flows to identify where capital is moving. Significant inflows or outflows can indicate potential price movements and market sentiment shifts.\n* **Funding Rate Analysis**: Assess funding rates across major exchanges. High funding rates may indicate over-leveraged positions, while negative rates can signal potential short squeezes or buying opportunities.\n* **Macro Calendar Review**: Stay updated on macroeconomic calendars to anticipate events that could impact the crypto market. Key announcements can lead to volatility and trading opportunities.",
    "context": {
      "keyTerms": [
        {
          "term": "Exchange Flows",
          "definition": "The movement of capital in and out of cryptocurrency exchanges."
        },
        {
          "term": "Funding Rate",
          "definition": "The cost of holding a leveraged position in the cryptocurrency market."
        }
      ],
      "whyThisMatters": "A well-defined pre-market routine enhances preparedness and strategic execution, leading to more informed trading decisions.",
      "realLifeExample": "On June 1, 2023, monitoring exchange flows revealed significant Bitcoin outflows, prompting traders to adjust their positions ahead of a major market dip.",
      "commonMistake": "Traders often neglect to review funding rates, missing critical insights into market leverage and sentiment.",
      "quickNote": "A structured pre-market routine is essential for effective trading in crypto.",
      "mentorText": "I can’t stress enough the importance of a pre-market routine. It’s like checking your gear before a climb; you need to ensure everything is in order.",
      "mentorAnalogy": "Consider your pre-market routine as a pilot’s pre-flight checklist; each item ensures you’re ready for a safe and successful journey."
    },
    "taskData": null,
    "visualKey": "pre-market-prep-card"
  }
];
