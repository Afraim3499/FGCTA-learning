import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module49: AcademyModule = {
  moduleNumber: "4.9",
  level: 4,
  title: "London Close Killzone",
  objective: "Understand position liquidations and profit-taking targets during the 10:00 AM - 12:00 PM EST London Close.",
  skillLevel: "advanced",
  orderIndex: 9,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
