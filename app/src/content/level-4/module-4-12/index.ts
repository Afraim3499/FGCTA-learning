import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module412: AcademyModule = {
  moduleNumber: "4.12",
  level: 4,
  title: "Time & Price Confluences",
  objective: "Synthesize killzone clock windows with order blocks and Fair Value Gap anchors.",
  skillLevel: "advanced",
  orderIndex: 12,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
