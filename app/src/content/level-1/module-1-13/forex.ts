import { LessonCard } from "../../../types/curriculum";

export const forexCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Introduction to Forex Plan Scoring",
    "label": "Forex Track",
    "body": "Forex plan scoring evaluates the structural integrity of a trading plan by examining session volume fit and spread-to-range ratios. This mission brief outlines the unique aspects of scoring Forex trading plans.\n\n* **Session Volume Fit**: Assess how well your plan aligns with the expected volume trends of the trading sessions. A high score indicates strong alignment, which enhances execution probability.\n* **Spread-to-Range Ratio**: Evaluate the spread relative to the expected price range. A lower ratio suggests a more favorable trading environment, increasing the plan's quality score.",
    "context": {
      "keyTerms": [
        {
          "term": "Session Volume Fit",
          "definition": "The degree to which a trading plan aligns with the expected volume trends of a trading session."
        },
        {
          "term": "Spread-to-Range Ratio",
          "definition": "A metric comparing the spread of a currency pair to its expected price range."
        }
      ],
      "whyThisMatters": "Scoring ensures that your trading plan is robust and aligned with market conditions, reducing the risk of execution failure.",
      "realLifeExample": "A plan for EURUSD during the London session with a spread-to-range ratio of 5% scores higher than one with a 15% ratio.",
      "commonMistake": "Ignoring session volume trends and focusing solely on technical patterns.",
      "quickNote": "Score your plan to ensure it aligns with session volume and spread conditions.",
      "mentorText": "Think of plan scoring as a pre-flight checklist. You need to ensure all systems are go before takeoff.",
      "mentorAnalogy": "Just as an engineer tests structural integrity before a bridge opens, you must assess your plan's integrity before trading."
    },
    "taskData": null,
    "visualKey": "forex-plan-score-sheet"
  },
  {
    "type": "concept",
    "title": "Scoring Session Volume Fit",
    "label": "Forex Track",
    "body": "### Scoring Session Volume Fit\nAligning your Forex plan with session volume trends is critical for execution success. This card details how to evaluate this alignment.\n\n* **Volume Trend Analysis**: Identify the typical volume patterns for the session in which you plan to trade. A plan aligned with peak volume periods scores higher.\n* **Execution Probability**: Plans that align with high-volume periods have a higher probability of successful execution due to increased liquidity and reduced slippage.\n* **Volume Divergence Penalty**: If your plan diverges from expected volume trends, apply a penalty to the score, as this increases the risk of poor execution.",
    "context": {
      "keyTerms": [
        {
          "term": "Volume Trend Analysis",
          "definition": "The process of identifying typical volume patterns for a trading session."
        },
        {
          "term": "Execution Probability",
          "definition": "The likelihood of a trading plan being successfully executed based on market conditions."
        }
      ],
      "whyThisMatters": "Volume alignment ensures that your trades occur in liquid markets, minimizing slippage and maximizing execution efficiency.",
      "realLifeExample": "A GBPUSD plan during the New York session aligns with peak volume, scoring higher than a plan during low-volume hours.",
      "commonMistake": "Overlooking volume trends and executing plans during low-liquidity periods.",
      "quickNote": "Align your plan with session volume for higher execution success.",
      "mentorText": "Volume fit is like timing your run to catch a train. You need to be there when the train arrives, not after it leaves.",
      "mentorAnalogy": "A chef plans a menu based on ingredient availability. Similarly, align your trading plan with market volume."
    },
    "taskData": null,
    "visualKey": "forex-plan-score-sheet"
  },
  {
    "type": "concept",
    "title": "Analyzing Spread-to-Range Ratios",
    "label": "Forex Track",
    "body": "### Analyzing Spread-to-Range Ratios\nSpread-to-range ratios are critical for assessing the viability of a Forex plan. This card explains how to score your plan based on this metric.\n\n* **Ratio Calculation**: Calculate the spread as a percentage of the expected price range. A lower percentage indicates a more favorable trading environment.\n* **Impact on R:R Expectancy**: A high spread-to-range ratio can erode the risk-to-reward expectancy, reducing the plan's quality score.\n* **Threshold Criteria**: Set specific threshold criteria for acceptable ratios. Plans exceeding these thresholds should be revised or rejected.",
    "context": {
      "keyTerms": [
        {
          "term": "Ratio Calculation",
          "definition": "The process of determining the spread as a percentage of the expected price range."
        },
        {
          "term": "R:R Expectancy",
          "definition": "The expected risk-to-reward ratio of a trading plan."
        }
      ],
      "whyThisMatters": "Understanding spread-to-range ratios helps you avoid plans with poor risk-to-reward potential, preserving capital.",
      "realLifeExample": "A USDJPY plan with a 3% spread-to-range ratio scores higher than one with a 12% ratio during the Tokyo session.",
      "commonMistake": "Ignoring high spreads during volatile markets, leading to unfavorable trades.",
      "quickNote": "Low spread-to-range ratios enhance plan viability.",
      "mentorText": "Think of spread-to-range ratios as fuel efficiency in a car. High efficiency means you go further with less fuel.",
      "mentorAnalogy": "An architect ensures that the cost of materials doesn't exceed the budget, just as you ensure spreads don't erode your trade's potential."
    },
    "taskData": null,
    "visualKey": "forex-plan-score-sheet"
  },
  {
    "type": "concept",
    "title": "DXY Correlation Alignment",
    "label": "Forex Track",
    "body": "### DXY Correlation Alignment\nDXY correlation plays a crucial role in Forex plan scoring. This card explores how to assess your plan's alignment with this key market indicator.\n\n* **Correlation Analysis**: Evaluate the correlation between your target currency pair and the DXY. A strong negative correlation can enhance plan confidence.\n* **Market Sentiment Confirmation**: Use DXY movements to confirm market sentiment. A plan aligned with DXY trends scores higher due to increased directional confidence.\n* **Adjustment Protocol**: If DXY correlation contradicts your plan, consider adjustments or reevaluation to align with broader market trends.",
    "context": {
      "keyTerms": [
        {
          "term": "DXY",
          "definition": "The U.S. Dollar Index, measuring the value of the USD against a basket of foreign currencies."
        },
        {
          "term": "Correlation Analysis",
          "definition": "The process of evaluating the relationship between two financial instruments."
        }
      ],
      "whyThisMatters": "Aligning with DXY trends ensures your plan is in sync with broader market movements, enhancing directional accuracy.",
      "realLifeExample": "A EURUSD plan aligns with a declining DXY, increasing confidence in a bullish setup.",
      "commonMistake": "Ignoring DXY trends, leading to plans that conflict with broader market movements.",
      "quickNote": "Align with DXY for enhanced market confidence.",
      "mentorText": "DXY correlation is like checking the weather before a flight. It gives you a sense of the broader conditions you'll face.",
      "mentorAnalogy": "A sailor checks ocean currents before setting sail, just as you check DXY trends before executing a Forex plan."
    },
    "taskData": null,
    "visualKey": "forex-plan-score-sheet"
  },
  {
    "type": "concept",
    "title": "Adapting Plans to Volatility",
    "label": "Forex Track",
    "body": "### Adapting Plans to Volatility\nForex market volatility impacts the reliability of trading plans. This card covers **how to adjust your plan scores to account for current volatility conditions**.\n\n* **Volatility Assessment**: Use the Average True Range (ATR) to gauge current volatility. Plans should be adjusted if ATR exceeds historical norms by more than 20%.\n* **Risk Adjustment**: Increase stop-loss distances proportionally to volatility spikes to maintain a consistent risk profile. For example, if volatility doubles, consider doubling your stop-loss range.\n* **Entry Timing**: Avoid entering trades during high-impact news events unless volatility is factored into the plan score. Adjust entry criteria to reflect increased price swings.",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility",
          "definition": "The degree of variation in trading prices over a period."
        },
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical indicator that measures market volatility."
        }
      ],
      "whyThisMatters": "Volatility can drastically alter the effectiveness of a trading plan, requiring adjustments to maintain plan integrity.",
      "realLifeExample": "During a EURUSD session with an ATR spike from 50 to 100 pips, a trader adjusts their stop-loss from 20 to 40 pips to accommodate increased volatility.",
      "commonMistake": "Failing to adjust plan parameters for increased volatility, leading to premature stop-outs.",
      "quickNote": "Volatility demands dynamic plan adjustments.",
      "mentorText": "When volatility spikes, you can't just stick to your original plan. Adjust your stop-loss and entry points to reflect the new market conditions.",
      "mentorAnalogy": "Think of it like a pilot adjusting flight altitude during turbulence to ensure a smooth flight."
    },
    "taskData": null,
    "visualKey": "forex-plan-score-sheet"
  },
  {
    "type": "concept",
    "title": "Evaluating Currency Pair Dynamics",
    "label": "Forex Track",
    "body": "### Evaluating Currency Pair Dynamics\nDifferent currency pairs exhibit unique behaviors. This card explains **how to incorporate these dynamics into your plan scoring**.\n\n* **Pair Volatility Profiles**: Recognize that pairs like GBPJPY are inherently more volatile than EURUSD. Adjust scoring criteria to account for these differences.\n* **Correlation Considerations**: Evaluate how correlated pairs might impact your plan. High correlation can amplify risk, requiring a lower plan score threshold.\n* **Liquidity and Spread Analysis**: Consider the typical spread and liquidity of the pair. Wider spreads in exotic pairs necessitate stricter entry criteria to ensure plan viability.",
    "context": {
      "keyTerms": [
        {
          "term": "Currency Pair Dynamics",
          "definition": "The unique characteristics and behaviors of different currency pairs."
        },
        {
          "term": "Correlation",
          "definition": "A statistical measure of how two securities move in relation to each other."
        }
      ],
      "whyThisMatters": "Understanding pair-specific dynamics allows for more accurate and tailored plan scoring, enhancing trade execution.",
      "realLifeExample": "A trader scores a plan for GBPJPY lower due to its higher volatility compared to EURUSD, adjusting risk parameters accordingly.",
      "commonMistake": "Applying a one-size-fits-all scoring system to all currency pairs, ignoring their unique characteristics.",
      "quickNote": "Tailor your plan scoring to each pair's unique dynamics.",
      "mentorText": "Each currency pair is like a different vehicle. You wouldn't drive a sports car the same way you drive a truck. Adjust your plan accordingly.",
      "mentorAnalogy": "An architect designs different structures based on the environment—just as you must adapt your plans to each currency pair's dynamics."
    },
    "taskData": null,
    "visualKey": "forex-plan-score-sheet"
  },
  {
    "type": "practice",
    "title": "Forex Plan Scoring Practice",
    "label": "Forex Track",
    "body": "### Forex Plan Scoring Practice\nApply your Forex plan scoring techniques in practice scenarios. Test your ability to accurately assess and refine Forex trading plans.",
    "context": {
      "keyTerms": [],
      "whyThisMatters": "Practical application of scoring techniques ensures traders can effectively assess and adjust their plans in real market conditions.",
      "realLifeExample": "A trader reviews a plan for USDJPY during a high-volatility session, adjusting the score based on ATR and spread analysis.",
      "commonMistake": "Overlooking the need to adjust scores based on current market conditions, leading to ineffective plans.",
      "quickNote": "Practice scoring to refine your plan assessment skills.",
      "mentorText": "You need to practice scoring your plans in different scenarios to build confidence and precision in your trading decisions.",
      "mentorAnalogy": "Just as a pilot practices flight simulations to prepare for real-life conditions, you must practice scoring to handle live market dynamics."
    },
    "taskData": {
      "type": "choice_block",
      "question": "Given a scenario where EURUSD's ATR has increased by 30% and the spread has widened, how should you adjust your plan score?",
      "options": [
        {
          "id": "0",
          "text": "Lower the plan score due to increased risk.",
          "isCorrect": true,
          "feedback": "Correct. Increased ATR and spread indicate higher risk, requiring a lower score."
        },
        {
          "id": "1",
          "text": "Maintain the same plan score.",
          "isCorrect": false,
          "feedback": "Incorrect. Ignoring volatility changes can lead to ineffective plans."
        },
        {
          "id": "2",
          "text": "Increase the plan score to account for potential higher gains.",
          "isCorrect": false,
          "feedback": "Incorrect. Higher volatility increases risk, not necessarily gains."
        },
        {
          "id": "3",
          "text": "Adjust the score based on personal risk tolerance only.",
          "isCorrect": false,
          "feedback": "Incorrect. Objective market conditions should guide score adjustments, not just personal tolerance."
        }
      ]
    },
    "visualKey": "forex-plan-score-sheet"
  },
  {
    "type": "summary",
    "title": "Summary of Forex Plan Scoring",
    "label": "Forex Track",
    "body": "### Summary of Forex Plan Scoring\nReview the key elements of scoring Forex trading plans. Reflect on how these techniques can improve your plan's structural integrity and compliance.\n\n* **Volatility Adaptation**: Adjust plans dynamically based on current market volatility to maintain effectiveness.\n* **Currency Pair Considerations**: Tailor scoring to the unique dynamics of each currency pair, accounting for volatility, correlation, and liquidity.\n* **Practical Application**: Regular practice in scoring plans helps refine assessment skills and enhances decision-making.",
    "context": {
      "keyTerms": [],
      "whyThisMatters": "A comprehensive understanding of plan scoring ensures traders can adapt effectively to market changes, maintaining plan integrity.",
      "realLifeExample": "A trader consistently adjusts their plan scores for EURUSD and GBPJPY based on volatility and pair dynamics, leading to more robust trading decisions.",
      "commonMistake": "Neglecting to review and adapt plan scores regularly, resulting in outdated and ineffective strategies.",
      "quickNote": "Consistent plan scoring enhances trading discipline and adaptability.",
      "mentorText": "Reflect on your plan scoring regularly. It's like maintaining a well-oiled machine; it keeps your trading strategy running smoothly.",
      "mentorAnalogy": "Just as a chef tastes and adjusts seasoning throughout cooking, you must continually assess and adjust your plan scores for optimal results."
    },
    "taskData": null,
    "visualKey": "forex-plan-score-sheet"
  }
];
