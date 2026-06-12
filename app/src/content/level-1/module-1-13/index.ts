import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module113: AcademyModule = {
  moduleNumber: "1.13",
  level: 1,
  title: "Plan Quality Score",
  objective: "Assess the structural integrity and compliance of your plan before action.",
  skillLevel: "beginner",
  orderIndex: 13,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
