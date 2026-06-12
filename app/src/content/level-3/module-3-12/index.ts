import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module312: AcademyModule = {
  moduleNumber: "3.12",
  level: 3,
  title: "Order flow Confluences",
  objective: "Stack order flow block and gap footprints with market structure filters.",
  skillLevel: "intermediate",
  orderIndex: 12,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
