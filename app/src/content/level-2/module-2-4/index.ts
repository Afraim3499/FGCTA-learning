import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module24: AcademyModule = {
  moduleNumber: "2.4",
  level: 2,
  title: "Market Structure: Trend vs Range",
  objective: "Determine whether the market environment is expanding in trends or consolidating in dealing ranges.",
  skillLevel: "intermediate",
  orderIndex: 4,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
