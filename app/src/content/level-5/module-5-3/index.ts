import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module53: AcademyModule = {
  moduleNumber: "5.3",
  level: 5,
  title: "Dynamic Risk Sizing Calculations",
  objective: "Learn the exact mathematical formulas to compute unit sizes based on capital limits and stop distances.",
  skillLevel: "advanced",
  orderIndex: 3,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
