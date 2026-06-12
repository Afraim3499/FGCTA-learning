import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Crypto Setup Design for Continuous Markets",
    "label": "Crypto Track",
    "body": "### Crypto Setup Design for Continuous Markets\nDesigning trade setups in crypto markets requires strategies that accommodate continuous trading hours. This card introduces **the unique challenges of crafting setups in a 24/7 market environment**.\n\n* **Non-Stop Market Dynamics**: Crypto markets operate without breaks, unlike traditional markets. This requires traders to account for continuous liquidity and volatility shifts, especially during weekends and off-hours.\n* **Session-Less Volatility**: Without defined trading sessions, volatility can spike unpredictably. Traders must develop adaptive strategies that can handle unexpected market movements at any time.\n* **Global Participation Impact**: The global nature of crypto trading means that geopolitical events can trigger market reactions at any hour, necessitating a flexible and robust setup design.",
    "context": {
      "keyTerms": [
        {
          "term": "Continuous Markets",
          "definition": "Markets that operate 24/7 without scheduled closures."
        }
      ],
      "whyThisMatters": "Understanding continuous market dynamics is crucial for developing robust crypto trading strategies that can withstand non-stop volatility.",
      "realLifeExample": "Bitcoin's price surged over 10% on a Sunday afternoon due to unexpected regulatory news, highlighting the need for setups that account for weekend volatility.",
      "commonMistake": "Failing to adjust strategies for continuous trading, leading to missed opportunities or unexpected losses during off-hours.",
      "quickNote": "Crypto markets never sleep; your setup shouldn't either.",
      "mentorText": "In crypto, you can't rely on market closures to pause and reassess. Your setups must be ready for action at any moment.",
      "mentorAnalogy": "Think of crypto trading like managing a 24/7 emergency room. You must be prepared for any situation at any time, without the luxury of scheduled downtime."
    },
    "taskData": null,
    "visualKey": "crypto-plan-continuous-markets"
  },
  {
    "type": "concept",
    "title": "Mapping Liquidation Pools for Invalidation",
    "label": "Crypto Track",
    "body": "### Mapping Liquidation Pools for Invalidation\nLiquidation pools in perpetual futures markets provide critical data for setting invalidation points. This card details **how to use liquidation data to manage risk in crypto setups**.\n\n* **Identifying Liquidation Clusters**: Use order book data to identify clusters of liquidation orders. These clusters often indicate potential reversal zones or strong support/resistance levels.\n* **Setting Invalidation Points**: Establish invalidation points just beyond significant liquidation pools. This minimizes risk by ensuring that a setup is invalidated only if the market moves past a critical liquidity area.\n* **Analyzing Liquidation Impact**: Consider the potential market impact of large liquidation events. Sudden liquidity influxes can cause sharp price movements, which must be factored into setup design.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation Pool",
          "definition": "A concentration of orders that are automatically executed when margin requirements are breached."
        }
      ],
      "whyThisMatters": "Mapping liquidation pools helps traders set precise invalidation points, reducing the risk of premature exits and enhancing trade reliability.",
      "realLifeExample": "Ethereum's price dropped sharply after a large liquidation cluster was triggered, reinforcing the importance of setting invalidation points beyond such clusters.",
      "commonMistake": "Ignoring liquidation data, leading to setups that are invalidated prematurely by predictable market movements.",
      "quickNote": "Liquidation pools are your roadmap to setting effective invalidation points.",
      "mentorText": "Always know where the liquidation pools are. They tell you where the market might reverse or accelerate, which is crucial for setting your invalidation.",
      "mentorAnalogy": "Think of liquidation pools like pressure points in engineering. Knowing where they are helps you understand where stress might cause a system to fail."
    },
    "taskData": null,
    "visualKey": "crypto-liquidation-invalidation"
  },
  {
    "type": "concept",
    "title": "Spot-Perp Price Spread Analysis",
    "label": "Crypto Track",
    "body": "### Spot-Perp Price Spread Analysis\nAnalyzing the spread between spot and perpetual futures prices is essential for validating crypto trade setups. This card explores **the implications of price discrepancies on trading decisions**.\n\n* **Spread Divergence**: Monitor the spread between spot and perp prices. Significant divergence can indicate market inefficiencies or impending volatility, which can be exploited or avoided.\n* **Arbitrage Opportunities**: Large spreads may present arbitrage opportunities. Traders can capitalize on these by executing simultaneous trades in both markets to lock in profits.\n* **Setup Validation**: Use spread analysis to confirm or reject trade setups. A narrowing spread may validate a bullish setup, while a widening spread could signal caution.",
    "context": {
      "keyTerms": [
        {
          "term": "Spot-Perp Spread",
          "definition": "The price difference between spot market prices and perpetual futures prices."
        }
      ],
      "whyThisMatters": "Spot-perp spread analysis provides insights into market sentiment and potential arbitrage opportunities, enhancing trade setup accuracy.",
      "realLifeExample": "A sudden widening of the BTC spot-perp spread signaled an impending correction, allowing traders to adjust their setups accordingly.",
      "commonMistake": "Overlooking spread analysis, leading to trades based on incomplete market information.",
      "quickNote": "Spot-perp spreads reveal hidden market dynamics.",
      "mentorText": "Always check the spot-perp spread. It tells you if there's a hidden story in the market that you need to know.",
      "mentorAnalogy": "Think of spot-perp spreads like the gap between a car's speedometer and actual speed. If they don't match, something's off, and you need to investigate."
    },
    "taskData": null,
    "visualKey": "crypto-spot-perp-comparison"
  },
  {
    "type": "concept",
    "title": "Target Mapping with Funding Rates",
    "label": "Crypto Track",
    "body": "### Target Mapping with Funding Rates\nFunding rates offer insights into market sentiment and can be used to map targets in crypto trade setups. This card covers **techniques for aligning targets with market funding dynamics**.\n\n* **Funding Rate Analysis**: Analyze funding rates to gauge market sentiment. Positive rates suggest bullish sentiment, while negative rates indicate bearish sentiment, guiding target placement.\n* **Target Adjustment**: Use funding rate trends to adjust targets dynamically. If funding rates are rising, consider extending targets; if falling, tighten them.\n* **Risk Management**: Align stop-loss levels with funding rate shifts to manage risk effectively. Sudden changes in funding can signal market reversals, necessitating quick adjustments.",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate",
          "definition": "A periodic payment between long and short positions in perpetual futures to maintain price alignment with the spot market."
        }
      ],
      "whyThisMatters": "Funding rates reflect trader sentiment and can be used to fine-tune target placement, improving trade outcomes.",
      "realLifeExample": "During a BTC bull run, funding rates turned increasingly positive, prompting traders to extend targets to capture more upside.",
      "commonMistake": "Ignoring funding rates, leading to targets that are misaligned with current market sentiment.",
      "quickNote": "Funding rates are your compass for target mapping.",
      "mentorText": "Watch those funding rates. They tell you where the market's leaning and help you decide how far to push your targets.",
      "mentorAnalogy": "Funding rates are like wind direction for a sailor. Knowing which way they're blowing helps you set the right course."
    },
    "taskData": null,
    "visualKey": "crypto-funding-target-mapping"
  },
  {
    "type": "concept",
    "title": "Validating Crypto Trade Setups",
    "label": "Crypto Track",
    "body": "### Crypto Plan Validation Drill: Confirming Setup Criteria\nEngage in validation drills to ensure the robustness of crypto trade setups. This card emphasizes the importance of confirming setup criteria before execution.\n\n* **Setup Criteria Checklist**: Establish a checklist of criteria that must be met before executing a trade. This includes technical indicators, volume thresholds, and market conditions.\n* **Backtesting Historical Data**: Utilize historical data to backtest the setup criteria. Confirm that the setup would have been successful in past market conditions.\n* **Real-Time Scenario Testing**: Simulate real-time scenarios to test the setup under current market conditions. Adjust criteria based on live feedback to ensure robustness.",
    "context": {
      "keyTerms": [
        {
          "term": "Validation Drill",
          "definition": "A systematic process of confirming that a trade setup meets predefined criteria before execution."
        }
      ],
      "whyThisMatters": "Validating setups ensures that trades are based on solid criteria, reducing the risk of impulsive decisions.",
      "realLifeExample": "A trader plans to enter a BTCUSD trade at $30,000. The setup requires a moving average crossover and a volume spike. Both conditions are validated before execution.",
      "commonMistake": "Skipping the validation process and executing trades based on incomplete criteria.",
      "quickNote": "Always validate before you execute.",
      "mentorText": "Before you launch a trade, ensure every criterion is ticked off. This is your pre-flight checklist.",
      "mentorAnalogy": "Think of this as a pilot checking all systems before takeoff. You wouldn't fly without ensuring everything is in order."
    },
    "taskData": null,
    "visualKey": "crypto-plan-validation-drill"
  },
  {
    "type": "concept",
    "title": "Practice: Crypto Setup Application",
    "label": "Crypto Track",
    "body": "### Crypto Plan Debrief: Applying Setup Anatomy\nApply the principles of crypto setup anatomy through practical exercises. This card provides scenarios for practicing continuous market trade setups.\n\n* **Scenario-Based Exercises**: Engage in exercises that simulate real market conditions. Practice identifying and executing setups based on predefined criteria.\n* **Continuous Market Analysis**: Focus on the continuous nature of crypto markets. Learn to adapt setups to changing conditions and maintain flexibility.\n* **Feedback Loop Integration**: Implement a feedback loop to review the outcomes of practice exercises. Use insights to refine and improve setup criteria.",
    "context": {
      "keyTerms": [
        {
          "term": "Setup Anatomy",
          "definition": "The detailed structure and criteria that define a trade setup."
        }
      ],
      "whyThisMatters": "Practical application bridges the gap between theory and real-world trading, enhancing decision-making skills.",
      "realLifeExample": "A trader practices entering ETHUSD trades during high volatility periods, adjusting setups based on market feedback.",
      "commonMistake": "Failing to adapt setups to the continuous nature of crypto markets.",
      "quickNote": "Practice setups to master market dynamics.",
      "mentorText": "You need to practice setups like a musician rehearses scales. It's about building muscle memory for the market.",
      "mentorAnalogy": "Consider this like a chef refining a recipe. Each practice session is an opportunity to perfect the dish."
    },
    "taskData": null,
    "visualKey": "crypto-plan-debrief"
  },
  {
    "type": "practice",
    "title": "Debriefing Crypto Trade Setups",
    "label": "Crypto Track",
    "body": "### Crypto Plan Continuous Markets: Debriefing Techniques\nFocus on debriefing past crypto trades to enhance future setups. This card discusses techniques for analyzing outcomes and refining strategies.\n\n* **Outcome Analysis**: Review past trades to identify what worked and what didn't. Focus on both successful and unsuccessful setups.\n* **Strategy Refinement**: Use insights from debriefing to refine and adjust trading strategies. Aim for continuous improvement.\n* **Documentation and Review**: Maintain detailed records of trades and debriefing sessions. Regularly review these to track progress and identify patterns.",
    "context": {
      "keyTerms": [
        {
          "term": "Debriefing",
          "definition": "A structured review process of past trades to extract insights and improve future performance."
        }
      ],
      "whyThisMatters": "Debriefing allows traders to learn from past experiences, enhancing future decision-making and strategy development.",
      "realLifeExample": "After a series of BTCUSD trades, a trader reviews each trade's entry and exit points, noting patterns in market behavior.",
      "commonMistake": "Neglecting to document trades, leading to repeated mistakes.",
      "quickNote": "Debrief to evolve your trading strategy.",
      "mentorText": "Every trade is a lesson. Debriefing is your chance to learn and adapt.",
      "mentorAnalogy": "Think of this as a surgeon reviewing a procedure to improve future outcomes."
    },
    "taskData": {
      "type": "choice_block",
      "question": "After reviewing your past BTCUSD trades, you notice a consistent pattern of entering trades too early. What should be your next step?",
      "options": [
        {
          "id": "0",
          "text": "Adjust entry criteria to wait for confirmation signals.",
          "isCorrect": true,
          "feedback": "Correct. Adjusting entry criteria based on past patterns can improve future trade timing."
        },
        {
          "id": "1",
          "text": "Increase trade size to compensate for early entries.",
          "isCorrect": false,
          "feedback": "Incorrect. Increasing trade size without addressing the timing issue can increase risk."
        },
        {
          "id": "2",
          "text": "Ignore the pattern and continue with the current strategy.",
          "isCorrect": false,
          "feedback": "Incorrect. Ignoring patterns can lead to repeated mistakes."
        },
        {
          "id": "3",
          "text": "Focus only on successful trades and disregard the rest.",
          "isCorrect": false,
          "feedback": "Incorrect. Learning from all trades, successful or not, is crucial for improvement."
        }
      ]
    },
    "visualKey": "crypto-plan-continuous-markets"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Setup Anatomy",
    "label": "Crypto Track",
    "body": "### Crypto Liquidation Invalidation: Key Concepts Review\nSummarize the key concepts of crypto setup anatomy. This card reviews continuous market dynamics, liquidation mapping, and the importance of structured trade plans.\n\n* **Continuous Market Dynamics**: Understand the 24/7 nature of crypto markets and how it affects trade setups and execution.\n* **Liquidation Mapping**: Recognize the importance of identifying liquidation zones to anticipate potential market reversals or continuations.\n* **Structured Trade Plans**: Emphasize the necessity of having a detailed and objective trade plan to guide decision-making and execution.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation Mapping",
          "definition": "The process of identifying areas where forced selling or buying may occur, affecting price movement."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of setup anatomy enhances a trader's ability to navigate the crypto market effectively.",
      "realLifeExample": "A trader uses liquidation mapping to anticipate a potential reversal in BTCUSD at a key support level, aligning with their trade plan.",
      "commonMistake": "Overlooking the impact of continuous market dynamics on trade setups.",
      "quickNote": "Master setup anatomy for strategic trading.",
      "mentorText": "Your trade plan is your blueprint. Stick to it and adapt as the market dictates.",
      "mentorAnalogy": "Think of this as an architect ensuring every detail of a blueprint is precise before construction begins."
    },
    "taskData": null,
    "visualKey": "crypto-liquidation-invalidation"
  }
];
