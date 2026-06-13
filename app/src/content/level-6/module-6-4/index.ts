import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module64: AcademyModule = {
  moduleNumber: "6.4",
  level: 6,
  title: "Defining the Alternative Scenario",
  objective: "Create the defensive counter-scenario when the primary expectation fails.",
  skillLevel: "advanced",
  orderIndex: 4,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
