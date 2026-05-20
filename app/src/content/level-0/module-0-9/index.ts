import { coreCards } from "./core";
import { AcademyModule } from "../../../types/curriculum";

export const module09: AcademyModule = {
  moduleNumber: "0.9",
  level: 0,
  title: "Gold Reading Lab: Volatility, Zones, Wicks, and Macro Pressure",
  objective: "Teach learners how to combine Gold-specific volatility, reaction zones, wicks, sweeps, macro pressure, USD context, close quality, and follow-through into a disciplined XAU/USD reading.",
  skillLevel: "beginner",
  orderIndex: 9,
  tracks: {
    core: coreCards,
    forex: [],
    gold: [],
    crypto: []
  }
};
export * from "./core";
