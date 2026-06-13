import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module612: AcademyModule = {
  moduleNumber: "6.12",
  level: 6,
  title: "Gold Scenario Checklists",
  objective: "Pre-execution checklist incorporating gold fixings and yield correlations.",
  skillLevel: "advanced",
  orderIndex: 12,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
