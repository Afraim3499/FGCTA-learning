import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module27: AcademyModule = {
  moduleNumber: "2.7",
  level: 2,
  title: "The Trend Fallacy",
  objective: "Why price moves between liquidity pools rather than continuous trendlines.",
  skillLevel: "beginner",
  orderIndex: 7,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
