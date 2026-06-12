import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module58: AcademyModule = {
  moduleNumber: "5.8",
  level: 5,
  title: "Trailing Stop Architectures",
  objective: "Master the mechanics of trailing stops behind swing structure to secure maximum trend expansion.",
  skillLevel: "advanced",
  orderIndex: 8,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
