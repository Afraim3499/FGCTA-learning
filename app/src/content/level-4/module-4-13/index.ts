import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module413: AcademyModule = {
  moduleNumber: "4.13",
  level: 4,
  title: "Time-based Invalidation",
  objective: "Invalidate trade blueprints when setup targets are missed within killzone windows.",
  skillLevel: "advanced",
  orderIndex: 13,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
