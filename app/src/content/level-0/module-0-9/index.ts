import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module09: AcademyModule = {
  moduleNumber: "0.9",
  level: 0,
  title: "Market Location: Knowing Where Price Is Before Judging What It Does",
  objective: "Learn how price location changes evidence quality before judging candles, structure, and movement.",
  skillLevel: "beginner",
  orderIndex: 9,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
