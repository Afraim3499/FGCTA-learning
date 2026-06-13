import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module96: AcademyModule = {
  moduleNumber: "9.6",
  level: 9,
  title: "Prop Firm Rules & Funding Audits",
  objective: "Align strategy execution with proprietary trading firm rules and drawdowns.",
  skillLevel: "expert",
  orderIndex: 6,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
