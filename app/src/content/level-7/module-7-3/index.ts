import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module73: AcademyModule = {
  moduleNumber: "7.3",
  level: 7,
  title: "Order Entry Precision",
  objective: "Master limit, stop, and market order mechanics for clean structural entries.",
  skillLevel: "expert",
  orderIndex: 3,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
