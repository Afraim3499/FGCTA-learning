import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module314: AcademyModule = {
  moduleNumber: "3.14",
  level: 3,
  title: "Order Flow Checklists",
  objective: "Apply quantitative checks to grade order flow footprints before planning executions.",
  skillLevel: "intermediate",
  orderIndex: 14,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
