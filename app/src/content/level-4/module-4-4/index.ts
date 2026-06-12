import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module44: AcademyModule = {
  moduleNumber: "4.4",
  level: 4,
  title: "The NY Open & Overlap",
  objective: "Recognize the NY session overlap volatility and trade London reversals or continuations.",
  skillLevel: "advanced",
  orderIndex: 4,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
