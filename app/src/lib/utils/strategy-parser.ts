export interface ParsedStrategy {
  summary: string;
  marketConditions: string;
  entryCriteria: string;
  confirmation: string;
  invalidation: string;
  risk: string;
  targetPath: string;
  traps: string;
  checklist: string[];
  practicePrompts: string[];
}

/**
 * Extracts a section from markdown text based on header keywords or bold titles.
 * Matches lines starting with markdown headers (e.g. ### Title) or bullet points (e.g. - **Title**:).
 */
function extractSection(text: string, startKeywords: string[], endKeywords: string[]): string {
  if (!text) return "";
  const lines = text.split("\n");
  let startIndex = -1;
  
  // Find where the section starts
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].toLowerCase();
    const hasKeyword = startKeywords.some(kw => line.includes(kw.toLowerCase()));
    if (hasKeyword) {
      startIndex = i;
      break;
    }
  }

  if (startIndex === -1) return "";

  let endIndex = lines.length;
  // Find where the section ends (next keyword block)
  for (let i = startIndex + 1; i < lines.length; i++) {
    const line = lines[i].toLowerCase();
    
    // Check if we hit any of the end keywords OR any generic section indicator
    const isNewSection = 
      line.startsWith("###") || 
      line.startsWith("##") || 
      (line.trim().startsWith("- **") && !line.includes("entry:") && !line.includes("exit:") && !line.includes("invalidation:")) ||
      endKeywords.some(kw => line.includes(kw.toLowerCase()));
      
    if (isNewSection) {
      endIndex = i;
      break;
    }
  }

  // Slice the lines and clean up formatting
  const sectionLines = lines.slice(startIndex, endIndex);
  
  // Clean the title from the first line if it's inline like `- **Entry Criteria**: Text...`
  let firstLine = sectionLines[0];
  const titleMatch = firstLine.match(/^-?\s*(\*\*|###)?\s*[^:*]+\s*(\*\*|###)?\s*:\s*(.*)/i);
  if (titleMatch) {
    sectionLines[0] = titleMatch[3];
  } else {
    // If it's just a header like `### Entry Criteria`, remove the header line
    sectionLines.shift();
  }

  return sectionLines.join("\n").trim();
}

/**
 * Parse checklist items under a Checklist header
 */
function extractChecklist(text: string): string[] {
  if (!text) return [];
  const lines = text.split("\n");
  let startIndex = -1;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].toLowerCase();
    if (line.includes("checklist")) {
      startIndex = i;
      break;
    }
  }

  if (startIndex === -1) return [];

  const items: string[] = [];
  for (let i = startIndex + 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith("#") || (line.startsWith("- **") && !line.includes("entry:") && !line.includes("exit:") && !line.includes("invalidation:"))) {
      break; // End of checklist section
    }
    
    // Extract actual list items, ignoring category subheaders like "Entry:", "Exit:"
    if ((line.startsWith("-") || line.startsWith("*") || /^\d+\./.test(line)) && 
        !line.toLowerCase().endsWith("entry:") && 
        !line.toLowerCase().endsWith("exit:") && 
        !line.toLowerCase().endsWith("invalidation:")) {
      
      const cleaned = line.replace(/^[-*\d.]+\s*(\[.*?\])?\s*/, "") // Remove bullet and checked state
                          .replace(/^\*\*.*?\*\*:\s*/, "") // Remove bold prefixes
                          .trim();
      if (cleaned) {
        items.push(cleaned);
      }
    }
  }

  return items;
}

export function parseStrategyContent(strategy: any): ParsedStrategy {
  if (!strategy) {
    return {
      summary: "",
      marketConditions: "",
      entryCriteria: "",
      confirmation: "",
      invalidation: "",
      risk: "",
      targetPath: "",
      traps: "",
      checklist: [],
      practicePrompts: []
    };
  }

  // Check if it is a static strategy
  if (!strategy.isDbStrategy && strategy.checklists) {
    // Construct structured fields for static strategy
    const entryCheck = strategy.checklists.entry || [];
    const exitCheck = strategy.checklists.exit || [];
    const invalCheck = strategy.checklists.invalidation || [];
    const allCheck = [...entryCheck, ...exitCheck, ...invalCheck];

    return {
      summary: strategy.setupSummary || "No summary provided for this setup.",
      marketConditions: `Primary Family: ${strategy.family}. Suitable for learning path context.`,
      entryCriteria: entryCheck.join("\n\n") || "Refer to academy criteria.",
      confirmation: "Confirm via rejection candle or structural confirmation.",
      invalidation: invalCheck.join("\n\n") || "No structural invalidation rules defined.",
      risk: strategy.riskNotes || "Apply default academy risk framework before practicing.",
      targetPath: exitCheck.join("\n\n") || "Exit rules not defined.",
      traps: strategy.riskNotes || "Look out for sweeps and fake breakouts.",
      checklist: allCheck.length > 0 ? allCheck : ["Identify structural bias", "Execute with risk rules"],
      practicePrompts: strategy.practiceConfig?.guideSteps || ["Practice identifying high-probability setups in chart lab."]
    };
  }

  // It's a DB Strategy
  const coreLogic = strategy.coreLogic || "";
  const trapMechanics = strategy.trapMechanics || "";
  const tradeWalkthrough = strategy.tradeWalkthrough || "";

  // Parse Summary
  // Use first 3 lines of coreLogic or Entry Criteria if nothing else exists
  let summary = extractSection(coreLogic, ["summary", "description"], ["entry criteria", "stop-loss", "checklist"]);
  if (!summary) {
    // If no summary section, look at first paragraph of coreLogic before headers
    const lines = coreLogic.split("\n");
    const introLines = [];
    for (const line of lines) {
      if (line.trim().startsWith("#") || line.trim().startsWith("- **")) {
        break;
      }
      if (line.trim()) introLines.push(line.trim());
    }
    summary = introLines.join(" ");
  }
  if (!summary) {
    summary = strategy.setupSummary || "A structured educational strategy setup.";
  }

  // Parse Market Conditions
  let marketConditions = extractSection(coreLogic, ["market condition", "session", "environment"], ["entry criteria", "stop-loss"]);
  if (!marketConditions) {
    marketConditions = extractSection(tradeWalkthrough, ["market context"], ["setup", "outcome"]);
  }
  if (!marketConditions) {
    marketConditions = `Family: ${strategy.family || "General Technical Setup"}. Best practiced in its native session environment.`;
  }

  // Parse Entry Criteria
  let entryCriteria = extractSection(coreLogic, ["entry criteria", "entry rules", "logic:"], ["stop-loss", "profit target", "checklist"]);
  if (!entryCriteria) {
    entryCriteria = "Entry criteria details not defined yet. Refer to academy guide.";
  }

  // Parse Invalidation
  let invalidation = extractSection(coreLogic, ["invalidation", "stop-loss placement"], ["profit target", "checklist"]);
  if (!invalidation) {
    invalidation = "Structural invalidation zone not defined yet.";
  }

  // Parse Target Path
  let targetPath = extractSection(coreLogic, ["profit target", "exit criteria", "target path"], ["checklist"]);
  if (!targetPath) {
    targetPath = "Target path logic not defined yet.";
  }

  // Parse Risk Rules
  let risk = extractSection(trapMechanics, ["common mistake", "mitigation rules"], ["mitigation"]);
  if (!risk) {
    risk = "Risk rules not defined yet. Use academy risk framework before practicing this setup.";
  }

  // Parse Traps
  let traps = extractSection(trapMechanics, ["trapped", "sweeps", "trap mechanics"], ["common mistake", "mitigation rules"]);
  if (!traps) {
    traps = "No known market trap patterns documented for this level yet.";
  }

  // Parse Confirmation
  let confirmation = extractSection(coreLogic, ["confirmation", "confluence"], ["stop-loss", "checklist"]);
  if (!confirmation) {
    confirmation = "Confirm setup using standard session confirmation and volume check.";
  }

  // Parse Checklist
  let checklist = extractChecklist(coreLogic);
  if (checklist.length === 0) {
    // Fallback: extract list items from entry criteria or invalidation
    checklist = [
      "Confirm market condition alignment",
      "Identify entry trigger zone",
      "Set strict invalidation level",
      "Verify minimum 1:2 Risk-Reward ratio"
    ];
  }

  // Practice prompts / guide steps
  const practicePrompts = strategy.practiceConfig?.guideSteps || [
    "Locate critical structural context.",
    "Identify standard entry points.",
    "Note key rejection signals."
  ];

  return {
    summary,
    marketConditions,
    entryCriteria,
    confirmation,
    invalidation,
    risk,
    targetPath,
    traps,
    checklist,
    practicePrompts
  };
}
