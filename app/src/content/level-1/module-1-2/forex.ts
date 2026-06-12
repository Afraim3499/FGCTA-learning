import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Forex Mixed Pressure Filter Introduction",
    "label": "Forex Track",
    "body": "Mixed pressure filters are essential for identifying low-probability setups in Forex trading. This card introduces the foundational concept of analyzing mixed pressure scenarios to enhance plan eligibility.\n\n* **Definition of Mixed Pressure**: Mixed pressure occurs when conflicting signals arise from different market forces, such as session overlaps or diverging currency pair movements.\n* **Importance of Filtering**: By filtering out setups with mixed pressure, traders can avoid entering trades with low probability of success, thereby improving overall trading performance.\n* **Initial Identification**: Recognize mixed pressure by observing inconsistent price actions across correlated pairs or during session transitions, which often indicate market indecision.",
    "context": {
      "keyTerms": [
        {
          "term": "Mixed Pressure",
          "definition": "Conflicting signals from different market forces, leading to low-probability setups."
        }
      ],
      "whyThisMatters": "Filtering mixed pressure setups reduces the likelihood of entering trades with conflicting signals, enhancing decision-making clarity.",
      "realLifeExample": "During the overlap of the London and New York sessions, EURUSD shows bullish momentum while GBPUSD displays bearish pressure, indicating mixed pressure.",
      "commonMistake": "Traders often ignore mixed pressure signals, leading to trades with unclear directional bias.",
      "quickNote": "Mixed pressure equals market indecision; filter it out.",
      "mentorText": "Think of mixed pressure like driving in fog. You can't see clearly, so it's safer to wait for clearer conditions.",
      "mentorAnalogy": "Like a pilot avoiding turbulent weather, traders must steer clear of mixed pressure to ensure a smooth trading journey."
    },
    "visualKey": "forex-mixed-pressure-filter",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Currency Correlation Filters",
    "label": "Forex Track",
    "body": "### Currency Correlation Filters: Enhancing Plan Eligibility\nCurrency correlations can be leveraged to verify evidence thresholds, filtering out low-probability Forex trading plans.\n\n* **Correlation Coefficient Analysis**: Use correlation coefficients to assess the relationship between currency pairs. A strong positive or negative correlation can confirm directional bias, while weak correlations suggest mixed pressure.\n* **Cross-Verification**: Validate your trading plan by checking if correlated pairs exhibit similar price actions. Divergence among correlated pairs may indicate unreliable setups.\n* **Dynamic Adjustments**: Regularly update correlation data to reflect current market conditions, as correlations can shift over time, affecting plan reliability.",
    "context": {
      "keyTerms": [
        {
          "term": "Correlation Coefficient",
          "definition": "A statistical measure of how two securities move in relation to each other."
        }
      ],
      "whyThisMatters": "Using currency correlations helps traders confirm or reject setups, ensuring alignment with broader market trends.",
      "realLifeExample": "If EURUSD and GBPUSD have a correlation coefficient of 0.85, a bullish setup on EURUSD should ideally be mirrored by GBPUSD for confirmation.",
      "commonMistake": "Failing to account for changing correlations, leading to reliance on outdated data.",
      "quickNote": "Correlations confirm or reject setups; use them wisely.",
      "mentorText": "Correlations are like a second opinion in trading. If two doctors (currencies) agree, your diagnosis (trade) is more likely correct.",
      "mentorAnalogy": "Like a detective cross-referencing witness statements, traders use correlations to verify the reliability of their trading plans."
    },
    "visualKey": "forex-mixed-pressure-filter",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Session Volatility Filters",
    "label": "Forex Track",
    "body": "### Session Volatility Filters: Refining Trade Plans\nSession volatility patterns provide critical insights for filtering Forex trading plans, ensuring alignment with market dynamics.\n\n* **Volatility Profile Analysis**: Assess the typical volatility profile of each trading session. High volatility sessions (e.g., London) may offer more reliable setups than low volatility periods (e.g., Asian session).\n* **Volatility Thresholds**: Establish specific volatility thresholds to determine plan eligibility. Plans should be filtered out if the expected volatility does not meet these thresholds.\n* **Session Transition Monitoring**: Monitor transitions between sessions, as these can introduce volatility spikes or drops, affecting setup reliability.",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility Profile",
          "definition": "The typical range of price movement within a specific trading session."
        }
      ],
      "whyThisMatters": "Filtering based on session volatility ensures that trades align with periods of expected market activity, reducing noise and false signals.",
      "realLifeExample": "During the London session, GBPUSD often exhibits higher volatility. A trading plan should account for this by setting appropriate stop-loss and take-profit levels.",
      "commonMistake": "Ignoring session-specific volatility, leading to inappropriate risk management.",
      "quickNote": "Volatility dictates reliability; align your plans accordingly.",
      "mentorText": "Think of session volatility like ocean tides. You want to sail (trade) when the tide is favorable, not when it's unpredictable.",
      "mentorAnalogy": "Just as a sailor navigates based on tide charts, traders must plan based on session volatility to avoid getting caught in market lulls."
    },
    "visualKey": "forex-mixed-pressure-filter",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Filtering Based on News Impact",
    "label": "Forex Track",
    "body": "### Filtering Based on News Impact: Assessing Plan Eligibility\nEconomic news impacts currency pairs significantly, necessitating a filter to assess plan eligibility based on potential news effects.\n\n* **News Calendar Analysis**: Utilize economic calendars to identify upcoming news events that could affect your trading plan. High-impact news should prompt a reassessment of plan viability.\n* **Volatility Anticipation**: Anticipate increased volatility around major news releases. Plans should be filtered if they cannot accommodate potential volatility spikes.\n* **Post-News Reaction Monitoring**: Observe market reactions post-news release to determine if the initial plan remains valid or requires adjustment.",
    "context": {
      "keyTerms": [
        {
          "term": "Economic Calendar",
          "definition": "A schedule of upcoming economic events and data releases that may impact financial markets."
        }
      ],
      "whyThisMatters": "Filtering based on news impact helps traders avoid unexpected volatility and align their plans with market-moving events.",
      "realLifeExample": "Before a major ECB announcement, EURUSD may experience increased volatility. A trading plan should account for this by adjusting risk parameters.",
      "commonMistake": "Overlooking the timing of news releases, leading to unexpected market moves.",
      "quickNote": "News shapes volatility; plan with foresight.",
      "mentorText": "News events are like weather forecasts. You wouldn't go hiking without checking the weather; don't trade without checking the news.",
      "mentorAnalogy": "Just as a chef checks for seasonal ingredients before planning a menu, traders must consider upcoming news events before executing trades."
    },
    "visualKey": "forex-mixed-pressure-filter",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Pip Value Considerations in Filters",
    "label": "Forex Track",
    "body": "### Forex Eligibility: Pip Value Considerations in Filters\nPip values directly affect the potential risk and reward of a Forex trade. This card explains **how pip value analysis is integrated into evidence threshold verification for trading plans**.\n\n* **Pip Value Calculation**: Determine the pip value for the currency pair you are trading. For example, in EURUSD, a pip is typically worth $10 per standard lot. This value impacts the financial outcome of a trade.\n* **Risk Assessment**: Use pip value to calculate the potential loss or gain. If the pip value results in a risk that exceeds your predefined threshold, the setup should be filtered out.\n* **Reward Expectancy**: Ensure that the pip value aligns with your reward-to-risk ratio. A setup is only viable if the expected reward, calculated using pip value, justifies the risk taken.",
    "context": {
      "keyTerms": [
        {
          "term": "Pip Value",
          "definition": "The monetary value of a one-pip movement in a currency pair."
        }
      ],
      "whyThisMatters": "Pip value analysis ensures that trades are financially viable and align with risk management protocols.",
      "realLifeExample": "Trading GBPUSD with a pip value of $12 per standard lot. If a setup risks 50 pips, the potential loss is $600, which may exceed your risk tolerance.",
      "commonMistake": "Ignoring pip value can lead to underestimating risk, resulting in unexpected losses.",
      "quickNote": "Always calculate pip value to verify financial viability.",
      "mentorText": "When assessing a trade, don't just look at the chart. Calculate the pip value to ensure the trade aligns with your risk management rules.",
      "mentorAnalogy": "Think of pip value like the weight of cargo on an airplane. Just as pilots must ensure the plane can handle the weight, traders must ensure their account can handle the pip value impact."
    },
    "taskData": null,
    "visualKey": "forex-mixed-pressure-filter"
  },
  {
    "type": "concept",
    "title": "Average Daily Range Filters",
    "label": "Forex Track",
    "body": "### Forex Eligibility: Average Daily Range Filters\nThe Average Daily Range (ADR) provides insight into typical price movement. This card details **how ADR is used to filter trading plans based on expected volatility**.\n\n* **ADR Calculation**: Calculate the ADR by averaging the daily high-low range over a set period, typically 14 days. This metric helps gauge potential price movement.\n* **Volatility Assessment**: Compare the current setup's expected range with the ADR. If the setup's target range exceeds the ADR significantly, it may indicate unrealistic expectations.\n* **Setup Viability**: Use ADR to determine if the market conditions support the setup. A setup is viable if the expected movement falls within a reasonable percentage of the ADR.",
    "context": {
      "keyTerms": [
        {
          "term": "Average Daily Range (ADR)",
          "definition": "The average range between the high and low prices over a specified period."
        }
      ],
      "whyThisMatters": "ADR helps traders set realistic expectations for price movement, filtering out setups with improbable targets.",
      "realLifeExample": "EURUSD has an ADR of 80 pips. A setup targeting 150 pips may be filtered out as overly ambitious unless supported by extraordinary market conditions.",
      "commonMistake": "Failing to consider ADR can lead to setting unrealistic targets, increasing the likelihood of trade failure.",
      "quickNote": "Use ADR to align trade expectations with market reality.",
      "mentorText": "Don't chase dreams in the market. Use ADR to ground your expectations in reality, ensuring your targets are achievable.",
      "mentorAnalogy": "ADR is like a weather forecast for pilots. Just as pilots adjust flight plans based on expected weather, traders adjust setups based on expected price movement."
    },
    "taskData": null,
    "visualKey": "forex-mixed-pressure-filter"
  },
  {
    "type": "practice",
    "title": "Applying Forex Filters in Practice",
    "label": "Forex Track",
    "body": "### Forex Eligibility: Applying Forex Filters in Practice\nApplying theoretical knowledge to real-world scenarios is crucial. This card provides **practical exercises to apply Forex-specific filters to trading plans**.\n\n* **Scenario Analysis**: Given a set of market conditions, determine if a trade setup meets the pip value and ADR criteria.\n* **Filter Application**: Practice filtering out setups that do not meet evidence thresholds using pip value and ADR data.\n* **Decision Justification**: Justify your decision to accept or reject a setup based on the applied filters.",
    "context": {
      "keyTerms": [
        {
          "term": "Evidence Threshold",
          "definition": "The criteria that a trading plan must meet to be considered viable."
        }
      ],
      "whyThisMatters": "Practical application solidifies understanding and ensures traders can effectively filter setups in live markets.",
      "realLifeExample": "Given a setup on USDJPY with a pip value of $9 and an ADR of 70 pips, decide if a 100-pip target is realistic.",
      "commonMistake": "Overlooking practical exercises can lead to theoretical understanding without real-world application skills.",
      "quickNote": "Practice makes perfect in applying Forex filters.",
      "mentorText": "Theory is only half the battle. You must practice applying these filters to truly master them.",
      "mentorAnalogy": "Like a surgeon practicing on simulations before real surgery, traders must practice filtering setups before live trading."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You are considering a trade on EURUSD with a pip value of $10 and an ADR of 90 pips. The setup targets a 120-pip move. Is this setup viable?",
      "options": [
        {
          "id": "0",
          "text": "No, the target exceeds the ADR significantly.",
          "isCorrect": true,
          "feedback": "Correct. The target is unrealistic given the ADR, indicating the setup may not be viable."
        },
        {
          "id": "1",
          "text": "Yes, the target is within a reasonable range of the ADR.",
          "isCorrect": false,
          "feedback": "Incorrect. The target exceeds the ADR by a large margin, making it unlikely to be achieved."
        },
        {
          "id": "2",
          "text": "Yes, as long as the market is volatile.",
          "isCorrect": false,
          "feedback": "Incorrect. While volatility can help, relying on it without evidence is speculative."
        },
        {
          "id": "3",
          "text": "No, because the pip value is too high.",
          "isCorrect": false,
          "feedback": "Incorrect. The pip value affects financial risk, not the viability of the target range."
        }
      ]
    },
    "visualKey": "forex-mixed-pressure-filter"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Plan Filters",
    "label": "Forex Track",
    "body": "### Forex Eligibility: Summary of Forex Plan Filters\nReviewing the key concepts of Forex plan eligibility filters is essential for effective trading. This card summarizes **strategies for filtering low-probability Forex configurations**.\n\n* **Pip Value Analysis**: Ensure that pip values align with risk management rules, filtering out setups that pose excessive financial risk.\n* **ADR Utilization**: Use the Average Daily Range to set realistic expectations for price movements, filtering out setups with improbable targets.\n* **Evidence Threshold Verification**: Consistently apply these filters to verify that setups meet the necessary criteria before execution.",
    "context": {
      "keyTerms": [
        {
          "term": "Plan Eligibility Filter",
          "definition": "A set of criteria used to determine if a trading plan is viable."
        }
      ],
      "whyThisMatters": "A systematic approach to filtering ensures that only high-probability setups are considered, enhancing trading performance.",
      "realLifeExample": "A trader consistently applies pip value and ADR filters, leading to a higher win rate by avoiding setups with unrealistic targets.",
      "commonMistake": "Neglecting to apply filters consistently can lead to taking low-probability trades.",
      "quickNote": "Consistent filter application enhances trading outcomes.",
      "mentorText": "Remember, filters are your first line of defense against low-probability trades. Use them wisely and consistently.",
      "mentorAnalogy": "Think of filters as a pre-flight checklist for pilots. Just as pilots ensure everything is in order before takeoff, traders must ensure setups meet all criteria before execution."
    },
    "taskData": null,
    "visualKey": "forex-mixed-pressure-filter"
  }
];
