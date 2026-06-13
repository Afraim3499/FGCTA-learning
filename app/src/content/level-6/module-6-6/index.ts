import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module66: AcademyModule = {
  moduleNumber: "6.6",
  level: 6,
  title: "Time-Based Invalidation",
  objective: "Expire scenario plans if structural interactions fail to occur within key time windows.",
  skillLevel: "advanced",
  orderIndex: 6,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
