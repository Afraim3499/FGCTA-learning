import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module75: AcademyModule = {
  moduleNumber: "7.5",
  level: 7,
  title: "Managing Open Trades",
  objective: "Rules for monitoring, trailing, and exiting running positions without emotional interference.",
  skillLevel: "expert",
  orderIndex: 5,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
