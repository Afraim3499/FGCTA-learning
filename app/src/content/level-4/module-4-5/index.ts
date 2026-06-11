import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module45: AcademyModule = {
  moduleNumber: "4.5",
  level: 4,
  title: "Power of 3 (PO3)",
  objective: "Deconstruct the daily candle into Accumulation, Manipulation, and Distribution phases.",
  skillLevel: "advanced",
  orderIndex: 5,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
