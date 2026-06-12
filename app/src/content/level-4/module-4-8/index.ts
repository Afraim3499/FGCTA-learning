import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module48: AcademyModule = {
  moduleNumber: "4.8",
  level: 4,
  title: "NY Killzone",
  objective: "Master the execution parameters of the 7:00 AM - 10:00 AM EST New York Killzone.",
  skillLevel: "advanced",
  orderIndex: 8,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
