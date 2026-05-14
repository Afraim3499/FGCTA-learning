import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module05: AcademyModule = {
  moduleNumber: "0.5",
  level: 0,
  title: "Market Structure: The Skeleton of Price Movement",
  objective: "Understand how candles form swings and swings form structure to identify market direction.",
  skillLevel: "beginner",
  orderIndex: 5,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
