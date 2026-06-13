import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Gold Volatility and Risk Management",
    "label": "Gold Track",
    "body": "<!-- M9.2-gold-C1 -->\n### Core Scenario: Gold Volatility Dynamics\nGold volatility is influenced by various factors, including inflation expectations and interest rate movements, which can impact correlated assets like TIPS and US Treasuries. This card outlines **how to effectively manage risk by understanding these relationships**.\n\n* **Volatility Measurement**: Utilize the Average True Range (ATR) to quantify gold's volatility over a defined period. For instance, an ATR of $20 indicates that gold typically moves $20 from its average price in a given timeframe, which should inform position sizing.\n* **Correlation Analysis**: Conduct a correlation analysis between gold and TIPS using historical data. A correlation coefficient of 0.75 suggests a strong relationship, indicating that when TIPS rise, gold may also increase, necessitating risk adjustments.\n* **Risk Allocation Strategy**: Allocate risk based on the volatility of gold relative to TIPS. If gold's volatility is significantly higher, consider reducing exposure to gold to maintain a balanced risk profile across the portfolio.",
    "context": {
      "keyTerms": [
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical indicator measuring market volatility by decomposing the entire range of an asset price for a set period."
        },
        {
          "term": "Correlation Coefficient",
          "definition": "A statistical measure that describes the degree to which two assets move in relation to each other."
        }
      ],
      "whyThisMatters": "Understanding gold's volatility and its correlation with TIPS is essential for managing risk exposure effectively within a diversified portfolio.",
      "realLifeExample": "During Q1 2023, gold exhibited an ATR of $25 while TIPS showed a correlation of 0.80 with gold prices, prompting a reevaluation of risk exposure to maintain portfolio stability.",
      "commonMistake": "Traders often overlook the impact of correlated assets, leading to excessive risk concentration in portfolios.",
      "quickNote": "Monitor gold's ATR and correlation with TIPS to adjust portfolio risk dynamically.",
      "mentorText": "In my experience, understanding how gold interacts with TIPS can save you from unexpected drawdowns. Always check the ATR before entering a position.",
      "mentorAnalogy": "Think of managing gold volatility like a pilot adjusting flight altitude based on turbulence reports; you must adapt your strategy to maintain a smooth ride."
    },
    "taskData": null,
    "visualKey": "portfolio-risk-model"
  },
  {
    "type": "concept",
    "title": "Correlating Gold with TIPS",
    "label": "Gold Track",
    "body": "<!-- M9.2-gold-C2 -->\n### Core Scenario: Analyzing Gold and TIPS Correlation\nThe relationship between gold prices and TIPS provides insight into inflation expectations and market sentiment. This card teaches **how to analyze this correlation to identify overlapping risk profiles**.\n\n* **Data Collection**: Gather historical price data for gold and TIPS over a minimum of five years. Use this data to calculate the correlation coefficient, which reveals the strength of their relationship.\n* **Statistical Analysis**: Apply statistical software or tools to compute the correlation coefficient. A value above 0.6 indicates a strong positive correlation, suggesting that movements in TIPS prices may predict movements in gold prices.\n* **Risk Assessment**: Assess the implications of the correlation for your portfolio. If gold and TIPS are highly correlated, consider diversifying into uncorrelated assets to mitigate risk exposure.",
    "context": {
      "keyTerms": [
        {
          "term": "Inflation-Protected Securities (TIPS)",
          "definition": "U.S. Treasury securities that are indexed to inflation, providing protection against inflation risk."
        },
        {
          "term": "Statistical Software",
          "definition": "Programs used for data analysis and statistical computations, such as R or Python."
        }
      ],
      "whyThisMatters": "Identifying the correlation between gold and TIPS is critical for understanding potential risk overlaps and making informed investment decisions.",
      "realLifeExample": "In 2022, a correlation coefficient of 0.78 between gold and TIPS suggested that as inflation fears rose, both assets moved in tandem, indicating a need for diversification.",
      "commonMistake": "Failing to analyze correlation can lead to unintentional risk concentration in portfolios, especially during inflationary periods.",
      "quickNote": "Calculate the correlation coefficient regularly to stay informed about the relationship between gold and TIPS.",
      "mentorText": "When I analyze gold and TIPS, I look for patterns. If they move together, it’s a red flag for potential risk overlap.",
      "mentorAnalogy": "Think of this analysis like a weather forecast; understanding the correlation helps you prepare for potential storms in your portfolio."
    },
    "taskData": null,
    "visualKey": "portfolio-risk-model"
  },
  {
    "type": "concept",
    "title": "Impact of Treasury Flows on Gold Risk",
    "label": "Gold Track",
    "body": "<!-- M9.2-gold-C3 -->\n### Core Scenario: Treasury Flows and Gold Pricing\nUS Treasury flows directly influence gold prices, affecting overall portfolio risk. This card explains **how to assess these impacts for better risk management**.\n\n* **Flow Analysis**: Monitor the flow of funds into and out of US Treasuries, as significant inflows typically indicate a flight to safety, which can drive gold prices higher. For example, a $10 billion inflow into Treasuries could correlate with a $50 increase in gold prices.\n* **Market Sentiment Indicators**: Utilize market sentiment indicators alongside Treasury flow data to gauge investor behavior. A rising gold price amidst increasing Treasury flows may signal heightened risk aversion in the market.\n* **Portfolio Adjustment Protocol**: Adjust your gold exposure based on Treasury flow trends. If flows into Treasuries surge, consider reducing gold positions to avoid overlapping risk profiles.",
    "context": {
      "keyTerms": [
        {
          "term": "Flight to Safety",
          "definition": "A phenomenon where investors move their capital into safer assets during times of uncertainty."
        },
        {
          "term": "Market Sentiment Indicators",
          "definition": "Metrics that gauge the overall attitude of investors towards a particular market or asset."
        }
      ],
      "whyThisMatters": "Understanding the relationship between Treasury flows and gold prices is vital for anticipating market movements and adjusting risk exposure accordingly.",
      "realLifeExample": "In March 2023, a $15 billion inflow into Treasuries coincided with a $30 rise in gold, prompting a review of gold positions to mitigate risk exposure.",
      "commonMistake": "Traders often neglect the influence of Treasury flows on gold, leading to misaligned risk profiles.",
      "quickNote": "Track Treasury flows to anticipate potential shifts in gold prices and adjust your portfolio risk accordingly.",
      "mentorText": "When I see large Treasury inflows, I know gold is likely to react. Always be prepared to adjust your positions based on these movements.",
      "mentorAnalogy": "Managing this relationship is like a surgeon monitoring blood flow during an operation; any significant change requires immediate adjustments to ensure stability."
    },
    "taskData": null,
    "visualKey": "portfolio-risk-model"
  },
  {
    "type": "concept",
    "title": "Strategies for Managing Gold Volatility",
    "label": "Gold Track",
    "body": "<!-- M9.2-gold-C4 -->\n### Core Scenario: Gold Volatility Management\nGold's inherent volatility can pose risks to a portfolio, necessitating effective management strategies. This card outlines **specific approaches to mitigate volatility risks**.\n\n* **Hedging Techniques**: Implement hedging strategies using options or futures contracts to protect against adverse price movements in gold. For instance, purchasing a put option at a strike price of $1,800 can limit losses if gold falls below this level.\n* **Dynamic Position Sizing**: Adjust position sizes based on current volatility metrics. For example, if gold's ATR rises above $30, reduce position sizes to maintain risk within acceptable limits.\n* **Diversification Strategies**: Incorporate non-correlated assets into your portfolio to buffer against gold volatility. Allocating 20% to commodities like silver or agricultural products can reduce overall portfolio risk when gold prices fluctuate significantly.",
    "context": {
      "keyTerms": [
        {
          "term": "Hedging",
          "definition": "A risk management strategy used to offset potential losses in an investment by taking an opposite position in a related asset."
        },
        {
          "term": "Dynamic Position Sizing",
          "definition": "Adjusting the size of a position based on current market conditions and volatility."
        }
      ],
      "whyThisMatters": "Implementing effective strategies to manage gold volatility is essential for maintaining a stable risk profile in a diversified portfolio.",
      "realLifeExample": "In April 2023, gold's ATR surged to $35, prompting a reduction in position sizes and the purchase of put options to hedge against potential declines.",
      "commonMistake": "Many traders fail to adjust their strategies in response to volatility, leading to increased risk exposure during turbulent market conditions.",
      "quickNote": "Utilize hedging and dynamic position sizing to manage gold volatility effectively.",
      "mentorText": "When gold gets volatile, I always have a plan. Hedging and adjusting position sizes are non-negotiable steps to protect my capital.",
      "mentorAnalogy": "Think of managing gold volatility like a firefighter adjusting water pressure; you must adapt your strategy to control the situation effectively."
    },
    "taskData": null,
    "visualKey": "portfolio-risk-model"
  },
  {
    "type": "concept",
    "title": "Gold and Inflation Correlation",
    "label": "Gold Track",
    "body": "<!-- M9.2-gold-C5 -->\n### Core Scenario: Gold and Inflation Dynamics\nGold often serves as a hedge against inflation, influencing risk management strategies. Understanding this correlation is essential for optimizing portfolio exposure.\n\n* **Inflation Hedge Mechanism**: Gold typically appreciates during inflationary periods as purchasing power declines. For instance, when inflation rates rise to 5%, gold prices may increase by 10% or more, necessitating adjustments in portfolio allocations.\n* **Correlation Coefficient Analysis**: Calculate the correlation coefficient between gold prices and inflation rates over a defined period. A coefficient close to +1 indicates a strong positive relationship, informing strategic asset allocation.\n* **Risk Management Adjustments**: When inflation expectations increase, consider increasing gold exposure in the portfolio. For example, if inflation forecasts rise from 2% to 4%, adjust gold holdings to maintain a balanced risk profile.",
    "context": {
      "keyTerms": [
        {
          "term": "Correlation Coefficient",
          "definition": "A statistical measure that describes the strength and direction of a relationship between two variables."
        },
        {
          "term": "Inflation Hedge",
          "definition": "An investment strategy aimed at protecting the purchasing power of capital during inflationary periods."
        }
      ],
      "whyThisMatters": "Understanding the correlation between gold and inflation is critical for effective risk management and portfolio diversification.",
      "realLifeExample": "In Q1 2022, as inflation rates surged to 7%, gold prices rose from $1,800 to $2,000, highlighting the need for strategic adjustments in portfolios heavily weighted in equities.",
      "commonMistake": "Traders often overlook the lagging effect of inflation on gold prices, leading to delayed portfolio adjustments.",
      "quickNote": "Gold's value often rises in inflationary environments, necessitating proactive risk management.",
      "mentorText": "When inflation spikes, your gold exposure should increase. Monitor inflation trends closely and adjust your portfolio accordingly to safeguard against purchasing power erosion.",
      "mentorAnalogy": "Think of managing gold in your portfolio like a pilot adjusting altitude based on weather conditions. Just as a pilot must respond to changing conditions to ensure a safe flight, you must adjust your gold exposure in response to inflation."
    },
    "taskData": null,
    "visualKey": "portfolio-risk-model"
  },
  {
    "type": "concept",
    "title": "Calculating Risk-Adjusted Returns for Gold",
    "label": "Gold Track",
    "body": "<!-- M9.2-gold-C6 -->\n### Core Scenario: Risk-Adjusted Return Calculation\nCalculating risk-adjusted returns for gold investments provides insight into their contribution to overall portfolio risk. This metric is vital for informed decision-making.\n\n* **Sharpe Ratio Application**: Use the Sharpe Ratio to evaluate gold's performance relative to its risk. Calculate it by subtracting the risk-free rate from gold's return and dividing by its standard deviation. For example, if gold returns 8% with a standard deviation of 15%, and the risk-free rate is 2%, the Sharpe Ratio is (8% - 2%) / 15% = 0.4.\n* **Return Attribution Analysis**: Assess how much of the portfolio's return is attributable to gold versus other assets. This involves comparing gold's risk-adjusted return to that of equities or bonds to determine its effectiveness as a diversifier.\n* **Volatility Consideration**: Incorporate gold's volatility into the risk assessment. A high volatility may necessitate a lower allocation in a risk-averse portfolio, while a stable gold price may warrant increased exposure.",
    "context": {
      "keyTerms": [
        {
          "term": "Sharpe Ratio",
          "definition": "A measure of risk-adjusted return, indicating how much excess return is received for the extra volatility endured by holding a riskier asset."
        },
        {
          "term": "Return Attribution",
          "definition": "The process of determining the contribution of individual assets to the overall return of a portfolio."
        }
      ],
      "whyThisMatters": "Calculating risk-adjusted returns allows traders to make data-driven decisions regarding gold's role in their portfolios.",
      "realLifeExample": "In 2023, gold achieved a return of 12% with a volatility of 10%. Using a risk-free rate of 3%, the Sharpe Ratio would be (12% - 3%) / 10% = 0.9, indicating a favorable risk-adjusted return compared to equities.",
      "commonMistake": "Failing to account for volatility can lead to overestimating gold's contribution to portfolio performance.",
      "quickNote": "Risk-adjusted returns provide a clearer picture of gold's value in your portfolio.",
      "mentorText": "Always calculate the Sharpe Ratio for your gold investments. It helps you understand whether the returns justify the risks you're taking.",
      "mentorAnalogy": "Calculating risk-adjusted returns is like a chef balancing flavors in a dish. Just as a chef must consider the intensity of each ingredient, you must weigh the returns against the risks of your gold investments."
    },
    "taskData": null,
    "visualKey": "portfolio-risk-model"
  },
  {
    "type": "practice",
    "title": "Practical Gold Risk Assessment",
    "label": "Gold Track",
    "body": "<!-- M9.2-gold-C7 -->\n### Core Scenario: Hypothetical Gold Portfolio Risk Assessment\nEngage in a practical exercise to assess risk in a hypothetical gold portfolio, applying previously learned concepts. This assessment will reinforce your understanding of risk management.\n\n* **Portfolio Composition Analysis**: Evaluate a hypothetical portfolio consisting of 60% gold, 30% equities, and 10% bonds. Determine the overall risk profile based on historical volatility and correlation metrics.\n* **Scenario Simulation**: Simulate potential market conditions where gold prices drop by 15% due to a strong dollar. Assess how this impacts the overall portfolio value and the risk exposure to equities.\n* **Risk Mitigation Strategies**: Develop strategies to mitigate risk in the event of a gold price decline. Consider options such as diversifying into non-correlated assets or using derivatives to hedge against potential losses.",
    "context": {
      "keyTerms": [
        {
          "term": "Portfolio Composition",
          "definition": "The mix of different asset classes within an investment portfolio."
        },
        {
          "term": "Risk Mitigation",
          "definition": "Strategies employed to reduce potential losses in an investment."
        }
      ],
      "whyThisMatters": "Practicing risk assessment in a controlled scenario enhances decision-making skills in real market conditions.",
      "realLifeExample": "In a hypothetical assessment, if gold falls 15% from $1,900 to $1,615, calculate the impact on a portfolio valued at $100,000 with 60% in gold, resulting in a $9,000 loss.",
      "commonMistake": "Failing to consider the correlation between gold and other assets can lead to an inaccurate assessment of overall portfolio risk.",
      "quickNote": "Regular risk assessments are essential for maintaining a balanced portfolio.",
      "mentorText": "Assess your portfolio regularly. Understand how changes in gold prices affect your overall risk exposure and adjust accordingly.",
      "mentorAnalogy": "Conducting a risk assessment is like a doctor performing a health check-up. Just as a doctor evaluates various health indicators, you must analyze your portfolio's risk factors."
    },
    "taskData": {
      "type": "choice_block",
      "question": "If gold in your portfolio drops by 15%, how much will a $100,000 portfolio with 60% in gold lose?",
      "options": [
        {
          "id": "0",
          "text": "$9,000",
          "isCorrect": true,
          "feedback": "Correct. A 15% drop in the gold portion ($60,000) results in a $9,000 loss."
        },
        {
          "id": "1",
          "text": "$6,000",
          "isCorrect": false,
          "feedback": "Incorrect. This value does not reflect the correct calculation based on the portfolio composition."
        },
        {
          "id": "2",
          "text": "$12,000",
          "isCorrect": false,
          "feedback": "Incorrect. This value overestimates the loss based on the percentage drop."
        },
        {
          "id": "3",
          "text": "$15,000",
          "isCorrect": false,
          "feedback": "Incorrect. This value does not consider the actual gold allocation in the portfolio."
        }
      ]
    },
    "visualKey": "portfolio-risk-model"
  },
  {
    "type": "summary",
    "title": "Summary of Gold Risk Management Insights",
    "label": "Gold Track",
    "body": "<!-- M9.2-gold-C8 -->\n### Core Scenario: Key Insights on Gold Risk Management\nSummarizing the insights gained regarding gold risk management and its correlation with TIPS and Treasury flows is essential for future strategic planning.\n\n* **Gold as a Safe Haven**: Recognize gold's role as a safe haven during economic uncertainty, often inversely correlated with equities. This understanding can guide asset allocation during volatile periods.\n* **TIPS Correlation**: Analyze the relationship between gold and Treasury Inflation-Protected Securities (TIPS). As inflation rises, TIPS yields may fall, leading to increased gold demand as an alternative investment.\n* **Treasury Flow Dynamics**: Monitor Treasury flows for insights into market sentiment. Increased buying of Treasuries may signal risk aversion, prompting a shift towards gold as a protective asset.",
    "context": {
      "keyTerms": [
        {
          "term": "TIPS",
          "definition": "Treasury Inflation-Protected Securities, designed to protect investors from inflation."
        },
        {
          "term": "Safe Haven Asset",
          "definition": "An investment that is expected to retain or increase in value during market turbulence."
        }
      ],
      "whyThisMatters": "Summarizing these insights aids in refining risk management strategies and enhancing portfolio resilience.",
      "realLifeExample": "In 2022, as inflation concerns grew, TIPS yields fell, and gold demand surged, leading to a price increase from $1,800 to $2,100, demonstrating the correlation between these assets.",
      "commonMistake": "Ignoring the interplay between gold and TIPS can lead to missed opportunities for risk mitigation.",
      "quickNote": "Gold's relationship with TIPS and Treasuries is crucial for informed investment decisions.",
      "mentorText": "Keep a close eye on TIPS and Treasury flows. They provide valuable insights into when to adjust your gold exposure in your portfolio.",
      "mentorAnalogy": "Monitoring gold's relationship with TIPS and Treasuries is like a navigator using weather patterns to chart a safe course. Just as a navigator adjusts based on conditions, you must adapt your strategy based on market signals."
    },
    "taskData": null,
    "visualKey": "portfolio-risk-model"
  }
];
