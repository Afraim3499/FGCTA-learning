import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module615: AcademyModule = {
  moduleNumber: "6.15",
  level: 6,
  title: "Level 6 Review & Final Gate Prep",
  objective: "Synthesize all branching logic workflows for the final gate mission.",
  skillLevel: "advanced",
  orderIndex: 15,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
