import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module76: AcademyModule = {
  moduleNumber: "7.6",
  level: 7,
  title: "Partial Profit Protocols",
  objective: "The mechanics of structured scale-outs, securing risk-free trades, and locking partials.",
  skillLevel: "expert",
  orderIndex: 6,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
