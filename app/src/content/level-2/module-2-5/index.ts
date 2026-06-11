import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module25: AcademyModule = {
  moduleNumber: "2.5",
  level: 2,
  title: "Market Structure: Part 1",
  objective: "Identify primary swing highs and swing lows to establish structure.",
  skillLevel: "beginner",
  orderIndex: 5,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
