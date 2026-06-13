import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module88: AcademyModule = {
  moduleNumber: "8.8",
  level: 8,
  title: "Core Performance Metric Analytics",
  objective: "Calculate win rate, profit factor, average R-multiple, and expectancy across trade samples.",
  skillLevel: "expert",
  orderIndex: 8,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
