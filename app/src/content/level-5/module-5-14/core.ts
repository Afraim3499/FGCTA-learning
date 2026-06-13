import { LessonCard } from "../../../types/curriculum";

export const coreCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Quantitative Risk Check Matrix Overview",
    "label": "Core Track",
    "body": "### Quantitative Risk Check: Matrix Overview\nA quantitative risk check matrix serves as a systematic framework for evaluating trade parameters against established capital rules. This card details **how to construct and utilize a risk check matrix for pre-trade validation**.\n\n* **Matrix Structure**: The matrix should include columns for trade size, stop-loss distance, risk-reward ratio, and total capital at risk, allowing for a comprehensive view of each trade's risk profile.\n* **Risk Alignment**: Each trade must align with a predetermined risk threshold, typically not exceeding 1-2% of total capital, ensuring that no single trade jeopardizes overall account stability.\n* **Dynamic Adjustments**: Regularly update the matrix based on market conditions and personal risk tolerance, ensuring that it reflects current trading strategies and capital allocation rules.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Check Matrix",
          "definition": "A structured framework for evaluating trade parameters against capital rules."
        }
      ],
      "whyThisMatters": "A quantitative risk check matrix ensures that every trade adheres to your capital allocation rules, minimizing the potential for significant losses.",
      "realLifeExample": "For instance, if trading the S&P 500 with a $50,000 account, a risk check matrix would confirm that a trade risking $500 aligns with a stop-loss of 10 points, maintaining a risk percentage of 1%.",
      "commonMistake": "Traders often neglect to update their matrix, leading to misalignment with current risk tolerance and market conditions.",
      "quickNote": "Utilize a risk check matrix to systematically evaluate trade parameters before execution.",
      "mentorText": "Think of the matrix as your pre-flight checklist. If every item isn’t ticked off, you don’t take off. It’s that simple.",
      "mentorAnalogy": "Just as an aerospace engineer uses a checklist to ensure all systems are functional before a flight, a trader must use a risk check matrix to validate every trade parameter."
    },
    "taskData": null,
    "visualKey": "risk-checklists"
  },
  {
    "type": "concept",
    "title": "Defining Risk Parameters",
    "label": "Core Track",
    "body": "### Risk Parameters: Definition and Importance\nDefining specific risk parameters is crucial for maintaining discipline in trading and adhering to capital allocation rules. This card discusses **how to establish clear risk parameters for each trade**.\n\n* **Maximum Risk per Trade**: Establish a maximum risk limit, typically between 1-2% of total capital, to safeguard against excessive losses on any single position.\n* **Stop-Loss Placement**: Determine stop-loss levels based on technical analysis, ensuring they are placed at logical points that minimize risk while allowing for market fluctuations.\n* **Risk-Reward Ratio**: Set a minimum risk-reward ratio, such as 1:2 or 1:3, to ensure that potential profits justify the risks taken on each trade.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Parameters",
          "definition": "Specific thresholds that define acceptable risk levels for trading."
        }
      ],
      "whyThisMatters": "Clearly defined risk parameters help maintain trading discipline and protect capital, ensuring that trades are executed within acceptable limits.",
      "realLifeExample": "For a trade on EURUSD, if your account size is $20,000 and you set a maximum risk of 1%, your risk per trade would be $200, guiding your position sizing and stop-loss placement.",
      "commonMistake": "Traders frequently set vague or overly aggressive risk parameters, leading to inconsistent trading practices and increased exposure to losses.",
      "quickNote": "Establish clear risk parameters to maintain discipline and protect your capital.",
      "mentorText": "Define your risk parameters like a surgeon defines their surgical limits. You don’t operate without knowing exactly what’s at stake.",
      "mentorAnalogy": "Just as a surgeon meticulously defines the boundaries of a procedure to avoid complications, a trader must establish clear risk parameters to navigate the market safely."
    },
    "taskData": null,
    "visualKey": "risk-checklists"
  },
  {
    "type": "concept",
    "title": "Risk Assessment Techniques",
    "label": "Core Track",
    "body": "### Risk Assessment: Techniques for Pre-Trade Evaluation\nIntegrating robust risk assessment techniques into your pre-trade checklist enhances decision-making and aligns trades with capital rules. This card covers **various techniques for assessing risk before entering a trade**.\n\n* **Volatility Analysis**: Use historical volatility measures, such as the Average True Range (ATR), to gauge potential price movements and adjust stop-loss levels accordingly.\n* **Scenario Analysis**: Conduct scenario analyses to evaluate how different market conditions could impact your trade, preparing for potential adverse movements.\n* **Correlation Assessment**: Analyze correlations between instruments to understand how trades may impact overall portfolio risk, especially during market stress events.",
    "context": {
      "keyTerms": [
        {
          "term": "Volatility Analysis",
          "definition": "A technique to assess the potential price movement of an asset based on historical data."
        }
      ],
      "whyThisMatters": "Employing risk assessment techniques ensures that trades are evaluated comprehensively, reducing the likelihood of unexpected losses.",
      "realLifeExample": "Before entering a position on Gold, if the ATR indicates a volatility of $15, adjust your stop-loss to account for this movement, ensuring it remains effective under market conditions.",
      "commonMistake": "Traders often overlook volatility and correlation assessments, leading to underestimating potential risks associated with their trades.",
      "quickNote": "Incorporate risk assessment techniques to enhance the robustness of your trading decisions.",
      "mentorText": "Think of risk assessment like a pilot checking weather conditions before takeoff. You need to know what to expect to navigate safely.",
      "mentorAnalogy": "Just as a pilot assesses weather patterns and turbulence before a flight, a trader must evaluate market conditions and volatility to ensure a safe trading journey."
    },
    "taskData": null,
    "visualKey": "risk-checklists"
  },
  {
    "type": "concept",
    "title": "Position Sizing Calculations",
    "label": "Core Track",
    "body": "### Position Sizing: Calculating Based on Risk Parameters\nAccurate position sizing is essential for maintaining risk management integrity and ensuring each trade aligns with your overall strategy. This card explains **how to calculate position sizes based on defined risk parameters**.\n\n* **Position Size Formula**: Use the formula: Position Size = (Account Risk Amount) / (Trade Risk per Share) to determine the number of shares or contracts to trade.\n* **Adjusting for Volatility**: Modify position sizes based on the volatility of the instrument; higher volatility may require smaller position sizes to maintain risk levels.\n* **Capital Allocation**: Ensure that the total capital allocated to positions does not exceed your overall risk tolerance, maintaining a balanced portfolio approach.",
    "context": {
      "keyTerms": [
        {
          "term": "Position Sizing",
          "definition": "The process of determining the amount of capital to allocate to a specific trade."
        }
      ],
      "whyThisMatters": "Effective position sizing prevents overexposure to risk and ensures that trades are executed within the confines of your risk management framework.",
      "realLifeExample": "If your account risk amount is $200 and your stop-loss is set at $2 for a stock, you would calculate a position size of 100 shares, ensuring you stay within your risk parameters.",
      "commonMistake": "Traders often miscalculate position sizes, leading to either over-leveraging or under-leveraging their trades, which can jeopardize their capital.",
      "quickNote": "Calculate position sizes accurately to align trades with your risk management framework.",
      "mentorText": "Position sizing is like a chef measuring ingredients; too much or too little can ruin the dish. Measure carefully to ensure success.",
      "mentorAnalogy": "Just as a chef meticulously measures ingredients to ensure a perfect recipe, a trader must calculate position sizes to achieve optimal risk management."
    },
    "taskData": null,
    "visualKey": "risk-checklists"
  },
  {
    "type": "concept",
    "title": "Trade Execution Timing",
    "label": "Core Track",
    "body": "### Trade Execution: Timing and Market Conditions\nEffective trade execution timing is critical for optimizing risk parameters and maximizing trade outcomes. This card details **how market conditions influence execution timing and risk management**.\n\n* **Market Volatility Assessment**: Evaluate volatility indicators such as the Average True Range (ATR) before executing trades. For instance, executing a trade on GBPUSD during a 30-pip ATR may require tighter stop-loss parameters than during a 10-pip ATR.\n* **Session Overlap Considerations**: Identify optimal execution times by analyzing session overlaps, such as the London-New York overlap, which typically sees increased liquidity and reduced slippage.\n* **News Event Timing**: Avoid executing trades immediately before or after major economic news releases. For example, entering a position on USDJPY just before the Non-Farm Payroll report can lead to unpredictable price swings, impacting risk management strategies.",
    "context": {
      "keyTerms": [
        {
          "term": "Average True Range (ATR)",
          "definition": "A volatility indicator that measures market price fluctuations."
        },
        {
          "term": "Session Overlap",
          "definition": "Periods when two major trading sessions coincide, increasing market activity."
        }
      ],
      "whyThisMatters": "Proper timing ensures that trades are executed under optimal market conditions, minimizing risk exposure and enhancing potential returns.",
      "realLifeExample": "Executing a buy order on EURUSD at 1.1200 during the London session, where the ATR is 20 pips, versus executing the same order at 1.1200 during a low-volatility Asian session with an ATR of 5 pips.",
      "commonMistake": "Failing to account for market volatility can lead to inappropriate stop-loss placements.",
      "quickNote": "Execution timing directly impacts risk management effectiveness.",
      "mentorText": "When you enter a trade, think of the market's current state. If volatility is high, your execution must reflect that — adjust your stops accordingly.",
      "mentorAnalogy": "Like a pilot timing their takeoff based on wind conditions, traders must time their entries based on market volatility."
    },
    "taskData": null,
    "visualKey": "risk-checklists"
  },
  {
    "type": "concept",
    "title": "Monitoring Market Conditions",
    "label": "Core Track",
    "body": "### Continuous Market Monitoring: Relevance of Pre-Trade Checklists\nOngoing market condition monitoring is essential for maintaining the effectiveness of your pre-trade checklist. This card outlines **how to adapt your checklist based on real-time market dynamics**.\n\n* **Real-Time Data Utilization**: Use platforms that provide real-time data feeds to assess market sentiment and price action. For example, monitoring the COT report can indicate shifts in trader positioning that may affect your strategy.\n* **Technical Indicator Adjustments**: Regularly review key technical indicators, such as moving averages or RSI, to ensure they align with current market trends. For instance, if the 50-period moving average on SPY is trending downward, reassess bullish positions.\n* **Economic Calendar Integration**: Incorporate an economic calendar into your monitoring routine to anticipate market-moving events. For example, a scheduled interest rate decision from the Federal Reserve can significantly alter market conditions, warranting a checklist review.",
    "context": {
      "keyTerms": [
        {
          "term": "COT Report",
          "definition": "A report detailing the positions of traders in the futures market."
        },
        {
          "term": "Economic Calendar",
          "definition": "A schedule of upcoming economic events that may impact financial markets."
        }
      ],
      "whyThisMatters": "Continuous monitoring allows traders to adjust their strategies and risk parameters in response to evolving market conditions, enhancing decision-making accuracy.",
      "realLifeExample": "Adjusting a pre-trade checklist for a long position in NASDAQ after observing a significant shift in the COT report indicating increased short positions among large traders.",
      "commonMistake": "Neglecting to update the checklist based on new market information can lead to misaligned risk parameters.",
      "quickNote": "Regularly monitor market conditions to keep your checklist relevant.",
      "mentorText": "Stay alert to market changes. If something shifts, your checklist needs to reflect that immediately to avoid unnecessary risks.",
      "mentorAnalogy": "Like a surgeon adjusting their approach based on a patient's vital signs during surgery, traders must adapt their strategies based on real-time market data."
    },
    "taskData": null,
    "visualKey": "risk-checklists"
  },
  {
    "type": "concept",
    "title": "Adjusting Risk Parameters",
    "label": "Core Track",
    "body": "### Dynamic Risk Parameter Adjustments\nAdapting risk parameters in response to changing market conditions is essential for maintaining alignment with capital rules. This card explores **strategies for effective risk parameter adjustments**.\n\n* **Volatility-Based Adjustments**: Modify position sizes based on current market volatility. For example, if the ATR for USDCHF increases from 15 pips to 30 pips, consider reducing position size to maintain consistent risk exposure.\n* **Personal Risk Tolerance Review**: Regularly assess your personal risk tolerance and adjust your risk parameters accordingly. If your risk appetite decreases due to recent losses, recalibrate your stop-loss levels to reflect a more conservative approach.\n* **Market Regime Changes**: Identify shifts in market regimes, such as transitioning from a trending to a ranging market, and adjust your risk parameters to suit the new conditions. For instance, in a ranging market, tighter stop-loss orders may be warranted to protect capital.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Regime",
          "definition": "The prevailing market conditions, such as trending or ranging."
        },
        {
          "term": "Position Size",
          "definition": "The amount of capital allocated to a specific trade."
        }
      ],
      "whyThisMatters": "Adjusting risk parameters ensures that trading strategies remain effective and aligned with both market conditions and personal risk profiles.",
      "realLifeExample": "Reducing position size on a long trade in AUDCAD from 2% to 1% of capital after observing an increase in volatility from 10 pips to 25 pips on the ATR.",
      "commonMistake": "Failing to adjust risk parameters in response to market changes can lead to excessive drawdowns.",
      "quickNote": "Dynamic adjustments to risk parameters are vital for capital preservation.",
      "mentorText": "If the market feels different, your approach must change. Don't hesitate to adjust your risk parameters to stay aligned with the current environment.",
      "mentorAnalogy": "Like a firefighter adjusting their strategy based on changing fire conditions, traders must adapt their risk management to evolving market dynamics."
    },
    "taskData": null,
    "visualKey": "risk-checklists"
  },
  {
    "type": "concept",
    "title": "Common Pitfalls in Risk Management",
    "label": "Core Track",
    "body": "### Identifying Pitfalls in Risk Management Implementation\nRecognizing common pitfalls in risk management checklists is crucial for enhancing trading discipline. This card highlights **frequent mistakes traders make and how to avoid them**.\n\n* **Inflexibility in Checklist Application**: Rigid adherence to checklists without considering current market conditions can lead to poor decision-making. For example, sticking to a checklist designed for a trending market while trading in a range-bound environment can result in unnecessary losses.\n* **Overconfidence in Risk Parameters**: Overestimating the effectiveness of risk parameters can lead to complacency. For instance, believing that a stop-loss set at 2% will always protect against losses can result in significant drawdowns during high-volatility events.\n* **Neglecting Post-Trade Analysis**: Failing to review trades against the checklist can prevent learning from mistakes. For example, not analyzing a losing trade in GBPJPY to understand how checklist parameters were violated can hinder future performance improvements.",
    "context": {
      "keyTerms": [
        {
          "term": "Post-Trade Analysis",
          "definition": "The process of reviewing trades to evaluate performance and adherence to risk management protocols."
        },
        {
          "term": "Checklist Flexibility",
          "definition": "The ability to adapt a checklist based on changing market conditions."
        }
      ],
      "whyThisMatters": "Avoiding these pitfalls enhances the effectiveness of risk management strategies and fosters disciplined trading practices.",
      "realLifeExample": "Experiencing a 5% drawdown on a long position in SPY due to inflexible checklist application during a market correction, where a more adaptable approach could have mitigated losses.",
      "commonMistake": "Ignoring the need for flexibility in checklist application can lead to missed opportunities and increased risk exposure.",
      "quickNote": "Recognizing and avoiding common pitfalls strengthens risk management discipline.",
      "mentorText": "Be vigilant about your checklist. If you find yourself ignoring its guidelines, reassess your approach immediately to avoid costly mistakes.",
      "mentorAnalogy": "Like a chef adjusting a recipe based on ingredient availability, traders must adapt their risk management checklists to current market conditions."
    },
    "taskData": null,
    "visualKey": "risk-checklists"
  },
  {
    "type": "concept",
    "title": "Integrating Technology in Risk Management",
    "label": "Core Track",
    "body": "### Technology Integration: Automating Risk Management Checklists\nLeveraging technology can significantly enhance the efficiency and accuracy of risk management checklists. This card discusses **how to utilize software and tools for automating checklist processes**.\n\n* **Automated Alerts**: Implement systems that trigger alerts based on predefined risk parameters, such as position size exceeding 2% of capital or volatility thresholds being breached.\n* **Data Analytics Tools**: Use platforms like TradeStation or NinjaTrader to analyze historical performance data, ensuring that your checklist is informed by empirical evidence rather than intuition.\n* **Integration with Trading Platforms**: Ensure your risk management checklist is integrated with your trading platform to automatically update risk metrics in real-time, reducing manual errors and oversight.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Automated Alerts",
          "definition": "Notifications triggered by specific risk parameter breaches."
        },
        {
          "term": "Data Analytics Tools",
          "definition": "Software used to analyze trading performance and risk metrics."
        },
        {
          "term": "Integration",
          "definition": "The process of connecting risk management systems with trading platforms."
        }
      ],
      "whyThisMatters": "Automating risk management processes minimizes human error and ensures adherence to capital rules under varying market conditions.",
      "realLifeExample": "Using MetaTrader 4, a trader sets an automated alert for when their total exposure exceeds 5% of their account balance, prompting a review of open positions.",
      "commonMistake": "Failing to regularly update the technology tools based on changing market conditions can lead to outdated risk assessments.",
      "quickNote": "Automate your risk checklist to enhance accuracy and efficiency.",
      "mentorText": "Think of technology as your co-pilot. It helps you monitor parameters and alerts you when you're veering off course, allowing you to focus on decision-making.",
      "mentorAnalogy": "Just as an aircraft uses autopilot to maintain altitude and course, integrating technology in trading keeps your risk parameters aligned without constant manual oversight."
    },
    "taskData": null,
    "visualKey": "risk-checklists"
  },
  {
    "type": "concept",
    "title": "Case Studies of Effective Risk Management",
    "label": "Core Track",
    "body": "### Real-World Applications: Effective Risk Management Practices\nAnalyzing case studies provides insights into successful implementations of risk management checklists. This card explores **specific examples of traders and firms that have effectively utilized risk management strategies**.\n\n* **Case Study: Hedge Fund XYZ**: This firm implemented a pre-trade checklist that included a maximum drawdown limit of 10% and a position sizing rule based on volatility, resulting in a 30% reduction in losses during market downturns.\n* **Case Study: Retail Trader ABC**: By adopting a risk checklist that included liquidity checks and news event assessments, this trader improved their win rate by 15% over six months, demonstrating the effectiveness of thorough preparation.\n* **Case Study: Institutional Trading Desk**: An institutional desk utilized a multi-tiered checklist that included risk/reward ratios and correlation assessments, leading to a 20% increase in overall portfolio performance in a volatile market environment.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Maximum Drawdown Limit",
          "definition": "The maximum allowable loss from a peak to a trough in a trading strategy."
        },
        {
          "term": "Position Sizing Rule",
          "definition": "Guidelines determining the amount of capital allocated to a specific trade."
        },
        {
          "term": "Liquidity Checks",
          "definition": "Assessments to ensure that assets can be bought or sold without causing significant price changes."
        }
      ],
      "whyThisMatters": "Understanding successful case studies equips traders with proven strategies to enhance their own risk management practices.",
      "realLifeExample": "Hedge Fund XYZ's implementation of a maximum drawdown limit of 10% allowed them to avoid catastrophic losses during the 2020 market crash, preserving capital for future opportunities.",
      "commonMistake": "Overlooking the importance of documenting and analyzing past trades can lead to repeated mistakes in risk management.",
      "quickNote": "Learn from real-world examples to refine your risk management strategies.",
      "mentorText": "Look at what successful traders have done. Their experiences can guide you in crafting a robust risk management checklist that fits your style.",
      "mentorAnalogy": "Just as a surgeon studies past surgeries to improve techniques, traders must analyze case studies to refine their risk management practices."
    },
    "taskData": null,
    "visualKey": "risk-checklists"
  },
  {
    "type": "concept",
    "title": "Creating a Personalized Risk Checklist",
    "label": "Core Track",
    "body": "### Tailoring Your Risk Checklist: Aligning with Personal Trading Styles\nA personalized risk checklist ensures that your trading approach aligns with your specific objectives and capital rules. This card outlines **how to create a checklist that reflects your unique trading style**.\n\n* **Define Your Risk Tolerance**: Establish clear parameters for maximum acceptable risk per trade, such as limiting individual trades to 1% of your total capital.\n* **Incorporate Trading Style Elements**: If you are a swing trader, include criteria for holding periods and volatility assessments to ensure trades align with your strategy.\n* **Regular Review and Adjustment**: Schedule periodic reviews of your checklist to adapt to changing market conditions or personal trading goals, ensuring ongoing relevance and effectiveness.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Tolerance",
          "definition": "The level of risk an individual is willing to accept in trading."
        },
        {
          "term": "Swing Trader",
          "definition": "A trader who holds positions for several days to capitalize on expected price movements."
        },
        {
          "term": "Periodic Review",
          "definition": "Regular assessments of trading strategies and risk parameters."
        }
      ],
      "whyThisMatters": "A personalized checklist enhances discipline and consistency in trading, directly impacting long-term profitability.",
      "realLifeExample": "A swing trader defines their risk tolerance at 1% per trade and incorporates a volatility check that requires a minimum ATR of 0.5 before entering a position, leading to more calculated trades.",
      "commonMistake": "Failing to customize the checklist to personal trading styles can lead to misalignment with individual risk preferences.",
      "quickNote": "Your risk checklist should reflect your unique trading style and objectives.",
      "mentorText": "Craft your checklist like a tailored suit. It should fit your trading style perfectly, ensuring comfort and effectiveness in execution.",
      "mentorAnalogy": "Just as an architect designs a building to suit its environment and purpose, your risk checklist must be designed to fit your trading style and objectives."
    },
    "taskData": null,
    "visualKey": "risk-checklists"
  },
  {
    "type": "concept",
    "title": "Practical Application of Risk Checklists",
    "label": "Core Track",
    "body": "### Engaging with Risk Checklists: Practical Exercises\nApplying the concepts learned in this module through practical exercises solidifies understanding and implementation of risk management checklists. This card focuses on **hands-on activities to reinforce checklist usage**.\n\n* **Scenario Analysis**: Engage in exercises where you analyze hypothetical market scenarios, applying your risk checklist to determine the viability of potential trades based on defined parameters.\n* **Mock Trading Sessions**: Conduct mock trading sessions where you use your personalized risk checklist to evaluate trades in real-time, assessing adherence to risk rules and decision-making processes.\n* **Peer Review**: Collaborate with fellow traders to review each other's checklists, providing feedback on alignment with capital rules and effectiveness in risk management.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Analysis",
          "definition": "The process of evaluating potential trading situations based on specific criteria."
        },
        {
          "term": "Mock Trading Sessions",
          "definition": "Simulated trading activities to practice strategies without financial risk."
        },
        {
          "term": "Peer Review",
          "definition": "Collaborative evaluation of trading strategies and risk management practices."
        }
      ],
      "whyThisMatters": "Practical application reinforces theoretical knowledge, ensuring traders can effectively implement risk management strategies in real trading environments.",
      "realLifeExample": "During a mock trading session, a trader applies their risk checklist and identifies that a potential trade violates their maximum risk rule, preventing an unnecessary loss.",
      "commonMistake": "Neglecting to practice with mock sessions can lead to unpreparedness in real trading situations.",
      "quickNote": "Engage in practical exercises to solidify your understanding of risk management checklists.",
      "mentorText": "Practice makes perfect. Treat mock sessions like live trading to build confidence and ensure your checklist works under pressure.",
      "mentorAnalogy": "Just as a pilot conducts simulation flights to prepare for real conditions, traders must practice using their risk checklists to ensure readiness for actual market scenarios."
    },
    "taskData": null,
    "visualKey": "risk-checklists"
  },
  {
    "type": "concept",
    "title": "Key Concepts in Risk Management Checklists",
    "label": "Core Track",
    "body": "### Core Principles: Risk Management Checklists Overview\nA structured pre-trade checklist is essential for aligning trading decisions with capital preservation strategies. This card summarizes the critical components of a robust risk management framework.\n\n* **Pre-Trade Criteria**: Ensure that every trade meets predefined criteria, including risk-reward ratios, volatility assessments, and market conditions prior to execution.\n* **Capital Allocation Rules**: Implement strict capital allocation guidelines, such as maximum risk per trade (e.g., 1% of total capital) and overall portfolio exposure limits to mitigate systemic risk.\n* **Post-Trade Evaluation**: Conduct a thorough review of each trade against the checklist to identify adherence to risk parameters and areas for improvement in future trades.",
    "context": {
      "keyTerms": [
        {
          "term": "Pre-Trade Checklist",
          "definition": "A systematic list of criteria to evaluate before entering a trade."
        },
        {
          "term": "Capital Allocation",
          "definition": "The strategy of distributing capital across various trades to manage risk."
        }
      ],
      "whyThisMatters": "A rigorous checklist ensures that trading decisions are consistent with risk management protocols, reducing emotional biases.",
      "realLifeExample": "Before entering a trade on the S&P 500, a trader verifies that the risk-reward ratio is at least 2:1, volatility is within acceptable limits, and overall portfolio risk does not exceed 5%.",
      "commonMistake": "Failing to update the checklist based on changing market conditions can lead to significant risk exposure.",
      "quickNote": "A comprehensive pre-trade checklist is vital for disciplined trading and risk management.",
      "mentorText": "You must adhere strictly to your pre-trade checklist. If any parameter is off, reconsider your entry. This discipline saves you from impulsive decisions.",
      "mentorAnalogy": "Think of your checklist like an aircraft pre-flight inspection. Each item must be verified to ensure safety before takeoff."
    },
    "taskData": null,
    "visualKey": "risk-checklists"
  },
  {
    "type": "practice",
    "title": "Advanced Risk Management Checklist Application",
    "label": "Core Track",
    "body": "### Core Application: Risk Management Checklist in Action\nThis card focuses on the advanced application of risk management checklists to ensure capital defense and adherence to risk metrics. \n\n* **Scenario Assessment**: Evaluate market conditions and potential news events that could impact your trade. For example, assess how an upcoming Federal Reserve announcement may affect USD pairs.\n* **Risk Metrics Calculation**: Calculate the maximum allowable loss for a trade based on your account size. For instance, with a $50,000 account, a 1% risk per trade allows for a maximum loss of $500.\n* **Trade Review Process**: After executing a trade, analyze whether it adhered to the checklist. Document any deviations and their impact on the outcome to refine future checklists.",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Assessment",
          "definition": "Evaluating external factors that may influence trade outcomes."
        },
        {
          "term": "Risk Metrics",
          "definition": "Quantitative measures used to assess potential losses."
        }
      ],
      "whyThisMatters": "Applying advanced checklist principles ensures that trades are executed within defined risk parameters, enhancing capital preservation.",
      "realLifeExample": "Before trading GBP/USD, a trader assesses the potential impact of a Bank of England interest rate decision, calculates a maximum loss of $300 for a $30,000 account, and confirms that the trade aligns with their risk metrics.",
      "commonMistake": "Overlooking external market factors during the scenario assessment phase can lead to unexpected losses.",
      "quickNote": "Advanced checklist application is essential for maintaining strict risk management standards.",
      "mentorText": "Always assess the market context before executing a trade. If the conditions aren't favorable, hold off. Your checklist is your shield.",
      "mentorAnalogy": "Consider this process like a surgeon preparing for an operation; every risk factor must be evaluated to ensure a successful outcome."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You are preparing to trade AUD/USD. What is the first step in your advanced risk management checklist?",
      "options": [
        {
          "id": "0",
          "text": "Calculate the maximum allowable loss based on your account size.",
          "isCorrect": true,
          "feedback": "Correct. Calculating maximum allowable loss is essential to determine risk exposure."
        },
        {
          "id": "1",
          "text": "Enter the trade immediately based on market sentiment.",
          "isCorrect": false,
          "feedback": "Incorrect. Entering without assessment ignores critical risk factors."
        },
        {
          "id": "2",
          "text": "Review past trades for emotional biases.",
          "isCorrect": false,
          "feedback": "While important, this step should follow the immediate risk assessment."
        },
        {
          "id": "3",
          "text": "Set a profit target based on recent price action.",
          "isCorrect": false,
          "feedback": "Setting profit targets is secondary to assessing risk and loss potential."
        }
      ]
    },
    "visualKey": "risk-checklists"
  },
  {
    "type": "summary",
    "title": "Final Insights on Risk Management Checklists",
    "label": "Core Track",
    "body": "### Summary: Risk Management Checklist Effectiveness\nA well-structured risk management checklist is critical for ensuring that trading decisions align with capital preservation goals. \n\n* **Consistency in Execution**: Regularly applying the checklist leads to disciplined trading practices, reducing emotional decision-making.\n* **Continuous Improvement**: Post-trade evaluations based on checklist adherence allow for ongoing refinement of trading strategies and risk management protocols.\n* **Holistic Risk Assessment**: Incorporating both technical and fundamental analysis into the checklist ensures a comprehensive approach to risk management.",
    "context": {
      "keyTerms": [
        {
          "term": "Checklist Effectiveness",
          "definition": "The degree to which a checklist improves trading discipline and risk management."
        },
        {
          "term": "Holistic Risk Assessment",
          "definition": "An approach that considers multiple factors in evaluating trade risks."
        }
      ],
      "whyThisMatters": "Effective use of checklists enhances trading discipline and reduces the likelihood of significant losses.",
      "realLifeExample": "After a series of trades on the NASDAQ, a trader reviews their checklist adherence, noting that trades executed without checklist compliance resulted in a 15% higher loss rate.",
      "commonMistake": "Neglecting to update the checklist based on new market insights can lead to outdated risk management practices.",
      "quickNote": "A rigorous checklist fosters disciplined trading and continuous improvement.",
      "mentorText": "Your checklist is your best ally. Use it consistently to guide your trades and learn from every outcome. This is how you grow as a trader.",
      "mentorAnalogy": "Think of your checklist as a quality control process in manufacturing; it ensures that every product meets safety and performance standards before delivery."
    },
    "taskData": null,
    "visualKey": "risk-checklists"
  }
];
