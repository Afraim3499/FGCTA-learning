import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module214: AcademyModule = {
  moduleNumber: "2.14",
  level: 2,
  title: "Session Windows",
  objective: "Coordinate execution plans with high-volume session openings.",
  skillLevel: "intermediate",
  orderIndex: 14,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
