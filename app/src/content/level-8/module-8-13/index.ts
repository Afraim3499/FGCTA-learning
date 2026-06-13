import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module813: AcademyModule = {
  moduleNumber: "8.13",
  level: 8,
  title: "Crypto Performance & On-Chain Audits",
  objective: "Audit perpetual funding rate drag, on-chain flows (Glassnode), and exchange-specific wicks.",
  skillLevel: "expert",
  orderIndex: 13,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
