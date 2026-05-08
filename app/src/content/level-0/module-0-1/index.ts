import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module01: AcademyModule = {
  moduleNumber: "0.1",
  level: 0,
  title: "What Lurnava Teaches: Reading, Practice, Review",
  objective: "Welcome to the Market Reading Foundations.",
  skillLevel: "beginner",
  orderIndex: 1,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
