import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module59: AcademyModule = {
  moduleNumber: "5.9",
  level: 5,
  title: "The Asymmetric Gear Shift",
  objective: "Implement the drawdown circuit rules that protect your equity curve during statistical variance.",
  skillLevel: "advanced",
  orderIndex: 9,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
