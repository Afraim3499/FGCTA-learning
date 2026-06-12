import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module33: AcademyModule = {
  moduleNumber: "3.3",
  level: 3,
  title: "Mitigation Blocks",
  objective: "Map trapped institutional orders when price fails to take out swing extremes.",
  skillLevel: "intermediate",
  orderIndex: 3,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
