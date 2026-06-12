import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Crypto Venue Disagreement Filter Introduction",
    "label": "Crypto Track",
    "body": "### Crypto Venue Disagreement Filter Introduction\nCrypto trading occurs across multiple venues, each with potentially different order flows and liquidity profiles. This card introduces **how to identify and filter out setups with venue disagreement**.\n\n* **Venue Price Divergence**: If significant price discrepancies exist between major exchanges (e.g., Binance vs. Coinbase), it indicates fragmented liquidity and potential manipulation. Avoid setups where venue prices diverge beyond a predefined threshold.\n* **Volume Anomalies**: Disproportionate volume spikes on one venue compared to others can signal artificial activity. Plans should be filtered out if volume anomalies are detected without corresponding market-wide activity.\n* **Order Book Imbalances**: Large order book imbalances on one venue, not mirrored across others, suggest localized pressure. Filter out setups where order book imbalances exceed a set ratio compared to the average across venues.",
    "context": {
      "keyTerms": [
        {
          "term": "Venue Disagreement",
          "definition": "Differences in price, volume, or order book data across trading platforms."
        }
      ],
      "whyThisMatters": "Venue disagreement can indicate unreliable market conditions, increasing the risk of executing low-probability trades.",
      "realLifeExample": "During a BTC rally, Binance shows a $500 higher price than Coinbase, with no similar volume increase. This discrepancy suggests potential manipulation.",
      "commonMistake": "Ignoring venue-specific anomalies and assuming uniform market conditions across all platforms.",
      "quickNote": "Disagreement across venues often signals unreliable conditions.",
      "mentorText": "When trading crypto, think of each venue as a different witness to the same event. If their stories don't match, be cautious.",
      "mentorAnalogy": "Imagine a weather forecast where one station predicts a storm while others predict sunshine. Trading on the storm prediction alone is risky."
    },
    "taskData": null,
    "visualKey": "crypto-venue-disagreement-filter"
  },
  {
    "type": "concept",
    "title": "Funding Rate Filters",
    "label": "Crypto Track",
    "body": "### Funding Rate Filters\nFunding rates indicate the cost of holding long or short positions in perpetual futures. This card explains **how to use funding rates to filter crypto trading plans**.\n\n* **Rate Disparity**: A significant disparity in funding rates across exchanges can signal market imbalance. Plans should be filtered if funding rates differ by more than a set percentage between major venues.\n* **Extreme Rates**: Extremely high or low funding rates suggest unsustainable positions. Avoid setups where funding rates exceed historical norms, indicating potential reversals.\n* **Rate Trend Analysis**: Consistent trends in funding rates (e.g., increasing positive rates) can confirm market sentiment. Plans are eligible if funding rate trends align with the proposed trade direction.",
    "context": {
      "keyTerms": [
        {
          "term": "Funding Rate",
          "definition": "The periodic payment exchanged between long and short positions in perpetual futures."
        }
      ],
      "whyThisMatters": "Funding rates reflect trader sentiment and can indicate potential reversals or continuations.",
      "realLifeExample": "ETH funding rates on BitMEX are +0.1% while Binance shows -0.05%. This disparity suggests conflicting market views.",
      "commonMistake": "Overlooking funding rate trends and focusing solely on price action.",
      "quickNote": "Funding rates reveal market sentiment and potential reversals.",
      "mentorText": "Think of funding rates as the market's heartbeat. If it's erratic, the market might be about to change direction.",
      "mentorAnalogy": "Funding rates are like interest rates in banking; they reflect the cost of holding positions and can signal economic shifts."
    },
    "taskData": null,
    "visualKey": "crypto-venue-disagreement-filter"
  },
  {
    "type": "concept",
    "title": "Liquidation Cluster Filters",
    "label": "Crypto Track",
    "body": "### Liquidation Cluster Filters\nLiquidation clusters occur when a large number of leveraged positions are forcefully closed. This card details **how to use liquidation clusters as a filter in crypto trading**.\n\n* **Cluster Identification**: Identify significant clusters of liquidations using data from exchanges. Plans should be filtered out if recent liquidation clusters suggest market exhaustion.\n* **Cluster Impact Analysis**: Analyze the impact of liquidation clusters on price action. Eligible setups require clear evidence of price stabilization post-liquidation.\n* **Cluster Timing**: The timing of liquidation clusters relative to session opens or closes can indicate market manipulation. Avoid setups where clusters occur at suspicious times.",
    "context": {
      "keyTerms": [
        {
          "term": "Liquidation Cluster",
          "definition": "A concentration of forced position closures in a short time frame."
        }
      ],
      "whyThisMatters": "Liquidation clusters can cause sharp price movements and signal potential reversals or continuations.",
      "realLifeExample": "A sudden BTC drop triggers $100 million in liquidations on Bitfinex, followed by price stabilization, indicating potential reversal.",
      "commonMistake": "Misinterpreting liquidation clusters as mere volatility without assessing their impact.",
      "quickNote": "Liquidation clusters can signal market exhaustion or manipulation.",
      "mentorText": "Liquidation clusters are like a dam breaking. Once the water settles, you can see the true landscape.",
      "mentorAnalogy": "Think of liquidation clusters as a controlled demolition. The dust settles, revealing the structural integrity of the market."
    },
    "taskData": null,
    "visualKey": "crypto-venue-disagreement-filter"
  },
  {
    "type": "concept",
    "title": "BTC Dominance Filters",
    "label": "Crypto Track",
    "body": "### BTC Dominance Filters\nBitcoin dominance measures BTC's market cap relative to the overall crypto market. This card explains **how to use BTC dominance to filter crypto trading plans**.\n\n* **Dominance Trend Analysis**: Analyze trends in BTC dominance to gauge market sentiment. Plans should align with BTC dominance trends; rising dominance suggests BTC-led market moves.\n* **Dominance Reversal Signals**: Sharp reversals in BTC dominance can indicate shifts in market focus. Avoid setups that contradict recent dominance reversals.\n* **Cross-Market Correlation**: Assess correlations between BTC dominance and altcoin performance. Eligible plans require consistent correlation patterns supporting the trade thesis.",
    "context": {
      "keyTerms": [
        {
          "term": "BTC Dominance",
          "definition": "The percentage of the total cryptocurrency market cap that is Bitcoin."
        }
      ],
      "whyThisMatters": "BTC dominance reflects market sentiment and can indicate shifts in capital flows between BTC and altcoins.",
      "realLifeExample": "BTC dominance rises from 40% to 45% while altcoins decline, suggesting a shift towards BTC safety.",
      "commonMistake": "Ignoring BTC dominance trends and focusing solely on individual altcoin charts.",
      "quickNote": "BTC dominance trends reveal market sentiment shifts.",
      "mentorText": "BTC dominance is like the tide; it lifts or lowers all boats. Pay attention to its direction.",
      "mentorAnalogy": "Think of BTC dominance as the flagship in a naval fleet. Its direction often dictates the movement of the entire fleet."
    },
    "taskData": null,
    "visualKey": "crypto-venue-disagreement-filter"
  },
  {
    "type": "concept",
    "title": "24/7 Market Activity Filters",
    "label": "Crypto Track",
    "body": "### Crypto Venue Disagreement Filter: 24/7 Market Activity Filters\nCrypto markets operate continuously, presenting unique challenges for filtering trading plans. This card addresses **how to manage plan eligibility in a non-stop trading environment**.\n\n* **Time Zone Overlap**: Identify periods where multiple global time zones overlap, such as the transition from the Asian to European sessions. Plans should be filtered out if they rely on thin liquidity during these overlaps.\n* **Volatility Spikes**: Monitor for volatility spikes during off-peak hours, which often indicate low-probability setups. Plans should be rejected if volatility is not supported by significant volume.\n* **Weekend Activity**: Evaluate weekend market activity critically. Plans formed during weekends should be scrutinized for lack of institutional participation, which can skew price action.",
    "context": {
      "keyTerms": [
        {
          "term": "Time Zone Overlap",
          "definition": "Periods when trading activity from different global regions coincides, affecting liquidity and volatility."
        },
        {
          "term": "Volatility Spikes",
          "definition": "Sudden increases in price movement, often occurring during low liquidity periods."
        },
        {
          "term": "Weekend Activity",
          "definition": "Market activity that occurs during weekends, typically characterized by lower institutional involvement."
        }
      ],
      "whyThisMatters": "Continuous market activity can obscure true liquidity conditions, leading to false signals if not properly filtered.",
      "realLifeExample": "BTCUSD experiences a sharp 5% move at 3 AM GMT on a Sunday, but volume analysis shows only retail participation, indicating a low-probability setup.",
      "commonMistake": "Traders often mistake weekend price movements as reliable signals, ignoring the lack of institutional volume.",
      "quickNote": "Filter plans formed during low-volume periods to avoid false signals.",
      "mentorText": "Crypto never sleeps, but that doesn't mean every move is valid. Focus on where the real volume is to filter out noise.",
      "mentorAnalogy": "Think of it like a 24/7 airport. Just because planes can land anytime doesn't mean every flight is on schedule or carrying passengers."
    },
    "taskData": null,
    "visualKey": "crypto-venue-disagreement-filter"
  },
  {
    "type": "concept",
    "title": "Venue Liquidity Filters",
    "label": "Crypto Track",
    "body": "### Crypto Venue Disagreement Filter: Venue Liquidity Filters\nDifferent crypto venues offer varying liquidity conditions. This card explains **how to assess venue liquidity to determine trading plan eligibility**.\n\n* **Order Book Depth**: Analyze the depth of the order book across multiple venues. Plans should be filtered out if they rely on thin order books that can be easily manipulated.\n* **Cross-Venue Discrepancies**: Identify discrepancies in price and volume across major exchanges. A plan is ineligible if significant differences exist, indicating fragmented liquidity.\n* **Venue-Specific Events**: Be aware of venue-specific events such as maintenance or outages. Plans should be rejected if they coincide with these events, as they can distort liquidity.",
    "context": {
      "keyTerms": [
        {
          "term": "Order Book Depth",
          "definition": "The number of buy and sell orders at various price levels in a market."
        },
        {
          "term": "Cross-Venue Discrepancies",
          "definition": "Differences in price or volume data between different trading venues."
        },
        {
          "term": "Venue-Specific Events",
          "definition": "Events unique to a trading venue that can affect its market operations, such as maintenance."
        }
      ],
      "whyThisMatters": "Liquidity conditions vary significantly across venues, impacting the reliability of trading signals.",
      "realLifeExample": "ETHUSD shows a $10 price difference between Binance and Coinbase during a high-volume event, indicating fragmented liquidity.",
      "commonMistake": "Ignoring cross-venue price differences, leading to decisions based on incomplete market data.",
      "quickNote": "Check multiple venues for consistent liquidity before committing to a plan.",
      "mentorText": "Don't trust a single venue's data. Cross-check across platforms to ensure you're not trading on false liquidity.",
      "mentorAnalogy": "It's like shopping for a rare item. Just because one store has it at a certain price doesn't mean that's the market value. Check multiple stores."
    },
    "taskData": null,
    "visualKey": "crypto-venue-disagreement-filter"
  },
  {
    "type": "practice",
    "title": "Applying Crypto Filters in Practice",
    "label": "Crypto Track",
    "body": "### Crypto Venue Disagreement Filter: Applying Crypto Filters in Practice\nEngage in practical exercises to apply crypto-specific filters to trading plans. This card provides hands-on experience in filtering crypto setups using evidence thresholds.",
    "context": {
      "keyTerms": [
        {
          "term": "Evidence Thresholds",
          "definition": "Criteria that must be met to validate a trading plan's eligibility."
        }
      ],
      "whyThisMatters": "Practical application solidifies understanding and helps avoid costly mistakes in live trading.",
      "realLifeExample": "A trader evaluates BTCUSD across Binance and Kraken, noticing a 2% price discrepancy and thin order book on Kraken, leading to plan rejection.",
      "commonMistake": "Failing to apply filters consistently, resulting in exposure to low-probability setups.",
      "quickNote": "Consistent application of filters is key to maintaining high plan quality.",
      "mentorText": "Practice makes perfect. Apply these filters until they become second nature, just like a pilot running pre-flight checks.",
      "mentorAnalogy": "Think of it like a chef tasting every dish before serving. Consistent quality checks ensure only the best plans are executed."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You notice a 3% price difference for BTCUSD between Binance and Bitfinex, with low volume on Bitfinex. What action should you take?",
      "options": [
        {
          "id": "0",
          "text": "Reject the plan due to cross-venue discrepancies.",
          "isCorrect": true,
          "feedback": "Correct. The price difference and low volume indicate fragmented liquidity, making the setup unreliable."
        },
        {
          "id": "1",
          "text": "Proceed with the plan, focusing on Binance data.",
          "isCorrect": false,
          "feedback": "Incorrect. Relying on a single venue's data can lead to exposure to false signals."
        },
        {
          "id": "2",
          "text": "Wait for volume to increase on Bitfinex before deciding.",
          "isCorrect": false,
          "feedback": "Incorrect. Waiting for volume doesn't address the existing discrepancy issue."
        },
        {
          "id": "3",
          "text": "Ignore the discrepancy as it is common in crypto markets.",
          "isCorrect": false,
          "feedback": "Incorrect. Discrepancies should not be ignored as they indicate potential liquidity issues."
        }
      ]
    },
    "visualKey": "crypto-venue-disagreement-filter"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Plan Filters",
    "label": "Crypto Track",
    "body": "### Crypto Venue Disagreement Filter: Summary of Crypto Plan Filters\nReview the key concepts of crypto plan eligibility filters. This card summarizes the strategies for filtering low-probability crypto configurations effectively.\n\n* **Continuous Market Monitoring**: Emphasize the importance of filtering plans based on time zone overlaps, volatility spikes, and weekend activity.\n* **Venue Liquidity Assessment**: Reinforce the need to evaluate order book depth, cross-venue discrepancies, and venue-specific events to ensure reliable liquidity.\n* **Consistent Application**: Highlight the necessity of consistently applying these filters to maintain high-quality trading plans.",
    "context": {
      "keyTerms": [
        {
          "term": "Continuous Market Monitoring",
          "definition": "Ongoing assessment of market conditions to filter out unreliable setups."
        },
        {
          "term": "Consistent Application",
          "definition": "Regularly applying established criteria to maintain plan quality."
        }
      ],
      "whyThisMatters": "A structured approach to filtering enhances decision-making and reduces exposure to low-probability trades.",
      "realLifeExample": "A trader consistently applies filters and avoids a low-volume BTCUSD setup that later experiences a 10% retracement.",
      "commonMistake": "Neglecting to review and apply filters regularly, leading to inconsistent trading outcomes.",
      "quickNote": "Structured filtering is your first defense against unreliable setups.",
      "mentorText": "Think of these filters as your pre-flight checklist. Skipping steps can lead to disaster.",
      "mentorAnalogy": "Like an architect reviewing blueprints, these filters ensure every plan is structurally sound before execution."
    },
    "taskData": null,
    "visualKey": "crypto-venue-disagreement-filter"
  }
];
