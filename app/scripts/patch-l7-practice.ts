import fs from "fs";
import path from "path";

const levelDir = path.join(__dirname, "../src/content/level-7");

const patches = [
  {
    file: "module-7-2/forex.ts",
    title: "Practicing Currency Pair Screening",
    taskData: {
      type: "choice_block",
      question: "Which average daily range (ADR) filter is most appropriate when screening major forex pairs to ensure adequate volatility for intraday execution?",
      options: [
        {
          id: "0",
          text: "Select pairs with an ADR above 50-70 pips to ensure sufficient session range.",
          isCorrect: true,
          feedback: "Correct. Professional intraday execution requires a minimum range (typically 50-70 pips) to make the planned risk-to-reward targets mathematically viable."
        },
        {
          id: "1",
          text: "Only trade pairs with an ADR below 15 pips to avoid session breakout traps.",
          isCorrect: false,
          feedback: "Incorrect. ADR below 15 pips represents extremely low volatility, making it very difficult to hit profit targets within a single session."
        },
        {
          id: "2",
          text: "Filter for pairs with exactly 10 pips ADR to minimize overnight swap fees.",
          isCorrect: false,
          feedback: "Incorrect. ADR does not influence overnight swap rates, and 10 pips is too low for day trading."
        },
        {
          id: "3",
          text: "Select pairs with an ADR above 300 pips during the illiquid Asian session.",
          isCorrect: false,
          feedback: "Incorrect. Major pairs rarely average 300 pips daily range, and trading high-spread illiquid sessions violates the Execution OS."
        }
      ]
    }
  },
  {
    file: "module-7-6/forex.ts",
    title: "Practicing Forex Partial Profit Strategies",
    taskData: {
      type: "choice_block",
      question: "You enter a long position on USDCHF at 0.9250 with a target of 50 pips. Based on partial profit protocols, what is the correct action when price hits +25 pips (1:1 R:R)?",
      options: [
        {
          id: "0",
          text: "Scale out 50% of the position and move the stop-loss to breakeven (0.9250) to secure a risk-free trade.",
          isCorrect: true,
          feedback: "Correct. Scaling out 50% at 1:1 R:R and adjusting the stop-loss to entry locks in partial profit and makes the remaining position risk-free."
        },
        {
          id: "1",
          text: "Close 100% of the position immediately to avoid potential mid-session reversals.",
          isCorrect: false,
          feedback: "Incorrect. Closing 100% at 1:1 prevents you from capturing the full target, undermining the long-term mathematical edge."
        },
        {
          id: "2",
          text: "Double the position size using market orders to capitalize on the momentum.",
          isCorrect: false,
          feedback: "Incorrect. Doubling the position at +25 pips increases average entry price and overall risk exposure, violating execution rules."
        },
        {
          id: "3",
          text: "Leave the stop-loss at its original level and add more limit buy orders at 0.9260.",
          isCorrect: false,
          feedback: "Incorrect. Keeping the stop at the original level leaves full risk on the table, failing to establish a risk-free runner."
        }
      ]
    }
  },
  {
    file: "module-7-6/crypto.ts",
    title: "Practicing Crypto Partial Profit Techniques",
    taskData: {
      type: "choice_block",
      question: "During a high-leverage perpetual long trade on SOL from $30, which partial profit scale-out scheme best protects equity against flash wicks?",
      options: [
        {
          id: "0",
          text: "Place limit orders to scale out 30% at $33, 30% at $35, and let the remaining 40% run with a trailing stop.",
          isCorrect: true,
          feedback: "Correct. Pre-placing limit scale-out orders at key structural levels ensures you get filled during rapid flash wicks when market orders face high slippage."
        },
        {
          id: "1",
          text: "Wait for a bearish engulfing candle on the 1-minute chart, then exit 100% via market order.",
          isCorrect: false,
          feedback: "Incorrect. Relying on 1-minute chart engulfing patterns leads to over-trading and highly reactive, emotional exits."
        },
        {
          id: "2",
          text: "Keep the full position open until the primary target is hit, ignoring intermediate price levels.",
          isCorrect: false,
          feedback: "Incorrect. In highly volatile crypto markets, refusing to take partial profits frequently turns winning trades into losses."
        },
        {
          id: "3",
          text: "Close 90% of the position at $30.50 to guarantee that the fees are covered.",
          isCorrect: false,
          feedback: "Incorrect. Exiting 90% at a negligible profit margin destroys your risk-to-reward ratio and does not justify exchange fees."
        }
      ]
    }
  },
  {
    file: "module-7-8/crypto.ts",
    title: "Simulating Crypto Execution Costs",
    taskData: {
      type: "choice_block",
      question: "When simulating a market order entry on a volatile perp contract, how does high slippage affect the realized risk-reward (R:R) ratio?",
      options: [
        {
          id: "0",
          text: "Slippage fills the order at a worse price, widening the stop-loss distance and reducing the potential R:R.",
          isCorrect: true,
          feedback: "Correct. Getting filled at a worse price than planned increases the distance to your stop-loss and shrinks the distance to your target, degrading R:R."
        },
        {
          id: "1",
          text: "Slippage improves the execution price, narrowing the stop-loss distance.",
          isCorrect: false,
          feedback: "Incorrect. Market slippage in the direction of the trade fills your order at a higher (worse) price, not a better one."
        },
        {
          id: "2",
          text: "Slippage has no effect on the R:R ratio since stop-loss is set in pips.",
          isCorrect: false,
          feedback: "Incorrect. Since the stop-loss must remain below structure, a worse entry price directly increases the risk distance."
        },
        {
          id: "3",
          text: "Slippage automatically triggers exchange rebates that cover the entry fee.",
          isCorrect: false,
          feedback: "Incorrect. Slippage is market impact cost, not an exchange rebate fee structure."
        }
      ]
    }
  }
];

function patchFile(filePath: string, cardTitle: string, taskDataObj: any) {
  if (!fs.existsSync(filePath)) {
    console.error(`File missing: ${filePath}`);
    return;
  }
  let content = fs.readFileSync(filePath, "utf-8");
  const titleIdx = content.indexOf(`"title": "${cardTitle}"`);
  if (titleIdx === -1) {
    console.error(`Could not find card with title "${cardTitle}" in ${filePath}`);
    return;
  }
  const taskDataIdx = content.indexOf(`"taskData": null,`, titleIdx);
  if (taskDataIdx === -1) {
    console.error(`Could not find "taskData": null after title "${cardTitle}" in ${filePath}`);
    return;
  }

  const taskDataStr = JSON.stringify(taskDataObj, null, 6)
    .split("\n")
    .map((line, i) => i === 0 ? line : "    " + line)
    .join("\n");

  const before = content.slice(0, taskDataIdx);
  const after = content.slice(taskDataIdx + `"taskData": null,`.length);

  content = before + `"taskData": ${taskDataStr},` + after;
  fs.writeFileSync(filePath, content, "utf-8");
  console.log(`✅ Successfully patched ${path.basename(filePath)}: "${cardTitle}"`);
}

function run() {
  console.log("--- PATCHING LEVEL 7 PRACTICE CARDS ---");
  for (const p of patches) {
    const fullPath = path.join(levelDir, p.file);
    patchFile(fullPath, p.title, p.taskData);
  }
  console.log("--- PATCHES COMPLETE ---");
}

run();
