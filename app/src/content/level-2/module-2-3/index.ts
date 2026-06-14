import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module23: AcademyModule = {
  moduleNumber: "2.3",
  level: 2,
  title: "Market Structure: Swing Extremes",
  objective: "Identify and validate swing highs and swing lows to construct support and resistance zones.",
  skillLevel: "intermediate",
  orderIndex: 3,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
