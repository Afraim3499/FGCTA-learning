import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module811: AcademyModule = {
  moduleNumber: "8.11",
  level: 8,
  title: "Strategy Confluence & Audit Loops",
  objective: "Audit strategy hit rates and R-distribution over samples of 20, 50, and 100 trades.",
  skillLevel: "expert",
  orderIndex: 11,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
