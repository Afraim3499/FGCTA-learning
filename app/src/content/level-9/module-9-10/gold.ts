import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Monitoring Gold Model Decay Amid Yield Correlation Changes",
    "label": "Gold Track",
    "body": "<!-- M9.10-gold-C1 -->\n### Core Scenario: Yield Decoupling Impact on Gold Models\nMonitoring the relationship between gold prices and yield rates is crucial for identifying model decay. This card outlines **how to detect shifts in correlation that may indicate a deterioration in model performance**.\n\n* **Correlation Assessment**: Regularly calculate the correlation coefficient between gold prices and yield rates. A significant drop below 0.7 may signal model decay, necessitating further analysis.\n* **Historical Benchmarking**: Compare current yield correlations against historical averages. A deviation of more than 15% from the historical norm should trigger a review of model assumptions and parameters.\n* **Alert Mechanism**: Implement an alert system that notifies you when correlation metrics fall below predefined thresholds. This ensures timely intervention before performance degradation becomes pronounced.",
    "context": {
      "keyTerms": [
        {
          "term": "Correlation Coefficient",
          "definition": "A statistical measure that indicates the extent to which two variables fluctuate together."
        },
        {
          "term": "Model Decay",
          "definition": "The deterioration of a trading model's predictive accuracy over time."
        }
      ],
      "whyThisMatters": "Identifying yield correlation changes is essential for maintaining the integrity of gold trading models and avoiding significant losses.",
      "realLifeExample": "In Q1 2023, the correlation between gold and the 10-year Treasury yield dropped from 0.85 to 0.65, prompting a review of the trading model based on this divergence.",
      "commonMistake": "Failing to regularly update correlation assessments can lead to reliance on outdated models that no longer reflect market conditions.",
      "quickNote": "Monitor yield correlations to preemptively identify model decay.",
      "mentorText": "You must stay vigilant about the correlation between gold and yields. If you notice a significant drop, it's time to reassess your model's assumptions.",
      "mentorAnalogy": "Think of your trading model like an aircraft's navigation system; if the external conditions change significantly, you must recalibrate to ensure a safe flight."
    },
    "taskData": null,
    "visualKey": "performance-drift-monitor"
  },
  {
    "type": "concept",
    "title": "Understanding Yield Correlation with Gold Prices",
    "label": "Gold Track",
    "body": "<!-- M9.10-gold-C2 -->\n### Core Scenario: Analyzing Yield Rates and Gold Price Dynamics\nThe correlation between gold prices and yield rates can provide insights into market behavior and model reliability. This card teaches **how to systematically analyze these correlations to detect potential model decay**.\n\n* **Data Collection**: Gather historical data on gold prices and yield rates over multiple time frames. Use at least 5 years of data to ensure statistical significance in your analysis.\n* **Correlation Calculation**: Employ statistical software to calculate the correlation coefficient. A consistent correlation above 0.75 indicates a strong relationship, while fluctuations below this threshold warrant investigation.\n* **Trend Analysis**: Create visual representations of the correlation over time. Look for trends indicating a weakening relationship, which may suggest that your trading model is becoming less effective.",
    "context": {
      "keyTerms": [
        {
          "term": "Statistical Significance",
          "definition": "The likelihood that a relationship observed in data is not due to chance."
        },
        {
          "term": "Trend Analysis",
          "definition": "The practice of collecting information and attempting to spot a pattern."
        }
      ],
      "whyThisMatters": "Understanding yield correlations is vital for adapting trading strategies to maintain performance in changing market conditions.",
      "realLifeExample": "In late 2022, a sudden rise in yield rates correlated with a drop in gold prices, leading to a correlation coefficient of 0.60, prompting a model reassessment.",
      "commonMistake": "Overlooking the need for regular correlation analysis can lead to reliance on ineffective trading strategies.",
      "quickNote": "Regularly analyze yield correlations to ensure model relevance.",
      "mentorText": "You need to be proactive in analyzing yield rates against gold prices. If the correlation weakens, your model may no longer be reliable.",
      "mentorAnalogy": "Consider this like a surgeon monitoring vital signs during an operation; any significant change requires immediate attention to avoid complications."
    },
    "taskData": null,
    "visualKey": "performance-drift-monitor"
  },
  {
    "type": "concept",
    "title": "Evaluating Gold Model Performance Metrics",
    "label": "Gold Track",
    "body": "<!-- M9.10-gold-C3 -->\n### Core Scenario: Performance Metrics for Gold Trading Models\nEvaluating the performance metrics of gold trading models is essential for detecting signs of drift. This card outlines **the key metrics to monitor and how to interpret them**.\n\n* **Sharpe Ratio Analysis**: Calculate the Sharpe ratio to assess risk-adjusted returns. A declining Sharpe ratio over three consecutive months may indicate a need to reevaluate the model's effectiveness.\n* **Drawdown Monitoring**: Track maximum drawdown metrics. If the drawdown exceeds historical averages by more than 20%, this could signal a significant performance issue that requires immediate attention.\n* **Win Rate Evaluation**: Regularly assess the win rate of trades executed by the model. A drop below 50% over a rolling 30-day period should prompt a thorough review of the model's assumptions and parameters.",
    "context": {
      "keyTerms": [
        {
          "term": "Sharpe Ratio",
          "definition": "A measure of risk-adjusted return, indicating how much excess return is received for the extra volatility endured."
        },
        {
          "term": "Drawdown",
          "definition": "The reduction of one's capital after a series of losing trades."
        }
      ],
      "whyThisMatters": "Monitoring performance metrics allows traders to identify and address model drift before it leads to significant losses.",
      "realLifeExample": "In Q2 2023, a gold trading model's Sharpe ratio fell from 1.5 to 0.9, indicating a need for immediate strategy reassessment.",
      "commonMistake": "Neglecting to monitor key performance metrics can lead to prolonged periods of underperformance without corrective action.",
      "quickNote": "Regularly evaluate performance metrics to detect model drift.",
      "mentorText": "You must keep a close eye on your model's performance metrics. If you see a decline in the Sharpe ratio or win rate, it's time to take action.",
      "mentorAnalogy": "Think of your trading model as a race car; if performance metrics start to decline, you need to pit for adjustments before you lose the race."
    },
    "taskData": null,
    "visualKey": "performance-drift-monitor"
  },
  {
    "type": "concept",
    "title": "Price Action Analysis for Gold Trading",
    "label": "Gold Track",
    "body": "<!-- M9.10-gold-C4 -->\n### Core Scenario: Analyzing Price Action in Gold Markets\nPrice action analysis is a critical tool for identifying discrepancies between expected and actual model performance. This card covers **the techniques for analyzing price action in gold markets**.\n\n* **Candlestick Patterns**: Monitor key candlestick formations, such as engulfing patterns or doji candles, which may indicate potential reversals or continuations in price trends. These patterns can provide insight into market sentiment that may not align with model predictions.\n* **Volume Analysis**: Assess trading volume alongside price movements. A divergence where price rises but volume declines may signal weakening momentum, suggesting that the model's assumptions need reevaluation.\n* **Support and Resistance Levels**: Identify key support and resistance zones. If price consistently fails to breach resistance levels predicted by the model, this may indicate a misalignment in market behavior that requires model adjustment.",
    "context": {
      "keyTerms": [
        {
          "term": "Candlestick Patterns",
          "definition": "Visual representations of price movements that can indicate market sentiment."
        },
        {
          "term": "Support and Resistance",
          "definition": "Price levels at which a stock or commodity tends to stop and reverse."
        }
      ],
      "whyThisMatters": "Analyzing price action helps traders adapt their strategies to real-time market conditions, ensuring model relevance.",
      "realLifeExample": "In March 2023, gold prices formed a doji candlestick at $1,900, accompanied by declining volume, indicating potential weakness in upward momentum despite model predictions.",
      "commonMistake": "Ignoring price action signals can lead to misaligned trading strategies that do not reflect current market conditions.",
      "quickNote": "Use price action analysis to align trading strategies with market behavior.",
      "mentorText": "Pay attention to price action; it tells you what the market is really doing. If your model's predictions don't match the price movements, it's time to reassess.",
      "mentorAnalogy": "Consider price action analysis like a pilot monitoring flight instruments; if the readings don't match expected conditions, corrective measures must be taken immediately."
    },
    "taskData": null,
    "visualKey": "performance-drift-monitor"
  },
  {
    "type": "concept",
    "title": "Assessing Market Sentiment in Gold Trading",
    "label": "Gold Track",
    "body": "<!-- M9.10-gold-C5 -->\n### Core Scenario: Market Sentiment Analysis\nMarket sentiment significantly influences gold prices and can lead to model performance drift. This card outlines **how to effectively gauge market sentiment and its implications for trading strategies**.\n\n* **Sentiment Indicators**: Utilize tools such as the Commitment of Traders (COT) report and sentiment surveys to gauge trader positioning. For instance, a high percentage of speculative long positions may indicate overbought conditions, suggesting potential downward pressure on gold prices.\n* **News Impact Assessment**: Monitor major economic announcements and geopolitical events that can sway market sentiment. For example, a sudden escalation in geopolitical tensions may lead to a spike in gold prices, affecting the predictive accuracy of existing models.\n* **Behavioral Analysis**: Analyze historical price movements in relation to sentiment shifts. If gold prices rise while sentiment indicators show bearish trends, it may signal a divergence that warrants a reevaluation of model assumptions.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of investors toward a particular market or asset."
        },
        {
          "term": "Commitment of Traders (COT)",
          "definition": "A report that provides a breakdown of open interest in futures markets."
        }
      ],
      "whyThisMatters": "Understanding market sentiment allows traders to adjust models proactively, mitigating risks associated with performance drift.",
      "realLifeExample": "On March 15, 2023, the COT report indicated a 75% long positioning among speculators, coinciding with gold prices peaking at $2,050. This divergence prompted a reassessment of model parameters.",
      "commonMistake": "Failing to incorporate sentiment analysis can lead to reliance on outdated models that do not reflect current market dynamics.",
      "quickNote": "Market sentiment can signal potential model drift; assess it regularly.",
      "mentorText": "When assessing market sentiment, think of it as reading the room before making a decision. If everyone is bullish, but the indicators suggest caution, it’s time to adjust your strategy.",
      "mentorAnalogy": "Assessing market sentiment is akin to a pilot checking weather conditions before takeoff; ignoring it can lead to turbulence mid-flight."
    },
    "taskData": null,
    "visualKey": "performance-drift-monitor"
  },
  {
    "type": "concept",
    "title": "Corrective Strategies for Gold Model Drift",
    "label": "Gold Track",
    "body": "<!-- M9.10-gold-C6 -->\n### Core Scenario: Implementing Corrective Measures\nWhen gold trading models exhibit performance drift, corrective strategies must be employed to realign with market conditions. This card details **the systematic approaches to rectify model discrepancies**.\n\n* **Model Recalibration**: Periodically adjust model parameters based on recent performance metrics. For example, if a model predicting gold price movements has underperformed for three consecutive months, recalibrate the input variables to reflect current volatility levels.\n* **Diversification of Strategies**: Introduce multiple trading strategies that account for different market conditions. If a trend-following model fails during sideways markets, consider integrating a mean-reversion strategy to capture price oscillations.\n* **Performance Benchmarking**: Establish clear benchmarks to evaluate model performance against market indices. For instance, if gold underperforms relative to the XAU/USD index over a quarter, investigate the underlying assumptions of the model for potential misalignment.",
    "context": {
      "keyTerms": [
        {
          "term": "Model Recalibration",
          "definition": "The process of adjusting model parameters to improve predictive accuracy."
        },
        {
          "term": "Performance Benchmarking",
          "definition": "Comparing model performance against a relevant market index or standard."
        }
      ],
      "whyThisMatters": "Implementing corrective strategies ensures that trading models remain relevant and effective in changing market conditions.",
      "realLifeExample": "After a three-month period of underperformance, a gold trading model was recalibrated, resulting in a 15% increase in predictive accuracy during the subsequent quarter.",
      "commonMistake": "Over-reliance on a single model without considering market changes can exacerbate performance drift.",
      "quickNote": "Regularly recalibrate and diversify strategies to combat model drift.",
      "mentorText": "Think of your trading model like a car; if it starts veering off course, you need to adjust the steering to get back on track. Don’t wait until you’re in a ditch.",
      "mentorAnalogy": "Corrective strategies are like a surgeon adjusting their technique based on patient outcomes; continuous improvement is essential for success."
    },
    "taskData": null,
    "visualKey": "performance-drift-monitor"
  },
  {
    "type": "practice",
    "title": "Practical Exercises for Gold Model Monitoring",
    "label": "Gold Track",
    "body": "<!-- M9.10-gold-C7 -->\n### Core Scenario: Engaging in Model Monitoring Exercises\nPractical exercises reinforce the skills necessary for effective monitoring of gold trading models. This card provides **scenario-based tasks to apply monitoring techniques**.\n\n* **Scenario Analysis**: Given a hypothetical scenario where gold prices have fluctuated between $1,800 and $1,900 over the past month, identify potential signs of performance drift in your model. What adjustments would you propose?\n* **Data Review Exercise**: Analyze a set of historical performance data for a gold trading model that has shown a 20% decline in accuracy over the last six months. What metrics would you focus on to identify the cause of this drift?\n* **Peer Review Simulation**: Conduct a peer review of a fellow trader’s gold model performance metrics. Identify at least three areas where performance drift may be occurring and suggest corrective actions.",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Analysis",
          "definition": "Evaluating hypothetical situations to assess model performance."
        },
        {
          "term": "Peer Review",
          "definition": "A collaborative evaluation of trading models among traders."
        }
      ],
      "whyThisMatters": "Engaging in practical exercises sharpens analytical skills and enhances the ability to detect and address performance drift.",
      "realLifeExample": "During a peer review session, a trader identified that a model's reliance on outdated volatility measures was causing a 15% drop in accuracy, leading to a successful recalibration.",
      "commonMistake": "Neglecting to regularly practice model monitoring techniques can lead to skill atrophy and oversight of critical performance issues.",
      "quickNote": "Regular practice in model monitoring sharpens your analytical skills.",
      "mentorText": "Engaging in these exercises is like a pilot practicing emergency procedures; the more you rehearse, the more prepared you are for real-world scenarios.",
      "mentorAnalogy": "Practical exercises in model monitoring are akin to a chef refining their recipes; consistent practice leads to mastery and better outcomes."
    },
    "taskData": {
      "type": "choice_block",
      "question": "In a scenario where your gold trading model shows a 25% decline in predictive accuracy, what should be your first step?",
      "options": [
        {
          "id": "0",
          "text": "Reassess the model parameters and adjust based on recent market data.",
          "isCorrect": true,
          "feedback": "Correct. Reassessing model parameters is crucial to identify the root cause of the decline."
        },
        {
          "id": "1",
          "text": "Ignore the decline and continue trading as usual.",
          "isCorrect": false,
          "feedback": "Incorrect. Ignoring the decline can lead to further losses and missed opportunities for improvement."
        },
        {
          "id": "2",
          "text": "Increase the trading size to compensate for losses.",
          "isCorrect": false,
          "feedback": "Incorrect. Increasing trade size without addressing the model's accuracy can exacerbate losses."
        },
        {
          "id": "3",
          "text": "Switch to a completely different asset class without analysis.",
          "isCorrect": false,
          "feedback": "Incorrect. A hasty switch without understanding the underlying issues may lead to similar problems in a new context."
        }
      ]
    },
    "visualKey": "performance-drift-monitor"
  },
  {
    "type": "summary",
    "title": "Summary of Gold Performance Drift Monitoring Techniques",
    "label": "Gold Track",
    "body": "<!-- M9.10-gold-C8 -->\n### Core Scenario: Consolidating Monitoring Techniques\nThis card summarizes the essential techniques for monitoring performance drift in gold trading models. It serves as a **reference for effective model management**.\n\n* **Regular Performance Audits**: Conduct systematic reviews of model performance metrics at defined intervals, such as monthly or quarterly, to identify any deviations from expected outcomes.\n* **Sentiment and Market Analysis**: Continuously assess market sentiment and macroeconomic factors that may influence gold prices, ensuring models remain aligned with current conditions.\n* **Adaptive Strategy Implementation**: Be prepared to implement corrective strategies, including recalibration and diversification, when performance drift is detected to maintain model relevance and effectiveness.",
    "context": {
      "keyTerms": [
        {
          "term": "Performance Audit",
          "definition": "A systematic review of a trading model's performance metrics."
        },
        {
          "term": "Adaptive Strategy",
          "definition": "A flexible approach to trading that adjusts based on market conditions."
        }
      ],
      "whyThisMatters": "Summarizing these techniques provides a clear framework for traders to maintain model integrity and performance.",
      "realLifeExample": "A quarterly performance audit revealed a 10% drift in a gold model, prompting a recalibration that restored accuracy and profitability.",
      "commonMistake": "Failing to summarize and consolidate monitoring techniques can lead to fragmented approaches and oversight of critical performance issues.",
      "quickNote": "Regular audits and sentiment analysis are key to effective model monitoring.",
      "mentorText": "Think of this summary as your checklist before a flight; ensure all systems are go before taking off into the market.",
      "mentorAnalogy": "Summarizing monitoring techniques is like a conductor reviewing the score before a performance; every detail matters for a harmonious outcome."
    },
    "taskData": null,
    "visualKey": "performance-drift-monitor"
  }
];
