import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module85: AcademyModule = {
  moduleNumber: "8.5",
  level: 8,
  title: "In-Session Execution & Focus Control",
  objective: "Manage cognitive load, eliminate distraction, and prevent impulsive or boredom-driven actions.",
  skillLevel: "expert",
  orderIndex: 5,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
