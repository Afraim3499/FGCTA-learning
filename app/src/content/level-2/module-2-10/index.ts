import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module210: AcademyModule = {
  moduleNumber: "2.10",
  level: 2,
  title: "Boundary Areas: Buy Side Liquidity (BSL)",
  objective: "Locate and audit clusters of buy stop liquidity above swing highs.",
  skillLevel: "intermediate",
  orderIndex: 10,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
