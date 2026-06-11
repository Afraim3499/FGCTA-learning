import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module19: AcademyModule = {
  moduleNumber: "1.9",
  level: 1,
  title: "Invalidation Planning",
  objective: "Define structural price boundaries where your trade hypothesis is proven wrong.",
  skillLevel: "beginner",
  orderIndex: 9,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
