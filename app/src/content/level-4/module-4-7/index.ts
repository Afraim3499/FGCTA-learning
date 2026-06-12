import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module47: AcademyModule = {
  moduleNumber: "4.7",
  level: 4,
  title: "London Killzone",
  objective: "Master the execution parameters of the 2:00 AM - 5:00 AM EST London Killzone.",
  skillLevel: "advanced",
  orderIndex: 7,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
