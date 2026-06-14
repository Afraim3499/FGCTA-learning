import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module211: AcademyModule = {
  moduleNumber: "2.11",
  level: 2,
  title: "Boundary Areas: Sell Side Liquidity (SSL)",
  objective: "Locate and audit clusters of sell stop liquidity below swing lows.",
  skillLevel: "intermediate",
  orderIndex: 11,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
