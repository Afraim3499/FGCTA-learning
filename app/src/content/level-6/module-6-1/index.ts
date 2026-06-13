import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module61: AcademyModule = {
  moduleNumber: "6.1",
  level: 6,
  title: "The Branching Logic Mindset",
  objective: "Transition from static predictions to two-way branching 'If/Then' logic.",
  skillLevel: "advanced",
  orderIndex: 1,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
