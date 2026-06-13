import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module62: AcademyModule = {
  moduleNumber: "6.2",
  level: 6,
  title: "HTF Narrative Anchors",
  objective: "Identify the Daily/Weekly narrative that anchors all scenario planning.",
  skillLevel: "advanced",
  orderIndex: 2,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
