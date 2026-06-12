import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module34: AcademyModule = {
  moduleNumber: "3.4",
  level: 3,
  title: "Breaker Blocks",
  objective: "Identify narrative shifts when protected order blocks are swept and turn into support/resistance breakers.",
  skillLevel: "intermediate",
  orderIndex: 4,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
