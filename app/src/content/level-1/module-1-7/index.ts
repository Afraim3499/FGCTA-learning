import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module17: AcademyModule = {
  moduleNumber: "1.7",
  level: 1,
  title: "Confirmation Requirement",
  objective: "Establish structural verification criteria prior to final plan activation.",
  skillLevel: "beginner",
  orderIndex: 7,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
