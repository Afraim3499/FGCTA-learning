import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module414: AcademyModule = {
  moduleNumber: "4.14",
  level: 4,
  title: "Time & Price Checklists",
  objective: "Grade daily session and weekly cycle eligibility before committing execution orders.",
  skillLevel: "advanced",
  orderIndex: 14,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
