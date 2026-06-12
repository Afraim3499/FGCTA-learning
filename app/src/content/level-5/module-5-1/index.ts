import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module51: AcademyModule = {
  moduleNumber: "5.1",
  level: 5,
  title: "The Kelly Criterion & Expected Value Optimization",
  objective: "Learn the mathematics of expected value optimization and optimal fractional position sizing.",
  skillLevel: "advanced",
  orderIndex: 1,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
