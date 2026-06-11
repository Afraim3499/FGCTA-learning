import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module12: AcademyModule = {
  moduleNumber: "1.2",
  level: 1,
  title: "Plan Eligibility Filter",
  objective: "Filter out low-probability configurations by verifying evidence thresholds.",
  skillLevel: "beginner",
  orderIndex: 2,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
