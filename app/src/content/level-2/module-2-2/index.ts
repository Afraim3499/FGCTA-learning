import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module22: AcademyModule = {
  moduleNumber: "2.2",
  level: 2,
  title: "The Range Model",
  objective: "Model price movement inside dealing ranges using equilibrium and discount/premium arrays.",
  skillLevel: "intermediate",
  orderIndex: 2,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
