import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "BTC Dominance and Altcoin Correlation",
    "label": "Crypto Track",
    "body": "### Correlation Risk: BTC Dominance and Altcoin Exposure\nUnderstanding BTC dominance is crucial when trading multiple altcoin perpetual contracts, as high correlation can lead to amplified risks. This card discusses **the potential pitfalls of correlated assets within a portfolio**.\n\n* **Correlation Coefficient Analysis**: Measure the correlation coefficient between BTC and selected altcoins. A coefficient above 0.7 indicates high correlation, suggesting that altcoin movements closely follow BTC price changes.\n* **Dominance Impact**: When BTC dominance rises, altcoins often experience downward pressure. For instance, if BTC dominance increases from 45% to 50%, altcoins like ETH and LTC may drop 10-15% concurrently due to their correlation.\n* **Diversification Limitations**: Holding multiple altcoins with high correlation does not effectively diversify risk. For example, if a trader holds BTC, ETH, and LTC, a 5% drop in BTC could lead to a 5-10% drop across all positions due to their interdependence.",
    "context": {
      "keyTerms": [
        {
          "term": "BTC Dominance",
          "definition": "The percentage of the total cryptocurrency market capitalization that is attributed to Bitcoin."
        },
        {
          "term": "Correlation Coefficient",
          "definition": "A statistical measure that describes the degree to which two assets move in relation to each other."
        }
      ],
      "whyThisMatters": "Understanding BTC dominance and its correlation with altcoins is essential for managing aggregate portfolio risk effectively.",
      "realLifeExample": "During a market downturn, if BTC drops 8% and ETH shows a 0.85 correlation, ETH may also decline by approximately 6.8%, compounding risk exposure.",
      "commonMistake": "Traders often underestimate the impact of BTC dominance on altcoin performance, leading to overexposure in correlated assets.",
      "quickNote": "High BTC dominance can lead to significant correlated losses in altcoin portfolios.",
      "mentorText": "When assessing your altcoin positions, always consider how BTC's movements will affect them. If BTC is volatile, your altcoins will likely follow suit, amplifying your risk.",
      "mentorAnalogy": "Think of your portfolio like a fleet of ships in a storm. If the lead ship (BTC) encounters rough waters, the others (altcoins) will be pulled along, regardless of their individual strength."
    },
    "taskData": null,
    "visualKey": "correlation-portfolio-risk"
  },
  {
    "type": "concept",
    "title": "Evaluating Altcoin Exposure Relative to BTC",
    "label": "Crypto Track",
    "body": "### Exposure Evaluation: Altcoins vs. BTC\nEvaluating the exposure of altcoins relative to BTC dominance is critical for effective portfolio risk management. This card outlines **how to assess altcoin risk in relation to BTC**.\n\n* **Market Cap Weighting**: Analyze the market cap of altcoins compared to BTC. For example, if BTC has a market cap of $800 billion and an altcoin like ADA has $30 billion, ADA represents only 3.75% of the total market, indicating lower relative exposure.\n* **Volatility Assessment**: Use historical volatility metrics to evaluate how much an altcoin fluctuates compared to BTC. If ADA has a volatility of 6% while BTC's is 4%, ADA carries a higher risk profile.\n* **Correlation Matrix Construction**: Create a correlation matrix for your altcoin holdings against BTC. This matrix will help visualize and quantify the relationships, guiding position sizing and risk allocation.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Cap Weighting",
          "definition": "The proportion of a cryptocurrency's market capitalization relative to the total market."
        },
        {
          "term": "Volatility",
          "definition": "A statistical measure of the dispersion of returns for a given asset."
        }
      ],
      "whyThisMatters": "Evaluating altcoin exposure relative to BTC helps in making informed decisions to mitigate overall portfolio risk.",
      "realLifeExample": "If a trader holds $10,000 in ADA and BTC drops 5%, the trader must assess how much ADA is likely to drop based on its historical correlation of 0.6 with BTC.",
      "commonMistake": "Traders frequently neglect to evaluate the relative exposure of altcoins, leading to unbalanced risk profiles.",
      "quickNote": "Assessing altcoin exposure relative to BTC is essential for maintaining a balanced portfolio risk.",
      "mentorText": "Always keep an eye on how much of your portfolio is tied to BTC. If BTC moves, your altcoins will likely follow, so adjust your positions accordingly.",
      "mentorAnalogy": "Consider your portfolio as a team of athletes. If the star player (BTC) is injured, the entire team's performance (altcoins) will likely suffer, regardless of individual capabilities."
    },
    "taskData": null,
    "visualKey": "correlation-portfolio-risk"
  },
  {
    "type": "concept",
    "title": "Mitigating Risks in Altcoin Holdings",
    "label": "Crypto Track",
    "body": "### Risk Mitigation: Strategies for Altcoin Holdings\nMitigating risks associated with holding multiple altcoins requires strategic planning and analysis. This card focuses on **effective strategies to manage risk in altcoin portfolios**.\n\n* **Position Sizing Techniques**: Implement position sizing based on correlation metrics. For example, if holding both ETH and LTC with a correlation of 0.8, reduce the position size to avoid overexposure.\n* **Hedging Strategies**: Use derivatives like futures or options to hedge against potential losses in altcoin positions. If holding $5,000 in LINK, consider shorting LINK futures to offset risk during market downturns.\n* **Regular Rebalancing**: Periodically rebalance your portfolio to maintain desired risk levels. If BTC dominance rises, consider reallocating funds from high-correlation altcoins to lower-correlation assets to reduce overall risk exposure.",
    "context": {
      "keyTerms": [
        {
          "term": "Position Sizing",
          "definition": "The process of determining the amount of capital to allocate to a specific trade or investment."
        },
        {
          "term": "Hedging",
          "definition": "A risk management strategy used to offset potential losses in an investment."
        }
      ],
      "whyThisMatters": "Implementing risk mitigation strategies ensures that altcoin holdings do not disproportionately affect overall portfolio performance.",
      "realLifeExample": "If a trader holds $2,000 in both ETH and LTC, and they are highly correlated, they may decide to reduce their position sizes to $1,500 each to minimize risk exposure.",
      "commonMistake": "Traders often fail to hedge their altcoin positions, exposing themselves to greater risk during market volatility.",
      "quickNote": "Effective risk mitigation strategies are essential for managing altcoin holdings in a volatile market.",
      "mentorText": "When managing your altcoin portfolio, always think about how to protect your capital. Use hedges and adjust position sizes based on correlation to safeguard against losses.",
      "mentorAnalogy": "Managing your altcoin portfolio is like a tightrope walker adjusting their balance. Each step must be calculated to avoid falling, especially when the wind (market volatility) picks up."
    },
    "taskData": null,
    "visualKey": "correlation-portfolio-risk"
  },
  {
    "type": "concept",
    "title": "Correlation Dynamics in Crypto Market Cycles",
    "label": "Crypto Track",
    "body": "### Market Cycle Dynamics: Correlation in Crypto\nCorrelation dynamics shift significantly during different crypto market cycles, impacting risk exposure for altcoin traders. This card explores **how to analyze these changes and their implications**.\n\n* **Bull vs. Bear Correlation**: In bull markets, altcoins often show increased correlation with BTC, while in bear markets, they may decouple. For instance, during a bull run, ETH may rise 20% alongside a 15% BTC increase, but in a bear market, ETH could drop 10% while BTC drops 5%.\n* **Market Sentiment Analysis**: Monitor sentiment indicators to gauge potential shifts in correlation. If fear levels rise, altcoins may begin to decouple from BTC, indicating a need to reassess risk exposure.\n* **Historical Data Review**: Analyze historical correlation data during various market cycles to identify patterns. For example, during the last bear market, altcoins like XRP showed a correlation drop from 0.75 to 0.4 with BTC, indicating reduced risk during downturns.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Cycle",
          "definition": "The recurring pattern of price movements in financial markets, typically categorized as bull or bear phases."
        },
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of investors toward a particular market or asset."
        }
      ],
      "whyThisMatters": "Understanding correlation dynamics during market cycles is crucial for managing risk exposure effectively in altcoin trading.",
      "realLifeExample": "During a recent bull market, BTC surged 30%, and altcoins like DOT and LINK increased by 25% and 20%, respectively, showcasing high correlation. However, in the subsequent bear market, DOT dropped 15% while BTC fell only 10%.",
      "commonMistake": "Traders often overlook the changing dynamics of correlation during different market cycles, leading to mismanaged risk exposure.",
      "quickNote": "Correlation dynamics vary significantly across market cycles, affecting altcoin risk exposure.",
      "mentorText": "Pay attention to how market cycles influence your altcoin positions. If BTC is bullish, your altcoins will likely follow, but in a downturn, be ready for them to behave differently.",
      "mentorAnalogy": "Think of market cycles like seasons. In spring (bull market), everything thrives together, but in winter (bear market), some plants (altcoins) may wither while others (BTC) remain resilient."
    },
    "taskData": null,
    "visualKey": "correlation-portfolio-risk"
  },
  {
    "type": "concept",
    "title": "Developing Trading Strategies for Correlated Altcoins",
    "label": "Crypto Track",
    "body": "### Correlation Analysis: Altcoin Strategies\nUnderstanding the correlation between Bitcoin (BTC) and altcoins is essential for effective risk management. This card details **how to develop trading strategies that account for these correlations**.\n\n* **Correlation Coefficient Calculation**: Use the Pearson correlation coefficient to quantify the relationship between BTC and altcoins. A value close to 1 indicates high correlation, while values near 0 suggest independence.\n* **Diversification Strategy**: Select altcoins that exhibit low or negative correlation with BTC to reduce overall portfolio risk. For example, if BTC and ETH have a correlation of 0.85, consider adding assets like LINK or DOT, which may have lower correlations.\n* **Dynamic Position Sizing**: Adjust position sizes based on the correlation metrics. If BTC rises 10% and an altcoin rises 8%, the risk exposure to that altcoin increases, necessitating a reduction in position size to maintain risk levels.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Correlation Coefficient",
          "definition": "A statistical measure that describes the degree to which two assets move in relation to each other."
        },
        {
          "term": "Diversification",
          "definition": "The practice of spreading investments across various assets to reduce overall risk."
        }
      ],
      "whyThisMatters": "Effective strategies that consider correlation can significantly mitigate risk exposure in volatile markets like crypto.",
      "realLifeExample": "During a market surge, BTC increased by 15%, while ETH, with a correlation of 0.9, rose by 12%. A trader could have reduced exposure to ETH to manage risk more effectively.",
      "commonMistake": "Traders often overlook correlation when selecting altcoins, leading to increased risk during market downturns.",
      "quickNote": "Utilize correlation metrics to inform altcoin selection and position sizing.",
      "mentorText": "When developing your altcoin strategies, always analyze how closely they move with BTC. If they move together, you're not diversifying your risk.",
      "mentorAnalogy": "Think of it like a team of athletes; if all players are from the same sport, they may perform similarly under pressure. Diversifying across different sports ensures varied performance under different conditions."
    },
    "taskData": null,
    "visualKey": "correlation-portfolio-risk"
  },
  {
    "type": "concept",
    "title": "Adjusting Portfolios Based on BTC Correlation",
    "label": "Crypto Track",
    "body": "### Portfolio Adjustment: BTC Correlation\nManaging a crypto portfolio requires continuous adjustment based on BTC's correlation with other assets. This card outlines **how to effectively adjust your portfolio based on BTC dominance**.\n\n* **BTC Dominance Monitoring**: Regularly track BTC dominance, which indicates BTC's market capitalization relative to the total crypto market. A dominance increase may signal a shift in market sentiment, prompting portfolio adjustments.\n* **Risk Exposure Assessment**: Calculate the aggregate exposure to correlated assets. If BTC dominance rises and your portfolio is heavily weighted in high-correlation altcoins, consider reallocating to lower-correlation assets to mitigate risk.\n* **Rebalancing Strategy**: Implement a rebalancing strategy when BTC dominance exceeds a certain threshold (e.g., 60%). This may involve reducing positions in high-correlation altcoins like LTC and increasing exposure to stablecoins or less correlated assets like XMR.\n",
    "context": {
      "keyTerms": [
        {
          "term": "BTC Dominance",
          "definition": "The percentage of Bitcoin's market capitalization relative to the total cryptocurrency market."
        },
        {
          "term": "Rebalancing",
          "definition": "The process of realigning the proportions of assets in a portfolio."
        }
      ],
      "whyThisMatters": "Adjusting for BTC correlation helps maintain a balanced risk profile, especially during market volatility.",
      "realLifeExample": "If BTC dominance rises from 55% to 65%, a trader might reduce their holdings in high-correlation altcoins like XRP and shift to stablecoins to protect against potential downturns.",
      "commonMistake": "Failing to monitor BTC dominance can lead to overexposure to correlated altcoins during market corrections.",
      "quickNote": "Adjust portfolio allocations based on BTC dominance to manage risk effectively.",
      "mentorText": "Keep a close eye on BTC's market share. If it starts to dominate, it's a signal to reassess your altcoin positions and possibly shift to safer assets.",
      "mentorAnalogy": "Imagine a ship navigating through changing tides; if the tide (BTC dominance) shifts, you must adjust your sails (portfolio) to maintain course."
    },
    "taskData": null,
    "visualKey": "correlation-portfolio-risk"
  },
  {
    "type": "concept",
    "title": "Practical Exercises on Crypto Correlation",
    "label": "Crypto Track",
    "body": "### Analyzing Correlation: Practical Application\nEngaging in practical exercises helps solidify understanding of asset correlation in crypto. This card provides **exercises to analyze BTC and altcoin correlations**.\n\n* **Correlation Matrix Creation**: Construct a correlation matrix for selected altcoins against BTC over a specified period (e.g., 30 days). Identify which altcoins have the highest and lowest correlations with BTC.\n* **Scenario Analysis**: Create hypothetical scenarios where BTC experiences a 10% drop. Analyze how different altcoins (e.g., ETH, ADA, and DOT) react based on their historical correlation data. Determine which altcoins would pose the highest risk.\n* **Risk Management Simulation**: Simulate a portfolio adjustment based on correlation findings. If your analysis shows that ADA has a correlation of 0.75 with BTC, consider adjusting its weight in your portfolio to reduce overall risk exposure.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Correlation Matrix",
          "definition": "A table showing the correlation coefficients between multiple assets."
        },
        {
          "term": "Scenario Analysis",
          "definition": "A process of evaluating potential future events by considering alternative possible outcomes."
        }
      ],
      "whyThisMatters": "Practical exercises enhance the ability to assess and manage portfolio risk based on correlation.",
      "realLifeExample": "After creating a correlation matrix, a trader discovers that DOT has a correlation of only 0.3 with BTC, prompting a strategic increase in DOT holdings during a BTC downturn.",
      "commonMistake": "Relying solely on historical data without considering current market conditions can lead to inaccurate risk assessments.",
      "quickNote": "Conduct practical exercises to deepen your understanding of asset correlations.",
      "mentorText": "Dive into the numbers. By analyzing correlations, you can make informed decisions about which altcoins to hold or reduce.",
      "mentorAnalogy": "Think of it like a weather forecast; just as you prepare for varying conditions, you must adjust your portfolio based on the correlation forecasts."
    },
    "taskData": null,
    "visualKey": "correlation-portfolio-risk"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Correlation Risks",
    "label": "Crypto Track",
    "body": "### Key Concepts: Managing Correlation Risks\nUnderstanding correlation risks in crypto trading is vital for maintaining a balanced portfolio. This card summarizes **the key concepts of managing correlation risks**.\n\n* **Correlation Awareness**: Recognize that high correlation between BTC and altcoins can lead to duplicated risk exposure, especially during market volatility. Monitor correlation coefficients regularly to inform trading strategies.\n* **Portfolio Diversification**: Implement diversification strategies by including assets with low or negative correlation to BTC. This reduces the overall risk profile of the portfolio.\n* **Continuous Adjustment**: Regularly assess and adjust your portfolio based on BTC dominance and correlation metrics. This proactive approach helps mitigate risks associated with correlated assets.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Correlation Awareness",
          "definition": "The understanding of how asset correlations affect overall portfolio risk."
        },
        {
          "term": "Proactive Adjustment",
          "definition": "The ongoing process of modifying a portfolio based on market changes and correlation data."
        }
      ],
      "whyThisMatters": "Summarizing these concepts reinforces their importance in effective risk management within the volatile crypto market.",
      "realLifeExample": "A trader who regularly assesses correlation can avoid significant losses during a BTC downturn by reallocating to less correlated assets.",
      "commonMistake": "Neglecting to adjust portfolios based on correlation can lead to unexpected drawdowns during market shifts.",
      "quickNote": "Stay aware of correlation risks to maintain a resilient crypto portfolio.",
      "mentorText": "Always keep correlation in mind. It’s not just about individual assets; it’s about how they interact as a whole in your portfolio.",
      "mentorAnalogy": "Like a conductor leading an orchestra, you must ensure all instruments (assets) harmonize to create a balanced performance, avoiding discord during market volatility."
    },
    "taskData": null,
    "visualKey": "correlation-portfolio-risk"
  }
];
