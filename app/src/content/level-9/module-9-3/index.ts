import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module93: AcademyModule = {
  moduleNumber: "9.3",
  level: 9,
  title: "Live Capital Sizing Audits",
  objective: "Audit position sizing protocols against live brokerage execution costs and liquidity spreads.",
  skillLevel: "expert",
  orderIndex: 3,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
