import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Crypto Trading Checklist Essentials",
    "label": "Crypto Track",
    "body": "### Crypto Trading Checklist: Essentials\nA structured trading checklist is vital for executing informed cryptocurrency trades. This card outlines the key components of a comprehensive checklist focusing on perp-spot divergence, funding cycles, and CME gap checks.\n\n* **Perp-Spot Divergence**: Identify divergences between perpetual contracts and spot prices, noting significant discrepancies that can indicate potential reversals or continuations.\n* **Funding Cycle Assessment**: Monitor funding rates and their cycles, ensuring that positions align with the funding schedule to avoid unnecessary costs or risks.\n* **CME Gap Analysis**: Regularly check for gaps in CME futures that can influence spot prices, particularly after weekends or holidays, to adjust your trading strategy accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "Perp-Spot Divergence",
          "definition": "The difference in price movement between perpetual contracts and spot market prices."
        },
        {
          "term": "Funding Cycle",
          "definition": "The schedule and rates at which perpetual contracts incur funding fees."
        },
        {
          "term": "CME Gap",
          "definition": "Price discrepancies in futures contracts on the Chicago Mercantile Exchange that can affect spot prices."
        }
      ],
      "whyThisMatters": "A thorough checklist ensures traders are prepared for market volatility and can make informed decisions based on current conditions.",
      "realLifeExample": "On a Tuesday at 10:00 AM EST, BTC perpetual contracts show a $200 divergence from the spot price, while funding rates are set to increase in the next 12 hours, indicating a potential short-term reversal.",
      "commonMistake": "Traders often overlook the significance of CME gaps, leading to missed opportunities or unexpected losses.",
      "quickNote": "A detailed checklist is essential for informed crypto trading decisions.",
      "mentorText": "When preparing to execute trades, I always start with my checklist. It helps me identify critical divergences and funding cycles that could impact my positions.",
      "mentorAnalogy": "Think of your trading checklist like a pilot's pre-flight checklist; every item ensures that you are ready for takeoff and that all systems are functioning correctly."
    },
    "taskData": null,
    "visualKey": "crypto-tp-checklist"
  },
  {
    "type": "concept",
    "title": "Analyzing Perp-Spot Divergence",
    "label": "Crypto Track",
    "body": "### Perp-Spot Divergence: Analysis\nUnderstanding perp-spot divergence is crucial for making informed trading decisions in the cryptocurrency market. This card details how to analyze these divergences effectively.\n\n* **Identifying Divergence**: Use technical indicators like RSI or MACD to spot divergences between perpetual and spot prices, focusing on significant price movements that deviate from historical patterns.\n* **Timing Entries**: Enter trades when divergence signals align with other market indicators, such as volume spikes or news events, to increase the probability of successful trades.\n* **Risk Management**: Set stop-loss orders based on the divergence analysis, ensuring that you protect your capital against unexpected market movements.",
    "context": {
      "keyTerms": [
        {
          "term": "Technical Indicators",
          "definition": "Tools used to analyze price movements and trends in the market."
        },
        {
          "term": "Volume Spikes",
          "definition": "Sudden increases in trading volume that can indicate potential price movements."
        }
      ],
      "whyThisMatters": "Accurately analyzing perp-spot divergence can lead to more strategic entry and exit points, enhancing overall trading performance.",
      "realLifeExample": "On a Thursday at 3:30 PM EST, ETH shows a divergence where the perpetual price is $50 higher than the spot price, confirmed by an RSI reading above 70, suggesting a potential short entry.",
      "commonMistake": "Failing to confirm divergence with additional indicators can lead to false signals and poor trade execution.",
      "quickNote": "Effective analysis of perp-spot divergence enhances trade decision-making.",
      "mentorText": "When I see a divergence, I don't just act on it blindly. I confirm it with other indicators to ensure I'm making a calculated decision.",
      "mentorAnalogy": "Analyzing perp-spot divergence is like a doctor diagnosing a patient; you need multiple symptoms to make an accurate assessment."
    },
    "taskData": null,
    "visualKey": "crypto-tp-checklist"
  },
  {
    "type": "concept",
    "title": "Assessing Funding Cycles in Crypto",
    "label": "Crypto Track",
    "body": "### Funding Cycles: Assessment\nAssessing funding cycles is essential for determining trade readiness in the cryptocurrency market. This card outlines how to effectively evaluate these cycles.\n\n* **Funding Rate Monitoring**: Keep track of the funding rates for perpetual contracts, noting when they are positive or negative, as this can impact trader sentiment and market direction.\n* **Cycle Timing**: Identify the timing of funding payments and adjust your trading strategy accordingly, especially when rates are set to change, as this can lead to increased volatility.\n* **Position Management**: Evaluate your open positions in relation to funding cycles, considering whether to hold, close, or adjust based on upcoming funding payments.",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate",
          "definition": "The fee paid between long and short positions in perpetual contracts."
        },
        {
          "term": "Trader Sentiment",
          "definition": "The overall attitude of traders towards a particular market or asset."
        }
      ],
      "whyThisMatters": "Understanding funding cycles allows traders to optimize their positions and avoid unnecessary costs associated with holding contracts during unfavorable cycles.",
      "realLifeExample": "On a Friday at 1:00 PM EST, the funding rate for BTC is set to increase from -0.01% to 0.05%, prompting a review of long positions to mitigate potential losses.",
      "commonMistake": "Ignoring funding rates can lead to unexpected costs that erode profits or amplify losses.",
      "quickNote": "Regular assessment of funding cycles is vital for effective position management.",
      "mentorText": "I always check the funding rates before entering a position. If I'm holding a long position and rates are about to increase, I reconsider my strategy.",
      "mentorAnalogy": "Assessing funding cycles is like managing a budget; you need to know when expenses will occur to avoid overspending."
    },
    "taskData": null,
    "visualKey": "crypto-tp-checklist"
  },
  {
    "type": "concept",
    "title": "CME Gap Checks for Crypto Trading",
    "label": "Crypto Track",
    "body": "### CME Gap Checks: Importance\nCME gap checks are critical for understanding price movements in the cryptocurrency market. This card explores how to incorporate these checks into your trading checklist.\n\n* **Identifying Gaps**: Regularly review CME futures charts to identify any gaps that may have formed during off-hours, particularly after weekends or holidays, which can indicate potential price corrections.\n* **Price Reaction Analysis**: Observe how the spot price reacts to these gaps, as significant movements often occur when the market opens, providing potential trading opportunities.\n* **Strategic Adjustments**: Adjust your trading strategy based on gap analysis, considering whether to enter or exit positions based on the likelihood of gap fills or continued price movement away from the gap.",
    "context": {
      "keyTerms": [
        {
          "term": "Gap Fill",
          "definition": "The process of price returning to fill a gap created in a previous trading session."
        },
        {
          "term": "Price Correction",
          "definition": "A short-term decline in price after a significant increase."
        }
      ],
      "whyThisMatters": "Incorporating CME gap checks into your trading strategy can enhance your ability to predict price movements and optimize entry and exit points.",
      "realLifeExample": "On a Monday at 9:00 AM EST, BTC opens with a $300 gap down from the previous Friday's close, prompting a review of long positions for potential exit strategies.",
      "commonMistake": "Failing to account for CME gaps can lead to unexpected price movements that catch traders off guard.",
      "quickNote": "CME gap checks are essential for anticipating market reactions and adjusting strategies accordingly.",
      "mentorText": "I always check for CME gaps before placing trades. They can provide insight into how the market might react when it opens.",
      "mentorAnalogy": "CME gap checks are like a weather forecast; they help you prepare for potential changes in conditions before they occur."
    },
    "taskData": null,
    "visualKey": "crypto-tp-checklist"
  },
  {
    "type": "concept",
    "title": "Understanding Market Volatility in Crypto",
    "label": "Crypto Track",
    "body": "### Market Volatility Assessment: Cryptocurrencies\nMarket volatility in cryptocurrencies can significantly influence trade execution and strategy. This card focuses on **how to evaluate volatility metrics to determine trade readiness**.\n\n* **Volatility Indicators**: Utilize the Average True Range (ATR) and Bollinger Bands to measure volatility. An ATR above 5% indicates heightened volatility, suggesting potential for larger price swings.\n* **Session Timing**: Assess volatility during key market sessions (e.g., 8:00 AM - 11:00 AM EST) when institutional activity peaks, often leading to increased price movements.\n* **Impact on Execution**: High volatility periods may require wider stop-loss placements and adjusted position sizing to mitigate risk while capitalizing on price movements.",
    "context": {
      "keyTerms": [
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical indicator measuring market volatility by decomposing the entire range of an asset price for a set period."
        },
        {
          "term": "Bollinger Bands",
          "definition": "A volatility indicator that consists of a middle band (SMA) and two outer bands that represent standard deviations."
        }
      ],
      "whyThisMatters": "Understanding volatility is crucial for determining optimal entry and exit points in crypto trading, directly impacting risk management.",
      "realLifeExample": "On October 10, 2023, Bitcoin exhibited an ATR of 6% during the 9:00 AM EST session, prompting a review of trade readiness due to potential price swings exceeding $1,500.",
      "commonMistake": "Traders often underestimate volatility, leading to inadequate stop-loss placements and over-leveraging during high volatility periods.",
      "quickNote": "Assess market volatility using ATR and Bollinger Bands to inform trade readiness.",
      "mentorText": "When evaluating volatility, always check the ATR and Bollinger Bands before entering a trade. If the ATR is high, adjust your strategy accordingly to manage risk effectively.",
      "mentorAnalogy": "Think of volatility like turbulence during a flight; just as pilots adjust their approach during bumpy conditions, traders must adapt their strategies in volatile markets."
    },
    "taskData": null,
    "visualKey": "crypto-tp-checklist"
  },
  {
    "type": "concept",
    "title": "Integrating Technical Indicators in Crypto Checklists",
    "label": "Crypto Track",
    "body": "### Technical Indicators in Crypto Checklists\nIncorporating technical indicators into crypto trading checklists enhances decision-making and execution precision. This card outlines **how to effectively integrate these indicators into your trading process**.\n\n* **Checklist Framework**: Create a checklist that includes essential indicators like RSI, MACD, and moving averages. For instance, an RSI reading above 70 may indicate overbought conditions, prompting a review of entry points.\n* **Signal Confirmation**: Use multiple indicators for confirmation. For example, a bullish MACD crossover combined with a price above the 50-day moving average strengthens the case for a long position.\n* **Dynamic Adjustments**: Regularly update the checklist based on market conditions. If volatility increases, consider adding volatility indicators like ATR to the checklist for enhanced risk assessment.",
    "context": {
      "keyTerms": [
        {
          "term": "Relative Strength Index (RSI)",
          "definition": "A momentum oscillator that measures the speed and change of price movements, typically used to identify overbought or oversold conditions."
        },
        {
          "term": "Moving Average Convergence Divergence (MACD)",
          "definition": "A trend-following momentum indicator that shows the relationship between two moving averages of a security's price."
        }
      ],
      "whyThisMatters": "Integrating technical indicators into checklists ensures a systematic approach to trading, reducing emotional decision-making.",
      "realLifeExample": "On November 5, 2023, Ethereum's RSI reached 75 while the MACD showed a bullish crossover, prompting a checklist review that led to a successful long position entry.",
      "commonMistake": "Traders often rely on a single indicator for decision-making, neglecting the benefits of a multi-indicator approach that provides greater confirmation.",
      "quickNote": "Integrate multiple technical indicators into your trading checklist for improved decision-making.",
      "mentorText": "Always have a checklist that includes multiple indicators. This way, you confirm your trades rather than relying on a single signal, which can lead to mistakes.",
      "mentorAnalogy": "Creating a trading checklist with indicators is like a pilot's pre-flight checklist; it ensures all systems are go before takeoff, minimizing risks."
    },
    "taskData": null,
    "visualKey": "crypto-tp-checklist"
  },
  {
    "type": "practice",
    "title": "Practical Application of Crypto Checklists",
    "label": "Crypto Track",
    "body": "### Engaging with Crypto Trading Checklists\nThis card focuses on applying crypto trading checklists in real-time scenarios to reinforce learned concepts. **Practice executing trades based on checklist criteria**.\n\n* **Scenario Simulation**: You are monitoring Bitcoin on November 15, 2023, where the price is $35,000. The checklist indicates an ATR of 4%, RSI at 65, and a bullish MACD crossover. Decide whether to enter a long position based on these indicators.\n* **Risk Management Application**: Determine appropriate stop-loss placement based on the checklist findings. With an ATR of 4%, consider placing the stop-loss 2% below the entry price to accommodate volatility.\n* **Execution Timing**: Assess the best time to execute the trade. If the market shows increased volatility during the 10:00 AM EST session, prioritize execution during this window for optimal entry.",
    "context": {
      "keyTerms": [
        {
          "term": "Execution Timing",
          "definition": "The strategic decision of when to enter or exit a trade based on market conditions and analysis."
        },
        {
          "term": "Risk Management",
          "definition": "The process of identifying, assessing, and controlling threats to an organization's capital and earnings."
        }
      ],
      "whyThisMatters": "Practicing checklist application in real scenarios enhances execution skills and reinforces the importance of systematic trading.",
      "realLifeExample": "During a simulated trading session, Bitcoin's price fluctuated around $35,000 with an ATR of 4%. A trader used the checklist to enter a long position at $35,100, placing a stop-loss at $34,500.",
      "commonMistake": "Traders often neglect to apply their checklists in real-time scenarios, leading to impulsive decisions that deviate from their planned strategy.",
      "quickNote": "Engage in practical scenarios to apply crypto trading checklists effectively.",
      "mentorText": "Use your checklist in every trade. It’s your guide to making informed decisions, so don’t skip it, even when the market feels right.",
      "mentorAnalogy": "Applying a trading checklist is like a surgeon following a surgical protocol; it ensures every step is taken to minimize risk and maximize success."
    },
    "taskData": {
      "type": "choice_block",
      "question": "Given the following checklist criteria for Bitcoin, what should your action be? Price: $35,000, ATR: 4%, RSI: 65, MACD: Bullish crossover.",
      "options": [
        {
          "id": "0",
          "text": "Enter a long position with a stop-loss at $34,500.",
          "isCorrect": true,
          "feedback": "This action aligns with the checklist criteria, ensuring a calculated entry with appropriate risk management."
        },
        {
          "id": "1",
          "text": "Do not enter a position; wait for the RSI to drop below 50.",
          "isCorrect": false,
          "feedback": "Waiting for the RSI to drop below 50 disregards the current bullish signals from the checklist."
        },
        {
          "id": "2",
          "text": "Enter a short position immediately due to high volatility.",
          "isCorrect": false,
          "feedback": "Entering a short position contradicts the bullish signals indicated by the checklist."
        },
        {
          "id": "3",
          "text": "Place a market order without checking the checklist.",
          "isCorrect": false,
          "feedback": "Skipping the checklist undermines the systematic approach necessary for successful trading."
        }
      ]
    },
    "visualKey": "crypto-tp-checklist"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Trade Readiness",
    "label": "Crypto Track",
    "body": "### Key Components of Crypto Trading Checklists\nThis card summarizes the essential elements of crypto trading checklists, emphasizing timing and market analysis. **Understanding these components is vital for trade execution**.\n\n* **Volatility Assessment**: Always evaluate market volatility using indicators like ATR and Bollinger Bands to inform your trading strategy.\n* **Technical Indicator Integration**: Incorporate multiple technical indicators into your checklist to enhance decision-making and confirmation before executing trades.\n* **Execution Timing and Risk Management**: Prioritize execution during high volatility sessions and ensure proper risk management through calculated stop-loss placements based on checklist criteria.",
    "context": {
      "keyTerms": [
        {
          "term": "Trade Readiness",
          "definition": "The state of being prepared to execute trades based on systematic analysis and checklist criteria."
        },
        {
          "term": "Market Analysis",
          "definition": "The process of evaluating market conditions and trends to inform trading decisions."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of checklist components ensures disciplined trading and enhances the likelihood of successful outcomes.",
      "realLifeExample": "On November 20, 2023, a trader successfully executed a long position on Litecoin after confirming checklist criteria, including volatility assessment and technical indicator signals.",
      "commonMistake": "Traders often overlook the importance of a comprehensive checklist, leading to inconsistent trading practices and missed opportunities.",
      "quickNote": "Master the components of crypto trading checklists for effective trade execution.",
      "mentorText": "Review your checklist components regularly. They are your roadmap to successful trading, ensuring you don’t miss critical analysis steps.",
      "mentorAnalogy": "Think of your trading checklist as a flight plan; it outlines every necessary step to ensure a safe and successful journey in the market."
    },
    "taskData": null,
    "visualKey": "crypto-tp-checklist"
  }
];
