import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module16: AcademyModule = {
  moduleNumber: "1.6",
  level: 1,
  title: "Trigger Design",
  objective: "Structure clear triggers to activate a plan without treating them as certainty.",
  skillLevel: "beginner",
  orderIndex: 6,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
