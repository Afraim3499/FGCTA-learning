import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module29: AcademyModule = {
  moduleNumber: "2.9",
  level: 2,
  title: "Displacement",
  objective: "Measure raw displacement using large body-to-wick ratios and volume.",
  skillLevel: "beginner",
  orderIndex: 9,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
