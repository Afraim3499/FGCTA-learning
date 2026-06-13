import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module68: AcademyModule = {
  moduleNumber: "6.8",
  level: 6,
  title: "Mid-Session Scenario Audits",
  objective: "Audit active positions and structural clues in real-time during live execution.",
  skillLevel: "advanced",
  orderIndex: 8,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
