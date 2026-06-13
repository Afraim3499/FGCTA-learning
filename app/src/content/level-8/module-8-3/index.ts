import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module83: AcademyModule = {
  moduleNumber: "8.3",
  level: 8,
  title: "Greed Cycles & Parabolic Growth Traps",
  objective: "Mitigate greed and retail FOMO during high-momentum market expansions.",
  skillLevel: "expert",
  orderIndex: 3,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
