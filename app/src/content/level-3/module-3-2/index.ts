import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module32: AcademyModule = {
  moduleNumber: "3.2",
  level: 3,
  title: "Bullish & Bearish OBs",
  objective: "Identify open boundaries and calculate Mean Threshold (50%) of Order Blocks.",
  skillLevel: "intermediate",
  orderIndex: 2,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
