import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module714: AcademyModule = {
  moduleNumber: "7.14",
  level: 7,
  title: "Execution Errors & Recovery",
  objective: "Identify, classify, and recover from the 7 most common live execution errors.",
  skillLevel: "expert",
  orderIndex: 14,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
