import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module212: AcademyModule = {
  moduleNumber: "2.12",
  level: 2,
  title: "External Range Boundary",
  objective: "Map the highest and lowest points of the HTF range to set boundaries.",
  skillLevel: "intermediate",
  orderIndex: 12,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
