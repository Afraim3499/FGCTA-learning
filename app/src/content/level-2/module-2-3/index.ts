import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module23: AcademyModule = {
  moduleNumber: "2.3",
  level: 2,
  title: "Primary Price Feeds",
  objective: "Distinguish between institutional direct price feeds and retail B-Book brokers.",
  skillLevel: "beginner",
  orderIndex: 3,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
