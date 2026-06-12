import { LessonCard } from "../../../types/curriculum";

export const goldCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Introduction to Gold Plan Scoring",
    "label": "Gold Track",
    "body": "Gold trading plans require rigorous scoring to ensure structural integrity. **This mission brief outlines the criteria for evaluating plan quality, focusing on volatility/ATR fit and US yield alignment.**\n\n* **Volatility/ATR Fit**: Plans must align with the current Average True Range (ATR) to ensure realistic target setting. A mismatch can lead to over-ambitious or underwhelming objectives.\n* **US Yield Alignment**: Gold's inverse relationship with US yields necessitates tracking yield movements. Plans should account for yield trends to avoid misaligned entries.\n* **Plan Quality Score**: A composite score derived from these criteria helps traders assess the robustness of their strategy before execution.",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility/ATR Fit",
          "definition": "The alignment of a trading plan with the current market volatility as measured by the Average True Range."
        },
        {
          "term": "US Yield Alignment",
          "definition": "The consideration of US Treasury yield movements in the formulation of a gold trading plan."
        }
      ],
      "whyThisMatters": "A structured scoring system ensures that gold trading plans are robust and aligned with key market conditions before execution.",
      "realLifeExample": "A trader plans a gold trade with a target of $50 movement, but the ATR is only $25. Adjusting the plan to fit the ATR increases the likelihood of success.",
      "commonMistake": "Ignoring US yield trends when planning gold trades, leading to misaligned strategies.",
      "quickNote": "Score your plan before you trade; align with volatility and yields.",
      "mentorText": "Before you launch a gold trade, ensure your plan is structurally sound. This means checking that your targets fit the current volatility and that you're not fighting the tide of US yields.",
      "mentorAnalogy": "Think of your trading plan like a building blueprint. Just as architects must consider environmental factors like wind and load, you must account for volatility and yields."
    },
    "taskData": null,
    "visualKey": "gold-plan-score-sheet"
  },
  {
    "type": "concept",
    "title": "Scoring Volatility/ATR Fit",
    "label": "Gold Track",
    "body": "### Scoring Volatility/ATR Fit\nEvaluating a gold plan's fit with current volatility and ATR metrics is essential for realistic target setting.\n\n* **ATR Alignment**: Ensure your target price movement does not exceed the current ATR. A plan that aims beyond the ATR is likely unrealistic and prone to failure.\n* **Volatility Context**: Analyze recent volatility patterns to confirm that your plan's risk parameters are appropriate. Sudden volatility spikes require plan adjustments.\n* **Score Integration**: Incorporate ATR fit into your overall plan score. A poor fit should significantly lower the plan's viability rating.",
    "context": {
      "keyTerms": [
        {
          "term": "ATR",
          "definition": "Average True Range, a technical analysis indicator that measures market volatility."
        }
      ],
      "whyThisMatters": "Aligning your plan with the ATR ensures that your targets are achievable within the current market conditions.",
      "realLifeExample": "If gold's ATR is $30 and your plan targets a $60 move, your plan is over-ambitious and likely to fail.",
      "commonMistake": "Setting targets that exceed the ATR, leading to unrealistic expectations.",
      "quickNote": "Align targets with ATR for realistic execution.",
      "mentorText": "You wouldn't set sail without knowing the sea's conditions. Likewise, don't set a target without knowing the market's volatility.",
      "mentorAnalogy": "A pilot wouldn't plan a flight path without checking the weather. Similarly, your trading plan should account for market 'weather'—the ATR."
    },
    "taskData": null,
    "visualKey": "gold-plan-score-sheet"
  },
  {
    "type": "concept",
    "title": "Assessing US Yield Alignment",
    "label": "Gold Track",
    "body": "### Assessing US Yield Alignment\nUS yield movements significantly impact gold prices, making yield alignment a critical component of plan scoring.\n\n* **Yield Trend Analysis**: Monitor US Treasury yields for trends that could inversely affect gold prices. Rising yields typically pressure gold downwards.\n* **Plan Adjustment**: If yields are trending upwards, consider reducing position sizes or tightening stops to mitigate risk.\n* **Score Impact**: A plan misaligned with yield trends should receive a lower score, indicating higher risk and potential for adjustment.",
    "context": {
      "keyTerms": [
        {
          "term": "US Treasury Yields",
          "definition": "Interest rates on US government debt instruments, influencing economic conditions and asset prices."
        }
      ],
      "whyThisMatters": "Gold's inverse relationship with US yields requires traders to incorporate yield trends into their plans to avoid adverse market moves.",
      "realLifeExample": "US yields rise sharply, causing gold prices to drop. A trader aligned with this trend reduces their position size, avoiding significant losses.",
      "commonMistake": "Ignoring yield trends, leading to unexpected losses when gold prices react inversely.",
      "quickNote": "Align with yield trends to protect your plan.",
      "mentorText": "Always check the yield environment before executing a gold trade. If yields are climbing, gold might be under pressure, and your plan should reflect that.",
      "mentorAnalogy": "Just as a sailor checks the tide before setting sail, a trader must check yield trends before executing a gold trade."
    },
    "taskData": null,
    "visualKey": "gold-plan-score-sheet"
  },
  {
    "type": "concept",
    "title": "Evaluating Wick Buffer Safety",
    "label": "Gold Track",
    "body": "### Evaluating Wick Buffer Safety\nWick buffer safety is crucial for protecting against unexpected market spikes in gold trading.\n\n* **Buffer Calculation**: Calculate a buffer zone beyond recent wicks to accommodate potential volatility spikes. This prevents premature stop-outs.\n* **Historical Analysis**: Review historical wick patterns to set appropriate buffer sizes. Larger wicks in recent sessions suggest the need for wider buffers.\n* **Score Adjustment**: Plans lacking adequate wick buffers should be downgraded in score, indicating higher susceptibility to market noise.",
    "context": {
      "keyTerms": [
        {
          "term": "Wick Buffer",
          "definition": "A safety margin added to stop-loss levels to account for market noise and volatility spikes."
        }
      ],
      "whyThisMatters": "Wick buffers protect trades from being prematurely stopped out by short-term volatility spikes.",
      "realLifeExample": "A trader sets a stop-loss just above a recent wick, but a sudden spike triggers the stop before reversing. A buffer could have prevented this.",
      "commonMistake": "Setting stops too close to recent wicks, leading to unnecessary stop-outs.",
      "quickNote": "Use wick buffers to shield against spikes.",
      "mentorText": "Think of wick buffers as your safety net. Without them, you're leaving your trade exposed to the market's unpredictable spikes.",
      "mentorAnalogy": "A surgeon uses a sterile field to prevent infection. Similarly, a trader uses wick buffers to prevent 'infection' from market noise."
    },
    "taskData": null,
    "visualKey": "gold-plan-score-sheet"
  },
  {
    "type": "concept",
    "title": "Adapting to Gold Market Cycles",
    "label": "Gold Track",
    "body": "### Gold Plan Scoring: Adapting to Market Cycles\nGold market cycles fluctuate between expansion and contraction phases. This card covers **how to adjust your plan scores to align with these cycles effectively**.\n\n* **Cycle Identification**: Use historical data to identify current market phase. Expansion phases often show increased volatility, while contraction phases exhibit tighter ranges.\n* **Volatility Adjustment**: During expansion phases, increase the weight of volatility measures in your plan score. In contraction phases, focus on precision and tighter stop-loss parameters.\n* **Liquidity Consideration**: Assess liquidity conditions as they vary across cycles. High liquidity during expansions can support larger position sizes, whereas contractions may require reduced exposure.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Cycle",
          "definition": "A period during which a market or asset experiences a distinct phase of expansion or contraction."
        }
      ],
      "whyThisMatters": "Adapting to market cycles ensures your trading plan remains robust and effective, regardless of market conditions.",
      "realLifeExample": "During a 2022 gold market expansion, the price increased from $1,800 to $2,050 over three months. Traders adjusted their plans to capitalize on increased volatility.",
      "commonMistake": "Failing to adjust plan parameters according to the current market cycle, leading to suboptimal performance.",
      "quickNote": "Cycle awareness enhances plan adaptability.",
      "mentorText": "Think of market cycles like seasons. You wouldn't wear the same clothes in summer as in winter, and similarly, your plan must adapt to the market's 'weather'.",
      "mentorAnalogy": "A ship captain adjusts sails and course based on the sea's conditions. Similarly, traders must adjust their plans based on market cycles."
    },
    "taskData": null,
    "visualKey": "gold-plan-score-sheet"
  },
  {
    "type": "concept",
    "title": "Incorporating Geopolitical Impact",
    "label": "Gold Track",
    "body": "### Gold Plan Scoring: Geopolitical Impact\nGeopolitical events can significantly influence gold prices. This card explores **how to incorporate these factors into your plan scoring**.\n\n* **Event Analysis**: Evaluate geopolitical events for potential market impact. Wars, elections, and trade agreements can cause significant price movements.\n* **Risk Assessment**: Increase the risk weight in your plan score during high-impact geopolitical periods. This includes adjusting stop-loss levels and position sizes.\n* **News Monitoring**: Implement a system for real-time news monitoring to quickly adapt your plan as geopolitical situations evolve.",
    "context": {
      "keyTerms": [
        {
          "term": "Geopolitical Event",
          "definition": "An event involving political, economic, or military actions that can impact global markets."
        }
      ],
      "whyThisMatters": "Geopolitical events can cause abrupt market shifts, making it crucial to factor them into your trading plan.",
      "realLifeExample": "In 2020, tensions between the US and Iran caused gold prices to spike from $1,550 to $1,610 in a single week.",
      "commonMistake": "Ignoring geopolitical factors, leading to unexpected market exposure and losses.",
      "quickNote": "Geopolitical awareness guards against unexpected volatility.",
      "mentorText": "Think of geopolitical events as sudden storms. You need to be ready to adjust your sails quickly to avoid capsizing.",
      "mentorAnalogy": "A pilot monitors weather patterns to avoid turbulence. Similarly, traders must track geopolitical events to navigate market volatility."
    },
    "taskData": null,
    "visualKey": "gold-plan-score-sheet"
  },
  {
    "type": "practice",
    "title": "Gold Plan Scoring Practice",
    "label": "Gold Track",
    "body": "### Gold Plan Scoring: Practice Exercises\nEngage in exercises designed to **apply and refine your gold plan scoring techniques**.\n\n* **Scenario Analysis**: Evaluate a series of historical gold price charts and identify the market cycle phase. Adjust your plan score accordingly.\n* **Event Impact Simulation**: Given a set of geopolitical events, simulate their impact on gold prices and adjust your plan scores to reflect these changes.",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Analysis",
          "definition": "A process of analyzing possible future events by considering alternative possible outcomes."
        }
      ],
      "whyThisMatters": "Practical application of scoring techniques enhances your ability to adapt plans in real-time.",
      "realLifeExample": "Analyze the impact of the 2021 US infrastructure bill on gold prices and adjust your plan to account for increased volatility.",
      "commonMistake": "Overlooking the need for practice, leading to theoretical knowledge without practical application.",
      "quickNote": "Practice refines scoring precision.",
      "mentorText": "Practice is like flight simulation for pilots. It prepares you for real-world scenarios without the risk.",
      "mentorAnalogy": "Just as surgeons practice on simulations before real operations, traders must practice scoring plans to ensure precision under pressure."
    },
    "taskData": {
      "type": "choice_block",
      "question": "Given a gold price chart showing a sharp increase following a geopolitical event, how should you adjust your plan score?",
      "options": [
        {
          "id": "0",
          "text": "Increase the risk weight and adjust stop-loss levels.",
          "isCorrect": true,
          "feedback": "Correct. A sharp increase suggests heightened volatility, requiring adjusted risk parameters."
        },
        {
          "id": "1",
          "text": "Decrease position size to minimize exposure.",
          "isCorrect": false,
          "feedback": "Incorrect. While reducing exposure is a strategy, the primary adjustment should be to risk weight and stop-loss levels."
        },
        {
          "id": "2",
          "text": "Ignore the event and maintain the current plan.",
          "isCorrect": false,
          "feedback": "Incorrect. Ignoring geopolitical events can lead to unexpected losses."
        },
        {
          "id": "3",
          "text": "Increase position size to capitalize on the trend.",
          "isCorrect": false,
          "feedback": "Incorrect. Increasing position size without adjusting risk can lead to significant losses."
        }
      ]
    },
    "visualKey": "gold-plan-score-sheet"
  },
  {
    "type": "summary",
    "title": "Summary of Gold Plan Scoring",
    "label": "Gold Track",
    "body": "### Gold Plan Scoring: Key Takeaways\nReflect on the essential techniques for **scoring and refining gold trading plans**.\n\n* **Adaptability to Cycles**: Ensure your plan is flexible to adapt to different market cycles, enhancing its robustness.\n* **Geopolitical Awareness**: Incorporate geopolitical factors into your scoring to anticipate market shifts and adjust strategies accordingly.\n* **Continuous Practice**: Regularly engage in practice exercises to refine your scoring techniques and improve plan execution.",
    "context": {
      "keyTerms": [
        {
          "term": "Plan Scoring",
          "definition": "The process of evaluating a trading plan's effectiveness based on specific criteria."
        }
      ],
      "whyThisMatters": "A well-scored plan ensures strategic alignment with market conditions, reducing risk and enhancing potential returns.",
      "realLifeExample": "Traders who adapted their plans during the 2020 pandemic were able to capitalize on gold's rise from $1,500 to over $2,000.",
      "commonMistake": "Neglecting to review and score plans regularly, leading to outdated strategies.",
      "quickNote": "Scoring ensures plan integrity.",
      "mentorText": "Think of scoring your plan like a pre-flight checklist. It ensures everything is in place for a successful journey.",
      "mentorAnalogy": "An architect reviews blueprints before construction to ensure structural integrity, just as traders score plans to ensure market alignment."
    },
    "taskData": null,
    "visualKey": "gold-plan-score-sheet"
  }
];
