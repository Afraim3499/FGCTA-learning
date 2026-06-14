import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module07: AcademyModule = {
  moduleNumber: "0.7",
  level: 0,
  title: "Evidence Audit: Turning Chart Records Into a Reading",
  objective: "Combine separate candle, timeframe, and structure clues into a unified market reading quality classification.",
  skillLevel: "beginner",
  orderIndex: 7,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
