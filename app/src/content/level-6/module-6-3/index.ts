import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module63: AcademyModule = {
  moduleNumber: "6.3",
  level: 6,
  title: "Defining the Primary Scenario",
  objective: "Formulate the path of highest structural probability based on the evidence stack.",
  skillLevel: "advanced",
  orderIndex: 3,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
