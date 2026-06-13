import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module99: AcademyModule = {
  moduleNumber: "9.9",
  level: 9,
  title: "Dynamic Leverage Gating",
  objective: "Restrict or scale leverage parameters based on equity curve drawdown stages.",
  skillLevel: "expert",
  orderIndex: 9,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
