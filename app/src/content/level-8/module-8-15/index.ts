import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module815: AcademyModule = {
  moduleNumber: "8.15",
  level: 8,
  title: "Level 8 Review & Final Gate Prep",
  objective: "Synthesize all journaling, plan rulebooks, and performance reviews in preparation for the Gate.",
  skillLevel: "expert",
  orderIndex: 15,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
