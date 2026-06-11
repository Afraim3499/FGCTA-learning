import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module36: AcademyModule = {
  moduleNumber: "3.6",
  level: 3,
  title: "Fair Value Gaps (FVG)",
  objective: "Understand three-candle imbalance delivery and efficient pricing mechanics.",
  skillLevel: "intermediate",
  orderIndex: 6,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
