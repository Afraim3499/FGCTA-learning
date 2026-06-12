import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module514: AcademyModule = {
  moduleNumber: "5.14",
  level: 5,
  title: "Risk Management Checklists",
  objective: "Implement a rigorous pre-trade check list to ensure every parameter aligns with capital rules.",
  skillLevel: "advanced",
  orderIndex: 14,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
