import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module67: AcademyModule = {
  moduleNumber: "6.7",
  level: 6,
  title: "Identifying Structural Conflict",
  objective: "Recognize when adjacent timeframes display opposing MSS directions.",
  skillLevel: "advanced",
  orderIndex: 7,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
