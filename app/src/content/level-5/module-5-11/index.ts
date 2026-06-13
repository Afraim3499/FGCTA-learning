import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module511: AcademyModule = {
  moduleNumber: "5.11",
  level: 5,
  title: "Circuit Breakers: Weekly Loss Limits",
  objective: "Enforce weekly loss caps to pause trading, execute a systems audit, and restore psychological balance.",
  skillLevel: "advanced",
  orderIndex: 11,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
