import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module313: AcademyModule = {
  moduleNumber: "3.13",
  level: 3,
  title: "Invalidated Footprints",
  objective: "Manage risk when institutional order blocks and gaps fail to defend.",
  skillLevel: "intermediate",
  orderIndex: 13,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
