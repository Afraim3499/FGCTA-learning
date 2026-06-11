import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module41: AcademyModule = {
  moduleNumber: "4.1",
  level: 4,
  title: "The Daily Cycle Basics",
  objective: "Understand the core session cycle of consolidation, manipulation, and distribution.",
  skillLevel: "advanced",
  orderIndex: 1,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
