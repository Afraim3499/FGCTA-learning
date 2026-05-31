import { coreCards } from "./core";
import { AcademyModule } from "../../../types/curriculum";

export const module013: AcademyModule = {
  moduleNumber: "0.13",
  level: 0,
  title: "Practice Discipline Lab: Simulation Mindset & Process Quality",
  objective: "Teach learners how to use simulation practice correctly by focusing on process quality, valid practice attempts, active stand-aside discipline, and outcome-bias control instead of random clicking or virtual profit/loss.",
  skillLevel: "beginner",
  orderIndex: 13,
  tracks: {
    core: coreCards,
    forex: [],
    gold: [],
    crypto: []
  }
};

export * from "./core";
