import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Impact of BTC Dominance on Forex Exposure",
    "label": "Forex Track",
    "body": "### Core Scenario: BTC Dominance Fluctuations\nFluctuations in BTC dominance can significantly impact risk-on forex pairs, necessitating adjustments in forex exposure. This card outlines **how to evaluate BTC dominance changes and their implications for forex trading**.\n\n* **BTC Dominance Assessment**: Monitor BTC dominance percentage changes using a reliable crypto market data source. A rise above 60% typically indicates increased risk aversion, warranting a reduction in exposure to risk-on pairs like AUD/USD.\n* **Forex Pair Correlation**: Analyze historical correlation data between BTC and selected forex pairs. For instance, a strong correlation between BTC and NZD/USD during bullish BTC trends suggests a potential increase in NZD/USD volatility.\n* **Dynamic Exposure Adjustment**: Implement a systematic approach to adjust forex exposure based on BTC dominance shifts. For example, if BTC dominance rises from 55% to 65%, consider reducing long positions in AUD/USD by 50% to mitigate risk.\n",
    "context": {
      "keyTerms": [
        {
          "term": "BTC Dominance",
          "definition": "The percentage of Bitcoin's market capitalization relative to the total cryptocurrency market."
        }
      ],
      "whyThisMatters": "Understanding BTC dominance allows traders to anticipate shifts in market sentiment and adjust forex exposure accordingly, optimizing risk management.",
      "realLifeExample": "On March 15, 2023, BTC dominance increased from 58% to 63% as market sentiment shifted, prompting a trader to reduce their long AUD/USD position from 10,000 to 5,000 units.",
      "commonMistake": "Traders often neglect to monitor BTC dominance, leading to overexposure in risk-on forex pairs during bearish crypto trends.",
      "quickNote": "Adjust forex exposure in response to BTC dominance shifts to manage risk effectively.",
      "mentorText": "When BTC dominance rises, it’s a signal to reassess your forex positions. Think of it as a warning light on your dashboard; you need to adjust your strategy before it’s too late.",
      "mentorAnalogy": "Adjusting forex exposure based on BTC dominance is akin to a pilot recalibrating flight paths in response to changing weather conditions, ensuring a safe and efficient journey."
    },
    "taskData": null,
    "visualKey": "crypto-exec-specifics"
  },
  {
    "type": "concept",
    "title": "Correlation Between BTC and Forex Pairs",
    "label": "Forex Track",
    "body": "### Core Scenario: BTC and Forex Pair Dynamics\nThe correlation between BTC and various forex pairs can provide insights into market behavior and trading opportunities. This card details **how to analyze and leverage these correlations for informed trading decisions**.\n\n* **Correlation Analysis**: Utilize statistical tools to calculate the correlation coefficient between BTC and selected forex pairs over different time frames. A coefficient above 0.7 indicates a strong positive correlation, suggesting simultaneous price movements.\n* **Market Sentiment Indicators**: Identify key market sentiment indicators that influence both BTC and forex pairs. For example, during bullish BTC trends, pairs like GBP/USD may also experience upward momentum, providing potential trading opportunities.\n* **Trade Execution Timing**: Time your forex trades based on BTC movements. If BTC shows a bullish breakout above $30,000, consider entering a long position in EUR/USD, which has historically reacted positively to BTC rallies.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Correlation Coefficient",
          "definition": "A statistical measure that indicates the extent to which two variables fluctuate together."
        }
      ],
      "whyThisMatters": "Understanding the correlation between BTC and forex pairs enables traders to make more informed decisions, enhancing the potential for profitable trades.",
      "realLifeExample": "On April 10, 2023, BTC surged to $32,500, correlating with a 1.5% increase in GBP/USD, allowing a trader to capitalize on the movement by entering a long position.",
      "commonMistake": "Traders often overlook the correlation dynamics, leading to missed opportunities or unexpected losses when BTC moves against their forex positions.",
      "quickNote": "Analyze BTC correlations with forex pairs to time trades effectively.",
      "mentorText": "Think of BTC as a compass for your forex trades. If it points north, your forex pairs might just follow suit, so always check the direction before you act.",
      "mentorAnalogy": "Analyzing BTC correlation with forex pairs is like a conductor leading an orchestra; when one instrument plays a strong note, the others often follow in harmony."
    },
    "taskData": null,
    "visualKey": "crypto-exec-specifics"
  },
  {
    "type": "concept",
    "title": "Hedging Strategies Against BTC Volatility",
    "label": "Forex Track",
    "body": "### Core Scenario: Protecting Forex Positions\nEmploying effective hedging strategies can safeguard forex positions from the volatility of BTC. This card outlines **specific hedging techniques to mitigate risk**.\n\n* **Options Contracts**: Utilize options contracts to hedge against adverse BTC price movements. For instance, purchasing a put option on BTC while holding a long position in USD/JPY can protect against BTC declines impacting forex valuations.\n* **Inverse ETFs**: Consider investing in inverse ETFs that track BTC performance. If BTC experiences significant volatility, these ETFs can offset losses in forex positions, providing a cushion against market fluctuations.\n* **Cross-Asset Hedging**: Implement cross-asset hedging by taking positions in negatively correlated assets. For example, if BTC is volatile, taking a long position in gold (XAU/USD) can serve as a hedge against potential losses in forex trades.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Hedging",
          "definition": "A risk management strategy used to offset potential losses in an investment."
        }
      ],
      "whyThisMatters": "Effective hedging strategies protect forex positions from BTC volatility, allowing traders to maintain their risk management protocols.",
      "realLifeExample": "On May 5, 2023, a trader holding a long position in USD/CAD purchased a put option on BTC at $28,000, effectively hedging against a potential BTC drop that could impact their forex position.",
      "commonMistake": "Traders often fail to hedge adequately, exposing their forex positions to unnecessary risk during periods of BTC volatility.",
      "quickNote": "Utilize hedging strategies to protect forex positions from BTC volatility.",
      "mentorText": "Think of hedging as an insurance policy for your trades. Just as you wouldn’t drive without car insurance, don’t expose your forex positions to BTC volatility without a hedge.",
      "mentorAnalogy": "Hedging against BTC volatility is like a surgeon using a safety net during a high-risk procedure; it ensures that even if something goes wrong, there’s a safeguard in place."
    },
    "taskData": null,
    "visualKey": "crypto-exec-specifics"
  },
  {
    "type": "concept",
    "title": "Impact of Crypto Funding Rates on Forex Trading",
    "label": "Forex Track",
    "body": "### Core Scenario: Funding Rate Influence\nCrypto funding rates can significantly affect forex trading strategies, particularly during shifts in BTC dominance. This card explains **how to analyze and incorporate funding rates into forex decision-making**.\n\n* **Funding Rate Monitoring**: Regularly check the funding rates of major perpetual contracts for BTC and ETH. A high funding rate may indicate bullish sentiment, prompting a reevaluation of long positions in forex pairs like AUD/NZD.\n* **Sentiment Correlation**: Establish a correlation between funding rates and forex market sentiment. For instance, if BTC funding rates rise sharply, it may signal increased bullish sentiment, suggesting a potential long entry in risk-on pairs.\n* **Strategic Positioning**: Adjust forex positions based on funding rate trends. If BTC funding rates remain elevated for several consecutive days, consider increasing exposure to bullish forex pairs to capitalize on the sentiment shift.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate",
          "definition": "The cost of holding a leveraged position in perpetual contracts, determined by the difference between the interest rates of the two assets."
        }
      ],
      "whyThisMatters": "Understanding crypto funding rates allows traders to align their forex strategies with prevailing market sentiment, enhancing decision-making.",
      "realLifeExample": "On June 20, 2023, BTC funding rates surged to 0.15%, indicating bullish sentiment, leading a trader to increase their long position in AUD/USD by 20% to capitalize on the expected upward movement.",
      "commonMistake": "Traders often neglect to factor in funding rates, leading to misaligned positions that can exacerbate losses during market shifts.",
      "quickNote": "Incorporate crypto funding rates into forex strategies to align with market sentiment.",
      "mentorText": "Funding rates are like the pulse of the crypto market; if they’re rising, it’s time to check your forex positions and adjust accordingly.",
      "mentorAnalogy": "Analyzing crypto funding rates is akin to a weather forecast for a sailor; it informs you of the conditions ahead, allowing you to navigate your trades more effectively."
    },
    "taskData": null,
    "visualKey": "crypto-exec-specifics"
  },
  {
    "type": "concept",
    "title": "Impact of BTC Movements on Forex Sentiment",
    "label": "Forex Track",
    "body": "### Core Scenario: Risk-On/Risk-Off Sentiment in Forex Markets\nRisk sentiment significantly influences forex trading strategies, particularly as driven by movements in Bitcoin (BTC). This card analyzes **how BTC price fluctuations can dictate forex market behavior**.\n\n* **Sentiment Indicators**: Monitor BTC price trends to gauge market sentiment. A rising BTC often correlates with a risk-on environment, leading to stronger demand for higher-yielding currencies like AUD and NZD.\n* **Correlation Analysis**: Utilize correlation metrics between BTC and major forex pairs. For instance, if BTC rallies 5% in a day, observe how pairs like AUD/USD respond within the same trading session.\n* **Market Reaction Timing**: Recognize that forex markets may react with a delay to BTC movements. For example, a significant BTC drop at 10 AM could see AUD/USD decline in the following hour as traders adjust their risk appetite.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Risk-On Sentiment",
          "definition": "A market condition where investors seek higher returns, often leading to increased demand for riskier assets."
        },
        {
          "term": "Risk-Off Sentiment",
          "definition": "A market condition where investors prioritize safety, leading to a preference for stable or low-risk assets."
        }
      ],
      "whyThisMatters": "Understanding risk sentiment allows traders to align their forex strategies with prevailing market conditions influenced by BTC movements.",
      "realLifeExample": "On March 15, BTC surged from $40,000 to $42,000, prompting a risk-on sentiment that saw AUD/USD increase from 0.7700 to 0.7750 within the same trading session.",
      "commonMistake": "Traders often overlook the delayed reaction of forex pairs to BTC price changes, leading to misaligned entry points.",
      "quickNote": "BTC price movements serve as a leading indicator for forex risk sentiment.",
      "mentorText": "When BTC moves, the entire market reacts. If you see BTC climbing, prepare for a shift in forex pairs towards riskier currencies. Don't wait for confirmation; act on the sentiment shift.",
      "mentorAnalogy": "Think of BTC as a weather vane for the financial markets; when it tilts, it signals the direction traders should follow, much like how a pilot adjusts flight plans based on changing weather conditions."
    },
    "taskData": null,
    "visualKey": "crypto-exec-specifics"
  },
  {
    "type": "concept",
    "title": "Conducting Cross-Market Analysis",
    "label": "Forex Track",
    "body": "### Core Scenario: Cross-Market Analysis for Forex Traders\nCross-market analysis enables traders to identify opportunities arising from BTC's influence on forex markets. This card teaches **how to systematically assess correlations between crypto and forex**.\n\n* **Correlation Metrics**: Use statistical tools to measure the correlation between BTC and specific forex pairs. For example, a 0.85 correlation between BTC and EUR/USD indicates a strong relationship, suggesting that BTC movements may predict EUR/USD trends.\n* **News Impact Assessment**: Analyze how major BTC news events affect forex pairs. Following a regulatory announcement impacting BTC, assess how pairs like BTC/JPY and USD/JPY respond within the same timeframe.\n* **Trade Setup Identification**: Develop trade setups based on BTC movements. If BTC breaks a key resistance level, look for corresponding bullish setups in correlated forex pairs, such as GBP/USD, within the next trading session.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Cross-Market Analysis",
          "definition": "The evaluation of different financial markets to identify correlations and trading opportunities."
        },
        {
          "term": "Correlation Coefficient",
          "definition": "A statistical measure that indicates the strength and direction of a relationship between two variables."
        }
      ],
      "whyThisMatters": "Cross-market analysis enhances the ability to spot trading opportunities that may not be evident when analyzing forex markets in isolation.",
      "realLifeExample": "On April 10, BTC experienced a 10% drop due to regulatory news, leading to a corresponding decline in EUR/USD from 1.1900 to 1.1850, showcasing the correlation.",
      "commonMistake": "Traders often fail to account for the lag in forex pairs responding to BTC movements, leading to missed opportunities.",
      "quickNote": "BTC's price action can provide critical insights into forex trading opportunities.",
      "mentorText": "When analyzing markets, always look at BTC first. If it moves, check how your forex pairs are positioned. They often follow BTC's lead, so stay alert.",
      "mentorAnalogy": "Cross-market analysis is like a conductor leading an orchestra; each instrument (market) must harmonize with the others, and BTC often sets the tempo."
    },
    "taskData": null,
    "visualKey": "crypto-exec-specifics"
  },
  {
    "type": "practice",
    "title": "Applying BTC Influence in Forex Simulations",
    "label": "Forex Track",
    "body": "### Core Scenario: Simulating Forex Trades with BTC Influence\nPractical simulations enhance execution skills by applying knowledge of BTC's impact on forex trading. This card engages you in **realistic scenarios to practice trade execution**.\n\n* **Scenario Setup**: Create a simulated trading environment where BTC fluctuates between $30,000 and $32,000. Observe how this range impacts EUR/USD and AUD/USD trades within a 24-hour period.\n* **Execution Timing**: Execute trades based on BTC movements. For instance, if BTC rises to $31,500, enter a long position on AUD/USD at 0.7400, anticipating a risk-on sentiment shift.\n* **Performance Review**: After executing trades, analyze the outcomes. Assess how BTC's price influenced your forex positions and identify areas for improvement in your execution strategy.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Simulated Trading",
          "definition": "Practicing trading strategies in a risk-free environment using virtual capital."
        },
        {
          "term": "Execution Timing",
          "definition": "The precise moment at which a trade is placed in the market."
        }
      ],
      "whyThisMatters": "Simulations provide a risk-free platform to refine execution strategies and understand BTC's influence on forex trades.",
      "realLifeExample": "In a simulation, BTC fluctuated between $31,000 and $32,000, allowing you to practice entering long positions on GBP/USD at 1.3800, capitalizing on the bullish sentiment.",
      "commonMistake": "Traders may rush their execution in simulations without fully considering BTC's influence, leading to poor decision-making.",
      "quickNote": "Simulations allow for practical application of BTC's influence on forex trades without financial risk.",
      "mentorText": "In these simulations, treat BTC like a market signal. If it moves, your forex trades should follow suit. Practice makes perfect, so refine your timing and execution.",
      "mentorAnalogy": "Simulating trades is akin to a flight simulator for pilots; it prepares you for real-world scenarios without the risk of crashing."
    },
    "taskData": {
      "type": "choice_block",
      "question": "In a simulation, BTC rises from $30,000 to $31,500. What should your immediate action be regarding AUD/USD?",
      "options": [
        {
          "id": "0",
          "text": "Enter a long position on AUD/USD at 0.7400, anticipating a risk-on sentiment.",
          "isCorrect": true,
          "feedback": "Correct. A rise in BTC typically indicates a risk-on environment, justifying a long position on AUD/USD."
        },
        {
          "id": "1",
          "text": "Exit all positions on AUD/USD immediately.",
          "isCorrect": false,
          "feedback": "Incorrect. Exiting positions does not align with the risk-on sentiment suggested by BTC's rise."
        },
        {
          "id": "2",
          "text": "Place a short position on AUD/USD at 0.7350.",
          "isCorrect": false,
          "feedback": "Incorrect. A short position contradicts the bullish sentiment indicated by BTC's rise."
        },
        {
          "id": "3",
          "text": "Hold your current positions without action.",
          "isCorrect": false,
          "feedback": "Incorrect. Holding positions without action does not capitalize on the favorable market conditions."
        }
      ]
    },
    "visualKey": "crypto-exec-specifics"
  },
  {
    "type": "summary",
    "title": "Key Forex Execution Strategies Recap",
    "label": "Forex Track",
    "body": "### Core Scenario: Summary of Forex Execution Strategies\nThis summary consolidates the key concepts learned about managing forex exposure in relation to BTC dominance. Review **the strategies that align forex execution with BTC movements**.\n\n* **Risk Sentiment Alignment**: Ensure your trading strategies reflect the prevailing risk sentiment driven by BTC. Adjust positions based on BTC's price action to optimize forex trades.\n* **Cross-Market Insights**: Utilize insights from BTC movements to inform your forex trading decisions. Recognize the correlation between BTC and forex pairs to enhance trade setups.\n* **Execution Discipline**: Maintain strict execution discipline when trading forex influenced by BTC. Avoid emotional trading and adhere to your pre-defined strategies based on BTC's behavior.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Execution Discipline",
          "definition": "The adherence to a trading plan and strategy without deviation due to emotional influences."
        },
        {
          "term": "Market Correlation",
          "definition": "The degree to which two markets move in relation to one another."
        }
      ],
      "whyThisMatters": "Reinforcing these strategies ensures that traders can effectively navigate the forex markets while considering BTC's influence.",
      "realLifeExample": "After reviewing BTC's impact, a trader adjusted their EUR/USD position, entering long at 1.1800 following a BTC rally, resulting in a successful trade as EUR/USD climbed to 1.1850.",
      "commonMistake": "Traders often neglect to adjust their forex strategies based on BTC movements, leading to missed opportunities and losses.",
      "quickNote": "Aligning forex strategies with BTC movements is essential for effective execution.",
      "mentorText": "Always remember, BTC is your compass in forex trading. Adjust your strategies accordingly and maintain discipline to maximize your execution effectiveness.",
      "mentorAnalogy": "Think of your forex strategy as a ship's navigation system; BTC is the lighthouse guiding you through the waters of the market. Stay on course."
    },
    "taskData": null,
    "visualKey": "crypto-exec-specifics"
  }
];
