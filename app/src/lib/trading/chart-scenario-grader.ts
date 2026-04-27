
/**
 * Chart Scenario Grader — V2
 * Supports multi-annotation missions (Lines + Boxes).
 */

export interface DrawnElement {
  id:        string;
  type:      "horizontal_line" | "box";
  label:     string;
  // Box coordinates
  timeStart?: number;
  timeEnd?:   number;
  priceMin?:  number;
  priceMax?:  number;
  // Line coordinates
  price?:     number;
}

export interface ValidationRequirement {
  id:        string;
  label:     string;
  type:      "horizontal_line" | "box";
  weight:    number;
  // Box target
  timeStart?: number;
  timeEnd?:   number;
  priceMin?:  number;
  priceMax?:  number;
  // Line target
  price?:     number;
  tolerance?: number; // for lines (absolute price) or boxes (% overlap)
  explanation: string;
}

export interface ChartMarkupActionsV2 {
  interactionMode: "chart_markup_v2";
  elements: DrawnElement[];
}

export interface ElementResult {
  id:           string;
  label:        string;
  passed:       boolean;
  scoreAwarded: number;
  maxScore:     number;
  explanation:  string;
  actualValue?: number; // e.g. overlap % or price diff
}

export interface ChartScenarioGradingResultV2 {
  passed:       boolean;
  score:        number;
  results:      ElementResult[];
  summary:      string;
  weaknessTags: string[];
}

/**
 * Calculates overlap for boxes.
 */
function calculateOverlapInternal(drawn: Partial<DrawnElement>, target: ValidationRequirement): number {
  if (!drawn.timeStart || !drawn.timeEnd || !drawn.priceMax || !drawn.priceMin) return 0;
  
  const timeOverlap = Math.max(
    0,
    Math.min(drawn.timeEnd, target.timeEnd!) - Math.max(drawn.timeStart, target.timeStart!)
  );
  const priceOverlap = Math.max(
    0,
    Math.min(drawn.priceMax, target.priceMax!) - Math.max(drawn.priceMin, target.priceMin!)
  );

  const intersection = timeOverlap * priceOverlap;
  const targetArea = (target.timeEnd! - target.timeStart!) * (target.priceMax! - target.priceMin!);

  if (targetArea <= 0) return 0;
  return Math.round((intersection / targetArea) * 100);
}

/**
 * Calculates proximity for lines.
 */
function calculateProximity(drawn: Partial<DrawnElement>, target: ValidationRequirement): boolean {
  if (drawn.price === undefined || target.price === undefined) return false;
  const diff = Math.abs(drawn.price - target.price);
  return diff <= (target.tolerance || 0.0005); // Default 5 pips
}

export function gradeChartScenarioV2(
  actions: ChartMarkupActionsV2,
  requirements: ValidationRequirement[],
  passThreshold: number
): ChartScenarioGradingResultV2 {
  const elementResults: ElementResult[] = requirements.map(req => {
    const drawn = actions.elements.find(e => e.label === req.label);
    
    if (!drawn) {
      return {
        id: req.id,
        label: req.label,
        passed: false,
        scoreAwarded: 0,
        maxScore: req.weight,
        explanation: `Missing: ${req.label}`
      };
    }

    let passed = false;
    let actualValue = 0;

    if (req.type === "horizontal_line") {
      passed = calculateProximity(drawn, req);
      actualValue = drawn.price ? Math.abs(drawn.price - req.price!) : 0;
    } else {
      actualValue = calculateOverlapInternal(drawn, req);
      passed = actualValue >= (req.tolerance || 60);
    }

    return {
      id: req.id,
      label: req.label,
      passed,
      scoreAwarded: passed ? req.weight : 0,
      maxScore: req.weight,
      explanation: passed ? "Correct." : req.explanation,
      actualValue
    };
  });

  const totalScore = elementResults.reduce((sum, r) => sum + r.scoreAwarded, 0);
  const passed = totalScore >= passThreshold;
  const missedCount = elementResults.filter(r => !r.passed).length;

  return {
    passed,
    score: totalScore,
    results: elementResults,
    summary: passed 
      ? "Level 2 Chart Map successfully completed." 
      : `Map incomplete or inaccurate. ${missedCount} element(s) require review.`,
    weaknessTags: missedCount > 0 ? ["chart_mapping", "structure_identification"] : []
  };
}

/**
 * LEGACY V1 GRADER (Preserved for backward compatibility)
 */
export interface DrawnZone {
  timeStart: number;
  timeEnd:   number;
  priceMin:  number;
  priceMax:  number;
}

export interface ValidationZone {
  label:     string;
  timeStart: number;
  timeEnd:   number;
  priceMin:  number;
  priceMax:  number;
}

export interface ChartMarkupActions {
  interactionMode: "chart_markup_v1";
  drawnZone: DrawnZone;
}

export interface ChartScenarioGradingResult {
  passed:       boolean;
  score:        number;
  overlapPct:   number;
  summary:      string;
  weaknessTags: string[];
  feedbackText: string;
}

export function calculateOverlap(drawn: DrawnZone, target: ValidationZone): number {
  const timeOverlap = Math.max(
    0,
    Math.min(drawn.timeEnd, target.timeEnd) - Math.max(drawn.timeStart, target.timeStart)
  );
  const priceOverlap = Math.max(
    0,
    Math.min(drawn.priceMax, target.priceMax) - Math.max(drawn.priceMin, target.priceMin)
  );

  const intersection = timeOverlap * priceOverlap;
  const targetArea = (target.timeEnd - target.timeStart) * (target.priceMax - target.priceMin);

  if (targetArea <= 0) return 0;
  return Math.round((intersection / targetArea) * 100);
}

function scoreFromOverlap(overlapPct: number): number {
  if (overlapPct >= 85) return 100;
  if (overlapPct >= 70) return 85;
  if (overlapPct >= 60) return 70;
  if (overlapPct >= 30) return 40;
  return 10;
}

export function gradeChartScenario(
  actions: ChartMarkupActions,
  validationZone: ValidationZone,
  passThreshold: number,
  feedbackOnPass: string,
  feedbackOnFail: string,
  weaknessTagOnFail: string
): ChartScenarioGradingResult {
  const overlapPct = calculateOverlap(actions.drawnZone, validationZone);
  const score      = scoreFromOverlap(overlapPct);
  const passed     = score >= passThreshold;

  return {
    passed,
    score,
    overlapPct,
    summary:      passed ? "Zone correctly identified." : "Zone placement incorrect.",
    weaknessTags: passed ? [] : [weaknessTagOnFail],
    feedbackText: passed ? feedbackOnPass : feedbackOnFail,
  };
}
