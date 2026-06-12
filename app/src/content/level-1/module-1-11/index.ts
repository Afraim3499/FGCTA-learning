import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module111: AcademyModule = {
  moduleNumber: "1.11",
  level: 1,
  title: "Timing Plan",
  objective: "Coordinate price zones with session timings and key volatility overlaps.",
  skillLevel: "beginner",
  orderIndex: 11,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
