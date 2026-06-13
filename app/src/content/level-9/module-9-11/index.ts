import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module911: AcademyModule = {
  moduleNumber: "9.11",
  level: 9,
  title: "Multi-Exchange Liquidity Auditing",
  objective: "Evaluate venue liquidity profiles to optimize order execution and routing.",
  skillLevel: "expert",
  orderIndex: 11,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
