import { coreCards } from "./core";
import { forexCards } from "./forex";
import { cryptoCards } from "./crypto";
import { goldCards } from "./gold";
import { AcademyModule } from "../../../types/curriculum";

export const module06: AcademyModule = {
  moduleNumber: "0.6",
  level: 0,
  title: "Evidence Audit: Turning Chart Records Into a Reading",
  objective: "Combine separate candle, timeframe, and structure clues into a unified market reading quality classification.",
  skillLevel: "beginner",
  orderIndex: 6,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
