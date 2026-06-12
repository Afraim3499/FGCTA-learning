import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module35: AcademyModule = {
  moduleNumber: "3.5",
  level: 3,
  title: "Propulsion Blocks",
  objective: "Spot highly accelerated order block retests that show immediate price expansion.",
  skillLevel: "intermediate",
  orderIndex: 5,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
