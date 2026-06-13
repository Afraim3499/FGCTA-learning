import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module98: AcademyModule = {
  moduleNumber: "9.8",
  level: 9,
  title: "Sharpe and Expectancy Optimization",
  objective: "Calculate and optimize the Sharpe Ratio and Expectancy over active trade samples.",
  skillLevel: "expert",
  orderIndex: 8,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
