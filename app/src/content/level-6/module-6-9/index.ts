import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module69: AcademyModule = {
  moduleNumber: "6.9",
  level: 6,
  title: "DXY Intermarket Verification",
  objective: "Use the U.S. Dollar Index as a confirmation filter for primary setups.",
  skillLevel: "advanced",
  orderIndex: 9,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
