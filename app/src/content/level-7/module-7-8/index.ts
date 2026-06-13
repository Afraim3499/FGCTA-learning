import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module78: AcademyModule = {
  moduleNumber: "7.8",
  level: 7,
  title: "Slippage & Spread Management",
  objective: "Account for execution cost leakage, spread spikes, and slippage in trade planning.",
  skillLevel: "expert",
  orderIndex: 8,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
