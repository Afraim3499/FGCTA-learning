import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module315: AcademyModule = {
  moduleNumber: "3.15",
  level: 3,
  title: "Level 3 Review",
  objective: "Synthesize all Level 3 order flow footprint concepts to prepare for the Capstone Scenario and Exam.",
  skillLevel: "intermediate",
  orderIndex: 15,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
