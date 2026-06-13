import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module95: AcademyModule = {
  moduleNumber: "9.5",
  level: 9,
  title: "System Stress Testing & Black Swans",
  objective: "Build recovery protocols for extreme market disruptions and black swan events.",
  skillLevel: "expert",
  orderIndex: 5,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
