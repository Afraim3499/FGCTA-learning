import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module57: AcademyModule = {
  moduleNumber: "5.7",
  level: 5,
  title: "Break-Even Stop Protocols",
  objective: "Establish rules for moving stop losses to entry without prematurely suffocating high-probability trades.",
  skillLevel: "advanced",
  orderIndex: 7,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
