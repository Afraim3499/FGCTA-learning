import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module04: AcademyModule = {
  moduleNumber: "0.4",
  level: 0,
  title: "Chart Basics & Candlestick Anatomy",
  objective: "Master the OHLC candlestick anatomy, reading bodies and wicks as records of market interaction.",
  skillLevel: "beginner",
  orderIndex: 4,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
