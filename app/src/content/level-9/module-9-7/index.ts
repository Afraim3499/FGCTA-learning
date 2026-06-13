import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module97: AcademyModule = {
  moduleNumber: "9.7",
  level: 9,
  title: "Multi-Asset Capital Allocation",
  objective: "Dynamically allocate capital across Forex, Gold, and Crypto based on regime opportunity.",
  skillLevel: "expert",
  orderIndex: 7,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
