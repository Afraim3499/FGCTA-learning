import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module115: AcademyModule = {
  moduleNumber: "1.15",
  level: 1,
  title: "Level 1 Planning Mission",
  objective: "Consolidate your learning by submitting and defending a full trade plan.",
  skillLevel: "beginner",
  orderIndex: 15,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
