import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module26: AcademyModule = {
  moduleNumber: "2.6",
  level: 2,
  title: "Market Structure Shift (MSS)",
  objective: "Identify change of character (ChoCh) and displacement confirming a structure shift.",
  skillLevel: "beginner",
  orderIndex: 6,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards
  }
};
