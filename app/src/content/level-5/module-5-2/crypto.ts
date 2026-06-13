import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Position Sizing for Low-Cap Altcoins",
    "label": "Crypto Track",
    "body": "### Position Sizing: Low-Cap Altcoins & ATR\nDynamic position sizing is essential when trading low-cap altcoins due to their inherent volatility. This card outlines **how to adjust position sizes using the Average True Range (ATR)** to mitigate risk effectively.\n\n* **ATR Calculation**: Calculate the ATR over a specified period (e.g., 14 days) to gauge the average volatility of the altcoin. For instance, if the ATR of a low-cap altcoin is $0.50, this indicates a typical price movement of $0.50 over that period.\n* **Position Size Formula**: Use the formula: Position Size = (Account Risk Amount) / (ATR x Risk Multiplier). If your account risk is $200 and you decide on a risk multiplier of 2, your position size would be $200 / ($0.50 x 2) = 200 shares.\n* **Volatility Adjustment**: Continuously monitor the ATR; if it increases to $0.75, recalculate your position size to adapt to the new volatility level, ensuring that your risk remains consistent.\n",
    "context": {
      "keyTerms": [
        {
          "term": "ATR",
          "definition": "Average True Range, a measure of market volatility."
        },
        {
          "term": "Low-Cap Altcoin",
          "definition": "Cryptocurrencies with a smaller market capitalization, often exhibiting higher volatility."
        }
      ],
      "whyThisMatters": "Properly sizing positions in low-cap altcoins using ATR can prevent significant losses during volatile market conditions, enhancing capital preservation.",
      "realLifeExample": "Consider a low-cap altcoin trading at $5 with an ATR of $0.50. If your risk tolerance allows for a $200 loss, you can safely purchase 200 shares, adjusting as the ATR fluctuates.",
      "commonMistake": "Traders often use fixed position sizes without considering the volatility of low-cap altcoins, leading to disproportionate risk exposure.",
      "quickNote": "Use ATR to dynamically size positions in low-cap altcoins to manage volatility risk effectively.",
      "mentorText": "When trading low-cap altcoins, always let ATR guide your position size. If the market is more volatile, reduce your size to maintain the same risk level.",
      "mentorAnalogy": "Think of position sizing like adjusting the throttle in a race car; when the track is slippery (high volatility), you need to ease off to maintain control."
    },
    "taskData": null,
    "visualKey": "volatility-sizing"
  },
  {
    "type": "concept",
    "title": "Comparing Bitcoin and Altcoin Volatility",
    "label": "Crypto Track",
    "body": "### Volatility Comparison: Bitcoin vs. Low-Cap Altcoins\nUnderstanding the relative volatility between Bitcoin and low-cap altcoins is crucial for informed position sizing. This card explains **how to use ATR to compare these assets effectively**.\n\n* **ATR Benchmarking**: Calculate the ATR for Bitcoin and the selected low-cap altcoin. For example, if Bitcoin's ATR is $1,500 and the altcoin's ATR is $0.50, this indicates Bitcoin is significantly less volatile.\n* **Relative Risk Assessment**: Determine the risk ratio by comparing ATR values. If Bitcoin's ATR is 3,000 times that of the altcoin, position sizes should reflect this disparity to maintain consistent risk exposure.\n* **Position Size Adjustment**: Adjust your position size based on the volatility comparison. If your Bitcoin position is 1 BTC and the altcoin's ATR suggests a 10x higher volatility, consider limiting your altcoin position to 0.1 BTC to align risk levels.\n",
    "context": {
      "keyTerms": [
        {
          "term": "ATR Benchmarking",
          "definition": "The process of comparing ATR values between different assets to assess relative volatility."
        },
        {
          "term": "Risk Ratio",
          "definition": "A measure comparing the volatility of two assets to inform position sizing."
        }
      ],
      "whyThisMatters": "Accurately comparing volatility between Bitcoin and altcoins allows traders to optimize their risk management strategies and position sizes.",
      "realLifeExample": "If Bitcoin has an ATR of $1,500 and a low-cap altcoin has an ATR of $0.50, a trader might adjust their altcoin position to 1/3 of their Bitcoin position to account for the higher volatility.",
      "commonMistake": "Traders often overlook the volatility differences between Bitcoin and altcoins, leading to misaligned position sizes and increased risk.",
      "quickNote": "Use ATR to compare Bitcoin and altcoin volatility, adjusting position sizes accordingly.",
      "mentorText": "When assessing Bitcoin against altcoins, always check the ATR. If the altcoin is much more volatile, reduce your position size to keep your risk consistent.",
      "mentorAnalogy": "Consider this like comparing the braking distance of a sports car versus a sedan; understanding the differences helps you adjust your driving style (or position size) accordingly."
    },
    "taskData": null,
    "visualKey": "volatility-sizing"
  },
  {
    "type": "concept",
    "title": "Managing High-Beta Assets with ATR",
    "label": "Crypto Track",
    "body": "### High-Beta Assets: Position Management with ATR\nHigh-beta assets in the crypto market exhibit greater price fluctuations than the market average. This card focuses on **using ATR to manage position sizes for these volatile assets**.\n\n* **Identifying High-Beta Assets**: Determine if an asset is high-beta by comparing its ATR to the market average. For instance, if the market average ATR is $1,000 and an asset's ATR is $2,000, it is classified as high-beta.\n* **Dynamic Position Sizing**: Use the formula: Position Size = (Account Risk Amount) / (ATR x Risk Multiplier). For a high-beta asset with an ATR of $2,000 and a risk multiplier of 1.5, if your risk is $300, your position size would be $300 / ($2,000 x 1.5) = 0.1 assets.\n* **Continuous Monitoring**: Regularly reassess the ATR; if the ATR decreases to $1,500, recalculate your position size to reflect the reduced volatility, allowing for a larger position while maintaining risk control.\n",
    "context": {
      "keyTerms": [
        {
          "term": "High-Beta Asset",
          "definition": "An asset that exhibits greater volatility compared to the overall market."
        },
        {
          "term": "Dynamic Position Sizing",
          "definition": "Adjusting position sizes based on current market volatility metrics."
        }
      ],
      "whyThisMatters": "Effectively managing high-beta assets with ATR ensures that traders can capitalize on volatility while controlling risk exposure.",
      "realLifeExample": "If a high-beta crypto asset has an ATR of $2,000 and your risk tolerance allows for a $300 loss, you would limit your position size to 0.1 assets to align with your risk parameters.",
      "commonMistake": "Traders frequently misjudge their position sizes in high-beta assets, leading to excessive risk and potential losses.",
      "quickNote": "Utilize ATR to manage position sizes in high-beta assets, ensuring risk is appropriately calibrated.",
      "mentorText": "When trading high-beta assets, always let ATR dictate your position size. If volatility spikes, reduce your size to keep your risk in check.",
      "mentorAnalogy": "Managing high-beta assets is like flying a plane in turbulent weather; you must adjust your controls (position size) to maintain stability."
    },
    "taskData": null,
    "visualKey": "volatility-sizing"
  },
  {
    "type": "concept",
    "title": "Crypto Trading Strategies Using ATR",
    "label": "Crypto Track",
    "body": "### Trading Strategies: Leveraging ATR for Position Sizing\nImplementing effective trading strategies in the crypto market requires a robust understanding of volatility. This card explores **specific strategies that utilize ATR for dynamic position sizing and risk management**.\n\n* **Breakout Strategies**: Use ATR to set entry points for breakout trades. For example, if an asset's price breaks above a resistance level with an ATR of $1.00, position size should be calculated based on the ATR to manage risk effectively.\n* **Trend Following**: In a trending market, adjust position sizes based on the ATR to capture larger moves. If an asset's ATR increases from $1.00 to $1.50, increase your position size to capitalize on the trend while maintaining risk control.\n* **Stop-Loss Placement**: Use ATR to determine optimal stop-loss levels. If the ATR is $2.00, place your stop-loss at a distance of 1.5 ATRs from your entry point to account for volatility, ensuring your position size reflects this risk.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Breakout Strategy",
          "definition": "A trading strategy that involves entering a position when the price breaks through a defined resistance level."
        },
        {
          "term": "Trend Following",
          "definition": "A strategy that involves trading in the direction of the prevailing market trend."
        }
      ],
      "whyThisMatters": "Utilizing ATR in trading strategies allows for more precise risk management and position sizing, enhancing overall trading performance.",
      "realLifeExample": "In a breakout scenario, if an asset breaks above $10 with an ATR of $1.00, you might enter with a position size of 100 shares, placing a stop-loss at $8.50 to manage risk effectively.",
      "commonMistake": "Traders often neglect to adjust their position sizes based on ATR when implementing strategies, leading to inconsistent risk management.",
      "quickNote": "Incorporate ATR into your trading strategies for dynamic position sizing and effective risk management.",
      "mentorText": "When executing a trading strategy, always consider ATR for position sizing. If volatility increases, adjust your size to maintain consistent risk across trades.",
      "mentorAnalogy": "Think of trading strategies like a chef adjusting recipes; the ATR is your ingredient measurement, ensuring each dish (trade) is balanced and consistent."
    },
    "taskData": null,
    "visualKey": "volatility-sizing"
  },
  {
    "type": "concept",
    "title": "Analyzing Market Sentiment for Crypto Volatility",
    "label": "Crypto Track",
    "body": "### Market Sentiment: Impact on Crypto Volatility\nMarket sentiment significantly influences price fluctuations in the cryptocurrency market, making it essential to incorporate this analysis into position sizing decisions based on ATR.\n\n* **Sentiment Indicators**: Utilize tools such as the Fear & Greed Index to gauge market sentiment. A high greed level often correlates with increased volatility, suggesting larger position sizes may be warranted.\n* **News Impact Assessment**: Major news events can cause spikes in volatility. For example, if Bitcoin experiences a 10% price surge following a regulatory announcement, adjust your position size to reflect the increased ATR.\n* **Volume Analysis**: Monitor trading volume alongside sentiment. A surge in volume during bullish sentiment can indicate sustained volatility, justifying a more aggressive position sizing approach.",
    "visualKey": "volatility-sizing",
    "taskData": null
  },
  {
    "type": "concept",
    "title": "Practical Application of ATR in Crypto Trading",
    "label": "Crypto Track",
    "body": "### ATR Calculation: Practical Application in Crypto Trading\nApplying the Average True Range (ATR) in real-world scenarios enhances your ability to size positions effectively based on market conditions.\n\n* **ATR Calculation**: Calculate the ATR over a specified period (e.g., 14 days) to determine the average volatility. For instance, if Ethereum's ATR is $50, this indicates a typical price movement range.\n* **Position Sizing Formula**: Use the formula: Position Size = (Account Risk Amount) / (ATR x Risk Multiplier). If your account risk is $200 and you choose a risk multiplier of 2, your position size would be $200 / ($50 x 2) = 2 contracts.\n* **Dynamic Adjustments**: Regularly update ATR calculations to reflect changing market conditions. If the ATR for Litecoin increases to $70, recalculate your position size to maintain consistent risk management.",
    "visualKey": "volatility-sizing",
    "taskData": null
  },
  {
    "type": "practice",
    "title": "Summary of Crypto Volatility Sizing",
    "label": "Crypto Track",
    "body": "### Key Concepts: Volatility-Adjusted Sizing in Crypto Trading\nThis card consolidates the critical aspects of volatility-adjusted sizing, emphasizing the application of ATR for effective risk management.\n\n* **ATR as a Sizing Tool**: The ATR serves as a dynamic measure of market volatility, guiding position sizing decisions. A higher ATR indicates greater volatility, necessitating smaller position sizes to mitigate risk.\n* **Risk Management Integration**: Integrate ATR with your overall risk management strategy. For example, if Bitcoin's ATR is $100, and you risk 1% of a $10,000 account, your position size should be adjusted accordingly to reflect this volatility.\n* **Continuous Monitoring**: Regularly monitor ATR and market conditions to adapt your position sizes. If market volatility increases, reassess your positions to ensure alignment with your risk tolerance.",
    "visualKey": "volatility-sizing"
  },
  {
    "type": "summary",
    "title": "Crypto Advanced Risk Management 8",
    "label": "Crypto Track",
    "body": "### Advanced Application: Volatility-Adjusted Sizing in Crypto\nThis card delves into advanced strategies for applying volatility-adjusted sizing in cryptocurrency trading, focusing on capital defense and risk management metrics.\n\n* **Capital Defense Strategies**: Implement strategies that utilize ATR to protect capital during high volatility periods. For instance, if Bitcoin's ATR spikes, consider reducing position sizes to safeguard against potential drawdowns.\n* **Risk Metrics Evaluation**: Regularly evaluate risk metrics such as Value at Risk (VaR) in conjunction with ATR. If your VaR indicates a potential loss of $500, ensure your position sizing reflects this risk threshold.\n* **Scenario Planning**: Develop scenario plans based on varying ATR levels. For example, if the ATR for a crypto asset increases from $30 to $60, outline how this impacts your overall risk exposure and adjust your trading strategy accordingly.",
    "visualKey": "volatility-sizing",
    "taskData": null
  }
];
