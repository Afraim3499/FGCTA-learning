import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module110: AcademyModule = {
  moduleNumber: "1.10",
  level: 1,
  title: "Target Path Planning",
  objective: "Map out realistic structural exits rather than arbitrary profit projections.",
  skillLevel: "beginner",
  orderIndex: 10,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
