import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module71: AcademyModule = {
  moduleNumber: "7.1",
  level: 7,
  title: "The Execution Operating System",
  objective: "Build a repeatable, emotion-free pre-session to post-session execution protocol.",
  skillLevel: "expert",
  orderIndex: 1,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
