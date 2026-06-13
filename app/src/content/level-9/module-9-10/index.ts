import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module910: AcademyModule = {
  moduleNumber: "9.10",
  level: 9,
  title: "Performance Drift Monitoring",
  objective: "Audit strategy metrics to identify performance drift and model style mismatch.",
  skillLevel: "expert",
  orderIndex: 10,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
