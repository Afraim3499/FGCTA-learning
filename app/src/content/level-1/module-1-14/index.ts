import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module114: AcademyModule = {
  moduleNumber: "1.14",
  level: 1,
  title: "Full Plan Builder",
  objective: "Synthesize all planning fields into a complete, written trade setup.",
  skillLevel: "beginner",
  orderIndex: 14,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
