import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module77: AcademyModule = {
  moduleNumber: "7.7",
  level: 7,
  title: "Execution Under News Events",
  objective: "Define execution rules for high-impact news windows — what to do before, during, and after.",
  skillLevel: "expert",
  orderIndex: 7,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
