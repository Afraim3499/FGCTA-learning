import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module03: AcademyModule = {
  moduleNumber: "0.3",
  level: 0,
  title: "Primary Price Feeds",
  objective: "Understand bid/ask spreads, liquidity pools, and tick sizes.",
  skillLevel: "beginner",
  orderIndex: 3,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
