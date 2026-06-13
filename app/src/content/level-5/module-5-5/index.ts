import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module55: AcademyModule = {
  moduleNumber: "5.5",
  level: 5,
  title: "Scaling In: Pyramiding Rules",
  objective: "Learn the strict conditions under which size can be added to an active winning position.",
  skillLevel: "advanced",
  orderIndex: 5,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
