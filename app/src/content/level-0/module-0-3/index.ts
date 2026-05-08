import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module03: AcademyModule = {
  moduleNumber: "0.3",
  level: 0,
  title: "Candles Are Records, Not Signals",
  objective: "Moving from shape recognition to record reading.",
  skillLevel: "beginner",
  orderIndex: 3,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
