import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module52: AcademyModule = {
  moduleNumber: "5.2",
  level: 5,
  title: "Volatility-Adjusted Sizing",
  objective: "Understand how to adjust position size dynamically based on market volatility (ATR) rather than arbitrary pip limits.",
  skillLevel: "advanced",
  orderIndex: 2,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
