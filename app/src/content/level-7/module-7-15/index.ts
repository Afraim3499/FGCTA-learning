import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module715: AcademyModule = {
  moduleNumber: "7.15",
  level: 7,
  title: "Level 7 Review & Final Gate Prep",
  objective: "Synthesise the full execution OS into a comprehensive pre-gate final review.",
  skillLevel: "expert",
  orderIndex: 15,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
