import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module710: AcademyModule = {
  moduleNumber: "7.10",
  level: 7,
  title: "Building Execution Habits",
  objective: "Convert reactive impulse trading into consistent pre-programmed execution responses.",
  skillLevel: "expert",
  orderIndex: 10,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
