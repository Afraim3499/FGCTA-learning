import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module812: AcademyModule = {
  moduleNumber: "8.12",
  level: 8,
  title: "Gold Performance & Correlation Reviews",
  objective: "Review commodity-specific dynamics, real yields, XAU/XAG ratios, and COMEX spread leakage.",
  skillLevel: "expert",
  orderIndex: 12,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
