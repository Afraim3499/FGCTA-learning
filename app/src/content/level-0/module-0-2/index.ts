import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module02: AcademyModule = {
  moduleNumber: "0.2",
  level: 0,
  title: "What a Market Really Is",
  objective: "Understanding the core of market interaction.",
  skillLevel: "beginner",
  orderIndex: 2,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
