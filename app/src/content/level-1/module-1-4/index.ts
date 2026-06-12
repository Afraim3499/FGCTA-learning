import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module14: AcademyModule = {
  moduleNumber: "1.4",
  level: 1,
  title: "Area of Interest",
  objective: "Map out clear reaction areas and ranges while avoiding entry in the middle.",
  skillLevel: "beginner",
  orderIndex: 4,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
