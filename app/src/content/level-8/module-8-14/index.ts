import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module814: AcademyModule = {
  moduleNumber: "8.14",
  level: 8,
  title: "Habits and Cognitive Optimization",
  objective: "Stack routines, evaluate feedback, and build a sustainable psychology habit loop.",
  skillLevel: "expert",
  orderIndex: 14,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
