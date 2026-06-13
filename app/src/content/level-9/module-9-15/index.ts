import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module915: AcademyModule = {
  moduleNumber: "9.15",
  level: 9,
  title: "Level 9 Review & Final Certification Crucible",
  objective: "Synthesize all prior curriculum concepts and execute the Final Certification Gate.",
  skillLevel: "expert",
  orderIndex: 15,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
