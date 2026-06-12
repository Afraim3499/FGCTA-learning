import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module512: AcademyModule = {
  moduleNumber: "5.12",
  level: 5,
  title: "Capital Defense vs Narrative Protection",
  objective: "Differentiate between protecting your account balance and defending a market prediction bias.",
  skillLevel: "advanced",
  orderIndex: 12,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
