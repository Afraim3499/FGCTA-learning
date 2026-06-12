import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module513: AcademyModule = {
  moduleNumber: "5.13",
  level: 5,
  title: "Correlation & Portfolio Risk",
  objective: "Understand how correlated assets duplicate risk, and how to manage aggregate account exposure.",
  skillLevel: "advanced",
  orderIndex: 13,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
