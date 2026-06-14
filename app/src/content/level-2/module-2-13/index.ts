import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module213: AcademyModule = {
  moduleNumber: "2.13",
  level: 2,
  title: "HTF Anchors",
  objective: "Anchor key support and resistance zones on Daily and Weekly charts.",
  skillLevel: "intermediate",
  orderIndex: 13,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
