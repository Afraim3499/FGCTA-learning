import { coreCards } from "./core";
import { forexCards } from "./forex";
import { cryptoCards } from "./crypto";
import { goldCards } from "./gold";
import { AcademyModule } from "../../../types/curriculum";

export const module07: AcademyModule = {
  moduleNumber: "0.7",
  level: 0,
  title: "Market Conditions: Reading the Environment Before Trusting the Move",
  objective: "Learn to classify market conditions so evidence is judged inside the right environment.",
  skillLevel: "beginner",
  orderIndex: 7,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
