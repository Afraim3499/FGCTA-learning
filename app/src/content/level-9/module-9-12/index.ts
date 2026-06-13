import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module912: AcademyModule = {
  moduleNumber: "9.12",
  level: 9,
  title: "The Live Execution Desk Setup",
  objective: "Establish a distraction-free physical and digital live execution workspace.",
  skillLevel: "expert",
  orderIndex: 12,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
