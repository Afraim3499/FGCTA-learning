import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    "type": "mission_brief",
    "title": "Spot vs Futures Execution Checklist",
    "label": "Crypto Track",
    "body": "### Execution Mechanics: Spot vs Futures Execution Checklist\nThis card outlines a structured approach for executing trades in both spot and futures markets, emphasizing critical distinctions.\n\n* **Market Order Considerations**: In spot markets, execute market orders when liquidity is high (e.g., during major exchange openings) to minimize slippage. In futures, consider the impact of leverage and margin requirements before placing market orders.\n* **Contract Specifications**: Verify contract specifications for futures, including expiration dates and tick sizes, to ensure alignment with your trading strategy. Spot trades do not have these constraints but require attention to asset custody.\n* **Execution Timing**: Execute spot trades during high-volume periods (e.g., 9:00 AM EST) to capitalize on price stability. For futures, monitor the funding rate schedule to avoid unexpected costs during low liquidity periods.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Market Order",
          "definition": "An order to buy or sell an asset immediately at the current market price."
        },
        {
          "term": "Contract Specifications",
          "definition": "Detailed parameters defining a futures contract, including size and expiration."
        }
      ],
      "whyThisMatters": "Understanding the differences in execution mechanics between spot and futures is essential for optimizing trade outcomes and managing risk effectively.",
      "realLifeExample": "Executing a BTC spot trade at 9:00 AM EST when the market is active, compared to placing a BTC futures order just before the funding rate is due, which could incur additional costs.",
      "commonMistake": "Failing to account for the impact of funding rates on futures trades, leading to unexpected costs.",
      "quickNote": "Always verify market conditions and contract specifications before executing trades.",
      "mentorText": "When executing trades, think of the market as a living entity. Spot trades require you to be agile and responsive, while futures demand a strategic approach due to their complexities.",
      "mentorAnalogy": "Executing trades in crypto is like piloting an aircraft: spot trading is akin to navigating through clear skies, while futures trading involves managing turbulence and ensuring your flight path aligns with your destination."
    },
    "taskData": null,
    "visualKey": "crypto-spot-futures-checklist"
  },
  {
    "type": "concept",
    "title": "Verifying Perpetual Funding Rates",
    "label": "Crypto Track",
    "body": "### Execution Mechanics: Verifying Perpetual Funding Rates\nThis card emphasizes the necessity of verifying perpetual funding rates in crypto trading to enhance execution and profitability.\n\n* **Funding Rate Calculation**: Always check the funding rate before entering a position; it is typically calculated based on the interest rate differential between spot and perpetual contracts. A high funding rate can erode profits significantly.\n* **Rate Frequency**: Funding rates are usually updated every 8 hours. Monitor these updates closely to avoid unexpected costs during your holding period, especially in volatile markets.\n* **Impact on Positioning**: Adjust your trading strategy based on the funding rate. If the rate is consistently high, consider shorter holding periods or hedging strategies to mitigate costs.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Perpetual Funding Rate",
          "definition": "A periodic fee exchanged between long and short positions in perpetual contracts."
        },
        {
          "term": "Hedging Strategies",
          "definition": "Techniques used to offset potential losses in investments."
        }
      ],
      "whyThisMatters": "Verifying funding rates is crucial for maintaining profitability in leveraged positions and avoiding unexpected financial burdens.",
      "realLifeExample": "Before entering a long position in ETH perpetual futures, checking the funding rate reveals a 0.1% charge every 8 hours, prompting a reassessment of the trade duration.",
      "commonMistake": "Ignoring funding rate changes, which can lead to unanticipated costs that diminish overall profitability.",
      "quickNote": "Always verify the funding rate before executing a position in perpetual contracts.",
      "mentorText": "Think of the funding rate as the cost of holding your position. If it's high, you need to be strategic about how long you stay in the trade to avoid losing money.",
      "mentorAnalogy": "Verifying funding rates is like checking fuel prices before a long road trip; if prices are high, you may need to adjust your route or plan for more frequent stops."
    },
    "taskData": null,
    "visualKey": "crypto-spot-futures-checklist"
  },
  {
    "type": "concept",
    "title": "Analyzing Spot-Perpetual Spreads",
    "label": "Crypto Track",
    "body": "### Execution Mechanics: Analyzing Spot-Perpetual Spreads\nThis card focuses on the analysis of spot-perpetual spreads and their implications for execution strategies and market positioning.\n\n* **Spread Measurement**: Calculate the spread by subtracting the perpetual price from the spot price. A narrow spread indicates a more efficient market, while a wider spread may signal inefficiencies or increased volatility.\n* **Market Sentiment Indicators**: Use the spread as an indicator of market sentiment; a widening spread may suggest bearish sentiment, while a narrowing spread could indicate bullish trends. Adjust your execution strategy accordingly.\n* **Timing Execution**: Execute trades when the spread is at its historical average to minimize costs. Avoid executing during extreme spread fluctuations, as this can lead to unfavorable entry points.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Spread",
          "definition": "The difference between the spot price and the perpetual price of an asset."
        },
        {
          "term": "Market Sentiment",
          "definition": "The overall attitude of investors toward a particular security or financial market."
        }
      ],
      "whyThisMatters": "Analyzing spreads is essential for identifying optimal entry and exit points, which can significantly impact trade profitability.",
      "realLifeExample": "Noticing a BTC spot price of $30,000 and a perpetual price of $30,100 indicates a spread of $100; executing a trade when the spread narrows to $50 could enhance profitability.",
      "commonMistake": "Failing to analyze the spread before execution, leading to suboptimal entry points.",
      "quickNote": "Always analyze the spot-perpetual spread to inform your execution strategy.",
      "mentorText": "The spread is your market pulse. If it's widening, something's off; adjust your strategy to avoid getting caught in unfavorable conditions.",
      "mentorAnalogy": "Analyzing spreads is like monitoring the temperature of an engine; if it fluctuates too much, it indicates potential issues that need addressing before proceeding."
    },
    "taskData": null,
    "visualKey": "crypto-spot-futures-checklist"
  },
  {
    "type": "concept",
    "title": "Evaluating Venue Liquidity Profiles",
    "label": "Crypto Track",
    "body": "### Execution Mechanics: Evaluating Venue Liquidity Profiles\nThis card explores the evaluation of liquidity profiles across different trading venues and their impact on execution efficiency in crypto markets.\n\n* **Liquidity Depth Assessment**: Assess the order book depth of each venue. A venue with a deeper order book allows for larger trades with minimal slippage, enhancing execution efficiency.\n* **Volume Analysis**: Analyze the trading volume on each venue during key trading hours. Higher volumes typically correlate with better liquidity and tighter spreads, which are favorable for execution.\n* **Market Impact Considerations**: Be aware of how your trade size may impact the market. Large orders in low liquidity venues can lead to significant price movements, adversely affecting your execution price.\n",
    "context": {
      "keyTerms": [
        {
          "term": "Order Book Depth",
          "definition": "The amount of buy and sell orders at various price levels in a market."
        },
        {
          "term": "Trading Volume",
          "definition": "The total quantity of assets traded within a specific time frame."
        }
      ],
      "whyThisMatters": "Evaluating liquidity profiles is essential for ensuring efficient execution and minimizing costs associated with slippage and market impact.",
      "realLifeExample": "Before executing a large order of LTC, analyzing the order book on two different exchanges reveals one has a depth of $500,000 compared to another with only $100,000, guiding the choice of venue for execution.",
      "commonMistake": "Overlooking venue liquidity profiles, which can lead to increased slippage and execution costs.",
      "quickNote": "Always evaluate the liquidity profile of a venue before executing trades.",
      "mentorText": "Think of liquidity as the foundation of your trade execution. If the foundation is weak, your entire trade could crumble under pressure.",
      "mentorAnalogy": "Evaluating venue liquidity is like checking the load-bearing capacity of a bridge before crossing; if it can't handle your weight, the risk of failure increases significantly."
    },
    "taskData": null,
    "visualKey": "crypto-spot-futures-checklist"
  },
  {
    "type": "concept",
    "title": "Developing Execution Strategies for Crypto",
    "label": "Crypto Track",
    "body": "### Crypto Execution: Tailored Strategies for Market Conditions\nExecution strategies in crypto must consider unique market dynamics and liquidity profiles. This card outlines **how to develop effective execution strategies based on current market conditions**.\n\n* **Market Condition Analysis**: Assess market sentiment using on-chain metrics and trading volume. For instance, if Bitcoin's 24-hour trading volume exceeds $5 billion with a bullish sentiment, prioritize aggressive entry strategies.\n* **Liquidity Assessment**: Evaluate order book depth to determine optimal entry and exit points. If Ethereum's order book shows a 10% spread during peak hours, consider using limit orders to avoid slippage.\n* **Execution Timing**: Identify optimal execution windows based on historical volatility patterns. For example, executing trades during the first hour of the New York session often yields better fills due to increased liquidity.\n",
    "context": {
      "keyTerms": [
        {
          "term": "On-Chain Metrics",
          "definition": "Data derived from blockchain transactions used to analyze market sentiment."
        },
        {
          "term": "Order Book Depth",
          "definition": "The volume of buy and sell orders at various price levels in the market."
        }
      ],
      "whyThisMatters": "Effective execution strategies are critical for maximizing profitability in the highly volatile crypto markets.",
      "realLifeExample": "During a bullish trend, Bitcoin's price surged from $40,000 to $45,000 in 24 hours, with a trading volume of $6 billion. A trader who executed a limit order at $41,000 capitalized on the momentum without incurring significant slippage.",
      "commonMistake": "Failing to adjust execution strategies based on real-time market conditions can lead to suboptimal trade outcomes.",
      "quickNote": "Tailor execution strategies to market conditions and liquidity profiles for optimal results.",
      "mentorText": "When developing execution strategies, always analyze current market conditions. If the market is bullish and liquidity is high, be ready to execute aggressively.",
      "mentorAnalogy": "Think of your execution strategy like a pilot adjusting flight plans based on weather conditions. Just as a pilot must adapt to turbulence, you must adapt to market volatility."
    },
    "taskData": null,
    "visualKey": "crypto-spot-futures-checklist"
  },
  {
    "type": "concept",
    "title": "Managing Volatility in Crypto Execution",
    "label": "Crypto Track",
    "body": "### Crypto Execution: Strategies for Volatility Management\nVolatility in crypto markets requires adaptive execution tactics to minimize risk and maximize returns. This card discusses **how to manage volatility effectively during trade execution**.\n\n* **Dynamic Order Types**: Utilize market orders during high volatility to ensure execution, but be aware of potential slippage. For example, during a sudden drop in Bitcoin, executing a market order can capture the price before it rebounds.\n* **Scaling In and Out**: Implement a scaling strategy by executing partial orders at different price levels. If Ethereum is trading at $3,000, consider placing 50% of your order at $2,950 and the remainder at $3,050 to average your entry price.\n* **Stop-Loss Adjustments**: Set adaptive stop-loss levels based on recent price action. If Litecoin experiences a 10% drop in 15 minutes, adjust your stop-loss to lock in profits and mitigate further losses.",
    "context": {
      "keyTerms": [
        {
          "term": "Market Order",
          "definition": "An order to buy or sell a cryptocurrency immediately at the current market price."
        },
        {
          "term": "Scaling Strategy",
          "definition": "A technique of entering or exiting a position incrementally to manage risk."
        }
      ],
      "whyThisMatters": "Managing volatility is essential for protecting capital and ensuring successful trade execution in unpredictable markets.",
      "realLifeExample": "During a market crash, Bitcoin dropped from $50,000 to $45,000 in minutes. A trader using a market order to sell at $49,500 mitigated losses compared to those who waited for limit orders.",
      "commonMistake": "Ignoring volatility indicators can lead to executing trades at unfavorable prices.",
      "quickNote": "Adapt execution tactics to manage volatility effectively and protect trading capital.",
      "mentorText": "In volatile markets, be prepared to adjust your execution strategy. Use market orders when necessary, but always have a plan for scaling in and out.",
      "mentorAnalogy": "Managing volatility in trading is like a surgeon adjusting techniques based on patient response during surgery. Precision and adaptability are key."
    },
    "taskData": null,
    "visualKey": "crypto-spot-futures-checklist"
  },
  {
    "type": "practice",
    "title": "Practical Crypto Execution Scenarios",
    "label": "Crypto Track",
    "body": "### Crypto Execution: Real-World Application Scenarios\nThis card presents practical scenarios for executing trades in crypto markets, allowing traders to apply their knowledge in real-world contexts.\n\n* **Scenario 1**: Bitcoin is experiencing a rapid price increase from $42,000 to $45,000 within an hour. You have a limit order set at $43,500. Should you adjust your order to a market order to ensure execution?\n* **Scenario 2**: Ethereum's price is fluctuating between $2,800 and $3,000 with high volatility. You plan to enter a long position. Would you consider scaling in with partial orders to manage risk?\n* **Scenario 3**: During a news event, Litecoin's price drops sharply from $200 to $180. You have a stop-loss set at $190. Should you adjust your stop-loss to protect your capital?",
    "context": {
      "keyTerms": [
        {
          "term": "Limit Order",
          "definition": "An order to buy or sell a cryptocurrency at a specified price or better."
        },
        {
          "term": "Stop-Loss",
          "definition": "An order placed to sell a security when it reaches a certain price to limit losses."
        }
      ],
      "whyThisMatters": "Applying theoretical knowledge to practical scenarios enhances decision-making skills in real trading environments.",
      "realLifeExample": "In a recent trading session, Bitcoin surged from $39,000 to $41,000. A trader who adjusted their limit order to a market order at $40,500 secured a profitable position.",
      "commonMistake": "Failing to practice real-world scenarios can lead to poor execution decisions under pressure.",
      "quickNote": "Engage with practical scenarios to reinforce execution strategies and decision-making skills.",
      "mentorText": "When faced with real-world scenarios, always think critically about your execution strategy. Adjust orders based on market conditions and your risk tolerance.",
      "mentorAnalogy": "Executing trades in volatile markets is like a firefighter making split-second decisions during a blaze. Every choice impacts the outcome."
    },
    "taskData": {
      "type": "choice_block",
      "question": "You observe Bitcoin rapidly rising from $42,000 to $45,000. You have a limit order at $43,500. What should you do?",
      "options": [
        {
          "id": "0",
          "text": "Adjust your limit order to a market order to ensure execution.",
          "isCorrect": true,
          "feedback": "Adjusting to a market order ensures you capture the price increase."
        },
        {
          "id": "1",
          "text": "Leave the limit order unchanged and wait.",
          "isCorrect": false,
          "feedback": "Leaving the order unchanged may result in missing the trade if the price continues to rise."
        },
        {
          "id": "2",
          "text": "Cancel the limit order entirely.",
          "isCorrect": false,
          "feedback": "Cancelling the order means you will not participate in the market movement."
        },
        {
          "id": "3",
          "text": "Set a new limit order higher than $45,000.",
          "isCorrect": false,
          "feedback": "Setting a new limit order may lead to missing the current opportunity."
        }
      ]
    },
    "visualKey": "crypto-spot-futures-checklist"
  },
  {
    "type": "summary",
    "title": "Summary of Crypto Execution Concepts",
    "label": "Crypto Track",
    "body": "### Crypto Execution: Key Concepts Recap\nThis card summarizes essential concepts covered in the crypto track, reinforcing execution strategies and metrics necessary for successful trading.\n\n* **Execution Strategy Development**: Tailor strategies based on market conditions and liquidity profiles to optimize trade execution.\n* **Volatility Management**: Employ adaptive tactics such as dynamic order types and scaling strategies to navigate price fluctuations effectively.\n* **Practical Application**: Engage with real-world scenarios to enhance decision-making skills and prepare for execution challenges in live markets.",
    "context": {
      "keyTerms": [
        {
          "term": "Execution Strategy",
          "definition": "A plan outlining how to enter and exit trades based on market analysis."
        },
        {
          "term": "Volatility Management",
          "definition": "Techniques used to handle price fluctuations in trading."
        }
      ],
      "whyThisMatters": "A comprehensive understanding of these concepts is vital for executing trades effectively in the crypto markets.",
      "realLifeExample": "Traders who applied tailored execution strategies during the recent bull run in crypto achieved higher profitability compared to those who used generic methods.",
      "commonMistake": "Overlooking the importance of adapting strategies to market conditions can lead to missed opportunities.",
      "quickNote": "Reinforce execution strategies and metrics for successful trading in crypto markets.",
      "mentorText": "Remember, the key to successful trading lies in adapting your execution strategies to the ever-changing crypto landscape. Always be prepared to adjust.",
      "mentorAnalogy": "Think of your execution strategy like a chess game. Each move must be calculated and adapted based on your opponent's actions."
    },
    "taskData": null,
    "visualKey": "crypto-spot-futures-checklist"
  }
];
