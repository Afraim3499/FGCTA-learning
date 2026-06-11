// @ts-nocheck
/// <reference types="node" />
import * as fs from "fs";
import * as path from "path";

declare const __dirname: string;

const notesMap: Record<string, { text: string; analogy: string }> = {
  // Module 1.4 Area of Interest
  "PlanningZoneIntro": {
    text: "An Area of Interest is a trap-detection zone. Never treat it as a single line where price must stop. It is a cushion where orders accumulate.",
    analogy: "A landing pad for a helicopter. The pilot doesn't aim for a microscopic point; they land within the designated circle."
  },
  "ReactionAreaIdentification": {
    text: "To map a reaction area, trace the last candle before the expansion. That is where institutions did their business.",
    analogy: "A footprint left in wet cement. The deeper the print, the more weight (orders) was applied at that specific spot."
  },
  "MiddleZoneWarningDrill": {
    text: "The center of a range is a graveyard. If you enter in the middle, you are paying full price in both directions.",
    analogy: "A tennis match. You don't stand in the middle of the court waiting for the ball; you position yourself at the base line."
  },
  "ForexSessionAoi": {
    text: "Forex AOIs must align with session extremes. Highs and lows from Tokyo are swept during London open.",
    analogy: "A tidal wave. The water pulls back at Tokyo close, only to rush forward with high volume at the London open."
  },
  "GoldWickClusterAoi": {
    text: "Gold sweeps deep. Always buffer your AOI bounds below obvious swing points to avoid getting stopped out by spikes.",
    analogy: "A lightning rod. It doesn't just attract the bolt; it grounds the energy. Gold wicks ground the market's liquidity before a real move."
  },
  "CryptoLiquidityPoolAoi": {
    text: "In Crypto, the best AOIs are where retail stop-losses are clustered. We wait for liquidation cascades to end before planning.",
    analogy: "A vacuum cleaner. It sweeps up all the dust (leverage stops) before the room (market) is clean and stable."
  },
  "AoiDebrief": {
    text: "AOI boundaries are your safety gates. If you enter only at mapped edges, you protect your capital from random churn.",
    analogy: "A border patrol agent. You only cross at official gates where security (evidence) is verified, not in the wild middle."
  },

  // Module 1.5 Plan Context Requirement
  "PlanContextIntro": {
    text: "A plan must match its environment. A breakout plan inside a tight range will get shredded. Context gates everything.",
    analogy: "Choosing your clothing. You don't wear a heavy winter coat in a desert heatwave just because it is your favorite coat."
  },
  "TrendPlanMapping": {
    text: "In a strong trend, buy the pullback origin. Do not try to catch the absolute bottom; buy the established momentum retest.",
    analogy: "Boarding a moving train. You wait for it to slow down at a station (pullback) instead of jumping on while it is at top speed."
  },
  "RangePlanMapping": {
    text: "Ranges are about boundary rotation. Buy support sweeps, sell resistance sweeps. Avoid holding for breakouts.",
    analogy: "A ping-pong ball. It bounces from paddle to paddle. Don't expect the ball to fly out of the room on a normal hit."
  },
  "BreakoutPlanMapping": {
    text: "Wait for the breakout close. A breakout is only real when a candle body closes outside the range boundaries.",
    analogy: "A jailbreak. A prisoner running toward the fence is not free until they are actually on the other side and the gate is closed."
  },
  "ForexSessionContextRequirement": {
    text: "Verify London and NY session alignment. If London goes up but NY reverses, the macro context is mixed.",
    analogy: "A relay race. The second runner (NY) must run in the same direction as the first (London) to win the race."
  },
  "GoldVolatilityRegimeRequirement": {
    text: "Gold needs high ATR (volatility) for breakout plans. If volatility is flat, stick strictly to range rotation.",
    analogy: "Sailing a boat. You need wind (volatility) to travel. If the water is calm, you don't raise the sails expecting a fast trip."
  },
  "CryptoBtcStateRequirement": {
    text: "Always check Bitcoin's trend. If BTC is dropping, altcoin support levels will fold like paper.",
    analogy: "The tide in a harbor. When the tide goes out (BTC falls), all boats (altcoins) go down, regardless of how strong they are."
  },
  "PlanContextDebrief": {
    text: "Aligning setup style with context is the first rule of professional planning. Context is the gravity of the market.",
    analogy: "A pilot checking the weather forecast. You fly with the wind at your back, not directly into a hurricane."
  },

  // Module 1.6 Trigger Design
  "TriggerDesignIntro": {
    text: "A trigger is a conditional filter, not a guarantee. It only tells you the plan is active. Risk control still holds.",
    analogy: "A motion-sensor light. It only turns on when something moves, but it doesn't tell you who is walking by."
  },
  "CandleTriggerMechanics": {
    text: "Always wait for the candle close. A candle looks bullish until the last 5 seconds when it turns into a rejection wick.",
    analogy: "An auction. You don't celebrate winning the item until the auctioneer's hammer actually falls."
  },
  "LevelTriggerMechanics": {
    text: "Limit orders at the 50% equilibrium of a zone require patience. If price misses by a tick and leaves, stand aside.",
    analogy: "A bus stop. You wait exactly at the sign. If the bus passes you by, you don't run after it down the highway."
  },
  "TimingTriggerMechanics": {
    text: "Time-gate your triggers. If a setup forms outside your active trading hours, the volume profile is untrustworthy.",
    analogy: "A store opening. You don't try to buy groceries at 3 AM when the doors are locked and the staff is asleep."
  },
  "ForexSessionTrigger": {
    text: "In Forex, session open spikes are excellent triggers. Let the initial 15m volume sweep happen before entering.",
    analogy: "A horse race. You let the gate open and the horses scramble for position before placing your live bet."
  },
  "GoldZoneReactionTrigger": {
    text: "Gold triggers must require a rapid spike and wick rejection. Slow grinds through support usually lead to breakdowns.",
    analogy: "A trampoline. You want price to bounce off the level instantly. If it sinks and stays low, the fabric is breaking."
  },
  "CryptoVenueConfirmedTrigger": {
    text: "Crypto triggers require spot volume to lead perp funding sweeps. If only futures are moving, it is a manipulation sweep.",
    analogy: "A shadow vs the object. The spot volume is the object; futures price is the shadow. Don't trade based on shadows."
  },
  "TriggerDesignDebrief": {
    text: "Triggers keep you disciplined. They ensure you only act when your exact conditions are met.",
    analogy: "A camera trap. It only snaps a picture when the target animal steps in front of the lens."
  },

  // Module 1.7 Confirmation Requirement
  "ConfirmationIntro": {
    text: "Confirmation is the second clue. It verifies that buyers or sellers have actually defended the zone.",
    analogy: "A signature on a check. You don't accept a check just because it is written; it must be signed to be valid."
  },
  "CloseQualityConfirmation": {
    text: "Check where the candle closes relative to its range. A close in the top 20% indicates strong institutional accumulation.",
    analogy: "A vote. A high close means a unanimous decision; a middle close means a tie vote with no clear winner."
  },
  "FollowThroughConfirmation": {
    text: "Wait for the follow-through candle to break the trigger candle's high. That confirms buying momentum is active.",
    analogy: "A combustion engine. The spark (trigger) is useless unless it is followed by the engine actually turning over."
  },
  "FailedConfirmationTrap": {
    text: "A sweep that closes back inside the zone is a trap. Do not buy rejections that cannot hold their expansion close.",
    analogy: "A mouse trap. The cheese looks tempting, but the moment you touch it without confirming safety, the gate closes."
  },
  "ForexSessionNewsConfirmation": {
    text: "Forex news releases distort indicators. Wait for the H1 close after news to confirm the real direction.",
    analogy: "A dust storm. You don't drive your car until the dust settles and you can see the road ahead."
  },
  "GoldWickNoiseFilter": {
    text: "Gold's high volatility creates false H1 wicks. Use H4 closes to confirm major structural support holds.",
    analogy: "A sea wall. Small waves (H1 wicks) splash over it constantly, but only a massive tide (H4 close) will break the wall."
  },
  "CryptoVenueQualityConfirmation": {
    text: "Crypto confirmation requires spot exchanges to match perp sweeps. If spot volume is low, the breakout is fake.",
    analogy: "A backing band. If the lead singer (perp price) is screaming but the band (spot volume) is silent, the music is empty."
  },
  "ConfirmationDebrief": {
    text: "Confirmation gates protect you from catching falling knives. Let the market prove it wants to turn first.",
    analogy: "A drawbridge. You don't drive across until the bridge is fully lowered and locked in place."
  },

  // Module 1.8 Plan Activation and Cancellation
  "ActivationCancellationIntro": {
    text: "A plan is a living document with a strict expiration date. If it doesn't activate in time, kill it.",
    analogy: "A carton of milk. It has a clear expiration date. If you don't drink it by then, throw it out."
  },
  "ActivationRules": {
    text: "A plan only activates when price enters the AOI. If it turns around before reaching the zone, the plan remains inactive.",
    analogy: "A trip wire. The alarm only sounds if something physically crosses the wire."
  },
  "CancellationRules": {
    text: "A plan is dead the moment price crosses the invalidation level. Cancel all pending orders immediately.",
    analogy: "A fuse in a circuit breaker. If the current spikes too high, the fuse blows to protect the house."
  },
  "MissedPlanCancellation": {
    text: "If price hits your target before filling your entry, the move is over. Cancel the plan. Do not chase the train.",
    analogy: "A missed flight. Once the plane has taken off and reached its destination, your ticket is useless."
  },
  "ForexSessionHandoffCancellation": {
    text: "Cancel pending currency plans before session handoffs. Spreads widen and liquidity drops to near zero.",
    analogy: "A bank closing its doors. You don't try to do business when the teller windows are closed and the lights are off."
  },
  "GoldMacroDistortionCancellation": {
    text: "Gold plans are highly sensitive to yield spikes. Cancel plans if real yields jump during zone approach.",
    analogy: "A change in weather. If a sudden storm rolls in, you cancel your outdoor picnic plans."
  },
  "CryptoLiquiditySpikeCancellation": {
    text: "Cancel altcoin plans if BTC sweeps its range lows with massive liquidation volume. Alts will dump harder.",
    analogy: "A fire in a building. When the alarm rings, you don't stay to organize your desk; you exit immediately."
  },
  "ActivationCancellationDebrief": {
    text: "Lifecycle discipline separates professionals from amateurs. Stale plans are dangerous liabilities.",
    analogy: "A clean desk. You archive files that are completed or dead, keeping only active projects in front of you."
  },

  // Module 1.11 Timing Plan
  "TimingPlanIntro": {
    text: "Price levels are half the equation; time is the other. Trade only during peak session hours when institutional volume is active.",
    analogy: "Fishing. You go out when the fish are feeding (tide change), not in the middle of a hot, dry afternoon."
  },
  "ValidTimingWindow": {
    text: "London and NY opens are your high-volume windows. That is when major trends are established.",
    analogy: "Rush hour in a city. The highways are packed, and traffic flows in clear directions."
  },
  "DeadTimingWindow": {
    text: "Late NY and Asia sessions are low-volume ranges. Spreads are wide, and breakout plans will fail.",
    analogy: "A quiet suburban street at midnight. Nothing is moving, and any sound is just random noise."
  },
  "LatePlanWarning": {
    text: "Do not plan new entries in the final hours of the NY session. You risk getting trapped in overnight swaps and spreads.",
    analogy: "Starting a long hike right before sunset. You will end up lost in the dark without a flashlight."
  },
  "ForexTimingSessionMatrix": {
    text: "Each currency pair has its optimal session. EUR/GBP is active in London; AUD/USD has life in Tokyo and NY.",
    analogy: "A global television broadcast. You schedule your show for the prime time of your target audience."
  },
  "GoldMacroReleaseTiming": {
    text: "Wait for macro data releases to pass. Gold moves 100 pips in seconds on news; timing plans gate these events.",
    analogy: "A volcanic eruption. You don't stand near the crater when it is about to blow; you wait for the lava to stop flowing."
  },
  "CryptoFundingWindowTiming": {
    text: "Crypto perps have funding rollovers every 8 hours. Plan entries after the rollover to avoid paying high premium rates.",
    analogy: "A parking meter. You pull into the space right after the rollover hours to get free parking."
  },
  "TimingPlanDebrief": {
    text: "Timing plans ensure you trade with the institutional tide. Never force setups during dead hours.",
    analogy: "A surfer. You wait for the set of waves to arrive instead of paddling constantly in flat water."
  },

  // Module 1.12 Event Filter
  "EventFilterIntro": {
    text: "High-impact news is a structural hazard. Your trade plan must contain clear rules to filter these events out.",
    analogy: "A hurricane warning. You secure your boat and stay on land; you don't sail out to test your skills."
  },
  "NewsEventRisk": {
    text: "During NFP or CPI, spreads can widen to 20 pips, and stop-loss orders will execute far below your invalidation level.",
    analogy: "A power surge. It can blow out your appliances if you don't have a surge protector (event filter) installed."
  },
  "FirstMoveDistortionTrap": {
    text: "The first move on news is almost always a trap. It sweeps stops on both sides of the range before the real trend starts.",
    analogy: "A head fake in basketball. The player moves one way to pull the defender, then drives in the opposite direction."
  },
  "PostEventConfirmationRule": {
    text: "Wait exactly 15 minutes after news release. Let the market process the data and establish a stable structure.",
    analogy: "Waiting for the mud to settle in a pond after someone stirs it up. You can't see the bottom until the water clears."
  },
  "ForexCpiNfpFilter": {
    text: "NFP and CPI create massive currency volatility. Keep all dollar pair orders closed until the H1 close stabilizes.",
    analogy: "A parade. You don't try to cross the street while the marching band and floats are passing by."
  },
  "GoldYieldUsdNewsFilter": {
    text: "Gold CPI moves are extremely violent. Real yields shift instantly, making technical support lines irrelevant.",
    analogy: "A major earthquake. Structural lines on a map don't protect buildings from collapsing during the shaking."
  },
  "CryptoUnlockLiquidationFilter": {
    text: "Altcoin unlocks represent massive supply injection. Avoid planning long trades in the 48 hours surrounding unlocks.",
    analogy: "A company issuing millions of new shares. The price will dilute under the sudden flood of supply."
  },
  "EventFilterDebrief": {
    text: "Professional traders protect their capital first. Filtering news events is the simplest way to reduce tail risk.",
    analogy: "A shield. You raise it when the arrows are flying, and only lower it when the battle is over."
  },

  // Module 1.13 Plan Quality Score
  "PlanQualityIntro": {
    text: "Grade your plan before execution. A plan without clear invalidation and target rules is a gamble, not a setup.",
    analogy: "A health inspector checking a restaurant. Every item on the checklist must pass to open the doors."
  },
  "GradingCompleteness": {
    text: "A complete plan requires all 5 pillars. If context or triggers are vague, the score is zero.",
    analogy: "A contract. If it is missing a signature or a key clause, it is legally void and cannot be enforced."
  },
  "GradingClarity": {
    text: "Clarity is binary. You must know the exact price where the plan is dead. Vague zones lead to emotional stop adjustments.",
    analogy: "A high-resolution photograph. If the details are blurry, you can't verify what you are looking at."
  },
  "GradingEvidenceFit": {
    text: "Does the setup match the H4 trend? Contra-trend setups require double confirmation to qualify.",
    analogy: "A puzzle piece. It must fit perfectly into the larger picture of the H4 context to be usable."
  },
  "ForexPlanScoreSheet": {
    text: "FX scorecards require session and DXY alignment. Deduct points if trading major pairs against DXY structure.",
    analogy: "A pilot's pre-flight checklist. Wind speed, fuel levels, and engine oil must all be green."
  },
  "GoldPlanScoreSheet": {
    text: "Gold scorecards require real yield confirmation. If yields are rising, long setups must be heavily discounted.",
    analogy: "A builder checking the soil quality before laying a foundation. Muddy soil means the house will sink."
  },
  "CryptoPlanScoreSheet": {
    text: "Crypto scorecards require spot support and funding checks. If funding is positive and crowded, short sweeps are highly likely.",
    analogy: "A financial audit. You inspect the ledger (orderbook) to make sure the cash (liquidity) is real."
  },
  "PlanQualityDebrief": {
    text: "Only trade plans that score 90+ on the scorecard. Protecting your capital is your primary duty.",
    analogy: "A quality control engineer in a factory. You reject any part that has a microscopic crack to keep the system safe."
  }
};

const targetPath = path.join(__dirname, "../src/components/academy/visuals/shared-l1/index.tsx");
let content = fs.readFileSync(targetPath, "utf-8");

// Parse file line by line or do structural search
// We want to find export const ComponentName = () => ( \n <L1Frame title="..." id="...">
// and add the mentorText and mentorAnalogy attributes to the L1Frame call

let modified = false;

// Regex to capture: export const ComponentName = ... <L1Frame ... title="..." id="..."
const pattern = /(export\s+const\s+(\w+)\s*=\s*\(\)\s*=>\s*\(\r?\n\s*<L1Frame\s+title="([^"]+)"\s+id="([^"]+)"([^>]*))/g;

content = content.replace(pattern, (match: string, fullDeclaration: string, compName: string, title: string, id: string, remaining: string) => {
  const note = notesMap[compName];
  if (note) {
    modified = true;
    console.log(`Injecting mentor note for ${compName}`);
    // Check if it already has mentorText or mentorAnalogy
    if (remaining.includes("mentorText")) {
      return match; // skip if already customized
    }
    
    // Inject the mentorText and mentorAnalogy
    return `export const ${compName} = () => (\n  <L1Frame \n    title="${title}" \n    id="${id}"\n    mentorText="${note.text.replace(/"/g, '\\"')}"\n    mentorAnalogy="${note.analogy.replace(/"/g, '\\"')}"${remaining}`;
  }
  return match;
});

if (modified) {
  fs.writeFileSync(targetPath, content, "utf-8");
  console.log("Custom mentor notes successfully injected into shared-l1/index.tsx!");
} else {
  console.log("No components were modified or all already have customized notes.");
}
