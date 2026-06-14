import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module26: AcademyModule = {
  moduleNumber: "2.6",
  level: 2,
  title: "The Trend Fallacy",
  objective: "Why price moves between liquidity pools rather than continuous trendlines.",
  skillLevel: "intermediate",
  orderIndex: 6,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
