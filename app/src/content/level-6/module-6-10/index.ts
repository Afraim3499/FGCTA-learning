import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module610: AcademyModule = {
  moduleNumber: "6.10",
  level: 6,
  title: "SMT Divergence Patterns",
  objective: "Identify cracks in correlated assets as advanced institutional evidence.",
  skillLevel: "advanced",
  orderIndex: 10,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
