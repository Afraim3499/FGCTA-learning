import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module38: AcademyModule = {
  moduleNumber: "3.8",
  level: 3,
  title: "Consequent Encroachment",
  objective: "Calculate and trade the 50% midpoint of Fair Value Gaps as exact anchors.",
  skillLevel: "intermediate",
  orderIndex: 8,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
