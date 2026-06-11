import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module21: AcademyModule = {
  moduleNumber: "2.1",
  level: 2,
  title: "Chart Basics",
  objective: "Understand candlestick anatomy (OHLC) and timeframe relationship basics.",
  skillLevel: "beginner",
  orderIndex: 1,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
