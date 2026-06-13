import { coreCards } from "./core";
import { forexCards } from "./forex";
import { goldCards } from "./gold";
import { cryptoCards } from "./crypto";
import { AcademyModule } from "../../../types/curriculum";

export const module913: AcademyModule = {
  moduleNumber: "9.13",
  level: 9,
  title: "Multi-Strategy Portfolio Construction",
  objective: "Assemble a multi-strategy playbook governed by a single institutional document.",
  skillLevel: "expert",
  orderIndex: 13,
  tracks: {
    core: coreCards,
    forex: forexCards,
    gold: goldCards,
    crypto: cryptoCards,
  },
};
