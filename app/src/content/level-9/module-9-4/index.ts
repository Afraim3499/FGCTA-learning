import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module94: AcademyModule = {
  moduleNumber: "9.4",
  level: 9,
  title: "Advanced Slippage & Liquidations Auditing",
  objective: "Quantify slippage leakage and liquidation events on active performance logs.",
  skillLevel: "expert",
  orderIndex: 4,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
