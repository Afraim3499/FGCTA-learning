import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Applying Kelly Sizing to Gold Trading",
    "label": "Gold Track",
    "body": "### Core Risk: The Kelly Criterion in Gold Trading\nThe Kelly Criterion provides a systematic approach to position sizing in gold trading, addressing the unique volatility and market behavior of this asset class.\n\n* **Gold Market Dynamics**: Gold often reacts to geopolitical events and economic data releases, necessitating a tailored application of the Kelly Criterion that accounts for these factors.\n* **Risk Assessment**: Calculate the win-loss ratio and expected return specific to gold trades, ensuring that the Kelly percentage reflects the asset's historical performance and current market conditions.\n* **Position Sizing Formula**: Use the formula $K = W - (1-W)/R$ where $K$ is the Kelly percentage, $W$ is the win rate, and $R$ is the average payoff ratio, to determine optimal trade size for gold positions.",
    "context": {
      "keyTerms": [
        {
          "term": "Kelly Criterion",
          "definition": "A formula used to determine the optimal size of a series of bets to maximize logarithmic wealth."
        },
        {
          "term": "Win-Loss Ratio",
          "definition": "The ratio of the number of winning trades to losing trades."
        },
        {
          "term": "Average Payoff Ratio",
          "definition": "The average profit earned on winning trades relative to the average loss on losing trades."
        }
      ],
      "whyThisMatters": "Understanding the application of the Kelly Criterion in gold trading allows for more precise risk management tailored to the asset's unique characteristics.",
      "realLifeExample": "In a scenario where gold has a win rate of 60% and an average payoff ratio of 2:1, the Kelly percentage would be calculated as $K = 0.6 - (0.4/2) = 0.4$, indicating that 40% of the trading capital can be allocated to a single gold trade.",
      "commonMistake": "Traders often overlook the need to adjust the Kelly Criterion inputs based on changing market conditions, leading to suboptimal position sizes.",
      "quickNote": "Apply the Kelly Criterion specifically to gold by adjusting inputs based on market behavior.",
      "mentorText": "When trading gold, focus on the unique factors that influence its price. Calculate your Kelly percentage based on historical data and current market sentiment to determine your optimal position size.",
      "mentorAnalogy": "Think of trading gold like a pilot calculating fuel needs for a flight. Just as a pilot adjusts fuel based on weather conditions and flight path, you must adjust your position size based on gold's market dynamics."
    },
    "taskData": null,
    "visualKey": "kelly-criterion-basics"
  },
  {
    "type": "concept",
    "title": "Managing Overnight Gap Risks in Gold",
    "label": "Gold Track",
    "body": "### Core Risk: Overnight Gap Management in Gold Trading\nOvernight gaps in gold can significantly impact trading positions, necessitating strategies to mitigate potential losses while applying the Kelly Criterion.\n\n* **Gap Analysis**: Analyze historical overnight gaps to determine the average size and frequency, enabling more informed position sizing decisions.\n* **Position Adjustment**: Adjust the Kelly percentage to account for potential overnight gaps, reducing position sizes during high-risk periods such as major economic announcements.\n* **Stop-Loss Implementation**: Incorporate tighter stop-loss orders when holding positions overnight, ensuring that losses remain within acceptable limits relative to the calculated Kelly size.",
    "context": {
      "keyTerms": [
        {
          "term": "Overnight Gap",
          "definition": "The difference in price between the closing price of one trading session and the opening price of the next."
        },
        {
          "term": "Stop-Loss Order",
          "definition": "An order placed to sell a security when it reaches a certain price to limit potential losses."
        }
      ],
      "whyThisMatters": "Effectively managing overnight gap risks is critical for protecting capital and maintaining a disciplined approach to position sizing in gold trading.",
      "realLifeExample": "If historical data shows that gold typically gaps by 1.5% overnight, a trader might reduce their Kelly position size by 25% to account for this risk, ensuring that potential losses do not exceed their risk tolerance.",
      "commonMistake": "Failing to adjust position sizes for overnight gaps can lead to excessive losses when market conditions shift unexpectedly.",
      "quickNote": "Adjust position sizes based on historical overnight gap analysis to mitigate risk.",
      "mentorText": "Before holding a gold position overnight, assess the potential for gaps. Adjust your position size accordingly to protect against unexpected market moves.",
      "mentorAnalogy": "Managing overnight gaps in gold trading is like a surgeon preparing for potential complications during an operation. Just as a surgeon adjusts their approach based on patient history, you must adapt your position size based on market behavior."
    },
    "taskData": null,
    "visualKey": "kelly-criterion-basics"
  },
  {
    "type": "concept",
    "title": "Position Sizing Based on Gold Volatility",
    "label": "Gold Track",
    "body": "### Core Risk: Volatility-Based Position Sizing in Gold\nGold's inherent volatility requires a dynamic approach to position sizing, utilizing the Kelly Criterion to enhance risk management strategies.\n\n* **Volatility Measurement**: Utilize tools such as the Average True Range (ATR) to quantify gold's volatility, informing position size adjustments based on current market conditions.\n* **Dynamic Kelly Adjustment**: Modify the Kelly percentage based on volatility readings; higher volatility may necessitate a lower Kelly percentage to reduce risk exposure.\n* **Risk-Reward Ratio**: Ensure that the expected risk-reward ratio aligns with the adjusted position size, maintaining a minimum threshold of 1.5R for favorable trades.",
    "context": {
      "keyTerms": [
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical indicator that measures market volatility by decomposing the entire range of an asset price for a set period."
        },
        {
          "term": "Risk-Reward Ratio",
          "definition": "The ratio of potential profit to potential loss in a trade."
        }
      ],
      "whyThisMatters": "Adapting position sizes based on gold's volatility enhances risk management and aligns trading strategies with market conditions.",
      "realLifeExample": "If gold's ATR indicates a volatility of $20, a trader might decide to reduce their position size by 30% to account for this volatility, ensuring that potential losses remain manageable.",
      "commonMistake": "Traders often apply static position sizes without considering current volatility, leading to increased risk exposure during turbulent market conditions.",
      "quickNote": "Adjust position sizes dynamically based on gold's volatility to optimize risk management.",
      "mentorText": "Monitor gold's volatility closely. If the market shows increased fluctuations, reduce your position size to protect your capital while still adhering to the Kelly Criterion.",
      "mentorAnalogy": "Position sizing in volatile markets is akin to a race car driver adjusting speed based on track conditions. Just as a driver slows down in adverse conditions, you must adapt your position size to the volatility of gold."
    },
    "taskData": null,
    "visualKey": "kelly-criterion-basics"
  },
  {
    "type": "concept",
    "title": "Incorporating Safety Factors in Gold Trading",
    "label": "Gold Track",
    "body": "### Core Risk: Safety Factors in Gold Trading\nIncorporating safety factors into the Kelly Criterion for gold trading helps cushion against unexpected market movements, enhancing overall risk management.\n\n* **Safety Factor Calculation**: Introduce a safety factor, such as a percentage reduction in the calculated Kelly size, to account for unforeseen market events or volatility spikes.\n* **Scenario Planning**: Conduct scenario analyses to determine potential market shocks and adjust position sizes accordingly, ensuring that the Kelly percentage reflects these considerations.\n* **Capital Preservation Focus**: Prioritize capital preservation by limiting position sizes to a fraction of the calculated Kelly percentage, particularly during high-risk periods.",
    "context": {
      "keyTerms": [
        {
          "term": "Safety Factor",
          "definition": "An adjustment made to a calculated position size to account for potential market risks."
        },
        {
          "term": "Scenario Analysis",
          "definition": "A process of analyzing potential future events by considering alternative possible outcomes."
        }
      ],
      "whyThisMatters": "Incorporating safety factors into position sizing is essential for protecting capital and ensuring sustainable trading practices in the gold market.",
      "realLifeExample": "If a trader calculates a Kelly position size of $10,000 but applies a 20% safety factor, they would only risk $8,000 on that gold trade, providing a buffer against market volatility.",
      "commonMistake": "Neglecting to apply safety factors can lead to excessive risk-taking, especially in unpredictable market conditions.",
      "quickNote": "Incorporate safety factors into your Kelly sizing to safeguard against market volatility.",
      "mentorText": "Always factor in unexpected market movements when sizing your positions. A safety factor can protect your capital and ensure you remain in the game during turbulent times.",
      "mentorAnalogy": "Incorporating safety factors in trading is like an architect designing a building to withstand earthquakes. Just as an architect plans for unforeseen events, you must prepare your trading strategy for unexpected market shifts."
    },
    "taskData": null,
    "visualKey": "kelly-criterion-basics"
  },
  {
    "type": "concept",
    "title": "Historical Analysis of Gold Price Movements",
    "label": "Gold Track",
    "body": "### Historical Price Movements: Informing Position Sizing Decisions\nAnalyzing historical price movements of gold provides critical insights for effective position sizing using the Kelly Criterion.\n\n* **Volatility Assessment**: Historical data shows that gold prices can exhibit significant volatility, with average daily ranges exceeding $20 during geopolitical tensions. This volatility must be factored into position sizing calculations.\n* **Drawdown Analysis**: Historical drawdowns, such as the 2013 decline of over $200, highlight the necessity of adjusting position sizes to mitigate risk during adverse market conditions.\n* **Long-Term Trends**: Analyzing long-term trends, such as the upward movement from $1,050 to $2,000 from 2015 to 2020, can help traders optimize their Kelly Criterion calculations by identifying favorable entry points.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility Assessment",
          "definition": "Evaluating the degree of price variation in gold over a specific period."
        },
        {
          "term": "Drawdown Analysis",
          "definition": "Reviewing historical declines in gold prices to inform risk management."
        },
        {
          "term": "Long-Term Trends",
          "definition": "Identifying sustained price movements in gold over extended periods."
        }
      ],
      "whyThisMatters": "Understanding historical price movements allows traders to make informed decisions on position sizing, enhancing risk management strategies based on the Kelly Criterion.",
      "realLifeExample": "In 2020, gold prices surged from $1,600 to $2,000 amid economic uncertainty, with a daily volatility of approximately $30, necessitating a recalibration of position sizes based on the Kelly Criterion.",
      "commonMistake": "Traders often overlook historical volatility, leading to overly aggressive position sizes that can result in significant losses.",
      "quickNote": "Historical analysis is essential for informed position sizing in gold trading.",
      "mentorText": "When examining historical price movements, always consider how past volatility and drawdowns can impact your position sizes. Adjust your Kelly calculations accordingly to protect your capital.",
      "mentorAnalogy": "Think of this like a pilot reviewing flight data before takeoff; understanding past turbulence helps in planning a safer flight path."
    },
    "taskData": null,
    "visualKey": "kelly-criterion-basics"
  },
  {
    "type": "concept",
    "title": "Market Factors Influencing Gold Prices",
    "label": "Gold Track",
    "body": "### Market Factors: Impact on Position Sizing Strategies\nVarious market factors significantly influence gold prices, necessitating adjustments in position sizing strategies based on the Kelly Criterion.\n\n* **Economic Indicators**: Key indicators such as inflation rates and interest rates directly affect gold prices. For instance, a 1% increase in inflation can lead to a $50 rise in gold prices, impacting position size calculations.\n* **Geopolitical Events**: Events like trade wars or military conflicts can cause sudden spikes in gold prices. For example, the U.S.-China trade tensions in 2019 saw gold prices increase by $100 in a week, requiring traders to reassess their risk exposure.\n* **Market Sentiment**: Investor sentiment, often driven by market news or economic forecasts, can lead to rapid price changes. A bullish sentiment shift can result in a 5% price increase, necessitating a recalibration of position sizes to align with the new market conditions.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Economic Indicators",
          "definition": "Statistical data that reflects the economic performance influencing gold prices."
        },
        {
          "term": "Geopolitical Events",
          "definition": "Global occurrences that can lead to significant price fluctuations in gold."
        },
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of investors towards gold, affecting its price."
        }
      ],
      "whyThisMatters": "Recognizing the market factors that influence gold prices is crucial for adjusting position sizes effectively, ensuring alignment with the Kelly Criterion.",
      "realLifeExample": "During the COVID-19 pandemic, gold prices surged from $1,600 to $2,000 due to heightened economic uncertainty, prompting traders to adjust their position sizes based on the increased volatility and risk.",
      "commonMistake": "Failing to account for market factors can lead to static position sizing, exposing traders to unforeseen risks.",
      "quickNote": "Market factors must be continuously monitored to optimize position sizing in gold trading.",
      "mentorText": "Stay vigilant about market factors. Adjust your position sizes based on economic indicators and geopolitical events to maintain a balanced risk profile.",
      "mentorAnalogy": "Like a chef adjusting a recipe based on seasonal ingredients, you must adapt your position sizes to the current market conditions."
    },
    "taskData": null,
    "visualKey": "kelly-criterion-basics"
  },
  {
    "type": "practice",
    "title": "Practical Exercises in Gold Position Sizing",
    "label": "Gold Track",
    "body": "### Practical Application: Position Sizing in Gold Trading\nEngage in exercises that apply the Kelly Criterion to determine optimal position sizes for trading gold, reinforcing the mathematical principles learned.\n\n* **Scenario Analysis**: Given a hypothetical scenario where gold is priced at $1,800 with a win rate of 60% and an average payoff of 2:1, calculate the optimal position size using the Kelly Criterion formula.\n* **Risk Assessment**: Evaluate a situation where gold experiences a $50 drop due to market news. Determine how this affects your existing position size and what adjustments are necessary to maintain your risk profile.\n* **Performance Review**: After executing trades based on your calculated position sizes, analyze the outcomes to assess the effectiveness of your application of the Kelly Criterion in real-time trading conditions.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Analysis",
          "definition": "Evaluating hypothetical trading situations to apply theoretical concepts."
        },
        {
          "term": "Risk Assessment",
          "definition": "Analyzing potential losses and necessary adjustments in trading positions."
        },
        {
          "term": "Performance Review",
          "definition": "Assessing trade outcomes to evaluate the effectiveness of trading strategies."
        }
      ],
      "whyThisMatters": "Practical exercises solidify understanding of the Kelly Criterion, enabling traders to apply theoretical knowledge to real trading scenarios effectively.",
      "realLifeExample": "In a scenario where gold is trading at $1,800 with a 60% win rate, applying the Kelly Criterion reveals an optimal position size of 15% of capital, allowing for calculated risk management.",
      "commonMistake": "Traders often neglect to adjust their position sizes after significant market movements, leading to increased risk exposure.",
      "quickNote": "Practical exercises enhance the application of the Kelly Criterion in gold trading.",
      "mentorText": "Practice makes perfect. Use hypothetical scenarios to refine your position sizing skills, ensuring you can adapt quickly to real market conditions.",
      "mentorAnalogy": "Think of this like a surgeon practicing on simulations; the more you apply the techniques, the more proficient you become in real operations."
    },
    "taskData": {
      "type": "choice_block",
      "question": "Given a gold price of $1,800, a win rate of 60%, and an average payoff of 2:1, what is the optimal position size using the Kelly Criterion?",
      "options": [
        {
          "id": "0",
          "text": "15%",
          "isCorrect": true,
          "feedback": "Correct. The Kelly Criterion formula indicates an optimal position size of 15% based on the provided parameters."
        },
        {
          "id": "1",
          "text": "10%",
          "isCorrect": false,
          "feedback": "Incorrect. This does not account for the win rate and payoff ratio correctly."
        },
        {
          "id": "2",
          "text": "20%",
          "isCorrect": false,
          "feedback": "Incorrect. This exceeds the optimal size calculated by the Kelly Criterion."
        },
        {
          "id": "3",
          "text": "5%",
          "isCorrect": false,
          "feedback": "Incorrect. This underestimates the potential position size based on the given win rate."
        }
      ]
    },
    "visualKey": "kelly-criterion-basics"
  },
  {
    "type": "summary",
    "title": "Summary of Gold Position Sizing Techniques",
    "label": "Gold Track",
    "body": "### Key Techniques: Applying the Kelly Criterion in Gold Trading\nSummarizing the essential techniques for effectively applying the Kelly Criterion in gold trading, particularly in managing overnight risks.\n\n* **Dynamic Position Sizing**: Adjust position sizes based on real-time market conditions and historical volatility to optimize risk management.\n* **Risk Management Protocols**: Implement strict protocols for adjusting positions after significant market movements, ensuring alignment with the Kelly Criterion.\n* **Overnight Risk Considerations**: Factor in overnight market risks when determining position sizes, especially during high-impact news events that could affect gold prices.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Dynamic Position Sizing",
          "definition": "Adjusting position sizes in response to changing market conditions."
        },
        {
          "term": "Risk Management Protocols",
          "definition": "Established guidelines for managing risk in trading."
        },
        {
          "term": "Overnight Risk Considerations",
          "definition": "Evaluating potential risks associated with holding positions overnight."
        }
      ],
      "whyThisMatters": "Summarizing these techniques reinforces the importance of disciplined position sizing and risk management in gold trading, ensuring long-term success.",
      "realLifeExample": "In the lead-up to a Federal Reserve meeting, traders adjusted their gold positions to account for potential volatility, demonstrating effective risk management and adherence to the Kelly Criterion.",
      "commonMistake": "Traders frequently neglect to adjust for overnight risks, leading to unexpected losses during market openings.",
      "quickNote": "Effective position sizing and risk management are critical for successful gold trading.",
      "mentorText": "Always remember to adapt your position sizes dynamically and consider overnight risks. This discipline will safeguard your capital in volatile markets.",
      "mentorAnalogy": "Like a seasoned architect adjusting blueprints based on environmental factors, you must refine your trading strategies to accommodate market conditions."
    },
    "taskData": null,
    "visualKey": "kelly-criterion-basics"
  }
];
