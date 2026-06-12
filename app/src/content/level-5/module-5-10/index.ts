import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module510: AcademyModule = {
  moduleNumber: "5.10",
  level: 5,
  title: "Circuit Breakers: Daily Loss Limits",
  objective: "Learn to enforce absolute daily loss limits to protect capital from emotional escalation (tilt).",
  skillLevel: "advanced",
  orderIndex: 10,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
