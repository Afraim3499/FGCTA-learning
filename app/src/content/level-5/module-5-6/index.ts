import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module56: AcademyModule = {
  moduleNumber: "5.6",
  level: 5,
  title: "Stop-Loss Placement Mechanics",
  objective: "Differentiate between structural invalidation levels and arbitrary, psychology-driven stop-loss targets.",
  skillLevel: "advanced",
  orderIndex: 6,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
