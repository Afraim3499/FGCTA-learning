import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Adapting Kelly Sizing for Forex Leverage",
    "label": "Forex Track",
    "body": "### Adapting Kelly Sizing: Forex Leverage Considerations\nThe Kelly Criterion must be adjusted for Forex trading due to the high leverage ratios available, which can significantly amplify both potential gains and losses. This card explains **how to adapt the Kelly Criterion for optimal position sizing in leveraged Forex environments**.\n\n* **Leverage Ratio Impact**: With leverage up to 500:1, the Kelly formula must incorporate the effective leverage ratio to prevent overexposure. For example, a trader using 100:1 leverage should adjust their Kelly percentage to account for this multiplier.\n* **Capital Preservation**: High leverage increases the risk of margin calls. A conservative approach may involve using a Fractional Kelly strategy (e.g., 1/4 Kelly) to mitigate risks associated with extreme volatility.\n* **Position Size Calculation**: The adjusted position size can be calculated as: \\( P = \\frac{K}{L} \\times \\text{Account Equity} \\), where \\( K \\) is the Kelly percentage and \\( L \\) is the leverage ratio.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Leverage Ratio",
          "definition": "The ratio of borrowed funds to equity, indicating the degree of financial leverage."
        },
        {
          "term": "Fractional Kelly",
          "definition": "A conservative application of the Kelly Criterion that limits risk exposure."
        }
      ],
      "whyThisMatters": "Understanding leverage adjustments is critical for maintaining risk management in Forex trading, where capital can be rapidly eroded by high volatility.",
      "realLifeExample": "A trader with a $10,000 account using 100:1 leverage calculates a Kelly percentage of 20%. This results in a position size of $2,000 per trade, adjusted for leverage to $20,000.",
      "commonMistake": "Traders often neglect to adjust their Kelly sizing based on the leverage used, leading to excessive risk exposure.",
      "quickNote": "Adjust Kelly sizing based on leverage to ensure effective risk management.",
      "mentorText": "When trading Forex, leverage can work for or against you. Always adjust your Kelly sizing to reflect the leverage you're using; it’s not just about the potential gains.",
      "mentorAnalogy": "Think of leverage in Forex like a high-speed race car. It can accelerate your profits, but without proper control, it can lead to a crash."
    },
    "taskData": null,
    "visualKey": "kelly-criterion-basics"
  },
  {
    "type": "concept",
    "title": "Understanding Institutional Currency Margins",
    "label": "Forex Track",
    "body": "### Institutional Currency Margins: Position Size Determination\nInstitutional traders utilize specific margin requirements that directly influence position sizing under the Kelly Criterion. This card details **how institutional currency margins affect optimal position sizes in Forex trading**.\n\n* **Margin Requirements**: Institutional accounts often have lower margin requirements, allowing for larger position sizes. For instance, a margin requirement of 1% allows a trader to control $100,000 with just $1,000.\n* **Risk Assessment**: The margin impacts the risk profile of each trade. A trader must calculate the potential drawdown based on the margin used to ensure it aligns with their risk tolerance.\n* **Position Size Formula**: The formula for calculating position size is: \\( P = \\frac{E}{M} \\), where \\( E \\) is account equity and \\( M \\) is the margin requirement. This helps in determining how much capital is at risk per trade.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Margin Requirement",
          "definition": "The minimum amount of equity required to open and maintain a leveraged position."
        },
        {
          "term": "Position Size",
          "definition": "The amount of capital allocated to a specific trade."
        }
      ],
      "whyThisMatters": "Institutional margins can significantly alter the risk-reward profile of trades, making it essential for traders to understand their implications.",
      "realLifeExample": "A trader with a $50,000 account and a 1% margin requirement can control a position size of $5,000,000 in the Forex market, necessitating careful risk management.",
      "commonMistake": "Failing to account for margin requirements can lead to over-leveraging and unexpected losses.",
      "quickNote": "Institutional margins dictate position sizes; always calculate accordingly.",
      "mentorText": "When trading with institutional margins, remember that your position size can be much larger than your account equity. Always calculate your risk based on the margin you’re using.",
      "mentorAnalogy": "Consider margin like the foundation of a building; it supports everything above it. If the foundation is weak, the structure can collapse."
    },
    "taskData": null,
    "visualKey": "kelly-criterion-basics"
  },
  {
    "type": "concept",
    "title": "Impact of Leverage on Position Sizing",
    "label": "Forex Track",
    "body": "### Leverage Impact: Adjusting Position Sizing Calculations\nLeverage plays a pivotal role in determining position sizes in Forex trading, necessitating adjustments to the Kelly Criterion. This card explores **how varying levels of leverage affect position sizing calculations**.\n\n* **Leverage Variability**: Different brokers offer varying leverage ratios, which can drastically change the risk profile of trades. For example, a trader using 50:1 leverage will have different position size calculations compared to one using 200:1.\n* **Risk of Overexposure**: Higher leverage increases the potential for overexposure, which can lead to significant drawdowns. A prudent approach is to limit position sizes to a fraction of the calculated Kelly size based on leverage.\n* **Revised Position Size Calculation**: Adjusted position size can be calculated as: \\( P = K \\times \\text{Account Equity} \\times \\frac{1}{L} \\), where \\( L \\) is the leverage ratio. This ensures that position sizes remain manageable under high leverage conditions.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Overexposure",
          "definition": "A situation where the risk taken on a trade exceeds acceptable limits."
        },
        {
          "term": "Position Size Calculation",
          "definition": "The method used to determine the amount of capital allocated to a trade."
        }
      ],
      "whyThisMatters": "Understanding how leverage affects position sizing is essential for maintaining a balanced risk-reward ratio in Forex trading.",
      "realLifeExample": "A trader with a $20,000 account using 200:1 leverage calculates a Kelly percentage of 15%, leading to a position size of $30,000, which exceeds their equity and requires adjustment.",
      "commonMistake": "Many traders miscalculate their position sizes by not adjusting for leverage, leading to excessive risk and potential account depletion.",
      "quickNote": "Always adjust position sizes based on the leverage used to maintain risk control.",
      "mentorText": "Leverage can amplify your results, but it can also amplify your losses. Always adjust your position size to reflect the leverage you’re using; it’s about managing risk.",
      "mentorAnalogy": "Think of leverage like a powerful engine in a sports car; it can propel you forward quickly, but without careful steering, you can easily lose control."
    },
    "taskData": null,
    "visualKey": "kelly-criterion-basics"
  },
  {
    "type": "concept",
    "title": "Calculating Risk-Adjusted Returns in Forex",
    "label": "Forex Track",
    "body": "### Risk-Adjusted Returns: Calculating for Forex Trading\nCalculating risk-adjusted returns is essential for applying the Kelly Criterion effectively in Forex trading. This card outlines **how to calculate risk-adjusted returns and their influence on the Kelly Criterion**.\n\n* **Return on Investment (ROI)**: The basic formula for ROI in Forex is: \\( ROI = \\frac{(Ending Value - Starting Value)}{Starting Value} \\times 100 \\). This provides a baseline for evaluating performance against risk.\n* **Sharpe Ratio Application**: The Sharpe Ratio, defined as: \\( S = \\frac{E[R] - R_f}{\\sigma} \\), helps assess the risk-adjusted return by comparing excess return to the standard deviation of returns. A higher Sharpe Ratio indicates better risk-adjusted performance.\n* **Incorporating into Kelly**: The Kelly Criterion can be adjusted based on the calculated risk-adjusted return, allowing for a more tailored position sizing approach that reflects actual performance metrics.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Return on Investment (ROI)",
          "definition": "A measure of the profitability of an investment relative to its cost."
        },
        {
          "term": "Sharpe Ratio",
          "definition": "A measure of risk-adjusted return, comparing excess return to the volatility of the investment."
        }
      ],
      "whyThisMatters": "Calculating risk-adjusted returns allows traders to make informed decisions about position sizing and risk management in Forex trading.",
      "realLifeExample": "A Forex trader calculates an ROI of 25% over a year with a standard deviation of 5%. This results in a Sharpe Ratio of 5, indicating strong risk-adjusted returns, which can be factored into their Kelly sizing.",
      "commonMistake": "Traders often overlook the importance of risk-adjusted returns, leading to suboptimal position sizing and risk management.",
      "quickNote": "Risk-adjusted returns are critical for refining Kelly Criterion applications.",
      "mentorText": "When evaluating your trades, always consider the risk-adjusted returns. They tell you not just how much you made, but how much risk you took to get there.",
      "mentorAnalogy": "Calculating risk-adjusted returns is like a pilot assessing fuel efficiency against distance traveled; it’s not just about speed but how efficiently you manage resources."
    },
    "taskData": null,
    "visualKey": "kelly-criterion-basics"
  },
  {
    "type": "concept",
    "title": "Preventing Margin Calls with Kelly Sizing",
    "label": "Forex Track",
    "body": "### Margin Management: Kelly Criterion Application\nEffective position sizing is critical in high-leverage Forex trading to avoid margin calls. This card explores **how to apply the Kelly Criterion to manage risk and maintain account integrity**.\n\n* **Leverage Impact Assessment**: Calculate the maximum position size using the Kelly formula, adjusting for leverage levels. For instance, if your account balance is $10,000 and you determine a Kelly percentage of 20%, your maximum risk per trade should not exceed $2,000, ensuring you remain below margin call thresholds.\n* **Risk of Ruin Calculation**: Assess the probability of a margin call by evaluating your win-loss ratio and average payoff. A win rate of 60% with an average payoff of 1.5R leads to a Kelly percentage of 15%, allowing for a safer position size that mitigates the risk of a margin call.\n* **Dynamic Position Adjustment**: Continuously monitor market conditions and adjust position sizes accordingly. If EURUSD experiences high volatility and your calculated Kelly size suggests a risk of $1,500, consider reducing your position to $1,000 to maintain a safety buffer against sudden market movements.",
    "context": {
      "keyTerms": [
        {
          "term": "Margin Call",
          "definition": "A demand by a broker to deposit additional funds to maintain a trading position."
        },
        {
          "term": "Leverage",
          "definition": "The use of borrowed funds to increase the potential return of an investment."
        }
      ],
      "whyThisMatters": "Understanding how to apply the Kelly Criterion effectively prevents margin calls, ensuring sustained trading operations in volatile Forex markets.",
      "realLifeExample": "During a volatile session, if GBPUSD spikes 100 pips against your position, applying a Kelly size of $1,500 instead of $2,000 can prevent a margin call due to excessive drawdown.",
      "commonMistake": "Traders often miscalculate their risk per trade, leading to over-leveraging and increased chances of margin calls.",
      "quickNote": "Utilize the Kelly Criterion to determine safe position sizes that prevent margin calls.",
      "mentorText": "When you apply the Kelly Criterion, think of it as your safety net. If your calculated risk is too high, scale back. It’s better to trade smaller and stay in the game than to risk everything on one position.",
      "mentorAnalogy": "Consider a pilot adjusting fuel loads based on weather conditions. Just as a pilot ensures enough fuel for safe landing, you must adjust your position sizes to safeguard against market turbulence."
    },
    "taskData": null,
    "visualKey": "kelly-criterion-basics"
  },
  {
    "type": "concept",
    "title": "Analyzing Currency Pairs for Optimal Sizing",
    "label": "Forex Track",
    "body": "### Currency Pair Evaluation: Position Sizing with Kelly\nAnalyzing currency pairs is essential for determining optimal position sizes based on the Kelly Criterion. This card focuses on **how to evaluate different pairs to maximize expected value**.\n\n* **Volatility Assessment**: Calculate the historical volatility of currency pairs using standard deviation over a set period. For example, if EURUSD has a standard deviation of 50 pips over the last 30 days, this informs your risk calculations and position sizing.\n* **Expected Value Calculation**: Determine the expected value of a trade by analyzing win rates and payoff ratios for specific pairs. If AUDJPY shows a 70% win rate with an average payoff of 2R, the expected value is 1.4, indicating a favorable setup for larger position sizing.\n* **Correlation Analysis**: Evaluate correlations between pairs to manage overall portfolio risk. If EURUSD and GBPUSD are positively correlated, a significant position in both may increase exposure. Adjust your Kelly sizing to account for this correlation, ensuring balanced risk across trades.",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility",
          "definition": "The degree of variation of a trading price series over time."
        },
        {
          "term": "Expected Value",
          "definition": "The anticipated value for a given investment based on probabilities."
        }
      ],
      "whyThisMatters": "Proper analysis of currency pairs allows for informed position sizing, maximizing potential returns while managing risk effectively.",
      "realLifeExample": "If USDCHF shows a volatility of 40 pips and a win rate of 65% with an average payoff of 1.8R, applying the Kelly Criterion could suggest a position size of $1,200 for a $10,000 account.",
      "commonMistake": "Traders often neglect to analyze currency pair volatility, leading to inappropriate position sizes that expose them to unnecessary risk.",
      "quickNote": "Evaluate currency pairs based on volatility and expected value to determine optimal position sizes.",
      "mentorText": "Think of analyzing currency pairs like a scientist studying different elements. Each pair has unique characteristics that affect your risk and reward. Use this knowledge to size your positions wisely.",
      "mentorAnalogy": "Just as a chef adjusts ingredient quantities based on recipe requirements, you must tailor your position sizes based on the unique characteristics of each currency pair."
    },
    "taskData": null,
    "visualKey": "kelly-criterion-basics"
  },
  {
    "type": "practice",
    "title": "Practical Exercises in Forex Position Sizing",
    "label": "Forex Track",
    "body": "### Application of Kelly Criterion: Position Sizing Exercises\nEngaging in practical exercises reinforces the application of the Kelly Criterion in Forex position sizing. This card provides **scenarios to apply theoretical knowledge to real-world situations**.\n\n* **Scenario Analysis**: Given a $15,000 account and a calculated Kelly percentage of 10% based on a 60% win rate and 1.5R payoff, determine the maximum position size. The correct answer is $1,500, which should be used for the next trade.\n* **Risk Adjustment Exercise**: If a trader experiences a series of losses, reassess the Kelly size. For a $12,000 account with a new Kelly percentage of 5%, the maximum risk per trade should be adjusted to $600 to safeguard capital.\n* **Position Size Comparison**: Compare the outcomes of two trades: one using a full Kelly size of $1,000 versus a half Kelly size of $500. Analyze the impact on account equity after a series of trades to understand the effects of aggressive versus conservative sizing.",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Analysis",
          "definition": "Evaluating potential outcomes based on different trading scenarios."
        },
        {
          "term": "Risk Adjustment",
          "definition": "Modifying position sizes based on changing market conditions or account equity."
        }
      ],
      "whyThisMatters": "Practical exercises solidify understanding of the Kelly Criterion, enabling traders to apply it effectively in real trading situations.",
      "realLifeExample": "In a simulated trading environment, if you start with a $20,000 account and apply a Kelly size of $2,000 based on a favorable setup, track how your account performs over ten trades to evaluate the effectiveness.",
      "commonMistake": "Failing to adjust position sizes after losses can lead to significant drawdowns and jeopardize trading accounts.",
      "quickNote": "Practice applying the Kelly Criterion through real-world scenarios to enhance position sizing skills.",
      "mentorText": "When you practice these exercises, think of them as simulations for your trading strategy. Each scenario is a chance to refine your skills and understand the impact of your decisions.",
      "mentorAnalogy": "Like a pilot practicing emergency landings in a simulator, these exercises prepare you for real market conditions, ensuring you can respond effectively when it counts."
    },
    "taskData": {
      "type": "choice_block",
      "question": "Given a $10,000 account and a calculated Kelly percentage of 20%, what is the maximum position size you should risk per trade?",
      "options": [
        {
          "id": "0",
          "text": "$2,000",
          "isCorrect": true,
          "feedback": "Correct. The maximum position size is calculated as 20% of $10,000, which equals $2,000."
        },
        {
          "id": "1",
          "text": "$1,000",
          "isCorrect": false,
          "feedback": "Incorrect. This amount is too conservative based on the Kelly Criterion calculation."
        },
        {
          "id": "2",
          "text": "$5,000",
          "isCorrect": false,
          "feedback": "Incorrect. This exceeds the recommended risk based on the Kelly percentage."
        },
        {
          "id": "3",
          "text": "$500",
          "isCorrect": false,
          "feedback": "Incorrect. This amount does not utilize the full potential of the calculated Kelly size."
        }
      ]
    },
    "visualKey": "kelly-criterion-basics"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Position Sizing Strategies",
    "label": "Forex Track",
    "body": "### Key Strategies: Applying the Kelly Criterion in Forex\nSummarizing the strategies for applying the Kelly Criterion in Forex trading emphasizes the importance of risk management. This card outlines **the essential principles for effective position sizing**.\n\n* **Leverage Awareness**: Always factor in leverage when determining position sizes. For example, with a $10,000 account and 100:1 leverage, your effective control over the market is $1,000,000, necessitating careful sizing to avoid margin calls.\n* **Continuous Reevaluation**: Regularly reassess your Kelly percentage based on changing market conditions and personal performance. If your win rate drops from 65% to 55%, adjust your position sizes accordingly to reflect the increased risk.\n* **Diversification Strategy**: Implement a diversified approach by spreading risk across multiple currency pairs. If you are trading EURUSD, GBPUSD, and AUDCAD, calculate individual position sizes based on their respective Kelly percentages to maintain balanced exposure.",
    "context": {
      "keyTerms": [
        {
          "term": "Diversification",
          "definition": "The practice of spreading investments across various financial instruments to reduce risk."
        },
        {
          "term": "Continuous Reevaluation",
          "definition": "The ongoing process of assessing and adjusting trading strategies based on performance and market conditions."
        }
      ],
      "whyThisMatters": "A solid understanding of these strategies ensures that traders can effectively manage risk while maximizing potential returns in Forex markets.",
      "realLifeExample": "If you have a diversified portfolio with three currency pairs, and each has a Kelly size of $1,000, ensure that your total exposure does not exceed your risk tolerance to avoid significant losses.",
      "commonMistake": "Traders often neglect to reevaluate their position sizes after changes in market conditions, leading to increased risk exposure.",
      "quickNote": "Apply leverage awareness, continuous reevaluation, and diversification to optimize position sizing in Forex trading.",
      "mentorText": "Remember, trading is not just about making profits; it's about managing your risk effectively. Use these strategies to ensure you stay in the game longer and protect your capital.",
      "mentorAnalogy": "Think of your trading strategy like a well-balanced diet. Just as you need a variety of nutrients to stay healthy, you need a mix of strategies and position sizes to maintain a robust trading portfolio."
    },
    "taskData": null,
    "visualKey": "kelly-criterion-basics"
  }
];
