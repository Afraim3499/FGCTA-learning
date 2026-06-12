import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module54: AcademyModule = {
  moduleNumber: "5.4",
  level: 5,
  title: "Scaling Out: Risk-Free Funding",
  objective: "Master the psychology and mathematics of taking partial profits at 1R to finance remaining trade risk.",
  skillLevel: "advanced",
  orderIndex: 4,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
