import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module711: AcademyModule = {
  moduleNumber: "7.11",
  level: 7,
  title: "Multi-Pair Execution Management",
  objective: "Execute scenarios across correlated pairs simultaneously without overexposure.",
  skillLevel: "expert",
  orderIndex: 11,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
