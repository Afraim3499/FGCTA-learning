export interface Stage {
  number: number;
  title: string;
  modules: string[];
  description: string;
}

export const level0Stages: Stage[] = [
  {
    number: 1,
    title: "Orientation and Market Mechanics",
    modules: ["0.1", "0.2"],
    description: "Learn how the training platform works and understand core bid/ask order matching."
  },
  {
    number: 2,
    title: "Chart Records and Timeframe Weight",
    modules: ["0.3", "0.4"],
    description: "Shift from signal guessing to record reading and timeframe hierarchy."
  },
  {
    number: 3,
    title: "Structure, Evidence, Condition, and Location",
    modules: ["0.5", "0.6", "0.7", "0.8"],
    description: "Map swings, audit structural evidence, and classify market conditions & locations."
  },
  {
    number: 4,
    title: "Asset-Specific Reading Labs",
    modules: ["0.9", "0.10", "0.11", "0.12"],
    description: "Apply reading rules to asset-specific behaviors in Gold, Forex, and Crypto."
  },
  {
    number: 5,
    title: "Practice Discipline and Review",
    modules: ["0.13", "0.14"],
    description: "Master simulation behavior, process quality, and practice note writing."
  },
  {
    number: 6,
    title: "Final Foundation Mission",
    modules: ["0.15"],
    description: "Combine all Level 0 skills into one disciplined, audited market reading."
  }
];
