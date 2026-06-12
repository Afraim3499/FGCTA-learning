import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module42: AcademyModule = {
  moduleNumber: "4.2",
  level: 4,
  title: "The Asian Range",
  objective: "Map the Asian range and identify its boundaries as early key liquidity pools.",
  skillLevel: "advanced",
  orderIndex: 2,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
