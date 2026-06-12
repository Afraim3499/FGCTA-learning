import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module18: AcademyModule = {
  moduleNumber: "1.8",
  level: 1,
  title: "Plan Activation and Cancellation",
  objective: "Set explicit rules for when a trade plan becomes live or expires.",
  skillLevel: "beginner",
  orderIndex: 8,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
