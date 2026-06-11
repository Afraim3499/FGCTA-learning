import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module13: AcademyModule = {
  moduleNumber: "1.3",
  level: 1,
  title: "Setup Anatomy",
  objective: "Define the visual and technical layout of a structured trade setup.",
  skillLevel: "beginner",
  orderIndex: 3,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
