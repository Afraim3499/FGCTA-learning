import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Sharpe Ratio in Gold Trading",
    "label": "Gold Track",
    "body": "<!-- M9.8-gold-C1 -->\n### Core Scenario: Sharpe Ratio Application in Gold Trading\nThe Sharpe Ratio quantifies risk-adjusted returns, essential for evaluating gold trading strategies. This card outlines **how to apply the Sharpe Ratio specifically to gold assets**.\n\n* **Return Calculation**: Calculate the average return of your gold trades over a specified period. For example, if your trades yield an average return of 2% per month, this will serve as the numerator in your Sharpe Ratio formula.\n* **Risk-Free Rate**: Use the current yield of a 10-year U.S. Treasury bond as the risk-free rate. If the yield is 1.5%, subtract this from your average return to assess excess returns.\n* **Standard Deviation of Returns**: Measure the volatility of your gold trading returns. If your monthly returns fluctuate with a standard deviation of 1.2%, this value will be used in the denominator of the Sharpe Ratio calculation.",
    "context": {
      "keyTerms": [
        {
          "term": "Sharpe Ratio",
          "definition": "A measure of risk-adjusted return calculated by dividing excess return by standard deviation."
        }
      ],
      "whyThisMatters": "Understanding the Sharpe Ratio allows traders to assess the effectiveness of their gold trading strategies against risk, guiding better decision-making.",
      "realLifeExample": "A trader calculates their Sharpe Ratio for gold trades yielding an average return of 2% with a standard deviation of 1.5%, resulting in a Sharpe Ratio of 0.33, indicating moderate risk-adjusted performance.",
      "commonMistake": "Traders often neglect to adjust the risk-free rate based on current market conditions, leading to inaccurate Sharpe Ratio calculations.",
      "quickNote": "The Sharpe Ratio helps evaluate the risk-adjusted performance of gold trading strategies.",
      "mentorText": "When assessing your gold trades, always calculate the Sharpe Ratio. It’s not just about returns; it's about how much risk you're taking to achieve those returns.",
      "mentorAnalogy": "Think of the Sharpe Ratio like a pilot calculating fuel efficiency. Just as a pilot assesses how far they can fly on a given amount of fuel, you must evaluate how much return you achieve per unit of risk."
    },
    "taskData": null,
    "visualKey": "sharpe-optimizer"
  },
  {
    "type": "concept",
    "title": "Calculating Expectancy for Gold Trades",
    "label": "Gold Track",
    "body": "<!-- M9.8-gold-C2 -->\n### Core Scenario: Expectancy Calculation in Gold Trading\nExpectancy measures the average outcome of trades, crucial for long-term profitability in gold trading. This card details **how to calculate expectancy while factoring in COMEX swaps and liquidity slippage**.\n\n* **Win Rate and Average Win**: Determine your win rate and average profit per winning trade. For instance, if you have a win rate of 60% with an average win of $200, this will form part of your expectancy calculation.\n* **Average Loss**: Calculate the average loss per losing trade. If your average loss is $150, this will be used to assess the negative impact on expectancy.\n* **Expectancy Formula**: Use the formula: Expectancy = (Win Rate x Average Win) - (Loss Rate x Average Loss). If your win rate is 60% and loss rate is 40%, your expectancy would be (0.6 x 200) - (0.4 x 150) = $60.",
    "context": {
      "keyTerms": [
        {
          "term": "Expectancy",
          "definition": "The average amount a trader can expect to win or lose per trade over the long run."
        }
      ],
      "whyThisMatters": "Calculating expectancy provides traders with a clear understanding of their potential profitability, guiding strategic adjustments in gold trading.",
      "realLifeExample": "A trader with a 60% win rate and average win of $250, alongside an average loss of $100, calculates an expectancy of $90 per trade, indicating a favorable trading strategy.",
      "commonMistake": "Failing to accurately account for COMEX swaps and liquidity slippage can lead to inflated expectancy calculations.",
      "quickNote": "Expectancy quantifies the average profit or loss per trade, guiding strategic decisions.",
      "mentorText": "Always calculate your expectancy before entering trades. It’s your roadmap to understanding whether your strategy is sustainable over time.",
      "mentorAnalogy": "Calculating expectancy is like a chef determining the average cost of ingredients per dish. Just as a chef needs to know costs to price their menu correctly, you need to know your expectancy to manage your trading effectively."
    },
    "taskData": null,
    "visualKey": "sharpe-optimizer"
  },
  {
    "type": "concept",
    "title": "Impact of Liquidity on Gold Trading Expectancy",
    "label": "Gold Track",
    "body": "<!-- M9.8-gold-C3 -->\n### Core Scenario: Liquidity's Effect on Expectancy\nLiquidity in gold markets can significantly influence trading expectancy, affecting execution and overall profitability. This card explores **how to assess and mitigate liquidity's impact on the Sharpe Ratio**.\n\n* **Market Depth Analysis**: Evaluate the depth of the market by analyzing bid-ask spreads. A wider spread can indicate lower liquidity, which may lead to slippage and affect trade outcomes.\n* **Execution Timing**: Identify optimal trading hours for gold, such as during the London or New York sessions, when liquidity is typically higher. Executing trades during these times can reduce slippage and improve expectancy.\n* **Liquidity Risk Assessment**: Incorporate liquidity risk into your expectancy calculations. If slippage costs average $50 per trade, adjust your average win and loss figures accordingly to reflect realistic outcomes.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidity",
          "definition": "The ease with which an asset can be bought or sold in the market without affecting its price."
        }
      ],
      "whyThisMatters": "Understanding liquidity dynamics allows traders to optimize their strategies and improve risk-adjusted returns in gold trading.",
      "realLifeExample": "A trader executes a gold trade during the New York session, benefiting from tight spreads and minimal slippage, resulting in a more favorable expectancy of $80 instead of $30 during off-peak hours.",
      "commonMistake": "Ignoring liquidity conditions can lead to unexpected losses due to slippage, skewing expectancy calculations.",
      "quickNote": "Liquidity directly influences trading expectancy and should be factored into all calculations.",
      "mentorText": "Always be aware of liquidity conditions before executing trades. It can mean the difference between a profitable trade and a loss due to slippage.",
      "mentorAnalogy": "Think of liquidity like the flow of traffic on a highway. Just as heavy traffic can slow you down and increase travel time, low liquidity can hinder your trading execution and impact your profits."
    },
    "taskData": null,
    "visualKey": "sharpe-optimizer"
  },
  {
    "type": "concept",
    "title": "Understanding COMEX Swaps in Gold Trading",
    "label": "Gold Track",
    "body": "<!-- M9.8-gold-C4 -->\n### Core Scenario: Role of COMEX Swaps in Gold Trading\nCOMEX swaps are critical in determining the pricing and risk factors associated with gold trades. This card details **how to incorporate COMEX swaps into expectancy and Sharpe Ratio calculations**.\n\n* **Swap Rate Analysis**: Identify the current swap rates for gold contracts on COMEX. If the swap rate is 0.5% per annum, this will affect your overall cost of holding positions.\n* **Impact on Profitability**: Calculate how swap rates influence your average win and loss. For example, if holding a position incurs a $10 daily swap cost, factor this into your expectancy calculations to ensure accurate assessments.\n* **Sharpe Ratio Adjustment**: Adjust your Sharpe Ratio calculations to include the impact of swaps. If your calculated return is reduced by swap costs, recalculate your Sharpe Ratio to reflect the true risk-adjusted performance.",
    "context": {
      "keyTerms": [
        {
          "term": "COMEX Swaps",
          "definition": "Contracts that allow traders to exchange cash flows based on the price of gold, impacting holding costs."
        }
      ],
      "whyThisMatters": "Incorporating COMEX swaps into your calculations ensures a more accurate representation of trading costs and potential profitability.",
      "realLifeExample": "A trader holding a gold position incurs a $10 daily swap, which reduces their average win from $200 to $190, necessitating a recalculation of their expectancy to maintain accuracy.",
      "commonMistake": "Traders often overlook swap costs, leading to inflated profit expectations and skewed Sharpe Ratios.",
      "quickNote": "COMEX swaps significantly affect trading costs and should be integrated into all performance calculations.",
      "mentorText": "Always account for swap costs when trading gold. They can erode your profits and mislead your performance metrics if ignored.",
      "mentorAnalogy": "Consider COMEX swaps like maintenance fees on a rental property. Just as those fees reduce your net income, swap costs diminish your trading profits."
    },
    "taskData": null,
    "visualKey": "sharpe-optimizer"
  },
  {
    "type": "concept",
    "title": "Risk Management Strategies for Gold Trading",
    "label": "Gold Track",
    "body": "<!-- M9.8-gold-C5 -->\n### Core Strategy: Risk Management for Gold Trading\nEffective risk management is essential for optimizing the Sharpe Ratio and expectancy in gold trading. This card outlines tailored strategies to manage risk effectively.\n\n* **Position Sizing**: Calculate position sizes based on the volatility of gold. Use the formula: Position Size = (Account Risk % * Account Balance) / (Stop Loss in $). For example, with a $10,000 account and a 2% risk, if your stop loss is $50, your position size should be 4 contracts.\n* **Diversification**: Incorporate different gold instruments (e.g., futures, ETFs) to spread risk. This can stabilize returns and enhance the Sharpe Ratio by reducing the overall portfolio volatility.\n* **Dynamic Stop Losses**: Adjust stop losses based on market conditions. For instance, if gold is trending upwards, consider trailing your stop loss to lock in profits while minimizing risk exposure.",
    "visualKey": "sharpe-optimizer",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Common Pitfalls in Gold Sharpe Optimization",
    "label": "Gold Track",
    "body": "<!-- M9.8-gold-C6 -->\n### Core Issue: Common Pitfalls in Gold Sharpe Optimization\nOptimizing the Sharpe Ratio for gold trading requires awareness of common pitfalls that can distort results. This card highlights critical errors to avoid.\n\n* **Ignoring Swaps**: Failing to account for swap rates can significantly affect profitability. For example, holding a long position in gold futures overnight might incur a swap cost of $10, which should be deducted from your returns when calculating the Sharpe Ratio.\n* **Overestimating Liquidity**: Assuming high liquidity during all market hours can lead to slippage. For instance, entering a large position during the Asian session may result in a 5-pip slippage, impacting your expected returns.\n* **Neglecting Market Conditions**: Not adjusting your Sharpe calculations based on changing market conditions can lead to misleading metrics. For example, a high Sharpe Ratio during a bullish trend may not hold in a volatile or bearish market.",
    "visualKey": "sharpe-optimizer",
    "taskData": null
  },
  {
    "type": "practice",
    "title": "Practical Exercises for Gold Sharpe Optimization",
    "label": "Gold Track",
    "body": "<!-- M9.8-gold-C7 -->\n### Core Activity: Practical Exercises for Gold Sharpe Optimization\nEngaging in practical exercises enhances understanding of Sharpe Ratio and expectancy optimization in gold trading. This card provides scenarios for application.\n\n* **Scenario Analysis**: Given a historical dataset of gold trades with a total return of $1,200 and a standard deviation of returns of $300, calculate the Sharpe Ratio using a risk-free rate of 2%. What does this imply about your trading strategy?\n* **Expectancy Calculation**: Analyze a series of trades where 60% are winners with an average win of $150 and 40% are losers with an average loss of $100. Calculate the expectancy and discuss how it can be improved.\n* **Risk-Reward Assessment**: Create a risk-reward profile for a new gold trading strategy. If you plan to risk $100 to potentially gain $300, calculate the expected Sharpe Ratio and evaluate its viability.",
    "visualKey": "sharpe-optimizer",
    "taskData": {
      "type": "choice_block",
      "question": "Given a historical dataset of gold trades with a total return of $1,200, a standard deviation of returns of $300, and a risk-free rate of 2%, what is the calculated Sharpe Ratio, and what does this imply about your trading strategy?",
      "options": [
        {
          "id": "0",
          "text": "4.0, indicating a highly favorable risk-adjusted return.",
          "isCorrect": true,
          "feedback": "A Sharpe Ratio of 4.0 suggests that the trading strategy is providing a high return relative to the risk taken, indicating a very favorable risk-adjusted performance."
        },
        {
          "id": "1",
          "text": "2.0, suggesting an acceptable risk-adjusted return.",
          "isCorrect": false,
          "feedback": "A Sharpe Ratio of 2.0 indicates a good risk-adjusted return, but it is not as favorable as a ratio of 4.0, which implies a stronger performance."
        },
        {
          "id": "2",
          "text": "1.0, implying that the trading strategy is underperforming.",
          "isCorrect": false,
          "feedback": "A Sharpe Ratio of 1.0 suggests that the returns are only marginally better than the risk-free rate, indicating that the strategy may not be optimal."
        },
        {
          "id": "3",
          "text": "0.5, indicating a poor risk-adjusted return.",
          "isCorrect": false,
          "feedback": "A Sharpe Ratio of 0.5 suggests that the returns are not sufficient to justify the risk taken, indicating a poor performance of the trading strategy."
        }
      ]
    }
  },
  {
    "type": "summary",
    "title": "Summary of Gold Sharpe and Expectancy Optimization",
    "label": "Gold Track",
    "body": "<!-- M9.8-gold-C8 -->\n### Core Recap: Summary of Gold Sharpe and Expectancy Optimization\nThis card summarizes the key concepts of optimizing the Sharpe Ratio and expectancy in gold trading, emphasizing the effects of swaps and liquidity.\n\n* **Sharpe Ratio Importance**: The Sharpe Ratio serves as a measure of risk-adjusted return, crucial for evaluating gold trading strategies. A higher ratio indicates better performance relative to risk.\n* **Impact of Swaps**: Swaps can significantly alter the profitability of trades. Always incorporate swap costs into your calculations to ensure accurate Sharpe Ratio assessments.\n* **Liquidity Considerations**: Understanding the liquidity of gold instruments is vital. High liquidity reduces slippage and enhances execution quality, directly impacting expectancy and overall trading performance.",
    "visualKey": "sharpe-optimizer",
    "taskData": null
  }
];
