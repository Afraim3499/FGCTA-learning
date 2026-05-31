import { coreCards } from "./core";
import { AcademyModule } from "../../../types/curriculum";

export const module015: AcademyModule = {
  moduleNumber: "0.15",
  level: 0,
  title: "Level 0 Foundation Mission: Build a Complete Market Reading",
  objective: "Train and assess whether the learner can combine Level 0 skills into one disciplined reading workflow: observe the market, identify timeframe and structure, classify condition and location, audit evidence, check asset-specific context, define verification, decide action/stand-aside, and prepare a useful practice note.",
  skillLevel: "beginner",
  orderIndex: 15,
  tracks: {
    core: coreCards,
    forex: [],
    gold: [],
    crypto: []
  }
};

export * from "./core";
