import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module92: AcademyModule = {
  moduleNumber: "9.2",
  level: 9,
  title: "Portfolio Risk & Strategy Correlation",
  objective: "Model strategy correlation to prevent overlapping risk profiles across correlated assets.",
  skillLevel: "expert",
  orderIndex: 2,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
