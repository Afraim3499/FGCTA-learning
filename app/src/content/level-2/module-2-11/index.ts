import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module211: AcademyModule = {
  moduleNumber: "2.11",
  level: 2,
  title: "Boundary Areas (BSL/SSL)",
  objective: "Map buy-side and sell-side liquidity clusters where resting orders sit.",
  skillLevel: "beginner",
  orderIndex: 11,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
