import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module72: AcademyModule = {
  moduleNumber: "7.2",
  level: 7,
  title: "Pre-Session Preparation Routines",
  objective: "Structure the pre-session checklist that prepares mind, model, and market data before any trade.",
  skillLevel: "expert",
  orderIndex: 2,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
