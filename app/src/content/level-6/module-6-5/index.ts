import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module65: AcademyModule = {
  moduleNumber: "6.5",
  level: 6,
  title: "Invalidation Anchors & Triggers",
  objective: "Identify the exact price levels and candle behaviors that kill a scenario.",
  skillLevel: "advanced",
  orderIndex: 5,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
