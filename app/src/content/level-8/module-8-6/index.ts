import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module86: AcademyModule = {
  moduleNumber: "8.6",
  level: 8,
  title: "Post-Market Journaling Mechanics",
  objective: "Structure a post-market journaling protocol that logs technical entry, exit, and mental state.",
  skillLevel: "expert",
  orderIndex: 6,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
