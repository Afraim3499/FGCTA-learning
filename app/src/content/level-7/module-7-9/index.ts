import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module79: AcademyModule = {
  moduleNumber: "7.9",
  level: 7,
  title: "The Execution Debrief",
  objective: "Post-session review protocol — comparing executions against the pre-planned scenario, not P&L.",
  skillLevel: "expert",
  orderIndex: 9,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
