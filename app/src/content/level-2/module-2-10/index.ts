import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module210: AcademyModule = {
  moduleNumber: "2.10",
  level: 2,
  title: "Breakouts vs Failed Breaks",
  objective: "Evaluate close quality to differentiate valid breakouts from sweeps.",
  skillLevel: "beginner",
  orderIndex: 10,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
