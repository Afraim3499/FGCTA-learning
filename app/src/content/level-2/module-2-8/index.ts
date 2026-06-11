import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module28: AcademyModule = {
  moduleNumber: "2.8",
  level: 2,
  title: "Internal vs External Structure",
  objective: "Filter minor internal pullbacks from major external dealing ranges.",
  skillLevel: "beginner",
  orderIndex: 8,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
