import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module411: AcademyModule = {
  moduleNumber: "4.11",
  level: 4,
  title: "Weekly Cycles",
  objective: "Map the formation of the High/Low of the Week (HOW/LOW) on Monday or Tuesday.",
  skillLevel: "advanced",
  orderIndex: 11,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
