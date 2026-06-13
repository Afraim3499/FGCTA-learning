import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Spot-Perp Funding Rate Status",
    "label": "Crypto Track",
    "body": "### Funding Rate: Spot vs. Perpetual Contracts\nMonitoring the funding rate between spot and perpetual contracts is essential for maintaining profitability in crypto trading. This card emphasizes **the importance of checking the funding rate status before entering a trade**.\n\n* **Funding Rate Calculation**: The funding rate is calculated based on the difference between the perpetual contract price and the spot price, typically expressed as a percentage. A positive funding rate indicates that long positions pay shorts, while a negative rate indicates the opposite.\n* **Impact on Trade Viability**: If the funding rate is excessively high, it can erode profits over time, particularly in longer-term trades. For instance, if the funding rate for BTC perpetual contracts is 0.1% per 8 hours, a trader holding a $10,000 position would incur $10 in fees every 8 hours.\n* **Strategic Timing**: Aligning trade entries with favorable funding rates can enhance overall returns. For example, entering a long position in ETH when the funding rate is negative can provide an additional edge as the trader receives funding fees instead of paying them.",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate",
          "definition": "The fee paid between long and short positions in perpetual contracts, reflecting market sentiment."
        }
      ],
      "whyThisMatters": "Understanding the funding rate prevents unexpected costs that can diminish trade profitability, especially in leveraged positions.",
      "realLifeExample": "A trader enters a long position on ETH with a funding rate of 0.2% while the spot price is $2,000. Over a week, this results in $28 in funding fees, impacting the overall trade outcome.",
      "commonMistake": "Failing to check the funding rate before entering a trade can lead to unexpected costs that erode profits.",
      "quickNote": "Always verify the funding rate before executing trades to avoid unnecessary fees.",
      "mentorText": "Before you enter a trade, always check the funding rate. If you're going long and the rate is high, you might be paying more than you think. Make sure your profits aren't eaten away by fees.",
      "mentorAnalogy": "Think of the funding rate like a toll on a highway. If you know the toll is high, you might choose a different route to save money."
    },
    "taskData": null,
    "visualKey": "risk-checklists"
  },
  {
    "type": "concept",
    "title": "Liquidation Price Buffer Analysis",
    "label": "Crypto Track",
    "body": "### Liquidation Price: Buffer Zone Analysis\nEstablishing a buffer zone around your liquidation price is critical for risk management in volatile markets. This card details **how to analyze and set appropriate liquidation price buffers**.\n\n* **Calculating Liquidation Price**: The liquidation price is determined by the leverage used and the entry price. For instance, with 10x leverage on a $1,000 position, the liquidation price is set at a 10% adverse move from the entry price.\n* **Buffer Zone Implementation**: A buffer zone should be established to protect against sudden market moves. If the liquidation price is $45,000 for a BTC position, setting a buffer of 5% means the trader should ideally exit or adjust positions before the price hits $42,750.\n* **Market Conditions Consideration**: During high volatility, such as news events or market corrections, increasing the buffer can prevent liquidation. For example, if BTC is experiencing rapid swings, adjusting the buffer to 10% can provide additional safety.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation Price",
          "definition": "The price level at which a leveraged position is automatically closed to prevent further losses."
        }
      ],
      "whyThisMatters": "A well-defined liquidation price buffer minimizes the risk of forced liquidation during volatile market conditions.",
      "realLifeExample": "A trader enters a long position in BTC at $50,000 with 10x leverage. The liquidation price is $45,000, but they set a buffer at $42,750 to avoid liquidation during a market dip.",
      "commonMistake": "Neglecting to set a liquidation buffer can lead to unexpected losses during market volatility.",
      "quickNote": "Always establish a liquidation price buffer to safeguard against market fluctuations.",
      "mentorText": "You need to know your liquidation price and set a buffer. If the market moves against you, that buffer can save your position from being liquidated.",
      "mentorAnalogy": "Consider your liquidation price buffer like a safety net for a tightrope walker. It provides an extra layer of security against unexpected falls."
    },
    "taskData": null,
    "visualKey": "risk-checklists"
  },
  {
    "type": "concept",
    "title": "Isolated Margin Verification",
    "label": "Crypto Track",
    "body": "### Isolated Margin: Risk Exposure Management\nVerifying isolated margin settings is essential for controlling risk exposure in leveraged trading. This card covers **the importance of confirming isolated margin configurations before executing trades**.\n\n* **Understanding Isolated Margin**: In isolated margin mode, only the margin allocated to a specific position is at risk, unlike cross margin, where the entire account balance is exposed. This allows for better risk management on individual trades.\n* **Setting Appropriate Levels**: Traders must determine the amount of margin to allocate to each position based on their risk tolerance. For example, if a trader allocates $500 in isolated margin for a $5,000 BTC position, only that $500 is at risk if the trade moves against them.\n* **Reassessing Margin Levels**: Regularly reassess margin levels based on market conditions. If volatility increases, consider reducing the margin allocated to limit potential losses. For instance, during a market crash, lowering the isolated margin from $500 to $300 can help protect capital.",
    "context": {
      "keyTerms": [
        {
          "term": "Isolated Margin",
          "definition": "A margin setting where only the funds allocated to a specific position are at risk."
        }
      ],
      "whyThisMatters": "Proper verification of isolated margin settings ensures that traders do not overexpose their accounts to risk during adverse market movements.",
      "realLifeExample": "A trader uses isolated margin for a $10,000 long position in ETH with $1,000 allocated. If ETH drops 20%, only the $1,000 is at risk, protecting the rest of the account.",
      "commonMistake": "Failing to verify isolated margin settings can lead to excessive risk exposure and potential account liquidation.",
      "quickNote": "Always confirm isolated margin settings to manage risk effectively.",
      "mentorText": "Before you place a trade, double-check your isolated margin settings. This ensures you're only risking what you're willing to lose on that specific position.",
      "mentorAnalogy": "Think of isolated margin like a safety deposit box; only the contents of that box are at risk, not your entire wealth."
    },
    "taskData": null,
    "visualKey": "risk-checklists"
  },
  {
    "type": "concept",
    "title": "Market Volatility Assessment",
    "label": "Crypto Track",
    "body": "### Market Volatility: Pre-Trade Assessment\nAssessing market volatility is crucial for adjusting your trading strategy and risk parameters. This card explains **how to evaluate volatility before executing trades**.\n\n* **Volatility Indicators**: Utilize indicators such as the Average True Range (ATR) or Bollinger Bands to gauge market volatility. For example, if BTC's ATR is 2.5%, it indicates that the price can swing by that percentage on average.\n* **Adjusting Position Sizes**: Based on volatility assessments, adjust position sizes accordingly. In a highly volatile environment, reduce position sizes to mitigate risk. For instance, if BTC is experiencing swings of 5%, consider reducing your position size by 50% to maintain risk levels.\n* **News Event Consideration**: Be aware of scheduled news events that can impact volatility. For example, if a major regulatory announcement is expected, increase your caution and potentially delay trades until after the news is released.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Volatility",
          "definition": "The degree of variation in trading prices over time, often measured by indicators like ATR."
        }
      ],
      "whyThisMatters": "Assessing market volatility allows traders to adapt their strategies and manage risk effectively, especially during turbulent periods.",
      "realLifeExample": "A trader notices BTC's ATR is 5% before a major news event. They decide to reduce their position size by 50% to account for potential price swings.",
      "commonMistake": "Ignoring market volatility can lead to overexposure and significant losses during price fluctuations.",
      "quickNote": "Always assess market volatility before executing trades to adjust risk parameters.",
      "mentorText": "Before you trade, check the market's volatility. If it's high, adjust your position size to protect your capital from sudden swings.",
      "mentorAnalogy": "Assessing volatility is like checking the weather before a flight; knowing the conditions helps you prepare for turbulence."
    },
    "taskData": null,
    "visualKey": "risk-checklists"
  },
  {
    "type": "concept",
    "title": "Regulatory Considerations in Crypto Trading",
    "label": "Crypto Track",
    "body": "### Regulatory Framework: Compliance in Crypto Trading\nUnderstanding the regulatory landscape is essential for mitigating legal risks in crypto trading. This card details **how to incorporate regulatory considerations into your risk management checklist**.\n\n* **Jurisdictional Compliance**: Identify the regulations specific to your trading jurisdiction, such as AML (Anti-Money Laundering) and KYC (Know Your Customer) requirements, to ensure full compliance.\n* **Reporting Obligations**: Maintain awareness of reporting requirements for tax purposes and transaction disclosures to avoid penalties and legal issues.\n* **Exchange Regulations**: Different exchanges may have varying compliance standards; ensure your checklist includes verification of the exchange’s regulatory status and operational licenses.",
    "context": {
      "keyTerms": [
        {
          "term": "AML",
          "definition": "Anti-Money Laundering regulations aimed at preventing illicit financial activities."
        },
        {
          "term": "KYC",
          "definition": "Know Your Customer procedures to verify the identity of clients."
        }
      ],
      "whyThisMatters": "Regulatory compliance protects your trading operations from legal repercussions and enhances credibility with stakeholders.",
      "realLifeExample": "Trading on Binance requires adherence to KYC protocols; failure to comply could result in account suspension and loss of access to funds.",
      "commonMistake": "Neglecting to verify the regulatory status of the trading platform before executing trades.",
      "quickNote": "Always verify regulatory compliance before trading in crypto markets.",
      "mentorText": "Before you place a trade, ensure you’ve checked the regulatory requirements. It’s like confirming your pilot’s license before taking off.",
      "mentorAnalogy": "Just as an architect must adhere to building codes and regulations before constructing a building, a trader must comply with financial regulations to operate legally."
    },
    "taskData": null,
    "visualKey": "risk-checklists"
  },
  {
    "type": "concept",
    "title": "Technical Indicators for Crypto Trading",
    "label": "Crypto Track",
    "body": "### Key Metrics: Technical Indicators in Crypto\nUtilizing technical indicators is vital for informed decision-making in crypto trading. This card outlines **how to integrate key technical indicators into your pre-trade checklist**.\n\n* **Moving Averages (MA)**: Use the 50-day and 200-day MAs to identify trends; ensure your checklist includes crossovers as potential entry or exit signals.\n* **Relative Strength Index (RSI)**: Incorporate RSI readings to gauge overbought or oversold conditions, with thresholds set at 70 and 30 for potential reversals.\n* **Volume Analysis**: Assess trading volume alongside price movements to confirm trends; include volume spikes in your checklist as indicators of market strength.",
    "context": {
      "keyTerms": [
        {
          "term": "Moving Average",
          "definition": "A statistical calculation used to analyze data points by creating averages over a specific time period."
        },
        {
          "term": "Relative Strength Index",
          "definition": "A momentum oscillator that measures the speed and change of price movements."
        }
      ],
      "whyThisMatters": "Incorporating technical indicators into your checklist enhances your ability to make data-driven trading decisions.",
      "realLifeExample": "If Bitcoin's 50-day MA crosses above the 200-day MA while RSI is at 65, this signals a potential bullish trend, warranting a buy decision.",
      "commonMistake": "Relying solely on one indicator without considering the broader context or multiple metrics.",
      "quickNote": "Integrate multiple technical indicators for a comprehensive trading analysis.",
      "mentorText": "Think of your checklist as a diagnostic tool; just like a mechanic checks multiple systems in a car, you need to assess various indicators before making a trade.",
      "mentorAnalogy": "Similar to a pilot conducting a pre-flight checklist to ensure all instruments are functioning, a trader must verify technical indicators before executing trades."
    },
    "taskData": null,
    "visualKey": "risk-checklists"
  },
  {
    "type": "practice",
    "title": "Crypto Pre-Trade Checklist Application",
    "label": "Crypto Track",
    "body": "### Practical Application: Crypto Pre-Trade Checklist\nEngaging in practical exercises reinforces the application of your pre-trade checklist in crypto trading scenarios. This card focuses on **applying the checklist to real-world trading situations**.\n\n* **Scenario Analysis**: Evaluate a given market scenario, ensuring all checklist items are addressed, including regulatory checks, technical indicators, and risk management parameters.\n* **Trade Simulation**: Conduct simulated trades based on checklist criteria, documenting decisions and outcomes to refine your trading strategy.\n* **Performance Review**: After executing trades, review the checklist adherence and outcomes to identify areas for improvement and adjust future checklists accordingly.",
    "context": {
      "keyTerms": [
        {
          "term": "Scenario Analysis",
          "definition": "The process of evaluating potential future events by considering alternative possible outcomes."
        },
        {
          "term": "Trade Simulation",
          "definition": "A practice method that allows traders to execute trades without financial risk."
        }
      ],
      "whyThisMatters": "Practical application of the checklist ensures readiness and consistency in trading decisions, minimizing errors.",
      "realLifeExample": "Simulating a trade on Ethereum after confirming all checklist items, such as compliance and technical indicators, leads to a more disciplined trading approach.",
      "commonMistake": "Failing to simulate trades, which can lead to unpreparedness in real market conditions.",
      "quickNote": "Regularly practice checklist applications to enhance trading discipline and decision-making.",
      "mentorText": "Treat every simulated trade as if it were real; this discipline will prepare you for the actual market environment.",
      "mentorAnalogy": "Just as a surgeon practices procedures in a simulation before operating on a patient, a trader must rehearse their checklist before entering the market."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You are preparing to trade Bitcoin. Which of the following checklist items should you prioritize?",
      "options": [
        {
          "id": "0",
          "text": "Confirm the regulatory compliance of the exchange.",
          "isCorrect": true,
          "feedback": "This is essential to avoid legal issues and ensure a secure trading environment."
        },
        {
          "id": "1",
          "text": "Check the latest social media trends about Bitcoin.",
          "isCorrect": false,
          "feedback": "Social media trends are not a reliable checklist item for regulatory compliance or technical analysis."
        },
        {
          "id": "2",
          "text": "Review the latest news articles about Bitcoin.",
          "isCorrect": false,
          "feedback": "While news can impact prices, it does not replace the need for regulatory checks."
        },
        {
          "id": "3",
          "text": "Look at the price of Bitcoin in the last 24 hours.",
          "isCorrect": false,
          "feedback": "Historical price data is important, but it should not replace compliance checks in your pre-trade checklist."
        }
      ]
    },
    "visualKey": "risk-checklists"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Risk Management",
    "label": "Crypto Track",
    "body": "### Key Takeaways: Crypto Risk Management\nA thorough understanding of risk management principles is crucial for successful crypto trading. This card summarizes **the essential components of a robust pre-trade audit**.\n\n* **Regulatory Compliance**: Always verify that your trading activities align with applicable regulations to mitigate legal risks.\n* **Technical Indicators**: Incorporate relevant technical indicators into your checklist to inform trading decisions based on market conditions.\n* **Checklist Discipline**: Regularly practice applying your pre-trade checklist to ensure consistency and preparedness in trading operations.",
    "context": {
      "keyTerms": [
        {
          "term": "Risk Management",
          "definition": "The process of identifying, assessing, and controlling threats to an organization's capital and earnings."
        },
        {
          "term": "Pre-Trade Audit",
          "definition": "A systematic review of all parameters before executing a trade."
        }
      ],
      "whyThisMatters": "A comprehensive risk management approach minimizes potential losses and enhances trading performance.",
      "realLifeExample": "A trader who adheres to a detailed pre-trade checklist is less likely to encounter regulatory issues or make impulsive trading decisions.",
      "commonMistake": "Overlooking the importance of a structured checklist, leading to inconsistent trading practices.",
      "quickNote": "A disciplined approach to risk management is essential for sustainable trading success.",
      "mentorText": "Remember, a well-structured checklist is your best defense against impulsive decisions and regulatory pitfalls.",
      "mentorAnalogy": "Just as a pilot relies on a flight plan to navigate safely, a trader must depend on a comprehensive checklist to ensure successful trades."
    },
    "taskData": null,
    "visualKey": "risk-checklists"
  }
];
