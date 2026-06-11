import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module311: AcademyModule = {
  moduleNumber: "3.11",
  level: 3,
  title: "Footprint Basics",
  objective: "Read bid/ask order book volume delta imbalances at specific price levels.",
  skillLevel: "intermediate",
  orderIndex: 11,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
