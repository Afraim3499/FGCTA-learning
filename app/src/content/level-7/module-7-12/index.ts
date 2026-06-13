import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module712: AcademyModule = {
  moduleNumber: "7.12",
  level: 7,
  title: "Gold Execution Specifics",
  objective: "Master COMEX session timing, spread behaviour, and XAU/USD tick-level execution rules.",
  skillLevel: "expert",
  orderIndex: 12,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
