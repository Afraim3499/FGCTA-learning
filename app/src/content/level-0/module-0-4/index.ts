import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module04: AcademyModule = {
  moduleNumber: "0.4",
  level: 0,
  title: "The Hierarchy of Evidence",
  objective: "Understand the weight and hierarchy of market data layers.",
  skillLevel: "beginner",
  orderIndex: 4,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
