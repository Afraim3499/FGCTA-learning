import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Multi-Venue Structure Validation",
    "label": "Crypto Track",
    "body": "### Multi-Venue Structure: Confirming Swing Points\nMulti-venue structure validation is essential for confirming swing highs and lows across different exchanges. This card outlines **how to effectively validate market structure using data from multiple crypto exchanges**.\n\n* **Cross-Exchange Analysis**: Compare swing points from at least three major exchanges (e.g., Binance, Coinbase, Kraken) to confirm the validity of identified swing highs and lows. A swing point must be recognized across multiple venues to be considered reliable.\n* **Volume Correlation**: Ensure that the volume at swing points aligns across exchanges. A swing high on Binance with low volume compared to Coinbase may indicate a false signal.\n* **Time Synchronization**: Validate swing points by analyzing price action at the same time intervals across exchanges. For example, if BTC/USD shows a swing high at 3:00 PM EST on Binance, check for confirmation on Coinbase and Kraken at the same timestamp.",
    "context": {
      "keyTerms": [
        {
          "term": "Multi-Venue Validation",
          "definition": "The process of confirming market structure by comparing price action across different exchanges."
        }
      ],
      "whyThisMatters": "Accurate swing point validation across multiple venues reduces the risk of false signals and enhances trading decisions.",
      "realLifeExample": "On October 15, 2023, BTC/USD reached a swing high of $30,000 on Binance, confirmed by similar highs of $30,050 on Coinbase and $29,950 on Kraken within the same 5-minute interval.",
      "commonMistake": "Relying solely on one exchange for swing point validation can lead to misinterpretation of market structure.",
      "quickNote": "Validate swing points by confirming them across multiple exchanges.",
      "mentorText": "When I validate swing points, I always check multiple exchanges. If I see a swing high on Binance, I immediately look at Coinbase and Kraken to see if they confirm that level. If they don’t, I’m cautious.",
      "mentorAnalogy": "Think of validating swing points like checking the weather from different meteorological stations. If three stations report rain, it's likely to rain; if only one does, you should be skeptical."
    },
    "taskData": null,
    "visualKey": "crypto-venue-confirmed-structure"
  },
  {
    "type": "concept",
    "title": "Validating Structure Shifts with Spot Volume",
    "label": "Crypto Track",
    "body": "### Spot Volume: Confirming Structure Shifts\nSpot volume data plays a critical role in validating structure shifts in the crypto market. This card discusses **how to leverage spot volume to confirm market movements**.\n\n* **Volume Spike Analysis**: Identify significant volume spikes at swing points. A structure shift is more credible if accompanied by a volume increase of at least 50% above the 14-day average.\n* **Divergence Detection**: Look for divergences between price action and volume. If price makes a new high but volume declines, it may indicate a potential reversal rather than a continuation.\n* **Volume Profile Integration**: Utilize volume profile tools to assess where the majority of trading activity occurs. A shift in structure should align with increased volume at new support or resistance levels.",
    "context": {
      "keyTerms": [
        {
          "term": "Spot Volume",
          "definition": "The total trading volume of an asset executed in the spot market over a specified period."
        }
      ],
      "whyThisMatters": "Validating structure shifts with volume data enhances the reliability of trading decisions and reduces exposure to false breakouts.",
      "realLifeExample": "On September 10, 2023, ETH/USD experienced a structure shift at $1,800, supported by a volume spike of 70% above its 14-day average, confirming the new bullish trend.",
      "commonMistake": "Ignoring volume data can lead to misinterpretation of market structure and increased risk.",
      "quickNote": "Use spot volume to validate shifts in market structure.",
      "mentorText": "When I see a structure shift, I immediately check the volume. If the volume is high, I’m more confident in the move. If it’s low, I start questioning the validity.",
      "mentorAnalogy": "Validating structure shifts with volume is like a surgeon checking vital signs before proceeding with an operation. High volume indicates a healthy market condition."
    },
    "taskData": null,
    "visualKey": "crypto-venue-confirmed-structure"
  },
  {
    "type": "concept",
    "title": "Identifying Perp-Driven Speculative Spikes",
    "label": "Crypto Track",
    "body": "### Speculative Spikes: Recognizing Perpetual Contract Influence\nPerpetual contracts can create speculative spikes that distort market structure. This card focuses on **how to identify these spikes and differentiate them from genuine price movements**.\n\n* **Contract Volume Analysis**: Monitor the volume of perpetual contracts during price spikes. A spike in price with a corresponding increase in perpetual contract volume may indicate speculative activity rather than organic market movement.\n* **Open Interest Evaluation**: Analyze changes in open interest alongside price movements. A significant price increase with rising open interest suggests new positions are being opened, often leading to speculative spikes.\n* **Liquidation Events**: Be aware of liquidation events in perpetual markets. A sudden price drop may trigger liquidations, causing rapid price movements that can mislead traders about the underlying market structure.",
    "context": {
      "keyTerms": [
        {
          "term": "Perpetual Contracts",
          "definition": "A type of futures contract that does not have an expiration date, allowing traders to hold positions indefinitely."
        }
      ],
      "whyThisMatters": "Identifying speculative spikes helps traders avoid false signals and enhances the accuracy of market structure analysis.",
      "realLifeExample": "On August 20, 2023, BTC/USD spiked from $25,000 to $27,000 in 10 minutes, driven by a 200% increase in perpetual contract volume, indicating a speculative spike rather than a fundamental shift.",
      "commonMistake": "Failing to distinguish between genuine price movements and speculative spikes can lead to poor trading decisions.",
      "quickNote": "Recognize speculative spikes driven by perpetual contracts to avoid misinterpretation of market signals.",
      "mentorText": "When I see a rapid price movement, I check the perpetual contract volume. If it’s high, I know it’s likely speculative and not a true market shift.",
      "mentorAnalogy": "Identifying speculative spikes is like a firefighter assessing smoke. If the smoke is thick but the fire is small, it indicates a potential flare-up rather than a full-blown blaze."
    },
    "taskData": null,
    "visualKey": "crypto-venue-confirmed-structure"
  },
  {
    "type": "concept",
    "title": "Analyzing Multi-Venue Market Structure",
    "label": "Crypto Track",
    "body": "### Multi-Venue Analysis: Understanding Price Action\nAnalyzing market structure across multiple venues enhances the understanding of price action in crypto. This card outlines **techniques for effective multi-venue market structure analysis**.\n\n* **Price Action Comparison**: Compare price movements across exchanges to identify consistent trends. If BTC/USD rises on Binance but falls on Coinbase, this discrepancy may indicate a divergence in market sentiment.\n* **Arbitrage Opportunities**: Look for price discrepancies between venues. Significant differences in price can indicate potential arbitrage opportunities, but also highlight differing market structures.\n* **Liquidity Assessment**: Evaluate the liquidity available on each venue. A venue with higher liquidity may provide more reliable price action, while lower liquidity could lead to erratic movements that misrepresent market structure.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Structure Analysis",
          "definition": "The process of examining price action and volume across different venues to understand market behavior."
        }
      ],
      "whyThisMatters": "A comprehensive analysis of market structure across multiple venues provides deeper insights into price action and potential trading opportunities.",
      "realLifeExample": "On July 5, 2023, BTC/USD traded at $32,500 on Binance while only $32,200 on Kraken, indicating a potential arbitrage opportunity and highlighting differing market structures.",
      "commonMistake": "Neglecting to analyze multiple venues can lead to a skewed understanding of market dynamics.",
      "quickNote": "Analyze market structure across multiple venues for a comprehensive view of price action.",
      "mentorText": "When I analyze market structure, I always look at multiple exchanges. If I see a price discrepancy, I dig deeper to understand why it’s happening. It often reveals valuable insights.",
      "mentorAnalogy": "Analyzing multi-venue market structure is like a detective examining multiple witness accounts. Each account provides a piece of the puzzle, leading to a clearer picture of the truth."
    },
    "taskData": null,
    "visualKey": "crypto-venue-confirmed-structure"
  }
];
