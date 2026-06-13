import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module614: AcademyModule = {
  moduleNumber: "6.14",
  level: 6,
  title: "Journal-Based Process Audits",
  objective: "Reviewing session journals focusing strictly on scenario adherence over P&L.",
  skillLevel: "advanced",
  orderIndex: 14,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
