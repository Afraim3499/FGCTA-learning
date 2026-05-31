import { coreCards } from "./core";
import { AcademyModule } from "../../../types/curriculum";

export const module012: AcademyModule = {
  moduleNumber: "0.12",
  level: 0,
  title: "Crypto Derivatives Reading Lab: Open Interest, Funding, and Liquidation Flushes",
  objective: "Teach learners how open interest, funding pressure, crowded positioning, liquidation flushes, and post-liquidation behavior affect crypto reading quality without turning derivatives metrics into trade signals.",
  skillLevel: "beginner",
  orderIndex: 12,
  tracks: {
    core: coreCards,
    forex: [],
    gold: [],
    crypto: []
  }
};

export * from "./core";
