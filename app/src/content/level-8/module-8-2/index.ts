import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module82: AcademyModule = {
  moduleNumber: "8.2",
  level: 8,
  title: "Probability vs the Need to be Right",
  objective: "Reframe losses as operating costs and shift from predicting outcomes to managing expectancy.",
  skillLevel: "expert",
  orderIndex: 2,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
