import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module613: AcademyModule = {
  moduleNumber: "6.13",
  level: 6,
  title: "Crypto Scenario Checklists",
  objective: "Pre-execution checklist incorporating spot-perp discrepancies and liquidations.",
  skillLevel: "advanced",
  orderIndex: 13,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
