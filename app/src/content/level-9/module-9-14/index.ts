import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module914: AcademyModule = {
  moduleNumber: "9.14",
  level: 9,
  title: "Institutional Capital Management",
  objective: "Understand investor reporting, fiduciary limits, and institutional drawdown gating.",
  skillLevel: "expert",
  orderIndex: 14,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
