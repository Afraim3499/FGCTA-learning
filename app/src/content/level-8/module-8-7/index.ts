import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module87: AcademyModule = {
  moduleNumber: "8.7",
  level: 8,
  title: "Structuring a Performance Database",
  objective: "Log trade data with structured variables, setup tags, and mistake classifications.",
  skillLevel: "expert",
  orderIndex: 7,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
