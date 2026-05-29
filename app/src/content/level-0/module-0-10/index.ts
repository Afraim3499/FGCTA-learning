import { coreCards } from "./core";
import { AcademyModule } from "../../../types/curriculum";

export const module010: AcademyModule = {
  moduleNumber: "0.10",
  level: 0,
  title: "Forex Reading Lab: Pair Pressure, Sessions, News, and Verification",
  objective: "Teach learners how to combine pair pressure, session context, USD/DXY awareness, related-pair behavior, ADR caution, news pressure, and verification into a disciplined Forex reading.",
  skillLevel: "beginner",
  orderIndex: 10,
  tracks: {
    core: coreCards,
    forex: [],
    gold: [],
    crypto: []
  }
};

export * from "./core";
