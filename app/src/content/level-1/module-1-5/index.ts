import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module15: AcademyModule = {
  moduleNumber: "1.5",
  level: 1,
  title: "Plan Context Requirement",
  objective: "Align the trade setup style with the dominant higher-timeframe condition.",
  skillLevel: "beginner",
  orderIndex: 5,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
