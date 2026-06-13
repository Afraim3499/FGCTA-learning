import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module74: AcademyModule = {
  moduleNumber: "7.4",
  level: 7,
  title: "Reading Live Price Action",
  objective: "Interpret real-time candle formations and order flow within the active scenario framework.",
  skillLevel: "expert",
  orderIndex: 4,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
