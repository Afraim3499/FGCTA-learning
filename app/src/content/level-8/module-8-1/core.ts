import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Understanding Recency Bias in Trading",
    "label": "Core Track",
    "body": "<!-- M8.1-core-C1 -->\n### Core Concept: Recency Bias in Trading\nRecency bias distorts traders' perceptions by overvaluing recent outcomes, leading to flawed decision-making. This card outlines **how to recognize and mitigate the impact of recency bias** on trading strategies.\n\n* **Cognitive Distortion**: Recent wins or losses can create an illusion of certainty, causing traders to misjudge the probability of future trades. For instance, a trader who just won three consecutive trades may feel invincible, leading to over-leveraging.\n* **Statistical Independence**: Each trade is an independent event; past performance does not influence future probabilities. A coin flip remains 50% regardless of prior flips, just as a trading setup remains valid irrespective of previous outcomes.\n* **Emotional Regulation**: Implement pre-defined rules for trade execution that are unaffected by recent results. For example, if a trader has experienced a losing streak, they must adhere to their risk management protocols without deviation.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Recency Bias",
          "definition": "The tendency to give undue weight to the most recent outcomes in decision-making."
        }
      ],
      "whyThisMatters": "Understanding recency bias is essential for maintaining objective decision-making in trading, preventing emotional responses from dictating actions.",
      "realLifeExample": "A trader executing a buy order on GBPUSD at 1.3000 after a series of three winning trades, believing the trend will continue without considering market conditions.",
      "commonMistake": "Traders often increase position sizes after a winning streak, mistakenly believing their success will continue.",
      "quickNote": "Recency bias can lead to overconfidence and poor risk management.",
      "mentorText": "You must treat each trade as a standalone event. Just because you’ve had a few wins doesn’t mean the next trade will follow suit. Stick to your plan.",
      "mentorAnalogy": "Think of a pilot who has just completed several successful landings; they must not let recent success cloud their judgment on the next approach, as each landing has unique variables."
    },
    "taskData": null,
    "visualKey": "recency-bias-model"
  },
  {
    "type": "concept",
    "title": "Probability Theory Basics",
    "label": "Core Track",
    "body": "<!-- M8.1-core-C2 -->\n### Core Principle: Probability Theory in Trading\nProbability theory provides the framework for making informed trading decisions based on statistical outcomes rather than emotional responses. This card details **the foundational elements of probability theory relevant to trading**.\n\n* **Basic Probability Concepts**: Understand the fundamental principles, such as the likelihood of an event occurring. For example, if a trading strategy has a 70% win rate, it implies that in 100 trades, approximately 70 are expected to be profitable.\n* **Expected Value Calculation**: Calculate the expected value of a trade by multiplying the probability of winning by the average win and subtracting the probability of losing multiplied by the average loss. This quantifies potential profitability.\n* **Risk Assessment**: Use probability to assess risk-reward ratios effectively. A trade with a 60% chance of winning and a potential reward of 2:1 should be prioritized over one with a 40% chance and a 1:1 ratio.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Probability Theory",
          "definition": "A branch of mathematics dealing with the likelihood of events occurring."
        },
        {
          "term": "Expected Value",
          "definition": "The anticipated value for a given investment or trade based on probabilities."
        }
      ],
      "whyThisMatters": "Applying probability theory allows traders to make data-driven decisions, enhancing their ability to manage risk and optimize returns.",
      "realLifeExample": "A trader analyzes a strategy with a 65% win rate and calculates an expected value of $150 per trade, leading to a systematic approach to position sizing.",
      "commonMistake": "Failing to calculate expected value can lead to overtrading or taking on excessive risk without understanding potential outcomes.",
      "quickNote": "Probability theory transforms emotional trading into a structured decision-making process.",
      "mentorText": "You need to view each trade through the lens of probability. Calculate your expected outcomes and let that guide your decisions, not your emotions.",
      "mentorAnalogy": "Consider a surgeon who assesses the probability of success for each procedure based on statistical outcomes, ensuring that decisions are made based on data rather than recent successes or failures."
    },
    "taskData": null,
    "visualKey": "recency-bias-model"
  },
  {
    "type": "concept",
    "title": "Outcome Independence in Trading",
    "label": "Core Track",
    "body": "<!-- M8.1-core-C3 -->\n### Core Principle: Evaluating Trades Independently\nOutcome independence teaches traders to assess each trade based on its own merits, free from the influence of previous successes or failures. This card explains **how to implement this principle in trading practice**.\n\n* **Trade Evaluation Criteria**: Establish specific criteria for trade setups that are independent of past results. For example, a trader should evaluate a new setup based on technical indicators rather than the outcome of the last three trades.\n* **Psychological Detachment**: Develop a mindset that separates emotional responses from trading decisions. A trader should remind themselves that a loss does not predict future losses, just as a win does not guarantee further wins.\n* **Consistent Strategy Application**: Adhere to a consistent trading strategy regardless of recent performance. For instance, if a trader has lost two consecutive trades, they must still execute their strategy without deviation, maintaining discipline.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Outcome Independence",
          "definition": "The principle that each trade's outcome is not influenced by previous trades."
        }
      ],
      "whyThisMatters": "Maintaining outcome independence is crucial for rational decision-making, ensuring that traders do not fall into the trap of emotional trading.",
      "realLifeExample": "A trader analyzing a new setup for USDJPY at 110.50, focusing solely on the technical indicators despite having just faced two losses in a row.",
      "commonMistake": "Traders often allow recent losses to affect their judgment, leading to hesitation or irrational decision-making.",
      "quickNote": "Each trade must be treated as a unique event, free from the influence of prior outcomes.",
      "mentorText": "You cannot let past trades dictate your next move. Each setup is a fresh opportunity; evaluate it on its own merits.",
      "mentorAnalogy": "A commercial pilot must treat each flight as a unique mission, relying on their training and checklists rather than the outcome of previous flights."
    },
    "taskData": null,
    "visualKey": "recency-bias-model"
  },
  {
    "type": "concept",
    "title": "Identifying Cognitive Biases",
    "label": "Core Track",
    "body": "<!-- M8.1-core-C4 -->\n### Core Focus: Recognizing Cognitive Biases in Trading\nCognitive biases can distort a trader's judgment, leading to poor decision-making, especially in the context of recency bias. This card highlights **how to identify and mitigate these biases**.\n\n* **Common Biases**: Identify biases such as confirmation bias, where traders seek information that supports their beliefs, or loss aversion, where the fear of losses outweighs the potential for gains. Recognizing these biases is the first step in mitigating their effects.\n* **Bias Awareness Techniques**: Implement techniques such as journaling trades to reflect on decisions and outcomes, helping to identify patterns of biased thinking. Regularly reviewing past trades can reveal cognitive distortions that need addressing.\n* **Structured Decision-Making**: Develop a structured approach to decision-making that includes a checklist to evaluate trades objectively. For example, before executing a trade, a trader should confirm that their decision aligns with their trading plan and risk management rules.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Cognitive Bias",
          "definition": "Systematic patterns of deviation from norm or rationality in judgment."
        }
      ],
      "whyThisMatters": "Recognizing cognitive biases is essential for maintaining objectivity in trading, allowing for more rational and effective decision-making.",
      "realLifeExample": "A trader reviewing their last ten trades realizes they consistently ignored negative news about a stock they were invested in, demonstrating confirmation bias.",
      "commonMistake": "Failing to acknowledge personal biases can lead to repeated mistakes and significant financial losses.",
      "quickNote": "Awareness of cognitive biases is critical for objective trading decisions.",
      "mentorText": "You must be vigilant about your thought processes. Acknowledge your biases and question your decisions to ensure they are based on facts, not emotions.",
      "mentorAnalogy": "An architect must constantly check their designs against established codes and standards, ensuring that personal preferences do not compromise safety and functionality."
    },
    "taskData": null,
    "visualKey": "recency-bias-model"
  },
  {
    "type": "concept",
    "title": "Evaluating Trades Without Bias",
    "label": "Core Track",
    "body": "<!-- M8.1-core-C5 -->\n### Core Scenario: Objective Trade Evaluation\nEvaluating trades without the influence of recency bias is critical for maintaining an objective perspective. This card outlines **how to implement structured checklists and criteria for trade assessment**.\n\n* **Checklist Implementation**: Develop a standardized checklist that includes entry criteria, risk-reward ratios, and market conditions. Ensure each trade is assessed against this checklist before execution to minimize subjective influences.\n* **Scorecard System**: Assign numerical values to each criterion on the checklist. For instance, rate trade setups on a scale from 1 to 10 based on adherence to your rules, allowing for quantifiable assessment.\n* **Post-Trade Reflection**: After executing a trade, review the checklist and scorecard to determine if the trade met the objective criteria. Document any deviations and analyze their impact on the outcome to refine future evaluations.",
    "context": {
      "keyTerms": [
        {
          "term": "Checklist",
          "definition": "A structured list of criteria used to evaluate trade setups objectively."
        },
        {
          "term": "Scorecard System",
          "definition": "A numerical rating system that quantifies adherence to trading criteria."
        }
      ],
      "whyThisMatters": "Objective evaluation prevents emotional biases from distorting trade assessments, enhancing decision-making consistency.",
      "realLifeExample": "In a recent session, a trader evaluated a GBPUSD trade using a checklist that included a minimum risk-reward ratio of 1:2. The trade scored 8/10, validating the setup despite a recent loss.",
      "commonMistake": "Traders often rely on gut feelings instead of structured criteria, leading to inconsistent evaluations.",
      "quickNote": "Use checklists to ensure objective trade evaluations, free from recency bias.",
      "mentorText": "When assessing your trades, rely on a checklist. If you can't tick off each item, reconsider the trade. This discipline will keep your evaluations grounded.",
      "mentorAnalogy": "Think of your trading checklist as a pilot's pre-flight checklist. Each item must be confirmed before takeoff to ensure a safe and successful flight."
    },
    "taskData": null,
    "visualKey": "recency-bias-model"
  },
  {
    "type": "concept",
    "title": "Risk Management Strategies",
    "label": "Core Track",
    "body": "<!-- M8.1-core-C6 -->\n### Core Scenario: Mitigating Emotional Impact\nEffective risk management strategies are essential for maintaining focus on probabilities rather than past outcomes. This card discusses **how to structure risk management to minimize emotional reactions**.\n\n* **Fixed Risk Percentage**: Establish a fixed percentage of your trading capital to risk on each trade, such as 1-2%. This approach ensures that no single trade can significantly impact your overall portfolio, reducing emotional stress.\n* **Loss Limits**: Set daily or weekly loss limits that trigger a pause in trading. For example, if your limit is $500 and you hit that threshold, take a break to reassess your strategy and emotions.\n* **Diversification Protocol**: Diversify your trades across different instruments and strategies. For instance, if you trade both EURUSD and gold, a loss in one may be offset by gains in another, helping to maintain emotional stability.",
    "context": {
      "keyTerms": [
        {
          "term": "Fixed Risk Percentage",
          "definition": "A predetermined percentage of capital allocated to risk on each trade."
        },
        {
          "term": "Loss Limits",
          "definition": "Predefined thresholds that, when reached, require a pause in trading."
        }
      ],
      "whyThisMatters": "Effective risk management allows traders to focus on the probabilities of future trades, reducing the emotional weight of past outcomes.",
      "realLifeExample": "A trader sets a fixed risk of 1% on their $50,000 account, risking $500 on a trade. After two consecutive losses totaling $1,000, they activate their loss limit and take a break to reassess.",
      "commonMistake": "Failing to adhere to risk management rules often leads to emotional trading decisions, compounding losses.",
      "quickNote": "Implement fixed risk percentages and loss limits to maintain focus on future probabilities.",
      "mentorText": "Stick to your risk management plan. If you hit your loss limit, step back. This isn't just about the money; it's about preserving your mindset.",
      "mentorAnalogy": "Consider your risk management plan like a safety net for a trapeze artist. It allows for daring moves while ensuring that a fall won't lead to disaster."
    },
    "taskData": null,
    "visualKey": "recency-bias-model"
  },
  {
    "type": "concept",
    "title": "Building Psychological Resilience",
    "label": "Core Track",
    "body": "<!-- M8.1-core-C7 -->\n### Core Scenario: Overcoming Emotional Reactions\nPsychological resilience is vital for traders to manage emotional responses to past trade outcomes. This card outlines **strategies to develop mental fortitude**.\n\n* **Mindfulness Techniques**: Incorporate mindfulness practices, such as meditation or breathing exercises, to center your thoughts before and after trading sessions. This can help mitigate emotional reactions to wins or losses.\n* **Cognitive Reframing**: Practice reframing negative thoughts about past trades. Instead of viewing a loss as a failure, consider it a learning opportunity that contributes to your overall trading education.\n* **Routine Establishment**: Create a pre-trade routine that includes visualization of successful outcomes and affirmation of your trading plan. For example, visualize executing a trade according to your strategy, reinforcing confidence in your process.",
    "context": {
      "keyTerms": [
        {
          "term": "Mindfulness Techniques",
          "definition": "Practices aimed at enhancing focus and emotional regulation."
        },
        {
          "term": "Cognitive Reframing",
          "definition": "The process of changing negative thought patterns into positive learning experiences."
        }
      ],
      "whyThisMatters": "Building psychological resilience enables traders to maintain a clear focus on their strategy, unaffected by past outcomes.",
      "realLifeExample": "A trader practices mindfulness for 10 minutes before each session, helping them remain calm after experiencing a loss on a USDJPY trade, allowing for objective decision-making in subsequent trades.",
      "commonMistake": "Traders often dwell on past losses, allowing them to cloud judgment and affect future trades.",
      "quickNote": "Develop psychological resilience through mindfulness and cognitive reframing techniques.",
      "mentorText": "Before you trade, take a moment to breathe and visualize success. This mental preparation will help you stay focused, regardless of past results.",
      "mentorAnalogy": "Think of psychological resilience like a rubber band. It can stretch and bend, but it always returns to its original shape, ready for the next challenge."
    },
    "taskData": null,
    "visualKey": "recency-bias-model"
  },
  {
    "type": "concept",
    "title": "Conducting Performance Reviews",
    "label": "Core Track",
    "body": "<!-- M8.1-core-C8 -->\n### Core Scenario: Process-Focused Reviews\nConducting performance reviews that emphasize process over outcomes is essential for continuous improvement. This card explains **how to structure reviews to avoid recency bias**.\n\n* **Data-Driven Analysis**: Collect quantitative data from your trades, including win rates, average risk-reward ratios, and adherence to your trading plan. Analyze this data to identify patterns and areas for improvement.\n* **Review Framework**: Establish a review framework that includes sections for process adherence, emotional responses, and lessons learned. For example, assess whether you followed your checklist and how you felt during the trade.\n* **Monthly Review Sessions**: Schedule monthly performance review sessions to evaluate your trading process over a longer time frame. This helps to mitigate the influence of recent trades on your overall assessment.",
    "context": {
      "keyTerms": [
        {
          "term": "Data-Driven Analysis",
          "definition": "An analytical approach that focuses on quantitative metrics from trading performance."
        },
        {
          "term": "Review Framework",
          "definition": "A structured outline for conducting performance evaluations."
        }
      ],
      "whyThisMatters": "Focusing on process rather than outcomes allows traders to identify systematic improvements and reduce the impact of recency bias.",
      "realLifeExample": "A trader analyzes their last month of trades, noting a 60% win rate and a consistent adherence to their checklist, despite a recent losing streak. This data-driven approach reveals strengths in their strategy.",
      "commonMistake": "Traders often fixate on recent losses during reviews, neglecting the broader context of their trading performance.",
      "quickNote": "Conduct performance reviews focusing on process metrics to identify areas for improvement.",
      "mentorText": "When reviewing your trades, focus on the process. If you followed your plan, that's a win, regardless of the outcome. This mindset will foster long-term growth.",
      "mentorAnalogy": "Think of your performance review as a pilot's debrief after a flight. It's not just about whether the flight was successful, but how well the protocols were followed and what can be improved for next time."
    },
    "taskData": null,
    "visualKey": "recency-bias-model"
  },
  {
    "type": "concept",
    "title": "Effective Trade Journaling",
    "label": "Core Track",
    "body": "<!-- M8.1-core-C9 -->\n### Core Scenario: Trade Journaling for Bias Mitigation\nTrade journaling serves as a critical tool in reducing recency bias by documenting trades objectively. This card outlines **how to structure a trade journal to enhance decision-making**.\n\n* **Objective Documentation**: Record each trade's rationale, entry and exit points, and market conditions without emotional language. This allows for a clear review process, free from the influence of recent outcomes.\n* **Post-Trade Analysis**: After each trade, conduct a structured analysis focusing on adherence to your trading plan rather than the trade's outcome. This reinforces the importance of process over results.\n* **Regular Review Schedule**: Implement a weekly review of your journal to identify patterns in decision-making and emotional responses. This helps to recalibrate your trading mindset and focus on objective criteria.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Trade Journal",
          "definition": "A systematic record of trades that includes rationale, outcomes, and market conditions."
        }
      ],
      "whyThisMatters": "Effective trade journaling enhances the ability to make objective decisions, minimizing the impact of recency bias on future trades.",
      "realLifeExample": "A trader documents a loss on EURUSD at 1.0850, noting the market conditions and rationale for entry. During the weekly review, they identify emotional triggers that led to a hasty exit, allowing for adjustments in future strategies.",
      "commonMistake": "Failing to document trades immediately after execution, leading to reliance on memory, which is often biased.",
      "quickNote": "Objective trade journaling is essential for mitigating recency bias.",
      "mentorText": "When you document your trades, focus on the facts. What was your reasoning? What were the market conditions? This will help you detach from the emotional weight of recent outcomes.",
      "mentorAnalogy": "Think of trade journaling like a pilot's flight log. Each entry records not just the destination, but the conditions and decisions made along the way, allowing for better navigation in future flights."
    },
    "taskData": null,
    "visualKey": "recency-bias-model"
  },
  {
    "type": "concept",
    "title": "Adjusting Probabilities Based on New Information",
    "label": "Core Track",
    "body": "<!-- M8.1-core-C10 -->\n### Core Scenario: Probability Adjustment Techniques\nAdjusting trading probabilities in response to new market information is essential for maintaining an objective stance. This card discusses **how to recalibrate your assessments without bias from past trades**.\n\n* **Information Hierarchy**: Prioritize new information based on its relevance and impact on your trading strategy. Distinguish between noise and actionable insights to avoid skewed assessments.\n* **Probability Recalibration**: Use a systematic approach to adjust your trade probabilities. For example, if a key economic report indicates a shift in market sentiment, reassess your trade setups based on this new data rather than past performance.\n* **Scenario Planning**: Develop multiple scenarios for each trade based on varying outcomes of new information. This prepares you to adapt your strategy without being anchored to previous trades.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Probability Adjustment",
          "definition": "The process of recalibrating trade probabilities based on new market information."
        }
      ],
      "whyThisMatters": "Properly adjusting probabilities enables traders to respond effectively to market changes, minimizing the influence of past trade outcomes.",
      "realLifeExample": "After the release of a positive Non-Farm Payroll report, a trader adjusts the probability of a bullish trend in USDJPY from 60% to 80%, reflecting the new economic data rather than their previous losing trades.",
      "commonMistake": "Overreacting to new information by drastically changing trade probabilities without thorough analysis.",
      "quickNote": "Adjust probabilities based on new information, not past trades.",
      "mentorText": "When new data comes in, assess it critically. Don’t let the outcome of your last trade cloud your judgment. Focus on how this new information changes the landscape.",
      "mentorAnalogy": "Consider a weather forecaster adjusting their predictions based on the latest satellite images. They must update their forecasts based on new data, not past storms."
    },
    "taskData": null,
    "visualKey": "recency-bias-model"
  },
  {
    "type": "concept",
    "title": "Practicing Emotional Detachment",
    "label": "Core Track",
    "body": "<!-- M8.1-core-C11 -->\n### Core Scenario: Techniques for Emotional Detachment\nEmotional detachment is critical for objective trading decisions. This card outlines **specific techniques to cultivate emotional distance from trade outcomes**.\n\n* **Mindfulness Practices**: Incorporate mindfulness techniques, such as deep breathing or visualization, before and after trades. This helps to clear emotional clutter and refocus on objective criteria.\n* **Pre-Trade Checklists**: Develop a checklist that emphasizes logical criteria for trade execution. This serves as a reminder to adhere to your strategy rather than react emotionally to past results.\n* **Post-Trade Reflection**: After each trade, reflect on your emotional state during execution. Identify triggers that led to emotional decision-making and adjust your approach accordingly.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Emotional Detachment",
          "definition": "The ability to separate emotional responses from trading decisions."
        }
      ],
      "whyThisMatters": "Practicing emotional detachment enables traders to make decisions based on logic and strategy rather than emotional reactions to previous trades.",
      "realLifeExample": "A trader implements a breathing exercise before entering a trade on GBPUSD, allowing them to approach the market with a clear mind, resulting in a more rational decision-making process.",
      "commonMistake": "Ignoring emotional responses during trading, leading to impulsive decisions based on recent outcomes.",
      "quickNote": "Emotional detachment is essential for logical trading decisions.",
      "mentorText": "Before you enter a trade, take a moment to breathe and clear your mind. Focus on your strategy, not your last win or loss. This will help you stay grounded.",
      "mentorAnalogy": "Think of a surgeon preparing for an operation. They must detach from the emotional weight of previous surgeries to focus solely on the current procedure, ensuring the best outcome."
    },
    "taskData": null,
    "visualKey": "recency-bias-model"
  },
  {
    "type": "concept",
    "title": "Applying Concepts in Real Scenarios",
    "label": "Core Track",
    "body": "<!-- M8.1-core-C12 -->\n### Core Scenario: Practical Application of Bias Concepts\nEngaging in practical exercises helps solidify the concepts of recency bias and probability theory. This card focuses on **real-world scenarios to apply learned principles**.\n\n* **Simulated Trading Sessions**: Conduct simulated trading sessions where you apply probability adjustments based on hypothetical market news. This allows you to practice detaching from past outcomes in a controlled environment.\n* **Case Study Analysis**: Analyze historical trades where recency bias affected decisions. Identify the emotional triggers and assess how different outcomes could have been achieved with objective strategies.\n* **Peer Review Exercises**: Collaborate with fellow traders to review each other’s trades and decision-making processes. This external perspective can highlight biases and reinforce objective thinking.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Practical Application",
          "definition": "The process of applying theoretical concepts to real-world trading scenarios."
        }
      ],
      "whyThisMatters": "Practical application reinforces understanding and helps traders internalize the principles of recency bias and probability theory.",
      "realLifeExample": "During a simulated trading session, a trader practices adjusting their probability assessment for AUDCAD after a surprise interest rate change, successfully detaching from their last trade's outcome.",
      "commonMistake": "Relying solely on theoretical knowledge without practical application, leading to a disconnect between learning and execution.",
      "quickNote": "Engage in practical exercises to solidify understanding of bias concepts.",
      "mentorText": "Put theory into practice. Use simulations to test your strategies and see how well you can detach from past trades. This is where you truly learn.",
      "mentorAnalogy": "Consider a pilot in a flight simulator. They practice various scenarios to prepare for real flights, ensuring they can handle unexpected situations without the emotional weight of past flights."
    },
    "taskData": null,
    "visualKey": "recency-bias-model"
  },
  {
    "type": "concept",
    "title": "Key Takeaways on Recency Bias",
    "label": "Core Track",
    "body": "<!-- M8.1-core-C13 -->\n### Core Insight: Understanding Recency Bias Impact\nRecency bias can distort a trader's perception of market probabilities based on recent outcomes, leading to flawed decision-making. This card summarizes critical insights into how probability theory can mitigate these biases.\n\n* **Cognitive Distortion**: Traders often overweight recent trades, believing that a winning streak indicates a higher likelihood of future wins. This misjudgment can lead to over-leveraging or premature entries.\n* **Statistical Independence**: Each trade should be treated as an independent event. For example, executing a trade after a series of losses does not increase the probability of success; it remains at the predetermined statistical level.\n* **Probability Reinforcement**: Utilizing probability theory, traders can recalibrate their decision-making process. For instance, if a trader has a 60% win rate, that remains constant regardless of the last five trades, reinforcing the need for objective execution.",
    "context": {
      "keyTerms": [
        {
          "term": "Recency Bias",
          "definition": "The tendency to give undue weight to recent events in decision-making."
        },
        {
          "term": "Statistical Independence",
          "definition": "The principle that the outcome of one event does not influence another."
        }
      ],
      "whyThisMatters": "Understanding recency bias is essential for maintaining objective trading practices and avoiding emotional decision-making.",
      "realLifeExample": "A trader executing a long position on GBPUSD after three consecutive wins at 1.3000, believing that the trend will continue, despite the statistical probability remaining unchanged.",
      "commonMistake": "Assuming that a recent winning streak guarantees future success, leading to increased risk-taking.",
      "quickNote": "Each trade is a standalone event; past outcomes do not dictate future probabilities.",
      "mentorText": "You must view each trade as a new opportunity, not a continuation of past results. If you won three times in a row, that does not mean you’re on a roll; it’s just how the probabilities played out.",
      "mentorAnalogy": "Think of a surgeon preparing for a procedure. Each operation is unique and must be approached with the same level of precision and protocol, regardless of previous successes or failures."
    },
    "taskData": null,
    "visualKey": "recency-bias-model"
  },
  {
    "type": "practice",
    "title": "Core Management Review 14 (Module 8.1 - CORE)",
    "label": "Core Track",
    "body": "<!-- M8.1-core-C14 -->\n### Core Application: Recency Bias in Execution\nThis card focuses on applying the concepts of recency bias and the next trade fallacy to real-world trading scenarios. Evaluate your decision-making process to ensure it remains objective.\n\n* **Scenario Analysis**: Review your last five trades. Did you alter your position size or strategy based on recent outcomes? Identify any emotional influences that may have affected your decisions.\n* **Probability Assessment**: Calculate the statistical probability of your trading strategy based on historical data. Ensure that your execution is aligned with these probabilities rather than influenced by recent performance.\n* **Trade Plan Enforcement**: Establish strict rules for trade execution that are independent of recent outcomes. For instance, if your strategy dictates a 2% risk per trade, adhere to this regardless of previous wins or losses.",
    "context": {
      "keyTerms": [
        {
          "term": "Next Trade Fallacy",
          "definition": "The erroneous belief that the outcome of the next trade is influenced by previous trades."
        },
        {
          "term": "Position Sizing",
          "definition": "Determining the amount of capital to allocate to a specific trade."
        }
      ],
      "whyThisMatters": "Applying these concepts ensures that trading decisions are based on objective criteria rather than emotional responses to recent outcomes.",
      "realLifeExample": "A trader reviewing their last five trades on AUDCAD, where they increased their position size after two consecutive wins, despite their original risk management plan dictating a fixed size.",
      "commonMistake": "Failing to adhere to a pre-defined trading plan due to recent performance, leading to inconsistent execution.",
      "quickNote": "Always base your trades on established criteria, not on recent outcomes.",
      "mentorText": "You need to stick to your plan. If your strategy says to risk 2% per trade, do that every time, regardless of how the last few trades went.",
      "mentorAnalogy": "Like a pilot following a flight plan, you must adhere to your trading strategy without deviation, regardless of recent turbulence."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You have just completed three winning trades in a row. What should you do next regarding your position size?",
      "options": [
        {
          "id": "0",
          "text": "Increase your position size to capitalize on the winning streak.",
          "isCorrect": false,
          "feedback": "Increasing position size based on recent wins violates the principle of independent events."
        },
        {
          "id": "1",
          "text": "Maintain your current position size as per your trading plan.",
          "isCorrect": true,
          "feedback": "Adhering to your trading plan ensures consistency and objectivity in your execution."
        },
        {
          "id": "2",
          "text": "Reduce your position size to minimize risk after a winning streak.",
          "isCorrect": false,
          "feedback": "Reducing position size based on recent wins introduces emotional bias into your decision-making."
        },
        {
          "id": "3",
          "text": "Skip the next trade to avoid potential losses.",
          "isCorrect": false,
          "feedback": "Avoiding trades based on recent outcomes undermines the objective nature of trading."
        }
      ]
    },
    "visualKey": "recency-bias-model"
  },
  {
    "type": "summary",
    "title": "Core Management Review 15 (Module 8.1 - CORE)",
    "label": "Core Track",
    "body": "<!-- M8.1-core-C15 -->\n### Summary: Reinforcing Objective Execution\nThis card encapsulates the advanced application of recency bias and next trade fallacy concepts, emphasizing the need for disciplined execution in trading.\n\n* **Execution Discipline**: Maintain strict adherence to your trading plan, regardless of recent performance. This discipline prevents emotional decision-making that can lead to significant losses.\n* **Statistical Review**: Regularly review your trading statistics to ensure that your strategies are based on objective data rather than subjective feelings about recent trades. This practice reinforces the importance of probability in trading.\n* **Behavioral Reflection**: After each trading session, reflect on your decisions to identify any influences of recency bias. This reflection helps in developing a more resilient trading mindset.",
    "context": {
      "keyTerms": [
        {
          "term": "Execution Discipline",
          "definition": "The practice of adhering strictly to a trading plan without deviation."
        },
        {
          "term": "Behavioral Reflection",
          "definition": "The process of analyzing one's trading decisions to identify emotional influences."
        }
      ],
      "whyThisMatters": "Reinforcing these concepts helps traders maintain a consistent approach, reducing the likelihood of emotional trading mistakes.",
      "realLifeExample": "A trader consistently reviewing their performance metrics on USDJPY after each session, ensuring that their execution remains aligned with their statistical analysis.",
      "commonMistake": "Neglecting to analyze past trades for emotional influences, leading to repeated mistakes in execution.",
      "quickNote": "Consistent execution based on objective data is critical for long-term trading success.",
      "mentorText": "After every trading session, take a moment to assess your decisions. Were they based on your plan or influenced by recent outcomes? This reflection is crucial for improvement.",
      "mentorAnalogy": "Just as a chef reviews their recipes and techniques after each meal, you must analyze your trades to refine your approach and eliminate emotional biases."
    },
    "taskData": null,
    "visualKey": "recency-bias-model"
  }
];
