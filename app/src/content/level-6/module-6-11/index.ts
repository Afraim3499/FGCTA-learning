import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module611: AcademyModule = {
  moduleNumber: "6.11",
  level: 6,
  title: "Forex Scenario Checklists",
  objective: "Synthesize currency session ranges and intermarket context.",
  skillLevel: "advanced",
  orderIndex: 11,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
