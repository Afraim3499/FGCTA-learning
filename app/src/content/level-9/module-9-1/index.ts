import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module91: AcademyModule = {
  moduleNumber: "9.1",
  level: 9,
  title: "Certification Structure & Scorecard Rules",
  objective: "Understand the grading rubric, metrics, and exam conditions of the Lurnava Final Certification.",
  skillLevel: "expert",
  orderIndex: 1,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
