import { LessonCard } from "../../../types/curriculum";

/**
 * Module 0.12 - Specialized Crypto Derivatives Reading Lab Core Cards
 */
export const coreCards: LessonCard[] = [
  {
    type: "mission_brief",
    title: "Derivatives Pressure Changes Crypto Reading Quality",
    label: "Derivatives Foundation",
    visualKey: "crypto-derivatives-lab-foundation",
    body: "Some crypto price moves are not only caused by people buying or selling the asset directly. They can also be shaped by open derivative contracts, funding pressure, leverage, and forced exits. A learner must read this pressure carefully before trusting the move. In this Crypto Derivatives Reading Lab, you will learn to read funding rates, open interest, leverage crowding, squeezes, and liquidation flushes to evaluate if a move is clean, fragile, or just temporary derivatives noise.",
    context: {
      keyTerms: [
        { term: "Derivative", definition: "A financial contract whose value is based on an underlying asset like Bitcoin." },
        { term: "Perpetual contract", definition: "A crypto derivative that has no expiry date, allowing traders to hold positions indefinitely." },
        { term: "Derivatives pressure", definition: "Price movement driven by derivative positioning, leverage, or liquidations rather than direct spot buying." },
        { term: "Leverage", definition: "Using borrowed funds to trade larger positions, which increases both potential returns and liquidation risk." },
        { term: "Forced exit", definition: "When a trader is required to close a position due to margin calls or liquidations." },
        { term: "Reading quality", definition: "The reliability score of a chart reading based on the type of market pressure present." }
      ],
      whyThisMatters: "Without understanding derivatives pressure, you will misinterpret forced liquidations and cost-driven squeezes as real, long-term asset demand.",
      realLifeExample: "Bitcoin spikes $1,500 in three minutes, but it is driven entirely by short contracts getting forced out rather than new buyers. A disciplined reader spots this pressure and waits.",
      commonMistake: "Assuming every fast price jump represents voluntary buyers entering the market.",
      quickNote: "Derivatives pressure can make crypto moves look faster and stronger than spot demand alone would justify."
    }
  },
  {
    type: "visual_intro",
    title: "Open Interest Shows Position Build-Up",
    label: "Open Interest",
    visualKey: "crypto-open-interest-reading-lab",
    body: "Open interest shows how many derivative contracts are currently open and active in the market. When open interest rises, it means new money is entering and positions are building up. When it falls, it means positions are being closed or unwound. Open interest does not tell you the direction of the market by itself; it only tells you how much contract pressure is accumulating. You must read it in combination with price to understand the context.",
    context: {
      keyTerms: [
        { term: "Open interest", definition: "The total number of outstanding derivative contracts that have not been settled or closed." },
        { term: "Position build-up", definition: "An increase in active trading contracts, showing rising participation and leverage." },
        { term: "Contract unwind", definition: "A decrease in active contracts as traders close positions or get liquidated." },
        { term: "Contract pressure", definition: "The potential energy in the market from open leveraged positions that could trigger fast moves." },
        { term: "Participation", definition: "The level of active engagement and capital commitment from traders in a market." }
      ],
      whyThisMatters: "High open interest represents a high-energy environment. When positions are crowded, even a small price change can trigger a chain reaction of exits.",
      realLifeExample: "Open interest on Ethereum increases by 20% while price moves sideways. This shows positions are building up like a coiled spring, preparing for a fast move once a trigger occurs.",
      commonMistake: "Thinking that rising open interest is always bullish, rather than simply showing that more contracts are active.",
      quickNote: "Open interest measures market participation and potential energy, not direction."
    }
  },
  {
    type: "visual_intro",
    title: "Price and Open Interest Must Be Read Together",
    label: "Price + OI",
    visualKey: "crypto-price-oi-combination-board",
    body: "To understand open interest, you must compare its direction with price changes. Price rising with rising open interest shows new buyers are opening leveraged contracts. Price rising with falling open interest shows short positions are closing (unwinding). Price falling with rising open interest shows new sellers are entering. Price falling with falling open interest shows buyers are closing positions. Reading these combinations helps you classify if a move has new backing or is just position cleanup.",
    context: {
      keyTerms: [
        { term: "OI rising", definition: "An increase in active contracts, indicating new positions are being opened." },
        { term: "OI falling", definition: "A decrease in active contracts, indicating existing positions are being closed." },
        { term: "Short covering", definition: "Sellers buying back contracts to close their short positions, which can temporarily push price up." },
        { term: "Long unwinding", definition: "Buyers selling contracts to close their long positions, which can temporarily push price down." },
        { term: "Leveraged entry", definition: "Traders entering positions using leverage, adding new open interest to the market." }
      ],
      whyThisMatters: "Comparing price and open interest allows you to distinguish between fresh, trend-supporting capital and temporary short-covering bounces.",
      realLifeExample: "Price spikes up, but open interest drops sharply. This shows the rise was caused by shorts panic-closing their contracts, not by new buyers. The move is fragile.",
      commonMistake: "Treating a short-covering price bounce as a strong, sustainable breakout.",
      quickNote: "Fresh money pushes price and open interest up together. Position cleanup pushes open interest down."
    }
  },
  {
    type: "visual_intro",
    title: "Funding Shows Crowded Pressure, Not Direction",
    label: "Funding Pressure",
    visualKey: "crypto-funding-pressure-reading",
    body: "Funding is a periodic payment exchanged between long and short perpetual contract traders to keep the perp price aligned with the spot price. When funding is positive, long traders pay short traders, showing that buyers are dominant and crowded. When funding is negative, shorts pay longs, showing sellers are crowded. However, high funding does not mean price must reverse immediately; it only tells you which side is carrying the cost pressure.",
    context: {
      keyTerms: [
        { term: "Funding rate", definition: "A payment exchanged between long and short perp traders, usually every 8 hours, to keep perp and spot prices aligned." },
        { term: "Positive funding", definition: "When the perp price is higher than spot, meaning longs pay shorts, showing crowded long positioning." },
        { term: "Negative funding", definition: "When the perp price is lower than spot, meaning shorts pay longs, showing crowded short positioning." },
        { term: "Cost pressure", definition: "The financial cost of holding a leveraged position, which increases when funding is highly positive or negative." },
        { term: "Crowded side", definition: "The trading direction that holds the majority of leverage and pays the funding fee." }
      ],
      whyThisMatters: "Highly skewed funding rates indicate crowded positions, meaning the paying side is vulnerable if price moves against them.",
      realLifeExample: "Funding rates for an altcoin become extremely positive, meaning longs pay shorts 0.1% every 8 hours. The cost pressure is high, making longs eager to exit at the first sign of weakness.",
      commonMistake: "Assuming positive funding means price must fall immediately, rather than just showing crowded buyers.",
      quickNote: "Funding rate shows which side is crowded and paying the holding fee, not what price must do."
    }
  },
  {
    type: "visual_intro",
    title: "Crowded Positioning Can Become Fragile",
    label: "Crowded Positioning",
    visualKey: "crypto-crowded-positioning-fragility",
    body: "When leverage becomes heavily crowded on one side, the price structure can become fragile. If many traders are long and paying high funding, the market is vulnerable to even a small drop. If price dips, these crowded buyers may be forced to exit, creating a rapid chain reaction of selling. The same applies to crowded shorts during a price bounce. Crowded leverage does not guarantee a reversal, but it means any move against the crowd can be highly explosive.",
    context: {
      keyTerms: [
        { term: "Crowded positioning", definition: "A market state where leverage is heavily tilted toward one side (longs or shorts)." },
        { term: "Market fragility", definition: "A state where price is highly sensitive to small shocks due to excessive crowded leverage." },
        { term: "Chain reaction", definition: "A sequence of events where one forced exit triggers another, causing rapid price changes." },
        { term: "Leverage tilt", definition: "The imbalance between the amount of leveraged buy contracts versus sell contracts." },
        { term: "Position risk", definition: "The danger of being forced to close a position due to adverse price movements." }
      ],
      whyThisMatters: "Recognizing fragility prevents you from buying into a breakout that is heavily congested with high-leverage buyers.",
      realLifeExample: "An altcoin rallies on positive funding and rising open interest. Leveraged longs are crowded. A minor $50 dip in Bitcoin triggers a panic that knocks the altcoin down 12% in seconds.",
      commonMistake: "Thinking a crowded market is strong, when it is actually structurally fragile and easily shaken.",
      quickNote: "A crowded market is like a room with too many people near the exit; a tiny spark can cause a stampede."
    }
  },
  {
    type: "visual_intro",
    title: "Liquidation Flushes Are Forced Exits",
    label: "Liquidation Flush",
    visualKey: "crypto-liquidation-flush-lab",
    body: "A liquidation happens when a leveraged trader's losses eat up their margin, and the exchange automatically closes their position at the market price to protect itself. When many positions are liquidated at once, it creates a liquidation flush. This is a rapid, vertical price spike or wick driven by forced market orders. A liquidation flush explains why price moved so quickly, but it does not tell you if the move will continue or reverse.",
    context: {
      keyTerms: [
        { term: "Liquidation", definition: "The automatic closing of a leveraged position by the exchange when margin falls below the required level." },
        { term: "Margin", definition: "The collateral that a trader must deposit to maintain a leveraged position." },
        { term: "Liquidation flush", definition: "A rapid, vertical price movement caused by a large cluster of forced liquidations." },
        { term: "Forced market order", definition: "An automatic buy or sell order executed instantly at the best available price during a liquidation." },
        { term: "Flush settlement", definition: "The period immediately after a liquidation spike where the market attempts to find a stable price." }
      ],
      whyThisMatters: "A liquidation flush shows programmatic, non-voluntary trading. Once these forced orders are filled, price will often stall or test the area to find real support.",
      realLifeExample: "Bitcoin drops $800 in a single minute, printing a long wick on the chart. You check the data and find $50 million of long positions were liquidated. The drop was a liquidation flush.",
      commonMistake: "Reading a liquidation wick as an automatic reversal signal, rather than just a signature of forced selling.",
      quickNote: "Liquidations represent forced, automatic trades that occur when margin runs out."
    }
  },
  {
    type: "visual_intro",
    title: "Long Squeezes and Short Squeezes Move Price Fast",
    label: "Squeeze Movement",
    visualKey: "crypto-long-short-squeeze-board",
    body: "A squeeze happens when price moves against crowded leveraged traders, forcing them to exit and rapidly driving price further in that direction. In a long squeeze, falling prices force longs to sell, accelerating the drop. In a short squeeze, rising prices force shorts to buy, accelerating the rally. Squeezes are highly dramatic and can look like strong trends, but they are often just forced mechanical liquidations rather than real long-term demand.",
    context: {
      keyTerms: [
        { term: "Long squeeze", definition: "A rapid price drop triggered by crowded long traders being forced to sell their positions." },
        { term: "Short squeeze", definition: "A rapid price rise triggered by crowded short traders being forced to buy back their positions." },
        { term: "Forced buying", definition: "Automatic buy orders executed to close short positions during a short squeeze." },
        { term: "Forced selling", definition: "Automatic sell orders executed to close long positions during a long squeeze." },
        { term: "Mechanical pressure", definition: "Price movement driven by the programmatic rules of liquidations rather than voluntary buyers or sellers." }
      ],
      whyThisMatters: "Identifying squeeze movements keeps you from chasing fast breakout candles that are destined to stall once the squeeze ends.",
      realLifeExample: "Short positions build up heavily on a token. A small price rise triggers their liquidation buy orders, shooting price up 15% in minutes. Once the shorts are cleared, price stops rising entirely.",
      commonMistake: "Chasing a short squeeze green candle, thinking it represents high institutional demand.",
      quickNote: "Squeezes are mechanical events. Once the squeezed traders are cleared, the move often loses its energy."
    }
  },
  {
    type: "visual_intro",
    title: "After the Flush, Check Settlement",
    label: "Post-Flush Settlement",
    visualKey: "crypto-post-liquidation-settlement",
    body: "A liquidation flush leaves a large wick or candle, but the real reading begins after the flush. A disciplined learner checks for settlement: does price stabilize, continue in the flush direction, or chop aimlessly? If open interest drops sharply, funding cools down to neutral, and price holds its ground, the leverage has cleared and price is settling. If funding remains high and open interest builds back up instantly, the market remains unstable and fragile.",
    context: {
      keyTerms: [
        { term: "Post-flush settlement", definition: "How price behaves after a liquidation flush, showing whether buyers or sellers have stabilized." },
        { term: "Stabilization", definition: "Price holding steady in a tight range after a sharp move, indicating balanced supply and demand." },
        { term: "Funding cooldown", definition: "The return of funding rates to neutral levels after a crowded period, showing leverage has cleared." },
        { term: "OI drop", definition: "A sharp decline in open interest, proving that crowded leveraged contracts were successfully wiped out." },
        { term: "Follow-through hold", definition: "When price maintains its level after a flush instead of immediately reversing, indicating real demand." }
      ],
      whyThisMatters: "Checking settlement protects you from entering markets that are still undergoing unstable derivatives flushes.",
      realLifeExample: "Price crashes on long liquidations. You wait. Price stays in a tight range for an hour, funding drops back to flat, and open interest remains low. This stable behavior confirms the market has settled.",
      commonMistake: "Entering immediately during a liquidation candle before checking if the flush has finished.",
      quickNote: "Wait for the dust to settle. True price direction becomes visible only after leverage has cleared."
    }
  },
  {
    type: "visual_intro",
    title: "The Derivatives Pressure Verification Sequence",
    label: "Pressure Workflow",
    visualKey: "crypto-derivatives-verification-sequence",
    body: "To verify whether a crypto move has solid backing or is just a temporary leverage trap, follow this systematic sequence: check price direction, assess open interest changes, inspect funding rates for crowding, identify liquidation spikes, and observe post-flush settlement. If price holds after the leverage is cleared, the move has high reading quality. If price immediately reverses as soon as the liquidations end, the move was fragile.",
    context: {
      keyTerms: [
        { term: "Verification sequence", definition: "A step-by-step audit of price, open interest, funding, and liquidations to evaluate a move." },
        { term: "Leverage trap", definition: "A temporary price spike driven entirely by forced exits that quickly reverses once the liquidations stop." },
        { term: "Reading consensus", definition: "When spot demand, open interest build-up, and post-flush price stability all align to confirm a move." },
        { term: "Fragile breakout", definition: "A price breakout that happens on high funding and is immediately wiped out by a liquidation cascade." },
        { term: "Pressure validation", definition: "The process of confirming whether derivatives activity is helping or distorting the chart structure." }
      ],
      whyThisMatters: "A structured verification sequence takes the emotion out of reading crypto, replacing FOMO with clear data checks.",
      realLifeExample: "A token breakouts. You verify: Price is up. OI is up (new positions). Funding is neutral (not crowded). Liquidations are low. The breakout is clean, showing real spot-supported demand.",
      commonMistake: "Ignoring the verification sequence and trusting a move purely because the candle looks large.",
      quickNote: "Check price, OI, funding, liquidations, and settlement before writing down your market reading."
    }
  },
  {
    type: "practice",
    title: "Practice Drill: Pressure Build-Up or Clean Move?",
    label: "Practice Drill",
    visualKey: "crypto-derivatives-practice-drill",
    taskData: {
      type: "choice_block",
      question: "A crypto asset moves sharply above a local range. Open interest rises quickly before the move, funding is very positive, and several short-term liquidations appear during the push. After the spike, open interest drops, funding cools slightly, but price stalls near the breakout area without clean follow-through. What is the most disciplined derivatives reading of this setup?",
      options: [
        {
          id: "opt1",
          text: "Clear bullish reading because price broke above the range and cleared previous sellers.",
          isCorrect: false,
          grade: "poor",
          feedback: "Incorrect. The break is visible, but the rising open interest and positive funding warn that the move was heavily leveraged. The lack of clean follow-through means we cannot classify this as a clear bullish move."
        },
        {
          id: "opt2",
          text: "Mixed / fragile reading because the move was helped by crowded derivatives pressure, liquidations occurred, and follow-through is not clean yet.",
          isCorrect: true,
          grade: "best",
          feedback: "Correct! This is a mixed or fragile reading. The price breakout was accelerated by squeezed shorts (liquidations) and crowded longs (high funding). Since open interest has dropped and price is stalling without follow-through, we must wait for stabilization."
        },
        {
          id: "opt3",
          text: "Guaranteed reversal because funding was very positive and the breakout has run out of buyers.",
          isCorrect: false,
          grade: "poor",
          feedback: "Incorrect. Extremely positive funding shows crowded longs, which increases fragility, but it never guarantees a reversal. Price can still consolidate and continue if real spot buying appears."
        },
        {
          id: "opt4",
          text: "Ignore derivatives data completely because only the candle shape and range boundaries matter.",
          isCorrect: false,
          grade: "poor",
          feedback: "Incorrect. While candle shapes are important, derivatives data explains why the candle moved so fast (leveraged pressure vs spot buying) and reveals how stable the breakout level actually is."
        }
      ]
    },
    body: "Review the breakout details carefully: check the behavior of open interest, funding, and liquidations. Use the classifier tool to verify how each factor affects the overall reading quality, then select the most disciplined response.",
    context: {
      keyTerms: [
        { term: "Breakout area", definition: "The price level that previously acted as resistance or the boundary of a range." },
        { term: "Drill classification", definition: "Assigning a quality score to a price setup based on the combination of available clues." },
        { term: "Leverage flush check", definition: "Evaluating if a price move cleared out crowded positions before stabilizing." },
        { term: "Follow-through check", definition: "Watching the next candles to see if voluntary buyers continue to support the price." },
        { term: "Mixed reading", definition: "A classification where some clues are positive but others warn of fragility or lack of support." }
      ],
      whyThisMatters: "In live markets, distinguishing a spot-backed breakout from a short-squeeze flush will prevent you from buying at the absolute top of a mechanical spike.",
      realLifeExample: "You see a breakout on high positive funding. You check the open interest and find it drops immediately after the wick. You classify it as mixed/fragile and stay flat, saving you from a quick drawdown.",
      commonMistake: "Calling a breakout 'strong' purely because it has high speed, ignoring the crowded derivatives background.",
      quickNote: "When leverage drives a breakout, the level is fragile. Always wait for post-flush proof."
    }
  },
  {
    type: "debrief",
    title: "Debrief: Derivatives Pressure Needs Verification",
    label: "Derivatives Debrief",
    visualKey: "crypto-derivatives-lab-debrief",
    body: "Open interest, funding pressure, crowded positioning, squeezes, and liquidation flushes are reading clues, not trade instructions. A derivatives-driven move only becomes useful to read when the leverage clears, price stabilizes, and real spot follow-through appears. By checking the pressure step-by-step, you protect yourself from chasing forced mechanical spikes and wait for price to show its true consensus.",
    context: {
      keyTerms: [
        { term: "Debrief recap", definition: "A final review of the core concepts taught in the module to anchor the learning." },
        { term: "Spot follow-through", definition: "When buyers in the spot market continue to support the price after leverage has unwound." },
        { term: "Forced spike", definition: "A rapid price move driven by programmatic liquidation orders rather than voluntary buying/selling." },
        { term: "True consensus", definition: "When spot demand and derivatives settlement align to confirm a stable price level." },
        { term: "Reading safety", definition: "The practice of ignoring high-risk, derivatives-driven spikes to preserve capital and clarity." }
      ],
      whyThisMatters: "Approaching crypto with derivatives awareness shifts you from a reactive participant to a disciplined reader who can spot when the crowd is getting squeezed.",
      realLifeExample: "You watch an altcoin spike. Instead of reacting, you check: 1. OI dropped. 2. Funding cooled. 3. Price holds. You classify it as stabilized and verify it calmly.",
      commonMistake: "Assuming derivatives metrics are complex trade triggers, rather than structural health checks.",
      quickNote: "Do not trust crypto derivatives pressure because it is dramatic. Trust the reading only after the pressure is explained and verified."
    }
  }
];
