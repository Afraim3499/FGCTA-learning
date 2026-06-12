import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module515: AcademyModule = {
  moduleNumber: "5.15",
  level: 5,
  title: "Level 5 Review & Final Gate Prep",
  objective: "Synthesize all Level 5 risk architecture concepts and prepare for the Drawdown Crucible exam.",
  skillLevel: "advanced",
  orderIndex: 15,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
