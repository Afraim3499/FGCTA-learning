import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module89: AcademyModule = {
  moduleNumber: "8.9",
  level: 8,
  title: "Drawdown Auditing & Recovery",
  objective: "Identify tail events and equity curve stagnation, adjusting risk sizing rules to recover capital.",
  skillLevel: "expert",
  orderIndex: 9,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
