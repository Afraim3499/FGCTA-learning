import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Gold and BTC Safe-Haven Correlation",
    "label": "Crypto Track",
    "body": "<!-- M8.12-crypto-C1 -->\n### Core Scenario: Safe-Haven Asset Dynamics\nGold and Bitcoin exhibit varying degrees of correlation as safe-haven assets during macroeconomic crises. This card analyzes **the statistical relationship and market behavior of these assets in turbulent times**.\n\n* **Correlation Coefficient Analysis**: Utilize the Pearson correlation coefficient to quantify the relationship between gold (XAU) and Bitcoin (BTC) during periods of economic stress. A coefficient near 1 indicates a strong positive correlation, while near 0 suggests independence.\n* **Crisis Event Benchmarking**: Examine historical crises, such as the 2020 COVID-19 pandemic, where XAU and BTC were analyzed for price movements. For instance, during March 2020, BTC dropped 50% while gold remained relatively stable, indicating differing safe-haven responses.\n* **Volatility Comparison**: Assess the volatility index (VIX) alongside price movements of XAU and BTC. A spike in VIX often correlates with increased gold buying, while BTC may experience speculative selling or buying based on market sentiment shifts.",
    "context": {
      "keyTerms": [
        {
          "term": "Correlation Coefficient",
          "definition": "A statistical measure that describes the degree to which two assets move in relation to each other."
        },
        {
          "term": "Crisis Event Benchmarking",
          "definition": "Analyzing specific historical events to evaluate asset performance under stress."
        }
      ],
      "whyThisMatters": "Understanding the correlation between gold and Bitcoin during crises informs strategic asset allocation and risk management.",
      "realLifeExample": "In March 2020, as the S&P 500 plummeted, gold maintained a price around $1,600 while Bitcoin fell to $4,000, showcasing their differing responses.",
      "commonMistake": "Traders often assume gold and Bitcoin will behave identically during crises, leading to misallocation of resources.",
      "quickNote": "Gold and Bitcoin's correlation varies significantly during macroeconomic crises.",
      "mentorText": "When markets panic, gold often holds its ground while Bitcoin can swing wildly. Analyze past crises to see how these assets reacted differently.",
      "mentorAnalogy": "Think of gold as a traditional fire extinguisher—reliable and steady—while Bitcoin is like a firework; it can be dazzling but unpredictable when the heat is on."
    },
    "taskData": null,
    "visualKey": "gold-metric-dashboard"
  },
  {
    "type": "concept",
    "title": "Crisis Response: Gold vs. Bitcoin",
    "label": "Crypto Track",
    "body": "<!-- M8.12-crypto-C2 -->\n### Core Scenario: Asset Response to Economic Crises\nGold and Bitcoin react differently to macroeconomic crises, influencing their roles as safe havens. This card focuses on **the distinct mechanisms driving their price movements during turmoil**.\n\n* **Intrinsic Value vs. Speculation**: Gold's intrinsic value as a tangible asset provides stability, while Bitcoin's value is largely driven by speculative trading. During crises, gold often sees increased demand as a hedge against inflation, while BTC may experience volatility due to speculative sell-offs.\n* **Liquidity Dynamics**: Analyze liquidity conditions in both markets during crises. Gold typically maintains higher liquidity, allowing for smoother transactions, while Bitcoin may face liquidity issues, leading to larger price swings.\n* **Market Sentiment Shifts**: Observe how investor sentiment shifts during crises. Gold often attracts risk-averse investors, while Bitcoin may draw in those seeking high-risk, high-reward scenarios, leading to divergent price movements.",
    "context": {
      "keyTerms": [
        {
          "term": "Intrinsic Value",
          "definition": "The inherent worth of an asset based on its fundamental characteristics."
        },
        {
          "term": "Liquidity Dynamics",
          "definition": "The ease with which an asset can be bought or sold in the market without affecting its price."
        }
      ],
      "whyThisMatters": "Recognizing the distinct responses of gold and Bitcoin during crises aids in developing effective risk management strategies.",
      "realLifeExample": "During the 2008 financial crisis, gold surged from $800 to $1,200, while Bitcoin, introduced later, was still in its infancy and did not exhibit a price response.",
      "commonMistake": "Traders often overlook the fundamental differences in asset behavior, leading to poor crisis management.",
      "quickNote": "Gold provides stability; Bitcoin offers speculative opportunities during economic turmoil.",
      "mentorText": "In a crisis, gold acts as a fortress, while Bitcoin can be a rollercoaster. Understand their roles to navigate market chaos effectively.",
      "mentorAnalogy": "Consider gold a sturdy bridge that withstands storms, while Bitcoin is a speedboat that can capsize in rough waters."
    },
    "taskData": null,
    "visualKey": "gold-metric-dashboard"
  },
  {
    "type": "concept",
    "title": "Market Sentiment Towards Gold and BTC",
    "label": "Crypto Track",
    "body": "<!-- M8.12-crypto-C3 -->\n### Core Scenario: Sentiment Analysis\nMarket sentiment plays a crucial role in shaping the relationship between gold and Bitcoin during economic uncertainty. This card examines **how shifts in investor sentiment impact asset performance**.\n\n* **Sentiment Indicators**: Utilize tools like the Fear & Greed Index to gauge market sentiment. High fear levels typically correlate with increased gold purchases, while Bitcoin may see mixed reactions based on speculative interest.\n* **News Impact Assessment**: Analyze how news events influence sentiment towards both assets. For example, announcements of inflation spikes often lead to gold rallies, while Bitcoin may react variably depending on the nature of the news—positive for adoption, negative for regulation.\n* **Behavioral Finance Insights**: Explore how psychological factors drive trading behavior. During high volatility, traders may flock to gold for safety, while Bitcoin can attract those seeking quick gains, leading to contrasting price movements.",
    "context": {
      "keyTerms": [
        {
          "term": "Sentiment Indicators",
          "definition": "Metrics used to assess the overall mood of the market towards specific assets."
        },
        {
          "term": "Behavioral Finance",
          "definition": "The study of psychological influences on investors' financial behaviors."
        }
      ],
      "whyThisMatters": "Understanding market sentiment helps traders anticipate price movements and adjust strategies accordingly.",
      "realLifeExample": "In late 2021, rising inflation fears led gold to rally to $1,800, while Bitcoin fluctuated between $40,000 and $60,000 based on speculative trading.",
      "commonMistake": "Traders often misinterpret sentiment signals, leading to premature entry or exit from positions.",
      "quickNote": "Market sentiment significantly influences the price dynamics of gold and Bitcoin.",
      "mentorText": "Watch the mood of the market closely. When fear rises, gold shines; when excitement peaks, Bitcoin can soar or crash.",
      "mentorAnalogy": "Think of market sentiment as the weather; gold is the umbrella that protects you from storms, while Bitcoin is the kite that can fly high or crash down."
    },
    "taskData": null,
    "visualKey": "gold-metric-dashboard"
  },
  {
    "type": "concept",
    "title": "Portfolio Diversification with Gold and BTC",
    "label": "Crypto Track",
    "body": "<!-- M8.12-crypto-C4 -->\n### Core Scenario: Strategic Asset Allocation\nIncorporating gold and Bitcoin into a portfolio can enhance diversification and risk management. This card explores **strategies for effectively balancing these assets**.\n\n* **Risk-Return Profile Analysis**: Evaluate the risk-return profiles of gold and Bitcoin. Gold typically offers lower volatility and steady returns, while Bitcoin presents higher potential returns with increased risk. A balanced portfolio should reflect individual risk tolerance.\n* **Correlation Adjustment**: Adjust portfolio allocations based on the correlation between gold and Bitcoin. When their correlation is low, increasing exposure to both can reduce overall portfolio risk. For example, during stable market conditions, allocate 60% to gold and 40% to Bitcoin.\n* **Rebalancing Protocols**: Implement regular rebalancing strategies to maintain desired asset allocations. For instance, if Bitcoin appreciates significantly, rebalance to maintain the original risk profile, ensuring that gold retains its stabilizing role.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk-Return Profile",
          "definition": "An assessment of the potential risk versus the expected return of an asset."
        },
        {
          "term": "Rebalancing Protocols",
          "definition": "Strategies for adjusting asset allocations to maintain target risk levels."
        }
      ],
      "whyThisMatters": "Effective diversification strategies using gold and Bitcoin can mitigate risks and enhance portfolio performance.",
      "realLifeExample": "A portfolio with 50% gold and 50% Bitcoin during 2021 would have mitigated risk during Bitcoin's volatility while benefiting from gold's stability.",
      "commonMistake": "Traders often neglect to rebalance their portfolios, leading to unintended risk exposure.",
      "quickNote": "Diversifying with gold and Bitcoin can optimize risk management in a portfolio.",
      "mentorText": "Diversify wisely. Gold is your safety net, while Bitcoin can amplify your gains. Balance them according to your risk appetite.",
      "mentorAnalogy": "Think of your portfolio as a well-cooked meal; gold is the base that provides stability, while Bitcoin is the spice that adds flavor but must be used judiciously."
    },
    "taskData": null,
    "visualKey": "gold-metric-dashboard"
  },
  {
    "type": "concept",
    "title": "Analyzing Price Correlation Between Gold and BTC",
    "label": "Crypto Track",
    "body": "<!-- M8.12-crypto-C5 -->\n### Core Scenario: Price Correlation Analysis\nUnderstanding the price correlation between gold and Bitcoin is essential for evaluating their interdependence. This card focuses on **how to measure and interpret the correlation coefficient between XAU and BTC**.\n\n* **Correlation Coefficient Calculation**: Use the Pearson correlation coefficient formula to quantify the relationship. A value close to +1 indicates a strong positive correlation, while -1 indicates a strong negative correlation. For example, if the correlation coefficient between gold and Bitcoin over the last 30 days is 0.85, they are moving closely together.\n* **Time Frame Selection**: Analyze correlations over different time frames (daily, weekly, monthly) to identify trends. A 60-day moving average might reveal a different relationship than a 14-day average, impacting trading strategies.\n* **Market Sentiment Indicators**: Incorporate sentiment analysis to understand external factors influencing both assets. For instance, during periods of high inflation, both gold and Bitcoin may show increased correlation as investors seek safe-haven assets.",
    "context": {
      "keyTerms": [
        {
          "term": "Correlation Coefficient",
          "definition": "A statistical measure that describes the strength and direction of a relationship between two assets."
        }
      ],
      "whyThisMatters": "Accurate correlation analysis can inform risk management and position sizing when trading gold and Bitcoin together.",
      "realLifeExample": "During the market volatility in March 2020, the correlation coefficient between gold and Bitcoin reached 0.78, indicating a significant alignment in price movements as investors reacted to economic uncertainty.",
      "commonMistake": "Traders often overlook the impact of macroeconomic events on correlation, leading to misinterpretation of price movements.",
      "quickNote": "Use correlation coefficients to gauge the relationship between gold and Bitcoin for informed trading decisions.",
      "mentorText": "When analyzing gold and Bitcoin, focus on the correlation coefficient. It tells you how closely these assets move together, which is crucial for your trading strategy.",
      "mentorAnalogy": "Think of correlation like the relationship between two aircraft in formation flying; if one adjusts its altitude, the other often follows to maintain the formation."
    },
    "taskData": null,
    "visualKey": "gold-metric-dashboard"
  },
  {
    "type": "concept",
    "title": "Trading Strategies Involving Gold and Bitcoin",
    "label": "Crypto Track",
    "body": "<!-- M8.12-crypto-C6 -->\n### Core Scenario: Strategic Integration of Gold and Bitcoin\nLeveraging the correlation between gold and Bitcoin can enhance trading strategies. This card outlines **specific strategies that capitalize on their price movements**.\n\n* **Hedging Techniques**: Use gold as a hedge against Bitcoin volatility. For instance, if Bitcoin experiences a sharp decline, a long position in gold can offset potential losses. Establish a hedge ratio based on the correlation coefficient to optimize exposure.\n* **Pairs Trading Strategy**: Implement a pairs trading approach by going long on one asset while shorting the other based on divergence from historical correlation. If gold rises while Bitcoin falls, consider shorting Bitcoin to capitalize on the expected convergence.\n* **Market Event Positioning**: Position trades ahead of macroeconomic events that typically influence both assets. For example, ahead of a Federal Reserve interest rate announcement, consider entering positions based on anticipated shifts in correlation due to market sentiment.",
    "context": {
      "keyTerms": [
        {
          "term": "Pairs Trading",
          "definition": "A market-neutral trading strategy that involves matching a long position with a short position in correlated assets."
        }
      ],
      "whyThisMatters": "Effective strategies can maximize returns while managing risk exposure in volatile markets.",
      "realLifeExample": "In January 2021, a trader went long on gold and short on Bitcoin after observing a divergence in their correlation, resulting in a 15% profit when the correlation normalized.",
      "commonMistake": "Failing to adjust position sizes based on correlation changes can lead to excessive risk exposure.",
      "quickNote": "Integrate gold and Bitcoin trading strategies to enhance returns and manage risk effectively.",
      "mentorText": "Incorporate gold into your Bitcoin trading strategy as a hedge. If Bitcoin dips, gold can stabilize your portfolio.",
      "mentorAnalogy": "Consider your trading strategy like a balanced diet; incorporating both gold and Bitcoin provides essential nutrients to your portfolio, ensuring it remains healthy."
    },
    "taskData": null,
    "visualKey": "gold-metric-dashboard"
  },
  {
    "type": "practice",
    "title": "Practical Scenarios for Gold and BTC Trading",
    "label": "Crypto Track",
    "body": "<!-- M8.12-crypto-C7 -->\n### Core Scenario: Simulated Trading Exercises\nEngaging in practical exercises enhances your ability to navigate trading scenarios involving gold and Bitcoin. This card presents **realistic trading situations for skill application**.\n\n* **Scenario 1**: Gold is trading at $1,800, and Bitcoin is at $40,000. The correlation coefficient has recently increased to 0.85. You anticipate a market correction. What positions should you take to mitigate risk?\n* **Scenario 2**: Following a positive jobs report, gold drops to $1,750 while Bitcoin rises to $42,000. Given the historical correlation, how would you adjust your positions to capitalize on this divergence?\n* **Scenario 3**: During a geopolitical crisis, both gold and Bitcoin surge. Gold reaches $1,850, and Bitcoin hits $45,000. How would you implement a pairs trading strategy in this context?",
    "context": {
      "keyTerms": [
        {
          "term": "Market Correction",
          "definition": "A decline in prices following a period of rising prices, often used to describe a temporary downturn."
        }
      ],
      "whyThisMatters": "Practical exercises reinforce theoretical knowledge, preparing traders for real market conditions.",
      "realLifeExample": "In a simulated trading session, a trader successfully navigated a scenario where gold and Bitcoin diverged, resulting in a 10% portfolio gain through strategic positioning.",
      "commonMistake": "Traders often fail to simulate diverse scenarios, limiting their preparedness for real market fluctuations.",
      "quickNote": "Practice trading scenarios to build confidence and refine strategies involving gold and Bitcoin.",
      "mentorText": "Engage in these scenarios as if they were live trades. The more you practice, the better prepared you'll be for real market conditions.",
      "mentorAnalogy": "Think of these trading scenarios like flight simulators for pilots; they prepare you for various conditions without the risk of actual flight."
    },
    "taskData": {
      "type": "choice_block",
      "question": "In Scenario 1, with gold at $1,800 and Bitcoin at $40,000, what position should you take to mitigate risk given the high correlation?",
      "options": [
        {
          "id": "0",
          "text": "Go long on both gold and Bitcoin.",
          "isCorrect": false,
          "feedback": "Going long on both assets increases risk exposure during a market correction."
        },
        {
          "id": "1",
          "text": "Short Bitcoin and hold gold.",
          "isCorrect": true,
          "feedback": "Shorting Bitcoin while holding gold mitigates risk as gold may act as a safe haven."
        },
        {
          "id": "2",
          "text": "Sell gold and buy Bitcoin.",
          "isCorrect": false,
          "feedback": "This position increases risk as both assets may decline in a correction."
        },
        {
          "id": "3",
          "text": "Hold both positions without changes.",
          "isCorrect": false,
          "feedback": "Holding without adjustments does not account for the anticipated market correction."
        }
      ]
    },
    "visualKey": "gold-metric-dashboard"
  },
  {
    "type": "summary",
    "title": "Summary of Gold and BTC Correlation Insights",
    "label": "Crypto Track",
    "body": "<!-- M8.12-crypto-C8 -->\n### Core Scenario: Key Insights on Correlation\nA thorough understanding of gold and Bitcoin correlation is vital for informed trading decisions. This card summarizes **the critical insights gained from analyzing their relationship**.\n\n* **Dynamic Correlation**: The correlation between gold and Bitcoin fluctuates based on macroeconomic conditions. For instance, during inflationary periods, the correlation tends to increase as both assets are viewed as hedges against currency devaluation.\n* **Impact of Market Sentiment**: Investor sentiment significantly influences the correlation. In times of market panic, both assets may rise as investors seek safety, while in bullish markets, their correlation may weaken as capital flows to riskier assets.\n* **Strategic Implications**: Understanding these dynamics allows traders to adjust their strategies accordingly. For example, during economic downturns, increasing exposure to gold while reducing Bitcoin positions can be a prudent approach.",
    "context": {
      "keyTerms": [
        {
          "term": "Macroeconomic Conditions",
          "definition": "The economic factors that influence the overall economy, such as inflation, interest rates, and employment."
        }
      ],
      "whyThisMatters": "Summarizing insights helps traders adapt strategies based on current market conditions and correlations.",
      "realLifeExample": "In 2022, as inflation fears rose, traders noted a correlation spike between gold and Bitcoin, prompting strategic adjustments in their portfolios.",
      "commonMistake": "Traders may overlook the changing nature of correlation, leading to outdated strategies that do not reflect current market conditions.",
      "quickNote": "Stay informed on the correlation dynamics between gold and Bitcoin to optimize trading strategies.",
      "mentorText": "Reflect on the insights gained from analyzing gold and Bitcoin. Use this knowledge to adapt your trading strategies to current market conditions.",
      "mentorAnalogy": "Think of correlation insights like weather forecasts for farmers; they guide decisions on planting and harvesting based on expected conditions."
    },
    "taskData": null,
    "visualKey": "gold-metric-dashboard"
  }
];
