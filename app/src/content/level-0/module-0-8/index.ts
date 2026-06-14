import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module08: AcademyModule = {
  moduleNumber: "0.8",
  level: 0,
  title: "Market Conditions: Reading the Environment Before Trusting the Move",
  objective: "Learn to classify market conditions so evidence is judged inside the right environment.",
  skillLevel: "beginner",
  orderIndex: 8,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
