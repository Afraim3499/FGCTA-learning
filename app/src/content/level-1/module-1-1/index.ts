import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module11: AcademyModule = {
  moduleNumber: "1.1",
  level: 1,
  title: "Reading-to-Hypothesis Conversion",
  objective: "Convert raw chart readings into clear, falsifiable trade hypotheses without executing.",
  skillLevel: "beginner",
  orderIndex: 1,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
