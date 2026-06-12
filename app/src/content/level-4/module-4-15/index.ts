import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module415: AcademyModule = {
  moduleNumber: "4.15",
  level: 4,
  title: "Level 4 Review",
  objective: "Synthesize all Time & Price concepts to prepare for the weekly cycle capstone scenario and knowledge exam.",
  skillLevel: "advanced",
  orderIndex: 15,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
