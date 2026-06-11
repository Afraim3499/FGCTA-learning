import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module43: AcademyModule = {
  moduleNumber: "4.3",
  level: 4,
  title: "The London Open",
  objective: "Identify Judas Swing manipulation sweeps at London open that form the LOD/HOD.",
  skillLevel: "advanced",
  orderIndex: 3,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
