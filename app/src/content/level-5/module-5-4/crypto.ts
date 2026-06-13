import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Partial Closures on Perpetual Contracts",
    "label": "Crypto Track",
    "body": "### Strategy: Partial Profit Taking on Perpetual Contracts\nTaking partial closures allows traders to lock in gains while maintaining exposure to the remaining position. This card outlines **how to effectively execute partial closures on perpetual contracts to secure USD profits**.\n\n* **Execution Timing**: Execute partial closures at 1R to realize gains while leaving the remaining position to potentially grow. For example, if a BTC position increases from $20,000 to $21,000, close 50% at $21,000 to secure $1,000 in profit.\n* **Margin Adjustment**: After a partial closure, adjust the margin requirements accordingly. If the initial margin was $2,000 for a full BTC position, after closing half, the margin requirement may be reduced to $1,000, freeing up capital for other trades.\n* **Risk-Free Funding**: The realized profit can be reinvested or used to cover the margin of the remaining position, effectively financing the risk of the trade without additional capital outlay.",
    "context": {
      "keyTerms": [
        {
          "term": "Perpetual Contracts",
          "definition": "A type of futures contract without an expiration date, allowing for continuous trading."
        },
        {
          "term": "Partial Closure",
          "definition": "The act of closing a portion of a trading position to secure profits."
        }
      ],
      "whyThisMatters": "Effective partial closures can significantly enhance capital efficiency and risk management in volatile crypto markets.",
      "realLifeExample": "Closing 0.5 BTC at $21,000 after an entry at $20,000 secures a $500 profit while maintaining exposure to the remaining 0.5 BTC.",
      "commonMistake": "Failing to adjust margin requirements after a partial closure can lead to unnecessary liquidation risks.",
      "quickNote": "Partial closures lock in profits and adjust margin requirements effectively.",
      "mentorText": "Think of your position as a boat. When you take some weight off by closing part of your position, you not only secure your gains but also make the boat easier to manage in rough waters.",
      "mentorAnalogy": "Like a pilot adjusting fuel load for optimal flight performance, a trader must adjust their position size to ensure smooth sailing through market volatility."
    },
    "taskData": null,
    "visualKey": "scaling-out-basics"
  },
  {
    "type": "concept",
    "title": "Managing Margin Requirements in Crypto",
    "label": "Crypto Track",
    "body": "### Risk Management: Margin Requirements in Crypto\nEffective margin management is essential when scaling out of crypto positions. This card details **how to maintain optimal margin levels while executing partial closures**.\n\n* **Initial Margin Calculation**: Understand the initial margin required for your position size. For instance, a $10,000 BTC position at 10x leverage requires a $1,000 margin.\n* **Post-Closure Margin Adjustment**: After executing a partial closure, recalculate your margin. If you close 50% of your position, your new margin requirement may drop to $500, allowing for better capital allocation.\n* **Monitoring Margin Levels**: Continuously monitor your margin levels to avoid liquidation. If your margin falls below the required threshold, consider additional closures or reducing position size to maintain compliance.",
    "context": {
      "keyTerms": [
        {
          "term": "Margin Requirement",
          "definition": "The minimum amount of equity a trader must maintain in their account to support open positions."
        },
        {
          "term": "Leverage",
          "definition": "The use of borrowed funds to increase the potential return on investment."
        }
      ],
      "whyThisMatters": "Proper margin management prevents liquidation and allows traders to capitalize on market movements without overexposing their accounts.",
      "realLifeExample": "If a trader initially has a $1,000 margin for a $10,000 position and closes 50%, their new margin requirement is $500, freeing up $500 for other trades.",
      "commonMistake": "Neglecting to adjust margin calculations after partial closures can lead to unexpected margin calls.",
      "quickNote": "Always recalculate margin after taking partial profits to ensure compliance and risk management.",
      "mentorText": "Think of your margin as the fuel in your trading engine. If you don’t manage it properly, you risk running out of fuel and stalling your trading journey.",
      "mentorAnalogy": "Just as a ship captain must monitor fuel levels to avoid running aground, a trader must keep a close eye on margin requirements to navigate the market safely."
    },
    "taskData": null,
    "visualKey": "scaling-out-basics"
  },
  {
    "type": "concept",
    "title": "Effective Profit-Taking Strategies in Crypto",
    "label": "Crypto Track",
    "body": "### Strategy: Profit-Taking in Volatile Markets\nImplementing effective profit-taking strategies is crucial in the crypto market's volatile environment. This card discusses **strategies for profit-taking that align with market conditions**.\n\n* **Volatility Assessment**: Use the Average True Range (ATR) to gauge market volatility. For example, if the ATR for ETH is $100, consider scaling out at 1R when ETH moves $100 in your favor.\n* **Trailing Stops**: Implement trailing stops to lock in profits while allowing for potential upside. For instance, if you enter a position at $2,000 and set a trailing stop at $50, you secure profits as the price rises.\n* **Market Sentiment Analysis**: Monitor market sentiment indicators, such as the Fear and Greed Index, to determine optimal profit-taking points. If sentiment shifts to extreme greed, consider taking profits to mitigate risk.",
    "context": {
      "keyTerms": [
        {
          "term": "Average True Range (ATR)",
          "definition": "A technical indicator that measures market volatility."
        },
        {
          "term": "Trailing Stop",
          "definition": "An order that moves with the market price to secure profits."
        }
      ],
      "whyThisMatters": "Effective profit-taking strategies can maximize gains while minimizing exposure to adverse market movements.",
      "realLifeExample": "If BTC rises from $30,000 to $31,000, using a trailing stop of $500 would allow you to capture profits if the price retraces back to $30,500.",
      "commonMistake": "Failing to adjust profit-taking strategies according to market volatility can lead to missed opportunities or excessive losses.",
      "quickNote": "Utilize volatility and sentiment to inform profit-taking strategies.",
      "mentorText": "When the market is volatile, think of profit-taking as a game of chess. You need to anticipate your opponent's moves and position your pieces wisely to secure your advantage.",
      "mentorAnalogy": "Like a chef adjusting seasoning based on the dish's flavor profile, a trader must adapt their profit-taking strategy to the market's volatility."
    },
    "taskData": null,
    "visualKey": "scaling-out-basics"
  },
  {
    "type": "concept",
    "title": "Psychological Factors in Crypto Trading",
    "label": "Crypto Track",
    "body": "### Psychology: Influences on Scaling Out Decisions\nUnderstanding psychological factors is vital for making informed scaling out decisions in crypto trading. This card explores **the psychological influences that affect profit-taking behavior**.\n\n* **Fear of Missing Out (FOMO)**: Recognize how FOMO can lead to premature scaling out or holding onto positions too long. For example, if BTC surges rapidly, traders may hesitate to close positions, fearing they will miss further gains.\n* **Market Sentiment Impact**: Be aware of how positive or negative market sentiment can cloud judgment. If the market sentiment is overly optimistic, traders may delay taking profits, risking a reversal.\n* **Emotional Discipline**: Establish a trading plan that incorporates emotional discipline. Set predefined profit targets and stick to them to avoid emotional decision-making during volatile price movements.",
    "context": {
      "keyTerms": [
        {
          "term": "Fear of Missing Out (FOMO)",
          "definition": "The anxiety of missing potential profits, leading to impulsive trading decisions."
        },
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of investors toward a particular security or financial market."
        }
      ],
      "whyThisMatters": "Understanding psychological influences helps traders maintain discipline and make rational decisions when scaling out.",
      "realLifeExample": "A trader who experiences FOMO may hold onto a BTC position during a rapid price surge, ultimately missing the opportunity to secure profits at a favorable level.",
      "commonMistake": "Allowing emotions to dictate scaling out decisions can lead to inconsistent trading results.",
      "quickNote": "Recognize psychological influences to maintain discipline in profit-taking.",
      "mentorText": "Trading is like a high-stakes poker game; if you let your emotions dictate your moves, you risk losing everything. Stick to your strategy and don’t let FOMO cloud your judgment.",
      "mentorAnalogy": "Just as a surgeon must remain calm and focused during a procedure, a trader must manage their emotions to execute trades effectively."
    },
    "taskData": null,
    "visualKey": "scaling-out-basics"
  },
  {
    "type": "concept",
    "title": "Crypto Partial Target Invalidation Boundaries",
    "label": "Crypto Track",
    "body": "### Market Signals: Timing Your Scale-Out Decisions\nRecognizing the right market signals is crucial for effective scaling out of crypto positions. This card focuses on **key indicators that suggest optimal scaling out opportunities**.\n\n* **Resistance Levels**: Monitor significant resistance levels where price action may stall. For instance, if Bitcoin approaches a resistance at $30,000, consider scaling out a portion of your position to lock in profits.\n* **Volume Analysis**: Increased trading volume accompanying price movements can indicate strength or weakness. A spike in volume while Ethereum hits a new high suggests a potential reversal, prompting a scale-out decision.\n* **Technical Indicators**: Utilize indicators like the RSI or MACD to identify overbought conditions. If Litecoin's RSI exceeds 70 while approaching a historical high, it may be an appropriate moment to take partial profits.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Resistance Levels",
          "definition": "Price points where upward movement may halt due to selling pressure."
        },
        {
          "term": "Volume Analysis",
          "definition": "Examination of trading volume to assess market strength."
        },
        {
          "term": "Technical Indicators",
          "definition": "Mathematical calculations based on price and volume to forecast market trends."
        }
      ],
      "whyThisMatters": "Identifying these signals enhances the precision of your scaling-out strategy, allowing for more informed profit-taking decisions.",
      "realLifeExample": "When Bitcoin approaches $32,000 with a 70% RSI and a significant volume spike, scaling out 50% of your position can secure profits while allowing the remainder to ride potential further gains.",
      "commonMistake": "Traders often scale out too early, missing out on additional profits when market signals indicate continued upward momentum.",
      "quickNote": "Key market signals include resistance levels, volume spikes, and technical indicators.",
      "mentorText": "When you see Bitcoin hitting a resistance level with high volume, that's your cue. Don't hesitate to scale out; it’s about securing profits while managing risk.",
      "mentorAnalogy": "Think of scaling out like a pilot adjusting altitude based on weather conditions. Just as a pilot monitors signals to ensure a safe flight path, you must observe market signals to navigate your trades effectively."
    },
    "taskData": null,
    "visualKey": "scaling-out-basics"
  },
  {
    "type": "concept",
    "title": "Common Pitfalls in Crypto Scaling Out",
    "label": "Crypto Track",
    "body": "### Pitfalls: Avoiding Common Mistakes in Scaling Out\nUnderstanding the common pitfalls in scaling out can prevent costly errors. This card highlights **key mistakes traders make that can undermine their scaling-out strategy**.\n\n* **Emotional Decision-Making**: Allowing emotions to dictate scaling out can lead to premature exits. For example, scaling out due to fear during a minor pullback in a bull market can result in missed profits.\n* **Ignoring Market Conditions**: Failing to assess broader market conditions can lead to misjudgments. If the overall crypto market is bullish, scaling out too soon may prevent you from capitalizing on further upward movement.\n* **Inconsistent Strategy Application**: Inconsistency in applying scaling-out rules can lead to confusion. For instance, if you scale out at different percentages without a clear plan, it can disrupt your risk management framework.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Emotional Decision-Making",
          "definition": "Making trading decisions based on feelings rather than analysis."
        },
        {
          "term": "Market Conditions",
          "definition": "The overall state of the market, including trends and sentiment."
        },
        {
          "term": "Inconsistent Strategy Application",
          "definition": "Applying different rules or methods without a coherent plan."
        }
      ],
      "whyThisMatters": "Recognizing these pitfalls allows traders to refine their approach, ensuring a disciplined and effective scaling-out strategy.",
      "realLifeExample": "A trader who scales out 70% of their Ethereum position during a minor dip, driven by fear, may miss a subsequent rally that increases their profits significantly.",
      "commonMistake": "Many traders let fear or greed dictate their scaling-out decisions, leading to inconsistent results.",
      "quickNote": "Common pitfalls include emotional decisions, ignoring market conditions, and inconsistent strategy application.",
      "mentorText": "Stay disciplined. Don’t let fear push you to scale out too early. Stick to your strategy and trust your analysis.",
      "mentorAnalogy": "Scaling out is like a surgeon following a strict protocol during an operation. Deviating from the plan due to emotional pressure can jeopardize the entire procedure."
    },
    "taskData": null,
    "visualKey": "scaling-out-basics"
  },
  {
    "type": "practice",
    "title": "Advanced Strategies for Scaling Out in Crypto",
    "label": "Crypto Track",
    "body": "### Strategies: Timing and Conditions for Effective Scaling Out\nAdvanced strategies for scaling out require a nuanced understanding of market timing and conditions. This card explores **strategic approaches to maximize profit-taking**.\n\n* **Trailing Stops**: Implement trailing stops to lock in profits as the price rises. For example, if you set a trailing stop on Cardano at 5% below the peak price, you can secure gains while allowing for upward movement.\n* **Profit Targets**: Establish clear profit targets based on technical analysis. If Bitcoin reaches a target of $35,000 based on Fibonacci retracement levels, consider scaling out a portion of your position.\n* **Time-Based Scaling**: Consider scaling out based on time intervals rather than price alone. For instance, if you plan to scale out 25% of your position every two weeks, this can help mitigate emotional decision-making.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Trailing Stops",
          "definition": "A dynamic stop-loss order that adjusts with market price movements."
        },
        {
          "term": "Profit Targets",
          "definition": "Predefined price levels at which traders plan to take profits."
        },
        {
          "term": "Time-Based Scaling",
          "definition": "A strategy that involves scaling out based on specific time intervals."
        }
      ],
      "whyThisMatters": "Implementing these advanced strategies enhances your ability to manage risk and optimize profit-taking in volatile crypto markets.",
      "realLifeExample": "If Ethereum is currently trading at $2,500 and you set a trailing stop at $2,375, you can secure profits while allowing for potential further gains as the price rises.",
      "commonMistake": "Traders often neglect to adjust their trailing stops, leading to missed opportunities when the market reverses.",
      "quickNote": "Advanced strategies include trailing stops, profit targets, and time-based scaling.",
      "mentorText": "Use trailing stops to safeguard your profits. It’s a smart way to let your winners run while protecting your capital.",
      "mentorAnalogy": "Think of scaling out like a chef adjusting cooking times based on the dish's progress. Just as a chef knows when to check for doneness, you must know when to scale out based on market conditions."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You have a position in Litecoin that has increased by 30%. What is the best strategy to scale out effectively?",
      "options": [
        {
          "id": "0",
          "text": "Set a trailing stop at 5% below the current price.",
          "isCorrect": true,
          "feedback": "This strategy allows you to lock in profits while giving the position room to grow."
        },
        {
          "id": "1",
          "text": "Scale out 50% of your position immediately.",
          "isCorrect": false,
          "feedback": "Scaling out immediately may not maximize your profit potential if the trend continues."
        },
        {
          "id": "2",
          "text": "Wait for the price to drop before deciding to scale out.",
          "isCorrect": false,
          "feedback": "Waiting for a drop can lead to missed opportunities if the price continues to rise."
        },
        {
          "id": "3",
          "text": "Scale out based on emotional reactions to market news.",
          "isCorrect": false,
          "feedback": "Emotional reactions can lead to poor decision-making and inconsistent results."
        }
      ]
    },
    "visualKey": "scaling-out-basics"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Scaling Out Techniques",
    "label": "Crypto Track",
    "body": "### Summary: Key Techniques for Scaling Out in Crypto Trading\nThis card consolidates essential techniques for effective scaling out in crypto trading. Mastering these strategies is vital for optimizing profit-taking.\n\n* **Market Signal Recognition**: Identify key market signals such as resistance levels and volume spikes to time your scale-outs effectively.\n* **Avoiding Pitfalls**: Stay aware of emotional decision-making and inconsistent strategies that can undermine your scaling-out efforts.\n* **Advanced Strategies**: Implement techniques like trailing stops, profit targets, and time-based scaling to enhance your profit-taking approach.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Market Signal Recognition",
          "definition": "The ability to identify indicators that suggest optimal scaling out opportunities."
        },
        {
          "term": "Avoiding Pitfalls",
          "definition": "Strategies to prevent common mistakes in scaling out."
        },
        {
          "term": "Advanced Strategies",
          "definition": "Sophisticated techniques for managing profit-taking in volatile markets."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of these techniques ensures disciplined and strategic profit-taking, critical for long-term success in crypto trading.",
      "realLifeExample": "By recognizing resistance levels and employing trailing stops, a trader can effectively scale out of a Bitcoin position, securing profits while managing risk.",
      "commonMistake": "Failing to apply a consistent strategy across trades can lead to missed opportunities and increased risk.",
      "quickNote": "Key techniques include market signal recognition, avoiding pitfalls, and advanced strategies.",
      "mentorText": "Review these techniques regularly. They are your foundation for disciplined profit-taking in the crypto market.",
      "mentorAnalogy": "Scaling out is akin to a conductor leading an orchestra. Each technique is an instrument that must be harmonized to create a successful trading performance."
    },
    "taskData": null,
    "visualKey": "scaling-out-basics"
  }
];
