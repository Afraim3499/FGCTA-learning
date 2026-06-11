import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module310: AcademyModule = {
  moduleNumber: "3.10",
  level: 3,
  title: "Liquidity Voids",
  objective: "Differentiate rate/news gaps from volume imbalances and map void fill reversals.",
  skillLevel: "intermediate",
  orderIndex: 10,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
