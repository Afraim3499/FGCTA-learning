import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module81: AcademyModule = {
  moduleNumber: "8.1",
  level: 8,
  title: "Recency Bias & Next Trade Fallacy",
  objective: "Detach execution decisions from the outcome of preceding trades using probability theory.",
  skillLevel: "expert",
  orderIndex: 1,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
