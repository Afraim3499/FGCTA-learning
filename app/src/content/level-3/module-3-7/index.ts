import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module37: AcademyModule = {
  moduleNumber: "3.7",
  level: 3,
  title: "Inversion FVGs",
  objective: "Identify support/resistance flips when gaps are run through by price.",
  skillLevel: "intermediate",
  orderIndex: 7,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
