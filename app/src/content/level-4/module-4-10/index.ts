import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module410: AcademyModule = {
  moduleNumber: "4.10",
  level: 4,
  title: "Macro Windows",
  objective: "Audit algorithmic delivery during high-precision 20-minute macro windows.",
  skillLevel: "advanced",
  orderIndex: 10,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
