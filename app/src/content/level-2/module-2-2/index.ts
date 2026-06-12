import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module22: AcademyModule = {
  moduleNumber: "2.2",
  level: 2,
  title: "Fractal Nature of Price",
  objective: "Identify how price structure repeats fractal patterns across scales.",
  skillLevel: "beginner",
  orderIndex: 2,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
