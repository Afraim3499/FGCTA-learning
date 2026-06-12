import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module31: AcademyModule = {
  moduleNumber: "3.1",
  level: 3,
  title: "Order Blocks Intro",
  objective: "Understand the true definition and structural footprint of institutional Order Blocks.",
  skillLevel: "intermediate",
  orderIndex: 1,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
