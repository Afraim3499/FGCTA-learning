import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module112: AcademyModule = {
  moduleNumber: "1.12",
  level: 1,
  title: "Event Filter",
  objective: "Filter out plans during high-impact scheduled macroeconomic events.",
  skillLevel: "beginner",
  orderIndex: 12,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
