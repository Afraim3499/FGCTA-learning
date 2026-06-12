import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module215: AcademyModule = {
  moduleNumber: "2.15",
  level: 2,
  title: "Level 2 Review",
  objective: "Synthesize all Level 2 concepts to prepare for the Execution Mechanics exam.",
  skillLevel: "beginner",
  orderIndex: 15,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
