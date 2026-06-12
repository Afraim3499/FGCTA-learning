import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module39: AcademyModule = {
  moduleNumber: "3.9",
  level: 3,
  title: "Volume Imbalances",
  objective: "Spot subtle gaps in candle bodies where wicks overlap but body ranges do not.",
  skillLevel: "intermediate",
  orderIndex: 9,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
