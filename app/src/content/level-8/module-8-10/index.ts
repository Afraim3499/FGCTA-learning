import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module810: AcademyModule = {
  moduleNumber: "8.10",
  level: 8,
  title: "The Master Trading Plan Rulebook",
  objective: "Compile all strategy, risk, execution, and routine rules into a single governed document.",
  skillLevel: "expert",
  orderIndex: 10,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
