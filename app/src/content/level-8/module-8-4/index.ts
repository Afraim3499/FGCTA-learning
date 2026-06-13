import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module84: AcademyModule = {
  moduleNumber: "8.4",
  level: 8,
  title: "Daily Routines & Pre-Market Scans",
  objective: "Establish a rigorous pre-market scan checklist for macro calendars, yield spreads, and index indicators.",
  skillLevel: "expert",
  orderIndex: 4,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
