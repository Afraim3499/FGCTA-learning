import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module46: AcademyModule = {
  moduleNumber: "4.6",
  level: 4,
  title: "Midnight Open Anchor",
  objective: "Utilize the 12:00 AM EST Midnight Opening Price as the primary algorithmic line of accumulation.",
  skillLevel: "advanced",
  orderIndex: 6,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
