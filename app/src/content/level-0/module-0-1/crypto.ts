import { LessonCard } from "../../../types/curriculum";

export const cryptoCards: LessonCard[] = [
  {
    type: "visual_intro",
    title: "Crypto Brief: Mechanics Over Hype",
    visualKey: "crypto-mechanics-map",
    label: "Roadway Context",
    body: "Crypto trades all day, but not every move is clean. Before trusting a crypto chart, check whether the move is supported by spot activity, perpetual mechanics, BTC context, and exchange conditions.",
    context: {
      keyTerms: [
        { term: "Spot", definition: "Buying or holding the actual crypto asset. If you buy BTC on spot, you hold BTC." },
        { term: "Perpetual", definition: "A derivative contract that follows the asset price without owning the asset. Affected by leverage and funding." },
        { term: "Funding", definition: "A periodic payment mechanism showing pressure between long and short positions." },
        { term: "Liquidation pressure", definition: "Forced closing of leveraged positions when traders cannot maintain margin." },
        { term: "BTC context", definition: "The influence Bitcoin often has on the broader crypto market as a reference asset." },
        { term: "Exchange noise", definition: "Movement that may appear strong in one place or thin condition but is not broadly supported." }
      ],
      whyThisMatters: "Crypto can move because of real buying, leveraged contract pressure, BTC-wide movement, or thin exchange conditions. If a learner only looks at the candle, they may confuse hype or mechanical pressure with clean market evidence.",
      realLifeExample: "BTC moves sharply during a low-liquidity period, and several altcoins follow. A rushed learner assumes every coin is independently strong. A trained learner first checks BTC context, market breadth, and whether the move is supported beyond one noisy chart.",
      commonMistake: "Treating every fast crypto move as meaningful without checking whether it is broad, supported, and mechanically clean.",
      quickNote: "In crypto, speed is not proof. Check the mechanics behind the move."
    }
  },
  {
    type: "concept",
    title: "Crypto Market Mechanics",
    label: "Market Mechanics",
    body: "Crypto moves can come from actual buying, contract pressure, forced exits, BTC-wide movement, or thin exchange conditions. Before trusting a fast move, check what may be driving it.",
    items: [
      { title: "Spot", body: "Actual asset buying/selling. The foundational driver of price.", icon: "check" },
      { title: "Perpetuals", body: "Derivative contracts that track price without owning the asset.", icon: "layers" },
      { title: "Funding", body: "Periodic payment pressure between long and short positions.", icon: "scale" },
      { title: "Liquidation Pressure", body: "Forced exits from leveraged positions due to margin failure.", icon: "zap" },
      { title: "BTC Context", body: "Bitcoin's broad influence on the flow of the wider market.", icon: "target" },
      { title: "Exchange Noise", body: "Movements that appear strong but lack broad market support.", icon: "alert" }
    ],
    context: {
      keyTerms: [
        { term: "Spot", definition: "Buying or holding the actual crypto asset." },
        { term: "Perpetual", definition: "A derivative contract that tracks the asset price without owning the asset." },
        { term: "Funding", definition: "A periodic payment between long and short positions in perpetual markets." },
        { term: "Leverage", definition: "Using borrowed exposure to control a larger position than the account balance alone." },
        { term: "Liquidation pressure", definition: "Forced closing of leveraged positions when traders cannot maintain margin." },
        { term: "Exchange noise", definition: "Movement that may appear strong in one place or thin condition but is not broadly supported." }
      ],
      whyThisMatters: "Crypto can move because of spot demand, leveraged contract pressure, forced liquidations, BTC-wide movement, or thin liquidity. If a learner only looks at the candle, they may confuse mechanical pressure with clean market evidence.",
      realLifeExample: "BTC moves sharply and altcoins follow. At the same time, perpetual funding is stretched and leveraged traders are crowded on one side. A trained learner does not call the move clean immediately; they first check whether the movement is broad, supported, or driven by pressure.",
      commonMistake: "Treating every fast crypto move as meaningful without checking whether it is supported by spot activity, BTC context, and market mechanics.",
      quickNote: "In crypto, speed is not proof. Check the mechanics behind the move."
    }
  },
  {
    type: "visual_intro",
    title: "The Social Hype Fallacy",
    visualKey: "hype-trap-path",
    label: "Mistake Pattern",
    body: "Crypto hype can make a weak idea feel urgent. A Lurnava learner checks whether the move is structurally supported before trusting it.",
    context: {
      keyTerms: [
        { term: "Social hype", definition: "Public excitement around a coin, setup, or move." },
        { term: "Public emotion", definition: "The visible reaction of traders online, often driven by fear, greed, or attention." },
        { term: "Mechanic-first reading", definition: "Checking structure, funding, BTC context, and liquidity before trusting the move." },
        { term: "Market evidence", definition: "Observable facts that support a reading, not opinions or excitement." },
        { term: "Hype fallacy", definition: "Mistaking attention or emotion for actual market confirmation." }
      ],
      whyThisMatters: "Crypto moves can attract attention very quickly. When public excitement rises, learners may feel late, pressured, or overly confident. That emotional pressure can make weak evidence feel stronger than it is.",
      realLifeExample: "A coin starts trending online. Posts, comments, and videos all say the move is strong. A rushed learner opens the chart and wants to believe it immediately. A trained learner first checks whether structure, BTC context, and funding conditions support the move.",
      commonMistake: "Thinking that a move is valid because many people are talking about it.",
      quickNote: "Attention is not evidence. Hype must be tested against structure and mechanics."
    }
  },
  {
    type: "practice",
    title: "Crypto Mini Drill: Hype Filtering",
    visualKey: "crypto-hype-filtering-drill",
    label: "Practical Drill",
    body: "Scenario: BTC moves sharply while funding is very high and public hype is rising. The chart looks active, but the environment may be crowded and emotionally charged.",
    taskData: {
      type: "choice_block",
      question: "What is the disciplined crypto reading?",
      options: [
        { id: "a", text: "Public excitement means the move is guaranteed to continue.", isCorrect: false, feedback: "Not correct. Public excitement does not guarantee continuation. Hype can increase risk because many learners may already be emotionally committed to the move." },
        { id: "b", text: "Funding alone tells the learner exactly what to do next.", isCorrect: false, feedback: "Not correct. Funding is context, not a command. It can show pressure between market participants, but the learner still needs structure and evidence." },
        { id: "c", text: "Treat funding and public reaction as supporting context to review carefully, not as a direct instruction.", isCorrect: true, feedback: "Correct. High funding and public excitement can reveal pressure, crowding, or emotional conditions, but they do not give a direct instruction. A Lurnava learner treats them as supporting context and checks whether chart structure and market mechanics confirm the reading. \n\nLurnava Principle: Context helps you review. It does not replace evidence." },
        { id: "d", text: "Ignore market mechanics and trust the crowd reaction because many people agree.", isCorrect: false, feedback: "Not correct. Crowd reaction can be noisy. A Lurnava learner checks mechanics before trusting public emotion." }
      ]
    },
    context: {
      keyTerms: [
        { term: "Funding", definition: "A periodic payment between long and short positions in perpetual markets." },
        { term: "Public reaction", definition: "Visible excitement, fear, or attention from traders online." },
        { term: "Supporting context", definition: "Information that helps explain conditions but does not give a direct instruction." },
        { term: "Crowded condition", definition: "A situation where many participants may be positioned or emotionally leaning the same way." },
        { term: "Hype filtering", definition: "Separating market evidence from public excitement." }
      ],
      whyThisMatters: "Crypto often moves with speed, leverage, and public emotion at the same time. If a learner treats funding or hype as an instruction, they may react to pressure instead of reading the market.",
      realLifeExample: "BTC moves quickly and social feeds become loud. Funding is also high, showing pressure in perpetual markets. A rushed learner treats the excitement as confirmation. A trained learner slows down and asks whether the move is supported by structure, liquidity, and broader context.",
      commonMistake: "Treating public excitement or high funding as proof that the move must continue.",
      quickNote: "Funding and hype are context, not commands."
    }
  }
];
